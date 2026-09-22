const fs = require('fs');
const ts = require('typescript');

function loadTs(file) {
  const code = fs.readFileSync(file, 'utf8');
  const js = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const m = { exports: {} };
  new Function('module', 'exports', 'require', js)(m, m.exports, require);
  return m.exports;
}

const taxa = loadTs('./src/data/seedTaxa.ts').SEED_TAXA;
const species = loadTs('./src/data/seedSpecies.ts').SEED_SPECIES;
const knowledge = loadTs('./src/data/seedTaxonKnowledge.ts').SEED_TAXON_KNOWLEDGE;

console.log('=== PROJECT ENTITY COUNTS ===');
console.log('Total Taxa in seedTaxa.ts:', taxa.length);
console.log('Total Species in seedSpecies.ts:', species.length);
console.log('Total Taxon Knowledge in seedTaxonKnowledge.ts:', knowledge.length);

const fishOrders = taxa.filter(t => t.rank === 'order' && (t.module === 'fish' || t.module === 'general'));
console.log('Fish Orders count:', fishOrders.length);

const families = taxa.filter(t => t.rank === 'family');
console.log('Families count in seedTaxa:', families.length);

const genera = taxa.filter(t => t.rank === 'genus');
console.log('Genera count in seedTaxa:', genera.length);

console.log('\n--- Fish Families & their Parent Orders ---');
const orderMap = new Map(taxa.map(t => [t.id, t]));
families.forEach(f => {
  const parent = orderMap.get(f.parentId || f.parentTaxonId);
  console.log(`Family: ${f.name.padEnd(20)} (${f.id}) -> Parent: ${parent ? parent.name + ' [' + parent.rank + ']' : 'NONE'}`);
});

console.log('\n--- Species & their Parent Genus/Family/Order ---');
const speciesByOrder = {};
species.forEach(sp => {
  if (sp.module === 'fish') {
    const family = orderMap.get(sp.familyTaxonId || sp.familyId);
    const order = orderMap.get(sp.orderTaxonId || sp.orderId);
    const ordName = order ? order.name : (sp.order || 'UNKNOWN');
    speciesByOrder[ordName] = (speciesByOrder[ordName] || 0) + 1;
  }
});
console.log('Fish Species by Order in seedSpecies:', speciesByOrder);
