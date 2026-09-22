const fs = require('fs');
const path = require('path');

const audit = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/fish_orders_audit.json'), 'utf8'));

const chondrichthyesOrders = audit
  .filter(o => o.sourceClass === 'Elasmobranchii' || o.sourceClass === 'Holocephali')
  .map(o => 'order-' + o.scientificName.toLowerCase());

const actinopteriOrders = audit
  .filter(o => o.sourceClass === 'Cladistii' || o.sourceClass === 'Actinopteri')
  .map(o => 'order-' + o.scientificName.toLowerCase());

const osteichthyesOrders = audit
  .filter(o => o.sourceClass === 'Cladistii' || o.sourceClass === 'Actinopteri' || o.sourceClass === 'Actinistia' || o.sourceClass === 'Dipnoi')
  .map(o => 'order-' + o.scientificName.toLowerCase());

const knowledgePath = path.join(__dirname, '../src/data/seedTaxonKnowledge.ts');
let code = fs.readFileSync(knowledgePath, 'utf8');

// Parse the JSON array inside `export const SEED_TAXON_KNOWLEDGE: TaxonKnowledgeRecord[] = ...;`
const prefix = 'export const SEED_TAXON_KNOWLEDGE: TaxonKnowledgeRecord[] = ';
const idx = code.indexOf(prefix);
if (idx === -1) {
  console.error('Could not find SEED_TAXON_KNOWLEDGE export');
  process.exit(1);
}

// Extract the json array string
const jsonStart = idx + prefix.length;
const jsonEnd = code.lastIndexOf(';');
const jsonStr = code.slice(jsonStart, jsonEnd).trim();
const knowledgeArray = JSON.parse(jsonStr);

for (const item of knowledgeArray) {
  if (item.id === 'class-chondrichthyes') {
    item.orders = chondrichthyesOrders;
    console.log('Updated class-chondrichthyes orders to', chondrichthyesOrders.length);
  } else if (item.id === 'superclass-osteichthyes') {
    item.orders = osteichthyesOrders;
    console.log('Updated superclass-osteichthyes orders to', osteichthyesOrders.length);
  } else if (item.id === 'class-actinopterygii') {
    item.orders = actinopteriOrders;
    console.log('Updated class-actinopterygii orders to', actinopteriOrders.length);
  }
}

const newCode = `import { TaxonKnowledgeRecord } from '../types';

export const SEED_TAXON_KNOWLEDGE: TaxonKnowledgeRecord[] = ${JSON.stringify(knowledgeArray, null, 2)};
`;

fs.writeFileSync(knowledgePath, newCode, 'utf8');
console.log('Successfully written updated seedTaxonKnowledge.ts with', knowledgeArray.length, 'records.');
