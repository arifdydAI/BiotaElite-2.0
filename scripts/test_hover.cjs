const http = require('http');
const { spawn } = require('child_process');

async function test() {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const proc = spawn(edgePath, [
    '--remote-debugging-port=9223',
    '--user-data-dir=' + require('os').tmpdir() + '\\test_hover_' + Date.now(),
    '--headless=new',
    'http://localhost:2021'
  ]);
  await new Promise(r => setTimeout(r, 2000));
  
  const targets = await new Promise((res, rej) => {
    http.get('http://127.0.0.1:9223/json', r => {
      let d = ''; r.on('data', c => d += c); r.on('end', () => res(JSON.parse(d)));
    }).on('error', rej);
  });
  const page = targets.find(t => t.type === 'page');
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);
  
  let id = 1;
  const send = (method, params = {}) => new Promise((res, rej) => {
    const msgId = id++;
    const handler = (e) => {
      const msg = JSON.parse(e.data);
      if (msg.id === msgId) {
        ws.removeEventListener('message', handler);
        if (msg.error) rej(msg.error); else res(msg.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id: msgId, method, params }));
  });

  await send('Runtime.enable');
  await send('Page.enable');
  await new Promise(r => setTimeout(r, 1500));

  // Get position of Core Zoology button
  const boxRes = await send('Runtime.evaluate', {
    expression: '(() => { const b = Array.from(document.querySelectorAll("button")).find(x => x.textContent.includes("Core Zoology")); const r = b.getBoundingClientRect(); return { x: r.x + r.width/2, y: r.y + r.height/2 }; })()',
    returnByValue: true
  });
  const box = boxRes.result.value;
  console.log('Button position:', box);

  // Dispatch real CDP mouse move
  await send('Input.dispatchMouseEvent', {
    type: 'mouseMoved',
    x: box.x,
    y: box.y
  });
  await new Promise(r => setTimeout(r, 300));

  const portal1 = await send('Runtime.evaluate', {
    expression: 'Boolean(document.querySelector(".nav-dropdown-portal"))',
    returnByValue: true
  });
  console.log('1. Portal open after real CDP mouse hover:', portal1.result.value);

  // Get portal bounding box to move mouse into portal
  const portalBoxRes = await send('Runtime.evaluate', {
    expression: '(() => { const p = document.querySelector(".nav-dropdown-portal"); const r = p.getBoundingClientRect(); return { x: r.x + r.width/2, y: r.y + 20 }; })()',
    returnByValue: true
  });
  const portalBox = portalBoxRes.result.value;
  console.log('Portal target position:', portalBox);

  // Move mouse from trigger into portal
  await send('Input.dispatchMouseEvent', {
    type: 'mouseMoved',
    x: portalBox.x,
    y: portalBox.y
  });
  await new Promise(r => setTimeout(r, 250)); // past 180ms debounce!

  const portal2 = await send('Runtime.evaluate', {
    expression: 'Boolean(document.querySelector(".nav-dropdown-portal"))',
    returnByValue: true
  });
  console.log('2. Portal STILL open after moving mouse into portal (debounce canceled):', portal2.result.value);

  // Now move mouse away entirely to (10, 10)
  await send('Input.dispatchMouseEvent', {
    type: 'mouseMoved',
    x: 10,
    y: 10
  });
  await new Promise(r => setTimeout(r, 80)); // 80ms < 180ms
  const portal3 = await send('Runtime.evaluate', {
    expression: 'Boolean(document.querySelector(".nav-dropdown-portal"))',
    returnByValue: true
  });
  console.log('3. Portal STILL open at 80ms (within 180ms debounce):', portal3.result.value);

  await new Promise(r => setTimeout(r, 160)); // total 240ms > 180ms
  const portal4 = await send('Runtime.evaluate', {
    expression: 'Boolean(document.querySelector(".nav-dropdown-portal"))',
    returnByValue: true
  });
  console.log('4. Portal CLOSED at 240ms (after debounce expires):', !portal4.result.value);

  ws.close();
  proc.kill();
}

test().catch(console.error);
