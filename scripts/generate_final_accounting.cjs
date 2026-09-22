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
const { SEED_REFERENCES } = loadTs('src/data/seedReferences.ts');
const { SEED_IDENTIFICATION_KEYS } = loadTs('src/data/seedIdentKeys.ts');

const families = SEED_TAXA.filter(t => t.rank === 'family');
const genera = SEED_TAXA.filter(t => t.rank === 'genus');
const orders = SEED_TAXA.filter(t => t.rank === 'order');
const fishOrders = SEED_TAXA.filter(t => t.rank === 'order' && t.module === 'fish');

let verifiedImages = 0;
let unavailableImages = 0;
let totalSynonyms = 0;
let bdPresentCount = 0;
let extralimitalCount = 0;

for (const sp of SEED_SPECIES) {
  if (sp.imageVerificationStatus === 'unavailable' || !sp.media || sp.media.length === 0) {
    unavailableImages++;
  } else {
    for (const m of sp.media) {
      if (m.verificationStatus === 'verified' && (m.url || m.imageUrl)) {
        verifiedImages++;
      } else if (m.verificationStatus === 'unavailable') {
        unavailableImages++;
      }
    }
  }

  if (sp.synonyms) {
    totalSynonyms += sp.synonyms.length;
  }

  if (sp.bangladeshOccurrence && sp.bangladeshOccurrence.present === true) {
    bdPresentCount++;
  } else {
    extralimitalCount++;
  }
}

const report = {
  totalTaxaNodes: SEED_TAXA.length,
  totalSpecies: SEED_SPECIES.length,
  totalFamilies: families.length,
  totalGenera: genera.length,
  totalOrders: orders.length,
  totalFishOrders: fishOrders.length,
  verifiedImages,
  unavailableImages,
  totalSynonyms,
  totalReferences: SEED_REFERENCES.length,
  totalIdentificationKeys: SEED_IDENTIFICATION_KEYS.length,
  bdPresentCount,
  extralimitalCount
};

console.log(JSON.stringify(report, null, 2));
