#!/usr/bin/env node
// MASTER-FIX-07B: Fetch verified image metadata from Wikimedia Commons API
// for all 34 species in seedSpecies.ts
'use strict';

const https = require('https');
const http = require('http');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    lib.get(url, {
      headers: {
        'User-Agent': 'BiotaElite/2.0 (biodiversity research; contact@biota-elite.org)',
        'Accept': 'application/json'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch(e) { reject(new Error('JSON parse error: ' + e.message + '\nData: ' + data.substr(0, 200))); }
      });
    }).on('error', reject);
  });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// All 34 species: scientific name -> species ID
const SPECIES = [
  // Fish species
  { id: 'sp-tenualosa-ilisha', name: 'Tenualosa ilisha', wikiPage: 'Tenualosa_ilisha', commonsFile: 'Hilsa fish.jpg' },
  { id: 'sp-labeo-rohita', name: 'Labeo rohita', wikiPage: 'Labeo_rohita', commonsFile: 'Labeo_rohita.jpg' },
  { id: 'sp-pangasius-pangasius', name: 'Pangasius pangasius', wikiPage: 'Pangasius_pangasius', commonsFile: 'Pangasius_pangasius.jpg' },
  { id: 'sp-chiloscyllium-indicum', name: 'Chiloscyllium indicum', wikiPage: 'Chiloscyllium_indicum', commonsFile: 'Chiloscyllium_indicum_SI.jpg' },
  { id: 'sp-catla-catla', name: 'Catla catla', wikiPage: 'Catla', commonsFile: 'Catla_catla.jpg' },
  { id: 'sp-cirrhinus-mrigala', name: 'Cirrhinus mrigala', wikiPage: 'Cirrhinus_mrigala', commonsFile: 'Cirrhinus_mrigala.jpg' },
  { id: 'sp-channa-striata', name: 'Channa striata', wikiPage: 'Channa_striata', commonsFile: 'Channa_striata.jpg' },
  { id: 'sp-channa-punctata', name: 'Channa punctata', wikiPage: 'Channa_punctata', commonsFile: 'Channa_punctata_Bloch.jpg' },
  { id: 'sp-clarias-magur', name: 'Clarias magur', wikiPage: 'Clarias_magur', commonsFile: 'Clarias_magur.jpg' },
  { id: 'sp-clarias-batrachus', name: 'Clarias batrachus', wikiPage: 'Clarias_batrachus', commonsFile: 'Clarias_batrachus.jpg' },
  { id: 'sp-heteropneustes-fossilis', name: 'Heteropneustes fossilis', wikiPage: 'Heteropneustes_fossilis', commonsFile: 'Heteropneustes_fossilis.jpg' },
  { id: 'sp-anabas-testudineus', name: 'Anabas testudineus', wikiPage: 'Anabas_testudineus', commonsFile: 'Anabas_testudineus.jpg' },
  { id: 'sp-mystus-cavasius', name: 'Mystus cavasius', wikiPage: 'Mystus_cavasius', commonsFile: 'Mystus_cavasius.jpg' },
  { id: 'sp-wallago-attu', name: 'Wallago attu', wikiPage: 'Wallago_attu', commonsFile: 'Wallago_attu.jpg' },
  { id: 'sp-chitala-chitala', name: 'Chitala chitala', wikiPage: 'Chitala_chitala', commonsFile: 'Chitala_chitala.jpg' },
  { id: 'sp-eutropiichthys-vacha', name: 'Eutropiichthys vacha', wikiPage: 'Eutropiichthys_vacha', commonsFile: 'Eutropiichthys_vacha.jpg' },
  { id: 'sp-pethia-conchonius', name: 'Pethia conchonius', wikiPage: 'Pethia_conchonius', commonsFile: 'Puntius_conchonius.jpg' },
  { id: 'sp-macrognathus-aculeatus', name: 'Macrognathus aculeatus', wikiPage: 'Macrognathus_aculeatus', commonsFile: 'Macrognathus_aculeatus.jpg' },
  { id: 'sp-mastacembelus-armatus', name: 'Mastacembelus armatus', wikiPage: 'Mastacembelus_armatus', commonsFile: 'Mastacembelus_armatus.jpg' },
  { id: 'sp-ompok-pabda', name: 'Ompok pabda', wikiPage: 'Ompok_pabda', commonsFile: 'Ompok_pabda.jpg' },
  { id: 'sp-lates-calcarifer', name: 'Lates calcarifer', wikiPage: 'Barramundi', commonsFile: 'Lates_calcarifer.jpg' },
  // Mammals (dolphins)
  { id: 'sp-orcaella-brevirostris', name: 'Orcaella brevirostris', wikiPage: 'Irrawaddy_dolphin', commonsFile: 'Irrawaddy_dolphin_Orcaella_brevirostris.jpg' },
  { id: 'sp-platanista-gangetica', name: 'Platanista gangetica', wikiPage: 'South_Asian_river_dolphin', commonsFile: 'Platanista_gangetica.jpg' },
  // Marine species
  { id: 'sp-chelonia-mydas', name: 'Chelonia mydas', wikiPage: 'Green_sea_turtle', commonsFile: 'Chelonia_mydas.jpg' },
  { id: 'sp-lepidochelys-olivacea', name: 'Lepidochelys olivacea', wikiPage: 'Olive_ridley_sea_turtle', commonsFile: 'Lepidochelys_olivacea.jpg' },
  { id: 'sp-hydrophis-platurus', name: 'Hydrophis platurus', wikiPage: 'Hydrophis_platurus', commonsFile: 'Pelamis_platurus1.jpg' },
  { id: 'sp-balaenoptera-musculus', name: 'Balaenoptera musculus', wikiPage: 'Blue_whale', commonsFile: 'Anim1754_-_Flickr_-_NOAA_Photo_Library.jpg' },
  { id: 'sp-phoca-vitulina', name: 'Phoca vitulina', wikiPage: 'Harbor_seal', commonsFile: 'Phoca_vitulina.jpg' },
  { id: 'sp-dugong-dugon', name: 'Dugong dugon', wikiPage: 'Dugong', commonsFile: 'Dugong_dugon.jpg' },
  { id: 'sp-aurelia-aurita', name: 'Aurelia aurita', wikiPage: 'Aurelia_aurita', commonsFile: 'Aurelia_aurita.jpg' },
  { id: 'sp-octopus-vulgaris', name: 'Octopus vulgaris', wikiPage: 'Octopus_vulgaris', commonsFile: 'Octopus_vulgaris_2.jpg' },
  { id: 'sp-scylla-serrata', name: 'Scylla serrata', wikiPage: 'Scylla_serrata', commonsFile: 'Scylla_serrata.jpg' },
  { id: 'sp-acanthaster-planci', name: 'Acanthaster planci', wikiPage: 'Crown-of-thorns_starfish', commonsFile: 'Acanthaster_planci.jpg' },
  { id: 'sp-spongia-officinalis', name: 'Spongia officinalis', wikiPage: 'Spongia_officinalis', commonsFile: 'Spongia_officinalis.jpg' },
];

