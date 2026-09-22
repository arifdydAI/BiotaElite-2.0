// scripts/data_major_groups_knowledge.cjs
// Authoritative biological sections and knowledge records for Major Animal Groups

const updates = {
  "group-fishes": {
    taxonId: "taxon-fishes",
    canonicalSlug: "fishes",
    exampleSpeciesIds: [
      "sp-tenualosa-ilisha",
      "sp-labeo-rohita",
      "sp-chiloscyllium-indicum",
      "sp-latimeria-chalumnae"
    ],
    sections: [
      {
        key: "classification",
        titleEn: "1. Classification & Evolutionary Grade Definition",
        titleBn: "১. শ্রেণীবিন্যাস ও বিবর্তনীয় গ্রেড সংজ্ঞা",
        order: 1,
        contentEn: "Pisces is a diverse paraphyletic grade of aquatic, gill-bearing craniate vertebrates lacking limbs with digits. Historically encompassing all non-tetrapod jawless, cartilaginous, and bony craniates, modern cladistic taxonomy treats fishes across distinct lineages: Agnatha (jawless cyclostomes), Chondrichthyes (cartilaginous elasmobranchs and holocephalans), and Osteichthyes (ray-finned Actinopterygii and lobe-finned Sarcopterygii from which tetrapods arose).",
        contentBn: "মাছসমূহ (Pisces) হলো একটি অত্যন্ত বৈচিত্র্যময় প্যারাফাইলেটিক গ্রেডভুক্ত জলজ ফুলকাযুক্ত ক্রেনিয়েট মেরুদণ্ডী প্রাণী যাদের কোনো আঙুলযুক্ত অঙ্গ নেই। আধুনিক ক্ল্যাডিস্টিক শ্রেণীবিন্যাসে মাছকে পৃথক প্রধান বংশধারায় বিভক্ত করা হয়: অ্যাগনাথা (চোয়ালবিহীন সাইক্লোস্টোম), কনড্রিকথিস (তরুণাস্থিময় হাঙর ও শাপলাপাতা মাছ) এবং অস্টিকথিস (কন্টকময় পাখনাযুক্ত অ্যাক্টিনোপ্টেরিগি ও মাংসল পাখনাযুক্ত সারকোপ্টেরিগি)।",
        references: ["ref-nelson-2016", "ref-kardong-2018"]
      },
      {
        key: "locomotion",
        titleEn: "2. Locomotion, Fin Dynamics & Hydrodynamic Propulsion",
        titleBn: "২. সন্তরণ, পাখনার গতিবিজ্ঞান ও জলগতিশীল চলন",
        order: 2,
        contentEn: "Locomotion is primarily accomplished through sequential waves of lateral contraction in segmented axial musculature (myomeres), transmitted to a flexible caudal fin for forward thrust. Median fins (dorsal, anal) provide yaw and roll stability, while paired pectoral and pelvic fins act as hydroplanes for pitch control, steering, and braking. Body morphology ranges from streamlined fusiform pursuit hunters to laterally compressed reef dwellers and dorsoventrally flattened benthic skates.",
        contentBn: "মাছের প্রধান সন্তরণ পরিচালিত হয় অক্ষীয় মায়োমের পেশির তরঙ্গের মাধ্যমে, যা পুচ্ছ পাখনার সাহায্যে সামনের দিকে ঘাত বা থ্রাস্ট তৈরি করে। অযুগ্ম পাখনা (পৃষ্ঠীয়, পায়ু) ঘূর্ণন ও ভারসাম্য বজায় রাখে, আর যুগ্ম বক্ষ ও শ্রোণী পাখনা দিক পরিবর্তন, ওঠানামা ও ব্রেকিংয়ে হাইড্রোফয়েল হিসেবে কাজ করে।",
        references: ["ref-hickman-2020"]
      },
      {
        key: "respiration",
        titleEn: "3. Branchial Gas Exchange & Counter-Current Flow",
        titleBn: "৩. ফুলকা দ্বারা গ্যাসীয় বিনিময় ও বিপরীতমুখী সংবহন পদ্ধতি",
        order: 3,
        contentEn: "Aquatic respiration operates via branchial arches supporting delicate secondary lamellae. Water enters through the mouth and flows across lamellae in opposite direction to intra-capillary blood flow. This counter-current oxygen exchange mechanism maintains a concentration gradient along the entire lamellar surface, extracting up to 80-85% of dissolved oxygen from water, supported by dual buccal-opercular pressure pumping.",
        contentBn: "ফুলকা আর্চ এবং সূক্ষ্ম সেকেন্ডারি ল্যামেলির মাধ্যমে শ্বাসকার্য সম্পন্ন হয়। ফুলকার কৈশিক জালিকার রক্ত প্রবাহের ঠিক বিপরীত দিকে জল প্রবাহিত হয়। এই বিপরীতমুখী সংবহন (কাউন্টার-কারেন্ট এক্সচেঞ্জ) পদ্ধতির ফলে জল থেকে প্রায় ৮০-৮৫% দ্রবীভূত অক্সিজেন রক্তে শোষিত হতে পারে।",
        references: ["ref-kardong-2018"]
      },
      {
        key: "osmoregulation",
        titleEn: "4. Osmoregulation & Excretory Dynamics",
        titleBn: "৪. অভিস্রবণ নিয়ন্ত্রণ ও রেচন কৌশল",
        order: 4,
        contentEn: "Freshwater fishes are hyperosmotic to their hypoosmotic environment; they face constant water influx and ion loss, resolved by producing large volumes of dilute urine via glomerular kidneys and actively pumping Na+ and Cl- ions across gill chloride cells. Marine teleosts are hypoosmotic, continuously losing water; they drink seawater, produce minimal concentrated urine, and actively pump excess monovalent ions out across specialized gill cells. Marine elasmobranchs retain urea and TMAO in tissues to maintain near-isosmotic equilibrium with seawater.",
        contentBn: "মিঠাপানির মাছ তাদের পরিবেশের তুলনায় হাইপারঅসমোটিক; ক্রমাগত জল প্রবেশের বিরুদ্ধে তারা বৃক্কের মাধ্যমে প্রচুর লঘু মূত্র ত্যাগ করে এবং ফুলকার ক্লোরাইড কোষ দিয়ে আয়ন শোষণ করে। সামুদ্রিক মাছ জল হারানোর হাত থেকে বাঁচতে সমুদ্রের জল পান করে ও ফুলকা দিয়ে অতিরিক্ত লবণ নিষ্কাশন করে। হাঙর ও রে মাছ রক্তে ইউরিয়া ও TMAO ধরে রেখে ভারসাম্য বজায় রাখে।",
        references: ["ref-hickman-2020"]
      },
      {
        key: "sensory",
        titleEn: "5. Sensory Innovations: Lateral Line & Electroreception",
        titleBn: "৫. সংবেদী বিশেষায়ন: পার্শ্বরেখা ও তড়িৎ-সংবেদন",
        order: 5,
        contentEn: "Fishes possess unique mechanoreceptive acoustico-lateralis systems. Subdermal lateral line canals containing hair-cell neuromasts detect subtle hydrodynamic pressure waves and displacement currents, coordinating schooling, collision avoidance, and prey orientation. Elasmobranchs further utilize ampullae of Lorenzini—mucus-filled jelly electroreceptor pits capable of sensing microvolt-level bioelectric fields generated by buried benthic prey.",
        contentBn: "মাছের পার্শ্বরেখা ব্যবস্থা সাবডার্মাল ক্যানাল ও নিউরোমাস্ট হেয়ার-সেলের সমন্বয়ে গঠিত, যা জলের সূক্ষ্ম চাপ তরঙ্গ ও কম্পন শনাক্ত করে শিকার ও দলের গতি সমন্বয় করে। হাঙর ও রে মাছে লরেঞ্জিনির অ্যাম্পুলা নামক জেলিযুক্ত তড়িৎ-সংবেদী অঙ্গ থাকে, যা বালির নিচে লুকিয়ে থাকা শিকারের ক্ষুদ্র জৈব-বৈদ্যুতিক সংকেত পর্যন্ত শনাক্ত করতে পারে।",
        references: ["ref-kardong-2018"]
      },
      {
        key: "buoyancy",
        titleEn: "6. Swim Bladder & Buoyancy Regulation",
        titleBn: "৬. পটকা (সুইম ব্লাডার) ও প্লবতা নিয়ন্ত্রণ",
        order: 6,
        contentEn: "Hydrostatic equilibrium in teleosts is maintained by the gas-filled swim bladder, derived embryonically as an outpocketing of the foregut. Physostomous fishes retain an open pneumatic duct connecting to the esophagus, gulping air at the surface. Advanced physoclistous teleosts lack a duct, regulating gas volume via the rete mirabile gas gland and resorption in the oval body.",
        contentBn: "টেলিওস্ট মাছে অগ্র পৌষ্টিকনালী থেকে সৃষ্ট গ্যাসপূর্ণ পটকা প্লবতা নিয়ন্ত্রণ করে। ফাইসোস্টোমাস মাছে পটকাটি খাদ্যনালীর সাথে নিউম্যাটিক নালী দ্বারা যুক্ত থাকে। উন্নত ফাইসোক্লিস্টাস মাছে এই নালী থাকে না; তারা রেটে মিরাবিল গ্যাস গ্রন্থির মাধ্যমে রক্ত থেকে সরাসরি পটকায় গ্যাস সরবরাহ ও শোষণ করে।",
        references: ["ref-nelson-2016"]
      },
      {
        key: "reproduction",
        titleEn: "7. Reproductive Diversity & Life History Strategies",
        titleBn: "৭. প্রজনন বৈচিত্র্য ও জীবন ইতিহাস কৌশল",
        order: 7,
        contentEn: "Remarkable reproductive strategies span broadcast spawning of millions of pelagic eggs (e.g. Clupeiformes), demersal adhesive nest-guarding (e.g. Cichliformes, Siluriformes), external mouth-brooding, ovoviviparity with intra-uterine egg development, and advanced placental viviparity in carcharhinid sharks with umbilical cord nourishment.",
        contentBn: "মাছের প্রজনন প্রক্রিয়ায় অসাধারণ বৈচিত্র্য বিদ্যমান: লাখ লাখ ডিম্বাণু মুক্ত জলে ভাসিয়ে দেওয়া (ইলিশ), বাসা বানিয়ে ডিম পাহারা দেওয়া (শিং, মাগুর, টেংরা), মুখের ভেতরে ডিম তা দেওয়া, এবং হাঙরে প্রকৃত অমরাযুক্ত জরায়ুজ প্রসব যেখানে প্লাসেন্টার মাধ্যমে ভ্রূণ পুষ্টি লাভ করে।",
        references: ["ref-nelson-2016"]
      },
      {
        key: "ecosystem_economic",
        titleEn: "8. Global Fisheries, Ecosystem Roles & Bangladesh Context",
        titleBn: "৮. বৈশ্বিক মৎস্যসম্পদ, বাস্তুতান্ত্রিক গুরুত্ব ও বাংলাদেশ প্রেক্ষাপট",
        order: 8,
        contentEn: "Fishes underpin planetary marine and freshwater trophic webs as apex predators, mesocarnivores, and primary planktivores. Economically, wild fisheries and aquaculture yield over 180 million tons globally. In Bangladesh, fishes provide approximately 60% of national animal protein consumption, with iconic anadromous species like the Hilsa (Tenualosa ilisha) contributing over 12% of total national fish production and sustaining half a million coastal fishers.",
        contentBn: "মাছ পৃথিবীর সমস্ত জলজ খাদ্যজালের শীর্ষ ও মধ্যবর্তী ভিত্তি। অর্থনৈতিকভাবে বাংলাদেশে জনগণের প্রাণীজ আমিষের প্রায় ৬০% সরবরাহ আসে মাছ থেকে। জাতীয় মাছ ইলিশ (Tenualosa ilisha) দেশের মোট মৎস্য উৎপাদনের ১২ শতাংশেরও বেশি অবদান রাখে এবং উপকূলীয় লক্ষ লক্ষ জেলের জীবিকার প্রধান মাধ্যম।",
        references: ["ref-rahman-2005", "ref-iucn-bd-2015"]
      }
    ]
  },

  "phylum-porifera": {
    taxonId: "taxon-porifera",
    canonicalSlug: "porifera",
    exampleSpeciesIds: ["sp-spongia-officinalis"],
    sections: [
      {
        key: "classification",
        titleEn: "1. Classification & Cellular Grade of Organization",
        titleBn: "১. শ্রেণীবিন্যাস ও কোষীয় মাত্রার শারীরিক গঠন",
        order: 1,
        contentEn: "Phylum Porifera (Grant, 1836) represents the most basal extant metazoan animal lineage. Sponges lack true embryological germ layers (endoderm, mesoderm, ectoderm), basal laminas, true tissues, and organs. Body construction is founded upon cellular differentiation and functional division of labor within an organized gelatinous extracellular matrix called the mesohyl.",
        contentBn: "পর্ব পরিফেরা (Grant, 1836) হলো বিদ্যমান বহুকোষী প্রাণীদের সবচেয়ে আদিম বংশধারা। এদের দেহে কোনো প্রকৃত ভ্রূণীয় স্তর (এক্টোডার্ম, মেসোডার্ম বা এন্ডোডার্ম), প্রকৃত কলা বা অঙ্গ গঠিত হয় না। দেহের সমস্ত কাজ মেসোহাইল নামক জেলির মতো ম্যাট্রিক্সে বিভিন্ন ধরনের বিশেষায়িত কোষের শ্রমবিভাজনের মাধ্যমে পরিচালিত হয়।",
        references: ["ref-world-porifera-2024", "ref-ruppert-2004"]
      },
      {
        key: "cellular_types",
        titleEn: "2. Cell Types: Pinacocytes, Choanocytes & Archaeocytes",
        titleBn: "২. কোষের ধরন: পিনাকোসাইট, কোয়ানোসাইট ও আর্কিওসাইট",
        order: 2,
        contentEn: "The sponge body contains specialized non-tissue cells: Pinacocytes form the protective external pinacoderm and line excurrent canals; Choanocytes (collar cells) line internal chambers, each possessing a central flagellum surrounded by a microvilli collar that generates water currents and captures micro-food; Porocytes form tubular contractible incurrent ostia; Archaeocytes (amoebocytes) are totipotent migratory amoeboid cells capable of differentiating into sclerocytes, spongocytes, or gametes.",
        contentBn: "স্পঞ্জের দেহে বিশেষ ধরনের কোষ থাকে: পিনাকোসাইট বহিরাবরণ তৈরি করে; কোয়ানোসাইট হলো ফ্ল্যাজেলাযুক্ত কলার কোষ যা জলের প্রবাহ সৃষ্টি করে খাদ্য কণা ফাঁদে ফেলে; পোরোসাইট ছিদ্রযুক্ত নালী তৈরি করে যার ভেতর দিয়ে জল প্রবেশ করে; আর্কিওসাইট হলো টটিপোটেন্ট অ্যামিবয়েড কোষ যা প্রয়োজনে যে কোনো কোষে রূপান্তরিত হতে পারে।",
        references: ["ref-hickman-2020"]
      },
      {
        key: "canal_system",
        titleEn: "3. The Water Canal System (Aquiferous System)",
        titleBn: "৩. জল সংবহন বা নালী তন্ত্র (অ্যাকুইফেরাস সিস্টেম)",
        order: 3,
        contentEn: "The canal system is the physiological hallmark of Porifera, serving respiration, feeding, excretion, and reproduction. Water enters microscopic incurrent dermal pores (ostia), passes through internal canals into flagellated chambers lined by choanocytes, collects in a large central cavity (spongocoel or excurrent canals), and exits through one or more large excurrent apertures called oscula.",
        contentBn: "নালী তন্ত্র পরিফেরা পর্বের প্রধান শারীরবৃত্তীয় বৈশিষ্ট্য, যা এদের শ্বাসকার্য, খাদ্যগ্রহণ, রেচন এবং প্রজনন পরিচালনা করে। বাইরের জল অসংখ্য সূক্ষ্ম ছিদ্র (অস্টিয়া) দিয়ে দেহে প্রবেশ করে, কোয়ানোসাইটযুক্ত চেম্বারের ভেতর দিয়ে পরিবাহিত হয় এবং কেন্দ্রীয় গহ্বর স্পঞ্জোসিল হয়ে একক বা একাধিক বৃহৎ নির্গমন ছিদ্র অস্কুলাম (Osculum) দিয়ে বাইরে নির্গত হয়।",
        references: ["ref-ruppert-2004"]
      },
      {
        key: "canal_types",
        titleEn: "4. Types of Canal Systems: Asconoid, Syconoid & Leuconoid",
        titleBn: "৪. নালী তন্ত্রের প্রকারভেদ: অ্যাসকনয়েড, সাইকনয়েড ও লিউকনয়েড",
        order: 4,
        contentEn: "Three progressive architectural grades exist: 1. Asconoid (simplest, tubular, choanocytes line the spongocoel directly, e.g. Leucosolenia); 2. Syconoid (body wall folded into radial canals lined with choanocytes, spongocoel lined by pinacocytes, e.g. Sycon); 3. Leuconoid (most complex and common, highly branched flagellated chambers embedded within mesohyl, maximizing filtration surface, e.g. Spongia).",
        contentBn: "গঠনগত জটিলতা অনুসারে নালী তন্ত্র তিন প্রকার: ১. অ্যাসকনয়েড (সবচেয়ে সরল, স্পঞ্জোসিল সরাসরি কোয়ানোসাইট দ্বারা আবৃত থাকে); ২. সাইকনয়েড (দেহপ্রাচীর ভাঁজ হয়ে অরীয় নালী তৈরি করে); ৩. লিউকনয়েড (সবচেয়ে উন্নত ও জটিল, মেসোহাইলের ভেতর অসংখ্য শাখা-প্রশাখাযুক্ত ক্ষুদ্র কোয়ানোসাইট চেম্বার থাকে, যেমন স্পঞ্জিয়া)।",
        references: ["ref-ruppert-2004"]
      },
      {
        key: "skeleton",
        titleEn: "5. Skeletal Framework: Spicules & Spongin Fibers",
        titleBn: "৫. কঙ্কাল কাঠামো: স্পিকুল ও স্পঞ্জিন তন্তু",
        order: 5,
        contentEn: "Rigidity and shape are maintained by mineral and organic skeletal elements secreted in the mesohyl. Sclerocytes secrete inorganic spicules of either calcium carbonate (calcite, in class Calcarea) or hydrated silicon dioxide (silica, in Hexactinellida and Demospongiae). In many demosponges, structural support is provided by an organic meshwork of spongin—a tough sulfur-rich collagenous scleroprotein.",
        contentBn: "মেসোহাইলের ভেতর অবস্থিত কঙ্কাল স্পঞ্জের কাঠামো রক্ষা করে। ক্লেরোসাইট কোষ ক্যালসিয়াম কার্বনেট বা সিলিকার তৈরি সূক্ষ্ম কাঁটা বা স্পিকুল (Spicule) তৈরি করে। অধিকাংশ ডেমোস্পঞ্জে নরম ও স্থিতিস্থাপক প্রোটিন তন্তু স্পঞ্জিন (Spongin) জালকের মতো বিন্যস্ত থাকে যা বাণিজ্যিক স্পঞ্জ হিসেবে ব্যবহৃত হয়।",
        references: ["ref-world-porifera-2024"]
      },
      {
        key: "feeding_digestion",
        titleEn: "6. Feeding, Digestion, Respiration & Excretion",
        titleBn: "৬. পুষ্টি, পাচন, শ্বাসকার্য ও রেচন ক্রিয়া",
        order: 6,
        contentEn: "Sponges are non-selective sessile filter feeders. Choanocyte flagellar beats draw thousands of liters of water daily. Bacteria and organic particles under 1 micron are caught on collar microvilli and engulfed by phagocytosis, then transferred to archaeocytes for intracellular digestion. Gas exchange (oxygen uptake and carbon dioxide release) and nitrogenous excretion (predominantly ammonia) occur by simple diffusion across cell surfaces directly into the circulating water stream.",
        contentBn: "স্পঞ্জ নিশ্চল ফিল্টার-ফিডার। কোয়ানোসাইটের ফ্ল্যাজেলার আন্দোলনের মাধ্যমে প্রতিদিন বিপুল পরিমাণ জল প্রবাহিত হয়। কলারের ফাঁদে আটকানো ব্যাকটেরিয়া ও খাদ্যকণা ফ্যাগোসাইটোসিস প্রক্রিয়ায় কোষে গৃহীত হয় এবং আর্কিওসাইটের মাধ্যমে অন্তঃকোষীয় পাচন সম্পন্ন হয়। গ্যাসীয় বিনিময় ও অ্যামোনিয়া রেচন সরাসরি ব্যাপন প্রক্রিয়ায় সম্পন্ন হয়।",
        references: ["ref-hickman-2020"]
      },
      {
        key: "reproduction",
        titleEn: "7. Reproduction, Regeneration & Larval Forms",
        titleBn: "৭. প্রজনন, পুনরুৎপত্তি ও লার্ভা পর্যায়",
        order: 7,
        contentEn: "Asexual reproduction occurs via external budding, fragmentation, or formation of internal drought/cold-resistant gemmules in freshwater sponges. Sexual reproduction is typically monoecious with cross-fertilization: sperm released into water enter other sponges and fertilize eggs in the mesohyl, developing into free-swimming ciliated larvae (parenchymella or amphiblastula). Sponges exhibit extraordinary somatic regeneration—separated cells can re-aggregate and reform complete functional sponges.",
        contentBn: "অযৌন প্রজনন মুকুলোদগম, খণ্ডায়ন অথবা প্রতিকূলতায় টিকে থাকার জন্য জেমুল তৈরির মাধ্যমে ঘটে। যৌন প্রজননে মুক্ত সাঁতারু সিলিয়াযুক্ত প্যারেনকাইমুলা বা অ্যাম্ফিব্লাস্টুলা লার্ভা তৈরি হয়। এছাড়া এদের অসাধারণ পুনরুৎপত্তি ক্ষমতা রয়েছে—স্পঞ্জের দেহ ভেঙে পৃথক কোষে বিচ্ছিন্ন করলেও তা পুনরায় একত্রিত হয়ে নতুন স্পঞ্জে রূপান্তরিত হতে পারে।",
        references: ["ref-ruppert-2004"]
      },
      {
        key: "classes_economic",
        titleEn: "8. Major Classes, Examples & Economic/Ecological Roles",
        titleBn: "৮. প্রধান শ্রেণীসমূহ, উদাহরণ ও অর্থনৈতিক-বাস্তুতাত্ত্বিক গুরুত্ব",
        order: 8,
        contentEn: "Divided into four modern classes: Calcarea (calcareous spicules, e.g. Sycon), Hexactinellida (six-rayed glass sponges, e.g. Euplectella / Venus' flower basket), Demospongiae (siliceous spicules and/or spongin fibers, over 80% of species, e.g. Spongia officinalis, Cliona boring sponges), and Homoscleromorpha. Sponges stabilize coral reefs, filter shelf waters, and produce novel bioactive compounds (antibiotics, antiviral, and antitumor macrolides). In Bangladesh, demosponges inhabit rocky reefs around Saint Martin's Island.",
        contentBn: "পরিফেরা পর্বের চারটি প্রধান শ্রেণী: ক্যালকেরিয়া (চুনযুক্ত স্পিকুল), হেক্সাক্টিনেলিডা (কাচের মতো ছয়-রশ্মিযুক্ত স্পিকুল, যেমন ইউপ্লেকটেলা), ডেমোস্পঞ্জিয়া (স্পঞ্জিন তন্তু ও সিলিসিয়াস স্পিকুল, যেমন বাণিজ্যিক স্পঞ্জ Spongia officinalis), এবং হোমোস্কেলেরোমর্ফা। স্পঞ্জ সমুদ্রের জল পরিশোধনে ও ওষুধ তৈরিতে অত্যন্ত গুরুত্বপূর্ণ।",
        references: ["ref-world-porifera-2024"]
      }
    ]
  },

  "phylum-cnidaria": {
    taxonId: "taxon-cnidaria",
    canonicalSlug: "cnidaria",
    exampleSpeciesIds: ["sp-aurelia-aurita"],
    sections: [
      {
        key: "classification",
        titleEn: "1. Classification & Diploblastic Tissue-Grade Organization",
        titleBn: "১. শ্রেণীবিন্যাস ও দ্বিস্তরী কলা-মাত্রার সংগঠন",
        order: 1,
        contentEn: "Phylum Cnidaria (Hatschek, 1888) comprises radially or biradially symmetrical metazoans exhibiting true tissue-grade construction. Cnidarians are primary diploblasts: the body wall develops from two embryological germ layers—outer ectoderm (forming epidermis) and inner endoderm (forming gastrodermis)—separated by an extracellular jelly matrix termed mesoglea.",
        contentBn: "পর্ব নিডারিয়া (Hatschek, 1888) হলো অরীয় বা দ্বি-অরীয় প্রতিসম প্রাণী যা কলা-মাত্রার শারীরিক সংগঠন প্রদর্শন করে। এরা প্রকৃত দ্বিস্তরী (Diploblastic) প্রাণী: দেহপ্রাচীর দুটি ভ্রূণীয় স্তর—বাইরের একটোডার্ম (এপিডার্মিস) এবং ভেতরের এন্ডোডার্ম (গ্যাস্ট্রোডার্মিস) নিয়ে গঠিত, যাদের মাঝে জেলির মতো মেসোগ্লিয়া স্তর থাকে।",
        references: ["ref-ruppert-2004", "ref-hickman-2020"]
      },
      {
        key: "cnidocytes",
        titleEn: "2. The Cnidocyte & Nematocyst Stinging Apparatus",
        titleBn: "২. নিডোসাইট ও নেমাটোসিস্ট দংশন কাঠামো",
        order: 2,
        contentEn: "The defining synapomorphy of Cnidaria is the cnidocyte—a specialized stinging cell housing an explosive organelle called the nematocyst. When sensory triggers (cnidocil) are mechanically or chemically stimulated, hydrostatic pressure exceeding 150 atmospheres causes rapid eversion of a coiled tubule in microseconds. Penetrant nematocysts inject neurotoxins and proteolytic enzymes into prey, while volvent types entangle setae and glutinant types secrete adhesive mucus.",
        contentBn: "নিডারিয়া পর্বের অন্যতম প্রধান বৈশিষ্ট্য হলো নিডোসাইট কোষ যার ভেতরে পেঁচানো নালীযুক্ত নেমাটোসিস্ট থলি থাকে। এর সংবেদী রোম নিডোসিল স্পর্শ করলে মাত্র কয়েক মাইক্রোসেকেন্ডে উচ্চ চাপে নালীটি উল্টে গিয়ে শিকারের দেহে প্রবেশ করে এবং নিউরোটক্সিন বিষাক্ত হিপনোটক্সিন প্রবেশ করিয়ে অবশ করে দেয়।",
        references: ["ref-ruppert-2004"]
      },
      {
        key: "dimorphism",
        titleEn: "3. Dimorphism: Polyp and Medusa Body Plans",
        titleBn: "৩. দ্বিরূপতা: পলিপ ও মেডুসা শারীরিক রূপ",
        order: 3,
        contentEn: "Cnidarians exhibit two structural archetypes: 1. Polyp: sessile, tubular, attached to substrate by a basal aboral disc, with mouth and tentacles oriented upward (specialized for feeding and asexual budding); 2. Medusa: motile, umbrella- or bell-shaped, pelagic, with mouth and tentacles directed downward on a central manubrium, enriched with thick buoyant mesoglea (specialized for active swimming and sexual reproduction).",
        contentBn: "নিডারিয়ানদের দেহে দুটি মৌলিক রূপ দেখা যায়: ১. পলিপ: নলাকার ও নিশ্চল রূপ যা নিম্নপ্রান্ত দিয়ে কোনো অবলম্বনে আটকে থাকে এবং এর মুখ ও কর্ষিকা ওপরের দিকে থাকে (খাদ্যগ্রহণ ও অযৌন প্রজননের জন্য বিশেষায়িত); ২. মেডুসা: ছাতার মতো ঘণ্টা আকৃতির মুক্ত সাঁতারু রূপ যার মুখ ও কর্ষিকা নিচের দিকে ঝুলে থাকে (যৌন প্রজনন ও বিস্তারের জন্য বিশেষায়িত)।",
        references: ["ref-hickman-2020"]
      },
      {
        key: "digestion_nervous",
        titleEn: "4. Gastrovascular Cavity, Digestion & Diffuse Nerve Net",
        titleBn: "৪. গ্যাস্ট্রোভাস্কুলার গহ্বর, পাচন ও বিস্তৃত স্নায়ুজালক",
        order: 4,
        contentEn: "The internal space is a single opening gastrovascular cavity (coelenteron) functioning in both extracellular digestion and internal fluid circulation. Gland cells secrete enzymes to break down prey extracellularly, followed by phagocytosis into gastrodermal nutritive-muscular cells for intracellular digestion. The nervous system lacks a centralized brain, consisting instead of a decentralized subepithelial nerve net of non-polarized protoneurons with bidirectional synaptic transmission.",
        contentBn: "এদের একমাত্র অভ্যন্তরীণ গহ্বরটি হলো সিলেন্টেরন বা গ্যাস্ট্রোভাস্কুলার ক্যাভিটি যা একাধারে পরিপাক ও পরিবহনের কাজ করে। বহিঃকোষীয় ও অন্তঃকোষীয় উভয় প্রকার পরিপাক ঘটে। নিডারিয়াদের কোনো মস্তিষ্ক নেই; বরং সারা দেহে বিস্তৃত দ্বিমুখী প্রোটোনিউরন স্নায়ুজালক (Nerve Net) পরিবেশের সংবেদন গ্রহণ ও পেশি সংকোচন নিয়ন্ত্রণ করে।",
        references: ["ref-ruppert-2004"]
      },
      {
        key: "metagenesis",
        titleEn: "5. Metagenesis (Alternation of Generations) & Life Cycle",
        titleBn: "৫. মেটাজেনেসিস (জনুক্রম) ও জীবন চক্র",
        order: 5,
        contentEn: "Many hydrozoans and scyphozoans exhibit metagenesis—the regular alternation between a benthic asexual polyp phase and a pelagic sexual medusa phase. Medusae release gametes into seawater, where fertilization yields a ciliated free-swimming planula larva. The planula settles on the substrate, transforms into a polyp (scyphistoma), and subsequently undergoes transverse budding (strobilation) to produce juvenile medusae (ephyrae).",
        contentBn: "অধিকাংশ নিডারিয়ানে মেটাজেনেসিস বা জনুক্রম দেখা যায়, যেখানে অযৌন পলিপ দশা এবং যৌন মেডুসা দশা পর্যায়ক্রমে চক্রাকারে আবর্তিত হয়। মেডুসার যৌন মিলনে সৃষ্ট সিলিয়াযুক্ত প্লানুলা লার্ভা তলে গিয়ে পলিপে রূপ নেয় এবং স্ট্রোবাইলেশন প্রক্রিয়ার মাধ্যমে খণ্ডিত হয়ে তরুণ জেলিফিশ বা ইফাইরা (Ephyra) তৈরি করে।",
        references: ["ref-hickman-2020"]
      },
      {
        key: "classes_reef",
        titleEn: "6. Major Classes, Coral Reef Ecology & Representative Taxa",
        titleBn: "৬. প্রধান শ্রেণীসমূহ, প্রবাল প্রাচীর বাস্তুতন্ত্র ও প্রতিনিধি ট্যাক্সন",
        order: 6,
        contentEn: "Four principal classes: Hydrozoa (Hydra, Obelia, Physalia Portuguese man-of-war); Scyphozoa (true jellies with dominant medusae, e.g. Aurelia aurita); Cubozoa (box jellyfish with lethal venomous nematocysts); Anthozoa (corals and sea anemones lacking medusa stage completely, e.g. stony Scleractinia). Scleractinian corals secrete calcium carbonate exocones in symbiosis with photosynthetic zooxanthellae dinoflagellates, forming biogenic coral reefs that host over 25% of all marine biodiversity. In Bangladesh, Saint Martin's Island harbors vulnerable hermatypic coral reefs.",
        contentBn: "চারটি প্রধান শ্রেণী: হাইড্রোজোয়া (হাইড্রা, ওবেলিয়া), সাইফোজোয়া (প্রকৃত জেলিফিশ যেমন অরেলিয়া অরিটা), কিউবোজোয়া (বাক্স জেলিফিশ), এবং অ্যান্থোজোয়া (প্রবাল ও সাগর কুসুম যাদের কোনো মেডুসা দশা নেই)। প্রবাল প্রাচীর সাগরের ২৫ শতাংশের বেশি প্রজাতির আশ্রয়স্থল। বাংলাদেশের সেন্ট মার্টিন দ্বীপে প্রবাল প্রাচীর বিদ্যমান।",
        references: ["ref-worms-2024"]
      }
    ]
  },

  "phylum-mollusca": {
    taxonId: "taxon-mollusca",
    canonicalSlug: "mollusca",
    exampleSpeciesIds: ["sp-octopus-vulgaris"],
    sections: [
      {
        key: "classification",
        titleEn: "1. Classification & The Fundamental Molluscan Body Plan",
        titleBn: "১. শ্রেণীবিন্যাস ও মলাস্কার মৌলিক শারীরিক পরিকল্পনা",
        order: 1,
        contentEn: "Phylum Mollusca (Linnaeus, 1758) is the second-largest animal phylum on Earth, comprising soft-bodied, unsegmented, coelomate lophotrochozoans. The generalized body is triploblastic and bilaterally symmetrical, partitioned into three functional regions: 1. Muscular head-foot (sensory and locomotory functions); 2. Visceral mass (housing digestive, circulatory, excretory, and reproductive organs); 3. Mantle (pallium)—a specialized dorsal epithelial fold that encloses the mantle cavity and secretes the shell.",
        contentBn: "পর্ব মলাস্কা (Linnaeus, 1758) হলো প্রাণিজগতের দ্বিতীয় বৃহত্তম পর্ব। এরা নরমদেহী, অখণ্ডায়িত এবং সিলোমেট প্রাণী। দেহ তিনটি প্রধান অংশে বিভক্ত: ১. পেশিবহুল মস্তক-পদ (চলন ও সংবেদী অঙ্গ); ২. ভিসেরাল মাস বা আন্তরযন্ত্রীয় স্তূপ (পরিপাক, সংবহন ও জনন অঙ্গ ধারণকারী অংশ); ৩. ম্যান্টল—একটি মাংসল পর্দা যা ভিসেরাল অঙ্গ ঢেকে রাখে এবং শক্ত খোলক ক্ষরণ করে।",
        references: ["ref-ruppert-2004", "ref-hickman-2020"]
      },
      {
        key: "mantle_shell",
        titleEn: "2. The Mantle & Shell Architecture",
        titleBn: "২. ম্যান্টল ও খোলকের গঠন কৌশল",
        order: 2,
        contentEn: "The mantle cavity is a critical functional space containing the gills (ctenidia), anus, osphradia, and nephridiopores. The protective calcareous shell is secreted in three layers by mantle marginal cells: outer organic conchiolin periostracum (protecting against acidic dissolution), middle prismatic layer of calcium carbonate (calcite or aragonite crystals), and inner lustrous nacreous layer ('mother of pearl') composed of alternating thin aragonite platelets.",
        contentBn: "ম্যান্টল পর্দা খোলক নিঃসরণ করে যা তিনটি স্তরে গঠিত: ১. বহিস্থ পেরিওস্ট্রাকাম (কঙ্কিওলিন প্রোটিনের পাতলা স্তর যা অ্যাসিড থেকে রক্ষা করে); ২. মধ্যবর্তী প্রিজম্যাটিক স্তর (ক্যালসিয়াম কার্বনেট স্ফটিক); ৩. অভ্যন্তরীণ নেকার বা মুক্তা স্তর (চকচকে ক্যালসিয়াম কার্বনেট স্তর যা মুক্তা সৃষ্টিতে সাহায্য করে)।",
        references: ["ref-hickman-2020"]
      },
      {
        key: "radula",
        titleEn: "3. The Radula & Feeding Diversity",
        titleBn: "৩. র্যাডুলা ও বহুমুখী খাদ্যাভ্যাস",
        order: 3,
        contentEn: "Except for bivalves, virtually all molluscs possess a radula—a chitinous ribbon studded with transverse rows of backward-curving teeth supported by cartilaginous odontophore cushions. Driven by complex protractor and retractor muscles, it acts as a rasp to scrape algae from rocks, bore holes into prey shells, or inject venom via hollow dart-like radular teeth in cone snails (Conus). Bivalves have lost the radula, converting to ciliated filter feeding.",
        contentBn: "ঝিনুক ব্যতীত সমস্ত মলাস্কায় র্যাডুলা নামক একটি বিশেষায়িত কাইটিনযুক্ত করাতের মতো দাঁতযুক্ত জিহ্বা থাকে। র্যাডুলার সাহায্যে শামুক শৈবাল চাঁচতে পারে, শিকারের খোলক ফুটো করতে পারে কিংবা বিষাক্ত বাণ নিক্ষেপ করতে পারে। ঝিনুক ফিল্টার ফিডার হওয়ায় তাদের র্যাডুলা বিলুপ্ত হয়েছে।",
        references: ["ref-ruppert-2004"]
      },
      {
        key: "respiration_circulation",
        titleEn: "4. Respiration, Circulation & Excretion (Organs of Bojanus)",
        titleBn: "৪. শ্বাসকার্য, রক্ত সংবহন ও বোজানাসের অঙ্গ",
        order: 4,
        contentEn: "Aquatic molluscs respire via bipectinate feather-like gills (ctenidia) situated in the mantle cavity; terrestrial pulmonate snails use a highly vascularized mantle roof as a lung. Circulation is open in most taxa, where hemolymph with copper-based hemocyanin enters hemocoelic sinus spaces. Cephalopods (octopuses, squids) evolved a high-pressure closed circulatory system powered by one systemic and two branchial hearts. Excretion is carried out by paired metanephridia (organs of Bojanus) filtering coelomic pericardial fluid.",
        contentBn: "জলজ মলাস্কা ম্যান্টল গহ্বরে পালকের মতো টেনিডিয়া বা ফুলকার সাহায্যে শ্বাস নেয়; স্থলচর শামুকে ম্যান্টল ফুসফুসের মতো কাজ করে। সংবহন উন্মুক্ত প্রকৃতির এবং রক্তে তামাঘটিত নীল হিমোসায়ানিন রঞ্জক থাকে; তবে অক্টোপাস ও স্কুইডে রক্তনালীযুক্ত সম্পূর্ণ রুদ্ধ সংবহন ব্যবস্থা ও অতিরিক্ত ফুলকা হৃদপিণ্ড থাকে। রেচনের জন্য বৃক্কসদৃশ বোজানাসের অঙ্গ (Organs of Bojanus) কাজ করে।",
        references: ["ref-kardong-2018"]
      },
      {
        key: "nervous_cephalopod",
        titleEn: "5. Nervous System & Cephalopod Encephalization",
        titleBn: "৫. স্নায়ুতন্ত্র ও সেফালোপডের মস্তিষ্ক বিকাশ",
        order: 5,
        contentEn: "Bivalves and gastropods possess basic paired ganglia (cerebral, pedal, pleural, visceral) linked by nerve cords. Cephalopods have undergone extreme cephalization: fused ganglia form a complex lobed brain protected by a cartilaginous cranium, capable of advanced memory, operant conditioning, and problem-solving. Cephalopod camera-type eyes possess a cornea, lens, iris, and retina, representing a textbook triumph of convergent evolution with vertebrate eyes.",
        contentBn: "শামুক ও ঝিনুকে কয়েকটি গ্যাংগ্লিয়া থাকলেও সেফালোপড (যেমন অক্টোপাস)-এ অসাধারণ বুদ্ধিমত্তা ও জটিল মস্তিষ্ক বিকশিত হয়েছে। এদের চোখ মেরুদণ্ডী প্রাণীদের চোখের মতোই উন্নত লেন্স, কর্নিয়া ও রেটিনা ধারণ করে, যা কনভারজেন্ট বিবর্তনের অন্যতম সেরা উদাহরণ।",
        references: ["ref-ruppert-2004"]
      },
      {
        key: "classes_economic",
        titleEn: "6. Major Classes, Examples & Commercial/Ecological Roles",
        titleBn: "৬. প্রধান শ্রেণীসমূহ, উদাহরণ ও অর্থনৈতিক-বাস্তুতাত্ত্বিক গুরুত্ব",
        order: 6,
        contentEn: "Seven extant classes: 1. Gastropoda (snails, slugs, nudibranchs); 2. Bivalvia (clams, oysters, mussels); 3. Cephalopoda (octopuses, squids, nautiluses, cuttlefish); 4. Polyplacophora (chitons with 8 shell plates); 5. Scaphopoda (tusk shells); 6. Monoplacophora; 7. Aplacophora. Molluscs support multi-billion dollar global shellfish aquaculture, produce natural pearls, and clean coastal waters. In Bangladesh, green mussels, oysters, and mud snails inhabit the Sundarbans mangroves and Bay of Bengal.",
        contentBn: "প্রধান শ্রেণীসমূহ: গ্যাস্ট্রোপোডা (শামুক), বাইভালভিয়া (ঝিনুক), সেফালোপোডা (অক্টোপাস, স্কুইড), এবং পলিপ্ল্যাকোফোরা (কাইটোন)। মলাস্কা সামুদ্রিক বাস্তুতন্ত্রের ফিল্টার হিসেবে কাজ করে এবং মুক্তা ও খাদ্য হিসেবে বিশ্ব অর্থনীতিতে বিলিয়ন ডলার অবদান রাখে। বাংলাদেশের সুন্দরবন ও বঙ্গোপসাগরে ঝিনুক ও অক্টোপাস প্রচুর পরিমাণে পাওয়া যায়।",
        references: ["ref-worms-2024"]
      }
    ]
  },

  "phylum-arthropoda-marine": {
    taxonId: "taxon-arthropoda",
    canonicalSlug: "arthropoda",
    exampleSpeciesIds: ["sp-scylla-serrata"],
    sections: [
      {
        key: "classification",
        titleEn: "1. Classification & Evolutionary Preponderance",
        titleBn: "১. শ্রেণীবিন্যাস ও বিবর্তনীয় আধিপত্য",
        order: 1,
        contentEn: "Phylum Arthropoda (von Siebold, 1848) encompasses over 80% of all described animal species on Earth. Arthropods are bilaterally symmetrical, triploblastic, coelomate ecdysozoans characterized by metameric body segmentation with functional fusion (tagmatization), a hardened chitinous cuticle exoskeleton, and paired jointed appendages.",
        contentBn: "পর্ব আর্থ্রোপোডা (von Siebold, 1848) হলো পৃথিবীর সমস্ত প্রাণী প্রজাতির ৮০ শতাংশেরও বেশি ধারণকারী বৃহত্তম পর্ব। এরা দ্বিপার্শ্বীয় প্রতিসম, কাইটিনযুক্ত শক্ত বহিঃকঙ্কালধারী এবং সন্ধিযুক্ত উপাঙ্গবিশিষ্ট একডাইসোজোয়ান সিলোমেট প্রাণী।",
        references: ["ref-ruppert-2004", "ref-hickman-2020"]
      },
      {
        key: "exoskeleton_ecdysis",
        titleEn: "2. Chitinous Exoskeleton & Ecdysis (Moulting)",
        titleBn: "২. কাইটিনাস বহিঃকঙ্কাল ও একডাইসিস (খোলস মোচন)",
        order: 2,
        contentEn: "The rigid cuticle consists of an outer waxy epicuticle preventing dehydration and an inner procuticle of cross-linked chitin and sclerotized proteins (further impregnated with calcium carbonate in crustaceans). Because the rigid exoskeleton constrains somatic growth, arthropods must periodically shed and replace it through ecdysis (moulting), governed hormonally by ecdysone and juvenile hormone.",
        contentBn: "আর্থ্রোপোডার বহিঃকঙ্কাল কাইটিন এবং শক্ত প্রোটিন দ্বারা গঠিত, যা জল ধরে রাখতে ও পেশির সংযোগে সহায়তা করে। যেহেতু শক্ত খোলসের ভেতরে দেহের বৃদ্ধি অসম্ভব, তাই এরা একডাইসোন হরমোনের প্রভাবে পর্যায়ক্রমে খোলস মোচন বা একডাইসিস (Moulting) সম্পন্ন করে।",
        references: ["ref-hickman-2020"]
      },
      {
        key: "appendages_tagmata",
        titleEn: "3. Tagmatization & Functional Jointed Appendages",
        titleBn: "৩. ট্যাগমাটাইজেশন ও সন্ধিযুক্ত উপাঙ্গের বিশেষায়ন",
        order: 3,
        contentEn: "Segments are grouped into functional tagmata: head, thorax, and abdomen in Hexapoda; cephalothorax and abdomen in Chelicerata and Crustacea. Appendages are primitively biramous (branched into endopod and exopod, seen in trilobites and crustaceans) or secondarily uniramous (unbranched, in insects and myriapods), specialized for walking, swimming, sensory reception (antennae), food handling (mandibles, chelae), or copulation.",
        contentBn: "এদের দেহ খণ্ডগুলো একত্রিত হয়ে বিশেষ কার্যসম্পাদনের জন্য ট্যাগমাটা গঠন করে (যেমন: মস্তক, বক্ষ ও উদর; অথবা শিরোবক্ষ ও উদর)। এদের প্রতিটি খণ্ডে সন্ধিযুক্ত উপাঙ্গ থাকে যা হাঁটা, সাঁতার কাটা, শিকার ধরা (দাঁড়া বা কেলা), স্পর্শ ও ঘ্রাণ গ্রহণের জন্য বিশেষায়িত।",
        references: ["ref-ruppert-2004"]
      },
      {
        key: "respiration_circulation",
        titleEn: "4. Respiration, Open Circulation & Excretion",
        titleBn: "৪. শ্বাসতন্ত্র, উন্মুক্ত সংবহন ও রেচন ব্যবস্থা",
        order: 4,
        contentEn: "Gas exchange is achieved via diverse organs: branchial gills in aquatic crustaceans; tracheal tubules opening through spiracles in insects; book gills in horseshoe crabs; and book lungs in arachnids. Circulation is open: a dorsal tubular heart with ostia pumps hemolymph through a hemocoel. Excretion utilizes Malpighian tubules in terrestrial taxa (conserving water by excreting insoluble uric acid) or antennal/green glands in crustaceans (excreting ammonia).",
        contentBn: "শ্বাসকার্য বিভিন্ন উপায়ে ঘটে: জলজ ক্রাস্টাশিয়ানদের ফুলকা, পতঙ্গদের ট্র্যাকিয়াল নালী ও স্পাইরাকল, এবং মাকড়সার বুক-লাং। সংবহন উন্মুক্ত প্রকৃতির; পৃষ্ঠীয় নলাকার হৃদপিণ্ড রক্তরস বা হিমোলিম্ফকে হিমোসিলে ছড়িয়ে দেয়। রেচনের জন্য পতঙ্গে ম্যালপিঘিয়ান নালিকা (ইউরিক অ্যাসিড নির্গমন) এবং কাঁকড়ায় সবুজ গ্রন্থি (গ্রিন গ্ল্যান্ড) কাজ করে।",
        references: ["ref-hickman-2020"]
      },
      {
        key: "subphyla_economic",
        titleEn: "5. Major Subphyla, Examples & Economic/Ecological Importance",
        titleBn: "৫. প্রধান উপপর্বসমূহ, উদাহরণ ও অর্থনৈতিক গুরুত্ব",
        order: 5,
        contentEn: "Arthropoda comprises four extant subphyla: 1. Crustacea (crabs, lobsters, shrimp, barnacles, copepods); 2. Hexapoda (insects—dominant terrestrial pollinators and herbivores); 3. Chelicerata (spiders, scorpions, horseshoe crabs, ticks); 4. Myriapoda (centipedes, millipedes). Arthropods provide global pollination for 75% of flowering plants, drive marine benthic decomposition, and sustain coastal seafood industries. In Bangladesh, the Giant Mud Crab (Scylla serrata) and Tiger Prawn (Penaeus monodon) are premier export commodities.",
        contentBn: "চারটি জীবিত উপপর্ব: ক্রাস্টাশিয়া (চিংড়ি, কাঁকড়া), হেক্সাপোডা (পতঙ্গ বা ইনসেক্টা), চেলিসেরাটা (মাকড়সা, বিচ্ছু), এবং মিরিয়াপোডা (কেন্নো, ক্যানকোলা)। পরাগায়ন ও সামুদ্রিক খাদ্যজালে এদের ভূমিকা অপরিসীম। বাংলাদেশে সুন্দরবনের শিলা কাঁকড়া (Scylla serrata) এবং বাগদা চিংড়ি (Penaeus monodon) শীর্ষ রপ্তানি পণ্য।",
        references: ["ref-worms-2024"]
      }
    ]
  },

  "phylum-echinodermata": {
    taxonId: "taxon-echinodermata",
    canonicalSlug: "echinodermata",
    exampleSpeciesIds: ["sp-acanthaster-planci"],
    sections: [
      {
        key: "classification",
        titleEn: "1. Classification & Deuterostome Affinity",
        titleBn: "১. শ্রেণীবিন্যাস ও ডিউটারোস্টোম বিবর্তনীয় সম্পর্ক",
        order: 1,
        contentEn: "Phylum Echinodermata (Bruguière, 1791) consists entirely of marine, coelomate animals belonging to the Deuterostomia clade. Echinoderms share with Chordata key embryological traits: radial indeterminate cleavage, blastopore developing into the anus (enterocoely), and a calcified mesodermal endoskeleton, proving they are phylogenetically closer to vertebrates than any other major invertebrate phylum.",
        contentBn: "পর্ব একাইনোডার্মাটা (Bruguière, 1791) হলো সম্পূর্ণ সামুদ্রিক সিলোমেট প্রাণী যা ডিউটারোস্টোমিয়া ক্ল্যাডের অন্তর্ভুক্ত। ভ্রূণীয় বিকাশে ব্লাস্টোপোর থেকে পায়ু সৃষ্টি ও মেসোডার্মাল কঙ্কালের কারণে বিবর্তনীয় ধারায় এরা কর্ডাটা বা মেরুদণ্ডী প্রাণীদের সবচেয়ে নিকটাত্মীয়।",
        references: ["ref-ruppert-2004", "ref-kardong-2018"]
      },
      {
        key: "symmetry_endoskeleton",
        titleEn: "2. Secondary Pentaradial Symmetry & Mesodermal Endoskeleton",
        titleBn: "২. দ্বিতীয় পর্যায়ের পঞ্চ-অরীয় প্রতিসাম্য ও মেসোডার্মাল কঙ্কাল",
        order: 2,
        contentEn: "Adult echinoderms exhibit pentamerous radial symmetry, organized around an oral-aboral axis with 5 radiating ambulacral grooves. However, this radial condition is secondary: free-swimming larvae are bilaterally symmetrical, reflecting bilateral ancestry. The internal skeleton is mesodermal in origin, composed of porous calcareous plates or ossicles with a microscopic lattice structure termed stereom, bound together by mutable collagenous tissue (catch apparatus).",
        contentBn: "পূর্ণাঙ্গ একাইনোডার্মদের দেহ ৫টি ভাগে বিভক্ত পঞ্চ-অরীয় প্রতিসম (Pentaradial) হলেও এদের সাঁতারু লার্ভা সম্পূর্ণ দ্বিপার্শ্বীয় প্রতিসম, যা এদের দ্বিপার্শ্বীয় পূর্বপুরুষের প্রমাণ দেয়। এদের অন্তকঙ্কাল মেসোডার্ম থেকে সৃষ্ট চুনযুক্ত প্লেট বা অসিকল (Ossicles) দ্বারা গঠিত।",
        references: ["ref-hickman-2020"]
      },
      {
        key: "water_vascular_system",
        titleEn: "3. The Water Vascular System & Tube Feet Locomotion",
        titleBn: "৩. নালী-পদ ও জল-সংবহন তন্ত্র (Water Vascular System)",
        order: 3,
        contentEn: "The crowning innovation of Echinodermata is the water vascular (ambulacral) system—a coelom-derived network of hydraulic fluid-filled canals. Seawater enters through a sieve-like aboral madreporite, flows down the calcified stone canal into a circum-oral ring canal, branches into five radial canals along each arm, and pressurizes muscular ampullae. Contraction of ampullae drives hydraulic extension of suckered tube feet (podia), mediating locomotion, prey adhesion, gas exchange, and sensory touch.",
        contentBn: "একাইনোডার্মাটার প্রধান বৈশিষ্ট্য হলো জল-সংবহন তন্ত্র। দেহের ওপরের ম্যাড্রেপোরাইট ছিদ্র দিয়ে জল প্রবেশ করে স্টোন ক্যানাল ও রিং ক্যানাল হয়ে প্রতিটি বাহুর রেডিয়াল ক্যানালে পৌঁছায়। পেশিবহুল অ্যাম্পুলার সংকোচনে শত শত টিউব ফিট (Tube Feet) বা নালী-পদে জল সঞ্চালিত হয়ে হাইড্রোলিক চাপে এরা চলাফেরা করে এবং শিকার আঁকড়ে ধরে।",
        references: ["ref-ruppert-2004"]
      },
      {
        key: "autotomy_regeneration",
        titleEn: "4. Feeding, Autotomy & Extraordinary Regeneration",
        titleBn: "৪. খাদ্যগ্রহণ, অঙ্গছেদন ও অসাধারণ পুনরুৎপত্তি",
        order: 4,
        contentEn: "Sea stars are predatory carnivores capable of everting their lower cardiac stomach through the mouth directly into bivalve shells, digesting the prey externally with enzymatic secretions. Echinoderms possess extraordinary powers of self-amputation (autotomy) and somatic regeneration: a severed arm containing a portion of the central disc can regenerate an entirely new functional organism.",
        contentBn: "তারা মাছের মতো শিকারী প্রাণীরা শিকারের খোলসের ভেতর নিজের পাকস্থলী উল্টে বের করে দিয়ে বহিঃকোষীয় পরিপাক সম্পন্ন করে। এদের মধ্যে অটোটমি বা বিপদে নিজের অঙ্গ বিচ্ছিন্ন করার এবং পরবর্তীতে সম্পূর্ণ নতুন দেহ পুনরুৎপত্তি করার অবিশ্বাস্য ক্ষমতা রয়েছে।",
        references: ["ref-hickman-2020"]
      },
      {
        key: "classes_ecological",
        titleEn: "5. Major Classes, Examples & Coral Reef Keystone Roles",
        titleBn: "৫. প্রধান শ্রেণীসমূহ, উদাহরণ ও প্রবাল প্রাচীরের বাস্তুতান্ত্রিক ভূমিকা",
        order: 5,
        contentEn: "Five living classes: 1. Asteroidea (sea stars / starfish, e.g. Acanthaster planci Crown-of-thorns); 2. Ophiuroidea (brittle stars and basket stars); 3. Echinoidea (sea urchins and sand dollars with fused tests and Aristotle's lantern chewing apparatus); 4. Holothuroidea (sea cucumbers / trepang with internal respiratory trees); 5. Crinoidea (sea lilies and feather stars). Echinoderms act as keystone predators and sediment cleaners on oceanic reefs and the Bay of Bengal seafloor.",
        contentBn: "পাঁচটি প্রধান শ্রেণী: অ্যাস্টেরোইডিয়া (তারা মাছ), অফিউরোইডিয়া (ভঙ্গুর তারা), একিনোইডিয়া (সমুদ্র সজারু বা সি-আর্চিন), হোলোথুরোইডিয়া (সমুদ্র শসা বা সি-কিউকাম্বার), এবং ক্রিনোইডিয়া (সি-লিলি)। এরা সমুদ্রতলের ভারসাম্য রক্ষা করে। সেন্ট মার্টিন ও বঙ্গোপসাগরের তলদেশে এদের প্রাচুর্য দেখা যায়।",
        references: ["ref-worms-2024"]
      }
    ]
  },

  "phylum-chordata-marine": {
    taxonId: "taxon-chordata",
    canonicalSlug: "chordata",
    exampleSpeciesIds: [
      "sp-tenualosa-ilisha",
      "sp-orcaella-brevirostris",
      "sp-chelonia-mydas"
    ],
    sections: [
      {
        key: "classification",
        titleEn: "1. Classification & The Four Defining Chordate Characteristics",
        titleBn: "১. শ্রেণীবিন্যাস ও কর্ডাটার চারটি প্রধান মৌলিক বৈশিষ্ট্য",
        order: 1,
        contentEn: "Phylum Chordata (Haeckel, 1874) unites bilateral deuterostome animals characterized by four foundational morphological synapomorphies present at some stage of ontogeny: 1. Notochord (dorsal flexible cartilaginous skeletal rod providing axial support); 2. Dorsal hollow nerve cord (derived from ectoderm, developing into the brain and spinal cord); 3. Pharyngeal slits or pouches (branchial openings in aquatic forms, embryonic in tetrapods); 4. Post-anal tail (muscular extension posterior to the digestive anus for propulsion). In addition, an endostyle or homologous thyroid gland regulates iodine metabolism.",
        contentBn: "পর্ব কর্ডাটা (Haeckel, 1874) হলো উন্নত ডিউটারোস্টোম প্রাণী যাদের জীবনের কোনো না কোনো পর্যায়ে চারটি মৌলিক বৈশিষ্ট্য বিদ্যমান থাকে: ১. নটোকর্ড (পৃষ্ঠীয় স্থিতিস্থাপক রজ্জু যা দেহকে অক্ষীয় দৃঢ়তা দেয়); ২. ফাঁপা পৃষ্ঠীয় স্নায়ুরজ্জু (যা মস্তিষ্ক ও সুষুম্নাকাণ্ডে রূপান্তরিত হয়); ৩. গলবিলীয় ফুলকা ছিদ্র (যা জলজ প্রাণীতে আজীবন ও স্থলে ভ্রূণাবস্থায় থাকে); ৪. পায়ু-পশ্চাৎ পেশিবহুল লেজ (চলনের জন্য)। এছাড়া আয়োডিন নিয়ন্ত্রক এন্ডোস্টাইল বা থাইরয়েড গ্রন্থি বিদ্যমান।",
        references: ["ref-kardong-2018", "ref-hickman-2020"]
      },
      {
        key: "subphyla",
        titleEn: "2. The Three Chordate Subphyla (Tunicata, Cephalochordata, Vertebrata)",
        titleBn: "২. কর্ডাটার তিনটি উপপর্ব (টিউনিকেটা, সেফালোকর্ডাটা, ভার্টিব্রাটা)",
        order: 2,
        contentEn: "Chordates are divided into: 1. Subphylum Urochordata / Tunicata (sea squirts / ascidians; notochord restricted to larval tail, lost in sessile adults enclosed in tunicin cellulose coats); 2. Subphylum Cephalochordata (lancelets / Branchiostoma; notochord persists from head to tail throughout entire life); 3. Subphylum Vertebrata / Craniata (notochord largely replaced in adults by a segmented cartilaginous or bony vertebral column surrounding the spinal cord, with a distinct brain protected by a cranium).",
        contentBn: "কর্ডাটাকে তিনটি উপপর্বে ভাগ করা হয়: ১. টিউনিকেটা (ইউরোকর্ডাটা—যাদের কেবল সাঁতারু লার্ভা দশায় লেজে নটোকর্ড থাকে, যেমন অ্যাসিডিয়া); ২. সেফালোকর্ডাটা (যাদের মস্তক থেকে লেজ পর্যন্ত সারাজীবন নটোকর্ড থাকে, যেমন ব্রাঙ্কিওস্টোমা); ৩. ভার্টিব্রাটা (মেরুদণ্ডী প্রাণী—যাদের নটোকর্ড পূর্ণাঙ্গ অবস্থায় কশেরুকাযুক্ত মেরুদণ্ডে প্রতিস্থাপিত হয় এবং সুরক্ষিত মস্তিষ্ক থাকে)।",
        references: ["ref-kardong-2018"]
      },
      {
        key: "evolution_craniata",
        titleEn: "3. Craniate Evolution & The Transition to Jaws (Gnathostomata)",
        titleBn: "৩. ক্রেনিয়েট বিবর্তন ও চোয়ালের উৎপত্তি (ন্যাথোস্টোমাটা)",
        order: 3,
        contentEn: "The transition from invertebrate chordates to vertebrates was driven by neural crest embryonic tissue and epidermal placodes, which generated complex sensory organs, cranial cartilages, and a tripartite brain. The subsequent evolution of hinged biting jaws (Gnathostomata) from the first anterior pharyngeal gill arch during the Silurian transformed early filter feeders into active macro-predators, paired with lateral pectoral and pelvic fins for 3D steering.",
        contentBn: "অমেরুদণ্ডী কর্ডাটা থেকে মেরুদণ্ডী প্রাণীর বিবর্তনে নিউরাল ক্রেস্ট কোষের ভূমিকা ছিল অপরিসীম। সিলুরিয়ান যুগে সম্মুখ ফুলকা আর্চ রূপান্তরিত হয়ে কবজাযুক্ত শক্ত চোয়াল (Gnathostomata) গঠন করে, যা নিষ্ক্রিয় ফিল্টার ফিডারদের শিকারী দক্ষ প্রাণীতে পরিণত করে।",
        references: ["ref-kardong-2018"]
      },
      {
        key: "tetrapod_conquest",
        titleEn: "4. The Water-to-Land Transition & The Amniotic Egg",
        titleBn: "৪. স্থলভাগ বিজয় ও অ্যামনিওটিক ডিমের বিবর্তন",
        order: 4,
        contentEn: "During the Devonian, sarcopterygian lobe-finned fishes evolved homologous limb bones, leading to tetrapods (amphibians). The final liberation from aquatic dependence occurred in the Carboniferous with the evolution of the amniotic egg—equipped with protective extraembryonic membranes (amnion, chorion, allantois, yolk sac) and a water-retaining shell, allowing reptiles, birds, and mammals to conquer dry continents.",
        contentBn: "ডেভোনিয়ান যুগে মাংসল পাখনাযুক্ত মাছ থেকে টেট্রাপড বা উভচর প্রাণীর উদ্ভব ঘটে। এরপর কার্বনিফেরাস যুগে অ্যামনিওটিক ডিমের বিবর্তন প্রাণীদের জলের ওপর নির্ভরশীলতা চিরতরে দূর করে শুকনো ডাঙ্গায় সরীসৃপ, পাখি ও স্তন্যপায়ী হিসেবে ছড়িয়ে পড়ার সুযোগ দেয়।",
        references: ["ref-kardong-2018"]
      },
      {
        key: "major_classes_overview",
        titleEn: "5. Major Vertebrate Classes & Planetary Ecological Dominance",
        titleBn: "৫. প্রধান মেরুদণ্ডী শ্রেণীসমূহ ও বৈশ্বিক বাস্তুতান্ত্রিক আধিপত্য",
        order: 5,
        contentEn: "Extant vertebrates comprise five grand classes/grades: Fishes (Pisces: Agnatha, Chondrichthyes, Osteichthyes); Amphibia (frogs, salamanders, caecilians); Reptilia (turtles, lizards, snakes, crocodilians); Aves (birds); and Mammalia (monotremes, marsupials, placentals). Chordates dominate terrestrial, aerial, marine, and limnic biomes as apex predators, ecosystem engineers, and keystone species worldwide.",
        contentBn: "বিদ্যমান মেরুদণ্ডীদের পাঁচটি প্রধান শ্রেণী: মাছসমূহ (পিসেস), উভচর (অ্যাম্ফিবিয়া), সরীসৃপ (রেপটিলিয়া), পাখি (অ্যাভিস) এবং স্তন্যপায়ী (ম্যামালিয়া)। এরা পৃথিবীর সমস্ত আকাশ, স্থল ও জলভাগে খাদ্যজালের শীর্ষে অবস্থান করে।",
        references: ["ref-kardong-2018", "ref-hickman-2020"]
      }
    ]
  },

  "phylum-ctenophora": {
    taxonId: "taxon-ctenophora",
    canonicalSlug: "ctenophora",
    sections: [
      {
        key: "classification",
        titleEn: "1. Classification & Systematic Affinity",
        titleBn: "১. শ্রেণীবিন্যাস ও পদ্ধতিগত অবস্থান",
        order: 1,
        contentEn: "Phylum Ctenophora (Eschscholtz, 1829)—the comb jellies—comprises delicate, transparent, gelatinous marine animals characterized by biradial symmetry. Phylogenetically distinct from Cnidaria, ctenophores lack stinging nematocysts, possess a complete gut with anal pores, and utilize comb-like rows of fused cilia for propulsion.",
        contentBn: "পর্ব টেনোফোরা (Eschscholtz, 1829) হলো স্বচ্ছ জেলির মতো সামুদ্রিক প্রাণী যা চিরুনি জেলি নামে পরিচিত। নিডারিয়া থেকে এরা সম্পূর্ণ স্বতন্ত্র; এদের কোনো বিষাক্ত নেমাটোসিস্ট নেই, খাদ্যনালী পায়ুছিদ্রযুক্ত এবং সিলিয়ার সমন্বয়ে গঠিত চিরুনি প্লেটের সাহায্যে সাঁতার কাটে।",
        references: ["ref-ruppert-2004"]
      },
      {
        key: "ctene_locomotion",
        titleEn: "2. Comb Rows (Ctenes) & Unique Ciliary Locomotion",
        titleBn: "২. চিরুনি প্লেট (Ctene) ও সিলিয়ার চলন",
        order: 2,
        contentEn: "Ctenophores are the largest animals to move primarily by cilia. Eight meridional comb rows (costae) extend along the body, each made of fused macrocilia plates termed ctenes. Coordinated by an aboral statocyst sense organ, synchronized metachronal waves of ciliary beating propel the animal mouth-forward with mesmerizing rainbow-colored optical diffraction.",
        contentBn: "সিলিয়ার মাধ্যমে সন্তরণকারী এরা পৃথিবীর বৃহত্তম প্রাণী। এদের দেহে ৮টি চিরুনির মতো রো বা কোস্টা থাকে যা আলোর প্রতিসরণে রামধনুর মতো আলোকচ্ছটা তৈরি করে। মাথার ওপরের স্ট্যাটোসিস্ট ভারসাম্য অঙ্গের মাধ্যমে এদের চলন নিয়ন্ত্রিত হয়।",
        references: ["ref-ruppert-2004"]
      },
      {
        key: "colloblasts",
        titleEn: "3. Colloblasts (Adhesive Lasso Cells) & Prey Capture",
        titleBn: "৩. কলোব্লাস্ট আঠালো কোষ ও শিকার ধরা",
        order: 3,
        contentEn: "Tentaculate ctenophores bear two long retractile tentacles equipped with colloblasts—specialized lasso cells that discharge a sticky adhesive droplet upon contact with copepods and fish larvae, pulling prey into the mouth without stinging.",
        contentBn: "এদের দুটি লম্বা গুটিয়ে নেওয়া যায় এমন কর্ষিকায় কলোব্লাস্ট নামক বিশেষ আঠালো কোষ থাকে। শিকার স্পর্শ করলেই আঠালো পদার্থ নিঃসৃত করে শিকারকে আটকে ফেলে মুখে টেনে নেয়।",
        references: ["ref-hickman-2020"]
      },
      {
        key: "bioluminescence_ecology",
        titleEn: "4. Bioluminescence & Pelagic Food Web Dynamics",
        titleBn: "৪. জৈব-আলোক ও সামুদ্রিক খাদ্যজাল",
        order: 4,
        contentEn: "Nearly all ctenophores exhibit green or blue bioluminescence via calcium-activated photoproteins in meridian canals. They are voracious predators of plankton and can rapidly bloom, exerting top-down control on zooplankton populations in coastal and pelagic marine waters.",
        contentBn: "অধিকাংশ টেনোফোরা সমুদ্রের গভীরে নীল বা সবুজ রঙের আলো বিচ্ছুরণ বা বায়োলুমিনেসেন্স ঘটায়। এরা সামুদ্রিক জুপ্ল্যাঙ্কটন ভক্ষণ করে মহাসাগরের খাদ্যজালের ভারসাম্য বজায় রাখে।",
        references: ["ref-worms-2024"]
      }
    ]
  },

  "phylum-annelida-marine": {
    taxonId: "taxon-annelida-marine",
    canonicalSlug: "annelida",
    sections: [
      {
        key: "classification",
        titleEn: "1. Classification & Metameric Segmentation",
        titleBn: "১. শ্রেণীবিন্যাস ও মেটামেরিক খণ্ডায়ন",
        order: 1,
        contentEn: "Phylum Annelida (Lamarck, 1809) comprises triploblastic, coelomate lophotrochozoans characterized by true metameric segmentation. The cylindrical body is divided externally into linear series of rings and internally partitioned by transverse intersegmental septa, allowing localized muscular control.",
        contentBn: "পর্ব অ্যানেলিডা (Lamarck, 1809) হলো খণ্ডায়িত বলয়ী প্রাণী। এদের দেহ বাইরে অসংখ্য আংটির মতো খণ্ডে এবং ভেতরে অনুপ্রস্থ পর্দা বা সেপটা দ্বারা বিভক্ত, যাকে প্রকৃত মেটামেরিজম বলা হয়।",
        references: ["ref-ruppert-2004"]
      },
      {
        key: "hydrostatic_skeleton",
        titleEn: "2. Hydrostatic Skeleton & Muscular Locomotion",
        titleBn: "২. হাইড্রোস্ট্যাটিক কঙ্কাল ও পেশিবহুল চলন",
        order: 2,
        contentEn: "Each segment contains a coelomic fluid chamber acting as an incompressibility hydrostatic skeleton. Alternating peristaltic contractions of circular and longitudinal muscles, assisted by chitinous bristles (setae/chaetae) or marine fleshy flaps (parapodia), drive burrowing and swimming.",
        contentBn: "সিলোমের তরল হাইড্রোস্ট্যাটিক কঙ্কাল হিসেবে কাজ করে। বৃত্তাকার ও অনুদৈর্ঘ্য পেশির পর্যায়ক্রমিক সংকোচন এবং কাইটিনের তৈরি সিটি (Setae) বা প্যারাপোডিয়ার সাহায্যে এরা মাটিতে গর্ত করে বা জলে সাঁতার কাটে।",
        references: ["ref-hickman-2020"]
      },
      {
        key: "circulation_excretion",
        titleEn: "3. Closed Blood Vascular System & Metanephridia",
        titleBn: "৩. রুদ্ধ রক্ত সংবহন ও মেটানেফ্রিডিয়া রেচন",
        order: 3,
        contentEn: "Annelids possess a closed circulatory system with dorsal and ventral longitudinal vessels connected by lateral aortic arches ('hearts'). Blood contains respiratory pigments such as hemoglobin or chlorocruorin. Excretion is handled by segmentally paired metanephridia filtering coelomic waste via ciliated nephrostomes.",
        contentBn: "অ্যানেলিডার সংবহন সম্পূর্ণ রুদ্ধ প্রকৃতির; এদের রক্তে হিমোগ্লোবিন বা ক্লোরোক্রুওরিন দ্রবীভূত থাকে। প্রতিটি খণ্ডে একজোড়া করে সিলিয়াযুক্ত মেটানেফ্রিডিয়া থাকে যা দেহ থেকে রেচন বর্জ্য নিষ্কাশন করে।",
        references: ["ref-ruppert-2004"]
      },
      {
        key: "classes_ecological",
        titleEn: "4. Major Classes, Trochophore Larva & Ecological Importance",
        titleBn: "৪. প্রধান শ্রেণীসমূহ, ট্রোকোফোর লার্ভা ও পরিবেশগত গুরুত্ব",
        order: 4,
        contentEn: "Class Polychaeta (marine bristle worms with parapodia and swimming trochophore larvae); Class Clitellata: Oligochaeta (earthworms) and Hirudinea (leeches). Annelids perform vital sediment bioturbation in mangrove soils and marine coasts, facilitating nutrient cycling.",
        contentBn: "প্রধান শ্রেণী: পলিকিটা (সামুদ্রিক ব্রিসল ওয়ার্ম ও ট্রোকোফোর লার্ভা), অলিগোকিটা (কেঁচো), এবং হিরুডিনিয়া (জোঁক)। সুন্দরবনের ম্যানগ্রোভ মাটিতে কেঁচো ও সামুদ্রিক কৃমি মাটি বায়ুচলাচল ও পুষ্টি চক্রে মৌলিক ভূমিকা পালন করে।",
        references: ["ref-worms-2024"]
      }
    ]
  }
};

