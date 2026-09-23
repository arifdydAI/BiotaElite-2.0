const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = path.join(os.tmpdir(), 'chrome_responsive_verify_' + Date.now());
fs.mkdirSync(userDataDir, { recursive: true });

const artifactDir = path.resolve('C:/Users/UESR/.gemini/antigravity-ide/brain/dde4acc2-f190-4239-bebe-005710bec4e6');

const chrome = spawn(CHROME, [
  '--headless=new',
  '--remote-debugging-port=9244',
  '--user-data-dir=' + userDataDir,
  '--no-first-run',
  '--disable-gpu',
  'about:blank'
], { stdio: 'ignore' });

async function getWsUrl() {
  for (let i = 0; i < 30; i++) {
    await new Promise(r => setTimeout(r, 300));
    try {
      const res = await fetch('http://127.0.0.1:9244/json/list');
      const list = await res.json();
      const p = list.find(t => t.type === 'page' && !t.url.startsWith('chrome-extension://'));
      if (p && p.webSocketDebuggerUrl) return p.webSocketDebuggerUrl;
    } catch (e) {}
  }
  throw new Error('Chrome remote debugging not ready on port 9244');
}

async function run() {
  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`  ✓ PASSED: ${message}`);
      passed++;
    } else {
      console.error(`  ✗ FAILED: ${message}`);
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
    console.log('BIOTAELITE 2.0: MOBILE & DESKTOP RESPONSIVE VERIFICATION');
    console.log('================================================================\n');

    const viewports = [
      { name: 'Mobile 360px', width: 360, height: 740, mobile: true },
      { name: 'Mobile 375px', width: 375, height: 667, mobile: true },
      { name: 'Mobile 390px', width: 390, height: 844, mobile: true },
      { name: 'Desktop 1024px', width: 1024, height: 768, mobile: false },
      { name: 'Desktop 1366px', width: 1366, height: 768, mobile: false },
      { name: 'Desktop 1920px', width: 1920, height: 1080, mobile: false }
    ];

    for (const vp of viewports) {
      console.log(`\n--- Testing ${vp.name} (${vp.width}x${vp.height}) ---`);
      await send('Emulation.setDeviceMetricsOverride', {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 2,
        mobile: vp.mobile
      });

      await send('Page.navigate', { url: 'http://localhost:2021/' });
      await new Promise(r => setTimeout(r, 1500));

      // 1. Check Horizontal Overflow
      const overflowEval = await send('Runtime.evaluate', {
        expression: `(() => {
          const docEl = document.documentElement;
          const body = document.body;
          const scrollWidth = Math.max(docEl.scrollWidth, body.scrollWidth);
          const clientWidth = docEl.clientWidth;
          return {
            scrollWidth,
            clientWidth,
            hasOverflow: scrollWidth > clientWidth + 1
          };
        })()`,
        returnByValue: true
      });
      const ov = overflowEval.result?.value;
      assert(!ov?.hasOverflow, `${vp.name}: No horizontal overflow (scrollWidth=${ov?.scrollWidth}, clientWidth=${ov?.clientWidth})`);

      // 2. Check Raw Translation Keys in entire page
      const rawKeyEval = await send('Runtime.evaluate', {
        expression: `(() => {
          const bodyText = document.body.innerText;
          return {
            hasRawAuthorities: bodyText.includes('footer.authorities'),
            hasRawRights: bodyText.includes('footer.rights'),
            hasAdminPortal: bodyText.includes('Admin Portal') || bodyText.includes('প্রশাসন পোর্টাল')
          };
        })()`,
        returnByValue: true
      });
      const rk = rawKeyEval.result?.value;
      assert(!rk?.hasRawAuthorities, `${vp.name}: Raw 'footer.authorities' is NOT displayed`);
      assert(!rk?.hasRawRights, `${vp.name}: Raw 'footer.rights' is NOT displayed`);
      assert(!rk?.hasAdminPortal, `${vp.name}: 'Admin Portal' is HIDDEN from unauthenticated public visitor`);

      // 3. Mobile-specific navigation checks
      if (vp.mobile) {
        const navEval = await send('Runtime.evaluate', {
          expression: `(() => {
            const primaryLinks = Array.from(document.querySelectorAll('.nav-section-primary .nav-link'));
            const rects = primaryLinks.map(el => {
              const r = el.getBoundingClientRect();
              return { text: el.innerText.trim(), top: r.top, left: r.left, width: r.width, height: r.height };
            });

            // Check if tops are strictly increasing (single column)
            let isSingleColumn = true;
            for (let i = 1; i < rects.length; i++) {
              if (rects[i].top <= rects[i - 1].top) {
                isSingleColumn = false;
                break;
              }
            }

            // Check touch targets (height >= 38px)
            const minHeight = Math.min(...rects.map(r => r.height));

            // Check accordion buttons
            const accordions = Array.from(document.querySelectorAll('.nav-section-grouped .nav-dropdown-btn')).map(el => {
              const r = el.getBoundingClientRect();
              const contentSpan = el.querySelector('.nav-dropdown-btn-content');
              const cr = contentSpan ? contentSpan.getBoundingClientRect() : null;
              return { text: el.innerText.trim(), top: r.top, width: r.width, height: r.height, contentLeft: cr?.left };
            });

            // Check about link
            const aboutLink = document.querySelector('.nav-section-about .nav-link');
            const aboutRect = aboutLink ? aboutLink.getBoundingClientRect() : null;

            return {
              primaryCount: rects.length,
              isSingleColumn,
              minHeight,
              accordionsCount: accordions.length,
              aboutTop: aboutRect?.top,
              lastAccordionTop: accordions[accordions.length - 1]?.top
            };
          })()`,
          returnByValue: true
        });
        const nv = navEval.result?.value;
        assert(nv?.primaryCount === 5, `${vp.name}: Found 5 primary portal links`);
        assert(nv?.isSingleColumn, `${vp.name}: Primary portals arranged in a clean single-column layout`);
        assert(nv?.minHeight >= 38, `${vp.name}: Touch targets are at least 38px high (actual: ${nv?.minHeight}px)`);
        assert(nv?.accordionsCount === 3, `${vp.name}: Found 3 accordion buttons in grouped section`);
        assert(nv?.aboutTop > nv?.lastAccordionTop, `${vp.name}: About & Methodology appears cleanly below accordions`);

        // Test accordion toggle
        await send('Runtime.evaluate', {
          expression: `(() => {
            const zoologyBtn = document.querySelector('.nav-section-grouped .nav-dropdown:first-child button');
            if (zoologyBtn) zoologyBtn.click();
          })()`
        });
        await new Promise(r => setTimeout(r, 400));

        const menuOpenEval = await send('Runtime.evaluate', {
          expression: `(() => {
            const menu = document.querySelector('.nav-section-grouped .nav-dropdown:first-child .nav-dropdown-menu');
            if (!menu) return { open: false };
            const items = Array.from(menu.querySelectorAll('.nav-dropdown-item'));
            return {
              open: true,
              itemCount: items.length
            };
          })()`,
          returnByValue: true
        });
        const mo = menuOpenEval.result?.value;
        assert(mo?.open && mo?.itemCount >= 6, `${vp.name}: Accordion opens inline with ${mo?.itemCount} items`);

        // Close accordion
        await send('Runtime.evaluate', {
          expression: `(() => {
            const zoologyBtn = document.querySelector('.nav-section-grouped .nav-dropdown:first-child button');
            if (zoologyBtn) zoologyBtn.click();
          })()`
        });
        await new Promise(r => setTimeout(r, 300));
      } else {
        // Desktop check: nav-links-scroll should be horizontal
        const desktopNavEval = await send('Runtime.evaluate', {
          expression: `(() => {
            const allLinks = Array.from(document.querySelectorAll('.nav-links-scroll .nav-link, .nav-links-scroll .nav-dropdown-btn'));
            const rects = allLinks.map(el => el.getBoundingClientRect());
            // Most links should share approximately the same top
            const top0 = rects[0]?.top;
            const allSameTop = rects.every(r => Math.abs(r.top - top0) < 5);
            return {
              count: rects.length,
              allSameTop
            };
          })()`,
          returnByValue: true
        });
        const dnv = desktopNavEval.result?.value;
        assert(dnv?.allSameTop, `${vp.name}: Desktop navigation maintains unified single horizontal bar`);
      }

      // Check Footer content constraint & height
      const footerEval = await send('Runtime.evaluate', {
        expression: `(() => {
          const footer = document.querySelector('.site-footer');
          const content = document.querySelector('.footer-content');
          const sources = Array.from(document.querySelectorAll('.site-footer a[href*="fishbase"], .site-footer a[href*="marinespecies"], .site-footer a[href*="iucnredlist"]'));
          const fRect = footer ? footer.getBoundingClientRect() : null;
          const cRect = content ? content.getBoundingClientRect() : null;
          return {
            footerHeight: fRect?.height,
            contentWidth: cRect?.width,
            sourcesCount: sources.length
          };
        })()`,
        returnByValue: true
      });
      const fe = footerEval.result?.value;
      assert(fe?.sourcesCount === 3, `${vp.name}: Authoritative sources (FishBase, WoRMS, IUCN) strictly preserved`);
      assert(fe?.contentWidth <= vp.width, `${vp.name}: Footer content constrained within viewport (contentWidth=${fe?.contentWidth} <= ${vp.width})`);

      // Capture screenshot for visual evidence
      const shot = await send('Page.captureScreenshot', {});
      const fileName = `screenshot_${vp.width}px.png`;
      const shotPath = path.join(artifactDir, fileName);
      fs.writeFileSync(shotPath, Buffer.from(shot.data, 'base64'));
      console.log(`  📸 Screenshot saved: ${fileName}`);
    }

    // Bilingual Check: switch to Bengali and verify labels
    console.log('\n--- Testing Bengali Localization on Mobile (375px) ---');
    await send('Emulation.setDeviceMetricsOverride', {
      width: 375,
      height: 667,
      deviceScaleFactor: 2,
      mobile: true
    });
    await send('Runtime.evaluate', {
      expression: `(() => {
        const bnBtn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('বাংলা'));
        if (bnBtn) bnBtn.click();
      })()`
    });
    await new Promise(r => setTimeout(r, 600));

    const bnEval = await send('Runtime.evaluate', {
      expression: `(() => {
        const bodyText = document.body.innerText;
        return {
          hasSpeciesBn: bodyText.includes('প্রজাতি ক্যাটালগ'),
          hasFishBn: bodyText.includes('মৎস্যসম্পদ'),
          hasMarineBn: bodyText.includes('সামুদ্রিক জীববৈচিত্র্য'),
          hasAuthoritiesBn: bodyText.includes('স্বীকৃত তথ্যসূত্র')
        };
      })()`,
      returnByValue: true
    });
    const bnv = bnEval.result?.value;
    assert(bnv?.hasSpeciesBn, 'Bengali: প্রজাতি ক্যাটালগ visible');
    assert(bnv?.hasFishBn, 'Bengali: মৎস্যসম্পদ visible');
    assert(bnv?.hasMarineBn, 'Bengali: সামুদ্রিক জীববৈচিত্র্য visible');
    assert(bnv?.hasAuthoritiesBn, 'Bengali: স্বীকৃত তথ্যসূত্র visible');

    const bnShot = await send('Page.captureScreenshot', {});
    const bnShotPath = path.join(artifactDir, 'screenshot_375px_bengali.png');
    fs.writeFileSync(bnShotPath, Buffer.from(bnShot.data, 'base64'));
    console.log(`  📸 Bengali Screenshot saved: screenshot_375px_bengali.png`);

    console.log('\n================================================================');
    console.log(`TOTAL RESPONSIVE TESTS: ${passed} passed, ${failed} failed`);
    console.log('================================================================\n');

    ws.close();
    if (failed > 0) process.exit(1);
  } catch (err) {
    console.error('Test Execution Error:', err);
    process.exit(1);
  } finally {
    chrome.kill();
    try { fs.rmSync(userDataDir, { recursive: true, force: true }); } catch (e) {}
  }
}

run();
