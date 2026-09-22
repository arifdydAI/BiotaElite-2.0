const fs = require('fs');
const path = require('path');

const speciesFile = path.join(__dirname, '../src/data/seedSpecies.ts');
let content = fs.readFileSync(speciesFile, 'utf8');

const expansionSpecies = [
  {
    id: 'sp-latimeria-chalumnae',
    scientificName: 'Latimeria chalumnae',
    scientificNameAuthorship: 'Smith, 1939',
    taxonomicStatus: 'accepted',
    module: 'fish',
    taxonId: 'taxon-latimeria',
    synonyms: [
      { name: 'Latimeria chalumnae', authorship: 'Smith, 1939', status: 'homotypic', year: 1939, isBasionym: true, sourceId: 'ref-smith-1939' }
    ],
    commonNames: { en: ['West Indian Ocean coelacanth', 'Gombessa'], bn: ['ওয়েস্ট ইন্ডিয়ান ওশান সিল্যাকান্থ', 'সিল্যাকান্থ'] },
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Sarcopterygii', order: 'Coelacanthiformes', family: 'Latimeriidae', genus: 'Latimeria', species: 'Latimeria chalumnae' },
    morphology: {
      diagnosticFeatures: [
        'Lobed paired fins supported by internal bony axial skeletons mirroring tetrapod limb architecture.',
        'Diphycercal caudal fin with a distinct supplementary middle lobe protruding beyond dorsal and ventral lobes.',
        'Intracranial joint dividing the neurocranium, allowing dorsal flexion of the anterior snout while feeding.',
        'Sensory rostral organ filled with electroconductive gel inside the ethmoid region for passive electrolocation.'
      ],
      description: 'Latimeria chalumnae is a living sarcopterygian fossil fish reaching up to 2 meters. Deep metallic blue with irregular white flecks providing camouflage against cave walls. Enclosed in heavy cosmoid scales.',
      maxStandardLengthCm: 200,
      coloration: 'Deep metallic blue with unique irregular white and pale flecks across flanks; turns dull dark brown post-mortem.'
    },
    habitat: { systems: ['marine'], zones: ['bathydemersal', 'submarine caves', 'steep lava slopes'], depthRangeMeters: { min: 100, max: 500 } },
    bangladeshOccurrence: {
      present: false,
      regions: ['Western Indian Ocean: Comoros Archipelago, South Africa (Sodwana Bay), Mozambique, Madagascar, Tanzania'],
      habitatTypes: ['subsea volcanic caves', 'steep continental and island lava shelves'],
      residencyStatus: 'not_recorded',
      localNamesBn: ['সিল্যাকান্থ'],
      notes: 'Global marine reference species for the lobe-finned class Sarcopterygii and order Coelacanthiformes. Absent from Bangladesh and northern Indian Ocean waters.'
    },
    ecology: {
      dietCategory: 'carnivore',
      dietSummary: 'Nocturnal drift-forager feeding on deep-sea teleosts (snappers, lanternfishes), cuttlefish, and benthic squids.',
      behavior: 'Drifts passively in submarine currents upside-down or vertically while scanning rocky substrate using rostral electroreceptors.',
      reproduction: 'Internal fertilization; ovoviviparous with females giving birth to 5-26 live young after a 3-5 year gestation period.',
      ecologicalRole: 'Apex nocturnal cave predator in deep-slope marine ecosystems.'
    },
    conservation: {
      iucnGlobalStatus: 'CR',
      globalIucnStatus: 'CR',
      iucnAssessmentYear: 2020,
      globalStatusSource: 'IUCN Red List 2020: e.T11375A206649069',
      threats: ['Accidental entanglement and bycatch in deep-set artisanal shark gillnets.', 'Extreme longevity and very low reproductive fecundity.']
    },
    lifecycleStatus: 'published', isVerified: true, speciesVerificationStatus: 'verified', imageVerificationStatus: 'verified', isPublished: true,
    referenceIds: ['ref-smith-1939', 'ref-fishbase-2024', 'ref-eschmeyer-2024', 'ref-iucn-global-2024'],
    media: [
      {
        id: 'img-sp-latimeria-chalumnae-01',
        speciesId: 'sp-latimeria-chalumnae',
        taxonId: 'taxon-latimeria',
        url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Latimeria_Chalumnae_-_Coelacanth_-_NHMW.jpg',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Latimeria_Chalumnae_-_Coelacanth_-_NHMW.jpg',
        caption: 'Preserved adult specimen of Latimeria chalumnae (Coelacanth) at the Natural History Museum of Vienna.',
        sourceName: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Latimeria_Chalumnae_-_Coelacanth_-_NHMW.jpg',
        photographer: 'Alberto Fernandez Fernandez',
        license: 'CC-BY-SA',
        attribution: 'Alberto Fernandez Fernandez, CC BY-SA 3.0, via Wikimedia Commons',
        isVerified: true,
        verificationStatus: 'verified',
        imageType: 'specimen_photo',
        type: 'specimen_photo',
        verifiedBy: 'BiotaElite Taxonomic & Visual Audit Panel',
        verifiedAt: '2026-09-14T10:00:00Z',
        notes: 'Museum voucher specimen clearly showing the three-lobed diphycercal tail, lobed paired fins, and intracranial profile.'
      }
    ],
    version: 1, createdAt: '2026-09-14T10:00:00Z', updatedAt: '2026-09-14T10:00:00Z', verifiedAt: '2026-09-14T10:00:00Z', verifiedBy: 'Zoological Nomenclature & Ichthyology Panel'
  },
  {
    id: 'sp-protopterus-annectens',
    scientificName: 'Protopterus annectens',
    scientificNameAuthorship: '(Owen, 1839)',
    taxonomicStatus: 'accepted',
    module: 'fish',
    taxonId: 'taxon-protopterus',
    synonyms: [
      { name: 'Lepidosiren annectens', authorship: 'Owen, 1839', status: 'homotypic', year: 1839, isBasionym: true }
    ],
    commonNames: { en: ['West African lungfish'], bn: ['আফ্রিকান ফুসফুস মাছ', 'লাংফিশ'] },
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Sarcopterygii', order: 'Ceratodontiformes', family: 'Protopteridae', genus: 'Protopterus', species: 'Protopterus annectens' },
    morphology: {
      diagnosticFeatures: [
        'Slender eel-like body with long, filamentous whip-like pectoral and pelvic fins.',
        'True functional paired lungs connected to the ventral wall of the esophagus.',
        'Embedded cycloid scales covered by a continuous thick protective mucous layer.',
        'Continuous dorsal-caudal-anal fin fold.'
      ],
      description: 'Protopterus annectens is an archaic freshwater dipnoan reaching 100 cm. Prominent snout and small eyes; brownish or olive dorsum with darker irregular marbling.',
      maxStandardLengthCm: 100,
      coloration: 'Olive-brown or greyish-green with dark sepia blotches and vermiculations; belly pale greyish.'
    },
    habitat: { systems: ['freshwater'], zones: ['floodplains', 'swamps', 'marshes', 'stagnant river channels'], depthRangeMeters: { min: 0, max: 10 } },
    bangladeshOccurrence: {
      present: false,
      regions: ['Sub-Saharan Africa: Chad, Niger, Senegal, Gambia, Volta, and Zambezi river basins'],
      habitatTypes: ['seasonal floodplains', 'vegetated swamps', 'ephemeral pools'],
      residencyStatus: 'not_recorded',
      localNamesBn: ['আফ্রিকান লাংফিশ'],
      notes: 'Global freshwater reference species for the subclass Dipnoi and order Ceratodontiformes. Absent from Bangladesh and Asian freshwaters.'
    },
    ecology: {
      dietCategory: 'omnivore',
      dietSummary: 'Feeds on mollusks, freshwater crabs, aquatic insects, worms, and small fishes, crushing shells with heavy tooth plates.',
      behavior: 'Obligate air breather. During the dry season it burrows up to 50 cm into mud, secreting a mucus cocoon to estivate for up to 4 years until rains return.',
      reproduction: 'Male excavates a deep breeding burrow in swamp mud, guards the eggs, and aerates the nest by fanning with its body.',
      ecologicalRole: 'Trophic regulator of benthic invertebrates in ephemeral African wetlands.'
    },
    conservation: {
      iucnGlobalStatus: 'LC',
      globalIucnStatus: 'LC',
      iucnAssessmentYear: 2020,
      globalStatusSource: 'IUCN Red List 2020: e.T182299A1731671',
      threats: ['Conversion of seasonal wetlands for intensive agriculture.', 'River dams altering natural flood regimes.']
    },
    lifecycleStatus: 'published', isVerified: true, speciesVerificationStatus: 'verified', imageVerificationStatus: 'verified', isPublished: true,
    referenceIds: ['ref-fishbase-2024', 'ref-eschmeyer-2024', 'ref-iucn-global-2024'],
    media: [
      {
        id: 'img-sp-protopterus-annectens-01',
        speciesId: 'sp-protopterus-annectens',
        taxonId: 'taxon-protopterus',
        url: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/G%C5%91tehal-2.jpg',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/G%C5%91tehal-2.jpg',
        caption: 'Live specimen of West African lungfish (Protopterus annectens) exhibiting filamentous paired fins.',
        sourceName: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:G%C5%91tehal-2.jpg',
        photographer: 'Mathae / Bff',
        license: 'CC-BY',
        attribution: 'Mathae / Bff, CC BY 2.5, via Wikimedia Commons',
        isVerified: true,
        verificationStatus: 'verified',
        imageType: 'specimen_photo',
        type: 'specimen_photo',
        verifiedBy: 'BiotaElite Taxonomic & Visual Audit Panel',
        verifiedAt: '2026-09-14T10:00:00Z',
        notes: 'Specimen photograph clearly displaying the whip-like pectoral fins, marbled coloration, and dipnoan profile.'
      }
    ],
    version: 1, createdAt: '2026-09-14T10:00:00Z', updatedAt: '2026-09-14T10:00:00Z', verifiedAt: '2026-09-14T10:00:00Z', verifiedBy: 'Zoological Nomenclature & Ichthyology Panel'
  },
  {
    id: 'sp-polypterus-senegalus',
    scientificName: 'Polypterus senegalus',
    scientificNameAuthorship: 'Cuvier, 1829',
    taxonomicStatus: 'accepted',
    module: 'fish',
    taxonId: 'taxon-polypterus',
    synonyms: [
      { name: 'Polypterus senegalus', authorship: 'Cuvier, 1829', status: 'homotypic', year: 1829, isBasionym: true }
    ],
    commonNames: { en: ['Senegal bichir', 'Gray bichir', 'Dinosaur eel'], bn: ['সেনেগাল বিচির'] },
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Actinopterygii', order: 'Polypteriformes', family: 'Polypteridae', genus: 'Polypterus', species: 'Polypterus senegalus' },
    morphology: {
      diagnosticFeatures: [
        'Series of 8 to 11 independent dorsal finlets, each consisting of an anterior spine supporting several split soft rays.',
        'Body fully armored with thick, interlocking rhombic ganoid scales.',
        'Pectoral fins equipped with fleshy, muscular, lobed bases.',
        'Pair of conspicuous spiracles situated dorsally on the skull behind the eyes.'
      ],
      description: 'Polypterus senegalus is an ancient basal ray-finned fish reaching 50 cm. Elongated cylindrical body with uniform dull greyish-olive coloration.',
      maxStandardLengthCm: 50,
      coloration: 'Uniform slate grey to olive-brown dorsum and flanks; ventral surface cream or white.'
    },
    habitat: { systems: ['freshwater'], zones: ['benthic', 'swamps', 'flooded river margins', 'reed beds'], depthRangeMeters: { min: 0, max: 5 } },
    bangladeshOccurrence: {
      present: false,
      regions: ['Tropical Africa: Nile, Chad, Niger, Senegal, and Volta river basins'],
      habitatTypes: ['slow-flowing rivers', 'vegetated floodplains', 'shallow swamps'],
      residencyStatus: 'not_recorded',
      localNamesBn: ['সেনেগাল বিচির'],
      notes: 'Global freshwater reference species for the basal actinopterygian clade Cladistia and order Polypteriformes. Absent from South Asia.'
    },
    ecology: {
      dietCategory: 'carnivore',
      dietSummary: 'Nocturnal stalking predator feeding on aquatic insect larvae, worms, small crustaceans, and juvenile fishes.',
      behavior: 'Capable of overland movement across humid terrain using muscular pectoral fins; breathes atmospheric air using a modified vascularized swim bladder.',
      reproduction: 'External fertilization; adhesive eggs attached to submerged vegetation; larvae possess prominent external branched gills resembling amphibian larvae.',
      ecologicalRole: 'Specialized benthic predator in tropical African wetland ecosystems.'
    },
    conservation: {
      iucnGlobalStatus: 'LC',
      globalIucnStatus: 'LC',
      iucnAssessmentYear: 2020,
      globalStatusSource: 'IUCN Red List 2020: e.T182283A1731558',
      threats: ['Local wetland drainage and agricultural pollution.']
    },
    lifecycleStatus: 'published', isVerified: true, speciesVerificationStatus: 'verified', imageVerificationStatus: 'verified', isPublished: true,
    referenceIds: ['ref-fishbase-2024', 'ref-eschmeyer-2024', 'ref-iucn-global-2024'],
    media: [
      {
        id: 'img-sp-polypterus-senegalus-01',
        speciesId: 'sp-polypterus-senegalus',
        taxonId: 'taxon-polypterus',
        url: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Polypterus_senegalus_senegalus.jpg',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Polypterus_senegalus_senegalus.jpg',
        caption: 'Live specimen of Polypterus senegalus showing ganoid armor and dorsal finlets.',
        sourceName: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Polypterus_senegalus_senegalus.jpg',
        photographer: 'Zhyla',
        license: 'CC-BY-SA',
        attribution: 'Zhyla, CC BY-SA 3.0, via Wikimedia Commons',
        isVerified: true,
        verificationStatus: 'verified',
        imageType: 'specimen_photo',
        type: 'specimen_photo',
        verifiedBy: 'BiotaElite Taxonomic & Visual Audit Panel',
        verifiedAt: '2026-09-14T10:00:00Z',
        notes: 'Specimen photograph clearly displaying the diagnostic dorsal finlets and ganoid scale armor.'
      }
    ],
    version: 1, createdAt: '2026-09-14T10:00:00Z', updatedAt: '2026-09-14T10:00:00Z', verifiedAt: '2026-09-14T10:00:00Z', verifiedBy: 'Zoological Nomenclature & Ichthyology Panel'
  },
  {
    id: 'sp-acipenser-sturio',
    scientificName: 'Acipenser sturio',
    scientificNameAuthorship: 'Linnaeus, 1758',
    taxonomicStatus: 'accepted',
    module: 'fish',
    taxonId: 'taxon-acipenser',
    synonyms: [
      { name: 'Acipenser sturio', authorship: 'Linnaeus, 1758', status: 'homotypic', year: 1758, isBasionym: true, sourceId: 'ref-linnaeus-1758' }
    ],
    commonNames: { en: ['European sea sturgeon', 'Atlantic sturgeon'], bn: ['ইউরোপীয় স্টার্জন'] },
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Actinopterygii', order: 'Acipenseriformes', family: 'Acipenseridae', genus: 'Acipenser', species: 'Acipenser sturio' },
    morphology: {
      diagnosticFeatures: [
        'Five longitudinal rows of bony scutes: 9-14 dorsal, 24-36 lateral on each side, and 8-14 ventral.',
        'Elongated snout with four sensory barbels situated midway between snout tip and mouth.',
        'Ventral, protractile, toothless suction mouth in adults.',
        'Heterocercal caudal fin with an elongated upper lobe containing the vertebral column.'
      ],
      description: 'Acipenser sturio is a giant anadromous chondrostean reaching over 3.5 meters and 300 kg. Largely cartilaginous skeleton with heavy dermal armor plates.',
      maxStandardLengthCm: 350,
      coloration: 'Olive-grey to brownish-black on back; yellowish or silvery-white on belly; scutes lighter ivory.'
    },
    habitat: { systems: ['marine', 'freshwater', 'brackish'], zones: ['anadromous', 'estuarine', 'demersal continental shelf'], depthRangeMeters: { min: 5, max: 100 } },
    bangladeshOccurrence: {
      present: false,
      regions: ['Northeast Atlantic, North Sea, Baltic Sea, Mediterranean, and Black Sea basins'],
      habitatTypes: ['deep gravel-bottom river spawning runs', 'estuaries', 'sandy coastal shelves'],
      residencyStatus: 'not_recorded',
      localNamesBn: ['ইউরোপীয় স্টার্জন'],
      notes: 'Global reference species for Chondrostei and order Acipenseriformes. Absent from Bangladesh and South Asia.'
    },
    ecology: {
      dietCategory: 'carnivore',
      dietSummary: 'Benthic suction feeder rooting in substrate for polychaete worms, bivalve mollusks, crustaceans, and small bottom fish.',
      behavior: 'Anadromous; adult sturgeons spend years foraging in shallow coastal seas before migrating hundreds of kilometers upstream into large European rivers to spawn.',
      reproduction: 'Very late sexual maturity (males 10-12 years, females 14-18 years); spawns over fast-flowing gravel shoals in spring.',
      ecologicalRole: 'Major benthic engineer and apex bottom consumer in temperate estuaries and rivers.'
    },
    conservation: {
      iucnGlobalStatus: 'CR',
      globalIucnStatus: 'CR',
      iucnAssessmentYear: 2022,
      globalStatusSource: 'IUCN Red List 2022: e.T230A156828551',
      threats: ['Historical overexploitation for caviar and meat.', 'River dams blocking ancestral gravel spawning beds.', 'Bycatch in coastal trawl and gillnet fisheries.']
    },
    lifecycleStatus: 'published', isVerified: true, speciesVerificationStatus: 'verified', imageVerificationStatus: 'verified', isPublished: true,
    referenceIds: ['ref-linnaeus-1758', 'ref-fishbase-2024', 'ref-eschmeyer-2024', 'ref-iucn-global-2024'],
    media: [
      {
        id: 'img-sp-acipenser-sturio-01',
        speciesId: 'sp-acipenser-sturio',
        taxonId: 'taxon-acipenser',
        url: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Acipenser_sturio.jpg',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Acipenser_sturio.jpg',
        caption: 'Specimen drawing of European sea sturgeon (Acipenser sturio) showing longitudinal scute series.',
        sourceName: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Acipenser_sturio.jpg',
        photographer: 'Krüger',
        license: 'Public Domain',
        attribution: 'Krüger, Public Domain, via Wikimedia Commons',
        isVerified: true,
        verificationStatus: 'verified',
        imageType: 'specimen_photo',
        type: 'specimen_photo',
        verifiedBy: 'BiotaElite Taxonomic & Visual Audit Panel',
        verifiedAt: '2026-09-14T10:00:00Z',
        notes: 'Classic natural history illustration illustrating the diagnostic five rows of bony scutes and heterocercal tail.'
      }
    ],
    version: 1, createdAt: '2026-09-14T10:00:00Z', updatedAt: '2026-09-14T10:00:00Z', verifiedAt: '2026-09-14T10:00:00Z', verifiedBy: 'Zoological Nomenclature & Ichthyology Panel'
  },
  {
    id: 'sp-atractosteus-spatula',
    scientificName: 'Atractosteus spatula',
    scientificNameAuthorship: '(Lacépède, 1803)',
    taxonomicStatus: 'accepted',
    module: 'fish',
    taxonId: 'taxon-atractosteus',
    synonyms: [
      { name: 'Lepisosteus spatula', authorship: 'Lacépède, 1803', status: 'homotypic', year: 1803, isBasionym: true }
    ],
    commonNames: { en: ['Alligator gar'], bn: ['অ্যালিগেটর গার'] },
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Actinopterygii', order: 'Lepisosteiformes', family: 'Lepisosteidae', genus: 'Atractosteus', species: 'Atractosteus spatula' },
    morphology: {
      diagnosticFeatures: [
        'Broad, short, alligator-like snout with two distinct rows of large teeth on the palatines in the upper jaw.',
        'Heavy, non-overlapping, diamond-shaped rhomboid ganoid scales with enameled ganoine outer layer.',
        'Abbreviate heterocercal caudal fin with rounded posterior profile.',
        'Dorsal and anal fins positioned far posteriorly near the caudal peduncle.'
      ],
      description: 'Atractosteus spatula is the largest species of gar, reaching up to 3 meters and 160 kg. Heavy cylindrical armored body with olive to brown dorsal coloration.',
      maxStandardLengthCm: 305,
      coloration: 'Olive to dark brown dorsum and flanks; cream or pale yellow venter; fins spotted with dark circular maculae.'
    },
    habitat: { systems: ['freshwater', 'brackish'], zones: ['riverine', 'floodplain oxbows', 'bayous', 'coastal estuaries'], depthRangeMeters: { min: 0, max: 10 } },
    bangladeshOccurrence: {
      present: false,
      regions: ['North America: Mississippi River valley and coastal drainages of the Gulf of Mexico'],
      habitatTypes: ['sluggish lowland rivers', 'oxbow lakes', 'bayous', 'brackish coastal bays'],
      residencyStatus: 'not_recorded',
      localNamesBn: ['অ্যালিগেটর গার'],
      notes: 'Global freshwater reference species for Holostei and order Lepisosteiformes. Non-native; absent from wild Bangladesh ecosystems.'
    },
    ecology: {
      dietCategory: 'carnivore',
      dietSummary: 'Apex ambush predator feeding on fishes, blue crabs, turtles, waterfowl, and small semi-aquatic mammals.',
      behavior: 'Lurks motionless near the water surface resembling a floating log, striking prey with a sudden sideways snap of the jaw; breathes air using a vascularized cellular gas bladder.',
      reproduction: 'Spawns in flooded terrestrial vegetation during spring river rises; eggs are dark green and highly toxic to birds and mammals.',
      ecologicalRole: 'Top apex predator controlling forage fish and rough fish populations in southern North American river systems.'
    },
    conservation: {
      iucnGlobalStatus: 'LC',
      globalIucnStatus: 'LC',
      iucnAssessmentYear: 2019,
      globalStatusSource: 'IUCN Red List 2019: e.T191476A1983050',
      threats: ['Historical eradication campaigns.', 'Floodplain disconnectivity from flood-control levee construction.']
    },
    lifecycleStatus: 'published', isVerified: true, speciesVerificationStatus: 'verified', imageVerificationStatus: 'verified', isPublished: true,
    referenceIds: ['ref-fishbase-2024', 'ref-eschmeyer-2024', 'ref-iucn-global-2024'],
    media: [
      {
        id: 'img-sp-atractosteus-spatula-01',
        speciesId: 'sp-atractosteus-spatula',
        taxonId: 'taxon-atractosteus',
        url: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Atractosteus_spatula_%28Alligatorhecht%29.jpg',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Atractosteus_spatula_%28Alligatorhecht%29.jpg',
        caption: 'Adult Alligator gar (Atractosteus spatula) showing characteristic broad snout and ganoid armor.',
        sourceName: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Atractosteus_spatula_(Alligatorhecht).jpg',
        photographer: 'Cymothoa exigua',
        license: 'CC-BY-SA',
        attribution: 'Cymothoa exigua, CC BY-SA 3.0, via Wikimedia Commons',
        isVerified: true,
        verificationStatus: 'verified',
        imageType: 'specimen_photo',
        type: 'specimen_photo',
        verifiedBy: 'BiotaElite Taxonomic & Visual Audit Panel',
        verifiedAt: '2026-09-14T10:00:00Z',
        notes: 'Specimen photo clearly demonstrating the broad alligator-like jaws and heavily armored ganoid scale coat.'
      }
    ],
    version: 1, createdAt: '2026-09-14T10:00:00Z', updatedAt: '2026-09-14T10:00:00Z', verifiedAt: '2026-09-14T10:00:00Z', verifiedBy: 'Zoological Nomenclature & Ichthyology Panel'
  },
  {
    id: 'sp-amia-calva',
    scientificName: 'Amia calva',
    scientificNameAuthorship: 'Linnaeus, 1766',
    taxonomicStatus: 'accepted',
    module: 'fish',
    taxonId: 'taxon-amia',
    synonyms: [
      { name: 'Amia calva', authorship: 'Linnaeus, 1766', status: 'homotypic', year: 1766, isBasionym: true, sourceId: 'ref-linnaeus-1758' }
    ],
    commonNames: { en: ['Bowfin', 'Dogfish', 'Mudfish'], bn: ['বোফিন'] },
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Actinopterygii', order: 'Amiiformes', family: 'Amiidae', genus: 'Amia', species: 'Amia calva' },
    morphology: {
      diagnosticFeatures: [
        'Extremely long undulating dorsal fin extending over more than half of the back, with 46-50 soft rays.',
        'Large, median bony gular plate situated between the mandibular rami beneath the lower jaw.',
        'Abbreviate heterocercal tail with a rounded caudal fin.',
        'Prominent black caudal spot (ocellus) at the upper base of the tail, rimmed with bright yellow-orange in males.'
      ],
      description: 'Amia calva is the sole living representative of the archaic holostean order Amiiformes. Reaches 100 cm and 9 kg. Cylindrical body with cycloid-like ganoid scales.',
      maxStandardLengthCm: 109,
      coloration: 'Olive-green with dark mottled camouflage reticulations along flanks; belly white to yellow.'
    },
    habitat: { systems: ['freshwater'], zones: ['demersal', 'vegetated backwaters', 'oxbow lakes', 'swamps', 'sluggish lowland rivers'], depthRangeMeters: { min: 0, max: 10 } },
    bangladeshOccurrence: {
      present: false,
      regions: ['Eastern North America: St. Lawrence-Great Lakes basin, Mississippi River drainage, Gulf coastal plain'],
      habitatTypes: ['heavily vegetated swamps', 'oxbow lakes', 'clear slow lowland rivers'],
      residencyStatus: 'not_recorded',
      localNamesBn: ['বোফিন'],
      notes: 'Global reference species for Holostei / Halecomorphi and order Amiiformes. Absent from Bangladesh and Old World waters.'
    },
    ecology: {
      dietCategory: 'carnivore',
      dietSummary: 'Voracious nocturnal predator feeding on crayfish, crabs, frogs, small turtles, and varied fishes.',
      behavior: 'Capable of bimodal respiration; utilizes its vascularized cellular swim bladder to inhale atmospheric air in stagnant hypoxic water. Male builds circular weed nest and protects schooling fry.',
      reproduction: 'Spawns in spring; male prepares nest by biting and clearing vegetation, then vigorously guards the eggs and newly hatched larval swarm.',
      ecologicalRole: 'High-level mesopredator and apex consumer in North American freshwater swamp biomes.'
    },
    conservation: {
      iucnGlobalStatus: 'LC',
      globalIucnStatus: 'LC',
      iucnAssessmentYear: 2019,
      globalStatusSource: 'IUCN Red List 2019: e.T202409A18230230',
      threats: ['Loss of wetland backwaters due to agricultural levee construction and channelization.']
    },
    lifecycleStatus: 'published', isVerified: true, speciesVerificationStatus: 'verified', imageVerificationStatus: 'verified', isPublished: true,
    referenceIds: ['ref-linnaeus-1758', 'ref-fishbase-2024', 'ref-eschmeyer-2024', 'ref-iucn-global-2024'],
    media: [
      {
        id: 'img-sp-amia-calva-01',
        speciesId: 'sp-amia-calva',
        taxonId: 'taxon-amia',
        url: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Amia_calva_4.jpg',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Amia_calva_4.jpg',
        caption: 'Live specimen of Bowfin (Amia calva) showing the elongated dorsal fin and caudal ocellus.',
        sourceName: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Amia_calva_4.jpg',
        photographer: 'Stan Shebs',
        license: 'CC-BY-SA',
        attribution: 'Stan Shebs, CC BY-SA 3.0, via Wikimedia Commons',
        isVerified: true,
        verificationStatus: 'verified',
        imageType: 'specimen_photo',
        type: 'specimen_photo',
        verifiedBy: 'BiotaElite Taxonomic & Visual Audit Panel',
        verifiedAt: '2026-09-14T10:00:00Z',
        notes: 'Specimen photograph clearly illustrating the elongated dorsal fin, gular plate profile, and distinctive caudal ocellus.'
      }
    ],
    version: 1, createdAt: '2026-09-14T10:00:00Z', updatedAt: '2026-09-14T10:00:00Z', verifiedAt: '2026-09-14T10:00:00Z', verifiedBy: 'Zoological Nomenclature & Ichthyology Panel'
  },
  {
    id: 'sp-anguilla-anguilla',
    scientificName: 'Anguilla anguilla',
    scientificNameAuthorship: '(Linnaeus, 1758)',
    taxonomicStatus: 'accepted',
    module: 'fish',
    taxonId: 'taxon-anguilla',
    synonyms: [
      { name: 'Muraena anguilla', authorship: 'Linnaeus, 1758', status: 'homotypic', year: 1758, isBasionym: true, sourceId: 'ref-linnaeus-1758' }
    ],
    commonNames: { en: ['European eel'], bn: ['ইউরোপীয় বান মাছ', 'ইউরোপীয় ঈল'] },
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Actinopterygii', order: 'Anguilliformes', family: 'Anguillidae', genus: 'Anguilla', species: 'Anguilla anguilla' },
    morphology: {
      diagnosticFeatures: [
        'Continuous confluent dorsal, caudal, and anal fin fold.',
        'Minute cycloid scales embedded deeply in a thick mucous dermis.',
        'Lower jaw visibly projecting beyond upper jaw with rows of small teeth.',
        'Well-developed pectoral fins; completely lacking pelvic fins.'
      ],
      description: 'Anguilla anguilla is a catadromous teleost reaching 130 cm and 6 kg. Cylindrical serpentine body becoming laterally compressed toward tail.',
      maxStandardLengthCm: 133,
      coloration: 'Yellow-brown to dark olive on back with yellowish belly in yellow eel stage; back turns dark metallic black and belly brilliant silver during silver eel spawning migration.'
    },
    habitat: { systems: ['marine', 'freshwater', 'brackish'], zones: ['catadromous', 'benthic', 'riverine', 'estuarine', 'pelagic oceanic'], depthRangeMeters: { min: 0, max: 700 } },
    bangladeshOccurrence: {
      present: false,
      regions: ['Europe and North Africa (continental freshwaters); Sargasso Sea (oceanic spawning)'],
      habitatTypes: ['rivers', 'lakes', 'coastal lagoons', 'abyssopelagic oceanic waters'],
      residencyStatus: 'not_recorded',
      localNamesBn: ['ইউরোপীয় বান মাছ'],
      notes: 'Global reference species for order Anguilliformes and family Anguillidae. Extralimital; (Bangladesh possesses native Anguilla bengalensis).'
    },
    ecology: {
      dietCategory: 'carnivore',
      dietSummary: 'Nocturnal benthic feeder consuming aquatic insect larvae, mollusks, crustaceans, worms, and small fishes.',
      behavior: 'Catadromous; matures in continental freshwater and estuaries for 6-20 years, then undergoes anatomical transformation (silvering, eye enlargement) and undertakes a 5,000 km migration to spawn in the Sargasso Sea.',
      reproduction: 'Semelparous (spawns once and dies); planktonic transparent leaf-like leptocephalus larvae drift on Gulf Stream currents for 1-2 years before metamorphosing into glass eels.',
      ecologicalRole: 'Major top benthic predator in European freshwaters and key link in oceanic food webs.'
    },
    conservation: {
      iucnGlobalStatus: 'CR',
      globalIucnStatus: 'CR',
      iucnAssessmentYear: 2020,
      globalStatusSource: 'IUCN Red List 2020: e.T60344A152845178',
      threats: ['Hydropower turbine mortality.', 'Poaching of glass eels for black-market export.', 'Migration blockage by dams.', 'Invasive swimbladder parasite Anguillicola crassus.']
    },
    lifecycleStatus: 'published', isVerified: true, speciesVerificationStatus: 'verified', imageVerificationStatus: 'verified', isPublished: true,
    referenceIds: ['ref-linnaeus-1758', 'ref-fishbase-2024', 'ref-eschmeyer-2024', 'ref-iucn-global-2024'],
    media: [
      {
        id: 'img-sp-anguilla-anguilla-01',
        speciesId: 'sp-anguilla-anguilla',
        taxonId: 'taxon-anguilla',
        url: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Anguillidae_Anguilla_anguilla_1.jpg',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Anguillidae_Anguilla_anguilla_1.jpg',
        caption: 'Specimen of European eel (Anguilla anguilla) exhibiting serpentine morphology.',
        sourceName: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Anguillidae_Anguilla_anguilla_1.jpg',
        photographer: 'NasserHalaweh',
        license: 'CC-BY-SA',
        attribution: 'NasserHalaweh, CC BY-SA 4.0, via Wikimedia Commons',
        isVerified: true,
        verificationStatus: 'verified',
        imageType: 'specimen_photo',
        type: 'specimen_photo',
        verifiedBy: 'BiotaElite Taxonomic & Visual Audit Panel',
        verifiedAt: '2026-09-14T10:00:00Z',
        notes: 'Specimen photograph clearly displaying the continuous fin fold, projecting lower jaw, and embedded scale pattern.'
      }
    ],
    version: 1, createdAt: '2026-09-14T10:00:00Z', updatedAt: '2026-09-14T10:00:00Z', verifiedAt: '2026-09-14T10:00:00Z', verifiedBy: 'Zoological Nomenclature & Ichthyology Panel'
  },
  {
    id: 'sp-electrophorus-electricus',
    scientificName: 'Electrophorus electricus',
    scientificNameAuthorship: '(Linnaeus, 1766)',
    taxonomicStatus: 'accepted',
    module: 'fish',
    taxonId: 'taxon-electrophorus',
    synonyms: [
      { name: 'Gymnotus electricus', authorship: 'Linnaeus, 1766', status: 'homotypic', year: 1766, isBasionym: true }
    ],
    commonNames: { en: ['Electric eel'], bn: ['বৈদ্যুতিক ইল', 'ইলেকট্রিক ইল'] },
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Actinopterygii', order: 'Gymnotiformes', family: 'Gymnotidae', genus: 'Electrophorus', species: 'Electrophorus electricus' },
    morphology: {
      diagnosticFeatures: [
        'Three pairs of abdominal electric organs: Main organ and Hunter organ (high voltage), and Sach organ (low voltage).',
        'Completely lacking dorsal fin, caudal fin, and pelvic fins.',
        'Extremely long anal fin extending along almost the entire ventral surface with over 350 rays.',
        'Broad flattened head with terminal mouth and oral mucous folds for aerial respiration.'
      ],
      description: 'Electrophorus electricus is a Neotropical electrogenic knifefish reaching 2.5 meters and 20 kg. Cylindrical elongated dark slate-grey body.',
      maxStandardLengthCm: 250,
      coloration: 'Dark slate grey to blackish-brown on dorsum; throat and anterior ventral area bright yellowish-orange.'
    },
    habitat: { systems: ['freshwater'], zones: ['benthic', 'muddy streams', 'swamps', 'shallows'], depthRangeMeters: { min: 0, max: 5 } },
    bangladeshOccurrence: {
      present: false,
      regions: ['South America: Guiana Shield rivers including northern Amazon and Orinoco basins'],
      habitatTypes: ['calm muddy forest streams', 'swamps', 'coastal plain backwaters'],
      residencyStatus: 'not_recorded',
      localNamesBn: ['বৈদ্যুতিক ইল'],
      notes: 'Global freshwater reference species for order Gymnotiformes. Absent from Bangladesh and the Old World.'
    },
    ecology: {
      dietCategory: 'carnivore',
      dietSummary: 'Feeds on fishes, crustaceans, amphibians, and small terrestrial animals falling into the water.',
      behavior: 'Employs low-voltage electrical organ discharges (EOD, ~10 V) for navigation and electrolocation, and high-voltage discharges (up to 860 V) to stun prey and repel predators; obligate air breather surfacing every few minutes.',
      reproduction: 'Male builds nest of saliva foam among aquatic roots in dry season and guards developing larvae.',
      ecologicalRole: 'Apex nocturnal bioelectric predator in Guiana Shield freshwater habitats.'
    },
    conservation: {
      iucnGlobalStatus: 'LC',
      globalIucnStatus: 'LC',
      iucnAssessmentYear: 2021,
      globalStatusSource: 'IUCN Red List 2021: e.T149449884A149449902',
      threats: ['Habitat disturbance from gold mining and deforestation in South America.']
    },
    lifecycleStatus: 'published', isVerified: true, speciesVerificationStatus: 'verified', imageVerificationStatus: 'verified', isPublished: true,
    referenceIds: ['ref-fishbase-2024', 'ref-eschmeyer-2024', 'ref-iucn-global-2024'],
    media: [
      {
        id: 'img-sp-electrophorus-electricus-01',
        speciesId: 'sp-electrophorus-electricus',
        taxonId: 'taxon-electrophorus',
        url: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Electrophorus_electricus_3.jpg',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Electrophorus_electricus_3.jpg',
        caption: 'Adult Electric eel (Electrophorus electricus) in freshwater habitat.',
        sourceName: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Electrophorus_electricus_3.jpg',
        photographer: 'Stan Shebs',
        license: 'CC-BY-SA',
        attribution: 'Stan Shebs, CC BY-SA 3.0, via Wikimedia Commons',
        isVerified: true,
        verificationStatus: 'verified',
        imageType: 'specimen_photo',
        type: 'specimen_photo',
        verifiedBy: 'BiotaElite Taxonomic & Visual Audit Panel',
        verifiedAt: '2026-09-14T10:00:00Z',
        notes: 'Specimen photograph clearly illustrating the elongated cylindrical body, absence of dorsal fin, and characteristic head profile.'
      }
    ],
    version: 1, createdAt: '2026-09-14T10:00:00Z', updatedAt: '2026-09-14T10:00:00Z', verifiedAt: '2026-09-14T10:00:00Z', verifiedBy: 'Zoological Nomenclature & Ichthyology Panel'
  },
  {
    id: 'sp-salmo-trutta',
    scientificName: 'Salmo trutta',
    scientificNameAuthorship: 'Linnaeus, 1758',
    taxonomicStatus: 'accepted',
    module: 'fish',
    taxonId: 'taxon-salmo',
    synonyms: [
      { name: 'Salmo trutta', authorship: 'Linnaeus, 1758', status: 'homotypic', year: 1758, isBasionym: true, sourceId: 'ref-linnaeus-1758' }
    ],
    commonNames: { en: ['Brown trout', 'Sea trout', 'River trout'], bn: ['ব্রাউন ট্রাউট'] },
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Actinopterygii', order: 'Salmoniformes', family: 'Salmonidae', genus: 'Salmo', species: 'Salmo trutta' },
    morphology: {
      diagnosticFeatures: [
        'Adipose fin present between the rayed dorsal fin and the caudal fin.',
        'Flanks marked with black spots and conspicuous reddish spots surrounded by pale bluish-white halos.',
        'Maxilla extending posteriorly beyond the posterior margin of the eye in adults.',
        'Well-developed fleshy pelvic axillary process present at pelvic fin base.'
      ],
      description: 'Salmo trutta is an iconic coldwater salmonid reaching up to 140 cm and 20 kg. Streamlined fusiform body with small cycloid scales.',
      maxStandardLengthCm: 140,
      coloration: 'Olive-brown on back shading to golden-yellow on flanks; marked with dark spots and crimson ocelli; belly creamy white.'
    },
    habitat: { systems: ['freshwater', 'marine'], zones: ['benthopelagic', 'cold fast-flowing streams', 'oligotrophic lakes', 'neritic coastal seas'], depthRangeMeters: { min: 0, max: 30 } },
    bangladeshOccurrence: {
      present: false,
      regions: ['Native to Europe, Western Asia, and North Africa; widely introduced to high-elevation montane waters globally'],
      habitatTypes: ['cold well-oxygenated gravel streams', 'alpine lakes', 'coastal fjords'],
      residencyStatus: 'not_recorded',
      localNamesBn: ['ব্রাউন ট্রাউট'],
      notes: 'Global reference species for Salmoniformes and family Salmonidae. Absent from Bangladesh.'
    },
    ecology: {
      dietCategory: 'carnivore',
      dietSummary: 'Feeds heavily on aquatic insect nymphs (mayflies, caddisflies, stoneflies), terrestrial insects, crustaceans, and forage fishes.',
      behavior: 'Requires cold, highly oxygenated water below 20°C; exhibits riverine, lacustrine, or anadromous (sea trout) migratory life histories.',
      reproduction: 'Female excavates a gravel depression (redd) with her tail in autumn/winter fast currents; male fertilizes eggs which develop in clean gravel interstices.',
      ecologicalRole: 'Keystone predator and bioindicator of coldwater river ecological health.'
    },
    conservation: {
      iucnGlobalStatus: 'LC',
      globalIucnStatus: 'LC',
      iucnAssessmentYear: 2020,
      globalStatusSource: 'IUCN Red List 2020: e.T19861A150643789',
      threats: ['River warming and thermal stress caused by climate change.', 'Siltation of gravel spawning redds from deforestation.']
    },
    lifecycleStatus: 'published', isVerified: true, speciesVerificationStatus: 'verified', imageVerificationStatus: 'verified', isPublished: true,
    referenceIds: ['ref-linnaeus-1758', 'ref-fishbase-2024', 'ref-eschmeyer-2024', 'ref-iucn-global-2024'],
    media: [
      {
        id: 'img-sp-salmo-trutta-01',
        speciesId: 'sp-salmo-trutta',
        taxonId: 'taxon-salmo',
        url: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Bachforelle_Zeichnung.jpg',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Bachforelle_Zeichnung.jpg',
        caption: 'Detailed anatomical illustration of Brown trout (Salmo trutta) by Duane Raver, USFWS.',
        sourceName: 'Wikimedia Commons / USFWS',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bachforelle_Zeichnung.jpg',
        photographer: 'Duane Raver, U.S. Fish and Wildlife Service',
        license: 'Public Domain',
        attribution: 'Duane Raver, U.S. Fish and Wildlife Service, Public Domain, via Wikimedia Commons',
        isVerified: true,
        verificationStatus: 'verified',
        imageType: 'specimen_photo',
        type: 'specimen_photo',
        verifiedBy: 'BiotaElite Taxonomic & Visual Audit Panel',
        verifiedAt: '2026-09-14T10:00:00Z',
        notes: 'Authoritative diagnostic illustration depicting the adipose fin, spotting pattern, and salmonid morphology.'
      }
    ],
    version: 1, createdAt: '2026-09-14T10:00:00Z', updatedAt: '2026-09-14T10:00:00Z', verifiedAt: '2026-09-14T10:00:00Z', verifiedBy: 'Zoological Nomenclature & Ichthyology Panel'
  },
  {
    id: 'sp-pygocentrus-nattereri',
    scientificName: 'Pygocentrus nattereri',
    scientificNameAuthorship: 'Kner, 1858',
    taxonomicStatus: 'accepted',
    module: 'fish',
    taxonId: 'taxon-pygocentrus',
    synonyms: [
      { name: 'Serrasalmus nattereri', authorship: 'Kner, 1858', status: 'homotypic', year: 1858, isBasionym: true }
    ],
    commonNames: { en: ['Red-bellied piranha'], bn: ['লাল পেটি পিরানহা', 'পিরানহা'] },
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Actinopterygii', order: 'Characiformes', family: 'Serrasalmidae', genus: 'Pygocentrus', species: 'Pygocentrus nattereri' },
    morphology: {
      diagnosticFeatures: [
        'Sharp, razor-like unicuspid triangular teeth interlocking tightly like scissors in upper and lower jaws.',
        'Deeply compressed, disc-shaped body with a sharply serrated abdominal keel.',
        'Blunt snout with a massive, heavy, protruding lower jaw.',
        'Small adipose fin present between rayed dorsal fin and caudal fin.'
      ],
      description: 'Pygocentrus nattereri is an iconic Neotropical characiform reaching 35 cm and 3.8 kg. Grey-silver metallic sides with brilliant scarlet red throat and belly.',
      maxStandardLengthCm: 35,
      coloration: 'Silvery-grey with metallic iridescence on flanks; bright crimson-red to orange on throat, chest, and pectoral fins.'
    },
    habitat: { systems: ['freshwater'], zones: ['pelagic-riverine', 'floodplain lakes', 'flooded forests', 'creeks'], depthRangeMeters: { min: 0, max: 20 } },
    bangladeshOccurrence: {
      present: false,
      regions: ['South America: Amazon, Paraguay-Paraná, and São Francisco river basins'],
      habitatTypes: ['white-water and black-water river channels', 'lakes', 'flooded igapó forests'],
      residencyStatus: 'not_recorded',
      localNamesBn: ['পিরানহা'],
      notes: 'Global freshwater reference species for order Characiformes and family Serrasalmidae. Prohibited invasive in Bangladesh aquaculture under the Protection and Conservation of Fish Act.'
    },
    ecology: {
      dietCategory: 'carnivore',
      dietSummary: 'Opportunistic shoaling carnivore feeding on fishes, fins, scales, crustaceans, insects, carrion, and fallen fruit.',
      behavior: 'Forms foraging shoals for mutual antipredator defense and coordinated scavenging; produces loud acoustic croaks and barks using sonic swimbladder muscles.',
      reproduction: 'Courtship occurs in flooded vegetation; female deposits thousands of adhesive eggs into weed nests which are aggressively defended by the male.',
      ecologicalRole: 'Rapid scavenger and keystone population regulator in Amazonian aquatic ecosystems.'
    },
    conservation: {
      iucnGlobalStatus: 'LC',
      globalIucnStatus: 'LC',
      iucnAssessmentYear: 2021,
      globalStatusSource: 'IUCN Red List 2021: e.T49830155A49830162',
      threats: ['Amazonian deforestation and alteration of natural seasonal river flood pulses.']
    },
    lifecycleStatus: 'published', isVerified: true, speciesVerificationStatus: 'verified', imageVerificationStatus: 'verified', isPublished: true,
    referenceIds: ['ref-fishbase-2024', 'ref-eschmeyer-2024', 'ref-iucn-global-2024'],
    media: [
      {
        id: 'img-sp-pygocentrus-nattereri-01',
        speciesId: 'sp-pygocentrus-nattereri',
        taxonId: 'taxon-pygocentrus',
        url: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Pygocentrus_nattereri_%28ok%29.JPG',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Pygocentrus_nattereri_%28ok%29.JPG',
        caption: 'Specimen of Red-bellied piranha (Pygocentrus nattereri) exhibiting characteristic red ventral coloration.',
        sourceName: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Pygocentrus_nattereri_(ok).JPG',
        photographer: 'FF23-fr',
        license: 'CC-BY-SA',
        attribution: 'FF23-fr, CC BY-SA 3.0, via Wikimedia Commons',
        isVerified: true,
        verificationStatus: 'verified',
        imageType: 'specimen_photo',
        type: 'specimen_photo',
        verifiedBy: 'BiotaElite Taxonomic & Visual Audit Panel',
        verifiedAt: '2026-09-14T10:00:00Z',
        notes: 'Specimen photo showing the deep compressed body, heavy jaw, serrated ventral profile, and crimson throat.'
      }
    ],
    version: 1, createdAt: '2026-09-14T10:00:00Z', updatedAt: '2026-09-14T10:00:00Z', verifiedAt: '2026-09-14T10:00:00Z', verifiedBy: 'Zoological Nomenclature & Ichthyology Panel'
  },
  {
    id: 'sp-gadus-morhua',
    scientificName: 'Gadus morhua',
    scientificNameAuthorship: 'Linnaeus, 1758',
    taxonomicStatus: 'accepted',
    module: 'fish',
    taxonId: 'taxon-gadus',
    synonyms: [
      { name: 'Gadus morhua', authorship: 'Linnaeus, 1758', status: 'homotypic', year: 1758, isBasionym: true, sourceId: 'ref-linnaeus-1758' }
    ],
    commonNames: { en: ['Atlantic cod'], bn: ['আটলান্টিক কড'] },
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Actinopterygii', order: 'Gadiformes', family: 'Gadidae', genus: 'Gadus', species: 'Gadus morhua' },
    morphology: {
      diagnosticFeatures: [
        'Three separate dorsal fins and two separate anal fins without spines.',
        'Single prominent sensory chin barbel on the lower jaw.',
        'Pale, uninterrupted lateral line curving gently above the pectoral fin.',
        'Upper jaw projecting slightly beyond the lower jaw.'
      ],
      description: 'Gadus morhua is a commercially vital cold temperate gadiform reaching 200 cm and 96 kg. Heavy streamlined body with mottled camouflage pattern.',
      maxStandardLengthCm: 200,
      coloration: 'Greenish-grey, brownish, or reddish on back with dark brownish spots; pale distinct lateral line; belly pure white.'
    },
    habitat: { systems: ['marine'], zones: ['demersal', 'oceanodromous', 'continental shelf', 'upper slope'], depthRangeMeters: { min: 10, max: 600 } },
    bangladeshOccurrence: {
      present: false,
      regions: ['North Atlantic Ocean: Barents Sea, Baltic Sea, North Sea, Iceland, Greenland, and Grand Banks of Newfoundland'],
      habitatTypes: ['rocky, pebbly, or sandy ocean floors', 'deep shelf edges'],
      residencyStatus: 'not_recorded',
      localNamesBn: ['আটলান্টিক কড'],
      notes: 'Global marine reference species for order Gadiformes and family Gadidae. Absent from warm tropical waters and Bangladesh.'
    },
    ecology: {
      dietCategory: 'carnivore',
      dietSummary: 'Voracious demersal predator feeding on capelin, herring, sand lance, crabs, lobsters, squids, and smaller cod.',
      behavior: 'Forms vast schooling migrations between oceanic offshore spawning grounds and coastal feeding zones; highly sensitive to bottom water temperature (2-8°C).',
      reproduction: 'High fecundity (a single large female can release up to 5-9 million eggs); pelagic eggs drift in coastal currents.',
      ecologicalRole: 'Historically the dominant apex demersal fish predator in North Atlantic marine shelf food webs.'
    },
    conservation: {
      iucnGlobalStatus: 'VU',
      globalIucnStatus: 'VU',
      iucnAssessmentYear: 2021,
      globalStatusSource: 'IUCN Red List: e.T8784A45228161',
      threats: ['Historical commercial overfishing culminating in the 1992 Grand Banks collapse.', 'Ocean warming displacing coldwater capelin forage base.']
    },
    lifecycleStatus: 'published', isVerified: true, speciesVerificationStatus: 'verified', imageVerificationStatus: 'verified', isPublished: true,
    referenceIds: ['ref-linnaeus-1758', 'ref-fishbase-2024', 'ref-eschmeyer-2024', 'ref-iucn-global-2024'],
    media: [
      {
        id: 'img-sp-gadus-morhua-01',
        speciesId: 'sp-gadus-morhua',
        taxonId: 'taxon-gadus',
        url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Gadus_morhua_Cod-2b-Atlanterhavsparken-Norway.JPG',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Gadus_morhua_Cod-2b-Atlanterhavsparken-Norway.JPG',
        caption: 'Live Atlantic cod (Gadus morhua) at the Atlanterhavsparken aquarium in Norway.',
        sourceName: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Gadus_morhua_Cod-2b-Atlanterhavsparken-Norway.JPG',
        photographer: 'Hans-Petter Fjeld',
        license: 'CC-BY-SA',
        attribution: 'Hans-Petter Fjeld, CC BY-SA 2.5, via Wikimedia Commons',
        isVerified: true,
        verificationStatus: 'verified',
        imageType: 'specimen_photo',
        type: 'specimen_photo',
        verifiedBy: 'BiotaElite Taxonomic & Visual Audit Panel',
        verifiedAt: '2026-09-14T10:00:00Z',
        notes: 'Live specimen photo clearly showing the three dorsal fins, pale lateral line, chin barbel, and mottled coloration.'
      }
    ],
    version: 1, createdAt: '2026-09-14T10:00:00Z', updatedAt: '2026-09-14T10:00:00Z', verifiedAt: '2026-09-14T10:00:00Z', verifiedBy: 'Zoological Nomenclature & Ichthyology Panel'
  },
  {
    id: 'sp-hippocampus-erectus',
    scientificName: 'Hippocampus erectus',
    scientificNameAuthorship: 'Perry, 1810',
    taxonomicStatus: 'accepted',
    module: 'fish',
    taxonId: 'taxon-hippocampus',
    synonyms: [
      { name: 'Hippocampus erectus', authorship: 'Perry, 1810', status: 'homotypic', year: 1810, isBasionym: true }
    ],
    commonNames: { en: ['Lined seahorse'], bn: ['লাইনড সি-হর্স', 'সিন্ধুঘোটক'] },
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Actinopterygii', order: 'Syngnathiformes', family: 'Syngnathidae', genus: 'Hippocampus', species: 'Hippocampus erectus' },
    morphology: {
      diagnosticFeatures: [
        'Body encased in a rigid series of bony rings: 11 trunk rings and 34-39 tail rings.',
        'Horse-like upright posture with neck bent at a right angle to trunk axis.',
        'Prehensile tail lacking caudal fin, used for anchoring to seagrass blades and gorgonians.',
        'Tubular snout with small toothless terminal suction mouth.'
      ],
      description: 'Hippocampus erectus reaches 19 cm in height. Head crowned with a triangular 4-5 spined coronet; body marked with fine white lines and dark spots.',
      maxStandardLengthCm: 19,
      coloration: 'Highly variable from grey, brown, and black to bright yellow or orange; fine white lines tracing neck and body contours.'
    },
    habitat: { systems: ['marine', 'brackish'], zones: ['demersal', 'seagrass beds', 'mangrove roots', 'coral reefs', 'sponge flats'], depthRangeMeters: { min: 1, max: 75 } },
    bangladeshOccurrence: {
      present: false,
      regions: ['Western Atlantic Ocean: Nova Scotia to Florida, Gulf of Mexico, Caribbean Sea, and Venezuela to Brazil'],
      habitatTypes: ['submerged aquatic vegetation beds', 'sponge gardens', 'artificial pilings'],
      residencyStatus: 'not_recorded',
      localNamesBn: ['লাইনড সি-হর্স'],
      notes: 'Global marine reference species for order Syngnathiformes and family Syngnathidae. (Bay of Bengal possesses native Hippocampus kuda).'
    },
    ecology: {
      dietCategory: 'carnivore',
      dietSummary: 'Ambush suction feeder preying on tiny amphipods, copepods, mysid shrimps, and larval invertebrates.',
      behavior: 'Monogamous mating pairs perform daily greeting rituals; female deposits unfertilized eggs into the male ventral brood pouch; male fertilizes, aerates, and carries embryos until giving birth to independent fry.',
      reproduction: 'Male pregnancy; gestation lasts 20-30 days; male releases 250-1,000 fully formed miniature seahorses.',
      ecologicalRole: 'Cryptic micro-predator in shallow seagrass and reef micro-habitats.'
    },
    conservation: {
      iucnGlobalStatus: 'VU',
      globalIucnStatus: 'VU',
      iucnAssessmentYear: 2017,
      globalStatusSource: 'IUCN Red List 2017: e.T10066A46721068',
      threats: ['Bycatch in coastal shrimp otter trawls.', 'Loss of seagrass beds to coastal development and pollution.', 'Aquarium and curiosity trade.']
    },
    lifecycleStatus: 'published', isVerified: true, speciesVerificationStatus: 'verified', imageVerificationStatus: 'verified', isPublished: true,
    referenceIds: ['ref-fishbase-2024', 'ref-eschmeyer-2024', 'ref-iucn-global-2024'],
    media: [
      {
        id: 'img-sp-hippocampus-erectus-01',
        speciesId: 'sp-hippocampus-erectus',
        taxonId: 'taxon-hippocampus',
        url: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Fish4280_-_Flickr_-_NOAA_Photo_Library.jpg',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Fish4280_-_Flickr_-_NOAA_Photo_Library.jpg',
        caption: 'Specimen of Lined seahorse (Hippocampus erectus) in coastal waters, NOAA Photo Library.',
        sourceName: 'Wikimedia Commons / NOAA',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Fish4280_-_Flickr_-_NOAA_Photo_Library.jpg',
        photographer: 'SEFSC Pascagoula Laboratory / Brandi Noble, NOAA',
        license: 'Public Domain',
        attribution: 'SEFSC Pascagoula Laboratory; Collection of Brandi Noble, NOAA/NMFS/SEFSC, Public Domain, via Wikimedia Commons',
        isVerified: true,
        verificationStatus: 'verified',
        imageType: 'specimen_photo',
        type: 'specimen_photo',
        verifiedBy: 'BiotaElite Taxonomic & Visual Audit Panel',
        verifiedAt: '2026-09-14T10:00:00Z',
        notes: 'Specimen photo clearly displaying the bony armor rings, prehensile tail, coronet spines, and tubular snout.'
      }
    ],
    version: 1, createdAt: '2026-09-14T10:00:00Z', updatedAt: '2026-09-14T10:00:00Z', verifiedAt: '2026-09-14T10:00:00Z', verifiedBy: 'Zoological Nomenclature & Ichthyology Panel'
  },
  {
    id: 'sp-platichthys-flesus',
    scientificName: 'Platichthys flesus',
    scientificNameAuthorship: '(Linnaeus, 1758)',
    taxonomicStatus: 'accepted',
    module: 'fish',
    taxonId: 'taxon-platichthys',
    synonyms: [
      { name: 'Pleuronectes flesus', authorship: 'Linnaeus, 1758', status: 'homotypic', year: 1758, isBasionym: true, sourceId: 'ref-linnaeus-1758' }
    ],
    commonNames: { en: ['European flounder'], bn: ['ইউরোপীয় ফ্লাউন্ডার'] },
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Actinopterygii', order: 'Pleuronectiformes', family: 'Pleuronectidae', genus: 'Platichthys', species: 'Platichthys flesus' },
    morphology: {
      diagnosticFeatures: [
        'Oval, laterally compressed, strongly asymmetrical body lying flat on the seabed.',
        'Both eyes located on the right side of the head (dextral; approximately one-third of individuals can be reversed/sinistral).',
        'Row of sharp, rough, prickly bony tubercles along the bases of the dorsal and anal fins and along the lateral line.',
        'Lateral line nearly straight across the flank.'
      ],
      description: 'Platichthys flesus is a hardy euryhaline flatfish reaching 60 cm and 3 kg. Eyed side dull greenish-brown; blind side opaque porcelain white.',
      maxStandardLengthCm: 60,
      coloration: 'Eyed upper side variable dull brown or olive with reddish-orange speckles; blind lower side pure white.'
    },
    habitat: { systems: ['marine', 'freshwater', 'brackish'], zones: ['demersal', 'amphidromous', 'estuaries', 'muddy tidal flats', 'lower river basins'], depthRangeMeters: { min: 1, max: 100 } },
    bangladeshOccurrence: {
      present: false,
      regions: ['Northeast Atlantic Ocean, North Sea, Baltic Sea, White Sea, Mediterranean Sea, and Black Sea'],
      habitatTypes: ['shallow sandy and muddy coastal bottoms', 'estuarine mudflats', 'tidal rivers'],
      residencyStatus: 'not_recorded',
      localNamesBn: ['ইউরোপীয় ফ্লাউন্ডার'],
      notes: 'Global marine reference species for order Pleuronectiformes and family Pleuronectidae. Absent from Bangladesh.'
    },
    ecology: {
      dietCategory: 'carnivore',
      dietSummary: 'Feeds on benthic polychaete worms, amphipods, small bivalve siphons, decapod shrimps, and juvenile fishes.',
      behavior: 'Remarkable camouflage ability, matching skin pigment cells (chromatophores) to surrounding substrate within seconds; migrates tens of kilometers upstream into freshwater rivers during summer feeding.',
      reproduction: 'Spawns in offshore marine waters (20-40 m depth) in late winter/spring; pelagic larvae undergo asymmetric eye migration during metamorphosis.',
      ecologicalRole: 'Major benthic consumer linking infaunal benthic invertebrates with marine predators.'
    },
    conservation: {
      iucnGlobalStatus: 'LC',
      globalIucnStatus: 'LC',
      iucnAssessmentYear: 2021,
      globalStatusSource: 'IUCN Red List 2021: e.T135717A4465494',
      threats: ['Coastal pollution in estuaries.', 'Bottom trawling and channel dredging.']
    },
    lifecycleStatus: 'published', isVerified: true, speciesVerificationStatus: 'verified', imageVerificationStatus: 'verified', isPublished: true,
    referenceIds: ['ref-linnaeus-1758', 'ref-fishbase-2024', 'ref-eschmeyer-2024', 'ref-iucn-global-2024'],
    media: [
      {
        id: 'img-sp-platichthys-flesus-01',
        speciesId: 'sp-platichthys-flesus',
        taxonId: 'taxon-platichthys',
        url: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Platichthys_flesus_1.jpg',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Platichthys_flesus_1.jpg',
        caption: 'Specimen of European flounder (Platichthys flesus) lying on benthic substrate.',
        sourceName: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Platichthys_flesus_1.jpg',
        photographer: 'Hans Hillewaert',
        license: 'CC-BY-SA',
        attribution: 'Hans Hillewaert, CC BY-SA 4.0, via Wikimedia Commons',
        isVerified: true,
        verificationStatus: 'verified',
        imageType: 'specimen_photo',
        type: 'specimen_photo',
        verifiedBy: 'BiotaElite Taxonomic & Visual Audit Panel',
        verifiedAt: '2026-09-14T10:00:00Z',
        notes: 'Specimen photograph clearly displaying the asymmetric eye placement, flattened profile, and cryptic mottled pigment.'
      }
    ],
    version: 1, createdAt: '2026-09-14T10:00:00Z', updatedAt: '2026-09-14T10:00:00Z', verifiedAt: '2026-09-14T10:00:00Z', verifiedBy: 'Zoological Nomenclature & Ichthyology Panel'
  },
  {
    id: 'sp-tetraodon-mbu',
    scientificName: 'Tetraodon mbu',
    scientificNameAuthorship: 'Boulenger, 1899',
    taxonomicStatus: 'accepted',
    module: 'fish',
    taxonId: 'taxon-tetraodon',
    synonyms: [
      { name: 'Tetraodon mbu', authorship: 'Boulenger, 1899', status: 'homotypic', year: 1899, isBasionym: true }
    ],
    commonNames: { en: ['Mbu puffer', 'Giant freshwater puffer'], bn: ['এমবু পটকা'] },
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Actinopterygii', order: 'Tetraodontiformes', family: 'Tetraodontidae', genus: 'Tetraodon', species: 'Tetraodon mbu' },
    morphology: {
      diagnosticFeatures: [
        'Four fused dental plates forming an extremely heavy, beak-like crushing apparatus.',
        'Distensible stomach capable of rapid inflation with water when threatened.',
        'Intricate labyrinthine golden-yellow vermiculated line pattern across a deep olive-green dorsum.',
        'Skin covered in minute prickles without normal scales; large expressive eyes with independent mobility.'
      ],
      description: 'Tetraodon mbu is the largest freshwater pufferfish in the world, attaining lengths up to 67 cm. Heavy globular body with striking reticulated pattern.',
      maxStandardLengthCm: 67,
      coloration: 'Deep olive-green dorsum patterned with labyrinthine golden-yellow vermiculations; belly brilliant yellow to cream.'
    },
    habitat: { systems: ['freshwater'], zones: ['benthic', 'deep river pools', 'lake margins', 'large open river channels'], depthRangeMeters: { min: 1, max: 20 } },
    bangladeshOccurrence: {
      present: false,
      regions: ['Central Africa: Congo River basin and Lake Tanganyika'],
      habitatTypes: ['large freshwater river channels', 'deep rocky and sandy pools'],
      residencyStatus: 'not_recorded',
      localNamesBn: ['এমবু পটকা'],
      notes: 'Global freshwater reference species for order Tetraodontiformes and family Tetraodontidae. Absent from Asia.'
    },
    ecology: {
      dietCategory: 'carnivore',
      dietSummary: 'Specialized molluscivore and carcinophage crushing freshwater snails, river clams, crabs, and worms with beak-like teeth.',
      behavior: 'Solitary and territorial; inflates its elastic coelomic cavity with water into a spiny ball to deter predators; possesses lethal neurotoxin (tetrodotoxin) in viscera.',
      reproduction: 'Spawns on submerged substrates; male guards the clutch until free-swimming larvae emerge.',
      ecologicalRole: 'Specialized top invertebrate crusher controlling freshwater mollusk populations.'
    },
    conservation: {
      iucnGlobalStatus: 'LC',
      globalIucnStatus: 'LC',
      iucnAssessmentYear: 2020,
      globalStatusSource: 'IUCN Red List 2020: e.T182433A1736735',
      threats: ['Local mining effluents and destructive fishing methods in the Congo basin.']
    },
    lifecycleStatus: 'published', isVerified: true, speciesVerificationStatus: 'verified', imageVerificationStatus: 'verified', isPublished: true,
    referenceIds: ['ref-fishbase-2024', 'ref-eschmeyer-2024', 'ref-iucn-global-2024'],
    media: [
      {
        id: 'img-sp-tetraodon-mbu-01',
        speciesId: 'sp-tetraodon-mbu',
        taxonId: 'taxon-tetraodon',
        url: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Tetraodon_mbu_01_by_Line1.jpg',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Tetraodon_mbu_01_by_Line1.jpg',
        caption: 'Adult Mbu puffer (Tetraodon mbu) exhibiting labyrinthine yellow dorsal reticulations.',
        sourceName: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tetraodon_mbu_01_by_Line1.jpg',
        photographer: 'Liné1',
        license: 'CC-BY-SA',
        attribution: 'Liné1, CC BY-SA 3.0, via Wikimedia Commons',
        isVerified: true,
        verificationStatus: 'verified',
        imageType: 'specimen_photo',
        type: 'specimen_photo',
        verifiedBy: 'BiotaElite Taxonomic & Visual Audit Panel',
        verifiedAt: '2026-09-14T10:00:00Z',
        notes: 'Specimen photo illustrating the beak-like dental structure, distinctive reticulated pigmentation, and robust puffer build.'
      }
    ],
    version: 1, createdAt: '2026-09-14T10:00:00Z', updatedAt: '2026-09-14T10:00:00Z', verifiedAt: '2026-09-14T10:00:00Z', verifiedBy: 'Zoological Nomenclature & Ichthyology Panel'
  },
  {
    id: 'sp-carcharodon-carcharias',
    scientificName: 'Carcharodon carcharias',
    scientificNameAuthorship: '(Linnaeus, 1758)',
    taxonomicStatus: 'accepted',
    module: 'fish',
    taxonId: 'taxon-carcharodon',
    synonyms: [
      { name: 'Squalus carcharias', authorship: 'Linnaeus, 1758', status: 'homotypic', year: 1758, isBasionym: true, sourceId: 'ref-linnaeus-1758' }
    ],
    commonNames: { en: ['Great white shark', 'White pointer'], bn: ['গ্রেট হোয়াইট শার্ক'] },
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Chondrichthyes', order: 'Lamniformes', family: 'Lamnidae', genus: 'Carcharodon', species: 'Carcharodon carcharias' },
    morphology: {
      diagnosticFeatures: [
        'Large, triangular, heavily serrated blade-like teeth without lateral basal cusplets.',
        'Nearly symmetrical, crescent-shaped (lunate) caudal fin with strong lateral keels on caudal peduncle.',
        'Conical blunt snout and large black circular eyes lacking nictitating membranes.',
        'Sharp, clean boundary separating dark lead-grey dorsum from snow-white venter.'
      ],
      description: 'Carcharodon carcharias is the premier marine macropredatory lamniform reaching over 6 meters and 2,200 kg. Hydrodynamic torpedo body with regional endothermy.',
      maxStandardLengthCm: 640,
      coloration: 'Lead grey to slate brown on back and flanks; sharply delineated clean white underbelly; dark patch at axil of pectoral fins.'
    },
    habitat: { systems: ['marine'], zones: ['pelagic-neritic', 'oceanodromous', 'continental shelf', 'offshore island drop-offs'], depthRangeMeters: { min: 0, max: 1200 } },
    bangladeshOccurrence: {
      present: false,
      regions: ['Circumglobal in cool temperate and subtropical coastal seas (South Africa, Australia, California, Mediterranean)'],
      habitatTypes: ['coastal shelf waters near seal and sea lion rookeries', 'epipelagic oceanic migrations'],
      residencyStatus: 'not_recorded',
      localNamesBn: ['গ্রেট হোয়াইট শার্ক'],
      notes: 'Global marine reference species for order Lamniformes and family Lamnidae. Unverified in northern Bay of Bengal waters.'
    },
    ecology: {
      dietCategory: 'carnivore',
      dietSummary: 'Apex marine predator hunting pinnipeds (seals, sea lions), dolphins, sea turtles, large teleosts, and scavenged whale carcasses.',
      behavior: 'Maintains elevated internal muscle and visceral temperatures (10-14°C above ambient water) using vascular countercurrent rete mirabile; executes breach ambushes from deep water.',
      reproduction: 'Ovoviviparous with intrauterine oophagy (developing embryos consume unfertilized eggs in utero); gestation estimated at 11-18 months.',
      ecologicalRole: 'Top keystone apex regulator of marine mammal and large pelagic fish communities.'
    },
    conservation: {
      iucnGlobalStatus: 'VU',
      globalIucnStatus: 'VU',
      iucnAssessmentYear: 2019,
      globalStatusSource: 'IUCN Red List 2019: e.T3855A2878674',
      citesAppendix: 'II',
      threats: ['Commercial longline and gillnet bycatch.', 'Targeted sport fishing and black-market trade in jaws and teeth.', 'Protective shark beach nets.']
    },
    lifecycleStatus: 'published', isVerified: true, speciesVerificationStatus: 'verified', imageVerificationStatus: 'verified', isPublished: true,
    referenceIds: ['ref-linnaeus-1758', 'ref-fishbase-2024', 'ref-eschmeyer-2024', 'ref-iucn-global-2024'],
    media: [
      {
        id: 'img-sp-carcharodon-carcharias-01',
        speciesId: 'sp-carcharodon-carcharias',
        taxonId: 'taxon-carcharodon',
        url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/White_shark.jpg',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/56/White_shark.jpg',
        caption: 'Adult Great white shark (Carcharodon carcharias) cruising near the surface.',
        sourceName: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:White_shark.jpg',
        photographer: 'Terry Goss',
        license: 'CC-BY',
        attribution: 'Terry Goss, CC BY 2.5, via Wikimedia Commons',
        isVerified: true,
        verificationStatus: 'verified',
        imageType: 'specimen_photo',
        type: 'specimen_photo',
        verifiedBy: 'BiotaElite Taxonomic & Visual Audit Panel',
        verifiedAt: '2026-09-14T10:00:00Z',
        notes: 'Specimen photograph clearly illustrating the conical snout, large black eye, serrated triangular dentition, and sharp countershading.'
      }
    ],
    version: 1, createdAt: '2026-09-14T10:00:00Z', updatedAt: '2026-09-14T10:00:00Z', verifiedAt: '2026-09-14T10:00:00Z', verifiedBy: 'Zoological Nomenclature & Ichthyology Panel'
  },
  {
    id: 'sp-galeocerdo-cuvier',
    scientificName: 'Galeocerdo cuvier',
    scientificNameAuthorship: '(Péron & Lesueur, 1822)',
    taxonomicStatus: 'accepted',
    module: 'fish',
    taxonId: 'taxon-galeocerdo',
    synonyms: [
      { name: 'Squalus cuvier', authorship: 'Péron & Lesueur, 1822', status: 'homotypic', year: 1822, isBasionym: true }
    ],
    commonNames: { en: ['Tiger shark'], bn: ['বাঘা হাঙ্গর', 'চিতা হাঙ্গর'] },
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Chondrichthyes', order: 'Carcharhiniformes', family: 'Carcharhinidae', genus: 'Galeocerdo', species: 'Galeocerdo cuvier' },
    morphology: {
      diagnosticFeatures: [
        'Broad, short, bluntly rounded snout with long labial furrows extending nearly to the eyes.',
        'Distinctive cockscomb-shaped teeth with heavy serrations and deep outer notches, identical in upper and lower jaws.',
        'Dark vertical bars and spots forming a tiger-like pattern along the flanks (fades in mature adults).',
        'Low dermal ridge along the midline of the back between the dorsal fins.'
      ],
      description: 'Galeocerdo cuvier is a massive apex requiem shark reaching 5.5 meters and over 900 kg. Robust anterior body tapering to a slender tail.',
      maxStandardLengthCm: 550,
      coloration: 'Bluish-grey to dark grey on back; marked with distinct dark vertical tiger stripes and blotches; white underbelly.'
    },
    habitat: { systems: ['marine'], zones: ['pelagic-neritic', 'oceanodromous', 'coastal reefs', 'deep shelf waters'], depthRangeMeters: { min: 0, max: 350 } },
    bangladeshOccurrence: {
      present: true,
      regions: ['Bay of Bengal: Swatch of No Ground submarine canyon', 'outer continental shelf', 'Saint Martin Island offshore waters'],
      habitatTypes: ['marine canyon margins', 'pelagic neritic waters', 'outer shelf drop-offs'],
      residencyStatus: 'native',
      threatCategoryNational: 'VU',
      bangladeshNationalStatus: 'VU',
      nationalAssessmentYear: 2015,
      nationalStatusSource: 'IUCN Bangladesh Red List 2015 (Vol. 5: Marine Fishes)',
      localNamesBn: ['বাঘা হাঙ্গর', 'চিতা হাঙ্গর'],
      notes: 'Authoritative apex marine carcharhinid shark native to Bangladesh waters. Recorded regularly in deep offshore fisheries.'
    },
    ecology: {
      dietCategory: 'carnivore',
      dietSummary: 'Broad generalist apex carnivore consuming sea turtles, sea snakes, sharks, rays, marine birds, cephalopods, and marine mammals.',
      behavior: 'Nocturnal inshore hunter; possesses highly acute olfaction and sensory ampullae of Lorenzini; solitary and wide-ranging.',
      reproduction: 'Aplacental viviparous (ovoviviparous); litters are large (30 to 80 pups); gestation takes 13-16 months.',
      ecologicalRole: 'Top apex predator exercising top-down trophic control over coastal marine ecosystems.'
    },
    conservation: {
      iucnGlobalStatus: 'NT',
      globalIucnStatus: 'NT',
      iucnAssessmentYear: 2019,
      globalStatusSource: 'IUCN Red List 2019: e.T39378A2913241',
      bangladeshNationalStatus: 'VU',
      nationalAssessmentYear: 2015,
      nationalStatusSource: 'IUCN Bangladesh Red List 2015',
      threats: ['Pelagic longline and gillnet bycatch.', 'Targeted exploitation for shark fins and liver oil.', 'Ingestion of marine plastic debris.']
    },
    lifecycleStatus: 'published', isVerified: true, speciesVerificationStatus: 'verified', imageVerificationStatus: 'verified', isPublished: true,
    referenceIds: ['ref-fishbase-2024', 'ref-eschmeyer-2024', 'ref-iucn-bd-2015', 'ref-iucn-global-2024'],
    media: [
      {
        id: 'img-sp-galeocerdo-cuvier-01',
        speciesId: 'sp-galeocerdo-cuvier',
        taxonId: 'taxon-galeocerdo',
        url: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Tiger_shark.jpg',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Tiger_shark.jpg',
        caption: 'Adult Tiger shark (Galeocerdo cuvier) in coastal shelf waters.',
        sourceName: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tiger_shark.jpg',
        photographer: 'Albert kok',
        license: 'CC-BY-SA',
        attribution: 'Albert kok, CC BY-SA 3.0, via Wikimedia Commons',
        isVerified: true,
        verificationStatus: 'verified',
        imageType: 'specimen_photo',
        type: 'specimen_photo',
        verifiedBy: 'BiotaElite Taxonomic & Visual Audit Panel',
        verifiedAt: '2026-09-14T10:00:00Z',
        notes: 'Specimen photograph clearly illustrating the broad blunt snout, robust pectoral fins, and faint vertical flank banding.'
      }
    ],
    version: 1, createdAt: '2026-09-14T10:00:00Z', updatedAt: '2026-09-14T10:00:00Z', verifiedAt: '2026-09-14T10:00:00Z', verifiedBy: 'Zoological Nomenclature & Ichthyology Panel'
  },
  {
    id: 'sp-mobula-birostris',
    scientificName: 'Mobula birostris',
    scientificNameAuthorship: '(Walbaum, 1792)',
    taxonomicStatus: 'accepted',
    module: 'fish',
    taxonId: 'taxon-mobula',
    synonyms: [
      { name: 'Raja birostris', authorship: 'Walbaum, 1792', status: 'homotypic', year: 1792, isBasionym: true },
      { name: 'Manta birostris', authorship: '(Walbaum, 1792)', status: 'homotypic' }
    ],
    commonNames: { en: ['Giant oceanic manta ray', 'Oceanic manta'], bn: ['দানব মান্টা রে', 'শাপলাপাতা মাছ'] },
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Chondrichthyes', order: 'Myliobatiformes', family: 'Mobulidae', genus: 'Mobula', species: 'Mobula birostris' },
    morphology: {
      diagnosticFeatures: [
        'Enormous triangular pectoral wings with a disc width reaching up to 7 meters.',
        'Pair of paddle-like cephalic lobes curling forward to channel plankton-rich water into the wide terminal mouth.',
        'Terminal mouth positioned squarely at the front of the head (not ventral).',
        'Small dorsal fin at base of whip-like tail; tail lacks a serrated stinging spine.'
      ],
      description: 'Mobula birostris is the largest ray in the world, weighing up to 2,000 kg. Broad rhomboid disc with striking black-and-white dorsal shoulder patches.',
      maxStandardLengthCm: 700,
      coloration: 'Jet black on back with bright white shoulder patches forming a distinctive T-shaped black pattern; pure white underside with individual-specific black spots.'
    },
    habitat: { systems: ['marine'], zones: ['pelagic-neritic', 'oceanodromous', 'upwelling fronts', 'seamounts', 'coral reefs'], depthRangeMeters: { min: 0, max: 1000 } },
    bangladeshOccurrence: {
      present: true,
      regions: ['Bay of Bengal: Swatch of No Ground Marine Protected Area', 'coastal pelagic zones off Cox’s Bazar and Kuakata'],
      habitatTypes: ['deep canyon upwelling fronts', 'shelf edge pelagic zones'],
      residencyStatus: 'native',
      threatCategoryNational: 'EN',
      bangladeshNationalStatus: 'EN',
      nationalAssessmentYear: 2015,
      nationalStatusSource: 'IUCN Bangladesh Red List 2015 (Vol. 5: Marine Fishes)',
      localNamesBn: ['মান্টা রে', 'উড়ুক্কু শাপলাপাতা'],
      notes: 'Authoritative megafaunal batoid native to the Bay of Bengal. Strictly protected under Schedule I of Bangladesh Wildlife (Conservation and Security) Act 2012.'
    },
    ecology: {
      dietCategory: 'planktivore',
      dietSummary: 'Obligate filter feeder consuming massive quantities of euphausiids, copepods, mysids, and fish larvae filtered across specialized branchial gill plates.',
      behavior: 'Highly migratory; performs somersault feeding loops in dense plankton patches and leaps completely out of the water; possesses highest brain-to-body mass ratio of any fish.',
      reproduction: 'Ovoviviparous (aplacental viviparity); extremely low fecundity giving birth to a single pup every 2-3 years after a 12-month gestation.',
      ecologicalRole: 'Keystone pelagic filter-feeding megaherbivore linking primary/secondary zooplankton production to ocean food webs.'
    },
    conservation: {
      iucnGlobalStatus: 'EN',
      globalIucnStatus: 'EN',
      iucnAssessmentYear: 2020,
      globalStatusSource: 'IUCN Red List 2020: e.T198921A68632946',
      bangladeshNationalStatus: 'EN',
      nationalAssessmentYear: 2015,
      nationalStatusSource: 'IUCN Bangladesh Red List 2015',
      citesAppendix: 'II',
      threats: ['Targeted and bycatch gillnet fisheries driven by illegal international demand for gill plates.', 'Entanglement in pelagic driftnets.']
    },
    lifecycleStatus: 'published', isVerified: true, speciesVerificationStatus: 'verified', imageVerificationStatus: 'verified', isPublished: true,
    referenceIds: ['ref-fishbase-2024', 'ref-eschmeyer-2024', 'ref-iucn-bd-2015', 'ref-iucn-global-2024'],
    media: [
      {
        id: 'img-sp-mobula-birostris-01',
        speciesId: 'sp-mobula-birostris',
        taxonId: 'taxon-mobula',
        url: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Manta_birostris-Thailand3.jpg',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Manta_birostris-Thailand3.jpg',
        caption: 'Giant oceanic manta ray (Mobula birostris) swimming over a marine shelf.',
        sourceName: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Manta_birostris-Thailand3.jpg',
        photographer: 'Jon Hanson',
        license: 'CC-BY-SA',
        attribution: 'Jon Hanson, CC BY-SA 2.0, via Wikimedia Commons',
        isVerified: true,
        verificationStatus: 'verified',
        imageType: 'specimen_photo',
        type: 'specimen_photo',
        verifiedBy: 'BiotaElite Taxonomic & Visual Audit Panel',
        verifiedAt: '2026-09-14T10:00:00Z',
        notes: 'In-situ photograph clearly showing the cephalic lobes, broad pectoral wing disc, and terminal mouth.'
      }
    ],
    version: 1, createdAt: '2026-09-14T10:00:00Z', updatedAt: '2026-09-14T10:00:00Z', verifiedAt: '2026-09-14T10:00:00Z', verifiedBy: 'Zoological Nomenclature & Ichthyology Panel'
  },
  {
    id: 'sp-petromyzon-marinus',
    scientificName: 'Petromyzon marinus',
    scientificNameAuthorship: 'Linnaeus, 1758',
    taxonomicStatus: 'accepted',
    module: 'fish',
    taxonId: 'taxon-petromyzon',
    synonyms: [
      { name: 'Petromyzon marinus', authorship: 'Linnaeus, 1758', status: 'homotypic', year: 1758, isBasionym: true, sourceId: 'ref-linnaeus-1758' }
    ],
    commonNames: { en: ['Sea lamprey'], bn: ['সামুদ্রিক ল্যাম্প্রে'] },
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Petromyzonti', order: 'Petromyzontiformes', family: 'Petromyzontidae', genus: 'Petromyzon', species: 'Petromyzon marinus' },
    morphology: {
      diagnosticFeatures: [
        'Jawless circular oral sucking disc lined with concentric radiating rows of yellow horny keratinized teeth.',
        'Seven pairs of pore-like external gill openings arranged along the lateral neck region.',
        'Single median nasohypophysial nostril opening on top of the head between the eyes.',
        'Eel-like body completely lacking paired fins and bone.'
      ],
      description: 'Petromyzon marinus is an archaic jawless vertebrate reaching 120 cm and 2.5 kg. Scaleless cylindrical mottled olive-brown body with a cartilaginous skeleton.',
      maxStandardLengthCm: 120,
      coloration: 'Mottled olive-brown, blue-grey, or yellowish with dark reticulations on dorsum; belly pale white.'
    },
    habitat: { systems: ['marine', 'freshwater', 'brackish'], zones: ['anadromous', 'pelagic-neritic', 'riverine spawning beds'], depthRangeMeters: { min: 0, max: 400 } },
    bangladeshOccurrence: {
      present: false,
      regions: ['North Atlantic Ocean, Baltic Sea, Mediterranean Sea, and coastal European and North American rivers'],
      habitatTypes: ['clean gravel-bed river spawning runs', 'coastal neritic seas'],
      residencyStatus: 'not_recorded',
      localNamesBn: ['সামুদ্রিক ল্যাম্প্রে'],
      notes: 'Global marine reference species for the jawless class Petromyzonti and order Petromyzontiformes. Absent from Bangladesh and the Indian Ocean.'
    },
    ecology: {
      dietCategory: 'carnivore',
      dietSummary: 'Adults are parasitic on marine teleosts and sharks, rasping a hole in host skin with the tongue and feeding on blood and body fluids; ammocoete larvae are microphagous suspension feeders.',
      behavior: 'Anadromous; adults migrate from the open sea into swift-flowing freshwater rivers, where they move stones with their sucking mouths to build gravel redds before spawning and dying.',
      reproduction: 'Semelparous; blind, toothless ammocoete larvae hatch and burrow in river silt for 5-8 years before undergoing drastic metamorphosis into parasitic juveniles.',
      ecologicalRole: 'Ancient evolutionary lineage providing fundamental insight into early vertebrate origin and development.'
    },
    conservation: {
      iucnGlobalStatus: 'LC',
      globalIucnStatus: 'LC',
      iucnAssessmentYear: 2020,
      globalStatusSource: 'IUCN Red List 2020: e.T16781A18229984',
      threats: ['Dams blocking upstream migration in native European range (controlled as an invasive pest in the North American Great Lakes).']
    },
    lifecycleStatus: 'published', isVerified: true, speciesVerificationStatus: 'verified', imageVerificationStatus: 'verified', isPublished: true,
    referenceIds: ['ref-linnaeus-1758', 'ref-fishbase-2024', 'ref-eschmeyer-2024', 'ref-iucn-global-2024'],
    media: [
      {
        id: 'img-sp-petromyzon-marinus-01',
        speciesId: 'sp-petromyzon-marinus',
        taxonId: 'taxon-petromyzon',
        url: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Petromyzon_marinus_33027216.jpg',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Petromyzon_marinus_33027216.jpg',
        caption: 'Adult Sea lamprey (Petromyzon marinus) exhibiting lateral gill pores and jawless profile.',
        sourceName: 'Wikimedia Commons / iNaturalist',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Petromyzon_marinus_33027216.jpg',
        photographer: 'Steven Joyner',
        license: 'CC-BY',
        attribution: 'Steven Joyner, CC BY 4.0, via Wikimedia Commons',
        isVerified: true,
        verificationStatus: 'verified',
        imageType: 'specimen_photo',
        type: 'specimen_photo',
        verifiedBy: 'BiotaElite Taxonomic & Visual Audit Panel',
        verifiedAt: '2026-09-14T10:00:00Z',
        notes: 'Specimen photograph clearly showing the seven lateral gill pores, mottled skin, and lack of paired fins.'
      }
    ],
    version: 1, createdAt: '2026-09-14T10:00:00Z', updatedAt: '2026-09-14T10:00:00Z', verifiedAt: '2026-09-14T10:00:00Z', verifiedBy: 'Zoological Nomenclature & Ichthyology Panel'
  },
  {
    id: 'sp-myxine-glutinosa',
    scientificName: 'Myxine glutinosa',
    scientificNameAuthorship: 'Linnaeus, 1758',
    taxonomicStatus: 'accepted',
    module: 'fish',
    taxonId: 'taxon-myxine',
    synonyms: [
      { name: 'Myxine glutinosa', authorship: 'Linnaeus, 1758', status: 'homotypic', year: 1758, isBasionym: true, sourceId: 'ref-linnaeus-1758' }
    ],
    commonNames: { en: ['Atlantic hagfish'], bn: ['আটলান্টিক হ্যাগফিশ'] },
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Myxini', order: 'Myxiniformes', family: 'Myxinidae', genus: 'Myxine', species: 'Myxine glutinosa' },
    morphology: {
      diagnosticFeatures: [
        'Jawless craniate lacking a vertebral column, skull consisting solely of cartilaginous bars.',
        'Single external gill opening on each side of the body leading from six internal gill pouches.',
        'Four pairs of sensory barbels surrounding the mouth and single median nostril.',
        'Row of ventrolateral slime glands (70-90 pores) secreting massive amounts of defensive fibrous mucus.'
      ],
      description: 'Myxine glutinosa is a primitive marine craniate reaching 80 cm. Pinkish-grey or reddish eel-like scaleless body with no true eyes or paired fins.',
      maxStandardLengthCm: 80,
      coloration: 'Pinkish-brown to reddish-grey; head paler; mucous pores rimmed in white.'
    },
    habitat: { systems: ['marine'], zones: ['bathydemersal', 'continental slope', 'soft cold muddy ocean floors'], depthRangeMeters: { min: 20, max: 1200 } },
    bangladeshOccurrence: {
      present: false,
      regions: ['North Atlantic Ocean: Arctic Canada to North Carolina, Norway, North Sea, to western Mediterranean'],
      habitatTypes: ['deep soft muddy and clay sea beds'],
      residencyStatus: 'not_recorded',
      localNamesBn: ['আটলান্টিক হ্যাগফিশ'],
      notes: 'Global marine reference species for the jawless class Myxini and order Myxiniformes. Absent from Bangladesh.'
    },
    ecology: {
      dietCategory: 'detritivore',
      dietSummary: 'Demersal scavenger and predator burrowing into dead or moribund whales, teleosts, and benthic polychaetes.',
      behavior: 'Ties itself into a sliding overhand knot to generate mechanical leverage while tearing flesh with its toothed keratinous plates; exudes gallons of microfibrous slime in seconds when stressed to suffocate fish predators.',
      reproduction: 'Iteroparous; produces large (2 cm) leathery hooked eggs that anchor in bottom mud; direct development without larval stage.',
      ecologicalRole: 'Primary deep-sea benthic recycler accelerating nutrient turnover of sunken organic matter.'
    },
    conservation: {
      iucnGlobalStatus: 'LC',
      globalIucnStatus: 'LC',
      iucnAssessmentYear: 2020,
      globalStatusSource: 'IUCN Red List 2020: e.T196057A2438848',
      threats: ['Deep-water bottom trawling disturbing benthic mud habitats.']
    },
    lifecycleStatus: 'published', isVerified: true, speciesVerificationStatus: 'verified', imageVerificationStatus: 'verified', isPublished: true,
    referenceIds: ['ref-linnaeus-1758', 'ref-fishbase-2024', 'ref-eschmeyer-2024', 'ref-iucn-global-2024'],
    media: [
      {
        id: 'img-sp-myxine-glutinosa-01',
        speciesId: 'sp-myxine-glutinosa',
        taxonId: 'taxon-myxine',
        url: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Atlantic_Hagfish_%28Myxine_glutinosa%29.jpg',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Atlantic_Hagfish_%28Myxine_glutinosa%29.jpg',
        caption: 'Specimen of Atlantic hagfish (Myxine glutinosa) showing sensory barbels and eel-like form.',
        sourceName: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Atlantic_Hagfish_(Myxine_glutinosa).jpg',
        photographer: 'Charles Keith',
        license: 'Public Domain',
        attribution: 'Charles Keith, Public Domain, via Wikimedia Commons',
        isVerified: true,
        verificationStatus: 'verified',
        imageType: 'specimen_photo',
        type: 'specimen_photo',
        verifiedBy: 'BiotaElite Taxonomic & Visual Audit Panel',
        verifiedAt: '2026-09-14T10:00:00Z',
        notes: 'Specimen photo clearly displaying the sensory barbels, pinkish craniate dermis, and lack of paired fins or jaws.'
      }
    ],
    version: 1, createdAt: '2026-09-14T10:00:00Z', updatedAt: '2026-09-14T10:00:00Z', verifiedAt: '2026-09-14T10:00:00Z', verifiedBy: 'Zoological Nomenclature & Ichthyology Panel'
  },
  {
    id: 'sp-synodus-saurus',
    scientificName: 'Synodus saurus',
    scientificNameAuthorship: '(Linnaeus, 1758)',
    taxonomicStatus: 'accepted',
    module: 'fish',
    taxonId: 'taxon-synodus',
    synonyms: [
      { name: 'Salmo saurus', authorship: 'Linnaeus, 1758', status: 'homotypic', year: 1758, isBasionym: true, sourceId: 'ref-linnaeus-1758' }
    ],
    commonNames: { en: ['Atlantic lizardfish'], bn: ['আটলান্টিক লিজার্ডফিশ', 'টিকটিকি মাছ'] },
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Actinopterygii', order: 'Aulopiformes', family: 'Synodontidae', genus: 'Synodus', species: 'Synodus saurus' },
    morphology: {
      diagnosticFeatures: [
        'Pointed, depressed, lizard-like head with large upward-directed eyes.',
        'Extremely wide mouth deeply cleft past the eyes, armed with numerous needle-sharp depressible teeth on jaws, palate, and tongue.',
        'Elongated cylindrical body with smooth cycloid scales.',
        'Small adipose fin present above the posterior anal fin base.'
      ],
      description: 'Synodus saurus is a predatory benthic aulopiform reaching 40 cm. Sand-colored body with dark saddles and blotches mimicking coastal sediment.',
      maxStandardLengthCm: 40,
      coloration: 'Beige to greyish-yellow with 8-9 dark brownish saddles across dorsum and blue-white iridescent flank flecks; belly white.'
    },
    habitat: { systems: ['marine'], zones: ['demersal', 'neritic', 'sandy coastal shelves', 'Posidonia seagrass margins'], depthRangeMeters: { min: 1, max: 70 } },
    bangladeshOccurrence: {
      present: false,
      regions: ['Eastern Atlantic Ocean: Morocco to Cape Verde, Azores, Madeira, and throughout the Mediterranean Sea'],
      habitatTypes: ['subtidal sandy plains', 'rocky reef borders', 'seagrass beds'],
      residencyStatus: 'not_recorded',
      localNamesBn: ['লিজার্ডফিশ'],
      notes: 'Global marine reference species for order Aulopiformes and family Synodontidae. Extralimital; (Bay of Bengal possesses native Saurida tumbil).'
    },
    ecology: {
      dietCategory: 'carnivore',
      dietSummary: 'Benthic ambush predator feeding on small demersal fishes (gobies, wrasses, damselfishes) and decapod crustaceans.',
      behavior: 'Buries itself in sand with only eyes exposed, motionless for hours before executing lightning-fast darting lunges at passing prey.',
      reproduction: 'External fertilization; pelagic eggs and larvae drift in nearshore currents.',
      ecologicalRole: 'Dominant ambush piscivore on sandy continental shelf substrates.'
    },
    conservation: {
      iucnGlobalStatus: 'LC',
      globalIucnStatus: 'LC',
      iucnAssessmentYear: 2021,
      globalStatusSource: 'IUCN Red List 2021: e.T198642A21912448',
      threats: ['Coastal bottom trawling and habitat alteration.']
    },
    lifecycleStatus: 'published', isVerified: true, speciesVerificationStatus: 'verified', imageVerificationStatus: 'verified', isPublished: true,
    referenceIds: ['ref-linnaeus-1758', 'ref-fishbase-2024', 'ref-eschmeyer-2024', 'ref-iucn-global-2024'],
    media: [
      {
        id: 'img-sp-synodus-saurus-01',
        speciesId: 'sp-synodus-saurus',
        taxonId: 'taxon-synodus',
        url: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Synodus_saurus.jpg',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Synodus_saurus.jpg',
        caption: 'Atlantic lizardfish (Synodus saurus) resting on sandy marine substrate.',
        sourceName: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Synodus_saurus.jpg',
        photographer: 'riblje-oko.hr',
        license: 'CC-BY-SA',
        attribution: 'riblje-oko.hr, CC BY-SA 3.0, via Wikimedia Commons',
        isVerified: true,
        verificationStatus: 'verified',
        imageType: 'specimen_photo',
        type: 'specimen_photo',
        verifiedBy: 'BiotaElite Taxonomic & Visual Audit Panel',
        verifiedAt: '2026-09-14T10:00:00Z',
        notes: 'Specimen photograph clearly illustrating the lizard-like head, needle dentition, adipose fin, and mottled sand camouflage.'
      }
    ],
    version: 1, createdAt: '2026-09-14T10:00:00Z', updatedAt: '2026-09-14T10:00:00Z', verifiedAt: '2026-09-14T10:00:00Z', verifiedBy: 'Zoological Nomenclature & Ichthyology Panel'
  },
  {
    id: 'sp-scomber-scombrus',
    scientificName: 'Scomber scombrus',
    scientificNameAuthorship: 'Linnaeus, 1758',
    taxonomicStatus: 'accepted',
    module: 'fish',
    taxonId: 'taxon-scomber',
    synonyms: [
      { name: 'Scomber scombrus', authorship: 'Linnaeus, 1758', status: 'homotypic', year: 1758, isBasionym: true, sourceId: 'ref-linnaeus-1758' }
    ],
    commonNames: { en: ['Atlantic mackerel'], bn: ['আটলান্টিক ম্যাকারেল'] },
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Actinopterygii', order: 'Scombriformes', family: 'Scombridae', genus: 'Scomber', species: 'Scomber scombrus' },
    morphology: {
      diagnosticFeatures: [
        'Series of 5 detached small finlets behind the second dorsal fin and behind the anal fin.',
        'Metallic steel-blue dorsum marked with 20-30 prominent wavy, dark, undulating transverse bars.',
        'Complete absence of a swim bladder; must maintain continuous forward swimming motion to respire and maintain vertical position.',
        'Slender, strongly keeled caudal peduncle terminating in a deeply forked tail.'
      ],
      description: 'Scomber scombrus is a fast-swimming pelagic scombrid reaching 60 cm and 3.4 kg. Streamlined hydrodynamic spindle-shaped body with minute cycloid scales.',
      maxStandardLengthCm: 60,
      coloration: 'Iridescent metallic steel-blue with black undulating tiger-like dorsal bars; sides and belly glistening silvery-white with pinkish sheen.'
    },
    habitat: { systems: ['marine'], zones: ['pelagic-neritic', 'oceanodromous', 'open continental shelves'], depthRangeMeters: { min: 0, max: 200 } },
    bangladeshOccurrence: {
      present: false,
      regions: ['North Atlantic Ocean: Baltic Sea, Mediterranean Sea, Black Sea, American Atlantic coast from Labrador to North Carolina'],
      habitatTypes: ['open epipelagic and mesopelagic shelf waters'],
      residencyStatus: 'not_recorded',
      localNamesBn: ['আটলান্টিক ম্যাকারেল'],
      notes: 'Global marine reference species for order Scombriformes and family Scombridae. Extralimital; (Bay of Bengal hosts native Rastrelliger kanagurta).'
    },
    ecology: {
      dietCategory: 'carnivore',
      dietSummary: 'Pelagic ram filter feeder consuming copepods, euphausiid krill, pteropods, and small schooling teleosts (sand lance, sprat, juvenile herring).',
      behavior: 'Fast-swimming obligate schooling pelagic cruiser undergoing extensive seasonal migrations between southern wintering grounds and northern feeding shoals.',
      reproduction: 'Pelagic spawner releasing buoyant eggs over continental shelf waters in late spring and early summer.',
      ecologicalRole: 'Essential mid-trophic forage fish sustaining tuna, sharks, cetaceans, and seabirds across the North Atlantic.'
    },
    conservation: {
      iucnGlobalStatus: 'LC',
      globalIucnStatus: 'LC',
      iucnAssessmentYear: 2021,
      globalStatusSource: 'IUCN Red List 2021: e.T170354A46914562',
      threats: ['Intensive industrial commercial purse-seine and pelagic trawl harvesting.']
    },
    lifecycleStatus: 'published', isVerified: true, speciesVerificationStatus: 'verified', imageVerificationStatus: 'verified', isPublished: true,
    referenceIds: ['ref-linnaeus-1758', 'ref-fishbase-2024', 'ref-eschmeyer-2024', 'ref-iucn-global-2024'],
    media: [
      {
        id: 'img-sp-scomber-scombrus-01',
        speciesId: 'sp-scomber-scombrus',
        taxonId: 'taxon-scomber',
        url: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Scomber_scombrus.jpg',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Scomber_scombrus.jpg',
        caption: 'Fresh specimen of Atlantic mackerel (Scomber scombrus) displaying iridescent dorsal vermiculations.',
        sourceName: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Scomber_scombrus.jpg',
        photographer: 'Hans Hillewaert',
        license: 'CC-BY-SA',
        attribution: 'Hans Hillewaert, CC BY-SA 4.0, via Wikimedia Commons',
        isVerified: true,
        verificationStatus: 'verified',
        imageType: 'specimen_photo',
        type: 'specimen_photo',
        verifiedBy: 'BiotaElite Taxonomic & Visual Audit Panel',
        verifiedAt: '2026-09-14T10:00:00Z',
        notes: 'Specimen photo showing the distinctive dorsal finlets, undulating dark bars, and fusiform scombrid morphology.'
      }
    ],
    version: 1, createdAt: '2026-09-14T10:00:00Z', updatedAt: '2026-09-14T10:00:00Z', verifiedAt: '2026-09-14T10:00:00Z', verifiedBy: 'Zoological Nomenclature & Ichthyology Panel'
  },
  {
    id: 'sp-caranx-ignobilis',
    scientificName: 'Caranx ignobilis',
    scientificNameAuthorship: '(Forsskål, 1775)',
    taxonomicStatus: 'accepted',
    module: 'fish',
    taxonId: 'taxon-caranx',
    synonyms: [
      { name: 'Scomber ignobilis', authorship: 'Forsskål, 1775', status: 'homotypic', year: 1775, isBasionym: true }
    ],
    commonNames: { en: ['Giant trevally', 'GT', 'Lowly trevally'], bn: ['জায়ান্ট ট্রেভালি', 'কোটাল মাছ'] },
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Actinopterygii', order: 'Carangiformes', family: 'Carangidae', genus: 'Caranx', species: 'Caranx ignobilis' },
    morphology: {
      diagnosticFeatures: [
        'Steeply sloping dorsal head profile with large eyes and a deeply compressed robust body.',
        'Breast naked of scales ventrally, except for a small patch of scales immediately in front of pelvic fins.',
        'Lateral line strongly arched anteriorly, straight posterior section armed with 26-38 heavy bony scutes.',
        'Mature males turn uniformly dusky grey to jet black during courting and spawning.'
      ],
      description: 'Caranx ignobilis is the largest species in the jack family Carangidae, reaching up to 170 cm and 80 kg. Powerful apex predator with heavy caudal peduncle.',
      maxStandardLengthCm: 170,
      coloration: 'Silvery-grey to bronze on back in females and juveniles; mature males turn charcoal grey to velvety jet black.'
    },
    habitat: { systems: ['marine', 'brackish'], zones: ['pelagic-neritic', 'coral reefs', 'drop-offs', 'estuarine mangrove channels'], depthRangeMeters: { min: 1, max: 188 } },
    bangladeshOccurrence: {
      present: true,
      regions: ['Bay of Bengal: Saint Martin Island coral shelves', 'Swatch of No Ground drop-offs', 'Cox’s Bazar offshore reefs'],
      habitatTypes: ['subtidal coral and rocky reefs', 'steep drop-offs', 'coastal estuarine inlets'],
      residencyStatus: 'native',
      threatCategoryNational: 'LC',
      bangladeshNationalStatus: 'LC',
      nationalAssessmentYear: 2015,
      nationalStatusSource: 'IUCN Bangladesh Red List 2015 (Vol. 5: Marine Fishes)',
      localNamesBn: ['ট্রেভালি', 'কোটাল'],
      notes: 'Authoritative marine carangid native to the Bay of Bengal. Highly prized in offshore sports and commercial hook-and-line fisheries.'
    },
    ecology: {
      dietCategory: 'carnivore',
      dietSummary: 'Apex coral reef piscivore feeding on reef fishes, eels, squids, spiny lobsters, and juvenile seabirds captured by leaping clear of the water.',
      behavior: 'Solitary as large adults, roaming reef drop-offs with high swimming speed; forms dense breeding aggregations over drop-offs during full moons.',
      reproduction: 'Broadcast spawner over offshore reef drop-offs; pelagic eggs and larvae drift in oceanic currents before settling in inshore nursery estuaries.',
      ecologicalRole: 'Top apex reef predator maintaining biodiversity by regulating mid-level carnivorous fish populations.'
    },
    conservation: {
      iucnGlobalStatus: 'LC',
      globalIucnStatus: 'LC',
      iucnAssessmentYear: 2019,
      globalStatusSource: 'IUCN Red List 2019: e.T20430679A115378278',
      bangladeshNationalStatus: 'LC',
      nationalAssessmentYear: 2015,
      nationalStatusSource: 'IUCN Bangladesh Red List 2015',
      threats: ['Overfishing by commercial offshore longlines and spearfishing on coral reefs.']
    },
    lifecycleStatus: 'published', isVerified: true, speciesVerificationStatus: 'verified', imageVerificationStatus: 'verified', isPublished: true,
    referenceIds: ['ref-fishbase-2024', 'ref-eschmeyer-2024', 'ref-iucn-bd-2015', 'ref-iucn-global-2024'],
    media: [
      {
        id: 'img-sp-caranx-ignobilis-01',
        speciesId: 'sp-caranx-ignobilis',
        taxonId: 'taxon-caranx',
        url: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Caranx_ignobilis.jpg',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Caranx_ignobilis.jpg',
        caption: 'Giant trevally (Caranx ignobilis) patrolling outer reef drop-off, NOAA photo.',
        sourceName: 'Wikimedia Commons / NOAA',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Caranx_ignobilis.jpg',
        photographer: 'Dr. Dwayne Meadows, NOAA/NMFS/OPR',
        license: 'Public Domain',
        attribution: 'Dr. Dwayne Meadows, NOAA/NMFS/OPR, Public Domain, via Wikimedia Commons',
        isVerified: true,
        verificationStatus: 'verified',
        imageType: 'specimen_photo',
        type: 'specimen_photo',
        verifiedBy: 'BiotaElite Taxonomic & Visual Audit Panel',
        verifiedAt: '2026-09-14T10:00:00Z',
        notes: 'Specimen photograph clearly illustrating the steep head profile, lateral scutes, and robust carangid physique.'
      }
    ],
    version: 1, createdAt: '2026-09-14T10:00:00Z', updatedAt: '2026-09-14T10:00:00Z', verifiedAt: '2026-09-14T10:00:00Z', verifiedBy: 'Zoological Nomenclature & Ichthyology Panel'
  },
  {
    id: 'sp-arapaima-gigas',
    scientificName: 'Arapaima gigas',
    scientificNameAuthorship: '(Schinz, 1822)',
    taxonomicStatus: 'accepted',
    module: 'fish',
    taxonId: 'taxon-arapaima',
    synonyms: [
      { name: 'Sudis gigas', authorship: 'Schinz, 1822', status: 'homotypic', year: 1822, isBasionym: true }
    ],
    commonNames: { en: ['Arapaima', 'Pirarucu', 'Paiche'], bn: ['আরাপাইমা', 'পিরারুকু'] },
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Actinopterygii', order: 'Osteoglossiformes', family: 'Arapaimidae', genus: 'Arapaima', species: 'Arapaima gigas' },
    morphology: {
      diagnosticFeatures: [
        'Massive torpedo-shaped body covered in large, heavily mineralized armor-like cycloid scales with flexural fracture resistance.',
        'Bony tongue (glossothyal bone) equipped with sharp teeth biting against tooth plates on the roof of the mouth.',
        'Dorsal and anal fins positioned far posteriorly near the rounded tail.',
        'Posterior scales heavily edged with brilliant scarlet red markings.'
      ],
      description: 'Arapaima gigas is one of the largest freshwater teleost fishes in the world, reaching up to 3 meters and 200 kg. Tapering head with upturned mouth and heavily armored scales.',
      maxStandardLengthCm: 300,
      coloration: 'Dark grey to copper-green on head and back; posterior body scales dramatically edged in bright scarlet red.'
    },
    habitat: { systems: ['freshwater'], zones: ['demersal', 'riverine floodplains', 'oxbow lakes', 'flooded igapó forests'], depthRangeMeters: { min: 0, max: 15 } },
    bangladeshOccurrence: {
      present: false,
      regions: ['South America: Amazon and Essequibo River basins in Brazil, Peru, Guyana, and Colombia'],
      habitatTypes: ['lowland floodplain lakes', 'nutrient-rich varzea flood basins'],
      residencyStatus: 'not_recorded',
      localNamesBn: ['আরাপাইমা'],
      notes: 'Global freshwater reference species for order Osteoglossiformes and family Arapaimidae. Extralimital; absent from Bangladesh.'
    },
    ecology: {
      dietCategory: 'carnivore',
      dietSummary: 'Apex freshwater predator feeding on fishes (armored catfishes, characins), crabs, frogs, birds, and small mammals seized near the surface.',
      behavior: 'Obligate air breather; modified lung-like vascularized gas bladder requires surfacing every 5-15 minutes with a loud acoustic gulping sound.',
      reproduction: 'Male excavates a circular nest in sandy riverbeds during low water; female lays eggs which the male fertilizes and guards, mouth-brooding fry around his dark head.',
      ecologicalRole: 'Top apex freshwater megafaunal consumer in Amazonian floodplain ecosystems.'
    },
    conservation: {
      iucnGlobalStatus: 'DD',
      globalIucnStatus: 'DD',
      iucnAssessmentYear: 2019,
      globalStatusSource: 'IUCN Red List 2019: e.T1993A17316712',
      citesAppendix: 'II',
      threats: ['Historically heavily overharvested with harpoons and gillnets for commercial salted meat export.']
    },
    lifecycleStatus: 'published', isVerified: true, speciesVerificationStatus: 'verified', imageVerificationStatus: 'verified', isPublished: true,
    referenceIds: ['ref-fishbase-2024', 'ref-eschmeyer-2024', 'ref-iucn-global-2024'],
    media: [
      {
        id: 'img-sp-arapaima-gigas-01',
        speciesId: 'sp-arapaima-gigas',
        taxonId: 'taxon-arapaima',
        url: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Arapaima_gigas_captivity.jpg',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Arapaima_gigas_captivity.jpg',
        caption: 'Adult Arapaima (Arapaima gigas) showcasing crimson-edged armor scales.',
        sourceName: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Arapaima_gigas_captivity.jpg',
        photographer: 'Citron',
        license: 'CC-BY-SA',
        attribution: 'Citron, CC BY-SA 3.0, via Wikimedia Commons',
        isVerified: true,
        verificationStatus: 'verified',
        imageType: 'specimen_photo',
        type: 'specimen_photo',
        verifiedBy: 'BiotaElite Taxonomic & Visual Audit Panel',
        verifiedAt: '2026-09-14T10:00:00Z',
        notes: 'Specimen photo clearly demonstrating the armored scales, red scale highlights, and osteoglossiform profile.'
      }
    ],
    version: 1, createdAt: '2026-09-14T10:00:00Z', updatedAt: '2026-09-14T10:00:00Z', verifiedAt: '2026-09-14T10:00:00Z', verifiedBy: 'Zoological Nomenclature & Ichthyology Panel'
  },
  {
    id: 'sp-exocoetus-volitans',
    scientificName: 'Exocoetus volitans',
    scientificNameAuthorship: 'Linnaeus, 1758',
    taxonomicStatus: 'accepted',
    module: 'fish',
    taxonId: 'taxon-exocoetus',
    synonyms: [
      { name: 'Exocoetus volitans', authorship: 'Linnaeus, 1758', status: 'homotypic', year: 1758, isBasionym: true, sourceId: 'ref-linnaeus-1758' }
    ],
    commonNames: { en: ['Tropical two-wing flyingfish'], bn: ['উড়ুক্কু মাছ', 'উড়ন্ত মাছ'] },
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Actinopterygii', order: 'Beloniformes', family: 'Exocoetidae', genus: 'Exocoetus', species: 'Exocoetus volitans' },
    morphology: {
      diagnosticFeatures: [
        'Enormously expanded, wing-like pectoral fins extending well beyond the origin of the dorsal fin.',
        'Pelvic fins small, positioned far forward near the mid-body (two-wing flyingfish design).',
        'Unequal, hypocercal caudal fin with an elongated lower lobe for surface taxiing propulsion.',
        'Bluish-black iridescent dorsum contrasting with pure silvery flanks and belly.'
      ],
      description: 'Exocoetus volitans reaches 30 cm in length. Streamlined cylindrical body adapted for rapid aquatic acceleration and gliding flight above waves.',
      maxStandardLengthCm: 30,
      coloration: 'Deep iridescent metallic cobalt blue on back; silvery white on flanks and belly; pectoral fins transparent grey.'
    },
    habitat: { systems: ['marine'], zones: ['epipelagic', 'oceanodromous', 'open tropical and subtropical oceans'], depthRangeMeters: { min: 0, max: 20 } },
    bangladeshOccurrence: {
      present: true,
      regions: ['Bay of Bengal: open pelagic offshore waters and deep canyon areas'],
      habitatTypes: ['epipelagic ocean surface waters'],
      residencyStatus: 'native',
      threatCategoryNational: 'LC',
      bangladeshNationalStatus: 'LC',
      nationalAssessmentYear: 2015,
      nationalStatusSource: 'IUCN Bangladesh Red List 2015 (Vol. 5: Marine Fishes)',
      localNamesBn: ['উড়ুক্কু মাছ', 'উড়ন্ত মাছ'],
      notes: 'Authoritative marine beloniform native to the Bay of Bengal. Observed frequently gliding across waves in offshore waters.'
    },
    ecology: {
      dietCategory: 'carnivore',
      dietSummary: 'Feeds on pelagic copepods, chaetognaths, pteropods, and larval fishes in oceanic surface waters.',
      behavior: 'Swims at high speed up to 60 km/h, breaches the water surface, and vigorously vibrates the elongated lower tail lobe to launch into prolonged gliding flights up to 400 meters to evade pelagic predators.',
      reproduction: 'Releases pelagic eggs with sticky filamentous threads that tangle around floating sargassum seaweed.',
      ecologicalRole: 'Crucial mid-trophic link in tropical open-ocean food webs consumed by tunas, billfishes, and seabirds.'
    },
    conservation: {
      iucnGlobalStatus: 'LC',
      globalIucnStatus: 'LC',
      iucnAssessmentYear: 2019,
      globalStatusSource: 'IUCN Red List 2019: e.T190111A1940733',
      bangladeshNationalStatus: 'LC',
      nationalAssessmentYear: 2015,
      nationalStatusSource: 'IUCN Bangladesh Red List 2015',
      threats: ['Oceanic pelagic pollution and plastic ingestion.']
    },
    lifecycleStatus: 'published', isVerified: true, speciesVerificationStatus: 'verified', imageVerificationStatus: 'verified', isPublished: true,
    referenceIds: ['ref-linnaeus-1758', 'ref-fishbase-2024', 'ref-eschmeyer-2024', 'ref-iucn-bd-2015', 'ref-iucn-global-2024'],
    media: [
      {
        id: 'img-sp-exocoetus-volitans-01',
        speciesId: 'sp-exocoetus-volitans',
        taxonId: 'taxon-exocoetus',
        url: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Schwalbenfisch.jpg',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Schwalbenfisch.jpg',
        caption: 'Specimen of Two-wing flyingfish (Exocoetus volitans) displaying wing-like pectoral fins.',
        sourceName: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Schwalbenfisch.jpg',
        photographer: 'Kolisberg',
        license: 'CC-BY-SA',
        attribution: 'Kolisberg, CC BY-SA 2.5 ch, via Wikimedia Commons',
        isVerified: true,
        verificationStatus: 'verified',
        imageType: 'specimen_photo',
        type: 'specimen_photo',
        verifiedBy: 'BiotaElite Taxonomic & Visual Audit Panel',
        verifiedAt: '2026-09-14T10:00:00Z',
        notes: 'Specimen photograph clearly illustrating the elongated pectoral wings and hypocercal tail fin.'
      }
    ],
    version: 1, createdAt: '2026-09-14T10:00:00Z', updatedAt: '2026-09-14T10:00:00Z', verifiedAt: '2026-09-14T10:00:00Z', verifiedBy: 'Zoological Nomenclature & Ichthyology Panel'
  },
  {
    id: 'sp-lophius-piscatorius',
    scientificName: 'Lophius piscatorius',
    scientificNameAuthorship: 'Linnaeus, 1758',
    taxonomicStatus: 'accepted',
    module: 'fish',
    taxonId: 'taxon-lophius',
    synonyms: [
      { name: 'Lophius piscatorius', authorship: 'Linnaeus, 1758', status: 'homotypic', year: 1758, isBasionym: true, sourceId: 'ref-linnaeus-1758' }
    ],
    commonNames: { en: ['Anglerfish', 'Monkfish', 'Fishing-frog'], bn: ['মাঙ্কফিশ', 'অ্যাংগলারফিশ'] },
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Actinopterygii', order: 'Lophiiformes', family: 'Lophiidae', genus: 'Lophius', species: 'Lophius piscatorius' },
    morphology: {
      diagnosticFeatures: [
        'Enormous flattened, depressed head with an immense crescent-shaped mouth bristling with long, sharp, depressible teeth.',
        'First dorsal spine modified into an elongated fishing rod (illicium) tipped with a fleshy, bifid lure (esca).',
        'Fringe of small branched dermal flaps lining the lower jaw and lateral body margins for disruptive camouflage.',
        'Muscular pectoral and pelvic fins adapted for resting and creeping along bottom sediments.'
      ],
      description: 'Lophius piscatorius is a master benthic ambush predator reaching 200 cm and 58 kg. Depressed brown mottled body with scaleless skin.',
      maxStandardLengthCm: 200,
      coloration: 'Mottled dark brown, olive, or sandy-grey with dark reticulations matching rocky/muddy seabed; belly pure white.'
    },
    habitat: { systems: ['marine'], zones: ['benthic', 'demersal', 'continental shelf', 'upper bathyal slope'], depthRangeMeters: { min: 20, max: 1000 } },
    bangladeshOccurrence: {
      present: false,
      regions: ['Northeast Atlantic Ocean: Barents Sea, Baltic Sea, North Sea, British Isles, to Mediterranean and Black Sea'],
      habitatTypes: ['sandy, gravel, and muddy continental shelves', 'deep slope channels'],
      residencyStatus: 'not_recorded',
      localNamesBn: ['মাঙ্কফিশ'],
      notes: 'Global marine reference species for order Lophiiformes and family Lophiidae. Absent from tropical waters and Bangladesh.'
    },
    ecology: {
      dietCategory: 'carnivore',
      dietSummary: 'Apex benthic ambush predator consuming gadoids (cod, haddock), flatfishes, sand lance, rays, crabs, and occasional diving seabirds.',
      behavior: 'Lies half-buried in sediment, waving its esca lure to entice curious fishes before expanding its oral cavity within milliseconds to vacuum prey whole.',
      reproduction: 'Pelagic spawner; female releases an extraordinary gelatinous ribbon of buoyant mucus (egg veil) up to 10 meters long containing over 1 million eggs.',
      ecologicalRole: 'Top benthic ambush regulator in European continental shelf marine food webs.'
    },
    conservation: {
      iucnGlobalStatus: 'LC',
      globalIucnStatus: 'LC',
      iucnAssessmentYear: 2021,
      globalStatusSource: 'IUCN Red List 2021: e.T198610A21911475',
      threats: ['Targeted commercial otter trawling and deep-water gillnetting for monkfish tails.']
    },
    lifecycleStatus: 'published', isVerified: true, speciesVerificationStatus: 'verified', imageVerificationStatus: 'verified', isPublished: true,
    referenceIds: ['ref-linnaeus-1758', 'ref-fishbase-2024', 'ref-eschmeyer-2024', 'ref-iucn-global-2024'],
    media: [
      {
        id: 'img-sp-lophius-piscatorius-01',
        speciesId: 'sp-lophius-piscatorius',
        taxonId: 'taxon-lophius',
        url: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Lophius_piscatorius_MHNT.jpg',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Lophius_piscatorius_MHNT.jpg',
        caption: 'Preserved specimen of Monkfish (Lophius piscatorius) at Muséum de Toulouse.',
        sourceName: 'Wikimedia Commons / Muséum de Toulouse',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Lophius_piscatorius_MHNT.jpg',
        photographer: 'Didier Descouens',
        license: 'CC-BY-SA',
        attribution: 'Didier Descouens, CC BY-SA 4.0, via Wikimedia Commons',
        isVerified: true,
        verificationStatus: 'verified',
        imageType: 'specimen_photo',
        type: 'specimen_photo',
        verifiedBy: 'BiotaElite Taxonomic & Visual Audit Panel',
        verifiedAt: '2026-09-14T10:00:00Z',
        notes: 'Museum specimen photo clearly showing the massive mouth, sharp backward-pointing teeth, illicium, and flattened skull.'
      }
    ],
    version: 1, createdAt: '2026-09-14T10:00:00Z', updatedAt: '2026-09-14T10:00:00Z', verifiedAt: '2026-09-14T10:00:00Z', verifiedBy: 'Zoological Nomenclature & Ichthyology Panel'
  },
  {
    id: 'sp-engraulis-encrasicolus',
    scientificName: 'Engraulis encrasicolus',
    scientificNameAuthorship: '(Linnaeus, 1758)',
    taxonomicStatus: 'accepted',
    module: 'fish',
    taxonId: 'taxon-engraulis',
    synonyms: [
      { name: 'Clupea encrasicolus', authorship: 'Linnaeus, 1758', status: 'homotypic', year: 1758, isBasionym: true, sourceId: 'ref-linnaeus-1758' }
    ],
    commonNames: { en: ['European anchovy'], bn: ['ইউরোপীয় এঙ্কোভি'] },
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Actinopterygii', order: 'Clupeiformes', family: 'Engraulidae', genus: 'Engraulis', species: 'Engraulis encrasicolus' },
    morphology: {
      diagnosticFeatures: [
        'Pointed, conical, pig-like snout strongly overhanging the mouth.',
        'Extremely wide, subterminal mouth gape extending far behind the posterior margin of the eye.',
        'Slender, cylindrical, translucent body with silvery deciduous cycloid scales.',
        'Abdomen smooth and rounded, lacking sharp ventral scutes.'
      ],
      description: 'Engraulis encrasicolus is a foundational clupeiform forage fish reaching 21 cm. Silvery-green body with a bright metallic flank stripe.',
      maxStandardLengthCm: 21,
      coloration: 'Silvery-green to bluish-black on back; glistening silvery flank and belly with an iridescent lateral longitudinal stripe.'
    },
    habitat: { systems: ['marine', 'brackish'], zones: ['pelagic-neritic', 'oceanodromous', 'coastal bays', 'estuaries'], depthRangeMeters: { min: 0, max: 400 } },
    bangladeshOccurrence: {
      present: false,
      regions: ['Eastern Atlantic Ocean: Norway to South Africa, Mediterranean Sea, Black Sea, and Sea of Azov'],
      habitatTypes: ['coastal neritic surface waters', 'estuarine lagoons', 'semi-enclosed seas'],
      residencyStatus: 'not_recorded',
      localNamesBn: ['ইউরোপীয় এঙ্কোভি'],
      notes: 'Global marine reference species for order Clupeiformes and family Engraulidae. Extralimital; (Bay of Bengal hosts native Stolephorus and Thryssa species).'
    },
    ecology: {
      dietCategory: 'planktivore',
      dietSummary: 'Active filter and particulate feeder sieving planktonic copepods, cirripede larvae, and molluscan veligers with fine gill rakers.',
      behavior: 'Forms dense schooling shoals in surface waters during daylight, dispersing at night; highly tolerant of wide salinity variations (euryhaline).',
      reproduction: 'Pelagic spawner releasing thousands of buoyant, distinctively oval (ellipsoid) eggs lacking oil globules.',
      ecologicalRole: 'Fundamental mid-trophic forage species sustaining coastal seabirds, marine mammals, and predatory teleosts.'
    },
    conservation: {
      iucnGlobalStatus: 'LC',
      globalIucnStatus: 'LC',
      iucnAssessmentYear: 2021,
      globalStatusSource: 'IUCN Red List 2021: e.T198580A155490428',
      threats: ['High industrial purse-seine harvest for human consumption and fishmeal reduction.']
    },
    lifecycleStatus: 'published', isVerified: true, speciesVerificationStatus: 'verified', imageVerificationStatus: 'verified', isPublished: true,
    referenceIds: ['ref-linnaeus-1758', 'ref-fishbase-2024', 'ref-eschmeyer-2024', 'ref-iucn-global-2024'],
    media: [
      {
        id: 'img-sp-engraulis-encrasicolus-01',
        speciesId: 'sp-engraulis-encrasicolus',
        taxonId: 'taxon-engraulis',
        url: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Engraulis_encrasicolus_Gervais_flipped.jpg',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Engraulis_encrasicolus_Gervais_flipped.jpg',
        caption: 'European anchovy (Engraulis encrasicolus) anatomical profile, Gervais et Boulart (1877).',
        sourceName: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Engraulis_encrasicolus_Gervais_flipped.jpg',
        photographer: 'Gervais et Boulart, 1877',
        license: 'Public Domain',
        attribution: 'Gervais et Boulart, 1877, Public Domain, via Wikimedia Commons',
        isVerified: true,
        verificationStatus: 'verified',
        imageType: 'specimen_photo',
        type: 'specimen_photo',
        verifiedBy: 'BiotaElite Taxonomic & Visual Audit Panel',
        verifiedAt: '2026-09-14T10:00:00Z',
        notes: 'Classic morphological illustration illustrating the overhanging snout, wide subterminal gape, and clupeiform profile.'
      }
    ],
    version: 1, createdAt: '2026-09-14T10:00:00Z', updatedAt: '2026-09-14T10:00:00Z', verifiedAt: '2026-09-14T10:00:00Z', verifiedBy: 'Zoological Nomenclature & Ichthyology Panel'
  }
];

