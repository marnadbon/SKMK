/**
 * Daily X Research Run
 * Scheduled to run every morning at 6 AM via launchd
 *
 * Pipeline:
 * 1. Scrape 2500 posts from timeline
 * 2. Filter based on taste profile
 * 3. Fetch full article content for top posts
 * 4. Save to Obsidian vault
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const PROJECT_DIR = __dirname;
const LOG_DIR = path.join(PROJECT_DIR, 'logs');
const CONTENT_DIR = path.join(PROJECT_DIR, 'content');

// Ensure directories exist
if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });
if (!fs.existsSync(CONTENT_DIR)) fs.mkdirSync(CONTENT_DIR, { recursive: true });

function log(message) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}`;
  console.log(logMessage);

  // Also append to daily log file
  const date = new Date().toISOString().split('T')[0];
  const logFile = path.join(LOG_DIR, `${date}.log`);
  fs.appendFileSync(logFile, logMessage + '\n');
}

async function runDailyPipeline() {
  const startTime = Date.now();
  const date = new Date().toISOString().split('T')[0];

  log('='.repeat(60));
  log('X Research Daily Run Starting');
  log('='.repeat(60));

  try {
    // Step 1: Scrape timeline
    log('\n📥 Step 1: Scraping timeline...');
    execSync('node scrape-timeline.js', {
      cwd: PROJECT_DIR,
      stdio: 'inherit',
      timeout: 30 * 60 * 1000 // 30 min timeout
    });

    // Check scrape results
    const rawFile = path.join(PROJECT_DIR, 'timeline-raw.json');
    if (fs.existsSync(rawFile)) {
      const rawData = JSON.parse(fs.readFileSync(rawFile, 'utf8'));
      log(`   Scraped ${rawData.length} posts`);
    }

    // Step 2: Filter posts
    log('\n🔍 Step 2: Filtering posts...');
    execSync('node filter-posts.js', {
      cwd: PROJECT_DIR,
      stdio: 'inherit'
    });

    // Check filter results
    const filteredFile = path.join(PROJECT_DIR, 'timeline-filtered.json');
    let filteredCount = 0;
    if (fs.existsSync(filteredFile)) {
      const filteredData = JSON.parse(fs.readFileSync(filteredFile, 'utf8'));
      filteredCount = filteredData.posts?.length || 0;
      log(`   ${filteredCount} posts passed filter`);
    }

    // Step 3: Fetch full articles (if we have filtered posts)
    if (filteredCount > 0) {
      log('\n📄 Step 3: Fetching full article content...');
      execSync('node fetch-articles.js', {
        cwd: PROJECT_DIR,
        stdio: 'inherit',
        timeout: 30 * 60 * 1000 // 30 min timeout
      });
    }

    // Step 4: Generate Obsidian output
    log('\n📝 Step 4: Generating Obsidian files...');
    execSync('node generate-obsidian.js', {
      cwd: PROJECT_DIR,
      stdio: 'inherit'
    });

    const endTime = Date.now();
    const duration = Math.round((endTime - startTime) / 1000 / 60);

    log('\n' + '='.repeat(60));
    log(`✅ Daily run complete in ${duration} minutes`);
    log(`   Results saved to: ${CONTENT_DIR}/${date}/`);
    log('='.repeat(60));

    // Create a summary file for easy checking
    const summaryFile = path.join(CONTENT_DIR, `${date}-summary.txt`);
    const summary = `X Research Daily Summary - ${date}
Generated: ${new Date().toISOString()}
Duration: ${duration} minutes
Posts filtered: ${filteredCount}
Output folder: ${CONTENT_DIR}/${date}/
`;
    fs.writeFileSync(summaryFile, summary);

  } catch (error) {
    log(`\n❌ Error during daily run: ${error.message}`);
    log(error.stack);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  runDailyPipeline().catch(error => {
    log(`Fatal error: ${error.message}`);
    process.exit(1);
  });
}

module.exports = { runDailyPipeline };
