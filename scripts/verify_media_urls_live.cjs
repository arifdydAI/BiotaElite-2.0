// Verify Live Reachability of all 236 Verified Specimen Media URLs
// Gentle, sequential, rate-limited with exponential backoff
'use strict';
const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const root = path.resolve(__dirname, '..');
const code = fs.readFileSync(path.join(root, 'src/data/seedSpecies.ts'), 'utf8');
const js = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
const m = { exports: {} };
new Function('module', 'exports', 'require', js)(m, m.exports, require);
const species = m.exports.SEED_SPECIES;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const USER_AGENT = 'BiotaEliteBot/2.0 (https://biota-elite.org/; zoology-audit@biota-elite.org) NodeFetch/20.0';

async function checkUrlWithBackoff(url, timeoutMs = 12000, maxRetries = 3) {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Range': 'bytes=0-1024',
          'User-Agent': USER_AGENT,
          'Accept': 'image/*,*/*'
        },
        signal: controller.signal
      });
      clearTimeout(timer);

      // Success codes: 200 (OK), 206 (Partial Content)
      if (res.status === 200 || res.status === 206) {
        return {
          ok: true,
          status: res.status,
          contentType: res.headers.get('content-type') || 'unknown',
          rateLimited: false,
          dead: false
        };
      }

      // Handle Rate Limiting (429)
      if (res.status === 429) {
        if (attempt < maxRetries) {
          const retryAfter = res.headers.get('retry-after');
          const delaySec = retryAfter ? parseInt(retryAfter, 10) : Math.pow(2, attempt + 1);
          const waitMs = Math.min(Math.max(delaySec * 1000, 2000), 10000);
          console.log(`\n  [429 RATE LIMIT] Backing off for ${waitMs}ms before retry ${attempt + 1}/${maxRetries} for: ${url.slice(0, 60)}...`);
          await sleep(waitMs);
          continue;
        } else {
          return {
            ok: false,
            status: 429,
            rateLimited: true,
            dead: false,
            contentType: res.headers.get('content-type')
          };
        }
      }

      // 404 Not Found or other 4xx/5xx
      return {
        ok: false,
        status: res.status,
        rateLimited: false,
        dead: res.status === 404,
        contentType: res.headers.get('content-type')
      };
    } catch (err) {
      clearTimeout(timer);
      if (attempt < maxRetries && (err.name === 'AbortError' || err.code === 'ECONNRESET')) {
        const waitMs = Math.pow(2, attempt + 1) * 1000;
        await sleep(waitMs);
        continue;
      }
      return {
        ok: false,
        status: 'FETCH_ERROR',
        error: err.message,
        rateLimited: false,
        dead: false
      };
    }
  }
}

async function main() {
  const mediaList = [];
  for (const s of species) {
    for (const med of (s.media || [])) {
      mediaList.push({
        speciesId: s.id,
        scientificName: s.scientificName,
        mediaId: med.id,
        url: med.url || med.imageUrl
      });
    }
  }

  console.log('================================================================');
  console.log(`BIOTAELITE 2.0: RATE-LIMITED LIVE MEDIA URL REACHABILITY AUDIT`);
  console.log(`Auditing ${mediaList.length} verified media items sequentially...`);
  console.log('================================================================\n');

  const results = [];
  let successful = 0;
  let dead = 0;
  let rateLimited = 0;
  let otherErrors = 0;
  const manualReview = [];

  const startTime = Date.now();

  for (let i = 0; i < mediaList.length; i++) {
    const item = mediaList[i];
    const res = await checkUrlWithBackoff(item.url);
    const resultItem = {
      ...item,
      res
    };
    results.push(resultItem);

    if (res.ok) {
      successful++;
    } else if (res.dead) {
      dead++;
      manualReview.push({
        speciesId: item.speciesId,
        scientificName: item.scientificName,
        url: item.url,
        reason: 'HTTP 404 Not Found'
      });
    } else if (res.rateLimited) {
      rateLimited++;
      manualReview.push({
        speciesId: item.speciesId,
        scientificName: item.scientificName,
        url: item.url,
        reason: 'HTTP 429 Rate Limited (non-dead)'
      });
    } else {
      otherErrors++;
      manualReview.push({
        speciesId: item.speciesId,
        scientificName: item.scientificName,
        url: item.url,
        reason: `Status: ${res.status || res.error}`
      });
    }

    // Inter-request polite delay (150ms)
    await sleep(150);

    const percent = Math.round(((i + 1) / mediaList.length) * 100);
    const elapsed = Math.round((Date.now() - startTime) / 1000);
    process.stdout.write(
      `[${i + 1}/${mediaList.length}] (${percent}%) OK: ${successful} | Dead: ${dead} | 429: ${rateLimited} | Other: ${otherErrors} (${elapsed}s)\r`
    );
  }

  console.log('\n\n================================================================');
  console.log('REACHABILITY AUDIT COMPLETE');
  console.log('================================================================');
  console.log(`Total URLs Checked:               ${mediaList.length}`);
  console.log(`HTTP Success (200 / 206):        ${successful}`);
  console.log(`Unavailable / Dead (404):        ${dead}`);
  console.log(`Rate Limited After Backoff (429): ${rateLimited}`);
  console.log(`Other Network/Fetch Errors:      ${otherErrors}`);
  console.log('================================================================');

  if (manualReview.length > 0) {
    console.log(`\nItems Flagged for Review (${manualReview.length}):`);
    manualReview.forEach((mr, idx) => {
      console.log(`  ${idx + 1}. [${mr.reason}] ${mr.scientificName} (${mr.speciesId}): ${mr.url}`);
    });
  } else {
    console.log('\nAll 236 media URLs verified reachable with zero errors.');
  }

  const outPath = path.join(__dirname, 'data_media_url_reachability.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2));
  console.log(`\nAuthoritative reachability log written to: scripts/data_media_url_reachability.json\n`);
}

main().catch(err => {
  console.error('Fatal error in URL reachability audit:', err);
  process.exit(1);
});
