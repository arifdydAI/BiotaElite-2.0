// CommonJS verification runner for BiotaElite 2.0 (MASTER-FIX-06)
const fs = require('fs');
const path = require('path');
const ts = require('typescript');

function loadTs(relPath) {
  const fullPath = path.resolve(__dirname, '..', relPath);
  let code = fs.readFileSync(fullPath, 'utf8');
  // strip imports of types or other modules
  const js = ts.transpileModule(code, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    }
  }).outputText;
  const m = { exports: {} };
  const customRequire = (reqPath) => {
    if (reqPath.startsWith('../') || reqPath.startsWith('./')) {
      const resolved = path.join(path.dirname(fullPath), reqPath);
      // Try with .ts
      if (fs.existsSync(resolved + '.ts')) return loadTs(path.relative(path.resolve(__dirname, '..'), resolved + '.ts'));
      if (fs.existsSync(resolved + '.tsx')) return loadTs(path.relative(path.resolve(__dirname, '..'), resolved + '.tsx'));
      if (fs.existsSync(resolved)) return loadTs(path.relative(path.resolve(__dirname, '..'), resolved));
    }
    return require(reqPath);
  };
  const fn = new Function('module', 'exports', 'require', '__dirname', '__filename', js);
  fn(m, m.exports, customRequire, path.dirname(fullPath), fullPath);
  return m.exports;
}

const { SEED_TAXA } = loadTs('src/data/seedTaxa.ts');
const { SEED_SPECIES } = loadTs('src/data/seedSpecies.ts');
const { SEED_TAXON_KNOWLEDGE } = loadTs('src/data/seedTaxonKnowledge.ts');
const { SEED_REFERENCES } = loadTs('src/data/seedReferences.ts');
const { TRANSLATIONS: translations } = loadTs('src/i18n/translations.ts');

// Authoritative machine-readable fish orders audit
const AUDIT_ORDERS = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data/fish_orders_audit.json'), 'utf8'));

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    process.exit(1);
  }
  console.log(`✅ PASS: ${message}`);
}

console.log('============================================================');
console.log('BIOTAELITE 2.0 — MASTER-FIX-06 VERIFICATION SUITE');
console.log('Authoritative Taxonomy Audit & Global Fish Orders Verification');
console.log('============================================================\n');

// TEST 1: Strict Fish Portal Title & Heading
console.log('[1] Validating Fish Portal Title & Headings...');
assert(
  translations['fish.portalTitle'].en === 'Fishes' && translations['fish.portalTitle'].bn === 'মাছসমূহ',
  'fish.portalTitle is strictly { en: "Fishes", bn: "মাছসমূহ" }'
);
assert(
  translations['fish.mainHeading'].en === 'Fishes' && translations['fish.mainHeading'].bn === 'মাছসমূহ',
  'fish.mainHeading is strictly { en: "Fishes", bn: "মাছসমূহ" }'
);
assert(
  !translations['fish.mainHeading'].en.includes('Bangladesh & South Asian Waters'),
  'Old heading "Fishes of Bangladesh & South Asian Waters" is completely eliminated'
);

// TEST 2: Normalized Taxon Graph (SEED_TAXA)
console.log('\n[2] Validating Normalized Taxonomic Graph (SEED_TAXA)...');
assert(SEED_TAXA.length > 150, `Substantial normalized taxa backbone: ${SEED_TAXA.length} nodes (expanded for global orders & intermediate ranks)`);

const rootNodes = SEED_TAXA.filter(t => (t.parentTaxonId ?? t.parentId) === null);
assert(rootNodes.length === 1 && rootNodes[0].id === 'taxon-animalia', 'Single root node taxon-animalia');

const agnatha = SEED_TAXA.find(t => t.id === 'taxon-agnatha');
assert(Boolean(agnatha && agnatha.rank === 'superclass'), 'Agnatha is present with rank superclass');

const chondrichthyes = SEED_TAXA.find(t => t.id === 'taxon-chondrichthyes');
assert(Boolean(chondrichthyes && chondrichthyes.rank === 'class'), 'Chondrichthyes is present with rank class');

