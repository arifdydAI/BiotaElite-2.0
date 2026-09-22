// Script to parse the official live Eschmeyer SpeciesByFamily.asp content
const fs = require('fs');
const path = require('path');

const filePath = 'C:/Users/UESR/.gemini/antigravity-ide/brain/cec9bfb5-ba0e-45fb-a4be-cb9e904a280e/.system_generated/steps/842/content.md';
const content = fs.readFileSync(filePath, 'utf8');

console.log('File size in bytes:', content.length);

// Let's inspect headings, tables, or anchors
// Check for pattern matches like ordername or table elements or markdown text
const lines = content.split('\n');
console.log('Total lines:', lines.length);

// Print first 50 lines to see structure
console.log('--- FIRST 50 LINES ---');
console.log(lines.slice(0, 50).join('\n'));

// Let's search for "order" or class names
const classesFound = [];
const ordersFound = [];
const familiesFound = [];

// Check regex for classname / ordername / familyname
const regex = /<th scope="row" class="([^"]+)"[^>]*><a name="([^"]+)"><\/a>(?:&nbsp;)*([^<]+)<\/th>/g;
let m;
while ((m = regex.exec(content)) !== null) {
  const type = m[1].trim();
  const anchor = m[2].trim();
  const name = m[3].replace(/&nbsp;/g, '').trim();
  if (type === 'classname') classesFound.push({ name, anchor });
  else if (type === 'ordername') ordersFound.push({ name, anchor, class: classesFound[classesFound.length - 1]?.name });
  else if (type === 'familyname') familiesFound.push({ name, anchor, order: ordersFound[ordersFound.length - 1]?.name });
}

console.log('\n--- PARSED VIA HTML TH TAGS ---');
console.log('Classes:', classesFound.length);
console.log('Orders:', ordersFound.length);
console.log('Families:', familiesFound.length);

if (ordersFound.length > 0) {
  console.log('\nOrders list from Eschmeyer live:');
  ordersFound.forEach((o, i) => {
    console.log(`${i + 1}. [${o.class}] ${o.name}`);
  });
}
