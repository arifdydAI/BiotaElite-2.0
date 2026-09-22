// Scratch script to search Wikimedia Commons for our 34 species
const https = require('https');

const speciesList = [
  { id: 'sp-tenualosa-ilisha', name: 'Tenualosa ilisha', common: 'Hilsa' },
  { id: 'sp-labeo-rohita', name: 'Labeo rohita', common: 'Rohu' },
  { id: 'sp-pangasius-pangasius', name: 'Pangasius pangasius', common: 'Pangas' },
  { id: 'sp-chiloscyllium-indicum', name: 'Chiloscyllium indicum', common: 'Slender bambooshark' },
  { id: 'sp-catla-catla', name: 'Catla catla', common: 'Catla' },
  { id: 'sp-cirrhinus-mrigala', name: 'Cirrhinus mrigala', common: 'Mrigal' },
  { id: 'sp-channa-striata', name: 'Channa striata', common: 'Striped snakehead' },
  { id: 'sp-channa-punctata', name: 'Channa punctata', common: 'Spotted snakehead' },
  { id: 'sp-clarias-magur', name: 'Clarias magur', common: 'Magur' },
  { id: 'sp-clarias-batrachus', name: 'Clarias batrachus', common: 'Walking catfish' },
  { id: 'sp-heteropneustes-fossilis', name: 'Heteropneustes fossilis', common: 'Stinging catfish' },
  { id: 'sp-anabas-testudineus', name: 'Anabas testudineus', common: 'Climbing perch' },
  { id: 'sp-mystus-cavasius', name: 'Mystus cavasius', common: 'Gangetic mystus' },
  { id: 'sp-wallago-attu', name: 'Wallago attu', common: 'Boal' },
  { id: 'sp-chitala-chitala', name: 'Chitala chitala', common: 'Clown knifefish' },
  { id: 'sp-eutropiichthys-vacha', name: 'Eutropiichthys vacha', common: 'Vacha' },
  { id: 'sp-pethia-conchonius', name: 'Pethia conchonius', common: 'Rosy barb' },
  { id: 'sp-macrognathus-aculeatus', name: 'Macrognathus aculeatus', common: 'Lesser spiny eel' },
  { id: 'sp-mastacembelus-armatus', name: 'Mastacembelus armatus', common: 'Zig-zag eel' },
  { id: 'sp-ompok-pabda', name: 'Ompok pabda', common: 'Pabda' },
  { id: 'sp-lates-calcarifer', name: 'Lates calcarifer', common: 'Barramundi' },
  { id: 'sp-orcaella-brevirostris', name: 'Orcaella brevirostris', common: 'Irrawaddy dolphin' },
  { id: 'sp-platanista-gangetica', name: 'Platanista gangetica', common: 'Ganges river dolphin' },
  { id: 'sp-chelonia-mydas', name: 'Chelonia mydas', common: 'Green sea turtle' },
  { id: 'sp-lepidochelys-olivacea', name: 'Lepidochelys olivacea', common: 'Olive ridley turtle' },
  { id: 'sp-hydrophis-platurus', name: 'Hydrophis platurus', common: 'Yellow-bellied sea snake' },
  { id: 'sp-balaenoptera-musculus', name: 'Balaenoptera musculus', common: 'Blue whale' },
  { id: 'sp-phoca-vitulina', name: 'Phoca vitulina', common: 'Harbor seal' },
  { id: 'sp-dugong-dugon', name: 'Dugong dugon', common: 'Dugong' },
  { id: 'sp-aurelia-aurita', name: 'Aurelia aurita', common: 'Moon jellyfish' },
  { id: 'sp-octopus-vulgaris', name: 'Octopus vulgaris', common: 'Common octopus' },
  { id: 'sp-scylla-serrata', name: 'Scylla serrata', common: 'Giant mud crab' },
  { id: 'sp-acanthaster-planci', name: 'Acanthaster planci', common: 'Crown-of-thorns starfish' },
  { id: 'sp-spongia-officinalis', name: 'Spongia officinalis', common: 'Bath sponge' }
];

async function searchCommons(query) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&gsrlimit=5&prop=imageinfo&iiprop=url|size|extmetadata&iiextmetadatafilter=Artist|LicenseShortName|UsageTerms|ImageDescription|Credit`;
  const res = await fetch(url, { headers: { 'User-Agent': 'BiotaElite/2.0 (biodiversity audit research tool; educational)' } });
  if (!res.ok) return [];
  const data = await res.json();
  if (!data.query || !data.query.pages) return [];
  const items = [];
  for (const p of Object.values(data.query.pages)) {
    if (p.imageinfo && p.imageinfo[0]) {
      const info = p.imageinfo[0];
      const meta = info.extmetadata || {};
      items.push({
        title: p.title,
        url: info.url.split('?')[0],
        pageUrl: info.descriptionurl,
        width: info.width,
        height: info.height,
        license: meta.LicenseShortName ? meta.LicenseShortName.value : (meta.UsageTerms ? meta.UsageTerms.value : 'Unknown'),
        artist: meta.Artist ? meta.Artist.value.replace(/<[^>]+>/g, '').trim() : 'Unknown',
        credit: meta.Credit ? meta.Credit.value.replace(/<[^>]+>/g, '').trim() : '',
        description: meta.ImageDescription ? meta.ImageDescription.value.replace(/<[^>]+>/g, '').trim().slice(0, 150) : ''
      });
    }
  }
  return items;
}

async function run() {
  for (const sp of speciesList) {
    console.log(`\n=== [${sp.id}] ${sp.name} (${sp.common}) ===`);
    try {
      const items = await searchCommons(`"${sp.name}"`);
      if (items.length === 0) {
        // try without quotes
        const items2 = await searchCommons(sp.name);
        for (const it of items2.slice(0, 3)) {
          console.log(`  - Title: ${it.title}`);
          console.log(`    URL: ${it.url}`);
          console.log(`    License: ${it.license} | Artist: ${it.artist}`);
          console.log(`    Desc: ${it.description}`);
        }
      } else {
        for (const it of items.slice(0, 3)) {
          console.log(`  - Title: ${it.title}`);
          console.log(`    URL: ${it.url}`);
          console.log(`    License: ${it.license} | Artist: ${it.artist}`);
          console.log(`    Desc: ${it.description}`);
        }
      }
    } catch (e) {
      console.error('Error:', e.message);
    }
    // Small delay to be polite to Wikipedia API
    await new Promise(r => setTimeout(r, 400));
  }
}

run();
