// scripts/check_annelida_dom.cjs
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = path.join(os.tmpdir(), 'chrome_check_' + Date.now());
fs.mkdirSync(userDataDir, { recursive: true });

const chrome = spawn(CHROME, [
  '--headless=new',
  '--remote-debugging-port=9228',
  '--user-data-dir=' + userDataDir,
  '--no-first-run',
  '--disable-gpu',
  'about:blank'
], { stdio: 'ignore' });

async function getWsUrl() {
  for (let i = 0; i < 25; i++) {
    await new Promise(r => setTimeout(r, 300));
    try {
      const res = await fetch('http://127.0.0.1:9228/json/list');
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
    console.log('Navigating to http://localhost:2021/taxonomy/annelida...');
    await send('Page.navigate', { url: 'http://localhost:2021/taxonomy/annelida' });
    await new Promise(r => setTimeout(r, 2500));

    const evalResult = await send('Runtime.evaluate', {
      expression: `(() => {
        const allCards = Array.from(document.querySelectorAll('.card, .knowledge-point-card, [class*="card"]'));
        const speciesCards = Array.from(document.querySelectorAll('.grid-species > div, [class*="SpeciesCard"], .species-card'));
        const point10 = Array.from(document.querySelectorAll('.knowledge-point-card')).find(c => c.innerText.includes('10') || c.innerText.includes('Examples') || c.innerText.includes('উদাহরণ'));
        
        return {
          title: document.title,
          h1: document.querySelector('h1')?.innerText,
          speciesCardsInGrid: speciesCards.length,
          speciesCardsTexts: speciesCards.map(c => c.innerText.slice(0, 100).replace(/\\s+/g, ' ')),
          point10Snippet: point10 ? point10.innerText.slice(0, 500).replace(/\\s+/g, ' ') : 'POINT 10 NOT FOUND',
          bodyTextContains: {
            Lumbricus: document.body.innerText.includes('Lumbricus'),
            Eisenia: document.body.innerText.includes('Eisenia'),
            Tubifex: document.body.innerText.includes('Tubifex'),
            Hirudo: document.body.innerText.includes('Hirudo'),
            Sabella: document.body.innerText.includes('Sabella'),
            Arenicola: document.body.innerText.includes('Arenicola'),
            Alitta: document.body.innerText.includes('Alitta')
          }
        };
      })()`,
      returnByValue: true
    });
    console.log('Live DOM Result:', JSON.stringify(evalResult.result ? evalResult.result.value : evalResult, null, 2));

    // Also check navigating from /taxonomy
    console.log('\nNavigating to http://localhost:2021/taxonomy...');
    await send('Page.navigate', { url: 'http://localhost:2021/taxonomy' });
    await new Promise(r => setTimeout(r, 2500));

    const hubResult = await send('Runtime.evaluate', {
      expression: `(() => {
        const cards = Array.from(document.querySelectorAll('.card'));
        const annelidaCard = cards.find(c => c.innerText.includes('Annelida'));
        return {
          annelidaCardText: annelidaCard ? annelidaCard.innerText.replace(/\\s+/g, ' ') : 'NOT FOUND'
        };
      })()`,
      returnByValue: true
    });
    console.log('Taxonomy Hub Result:', JSON.stringify(hubResult.result ? hubResult.result.value : hubResult, null, 2));

    ws.close();
  } catch (err) {
    console.error('Error:', err);
  } finally {
    chrome.kill();
    try { fs.rmSync(userDataDir, { recursive: true, force: true }); } catch (e) {}
  }
}
run();
