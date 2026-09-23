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
    console.log('BIOTAELITE 2.0: MASTER-UI-POLISH-MOBILE-NAV-FOOTER-02 VERIFICATION');
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

      // 2. Check Raw Translation Keys & Admin Portal Hidden in public view
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

      // 3. Navigation Hamburger & Container Behavior
      if (vp.mobile) {
        // Check hamburger button exists and is visible
        const hamburgerEval = await send('Runtime.evaluate', {
          expression: `(() => {
            const btn = document.querySelector('.btn-hamburger');
            if (!btn) return { exists: false };
            const r = btn.getBoundingClientRect();
            const cs = window.getComputedStyle(btn);
            const nav = document.querySelector('.nav-container');
            const navCs = nav ? window.getComputedStyle(nav) : null;
            return {
              exists: true,
              visible: cs.display !== 'none' && r.width >= 40 && r.height >= 40,
              width: r.width,
              height: r.height,
              ariaExpanded: btn.getAttribute('aria-expanded'),
              navDisplayClosed: navCs ? navCs.display : null
            };
          })()`,
          returnByValue: true
        });
        const hb = hamburgerEval.result?.value;
        assert(hb?.exists && hb?.visible, `${vp.name}: Hamburger button visible with touch target >= 40px (${hb?.width}x${hb?.height}px)`);
        assert(hb?.ariaExpanded === 'false', `${vp.name}: Hamburger aria-expanded is initially 'false'`);
        assert(hb?.navDisplayClosed === 'none', `${vp.name}: Mobile nav panel is initially hidden (display: none)`);

        // Click hamburger to OPEN
        await send('Runtime.evaluate', {
          expression: `(() => {
            const btn = document.querySelector('.btn-hamburger');
            if (btn) btn.click();
          })()`
        });
        await new Promise(r => setTimeout(r, 400));

        const navOpenEval = await send('Runtime.evaluate', {
          expression: `(() => {
            const btn = document.querySelector('.btn-hamburger');
            const nav = document.querySelector('.nav-container');
            const navCs = nav ? window.getComputedStyle(nav) : null;
            const primaryLinks = Array.from(document.querySelectorAll('.nav-section-primary .nav-link'));
            const rects = primaryLinks.map(el => {
              const r = el.getBoundingClientRect();
              return { top: r.top, height: r.height };
            });
            let isSingleColumn = true;
            for (let i = 1; i < rects.length; i++) {
              if (rects[i].top <= rects[i - 1].top) {
                isSingleColumn = false;
                break;
              }
            }
            const minHeight = Math.min(...rects.map(r => r.height));
            return {
              ariaExpanded: btn ? btn.getAttribute('aria-expanded') : null,
              hasMobileOpenClass: nav ? nav.classList.contains('mobile-open') : false,
              navDisplayOpen: navCs ? navCs.display : null,
              primaryCount: primaryLinks.length,
              isSingleColumn,
              minTouchHeight: minHeight
            };
          })()`,
          returnByValue: true
        });
        const no = navOpenEval.result?.value;
        assert(no?.ariaExpanded === 'true', `${vp.name}: Hamburger aria-expanded toggled to 'true'`);
        assert(no?.hasMobileOpenClass && no?.navDisplayOpen !== 'none', `${vp.name}: Mobile nav panel opened with .mobile-open class`);
        assert(no?.primaryCount === 5, `${vp.name}: All 5 primary portals accessible when menu open`);
        assert(no?.isSingleColumn, `${vp.name}: Navigation links formatted in single column`);
        assert(no?.minTouchHeight >= 38, `${vp.name}: Navigation links have touch target >= 38px (${no?.minTouchHeight}px)`);

        // Press Escape to CLOSE
        await send('Input.dispatchKeyEvent', { type: 'rawKeyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
        await send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
        await new Promise(r => setTimeout(r, 400));

        const navClosedEval = await send('Runtime.evaluate', {
          expression: `(() => {
            const btn = document.querySelector('.btn-hamburger');
            const nav = document.querySelector('.nav-container');
            const navCs = nav ? window.getComputedStyle(nav) : null;
            return {
              ariaExpanded: btn ? btn.getAttribute('aria-expanded') : null,
              hasMobileOpenClass: nav ? nav.classList.contains('mobile-open') : false,
              navDisplayClosed: navCs ? navCs.display : null
            };
          })()`,
          returnByValue: true
        });
        const nc = navClosedEval.result?.value;
        assert(nc?.ariaExpanded === 'false' && nc?.navDisplayClosed === 'none', `${vp.name}: Escape key closes mobile navigation panel`);

      } else {
        // Desktop check: hamburger must be hidden, navigation always visible horizontally
        const desktopNavEval = await send('Runtime.evaluate', {
          expression: `(() => {
            const btn = document.querySelector('.btn-hamburger');
            const btnCs = btn ? window.getComputedStyle(btn) : null;
            const nav = document.querySelector('.nav-container');
            const navCs = nav ? window.getComputedStyle(nav) : null;
            const allLinks = Array.from(document.querySelectorAll('.nav-links-scroll .nav-link, .nav-links-scroll .nav-dropdown-btn'));
            const rects = allLinks.map(el => el.getBoundingClientRect());
            const top0 = rects[0]?.top;
            const allSameTop = rects.every(r => Math.abs(r.top - top0) < 5);
            return {
              btnHidden: !btn || btnCs.display === 'none',
              navVisible: navCs && navCs.display !== 'none',
              linksCount: allLinks.length,
              allSameTop
            };
          })()`,
          returnByValue: true
        });
        const dnv = desktopNavEval.result?.value;
        assert(dnv?.btnHidden, `${vp.name}: Hamburger button is STRICTLY HIDDEN on desktop (display: none)`);
        assert(dnv?.navVisible, `${vp.name}: Desktop navigation bar is ALWAYS visible`);
        assert(dnv?.allSameTop, `${vp.name}: Desktop navigation maintains unified single horizontal bar`);
      }

      // 4. Footer Accordion / Desktop Grid Behavior
      if (vp.mobile) {
        // Mobile Footer: Accordions collapsed by default
        const footerMobileEval = await send('Runtime.evaluate', {
          expression: `(() => {
            const triggers = Array.from(document.querySelectorAll('.footer-accordion-trigger'));
            const bodies = Array.from(document.querySelectorAll('.footer-accordion-body'));
            const chevrons = Array.from(document.querySelectorAll('.footer-accordion-chevron'));
            const bodiesHidden = bodies.every(b => window.getComputedStyle(b).display === 'none');
            const minTriggerHeight = Math.min(...triggers.map(t => t.getBoundingClientRect().height));
            return {
              triggerCount: triggers.length,
              chevronCount: chevrons.length,
              bodiesHidden,
              minTriggerHeight
            };
          })()`,
          returnByValue: true
        });
        const fm = footerMobileEval.result?.value;
        assert(fm?.triggerCount === 3, `${vp.name}: 3 accordion triggers in mobile footer`);
        assert(fm?.bodiesHidden, `${vp.name}: All accordion bodies are COLLAPSED by default on mobile`);
        assert(fm?.minTriggerHeight >= 40, `${vp.name}: Accordion trigger touch targets >= 40px (${fm?.minTriggerHeight}px)`);

        // Click Section 1 (Portals) to EXPAND
        await send('Runtime.evaluate', {
          expression: `(() => {
            const trigger = document.querySelectorAll('.footer-accordion-trigger')[0];
            if (trigger) trigger.click();
          })()`
        });
        await new Promise(r => setTimeout(r, 400));

        const portalsOpenEval = await send('Runtime.evaluate', {
          expression: `(() => {
            const bodies = Array.from(document.querySelectorAll('.footer-accordion-body'));
            const b1 = window.getComputedStyle(bodies[0]).display;
            const b2 = window.getComputedStyle(bodies[1]).display;
            const b3 = window.getComputedStyle(bodies[2]).display;
            return {
              portalsOpen: b1 !== 'none',
              toolsClosed: b2 === 'none',
              authoritiesClosed: b3 === 'none'
            };
          })()`,
          returnByValue: true
        });
        const po = portalsOpenEval.result?.value;
        assert(po?.portalsOpen && po?.toolsClosed && po?.authoritiesClosed, `${vp.name}: Portals accordion expands while others remain collapsed`);

        // Click Section 2 (Systematics & Tools) to EXPAND (should close Portals)
        await send('Runtime.evaluate', {
          expression: `(() => {
            const trigger = document.querySelectorAll('.footer-accordion-trigger')[1];
            if (trigger) trigger.click();
          })()`
        });
        await new Promise(r => setTimeout(r, 400));

        const toolsOpenEval = await send('Runtime.evaluate', {
          expression: `(() => {
            const bodies = Array.from(document.querySelectorAll('.footer-accordion-body'));
            const b1 = window.getComputedStyle(bodies[0]).display;
            const b2 = window.getComputedStyle(bodies[1]).display;
            const b3 = window.getComputedStyle(bodies[2]).display;
            return {
              portalsClosed: b1 === 'none',
              toolsOpen: b2 !== 'none',
              authoritiesClosed: b3 === 'none'
            };
          })()`,
          returnByValue: true
        });
        const to = toolsOpenEval.result?.value;
        assert(to?.toolsOpen && to?.portalsClosed && to?.authoritiesClosed, `${vp.name}: Opening Tools automatically closes Portals (single open section rule)`);

        // Click Section 2 again to COLLAPSE
        await send('Runtime.evaluate', {
          expression: `(() => {
            const trigger = document.querySelectorAll('.footer-accordion-trigger')[1];
            if (trigger) trigger.click();
          })()`
        });
        await new Promise(r => setTimeout(r, 300));

        const allClosedEval = await send('Runtime.evaluate', {
          expression: `(() => {
            const bodies = Array.from(document.querySelectorAll('.footer-accordion-body'));
            return bodies.every(b => window.getComputedStyle(b).display === 'none');
          })()`,
          returnByValue: true
        });
        assert(allClosedEval.result?.value, `${vp.name}: Clicking open section again collapses it (all closed)`);

      } else {
        // Desktop Footer: Accordion bodies must ALL be visible, chevrons hidden, pointer-events none
        const footerDesktopEval = await send('Runtime.evaluate', {
          expression: `(() => {
            const triggers = Array.from(document.querySelectorAll('.footer-accordion-trigger'));
            const bodies = Array.from(document.querySelectorAll('.footer-accordion-body'));
            const chevrons = Array.from(document.querySelectorAll('.footer-accordion-chevron'));
            const allBodiesVisible = bodies.every(b => window.getComputedStyle(b).display !== 'none');
            const chevronsHidden = chevrons.every(c => window.getComputedStyle(c).display === 'none');
            const triggersDisabled = triggers.every(t => window.getComputedStyle(t).pointerEvents === 'none');
            return {
              allBodiesVisible,
              chevronsHidden,
              triggersDisabled
            };
          })()`,
          returnByValue: true
        });
        const fd = footerDesktopEval.result?.value;
        assert(fd?.allBodiesVisible, `${vp.name}: Desktop footer columns are ALL statically displayed side-by-side`);
        assert(fd?.chevronsHidden, `${vp.name}: Desktop footer accordion chevrons are HIDDEN (display: none)`);
        assert(fd?.triggersDisabled, `${vp.name}: Desktop footer headings have pointer-events: none (static layout preserved)`);
      }

      // Check Footer content constraint & Authoritative Sources
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
          hasAuthoritiesBn: bodyText.includes('স্বীকৃত তথ্যসূত্র'),
          hasPortalsBn: bodyText.includes('পোর্টালসমূহ')
        };
      })()`,
      returnByValue: true
    });
    const bnv = bnEval.result?.value;
    assert(bnv?.hasPortalsBn, 'Bengali: পোর্টালসমূহ visible in accordion header');
    assert(bnv?.hasAuthoritiesBn, 'Bengali: স্বীকৃত তথ্যসূত্র visible in accordion header');

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
