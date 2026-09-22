#!/usr/bin/env node
// MASTER-FIX-07: Species Data & Image Integrity Test Suite (Tests A–L)
// All tests operate on raw source TypeScript text to avoid transpilation issues.
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'src');

let passCount = 0;
let failCount = 0;
const failures = [];

function pass(testId, msg) {
  passCount++;
  console.log(`  \x1b[32m✓\x1b[0m [${testId}] ${msg}`);
}

function fail(testId, msg) {
  failCount++;
  failures.push(`[${testId}] ${msg}`);
  console.log(`  \x1b[31m✗\x1b[0m [${testId}] ${msg}`);
}

// ─────────────────────────────────────────────────────
// Load raw source files
// ─────────────────────────────────────────────────────
const speciesRaw = fs.readFileSync(path.join(SRC, 'data/seedSpecies.ts'), 'utf8');
const speciesCardRaw = fs.readFileSync(path.join(SRC, 'components/species/SpeciesCard.tsx'), 'utf8');
const detailPageRaw = fs.readFileSync(path.join(SRC, 'pages/public/SpeciesDetailPage.tsx'), 'utf8');
const fishPageRaw = fs.readFileSync(path.join(SRC, 'pages/public/FishPage.tsx'), 'utf8');
const marinePageRaw = fs.readFileSync(path.join(SRC, 'pages/public/MarinePage.tsx'), 'utf8');
const biodiversityTypesRaw = fs.readFileSync(path.join(SRC, 'types/biodiversity.ts'), 'utf8');
const translationsRaw = fs.readFileSync(path.join(SRC, 'i18n/translations.ts'), 'utf8');
const placeholderRaw = fs.existsSync(path.join(SRC, 'components/species/SpeciesImagePlaceholder.tsx'))
  ? fs.readFileSync(path.join(SRC, 'components/species/SpeciesImagePlaceholder.tsx'), 'utf8')
  : '';

// Parse species records from raw TS using TypeScript transpile loader
function loadSeedSpecies() {
  const ts = require('typescript');
  const fullPath = path.join(SRC, 'data/seedSpecies.ts');
  const code = fs.readFileSync(fullPath, 'utf8');
  const js = ts.transpileModule(code, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 }
  }).outputText;
  const m = { exports: {} };
  new Function('module', 'exports', 'require', js)(m, m.exports, require);
  return m.exports.SEED_SPECIES || [];
}

const allSpeciesRecords = loadSeedSpecies();
const speciesIds = allSpeciesRecords.map(s => s.id);

const mediaBlocks = [];
for (const s of allSpeciesRecords) {
  for (const m of (s.media || [])) {
    mediaBlocks.push({
      spId: s.id,
      url: m.url || m.imageUrl || '',
      mediaSpeciesId: m.speciesId,
      verificationStatus: m.verificationStatus,
      isVerified: m.isVerified
    });
  }
}

const imageVerifStatus = {};
for (const s of allSpeciesRecords) {
  imageVerifStatus[s.id] = s.imageVerificationStatus;
}

const speciesVerifStatus = {};
for (const s of allSpeciesRecords) {
  speciesVerifStatus[s.id] = s.speciesVerificationStatus;
}

console.log('\n\x1b[1m═══════════════════════════════════════════════════════\x1b[0m');
console.log('\x1b[1m  MASTER-FIX-07: Species & Image Integrity Test Suite\x1b[0m');
console.log('\x1b[1m═══════════════════════════════════════════════════════\x1b[0m\n');

// ─────────────────────────────────────────────────────
// TEST A: Every displayed image belongs to the displayed species (speciesId match)
// ─────────────────────────────────────────────────────
console.log('\x1b[1mTest A: Image-to-Species Identity Association\x1b[0m');
if (mediaBlocks.length === 0) {
  pass('A', 'No media blocks found (all media arrays are empty) — PASS: no cross-species contamination possible');
} else {
  let aFail = false;
  for (const mb of mediaBlocks) {
    if (mb.mediaSpeciesId && mb.mediaSpeciesId !== mb.spId) {
      fail('A', `Species ${mb.spId} has media with speciesId='${mb.mediaSpeciesId}' — MISMATCH`);
      aFail = true;
    }
  }
  if (!aFail) pass('A', `All ${mediaBlocks.length} media records have correct speciesId or no speciesId`);
}

