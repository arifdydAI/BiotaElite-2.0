const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = path.join(os.tmpdir(), 'chrome_spots_' + Date.now());
fs.mkdirSync(userDataDir, { recursive: true });

const chrome = spawn(CHROME, [
  '--headless=new',
  '--remote-debugging-port=9236',
  '--user-data-dir=' + userDataDir,
  '--no-first-run',
  '--disable-gpu',
  'about:blank'
], { stdio: 'ignore' });

async function getWsUrl() {
  for (let i = 0; i < 30; i++) {
    await new Promise(r => setTimeout(r, 300));
    try {
      const res = await fetch('http://127.0.0.1:9236/json/list');
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

    const result = await send('Runtime.evaluate', {
      expression: `(async () => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            const w = img.width, h = img.height;
            const canvas = document.createElement('canvas');
            canvas.width = w; canvas.height = h;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            const data = ctx.getImageData(0, 0, w, h).data;
            
            // Sample spots on the animal's back (roughly x: 350-550, y: 300-550)
            const spots = [];
            for (let y = 300; y <= 550; y += 10) {
              for (let x = 350; x <= 550; x += 10) {
                const idx = (y * w + x) * 4;
                const r = data[idx], g = data[idx+1], b = data[idx+2];
                // If it's a dark spot
                if (r < 30 && g < 40 && b < 60) {
                  spots.push({ x, y, r, g, b });
                }
              }
            }
            
            // Sample inside the tail loop (around x: 300-400, y: 700-800)
            const tailLoopSamples = [];
            for (let y = 730; y <= 790; y += 10) {
              for (let x = 270; x <= 370; x += 10) {
                const idx = (y * w + x) * 4;
                tailLoopSamples.push({ x, y, r: data[idx], g: data[idx+1], b: data[idx+2] });
              }
            }
            
            // Sample inside the helix (between rungs, x: 500-650, y: 600-750)
            const helixInteriorSamples = [];
            for (let y = 620; y <= 720; y += 10) {
              for (let x = 520; x <= 640; x += 10) {
                const idx = (y * w + x) * 4;
                helixInteriorSamples.push({ x, y, r: data[idx], g: data[idx+1], b: data[idx+2] });
              }
            }
            
            resolve({
              spotsCount: spots.length,
              sampleSpots: spots.slice(0, 10),
              tailLoopSamples: tailLoopSamples.slice(0, 10),
              helixInteriorSamples: helixInteriorSamples.slice(0, 10)
            });
          };
          img.src = '${dataUrl}';
        });
      })()`,
      awaitPromise: true,
      returnByValue: true
    });

    console.log('Sample Colors:\n', JSON.stringify(result.result?.value, null, 2));

    ws.close();
  } catch (err) {
    console.error('Error:', err);
  } finally {
    chrome.kill();
    try { fs.rmSync(userDataDir, { recursive: true, force: true }); } catch (e) {}
  }
}

run();
