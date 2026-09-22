const fs = require('fs');

async function inspectFishBaseDetails(id) {
  try {
    const res = await fetch(`https://www.fishbase.se/photos/ThumbnailsSummary.php?ID=${id}`, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const html = await res.text();
    // find table rows or picture descriptions
    const rows = [...html.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)].map(m => m[1]);
    console.log(`\n--- FishBase ID ${id} Details (${rows.length} rows) ---`);
    for (const r of rows) {
      if (r.includes('Photographer') || r.includes('Photo by') || r.includes('Papan') || r.includes('jpg')) {
        const text = r.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
        if (text.length > 10) console.log('  Row:', text.slice(0, 160));
      }
    }
  } catch (e) {
    console.log(`Error ${id}:`, e.message);
  }
}

async function main() {
  await inspectFishBaseDetails(292);
}

main();
