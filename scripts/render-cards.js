const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const CARDS = [
  { html: 'field-notes-humanbridge.html', out: 'humanbridge-card-og.webp', article: 'humanbridge.html' },
  { html: 'field-notes-sunonewtos.html', out: 'sunonewtos-card-og.webp', article: 'sunonewtos.html' },
  { html: 'field-notes-hp2026.html', out: 'hp2026-card-og.webp', article: 'hp2026.html' },
  { html: 'field-notes-saturation.html', out: 'saturation-card-og.webp', article: 'saturation.html' },
  { html: 'field-notes-songstructure.html', out: 'songstructure-card-og.webp', article: 'songstructure.html' },
  { html: 'field-notes-promptingthemachine.html', out: 'machine-promptcard-og.webp', article: 'promptingthemachine.html' },
  { html: 'field-notes-lastnewgenre.html', out: 'lastnewgenre-card-og.webp', article: 'lastnewgenre.html' },
  { html: 'field-notes-liquidears.html', out: 'liquidears-card-og.webp', article: 'liquidears.html' },
  { html: 'field-notes-agentichybridproduction.html', out: 'agentichybridproduction-card-og.webp', article: 'agentichybridproduction.html' },
  { html: 'field-notes-musicindustryforecast.html', out: 'musicindustryforecast-card-og.webp', article: 'musicindustryforecast.html' },
  { html: 'field-notes-may2026tools.html', out: 'may2026tools-card-og.webp', article: 'may2026tools.html' },
  { html: 'field-notes-trainingday.html', out: 'trainingday-card-og.webp', article: 'trainingday.html' },
  { html: 'field-notes-machinehumanhybrid.html', out: 'machinehumanhybrid-card-og.webp', article: 'machinehumanhybrid.html' },
  { html: 'field-notes-futureofhybrid.html', out: 'futureofhybrid-card-og.webp', article: 'futureofhybrid.html' },
  { html: 'field-notes-suno101.html', out: 'suno101-card-og.webp', article: 'Suno101.html' },
  { html: 'field-notes-fingerprint.html', out: 'fingerprint-card-og.webp', article: 'fingerprint.html' },
  { html: 'field-notes-c2pa-music-provenance.html', out: 'c2pa-music-provenance-card-og.webp', article: 'c2pa-music-provenance.html' },
  { html: 'field-notes-hybridproductionstandard.html', out: 'hps-social-card-og.webp', article: 'hybridproductionstandard.html' },
  { html: 'field-notes-staccatoreview.html', out: 'staccatoreview-card-og.webp', article: 'staccatoreview.html' }
];

async function renderAll() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 900, deviceScaleFactor: 1 });

  const rootDir = path.join(__dirname, '..');
  const imagesDir = path.join(rootDir, 'assets', 'images');
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  for (const item of CARDS) {
    const filePath = 'file://' + path.join(rootDir, item.html).replace(/\\/g, '/');
    console.log(`Rendering ${item.html} -> ${item.out}...`);
    await page.goto(filePath, { waitUntil: 'networkidle0' });

    // Wait for web fonts to load
    await page.evaluateHandle('document.fonts.ready');
    // Short wait for any SVG filters to stabilize
    await new Promise(r => setTimeout(r, 200));

    const cardHandle = await page.$('.social-card');
    if (cardHandle) {
      const outPath = path.join(imagesDir, item.out);
      await cardHandle.screenshot({
        path: outPath,
        type: 'webp',
        quality: 92
      });
      console.log(`Saved ${outPath}`);
    } else {
      console.error(`Card element not found in ${item.html}`);
    }
  }

  await browser.close();
  console.log('All cards successfully rendered!');
}

renderAll().catch(err => {
  console.error('Error during rendering:', err);
  process.exit(1);
});
