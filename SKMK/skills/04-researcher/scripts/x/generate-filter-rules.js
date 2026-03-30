/**
 * Auto-generate filter rules from training data
 * Reads: ratings.json (bookmarks) + live-training-data.json (feed)
 * Outputs: filter-rules.json
 */

const fs = require('fs');
const path = require('path');

const RATINGS_FILE = path.join(__dirname, 'ratings.json');
const LIVE_TRAINING_FILE = path.join(__dirname, 'live-training-data.json');
const OUTPUT_FILE = path.join(__dirname, 'filter-rules.json');

// Common words to ignore when extracting topics
const STOP_WORDS = new Set([
  'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with',
  'by', 'from', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had',
  'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'must',
  'this', 'that', 'these', 'those', 'it', 'its', 'i', 'you', 'he', 'she', 'we', 'they',
  'my', 'your', 'his', 'her', 'our', 'their', 'what', 'which', 'who', 'when', 'where',
  'why', 'how', 'all', 'each', 'every', 'both', 'few', 'more', 'most', 'other', 'some',
  'such', 'no', 'not', 'only', 'same', 'so', 'than', 'too', 'very', 'just', 'can',
  'about', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'between',
  'under', 'again', 'further', 'then', 'once', 'here', 'there', 'any', 'if', 'because',
  'as', 'until', 'while', 'up', 'down', 'out', 'off', 'over', 'own', 'get', 'got',
  'like', 'know', 'think', 'make', 'go', 'see', 'come', 'want', 'use', 'find', 'give',
  'tell', 'work', 'way', 'even', 'new', 'now', 'look', 'also', 'back', 'first', 'well',
  'many', 'much', 'one', 'two', 'time', 'year', 'take', 'people', 'good', 'day', 'made',
  'said', 'really', 'going', 'thing', 'things', 'need', 'still', 'something', 'lot',
  'dont', "don't", 'ive', "i've", 'im', "i'm", 'thats', "that's", 'youre', "you're",
  'doesnt', "doesn't", 'cant', "can't", 'wont', "won't", 'didnt', "didn't", 'isnt', "isn't",
  'http', 'https', 'com', 'www', 'twitter', 'x', 'just', 'us', 'me', 'let', 'say'
]);

/**
 * Extract words and bigrams from text
 */
function extractTerms(text) {
  if (!text) return [];

  const cleaned = text.toLowerCase()
    .replace(/https?:\/\/\S+/g, '') // Remove URLs
    .replace(/[^\w\s]/g, ' ')        // Remove punctuation
    .replace(/\s+/g, ' ')            // Normalize whitespace
    .trim();

  const words = cleaned.split(' ').filter(w =>
    w.length > 2 &&
    !STOP_WORDS.has(w) &&
    !/^\d+$/.test(w)
  );

  // Extract single words and bigrams
  const terms = [...words];

  // Add bigrams (two-word phrases)
  for (let i = 0; i < words.length - 1; i++) {
    terms.push(`${words[i]} ${words[i+1]}`);
  }

  return terms;
}

/**
 * Extract handle from author string
 */
function extractHandle(author) {
  if (!author) return null;
  const match = author.match(/@[\w]+/);
  return match ? match[0].toLowerCase() : null;
}

/**
 * Count term frequencies
 */
function countTerms(posts) {
  const counts = {};
  for (const post of posts) {
    const terms = extractTerms(post.text);
    const seen = new Set(); // Count each term once per post
    for (const term of terms) {
      if (!seen.has(term)) {
        counts[term] = (counts[term] || 0) + 1;
        seen.add(term);
      }
    }
  }
  return counts;
}

/**
 * Count author frequencies
 */
function countAuthors(posts) {
  const counts = {};
  for (const post of posts) {
    const handle = extractHandle(post.handle || post.author);
    if (handle) {
      counts[handle] = (counts[handle] || 0) + 1;
    }
  }
  return counts;
}

/**
 * Get top N items from counts object
 */
function topN(counts, n = 20, minCount = 2) {
  return Object.entries(counts)
    .filter(([_, count]) => count >= minCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([term, count]) => ({ term, count }));
}

/**
 * Find terms that appear more in positive than negative
 */
function findDistinctiveTerms(positiveCounts, negativeCounts, minCount = 2) {
  const positiveTerms = [];
  const negativeTerms = [];

  // Find terms more common in positive posts
  for (const [term, posCount] of Object.entries(positiveCounts)) {
    if (posCount < minCount) continue;
    const negCount = negativeCounts[term] || 0;
    const ratio = posCount / (negCount + 0.5); // Add smoothing
    if (ratio > 2 && posCount >= 2) {
      positiveTerms.push({ term, posCount, negCount, ratio });
    }
  }

  // Find terms more common in negative posts
  for (const [term, negCount] of Object.entries(negativeCounts)) {
    if (negCount < minCount) continue;
    const posCount = positiveCounts[term] || 0;
    const ratio = negCount / (posCount + 0.5);
    if (ratio > 2 && negCount >= 2) {
      negativeTerms.push({ term, posCount, negCount, ratio });
    }
  }

  positiveTerms.sort((a, b) => b.ratio - a.ratio);
  negativeTerms.sort((a, b) => b.ratio - a.ratio);

  return { positiveTerms, negativeTerms };
}

/**
 * Main: Generate filter rules
 */
