/**
 * Post Filtering Logic
 * Auto-learns from ratings.json + live-training-data.json
 * Run: npm run generate-rules to update filter-rules.json
 */

const fs = require('fs');
const path = require('path');

const RULES_FILE = path.join(__dirname, 'filter-rules.json');

// Load rules from generated file, or use defaults
let rules = null;
if (fs.existsSync(RULES_FILE)) {
  rules = JSON.parse(fs.readFileSync(RULES_FILE, 'utf8'));
  console.log(`Loaded filter rules (generated: ${rules.generatedAt})`);
  console.log(`  Training data: ${rules.dataSources.totalPositive} positive, ${rules.dataSources.totalNegative} negative examples`);
}

// Trusted authors - from training data (tiered system)
const TRUSTED_AUTHORS_TIER1 = rules?.trustedAuthors?.tier1?.authors || [
  '@aakashgupta', '@meta_alchemist', '@eyad_khrais', '@doodlestein', '@SherryYanJiang'
];
const TRUSTED_AUTHORS_TIER2 = rules?.trustedAuthors?.tier2?.authors || [
  '@ryancarson', '@mattpocockuk', '@koylanai', '@pmarca', '@dabit3', '@0xDesigner',
  '@milesdeutscher', '@jarrodwatts', '@damianplayer', '@hayesdev_', '@whotfiszackk', '@ginacostag_'
];
const TRUSTED_AUTHORS_TIER3 = rules?.trustedAuthors?.tier3?.authors || [
  '@businessbarista', '@ecomchigga', '@NoahEpstein_', '@lamxnt', '@EXM7777',
  '@avthars', '@themkmaker', '@floriandarroman', '@thejustinwelsh', '@FlorinPop17'
];
const TRUSTED_AUTHORS = [...TRUSTED_AUTHORS_TIER1, ...TRUSTED_AUTHORS_TIER2, ...TRUSTED_AUTHORS_TIER3];

// Skip authors - filter these out
const SKIP_AUTHORS = rules?.skipAuthors?.authors || [
  '@elonmusk', '@gmoneyNFT', '@Rainmaker1973', '@WatcherGuru',
  '@TheCinesthetic', '@alexhillman', '@historyrock_', '@sciencegirl'
];

// Strong include keywords - auto-pass
const STRONG_INCLUDE_KEYWORDS = rules?.strongIncludeKeywords?.keywords || [
  'claude code', 'claude', 'ralph loop', 'prompt engineering', 'obsidian',
  'solopreneur', 'bootstrapped', 'indie hacker', 'vibe coding', 'vibe marketing',
  'skills subagents', 'coding agent'
];

// Topics that trigger high interest - from training data or defaults
const HIGH_VALUE_TOPICS = rules?.includeKeywords?.keywords || [
  // From taste profile analysis
  'personal brand', 'creator economy', 'differentiation',
  'ai coding', 'automation', 'workflow', 'framework',
  'actionable', 'tutorial', 'design', 'building in public',
  'solo founder', 'direct response', 'copywriting',
  'newsletter', 'course', 'implementation', 'ship code',
  'prd', 'specs',

  // Additional high-value topics
  'cursor', 'copilot', 'aider',
  'prompt engineering', 'prompting', 'system prompt',
  'obsidian', 'playwright', 'puppeteer',
  'saas', 'micro-saas', 'revenue',
  'ui design', 'ux design', 'figma', 'framer', 'tailwind',
  'playbook', 'step-by-step', 'how i built'
];

// Topics to exclude - from training data or defaults
const EXCLUDE_TOPICS = rules?.excludeKeywords?.keywords || [
  // From taste profile (high skip rate)
  'crypto', 'bitcoin', 'trump', 'president', 'breaking',
  'nft', 'peptides', 'health hack', 'workout', 'fitness',

  // Additional off-topic
  'crypto price', 'eth price', 'airdrop', 'giveaway',
  'politics', 'election',

  // Low-value patterns
  'follow me', 'like and retweet', 'rt to win',
  'unpopular opinion', 'hot take',
  'no one talks about', 'nobody is talking',
];

// Exclude patterns - specific text patterns to filter
const EXCLUDE_PATTERNS_TEXT = rules?.excludePatterns?.patterns || [
  "tomorrow i'm sharing",
  "here's how i went from",
  "thread on how to",
  "10 tips",
  "5 ways to",
  "you won't believe",
  "this is how you",
  "i'm not a plumber",
  "years ago today"
];

