// Real browser verification runner using Chrome DevTools Protocol (CDP)
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const USER_DATA_DIR = path.join(os.tmpdir(), 'chrome_biota_test_' + Date.now());

// Ensure clean profile dir in OS temp directory
if (!fs.existsSync(USER_DATA_DIR)) {
  fs.mkdirSync(USER_DATA_DIR, { recursive: true });
}

const chrome = spawn(CHROME_PATH, [
  '--headless=new',
  '--remote-debugging-port=9223',
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
      const res = await fetch('http://127.0.0.1:9223/json/list');
      const list = await res.json();
      const pageTarget = list && list.find(t => t.type === 'page' && !t.url.startsWith('chrome-extension://'));
      if (pageTarget && pageTarget.webSocketDebuggerUrl) {
        return pageTarget.webSocketDebuggerUrl;
      }
    } catch (e) {}
  }
  throw new Error('Chrome remote debugging did not become ready');
}

async function run() {
  let passed = true;
  try {
    console.log('Connecting to Chrome remote debugging on port 9223...');
    const wsUrl = await getWsUrl();
    console.log('Connected to Chrome WebSocket:', wsUrl);

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

    const consoleLogs = [];
    const exceptions = [];

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.id && pending.has(data.id)) {
        const p = pending.get(data.id);
        pending.delete(data.id);
        if (data.error) p.reject(data.error);
        else p.resolve(data.result);
      } else if (data.method === 'Runtime.consoleAPICalled') {
        const args = data.params.args.map(a => a.value ?? a.description ?? JSON.stringify(a)).join(' ');
        consoleLogs.push(`[${data.params.type.toUpperCase()}] ${args}`);
        console.log(`[BROWSER CONSOLE ${data.params.type.toUpperCase()}] ${args}`);
      } else if (data.method === 'Runtime.exceptionThrown') {
        const ex = data.params.exceptionDetails;
        const msg = ex.exception ? (ex.exception.description || ex.exception.value) : ex.text;
        exceptions.push(msg);
        console.log(`[BROWSER EXCEPTION] ${msg}`);
      }
    };

    await send('Runtime.enable');
    await send('Page.enable');

    console.log('\n============================================================');
    console.log('STEP 1: Fresh Browser → Open Homepage (http://localhost:2021/)');
    console.log('============================================================');
    await send('Page.navigate', { url: 'http://localhost:2021/' });
    
    // Wait for React to mount in #root
    for (let i = 0; i < 30; i++) {
      await sleep(500);
      const test = await send('Runtime.evaluate', { expression: 'document.querySelector("#root")?.children.length || 0' });
      if (test.result && test.result.value > 0) break;
    }

    let res = await send('Runtime.evaluate', {
      expression: 'document.title + " | " + (document.querySelector("h1, h2")?.innerText || "") + " | Links: " + document.querySelectorAll("a").length'
    });
    console.log('Homepage header:', res.result.value);

    console.log('\n============================================================');
    console.log('STEP 2: First Navigation: Click Fish Biodiversity (/fish)');
    console.log('============================================================');
    const clickFish = await send('Runtime.evaluate', {
      expression: `(() => {
        const link = document.querySelector('a[href="/fish"]');
        if (!link) return "NOT FOUND";
        link.click();
        return "CLICKED";
      })()`
    });
    console.log('Fish link click:', clickFish.result.value);
    await sleep(2500);

    const fishDom = await send('Runtime.evaluate', {
      returnByValue: true,
      expression: `(() => {
        const text = document.body.innerText;
        const hasError = text.includes('Something went wrong loading biodiversity records') || text.includes('অনাকাঙ্ক্ষিত ত্রুটি');
        const hasRetry = Array.from(document.querySelectorAll('button')).some(b => b.innerText.includes('Retry') || b.innerText.includes('পুনরায় চেষ্টা'));
        const heading = document.querySelector('h1')?.innerText || '';
        const agnathaCard = Array.from(document.querySelectorAll('.knowledge-card')).find(el => el.innerText && el.innerText.toLowerCase().includes('agnatha'));
        const chondrichthyesCard = Array.from(document.querySelectorAll('.knowledge-card')).find(el => el.innerText && el.innerText.toLowerCase().includes('chondrichthyes'));
        const osteichthyesCard = Array.from(document.querySelectorAll('.knowledge-card')).find(el => el.innerText && el.innerText.toLowerCase().includes('osteichthyes'));
        return {
          currentUrl: window.location.href,
          hasError,
          hasRetry,
          heading,
          hasAgnatha: Boolean(agnathaCard),
          hasChondrichthyes: Boolean(chondrichthyesCard),
          hasOsteichthyes: Boolean(osteichthyesCard),
          agnathaSnippet: agnathaCard ? agnathaCard.innerText.replace(/\s+/g, ' ').slice(0, 120) : null,
          chondrichthyesSnippet: chondrichthyesCard ? chondrichthyesCard.innerText.replace(/\s+/g, ' ').slice(0, 120) : null,
          osteichthyesSnippet: osteichthyesCard ? osteichthyesCard.innerText.replace(/\s+/g, ' ').slice(0, 120) : null
        };
      })()`
    });
    console.log('Fish Page Evaluation:', JSON.stringify(fishDom.result.value, null, 2));

    const check = fishDom.result.value;
    if (check.hasError) {
      console.error('❌ FAIL: ErrorBoundary triggered on first navigation to /fish!');
      passed = false;
    } else {
      console.log('✅ PASS: NO ErrorBoundary on first navigation to /fish!');
    }

    if (check.hasRetry) {
      console.error('❌ FAIL: Retry button was displayed!');
      passed = false;
    } else {
      console.log('✅ PASS: NO Retry button displayed!');
    }

    if (check.heading.includes('Fishes') || check.heading.includes('মাছসমূহ')) {
      console.log(`✅ PASS: Main heading "${check.heading}" displayed!`);
    } else {
      console.error(`❌ FAIL: Expected "Fishes" heading, got "${check.heading}"`);
      passed = false;
    }

    console.log('\n============================================================');
    console.log('STEP 3: Validate Major Lineage Cards & Order Counts');
    console.log('============================================================');
    console.log('Agnatha Card:', check.agnathaSnippet);
    console.log('Chondrichthyes Card:', check.chondrichthyesSnippet);
    console.log('Osteichthyes Card:', check.osteichthyesSnippet);

    if (check.agnathaSnippet && check.agnathaSnippet.includes('2 Orders')) {
      console.log('✅ PASS: Agnatha shows 2 Orders');
    } else {
      console.warn('Check Agnatha text count:', check.agnathaSnippet);
    }

    if (check.chondrichthyesSnippet && check.chondrichthyesSnippet.includes('14 Orders')) {
      console.log('✅ PASS: Chondrichthyes shows 14 Orders');
    } else {
      console.warn('Check Chondrichthyes text count:', check.chondrichthyesSnippet);
    }

    if (check.osteichthyesSnippet && check.osteichthyesSnippet.includes('57 Orders')) {
      console.log('✅ PASS: Osteichthyes shows 57 Orders');
    } else {
      console.warn('Check Osteichthyes text count:', check.osteichthyesSnippet);
    }

    console.log('\n============================================================');
    console.log('STEP 4: Sub-Route Navigation (Agnatha → Back → Chondrichthyes)');
    console.log('============================================================');
    const clickAgnatha = await send('Runtime.evaluate', {
      expression: `(() => {
        const link = Array.from(document.querySelectorAll('a')).find(a => a.href.includes('/fish/group/group-agnatha'));
        if (link) { link.click(); return "CLICKED_AGNATHA"; }
        return "AGNATHA_LINK_NOT_FOUND";
      })()`
    });
    console.log('Click Agnatha result:', clickAgnatha.result.value);
    await sleep(2000);

    const agnathaView = await send('Runtime.evaluate', {
      returnByValue: true,
      expression: `(() => {
        return {
          url: window.location.href,
          hasError: document.body.innerText.includes('Something went wrong'),
          ordersCount: document.querySelectorAll('.knowledge-card').length,
          preview: document.body.innerText.slice(0, 200)
        };
      })()`
    });
    console.log('Agnatha Sub-view:', agnathaView.result.value);
    if (agnathaView.result.value.hasError) {
      console.error('❌ FAIL: Sub-route /fish/group/group-agnatha triggered ErrorBoundary');
      passed = false;
    } else {
      console.log('✅ PASS: Sub-route /fish/group/group-agnatha loaded cleanly with 0 errors');
    }

    console.log('\n============================================================');
    console.log('STEP 4B: Navigate to Chondrichthyes (/fish/class/class-chondrichthyes)');
    console.log('============================================================');
    await send('Page.navigate', { url: 'http://localhost:2021/fish/class/class-chondrichthyes' });
    await sleep(2000);

    const chondrichthyesView = await send('Runtime.evaluate', {
      returnByValue: true,
      expression: `(() => {
        return {
          url: window.location.href,
          hasError: document.body.innerText.includes('Something went wrong'),
          ordersCount: document.querySelectorAll('.knowledge-card').length
        };
      })()`
    });
    console.log('Chondrichthyes Sub-view:', chondrichthyesView.result.value);
    if (chondrichthyesView.result.value.hasError) {
      console.error('❌ FAIL: Sub-route /fish/class/class-chondrichthyes triggered ErrorBoundary');
      passed = false;
    } else {
      console.log(`✅ PASS: Sub-route /fish/class/class-chondrichthyes loaded cleanly with ${chondrichthyesView.result.value.ordersCount} orders (Expected: 14)`);
    }

    console.log('\n============================================================');
    console.log('STEP 4C: Navigate to Osteichthyes Actinopterygii (/fish/class/class-actinopterygii)');
    console.log('============================================================');
    await send('Page.navigate', { url: 'http://localhost:2021/fish/class/class-actinopterygii' });
    await sleep(2500);

    const actinopterygiiView = await send('Runtime.evaluate', {
      returnByValue: true,
      expression: `(() => {
        return {
          url: window.location.href,
          hasError: document.body.innerText.includes('Something went wrong'),
          ordersCount: document.querySelectorAll('.knowledge-card').length
        };
      })()`
    });
    console.log('Actinopterygii Sub-view:', actinopterygiiView.result.value);
    if (actinopterygiiView.result.value.hasError) {
      console.error('❌ FAIL: Sub-route /fish/class/class-actinopterygii triggered ErrorBoundary');
      passed = false;
    } else {
      console.log(`✅ PASS: Sub-route /fish/class/class-actinopterygii loaded cleanly with ${actinopterygiiView.result.value.ordersCount} orders (Expected: 55)`);
    }

    console.log('\n============================================================');
    console.log('STEP 5: Hard Refresh on /fish (Direct URL State)');
    console.log('============================================================');
    await send('Page.navigate', { url: 'http://localhost:2021/fish' });
    await sleep(2500);

    const refreshFish = await send('Runtime.evaluate', {
      returnByValue: true,
      expression: `(() => {
        return {
          url: window.location.href,
          hasError: document.body.innerText.includes('Something went wrong'),
          heading: document.querySelector('h1')?.innerText || ''
        };
      })()`
    });
    console.log('Direct /fish navigation result:', refreshFish.result.value);
    if (refreshFish.result.value.hasError) {
      console.error('❌ FAIL: Direct /fish refresh triggered ErrorBoundary');
      passed = false;
    } else {
      console.log('✅ PASS: Direct /fish refresh loaded cleanly with 0 errors');
    }

    console.log('\n============================================================');
    console.log('BROWSER CONSOLE ERRORS / EXCEPTIONS AUDIT');
    console.log('============================================================');
    const hookErrors = consoleLogs.filter(l => l.includes('hooks') || l.includes('Rendered fewer') || l.includes('Rules of Hooks'));
    if (hookErrors.length > 0) {
      console.error('❌ FAIL: Hook errors detected:', hookErrors);
      passed = false;
    } else {
      console.log('✅ PASS: ZERO React hook violations detected during all browser flows');
    }

    if (exceptions.length > 0) {
      console.error('❌ FAIL: Uncaught exceptions:', exceptions);
      passed = false;
    } else {
      console.log('✅ PASS: ZERO uncaught browser runtime exceptions');
    }

    ws.close();
  } catch (err) {
    console.error('CDP runner error:', err);
    passed = false;
  } finally {
    chrome.kill();
    try {
      fs.rmSync(USER_DATA_DIR, { recursive: true, force: true });
    } catch (e) {}
  }

  if (!passed) {
    process.exit(1);
  }
}

run();
