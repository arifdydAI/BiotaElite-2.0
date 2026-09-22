// src/data/evolutionData.ts
// Authoritative Evolutionary Timelines, Major Transitions & Cladistic Phylogenetic Tree
// References: Hickman et al. (2020), Nielsen (2012), Benton (2015), Ruppert et al. (2004)

export interface GeologicalPeriod {
  id: string;
  era: 'Precambrian' | 'Paleozoic' | 'Mesozoic' | 'Cenozoic';
  period: string;
  periodBn: string;
  timeRangeMya: string;
  keyZoologicalEventsEn: string[];
  keyZoologicalEventsBn: string[];
  dominantFauna: string;
}

export interface EvolutionaryTransition {
  id: string;
  milestone: string;
  milestoneBn: string;
  estimatedAgeMya: string;
  synapomorphyEn: string;
  synapomorphyBn: string;
  biologicalImpactEn: string;
  biologicalImpactBn: string;
  ancestralTaxa: string;
  derivedClades: string;
}

export interface PhylogeneticNode {
  id: string;
  name: string;
  nameBn: string;
  cladeType: 'domain' | 'kingdom' | 'subkingdom' | 'clade' | 'phylum' | 'subphylum' | 'class';
  parentCladeId: string | null;
  divergenceMya: string;
  synapomorphies: { en: string[]; bn: string[] };
  sisterGroup?: string;
  descriptionEn: string;
  descriptionBn: string;
  canonicalExamples: string[];
}

export interface EvolutionaryConcept {
  id: string;
  title: string;
  titleBn: string;
  category: 'mechanism' | 'pattern' | 'evidence' | 'macroevolution';
  definitionEn: string;
  definitionBn: string;
  keyPrinciples: Array<{ principleEn: string; principleBn: string }>;
  zoologicalExamples: Array<{ taxonGroup: string; exampleEn: string; exampleBn: string; speciesId?: string }>;
  significanceEn: string;
  significanceBn: string;
}

