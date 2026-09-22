const fs = require('fs');
const path = require('path');
const ts = require('typescript');

function loadTs(relPath) {
  const fullPath = path.resolve(__dirname, '..', relPath);
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

const taxaMap = new Map(SEED_TAXA.map(t => [t.id, t]));
const refMap = new Map(SEED_REFERENCES.map(r => [r.id, r]));

console.log('--- DEBUG TEST A ---');
const priorityIds = [
  'taxon-porifera', 'taxon-cnidaria', 'taxon-ctenophora', 'taxon-annelida',
  'taxon-mollusca', 'taxon-arthropoda', 'taxon-echinodermata', 'taxon-chordata',
  'taxon-amphibia', 'taxon-reptilia', 'taxon-aves', 'taxon-mammalia', 'taxon-fishes'
];
for (const id of priorityIds) {
  if (!taxaMap.has(id)) {
    console.log('Missing priority taxon ID:', id);
  }
}

console.log('\n--- DEBUG TEST D ---');
const genera = SEED_TAXA.filter(t => t.rank === 'genus');
for (const gen of genera) {
  const pId = gen.parentId || gen.parentTaxonId;
  const p = taxaMap.get(pId);
  if (!p || p.rank !== 'family') {
    console.log(`Genus ${gen.id} (${gen.name}) has parent ${pId} with rank: ${p ? p.rank : 'UNDEFINED'}`);
  }
}

console.log('\n--- DEBUG TEST I / V (REFERENCES) ---');
for (const sp of SEED_SPECIES) {
  if (!sp.referenceIds || sp.referenceIds.length === 0) {
    console.log(`Species ${sp.id} has no referenceIds`);
  } else {
    for (const rId of sp.referenceIds) {
      if (!refMap.has(rId)) {
        console.log(`Species ${sp.id} has unknown referenceId: ${rId}`);
      }
    }
  }
}

console.log('\n--- DEBUG TEST J (IMAGES) ---');
for (const sp of SEED_SPECIES) {
  if (!sp.media || sp.media.length === 0) {
    console.log(`Species ${sp.id} has NO MEDIA`);
  } else {
    for (const m of sp.media) {
      if (m.verificationStatus !== 'verified' && m.verificationStatus !== 'unavailable') {
        console.log(`Species ${sp.id} media has status: ${m.verificationStatus}`);
      }
      if (m.verificationStatus === 'verified' && (!m.photographer || !m.license || !m.sourceUrl)) {
        console.log(`Species ${sp.id} media incomplete:`, { photographer: m.photographer, license: m.license, sourceUrl: m.sourceUrl });
      }
    }
  }
}
