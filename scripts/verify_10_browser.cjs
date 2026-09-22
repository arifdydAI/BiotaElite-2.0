// Browser Verification Script for MASTER-FIX-10 using Chrome DevTools Protocol (CDP)
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const USER_DATA_DIR = path.join(os.tmpdir(), 'chrome_10_' + Date.now());
const ARTIFACT_DIR = 'C:\\Users\\UESR\\.gemini\\antigravity-ide\\brain\\a7a151ea-89bf-4d1f-b692-68e603f73e31';

if (!fs.existsSync(USER_DATA_DIR)) {
  fs.mkdirSync(USER_DATA_DIR, { recursive: true });
}

const chrome = spawn(CHROME_PATH, [
  '--headless=new',
  '--remote-debugging-port=9229',
  `--user-data-dir=${USER_DATA_DIR}`,
  '--no-first-run',
  '--no-default-browser-check',
  '--disable-gpu',
  '--disable-extensions',
  'about:blank'
], { stdio: 'ignore' });

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getWsUrl() {
  for (let i = 0; i < 20; i++) {
    await sleep(500);
    try {
      const res = await fetch('http://127.0.0.1:9229/json/list');
      const list = await res.json();
      const pageTarget = list && list.find(t => t.type === 'page' && !t.url.startsWith('chrome-extension://'));
      if (pageTarget && pageTarget.webSocketDebuggerUrl) {
        return pageTarget.webSocketDebuggerUrl;
      }
    } catch (e) {}
  }
  throw new Error('Chrome remote debugging did not become ready on port 9229');
}