async function getWikipediaImageInfo(wikiPage) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(wikiPage)}&prop=pageimages&format=json&pithumbsize=800&piprop=original|thumbnail`;
  const data = await fetchJson(url);
  const pages = data.query && data.query.pages;
  if (!pages) return null;
  const page = Object.values(pages)[0];
  if (!page || page.missing !== undefined) return null;
  return {
    thumbnail: page.thumbnail,
    original: page.original,
    pageimage: page.pageimage
  };
}

async function getCommonsFileInfo(filename) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(filename)}&prop=imageinfo&iiprop=url|extmetadata&format=json`;
  const data = await fetchJson(url);
  const pages = data.query && data.query.pages;
  if (!pages) return null;
  const page = Object.values(pages)[0];
  if (!page || page.missing !== undefined) return null;
  
  const ii = page.imageinfo && page.imageinfo[0];
  if (!ii) return null;
  
  const meta = ii.extmetadata || {};
  return {
    url: ii.url,
    descriptionUrl: ii.descriptionurl,
    license: meta.LicenseShortName && meta.LicenseShortName.value,
    artist: meta.Artist && meta.Artist.value,
    credit: meta.Credit && meta.Credit.value,
  };
}

async function getCommonsFileInfoByPage(wikiPage) {
  // Get the page image name from Wikipedia, then look it up on Commons
  const wpData = await getWikipediaImageInfo(wikiPage);
  if (wpData && wpData.pageimage) {
    const fileInfo = await getCommonsFileInfo(wpData.pageimage);
    if (fileInfo && fileInfo.url) {
      return { ...fileInfo, pageimage: wpData.pageimage, thumbnail: wpData.thumbnail };
    }
  }
  return null;
}