export const GEOLOGICAL_TIMESCALE: GeologicalPeriod[] = [
  {
    id: "geo-ediacaran",
    era: "Precambrian",
    period: "Ediacaran Period",
    periodBn: "এডিয়াকারান যুগ",
    timeRangeMya: "635 – 541 Mya",
    keyZoologicalEventsEn: [
      "First definitive macroscopic multicellular soft-bodied animal communities (Ediacaran Biota: Dickinsonia, Kimberella)",
      "Origin of basal Metazoan diploblastic body plans (sponges and cnidarian-grade organisms)",
      "Primitive microbial mat grazing without evidence of mineralized skeletonization"
    ],
    keyZoologicalEventsBn: [
      "প্রথম দৃশ্যমান বহুকোষী নরম দেহের প্রাণী সম্প্রদায়ের আবির্ভাব (ডিকিনসোনিয়া, কিম্বেরেলা)",
      "আদি স্পঞ্জ ও নিডারিয়া মাত্রার দ্বিভ্রূণস্তরী প্রাণীদের উদ্ভব",
      "কঙ্কালবিহীন অমেরুদণ্ডী জীবের তলদেশে বিচরণ"
    ],
    dominantFauna: "Enigmatic frond-like, disc-shaped, and quilted benthic metazoans"
  },
  {
    id: "geo-cambrian",
    era: "Paleozoic",
    period: "Cambrian Period",
    periodBn: "ক্যাম্ব্রিয়ান যুগ",
    timeRangeMya: "541 – 485 Mya",
    keyZoologicalEventsEn: [
      "The 'Cambrian Explosion': geologically sudden emergence of virtually all extant animal phyla within ~20 million years",
      "Evolution of mineralized exoskeletons (trilobites) and advanced predatory sensory systems",
      "Emergence of earliest stem chordates and primitive jawless craniates (Haikouichthys, Myllokunmingia)"
    ],
    keyZoologicalEventsBn: [
      "'ক্যাম্ব্রিয়ান বিস্ফোরণ': মাত্র ২ কোটি বছরের মধ্যে প্রায় সকল প্রধান প্রাণী পর্বের একযোগে দ্রুত বিকাশ",
      "কঠিন কঙ্কাল (ট্রাইলোবাইট) ও উন্নত চোখের বিবর্তন",
      "প্রথম আদি কর্ডাট ও মেরুদণ্ডী পূর্বপুরুষের উদ্ভব (হাইকাউইকথিস)"
    ],
    dominantFauna: "Trilobites, brachiopods, anomalocaridid apex predators, primitive sponges"
  },
  {
    id: "geo-ordovician",
    era: "Paleozoic",
    period: "Ordovician Period",
    periodBn: "অর্ডোভিশিয়ান যুগ",
    timeRangeMya: "485 – 444 Mya",
    keyZoologicalEventsEn: [
      "Great Ordovician Biodiversification Event (GOBE): fourfold increase in marine invertebrate family diversity",
      "Extensive radiation of jawless armored ostracoderm fishes (stem Gnathostomata / Agnatha)",
      "First primitive microfossils of land plants and fungal hyphae appear along wet shorelines",
      "End-Ordovician Mass Extinction (Hirnantian glaciation): eliminates ~85% of all marine animal species"
    ],
    keyZoologicalEventsBn: [
      "গ্রেট অর্ডোভিশিয়ান জীববৈচিত্র্যায়ন (GOBE): সামুদ্রিক অমেরুদণ্ডী প্রাণীদের পরিবার চারগুণ বৃদ্ধি পায়",
      "চোয়ালবিহীন বর্মযুক্ত মাছের (অস্ট্রাকোডার্ম) বিকাশ ও প্রথম মেরুদণ্ডী অভিযোজন",
      "উপকূলীয় ভেজা পাথরে আদিম স্থলজ উদ্ভিদ রেণু ও ছত্রাকের প্রথম পদচিহ্ন",
      "হিরন্যানশিয়ান বরফযুগের কারণে অর্ডোভিশিয়ান মহাবিলুপ্তিতে ৮৫% সামুদ্রিক প্রজাতি ধ্বংস হয়"
    ],
    dominantFauna: "Orthoconic nautiloids, conodonts, graptolites, trilobites, primitive armored ostracoderms"
  },
  {
    id: "geo-silurian",
    era: "Paleozoic",
    period: "Silurian Period",
    periodBn: "সিলুরিয়ান যুগ",
    timeRangeMya: "444 – 419 Mya",
    keyZoologicalEventsEn: [
      "Origin and rapid evolution of jawed vertebrates (Gnathostomata) from anterior gill arch modifications",
      "First true bony fishes (Osteichthyes) and cartilaginous fishes (Chondrichthyes) emerge in marine/estuarine waters",
      "Widespread diversification of tabulate and rugose coral reef ecosystems globally",
      "Terrestrial colonization: earliest definitive terrestrial animals (trigonotarbid arachnids, millipedes) breathe air"
    ],
    keyZoologicalEventsBn: [
      "গলবিলীয় ফুলকা খিলান থেকে প্রথম চোয়ালযুক্ত মেরুদণ্ডী (ন্যাথোস্টোমাটা) মাছের সফল বিবর্তন",
      "প্রথম প্রকৃত অস্থিময় ও তরুণাস্থিময় মাছের উদ্ভব",
      "বিশ্বজুড়ে বিস্তৃত প্রবাল প্রাচীর বাস্তুতন্ত্রের ব্যাপক বিস্তার",
      "স্থলভাগে প্রথম বাতাসী প্রাণী: ট্রাইগোনোটরবিড বিছে ও শতপদীর সফল পদার্পণ"
    ],
    dominantFauna: "Giant eurypterids (sea scorpions), early acanthodian fishes, tabulate corals, brachiopods"
  },
  {
    id: "geo-devonian",
    era: "Paleozoic",
    period: "Devonian Period ('Age of Fishes')",
    periodBn: "ডেভোনিয়ান যুগ ('মাছের যুগ')",
    timeRangeMya: "419 – 359 Mya",
    keyZoologicalEventsEn: [
      "Explosive radiation of living fish lineages: Placoderms, Chondrichthyes, Actinopterygii, and Sarcopterygii",
      "Evolution of the tetrapod limb from sarcopterygian rhipidistian fins (Tiktaalik, Acanthostega, Ichthyostega)",
      "First terrestrial amphibians venture onto land margins; wingless hexapod insects appear",
      "Late Devonian Kellwasser and Hangenberg extinction events devastate marine reef complexes and placoderms"
    ],
    keyZoologicalEventsBn: [
      "মাছের স্বর্ণযুগ: আর্মার্ড প্লাকোডার্ম, তরুণাস্থিময় ও রশ্মিময় পাখনাযুক্ত মাছের ব্যাপক বিস্তার",
      "লোব-ফিন মাছের পাখনা থেকে চতুষ্পদী চার পায়ের রূপান্তর (টিকটালিক, একান্থোস্টেগা, ইকথিওস্টেগা)",
      "ডাঙায় প্রথম উভচর প্রাণীদের পদার্পণ এবং ডানাহীন পতঙ্গের উদ্ভব",
      "শেষ ডেভোনিয়ান বিলুপ্তিতে প্লাকোডার্ম ও প্রবাল প্রাচীর ভীষণভাবে ক্ষতিগ্রস্ত হয়"
    ],
    dominantFauna: "Placoderms (Dunkleosteus), ammonites, sarcopterygian lungfishes, stem tetrapods"
  },
  {
    id: "geo-carboniferous",
    era: "Paleozoic",
    period: "Carboniferous Period ('Age of Amphibians')",
    periodBn: "কার্বনিফেরাস যুগ ('উভচরের যুগ')",
    timeRangeMya: "359 – 299 Mya",
    keyZoologicalEventsEn: [
      "Evolution of the cleidoic amniotic egg (~312 Mya), emancipating vertebrate reproduction completely from water bodies",
      "Divergence of Amniota into Synapsida (ancestral mammal lineage) and Sauropsida (reptile & avian lineage)",
      "High atmospheric O₂ (~35%) fuels giant arthropod gigantism: Meganeura (70 cm wingspan dragonfly), Arthropleura (2.5 m millipede)",
      "Radiation of diverse temnospondyl and lepospondyl amphibians in vast swamp forests"
    ],
    keyZoologicalEventsBn: [
      "অ্যামনিওটিক ডিম্ব (~৩১২ নিযুত বছর আগে) যা মেরুদণ্ডীদের প্রজননকে পানি থেকে চিরতরে মুক্ত করে",
      "অ্যামনিওটার দুটি ধারায় বিভাজন: সিন্যাপসিডা (স্তন্যপায়ী শাখা) ও সরোপসিডা (সরীসৃপ-পাখি শাখা)",
      "বায়ুমণ্ডলে ৩৫% অক্সিজেনের কারণে দানবীয় পতঙ্গ: মেগানুরা ফড়িং ও বিশাল আর্থ্রোপ্লিউরার বিচরণ",
      "বিশাল পিট কয়লা জলাভূমিতে উভচরদের অভূতপূর্ব বিস্তার"
    ],
    dominantFauna: "Giant amphibians (Eryops), giant arthropods (Meganeura), early basal amniotes (Hylonomus)"
  },
  {
    id: "geo-permian",
    era: "Paleozoic",
    period: "Permian Period",
    periodBn: "পারমিয়ান যুগ",
    timeRangeMya: "299 – 252 Mya",
    keyZoologicalEventsEn: [
      "Synapsid dominance: sail-backed pelycosaurs (Dimetrodon) and advanced therapsid 'mammal-like reptiles'",
      "Radiation of herbivorous and carnivorous therapsids displaying differentiated heterodont dentition and endothermic trends",
      "Permian-Triassic Extinction ('The Great Dying', 252 Mya): Siberian Traps volcanism kills 96% marine and 70% terrestrial species",
      "Extinction of trilobites, eurypterids, and major Paleozoic coral groups"
    ],
    keyZoologicalEventsBn: [
      "সিন্যাপসিডদের আধিপত্য: ডাইমেট্রোডন ও উন্নত থেরাপসিডদের (স্তন্যপায়ীর পূর্বসূরি) বিস্তার",
      "দাঁতের বিশেষায়ন (হেটারোডন্ট) এবং প্রথম এন্ডোথার্মিক বা উষ্ণরক্তের প্রবণতার বিকাশ",
      "পারমিয়ান মহাবিলুপ্তি ('দ্য গ্রেট ডাইং', ২৫২ নিযুত বছর আগে): পৃথিবীর ৯৬% সামুদ্রিক ও ৭০% স্থলজ প্রজাতি চিরতরে নিশ্চিহ্ন",
      "ট্রাইলোবাইট, সমুদ্র-বিছে ও প্রাচীন প্রবাল চিরতরে হারিয়ে যায়"
    ],
    dominantFauna: "Pelycosaurs (Dimetrodon), gorgonopsians, dicynodonts, pareiasaurs"
  },
  {
    id: "geo-triassic",
    era: "Mesozoic",
    period: "Triassic Period",
    periodBn: "ট্রায়াসিক যুগ",
    timeRangeMya: "252 – 201 Mya",
    keyZoologicalEventsEn: [
      "Ecological recovery and emergence of Archosauria, splitting into crocodylian and avian/dinosaurian stem lines",
      "Origin of first true dinosaurs (Herrerasaurus, Coelophysis) and pterosaurs (first flying vertebrates)",
      "Origin of true Mammalia from cynodont therapsids in the Late Triassic (~220 Mya)",
      "End-Triassic Mass Extinction (CAMP volcanism) eliminates pseudosuchians, clearing niches for dinosaur dominance"
    ],
    keyZoologicalEventsBn: [
      "পারমিয়ান পরবর্তী পুনরুদ্ধার এবং আর্কোসরদের উদ্ভব যা কুমির ও ডাইনোসর-পাখি শাখায় বিভক্ত হয়",
      "প্রথম প্রকৃত ডাইনোসর ও উড়ন্ত টেরোসরদের আবির্ভাব",
      "সিনোডন্ট থেরাপসিড থেকে লেট ট্রায়াসিকে প্রথম প্রকৃত স্তন্যপায়ীর উদ্ভব (~২২০ নিযুত বছর আগে)",
      "ট্রায়াসিক-জুরাসিক বিলুপ্তিতে প্রতিযোগী আর্কোসররা নিশ্চিহ্ন হয়ে ডাইনোসরদের আধিপত্যের পথ খুলে দেয়"
    ],
    dominantFauna: "Early dinosaurs, cynodonts, early crocodylomorphs, ichthyosaurs, rhynchosaurs"
  },
  {
    id: "geo-jurassic",
    era: "Mesozoic",
    period: "Jurassic Period",
    periodBn: "জুরাসিক যুগ",
    timeRangeMya: "201 – 145 Mya",
    keyZoologicalEventsEn: [
      "Golden Age of Dinosaurs: massive sauropods (Brachiosaurus, Diplodocus) and apex theropods (Allosaurus)",
      "Origin of Birds (Aves): Archaeopteryx (~150 Mya) demonstrates transitional mix of dinosaurian teeth/tail and avian flight feathers",
      "Marine ecosystems dominated by plesiosaurs, ichthyosaurs, and modern ammonite radiations",
      "Mammals diversify into insectivorous, gliding, and burrowing nocturnal niches"
    ],
    keyZoologicalEventsBn: [
      "ডাইনোসরদের স্বর্ণযুগ: দানবীয় সরোপড (ব্র্যাকিওসরাস) এবং শীর্ষ শিকারী থেরোপড (অ্যালোসরাস)",
      "পাখির উৎপত্তি: আর্কিওপটেরিক্স (~১৫০ নিযুত বছর আগে) ডাইনোসরের দাঁত ও লেজের সাথে পাখির উড্ডয়ন পালকের নিখুঁত রূপান্তর",
      "প্লেসিওসর ও ইকথিসরে ভরা মহাসমুদ্র",
      "ছোট নিশাচর স্তন্যপায়ীদের পোকা-শিকার ও গাছে চড়ার বৈচিত্র্যময় রূপ"
    ],
    dominantFauna: "Sauropod and theropod dinosaurs, Archaeopteryx, pterosaurs, plesiosaurs, ammonites"
  },
  {
    id: "geo-cretaceous",
    era: "Mesozoic",
    period: "Cretaceous Period",
    periodBn: "ক্রিটেশিয়াস যুগ",
    timeRangeMya: "145 – 66 Mya",
    keyZoologicalEventsEn: [
      "Apex dinosaur radiation: Tyrannosaurus, ceratopsians (Triceratops), hadrosaurs with complex dental batteries",
      "Co-evolution with angiosperms: explosive radiation of flowering plants and pollinating insects (bees, butterflies, ants)",
      "Modern teleost fish radiation begins in shallow epicontinental seas",
      "Cretaceous-Paleogene (K-Pg) Extinction (66 Mya): Chicxulub asteroid impact wipes out non-avian dinosaurs, pterosaurs, and ammonites"
    ],
    keyZoologicalEventsBn: [
      "ডাইনোসরদের চূড়ান্ত বিকাশ: টিরানোসরাস, ট্রাইসেরাটপস এবং জটিল দাঁতের সমন্বয়যুক্ত হ্যাড্রোসর",
      "সপুষ্পক উদ্ভিদের সাথে পরাগায়নকারী মৌমাছি, প্রজাপতি ও পিঁপড়ের দ্রুত যৌথ বিবর্তন",
      "আধুনিক টেলিওস্ট মাছের সমুদ্র ও নদীতে বিশাল বৈচিত্র্যায়ন",
      "চিচুলুব গ্রহাণু আঘাতে ক্রিটেশিয়াস বিলুপ্তিতে অ-উড়ুক্কু ডাইনোসর, টেরোসর ও অ্যামোনাইট সমূলে ধ্বংস"
    ],
    dominantFauna: "Tyrannosaurus rex, Triceratops, mosasaurs, ammonites, early marsupials and placentals"
  },
  {
    id: "geo-paleogene",
    era: "Cenozoic",
    period: "Paleogene Period",
    periodBn: "প্যালিওজিন যুগ",
    timeRangeMya: "66 – 23 Mya",
    keyZoologicalEventsEn: [
      "Rapid mammalian adaptive radiation filling vacant terrestrial and marine ecological niches",
      "Evolution of modern mammal orders: Primates, Cetartiodactyla, Carnivora, Perissodactyla, Rodentia",
      "Cetacean transition from terrestrial artiodactyls (Pakicetus, Ambulocetus, Basilosaurus) to fully marine whales",
      "Radiation of modern birds (Neoaves) and teleost reef fishes"
    ],
    keyZoologicalEventsBn: [
      "ডাইনোসরশূন্য পৃথিবীতে স্তন্যপায়ী প্রাণীদের অবিশ্বাস্য দ্রুত অভিযোজনিক বিকিরণ",
      "আধুনিক স্তন্যপায়ী বর্গের উদ্ভব: প্রাইমেট, সিটার্টিওড্যাকটিলা, কার্নিভোরা, রডেন্ট ইত্যাদি",
      "স্থলজ চতুষ্পদী থেকে সামুদ্রিক তিমির পূর্ণাঙ্গ জলজ রূপান্তর (পাকিসেটাস, অ্যাম্বুলোসেটাস, ব্যাসিলোসরাস)",
      "আধুনিক পাখি (নিওএভিস) ও প্রবাল মাছের বিস্তার"
    ],
    dominantFauna: "Early placental mammals, ancestral whales, terror birds (Phorusrhacidae), early primates"
  },
  {
    id: "geo-neogene",
    era: "Cenozoic",
    period: "Neogene Period",
    periodBn: "নিওজিন যুগ",
    timeRangeMya: "23 – 2.6 Mya",
    keyZoologicalEventsEn: [
      "Expansion of global grasslands (C4 photosynthetic pathways) driving evolution of grazing ungulates and co-evolved predators",
      "Hominoid ape diversification in Africa and Eurasia; emergence of earliest hominins (Sahelanthropus, Ardipithecus, Australopithecus)",
      "Megalodon (Otodus megalodon) reigns as apex marine predator alongside modern cetaceans",
      "Great American Biotic Interchange (GABI) following Isthmus of Panama closure (~3 Mya)"
    ],
    keyZoologicalEventsBn: [
      "বিশ্বজুড়ে তৃণভূমির বিস্তার যা ঘাসখেকো চতুষ্পদী ও শিকারী প্রাণীদের বিবর্তন ঘটায়",
      "আফ্রিকা ও ইউরেশিয়ায় হোমিনিড বানর ও আদিম মানুষ পূর্বপুরুষের উদ্ভব (সাহেলানথ্রোপাস, অস্ট্রেলেপিতেকাস)",
      "মহাসাগরে মেগালোডন হাঙরের রাজত্ব",
      "পানামা যোজক গঠিত হয়ে উত্তর ও দক্ষিণ আমেরিকার প্রাণীদের মহাপরিযায়ী আদান-প্রদান (GABI)"
    ],
    dominantFauna: "Australopithecus, grazing ungulates, saber-toothed cats (Machairodontinae), Megalodon"
  },
  {
    id: "geo-quaternary",
    era: "Cenozoic",
    period: "Quaternary Period ('Age of Humans')",
    periodBn: "কোয়াটারনারি যুগ ('মানুষের যুগ')",
    timeRangeMya: "2.6 Mya – Present",
    keyZoologicalEventsEn: [
      "Cyclical Pleistocene glaciations ('Ice Ages') driving cold-adapted megafauna (Woolly Mammoth, Woolly Rhino)",
      "Evolution, cognitive explosion, tool manufacture, and global dispersal of Homo erectus, Neanderthals, and Homo sapiens",
      "Late Pleistocene Megafaunal Extinction: human overkill and abrupt climate warming eliminate 178 large mammal species",
      "Anthropocene: human agricultural and industrial activity drives the ongoing Sixth Mass Extinction"
    ],
    keyZoologicalEventsBn: [
      "প্লাইস্টোসিন বরফযুগ ও ঠান্ডা-সহনশীল দানব স্তন্যপায়ীর (ম্যামথ, লোমশ গণ্ডার) রাজত্ব",
      "হোমো গণের মস্তিষ্কের দ্রুত বিকাশ, হাতিয়ার নির্মাণ এবং হোমো স্যাপিয়েন্সের বিশ্বজোড়া অভিপ্রয়াণ",
      "শেষ প্লাইস্টোসিনে মানুষের শিকার ও জলবায়ু পরিবর্তনের ফলে ১৭৮টি বৃহৎ স্তন্যপায়ী বিলুপ্ত",
      "বর্তমান অ্যানথ্রোপোসিন: মানুষের অনিয়ন্ত্রিত হস্তক্ষেপে ষষ্ঠ মহাবিলুপ্তির সংকট"
    ],
    dominantFauna: "Homo sapiens, domestic livestock, modern songbirds, teleosts, extant placental mammals"
  }
];

