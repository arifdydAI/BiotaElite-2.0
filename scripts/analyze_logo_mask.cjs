const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = path.join(os.tmpdir(), 'chrome_logo_mask_' + Date.now());
fs.mkdirSync(userDataDir, { recursive: true });

const chrome = spawn(CHROME, [
  '--headless=new',
  '--remote-debugging-port=9233',
  '--user-data-dir=' + userDataDir,
  '--no-first-run',
  '--disable-gpu',
  'about:blank'
], { stdio: 'ignore' });

async function getWsUrl() {
  for (let i = 0; i < 30; i++) {
    await new Promise(r => setTimeout(r, 300));
    try {
      const res = await fetch('http://127.0.0.1:9233/json/list');
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

    console.log('Analyzing flood-fill and color thresholds in Chrome canvas...');
    const result = await send('Runtime.evaluate', {
      expression: `(async () => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            const w = img.width;
            const h = img.height;
            const canvas = document.createElement('canvas');
            canvas.width = w;
            canvas.height = h;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            
            const imgData = ctx.getImageData(0, 0, w, h);
            const data = imgData.data;
            
            // Build background color model from borders
            // Sample all edge pixels (top, bottom, left, right border 5px in)
            let sumR = 0, sumG = 0, sumB = 0, count = 0;
            for (let x = 0; x < w; x++) {
              for (let y = 0; y < 10; y++) {
                const idx = (y * w + x) * 4;
                sumR += data[idx]; sumG += data[idx+1]; sumB += data[idx+2]; count++;
                const bidx = ((h - 1 - y) * w + x) * 4;
                sumR += data[bidx]; sumG += data[bidx+1]; sumB += data[bidx+2]; count++;
              }
            }
            for (let y = 10; y < h - 10; y++) {
              for (let x = 0; x < 10; x++) {
                const idx = (y * w + x) * 4;
                sumR += data[idx]; sumG += data[idx+1]; sumB += data[idx+2]; count++;
                const ridx = (y * w + (w - 1 - x)) * 4;
                sumR += data[ridx]; sumG += data[ridx+1]; sumB += data[ridx+2]; count++;
              }
            }
            const avgBgR = sumR / count;
            const avgBgG = sumG / count;
            const avgBgB = sumB / count;
            
            // Test BFS with different distance thresholds: 20, 25, 30, 35, 40
            function testBfs(thresh) {
              const visited = new Uint8Array(w * h);
              const queue = new Int32Array(w * h);
              let qHead = 0, qTail = 0;
              
              // Helper to check if pixel is background
              function isBg(r, g, b) {
                const dr = r - avgBgR;
                const dg = g - avgBgG;
                const db = b - avgBgB;
                const dist = Math.sqrt(dr*dr + dg*dg + db*db);
                return dist < thresh;
              }
              
              // Seed borders
              for (let x = 0; x < w; x++) {
                for (const y of [0, h - 1]) {
                  const idx = y * w + x;
                  if (!visited[idx]) {
                    const pi = idx * 4;
                    if (isBg(data[pi], data[pi+1], data[pi+2])) {
                      visited[idx] = 1;
                      queue[qTail++] = idx;
                    }
                  }
                }
              }
              for (let y = 0; y < h; y++) {
                for (const x of [0, w - 1]) {
                  const idx = y * w + x;
                  if (!visited[idx]) {
                    const pi = idx * 4;
                    if (isBg(data[pi], data[pi+1], data[pi+2])) {
                      visited[idx] = 1;
                      queue[qTail++] = idx;
                    }
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
                  if (n >= 0 && !visited[n]) {
                    const npi = n * 4;
                    if (isBg(data[npi], data[npi+1], data[npi+2])) {
                      visited[n] = 1;
                      queue[qTail++] = n;
                    }
                  }
                }
              }
              
              // Calculate remaining non-background bounding box
              let minX = w, maxX = 0, minY = h, maxY = 0;
              let nonBgCount = 0;
              for (let y = 0; y < h; y++) {
                for (let x = 0; x < w; x++) {
                  const idx = y * w + x;
                  if (!visited[idx]) {
                    nonBgCount++;
                    if (x < minX) minX = x;
                    if (x > maxX) maxX = x;
                    if (y < minY) minY = y;
                    if (y > maxY) maxY = y;
                  }
                }
              }
              
              return {
                thresh,
                bgRemovedCount: qTail,
                nonBgCount,
                bbox: { minX, maxX, minY, maxY, width: maxX - minX + 1, height: maxY - minY + 1 }
              };
            }
            
            resolve({
              avgBg: { r: avgBgR, g: avgBgG, b: avgBgB },
              results: [20, 25, 30, 35, 40].map(testBfs)
            });
          };
          img.onerror = reject;
          img.src = '${dataUrl}';
        });
      })()`,
      awaitPromise: true,
      returnByValue: true
    });

    console.log('Analysis Result:\n', JSON.stringify(result.result?.value, null, 2));

    ws.close();
  } catch (err) {
    console.error('Error:', err);
  } finally {
    chrome.kill();
    try { fs.rmSync(userDataDir, { recursive: true, force: true }); } catch (e) {}
  }
}

run();
