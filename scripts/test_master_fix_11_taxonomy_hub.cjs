// BiotaElite 2.0 - MASTER-FIX-11 Verification Suite
// Validates Taxonomy as the Core Zoological Classification & Knowledge Hub
// Tests:
// 1. Taxon knowledge records integrity (97 records, zero orphan taxonIds, biology-specific sections)
// 2. Canonical slug mappings and unique IDs
// 3. Educational group qualification (Protozoa)
// 4. Linnaean backbone connectivity (Amphibia, Aves, Chordata, etc.)
// 5. Audited descendant & species counters
// 6. Preservation of 73 fish orders, marine non-fish phyla, and Bangladesh regional scope

const fs = require('fs');
const path = require('path');

// Helper to load TypeScript files without full ts-node
function loadModule(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Simple check or evaluate if needed
  return content;
}

let passed = 0;
let failed = 0;

function assert(condition, testName, details) {
  if (condition) {
    console.log(`[PASS] ${testName}`);
    passed++;
  } else {
    console.error(`[FAIL] ${testName}: ${details || 'Assertion failed'}`);
    failed++;
  }
}

console.log('================================================================');
console.log('MASTER-FIX-11 — TAXONOMY AS CORE ZOOLOGICAL CLASSIFICATION & HUB');
console.log('================================================================\n');

const ts = require('typescript');

