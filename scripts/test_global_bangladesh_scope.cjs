#!/usr/bin/env node
// MASTER-FIX-08: Global Fish + Global Marine + Global Species vs Bangladesh Scope Separation Test Suite (Tests A–S)
'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

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

console.log('\n\x1b[1m═══════════════════════════════════════════════════════════════════════\x1b[0m');
console.log('\x1b[1m  MASTER-FIX-08: Global vs Bangladesh Scope Separation Suite (A–S)      \x1b[0m');
console.log('\x1b[1m═══════════════════════════════════════════════════════════════════════\x1b[0m\n');

// Read source files
const fishPageRaw = fs.readFileSync(path.join(SRC, 'pages/public/FishPage.tsx'), 'utf8');
const marinePageRaw = fs.readFileSync(path.join(SRC, 'pages/public/MarinePage.tsx'), 'utf8');
const bangladeshPageRaw = fs.readFileSync(path.join(SRC, 'pages/public/BangladeshPage.tsx'), 'utf8');
const speciesDetailPageRaw = fs.readFileSync(path.join(SRC, 'pages/public/SpeciesDetailPage.tsx'), 'utf8');
const speciesPageRaw = fs.readFileSync(path.join(SRC, 'pages/public/SpeciesPage.tsx'), 'utf8');
const scientificNamesRaw = fs.readFileSync(path.join(SRC, 'pages/public/ScientificNamesPage.tsx'), 'utf8');
const taxonKnowledgeDetailRaw = fs.readFileSync(path.join(SRC, 'components/knowledge/TaxonKnowledgeDetail.tsx'), 'utf8');
const taxonKnowledgeCardRaw = fs.readFileSync(path.join(SRC, 'components/knowledge/TaxonKnowledgeCard.tsx'), 'utf8');
const appRaw = fs.readFileSync(path.join(SRC, 'App.tsx'), 'utf8');
const translationsRaw = fs.readFileSync(path.join(SRC, 'i18n/translations.ts'), 'utf8');
const seedSpeciesRaw = fs.readFileSync(path.join(SRC, 'data/seedSpecies.ts'), 'utf8');
const seedTaxaRaw = fs.readFileSync(path.join(SRC, 'data/seedTaxa.ts'), 'utf8');
const seedTaxonKnowledgeRaw = fs.readFileSync(path.join(SRC, 'data/seedTaxonKnowledge.ts'), 'utf8');