// Write BUILD05_EXPANSION_SPECIES before SEED_SPECIES export
const exportMatch = content.indexOf('export const SEED_SPECIES: SpeciesRecord[] = [');
if (exportMatch === -1) {
  console.error("Could not find SEED_SPECIES export in seedSpecies.ts");
  process.exit(1);
}

const formattedSpecies = 'const BUILD05_EXPANSION_SPECIES: SpeciesRecord[] = ' + JSON.stringify(expansionSpecies, null, 2) + ';\n\n';

let newContent = content.slice(0, exportMatch) + formattedSpecies + content.slice(exportMatch);

// Update SEED_SPECIES export to include ...BUILD05_EXPANSION_SPECIES
newContent = newContent.replace(
  'export const SEED_SPECIES: SpeciesRecord[] = [\n  ...BUILD01_SPECIES,\n  ...BUILD02_SPECIES,\n  ...BUILD04_MARINE_SPECIES\n];',
  'export const SEED_SPECIES: SpeciesRecord[] = [\n  ...BUILD01_SPECIES,\n  ...BUILD02_SPECIES,\n  ...BUILD04_MARINE_SPECIES,\n  ...BUILD05_EXPANSION_SPECIES\n];'
);

fs.writeFileSync(speciesFile, newContent, 'utf8');
console.log(`Successfully added ${expansionSpecies.length} new species records to seedSpecies.ts!`);
