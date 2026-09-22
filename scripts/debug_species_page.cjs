const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const USER_DATA_DIR = path.join(os.tmpdir(), 'chrome_debug_' + Date.now());

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function debug() {
  const chrome = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9229',
    `--user-data-dir=${USER_DATA_DIR}`,
    '--no-first-run',
    '--no-default-browser-check',
    'about:blank'
  ], { stdio: 'ignore' });

  let wsUrl;
  for (let i = 0; i < 20; i++) {
    await sleep(300);
    try {
      const res = await fetch('http://127.0.0.1:9229/json/list');
      const list = await res.json();
      const pt = list && list.find(t => t.type === 'page');
      if (pt && pt.webSocketDebuggerUrl) {
        wsUrl = pt.webSocketDebuggerUrl;
        break;
      }
    } catch (e) {}
  }

  const ws = new WebSocket(wsUrl);
  await new Promise(r => ws.onopen = r);
  let id = 1;
  const pending = new Map();
  ws.onmessage = (e) => {
    const msg = JSON.parse(e.data);
    if (msg.method === 'Runtime.consoleAPICalled') {
      console.log('[BROWSER CONSOLE]', msg.params.type, msg.params.args.map(a => a.value || a.description).join(' '));
    }
    if (msg.id && pending.has(msg.id)) {
      const { resolve } = pending.get(msg.id);
      pending.delete(msg.id);
      resolve(msg.result);
    }
  };
  function send(method, params = {}) {
    return new Promise(resolve => {
      const cur = id++;
      pending.set(cur, { resolve });
      ws.send(JSON.stringify({ id: cur, method, params }));
    });
  }

  await send('Page.enable');
  await send('Runtime.enable');

  await send('Page.navigate', { url: 'http://localhost:2021/species' });
  await sleep(2500);

  const countInfo = await send('Runtime.evaluate', {
    expression: `(() => {
      const stored = localStorage.getItem('biota_species');
      const version = localStorage.getItem('biota_seed_version');
      const parsed = stored ? JSON.parse(stored) : [];
      return {
        version,
        parsedCount: parsed.length,
        hasLion: parsed.some(s => s.id === 'sp-panthera-leo')
      };
    })()`,
    returnByValue: true
  });
  console.log('EVAL RESULT in browser:', countInfo.result.value);

  ws.close();
  chrome.kill();
  try { fs.rmSync(USER_DATA_DIR, { recursive: true, force: true }); } catch (e) {}
}

debug();
