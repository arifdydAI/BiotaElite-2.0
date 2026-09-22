async function checkUrls() {
  const urls = [
    { name: 'Clarias magur (iNat 140341075)', url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/240221699/large.jpeg' },
    { name: 'Mystus cavasius (iNat 69392883)', url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/112578866/large.jpeg' },
    { name: 'Macrognathus aculeatus (iNat 63623459)', url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/102141748/large.jpeg' },
    { name: 'Clarias magur (Commons Wagur)', url: 'https://upload.wikimedia.org/wikipedia/commons/2/25/%E0%A4%B5%E0%A4%BE%E0%A4%97%E0%A5%81%E0%A4%B0_Wagur.jpg' }
  ];

  for (const u of urls) {
    try {
      const res = await fetch(u.url, { method: 'HEAD', headers: { 'User-Agent': 'BiotaElite/2.0' } });
      console.log(`[${res.status === 200 ? 'OK 200' : 'FAIL ' + res.status}] ${u.name}`);
      console.log(`  Content-Type: ${res.headers.get('content-type')} | Size: ${res.headers.get('content-length')}`);
    } catch (e) {
      console.log(`[ERR] ${u.name}: ${e.message}`);
    }
  }
}

checkUrls();
