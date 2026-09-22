// src/data/comparativeData.ts
// Authoritative Zoological Comparative Matrices & Organ System Cross-Taxon Datasets
// Sourced from Hickman et al. (2020), Kardong (2018), and Ruppert et al. (2004)

export interface OrganSystemComparison {
  id: string;
  systemName: string;
  systemNameBn: string;
  evolutionaryTrajectory: {
    en: string;
    bn: string;
  };
  matrix: Array<{
    group: string;
    groupBn: string;
    structureEn: string;
    structureBn: string;
    mechanismEn: string;
    mechanismBn: string;
    representativeTaxa: string;
  }>;
}

export interface InvertVsVertParameter {
  feature: string;
  featureBn: string;
  invertebrateStateEn: string;
  invertebrateStateBn: string;
  vertebrateStateEn: string;
  vertebrateStateBn: string;
  evolutionarySignificanceEn: string;
  evolutionarySignificanceBn: string;
}

export interface FunctionalAdaptation {
  id: string;
  title: string;
  titleBn: string;
  descriptionEn: string;
  descriptionBn: string;
  morphologicalModifications: { en: string[]; bn: string[] };
  examples: Array<{
    taxon: string;
    adaptationEn: string;
    adaptationBn: string;
    speciesId?: string;
  }>;
}

export const INVERTEBRATE_VS_VERTEBRATE: InvertVsVertParameter[] = [
  {
    feature: "Axial Endoskeleton (Notochord / Backbone)",
    featureBn: "অক্ষীয় অন্তঃকঙ্কাল (নটোকর্ড / মেরুদণ্ড)",
    invertebrateStateEn: "Strictly absent; hydrostatic pressure or non-living external exoskeleton (chitin, calcium carbonate) provides support.",
    invertebrateStateBn: "সম্পূর্ণ অনুপস্থিত; হাইড্রোস্ট্যাটিক চাপ অথবা নির্জীব বহিঃকঙ্কাল (কাইটিন, চুন) দেহকে ধরে রাখে।",
    vertebrateStateEn: "Present; dorsal cartilaginous or bony vertebral column replacing the embryonic notochord, housing the spinal cord.",
    vertebrateStateBn: "উপস্থিত; ভ্রূণীয় নটোকর্ডের স্থানে তরুণাস্থি বা অস্থিময় মেরুদণ্ড বিকশিত হয় যা সুষুম্নাকাণ্ডকে রক্ষা করে।",
    evolutionarySignificanceEn: "Enables continuous somatic growth without molting vulnerabilities and supports large terrestrial body mass.",
    evolutionarySignificanceBn: "খোলস ত্যাগের দুর্বলতা ছাড়াই দেহের অবিচ্ছিন্ন বৃদ্ধি এবং বিশাল শারীরিক ওজন বহনে সক্ষমতা দেয়।"
  },
  {
    feature: "Nervous System Architecture & Cephalization",
    featureBn: "স্নায়ুতন্ত্রের গঠন ও মস্তকীভবন",
    invertebrateStateEn: "Ventral solid nerve cord (often paired) with segmental ganglia; brain encircles esophagus (circumpharyngeal ring).",
    invertebrateStateBn: "অঙ্কীয় কঠিন স্নায়ুরজ্জু (প্রায়শ জোড়ায়); অন্ননালীবেষ্টনকারী স্নায়ুবলয় সমৃদ্ধ মস্তিষ্ক।",
    vertebrateStateEn: "Dorsal hollow tubular nerve cord (spinal cord); tripartite brain (fore-, mid-, hindbrain) protected inside a bony or cartilaginous cranium.",
    vertebrateStateBn: "পৃষ্ঠীয় ফাঁপা নলাকার স্নায়ুরজ্জু; করোটির ভেতরে সুরক্ষিত অত্যন্ত জটিল ত্রিখণ্ডিত মস্তিষ্ক।",
    evolutionarySignificanceEn: "Supports immense telereceptive sensory integration, behavioral plasticity, and cognitive processing.",
    evolutionarySignificanceBn: "উন্নত সংবেদনশীলতা, আচরণগত নমনীয়তা এবং বুদ্ধিবৃত্তিক জটিলতার বিকাশ ঘটায়।"
  },
  {
    feature: "Circulatory Architecture & Heart Location",
    featureBn: "সংবহনতন্ত্রের গঠন ও হৃৎপিণ্ডের অবস্থান",
    invertebrateStateEn: "Predominantly open circulatory system (hemocoel) in most phyla; heart (when present) situated dorsally.",
    invertebrateStateBn: "অধিকাংশে মুক্ত সংবহনতন্ত্র (হিমোসিল); হৃৎপিণ্ড উপস্থিত থাকলে তা পৃষ্ঠদেশে (পিঠে) অবস্থিত।",
    vertebrateStateEn: "Closed circulatory system; ventral muscular heart with 2, 3, or 4 chambers pumping blood through closed endothelial capillary beds.",
    vertebrateStateBn: "বদ্ধ সংবহনতন্ত্র; অঙ্কীয়দেশে (বুকে) অবস্থিত ২, ৩ বা ৪ প্রকোষ্ঠী পেশিবহুল হৃৎপিণ্ড যা কৈশিক জালিকায় রক্ত সঞ্চালন করে।",
    evolutionarySignificanceEn: "Maintains high, regulated blood pressure required for rapid metabolic delivery in active predators.",
    evolutionarySignificanceBn: "উচ্চ রক্তচাপ বজায় রেখে কোষে দ্রুত অক্সিজেন ও পুষ্টি সরবরাহ নিশ্চিত করে।"
  },
  {
    feature: "Respiratory Pigment & Hemoglobin Binding",
    featureBn: "শ্বসন রঞ্জক ও অক্সিজেন সংবহন",
    invertebrateStateEn: "Diverse pigments (hemocyanin, chlorocruorin, hemerythrin, hemoglobin) dissolved freely in plasma or in amoebocytes.",
    invertebrateStateBn: "হিমোসায়ানিন, ক্লোরোক্রুওরিন ইত্যাদি রঞ্জক যা রক্তরসে সরাসরি দ্রবীভূত থাকে।",
    vertebrateStateEn: "Hemoglobin exclusively packaged inside specialized enucleated or nucleated erythrocytes (red blood cells).",
    vertebrateStateBn: "হিমোগ্লোবিন সুনির্দিষ্টভাবে লোহিত রক্তকণিকার (RBC) ভেতরে সংরক্ষিত থাকে।",
    evolutionarySignificanceEn: "Prevents high osmotic colloid pressure while drastically elevating oxygen-carrying capacity of blood.",
    evolutionarySignificanceBn: "রক্তের সান্দ্রতা না বাড়িয়ে অবিশ্বাস্য পরিমাণ অক্সিজেন পরিবহনের সুযোগ তৈরি করে।"
  },
  {
    feature: "Excretory Filtration & Osmoregulation",
    featureBn: "রেচন পরিশোধন ও অভিস্রবণ নিয়ন্ত্রণ",
    invertebrateStateEn: "Protonephridia (flame cells), metanephridia, Malpighian tubules, or antennal glands filtering coelomic fluid or hemolymph.",
    invertebrateStateBn: "শিখা কোষ, মেটানেফ্রিডিয়া, ম্যালপিজিয়ান নালিকা বা গ্রিন গ্ল্যান্ড দ্বারা বর্জ্য নিষ্কাশন।",
    vertebrateStateEn: "Paired metanephric/mesonephric kidneys containing millions of microscopic filtration units (glomerular nephrons).",
    vertebrateStateBn: "লাখো গ্লোমেরুলার নেফ্রন সমৃদ্ধ এক জোড়া বৃক্ক যা উচ্চ চাপে রক্ত ছেঁকে মূত্র তৈরি করে।",
    evolutionarySignificanceEn: "Ultrafiltration of blood under arterial hydrostatic pressure enabling precise electrolyte and water homeostasis.",
    evolutionarySignificanceBn: "রক্তের সূক্ষ্ম পরিশোধন এবং ডাঙায় পানির অপচয় রোধে অত্যন্ত কার্যকর অভিস্রবণ নিয়ন্ত্রণ।"
  },
  {
    feature: "Pharyngeal Slits & Craniofacial Skeleton",
    featureBn: "গলবিলীয় ফুলকা ছিদ্র ও মুখের কাঠামো",
    invertebrateStateEn: "Pharyngeal perforations absent in non-chordate invertebrates; mouthparts derived from specialized modified limbs.",
    invertebrateStateBn: "নন-কর্ডাট অমেরুদণ্ডীতে গলবিলীয় খাঁজ অনুপস্থিত; মুখোপাঙ্গ মূলত রূপান্তরিত পা দ্বারা গঠিত।",
    vertebrateStateEn: "Pharyngeal pouches present in embryo; develop into branchial respiratory arches (fishes) or auditory/endocrine structures and jaws in tetrapods.",
    vertebrateStateBn: "ভ্রূণে গলবিলীয় ফুলকা খাঁজ থাকে যা মাছে ফুলকা এবং চতুষ্পদীতে কান, থাইরয়েড ও চোয়ালে রূপান্তরিত হয়।",
    evolutionarySignificanceEn: "Evolution of motorized articulated jaws from anterior pharyngeal arches revolutionized predatory feeding.",
    evolutionarySignificanceBn: "ফুলকা খিলান থেকে চোয়ালের বিবর্তন মেরুদণ্ডীদের শিকারী স্বভাবের আমূল পরিবর্তন আনে।"
  }
];

