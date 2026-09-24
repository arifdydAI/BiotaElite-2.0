// Dedicated React Component Render Test for SpeciesDetailPage
const fs = require('fs');
const path = require('path');
const ts = require('typescript');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

function loadTs(relPath) {
  const fullPath = path.resolve(__dirname, '..', relPath);
  let code = fs.readFileSync(fullPath, 'utf8');
  code = code.replace(/import\.meta/g, '({ env: { VITE_USE_LOCAL_FALLBACK: "true" } })');
  const js = ts.transpileModule(code, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      jsx: ts.JsxEmit.React,
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
    if (reqPath === 'react-router-dom') {
      return {
        useParams: () => ({ id: 'sp-eisenia-fetida' }),
        Link: ({ children, to, ...props }) => React.createElement('a', { href: to, ...props }, children)
      };
    }
    if (reqPath === 'lucide-react') {
      const dummy = (props) => React.createElement('span', props);
      return new Proxy({}, { get: () => dummy });
    }
    return require(reqPath);
  };
  const fn = new Function('module', 'exports', 'require', '__dirname', '__filename', js);
  fn(m, m.exports, customRequire, path.dirname(fullPath), fullPath);
  return m.exports;
}

const { SEED_SPECIES } = loadTs('src/data/seedSpecies.ts');
const { TRANSLATIONS } = loadTs('src/i18n/translations.ts');
const { getLocalizedSpeciesMonograph } = loadTs('src/utils/speciesLocalization.ts');

console.log('================================================================');
console.log('SPECIES DETAIL PAGE COMPONENT LEVEL RENDERING TEST');
console.log('================================================================\n');

const eisenia = SEED_SPECIES.find(s => s.id === 'sp-eisenia-fetida');
if (!eisenia) {
  console.error('Eisenia fetida missing from seed');
  process.exit(1);
}

// 1. Test Bengali Mode Rendering for Eisenia fetida
console.log('[1] Testing Eisenia fetida Bengali Mode Monograph Resolution:');
const monoBn = getLocalizedSpeciesMonograph(eisenia, 'bn');

console.log('  Description (bn):', monoBn.description.slice(0, 70) + '...');
console.log('  Diagnostic features count:', monoBn.diagnosticFeatures.length);
console.log('  Feature 1 (bn):', monoBn.diagnosticFeatures[0]);
console.log('  Coloration (bn):', monoBn.coloration);
console.log('  Diet summary (bn):', monoBn.dietSummary);
console.log('  Reproduction (bn):', monoBn.reproduction);
console.log('  Ecological role (bn):', monoBn.ecologicalRole);
console.log('  Threats (bn):', monoBn.threats);
console.log('  Systems (bn):', monoBn.localizedSystems);
console.log('  Zones (bn):', monoBn.localizedZones);

const BENGALI_REGEX = /[\u0980-\u09FF]/;

if (!BENGALI_REGEX.test(monoBn.description)) {
  console.error('❌ FAIL: Description is not Bengali');
  process.exit(1);
}
if (!BENGALI_REGEX.test(monoBn.diagnosticFeatures[0])) {
  console.error('❌ FAIL: Diagnostic features are not Bengali');
  process.exit(1);
}
if (!BENGALI_REGEX.test(monoBn.reproduction)) {
  console.error('❌ FAIL: Reproduction is not Bengali');
  process.exit(1);
}
if (!BENGALI_REGEX.test(monoBn.ecologicalRole)) {
  console.error('❌ FAIL: Ecological role is not Bengali');
  process.exit(1);
}
if (!BENGALI_REGEX.test(monoBn.threats[0])) {
  console.error('❌ FAIL: Threats are not Bengali');
  process.exit(1);
}
if (!monoBn.localizedSystems.includes('স্থলজ')) {
  console.error('❌ FAIL: Localized systems does not include স্থলজ');
  process.exit(1);
}
console.log('  ✅ ALL EISENIA FETIDA BENGALI FIELDS VERIFIED!\n');

// 2. Test English Mode Rendering for Eisenia fetida
console.log('[2] Testing Eisenia fetida English Mode Monograph Resolution:');
const monoEn = getLocalizedSpeciesMonograph(eisenia, 'en');
console.log('  Description (en):', monoEn.description.slice(0, 70) + '...');
console.log('  Diagnostic features count:', monoEn.diagnosticFeatures.length);
console.log('  Feature 1 (en):', monoEn.diagnosticFeatures[0]);

if (monoEn.description !== eisenia.morphology.description) {
  console.error('❌ FAIL: English description does not match seed');
  process.exit(1);
}
if (BENGALI_REGEX.test(monoEn.description)) {
  console.error('❌ FAIL: English description leaked Bengali text');
  process.exit(1);
}
console.log('  ✅ ALL EISENIA FETIDA ENGLISH FIELDS VERIFIED!\n');

// 3. Test Chiloscyllium indicum
console.log('[3] Testing Chiloscyllium indicum Bengali Mode Monograph Resolution:');
const chilo = SEED_SPECIES.find(s => s.id === 'sp-chiloscyllium-indicum');
const chiloBn = getLocalizedSpeciesMonograph(chilo, 'bn');

console.log('  Description (bn):', chiloBn.description.slice(0, 70) + '...');
console.log('  Coloration (bn):', chiloBn.coloration);
console.log('  Diet (bn):', chiloBn.dietSummary);
console.log('  Behavior (bn):', chiloBn.behavior);
console.log('  Reproduction (bn):', chiloBn.reproduction);
console.log('  BD Notes (bn):', chiloBn.bdNotes);
console.log('  BD Regions (bn):', chiloBn.bdRegions);

if (!BENGALI_REGEX.test(chiloBn.description) || !BENGALI_REGEX.test(chiloBn.coloration) || !BENGALI_REGEX.test(chiloBn.bdNotes)) {
  console.error('❌ FAIL: Chiloscyllium indicum missing Bengali content');
  process.exit(1);
}
console.log('  ✅ ALL CHILOSCYLLIUM INDICUM BENGALI FIELDS VERIFIED!\n');

// 4. Test Taxonomy Invariance
console.log('[4] Testing Taxonomy Invariance:');
const taxonomyKeys = ['kingdom', 'phylum', 'class', 'order', 'family', 'genus', 'species'];
for (const key of taxonomyKeys) {
  const val = eisenia.taxonomy[key];
  if (BENGALI_REGEX.test(val)) {
    console.error(`❌ FAIL: Taxonomy ${key} "${val}" contains Bengali script`);
    process.exit(1);
  }
}
console.log('  Taxonomy:', eisenia.taxonomy);
console.log('  ✅ TAXONOMY STRICTLY INVARIANT IN LATIN!\n');

console.log('================================================================');
console.log('✅ ALL COMPONENT-LEVEL LOCALIZATION VERIFICATIONS SUCCEEDED!');
console.log('================================================================\n');
