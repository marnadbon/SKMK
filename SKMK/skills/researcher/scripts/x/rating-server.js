const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3456;

// Load bookmarks
const BOOKMARKS_FILE = path.join(__dirname, 'bookmarks.json');
const RATINGS_FILE = path.join(__dirname, 'ratings.json');

let bookmarks = JSON.parse(fs.readFileSync(BOOKMARKS_FILE, 'utf8'));
let ratings = {};

// Load existing ratings if they exist
if (fs.existsSync(RATINGS_FILE)) {
  ratings = JSON.parse(fs.readFileSync(RATINGS_FILE, 'utf8'));
}

app.use(express.json());

// Serve the rating interface
app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>X Bookmarks Rating</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #0a0a0a;
      color: #e7e9ea;
      min-height: 100vh;
      padding: 20px;
    }
    .container {
      max-width: 700px;
      margin: 0 auto;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      padding-bottom: 15px;
      border-bottom: 1px solid #2f3336;
    }
    .progress {
      font-size: 14px;
      color: #71767b;
    }
    .progress-bar {
      width: 200px;
      height: 6px;
      background: #2f3336;
      border-radius: 3px;
      margin-top: 5px;
    }
    .progress-fill {
      height: 100%;
      background: #1d9bf0;
      border-radius: 3px;
      transition: width 0.3s;
    }
    .post {
      background: #16181c;
      border: 1px solid #2f3336;
      border-radius: 16px;
      padding: 20px;
      margin-bottom: 20px;
    }
    .author {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
    }
    .author-name {
      font-weight: bold;
      margin-right: 8px;
    }
    .author-handle {
      color: #71767b;
    }
    .post-text {
      font-size: 16px;
      line-height: 1.5;
      margin-bottom: 15px;
      white-space: pre-wrap;
    }
    .post-meta {
      display: flex;
      gap: 20px;
      color: #71767b;
      font-size: 13px;
      margin-bottom: 15px;
    }
    .media-badge {
      display: inline-block;
      background: #1d9bf0;
      color: white;
      padding: 3px 8px;
      border-radius: 4px;
      font-size: 11px;
      margin-left: 10px;
    }
    .post-link {
      display: inline-block;
      color: #1d9bf0;
      text-decoration: none;
      font-size: 14px;
      margin-top: 10px;
    }
    .post-link:hover { text-decoration: underline; }
    .rating-section {
      background: #16181c;
      border: 1px solid #2f3336;
      border-radius: 16px;
      padding: 20px;
      margin-bottom: 20px;
    }
    .rating-label {
      font-size: 14px;
      color: #71767b;
      margin-bottom: 10px;
    }
    .stars {
      display: flex;
      gap: 10px;
      margin-bottom: 15px;
    }
    .star {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 2px solid #2f3336;
      background: transparent;
      color: #71767b;
      font-size: 20px;
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .star:hover {
      border-color: #1d9bf0;
      color: #1d9bf0;
    }
    .star.selected {
      background: #1d9bf0;
      border-color: #1d9bf0;
      color: white;
    }
    .star.rated {
      border-color: #2f3336;
      color: #536471;
    }
    .star.rated.selected {
      background: #1d9bf0;
      border-color: #1d9bf0;
      color: white;
    }
    .notes {
      width: 100%;
      background: #000;
      border: 1px solid #2f3336;
      border-radius: 8px;
      padding: 12px;
      color: #e7e9ea;
      font-size: 14px;
      resize: vertical;
      min-height: 60px;
    }
    .notes:focus {
      outline: none;
      border-color: #1d9bf0;
    }
    .notes::placeholder { color: #71767b; }
    .navigation {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .nav-btn {
      padding: 12px 24px;
      border-radius: 9999px;
      border: none;
      cursor: pointer;
      font-size: 15px;
      font-weight: bold;
      transition: all 0.2s;
    }
    .nav-btn.prev {
      background: #2f3336;
      color: #e7e9ea;
    }
    .nav-btn.prev:hover { background: #3f4448; }
    .nav-btn.next {
      background: #1d9bf0;
      color: white;
    }
    .nav-btn.next:hover { background: #1a8cd8; }
    .nav-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .skip-btn {
      background: transparent;
      border: 1px solid #2f3336;
      color: #71767b;
      padding: 8px 16px;
      border-radius: 9999px;
      cursor: pointer;
      font-size: 13px;
    }
    .skip-btn:hover {
      border-color: #71767b;
      color: #e7e9ea;
    }
    .stats {
      text-align: center;
      padding: 20px;
      color: #71767b;
      font-size: 14px;
    }
    .keyboard-hint {
      text-align: center;
      color: #536471;
      font-size: 12px;
      margin-top: 20px;
    }
    kbd {
      background: #2f3336;
      padding: 2px 6px;
      border-radius: 4px;
      font-family: monospace;
    }
    .empty-text {
      color: #71767b;
      font-style: italic;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div>
        <h2>Rate Your Bookmarks</h2>
        <div class="progress">
          <span id="rated-count">0</span> / <span id="total-count">0</span> rated
          <div class="progress-bar">
            <div class="progress-fill" id="progress-fill"></div>
          </div>
        </div>
      </div>
      <button class="skip-btn" onclick="jumpToUnrated()">Jump to unrated</button>
    </div>

    <div class="post" id="post">
      <div class="author">
        <span class="author-name" id="author-name"></span>
        <span class="author-handle" id="author-handle"></span>
        <span class="media-badge" id="media-badge" style="display:none"></span>
      </div>
      <div class="post-text" id="post-text"></div>
      <div class="post-meta">
        <span id="likes"></span>
        <span id="retweets"></span>
        <span id="replies"></span>
        <span id="timestamp"></span>
      </div>
      <a class="post-link" id="post-link" href="#" target="_blank">View on X</a>
    </div>

    <div class="rating-section">
      <div class="rating-label">How valuable is this post? (1 = skip, 5 = gold)</div>
      <div class="stars">
        <button class="star" data-rating="1">1</button>
        <button class="star" data-rating="2">2</button>
        <button class="star" data-rating="3">3</button>
        <button class="star" data-rating="4">4</button>
        <button class="star" data-rating="5">5</button>
      </div>
      <textarea class="notes" id="notes" placeholder="Optional: Why did you rate it this way? (helps train the filter)"></textarea>
    </div>

    <div class="navigation">
      <button class="nav-btn prev" onclick="navigate(-1)">Previous</button>
      <span id="position">1 / 100</span>
      <button class="nav-btn next" onclick="navigate(1)">Next</button>
    </div>

    <div class="keyboard-hint">
      Keyboard: <kbd>1-5</kbd> rate &nbsp; <kbd>&larr;</kbd><kbd>&rarr;</kbd> navigate &nbsp; <kbd>n</kbd> focus notes
    </div>
  </div>

  <script>
    let bookmarks = [];
    let ratings = {};
    let currentIndex = 0;

    async function init() {
      const res = await fetch('/api/data');
      const data = await res.json();
      bookmarks = data.bookmarks;
      ratings = data.ratings;
      document.getElementById('total-count').textContent = bookmarks.length;
      updateDisplay();
      updateStats();
    }

    function updateDisplay() {
      const post = bookmarks[currentIndex];
      if (!post) return;

      document.getElementById('author-name').textContent = post.author;
      document.getElementById('author-handle').textContent = post.handle;
      document.getElementById('post-text').innerHTML = post.text
        ? post.text.replace(/\\n/g, '<br>')
        : '<span class="empty-text">[Media-only post - no text]</span>';
      document.getElementById('likes').textContent = post.metrics.likes + ' likes';
      document.getElementById('retweets').textContent = post.metrics.retweets + ' RTs';
      document.getElementById('replies').textContent = post.metrics.replies + ' replies';
      document.getElementById('timestamp').textContent = new Date(post.timestamp).toLocaleDateString();
      document.getElementById('post-link').href = post.url;
      document.getElementById('position').textContent = (currentIndex + 1) + ' / ' + bookmarks.length;

      // Media badge
      const badge = document.getElementById('media-badge');
      if (post.hasMedia) {
        badge.style.display = 'inline-block';
        badge.textContent = post.mediaType;
      } else {
        badge.style.display = 'none';
      }

      // Rating
      const existingRating = ratings[post.url];
      document.querySelectorAll('.star').forEach(star => {
        star.classList.remove('selected', 'rated');
        if (existingRating) {
          star.classList.add('rated');
          if (parseInt(star.dataset.rating) === existingRating.rating) {
            star.classList.add('selected');
          }
        }
      });

      document.getElementById('notes').value = existingRating?.notes || '';
    }

    function updateStats() {
      const ratedCount = Object.keys(ratings).length;
      document.getElementById('rated-count').textContent = ratedCount;
      document.getElementById('progress-fill').style.width =
        (ratedCount / bookmarks.length * 100) + '%';
    }

    async function rate(rating) {
      const post = bookmarks[currentIndex];
      const notes = document.getElementById('notes').value;

      ratings[post.url] = {
        rating,
        notes,
        url: post.url,
        author: post.author,
        handle: post.handle,
        text: post.text,
        timestamp: new Date().toISOString()
      };

      await fetch('/api/rate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: post.url, rating, notes, post })
      });

      updateDisplay();
      updateStats();

      // Auto-advance after short delay
      setTimeout(() => navigate(1), 200);
    }

    function navigate(direction) {
      currentIndex = Math.max(0, Math.min(bookmarks.length - 1, currentIndex + direction));
      updateDisplay();
    }

    function jumpToUnrated() {
      const unratedIndex = bookmarks.findIndex(b => !ratings[b.url]);
      if (unratedIndex !== -1) {
        currentIndex = unratedIndex;
        updateDisplay();
      }
    }

    // Star click handlers
    document.querySelectorAll('.star').forEach(star => {
      star.addEventListener('click', () => rate(parseInt(star.dataset.rating)));
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'TEXTAREA') return;

      if (e.key >= '1' && e.key <= '5') {
        rate(parseInt(e.key));
      } else if (e.key === 'ArrowLeft') {
        navigate(-1);
      } else if (e.key === 'ArrowRight') {
        navigate(1);
      } else if (e.key === 'n') {
        document.getElementById('notes').focus();
      }
    });

    init();
  </script>
</body>
</html>
  `);
});

// API: Get data
app.get('/api/data', (req, res) => {
  res.json({ bookmarks, ratings });
});

// API: Save rating
app.post('/api/rate', (req, res) => {
  const { url, rating, notes, post } = req.body;
  ratings[url] = {
    rating,
    notes,
    url,
    author: post.author,
    handle: post.handle,
    text: post.text,
    hasMedia: post.hasMedia,
    mediaType: post.mediaType,
    metrics: post.metrics,
    ratedAt: new Date().toISOString()
  };

  // Save to file
  fs.writeFileSync(RATINGS_FILE, JSON.stringify(ratings, null, 2));
  res.json({ success: true });
});

// API: Get stats
app.get('/api/stats', (req, res) => {
  const rated = Object.values(ratings);
  const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  rated.forEach(r => distribution[r.rating]++);

  res.json({
    total: bookmarks.length,
    rated: rated.length,
    distribution
  });
});

app.listen(PORT, () => {
  console.log(`\n${'='.repeat(50)}`);
  console.log('  Rating Interface Started');
  console.log('='.repeat(50));
  console.log(`\n  Open: http://localhost:${PORT}\n`);
  console.log(`  Total bookmarks: ${bookmarks.length}`);
  console.log(`  Already rated: ${Object.keys(ratings).length}`);
  console.log(`\n  Keyboard shortcuts:`);
  console.log(`    1-5: Rate post`);
  console.log(`    Arrow keys: Navigate`);
  console.log(`    n: Focus notes field`);
  console.log(`\n  Press Ctrl+C to stop\n`);
});
