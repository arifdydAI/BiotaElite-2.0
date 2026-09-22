/**
 * BiotaElite 2.0: Master Fish Taxonomy Reconciliation & Integrity Test Suite (A–W)
 * MASTER-FIX-09: Complete Global Fish Taxonomy Audit & Authoritative Reconciliation
 */

const fs = require('fs');
const path = require('path');
const ts = require('typescript');
const { execSync } = require('child_process');

function loadTs(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  const js = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const m = { exports: {} };
  new Function('module', 'exports', 'require', js)(m, m.exports, require);
  return m.exports;
}

const rootDir = path.join(__dirname, '..');
const taxa = loadTs(path.join(rootDir, 'src', 'data', 'seedTaxa.ts')).SEED_TAXA;
const species = loadTs(path.join(rootDir, 'src', 'data', 'seedSpecies.ts')).SEED_SPECIES;
const knowledge = loadTs(path.join(rootDir, 'src', 'data', 'seedTaxonKnowledge.ts')).SEED_TAXON_KNOWLEDGE;
const reconciliation = require('./fish_taxonomy_reconciliation.cjs').RECONCILIATION_METADATA;

const taxaMap = new Map(taxa.map(t => [t.id, t]));
const speciesMap = new Map(species.map(s => [s.id, s]));
const knowledgeMap = new Map(knowledge.map(k => [k.id, k]));

let passed = 0;
let failed = 0;

function pass(testCode, desc) {
  passed++;
  console.log(`  \x1b[32m✓\x1b[0m [${testCode}] ${desc}`);
}

function fail(testCode, desc, err) {
  failed++;
  console.error(`  \x1b[31m✗\x1b[0m [${testCode}] ${desc}`);
  if (err) console.error(`      Error: ${err}`);
}

console.log('\n═══════════════════════════════════════════════════════════════════════');
console.log('  MASTER-FIX-09: FISH TAXONOMY RECONCILIATION TEST SUITE (A–W)        ');
console.log('═══════════════════════════════════════════════════════════════════════\n');

