// Validate image URLs and fetch metadata
const candidates = [
  {
    speciesId: 'sp-tenualosa-ilisha',
    name: 'Tenualosa ilisha',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Tenualosa_ilisha_%28%E0%A6%87%E0%A6%B2%E0%A6%BF%E0%A6%B6%29%2C_taken_from_Chandpur_Fish_Market_%284%29.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Tenualosa_ilisha_(%E0%A6%87%E0%A6%B2%E0%A6%BF%E0%A6%B6),_taken_from_Chandpur_Fish_Market_(4).jpg',
    sourceName: 'Wikimedia Commons',
    photographer: 'Nahid Sultan',
    license: 'CC BY-SA 4.0',
    attribution: 'Nahid Sultan, CC BY-SA 4.0, via Wikimedia Commons',
    imageType: 'specimen_photo',
    notes: 'Fresh specimen of Tenualosa ilisha (Hilsa) documented at Chandpur Fish Market, Bangladesh.'
  },
  {
    speciesId: 'sp-tenualosa-ilisha-day',
    name: 'Tenualosa ilisha (Day 1878)',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Tenualosa_ilisha_Day.png',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Tenualosa_ilisha_Day.png',
    sourceName: 'Wikimedia Commons',
    photographer: 'Sir Francis Day (1878)',
    license: 'Public domain',
    attribution: 'Francis Day (1878), The Fishes of India, Public domain, via Wikimedia Commons',
    imageType: 'scientific_illustration',
    notes: 'Scientific illustration of Tenualosa ilisha (as Clupea ilisha) from Francis Day, The Fishes of India (1878).'
  },
  {
    speciesId: 'sp-labeo-rohita',
    name: 'Labeo rohita',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Labeo_rohita.JPG',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Labeo_rohita.JPG',
    sourceName: 'Wikimedia Commons',
    photographer: 'Khalid Mahmood',
    license: 'CC BY-SA 4.0',
    attribution: 'Khalid Mahmood, CC BY-SA 4.0, via Wikimedia Commons',
    imageType: 'specimen_photo',
    notes: 'Specimen photograph of Rohu (Labeo rohita).'
  },
  {
    speciesId: 'sp-pangasius-pangasius',
    name: 'Pangasius pangasius',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Pangasisus_Hamilton.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Pangasisus_Hamilton.jpg',
    sourceName: 'Wikimedia Commons',
    photographer: 'Francis Hamilton (1822)',
    license: 'Public domain',
    attribution: 'Francis Hamilton (1822), An Account of the Fishes found in the River Ganges and its branches, Public domain, via Wikimedia Commons',
    imageType: 'scientific_illustration',
    notes: 'Original type description illustration of Pangasius pangasius (as Pimelodus pangasius) from Francis Hamilton (1822).'
  },
  {
    speciesId: 'sp-chiloscyllium-indicum',
    name: 'Chiloscyllium indicum',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Chiloscyllium_indicum_malaysia_2.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Chiloscyllium_indicum_malaysia_2.jpg',
    sourceName: 'Wikimedia Commons',
    photographer: 'Tassapon KRAJANGDARA',
    license: 'CC BY 3.0',
    attribution: 'Tassapon KRAJANGDARA, CC BY 3.0, via Wikimedia Commons',
    imageType: 'specimen_photo',
    notes: 'Morphological specimen photograph of Slender bamboo shark (Chiloscyllium indicum).'
  },
  {
    speciesId: 'sp-catla-catla',
    name: 'Catla catla',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Catla_catla.JPG',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Catla_catla.JPG',
    sourceName: 'Wikimedia Commons',
    photographer: 'Khalid Mahmood',
    license: 'CC BY-SA 4.0',
    attribution: 'Khalid Mahmood, CC BY-SA 4.0, via Wikimedia Commons',
    imageType: 'specimen_photo',
    notes: 'Specimen photograph of Catla (Catla catla).'
  },
  {
    speciesId: 'sp-cirrhinus-mrigala',
    name: 'Cirrhinus mrigala',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Mrigal_Carp_%28Cirrhinus_mrigala%29.JPG',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Mrigal_Carp_(Cirrhinus_mrigala).JPG',
    sourceName: 'Wikimedia Commons',
    photographer: 'Priyankar Chakraborty',
    license: 'CC BY-SA 4.0',
    attribution: 'Priyankar Chakraborty, CC BY-SA 4.0, via Wikimedia Commons',
    imageType: 'specimen_photo',
    notes: 'Specimen photograph of Mrigal Carp (Cirrhinus mrigala).'
  },
  {
    speciesId: 'sp-channa-striata',
    name: 'Channa striata',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Gabus_070909_0074_rwg.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Gabus_070909_0074_rwg.jpg',
    sourceName: 'Wikimedia Commons',
    photographer: 'Wie146',
    license: 'CC BY-SA 3.0',
    attribution: 'Wie146, CC BY-SA 3.0, via Wikimedia Commons',
    imageType: 'specimen_photo',
    notes: 'Specimen photograph of Striped snakehead (Channa striata).'
  },
  {
    speciesId: 'sp-channa-punctata',
    name: 'Channa punctata',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Channa_punctata.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Channa_punctata.jpg',
    sourceName: 'Wikimedia Commons',
    photographer: 'Anup Sadi',
    license: 'CC BY-SA 4.0',
    attribution: 'Anup Sadi, CC BY-SA 4.0, via Wikimedia Commons',
    imageType: 'specimen_photo',
    notes: 'Specimen photograph of Spotted snakehead (Channa punctata) at Mohangonj, Netrokana, Bangladesh.'
  },
  {
    speciesId: 'sp-clarias-magur',
    name: 'Clarias magur',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Clarias_magur_Mintern_112.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Clarias_magur_Mintern_112.jpg',
    sourceName: 'Wikimedia Commons',
    photographer: 'R. Mintern (lithographer)',
    license: 'Public domain',
    attribution: 'R. Mintern, Public domain, via Wikimedia Commons',
    imageType: 'scientific_illustration',
    notes: 'Scientific illustration of Magur catfish Clarias magur (Hamilton, 1822).'
  },
  {
    speciesId: 'sp-clarias-batrachus',
    name: 'Clarias batrachus',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Clarias_batrachus-ZOO.Brno.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Clarias_batrachus-ZOO.Brno.jpg',
    sourceName: 'Wikimedia Commons',
    photographer: 'Mistvan',
    license: 'CC BY-SA 3.0',
    attribution: 'Mistvan, CC BY-SA 3.0, via Wikimedia Commons',
    imageType: 'specimen_photo',
    notes: 'Aquarium specimen photograph of Walking catfish (Clarias batrachus).'
  },
  {
    speciesId: 'sp-heteropneustes-fossilis',
    name: 'Heteropneustes fossilis',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Heteropneustes_fossilis.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Heteropneustes_fossilis.jpg',
    sourceName: 'Wikimedia Commons',
    photographer: 'Maxim Gavrilyuk',
    license: 'CC BY-SA 3.0',
    attribution: 'Maxim Gavrilyuk, CC BY-SA 3.0, via Wikimedia Commons',
    imageType: 'specimen_photo',
    notes: 'Specimen photograph of Stinging catfish (Heteropneustes fossilis).'
  },
  {
    speciesId: 'sp-anabas-testudineus',
    name: 'Anabas testudineus',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Anabas_testudineus.png',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Anabas_testudineus.png',
    sourceName: 'Wikimedia Commons',
    photographer: 'Sahat Ratmuangkhwang',
    license: 'CC BY 3.0',
    attribution: 'Sahat Ratmuangkhwang, CC BY 3.0, via Wikimedia Commons',
    imageType: 'specimen_photo',
    notes: 'Specimen photograph of Climbing perch (Anabas testudineus).'
  },
  {
    speciesId: 'sp-wallago-attu',
    name: 'Wallago attu',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Wallago_attu_1.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Wallago_attu_1.jpg',
    sourceName: 'Wikimedia Commons',
    photographer: 'Reezwan',
    license: 'CC BY-SA 3.0',
    attribution: 'Reezwan, CC BY-SA 3.0, via Wikimedia Commons',
    imageType: 'specimen_photo',
    notes: 'Specimen photograph of Boal catfish (Wallago attu).'
  },
  {
    speciesId: 'sp-chitala-chitala',
    name: 'Chitala chitala',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Chitala_chitala_porte_dor%C3%A9e.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Chitala_chitala_porte_dor%C3%A9e.jpg',
    sourceName: 'Wikimedia Commons',
    photographer: 'Cangadoba',
    license: 'CC BY-SA 4.0',
    attribution: 'Cangadoba, CC BY-SA 4.0, via Wikimedia Commons',
    imageType: 'specimen_photo',
    notes: 'Specimen photograph of Clown knifefish (Chitala chitala).'
  },
  {
    speciesId: 'sp-eutropiichthys-vacha',
    name: 'Eutropiichthys vacha',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/EutropiichthysVachaDay.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:EutropiichthysVachaDay.jpg',
    sourceName: 'Wikimedia Commons',
    photographer: 'Sir Francis Day (1878)',
    license: 'Public domain',
    attribution: 'Sir Francis Day (1878), The Fishes of India, Public domain, via Wikimedia Commons',
    imageType: 'scientific_illustration',
    notes: 'Scientific illustration of Vacha catfish (Eutropiichthys vacha) from Francis Day (1878).'
  },
  {
    speciesId: 'sp-pethia-conchonius',
    name: 'Pethia conchonius',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Puntius_conchonius.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Puntius_conchonius.jpg',
    sourceName: 'Wikimedia Commons',
    photographer: 'Marrabbio2',
    license: 'CC BY-SA 4.0',
    attribution: 'Marrabbio2, CC BY-SA 4.0, via Wikimedia Commons',
    imageType: 'specimen_photo',
    notes: 'Specimen photograph of Rosy barb (Pethia conchonius).'
  },
  {
    speciesId: 'sp-macrognathus-aculeatus',
    name: 'Macrognathus aculeatus',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Rhynchobdella_aculeata_Ford_72.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Rhynchobdella_aculeata_Ford_72.jpg',
    sourceName: 'Wikimedia Commons',
    photographer: 'George Henry Ford',
    license: 'Public domain',
    attribution: 'George Henry Ford, Public domain, via Wikimedia Commons',
    imageType: 'scientific_illustration',
    notes: 'Scientific illustration of Lesser spiny eel (Macrognathus aculeatus syn. Rhynchobdella aculeata).'
  },
  {
    speciesId: 'sp-mastacembelus-armatus',
    name: 'Mastacembelus armatus',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Tire_Track_Eel.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Tire_Track_Eel.jpg',
    sourceName: 'Wikimedia Commons',
    photographer: 'Adolsomee',
    license: 'CC BY-SA 3.0',
    attribution: 'Adolsomee, CC BY-SA 3.0, via Wikimedia Commons',
    imageType: 'specimen_photo',
    notes: 'Specimen photograph of Zig-zag eel (Mastacembelus armatus).'
  },
  {
    speciesId: 'sp-ompok-pabda',
    name: 'Ompok pabda',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Ompok_pabda_20020400.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Ompok_pabda_20020400.jpg',
    sourceName: 'Wikimedia Commons',
    photographer: 'Biswarup Ganguly',
    license: 'CC BY 3.0',
    attribution: 'Biswarup Ganguly, CC BY 3.0, via Wikimedia Commons',
    imageType: 'specimen_photo',
    notes: 'Specimen photograph of Pabda catfish (Ompok pabda).'
  },
  {
    speciesId: 'sp-lates-calcarifer',
    name: 'Lates calcarifer',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Lates_calcarifer%2C_2014-09-19a.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Lates_calcarifer%2C_2014-09-19a.jpg',
    sourceName: 'Wikimedia Commons',
    photographer: 'Mitch Ames',
    license: 'CC BY-SA 4.0',
    attribution: 'Mitch Ames, CC BY-SA 4.0, via Wikimedia Commons',
    imageType: 'specimen_photo',
    notes: 'Live specimen photograph of Barramundi (Lates calcarifer).'
  },
  {
    speciesId: 'sp-orcaella-brevirostris',
    name: 'Orcaella brevirostris',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Irrawaddy_Dolphin.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Irrawaddy_Dolphin.jpg',
    sourceName: 'Wikimedia Commons',
    photographer: 'Jean-Claude Durka',
    license: 'CC BY-SA 3.0',
    attribution: 'Jean-Claude Durka, CC BY-SA 3.0, via Wikimedia Commons',
    imageType: 'field_photo',
    notes: 'Field photograph of Irrawaddy dolphin (Orcaella brevirostris).'
  },
  {
    speciesId: 'sp-platanista-gangetica',
    name: 'Platanista gangetica',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Ganges_River_Dolphin.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Ganges_River_Dolphin.jpg',
    sourceName: 'Wikimedia Commons',
    photographer: 'Kukil Gogoi',
    license: 'CC BY-SA 4.0',
    attribution: 'Kukil Gogoi, CC BY-SA 4.0, via Wikimedia Commons',
    imageType: 'field_photo',
    notes: 'Field photograph of Ganges river dolphin (Platanista gangetica).'
  },
  {
    speciesId: 'sp-chelonia-mydas',
    name: 'Chelonia mydas',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Green_sea_turtle_%28Chelonia_mydas%29_Moorea.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Green_sea_turtle_(Chelonia_mydas)_Moorea.jpg',
    sourceName: 'Wikimedia Commons',
    photographer: 'Charles J. Sharp',
    license: 'CC BY-SA 4.0',
    attribution: 'Charles J. Sharp, CC BY-SA 4.0, via Wikimedia Commons',
    imageType: 'field_photo',
    notes: 'Field photograph of Green sea turtle (Chelonia mydas).'
  },
  {
    speciesId: 'sp-lepidochelys-olivacea',
    name: 'Lepidochelys olivacea',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Turtle_golfina_escobilla_Oaxaca_Mexico_Claudio_Giovenzana_2010.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Turtle_golfina_escobilla_Oaxaca_Mexico_Claudio_Giovenzana_2010.jpg',
    sourceName: 'Wikimedia Commons',
    photographer: 'Claudio Giovenzana',
    license: 'CC BY-SA 3.0',
    attribution: 'Claudio Giovenzana, CC BY-SA 3.0, via Wikimedia Commons',
    imageType: 'field_photo',
    notes: 'Field photograph of Olive ridley turtle (Lepidochelys olivacea).'
  },
  {
    speciesId: 'sp-hydrophis-platurus',
    name: 'Hydrophis platurus',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Hydrophis_platurus_31991745.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Hydrophis_platurus_31991745.jpg',
    sourceName: 'Wikimedia Commons',
    photographer: 'Rob Foster',
    license: 'CC BY 4.0',
    attribution: 'Rob Foster, CC BY 4.0, via Wikimedia Commons',
    imageType: 'field_photo',
    notes: 'Field photograph of Yellow-bellied sea snake (Hydrophis platurus).'
  },
  {
    speciesId: 'sp-balaenoptera-musculus',
    name: 'Balaenoptera musculus',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Bluewhale877.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Bluewhale877.jpg',
    sourceName: 'Wikimedia Commons',
    photographer: 'NMFS Northeast Fisheries Science Center (NOAA)',
    license: 'Public domain',
    attribution: 'NOAA NMFS, Public domain, via Wikimedia Commons',
    imageType: 'field_photo',
    notes: 'Field photograph of adult Blue whale (Balaenoptera musculus).'
  },
  {
    speciesId: 'sp-phoca-vitulina',
    name: 'Phoca vitulina',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Common_seal_%28Phoca_vitulina%29.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Common_seal_(Phoca_vitulina).jpg',
    sourceName: 'Wikimedia Commons',
    photographer: 'Charles J. Sharp',
    license: 'CC BY-SA 4.0',
    attribution: 'Charles J. Sharp, CC BY-SA 4.0, via Wikimedia Commons',
    imageType: 'field_photo',
    notes: 'Field photograph of Harbor seal (Phoca vitulina).'
  },
  {
    speciesId: 'sp-dugong-dugon',
    name: 'Dugong dugon',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Dugong_Marsa_Alam.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Dugong_Marsa_Alam.jpg',
    sourceName: 'Wikimedia Commons',
    photographer: 'Julien Willem',
    license: 'CC BY-SA 3.0',
    attribution: 'Julien Willem, CC BY-SA 3.0, via Wikimedia Commons',
    imageType: 'field_photo',
    notes: 'Underwater field photograph of Dugong (Dugong dugon).'
  },
  {
    speciesId: 'sp-aurelia-aurita',
    name: 'Aurelia aurita',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Moon_Jellyfish_%2814278816210%29.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Moon_Jellyfish_(14278816210).jpg',
    sourceName: 'Wikimedia Commons',
    photographer: 'Paul VanDerWerf',
    license: 'CC BY 2.0',
    attribution: 'Paul VanDerWerf, CC BY 2.0, via Wikimedia Commons',
    imageType: 'field_photo',
    notes: 'Field photograph of Moon jellyfish (Aurelia aurita).'
  },
  {
    speciesId: 'sp-octopus-vulgaris',
    name: 'Octopus vulgaris',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Pulpo_com%C3%BAn_%28Octopus_vulgaris%29%2C_Parque_natural_de_la_Arr%C3%A1bida%2C_Portugal%2C_2020-07-31%2C_DD_108.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Pulpo_com%C3%BAn_(Octopus_vulgaris),_Parque_natural_de_la_Arr%C3%A1bida,_Portugal,_2020-07-31,_DD_108.jpg',
    sourceName: 'Wikimedia Commons',
    photographer: 'Diego Delso',
    license: 'CC BY-SA 4.0',
    attribution: 'Diego Delso, CC BY-SA 4.0, via Wikimedia Commons',
    imageType: 'field_photo',
    notes: 'Underwater field photograph of Common octopus (Octopus vulgaris).'
  },
  {
    speciesId: 'sp-scylla-serrata',
    name: 'Scylla serrata',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Scylla_serrata_240810517.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Scylla_serrata_240810517.jpg',
    sourceName: 'Wikimedia Commons',
    photographer: 'Rosemary Harrison',
    license: 'CC BY-SA 4.0',
    attribution: 'Rosemary Harrison, CC BY-SA 4.0, via Wikimedia Commons',
    imageType: 'field_photo',
    notes: 'Specimen photograph of Giant mud crab (Scylla serrata).'
  },
  {
    speciesId: 'sp-acanthaster-planci',
    name: 'Acanthaster planci',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/CrownofThornsStarfish_Fiji_2005-10-12.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:CrownofThornsStarfish_Fiji_2005-10-12.jpg',
    sourceName: 'Wikimedia Commons',
    photographer: 'Matt Wright',
    license: 'CC BY 2.5',
    attribution: 'Matt Wright, CC BY 2.5, via Wikimedia Commons',
    imageType: 'field_photo',
    notes: 'Field photograph of Crown-of-thorns starfish (Acanthaster planci).'
  },
  {
    speciesId: 'sp-spongia-officinalis',
    name: 'Spongia officinalis',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Bath_sponge_Spongia_officinalis_Greece.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Bath_sponge_Spongia_officinalis_Greece.jpg',
    sourceName: 'Wikimedia Commons',
    photographer: 'Rob W. M. Van Soest et al. (photo courtesy E. Voultsiadou)',
    license: 'CC BY-SA 2.5',
    attribution: 'Rob W. M. Van Soest et al. / E. Voultsiadou, CC BY-SA 2.5, via Wikimedia Commons',
    imageType: 'specimen_photo',
    notes: 'Specimen photograph of Bath sponge (Spongia officinalis).'
  }
];

async function checkAll() {
  console.log(`Checking ${candidates.length} candidate images...\n`);
  for (const c of candidates) {
    try {
      const res = await fetch(c.url, {
        method: 'HEAD',
        headers: { 'User-Agent': 'BiotaEliteBot/1.0 (research@biotaelite.org)' }
      });
      const ct = res.headers.get('content-type');
      const cl = res.headers.get('content-length');
      console.log(`[${res.status === 200 ? 'OK 200' : 'FAIL ' + res.status}] ${c.name} (${c.speciesId})`);
      console.log(`    Type: ${ct} | Size: ${cl} bytes`);
      if (res.status !== 200) {
        console.log(`    URL: ${c.url}`);
      }
    } catch (e) {
      console.error(`[ERROR] ${c.name}: ${e.message}`);
    }
  }
}

checkAll();