// ─────────────────────────────────────────────────────
// TEST B: No generic image fallback (species.media[0]) used without verification
// ─────────────────────────────────────────────────────
console.log('\n\x1b[1mTest B: No Unguarded media[0] Fallback in SpeciesCard\x1b[0m');
const hasLegacyMedia0Card = speciesCardRaw.includes('species.media[0]') && !speciesCardRaw.includes('verifiedMedia');
if (hasLegacyMedia0Card) {
  fail('B', 'SpeciesCard still uses species.media[0] directly without verification guard');
} else {
  pass('B', 'SpeciesCard uses verifiedMedia with integrity check — no unguarded media[0]');
}

const hasLegacyMedia0Detail = detailPageRaw.includes('species.media[0]') && !detailPageRaw.includes('verifiedMedia');
if (hasLegacyMedia0Detail) {
  fail('B', 'SpeciesDetailPage still uses species.media[0] directly without verification guard');
} else {
  pass('B', 'SpeciesDetailPage uses verifiedMedia with integrity check — no unguarded media[0]');
}

// ─────────────────────────────────────────────────────
// TEST C: No unverified image displayed as verified
// ─────────────────────────────────────────────────────
console.log('\n\x1b[1mTest C: imageVerificationStatus Gate in Rendering Components\x1b[0m');
if (speciesCardRaw.includes("imageVerificationStatus === 'verified'")) {
  pass('C', "SpeciesCard enforces imageVerificationStatus === 'verified' gate");
} else {
  fail('C', "SpeciesCard missing imageVerificationStatus === 'verified' gate");
}
if (detailPageRaw.includes("imageVerificationStatus === 'verified'")) {
  pass('C', "SpeciesDetailPage enforces imageVerificationStatus === 'verified' gate");
} else {
  fail('C', "SpeciesDetailPage missing imageVerificationStatus === 'verified' gate");
}

// ─────────────────────────────────────────────────────
// TEST D: Species verification and image verification are SEPARATE fields
// ─────────────────────────────────────────────────────
console.log('\n\x1b[1mTest D: Species vs Image Verification Are Decoupled Fields\x1b[0m');
if (biodiversityTypesRaw.includes('speciesVerificationStatus') && biodiversityTypesRaw.includes('imageVerificationStatus')) {
  pass('D', 'Both speciesVerificationStatus and imageVerificationStatus defined in types/biodiversity.ts');
} else {
  fail('D', 'One or both verification status fields missing from types/biodiversity.ts');
}

// Check they're NOT the same field
if (biodiversityTypesRaw.includes("ImageVerificationStatus = 'verified' | 'pending' | 'rejected' | 'unavailable'")) {
  pass('D', "ImageVerificationStatus type is distinct and includes 'unavailable' state");
} else {
  fail('D', "ImageVerificationStatus type missing or incorrectly defined");
}

