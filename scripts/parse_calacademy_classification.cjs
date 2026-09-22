// Script to parse CalAcademy catalog-of-fishes-classification page
const fs = require('fs');
const content = fs.readFileSync('C:/Users/UESR/.gemini/antigravity-ide/brain/cec9bfb5-ba0e-45fb-a4be-cb9e904a280e/.system_generated/steps/860/content.md', 'utf8');

// Strip HTML tags to see the text
const text = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
console.log('Text snippet:');
console.log(text.slice(0, 3000));

// Look for downloadable files (PDF, DOC, TXT)
const links = content.match(/href="([^"]+)"/g) || [];
console.log('\nLinks found:');
links.forEach(l => {
  if (l.includes('.pdf') || l.includes('.doc') || l.includes('classification') || l.includes('family') || l.includes('SpeciesByFamily')) {
    console.log(l);
  }
});
