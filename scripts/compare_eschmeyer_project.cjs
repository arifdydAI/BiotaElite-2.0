const fs = require('fs');

const eschmeyer = JSON.parse(fs.readFileSync('scripts/data/eschmeyer_orders_live.json', 'utf8'));
const audit = JSON.parse(fs.readFileSync('scripts/data/fish_orders_audit.json', 'utf8'));

const eschOrders = eschmeyer.orders.map(o => o.order);
const auditOrders = audit.map(a => a.scientificName);

console.log('=== ESCHMEYER (LIVE) VS AUDIT (PROJECT) ===');
console.log(`Eschmeyer Orders Count: ${eschOrders.length}`);
console.log(`Audit Orders Count: ${auditOrders.length}`);

// In Eschmeyer but not in Audit
const inEschNotAudit = eschOrders.filter(o => !auditOrders.includes(o));
console.log('\nIn Eschmeyer (72) but NOT in Audit (73):', inEschNotAudit);

// In Audit but not in Eschmeyer
const inAuditNotEsch = auditOrders.filter(o => !eschOrders.includes(o));
console.log('In Audit (73) but NOT in Eschmeyer (72):', inAuditNotEsch);

// Order comparison side-by-side
console.log('\n--- Sequence Comparison ---');
for (let i = 0; i < Math.max(eschOrders.length, auditOrders.length); i++) {
  const e = eschOrders[i] || '---';
  const a = auditOrders[i] || '---';
  const match = e === a ? '✓' : '≠';
  console.log(`${(i + 1).toString().padStart(2)}: Eschmeyer: ${e.padEnd(22)} | Project: ${a.padEnd(22)} [${match}]`);
}
