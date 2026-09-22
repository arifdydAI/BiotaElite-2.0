// scripts/verify_13_ident_browser.cjs
// Automated Chrome DevTools Protocol verification for MASTER-FIX-13 with self-contained HTTP server
const { spawn } = require('child_process');
const http = require('http');
const path = require('path');
const fs = require('fs');
const os = require('os');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const USER_DATA_DIR = path.join(os.tmpdir(), 'chrome_13_ident_' + Date.now());
const ARTIFACTS_DIR = 'C:\\Users\\UESR\\.gemini\\antigravity-ide\\brain\\e323d15e-a5e0-458a-9093-3f8424fdb670';
const DIST_DIR = path.resolve(__dirname, '../dist');

if (!fs.existsSync(USER_DATA_DIR)) {
  fs.mkdirSync(USER_DATA_DIR, { recursive: true });
}

// 1. Self-contained SPA HTTP Server on port 2021
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
  const urlPath = req.url.split('?')[0];
  let filePath = path.join(DIST_DIR, urlPath);
  
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(DIST_DIR, 'index.html');
  }
  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': contentType });
  fs.createReadStream(filePath).pipe(res);
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let chrome;

async function getWsUrl() {
  for (let i = 0; i < 25; i++) {
    await sleep(400);
    try {
      const res = await fetch('http://127.0.0.1:9226/json/list');
      const list = await res.json();
      const pageTarget = list && list.find(t => t.type === 'page' && !t.url.startsWith('chrome-extension://'));
      if (pageTarget && pageTarget.webSocketDebuggerUrl) {
        return pageTarget.webSocketDebuggerUrl;
      }
    } catch (e) {}
  }
  throw new Error('Chrome remote debugging did not become ready on port 9226');
}

