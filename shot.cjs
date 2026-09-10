const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-gpu'],
    defaultViewport: { width: 1440, height: 1000, deviceScaleFactor: 3 },
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  const heading = await page.evaluateHandle(() =>
    [...document.querySelectorAll('h2,h3')].find((el) =>
      el.textContent.includes('Encontre por categoria')
    )
  );
  await page.evaluate((el) => el && el.scrollIntoView({ block: 'start' }), heading);
  await new Promise((r) => setTimeout(r, 600));
  const grid = await page.$('a[href*="produtos?categoria"]');
  const box = await grid.evaluate((el) => {
    const card = el.closest('.grid') || el.parentElement.parentElement;
    const r = card.getBoundingClientRect();
    return { x: r.x, y: r.y, width: r.width, height: r.height };
  });
  await page.screenshot({
    path: process.argv[2] || 'shot.png',
    clip: { x: Math.max(box.x, 0), y: Math.max(box.y, 0), width: box.width, height: Math.min(box.height, 350) },
  });
  await browser.close();
})();
