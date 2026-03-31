/**
 * Obsidian Output Generator
 * Creates individual markdown files for each post + daily digest
 */

const fs = require('fs');
const path = require('path');

// Configuration
const OBSIDIAN_VAULT = '/Volumes/abundance/SKILLS/Research/X/content';

/**
 * Sanitize filename
 */
function sanitizeFilename(name) {
  return name
    .replace(/[<>:"/\\|?*]/g, '')
    .replace(/\s+/g, '-')
    .slice(0, 100);
}

/**
 * Format a single post as markdown
 */
function formatPostAsMarkdown(post, score, reasons) {
  const enriched = post.enriched || {};
  const text = enriched.fullText || post.text || '*[No text content]*';
  const author = post.author || 'Unknown';
  const handle = post.handle || '';
  const date = post.timestamp ? new Date(post.timestamp).toLocaleDateString() : 'Unknown date';

  let md = `---
author: "${author}"
handle: "${handle}"
date: ${post.timestamp || ''}
url: ${post.url}
score: ${score || 0}
tags: [x-research, ${reasons ? reasons.map(r => r.split(':')[0].trim().replace(/\s+/g, '-')).join(', ') : ''}]
fetched: ${new Date().toISOString()}
---

# ${author} ${handle}

**Date:** ${date}
**Score:** ${score || 'N/A'} | **Likes:** ${post.metrics?.likes || 0} | **RTs:** ${post.metrics?.retweets || 0}

---

## Content

${text}

`;

  // Add thread content if available
  if (enriched.threadPosts && enriched.threadPosts.length > 1) {
    md += `\n---\n\n## Full Thread (${enriched.threadPosts.length} posts)\n\n`;
    enriched.threadPosts.forEach((tp, i) => {
      md += `### ${i + 1}. ${tp.author}\n\n${tp.text}\n\n`;
    });
  }

  // Add quoted tweet if available
  if (enriched.quotedContent) {
    md += `\n---\n\n## Quoted Tweet\n\n`;
    md += `**${enriched.quotedContent.author}:**\n\n${enriched.quotedContent.text}\n\n`;
  }

  // Add article content if available
  if (enriched.articleContent) {
    md += `\n---\n\n## Article Preview\n\n`;
    if (enriched.articleContent.title) md += `**${enriched.articleContent.title}**\n\n`;
    if (enriched.articleContent.description) md += `${enriched.articleContent.description}\n\n`;
  }

  // Add external links
  if (enriched.externalLinks && enriched.externalLinks.length > 0) {
    md += `\n---\n\n## External Links\n\n`;
    enriched.externalLinks.forEach(link => {
      md += `- ${link}\n`;
    });
  }

  // Add metadata footer
  md += `\n---\n\n## Metadata\n\n`;
  md += `- **Why included:** ${reasons ? reasons.join(', ') : 'N/A'}\n`;
  md += `- **Original URL:** [View on X](${post.url})\n`;
  md += `- **Fetched:** ${new Date().toISOString()}\n`;

  return md;
}

/**
 * Generate daily digest summary
 */
function generateDigest(posts, date) {
  const dateStr = date || new Date().toISOString().split('T')[0];

  let md = `---
date: ${dateStr}
type: daily-digest
posts: ${posts.length}
---

# X Research Digest - ${dateStr}

**Posts collected:** ${posts.length}
**Generated:** ${new Date().toISOString()}

---

## Today's Highlights

`;

  posts.forEach((item, index) => {
    const post = item.post || item;
    const score = item.score || 0;
    const author = post.author || 'Unknown';
    const handle = post.handle || '';
    const text = (post.enriched?.fullText || post.text || '').slice(0, 200);

    md += `### ${index + 1}. ${author} ${handle}\n\n`;
    md += `**Score:** ${score} | `;
    md += `**Likes:** ${post.metrics?.likes || 0}\n\n`;
    md += `${text}${text.length >= 200 ? '...' : ''}\n\n`;
    md += `[[${dateStr}/${sanitizeFilename(author + '-' + (post.url.split('/').pop() || index))}|Read full post]]\n\n`;
    md += `---\n\n`;
  });

  return md;
}

/**
 * Save posts to Obsidian vault
 */
function saveToObsidian(posts, options = {}) {
  const {
    vaultPath = OBSIDIAN_VAULT,
    date = new Date().toISOString().split('T')[0]
  } = options;

  // Create date folder
  const dateFolder = path.join(vaultPath, date);
  if (!fs.existsSync(dateFolder)) {
    fs.mkdirSync(dateFolder, { recursive: true });
  }

  console.log('='.repeat(60));
  console.log('Obsidian Output Generator');
  console.log('='.repeat(60));
  console.log(`\nSaving ${posts.length} posts to: ${dateFolder}`);

  const savedFiles = [];

  // Save individual post files
  posts.forEach((item, index) => {
    const post = item.post || item;
    const score = item.score || 0;
    const reasons = item.reasons || [];

    const author = post.author || 'Unknown';
    const postId = post.url.split('/').pop() || index;
    const filename = sanitizeFilename(`${author}-${postId}`) + '.md';
    const filepath = path.join(dateFolder, filename);

    const markdown = formatPostAsMarkdown(post, score, reasons);
    fs.writeFileSync(filepath, markdown);
    savedFiles.push(filepath);

    console.log(`  ✓ ${filename}`);
  });

  // Save daily digest (with versioning if file exists)
  let digestFilename = `${date}-digest.md`;
  let digestPath = path.join(vaultPath, digestFilename);

  // Check if digest already exists, if so create versioned filename
  if (fs.existsSync(digestPath)) {
    let version = 2;
    while (fs.existsSync(path.join(vaultPath, `${date}-digest-v${version}.md`))) {
      version++;
    }
    digestFilename = `${date}-digest-v${version}.md`;
    digestPath = path.join(vaultPath, digestFilename);
  }

  const digestMarkdown = generateDigest(posts, date);
  fs.writeFileSync(digestPath, digestMarkdown);
  console.log(`\n  ✓ ${digestFilename} (digest)`);

  console.log(`\n✓ Saved ${savedFiles.length} post files + 1 digest`);
  console.log(`  Location: ${dateFolder}`);

  return {
    folder: dateFolder,
    files: savedFiles,
    digest: digestPath
  };
}

// CLI interface
if (require.main === module) {
  const inputFile = process.argv[2] || 'timeline-enriched.json';

  if (!fs.existsSync(inputFile)) {
    // Try filtered file as fallback
    const fallback = 'timeline-filtered.json';
    if (fs.existsSync(fallback)) {
      console.log(`${inputFile} not found, using ${fallback}`);
      const data = JSON.parse(fs.readFileSync(fallback, 'utf8'));
      const posts = data.posts || data;
      saveToObsidian(posts);
    } else {
      console.log('Usage: node generate-obsidian.js [enriched-posts.json]');
      console.log('Run fetch-articles.js first to generate enriched posts');
      process.exit(1);
    }
  } else {
    const posts = JSON.parse(fs.readFileSync(inputFile, 'utf8'));
    saveToObsidian(posts);
  }
}

module.exports = { saveToObsidian, formatPostAsMarkdown, generateDigest };
