// scripts/diagnose_annelida_ui.cjs
const { spawn } = require('child_process');
const os = require('os');
const path = require('path');
const fs = require('fs');

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = path.join(os.tmpdir(), 'chrome_diag_' + Date.now());
fs.mkdirSync(userDataDir, { recursive: true });

async function run() {
  const chrome = spawn(CHROME, [
    '--headless=new',
    '--remote-debugging-port=9229',
    '--user-data-dir=' + userDataDir,
    '--no-first-run',
    '--disable-gpu',
    'about:blank'
  ]);

  let wsUrl = null;
  for (let i = 0; i < 30; i++) {
    await new Promise(r => setTimeout(r, 300));
    try {
      const res = await fetch('http://127.0.0.1:9229/json/list');
      const list = await res.json();
      const page = list.find(t => t.type === 'page');
      if (page && page.webSocketDebuggerUrl) {
        wsUrl = page.webSocketDebuggerUrl;
        break;
      }
    } catch (e) {}
  }

  if (!wsUrl) {
    console.error('Failed to get wsUrl');
    chrome.kill();
    return;
  }

  const ws = new WebSocket(wsUrl);
  await new Promise(r => ws.onopen = r);

  let id = 1;
  const pending = new Map();
  const consoleMessages = [];

  ws.onmessage = (evt) => {
    const msg = JSON.parse(evt.data);
    if (msg.method === 'Runtime.consoleAPICalled') {
      consoleMessages.push(msg.params.args.map(a => a.value || a.description).join(' '));
    }
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
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  await send('Page.enable');
  await send('Runtime.enable');

  console.log('Navigating to http://localhost:2021/taxonomy/annelida...');
  await send('Page.navigate', { url: 'http://localhost:2021/taxonomy/annelida' });
  await new Promise(r => setTimeout(r, 3000));

  const annelidaEval = await send('Runtime.evaluate', {
    expression: `(() => {
      const text = document.body.innerText;
      const point10Idx = text.indexOf('10');
      const point10Snippet = point10Idx !== -1 ? text.slice(point10Idx, point10Idx + 1200) : 'NOT FOUND';
      
      const cards = Array.from(document.querySelectorAll('.card, article, [class*="card"]'));
      const speciesCards = cards.filter(c => c.innerText.includes('SPECIES') || c.innerText.includes('Textbook') || c.querySelector('img'));
      
      return {
        title: document.title,
        bodyLen: text.length,
        hasLumbricus: text.includes('Lumbricus'),
        hasEisenia: text.includes('Eisenia'),
        hasTubifex: text.includes('Tubifex'),
        hasHirudo: text.includes('Hirudo'),
        hasSabella: text.includes('Sabella'),
        hasArenicola: text.includes('Arenicola'),
        hasAlitta: text.includes('Alitta'),
        hasPleurobrachia: text.includes('Pleurobrachia'),
        point10Snippet: point10Snippet.replace(/\\s+/g, ' '),
        speciesCardsCount: speciesCards.length,
        speciesCardTexts: speciesCards.map(c => c.innerText.slice(0, 120).replace(/\\s+/g, ' '))
      };
    })()`,
    returnByValue: true
  });

  console.log('Annelida Page Diagnosis:', JSON.stringify(annelidaEval.result ? annelidaEval.result.value : annelidaEval, null, 2));

  // Now check /taxonomy
  console.log('\nNavigating to http://localhost:2021/taxonomy...');
  await send('Page.navigate', { url: 'http://localhost:2021/taxonomy' });
  await new Promise(r => setTimeout(r, 3000));

  const hubEval = await send('Runtime.evaluate', {
    expression: `(() => {
      const text = document.body.innerText;
      const annelidaCard = Array.from(document.querySelectorAll('.card')).find(c => c.innerText.includes('Annelida'));
      
      // In the Linnaean Tree, look for Annelida
      const treeItems = Array.from(document.querySelectorAll('[class*="Tree"], [class*="node"], [class*="taxon"]'))
        .map(el => el.innerText.replace(/\\s+/g, ' ')).filter(t => t.includes('Annelida'));

      return {
        annelidaCardText: annelidaCard ? annelidaCard.innerText.replace(/\\s+/g, ' ') : 'NOT FOUND',
        treeItemsSample: treeItems.slice(0, 5)
      };
    })()`,
    returnByValue: true
  });

  console.log('Taxonomy Hub Diagnosis:', JSON.stringify(hubEval.result ? hubEval.result.value : hubEval, null, 2));

  chrome.kill();
  try { fs.rmSync(userDataDir, { recursive: true, force: true }); } catch (e) {}
}

run();
