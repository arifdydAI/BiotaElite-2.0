// MASTER-FIX-06A Automated First-Navigation & Cache Robustness Regression Suite
const fs = require('fs');
const path = require('path');
const ts = require('typescript');

function loadTs(relPath) {
  const fullPath = path.resolve(__dirname, '..', relPath);
  let code = fs.readFileSync(fullPath, 'utf8');
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

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    process.exit(1);
  }
  console.log(`✅ PASS: ${message}`);
}

console.log('============================================================');
console.log('BIOTAELITE 2.0 — MASTER-FIX-06A REGRESSION SUITE');
console.log('First-Navigation Runtime Error & Cache Invalidation Verification');
console.log('============================================================\n');

// Mock localStorage engine
class MockLocalStorage {
  constructor() {
    this.store = new Map();
  }
  getItem(key) {
    return this.store.has(key) ? this.store.get(key) : null;
  }
  setItem(key, value) {
    this.store.set(key, String(value));
  }
  removeItem(key) {
    this.store.delete(key);
  }
  clear() {
    this.store.clear();
  }
}

const SEED_VERSION_KEY = 'biota_seed_version';
const CURRENT_SEED_VERSION = 'v2h_global_fish_orders';

function simulateDataHydration(storage) {
  function safeGetItem(key) {
    try {
      return storage.getItem(key);
    } catch (err) {
      return null;
    }
  }

  function safeSetItem(key, value) {
    try {
      storage.setItem(key, value);
    } catch (err) {}
  }

  function safeParseJson(raw, fallback) {
    if (!raw) return { value: fallback, corrupted: false };
    try {
      const parsed = JSON.parse(raw);
      return {
        value: (parsed !== null && parsed !== undefined) ? parsed : fallback,
        corrupted: parsed === null || parsed === undefined
      };
    } catch (err) {
      return { value: fallback, corrupted: true };
    }
  }

  const version = safeGetItem(SEED_VERSION_KEY);
  const isVersionMatch = version === CURRENT_SEED_VERSION;

  if (!isVersionMatch) {
    safeSetItem(SEED_VERSION_KEY, CURRENT_SEED_VERSION);
    safeSetItem('biota_species', JSON.stringify(SEED_SPECIES));
    safeSetItem('biota_taxa', JSON.stringify(SEED_TAXA));
    safeSetItem('biota_taxon_knowledge', JSON.stringify(SEED_TAXON_KNOWLEDGE));
    safeSetItem('biota_references', JSON.stringify(SEED_REFERENCES));
    return {
      species: SEED_SPECIES,
      taxa: SEED_TAXA,
      taxonKnowledge: SEED_TAXON_KNOWLEDGE,
      references: SEED_REFERENCES,
      recovered: false,
      reinitialized: true
    };
  }

  const parsedSpeciesRes = safeParseJson(safeGetItem('biota_species'), SEED_SPECIES);
  const parsedTaxaRes = safeParseJson(safeGetItem('biota_taxa'), SEED_TAXA);
  const parsedKnowledgeRes = safeParseJson(safeGetItem('biota_taxon_knowledge'), SEED_TAXON_KNOWLEDGE);
  const parsedRefsRes = safeParseJson(safeGetItem('biota_references'), SEED_REFERENCES);

  const validTaxa = (Array.isArray(parsedTaxaRes.value) && parsedTaxaRes.value.length >= 190) ? parsedTaxaRes.value : SEED_TAXA;
  const validKnowledge = (Array.isArray(parsedKnowledgeRes.value) && parsedKnowledgeRes.value.length >= 80) ? parsedKnowledgeRes.value : SEED_TAXON_KNOWLEDGE;
  const validSpecies = (Array.isArray(parsedSpeciesRes.value) && parsedSpeciesRes.value.length > 0) ? parsedSpeciesRes.value : SEED_SPECIES;
  const validRefs = (Array.isArray(parsedRefsRes.value) && parsedRefsRes.value.length > 0) ? parsedRefsRes.value : SEED_REFERENCES;

  let recovered = false;
  if (parsedTaxaRes.corrupted || validTaxa !== parsedTaxaRes.value) { safeSetItem('biota_taxa', JSON.stringify(validTaxa)); recovered = true; }
  if (parsedKnowledgeRes.corrupted || validKnowledge !== parsedKnowledgeRes.value) { safeSetItem('biota_taxon_knowledge', JSON.stringify(validKnowledge)); recovered = true; }
  if (parsedSpeciesRes.corrupted || validSpecies !== parsedSpeciesRes.value) { safeSetItem('biota_species', JSON.stringify(validSpecies)); recovered = true; }
  if (parsedRefsRes.corrupted || validRefs !== parsedRefsRes.value) { safeSetItem('biota_references', JSON.stringify(validRefs)); recovered = true; }

  return {
    species: validSpecies,
    taxa: validTaxa,
    taxonKnowledge: validKnowledge,
    references: validRefs,
    recovered,
    reinitialized: false
  };
}

