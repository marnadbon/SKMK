/**
 * Process live likes - fetch full content and save to folder
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const USER_DATA_DIR = path.join(__dirname, 'browser-data-brave');
const BRAVE_PATH = '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser';
const LIVE_TRAINING_FILE = path.join(__dirname, 'live-training-data.json');
const CONTENT_DIR = path.join(__dirname, 'content');

async function fetchPostContent(page, url) {
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
    await page.waitForTimeout(2000);

    const content = await page.evaluate(() => {
      const article = document.querySelector('article[data-testid="tweet"]');
      if (!article) return null;

      const authorEl = article.querySelector('[data-testid="User-Name"]');
      const textEl = article.querySelector('[data-testid="tweetText"]');

      // Get thread posts
      const allArticles = document.querySelectorAll('article[data-testid="tweet"]');
      const threadPosts = [];
      allArticles.forEach(a => {
        const text = a.querySelector('[data-testid="tweetText"]')?.innerText || '';
        const author = a.querySelector('[data-testid="User-Name"]')?.innerText?.split('\n')[0] || '';
        if (text) threadPosts.push({ author, text });
      });

      return {
        author: authorEl?.innerText?.split('\n')[0] || '',
        handle: authorEl?.innerText?.split('\n')[1] || '',
        text: textEl?.innerText || '',
        threadPosts: threadPosts.length > 1 ? threadPosts : null,
        threadCount: threadPosts.length
      };
    });

    return content;
  } catch (e) {
    console.log(`   Error fetching: ${e.message}`);
    return null;
  }
}

function formatPostAsMarkdown(post, enriched) {
  const author = enriched?.author || post.author || 'Unknown';
  const handle = enriched?.handle || post.handle || '';
  const text = enriched?.text || post.text || '*[No text]*';

  let md = `---
author: "${author}"
handle: "${handle}"
url: ${post.url}
source: live-training-like
capturedAt: ${post.capturedAt}
---

# ${author} ${handle}

**Liked during live training**

---

## Content

${text}

`;

  if (enriched?.threadPosts && enriched.threadPosts.length > 1) {
    md += `\n---\n\n## Full Thread (${enriched.threadPosts.length} posts)\n\n`;
    enriched.threadPosts.forEach((tp, i) => {
      md += `### ${i + 1}. ${tp.author}\n\n${tp.text}\n\n`;
    });
  }

  md += `\n---\n\n**Original:** [View on X](${post.url})\n`;

  return md;
}

async function processLiveLikes(onlyNew = true) {
  if (!fs.existsSync(LIVE_TRAINING_FILE)) {
    console.log('No live-training-data.json found');
    return;
  }

  const data = JSON.parse(fs.readFileSync(LIVE_TRAINING_FILE, 'utf8'));
  let likes = data.likes || [];

  if (likes.length === 0) {
    console.log('No likes to process');
    return;
  }

  // Find already processed URLs
  const existingUrls = new Set();
  if (onlyNew && fs.existsSync(CONTENT_DIR)) {
    const items = fs.readdirSync(CONTENT_DIR);
    items.forEach(item => {
      const itemPath = path.join(CONTENT_DIR, item);
      if (item.includes('live-likes') && fs.statSync(itemPath).isDirectory()) {
        const files = fs.readdirSync(itemPath).filter(f => f.endsWith('.md'));
        files.forEach(file => {
          try {
            const content = fs.readFileSync(path.join(itemPath, file), 'utf8');
            const urlMatch = content.match(/url: (https:\/\/x\.com\/[^\s]+)/);
            if (urlMatch) existingUrls.add(urlMatch[1]);
          } catch (e) {}
        });
      }
    });

    const originalCount = likes.length;
    likes = likes.filter(l => !existingUrls.has(l.url));
    console.log(`Found ${existingUrls.size} already processed, ${likes.length} new likes to process\n`);

    if (likes.length === 0) {
      console.log('No new likes to process!');
      return;
    }
  }

  const date = new Date().toISOString().split('T')[0];
  const outputDir = path.join(CONTENT_DIR, `${date}-live-likes`);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('='.repeat(60));
  console.log('Processing Live Likes');
  console.log('='.repeat(60));
  console.log(`\nFetching full content for ${likes.length} liked posts...`);
  console.log(`Output folder: ${outputDir}\n`);

  const context = await chromium.launchPersistentContext(USER_DATA_DIR, {
    headless: false,
    executablePath: BRAVE_PATH,
    viewport: { width: 1280, height: 900 },
    args: ['--disable-blink-features=AutomationControlled']
  });

  const page = await context.newPage();
  const processed = [];

  for (let i = 0; i < likes.length; i++) {
    const post = likes[i];
    console.log(`[${i + 1}/${likes.length}] ${post.author || post.handle}`);
    console.log(`   ${post.url}`);

    const enriched = await fetchPostContent(page, post.url);

    if (enriched) {
      console.log(`   ✓ Got ${enriched.text.length} chars`);
      if (enriched.threadCount > 1) {
        console.log(`   ✓ Thread with ${enriched.threadCount} posts`);
      }
    }

    // Save individual file
    const postId = post.url.split('/').pop() || i;
    const author = (enriched?.author || post.author || 'Unknown').replace(/[<>:"/\\|?*]/g, '').slice(0, 50);
    const filename = `${author}-${postId}.md`;
    const filepath = path.join(outputDir, filename);

    const markdown = formatPostAsMarkdown(post, enriched);
    fs.writeFileSync(filepath, markdown);

    processed.push({ ...post, enriched, filename });

    // Small delay between requests
    await page.waitForTimeout(500);
  }

  await context.close();

  // Create digest for this folder
  let digestMd = `# Live Likes - ${date}\n\n`;
  digestMd += `**Total posts:** ${processed.length}\n`;
  digestMd += `**Processed:** ${new Date().toISOString()}\n\n`;
  digestMd += `---\n\n`;

  processed.forEach((post, i) => {
    const author = post.enriched?.author || post.author || 'Unknown';
    const handle = post.enriched?.handle || post.handle || '';
    const text = (post.enriched?.text || post.text || '').slice(0, 150);

    digestMd += `## ${i + 1}. ${author} ${handle}\n\n`;
    digestMd += `${text}${text.length >= 150 ? '...' : ''}\n\n`;
    digestMd += `[[${date}-live-likes/${post.filename.replace('.md', '')}|Read full post]]\n\n`;
    digestMd += `---\n\n`;
  });

  // Version the digest if it exists
  let digestFilename = `${date}-live-likes-digest.md`;
  let digestPath = path.join(CONTENT_DIR, digestFilename);
  if (fs.existsSync(digestPath)) {
    let version = 2;
    while (fs.existsSync(path.join(CONTENT_DIR, `${date}-live-likes-digest-v${version}.md`))) {
      version++;
    }
    digestFilename = `${date}-live-likes-digest-v${version}.md`;
    digestPath = path.join(CONTENT_DIR, digestFilename);
  }
  fs.writeFileSync(digestPath, digestMd);

  console.log(`\n✓ Saved ${processed.length} posts to: ${outputDir}`);
  console.log(`✓ Digest: ${digestPath}`);
}

if (require.main === module) {
  processLiveLikes().catch(console.error);
}

module.exports = { processLiveLikes };
