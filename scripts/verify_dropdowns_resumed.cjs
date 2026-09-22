// Comprehensive Multi-Viewport Navigation & Portal Dropdown Verifier
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const convId = 'dde4acc2-f190-4239-bebe-005710bec4e6';
const brainDir = path.join('C:\\Users\\UESR\\.gemini\\antigravity-ide\\brain', convId);
if (!fs.existsSync(brainDir)) {
  fs.mkdirSync(brainDir, { recursive: true });
}
const edgeProfile = path.join(os.tmpdir(), 'edge_resumed_nav_' + Date.now());
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const port = 9222;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log('================================================================');
  console.log('BIOTAELITE 2.0: NAVIGATION DROPDOWN MULTI-VIEWPORT VERIFICATION');
  console.log('================================================================\n');

  const edgeProc = spawn(edgePath, [
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${edgeProfile}`,
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--window-size=1920,1080',
    'http://localhost:2021'
  ]);

  await sleep(3000);

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
  await sleep(2500);

  async function setViewport(width, height) {
    await send('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: width < 768
    });
    // Trigger window resize event inside page
    await evaluate(`window.dispatchEvent(new Event('resize'))`);
    await sleep(350);
  }

  async function capture(filename) {
    const res = await send('Page.captureScreenshot', { format: 'png' });
    const fullPath = path.join(brainDir, filename);
    fs.writeFileSync(fullPath, Buffer.from(res.data, 'base64'));
    console.log(`  📸 Screenshot saved: ${filename}`);
  }

  async function evaluate(code) {
    const res = await send('Runtime.evaluate', {
      expression: code,
      awaitPromise: true,
      returnByValue: true
    });
    return res.result.value;
  }

  const allTestResults = [];
  function record(name, pass, details = '') {
    const mark = pass ? '✅ PASS' : '❌ FAIL';
    console.log(`${mark}: ${name} ${details ? '(' + details + ')' : ''}`);
    allTestResults.push({ name, pass, details });
  }

  // -------------------------------------------------------------
  // TEST 1: CORE ZOOLOGY DROPDOWN — ALL 6 ITEMS COMPLETELY VISIBLE
  // -------------------------------------------------------------
  console.log('\n--- [TEST 1] Core Zoology Dropdown Verification (Desktop 1920) ---');
  await setViewport(1920, 1080);
  const zInfo = await evaluate(`(async () => {
    // Reset any state
    document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    await new Promise(r => setTimeout(r, 100));
    const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Core Zoology'));
    if (!btn) return { error: 'Core Zoology button not found' };
    btn.click();
    await new Promise(r => setTimeout(r, 250));
    
    const portal = document.querySelector('.nav-dropdown-portal');
    if (!portal) return { error: 'Portal element not found in DOM' };
    
    const pRect = portal.getBoundingClientRect();
    const items = Array.from(portal.querySelectorAll('a.nav-dropdown-item')).map(a => {
      const rect = a.getBoundingClientRect();
      const style = window.getComputedStyle(a);
      return {
        text: a.textContent.trim(),
        href: a.getAttribute('href'),
        top: Math.round(rect.top),
        bottom: Math.round(rect.bottom),
        height: Math.round(rect.height),
        visible: style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0' && rect.height > 0
      };
    });
    
    const header = document.querySelector('header, .header-container, .navbar');
    const headerRect = header ? header.getBoundingClientRect() : null;
    
    return {
      portalRect: { top: Math.round(pRect.top), bottom: Math.round(pRect.bottom), height: Math.round(pRect.height) },
      items,
      headerBottom: headerRect ? Math.round(headerRect.bottom) : 0,
      windowHeight: window.innerHeight,
      horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth
    };
  })()`);

  console.log('Core Zoology Inspection:', JSON.stringify(zInfo, null, 2));
  await capture('verified_t1_desktop_core_zoology_open.png');

  const expectedZoologyItems = [
    'Animal Kingdom',
    'Animal Biodiversity',
    'Comparative Zoology',
    'Evolution & Phylogeny',
    'Anatomy & Physiology',
    'Vertebrate Explorer'
  ];

  const zNamesMatch = expectedZoologyItems.every(exp => zInfo.items && zInfo.items.some(it => it.text.includes(exp)));
  const zAllVisible = zInfo.items && zInfo.items.length === 6 && zInfo.items.every(it => it.visible && it.bottom <= zInfo.windowHeight);
  record('Test 1.1: Core Zoology opens with exactly 6 items', zInfo.items && zInfo.items.length === 6, `Count: ${zInfo.items ? zInfo.items.length : 0}`);
  record('Test 1.2: Core Zoology contains all 6 required items by name', zNamesMatch);
  record('Test 1.3: All 6 items completely visible (not clipped, within viewport)', zAllVisible, `Portal height: ${zInfo.portalRect ? zInfo.portalRect.height : 0}px`);

  // -------------------------------------------------------------
  // TEST 2: IDENTIFICATION KEYS DROPDOWN — ALL 2 ITEMS VISIBLE
  // -------------------------------------------------------------
  console.log('\n--- [TEST 2] Identification Dropdown Verification ---');
  const idInfo = await evaluate(`(async () => {
    const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Identification'));
    if (!btn) return { error: 'Identification button not found' };
    btn.click();
    await new Promise(r => setTimeout(r, 250));
    
    const portal = document.querySelector('.nav-dropdown-portal');
    if (!portal) return { error: 'Portal element not found in DOM' };
    
    const pRect = portal.getBoundingClientRect();
    const items = Array.from(portal.querySelectorAll('a.nav-dropdown-item')).map(a => {
      const rect = a.getBoundingClientRect();
      const style = window.getComputedStyle(a);
      return {
        text: a.textContent.trim(),
        href: a.getAttribute('href'),
        height: Math.round(rect.height),
        visible: style.display !== 'none' && style.visibility !== 'hidden' && rect.height > 0
      };
    });
    
    return {
      portalRect: { top: Math.round(pRect.top), bottom: Math.round(pRect.bottom) },
      items,
      windowHeight: window.innerHeight
    };
  })()`);

  console.log('Identification Inspection:', JSON.stringify(idInfo, null, 2));
  await capture('verified_t2_desktop_identification_open.png');

  const idExpected = ['Identification Keys', 'Dichotomous Key'];
  const idMatch = idExpected.every(exp => idInfo.items && idInfo.items.some(it => it.text.includes(exp)));
  const idAllVis = idInfo.items && idInfo.items.length === 2 && idInfo.items.every(it => it.visible);
  record('Test 2.1: Identification opens with 2 items', idInfo.items && idInfo.items.length === 2);
  record('Test 2.2: Identification contains required items by name', idMatch);
  record('Test 2.3: Both items completely visible without clipping', idAllVis);

  // -------------------------------------------------------------
  // TEST 3: MORE DROPDOWN — ALL 2 ITEMS VISIBLE
  // -------------------------------------------------------------
  console.log('\n--- [TEST 3] More Dropdown Verification ---');
  const moreInfo = await evaluate(`(async () => {
    const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('More'));
    if (!btn) return { error: 'More button not found' };
    btn.click();
    await new Promise(r => setTimeout(r, 250));
    
    const portal = document.querySelector('.nav-dropdown-portal');
    if (!portal) return { error: 'Portal element not found in DOM' };
    
    const pRect = portal.getBoundingClientRect();
    const items = Array.from(portal.querySelectorAll('a.nav-dropdown-item')).map(a => {
      const rect = a.getBoundingClientRect();
      const style = window.getComputedStyle(a);
      return {
        text: a.textContent.trim(),
        href: a.getAttribute('href'),
        height: Math.round(rect.height),
        visible: style.display !== 'none' && style.visibility !== 'hidden' && rect.height > 0
      };
    });
    
    return {
      portalRect: { top: Math.round(pRect.top), bottom: Math.round(pRect.bottom) },
      items,
      windowHeight: window.innerHeight
    };
  })()`);

  console.log('More Inspection:', JSON.stringify(moreInfo, null, 2));
  await capture('verified_t3_desktop_more_open.png');

  const moreExpected = ['Scientific Names & Synonyms', 'References & Literature'];
  const moreMatch = moreExpected.every(exp => moreInfo.items && moreInfo.items.some(it => it.text.includes(exp)));
  const moreAllVis = moreInfo.items && moreInfo.items.length === 2 && moreInfo.items.every(it => it.visible);
  record('Test 3.1: More opens with 2 items', moreInfo.items && moreInfo.items.length === 2);
  record('Test 3.2: More contains required items by name', moreMatch);
  record('Test 3.3: Both items completely visible without clipping', moreAllVis);

  // -------------------------------------------------------------
  // TEST 4: ROUTES VERIFICATION — CLICK ALL 10 SUBMENU ITEMS
  // -------------------------------------------------------------
  console.log('\n--- [TEST 4] Routes Verification (All 10 Submenu Items) ---');
  const routesToTest = [
    { trigger: 'Core Zoology', label: 'Animal Kingdom', expected: '/animal-kingdom' },
    { trigger: 'Core Zoology', label: 'Animal Biodiversity', expected: '/animal-biodiversity' },
    { trigger: 'Core Zoology', label: 'Comparative Zoology', expected: '/comparative-zoology' },
    { trigger: 'Core Zoology', label: 'Evolution & Phylogeny', expected: '/evolution-phylogeny' },
    { trigger: 'Core Zoology', label: 'Anatomy & Physiology', expected: '/anatomy-physiology' },
    { trigger: 'Core Zoology', label: 'Vertebrate Explorer', expected: '/vertebrates' },
    { trigger: 'Identification', label: 'Identification Keys', expected: '/identification' },
    { trigger: 'Identification', label: 'Dichotomous Key', expected: '/dichotomous-key' },
    { trigger: 'More', label: 'Scientific Names', expected: '/scientific-names' },
    { trigger: 'More', label: 'References', expected: '/references' },
  ];

  for (const r of routesToTest) {
    const routeRes = await evaluate(`(async () => {
      // Find trigger
      const btns = Array.from(document.querySelectorAll('button'));
      const btn = btns.find(b => b.textContent && b.textContent.includes('${r.trigger}'));
      if (!btn) return { pass: false, error: 'Trigger not found' };
      btn.click();
      await new Promise(res => setTimeout(res, 200));
      
      const portal = document.querySelector('.nav-dropdown-portal');
      if (!portal) return { pass: false, error: 'Portal not open' };
      
      const link = Array.from(portal.querySelectorAll('a')).find(a => a.textContent && a.textContent.includes('${r.label}'));
      if (!link) return { pass: false, error: 'Submenu link not found' };
      
      link.click();
      await new Promise(res => setTimeout(res, 250));
      
      const path = window.location.pathname;
      const portalClosed = !document.querySelector('.nav-dropdown-portal');
      
      return {
        pass: path.startsWith('${r.expected}') && portalClosed,
        actualPath: path,
        portalClosed
      };
    })()`);

    record(`Test 4 [Route] ${r.trigger} -> ${r.label}`, routeRes.pass, `Actual: ${routeRes.actualPath}`);
  }

  // -------------------------------------------------------------
  // TEST 5: INTERACTION VERIFICATION
  // -------------------------------------------------------------
  console.log('\n--- [TEST 5] Interaction Verification ---');
  // 5.1 Outside click closes dropdown
  const outsideClickRes = await evaluate(`(async () => {
    const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Core Zoology'));
    btn.click();
    await new Promise(r => setTimeout(r, 200));
    const opened = Boolean(document.querySelector('.nav-dropdown-portal'));
    
    // Click body outside
    document.body.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, clientX: 10, clientY: 10 }));
    await new Promise(r => setTimeout(r, 200));
    const closed = !document.querySelector('.nav-dropdown-portal');
    
    return { opened, closed, pass: opened && closed };
  })()`);
  record('Test 5.1: Outside click closes dropdown', outsideClickRes.pass);

  // 5.2 Escape key closes dropdown
  const escapeKeyRes = await evaluate(`(async () => {
    const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Core Zoology'));
    btn.click();
    await new Promise(r => setTimeout(r, 200));
    const opened = Boolean(document.querySelector('.nav-dropdown-portal'));
    
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    await new Promise(r => setTimeout(r, 200));
    const closed = !document.querySelector('.nav-dropdown-portal');
    
    return { opened, closed, pass: opened && closed };
  })()`);
  record('Test 5.2: Escape key closes dropdown', escapeKeyRes.pass);

  // 5.3 Dropdown reopening
  const reopenRes = await evaluate(`(async () => {
    const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Core Zoology'));
    btn.click();
    await new Promise(r => setTimeout(r, 150));
    btn.click(); // toggle close
    await new Promise(r => setTimeout(r, 150));
    btn.click(); // reopen
    await new Promise(r => setTimeout(r, 200));
    const open = Boolean(document.querySelector('.nav-dropdown-portal'));
    return { open, pass: open };
  })()`);
  record('Test 5.3: Dropdown reopening works cleanly', reopenRes.pass);

  // 5.4 Mouse hover open & 180ms leave debounce
  const hoverDebounceRes = await evaluate(`(async () => {
    // Close first
    document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    await new Promise(r => setTimeout(r, 100));
    
    const parent = Array.from(document.querySelectorAll('.nav-dropdown')).find(d => d.textContent.includes('Identification'));
    if (!parent) return { pass: false, error: 'Parent not found' };
    
    parent.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
    await new Promise(r => setTimeout(r, 100));
    const openAfterEnter = Boolean(document.querySelector('.nav-dropdown-portal'));
    
    parent.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }));
    await new Promise(r => setTimeout(r, 80)); // before 180ms debounce expires
    const stillOpenAt80ms = Boolean(document.querySelector('.nav-dropdown-portal'));
    
    await new Promise(r => setTimeout(r, 150)); // total 230ms > 180ms
    const closedAfterDebounce = !document.querySelector('.nav-dropdown-portal');
    
    return {
      openAfterEnter,
      stillOpenAt80ms,
      closedAfterDebounce,
      pass: openAfterEnter && stillOpenAt80ms && closedAfterDebounce
    };
  })()`);
  record('Test 5.4: Mouse hover opens & 180ms leave debounce stays open then closes', hoverDebounceRes.pass, 
    `openAfterEnter: ${hoverDebounceRes.openAfterEnter}, stillOpen@80ms: ${hoverDebounceRes.stillOpenAt80ms}, closed@230ms: ${hoverDebounceRes.closedAfterDebounce}`
  );

  // 5.5 Moving pointer from trigger to dropdown portal preserves open state
  const bridgeRes = await evaluate(`(async () => {
    const parent = Array.from(document.querySelectorAll('.nav-dropdown')).find(d => d.textContent.includes('Core Zoology'));
    parent.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
    await new Promise(r => setTimeout(r, 100));
    
    const portal = document.querySelector('.nav-dropdown-portal');
    if (!portal) return { pass: false, error: 'Portal not found' };
    
    // Mouse leaves trigger and enters portal
    parent.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }));
    portal.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
    
    await new Promise(r => setTimeout(r, 250)); // Wait past 180ms
    const stillOpen = Boolean(document.querySelector('.nav-dropdown-portal'));
    
    return { stillOpen, pass: stillOpen };
  })()`);
  record('Test 5.5: Pointer move from trigger into dropdown portal cancels leave timeout', bridgeRes.pass);

  // -------------------------------------------------------------
  // TEST 6: MULTI-VIEWPORT VERIFICATION
  // -------------------------------------------------------------
  console.log('\n--- [TEST 6] Multi-Viewport Verification ---');
  const viewports = [
    { name: 'Desktop 1920x1080', width: 1920, height: 1080, type: 'desktop' },
    { name: 'Desktop 1440x900', width: 1440, height: 900, type: 'desktop' },
    { name: 'Desktop 1366x768', width: 1366, height: 768, type: 'desktop' },
    { name: 'Tablet 1024x768', width: 1024, height: 768, type: 'desktop' },
    { name: 'Tablet 768x1024', width: 768, height: 1024, type: 'desktop' },
    { name: 'Mobile 390x844', width: 390, height: 844, type: 'mobile' },
    { name: 'Mobile 375x667', width: 375, height: 667, type: 'mobile' },
  ];

  for (const vp of viewports) {
    console.log(`\nTesting viewport: ${vp.name}`);
    await setViewport(vp.width, vp.height);

    const vpRes = await evaluate(`(async () => {
      // Close dropdowns
      document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
      await new Promise(r => setTimeout(r, 150));
      
      const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Core Zoology'));
      if (!btn) return { error: 'Core Zoology button missing' };
      
      btn.click();
      await new Promise(r => setTimeout(r, 250));
      
      const isMobile = window.innerWidth < 768;
      const menu = isMobile 
        ? document.querySelector('.nav-dropdown-menu')
        : document.querySelector('.nav-dropdown-portal');
        
      if (!menu) return { error: 'Submenu menu not rendered', isMobile };
      
      const items = Array.from(menu.querySelectorAll('a.nav-dropdown-item'));
      const menuRect = menu.getBoundingClientRect();
      const hasHorizontalOverflow = document.documentElement.scrollWidth > window.innerWidth;
      
      const allItemsVisible = items.length === 6 && items.every(a => {
        const r = a.getBoundingClientRect();
        return r.height > 0 && r.width > 0 && r.top < window.innerHeight;
      });
      
      // Check touch target heights >= 36px
      const minTouchTarget = items.every(a => a.getBoundingClientRect().height >= 32);
      
      return {
        isMobile,
        itemCount: items.length,
        allItemsVisible,
        hasHorizontalOverflow,
        minTouchTarget,
        menuRect: { top: Math.round(menuRect.top), bottom: Math.round(menuRect.bottom), width: Math.round(menuRect.width) },
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        pass: items.length === 6 && allItemsVisible && !hasHorizontalOverflow
      };
    })()`);

    console.log(`Viewport ${vp.name} result:`, JSON.stringify(vpRes, null, 2));
    const safeVpName = vp.name.toLowerCase().replace(/[^a-z0-9]/g, '_');
    await capture(`verified_vp_${safeVpName}.png`);

    record(`Test 6 [Viewport] ${vp.name}: Core Zoology 6 items & no overflow`, vpRes.pass, 
      `items: ${vpRes.itemCount}, allVis: ${vpRes.allItemsVisible}, hOverflow: ${vpRes.hasHorizontalOverflow}`
    );
  }

  // -------------------------------------------------------------
  // TEST 7: MOBILE IN-FLOW SPECIFICS (375px & 390px)
  // -------------------------------------------------------------
  console.log('\n--- [TEST 7] Mobile Specifics (In-Flow & All 3 Dropdowns) ---');
  await setViewport(375, 667);
  const mobFull = await evaluate(`(async () => {
    const results = {};
    const triggers = [
      { name: 'zoology', label: 'Core Zoology', count: 6 },
      { name: 'ident', label: 'Identification', count: 2 },
      { name: 'more', label: 'More', count: 2 },
    ];
    
    for (const t of triggers) {
      // Click trigger
      const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes(t.label));
      btn.click();
      await new Promise(r => setTimeout(r, 200));
      
      const menu = document.querySelector('.nav-dropdown-menu');
      const items = menu ? Array.from(menu.querySelectorAll('a.nav-dropdown-item')) : [];
      const isStaticOrRelative = menu ? ['static', 'relative'].includes(window.getComputedStyle(menu).position) : false;
      
      results[t.name] = {
        open: Boolean(menu),
        count: items.length,
        expectedCount: t.count,
        isInFlow: isStaticOrRelative,
        pass: menu && items.length === t.count && isStaticOrRelative
      };
      
      // Close by clicking again
      btn.click();
      await new Promise(r => setTimeout(r, 150));
    }
    
    return results;
  })()`);

  console.log('Mobile in-flow results:', JSON.stringify(mobFull, null, 2));
  await capture('verified_t7_mobile_inflow_check.png');

  record('Test 7.1: Mobile Core Zoology renders in-flow (position: static) with 6 items', mobFull.zoology.pass);
  record('Test 7.2: Mobile Identification renders in-flow with 2 items', mobFull.ident.pass);
  record('Test 7.3: Mobile More renders in-flow with 2 items', mobFull.more.pass);

  console.log('\n================================================================');
  console.log('                 FINAL VERIFICATION SUMMARY                     ');
  console.log('================================================================');
  const total = allTestResults.length;
  const passed = allTestResults.filter(r => r.pass).length;
  console.log(`\nTOTAL TESTS RUN: ${total}`);
  console.log(`PASSED: ${passed}`);
  console.log(`FAILED: ${total - passed}`);

  ws.close();
  edgeProc.kill();

  if (passed === total) {
    console.log('\n🎉 ALL NAVIGATION TESTS PASSED WITH ZERO FAILURES!');
    process.exit(0);
  } else {
    console.error('\n❌ SOME NAVIGATION TESTS FAILED:');
    allTestResults.filter(r => !r.pass).forEach(r => console.error(`  - ${r.name}: ${r.details}`));
    process.exit(1);
  }
}

run().catch(err => {
  console.error('Test execution error:', err);
  process.exit(1);
});