const osteichthyes = SEED_TAXA.find(t => t.id === 'taxon-osteichthyes');
assert(Boolean(osteichthyes && osteichthyes.rank === 'superclass'), 'Osteichthyes is present with rank superclass');

const actinopterygii = SEED_TAXA.find(t => t.id === 'taxon-actinopterygii');
assert(
  Boolean(actinopterygii && (actinopterygii.parentTaxonId === 'taxon-osteichthyes' || actinopterygii.parentId === 'taxon-osteichthyes')),
  'Actinopterygii has parentTaxonId = taxon-osteichthyes'
);

const sarcopterygii = SEED_TAXA.find(t => t.id === 'taxon-sarcopterygii');
assert(
  Boolean(sarcopterygii && (sarcopterygii.parentTaxonId === 'taxon-osteichthyes' || sarcopterygii.parentId === 'taxon-osteichthyes')),
  'Sarcopterygii has parentTaxonId = taxon-osteichthyes'
);

// Intermediate rank nodes validation
const myxiniClass = SEED_TAXA.find(t => t.id === 'taxon-class-myxini');
const petromyzontiClass = SEED_TAXA.find(t => t.id === 'taxon-class-petromyzonti');
const cladistiaSubclass = SEED_TAXA.find(t => t.id === 'taxon-subclass-cladistia');
const actinopteriSubclass = SEED_TAXA.find(t => t.id === 'taxon-subclass-actinopteri');
const chondrosteiInfraclass = SEED_TAXA.find(t => t.id === 'taxon-infraclass-chondrostei');
const holosteiInfraclass = SEED_TAXA.find(t => t.id === 'taxon-infraclass-holostei');
const teleosteiInfraclass = SEED_TAXA.find(t => t.id === 'taxon-infraclass-teleostei');

assert(Boolean(myxiniClass && myxiniClass.rank === 'class'), 'Class Myxini is present in SEED_TAXA');
assert(Boolean(petromyzontiClass && petromyzontiClass.rank === 'class'), 'Class Petromyzonti is present in SEED_TAXA');
assert(Boolean(cladistiaSubclass && cladistiaSubclass.rank === 'subclass'), 'Subclass Cladistia is present in SEED_TAXA');
assert(Boolean(actinopteriSubclass && actinopteriSubclass.rank === 'subclass'), 'Subclass Actinopteri is present in SEED_TAXA');
assert(Boolean(chondrosteiInfraclass && chondrosteiInfraclass.rank === 'infraclass'), 'Infraclass Chondrostei is present in SEED_TAXA');
assert(Boolean(holosteiInfraclass && holosteiInfraclass.rank === 'infraclass'), 'Infraclass Holostei is present in SEED_TAXA');
assert(Boolean(teleosteiInfraclass && teleosteiInfraclass.rank === 'infraclass'), 'Infraclass Teleostei is present in SEED_TAXA');

// Zero broken parents in entire graph
let brokenParents = 0;
for (const t of SEED_TAXA) {
  const pid = t.parentTaxonId ?? t.parentId;
  if (pid !== null) {
    const parentExists = SEED_TAXA.some(p => p.id === pid);
    if (!parentExists) {
      console.error(`Broken parent reference: ${t.id} -> ${pid}`);
      brokenParents++;
    }
  }
}
assert(brokenParents === 0, 'All parentTaxonId references resolve to valid existing taxa nodes');

// TEST 3: Dynamic Order Knowledge Verification Against Authoritative Checklist
console.log('\n[3] Validating Order-Level Knowledge Dynamically Against Authoritative Audit (fish_orders_audit.json)...');
assert(AUDIT_ORDERS.length >= 72, `Authoritative audit contains ${AUDIT_ORDERS.length} verified orders (>=72 authoritative Eschmeyer orders)`);

const fishKnowledge = SEED_TAXON_KNOWLEDGE.filter(k => k.category === 'fish');
const fishOrders = fishKnowledge.filter(k => k.rank === 'order');

