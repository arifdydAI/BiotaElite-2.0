// BiotaElite 2.0 Comprehensive Admin Browser & CDP QA Runner
// Tests Desktop (1920, 1366, 1024) and Mobile (390, 375, 360) viewports
// Verifies items A through X + RBAC Negative Testing
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = path.join(os.tmpdir(), 'chrome_admin_qa_' + Date.now());
fs.mkdirSync(userDataDir, { recursive: true });

const artifactDir = path.resolve('C:/Users/UESR/.gemini/antigravity-ide/brain/dde4acc2-f190-4239-bebe-005710bec4e6');

const chrome = spawn(CHROME, [
  '--headless=new',
  '--remote-debugging-port=9255',
  '--user-data-dir=' + userDataDir,
  '--no-first-run',
  '--disable-gpu',
  'about:blank'
], { stdio: 'ignore' });

async function getWsUrl() {
  for (let i = 0; i < 30; i++) {
    await new Promise(r => setTimeout(r, 300));
    try {
      const res = await fetch('http://127.0.0.1:9255/json/list');
      const list = await res.json();
      const p = list.find(t => t.type === 'page' && !t.url.startsWith('chrome-extension://'));
      if (p && p.webSocketDebuggerUrl) return p.webSocketDebuggerUrl;
    } catch (e) {}
  }
  throw new Error('Chrome remote debugging not ready on port 9255');
}

