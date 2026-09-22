const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const os = require('os');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const USER_DATA_DIR = path.join(os.tmpdir(), 'chrome_annelida_' + Date.now());
const ARTIFACTS_DIR = 'C:\\Users\\UESR\\.gemini\\antigravity-ide\\brain\\733a5fe7-46c1-4349-bcec-c2e80c6b50f8';

async function run() {
  const chrome = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9232',
    `--user-data-dir=${USER_DATA_DIR}`,
    '--no-first-run',
    '--no-default-browser-check',
    'about:blank'
  ], { stdio: 'ignore' });

  await new Promise(r => setTimeout(r, 1500));
  const res = await fetch('http://127.0.0.1:9232/json/list');
  const list = await res.json();
  const ws = new WebSocket(list[0].webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);

  let id = 1;
  const send = (method, params = {}) => new Promise(resolve => {
    const msgId = id++;
    const handler = (e) => {
      const data = JSON.parse(e.data);
      if (data.id === msgId) {
        ws.removeEventListener('message', handler);
        resolve(data.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id: msgId, method, params }));
  });

  await send('Page.enable');
  await send('Runtime.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: 1280, height: 800, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url: 'http://localhost:2021/identification' });
  await new Promise(r => setTimeout(r, 1200));

  // Click Annelida card
  await send('Runtime.evaluate', { expression: `(() => {
    const cards = Array.from(document.querySelectorAll('button.card'));
    const annCard = cards.find(c => c.innerText && (c.innerText.includes('Annelida') || c.innerText.includes('অ্যানেলিডা')));
    if (annCard) annCard.click();
  })()` });
  await new Promise(r => setTimeout(r, 800));

  // Scroll down to step couplets
  await send('Runtime.evaluate', { expression: `window.scrollTo(0, 520)` });
  await new Promise(r => setTimeout(r, 500));

  const ss = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(ARTIFACTS_DIR, 'ident_05_global_annelida_key.png'), Buffer.from(ss.data, 'base64'));
  console.log('Saved ident_05_global_annelida_key.png');

  chrome.kill();
  try { fs.rmSync(USER_DATA_DIR, { recursive: true, force: true }); } catch (e) {}
}
run();