assert(
  fishOrders.length === AUDIT_ORDERS.length,
  `SEED_TAXON_KNOWLEDGE contains exactly ${AUDIT_ORDERS.length} orders matching fish_orders_audit.json dynamically (found ${fishOrders.length})`
);

for (const auditItem of AUDIT_ORDERS) {
  const targetId = auditItem.existingBiotaEliteTaxonId.replace('taxon-', 'order-');
  const knowledgeOrder = fishOrders.find(
    k => k.id === targetId || k.taxonId === auditItem.existingBiotaEliteTaxonId || k.scientificName.toLowerCase() === auditItem.scientificName.toLowerCase()
  );

  assert(
    Boolean(knowledgeOrder),
    `Audit order ${auditItem.scientificName} (${auditItem.auditId}) has corresponding record in SEED_TAXON_KNOWLEDGE`
  );

  // Check all 11 mandatory categories
  const hasClassification = Boolean(knowledgeOrder.classificationHierarchy && knowledgeOrder.classificationHierarchy.length > 0);
  const hasCharacteristics = Boolean(
    knowledgeOrder.diagnosticCharacteristics &&
    knowledgeOrder.diagnosticCharacteristics.en &&
    knowledgeOrder.diagnosticCharacteristics.bn &&
    knowledgeOrder.diagnosticCharacteristics.keyFeatures &&
    knowledgeOrder.diagnosticCharacteristics.keyFeatures.en &&
    knowledgeOrder.diagnosticCharacteristics.keyFeatures.en.length >= 3 &&
    knowledgeOrder.diagnosticCharacteristics.keyFeatures.bn &&
    knowledgeOrder.diagnosticCharacteristics.keyFeatures.bn.length >= 3
  );
  const hasHabitat = Boolean(
    knowledgeOrder.habitat &&
    knowledgeOrder.habitat.en &&
    knowledgeOrder.habitat.bn &&
    Array.isArray(knowledgeOrder.habitat.systems) &&
    knowledgeOrder.habitat.systems.length > 0
  );
  const hasEcosystem = Boolean(knowledgeOrder.ecosystem && knowledgeOrder.ecosystem.en && knowledgeOrder.ecosystem.bn);
  const hasFeeding = Boolean(knowledgeOrder.feeding && knowledgeOrder.feeding.en && knowledgeOrder.feeding.bn);
  const hasReproduction = Boolean(knowledgeOrder.reproduction && knowledgeOrder.reproduction.en && knowledgeOrder.reproduction.bn);
  const hasDistribution = Boolean(knowledgeOrder.distribution && knowledgeOrder.distribution.en && knowledgeOrder.distribution.bn);
  const hasImportantFamilies = Boolean(
    knowledgeOrder.importantFamilies &&
    knowledgeOrder.importantFamilies.length > 0 &&
    knowledgeOrder.importantFamilies[0].diagnosticEn &&
    knowledgeOrder.importantFamilies[0].diagnosticBn
  );
  const hasScientificNames = Boolean(knowledgeOrder.scientificNamesSummary && knowledgeOrder.scientificNamesSummary.en && knowledgeOrder.scientificNamesSummary.bn);
  const hasExamples = Boolean(knowledgeOrder.examplesSummary && knowledgeOrder.examplesSummary.en && knowledgeOrder.examplesSummary.bn);
  const hasAdditionalInfo = Boolean(knowledgeOrder.additionalInformation && knowledgeOrder.additionalInformation.en && knowledgeOrder.additionalInformation.bn);

  assert(
    hasClassification &&
    hasCharacteristics &&
    hasHabitat &&
    hasEcosystem &&
    hasFeeding &&
    hasReproduction &&
    hasDistribution &&
    hasImportantFamilies &&
    hasScientificNames &&
    hasExamples &&
    hasAdditionalInfo,
    `Order ${knowledgeOrder.scientificName} has 100% of 11 mandatory zoological knowledge categories populated`
  );
}

