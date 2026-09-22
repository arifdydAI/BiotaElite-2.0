const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\UESR\\.gemini\\antigravity-ide\\brain\\93bf69fe-e715-4427-8827-451aed4ddb67';
const edgeProfile = path.join(brainDir, 'scratch', '.edge_profile_test');
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const port = 9222;

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log('=== BIOTAELITE 2.0 NAVIGATION MULTI-VIEWPORT VERIFICATION SUITE ===');

  const edgeProc = spawn(edgePath, [
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${edgeProfile}`,
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--window-size=1920,1080',
    'http://localhost:2021'
  ]);

  await sleep(2500);

  // Connect to CDP
  const targets = await new Promise((resolve, reject) => {
    http.get(`http://127.0.0.1:${port}/json`, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve(JSON.parse(d)));
    }).on('error', reject);
  });

  const page = targets.find(t => t.type === 'page') || targets[0];
  const ws = new WebSocket(page.webSocketDebuggerUrl);

  let id = 1;
  const pending = new Map();
  function send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const msgId = id++;
      pending.set(msgId, { resolve, reject });
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  }
  ws.onmessage = (e) => {
    const msg = JSON.parse(e.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(msg.error);
      else resolve(msg.result);
    }
  };

  await new Promise(r => ws.onopen = r);
  await send('Page.enable');
  await send('DOM.enable');
  await send('Runtime.enable');
  await send('Network.enable');
  await send('Network.setCacheDisabled', { cacheDisabled: true });
  await send('Page.reload', { ignoreCache: true });
  await sleep(2000);

  async function setViewport(width, height) {
    await send('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: width < 768
    });
    await sleep(400);
  }

  async function capture(filename) {
    const res = await send('Page.captureScreenshot', { format: 'png' });
    const fullPath = path.join(brainDir, filename);
    fs.writeFileSync(fullPath, Buffer.from(res.data, 'base64'));
    console.log(`📸 Screenshot captured: ${filename}`);
  }

  async function evaluate(code) {
    const res = await send('Runtime.evaluate', {
      expression: code,
      awaitPromise: true,
      returnByValue: true
    });
    return res.result.value;
  }

  const results = [];

  // TEST 1: Desktop 1920x1080 - Core Zoology
  console.log('\n--- 1. Testing Desktop 1920x1080: Core Zoology ---');
  await setViewport(1920, 1080);
  const z1920 = await evaluate(`(async () => {
    const btns = Array.from(document.querySelectorAll('button'));
    const btn = btns.find(b => b.textContent && b.textContent.includes('Core Zoology'));
    if (!btn) return { error: 'Core Zoology button not found' };
    btn.click();
    await new Promise(r => setTimeout(r, 200));
    
    // Check portal or local menu
    const menu = document.querySelector('.nav-dropdown-portal') || document.querySelector('.nav-dropdown-menu');
    if (!menu) return { error: 'Menu not open' };
    
    const items = Array.from(menu.querySelectorAll('a')).map(a => ({
      text: a.textContent.trim(),
      href: a.getAttribute('href'),
      rect: a.getBoundingClientRect()
    }));
    
    const menuRect = menu.getBoundingClientRect();
    const hasHorizontalOverflow = document.documentElement.scrollWidth > window.innerWidth;
    
    return {
      isOpen: true,
      itemCount: items.length,
      items: items.map(i => i.text),
      menuRect: { top: menuRect.top, bottom: menuRect.bottom, height: menuRect.height },
      hasHorizontalOverflow
    };
  })()`);
  console.log('Core Zoology (1920px):', JSON.stringify(z1920, null, 2));
  await capture('verified_desktop_1920_zoology.png');
  results.push({ test: 'Desktop 1920 Core Zoology 6 items', pass: z1920.itemCount === 6 && !z1920.hasHorizontalOverflow });

  // TEST 2: Desktop 1920x1080 - Identification Keys
  console.log('\n--- 2. Testing Desktop 1920x1080: Identification Keys ---');
  const id1920 = await evaluate(`(async () => {
    const btns = Array.from(document.querySelectorAll('button'));
    const btn = btns.find(b => b.textContent && b.textContent.includes('Identification'));
    if (!btn) return { error: 'Identification button not found' };
    btn.click();
    await new Promise(r => setTimeout(r, 200));
    
    const menu = document.querySelector('.nav-dropdown-portal') || document.querySelector('.nav-dropdown-menu');
    if (!menu) return { error: 'Menu not open' };
    
    const items = Array.from(menu.querySelectorAll('a')).map(a => a.textContent.trim());
    return { itemCount: items.length, items };
  })()`);
  console.log('Identification (1920px):', JSON.stringify(id1920, null, 2));
  await capture('verified_desktop_1920_identification.png');
  results.push({ test: 'Desktop 1920 Identification 2 items', pass: id1920.itemCount === 2 });

  // TEST 3: Desktop 1920x1080 - More Dropdown
  console.log('\n--- 3. Testing Desktop 1920x1080: More Dropdown ---');
  const more1920 = await evaluate(`(async () => {
    const btns = Array.from(document.querySelectorAll('button'));
    const btn = btns.find(b => b.textContent && b.textContent.includes('More'));
    if (!btn) return { error: 'More button not found' };
    btn.click();
    await new Promise(r => setTimeout(r, 200));
    
    const menu = document.querySelector('.nav-dropdown-portal') || document.querySelector('.nav-dropdown-menu');
    if (!menu) return { error: 'Menu not open' };
    
    const items = Array.from(menu.querySelectorAll('a')).map(a => a.textContent.trim());
    return { itemCount: items.length, items };
  })()`);
  console.log('More (1920px):', JSON.stringify(more1920, null, 2));
  await capture('verified_desktop_1920_more.png');
  results.push({ test: 'Desktop 1920 More 2 items', pass: more1920.itemCount === 2 });

  // TEST 4: Desktop 1440x900
  console.log('\n--- 4. Testing Desktop 1440x900 ---');
  await setViewport(1440, 900);
  const z1440 = await evaluate(`(async () => {
    const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Core Zoology'));
    btn.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
    btn.click();
    await new Promise(r => setTimeout(r, 200));
    const menu = document.querySelector('.nav-dropdown-portal') || document.querySelector('.nav-dropdown-menu');
    return {
      itemCount: menu ? menu.querySelectorAll('a').length : 0,
      hasOverflow: document.documentElement.scrollWidth > window.innerWidth
    };
  })()`);
  results.push({ test: 'Desktop 1440 Core Zoology', pass: z1440.itemCount === 6 && !z1440.hasOverflow });

  // TEST 5: Desktop 1366x768
  console.log('\n--- 5. Testing Desktop 1366x768 ---');
  await setViewport(1366, 768);
  const z1366 = await evaluate(`(async () => {
    document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    await new Promise(r => setTimeout(r, 100));
    const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Core Zoology'));
    btn.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
    btn.click();
    await new Promise(r => setTimeout(r, 200));
    const menu = document.querySelector('.nav-dropdown-portal') || document.querySelector('.nav-dropdown-menu');
    return {
      itemCount: menu ? menu.querySelectorAll('a').length : 0,
      hasOverflow: document.documentElement.scrollWidth > window.innerWidth
    };
  })()`);
  results.push({ test: 'Desktop 1366 Core Zoology', pass: z1366.itemCount === 6 && !z1366.hasOverflow });

  // TEST 6: Tablet 1024x768
  console.log('\n--- 6. Testing Tablet 1024x768 ---');
  await setViewport(1024, 768);
  const tab1024 = await evaluate(`(async () => {
    document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    await new Promise(r => setTimeout(r, 100));
    const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Core Zoology'));
    btn.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
    btn.click();
    await new Promise(r => setTimeout(r, 200));
    const menu = document.querySelector('.nav-dropdown-portal') || document.querySelector('.nav-dropdown-menu');
    return {
      itemCount: menu ? menu.querySelectorAll('a').length : 0,
      hasOverflow: document.documentElement.scrollWidth > window.innerWidth
    };
  })()`);
  await capture('verified_tablet_1024.png');
  results.push({ test: 'Tablet 1024 Core Zoology', pass: tab1024.itemCount === 6 && !tab1024.hasOverflow });

  // TEST 7: Tablet 768x1024
  console.log('\n--- 7. Testing Tablet 768x1024 ---');
  await setViewport(768, 1024);
  const tab768 = await evaluate(`(async () => {
    document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    await new Promise(r => setTimeout(r, 100));
    const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Core Zoology'));
    btn.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
    btn.click();
    await new Promise(r => setTimeout(r, 200));
    const menu = document.querySelector('.nav-dropdown-portal') || document.querySelector('.nav-dropdown-menu');
    return {
      itemCount: menu ? menu.querySelectorAll('a').length : 0,
      hasOverflow: document.documentElement.scrollWidth > window.innerWidth
    };
  })()`);
  results.push({ test: 'Tablet 768 Core Zoology', pass: tab768.itemCount === 6 && !tab768.hasOverflow });

  // TEST 8: Mobile 390x844 (iPhone 12/13/14)
  console.log('\n--- 8. Testing Mobile 390x844 ---');
  await setViewport(390, 844);
  // Re-trigger resize event in browser and reset open dropdown
  await evaluate(`(async () => {
    document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    window.dispatchEvent(new Event('resize'));
    await new Promise(r => setTimeout(r, 200));
  })()`);
  await sleep(300);

  const mob390 = await evaluate(`(async () => {
    const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Core Zoology'));
    btn.click();
    await new Promise(r => setTimeout(r, 200));
    
    // In mobile, should be in-flow nav-dropdown-menu
    const menu = document.querySelector('.nav-dropdown-menu');
    const items = menu ? Array.from(menu.querySelectorAll('a')).map(a => a.textContent.trim()) : [];
    const hasHorizontalOverflow = document.documentElement.scrollWidth > window.innerWidth;
    
    return {
      itemCount: items.length,
      items,
      hasHorizontalOverflow
    };
  })()`);
  console.log('Mobile 390:', JSON.stringify(mob390, null, 2));
  await capture('verified_mobile_390_zoology.png');
  results.push({ test: 'Mobile 390 Core Zoology In-Flow 6 items', pass: mob390.itemCount === 6 && !mob390.hasHorizontalOverflow });

  // TEST 9: Mobile 375x667 (iPhone SE)
  console.log('\n--- 9. Testing Mobile 375x667 ---');
  await setViewport(375, 667);
  await evaluate(`window.dispatchEvent(new Event('resize'))`);
  await sleep(300);

  const mob375 = await evaluate(`(async () => {
    const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Identification'));
    btn.click();
    await new Promise(r => setTimeout(r, 200));
    const menu = document.querySelector('.nav-dropdown-menu');
    const items = menu ? Array.from(menu.querySelectorAll('a')).map(a => a.textContent.trim()) : [];
    const hasHorizontalOverflow = document.documentElement.scrollWidth > window.innerWidth;
    return { itemCount: items.length, items, hasHorizontalOverflow };
  })()`);
  console.log('Mobile 375 Ident:', JSON.stringify(mob375, null, 2));
  await capture('verified_mobile_375.png');
  results.push({ test: 'Mobile 375 Identification In-Flow 2 items', pass: mob375.itemCount === 2 && !mob375.hasHorizontalOverflow });

  // TEST 10: Submenu Navigation
  console.log('\n--- 10. Testing Submenu Navigation clicks ---');
  await setViewport(1920, 1080);
  const navTest = await evaluate(`(async () => {
    const testLinks = [
      { triggerText: 'Core Zoology', linkText: 'Animal Kingdom', expectedPath: '/animal-kingdom' },
      { triggerText: 'Core Zoology', linkText: 'Vertebrate Explorer', expectedPath: '/vertebrates' },
      { triggerText: 'Identification', linkText: 'Dichotomous Key', expectedPath: '/dichotomous-key' },
      { triggerText: 'More', linkText: 'Scientific Names', expectedPath: '/scientific-names' },
      { triggerText: 'More', linkText: 'References', expectedPath: '/references' },
    ];
    
    const navResults = [];
    for (const item of testLinks) {
      const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes(item.triggerText));
      btn.click();
      await new Promise(r => setTimeout(r, 150));
      
      const menu = document.querySelector('.nav-dropdown-portal') || document.querySelector('.nav-dropdown-menu');
      const link = Array.from(menu.querySelectorAll('a')).find(a => a.textContent.includes(item.linkText));
      if (!link) {
        navResults.push({ item: item.linkText, pass: false, error: 'Link not found' });
        continue;
      }
      
      link.click();
      await new Promise(r => setTimeout(r, 200));
      const currentPath = window.location.pathname;
      navResults.push({
        item: item.linkText,
        expected: item.expectedPath,
        actual: currentPath,
        pass: currentPath.startsWith(item.expectedPath)
      });
    }
    return navResults;
  })()`);
  console.log('Navigation results:', JSON.stringify(navTest, null, 2));
  const allNavPass = navTest.every(n => n.pass);
  results.push({ test: 'Submenu item click navigation', pass: allNavPass });

  console.log('\n================ VERIFICATION SUMMARY ================');
  let passCount = 0;
  for (const r of results) {
    const mark = r.pass ? '✅ PASS' : '❌ FAIL';
    console.log(`${mark}: ${r.test}`);
    if (r.pass) passCount++;
  }
  console.log(`\nTotal: ${passCount}/${results.length} PASSED`);

  ws.close();
  edgeProc.kill();

  if (passCount === results.length) {
    process.exit(0);
  } else {
    process.exit(1);
  }
}

run().catch(err => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
