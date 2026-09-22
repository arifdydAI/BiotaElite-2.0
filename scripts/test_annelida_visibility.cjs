// scripts/test_annelida_visibility.cjs
// Focused regression test for Annelida species visibility and taxonomy link integrity
const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const rootDir = path.resolve(__dirname, '..');

function loadTs(relPath) {
  const fullPath = path.resolve(rootDir, relPath);
  let code = fs.readFileSync(fullPath, 'utf8');
  const js = ts.transpileModule(code, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 }
  }).outputText;
  const m = { exports: {} };
  const customRequire = (reqPath) => require(reqPath);
  const fn = new Function('module', 'exports', 'require', '__dirname', '__filename', js);
  fn(m, m.exports, customRequire, path.dirname(fullPath), fullPath);
  return m.exports;
}

const { SEED_TAXA } = loadTs('src/data/seedTaxa.ts');
const { SEED_SPECIES } = loadTs('src/data/seedSpecies.ts');
const { SEED_TAXON_KNOWLEDGE } = loadTs('src/data/seedTaxonKnowledge.ts');
const { compareSpeciesByPriority, getSpeciesPriorityRank } = loadTs('src/types/biodiversity.ts');

console.log('================================================================');
console.log('TARGETED FIX — ANNELIDA SPECIES VISIBILITY & TAXONOMY INTEGRITY');
console.log('================================================================\n');

let passedTests = 0;
let failedTests = 0;

function assert(condition, testId, message) {
  if (condition) {
    console.log(`  ✓ PASSED [Test ${testId}]: ${message}`);
    passedTests++;
  } else {
    console.error(`  ❌ FAILED [Test ${testId}]: ${message}`);
    failedTests++;
  }
}

const taxaMap = new Map(SEED_TAXA.map(t => [t.id, t]));
const speciesMap = new Map(SEED_SPECIES.map(s => [s.id, s]));

// 1. Verify that all 7 canonical Annelida species exist
const expectedSpecies = [
  { id: 'sp-lumbricus-terrestris', name: 'Lumbricus terrestris', common: 'Common earthworm', priority: 'common_educational', rank: 1 },
  { id: 'sp-eisenia-fetida', name: 'Eisenia fetida', common: 'Tiger worm / Red wiggler', priority: 'common_educational', rank: 1 },
  { id: 'sp-hirudo-medicinalis', name: 'Hirudo medicinalis', common: 'European medicinal leech', priority: 'common_educational', rank: 1 },
  { id: 'sp-tubifex-tubifex', name: 'Tubifex tubifex', common: 'Sludge worm', priority: 'scientifically_important', rank: 2 },
  { id: 'sp-sabella-spallanzanii', name: 'Sabella spallanzanii', common: 'Feather duster worm', priority: 'scientifically_important', rank: 2 },
  { id: 'sp-arenicola-marina', name: 'Arenicola marina', common: 'Blow lugworm', priority: 'scientifically_important', rank: 2 },
  { id: 'sp-alitta-virens', name: 'Alitta virens', common: 'King ragworm', priority: 'scientifically_important', rank: 2 }
];

console.log('--- 1. CANONICAL ANNELIDA SPECIES EXISTENCE & ATTRIBUTES ---');
for (const exp of expectedSpecies) {
  const sp = speciesMap.get(exp.id);
  assert(!!sp, `EXP-EXIST-${exp.id}`, `Species ${exp.name} (${exp.id}) exists in canonical seedSpecies`);
  if (sp) {
    assert(sp.scientificName === exp.name, `EXP-NAME-${exp.id}`, `${exp.id} scientificName is "${exp.name}"`);
    assert(sp.speciesPriority === exp.priority, `EXP-PRIORITY-${exp.id}`, `${exp.id} speciesPriority is "${exp.priority}"`);
    assert(getSpeciesPriorityRank(sp) === exp.rank, `EXP-RANK-${exp.id}`, `${exp.id} priority rank evaluates to ${exp.rank}`);
    assert(!!sp.provenance, `EXP-PROV-${exp.id}`, `${exp.id} has verified provenance`);
    assert(Array.isArray(sp.media) && sp.media.length > 0, `EXP-MEDIA-${exp.id}`, `${exp.id} has canonical media voucher`);
    assert(sp.taxonomy.phylum === 'Annelida', `EXP-PHYLUM-${exp.id}`, `${exp.id} taxonomy.phylum is "Annelida"`);
  }
}