async function run() {
  let passed = true;
  try {
    console.log('Connecting to Chrome on port 9229...');
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
      const msg = JSON.parse(event.data);
      if (msg.id && pending.has(msg.id)) {
        const { resolve, reject } = pending.get(msg.id);
        pending.delete(msg.id);
        if (msg.error) reject(msg.error);
        else resolve(msg.result);
      } else if (msg.method === 'Runtime.consoleAPICalled') {
        if (msg.params.type === 'error') {
          consoleErrors.push(msg.params.args.map(a => a.value || a.description || '').join(' '));
        }
      }
    };

    await send('Page.enable');
    await send('Runtime.enable');
    await send('DOM.enable');
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false
    });

    async function navigateAndEvaluate(url, evaluateFn) {
      consoleErrors.length = 0;
      await send('Page.navigate', { url });
      await sleep(1500);
      const evalRes = await send('Runtime.evaluate', {
        expression: `(${evaluateFn.toString()})()`,
        returnByValue: true,
        awaitPromise: true
      });
      return {
        result: evalRes.result ? evalRes.result.value : null,
        errors: [...consoleErrors]
      };
    }

    async function takeScreenshot(filename) {
      const shot = await send('Page.captureScreenshot', { format: 'png' });
      const buf = Buffer.from(shot.data, 'base64');
      const outPath = path.join(ARTIFACT_DIR, filename);
      fs.writeFileSync(outPath, buf);
      console.log(`  Screenshot saved to: ${filename}`);
    }

    console.log('\n========================================================');
    console.log('MASTER-FIX-10 LOCAL CHROME BROWSER VERIFICATION SUITE');
    console.log('========================================================\n');

    // 1. /fish
    console.log('1. Verifying /fish...');
    const fishRes = await navigateAndEvaluate('http://localhost:2021/fish', () => {
      return {
        title: document.title,
        h1: document.querySelector('h1')?.innerText,
        cardsCount: document.querySelectorAll('.knowledge-card, .card').length,
        hasContent: document.body.innerText.length > 500
      };
    });
    console.log('  Fish Result:', fishRes.result);
    console.log('  Console Errors:', fishRes.errors);
    if (!fishRes.result || fishRes.errors.length > 0) passed = false;
    await takeScreenshot('browser_10_fish.png');

    // 2. /species
    console.log('\n2. Verifying /species...');
    const speciesRes = await navigateAndEvaluate('http://localhost:2021/species', () => {
      const cards = Array.from(document.querySelectorAll('.grid-species > .card')).map(c => {
        return {
          title: c.querySelector('.scientific-name')?.innerText,
          hasImg: Boolean(c.querySelector('img')),
          imgSrc: c.querySelector('img')?.src?.slice(0, 80)
        };
      });
      return {
        totalCards: cards.length,
        firstCards: cards.slice(0, 5),
        hasLatimeria: document.body.innerText.includes('Latimeria chalumnae'),
        hasSalmo: document.body.innerText.includes('Salmo trutta'),
        hasArapaima: document.body.innerText.includes('Arapaima gigas'),
        hasGaleocerdo: document.body.innerText.includes('Galeocerdo cuvier')
      };
    });
    console.log('  Species Catalog Result:', speciesRes.result);
    console.log('  Console Errors:', speciesRes.errors);
    if (!speciesRes.result || speciesRes.errors.length > 0 || speciesRes.result.totalCards < 50) passed = false;
    await takeScreenshot('browser_10_species_catalog.png');

    // 3. /species/sp-latimeria-chalumnae
    console.log('\n3. Verifying /species/sp-latimeria-chalumnae...');
    const coelacanthRes = await navigateAndEvaluate('http://localhost:2021/species/sp-latimeria-chalumnae', () => {
      return {
        sciName: document.querySelector('.scientific-name')?.innerText,
        h1: document.querySelector('h1')?.innerText,
        hasPhoto: Boolean(document.querySelector('img')),
        photoSrc: document.querySelector('img')?.src?.slice(0, 100),
        hasExtralimitalBadge: document.body.innerText.toLowerCase().includes('extralimital') || document.body.innerText.includes('বহির্দেশীয়'),
        hasCoelacanthiformes: document.body.innerText.includes('Coelacanthiformes')
      };
    });
    console.log('  Coelacanth Monograph Result:', coelacanthRes.result);
    console.log('  Console Errors:', coelacanthRes.errors);
    if (!coelacanthRes.result || coelacanthRes.errors.length > 0 || !coelacanthRes.result.hasPhoto || !coelacanthRes.result.hasExtralimitalBadge) passed = false;
    await takeScreenshot('browser_10_coelacanth_detail.png');

    // 4. /species/sp-galeocerdo-cuvier
    console.log('\n4. Verifying /species/sp-galeocerdo-cuvier...');
    const tigerRes = await navigateAndEvaluate('http://localhost:2021/species/sp-galeocerdo-cuvier', () => {
      return {
        sciName: document.querySelector('.scientific-name')?.innerText,
        h1: document.querySelector('h1')?.innerText,
        hasPhoto: Boolean(document.querySelector('img')),
        photoSrc: document.querySelector('img')?.src?.slice(0, 100),
        hasSwatchOfNoGround: document.body.innerText.includes('Swatch of No Ground'),
        hasCarcharhiniformes: document.body.innerText.includes('Carcharhiniformes')
      };
    });
    console.log('  Tiger Shark Monograph Result:', tigerRes.result);
    console.log('  Console Errors:', tigerRes.errors);
    if (!tigerRes.result || tigerRes.errors.length > 0 || !tigerRes.result.hasPhoto) passed = false;
    await takeScreenshot('browser_10_tiger_shark_detail.png');

    // 5. /scientific-names
    console.log('\n5. Verifying /scientific-names...');
    const namesRes = await navigateAndEvaluate('http://localhost:2021/scientific-names', () => {
      const rows = document.querySelectorAll('.data-table tbody tr');
      return {
        totalRows: rows.length,
        firstRow: rows[0]?.innerText?.replace(/\s+/g, ' ')?.slice(0, 100),
        hasLatimeria: document.body.innerText.includes('Latimeria chalumnae'),
        hasManta: document.body.innerText.includes('Manta birostris')
      };
    });
    console.log('  Scientific Names Result:', namesRes.result);
    console.log('  Console Errors:', namesRes.errors);
    if (!namesRes.result || namesRes.errors.length > 0 || namesRes.result.totalRows < 60) passed = false;
    await takeScreenshot('browser_10_scientific_names.png');

    // 6. /marine
    console.log('\n6. Verifying /marine...');
    const marineRes = await navigateAndEvaluate('http://localhost:2021/marine', () => {
      return {
        h1: document.querySelector('h1')?.innerText,
        hasBalaenoptera: document.body.innerText.includes('Balaenoptera musculus'),
        hasOctopus: document.body.innerText.includes('Octopus vulgaris')
      };
    });
    console.log('  Marine Portal Result:', marineRes.result);
    console.log('  Console Errors:', marineRes.errors);
    if (!marineRes.result || marineRes.errors.length > 0) passed = false;
    await takeScreenshot('browser_10_marine.png');

    // 7. /bangladesh
    console.log('\n7. Verifying /bangladesh...');
    const bdRes = await navigateAndEvaluate('http://localhost:2021/bangladesh', () => {
      return {
        h1: document.querySelector('h1')?.innerText,
        hasTenualosa: document.body.innerText.includes('Tenualosa ilisha'),
        hasLabeo: document.body.innerText.includes('Labeo rohita'),
        noCoelacanth: !document.body.innerText.includes('Latimeria chalumnae')
      };
    });
    console.log('  Bangladesh Portal Result:', bdRes.result);
    console.log('  Console Errors:', bdRes.errors);
    if (!bdRes.result || bdRes.errors.length > 0 || !bdRes.result.noCoelacanth) passed = false;
    await takeScreenshot('browser_10_bangladesh.png');

    ws.close();
  } catch (err) {
    console.error('Browser verification failed with error:', err);
    passed = false;
  } finally {
    try {
      chrome.kill('SIGKILL');
    } catch (e) {}
    try {
      fs.rmSync(USER_DATA_DIR, { recursive: true, force: true });
    } catch (e) {}
  }

  console.log(`\nOVERALL BROWSER VERIFICATION: ${passed ? 'PASSED 100%' : 'FAILED'}`);
  process.exit(passed ? 0 : 1);
}

run();