export const MAJOR_EVOLUTIONARY_TRANSITIONS: EvolutionaryTransition[] = [
  {
    id: "trans-multicellularity",
    milestone: "Origin of Multicellularity (Metazoa)",
    milestoneBn: "বহুকোষী প্রাণীর উদ্ভব (মেটাজোয়া)",
    estimatedAgeMya: "~650 – 700 Mya",
    synapomorphyEn: "Intercellular adhesion (cadherins), extracellular collagen matrix, cell differentiation, coordinated gametogenesis.",
    synapomorphyBn: "কোষ-কোষ সংযোগ (ক্যাডেরিন), কোলাজেন ধাত্র, কোষীয় বিভাজন ও জননকোষ গঠন।",
    biologicalImpactEn: "Allowed division of labor among specialized cells, cellular immortality of germ lines, and emergence of large body size.",
    biologicalImpactBn: "কোষের মধ্যে শ্রমবিভাজন এবং এককোষী অবস্থা থেকে বৃহদাকার শরীরের ভিত্তি স্থাপন।",
    ancestralTaxa: "Colonial Choanoflagellates",
    derivedClades: "Phylum Porifera and all Metazoa"
  },
  {
    id: "trans-true-tissues",
    milestone: "Evolution of True Tissues & Germ Layers (Eumetazoa)",
    milestoneBn: "প্রকৃত কলা ও ভ্রূণীয় স্তরের বিকাশ (ইউমেটাজোয়া)",
    estimatedAgeMya: "~600 Mya",
    synapomorphyEn: "Gastrulation forming true germ layers (ectoderm, endoderm), basement membrane, epithelial junctions, nerve net.",
    synapomorphyBn: "গ্যাস্ট্রুলেশন দ্বারা ভ্রূণস্তর (এক্টোডার্ম ও এন্ডোডার্ম) তৈরি, বেসমেন্ট মেমব্রেন ও স্নায়ুজালিকা।",
    biologicalImpactEn: "Coordinated tissue contractions, specialized internal digestive cavities, and sensory responsiveness to predators/prey.",
    biologicalImpactBn: "সমন্বিত পেশি সংকোচন, নির্দিষ্ট পরিপাক গহ্বর এবং সংবেদনশীলতা।",
    ancestralTaxa: "Basal Parazoa",
    derivedClades: "Cnidaria, Ctenophora, Bilateria"
  },
  {
    id: "trans-bilaterality-triploblasty",
    milestone: "Bilateral Symmetry & Triploblasty (Bilateria)",
    milestoneBn: "দ্বিপার্শ্বীয় প্রতিসাম্য ও ত্রিভ্রূণস্তর (বাইলেটেরিয়া)",
    estimatedAgeMya: "~570 – 550 Mya",
    synapomorphyEn: "Third embryonic germ layer (mesoderm), anterior cephalization with concentrated sensory organs, directional locomotion.",
    synapomorphyBn: "তৃতীয় ভ্রূণস্তর মেসোডার্ম, মস্তকীভবন (চোখ ও মস্তিষ্কের বিকাশ) এবং দিকমুখী চলন।",
    biologicalImpactEn: "Enabled active hunting, streamlined directional movement, and true muscular organ systems (heart, kidneys, blood).",
    biologicalImpactBn: "দিকমুখী শিকারী চলন এবং হৃদপিণ্ড ও বৃক্কের মতো জটিল অভ্যন্তরীণ অঙ্গ গঠনের ভিত্তি।",
    ancestralTaxa: "Diploblastic Radiata",
    derivedClades: "Protostomia and Deuterostomia"
  },
  {
    id: "trans-true-coelom",
    milestone: "True Fluid-Filled Coelom (Eucoelomata)",
    milestoneBn: "প্রকৃত সিলোমের বিবর্তন (ইউসিলোমেটা)",
    estimatedAgeMya: "~545 Mya",
    synapomorphyEn: "Secondary body cavity completely lined by mesodermal peritoneum, separating body wall muscles from visceral gut.",
    synapomorphyBn: "মেসোডার্মাল পেরিটোনিয়াম পর্দা দ্বারা পরিবেষ্টিত প্রকৃত দেহগহ্বর।",
    biologicalImpactEn: "Gut can undergo autonomous peristaltic contractions independently of body movements; serves as efficient hydrostatic skeleton.",
    biologicalImpactBn: "দেহের নড়াচড়া ছাড়াই খাদ্যনালীর স্বয়ংক্রিয় চলন এবং অঙ্গগুলোর ভেতর চাপমুক্ত অবস্থানের সুযোগ।",
    ancestralTaxa: "Acoelomate ancestors",
    derivedClades: "Annelida, Mollusca, Arthropoda, Echinodermata, Chordata"
  },
  {
    id: "trans-deuterostome-gastrulation",
    milestone: "Deuterostomy: Blastopore becomes Anus",
    milestoneBn: "ডিউটেরোস্টোমিয় বিকাশ: ব্লাস্টোপোর পায়ুতে রূপান্তর",
    estimatedAgeMya: "~540 Mya",
    synapomorphyEn: "Radial indeterminate cleavage; blastopore develops into the anus, mouth develops secondarily; enterocoelous mesoderm.",
    synapomorphyBn: "অরীয় অনির্ধারিত ক্লিভেজ; ব্লাস্টোপোর পায়ুতে রূপ নেয় এবং মুখ পরে তৈরি হয়।",
    biologicalImpactEn: "Establishes the fundamental embryological lineage linking Echinodermata and Chordata as close evolutionary kin.",
    biologicalImpactBn: "একাইনোডার্ম ও কর্ডাটার মধ্যকার গভীর ভ্রূণতাত্ত্বিক আত্মীয়তা নির্দেশকারী প্রধান বিভাজন।",
    ancestralTaxa: "Stem Bilateria",
    derivedClades: "Echinodermata, Hemichordata, Chordata"
  },
  {
    id: "trans-jaws",
    milestone: "Evolution of Articulated Jaws (Gnathostomata)",
    milestoneBn: "সন্ধিল চোয়ালের উদ্ভাবন (ন্যাথোস্টোমাটা)",
    estimatedAgeMya: "~430 Mya (Early Silurian)",
    synapomorphyEn: "Modification of first skeletal visceral pharyngeal arch (mandibular arch) into motorized upper and lower jaws.",
    synapomorphyBn: "প্রথম গলবিলীয় ফুলকা খিলানটি রূপান্তরিত হয়ে শক্তিশালী উপর ও নিচের চোয়ালে পরিণত হয়।",
    biologicalImpactEn: "Transformed passive mud-grubbing filter-feeders into active macro-predators capable of biting, tearing, and chewing.",
    biologicalImpactBn: "মাটিকে ছেঁকে খাদ্য খাওয়া থেকে প্রাণীদের হিংস্র শিকারী ও চর্বনক্ষম প্রাণীতে রূপান্তর।",
    ancestralTaxa: "Agnathan stem craniates",
    derivedClades: "Chondrichthyes, Osteichthyes, Tetrapoda"
  },
  {
    id: "trans-tetrapod-limb",
    milestone: "Water-to-Land: The Tetrapod Limb (Tetrapoda)",
    milestoneBn: "পানি থেকে ডাঙা: চতুষ্পদী অঙ্গের বিবর্তন (টেট্রাপোডা)",
    estimatedAgeMya: "~375 – 365 Mya (Late Devonian)",
    synapomorphyEn: "Muscular sarcopterygian lobe fin transforms into chiridium (one upper bone, two lower bones, wrist/ankle, and digits).",
    synapomorphyBn: "মাংসল পাখনার অস্থি থেকে হিউমেরাস, রেডিয়াস-উলনা ও আঙুলযুক্ত চার পায়ের অঙ্গের বিকাশ।",
    biologicalImpactEn: "Allowed weight-bearing terrestrial locomotion against gravity, initiating the colonization of dry land continents.",
    biologicalImpactBn: "মাধ্যাকর্ষণের বিরুদ্ধে ডাঙায় দেহের ওজন বহন করে হেঁটে চলার অসাধারণ সক্ষমতা।",
    ancestralTaxa: "Elpistostegalian Sarcopterygii (Tiktaalik-grade)",
    derivedClades: "Amphibia and Amniota"
  },
  {
    id: "trans-amniotic-egg",
    milestone: "The Cleidoic Amniotic Egg (Amniota)",
    milestoneBn: "অ্যামনিওটিক ডিম্ব উদ্ভাবন (অ্যামনিওটা)",
    estimatedAgeMya: "~318 Mya (Carboniferous)",
    synapomorphyEn: "Four specialized extraembryonic membranes (amnion, chorion, allantois, yolk sac) encased in a desiccation-resistant shell.",
    synapomorphyBn: "চারটি বিশেষায়িত ভ্রূণীয় পর্দা (অ্যামনিয়ন, কোরিয়ন, অ্যালানটয়েস ও কুসুমথলি) সমৃদ্ধ খোসাযুক্ত ডিম।",
    biologicalImpactEn: "Severed the cord to aquatic larval reproduction, allowing vertebrates to conquer arid continents permanently.",
    biologicalImpactBn: "প্রজননের জন্য পানিতে ফিরে যাওয়ার বাধ্যবাধকতা দূর করে মরুভূমিসহ সারা ডাঙায় স্থায়ী বিজয়ের সূচনা।",
    ancestralTaxa: "Stem Anthracosaur Tetrapods",
    derivedClades: "Reptilia, Aves, Mammalia"
  }
];

