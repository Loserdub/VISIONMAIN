const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const repoRoot = path.resolve(__dirname, '..');
const srcPath = path.join(repoRoot, 'assets/reader.js');
const distPath = path.join(repoRoot, 'assets/reader.min.js');

if (!fs.existsSync(srcPath)) {
  console.error(`Source file not found: ${srcPath}`);
  process.exit(1);
}

const originalCode = fs.readFileSync(srcPath, 'utf8');

// 1. Minify embedded CSS within backticks without breaking quotes
let processed = originalCode.replace(/const styles = `([\s\S]*?)`;/, (match, css) => {
  const minCss = css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([\{\}:;,>])\s*/g, '$1')
    .replace(/;}/g, '}')
    .trim();
  return 'const styles = `' + minCss + '`;';
});

// 2. Minify embedded HTML within backticks
processed = processed.replace(/return `([\s\S]*?)`\.trim\(\);/, (match, html) => {
  const minHtml = html.replace(/\s+/g, ' ').replace(/> </g, '><').trim();
  return 'return `' + minHtml + '`.trim();';
});

// Write to temporary buffer file for terser
const tempPath = path.join(__dirname, '.temp-reader-build.js');
fs.writeFileSync(tempPath, processed, 'utf8');

try {
  // 3. Run Terser with aggressive compression, variable mangling, and ES2020 features
  execSync(`npx terser "${tempPath}" --compress passes=3 --mangle --output "${distPath}"`, {
    cwd: repoRoot,
    stdio: 'inherit'
  });
} finally {
  if (fs.existsSync(tempPath)) {
    fs.unlinkSync(tempPath);
  }
}

const origSize = fs.statSync(srcPath).size;
const distSize = fs.statSync(distPath).size;
const savings = origSize - distSize;
const pct = ((savings / origSize) * 100).toFixed(2);

console.log(`\nBuild complete:`);
console.log(`Original:  ${origSize.toLocaleString()} bytes (${path.relative(repoRoot, srcPath)})`);
console.log(`Minified:  ${distSize.toLocaleString()} bytes (${path.relative(repoRoot, distPath)})`);
console.log(`Saved:     ${savings.toLocaleString()} bytes (${pct}% reduction)\n`);