function generateRules() {
  console.log('='.repeat(60));
  console.log('Generating Filter Rules from Training Data');
  console.log('='.repeat(60));

  // Load ratings (bookmarks) - it's an object keyed by URL
  let ratings = [];
  if (fs.existsSync(RATINGS_FILE)) {
    const ratingsObj = JSON.parse(fs.readFileSync(RATINGS_FILE, 'utf8'));
    ratings = Object.values(ratingsObj);
    console.log(`\nLoaded ${ratings.length} bookmark ratings`);
  } else {
    console.log('\nNo ratings.json found');
  }

  // Load live training data
  let liveData = { likes: [], skips: [] };
  if (fs.existsSync(LIVE_TRAINING_FILE)) {
    liveData = JSON.parse(fs.readFileSync(LIVE_TRAINING_FILE, 'utf8'));
    console.log(`Loaded ${liveData.likes.length} live likes, ${liveData.skips.length} live skips`);
  } else {
    console.log('No live-training-data.json found');
  }

  // Separate positive vs negative from bookmarks
  const positive5Star = ratings.filter(r => r.rating === 5);
  const positive4Star = ratings.filter(r => r.rating === 4);
  const negative2Star = ratings.filter(r => r.rating <= 2);
  const neutral3Star = ratings.filter(r => r.rating === 3);

  console.log(`\nBookmark breakdown:`);
  console.log(`  5-star: ${positive5Star.length}`);
  console.log(`  4-star: ${positive4Star.length}`);
  console.log(`  3-star: ${neutral3Star.length}`);
  console.log(`  2-star or less: ${negative2Star.length}`);

  // Combine positive signals (5-star bookmarks + live likes)
  const allPositive = [
    ...positive5Star.map(r => ({ text: r.text, handle: r.author, author: r.author })),
    ...positive4Star.map(r => ({ text: r.text, handle: r.author, author: r.author })),
    ...liveData.likes
  ];

  // Combine negative signals (2-star bookmarks + live skips)
  const allNegative = [
    ...negative2Star.map(r => ({ text: r.text, handle: r.author, author: r.author })),
    ...liveData.skips
  ];

  console.log(`\nCombined training data:`);
  console.log(`  Positive examples: ${allPositive.length}`);
  console.log(`  Negative examples: ${allNegative.length}`);

  // Count terms in positive vs negative
  const positiveCounts = countTerms(allPositive);
  const negativeCounts = countTerms(allNegative);

  // Find distinctive terms
  const { positiveTerms, negativeTerms } = findDistinctiveTerms(positiveCounts, negativeCounts);

  // Count authors
  const positiveAuthors = countAuthors(allPositive);
  const negativeAuthors = countAuthors(allNegative);

  // Find trusted authors (appear multiple times in positive, rarely in negative)
  const trustedAuthors = [];
  for (const [author, posCount] of Object.entries(positiveAuthors)) {
    const negCount = negativeAuthors[author] || 0;
    if (posCount >= 2 && posCount > negCount * 2) {
      trustedAuthors.push({ author, posCount, negCount });
    }
  }
  trustedAuthors.sort((a, b) => b.posCount - a.posCount);

  // Build the rules object
  const rules = {
    generatedAt: new Date().toISOString(),
    dataSources: {
      bookmarkRatings: ratings.length,
      liveLikes: liveData.likes.length,
      liveSkips: liveData.skips.length,
      totalPositive: allPositive.length,
      totalNegative: allNegative.length
    },
    trustedAuthors: trustedAuthors.slice(0, 30).map(a => a.author),
    highValueTopics: positiveTerms.slice(0, 50).map(t => t.term),
    excludeTopics: negativeTerms.slice(0, 30).map(t => t.term),
    // Include detailed stats for debugging
    _debug: {
      trustedAuthorsDetail: trustedAuthors.slice(0, 30),
      topPositiveTerms: positiveTerms.slice(0, 50),
      topNegativeTerms: negativeTerms.slice(0, 30)
    }
  };

  // Save rules
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(rules, null, 2));

  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('Generated Rules Summary');
  console.log('='.repeat(60));

  console.log(`\n🏆 TRUSTED AUTHORS (${rules.trustedAuthors.length}):`);
  rules.trustedAuthors.slice(0, 15).forEach(a => console.log(`  ${a}`));
  if (rules.trustedAuthors.length > 15) console.log(`  ... and ${rules.trustedAuthors.length - 15} more`);

  console.log(`\n✅ HIGH-VALUE TOPICS (${rules.highValueTopics.length}):`);
  rules.highValueTopics.slice(0, 20).forEach(t => console.log(`  "${t}"`));
  if (rules.highValueTopics.length > 20) console.log(`  ... and ${rules.highValueTopics.length - 20} more`);

  console.log(`\n❌ EXCLUDE TOPICS (${rules.excludeTopics.length}):`);
  rules.excludeTopics.slice(0, 15).forEach(t => console.log(`  "${t}"`));
  if (rules.excludeTopics.length > 15) console.log(`  ... and ${rules.excludeTopics.length - 15} more`);

  console.log(`\n✨ Saved to: ${OUTPUT_FILE}`);
  console.log('\nRun this again after more ratings/training to improve the rules!');

  return rules;
}

// CLI
if (require.main === module) {
  generateRules();
}

module.exports = { generateRules };