// 2. Complete taxonomy chain verification: Species -> Genus -> Family -> Order -> Class -> Phylum Annelida -> Kingdom Animalia
console.log('\n--- 2. COMPLETE TAXONOMY ANCESTRY VERIFICATION ---');
for (const exp of expectedSpecies) {
  const sp = speciesMap.get(exp.id);
  if (!sp) continue;

  const chain = [];
  let curr = taxaMap.get(sp.taxonId);
  while (curr) {
    chain.push(curr);
    if (curr.rank === 'kingdom' || !curr.parentTaxonId) break;
    curr = taxaMap.get(curr.parentTaxonId);
  }

  const rankNames = chain.map(c => `${c.rank}:${c.scientificName}`);
  const hasGenus = chain.some(c => c.rank === 'genus');
  const hasFamily = chain.some(c => c.rank === 'family');
  const hasOrder = chain.some(c => c.rank === 'order');
  const hasClass = chain.some(c => c.rank === 'class');
  const hasPhylum = chain.some(c => c.rank === 'phylum' && c.scientificName.toLowerCase() === 'annelida');
  const hasKingdom = chain.some(c => c.rank === 'kingdom' && c.scientificName.toLowerCase() === 'animalia');

  assert(hasGenus && hasFamily && hasOrder && hasClass && hasPhylum && hasKingdom,
    `CHAIN-${exp.id}`,
    `${exp.name} resolves complete valid chain: ${rankNames.join(' -> ')}`
  );
}

// 3. Zero Ctenophora contamination under Annelida
console.log('\n--- 3. ZERO CTENOPHORA CONTAMINATION CHECK ---');
const ctenoSpeciesIds = [
  'sp-pleurobrachia-pileus',
  'sp-beroe-ovata',
  'sp-mnemiopsis-leidyi',
  'sp-cestum-veneris'
];

for (const cid of ctenoSpeciesIds) {
  const sp = speciesMap.get(cid);
  assert(!!sp, `CTENO-EXIST-${cid}`, `Ctenophora species ${cid} exists`);
  if (sp) {
    assert(sp.taxonomy.phylum === 'Ctenophora', `CTENO-NOT-ANNELIDA-${cid}`, `${sp.scientificName} has phylum Ctenophora (NOT Annelida)`);
    
    // Ensure ancestry does not touch Annelida
    let curr = taxaMap.get(sp.taxonId);
    let touchesAnnelida = false;
    while (curr) {
      if (curr.scientificName.toLowerCase() === 'annelida' || curr.id.includes('annelida')) {
        touchesAnnelida = true;
      }
      curr = taxaMap.get(curr.parentTaxonId);
    }
    assert(!touchesAnnelida, `CTENO-CLEAN-${cid}`, `${sp.scientificName} ancestry has zero Annelida links`);
  }
}

// 4. Traversal mechanism resolution from Phylum Annelida
console.log('\n--- 4. TRAVERSAL MECHANISM & DESCENDANT RESOLUTION ---');
const annelidaPhylumTaxon = taxaMap.get('taxon-annelida-marine');
assert(!!annelidaPhylumTaxon, 'ANNELIDA-TAXON-EXISTS', 'taxon-annelida-marine exists in seedTaxa');

// Build descendant map
const childrenMap = {};
for (const tNode of SEED_TAXA) {
  const pId = tNode.parentTaxonId ?? tNode.parentId;
  if (pId) {
    if (!childrenMap[pId]) childrenMap[pId] = [];
    childrenMap[pId].push(tNode.id);
  }
}
function getAllDescendantIds(id) {
  const set = new Set([id]);
  const children = childrenMap[id] || [];
  for (const cid of children) {
    const childSet = getAllDescendantIds(cid);
    childSet.forEach(tid => set.add(tid));
  }
  return set;
}

const annelidaDescendants = getAllDescendantIds('taxon-annelida-marine');
const resolvedThroughTraversal = SEED_SPECIES.filter(s => annelidaDescendants.has(s.taxonId));

