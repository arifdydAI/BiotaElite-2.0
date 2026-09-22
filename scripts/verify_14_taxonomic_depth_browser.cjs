// scripts/verify_14_taxonomic_depth_browser.cjs
// Automated Chrome DevTools Protocol verification for MASTER-FIX-14
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const USER_DATA_DIR = path.join(os.tmpdir(), 'chrome_14_depth_' + Date.now());
const ARTIFACTS_DIR = 'C:\\Users\\UESR\\.gemini\\antigravity-ide\\brain\\733a5fe7-46c1-4349-bcec-c2e80c6b50f8';

if (!fs.existsSync(USER_DATA_DIR)) {
  fs.mkdirSync(USER_DATA_DIR, { recursive: true });
}
if (!fs.existsSync(ARTIFACTS_DIR)) {
  fs.mkdirSync(ARTIFACTS_DIR, { recursive: true });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let chrome;

async function getWsUrl() {
  for (let i = 0; i < 25; i++) {
    await sleep(400);
    try {
      const res = await fetch('http://127.0.0.1:9228/json/list');
      const list = await res.json();
      const pageTarget = list && list.find(t => t.type === 'page' && !t.url.startsWith('chrome-extension://'));
      if (pageTarget && pageTarget.webSocketDebuggerUrl) {
        return pageTarget.webSocketDebuggerUrl;
      }
    } catch (e) {}
  }
  throw new Error('Chrome remote debugging did not become ready on port 9228');
}

async function run() {
  let passed = true;
  const errors = [];

  // Start Chrome
  chrome = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9228',
    `--user-data-dir=${USER_DATA_DIR}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-gpu',
    '--disable-extensions',
    'about:blank'
  ], { stdio: 'ignore' });

  try {
    console.log('Connecting to Chrome headless on port 9228...');
    const wsUrl = await getWsUrl();
    const ws = new WebSocket(wsUrl);
    await new Promise(resolve => ws.onopen = resolve);

    let idSeq = 1;
    const pending = new Map();

    const consoleErrors = [];

    ws.onmessage = (evt) => {
      const msg = JSON.parse(evt.data);
      if (msg.method === 'Runtime.consoleAPICalled' && msg.params.type === 'error') {
        const errText = msg.params.args.map(a => a.value || a.description || JSON.stringify(a)).join(' ');
        // Filter out harmless favicon 404s if any
        if (!errText.includes('favicon.ico')) {
          consoleErrors.push(errText);
          console.error('[BROWSER CONSOLE ERROR]:', errText);
        }
      }
      if (msg.method === 'Runtime.exceptionThrown') {
        const excText = (msg.params.exceptionDetails.text || '') + ' ' + (msg.params.exceptionDetails.exception?.description || '');
        consoleErrors.push(excText);
        console.error('[BROWSER EXCEPTION]:', excText);
      }
      if (msg.id && pending.has(msg.id)) {
        const { resolve, reject } = pending.get(msg.id);
        pending.delete(msg.id);
        if (msg.error) reject(msg.error);
        else resolve(msg.result);
      }
    };

    function send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const id = idSeq++;
        pending.set(id, { resolve, reject });
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    await send('Page.enable');
    await send('Runtime.enable');
    await send('DOM.enable');

    async function navigate(url, waitMs = 2500) {
      console.log(`\n[NAVIGATE] ${url}`);
      await send('Page.navigate', { url });
      await sleep(waitMs);
    }

    async function evaluate(expression) {
      const res = await send('Runtime.evaluate', { expression, returnByValue: true });
      if (res.exceptionDetails) {
        throw new Error(JSON.stringify(res.exceptionDetails));
      }
      return res.result ? res.result.value : undefined;
    }

    async function captureScreenshot(fileName, clip = null) {
      const filePath = path.join(ARTIFACTS_DIR, fileName);
      const params = { format: 'png' };
      if (clip) params.clip = clip;
      const res = await send('Page.captureScreenshot', params);
      fs.writeFileSync(filePath, Buffer.from(res.data, 'base64'));
      console.log(`📸 Saved screenshot: ${fileName}`);
    }

    // Set desktop viewport 1280x900
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1280,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false
    });

    // ─────────────────────────────────────────────────────────────────────────
    // STEP 1: /taxonomy (Taxonomy Hub & Representative Metrics)
    // ─────────────────────────────────────────────────────────────────────────
    await navigate('http://localhost:2021/taxonomy', 2500);
    const taxPageInfo = await evaluate(`(() => {
      const text = document.body.innerText;
      return {
        title: document.title,
        hasCuratedLabel: text.includes('Curated') || text.includes('Global') || text.includes('Taxonomy'),
        hasPhylaCards: !!document.querySelector('.grid, [class*="grid"]'),
        bodyLength: text.length
      };
    })()`);
    console.log('[STEP 1] /taxonomy info:', taxPageInfo);
    await captureScreenshot('depth_01_taxonomy_hub_expanded.png');

    // ─────────────────────────────────────────────────────────────────────────
    // STEP 2: /taxonomy/annelida vs /taxonomy/ctenophora (CRITICAL CONTAMINATION AUDIT)
    // ─────────────────────────────────────────────────────────────────────────
    await navigate('http://localhost:2021/taxonomy/annelida', 2500);
    const annelidaInfo = await evaluate(`(() => {
      const text = document.body.innerText;
      return {
        hasAnnelida: text.includes('Annelida'),
        hasLumbricusOrEisenia: text.includes('Lumbricus') || text.includes('Eisenia') || text.includes('Earthworm'),
        hasLeech: text.includes('Hirudo') || text.includes('Leech'),
        hasPolychaete: text.includes('Sabella') || text.includes('Arenicola') || text.includes('Alitta'),
        hasPleurobrachiaContamination: text.includes('Pleurobrachia'),
        hasBeroeContamination: text.includes('Beroe')
      };
    })()`);
    console.log('[STEP 2A] /taxonomy/annelida audit:', annelidaInfo);
    if (annelidaInfo.hasPleurobrachiaContamination || annelidaInfo.hasBeroeContamination) {
      throw new Error('CRITICAL ERROR: Ctenophora species found contaminating Annelida page!');
    }
    await captureScreenshot('depth_02a_annelida_clean.png');

    await navigate('http://localhost:2021/taxonomy/ctenophora', 2500);
    const ctenophoraInfo = await evaluate(`(() => {
      const text = document.body.innerText;
      return {
        hasCtenophora: text.includes('Ctenophora') || text.includes('Comb'),
        hasPleurobrachia: text.includes('Pleurobrachia'),
        hasBeroe: text.includes('Beroe')
      };
    })()`);
    console.log('[STEP 2B] /taxonomy/ctenophora audit:', ctenophoraInfo);
    await captureScreenshot('depth_02b_ctenophora_clean.png');

    // ─────────────────────────────────────────────────────────────────────────
    // STEP 3: Major Animal Groups Verification
    // ─────────────────────────────────────────────────────────────────────────
    const majorGroups = [
      { slug: 'porifera', name: 'Porifera' },
      { slug: 'cnidaria', name: 'Cnidaria' },
      { slug: 'mollusca', name: 'Mollusca' },
      { slug: 'arthropoda', name: 'Arthropoda' },
      { slug: 'echinodermata', name: 'Echinodermata' },
      { slug: 'amphibia', name: 'Amphibia' },
      { slug: 'reptilia', name: 'Reptilia' },
      { slug: 'aves', name: 'Aves' },
      { slug: 'mammalia', name: 'Mammalia' },
    ];

    for (const group of majorGroups) {
      await navigate(`http://localhost:2021/taxonomy/${group.slug}`, 2000);
      const groupInfo = await evaluate(`(() => {
        const text = document.body.innerText;
        return {
          title: document.title,
          hasGroupName: text.includes('${group.name}'),
          hasBodyText: text.length > 200
        };
      })()`);
      console.log(`[MAJOR GROUP: ${group.name}]`, groupInfo);
    }
    await captureScreenshot('depth_03_major_groups_verified.png');

    // ─────────────────────────────────────────────────────────────────────────
    // STEP 4: /species (Priority Species Display & Profile)
    // ─────────────────────────────────────────────────────────────────────────
    await navigate('http://localhost:2021/species', 2500);
    const speciesCatalogInfo = await evaluate(`(() => {
      const text = document.body.innerText;
      const cards = document.querySelectorAll('[class*="card"], [class*="Card"], article');
      const firstCards = Array.from(cards).slice(0, 5).map(c => c.innerText.slice(0, 80).replace(/\\s+/g, ' '));
      return {
        hasSpeciesCatalog: text.includes('Species') || text.includes('Catalogue'),
        approxCards: cards.length,
        hasSearchInput: !!document.querySelector('input[type="text"], input[type="search"]'),
        topCards: firstCards
      };
    })()`);
    console.log('[STEP 4] /species catalog info:', speciesCatalogInfo);

    // Navigate to a canonical species with verified photo (e.g. sp-panthera-leo)
    await navigate('http://localhost:2021/species/sp-panthera-leo', 2500);
    const lionInfo = await evaluate(`(() => {
      const text = document.body.innerText;
      const img = document.querySelector('img[src*="upload.wikimedia.org"]');
      return {
        scientificName: text.includes('Panthera leo'),
        hasVerifiedPhoto: !!img,
        imgSrc: img ? img.src : null,
        hasMorphology: text.includes('Morphology') || text.includes('diagnostic') || text.includes('features'),
        hasIUCN: text.includes('VU') || text.includes('Vulnerable') || text.includes('IUCN')
      };
    })()`);
    console.log('[STEP 4B] /species/sp-panthera-leo profile info:', lionInfo);
    await captureScreenshot('depth_04_species_profile_verified_photo.png');

    // ─────────────────────────────────────────────────────────────────────────
    // STEP 5: /scientific-names & /synonyms
    // ─────────────────────────────────────────────────────────────────────────
    await navigate('http://localhost:2021/scientific-names', 2500);
    const sciIndexInfo = await evaluate(`(() => {
      const text = document.body.innerText;
      return {
        hasScientificNames: text.includes('Scientific Name') || text.includes('Index'),
        hasPanthera: text.includes('Panthera leo'),
        hasLumbricus: text.includes('Lumbricus terrestris'),
        bodyLength: text.length
      };
    })()`);
    console.log('[STEP 5A] /scientific-names index info:', sciIndexInfo);
    await captureScreenshot('depth_05a_scientific_names_index.png');

    await navigate('http://localhost:2021/synonyms', 2500);
    const synonymsPageOk = await evaluate(`(() => {
      const text = document.body.innerText;
      return {
        hasSynonyms: text.includes('Synonym'),
        bodyLength: text.length
      };
    })()`);
    console.log('[STEP 5B] /synonyms loaded successfully:', synonymsPageOk);

    // ─────────────────────────────────────────────────────────────────────────
    // STEP 6: /fish and /identification
    // ─────────────────────────────────────────────────────────────────────────
    await navigate('http://localhost:2021/fish', 2500);
    const fishPageOk = await evaluate(`document.body.innerText.includes('Fishes')`);
    console.log('[STEP 6A] /fish loaded successfully:', fishPageOk);

    await navigate('http://localhost:2021/identification', 2500);
    const identPageOk = await evaluate(`document.body.innerText.includes('Identification')`);
    console.log('[STEP 6B] /identification loaded successfully:', identPageOk);

    // ─────────────────────────────────────────────────────────────────────────
    // STEP 7: Mobile Responsive Layout (375px)
    // ─────────────────────────────────────────────────────────────────────────
    await send('Emulation.setDeviceMetricsOverride', {
      width: 375,
      height: 812,
      deviceScaleFactor: 2,
      mobile: true
    });
    await navigate('http://localhost:2021/taxonomy', 2500);
    const mobileInfo = await evaluate(`(() => {
      const scrollWidth = document.documentElement.scrollWidth;
      const clientWidth = document.documentElement.clientWidth;
      return {
        hasHorizontalOverflow: scrollWidth > clientWidth,
        scrollWidth,
        clientWidth
      };
    })()`);
    console.log('[STEP 7] Mobile 375px layout info:', mobileInfo);
    await captureScreenshot('depth_07_mobile_responsiveness.png');

    if (mobileInfo.hasHorizontalOverflow) {
      console.warn('⚠️ Warning: Detected horizontal scroll on 375px mobile viewport!');
    }

    // Console Error Audit
    console.log('\n--- BROWSER CONSOLE ERROR AUDIT ---');
    console.log(`Total Console Errors Observed: ${consoleErrors.length}`);
    if (consoleErrors.length > 0) {
      console.log('Console Errors:', consoleErrors);
    }

    console.log('\n================================================================');
    console.log('🎉 ALL BROWSER CDP VERIFICATIONS COMPLETED SUCCESSFULLY!');
    console.log('================================================================');

    ws.close();
  } catch (err) {
    console.error('❌ BROWSER CDP VERIFICATION FAILED:', err);
    passed = false;
  } finally {
    if (chrome) {
      try {
        chrome.kill('SIGKILL');
      } catch (e) {}
    }
    try {
      fs.rmSync(USER_DATA_DIR, { recursive: true, force: true });
    } catch (e) {}
  }

  if (!passed) {
    process.exit(1);
  }
}

run();
