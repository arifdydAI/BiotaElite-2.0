const fs = require('fs');

const content = fs.readFileSync('scripts/data/species_by_family_full.html', 'utf8');

// The file has table rows with classes: classname, ordername, familyname, subfamilyname
const regex = /<th scope="row" class="([^"]+)"[^>]*><a name="([^"]+)"><\/a>(?:&nbsp;)*([^<]+)<\/th>/g;

let match;
let currentClass = null;
let currentOrder = null;
const classes = [];
const orders = [];
const families = [];

while ((match = regex.exec(content)) !== null) {
  const rowType = match[1].trim();
  const anchor = match[2].trim();
  const name = match[3].replace(/&nbsp;/g, '').trim();

  if (rowType === 'classname') {
    currentClass = name;
    classes.push(name);
  } else if (rowType === 'ordername') {
    currentOrder = name;
    orders.push({ class: currentClass, order: name, anchor });
  } else if (rowType === 'familyname') {
    families.push({ class: currentClass, order: currentOrder, family: name, anchor });
  }
}

console.log('=== ESCHMEYER CATALOG OF FISHES (CALIFORNIA ACADEMY OF SCIENCES) ===');
console.log('Update date info from HTML:');
const dateMatch = content.match(/updated\s+([A-Za-z0-9\s,]+)/i) || content.match(/Electronic version accessed\s+([A-Za-z0-9\s,]+)/i);
if (dateMatch) console.log('Date found:', dateMatch[0]);

console.log(`\nClasses found (${classes.length}):`, classes);
console.log(`\nTotal Orders found in Eschmeyer: ${orders.length}`);
console.log(`Total Families found in Eschmeyer: ${families.length}`);

console.log('\n--- ALL ESCHMEYER ORDERS (IN PHYLOGENETIC SEQUENCE) ---');
orders.forEach((o, i) => {
  console.log(`${(i + 1).toString().padStart(2, ' ')}. [${o.class}] ${o.order}`);
});

// Group by class
const byClass = {};
orders.forEach(o => {
  byClass[o.class] = (byClass[o.class] || 0) + 1;
});
console.log('\nOrders by Class in Eschmeyer:', byClass);

// Write to JSON for detailed comparison
fs.writeFileSync('scripts/data/eschmeyer_orders_live.json', JSON.stringify({
  source: "Eschmeyer's Catalog of Fishes, California Academy of Sciences",
  retrievedDate: new Date().toISOString(),
  classes,
  orders,
  familiesCount: families.length
}, null, 2));
