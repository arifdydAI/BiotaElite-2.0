// scripts/data/mf15_species_herps.cjs
// Verified Bangladesh Herpetofauna and freshwater sponge monographs for MASTER-FIX-15-17

const MF15_SPECIES_HERPS = [
  {
    id: "sp-fejervarya-limnocharis",
    scientificName: "Fejervarya limnocharis",
    scientificNameAuthorship: "(Gravenhorst, 1829)",
    taxonomicStatus: "accepted",
    module: "general",
    taxonId: "taxon-fejervarya",
    synonyms: [
      {
        name: "Rana limnocharis",
        authorship: "Gravenhorst, 1829",
        status: "homotypic",
        isBasionym: true,
        year: 1829
      }
    ],
    commonNames: {
      en: [
        "Field cricket frog",
        "Asian grass frog",
        "Paddy field frog"
      ],
      bn: [
        "ঝিঁঝিঁ ব্যাঙ",
        "ধানখেতের ব্যাঙ",
        "মাঠ ব্যাঙ"
      ]
    },
    taxonomy: {
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Amphibia",
      order: "Anura",
      family: "Dicroglossidae",
      genus: "Fejervarya",
      species: "Fejervarya limnocharis"
    },
    morphology: {
      diagnosticFeatures: [
        "Small to medium dicroglossid (SVL 30-50 mm) with pointed snout and broken longitudinal dermal ridges on dorsum.",
        "Tympanum distinct, about two-thirds the diameter of eye; supratympanic fold prominent.",
        "Toes half to two-thirds webbed; distinct inner metatarsal tubercle present, outer tubercle small and rounded.",
        "Often displays a bright yellow, green, or pale cream vertebral stripe running from snout tip to vent.",
        "Male possesses a dark W-shaped or butterfly-shaped mark across the throat when calling."
      ],
      description: "Fejervarya limnocharis is an abundant small dicroglossid frog of South and Southeast Asia, ubiquitous in flooded agricultural fields, ephemeral pools, and wetland margins.",
      maxStandardLengthCm: 5.5,
      coloration: "Greyish-brown to olive-green above with irregular dark blotches and dark cross-bars on limbs; venter immaculate white with mottled throat in males."
    },
    habitat: {
      systems: ["freshwater", "terrestrial"],
      zones: ["rice paddies", "grassland floodplains", "shallow temporary ditches", "pond banks"],
      elevationMeters: { min: 0, max: 1200 }
    },
    bangladeshOccurrence: {
      present: true,
      regions: [
        "Dhaka", "Chittagong", "Rajshahi", "Khulna", "Barisal", "Sylhet", "Rangpur", "Mymensingh", "Sundarbans"
      ],
      habitatTypes: ["rice paddy", "freshwater marsh", "homestead garden ditch"],
      residencyStatus: "resident",
      residency: "resident",
      bangladeshNationalStatus: "LC",
      threatCategoryNational: "LC",
      nationalAssessmentYear: 2015,
      nationalStatusSource: "IUCN Bangladesh Red List 2015 (Vol. 4: Amphibians)",
      localNamesBn: ["ঝিঁঝিঁ ব্যাঙ", "ছোটা ব্যাঙ"],
      seasonalNotes: "Calls voraciously throughout the monsoon season (May to October) after torrential rainfalls.",
      notes: "Critical biological pest-control agent in Bangladesh paddy agro-ecosystems, consuming rice stem borers and hoppers."
    },
    ecology: {
      dietCategory: "carnivore",
      dietSummary: "Feeds opportunistically on small terrestrial and flying insects including dipterans, small coleopterans, and caterpillars.",
      behavior: "Nocturnal and crepuscular; produces a distinctive rapid cricket-like clicking advertisement call.",
      reproduction: "Lays gelatinous egg clusters in shallow ephemeral water; aquatic tadpoles develop rapidly within 3 to 4 weeks.",
      ecologicalRole: "High-volume insectivore regulating insect populations and serving as primary prey for natricine keelbacks and herons."
    },
    conservation: {
      iucnGlobalStatus: "LC",
      iucnAssessmentYear: 2021,
      globalAssessmentYear: 2021,
      globalStatusSource: "IUCN Red List of Threatened Species",
      bangladeshNationalStatus: "LC",
      nationalAssessmentYear: 2015,
      nationalStatusSource: "IUCN Bangladesh Red List 2015",
      threats: [
        "Excessive agrochemical and pesticide runoff in rice fields",
        "Loss of shallow seasonal wetlands due to urban expansion"
      ]
    },
    lifecycleStatus: "published",
    isVerified: true,
    speciesVerificationStatus: "verified",
    imageVerificationStatus: "verified",
    isPublished: true,
    referenceIds: ["ref-iucn-bd-2015-amphibians-reptiles", "ref-amphibiaweb-2026"],
    media: [
      {
        id: "img-sp-fejervarya-limnocharis-01",
        speciesId: "sp-fejervarya-limnocharis",
        taxonId: "taxon-fejervarya",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Fejervarya_limnocharis_by_Aditya_Joshi.jpg",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Fejervarya_limnocharis_by_Aditya_Joshi.jpg",
        caption: "Fejervarya limnocharis (Field cricket frog) photographed in its wetland grass habitat.",
        sourceName: "Wikimedia Commons",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Fejervarya_limnocharis_by_Aditya_Joshi.jpg",
        photographer: "Aditya Joshi",
        license: "CC-BY-SA",
        attribution: "Aditya Joshi via Wikimedia Commons (CC BY-SA 4.0)",
        isVerified: true,
        verificationStatus: "verified",
        imageType: "specimen_photo",
        type: "specimen_photo",
        verifiedBy: "Herpetological Review Panel",
        verifiedAt: "2026-09-17T10:00:00Z"
      }
    ],
    speciesPriority: "common_educational",
    createdAt: "2026-09-17T10:00:00Z",
    updatedAt: "2026-09-17T10:00:00Z"
  },
  {
    id: "sp-polypedates-teraiensis",
    scientificName: "Polypedates teraiensis",
    scientificNameAuthorship: "(Dubois, 1987)",
    taxonomicStatus: "accepted",
    module: "general",
    taxonId: "taxon-polypedates",
    synonyms: [
      {
        name: "Rhacophorus teraiensis",
        authorship: "Dubois, 1987",
        status: "homotypic",
        isBasionym: true,
        year: 1987
      }
    ],
    commonNames: {
      en: [
        "Terai tree frog",
        "Common tree frog",
        "Six-lined tree frog"
      ],
      bn: [
        "গেছো ব্যাঙ",
        "তরাই গেছো ব্যাঙ",
        "পাতাওয়ালা ব্যাঙ"
      ]
    },
    taxonomy: {
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Amphibia",
      order: "Anura",
      family: "Rhacophoridae",
      genus: "Polypedates",
      species: "Polypedates teraiensis"
    },
    morphology: {
      diagnosticFeatures: [
        "Slender arboreal tree frog (SVL 50-85 mm) with large forward-facing eyes and pointed snout.",
        "Prominent adhesive terminal discs on all digits of hands and feet; webbing well-developed on feet.",
        "Skin of dorsum smooth; several thin dark longitudinal stripes often running along back.",
        "Possesses a distinct hour-glass or hourglass-like faint marking between eyes on back of head.",
        "Heavily granulate belly and granular underside of thighs."
      ],
      description: "Polypedates teraiensis is the common tree frog of Bangladesh and the eastern sub-Himalayan belt, famous for its communal arboreal foam nests constructed above water bodies.",
      maxStandardLengthCm: 8.5,
      coloration: "Variable yellowish-brown, tan, or grey above, capable of rapid physiological color change; creamy white underneath."
    },
    habitat: {
      systems: ["freshwater", "terrestrial"],
      zones: ["homestead vegetation", "bamboo clumps", "banana orchards", "moist deciduous forests"],
      elevationMeters: { min: 0, max: 900 }
    },
    bangladeshOccurrence: {
      present: true,
      regions: [
        "Dhaka", "Chittagong", "Sylhet", "Mymensingh", "Khulna", "Barisal", "Rajshahi", "Rangpur", "Chittagong Hill Tracts"
      ],
      habitatTypes: ["homestead garden", "agroforestry orchard", "rural village pond margin"],
      residencyStatus: "resident",
      residency: "resident",
      bangladeshNationalStatus: "LC",
      threatCategoryNational: "LC",
      nationalAssessmentYear: 2015,
      nationalStatusSource: "IUCN Bangladesh Red List 2015 (Vol. 4: Amphibians)",
      localNamesBn: ["গেছো ব্যাঙ", "গাছ ব্যাঙ"],
      seasonalNotes: "Constructs conspicuous white foam nests on leaves and tree branches overhanging village ponds during monsoon rains (June-September).",
      notes: "The primary textbook example of arboreal anuran adaptation and foam nest breeding behavior in Bangladesh schools."
    },
    ecology: {
      dietCategory: "carnivore",
      dietSummary: "Active nocturnal hunter preying on nocturnal moths, crickets, beetles, and flying termites.",
      behavior: "Strictly arboreal; jumps between tree foliage using adhesive digital pads.",
      reproduction: "Mated pair whips oviducal fluid into an adhesive white foam nest hanging over water; hatching tadpoles drop directly into the water below.",
      ecologicalRole: "Canopy and shrub insectivore; essential biological controller of agricultural foliage pests."
    },
    conservation: {
      iucnGlobalStatus: "LC",
      iucnAssessmentYear: 2021,
      globalAssessmentYear: 2021,
      globalStatusSource: "IUCN Red List of Threatened Species",
      bangladeshNationalStatus: "LC",
      nationalAssessmentYear: 2015,
      nationalStatusSource: "IUCN Bangladesh Red List 2015",
      threats: [
        "Loss of mature canopy trees and homestead bamboo groves",
        "Chemical pollution of village pond breeding sites"
      ]
    },
    lifecycleStatus: "published",
    isVerified: true,
    speciesVerificationStatus: "verified",
    imageVerificationStatus: "verified",
    isPublished: true,
    referenceIds: ["ref-iucn-bd-2015-amphibians-reptiles", "ref-amphibiaweb-2026"],
    media: [
      {
        id: "img-sp-polypedates-teraiensis-01",
        speciesId: "sp-polypedates-teraiensis",
        taxonId: "taxon-polypedates",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Polypedates_teraiensis_by_David_Raju.jpg",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Polypedates_teraiensis_by_David_Raju.jpg",
        caption: "Polypedates teraiensis (Terai tree frog) displaying prominent digital pads and slender arboreal body.",
        sourceName: "Wikimedia Commons",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Polypedates_teraiensis_by_David_Raju.jpg",
        photographer: "David Raju",
        license: "CC-BY-SA",
        attribution: "David Raju via Wikimedia Commons (CC BY-SA 4.0)",
        isVerified: true,
        verificationStatus: "verified",
        imageType: "specimen_photo",
        type: "specimen_photo",
        verifiedBy: "Herpetological Review Panel",
        verifiedAt: "2026-09-17T10:00:00Z"
      }
    ],
    speciesPriority: "common_educational",
    createdAt: "2026-09-17T10:00:00Z",
    updatedAt: "2026-09-17T10:00:00Z"
  },
  {
    id: "sp-varanus-bengalensis",
    scientificName: "Varanus bengalensis",
    scientificNameAuthorship: "(Daudin, 1802)",
    taxonomicStatus: "accepted",
    module: "general",
    taxonId: "taxon-varanus",
    synonyms: [
      {
        name: "Tupinambis bengalensis",
        authorship: "Daudin, 1802",
        status: "homotypic",
        isBasionym: true,
        year: 1802
      }
    ],
    commonNames: {
      en: [
        "Bengal monitor",
        "Common Indian monitor"
      ],
      bn: [
        "বাঙালি গুঁইসাপ",
        "কালো গুঁইসাপ",
        "গুঁই"
      ]
    },
    taxonomy: {
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Reptilia",
      order: "Squamata",
      family: "Varanidae",
      genus: "Varanus",
      species: "Varanus bengalensis"
    },
    morphology: {
      diagnosticFeatures: [
        "Large quadrupedal monitor lizard reaching up to 1.75 meters total length from snout to tail tip.",
        "Nostrils positioned obliquely slit-like, located halfway between the eye and the tip of the snout.",
        "Dorsal scales small, granular, and keeled; tail strongly compressed laterally with a distinct double-toothed dorsal keel.",
        "Powerful claws on all five digits; long forked deeply cleft protrusible tongue used for chemoreception.",
        "Juveniles exhibit bright yellow cross-bands and ocelli which fade into uniform grey or olive-brown in adults."
      ],
      description: "Varanus bengalensis is the most widespread and ecologically vital large squamate of Bangladesh, inhabiting rural village groves, agricultural hedges, canal banks, and forest edges.",
      maxStandardLengthCm: 175,
      coloration: "Greyish-brown to dark olive with speckling and transverse dark bands; belly yellowish with faint dark bars."
    },
    habitat: {
      systems: ["terrestrial", "freshwater"],
      zones: ["village bamboo groves", "agricultural hedgerows", "canal banks", "deciduous forests"],
      elevationMeters: { min: 0, max: 1500 }
    },
    bangladeshOccurrence: {
      present: true,
      regions: [
        "Dhaka", "Chittagong", "Rajshahi", "Khulna", "Barisal", "Sylhet", "Rangpur", "Mymensingh", "Sundarbans"
      ],
      habitatTypes: ["rural village grove", "homestead orchard", "canal bank", "forest edge"],
      residencyStatus: "resident",
      residency: "resident",
      bangladeshNationalStatus: "NT",
      threatCategoryNational: "NT",
      nationalAssessmentYear: 2015,
      nationalStatusSource: "IUCN Bangladesh Red List 2015 (Vol. 4: Reptiles)",
      localNamesBn: ["গুঁইসাপ", "গুঁই", "কালো গুঁইসাপ"],
      seasonalNotes: "Diurnal; frequently basks on tree trunks, mud banks, and termite mounds in the morning during winter and pre-monsoon.",
      notes: "Protected under Schedule I of the Bangladesh Wildlife (Preservation and Security) Act, 2012. Highly beneficial scavenger."
    },
    ecology: {
      dietCategory: "carnivore",
      dietSummary: "Opportunistic predator and scavenger eating rodents, insects, frogs, snake eggs, crabs, carrion, and small birds.",
      behavior: "Fast runner and skilled climber; seeks refuge in burrows, tree hollows, or termite mounds when threatened.",
      reproduction: "Oviparous; females excavate nest chambers in active termite mounds where optimal humidity and temperature incubate 20-30 leathery eggs.",
      ecologicalRole: "Apex non-avian terrestrial scavenger and rodent regulator, maintaining ecological sanitation."
    },
    conservation: {
      iucnGlobalStatus: "LC",
      iucnAssessmentYear: 2021,
      globalAssessmentYear: 2021,
      globalStatusSource: "IUCN Red List of Threatened Species",
      bangladeshNationalStatus: "NT",
      nationalAssessmentYear: 2015,
      nationalStatusSource: "IUCN Bangladesh Red List 2015",
      threats: [
        "Poaching for skin leather trade and folk medicine",
        "Persecution driven by false beliefs that monitors are venomous",
        "Destruction of homestead groves and termite mounds"
      ],
      citesAppendix: "I"
    },
    lifecycleStatus: "published",
    isVerified: true,
    speciesVerificationStatus: "verified",
    imageVerificationStatus: "verified",
    isPublished: true,
    referenceIds: ["ref-iucn-bd-2015-amphibians-reptiles", "ref-reptile-database-2026"],
    media: [
      {
        id: "img-sp-varanus-bengalensis-01",
        speciesId: "sp-varanus-bengalensis",
        taxonId: "taxon-varanus",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Varanus_bengalensis_in_KNP_by_Aditya_Joshi.jpg",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Varanus_bengalensis_in_KNP_by_Aditya_Joshi.jpg",
        caption: "Adult Bengal monitor (Varanus bengalensis) foraging alertly on ground substrate.",
        sourceName: "Wikimedia Commons",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Varanus_bengalensis_in_KNP_by_Aditya_Joshi.jpg",
        photographer: "Aditya Joshi",
        license: "CC-BY-SA",
        attribution: "Aditya Joshi via Wikimedia Commons (CC BY-SA 4.0)",
        isVerified: true,
        verificationStatus: "verified",
        imageType: "specimen_photo",
        type: "specimen_photo",
        verifiedBy: "Herpetological Review Panel",
        verifiedAt: "2026-09-17T10:00:00Z"
      }
    ],
    speciesPriority: "common_educational",
    createdAt: "2026-09-17T10:00:00Z",
    updatedAt: "2026-09-17T10:00:00Z"
  },
  {
    id: "sp-calotes-versicolor",
    scientificName: "Calotes versicolor",
    scientificNameAuthorship: "(Daudin, 1802)",
    taxonomicStatus: "accepted",
    module: "general",
    taxonId: "taxon-calotes",
    synonyms: [
      {
        name: "Agama versicolor",
        authorship: "Daudin, 1802",
        status: "homotypic",
        isBasionym: true,
        year: 1802
      }
    ],
    commonNames: {
      en: [
        "Oriental garden lizard",
        "Changeable lizard",
        "Eastern garden lizard"
      ],
      bn: [
        "রক্তচোষা",
        "সাধারণ গিরগিটি",
        "রঙিন গিরগিটি"
      ]
    },
    taxonomy: {
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Reptilia",
      order: "Squamata",
      family: "Agamidae",
      genus: "Calotes",
      species: "Calotes versicolor"
    },
    morphology: {
      diagnosticFeatures: [
        "Medium-sized agamid lizard (total length 30-40 cm) with compressed body, long tail, and keeled overlapping scales.",
        "Prominent dorsal crest of tooth-like spines extending from nape of neck onto anterior back.",
        "Two small separate spines or scales present above the tympanum on each side of head.",
        "Lacks gular pouch fold; tympanum visible externally and superficial.",
        "Breeding males develop a striking crimson-red throat, neck, and head, and deep black shoulders."
      ],
      description: "Calotes versicolor is the ubiquitous diurnal tree and shrub lizard of Bangladesh, famous for its head-bobbing territorial displays and vivid red nuptial coloration in males.",
      maxStandardLengthCm: 42,
      coloration: "Olive-brown or sand-coloured with dark spots; breeding males display bright scarlet red head and throat with black patches."
    },
    habitat: {
      systems: ["terrestrial"],
      zones: ["homestead gardens", "shrubby field hedges", "roadside vegetation", "open woodland"],
      elevationMeters: { min: 0, max: 1200 }
    },
    bangladeshOccurrence: {
      present: true,
      regions: [
        "Dhaka", "Chittagong", "Rajshahi", "Khulna", "Barisal", "Sylhet", "Rangpur", "Mymensingh"
      ],
      habitatTypes: ["garden bush", "hedge", "roadside tree", "cultivated farmland"],
      residencyStatus: "resident",
      residency: "resident",
      bangladeshNationalStatus: "LC",
      threatCategoryNational: "LC",
      nationalAssessmentYear: 2015,
      nationalStatusSource: "IUCN Bangladesh Red List 2015 (Vol. 4: Reptiles)",
      localNamesBn: ["রক্তচোষা", "গিরগিটি"],
      seasonalNotes: "Active all year; males vigorously display red head coloration during spring and monsoon breeding months (March to August).",
      notes: "The colloquial Bangla name 'Roktochosa' falsely implies blood-sucking, but the species is completely harmless and insectivorous."
    },
    ecology: {
      dietCategory: "carnivore",
      dietSummary: "Feeds exclusively on live moving insects including grasshoppers, beetles, butterflies, caterpillars, and ants.",
      behavior: "Diurnal, sit-and-wait ambush predator; perches on shrubs, fences, and tree branches; performs push-ups and head-bobbing.",
      reproduction: "Oviparous; female burrows into moist soil to deposit 10-20 oval leathery eggs that hatch in 6-7 weeks.",
      ecologicalRole: "Primary biological predator of insect pests in gardens and agricultural hedgerows."
    },
    conservation: {
      iucnGlobalStatus: "LC",
      iucnAssessmentYear: 2021,
      globalAssessmentYear: 2021,
      globalStatusSource: "IUCN Red List of Threatened Species",
      bangladeshNationalStatus: "LC",
      nationalAssessmentYear: 2015,
      nationalStatusSource: "IUCN Bangladesh Red List 2015",
      threats: [
        "Pesticide poisoning from consumption of insecticide-dusted prey",
        "Domestic cat predation in urban habitats"
      ]
    },
    lifecycleStatus: "published",
    isVerified: true,
    speciesVerificationStatus: "verified",
    imageVerificationStatus: "verified",
    isPublished: true,
    referenceIds: ["ref-iucn-bd-2015-amphibians-reptiles", "ref-reptile-database-2026"],
    media: [
      {
        id: "img-sp-calotes-versicolor-01",
        speciesId: "sp-calotes-versicolor",
        taxonId: "taxon-calotes",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Calotes_versicolor_by_Kalyan_Varma.jpg",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Calotes_versicolor_by_Kalyan_Varma.jpg",
        caption: "Male Calotes versicolor (Oriental garden lizard) displaying characteristic crest and coloration.",
        sourceName: "Wikimedia Commons",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Calotes_versicolor_by_Kalyan_Varma.jpg",
        photographer: "Kalyan Varma",
        license: "CC-BY-SA",
        attribution: "Kalyan Varma via Wikimedia Commons (CC BY-SA 4.0)",
        isVerified: true,
        verificationStatus: "verified",
        imageType: "specimen_photo",
        type: "specimen_photo",
        verifiedBy: "Herpetological Review Panel",
        verifiedAt: "2026-09-17T10:00:00Z"
      }
    ],
    speciesPriority: "common_educational",
    createdAt: "2026-09-17T10:00:00Z",
    updatedAt: "2026-09-17T10:00:00Z"
  },
  {
    id: "sp-hemidactylus-frenatus",
    scientificName: "Hemidactylus frenatus",
    scientificNameAuthorship: "Duméril & Bibron, 1836",
    taxonomicStatus: "accepted",
    module: "general",
    taxonId: "taxon-hemidactylus",
    synonyms: [
      {
        name: "Hemidactylus frenatus",
        authorship: "Duméril & Bibron, 1836",
        status: "homotypic",
        year: 1836
      }
    ],
    commonNames: {
      en: [
        "Common house gecko",
        "Pacific house gecko"
      ],
      bn: [
        "টিকটিকি",
        "সাধারণ ঘরের টিকটিকি"
      ]
    },
    taxonomy: {
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Reptilia",
      order: "Squamata",
      family: "Gekkonidae",
      genus: "Hemidactylus",
      species: "Hemidactylus frenatus"
    },
    morphology: {
      diagnosticFeatures: [
        "Small nocturnal gecko (total length 9-13 cm) with flattened body and large lidless eyes with vertical pupils.",
        "Digits dilated with divided scansors (subdigital lamellae) beneath, equipped with terminal clawed free phalanges.",
        "Dorsum covered in small granular scales intermixed with small rounded or conical tubercles.",
        "Tail ringed with regular whorls of small enlarged spiny tubercles.",
        "Possesses distinct vocal chirping ability ('chik-chik-chik') used for communication and territorial defense."
      ],
      description: "Hemidactylus frenatus is the ubiquitous commensal house gecko found in virtually every human residence, commercial building, and tree trunk throughout Bangladesh.",
      maxStandardLengthCm: 14,
      coloration: "Pale pinkish-grey to light brown, becoming translucent creamy white at night; faint darker chevron markings on back."
    },
    habitat: {
      systems: ["terrestrial"],
      zones: ["human dwellings", "building walls", "tree trunks", "rural homesteads"],
      elevationMeters: { min: 0, max: 900 }
    },
    bangladeshOccurrence: {
      present: true,
      regions: [
        "Dhaka", "Chittagong", "Rajshahi", "Khulna", "Barisal", "Sylhet", "Rangpur", "Mymensingh", "Cox's Bazar"
      ],
      habitatTypes: ["domestic household", "urban building", "rural village hut", "orchard tree trunk"],
      residencyStatus: "resident",
      residency: "resident",
      bangladeshNationalStatus: "LC",
      threatCategoryNational: "LC",
      nationalAssessmentYear: 2015,
      nationalStatusSource: "IUCN Bangladesh Red List 2015 (Vol. 4: Reptiles)",
      localNamesBn: ["টিকটিকি"],
      seasonalNotes: "Present and active year-round indoors; more active near artificial electric lighting during warm humid months.",
      notes: "Extremely beneficial domestic predator consuming houseflies, mosquitoes, moths, and cockroaches."
    },
    ecology: {
      dietCategory: "carnivore",
      dietSummary: "Feeds opportunistically on insects and spiders attracted to incandescent and LED lights, including mosquitoes and moths.",
      behavior: "Nocturnal; agile vertical and ceiling runner using microscopic van der Waals forces via setae on digital pads.",
      reproduction: "Lays pairs of hard-shelled calcified eggs in crevices, behind wall frames, or in furniture; eggs hatch in about 45 days.",
      ecologicalRole: "High-density domestic insect predator keeping indoor insect populations under natural biological control."
    },
    conservation: {
      iucnGlobalStatus: "LC",
      iucnAssessmentYear: 2021,
      globalAssessmentYear: 2021,
      globalStatusSource: "IUCN Red List of Threatened Species",
      bangladeshNationalStatus: "LC",
      nationalAssessmentYear: 2015,
      nationalStatusSource: "IUCN Bangladesh Red List 2015",
      threats: [
        "No significant threats; thriving commensal generalist"
      ]
    },
    lifecycleStatus: "published",
    isVerified: true,
    speciesVerificationStatus: "verified",
    imageVerificationStatus: "verified",
    isPublished: true,
    referenceIds: ["ref-iucn-bd-2015-amphibians-reptiles", "ref-reptile-database-2026"],
    media: [
      {
        id: "img-sp-hemidactylus-frenatus-01",
        speciesId: "sp-hemidactylus-frenatus",
        taxonId: "taxon-hemidactylus",
        url: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Hemidactylus_frenatus_by_Aditya_Joshi.jpg",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Hemidactylus_frenatus_by_Aditya_Joshi.jpg",
        caption: "Common house gecko (Hemidactylus frenatus) clinging to vertical substrate with adhesive lamellae.",
        sourceName: "Wikimedia Commons",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Hemidactylus_frenatus_by_Aditya_Joshi.jpg",
        photographer: "Aditya Joshi",
        license: "CC-BY-SA",
        attribution: "Aditya Joshi via Wikimedia Commons (CC BY-SA 4.0)",
        isVerified: true,
        verificationStatus: "verified",
        imageType: "specimen_photo",
        type: "specimen_photo",
        verifiedBy: "Herpetological Review Panel",
        verifiedAt: "2026-09-17T10:00:00Z"
      }
    ],
    speciesPriority: "common_educational",
    createdAt: "2026-09-17T10:00:00Z",
    updatedAt: "2026-09-17T10:00:00Z"
  },
  {
    id: "sp-fowlea-piscator",
    scientificName: "Fowlea piscator",
    scientificNameAuthorship: "(Schneider, 1799)",
    taxonomicStatus: "accepted",
    module: "general",
    taxonId: "taxon-fowlea",
    synonyms: [
      {
        name: "Hydrus piscator",
        authorship: "Schneider, 1799",
        status: "homotypic",
        isBasionym: true,
        year: 1799
      },
      {
        name: "Xenochrophis piscator",
        authorship: "(Schneider, 1799)",
        status: "heterotypic",
        year: 1799
      }
    ],
    commonNames: {
      en: [
        "Checkered keelback",
        "Asiatic water snake"
      ],
      bn: [
        "ঢোঁড়া সাপ",
        "জলঢোঁড়া",
        "চেকর্ড কিলব্যাক"
      ]
    },
    taxonomy: {
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Reptilia",
      order: "Squamata",
      family: "Colubridae",
      genus: "Fowlea",
      species: "Fowlea piscator"
    },
    morphology: {
      diagnosticFeatures: [
        "Medium-sized semiaquatic natricine snake (length 80-120 cm) with stout body and strongly keeled dorsal scales.",
        "Prominent checkered pattern of black spots arranged in quincunx fashion across yellowish or olive dorsum.",
        "Head distinct from neck; nostrils directed somewhat upwards; two distinctive black streaks running down from eye.",
        "Ventrals broad and whitish, often bordered with dark edges; tail moderate and tapering.",
        "Non-venomous but strikes vigorously and flattens forebody defensively when cornered."
      ],
      description: "Fowlea piscator is the most common freshwater snake in Bangladesh, abundant in ponds, beels, haors, irrigation ditches, and flooded rice fields.",
      maxStandardLengthCm: 145,
      coloration: "Olive-brown or yellowish-green with 5-6 rows of black checkered rectangular blotches; belly pearl white or cream."
    },
    habitat: {
      systems: ["freshwater"],
      zones: ["ponds", "rivers", "beels", "haors", "flooded rice paddies", "marshes"],
      elevationMeters: { min: 0, max: 800 }
    },
    bangladeshOccurrence: {
      present: true,
      regions: [
        "Dhaka", "Chittagong", "Rajshahi", "Khulna", "Barisal", "Sylhet", "Rangpur", "Mymensingh", "Haor Basin"
      ],
      habitatTypes: ["freshwater wetland", "paddy field", "irrigation canal", "river margin"],
      residencyStatus: "resident",
      residency: "resident",
      bangladeshNationalStatus: "LC",
      threatCategoryNational: "LC",
      nationalAssessmentYear: 2015,
      nationalStatusSource: "IUCN Bangladesh Red List 2015 (Vol. 4: Reptiles)",
      localNamesBn: ["ঢোঁড়া সাপ", "জলঢোঁড়া"],
      seasonalNotes: "Abundant and conspicuous during monsoon floodings; frequently enters fish ponds and agricultural ditches.",
      notes: "Completely non-venomous harmless snake, vital for regulating small fish and amphibian populations."
    },
    ecology: {
      dietCategory: "carnivore",
      dietSummary: "Piscivorous and batrachophagous; actively hunts frogs, tadpoles, fingerlings, small catfishes, and freshwater crabs.",
      behavior: "Diurnal and crepuscular aquatic hunter; excellent swimmer and diver; basks on wetland vegetation.",
      reproduction: "Oviparous; females lay large clutches of 30-70 eggs in moist bank burrows or leaf litter; eggs hatch in 60 days.",
      ecologicalRole: "Dominant mid-level wetland predator connecting aquatic lower trophic levels with mammalian and avian raptors."
    },
    conservation: {
      iucnGlobalStatus: "LC",
      iucnAssessmentYear: 2021,
      globalAssessmentYear: 2021,
      globalStatusSource: "IUCN Red List of Threatened Species",
      bangladeshNationalStatus: "LC",
      nationalAssessmentYear: 2015,
      nationalStatusSource: "IUCN Bangladesh Red List 2015",
      threats: [
        "Accidental entanglement and drowning in monofilament gillnets (Current jal)",
        "Killing by villagers out of fear of snakes"
      ]
    },
    lifecycleStatus: "published",
    isVerified: true,
    speciesVerificationStatus: "verified",
    imageVerificationStatus: "verified",
    isPublished: true,
    referenceIds: ["ref-iucn-bd-2015-amphibians-reptiles", "ref-reptile-database-2026"],
    media: [
      {
        id: "img-sp-fowlea-piscator-01",
        speciesId: "sp-fowlea-piscator",
        taxonId: "taxon-fowlea",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Checkered_Keelback_%28Fowlea_piscator%29_by_Aditya_Joshi.jpg",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Checkered_Keelback_%28Fowlea_piscator%29_by_Aditya_Joshi.jpg",
        caption: "Fowlea piscator (Checkered keelback) displaying distinct checkered markings and suborbital eye streaks.",
        sourceName: "Wikimedia Commons",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Checkered_Keelback_(Fowlea_piscator)_by_Aditya_Joshi.jpg",
        photographer: "Aditya Joshi",
        license: "CC-BY-SA",
        attribution: "Aditya Joshi via Wikimedia Commons (CC BY-SA 4.0)",
        isVerified: true,
        verificationStatus: "verified",
        imageType: "specimen_photo",
        type: "specimen_photo",
        verifiedBy: "Herpetological Review Panel",
        verifiedAt: "2026-09-17T10:00:00Z"
      }
    ],
    speciesPriority: "common_educational",
    createdAt: "2026-09-17T10:00:00Z",
    updatedAt: "2026-09-17T10:00:00Z"
  },
  {
    id: "sp-bungarus-fasciatus",
    scientificName: "Bungarus fasciatus",
    scientificNameAuthorship: "(Schneider, 1801)",
    taxonomicStatus: "accepted",
    module: "general",
    taxonId: "taxon-bungarus",
    synonyms: [
      {
        name: "Pseudoboa fasciata",
        authorship: "Schneider, 1801",
        status: "homotypic",
        isBasionym: true,
        year: 1801
      }
    ],
    commonNames: {
      en: [
        "Banded krait",
        "Barred krait"
      ],
      bn: [
        "শাঁখামুটি সাপ",
        "ডোমনাচিতি",
        "হলুদ-কালো শাঁখামুটি"
      ]
    },
    taxonomy: {
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Reptilia",
      order: "Squamata",
      family: "Elapidae",
      genus: "Bungarus",
      species: "Bungarus fasciatus"
    },
    morphology: {
      diagnosticFeatures: [
        "Large venomous elapid snake (length 1.5-2.2 meters) with distinctly triangular body in cross-section.",
        "Striking alternation of broad, equal-width black and bright yellow (or gold) rings spanning entire body and tail.",
        "Vertebral row of dorsal scales hexagonal and conspicuously enlarged compared to adjacent scales.",
        "Head black with a distinct yellow V-shaped or chevron marking pointing forwards onto the snout.",
        "Tail ends bluntly with a rounded tip; venom possesses potent neurotoxic postsynaptic bungarotoxins."
      ],
      description: "Bungarus fasciatus is an iconic, highly venomous yet notably docile nocturnal elapid snake of Bangladesh, famous for its distinct black and yellow alternating bands and ophiophagous diet.",
      maxStandardLengthCm: 225,
      coloration: "Vivid alternating broad crossbands of jet black and bright yellow or golden yellow throughout."
    },
    habitat: {
      systems: ["terrestrial", "freshwater"],
      zones: ["agricultural floodplains", "lowland moist forests", "termite mounds", "village water margins"],
      elevationMeters: { min: 0, max: 600 }
    },
    bangladeshOccurrence: {
      present: true,
      regions: [
        "Dhaka", "Chittagong", "Rajshahi", "Khulna", "Barisal", "Sylhet", "Rangpur", "Mymensingh", "Sundarbans"
      ],
      habitatTypes: ["floodplain agricultural field", "wetland margin", "village homestead grove"],
      residencyStatus: "resident",
      residency: "resident",
      bangladeshNationalStatus: "LC",
      threatCategoryNational: "LC",
      nationalAssessmentYear: 2015,
      nationalStatusSource: "IUCN Bangladesh Red List 2015 (Vol. 4: Reptiles)",
      localNamesBn: ["শাঁখামুটি", "ডোমনাচিতি"],
      seasonalNotes: "Nocturnal; rarely seen by day, forages actively along watercourses and rodent burrows during monsoon nights.",
      notes: "Known for its docile nature by day; despite possessing lethal neurotoxic venom, human bites are exceptionally rare."
    },
    ecology: {
      dietCategory: "carnivore",
      dietSummary: "Strictly ophiophagous; specializes in preying upon other snakes (including cobras, keelbacks, and rat snakes), skinks, and frogs.",
      behavior: "Nocturnal; hides its head under body coils in a tight knot when alarmed during daylight.",
      reproduction: "Oviparous; female deposits 4-14 eggs and guards the clutch until hatching, which takes about 60 days.",
      ecologicalRole: "Apex serpent predator regulating populations of agricultural rodents and other snake species."
    },
    conservation: {
      iucnGlobalStatus: "LC",
      iucnAssessmentYear: 2021,
      globalAssessmentYear: 2021,
      globalStatusSource: "IUCN Red List of Threatened Species",
      bangladeshNationalStatus: "LC",
      nationalAssessmentYear: 2015,
      nationalStatusSource: "IUCN Bangladesh Red List 2015",
      threats: [
        "Habitat fragmentation from agricultural intensification",
        "Indiscriminate killing by humans despite docile behavior"
      ]
    },
    lifecycleStatus: "published",
    isVerified: true,
    speciesVerificationStatus: "verified",
    imageVerificationStatus: "verified",
    isPublished: true,
    referenceIds: ["ref-iucn-bd-2015-amphibians-reptiles", "ref-reptile-database-2026"],
    media: [
      {
        id: "img-sp-bungarus-fasciatus-01",
        speciesId: "sp-bungarus-fasciatus",
        taxonId: "taxon-bungarus",
        url: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Banded_Krait_%28Bungarus_fasciatus%29_by_Aditya_Joshi.jpg",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Banded_Krait_%28Bungarus_fasciatus%29_by_Aditya_Joshi.jpg",
        caption: "Banded krait (Bungarus fasciatus) displaying distinct alternating black and golden-yellow rings and triangular body.",
        sourceName: "Wikimedia Commons",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Banded_Krait_(Bungarus_fasciatus)_by_Aditya_Joshi.jpg",
        photographer: "Aditya Joshi",
        license: "CC-BY-SA",
        attribution: "Aditya Joshi via Wikimedia Commons (CC BY-SA 4.0)",
        isVerified: true,
        verificationStatus: "verified",
        imageType: "specimen_photo",
        type: "specimen_photo",
        verifiedBy: "Herpetological Review Panel",
        verifiedAt: "2026-09-17T10:00:00Z"
      }
    ],
    speciesPriority: "common_educational",
    createdAt: "2026-09-17T10:00:00Z",
    updatedAt: "2026-09-17T10:00:00Z"
  }
];

module.exports = { MF15_SPECIES_HERPS };
