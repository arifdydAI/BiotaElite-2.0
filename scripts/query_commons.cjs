const https = require('https');

async function query(term) {
  const url = 'https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=' + encodeURIComponent(term) + '&gsrnamespace=6&gsrlimit=5&prop=imageinfo&iiprop=url|size|extmetadata';
  const res = await fetch(url, { headers: { 'User-Agent': 'BiotaEliteBot/1.0 (research@biotaelite.org)' } });
  const data = await res.json();
  if (!data.query || !data.query.pages) {
    console.log('No results for', term);
    return;
  }
  for (const p of Object.values(data.query.pages)) {
    console.log(p.title);
    if (p.imageinfo && p.imageinfo[0]) {
      console.log('  URL:', p.imageinfo[0].url);
      console.log('  Page:', p.imageinfo[0].descriptionurl);
      console.log('  Artist:', p.imageinfo[0].extmetadata?.Artist?.value?.replace(/<[^>]+>/g, '').trim());
      console.log('  License:', p.imageinfo[0].extmetadata?.LicenseShortName?.value);
      console.log('  Desc:', p.imageinfo[0].extmetadata?.ImageDescription?.value?.replace(/<[^>]+>/g, '').slice(0, 150));
    }
  }
}

async function run() {
  console.log('--- Mystus cavasius ---');
  await query('Mystus cavasius');
  console.log('\n--- Scylla serrata test URL ---');
  try {
    const res = await fetch('https://upload.wikimedia.org/wikipedia/commons/7/7c/Scylla_serrata_240810517.jpg', {
      method: 'HEAD',
      headers: { 'User-Agent': 'BiotaEliteBot/1.0 (research@biotaelite.org)' }
    });
    console.log('Scylla status:', res.status);
  } catch (e) {
    console.log('Scylla err:', e.message);
  }
}

run();