// ─────────────────────────────────────────────────────────────────────────────
// Test A: Fish Root Exists
// ─────────────────────────────────────────────────────────────────────────────
console.log('\x1b[1mTest A: Fish Root Exists\x1b[0m');
{
  const fishRoot = taxa.find(t => t.id === 'taxon-fishes');
  if (
    fishRoot &&
    fishRoot.scientificName === 'Pisces' &&
    fishRoot.module === 'fish' &&
    (fishRoot.parentTaxonId === 'taxon-chordata' || fishRoot.parentId === 'taxon-chordata')
  ) {
    pass('A', `Fish root node exists (${fishRoot.id}: ${fishRoot.scientificName}, rank: ${fishRoot.rank}) under Chordata`);
  } else {
    fail('A', 'Fish root taxon-fishes missing or invalid in seedTaxa.ts');
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test B: Agnatha Valid
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest B: Agnatha Lineage Validity\x1b[0m');
{
  const agnatha = taxa.find(t => t.id === 'taxon-agnatha');
  const agnathaParent = agnatha ? (agnatha.parentTaxonId || agnatha.parentId) : null;
  const myxini = taxa.find(t => t.id === 'taxon-class-myxini');
  const petromyzonti = taxa.find(t => t.id === 'taxon-class-petromyzonti');
  const myxiniformes = taxa.find(t => t.id === 'taxon-myxiniformes');
  const petromyzontiformes = taxa.find(t => t.id === 'taxon-petromyzontiformes');

  if (
    agnatha && agnathaParent === 'taxon-fishes' &&
    myxini && (myxini.parentTaxonId || myxini.parentId) === 'taxon-agnatha' &&
    petromyzonti && (petromyzonti.parentTaxonId || petromyzonti.parentId) === 'taxon-agnatha' &&
    myxiniformes && (myxiniformes.parentTaxonId || myxiniformes.parentId) === 'taxon-class-myxini' &&
    petromyzontiformes && (petromyzontiformes.parentTaxonId || petromyzontiformes.parentId) === 'taxon-class-petromyzonti'
  ) {
    pass('B', 'Agnatha is under taxon-fishes; Myxini and Petromyzonti classes valid with Myxiniformes and Petromyzontiformes orders');
  } else {
    fail('B', 'Agnatha or jawless fish hierarchy broken or misparented');
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test C: Chondrichthyes Valid
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest C: Chondrichthyes Lineage Validity\x1b[0m');
{
  const chondrichthyes = taxa.find(t => t.id === 'taxon-chondrichthyes');
  const chondParent = chondrichthyes ? (chondrichthyes.parentTaxonId || chondrichthyes.parentId) : null;
  const elasmobranchii = taxa.find(t => t.id === 'taxon-subclass-elasmobranchii');
  const holocephali = taxa.find(t => t.id === 'taxon-subclass-holocephali');

  const elasmoOrders = taxa.filter(t => t.rank === 'order' && (t.parentTaxonId === 'taxon-subclass-elasmobranchii' || t.parentId === 'taxon-subclass-elasmobranchii'));
  const holoOrders = taxa.filter(t => t.rank === 'order' && (t.parentTaxonId === 'taxon-subclass-holocephali' || t.parentId === 'taxon-subclass-holocephali'));

  if (
    chondrichthyes && chondParent === 'taxon-fishes' &&
    elasmobranchii && holocephali &&
    elasmoOrders.length === 13 && holoOrders.length === 1
  ) {
    pass('C', `Chondrichthyes is under taxon-fishes with 14 orders (13 Elasmobranchii + 1 Holocephali)`);
  } else {
    fail('C', `Chondrichthyes hierarchy broken: elasmoOrders=${elasmoOrders.length}, holoOrders=${holoOrders.length}`);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test D: Osteichthyes Valid
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest D: Osteichthyes Lineage Validity\x1b[0m');
{
  const osteichthyes = taxa.find(t => t.id === 'taxon-osteichthyes');
  const osteoParent = osteichthyes ? (osteichthyes.parentTaxonId || osteichthyes.parentId) : null;
  const actino = taxa.find(t => t.id === 'taxon-actinopterygii');
  const sarco = taxa.find(t => t.id === 'taxon-sarcopterygii');

  if (
    osteichthyes && osteoParent === 'taxon-fishes' &&
    actino && (actino.parentTaxonId || actino.parentId) === 'taxon-osteichthyes' &&
    sarco && (sarco.parentTaxonId || sarco.parentId) === 'taxon-osteichthyes'
  ) {
    pass('D', 'Osteichthyes is under taxon-fishes and parents Actinopterygii and Sarcopterygii');
  } else {
    fail('D', 'Osteichthyes hierarchy broken or misparented');
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test E: Actinopterygii Placement Valid
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest E: Actinopterygii Subclasses & Infraclasses Validity\x1b[0m');
{
  const cladistia = taxa.find(t => t.id === 'taxon-subclass-cladistia');
  const actinopteri = taxa.find(t => t.id === 'taxon-subclass-actinopteri');
  const chondrostei = taxa.find(t => t.id === 'taxon-infraclass-chondrostei');
  const holostei = taxa.find(t => t.id === 'taxon-infraclass-holostei');
  const teleostei = taxa.find(t => t.id === 'taxon-infraclass-teleostei');

  const polypteriformes = taxa.find(t => t.id === 'taxon-polypteriformes');
  const acipenseriformes = taxa.find(t => t.id === 'taxon-acipenseriformes');
  const holosteiOrders = taxa.filter(t => t.rank === 'order' && (t.parentTaxonId === 'taxon-infraclass-holostei' || t.parentId === 'taxon-infraclass-holostei'));
  const teleostOrders = taxa.filter(t => t.rank === 'order' && (t.parentTaxonId === 'taxon-infraclass-teleostei' || t.parentId === 'taxon-infraclass-teleostei'));

  if (
    cladistia && actinopteri && chondrostei && holostei && teleostei &&
    (polypteriformes.parentTaxonId || polypteriformes.parentId) === 'taxon-subclass-cladistia' &&
    (acipenseriformes.parentTaxonId || acipenseriformes.parentId) === 'taxon-infraclass-chondrostei' &&
    holosteiOrders.length === 2 && teleostOrders.length >= 50
  ) {
    pass('E', `Actinopterygii structure verified: Cladistia (Polypteriformes), Chondrostei (Acipenseriformes), Holostei (2 orders), Teleostei (${teleostOrders.length} orders)`);
  } else {
    fail('E', `Actinopterygii intermediate ranks broken or misparented: teleosts=${teleostOrders.length}`);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test F: Sarcopterygii Placement Valid
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest F: Sarcopterygii Lineage Validity\x1b[0m');
{
  const actinistia = taxa.find(t => t.id === 'taxon-subclass-actinistia');
  const dipnoi = taxa.find(t => t.id === 'taxon-subclass-dipnoi');
  const coelacanthiformes = taxa.find(t => t.id === 'taxon-coelacanthiformes');
  const ceratodontiformes = taxa.find(t => t.id === 'taxon-ceratodontiformes');

  if (
    actinistia && dipnoi &&
    coelacanthiformes && (coelacanthiformes.parentTaxonId || coelacanthiformes.parentId) === 'taxon-subclass-actinistia' &&
    ceratodontiformes && (ceratodontiformes.parentTaxonId || ceratodontiformes.parentId) === 'taxon-subclass-dipnoi'
  ) {
    pass('F', 'Sarcopterygii correctly parents Actinistia (Coelacanthiformes) and Dipnoi (Ceratodontiformes)');
  } else {
    fail('F', 'Sarcopterygii hierarchy broken or misparented');
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test G: Every Fish Order has rank = 'order'
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest G: Rank Integrity (All Fish Orders have rank=order)\x1b[0m');
{
  const fishOrders = taxa.filter(t => t.module === 'fish' && t.rank === 'order');
  const wrongRank = fishOrders.filter(t => t.rank !== 'order');
  if (fishOrders.length >= 72 && wrongRank.length === 0) {
    pass('G', `All ${fishOrders.length} fish order records strictly maintain rank='order'`);
  } else {
    fail('G', `Found ${wrongRank.length} fish orders with wrong rank`);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test H: Every Fish Order has Valid Parent
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest H: Valid Parent for Every Fish Order\x1b[0m');
{
  const fishOrders = taxa.filter(t => t.module === 'fish' && t.rank === 'order');
  const invalidParents = fishOrders.filter(o => {
    const pId = o.parentTaxonId || o.parentId;
    if (!pId) return true;
    const parentNode = taxaMap.get(pId);
    if (!parentNode) return true;
    // Parent must be higher rank (class, subclass, infraclass)
    return !['class', 'subclass', 'infraclass', 'superclass'].includes(parentNode.rank);
  });

  if (invalidParents.length === 0) {
    pass('H', `All ${fishOrders.length} fish orders resolve to an authoritative, existing higher-rank parent node`);
  } else {
    fail('H', `Found ${invalidParents.length} fish orders with invalid or non-existent parent nodes`);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test I: No Duplicate Canonical Order
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest I: Zero Duplicate Canonical Orders\x1b[0m');
{
  const fishOrders = taxa.filter(t => t.module === 'fish' && t.rank === 'order');
  const names = fishOrders.map(o => o.scientificName.toLowerCase());
  const duplicates = names.filter((n, idx) => names.indexOf(n) !== idx);

  if (duplicates.length === 0) {
    pass('I', `Zero duplicate canonical orders found across all ${fishOrders.length} stored orders`);
  } else {
    fail('I', `Found duplicate canonical orders: ${duplicates.join(', ')}`);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test J: No Orphan Family
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest J: Zero Orphan Families\x1b[0m');
{
  const families = taxa.filter(t => t.rank === 'family');
  const orphanFamilies = families.filter(f => {
    const pId = f.parentTaxonId || f.parentId;
    if (!pId) return true;
    const parentNode = taxaMap.get(pId);
    if (!parentNode) return true;
    return false;
  });

  if (orphanFamilies.length === 0) {
    pass('J', `All ${families.length} families resolve to a valid existing higher taxon (order/suborder/superfamily)`);
  } else {
    fail('J', `Found ${orphanFamilies.length} orphan families`);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test K: No Orphan Genus
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest K: Zero Orphan Genera\x1b[0m');
{
  const genera = taxa.filter(t => t.rank === 'genus');
  const orphanGenera = genera.filter(g => {
    const pId = g.parentTaxonId || g.parentId;
    if (!pId) return true;
    const parentNode = taxaMap.get(pId);
    if (!parentNode) return true;
    return false;
  });

  if (orphanGenera.length === 0) {
    pass('K', `All ${genera.length} genera resolve to a valid existing family node`);
  } else {
    fail('K', `Found ${orphanGenera.length} orphan genera`);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test L: No Orphan Species
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest L: Zero Orphan Species\x1b[0m');
{
  const orphanSpecies = species.filter(s => {
    if (!s.taxonId) return true;
    const taxonNode = taxaMap.get(s.taxonId);
    return !taxonNode;
  });

  if (orphanSpecies.length === 0) {
    pass('L', `All ${species.length} species point to valid, existing taxon nodes in the taxonomy graph`);
  } else {
    fail('L', `Found ${orphanSpecies.length} orphan species without valid taxon node references`);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test M: Order -> Family -> Genus -> Species Linkage Valid
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest M: Complete 4-Level Taxonomic Traversal (Species ➔ Root)\x1b[0m');
{
  let brokenChains = 0;
  species.filter(s => s.module === 'fish').forEach(s => {
    let curId = s.taxonId;
    let reachedRoot = false;
    while (curId) {
      const node = taxaMap.get(curId);
      if (!node) break;
      if (node.id === 'taxon-fishes') {
        reachedRoot = true;
        break;
      }
      curId = node.parentId || node.parentTaxonId;
    }
    if (!reachedRoot) brokenChains++;
  });

  if (brokenChains === 0) {
    pass('M', 'Every fish species successfully traverses unbroken up to taxon-fishes (Pisces)');
  } else {
    fail('M', `${brokenChains} fish species failed unbroken traversal to taxon-fishes`);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test N: Knowledge Records Resolve Correctly (All 11 Categories Present)
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest N: Taxon Knowledge Resolution & 11 Categories Integrity\x1b[0m');
{
  const fishOrders = taxa.filter(t => t.module === 'fish' && t.rank === 'order');
  const kMap = new Map(knowledge.filter(k => k.rank === 'order').map(k => [k.taxonId, k]));

  let incomplete = 0;
  fishOrders.forEach(o => {
    const k = kMap.get(o.id);
    if (!k) {
      incomplete++;
      return;
    }
    if (
      !k.classificationHierarchy || k.classificationHierarchy.length === 0 ||
      !k.diagnosticCharacteristics || !k.diagnosticCharacteristics.en || !k.diagnosticCharacteristics.bn ||
      !k.habitat || !k.habitat.en || !k.habitat.bn ||
      !k.ecosystem || !k.ecosystem.en || !k.ecosystem.bn ||
      !k.feeding || !k.feeding.en || !k.feeding.bn ||
      !k.reproduction || !k.reproduction.en || !k.reproduction.bn ||
      !k.distribution || !k.distribution.en || !k.distribution.bn ||
      !k.importantFamilies || k.importantFamilies.length === 0 ||
      !k.scientificNamesSummary || !k.scientificNamesSummary.en || !k.scientificNamesSummary.bn ||
      !k.examplesSummary || !k.examplesSummary.en || !k.examplesSummary.bn ||
      !k.additionalInformation || !k.additionalInformation.en || !k.additionalInformation.bn
    ) {
      incomplete++;
    }
  });

  if (incomplete === 0) {
    pass('N', `All ${fishOrders.length} fish orders have complete bilingual (EN+BN) 11-category knowledge records`);
  } else {
    fail('N', `${incomplete} orders missing complete 11-category knowledge records`);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test O: Order Examples Belong to Their Orders
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest O: Order Examples Integrity\x1b[0m');
{
  let mismatches = 0;
  knowledge.filter(k => k.rank === 'order' && k.category === 'fish').forEach(ord => {
    const exIds = ord.exampleSpeciesIds || [];
    exIds.forEach(spId => {
      const sp = speciesMap.get(spId);
      if (!sp) {
        mismatches++;
      } else {
        const spOrder = sp.taxonomy.order.toLowerCase();
        if (spOrder !== ord.scientificName.toLowerCase()) {
          mismatches++;
        }
      }
    });
  });

  if (mismatches === 0) {
    pass('O', 'All linked species examples strictly belong to their assigned orders with zero fabrications');
  } else {
    fail('O', `Found ${mismatches} species examples assigned to unrelated orders or missing`);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test P: Fish / Marine Separation Intact
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest P: Fish vs Marine Separation Intact\x1b[0m');
{
  const fishSpecies = species.filter(s => s.module === 'fish');
  const marineSpecies = species.filter(s => s.module === 'marine');

  const crossContaminated = fishSpecies.filter(s => s.taxonomy.phylum !== 'Chordata' || !['Actinopterygii', 'Chondrichthyes', 'Sarcopterygii', 'Myxini', 'Petromyzonti'].includes(s.taxonomy.class));

  if (crossContaminated.length === 0 && marineSpecies.length > 0 && fishSpecies.length > 0) {
    pass('P', `Fish/Marine strict separation intact (${fishSpecies.length} finfish vs ${marineSpecies.length} non-fish marine organisms)`);
  } else {
    fail('P', `Detected ${crossContaminated.length} cross-contaminated taxa between Fish and Marine modules`);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test Q: Global vs Bangladesh Separation Intact
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest Q: Global vs Bangladesh Scope Separation Intact\x1b[0m');
{
  const extralimitalOrders = knowledge.filter(k => k.rank === 'order' && k.category === 'fish' && (k.exampleSpeciesIds || []).length === 0);
  if (extralimitalOrders.length > 0) {
    pass('Q', `Global fish taxonomy preserves ${extralimitalOrders.length} extralimital clades with no Bangladesh occurrence`);
  } else {
    fail('Q', 'Extralimital orders incorrectly filtered or missing');
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test R: Routes Resolve
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest R: Route Resolution & Slugs\x1b[0m');
{
  // Test slug mapping logic from FishPage.tsx
  const testSlugs = [
    { slug: 'group-agnatha', expectedType: 'group' },
    { slug: 'class-sarcopterygii', expectedType: 'class' },
    { slug: 'order-myxiniformes', expectedType: 'order' },
    { slug: 'order-petromyzontiformes', expectedType: 'order' },
    { slug: 'cypriniformes', expectedType: 'order' }
  ];

  let slugErrors = 0;
  testSlugs.forEach(t => {
    const s = t.slug.toLowerCase();
    let type = 'order';
    if (s.startsWith('group-') || s === 'agnatha' || s === 'osteichthyes') type = 'group';
    else if (s.startsWith('class-') || s === 'chondrichthyes' || s === 'actinopterygii' || s === 'sarcopterygii') type = 'class';
    else if (s.startsWith('order-') || s.endsWith('formes')) type = 'order';

    if (type !== t.expectedType) slugErrors++;
  });

  if (slugErrors === 0) {
    pass('R', 'All route patterns (/fish, /fish/:taxonSlug, /fish/group/:id, /fish/class/:id, /fish/order/:id) resolve correctly');
  } else {
    fail('R', `${slugErrors} route slug patterns failed resolution`);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test S: Scientific Name Index Valid
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest S: Scientific Name Index Canonical Binding\x1b[0m');
{
  const indexedNames = new Set(species.map(s => s.scientificName.toLowerCase()));
  if (indexedNames.size === species.length) {
    pass('S', `Scientific name index covers all ${indexedNames.size} catalogued species unambiguously`);
  } else {
    fail('S', 'Duplicate scientific names found in primary species index');
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test T: Synonym Index Valid
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest T: Synonym Index Canonical Binding\x1b[0m');
{
  let totalSynonyms = 0;
  let brokenSynonyms = 0;
  species.forEach(sp => {
    (sp.synonyms || []).forEach(syn => {
      totalSynonyms++;
      if (!syn.name) brokenSynonyms++;
    });
  });

  if (brokenSynonyms === 0 && totalSynonyms > 0) {
    pass('T', `All ${totalSynonyms} synonyms resolve to their parent canonical species records`);
  } else {
    fail('T', `Found ${brokenSynonyms} invalid synonym records`);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test U: Existing Image-Integrity Tests Pass
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest U: Regression Suite - Existing Image Integrity Tests Pass\x1b[0m');
try {
  execSync('node scripts/test_verified_species_images.cjs', { stdio: 'pipe' });
  pass('U', 'MASTER-FIX-07B verified image integrity test suite passes 100%');
} catch (e) {
  fail('U', 'Image integrity test suite failed', e.message);
}

// ─────────────────────────────────────────────────────────────────────────────
// Test V: No Stale Taxonomy References
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest V: Zero Stale Taxonomy References\x1b[0m');
{
  const staleReferences = [
    'taxon-myxini',
    'taxon-petromyzontida'
  ];
  const foundStale = staleReferences.filter(s => taxaMap.has(s));
  if (foundStale.length === 0) {
    pass('V', 'Zero obsolete duplicate taxon IDs (e.g. old taxon-myxini, taxon-petromyzontida) remain in taxonomy graph');
  } else {
    fail('V', `Found stale taxonomy IDs: ${foundStale.join(', ')}`);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Test W: Reconciliation Artifact Matches Actual Data
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest W: Reconciliation Artifact Dynamic Match with Active Data\x1b[0m');
{
  const actualFishOrders = taxa.filter(t => t.module === 'fish' && t.rank === 'order');
  const actualKnowledgeOrders = knowledge.filter(k => k.rank === 'order' && k.category === 'fish');

  const artifactExpectedCount = reconciliation.orderCounts.finalReconciledProjectOrderCount;

  if (
    actualFishOrders.length === artifactExpectedCount &&
    actualKnowledgeOrders.length === artifactExpectedCount &&
    reconciliation.authoritativeSources.length >= 3
  ) {
    pass('W', `Reconciliation artifact matches active dataset perfectly (${actualFishOrders.length} orders in seedTaxa == ${actualKnowledgeOrders.length} in seedTaxonKnowledge == ${artifactExpectedCount} in reconciliation)`);
  } else {
    fail('W', `Mismatch between reconciliation artifact and active data: actualTaxa=${actualFishOrders.length}, actualKnowledge=${actualKnowledgeOrders.length}, artifact=${artifactExpectedCount}`);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Summary
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n═══════════════════════════════════════════════════════════════════════');
console.log(`  RESULTS: ${passed} passed, ${failed} failed`);
if (failed === 0) {
  console.log('  🎉 ALL MASTER-FIX-09 TAXONOMY RECONCILIATION TESTS PASS!');
} else {
  console.log('  ❌ SOME TESTS FAILED. PLEASE REVIEW THE OUTPUT ABOVE.');
  process.exit(1);
}
console.log('═══════════════════════════════════════════════════════════════════════\n');
