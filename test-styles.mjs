import { chromium } from 'playwright';

const PROPS = ['display','gridTemplateColumns','gap','marginTop','padding','borderColor','borderRadius'];
const SELECTORS = [
  '.phero',
  '.hbox.hcase',
  '.hmos.casehero',
  '.statbig',
  '.statbig > div',
  '.casebody',
  '.caseprose',
  '.casequote',
  '.shots',
  '.shot',
  '.mini',
  '.mini > a',
  '.cta2',
  '.ctabox',
];
const WIDTHS = [390, 1280];

async function getStyles(page, selectors, props) {
  return page.evaluate(({selectors, props}) => {
    const result = {};
    for (const sel of selectors) {
      const els = document.querySelectorAll(sel);
      if (els.length === 0) { result[sel] = 'NOT FOUND'; continue; }
      const cs = getComputedStyle(els[0]);
      const styles = {};
      for (const p of props) styles[p] = cs[p];
      result[sel] = styles;
    }
    return result;
  }, {selectors, props});
}

const browser = await chromium.launch();

for (const width of WIDTHS) {
  console.log(`\n=== Width: ${width}px ===`);

  const pageNext = await browser.newPage();
  await pageNext.setViewportSize({ width, height: 900 });
  await pageNext.goto('http://localhost:3000/work/hsbc', { waitUntil: 'networkidle' });
  const nextStyles = await getStyles(pageNext, SELECTORS, PROPS);
  await pageNext.close();

  const pageProto = await browser.newPage();
  await pageProto.setViewportSize({ width, height: 900 });
  await pageProto.goto(`file:///Users/mariokyriacou/analogiq/handover/analogiq-site/work/hsbc/index.html`, { waitUntil: 'networkidle' });
  const protoStyles = await getStyles(pageProto, SELECTORS, PROPS);
  await pageProto.close();

  let anyDiff = false;
  for (const sel of SELECTORS) {
    if (nextStyles[sel] === 'NOT FOUND' || protoStyles[sel] === 'NOT FOUND') {
      console.log(`  ${sel}: MISSING (next: ${nextStyles[sel]}, proto: ${protoStyles[sel]})`);
      anyDiff = true;
      continue;
    }
    for (const p of PROPS) {
      const nv = nextStyles[sel][p];
      const pv = protoStyles[sel][p];
      if (nv !== pv) {
        console.log(`  ${sel} → ${p}: NEXT="${nv}" PROTO="${pv}"`);
        anyDiff = true;
      }
    }
  }
  if (!anyDiff) console.log('  All properties match.');
}

// Image load check
console.log('\n=== Image load check ===');
const page = await browser.newPage();
await page.setViewportSize({ width: 1280, height: 900 });
await page.goto('http://localhost:3000/work/hsbc', { waitUntil: 'networkidle' });
const imgCheck = await page.evaluate(() => {
  const imgs = document.querySelectorAll('.hmos img, .shot img, .mini img');
  return [...imgs].map(img => ({
    src: img.src,
    naturalWidth: img.naturalWidth,
    naturalHeight: img.naturalHeight,
    loaded: img.complete && img.naturalWidth > 0,
  }));
});
for (const img of imgCheck) {
  console.log(`  ${img.src}: ${img.loaded ? 'OK' : 'BROKEN'} (${img.naturalWidth}x${img.naturalHeight})`);
}
await page.close();

// Also check capco-personalisation images (roadmap + 2 screenshots)
console.log('\n=== Capco-personalisation image check ===');
const page2 = await browser.newPage();
await page2.setViewportSize({ width: 1280, height: 900 });
await page2.goto('http://localhost:3000/work/capco-personalisation', { waitUntil: 'networkidle' });
const imgCheck2 = await page2.evaluate(() => {
  const imgs = document.querySelectorAll('.hmos img, .shot img, .mini img');
  return [...imgs].map(img => ({
    src: img.src,
    naturalWidth: img.naturalWidth,
    naturalHeight: img.naturalHeight,
    loaded: img.complete && img.naturalWidth > 0,
  }));
});
for (const img of imgCheck2) {
  console.log(`  ${img.src}: ${img.loaded ? 'OK' : 'BROKEN'} (${img.naturalWidth}x${img.naturalHeight})`);
}
// Check roadmap rendered
const hasRoadmap = await page2.evaluate(() => !!document.querySelector('.roadmap .chain.rm'));
console.log(`  Roadmap rendered: ${hasRoadmap}`);
const roadmapSteps = await page2.evaluate(() => document.querySelectorAll('.chain.rm > li').length);
console.log(`  Roadmap steps: ${roadmapSteps}`);
await page2.close();

await browser.close();
