// src/data/anatomyPhysiologyData.ts
// Comprehensive Zoological Anatomy & Physiology Topics and Functional Mechanisms
// References: Hickman et al. (2020), Kardong (2018), Randall et al. (2002)

export interface AnatomyTopic {
  id: string;
  category: 'anatomy';
  title: string;
  titleBn: string;
  overviewEn: string;
  overviewBn: string;
  mainComponents: Array<{ name: string; nameBn: string; functionEn: string; functionBn: string }>;
  structuralVariations: Array<{ taxonGroup: string; adaptationEn: string; adaptationBn: string; exampleSpeciesId?: string }>;
  evolutionaryNotesEn: string;
  evolutionaryNotesBn: string;
}

export interface PhysiologyTopic {
  id: string;
  category: 'physiology';
  title: string;
  titleBn: string;
  overviewEn: string;
  overviewBn: string;
  keyMechanisms: Array<{ stage: string; stageBn: string; descriptionEn: string; descriptionBn: string }>;
  comparativeVariations: Array<{ group: string; mechanismEn: string; mechanismBn: string; exampleSpeciesId?: string }>;
  homeostaticSignificanceEn: string;
  homeostaticSignificanceBn: string;
}

export const ANATOMY_TOPICS: AnatomyTopic[] = [
  {
    id: "anat-integument",
    category: "anatomy",
    title: "Integumentary System & External Anatomy",
    titleBn: "বহিঃত্বকীয় তন্ত্র ও বাহ্যিক শারীরস্থান",
    overviewEn: "The integument is the primary boundary between an animal's internal physiological milieu and the external environment, executing protective barrier, osmoregulatory, sensory, and camouflaging functions.",
    overviewBn: "বহিঃত্বকীয় তন্ত্র হলো প্রাণীর অভ্যন্তরীণ শারীরিক পরিবেশ এবং বাইরের বৈরী পরিবেশের মধ্যবর্তী সুরক্ষাপ্রাচীর যা প্রতিরক্ষা, অভিস্রবণ নিয়ন্ত্রণ এবং সংবেদনে কাজ করে।",
    mainComponents: [
      { name: "Epidermis", nameBn: "এপিডার্মিস (বহিঃত্বক)", functionEn: "Ectodermal outer cellular layer secreting cuticle, scales, feathers, hair, or mucus.", functionBn: "এক্টোডার্মাল স্তর যা কিউটিকল, আঁইশ, লোম বা মিউকাস তৈরি করে।" },
      { name: "Dermis", nameBn: "ডার্মিস (অন্তঃত্বক)", functionEn: "Mesodermal connective tissue layer containing vascular capillary beds, nerve endings, and collagen.", functionBn: "মেসোডার্মাল কোলাজেন ও রক্তনালীপূর্ণ স্তর যা ত্বককে স্থিতিস্থাপকতা দেয়।" },
      { name: "Subcutaneous Layer", nameBn: "সাবকিউটেনিয়াস অ্যাডিপোজ", functionEn: "Adipose insulating fat layer (blubber in marine cetaceans).", functionBn: "চর্বিযুক্ত স্তর যা তাপ নিরোধক হিসেবে কাজ করে (যেমন তিমি ও ডলফিনে)।" }
    ],
    structuralVariations: [
      { taxonGroup: "Insects (Arthropoda)", adaptationEn: "Multi-layered chitinous exoskeleton with outer waxy epicuticle preventing evaporative water loss.", adaptationBn: "মোমের মতো এপিকিউটিকলযুক্ত কাইটিন বর্ম যা বাষ্পীভবনে পানি হ্রাস রোধ করে।", exampleSpeciesId: "sp-periplaneta-americana" },
      { taxonGroup: "Teleost Fishes (Chordata)", adaptationEn: "Mucus-coated flexible cycloid/ctenoid scales derived from dermis with lateral line pores.", adaptationBn: "মিউকাসযুক্ত ডার্মাল সাইক্লয়েড ও টিনয়েড আঁইশ এবং পার্শ্বরেখা সংবেদী খাঁজ।", exampleSpeciesId: "sp-tenualosa-ilisha" },
      { taxonGroup: "Reptiles (Chordata)", adaptationEn: "Heavily keratinized epidermal beta-keratin scales preventing cutaneous desiccation on arid land.", adaptationBn: "শুষ্ক কেরাটিনযুক্ত আঁইশ যা ডাঙার খররৌদ্রে শরীর থেকে পানি শুকিয়ে যেতে দেয় না।", exampleSpeciesId: "sp-varanus-bengalensis" }
    ],
    evolutionaryNotesEn: "Integument evolved from naked ciliated single-cell sheets in marine invertebrates to impermeable keratinized strata corneum in terrestrial amniotes.",
    evolutionaryNotesBn: "জলজ প্রাণীর পাতলা মিউকাসযুক্ত ত্বক থেকে ডাঙায় বাঁচার জন্য অভেদ্য কেরাটিনময় শৃঙ্গীয় ত্বকের সফল রূপান্তর।"
  },
  {
    id: "anat-skeletal",
    category: "anatomy",
    title: "Skeletal Systems & Biomechanical Support",
    titleBn: "কঙ্কালতন্ত্র ও বায়োমেকানিক্যাল কাঠামো",
    overviewEn: "Skeletal systems provide structural framework, protect vulnerable visceral organs, and act as rigid levers transmitting muscular forces for locomotion.",
    overviewBn: "কঙ্কালতন্ত্র প্রাণীর দেহকে সুনির্দিষ্ট আকৃতি দেয়, কোমল আন্তরযন্ত্রকে রক্ষা করে এবং পেশি সংকোচনের মাধ্যমে চলনে লিভারের কাজ করে।",
    mainComponents: [
      { name: "Hydrostatic Skeleton", nameBn: "হাইড্রোস্ট্যাটিক কঙ্কাল", functionEn: "Incompressible fluid-filled coelom or pseudocoel bounded by circular/longitudinal muscles.", functionBn: "তরলপূর্ণ সিলোমিক গহ্বর যা পেশির চাপে দেহের আকৃতি টানটান রাখে।" },
      { name: "Exoskeleton", nameBn: "বহিঃকঙ্কাল", functionEn: "Rigid external shell or cuticle (chitin in arthropods; calcium carbonate in molluscs).", functionBn: "দেহের বাইরে অবস্থিত শক্ত খোলস (কাইটিন বা চুনময় খোলস)।" },
      { name: "Endoskeleton", nameBn: "অন্তঃকঙ্কাল", functionEn: "Living internal mineralized framework (cartilage and hydroxyapatite bone in vertebrates).", functionBn: "দেহের ভেতরের জীবন্ত অস্থি ও তরুণাস্থি যা দেহের সাথে অবিচ্ছিন্নভাবে বাড়ে।" }
    ],
    structuralVariations: [
      { taxonGroup: "Annelids (Earthworms)", adaptationEn: "Segmented fluid-filled coelomic compartments acting as independent hydraulic units.", adaptationBn: "প্রতি খণ্ডে তরলপূর্ণ সিলোমিক প্রকোষ্ঠ যা খননকাজে স্বাধীন হাইড্রোলিক পিস্টনের কাজ করে।", exampleSpeciesId: "sp-metaphire-posthuma" },
      { taxonGroup: "Crustaceans (Decapods)", adaptationEn: "Calcified chitinous carapace forming rigid cephalothoracic armor articulated with hinged pleon.", adaptationBn: "ক্যালসিয়ামযুক্ত পুরু কাইটিন বর্ম যা শিরোবক্ষকে রক্ষা করে।", exampleSpeciesId: "sp-scylla-olivacea" },
      { taxonGroup: "Birds (Aves)", adaptationEn: "Pneumatized hollow thin-walled bones braced by internal trabeculae; fused furcula and synsacrum.", adaptationBn: "বাতাসপূর্ণ ফাঁপা অস্থি এবং সংযুক্ত সিনস্যাক্রাম যা উড্ডয়নের চাপ সহ্য করে।", exampleSpeciesId: "sp-passer-domesticus" }
    ],
    evolutionaryNotesEn: "Transition from non-growing exoskeletons requiring dangerous ecdysis to dynamic living vascularized endoskeletons enabled massive vertebrate gigantism.",
    evolutionaryNotesBn: "বহিঃকঙ্কাল থেকে জীবন্ত অস্থিময় অন্তঃকঙ্কালের রূপান্তরের ফলেই মেরুদণ্ডীদের বিশাল শারীরিক আকার ধারণ সম্ভব হয়েছে।"
  },
  {
    id: "anat-muscular",
    category: "anatomy",
    title: "Muscular System & Locomotor Biomechanics",
    titleBn: "পেশিতন্ত্র ও চলন বায়োমেকানিক্স",
    overviewEn: "Contractile muscle tissues transform chemical ATP energy into directional mechanical work, enabling locomotion, internal peristalsis, and cardiovascular pumping.",
    overviewBn: "সংকোচনশীল পেশিকলা রাসায়নিক শক্তিকে যান্ত্রিক শক্তিতে রূপান্তরিত করে প্রাণীর চলন, খাদ্য পরিবহন এবং রক্ত সংবহন পরিচালনা করে।",
    mainComponents: [
      { name: "Skeletal / Somatic Muscle", nameBn: "ঐচ্ছিক কঙ্কাল পেশি", functionEn: "Striated, multinucleated voluntary fibers anchored across joints via tendons.", functionBn: "রেখায়িত বহু-নিউক্লিয়াসযুক্ত ঐচ্ছিক পেশি যা হাড় বা কঙ্কালের সাথে যুক্ত থাকে।" },
      { name: "Smooth / Visceral Muscle", nameBn: "অনৈচ্ছিক মসৃণ পেশি", functionEn: "Non-striated, spindle-shaped involuntary fibers driving visceral peristalsis.", functionBn: "অরেখায়িত অনৈচ্ছিক পেশি যা খাদ্যনালী ও রক্তনালীর স্বয়ংক্রিয় সংকোচন ঘটায়।" },
      { name: "Cardiac Muscle", nameBn: "হৃদপেশি", functionEn: "Involuntary branched striated muscle with intercalated discs for synchronized rhythmicity.", functionBn: "ইন্টারক্যালেটেড ডিস্কযুক্ত শাখান্বিত অনৈচ্ছিক পেশি যা অবিরাম ছন্দময় স্পন্দন ঘটায়।" }
    ],
    structuralVariations: [
      { taxonGroup: "Fishes (Actinopterygii)", adaptationEn: "W-shaped segmented myomeres separated by collagenous myosepta, generating undulatory swimming waves.", adaptationBn: "ডব্লিউ-আকৃতির খণ্ডায়িত মায়োটোম পেশি যা ঢেউয়ের মতো নড়াচড়ায় দ্রুত সাঁতার তৈরি করে।", exampleSpeciesId: "sp-tenualosa-ilisha" },
      { taxonGroup: "Insects (Hexapoda)", adaptationEn: "Asynchronous fibrillar indirect flight muscles oscillating thorax at frequencies up to 1,000 Hz.", adaptationBn: "অসিঙ্ক্রোনাস উড্ডয়ন পেশি যা সেকেন্ডে ১০০০ বার পর্যন্ত ডানা দোলাতে পারে।", exampleSpeciesId: "sp-musca-domestica" }
    ],
    evolutionaryNotesEn: "Evolution of paired antagonistic flexor-extensor muscle groups around articulated skeletal joints enabled precise directional manipulation and high-speed terrestrial locomotion.",
    evolutionaryNotesBn: "সন্ধির চারপাশে বিপরীতমুখী ফ্লেক্সর ও এক্সটেনসর পেশি জোড়ার বিকাশ সুনির্দিষ্ট নিয়ন্ত্রণ ও দ্রুতগতির চলনকে সফল করেছে।"
  },
  {
    id: "anat-digestive",
    category: "anatomy",
    title: "Digestive System & Alimentary Canal",
    titleBn: "পরিপাকতন্ত্র ও পৌষ্টিকনালী",
    overviewEn: "The digestive system encompasses all structures responsible for ingesting, mechanically processing, chemically breaking down, absorbing, and egesting food. It ranges from a simple blind gastrovascular cavity in cnidarians to a highly regionalized tube-within-a-tube alimentary canal in vertebrates with specialized enzymatic regions.",
    overviewBn: "পরিপাকতন্ত্র হলো খাদ্য গ্রহণ, যান্ত্রিক ও রাসায়নিক পরিপাক, পুষ্টি শোষণ এবং অপাচ্য বস্তু নির্গমনের সাথে জড়িত সমস্ত অঙ্গের সমষ্টি। নিডারিয়ার অন্ধ গ্যাস্ট্রোভাস্কুলার গহ্বর থেকে মেরুদণ্ডীর বহু বিভাগযুক্ত সম্পূর্ণ নলাকার পৌষ্টিকনালী পর্যন্ত বিভিন্ন মাত্রার জটিলতা দেখা যায়।",
    mainComponents: [
      { name: "Buccal Cavity & Pharynx", nameBn: "মুখগহ্বর ও গলবিল", functionEn: "Initial ingestion, mechanical mastication (teeth/radula), lubrication (saliva/mucus), and deglutition reflexes.", functionBn: "খাদ্য গ্রহণ, দাঁত বা র‍্যাডুলা দিয়ে চর্বন, লালা মিশ্রণ এবং গিলে ফেলার প্রতিবর্ত ক্রিয়া।" },
      { name: "Esophagus & Crop", nameBn: "অন্ননালী ও ক্রপ", functionEn: "Peristaltic transport of bolus to the stomach; crop stores food temporarily in birds and some invertebrates.", functionBn: "পেরিস্ট্যালসিসের মাধ্যমে খাদ্যবোলাস পাকস্থলীতে পরিবহন; ক্রপে সাময়িক সঞ্চয়।" },
      { name: "Stomach / Gizzard", nameBn: "পাকস্থলী / পেষণকেষ্ট", functionEn: "Muscular churning and acid-pepsin (HCl + pepsinogen) hydrolysis of proteins; gizzard grinds hard food using ingested grit.", functionBn: "পেশিবহুল মন্থন এবং HCl ও পেপসিন দ্বারা প্রোটিন পরিপাক; পেষণকেষ্ট শক্ত খাদ্য পিষে মিহি করে।" },
      { name: "Small Intestine", nameBn: "ক্ষুদ্রান্ত্র", functionEn: "Primary site of enzymatic digestion (pancreatic lipase, proteases, amylase) and nutrient absorption via brush-border villi and microvilli.", functionBn: "অগ্ন্যাশয়ীয় এনজাইম দ্বারা পরিপাকের মূল স্থান; ভিলাই ও মাইক্রোভিলাইয়ের মাধ্যমে পুষ্টি শোষণ।" },
      { name: "Large Intestine & Cloaca", nameBn: "বৃহদান্ত্র ও ক্লোয়েকা", functionEn: "Reabsorption of water and electrolytes; microbial fermentation of cellulose; cloaca is the common exit for digestive, urinary, and reproductive systems in non-mammals.", functionBn: "পানি ও খনিজ পুনর্শোষণ; মাইক্রোবায়াল সেলুলোজ পরিপাক; ক্লোয়েকা পরিপাক, মূত্র ও জনন তন্ত্রের সাধারণ বহির্গমনপথ।" },
      { name: "Liver & Pancreas", nameBn: "যকৃৎ ও অগ্ন্যাশয়", functionEn: "Liver: bile synthesis for fat emulsification, gluconeogenesis, detoxification. Pancreas: endocrine (insulin/glucagon) and exocrine digestive enzyme secretion.", functionBn: "যকৃৎ: পিত্তরস তৈরি, গ্লুকোজ নিয়ন্ত্রণ ও বিষাক্ত পদার্থ নিষ্ক্রিয়করণ। অগ্ন্যাশয়: পরিপাক এনজাইম ও ইনসুলিন নিঃসরণ।" }
    ],
    structuralVariations: [
      { taxonGroup: "Ruminant Mammals (Artiodactyla)", adaptationEn: "Four-chambered stomach (rumen, reticulum, omasum, abomasum) enabling microbial cellulose fermentation and rumination of coarse plant material.", adaptationBn: "চার প্রকোষ্ঠী পাকস্থলী (রুমেন, রেটিকুলাম, ওমাসাম, অ্যাবোমাসাম) যা তৃণভোজীদের সেলুলোজ পরিপাকে সক্ষম করে।" },
      { taxonGroup: "Birds (Aves)", adaptationEn: "Two-part stomach: glandular proventriculus secreting enzymes + muscular gizzard with grit for mechanical seed-grinding.", adaptationBn: "প্রথম প্রকোষ্ঠ এনজাইম নিঃসরণ করে এবং পেষণকেষ্ট বালিকণা দিয়ে শক্ত বীজ পিষে মিহি করে।", exampleSpeciesId: "sp-passer-domesticus" },
      { taxonGroup: "Sharks (Chondrichthyes)", adaptationEn: "Spiral valve intestine: single tube with internal spiral fold dramatically increasing absorptive surface area without extending gut length.", adaptationBn: "সর্পিলাকার ভালভযুক্ত অন্ত্র যা দৈর্ঘ্য না বাড়িয়ে শোষণ ক্ষেত্রফল বহুগুণ বৃদ্ধি করে।", exampleSpeciesId: "sp-chiloscyllium-indicum" }
    ],
    evolutionaryNotesEn: "The transition from blind-ended gastrovascular cavities (Cnidaria, Platyhelminthes) to a through-gut with regional specialization (Nematoda onward) was a critical evolutionary innovation enabling efficient unidirectional food processing.",
    evolutionaryNotesBn: "অন্ধ গ্যাস্ট্রোভাস্কুলার গহ্বর থেকে মুখ-পায়ু বিশিষ্ট একমুখী নলাকার পৌষ্টিকনালীর উদ্ভব প্রাণিজগতের পুষ্টি-দক্ষতায় যুগান্তকারী পরিবর্তন এনেছে।"
  },
  {
    id: "anat-respiratory",
    category: "anatomy",
    title: "Respiratory System & Gas Exchange Structures",
    titleBn: "শ্বসনতন্ত্র ও গ্যাসীয় বিনিময় কাঠামো",
    overviewEn: "Respiratory structures facilitate the exchange of oxygen (O₂) and carbon dioxide (CO₂) between an organism and its environment. They range from body surface diffusion in small invertebrates to elaborate gill lamellae in fishes, book lungs in arachnids, tracheae in insects, and alveolar lungs in tetrapods.",
    overviewBn: "শ্বসনতন্ত্র প্রাণী ও পরিবেশের মধ্যে O₂ ও CO₂ বিনিময় ঘটায়। এটি ক্ষুদ্র প্রাণীর ত্বকীয় ব্যাপন থেকে শুরু করে মাছের ফুলকা, মাকড়সার বুক-ফুসফুস, পতঙ্গের ট্রাকিয়া এবং চতুষ্পদীর বায়ুকোষযুক্ত ফুসফুস পর্যন্ত বিস্তৃত।",
    mainComponents: [
      { name: "Gill Lamellae (Aquatic)", nameBn: "ফুলকা পাত (জলজ)", functionEn: "Counter-current O₂ absorption from water across thin-walled vascularized secondary lamellae; gill rakers filter suspended particles.", functionBn: "পাতলা রক্তনালীযুক্ত ফুলকা পাত দিয়ে পানি থেকে বিপরীতমুখী প্রবাহে সর্বাধিক O₂ শোষণ।" },
      { name: "Tracheal System (Insects)", nameBn: "ট্রাকিয়া (পতঙ্গ)", functionEn: "Branching chitin-lined air tubes (tracheae → tracheoles) conducting O₂ directly to each cell without a respiratory blood pigment.", functionBn: "কাইটিন নলের শাখান্বিত জালিকা রক্তে অক্সিজেন ছাড়াই সরাসরি প্রতিটি কোষে বায়ু পৌঁছে দেয়।" },
      { name: "Book Lungs (Arachnida)", nameBn: "বুক ফুসফুস (অ্যারাকনিডা)", functionEn: "Stacked leaf-like haemolymph-filled lamellae within ventral abdominal invaginations providing large diffusion surface.", functionBn: "উদরের অঙ্কীয় খাঁজে পাতা-সদৃশ স্তরীভূত হেমোলিম্ফ-পূর্ণ লেমেলা বায়ু-বিনিময়ের ক্ষেত্র তৈরি করে।" },
      { name: "Alveolar Lungs (Mammals)", nameBn: "বায়ুকোষযুক্ত ফুসফুস (স্তন্যপায়ী)", functionEn: "~300 million surfactant-coated alveoli providing ~70 m² gas exchange surface, ventilated by negative-pressure diaphragmatic breathing.", functionBn: "৭০ বর্গমিটার বিনিময় ক্ষেত্রবিশিষ্ট ৩০ কোটি বায়ুকোষ, ডায়াফ্রামের ঋণাত্মক চাপে বায়ু টেনে নেওয়া হয়।" },
      { name: "Parabronchial Air Sacs (Birds)", nameBn: "বায়ুকোষ ও প্যারাব্রঙ্কি (পাখি)", functionEn: "Rigid lungs with unidirectional air flow through parabronchi via 9 air sacs acting as bellows — the most efficient tetrapod respiratory system.", functionBn: "৯টি বায়ুথলির মাধ্যমে ফুসফুসে একমুখী বায়ুপ্রবাহ — মেরুদণ্ডীদের মধ্যে সবচেয়ে দক্ষ শ্বসনতন্ত্র।" }
    ],
    structuralVariations: [
      { taxonGroup: "Amphibia (Cutaneous Respiration)", adaptationEn: "Highly vascularized moist permeable skin supplements lung respiration; some salamanders are entirely lungless (Plethodontidae).", adaptationBn: "রক্তনালীযুক্ত আর্দ্র ত্বক ফুসফুসের পাশাপাশি শ্বসন করে; কিছু স্যালামান্ডার সম্পূর্ণ ফুসফুসবিহীন।", exampleSpeciesId: "sp-fejervarya-limnocharis" },
      { taxonGroup: "Teleost Fishes (Labyrinth Organ)", adaptationEn: "Anabantiformes (gouramis, climbing perch) possess a suprabranchial labyrinth organ of vascularized folded epithelium for direct aerial breathing.", adaptationBn: "গুরামি ও কই জাতীয় মাছে ফুলকার উপরে বায়বীয় শ্বসনের জন্য বিশেষ ল্যাবিরিন্থ অঙ্গ বিদ্যমান।" },
      { taxonGroup: "Lungfishes (Dipnoi)", adaptationEn: "Paired vascularized lung-like swim bladders enabling air breathing during seasonal droughts when aquatic O₂ is depleted.", adaptationBn: "খরার সময় পানিতে অক্সিজেন কমে গেলে ফুসফুস-সদৃশ বায়ুথলি দিয়ে সরাসরি বায়ু থেকে শ্বাস নেয়।" }
    ],
    evolutionaryNotesEn: "Lung evolution from paired ventral pharyngeal outpocketings in Devonian lobe-finned fishes directly enabled the water-to-land tetrapod transition by providing aerial O₂ uptake independent of aquatic gills.",
    evolutionaryNotesBn: "ডেভোনিয়ান লোব-ফিন মাছের গলবিলীয় থলি থেকে ফুসফুসের বিবর্তন চতুষ্পদীদের জলভাগ ছেড়ে ডাঙায় উঠে আসার মূল চাবিকাঠি।"
  },
  {
    id: "anat-circulatory",
    category: "anatomy",
    title: "Circulatory System & Cardiovascular Architecture",
    titleBn: "সংবহনতন্ত্র ও কার্ডিওভাসকুলার কাঠামো",
    overviewEn: "The circulatory system transports oxygen, nutrients, hormones, and immune cells while removing metabolic waste. It ranges from the open haemocoel of arthropods and molluscs to the closed high-pressure vascular system with chambered hearts in vertebrates.",
    overviewBn: "সংবহনতন্ত্র অক্সিজেন, পুষ্টি, হরমোন ও প্রতিরক্ষা কোষ পরিবহন করে এবং বিপাকীয় বর্জ্য সরিয়ে দেয়। আর্থ্রোপোডের মুক্ত হিমোসিল থেকে মেরুদণ্ডীর বদ্ধ উচ্চ-চাপের রক্তনালী-হৃদপিণ্ড ব্যবস্থা পর্যন্ত বিভিন্ন মাত্রা বিদ্যমান।",
    mainComponents: [
      { name: "Heart", nameBn: "হৃদপিণ্ড", functionEn: "Muscular pump: 2-chambered in fishes (1 atrium + 1 ventricle), 3-chambered in most reptiles and amphibians, 4-chambered in birds and mammals.", functionBn: "পেশিবহুল পাম্প: মাছে ২-প্রকোষ্ঠী, সরীসৃপ ও উভচরে ৩-প্রকোষ্ঠী, পাখি ও স্তন্যপায়ীতে ৪-প্রকোষ্ঠী।" },
      { name: "Arteries & Arterioles", nameBn: "ধমনী ও আর্টেরিওল", functionEn: "Elastic thick-walled vessels conducting oxygenated blood away from the heart under high systolic pressure.", functionBn: "স্থিতিস্থাপক পুরু দেওয়ালের রক্তনালী যা হৃদপিণ্ড থেকে উচ্চ চাপে অক্সিজেনযুক্ত রক্ত বহন করে।" },
      { name: "Capillaries", nameBn: "কৈশিক জালিকা", functionEn: "One-cell-thick endothelial exchange vessels where O₂, CO₂, glucose, and waste products diffuse between blood and tissues.", functionBn: "এককোষ পুরু এন্ডোথেলিয়াল নলিকা যেখানে O₂, CO₂ ও পুষ্টি রক্ত ও কোষের মধ্যে ব্যাপিত হয়।" },
      { name: "Veins & Venules", nameBn: "শিরা ও ভেনিউল", functionEn: "Low-pressure thin-walled vessels returning deoxygenated blood to the heart; contain valves preventing backflow in tetrapods.", functionBn: "কম চাপের পাতলা রক্তনালী যা CO₂-যুক্ত রক্ত হৃদপিণ্ডে ফিরিয়ে আনে; ভালভ বিপরীত প্রবাহ রোধ করে।" },
      { name: "Lymphatic System", nameBn: "লসিকাতন্ত্র", functionEn: "Returns interstitial fluid, dietary lipid chylomicrons, and immune lymphocytes to the venous circulation via the thoracic duct.", functionBn: "আন্তঃকোষীয় তরল, খাদ্যলিপিড ও লিম্ফোসাইট শিরায় ফেরত পাঠায়।" }
    ],
    structuralVariations: [
      { taxonGroup: "Fishes (Actinopterygii) — Single Circulation", adaptationEn: "Blood passes through the heart only once per circuit: ventricle → gills (oxygenation) → body → atrium.", adaptationBn: "প্রতি চক্রে রক্ত একবার হৃদপিণ্ড দিয়ে যায়: নিলয় → ফুলকা (অক্সিজেন) → দেহ → অলিন্দ।", exampleSpeciesId: "sp-tenualosa-ilisha" },
      { taxonGroup: "Mammals & Birds — Double Circulation", adaptationEn: "Fully separated pulmonary and systemic circuits with four-chambered heart maintain high arterial blood pressure to active organs.", adaptationBn: "ফুসফুসীয় ও দৈহিক সংবহনতন্ত্র সম্পূর্ণ আলাদা; উচ্চ রক্তচাপে সক্রিয় অঙ্গে অক্সিজেন সরবরাহ।", exampleSpeciesId: "sp-panthera-tigris" },
      { taxonGroup: "Open Circulation (Arthropoda)", adaptationEn: "Dorsal heart pumps haemolymph into an open haemocoel lacunar space bathing organs directly without closed capillary beds.", adaptationBn: "পৃষ্ঠীয় হৃদপিণ্ড হেমোলিম্ফ খোলা হিমোসিলে পাম্প করে যা সরাসরি অঙ্গ স্নান করে।", exampleSpeciesId: "sp-macrobrachium-rosenbergii" }
    ],
    evolutionaryNotesEn: "The progressive partitioning of the vertebrate heart from 2 → 3 → 4 chambers separating oxygenated and deoxygenated blood correlates directly with the transition from aquatic gill-breathing to terrestrial lung-breathing and endothermic metabolism.",
    evolutionaryNotesBn: "জলজ ফুলকা-শ্বসন থেকে স্থলজ ফুসফুস-শ্বসন ও উষ্ণরক্তী বিপাকে রূপান্তরের সাথে সামঞ্জস্য রেখে মেরুদণ্ডীর হৃদপিণ্ড ২ থেকে ৩ থেকে ৪ প্রকোষ্ঠীতে পরিণত হয়েছে।"
  },
  {
    id: "anat-nervous",
    category: "anatomy",
    title: "Nervous System & Neural Architecture",
    titleBn: "স্নায়ুতন্ত্র ও স্নায়বিক কাঠামো",
    overviewEn: "The nervous system coordinates all body functions through electrical and chemical signaling. It evolves from the diffuse nerve net of cnidarians to the centralized brain and spinal cord of vertebrates, enabling complex behavior, memory, and consciousness.",
    overviewBn: "স্নায়ুতন্ত্র বৈদ্যুতিক ও রাসায়নিক সংকেতের মাধ্যমে দেহের সকল কার্যক্রম সমন্বিত করে। নিডারিয়ার বিচ্ছুরিত স্নায়ুজালিকা থেকে মেরুদণ্ডীর কেন্দ্রীভূত মস্তিষ্ক-মেরুরজ্জু পর্যন্ত জটিলতার ব্যাপক পরিসর বিদ্যমান।",
    mainComponents: [
      { name: "Neuron", nameBn: "নিউরন (স্নায়ুকোষ)", functionEn: "Basic signaling unit: dendrites receive inputs; axon conducts action potentials; synaptic terminals release neurotransmitters.", functionBn: "ডেনড্রাইট সংকেত গ্রহণ করে, অ্যাক্সন বিদ্যুৎস্পন্দন পরিবহন করে এবং সাইন্যাপসে নিউরোট্রান্সমিটার নিঃসরণ করে।" },
      { name: "Central Nervous System (Brain + Spinal Cord)", nameBn: "কেন্দ্রীয় স্নায়ুতন্ত্র (মস্তিষ্ক + সুষুম্নাকাণ্ড)", functionEn: "Integrative command center: forebrain (cerebrum, limbic system), midbrain (reflex relay), hindbrain (cerebellum, medulla oblongata).", functionBn: "সমন্বয়কারী নিয়ন্ত্রণকেন্দ্র: অগ্রমস্তিষ্ক (চেতনা), মধ্যমস্তিষ্ক (প্রতিবর্ত), পশ্চাৎমস্তিষ্ক (ভারসাম্য, স্বয়ংক্রিয় কার্যাবলী)।" },
      { name: "Peripheral Nervous System", nameBn: "প্রান্তীয় স্নায়ুতন্ত্র", functionEn: "Somatic division controls voluntary skeletal muscle; autonomic division (sympathetic/parasympathetic) regulates visceral organs.", functionBn: "ঐচ্ছিক পেশি নিয়ন্ত্রণ করে এবং স্বায়ত্তশাসিত বিভাগ হৃদপিণ্ড ও গ্রন্থি পরিচালনা করে।" },
      { name: "Ganglia & Nerve Cords", nameBn: "গ্যাংলিয়া ও স্নায়ুরজ্জু", functionEn: "In invertebrates: cerebral ganglia (brain) connected to ventral solid nerve cord with segmental ganglia.", functionBn: "অমেরুদণ্ডীতে মস্তিষ্ক গ্যাংলিয়া অঙ্কীয় কঠিন স্নায়ুরজ্জুর সাথে সংযুক্ত।" }
    ],
    structuralVariations: [
      { taxonGroup: "Cnidaria — Nerve Net", adaptationEn: "Diffuse, non-polarized nerve net lacking a brain; all-or-nothing conduction spreads radially from stimulus point.", adaptationBn: "কেন্দ্র বা মস্তিষ্কবিহীন বিচ্ছুরিত স্নায়ুজালিকা; উদ্দীপনা সর্বদিকে ছড়িয়ে পড়ে।" },
      { taxonGroup: "Cephalopoda (Octopus)", adaptationEn: "Highly developed lobed brain with optical lobes, learning centers, and chromatic skin motor control approaching vertebrate neural complexity.", adaptationBn: "অক্টোপাসের উচ্চ বিকশিত মস্তিষ্ক শেখার ক্ষমতা ও রঙ পরিবর্তনের পেশি নিয়ন্ত্রণ করে।" },
      { taxonGroup: "Mammalia — Neocortex", adaptationEn: "Six-layered cerebral neocortex with 16+ billion neurons enabling language, abstract thought, tool use, and culture.", adaptationBn: "৬-স্তরীয় নিয়োকরটেক্সে ১৬০০ কোটিরও বেশি নিউরন ভাষা, বিমূর্ত চিন্তা ও সংস্কৃতির ভিত্তি।", exampleSpeciesId: "sp-platanista-gangetica" }
    ],
    evolutionaryNotesEn: "Cephalization — concentration of neural tissue and sense organs at the anterior end — progressively evolved with bilateral symmetry, directional locomotion, and active predation.",
    evolutionaryNotesBn: "মস্তকীভবন — অগ্রভাগে স্নায়ুকলা ও সংবেদী অঙ্গের কেন্দ্রীভবন — দ্বিপার্শ্বীয় প্রতিসাম্য, দিকমুখী চলন এবং সক্রিয় শিকারী জীবনধারার সাথে বিকশিত হয়েছে।"
  },
  {
    id: "anat-excretory",
    category: "anatomy",
    title: "Excretory System & Osmoregulatory Organs",
    titleBn: "রেচনতন্ত্র ও অভিস্রবণ নিয়ন্ত্রক অঙ্গ",
    overviewEn: "Excretory systems eliminate metabolic nitrogenous wastes (ammonia, urea, uric acid) and regulate water-solute homeostasis. Structures range from contractile vacuoles in protists, flame cells in flatworms, and Malpighian tubules in insects to paired metanephric kidneys with nephrons in vertebrates.",
    overviewBn: "রেচনতন্ত্র নাইট্রোজেনঘটিত বর্জ্য (অ্যামোনিয়া, ইউরিয়া, ইউরিক অ্যাসিড) নির্মূল এবং জল-লবণ ভারসাম্য বজায় রাখে। প্রোটিস্টের সংকোচনশীল কোষ-গহ্বর থেকে শিখা কোষ, ম্যালপিজিয়ান নালিকা এবং মেরুদণ্ডীর জোড়া বৃক্ক পর্যন্ত বিস্তৃত।",
    mainComponents: [
      { name: "Flame Cells / Protonephridia", nameBn: "শিখা কোষ / প্রোটোনেফ্রিডিয়া", functionEn: "Ciliated cells in flatworms and rotifers generating osmotic pressure difference to filter interstitial fluid; primarily osmoregulatory.", functionBn: "চ্যাপ্টাকৃমিতে সিলিয়াযুক্ত শিখা কোষ যা অভিস্রবণ চাপের তারতম্যে আন্তঃকোষীয় তরল ছেঁকে নেয়।" },
      { name: "Metanephridia", nameBn: "মেটানেফ্রিডিয়া", functionEn: "Paired tubular organs in annelids opening internally into the coelom via nephrostome and externally via nephridiopore; reabsorb useful solutes.", functionBn: "কেঁচোর প্রতিটি খণ্ডে জোড়া নলাকার অঙ্গ যা সিলোম থেকে তরল ছেঁকে দেহত্বকের ছিদ্র দিয়ে বর্জ্য বের করে।" },
      { name: "Malpighian Tubules", nameBn: "ম্যালপিজিয়ান নালিকা", functionEn: "Blind-ended tubules bathed in haemolymph in insects/arachnids; secrete uric acid crystals into the gut for dry excretion conserving water.", functionBn: "পতঙ্গে হেমোলিম্ফে ডুবানো নলিকা যা ইউরিক অ্যাসিড ক্রিস্টাল হিন্ডগাটে ঢালে; শুষ্ক বর্জ্য নির্গমনে পানি সাশ্রয়।" },
      { name: "Nephron (Vertebrate Kidney)", nameBn: "নেফ্রন (মেরুদণ্ডীর বৃক্ক)", functionEn: "Functional filtration unit: glomerulus ultrafiltration → proximal tubule reabsorption → Loop of Henle concentration gradient → collecting duct final urine.", functionBn: "গ্লোমেরুলাসে রক্ত পরিস্রুত হয় → নিকট নালিকায় পুনর্শোষণ → হ্যানলির লুপে ঘনত্বের ক্রমধারা → সংগ্রহী নালিকায় চূড়ান্ত মূত্র।" }
    ],
    structuralVariations: [
      { taxonGroup: "Amphibia (Freshwater)", adaptationEn: "Mesonephric kidneys produce large volumes of hypotonic urine; skin actively pumps Na+ inward; bladder reabsorbs water.", adaptationBn: "মেসোনেফ্রিক বৃক্ক প্রচুর পাতলা মূত্র তৈরি করে; ত্বক সক্রিয়ভাবে Na+ ভেতরে নেয়; মূত্রথলি থেকে পানি পুনর্শোষিত হয়।", exampleSpeciesId: "sp-fejervarya-limnocharis" },
      { taxonGroup: "Desert Mammals", adaptationEn: "Exceptionally long Loops of Henle in renal medulla produce highly concentrated urine (up to 9× plasma osmolality in kangaroo rats).", adaptationBn: "অত্যন্ত লম্বা হ্যানলির লুপ অত্যধিক ঘন মূত্র তৈরি করে; মরুভূমির স্তন্যপায়ীরা পানি ছাড়াই বেঁচে থাকতে পারে।" },
      { taxonGroup: "Marine Birds & Reptiles", adaptationEn: "Salt glands (nasal/orbital) actively secrete hyperosmotic NaCl solution to rid excess salt from ingested seawater.", adaptationBn: "নাসারন্ধ্র বা চোখের কাছের লবণ গ্রন্থি উচ্চ ঘনত্বের NaCl নিঃসরণ করে সমুদ্রের পানির বাড়তি লবণ বের করে।", exampleSpeciesId: "sp-chelonia-mydas" }
    ],
    evolutionaryNotesEn: "Uricotelism (uric acid excretion) in insects, reptiles, and birds is a key adaptation to terrestrial water conservation; it allows embryonic waste storage in the sealed amniotic egg without toxic ammonia accumulation.",
    evolutionaryNotesBn: "পতঙ্গ, সরীসৃপ ও পাখিতে ইউরিক অ্যাসিড নির্গমন ডাঙার পানি-সাশ্রয়ের মূল অভিযোজন এবং অ্যামনিওটিক ডিমে বিষমুক্ত বর্জ্য সঞ্চয়ের সুযোগ দেয়।"
  },
  {
    id: "anat-reproductive",
    category: "anatomy",
    title: "Reproductive System & Gametogenic Organs",
    titleBn: "প্রজনন তন্ত্র ও জননকোষ উৎপাদনকারী অঙ্গ",
    overviewEn: "Reproductive organs produce, store, and deliver gametes and, in viviparous groups, nurture developing embryos. Sexual dimorphism in reproductive anatomy is often the most pronounced morphological difference between male and female individuals of the same species.",
    overviewBn: "প্রজনন অঙ্গ জননকোষ উৎপাদন, সঞ্চয় ও পরিবহন করে এবং জরায়ুজ প্রজাতিতে ভ্রূণ লালন করে। একই প্রজাতিতে পুরুষ ও স্ত্রীর মধ্যে প্রজনন অঙ্গের পার্থক্য সাধারণত সবচেয়ে সুস্পষ্ট রূপতাত্ত্বিক পার্থক্য।",
    mainComponents: [
      { name: "Gonads (Ovary / Testis)", nameBn: "জনন গ্রন্থি (ডিম্বাশয় / শুক্রাশয়)", functionEn: "Produce gametes via meiosis (eggs in ovaries, spermatozoa in testes) and secrete sex steroid hormones (estrogen, testosterone, progesterone).", functionBn: "মায়োসিস প্রক্রিয়ায় ডিম্বাণু ও শুক্রাণু তৈরি করে এবং যৌন হরমোন (ইস্ট্রোজেন, টেস্টোস্টেরন) নিঃসরণ করে।" },
      { name: "Accessory Ducts & Glands", nameBn: "সহায়ক নালী ও গ্রন্থি", functionEn: "Vas deferens, oviducts, seminal vesicles, and accessory glands transport, nourish, and capacitate gametes for fertilization.", functionBn: "শুক্রনালী, ডিম্বনালী ও সহায়ক গ্রন্থি জননকোষ পরিবহন, পুষ্টি সরবরাহ এবং নিষেকের জন্য প্রস্তুত করে।" },
      { name: "Uterus / Egg Capsule", nameBn: "জরায়ু / ডিম্বথলি", functionEn: "Muscular chamber nurturing placental embryos (eutherians) or receiving fertilized eggs encased in protective capsules (sharks, oviparous reptiles).", functionBn: "প্লাসেন্টার মাধ্যমে ভ্রূণ লালনকারী পেশিবহুল জরায়ু বা সুরক্ষামূলক খোলে মোড়া ডিম ধারণকারী থলি।" },
      { name: "Gonopores & Cloaca", nameBn: "জননছিদ্র ও ক্লোয়েকা", functionEn: "External pore for gamete or larval release; cloaca in non-mammalian vertebrates serves as combined reproductive, urinary, and intestinal opening.", functionBn: "বাইরে জননকোষ নির্গমনের ছিদ্র; ক্লোয়েকা অ-স্তন্যপায়ী মেরুদণ্ডীতে একত্রে পরিপাক, মূত্র ও প্রজনন পথের বহির্গম।" }
    ],
    structuralVariations: [
      { taxonGroup: "Teleost Fishes (External Fertilization)", adaptationEn: "Females release thousands to millions of buoyant pelagic eggs simultaneously; males broadcast sperm into water column; high fecundity offsets high larval mortality.", adaptationBn: "স্ত্রী মাছ লক্ষ লক্ষ ডিম ও পুরুষ শুক্রাণু একযোগে পানিতে ছেড়ে দেয়; বিপুল সংখ্যক ডিম উচ্চ মৃত্যুহারকে পুষিয়ে দেয়।", exampleSpeciesId: "sp-tenualosa-ilisha" },
      { taxonGroup: "Sharks (Chondrichthyes — Internal Fertilization)", adaptationEn: "Males use pelvic claspers to transfer sperm internally; species range from oviparous (egg cases) to viviparous (placental yolk-sac).", adaptationBn: "পুরুষ হাঙর পেলভিক ক্ল্যাসপার দিয়ে স্ত্রীর ভেতরে শুক্রাণু দেয়; ডিম্বজ থেকে জরায়ুজ পর্যন্ত বৈচিত্র্য বিদ্যমান।", exampleSpeciesId: "sp-chiloscyllium-indicum" },
      { taxonGroup: "Monotremata (Platypus)", adaptationEn: "Unique egg-laying mammals: single cloaca, leathery amniotic egg, and lactation through abdominal skin patches without nipples.", adaptationBn: "একমাত্র ডিম পাড়া স্তন্যপায়ী; বুকে স্তনের বদলে ত্বকের ছিদ্র থেকে দুধ ঝরে; একমাত্র ক্লোয়েকাযুক্ত।" }
    ],
    evolutionaryNotesEn: "Internal fertilization, amniotic egg, and finally placental viviparity represent successive evolutionary steps decoupling vertebrate reproduction from dependence on aquatic external fertilization environments.",
    evolutionaryNotesBn: "অভ্যন্তরীণ নিষেক, অ্যামনিওটিক ডিম এবং সবশেষে প্লাসেন্টাযুক্ত জরায়ুজ জনন মেরুদণ্ডীদের প্রজননকে পানির উপর নির্ভরতা থেকে মুক্ত করার ক্রমধারাবাহিক বিবর্তনীয় পদক্ষেপ।"
  },
  {
    id: "anat-sensory",
    category: "anatomy",
    title: "Sensory Systems & Receptor Organs",
    titleBn: "সংবেদী তন্ত্র ও গ্রাহক অঙ্গ",
    overviewEn: "Sensory organs transduce environmental stimuli (light, sound, pressure, chemicals, electric fields, gravity) into neural action potentials. Animals demonstrate remarkable diversity in sensory specialization driven by their ecological niche.",
    overviewBn: "সংবেদী অঙ্গ পরিবেশের উদ্দীপনা (আলো, শব্দ, চাপ, রাসায়নিক, বৈদ্যুতিক ক্ষেত্র, মাধ্যাকর্ষণ) স্নায়বিক স্পন্দনে রূপান্তরিত করে। বিভিন্ন পরিবেশগত কুলুঙ্গি অনুযায়ী সংবেদী বিশেষায়নে প্রাণিজগতে অপরিসীম বৈচিত্র্য বিদ্যমান।",
    mainComponents: [
      { name: "Compound Eyes & Camera Eyes", nameBn: "যৌগিক চোখ ও ক্যামেরা চোখ", functionEn: "Arthropods: thousands of ommatidia detecting wide-field motion; vertebrates: single-lens camera eye with rod (scotopic) and cone (photopic) photoreceptors.", functionBn: "আর্থ্রোপোডে হাজারো ওমাটিডিয়া ব্যাপক দৃষ্টিক্ষেত্রে গতি শনাক্ত করে; মেরুদণ্ডীতে রড ও কোন ফটোরিসেপ্টরযুক্ত ক্যামেরা চোখ।" },
      { name: "Lateral Line (Mechanoreception)", nameBn: "পার্শ্বরেখা তন্ত্র (মেকানোরিসেপশন)", functionEn: "Canals of hair cell neuromasts running along fish bodies detect low-frequency water displacement and pressure waves from prey, predators, and conspecifics.", functionBn: "মাছের পার্শ্বরেখা চুলকোষযুক্ত নিউরোমাস্টের মাধ্যমে পানির কম-কম্পাঙ্কের স্রোত ও শিকারের গতি শনাক্ত করে।" },
      { name: "Electroreceptors (Ampullae of Lorenzini)", nameBn: "তড়িৎগ্রাহক (লোরেনজিনির অ্যাম্পুলা)", functionEn: "Jelly-filled canals in sharks and rays detect microvolt electric fields generated by prey muscle contractions, enabling hunting in total darkness.", functionBn: "হাঙর ও রশ্মির মাথার জেলিপূর্ণ খালে শিকারের পেশি সংকোচনের মাইক্রোভোল্ট বৈদ্যুতিক ক্ষেত্র শনাক্ত হয়।" },
      { name: "Cochlea & Tympanic Membrane", nameBn: "কক্লিয়া ও কানের পর্দা", functionEn: "Tympanic membrane vibration transmitted via ossicles to cochlear hair cells; frequency-position tonotopic mapping encodes pitch.", functionBn: "কানের পর্দার কম্পন শ্রবণ অস্থি দিয়ে কক্লিয়ার চুলকোষে পৌঁছায়; কম্পাঙ্ক-অবস্থান মানচিত্রে স্বর-উচ্চতা এনকোড হয়।" },
      { name: "Chemoreception (Olfaction & Gustation)", nameBn: "রাসায়নিক গ্রাহক (ঘ্রাণ ও স্বাদ)", functionEn: "G-protein-coupled olfactory receptor neurons in nasal epithelium detecting odor molecules; taste buds on tongue detecting sweet, sour, salty, bitter, umami.", functionBn: "নাসাকলায় G-প্রোটিন-যুক্ত ঘ্রাণ গ্রাহক নিউরন; জিহ্বার স্বাদকুঁড়িতে মিষ্টি, টক, নোনা, তিতা ও উমামি শনাক্ত হয়।" }
    ],
    structuralVariations: [
      { taxonGroup: "Snakes (Pit Organs)", adaptationEn: "Infrared-sensitive pit organs (loreal pits in Crotalinae) detecting thermal radiation from warm-blooded prey in complete darkness.", adaptationBn: "বোয়া ও ভাইপার সাপের মুখের উত্তাপ-সংবেদী গর্তে ইনফ্রারেড বিকিরণ শনাক্ত করা হয়।", exampleSpeciesId: "sp-naja-naja" },
      { taxonGroup: "Bats (Echolocation)", adaptationEn: "Ultrasonic pulses (20–120 kHz) emitted from larynx; cochlea processes returning echoes to map prey position, size, and texture in real time.", adaptationBn: "বাদুড় উচ্চকম্পাঙ্কের শব্দতরঙ্গ নির্গত করে; ফিরে আসা প্রতিধ্বনি থেকে অন্ধকারে শিকারের অবস্থান ও আকার নির্ণয় করে।" },
      { taxonGroup: "Electric Fishes (Weakly Electric)", adaptationEn: "Electric organs (modified muscle or nerve cells) generate weak oscillating electric fields; electroreceptors detect field distortions caused by nearby objects.", adaptationBn: "পরিবর্তিত পেশিকোষ দুর্বল বৈদ্যুতিক ক্ষেত্র তৈরি করে এবং কাছের বস্তুর বিরূপ প্রভাব শনাক্ত করে যোগাযোগ ও পথ খোঁজে।" }
    ],
    evolutionaryNotesEn: "The vertebrate eye evolved independently at least once from an ancestral photosensitive patch; convergent camera-eye evolution occurred independently in cephalopod molluscs (Octopus), demonstrating powerful adaptive convergence.",
    evolutionaryNotesBn: "মেরুদণ্ডীর চোখ আদিম আলোসংবেদী কোষ থেকে বিকশিত হয়েছে; অক্টোপাসের চোখ সম্পূর্ণ স্বাধীনভাবে একই ক্যামেরা-চোখ গঠন অর্জন করেছে যা শক্তিশালী অভিসারী বিবর্তনের প্রমাণ।"
  }
];

