const http = require('http');

const routes = [
  '/',
  '/fish',
  '/fish/group/group-agnatha',
  '/fish/class/class-sarcopterygii',
  '/fish/order-myxiniformes',
  '/fish/order-petromyzontiformes',
  '/fish/order/order-carcharhiniformes',
  '/fish/order/order-cypriniformes',
  '/fish/order/order-coelacanthiformes',
  '/fish/order/order-polypteriformes',
  '/fish/order/order-acipenseriformes',
  '/fish/order/order-salmoniformes',
  '/fish/order/order-lamniformes',
  '/fish/family/taxon-cyprinidae',
  '/fish/genus/taxon-labeo',
  '/species',
  '/species/sp-tenualosa-ilisha',
  '/species/sp-labeo-rohita',
  '/species/sp-latimeria-chalumnae',
  '/species/sp-protopterus-annectens',
  '/species/sp-salmo-trutta',
  '/species/sp-carcharodon-carcharias',
  '/species/sp-galeocerdo-cuvier',
  '/species/sp-mobula-birostris',
  '/species/sp-caranx-ignobilis',
  '/species/sp-exocoetus-volitans',
  '/species/sp-arapaima-gigas',
  '/species/sp-gadus-morhua',
  '/species/sp-platichthys-flesus',
  '/species/sp-tetraodon-mbu',
  '/scientific-names',
  '/marine',
  '/bangladesh',
  '/taxonomy'
];

async function checkRoute(route) {
  return new Promise((resolve) => {
    http.get(`http://localhost:2021${route}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          route,
          status: res.statusCode,
          hasHtml: data.includes('<div id="root">') || data.includes('<!DOCTYPE html>'),
          length: data.length
        });
      });
    }).on('error', (err) => {
      resolve({ route, status: 'ERROR', error: err.message });
    });
  });
}

async function run() {
  console.log('=== VERIFYING HTTP SERVER & ROUTES ON LOCALHOST:2021 ===\n');
  let allPass = true;
  for (const r of routes) {
    const res = await checkRoute(r);
    const mark = res.status === 200 && res.hasHtml ? '✓' : '✗';
    if (mark === '✗') allPass = false;
    console.log(`  [${mark}] ${r.padEnd(38)} -> Status: ${res.status}, Length: ${res.length} bytes`);
  }
  console.log(`\nResult: ${allPass ? 'ALL ROUTES 200 OK' : 'FAILURES DETECTED'}`);
}

run();