export const PHYLOGENETIC_TREE_NODES: PhylogeneticNode[] = [
  {
    id: "phy-metazoa",
    name: "Metazoa (Kingdom Animalia)",
    nameBn: "মেটাজোয়া (অ্যানিম্যালিয়া জগত)",
    cladeType: "kingdom",
    parentCladeId: null,
    divergenceMya: "~650 Mya",
    synapomorphies: {
      en: ["Multicellularity with cell junctions", "Collagen protein extracellular matrix", "Gastrulation stage in embryogeny", "Unique mitochondrial genetic code"],
      bn: ["কোষ-সংযোগযুক্ত বহুকোষী দেহ", "কোলাজেন প্রোটিন নির্মিত ধাত্র", "ভ্রূণে গ্যাস্ট্রুলেশন দশা", "অনন্য মাইটোকন্ড্রিয়াল জেনেটিক কোড"]
    },
    descriptionEn: "Monophyletic kingdom encompassing all multicellular animals, originating from a flagellated colonial opisthokont ancestor.",
    descriptionBn: "এককোষী কলোনিয়াল পূর্বপুরুষ থেকে উদ্ভূত পৃথিবীর সকল বহুকোষী প্রাণীর মনোফাইলেটিক মূল পর্ব।",
    canonicalExamples: ["All canonical species"]
  },
  {
    id: "phy-parazoa-porifera",
    name: "Phylum Porifera",
    nameBn: "পর্ব পরিফেরা (স্পঞ্জ)",
    cladeType: "phylum",
    parentCladeId: "phy-metazoa",
    divergenceMya: "~635 Mya",
    synapomorphies: {
      en: ["Choanocyte collar chambers", "Internal aquiferous water canal system", "Spicule/spongin skeleton", "Totipotent cellular plasticity"],
      bn: ["চোয়ানোসাইট কলার প্রকোষ্ঠ", "পানি সংবহন নালীতন্ত্র", "স্পিকিউল ও স্পঞ্জিন কঙ্কাল", "কোষের রূপান্তর ক্ষমতা"]
    },
    sisterGroup: "Eumetazoa",
    descriptionEn: "Basal metazoan branch retaining cellular grade organization without true basement membranes or nervous tissue.",
    descriptionBn: "কলাবিহীন কোষীয় মাত্রার আদিমতম বহুকোষী শাখা।",
    canonicalExamples: ["sp-spongilla-lacustris", "sp-cliona-celata"]
  },
  {
    id: "phy-eumetazoa",
    name: "Eumetazoa (True Tissue Animals)",
    nameBn: "ইউমেটাজোয়া (প্রকৃত কলাযুক্ত প্রাণী)",
    cladeType: "clade",
    parentCladeId: "phy-metazoa",
    divergenceMya: "~600 Mya",
    synapomorphies: {
      en: ["True embryonic germ layers", "Basement membrane supporting epithelial sheets", "Specialized gap junctions", "Neurons and chemical synapses", "Gastrovascular cavity"],
      bn: ["প্রকৃত ভ্রূণস্তর", "বেসমেন্ট মেমব্রেনযুক্ত এপিথেলিয়াম", "স্নায়ুকোষ ও সাইন্যাপস", "পৌষ্টিক গহ্বর"]
    },
    descriptionEn: "Clade comprising all animals with genuine organized tissues and nervous coordination.",
    descriptionBn: "সুসংগঠিত কলা ও স্নায়ুতন্ত্র সমৃদ্ধ সকল প্রাণীর প্রধান দল।",
    canonicalExamples: ["All non-sponge species"]
  },
  {
    id: "phy-radiata-cnidaria",
    name: "Phylum Cnidaria",
    nameBn: "পর্ব নিডারিয়া (প্রবাল ও জেলিফিশ)",
    cladeType: "phylum",
    parentCladeId: "phy-eumetazoa",
    divergenceMya: "~580 Mya",
    synapomorphies: {
      en: ["Cnidocytes with nematocysts", "Planula larva", "Radial symmetry around oral-aboral axis", "Dimorphic polyp-medusa life cycle"],
      bn: ["নেমাটোসিস্টযুক্ত নিডোসাইট দংশক কোষ", "প্ল্যানুলা লার্ভা", "অরীয় প্রতিসাম্য", "পলিপ ও মেডুসা দ্বিরূপী রূপ"]
    },
    sisterGroup: "Bilateria",
    descriptionEn: "Diploblastic radiate animals with specialized explosive stinging cnidocytes.",
    descriptionBn: "মেসোগ্লিয়াযুক্ত দ্বিভ্রূণস্তরী দংশক কোষের অধিকারী প্রাণী।",
    canonicalExamples: ["sp-porites-lutea", "sp-catostylus-mosaicus"]
  },
  {
    id: "phy-bilateria",
    name: "Bilateria (Triploblastic Bilateral Animals)",
    nameBn: "বাইলেটেরিয়া (দ্বিপার্শ্বীয় ত্রিভ্রূণস্তরী প্রাণী)",
    cladeType: "clade",
    parentCladeId: "phy-eumetazoa",
    divergenceMya: "~555 Mya",
    synapomorphies: {
      en: ["Bilateral symmetry", "Three germ layers (Mesoderm)", "Cephalization with anterior brain", "Through-gut with mouth and anus (in crown clades)"],
      bn: ["দ্বিপার্শ্বীয় প্রতিসাম্য", "মেসোডার্মযুক্ত ত্রিভ্রূণস্তর", "মস্তকীভবন ও অগ্র মস্তিষ্ক", "মুখ ও পায়ুযুক্ত সম্পূর্ণ অন্ত্র"]
    },
    descriptionEn: "Immense evolutionary lineage of triploblastic cephalized animals divided into Protostomia and Deuterostomia.",
    descriptionBn: "প্রোটোস্টোমিয়া ও ডিউটেরোস্টোমিয়ায় বিভক্ত সকল উন্নত দ্বিপার্শ্বীয় প্রাণীদের মহাদল।",
    canonicalExamples: ["Worms, Molluscs, Arthropods, Echinoderms, Chordates"]
  },
  {
    id: "phy-protostomia",
    name: "Clade Protostomia",
    nameBn: "প্রোটোস্টোমিয়া",
    cladeType: "clade",
    parentCladeId: "phy-bilateria",
    divergenceMya: "~545 Mya",
    synapomorphies: {
      en: ["Spiral determinate cleavage", "Blastopore develops into mouth ('mouth first')", "Schizocoelous coelom formation", "Ventral solid nerve cord"],
      bn: ["স্পাইরাল নির্ধারিত ক্লিভেজ", "ব্লাস্টোপোর প্রথমে মুখে পরিণত হয়", "সাইজোসিল সিলোম", "অঙ্কীয় কঠিন স্নায়ুরজ্জু"]
    },
    sisterGroup: "Deuterostomia",
    descriptionEn: "Major bilaterian branch comprising Lophotrochozoa (Annelids, Molluscs, Flatworms) and Ecdysozoa (Arthropods, Nematodes).",
    descriptionBn: "দ্বিপার্শ্বীয় প্রাণীদের প্রধান শাখা যাতে অ্যানেলিডা, মলাস্কা ও আর্থ্রোপোডা অন্তর্ভুক্ত।",
    canonicalExamples: ["sp-metaphire-posthuma", "sp-pila-globosa", "sp-macrobrachium-rosenbergii"]
  },
  {
    id: "phy-deuterostomia",
    name: "Clade Deuterostomia",
    nameBn: "ডিউটেরোস্টোমিয়া",
    cladeType: "clade",
    parentCladeId: "phy-bilateria",
    divergenceMya: "~545 Mya",
    synapomorphies: {
      en: ["Radial indeterminate cleavage", "Blastopore becomes anus; mouth develops secondarily", "Enterocoelous coelom", "Pharyngeal gill slits in ancestral stock"],
      bn: ["অরীয় অনির্ধারিত ক্লিভেজ", "ব্লাস্টোপোর পায়ুতে রূপ নেয় এবং মুখ পরে তৈরি হয়", "এন্টেরোসিল সিলোম"]
    },
    sisterGroup: "Protostomia",
    descriptionEn: "Major bilaterian branch linking Echinoderms, Hemichordates, and Chordates.",
    descriptionBn: "একাইনোডার্ম ও কর্ডাটা সমন্বিত প্রধান বিবর্তনীয় শাখা।",
    canonicalExamples: ["sp-holothuria-scabra", "sp-tenualosa-ilisha", "sp-fejervarya-limnocharis"]
  },
  {
    id: "phy-chordata-root",
    name: "Phylum Chordata",
    nameBn: "পর্ব কর্ডাটা",
    cladeType: "phylum",
    parentCladeId: "phy-deuterostomia",
    divergenceMya: "~535 Mya",
    synapomorphies: {
      en: ["Notochord", "Dorsal hollow tubular nerve cord", "Pharyngeal gill slits", "Post-anal tail", "Endostyle/thyroid gland"],
      bn: ["নটোকর্ড", "পৃষ্ঠীয় ফাঁপা স্নায়ুরজ্জু", "গলবিলীয় ফুলকা ছিদ্র", "পশ্চাৎ-পায়ু পুচ্ছ", "এন্ডোস্টাইল বা থাইরয়েড গ্রন্থি"]
    },
    sisterGroup: "Echinodermata / Hemichordata (Ambulacraria)",
    descriptionEn: "Clade defined by axial notochord and hollow dorsal nerve cord, giving rise to Vertebrata.",
    descriptionBn: "নটোকর্ড ও মেরুদণ্ড দ্বারা সংজ্ঞায়িত সকল মেরুদণ্ডী প্রাণীর মূল পর্ব।",
    canonicalExamples: ["sp-tenualosa-ilisha", "sp-varanus-bengalensis"]
  }
];

