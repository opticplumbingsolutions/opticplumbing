import puppeteer from 'puppeteer';
const b = await puppeteer.launch();
const p = await b.newPage();
await p.setViewport({ width: 1240, height: 1754 });
await p.goto('http://localhost:3210/capability-statement.html', { waitUntil: 'networkidle0' });
await p.evaluate(() => document.fonts.ready);
const rows = await p.evaluate(() => {
  const MM = 96/25.4;
  return [...document.querySelectorAll('.page')].map((pg, i) => {
    const pr = pg.getBoundingClientRect();
    const body = pg.querySelector('.body');
    const foot = pg.querySelector('.foot-rule');
    if (!body) return { page:i+1, note:'cover' };
    let max = 0, worst = '';
    for (const el of body.children) {
      const r = el.getBoundingClientRect();
      if (r.bottom - pr.top > max) { max = r.bottom - pr.top; worst = el.className || el.tagName; }
    }
    const limitPx = foot ? foot.getBoundingClientRect().top - pr.top : pr.height;
    return {
      page: i+1,
      contentBottomMM: +(max/MM).toFixed(1),
      limitMM: +(limitPx/MM).toFixed(1),
      overflowMM: +((max - limitPx)/MM).toFixed(1),
      worst: String(worst).slice(0,40),
    };
  });
});
console.table(rows);
await b.close();
