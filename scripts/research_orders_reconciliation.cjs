// Research script to audit and reconcile fish orders in BiotaElite 2.0
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const auditJsonPath = path.join(ROOT, 'scripts/data/fish_orders_audit.json');
const taxaTsPath = path.join(ROOT, 'src/data/seedTaxa.ts');
const knowledgeTsPath = path.join(ROOT, 'src/data/seedTaxonKnowledge.ts');

const audit = JSON.parse(fs.readFileSync(auditJsonPath, 'utf8'));
const taxaRaw = fs.readFileSync(taxaTsPath, 'utf8');
const knowledgeRaw = fs.readFileSync(knowledgeTsPath, 'utf8');

// Parse taxa from seedTaxa.ts
const allTaxa = [];
const blocks = taxaRaw.split(/(?=\s*\{\s*\"id\":)/g).slice(1);
for (const b of blocks) {
  const idM = b.match(/\"id\":\s*\"([^\"]+)\"/);
  const nameM = b.match(/\"scientificName\":\s*\"([^\"]+)\"/);
  const rankM = b.match(/\"rank\":\s*\"([^\"]+)\"/);
  const parentM = b.match(/\"parentTaxonId\":\s*([\"'][^\"']+[\"']|null)/);
  const moduleM = b.match(/\"module\":\s*\"([^\"]+)\"/);
  if (idM && nameM && rankM) {
    allTaxa.push({
      id: idM[1],
      name: nameM[1],
      rank: rankM[1],
      parent: parentM ? parentM[1].replace(/['\"]/g, '') : null,
      module: moduleM ? moduleM[1] : null
    });
  }
}

// Parse knowledge records from seedTaxonKnowledge.ts
const allKnowledge = [];
const kBlocks = knowledgeRaw.split(/(?=\s*\{\s*\"id\":)/g).slice(1);
for (const b of kBlocks) {
  const idM = b.match(/\"id\":\s*\"([^\"]+)\"/);
  const taxonIdM = b.match(/\"taxonId\":\s*\"([^\"]+)\"/);
  const nameM = b.match(/\"scientificName\":\s*\"([^\"]+)\"/);
  const rankM = b.match(/\"rank\":\s*\"([^\"]+)\"/);
  const catM = b.match(/\"category\":\s*\"([^\"]+)\"/);
  if (idM && nameM && rankM) {
    allKnowledge.push({
      id: idM[1],
      taxonId: taxonIdM ? taxonIdM[1] : null,
      name: nameM[1],
      rank: rankM[1],
      category: catM ? catM[1] : null
    });
  }
}

console.log('================================================================');
console.log('TAXONOMIC AUDIT & RECONCILIATION EXTRACTION');
console.log('================================================================\n');

console.log(`Total Taxa in seedTaxa.ts: ${allTaxa.length}`);
console.log(`Total Knowledge records in seedTaxonKnowledge.ts: ${allKnowledge.length}`);
console.log(`Total records in fish_orders_audit.json: ${audit.length}`);

// Filter fish orders from seedTaxa
const fishOrdersInTaxa = allTaxa.filter(t => t.rank === 'order' && (t.module === 'fish' || t.module === 'general'));
console.log(`\nFish Orders in seedTaxa.ts (rank='order'): ${fishOrdersInTaxa.length}`);

// Group by parent class/superclass
const byParent = {};
fishOrdersInTaxa.forEach(o => {
  byParent[o.parent] = (byParent[o.parent] || 0) + 1;
});
console.log('Fish Orders by Parent in seedTaxa.ts:', byParent);

// Compare seedTaxa fish orders with audit.json
const taxaOrderNames = new Map(fishOrdersInTaxa.map(o => [o.name.toLowerCase(), o]));
const auditOrderNames = new Map(audit.map(a => [a.scientificName.toLowerCase(), a]));

console.log('\n----------------------------------------------------------------');
console.log(`Orders in fish_orders_audit.json (${audit.length}) vs seedTaxa.ts (${fishOrdersInTaxa.length})`);
console.log('----------------------------------------------------------------');

const missingInSeedTaxa = [];
audit.forEach(a => {
  if (!taxaOrderNames.has(a.scientificName.toLowerCase())) {
    missingInSeedTaxa.push(a);
  }
});

console.log(`\nFound in audit.json (73) but MISSING in seedTaxa.ts (${missingInSeedTaxa.length}):`);
missingInSeedTaxa.forEach((m, i) => {
  console.log(`  ${i + 1}. ${m.scientificName} (sourceClass: ${m.sourceClass}, action: ${m.action}, status: ${m.currentStatus})`);
});

const extraInSeedTaxa = [];
fishOrdersInTaxa.forEach(o => {
  if (!auditOrderNames.has(o.name.toLowerCase())) {
    extraInSeedTaxa.push(o);
  }
});

console.log(`\nFound in seedTaxa.ts but NOT in audit.json (${extraInSeedTaxa.length}):`);
extraInSeedTaxa.forEach((m, i) => {
  console.log(`  ${i + 1}. ${m.name} (id: ${m.id}, parent: ${m.parent})`);
});

// Check knowledge records for fish orders
const knowledgeFishOrders = allKnowledge.filter(k => k.rank === 'order' && k.category === 'fish');
console.log(`\nKnowledge records with rank='order' & category='fish': ${knowledgeFishOrders.length}`);
const kOrderNames = new Set(knowledgeFishOrders.map(k => k.name.toLowerCase()));

const missingKnowledge = [];
fishOrdersInTaxa.forEach(o => {
  if (!kOrderNames.has(o.name.toLowerCase())) {
    missingKnowledge.push(o);
  }
});
console.log(`Fish orders in seedTaxa.ts missing knowledge record: ${missingKnowledge.length}`);
if (missingKnowledge.length > 0) {
  console.log(missingKnowledge.map(m => m.name));
}
