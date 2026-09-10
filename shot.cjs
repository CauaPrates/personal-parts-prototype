const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-gpu'],
    defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 4 },
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 300));
  await page.evaluate(() => window.scrollTo({ top: 1062, behavior: 'instant' }));
  await new Promise((r) => setTimeout(r, 500));

  const badges = await page.$$('a[href*="produtos?categoria"] span.flex, a[href*="assunto=pintura"] span.flex');
  console.log('found', badges.length);
  for (let i = 0; i < badges.length; i++) {
    await badges[i].screenshot({ path: `${process.argv[2] || 'icon'}-${i}.png` });
  }
  await browser.close();
})();
