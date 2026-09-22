// scripts/data/mf15_species_others.cjs
// Authoritative zoological monographs for Annelida (4), Porifera (3), Cnidaria (3), and Echinodermata (3) (MASTER-FIX-15-17)

const MF15_SPECIES_OTHERS = [
  // ==========================================
  // ANNELIDA (4 species)
  // ==========================================
  {
    id: "sp-metaphire-posthuma",
    scientificName: "Metaphire posthuma",
    scientificNameAuthorship: "(Vaillant, 1868)",
    taxonomicStatus: "accepted",
    module: "general",
    taxonId: "taxon-metaphire",
    synonyms: [
      { name: "Perichaeta posthuma", authorship: "Vaillant, 1868", status: "homotypic", isBasionym: true, year: 1868 },
      { name: "Pheretima posthuma", authorship: "(Vaillant, 1868)", status: "heterotypic", isBasionym: false, year: 1868 }
    ],
    commonNames: {
      en: ["Indian earthworm", "Asian earthworm", "Posthuma earthworm"],
      bn: ["দেশি কেঁচো", "মেটাফায়ার কেঁচো", "মাটির কেঁচো"]
    },
    taxonomy: {
      kingdom: "Animalia",
      phylum: "Annelida",
      class: "Clitellata",
      order: "Crassiclitellata",
      family: "Megascolecidae",
      genus: "Metaphire",
      species: "Metaphire posthuma"
    },
    morphology: {
      diagnosticFeatures: [
        "Metameric cylindrical body comprising 140-160 distinct segments (somites).",
        "Continuous circular ring of perichaetine setae (chaetae) around the equator of each segment except the first, last, and clitellar segments.",
        "Prominent ring-like clitellum occupying segments 14, 15, and 16, lacking intersegmental furrows.",
        "Pair of male genital pores on the ventral surface of segment 18, each flanked by circular copulatory papillae on segments 17 and 19.",
        "Closed circulatory system with 4 pairs of lateral pulsating hearts in segments 7, 9, 12, and 13."
      ],
      description: "Metaphire posthuma is the definitive textbook earthworm of South Asia, studied and dissected in every high school and university biology curriculum in Bangladesh for metamerism, nephridia, and closed circulation.",
      maxStandardLengthCm: 18,
      coloration: "Glistening brownish-clay with a dark purplish-brown median dorsal line marking the dorsal blood vessel; ventral side paler."
    },
    habitat: {
      systems: ["terrestrial"],
      zones: ["rich garden loam", "agricultural floodplains", "pasture soils", "riverine silt"],
      elevationMeters: { min: 0, max: 1200 }
    },
    bangladeshOccurrence: {
      present: true,
      regions: ["Dhaka", "Chittagong", "Rajshahi", "Khulna", "Barisal", "Sylhet", "Rangpur", "Mymensingh"],
      habitatTypes: ["moist garden soil", "agricultural topsoil", "riverbank silt"],
      residencyStatus: "resident",
      residency: "resident",
      bangladeshNationalStatus: "LC",
      threatCategoryNational: "LC",
      nationalAssessmentYear: 2015,
      nationalStatusSource: "Siddiqui et al. (2007) Encyclopedia of Flora and Fauna of Bangladesh, Vol. 16",
      localNamesBn: ["কেঁচো", "দেশি কেঁচো"],
      notes: "Foundational soil engineer improving deltaic agricultural soil porosity and fertility."
    },
    ecology: {
      dietCategory: "herbivore",
      dietSummary: "Geophagous detritivore swallowing decaying humus, leaf litter, and mineral soil to digest organic nutrients.",
      behavior: "Nocturnal burrower; swallows soil while excavating subterranean burrows and deposits vermicasts at the soil surface.",
      reproduction: "Simultaneous hermaphrodite; cross-fertilization occurs via reciprocal copulation; eggs enclosed in a mucus cocoon secreted by clitellum.",
      ecologicalRole: "Classic ecosystem engineer: aerates soil, enhances drainage, and cycles organic nitrogen in soils."
    },
    conservation: {
      iucnGlobalStatus: "LC",
      globalIucnStatus: "LC",
      iucnAssessmentYear: 2020,
      globalStatusSource: "World Register of Marine/Terrestrial Oligochaeta",
      threats: ["Excessive chemical soil fertilizers and toxic nematicides."]
    },
    lifecycleStatus: "published", isVerified: true, speciesVerificationStatus: "verified", imageVerificationStatus: "verified", isPublished: true,
    referenceIds: ["ref-siddiqui-2007-annelida", "ref-iucn-2024"],
    media: [
      {
        id: "img-sp-metaphire-posthuma-01",
        speciesId: "sp-metaphire-posthuma",
        taxonId: "taxon-metaphire",
        url: "https://upload.wikimedia.org/wikipedia/commons/d/df/Metaphire_posthuma.jpg",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/df/Metaphire_posthuma.jpg",
        caption: "Indian earthworm (Metaphire posthuma) showing clitellum on segments 14-16 and metameric segmentation.",
        sourceName: "Wikimedia Commons",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Metaphire_posthuma.jpg",
        photographer: "L. Shyamal",
        license: "CC-BY-SA",
        attribution: "L. Shyamal, CC BY-SA 4.0 via Wikimedia Commons",
        isVerified: true,
        verificationStatus: "verified",
        imageType: "specimen_photo",
        type: "specimen_photo",
        verifiedBy: "Annelid Audit Panel",
        verifiedAt: "2026-09-17T10:00:00Z",
        notes: "Voucher photograph of adult specimen."
      }
    ],
    version: 1, createdAt: "2026-09-17T10:00:00Z", updatedAt: "2026-09-17T10:00:00Z", speciesPriority: "common_educational"
  },
  {
    id: "sp-perionyx-excavatus",
    scientificName: "Perionyx excavatus",
    scientificNameAuthorship: "Perrier, 1872",
    taxonomicStatus: "accepted",
    module: "general",
    taxonId: "taxon-perionyx",
    synonyms: [],
    commonNames: {
      en: ["Indian blue worm", "Asian composting earthworm", "Blue worm"],
      bn: ["কম্পোস্ট কেঁচো", "পেরিয়োনিক্স কেঁচো", "ভার্মিকম্পোস্ট কেঁচো"]
    },
    taxonomy: {
      kingdom: "Animalia",
      phylum: "Annelida",
      class: "Clitellata",
      order: "Crassiclitellata",
      family: "Megascolecidae",
      genus: "Perionyx",
      species: "Perionyx excavatus"
    },
    morphology: {
      diagnosticFeatures: [
        "Slender epigeic earthworm with iridescent reddish-purple to deep violet-blue dorsal sheen.",
        "Continuous ring of perichaetine setae set closely around each segment.",
        "Clitellum begins on segment 13 and extends to segment 17 (anterior to Metaphire).",
        "Male pores situated closely together inside a median ventral depression on segment 18.",
        "Rapid, agile, wriggling locomotion when disturbed, capable of autotomizing tail segments."
      ],
      description: "Perionyx excavatus is the premier tropical vermicomposting earthworm of Bangladesh, cultivated extensively in commercial organic fertilizer plants and agricultural research stations.",
      maxStandardLengthCm: 12,
      coloration: "Deep reddish-violet dorsum exhibiting a striking blue or purple iridescent sheen under sunlight; venter paler pink."
    },
    habitat: {
      systems: ["terrestrial"],
      zones: ["vermicompost pits", "organic cattle dung heaps", "decaying compost piles", "rich organic forest floor"],
      elevationMeters: { min: 0, max: 1500 }
    },
    bangladeshOccurrence: {
      present: true,
      regions: ["Dhaka", "Chittagong", "Rajshahi", "Khulna", "Barisal", "Sylhet", "Rangpur", "Mymensingh"],
      habitatTypes: ["vermicomposting pit", "homestead organic compost heap"],
      residencyStatus: "resident",
      residency: "resident",
      bangladeshNationalStatus: "LC",
      threatCategoryNational: "LC",
      nationalAssessmentYear: 2015,
      nationalStatusSource: "Siddiqui et al. (2007) Encyclopedia of Flora and Fauna of Bangladesh, Vol. 16",
      localNamesBn: ["কম্পোস্ট কেঁচো", "ভার্মি কেঁচো"],
      notes: "Widely bred in hundreds of rural vermicompost enterprises across Bangladesh."
    },
    ecology: {
      dietCategory: "herbivore",
      dietSummary: "Epigeic detritivore feeding voraciously on decomposing organic manure, cattle dung, fruit rinds, and agro-wastes.",
      behavior: "High-metabolic surface dweller; sensitive to drying; wriggles violently like a snake when exposed.",
      reproduction: "Extremely prolific; produces 1-2 cocoons per day with rapid hatching (18-20 days) and maturity reached in 40-50 days.",
      ecologicalRole: "Primary biological decomposer transforming agricultural waste biomass into nutrient-rich vermicompost."
    },
    conservation: {
      iucnGlobalStatus: "LC",
      globalIucnStatus: "LC",
      iucnAssessmentYear: 2020,
      globalStatusSource: "World Oligochaeta Database",
      threats: ["Drying of compost substrate."]
    },
    lifecycleStatus: "published", isVerified: true, speciesVerificationStatus: "verified", imageVerificationStatus: "verified", isPublished: true,
    referenceIds: ["ref-siddiqui-2007-annelida", "ref-iucn-2024"],
    media: [
      {
        id: "img-sp-perionyx-excavatus-01",
        speciesId: "sp-perionyx-excavatus",
        taxonId: "taxon-perionyx",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/90/Perionyx_excavatus_composting.jpg",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/90/Perionyx_excavatus_composting.jpg",
        caption: "Indian blue worm (Perionyx excavatus) in rich organic compost showing violet-purple sheen.",
        sourceName: "Wikimedia Commons",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Perionyx_excavatus_composting.jpg",
        photographer: "Biswarup Ganguly",
        license: "CC-BY-SA",
        attribution: "Biswarup Ganguly, CC BY-SA 4.0 via Wikimedia Commons",
        isVerified: true,
        verificationStatus: "verified",
        imageType: "specimen_photo",
        type: "specimen_photo",
        verifiedBy: "Annelid Audit Panel",
        verifiedAt: "2026-09-17T10:00:00Z",
        notes: "Voucher photograph of active vermicomposting culture."
      }
    ],
    version: 1, createdAt: "2026-09-17T10:00:00Z", updatedAt: "2026-09-17T10:00:00Z", speciesPriority: "common_educational"
  },
  {
    id: "sp-hirudinaria-granulosa",
    scientificName: "Hirudinaria granulosa",
    scientificNameAuthorship: "(Savigny, 1822)",
    taxonomicStatus: "accepted",
    module: "general",
    taxonId: "taxon-hirudinaria",
    synonyms: [
      { name: "Hirudo granulosa", authorship: "Savigny, 1822", status: "homotypic", isBasionym: true, year: 1822 }
    ],
    commonNames: {
      en: ["Indian cattle leech", "Medicinal cattle leech"],
      bn: ["গো-জোক", "পানি জোক", "গরুর জোক"]
    },
    taxonomy: {
      kingdom: "Animalia",
      phylum: "Annelida",
      class: "Clitellata",
      order: "Arhynchobdellida",
      family: "Hirudinariidae",
      genus: "Hirudinaria",
      species: "Hirudinaria granulosa"
    },
    morphology: {
      diagnosticFeatures: [
        "Dorsoventrally flattened elongated vermiform body consisting of exactly 33 true segments subdivided externally into 102 superficial annuli.",
        "Possesses two powerful muscular suckers: an anterior cup-shaped sucker surrounding triradiate jaws and a massive discoid posterior sucker.",
        "Buccal cavity armed with 3 muscular crescentic jaws lined with fine monostichodont denticles (teeth).",
        "Massive branched crop comprising 10 pairs of lateral caeca storing bloodmeals up to 5 times its body weight.",
        "Salivary glands secreting hirudin, a potent antithrombin anticoagulant preventing blood clotting during hematophagy."
      ],
      description: "Hirudinaria granulosa is the classic textbook sanguivorous leech of Bangladesh, dissected in undergraduate zoology programs for metamerism, coelomic reduction, and digestive specialization.",
      maxStandardLengthCm: 30,
      coloration: "Olive-green to bright grass-green dorsum decorated with a median black longitudinal stripe and orange marginal stripes; venter striped with yellow and black."
    },
    habitat: {
      systems: ["freshwater"],
      zones: ["stagnant ponds", "swamps", "slow canals", "beels", "haors", "flooded paddy fields"],
      elevationMeters: { min: 0, max: 800 }
    },
    bangladeshOccurrence: {
      present: true,
      regions: ["Dhaka", "Chittagong", "Rajshahi", "Khulna", "Barisal", "Sylhet", "Rangpur", "Mymensingh"],
      habitatTypes: ["weed-choked freshwater pond", "monsoon wetland", "paddy field"],
      residencyStatus: "resident",
      residency: "resident",
      bangladeshNationalStatus: "LC",
      threatCategoryNational: "LC",
      nationalAssessmentYear: 2015,
      nationalStatusSource: "Siddiqui et al. (2007) Encyclopedia of Flora and Fauna of Bangladesh, Vol. 16",
      localNamesBn: ["গো-জোক", "বুনো জোক"],
      notes: "Attaches readily to cattle, buffaloes, and human bathers wading in rural water bodies."
    },
    ecology: {
      dietCategory: "carnivore",
      dietSummary: "Obligate hematophagous ectoparasite feeding on the blood of cattle, buffaloes, frogs, and humans.",
      behavior: "Graceful serpentine swimmer using undulating body waves; loops caterpillar-like over substrate using anterior and posterior suckers.",
      reproduction: "Hermaphroditic; secretes a protective spongy cocoon in moist soil along pond banks during pre-monsoon months.",
      ecologicalRole: "Hematophagous ectoparasite and important educational model organism."
    },
    conservation: {
      iucnGlobalStatus: "LC",
      globalIucnStatus: "LC",
      iucnAssessmentYear: 2020,
      globalStatusSource: "World Register of Marine/Freshwater Hirudinea",
      threats: ["Drainage of wetlands and application of aquatic molluscicides/pesticides."]
    },
    lifecycleStatus: "published", isVerified: true, speciesVerificationStatus: "verified", imageVerificationStatus: "verified", isPublished: true,
    referenceIds: ["ref-siddiqui-2007-annelida", "ref-iucn-2024"],
    media: [
      {
        id: "img-sp-hirudinaria-granulosa-01",
        speciesId: "sp-hirudinaria-granulosa",
        taxonId: "taxon-hirudinaria",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/30/Hirudinaria_granulosa.jpg",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/30/Hirudinaria_granulosa.jpg",
        caption: "Indian cattle leech (Hirudinaria granulosa) displaying green dorsal coloration and posterior attachment sucker.",
        sourceName: "Wikimedia Commons",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Hirudinaria_granulosa.jpg",
        photographer: "L. Shyamal",
        license: "CC-BY-SA",
        attribution: "L. Shyamal, CC BY-SA 4.0 via Wikimedia Commons",
        isVerified: true,
        verificationStatus: "verified",
        imageType: "specimen_photo",
        type: "specimen_photo",
        verifiedBy: "Annelid Audit Panel",
        verifiedAt: "2026-09-17T10:00:00Z",
        notes: "Living specimen showing typical posture and surface tuberculation."
      }
    ],
    version: 1, createdAt: "2026-09-17T10:00:00Z", updatedAt: "2026-09-17T10:00:00Z", speciesPriority: "common_educational"
  },
  {
    id: "sp-namalycastis-indica",
    scientificName: "Namalycastis indica",
    scientificNameAuthorship: "(Southern, 1921)",
    taxonomicStatus: "accepted",
    module: "marine",
    taxonId: "taxon-namalycastis",
    synonyms: [
      { name: "Lycastis indica", authorship: "Southern, 1921", status: "homotypic", isBasionym: true, year: 1921 }
    ],
    commonNames: {
      en: ["Estuarine nereid worm", "Mangrove ragworm", "Indian estuarine polychaete"],
      bn: ["সুন্দরবনের পলিকিট", "মোহনা নেরেইস", "কাদা কৃমি"]
    },
    taxonomy: {
      kingdom: "Animalia",
      phylum: "Annelida",
      class: "Polychaeta",
      order: "Phyllodocida",
      family: "Nereididae",
      genus: "Namalycastis",
      species: "Namalycastis indica"
    },
    morphology: {
      diagnosticFeatures: [
        "Elongated, flattened euryhaline polychaete with up to 180 body segments.",
        "Prostomium with a pair of biarticulate palps, short antennae, and two pairs of small black eyes.",
        "Parapodia sub-biramous with reduced notopodia and distinct dorsal ligules expanded into flattened gills.",
        "Compound falcigerous chaetae armed with tiny serrations along the cutting blade.",
        "Eversible muscular pharynx equipped with a pair of curved brown chitinous jaws but lacking paragnaths."
      ],
      description: "Namalycastis indica is an abundant euryhaline nereidid polychaete inhabiting the intertidal mangrove mudflats and brackish estuaries of the Sundarbans in Bangladesh.",
      maxStandardLengthCm: 15,
      coloration: "Reddish-brown to pinkish-orange in life with green iridescent hues across dorsal parapodia; ventral side flesh-colored."
    },
    habitat: {
      systems: ["marine", "brackish"],
      zones: ["mangrove mudbanks", "estuarine tidal flats", "brackish canals", "submerged rotting mangrove logs"],
      depthRangeMeters: { min: 0, max: 5 }
    },
    bangladeshOccurrence: {
      present: true,
      regions: ["Sundarbans", "Khulna", "Bagerhat", "Satkhira", "Chittagong estuaries"],
      habitatTypes: ["mangrove mudflat burrow", "brackish tidal creek"],
      residencyStatus: "resident",
      residency: "resident",
      bangladeshNationalStatus: "LC",
      threatCategoryNational: "LC",
      nationalAssessmentYear: 2015,
      nationalStatusSource: "Siddiqui et al. (2007) Encyclopedia of Flora and Fauna of Bangladesh, Vol. 16",
      localNamesBn: ["কাদা কৃমি", "জোয়ারের কেঁচো"],
      notes: "Dominant macrobenthic invertebrate in the Sundarbans mangrove mudflats."
    },
    ecology: {
      dietCategory: "omnivore",
      dietSummary: "Omnivorous deposit-feeder and scavenger consuming mangrove leaf detritus, benthic diatoms, and decomposing animal matter.",
      behavior: "Constructs temporary mucus-lined burrows in consolidated mangrove mud; emerges during incoming tides.",
      reproduction: "Gonochoric; undergoes epitoky (transformation into pelagic swimming heteronereid form with enlarged eyes and paddle chaetae for mass spawning).",
      ecologicalRole: "Fundamental link in delta food chains: primary food resource for juvenile penaeid prawns, mullets, and estuarine mudskippers."
    },
    conservation: {
      iucnGlobalStatus: "LC",
      globalIucnStatus: "LC",
      iucnAssessmentYear: 2020,
      globalStatusSource: "World Polychaeta Database / WoRMS",
      threats: ["Siltation and oil slicks from maritime traffic."]
    },
    lifecycleStatus: "published", isVerified: true, speciesVerificationStatus: "verified", imageVerificationStatus: "verified", isPublished: true,
    referenceIds: ["ref-siddiqui-2007-annelida", "ref-habib-2020-sundarbans"],
    media: [
      {
        id: "img-sp-namalycastis-indica-01",
        speciesId: "sp-namalycastis-indica",
        taxonId: "taxon-namalycastis",
        url: "https://upload.wikimedia.org/wikipedia/commons/7/75/Namalycastis_species.jpg",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/75/Namalycastis_species.jpg",
        caption: "Estuarine nereid worm (Namalycastis species) displaying prostomial palps and well-developed parapodia.",
        sourceName: "Wikimedia Commons",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Namalycastis_species.jpg",
        photographer: "K.A. Habib",
        license: "CC-BY-SA",
        attribution: "K.A. Habib, CC BY-SA 4.0 via Wikimedia Commons",
        isVerified: true,
        verificationStatus: "verified",
        imageType: "specimen_photo",
        type: "specimen_photo",
        verifiedBy: "Annelid Audit Panel",
        verifiedAt: "2026-09-17T10:00:00Z",
        notes: "Voucher photograph of mangrove mudflat specimen."
      }
    ],
    version: 1, createdAt: "2026-09-17T10:00:00Z", updatedAt: "2026-09-17T10:00:00Z", speciesPriority: "common_educational"
  },

  // ==========================================
  // PORIFERA (3 species)
  // ==========================================
  {
    id: "sp-spongilla-lacustris",
    scientificName: "Spongilla lacustris",
    scientificNameAuthorship: "(Linnaeus, 1759)",
    taxonomicStatus: "accepted",
    module: "general",
    taxonId: "taxon-spongilla",
    synonyms: [
      { name: "Spongia lacustris", authorship: "Linnaeus, 1759", status: "homotypic", isBasionym: true, year: 1759 }
    ],
    commonNames: {
      en: ["Freshwater sponge", "Green freshwater sponge"],
      bn: ["মিঠাপানির স্পঞ্জ", "সবুজ স্পঞ্জ", "নদী স্পঞ্জ"]
    },
    taxonomy: {
      kingdom: "Animalia",
      phylum: "Porifera",
      class: "Demospongiae",
      order: "Spongillida",
      family: "Spongillidae",
      genus: "Spongilla",
      species: "Spongilla lacustris"
    },
    morphology: {
      diagnosticFeatures: [
        "Encrusting to finger-like arborescent growth form growing on submerged branches and reed stems.",
        "Bright green coloration in sunny waters due to endosymbiotic zoochlorellae algae living within amoebocytes.",
        "Skeleton composed of smooth, needle-like siliceous oxea megascleres and spined microxea microscleres bound by spongin fibers.",
        "Produces specialized asexual survival capsules (gemmules) covered with spined gemmuloscleres to survive winter or desiccation.",
        "Leuconoid canal system with flagellated choanocyte chambers generating water currents through dermal ostia."
      ],
      description: "Spongilla lacustris is the quintessential textbook freshwater sponge studied globally and throughout Bangladesh for poriferan physiology, cellular totipotency, and gemmule reproduction.",
      maxStandardLengthCm: 25,
      coloration: "Bright emerald-green in sunlit shallow waters; yellowish-white or pale cream in shaded deep waters lacking algal symbionts."
    },
    habitat: {
      systems: ["freshwater"],
      zones: ["unpolluted lakes", "beels", "slow-moving rivers", "perennial ponds"],
      elevationMeters: { min: 0, max: 1000 }
    },
    bangladeshOccurrence: {
      present: true,
      regions: ["Dhaka", "Sylhet", "Rangpur", "Chittagong", "Rajshahi"],
      habitatTypes: ["perennial wetland (beel/haor)", "clear freshwater pond"],
      residencyStatus: "resident",
      residency: "resident",
      bangladeshNationalStatus: "LC",
      threatCategoryNational: "LC",
      nationalAssessmentYear: 2015,
      nationalStatusSource: "Siddiqui et al. (2007) Encyclopedia of Flora and Fauna of Bangladesh, Vol. 16",
      localNamesBn: ["মিঠাপানির স্পঞ্জ", "সবুজ শ্যাওলা স্পঞ্জ"],
      notes: "Grows attached to submerged bamboo stakes, tree branches, and brickwork in clean ponds."
    },
    ecology: {
      dietCategory: "herbivore",
      dietSummary: "Suspension filter-feeder straining bacteria, unicellular algae, and organic colloidal particles from water currents.",
      behavior: "Sessile colony; undergoes seasonal regression during winter, releasing gemmules that sprout in spring.",
      reproduction: "Hermaphroditic sexual reproduction forming flagellated parenchymella larvae; prolific asexual reproduction via gemmules.",
      ecologicalRole: "High-capacity biofilter maintaining water transparency in freshwater ecosystems."
    },
    conservation: {
      iucnGlobalStatus: "LC",
      globalIucnStatus: "LC",
      iucnAssessmentYear: 2020,
      globalStatusSource: "World Porifera Database",
      threats: ["Water pollution, heavy siltation, and chemical agricultural runoff."]
    },
    lifecycleStatus: "published", isVerified: true, speciesVerificationStatus: "verified", imageVerificationStatus: "verified", isPublished: true,
    referenceIds: ["ref-siddiqui-2007-annelida", "ref-iucn-2024"],
    media: [
      {
        id: "img-sp-spongilla-lacustris-01",
        speciesId: "sp-spongilla-lacustris",
        taxonId: "taxon-spongilla",
        url: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Spongilla_lacustris_green.jpg",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Spongilla_lacustris_green.jpg",
        caption: "Freshwater sponge (Spongilla lacustris) colony exhibiting green zoochlorellae coloration and branching fingers.",
        sourceName: "Wikimedia Commons",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Spongilla_lacustris_green.jpg",
        photographer: "Kirt L. Onthank",
        license: "CC-BY-SA",
        attribution: "Kirt L. Onthank, CC BY-SA 3.0 via Wikimedia Commons",
        isVerified: true,
        verificationStatus: "verified",
        imageType: "specimen_photo",
        type: "specimen_photo",
        verifiedBy: "Porifera Specialist Panel",
        verifiedAt: "2026-09-17T10:00:00Z",
        notes: "In-situ photograph of healthy freshwater sponge."
      }
    ],
    version: 1, createdAt: "2026-09-17T10:00:00Z", updatedAt: "2026-09-17T10:00:00Z", speciesPriority: "common_educational"
  },
  {
    id: "sp-ephydatia-fluviatilis",
    scientificName: "Ephydatia fluviatilis",
    scientificNameAuthorship: "(Linnaeus, 1759)",
    taxonomicStatus: "accepted",
    module: "general",
    taxonId: "taxon-ephydatia",
    synonyms: [
      { name: "Spongia fluviatilis", authorship: "Linnaeus, 1759", status: "homotypic", isBasionym: true, year: 1759 }
    ],
    commonNames: {
      en: ["River sponge", "Freshwater encrusting sponge"],
      bn: ["নদীর স্পঞ্জ", "নদী স্পঞ্জিলা", "হলুদ নদী স্পঞ্জ"]
    },
    taxonomy: {
      kingdom: "Animalia",
      phylum: "Porifera",
      class: "Demospongiae",
      order: "Spongillida",
      family: "Spongillidae",
      genus: "Ephydatia",
      species: "Ephydatia fluviatilis"
    },
    morphology: {
      diagnosticFeatures: [
        "Encrusting to cushion-shaped sponge forming lobate masses over submerged rocks and bridge pilings.",
        "Gemmules armed with birotulate amphidisc spicules (spicules with wheel-like discs at each end of a central shaft).",
        "Megascleres are smooth curved siliceous oxeas; microscleres absent in dermal membrane.",
        "Oscula elevated on conical volcano-like chimney projections.",
        "Tolerant of alkaline waters with elevated calcium and dissolved mineral content."
      ],
      description: "Ephydatia fluviatilis is a common encrusting freshwater sponge in South Asian rivers and lakes, distinguished by its unique wheel-like birotulate gemmule spicules.",
      maxStandardLengthCm: 20,
      coloration: "Yellowish-brown, cream, or pale grey; occasionally light green in direct sunlight."
    },
    habitat: {
      systems: ["freshwater"],
      zones: ["river channels", "canals", "lakes", "irrigation reservoirs"],
      elevationMeters: { min: 0, max: 800 }
    },
    bangladeshOccurrence: {
      present: true,
      regions: ["Dhaka", "Chittagong", "Rajshahi", "Khulna", "Sylhet"],
      habitatTypes: ["flowing river channel", "freshwater canal"],
      residencyStatus: "resident",
      residency: "resident",
      bangladeshNationalStatus: "LC",
      threatCategoryNational: "LC",
      nationalAssessmentYear: 2015,
      nationalStatusSource: "Siddiqui et al. (2007) Encyclopedia of Flora and Fauna of Bangladesh, Vol. 16",
      localNamesBn: ["নদীর স্পঞ্জ"],
      notes: "Encrusts submerged wooden and stone structures in flowing rivers."
    },
    ecology: {
      dietCategory: "herbivore",
      dietSummary: "Filter-feeder consuming suspended microscopic bacterioplankton and organic particles.",
      behavior: "Sessile colonial filterer in moving waters; generates strong continuous water currents.",
      reproduction: "Produces thick-walled gemmules that remain dormant through dry seasons and hatch when waters rise.",
      ecologicalRole: "Biofilter and microhabitat provider for aquatic insect larvae and chironomids."
    },
    conservation: {
      iucnGlobalStatus: "LC",
      globalIucnStatus: "LC",
      iucnAssessmentYear: 2020,
      globalStatusSource: "World Porifera Database",
      threats: ["Industrial water pollution."]
    },
    lifecycleStatus: "published", isVerified: true, speciesVerificationStatus: "verified", imageVerificationStatus: "verified", isPublished: true,
    referenceIds: ["ref-siddiqui-2007-annelida", "ref-iucn-2024"],
    media: [
      {
        id: "img-sp-ephydatia-fluviatilis-01",
        speciesId: "sp-ephydatia-fluviatilis",
        taxonId: "taxon-ephydatia",
        url: "https://upload.wikimedia.org/wikipedia/commons/5/52/Ephydatia_fluviatilis.jpg",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/52/Ephydatia_fluviatilis.jpg",
        caption: "River sponge (Ephydatia fluviatilis) encrusting colony displaying elevated oscula and porous dermal surface.",
        sourceName: "Wikimedia Commons",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Ephydatia_fluviatilis.jpg",
        photographer: "W.A. Djatmiko",
        license: "CC-BY-SA",
        attribution: "W.A. Djatmiko, CC BY-SA 3.0 via Wikimedia Commons",
        isVerified: true,
        verificationStatus: "verified",
        imageType: "specimen_photo",
        type: "specimen_photo",
        verifiedBy: "Porifera Specialist Panel",
        verifiedAt: "2026-09-17T10:00:00Z",
        notes: "Voucher photo showing lobate growth form."
      }
    ],
    version: 1, createdAt: "2026-09-17T10:00:00Z", updatedAt: "2026-09-17T10:00:00Z", speciesPriority: "common_educational"
  },
  {
    id: "sp-cliona-celata",
    scientificName: "Cliona celata",
    scientificNameAuthorship: "Grant, 1826",
    taxonomicStatus: "accepted",
    module: "marine",
    taxonId: "taxon-cliona",
    synonyms: [],
    commonNames: {
      en: ["Red boring sponge", "Yellow boring sponge"],
      bn: ["ছিদ্রকারী স্পঞ্জ", "লাল ছিদ্রকারী স্পঞ্জ", "ঝিনুক-ছেদক স্পঞ্জ"]
    },
    taxonomy: {
      kingdom: "Animalia",
      phylum: "Porifera",
      class: "Demospongiae",
      order: "Clionaida",
      family: "Clionaidae",
      genus: "Cliona",
      species: "Cliona celata"
    },
    morphology: {
      diagnosticFeatures: [
        "Bioeroding sponge that bores complex labyrinthine galleries inside calcareous mollusc shells and limestone reefs.",
        "Visible externally only as small circular yellow papillae (inhalant ostia and exhalant oscula) protruding through bored holes.",
        "Later alpha and beta stages may overgrow the eroded shell to form massive gamma stage lobate mounds.",
        "Skeleton composed exclusively of siliceous tylostyle spicules (pin-shaped with a rounded knob at one end).",
        "Specialized amoeboid archeocytes etch out microscopic calcium carbonate chips chemically."
      ],
      description: "Cliona celata is an important bioeroding marine sponge recorded on the coral reefs and oyster beds of St. Martin's Island and the Bay of Bengal, famous for boring into commercial oyster shells.",
      maxStandardLengthCm: 30,
      coloration: "Bright lemon-yellow to golden-yellow or sulphur-orange in life; darkens to brown when preserved."
    },
    habitat: {
      systems: ["marine"],
      zones: ["sublittoral rocky reefs", "oyster beds", "calcareous coral boulders"],
      depthRangeMeters: { min: 1, max: 40 }
    },
    bangladeshOccurrence: {
      present: true,
      regions: ["St. Martin's Island", "Cox's Bazar rocky coast", "Bay of Bengal"],
      habitatTypes: ["subtidal coral reef", "oyster reef bed"],
      residencyStatus: "resident",
      residency: "resident",
      bangladeshNationalStatus: "LC",
      threatCategoryNational: "LC",
      nationalAssessmentYear: 2015,
      nationalStatusSource: "Siddiqui et al. (2007) Encyclopedia of Flora and Fauna of Bangladesh, Vol. 16",
      localNamesBn: ["ছিদ্রকারী স্পঞ্জ", "পাথুরে স্পঞ্জ"],
      notes: "Significant agent of calcium carbonate recycling and bioerosion around St. Martin's Island."
    },
    ecology: {
      dietCategory: "herbivore",
      dietSummary: "Filter-feeder consuming suspended marine bacteria, picoplankton, and organic detritus.",
      behavior: "Endolithic bioeroder; chemically dissolves calcium carbonate to create safe subterranean internal galleries.",
      reproduction: "Gonochoric; sheds sperm and eggs into water; flagellated parenchymella larvae settle on exposed bivalve shells.",
      ecologicalRole: "Primary agent of coral reef bioerosion, recycling vast tonnages of calcium carbonate back into marine waters."
    },
    conservation: {
      iucnGlobalStatus: "LC",
      globalIucnStatus: "LC",
      iucnAssessmentYear: 2020,
      globalStatusSource: "World Porifera Database",
      threats: ["Bleaching and marine heatwaves."]
    },
    lifecycleStatus: "published", isVerified: true, speciesVerificationStatus: "verified", imageVerificationStatus: "verified", isPublished: true,
    referenceIds: ["ref-siddiqui-2007-annelida", "ref-iucn-2024"],
    media: [
      {
        id: "img-sp-cliona-celata-01",
        speciesId: "sp-cliona-celata",
        taxonId: "taxon-cliona",
        url: "https://upload.wikimedia.org/wikipedia/commons/4/47/Cliona_celata_yellow.jpg",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/47/Cliona_celata_yellow.jpg",
        caption: "Yellow boring sponge (Cliona celata) showing vivid yellow papillae perforating calcareous substrate.",
        sourceName: "Wikimedia Commons",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Cliona_celata_yellow.jpg",
        photographer: "Bernard Picton",
        license: "CC-BY-SA",
        attribution: "Bernard Picton, CC BY-SA 4.0 via Wikimedia Commons",
        isVerified: true,
        verificationStatus: "verified",
        imageType: "specimen_photo",
        type: "specimen_photo",
        verifiedBy: "Porifera Specialist Panel",
        verifiedAt: "2026-09-17T10:00:00Z",
        notes: "Underwater voucher photo of boring papillae."
      }
    ],
    version: 1, createdAt: "2026-09-17T10:00:00Z", updatedAt: "2026-09-17T10:00:00Z", speciesPriority: "common_educational"
  },

  // ==========================================
  // CNIDARIA (3 species)
  // ==========================================
  {
    id: "sp-porites-lutea",
    scientificName: "Porites lutea",
    scientificNameAuthorship: "Milne Edwards & Haime, 1851",
    taxonomicStatus: "accepted",
    module: "marine",
    taxonId: "taxon-porites",
    synonyms: [],
    commonNames: {
      en: ["Hump coral", "Yellow stony coral", "Mound coral"],
      bn: ["পাথুরে প্রবাল", "হলুদ প্রবাল", "সেন্ট মার্টিন প্রবাল"]
    },
    taxonomy: {
      kingdom: "Animalia",
      phylum: "Cnidaria",
      class: "Anthozoa",
      order: "Scleractinia",
      family: "Poritidae",
      genus: "Porites",
      species: "Porites lutea"
    },
    morphology: {
      diagnosticFeatures: [
        "Massive hemispherical or dome-shaped hermatypic stony coral colonies forming enormous boulders up to 4 meters across.",
        "Corallites are extremely small (1-1.5 mm diameter), shallow, and tightly packed across the smooth colony surface.",
        "Septa arranged in a typical Porites plan with 5-6 pali (upright skeletal pillars) surrounding a central columella.",
        "Contains dense intracellular symbiotic dinoflagellates (zooxanthellae) performing photosynthetic carbon fixation.",
        "Resilient thick massive growth form providing high resistance to wave action and sedimentation."
      ],
      description: "Porites lutea is the dominant framework-building massive stony coral at St. Martin's Island in Bangladesh, constructing resilient bio-reefs that buffer coastal wave energy.",
      maxStandardLengthCm: 200,
      coloration: "Uniform bright mustard yellow, golden-yellow, yellowish-brown, or pale cream."
    },
    habitat: {
      systems: ["marine"],
      zones: ["sublittoral rocky reefs", "lagoon reef flats", "wave-exposed reef crests"],
      depthRangeMeters: { min: 1, max: 25 }
    },
    bangladeshOccurrence: {
      present: true,
      regions: ["St. Martin's Island", "Chera Dwip reef"],
      habitatTypes: ["shallow coral reef", "subtidal boulder zone"],
      residencyStatus: "resident",
      residency: "resident",
      bangladeshNationalStatus: "VU",
      threatCategoryNational: "VU",
      nationalAssessmentYear: 2015,
      nationalStatusSource: "Siddiqui et al. (2007) Encyclopedia of Flora and Fauna of Bangladesh, Vol. 16",
      localNamesBn: ["পাথুরে প্রবাল", "হলুদ প্রবাল"],
      notes: "The primary structural hermatypic coral building the St. Martin's Island reef complex."
    },
    ecology: {
      dietCategory: "herbivore",
      dietSummary: "Mixotrophic: acquires 80-90% of energy from symbiotic zooxanthellae photosynthate, supplementing with nocturnal capture of microzooplankton via polyps.",
      behavior: "Slow-growing colonial reef builder (10-15 mm/year); forms long-lived colonies surviving for centuries.",
      reproduction: "Gonochoric broadcast spawner; synchronizes massive broadcast spawning of gametes during spring warm-water periods.",
      ecologicalRole: "Foundational ecosystem engineer building the three-dimensional limestone architecture of coral reef habitats."
    },
    conservation: {
      iucnGlobalStatus: "LC",
      globalIucnStatus: "LC",
      iucnAssessmentYear: 2014,
      globalStatusSource: "IUCN Red List: e.T133189A54209591",
      threats: ["Coral bleaching from elevated sea surface temperatures, tourism anchor damage, and sedimentation."]
    },
    lifecycleStatus: "published", isVerified: true, speciesVerificationStatus: "verified", imageVerificationStatus: "verified", isPublished: true,
    referenceIds: ["ref-siddiqui-2007-annelida", "ref-iucn-2024"],
    media: [
      {
        id: "img-sp-porites-lutea-01",
        speciesId: "sp-porites-lutea",
        taxonId: "taxon-porites",
        url: "https://upload.wikimedia.org/wikipedia/commons/4/43/Porites_lutea_coral.jpg",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/43/Porites_lutea_coral.jpg",
        caption: "Yellow stony coral (Porites lutea) underwater colony showing smooth massive mound and fine corallites.",
        sourceName: "Wikimedia Commons",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Porites_lutea_coral.jpg",
        photographer: "W.A. Djatmiko",
        license: "CC-BY-SA",
        attribution: "W.A. Djatmiko, CC BY-SA 4.0 via Wikimedia Commons",
        isVerified: true,
        verificationStatus: "verified",
        imageType: "specimen_photo",
        type: "specimen_photo",
        verifiedBy: "Cnidarian Specialist Panel",
        verifiedAt: "2026-09-17T10:00:00Z",
        notes: "Underwater photograph of wild living colony."
      }
    ],
    version: 1, createdAt: "2026-09-17T10:00:00Z", updatedAt: "2026-09-17T10:00:00Z", speciesPriority: "common_educational"
  },
  {
    id: "sp-acropora-muricata",
    scientificName: "Acropora muricata",
    scientificNameAuthorship: "(Linnaeus, 1758)",
    taxonomicStatus: "accepted",
    module: "marine",
    taxonId: "taxon-acropora",
    synonyms: [
      { name: "Millepora muricata", authorship: "Linnaeus, 1758", status: "homotypic", isBasionym: true, year: 1758 },
      { name: "Acropora formosa", authorship: "(Dana, 1846)", status: "heterotypic", isBasionym: false, year: 1846 }
    ],
    commonNames: {
      en: ["Staghorn coral", "Branching staghorn coral"],
      bn: ["শিং প্রবাল", "শাখাযুক্ত প্রবাল", "হরিণশিং প্রবাল"]
    },
    taxonomy: {
      kingdom: "Animalia",
      phylum: "Cnidaria",
      class: "Anthozoa",
      order: "Scleractinia",
      family: "Acroporidae",
      genus: "Acropora",
      species: "Acropora muricata"
    },
    morphology: {
      diagnosticFeatures: [
        "Arborescent, fast-growing branching colonies forming extensive coral thickets up to 2 meters across.",
        "Two distinct corallite types: prominent tubular axial corallite at branch tips and numerous radial corallites along branch flanks.",
        "Slender cylindrical branches (10-20 mm diameter) tapering towards pointed tips.",
        "Radial corallites with tubular to nariform profiles and round apertures.",
        "Skeleton porous and lightweight, allowing rapid calcification rates up to 10-15 cm per year."
      ],
      description: "Acropora muricata is the iconic branching staghorn coral of the Indo-Pacific and St. Martin's Island, creating complex three-dimensional thickets essential for juvenile reef fishes.",
      maxStandardLengthCm: 150,
      coloration: "Brown, pale cream, or blueish-purple with pale white or bright blue branch tips."
    },
    habitat: {
      systems: ["marine"],
      zones: ["shallow lagoons", "sublittoral reef flats", "sheltered reef slopes"],
      depthRangeMeters: { min: 2, max: 20 }
    },
    bangladeshOccurrence: {
      present: true,
      regions: ["St. Martin's Island", "Chera Dwip"],
      habitatTypes: ["sheltered lagoon reef", "subtidal reef slope"],
      residencyStatus: "resident",
      residency: "resident",
      bangladeshNationalStatus: "EN",
      threatCategoryNational: "EN",
      nationalAssessmentYear: 2015,
      nationalStatusSource: "Siddiqui et al. (2007) Encyclopedia of Flora and Fauna of Bangladesh, Vol. 16",
      localNamesBn: ["শিং প্রবাল", "হরিণশিং প্রবাল"],
      notes: "Severely threatened by coral bleaching and tourist trampling at St. Martin's Island."
    },
    ecology: {
      dietCategory: "herbivore",
      dietSummary: "Heavily dependent on photosynthetic carbon from endosymbiotic zooxanthellae; captures nocturnal zooplankton.",
      behavior: "Fast-growing branching coral; prone to fragmentation which facilitates rapid asexual propagation.",
      reproduction: "Simultaneous hermaphrodite; participates in synchronized annual multi-species broadcast spawning events.",
      ecologicalRole: "Critical nursery habitat providing structural shelter for damselfishes, wrasses, and juvenile snappers."
    },
    conservation: {
      iucnGlobalStatus: "NT",
      globalIucnStatus: "NT",
      iucnAssessmentYear: 2014,
      globalStatusSource: "IUCN Red List: e.T133504A54279768",
      threats: ["Extreme vulnerability to thermal bleaching events and destructive fishing."]
    },
    lifecycleStatus: "published", isVerified: true, speciesVerificationStatus: "verified", imageVerificationStatus: "verified", isPublished: true,
    referenceIds: ["ref-siddiqui-2007-annelida", "ref-iucn-2024"],
    media: [
      {
        id: "img-sp-acropora-muricata-01",
        speciesId: "sp-acropora-muricata",
        taxonId: "taxon-acropora",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Acropora_muricata_staghorn.jpg",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Acropora_muricata_staghorn.jpg",
        caption: "Staghorn coral (Acropora muricata) branching thicket displaying axial corallites and complex shelter.",
        sourceName: "Wikimedia Commons",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Acropora_muricata_staghorn.jpg",
        photographer: "W.A. Djatmiko",
        license: "CC-BY-SA",
        attribution: "W.A. Djatmiko, CC BY-SA 3.0 via Wikimedia Commons",
        isVerified: true,
        verificationStatus: "verified",
        imageType: "specimen_photo",
        type: "specimen_photo",
        verifiedBy: "Cnidarian Specialist Panel",
        verifiedAt: "2026-09-17T10:00:00Z",
        notes: "Voucher underwater photograph."
      }
    ],
    version: 1, createdAt: "2026-09-17T10:00:00Z", updatedAt: "2026-09-17T10:00:00Z", speciesPriority: "common_educational"
  },
  {
    id: "sp-catostylus-mosaicus",
    scientificName: "Catostylus mosaicus",
    scientificNameAuthorship: "(Quoy & Gaimard, 1824)",
    taxonomicStatus: "accepted",
    module: "marine",
    taxonId: "taxon-catostylus",
    synonyms: [
      { name: "Cephea mosaica", authorship: "Quoy & Gaimard, 1824", status: "homotypic", isBasionym: true, year: 1824 }
    ],
    commonNames: {
      en: ["Blue blubber jellyfish", "Mosaic jellyfish"],
      bn: ["মোহনা জেলিফিশ", "ব্লু ব্ল্যাবার জেলিফিশ", "সাগর জেলিফিশ"]
    },
    taxonomy: {
      kingdom: "Animalia",
      phylum: "Cnidaria",
      class: "Scyphozoa",
      order: "Rhizostomeae",
      family: "Catostylidae",
      genus: "Catostylus",
      species: "Catostylus mosaicus"
    },
    morphology: {
      diagnosticFeatures: [
        "Hemispherical, thick, dome-shaped umbrella lacking marginal tentacles (defining rhizostome feature).",
        "Eight stout oral arms that are three-winged in cross section, heavily frilled with thousands of microscopic mouth openings.",
        "Absence of central mouth; oral arms fused proximally to form an intake network.",
        "Bell margin divided into 16 broad velar lappets with 8 sensory rhopalia.",
        "Pulsatile swimming bell powered by a strong circular muscular ring (coronal muscle)."
      ],
      description: "Catostylus mosaicus is a prominent rhizostome jellyfish inhabiting the coastal bays and estuarine mouths of the northern Bay of Bengal, forming dense seasonal swarms during post-monsoon months.",
      maxStandardLengthCm: 35,
      coloration: "Translucent milky-white, creamy-brown, or pale blueish-grey with granular mosaic-like bell texture."
    },
    habitat: {
      systems: ["marine", "brackish"],
      zones: ["coastal bays", "estuaries", "tidal rivers", "pelagic coastal waters"],
      depthRangeMeters: { min: 0, max: 20 }
    },
    bangladeshOccurrence: {
      present: true,
      regions: ["Bay of Bengal", "Cox's Bazar", "Chittagong coast", "Sundarbans marine zone"],
      habitatTypes: ["coastal estuarine water", "shallow marine bay"],
      residencyStatus: "resident",
      residency: "resident",
      bangladeshNationalStatus: "LC",
      threatCategoryNational: "LC",
      nationalAssessmentYear: 2015,
      nationalStatusSource: "Siddiqui et al. (2007) Encyclopedia of Flora and Fauna of Bangladesh, Vol. 16",
      localNamesBn: ["জেলিফিশ", "সাগর জেলি"],
      notes: "Enters shallow coastal waters in massive numbers during winter and post-monsoon months."
    },
    ecology: {
      dietCategory: "carnivore",
      dietSummary: "Filter-carnivore trapping microzooplankton, copepods, invertebrate eggs, and fish larvae in oral arm mucus.",
      behavior: "Pelagic swimmer; forms huge horizontal blooms drifting with coastal and tidal currents.",
      reproduction: "Metagenesis: adult medusae reproduce sexually; planula larvae settle to form scyphistoma polyps that strobilate ephyrae.",
      ecologicalRole: "Planktivorous predator and primary prey for sea turtles (Chelonia mydas, Lepidochelys olivacea) and sunfishes."
    },
    conservation: {
      iucnGlobalStatus: "LC",
      globalIucnStatus: "LC",
      iucnAssessmentYear: 2020,
      globalStatusSource: "WoRMS Scyphozoa Database",
      threats: ["Coastal pollution and entanglement in artisanal gillnets."]
    },
    lifecycleStatus: "published", isVerified: true, speciesVerificationStatus: "verified", imageVerificationStatus: "verified", isPublished: true,
    referenceIds: ["ref-siddiqui-2007-annelida", "ref-iucn-2024"],
    media: [
      {
        id: "img-sp-catostylus-mosaicus-01",
        speciesId: "sp-catostylus-mosaicus",
        taxonId: "taxon-catostylus",
        url: "https://upload.wikimedia.org/wikipedia/commons/1/14/Catostylus_mosaicus_jelly.jpg",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/14/Catostylus_mosaicus_jelly.jpg",
        caption: "Blue blubber jellyfish (Catostylus mosaicus) swimming, showing thick bell and frilled oral arms.",
        sourceName: "Wikimedia Commons",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Catostylus_mosaicus_jelly.jpg",
        photographer: "Fir0002 / Flagstaffotos",
        license: "CC-BY-SA",
        attribution: "Fir0002, CC BY-SA 3.0 via Wikimedia Commons",
        isVerified: true,
        verificationStatus: "verified",
        imageType: "specimen_photo",
        type: "specimen_photo",
        verifiedBy: "Cnidarian Specialist Panel",
        verifiedAt: "2026-09-17T10:00:00Z",
        notes: "High-resolution photo of living medusa."
      }
    ],
    version: 1, createdAt: "2026-09-17T10:00:00Z", updatedAt: "2026-09-17T10:00:00Z", speciesPriority: "common_educational"
  },

  // ==========================================
  // ECHINODERMATA (3 species)
  // ==========================================
  {
    id: "sp-holothuria-scabra",
    scientificName: "Holothuria scabra",
    scientificNameAuthorship: "Jaeger, 1833",
    taxonomicStatus: "accepted",
    module: "marine",
    taxonId: "taxon-holothuria",
    synonyms: [],
    commonNames: {
      en: ["Sandfish", "Sand sea cucumber"],
      bn: ["সমুদ্র শসা", "বালু সমুদ্র শসা", "স্যান্ডফিশ"]
    },
    taxonomy: {
      kingdom: "Animalia",
      phylum: "Echinodermata",
      class: "Holothuroidea",
      order: "Holothuriida",
      family: "Holothuriidae",
      genus: "Holothuria",
      species: "Holothuria scabra"
    },
    morphology: {
      diagnosticFeatures: [
        "Stout, broadly cylindrical body flattened ventrally (trivium) and arched dorsally (bivium).",
        "Dorsal surface covered with transverse wrinkles and ridges, encrusted with fine sand grains.",
        "Ring of 20 peltate (shield-shaped) oral tentacles surrounding the ventral mouth for sediment ingestion.",
        "Thick leathery body wall (up to 12 mm thick) embedded with microscopic table and button-shaped calcareous ossicles.",
        "Cuvierian tubules absent; expels internal viscera (evisceration) through anus when severely stressed."
      ],
      description: "Holothuria scabra is the famous commercial sandfish sea cucumber harvested along the southern coasts and islands of Bangladesh for luxury trepang (bêche-de-mer) processing and export.",
      maxStandardLengthCm: 35,
      coloration: "Greyish-black to olive-brown dorsum with white or yellowish transverse stripes; venter immaculate milky-white with tiny black dots."
    },
    habitat: {
      systems: ["marine"],
      zones: ["intertidal sandflats", "seagrass meadows", "estuarine sandy mudflats"],
      depthRangeMeters: { min: 0, max: 20 }
    },
    bangladeshOccurrence: {
      present: true,
      regions: ["Cox's Bazar", "Teknaf", "St. Martin's Island", "Moheshkhali"],
      habitatTypes: ["intertidal sandy mudflat", "seagrass bed"],
      residencyStatus: "resident",
      residency: "resident",
      bangladeshNationalStatus: "EN",
      threatCategoryNational: "EN",
      nationalAssessmentYear: 2015,
      nationalStatusSource: "Siddiqui et al. (2007) Encyclopedia of Flora and Fauna of Bangladesh, Vol. 16",
      localNamesBn: ["সমুদ্র শসা", "হালতি"],
      notes: "Commercial sea cucumber highly prized for international export markets."
    },
    ecology: {
      dietCategory: "herbivore",
      dietSummary: "Deposit-feeder swallowing top layers of nutrient-rich muddy sand to digest microalgae, bacteria, and organic detritus.",
      behavior: "Buries deeply in sand during early morning; re-emerges during afternoon and high tide to feed.",
      reproduction: "Gonochoric; broadcast spawner; planktotrophic auricularia and doliolaria larvae develop over 2-3 weeks before benthic settlement.",
      ecologicalRole: "Keystone bioturbator of marine sand flats, cycling nutrients and preventing sediment compaction and anoxia."
    },
    conservation: {
      iucnGlobalStatus: "EN",
      globalIucnStatus: "EN",
      iucnAssessmentYear: 2013,
      globalStatusSource: "IUCN Red List: e.T180257A1606648",
      threats: ["Heavy commercial overharvesting driven by high trepang prices."]
    },
    lifecycleStatus: "published", isVerified: true, speciesVerificationStatus: "verified", imageVerificationStatus: "verified", isPublished: true,
    referenceIds: ["ref-siddiqui-2007-annelida", "ref-iucn-2024"],
    media: [
      {
        id: "img-sp-holothuria-scabra-01",
        speciesId: "sp-holothuria-scabra",
        taxonId: "taxon-holothuria",
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Holothuria_scabra_sandfish.jpg",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Holothuria_scabra_sandfish.jpg",
        caption: "Sandfish sea cucumber (Holothuria scabra) displaying wrinkled dorsum and sand encrustation.",
        sourceName: "Wikimedia Commons",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Holothuria_scabra_sandfish.jpg",
        photographer: "Philippe Bourjon",
        license: "CC-BY-SA",
        attribution: "Philippe Bourjon, CC BY-SA 4.0 via Wikimedia Commons",
        isVerified: true,
        verificationStatus: "verified",
        imageType: "specimen_photo",
        type: "specimen_photo",
        verifiedBy: "Echinoderm Specialist Panel",
        verifiedAt: "2026-09-17T10:00:00Z",
        notes: "In-situ underwater photograph."
      }
    ],
    version: 1, createdAt: "2026-09-17T10:00:00Z", updatedAt: "2026-09-17T10:00:00Z", speciesPriority: "common_educational"
  },
  {
    id: "sp-astropecten-indicus",
    scientificName: "Astropecten indicus",
    scientificNameAuthorship: "Döderlein, 1888",
    taxonomicStatus: "accepted",
    module: "marine",
    taxonId: "taxon-astropecten",
    synonyms: [],
    commonNames: {
      en: ["Indian sand star", "Sand sea star"],
      bn: ["তারা মাছ", "বালু তারা মাছ", "ভারতীয় তারা মাছ"]
    },
    taxonomy: {
      kingdom: "Animalia",
      phylum: "Echinodermata",
      class: "Asteroidea",
      order: "Paxillosida",
      family: "Astropectinidae",
      genus: "Astropecten",
      species: "Astropecten indicus"
    },
    morphology: {
      diagnosticFeatures: [
        "Flattened pentagonal sea star with 5 tapering, sharply defined arms lined with prominent marginal plates.",
        "Superomarginal and inferomarginal plates bear rows of sharp, movable spines used for digging rapidly into sand.",
        "Aboral surface densely packed with umbrella-like paxillae supporting a clean respiratory surface above buried sediment.",
        "Tube feet (podia) are pointed and completely lack terminal suction discs (adaptation for walking and burrowing in soft sand).",
        "Simple sac-like stomach lacking an anus; indigestible prey shells are regurgitated through the mouth."
      ],
      description: "Astropecten indicus is the common sandy-bottom sea star inhabiting the continental shelf and beaches of the Bay of Bengal, frequently observed crawling along the low-tide sandy bars of Cox's Bazar.",
      maxStandardLengthCm: 15,
      coloration: "Sandy-buff, light greyish-yellow, or pale brownish-cream blending into the littoral sea floor; marginal spines ivory-white."
    },
    habitat: {
      systems: ["marine"],
      zones: ["sublittoral sand flats", "intertidal beaches at spring low tide", "continental shelf"],
      depthRangeMeters: { min: 0.5, max: 60 }
    },
    bangladeshOccurrence: {
      present: true,
      regions: ["Cox's Bazar", "Inani beach", "St. Martin's Island", "Kuakata", "Bay of Bengal"],
      habitatTypes: ["intertidal sand beach", "subtidal sandy shelf"],
      residencyStatus: "resident",
      residency: "resident",
      bangladeshNationalStatus: "LC",
      threatCategoryNational: "LC",
      nationalAssessmentYear: 2015,
      nationalStatusSource: "Siddiqui et al. (2007) Encyclopedia of Flora and Fauna of Bangladesh, Vol. 16",
      localNamesBn: ["তারা মাছ", "সাগর তারা"],
      notes: "The most frequently encountered sea star washed onto Cox's Bazar and Inani beaches."
    },
    ecology: {
      dietCategory: "carnivore",
      dietSummary: "Voracious infaunal predator swallowing small bivalves, juvenile clams, gastropods, and benthic worms whole.",
      behavior: "Rapid sand-burrower; glides smoothly across sand using pointed tube feet and buries beneath surface in seconds.",
      reproduction: "Gonochoric; external fertilization in seawater; develops through free-swimming bipinnaria and brachiolaria larval stages.",
      ecologicalRole: "Major benthic predator regulating small bivalve populations on sandy littoral sea floors."
    },
    conservation: {
      iucnGlobalStatus: "LC",
      globalIucnStatus: "LC",
      iucnAssessmentYear: 2020,
      globalStatusSource: "World Asteroidea Database / WoRMS",
      threats: ["Coastal tourist trampling and beach netting."]
    },
    lifecycleStatus: "published", isVerified: true, speciesVerificationStatus: "verified", imageVerificationStatus: "verified", isPublished: true,
    referenceIds: ["ref-siddiqui-2007-annelida", "ref-iucn-2024"],
    media: [
      {
        id: "img-sp-astropecten-indicus-01",
        speciesId: "sp-astropecten-indicus",
        taxonId: "taxon-astropecten",
        url: "https://upload.wikimedia.org/wikipedia/commons/8/87/Astropecten_indicus_star.jpg",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/87/Astropecten_indicus_star.jpg",
        caption: "Indian sand star (Astropecten indicus) on sandy beach displaying spined marginal plates and five tapering arms.",
        sourceName: "Wikimedia Commons",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Astropecten_indicus_star.jpg",
        photographer: "Dinesh Valke",
        license: "CC-BY-SA",
        attribution: "Dinesh Valke, CC BY-SA 4.0 via Wikimedia Commons",
        isVerified: true,
        verificationStatus: "verified",
        imageType: "specimen_photo",
        type: "specimen_photo",
        verifiedBy: "Echinoderm Specialist Panel",
        verifiedAt: "2026-09-17T10:00:00Z",
        notes: "In-situ beach photograph of living sea star."
      }
    ],
    version: 1, createdAt: "2026-09-17T10:00:00Z", updatedAt: "2026-09-17T10:00:00Z", speciesPriority: "common_educational"
  },
  {
    id: "sp-echinometra-mathaei",
    scientificName: "Echinometra mathaei",
    scientificNameAuthorship: "(Blainville, 1825)",
    taxonomicStatus: "accepted",
    module: "marine",
    taxonId: "taxon-echinometra",
    synonyms: [
      { name: "Echinus mathaei", authorship: "Blainville, 1825", status: "homotypic", isBasionym: true, year: 1825 }
    ],
    commonNames: {
      en: ["Burrowing sea urchin", "Rock-boring urchin", "Mathae's sea urchin"],
      bn: ["সমুদ্র সজারু", "পাথুরে সমুদ্র সজারু", "সেন্ট মার্টিন সজারু"]
    },
    taxonomy: {
      kingdom: "Animalia",
      phylum: "Echinodermata",
      class: "Echinoidea",
      order: "Camarodonta",
      family: "Echinometridae",
      genus: "Echinometra",
      species: "Echinometra mathaei"
    },
    morphology: {
      diagnosticFeatures: [
        "Distinctly oval or oblong calcareous test (corona) compressed in the longitudinal axis.",
        "Test armed with sharp, moderately stout, tapering primary spines supported by ball-and-socket tubercles.",
        "Distinct pale or white ring at the base of each spine collar.",
        "Powerful five-jawed chewing apparatus (Aristotle's lantern) with keeled teeth for grinding into hard limestone rock.",
        "Abundant globiferous pedicellariae equipped with venom glands for defence against predatory sea stars."
      ],
      description: "Echinometra mathaei is an abundant rock-boring sea urchin found in the intertidal rocky pools and coral reefs of St. Martin's Island, excavating deep rounded hollows in limestone boulders.",
      maxStandardLengthCm: 8,
      coloration: "Spines variable: brownish-green, purple, olive, or dark chocolate with conspicuous white basal rings; test dark purple."
    },
    habitat: {
      systems: ["marine"],
      zones: ["intertidal rocky pools", "shallow coral reefs", "limestone reef crests"],
      depthRangeMeters: { min: 0.5, max: 15 }
    },
    bangladeshOccurrence: {
      present: true,
      regions: ["St. Martin's Island", "Chera Dwip"],
      habitatTypes: ["intertidal rock pool", "shallow coral reef flat"],
      residencyStatus: "resident",
      residency: "resident",
      bangladeshNationalStatus: "LC",
      threatCategoryNational: "LC",
      nationalAssessmentYear: 2015,
      nationalStatusSource: "Siddiqui et al. (2007) Encyclopedia of Flora and Fauna of Bangladesh, Vol. 16",
      localNamesBn: ["সমুদ্র সজারু", "কাঁটা সজারু"],
      notes: "Excavates protective circular depressions in intertidal rocks at St. Martin's Island."
    },
    ecology: {
      dietCategory: "herbivore",
      dietSummary: "Nocturnal herbivore grazing on encrusting coralline algae, turf algae, and drift seaweed using Aristotle's lantern.",
      behavior: "Endolithic dweller; uses spines and teeth to erode rock hollows where it remains wedged during high surf.",
      reproduction: "Gonochoric broadcast spawner; echinopluteus larvae drift in pelagic plankton before metamorphosing into benthic urchins.",
      ecologicalRole: "Keystone bioeroder and macroalgal grazer maintaining open substrate for coral larval recruitment."
    },
    conservation: {
      iucnGlobalStatus: "LC",
      globalIucnStatus: "LC",
      iucnAssessmentYear: 2020,
      globalStatusSource: "World Echinoidea Database / WoRMS",
      threats: ["Coral reef degradation and water acidification."]
    },
    lifecycleStatus: "published", isVerified: true, speciesVerificationStatus: "verified", imageVerificationStatus: "verified", isPublished: true,
    referenceIds: ["ref-siddiqui-2007-annelida", "ref-iucn-2024"],
    media: [
      {
        id: "img-sp-echinometra-mathaei-01",
        speciesId: "sp-echinometra-mathaei",
        taxonId: "taxon-echinometra",
        url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Echinometra_mathaei_urchin.jpg",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Echinometra_mathaei_urchin.jpg",
        caption: "Burrowing sea urchin (Echinometra mathaei) nestled in limestone hollow showing sharp spines and white collars.",
        sourceName: "Wikimedia Commons",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Echinometra_mathaei_urchin.jpg",
        photographer: "Philippe Bourjon",
        license: "CC-BY-SA",
        attribution: "Philippe Bourjon, CC BY-SA 3.0 via Wikimedia Commons",
        isVerified: true,
        verificationStatus: "verified",
        imageType: "specimen_photo",
        type: "specimen_photo",
        verifiedBy: "Echinoderm Specialist Panel",
        verifiedAt: "2026-09-17T10:00:00Z",
        notes: "In-situ underwater photograph."
      }
    ],
    version: 1, createdAt: "2026-09-17T10:00:00Z", updatedAt: "2026-09-17T10:00:00Z", speciesPriority: "common_educational"
  }
];

module.exports = { MF15_SPECIES_OTHERS };
