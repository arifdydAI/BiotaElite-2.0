const { spawn } = require('child_process');
const http = require('http');

async function main() {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const debuggingPort = 9222;

  console.log('Launching Edge headless with remote debugging...');
  const edgeProc = spawn(edgePath, [
    `--remote-debugging-port=${debuggingPort}`,
    `--user-data-dir=C:\\Users\\UESR\\.gemini\\antigravity-ide\\brain\\93bf69fe-e715-4427-8827-451aed4ddb67\\scratch\\.edge_profile`,
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--window-size=1280,800',
    'http://localhost:2021'
  ]);

  edgeProc.on('error', (err) => {
    console.error('Failed to spawn edge:', err);
    process.exit(1);
  });

  // Wait 2 seconds for Edge to start listening
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Fetch /json to get the page WebSocket URL
  let targets;
  for (let i = 0; i < 5; i++) {
    try {
      const data = await new Promise((resolve, reject) => {
        http.get(`http://127.0.0.1:${debuggingPort}/json`, (res) => {
          let body = '';
          res.on('data', chunk => body += chunk);
          res.on('end', () => resolve(JSON.parse(body)));
        }).on('error', reject);
      });
      targets = data;
      break;
    } catch (e) {
      console.log('Retrying connect to CDP...');
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  if (!targets || targets.length === 0) {
    console.error('No targets found!');
    edgeProc.kill();
    process.exit(1);
  }

  const pageTarget = targets.find(t => t.type === 'page') || targets[0];
  console.log('Connecting to target:', pageTarget.title, pageTarget.webSocketDebuggerUrl);

  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);

  let id = 1;
  const pending = new Map();

  function send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const msgId = id++;
      pending.set(msgId, { resolve, reject });
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  }

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(msg.error);
      else resolve(msg.result);
    }
  };

  await new Promise(resolve => ws.onopen = resolve);

  await send('Page.enable');
  await send('DOM.enable');
  await send('Runtime.enable');
  await send('Network.enable');
  await send('Network.setCacheDisabled', { cacheDisabled: true });

  await send('Page.reload', { ignoreCache: true });
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Execute script in browser to inspect DOM, click Core Zoology, and measure
  const evalResult = await send('Runtime.evaluate', {
    expression: `(async () => {
      // Find Core Zoology button
      const buttons = Array.from(document.querySelectorAll('button'));
      const zBtn = buttons.find(b => b.textContent && b.textContent.includes('Core Zoology'));
      if (!zBtn) return { error: 'Core Zoology button not found', buttons: buttons.map(b => b.textContent) };

      // Dispatch mouseenter or click
      zBtn.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
      zBtn.click();

      // Wait 300ms for React re-render
      await new Promise(r => setTimeout(r, 300));

      // Find dropdown menu
      const menu = document.querySelector('.nav-dropdown-menu') || (zBtn.parentElement ? zBtn.parentElement.querySelector('div') : null);
      if (!menu) return { error: 'Menu not open after click', html: zBtn.parentElement.outerHTML };

      const menuRect = menu.getBoundingClientRect();
      const menuComputed = window.getComputedStyle(menu);

      // Collect ancestor chain
      const ancestors = [];
      let el = menu.parentElement;
      while (el && el !== document.documentElement) {
        const style = window.getComputedStyle(el);
        const rect = el.getBoundingClientRect();
        ancestors.push({
          tag: el.tagName,
          id: el.id,
          className: el.className,
          rect: { top: rect.top, bottom: rect.bottom, left: rect.left, right: rect.right, width: rect.width, height: rect.height },
          overflow: style.overflow,
          overflowX: style.overflowX,
          overflowY: style.overflowY,
          position: style.position,
          zIndex: style.zIndex,
          contain: style.contain,
          clip: style.clip,
          clipPath: style.clipPath,
          transform: style.transform,
          filter: style.filter,
          maxHeight: style.maxHeight,
          height: style.height
        });
        el = el.parentElement;
      }

      // Check items inside menu
      const items = Array.from(menu.children).map(child => {
        const rect = child.getBoundingClientRect();
        return {
          tag: child.tagName,
          text: child.textContent.trim(),
          rect: { top: rect.top, bottom: rect.bottom, height: rect.height }
        };
      });

      return {
        menuRect: { top: menuRect.top, bottom: menuRect.bottom, left: menuRect.left, right: menuRect.right, width: menuRect.width, height: menuRect.height },
        menuComputed: {
          position: menuComputed.position,
          top: menuComputed.top,
          zIndex: menuComputed.zIndex,
          display: menuComputed.display
        },
        items,
        ancestors
      };
    })()`,
    awaitPromise: true,
    returnByValue: true
  });

  console.log('REAL RENDERED DOM EVALUATION:');
  console.log(JSON.stringify(evalResult.result.value, null, 2));

  // Take screenshot of viewport
  const screenshot = await send('Page.captureScreenshot', { format: 'png' });
  const fs = require('fs');
  fs.writeFileSync('C:\\Users\\UESR\\.gemini\\antigravity-ide\\brain\\93bf69fe-e715-4427-8827-451aed4ddb67\\real_dom_dropdown.png', Buffer.from(screenshot.data, 'base64'));
  console.log('Screenshot saved to real_dom_dropdown.png');

  ws.close();
  edgeProc.kill();
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
