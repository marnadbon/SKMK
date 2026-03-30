const ratings = require('./ratings.json');
const entries = Object.values(ratings);

console.log('='.repeat(60));
console.log('TASTE PROFILE ANALYSIS - 100 Ratings');
console.log('='.repeat(60));

console.log('\n📊 BASIC STATS');
console.log('Total rated:', entries.length);

// Rating distribution
const dist = {1:0, 2:0, 3:0, 4:0, 5:0};
entries.forEach(r => dist[r.rating]++);
console.log('\nDistribution:');
Object.entries(dist).forEach(([k,v]) => {
  const bar = '█'.repeat(Math.round(v/2));
  console.log(`  ${k} stars: ${v.toString().padStart(2)} (${Math.round(v/entries.length*100)}%) ${bar}`);
});

// Authors frequency
const authors = {};
entries.forEach(r => {
  const h = r.handle || 'unknown';
  if (!authors[h]) authors[h] = {count: 0, ratings: [], posts: []};
  authors[h].count++;
  authors[h].ratings.push(r.rating);
  authors[h].posts.push(r);
});

console.log('\n👤 TOP AUTHORS (most bookmarked)');
const topAuthors = Object.entries(authors)
  .sort((a,b) => b[1].count - a[1].count)
  .slice(0, 15);

topAuthors.forEach(([handle, data]) => {
  const avg = (data.ratings.reduce((a,b)=>a+b,0) / data.ratings.length).toFixed(1);
  console.log(`  ${handle.padEnd(25)} ${data.count} posts (avg: ${avg}⭐)`);
});

// 5-star authors
console.log('\n⭐ AUTHORS WITH HIGHEST AVG RATING (2+ posts)');
Object.entries(authors)
  .filter(([h, d]) => d.count >= 2)
  .map(([h, d]) => [h, d.ratings.reduce((a,b)=>a+b,0) / d.ratings.length, d.count])
  .sort((a,b) => b[1] - a[1])
  .slice(0, 10)
  .forEach(([handle, avg, count]) => {
    console.log(`  ${handle.padEnd(25)} ${avg.toFixed(1)}⭐ (${count} posts)`);
  });

// Analyze notes for themes
console.log('\n📝 NOTES ANALYSIS');
const notesWithContent = entries.filter(r => r.notes && r.notes.length > 20);
console.log(`Posts with detailed notes: ${notesWithContent.length}`);

// Extract key themes from notes
const themes = {
  'claude code': 0,
  'ai coding': 0,
  'prompt': 0,
  'design': 0,
  'course': 0,
  'email': 0,
  'article': 0,
  'framework': 0,
  'workflow': 0,
  'automation': 0,
  'personal brand': 0,
  'creator': 0,
  'meme': 0,
  'inspiration': 0,
  'template': 0,
  'tip': 0,
  'ralph': 0,
  'obsidian': 0,
  'interesting': 0,
  'actionable': 0
};

notesWithContent.forEach(r => {
  const note = r.notes.toLowerCase();
  Object.keys(themes).forEach(theme => {
    if (note.includes(theme)) themes[theme]++;
  });
});

console.log('\nThemes mentioned in notes:');
Object.entries(themes)
  .filter(([k,v]) => v > 0)
  .sort((a,b) => b[1] - a[1])
  .forEach(([theme, count]) => {
    const bar = '▓'.repeat(count);
    console.log(`  ${theme.padEnd(15)} ${count.toString().padStart(2)} ${bar}`);
  });

// 5-star post analysis
console.log('\n🏆 5-STAR POSTS BREAKDOWN');
const fiveStars = entries.filter(r => r.rating === 5);
console.log(`Total 5-star posts: ${fiveStars.length}`);

const fiveStarWithNotes = fiveStars.filter(r => r.notes && r.notes.length > 20);
console.log(`With detailed notes: ${fiveStarWithNotes.length}`);

// Media types
const mediaTypes = {image: 0, video: 0, none: 0};
entries.forEach(r => mediaTypes[r.mediaType]++);
console.log('\n📷 MEDIA TYPES');
Object.entries(mediaTypes).forEach(([type, count]) => {
  console.log(`  ${type}: ${count}`);
});

// 3-star analysis
console.log('\n📌 3-STAR POSTS (Reference/Maybe Later)');
const threeStars = entries.filter(r => r.rating === 3);
console.log(`Total: ${threeStars.length}`);
const threeStarReasons = threeStars
  .filter(r => r.notes && r.notes.length > 10)
  .slice(0, 5)
  .forEach(r => {
    console.log(`  - "${r.notes.slice(0, 80)}..."`);
  });

// Word frequency in 5-star notes
console.log('\n🔑 KEY PATTERNS IN 5-STAR NOTES');
const fiveStarNotes = fiveStars
  .filter(r => r.notes && r.notes.length > 20)
  .map(r => r.notes);

console.log(`\nSample 5-star notes:`);
fiveStarNotes.slice(0, 5).forEach((note, i) => {
  console.log(`\n${i+1}. "${note.slice(0, 150)}..."`);
});

console.log('\n' + '='.repeat(60));
console.log('END OF ANALYSIS');
console.log('='.repeat(60));
