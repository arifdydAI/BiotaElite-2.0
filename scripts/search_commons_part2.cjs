// Search Wikimedia Commons for species 20-34
const speciesList = [
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
  const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&gsrlimit=6&prop=imageinfo&iiprop=url|size|extmetadata&iiextmetadatafilter=Artist|LicenseShortName|UsageTerms|ImageDescription|Credit`;
  const res = await fetch(url, { headers: { 'User-Agent': 'BiotaEliteBot/1.0 (https://github.com/biotaelite; research@biotaelite.org)' } });
  if (!res.ok) {
    console.error('HTTP error', res.status, res.statusText);
    return [];
  }
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
      let items = await searchCommons(`"${sp.name}"`);
      if (items.length === 0) {
        items = await searchCommons(sp.name);
      }
      for (const it of items) {
        console.log(`  - Title: ${it.title}`);
        console.log(`    URL: ${it.url}`);
        console.log(`    License: ${it.license} | Artist: ${it.artist}`);
        console.log(`    Desc: ${it.description}`);
      }
    } catch (e) {
      console.error('Error:', e.message);
    }
    await new Promise(r => setTimeout(r, 800));
  }
}

run();
