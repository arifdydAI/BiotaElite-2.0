const fs = require('fs');

async function inspectFishBasePicture(url) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    const html = await res.text();
    console.log(`URL: ${url} (status: ${res.status}, length: ${html.length})`);
    // Extract image URL and copyright notice
    const imgMatch = html.match(/<img[^>]+src=['"]([^'"]+)['"][^>]*id=['"]?fishpic['"]?/i) || html.match(/<img[^>]+src=['"]([^'"]*(?:species|thumbnails)[^'"]*)['"]/i);
    console.log('Main image src:', imgMatch ? imgMatch[1] : 'not found');
    const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
    const copyMatch = text.match(/(?:Copyright|license|reproduced|courtesy|All rights reserved)[\s\S]{0,200}/i);
    console.log('Copyright snippet:', copyMatch ? copyMatch[0] : 'no copy notice');
  } catch (e) {
    console.log('Error:', e.message);
  }
}

async function main() {
  await inspectFishBasePicture('https://www.fishbase.se/photos/PicturesSummary.php?StartRow=0&ID=292&what=species&TotRec=3');
  await inspectFishBasePicture('https://www.fishbase.se/photos/PicturesSummary.php?StartRow=1&ID=292&what=species&TotRec=3');
}

main();
