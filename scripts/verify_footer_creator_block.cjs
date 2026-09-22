const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = path.join(os.tmpdir(), 'chrome_footer_verify_' + Date.now());
fs.mkdirSync(userDataDir, { recursive: true });

const chrome = spawn(CHROME, [
  '--headless=new',
  '--remote-debugging-port=9241',
  '--user-data-dir=' + userDataDir,
  '--no-first-run',
  '--disable-gpu',
  'about:blank'
], { stdio: 'ignore' });

async function getWsUrl() {
  for (let i = 0; i < 30; i++) {
    await new Promise(r => setTimeout(r, 300));
    try {
      const res = await fetch('http://127.0.0.1:9241/json/list');
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

    console.log('Testing Desktop Viewport (1280x800)...');
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1280,
      height: 800,
      deviceScaleFactor: 1,
      mobile: false
    });

    console.log('Navigating to http://localhost:2021/ ...');
    await send('Page.navigate', { url: 'http://localhost:2021/' });
    
    // Wait for footer to mount
    for (let i = 0; i < 20; i++) {
      await new Promise(r => setTimeout(r, 300));
      const chk = await send('Runtime.evaluate', {
        expression: `!!document.querySelector('.site-footer .footer-content > div:first-child')`,
        returnByValue: true
      });
      if (chk.result?.value) break;
    }

    // Evaluate Desktop Footer Creator Block
    const desktopEval = await send('Runtime.evaluate', {
      expression: `(() => {
        const firstCol = document.querySelector('.site-footer .footer-content > div:first-child');
        if (!firstCol) return { found: false };

        const children = Array.from(firstCol.children);
        const details = children.map(el => {
          const rect = el.getBoundingClientRect();
          const comp = window.getComputedStyle(el);
          return {
            tag: el.tagName,
            text: el.innerText.trim(),
            left: rect.left,
            top: rect.top,
            width: rect.width,
            height: rect.height,
            fontSize: comp.fontSize,
            lineHeight: comp.lineHeight,
            fontWeight: comp.fontWeight
          };
        });

        // Specific element for Mohammad Arif span
        const nameSpan = firstCol.querySelector('span[style*="font-weight"], span[style*="fontWeight"]') ||
                         Array.from(firstCol.querySelectorAll('span')).find(s => s.textContent.includes('Mohammad Arif'));
        let nameDetails = null;
        if (nameSpan) {
          const comp = window.getComputedStyle(nameSpan);
          const rect = nameSpan.getBoundingClientRect();
          nameDetails = {
            text: nameSpan.textContent,
            fontSize: comp.fontSize,
            fontWeight: comp.fontWeight,
            color: comp.color,
            rect: { left: rect.left, top: rect.top, width: rect.width, height: rect.height }
          };
        }

        return {
          found: true,
          details,
          nameDetails
        };
      })()`,
      returnByValue: true
    });

    console.log('Desktop Footer Creator Block Details:');
    console.log(JSON.stringify(desktopEval.result?.value, null, 2));

    // Capture desktop footer screenshot
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, document.body.scrollHeight)' });
    await new Promise(r => setTimeout(r, 600));

    const desktopFooterShot = await send('Page.captureScreenshot', {});
    const desktopFooterShotPath = path.resolve('C:/Users/UESR/.gemini/antigravity-ide/brain/733a5fe7-46c1-4349-bcec-c2e80c6b50f8/desktop_footer_creator_verified.png');
    fs.writeFileSync(desktopFooterShotPath, Buffer.from(desktopFooterShot.data, 'base64'));
    console.log('✓ Desktop footer screenshot saved to:', desktopFooterShotPath);

    // Mobile Viewport (375x667)
    console.log('Testing Mobile Viewport (375x667)...');
    await send('Emulation.setDeviceMetricsOverride', {
      width: 375,
      height: 667,
      deviceScaleFactor: 2,
      mobile: true
    });
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, document.body.scrollHeight)' });
    await new Promise(r => setTimeout(r, 800));

    const mobileEval = await send('Runtime.evaluate', {
      expression: `(() => {
        const firstCol = document.querySelector('.site-footer .footer-content > div:first-child');
        if (!firstCol) return { found: false };

        const children = Array.from(firstCol.children);
        const details = children.map(el => {
          const rect = el.getBoundingClientRect();
          return {
            text: el.innerText.trim(),
            left: rect.left,
            top: rect.top,
            width: rect.width,
            height: rect.height,
            scrollWidth: el.scrollWidth,
            clientWidth: el.clientWidth,
            hasOverflow: el.scrollWidth > el.clientWidth + 1
          };
        });

        const creatorLine = children[1];
        const deptLine = children[3];

        return {
          found: true,
          details,
          leftAlignDiff: Math.abs(creatorLine.getBoundingClientRect().left - deptLine.getBoundingClientRect().left)
        };
      })()`,
      returnByValue: true
    });

    console.log('Mobile Footer Creator Block Details:');
    console.log(JSON.stringify(mobileEval.result?.value, null, 2));

    await send('Runtime.evaluate', {
      expression: `(() => {
        const el = document.querySelector('.site-footer .footer-content > div:first-child');
        if (el) el.scrollIntoView({ block: 'start' });
      })()`
    });
    await new Promise(r => setTimeout(r, 600));

    const mobileFooterShot = await send('Page.captureScreenshot', {});
    const mobileFooterShotPath = path.resolve('C:/Users/UESR/.gemini/antigravity-ide/brain/733a5fe7-46c1-4349-bcec-c2e80c6b50f8/mobile_footer_creator_verified.png');
    fs.writeFileSync(mobileFooterShotPath, Buffer.from(mobileFooterShot.data, 'base64'));
    console.log('✓ Mobile footer screenshot saved to:', mobileFooterShotPath);

    ws.close();
  } catch (err) {
    console.error('Error:', err);
  } finally {
    chrome.kill();
    try { fs.rmSync(userDataDir, { recursive: true, force: true }); } catch (e) {}
  }
}

run();