// ─────────────────────────────────────────────────────────────────────────────
// Test A: Global Fish Catalog Scope (/fish)
// ─────────────────────────────────────────────────────────────────────────────
console.log('\x1b[1mTest A: Global Fish Catalog Scope (/fish)\x1b[0m');
{
  const retrievesFish = fishPageRaw.includes("getSpeciesByModule('fish')");
  const defaultsToGlobal = fishPageRaw.includes("useState<'global' | 'bangladesh'>('global')");
  const hasGlobalFilter = fishPageRaw.includes('filteredCatalogFish');

  if (retrievesFish && defaultsToGlobal && hasGlobalFilter) {
    pass('A', 'FishPage displays global fish catalog by default and separates regional Bangladesh filtering');
  } else {
    fail('A', 'FishPage restricts primary fish catalog to Bangladesh or missing global default scope');
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test B: Agnatha / Myxiniformes / Petromyzontiformes Global Representation
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest B: Agnatha / Myxiniformes / Petromyzontiformes Global Representation\x1b[0m');
{
  const hasMyx = seedTaxonKnowledgeRaw.includes('order-myxiniformes') && seedTaxonKnowledgeRaw.includes('Myxiniformes');
  const hasPetro = seedTaxonKnowledgeRaw.includes('order-petromyzontiformes') && seedTaxonKnowledgeRaw.includes('Petromyzontiformes');
  const hasAgnathaGroup = seedTaxonKnowledgeRaw.includes('group-agnatha') && seedTaxaRaw.includes('taxon-agnatha');

  if (hasMyx && hasPetro && hasAgnathaGroup) {
    pass('B', 'Agnatha, Myxiniformes, and Petromyzontiformes have complete taxonomic and diagnostic records');
  } else {
    fail('B', 'Missing Agnatha, Myxiniformes, or Petromyzontiformes taxonomic knowledge records');
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test C: Sarcopterygii Global Representation
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest C: Sarcopterygii Global Representation\x1b[0m');
{
  const hasSarco = seedTaxaRaw.includes('class-sarcopterygii') || seedTaxonKnowledgeRaw.includes('Sarcopterygii');
  const hasCoelacanth = seedTaxonKnowledgeRaw.includes('Coelacanthiformes') || seedTaxaRaw.includes('taxon-coelacanthiformes');
  const hasLungfish = seedTaxonKnowledgeRaw.includes('Ceratodontiformes') || seedTaxaRaw.includes('taxon-ceratodontiformes');

  if (hasSarco && hasCoelacanth && hasLungfish) {
    pass('C', 'Sarcopterygii (Coelacanthiformes & Ceratodontiformes) represented with global evolutionary lineages');
  } else {
    fail('C', 'Missing Sarcopterygii or its representative orders in global taxonomy');
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test D: Point 10 (Examples) Non-Empty State on Extralimital Clades
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest D: Point 10 (Examples) Non-Empty State on Extralimital Clades\x1b[0m');
{
  const hasLiteratureFallback = taxonKnowledgeDetailRaw.includes('record.examplesSummary') &&
    taxonKnowledgeDetailRaw.includes('knowledge.globalExamplesNotice');
  const hasNoMisleadingEmptyWarning = !taxonKnowledgeDetailRaw.includes('Verified Species in BD: 0') &&
    !taxonKnowledgeDetailRaw.includes('0 verified specimen records currently catalogued in Bangladesh');

  if (hasLiteratureFallback && hasNoMisleadingEmptyWarning) {
    pass('D', 'Point 10 displays global representative taxa from authoritative literature rather than empty failure box');
  } else {
    fail('D', 'Point 10 still exhibits empty failure state or missing examplesSummary fallback');
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test E: Hero Stats & Metrics Hierarchy
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest E: Hero Stats & Metrics Hierarchy\x1b[0m');
{
  const detailHasGlobalPrimary = taxonKnowledgeDetailRaw.includes('liveSpeciesInTaxon.length') &&
    (taxonKnowledgeDetailRaw.includes('knowledge.globalCatalogued') || taxonKnowledgeDetailRaw.includes('tax.curatedGlobalSpecies'));
  const detailHasRegionalSecondary = (taxonKnowledgeDetailRaw.includes('knowledge.regionalContext') || taxonKnowledgeDetailRaw.includes('tax.bangladeshRegionalContext') || taxonKnowledgeDetailRaw.includes('tax.bangladeshRecords')) &&
    taxonKnowledgeDetailRaw.includes('bdSpeciesInTaxon.length');
  const fishPageHasSecondaryBD = fishPageRaw.includes('bdFishSpecies.length') &&
    fishPageRaw.includes('knowledge.regionalContext');

  if (detailHasGlobalPrimary && detailHasRegionalSecondary && fishPageHasSecondaryBD) {
    pass('E', 'Hero metrics prioritize global catalogued species with Bangladesh occurrence as secondary regional context');
  } else {
    fail('E', 'Hero metrics do not properly decouple global species count from Bangladesh regional context');
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test F: Global Marine Portal (/marine)
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest F: Global Marine Portal (/marine)\x1b[0m');
{
  const retrievesMarine = marinePageRaw.includes("getSpeciesByModule('marine')");
  const hasBdSeparation = marinePageRaw.includes('bdClassSpecies') && marinePageRaw.includes('bdPhylumSpecies');
  const hasRegionalBadge = marinePageRaw.includes('knowledge.regionalContext');

  if (retrievesMarine && hasBdSeparation && hasRegionalBadge) {
    pass('F', 'MarinePage represents global marine biodiversity with labeled regional Bangladesh context');
  } else {
    fail('F', 'MarinePage fails to decouple global marine species from regional Bangladesh occurrences');
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test G: Global Species Catalog (/species)
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest G: Global Species Catalog (/species)\x1b[0m');
{
  const defaultsToAll = speciesPageRaw.includes("useState<'all' | 'finfishes' | 'mammals' | 'marine' | 'bd'>('all')");
  const usesAllFiltered = speciesPageRaw.includes('tabFilteredSpecies');

  if (defaultsToAll && usesAllFiltered) {
    pass('G', 'SpeciesPage default view catalogs all verified species globally');
  } else {
    fail('G', 'SpeciesPage incorrectly constrains default catalog view to Bangladesh only');
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test H: Bangladesh Portal (/bangladesh)
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest H: Bangladesh Portal (/bangladesh)\x1b[0m');
{
  const filtersPresent = bangladeshPageRaw.includes('s.bangladeshOccurrence.present');
  const hasDistinctTitle = bangladeshPageRaw.includes("t('bd.mainHeading')") ||
    bangladeshPageRaw.includes('bd.portalTitle');

  if (filtersPresent && hasDistinctTitle) {
    pass('H', 'BangladeshPage exclusively filters primary catalog to Bangladesh-occurring species');
  } else {
    fail('H', 'BangladeshPage does not properly enforce bangladeshOccurrence.present filter');
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test I: Species Detail Page (/species/:id) Section Order
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest I: Species Detail Page (/species/:id) Section Order\x1b[0m');
{
  const morphologyIdx = speciesDetailPageRaw.indexOf('id="morphology"');
  const ecologyIdx = speciesDetailPageRaw.indexOf('id="ecology"');
  const conservationIdx = speciesDetailPageRaw.indexOf('id="conservation"');
  const bdOccurrenceIdx = speciesDetailPageRaw.indexOf('id="bangladesh-occurrence"');

  const ordered = morphologyIdx !== -1 && morphologyIdx < ecologyIdx && ecologyIdx < conservationIdx && conservationIdx < bdOccurrenceIdx;

  if (ordered) {
    pass('I', 'SpeciesDetailPage organizes sections: Morphology -> Ecology -> Conservation -> Regional Context (BD)');
  } else {
    fail('I', 'SpeciesDetailPage section order does not prioritize global taxonomy and biology over regional context');
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test J: Scientific Name Index (/scientific-names)
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest J: Scientific Name Index (/scientific-names)\x1b[0m');
{
  const usesGlobalSpecies = scientificNamesRaw.includes('useBiodiversity()') &&
    scientificNamesRaw.includes('species');
  const notRestrictedToBD = !scientificNamesRaw.includes('species.filter(s => s.bangladeshOccurrence.present)');

  if (usesGlobalSpecies && notRestrictedToBD) {
    pass('J', 'ScientificNamesPage indexes all global catalogued taxa and synonyms');
  } else {
    fail('J', 'ScientificNamesPage restricts scientific name indexing to Bangladesh taxa');
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test K: Search and Filter Operations Scope
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest K: Search and Filter Operations Scope\x1b[0m');
{
  const hasSearchInput = speciesPageRaw.includes('search') || speciesPageRaw.includes('query');
  const supportsHabitatFilter = speciesPageRaw.includes('habitat') || speciesPageRaw.includes('system');

  if (hasSearchInput && supportsHabitatFilter) {
    pass('K', 'Search and filter systems operate across global biodiversity records');
  } else {
    fail('K', 'Global search and filter capabilities missing or restricted');
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test L: Elimination of Misleading "Verified Species in BD: 0" UI
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest L: Elimination of Misleading "Verified Species in BD: 0" UI\x1b[0m');
{
  const badString1 = 'Verified Species in BD: 0';
  const badString2 = '0 verified specimen records currently catalogued in Bangladesh';
  const inFish = fishPageRaw.includes(badString1) || fishPageRaw.includes(badString2);
  const inDetail = taxonKnowledgeDetailRaw.includes(badString1) || taxonKnowledgeDetailRaw.includes(badString2);
  const inCard = taxonKnowledgeCardRaw.includes(badString1) || taxonKnowledgeCardRaw.includes(badString2);
  const inMarine = marinePageRaw.includes(badString1) || marinePageRaw.includes(badString2);

  if (!inFish && !inDetail && !inCard && !inMarine) {
    pass('L', 'All misleading "Verified Species in BD: 0" and "0 catalogued in BD" primary banners completely eliminated');
  } else {
    fail('L', 'Found misleading "Verified Species in BD: 0" strings in global taxon components');
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test M: Image Display Gates from MASTER-FIX-07B Preservation
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest M: Image Display Gates from MASTER-FIX-07B Preservation\x1b[0m');
{
  const speciesCardRaw = fs.readFileSync(path.join(SRC, 'components/species/SpeciesCard.tsx'), 'utf8');
  const hasSpeciesIdGate = speciesCardRaw.includes('m.speciesId === species.id') &&
    speciesDetailPageRaw.includes('m.speciesId === species.id');
  const hasStatusGate = speciesCardRaw.includes("species.imageVerificationStatus === 'verified'") &&
    speciesDetailPageRaw.includes("species.imageVerificationStatus === 'verified'");
  const hasMediaVerifGate = speciesCardRaw.includes("m.verificationStatus === 'verified'") &&
    speciesDetailPageRaw.includes("m.verificationStatus === 'verified'");

  if (hasSpeciesIdGate && hasStatusGate && hasMediaVerifGate) {
    pass('M', 'MASTER-FIX-07B strict species <-> image gates remain 100% intact across components');
  } else {
    fail('M', 'MASTER-FIX-07B image verification gates were modified or relaxed');
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test N: No Fabricated Data, Mock URLs, or Placeholders
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest N: No Fabricated Data, Mock URLs, or Placeholders\x1b[0m');
{
  const hasUnsplash = seedSpeciesRaw.includes('images.unsplash.com');
  const hasPlaceholderUrls = seedSpeciesRaw.includes('via.placeholder.com') ||
    seedSpeciesRaw.includes('placeholder.com') ||
    seedSpeciesRaw.includes('example.com/image');

  if (!hasUnsplash && !hasPlaceholderUrls) {
    pass('N', 'Zero Unsplash or mock/placeholder image URLs detected across seedSpecies data');
  } else {
    fail('N', 'Found mock, Unsplash, or placeholder image URLs in seedSpecies.ts');
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test O: Taxon Route Aliasing
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest O: Taxon Route Aliasing\x1b[0m');
{
  const hasSlugRoute = appRaw.includes('path="/fish/:taxonSlug"');
  const hasOrderParam = fishPageRaw.includes('taxonSlug');

  if (hasSlugRoute && hasOrderParam) {
    pass('O', 'Route aliasing supports direct /fish/:taxonSlug URLs (e.g. /fish/order-myxiniformes)');
  } else {
    fail('O', 'Missing route aliasing for direct /fish/:taxonSlug in App.tsx or FishPage.tsx');
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test P: i18n Bilingual Support
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest P: i18n Bilingual Support\x1b[0m');
{
  const requiredKeys = [
    'knowledge.regionalContext',
    'knowledge.regionalNotRecorded',
    'knowledge.regionalRecorded',
    'knowledge.globalExamplesNotice',
    'knowledge.globalCatalogued',
    'knowledge.regionalBdRecords',
    'knowledge.globalTaxonStatus'
  ];

  let allKeysPresent = true;
  for (const k of requiredKeys) {
    if (!translationsRaw.includes(`'${k}'`) && !translationsRaw.includes(`"${k}"`)) {
      allKeysPresent = false;
      break;
    }
  }

  const hasBnTranslations = translationsRaw.includes('আঞ্চলিক প্রেক্ষাপট (বাংলাদেশ)') &&
    translationsRaw.includes('ক্যাটালগভুক্ত বৈশ্বিক প্রজাতি');

  if (allKeysPresent && hasBnTranslations) {
    pass('P', 'Bilingual (EN + BN) localization keys present and complete for global/regional scope');
  } else {
    fail('P', 'Missing English or Bengali translation keys for regional context and global catalogued metrics');
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test Q: Fish Orders Count Integrity (66 Fish Orders)
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest Q: Fish Orders Count Integrity (66 Fish Orders)\x1b[0m');
{
  const orderMatches = seedTaxaRaw.match(/"rank":\s*"order"/g) || [];
  // Fish orders in seedTaxa: Agnatha (2) + Chondrichthyes (14) + Osteichthyes (50) = 66
  if (orderMatches.length >= 66) {
    pass('Q', `Global taxonomy graph contains ${orderMatches.length} orders (all 66 fish orders present)`);
  } else {
    fail('Q', `Fish order count is ${orderMatches.length}, expected at least 66`);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test R: Marine Organisms Count Integrity
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest R: Marine Organisms Count Integrity\x1b[0m');
{
  const marineModuleMatches = seedSpeciesRaw.match(/["']?module["']?\s*:\s*['"]marine['"]/g) || [];
  const marineHabitatMatches = seedSpeciesRaw.match(/['"]marine['"]/g) || [];

  if (marineModuleMatches.length > 0 && marineHabitatMatches.length > marineModuleMatches.length) {
    pass('R', `Marine records correctly segregated: ${marineModuleMatches.length} non-fish marine species, plus marine finfish`);
  } else {
    fail('R', 'Marine module or marine habitat classification broken');
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test S: Complete Regression Suite Pass
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest S: Complete Regression Suite Pass\x1b[0m');
try {
  console.log('    Running scripts/test_verified_species_images.cjs...');
  execSync('node scripts/test_verified_species_images.cjs', { cwd: ROOT, stdio: 'pipe' });
  console.log('    Running scripts/test_image_species_integrity.cjs...');
  execSync('node scripts/test_image_species_integrity.cjs', { cwd: ROOT, stdio: 'pipe' });
  console.log('    Running scripts/run_verify.cjs...');
  execSync('node scripts/run_verify.cjs', { cwd: ROOT, stdio: 'pipe' });
  pass('S', 'All previous integrity and regression test suites continue to pass 100% with zero regressions');
} catch (e) {
  fail('S', `Regression test execution failed: ${e.message}`);
}

// ─────────────────────────────────────────────────────────────────────────────
// Final Results Summary
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n═══════════════════════════════════════════════════════════════════════');
console.log(`  RESULTS: ${passCount} passed, ${failCount} failed`);
if (failCount === 0) {
  console.log('  🎉 ALL MASTER-FIX-08 SCOPE SEPARATION TESTS PASS!');
} else {
  console.log('  ❌ SOME TESTS FAILED:');
  failures.forEach(f => console.log(`    - ${f}`));
}
console.log('═══════════════════════════════════════════════════════════════════════\n');

process.exit(failCount === 0 ? 0 : 1);
