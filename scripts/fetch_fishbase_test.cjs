const fs = require('fs');

async function getFishBasePhotos(id) {
  try {
    const res = await fetch(`https://www.fishbase.se/photos/ThumbnailsSummary.php?ID=${id}`, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const html = await res.text();
    const imgs = [...html.matchAll(/<img[^>]+src=['"]([^'"]+)['"][^>]*>/gi)].map(m => m[1]);
    console.log(`FishBase ID ${id} images:`, imgs.filter(i => !i.includes('logo') && !i.includes('png') && !i.includes('gif')));
  } catch (e) {
    console.log(`FishBase ID ${id} error:`, e.message);
  }
}

async function main() {
  await getFishBasePhotos(292); // Pangasius pangasius
  await getFishBasePhotos(5384); // Eutropiichthys vacha
}

main();
