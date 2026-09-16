import { chromium } from 'playwright';

const PROPS = ['display','gridTemplateColumns','gap','marginTop','padding','borderColor','borderRadius'];
const SELECTORS = [
  '#engagement .tabs',
  '#engagement .tablist',
  '#engagement .tablist button',
  '#engagement .tablist button.on',
  '#engagement .tabpanel.on',
  '#engagement .tabtile',
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

// Style diff
for (const width of WIDTHS) {
  console.log(`\n=== Width: ${width}px ===`);

  const pageNext = await browser.newPage();
  await pageNext.setViewportSize({ width, height: 900 });
  await pageNext.goto('http://localhost:3000/how-we-build', { waitUntil: 'networkidle' });
  const nextStyles = await getStyles(pageNext, SELECTORS, PROPS);
  await pageNext.close();

  const pageProto = await browser.newPage();
  await pageProto.setViewportSize({ width, height: 900 });
  await pageProto.goto(`file:///Users/mariokyriacou/analogiq/handover/analogiq-site/how-we-build/index.html`, { waitUntil: 'networkidle' });
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

// Interaction test
console.log('\n=== Tab interaction test ===');
const page = await browser.newPage();
await page.setViewportSize({ width: 1280, height: 900 });
await page.goto('http://localhost:3000/how-we-build', { waitUntil: 'networkidle' });

// Check initial state: tab 0 active
const initial = await page.evaluate(() => {
  const btns = document.querySelectorAll('#engagement .tablist button');
  const panels = document.querySelectorAll('#engagement .tabpanel');
  return {
    activeBtn: [...btns].findIndex(b => b.classList.contains('on')),
    visiblePanel: [...panels].findIndex(p => p.classList.contains('on')),
  };
});
console.log(`  Initial: button ${initial.activeBtn} active, panel ${initial.visiblePanel} visible`);

// Click tab 1 (Build)
await page.click('#engagement .tablist button[data-t="1"]');
const after1 = await page.evaluate(() => {
  const btns = document.querySelectorAll('#engagement .tablist button');
  const panels = document.querySelectorAll('#engagement .tabpanel');
  return {
    activeBtn: [...btns].findIndex(b => b.classList.contains('on')),
    visiblePanel: [...panels].findIndex(p => p.classList.contains('on')),
    panelH3: document.querySelector('#engagement .tabpanel.on h3')?.textContent,
  };
});
console.log(`  After click Build: button ${after1.activeBtn}, panel ${after1.visiblePanel}, h3="${after1.panelH3}"`);

// Click tab 2 (Scale)
await page.click('#engagement .tablist button[data-t="2"]');
const after2 = await page.evaluate(() => {
  const btns = document.querySelectorAll('#engagement .tablist button');
  const panels = document.querySelectorAll('#engagement .tabpanel');
  return {
    activeBtn: [...btns].findIndex(b => b.classList.contains('on')),
    visiblePanel: [...panels].findIndex(p => p.classList.contains('on')),
    panelH3: document.querySelector('#engagement .tabpanel.on h3')?.textContent,
  };
});
console.log(`  After click Scale: button ${after2.activeBtn}, panel ${after2.visiblePanel}, h3="${after2.panelH3}"`);

// Click tab 0 (Assess) - back to start
await page.click('#engagement .tablist button[data-t="0"]');
const after0 = await page.evaluate(() => {
  const btns = document.querySelectorAll('#engagement .tablist button');
  const panels = document.querySelectorAll('#engagement .tabpanel');
  return {
    activeBtn: [...btns].findIndex(b => b.classList.contains('on')),
    visiblePanel: [...panels].findIndex(p => p.classList.contains('on')),
    panelH3: document.querySelector('#engagement .tabpanel.on h3')?.textContent,
  };
});
console.log(`  After click Assess: button ${after0.activeBtn}, panel ${after0.visiblePanel}, h3="${after0.panelH3}"`);

await page.close();
await browser.close();