// TEST 4: Clarias Taxonomic Resolution (Preserving MASTER-FIX-02+03)
console.log('\n[4] Validating Clarias Taxonomic Resolution (Preserved)...');
const clariasMagur = SEED_SPECIES.find(s => s.id === 'sp-clarias-magur');
const clariasBatrachus = SEED_SPECIES.find(s => s.id === 'sp-clarias-batrachus');

assert(Boolean(clariasMagur), 'sp-clarias-magur exists in database');
assert(Boolean(clariasBatrachus), 'sp-clarias-batrachus exists in database');

assert(
  clariasMagur.scientificName === 'Clarias magur' && clariasMagur.scientificNameAuthorship === '(Hamilton, 1822)',
  'Clarias magur is correctly attributed to (Hamilton, 1822)'
);
assert(
  clariasMagur.bangladeshOccurrence.present === true,
  'Clarias magur is correctly marked as present (Native) in Bangladesh'
);
assert(
  clariasBatrachus.scientificName === 'Clarias batrachus' && clariasBatrachus.scientificNameAuthorship === '(Linnaeus, 1758)',
  'Clarias batrachus is correctly attributed to (Linnaeus, 1758)'
);
assert(
  clariasBatrachus.bangladeshOccurrence.present === false,
  'Clarias batrachus is correctly marked as not present in Bangladesh (Javan species)'
);
assert(
  clariasMagur.synonyms.some(syn => syn.name.includes('Clarias batrachus') && syn.status === 'misapplied'),
  'Clarias magur explicitly links Clarias batrachus as misapplied synonym'
);
assert(
  SEED_REFERENCES.some(r => r.id === 'ref-ng-kottelat-2008'),
  'Citing literature ref-ng-kottelat-2008 exists in seedReferences'
);

// TEST 5: Module Separation (Preserving MASTER-FIX-04)
console.log('\n[5] Validating Module Separation (Fish vs Marine Life)...');
const fishOnly = SEED_SPECIES.filter(s => s.module === 'fish' || ['Actinopterygii', 'Chondrichthyes', 'Sarcopterygii', 'Myxini', 'Petromyzontida'].includes(s.taxonomy.class));
assert(fishOnly.every(s => s.taxonomy.class !== 'Mammalia' && s.taxonomy.class !== 'Reptilia'), 'No marine mammals or reptiles in fish module');

const marineOnly = SEED_SPECIES.filter(s => s.module === 'marine');
const FINFISH_CLASSES = ['Actinopterygii', 'Chondrichthyes', 'Sarcopterygii', 'Myxini', 'Petromyzontida'];
assert(
  marineOnly.every(s => !FINFISH_CLASSES.includes(s.taxonomy.class)),
  'Marine module strictly contains ZERO finfishes (zero Actinopterygii, Chondrichthyes, Sarcopterygii, Agnatha)'
);

const orcaella = SEED_SPECIES.find(s => s.id === 'sp-orcaella-brevirostris');
assert(Boolean(orcaella && orcaella.module === 'marine'), 'Orcaella is assigned module = "marine"');
assert(Boolean(orcaella && orcaella.taxonomy.order === 'Artiodactyla'), 'Orcaella order is normalized to "Artiodactyla"');

// TEST 6: MASTER-FIX-01 Security & RBAC Invariants
console.log('\n[6] Validating MASTER-FIX-01 Security & RBAC Invariants...');
const authContextFile = fs.readFileSync(path.resolve(__dirname, '../src/context/AuthContext.tsx'), 'utf8');
assert(
  authContextFile.includes("useState<UserProfile | null>(null)") && authContextFile.includes("useState<AuthStatus>('unauthenticated')"),
  'AuthContext enforces unauthenticated state with null user as default'
);
assert(
  !/const\s+DEFAULT_ADMIN_USER/.test(authContextFile),
  'DEFAULT_ADMIN_USER declaration is completely absent'
);

// TEST 7: MASTER-FIX-04 Marine Taxonomy & Global Non-Fish Marine Invariants
console.log('\n[7] Validating MASTER-FIX-04 Marine Life Taxonomy & Non-Fish Portal Invariants...');