const newRecords = [
  {
    id: "class-amphibia",
    taxonId: "taxon-amphibia",
    rank: "class",
    scientificName: "Amphibia",
    bengaliName: "উভচর প্রাণী (অ্যাম্ফিবিয়া)",
    englishName: "Amphibians / Amphibia",
    parentTaxonId: "taxon-chordata",
    category: "general",
    canonicalSlug: "amphibia",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Amphibia", nameBn: "উভচর প্রাণী" }
    ],
    shortDescription: {
      en: "Ectothermic anamniote tetrapods characterized by glandular moist permeable skin, three-chambered hearts, and typically a biphasic life cycle spanning aquatic gilled larvae and terrestrial lung-breathing adults.",
      bn: "শীতলরক্তের অনঅ্যামনিওটিক টেট্রাপড মেরুদণ্ডী প্রাণী যাদের ত্বক আর্দ্র ও গ্রন্থিময়, হৃদপিণ্ড তিন প্রকোষ্ঠযুক্ত এবং সাধারণত জলজ ফুলকাযুক্ত লার্ভা ও ডাঙ্গার ফুসফুসধারী পূর্ণাঙ্গ রূপের দ্বি-পর্যায়ের জীবনচক্র থাকে।"
    },
    diagnosticCharacteristics: {
      en: "Poikilothermic tetrapods with moist glandular integument devoid of epidermal scales; cutaneous gas exchange alongside pulmonary respiration; three-chambered heart (two atria, one ventricle); non-cleidoic gelatinous eggs lacking amnion; biphasic life history with complete metamorphosis.",
      bn: "আঁইশবিহীন আর্দ্র ত্বকযুক্ত শীতলরক্তের টেট্রাপড; ত্বকের সাহায্যে শ্বাসকার্য পরিচালনা; তিন-প্রকোষ্ঠবিশিষ্ট হৃদপিণ্ড; খোসাহীন জেলিময় ডিম্ব এবং রূপান্তরের মাধ্যমে জলজ লার্ভা থেকে ডাঙ্গার পূর্ণাঙ্গ প্রাণীতে বিকাশ।",
      keyFeatures: {
        en: [
          "Moist, permeable skin functioning as primary or auxiliary respiratory surface",
          "Three-chambered heart with complete atrial separation and single muscular ventricle",
          "Anamniote gelatinous eggs requiring moisture or standing aquatic pools",
          "Biphasic life history with aquatic herbivorous tadpole and terrestrial carnivorous adult"
        ],
        bn: [
          "আর্দ্র ও ভেদ্য ত্বক যা প্রধান বা সম্পূরক শ্বাসযন্ত্র হিসেবে কাজ করে",
          "দুটি অলিন্দ ও একটি নিলয়যুক্ত তিন-প্রকোষ্ঠবিশিষ্ট হৃদপিণ্ড",
          "অ্যামনিয়নবিহীন জেলিমুক্ত ডিম যা আর্দ্র পরিবেশের ওপর নির্ভরশীল",
          "জলজ তৃণভোজী ব্যাঙাচি থেকে রূপান্তরের মাধ্যমে ডাঙ্গার শিকারী পূর্ণাঙ্গ রূপ"
        ]
      }
    },
    habitat: {
      en: "Freshwater wetlands, haors, ponds, moist forest floors, and river banks. Absent from strictly marine hypersaline environments.",
      bn: "মিঠাপানির জলাভূমি, হাওর-বিল, পুকুর, আর্দ্র বনভূমি ও নদীর তীর। লবণাক্ত সামুদ্রিক পরিবেশে অনুপস্থিত।",
      systems: ["freshwater"]
    },
    ecosystem: {
      en: "Crucial intermediate mesocarnivores regulating insect, mosquito, and agricultural pest populations while serving as vital prey for birds, reptiles, and mammals.",
      bn: "কীটপতঙ্গ ও মশার লার্ভা দমনে এবং সাপ, পাখি ও স্তন্যপায়ীদের প্রধান খাদ্য হিসেবে বাস্তুতন্ত্রের গুরুত্বপূর্ণ স্তম্ভ।",
    },
    feeding: {
      en: "Adults are carnivorous ambush predators feeding on insects, worms, and small vertebrates via sticky projectile tongue. Larvae are mostly microphagous or herbivorous filter feeders.",
      bn: "পূর্ণাঙ্গ উভচররা মাংসাশী শিকারী যারা আঠালো জিহ্বার সাহায্যে পোকামাকড় শিকার করে। ব্যাঙাচিরা শৈবাল ও জলজ কণা খায়।"
    },
    reproduction: {
      en: "External fertilization (amplexus in anurans); lay gelatinous clusters of eggs in water; development proceeds via free-swimming aquatic tadpoles undergoing dramatic thyroxine-mediated metamorphosis.",
      bn: "বহিঃনিষেক (অ্যামপ্লেক্সাস); জলে জেলির মতো স্তূপে ডিম পাড়ে; থাইরক্সিন হরমোনের প্রভাবে ব্যাঙাচি রূপান্তরের মাধ্যমে লেজ ও ফুলকা হারিয়ে চার পা ও ফুসফুস বিশিষ্ট পূর্ণাঙ্গ ব্যাঙে রূপ নেয়।"
    },
    distribution: {
      en: "Global across tropical, subtropical, and temperate landmasses. In Bangladesh, over 50 native amphibian species occur across wetlands and forests.",
      bn: "মেরু ও চরম মরু অঞ্চল ছাড়া বিশ্বব্যাপী বিস্তৃত। বাংলাদেশে ৫০টিরও বেশি দেশীয় উভচর প্রজাতি জলাভূমি ও বনে বাস করে।"
    },
    importantFamilies: [
      {
        name: "Dicroglossidae",
        commonEn: "Fork-tongued Frogs",
        commonBn: "কোলা ব্যাঙ",
        diagnosticEn: "Large semi-aquatic frogs with muscular hind legs (e.g. Hoplobatrachus tigerinus)."
      },
      {
        name: "Bufonidae",
        commonEn: "True Toads",
        commonBn: "কুনো ব্যাঙ",
        diagnosticEn: "Warty terrestrial amphibians with prominent parotoid poison glands (e.g. Duttaphrynus melanostictus)."
      },
      {
        name: "Rhacophoridae",
        commonEn: "Shrub & Tree Frogs",
        commonBn: "গেছো ব্যাঙ",
        diagnosticEn: "Arboreal frogs equipped with enlarged adhesive toe pads for climbing vegetation."
      }
    ],
    scientificNamesSummary: {
      en: "Class Amphibia Blainville, 1816; comprising orders Anura (frogs and toads), Caudata/Urodela (salamanders), and Gymnophiona/Apoda (caecilians).",
      bn: "শ্রেণী অ্যাম্ফিবিয়া Blainville, 1816; যার অন্তর্গত তিনটি বর্গ: অনুরা (ব্যাঙ), কডাটা (সালামান্ডার), এবং জিমনোফিওনা (অন্ধ কীট বা সিসিলিয়ান)।"
    },
    exampleSpeciesIds: [],
    examplesSummary: {
      en: "Representative global and Bangladesh taxa include the Indian Bullfrog (Hoplobatrachus tigerinus), Asian Common Toad (Duttaphrynus melanostictus), Spotted Tree Frog (Polypedates teraiensis), and Fire Salamander (Salamandra salamandra).",
      bn: "প্রতিনিধি প্রজাতি: ভারতীয় কোলা ব্যাঙ (Hoplobatrachus tigerinus), সাধারণ কুনো ব্যাঙ (Duttaphrynus melanostictus), গেছো ব্যাঙ (Polypedates) এবং ফায়ার সালামান্ডার।"
    },
    additionalInformation: {
      en: "Amphibians are critical global bioindicators of environmental health due to permeable skin sensitive to pollutants, acid precipitation, and the pandemic fungal pathogen Batrachochytrium dendrobatidis (chytridiomycosis).",
      bn: "উভচর প্রাণীরা তাদের ভেদ্য ত্বকের কারণে দূষণ ও জলবায়ু পরিবর্তনের অত্যন্ত সংবেদনশীল বায়ো-ইন্ডিকেটর। কাইট্রিডিওমাইকোসিস ছত্রাক বিশ্বজুড়ে এদের জন্য মারাত্মক হুমকি।"
    },
    referenceIds: ["ref-amphibiaweb-2026", "ref-hickman-2020", "ref-kardong-2018"],
    authoritySource: "AmphibiaWeb (2026) / Frost (2026) Amphibian Species of the World",
    verificationStatus: "published",
    publishedStatus: true,
    sections: [
      {
        key: "water_to_land",
        titleEn: "1. The Water-to-Land Evolutionary Transition",
        titleBn: "১. জল থেকে ডাঙ্গায় বিবর্তনীয় উত্তরণ",
        order: 1,
        contentEn: "Amphibians represent the initial vertebrate radiation onto land during the Late Devonian (~375 million years ago), descending from sarcopterygian lobe-finned rhipidistian fishes like Tiktaalik and Acanthostega. They adapted paired fins into weight-bearing pentadactyl limbs while remaining dependent upon freshwater for reproduction.",
        contentBn: "উভচর প্রাণীরা লেট ডেভোনিয়ান যুগে (~৩৭৫ মিলিয়ন বছর আগে) মাংসল পাখনাযুক্ত সারকোপ্টেরিগিয়ান মাছ (যেমন টিকটালিক) থেকে উদ্ভূত হয়ে প্রথম মেরুদণ্ডী হিসেবে ডাঙ্গায় পা রাখে। তারা পাখনাকে হাঁটার উপযোগী চার পায়ে রূপান্তরিত করে, যদিও প্রজননের জন্য তারা জলের ওপর নির্ভরশীল থেকে যায়।",
        references: ["ref-kardong-2018"]
      },
      {
        key: "cutaneous_respiration",
        titleEn: "2. Glandular Moist Skin & Respiration Modes",
        titleBn: "২. আর্দ্র গ্রন্থিময় ত্বক ও চার ধরনের শ্বাসকার্য",
        order: 2,
        contentEn: "Amphibians employ four distinct respiratory mechanisms: 1. Cutaneous respiration across a densely vascularized, mucous-coated epidermis; 2. Buccopharyngeal pumping forcing air into simple sac-like lungs via positive pressure; 3. Branchial gills in aquatic larvae; 4. Total lung loss in plethodontid salamanders relying 100% on skin exchange.",
        contentBn: "উভচরে চার ধরনের শ্বাসকার্য দেখা যায়: ১. ত্বকীয় শ্বাসকার্য (ত্বকের রক্তজালিকার মাধ্যমে ব্যাপন); ২. মুখগলবিলীয় ও ফুসফুসীয় শ্বাসকার্য (ধনাত্মক চাপে বাতাস ফুসফুসে প্রবেশ করানো); ৩. লার্ভা দশায় বহিঃফুলকা; ৪. কোনো কোনো সালামান্ডারে ফুসফুস সম্পূর্ণ অনুপস্থিত থাকায় ১০০% ত্বক দিয়ে শ্বাসকার্য চলে।",
        references: ["ref-hickman-2020"]
      },
      {
        key: "circulatory_system",
        titleEn: "3. Three-Chambered Heart & Double Circulation",
        titleBn: "৩. তিন প্রকোষ্ঠযুক্ত হৃদপিণ্ড ও দ্বৈত সংবহন",
        order: 3,
        contentEn: "The amphibian heart comprises three chambers: left atrium receiving oxygenated blood from lungs/skin, right atrium receiving deoxygenated systemic blood, and a single muscular ventricle. A specialized spiral valve in the conus arteriosus partially separates oxygenated and deoxygenated streams, directing oxygen-rich blood to the carotid arteries.",
        contentBn: "উভচরের হৃদপিণ্ডে দুটি অলিন্দ এবং একটি নিলয় থাকে। বাম অলিন্দ ফুসফুস ও ত্বক থেকে অক্সিজেনযুক্ত রক্ত এবং ডান অলিন্দ দেহ থেকে রক্ত গ্রহণ করে। কোনাস আর্টারিওসাসের স্পাইরাল ভালভ অক্সিজেনযুক্ত রক্তকে মস্তিষ্কে এবং কম অক্সিজেনযুক্ত রক্তকে ফুসফুস ও ত্বকে প্রবাহিত হতে সাহায্য করে।",
        references: ["ref-kardong-2018"]
      },
      {
        key: "metamorphosis",
        titleEn: "4. Biphasic Life Cycle & Thyroxine-Mediated Metamorphosis",
        titleBn: "৪. দ্বি-পর্যায়ের জীবন চক্র ও থাইরক্সিন নিয়ন্ত্রিত রূপান্তর",
        order: 4,
        contentEn: "Anuran metamorphosis is an extraordinary hormonal cascade triggered by thyroid hormones (T3 and T4). Aquatic herbivorous tadpoles with branchial gills, lateral lines, and a muscular swimming tail completely resorb their tail and gills, develop lungs, grow pentadactyl limbs, remodel their short intestine for a carnivorous diet, and develop tympanic ears for airborne sound.",
        contentBn: "থাইরয়েড হরমোনের (T3 ও T4) প্রভাবে ব্যাঙাচিতে নাটকীয় রূপান্তর ঘটে। জলজ ফুলকাযুক্ত লেজধারী ব্যাঙাচি নিজের লেজ ও ফুলকা পুনঃশোষণ করে ফুসফুস ও চার পা বিশিষ্ট হয়ে ডাঙ্গায় উঠে আসে এবং ক্ষুদ্রান্ত্র পুনর্বিন্যস্ত করে মাংসাশী খাবারে অভ্যস্ত হয়।",
        references: ["ref-hickman-2020"]
      },
      {
        key: "orders_conservation",
        titleEn: "5. Major Orders & Global Amphibian Conservation Crisis",
        titleBn: "৫. প্রধান বর্গসমূহ ও উভচর সংরক্ষণ সংকট",
        order: 5,
        contentEn: "Three living orders: Anura (frogs and toads, tailless adults with saltatorial hindlimbs); Caudata / Urodela (salamanders and newts, retaining post-anal tail and equal limbs); Gymnophiona / Apoda (limbless burrowing caecilians). Amphibians face catastrophic global declines from habitat loss, pesticides, and the deadly chytrid fungal disease Batrachochytrium dendrobatidis.",
        contentBn: "বিদ্যমান তিনটি বর্গ: অনুরা (ব্যাঙ—লেজহীন ও লাফানোর উপযোগী পা), কডাটা (সালামান্ডার—লেজযুক্ত), এবং জিমনোফিওনা (পা-বিহীন ভূগর্ভস্থ কেঁচোর মতো উভচর)। বিশ্বজুড়ে বাসস্থান ধ্বংস ও কাইট্রিড ছত্রাকজনিত রোগের কারণে উভচররা চরম বিলুপ্তির সংকটে রয়েছে।",
        references: ["ref-amphibiaweb-2026", "ref-iucn-global-2024"]
      }
    ]
  },

  {
    id: "class-reptilia",
    taxonId: "taxon-reptilia",
    rank: "class",
    scientificName: "Reptilia",
    bengaliName: "সরীসৃপ প্রাণী (রেপটিলিয়া)",
    englishName: "Reptiles / Reptilia",
    parentTaxonId: "taxon-chordata",
    category: "general",
    canonicalSlug: "reptilia",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Reptilia", nameBn: "সরীসৃপ প্রাণী" }
    ],
    shortDescription: {
      en: "Ectothermic amniotes characterized by dry keratinized epidermal scales, pulmonary respiration via thoracic ribs, internal fertilization, and shelled cleidoic eggs that liberated vertebrates from aquatic breeding constraints.",
      bn: "শুষ্ক কাইটিনযুক্ত আঁইশধারী শীতলরক্তের অ্যামনিওট মেরুদণ্ডী প্রাণী, যারা ফুসফুসের সাহায্যে শ্বাস নেয়, অভ্যন্তরীণ নিষেকের মাধ্যমে খোসাযুক্ত ডিম পাড়ে এবং প্রজননের জন্য সম্পূর্ণ ডাঙ্গার ওপর নির্ভরশীল।"
    },
    diagnosticCharacteristics: {
      en: "Poikilothermic amniotes with skin covered in beta-keratin epidermal scales or scutes; absence of cutaneous respiration; pulmonary negative-pressure ventilation; incompletely divided or fully 4-chambered heart (Crocodilia); metanephric kidneys producing uric acid paste; cleidoic eggs with amnion, chorion, allantois, and yolk sac.",
      bn: "শুষ্ক কেরাটিনময় আঁইশে আবৃত দেহ; ত্বকীয় শ্বাসকার্যের অনুপস্থিতি; পাঁজর দিয়ে প্রসারিত ফুসফুসীয় শ্বাসকার্য; আংশিক বিভক্ত বা চার-প্রকোষ্ঠবিশিষ্ট হৃদপিণ্ড; ইউরিক অ্যাসিড নির্গমনকারী মেটানেফ্রিক বৃক্ক; ভ্রূণীয় পর্দা (অ্যামনিয়ন, কোরিয়ন, অ্যালানটয়েস) যুক্ত শক্ত খোসাবিশিষ্ট ডিম।",
      keyFeatures: {
        en: [
          "Amniotic egg with extraembryonic membranes eliminating aquatic larval stage",
          "Waterproof integument of beta-keratin scales preventing cutaneous desiccation",
          "Uricotelic excretion conserving water as semi-solid uric acid paste",
          "Negative-pressure pulmonary respiration powered by thoracic costal ribs"
        ],
        bn: [
          "অ্যামনিওটিক খোসাযুক্ত ডিম যার ফলে জলজ লার্ভা দশার অবসান ঘটে",
          "পানিনিরোধী কেরাটিন আঁইশযুক্ত ত্বক যা জলীয় বাষ্পীভবন রোধ করে",
          "ইউরিকোটেলিক রেচন যা আধা-কঠিন ইউরিক অ্যাসিড হিসেবে জল সংরক্ষণ করে",
          "পাঁজরের পেশির মাধ্যমে ঋণাত্মক চাপে ফুসফুসীয় শ্বাসকার্য"
        ]
      }
    },
    habitat: {
      en: "Terrestrial deserts, tropical rainforests, freshwater rivers, haors, coastal mangroves, and open pelagic oceans.",
      bn: "মরুভূমি, রেইনফরেস্ট, নদী-নালা, হাওর, সুন্দরবনের মোহনা এবং উন্মুক্ত সমুদ্র।",
      systems: ["marine", "freshwater"]
    },
    ecosystem: {
      en: "Apex and mesopredators regulating rodent, fish, bird, and invertebrate populations. Marine turtles graze seagrass meadows and jellyfish swarms.",
      bn: "বাস্তুতন্ত্রের শীর্ষ শিকারী হিসেবে ইঁদুর ও অন্যান্য ক্ষতিকর প্রাণী দমন করে। সামুদ্রিক কাছিম সীগ্রাস বিছানা পরিষ্কার রাখে ও জেলিফিশ নিয়ন্ত্রণ করে।"
    },
    feeding: {
      en: "Predominantly carnivorous, ranging from active pursuit hunters (snakes, monitors) to crushing predators (crocodilians) and herbivorous sea turtles (Chelonia mydas).",
      bn: "অধিকাংশই মাংসাশী ও শিকারী (সাপ, গুইসাপ, কুমির); কিছু প্রজাতি যেমন সবুজ সামুদ্রিক কাছিম তৃণভোজী।"
    },
    reproduction: {
      en: "Internal fertilization via copulatory organs (hemipenes in Squamata, single phallus in turtles/crocodilians); oviparity with leathery or calcified shells; temperature-dependent sex determination (TSD) widespread.",
      bn: "অভ্যন্তরীণ নিষেক; শক্ত চামড়ার মতো বা চুনযুক্ত খোসাবিশিষ্ট ডিম্বপ্রসব; অধিকাংশ সরীসৃপে ডিম ফোটার তাপমাত্রার ওপর পুরুষ বা স্ত্রী লিঙ্গ নির্ধারিত হয় (TSD)।"
    },
    distribution: {
      en: "Cosmopolitan across tropical and warm-temperate latitudes globally. In Bangladesh, over 130 reptile species inhabit terrestrial and marine waters.",
      bn: "বিশ্বব্যাপী উষ্ণ ও ক্রান্তীয় অঞ্চলে বিস্তৃত। বাংলাদেশে সুন্দরবন ও বঙ্গোপসাগরসহ ১৩০টিরও বেশি প্রজাতির সরীসৃপ বাস করে।"
    },
    importantFamilies: [
      {
        name: "Cheloniidae",
        commonEn: "Hard-shelled Sea Turtles",
        commonBn: "সামুদ্রিক কাছিম",
        diagnosticEn: "Marine turtles with streamlined bony carapaces and paddle flippers (e.g. Chelonia mydas, Lepidochelys olivacea)."
      },
      {
        name: "Elapidae",
        commonEn: "Cobras, Kraits & Sea Snakes",
        commonBn: "গোখরা ও সামুদ্রিক সাপ",
        diagnosticEn: "Venomous front-fanged snakes including pelagic sea snakes (Hydrophis platurus) and king cobras."
      },
      {
        name: "Varanidae",
        commonEn: "Monitor Lizards",
        commonBn: "গুইসাপ",
        diagnosticEn: "Large predatory lizards with forked tongues and strong claws (e.g. Varanus salvator)."
      },
      {
        name: "Crocodylidae",
        commonEn: "True Crocodiles",
        commonBn: "কুমির",
        diagnosticEn: "Large semi-aquatic apex predators with 4-chambered hearts (e.g. Crocodylus porosus)."
      }
    ],
    scientificNamesSummary: {
      en: "Class Reptilia Laurenti, 1768; traditionally comprising Testudines (turtles), Squamata (lizards and snakes), Crocodilia (crocodilians), and Rhynchocephalia (tuatara). Cladistically ancestral to Aves.",
      bn: "শ্রেণী রেপটিলিয়া Laurenti, 1768; প্রধান চার বর্গ: টেস্টুডিনস (কাছিম), স্কোয়ামাটা (সাপ ও টিকটিকি), ক্রোকোডিলিয়া (কুমির), এবং রাইঙ্কোসেফালিয়া (টুয়াটারা)। ক্ল্যাডিস্টিক্যালি পাখিরা সরীসৃপ থেকেই উদ্ভূত।"
    },
    exampleSpeciesIds: [
      "sp-chelonia-mydas",
      "sp-lepidochelys-olivacea",
      "sp-hydrophis-platurus"
    ],
    examplesSummary: {
      en: "Verified canonical species include the Green Sea Turtle (Chelonia mydas), Olive Ridley Sea Turtle (Lepidochelys olivacea), and Yellow-bellied Sea Snake (Hydrophis platurus).",
      bn: "বায়োটাএলিটে যাচাইকৃত প্রজাতি: সবুজ সামুদ্রিক কাছিম (Chelonia mydas), জলপাইরঙা কাছিম (Lepidochelys olivacea), এবং হলুদপেট সামুদ্রিক সাপ (Hydrophis platurus)।"
    },
    additionalInformation: {
      en: "Marine turtles and crocodilians face intense anthropogenic pressure from coastal trawling, poaching, and beach incubation temperature disruption under global warming.",
      bn: "উপকূলীয় ট্রলিং, ডিম পাড়ার সৈকত ধ্বংস এবং বৈশ্বিক উষ্ণায়নে তাপমাত্রাজনিত লিঙ্গ বৈষম্যের কারণে সামুদ্রিক সরীসৃপরা চরম ঝুঁকিতে রয়েছে।"
    },
    referenceIds: ["ref-rhodin-2021", "ref-worms-2024", "ref-kardong-2018"],
    authoritySource: "The Reptile Database (2026) / Uetz et al. / WoRMS (2026)",
    verificationStatus: "published",
    publishedStatus: true,
    sections: [
      {
        key: "amniotic_revolution",
        titleEn: "1. The Amniotic Egg: Terrestrial Conquest",
        titleBn: "১. অ্যামনিওটিক ডিম্ব: ডাঙ্গা বিজয়ের বৈপ্লবিক উদ্ভাবন",
        order: 1,
        contentEn: "The evolution of the cleidoic amniotic egg was the defining milestone freeing tetrapods from water. Inside a porous protective shell, four extraembryonic membranes nurture the embryo: 1. Amnion (enclosing amniotic fluid cushion); 2. Allantois (storing toxic uric acid and mediating gas exchange); 3. Chorion (outer gas exchange membrane); 4. Yolk sac (delivering nutrient-dense yolk).",
        contentBn: "অ্যামনিওটিক ডিম্ব সরীসৃপদের জল থেকে সম্পূর্ণ মুক্তি দেয়। খোসার ভেতরে চারটি ভ্রূণীয় পর্দা ভ্রূণকে রক্ষা করে: অ্যামনিয়ন (তরল কুশন), অ্যালানটয়েস (বর্জ্য ধারণ ও গ্যাস বিনিময়), কোরিয়ন (বহিস্থ গ্যাস বিনিময়), এবং কুসুম থলি (পুষ্টি সরবরাহ)।",
        references: ["ref-kardong-2018"]
      },
      {
        key: "integument_waterproofing",
        titleEn: "2. Keratinized Integument & Water-Conserving Excretion",
        titleBn: "২. কেরাটিনযুক্ত ত্বক ও জল সংরক্ষণকারী রেচন",
        order: 2,
        contentEn: "Reptilian skin is covered in dense beta-keratin epidermal scales and scutes secreted by the epidermis, completely eliminating cutaneous water loss. To conserve water in arid habitats, reptiles produce metanephric urine dominated by insoluble, non-toxic uric acid, eliminated as a white semi-solid paste with near-total water resorption in the cloaca.",
        contentBn: "সরীসৃপের ত্বক বিটা-কেরাটিন আঁইশ দ্বারা আবৃত থাকায় দেহ থেকে কোনো জল বাষ্পীভূত হতে পারে না। এরা জলের অপচয় রোধ করতে তরল মূত্রের বদলে সাদা পেস্টের মতো অদ্রবণীয় ইউরিক অ্যাসিড ত্যাগ করে।",
        references: ["ref-hickman-2020"]
      },
      {
        key: "cardiovascular_croc",
        titleEn: "3. Cardiovascular Architecture & Shunting Mechanisms",
        titleBn: "৩. সংবহন কাঠামো ও ক্রোকোডিলিয়ান হৃদপিণ্ড",
        order: 3,
        contentEn: "Non-avian reptiles exhibit an incompletely divided three-chambered heart with an interventricular septum (cavum venosum, cavum arteriosum, cavum pulmonale) that allows intracardiac blood shunting during prolonged underwater diving. Crocodilians evolved a complete four-chambered heart with a specialized vascular connection—the Foramen of Panizza—permitting controlled right-to-left shunts during deep submersion.",
        contentBn: "অধিকাংশ সরীসৃপে নিলয়ে আংশিক পর্দা থাকে যা ডুব দেওয়ার সময় রক্ত সঞ্চালনে সাহায্য করে। কুমিরে সম্পূর্ণ চার-প্রকোষ্ঠবিশিষ্ট হৃদপিণ্ড এবং ফোরামেন অব প্যানিজা (Foramen of Panizza) নামক বিশেষ রক্তনালী সংযোগ থাকে যা দীর্ঘক্ষণ পানির নিচে থাকার সময় পালমোনারি রক্তপ্রবাহ হ্রাস করে।",
        references: ["ref-kardong-2018"]
      },
      {
        key: "sensory_tsd",
        titleEn: "4. Specialized Sensory Organs & Temperature-Dependent Sex Determination",
        titleBn: "৪. বিশেষ সংবেদী অঙ্গ ও তাপমাত্রা-নির্ভর লিঙ্গ নির্ধারণ (TSD)",
        order: 4,
        contentEn: "Reptiles possess specialized sensory receptors: Jacobson's (vomeronasal) organ in snakes and monitors samples airborne scent molecules flicked by the bifid tongue; infrared loreal pit organs in pit vipers detect warm-blooded prey in darkness. In sea turtles and crocodilians, incubation nest temperature determines hatchling sex (e.g. warmer temperatures yield females in turtles).",
        contentBn: "সাপ ও গুইসাপে জ্যাকবসন অঙ্গ (Jacobson's Organ) চেরা জিহ্বা দিয়ে বাতাসের গন্ধের অণু শনাক্ত করে; পিট-ভাইপারে ইনফ্রারেড পিট থাকে যা অন্ধকারে উষ্ণ রক্তের শিকারের উত্তাপ শনাক্ত করে। এছাড়া কাছিম ও কুমিরের ডিমের লিঙ্গ নির্ভর করে বালির তাপমাত্রার ওপর।",
        references: ["ref-hickman-2020"]
      },
      {
        key: "marine_reptiles",
        titleEn: "5. Marine Reptiles & Global Conservation in Bangladesh",
        titleBn: "৫. সামুদ্রিক সরীসৃপ ও বাংলাদেশের উপকূলীয় সংরক্ষণ",
        order: 5,
        contentEn: "Marine reptiles evolved specialized osmoregulatory salt glands (lachrymal glands in sea turtles, sublingual glands in sea snakes) to excrete excess hyperosmotic sodium chloride. Five species of endangered sea turtles nest along Bangladesh beaches (Cox's Bazar, Saint Martin's, Kuakata), while the Sundarbans mangrove supports the Saltwater Crocodile (Crocodylus porosus) and venomous sea snakes.",
        contentBn: "সামুদ্রিক সরীসৃপদের চোখে বা জিহ্বার নিচে বিশেষ লবণ গ্রন্থি (Salt Glands) থাকে যা পান করা সমুদ্রের লবণাক্ত জল ছেঁকে অতিরিক্ত লবণ বের করে দেয়। বাংলাদেশের সেন্ট মার্টিন ও কুয়াকাটা সৈকতে অলিভ রিডলে কাছিম ডিম পাড়ে এবং সুন্দরবনের মোহনায় লোনা পানির কুমির বাস করে।",
        references: ["ref-rhodin-2021", "ref-iucn-bd-2015"]
      }
    ]
  },

  {
    id: "class-aves",
    taxonId: "taxon-aves",
    rank: "class",
    scientificName: "Aves",
    bengaliName: "পাখি বা পক্ষীকুল (অ্যাভিস)",
    englishName: "Birds / Aves",
    parentTaxonId: "taxon-chordata",
    category: "general",
    canonicalSlug: "aves",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Aves", nameBn: "পাখি বা পক্ষীকুল" }
    ],
    shortDescription: {
      en: "Endothermic feathered amniotes characterized by toothless keratinous bills, high metabolic rates, hollow pneumatized bones, complete four-chambered hearts, flow-through air-sac respiration, and forelimbs modified into wings for powered flight.",
      bn: "পালকযুক্ত উষ্ণরক্তের অ্যামনিওট মেরুদণ্ডী প্রাণী যাদের চোয়ালে দাঁতের বদলে শক্ত চঞ্চু থাকে, অস্থি ফাঁপা ও বায়ুপূর্ণ, হৃদপিণ্ড চার প্রকোষ্ঠযুক্ত, ফুসফুসে অবিরাম বায়ুথলি সঞ্চালন থাকে এবং অগ্রপদ ডানায় রূপান্তরিত।"
    },
    diagnosticCharacteristics: {
      en: "Homeothermic endotherms covered in beta-keratin feathers; forelimbs adapted as wings; specialized lightweight skeleton with hollow trabecular bones, furcula (wishbone), and keeled sternum (carina); flow-through respiratory system with non-collapsible parabronchial lungs and air sacs; complete four-chambered heart with right aortic arch; absence of urinary bladder.",
      bn: "পালক দ্বারা আবৃত উষ্ণরক্তের মেরুদণ্ডী; অগ্রপদ ডানায় রূপান্তরিত; ফাঁপা বায়ুগহ্বরযুক্ত হাড় এবং ওড়ার পেশি যুক্ত করার জন্য কিলেড স্টার্নাম; বায়ুথলিযুক্ত ফুসফুসের মাধ্যমে একমুখী অবিরাম শ্বাসকার্য; ডান অ্যাওর্টিক আর্চযুক্ত চার-প্রকোষ্ঠবিশিষ্ট হৃদপিণ্ড; মূত্রাশয়ের অনুপস্থিতি।"
    },
    habitat: {
      en: "Aerial, terrestrial, limnic, and pelagic biomes globally across all continents from the Arctic to Antarctic oceans.",
      bn: "বিশ্বব্যাপী আকাশ, স্থল, বনভূমি, জলাভূমি এবং অ্যান্টার্কটিকা থেকে ক্রান্তীয় সমস্ত অঞ্চলে বিস্তৃত।",
      systems: ["marine", "freshwater"]
    },
    ecosystem: {
      en: "Crucial ecological keystones driving global seed dispersal, insect pollination, carrion consumption, and predatory regulation of agricultural rodents.",
      bn: "পরাগায়ন, দূর-দূরান্তে বীজ বিস্তার, ক্ষতিকর কীটপতঙ্গ ও ইঁদুর দমন এবং মৃতদেহ পরিষ্কারে প্রকৃতির অন্যতম অপরিহার্য প্রহরী।"
    },
    feeding: {
      en: "Extraordinary trophic specializations reflected in beak morphology: nectarivorous, granivorous, insectivorous, piscivorous, and apex raptorial carnivory.",
      bn: "চঞ্চুর গঠনের ওপর ভিত্তি করে বৈচিত্র্যময় খাদ্য গ্রহণ: মধু পানকারী, শস্যভোজী, পতঙ্গভোজী, মাছ শিকারী এবং ঈগলের মতো মাংসাশী শিকারী।"
    },
    reproduction: {
      en: "Internal fertilization; oviparity with hard calcified calcium-carbonate shells; elaborate courtship displays, vocal songs, nest architecture, and prolonged biparental incubation and chick care.",
      bn: "অভ্যন্তরীণ নিষেক; ক্যালসিয়াম কার্বনেটের শক্ত খোসাযুক্ত ডিম্বপ্রসব; গান ও নাচের মাধ্যমে প্রণয়প্রদর্শন, সুনিপুণ বাসা তৈরি এবং পিতা-মাতা উভয়ের বাচ্চার লালন-পালন।"
    },
    distribution: {
      en: "Worldwide across all 7 continents. Bangladesh hosts over 700 recorded bird species across its river deltas, haors, and coastal flyways.",
      bn: "সাতটি মহাদেশেই বিস্তৃত। বাংলাদেশ এশিয়ার অন্যতম প্রধান পরিযায়ী পাখি রুট (Flyway), যেখানে ৭০০টিরও বেশি প্রজাতির পাখি নথিবদ্ধ।"
    },
    importantFamilies: [
      {
        name: "Accipitridae",
        commonEn: "Hawks, Eagles & Harriers",
        commonBn: "ঈগল ও বাজপাখি",
        diagnosticEn: "Diurnal raptors with hooked beaks and sharp talons (e.g. Haliaeetus leucogaster)."
      },
      {
        name: "Anatidae",
        commonEn: "Ducks, Geese & Swans",
        commonBn: "হাঁস ও রাজহাঁস",
        diagnosticEn: "Aquatic birds with webbed feet and spatulate filtering beaks."
      },
      {
        name: "Muscicapidae",
        commonEn: "Old World Flycatchers & Chats",
        commonBn: "দোয়েল ও চুটকি",
        diagnosticEn: "Small insectivorous passerines including the Oriental Magpie-Robin (Copsychus saularis)."
      }
    ],
    scientificNamesSummary: {
      en: "Class Aves Linnaeus, 1758; phylogenetically living theropod dinosaurs (Neornithes), divided into Palaeognathae (ratites) and Neognathae (flying birds).",
      bn: "শ্রেণী অ্যাভিস Linnaeus, 1758; বিবর্তনীয়ভাবে জীবন্ত থেরোপড ডাইনোসর, যা প্যালিওগ্নাথি (উটপাখি) এবং নিওগ্নাথি (উড়ুক্কু পাখি)-তে বিভক্ত।"
    },
    exampleSpeciesIds: [],
    examplesSummary: {
      en: "Iconic taxa include the Oriental Magpie-Robin (Copsychus saularis, National Bird of Bangladesh), White-bellied Sea Eagle (Haliaeetus leucogaster), and migratory waterfowls.",
      bn: "প্রতিনিধি প্রজাতি: বাংলাদেশের জাতীয় পাখি দোয়েল (Copsychus saularis), শ্বেতশুভ্র সামুদ্রিক ঈগল (Haliaeetus leucogaster), এবং শীতের পরিযায়ী হাঁস।"
    },
    additionalInformation: {
      en: "The East Asian-Australasian and Central Asian Flyways converge over Bangladesh haor basins (Tanguar Haor, Hakaluki Haor), hosting millions of wintering migratory waterfowl.",
      bn: "টাঙ্গুয়ার হাওর ও হাকালুকি হাওর আন্তর্জাতিক রামসার সাইট হিসেবে প্রতি শীতে সাইবেরিয়া ও মধ্য এশিয়া থেকে আগত লক্ষ লক্ষ পরিযায়ী পাখির প্রধান আশ্রয়স্থল।"
    },
    referenceIds: ["ref-ioc-birds-2026", "ref-kardong-2018", "ref-linnaeus-1758"],
    authoritySource: "IOC World Bird List (2026) / Gill et al. / Clements Checklist",
    verificationStatus: "published",
    publishedStatus: true,
    sections: [
      {
        key: "theropod_origin",
        titleEn: "1. Theropod Dinosaur Origin & Feathers",
        titleBn: "১. থেরোপড ডাইনোসর উৎস ও পালকের উৎপত্তি",
        order: 1,
        contentEn: "Modern cladistics demonstrates that birds are living theropod dinosaurs, closely related to maniraptorans like Velociraptor. Feathers evolved initially in non-avian dinosaurs for thermoregulation and display, constructed of flexible beta-keratin with a central rachis, branching barbs, and interlocking microscopic barbules and hooklets (hamuli).",
        contentBn: "আধুনিক ক্ল্যাডিস্টিক্সে পাখিরা হলো জীবিত থেরোপড ডাইনোসর। উড়বার বহু আগেই ডাইনোসরদের দেহে উত্তাপ ধরে রাখার জন্য পালকের উৎপত্তি ঘটেছিল। পালকের শ্যাফট থেকে বের হওয়া বার্ব ও আণুবীক্ষণিক হুক বা বার্বিউলের ইন্টারলকিং ব্যবস্থার কারণে ডানা বাতাসের ঘাত সহ্য করে উড়তে পারে।",
        references: ["ref-kardong-2018"]
      },
      {
        key: "flight_skeleton",
        titleEn: "2. Skeletal Adaptations for Aerodynamic Flight",
        titleBn: "২. ওড়ার জন্য কঙ্কালের বিশেষ রূপান্তর",
        order: 2,
        contentEn: "The avian skeleton combines extreme lightness with structural rigidity: long bones are hollow and pneumatized with internal air struts; clavicles fuse into the elastic wishbone (furcula) storing kinetic energy; the thoracic sternum sports a prominent keel (carina) anchoring massive flight muscles (pectoralis major and supracoracoideus); vertebrae fuse into a rigid synsacrum.",
        contentBn: "পাখির হাড় ফাঁপা ও বায়ুপূর্ণ হওয়ায় অত্যন্ত হালকা অথচ শক্ত। দুপাশের ক্ল্যাভিকল যুক্ত হয়ে স্থিতিস্থাপক ফারকুলা (উইশবোন) গঠন করে। বুকের স্টার্নামে বিশাল কিলেড অংশ থাকে যেখানে ওড়ার শক্তিশালী পেক্টোরালিস পেশি যুক্ত থাকে।",
        references: ["ref-hickman-2020"]
      },
      {
        key: "air_sac_respiration",
        titleEn: "3. Unidirectional Flow-Through Air-Sac Respiration",
        titleBn: "৩. বায়ুথলিযুক্ত ফুসফুসের একমুখী শ্বাসপ্রবাহ",
        order: 3,
        contentEn: "Birds possess the most efficient respiratory system among all vertebrates. Nine interconnecting air sacs act as bellows, forcing air in a continuous unidirectional loop through microscopic parabronchi in the lungs. Two full breathing cycles are required to move an air packet through the system, ensuring oxygen-rich fresh air passes through gas exchange tissues during both inspiration and expiration.",
        contentBn: "মেরুদণ্ডীদের মধ্যে পাখির শ্বাসতন্ত্র সবচেয়ে দক্ষ। এদের ফুসফুসের সাথে ৯টি বায়ুথলি বেলুনের মতো কাজ করে। একমুখী চক্রের কারণে শ্বাস গ্রহণ ও শ্বাস ত্যাগ—উভয় সময়ই ফুসফুসের প্যারাব্রঙ্কাই দিয়ে অবিরাম তাজা অক্সিজেন সমৃদ্ধ রক্ত প্রবাহিত হয়, যা উচ্চ আকাশে ওড়ার সময় অক্সিজেনের অভাব হতে দেয় না।",
        references: ["ref-kardong-2018"]
      },
      {
        key: "metabolism_circulation",
        titleEn: "4. Endothermy, Four-Chambered Heart & Uricotelic Excretion",
        titleBn: "৪. উষ্ণরক্ত, চার-প্রকোষ্ঠযুক্ত হৃদপিণ্ড ও ইউরিকোটেলিক রেচন",
        order: 4,
        contentEn: "Flight requires immense metabolic energy, supported by constant high body temperatures (~40–42°C). A completely divided four-chambered heart with a right systemic aortic arch maintains high blood pressure with zero mixing of oxygenated and deoxygenated blood. Excretion of semi-solid uric acid eliminates the need for a heavy urinary bladder, minimizing payload for flight.",
        contentBn: "ওড়ার বিপুল শক্তি জোগাতে পাখির দেহের তাপমাত্রা সার্বক্ষণিক ৪০-৪২ ডিগ্রি সেলসিয়াসে থাকে। চার-প্রকোষ্ঠবিশিষ্ট হৃদপিণ্ডে ডান মহাধমনী থাকে যা উচ্চ চাপে বিশুদ্ধ রক্ত ছড়ায়। মূত্রাশয় না থাকায় কোনো অতিরিক্ত তরল বর্জ্যের ওজন বহন করতে হয় না।",
        references: ["ref-hickman-2020"]
      },
      {
        key: "migration_ecology",
        titleEn: "5. Global Migration Flyways & Wetland Conservation in Bangladesh",
        titleBn: "৫. বৈশ্বিক পরিযান ও বাংলাদেশের জলাভূমি বাস্তুতন্ত্র",
        order: 5,
        contentEn: "Many birds undertake transcontinental migrations navigated by celestial cues, polarized sunlight, and Earth's geomagnetic field. Bangladesh's haors (Tanguar, Hakaluki) and coastal mudflats in the Ganges-Brahmaputra delta host over 200 species of winter migratory waterbirds, providing indispensable staging and refueling grounds on the East Asian-Australasian Flyway.",
        contentBn: "পাখিরা পৃথিবীর ভূ-চৌম্বকীয় ক্ষেত্র এবং তারার অবস্থান দেখে হাজার হাজার মাইল পরিযান করে। বাংলাদেশের টাঙ্গুয়ার হাওর ও উপকূলীয় চরাঞ্চল মধ্য এশিয়ার পরিযায়ী পাখিদের প্রধান বিচরণক্ষেত্র হিসেবে বিশ্বস্বীকৃত।",
        references: ["ref-ioc-birds-2026", "ref-iucn-bd-2015"]
      }
    ]
  },

  {
    id: "class-mammalia",
    taxonId: "taxon-mammalia",
    rank: "class",
    scientificName: "Mammalia",
    bengaliName: "স্তন্যপায়ী প্রাণী (ম্যামালিয়া)",
    englishName: "Mammals / Mammalia",
    parentTaxonId: "taxon-chordata",
    category: "general",
    canonicalSlug: "mammalia",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Mammalia", nameBn: "স্তন্যপায়ী প্রাণী" }
    ],
    shortDescription: {
      en: "Endothermic amniotes characterized by mammary glands producing milk for nourishment of young, insulating keratinous hair or fur, three middle ear ossicles, a single dentary-squamosal jaw bone, and a neocortex supporting advanced cognition.",
      bn: "উষ্ণরক্তের অ্যামনিওট মেরুদণ্ডী প্রাণী যাদের মাতৃস্তনে দুধ উৎপন্ন হয়, দেহ চুলে আবৃত, মধ্যকর্ণে তিনটি ক্ষুদ্র অস্থি থাকে, নিম্নচোয়াল একক ডেন্টারি হাড় দিয়ে গঠিত এবং অত্যন্ত উন্নত মস্তিষ্ক বিদ্যমান।"
    },
    diagnosticCharacteristics: {
      en: "Homeothermic endotherms possessing mammary glands for lactation; integument bearing hair/fur composed of alpha-keratin; three auditory middle ear ossicles (malleus, incus, stapes); single dentary bone forming the lower jaw; heterodont and diphyodont dentition; muscular diaphragm separating thoracic and abdominal cavities; four-chambered heart with left aortic arch; enucleated mature erythrocytes.",
      bn: "সন্তানকে স্তন্যপান করানোর জন্য স্তনগ্রন্থি; আলফা-কেরাটিনের চুল বা পশম; মধ্যকর্ণের তিনটি ক্ষুদ্র অস্থি (ম্যালিয়াস, ইনকাস ও স্টেপিস); একক ডেন্টারি হাড়যুক্ত নিম্নচোয়াল; বিভিন্ন আকৃতির দাঁত (ইনসিজর, ক্যানাইন, প্রিমোলার, মোলার); বক্ষ ও উদর গহ্বর পৃথককারী পেশিবহুল ডায়াফ্রাম; নিউক্লিয়াসবিহীন লোহিত রক্তকণিকা এবং বাম মহাধমনীযুক্ত চার-প্রকোষ্ঠবিশিষ্ট হৃদপিণ্ড।",
      keyFeatures: {
        en: [
          "Mammary glands secreting nutritious milk for post-natal maternal care",
          "Hair or fur pelage providing thermal insulation and tactile mechanoreception",
          "Three middle ear ossicles transmitting acoustic vibrations to the inner cochlea",
          "Muscular diaphragm enabling efficient negative-pressure pulmonary ventilation"
        ],
        bn: [
          "মাতৃদুগ্ধ নিঃসরণকারী স্তনগ্রন্থি যা নবজাতকের পুষ্টি ও সুরক্ষা নিশ্চিত করে",
          "দেহের তাপমাত্রা ধরে রাখার জন্য চর্বি ও চুলের ইনসুলেশন আবরণ",
          "শব্দ তরঙ্গ গ্রহণের জন্য মধ্যকর্ণে ম্যালিয়াস, ইনকাস ও স্টেপিস অস্থিত্রয়",
          "শ্বাসগ্রহণের জন্য বক্ষ ও পেটের মাঝে বিশেষায়িত ডায়াফ্রাম পেশি"
        ]
      }
    },
    habitat: {
      en: "Cosmopolitan across terrestrial landmasses, subterranean burrows, arboreal forest canopies, aerial skies (bats), and fully aquatic oceans (cetaceans, sirenians).",
      bn: "সমগ্র পৃথিবী জুড়ে বিস্তৃত: মাটির নিচে, বনভূমির গাছে, আকাশে (বাদুড়) এবং সম্পূর্ণ সাগরের অতল জলে (তিমি, ডলফিন)।",
      systems: ["marine", "freshwater"]
    },
    ecosystem: {
      en: "Apex terrestrial and marine predators (cetaceans, big cats), mega-herbivores shaping forest landscapes (elephants, ungulates), and seed dispersers.",
      bn: "স্থল ও সাগরের শীর্ষ শিকারী (বাঘ, সিংহ, তিমি) এবং বনের গাছপালা ও বাস্তুতন্ত্র পুনর্গঠনে নিয়োজিত মেগা-তৃণভোজী প্রাণী।"
    },
    feeding: {
      en: "Specialized heterodont dentition adapted for precise trophic niches: carnivory, herbivory, frugivory, insectivory, filter-feeding baleen, and omnivory.",
      bn: "খাদ্য অনুযায়ী দাঁতের নিখুঁত পরিবর্তন: শিকারের জন্য ধারালো ক্যানাইন দাঁত, ঘাস চিবানোর জন্য চওড়া মোলার দাঁত এবং তিমিদের জলে খাবার ছাঁকার ব্যালিন প্লেট।"
    },
    reproduction: {
      en: "Internal fertilization; divided into egg-laying Prototheria (monotremes), pouched Metatheria (marsupials), and placental Eutheria characterized by prolonged gestation through a chorioallantoic placenta.",
      bn: "অভ্যন্তরীণ নিষেক; তিনটি শাখা: ডিম পাড়া মোনোট্রিম (প্লাটিপাস), থলিযুক্ত মারসুপিয়াল (ক্যাঙ্গারু), এবং উন্নত অমরাযুক্ত প্ল্যাসেন্টাল প্রাণী (মানুষ, তিমি, বাঘ) যেখানে গর্ভস্থ ভ্রূণ জরায়ুতে পুষ্টি পায়।"
    },
    distribution: {
      en: "Worldwide across all continents and oceans. In Bangladesh, over 120 species inhabit terrestrial forests, haors, rivers, and the Bay of Bengal.",
      bn: "বিশ্বের সকল অঞ্চলে বিস্তৃত। বাংলাদেশে সুন্দরবন, নদী অববাহিকা ও বঙ্গোপসাগরে ১২০টিরও বেশি প্রজাতির স্তন্যপায়ী প্রাণী রয়েছে।"
    },
    importantFamilies: [
      {
        name: "Delphinidae",
        commonEn: "Oceanic & Riverine Dolphins",
        commonBn: "ডলফিন",
        diagnosticEn: "Aquatic odontocete cetaceans with streamlined bodies, echolocation melon, and blowholes (e.g. Orcaella brevirostris)."
      },
      {
        name: "Platanistidae",
        commonEn: "South Asian River Dolphins",
        commonBn: "শুশুক / গাঙ্গেয় ডলফিন",
        diagnosticEn: "Freshwater river cetaceans with elongated forceps-like snouts and side-swimming habits (e.g. Platanista gangetica)."
      },
      {
        name: "Balaenopteridae",
        commonEn: "Rorquals / Baleen Whales",
        commonBn: "তিমি",
        diagnosticEn: "Enormous filter-feeding marine cetaceans with throat pleats and baleen plates (e.g. Balaenoptera musculus)."
      },
      {
        name: "Felidae",
        commonEn: "Cats & Big Cats",
        commonBn: "বিড়াল ও বাঘ গোত্র",
        diagnosticEn: "Hypercarnivorous ambush predators with retractable claws and night vision (e.g. Panthera tigris tigris Royal Bengal Tiger)."
      }
    ],
    scientificNamesSummary: {
      en: "Class Mammalia Linnaeus, 1758; subclass Prototheria (Monotremata) and subclass Theria (infraclass Metatheria / Marsupialia and infraclass Eutheria / Placentalia).",
      bn: "শ্রেণী ম্যামালিয়া Linnaeus, 1758; উপশ্রেণী প্রোটোথেরিয়া (ডিম পাড়া স্তন্যপায়ী) এবং উপশ্রেণী থেরিয়া (মারসুপিয়ালিয়া ও ইউথেরিয়া বা অমরাযুক্ত প্রাণী)।"
    },
    exampleSpeciesIds: [
      "sp-orcaella-brevirostris",
      "sp-platanista-gangetica",
      "sp-balaenoptera-musculus",
      "sp-phoca-vitulina",
      "sp-dugong-dugon"
    ],
    examplesSummary: {
      en: "Verified canonical species in BiotaElite include the Irrawaddy Dolphin (Orcaella brevirostris), Ganges River Dolphin (Platanista gangetica), Blue Whale (Balaenoptera musculus), Harbor Seal (Phoca vitulina), and Dugong (Dugong dugon).",
      bn: "বায়োটাএলিটে যাচাইকৃত স্তন্যপায়ী প্রজাতি: ইরাবতী ডলফিন (Orcaella brevirostris), গাঙ্গেয় শুশুক (Platanista gangetica), নীল তিমি (Balaenoptera musculus), এবং ডুগং (Dugong dugon)।"
    },
    additionalInformation: {
      en: "Marine and aquatic mammals in Bangladesh's Swatch of No Ground submarine canyon and Sundarbans delta are strictly protected under national wildlife acts and CITES Appendix I.",
      bn: "বঙ্গোপসাগরের গভীর সোয়াচ অব নো গ্রাউন্ড সামুদ্রিক সুরক্ষিত অঞ্চল এবং সুন্দরবনের নদী মোহনায় ডলফিন ও তিমির অভয়ারণ্য বাংলাদেশ বন্যপ্রাণী সংরক্ষণ আইনে সর্বোচ্চ সুরক্ষিত।"
    },
    referenceIds: ["ref-kardong-2018", "ref-worms-2024", "ref-linnaeus-1758"],
    authoritySource: "Mammal Diversity Database (MDD 2026) / ASM / WoRMS (2026)",
    verificationStatus: "published",
    publishedStatus: true,
    sections: [
      {
        key: "synapsid_origin",
        titleEn: "1. Synapsid Evolutionary Lineage & Jaw Transformation",
        titleBn: "১. সিন্যাপসিড বিবর্তন ও চোয়ালের হাড়ের রূপান্তর",
        order: 1,
        contentEn: "Mammals arose from non-mammalian synapsid amniotes ('pelycosaurs' and therapsid cynodonts) during the Triassic period (~225 million years ago). The reptilian articular and quadrate jaw bones were progressively miniaturized and decoupled from the jaw joint, migrating into the middle ear to form the malleus and incus, leaving the dentary as the sole bone of the lower jaw.",
        contentBn: "স্তন্যপায়ীরা ট্রায়াসিক যুগে (~২২৫ মিলিয়ন বছর আগে) সাইনোডন্ট সিন্যাপসিড পূর্বপুরুষ থেকে উদ্ভূত হয়। প্রাচীন সরীসৃপের চোয়ালের আর্টিকুলার ও কোয়াড্রেট হাড় ক্ষুদ্রাকার হয়ে মধ্যকর্ণে প্রবেশ করে ম্যালিয়াস ও ইনকাস অস্থিতে রূপান্তরিত হয়, যার ফলে নিম্নচোয়ালে কেবল একক ডেন্টারি হাড় অবশিষ্ট থাকে।",
        references: ["ref-kardong-2018"]
      },
      {
        key: "lactation_hair",
        titleEn: "2. Mammary Glands, Lactation & Hair Thermoregulation",
        titleBn: "২. স্তনগ্রন্থি, দুগ্ধক্ষরণ ও চুলের তাপমাত্রা নিয়ন্ত্রণ",
        order: 2,
        contentEn: "Lactation via specialized mammary glands represents the key energetic innovation of Mammalia, liberating hatchlings or neonates from the immediate need to forage. Hair pelage constructed of alpha-keratin provides effective thermal insulation, water repellency, and specialized sensory whiskers (vibrissae) connected to trigeminal nerve receptors.",
        contentBn: "মাতৃদুগ্ধ নিঃসরণকারী স্তনগ্রন্থির মাধ্যমে শিশুকে দীর্ঘ সময় পুষ্টি ও অ্যান্টিবডি প্রদান করা স্তন্যপায়ী প্রাণীদের অন্যতম প্রধান বিবর্তনীয় সাফল্য। আলফা-কেরাটিনের চুল বা পশম দেহকে শীতে উষ্ণ রাখে এবং গোঁফ বা ভাইব্রিসি সংবেদনশীল ইন্দ্রিয় হিসেবে কাজ করে।",
        references: ["ref-hickman-2020"]
      },
      {
        key: "diaphragm_circulation",
        titleEn: "3. Muscular Diaphragm & High-Pressure Circulation",
        titleBn: "৩. পেশিবহুল ডায়াফ্রাম ও উচ্চ-চাপ রক্ত সংবহন",
        order: 3,
        contentEn: "Ventilation is actively driven by a muscular dome-shaped diaphragm that seals the thoracic cavity from the abdomen, producing high negative tidal pressures. The heart is completely divided into four chambers with a left systemic aortic arch (convergent with the avian right arch), circulating blood with non-nucleated biconcave erythrocytes optimizing surface-to-volume oxygen delivery.",
        contentBn: "স্তন্যপায়ীদের শ্বাসকার্য বক্ষ ও পেটের মাঝে অবস্থিত বিশেষায়িত ডায়াফ্রাম পেশির নড়াচড়ার মাধ্যমে পরিচালিত হয়। এদের চার-প্রকোষ্ঠবিশিষ্ট হৃদপিণ্ডে বাম মহাধমনী থাকে এবং পরিণত লোহিত রক্তকণিকায় কোনো নিউক্লিয়াস না থাকায় তা সর্বাধিক অক্সিজেন পরিবহন করতে পারে।",
        references: ["ref-kardong-2018"]
      },
      {
        key: "subclasses_reproduction",
        titleEn: "4. Major Reproductive Subclasses: Monotremes, Marsupials & Placentals",
        titleBn: "৪. প্রধান প্রজনন উপশ্রেণী: মোনোট্রিম, মারসুপিয়াল ও প্ল্যাসেন্টাল",
        order: 4,
        contentEn: "Extant mammals comprise three reproductive grades: 1. Prototheria / Monotremata (oviparous egg-laying platypus and echidnas); 2. Metatheria / Marsupialia (pouched mammals giving birth to altricial embryos that finish development attached to a teat in the marsupium); 3. Eutheria / Placentalia (possessing complex chorioallantoic placentas supporting prolonged fetal development).",
        contentBn: "তিনটি প্রধান প্রজনন শাখা: ১. মোনোট্রিম (ডিম পাড়া স্তন্যপায়ী, যেমন প্লাটিপাস); ২. মারসুপিয়াল (থলিযুক্ত প্রাণী যেমন ক্যাঙ্গারু, যাদের অপরিণত বাচ্চা থলির ভেতরে স্তনবৃন্ত আঁকড়ে ধরে বড় হয়); ৩. প্ল্যাসেন্টাল বা অমরাযুক্ত স্তন্যপায়ী (যাদের বাচ্চা জরায়ুতে অমরার মাধ্যমে পুষ্টি পেয়ে পূর্ণাঙ্গ রূপে জন্মায়)।",
        references: ["ref-hickman-2020"]
      },
      {
        key: "marine_adaptations",
        titleEn: "5. Aquatic & Marine Mammalian Radiations",
        titleBn: "৫. জলজ ও সামুদ্রিক স্তন্যপায়ীদের রূপান্তর",
        order: 5,
        contentEn: "Terrestrial mammals secondarily recolonized oceanic realms in multiple lineages: Cetacea (dolphins and whales, from artiodactyl ungulates), Sirenia (manatees and dugongs, from afrotherian paenungulates), and Pinnipedia (seals and walruses, from arctoid carnivorans). Adaptations include blubber insulation, tail flukes, dorsal blowholes, dive bradycardia, and echolocation biosonar.",
        contentBn: "স্তন্যপায়ীরা দ্বিতীয় দফায় সমুদ্রে ফিরে গিয়ে রূপ লাভ করে: সিটাসিয়া (তিমি ও ডলফিন), সাইরেনিয়া (ডুগং), এবং পিনিপিডিয়া (সিল ও সিন্ধুঘোটক)। এদের শরীরে পুরু চর্বির ব্ল্যাবার, লেজের ফ্লুক, শ্বাসগ্রহণের জন্য মাথায় ব্লো-হোল এবং শব্দতরঙ্গ দিয়ে শিকার খোঁজার ইকো-লোকেশন ক্ষমতা তৈরি হয়েছে।",
        references: ["ref-worms-2024"]
      }
    ]
  },

  {
    id: "group-protozoa",
    taxonId: "group-protozoa",
    rank: "grade",
    scientificName: "Protozoa (Traditional Educational Assemblage)",
    bengaliName: "প্রোটোজোয়া — সনাতন শিক্ষামূলক গোষ্ঠী",
    englishName: "Protozoa — Traditional Educational Group",
    parentTaxonId: null,
    category: "general",
    canonicalSlug: "protozoa",
    classificationHierarchy: [
      { rank: "domain", name: "Eukaryota", nameBn: "সুকেন্দ্রীক জীব" },
      { rank: "grade", name: "Protozoa (Traditional)", nameBn: "প্রোটোজোয়া (ঐতিহ্যগত গোষ্ঠী)" }
    ],
    shortDescription: {
      en: "Traditional educational grouping of microscopic, unicellular or colonial, non-photosynthetic eukaryotic organisms. Modern cladistic phylogenetics demonstrates that Protozoa is polyphyletic and distributed across multiple independent eukaryotic supergroups (Amoebozoa, Excavata, SAR) rather than a formal animal phylum.",
      bn: "আণুবীক্ষণিক, এককোষী বা কলোনিবদ্ধ সুকেন্দ্রিক জীবের একটি ঐতিহ্যগত শিক্ষামূলক গোষ্ঠী। আধুনিক বংশগতিবিদ্যা ও জাতিজনি প্রমাণ করেছে যে প্রোটোজোয়া কোনো একক প্রাণী পর্ব নয়, বরং একটি পলিফাইলেটিক সমাহার যা বিভিন্ন সুকেন্দ্রিক সুপারগ্রুপে (Amoebozoa, Excavata, SAR) বিস্তৃত।"
    },
    diagnosticCharacteristics: {
      en: "Microscopic unicellular eukaryotes lacking true tissues or cell walls; subcellular organelles performing all vital metabolic functions; motility facilitated by pseudopodia, flagella, or cilia; contractile vacuoles for osmoregulation in freshwater forms; polyphyletic systematic assemblage maintained for pedagogic clarity.",
      bn: "আণুবীক্ষণিক এককোষী সুকেন্দ্রিক জীব যাদের কোনো প্রকৃত কলা বা সেলুলোজ প্রাচীর থাকে না; একটিমাত্র কোষের ভেতরের অঙ্গাণু দ্বারা পুষ্টি, শ্বসন, চলন ও রেচন সম্পন্ন হয়; ক্ষণপদ, ফ্ল্যাজেলা বা সিলিয়ার মাধ্যমে চলন ঘটে; আধুনিক বিজ্ঞানে এটি একটি সনাতন শিক্ষামূলক গোষ্ঠী হিসেবে বিবেচিত।",
      keyFeatures: {
        en: [
          "Complete physiological organism operating within a single cell membrane",
          "Diverse motility organelles: pseudopodia, flagella, cilia, or gliding pellicles",
          "Contractile vacuoles for active osmoregulatory pumping in freshwater habitats",
          "Taxonomic qualification: Polyphyletic educational grade, NOT a modern formal phylum"
        ],
        bn: [
          "একটিমাত্র কোষঝিল্লির ভেতরে সমস্ত শারীরবৃত্তীয় কার্যক্রম পরিচালনাকারী সম্পূর্ণ জীব",
          "চলনের জন্য বৈচিত্র্যময় অঙ্গাণু: ক্ষণপদ (সিউডোপোডিয়া), ফ্ল্যাজেলা, বা সিলিয়া",
          "মিঠাপানির প্রজাতিতে জলসাম্য রক্ষার জন্য সংকোচনশীল গহ্বর (Contractile Vacuole)",
          "শ্রেণীবিন্যাস দ্রষ্টব্য: এটি একটি সনাতন শিক্ষামূলক গোষ্ঠী, আধুনিক প্রাণিজগতের একক পর্ব নয়"
        ]
      }
    },
    habitat: {
      en: "Ubiquitous across limnic ponds, rivers, damp soils, marine coastal sands, and endosymbiotic/parasitic host tissues.",
      bn: "মিঠাপানির পুকুর, নদী, আর্দ্র মাটি, সমুদ্রের বালি এবং প্রাণীদেহের ভেতর পরজীবী হিসেবে সার্বজনীনভাবে বিস্তৃত।",
      systems: ["freshwater", "marine"]
    },
    ecosystem: {
      en: "Fundamental primary consumers of bacteria in aquatic microbial loops, recycling mineral nutrients and serving as essential base food for zooplankton.",
      bn: "জলজ মাইক্রোবিয়াল লুপে ব্যাকটেরিয়া ভক্ষণকারী প্রধান খাদক যা পুষ্টি পুনর্ব্যবহার করে এবং ক্ষুদ্র প্রাণীদের খাদ্য জোগায়।"
    },
    feeding: {
      en: "Holozoic phagocytosis (ingestion of particulate food through cytostome or pseudopodial engulfment), saprozoic pinocytosis, and parasitic nutrient absorption.",
      bn: "ফ্যাগোসাইটোসিস প্রক্রিয়ায় ক্ষণপদ বা সাইটোস্টোম (মুখছিদ্র) দিয়ে খাদ্য কণা গ্রহণ এবং খাদ্য গহ্বরে পাচন।"
    },
    reproduction: {
      en: "Asexual reproduction via binary fission, multiple fission (schizogony), or budding; sexual reproduction via conjugation (ciliates) or syngamy.",
      bn: "অযৌন জননে দ্বি-বিভাজন, বহু-বিভাজন (সাইজোগনি); প্যারামেসিয়ামে বিশেষায়িত কনজুগেশন বা যৌন প্রক্রিয়ায় জিন বিনিময় ঘটে।"
    },
    distribution: {
      en: "Cosmopolitan worldwide across all aquatic and terrestrial ecosystems.",
      bn: "বিশ্বব্যাপী সমস্ত জলজ ও স্থলজ বাস্তুতন্ত্রে সার্বজনীন।"
    },
    importantFamilies: [
      {
        name: "Amoebidae",
        commonEn: "Naked Amoebas",
        commonBn: "অ্যামিবা",
        diagnosticEn: "Unicellular organisms moving via lobose pseudopodia (e.g. Amoeba proteus)."
      },
      {
        name: "Parameciidae",
        commonEn: "Slipper Animalcules",
        commonBn: "প্যারামেসিয়াম",
        diagnosticEn: "Ciliated freshwater protozoans with oral groove and dual macro/micronuclei."
      },
      {
        name: "Plasmodiidae",
        commonEn: "Malarial Parasites",
        commonBn: "ম্যালেরিয়ার জীবাণু",
        diagnosticEn: "Intracellular sporozoans transmitted by anopheline mosquitoes (e.g. Plasmodium vivax)."
      }
    ],
    scientificNamesSummary: {
      en: "Traditional Grade Protozoa Goldfuss, 1818. Modern eukaryotic classification disassembles this historical grouping across supergroups Amoebozoa, Excavata, and SAR (Stramenopiles, Alveolates, Rhizaria).",
      bn: "ঐতিহ্যগত গ্রেড প্রোটোজোয়া Goldfuss, 1818। আধুনিক শ্রেণীবিন্যাসে এই প্রাণীদের অ্যামিবোজোয়া, এক্সকাভাটা এবং সার (SAR) সুপারগ্রুপে বিভক্ত করা হয়েছে।"
    },
    exampleSpeciesIds: [],
    examplesSummary: {
      en: "Classical textbook reference organisms include Amoeba proteus, Paramecium caudatum, Euglena viridis, and Plasmodium vivax.",
      bn: "পাঠ্যপুস্তকের প্রামাণ্য উদাহরণ: অ্যামিবা (Amoeba proteus), প্যারামেসিয়াম (Paramecium caudatum), ইউগ্লিনা (Euglena viridis) এবং প্লাজমোডিয়াম (Plasmodium vivax)।"
    },
    additionalInformation: {
      en: "Educational Notice: BiotaElite presents Protozoa strictly as a traditional educational reference group for classical zoology learning. It is not placed in the formal modern Animalia phylum hierarchy.",
      bn: "শিক্ষামূলক দ্রষ্টব্য: বায়োটাএলিট ঐতিহ্যগত প্রাণিবিজ্ঞান শিক্ষার সুবিধার্থে প্রোটোজোয়াকে একটি শিক্ষামূলক গোষ্ঠী হিসেবে উপস্থাপন করে। আধুনিক প্রাণী পর্ব হিসেবে এটিকে অন্তর্ভুক্ত করা হয়নি।"
    },
    referenceIds: ["ref-hickman-2020", "ref-ruppert-2004"],
    authoritySource: "Cavalier-Smith (2010) / Adl et al. (2019) Revisions to the Classification of Eukaryotes",
    verificationStatus: "published",
    publishedStatus: true,
    sections: [
      {
        key: "systematic_qualification",
        titleEn: "1. Systematic Status: Obsolete Phylum vs Modern Supergroups",
        titleBn: "১. শ্রেণীবিন্যাসীয় মর্যাদা: সনাতন ধারণা বনাম আধুনিক সুপারগ্রুপ",
        order: 1,
        contentEn: "In 19th and 20th century classical zoology curricula (Goldfuss, 1818; Haeckel, 1866), 'Protozoa' was taught as the first phylum of Kingdom Animalia. Modern phylogenomics based on multigene sequencing has overturned this view. Protozoa is recognized as an artificial polyphyletic assemblage: its members share a unicellular grade of organization but do not share an exclusive common ancestor. Modern protistan taxonomy places these organisms into distinct eukaryotic supergroups: Amoebozoa (amoebas), Excavata (flagellates like Euglena and Giardia), and SAR (Stramenopiles, Alveolates including ciliates and Plasmodium, and Rhizaria).",
        contentBn: "ঊনবিংশ ও বিংশ শতাব্দীর সনাতন পাঠ্যসূচিতে প্রোটোজোয়াকে প্রাণিজগতের প্রথম পর্ব হিসেবে পড়ানো হতো। তবে আধুনিক জিনোম সিকোয়েন্সিং প্রমাণ করেছে যে প্রোটোজোয়া কোনো একক পূর্বপুরুষ থেকে সৃষ্ট স্বাভাবিক পর্ব নয়, বরং একটি পলিফাইলেটিক সমাহার। আধুনিক বিজ্ঞানে এদেরকে পৃথক সুকেন্দ্রিক সুপারগ্রুপে শ্রেণীবদ্ধ করা হয়: অ্যামিবোজোয়া (ক্ষণপদধারী অ্যামিবা), এক্সকাভাটা (ফ্ল্যাজেলাধারী ইউগ্লিনা ও জিয়ার্ডিয়া), এবং সার (সিলিয়াধারী প্যারামেসিয়াম ও ম্যালেরিয়ার প্লাজমোডিয়াম)।",
        references: ["ref-hickman-2020"]
      },
      {
        key: "unicellular_physiology",
        titleEn: "2. Unicellular Complexity & Functional Organelles",
        titleBn: "২. এককোষের ভেতরে সমগ্র জীবনের শারীরবৃত্তীয় সংগঠন",
        order: 2,
        contentEn: "Despite being single-celled, a protozoan is not homologous to an individual metazoan cell; it is an autonomous, complete organism. Within a solitary plasmalemma, specialized subcellular organelles perform all physiological life functions: cytostome (cellular mouth), cytopyge (cell anus), food vacuoles for intracellular digestion, contractile vacuoles for active hypoosmotic water pumping, and dual macro/micronuclei in ciliates.",
        contentBn: "এককোষী হওয়া সত্ত্বেও প্রোটোজোয়া বহুকোষী প্রাণীর সাধারণ কোষের মতো নয়; এটি একটি স্বয়ংসম্পূর্ণ জীবদেহ। একটিমাত্র কোষঝিল্লির ভেতর সাইটোস্টোম (মুখ), সাইটোপাইজ (পায়ু), খাদ্য গহ্বর, জলসাম্য নিয়ন্ত্রক সংকোচনশীল গহ্বর এবং সিলিয়েটদের ক্ষেত্রে দ্বৈত নিউক্লিয়াস সমস্ত জটিল কাজ সম্পন্ন করে।",
        references: ["ref-ruppert-2004"]
      },
      {
        key: "locomotion_types",
        titleEn: "3. Locomotion Diversity (Pseudopodia, Cilia & Flagella)",
        titleBn: "৩. চলন অঙ্গাণুর প্রকারভেদ: ক্ষণপদ, সিলিয়া ও ফ্ল্যাজেলা",
        order: 3,
        contentEn: "Locomotion reflects four classical functional groupings: 1. Amoeboid: streaming of cytoplasm (ectoplasm and endoplasm) forming temporary blunt lobopodia or slender filopodia (e.g. Amoeba); 2. Flagellated: whip-like undulations of 9+2 microtubular flagella (e.g. Euglena); 3. Ciliated: rhythmic metachronal waves of thousands of coordinated cilia (e.g. Paramecium); 4. Sporozoans: non-motile parasitic stages utilizing apical gliding complexes (e.g. Plasmodium).",
        contentBn: "চলন অঙ্গের ওপর ভিত্তি করে চারটি প্রধান ধারা: ১. অ্যামিবয়েড: সাইটোপ্লাজমের প্রবাহে ক্ষণপদ তৈরি (যেমন অ্যামিবা); ২. ফ্ল্যাজেলেট: চাবুকের মতো ফ্ল্যাজেলার আন্দোলন (যেমন ইউগ্লিনা); ৩. সিলিয়েট: হাজার হাজার সিলিয়ার সুসংহত ছান্দিক আন্দোলন (যেমন প্যারামেসিয়াম); ৪. স্পোরোজোয়া: চলনহীন পরজীবী যারা হোস্টের কোষে প্রবেশ করে (যেমন ম্যালেরিয়ার প্লাজমোডিয়াম)।",
        references: ["ref-hickman-2020"]
      },
      {
        key: "medical_ecological",
        titleEn: "4. Ecological Food Web Roles & Medical Parasitology",
        titleBn: "৪. খাদ্যজালে ভূমিকা ও মানবদেহে পরজীবী হিসেবে গুরুত্ব",
        order: 4,
        contentEn: "Ecologically, protozoans drive the aquatic microbial loop, grazing on bacteria and recycling nitrogen and phosphorus into primary producers. Medically, parasitic protozoans cause devastating global diseases, notably malaria (Plasmodium falciparum and P. vivax transmitted by female Anopheles mosquitoes), amoebic dysentery (Entamoeba histolytica), and leishmaniasis / Kala-azar (Leishmania donovani transmitted by sandflies in South Asia).",
        contentBn: "পরিবেশে এরা ব্যাকটেরিয়া খেয়ে পুষ্টি চক্র সচল রাখে। চিকিৎসাবিজ্ঞানে বহু মারাত্মক রোগের জন্য পরজীবী প্রোটোজোয়ারা দায়ী: অ্যানোফিলিস মশা বাহিত ম্যালেরিয়া (প্লাজমোডিয়াম), অ্যামিবিক আমাশয় (এন্টঅ্যামিবা হিস্টোলাইটিকা), এবং বেলেমাছি বাহিত কালাজ্বর (লেইশম্যানিয়া ডনোভানি)।",
        references: ["ref-hickman-2020"]
      }
    ]
  }
];

module.exports = { updates, newRecords };
