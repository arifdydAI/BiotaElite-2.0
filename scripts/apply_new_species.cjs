const fs = require('fs');
const path = require('path');
const ts = require('typescript');

function loadTs(relPath) {
  const fullPath = path.resolve(__dirname, relPath);
  let code = fs.readFileSync(fullPath, 'utf8');
  const js = ts.transpileModule(code, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 }
  }).outputText;
  const m = { exports: {} };
  const customRequire = (reqPath) => require(reqPath);
  const fn = new Function('module', 'exports', 'require', '__dirname', '__filename', js);
  fn(m, m.exports, customRequire, path.dirname(fullPath), fullPath);
  return m.exports;
}

const speciesFile = path.resolve(__dirname, '../src/data/seedSpecies.ts');
const { SEED_SPECIES } = loadTs(speciesFile);
console.log('Current canonical species count:', SEED_SPECIES.length);

const newSpecies = [
  {
    id: "sp-penaeus-monodon",
    scientificName: "Penaeus monodon",
    scientificNameAuthorship: "Fabricius, 1798",
    taxonomicStatus: "accepted",
    module: "marine",
    taxonId: "taxon-penaeus",
    synonyms: [
      {
        name: "Cancer monodon",
        authorYear: "Fabricius, 1798",
        status: "basionym",
        isBasionym: true
      },
      {
        name: "Penaeus (Penaeus) monodon",
        authorYear: "Fabricius, 1798",
        status: "subgeneric combination"
      }
    ],
    commonNames: {
      en: [
        "Giant tiger prawn",
        "Asian tiger shrimp",
        "Black tiger shrimp"
      ],
      bn: [
        "বাগদা চিংড়ি",
        "টাইগার চিংড়ি"
      ]
    },
    taxonomy: {
      kingdom: "Animalia",
      phylum: "Arthropoda",
      class: "Malacostraca",
      order: "Decapoda",
      family: "Penaeidae",
      genus: "Penaeus",
      species: "Penaeus monodon"
    },
    morphology: {
      diagnosticFeatures: [
        "Prominent epigastric tooth and 7 to 8 dorsal and 3 to 4 ventral teeth on a robust, sigmoidal rostrum extending beyond the antennular peduncle.",
        "Adrostral sulcus and carina extending behind the epigastric tooth; postrostral carina lacking a median longitudinal groove.",
        "Hepatic carina nearly straight and horizontally oriented; gastrofrontal carina completely absent.",
        "Fifth pereiopod (walking leg) completely lacking an exopodite, distinguishing it from Penaeus semisulcatus.",
        "Distinct dark brown, grey, or black transverse bands across both carapace and abdominal pleura."
      ],
      description: "Penaeus monodon is the largest commercial penaeid shrimp in the Indo-Pacific, growing up to 33 cm. Highly valued capture and aquaculture crustacean.",
      maxStandardLengthCm: 33,
      coloration: "Steel blue to greenish-grey with dark brown or black transverse bands on abdominal segments; pleopods yellowish-red."
    },
    habitat: {
      systems: [
        "marine",
        "brackish"
      ],
      zones: [
        "coastal mangrove estuaries",
        "shallow shelf bays",
        "turbid delta waters"
      ],
      depthRangeMeters: {
        min: 0,
        max: 110
      }
    },
    bangladeshOccurrence: {
      present: true,
      regions: [
        "Sundarbans",
        "Cox's Bazar",
        "Satkhira",
        "Khulna",
        "Bagerhat",
        "Bay of Bengal"
      ],
      habitatTypes: [
        "mangrove estuary",
        "brackish aquaculture gher",
        "coastal marine waters"
      ],
      residencyStatus: "resident",
      residency: "resident",
      notes: "Premier export aquaculture and capture crustacean in Bangladesh. Known locally as Bagda Chingri, heavily farmed in southwestern coastal ghers."
    },
    ecology: {
      dietCategory: "omnivore",
      dietSummary: "Opportunistic benthic feeder consuming small polychaete worms, bivalves, small crustaceans, and plant detritus.",
      behavior: "Nocturnal benthic forager; burrows into sand and mud substrates during daylight hours to avoid predation.",
      reproduction: "Spawns in offshore marine waters; postlarvae migrate into estuarine mangrove nursery areas like the Sundarbans.",
      ecologicalRole: "Key benthic macroinvertebrate consumer and prey item for estuarine and marine fishes and wading birds."
    },
    conservation: {
      iucnGlobalStatus: "LC",
      globalAssessmentYear: 2024,
      globalStatusSource: "IUCN Red List / FAO Species Catalogue",
      threats: [
        "Overexploitation of wild broodstock",
        "Habitat degradation in mangrove coastal nurseries",
        "Viral pathogens (WSSV)"
      ],
      nationalStatus: "LC",
      nationalStatusSource: "IUCN Bangladesh 2015"
    },
    lifecycleStatus: "published",
    isVerified: true,
    speciesVerificationStatus: "verified",
    imageVerificationStatus: "verified",
    isPublished: true,
    referenceIds: [
      "ref-worms-2024",
      "ref-ruppert-2004"
    ],
    media: [
      {
        id: "img-sp-penaeus-monodon-01",
        speciesId: "sp-penaeus-monodon",
        taxonId: "taxon-penaeus",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/98/Penaeus_monodon.jpg",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/98/Penaeus_monodon.jpg",
        caption: "Giant tiger prawn (Penaeus monodon) displaying banded carapace, long antennae, and distinct rostrum.",
        sourceName: "Wikimedia Commons",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Penaeus_monodon.jpg",
        photographer: "User:Self (Wikimedia Commons)",
        license: "CC-BY-SA",
        attribution: "CC BY-SA 3.0 via Wikimedia Commons",
        isVerified: true,
        verificationStatus: "verified",
        imageType: "specimen_photo",
        type: "specimen_photo",
        verifiedBy: "Taxonomic Audit Panel",
        verifiedAt: "2026-09-17T10:00:00Z",
        notes: "Voucher photograph of adult Penaeus monodon specimen showing rostral teeth and abdominal coloration."
      }
    ],
    provenance: {
      taxonomicStatus: "WoRMS AphiaID 107038 / FAO Species Identification Sheet",
      distribution: "Indo-West Pacific: East Africa and Arabian Gulf through South Asia to Japan and Australia; widely cultivated",
      morphology: "Fischer & Bianchi (1984) FAO Marine Resources Identification Guide"
    },
    version: 1,
    createdAt: "2026-09-17T10:00:00Z",
    updatedAt: "2026-09-17T10:00:00Z",
    speciesPriority: "common_educational"
  },
  {
    id: "sp-duttaphrynus-melanostictus",
    scientificName: "Duttaphrynus melanostictus",
    scientificNameAuthorship: "(Schneider, 1799)",
    taxonomicStatus: "accepted",
    module: "general",
    taxonId: "taxon-duttaphrynus",
    synonyms: [
      {
        name: "Bufo melanostictus",
        authorYear: "Schneider, 1799",
        status: "basionym",
        isBasionym: true
      }
    ],
    commonNames: {
      en: [
        "Asian common toad",
        "Black-spined toad",
        "Indian toad"
      ],
      bn: [
        "কুনোব্যাঙ",
        "সাধারণ কুনোব্যাঙ",
        "কালো-কাঁটাযুক্ত কুনোব্যাঙ"
      ]
    },
    taxonomy: {
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Amphibia",
      order: "Anura",
      family: "Bufonidae",
      genus: "Duttaphrynus",
      species: "Duttaphrynus melanostictus"
    },
    morphology: {
      diagnosticFeatures: [
        "Distinct elevated cranial ridges (canthal, preorbital, supraorbital, and postorbital) heavily lined with black cornified keratinous spinules.",
        "Prominent kidney-shaped (reniform) or elliptical parotoid glands situated immediately posterior to postorbital ridges, secreting milky bufotoxin when harassed.",
        "Dorsal skin heavily tuberculated with prominent warts, each crowned with a sharp black keratinized spine.",
        "First finger longer than or subequal to second finger; toes partially webbed with simple subarticular tubercles.",
        "Tympanum distinct, circular to elliptical, at least two-thirds the diameter of the horizontal eye opening."
      ],
      description: "Duttaphrynus melanostictus is the commonest terrestrial amphibian in South Asia. Heavily warty toad with black cranial ridges and prominent parotoid glands.",
      maxStandardLengthCm: 15,
      coloration: "Brownish-grey, clay yellow, or reddish-brown dorsum with darker markings; spines on tubercles dark brown to jet black."
    },
    habitat: {
      systems: [
        "terrestrial",
        "freshwater"
      ],
      zones: [
        "lowland agricultural plains",
        "homestead gardens",
        "urban parks",
        "riparian zones"
      ],
      elevationRangeMeters: {
        min: 0,
        max: 1800
      }
    },
    bangladeshOccurrence: {
      present: true,
      regions: [
        "Dhaka",
        "Chittagong",
        "Sylhet",
        "Rajshahi",
        "Khulna",
        "Barisal",
        "Rangpur",
        "Mymensingh"
      ],
      habitatTypes: [
        "urban gardens",
        "rural villages",
        "agricultural fields",
        "ditch banks"
      ],
      residencyStatus: "resident",
      residency: "resident",
      notes: "The most ubiquitous and widely observed amphibian across all districts and ecological zones of mainland Bangladesh."
    },
    ecology: {
      dietCategory: "carnivore",
      dietSummary: "Generalist terrestrial insectivore consuming large quantities of agricultural pests including beetles, termites, ants, crickets, and lepidopteran larvae.",
      behavior: "Nocturnal terrestrial predator; seeks damp diurnal shelter beneath logs, building bricks, concrete slabs, and decaying leaf litter.",
      reproduction: "Breeds in stagnant pools, ponds, and slow drains during the monsoon season; lays long gelatinous strings of pigmented black eggs.",
      ecologicalRole: "Keystone nocturnal biological pest controller across South Asian agricultural and domestic agroecosystems."
    },
    conservation: {
      iucnGlobalStatus: "LC",
      globalAssessmentYear: 2024,
      globalStatusSource: "IUCN Red List of Threatened Species 2024",
      threats: [
        "Road mortality",
        "Agrochemical runoff",
        "Urban pollution of breeding ditches"
      ],
      nationalStatus: "LC",
      nationalStatusSource: "IUCN Bangladesh 2015"
    },
    lifecycleStatus: "published",
    isVerified: true,
    speciesVerificationStatus: "verified",
    imageVerificationStatus: "verified",
    isPublished: true,
    referenceIds: [
      "ref-amphibiaweb-2026",
      "ref-iucn-bd-2015"
    ],
    media: [
      {
        id: "img-sp-duttaphrynus-melanostictus-01",
        speciesId: "sp-duttaphrynus-melanostictus",
        taxonId: "taxon-duttaphrynus",
        url: "https://upload.wikimedia.org/wikipedia/commons/d/db/Duttaphrynus_Melanostictus_2.jpg",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/db/Duttaphrynus_Melanostictus_2.jpg",
        caption: "Asian common toad (Duttaphrynus melanostictus) photographed in Bangladesh, exhibiting prominent black-cornified cranial ridges and warty tuberculated skin.",
        sourceName: "Wikimedia Commons",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Duttaphrynus_Melanostictus_2.jpg",
        photographer: "Muhammad Yahya",
        license: "CC-BY-SA",
        attribution: "Muhammad Yahya, CC BY-SA 4.0 via Wikimedia Commons",
        isVerified: true,
        verificationStatus: "verified",
        imageType: "specimen_photo",
        type: "specimen_photo",
        verifiedBy: "Taxonomic Audit Panel",
        verifiedAt: "2026-09-17T10:00:00Z",
        notes: "Voucher photograph of adult wild toad in Bangladesh displaying distinctive black cranial ridges, parotoid glands, and warty dorsum."
      }
    ],
    provenance: {
      taxonomicStatus: "Amphibian Species of the World 6.2 (Frost, 2024) / AmphibiaWeb 2026",
      distribution: "South Asia (Pakistan, India, Bangladesh, Sri Lanka, Nepal) eastwards to southern China and Southeast Asia",
      morphology: "Boulenger (1890) Fauna of British India: Reptilia and Batrachia; IUCN Bangladesh (2015)"
    },
    version: 1,
    createdAt: "2026-09-17T10:00:00Z",
    updatedAt: "2026-09-17T10:00:00Z",
    speciesPriority: "common_educational"
  }
];

const existingIds = new Set(SEED_SPECIES.map(s => s.id));
const toAdd = newSpecies.filter(s => !existingIds.has(s.id));

// Also verify Beroe ovata synonyms
const beroe = SEED_SPECIES.find(s => s.id === 'sp-beroe-ovata');
if (beroe && (!beroe.synonyms || beroe.synonyms.length === 0)) {
  beroe.synonyms = [
    {
      name: "Beroe ovatus",
      authorYear: "Bruguière, 1789",
      status: "unaccepted spelling variant"
    }
  ];
  console.log('Added unaccepted synonym Beroe ovatus to sp-beroe-ovata');
}

if (toAdd.length === 0) {
  console.log('All new species already present in seedSpecies.ts!');
} else {
  console.log(`Adding ${toAdd.length} new canonical species...`);
  const updatedSpecies = [...SEED_SPECIES, ...toAdd];
  
  const header = `import type { SpeciesRecord } from '../types/biodiversity';\n\nexport const SEED_SPECIES: SpeciesRecord[] = `;
  fs.writeFileSync(speciesFile, header + JSON.stringify(updatedSpecies, null, 2) + ';\n', 'utf8');
  console.log('Successfully updated seedSpecies.ts! New species count:', updatedSpecies.length);
}
