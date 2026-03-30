const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const USER_DATA_DIR = path.join(__dirname, 'browser-data-brave');
const BRAVE_PATH = '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser';
const OUTPUT_FILE = path.join(__dirname, 'timeline-raw.json');

// Configuration - adjust scrollCount for different test sizes
// ~5 posts per scroll, so: 200 scrolls = ~1000 posts, 500 scrolls = ~2500 posts
const CONFIG = {
  scrollCount: 500,       // Number of scroll iterations (~2500 posts)
  scrollDelay: 1200,      // Delay between scrolls (ms)
  maxPosts: 3000,         // Maximum posts to collect
  fetchArticleContent: true,
  // Estimated time: ~4-5 minutes for 1000 posts
};

async function scrapeTimeline() {
  console.log('='.repeat(60));
  console.log('X Timeline Scraper');
  console.log('='.repeat(60));
  console.log('\nLaunching Brave browser...');

  const context = await chromium.launchPersistentContext(USER_DATA_DIR, {
    headless: false,
    executablePath: BRAVE_PATH,
    viewport: { width: 1280, height: 900 },
    args: ['--disable-blink-features=AutomationControlled']
  });

  const page = await context.newPage();

  console.log('Navigating to X home timeline...');
  await page.goto('https://x.com/home', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(3000);

  // Check if logged in
  const needsLogin = await page.evaluate(() => {
    const url = window.location.href;
    return url.includes('login') || url.includes('flow');
  });

  if (needsLogin) {
    console.log('\n⚠️  Please log in to X in the browser window.');
    console.log('Waiting for login...\n');
    await page.waitForURL('**/home**', { timeout: 300000 });
    await page.waitForTimeout(3000);
  }

  console.log('On home timeline. Starting to collect posts...\n');

  const posts = [];
  const seenUrls = new Set();
  let scrollCount = 0;

  while (scrollCount < CONFIG.scrollCount && posts.length < CONFIG.maxPosts) {
    // Extract visible posts
    const newPosts = await page.evaluate(() => {
      const articles = document.querySelectorAll('article[data-testid="tweet"]');
      const results = [];

      for (const article of articles) {
        try {
          // Get author info
          const authorName = article.querySelector('[data-testid="User-Name"]')?.innerText || '';

          // Get tweet text
          const tweetText = article.querySelector('[data-testid="tweetText"]')?.innerText || '';

          // Get tweet URL
          const timeElement = article.querySelector('time');
          const tweetLink = timeElement?.closest('a')?.href || '';

          // Get timestamp
          const timestamp = timeElement?.getAttribute('datetime') || '';

          // Get engagement metrics
          const getMetricValue = (testId) => {
            const el = article.querySelector(`[data-testid="${testId}"]`);
            return el?.innerText || '0';
          };

          const likes = getMetricValue('like');
          const retweets = getMetricValue('retweet');
          const replies = getMetricValue('reply');

          // Check for media
          const hasImage = !!article.querySelector('img[src*="pbs.twimg.com/media"]');
          const hasVideo = !!article.querySelector('video');

          // Check if it's a retweet
          const isRetweet = !!article.querySelector('[data-testid="socialContext"]');

          // Check if it's an X article (has "Show more" or article card)
          const hasShowMore = !!article.querySelector('[data-testid="tweet-text-show-more-link"]');
          const hasArticleCard = !!article.querySelector('[data-testid="card.wrapper"]');
          const isArticle = hasShowMore || (hasArticleCard && tweetText.length < 100);

          // Check for quoted tweet
          const hasQuote = !!article.querySelector('[data-testid="quoteTweet"]');

          if (tweetLink) {
            results.push({
              url: tweetLink,
              author: authorName.split('\n')[0] || '',
              handle: authorName.split('\n')[1] || '',
              text: tweetText,
              timestamp,
              metrics: {
                likes,
                retweets,
                replies
              },
              hasMedia: hasImage || hasVideo,
              mediaType: hasVideo ? 'video' : (hasImage ? 'image' : 'none'),
              isRetweet,
              isArticle,
              hasQuote,
              scrapedAt: new Date().toISOString()
            });
          }
        } catch (e) {
          // Skip problematic posts
        }
      }
      return results;
    });

    // Add new posts (deduplicate)
    for (const post of newPosts) {
      if (!seenUrls.has(post.url)) {
        posts.push(post);
        seenUrls.add(post.url);
      }
    }

    scrollCount++;
    console.log(`Scroll ${scrollCount}/${CONFIG.scrollCount} - Collected ${posts.length} posts`);

    // Scroll down
    await page.evaluate(() => window.scrollBy(0, 800));
    await page.waitForTimeout(CONFIG.scrollDelay);
  }

  console.log(`\n✓ Finished! Collected ${posts.length} posts.`);

  // Save raw posts
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2));
  console.log(`Saved to: ${OUTPUT_FILE}`);

  // Quick stats
  const stats = {
    total: posts.length,
    withText: posts.filter(p => p.text.length > 20).length,
    articles: posts.filter(p => p.isArticle).length,
    retweets: posts.filter(p => p.isRetweet).length,
    withMedia: posts.filter(p => p.hasMedia).length
  };

  console.log('\n📊 Quick Stats:');
  console.log(`   Total posts: ${stats.total}`);
  console.log(`   With text: ${stats.withText}`);
  console.log(`   X Articles: ${stats.articles}`);
  console.log(`   Retweets: ${stats.retweets}`);
  console.log(`   With media: ${stats.withMedia}`);

  await context.close();
  console.log('\nBrowser closed.');

  return posts;
}

// Run if called directly
if (require.main === module) {
  scrapeTimeline().catch(console.error);
}

module.exports = { scrapeTimeline };
