const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = path.join(os.tmpdir(), 'chrome_logo_holes_' + Date.now());
fs.mkdirSync(userDataDir, { recursive: true });

const chrome = spawn(CHROME, [
  '--headless=new',
  '--remote-debugging-port=9234',
  '--user-data-dir=' + userDataDir,
  '--no-first-run',
  '--disable-gpu',
  'about:blank'
], { stdio: 'ignore' });

async function getWsUrl() {
  for (let i = 0; i < 30; i++) {
    await new Promise(r => setTimeout(r, 300));
    try {
      const res = await fetch('http://127.0.0.1:9234/json/list');
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
            
            // Average bg
            const avgBgR = 0.5, avgBgG = 16.5, avgBgB = 46.0;
            function isBg(r, g, b, thresh) {
              const dr = r - avgBgR, dg = g - avgBgG, db = b - avgBgB;
              return Math.sqrt(dr*dr + dg*dg + db*db) < thresh;
            }
            
            // Outer BFS at thresh = 28
            const visited = new Uint8Array(w * h);
            const queue = new Int32Array(w * h);
            let qHead = 0, qTail = 0;
            
            for (let x = 0; x < w; x++) {
              for (const y of [0, h - 1]) {
                const idx = y * w + x;
                if (!visited[idx] && isBg(data[idx*4], data[idx*4+1], data[idx*4+2], 28)) {
                  visited[idx] = 1;
                  queue[qTail++] = idx;
                }
              }
            }
            for (let y = 0; y < h; y++) {
              for (const x of [0, w - 1]) {
                const idx = y * w + x;
                if (!visited[idx] && isBg(data[idx*4], data[idx*4+1], data[idx*4+2], 28)) {
                  visited[idx] = 1;
                  queue[qTail++] = idx;
                }
              }
            }
            
            while (qHead < qTail) {
              const curr = queue[qHead++];
              const cx = curr % w;
              const cy = (curr / w) | 0;
              const neighbors = [
                cx > 0 ? curr - 1 : -1,
                cx < w - 1 ? curr + 1 : -1,
                cy > 0 ? curr - w : -1,
                cy < h - 1 ? curr + w : -1
              ];
              for (const n of neighbors) {
                if (n >= 0 && !visited[n] && isBg(data[n*4], data[n*4+1], data[n*4+2], 28)) {
                  visited[n] = 1;
                  queue[qTail++] = n;
                }
              }
            }
            
            // Now check unvisited pixels: are there any clusters that match isBg?
            // i.e., enclosed background areas!
            const unvisitedBgClusters = [];
            const visitedInternal = new Uint8Array(w * h);
            
            for (let y = 0; y < h; y++) {
              for (let x = 0; x < w; x++) {
                const idx = y * w + x;
                if (!visited[idx] && !visitedInternal[idx] && isBg(data[idx*4], data[idx*4+1], data[idx*4+2], 25)) {
                  // Found an internal pixel that looks like background!
                  let clusterSize = 0;
                  let minCx = x, maxCx = x, minCy = y, maxCy = y;
                  const iq = [idx];
                  visitedInternal[idx] = 1;
                  
                  while (iq.length > 0) {
                    const c = iq.pop();
                    clusterSize++;
                    const cX = c % w;
                    const cY = (c / w) | 0;
                    if (cX < minCx) minCx = cX; if (cX > maxCx) maxCx = cX;
                    if (cY < minCy) minCy = cY; if (cY > maxCy) maxCy = cY;
                    
                    const nbs = [
                      cX > 0 ? c - 1 : -1,
                      cX < w - 1 ? c + 1 : -1,
                      cY > 0 ? c - w : -1,
                      cY < h - 1 ? c + w : -1
                    ];
                    for (const n of nbs) {
                      if (n >= 0 && !visited[n] && !visitedInternal[n] && isBg(data[n*4], data[n*4+1], data[n*4+2], 25)) {
                        visitedInternal[n] = 1;
                        iq.push(n);
                      }
                    }
                  }
                  
                  unvisitedBgClusters.push({
                    size: clusterSize,
                    bbox: { minX: minCx, maxX: maxCx, minY: minCy, maxY: maxCy }
                  });
                }
              }
            }
            
            resolve({
              unvisitedBgClusters
            });
          };
          img.src = '${dataUrl}';
        });
      })()`,
      awaitPromise: true,
      returnByValue: true
    });

    console.log('Unvisited BG Clusters:\n', JSON.stringify(result.result?.value, null, 2));

    ws.close();
  } catch (err) {
    console.error('Error:', err);
  } finally {
    chrome.kill();
    try { fs.rmSync(userDataDir, { recursive: true, force: true }); } catch (e) {}
  }
}

run();
