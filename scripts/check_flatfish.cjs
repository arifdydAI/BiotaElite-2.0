const fs = require('fs');
const content = fs.readFileSync('scripts/data/species_by_family_full.html', 'utf8');

const regex = /<th scope="row" class="([^"]+)"[^>]*><a name="([^"]+)"><\/a>(?:&nbsp;)*([^<]+)<\/th>/g;

let currentClass = null;
let currentOrder = null;
let match;

const flatfishFamilies = ['Pleuronectidae', 'Soleidae', 'Bothidae', 'Cynoglossidae', 'Achiridae', 'Samaridae', 'Scophthalmidae', 'Paralichthyidae'];

while ((match = regex.exec(content)) !== null) {
  const rowType = match[1].trim();
  const name = match[3].replace(/&nbsp;/g, '').trim();

  if (rowType === 'classname') currentClass = name;
  else if (rowType === 'ordername') currentOrder = name;
  else if (rowType === 'familyname') {
    if (flatfishFamilies.includes(name) || name.includes('Pleuronect')) {
      console.log(`Family: ${name} is placed in Order: [${currentOrder}] (Class: ${currentClass})`);
    }
  }
}
