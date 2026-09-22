const fs = require('fs');
const ts = require('typescript');

function loadTs(file) {
  const code = fs.readFileSync(file, 'utf8');
  const js = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const m = { exports: {} };
  new Function('module', 'exports', 'require', js)(m, m.exports, require);
  return m.exports;
}

const knowledge = loadTs('./src/data/seedTaxonKnowledge.ts').SEED_TAXON_KNOWLEDGE;
const species = loadTs('./src/data/seedSpecies.ts').SEED_SPECIES;
const taxa = loadTs('./src/data/seedTaxa.ts').SEED_TAXA;

const spMap = new Map(species.map(s => [s.id, s]));
const taxaMap = new Map(taxa.map(t => [t.id, t]));

console.log('=== AUDITING ORDER EXAMPLES ===\n');

let totalExamplesChecked = 0;
let errors = 0;

knowledge.filter(k => k.rank === 'order').forEach(ord => {
  const exIds = ord.exampleSpeciesIds || [];
  if (exIds.length > 0) {
    exIds.forEach(spId => {
      totalExamplesChecked++;
      const sp = spMap.get(spId);
      if (!sp) {
        console.warn(`[WARN] Order ${ord.scientificName} (${ord.id}) references missing speciesId: ${spId}`);
        errors++;
      } else {
        // Verify species belongs to this order
        const spOrder = sp.taxonomy.order;
        if (spOrder && spOrder.toLowerCase() !== ord.scientificName.toLowerCase()) {
          console.error(`[MISMATCH] Species ${sp.scientificName} has taxonomy.order='${spOrder}' but is in exampleSpeciesIds of '${ord.scientificName}'!`);
          errors++;
        } else {
          console.log(`[OK] Order ${ord.scientificName} -> Species: ${sp.scientificName} (${sp.id})`);
        }
      }
    });
  } else {
    // Check if order has textual examples in examplesSummary
    if (!ord.examplesSummary || !ord.examplesSummary.en) {
      console.warn(`[WARN] Order ${ord.scientificName} has NO exampleSpeciesIds AND NO examplesSummary!`);
      errors++;
    }
  }
});

console.log(`\nChecked ${totalExamplesChecked} species ID bindings. Total mismatches/missing: ${errors}`);