async function main() {
  console.log('\n===== MASTER-FIX-07B: Species Image Research =====\n');
  const results = [];
  
  for (const sp of SPECIES) {
    process.stdout.write(`Fetching: ${sp.name}...`);
    try {
      // First try: get the Wikipedia page image
      const wpData = await getWikipediaImageInfo(sp.wikiPage);
      let imageUrl = null;
      let pageimage = null;
      let thumbnailUrl = null;
      let license = null;
      let artist = null;
      
      if (wpData && wpData.pageimage) {
        pageimage = wpData.pageimage;
        if (wpData.original) imageUrl = wpData.original.source;
        if (wpData.thumbnail) thumbnailUrl = wpData.thumbnail.source;
        
        // Get metadata from Commons
        await sleep(200);
        const commons = await getCommonsFileInfo(pageimage);
        if (commons) {
          if (!imageUrl && commons.url) imageUrl = commons.url;
          license = commons.license;
          artist = commons.artist;
        }
      }
      
      if (imageUrl) {
        console.log(` ✓ FOUND`);
      } else {
        console.log(` - NOT FOUND (will try Commons direct)`);
        await sleep(200);
        const commons2 = await getCommonsFileInfo(sp.commonsFile);
        if (commons2 && commons2.url) {
          imageUrl = commons2.url;
          license = commons2.license;
          artist = commons2.artist;
          pageimage = sp.commonsFile;
          console.log(`  → Found via direct Commons: ${sp.commonsFile}`);
        } else {
          console.log(`  → Commons direct also failed`);
        }
      }
      
      results.push({
        id: sp.id,
        name: sp.name,
        imageUrl,
        thumbnailUrl,
        pageimage,
        license,
        artist,
        wikiPage: sp.wikiPage,
        commonsFileAttempted: sp.commonsFile
      });
    } catch(e) {
      console.log(` ERROR: ${e.message}`);
      results.push({ id: sp.id, name: sp.name, imageUrl: null, error: e.message });
    }
    await sleep(500);
  }
  
  console.log('\n\n===== RESULTS =====\n');
  const found = results.filter(r => r.imageUrl);
  const notFound = results.filter(r => !r.imageUrl);
  
  console.log(`Found: ${found.length}/${SPECIES.length}`);
  console.log(`Not found: ${notFound.length}/${SPECIES.length}`);
  
  if (notFound.length) {
    console.log('\nNot found:');
    notFound.forEach(r => console.log(`  - ${r.name} (${r.id})`));
  }
  
  console.log('\n\n===== IMAGE DATA (for seedSpecies.ts) =====\n');
  for (const r of found) {
    console.log(`// ${r.name}`);
    console.log(`// Commons: ${r.pageimage || r.commonsFileAttempted}`);
    console.log(`// License: ${r.license}`);
    console.log(`// Artist: ${r.artist}`);
    console.log(`// URL: ${r.imageUrl}`);
    console.log();
  }
  
  // Write full results as JSON
  const fs = require('fs');
  const outPath = require('path').join(__dirname, 'data', 'species_image_research.json');
  fs.mkdirSync(require('path').join(__dirname, 'data'), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2));
  console.log(`\nFull results written to: ${outPath}`);
}

main().catch(console.error);
