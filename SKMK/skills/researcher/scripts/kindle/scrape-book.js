const { chromium } = require('playwright');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// ─── Config ──────────────────────────────────────────────────────────
const BRAVE_PATH = '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser';
const USER_DATA_DIR = path.join(__dirname, 'browser-data-brave');
const PAGE_DELAY = 2000;
const SAVE_SCREENSHOTS = true;
const OUTPUT_DIR = path.join(__dirname, 'output');
const SCREENSHOT_DIR = path.join(__dirname, 'screenshots');
const MAX_PAGES = 2000;
const STALE_THRESHOLD = 3; // consecutive identical screenshots = end of book

const DEBUG = process.argv.includes('--debug');

// ─── Helpers ─────────────────────────────────────────────────────────

function ensureDirs() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

function waitForEnter(prompt) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question(prompt, () => {
      rl.close();
      resolve();
    });
  });
}

function sanitizeFilename(name) {
  return name.replace(/[<>:"/\\|?*]+/g, '-').replace(/\s+/g, ' ').trim();
}

function hashBuffer(buf) {
  return crypto.createHash('md5').update(buf).digest('hex');
}

// ─── DOM debug dump ──────────────────────────────────────────────────

async function dumpDomStructure(page) {
  console.log('\n=== DEBUG: DOM Structure ===\n');

  const info = await page.evaluate(() => {
    function describeTree(el, depth = 0, maxDepth = 4) {
      if (depth > maxDepth || !el) return [];
      const lines = [];
      const tag = el.tagName?.toLowerCase() || '?';
      const id = el.id ? `#${el.id}` : '';
      const cls = el.className && typeof el.className === 'string'
        ? `.${el.className.split(/\s+/).filter(Boolean).join('.')}`
        : '';
      const role = el.getAttribute?.('role') ? `[role="${el.getAttribute('role')}"]` : '';
      const textLen = el.innerText?.length || 0;
      const indent = '  '.repeat(depth);
      lines.push(`${indent}<${tag}${id}${cls}${role}> (text: ${textLen} chars, children: ${el.children?.length || 0})`);
      if (el.children) {
        for (const child of el.children) {
          lines.push(...describeTree(child, depth + 1, maxDepth));
        }
      }
      return lines;
    }

    const tree = describeTree(document.body, 0, 5);

    // Also report iframes
    const iframes = [];
    document.querySelectorAll('iframe').forEach((iframe, i) => {
      let iframeInfo = `iframe[${i}] src=${iframe.src || '(none)'}`;
      try {
        const doc = iframe.contentDocument;
        if (doc?.body) {
          iframeInfo += ` bodyText=${doc.body.innerText?.length || 0} chars`;
          iframeInfo += `\n  children: ${describeTree(doc.body, 1, 3).join('\n')}`;
        }
      } catch (e) {
        iframeInfo += ' (cross-origin, cannot access)';
      }
      iframes.push(iframeInfo);
    });

    // Report canvases
    const canvases = [];
    document.querySelectorAll('canvas').forEach((c, i) => {
      canvases.push(`canvas[${i}] ${c.width}x${c.height} id=${c.id || '(none)'} class=${c.className || '(none)'}`);
    });

    // Report shadow DOMs
    const shadowHosts = [];
    document.querySelectorAll('*').forEach(el => {
      if (el.shadowRoot) {
        const tag = el.tagName.toLowerCase();
        const id = el.id ? `#${el.id}` : '';
        const textLen = el.shadowRoot.textContent?.length || 0;
        shadowHosts.push(`${tag}${id} shadowRoot (text: ${textLen} chars)`);
      }
    });

    return { tree: tree.slice(0, 100), iframes, canvases, shadowHosts };
  });

  console.log('DOM tree (first 100 lines):');
  info.tree.forEach(l => console.log(l));
  console.log(`\nIframes (${info.iframes.length}):`);
  info.iframes.forEach(l => console.log('  ' + l));
  console.log(`\nCanvases (${info.canvases.length}):`);
  info.canvases.forEach(l => console.log('  ' + l));
  console.log(`\nShadow DOM hosts (${info.shadowHosts.length}):`);
  info.shadowHosts.forEach(l => console.log('  ' + l));
  console.log('\n=== END DEBUG ===\n');
}

// ─── Text extraction ─────────────────────────────────────────────────

async function extractPageText(page) {
  const text = await page.evaluate(() => {
    // Strategy 1: Kindle reader frame containers (common selectors)
    const selectors = [
      '#kindle-reader',
      '#kp-notebook',
      '.kg-renderer',
      '#kr-renderer',
      '[class*="readerContainer"]',
      '#column_0',
      '#content-column-0',
      '#a-page',
      '[class*="kcrPage"]',
      '[class*="kcrContent"]',
    ];

    for (const sel of selectors) {
      const el = document.querySelector(sel);
      if (el) {
        const text = el.innerText?.trim();
        if (text && text.length > 10) return text;
      }
    }

    // Strategy 2: Look inside iframes
    const iframes = document.querySelectorAll('iframe');
    for (const iframe of iframes) {
      try {
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (doc) {
          const body = doc.body;
          if (body) {
            const text = body.innerText?.trim();
            if (text && text.length > 10) return text;
          }
        }
      } catch (e) {
        // cross-origin iframe, skip
      }
    }

    // Strategy 3: Collect all text spans that look like book content
    const textSpans = document.querySelectorAll(
      '[class*="text"], [class*="Text"], [class*="content"], [class*="Content"], ' +
      '[class*="paragraph"], [class*="Paragraph"], [class*="line"], [class*="Line"]'
    );
    const texts = [];
    for (const span of textSpans) {
      const t = span.innerText?.trim();
      if (t && t.length > 5) texts.push(t);
    }
    if (texts.length > 0) {
      const combined = [...new Set(texts)].join('\n');
      if (combined.length > 20) return combined;
    }

    // Strategy 4: Broad sweep - get all visible text from body,
    // filtering out obvious UI elements
    const uiSelectors = [
      'nav', 'header', 'footer', '[role="toolbar"]', '[role="navigation"]',
      '[class*="toolbar"]', '[class*="Toolbar"]', '[class*="menu"]', '[class*="Menu"]',
      '[class*="sidebar"]', '[class*="Sidebar"]', '[class*="header"]', '[class*="Header"]',
    ];
    const clone = document.body.cloneNode(true);
    for (const uiSel of uiSelectors) {
      clone.querySelectorAll(uiSel).forEach(el => el.remove());
    }
    const bodyText = clone.innerText?.trim();
    if (bodyText && bodyText.length > 50) return bodyText;

    return null;
  });

  if (DEBUG && text) {
    console.log(`\n  [debug] Extracted ${text.length} chars: "${text.substring(0, 120)}..."`);
  }

  return text;
}

async function isCanvasRendered(page) {
  return page.evaluate(() => {
    const canvases = document.querySelectorAll('canvas');
    for (const c of canvases) {
      if (c.width > 200 && c.height > 200) return true;
    }
    return false;
  });
}

// ─── Main ────────────────────────────────────────────────────────────

async function main() {
  ensureDirs();

  if (DEBUG) console.log('[debug mode enabled]\n');

  console.log('Launching Brave Browser...');
  const context = await chromium.launchPersistentContext(USER_DATA_DIR, {
    headless: false,
    executablePath: BRAVE_PATH,
    viewport: { width: 1280, height: 900 },
    args: ['--disable-blink-features=AutomationControlled'],
  });

  const page = await context.newPage();

  console.log('Navigating to Kindle Cloud Reader...');
  await page.goto('https://read.amazon.com', {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  });
  await page.waitForTimeout(3000);

  console.log('\n──────────────────────────────────────────────');
  console.log('  Kindle Cloud Reader Scraper');
  console.log('──────────────────────────────────────────────');
  console.log('  1. Open the book you want to scrape');
  console.log('  2. Navigate to the first page');
  console.log('  3. Press Enter here to begin scraping');
  console.log('──────────────────────────────────────────────\n');

  await waitForEnter('Press Enter to start scraping... ');

  // Debug: dump DOM structure on current page
  if (DEBUG) {
    await dumpDomStructure(page);
    await waitForEnter('Review DOM above. Press Enter to continue... ');
  }

  // Get book title from page
  const rawTitle = await page.evaluate(() => {
    const titleEl = document.querySelector(
      '[class*="title"], [class*="Title"], [data-testid*="title"]'
    );
    if (titleEl?.innerText?.trim()) return titleEl.innerText.trim();
    return document.title;
  });
  const bookTitle = sanitizeFilename(rawTitle || 'Untitled Book');
  console.log(`\nBook: ${bookTitle}`);
  console.log('Starting extraction...\n');

  const pages = [];
  let previousHash = '';
  let staleCount = 0;
  let textPages = 0;
  let screenshotOnlyPages = 0;

  for (let pageNum = 1; pageNum <= MAX_PAGES; pageNum++) {
    // Extract text
    const text = await extractPageText(page);
    const canvasBased = !text && await isCanvasRendered(page);

    // Take screenshot and hash it for end-of-book detection
    const screenshotPath = path.join(SCREENSHOT_DIR, `page-${String(pageNum).padStart(4, '0')}.png`);
    const screenshotBuf = await page.screenshot({ path: screenshotPath, fullPage: false });
    const currentHash = hashBuffer(screenshotBuf);

    // End-of-book detection: compare screenshot hashes
    if (currentHash === previousHash) {
      staleCount++;
      if (staleCount >= STALE_THRESHOLD) {
        // Remove the duplicate pages we already stored
        const dupsToRemove = staleCount - 1;
        pages.splice(pages.length - dupsToRemove, dupsToRemove);
        console.log(`\n\nEnd of book detected at page ${pageNum} (${STALE_THRESHOLD} identical screenshots)`);
        break;
      }
    } else {
      staleCount = 0;
    }
    previousHash = currentHash;

    // Store page
    if (text) {
      pages.push({ num: pageNum, text });
      textPages++;
    } else {
      const marker = canvasBased
        ? '[canvas-rendered page - see screenshot]'
        : '[no text extracted - see screenshot]';
      pages.push({ num: pageNum, text: marker });
      screenshotOnlyPages++;
    }

    // Progress
    process.stdout.write(`\r  Page ${pageNum} | Text extracted: ${textPages} | Text failed: ${screenshotOnlyPages}  `);

    // Navigate to next page
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(PAGE_DELAY);
  }

  // Write output markdown
  const outputPath = path.join(OUTPUT_DIR, `${bookTitle}.md`);
  const markdown = `# ${bookTitle}\n\n` +
    pages.map(p =>
      `---\n<!-- Page ${p.num} -->\n\n${p.text}`
    ).join('\n\n');

  fs.writeFileSync(outputPath, markdown, 'utf-8');

  // Summary
  console.log('\n\n──────────────────────────────────────────────');
  console.log('  Scraping complete');
  console.log('──────────────────────────────────────────────');
  console.log(`  Total pages:      ${pages.length}`);
  console.log(`  Text extracted:   ${textPages}`);
  console.log(`  Screenshot only:  ${screenshotOnlyPages}`);
  console.log(`  Output:           ${outputPath}`);
  console.log(`  Screenshots:      ${SCREENSHOT_DIR}/`);
  console.log('──────────────────────────────────────────────\n');

  await context.close();
}

main().catch((err) => {
  console.error('\nFatal error:', err.message);
  process.exit(1);
});
