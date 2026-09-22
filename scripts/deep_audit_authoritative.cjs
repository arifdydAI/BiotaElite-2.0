// Comprehensive authoritative search across Wikimedia Commons, iNaturalist & GBIF
const https = require('https');

async function searchCommonsDeep(term) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=${encodeURIComponent(term)}&gsrnamespace=6&gsrlimit=12&prop=imageinfo&iiprop=url|size|extmetadata&iiextmetadatafilter=Artist|LicenseShortName|UsageTerms|ImageDescription|Credit|Categories`;
  const res = await fetch(url, { headers: { 'User-Agent': 'BiotaEliteBot/2.0 (biodiversity research; contact@biota-elite.org)' } });
  if (!res.ok) return [];
  const data = await res.json();
  if (!data.query || !data.query.pages) return [];
  return Object.values(data.query.pages).filter(p => p.imageinfo && p.imageinfo[0]).map(p => {
    const info = p.imageinfo[0];
    const meta = info.extmetadata || {};
    return {
      title: p.title,
      url: info.url.split('?')[0],
      pageUrl: info.descriptionurl,
      width: info.width,
      height: info.height,
      license: meta.LicenseShortName ? meta.LicenseShortName.value : (meta.UsageTerms ? meta.UsageTerms.value : 'Unknown'),
      artist: meta.Artist ? meta.Artist.value.replace(/<[^>]+>/g, '').trim() : 'Unknown',
      categories: meta.Categories ? meta.Categories.value : '',
      description: meta.ImageDescription ? meta.ImageDescription.value.replace(/<[^>]+>/g, '').trim().slice(0, 200) : ''
    };
  });
}

// Check iNaturalist open API for CC-licensed research-grade observations
async function searchINaturalist(taxonName) {
  try {
    const url = `https://api.inaturalist.org/v1/observations?taxon_name=${encodeURIComponent(taxonName)}&quality_grade=research&photos=true&license=cc-by,cc-by-sa,cc0&per_page=5`;
    const res = await fetch(url, { headers: { 'User-Agent': 'BiotaEliteBot/2.0 (research)' } });
    if (!res.ok) return [];
    const data = await res.json();
    if (!data.results) return [];
    return data.results.map(r => {
      const photo = r.photos && r.photos[0];
      return {
        obsId: r.id,
        taxonName: r.taxon && r.taxon.name,
        observedOn: r.observed_on,
        place: r.place_guess,
        user: r.user && r.user.name ? r.user.name : (r.user && r.user.login),
        license: photo ? photo.license_code : null,
        photoUrl: photo ? photo.url.replace('square', 'large') : null,
        attribution: photo ? photo.attribution : null,
        qualityGrade: r.quality_grade
      };
    });
  } catch (e) {
    console.error('iNat error:', e.message);
    return [];
  }
}

async function run() {
  const speciesToAudit = [
    'Pangasius pangasius',
    'Clarias magur',
    'Mystus cavasius',
    'Eutropiichthys vacha',
    'Macrognathus aculeatus'
  ];

  for (const sp of speciesToAudit) {
    console.log(`\n======================================================`);
    console.log(`DEEP AUDIT FOR: ${sp}`);
    console.log(`======================================================`);

    console.log(`\n--- 1. Wikimedia Commons Exact Search: "${sp}" ---`);
    const commonsItems = await searchCommonsDeep(`"${sp}"`);
    for (const it of commonsItems) {
      console.log(`  [Commons] ${it.title}`);
      console.log(`    URL: ${it.url}`);
      console.log(`    License: ${it.license} | Artist: ${it.artist}`);
      console.log(`    Desc: ${it.description}`);
    }

    console.log(`\n--- 2. iNaturalist Research-Grade Search: "${sp}" ---`);
    const inatItems = await searchINaturalist(sp);
    if (inatItems.length === 0) {
      console.log(`  No CC-licensed research-grade observations found on iNaturalist for ${sp}`);
    } else {
      for (const it of inatItems) {
        console.log(`  [iNat #${it.obsId}] Taxon: ${it.taxonName} | Place: ${it.place}`);
        console.log(`    Photo: ${it.photoUrl}`);
        console.log(`    License: ${it.license} | User: ${it.user} | Attribution: ${it.attribution}`);
      }
    }

    await new Promise(r => setTimeout(r, 1000));
  }
}

run().catch(console.error);
