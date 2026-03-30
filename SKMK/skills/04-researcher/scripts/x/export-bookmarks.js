const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const USER_DATA_DIR = path.join(__dirname, 'browser-data-brave');
const OUTPUT_FILE = path.join(__dirname, 'bookmarks.json');
const BRAVE_PATH = '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser';

async function exportBookmarks() {
  console.log('Launching Brave browser with persistent context...');
  console.log('User data stored at:', USER_DATA_DIR);

  const context = await chromium.launchPersistentContext(USER_DATA_DIR, {
    headless: false,
    executablePath: BRAVE_PATH,
    viewport: { width: 1280, height: 900 },
    args: [
      '--disable-blink-features=AutomationControlled',
      '--no-sandbox'
    ]
  });

  const page = await context.newPage();

  // Navigate to X bookmarks
  console.log('Navigating to X bookmarks...');
  await page.goto('https://x.com/i/bookmarks', { waitUntil: 'domcontentloaded', timeout: 60000 });

  // Wait a bit for page to settle
  await page.waitForTimeout(3000);

  // Check if we need to login by looking for login indicators
  const needsLogin = await page.evaluate(() => {
    const url = window.location.href;
    const hasLoginForm = !!document.querySelector('input[autocomplete="username"]');
    const hasLoginText = document.body.innerText.includes('Sign in') ||
                         document.body.innerText.includes('Log in') ||
                         document.body.innerText.includes('Inloggen');
    const onLoginPage = url.includes('login') || url.includes('flow') || url.includes('i/flow');
    return hasLoginForm || onLoginPage || (hasLoginText && !url.includes('/i/bookmarks'));
  });

  if (needsLogin) {
    console.log('\n' + '='.repeat(60));
    console.log('⚠️  LOGIN REQUIRED');
    console.log('='.repeat(60));
    console.log('Please log in to X in the browser window.');
    console.log('TIP: Use email/password login, NOT "Sign in with Google"');
    console.log('The script will wait and continue automatically after login.');
    console.log('='.repeat(60) + '\n');

    // Wait for user to log in - check periodically for bookmarks page
    let loggedIn = false;
    while (!loggedIn) {
      await page.waitForTimeout(2000);
      const currentUrl = page.url();
      loggedIn = currentUrl.includes('/i/bookmarks') && !currentUrl.includes('flow');

      if (!loggedIn) {
        // Also check if we can see tweets (means we're logged in and on bookmarks)
        const hasTweets = await page.evaluate(() => {
          return document.querySelectorAll('article[data-testid="tweet"]').length > 0;
        });
        if (hasTweets) loggedIn = true;
      }
    }

    console.log('✓ Login successful! Continuing...\n');
    await page.waitForTimeout(2000);
  }

  console.log('On bookmarks page. Starting to collect posts...');

  const bookmarks = [];
  let previousCount = 0;
  let noNewPostsCount = 0;
  const MAX_NO_NEW_POSTS = 5;

  while (noNewPostsCount < MAX_NO_NEW_POSTS) {
    // Extract visible tweets
    const tweets = await page.evaluate(() => {
      const articles = document.querySelectorAll('article[data-testid="tweet"]');
      const results = [];

      for (const article of articles) {
        try {
          // Get author info
          const authorLink = article.querySelector('a[href*="/status/"]');
          const authorName = article.querySelector('[data-testid="User-Name"]')?.innerText || '';

          // Get tweet text
          const tweetText = article.querySelector('[data-testid="tweetText"]')?.innerText || '';

          // Get tweet URL
          const timeElement = article.querySelector('time');
          const tweetLink = timeElement?.closest('a')?.href || '';

          // Get timestamp
          const timestamp = timeElement?.getAttribute('datetime') || '';

          // Get engagement metrics
          const likes = article.querySelector('[data-testid="like"]')?.innerText || '0';
          const retweets = article.querySelector('[data-testid="retweet"]')?.innerText || '0';
          const replies = article.querySelector('[data-testid="reply"]')?.innerText || '0';

          // Get media
          const hasImage = !!article.querySelector('img[src*="pbs.twimg.com/media"]');
          const hasVideo = !!article.querySelector('video');

          if (tweetLink) {
            results.push({
              url: tweetLink,
              author: authorName.split('\n')[0] || '',
              handle: authorName.split('\n')[1] || '',
              text: tweetText,
              timestamp,
              metrics: { likes, retweets, replies },
              hasMedia: hasImage || hasVideo,
              mediaType: hasVideo ? 'video' : (hasImage ? 'image' : 'none')
            });
          }
        } catch (e) {
          // Skip problematic tweets
        }
      }
      return results;
    });

    // Add new tweets (deduplicate by URL)
    const existingUrls = new Set(bookmarks.map(b => b.url));
    for (const tweet of tweets) {
      if (!existingUrls.has(tweet.url)) {
        bookmarks.push(tweet);
        existingUrls.add(tweet.url);
      }
    }

    console.log(`Collected ${bookmarks.length} bookmarks so far...`);

    // Check if we got new posts
    if (bookmarks.length === previousCount) {
      noNewPostsCount++;
    } else {
      noNewPostsCount = 0;
    }
    previousCount = bookmarks.length;

    // Scroll down to load more
    await page.evaluate(() => window.scrollBy(0, 800));
    await page.waitForTimeout(1500);
  }

  console.log(`\nFinished! Collected ${bookmarks.length} total bookmarks.`);

  // Save to file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(bookmarks, null, 2));
  console.log(`Saved to: ${OUTPUT_FILE}`);

  // Also create a markdown version
  const markdownOutput = path.join(__dirname, 'bookmarks.md');
  let markdown = `# X Bookmarks Export\n\nExported: ${new Date().toISOString()}\nTotal: ${bookmarks.length} bookmarks\n\n---\n\n`;

  for (const bookmark of bookmarks) {
    markdown += `## ${bookmark.author} ${bookmark.handle}\n\n`;
    markdown += `${bookmark.text}\n\n`;
    markdown += `- **URL:** ${bookmark.url}\n`;
    markdown += `- **Date:** ${bookmark.timestamp}\n`;
    markdown += `- **Engagement:** ${bookmark.metrics.likes} likes, ${bookmark.metrics.retweets} RTs, ${bookmark.metrics.replies} replies\n`;
    if (bookmark.hasMedia) markdown += `- **Media:** ${bookmark.mediaType}\n`;
    markdown += `\n---\n\n`;
  }

  fs.writeFileSync(markdownOutput, markdown);
  console.log(`Markdown saved to: ${markdownOutput}`);

  await context.close();
  console.log('\nDone! Browser closed.');
}

exportBookmarks().catch(console.error);
