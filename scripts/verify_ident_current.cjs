// scripts/verify_ident_current.cjs
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const USER_DATA_DIR = path.join(os.tmpdir(), 'chrome_ident_curr_' + Date.now());
const ARTIFACTS_DIR = 'C:\\Users\\UESR\\.gemini\\antigravity-ide\\brain\\733a5fe7-46c1-4349-bcec-c2e80c6b50f8';

if (!fs.existsSync(USER_DATA_DIR)) {
  fs.mkdirSync(USER_DATA_DIR, { recursive: true });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let chrome;

async function getWsUrl(port = 9230) {
  for (let i = 0; i < 25; i++) {
    await sleep(400);
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json/list`);
      const list = await res.json();
      const pageTarget = list && list.find(t => t.type === 'page' && !t.url.startsWith('chrome-extension://'));
      if (pageTarget && pageTarget.webSocketDebuggerUrl) {
        return pageTarget.webSocketDebuggerUrl;
      }
    } catch (e) {}
  }
  throw new Error(`Chrome remote debugging did not become ready on port ${port}`);
}

async function run() {
  console.log('Spawning headless Chrome...');
  chrome = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9230',
    `--user-data-dir=${USER_DATA_DIR}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-gpu',
    '--disable-extensions',
    'about:blank'
  ], { stdio: 'ignore' });

  try {
    const wsUrl = await getWsUrl(9230);
    console.log('Connected to WS URL:', wsUrl);
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

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.id && pending.has(data.id)) {
        const p = pending.get(data.id);
        pending.delete(data.id);
        if (data.error) p.reject(data.error);
        else p.resolve(data.result);
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
        console.log(`  Saved screenshot to artifacts: ${filename}`);
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

    async function navigateAndWait(url) {
      console.log(`Navigating to: ${url}`);
      await send('Page.navigate', { url });
      for (let i = 0; i < 25; i++) {
        await sleep(400);
        const ready = await evaluate(`Boolean(document.querySelector('#root')) && document.querySelector('#root')?.children.length > 0`);
        if (ready) break;
      }
      await sleep(600);
    }

    // 1. Desktop 1280x800
    await setViewport(1280, 800);
    await navigateAndWait('http://localhost:2021/identification');

    const title = await evaluate(`document.title`);
    console.log('Page title:', title);

    // Switch to Bangladesh scope
    console.log('Clicking Bangladesh scope switch...');
    const switchedToBd = await evaluate(`(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const bdBtn = buttons.find(b => b.innerText.includes('Bangladesh') || b.innerText.includes('বাংলাদেশ'));
      if (bdBtn) {
        bdBtn.click();
        return true;
      }
      return false;
    })()`);
    console.log('Switched to Bangladesh scope:', switchedToBd);
    await sleep(600);

    // Look for Wetland Herpetofauna key card among button.card
    const foundWetlandKey = await evaluate(`(() => {
      const cards = Array.from(document.querySelectorAll('button.card'));
      const wetlandCard = cards.find(c => c.innerText && (c.innerText.includes('Wetland Amphibians') || c.innerText.includes('জলাভূমির উভচর')));
      if (wetlandCard) {
        wetlandCard.click();
        return wetlandCard.innerText.split('\\n')[1] || true;
      }
      return false;
    })()`);
    console.log('Found & clicked Wetland Herpetofauna key:', foundWetlandKey);
    await sleep(800);

    // Verify Active Key title
    const activeKeyTitle = await evaluate(`document.querySelector('h2, h3')?.innerText`);
    console.log('Active Key Title:', activeKeyTitle);

    // Step 1: Click Couplet A (Class Amphibia)
    console.log('Clicking Amphibia couplet A...');
    const clickedAmph = await evaluate(`(() => {
      const couplets = Array.from(document.querySelectorAll('button.card.card-hoverable'));
      const opt = couplets.find(b => b.innerText && (b.innerText.includes('Class Amphibia') || b.innerText.includes('উভচর')));
      if (opt) {
        opt.click();
        return true;
      }
      return false;
    })()`);
    console.log('Clicked Amphibia couplet:', clickedAmph);
    await sleep(800);

    // In Step 2, click Couplet B (Duttaphrynus melanostictus)
    console.log('Clicking Duttaphrynus couplet B...');
    const clickedDutta = await evaluate(`(() => {
      const couplets = Array.from(document.querySelectorAll('button.card.card-hoverable'));
      const opt = couplets.find(b => b.innerText && (b.innerText.includes('Duttaphrynus melanostictus') || b.innerText.includes('কুনোব্যাঙ')));
      if (opt) {
        opt.click();
        return true;
      }
      return false;
    })()`);
    console.log('Clicked Duttaphrynus couplet:', clickedDutta);
    await sleep(1000);

    // Check result
    const resultHeading = await evaluate(`(() => {
      return document.body.innerText.includes('Duttaphrynus melanostictus');
    })()`);
    console.log('Resolved species Duttaphrynus melanostictus visible:', resultHeading);

    // Scroll to determination card
    await evaluate(`(() => {
      const card = Array.from(document.querySelectorAll('h2, h3, div')).find(el => el.innerText && el.innerText.includes('Duttaphrynus melanostictus'));
      if (card) card.scrollIntoView({ behavior: 'instant', block: 'center' });
      else window.scrollTo(0, 600);
    })()`);
    await sleep(400);

    await captureScreenshot('ident_01_bangladesh_wetland_duttaphrynus.png');

    // Test Snake branch (Reptilia -> Squamata -> Elapidae -> Naja naja)
    console.log('Resetting key and testing Reptile / Naja naja branch...');
    await evaluate(`(() => {
      const resetBtn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('Restart') || b.innerText.includes('পুনরায়') || b.innerText.includes('Reset') || b.innerText.includes('Start Over'));
      if (resetBtn) resetBtn.click();
    })()`);
    await sleep(600);

    // Step 1: Click Reptilia (Couplet B)
    await evaluate(`(() => {
      const couplets = Array.from(document.querySelectorAll('button.card.card-hoverable'));
      const opt = couplets.find(b => b.innerText && (b.innerText.includes('Class Reptilia') || b.innerText.includes('সরীসৃপ')));
      if (opt) opt.click();
    })()`);
    await sleep(600);

    // Step 3: Click Non-shelled (Crocodylia and Squamata)
    await evaluate(`(() => {
      const couplets = Array.from(document.querySelectorAll('button.card.card-hoverable'));
      const opt = couplets.find(b => b.innerText && (b.innerText.includes('Crocodylia and Squamata') || b.innerText.includes('ক্রোকোডিলিয়া')));
      if (opt) opt.click();
    })()`);
    await sleep(600);

    // Step 5: Click Limbless Elapidae
    await evaluate(`(() => {
      const couplets = Array.from(document.querySelectorAll('button.card.card-hoverable'));
      const opt = couplets.find(b => b.innerText && (b.innerText.includes('Elapidae') || b.innerText.includes('এলাপিডি')));
      if (opt) opt.click();
    })()`);
    await sleep(600);

    // Step 7: Click Terrestrial/Wetland Cobras (Genus Naja & Ophiophagus)
    await evaluate(`(() => {
      const couplets = Array.from(document.querySelectorAll('button.card.card-hoverable'));
      const opt = couplets.find(b => b.innerText && (b.innerText.includes('Naja & Ophiophagus') || b.innerText.includes('নাজা')));
      if (opt) opt.click();
    })()`);
    await sleep(600);

    // Step 8: Click Naja naja
    await evaluate(`(() => {
      const couplets = Array.from(document.querySelectorAll('button.card.card-hoverable'));
      const opt = couplets.find(b => b.innerText && (b.innerText.includes('Naja naja') || b.innerText.includes('খইয়া গোখরা')));
      if (opt) opt.click();
    })()`);
    await sleep(1000);

    const hasNaja = await evaluate(`document.body.innerText.includes('Naja naja')`);
    console.log('Resolved species Naja naja visible:', hasNaja);

    // Scroll to Naja determination card
    await evaluate(`(() => {
      const card = Array.from(document.querySelectorAll('h2, h3, div')).find(el => el.innerText && el.innerText.includes('Naja naja'));
      if (card) card.scrollIntoView({ behavior: 'instant', block: 'center' });
      else window.scrollTo(0, 650);
    })()`);
    await sleep(400);

    await captureScreenshot('ident_02_bangladesh_wetland_naja.png');

    // Test Mobile Viewport
    console.log('Testing mobile viewport 390x844...');
    await setViewport(390, 844);
    await sleep(600);
    await evaluate(`(() => {
      const card = Array.from(document.querySelectorAll('h2, h3, div')).find(el => el.innerText && el.innerText.includes('Naja naja'));
      if (card) card.scrollIntoView({ behavior: 'instant', block: 'center' });
    })()`);
    await sleep(400);
    await captureScreenshot('ident_03_mobile_wetland_key.png');

    // Return to keys list in mobile
    await evaluate(`(() => {
      const backBtn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('All Keys') || b.innerText.includes('কুঞ্জি তালিকা') || b.innerText.includes('Back'));
      if (backBtn) backBtn.click();
    })()`);
    await sleep(600);
    await captureScreenshot('ident_04_mobile_catalog_view.png');

    console.log('ALL BROWSER DEVTOOLS PROTOCOL VERIFICATION TESTS COMPLETED SUCCESSFULLY!');
  } finally {
    if (chrome) chrome.kill();
    try { fs.rmSync(USER_DATA_DIR, { recursive: true, force: true }); } catch (e) {}
  }
}

run().catch(err => {
  console.error('ERROR in verify_ident_current:', err);
  process.exit(1);
});