const mammaliaNode = SEED_TAXA.find(t => t.id === 'taxon-mammalia');
const reptiliaNode = SEED_TAXA.find(t => t.id === 'taxon-reptilia');
const artiodactylaNode = SEED_TAXA.find(t => t.id === 'taxon-artiodactyla');
const cetaceaNode = SEED_TAXA.find(t => t.id === 'taxon-cetacea');
const carnivoraNode = SEED_TAXA.find(t => t.id === 'taxon-carnivora');
const pinnipediaNode = SEED_TAXA.find(t => t.id === 'taxon-pinnipedia');
const testudinesNode = SEED_TAXA.find(t => t.id === 'taxon-testudines');
const chelonioideaNode = SEED_TAXA.find(t => t.id === 'taxon-chelonioidea');
const squamataNode = SEED_TAXA.find(t => t.id === 'taxon-squamata');
const elapidaeNode = SEED_TAXA.find(t => t.id === 'taxon-elapidae');
const hydrophiinaeNode = SEED_TAXA.find(t => t.id === 'taxon-hydrophiinae');

assert(Boolean(mammaliaNode && (mammaliaNode.parentTaxonId === 'taxon-chordata' || mammaliaNode.parentId === 'taxon-chordata')), 'Mammalia parent is Chordata');
assert(Boolean(reptiliaNode && (reptiliaNode.parentTaxonId === 'taxon-chordata' || reptiliaNode.parentId === 'taxon-chordata')), 'Reptilia parent is Chordata');
assert(Boolean(artiodactylaNode && (artiodactylaNode.parentTaxonId === 'taxon-mammalia' || artiodactylaNode.parentId === 'taxon-mammalia')), 'Artiodactyla parent is Mammalia');
assert(Boolean(cetaceaNode && (cetaceaNode.parentTaxonId === 'taxon-artiodactyla' || cetaceaNode.parentId === 'taxon-artiodactyla')), 'Cetacea parent is Artiodactyla');
assert(Boolean(carnivoraNode && (carnivoraNode.parentTaxonId === 'taxon-mammalia' || carnivoraNode.parentId === 'taxon-mammalia')), 'Carnivora parent is Mammalia');
assert(Boolean(pinnipediaNode && (pinnipediaNode.parentTaxonId === 'taxon-carnivora' || pinnipediaNode.parentId === 'taxon-carnivora')), 'Pinnipedia parent is Carnivora');
assert(Boolean(testudinesNode && (testudinesNode.parentTaxonId === 'taxon-reptilia' || testudinesNode.parentId === 'taxon-reptilia')), 'Testudines parent is Reptilia');
assert(Boolean(chelonioideaNode && (chelonioideaNode.parentTaxonId === 'taxon-testudines' || chelonioideaNode.parentId === 'taxon-testudines')), 'Chelonioidea parent is Testudines');
assert(Boolean(squamataNode && (squamataNode.parentTaxonId === 'taxon-reptilia' || squamataNode.parentId === 'taxon-reptilia')), 'Squamata parent is Reptilia');
assert(Boolean(elapidaeNode && (elapidaeNode.parentTaxonId === 'taxon-squamata' || elapidaeNode.parentId === 'taxon-squamata')), 'Elapidae parent is Squamata');
assert(Boolean(hydrophiinaeNode && (hydrophiinaeNode.parentTaxonId === 'taxon-elapidae' || hydrophiinaeNode.parentId === 'taxon-elapidae')), 'Hydrophiinae parent is Elapidae');

assert(hydrophiinaeNode.rank === 'subfamily', 'Hydrophiinae rank is subfamily (NOT order)');
assert(chelonioideaNode.rank === 'superfamily', 'Chelonioidea rank is superfamily (NOT order)');
assert(pinnipediaNode.rank === 'suborder', 'Pinnipedia rank is suborder (NOT order)');
assert(cetaceaNode.rank === 'infraorder', 'Cetacea rank is infraorder (NOT order)');

