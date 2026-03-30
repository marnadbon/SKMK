/**
 * Live Feed Training Tool
 * Opens X timeline and auto-captures posts as you scroll
 * Default = SKIP. Only press Y for posts you actually like.
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const USER_DATA_DIR = path.join(__dirname, 'browser-data-brave');
const BRAVE_PATH = '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser';
const TRAINING_FILE = path.join(__dirname, 'live-training-data.json');
const { saveLiveLikes } = require('./save-live-likes.js');

// Load existing training data
let trainingData = { likes: [], skips: [], session: [] };
if (fs.existsSync(TRAINING_FILE)) {
  trainingData = JSON.parse(fs.readFileSync(TRAINING_FILE, 'utf8'));
}

async function runLiveTraining() {
  console.log('='.repeat(60));
  console.log('Live Feed Training Session');
  console.log('='.repeat(60));
  console.log('\nAuto-captures posts as you scroll. Default = SKIP.');
  console.log('\nInstructions:');
  console.log('  1. Browser will open to your X timeline');
  console.log('  2. Scroll through your feed naturally');
  console.log('  3. Press Y + Enter ONLY for posts you actually like');
  console.log('  4. Everything else is auto-captured as SKIP');
  console.log('  5. Press Q to quit and save\n');

  const context = await chromium.launchPersistentContext(USER_DATA_DIR, {
    headless: false,
    executablePath: BRAVE_PATH,
    viewport: { width: 1400, height: 900 },
    args: ['--disable-blink-features=AutomationControlled']
  });

  const page = await context.newPage();
  await page.goto('https://x.com/home', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3000);

  console.log('Browser opened. Scroll through your feed!\n');
  console.log('Posts are auto-captured as SKIPs. Press Y only for posts you LIKE.\n');

  // Inject visual indicator to highlight the "target" post
  await page.addStyleTag({
    content: `
      .live-train-target {
        outline: 4px solid #22c55e !important;
        outline-offset: 4px !important;
        background-color: rgba(34, 197, 94, 0.05) !important;
        transition: outline 0.15s ease-out !important;
      }
      .live-train-indicator {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 99999;
        font-size: 12px;
        background: #22c55e;
        color: white;
        padding: 4px 12px;
        border-radius: 20px;
        font-family: system-ui, sans-serif;
        opacity: 0.9;
      }
    `
  });

  // Add indicator element and highlight logic
  await page.evaluate(() => {
    // Add the indicator label
    const indicator = document.createElement('div');
    indicator.className = 'live-train-indicator';
    indicator.textContent = '▶ Press Y to LIKE this post';
    document.body.appendChild(indicator);

    // Function to highlight the center post
    window.highlightCenterPost = () => {
      const articles = document.querySelectorAll('article[data-testid="tweet"]');
      const viewportCenter = window.innerHeight / 2;

      let bestArticle = null;
      let bestDistance = Infinity;

      // Remove previous highlight
      document.querySelectorAll('.live-train-target').forEach(el => {
        el.classList.remove('live-train-target');
      });

      for (const article of articles) {
        const rect = article.getBoundingClientRect();
        const articleCenter = rect.top + rect.height / 2;
        const distance = Math.abs(articleCenter - viewportCenter);

        if (distance < bestDistance) {
          bestDistance = distance;
          bestArticle = article;
        }
      }

      if (bestArticle) {
        bestArticle.classList.add('live-train-target');
      }
    };

    // Update highlight on scroll
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(window.highlightCenterPost, 50);
    }, { passive: true });

    // Initial highlight
    window.highlightCenterPost();
  });

  // Setup readline for keyboard input
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Enable raw mode for single keypress (no Enter needed)
  if (process.stdin.isTTY) {
    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);
  }

  let sessionLikes = [];
  let sessionSkips = [];
  let seenUrls = new Set();
  let likeCount = 0;
  let skipCount = 0;

  // Also load previously seen URLs to avoid duplicates
  trainingData.likes.forEach(p => seenUrls.add(p.url));
  trainingData.skips.forEach(p => seenUrls.add(p.url));

  const captureCurrentPost = async () => {
    // Get the most visible post on screen
    const post = await page.evaluate(() => {
      const articles = document.querySelectorAll('article[data-testid="tweet"]');

      // Find the article most in the center of the viewport
      let bestArticle = null;
      let bestDistance = Infinity;
      const viewportCenter = window.innerHeight / 2;

      for (const article of articles) {
        const rect = article.getBoundingClientRect();
        const articleCenter = rect.top + rect.height / 2;
        const distance = Math.abs(articleCenter - viewportCenter);

        if (distance < bestDistance) {
          bestDistance = distance;
          bestArticle = article;
        }
      }

      if (!bestArticle) return null;

      const authorName = bestArticle.querySelector('[data-testid="User-Name"]')?.innerText || '';
      const tweetText = bestArticle.querySelector('[data-testid="tweetText"]')?.innerText || '';
      const timeElement = bestArticle.querySelector('time');
      const tweetLink = timeElement?.closest('a')?.href || '';
      const timestamp = timeElement?.getAttribute('datetime') || '';

      return {
        url: tweetLink,
        author: authorName.split('\n')[0] || '',
        handle: authorName.split('\n')[1] || '',
        text: tweetText.slice(0, 500),
        timestamp,
        capturedAt: new Date().toISOString()
      };
    });

    return post;
  };

  const captureAllVisiblePosts = async () => {
    // Capture all posts currently visible on screen
    const posts = await page.evaluate(() => {
      const articles = document.querySelectorAll('article[data-testid="tweet"]');
      const results = [];

      for (const article of articles) {
        const rect = article.getBoundingClientRect();
        // Only capture posts that are reasonably visible
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const authorName = article.querySelector('[data-testid="User-Name"]')?.innerText || '';
          const tweetText = article.querySelector('[data-testid="tweetText"]')?.innerText || '';
          const timeElement = article.querySelector('time');
          const tweetLink = timeElement?.closest('a')?.href || '';
          const timestamp = timeElement?.getAttribute('datetime') || '';

          if (tweetLink) {
            results.push({
              url: tweetLink,
              author: authorName.split('\n')[0] || '',
              handle: authorName.split('\n')[1] || '',
              text: tweetText.slice(0, 500),
              timestamp,
              capturedAt: new Date().toISOString()
            });
          }
        }
      }

      return results;
    });

    return posts;
  };

  // Auto-capture posts periodically as user scrolls
  const captureInterval = setInterval(async () => {
    try {
      const posts = await captureAllVisiblePosts();
      for (const post of posts) {
        if (post.url && !seenUrls.has(post.url)) {
          seenUrls.add(post.url);
          sessionSkips.push({ ...post, verdict: 'skip' });
          skipCount++;
        }
      }
    } catch (e) {
      // Browser might be closed
    }
  }, 1500);

  const saveAndQuit = async () => {
    clearInterval(captureInterval);
    console.log('\n\nSaving training data...');

    trainingData.likes = [...trainingData.likes, ...sessionLikes];
    trainingData.skips = [...trainingData.skips, ...sessionSkips];
    trainingData.session.push({
      date: new Date().toISOString(),
      likes: likeCount,
      skips: skipCount,
      total: likeCount + skipCount
    });

    fs.writeFileSync(TRAINING_FILE, JSON.stringify(trainingData, null, 2));

    console.log(`\nSession Summary:`);
    console.log(`  Likes (Y pressed): ${likeCount}`);
    console.log(`  Skips (scrolled past): ${skipCount}`);
    console.log(`  Total: ${likeCount + skipCount}`);
    console.log(`\nTotal training data:`);
    console.log(`  Total likes: ${trainingData.likes.length}`);
    console.log(`  Total skips: ${trainingData.skips.length}`);
    console.log(`\nSaved to: ${TRAINING_FILE}`);

    // Also save likes to markdown
    saveLiveLikes();

    rl.close();
    if (process.stdin.isTTY) {
      process.stdin.setRawMode(false);
    }
    await context.close();
    process.exit(0);
  };

  // Handle single keypress (no Enter needed!)
  process.stdin.on('keypress', async (str, key) => {
    if (key.name === 'q' || (key.ctrl && key.name === 'c')) {
      await saveAndQuit();
      return;
    }

    if (key.name === 'y') {
      const post = await captureCurrentPost();

      if (post && post.url) {
        // Remove from skips if it was auto-captured
        sessionSkips = sessionSkips.filter(p => p.url !== post.url);
        if (seenUrls.has(post.url)) {
          skipCount--;
        }

        // Add to likes
        if (!sessionLikes.find(p => p.url === post.url)) {
          sessionLikes.push({ ...post, verdict: 'like' });
          likeCount++;
          seenUrls.add(post.url);
          console.log(`✓ LIKE: ${post.handle} - "${post.text.slice(0, 60)}..."`);
        }
      } else {
        console.log('Could not capture post. Scroll so the post is centered.');
      }
    }
  });

  console.log('Scroll your feed. Press Y for posts you like. Press Q to quit.\n');
  console.log(`[Auto-capturing skips... Likes: ${likeCount} | Skips: ${skipCount}]`);

  // Status update every 10 seconds
  setInterval(() => {
    process.stdout.write(`\r[Likes: ${likeCount} | Skips: ${skipCount}]                    `);
  }, 5000);
}

// Run
if (require.main === module) {
  runLiveTraining().catch(console.error);
}

module.exports = { runLiveTraining };