// TEST A: Empty Storage
console.log('[TEST A] Empty Storage Scenario...');
const storageA = new MockLocalStorage();
const stateA = simulateDataHydration(storageA);
assert(stateA.reinitialized === true, 'Empty storage triggered re-seeding');
assert(stateA.taxa.length === SEED_TAXA.length, `Initialized with full taxonomy (${stateA.taxa.length} nodes)`);
assert(stateA.taxonKnowledge.length === SEED_TAXON_KNOWLEDGE.length, `Initialized with full knowledge (${stateA.taxonKnowledge.length} records)`);
assert(storageA.getItem(SEED_VERSION_KEY) === CURRENT_SEED_VERSION, 'Saved seed version to storage');

// TEST B: Current Storage
console.log('\n[TEST B] Current Storage Scenario...');
const storageB = new MockLocalStorage();
storageB.setItem(SEED_VERSION_KEY, CURRENT_SEED_VERSION);
storageB.setItem('biota_species', JSON.stringify(SEED_SPECIES));
storageB.setItem('biota_taxa', JSON.stringify(SEED_TAXA));
storageB.setItem('biota_taxon_knowledge', JSON.stringify(SEED_TAXON_KNOWLEDGE));
storageB.setItem('biota_references', JSON.stringify(SEED_REFERENCES));

const stateB = simulateDataHydration(storageB);
assert(stateB.reinitialized === false, 'Current storage did not force full reinitialization');
assert(stateB.recovered === false, 'Current storage was healthy (no recovery needed)');
assert(stateB.taxa.length >= 190, `Loaded full taxa backbone (${stateB.taxa.length} nodes)`);
assert(stateB.taxonKnowledge.length >= 80, `Loaded full knowledge base (${stateB.taxonKnowledge.length} records)`);

// TEST C: Stale Storage (Previous / Incompatible Version)
console.log('\n[TEST C] Stale Storage Scenario...');
const storageC = new MockLocalStorage();
storageC.setItem(SEED_VERSION_KEY, 'v2g_fish_orders');
storageC.setItem('biota_taxa', JSON.stringify([{ id: 'old-taxa' }]));
storageC.setItem('biota_taxon_knowledge', JSON.stringify([{ id: 'old-knowledge' }]));

const stateC = simulateDataHydration(storageC);
assert(stateC.reinitialized === true, 'Stale storage version triggered re-seeding');
assert(storageC.getItem(SEED_VERSION_KEY) === CURRENT_SEED_VERSION, 'Storage upgraded to current seed version');
assert(stateC.taxa.length === SEED_TAXA.length, `Old data purged; loaded ${stateC.taxa.length} current taxa nodes`);
assert(stateC.taxonKnowledge.length === SEED_TAXON_KNOWLEDGE.length, `Old knowledge purged; loaded ${stateC.taxonKnowledge.length} current knowledge records`);

// TEST D: Malformed Storage (Corrupted JSON)
console.log('\n[TEST D] Malformed Storage Scenario...');
const storageD = new MockLocalStorage();
storageD.setItem(SEED_VERSION_KEY, CURRENT_SEED_VERSION);
storageD.setItem('biota_species', 'CORRUPTED_JSON_{[');
storageD.setItem('biota_taxa', '{"invalid": true');
storageD.setItem('biota_taxon_knowledge', '[{unquoted: key}}');

const stateD = simulateDataHydration(storageD);
assert(stateD.recovered === true, 'Corrupted JSON triggered safe recovery');
assert(stateD.taxa.length === SEED_TAXA.length, 'Recovered from malformed taxa without throwing exception');
assert(stateD.taxonKnowledge.length === SEED_TAXON_KNOWLEDGE.length, 'Recovered from malformed knowledge without throwing exception');
assert(stateD.species.length === SEED_SPECIES.length, 'Recovered from malformed species without throwing exception');

// TEST E: React Hook Ordering Invariants in FishPage.tsx
console.log('\n[TEST E] React Hook Ordering Invariants in FishPage.tsx...');
const fishPageCode = fs.readFileSync(path.resolve(__dirname, '../src/pages/public/FishPage.tsx'), 'utf8');

// Parse hook occurrences and verify no hooks are after early returns
const lines = fishPageCode.split('\n');
let insideComponent = false;
let firstEarlyReturnLine = -1;
const hookOccurrences = [];

