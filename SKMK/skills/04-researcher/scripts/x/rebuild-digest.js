/**
 * Rebuild digest from existing post files in a folder
 */

const fs = require('fs');
const path = require('path');

const folder = process.argv[2] || '/Volumes/abundance/SKILLS/Research/X/content/2026-01-21';
const outputFile = process.argv[3] || '/Volumes/abundance/SKILLS/Research/X/content/2026-01-21-digest-original.md';

const files = fs.readdirSync(folder).filter(f => f.endsWith('.md') && !f.startsWith('.'));

const date = path.basename(folder);

let md = `---
date: ${date}
type: daily-digest
posts: ${files.length}
---

# X Research Digest - ${date} (Restored)

**Posts collected:** ${files.length}
**Restored from individual files**

---

## Today's Highlights

`;

files.forEach((file, i) => {
  const content = fs.readFileSync(path.join(folder, file), 'utf8');
  const authorMatch = content.match(/^author: "(.+)"/m);
  const handleMatch = content.match(/^handle: "(.+)"/m);
  const scoreMatch = content.match(/^score: (\d+)/m);

  const author = authorMatch ? authorMatch[1] : file.replace('.md', '');
  const handle = handleMatch ? handleMatch[1] : '';
  const score = scoreMatch ? scoreMatch[1] : '0';

  // Extract first bit of content
  const contentMatch = content.match(/## Content\n\n([\s\S]*?)(\n---|\n##)/);
  const preview = contentMatch ? contentMatch[1].slice(0, 150).trim() : '';

  md += `### ${i + 1}. ${author} ${handle}

**Score:** ${score}

${preview}${preview.length >= 150 ? '...' : ''}

[[${date}/${file.replace('.md', '')}|Read full post]]

---

`;
});

fs.writeFileSync(outputFile, md);
console.log(`Restored digest with ${files.length} posts to ${outputFile}`);
