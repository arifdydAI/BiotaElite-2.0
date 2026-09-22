const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = path.join(os.tmpdir(), 'chrome_logo_clusters_' + Date.now());
fs.mkdirSync(userDataDir, { recursive: true });

const chrome = spawn(CHROME, [
  '--headless=new',
  '--remote-debugging-port=9237',
  '--user-data-dir=' + userDataDir,
  '--no-first-run',
  '--disable-gpu',
  'about:blank'
], { stdio: 'ignore' });

async function getWsUrl() {
  for (let i = 0; i < 30; i++) {
    await new Promise(r => setTimeout(r, 300));
    try {
      const res = await fetch('http://127.0.0.1:9237/json/list');
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
            
            const bgR = 0.5, bgG = 16.5, bgB = 46.0;
            function isBg(r, g, b) {
              const dr = r - bgR, dg = g - bgG, db = b - bgB;
              return Math.sqrt(dr*dr + dg*dg + db*db) < 28;
            }
            
            // Find all connected components of isBg
            const visited = new Uint8Array(w * h);
            const clusters = [];
            
            for (let y = 0; y < h; y++) {
              for (let x = 0; x < w; x++) {
                const idx = y * w + x;
                if (!visited[idx] && isBg(data[idx*4], data[idx*4+1], data[idx*4+2])) {
                  let size = 0;
                  let minX = x, maxX = x, minY = y, maxY = y;
                  let touchesBorder = false;
                  
                  const q = [idx];
                  visited[idx] = 1;
                  
                  while (q.length > 0) {
                    const c = q.pop();
                    size++;
                    const cx = c % w;
                    const cy = (c / w) | 0;
                    if (cx === 0 || cx === w - 1 || cy === 0 || cy === h - 1) {
                      touchesBorder = true;
                    }
                    if (cx < minX) minX = cx; if (cx > maxX) maxX = cx;
                    if (cy < minY) minY = cy; if (cy > maxY) maxY = cy;
                    
                    const neighbors = [
                      cx > 0 ? c - 1 : -1,
                      cx < w - 1 ? c + 1 : -1,
                      cy > 0 ? c - w : -1,
                      cy < h - 1 ? c + w : -1
                    ];
                    for (const n of neighbors) {
                      if (n >= 0 && !visited[n] && isBg(data[n*4], data[n*4+1], data[n*4+2])) {
                        visited[n] = 1;
                        q.push(n);
                      }
                    }
                  }
                  
                  clusters.push({
                    size,
                    touchesBorder,
                    bbox: { minX, maxX, minY, maxY, width: maxX - minX + 1, height: maxY - minY + 1 }
                  });
                }
              }
            }
            
            clusters.sort((a, b) => b.size - a.size);
            resolve({
              totalClusters: clusters.length,
              topClusters: clusters.slice(0, 35)
            });
          };
          img.src = '${dataUrl}';
        });
      })()`,
      awaitPromise: true,
      returnByValue: true
    });

    console.log('Clusters:\n', JSON.stringify(result.result?.value, null, 2));

    ws.close();
  } catch (err) {
    console.error('Error:', err);
  } finally {
    chrome.kill();
    try { fs.rmSync(userDataDir, { recursive: true, force: true }); } catch (e) {}
  }
}

run();