export const PHYSIOLOGY_TOPICS: PhysiologyTopic[] = [
  {
    id: "phys-osmoregulation",
    category: "physiology",
    title: "Osmoregulation & Water Balance",
    titleBn: "অভিস্রবণ নিয়ন্ত্রণ ও জলীয় ভারসাম্য",
    overviewEn: "Osmoregulation is the active homeostatic regulation of internal osmotic pressure and fluid-solute balance against differing external salinities.",
    overviewBn: "অভিস্রবণ নিয়ন্ত্রণ হলো শরীরের অভ্যন্তরীণ পানির পরিমাণ এবং লবণের ঘনমাত্রাকে পরিবেশের তারতম্যের বিপরীতে ভারসাম্যপূর্ণ রাখার প্রক্রিয়া।",
    keyMechanisms: [
      { stage: "Freshwater Hyper-osmotic Challenge", stageBn: "স্বাদু পানির অভিস্রবণ সংকট", descriptionEn: "Internal body fluids are hypertonic to surrounding water; water rushes in via osmosis while ions leak out.", descriptionBn: "দেহের রক্ত বাইরের পানির চেয়ে ঘন হওয়ায় জল প্রতিনিয়ত শরীরে ঢোকে এবং লবণ বের হয়ে যায়।" },
      { stage: "Freshwater Compensatory Output", stageBn: "স্বাদু পানির সমাধান প্রক্রিয়া", descriptionEn: "Kidneys excrete vast volumes of dilute urine; branchial chloride cells actively pump Na+ and Cl- inward against gradient.", descriptionBn: "বৃক্ক প্রচুর পাতলা মূত্র ত্যাগ করে এবং ফুলকার ক্লোরাইড কোষ সক্রিয়ভাবে পানি থেকে লবণ শোষণ করে।" },
      { stage: "Marine Hypo-osmotic Challenge", stageBn: "সামুদ্রিক লবণাক্ত সংকট", descriptionEn: "Internal body fluids are hypotonic to seawater; water is constantly drawn out of body through gills.", descriptionBn: "দেহের রক্ত সমুদ্রের চেয়ে হালকা হওয়ায় ফুলকা দিয়ে অবিরাম পানি বাইরে হারিয়ে যায়।" },
      { stage: "Marine Compensatory Drinking", stageBn: "সামুদ্রিক সমাধান প্রক্রিয়া", descriptionEn: "Marine teleosts drink large amounts of seawater, absorbing water in gut and actively excreting excess salts via gill chloride cells.", descriptionBn: "মাছ প্রচুর সমুদ্রের পানি পান করে এবং ফুলকা দিয়ে বাড়তি লবণ সক্রিয়ভাবে সাগরে পাম্প করে বের করে।" }
    ],
    comparativeVariations: [
      { group: "Freshwater Carps (Labeo rohita)", mechanismEn: "Produces copiously dilute urine (up to 30% body weight daily); never drinks freshwater deliberately.", mechanismBn: "কখনোই পানি পান করে না; প্রতিদিন শরীরের ওজনের ৩০% পর্যন্ত পাতলা মূত্র ত্যাগ করে।", exampleSpeciesId: "sp-labeo-rohita" },
      { group: "Anadromous Hilsa (Tenualosa ilisha)", mechanismEn: "Stenohaline to euryhaline physiological switch: alters gill Na+/K+-ATPase orientation when ascending rivers from sea.", mechanismBn: "বঙ্গোপসাগর থেকে পদ্মা-মেঘনায় ডিম ছাড়তে আসার সময় ফুলকার এনজাইম পুরোপুরি বিপরীতমুখী করে নেয়।", exampleSpeciesId: "sp-tenualosa-ilisha" },
      { group: "Marine Sharks (Chondrichthyes)", mechanismEn: "Retains high concentrations of urea and trimethylamine oxide (TMAO) in blood making tissues slightly hyper-osmotic to sea.", mechanismBn: "রক্তে প্রচুর ইউরিয়া ও TMAO জমিয়ে রক্তের ঘনত্ব সমুদ্রের চেয়ে সামান্য বেশি রাখে, ফলে পানি হারায় না।", exampleSpeciesId: "sp-chiloscyllium-indicum" }
    ],
    homeostaticSignificanceEn: "Permits colonizing diverse salinities without lethal cell swelling or intracellular dehydration.",
    homeostaticSignificanceBn: "কোষের বিশ্লিষ্ট হওয়া বা পানিশূন্যতায় মৃত্যু রোধ করে সকল জলজ পরিবেশে প্রাণীদের সফল অভিযোজন নিশ্চিত করে।"
  },
  {
    id: "phys-thermoregulation",
    category: "physiology",
    title: "Thermoregulation: Ectothermy vs Endothermy",
    titleBn: "তাপ নিয়ন্ত্রণ: শীতলরক্ত বনাম উষ্ণরক্তের প্রাণী",
    overviewEn: "Animals maintain their operational core body temperature through metabolic heat generation (endothermy) or environmental heat absorption (ectothermy).",
    overviewBn: "প্রাণী নিজের বিপাকীয় তাপ দিয়ে শরীর গরম রাখে (উষ্ণরক্তী) অথবা পরিবেশ থেকে রোদ ও বাতাস দিয়ে তাপমাত্রা নিয়ন্ত্রণ করে (শীতলরক্তী)।",
    keyMechanisms: [
      { stage: "Poikilothermic Ectothermy", stageBn: "পোইকিলোথার্মিক শীতলরক্তী ব্যবস্থা", descriptionEn: "Body temperature conforms largely to environmental ambient temperature; low basal metabolic rate requiring 10x less food.", descriptionBn: "দেহের তাপমাত্রা পরিবেশের সাথে ওঠানামা করে; কম বিপাকীয় হারের কারণে ১০ গুণ কম খাদ্যের প্রয়োজন হয়।" },
      { stage: "Homeothermic Endothermy", stageBn: "হোমিওথার্মিক উষ্ণরক্তী ব্যবস্থা", descriptionEn: "High basal metabolic rate generates constant internal heat; regulated by hypothalamus, shivering, and brown adipose tissue.", descriptionBn: "হাইপোথ্যালামাস ও অবিরাম বিপাক দিয়ে দেহের তাপমাত্রা একটি নির্দিষ্ট বিন্দুতে (যেমন ৩৭°সে) স্থির রাখা হয়।" },
      { stage: "Behavioral Thermoregulation", stageBn: "আচরণগত তাপ নিয়ন্ত্রণ", descriptionEn: "Reptiles alternate basking on sun-warmed rocks with seeking cool subterranean burrows to maintain optimal 35-38°C.", descriptionBn: "গিরগিটি ও সাপ রোদে শুয়ে শরীর গরম করে এবং অতিরিক্ত গরমে ছায়ায় গিয়ে তাপমাত্রা বজায় রাখে।" }
    ],
    comparativeVariations: [
      { group: "Reptilia (Calotes versicolor)", mechanismEn: "Basking behavior expands peripheral melanophores darkening skin to absorb morning solar radiation faster.", mechanismBn: "সকালে রোদে বসার সময় ত্বকের মেলানিন ছড়িয়ে শরীর কালো করে দ্রুত তাপ শোষণ করে।", exampleSpeciesId: "sp-calotes-versicolor" },
      { group: "Mammalia (Platanista gangetica)", mechanismEn: "Thick insulating subcutaneous blubber prevents heat dissipation in river waters.", mechanismBn: "ত্বকের নিচে পুরু চর্বির স্তর (ব্লাবার) গাঙ্গেয় ডলফিনকে শীতকালে নদীর পানিতে গরম রাখে।", exampleSpeciesId: "sp-platanista-gangetica" }
    ],
    homeostaticSignificanceEn: "Endothermy enables sustained high-speed aerobic activity in sub-zero polar blizzards, whereas ectothermy maximizes survival in resource-scarce deserts.",
    homeostaticSignificanceBn: "উষ্ণরক্ত বরফেও প্রাণীকে সচল রাখে, আর শীতলরক্ত কম খাদ্যের বিরূপ পরিবেশে টিকে থাকার শ্রেষ্ঠ কৌশল।"
  },
  {
    id: "phys-digestion",
    category: "physiology",
    title: "Digestion: Enzymatic Breakdown & Nutrient Absorption",
    titleBn: "পরিপাক: এনজাইমভিত্তিক ভাঙন ও পুষ্টি শোষণ",
    overviewEn: "Digestion converts complex macromolecules (polysaccharides, proteins, lipids, nucleic acids) into absorbable monomers through sequential mechanical processing and enzymatic hydrolysis, regulated by enteric hormones.",
    overviewBn: "পরিপাক জটিল বৃহৎ অণু (পলিস্যাকারাইড, প্রোটিন, চর্বি, নিউক্লিক অ্যাসিড) কে অন্ত্রীয় হরমোন-নিয়ন্ত্রিত এনজাইম-বিভাজনের মাধ্যমে শোষণযোগ্য ক্ষুদ্র অণুতে রূপান্তরিত করে।",
    keyMechanisms: [
      { stage: "Mechanical Digestion", stageBn: "যান্ত্রিক পরিপাক", descriptionEn: "Mastication by teeth/radula, tongue kneading, and gastric churning reduce food particle size increasing enzyme access surface area.", descriptionBn: "দাঁত চর্বন, জিহ্বার মন্থন এবং পাকস্থলীর কোলাকুলি খাদ্যের আকার ছোট করে এনজাইমের সংস্পর্শ বাড়ায়।" },
      { stage: "Chemical Digestion — Mouth", stageBn: "রাসায়নিক পরিপাক — মুখ", descriptionEn: "Salivary amylase initiates starch hydrolysis; salivary lipase begins triglyceride breakdown at pH 6.8.", descriptionBn: "লালার অ্যামাইলেজ স্টার্চ ভাঙতে শুরু করে; লালার লাইপেজ ট্রাইগ্লিসারাইড ভাঙনের প্রথম ধাপ।" },
      { stage: "Gastric Phase", stageBn: "পাকস্থলীয় পর্যায়", descriptionEn: "HCl (pH 1.5–2.0) denatures proteins and activates pepsinogen → pepsin; gastrin hormone stimulates HCl secretion via G-cell pathway.", descriptionBn: "HCl (pH 1.5–2.0) প্রোটিন বিকৃত করে এবং পেপসিনোজেনকে সক্রিয় পেপসিনে পরিণত করে।" },
      { stage: "Intestinal Phase", stageBn: "অন্ত্রীয় পর্যায়", descriptionEn: "Pancreatic enzymes (trypsin, chymotrypsin, lipase, amylase, DNase) and bile salts emulsify and hydrolyze all macronutrients in the alkaline duodenum (pH 8).", descriptionBn: "অগ্ন্যাশয়ের ট্রিপসিন, লাইপেজ ও অ্যামাইলেজ এবং পিত্তলবণ ক্ষারীয় ডিউডেনামে সকল পুষ্টি সম্পূর্ণ পরিপাক করে।" },
      { stage: "Absorption", stageBn: "শোষণ", descriptionEn: "Glucose and amino acids: active Na+-cotransport into enterocytes → portal blood. Fatty acids + monoglycerides: reform into chylomicrons → lymphatic lacteals → thoracic duct.", descriptionBn: "গ্লুকোজ ও অ্যামিনো অ্যাসিড Na+ সহ-পরিবহনে রক্তে যায়; চর্বি কাইলোমাইক্রন হিসেবে লসিকায় যায়।" }
    ],
    comparativeVariations: [
      { group: "Herbivore Ruminants", mechanismEn: "Four-chambered stomach with resident microbial consortium (Ruminococcus, Methanobrevibacter) producing cellulases and fermenting cellulose to short-chain fatty acids.", mechanismBn: "চার প্রকোষ্ঠী পাকস্থলীতে মাইক্রোবিয়াল সেলুলেজ সেলুলোজকে শর্ট-চেইন ফ্যাটি অ্যাসিডে রূপান্তরিত করে।" },
      { group: "Carnivore Felids", mechanismEn: "Short, simple gut with low pH (1.8); rapid protein digestion; obligate carnivores lack functional salivary amylase genes.", mechanismBn: "ছোট সরল অন্ত্র, অত্যন্ত কম pH; দ্রুত প্রোটিন পরিপাক; বাধ্যতামূলক মাংসাশীদের কার্যকর লালার অ্যামাইলেজ নেই।", exampleSpeciesId: "sp-panthera-tigris" },
      { group: "Filter-Feeder Baleen Whales", mechanismEn: "No teeth; baleen plates filter krill; forestomach chamber houses microbial fermenters before acid-enzyme gastric digestion.", mechanismBn: "দাঁতহীন তিমি বেলিন পাত দিয়ে ক্রিল ছাঁকে; অগ্রভাগের প্রকোষ্ঠে মাইক্রোবিয়াল গাঁজন ঘটে।" }
    ],
    homeostaticSignificanceEn: "Coordinated hormonal regulation (gastrin, secretin, cholecystokinin) ensures enzyme secretion matches meal composition, preventing protein auto-digestion and lipid malabsorption.",
    homeostaticSignificanceBn: "গ্যাস্ট্রিন, সিক্রেটিন ও কোলেসিস্টোকিনিন হরমোন এনজাইম নিঃসরণকে খাদ্যের সাথে সামঞ্জস্যপূর্ণ করে এবং স্ব-পরিপাক প্রতিরোধ করে।"
  },
  {
    id: "phys-respiration",
    category: "physiology",
    title: "Respiration: Gas Transport & Cellular Metabolism",
    titleBn: "শ্বসন: গ্যাস পরিবহন ও কোষীয় বিপাক",
    overviewEn: "Respiration encompasses external gas exchange between an organism and environment, transport of O₂ by blood pigments, and cellular (internal) respiration where O₂ is consumed in mitochondrial oxidative phosphorylation to generate ATP.",
    overviewBn: "শ্বসন বলতে প্রাণী ও পরিবেশের মধ্যে বাহ্যিক গ্যাস বিনিময়, রক্তরঞ্জকে O₂ পরিবহন এবং মাইটোকন্ড্রিয়ার অক্সিডেটিভ ফসফোরাইলেশনে ATP উৎপাদনকারী কোষীয় শ্বসন — তিনটিকেই বোঝায়।",
    keyMechanisms: [
      { stage: "Ventilation", stageBn: "বায়ুচলাচল", descriptionEn: "Diaphragmatic/intercostal muscle contraction lowers intrathoracic pressure (inspiration); relaxation raises pressure expelling CO₂-rich air (expiration).", descriptionBn: "ডায়াফ্রাম ও আন্তঃপার্শ্বীয় পেশির সংকোচনে বুকের চাপ কমে শ্বাস ঢোকে; শিথিলতায় CO₂-যুক্ত বায়ু বের হয়।" },
      { stage: "O₂ Loading at Lungs/Gills", stageBn: "ফুসফুস/ফুলকায় O₂ বন্ধন", descriptionEn: "High alveolar pO₂ drives O₂ binding to haemoglobin (Hb) forming oxyhaemoglobin; sigmoidal O₂-Hb dissociation curve ensures near-complete saturation.", descriptionBn: "ফুসফুসের উচ্চ pO₂ হিমোগ্লোবিনকে অক্সিহিমোগ্লোবিনে পরিণত করে; S-আকৃতির বিচ্ছেদ বক্ররেখা প্রায় সম্পূর্ণ পরিপৃক্ততা নিশ্চিত করে।" },
      { stage: "O₂ Unloading at Tissues", stageBn: "কোষে O₂ মুক্তি", descriptionEn: "Low tissue pO₂, high CO₂, and low pH (Bohr Effect) reduce Hb-O₂ affinity, facilitating O₂ delivery to metabolically active tissues.", descriptionBn: "কোষে কম pO₂, বেশি CO₂ ও কম pH (বোর প্রভাব) হিমোগ্লোবিন থেকে O₂ মুক্তিকে ত্বরান্বিত করে।" },
      { stage: "CO₂ Transport", stageBn: "CO₂ পরিবহন", descriptionEn: "70% CO₂ as dissolved bicarbonate (HCO₃⁻) in plasma; 23% bound to Hb as carbaminohaemoglobin; 7% dissolved in plasma.", descriptionBn: "৭০% CO₂ প্লাজমায় বাইকার্বনেট হিসেবে; ২৩% কার্বামিনোহিমোগ্লোবিন হিসেবে; ৭% সরাসরি দ্রবীভূত।" },
      { stage: "Cellular Respiration (Mitochondria)", stageBn: "কোষীয় শ্বসন (মাইটোকন্ড্রিয়া)", descriptionEn: "Glucose oxidation: glycolysis (2 ATP) → Krebs cycle (2 ATP) → electron transport chain (32–34 ATP); O₂ is terminal electron acceptor producing H₂O.", descriptionBn: "গ্লাইকোলাইসিস + ক্রেবস চক্র + ইলেকট্রন পরিবহন শৃঙ্খলে এক গ্লুকোজ থেকে ~৩৬ ATP উৎপাদন; O₂ চূড়ান্ত ইলেকট্রন গ্রহীতা।" }
    ],
    comparativeVariations: [
      { group: "Diving Marine Mammals (Cetacea)", mechanismEn: "Elevated muscle myoglobin stores large O₂ reserve; spleen contracts releasing extra erythrocytes; bradycardia and peripheral vasoconstriction conserve O₂ for brain and heart.", mechanismBn: "মায়োগ্লোবিন-সমৃদ্ধ পেশিতে O₂ সঞ্চয়; হৃদস্পন্দন ধীর হয়; মস্তিষ্কে O₂ সংরক্ষণের জন্য অঙ্গের রক্তনালী সংকুচিত হয়।", exampleSpeciesId: "sp-platanista-gangetica" },
      { group: "High-Altitude Birds", mechanismEn: "Haemoglobin with higher O₂ affinity at low pO₂; parabronchial unidirectional flow extracts ~80% O₂ from inhaled air vs ~25% in mammalian alveoli.", mechanismBn: "বেশি O₂-আসক্তির হিমোগ্লোবিন; একমুখী প্যারাব্রঙ্কিয়াল প্রবাহে শ্বসিত বায়ুর ৮০% O₂ আহরণ করা যায়।" },
      { group: "Tidal Flat Mudskippers", mechanismEn: "Aerial breathing via moist vascularized skin and lining of buccopharyngeal cavity while gill chamber retains water for aquatic respiration.", mechanismBn: "আর্দ্র ত্বক ও বুক-গলবিলীয় গহ্বর দিয়ে বায়বীয় শ্বসন; ফুলকায় পানি ধরে রেখে জলজ শ্বসনও বজায় থাকে।" }
    ],
    homeostaticSignificanceEn: "Medullary respiratory centres (pre-Bötzinger complex) continuously monitor arterial CO₂ and pH, adjusting breathing rate and depth to maintain blood pH at 7.35–7.45.",
    homeostaticSignificanceBn: "মেডুলার শ্বসন কেন্দ্র ধমনীর CO₂ ও pH পর্যবেক্ষণ করে শ্বাসের হার ও গভীরতা নিয়ন্ত্রণ করে রক্তের pH 7.35–7.45 এ রাখে।"
  },
  {
    id: "phys-circulation",
    category: "physiology",
    title: "Circulation: Cardiovascular Regulation & Blood Physiology",
    titleBn: "সংবহন: কার্ডিওভাসকুলার নিয়ন্ত্রণ ও রক্তের শারীরবিজ্ঞান",
    overviewEn: "Cardiovascular physiology maintains adequate perfusion of all tissues by regulating cardiac output (heart rate × stroke volume), vascular resistance, blood pressure, and blood composition including plasma proteins, erythrocytes, leukocytes, and platelets.",
    overviewBn: "কার্ডিওভাসকুলার শারীরবিদ্যা হৃদপিণ্ডের আউটপুট (হৃদস্পন্দন × স্ট্রোক ভলিউম), রক্তনালীর প্রতিরোধ এবং রক্তের লোহিত-শ্বেতকণিকা ও প্লেটলেট নিয়ন্ত্রণের মাধ্যমে সকল কোষে পর্যাপ্ত রক্ত সরবরাহ বজায় রাখে।",
    keyMechanisms: [
      { stage: "Cardiac Cycle", stageBn: "হৃদচক্র", descriptionEn: "Sinoatrial node generates spontaneous action potential → atrial systole (atria contract) → AV node delay → ventricular systole (ventricles contract, ejecting blood).", descriptionBn: "সাইনোঅ্যাট্রিয়াল নোড বিদ্যুৎস্পন্দন তৈরি করে → অলিন্দ সংকোচন → AV নোড বিলম্ব → নিলয় সংকোচনে রক্ত নির্গত হয়।" },
      { stage: "Blood Pressure Regulation", stageBn: "রক্তচাপ নিয়ন্ত্রণ", descriptionEn: "Baroreceptors in carotid sinus and aortic arch detect pressure changes; medullary vasomotor centre modulates sympathetic vasoconstriction and cardiac output.", descriptionBn: "ক্যারোটিড ও মহাধমনীর ব্যারোরিসেপ্টর চাপ পরিবর্তন শনাক্ত করে; মেডুলার ভাসোমোটর কেন্দ্র সহানুভূতিক স্নায়ু দিয়ে চাপ সামঞ্জস্য করে।" },
      { stage: "Haemopoiesis", stageBn: "রক্তকণিকা উৎপাদন", descriptionEn: "Red bone marrow produces 200 billion erythrocytes daily; EPO hormone (from hypoxic kidney) stimulates increased RBC production at altitude or after haemorrhage.", descriptionBn: "লাল অস্থিমজ্জা প্রতিদিন ২০০০ কোটি লোহিত কণিকা তৈরি করে; হাইপোক্সিক বৃক্ক EPO নিঃসরণ করে বেশি RBC উৎপাদন ঘটায়।" },
      { stage: "Haemostasis & Clotting", stageBn: "রক্তক্ষরণ বন্ধ ও জমাট বাঁধা", descriptionEn: "Vascular spasm → platelet plug → coagulation cascade: XII → XI → IX → X → prothrombin → thrombin → fibrinogen → fibrin mesh trapping erythrocytes.", descriptionBn: "নালী সংকোচন → অণুচক্রিকা জমাট → জমাট শৃঙ্খল: প্রোথ্রম্বিন → থ্রম্বিন → ফাইব্রিনোজেন → ফাইব্রিনের জাল।" }
    ],
    comparativeVariations: [
      { group: "Fishes — Branchial Circulation", mechanismEn: "After gill oxygenation, blood pressure drops; slow systemic circulation limits aerobic scope but is sufficient for ectothermic metabolic demands.", mechanismBn: "ফুলকায় অক্সিজেন গ্রহণের পর রক্তচাপ কমে; শীতলরক্তী বিপাকের চাহিদায় এই ধীর সংবহন যথেষ্ট।", exampleSpeciesId: "sp-labeo-rohita" },
      { group: "Crocodilians — Panizza Foramen", mechanismEn: "Four-chambered heart but ventricular shunting via foramen of Panizza allows pulmonary bypass during diving, reducing unnecessary perfusion of non-ventilated lung.", mechanismBn: "চার প্রকোষ্ঠী হৃদপিণ্ড হলেও ডুবসাঁতারে প্যানিজার ছিদ্র দিয়ে ফুসফুস বাইপাস করা যায়।" },
      { group: "Diving Pinnipeds (Seals)", mechanismEn: "Massive spleen stores 50% total blood volume; selective organ ischaemia during diving maintains cerebral and cardiac perfusion.", mechanismBn: "প্লীহায় মোট রক্তের ৫০% সংরক্ষিত থাকে; ডুবসাঁতারে শুধু মস্তিষ্ক ও হৃদপিণ্ডে রক্ত সরবরাহ চালু রাখা হয়।" }
    ],
    homeostaticSignificanceEn: "Renin-angiotensin-aldosterone system (RAAS) and atrial natriuretic peptide (ANP) act as counterbalancing hormonal axes maintaining blood volume and sodium homeostasis.",
    homeostaticSignificanceBn: "RAAS (রেনিন-অ্যাঞ্জিওটেনসিন-অ্যালডোস্টেরন) ও ANP হরমোন পরস্পরের প্রতিভার হিসেবে কাজ করে রক্তের পরিমাণ ও সোডিয়াম ভারসাম্য রক্ষা করে।"
  },
  {
    id: "phys-excretion",
    category: "physiology",
    title: "Excretion & Nitrogen Metabolism",
    titleBn: "রেচন ও নাইট্রোজেন বিপাক",
    overviewEn: "Excretion eliminates the toxic nitrogenous end-products of amino acid catabolism. The primary waste product (ammonia, urea, or uric acid) reflects an animal's evolutionary history, available water, and metabolic rate.",
    overviewBn: "রেচন অ্যামিনো অ্যাসিডের বিপাক থেকে উৎপন্ন বিষাক্ত নাইট্রোজেনঘটিত বর্জ্য নির্মূল করে। প্রধান বর্জ্য পদার্থ (অ্যামোনিয়া, ইউরিয়া বা ইউরিক অ্যাসিড) প্রাণীর বিবর্তনীয় ইতিহাস, পানির প্রাচুর্য ও বিপাকের হারকে প্রতিফলিত করে।",
    keyMechanisms: [
      { stage: "Ammonotelism (Aquatic Animals)", stageBn: "অ্যামোনোটেলিজম (জলজ প্রাণী)", descriptionEn: "Ammonia (NH₃) diffuses readily across gills or body surfaces into surrounding water; highly toxic but energetically cheap to excrete.", descriptionBn: "অ্যামোনিয়া ফুলকা বা দেহতল দিয়ে সরাসরি পানিতে ব্যাপিত হয়; অত্যন্ত বিষাক্ত কিন্তু তৈরিতে শক্তি লাগে না।" },
      { stage: "Ureotelism (Amphibia, Mammals)", stageBn: "ইউরিওটেলিজম (উভচর, স্তন্যপায়ী)", descriptionEn: "Ornithine-urea cycle in hepatocytes converts ammonia + CO₂ into soluble, less toxic urea at the cost of 4 ATP per molecule; excreted by kidneys.", descriptionBn: "যকৃতের অর্নিথিন-ইউরিয়া চক্রে অ্যামোনিয়া → ইউরিয়া রূপান্তর ঘটে (প্রতি অণুতে ৪ ATP ব্যয়); বৃক্ক দ্বারা নির্গত।" },
      { stage: "Uricotelism (Insects, Reptiles, Birds)", stageBn: "ইউরিকোটেলিজম (পতঙ্গ, সরীসৃপ, পাখি)", descriptionEn: "Uric acid crystallises as insoluble white paste; excreted with almost no water loss — essential for embryos in sealed eggs.", descriptionBn: "ইউরিক অ্যাসিড অদ্রাব্য সাদা স্ফটিকে পরিণত হয়; পানি ছাড়াই নির্গত হয় — বদ্ধ অ্যামনিওটিক ডিমে অপরিহার্য।" },
      { stage: "Nephron Filtration & Concentration", stageBn: "নেফ্রন পরিস্রবণ ও ঘনীভবন", descriptionEn: "Glomerular filtration (180 L/day in humans) → 99% reabsorption → 1.5 L concentrated urine; antidiuretic hormone (ADH) regulates water reabsorption in collecting ducts.", descriptionBn: "গ্লোমেরুলাসে প্রতিদিন ১৮০ লিটার পরিশ্রুত হয়; ৯৯% পুনর্শোষিত হয়; ADH হরমোন সংগ্রহী নালিকায় পানি ধারণ নিয়ন্ত্রণ করে।" }
    ],
    comparativeVariations: [
      { group: "Elasmobranch Sharks", mechanismEn: "Retain 300–400 mM blood urea + TMAO as osmoprotectants making tissues near-isosmotic to seawater; specialized rectal gland excretes excess NaCl.", mechanismBn: "রক্তে ৩০০–৪০০ mM ইউরিয়া ও TMAO সঞ্চিত রেখে রক্তের ঘনত্ব সমুদ্রের সমান রাখে; রেক্টাল গ্রন্থি NaCl নিষ্কাশন করে।", exampleSpeciesId: "sp-chiloscyllium-indicum" },
      { group: "Xeric Desert Mammals (Kangaroo Rat)", mechanismEn: "Extremely long Loop of Henle generates steep corticomedullary osmotic gradient, producing urine up to 9× plasma osmolality.", mechanismBn: "অত্যন্ত দীর্ঘ হ্যানলির লুপ প্লাজমার ৯ গুণ ঘন মূত্র তৈরি করে; মরুতে পানির কোনো বাইরের উৎস ছাড়াই জীবনধারণ।" },
      { group: "Hilsa — Diadromous Renal Switch", mechanismEn: "Renal tubular ion transporter expression changes reciprocally between marine (salt-excreting) and freshwater (salt-retaining) kidney function during anadromous migration.", mechanismBn: "সমুদ্র থেকে নদীতে আসার সময় বৃক্কের আয়ন পরিবহনকারী পরিবর্তিত হয়ে লবণ নির্গমন থেকে লবণ ধারণে রূপান্তরিত হয়।", exampleSpeciesId: "sp-tenualosa-ilisha" }
    ],
    homeostaticSignificanceEn: "Precise plasma pH, electrolyte, and nitrogen waste regulation by the kidney prevents life-threatening uraemia, acidosis, and cellular osmotic shock.",
    homeostaticSignificanceBn: "বৃক্কের সুনির্দিষ্ট pH, ইলেকট্রোলাইট ও নাইট্রোজেন বর্জ্য নিয়ন্ত্রণ জীবনের জন্য মারাত্মক ইউরেমিয়া, অ্যাসিডোসিস ও কোষীয় শক থেকে রক্ষা করে।"
  },
  {
    id: "phys-nervous-coordination",
    category: "physiology",
    title: "Nervous Coordination, Reflexes & Behaviour",
    titleBn: "স্নায়বিক সমন্বয়, প্রতিবর্ত ক্রিয়া ও আচরণ",
    overviewEn: "Neural coordination integrates sensory information with motor responses via electrochemical signaling. From simple reflex arcs in invertebrates to complex learned behaviour in mammals, nervous coordination allows organisms to respond adaptively to their environment.",
    overviewBn: "স্নায়বিক সমন্বয় তড়িৎ-রাসায়নিক সংকেতের মাধ্যমে সংবেদী তথ্যকে পেশি বা গ্রন্থির প্রতিক্রিয়ায় রূপান্তরিত করে। অমেরুদণ্ডীর সরল প্রতিবর্ত থেকে স্তন্যপায়ীর জটিল শিক্ষণীয় আচরণ পর্যন্ত বিস্তৃত।",
    keyMechanisms: [
      { stage: "Action Potential", stageBn: "ক্রিয়া বিভব", descriptionEn: "Voltage-gated Na⁺ channels open at threshold (−55 mV) → rapid depolarization to +40 mV → K⁺ channel repolarization → refractory period; propagated along axon at 0.5–120 m/s.", descriptionBn: "সীমা-ভোল্টেজে Na⁺ চ্যানেল খুলে দ্রুত বিধ্রুবীকরণ → K⁺ চ্যানেলে পুনর্ধ্রুবীকরণ; অ্যাক্সন বরাবর ০.৫–১২০ মি/সে গতিতে পরিবহন।" },
      { stage: "Synaptic Transmission", stageBn: "সাইন্যাপটিক সঞ্চালন", descriptionEn: "Neurotransmitter (acetylcholine, dopamine, serotonin, GABA) vesicles fuse with presynaptic membrane on Ca²⁺ influx; bind postsynaptic receptors causing EPSP or IPSP.", descriptionBn: "Ca²⁺ প্রবেশে নিউরোট্রান্সমিটার ভেসিকল প্রি-সাইন্যাপটিক ঝিল্লিতে মিলিত হয়; পোস্ট-সাইন্যাপটিক রিসেপ্টরে উত্তেজনা বা বাধা সৃষ্টি করে।" },
      { stage: "Reflex Arc", stageBn: "প্রতিবর্ত চাপ", descriptionEn: "Receptor → afferent neuron → integration centre (spinal interneuron in vertebrates) → efferent neuron → effector; operates without conscious brain involvement.", descriptionBn: "গ্রাহক → অভিকেন্দ্রী স্নায়ু → সমন্বয় কেন্দ্র (সুষুম্নার ইন্টারনিউরন) → অপকেন্দ্রী স্নায়ু → কারক; মস্তিষ্কের সচেতনতা ছাড়াই ঘটে।" },
      { stage: "Learning & Memory", stageBn: "শিক্ষণ ও স্মৃতি", descriptionEn: "Long-term potentiation (LTP): repeated synaptic activation → AMPA receptor insertion → synapse strengthening in hippocampus encoding declarative memory.", descriptionBn: "বারবার সাইন্যাপটিক উদ্দীপনায় দীর্ঘমেয়াদী পোটেনশিয়েশন ঘটে; হিপোক্যাম্পাসে নতুন স্মৃতি গঠন হয়।" }
    ],
    comparativeVariations: [
      { group: "Cephalopoda (Learning)", mechanismEn: "Octopus demonstrates observational learning, short-term and long-term memory, and problem-solving using specialized vertical lobe and superior frontal lobe of the brain.", mechanismBn: "অক্টোপাস পর্যবেক্ষণমূলক শিক্ষণ, স্বল্প ও দীর্ঘমেয়াদী স্মৃতি এবং সমস্যা-সমাধানে সক্ষম।" },
      { group: "Insecta (Pheromone Communication)", mechanismEn: "Olfactory receptor neurons on antennae detect species-specific pheromone molecules at femtomolar concentrations triggering stereotyped reproductive and alarm behaviours.", mechanismBn: "অ্যান্টেনার ঘ্রাণ গ্রাহক নিউরন অতি ক্ষুদ্র ঘনমাত্রায় ফেরোমন শনাক্ত করে প্রজনন ও সতর্কতামূলক আচরণ ঘটায়।", exampleSpeciesId: "sp-musca-domestica" },
      { group: "Cetacea (Complex Cognition)", mechanismEn: "Dolphin neocortex contains spindle neurons (von Economo neurons) associated with self-awareness, empathy, and cultural transmission of foraging behaviours.", mechanismBn: "ডলফিনের নিয়োকরটেক্সে স্পিন্ডেল নিউরন আত্ম-সচেতনতা, সহানুভূতি ও শিকার কৌশলের সাংস্কৃতিক প্রবাহে ভূমিকা রাখে।", exampleSpeciesId: "sp-platanista-gangetica" }
    ],
    homeostaticSignificanceEn: "Autonomic nervous system maintains visceral homeostasis (heart rate, breathing, digestion, pupil dilation) continuously without conscious effort via sympathetic (arousal) and parasympathetic (rest-digest) antagonism.",
    homeostaticSignificanceBn: "স্বায়ত্তশাসিত স্নায়ুতন্ত্র সচেতনতা ছাড়াই সহানুভূতিক (উত্তেজনা) ও প্যারাসিম্পেথেটিক (বিশ্রাম) বিপরীতমুখী ক্রিয়ায় হৃদস্পন্দন, শ্বাস ও পরিপাক নিয়ন্ত্রণ করে।"
  },
  {
    id: "phys-reproduction",
    category: "physiology",
    title: "Reproduction: Gametogenesis, Fertilization & Development",
    titleBn: "প্রজনন: জননকোষ উৎপাদন, নিষেক ও বিকাশ",
    overviewEn: "Reproductive physiology encompasses gametogenesis (meiotic production of haploid gametes), fertilization (gamete fusion restoring diploidy), embryonic development, and parental investment strategies. It is the central mechanism of biological continuity and evolutionary change.",
    overviewBn: "প্রজনন শারীরবিদ্যা মায়োসিস দ্বারা হ্যাপ্লয়েড জননকোষ উৎপাদন, জননকোষের মিলনে দ্বিগুণিত পুনরুদ্ধার, ভ্রূণ বিকাশ এবং অপত্য পরিচর্যার কৌশল নিয়ে গঠিত।",
    keyMechanisms: [
      { stage: "Spermatogenesis", stageBn: "শুক্রাণু উৎপাদন", descriptionEn: "Spermatogonia (2n) → mitosis → primary spermatocyte → meiosis I (secondary spermatocyte) → meiosis II (spermatids) → spermiogenesis (mature spermatozoa with acrosome, midpiece, flagellum).", descriptionBn: "স্পার্মাটোগোনিয়া → মাইটোসিস → প্রাথমিক স্পার্মাটোসাইট → মায়োসিস I ও II → স্পার্মাটিড → অ্যাক্রোজোম-মিডপিস-ফ্ল্যাজেলামযুক্ত পরিণত শুক্রাণু।" },
      { stage: "Oogenesis", stageBn: "ডিম্বাণু উৎপাদন", descriptionEn: "Primary oocytes arrested in prophase I (from fetal life) → hormonal LH surge triggers resumption of meiosis I → secondary oocyte released at ovulation → meiosis II completed only on fertilization.", descriptionBn: "প্রাথমিক ওওসাইট প্রোফেজ I-এ স্থগিত থাকে → LH বৃদ্ধিতে মায়োসিস I সম্পন্ন → ডিম্বোস্ফোটন → নিষেকের পরেই মায়োসিস II শেষ হয়।" },
      { stage: "Fertilization", stageBn: "নিষেক", descriptionEn: "Acrosome reaction releases enzymes penetrating zona pellucida; cortical reaction blocks polyspermy; pronuclear fusion restores 2n chromosome number.", descriptionBn: "অ্যাক্রোজোম প্রতিক্রিয়ায় এনজাইম নির্গত হয়ে জোনা পেলুসিডা ভেদ করে; কর্টিকাল প্রতিক্রিয়া একাধিক শুক্রাণু প্রবেশ রোধ করে।" },
      { stage: "Embryonic Development", stageBn: "ভ্রূণ বিকাশ", descriptionEn: "Cleavage → morula → blastula → gastrulation (germ layer formation) → neurulation → organogenesis regulated by Hox gene transcription factor gradients.", descriptionBn: "ক্লিভেজ → মোরুলা → ব্লাস্টুলা → গ্যাস্ট্রুলেশন (ভ্রূণস্তর গঠন) → নিউরুলেশন → Hox জিন-নির্দেশিত অঙ্গ গঠন।" }
    ],
    comparativeVariations: [
      { group: "Oviparous Teleosts (External Fertilization)", mechanismEn: "Massive ovarian follicle growth under FSH/LH; high fecundity (millions of eggs) compensates for near-zero parental investment in most broadcast spawners.", mechanismBn: "FSH/LH-নির্দেশিত ডিম্বাশয়ের বৃদ্ধি; লক্ষ লক্ষ ডিম উৎপাদন পিতামাতার পরিচর্যাহীনতা পুষিয়ে দেয়।", exampleSpeciesId: "sp-tenualosa-ilisha" },
      { group: "Eutherian Placental Mammals", mechanismEn: "Chorioallantoic placenta: trophoblast invasion of decidua enables maternal-fetal gas, nutrient, and waste exchange via hemotrophic nutrition over extended gestation.", mechanismBn: "প্লাসেন্টায় মাতৃ ও ভ্রূণীয় সংবহন হেমাটোট্রফিক পুষ্টি সরবরাহ করে দীর্ঘ গর্ভধারণ সম্ভব করে।", exampleSpeciesId: "sp-platanista-gangetica" },
      { group: "Amphibia — Biphasic Life History", mechanismEn: "External fertilization in water; free-swimming tadpole with gills and lateral line; metamorphosis (TH-induced) transforms larval structures into terrestrial adult form.", mechanismBn: "পানিতে বাহ্যিক নিষেক; ফুলকা ও পার্শ্বরেখাযুক্ত ব্যাঙাচি; থাইরয়েড হরমোন-প্ররোচিত রূপান্তরে ডাঙার ব্যাঙে পরিণত হয়।", exampleSpeciesId: "sp-fejervarya-limnocharis" }
    ],
    homeostaticSignificanceEn: "Hypothalamic-pituitary-gonadal (HPG) axis maintains reproductive cyclicity via negative feedback of sex steroids on GnRH and FSH/LH secretion, synchronizing reproduction with environmental seasonality.",
    homeostaticSignificanceBn: "হাইপোথ্যালামাস-পিটুইটারি-গোনাড (HPG) অক্ষ যৌন হরমোনের নেতিবাচক প্রতিক্রিয়ার মাধ্যমে প্রজনন চক্র নিয়ন্ত্রণ করে পরিবেশের ঋতু পরিবর্তনের সাথে সামঞ্জস্য রাখে।"
  },
  {
    id: "phys-homeostasis",
    category: "physiology",
    title: "Homeostasis: Regulation & Feedback Mechanisms",
    titleBn: "হোমিওস্ট্যাসিস: নিয়ন্ত্রণ ও প্রতিক্রিয়া ব্যবস্থা",
    overviewEn: "Homeostasis is the dynamic maintenance of internal physiological conditions within narrow functional ranges (temperature, pH, osmolality, glucose, O₂) despite fluctuating external environments. It is achieved through negative feedback loops involving receptors, integrating centres, and effectors.",
    overviewBn: "হোমিওস্ট্যাসিস হলো পরিবর্তনশীল বাহ্যিক পরিবেশ সত্ত্বেও অভ্যন্তরীণ তাপমাত্রা, pH, অভিস্রবণ চাপ, গ্লুকোজ ও O₂-কে সংকীর্ণ কার্যকর সীমায় গতিশীলভাবে বজায় রাখা। নেতিবাচক প্রতিক্রিয়া লুপের মাধ্যমে এটি অর্জিত হয়।",
    keyMechanisms: [
      { stage: "Negative Feedback Loop", stageBn: "নেতিবাচক প্রতিক্রিয়া লুপ", descriptionEn: "Deviation from set point detected by receptor → signal sent to integrating centre → effector response opposes deviation → variable returns to set point. Example: blood glucose, body temperature.", descriptionBn: "নির্ধারিত মান থেকে বিচ্যুতি গ্রাহক শনাক্ত করে → সমন্বয় কেন্দ্রে সংকেত → কারক বিচ্যুতির বিপরীত প্রতিক্রিয়া দেখায় → চলক মানে ফেরে।" },
      { stage: "Blood Glucose Homeostasis", stageBn: "রক্তের গ্লুকোজ হোমিওস্ট্যাসিস", descriptionEn: "Post-meal hyperglycaemia → pancreatic β-cells release insulin → hepatic glycogen synthesis + GLUT4 recruitment → glucose uptake restores euglycaemia (4–6 mM).", descriptionBn: "খাওয়ার পর রক্তে গ্লুকোজ বাড়লে → বিটা কোষ ইনসুলিন নিঃসরণ করে → যকৃতে গ্লাইকোজেন সংশ্লেষ ও কোষে গ্লুকোজ গ্রহণ বাড়ে → গ্লুকোজ স্বাভাবিকে ফেরে।" },
      { stage: "pH Regulation (Acid-Base Balance)", stageBn: "pH নিয়ন্ত্রণ (অম্ল-ক্ষার ভারসাম্য)", descriptionEn: "Three buffering systems: 1) Bicarbonate buffer (immediate); 2) Respiratory adjustment (CO₂ in minutes); 3) Renal H⁺/HCO₃⁻ excretion/reabsorption (hours-days).", descriptionBn: "তিনটি বাফার পদ্ধতি: ১) বাইকার্বনেট বাফার (তাৎক্ষণিক); ২) ফুসফুস দ্বারা CO₂ নিয়ন্ত্রণ (মিনিটে); ৩) বৃক্ক দ্বারা H⁺/HCO₃⁻ (ঘন্টা-দিন)।" },
      { stage: "Positive Feedback (Exceptions)", stageBn: "ধনাত্মক প্রতিক্রিয়া (ব্যতিক্রম)", descriptionEn: "Positive feedback amplifies deviations to a crisis point then terminates: oxytocin during childbirth, LH surge triggering ovulation, action potential depolarization phase.", descriptionBn: "ধনাত্মক প্রতিক্রিয়া বিচ্যুতিকে চরম বিন্দুতে নিয়ে তারপর বন্ধ করে: প্রসবে অক্সিটোসিন, ডিম্বোস্ফোটনে LH বৃদ্ধি।" }
    ],
    comparativeVariations: [
      { group: "Ectothermic Reptiles", mechanismEn: "Behavioural thermoregulation (basking, shade-seeking, postural adjustment) supplements biochemical buffering maintaining preferred body temperature for metabolic efficiency.", mechanismBn: "রোদে বসা, ছায়া খোঁজা ও শরীরের ভঙ্গি পরিবর্তন দিয়ে আচরণগতভাবে তাপমাত্রা নিয়ন্ত্রণ করে।", exampleSpeciesId: "sp-calotes-versicolor" },
      { group: "Intertidal Marine Invertebrates", mechanismEn: "Osmoconformers (mussels) allow internal osmolality to track seawater changes; osmoregulators (crabs) actively regulate haemolymph osmolality against tidal salinity fluctuations.", mechanismBn: "ঝিনুক অভিস্রবণ-অনুসরণকারী; কাঁকড়া অভিস্রবণ-নিয়ন্ত্রণকারী হিসেবে জোয়ার-ভাটার লবণাক্ততা পরিবর্তনে স্বতন্ত্র কৌশলে টিকে থাকে।" },
      { group: "Hibernating Mammals", mechanismEn: "Voluntary lowering of hypothalamic set point: core temperature drops to near-ambient (2–10°C), heart rate to <10 bpm, and metabolism to 2–5% of normal — regulated suspended animation.", mechanismBn: "শীতনিদ্রায় হাইপোথ্যালামাসের নির্ধারিত মান স্বেচ্ছায় নামিয়ে দেহের তাপমাত্রা ২–১০°C, হৃদস্পন্দন ১০-এর নিচে এবং বিপাক ২–৫% এ নামানো হয়।" }
    ],
    homeostaticSignificanceEn: "The concept of the milieu intérieur (Claude Bernard, 1878) established that maintaining stable internal conditions is the essential prerequisite for all complex animal life and active metabolic independence from environmental fluctuations.",
    homeostaticSignificanceBn: "ক্লদ বার্নার্ডের 'মিলিউ ইন্টেরিয়র' ধারণা প্রতিষ্ঠিত করে যে অভ্যন্তরীণ পরিবেশের স্থিতিশীলতাই জটিল প্রাণীজীবন ও পরিবেশ-স্বাধীন সক্রিয় বিপাকের অপরিহার্য পূর্বশর্ত।"
  }
];