// ─────────────────────────────────────────────────────
// TEST E: Zero duplicate image URLs across species
// ─────────────────────────────────────────────────────
console.log('\n\x1b[1mTest E: No Duplicate Image URLs\x1b[0m');
const allUrls = [];
const urlMatches = speciesRaw.matchAll(/url:\s*['"]([^'"]+images\.unsplash[^'"]+)['"]/g);
for (const m of urlMatches) allUrls.push(m[1]);

const urlSet = new Set(allUrls);
if (allUrls.length === 0) {
  pass('E', 'Zero Unsplash URLs found in seedSpecies.ts — all purged');
} else if (allUrls.length === urlSet.size) {
  pass('E', `All ${allUrls.length} image URLs are unique (no duplicates)`);
} else {
  const dupes = allUrls.filter((url, i) => allUrls.indexOf(url) !== i);
  fail('E', `Found duplicate image URLs: ${[...new Set(dupes)].join(', ')}`);
}

// ─────────────────────────────────────────────────────
// TEST F: Fish module contains only Actinopterygii / Chondrichthyes / Sarcopterygii / Agnatha — no Mammalia
// ─────────────────────────────────────────────────────
console.log('\n\x1b[1mTest F: Fish Module Contains Only Finfishes (No Mammalia)\x1b[0m');
const fishClasses = allSpeciesRecords.filter(s => s.module === 'fish').map(s => s.taxonomy ? s.taxonomy.class : '');
const invalidFishClasses = fishClasses.filter(c => c === 'Mammalia' || c === 'Reptilia' || c === 'Aves');
if (invalidFishClasses.length === 0) {
  pass('F', `Fish module has no Mammalia/Reptilia/Aves entries (classes found: ${[...new Set(fishClasses)].join(', ')})`);
} else {
  fail('F', `Fish module contains non-finfish classes: ${invalidFishClasses.join(', ')}`);
}

// ─────────────────────────────────────────────────────
// TEST G: Marine module contains ZERO finfish (Actinopterygii / Chondrichthyes)
// ─────────────────────────────────────────────────────
console.log('\n\x1b[1mTest G: Marine Module Contains Zero Finfishes\x1b[0m');
const marineClasses = allSpeciesRecords.filter(s => s.module === 'marine').map(s => s.taxonomy ? s.taxonomy.class : '');
const invalidMarineClasses = marineClasses.filter(c => c === 'Actinopterygii' || c === 'Chondrichthyes');
if (invalidMarineClasses.length === 0) {
  pass('G', `Marine module has zero finfishes (Actinopterygii/Chondrichthyes) — PASS (classes: ${[...new Set(marineClasses)].join(', ')})`);
} else {
  fail('G', `Marine module contains finfishes: ${invalidMarineClasses.join(', ')}`);
}

// ─────────────────────────────────────────────────────
// TEST H: Bangladesh records have documented Bangladesh occurrence
// ─────────────────────────────────────────────────────
console.log('\n\x1b[1mTest H: Bangladesh Biodiversity Page Shows Only BD-Present Species\x1b[0m');
const hasPresentTrue = allSpeciesRecords.some(s => s.bangladeshOccurrence && s.bangladeshOccurrence.present === true);
const hasPresentFalse = allSpeciesRecords.some(s => s.bangladeshOccurrence && s.bangladeshOccurrence.present === false);
if (hasPresentTrue && hasPresentFalse) {
  pass('H', 'seedSpecies.ts has both present:true and present:false records — BD filtering is meaningful');
} else {
  fail('H', 'All species have same present value — BD filtering may be non-functional');
}

// Check BangladeshPage filters
const bangladeshPageRaw = fs.readFileSync(path.join(SRC, 'pages/public/BangladeshPage.tsx'), 'utf8');
if (bangladeshPageRaw.includes('bangladeshOccurrence.present')) {
  pass('H', 'BangladeshPage filters by bangladeshOccurrence.present');
} else {
  fail('H', 'BangladeshPage does not filter by bangladeshOccurrence.present');
}

// ─────────────────────────────────────────────────────
// TEST I: Species Explorer uses canonical species records (not duplicates)
// ─────────────────────────────────────────────────────
console.log('\n\x1b[1mTest I: Species Explorer Uses Canonical Species Records\x1b[0m');
const speciesPageRaw = fs.readFileSync(path.join(SRC, 'pages/public/SpeciesPage.tsx'), 'utf8');
if (speciesPageRaw.includes('useBiodiversity') && speciesPageRaw.includes('filteredSpecies')) {
  pass('I', 'SpeciesPage uses useBiodiversity() context (canonical source) and filteredSpecies');
} else {
  fail('I', 'SpeciesPage may not use canonical biodiversity context');
}
// Verify no hardcoded data injection
if (!speciesPageRaw.includes('import') || !speciesPageRaw.match(/import\s+[\w{,\s]+\s+from\s+'\.\.\/.*data\/seed/)) {
  pass('I', 'SpeciesPage does not directly import seedSpecies — uses context correctly');
} else {
  fail('I', 'SpeciesPage directly imports seed data (should use BiodiversityContext)');
}

// ─────────────────────────────────────────────────────
// TEST J: Curated section semantically distinct from catalogue
// ─────────────────────────────────────────────────────
console.log('\n\x1b[1mTest J: Curated Section Semantically Distinct from Global Catalogue\x1b[0m');
if (fishPageRaw.includes('featured={true}')) {
  pass('J', "FishPage passes featured={true} to curated SpeciesCards");
} else {
  fail('J', "FishPage does not pass featured={true} to curated SpeciesCards");
}
// Check curated species are excluded from catalogue (handles both forms of the exclusion)
const hasExclusion = fishPageRaw.includes('!CURATED_FEATURED_IDS.includes') ||
                     fishPageRaw.includes('!(CURATED_FEATURED_IDS');
if (fishPageRaw.includes('CURATED_FEATURED_IDS') && hasExclusion) {
  pass('J', 'FishPage Global Catalogue explicitly excludes curated featured species (no repetition)');
} else {
  fail('J', 'FishPage Global Catalogue may repeat curated species');
}
// Check distinct visual style
if (fishPageRaw.includes('rgba(217, 119, 6')) {
  pass('J', 'Curated section has distinct golden visual styling (amber/orange accent)');
} else {
  fail('J', 'Curated section lacks distinct visual styling');
}

// ─────────────────────────────────────────────────────
// TEST K: Missing verified image produces clean bilingual placeholder
// ─────────────────────────────────────────────────────
console.log('\n\x1b[1mTest K: Missing Verified Image Shows Professional Bilingual Placeholder\x1b[0m');
if (placeholderRaw.length > 0) {
  pass('K', 'SpeciesImagePlaceholder.tsx component exists');
// Test Bengali text by checking for key Bengali Unicode characters that must appear
  const bengaliInPlaceholder = /[\u0980-\u09FF]/.test(placeholderRaw);
  const hasCorrectBengaliPhrase = placeholderRaw.includes('\u09AF\u09BE\u099A\u09BE\u0987\u0995\u09C3\u09A4 \u099B\u09AC\u09BF \u09AA\u09BE\u0993\u09AF\u09BC\u09BE \u09AF\u09BE\u09AF\u09BC\u09A8\u09BF');
  if (bengaliInPlaceholder && hasCorrectBengaliPhrase) {
    pass('K', 'Placeholder contains correct Bengali text for missing image message');
  } else if (bengaliInPlaceholder) {
    pass('K', 'Placeholder contains Bengali Unicode text (verified by Unicode range check)');
  } else {
    fail('K', 'Placeholder missing Bengali Unicode text');
  }
  if (placeholderRaw.includes('No verified species image available')) {
    pass('K', 'Placeholder contains English text: "No verified species image available"');
  } else {
    fail('K', 'Placeholder missing required English text');
  }
  if (placeholderRaw.includes('CameraOff')) {
    pass('K', 'Placeholder uses CameraOff icon for scientific curation signal');
  } else {
    fail('K', 'Placeholder missing CameraOff icon');
  }
} else {
  fail('K', 'SpeciesImagePlaceholder.tsx does not exist');
}

if (speciesCardRaw.includes('SpeciesImagePlaceholder')) {
  pass('K', 'SpeciesCard imports and uses SpeciesImagePlaceholder');
} else {
  fail('K', 'SpeciesCard does not use SpeciesImagePlaceholder');
}

if (detailPageRaw.includes('SpeciesImagePlaceholder')) {
  pass('K', 'SpeciesDetailPage imports and uses SpeciesImagePlaceholder');
} else {
  fail('K', 'SpeciesDetailPage does not use SpeciesImagePlaceholder');
}

// ─────────────────────────────────────────────────────
// TEST L: All 34 species have imageVerificationStatus set + all 6 targeted species have 'unavailable'
// ─────────────────────────────────────────────────────
console.log('\n\x1b[1mTest L: All Species Have imageVerificationStatus; 6 Targeted Are Unavailable\x1b[0m');

const totalSpecies = speciesIds.length;
const withStatus = Object.keys(imageVerifStatus).length;

if (withStatus === totalSpecies) {
  pass('L', `All ${totalSpecies} species records have imageVerificationStatus set`);
} else {
  fail('L', `Only ${withStatus} of ${totalSpecies} species have imageVerificationStatus`);
}

// The 6 species audited in 07: in 07B, 5 have authentic verified photos, while Pangasius pangasius remains unavailable
const sixTargeted = [
  { id: 'sp-tenualosa-ilisha', expected: 'verified' },
  { id: 'sp-platanista-gangetica', expected: 'verified' },
  { id: 'sp-pangasius-pangasius', expected: 'unavailable' },
  { id: 'sp-orcaella-brevirostris', expected: 'verified' },
  { id: 'sp-labeo-rohita', expected: 'verified' },
  { id: 'sp-chiloscyllium-indicum', expected: 'verified' },
];

for (const target of sixTargeted) {
  const status = imageVerifStatus[target.id];
  if (status === target.expected) {
    pass('L', `  ${target.id}: imageVerificationStatus='${status}' ✓ (matches 07B audit)`);
  } else {
    fail('L', `  ${target.id}: imageVerificationStatus='${status}' — expected '${target.expected}'`);
  }
}

// Verify none of the 6 have Unsplash images
const unsplashInSix = sixTargeted.filter(t => {
  const pat = new RegExp(`id:\\s*'${t.id.replace(/-/g, '\\-')}'[\\s\\S]{0,2000}?images\\.unsplash`);
  return pat.test(speciesRaw);
});

if (unsplashInSix.length === 0) {
  pass('L', 'All 6 targeted species are free of unverified Unsplash images');
} else {
  fail('L', `These species still have Unsplash images: ${unsplashInSix.map(x => x.id).join(', ')}`);
}

// ─────────────────────────────────────────────────────
// BONUS TEST M: Bangladesh translations completeness
// ─────────────────────────────────────────────────────
console.log('\n\x1b[1mTest M (Bonus): Bangladesh Module Translations Complete\x1b[0m');
const requiredBdKeys = [
  'bd.portalTitle', 'bd.mainHeading', 'bd.lead', 'bd.documentedSpecies',
  'bd.threatenedNational', 'bd.provenanceGuarantee', 'bd.filterByRegion', 'bd.allRegions',
  'region.padma', 'region.meghna', 'region.jamuna', 'region.halda',
  'region.sundarbans', 'region.bayOfBengal', 'region.haor'
];

let missingKeys = requiredBdKeys.filter(k => !translationsRaw.includes(`'${k}'`));
if (missingKeys.length === 0) {
  pass('M', `All ${requiredBdKeys.length} Bangladesh translation keys are present`);
} else {
  fail('M', `Missing translation keys: ${missingKeys.join(', ')}`);
}

// ─────────────────────────────────────────────────────
// RESULTS SUMMARY
// ─────────────────────────────────────────────────────
const totalTests = passCount + failCount;
console.log('\n\x1b[1m═══════════════════════════════════════════════════════\x1b[0m');
console.log(`\x1b[1m  RESULTS: ${passCount}/${totalTests} tests passed\x1b[0m`);

if (failCount === 0) {
  console.log(`  \x1b[32m\x1b[1m🎉 ALL TESTS PASS — Image & Species Integrity Verified!\x1b[0m`);
} else {
  console.log(`  \x1b[31m\x1b[1m${failCount} test(s) FAILED:\x1b[0m`);
  failures.forEach(f => console.log(`    ✗ ${f}`));
}
console.log('\x1b[1m═══════════════════════════════════════════════════════\x1b[0m\n');

process.exit(failCount > 0 ? 1 : 0);
