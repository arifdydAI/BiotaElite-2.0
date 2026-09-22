const fs = require('fs');
const path = require('path');

const filePath = 'C:/Users/UESR/.gemini/antigravity-ide/brain/1359368e-728b-4427-a90b-150f05c44da1/.system_generated/steps/1535/content.md';
const content = fs.readFileSync(filePath, 'utf8');

// The file has table rows with classes: classname, ordername, familyname, subfamilyname
// Let's parse all rows
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

console.log('Classes found (' + classes.length + '):', classes);
console.log('Total Orders found in Eschmeyer 2026:', orders.length);
console.log('Total Families found in Eschmeyer 2026:', families.length);

console.log('\n--- ALL ESCHMEYER ORDERS ---');
orders.forEach((o, i) => {
  console.log(`${i + 1}. [${o.class}] ${o.order}`);
});