async function run() {
  let passed = true;
  const errors = [];

  // Start HTTP server
  await new Promise((resolve) => server.listen(2021, '127.0.0.1', resolve));
  console.log('SPA HTTP Server listening on http://localhost:2021/');

  // Start Chrome
  chrome = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9226',
    `--user-data-dir=${USER_DATA_DIR}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-gpu',
    '--disable-extensions',
    'about:blank'
  ], { stdio: 'ignore' });

  try {
    console.log('Connecting to Chrome headless on port 9226...');
    const wsUrl = await getWsUrl();
    const ws = new WebSocket(wsUrl);
    await new Promise(resolve => ws.onopen = resolve);

    let id = 1;
    const pending = new Map();
    function send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const msgId = id++;
        pending.set(msgId, { resolve, reject });
        ws.send(JSON.stringify({ id: msgId, method, params }));
      });
    }

    const consoleErrors = [];
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.id && pending.has(data.id)) {
        const p = pending.get(data.id);
        pending.delete(data.id);
        if (data.error) p.reject(data.error);
        else p.resolve(data.result);
      } else if (data.method === 'Runtime.consoleAPICalled' && data.params.type === 'error') {
        const args = data.params.args.map(a => a.value ?? a.description ?? JSON.stringify(a)).join(' ');
        consoleErrors.push(args);
        console.log(`[CONSOLE ERROR] ${args}`);
      }
    };

    await send('Runtime.enable');
    await send('Page.enable');
    await send('DOM.enable');

    async function evaluate(expr) {
      const res = await send('Runtime.evaluate', { expression: expr, returnByValue: true });
      return res && res.result ? res.result.value : null;
    }

    async function captureScreenshot(filename) {
      const res = await send('Page.captureScreenshot', { format: 'png' });
      if (res && res.data) {
        const buffer = Buffer.from(res.data, 'base64');
        const outPath = path.join(ARTIFACTS_DIR, filename);
        fs.writeFileSync(outPath, buffer);
        console.log(`  Saved screenshot: ${filename}`);
      }
    }

    async function setViewport(width, height) {
      await send('Emulation.setDeviceMetricsOverride', {
        width,
        height,
        deviceScaleFactor: 1,
        mobile: width < 768
      });
      await sleep(300);
    }

    async function navigateAndWait(url, readySelector = '#root') {
      console.log(`Navigating to: ${url}`);
      await send('Page.navigate', { url });
      for (let i = 0; i < 20; i++) {
        await sleep(500);
        const ready = await evaluate(`Boolean(document.querySelector('${readySelector}')) && document.querySelector('${readySelector}')?.children.length > 0`);
        if (ready) break;
      }
      await sleep(600);
    }

    console.log('\n================================================================');
    console.log('TEST 1: Initial Page Load & Global Scope Default');
    console.log('================================================================');
    await setViewport(1280, 800);
    await navigateAndWait('http://localhost:2021/identification');

    const heroTitle = await evaluate(`document.querySelector('h1')?.innerText`);
    console.log('Hero Title:', heroTitle);
    if (!heroTitle || (!heroTitle.includes('Identification') && !heroTitle.includes('Diagnostic') && !heroTitle.includes('Zoological'))) {
      errors.push('Hero title missing or unexpected');
    }

    const initialKeyCards = await evaluate(`(() => {
      const container = document.querySelector('div[style*="minmax(260px, 1fr)"]');
      return container ? container.querySelectorAll('button.card').length : 0;
    })()`);
    console.log('Initial visible key cards count:', initialKeyCards);
    if (initialKeyCards !== 11) {
      errors.push(`Expected 11 global key cards, found ${initialKeyCards}`);
    }

    await captureScreenshot('ident_01_global_catalog.png');

    console.log('\n================================================================');
    console.log('TEST 2: Category Filtering in Global Scope');
    console.log('================================================================');
    const clickedInvertebrates = await evaluate(`(() => {
      const pills = Array.from(document.querySelectorAll('button')).filter(b => b.innerText.includes('Invertebrates') || b.innerText.includes('অমেরুদণ্ডী'));
      if (pills.length > 0) {
        pills[0].click();
        return true;
      }
      return false;
    })()`);
    console.log('Clicked Invertebrates pill:', clickedInvertebrates);
    await sleep(400);
    const invertCards = await evaluate(`(() => {
      const container = document.querySelector('div[style*="minmax(260px, 1fr)"]');
      return container ? container.querySelectorAll('button.card').length : 0;
    })()`);
    console.log('Filtered by Invertebrates cards count:', invertCards);
    if (invertCards < 3) {
      errors.push(`Expected >= 3 invertebrate keys, found ${invertCards}`);
    }

    // Reset filter to All
    await evaluate(`(() => {
      const allPill = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('All') || b.innerText.includes('সব'));
      if (allPill) allPill.click();
    })()`);
    await sleep(300);

    console.log('\n================================================================');
    console.log('TEST 3: Key Execution & Higher-Taxon Determination (Porifera)');
    console.log('================================================================');
    // Key 1 (Animal Phyla) is active.
    await evaluate(`(() => {
      const container = document.querySelector('div[style*="minmax(260px, 1fr)"]');
      const cards = Array.from(container.querySelectorAll('button.card'));
      const phylaCard = cards.find(c => c.innerText.includes('Major Phyla') || c.innerText.includes('Kingdom Animalia'));
      if (phylaCard) phylaCard.click();
    })()`);
    await sleep(400);

    // Couplet A is Porifera: "Cellular-grade organization without true tissues..."
    const clickedPorifera = await evaluate(`(() => {
      const couplets = Array.from(document.querySelectorAll('.card-hoverable'));
      if (couplets.length >= 2) {
        couplets[0].click(); // Option A -> Porifera
        return true;
      }
      return false;
    })()`);
    console.log('Clicked Couplet A (Parazoa / Porifera):', clickedPorifera);
    await sleep(500);

    // Check determination view for Phylum Porifera
    const determinationTaxon = await evaluate(`(() => {
      const h2s = Array.from(document.querySelectorAll('h2'));
      const detH2 = h2s.find(h => h.innerText.includes('Porifera'));
      return detH2 ? detH2.innerText : (h2s[1] ? h2s[1].innerText : h2s[0]?.innerText);
    })()`);
    console.log('Higher taxon determination result:', determinationTaxon);
    if (!determinationTaxon || !determinationTaxon.includes('Porifera')) {
      errors.push(`Expected Porifera determination, got: ${determinationTaxon}`);
    }

    // Verify diagnostic traits and representative species
    const representativeSpecies = await evaluate(`Array.from(document.querySelectorAll('a[href^="/species/"]')).map(a => a.innerText.trim()).filter(Boolean)`);
    console.log('Representative species links:', representativeSpecies);
    if (representativeSpecies.length === 0) {
      errors.push('Higher taxon determination lacks representative species cards');
    }

    await evaluate(`window.scrollTo({ top: 900, behavior: 'instant' })`);
    await sleep(300);
    await captureScreenshot('ident_02_higher_taxon_determination.png');

    // Test Step Back button
    const clickedPrev = await evaluate(`(() => {
      const btns = Array.from(document.querySelectorAll('button'));
      const prevBtn = btns.find(b => b.innerText.includes('Previous') || b.innerText.includes('Step Back') || b.innerText.includes('পূর্ববর্তী'));
      if (prevBtn) {
        prevBtn.click();
        return true;
      }
      return false;
    })()`);
    console.log('Clicked Step Back button:', clickedPrev);
    await sleep(400);

    const backToCouplets = await evaluate(`document.querySelectorAll('.card-hoverable').length`);
    console.log('Couplets visible after stepping back:', backToCouplets);
    if (backToCouplets !== 2) {
      errors.push('Stepping back did not restore couplet buttons');
    }

    console.log('\n================================================================');
    console.log('TEST 4: Species-Level Global Key Execution (Fish Lineages)');
    console.log('================================================================');
    // Click key-global-fish-lineages in grid
    const openedFishKey = await evaluate(`(() => {
      const container = document.querySelector('div[style*="minmax(260px, 1fr)"]');
      const cards = Array.from(container.querySelectorAll('button.card'));
      const fishCard = cards.find(c => c.innerText.includes('Fish Lineages') || c.innerText.includes('Global Fish'));
      if (fishCard) {
        fishCard.click();
        return true;
      }
      return false;
    })()`);
    console.log('Selected Global Fish Lineages key:', openedFishKey);
    await sleep(500);

    // Step 1: Couplet A (Jawless fishes / Agnatha)
    await evaluate(`(() => {
      const couplets = Array.from(document.querySelectorAll('.card-hoverable'));
      if (couplets.length > 0) couplets[0].click();
    })()`);
    await sleep(400);

    // Step 2: Couplet B (Petromyzon marinus - Sea lamprey)
    await evaluate(`(() => {
      const couplets = Array.from(document.querySelectorAll('.card-hoverable'));
      if (couplets.length > 1) couplets[1].click();
    })()`);
    await sleep(600);

    // Verify species determination for Petromyzon marinus
    const spResultName = await evaluate(`(() => {
      const h2s = Array.from(document.querySelectorAll('h2'));
      const spH2 = h2s.find(h => h.innerText.includes('Petromyzon'));
      return spH2 ? spH2.innerText : (h2s[1] ? h2s[1].innerText : '');
    })()`);
    console.log('Species determination name:', spResultName);
    if (!spResultName || !spResultName.includes('Petromyzon marinus')) {
      errors.push(`Expected Petromyzon marinus, got: ${spResultName}`);
    }

    // Verify verified image card
    const spImageAttrs = await evaluate(`(() => {
      const img = document.querySelector('img[alt*="Petromyzon"]');
      const card = img?.closest('.card') || document.body;
      const text = card.innerText;
      return { src: img?.src, alt: img?.alt, hasVerifiedText: text.includes('Verified') || text.includes('যাচাইকৃত') };
    })()`);
    console.log('Specimen image details:', spImageAttrs);
    if (!spImageAttrs.src) {
      errors.push('Specimen image missing in species determination');
    }

    await evaluate(`window.scrollTo({ top: 900, behavior: 'instant' })`);
    await sleep(300);
    await captureScreenshot('ident_03_species_determination.png');

    console.log('\n================================================================');
    console.log('TEST 5: Scope Switching to Bangladesh Regional Keys');
    console.log('================================================================');
    const switchedToBd = await evaluate(`(() => {
      const btns = Array.from(document.querySelectorAll('button'));
      const bdBtn = btns.find(b => b.innerText.toLowerCase().includes('bangladesh regional') || b.innerText.includes('বাংলাদেশ আঞ্চলিক'));
      if (bdBtn) {
        bdBtn.click();
        return true;
      }
      return false;
    })()`);
    console.log('Switched to Bangladesh scope:', switchedToBd);
    await sleep(500);

    const bdKeyCount = await evaluate(`(() => {
      const container = document.querySelector('div[style*="minmax(260px, 1fr)"]');
      return container ? container.querySelectorAll('button.card').length : 0;
    })()`);
    console.log('Bangladesh keys count:', bdKeyCount);
    if (bdKeyCount !== 4) {
      errors.push(`Expected exactly 4 Bangladesh regional keys, found ${bdKeyCount}`);
    }

    // Select Major Carps of Bangladesh
    const openedCarps = await evaluate(`(() => {
      const container = document.querySelector('div[style*="minmax(260px, 1fr)"]');
      const cards = Array.from(container.querySelectorAll('button.card'));
      const carpCard = cards.find(c => c.innerText.includes('Carps') || c.innerText.includes('কার্প'));
      if (carpCard) {
        carpCard.click();
        return true;
      }
      return false;
    })()`);
    console.log('Selected Major Carps key:', openedCarps);
    await sleep(500);

    // Step 1: Couplet A (Catla catla)
    await evaluate(`(() => {
      const couplets = Array.from(document.querySelectorAll('.card-hoverable'));
      if (couplets.length > 0) couplets[0].click();
    })()`);
    await sleep(600);

    const catlaName = await evaluate(`(() => {
      const h2s = Array.from(document.querySelectorAll('h2'));
      const catlaH2 = h2s.find(h => h.innerText.includes('Catla'));
      return catlaH2 ? catlaH2.innerText : (h2s[1] ? h2s[1].innerText : '');
    })()`);
    console.log('Carp determination name:', catlaName);
    if (!catlaName || !catlaName.includes('Catla catla')) {
      errors.push(`Expected Catla catla determination, got: ${catlaName}`);
    }

    const catlaImage = await evaluate(`document.querySelector('img[alt*="Catla"]')?.src`);
    console.log('Catla image src:', catlaImage);
    if (!catlaImage) {
      errors.push('Catla catla image missing in determination view');
    }

    await evaluate(`window.scrollTo({ top: 850, behavior: 'instant' })`);
    await sleep(300);
    await captureScreenshot('ident_04_bangladesh_carps_catla.png');

    console.log('\n================================================================');
    console.log('TEST 6: Responsiveness on Mobile (375px) & Tablet (768px)');
    console.log('================================================================');
    // Test 375px mobile
    await setViewport(375, 667);
    const mobileOverflow = await evaluate(`document.documentElement.scrollWidth > window.innerWidth`);
    console.log('Mobile (375px) has horizontal overflow:', mobileOverflow);
    if (mobileOverflow) {
      errors.push('Horizontal overflow detected at 375px viewport');
    }
    await captureScreenshot('ident_05_mobile_375px.png');

    // Test 768px tablet
    await setViewport(768, 1024);
    const tabletOverflow = await evaluate(`document.documentElement.scrollWidth > window.innerWidth`);
    console.log('Tablet (768px) has horizontal overflow:', tabletOverflow);
    if (tabletOverflow) {
      errors.push('Horizontal overflow detected at 768px viewport');
    }

    // Reset viewport to desktop
    await setViewport(1280, 800);

    console.log('\n================================================================');
    console.log('CONSOLE ERRORS AUDIT');
    console.log('================================================================');
    console.log(`Total console errors observed: ${consoleErrors.length}`);
    if (consoleErrors.length > 0) {
      console.log('Errors:', consoleErrors);
    }

  } catch (err) {
    passed = false;
    errors.push('Fatal script error: ' + err.message);
    console.error(err);
  } finally {
    try {
      if (chrome) chrome.kill('SIGKILL');
    } catch (e) {}
    try {
      server.close();
    } catch (e) {}
  }

  console.log('\n================================================================');
  console.log('VERIFICATION SUMMARY');
  console.log('================================================================');
  if (errors.length === 0 && passed) {
    console.log('🎉 ALL BROWSER UI AND INTERACTION TESTS PASSED PERFECTLY!');
    process.exit(0);
  } else {
    console.error(`❌ FAILED WITH ${errors.length} ERRORS:`);
    errors.forEach((e, idx) => console.error(`  ${idx + 1}. ${e}`));
    process.exit(1);
  }
}

run();