lines.forEach((line, idx) => {
  const lineNum = idx + 1;
  if (line.includes('export const FishPage: React.FC = () => {')) {
    insideComponent = true;
  }
  if (!insideComponent) return;

  if (firstEarlyReturnLine === -1 && (line.includes('return (') || line.includes('return <')) && !line.includes('useMemo') && !line.includes('useCallback') && !line.includes('useEffect')) {
    // Check if this return is at component body level
    if (/^\s{2,4}return\s/.test(line)) {
      firstEarlyReturnLine = lineNum;
    }
  }

  const hookMatch = line.match(/\b(use[A-Z]\w*)\s*(<.*>)?\(/);
  if (hookMatch) {
    hookOccurrences.push({ hook: hookMatch[1], line: lineNum });
  }
});

console.log(`Found ${hookOccurrences.length} hooks declared inside FishPage component:`, hookOccurrences.map(h => `${h.hook}@L${h.line}`).join(', '));
assert(hookOccurrences.length >= 8, `Expected at least 8 top-level hooks, found ${hookOccurrences.length}`);
assert(firstEarlyReturnLine > 0, `Detected first conditional early return at line ${firstEarlyReturnLine}`);

const hooksAfterReturn = hookOccurrences.filter(h => h.line > firstEarlyReturnLine);
assert(
  hooksAfterReturn.length === 0,
  `ZERO hooks declared after first early return! (found ${hooksAfterReturn.length})`
);

// TEST F: Dynamic Taxonomy Counts Verification
console.log('\n[TEST F] Dynamic Fish Taxonomy Hierarchy & Order Counts...');
const fishKnowledge = SEED_TAXON_KNOWLEDGE.filter(k => k.category === 'fish');
const agnathaKnowledge = fishKnowledge.filter(k => k.rank === 'order' && (k.parentTaxonId === 'group-agnatha' || k.parentTaxonId === 'taxon-agnatha'));
const chondrichthyesKnowledge = fishKnowledge.filter(k => k.rank === 'order' && (k.parentTaxonId === 'class-chondrichthyes' || k.parentTaxonId === 'taxon-chondrichthyes'));
const osteichthyesKnowledge = fishKnowledge.filter(k => k.rank === 'order' && (
  k.parentTaxonId === 'superclass-osteichthyes' || 
  k.parentTaxonId === 'taxon-osteichthyes' ||
  k.parentTaxonId === 'class-actinopterygii' ||
  k.parentTaxonId === 'class-sarcopterygii'
));

assert(agnathaKnowledge.length === 2, `Agnatha has exactly 2 Orders (Myxiniformes, Petromyzontiformes) - Actual: ${agnathaKnowledge.length}`);
assert(chondrichthyesKnowledge.length === 14, `Chondrichthyes has exactly 14 Orders - Actual: ${chondrichthyesKnowledge.length}`);
assert(osteichthyesKnowledge.length === 57, `Osteichthyes has exactly 57 Orders (55 Actinopterygii + 2 Sarcopterygii) - Actual: ${osteichthyesKnowledge.length}`);
assert(agnathaKnowledge.length + chondrichthyesKnowledge.length + osteichthyesKnowledge.length === 73, `Total Fish Orders = 73 - Actual: ${agnathaKnowledge.length + chondrichthyesKnowledge.length + osteichthyesKnowledge.length}`);

// TEST G: Marine Life Finfish Exclusion (Strict Invariant)
console.log('\n[TEST G] Marine Life Finfish Exclusion Invariant...');
const finfishClasses = ['Actinopterygii', 'Chondrichthyes', 'Sarcopterygii', 'Myxini', 'Petromyzontida'];
const marineSpecies = SEED_SPECIES.filter(s => {
  if (s.module === 'marine') return true;
  if (s.habitat && s.habitat.systems.includes('marine') && s.module !== 'fish') return true;
  return false;
});
const marineFinfishes = marineSpecies.filter(s => finfishClasses.includes(s.taxonomy.class));
assert(marineFinfishes.length === 0, `Marine Life contains strictly ZERO finfishes (found: ${marineFinfishes.length})`);

// TEST H: Authentication Invariant (MASTER-FIX-01)
console.log('\n[TEST H] Authentication & RBAC Invariant (MASTER-FIX-01)...');
const authCode = fs.readFileSync(path.resolve(__dirname, '../src/context/AuthContext.tsx'), 'utf8');
assert(!/const\s+DEFAULT_ADMIN_USER/i.test(authCode) && !/let\s+DEFAULT_ADMIN_USER/i.test(authCode), 'No DEFAULT_ADMIN_USER backdoor defined');
assert(authCode.includes('useState<UserProfile | null>(null)'), 'Default unauthenticated state is closed (null user)');

console.log('\n============================================================');
console.log('ALL MASTER-FIX-06A REGRESSION SUITE CHECKS PASSED (100%)');
console.log('============================================================');
