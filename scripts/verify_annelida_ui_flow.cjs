// scripts/verify_annelida_ui_flow.cjs
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = path.join(os.tmpdir(), 'chrome_annelida_ui_' + Date.now());
fs.mkdirSync(userDataDir, { recursive: true });

const chrome = spawn(CHROME, [
  '--headless=new',
  '--remote-debugging-port=9230',
  '--user-data-dir=' + userDataDir,
  '--no-first-run',
  '--disable-gpu',
  'about:blank'
], { stdio: 'ignore' });

async function getWsUrl() {
  for (let i = 0; i < 30; i++) {
    await new Promise(r => setTimeout(r, 300));
    try {
      const res = await fetch('http://127.0.0.1:9230/json/list');
      const list = await res.json();
      const p = list.find(t => t.type === 'page' && !t.url.startsWith('chrome-extension://'));
      if (p && p.webSocketDebuggerUrl) return p.webSocketDebuggerUrl;
    } catch (e) {}
  }
  throw new Error('Chrome remote debugging not ready');
}

async function run() {
  try {
    const wsUrl = await getWsUrl();
    const ws = new WebSocket(wsUrl);
    await new Promise(r => ws.onopen = r);

    let id = 1;
    const pending = new Map();
    ws.onmessage = (evt) => {
      const msg = JSON.parse(evt.data);
      if (msg.id && pending.has(msg.id)) {
        const { resolve } = pending.get(msg.id);
        pending.delete(msg.id);
        resolve(msg.result);
      }
    };
    function send(method, params = {}) {
      return new Promise(resolve => {
        const reqId = id++;
        pending.set(reqId, { resolve });
        ws.send(JSON.stringify({ id: reqId, method, params }));
      });
    }

    await send('Page.enable');
    await send('Runtime.enable');

    console.log('1. Navigating to Taxonomy Hub: http://localhost:2021/taxonomy...');
    await send('Page.navigate', { url: 'http://localhost:2021/taxonomy' });
    await new Promise(r => setTimeout(r, 2500));

    // Step 2: Click on Annelida card via normal navigation path
    console.log('2. Clicking Annelida card from Taxonomy Hub...');
    const clickRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const links = Array.from(document.querySelectorAll('a[href*="annelida"]'));
        if (links.length > 0) {
          links[0].click();
          return { clicked: true, href: links[0].getAttribute('href') };
        }
        // Try cards
        const cards = Array.from(document.querySelectorAll('.card, article'));
        const annCard = cards.find(c => c.innerText.includes('Annelida'));
        if (annCard) {
          const btn = annCard.querySelector('a, button');
          if (btn) {
            btn.click();
            return { clicked: true, text: 'card button clicked' };
          }
        }
        return { clicked: false };
      })()`,
      returnByValue: true
    });
    console.log('Click result:', clickRes.result?.value);

    await new Promise(r => setTimeout(r, 3000));

    // Step 3: Inspect the rendered page
    console.log('3. Inspecting the live /taxonomy/annelida page DOM...');
    const pageRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const url = window.location.href;
        const h1 = document.querySelector('h1')?.innerText || '';
        const badges = Array.from(document.querySelectorAll('[class*="badge"], [style*="border-radius"]')).map(b => b.innerText);
        const speciesCards = Array.from(document.querySelectorAll('.grid-species > div, [class*="SpeciesCard"], .species-card'));
        
        const cardDetails = speciesCards.map((c, idx) => {
          const text = c.innerText.replace(/\\s+/g, ' ');
          const title = c.querySelector('h3, h4, .scientific-name, [class*="title"]')?.innerText || '';
          const img = c.querySelector('img')?.getAttribute('src') || '';
          return { index: idx + 1, title, snippet: text.slice(0, 80), hasImg: !!img };
        });

        return {
          currentUrl: url,
          h1: h1.replace(/\\s+/g, ' '),
          speciesCardsCount: speciesCards.length,
          cardDetails
        };
      })()`,
      returnByValue: true
    });
    console.log('Page Inspection Result:\n', JSON.stringify(pageRes.result?.value, null, 2));

    // Step 4: Capture screenshot artifact
    const artifactPath = path.resolve('C:\\Users\\UESR\\.gemini\\antigravity-ide\\brain\\733a5fe7-46c1-4349-bcec-c2e80c6b50f8\\depth_08_annelida_verified.png');
    const screenshot = await send('Page.captureScreenshot', { format: 'png' });
    if (screenshot && screenshot.data) {
      fs.writeFileSync(artifactPath, Buffer.from(screenshot.data, 'base64'));
      console.log('✓ Screenshot saved to:', artifactPath);
    }

    // Step 5: Check Ctenophora at /taxonomy/ctenophora
    console.log('\n4. Checking Ctenophora page: http://localhost:2021/taxonomy/ctenophora...');
    await send('Page.navigate', { url: 'http://localhost:2021/taxonomy/ctenophora' });
    await new Promise(r => setTimeout(r, 2500));

    const ctenoPageRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const text = document.body.innerText;
        const speciesCards = Array.from(document.querySelectorAll('.grid-species > div, [class*="SpeciesCard"], .species-card'));
        return {
          currentUrl: window.location.href,
          h1: document.querySelector('h1')?.innerText?.replace(/\\s+/g, ' '),
          hasLumbricus: text.includes('Lumbricus'),
          hasEisenia: text.includes('Eisenia'),
          hasPleurobrachia: text.includes('Pleurobrachia'),
          hasBeroe: text.includes('Beroe'),
          hasMnemiopsis: text.includes('Mnemiopsis'),
          hasCestum: text.includes('Cestum'),
          speciesCardsCount: speciesCards.length,
          cardsSnippet: speciesCards.map(c => c.innerText.slice(0, 60).replace(/\\s+/g, ' '))
        };
      })()`,
      returnByValue: true
    });
    console.log('Ctenophora Inspection Result:\n', JSON.stringify(ctenoPageRes.result?.value, null, 2));

    ws.close();
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  } finally {
    chrome.kill();
    try { fs.rmSync(userDataDir, { recursive: true, force: true }); } catch (e) {}
  }
}

run();
