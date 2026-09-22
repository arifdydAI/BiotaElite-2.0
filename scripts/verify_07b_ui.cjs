// Browser UI Verification Script for MASTER-FIX-07B using Chrome DevTools Protocol
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const USER_DATA_DIR = path.join(os.tmpdir(), 'chrome_07b_test_' + Date.now());

if (!fs.existsSync(USER_DATA_DIR)) {
  fs.mkdirSync(USER_DATA_DIR, { recursive: true });
}

const chrome = spawn(CHROME_PATH, [
  '--headless=new',
  '--remote-debugging-port=9224',
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
      const res = await fetch('http://127.0.0.1:9224/json/list');
      const list = await res.json();
      const pageTarget = list && list.find(t => t.type === 'page' && !t.url.startsWith('chrome-extension://'));
      if (pageTarget && pageTarget.webSocketDebuggerUrl) {
        return pageTarget.webSocketDebuggerUrl;
      }
    } catch (e) {}
  }
  throw new Error('Chrome remote debugging did not become ready on port 9224');
}

async function run() {
  let passed = true;
  try {
    console.log('Connecting to Chrome on port 9224...');
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
      await sleep(600); // allow hydration
    }

    console.log('════════════════════════════════════════════════════════════');
    console.log('STEP 1: Test /fish Page');
    console.log('════════════════════════════════════════════════════════════');
    await navigateAndWait('http://localhost:2021/fish');
    const fishCardsInfo = await evaluate(`(() => {
      const cards = Array.from(document.querySelectorAll('.card'));
      const images = Array.from(document.querySelectorAll('.card img')).map(img => ({
        src: img.src.slice(0, 80),
        alt: img.alt
      }));
      const placeholders = Array.from(document.querySelectorAll('.card .species-image-placeholder')).length;
      return { totalCards: cards.length, renderedImages: images.length, placeholders, sampleImages: images.slice(0, 3) };
    })()`);
    console.log('Fish Page Result:', fishCardsInfo);

    console.log('\n════════════════════════════════════════════════════════════');
    console.log('STEP 2: Priority Species Profile: Tenualosa ilisha');
    console.log('════════════════════════════════════════════════════════════');
    await navigateAndWait('http://localhost:2021/species/sp-tenualosa-ilisha');
    const hilsaInfo = await evaluate(`(() => {
      const h1 = document.querySelector('h1')?.innerText;
      const img = document.querySelector('img[alt*="Tenualosa ilisha"]');
      const placeholder = document.querySelector('.species-image-placeholder');
      const sourceBtn = document.querySelector('a[href*="wikimedia"]');
      return {
        h1,
        hasImage: Boolean(img),
        imgSrc: img ? img.src.slice(0, 80) : null,
        hasPlaceholder: Boolean(placeholder),
        hasSourceBtn: Boolean(sourceBtn),
        sourceHref: sourceBtn ? sourceBtn.href.slice(0, 80) : null
      };
    })()`);
    console.log('Tenualosa ilisha Detail:', hilsaInfo);

    console.log('\n════════════════════════════════════════════════════════════');
    console.log('STEP 3: Priority Species Profile: Labeo rohita');
    console.log('════════════════════════════════════════════════════════════');
    await navigateAndWait('http://localhost:2021/species/sp-labeo-rohita');
    const rohuInfo = await evaluate(`(() => {
      const h1 = document.querySelector('h1')?.innerText;
      const img = document.querySelector('img[alt*="Labeo rohita"]');
      const placeholder = document.querySelector('.species-image-placeholder');
      return {
        h1,
        hasImage: Boolean(img),
        imgSrc: img ? img.src.slice(0, 80) : null,
        hasPlaceholder: Boolean(placeholder)
      };
    })()`);
    console.log('Labeo rohita Detail:', rohuInfo);

    console.log('\n════════════════════════════════════════════════════════════');
    console.log('STEP 4: Priority Species Profile: Pangasius pangasius (Placeholder Gate)');
    console.log('════════════════════════════════════════════════════════════');
    await navigateAndWait('http://localhost:2021/species/sp-pangasius-pangasius');
    const pangasInfo = await evaluate(`(() => {
      const h1 = document.querySelector('h1')?.innerText;
      const img = document.querySelector('img[alt*="Pangasius pangasius"]');
      const placeholder = document.querySelector('.species-image-placeholder');
      const placeholderText = placeholder ? placeholder.innerText.replace(/\\s+/g, ' ').trim() : null;
      return {
        h1,
        hasImage: Boolean(img),
        hasPlaceholder: Boolean(placeholder),
        placeholderText
      };
    })()`);
    console.log('Pangasius pangasius Detail:', pangasInfo);

    console.log('\n════════════════════════════════════════════════════════════');
    console.log('STEP 5: Priority Species Profile: Chiloscyllium indicum');
    console.log('════════════════════════════════════════════════════════════');
    await navigateAndWait('http://localhost:2021/species/sp-chiloscyllium-indicum');
    const sharkInfo = await evaluate(`(() => {
      const h1 = document.querySelector('h1')?.innerText;
      const img = document.querySelector('img[alt*="Chiloscyllium indicum"]');
      const placeholder = document.querySelector('.species-image-placeholder');
      return {
        h1,
        hasImage: Boolean(img),
        imgSrc: img ? img.src.slice(0, 80) : null,
        hasPlaceholder: Boolean(placeholder)
      };
    })()`);
    console.log('Chiloscyllium indicum Detail:', sharkInfo);

    console.log('\n════════════════════════════════════════════════════════════');
    console.log('STEP 6: Test /species Explorer');
    console.log('════════════════════════════════════════════════════════════');
    await navigateAndWait('http://localhost:2021/species');
    const explorerInfo = await evaluate(`(() => {
      const cards = Array.from(document.querySelectorAll('.card'));
      const images = Array.from(document.querySelectorAll('.card img'));
      const placeholders = Array.from(document.querySelectorAll('.card .species-image-placeholder'));
      return { totalCards: cards.length, renderedImages: images.length, placeholders: placeholders.length };
    })()`);
    console.log('Species Explorer Result:', explorerInfo);

    console.log('\n════════════════════════════════════════════════════════════');
    console.log('STEP 7: Test /scientific-names (Scientific Name & Synonym Index)');
    console.log('════════════════════════════════════════════════════════════');
    await navigateAndWait('http://localhost:2021/scientific-names');
    const namesInfo = await evaluate(`(() => {
      const rows = Array.from(document.querySelectorAll('tbody tr'));
      const links = Array.from(document.querySelectorAll('tbody tr a[href*="/species/"]')).map(a => a.getAttribute('href'));
      return { totalRows: rows.length, profileLinksCount: links.length, sampleLinks: links.slice(0, 4) };
    })()`);
    console.log('Names & Synonymy Index Result:', namesInfo);

    console.log('\n════════════════════════════════════════════════════════════');
    console.log('STEP 8: Test /marine Portal');
    console.log('════════════════════════════════════════════════════════════');
    await navigateAndWait('http://localhost:2021/marine');
    const marineInfo = await evaluate(`(() => {
      const cards = Array.from(document.querySelectorAll('.card'));
      const images = Array.from(document.querySelectorAll('.card img'));
      return { totalCards: cards.length, renderedImages: images.length };
    })()`);
    console.log('Marine Portal Result:', marineInfo);

    console.log('\n════════════════════════════════════════════════════════════');
    console.log('STEP 9: Test /bangladesh Biodiversity');
    console.log('════════════════════════════════════════════════════════════');
    await navigateAndWait('http://localhost:2021/bangladesh');
    const bdInfo = await evaluate(`(() => {
      const cards = Array.from(document.querySelectorAll('.card'));
      const images = Array.from(document.querySelectorAll('.card img'));
      const placeholders = Array.from(document.querySelectorAll('.card .species-image-placeholder'));
      return { totalCards: cards.length, renderedImages: images.length, placeholders: placeholders.length };
    })()`);
    console.log('Bangladesh Biodiversity Result:', bdInfo);

    console.log('\n════════════════════════════════════════════════════════════');
    console.log('SUMMARY OF BROWSER VERIFICATION:');
    console.log('Console Errors:', consoleErrors.length);
    console.log('Page Exceptions:', pageExceptions.length);
    console.log('════════════════════════════════════════════════════════════');

    if (consoleErrors.length > 0 || pageExceptions.length > 0) {
      passed = false;
    }

  } catch (e) {
    console.error('Browser verification failed with error:', e.message);
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