async function run() {
  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`  ✓ PASS: ${message}`);
      passed++;
    } else {
      console.error(`  ✗ FAIL: ${message}`);
      failed++;
    }
  }

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

    console.log('================================================================');
    console.log('BIOTAELITE 2.0: ADMIN BROWSER QA & MULTI-VIEWPORT VERIFICATION');
    console.log('================================================================\n');

    async function evaluate(expression) {
      const res = await send('Runtime.evaluate', { expression, returnByValue: true });
      if (res && res.exceptionDetails) {
        console.error('CDP Evaluate Exception:', res.exceptionDetails.text);
      }
      return res && res.result ? res.result.value : undefined;
    }

    async function navigate(url, waitMs = 1200) {
      await send('Page.navigate', { url });
      await new Promise(r => setTimeout(r, waitMs));
    }

    async function setViewport(width, height, mobile = false) {
      await send('Emulation.setDeviceMetricsOverride', {
        width,
        height,
        deviceScaleFactor: 2,
        mobile
      });
      await new Promise(r => setTimeout(r, 250));
    }

    async function takeScreenshot(fileName) {
      const res = await send('Page.captureScreenshot', { format: 'png' });
      if (res && res.data) {
        const filePath = path.join(artifactDir, fileName);
        fs.writeFileSync(filePath, Buffer.from(res.data, 'base64'));
        console.log(`  📸 Saved screenshot: ${fileName}`);
      }
    }

    // --- STEP 0: Reset session storage ---
    await navigate('http://localhost:2021/');
    await evaluate('window.sessionStorage.clear()');

    // --- TEST 1: Unauthenticated Public Access Protection (Negative Test) ---
    console.log('\n--- 1. Testing Unauthenticated Access to /admin ---');
    await setViewport(1920, 1080);
    await navigate('http://localhost:2021/admin');

    const currentUrl = await evaluate('window.location.pathname');
    assert(currentUrl === '/login', `Unauthenticated visit to /admin redirects to /login (actual: ${currentUrl})`);

    const loginTitle = await evaluate('document.title');
    assert(loginTitle.includes('BiotaElite'), 'Login page renders BiotaElite title');

    // --- TEST 2: Operator Login Flow with React Synthetic Events ---
    console.log('\n--- 2. Testing Operator Login (super_admin) ---');
    await evaluate(`(() => {
      const emailInput = document.querySelector('#login-email');
      const passInput = document.querySelector('#login-password');
      const roleSelect = document.querySelector('#login-dev-role');
      const submitBtn = document.querySelector('#login-submit');

      if (emailInput) {
        const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
        setter.call(emailInput, 'admin.lead@biotaelite.org');
        emailInput.dispatchEvent(new Event('input', { bubbles: true }));
        emailInput.dispatchEvent(new Event('change', { bubbles: true }));
      }
      if (passInput) {
        const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
        setter.call(passInput, 'BiotaEliteSecure2026!');
        passInput.dispatchEvent(new Event('input', { bubbles: true }));
        passInput.dispatchEvent(new Event('change', { bubbles: true }));
      }
      if (roleSelect) {
        const setter = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, 'value').set;
        setter.call(roleSelect, 'super_admin');
        roleSelect.dispatchEvent(new Event('change', { bubbles: true }));
      }
      if (submitBtn) {
        submitBtn.click();
      }
    })()`);

    let reachedAdmin = false;
    for (let i = 0; i < 20; i++) {
      await new Promise(r => setTimeout(r, 200));
      const p = await evaluate('window.location.pathname');
      if (p === '/admin') {
        reachedAdmin = true;
        break;
      }
    }
    assert(reachedAdmin, 'Login redirects to /admin dashboard (actual: /admin)');

    let hasBrand = false;
    for (let i = 0; i < 15; i++) {
      await new Promise(r => setTimeout(r, 150));
      const res = await evaluate(`(() => {
        return document.body.innerText.includes("BiotaElite") || document.body.innerText.includes("Curation");
      })()`);
      if (res) {
        hasBrand = true;
        break;
      }
    }
    assert(hasBrand, 'Admin layout renders "BiotaElite" brand banner');

    await takeScreenshot('admin_1920_dashboard.png');

    // --- TEST 3: Desktop Viewports (1920, 1366, 1024) ---
    const desktopViewports = [
      { width: 1920, height: 1080, name: '1920px Full HD' },
      { width: 1366, height: 768, name: '1366px Laptop' },
      { width: 1024, height: 768, name: '1024px Compact Desktop' }
    ];

    for (const vp of desktopViewports) {
      console.log(`\n--- 3. Testing Desktop ${vp.name} (${vp.width}x${vp.height}) ---`);
      await setViewport(vp.width, vp.height, false);

      const hasOverflow = await evaluate('document.documentElement.scrollWidth > window.innerWidth');
      assert(!hasOverflow, `Desktop ${vp.name}: Zero horizontal overflow (scrollWidth <= ${vp.width})`);

      const mobileToggleHidden = await evaluate(`(() => {
        const btn = document.querySelector('.admin-mobile-toggle');
        return btn ? window.getComputedStyle(btn).display === 'none' : true;
      })()`);
      assert(mobileToggleHidden, `Desktop ${vp.name}: Mobile toggle button is strictly hidden`);

      const desktopSidebarVisible = await evaluate(`(() => {
        const sidebar = document.querySelector('aside.admin-sidebar');
        return sidebar ? window.getComputedStyle(sidebar).display !== 'none' : false;
      })()`);
      assert(desktopSidebarVisible, `Desktop ${vp.name}: Sidebar navigation is statically visible`);
    }

    // --- TEST 4: Mobile Viewports (390, 375, 360) ---
    const mobileViewports = [
      { width: 390, height: 844, name: '390px (iPhone 14/15)' },
      { width: 375, height: 667, name: '375px (iPhone SE)' },
      { width: 360, height: 740, name: '360px (Android Common)' }
    ];

    for (const vp of mobileViewports) {
      console.log(`\n--- 4. Testing Mobile ${vp.name} (${vp.width}x${vp.height}) ---`);
      await setViewport(vp.width, vp.height, true);

      const hasOverflow = await evaluate('document.documentElement.scrollWidth > window.innerWidth');
      assert(!hasOverflow, `Mobile ${vp.name}: Zero horizontal overflow (scrollWidth <= ${vp.width})`);

      const mobileToggleVisible = await evaluate(`(() => {
        const btn = document.querySelector('.admin-mobile-toggle');
        return btn ? window.getComputedStyle(btn).display !== 'none' : false;
      })()`);
      assert(mobileToggleVisible, `Mobile ${vp.name}: Mobile toggle button is visible`);

      // Test mobile drawer toggle open/close
      await evaluate(`(() => { document.querySelector('.admin-mobile-toggle')?.click(); })()`);
      await new Promise(r => setTimeout(r, 400));

      const drawerOpen = await evaluate(`(() => {
        const sidebar = document.querySelector('aside.admin-sidebar');
        return sidebar ? sidebar.classList.contains('open') : false;
      })()`);
      assert(drawerOpen, `Mobile ${vp.name}: Mobile drawer opens with .open on toggle`);

      if (vp.width === 390) {
        await takeScreenshot('admin_390_mobile_drawer.png');
      }

      // Close drawer by clicking backdrop or close button
      await evaluate(`(() => {
        const closeBtn = document.querySelector('aside.admin-sidebar button[aria-label="Close menu"]');
        if (closeBtn) closeBtn.click();
        else {
          const backdrop = document.querySelector('.admin-sidebar-backdrop');
          if (backdrop) backdrop.click();
          else document.querySelector('.admin-mobile-toggle')?.click();
        }
      })()`);
      await new Promise(r => setTimeout(r, 300));
    }

    // Reset back to desktop 1920
    await setViewport(1920, 1080, false);

    // --- TEST 5: Comprehensive Sub-Route Navigation (A to X) ---
    console.log('\n--- 5. Testing All 16 Admin Navigation Sub-Routes ---');

    const routesToTest = [
      { path: '/admin', assertText: 'Zoological Curation' },
      { path: '/admin/species', assertText: 'Species' },
      { path: '/admin/taxonomy', assertText: 'Taxonom' },
      { path: '/admin/bangladesh', assertText: 'Bangladesh' },
      { path: '/admin/ident-keys', assertText: 'Identification' },
      { path: '/admin/media', assertText: 'Media' },
      { path: '/admin/scientific-names', assertText: 'Scientific Names' },
      { path: '/admin/reviews', assertText: 'Review Queue' },
      { path: '/admin/references', assertText: 'Literature' },
      { path: '/admin/audit-logs', assertText: 'Audit' },
      { path: '/admin/batch-import', assertText: 'Batch' },
      { path: '/admin/import-batches', assertText: 'Batches' },
      { path: '/admin/conflicts', assertText: 'Conflict' },
      { path: '/admin/data-health', assertText: 'Health' },
      { path: '/admin/users', assertText: 'User' },
      { path: '/admin/settings', assertText: 'Settings' },
    ];

    for (const r of routesToTest) {
      await navigate(`http://localhost:2021${r.path}`);
      const pageText = await evaluate('document.body.innerText');
      const matches = pageText && pageText.toLowerCase().includes(r.assertText.toLowerCase());
      assert(matches, `Route ${r.path} renders expected view containing "${r.assertText}"`);
    }

    await takeScreenshot('admin_1920_species.png');

    // --- TEST 6: Data Health Scanner UI Execution ---
    console.log('\n--- 6. Testing Data Health Scanner Page ---');
    await navigate('http://localhost:2021/admin/data-health');
    let hasHealthScore = false;
    for (let i = 0; i < 15; i++) {
      await new Promise(r => setTimeout(r, 200));
      const res = await evaluate(`(() => {
        const text = document.body.innerText;
        return text.includes('Health Score') || text.includes('স্বাস্থ্য স্কোর') || text.includes('Optimal') || text.includes('চমৎকার');
      })()`);
      if (res) {
        hasHealthScore = true;
        break;
      }
    }
    assert(hasHealthScore, 'Data Health page displays System Health Score card');

    const totalChecksVisible = await evaluate(`(() => {
      const text = document.body.innerText;
      return text.includes('Diagnostic Suites') || text.includes('ডায়াগনস্টিক') || text.includes('validation engines');
    })()`);
    assert(totalChecksVisible, 'Data Health displays diagnostic suites metric');

    await takeScreenshot('admin_375_data_health.png');

    // --- TEST 7: Language Switcher Flow ---
    console.log('\n--- 7. Testing Language Switcher (EN <-> বাংলা) ---');
    await evaluate(`(() => {
      const langBtn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('বাংলা') || b.innerText.includes('English'));
      if (langBtn) langBtn.click();
    })()`);
    await new Promise(r => setTimeout(r, 600));

    const bengaliTextPresent = await evaluate(`(() => {
      const txt = document.body.innerText;
      return txt.includes('ডাটা') ||
             txt.includes('স্বাস্থ্য') ||
             txt.includes('সিস্টেম') ||
             txt.includes('ড্যাশবোর্ড') ||
             txt.includes('English');
    })()`);
    assert(bengaliTextPresent, 'Language switcher switches Admin Shell to Bengali localization');

    await takeScreenshot('admin_360_bengali.png');

    // Switch back to English
    await evaluate(`(() => {
      const langBtn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('English'));
      if (langBtn) langBtn.click();
    })()`);
    await new Promise(r => setTimeout(r, 400));

    // --- TEST 8: RBAC Negative Testing (Direct URL & Privilege Checks) ---
    console.log('\n--- 8. Testing RBAC Role Enforcement & Negative Boundaries ---');

    // Negative Test A: Switch role to 'data_manager'
    await navigate('http://localhost:2021/admin');
    await evaluate(`(() => {
      const roleSel = document.querySelector('#dev-qa-role-switcher');
      if (roleSel) {
        const setter = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, 'value').set;
        setter.call(roleSel, 'data_manager');
        roleSel.dispatchEvent(new Event('change', { bubbles: true }));
      }
    })()`);
    await new Promise(r => setTimeout(r, 500));

    // Attempt direct URL access to /admin/users (Requires super_admin)
    await navigate('http://localhost:2021/admin/users');
    const dataManagerUsersUrl = await evaluate('window.location.pathname');
    assert(dataManagerUsersUrl === '/access-denied', `data_manager cannot access /admin/users -> redirects to /access-denied (actual: ${dataManagerUsersUrl})`);

    // Attempt direct URL access to /admin/settings (Requires super_admin)
    await navigate('http://localhost:2021/admin/settings');
    const dataManagerSettingsUrl = await evaluate('window.location.pathname');
    assert(dataManagerSettingsUrl === '/access-denied', `data_manager cannot access /admin/settings -> redirects to /access-denied (actual: ${dataManagerSettingsUrl})`);

    // Negative Test B: Switch role to 'admin'
    // First navigate to /admin to access dev role switcher
    await navigate('http://localhost:2021/admin');
    await evaluate(`(() => {
      const roleSel = document.querySelector('#dev-qa-role-switcher');
      if (roleSel) {
        const setter = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, 'value').set;
        setter.call(roleSel, 'admin');
        roleSel.dispatchEvent(new Event('change', { bubbles: true }));
      }
    })()`);
    await new Promise(r => setTimeout(r, 500));

    // Admin attempts direct access to /admin/users (super_admin only)
    await navigate('http://localhost:2021/admin/users');
    const adminUsersUrl = await evaluate('window.location.pathname');
    assert(adminUsersUrl === '/access-denied', `admin cannot access /admin/users -> redirects to /access-denied (actual: ${adminUsersUrl})`);

    // Admin attempts direct access to /admin/settings (super_admin only)
    await navigate('http://localhost:2021/admin/settings');
    const adminSettingsUrl = await evaluate('window.location.pathname');
    assert(adminSettingsUrl === '/access-denied', `admin cannot access /admin/settings -> redirects to /access-denied (actual: ${adminSettingsUrl})`);

    // Negative Test C: Logout -> unauthenticated -> direct /admin attempt
    console.log('\n--- 9. Testing Logout & Final Public Containment ---');
    await navigate('http://localhost:2021/admin');
    await evaluate(`(() => {
      const logoutBtn = document.querySelector('#admin-logout-btn');
      if (logoutBtn) logoutBtn.click();
    })()`);
    await new Promise(r => setTimeout(r, 800));

    await navigate('http://localhost:2021/admin');
    const loggedOutAdminUrl = await evaluate('window.location.pathname');
    assert(loggedOutAdminUrl === '/login', `Logged out user accessing /admin is redirected to /login (actual: ${loggedOutAdminUrl})`);

    // Public website check: Admin button hidden
    await navigate('http://localhost:2021/');
    const publicHeaderAdmin = await evaluate(`(() => {
      const links = Array.from(document.querySelectorAll('a, button'));
      return links.some(l => l.innerText && l.innerText.toLowerCase().includes('admin portal'));
    })()`);
    assert(!publicHeaderAdmin, 'Public visitor sees ZERO "Admin Portal" buttons in public website');

    console.log('\n================================================================');
    console.log(`TOTAL BROWSER & CDP TESTS: ${passed} passed, ${failed} failed`);
    console.log('================================================================\n');

  } catch (err) {
    console.error('Fatal Browser Test Error:', err);
    failed++;
  } finally {
    chrome.kill();
    try {
      await new Promise(r => setTimeout(r, 500));
      fs.rmSync(userDataDir, { recursive: true, force: true });
    } catch (e) {}

    if (failed > 0) {
      process.exit(1);
    } else {
      process.exit(0);
    }
  }
}

run();
