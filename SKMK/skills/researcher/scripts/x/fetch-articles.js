/**
 * Article Fetcher
 * Opens each filtered post URL and extracts full content
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const USER_DATA_DIR = path.join(__dirname, 'browser-data-brave');
const BRAVE_PATH = '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser';

/**
 * Extract full content from a single X post/article
 */
async function fetchArticleContent(page, url) {
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(2000);

    const content = await page.evaluate(() => {
      // Get the main tweet/article content
      const article = document.querySelector('article[data-testid="tweet"]');
      if (!article) return null;

      // Get full text (including "Show more" content)
      const textElements = article.querySelectorAll('[data-testid="tweetText"]');
      let fullText = '';
      textElements.forEach(el => {
        fullText += el.innerText + '\n\n';
      });

      // Get author info
      const authorName = article.querySelector('[data-testid="User-Name"]')?.innerText || '';

      // Get timestamp
      const timeElement = article.querySelector('time');
      const timestamp = timeElement?.getAttribute('datetime') || '';

      // Get quoted tweet if exists
      const quotedTweet = article.querySelector('[data-testid="quoteTweet"]');
      let quotedContent = null;
      if (quotedTweet) {
        const quotedText = quotedTweet.querySelector('[data-testid="tweetText"]')?.innerText || '';
        const quotedAuthor = quotedTweet.querySelector('[data-testid="User-Name"]')?.innerText || '';
        quotedContent = {
          text: quotedText,
          author: quotedAuthor.split('\n')[0] || ''
        };
      }

      // Check for X article (long-form)
      // X articles have a special structure with multiple paragraphs
      const articleContainer = document.querySelector('[data-testid="tweet"] [data-testid="card.wrapper"]');
      let articleContent = null;
      if (articleContainer) {
        // Try to find article title and description
        const cardTitle = articleContainer.querySelector('[data-testid="card.layoutLarge.media"]');
        const cardDesc = articleContainer.querySelector('[data-testid="card.layoutLarge.detail"]');
        if (cardTitle || cardDesc) {
          articleContent = {
            title: cardTitle?.innerText || '',
            description: cardDesc?.innerText || ''
          };
        }
      }

      // Get thread content (if this is part of a thread)
      const threadPosts = [];
      const conversationPosts = document.querySelectorAll('[data-testid="cellInnerDiv"] article[data-testid="tweet"]');
      if (conversationPosts.length > 1) {
        conversationPosts.forEach((post, index) => {
          const postText = post.querySelector('[data-testid="tweetText"]')?.innerText || '';
          const postAuthor = post.querySelector('[data-testid="User-Name"]')?.innerText || '';
          if (postText) {
            threadPosts.push({
              position: index + 1,
              author: postAuthor.split('\n')[0] || '',
              text: postText
            });
          }
        });
      }

      // Get any links in the tweet
      const links = [];
      article.querySelectorAll('a[href]').forEach(a => {
        const href = a.href;
        // Filter out X internal links
        if (href && !href.includes('x.com') && !href.includes('twitter.com') && href.startsWith('http')) {
          links.push(href);
        }
      });

      // Get engagement at time of fetch
      const getMetric = (testId) => {
        const el = article.querySelector(`[data-testid="${testId}"]`);
        return el?.innerText || '0';
      };

      return {
        fullText: fullText.trim(),
        author: authorName.split('\n')[0] || '',
        handle: authorName.split('\n')[1] || '',
        timestamp,
        quotedContent,
        articleContent,
        threadPosts: threadPosts.length > 1 ? threadPosts : null,
        externalLinks: links.length > 0 ? links : null,
        metrics: {
          likes: getMetric('like'),
          retweets: getMetric('retweet'),
          replies: getMetric('reply'),
          views: getMetric('views') || getMetric('analyticsButton')
        }
      };
    });

    return content;
  } catch (error) {
    console.error(`Error fetching ${url}:`, error.message);
    return null;
  }
}

/**
 * Fetch full content for multiple posts
 */
async function fetchAllArticles(posts, options = {}) {
  const { maxConcurrent = 1, progressCallback } = options;

  console.log('='.repeat(60));
  console.log('Article Fetcher');
  console.log('='.repeat(60));
  console.log(`\nFetching full content for ${posts.length} posts...`);

  const context = await chromium.launchPersistentContext(USER_DATA_DIR, {
    headless: false,
    executablePath: BRAVE_PATH,
    viewport: { width: 1280, height: 900 },
    args: ['--disable-blink-features=AutomationControlled']
  });

  const page = await context.newPage();
  const enrichedPosts = [];

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    console.log(`\n[${i + 1}/${posts.length}] Fetching: ${post.author || 'Unknown'}`);
    console.log(`   URL: ${post.url}`);

    const content = await fetchArticleContent(page, post.url);

    if (content) {
      enrichedPosts.push({
        ...post,
        enriched: {
          fullText: content.fullText,
          quotedContent: content.quotedContent,
          articleContent: content.articleContent,
          threadPosts: content.threadPosts,
          externalLinks: content.externalLinks,
          metricsAtFetch: content.metrics,
          fetchedAt: new Date().toISOString()
        }
      });
      console.log(`   ✓ Got ${content.fullText.length} chars`);
      if (content.threadPosts) console.log(`   ✓ Thread with ${content.threadPosts.length} posts`);
      if (content.externalLinks) console.log(`   ✓ ${content.externalLinks.length} external links`);
    } else {
      enrichedPosts.push({
        ...post,
        enriched: { error: 'Failed to fetch', fetchedAt: new Date().toISOString() }
      });
      console.log(`   ✗ Failed to fetch`);
    }

    // Small delay between fetches
    if (i < posts.length - 1) {
      await page.waitForTimeout(1000);
    }

    if (progressCallback) {
      progressCallback(i + 1, posts.length, post);
    }
  }

  await context.close();
  console.log(`\n✓ Fetched content for ${enrichedPosts.length} posts`);

  return enrichedPosts;
}

// CLI interface
if (require.main === module) {
  const inputFile = process.argv[2] || 'timeline-filtered.json';

  if (!fs.existsSync(inputFile)) {
    console.log('Usage: node fetch-articles.js [filtered-posts.json]');
    console.log('Run filter-posts.js first to generate filtered posts');
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(inputFile, 'utf8'));
  const posts = data.posts ? data.posts.map(p => p.post) : data;

  console.log(`Loaded ${posts.length} posts from ${inputFile}`);

  fetchAllArticles(posts).then(enriched => {
    const outputFile = 'timeline-enriched.json';
    fs.writeFileSync(outputFile, JSON.stringify(enriched, null, 2));
    console.log(`\nSaved enriched posts to: ${outputFile}`);
  }).catch(console.error);
}

module.exports = { fetchArticleContent, fetchAllArticles };
