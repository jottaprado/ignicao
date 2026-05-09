// Render cover.html to cover.png using Puppeteer (transitive via mermaid-cli)
const path = require('path');
const fs = require('fs');

const PUPPETEER_PATH = 'C:/Users/joaop/AppData/Roaming/npm/node_modules/@mermaid-js/mermaid-cli/node_modules/puppeteer';
const puppeteer = require(PUPPETEER_PATH);

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1600, height: 2400, deviceScaleFactor: 1 });

  const coverPath = path.resolve(__dirname, 'cover.html');
  await page.goto('file://' + coverPath.replace(/\\/g, '/'), { waitUntil: 'networkidle0' });

  const outputPath = path.resolve(__dirname, 'cover.png');
  await page.screenshot({ path: outputPath, type: 'png', omitBackground: false, fullPage: false });
  await browser.close();

  const stats = fs.statSync(outputPath);
  console.log('Cover gerada:', outputPath);
  console.log('Tamanho:', (stats.size / 1024).toFixed(1), 'KB');
  console.log('Dimensoes: 1600x2400');
})();