// Generic/low-value phrases
const GENERIC_PATTERNS = [
  /^\d+ tips? (to|for)/i,
  /^\d+ ways to/i,
  /^\d+ things (you|every)/i,
  /stop doing this/i,
  /you need to know/i,
  /i made \$\d+k/i,
  /here's why/i,
  /the secret to/i,
  /most people don't/i,
];

/**
 * Parse engagement metrics (handles "1.2K", "15K", etc.)
 */
function parseMetric(value) {
  if (!value || value === '0') return 0;
  const str = value.toString().toLowerCase().trim();
  if (str.includes('k')) {
    return parseFloat(str.replace('k', '')) * 1000;
  }
  if (str.includes('m')) {
    return parseFloat(str.replace('m', '')) * 1000000;
  }
  return parseInt(str) || 0;
}

/**
 * Score a single post
 * Returns: { score: number, reasons: string[], include: boolean }
 */
function scorePost(post) {
  let score = 0;
  const reasons = [];
  const text = (post.text || '').toLowerCase();
  const author = (post.handle || '').toLowerCase();

  // === IMMEDIATE EXCLUSION ===

  // Skip authors - immediate rejection
  const isSkipAuthor = SKIP_AUTHORS.some(a => author.includes(a.toLowerCase().replace('@', '')));
  if (isSkipAuthor) {
    return { score: -100, reasons: ['skip author'], include: false, post };
  }

  // === STRONG INCLUDE SIGNALS ===

  // Strong include keywords - auto-boost
  let strongMatches = 0;
  for (const keyword of STRONG_INCLUDE_KEYWORDS) {
    if (text.includes(keyword.toLowerCase())) {
      strongMatches++;
      if (strongMatches <= 2) {
        score += 30;
        reasons.push(`strong keyword: ${keyword}`);
      }
    }
  }

  // === POSITIVE SIGNALS ===

  // Check for topic matches
  let topicMatches = 0;
  const matchedTopics = [];
  for (const topic of HIGH_VALUE_TOPICS) {
    if (text.includes(topic.toLowerCase())) {
      topicMatches++;
      matchedTopics.push(topic);
      if (topicMatches <= 3) {
        score += 15;
        reasons.push(`topic: ${topic}`);
      }
    }
  }

  // Trusted author bonus - tiered system
  const isTier1 = TRUSTED_AUTHORS_TIER1.some(a => author.includes(a.toLowerCase().replace('@', '')));
  const isTier2 = TRUSTED_AUTHORS_TIER2.some(a => author.includes(a.toLowerCase().replace('@', '')));
  const isTier3 = TRUSTED_AUTHORS_TIER3.some(a => author.includes(a.toLowerCase().replace('@', '')));

  if (isTier1) {
    score += 25;
    reasons.push('Tier 1 trusted author (always include)');
  } else if (isTier2) {
    score += 20;
    reasons.push('Tier 2 trusted author');
  } else if (isTier3) {
    score += 15;
    reasons.push('Tier 3 trusted author (live liked)');
  }

  // X Article / long-form content (+15)
  if (post.isArticle) {
    score += 15;
    reasons.push('X article (long-form)');
  }

  // Substantial text content (+10)
  if (post.text && post.text.length > 200) {
    score += 10;
    reasons.push('substantial text');
  }

  // Engagement (quality + engagement signal)
  const likes = parseMetric(post.metrics?.likes);
  const retweets = parseMetric(post.metrics?.retweets);

  if (likes > 1000) {
    score += 10;
    reasons.push('high engagement (1K+ likes)');
  } else if (likes > 500) {
    score += 5;
    reasons.push('good engagement (500+ likes)');
  }

  // Quality ratio: if retweets are close to likes, it's shareable content
  if (likes > 100 && retweets > likes * 0.1) {
    score += 5;
    reasons.push('high share ratio');
  }

  // Has media (slight bonus)
  if (post.hasMedia) {
    score += 3;
  }

  // === NEGATIVE SIGNALS ===

  // Exclude topics (-50)
  for (const topic of EXCLUDE_TOPICS) {
    if (text.includes(topic.toLowerCase())) {
      score -= 50;
      reasons.push(`excluded topic: ${topic}`);
      break;
    }
  }

  // Exclude text patterns (-40)
  for (const pattern of EXCLUDE_PATTERNS_TEXT) {
    if (text.includes(pattern.toLowerCase())) {
      score -= 40;
      reasons.push(`excluded pattern: ${pattern}`);
      break;
    }
  }

  // Generic regex patterns (-30)
  for (const pattern of GENERIC_PATTERNS) {
    if (pattern.test(text)) {
      score -= 30;
      reasons.push('generic pattern detected');
      break;
    }
  }

  // Retweet without added context (-10)
  if (post.isRetweet && (!post.text || post.text.length < 50)) {
    score -= 10;
    reasons.push('retweet without context');
  }

  // Very short text with no substance (-10)
  if (post.text && post.text.length < 50 && !post.isArticle && !post.hasMedia) {
    score -= 10;
    reasons.push('very short text');
  }

  // Calculate final include decision
  // Include if score >= 40 (adjusted threshold based on testing)
  const include = score >= 40;

  return {
    score,
    reasons,
    include,
    post
  };
}