export const ORGAN_SYSTEM_COMPARISONS: OrganSystemComparison[] = [
  {
    id: "digestive-system",
    systemName: "Comparative Digestive Systems",
    systemNameBn: "তুলনামূলক পরিপাকতন্ত্র",
    evolutionaryTrajectory: {
      en: "From intracellular digestion in Porifera through blind incomplete sac-like gastrovascular cavities (Cnidaria, Platyhelminthes) to tube-within-a-tube complete digestive tracts with specialized regional enzymatic processing (Nematoda, Annelida, Mollusca, Arthropoda, Chordata).",
      bn: "স্পঞ্জের অন্তঃকোষীয় পরিপাক থেকে শুরু করে নিডারিয়া ও চ্যাপ্টাকৃমির অন্ধ গ্যাস্ট্রোভাস্কুলার গহ্বর হয়ে খণ্ডায়িত ও উন্নত প্রাণীতে সম্পূর্ণ নলাকার বিশেষায়িত এনজাইমভিত্তিক পরিপাকতন্ত্রের রূপান্তর।"
    },
    matrix: [
      {
        group: "Porifera (Sponges)",
        groupBn: "পরিফেরা (স্পঞ্জ)",
        structureEn: "No digestive tract; choanocyte collar chambers and wandering mesohyl amoebocytes.",
        structureBn: "কোনো পরিপাকনালী নেই; চোয়ানোসাইট কলার ও মেসোহিল অ্যামিবোসাইট।",
        mechanismEn: "Strictly intracellular; microplankton ingested by phagocytosis and digested in food vacuoles.",
        mechanismBn: "সম্পূর্ণ অন্তঃকোষীয়; ফ্যাগোসাইটোসিস দ্বারা খাদ্য গ্রহণ ও ভ্যাকুওলে পরিপাক।",
        representativeTaxa: "Spongilla, Cliona"
      },
      {
        group: "Cnidaria (Corals & Jellyfishes)",
        groupBn: "নিডারিয়া (জেলিফিশ ও প্রবাল)",
        structureEn: "Blind gastrovascular cavity (coelenteron) with single oral opening functioning as mouth and anus.",
        structureBn: "একক মুখছিদ্রযুক্ত অন্ধ গ্যাস্ট্রোভাস্কুলার গহ্বর (সিলেন্টেরন)।",
        mechanismEn: "Combined extracellular enzyme secretion by gastrodermal gland cells followed by intracellular phagocytosis.",
        mechanismBn: "বহিঃকোষীয় এনজাইম ক্ষরণের পর অন্তঃকোষীয় ফ্যাগোসাইটোসিস দ্বারা পরিপাক সমাপ্ত হয়।",
        representativeTaxa: "Porites, Catostylus, Hydra"
      },
      {
        group: "Platyhelminthes (Flatworms)",
        groupBn: "প্লাটিহেলমিনথিস (চ্যাপ্টাকৃমি)",
        structureEn: "Incomplete branched intestine with eversible muscular pharynx; absent in tapeworms.",
        structureBn: "শাখান্বিত অন্ধ অন্ত্র ও বহির্মুখী পেশিবহুল গলবিল; ফিতাকৃমিতে অনুপস্থিত।",
        mechanismEn: "Extracellular breakdown in gut branches; cestodes absorb host predigested nutrients via microtriches.",
        mechanismBn: "অন্ত্রে প্রাথমিক পরিপাক; ফিতাকৃমি ত্বক দিয়ে পোষকের খাদ্য সরাসরি শোষণ করে।",
        representativeTaxa: "Fasciola, Planaria"
      },
      {
        group: "Annelida (Segmented Worms)",
        groupBn: "অ্যানেলিডা (কেঁচো)",
        structureEn: "Complete straight gut: mouth, muscular pharynx, esophagus, crop (storage), gizzard (grinding), and typhlosole.",
        structureBn: "মুখ, গলবিল, খাদ্যথলি (ক্রপ), পেষণকারী গিজার্ড এবং শোষক টিফলোসোলযুক্ত অন্ত্র।",
        mechanismEn: "Continuous unidirectional flow; mechanical trituration in muscular gizzard; enzymatic hydrolysis in intestine.",
        mechanismBn: "একমুখী খাদ্য প্রবাহ; গিজার্ডে যান্ত্রিক পেষণ এবং অন্ত্রে রাসায়নিক হজম।",
        representativeTaxa: "Metaphire, Lumbricus"
      },
      {
        group: "Arthropoda (Insects & Crustaceans)",
        groupBn: "আর্থ্রোপোডা (চিংড়ি ও পতঙ্গ)",
        structureEn: "Tripartite tract: ectodermal foregut (crop, gastric mill), endodermal midgut (digestive ceca), ectodermal hindgut.",
        structureBn: "অগ্রান্ত্র (গ্যাস্ট্রিক মিল), মধ্যান্ত্র (হেপাটিক সিকা) ও পশ্চাদান্ত্রে বিভক্ত উন্নত পৌষ্টিকনালী।",
        mechanismEn: "Mastication by mandibles or gastric mill; primary enzymatic absorption in midgut ceca; hindgut resorbs water.",
        mechanismBn: "চোয়াল বা গ্যাস্ট্রিক মিল দ্বারা চর্বন; মধ্যান্ত্রে শোষণ এবং মলনালীতে পানি পুনঃশোষণ।",
        representativeTaxa: "Macrobrachium, Periplaneta"
      },
      {
        group: "Mollusca (Gastropods & Bivalves)",
        groupBn: "মলাস্কা (শামুক ও ঝিনুক)",
        structureEn: "Buccal mass with chitinous radula; large digestive gland (hepatopancreas); crystalline style in bivalves.",
        structureBn: "র্যাডুলা রেতিজিহ্বা, বৃহদাকার পরিপাক গ্রন্থি (হেপাটোপ্যানক্রিয়াস) এবং ক্রিস্টালাইন স্টাইল।",
        mechanismEn: "Radular rasping of plant/algal tissue; crystalline style rotates against gastric shield winding mucosal food strings.",
        mechanismBn: "র্যাডুলা দিয়ে ঘষে খাবার তোলা; ঝিনুকে সিলিয়ারি ছাঁকন ও ক্রিস্টালাইন স্টাইল দ্বারা পরিপাক।",
        representativeTaxa: "Pila, Lamellidens"
      },
      {
        group: "Chordata - Vertebrata",
        groupBn: "কর্ডাটা (মেরুদণ্ডী)",
        structureEn: "Oral cavity with teeth/tongue, muscular esophagus, stomach (acidic pepsin), duodenum with liver/pancreas, intestine, colon.",
        structureBn: "দাঁতযুক্ত মুখগহ্বর, পাকস্থলী (অ্যাসিড ও পেপসিন), যকৃৎ ও অগ্ন্যাশয়যুক্ত ক্ষুদ্রান্ত্র ও বৃহদান্ত্র।",
        mechanismEn: "Highly coordinated acid hydrolysis, bile emulsification, pancreatic enzyme cascades, microvilli nutrient uptake.",
        mechanismBn: "হাইড্রোক্লোরিক অ্যাসিড, পিত্তরস ও অগ্ন্যাশয় রসের সমন্বিত পরিপাক এবং ভিলাই দ্বারা শোষণ।",
        representativeTaxa: "Tenualosa, Fejervarya, Homo"
      }
    ]
  },
  {
    id: "respiratory-system",
    systemName: "Comparative Respiratory Systems",
    systemNameBn: "তুলনামূলক শ্বসনতন্ত্র",
    evolutionaryTrajectory: {
      en: "From simple cutaneous surface diffusion in acoelomates to specialized aquatic branchial organs (ctenidia, gills) and complex terrestrial air-breathing adaptations (tracheal networks, book lungs, and counter-current alveolar lungs).",
      bn: "দেহতল দিয়ে সরল ব্যাপন থেকে শুরু করে জলজ ফুলকা এবং পরবর্তীতে স্থলভাগে শ্বাসনালী (ট্রাকিয়া), বুক লাং এবং অ্যালভিওলাইযুক্ত স্পঞ্জের মতো ফুসফুসের বিবর্তনীয় বিকাশ।"
    },
    matrix: [
      {
        group: "Porifera & Cnidaria",
        groupBn: "পরিফেরা ও নিডারিয়া",
        structureEn: "Absence of discrete organs; thin moist epithelial cell membranes exposed to ambient water currents.",
        structureBn: "কোনো নির্দিষ্ট অঙ্গ নেই; পানির সংস্পর্শে থাকা পাতলা এপিথেলিয়াম কোষঝিল্লি।",
        mechanismEn: "Fickian simple diffusion driven by partial pressure gradients across cell layers.",
        mechanismBn: "কোষঝিল্লি দিয়ে ঘনত্বের নতিমাত্রা অনুযায়ী সরাসরি গ্যাসীয় ব্যাপন।",
        representativeTaxa: "Spongilla, Catostylus"
      },
      {
        group: "Annelida (Earthworms)",
        groupBn: "অ্যানেলিডা (কেঁচো)",
        structureEn: "Vascularized moist cutaneous epidermis protected by thin secreted mucous cuticle.",
        structureBn: "পাতলা মিউকাসযুক্ত রক্তনালীসমৃদ্ধ আর্দ্র ত্বক।",
        mechanismEn: "Atmospheric oxygen dissolves in surface mucus, diffuses into subepidermal capillary network, binds to hemoglobin.",
        mechanismBn: "মিউকাসে অক্সিজেন দ্রবীভূত হয়ে ত্বকের নিচের রক্তজালিকার হিমোগ্লোবিনে যুক্ত হয়।",
        representativeTaxa: "Metaphire posthuma"
      },
      {
        group: "Mollusca (Aquatic vs Amphibious)",
        groupBn: "মলাস্কা (জলজ বনাম উভচর)",
        structureEn: "Bipectinate ctenidial comb gills in mantle cavity; vascularized pulmonary lung sac in amphibious apple snails (Pila).",
        structureBn: "ম্যান্টল গহ্বরে পালকসদৃশ টিনিডিয়া ফুলকা; উভচর আপেল শামুকে রক্তনালীপূর্ণ ফুসফুসীয় থলি।",
        mechanismEn: "Dual respiration: ctenidia extract dissolved oxygen submerged; siphon extends above water to ventilate pulmonary sac.",
        mechanismBn: "দ্বৈত শ্বসন: পানির নিচে ফুলকা দিয়ে এবং সাইফন পানির উপরে তুলে ফুসফুসীয় থলি দিয়ে শ্বাস নেয়।",
        representativeTaxa: "Pila globosa, Lamellidens"
      },
      {
        group: "Arthropoda - Insecta",
        groupBn: "আর্থ্রোপোডা (পতঙ্গ)",
        structureEn: "Extensive branching tracheal system opening via segmental lateral spiracles; microscopic fluid-filled tracheoles.",
        structureBn: "পার্শ্বীয় স্পাইরাকল ছিদ্রযুক্ত শাখান্বিত শ্বাসনালী (ট্রাকিয়া) এবং প্রান্তীয় ট্রাকিওল।",
        mechanismEn: "Direct gas transport directly to mitochondria without requiring circulatory blood involvement.",
        mechanismBn: "রক্তের সাহায্য ছাড়াই সরাসরি কোষের মাইটোকন্ড্রিয়ায় গ্যাসীয় বিনিময় ঘটে।",
        representativeTaxa: "Musca, Schistocerca"
      },
      {
        group: "Arthropoda - Crustacea",
        groupBn: "আর্থ্রোপোডা (চিংড়ি)",
        structureEn: "Feathered branchial gills (phyllobranchiate or dendrobranchiate) housed in branchial gill chambers under carapace.",
        structureBn: "বর্মের নিচে ফুলকা প্রকোষ্ঠে অবস্থিত পালকসদৃশ ফুলকা (ফাইলোব্রাঙ্কিয়েট)।",
        mechanismEn: "Scaphognathite ('gill bailer') of second maxilla beats continuously pumping water across gill lamellae.",
        mechanismBn: "ম্যাক্সিলার স্ক্যাফোগনাথেট অবিরাম স্পন্দিত হয়ে ফুলকার ওপর পানির স্রোত বজায় রাখে।",
        representativeTaxa: "Macrobrachium rosenbergii"
      },
      {
        group: "Chordata - Fishes (Actinopterygii)",
        groupBn: "কর্ডাটা - মাছ",
        structureEn: "4-5 pairs of vascularized branchial gill arches bearing primary and secondary lamellae, protected by bony operculum.",
        structureBn: "অস্থিময় অপারকুলাম দিয়ে ঢাকা ল্যামেলিযুক্ত ৪-৫ জোড়া রক্তনালীপূর্ণ ফুলকা খিলান।",
        mechanismEn: "Counter-current gas exchange: blood flows in opposite direction to water current, extracting >85% of dissolved oxygen.",
        mechanismBn: "কাউন্টার-কারেন্ট পদ্ধতি: রক্ত ও পানির প্রবাহ বিপরীতমুখী হওয়ায় ৮৫% এর বেশি অক্সিজেন নিষ্কাশিত হয়।",
        representativeTaxa: "Tenualosa, Labeo"
      },
      {
        group: "Chordata - Tetrapods (Mammals)",
        groupBn: "কর্ডাটা - চতুষ্পদী স্তন্যপায়ী",
        structureEn: "Branching bronchoalveolar tree terminating in hundreds of millions of microscopic alveoli; diaphragm muscle.",
        structureBn: "কোটি কোটি আণুবীক্ষণিক অ্যালভিওলাই সমৃদ্ধ ফুসফুস এবং মধ্যচ্ছদা (ডায়াফ্রাম) পেশি।",
        mechanismEn: "Negative-pressure tidal ventilation driven by diaphragm and intercostal muscle contractions; surfactant prevents collapse.",
        mechanismBn: "ডায়াফ্রামের সংকোচনে সৃষ্ট ঋণাত্মক চাপে ফুসফুস প্রসারিত হয়ে অক্সিজেন সমৃদ্ধ বাতাস টেনে নেয়।",
        representativeTaxa: "Homo sapiens, Panthera"
      }
    ]
  },
  {
    id: "circulatory-system",
    systemName: "Comparative Circulatory Systems",
    systemNameBn: "তুলনামূলক সংবহনতন্ত্র",
    evolutionaryTrajectory: {
      en: "From diffusion-dependent non-vascular systems to open hemocoels (Arthropoda, non-cephalopod Mollusca) and high-pressure closed vascular circuits evolving from 2-chambered single circulation in fishes to 3-chambered circuits in amphibians and 4-chambered complete double circulation in birds and mammals.",
      bn: "সংবহনবিহীন প্রাণী থেকে উন্মুক্ত হিমোসিল এবং পরবর্তীতে মাছের ২-প্রকোষ্ঠী একক সংবহন থেকে উভচরের ৩-প্রকোষ্ঠী হয়ে পাখি ও স্তন্যপায়ীর ৪-প্রকোষ্ঠী দ্বৈত সংবহনতন্ত্রের বিবর্তন।"
    },
    matrix: [
      {
        group: "Arthropoda (Prawns & Insects)",
        groupBn: "আর্থ্রোপোডা (চিংড়ি ও পতঙ্গ)",
        structureEn: "Open circulatory system; dorsal tubular heart with ostia valves discharging hemolymph into open hemocoelic sinuses.",
        structureBn: "অস্টিয়াসহ পৃষ্ঠীয় নলাকার হৃৎপিণ্ড এবং হিমোসিল গহ্বরযুক্ত মুক্ত সংবহনতন্ত্র।",
        mechanismEn: "Low pressure circulation; hemolymph directly bathes organs; copper-hemocyanin transports O2 in decapods; colorless in insects.",
        mechanismBn: "নিম্নচাপের সংবহন; অঙ্গগুলো সরাসরি রক্তরসে নিমজ্জিত থাকে; চিংড়িতে হিমোসায়ানিন বিদ্যমান।",
        representativeTaxa: "Macrobrachium, Periplaneta"
      },
      {
        group: "Annelida (Earthworms)",
        groupBn: "অ্যানেলিডা (কেঁচো)",
        structureEn: "Closed vascular system; dorsal, ventral, and subneural vessels connected by 5 pairs of lateral contractile aortic arches ('hearts').",
        structureBn: "পৃষ্ঠীয় ও অঙ্কীয় রক্তনালী এবং ৫ জোড়া স্পন্দনশীল রক্তনালী ('হৃৎপিণ্ড') সমৃদ্ধ বদ্ধ সংবহন।",
        mechanismEn: "Dorsal vessel pumps blood forward; aortic arches pump downward to ventral vessel; hemoglobin dissolved in plasma.",
        mechanismBn: "পৃষ্ঠনালী রক্ত সামনে এবং পার্শ্বীয় হৃৎপিণ্ড রক্ত অঙ্কীয় নালীতে পাম্প করে; রক্তরসে হিমোগ্লোবিন থাকে।",
        representativeTaxa: "Metaphire posthuma"
      },
      {
        group: "Chordata - Fishes",
        groupBn: "কর্ডাটা - মাছ",
        structureEn: "Two-chambered heart in series: sinus venosus → single atrium → single muscular ventricle → bulbus/conus arteriosus.",
        structureBn: "দ্বি-প্রকোষ্ঠী হৃৎপিণ্ড: সাইনাস ভেনোসাস → অলিন্দ → পেশিবহুল নিলয় → কোনাস আর্টারিওসাস।",
        mechanismEn: "Single circulation: heart pumps deoxygenated blood through gills for oxygenation, continuing directly to systemic tissues.",
        mechanismBn: "একক সংবহন: হৃৎপিণ্ড কেবল অনক্সিজেনযুক্ত রক্ত ফুলকায় পাঠায়, যা পরে সারা দেহে চলে যায়।",
        representativeTaxa: "Tenualosa, Labeo"
      },
      {
        group: "Chordata - Amphibians",
        groupBn: "কর্ডাটা - উভচর",
        structureEn: "Three-chambered heart: two atria (right receives systemic venous blood, left receives pulmonary venous blood) and one common ventricle.",
        structureBn: "তিন প্রকোষ্ঠী হৃৎপিণ্ড: দুটি অলিন্দ (ডান ও বাম) এবং একটি সাধারণ নিলয়।",
        mechanismEn: "Incomplete double circulation: spiral fold (trabeculae) in ventricle minimizes mixing of oxygenated and deoxygenated streams.",
        mechanismBn: "অসম্পূর্ণ দ্বৈত সংবহন: নিলয়ে রক্তের সামান্য মিশ্রণ ঘটলেও স্পাইরাল কপাটিকা পৃথকীকরণে সাহায্য করে।",
        representativeTaxa: "Fejervarya limnocharis"
      },
      {
        group: "Chordata - Mammals & Birds",
        groupBn: "কর্ডাটা - স্তন্যপায়ী ও পাখি",
        structureEn: "Four-chambered heart: two completely partitioned atria and two completely separated ventricles (interventricular septum).",
        structureBn: "চার প্রকোষ্ঠী হৃৎপিণ্ড: সম্পূর্ণ বিভক্ত দুটি অলিন্দ এবং দুটি পৃথক নিলয়।",
        mechanismEn: "Complete double circulation: systemic and pulmonary circuits completely isolated; zero venous-arterial blood mixing; high systemic pressure.",
        mechanismBn: "সম্পূর্ণ দ্বৈত সংবহন: পালমোনারি ও সিস্টেমিক সংবহন সম্পূর্ণ পৃথক; কোনো রক্ত মিশ্রণ ঘটে না।",
        representativeTaxa: "Panthera, Homo sapiens"
      }
    ]
  },
  {
    id: "excretory-system",
    systemName: "Comparative Excretory Systems & Nitrogenous Waste",
    systemNameBn: "তুলনামূলক রেচনতন্ত্র ও নাইট্রোজেন ঘটিত বর্জ্য",
    evolutionaryTrajectory: {
      en: "From blind protonephridial flame bulbs in acoelomates to open coelomic metanephridia in annelids, hemolymph-suspended Malpighian tubules in terrestrial insects, and glomerular nephron kidneys in vertebrates evolving ammonotelism, ureotelism, and uricotelism.",
      bn: "শিখা কোষ থেকে মেটানেফ্রিডিয়া, পতঙ্গের ম্যালপিজিয়ান নালিকা এবং মেরুদণ্ডীদের নেফ্রনযুক্ত বৃক্কে রূপান্তর; জলজ অ্যামোনিয়া থেকে ডাঙার ইউরিয়া ও ইউরিক অ্যাসিড রেচনের অভিযোজন।"
    },
    matrix: [
      {
        group: "Platyhelminthes (Flatworms)",
        groupBn: "প্লাটিহেলমিনথিস (চ্যাপ্টাকৃমি)",
        structureEn: "Protonephridia with flickering ciliated flame cells capping blind terminal tubules.",
        structureBn: "অন্ধ প্রান্তীয় নালিকায় অবস্থিত সিলিয়াযুক্ত শিখা কোষ (ফ্লেম সেল)।",
        mechanismEn: "Cilia beat like a flickering candle, generating negative pressure that ultrafilters parenchymal fluid; predominantly osmoregulatory.",
        mechanismBn: "সিলিয়ার স্পন্দনে ঋণাত্মক চাপ সৃষ্টি হয় যা তরল ছেঁকে নেফ্রিডিওপোর দিয়ে বের করে দেয়।",
        representativeTaxa: "Fasciola hepatica"
      },
      {
        group: "Annelida (Earthworms)",
        groupBn: "অ্যানেলিডা (কেঁচো)",
        structureEn: "Metamerically paired metanephridia with ciliated internal opening (nephrostome) spanning two segments.",
        structureBn: "খণ্ডকে এক জোড়া মেটানেফ্রিডিয়া যার সিলিয়াময় নেফ্রোস্টোম পূর্ববর্তী খণ্ড থেকে তরল টানে।",
        mechanismEn: "Coelomic fluid drawn into convoluted tubule; active reabsorption of glucose, ions, and water; discharges dilute urine.",
        mechanismBn: "সিলোমিক তরল থেকে প্রয়োজনীয় আয়ন ও জল পুনঃশোষণ করে নেফ্রিডিওপোর দিয়ে রেচন বর্জ্য ফেলে।",
        representativeTaxa: "Metaphire posthuma"
      },
      {
        group: "Arthropoda - Insecta",
        groupBn: "আর্থ্রোপোডা (পতঙ্গ)",
        structureEn: "Blind tubular Malpighian tubules suspended freely in hemolymph at midgut-hindgut junction.",
        structureBn: "হিমোসিলে ভাসমান অন্ধ ম্যালপিজিয়ান নালিকা যা মধ্যান্ত্র ও পশ্চাদান্ত্রের সংযোগস্থলে থাকে।",
        mechanismEn: "Active transport of uric acid, potassium, and water into lumen; rectum precipitates insoluble uric acid crystals conserving >99% water.",
        mechanismBn: "ইউরিক অ্যাসিড ক্রিস্টাল আকারে নিষ্কাশন করে ৯৯% এর বেশি পানি সংরক্ষণ করে (ইউরিকোটেলিক)।",
        representativeTaxa: "Periplaneta, Musca"
      },
      {
        group: "Chordata - Fishes",
        groupBn: "কর্ডাটা - মাছ",
        structureEn: "Paired mesonephric kidneys and branchial gill epithelia; specialized chloride cells.",
        structureBn: "মেসোনেফ্রিক বৃক্ক এবং ফুলকার ক্লোরাইড কোষ।",
        mechanismEn: "Ammonotelic: toxic ammonia diffuses directly through gill membranes; freshwater fish excrete massive dilute urine.",
        mechanismBn: "অ্যামোনোটেলিক: ফুলকা দিয়ে বিষাক্ত অ্যামোনিয়া বের করে দেয়; মিঠা পানির মাছ প্রচুর পাতলা মূত্র ত্যাগ করে।",
        representativeTaxa: "Tenualosa, Labeo"
      },
      {
        group: "Chordata - Mammals",
        groupBn: "কর্ডাটা - স্তন্যপায়ী",
        structureEn: "Paired metanephric kidneys containing millions of nephrons with glomeruli and elongated Loops of Henle.",
        structureBn: "হ্যানলির লুপ ও গ্লোমেরুলাস সমৃদ্ধ লাখ লাখ নেফ্রনযুক্ত মেটানেফ্রিক বৃক্ক।",
        mechanismEn: "Ureotelic: liver synthesizes urea from ammonia via ornithine cycle; countercurrent multiplier in Loop of Henle produces hypertonic urine.",
        mechanismBn: "ইউরিওটেলিক: যকৃতে অর্নিথিন চক্রে ইউরিয়া তৈরি হয়; হ্যানলির লুপ পানি পুনঃশোষণ করে ঘন মূত্র তৈরি করে।",
        representativeTaxa: "Homo sapiens"
      }
    ]
  },
  {
    id: "nervous-system",
    systemName: "Comparative Nervous Systems & Sensory Integration",
    systemNameBn: "তুলনামূলক স্নায়ুতন্ত্র ও সংবেদী সমন্বয়",
    evolutionaryTrajectory: {
      en: "From non-centralized diffuse nerve nets in basal diploblasts (Cnidaria) through ladder-like nervous systems with cephalic ganglia (Platyhelminthes, Annelida) to ventral paired nerve cords with circumesophageal rings in Arthropoda, and culminating in dorsal hollow tubular cords with tripartite and telencephalized cerebral cortex in Vertebrata.",
      bn: "নিডারিয়ার অবিন্যস্ত স্নায়ুজাল থেকে শুরু করে চ্যাপ্টাকৃমি ও অ্যানেলিডার মই-সদৃশ গ্যাংলিয়াযুক্ত স্নায়ুতন্ত্র, আর্থ্রোপোডার অন্ননালীবেষ্টনকারী বলয় ও অঙ্কীয় স্নায়ুরজ্জু হয়ে মেরুদণ্ডীর পৃষ্ঠীয় ফাঁপা নলাকার সুষুম্নাকাণ্ড এবং সেরেব্রাল কর্টেক্সসমৃদ্ধ জটিল মস্তিষ্কের বিবর্তন।"
    },
    matrix: [
      {
        group: "Cnidaria (Hydra & Jellyfishes)",
        groupBn: "নিডারিয়া (হাইড্রা ও জেলিফিশ)",
        structureEn: "Non-centralized diffuse two-dimensional nerve net; interconnected multipolar and bipolar protoneurons without myelin.",
        structureBn: "কোনো কেন্দ্রীয় মস্তিষ্ক নেই; দেহপ্রাচীরে বিস্তৃত দ্বিমাত্রিক অবিন্যস্ত স্নায়ুজাল।",
        mechanismEn: "Bidirectional non-decremental synaptic conduction coordinates whole-body contractile responses and tentacle stinging.",
        mechanismBn: "উভমুখী সাইন্যাপটিক সঞ্চালনের মাধ্যমে সমগ্র দেহের সংকোচন ও কর্ষিকার শিকার ধরা পরিচালিত হয়।",
        representativeTaxa: "Hydra, Catostylus"
      },
      {
        group: "Platyhelminthes (Planaria)",
        groupBn: "প্লাটিহেলমিনথিস (প্ল্যানেরিয়া)",
        structureEn: "Bilobed cerebral ganglion ('primitive brain') with paired longitudinal ventral nerve cords linked by transverse commissures ('ladder-type').",
        structureBn: "দ্বিখণ্ডিত মস্তিষ্কী গ্যাংলিয়ন এবং অনুপ্রস্থ স্নায়ু দ্বারা যুক্ত একজোড়া অনুদৈর্ঘ্য মই-সদৃশ স্নায়ুরজ্জু।",
        mechanismEn: "Primitive cephalization: bilateral anterior sensory integration of phototactic ocelli and chemoreceptive auricles directing directional locomotion.",
        mechanismBn: "আদি মস্তকীভবন: আলোসংবেদী ওসেলি ও ঘ্রাণ সংবেদী অরিকেলের তথ্য সমন্বয় করে দিকমুখী চলন নিয়ন্ত্রণ।",
        representativeTaxa: "Dugesia, Fasciola"
      },
      {
        group: "Annelida (Earthworms & Leeches)",
        groupBn: "অ্যানেলিডা (কেঁচো ও জোঁক)",
        structureEn: "Suprapharyngeal ganglion ('brain') connected by circumpharyngeal connectives to a subpharyngeal ganglion and ventral ganglionated nerve cord.",
        structureBn: "গলবিলের উপরে সুপ্রাফ্যারিঞ্জিয়াল মস্তিষ্ক এবং অন্ননালীবেষ্টনকারী বলয় দিয়ে যুক্ত অঙ্কীয় স্নায়ুরজ্জু।",
        mechanismEn: "Metameric autonomy: each segment contains a ganglion coordinating local peristaltic circular/longitudinal reflexes; giant axons mediate rapid withdrawal.",
        mechanismBn: "প্রতি খণ্ডে স্বাধীন গ্যাংলিয়ন স্থানীয় পেশি সংকোচন নিয়ন্ত্রণ করে; দানবীয় অ্যাক্সন দ্রুত পিছিয়ে যাওয়ার সংকেত দেয়।",
        representativeTaxa: "Metaphire posthuma, Hirudinaria"
      },
      {
        group: "Arthropoda (Insects & Decapods)",
        groupBn: "আর্থ্রোপোডা (পতঙ্গ ও ক্রাস্টাসিয়া)",
        structureEn: "Tripartite brain (protocerebrum, deutocerebrum, tritocerebrum), circumesophageal ring, paired ventral cord with thoracic and abdominal ganglia.",
        structureBn: "তিন খণ্ডে বিভক্ত মস্তিষ্ক (প্রোটো-, ডিউটো- ও ট্রাইটোসেরিব্রাম) এবং বক্ষ ও উদরের গ্যাংলিয়াযুক্ত অঙ্কীয় স্নায়ুরজ্জু।",
        mechanismEn: "Protocerebrum processes complex compound-eye visual data; mushroom bodies execute olfactory learning, foraging memory, and dance communication.",
        mechanismBn: "যৌগিক চোখের দৃষ্টি তথ্য প্রসেসিং; মাশরুম বডি জটিল গন্ধ শিক্ষণ, স্মৃতি ও নৃত্যের মাধ্যমে যোগাযোগ পরিচালনা করে।",
        representativeTaxa: "Periplaneta americana, Apis mellifera"
      },
      {
        group: "Mollusca (Cephalopods - Octopus/Squid)",
        groupBn: "মলাস্কা (সেফালোপোডা - অক্টোপাস)",
        structureEn: "Highly cephalized massive brain enclosed in cartilaginous cranium; 500 million neurons (two-thirds distributed across arm axial nerve cords).",
        structureBn: "তরুণাস্থিময় করোটিতে সুরক্ষিত ৫০ কোটি নিউরনযুক্ত দানবীয় মস্তিষ্ক যার দুই-তৃতীয়াংশ বাহুর স্নায়ুরজ্জুতে বিন্যস্ত।",
        mechanismEn: "Decentralized motor intelligence: arms can taste, touch, and manipulate objects autonomously while central lobes manage observational learning and camouflage.",
        mechanismBn: "বিকেন্দ্রীভূত বুদ্ধিমত্তা: বাহুগুলো স্বাধীনভাবে স্পর্শ ও স্বাদ নিয়ে কাজ করে, আর কেন্দ্রীয় মস্তিষ্ক ছদ্মবেশ ও শিখন নিয়ন্ত্রণ করে।",
        representativeTaxa: "Octopus vulgaris, Uroteuthis duvaucelii"
      },
      {
        group: "Chordata - Vertebrata (Mammals)",
        groupBn: "কর্ডাটা - মেরুদণ্ডী (স্তন্যপায়ী)",
        structureEn: "Cranium-enclosed tripartite brain with deeply folded neocortex (gyri and sulci); dorsal hollow spinal cord; autonomic sympathetic/parasympathetic networks.",
        structureBn: "করোটির ভেতরে খাঁজকাটা নিওকর্টেক্সসমৃদ্ধ বৃহৎ মস্তিষ্ক, পৃষ্ঠীয় ফাঁপা সুষুম্নাকাণ্ড এবং স্বায়ত্তশাসিত স্নায়ুতন্ত্র।",
        mechanismEn: "Hierarchical encephalization: cerebral cortex executes conscious cognition, reasoning, abstract language, and voluntary fine motor coordination.",
        mechanismBn: "উচ্চতর মস্তকীভবন: সেরিব্রাল কর্টেক্স সচেতন চিন্তাভাবনা, যুক্তিবোধ, ভাষা ও সূক্ষ্ম পেশি নিয়ন্ত্রণ পরিচালনা করে।",
        representativeTaxa: "Homo sapiens, Panthera tigris"
      }
    ]
  },
  {
    id: "reproductive-system",
    systemName: "Comparative Reproductive Systems & Life Strategies",
    systemNameBn: "তুলনামূলক প্রজননতন্ত্র ও জীবন কৌশল",
    evolutionaryTrajectory: {
      en: "From simple asexual budding and broadcast external spawning with millions of pelagic gametes (Cnidaria, Teleosts) to specialized internal copulatory structures, cleidoic amniotic eggs decoupling reproduction from ambient water (Reptiles, Birds), and intimate maternal-fetal placental viviparity (Mammals).",
      bn: "মুকুলোদগম ও কোটি কোটি ডিম্বাণুর জলজ বাহ্যিক নিষেক থেকে শুরু করে অভ্যন্তরীণ জননাঙ্গ, ডাঙায় প্রজননের জন্য খোলোসবদ্ধ অ্যামনিওটিক ডিম্ব এবং সবশেষে ভ্রূণ লালনের জন্য জরায়ুজ প্লাসেন্টার বিবর্তন।"
    },
    matrix: [
      {
        group: "Cnidaria & Porifera",
        groupBn: "নিডারিয়া ও পরিফেরা",
        structureEn: "No specialized reproductive ducts; gametes differentiate directly from interstitial stem cells (Cnidaria) or choanocytes/amoebocytes (Porifera).",
        structureBn: "কোনো সুনির্দিষ্ট জনননালী নেই; ইন্টারস্টিশিয়াল বা চোয়ানোসাইট কোষ থেকে সরাসরি জননকোষ তৈরি হয়।",
        mechanismEn: "Metagenesis: asexual sessile polyp generates free-swimming sexual medusae by strobilation; synchronized broadcast spawning triggered by lunar cycles.",
        mechanismBn: "জনুক্রম: অযৌন পলিপ থেকে স্ট্রবিলেশনে মুক্ত সাঁতারু মেডুসা তৈরি; চন্দ্রচক্র অনুযায়ী একযোগে পানিতে জননকোষ নির্গমন।",
        representativeTaxa: "Aurelia aurita, Hydra"
      },
      {
        group: "Platyhelminthes (Parasitic Flatworms)",
        groupBn: "প্লাটিহেলমিনথিস (পরজীবী কৃমি)",
        structureEn: "Monoecious (hermaphroditic) hyper-complex reproductive systems: multiple testes, branched ovary, yolk vitelline glands, uterus, cirrus sac.",
        structureBn: "উভলিঙ্গ অত্যন্ত জটিল জননতন্ত্র: বহু শুক্রাশয়, শাখান্বিত ডিম্বাশয়, কুসুম গ্রন্থি ও জরায়ু।",
        mechanismEn: "High fecundity compensatory strategy: massive daily egg output (up to 20,000 eggs/day) compensating for complex multi-host parasitic life cycle hazards.",
        mechanismBn: "অসংখ্য পোষকনির্ভর কঠিন জীবনচক্রে টিকে থাকার জন্য প্রতিদিন হাজার হাজার ডিম উৎপাদন (উচ্চ গর্ভধারণ ক্ষমতা)।",
        representativeTaxa: "Fasciola hepatica, Taenia solium"
      },
      {
        group: "Arthropoda (Insects)",
        groupBn: "আর্থ্রোপোডা (পতঙ্গ)",
        structureEn: "Dioecious with internal fertilization: male aedeagus, female spermatheca for long-term sperm storage, chitinous ovipositor for depositing eggs.",
        structureBn: "একযৌন প্রাণী; পুরুষের এইডিয়াগাস এবং স্ত্রীর শুক্রাণু সঞ্চয়ী স্পার্মাথিকা ও ডিম পাড়ার ওভিপজিটর।",
        mechanismEn: "Internal fertilization; female stores sperm for months, fertilizing eggs sequentially as they pass down oviduct during egg-laying.",
        mechanismBn: "অভ্যন্তরীণ নিষেক; স্ত্রী মাসের পর মাস স্পার্মাথিকায় শুক্রাণু বাঁচিয়ে রেখে ডিম ছাড়ার সময় একটি একটি করে নিষিক্ত করে।",
        representativeTaxa: "Periplaneta americana, Apis mellifera"
      },
      {
        group: "Chordata - Anamniotes (Fishes & Amphibians)",
        groupBn: "কর্ডাটা - মাছ ও উভচর (অ্যানঅ্যামনিওটা)",
        structureEn: "Mesovarium and mesorchium holding gonads; wolffian ducts in males; oviducts (Müllerian) in females; jelly-coated non-cleidoic anamniotic eggs.",
        structureBn: "বৃক্কে যুক্ত জননগ্রন্থি এবং জেলিতে মোড়ানো খোলোসহীন অ্যানঅ্যামনিওটিক ডিম্ব।",
        mechanismEn: "External broadcast fertilization in open water; biphasic life history requiring aquatic larval stage (tadpole / fry) undergoing metamorphosis.",
        mechanismBn: "পানিতে বাহ্যিক নিষেক; জীবনচক্রে জলজ ব্যাঙাচি বা পোনা দশা বিদ্যমান যা রূপান্তরের মাধ্যমে পূর্ণাঙ্গ রূপ পায়।",
        representativeTaxa: "Tenualosa ilisha, Fejervarya limnocharis"
      },
      {
        group: "Chordata - Amniotes (Sauropsids: Reptiles & Birds)",
        groupBn: "কর্ডাটা - সরীসৃপ ও পাখি (অ্যামনিওটা)",
        structureEn: "Internal copulatory organs (hemipenes in squamates, cloacal kiss in most birds); oviduct with shell and albumen secreting glands.",
        structureBn: "অভ্যন্তরীণ জননাঙ্গ এবং ক্যালসিয়ামযুক্ত খোলোস ও অ্যালবুমিন নিঃসরণকারী ডিম্বনালী।",
        mechanismEn: "Cleidoic amniotic egg: amnion (fluid cushion), chorion (gas exchange), allantois (nitrogen waste), and yolk sac provide complete autonomous life support on dry land.",
        mechanismBn: "অ্যামনিওটিক ডিম্ব: অ্যামনিয়ন, কোরিয়ন ও অ্যালানটয়েস পর্দা ডাঙায় ভ্রূণকে পানির অভাব ছাড়াই পূর্ণাঙ্গ বিকাশের সুযোগ দেয়।",
        representativeTaxa: "Varanus bengalensis, Passer domesticus"
      },
      {
        group: "Chordata - Eutherian Mammals",
        groupBn: "কর্ডাটা - প্লাসেন্টাল স্তন্যপায়ী",
        structureEn: "Paired abdominal ovaries, fallopian tubes, muscular uterus, copulatory vagina; male testes in scrotal thermoregulatory sacs with penis.",
        structureBn: "পেশিবহুল জরায়ু ও ডিম্বনালী; পুরুষে তাপমাত্রা নিয়ন্ত্রক স্ক্রোটামে অবস্থিত শুক্রাশয় ও শিশ্ন।",
        mechanismEn: "Hemochorial/endotheliochorial chorioallantoic placenta: invasive trophoblast mediates metabolic exchange between maternal and fetal circulations; lactation via mammary glands.",
        mechanismBn: "জরায়ুজ প্লাসেন্টার মাধ্যমে মাতৃরক্ত থেকে সরাসরি ভ্রূণে পুষ্টি ও অক্সিজেন সরবরাহ; সন্তান প্রসবের পর স্তন্যপান।",
        representativeTaxa: "Homo sapiens, Panthera tigris"
      }
    ]
  }
];