assert(resolvedThroughTraversal.length === 7, 'TRAVERSAL-COUNT', `Annelida descendant traversal resolves exactly 7 species (found: ${resolvedThroughTraversal.length})`);
for (const exp of expectedSpecies) {
  assert(resolvedThroughTraversal.some(s => s.id === exp.id), `TRAVERSAL-RESOLVE-${exp.id}`, `Descendant traversal correctly resolves ${exp.name}`);
}

// 5. Priority sorting: Common educational species must be first
console.log('\n--- 5. COMMON / TEXTBOOK SPECIES PRIORITY SORTING ---');
const tk = SEED_TAXON_KNOWLEDGE.find(k => k.canonicalSlug === 'annelida' || k.scientificName.toLowerCase() === 'annelida');
assert(!!tk, 'TK-EXISTS', 'Taxon knowledge record for Annelida exists');

const exampleIdOrder = new Map(tk.exampleSpeciesIds.map((id, idx) => [id, idx]));
const sortCuratedSpecies = (a, b) => {
  const pA = getSpeciesPriorityRank(a);
  const pB = getSpeciesPriorityRank(b);
  if (pA !== pB) return pA - pB;
  const idxA = exampleIdOrder.has(a.id) ? exampleIdOrder.get(a.id) : 999;
  const idxB = exampleIdOrder.has(b.id) ? exampleIdOrder.get(b.id) : 999;
  if (idxA !== idxB) return idxA - idxB;
  return a.scientificName.localeCompare(b.scientificName);
};

const sortedAnnelida = [...resolvedThroughTraversal].sort(sortCuratedSpecies);
console.log('  Resolved & Sorted Annelida species:');
sortedAnnelida.forEach((s, idx) => {
  console.log(`    ${idx + 1}. [Rank ${getSpeciesPriorityRank(s)} - ${s.speciesPriority}] ${s.scientificName} (${s.commonNames?.en?.[0]})`);
});

const topThreeIds = sortedAnnelida.slice(0, 3).map(s => s.id);
assert(
  topThreeIds.includes('sp-lumbricus-terrestris') &&
  topThreeIds.includes('sp-eisenia-fetida') &&
  topThreeIds.includes('sp-hirudo-medicinalis'),
  'PRIORITY-TOP-3-EARTHWORMS-LEECHES',
  'Earthworms and leeches (Lumbricus, Eisenia, Hirudo) are strictly the top 3 visible educational representatives'
);

assert(sortedAnnelida[0].id === 'sp-lumbricus-terrestris', 'FIRST-SPECIES-LUMBRICUS', 'First species is Lumbricus terrestris (Common earthworm)');
assert(sortedAnnelida[1].id === 'sp-eisenia-fetida', 'SECOND-SPECIES-EISENIA', 'Second species is Eisenia fetida (Tiger worm / Red wiggler)');
assert(sortedAnnelida[2].id === 'sp-hirudo-medicinalis', 'THIRD-SPECIES-HIRUDO', 'Third species is Hirudo medicinalis (European medicinal leech)');

// 6. Taxon knowledge profile verification
console.log('\n--- 6. TAXON KNOWLEDGE PROFILE ATTRIBUTES ---');
assert(tk.englishName === 'Segmented Worms (Earthworms, Leeches & Polychaetes)', 'TK-ENGLISH-NAME', `English name is "${tk.englishName}"`);
assert(tk.bengaliName.includes('কেঁচো') && tk.bengaliName.includes('জোঁক'), 'TK-BENGALI-NAME', `Bengali name contains earthworms and leeches ("${tk.bengaliName}")`);
assert(tk.category === 'zoology', 'TK-CATEGORY', `Category is "${tk.category}" (NOT marine_non_fish)`);
assert(
  tk.habitat?.systems?.includes('terrestrial') &&
  tk.habitat?.systems?.includes('freshwater') &&
  tk.habitat?.systems?.includes('marine'),
  'TK-SYSTEMS-ALL-BIOMES',
  'Habitat systems includes terrestrial, freshwater, and marine'
);

console.log('\n================================================================');
console.log(`SUMMARY: ${passedTests} PASSED, ${failedTests} FAILED`);
console.log('================================================================');

if (failedTests > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