/**
 * Filter and rank posts
 */
function filterPosts(posts, options = {}) {
  const {
    minScore = 40,  // Adjusted threshold based on testing
    maxResults = 20,
    includeReasons = true
  } = options;

  // Score all posts
  const scored = posts.map(post => scorePost(post));

  // Filter by minimum score
  const filtered = scored.filter(s => s.score >= minScore);

  // Sort by score (highest first)
  filtered.sort((a, b) => b.score - a.score);

  // Take top results
  const topPosts = filtered.slice(0, maxResults);

  // Summary
  const summary = {
    totalInput: posts.length,
    passedFilter: filtered.length,
    returned: topPosts.length,
    scoreRange: topPosts.length > 0
      ? { min: topPosts[topPosts.length-1].score, max: topPosts[0].score }
      : { min: 0, max: 0 }
  };

  return {
    posts: topPosts,
    summary
  };
}

/**
 * Format filtered posts for display/output
 */
function formatForOutput(filteredResult) {
  const { posts, summary } = filteredResult;

  let output = `# Daily X Digest\n\n`;
  output += `Generated: ${new Date().toISOString()}\n`;
  output += `Filtered: ${summary.returned} posts from ${summary.totalInput} (score threshold: 25+)\n\n`;
  output += `---\n\n`;

  posts.forEach((item, index) => {
    const { post, score, reasons } = item;

    output += `## ${index + 1}. ${post.author} ${post.handle}\n\n`;
    output += `**Score:** ${score} | `;
    output += `**Likes:** ${post.metrics?.likes || 0} | `;
    output += `**RTs:** ${post.metrics?.retweets || 0}\n\n`;

    if (post.text) {
      output += `${post.text}\n\n`;
    } else {
      output += `*[Media post - no text]*\n\n`;
    }

    output += `**Why included:** ${reasons.join(', ')}\n\n`;
    output += `**Link:** ${post.url}\n\n`;
    output += `---\n\n`;
  });

  return output;
}

// CLI interface
if (require.main === module) {

  const inputFile = process.argv[2] || 'timeline-raw.json';

  if (!fs.existsSync(inputFile)) {
    console.log('Usage: node filter-posts.js [input-file.json]');
    console.log('Run scrape-timeline.js first to generate timeline-raw.json');
    process.exit(1);
  }

  const posts = JSON.parse(fs.readFileSync(inputFile, 'utf8'));
  console.log(`Loaded ${posts.length} posts from ${inputFile}`);

  const result = filterPosts(posts, { maxResults: 20 });

  console.log('\n📊 Filter Results:');
  console.log(`   Input: ${result.summary.totalInput} posts`);
  console.log(`   Passed filter: ${result.summary.passedFilter}`);
  console.log(`   Top picks: ${result.summary.returned}`);
  console.log(`   Score range: ${result.summary.scoreRange.min} - ${result.summary.scoreRange.max}`);

  // Save filtered results
  const outputJson = 'timeline-filtered.json';
  fs.writeFileSync(outputJson, JSON.stringify(result, null, 2));
  console.log(`\nSaved filtered JSON to: ${outputJson}`);

  // Save markdown
  const outputMd = 'daily-digest.md';
  const markdown = formatForOutput(result);
  fs.writeFileSync(outputMd, markdown);
  console.log(`Saved markdown to: ${outputMd}`);
}

module.exports = {
  scorePost,
  filterPosts,
  formatForOutput,
  TRUSTED_AUTHORS,
  TRUSTED_AUTHORS_TIER1,
  TRUSTED_AUTHORS_TIER2,
  TRUSTED_AUTHORS_TIER3,
  SKIP_AUTHORS,
  STRONG_INCLUDE_KEYWORDS,
  HIGH_VALUE_TOPICS
};