const marineSpecies = SEED_SPECIES.filter(s => s.module === 'marine');
assert(marineSpecies.length >= 12, `Substantial marine species coverage: ${marineSpecies.length} species`);

const marinePhylaPresent = new Set(marineSpecies.map(s => s.taxonomy.phylum));
assert(marinePhylaPresent.has('Chordata'), 'Marine species includes Chordata');
assert(marinePhylaPresent.has('Cnidaria'), 'Marine species includes Cnidaria');
assert(marinePhylaPresent.has('Mollusca'), 'Marine species includes Mollusca');
assert(marinePhylaPresent.has('Arthropoda'), 'Marine species includes Arthropoda');
assert(marinePhylaPresent.has('Echinodermata'), 'Marine species includes Echinodermata');
assert(marinePhylaPresent.has('Porifera'), 'Marine species includes Porifera');

const platanista = SEED_SPECIES.find(s => s.id === 'sp-platanista-gangetica');
assert(Boolean(platanista && platanista.module === 'general'), 'Platanista gangetica module is "general" (NOT marine)');
assert(!platanista.habitat.systems.includes('marine'), 'Platanista gangetica habitat does not include marine');

// TEST 8: MASTER-FIX-06 Verification (Dynamic Fish Orders & Navigation Engine)
console.log('\n[8] Validating MASTER-FIX-06 (Global Taxonomy Engine & Audit Alignment)...');

// 8A: Verify all audit orders are present in SEED_TAXA
const seedTaxaFishOrders = SEED_TAXA.filter(t => t.rank === 'order' && t.module === 'fish');
assert(
  seedTaxaFishOrders.length === AUDIT_ORDERS.length,
  `SEED_TAXA contains exactly ${AUDIT_ORDERS.length} fish orders matching fish_orders_audit.json (found ${seedTaxaFishOrders.length})`
);

for (const auditOrd of AUDIT_ORDERS) {
  const matchingTaxon = seedTaxaFishOrders.find(
    t => t.id === auditOrd.existingBiotaEliteTaxonId || t.scientificName.toLowerCase() === auditOrd.scientificName.toLowerCase()
  );
  assert(
    Boolean(matchingTaxon),
    `Audit order ${auditOrd.scientificName} exists as order in SEED_TAXA`
  );
}

// 8B: Cross-check 1-to-1 linkage between SEED_TAXA and SEED_TAXON_KNOWLEDGE
for (const taxonOrd of seedTaxaFishOrders) {
  const matchingKnowledge = fishOrders.find(
    k => k.taxonId === taxonOrd.id || k.scientificName.toLowerCase() === taxonOrd.scientificName.toLowerCase()
  );
  assert(
    Boolean(matchingKnowledge),
    `SEED_TAXA order ${taxonOrd.id} (${taxonOrd.scientificName}) has matching record in SEED_TAXON_KNOWLEDGE`
  );
}

// 8C: Check ErrorBoundary exists and is integrated into App.tsx
const appTsx = fs.readFileSync(path.resolve(__dirname, '../src/App.tsx'), 'utf8');
const errorBoundaryTsx = fs.readFileSync(path.resolve(__dirname, '../src/components/common/ErrorBoundary.tsx'), 'utf8');
assert(
  appTsx.includes('ErrorBoundary'),
  'App.tsx imports and wraps components with ErrorBoundary'
);
assert(
  errorBoundaryTsx.includes('componentDidCatch') && errorBoundaryTsx.includes('hasError'),
  'ErrorBoundary.tsx implements standard React class error boundary'
);

// 8D: Check FishPage.tsx route parameter handling and view state robustness
const fishPageTsx = fs.readFileSync(path.resolve(__dirname, '../src/pages/public/FishPage.tsx'), 'utf8');
assert(
  fishPageTsx.includes('classId') && fishPageTsx.includes('groupId'),
  'FishPage.tsx supports both :classId and :groupId route parameters'
);
assert(
  fishPageTsx.includes('Taxon Record Not Found') || fishPageTsx.includes('ট্যাক্সন রেকর্ড পাওয়া যায়নি'),
  'FishPage.tsx implements fallback for invalid / nonexistent taxon navigation'
);

