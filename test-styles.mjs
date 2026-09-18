import { chromium } from 'playwright';

const PROPS = ['display','gridTemplateColumns','gap','marginTop','padding','borderColor','borderRadius'];
const SELECTORS = [
  '.phero',
  '.hbox',
  '.hmos.brand',
  '.grid2',
  '.grid3x',
  '.wgrid',
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
  await pageNext.goto('http://localhost:3000/digital-services', { waitUntil: 'networkidle' });
  const nextStyles = await getStyles(pageNext, SELECTORS, PROPS);
  await pageNext.close();

  const pageProto = await browser.newPage();
  await pageProto.setViewportSize({ width, height: 900 });
  await pageProto.goto(`file:///Users/mariokyriacou/analogiq/handover/analogiq-site/digital-services/index.html`, { waitUntil: 'networkidle' });
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

await browser.close();
