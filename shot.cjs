const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-gpu'],
    defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 1.5 },
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 300));

  await page.evaluate(() => window.scrollTo({ top: 1148, behavior: 'instant' }));
  await new Promise((r) => setTimeout(r, 500));

  await page.screenshot({ path: process.argv[2] || 'shot.png' });
  await browser.close();
})();
