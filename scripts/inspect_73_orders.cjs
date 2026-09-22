// Comprehensive examination of the 73 audit orders
const fs = require('fs');
const audit = JSON.parse(fs.readFileSync('scripts/data/fish_orders_audit.json', 'utf8'));

console.log('=== ESCHMEYER & NELSON 73 ORDERS CLASSIFICATION ===\n');

const groups = {};
audit.forEach(a => {
  const cls = a.sourceClass || 'Unknown';
  if (!groups[cls]) groups[cls] = [];
  groups[cls].push(a.scientificName);
});

let grandTotal = 0;
for (const [cls, list] of Object.entries(groups)) {
  console.log(`Class ${cls} (${list.length} Orders):`);
  list.forEach((ord, i) => {
    console.log(`   ${i + 1}. ${ord}`);
  });
  grandTotal += list.length;
  console.log('');
}

console.log(`Grand Total Orders: ${grandTotal}`);
