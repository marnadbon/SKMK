const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// ─── Config ──────────────────────────────────────────────────────────
const SCREENSHOT_DIR = path.join(__dirname, 'screenshots');
const OUTPUT_DIR = path.join(__dirname, 'output');

// UI chrome lines to strip from OCR output
const UI_PATTERNS = [
  /^W?\s*Kindle Library\s*$/i,
  /^\$100M OFFERS/i,
  /^Page \d+ of \d+/i,
  /^Learning reading speed/i,
  /^\d+%\s*$/,
  /^[●•]\s*\d+%/,
  /^\s*[<>]\s*$/,           // nav arrows
  /^Estimating resolution/i,
];

function cleanOcrText(raw) {
  return raw
    .split('\n')
    .filter(line => {
      const trimmed = line.trim();
      if (!trimmed) return true; // keep blank lines for paragraph spacing
      return !UI_PATTERNS.some(p => p.test(trimmed));
    })
    .join('\n')
    .replace(/\n{3,}/g, '\n\n') // collapse excessive blank lines
    .trim();
}

// ─── Main ────────────────────────────────────────────────────────────

function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const files = fs.readdirSync(SCREENSHOT_DIR)
    .filter(f => f.endsWith('.png') && f.startsWith('page-'))
    .sort();

  if (files.length === 0) {
    console.log('No screenshots found in', SCREENSHOT_DIR);
    process.exit(1);
  }

  console.log(`Processing ${files.length} screenshots with tesseract OCR...\n`);

  const pages = [];
  let successCount = 0;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const pageNum = i + 1;
    const srcPath = path.join(SCREENSHOT_DIR, file);

    process.stdout.write(`\r  OCR page ${pageNum}/${files.length}...`);

    try {
      const raw = execSync(
        `tesseract "${srcPath}" stdout --psm 3 -l eng 2>/dev/null`,
        { encoding: 'utf-8', maxBuffer: 10 * 1024 * 1024 }
      );

      const text = cleanOcrText(raw);

      if (text && text.length > 10) {
        pages.push({ num: pageNum, text });
        successCount++;
      } else {
        pages.push({ num: pageNum, text: '[OCR returned no usable text]' });
      }
    } catch (err) {
      pages.push({ num: pageNum, text: `[OCR error: ${err.message}]` });
    }
  }

  // Derive book title from existing output files
  const existingFiles = fs.readdirSync(OUTPUT_DIR)
    .filter(f => f.endsWith('.md') && !f.includes('(OCR)'));
  let bookTitle = 'Book OCR Output';
  if (existingFiles.length > 0) {
    bookTitle = existingFiles[0].replace('.md', '');
  }

  const outputPath = path.join(OUTPUT_DIR, `${bookTitle} (OCR).md`);
  const markdown = `# ${bookTitle}\n\n` +
    pages.map(p =>
      `---\n<!-- Page ${p.num} -->\n\n${p.text}`
    ).join('\n\n');

  fs.writeFileSync(outputPath, markdown, 'utf-8');

  console.log(`\n\n──────────────────────────────────────────────`);
  console.log(`  OCR complete`);
  console.log(`──────────────────────────────────────────────`);
  console.log(`  Total pages:    ${files.length}`);
  console.log(`  OCR success:    ${successCount}`);
  console.log(`  Output:         ${outputPath}`);
  console.log(`──────────────────────────────────────────────\n`);
}

main();
