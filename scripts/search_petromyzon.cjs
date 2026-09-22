async function searchCommons(query) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&gsrlimit=6&prop=imageinfo&iiprop=url|size|extmetadata&iiextmetadatafilter=Artist|LicenseShortName|UsageTerms|ImageDescription|Credit|Categories`;
  const res = await fetch(url, { headers: { 'User-Agent': 'BiotaEliteBot/1.0 (research@biotaelite.org)' } });
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
        description: meta.ImageDescription ? meta.ImageDescription.value.replace(/<[^>]+>/g, '').trim().slice(0, 150) : ''
      });
    }
  }
  return items;
}

async function main() {
  const items = await searchCommons('Petromyzon marinus');
  for (const it of items) {
    console.log(`- Title: ${it.title}`);
    console.log(`  URL: ${it.url}`);
    console.log(`  License: ${it.license} | Artist: ${it.artist}`);
    console.log(`  Desc: ${it.description}`);
  }
}

main().catch(console.error);
