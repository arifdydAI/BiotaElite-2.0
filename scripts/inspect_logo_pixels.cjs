const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = path.join(os.tmpdir(), 'chrome_logo_proc_' + Date.now());
fs.mkdirSync(userDataDir, { recursive: true });

const chrome = spawn(CHROME, [
  '--headless=new',
  '--remote-debugging-port=9232',
  '--user-data-dir=' + userDataDir,
  '--no-first-run',
  '--disable-gpu',
  'about:blank'
], { stdio: 'ignore' });

async function getWsUrl() {
  for (let i = 0; i < 30; i++) {
    await new Promise(r => setTimeout(r, 300));
    try {
      const res = await fetch('http://127.0.0.1:9232/json/list');
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

    const rawBuffer = fs.readFileSync(path.resolve(__dirname, 'raw_logo.png'));
    const base64Data = rawBuffer.toString('base64');
    const dataUrl = `data:image/jpeg;base64,${base64Data}`;

    console.log('Sending image to Chrome canvas for inspection...');
    const result = await send('Runtime.evaluate', {
      expression: `(async () => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            
            const imageData = ctx.getImageData(0, 0, img.width, img.height);
            const data = imageData.data;
            const w = img.width;
            const h = img.height;
            
            // Sample corner pixels and borders
            const corners = [
              { pos: 'top-left (0,0)', r: data[0], g: data[1], b: data[2], a: data[3] },
              { pos: 'top-right (w-1,0)', r: data[(w-1)*4], g: data[(w-1)*4+1], b: data[(w-1)*4+2], a: data[(w-1)*4+3] },
              { pos: 'bottom-left (0,h-1)', r: data[(h-1)*w*4], g: data[(h-1)*w*4+1], b: data[(h-1)*w*4+2], a: data[(h-1)*w*4+3] },
              { pos: 'bottom-right (w-1,h-1)', r: data[((h-1)*w + w-1)*4], g: data[((h-1)*w + w-1)*4+1], b: data[((h-1)*w + w-1)*4+2], a: data[((h-1)*w + w-1)*4+3] }
            ];

            // Sample 100 border pixels to find min/max R, G, B of the background
            let minR = 255, maxR = 0, minG = 255, maxG = 0, minB = 255, maxB = 0;
            const borderSamples = [];
            for (let x = 0; x < w; x += Math.floor(w / 20)) {
              for (const y of [0, 5, 10, h-1, h-6, h-11]) {
                const idx = (y * w + x) * 4;
                const r = data[idx], g = data[idx+1], b = data[idx+2];
                minR = Math.min(minR, r); maxR = Math.max(maxR, r);
                minG = Math.min(minG, g); maxG = Math.max(maxG, g);
                minB = Math.min(minB, b); maxB = Math.max(maxB, b);
              }
            }
            
            resolve({
              dimensions: { width: img.width, height: img.height },
              corners,
              borderRange: { minR, maxR, minG, maxG, minB, maxB }
            });
          };
          img.onerror = reject;
          img.src = '${dataUrl}';
        });
      })()`,
      awaitPromise: true,
      returnByValue: true
    });

    console.log('Inspection Result:\n', JSON.stringify(result.result?.value, null, 2));

    ws.close();
  } catch (err) {
    console.error('Error:', err);
  } finally {
    chrome.kill();
    try { fs.rmSync(userDataDir, { recursive: true, force: true }); } catch (e) {}
  }
}

run();
