/**
 * Save live training likes to a markdown file
 */

const fs = require('fs');
const path = require('path');

const LIVE_TRAINING_FILE = path.join(__dirname, 'live-training-data.json');
const CONTENT_DIR = path.join(__dirname, 'content');

function saveLiveLikes() {
  if (!fs.existsSync(LIVE_TRAINING_FILE)) {
    console.log('No live-training-data.json found');
    return;
  }

  const data = JSON.parse(fs.readFileSync(LIVE_TRAINING_FILE, 'utf8'));
  const likes = data.likes || [];

  if (likes.length === 0) {
    console.log('No likes to save');
    return;
  }

  // Ensure content directory exists
  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
  }

  const date = new Date().toISOString().split('T')[0];

  let md = `# Live Feed Likes - ${date}\n\n`;
  md += `Posts I liked while scrolling my timeline (${likes.length} total).\n\n`;
  md += `---\n\n`;

  likes.forEach((post, i) => {
    const author = post.author || 'Unknown';
    const handle = post.handle || '';

    md += `## ${i + 1}. ${author} ${handle}\n\n`;

    if (post.text && post.text.trim()) {
      md += `${post.text}\n\n`;
    } else {
      md += `*[Media post - no text]*\n\n`;
    }

    md += `**Link:** ${post.url}\n\n`;
    md += `---\n\n`;
  });

  const outFile = path.join(CONTENT_DIR, `${date}-live-likes.md`);
  fs.writeFileSync(outFile, md);
  console.log(`Saved ${likes.length} likes to: ${outFile}`);
}

if (require.main === module) {
  saveLiveLikes();
}

module.exports = { saveLiveLikes };
