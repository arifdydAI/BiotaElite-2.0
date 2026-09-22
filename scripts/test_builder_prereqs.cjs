// scripts/build_seed_ident_keys_expansion.cjs
// Assembles all 16 Identification Keys (12 Global + 4 Bangladesh Regional)
// Fully coordinated with SEED_SPECIES (190 canonical species), SEED_TAXA, SEED_REFERENCES.
const fs = require('fs');
const path = require('path');
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

const { SEED_SPECIES } = loadTs('../src/data/seedSpecies.ts');
const { SEED_TAXA } = loadTs('../src/data/seedTaxa.ts');
const { SEED_REFERENCES } = loadTs('../src/data/seedReferences.ts');

const speciesSet = new Set(SEED_SPECIES.map(s => s.id));
const taxaSet = new Set(SEED_TAXA.map(t => t.id));
const refSet = new Set(SEED_REFERENCES.map(r => r.id));

console.log(`Repository context: ${speciesSet.size} species, ${taxaSet.size} taxa, ${refSet.size} references.`);

// Load existing keys to retain keys 1, 2, 3, 12, 13, 14, 15 exactly
const { SEED_IDENTIFICATION_KEYS: existingKeys } = loadTs('../src/data/seedIdentKeys.ts');
const existingMap = new Map(existingKeys.map(k => [k.id, k]));

// Keys 1, 2, 3 (Global Major Groups, Vertebrate Classes, Fish Lineages)
const keyMajorGroups = existingMap.get('key-global-major-animal-groups');
const keyVertClasses = existingMap.get('key-global-vertebrate-classes');
const keyFishLineages = existingMap.get('key-global-fish-lineages');

// Preserved Bangladesh Keys (Keys 12, 13, 14, 15)
const keyBdAquaticVert = existingMap.get('key-major-aquatic-vertebrates');
const keyBdCarps = existingMap.get('key-major-carps-bangladesh');
const keyBdCatfishes = existingMap.get('key-catfishes-bangladesh');
const keyBdSnakeheads = existingMap.get('key-snakeheads-bangladesh');

console.log('Preserved 7 baseline keys successfully.');
