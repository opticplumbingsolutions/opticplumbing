import puppeteer from 'puppeteer';
import fs from 'node:fs';

const URL = 'http://localhost:3210/capability-statement.html';
const OUT = 'Optic_Plumbing_Solutions_Capability_Statement.pdf';

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: 1240, height: 1754, deviceScaleFactor: 2 });
await page.goto(URL, { waitUntil: 'networkidle0', timeout: 60000 });
await page.evaluate(() => document.fonts.ready);
await new Promise(r => setTimeout(r, 800));

await page.pdf({
  path: OUT,
  preferCSSPageSize: true,
  printBackground: true,
  displayHeaderFooter: false,
  tagged: false,        // drop Chrome auto-generated accessibility tag tree (2000+ objects)
  outline: false,
});
await browser.close();

const buf = fs.readFileSync(OUT);
const boxes = [...buf.toString('latin1').matchAll(/\/MediaBox\s*\[([^\]]*)\]/g)].map(m => m[1]);
console.log(`${OUT} — ${(buf.length/1024/1024).toFixed(2)} MB — ${boxes.length} pages`);
console.log('first page box:', boxes[0]);

// Usage:
//   PORT=3210 node serve.mjs      (in one terminal)
//   node render-capability.mjs    (in another)
//   node check-fit.mjs            (reports per-page content overflow in mm)
