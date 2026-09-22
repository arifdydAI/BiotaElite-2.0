const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = path.join(os.tmpdir(), 'chrome_logo_gen_' + Date.now());
fs.mkdirSync(userDataDir, { recursive: true });

const chrome = spawn(CHROME, [
  '--headless=new',
  '--remote-debugging-port=9235',
  '--user-data-dir=' + userDataDir,
  '--no-first-run',
  '--disable-gpu',
  'about:blank'
], { stdio: 'ignore' });

async function getWsUrl() {
  for (let i = 0; i < 30; i++) {
    await new Promise(r => setTimeout(r, 300));
    try {
      const res = await fetch('http://127.0.0.1:9235/json/list');
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

    console.log('Generating transparent logo in Chrome canvas...');
    const result = await send('Runtime.evaluate', {
      expression: `(async () => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            const w = img.width, h = img.height;
            const srcCanvas = document.createElement('canvas');
            srcCanvas.width = w; srcCanvas.height = h;
            const sCtx = srcCanvas.getContext('2d');
            sCtx.drawImage(img, 0, 0);
            
            const srcImgData = sCtx.getImageData(0, 0, w, h);
            const data = srcImgData.data;
            
            // Average background color sampled from outer 8px border
            let sumR = 0, sumG = 0, sumB = 0, count = 0;
            for (let x = 0; x < w; x++) {
              for (let y = 0; y < 8; y++) {
                let idx = (y * w + x) * 4;
                sumR += data[idx]; sumG += data[idx+1]; sumB += data[idx+2]; count++;
                idx = ((h - 1 - y) * w + x) * 4;
                sumR += data[idx]; sumG += data[idx+1]; sumB += data[idx+2]; count++;
              }
            }
            for (let y = 8; y < h - 8; y++) {
              for (let x = 0; x < 8; x++) {
                let idx = (y * w + x) * 4;
                sumR += data[idx]; sumG += data[idx+1]; sumB += data[idx+2]; count++;
                idx = (y * w + (w - 1 - x)) * 4;
                sumR += data[idx]; sumG += data[idx+1]; sumB += data[idx+2]; count++;
              }
            }
            const bgR = sumR / count;
            const bgG = sumG / count;
            const bgB = sumB / count;
            
            function colorDist(r, g, b) {
              const dr = r - bgR, dg = g - bgG, db = b - bgB;
              return Math.sqrt(dr*dr + dg*dg + db*db);
            }
            
            // Thresholds:
            // dist <= lowThresh -> 100% background (alpha = 0)
            // dist >= highThresh -> 100% foreground (alpha = 1)
            // between -> smooth transition with background de-matting
            const lowThresh = 24.0;
            const highThresh = 48.0;
            
            // BFS from outer perimeter to identify background
            const visited = new Uint8Array(w * h);
            const queue = new Int32Array(w * h);
            let qHead = 0, qTail = 0;
            
            // Seed borders
            for (let x = 0; x < w; x++) {
              for (const y of [0, h - 1]) {
                const idx = y * w + x;
                if (!visited[idx] && colorDist(data[idx*4], data[idx*4+1], data[idx*4+2]) < highThresh) {
                  visited[idx] = 1;
                  queue[qTail++] = idx;
                }
              }
            }
            for (let y = 0; y < h; y++) {
              for (const x of [0, w - 1]) {
                const idx = y * w + x;
                if (!visited[idx] && colorDist(data[idx*4], data[idx*4+1], data[idx*4+2]) < highThresh) {
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
                if (n >= 0 && !visited[n]) {
                  const npi = n * 4;
                  if (colorDist(data[npi], data[npi+1], data[npi+2]) < highThresh) {
                    visited[n] = 1;
                    queue[qTail++] = n;
                  }
                }
              }
            }
            
            // Create target RGBA buffer
            const outImgData = sCtx.createImageData(w, h);
            const out = outImgData.data;
            
            let minX = w, maxX = 0, minY = h, maxY = 0;
            
            for (let y = 0; y < h; y++) {
              for (let x = 0; x < w; x++) {
                const idx = y * w + x;
                const pi = idx * 4;
                const r = data[pi], g = data[pi+1], b = data[pi+2];
                
                if (!visited[idx]) {
                  // Fully interior foreground
                  out[pi] = r;
                  out[pi+1] = g;
                  out[pi+2] = b;
                  out[pi+3] = 255;
                  if (x < minX) minX = x;
                  if (x > maxX) maxX = x;
                  if (y < minY) minY = y;
                  if (y > maxY) maxY = y;
                } else {
                  // Visited by BFS (outer region)
                  const dist = colorDist(r, g, b);
                  if (dist <= lowThresh) {
                    // Pure background
                    out[pi] = 0; out[pi+1] = 0; out[pi+2] = 0; out[pi+3] = 0;
                  } else {
                    // Transition edge: calculate fractional alpha and un-mix background
                    const alphaFrac = (dist - lowThresh) / (highThresh - lowThresh);
                    const alpha = Math.max(0, Math.min(1, alphaFrac));
                    
                    if (alpha > 0.08) {
                      // Un-mix background color to eliminate edge halo / fringe
                      const cleanR = Math.max(0, Math.min(255, (r - (1 - alpha) * bgR) / alpha));
                      const cleanG = Math.max(0, Math.min(255, (g - (1 - alpha) * bgG) / alpha));
                      const cleanB = Math.max(0, Math.min(255, (b - (1 - alpha) * bgB) / alpha));
                      
                      out[pi] = Math.round(cleanR);
                      out[pi+1] = Math.round(cleanG);
                      out[pi+2] = Math.round(cleanB);
                      out[pi+3] = Math.round(alpha * 255);
                      
                      if (x < minX) minX = x;
                      if (x > maxX) maxX = x;
                      if (y < minY) minY = y;
                      if (y > maxY) maxY = y;
                    } else {
                      out[pi] = 0; out[pi+1] = 0; out[pi+2] = 0; out[pi+3] = 0;
                    }
                  }
                }
              }
            }
            
            // Add clean balanced margin around the extracted artwork
            const padding = 24;
            const cropX = Math.max(0, minX - padding);
            const cropY = Math.max(0, minY - padding);
            const cropW = Math.min(w - cropX, (maxX - minX + 1) + padding * 2);
            const cropH = Math.min(h - cropY, (maxY - minY + 1) + padding * 2);
            
            // Put processed data back to canvas
            srcCanvas.width = w;
            srcCanvas.height = h;
            sCtx.putImageData(outImgData, 0, 0);
            
            // Draw cropped version onto final transparent canvas
            const cropCanvas = document.createElement('canvas');
            cropCanvas.width = cropW;
            cropCanvas.height = cropH;
            const cCtx = cropCanvas.getContext('2d');
            cCtx.drawImage(srcCanvas, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);
            
            const transparentPng = cropCanvas.toDataURL('image/png');
            
            // Also generate a preview on white background
            const whiteCanvas = document.createElement('canvas');
            whiteCanvas.width = cropW;
            whiteCanvas.height = cropH;
            const wCtx = whiteCanvas.getContext('2d');
            wCtx.fillStyle = '#ffffff';
            wCtx.fillRect(0, 0, cropW, cropH);
            wCtx.drawImage(cropCanvas, 0, 0);
            const whitePreview = whiteCanvas.toDataURL('image/png');
            
            // Also generate a preview on dark header background (#0a1622)
            const darkCanvas = document.createElement('canvas');
            darkCanvas.width = cropW;
            darkCanvas.height = cropH;
            const dCtx = darkCanvas.getContext('2d');
            dCtx.fillStyle = '#0a1622';
            dCtx.fillRect(0, 0, cropW, cropH);
            dCtx.drawImage(cropCanvas, 0, 0);
            const darkPreview = darkCanvas.toDataURL('image/png');
            
            resolve({
              bbox: { minX, maxX, minY, maxY, width: maxX - minX + 1, height: maxY - minY + 1 },
              crop: { cropX, cropY, cropW, cropH },
              transparentPng,
              whitePreview,
              darkPreview
            });
          };
          img.onerror = reject;
          img.src = '${dataUrl}';
        });
      })()`,
      awaitPromise: true,
      returnByValue: true
    });

    const val = result.result?.value;
    if (!val) {
      console.error('Failed to get result from Chrome evaluation');
      return;
    }

    console.log('Processed Bounding Box:', val.bbox);
    console.log('Final Cropped Dimensions:', val.crop);

    // Save transparent PNG
    const transparentBuf = Buffer.from(val.transparentPng.replace(/^data:image\/png;base64,/, ''), 'base64');
    const publicLogoPath = path.resolve(__dirname, '../public/biota_logo.png');
    const publicLogoPath2 = path.resolve(__dirname, '../public/logo.png');
    const srcAssetsPath = path.resolve(__dirname, '../src/assets/logo.png');
    const artifactPath = path.resolve('C:/Users/UESR/.gemini/antigravity-ide/brain/733a5fe7-46c1-4349-bcec-c2e80c6b50f8/transparent_logo.png');

    fs.writeFileSync(publicLogoPath, transparentBuf);
    fs.writeFileSync(publicLogoPath2, transparentBuf);
    fs.writeFileSync(srcAssetsPath, transparentBuf);
    fs.writeFileSync(artifactPath, transparentBuf);
    console.log(`✓ Saved transparent logo to:`);
    console.log(`  - ${publicLogoPath}`);
    console.log(`  - ${publicLogoPath2}`);
    console.log(`  - ${srcAssetsPath}`);
    console.log(`  - ${artifactPath}`);

    // Save previews for verification
    const whiteBuf = Buffer.from(val.whitePreview.replace(/^data:image\/png;base64,/, ''), 'base64');
    const darkBuf = Buffer.from(val.darkPreview.replace(/^data:image\/png;base64,/, ''), 'base64');
    const previewWhitePath = path.resolve('C:/Users/UESR/.gemini/antigravity-ide/brain/733a5fe7-46c1-4349-bcec-c2e80c6b50f8/preview_logo_on_white.png');
    const previewDarkPath = path.resolve('C:/Users/UESR/.gemini/antigravity-ide/brain/733a5fe7-46c1-4349-bcec-c2e80c6b50f8/preview_logo_on_dark.png');
    fs.writeFileSync(previewWhitePath, whiteBuf);
    fs.writeFileSync(previewDarkPath, darkBuf);
    console.log(`✓ Saved previews to:`);
    console.log(`  - ${previewWhitePath}`);
    console.log(`  - ${previewDarkPath}`);

    ws.close();
  } catch (err) {
    console.error('Error:', err);
  } finally {
    chrome.kill();
    try { fs.rmSync(userDataDir, { recursive: true, force: true }); } catch (e) {}
  }
}

run();
