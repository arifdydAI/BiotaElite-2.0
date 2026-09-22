const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = path.join(os.tmpdir(), 'chrome_logo_verify_' + Date.now());
fs.mkdirSync(userDataDir, { recursive: true });

const chrome = spawn(CHROME, [
  '--headless=new',
  '--remote-debugging-port=9238',
  '--user-data-dir=' + userDataDir,
  '--no-first-run',
  '--disable-gpu',
  'about:blank'
], { stdio: 'ignore' });

async function getWsUrl() {
  for (let i = 0; i < 30; i++) {
    await new Promise(r => setTimeout(r, 300));
    try {
      const res = await fetch('http://127.0.0.1:9238/json/list');
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
    await send('DOM.enable');

    console.log('Setting desktop viewport (1280x800)...');
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1280,
      height: 800,
      deviceScaleFactor: 1,
      mobile: false
    });

    console.log('Navigating to http://localhost:2021/ ...');
    await send('Page.navigate', { url: 'http://localhost:2021/' });
    await new Promise(r => setTimeout(r, 2000));

    // Evaluate Header Logo
    const headerEval = await send('Runtime.evaluate', {
      expression: `(() => {
        const img = document.querySelector('.brand-logo-img');
        if (!img) return { found: false };
        const rect = img.getBoundingClientRect();
        return {
          found: true,
          src: img.src,
          naturalWidth: img.naturalWidth,
          naturalHeight: img.naturalHeight,
          width: rect.width,
          height: rect.height,
          top: rect.top,
          left: rect.left,
          complete: img.complete
        };
      })()`,
      returnByValue: true
    });
    console.log('Header Logo Evaluation:', headerEval.result?.value);

    // Evaluate Footer Leftmost Block
    const footerEval = await send('Runtime.evaluate', {
      expression: `(() => {
        const footerFirstCol = document.querySelector('.site-footer .footer-content > div:first-child');
        if (!footerFirstCol) return { found: false };
        
        const lines = [];
        for (const child of footerFirstCol.children) {
          lines.push(child.textContent.trim());
        }
        
        const rawText = footerFirstCol.innerText.trim().split('\\n').map(s => s.trim()).filter(Boolean);
        
        return {
          found: true,
          lines,
          rawText
        };
      })()`,
      returnByValue: true
    });
    console.log('Footer Leftmost Block Evaluation:', footerEval.result?.value);

    // Capture Desktop Header Screenshot
    const headerClip = await send('Runtime.evaluate', {
      expression: `(() => {
        const el = document.querySelector('.site-header');
        const r = el.getBoundingClientRect();
        return { x: r.x, y: r.y, width: r.width, height: r.height, scale: 1 };
      })()`,
      returnByValue: true
    });
    
    if (headerClip.result?.value) {
      const headerShot = await send('Page.captureScreenshot', {
        clip: headerClip.result.value
      });
      const headerShotPath = path.resolve('C:/Users/UESR/.gemini/antigravity-ide/brain/733a5fe7-46c1-4349-bcec-c2e80c6b50f8/desktop_header_verified.png');
      fs.writeFileSync(headerShotPath, Buffer.from(headerShot.data, 'base64'));
      console.log('✓ Desktop header screenshot saved to:', headerShotPath);
    }

    // Capture Desktop Footer Screenshot
    await send('Runtime.evaluate', {
      expression: `window.scrollTo(0, document.body.scrollHeight);`
    });
    await new Promise(r => setTimeout(r, 600));

    const footerShot = await send('Page.captureScreenshot', {});
    const footerShotPath = path.resolve('C:/Users/UESR/.gemini/antigravity-ide/brain/733a5fe7-46c1-4349-bcec-c2e80c6b50f8/footer_branding_verified.png');
    fs.writeFileSync(footerShotPath, Buffer.from(footerShot.data, 'base64'));
    console.log('✓ Desktop footer screenshot saved to:', footerShotPath);

    // Capture Desktop Overview Screenshot
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, 0)` });
    await new Promise(r => setTimeout(r, 400));
    const desktopShot = await send('Page.captureScreenshot', {});
    const desktopShotPath = path.resolve('C:/Users/UESR/.gemini/antigravity-ide/brain/733a5fe7-46c1-4349-bcec-c2e80c6b50f8/desktop_view_verified.png');
    fs.writeFileSync(desktopShotPath, Buffer.from(desktopShot.data, 'base64'));
    console.log('✓ Desktop overview screenshot saved to:', desktopShotPath);

    // Mobile Viewport Verification (375x667)
    console.log('Switching to mobile viewport (375x667)...');
    await send('Emulation.setDeviceMetricsOverride', {
      width: 375,
      height: 667,
      deviceScaleFactor: 2,
      mobile: true
    });
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, 0)` });
    await new Promise(r => setTimeout(r, 800));

    const mobileHeaderEval = await send('Runtime.evaluate', {
      expression: `(() => {
        const img = document.querySelector('.brand-logo-img');
        if (!img) return { found: false };
        const rect = img.getBoundingClientRect();
        return {
          found: true,
          width: rect.width,
          height: rect.height,
          complete: img.complete
        };
      })()`,
      returnByValue: true
    });
    console.log('Mobile Header Logo Evaluation:', mobileHeaderEval.result?.value);

    const mobileShot = await send('Page.captureScreenshot', {});
    const mobileShotPath = path.resolve('C:/Users/UESR/.gemini/antigravity-ide/brain/733a5fe7-46c1-4349-bcec-c2e80c6b50f8/mobile_header_verified.png');
    fs.writeFileSync(mobileShotPath, Buffer.from(mobileShot.data, 'base64'));
    console.log('✓ Mobile screenshot saved to:', mobileShotPath);

    ws.close();
  } catch (err) {
    console.error('Error:', err);
  } finally {
    chrome.kill();
    try { fs.rmSync(userDataDir, { recursive: true, force: true }); } catch (e) {}
  }
}

run();
