const fs = require('fs');

const content = fs.readFileSync('scripts/data/species_by_family_full.html', 'utf8');
const eschData = JSON.parse(fs.readFileSync('scripts/data/eschmeyer_orders_live.json', 'utf8'));

const regex = /<th scope="row" class="([^"]+)"[^>]*><a name="([^"]+)"><\/a>(?:&nbsp;)*([^<]+)<\/th>/g;
let m;
let curOrder = '';
let curClass = '';
const familyOrderMap = {};

while ((m = regex.exec(content)) !== null) {
  const type = m[1].trim();
  const name = m[3].replace(/&nbsp;/g, '').trim();
  if (type === 'classname') curClass = name;
  else if (type === 'ordername') curOrder = name;
  else if (type === 'familyname') familyOrderMap[name] = { order: curOrder, class: curClass };
}

console.log('=== AUDIT CHECKLIST LINEAGES IN ESCHMEYER (2026) ===\n');

const checklist = [
  'Polypteriformes', 'Acipenseriformes', 'Lepisosteiformes', 'Amiiformes',
  'Hiodontiformes', 'Osteoglossiformes', 'Elopiformes', 'Albuliformes',
  'Anguilliformes', 'Saccopharyngiformes', 'Clupeiformes', 'Gonorynchiformes',
  'Cypriniformes', 'Characiformes', 'Siluriformes', 'Gymnotiformes',
  'Argentiniformes', 'Osmeriformes', 'Salmoniformes', 'Esociformes',
  'Stomiiformes', 'Ateleopodiformes', 'Aulopiformes', 'Myctophiformes',
  'Lampriformes', 'Polymixiiformes', 'Percopsiformes', 'Gadiformes',
  'Ophidiiformes', 'Batrachoidiformes', 'Lophiiformes', 'Mugiliformes',
  'Atheriniformes', 'Beloniformes', 'Cyprinodontiformes', 'Stephanoberyciformes',
  'Beryciformes', 'Zeiformes', 'Gasterosteiformes', 'Synbranchiformes',
  'Scorpaeniformes', 'Perciformes', 'Pleuronectiformes', 'Tetraodontiformes'
];

const eschOrderNames = new Set(eschData.orders.map(o => o.order));

checklist.forEach(item => {
  const isDirectOrder = eschOrderNames.has(item);
  if (isDirectOrder) {
    const o = eschData.orders.find(x => x.order === item);
    console.log(`[VALID ORDER] ${item.padEnd(24)} -> Order in Class ${o.class}`);
  } else {
    // Check if it's treated under another order (e.g. Saccopharyngiformes -> Anguilliformes, Esociformes -> Salmoniformes, etc.)
    console.log(`[NOT AN ORDER] ${item.padEnd(24)} -> NOT an independent order in Eschmeyer (2026)`);
  }
});

console.log('\n--- Specific Families of Non-Direct Orders ---');
const specificFamilies = [
  'Saccopharyngidae', 'Eurypharyngidae', 'Monognathidae', 'Cyematidae', // Saccopharyngiformes
  'Esocidae', 'Umbridae', // Esociformes
  'Stephanoberycidae', 'Gibberichthyidae', 'Melamphaidae', // Stephanoberyciformes
  'Gasterosteidae', 'Aulorhynchidae', // Gasterosteiformes
  'Scorpaenidae', 'Triglidae', 'Cottidae', // Scorpaeniformes
  'Pleuronectidae', 'Bothidae', 'Soleidae', 'Cynoglossidae' // Pleuronectiformes
];

specificFamilies.forEach(f => {
  if (familyOrderMap[f]) {
    console.log(`  Family ${f.padEnd(20)} -> Placed in Order: [${familyOrderMap[f].order}] (${familyOrderMap[f].class})`);
  } else {
    console.log(`  Family ${f.padEnd(20)} -> NOT found directly in family list`);
  }
});