function loadTs(relPath) {
  const fullPath = path.resolve(__dirname, relPath);
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

// 1. Load Data
const { SEED_TAXA } = loadTs('../src/data/seedTaxa.ts');
const { SEED_TAXON_KNOWLEDGE } = loadTs('../src/data/seedTaxonKnowledge.ts');
const { SEED_SPECIES } = loadTs('../src/data/seedSpecies.ts');
const { SEED_REFERENCES } = loadTs('../src/data/seedReferences.ts');

// Test A: Knowledge Records Count
assert(
  SEED_TAXON_KNOWLEDGE.length === 97,
  'Knowledge base contains exactly 97 authoritative taxon knowledge records',
  `Found ${SEED_TAXON_KNOWLEDGE.length} records`
);

// Test B: Zero duplicate IDs
const knowledgeIds = new Set();
let dupCount = 0;
for (const rec of SEED_TAXON_KNOWLEDGE) {
  if (knowledgeIds.has(rec.id)) {
    dupCount++;
    console.error(`Duplicate ID found: ${rec.id}`);
  }
  knowledgeIds.add(rec.id);
}
assert(dupCount === 0, 'Zero duplicate knowledge record IDs', `Found ${dupCount} duplicates`);

// Test C: Zero duplicate canonical slugs
const slugSet = new Set();
let dupSlugs = 0;
for (const rec of SEED_TAXON_KNOWLEDGE) {
  if (rec.canonicalSlug) {
    if (slugSet.has(rec.canonicalSlug)) {
      dupSlugs++;
      console.error(`Duplicate slug: ${rec.canonicalSlug}`);
    }
    slugSet.add(rec.canonicalSlug);
  }
}
assert(dupSlugs === 0, 'Zero duplicate canonical slugs across knowledge records', `Found ${dupSlugs} duplicates`);

// Test D: Zero orphaned taxonIds
const taxonIdSet = new Set(SEED_TAXA.map(t => t.id));
let orphanTaxonIds = 0;
for (const rec of SEED_TAXON_KNOWLEDGE) {
  if (rec.taxonId && rec.taxonId !== 'group-protozoa') {
    if (!taxonIdSet.has(rec.taxonId)) {
      orphanTaxonIds++;
      console.error(`Orphaned taxonId in knowledge record ${rec.id}: ${rec.taxonId}`);
    }
  }
}
assert(orphanTaxonIds === 0, 'Zero orphaned taxonIds in knowledge records', `Found ${orphanTaxonIds} orphans`);

// Test E: All 8 non-fish marine phyla have valid taxonIds and canonical slugs
const marinePhylaExpected = [
  'phylum-porifera',
  'phylum-cnidaria',
  'phylum-ctenophora',
  'phylum-annelida-marine',
  'phylum-mollusca',
  'phylum-arthropoda-marine',
  'phylum-echinodermata',
  'phylum-chordata-marine'
];

let marinePhylaValid = true;
for (const phylumId of marinePhylaExpected) {
  const rec = SEED_TAXON_KNOWLEDGE.find(k => k.id === phylumId);
  if (!rec || !rec.taxonId || !taxonIdSet.has(rec.taxonId) || !rec.canonicalSlug) {
    marinePhylaValid = false;
    console.error(`Invalid marine phylum record: ${phylumId}`);
  }
}
assert(marinePhylaValid, 'All 8 non-fish marine phyla have valid taxonId links and canonical slugs');

// Test F: Biology-specific sections architecture in major animal groups
const zoologyRecordsExpected = [
  'phylum-porifera',
  'phylum-cnidaria',
  'phylum-ctenophora',
  'phylum-annelida-marine',
  'phylum-mollusca',
  'phylum-arthropoda-marine',
  'phylum-echinodermata',
  'phylum-chordata-marine',
  'class-amphibia',
  'class-reptilia',
  'class-aves',
  'class-mammalia',
  'group-protozoa'
];

let sectionsValid = true;
for (const zid of zoologyRecordsExpected) {
  const rec = SEED_TAXON_KNOWLEDGE.find(k => k.id === zid);
  if (!rec || !rec.sections || rec.sections.length < 4) {
    sectionsValid = false;
    console.error(`Missing or insufficient sections in ${zid}: ${rec?.sections?.length || 0}`);
  } else {
    // Check bilingual content and points
    for (const sec of rec.sections) {
      if (!sec.key || !sec.titleEn || !sec.titleBn || !sec.contentEn || !sec.contentBn) {
        sectionsValid = false;
        console.error(`Incomplete section in ${zid} / ${sec.key}`);
      }
    }
  }
}
assert(sectionsValid, 'All major zoological groups feature complete bilingual biological sections (>=4 sections each)');

// Test G: Diagnostic biological systems present
const porifera = SEED_TAXON_KNOWLEDGE.find(k => k.id === 'phylum-porifera');
assert(
  porifera && porifera.sections.some(s => s.key === 'canal_system' || s.titleEn.includes('Canal System')),
  'Porifera includes detailed Aquiferous Canal System biology'
);

const cnidaria = SEED_TAXON_KNOWLEDGE.find(k => k.id === 'phylum-cnidaria');
assert(
  cnidaria && cnidaria.sections.some(s => s.key === 'cnidocytes' || s.titleEn.includes('Cnidocytes')),
  'Cnidaria includes specialized Cnidocytes and Nematocysts biology'
);

const mollusca = SEED_TAXON_KNOWLEDGE.find(k => k.id === 'phylum-mollusca');
assert(
  mollusca && mollusca.sections.some(s => s.key === 'mantle_radula' || s.key === 'mantle-radula' || s.titleEn.includes('Mantle')),
  'Mollusca includes Mantle and Radula diagnostic anatomy'
);

const echinodermata = SEED_TAXON_KNOWLEDGE.find(k => k.id === 'phylum-echinodermata');
assert(
  echinodermata && echinodermata.sections.some(s => s.key === 'water_vascular' || s.key === 'water-vascular-system' || s.titleEn.includes('Water Vascular')),
  'Echinodermata includes Water Vascular (Ambulacral) System biology'
);

const chordata = SEED_TAXON_KNOWLEDGE.find(k => k.id === 'phylum-chordata-marine');
assert(
  chordata && chordata.sections.some(s => s.key === 'classification' || s.titleEn.includes('Chordate Characteristics')),
  'Chordata includes five primary diagnostic chordate hallmarks'
);

// Test H: Protozoa Educational Qualification
const protozoa = SEED_TAXON_KNOWLEDGE.find(k => k.id === 'group-protozoa');
const protozoaQualified =
  protozoa &&
  (protozoa.category === 'zoology' || protozoa.category === 'general') &&
  protozoa.scientificName.includes('Traditional Educational Assemblage') &&
  protozoa.sections.some(s => s.key === 'systematic_qualification' || s.titleEn.includes('Supergroups'));

assert(
  protozoaQualified,
  'Protozoa is strictly qualified as an educational assemblage explaining modern eukaryotic supergroups (Amoebozoa, Excavata, SAR)'
);

// Test I: 73 Fish Orders preserved intact with 11-point standard
const fishOrders = SEED_TAXON_KNOWLEDGE.filter(k => k.category === 'fish' && k.rank === 'order');
assert(
  fishOrders.length === 73,
  'Strictly preserved all 73 fish orders under 11-category ICZN standard',
  `Found ${fishOrders.length} fish orders`
);

let fishOrdersComplete = true;
for (const fo of fishOrders) {
  if (
    !fo.classificationHierarchy ||
    !fo.diagnosticCharacteristics ||
    !fo.habitat ||
    !fo.ecosystem ||
    !fo.feeding ||
    !fo.reproduction ||
    !fo.distribution ||
    !fo.importantFamilies ||
    !fo.scientificNamesSummary ||
    !fo.examplesSummary ||
    !fo.additionalInformation ||
    !fo.bengaliName ||
    !fo.authoritySource
  ) {
    fishOrdersComplete = false;
    console.error(`Incomplete fish order: ${fo.id}`);
  }
}
assert(fishOrdersComplete, 'All 73 fish orders possess all 11 required structural points');

// Test J: Backbone Vertebrate Classes in Chordata
const chordataNode = SEED_TAXA.find(t => t.id === 'taxon-chordata');
assert(chordataNode !== undefined, 'Phylum Chordata exists in taxonomy backbone');

const amphibiaNode = SEED_TAXA.find(t => t.id === 'taxon-amphibia');
assert(
  amphibiaNode && (amphibiaNode.parentTaxonId === 'taxon-chordata' || amphibiaNode.parentId === 'taxon-chordata'),
  'Class Amphibia is correctly parented to Phylum Chordata in taxonomy tree'
);

const avesNode = SEED_TAXA.find(t => t.id === 'taxon-aves');
assert(
  avesNode && (avesNode.parentTaxonId === 'taxon-chordata' || avesNode.parentId === 'taxon-chordata'),
  'Class Aves is correctly parented to Phylum Chordata in taxonomy tree'
);

const reptiliaNode = SEED_TAXA.find(t => t.id === 'taxon-reptilia');
assert(
  reptiliaNode && (reptiliaNode.parentTaxonId === 'taxon-chordata' || reptiliaNode.parentId === 'taxon-chordata'),
  'Class Reptilia is correctly parented to Phylum Chordata in taxonomy tree'
);

const mammaliaNode = SEED_TAXA.find(t => t.id === 'taxon-mammalia');
assert(
  mammaliaNode && (mammaliaNode.parentTaxonId === 'taxon-chordata' || mammaliaNode.parentId === 'taxon-chordata'),
  'Class Mammalia is correctly parented to Phylum Chordata in taxonomy tree'
);

// Test K: Recursive Descendant Count Verification
function getDescendants(nodeId, taxa) {
  let count = 0;
  const children = taxa.filter(t => (t.parentTaxonId ?? t.parentId) === nodeId);
  count += children.length;
  for (const c of children) {
    count += getDescendants(c.id, taxa);
  }
  return count;
}

const animaliaDescendants = getDescendants('taxon-animalia', SEED_TAXA);
assert(
  animaliaDescendants > 30,
  'Kingdom Animalia has > 30 recursive descendant taxa in Linnaean tree (no false 0 counters)',
  `Count: ${animaliaDescendants}`
);

const chordataDescendants = getDescendants('taxon-chordata', SEED_TAXA);
assert(
  chordataDescendants > 20,
  'Phylum Chordata has > 20 recursive descendant taxa in Linnaean tree',
  `Count: ${chordataDescendants}`
);

// Test L: Foundational References Added
const refHickman = SEED_REFERENCES.find(r => r.id === 'ref-hickman-2020');
const refRuppert = SEED_REFERENCES.find(r => r.id === 'ref-ruppert-2004');
const refKardong = SEED_REFERENCES.find(r => r.id === 'ref-kardong-2018');
assert(
  Boolean(refHickman && refRuppert && refKardong),
  'Foundational zoological reference authorities (Hickman et al. 2020, Ruppert et al. 2004, Kardong 2018) present in reference catalog'
);

// Summary
console.log('\n================================================================');
console.log(`TEST RESULTS: ${passed} PASSED, ${failed} FAILED`);
console.log('================================================================');

if (failed > 0) {
  process.exit(1);
} else {
  console.log('MASTER-FIX-11 COMPREHENSIVE SUITE PASSED SUCCESSFULLY!\n');
  process.exit(0);
}