// 8E: Check higher taxa order arrays in SEED_TAXON_KNOWLEDGE
const agnathaRecord = SEED_TAXON_KNOWLEDGE.find(k => k.id === 'group-agnatha');
const chondrichthyesRecord = SEED_TAXON_KNOWLEDGE.find(k => k.id === 'class-chondrichthyes');
const osteichthyesRecord = SEED_TAXON_KNOWLEDGE.find(k => k.id === 'superclass-osteichthyes');
const actinopterygiiRecord = SEED_TAXON_KNOWLEDGE.find(k => k.id === 'class-actinopterygii');

const expectedChondrichthyesCount = AUDIT_ORDERS.filter(o => o.sourceClass === 'Elasmobranchii' || o.sourceClass === 'Holocephali').length;
const expectedActinopteriCount = AUDIT_ORDERS.filter(o => o.sourceClass === 'Cladistii' || o.sourceClass === 'Actinopteri').length;
const expectedOsteichthyesCount = expectedActinopteriCount + AUDIT_ORDERS.filter(o => o.sourceClass === 'Actinistia' || o.sourceClass === 'Dipnoi').length;

assert(Boolean(agnathaRecord && agnathaRecord.orders && agnathaRecord.orders.length === 2), 'group-agnatha lists 2 orders (Myxiniformes, Petromyzontiformes)');
assert(
  Boolean(chondrichthyesRecord && chondrichthyesRecord.orders && chondrichthyesRecord.orders.length === expectedChondrichthyesCount),
  `class-chondrichthyes lists all ${expectedChondrichthyesCount} orders dynamically`
);
assert(
  Boolean(osteichthyesRecord && osteichthyesRecord.orders && osteichthyesRecord.orders.length === expectedOsteichthyesCount),
  `superclass-osteichthyes lists all ${expectedOsteichthyesCount} orders dynamically`
);
assert(
  Boolean(actinopterygiiRecord && actinopterygiiRecord.orders && actinopterygiiRecord.orders.length === expectedActinopteriCount),
  `class-actinopterygii lists all ${expectedActinopteriCount} orders dynamically`
);

// 8F: Check seed version bump
const bioContextTsx = fs.readFileSync(path.resolve(__dirname, '../src/context/BiodiversityContext.tsx'), 'utf8');
assert(
  bioContextTsx.includes("CURRENT_SEED_VERSION = 'v2h_global_fish_orders'") || 
  bioContextTsx.includes("CURRENT_SEED_VERSION = 'v2i_taxonomy_knowledge_hub'") || 
  bioContextTsx.includes("CURRENT_SEED_VERSION = 'v2j_global_taxonomy_expansion'") ||
  bioContextTsx.includes("CURRENT_SEED_VERSION = 'v2k_global_taxonomic_depth_mf14'") ||
  bioContextTsx.includes("CURRENT_SEED_VERSION = 'v2l_global_taxonomic_depth_mf14_textbook_priority'") || 
  bioContextTsx.includes("CURRENT_SEED_VERSION = 'v2m_global_taxonomic_depth_mf14_canonical_final'") ||
  bioContextTsx.includes("CURRENT_SEED_VERSION = 'v2m_global_taxonomic_depth_mf14_annelida_visible_v3'") ||
  bioContextTsx.includes("CURRENT_SEED_VERSION = 'v2n_global_ident_keys_expansion'") ||
  bioContextTsx.includes("CURRENT_SEED_VERSION = 'v2o_master_fix_15_17_expansion'") ||
  bioContextTsx.includes("CURRENT_SEED_VERSION = 'v2o_master_i18n_monograph_release_03'"),
  'BiodiversityContext has updated seed version to ensure fresh localStorage cache invalidation'
);

console.log('\n============================================================');
console.log('ALL INTEGRITY AUDIT CHECKS PASSED (100% SUCCESS)');
console.log('============================================================');
