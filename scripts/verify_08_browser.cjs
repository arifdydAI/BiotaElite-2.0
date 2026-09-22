// Browser UI Verification Script for MASTER-FIX-08 using Chrome DevTools Protocol
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const USER_DATA_DIR = path.join(os.tmpdir(), 'chrome_08_final_' + Date.now());
const SCREENSHOTS_DIR = 'C:\\Users\\UESR\\.gemini\\antigravity-ide\\brain\\cec9bfb5-ba0e-45fb-a4be-cb9e904a280e';

if (!fs.existsSync(USER_DATA_DIR)) {
  fs.mkdirSync(USER_DATA_DIR, { recursive: true });
}

const chrome = spawn(CHROME_PATH, [
  '--headless=new',
  '--remote-debugging-port=9228',
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
      const res = await fetch('http://127.0.0.1:9228/json/list');
      const list = await res.json();
      const pageTarget = list && list.find(t => t.type === 'page' && !t.url.startsWith('chrome-extension://'));
      if (pageTarget && pageTarget.webSocketDebuggerUrl) {
        return pageTarget.webSocketDebuggerUrl;
      }
    } catch (e) {}
  }
  throw new Error('Chrome remote debugging did not become ready on port 9228');
}

async function run() {
  let passed = true;
  try {
    console.log('Connecting to Chrome on port 9228...');
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
    const pageExceptions = [];

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.id && pending.has(data.id)) {
        const p = pending.get(data.id);
        pending.delete(data.id);
        if (data.error) p.reject(data.error);
        else p.resolve(data.result);
      } else if (data.method === 'Runtime.consoleAPICalled') {
        if (data.params.type === 'error') {
          const args = data.params.args.map(a => a.value ?? a.description ?? JSON.stringify(a)).join(' ');
          consoleErrors.push(args);
          console.log(`[CONSOLE ERROR] ${args}`);
        }
      } else if (data.method === 'Runtime.exceptionThrown') {
        const ex = data.params.exceptionDetails;
        const msg = ex.exception ? (ex.exception.description || ex.exception.value) : ex.text;
        pageExceptions.push(msg);
        console.log(`[PAGE EXCEPTION] ${msg}`);
      }
    };

    await send('Runtime.enable');
    await send('Page.enable');
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false,
    });

    async function evaluate(expr) {
      const res = await send('Runtime.evaluate', { expression: expr, returnByValue: true });
      return res && res.result ? res.result.value : null;
    }

    async function navigateAndWait(url, readySelector = '#root') {
      console.log(`\nNavigating to: ${url}`);
      await send('Page.navigate', { url });
      for (let i = 0; i < 20; i++) {
        await sleep(500);
        const ready = await evaluate(`Boolean(document.querySelector('${readySelector}')) && document.querySelector('${readySelector}')?.children.length > 0`);
        if (ready) break;
      }
      await sleep(800); // allow hydration
    }

    async function takeScreenshot(name) {
      const ss = await send('Page.captureScreenshot', { format: 'png' });
      const filePath = path.join(SCREENSHOTS_DIR, `${name}.png`);
      fs.writeFileSync(filePath, Buffer.from(ss.data, 'base64'));
      console.log(`Saved screenshot: ${name}.png`);
    }

    console.log('════════════════════════════════════════════════════════════');
    console.log('TEST 1: Global Fish Portal (/fish)');
    console.log('════════════════════════════════════════════════════════════');
    await navigateAndWait('http://localhost:2021/fish');
    const fishRes = await evaluate(`(() => {
      const text = document.body.innerText;
      return {
        title: document.title,
        heading: document.querySelector('h1')?.innerText || '',
        hasAgnatha: text.includes('Agnatha'),
        hasChondrichthyes: text.includes('Chondrichthyes'),
        hasOsteichthyes: text.includes('Osteichthyes'),
        hasMisleadingZero: text.includes('Verified Species in BD: 0'),
      };
    })()`);
    console.log('Fish Portal Evaluation:', fishRes);
    await takeScreenshot('verified_08_fish_portal');
    if (!fishRes.hasAgnatha || !fishRes.hasOsteichthyes || fishRes.hasMisleadingZero) {
      console.error('FAIL: /fish check failed');
      passed = false;
    } else {
      console.log('PASS: /fish verified successfully');
    }

    console.log('\n════════════════════════════════════════════════════════════');
    console.log('TEST 2: Myxiniformes Order View via Route Aliasing (/fish/order-myxiniformes)');
    console.log('════════════════════════════════════════════════════════════');
    await navigateAndWait('http://localhost:2021/fish/order-myxiniformes');
    const myxRes = await evaluate(`(() => {
      const text = document.body.innerText;
      return {
        heading: document.querySelector('h1')?.innerText || '',
        hasMyxiniformes: text.includes('Myxiniformes'),
        hasHagfish: text.includes('Hagfish') || text.includes('হ্যাগফিশ'),
        hasCataloguedMetric: text.includes('Catalogued') || text.includes('ক্যাটালগভুক্ত'),
        hasRegionalContext: text.includes('Regional Context') || text.includes('আঞ্চলিক প্রেক্ষাপট'),
        hasExtralimital: text.includes('Extralimital') || text.includes('Not recorded') || text.includes('বহির্দেশীয়'),
        hasGlobalExamples: text.includes('Global Representative Taxa') || text.includes('আন্তর্জাতিক প্রামাণ্য উদাহরণ') || text.includes('Myxine glutinosa'),
        hasMisleadingZeroBanner: text.includes('Verified Species in BD: 0'),
        hasFailureState: text.includes('Order Not Found') || text.includes('Taxon Record Not Found'),
      };
    })()`);
    console.log('Myxiniformes Evaluation:', myxRes);
    await takeScreenshot('verified_08_myxiniformes_order');
    if (!myxRes.hasMyxiniformes || myxRes.hasFailureState || myxRes.hasMisleadingZeroBanner) {
      console.error('FAIL: /fish/order-myxiniformes check failed');
      passed = false;
    } else {
      console.log('PASS: /fish/order-myxiniformes verified successfully');
    }

    console.log('\n════════════════════════════════════════════════════════════');
    console.log('TEST 3: Agnatha Group View (/fish/group/group-agnatha)');
    console.log('════════════════════════════════════════════════════════════');
    await navigateAndWait('http://localhost:2021/fish/group/group-agnatha');
    const agnathaRes = await evaluate(`(() => {
      const text = document.body.innerText;
      return {
        heading: document.querySelector('h1')?.innerText || '',
        hasAgnatha: text.includes('Agnatha'),
        hasOrders: text.includes('Myxiniformes') && text.includes('Petromyzontiformes'),
        hasCatalogued: text.includes('Catalogued') || text.includes('ক্যাটালগভুক্ত'),
        hasRegionalContext: text.includes('Regional Context') || text.includes('আঞ্চলিক প্রেক্ষাপট'),
        hasMisleadingZero: text.includes('Verified Species in BD: 0'),
      };
    })()`);
    console.log('Agnatha Evaluation:', agnathaRes);
    await takeScreenshot('verified_08_agnatha_group');
    if (!agnathaRes.hasAgnatha || !agnathaRes.hasOrders || agnathaRes.hasMisleadingZero) {
      console.error('FAIL: Agnatha group view check failed');
      passed = false;
    } else {
      console.log('PASS: Agnatha group view verified successfully');
    }

    console.log('\n════════════════════════════════════════════════════════════');
    console.log('TEST 4: Sarcopterygii Class View (/fish/class/class-sarcopterygii)');
    console.log('════════════════════════════════════════════════════════════');
    await navigateAndWait('http://localhost:2021/fish/class/class-sarcopterygii');
    const sarcoRes = await evaluate(`(() => {
      const text = document.body.innerText;
      return {
        heading: document.querySelector('h1')?.innerText || '',
        hasSarcopterygii: text.includes('Sarcopterygii'),
        hasCoelacanth: text.includes('Coelacanthiformes') || text.includes('Ceratodontiformes'),
        hasRegionalContext: text.includes('Regional Context') || text.includes('আঞ্চলিক প্রেক্ষাপট'),
        hasExtralimitalNotice: text.includes('extralimital') || text.includes('বহির্দেশীয়'),
        hasMisleadingZero: text.includes('Verified Species in BD: 0'),
      };
    })()`);
    console.log('Sarcopterygii Evaluation:', sarcoRes);
    await takeScreenshot('verified_08_sarcopterygii_class');
    if (!sarcoRes.hasSarcopterygii || sarcoRes.hasMisleadingZero) {
      console.error('FAIL: Sarcopterygii class view check failed');
      passed = false;
    } else {
      console.log('PASS: Sarcopterygii class view verified successfully');
    }

    console.log('\n════════════════════════════════════════════════════════════');
    console.log('TEST 5: Global Marine Portal (/marine)');
    console.log('════════════════════════════════════════════════════════════');
    await navigateAndWait('http://localhost:2021/marine');
    const marineRes = await evaluate(`(() => {
      const text = document.body.innerText;
      return {
        heading: document.querySelector('h1')?.innerText || '',
        hasPhyla: text.includes('Chordata') || text.includes('Mollusca') || text.includes('Porifera'),
        hasMisleadingZero: text.includes('Verified Species in BD: 0'),
        totalCards: document.querySelectorAll('.card').length,
      };
    })()`);
    console.log('Marine Portal Evaluation:', marineRes);
    await takeScreenshot('verified_08_marine_portal');
    if (marineRes.hasMisleadingZero || marineRes.totalCards === 0) {
      console.error('FAIL: /marine check failed');
      passed = false;
    } else {
      console.log('PASS: /marine verified successfully');
    }

    console.log('\n════════════════════════════════════════════════════════════');
    console.log('TEST 6: Bangladesh Regional Portal (/bangladesh)');
    console.log('════════════════════════════════════════════════════════════');
    await navigateAndWait('http://localhost:2021/bangladesh');
    const bdRes = await evaluate(`(() => {
      const text = document.body.innerText;
      return {
        heading: document.querySelector('h1')?.innerText || '',
        hasHilsa: text.includes('Tenualosa ilisha') || text.includes('ইলিশ'),
        totalCards: document.querySelectorAll('.grid-species .card').length,
      };
    })()`);
    console.log('Bangladesh Portal Evaluation:', bdRes);
    await takeScreenshot('verified_08_bangladesh_portal');
    if (!bdRes.hasHilsa || bdRes.totalCards === 0) {
      console.error('FAIL: /bangladesh check failed');
      passed = false;
    } else {
      console.log('PASS: /bangladesh verified successfully');
    }

    console.log('\n════════════════════════════════════════════════════════════');
    console.log('TEST 7: Species Profile: Tenualosa ilisha (/species/sp-tenualosa-ilisha)');
    console.log('════════════════════════════════════════════════════════════');
    await navigateAndWait('http://localhost:2021/species/sp-tenualosa-ilisha');
    const detailRes = await evaluate(`(() => {
      const text = document.body.innerText;
      const morph = document.getElementById('morphology');
      const eco = document.getElementById('ecology');
      const cons = document.getElementById('conservation');
      const bd = document.getElementById('bangladesh-occurrence');
      return {
        heading: document.querySelector('h1')?.innerText || '',
        hasVerifiedImage: Boolean(document.querySelector('img[src*="Tenualosa_ilisha"]')),
        hasMorphology: Boolean(morph),
        hasEcology: Boolean(eco),
        hasConservation: Boolean(cons),
        hasBdOccurrence: Boolean(bd),
        hasGlobalIUCN: text.includes('Global IUCN') || text.includes('LC'),
        hasNationalIUCN: text.includes('National') || text.includes('BD Red List'),
      };
    })()`);
    console.log('Species Profile Evaluation:', detailRes);
    await takeScreenshot('verified_08_species_profile');
    if (!detailRes.hasVerifiedImage || !detailRes.hasMorphology || !detailRes.hasBdOccurrence) {
      console.error('FAIL: /species/sp-tenualosa-ilisha check failed');
      passed = false;
    } else {
      console.log('PASS: /species/sp-tenualosa-ilisha verified successfully');
    }

    console.log('\n════════════════════════════════════════════════════════════');
    console.log('TEST 8: Decoupled Placeholder Profile: Pangasius pangasius (/species/sp-pangasius-pangasius)');
    console.log('════════════════════════════════════════════════════════════');
    await navigateAndWait('http://localhost:2021/species/sp-pangasius-pangasius');
    const placeholderRes = await evaluate(`(() => {
      const img = document.querySelector('img[alt*="Pangasius"]');
      const placeholder = document.querySelector('.species-image-placeholder');
      return {
        heading: document.querySelector('h1')?.innerText || '',
        hasImage: Boolean(img),
        hasPlaceholder: Boolean(placeholder),
      };
    })()`);
    console.log('Pangasius Evaluation:', placeholderRes);
    await takeScreenshot('verified_08_placeholder_profile');
    if (placeholderRes.hasImage || !placeholderRes.hasPlaceholder) {
      console.error('FAIL: Pangasius placeholder check failed');
      passed = false;
    } else {
      console.log('PASS: Pangasius placeholder gate verified successfully');
    }

    console.log('\n════════════════════════════════════════════════════════════');
    console.log('BROWSER VERIFICATION SUMMARY:');
    console.log(`Console Errors: ${consoleErrors.length}`);
    console.log(`Page Exceptions: ${pageExceptions.length}`);
    console.log('════════════════════════════════════════════════════════════');

    ws.close();
  } catch (err) {
    console.error('Browser testing error:', err);
    passed = false;
  } finally {
    try {
      chrome.kill('SIGKILL');
    } catch (e) {}
    try {
      fs.rmSync(USER_DATA_DIR, { recursive: true, force: true });
    } catch (e) {}
  }

  process.exit(passed ? 0 : 1);
}

run();