export const FUNCTIONAL_ADAPTATIONS: FunctionalAdaptation[] = [
  {
    id: "adaptation-volant",
    title: "Volant (Powered Aerial Flight) Adaptation",
    titleBn: "উড্ডয়ন (বায়বীয় ওড়ার) অভিযোজন",
    descriptionEn: "Independent evolution of true powered flight in two animal phyla: Arthropoda (Class Insecta) and Chordata (Pterosaurs, Aves, Chiroptera).",
    descriptionBn: "প্রাণিজগতের দুটি পর্বে ওড়ার ক্ষমতার স্বাধীন বিবর্তন: আর্থ্রোপোডা (পতঙ্গ) এবং কর্ডাটা (পাখি ও বাদুড়)।",
    morphologicalModifications: {
      en: [
        "Pneumatized hollow bones with internal trabecular struts reducing structural weight in birds",
        "Enlarged sternal keel (carina) anchoring massive flight muscles (pectoralis major)",
        "Aerodynamic asymmetric flight feathers in birds; membranous chitinous thoracic wings in insects",
        "High-efficiency unidirectional flow parabronchial lung system with interconnected air sacs in birds",
        "Hyper-elevated basal metabolic rates and specialized binocular visual acuity"
      ],
      bn: [
        "পাখির ফাঁপা বায়বীয় অস্থি (নিউম্যাটিক বোন) যা শরীরের ওজন কমায়",
        "উড্ডয়ন পেশি যুক্ত করার জন্য বুকের স্টার্নামে প্রশস্ত কিল (Carina)",
        "বাতাস কাটার জন্য পালক ও ডানার অ্যারোডাইনামিক আকৃতি",
        "বায়ুথলিযুক্ত অবিচ্ছিন্ন একমুখী ফুসফুস যা উড্ডয়নকালে প্রচুর অক্সিজেন যোগায়",
        "উচ্চ বিপাকীয় হার এবং প্রখর দ্বিনেত্র দৃষ্টি"
      ]
    },
    examples: [
      {
        taxon: "Aves (Birds)",
        adaptationEn: "Forelimbs modified into feathered airfoils; toothless keratinous rhamphotheca bill; fused synsacrum.",
        adaptationBn: "সম্মুখ পা ডানায় রূপান্তরিত; দাঁতহীন ওজনে হালকা চঞ্চু; সংযুক্ত সিনস্যাক্রাম কঙ্কাল।",
        speciesId: "sp-passer-domesticus"
      },
      {
        taxon: "Insecta (Insects)",
        adaptationEn: "Not modified limbs, but outfoldings of thoracic cuticle powered by indirect flight muscles vibrating tergum.",
        adaptationBn: "রূপান্তরিত পা নয়, বরং বক্ষের কিউটিকল থেকে উৎপন্ন ডানা যা থোরাসিক পেশি দ্বারা দ্রুত স্পন্দিত হয়।",
        speciesId: "sp-crocothemis-servilia"
      }
    ]
  },
  {
    id: "adaptation-fossorial",
    title: "Fossorial (Subterranean Burrowing) Adaptation",
    titleBn: "খননকারী (মাটির নিচে গর্তবাসী) অভিযোজন",
    descriptionEn: "Convergent specializations for excavating and living inside subterranean soil tunnels across segmented worms, decapods, and reptiles.",
    descriptionBn: "মাটির নিচে গর্ত খুঁড়ে বসবাস করার জন্য কেঁচো, কাঁকড়া ও সরীসৃপদের মধ্যে অভিসারী বিবর্তনীয় অভিযোজন।",
    morphologicalModifications: {
      en: [
        "Cylindrical or streamlined compact body minimizing friction resistance",
        "Reduction or elimination of protruding external appendages and eyes",
        "Spatulate spade-like digging limbs or muscular peristaltic hydrostatic burrowing mechanics",
        "Enhanced tactile, vibratory, and subterranean chemoreceptive sensory systems",
        "Tolerance to severe soil hypoxia and elevated carbon dioxide concentrations"
      ],
      bn: [
        "ঘর্ষণ কমাতে নলাকার বা মসৃণ চাপা দেহকাঠামো",
        "বাইরের বাড়তি উপাঙ্গ ও চোখের হ্রাস বা অবলুপ্তি",
        "বেলচার মতো মাটি খোঁড়ার পা অথবা পেরিস্টাল্টিক হাইড্রোস্ট্যাটিক চলন",
        "মাটির কম্পন ও রাসায়নিক গন্ধ বোঝার তীব্র সংবেদনশীলতা",
        "মাটির ভেতরের অক্সিজেন স্বল্পতা ও উচ্চ কার্বন ডাই অক্সাইডে টিকে থাকার ক্ষমতা"
      ]
    },
    examples: [
      {
        taxon: "Annelida (Earthworms)",
        adaptationEn: "Retrograde peristaltic contractions of circular and longitudinal muscles anchored by chaetae pushing through compacted soil.",
        adaptationBn: "বৃত্তাকার ও অনুদৈর্ঘ্য পেশির পেরিস্টাল্টিক আন্দোলন ও কিটির সাহায্যে মাটির ভেতর সুরঙ্গ খনন।",
        speciesId: "sp-metaphire-posthuma"
      },
      {
        taxon: "Crustacea (Freshwater Paddy Crab)",
        adaptationEn: "Stout pointed dactyli on walking legs and robust crushing chelae excavating deep 1-meter vertical burrows in mud dykes.",
        adaptationBn: "পায়ের ধারালো প্রান্ত ও শক্ত দাঁড়া দিয়ে ধানখেতের আইলে ১ মিটার পর্যন্ত গভীর সুরঙ্গ খনন।",
        speciesId: "sp-sartoriana-spinigera"
      }
    ]
  },
  {
    id: "adaptation-pelagic",
    title: "Pelagic (Open Ocean Swimming) Adaptation",
    titleBn: "পেলাজিক (মুক্ত সমুদ্রের সন্তরণ) অভিযোজন",
    descriptionEn: "Hydrodynamic adaptations for continuous high-speed open-water propulsion, buoyancy control, and schooling navigation.",
    descriptionBn: "মুক্ত সাগরে দ্রুত সাঁতার, প্লবতা নিয়ন্ত্রণ এবং দলবদ্ধভাবে চলার জন্য বিশেষায়িত রূপতাত্ত্বিক অভিযোজন।",
    morphologicalModifications: {
      en: [
        "Fusiform teardrop hydrodynamic body contours reducing boundary layer water drag",
        "Counter-shading camouflage: dark dorsal surface blending with depths, silvery white belly blending with sky",
        "Hydrostatic organs: gas-filled swim bladder in teleosts or lipid-rich squalene liver in sharks",
        "Stiff, high-aspect-ratio caudal fins driven by aerobic red myotomal swimming musculature",
        "Lateral line mechanoreceptive canal systems detecting distant pressure waves from schooling conspecifics"
      ],
      bn: [
        "পানির বাধা কমাতে মাকু-আকৃতির মসৃণ স্ট্রিমলাইন্ড দেহ",
        "কাউন্টারশেডিং ছদ্মবেশ: পিঠের দিক গাঢ় ও পেটের দিক চকচকে রূপালী",
        "প্লবতা নিয়ন্ত্রণের জন্য গ্যাসপূর্ণ পটকা (টেলিওস্টে) অথবা তেলের যকৃৎ (হাঙরে)",
        "চাঁদের মতো অর্ধচন্দ্রাকার শক্তিশালী পুচ্ছ পাখনা ও লাল পেশি",
        "পানির চাপ তরঙ্গ ও দিক শনাক্ত করতে সংবেদী পার্শ্বরেখা তন্ত্র"
      ]
    },
    examples: [
      {
        taxon: "Osteichthyes (Hilsa Shad)",
        adaptationEn: "Compressed silver fusiform body with keeled ventral scutes migrating hundreds of kilometers upstream against powerful monsoon river currents.",
        adaptationBn: "রূপালী মাকু দেহ ও করাতাকৃতির অঙ্কীয় আঁইশ যা তীব্র নদীর স্রোতের বিপরীতে শত শত কিলোমিটার সাঁতরে যায়।",
        speciesId: "sp-tenualosa-ilisha"
      },
      {
        taxon: "Cephalopoda (Squid)",
        adaptationEn: "Torpedo-shaped mantle with terminal stabilizing fins and muscular funnel shooting pressurized water jets for explosive backwards escape.",
        adaptationBn: "টরপেডো আকৃতির দেহ ও ফানেল সাইফন দিয়ে সজোরে পানি ছুড়ে জেট প্রপালশন গতিতে পেছনের দিকে ছুটে যাওয়া।",
        speciesId: "sp-uroteuthis-duvaucelii"
      }
    ]
  },
  {
    id: "adaptation-aquatic",
    title: "Freshwater & Semiaquatic (Diving & Swimming) Adaptation",
    titleBn: "স্বাদুপানি ও আধা-জলজ (ডুবসাঁতার ও সন্তরণ) অভিযোজন",
    descriptionEn: "Morphological and physiological modifications for navigating rivers, wetlands, floodplains, and diving beneath surface water for feeding and refuge.",
    descriptionBn: "নদী, প্লাবনভূমি ও জলাশয়ে সাঁতার ও খাদ্য সংগ্রহের জন্য রূপতাত্ত্বিক এবং শ্বাসযন্ত্রীয় বিশেষ অভিযোজন।",
    morphologicalModifications: {
      en: [
        "Webbed interdigital skin membranes (palmate/totipalmate) increasing hydrodynamic propulsion stroke area",
        "Valvular closing nostrils and ears preventing water intrusion under hydrostatic pressure",
        "Transparent nictitating membranes serving as underwater goggles while protecting cornea",
        "Dense water-repellent (hydrofuge) pelage or oily preen gland secretions trapping insulating air layer",
        "Bradycardia and peripheral vasoconstriction shunting oxygen reserves to heart and brain during dives"
      ],
      bn: [
        "পায়ের আঙুলের মাঝে লিপ্তপাদ পর্দা যা সাঁতারের সময় পানির বিরুদ্ধে শক্তিশালী ধাক্কা তৈরি করে",
        "কপাটিকাযুক্ত নাসারন্ধ্র ও কান যা পানির নিচে স্বয়ংক্রিয়ভাবে বন্ধ হয়ে পানি ঢুকতে বাধা দেয়",
        "স্বচ্ছ নিকটিটেটিং পর্দা যা ডুবসাঁতারের সময় চোখের কর্নিয়া রক্ষা করে পানির নিচে স্পষ্ট দৃষ্টি দেয়",
        "পানি-প্রতিরোধী ঘন লোম বা তেলগ্রন্থির নিঃসরণ যা ত্বককে শুকনা ও উষ্ণ রাখে",
        "ডুবের সময় হৃদস্পন্দন কমানো এবং মস্তিষ্ক ও হৃৎপিণ্ডে অক্সিজেন ধরে রাখার বিশেষ সংবহন"
      ]
    },
    examples: [
      {
        taxon: "Amphibia (Cricket Frog)",
        adaptationEn: "Extensively webbed muscular hindfeet providing explosive swimming leaps and soft vascularized skin aiding underwater cutaneous gas exchange.",
        adaptationBn: "শক্তিশালী লিপ্তপাদ পেছনের পা এবং পানিতে ত্বকের মাধ্যমে অক্সিজেন গ্রহণের আর্দ্র রক্তনালীপূর্ণ ত্বক।",
        speciesId: "sp-fejervarya-limnocharis"
      },
      {
        taxon: "Cetacea (Ganges River Dolphin)",
        adaptationEn: "Broad paddle-like pectoral flippers for maneuvering through shallow winding river channels; lost flexible dorsal fin replaced by low ridge.",
        adaptationBn: "নদীর বাঁকে সাঁতারের জন্য চওড়া প্যাডেল ফ্লিপার এবং ঘোলা পানিতে পথ চলার বিশেষায়িত প্রতিধ্বনি ব্যবস্থা।",
        speciesId: "sp-platanista-gangetica"
      }
    ]
  },
  {
    id: "adaptation-terrestrial",
    title: "Cursorial & Saltatorial (Land Running & Desiccation Resistance) Adaptation",
    titleBn: "স্থলজ দ্রুতচলন ও লম্ফন (শুষ্কতা প্রতিরোধ) অভিযোজন",
    descriptionEn: "Biomechanical adaptations for efficient multi-stride terrestrial cursorial locomotion, high-impact jumping, and impermeable cutaneous desiccation resistance.",
    descriptionBn: "ডাঙায় দ্রুত দৌড়ানো, লাফানো এবং শুষ্ক জলবায়ুতে পানিশূন্যতা প্রতিরোধের বায়োমেকানিক্যাল ও ত্বকের অভিযোজন।",
    morphologicalModifications: {
      en: [
        "Digitigrade or unguligrade limb posture elevating metacarpals/metatarsals to lengthen effective leg lever stroke",
        "Elongated calcaneus heel bone serving as high-torque lever arm for gastrocnemius muscle propulsion",
        "Heavily keratinized epidermal stratum corneum with lipophilic wax barriers preventing transcutaneous evaporation",
        "Concentrated uricotelic or ureotelic renal excretion minimizing metabolic water expenditure",
        "Shock-absorbing fibrocartilaginous intervertebral discs protecting spinal column during high-velocity impacts"
      ],
      bn: [
        "ডিজিটিগ্রেড বা আঙ্গুলের ডগায় ভর দিয়ে চলা যা পা লম্বা করে দ্রুত দৌড়ানোর সুবিধা দেয়",
        "পেশির জন্য লম্বা গোড়ালির হাড় যা দৌড়ানোর সময় শক্তিশালী স্প্রিংয়ের মতো লিভারের কাজ করে",
        "কেরাটিনযুক্ত পুরু শুষ্ক ত্বক যা ডাঙার রোদে শরীর থেকে পানি বাষ্পীভবন পুরোপুরি রোধ করে",
        "ঘন ইউরিয়া বা ইউরিক অ্যাসিড রেচন যা ডাঙায় পানির অপচয় সর্বনিম্ন মাত্রায় রাখে",
        "মেরুদণ্ডের শক-অ্যাবজরবার ডিস্ক যা দ্রুত দৌড় বা লাফের প্রবল ধাক্কা সামলে নেয়"
      ]
    },
    examples: [
      {
        taxon: "Mammalia - Carnivora (Royal Bengal Tiger)",
        adaptationEn: "Digitigrade cushioned paw pads for silent stalking, retractile razor claws for securing prey, and powerful hindquarter muscular leverage.",
        adaptationBn: "শব্দহীন পদচারণার জন্য নরম গদিযুক্ত ডিজিটিগ্রেড থাবা এবং শিকার ধরার ধারালো প্রলম্বিত নখ।",
        speciesId: "sp-panthera-tigris"
      },
      {
        taxon: "Reptilia - Squamata (Bengal Monitor)",
        adaptationEn: "Dry impermeable beta-keratin dermal scales, powerful splayed clawed limbs for sprinting over rough terrain, and uricotelic water-sparing excretion.",
        adaptationBn: "শুষ্ক কেরাটিনময় আঁইশ, অসমতল ভূমিতে দ্রুত দৌড়ানোর নখযুক্ত পা এবং পানি সংরক্ষণকারী ইউরিক অ্যাসিড রেচন।",
        speciesId: "sp-varanus-bengalensis"
      }
    ]
  },
  {
    id: "adaptation-arboreal",
    title: "Arboreal (Canopy Climbing, Prehensility & Balance) Adaptation",
    titleBn: "গেছো বা বৃক্ষবাসী (শাখা-প্রশাখায় আরোহণ ও আঁকড়ে ধরা) অভিযোজন",
    descriptionEn: "Specializations for navigating complex three-dimensional forest canopies, including opposable gripping digits, prehensile muscular tails, adhesive scansors, and stereoscopic vision.",
    descriptionBn: "গাছের ডালপালায় অবাধে চলাচলের জন্য বিপরীতমুখী আঙুল, আঁকড়ে ধরার লেজ, আঠালো প্যাড এবং ত্রিমাত্রিক দৃষ্টিশক্তির বিশেষায়ন।",
    morphologicalModifications: {
      en: [
        "Opposable pollex/hallux (thumbs/toes) enabling strong cylindrical grasp around arboreal branches",
        "Prehensile muscular tail functioning as a fifth limb for anchoring during foraging or resting",
        "Subdigital lamellar scansors utilizing microscopic spatulae generating van der Waals adhesive forces (gekkonids)",
        "Forward-facing binocular orbits providing wide stereoscopic binocular overlap for precise depth perception across branch gaps",
        "Curved sharp claws and flexible ankle joints capable of 180° rotation for head-first tree descent"
      ],
      bn: [
        "ডাল শক্ত করে আঁকড়ে ধরার জন্য বিপরীতমুখী বুড়ো আঙুল",
        "পঞ্চম অঙ্গ হিসেবে কাজ করা পেশিবহুল প্রাক-আঁকড়ানো লেজ যা ডালে সুরক্ষিতভাবে ঝুলতে সাহায্য করে",
        "ভান ডার ওয়ালস আণবিক শক্তিতে দেয়ালে ও পাতায় লেগে থাকার আঠালো ল্যামেলি (টিকটিকি)",
        "ত্রিমাত্রিক গভীরতা বোঝার জন্য সামনে মুখ করা চোখ যা ডাল থেকে ডালে লাফের দূরত্ব নিখুঁতভাবে মাপে",
        "গাছের বাকল কামড়ে ধরার ধারালো বাঁকা নখ এবং ১৮০ ডিগ্রি ঘুরতে সক্ষম পায়ের সন্ধি"
      ]
    },
    examples: [
      {
        taxon: "Squamata - Agamidae (Common Garden Lizard)",
        adaptationEn: "Long slender laterally compressed toes with sharp recurved claws gripping tree bark; long counterbalance tail stabilizing rapid canopy leaps.",
        adaptationBn: "গাছের বাকলে চড়ার তীক্ষ্ণ নখযুক্ত সরু আঙুল এবং দ্রুত লাফের সময় ভারসাম্য রক্ষাকারী লম্বা লেজ।",
        speciesId: "sp-calotes-versicolor"
      },
      {
        taxon: "Mammalia - Primates (Rhesus Macaque)",
        adaptationEn: "Pentadactyl hands with fully opposable thumbs, flat nails distributing branch contact pressure, and forward stereoscopic vision.",
        adaptationBn: "বিপরীতমুখী বুড়ো আঙুলসহ গ্রিপিং হাত, সমান নখ এবং ডালের ফাঁক বিচার করার স্টেরিওস্কোপিক দৃষ্টি।",
        speciesId: "sp-macaca-mulatta"
      }
    ]
  }
];