export const EVOLUTIONARY_CONCEPTS: EvolutionaryConcept[] = [
  {
    id: "concept-natural-selection",
    title: "Natural Selection",
    titleBn: "প্রাকৃতিক নির্বাচন",
    category: "mechanism",
    definitionEn: "The differential survival and reproduction of individuals due to phenotypic differences. Individuals possessing heritable traits better suited to local ecological pressures leave more surviving offspring, shifting population allele frequencies across generations.",
    definitionBn: "বংশগত বৈশিষ্ট্যের পার্থক্যের কারণে জীবের বেঁচে থাকা এবং বংশবৃদ্ধির হারের অসমতা। স্থানীয় পরিবেশের সাথে অধিক উপযোগী বৈশিষ্ট্যধারী জীব অধিক অপত্য রেখে যায়, ফলে পরবর্তী প্রজন্মে অনুকূল অ্যালিলের অনুপাত বৃদ্ধি পায়।",
    keyPrinciples: [
      { principleEn: "Phenotypic Variation: Individuals within populations show morphological, physiological, and behavioural diversity.", principleBn: "রূপতাত্ত্বিক বৈচিত্র্য: জনসংখ্যার সদস্যদের মধ্যে গঠন, শরীরবৃত্ত ও আচরণের পার্থক্য থাকে।" },
      { principleEn: "Heritability: A portion of this phenotypic variation is encoded genetically and transmitted to progeny.", principleBn: "বংশগতি: বৈচিত্র্যের উল্লেখযোগ্য অংশ জিন দ্বারা নিয়ন্ত্রিত এবং অপত্যে সঞ্চারিত হয়।" },
      { principleEn: "Struggle for Existence: Reproductive potential exceeds resource carrying capacity (Malthusian tension).", principleBn: "অস্তিত্বের সংগ্রাম: সীমিত খাদ্যের তুলনায় অতিরিক্ত সন্তান জন্ম নেওয়ায় তীব্র প্রতিযোগিতা সৃষ্টি হয়।" },
      { principleEn: "Differential Reproductive Success: Better-adapted phenotypes contribute disproportionately to the gene pool.", principleBn: "অসম প্রজনন সাফল্য: অধিক উপযোগী ফিনোটাইপ জিনপুলে অপেক্ষাকৃত বেশি অবদান রাখে।" }
    ],
    zoologicalExamples: [
      { taxonGroup: "Peppered Moth (Biston betularia)", exampleEn: "Industrial melanism: dark morph frequency rose to >98% during coal pollution, reversing to light morphs as air quality recovered.", exampleBn: "শিল্পদূষণে গাছের বাকল কালো হলে গাঢ় রঙের মথের প্রাধান্য ঘটে এবং দূষণমুক্ত হলে আবার হালকা মথ ফিরে আসে।" },
      { taxonGroup: "Teleost Fishes (Tenualosa ilisha)", exampleEn: "Selective pressure on gill raker density optimizing filtering of estuarine micro-plankton.", exampleBn: "মোহনার ক্ষুদ্র প্লাঙ্কটন ছাঁকার জন্য ফুলকা রেকারের ঘনত্বের ওপর ধারাবাহিক নির্বাচন চাপ।", speciesId: "sp-tenualosa-ilisha" }
    ],
    significanceEn: "The cornerstone mechanism of biological evolution proposed independently by Charles Darwin and Alfred Russel Wallace in 1858.",
    significanceBn: "ডারউইন ও ওয়ালেস কর্তৃক ১৮৫৮ সালে প্রস্তাবিত আধুনিক জীববিজ্ঞানের কেন্দ্রীয় ভিত্তিপ্রস্তর।"
  },
  {
    id: "concept-adaptation-fitness",
    title: "Adaptation & Evolutionary Fitness",
    titleBn: "অভিযোজন ও বিবর্তনীয় উপযোগিতা",
    category: "mechanism",
    definitionEn: "An adaptation is an anatomical, physiological, or behavioural trait shaped by past natural selection that enhances an organism's biological fitness—its relative lifetime reproductive output compared to conspecifics.",
    definitionBn: "অভিযোজন হলো অতীত প্রাকৃতিক নির্বাচনের মাধ্যমে গঠিত এমন রূপতাত্ত্বিক, শারীরবৃত্তীয় বা আচরণগত বৈশিষ্ট্য যা কোনো জীবের প্রজনন সাফল্য ও টিকে থাকার সক্ষমতাকে বাড়িয়ে দেয়।",
    keyPrinciples: [
      { principleEn: "Darwinian Fitness (W): Measured strictly by relative genetic contribution to future generations, not physical strength.", principleBn: "ডারউইনীয় উপযোগিতা: শারীরিক শক্তির বদলে ভবিষ্যৎ প্রজন্মে জিনগত অবদানের ভিত্তিতে পরিমাপ করা হয়।" },
      { principleEn: "Structural vs Functional vs Behavioural: Adaptations manifest at tissue, biochemical, or neurological levels.", principleBn: "গঠনগত, শারীরবৃত্তীয় ও আচরণগত: দেহের কোষ, রাসায়নিক বিক্রিয়া বা স্নায়বিক আচরণে অভিযোজন ঘটে।" },
      { principleEn: "Exaptation (Preadaptation): Traits co-opted for new functions different from their original selective context.", principleBn: "এক্সাপটেশন: একটি কাজের জন্য সৃষ্ট অঙ্গ পরে সম্পূর্ণ ভিন্ন কাজে অভিযোজিত হওয়া (যেমন ডাইনোসরের পালক উড্ডয়নে ব্যবহার)।" }
    ],
    zoologicalExamples: [
      { taxonGroup: "Ganges River Dolphin (Platanista gangetica)", exampleEn: "Microphthalmic eye regression coupled with hyper-specialized ultrasonic echolocation array adapted for silt-laden turbid waters.", exampleBn: "পদ্মা-মেঘনার ঘোলা পানিতে চোখের কার্যকারিতা হ্রাস এবং উচ্চ-ক্ষমতার প্রতিধ্বনি-ভিত্তিক পথ শনাক্তকরণ।", speciesId: "sp-platanista-gangetica" },
      { taxonGroup: "Bengal Monitor (Varanus bengalensis)", exampleEn: "Keratinized epidermal stratum corneum, salt glands, and behavioral heliothermic basking conferring extreme xeric resilience.", exampleBn: "কেরাটিনযুক্ত আঁইশ ও রোদে শরীর গরম করার কৌশল শুষ্ক পরিবেশেও পানি হ্রাস রোধ করে।", speciesId: "sp-varanus-bengalensis" }
    ],
    significanceEn: "Demonstrates that organismal design reflects historical ecological optimization rather than deliberate architectural engineering.",
    significanceBn: "প্রমাণ করে যে প্রাণীদেহের নকশা কোনো পূর্বনির্ধারিত পরিকল্পনার ফল নয়, বরং কোটি বছরের পরিবেশীয় নির্বাচনের জটিল ফলাফল।"
  },
  {
    id: "concept-speciation",
    title: "Speciation: Allopatric & Sympatric",
    titleBn: "প্রজাতিকরণ: এলোপ্যাট্রিক ও সিমপ্যাট্রিক",
    category: "pattern",
    definitionEn: "Speciation is the evolutionary splitting of an ancestral interbreeding population into two or more reproductively isolated daughter lineages that cannot produce fertile, viable hybrid offspring under natural conditions.",
    definitionBn: "প্রজাতিকরণ হলো একটি আদিম সংকরায়নশীল জনসংখ্যা থেকে বিবর্তনীয়ভাবে দুটি বা ততোধিক নতুন প্রজাতির সৃষ্টি যা প্রজননগতভাবে সম্পূর্ণ বিচ্ছিন্ন এবং পরস্পর উর্বর সন্তান জন্মদানে অক্ষম।",
    keyPrinciples: [
      { principleEn: "Allopatric Speciation: Geographic barriers (rivers, mountain uplift, vicariance) divide gene pools, driving drift and independent adaptation.", principleBn: "এলোপ্যাট্রিক প্রজাতিকরণ: নদী, পাহাড় বা ভৌগোলিক বাধায় দল বিচ্ছিন্ন হয়ে স্বাধীন জিনগত রূপান্তর ঘটে।" },
      { principleEn: "Sympatric Speciation: Reproductive isolation develops without geographic separation (polyploidy, disruptive sexual selection).", principleBn: "সিমপ্যাট্রিক প্রজাতিকরণ: একই ভৌগোলিক এলাকায় ভৌগোলিক বাধা ছাড়াই যৌন নির্বাচন বা পলিপ্লয়ডির মাধ্যমে নতুন প্রজাতি তৈরি।" },
      { principleEn: "Prezygotic vs Postzygotic Isolation: Barriers act before fertilization (temporal, behavioral, mechanical) or after (hybrid inviability/sterility).", principleBn: "প্রাক-নিষেক ও উত্তর-নিষেক বিচ্ছিন্নতা: প্রজনন কাল, সঙ্গমের ডাক বা সংকর সন্তানের অনুর্বরতা দিয়ে বিচ্ছিন্নতা বজায় থাকে।" }
    ],
    zoologicalExamples: [
      { taxonGroup: "African Rift Lake Cichlids", exampleEn: "Over 500 endemic species evolved within single lakes through female mate choice based on male nuptial colouration and trophic specialization.", exampleBn: "আফ্রিকার হ্রদে সঙ্গীর রঙের পছন্দ ও খাদ্যের বিশেষায়নে কয়েকশ প্রজাতির দ্রুত সিমপ্যাট্রিক উদ্ভব।" },
      { taxonGroup: "Sundarbans Mudskippers (Periophthalmus)", exampleEn: "Tidal micro-habitat partitioning and courtship hopping displays maintaining premating isolation among sympatric gobiid species.", exampleBn: "সুন্দরবনের কাদায় বিভিন্ন প্রজাতির লাফানোর ভঙ্গি ও নির্দিষ্ট জোয়ার-ভাটার এলাকা প্রজননগত দূরত্ব বজায় রাখে।" }
    ],
    significanceEn: "Explains the generation of the Tree of Life's branching nodes and the fundamental origin of global biological diversity.",
    significanceBn: "জীবনের বংশলতিকায় নতুন শাখার উদ্ভব এবং পৃথিবীর সামগ্রিক জীববৈচিত্র্য সৃষ্টির মূল প্রক্রিয়াকে ব্যাখ্যা করে।"
  },
  {
    id: "concept-homology-divergent",
    title: "Homology & Divergent Evolution",
    titleBn: "সমসংস্থ অঙ্গ ও অপসারী বিবর্তন",
    category: "evidence",
    definitionEn: "Homology refers to anatomical or molecular characters shared between different taxa due to direct inheritance from a common ancestor. Divergent evolution causes homologous structures to diversify in shape and function to exploit distinct ecological niches.",
    definitionBn: "সমসংস্থ অঙ্গ হলো অভিন্ন পূর্বপুরুষ থেকে উদ্ভূত বিভিন্ন প্রজাতির অঙ্গ যা গঠনগত দিক থেকে মৌলিকভাবে এক, কিন্তু অপসারী বিবর্তনের মাধ্যমে ভিন্ন ভিন্ন পরিবেশে ভিন্ন ভিন্ন কাজ সম্পাদনের জন্য রূপান্তরিত হয়েছে।",
    keyPrinciples: [
      { principleEn: "Common Ancestry Signature: Shared fundamental structural blueprint irrespective of external superficial differences.", principleBn: "অভিন্ন পূর্বপুরুষের প্রমাণ: বাহ্যিক কাজ আলাদা হলেও অভ্যন্তরীণ কাঠামোগত ভিত্তি এক থাকে।" },
      { principleEn: "Pentadactyl Limb Paradigm: Humerus-radius/ulna-carpals-metacarpals-phalanges architecture preserved across all tetrapods.", principleBn: "পেন্টাড্যাকটাইল অঙ্গ: হিউমেরাস-রেডিয়াস-আলনা-কার্পাল-ফ্যালাঞ্জেস বিন্যাস ব্যাঙ, পাখি, তিমি ও মানুষ সবার মধ্যেই এক।" },
      { principleEn: "Molecular Homology: Orthologous gene sequences (e.g., Cytochrome c, Hemoglobin alpha) trace phylogenetic divergence times.", principleBn: "আণবিক সমসংস্থতা: সাইটোক্রোম সি ও হিমোগ্লোবিন জিনের মিল বিবর্তনীয় দূরত্ব নির্ণয় করে।" }
    ],
    zoologicalExamples: [
      { taxonGroup: "Tetrapod Forelimbs", exampleEn: "Human grasping hand, bat wing, whale flipper, and horse running hoof share identical bone topologies derived from ancestral sarcopterygian fins.", exampleBn: "মানুষের হাত, বাদুড়ের ডানা, তিমির ফ্লিপার ও ঘোড়ার খুর সবই একই মৌলিক হাড় দিয়ে গঠিত।" },
      { taxonGroup: "Insect Mouthparts", exampleEn: "Labrum, mandibles, maxillae, and labium modified for chewing (locust), siphoning (butterfly), piercing (mosquito), and sponging (housefly).", exampleBn: "ঘাসফড়িংয়ের চর্বন, প্রজাপতির চোষণ, মশার ছিদ্রকরণ ও মাছির স্পঞ্জের মতো মুখোপাঙ্গ সবই একই মুখীয় খণ্ডক থেকে বিবর্তিত।" }
    ],
    significanceEn: "Provides decisive empirical proof against independent creation, demonstrating deep phylogenetic relatedness among wildly disparate organismal forms.",
    significanceBn: "প্রমাণ করে যে ভিন্নধর্মী প্রাণীরা প্রত্যেকে আলাদাভাবে সৃষ্টি হয়নি, বরং এক অভিন্ন পূর্বপুরুষের শাখা-প্রশাখা।"
  },
  {
    id: "concept-analogy-convergent",
    title: "Analogy & Convergent Evolution",
    titleBn: "সমবৃত্তীয় অঙ্গ ও অভিসারী বিবর্তন",
    category: "evidence",
    definitionEn: "Analogy refers to superficial structural resemblances between distantly related taxa that perform similar functions but lack common ancestry. Convergent evolution occurs when independent lineages adapt to identical selective pressures and physical laws.",
    definitionBn: "সমবৃত্তীয় অঙ্গ হলো দূরবর্তী সম্পর্কযুক্ত প্রাণীদের এমন অঙ্গ যা দেখতে ও কাজে এক হলেও এদের অভ্যন্তরীণ গঠন ও বিবর্তনীয় উৎস সম্পূর্ণ ভিন্ন। একই পরিবেশে টিকে থাকার প্রাকৃতিক চাপে অভিসারী বিবর্তন ঘটে।",
    keyPrinciples: [
      { principleEn: "Independent Evolutionary Origins: Structures arise through distinct developmental embryological pathways.", principleBn: "স্বাধীন বিবর্তনীয় উৎস: ভ্রূণীয় বিকাশের ভিন্ন ভিন্ন পথ থেকে সমজাতীয় কাজের জন্য বিকাশ ঘটে।" },
      { principleEn: "Biophysical Constraints: Hydrodynamic or aerodynamic physics dictate optimal shapes (streamlined torpedo bodies for water, airfoils for flight).", principleBn: "ভৌত সূত্র ও সীমা: বায়ুগতিবিদ্যা বা পানিগতিবিদ্যার নিয়মের কারণে সাঁতার বা ওড়ার জন্য নিখুঁত আকৃতিতে পৌঁছাতে হয়।" },
      { principleEn: "Homoplasy: Characters shared between taxa that do not indicate common ancestry (must be filtered out in phylogenetic cladistics).", principleBn: "হোমোপ্লাসি: এমন সাদৃশ্য যা বংশগত সম্পর্কের পরিচায়ক নয় এবং জাতিজনি বৃক্ষ তৈরিতে সতর্কতার সাথে বর্জন করতে হয়।" }
    ],
    zoologicalExamples: [
      { taxonGroup: "Fusiform Aquatic Predators", exampleEn: "Shark (Chondrichthyes), Ichthyosaur (Mesozoic Diapsid), and Dolphin (Mammalia) independently converged on streamlined fusiform bodies and dorsal stabilities.", exampleBn: "হাঙর (মাছ), ইকথিসর (সরীসৃপ) এবং ডলফিন (স্তন্যপায়ী) তিনজনই স্বাধীনভাবে পানিতে দ্রুত সাঁতার কাটার নিখুঁত টর্পেডো দেহ অর্জন করেছে।" },
      { taxonGroup: "True Powered Flight Wings", exampleEn: "Pterosaur (skin over single digit), Bird (feathers on forearm/hand), and Bat (skin stretched over four elongated digits).", exampleBn: "টেরোসর, পাখি এবং বাদুড়ের ডানা স্বাধীনভাবে ওড়ার ক্ষমতা লাভ করলেও এদের ডানার গঠন সম্পূর্ণ আলাদা।" }
    ],
    significanceEn: "Illustrates the formidable deterministic power of natural selection to repeatedly arrive at analogous functional solutions in disparate genetic backgrounds.",
    significanceBn: "প্রমাণ করে যে প্রাকৃতিক পরিবেশের চাপ ভিন্ন ভিন্ন প্রাণীকেও বারবার একই রকম নিখুঁত শারীরিক সমাধানে পৌঁছাতে বাধ্য করে।"
  },
  {
    id: "concept-vestigial-atavism",
    title: "Vestigial Organs & Atavism",
    titleBn: "নিষ্ক্রিয় বা লুপ্তপ্রায় অঙ্গ ও অ্যাটাভিজম",
    category: "evidence",
    definitionEn: "Vestigial structures are degenerate, rudimentary organs that have lost all or most of their ancestral functional utility through regressive evolution. Atavisms are rare, anomalous re-expressions of ancestral developmental pathways in occasional individual mutants.",
    definitionBn: "নিষ্ক্রিয় বা লুপ্তপ্রায় অঙ্গ হলো পূর্বপুরুষের কার্যকর অঙ্গের এমন অপক্ষয়িত রূপ যা বিবর্তনের ধারায় তার মূল কাজ হারিয়েছে। অন্যদিকে অ্যাটাভিজম হলো জিনের অপ্রত্যাশিত পুনঃসক্রিয়তায় কোনো কোনো জীবে পূর্বপুরুষের লুপ্ত বৈশিষ্ট্যের আকস্মিক পুনরাবির্ভাব।",
    keyPrinciples: [
      { principleEn: "Evolutionary Baggage: Selection rarely deletes unneeded structures overnight; neutral or weakly deleterious remnants persist for millions of years.", principleBn: "বিবর্তনীয় অবশিষ্টাংশ: অপ্রয়োজনীয় অঙ্গ রাতারাতি হারিয়ে যায় না, কোটি বছর ধরে ক্ষুদ্র আকারে অবশিষ্ট থাকে।" },
      { principleEn: "Molecular Pseudogenes: Unexpressed, mutated genetic remnants (e.g., GULO gene for Vitamin C synthesis in anthropoid primates).", principleBn: "সিউডোজিন: ডিএনএ-তে অকার্যকর হয়ে যাওয়া জিন যা অতীতে কার্যকর ছিল (যেমন মানুষের ভিটামিন সি তৈরির বিকল জিন)।" },
      { principleEn: "Cryptic Genetic Toolkits: Developmental regulatory pathways remain latent in genomes and can be experimentally or mutationally reactivated.", principleBn: "সুপ্ত জিনগত সংকেত: জিনের মূল নকশা ডিএনএ-তে সুপ্ত থাকে যা মিউটেশনে হঠাৎ জেগে উঠতে পারে।" }
    ],
    zoologicalExamples: [
      { taxonGroup: "Baleen Whales & Boas", exampleEn: "Vestigial pelvic girdles and rudimentary femur bones deeply embedded in abdominal musculature without limb contact.", exampleBn: "তিমি ও অজগর সাপের পেটের মাংসের গভীরে ক্ষুদ্র অকার্যকর পেলভিস ও ফিমার হাড় বিদ্যমান যা চতুষ্পদী পূর্বপুরুষের প্রমাণ।" },
      { taxonGroup: "Flightless Cormorants & Kiwis", exampleEn: "Stunted wings incapable of flight retaining primary remiges and skeletal humeral articulators.", exampleBn: "উড়তে না পারা কিউই ও গ্যালাপাগোস করমোরান্ট পাখির ক্ষুদ্র অকেজো ডানা।" }
    ],
    significanceEn: "Constitutes historical anatomical 'smoking guns' impossible to rationalize under static design models, reflecting deep phylogenetic ancestry.",
    significanceBn: "অতীত বংশানুক্রমের এমন জীবন্ত প্রমাণ যা স্থির নকশা তত্ত্ব দ্বারা কোনোভাবেই ব্যাখ্যা করা সম্ভব নয়।"
  },
  {
    id: "concept-adaptive-radiation",
    title: "Adaptive Radiation",
    titleBn: "অভিযোজনিক বিকিরণ",
    category: "macroevolution",
    definitionEn: "The rapid evolutionary diversification of a single ancestral lineage into an array of morphologically and ecologically differentiated species, each occupying a distinct ecological niche following ecological opportunity or key evolutionary innovation.",
    definitionBn: "কোনো আদি প্রজাতি থেকে স্বল্প ভূতাত্ত্বিক সময়ে বিভিন্ন পরিবেশীয় কুলুঙ্গি ও খাদ্যাভ্যাসে খাপ খাইয়ে বহুবিধ বৈচিত্র্যময় নতুন প্রজাতির দ্রুত উদ্ভব, যা নতুন ভৌগোলিক অঞ্চল প্রাপ্তি বা নতুন শারীরিক উদ্ভাবনের ফলে ঘটে।",
    keyPrinciples: [
      { principleEn: "Ecological Opportunity: Colonization of empty archipelagos or survival following catastrophic mass extinction clearing competitors.", principleBn: "পরিবেশীয় সুযোগ: জনশূন্য দ্বীপে পদার্পণ বা মহাবিলুপ্তির পর প্রতিযোগী প্রাণী শূন্য হয়ে যাওয়া।" },
      { principleEn: "Key Evolutionary Innovation: Acquisition of novel morphological traits (e.g., avian flight feathers, mammalian heterodont teeth) unlocking new resources.", principleBn: "যুগান্তকারী উদ্ভাবন: পালক বা বিশেষায়িত দাঁতের মতো নতুন শারীরিক বৈশিষ্ট্য অর্জন যা নতুন খাদ্যের দুয়ার খুলে দেয়।" },
      { principleEn: "Morphological Disparity: Rapid phenotypic divergence exceeding ordinary baseline evolutionary rates.", principleBn: "গঠনগত দ্রুত বৈচিত্র্য: সাধারণ গতির চেয়ে বহুগুণ দ্রুত শারীরিক রূপের বহুমুখী রূপান্তর।" }
    ],
    zoologicalExamples: [
      { taxonGroup: "Mammalian Radiation (Early Paleogene)", exampleEn: "Following non-avian dinosaur extinction 66 Mya, tiny nocturnal insectivores exploded into bats, whales, carnivores, and ungulates within 15 million years.", exampleBn: "৬ কোটি ৬০ লাখ বছর আগে ডাইনোসর বিলুপ্তির পর ক্ষুদ্র নিশাচর স্তন্যপায়ীরা মাত্র দেড় কোটি বছরে তিমি, বাদুড়, শিকারী ও তৃণভোজী প্রাণীতে রূপান্তরিত হয়।" },
      { taxonGroup: "Darwin's Finches (Geospizinae)", exampleEn: "Fourteen Galápagos species evolved from a single mainland seed-eating ancestor, radiating into insect, cactus, seed, and blood-eating trophic niches.", exampleBn: "গ্যালাপাগোস দ্বীপপুঞ্জে একটিমাত্র বীজখেকো ফিঞ্চ থেকে ১৪টি ভিন্ন ঠোঁট ও খাদ্যের প্রজাতির উদ্ভব।" }
    ],
    significanceEn: "Demonstrates how ecological release and evolutionary opportunity spark explosive macroevolutionary bursts shaping planetary biotas.",
    significanceBn: "ব্যাখ্যা করে কীভাবে প্রাকৃতিক সুযোগ ও খালি কুলুঙ্গি বিশ্বজুড়ে নতুন নতুন প্রাণীগোষ্ঠীর আকস্মিক জন্ম দেয়।"
  },
  {
    id: "concept-coevolution",
    title: "Coevolution & Evolutionary Arms Races",
    titleBn: "যৌথ বিবর্তন ও বিবর্তনীয় সমরাস্ত্র প্রতিযোগিতা",
    category: "mechanism",
    definitionEn: "Reciprocal evolutionary change occurring between two or more ecologically interacting species, where each species exerts selective pressure on the other. Includes mutualisms, predator-prey dynamics, and host-parasite antagonistic arms races.",
    definitionBn: "পারস্পরিক মিথস্ক্রিয়ায় লিপ্ত দুই বা ততোধিক প্রজাতির মধ্যে এমন যৌথ বিবর্তন যেখানে একটি প্রজাতির রূপান্তর অপর প্রজাতির ওপর নির্বাচন চাপ প্রয়োগ করে এবং উভয়েই অবিরাম পরিবর্তনের মধ্য দিয়ে যায়।",
    keyPrinciples: [
      { principleEn: "Red Queen Dynamics: Lineages must continuously evolve and adapt simply to maintain relative fitness against co-evolving rivals ('run to stay in place').", principleBn: "রেড কুইন হাইপোথিসিস: প্রতিপক্ষ প্রজাতির পরিবর্তনের সাথে তাল মিলিয়ে টিকে থাকার জন্যই একটি প্রজাতিকে অবিরাম বিবর্তিত হতে হয়।" },
      { principleEn: "Mutualistic Reciprocity: Floral nectar spurs and pollinator proboscis lengths elongate in mutually beneficial synchrony.", principleBn: "মিউচুয়ালিজম সমন্বয়: ফুলের নলের গভীরতা ও প্রজাপতির শুঁড়ের দৈর্ঘ্য একে অপরের সুবিধার জন্য যৌথভাবে বাড়ে।" },
      { principleEn: "Antagonistic Escalation: Predator weaponry (speed, venom, claws) co-evolves with prey defenses (armor, toxin resistance, vigilance).", principleBn: "শিকার-শিকারী প্রতিযোগিতা: শিকারীর বিষ ও গতি বৃদ্ধির সাথে সাথে শিকারের বিষ-প্রতিরোধ ও বর্মের সহ-বৃদ্ধি।" }
    ],
    zoologicalExamples: [
      { taxonGroup: "Rough-skinned Newt & Garter Snake", exampleEn: "Newt secretes lethal tetrodotoxin (TTX); sympatric Thamnophis sirtalis snakes evolved sodium channel mutations conferring extreme TTX resistance.", exampleBn: "নিউটের প্রাণঘাতী টিটিএক্স বিষের সাথে গার্টার সাপের সেই বিষ নিষ্ক্রিয়কারী সোডিয়াম চ্যানেলের সহ-বিবর্তনীয় লড়াই।" },
      { taxonGroup: "Angiosperms & Fig Wasps (Agaonidae)", exampleEn: "Obligate mutualism: unique fig syconium morphology requires species-specific wasps for pollination while providing sole larval breeding chambers.", exampleBn: "ডুমুর ফল ও ডুমুর-বোলতার একমাত্রিক অবিচ্ছেদ্য প্রজনন সম্পর্ক যেখানে একজন ছাড়া অপরজন বাঁচে না।" }
    ],
    significanceEn: "Shows that species do not evolve in isolated abiotic silos; biotic interactions are often the primary drivers of fine-tuned morphological specializations.",
    significanceBn: "প্রমাণ করে যে প্রাণীরা একা একা বিবর্তিত হয় না; পরস্পরের সাথে বাঁচা ও মারার লড়াই-ই বিবর্তনের সবচেয়ে শক্তিশালী চালিকাশক্তি।"
  },
  {
    id: "concept-sexual-selection",
    title: "Sexual Selection & Sexual Dimorphism",
    titleBn: "যৌন নির্বাচন ও যৌন দ্বিরূপতা",
    category: "mechanism",
    definitionEn: "A mode of natural selection arising through preference by one sex for certain characteristics in individuals of the other sex (intersexual choice) or through competition between members of the same sex for access to mates (intrasexual contest).",
    definitionBn: "প্রাকৃতিক নির্বাচনের একটি বিশেষ রূপ যেখানে এক লিঙ্গের সদস্যরা বিপরীত লিঙ্গের নির্দিষ্ট বৈশিষ্ট্যকে সঙ্গমের জন্য প্রাধান্য দেয় (ইন্টারসেক্সুয়াল চয়েস) অথবা সমলিঙ্গের সদস্যদের মধ্যে সঙ্গীর জন্য সরাসরি প্রতিদ্বন্দ্বিতা হয় (ইন্ট্রাসেক্সুয়াল লড়াই)।",
    keyPrinciples: [
      { principleEn: "Bateman's Principle & Anisogamy: Female gamete investment (large, nutritious eggs) drives choosiness; cheap sperm drives male competition.", principleBn: "অ্যানাইসোগ্যামি ও বেটম্যানের নীতি: ডিম্বাণুর উচ্চ মূল্যের কারণে স্ত্রী সঙ্গী বাছাইয়ে খুঁতখুঁতে হয় এবং পুরুষরা প্রতিযোগিতায় নামে।" },
      { principleEn: "Zahavi's Handicap Principle: Elaborate sexual ornaments (peacock tails) are honest signals of genetic quality precisely because they are energetically costly.", principleBn: "হ্যান্ডিক্যাপ নীতি: ময়ূরের বিশাল পেখম কষ্টকর ও বিপজ্জনক হওয়া সত্ত্বেও প্রকাশ করে যে পুরুষটির রোগ প্রতিরোধ ক্ষমতা অত্যন্ত শক্তিশালী।" },
      { principleEn: "Fisherian Runaway Selection: Positive feedback loop between female aesthetic preference and male trait exaggeration leading to extreme ornament elaboration.", principleBn: "ফিশারীয় পলাতক নির্বাচন: স্ত্রীর পছন্দের সাথে পুরুষের পেখমের আকারের যৌথ বৃদ্ধি একসময় চরম মাত্রায় পৌঁছায়।" }
    ],
    zoologicalExamples: [
      { taxonGroup: "Peafowl (Pavo cristatus)", exampleEn: "Male peacock displays iridescent, metabolically expensive, predator-vulnerable tail train chosen by peahens based on eye-spot symmetry.", exampleBn: "স্ত্রী ময়ূর নিখুঁত চোখা-চিহ্নিত ও চোখধাঁধানো পেখম দেখে পুরুষ নির্বাচন করে।" },
      { taxonGroup: "Fiddler Crabs (Uca / Gelasimus)", exampleEn: "Male possesses single hypertrophied cheliped up to 50% total body mass used in ritualized aggressive waving contests and burrows defense.", exampleBn: "পুরুষ টিডলার কাঁকড়ার বিশাল এক দাঁড়া যা অন্য পুরুষকে ভয় দেখাতে এবং স্ত্রীকে আকৃষ্ট করতে ব্যবহৃত হয়।" }
    ],
    significanceEn: "Explains the evolution of extravagant morphological structures and displays that appear actively detrimental to plain ecological survival.",
    significanceBn: "ব্যাখ্যা করে কেন প্রাণীরা এমন সব বিশাল ও বিপজ্জনক শারীরিক বৈশিষ্ট্য তৈরি করে যা সাধারণ বেঁচে থাকার জন্য ক্ষতিকর মনে হলেও প্রজননের জন্য অপরিহার্য।"
  },
  {
    id: "concept-mass-extinction",
    title: "Mass Extinctions & Macroevolutionary Recovery",
    titleBn: "মহাবিলুপ্তি ও বিবর্তনীয় পুনরুদ্ধার",
    category: "macroevolution",
    definitionEn: "Catastrophic geologically brief episodes in Earth history where global biodiversity drops precipitously (>70% species lost across multiple phyla). Extinctions purge dominant ecological incumbents, resetting evolutionary trajectories and allowing previously minor clades to radiate.",
    definitionBn: "পৃথিবীর ইতিহাসে ঘটে যাওয়া এমন কিছু আকস্মিক বিপর্যয় যেখানে পৃথিবীর ৭০% এরও বেশি জীব প্রজাতি একযোগে বিলুপ্ত হয়ে যায়। এই মহাবিলুপ্তি পুরোনো প্রতিষ্ঠিত পরাক্রমশালী প্রাণীদের সরিয়ে দিয়ে নতুন গোষ্ঠীর উত্থানের পথ খুলে দেয়।",
    keyPrinciples: [
      { principleEn: "The 'Big Five' Extinctions: End-Ordovician, Late Devonian, End-Permian (Great Dying), End-Triassic, and Cretaceous-Paleogene (K-Pg).", principleBn: "পাঁচটি মহাবিলুপ্তি: অর্ডোভিশিয়ান, ডেভোনিয়ান, পারমিয়ান (সবচেয়ে ভয়াবহ), ট্রায়াসিক এবং ক্রিটেশিয়াস মহাবিলুপ্তি।" },
      { principleEn: "Selective Filter Shift: Normal background extinction selection criteria (fitness, adaptation) are suspended; survival often relies on wide geographic range or burrowing tolerance.", principleBn: "নির্বাচনের নিয়ম বদল: মহাবিপদের সময় সাধারণ শারীরিক শ্রেষ্ঠত্ব কাজে আসে না; ছোট আকার, গর্তে থাকা বা সর্বভুক খাওয়াই রক্ষাকবচ হয়।" },
      { principleEn: "Lilliput Effect & Recovery Lag: Post-extinction survivors initially show reduced body size and low taxonomic diversity before radiation restarts.", principleBn: "লিলিপুট প্রভাব: মহাবিলুপ্তির পরপরই সর্বত্র ছোট আকারের প্রাণীদের প্রাধান্য দেখা যায় এবং জীববৈচিত্র্য পুনরুদ্ধার হতে লক্ষ লক্ষ বছর লাগে।" }
    ],
    zoologicalExamples: [
      { taxonGroup: "End-Permian Event (252 Mya)", exampleEn: "Siberian Traps basaltic volcanism drove oceanic anoxia and runaway greenhouse heating, wiping out trilobites, eurypterids, and 96% marine species.", exampleBn: "সাইবেরিয়ান আগ্নেয়গিরির অগ্ন্যুৎপাতে মহাসাগরে অক্সিজেন শূন্য হয়ে পৃথিবীর ৯৬% সামুদ্রিক প্রজাতি চিরতরে নিশ্চিহ্ন হয়।" },
      { taxonGroup: "K-Pg Asteroid Impact (66 Mya)", exampleEn: "10-km bolide impact in Chicxulub decimated non-avian dinosaurs and ammonites, clearing terrestrial and marine space for modern birds and placental mammals.", exampleBn: "চিচুলুব উল্কাপাতে ডাইনোসর নিশ্চিহ্ন হয়ে ক্ষুদ্র স্তন্যপায়ীদের জন্য স্তন্যপায়ীর স্বর্ণযুগ সূচনার সুযোগ তৈরি হয়।" }
    ],
    significanceEn: "Demonstrates that life's history is not a steady unperturbed march of progress, but a punctuated saga punctuated by planetary resets.",
    significanceBn: "প্রমাণ করে যে বিবর্তন কোনো নিরবচ্ছিন্ন সরলরেখা নয়, বরং বারবার আকস্মিক ধ্বংস ও নতুন সৃষ্টির এক রোমাঞ্চকর ইতিহাস।"
  },
  {
    id: "concept-tempo-mode",
    title: "Phyletic Gradualism vs Punctuated Equilibrium",
    titleBn: "ক্রমিক বিবর্তন বনাম সবিরাম ভারসাম্য",
    category: "pattern",
    definitionEn: "Two competing hypotheses regarding the temporal dynamics of evolutionary change: Phyletic Gradualism (Darwinian continuous slow transformation) versus Punctuated Equilibrium (Gould & Eldredge 1972: long periods of morphological stasis interrupted by geologically rapid speciation bursts).",
    definitionBn: "বিবর্তনের গতির দুটি প্রধান বৈজ্ঞানিক তত্ত্ব: ডারউইনের ক্রমিক রূপান্তরবাদ (ধীর ও অবিরাম পরিবর্তন) বনাম গোল্ড ও এলড্রেজের সবিরাম ভারসাম্য তত্ত্ব (কোটি বছরের অপরিবর্তিত স্থবিরতার পর আকস্মিক সংক্ষিপ্ত বিস্ফোরণে নতুন প্রজাতির উদ্ভব)।",
    keyPrinciples: [
      { principleEn: "Morphological Stasis: Species often remain recognizably unchanged in the fossil record for 5–10 million years ('living fossils').", principleBn: "রূপতাত্ত্বিক স্থবিরতা: জীবাশ্ম রেকর্ডে দেখা যায় বহু প্রজাতি ৫০ লাখ থেকে ১ কোটি বছর প্রায় কোনো পরিবর্তন ছাড়াই টিকে থাকে।" },
      { principleEn: "Allopatric Pulse: Rapid speciation occurs in small isolated peripheral isolates where fossil preservation is rare, explaining abrupt record transitions.", principleBn: "প্রান্তিক বিস্ফোরণ: মূল এলাকা থেকে বিচ্ছিন্ন ক্ষুদ্র দলে খুব দ্রুত নতুন প্রজাতির রূপান্তর ঘটে, যার জীবাশ্ম সহজে সংরক্ষিত হয় না।" },
      { principleEn: "Synthesis: Both modes operate across different taxonomic scales and ecological contexts (gradual anagenesis vs cladogenetic punctuation).", principleBn: "সমন্বয়: উভয় তত্ত্বই সত্য; কিছু ক্ষেত্রে ধীর পরিবর্তন এবং অন্য ক্ষেত্রে আকস্মিক সবিরাম বিবর্তন দেখা যায়।" }
    ],
    zoologicalExamples: [
      { taxonGroup: "Horseshoe Crab (Limulidae / Carcinoscorpius rotundicauda)", exampleEn: "Extreme morphological stasis: living mangrove horseshoe crabs in the Bay of Bengal retain nearly identical body plans to Triassic fossils from 240 Mya.", exampleBn: "বঙ্গোপসাগরের রাজকাঁকড়া ২৪ কোটি বছর আগের জীবাশ্মের সাথে প্রায় হুবহু একই রকম রূপতাত্ত্বিক গঠন বজায় রেখেছে।" },
      { taxonGroup: "Trilobite Lineages (Phacopida)", exampleEn: "Eldredge's classic Devonian study demonstrated sudden phenotypic shifts in lens counts of schizochroal eyes following punctuated speciation episodes.", exampleBn: "ডেভোনিয়ান ট্রাইলোবাইটের চোখের লেন্সে দীর্ঘ স্থবিরতার পর হঠাৎ লেন্স সংখ্যার তাৎক্ষণিক পরিবর্তন দেখা যায়।" }
    ],
    significanceEn: "Reconciles Darwinian evolutionary theory with the actual empirical reality of the fossil record characterized by gaps and sudden appearances.",
    significanceBn: "জীবাশ্ম রেকর্ডের আপাত ফাঁক ও আকস্মিক আবির্ভাবের রহস্য উন্মোচন করে ডারউইনীয় তত্ত্বকে আরো নিখুঁত ও বাস্তবিক করেছে।"
  },
  {
    id: "concept-evo-devo",
    title: "Evolutionary Developmental Biology (Evo-Devo)",
    titleBn: "ইভো-ডেভো: বিবর্তনীয় বিকাশমূলক জীববিজ্ঞান",
    category: "evidence",
    definitionEn: "The discipline integrating embryology and genetics to discover how changes in developmental processes generate novel organismal morphologies. Emphasizes the deep conservation of ancient transcription factor 'toolkits' (such as Hox homeobox genes) controlling body axes across all bilateria.",
    definitionBn: "ভ্রূণতত্ত্ব ও আণবিক জেনেটিক্সের সমন্বিত ক্ষেত্র যা অনুসন্ধান করে কীভাবে ভ্রূণীয় বিকাশের পরিবর্তনের মাধ্যমে নতুন শারীরিক রূপ তৈরি হয়। এতে দেখা যায় সকল দ্বিপার্শ্বীয় প্রাণীর দেহগঠন প্রাচীন সংরক্ষিত হক্‌স (Hox) জিনের অভিন্ন সুইচের মাধ্যমেই নিয়ন্ত্রিত হয়।",
    keyPrinciples: [
      { principleEn: "Hox Gene Colinearity: Hox genes on chromosomes are arranged in the precise spatial and temporal order of the anterior-posterior body segments they pattern.", principleBn: "হক্‌স জিনের কলিনিয়ারিটি: ক্রোমোজোমে জিনের অবস্থান এবং ভ্রূণের মাথা থেকে লেজ পর্যন্ত অংশের সক্রিয়তার ক্রম হুবহু এক।" },
      { principleEn: "Modular Cis-Regulatory Shifts: Evolutionary alterations in non-coding enhancer sequences change gene expression time/space without fatal coding-sequence mutations.", principleBn: "নিয়ামক সিকোয়েন্সের রূপান্তর: মূল জিনের বদলে প্রমোটার ও এনহ্যান্সারে সামান্য পরিবর্তনেই নতুন শারীরিক অঙ্গ সৃষ্টি হয়।" },
      { principleEn: "Heterochrony & Paedomorphosis: Changes in developmental timing retain juvenile ancestral traits into adulthood (e.g., axolotl gills, human flat face).", principleBn: "হেটারোক্রনি ও পিডোমরফোসিস: বিকাশের সময়ের তারতম্যে প্রাপ্তবয়স্কেও ভ্রূণের বৈশিষ্ট্য বজায় থাকা (যেমন মানুষের মস্তিষ্ক ও মুখমণ্ডল)।" }
    ],
    zoologicalExamples: [
      { taxonGroup: "Limbless Snakes (Squamata)", exampleEn: "Expansion of HoxC6/HoxC8 expression domains across entire axial trunk converts thoracic/lumbar segments into rib-bearing vertebrae while Sonic Hedgehog limb enhancers are silenced.", exampleBn: "হক্‌স জিনের বিস্তারে সমগ্র দেহ পঞ্জরাস্থিযুক্ত ট্রাঙ্কে পরিণত হয় এবং সোনিক হেজহগ জিনের এনহ্যান্সার নিষ্ক্রিয় হয়ে পা বিলুপ্ত হয়।" },
      { taxonGroup: "Arthropod Appendage Diversification", exampleEn: "Differences in Ubx (Ultrabithorax) gene expression dictate whether a segment grows walking legs, swimming pleopods, or wings.", exampleBn: "Ubx জিনের সামান্য ভিন্ন প্রকাশ ঠিক করে একটি খণ্ডে হাঁটার পা হবে, সাঁতারের প্যাডেল হবে নাকি উড্ডয়ন ডানা হবে।" }
    ],
    significanceEn: "Unifies developmental biology with evolutionary genomics, demonstrating that morphological variety arises from rewiring shared ancient genetic switches.",
    significanceBn: "প্রমাণ করে যে নতুন প্রাণীর রূপ কোনো নতুন জিনের অলৌকিক সৃষ্টি নয়, বরং কোটি বছরের পুরোনো জিনগত সুইচ বোর্ডের নতুন সংযোগ মাত্র।"
  }
];

