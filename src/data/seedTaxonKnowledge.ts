import type { TaxonKnowledgeRecord } from '../types/biodiversity';

export const SEED_TAXON_KNOWLEDGE: TaxonKnowledgeRecord[] = [
  {
    "id": "group-fishes",
    "taxonId": "taxon-fishes",
    "rank": "grade",
    "scientificName": "Pisces",
    "bengaliName": "মাছসমূহ (ফিশেস)",
    "englishName": "Fishes / Pisces",
    "parentTaxonId": "taxon-chordata",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "grade",
        "name": "Pisces",
        "nameBn": "মাছসমূহ"
      }
    ],
    "shortDescription": {
      "en": "Diverse aquatic gill-bearing craniate vertebrates lacking limbs with digits, spanning jawless fishes (Agnatha), cartilaginous fishes (Chondrichthyes), and bony fishes (Osteichthyes).",
      "bn": "ফুলকাযুক্ত ও আঙুলবিহীন পাখনাধারী জলজ ক্রেনিয়েট মেরুদণ্ডী প্রাণী, যার মধ্যে চোয়ালবিহীন মাছ (অ্যাগনাথা), তরুণাস্থিময় মাছ (কনড্রিকথিস) এবং অস্থিময় মাছ (অস্টিকথিস) অন্তর্ভুক্ত।"
    },
    "diagnosticCharacteristics": {
      "en": "Aquatic poikilothermic craniates possessing gills for respiration throughout ontogeny, locomotion facilitated by median and paired fins supported by dermal rays, sensory lateral line system, and specialized osmoregulatory organs.",
      "bn": "জলজ শীতলরক্তের মেরুদণ্ডী প্রাণী যাদের আজীবন শ্বাসকার্যের জন্য ফুলকা থাকে, চর্মীয় রশ্মিযুক্ত যুগ্ম ও অযুগ্ম পাখনা দ্বারা সন্তরণ হয়, পার্শ্বরেখা সংবেদী অঙ্গ এবং অভিস্রবণ নিয়ন্ত্রণকারী বিশেষায়িত অঙ্গ বিদ্যমান।",
      "keyFeatures": {
        "en": [
          "Permanent branchial apparatus (gills) for aquatic gas exchange",
          "Locomotion via muscular undulation and membranous/rayed fins",
          "Hydrodynamic scale-covered integument with lateral line mechanoreception",
          "Two-chambered branchial heart (one atrium, one ventricle)"
        ],
        "bn": [
          "জলে গ্যাসীয় বিনিময়ের জন্য স্থায়ী ফুলকা কাঠামো",
          "পেশিবহুল আন্দোলন ও পাখনার সাহায্যে সন্তরণ",
          "আঁইশযুক্ত ত্বক এবং পার্শ্বরেখা সংবেদন ব্যবস্থা",
          "দ্বি-প্রকোষ্ঠবিশিষ্ট ফুলকা-সংবহন সংবহন হৃদপিণ্ড"
        ]
      }
    },
    "habitat": {
      "en": "Inhabits all aquatic biomes globally from high-altitude montane streams to hadal ocean trenches exceeding 8,000 meters depth.",
      "bn": "উচ্চ পার্বত্য হিমশীতল নদী থেকে শুরু করে ৮,০০০ মিটারেরও বেশি গভীর সমুদ্রের খাদ পর্যন্ত বিশ্বের সকল জলজ পরিবেশে বিস্তৃত।"
    },
    "ecosystem": {
      "en": "Foundational apex, mesopredator, and primary consumer keystones across marine, estuarine, and freshwater food webs globally.",
      "bn": "বিশ্বের সামুদ্রিক, মোহনা ও স্বাদু পানির খাদ্যজালে শীর্ষ শিকারী, মধ্যবর্তী খাদক এবং প্রাথমিক খাদ্য উৎসের প্রধান চালিকাশক্তি।"
    },
    "feeding": {
      "en": "Remarkable trophic breadth ranging from microscopic filter feeding and herbivory to apex macrophagy and ambush predation.",
      "bn": "মাইক্রোস্কোপিক ফিল্টার ফিডিং এবং তৃণভোজিতা থেকে শুরু করে শীর্ষ শিকার ও অতর্কিত আক্রমণকারী বিভিন্ন খাদ্যাভ্যাস।"
    },
    "reproduction": {
      "en": "Extreme reproductive diversity: oviparity with broadcast spawning, ovoviviparity, and advanced placental viviparity.",
      "bn": "অত্যন্ত বৈচিত্র্যময় প্রজনন: বহিঃনিষেকসহ ডিম্বপ্রসব, ডিম্ব-জরায়ুজ প্রজনন এবং উন্নত অমরাযুক্ত জরায়ুজ প্রসব।"
    },
    "distribution": {
      "en": "Cosmopolitan across all oceans, seas, coastal estuaries, river basins, and freshwater wetlands globally.",
      "bn": "বিশ্বের সমস্ত মহাসাগর, সমুদ্র, উপকূলীয় মোহনা, নদী অববাহিকা এবং মিঠা পানির জলাভূমিতে সার্বজনীনভাবে বিস্তৃত।"
    },
    "importantFamilies": [
      {
        "name": "Myxinidae",
        "commonEn": "Hagfishes",
        "commonBn": "হ্যাগফিশ"
      },
      {
        "name": "Carcharhinidae",
        "commonEn": "Requiem Sharks",
        "commonBn": "হাঙর"
      },
      {
        "name": "Cyprinidae",
        "commonEn": "Carps and Minnows",
        "commonBn": "কার্প মাছ"
      }
    ],
    "scientificNamesSummary": {
      "en": "Grade Pisces Linnaeus, 1758; comprising superclasses Agnatha, Chondrichthyes, and Osteichthyes.",
      "bn": "গ্রেড পিসেস লিনিয়াস, ১৭৫৮; যার অন্তর্গত সুপারক্লাস অ্যাগনাথা, কনড্রিকথিস এবং অস্টিকথিস।"
    },
    "exampleSpeciesIds": [
      "sp-tenualosa-ilisha",
      "sp-labeo-rohita",
      "sp-chiloscyllium-indicum",
      "sp-latimeria-chalumnae"
    ],
    "examplesSummary": {
      "en": "Iconic examples include Tenualosa ilisha (Hilsa), Labeo rohita (Rui), and Chiloscyllium indicum (Ridge-back catshark).",
      "bn": "উল্লেখযোগ্য উদাহরণ: তেনুয়ালোসা ইলিশা (ইলিশ), লাবেও রোহিতা (রুই), এবং কাইলোসিলিয়াম ইন্ডিকাম (পাকপাটি হাঙর)।"
    },
    "additionalInformation": {
      "en": "Modern phylogenetic classifications emphasize Pisces as an evolutionary grade rather than a monophyletic clade, recognizing its three primary extant lineages: Agnatha, Chondrichthyes, and Osteichthyes.",
      "bn": "আধুনিক ফাইলোজেনেটিক শ্রেণীবিন্যাস পিসেসকে একটি একক ক্ল্যাড না বলে বিবর্তনীয় গ্রেড হিসেবে গণ্য করে, যার তিনটি প্রধান জীবিত শাখা হলো অ্যাগনাথা, কনড্রিকথিস এবং অস্টিকথিস।"
    },
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Eschmeyer's Catalog of Fishes (2026); Nelson et al. (2016) Fishes of the World (5th ed.)",
    "verificationStatus": "published",
    "publishedStatus": true,
    "canonicalSlug": "fishes",
    "sections": [
      {
        "key": "classification",
        "titleEn": "1. Classification & Evolutionary Grade Definition",
        "titleBn": "১. শ্রেণীবিন্যাস ও বিবর্তনীয় গ্রেড সংজ্ঞা",
        "order": 1,
        "contentEn": "Pisces is a diverse paraphyletic grade of aquatic, gill-bearing craniate vertebrates lacking limbs with digits. Historically encompassing all non-tetrapod jawless, cartilaginous, and bony craniates, modern cladistic taxonomy treats fishes across distinct lineages: Agnatha (jawless cyclostomes), Chondrichthyes (cartilaginous elasmobranchs and holocephalans), and Osteichthyes (ray-finned Actinopterygii and lobe-finned Sarcopterygii from which tetrapods arose).",
        "contentBn": "মাছসমূহ (Pisces) হলো একটি অত্যন্ত বৈচিত্র্যময় প্যারাফাইলেটিক গ্রেডভুক্ত জলজ ফুলকাযুক্ত ক্রেনিয়েট মেরুদণ্ডী প্রাণী যাদের কোনো আঙুলযুক্ত অঙ্গ নেই। আধুনিক ক্ল্যাডিস্টিক শ্রেণীবিন্যাসে মাছকে পৃথক প্রধান বংশধারায় বিভক্ত করা হয়: অ্যাগনাথা (চোয়ালবিহীন সাইক্লোস্টোম), কনড্রিকথিস (তরুণাস্থিময় হাঙর ও শাপলাপাতা মাছ) এবং অস্টিকথিস (কন্টকময় পাখনাযুক্ত অ্যাক্টিনোপ্টেরিগি ও মাংসল পাখনাযুক্ত সারকোপ্টেরিগি)।",
        "references": [
          "ref-nelson-2016",
          "ref-kardong-2018"
        ]
      },
      {
        "key": "locomotion",
        "titleEn": "2. Locomotion, Fin Dynamics & Hydrodynamic Propulsion",
        "titleBn": "২. সন্তরণ, পাখনার গতিবিজ্ঞান ও জলগতিশীল চলন",
        "order": 2,
        "contentEn": "Locomotion is primarily accomplished through sequential waves of lateral contraction in segmented axial musculature (myomeres), transmitted to a flexible caudal fin for forward thrust. Median fins (dorsal, anal) provide yaw and roll stability, while paired pectoral and pelvic fins act as hydroplanes for pitch control, steering, and braking. Body morphology ranges from streamlined fusiform pursuit hunters to laterally compressed reef dwellers and dorsoventrally flattened benthic skates.",
        "contentBn": "মাছের প্রধান সন্তরণ পরিচালিত হয় অক্ষীয় মায়োমের পেশির তরঙ্গের মাধ্যমে, যা পুচ্ছ পাখনার সাহায্যে সামনের দিকে ঘাত বা থ্রাস্ট তৈরি করে। অযুগ্ম পাখনা (পৃষ্ঠীয়, পায়ু) ঘূর্ণন ও ভারসাম্য বজায় রাখে, আর যুগ্ম বক্ষ ও শ্রোণী পাখনা দিক পরিবর্তন, ওঠানামা ও ব্রেকিংয়ে হাইড্রোফয়েল হিসেবে কাজ করে।",
        "references": [
          "ref-hickman-2020"
        ]
      },
      {
        "key": "respiration",
        "titleEn": "3. Branchial Gas Exchange & Counter-Current Flow",
        "titleBn": "৩. ফুলকা দ্বারা গ্যাসীয় বিনিময় ও বিপরীতমুখী সংবহন পদ্ধতি",
        "order": 3,
        "contentEn": "Aquatic respiration operates via branchial arches supporting delicate secondary lamellae. Water enters through the mouth and flows across lamellae in opposite direction to intra-capillary blood flow. This counter-current oxygen exchange mechanism maintains a concentration gradient along the entire lamellar surface, extracting up to 80-85% of dissolved oxygen from water, supported by dual buccal-opercular pressure pumping.",
        "contentBn": "ফুলকা আর্চ এবং সূক্ষ্ম সেকেন্ডারি ল্যামেলির মাধ্যমে শ্বাসকার্য সম্পন্ন হয়। ফুলকার কৈশিক জালিকার রক্ত প্রবাহের ঠিক বিপরীত দিকে জল প্রবাহিত হয়। এই বিপরীতমুখী সংবহন (কাউন্টার-কারেন্ট এক্সচেঞ্জ) পদ্ধতির ফলে জল থেকে প্রায় ৮০-৮৫% দ্রবীভূত অক্সিজেন রক্তে শোষিত হতে পারে।",
        "references": [
          "ref-kardong-2018"
        ]
      },
      {
        "key": "osmoregulation",
        "titleEn": "4. Osmoregulation & Excretory Dynamics",
        "titleBn": "৪. অভিস্রবণ নিয়ন্ত্রণ ও রেচন কৌশল",
        "order": 4,
        "contentEn": "Freshwater fishes are hyperosmotic to their hypoosmotic environment; they face constant water influx and ion loss, resolved by producing large volumes of dilute urine via glomerular kidneys and actively pumping Na+ and Cl- ions across gill chloride cells. Marine teleosts are hypoosmotic, continuously losing water; they drink seawater, produce minimal concentrated urine, and actively pump excess monovalent ions out across specialized gill cells. Marine elasmobranchs retain urea and TMAO in tissues to maintain near-isosmotic equilibrium with seawater.",
        "contentBn": "মিঠাপানির মাছ তাদের পরিবেশের তুলনায় হাইপারঅসমোটিক; ক্রমাগত জল প্রবেশের বিরুদ্ধে তারা বৃক্কের মাধ্যমে প্রচুর লঘু মূত্র ত্যাগ করে এবং ফুলকার ক্লোরাইড কোষ দিয়ে আয়ন শোষণ করে। সামুদ্রিক মাছ জল হারানোর হাত থেকে বাঁচতে সমুদ্রের জল পান করে ও ফুলকা দিয়ে অতিরিক্ত লবণ নিষ্কাশন করে। হাঙর ও রে মাছ রক্তে ইউরিয়া ও TMAO ধরে রেখে ভারসাম্য বজায় রাখে।",
        "references": [
          "ref-hickman-2020"
        ]
      },
      {
        "key": "sensory",
        "titleEn": "5. Sensory Innovations: Lateral Line & Electroreception",
        "titleBn": "৫. সংবেদী বিশেষায়ন: পার্শ্বরেখা ও তড়িৎ-সংবেদন",
        "order": 5,
        "contentEn": "Fishes possess unique mechanoreceptive acoustico-lateralis systems. Subdermal lateral line canals containing hair-cell neuromasts detect subtle hydrodynamic pressure waves and displacement currents, coordinating schooling, collision avoidance, and prey orientation. Elasmobranchs further utilize ampullae of Lorenzini—mucus-filled jelly electroreceptor pits capable of sensing microvolt-level bioelectric fields generated by buried benthic prey.",
        "contentBn": "মাছের পার্শ্বরেখা ব্যবস্থা সাবডার্মাল ক্যানাল ও নিউরোমাস্ট হেয়ার-সেলের সমন্বয়ে গঠিত, যা জলের সূক্ষ্ম চাপ তরঙ্গ ও কম্পন শনাক্ত করে শিকার ও দলের গতি সমন্বয় করে। হাঙর ও রে মাছে লরেঞ্জিনির অ্যাম্পুলা নামক জেলিযুক্ত তড়িৎ-সংবেদী অঙ্গ থাকে, যা বালির নিচে লুকিয়ে থাকা শিকারের ক্ষুদ্র জৈব-বৈদ্যুতিক সংকেত পর্যন্ত শনাক্ত করতে পারে।",
        "references": [
          "ref-kardong-2018"
        ]
      },
      {
        "key": "buoyancy",
        "titleEn": "6. Swim Bladder & Buoyancy Regulation",
        "titleBn": "৬. পটকা (সুইম ব্লাডার) ও প্লবতা নিয়ন্ত্রণ",
        "order": 6,
        "contentEn": "Hydrostatic equilibrium in teleosts is maintained by the gas-filled swim bladder, derived embryonically as an outpocketing of the foregut. Physostomous fishes retain an open pneumatic duct connecting to the esophagus, gulping air at the surface. Advanced physoclistous teleosts lack a duct, regulating gas volume via the rete mirabile gas gland and resorption in the oval body.",
        "contentBn": "টেলিওস্ট মাছে অগ্র পৌষ্টিকনালী থেকে সৃষ্ট গ্যাসপূর্ণ পটকা প্লবতা নিয়ন্ত্রণ করে। ফাইসোস্টোমাস মাছে পটকাটি খাদ্যনালীর সাথে নিউম্যাটিক নালী দ্বারা যুক্ত থাকে। উন্নত ফাইসোক্লিস্টাস মাছে এই নালী থাকে না; তারা রেটে মিরাবিল গ্যাস গ্রন্থির মাধ্যমে রক্ত থেকে সরাসরি পটকায় গ্যাস সরবরাহ ও শোষণ করে।",
        "references": [
          "ref-nelson-2016"
        ]
      },
      {
        "key": "reproduction",
        "titleEn": "7. Reproductive Diversity & Life History Strategies",
        "titleBn": "৭. প্রজনন বৈচিত্র্য ও জীবন ইতিহাস কৌশল",
        "order": 7,
        "contentEn": "Remarkable reproductive strategies span broadcast spawning of millions of pelagic eggs (e.g. Clupeiformes), demersal adhesive nest-guarding (e.g. Cichliformes, Siluriformes), external mouth-brooding, ovoviviparity with intra-uterine egg development, and advanced placental viviparity in carcharhinid sharks with umbilical cord nourishment.",
        "contentBn": "মাছের প্রজনন প্রক্রিয়ায় অসাধারণ বৈচিত্র্য বিদ্যমান: লাখ লাখ ডিম্বাণু মুক্ত জলে ভাসিয়ে দেওয়া (ইলিশ), বাসা বানিয়ে ডিম পাহারা দেওয়া (শিং, মাগুর, টেংরা), মুখের ভেতরে ডিম তা দেওয়া, এবং হাঙরে প্রকৃত অমরাযুক্ত জরায়ুজ প্রসব যেখানে প্লাসেন্টার মাধ্যমে ভ্রূণ পুষ্টি লাভ করে।",
        "references": [
          "ref-nelson-2016"
        ]
      },
      {
        "key": "ecosystem_economic",
        "titleEn": "8. Global Fisheries, Ecosystem Roles & Bangladesh Context",
        "titleBn": "৮. বৈশ্বিক মৎস্যসম্পদ, বাস্তুতান্ত্রিক গুরুত্ব ও বাংলাদেশ প্রেক্ষাপট",
        "order": 8,
        "contentEn": "Fishes underpin planetary marine and freshwater trophic webs as apex predators, mesocarnivores, and primary planktivores. Economically, wild fisheries and aquaculture yield over 180 million tons globally. In Bangladesh, fishes provide approximately 60% of national animal protein consumption, with iconic anadromous species like the Hilsa (Tenualosa ilisha) contributing over 12% of total national fish production and sustaining half a million coastal fishers.",
        "contentBn": "মাছ পৃথিবীর সমস্ত জলজ খাদ্যজালের শীর্ষ ও মধ্যবর্তী ভিত্তি। অর্থনৈতিকভাবে বাংলাদেশে জনগণের প্রাণীজ আমিষের প্রায় ৬০% সরবরাহ আসে মাছ থেকে। জাতীয় মাছ ইলিশ (Tenualosa ilisha) দেশের মোট মৎস্য উৎপাদনের ১২ শতাংশেরও বেশি অবদান রাখে এবং উপকূলীয় লক্ষ লক্ষ জেলের জীবিকার প্রধান মাধ্যম।",
        "references": [
          "ref-rahman-2005",
          "ref-iucn-bd-2015"
        ]
      }
    ]
  },
  {
    "id": "group-agnatha",
    "taxonId": "taxon-agnatha",
    "rank": "superclass",
    "scientificName": "Agnatha",
    "bengaliName": "চোয়ালবিহীন মাছ (অ্যাগনাথা)",
    "englishName": "Jawless Fishes",
    "parentTaxonId": "taxon-fishes",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "subphylum",
        "name": "Craniata",
        "nameBn": "ক্রেনিয়াটা"
      },
      {
        "rank": "superclass",
        "name": "Agnatha",
        "nameBn": "চোয়ালবিহীন মাছ"
      }
    ],
    "shortDescription": {
      "en": "Primitive jawless craniate aquatic vertebrates comprising living hagfishes (Myxini) and lampreys (Petromyzontida). They lack true jaws, paired fins, and scales, retaining a persistent notochord throughout life.",
      "bn": "আদিম চোয়ালবিহীন করোটিকাধারী জলজ মেরুদণ্ডী প্রাণী, যার অন্তর্ভুক্ত জীবিত হ্যাগফিশ (মিক্সিনি) ও ল্যাম্প্রে (পেট্রোমাইজন্টিডা)। এদের প্রকৃত চোয়াল, যুগ্ম পাখনা এবং আঁইশ নেই; আজীবন স্থিতিস্থাপক নটোকর্ড বজায় থাকে।"
    },
    "diagnosticCharacteristics": {
      "en": "Absence of true articulated jaws (mouth round or slit-like, surrounded by keratinized rasps or sensory tentacles); endoskeleton cartilaginous or non-ossified fibrous tissue; complete absence of paired pectoral or pelvic girdles/fins; body eel-like and scaleless with abundant epidermal slime glands in Myxini; single median nostril or nasohypophyseal aperture; 1 to 16 pairs of external gill pores.",
      "bn": "প্রকৃত সংযোগযুক্ত চোয়ালের অনুপস্থিতি (মুখগোলাকার বা চিরুনি-সদৃশ, ক্যারোটিনাস দাঁত বা শুঙ্গযুক্ত); তরুণাস্থিময় বা তন্তুময় অন্তঃকঙ্কাল; যুগ্ম বক্ষ বা শ্রোণী পাখনার অনুপস্থিতি; আঁইশহীন সর্পিল দেহ এবং মিক্সিনিতে প্রচুর শ্লেষ্মা গ্রন্থির উপস্থিতি; একক মধ্যম নাসারন্ধ্র; ১ থেকে ১৬ জোড়া ফুলকা ছিদ্র।",
      "keyFeatures": {
        "en": [
          "Complete absence of jaws (mouth circular or suction-adapted with horny teeth)",
          "Absence of paired fins and pectoral/pelvic girdles",
          "Persistent unconstricted notochord lacking complete vertebral centra",
          "Single median nostril opening into olfactory and hypophyseal apparatus",
          "Eel-like scaleless body with copious mucus secretion in hagfishes"
        ],
        "bn": [
          "প্রকৃত চোয়ালের সম্পূর্ণ অনুপস্থিতি (গোলাকার চোষক মুখ বা শৃঙ্গীয় দাঁতযুক্ত)",
          "যুগ্ম পাখনা ও বক্ষ/শ্রোণী চক্রের অনুপস্থিতি",
          "আজীবন নটোকর্ডের স্থায়িত্ব ও সম্পূর্ণ কশেরুকার অনুপস্থিতি",
          "একক মধ্যম নাসারন্ধ্র",
          "আঁইশহীন সর্পিল দেহ এবং হ্যাগফিশে প্রচুর মিউকাস ক্ষরণ"
        ]
      }
    },
    "habitat": {
      "en": "Marine benthic ocean trenches, continental slopes, and cold-temperate continental shelves (Hagfishes); anadromous coastal marine and temperate freshwater rivers and streams (Lampreys).",
      "bn": "গভীর সমুদ্রের কর্দমাক্ত তলদেশ, মহীঢাল ও মহীসোপান (হ্যাগফিশ); পরিযায়ী উপকূলীয় সমুদ্র এবং নাতিশীতোষ্ণ মিঠাপানির নদী ও পাহাড়ি ঝর্ণা (ল্যাম্প্রে)।",
      "systems": [
        "marine",
        "freshwater"
      ]
    },
    "ecosystem": {
      "en": "Hagfishes function as critical benthic scavengers and detritivores, consuming decaying whale falls and carrion on the ocean floor to accelerate deep-sea nutrient cycling. Lampreys act as ectoparasitic predators or micropredators on larger pelagic teleosts and elasmobranchs, as well as stream filter-feeders in their ammocoete larval stage.",
      "bn": "হ্যাগফিশ সমুদ্রের তলদেশের মৃত তিমি ও পচনশীল দেহাবশেষ খেয়ে গভীর সমুদ্রের পুষ্টি চক্র বজায় রাখে। ল্যাম্প্রে উন্মুক্ত সমুদ্রের বড় মাছের গায়ে চোষক লাগিয়ে রক্ত ও দেহরস চুষে খায় এবং এদের অ্যামোসিট লার্ভা মিঠাপানির তলদেশে মাইক্রো-ফিল্টার ফিডার হিসেবে কাজ করে।"
    },
    "feeding": {
      "en": "Hagfishes are opportunistic scavengers and benthic carnivores utilizing a protractible dental plate with dual rows of horny keratin teeth and tying themselves into overhand knots for leverage while tearing flesh. Adult lampreys use a circular oral suction disk with rasplike horny teeth to attach to host fish and ingest blood and fluids; ammocoetes feed on diatoms and detritus.",
      "bn": "হ্যাগফিশ মৃত ও অসুস্থ প্রাণীর দেহ ছিঁড়ে খাওয়ার জন্য মুখের ক্যারোটিন দাঁত ও দেহে গিঁট বাঁধার কৌশল ব্যবহার করে। প্রাপ্তবয়স্ক ল্যাম্প্রে চোষক মুখের সাহায্যে বড় মাছের ত্বকে আটকে থেকে রক্ত ও তরল খাদ্য গ্রহণ করে; এদের লার্ভা ডায়াটম ও জৈব কণা গ্রহণ করে।"
    },
    "reproduction": {
      "en": "External fertilization. Hagfishes lay large, yolky eggs enclosed in tough horny shells with hooked anchoring filaments, bypassing a larval stage. Lampreys are semelparous (spawning once and dying) in gravel nests of clear rivers; eggs hatch into blind ammocoete filter-feeding larvae that undergo metamorphosis after 3 to 7 years.",
      "bn": "বাহ্যিক নিষেক। হ্যাগফিশ শক্ত খোলসযুক্ত ও হুকযুক্ত বড় কুসুমময় ডিম পাড়ে এবং কোনো লার্ভা দশা নেই। ল্যাম্প্রে নদী বা ঝর্ণার নুড়িপাথরে বাসা তৈরি করে ডিম পাড়ে এবং প্রজনন শেষেই মারা যায়; ডিম ফুটে অ্যামোসিট লার্ভা বের হয় যা ৩-৭ বছর পর রূপান্তরিত হয়।"
    },
    "distribution": {
      "en": "Widespread across temperate and subpolar marine waters of the Atlantic, Pacific, and Southern oceans. Hagfishes range from shallow cold shelves to abyssal depths over 5,000 meters. Lampreys inhabit North and South temperate zones. Strictly zero native verified occurrences in Bangladesh tropical inland or coastal waters.",
      "bn": "বিশ্বের নাতিশীতোষ্ণ ও শীতল মহাসাগরে বিস্তৃত। হ্যাগফিশ অগভীর শীতল সমুদ্র থেকে শুরু করে ৫,০০০ মিটারেরও বেশি গভীরে বাস করে। ল্যাম্প্রে উত্তর ও দক্ষিণ নাতিশীতোষ্ণ অঞ্চলে সীমিত। বাংলাদেশের গ্রীষ্মমন্ডলীয় অভ্যন্তরীণ নদী বা বঙ্গোপসাগরের জলসীমায় কোনো জীবিত দেশীয় প্রজাতি নেই।"
    },
    "importantFamilies": [
      {
        "name": "Myxinidae",
        "commonEn": "Hagfishes",
        "commonBn": "হ্যাগফিশ গোত্র",
        "diagnosticEn": "Jawless, single nostril, 1 to 16 pairs of gill apertures, abundant slime pores along body.",
        "diagnosticBn": "চোয়ালহীন, একক নাসারন্ধ্র, ১-১৬ জোড়া ফুলকা ছিদ্র এবং প্রচুর শ্লেষ্মা রন্ধ্র।"
      },
      {
        "name": "Petromyzontidae",
        "commonEn": "Northern Lampreys",
        "commonBn": "ল্যাম্প্রে গোত্র",
        "diagnosticEn": "Toothed, circular sucking oral disc, 7 pairs of external gill pores, functional eyes in adults.",
        "diagnosticBn": "দাঁতযুক্ত গোলাকার চোষক মুখ, ৭ জোড়া ফুলকা ছিদ্র এবং প্রাপ্তবয়স্ক অবস্থায় উন্নত চোখ।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Notable genera include Myxine, Eptatretus, Petromyzon, Lampetra, and Geotria. Prominent type species: Myxine glutinosa Linnaeus, 1758 (Atlantic hagfish) and Petromyzon marinus Linnaeus, 1758 (Sea lamprey).",
      "bn": "উল্লেখযোগ্য গণের মধ্যে রয়েছে Myxine, Eptatretus, Petromyzon, Lampetra এবং Geotria। প্রখ্যাত প্রজাতি: Myxine glutinosa Linnaeus, 1758 (আটলান্টিক হ্যাগফিশ) এবং Petromyzon marinus Linnaeus, 1758 (সামুদ্রিক ল্যাম্প্রে)।"
    },
    "examplesSummary": {
      "en": "Verified international reference examples: Atlantic Hagfish (Myxine glutinosa), Inshore Hagfish (Eptatretus burgeri), Sea Lamprey (Petromyzon marinus), and European River Lamprey (Lampetra fluviatilis).",
      "bn": "আন্তর্জাতিকভাবে স্বীকৃত প্রামাণ্য উদাহরণ: আটলান্টিক হ্যাগফিশ (Myxine glutinosa), উপকূলীয় হ্যাগফিশ (Eptatretus burgeri), সামুদ্রিক ল্যাম্প্রে (Petromyzon marinus) এবং ইউরোপীয় নদী ল্যাম্প্রে (Lampetra fluviatilis)।"
    },
    "additionalInformation": {
      "en": "Agnathans represent the most basal surviving lineage of craniate vertebrates, offering irreplaceable insights into the origin of the vertebrate skull, adaptive immunity, and endocrine regulation. They possess neither jaws nor paired appendages, preserving anatomical blueprints pre-dating the evolution of gnathostomes over 500 million years ago. No native species exist in Bangladesh waters.",
      "bn": "অ্যাগনাথা মেরুদণ্ডী প্রাণীদের প্রাচীনতম জীবিত শাখা, যা মেরুদণ্ডী প্রাণীর করোটিকা, অনাক্রম্যতা ও অন্তঃক্ষরা তন্ত্রের বিবর্তন বুঝতে অপরিহার্য। ৫০০ মিলিয়ন বছরেরও বেশি প্রাচীন এই গোষ্ঠীর কোনো সদস্য বাংলাদেশের জলসীমায় স্বাভাবিকভাবে বাস করে না।"
    },
    "orders": [
      "order-myxiniformes",
      "order-petromyzontiformes"
    ],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Broad et al. (2010)",
    "verificationStatus": "published",
    "publishedStatus": true,
    "notes": "Ichthyological Note: Living Agnathans comprise Myxini (hagfishes) and Petromyzontida (lampreys). No native species occur in Bangladesh."
  },
  {
    "id": "class-chondrichthyes",
    "rank": "class",
    "scientificName": "Chondrichthyes",
    "bengaliName": "তরুণাস্থিময় মাছ",
    "englishName": "Cartilaginous Fishes",
    "parentTaxonId": "taxon-fishes",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Chondrichthyes",
        "nameBn": "তরুণাস্থিময় মাছ"
      }
    ],
    "shortDescription": {
      "en": "Jawed vertebrates possessing an endoskeleton formed of prismatic calcified cartilage rather than true bone. Encompasses modern sharks, rays, skates, and chimaeras.",
      "bn": "চোয়ালযুক্ত মেরুদণ্ডী প্রাণী যাদের অন্তঃকঙ্কাল প্রকৃত অস্থির পরিবর্তে প্রিজমীয় ক্যালসিফাইড তরুণাস্থি দিয়ে গঠিত। এর অন্তর্ভুক্ত রয়েছে হাঙ্গর, শঙ্কর বা রে এবং কাইমেরা।"
    },
    "diagnosticCharacteristics": {
      "en": "Skeleton entirely cartilaginous (calcified but devoid of true endochondral bone); body covered with tooth-like placoid scales (dermal denticles); 5 to 7 pairs of lateral or ventral gill slits (uncovered by a bony operculum in elasmobranchs); swim bladder absent (buoyancy maintained by a large lipid-rich liver and squalene); males possess paired intromittent pelvic claspers for internal fertilization; spiral valve intestine present.",
      "bn": "সম্পূর্ণ তরুণাস্থিময় অন্তঃকঙ্কাল; দেহ সূক্ষ্ম দাঁতের মতো প্লাকয়েড আঁইশ (ডার্মাল ডেনটিকল) দ্বারা আবৃত; ৫ থেকে ৭ জোড়া ফুলকা ছিদ্র (ইলাসমোব্রাঙ্কিতে অপারকুলামহীন); পটকা বা সুইম ব্লাডার অনুপস্থিত (যকৃতে থাকা তেল ও স্কোয়ালিন প্লবতা রক্ষা করে); পুরুষের শ্রোণীপাখনার সাথে ক্ল্যাসপার থাকে যা অভ্যন্তরীণ নিষেকের জন্য ব্যবহৃত হয়; অন্ত্রে স্পাইরাল ভালভ বিদ্যমান।",
      "keyFeatures": {
        "en": [
          "Calcified cartilaginous skeleton without true bone",
          "Tough skin embedded with minute placoid dermal denticles",
          "5–7 gill slits without bony opercular cover in sharks and rays",
          "Lack of swim bladder; large lipid-rich liver for hydrostatic control",
          "Pelvic claspers in males facilitating obligatory internal fertilization"
        ],
        "bn": [
          "প্রকৃত অস্থির অনুপস্থিতিতে ক্যালসিফাইড তরুণাস্থিময় অন্তঃকঙ্কাল",
          "প্লাকয়েড ডার্মাল ডেনটিকল যুক্ত শক্ত ত্বক",
          "হাঙ্গর ও শঙ্কর মাছে অস্থিময় অপারকুলামহীন ৫-৭ জোড়া ফুলকা ছিদ্র",
          "পটকার অনুপস্থিতি; প্লবতা রক্ষায় তেলসমৃদ্ধ বিশাল যকৃৎ",
          "অভ্যন্তরীণ নিষেকের উদ্দেশ্যে পুরুষ মাছে শ্রোণী ক্ল্যাসপারের উপস্থিতি"
        ]
      }
    },
    "habitat": {
      "en": "Predominantly marine organisms occupying coastal neritic waters, coral reefs, pelagic epipelagic/mesopelagic zones, and bathyal ocean trenches. Select taxa penetrate brackish estuaries and tidal mangrove channels.",
      "bn": "প্রধানত সামুদ্রিক প্রাণী যা উপকূলীয় অঞ্চল, প্রবাল প্রাচীর, উন্মুক্ত মহাসাগর এবং গভীর সমুদ্রের গিরিখাত পর্যন্ত বিস্তৃত। কিছু প্রজাতি লোনাপানির মোহনা ও জোয়ারভাটার ম্যানগ্রোভ খাঁড়িতে প্রবেশ করে।",
      "systems": [
        "marine",
        "brackish"
      ]
    },
    "ecosystem": {
      "en": "Constitutes primary apex and mesopredators in marine food webs, including continental shelf margins, coastal mangrove lagoons, coral reef ecosystems, and the deep oceanic Swatch of No Ground submarine canyon in the northern Bay of Bengal.",
      "bn": "সামুদ্রিক খাদ্যজালের শীর্ষ ও মধ্যম স্তরের শিকারী হিসেবে কাজ করে। বিশেষ করে উত্তর বঙ্গোপসাগরের মহীসোপান, সুন্দরবনের মোহনাজ খাঁড়ি, সেন্ট মার্টিন প্রবাল বলয় এবং সোয়াচ অব নো গ্রাউন্ড সাবমেরিন গিরিখাতে গুরুত্বপূর্ণ ভূমিকা পালন করে।"
    },
    "feeding": {
      "en": "Mostly carnivorous predators feeding on fishes, cephalopods, crustaceans, and benthic molluscs. Select large species (e.g., Whale shark, Manta rays) have evolved specialized filter-feeding mechanisms on zooplankton.",
      "bn": "অধিকাংশ প্রজাতি শিকারী মাংসাশী; মাছ, সেফালোপড, ক্রাস্টাশিয়ান এবং তলদেশের মোলাস্ক ভক্ষণ করে। তিমি হাঙ্গর ও মান্তা রে-র মতো কিছু বৃহৎ প্রজাতি প্ল্যাঙ্কটন ছেঁকে খাওয়ার বিশেষ ফিল্টার-ফিডিং কৌশল ধারণ করে।"
    },
    "reproduction": {
      "en": "Obligate internal fertilization. Exhibits diverse developmental strategies: oviparity (deposition of tough leathery egg capsules), aplacental viviparity (ovoviviparity with uterine nourishment or oophagy), and placental viviparity. Characterized by low fecundity, long gestation, and slow sexual maturation.",
      "bn": "বাধ্যতামূলক অভ্যন্তরীণ নিষেক। বিচিত্র প্রজনন কৌশল বিদ্যমান: ওভিপ্যারি বা ডিম্বপ্রসব (শক্ত চামড়ার ক্যাপসুলযুক্ত ডিম), ওভোভিভিপ্যারি (জরায়ুতে পুষ্টিলাভ) এবং প্রকৃত ভিভিপ্যারি বা জরায়ুজ প্রসব। এদের ডিমের সংখ্যা কম, গর্ভধারণকাল দীর্ঘ এবং প্রজনন পরিপক্কতা অত্যন্ত ধীর।"
    },
    "distribution": {
      "en": "Global oceans from polar to tropical seas. In Bangladesh, verified species inhabit the coastal shelf of Cox's Bazar, Saint Martin's Island, the Sundarbans mangrove estuaries, and offshore Bay of Bengal.",
      "bn": "মেরু থেকে গ্রীষ্মমন্ডলীয় সকল মহাসাগরে বিশ্বব্যাপী বিস্তৃত। বাংলাদেশে এদের উপস্থিতি মূলত কক্সবাজারের উপকূলীয় মহীসোপান, সেন্ট মার্টিন দ্বীপ, সুন্দরবনের মোহনা এবং বঙ্গোপসাগরের গভীর জলসীমায় সীমাবদ্ধ।"
    },
    "subclasses": [
      {
        "id": "subclass-elasmobranchii",
        "name": "Elasmobranchii",
        "commonEn": "Sharks, Rays & Skates",
        "commonBn": "হাঙ্গর, শঙ্কর ও রে মাছ",
        "descriptionEn": "Fishes with 5–7 separate lateral or ventral gill openings without a single opercular cover; upper jaw not fused to neurocranium.",
        "descriptionBn": "৫ থেকে ৭ জোড়া উন্মুক্ত ফুলকা ছিদ্রযুক্ত মাছ যাদের ওপরের চোয়াল করোটিকার সাথে সংলগ্ন নয়।"
      },
      {
        "id": "subclass-holocephali",
        "name": "Holocephali",
        "commonEn": "Chimaeras & Ghost Sharks",
        "commonBn": "কাইমেরা বা ভূত হাঙ্গর",
        "descriptionEn": "Deep-water fishes with a single opercular gill covering, upper jaw completely fused to neurocranium, and smooth scaleless skin.",
        "descriptionBn": "গভীর সমুদ্রের মাছ যাদের একক অপারকুলাম বা ফুলকা ঢাকনা রয়েছে এবং ওপরের চোয়াল করোটিকার সাথে সম্পূর্ণ জোড়া লাগানো।"
      }
    ],
    "orders": [
      "order-hexanchiformes",
      "order-heterodontiformes",
      "order-orectolobiformes",
      "order-lamniformes",
      "order-carcharhiniformes",
      "order-squaliformes",
      "order-echinorhiniformes",
      "order-pristiophoriformes",
      "order-squatiniformes",
      "order-torpediniformes",
      "order-rhinopristiformes",
      "order-rajiformes",
      "order-myliobatiformes",
      "order-chimaeriformes"
    ],
    "exampleSpeciesIds": [
      "sp-chiloscyllium-indicum"
    ],
    "referenceIds": [
      "ref-fishbase-2024",
      "ref-eschmeyer-2024",
      "ref-iucn-bd-2015"
    ],
    "authoritySource": "Eschmeyer's Catalog of Fishes / Nelson et al. (2016) Fishes of the World (5th ed.)",
    "verificationStatus": "published",
    "publishedStatus": true,
    "taxonId": "taxon-chondrichthyes",
    "scientificNamesSummary": {
      "en": "Prominent genera include Chiloscyllium, Carcharhinus, Sphyrna, Pristis, Rhynchobatus, and Chimaera. Classical binomials: Chiloscyllium indicum (Gmelin, 1789), Carcharhinus leucas (Müller & Henle, 1839), and Pristis pristis (Linnaeus, 1758).",
      "bn": "উল্লেখযোগ্য গণের মধ্যে রয়েছে Chiloscyllium, Carcharhinus, Sphyrna, Pristis, Rhynchobatus এবং Chimaera। প্রামাণ্য বৈজ্ঞানিক নাম: Chiloscyllium indicum (Gmelin, 1789), Carcharhinus leucas (Müller & Henle, 1839), এবং Pristis pristis (Linnaeus, 1758)।"
    },
    "examplesSummary": {
      "en": "Five verified representative examples: Slender Bamboo Shark (Chiloscyllium indicum), Bull Shark (Carcharhinus leucas), Common Sawfish (Pristis pristis), Bowmouth Guitarfish (Rhina ancylostoma), and Rabbitfish (Chimaera monstrosa).",
      "bn": "পাঁচটি যাচাইকৃত প্রামাণ্য উদাহরণ: সরু বাঁশ হাঙ্গর (Chiloscyllium indicum), ষাঁড় হাঙ্গর (Carcharhinus leucas), সাধারণ করাত মাছ (Pristis pristis), ধনুকমুখ গিটারফিশ (Rhina ancylostoma) এবং খরগোশ মাছ (Chimaera monstrosa)।"
    },
    "additionalInformation": {
      "en": "Cartilaginous fishes have inhabited the oceans for more than 400 million years. Because of slow sexual maturation, extended gestation, and low fecundity, elasmobranchs are extraordinarily vulnerable to commercial overfishing and coastal habitat disruption in the Bay of Bengal.",
      "bn": "তরুণাস্থিময় মাছ ৪০০ মিলিয়নেরও বেশি বছর ধরে সমুদ্রে টিকে রয়েছে। অত্যন্ত ধীর বৃদ্ধি, দীর্ঘ গর্ভধারণ এবং অল্প সংখ্যক সন্তান উৎপাদনের কারণে বঙ্গোপসাগরে অতিরিক্ত মৎস্য আহরণ ও আবাসস্থল ধ্বংসের মুখে এরা চরম সংকটাপন্ন।"
    }
  },
  {
    "id": "superclass-osteichthyes",
    "taxonId": "taxon-osteichthyes",
    "rank": "superclass",
    "scientificName": "Osteichthyes",
    "bengaliName": "অস্থিময় মাছ (অস্টিইকথিস)",
    "englishName": "Bony Fishes",
    "parentTaxonId": "taxon-fishes",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "superclass",
        "name": "Osteichthyes",
        "nameBn": "অস্থিময় মাছ"
      }
    ],
    "shortDescription": {
      "en": "The vast taxonomic grade/clade of bony vertebrates uniting the ray-finned fishes (Actinopterygii) and lobe-finned fishes (Sarcopterygii). Characterized by true endochondral bone, swim bladder or functional lungs, and an opercular gill cover.",
      "bn": "অস্থিময় জলজ মেরুদণ্ডীদের সুবিশাল ট্যাক্সোনমিক গোষ্ঠী যা কন্টকময় বা রশ্মিপাখনাযুক্ত মাছ (অ্যাক্টিনোপ্টেরিগি) এবং মাংসলপাখনাযুক্ত মাছ (সারকোপ্টেরিগি)-কে একীভূত করে। এদের কঙ্কাল প্রকৃত অস্থিময়, পটকা বা ফুসফুস উপস্থিত এবং অপারকুলাম দ্বারা ফুলকা আবৃত।"
    },
    "diagnosticCharacteristics": {
      "en": "Endoskeleton composed primarily of ossified endochondral bone; lungs or hydrostatic swim bladder derived from gut outpocketing; single operculum protecting the branchial chamber on each side; dermal bones forming a complex skull pattern with premaxilla, maxilla, and dentary; scales (ganoid, cycloid, ctenoid, or cosmoid) embedded in dermis; terminal or subterminal mouth.",
      "bn": "প্রকৃত এন্ডোকন্ড্রাল অস্থি দ্বারা গঠিত অন্তঃকঙ্কাল; পৌষ্টিকনালী থেকে উদ্ভূত উদস্থিতিক পটকা বা ফুসফুস; প্রতিটি পাশে অপারকুলাম বা ফুলকা ঢাকনার উপস্থিতি; সুগঠিত চোয়াল ও করোটিকা; ডার্মাল আঁইশ (সাইক্লয়েড, টিনয়েড বা গ্যানয়েড); অগ্রবর্তী মুখ।",
      "keyFeatures": {
        "en": [
          "Ossified endochondral skeleton replacing embryonic cartilage",
          "Bony operculum enclosing the gill chamber with single branchial slit per side",
          "Gas bladder (swim bladder) serving hydrostatic or respiratory function",
          "Unites modern ray-finned teleosts (Actinopterygii) and lobe-finned sarcopterygians",
          "Over 32,000 extant species, constituting >96% of all living fishes"
        ],
        "bn": [
          "ভ্রূণীয় তরুণাস্থির পরিবর্তে গঠিত প্রকৃত শক্ত অস্থিময় কঙ্কাল",
          "প্রতিটি পাশে একক ফুলকা প্রকোষ্ঠ ঢেকে রাখা অস্থিময় অপারকুলাম",
          "প্লবতা বা শ্বসনে সহায়ক গ্যাসপূর্ণ পটকা বা ফুসফুস",
          "রশ্মিপাখনাযুক্ত অ্যাক্টিনোপ্টেরিগি ও মাংসলপাখনাযুক্ত সারকোপ্টেরিগির সমন্বয়",
          "৩২,০০০-এর বেশি জীবিত প্রজাতি, যা সকল মাছের ৯৬%-এরও বেশি"
        ]
      }
    },
    "habitat": {
      "en": "Ubiquitous in all freshwater, brackish, and marine habitats from high-altitude Himalayan torrents to deep abyssal marine trenches beyond 8,000 meters.",
      "bn": "হিমালয়ের উচ্চ পাহাড়ি ঝর্ণা থেকে শুরু করে সমুদ্রের আট হাজার মিটারেরও বেশি গভীর অতল গিরিখাত পর্যন্ত সকল মিঠাপানি, মোহনা ও মহাসাগরে বিস্তৃত।",
      "systems": [
        "freshwater",
        "brackish",
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Forms the ecological foundation of all aquatic food chains across inland wetlands, river floodplains, estuaries, coral reefs, and open oceans.",
      "bn": "অভ্যন্তরীণ জলাভূমি, প্লাবনভূমি, নদীর তলদেশ, মোহনা, প্রবাল প্রাচীর এবং উন্মুক্ত মহাসাগরের সকল খাদ্য শৃঙ্খলের ভিত্তি গঠন করে।"
    },
    "feeding": {
      "en": "Encompasses every conceivable aquatic trophic niche: microplanktivory, herbivory, algivory, detritivory, molluscivory, ambush and pursuit piscivory, and apex predation.",
      "bn": "প্লাঙ্কটনভোজী, তৃণভোজী, শৈবালভোজী, কর্দম ও ডেট্রিটাসভোজী থেকে শুরু করে শীর্ষ শিকারী মাছ পর্যন্ত সকল প্রকার খাদ্যাভ্যাস বিদ্যমান।"
    },
    "reproduction": {
      "en": "Predominantly oviparous with external fertilization and high fecundity, though internal fertilization, mouthbrooding, live-bearing (viviparity), and intense nest parental care have evolved independently across multiple lineages.",
      "bn": "অধিকাংশ প্রজাতি বাহ্যিক নিষেকের মাধ্যমে বিপুল সংখ্যক ডিম ছাড়ে; কিছু প্রজাতিতে অভিভাবকত্ব, মুখগহ্বরে ডিম লালন এবং জরায়ুজ প্রসবের মতো উন্নত কৌশল দেখা যায়।"
    },
    "distribution": {
      "en": "Global across all continents and oceans. In Bangladesh, over 250 freshwater species and 400 marine species belong to Osteichthyes.",
      "bn": "বিশ্বের প্রতিটি মহাদেশ ও মহাসাগরে বিস্তৃত। বাংলাদেশে ২৫০টিরও বেশি মিঠাপানির এবং ৪০০টিরও বেশি সামুদ্রিক মাছ অস্টিইকথিসের অন্তর্ভুক্ত।"
    },
    "importantFamilies": [
      {
        "name": "Cyprinidae",
        "commonEn": "Carps and Minnows",
        "commonBn": "কার্প গোত্র",
        "diagnosticEn": "Toothless jaws, pharyngeal teeth, scaleless head.",
        "diagnosticBn": "দাঁতহীন চোয়াল, গলবিলীয় দাঁত, আঁইশহীন মাথা।"
      },
      {
        "name": "Clupeidae",
        "commonEn": "Herrings and Shads",
        "commonBn": "ইলিশ গোত্র",
        "diagnosticEn": "Compressed silvery body with sharp ventral keel of scutes.",
        "diagnosticBn": "ধারালো স্কিউটযুক্ত রূপালী চ্যাপ্টা দেহ।"
      },
      {
        "name": "Latimeriidae",
        "commonEn": "Coelacanths",
        "commonBn": "সিল্যাকান্থ গোত্র",
        "diagnosticEn": "Lobe-finned marine fishes with three-lobed tail and intracranial joint.",
        "diagnosticBn": "মাংসলপাখনাযুক্ত সামুদ্রিক মাছ যাদের ট্রাই-লোবড লেজ রয়েছে।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Encompasses two massive extant classes: Actinopterygii (Klein, 1885) and Sarcopterygii (Romer, 1955). Iconic genera: Tenualosa, Labeo, Clarias, Channa, Wallago, Latimeria, and Neoceratodus.",
      "bn": "দুটি প্রধান জীবিত শ্রেণী ধারণ করে: Actinopterygii এবং Sarcopterygii। প্রখ্যাত গণ: Tenualosa, Labeo, Clarias, Channa, Wallago, Latimeria এবং Neoceratodus।"
    },
    "examplesSummary": {
      "en": "Iconic examples include the national fish of Bangladesh, Hilsa Shad (Tenualosa ilisha), Rohu (Labeo rohita), Native Deshi Magur (Clarias magur), Coelacanth (Latimeria chalumnae), and Australian Lungfish (Neoceratodus forsteri).",
      "bn": "প্রখ্যাত উদাহরণের মধ্যে রয়েছে বাংলাদেশের জাতীয় মাছ ইলিশ (Tenualosa ilisha), রুই (Labeo rohita), দেশি মাগুর (Clarias magur), সিল্যাকান্থ (Latimeria chalumnae) এবং অস্ট্রেলীয় ফুসফুসযুক্ত মাছ (Neoceratodus forsteri)।"
    },
    "additionalInformation": {
      "en": "Osteichthyes represents the most diverse vertebrate group on Earth. All terrestrial tetrapods (amphibians, reptiles, birds, and mammals) phylogenetically arose from within the sarcopterygian lobe-finned fish lineage during the Devonian period.",
      "bn": "অস্টিইকথিস পৃথিবীর সর্বাধিক বৈচিত্র্যময় মেরুদণ্ডী গোষ্ঠী। আধুনিক জাতিজনি বিন্যাস অনুযায়ী স্তন্যপায়ী ও মানুষসহ সকল চতুষ্পদী প্রাণী ডেভোনিয়ান যুগে এই সারকোপ্টেরিগিয়ান মাংসলপাখনাযুক্ত মাছের পূর্বপুরুষ থেকেই বিবর্তিত হয়েছে।"
    },
    "orders": [
      "order-polypteriformes",
      "order-acipenseriformes",
      "order-amiiformes",
      "order-lepisosteiformes",
      "order-hiodontiformes",
      "order-osteoglossiformes",
      "order-elopiformes",
      "order-albuliformes",
      "order-notacanthiformes",
      "order-anguilliformes",
      "order-clupeiformes",
      "order-alepocephaliformes",
      "order-gonorynchiformes",
      "order-cypriniformes",
      "order-gymnotiformes",
      "order-characiformes",
      "order-siluriformes",
      "order-lepidogalaxiiformes",
      "order-argentiniformes",
      "order-salmoniformes",
      "order-galaxiiformes",
      "order-osmeriformes",
      "order-stomiiformes",
      "order-ateleopodiformes",
      "order-aulopiformes",
      "order-myctophiformes",
      "order-lampriformes",
      "order-polymixiiformes",
      "order-percopsiformes",
      "order-zeiformes",
      "order-gadiformes",
      "order-trachichthyiformes",
      "order-beryciformes",
      "order-ophidiiformes",
      "order-batrachoidiformes",
      "order-gobiiformes",
      "order-syngnathiformes",
      "order-scombriformes",
      "order-synbranchiformes",
      "order-anabantiformes",
      "order-carangiformes",
      "order-atheriniformes",
      "order-beloniformes",
      "order-cyprinodontiformes",
      "order-cichliformes",
      "order-mugiliformes",
      "order-blenniiformes",
      "order-perciformes",
      "order-centrarchiformes",
      "order-labriformes",
      "order-acropomatiformes",
      "order-acanthuriformes",
      "order-lophiiformes",
      "order-tetraodontiformes",
      "order-coelacanthiformes",
      "order-ceratodontiformes",
      "order-pleuronectiformes"
    ],
    "exampleSpeciesIds": [
      "sp-tenualosa-ilisha",
      "sp-labeo-rohita",
      "sp-catla-catla",
      "sp-clarias-magur"
    ],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024",
      "ref-rahman-2005"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Betancur-R. et al. (2017)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "class-actinopterygii",
    "rank": "class",
    "scientificName": "Actinopterygii",
    "bengaliName": "রশ্মিপাখনাযুক্ত মাছ",
    "englishName": "Ray-finned Bony Fishes",
    "parentTaxonId": "superclass-osteichthyes",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিপাখনাযুক্ত মাছ"
      }
    ],
    "shortDescription": {
      "en": "The overwhelmingly dominant class of modern aquatic vertebrates, comprising over 99% of bony fish species. Fins are webs of skin supported by flexible or rigid bony rays (lepidotrichia).",
      "bn": "আধুনিক জলজ মেরুদণ্ডী প্রাণীদের সর্বাধিক প্রভাবশালী শ্রেণী, যা অস্থিময় মাছের ৯৯% প্রজাতি ধারণ করে। এদের পাখনাগুলো ত্বকীয় জালিকার মতো এবং অস্থিময় বা শৃঙ্গীয় রশ্মি (লেপিডোট্রিকিয়া) দ্বারা সমর্থিত।"
    },
    "diagnosticCharacteristics": {
      "en": "Endoskeleton composed primarily of ossified true bone; fins supported by segmented, flexible or spinous lepidotrichia radiating directly from basal pterygiphores; single opercular opening covered by an articulated bony operculum on each side; ganoid, cycloid, or ctenoid scales present (secondarily lost in some catfishes); gas-filled swim bladder typically present for neutral buoyancy regulation; paired nostrils without internal choanae opening into oral cavity.",
      "bn": "প্রকৃত অস্থি দ্বারা গঠিত অন্তঃকঙ্কাল; পাখনাগুলো খণ্ডিত ও নমনীয় অস্থিময় রশ্মি দ্বারা সমর্থিত; প্রতিটি পাশে অস্থিময় অপারকুলাম দ্বারা আবৃত একক ফুলকা প্রকোষ্ঠ; সাইক্লয়েড, টিনয়েড বা গ্যানয়েড আঁইশ বিদ্যমান (কিছু ক্যাটফিformat-এ গৌণভাবে আঁইশবিহীন); প্লবতা নিয়ন্ত্রণে গ্যাসপূর্ণ পটকা বিদ্যমান; নাসারন্ধ্র মুখগহ্বরে উন্মুক্ত হয় না।",
      "keyFeatures": {
        "en": [
          "Fully ossified bony internal skeleton",
          "Fins supported by dermal rays (lepidotrichia)",
          "Single opercular aperture on each side protected by bony operculum",
          "Hydrostatic swim bladder present in most lineages",
          "Dominant diversity across freshwater potamon, haors, estuaries, and oceans"
        ],
        "bn": [
          "সম্পূর্ণ অস্থিময় অভ্যন্তরীণ কঙ্কাল",
          "ত্বকীয় রশ্মি (লেপিডোট্রিকিয়া) দ্বারা সমর্থিত পাখনা",
          "অস্থিময় অপারকুলাম দ্বারা সংরক্ষিত একক ফুলকা ছিদ্র",
          "অধিকাংশ প্রজাতিতে উদস্থিতিক পটকার উপস্থিতি",
          "মিঠাপানির নদী, হাওর, মোহনা এবং মহাসাগর জুড়ে বিশাল বৈচিত্র্য"
        ]
      }
    },
    "habitat": {
      "en": "Extremely broad ecological amplitude inhabiting freshwater rivers, floodplains, oxbow lakes, tectonic haors, brackish estuaries, mangrove creeks, and marine waters from the intertidal zone to the abyssal depths.",
      "bn": "অত্যন্ত ব্যাপক বাস্তুতাত্ত্বিক বিস্তার; মিঠাপানির নদী, প্লাবনভূমি, বাওড়, হাওর, লোনাপানির মোহনা, ম্যানগ্রোভ খাঁড়ি থেকে শুরু করে সমুদ্রের তলদেশ পর্যন্ত বিস্তৃত।"
    },
    "ecosystem": {
      "en": "Forms the biological backbone of freshwater and marine aquatic ecosystems in South Asia. In Bangladesh, actinopterygians dominate the Ganges-Brahmaputra-Meghna floodplains, the Halda River natural spawning sanctuary, the Sundarbans mangrove swamp, and the Bay of Bengal continental shelf.",
      "bn": "দক্ষিণ এশিয়ার মিঠাপানি ও সামুদ্রিক জলজ বাস্তুতন্ত্রের জৈবিক ভিত্তি গঠন করে। বাংলাদেশে গঙ্গা-ব্রহ্মপুত্র-মেঘনা প্লাবনভূমি, হালদা নদীর প্রাকৃতিক প্রজনন ক্ষেত্র, সুন্দরবন ম্যানগ্রোভ এবং বঙ্গোপসাগর মহীসোপানের প্রধান জীবসমষ্টি।"
    },
    "feeding": {
      "en": "Comprehensive trophic adaptation: planktivores (e.g., Tenualosa ilisha, Catla catla), herbivorous detritivores (Labeo rohita, Cirrhinus mrigala), apex predatory piscivores (Wallago attu, Channa striata, Chitala chitala), benthic omnivores, and insectivores.",
      "bn": "ব্যাপক খাদ্যাভ্যাসগত অভিযোজন: প্লাঙ্কটোনভোজী (যেমন: ইলিশ, কাতলা), তৃণভোজী ও ডেট্রিটিভোর (রুই, মৃগেল), শীর্ষ শিকারী বা মাছখেকো (বোয়াল, শোল, চিতল) এবং তলদেশের সর্বভুক।"
    },
    "reproduction": {
      "en": "Predominantly oviparous with external fertilization. Fecundity ranges from tens of eggs with intense parental care (Anabantiformes, Ariidae) to over two million pelagic broadcast eggs in riverine carps and anadromous clupeids synchronized with monsoon flood hydrodynamics.",
      "bn": "অধিকাংশই বাহ্যিক নিষেকের মাধ্যমে ডিম্বপ্রসবকারী (ওভিপ্যারাস)। ডিমের সংখ্যা প্রজাতিভেদে কয়েক ডজন (যেখানে অভিভাবকত্ব থাকে, যেমন শোল ও কৈ) থেকে শুরু করে বর্ষাকালীন প্লাবনে লক্ষ লক্ষ ডিম ছড়ানো প্রধান কার্প ও ইলিশ মাছ পর্যন্ত বিস্তৃত।"
    },
    "distribution": {
      "en": "Ubiquitous worldwide across all habitable aquatic biomes. In Bangladesh, over 250 freshwater species and 400 marine teleosts represent this class.",
      "bn": "বিশ্বজুড়ে সকল জলজ পরিবেশে সার্বজনীনভাবে বিস্তৃত। বাংলাদেশে ২৫০টিরও বেশি মিঠাপানির প্রজাতি এবং ৪০০টিরও বেশি সামুদ্রিক মাছ এই শ্রেণীর অন্তর্ভুক্ত।"
    },
    "subclasses": [
      {
        "id": "subclass-neopterygii",
        "name": "Neopterygii",
        "commonEn": "Modern Bony Fishes (Teleosts & Allies)",
        "commonBn": "আধুনিক অস্থিময় মাছ (টেলিয়স্ট ও সম্পর্কিত গোষ্ঠী)",
        "descriptionEn": "The modern evolutionary branch comprising Teleostei and holosteans, marked by refined skull mobility and symmetrical homocercal tail.",
        "descriptionBn": "টেলিয়স্ট সমন্বিত আধুনিক বিবর্তনীয় শাখা যাদের চোয়ালের গতিশীলতা ও সুষম পুচ্ছপাখনা রয়েছে।"
      }
    ],
    "orders": [
      "order-polypteriformes",
      "order-acipenseriformes",
      "order-amiiformes",
      "order-lepisosteiformes",
      "order-hiodontiformes",
      "order-osteoglossiformes",
      "order-elopiformes",
      "order-albuliformes",
      "order-notacanthiformes",
      "order-anguilliformes",
      "order-clupeiformes",
      "order-alepocephaliformes",
      "order-gonorynchiformes",
      "order-cypriniformes",
      "order-gymnotiformes",
      "order-characiformes",
      "order-siluriformes",
      "order-lepidogalaxiiformes",
      "order-argentiniformes",
      "order-salmoniformes",
      "order-galaxiiformes",
      "order-osmeriformes",
      "order-stomiiformes",
      "order-ateleopodiformes",
      "order-aulopiformes",
      "order-myctophiformes",
      "order-lampriformes",
      "order-polymixiiformes",
      "order-percopsiformes",
      "order-zeiformes",
      "order-gadiformes",
      "order-trachichthyiformes",
      "order-beryciformes",
      "order-ophidiiformes",
      "order-batrachoidiformes",
      "order-gobiiformes",
      "order-syngnathiformes",
      "order-scombriformes",
      "order-synbranchiformes",
      "order-anabantiformes",
      "order-carangiformes",
      "order-atheriniformes",
      "order-beloniformes",
      "order-cyprinodontiformes",
      "order-cichliformes",
      "order-mugiliformes",
      "order-blenniiformes",
      "order-perciformes",
      "order-centrarchiformes",
      "order-labriformes",
      "order-acropomatiformes",
      "order-acanthuriformes",
      "order-lophiiformes",
      "order-tetraodontiformes",
      "order-pleuronectiformes"
    ],
    "exampleSpeciesIds": [
      "sp-tenualosa-ilisha",
      "sp-labeo-rohita",
      "sp-catla-catla",
      "sp-cirrhinus-mrigala",
      "sp-pethia-conchonius",
      "sp-pangasius-pangasius",
      "sp-clarias-batrachus",
      "sp-heteropneustes-fossilis",
      "sp-mystus-cavasius",
      "sp-wallago-attu",
      "sp-ompok-pabda",
      "sp-eutropiichthys-vacha",
      "sp-channa-striata",
      "sp-channa-punctata",
      "sp-anabas-testudineus",
      "sp-chitala-chitala",
      "sp-macrognathus-aculeatus",
      "sp-mastacembelus-armatus",
      "sp-lates-calcarifer"
    ],
    "referenceIds": [
      "ref-rahman-2005",
      "ref-hamilton-1822",
      "ref-fishbase-2024",
      "ref-iucn-bd-2015"
    ],
    "authoritySource": "Eschmeyer's Catalog of Fishes / Betancur-R. et al. (2017) Phylogenetic Classification of Bony Fishes",
    "verificationStatus": "published",
    "publishedStatus": true,
    "taxonId": "taxon-actinopterygii",
    "scientificNamesSummary": {
      "en": "Includes dominant teleost lineages: Cypriniformes, Siluriformes, Clupeiformes, Perciformes, Anabantiformes, and Synbranchiformes. Classical binomials: Tenualosa ilisha (Hamilton, 1822), Labeo rohita (Hamilton, 1822), and Wallago attu (Bloch & Schneider, 1801).",
      "bn": "প্রধান প্রধান টেলিয়স্ট বর্গসমূহ অন্তর্ভুক্ত: Cypriniformes, Siluriformes, Clupeiformes, Perciformes, Anabantiformes এবং Synbranchiformes। প্রখ্যাত বৈজ্ঞানিক নাম: Tenualosa ilisha (Hamilton, 1822), Labeo rohita (Hamilton, 1822) এবং Wallago attu (Bloch & Schneider, 1801)।"
    },
    "examplesSummary": {
      "en": "Verified examples include Hilsa Shad (Tenualosa ilisha), Rohu (Labeo rohita), Catla (Catla catla), Mrigal Carp (Cirrhinus mrigala), and Native Deshi Magur (Clarias magur).",
      "bn": "যাচাইকৃত উদাহরণের মধ্যে রয়েছে জাতীয় মাছ ইলিশ (Tenualosa ilisha), রুই (Labeo rohita), কাতলা (Catla catla), মৃগেল (Cirrhinus mrigala) এবং দেশি মাগুর (Clarias magur)।"
    },
    "additionalInformation": {
      "en": "Actinopterygii represents the most ecologically dominant vertebrate clade in aquatic ecosystems. In Bangladesh, ray-finned fishes provide over 60% of national animal protein intake and support extensive rural aquaculture and riverine capture fisheries.",
      "bn": "অ্যাক্টিনোপ্টেরিগি জলজ বাস্তুতন্ত্রের সবচেয়ে প্রভাবশালী মেরুদণ্ডী শ্রেণী। বাংলাদেশে এ মাছগুলো জাতীয় প্রাণীজ আমিষের ৬০%-এরও বেশি সরবরাহ করে এবং গ্রামীণ অর্থনীতি ও নদীজ মৎস্যজীবীদের জীবিকার প্রধান উৎস।"
    }
  },
  {
    "id": "class-sarcopterygii",
    "rank": "class",
    "scientificName": "Sarcopterygii",
    "bengaliName": "মাংসলপাখনাযুক্ত মাছ",
    "englishName": "Lobe-finned Fishes & Tetrapodomorphs",
    "parentTaxonId": "superclass-osteichthyes",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Sarcopterygii",
        "nameBn": "মাংসলপাখনাযুক্ত মাছ"
      }
    ],
    "shortDescription": {
      "en": "Lobe-finned osteichthyans whose paired pectoral and pelvic fins are supported by a central fleshy axis of bone and muscle homologous to tetrapod limbs. Includes living coelacanths and lungfishes.",
      "bn": "মাংসলপাখনাযুক্ত অস্থিময় মাছ যাদের বক্ষ ও শ্রোণীপাখনা কেন্দ্রীয় পেশীবহুল ও অস্থিসমৃদ্ধ অক্ষ দ্বারা সমর্থিত, যা স্থলচর চতুস্পদ প্রাণীদের বাহুর সমসংস্থ। এর অন্তর্ভুক্ত জীবিত সিল্যাকান্থ ও ফুসফুসযুক্ত মাছ।"
    },
    "diagnosticCharacteristics": {
      "en": "Paired fins monobasic, articulating with the pectoral or pelvic girdle via a single basal skeletal element (homologous to the humerus and femur); fins fleshy and muscular; teeth covered with genuine enamel; cosmoid scales with distinct cosmine layer present in primitive members; internal nostrils (choanae) present in lungfishes and tetrapodomorphs; swim bladder modified into functional vascularized lungs in Dipnoi.",
      "bn": "যুগ্ম পাখনাগুলো একক ভিত্তিমূলীয় অস্থির মাধ্যমে স্কন্ধ বা শ্রোণী চক্রের সাথে যুক্ত (যা চতুষ্পদীদের হিউমেরাস ও ফিমারের সমসংস্থ); পাখনাগুলো মাংসল ও পেশীবহুল; দাঁত প্রকৃত এনামেল দ্বারা আবৃত; কসময়েড আঁইশ বিদ্যমান; ফুসফুসযুক্ত মাছে অভ্যন্তরীণ নাসারন্ধ্র (কোয়ানা) বিদ্যমান; ডিপনোই গোষ্ঠীতে পটকা রক্তসংবহনসমৃদ্ধ কার্যকরী ফুসফুসে রূপান্তরিত।",
      "keyFeatures": {
        "en": [
          "Fleshy, lobed paired fins with internal skeletal axis homologous to tetrapod limbs",
          "Teeth coated with true enamel",
          "Vascularized lungs capable of aerial respiration in lungfishes (Dipnoi)",
          "Intracranial joint in the skull of Actinistia (coelacanths)",
          "No native extant species recorded in Bangladesh territorial waters"
        ],
        "bn": [
          "চতুষ্পদীদের বাহুর সমসংস্থ অভ্যন্তরীণ অস্থিসমৃদ্ধ মাংসল ও খণ্ডিত পাখনা",
          "প্রকৃত এনামেল আবৃত দাঁত",
          "বায়বীয় শ্বাসকার্যে সক্ষম রক্তনালীপূর্ণ ফুসফুস (ফুসফুসযুক্ত মাছে)",
          "সিল্যাকান্থের করোটিকায় আন্তঃকরোটিকা জয়েন্টের উপস্থিতি",
          "বাংলাদেশের অভ্যন্তরীণ বা উপকূলীয় জলসীমায় কোনো জীবিত প্রজাতি বিদ্যমান নেই"
        ]
      }
    },
    "habitat": {
      "en": "Extant Actinistia (Coelacanths) inhabit bathypelagic submarine rocky caves and steep volcanic slopes at depths of 150–400 meters in the Western Indian Ocean and Indonesia. Extant Dipnoi (Lungfishes) inhabit shallow tropical freshwater swamps, floodplains, and sluggish river oxbows in Africa, South America, and Queensland, Australia.",
      "bn": "জীবিত সিল্যাকান্থ পশ্চিম ভারত মহাসাগর ও ইন্দোনেশিয়ার ১৫০ থেকে ৪০০ মিটার গভীরতায় সমুদ্রের তলদেশের আগ্নেয়গিরির পাথুরে গুহায় বাস করে। অপরদিকে জীবিত ফুসফুসযুক্ত মাছ আফ্রিকা, দক্ষিণ আমেরিকা এবং অস্ট্রেলিয়ার অগভীর গ্রীষ্মমন্ডলীয় মিঠাপানির জলাভূমি ও নদীতে বাস করে।",
      "systems": [
        "marine",
        "freshwater"
      ]
    },
    "ecosystem": {
      "en": "Deep-sea benthic marine canyon communities (Coelacanths) and ephemeral tropical freshwater wetlands subjected to severe seasonal desiccation, where lungfishes survive drought by estivating in underground mud cocoons for months or years.",
      "bn": "গভীর সমুদ্রের গিরিখাত বাস্তুতন্ত্র (সিল্যাকান্থ) এবং চরম শুষ্ক মৌসুমে শুকিয়ে যাওয়া গ্রীষ্মমন্ডলীয় প্লাবনভূমি, যেখানে ফুসফুসযুক্ত মাছ কাদায় কোকুন তৈরি করে সুপ্তাবস্থায় (এস্টিভেশন) টিকে থাকে।"
    },
    "feeding": {
      "en": "Carnivorous benthic/pelagic feeders. Coelacanths are drift-hunting ambush predators eating benthic fishes, cuttlefish, and small sharks using an electroreceptive rostral organ. Lungfishes feed on molluscs, crustaceans, worms, and small fishes crushed with specialized crushing toothplates.",
      "bn": "মাংসাশী শিকারী। সিল্যাকান্থ রাতে রোস্ট্রাল ইলেক্ট্রো-রিসেপ্টর অঙ্গের সাহায্যে তলদেশের মাছ ও কাটলফিশ শিকার করে। ফুসফুসযুক্ত মাছ শক্ত দাঁতের প্লেট দিয়ে শামুক, কাঁকড়া এবং ছোট মাছ চূর্ণ করে খায়।"
    },
    "reproduction": {
      "en": "Coelacanths exhibit internal fertilization and prolonged ovoviviparity (gestation estimated at 3 to 5 years, yielding fully developed pups). Lungfishes are oviparous, laying eggs in aquatic vegetation burrows or nests guarded by males exhibiting parental care and vascularized pelvic fin filaments (in Lepidosiren).",
      "bn": "সিল্যাকান্থ অভ্যন্তরীণ নিষেকের মাধ্যমে দীর্ঘ ৩-৫ বছর গর্ভধারণের পর সরাসরি শাবক প্রসব করে (ওভোভিভিপ্যারাস)। ফুসফুসযুক্ত মাছ জলজ উদ্ভিদে ডিম পাড়ে এবং পুরুষ মাছ বাসা পাহারা দিয়ে ডিমের যত্ন নেয়।"
    },
    "distribution": {
      "en": "Disjunct relictual global distribution. Coelacanths: Comoros, South Africa, Tanzania, Madagascar, and North Sulawesi (Indonesia). Lungfishes: Sub-Saharan Africa (Protopterus), South America (Lepidosiren), and Queensland (Neoceratodus). Strictly zero living native species documented in Bangladesh territorial waters.",
      "bn": "বিশ্বজুড়ে বিচ্ছিন্ন প্রাচীন বিতরণ। সিল্যাকান্থ: কোমোরোস, দক্ষিণ আফ্রিকা, তানজানিয়া ও ইন্দোনেশিয়া। ফুসফুসযুক্ত মাছ: আফ্রিকা, দক্ষিণ আমেরিকা ও অস্ট্রেলিয়া। বাংলাদেশের জলসীমায় কোনো স্থানীয় জীবিত প্রজাতি বিদ্যমান নেই।"
    },
    "subclasses": [
      {
        "id": "subclass-actinistia",
        "name": "Actinistia",
        "commonEn": "Coelacanths",
        "commonBn": "সিল্যাকান্থ",
        "descriptionEn": "Deep-water marine lobe-finned fishes with a three-lobed diphycercal tail and an intracranial joint.",
        "descriptionBn": "গভীর সমুদ্রের মাংসলপাখনাযুক্ত মাছ যাদের ট্রাই-লোবড পুচ্ছপাখনা ও করোটিকায় জয়েন্ট রয়েছে।"
      },
      {
        "id": "subclass-dipnoi",
        "name": "Dipnoi",
        "commonEn": "Lungfishes",
        "commonBn": "ফুসফুসযুক্ত মাছ",
        "descriptionEn": "Freshwater fishes possessing functional lungs derived from the swim bladder, allowing obligatory or facultative air breathing.",
        "descriptionBn": "মিঠাপানির মাছ যাদের পটকা পরিবর্তিত হয়ে কার্যকরী ফুসফুস গঠন করেছে এবং এরা বাতাস থেকে শ্বাস নিতে পারে।"
      }
    ],
    "orders": [
      "order-coelacanthiformes",
      "order-ceratodontiformes"
    ],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World; Forey (1998) History of the Coelacanth Fishes",
    "verificationStatus": "published",
    "publishedStatus": true,
    "notes": "Educational Ichthyology Notice: Modern Sarcopterygii comprises Coelacanths and Lungfishes. No living species are native to Bangladesh. Verified voucher records in Bangladesh are currently 0.",
    "taxonId": "taxon-sarcopterygii",
    "scientificNamesSummary": {
      "en": "Notable genera include Latimeria (marine coelacanths), Protopterus (African lungfishes), Lepidosiren (South American lungfish), and Neoceratodus (Australian lungfish). Binomials: Latimeria chalumnae Smith, 1939 and Neoceratodus forsteri (Krefft, 1870).",
      "bn": "উল্লেখযোগ্য গণের মধ্যে রয়েছে Latimeria (সামুদ্রিক সিল্যাকান্থ), Protopterus (আফ্রিকান ফুসফুসযুক্ত মাছ), Lepidosiren (দক্ষিণ আমেরিকান ফুসফুসযুক্ত মাছ) এবং Neoceratodus (অস্ট্রেলীয় ফুসফুসযুক্ত মাছ)। বৈজ্ঞানিক নাম: Latimeria chalumnae Smith, 1939 এবং Neoceratodus forsteri (Krefft, 1870)।"
    },
    "examplesSummary": {
      "en": "Five verified living representative examples: West Indian Ocean Coelacanth (Latimeria chalumnae), Indonesian Coelacanth (Latimeria menadoensis), West African Lungfish (Protopterus annectens), South American Lungfish (Lepidosiren paradoxa), and Queensland Lungfish (Neoceratodus forsteri).",
      "bn": "পাঁচটি যাচাইকৃত জীবিত প্রামাণ্য উদাহরণ: পশ্চিম ভারত মহাসাগরের সিল্যাকান্থ (Latimeria chalumnae), ইন্দোনেশীয় সিল্যাকান্থ (Latimeria menadoensis), পশ্চিম আফ্রিকান লাংফিশ (Protopterus annectens), দক্ষিণ আমেরিকান লাংফিশ (Lepidosiren paradoxa) এবং কুইন্সল্যান্ড লাংফিশ (Neoceratodus forsteri)।"
    },
    "additionalInformation": {
      "en": "Sarcopterygians hold immense evolutionary significance as the sister clade to all terrestrial tetrapods. Living species are living fossils whose pectoral and pelvic bone architecture directly mirrors the limbs of land vertebrates. Zero living species occur in Bangladesh.",
      "bn": "সারকোপ্টেরিগিয়ানরা সকল স্থলচর চতুস্পদ প্রাণীদের নিকটতম জ্ঞাতি হিসেবে বিবর্তনীয় গবেষণায় অমূল্য। এদের বক্ষ ও শ্রোণীপাখনার কঙ্কাল চতুষ্পদীদের হাত ও পায়ের আদি রূপ। বাংলাদেশে এদের কোনো জীবিত সদস্য নেই।"
    }
  },
  {
    "id": "order-orectolobiformes",
    "rank": "order",
    "scientificName": "Orectolobiformes",
    "bengaliName": "কার্পেট হাঙর বর্গ",
    "englishName": "Carpet Sharks",
    "parentTaxonId": "class-chondrichthyes",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Chondrichthyes",
        "nameBn": "তরুণাস্থিময় মাছ"
      },
      {
        "rank": "subclass",
        "name": "Elasmobranchii",
        "nameBn": "ইলাসমোব্রাঙ্কি"
      },
      {
        "rank": "order",
        "name": "Orectolobiformes",
        "nameBn": "কার্পেট হাঙর বর্গ"
      }
    ],
    "shortDescription": {
      "en": "Benthic to pelagic sharks characterized by two spineless dorsal fins, a short mouth well in front of the eyes, and distinctive nasal barbels with sensory grooves.",
      "bn": "তলদেশীয় ও পেলাজিক হাঙ্গর যাদের পিঠে কাঁটাহীন দুটি পৃষ্ঠপাখনা, চোখের সামনে অবস্থিত ছোট মুখ এবং সংবেদনশীল খাঁজযুক্ত নাসারন্ধ্রীয় শুঙ্গ (বার্বেল) রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Two dorsal fins lacking spines, the first dorsal fin origin positioned over or behind the pelvic fin bases; anal fin present; mouth terminal to subterminal, short and situated anterior to eyes; paired sensory nasal barbels present near nostrils; 5 pairs of lateral gill slits with the posterior 2 to 4 openings positioned over or behind the pectoral fin base; spiracles present behind eyes.",
      "bn": "কাঁটাহীন দুটি পৃষ্ঠপাখনা, প্রথম পৃষ্ঠপাখনা শ্রোণীপাখনার সমান্তরালে বা পেছনে অবস্থিত; পায়ুপাখনা উপস্থিত; মুখ তুলনামূলক ছোট ও চোখের সামনে অবস্থিত; নাসারন্ধ্রের পাশে একজোড়া সংবেদনশীল শুঙ্গ (বার্বেল) উপস্থিত; ৫ জোড়া ফুলকা ছিদ্রের শেষ ২-৪টি বক্ষপাখনার ওপর বা পেছনে অবস্থিত; চোখের পেছনে স্পাইরাকল বিদ্যমান।",
      "keyFeatures": {
        "en": [
          "Two spineless dorsal fins placed far back on trunk",
          "Distinct sensory barbels associated with incurrent nostrils",
          "Mouth short and situated anterior to eye margins",
          "Small to medium benthic form with elongated slender caudal peduncle"
        ],
        "bn": [
          "দেহের পেছনের দিকে অবস্থিত কাঁটাহীন দুটি পৃষ্ঠপাখনা",
          "নাসারন্ধ্রের কাছে স্পষ্ট সংবেদনশীল শুঙ্গ (বার্বেল)",
          "চোখের সামনে অবস্থিত অপেক্ষাকৃত ছোট মুখগহ্বর",
          "লম্বা ও সরু পুচ্ছদণ্ডযুক্ত তলদেশীয় মাঝারি দেহাকৃতি"
        ]
      }
    },
    "habitat": {
      "en": "Inshore continental shelf, shallow sandy-muddy bottoms, coastal coral margins, and estuarine bays.",
      "bn": "উপকূলীয় মহীসোপান, অগভীর বালুকাময় ও কর্দমাক্ত তলদেশ, প্রবাল প্রাচীর প্রান্ত এবং মোহনাজ খাঁড়ি।",
      "systems": [
        "marine",
        "brackish"
      ]
    },
    "ecosystem": {
      "en": "Coastal neritic ecosystems and intertidal marine margins of the northern Bay of Bengal, Saint Martin's Island coral formations, and mangrove estuaries.",
      "bn": "উত্তর বঙ্গোপসাগরের উপকূলীয় মহীসোপান, সেন্ট মার্টিন দ্বীপের প্রবাল বলয় এবং সুন্দরবনের মোহনাজ বাস্তুতন্ত্র।"
    },
    "feeding": {
      "en": "Benthic carnivore feeding on small bottom-dwelling fishes, crustaceans (crabs, squilla), polychaete worms, and marine molluscs.",
      "bn": "তলদেশীয় মাংসাশী; ছোট তলার মাছ, ক্রাস্টাশিয়ান (কাঁকড়া, চিংড়ি), পলিকিট কৃমি এবং মোলাস্ক ভক্ষণ করে।"
    },
    "reproduction": {
      "en": "Oviparous in family Hemiscylliidae. Females deposit flattened, amber-colored rectangular egg capsules on the seafloor, from which fully formed juveniles hatch.",
      "bn": "হেমিসিলিডি গোত্রে ডিম্বপ্রসবকারী (ওভিপ্যারাস)। স্ত্রী হাঙ্গর সমুদ্রের তলদেশে চারকোনা বাদামী রঙের শক্ত খোলসযুক্ত ডিম পাড়ে।"
    },
    "distribution": {
      "en": "Indo-West Pacific tropical and subtropical waters. In Bangladesh, verified along Cox's Bazar, Teknaf coast, and Saint Martin's Island.",
      "bn": "ভারত-পশ্চিম প্রশান্ত মহাসাগরীয় গ্রীষ্মমন্ডলীয় অঞ্চল। বাংলাদেশে কক্সবাজার, টেকনাফ উপকূল এবং সেন্ট মার্টিন দ্বীপে নির্ভরযোগ্যভাবে নথিবদ্ধ।"
    },
    "importantFamilies": [
      {
        "name": "Hemiscylliidae",
        "commonEn": "Bamboo Sharks",
        "commonBn": "বাঁশ হাঙ্গর গোত্র",
        "diagnosticEn": "Slender elongated body, paired sensory barbels, dorsal fins placed far back.",
        "diagnosticBn": "সরু ও লম্বা দেহ, সংবেদনশীল শুঙ্গ এবং পেছনের দিকে অবস্থিত পৃষ্ঠপাখনা।"
      }
    ],
    "exampleSpeciesIds": [
      "sp-chiloscyllium-indicum"
    ],
    "referenceIds": [
      "ref-fishbase-2024",
      "ref-iucn-bd-2015",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Compagno (1984) FAO Species Catalogue Vol. 4 Sharks of the World",
    "verificationStatus": "published",
    "publishedStatus": true,
    "taxonId": "taxon-orectolobiformes",
    "scientificNamesSummary": {
      "en": "Key genera: Chiloscyllium, Rhincodon, Stegostoma, Orectolobus. Prominent binomials: Chiloscyllium indicum (Gmelin, 1789), Chiloscyllium punctatum Müller & Henle, 1838, Rhincodon typus Smith, 1828, and Stegostoma tigrinum (Forster, 1781).",
      "bn": "প্রধান গণ: Chiloscyllium, Rhincodon, Stegostoma, Orectolobus। বিশিষ্ট বৈজ্ঞানিক নাম: Chiloscyllium indicum (Gmelin, 1789), Chiloscyllium punctatum Müller & Henle, 1838, Rhincodon typus Smith, 1828, এবং Stegostoma tigrinum (Forster, 1781)।"
    },
    "examplesSummary": {
      "en": "Verified examples include Slender Bamboo Shark (Chiloscyllium indicum), Brownbanded Bamboo Shark (Chiloscyllium punctatum), Whale Shark (Rhincodon typus), Zebra Shark (Stegostoma tigrinum), and Spotted Wobbegong (Orectolobus maculatus).",
      "bn": "যাচাইকৃত উদাহরণের মধ্যে রয়েছে সরু বাঁশ হাঙ্গর (Chiloscyllium indicum), বাদামী-ডোরা বাঁশ হাঙ্গর (Chiloscyllium punctatum), তিমি হাঙ্গর (Rhincodon typus), জেব্রা হাঙ্গর (Stegostoma tigrinum) এবং চিতাবাঘ ওবেগং (Orectolobus maculatus)।"
    },
    "additionalInformation": {
      "en": "Ranging from bottom-dwelling catsharks to the largest living fish (Rhincodon typus), carpet sharks play vital roles in benthic coastal lagoons, reefs, and open oceans. Many species are threatened by commercial trawling and incidental bycatch.",
      "bn": "তলদেশীয় ছোট বাঁশ হাঙ্গর থেকে পৃথিবীর বৃহত্তম মাছ তিমি হাঙ্গর পর্যন্ত এই বর্গের অন্তর্গত। তলদেশীয় খাদ্য শৃঙ্খলে এদের ভূমিকা গুরুত্বপূর্ণ। উপকূলীয় বটম ট্রলিং ও অসতর্ক মাছ ধরার কারণে বহু প্রজাতি হুমকির মুখে।"
    }
  },
  {
    "id": "order-clupeiformes",
    "rank": "order",
    "scientificName": "Clupeiformes",
    "bengaliName": "ইলিশ ও হেরিং বর্গ",
    "englishName": "Herrings, Shads & Anchovies",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিপাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Neopterygii",
        "nameBn": "নিওপটেরিগি"
      },
      {
        "rank": "order",
        "name": "Clupeiformes",
        "nameBn": "ইলিশ ও হেরিং বর্গ"
      }
    ],
    "shortDescription": {
      "en": "Silvery, streamlined fishes characterized by a sharp ventral keel of scutes along the midline of the belly and an otophysic connection between swim bladder and inner ear.",
      "bn": "রূপালী রঙের চকচকে মাছ যাদের পেটের নিচে ধারালো করাতের মতো আঁইশ বা স্কিউট থাকে এবং পটকার সাথে অন্তঃকর্ণের সংযোগ বিদ্যমান।"
    },
    "diagnosticCharacteristics": {
      "en": "Abdomen typically compressed with a series of sharp, jagged scutes along the ventral midline; unique otophysic connection (swim bladder extends forward into intracranial bullae of the ear to enhance high-frequency hearing); lateral line absent or restricted to a few anterior scales; cycloid scales easily shed; single short dorsal fin at midbody; deeply forked caudal fin; fine numerous gill rakers adapted for filter-feeding.",
      "bn": "পেটের নিচের অংশে ধারালো ও করাতের মতো স্কিউটের সারি বিদ্যমান; পটকার সাথে কানের অন্তর্বর্তী বিশেষ ওটোফিসিক সংযোগ (উচ্চ কম্পাঙ্কের শব্দ শোনার সহায়ক); পার্শ্বরেখা সাধারণত অনুপস্থিত বা অত্যন্ত সংকুচিত; সহজেই খসে পড়ে এমন সাইক্লয়েড আঁইশ; দেহের মধ্যভাগে একক পৃষ্ঠপাখনা; গভীরভাবে খাঁজকাটা পুচ্ছপাখনা; সূক্ষ্ম ও অসংখ্য ফুলকা রেকার।",
      "keyFeatures": {
        "en": [
          "Sharp serrated abdominal scutes forming a ventral keel",
          "Otophysic connection linking swim bladder to inner ear bullae",
          "Easily shed deciduous cycloid scales and compressed silvery body",
          "Single short dorsal fin near midbody and deeply forked caudal fin"
        ],
        "bn": [
          "পেটের নিচে ধারালো করাতের মতো স্কিউটের সারি",
          "উচ্চ কম্পাঙ্কের শব্দ শোনার সহায়ক ওটোফিসিক সংযোগ",
          "সহজেই খসে পড়ে এমন সাইক্লয়েড আঁইশ ও রূপালী চ্যাপ্টা দেহ",
          "দেহের মধ্যভাগে একক পৃষ্ঠপাখনা এবং খাঁজযুক্ত পুচ্ছপাখনা"
        ]
      }
    },
    "habitat": {
      "en": "Marine coastal shelf, pelagic neritic waters, brackish mangrove estuaries, and major freshwater river potamon.",
      "bn": "উপকূলীয় মহীসোপান, উন্মুক্ত সমুদ্র, লোনাপানির মোহনা এবং প্রধান মিঠাপানির নদী অববাহিকা।",
      "systems": [
        "marine",
        "brackish",
        "freshwater"
      ]
    },
    "ecosystem": {
      "en": "Forms massive schooling populations linking marine phytoplankton/zooplankton production to riverine and marine apex carnivores. Exemplified by the anadromous migrations of Tenualosa ilisha across the Bay of Bengal into the Meghna, Padma, and Jamuna river systems.",
      "bn": "প্ল্যাঙ্কটন স্তর থেকে উচ্চতর শিকারীদের মধ্যে শক্তির সংযোগকারী প্রধান গোষ্ঠী। উত্তর বঙ্গোপসাগর থেকে পদ্মা, মেঘনা ও যমুনা অববাহিকায় ইলিশের প্রজনন পরিযাণ এর অন্যতম উদাহরণ।"
    },
    "feeding": {
      "en": "Specialized planktivorous filter-feeders utilizing fine, comb-like gill rakers to ingest diatoms, desmids, cyanobacteria, copepods, and organic detritus.",
      "bn": "বিশেষায়িত প্ল্যাঙ্কটনভোজী; সূক্ষ্ম ও চিরুনির মতো ফুলকা রেকার দিয়ে ডায়াটম, শৈবাল, কোপেপড ও জলজ ডেকট্রিটাস ছেঁকে গ্রহণ করে।"
    },
    "reproduction": {
      "en": "Mostly oviparous broadcast spawners releasing millions of pelagic or semi-buoyant eggs into open currents without parental care. Anadromous species ascend rivers from sea to spawn during the southwest monsoon.",
      "bn": "ডিম্বপ্রসবকারী; স্রোতের জলে লক্ষ লক্ষ ভাসমান ডিম ছড়ায়। অভিভাবকত্ব নেই। পরিযায়ী ইলিশ বর্ষাকালে সমুদ্র থেকে নদীতে উঠে এসে ডিম ছাড়ে।"
    },
    "distribution": {
      "en": "Worldwide coastal seas and major tropical river basins. Dominant commercial fisheries resource in Bangladesh.",
      "bn": "বিশ্বব্যাপী উপকূলীয় সমুদ্র এবং গ্রীষ্মমন্ডলীয় প্রধান নদী অববাহিকায় বিস্তৃত। বাংলাদেশের সবচেয়ে গুরুত্বপূর্ণ জাতীয় মৎস্যসম্পদ।"
    },
    "importantFamilies": [
      {
        "name": "Clupeidae",
        "commonEn": "Herrings and Shads",
        "commonBn": "ইলিশ ও হেরিং গোত্র",
        "diagnosticEn": "Compressed silvery body with sharp ventral scutes, median notch in upper jaw, and numerous gill rakers.",
        "diagnosticBn": "ধারালো স্কিউটযুক্ত রূপালী দেহ, ওপরের চোয়ালে খাঁজ এবং অসংখ্য ফুলকা রেকার।"
      }
    ],
    "exampleSpeciesIds": [
      "sp-tenualosa-ilisha"
    ],
    "referenceIds": [
      "ref-hamilton-1822",
      "ref-rahman-2005",
      "ref-fishbase-2024"
    ],
    "authoritySource": "Eschmeyer's Catalog of Fishes / Whitehead (1985) FAO Clupeoid Fishes of the World",
    "verificationStatus": "published",
    "publishedStatus": true,
    "taxonId": "taxon-clupeiformes",
    "scientificNamesSummary": {
      "en": "Dominant genera: Tenualosa, Sardinella, Anodontostoma, Dussumieria, Coilia, Setipinna. Verified binomials: Tenualosa ilisha (Hamilton, 1822), Sardinella longiceps Valenciennes, 1847, and Setipinna phasa (Hamilton, 1822).",
      "bn": "প্রধান গণ: Tenualosa, Sardinella, Anodontostoma, Dussumieria, Coilia, Setipinna। বৈজ্ঞানিক নাম: Tenualosa ilisha (Hamilton, 1822), Sardinella longiceps Valenciennes, 1847, এবং Setipinna phasa (Hamilton, 1822)।"
    },
    "examplesSummary": {
      "en": "Verified examples include Hilsa Shad (Tenualosa ilisha), Indian Oil Sardine (Sardinella longiceps), Chacunda Gizzard Shad (Anodontostoma chacunda), Gangetic Hairfin Anchovy (Setipinna phasa), and Goldstripe Pony Herring (Dussumieria acuta).",
      "bn": "যাচাইকৃত উদাহরণের মধ্যে রয়েছে জাতীয় মাছ ইলিশ (Tenualosa ilisha), ভারতীয় তেল সার্ডিন (Sardinella longiceps), চকুনদা গিজার্ড শ্যাড (Anodontostoma chacunda), ফ্যাঁসা মাছ (Setipinna phasa) এবং রেইনবো সার্ডিন (Dussumieria acuta)।"
    },
    "additionalInformation": {
      "en": "Clupeiforms are anadromous or coastal pelagic schooling fishes constituting the single most valuable commercial fishery in Bangladesh. Tenualosa ilisha alone accounts for approximately 12% of total national fish production.",
      "bn": "ইলিশ ও সংশ্লিষ্ট প্রজাতিগুলো বাংলাদেশের মৎস্য অর্থনীতির প্রাণকেন্দ্র। জাতীয় মাছ ইলিশ একা মোট মৎস্য উৎপাদনের প্রায় ১২% অবদান রাখে এবং লক্ষাধিক উপকূলীয় জেলের প্রধান অবলম্বন।"
    }
  },
  {
    "id": "order-cypriniformes",
    "rank": "order",
    "scientificName": "Cypriniformes",
    "bengaliName": "কার্প ও পুঁটি বর্গ",
    "englishName": "Carps, Minnows & Loaches",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিপাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Neopterygii",
        "nameBn": "নিওপটেরিগি"
      },
      {
        "rank": "order",
        "name": "Cypriniformes",
        "nameBn": "কার্প ও পুঁটি বর্গ"
      }
    ],
    "shortDescription": {
      "en": "The most diverse order of freshwater fishes in the world. Characterized by toothless jaws, specialized pharyngeal chewing teeth, and a Weberian apparatus connecting ear and swim bladder.",
      "bn": "বিশ্বের মিঠাপানির মাছের সর্বাধিক বৈচিত্র্যময় বর্গ। এদের চোয়াল দাঁতহীন, গলায় বিশেষ ফ্যারিঞ্জিয়াল দাঁত থাকে এবং কান ও পটকার মধ্যে ওয়েবেরিয়ান অ্যাপারেটাস বিদ্যমান।"
    },
    "diagnosticCharacteristics": {
      "en": "Jaws completely toothless (oral jaw teeth absent); chewing performed by one to three rows of pharyngeal teeth biting against a hard chewing pad (callous pad of the basioccipital bone); kinethmoid bone present in snout allowing protrusible upper jaw; body covered with cycloid scales; head scaleless; barbels present or absent; adipose fin absent; Weberian apparatus connecting inner ear to anterior chamber of swim bladder.",
      "bn": "মুখের চোয়ালে কোনো দাঁত নেই; গলবিলের ফ্যারিঞ্জিয়াল দাঁত দিয়ে খাবার চূর্ণ করা হয়; কাইনেথময়েড অস্থির কারণে ওপরের চোয়াল প্রসারিত হতে পারে; দেহ সাইক্লয়েড আঁইশে আবৃত কিন্তু মাথা আঁইশহীন; কোনো কোনো প্রজাতিতে শুঙ্গ (বার্বেল) থাকে; এডিপোজ পাখনা অনুপস্থিত; ওয়েবেরিয়ান অ্যাপারেটাস উপস্থিত।",
      "keyFeatures": {
        "en": [
          "Completely toothless jaws with well-developed pharyngeal teeth",
          "Functional Weberian apparatus connecting gas bladder to inner ear",
          "Protractile mouth often flanked by sensory barbels",
          "Scaleless head and cycloid scales on trunk"
        ],
        "bn": [
          "দাঁতহীন চোয়াল ও উন্নত গলবিলীয় দাঁতের সারি",
          "তীব্র শ্রবণ সহায়ক ওয়েবেরিয়ান যন্ত্র",
          "সামনে প্রসারিত মুখ এবং সংবেদনশীল বার্বেল বা শুঙ্গ",
          "আঁইশহীন মাথা এবং শরীরে সাইক্লয়েড আঁইশ"
        ]
      }
    },
    "habitat": {
      "en": "Exclusively freshwater environments: large river channels, oxbow lakes (baors), seasonal floodplains, and tectonic haors.",
      "bn": "সম্পূর্ণরূপে মিঠাপানির জলজ পরিবেশ: বড় নদী, বাওড়, বিল, হাওর এবং প্লাবনভূমি।",
      "systems": [
        "freshwater"
      ]
    },
    "ecosystem": {
      "en": "Dominant ecological component of the Bengal floodplain potamon. Major carps partition the water column into surface feeders (Catla catla), column/vegetation feeders (Labeo rohita), and benthic detritivores (Cirrhinus mrigala). Halda River serves as the unique natural tidal spawning sanctuary.",
      "bn": "বাঙালি প্লাবনভূমির প্রধান জলজ প্রজাতি। পানির ওপরের স্তরে কাতলা, মধ্যস্তরে রুই এবং তলদেশে মৃগেল অবস্থান করে খাদ্যের ভারসাম্য রক্ষা করে। হালদা নদী এদের প্রধান প্রাকৃতিক ডিম সংগ্রহ ক্ষেত্র।"
    },
    "feeding": {
      "en": "Wide ecological divergence: surface micro-crustacean and zooplankton filterers (Catla), column phytoplankton and periphyton grazers with fringed lips (Rohu), benthic mud and organic detritus vacuumers (Mrigal), and omnivorous barbs (Pethia).",
      "bn": "বিচিত্র খাদ্যাভ্যাস: ওপরের স্তরের জুপ্ল্যাঙ্কটন ভক্ষণ (কাতলা), মধ্যম স্তরের শৈবাল ও পেরিফাইটন ভক্ষণ (রুই), তলদেশের জৈব কাদা ও ডেট্রিটাস ভক্ষণ (মৃগেল) এবং ক্ষুদ্র পুঁটি মাছের সর্বভুক স্বভাব।"
    },
    "reproduction": {
      "en": "Potamodromous riverine spawners. Exhibit synchronized mass spawning in fast-flowing flooded river currents during the monsoon, accompanied by heavy rain and thunderstorm hydrodynamics.",
      "bn": "নদীজ পরিযায়ী প্রজননকারী। বর্ষাকালে নতুন পানির ঢল ও বজ্রবৃষ্টির সময় নদীর প্রবল স্রোতে ঝাঁক বেঁধে ডিম ছাড়ে।"
    },
    "distribution": {
      "en": "Widespread across Eurasia, North America, and Africa. In Bangladesh, represents the core economic, cultural, and ecological fish fauna.",
      "bn": "ইউরেশিয়া, আফ্রিকা ও উত্তর আমেরিকা জুড়ে বিস্তৃত। বাংলাদেশে অর্থনৈতিক ও সংস্কৃতির অন্যতম মূল চালিকাশক্তি।"
    },
    "importantFamilies": [
      {
        "name": "Cyprinidae",
        "commonEn": "Carps and Minnows",
        "commonBn": "কার্প ও পুঁটি গোত্র",
        "diagnosticEn": "Toothless oral jaws, specialized pharyngeal teeth, toothless palatine, cycloid scales.",
        "diagnosticBn": "চোয়াল দাঁতহীন, ফ্যারিঞ্জিয়াল দাঁত উপস্থিত, সাইক্লয়েড আঁইশযুক্ত দেহ।"
      }
    ],
    "exampleSpeciesIds": [
      "sp-labeo-rohita",
      "sp-catla-catla",
      "sp-cirrhinus-mrigala",
      "sp-pethia-conchonius"
    ],
    "referenceIds": [
      "ref-hamilton-1822",
      "ref-rahman-2005",
      "ref-fishbase-2024"
    ],
    "authoritySource": "Eschmeyer's Catalog of Fishes / Nelson et al. (2016)",
    "verificationStatus": "published",
    "publishedStatus": true,
    "taxonId": "taxon-cypriniformes",
    "scientificNamesSummary": {
      "en": "Dominant genera: Labeo, Catla (Gibelion), Cirrhinus, Pethia, Puntius, Botia, Schistura. Iconic binomials: Labeo rohita (Hamilton, 1822), Catla catla (Hamilton, 1822), Cirrhinus mrigala (Hamilton, 1822), and Pethia conchonius (Hamilton, 1822).",
      "bn": "প্রধান গণ: Labeo, Catla, Cirrhinus, Pethia, Puntius, Botia, Schistura। প্রখ্যাত বৈজ্ঞানিক নাম: Labeo rohita (Hamilton, 1822), Catla catla (Hamilton, 1822), Cirrhinus mrigala (Hamilton, 1822), এবং Pethia conchonius (Hamilton, 1822)।"
    },
    "examplesSummary": {
      "en": "Verified examples include Rohu (Labeo rohita), Catla (Catla catla), Mrigal Carp (Cirrhinus mrigala), Rosy Barb (Pethia conchonius), and Olive Barb (Systomus sarana).",
      "bn": "যাচাইকৃত উদাহরণের মধ্যে রয়েছে রুই (Labeo rohita), কাতলা (Catla catla), মৃগেল (Cirrhinus mrigala), কাঞ্চন পুঁটি (Pethia conchonius) এবং সরপুঁটি (Systomus sarana)।"
    },
    "additionalInformation": {
      "en": "Cypriniformes is the premier freshwater fish order globally and the cornerstone of Bengal aquaculture. The Halda River in southeastern Bangladesh is the only natural tidal river in the world where major Indian carps spawn synchronously during spring thunderstorms.",
      "bn": "কার্প বর্গীয় মাছ বৈশ্বিক মিঠাপানির অন্যতম বৃহত্তম গোষ্ঠী এবং বাংলার অভ্যন্তরীণ মৎস্যচাষের ভিত্তি। দক্ষিণ-পূর্ব বাংলাদেশের হালদা নদী বিশ্বের একমাত্র প্রাকৃতিক জোয়ারভাটার নদী যেখানে ভারতীয় রুই জাতীয় মাছ প্রাকৃতিকভাবে ব্যাপক প্রজনন সম্পন্ন করে।"
    }
  },
  {
    "id": "order-siluriformes",
    "rank": "order",
    "scientificName": "Siluriformes",
    "bengaliName": "ক্যাটফিশ বা ক্যাটল মাছ বর্গ",
    "englishName": "Catfishes",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিপাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Neopterygii",
        "nameBn": "নিওপটেরিগি"
      },
      {
        "rank": "order",
        "name": "Siluriformes",
        "nameBn": "ক্যাটফিশ বা ক্যাটল মাছ বর্গ"
      }
    ],
    "shortDescription": {
      "en": "Predominantly scaleless fishes recognized by sensory barbels (whiskers) around the mouth, heavy pectoral and dorsal spine armature, and a flattened head.",
      "bn": "আঁইশহীন মাছ যাদের মুখের চারপাশে সংবেদনশীল গোঁফ বা শুঙ্গ (বার্বেল), শক্ত ও ধারালো বক্ষ-পৃষ্ঠ কাঁটা এবং চ্যাপ্টা মাথা থাকে।"
    },
    "diagnosticCharacteristics": {
      "en": "Body completely scaleless (naked skin, or rarely with bony plates); prominent sensory barbels (up to four pairs: nasal, maxillary, and two mental pairs); leading pectoral and dorsal fins typically armed with strong, frequently serrated and sometimes venomous spines; adipose fin commonly present; skull roof heavily ossified; swim bladder connected to inner ear via Weberian ossicles.",
      "bn": "দেহ সম্পূর্ণ আঁইশবিহীন মসৃণ ত্বক দ্বারা আবৃত; মুখের চারধারে ১ থেকে ৪ জোড়া সংবেদনশীল শুঙ্গ (বার্বেল); বক্ষ ও পৃষ্ঠপাখনার শুরুতে শক্ত, খাঁজকাটা এবং অনেক সময় বিষাক্ত কাঁটা থাকে; অধিকাংশে এডিপোজ পাখনা থাকে; মাথা শক্ত খুলি দ্বারা গঠিত; ওয়েবেরিয়ান অ্যাপারেটাস উপস্থিত।",
      "keyFeatures": {
        "en": [
          "Scaleless body or encased in bony dermal scute plates",
          "Up to 4 pairs of prominent tactile barbels around mouth",
          "Sharp, locking pectoral and dorsal spines often mildly venomous",
          "Prominent Weberian apparatus and reduced swim bladder"
        ],
        "bn": [
          "সম্পূর্ণ আঁইশহীন ত্বক বা শক্ত অস্থিময় প্লেটযুক্ত দেহ",
          "মুখের চারদিকে ১ থেকে ৪ জোড়া সংবেদনশীল শুঙ্গ (বার্বেল)",
          "পিঠ ও বক্ষপাখনার গোড়ায় শক্ত ও ধারালো আত্মরক্ষামূলক কাঁটা",
          "ওয়েবেরিয়ান যন্ত্র ও অস্থিপরিবেষ্টিত পটকা"
        ]
      }
    },
    "habitat": {
      "en": "Inland rivers, deep potamon channels, turbid floodplain swamps, tectonic haors, and brackish estuarine waterways.",
      "bn": "অভ্যন্তরীণ নদী, গভীর নদীজ খাদ, ঘোলাটে বিল ও হাওর এবং মোহনাজ জলপথ।",
      "systems": [
        "freshwater",
        "brackish"
      ]
    },
    "ecosystem": {
      "en": "Keystone predators and bottom scavengers across Bangladesh river basins (Padma, Meghna, Jamuna) and wetlands. Top predators like Wallago attu structure forage fish communities, while air-breathers (Clarias, Heteropneustes) colonize oxygen-depleted hypoxic swamps.",
      "bn": "বাংলাদেশের নদী ও জলাভূমির প্রধান শিকারী ও তলদেশীয় খাদ্য গ্রহণকারী। বোয়ালের মতো শীর্ষ শিকারী মাছের সংখ্যা নিয়ন্ত্রণ করে, আর শিং-মাগুরের মতো প্রজাতি অক্সিজেনহীন বদ্ধ জলাশয়ে টিকে থাকে।"
    },
    "feeding": {
      "en": "Apex predatory piscivores (Wallago attu), midwater predatory planktivores (Eutropiichthys vacha), benthic insectivores (Mystus cavasius), and omnivorous scavengers.",
      "bn": "শীর্ষ শিকারী মাছখেকো (বোয়াল), মধ্যস্তরের শিকারী (বাচা), তলদেশীয় কীটপতঙ্গভোজী (গুলশা টেংরা) এবং সর্বভুক।"
    },
    "reproduction": {
      "en": "Diverse breeding biology. Riverine catfishes spawn in flooded channels during monsoon floods. Air-breathing wetland species construct shallow nesting depressions in aquatic vegetation with parental vigilance.",
      "bn": "বিচিত্র প্রজনন পদ্ধতি। নদীজ প্রজাতি বর্ষার বন্যায় ডিম ছাড়ে। শিং ও মাগুর মাছ জলাভূমির কিনারায় জলজ উদ্ভিদের ভেতর গর্ত করে ডিম পাড়ে এবং পাহারা দেয়।"
    },
    "distribution": {
      "en": "Found on all continents except Antarctica. Vast diversity across South Asian freshwaters.",
      "bn": "অ্যান্টার্কটিকা ছাড়া সকল মহাদেশে বিস্তৃত। দক্ষিণ এশিয়ার মিঠাপানিতে এদের ব্যাপক বৈচিত্র্য বিদ্যমান।"
    },
    "importantFamilies": [
      {
        "name": "Siluridae",
        "commonEn": "Sheatfishes",
        "commonBn": "বোয়াল ও পাবদা গোত্র",
        "diagnosticEn": "Dorsal fin tiny or absent, anal fin extremely elongated, very large mouth gape.",
        "diagnosticBn": "ক্ষুদ্র পৃষ্ঠপাখনা, অতি দীর্ঘ পায়ুপাখনা এবং বিশাল মুখগহ্বর।"
      },
      {
        "name": "Pangasiidae",
        "commonEn": "Shark Catfishes",
        "commonBn": "পাঙ্গাস গোত্র",
        "diagnosticEn": "Large compressed scaleless body, two pairs of barbels, serrated spines.",
        "diagnosticBn": "বিশাল আঁইশহীন দেহ, দুই জোড়া শুঙ্গ এবং শক্ত খাঁজকাটা কাঁটা।"
      },
      {
        "name": "Clariidae",
        "commonEn": "Air-breathing Catfishes",
        "commonBn": "মাগুর গোত্র",
        "diagnosticEn": "Elongate spineless dorsal fin, four pairs of barbels, suprabranchial arborescent breathing organ.",
        "diagnosticBn": "দীর্ঘ কাঁটাহীন পৃষ্ঠপাখনা, চার জোড়া শুঙ্গ এবং ফুলকার অতিরিক্ত শ্বসন অঙ্গ।"
      },
      {
        "name": "Heteropneustidae",
        "commonEn": "Stinging Catfishes",
        "commonBn": "শিং গোত্র",
        "diagnosticEn": "Venomous pectoral spines, two pairs of barbels, tubular air-sac extension.",
        "diagnosticBn": "বিষাক্ত বক্ষকাঁটা, দুই জোড়া শুঙ্গ এবং পেছনের দিকে প্রসারিত অতিরিক্ত শ্বসন থলি।"
      },
      {
        "name": "Bagridae",
        "commonEn": "Bagrid Catfishes",
        "commonBn": "টেংরা গোত্র",
        "diagnosticEn": "Four pairs of barbels with long maxillary barbels, well-developed adipose fin.",
        "diagnosticBn": "চার জোড়া শুঙ্গ (ম্যাক্সিলারি শুঙ্গ লম্বা) এবং সুস্পষ্ট এডিপোজ পাখনা।"
      },
      {
        "name": "Schilbeidae",
        "commonEn": "Schilbeid Catfishes",
        "commonBn": "বাচা ও কাজলী গোত্র",
        "diagnosticEn": "Compressed body, long anal fin, pelagic riverine habits.",
        "diagnosticBn": "চ্যাপ্টা দেহ, লম্বা পায়ুপাখনা এবং নদীজ সাঁতারু স্বভাব।"
      }
    ],
    "exampleSpeciesIds": [
      "sp-pangasius-pangasius",
      "sp-clarias-batrachus",
      "sp-heteropneustes-fossilis",
      "sp-mystus-cavasius",
      "sp-wallago-attu",
      "sp-ompok-pabda",
      "sp-eutropiichthys-vacha",
      "sp-clarias-magur"
    ],
    "referenceIds": [
      "ref-hamilton-1822",
      "ref-rahman-2005",
      "ref-fishbase-2024"
    ],
    "authoritySource": "Eschmeyer's Catalog of Fishes / Ferraris (2007) Checklist of Catfishes",
    "verificationStatus": "published",
    "publishedStatus": true,
    "taxonId": "taxon-siluriformes",
    "scientificNamesSummary": {
      "en": "Major genera: Wallago, Clarias, Heteropneustes, Pangasius, Mystus, Ompok, Sperata, Bagarius. Key binomials: Wallago attu (Bloch & Schneider, 1801), Clarias magur (Hamilton, 1822), Heteropneustes fossilis (Bloch, 1794), and Pangasius pangasius (Hamilton, 1822).",
      "bn": "প্রধান গণ: Wallago, Clarias, Heteropneustes, Pangasius, Mystus, Ompok, Sperata, Bagarius। প্রখ্যাত বৈজ্ঞানিক নাম: Wallago attu (Bloch & Schneider, 1801), Clarias magur (Hamilton, 1822), Heteropneustes fossilis (Bloch, 1794) এবং Pangasius pangasius (Hamilton, 1822)।"
    },
    "examplesSummary": {
      "en": "Verified examples include Boal / Freshwater Shark (Wallago attu), Native Deshi Magur (Clarias magur), Shing / Stinging Catfish (Heteropneustes fossilis), Yellow Mystus / Tengra (Mystus cavasius), and Pabda (Ompok pabda).",
      "bn": "যাচাইকৃত উদাহরণের মধ্যে রয়েছে বোয়াল (Wallago attu), দেশি মাগুর (Clarias magur), শিং (Heteropneustes fossilis), গুলশা-টেংরা (Mystus cavasius) এবং পাবদা (Ompok pabda)।"
    },
    "additionalInformation": {
      "en": "Catfishes possess remarkable sensory adaptations with four pairs of sensitive barbels and Weberian apparatus. Many species (Clariidae, Heteropneustidae) feature vascularized accessory suprabranchial air-breathing organs enabling survival in deoxygenated stagnant waters.",
      "bn": "ক্যাটফিশদের মুখের চারজোড়া সংবেদনশীল শুঙ্গ ও স্পর্শগ্রাহী অঙ্গ থাকে। মাগুর ও শিং মাছে বিশেষ অতিরিক্ত শ্বসন অঙ্গ (সুপ্রাব্রাঙ্কিয়াল অর্গান) থাকে যার ফলে এরা অক্সিজেনহীন পচা পানিতে ও আর্দ্র কাদার ভেতর দীর্ঘক্ষণ বেঁচে থাকতে পারে।"
    }
  },
  {
    "id": "order-anabantiformes",
    "rank": "order",
    "scientificName": "Anabantiformes",
    "bengaliName": "কৈ ও শোল বর্গ",
    "englishName": "Gouramis, Snakeheads & Climbing Perches",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিপাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Neopterygii",
        "nameBn": "নিওপটেরিগি"
      },
      {
        "rank": "order",
        "name": "Anabantiformes",
        "nameBn": "কৈ ও শোল বর্গ"
      }
    ],
    "shortDescription": {
      "en": "Fishes possessing accessory suprabranchial air-breathing organs (labyrinth organ or vascularized suprabranchial cavities) enabling survival in deoxygenated stagnant waters.",
      "bn": "অতিরিক্ত শ্বসন অঙ্গযুক্ত (ল্যাবিরিন্থ অঙ্গ বা রক্তনালীপূর্ণ ফুলকা প্রকোষ্ঠ) মাছ যা অক্সিজেনহীন বদ্ধ পানিতে বাতাস থেকে শ্বাস নিয়ে বেঁচে থাকতে পারে।"
    },
    "diagnosticCharacteristics": {
      "en": "Possession of suprabranchial accessory air-breathing apparatus (labyrinth organ in Anabantoidei; vascularized pharyngeal diverticula in Channoidei); body covered with ctenoid or cycloid scales; head often flattened or snake-like with large plate-like scales; dorsal and anal fins usually elongate, with or without spines; capable of atmospheric air breathing and short terrestrial overland locomotion in damp conditions.",
      "bn": "ফুলকার ওপর অতিরিক্ত বায়বীয় শ্বসন অঙ্গ (কৈ মাছে ল্যাবিরিন্থ অঙ্গ; শোল মাছে রক্তনালীপূর্ণ শ্বসন গহ্বর); টিনয়েড বা সাইক্লয়েড আঁইশে আবৃত দেহ; মাথা সাপের মতো বা চ্যাপ্টা এবং বড় প্লেটের মতো আঁইশযুক্ত; লম্বা পৃষ্ঠ ও পায়ুপাখনা; আর্দ্র পরিবেশে মাটির ওপর দিয়ে স্বল্প দূরত্ব চলাচল করতে সক্ষম।",
      "keyFeatures": {
        "en": [
          "Auxiliary suprabranchial labyrinth organ enabling obligate aerial respiration",
          "Ability to survive in warm, highly hypoxic stagnant waters and crawl overland",
          "Elongated dorsal and anal fins with spiny anterior rays",
          "Parental bubble-nest construction and brood guarding"
        ],
        "bn": [
          "বাতাস থেকে শ্বাস নেওয়ার জন্য অতিরিক্ত ল্যাবাইরিন্থ অঙ্গ",
          "অক্সিজেনহীন জলাশয় ও ডাঙায় বেঁচে থাকার ক্ষমতা",
          "পৃষ্ঠ ও পায়ুপাখনার অগ্রভাগে শক্ত কাঁটা",
          "বাতাসের বুদ্বুদ দিয়ে বাসা তৈরি ও অভিভাবকত্ব"
        ]
      }
    },
    "habitat": {
      "en": "Swamps, shallow ponds, marshes, inundated paddy fields, and slow-moving weed-choked rivers.",
      "bn": "জলাভূমি, অগভীর পুকুর, বিল, প্লাবিত ধানক্ষেত এবং আগাছাপূর্ণ ধীরগতির নদী।",
      "systems": [
        "freshwater"
      ]
    },
    "ecosystem": {
      "en": "Tolerates extreme hypoxia, surviving drying cycles in seasonal tropical wetlands across the Bengal Delta.",
      "bn": "অক্সিজেনের তীব্র ঘাটতি সহ্য করতে পারে এবং শুকিয়ে যাওয়া মৌসুমি জলাশয়ে কাদার মধ্যে আর্দ্রতা নিয়ে টিকে থাকে।"
    },
    "feeding": {
      "en": "Predatory carnivores (Channa striata, C. punctata feeding on fishes, frogs, and aquatic insects) and omnivorous perches (Anabas testudineus feeding on aquatic plants, insects, and detritus).",
      "bn": "শিকারী মাংসাশী (শোল ও টাকি মাছ, ব্যাঙ ও কীটপতঙ্গ খায়) এবং সর্বভুক (কৈ মাছ জলজ উদ্ভিদ, পোকা ও তলদেশের খাবার খায়)।"
    },
    "reproduction": {
      "en": "High degree of parental care: bubblenest construction among gouramis and bettas, and guarded surface egg rafts or mouth-brooding among snakeheads with dedicated juvenile protection.",
      "bn": "তীব্র অভিভাবকত্ব প্রদর্শন করে: বুদবুদের বাসা তৈরি করে অথবা ডিমের ভেলা বানিয়ে পাহারা দেয় এবং পোনাদের দলবদ্ধভাবে আগলে রাখে।"
    },
    "distribution": {
      "en": "Tropical and subtropical freshwaters of Africa and Southern/Eastern Asia. Extensively present in rural wetlands of Bangladesh.",
      "bn": "আফ্রিকা এবং দক্ষিণ ও পূর্ব এশিয়ার মিষ্টি পানিতে বিস্তৃত। বাংলাদেশের গ্রামীণ জলাশয়ে অত্যন্ত পরিচিত।"
    },
    "importantFamilies": [
      {
        "name": "Channidae",
        "commonEn": "Snakeheads",
        "commonBn": "শোল ও টাকি গোত্র",
        "diagnosticEn": "Snake-like head with large scales, long spineless dorsal fin, sharp jaw teeth.",
        "diagnosticBn": "সাপের মতো আঁইশযুক্ত মাথা, দীর্ঘ কাঁটাহীন পৃষ্ঠপাখনা এবং চোয়ালে ধারালো দাঁত।"
      },
      {
        "name": "Anabantidae",
        "commonEn": "Climbing Perches",
        "commonBn": "কৈ মাছ গোত্র",
        "diagnosticEn": "Labyrinth breathing organ, serrated opercular spines, spines on dorsal and anal fins.",
        "diagnosticBn": "ল্যাবিরিন্থ শ্বসন অঙ্গ, অপারকুলামে খাঁজকাটা কাঁটা এবং পাখনার শুরুতে শক্ত কাঁটা।"
      }
    ],
    "exampleSpeciesIds": [
      "sp-channa-striata",
      "sp-channa-punctata",
      "sp-anabas-testudineus"
    ],
    "referenceIds": [
      "ref-rahman-2005",
      "ref-fishbase-2024",
      "ref-bloch-1793"
    ],
    "authoritySource": "Eschmeyer's Catalog of Fishes / Britz (2008)",
    "verificationStatus": "published",
    "publishedStatus": true,
    "taxonId": "taxon-anabantiformes",
    "scientificNamesSummary": {
      "en": "Prominent genera: Anabas, Channa, Trichogaster, Colisa, Betta, Osphronemus. Verified binomials: Anabas testudineus (Bloch, 1792), Channa striata (Bloch, 1793), Channa punctata (Bloch, 1793), and Trichogaster fasciata Bloch & Schneider, 1801.",
      "bn": "প্রধান গণ: Anabas, Channa, Trichogaster, Colisa, Betta, Osphronemus। বৈজ্ঞানিক নাম: Anabas testudineus (Bloch, 1792), Channa striata (Bloch, 1793), Channa punctata (Bloch, 1793), এবং Trichogaster fasciata Bloch & Schneider, 1801।"
    },
    "examplesSummary": {
      "en": "Verified examples include Climbing Perch / Koi (Anabas testudineus), Striped Snakehead / Shol (Channa striata), Spotted Snakehead / Taki (Channa punctata), Banded Gourami / Kholisha (Trichogaster fasciata), and Great Snakehead / Gajar (Channa marulius).",
      "bn": "যাচাইকৃত উদাহরণের মধ্যে রয়েছে কৈ (Anabas testudineus), শোল (Channa striata), টাকি (Channa punctata), খলিসা (Trichogaster fasciata) এবং গজার (Channa marulius)।"
    },
    "additionalInformation": {
      "en": "Characterized by an auxiliary labyrinth organ situated above the first gill arch that facilitates direct aerial oxygen absorption. Anabas testudineus can migrate overland between wetlands during monsoon rains utilizing its spiny opercular plates and pectoral fins.",
      "bn": "এদের প্রথম ফুলকা চাপের ওপর একটি জটিল ল্যাবাইরিথ অঙ্গ বা গোলকধাঁধা শ্বসন অঙ্গ থাকে যা সরাসরি বাতাস থেকে অক্সিজেন গ্রহণ করতে দেয়। কৈ মাছ বর্ষাকালে পাখনার ওপর ভর দিয়ে কাদা ও ঘাসের ওপর হেঁটে এক জলাশয় থেকে অন্য জলাশয়ে যেতে পারে।"
    }
  },
  {
    "id": "order-osteoglossiformes",
    "rank": "order",
    "scientificName": "Osteoglossiformes",
    "bengaliName": "চিতল ও অস্থিজিহ্বা বর্গ",
    "englishName": "Bony-tongues & Featherbacks",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিপাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Neopterygii",
        "nameBn": "নিওপটেরিগি"
      },
      {
        "rank": "order",
        "name": "Osteoglossiformes",
        "nameBn": "চিতল ও অস্থিজিহ্বা বর্গ"
      }
    ],
    "shortDescription": {
      "en": "Ancient basal teleosts characterized by a toothed tongue that bites against the toothed roof of the mouth, highly compressed body, and elongated anal fin.",
      "bn": "প্রাচীন অস্থিময় মাছ যাদের জিহ্বায় দাঁত থাকে এবং তা তালুর দাঁতের বিপরীতে খাদ্য চূর্ণ করে; এদের দেহ গভীরভাবে চ্যাপ্টা এবং পায়ুপাখনা দীর্ঘ।"
    },
    "diagnosticCharacteristics": {
      "en": "Bony tongue well developed, bearing teeth that bite against parasphenoid and vomer bones on the palate; caudal fin confluent with or extremely close to very long anal fin; dorsal fin small and feather-like or absent; body strongly laterally compressed; scales small and cycloid; swim bladder with accessory hearing role.",
      "bn": "জিহ্বা অস্থিময় এবং দাঁতযুক্ত যা তালুর হাড়ের দাঁতের সাথে মিলে খাদ্য পিষে ফেলে; পায়ুপাখনা অত্যন্ত দীর্ঘ এবং পুচ্ছপাখনার সাথে যুক্ত; পৃষ্ঠপাখনা ছোট ও পালকের মতো; দেহ পার্শ্বীয়ভাবে অত্যন্ত চ্যাপ্টা; ক্ষুদ্র সাইক্লয়েড আঁইশ।",
      "keyFeatures": {
        "en": [
          "Bony toothed tongue biting against parasphenoid on roof of mouth",
          "Elongated body with dorsal and anal fins positioned far back near tail",
          "Heavy mosaic-like ganoid or large cycloid scales",
          "Primitive teleost branch with fossils dating back to the Jurassic"
        ],
        "bn": [
          "মুখের তালুর অস্থির সাথে ঘষা খাওয়া অস্থিময় দাঁতযুক্ত জিহ্বা",
          "দেহের পেছনের দিকে অবস্থিত পৃষ্ঠ ও পায়ুপাখনা",
          "ভারী মোজাইকের মতো শক্ত আঁইশ",
          "জুরাসিক যুগ থেকে টিকে থাকা আদিমতম টেলিয়স্ট শাখা"
        ]
      }
    },
    "habitat": {
      "en": "Large deep rivers, floodplain lakes, oxbow lakes, and tectonic haors.",
      "bn": "বড় গভীর নদী, বাওড়, বিল এবং হাওর।",
      "systems": [
        "freshwater"
      ]
    },
    "ecosystem": {
      "en": "Deep potamon river sections and deep-water depressions (kuas/beels) in the Meghna and Jamuna basins.",
      "bn": "মেঘনা ও যমুনা অববাহিকার গভীর নদীজ অংশ এবং হাওর অঞ্চলের গভীর কুয়া বা দহ।"
    },
    "feeding": {
      "en": "Nocturnal carnivorous predator preying on small fishes, freshwater prawns, and aquatic insects.",
      "bn": "নিশাচর মাংসাশী শিকারী; ছোট মাছ, চিংড়ি এবং জলজ কীট শিকার করে।"
    },
    "reproduction": {
      "en": "Lays adhesive eggs on submerged wooden structures or hard surfaces; exhibits paternal guarding behavior.",
      "bn": "পানির নিচে ডুবে থাকা গাছের গুঁড়ি বা শক্ত বস্তুর ওপর আঠালো ডিম পাড়ে; পুরুষ মাছ ডিম পাহারা দেয়।"
    },
    "distribution": {
      "en": "Relict ancient distribution across Africa, South America, Asia, and Australia. Represented by Notopteridae in Bangladesh.",
      "bn": "আফ্রিকা, দক্ষিণ আমেরিকা, এশিয়া ও অস্ট্রেলিয়ার প্রাচীন মিষ্টি পানিতে বিস্তৃত। বাংলাদেশে নটোপ্টেরिडी গোত্র এর প্রতিনিধিত্ব করে।"
    },
    "importantFamilies": [
      {
        "name": "Notopteridae",
        "commonEn": "Featherbacks",
        "commonBn": "চিতল ও ফলি গোত্র",
        "diagnosticEn": "Knife-like body with confluent anal and caudal fins, minute feather-like dorsal fin.",
        "diagnosticBn": "ছুরির মতো চ্যাপ্টা দেহ, পুচ্ছপাখনার সাথে যুক্ত দীর্ঘ পায়ুপাখনা, পালকের মতো পৃষ্ঠপাখনা।"
      }
    ],
    "exampleSpeciesIds": [
      "sp-chitala-chitala"
    ],
    "referenceIds": [
      "ref-hamilton-1822",
      "ref-rahman-2005",
      "ref-fishbase-2024"
    ],
    "authoritySource": "Eschmeyer's Catalog of Fishes / Nelson et al. (2016)",
    "verificationStatus": "published",
    "publishedStatus": true,
    "taxonId": "taxon-osteoglossiformes",
    "scientificNamesSummary": {
      "en": "Key genera: Chitala, Notopterus, Osteoglossum, Arapaima, Pantodon. Verified binomials: Chitala chitala (Hamilton, 1822), Notopterus notopterus (Pallas, 1769), and Arapaima gigas (Schinz, 1822).",
      "bn": "প্রধান গণ: Chitala, Notopterus, Osteoglossum, Arapaima, Pantodon। বৈজ্ঞানিক নাম: Chitala chitala (Hamilton, 1822), Notopterus notopterus (Pallas, 1769), এবং Arapaima gigas (Schinz, 1822)।"
    },
    "examplesSummary": {
      "en": "Verified examples include Clown Knifefish / Chital (Chitala chitala), Bronze Featherback / Foli (Notopterus notopterus), Silver Arowana (Osteoglossum bicirrhosum), Pirarucu (Arapaima gigas), and Freshwater Butterflyfish (Pantodon buchholzi).",
      "bn": "যাচাইকৃত উদাহরণের মধ্যে রয়েছে চিতল (Chitala chitala), ফলি (Notopterus notopterus), সিলভার অ্যারোয়ানা (Osteoglossum bicirrhosum), পিরারুকু (Arapaima gigas) এবং আফ্রিকান প্রজাপতি মাছ (Pantodon buchholzi)।"
    },
    "additionalInformation": {
      "en": "Osteoglossiformes (\"bony tongues\") is an ancient teleost lineage retaining primitive morphological characteristics including a toothed parasitic bone on the floor of the mouth biting against parasphenoid teeth. Chitala chitala is an esteemed food fish in the Bengal delta.",
      "bn": "অস্টিওগ্লসিফর্মিস বা অস্থিময় জিভযুক্ত মাছ প্রাচীন টেলিয়স্ট মাছের একটি শাখা। এদের জিভের ওপর ধারালো দাঁত থাকে যা তালুর ওপর ঘষা লেগে শিকারকে চূর্ণ করে। পদ্মা ও মেঘনা অববাহিকার চিতল মাছ এর প্রখ্যাত উদাহরণ।"
    }
  },
  {
    "id": "order-synbranchiformes",
    "rank": "order",
    "scientificName": "Synbranchiformes",
    "bengaliName": "কুচিয়া ও শালবাইম বর্গ",
    "englishName": "Swamp Eels & Spiny Eels",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিপাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Neopterygii",
        "nameBn": "নিওপটেরিগি"
      },
      {
        "rank": "order",
        "name": "Synbranchiformes",
        "nameBn": "কুচিয়া ও শালবাইম বর্গ"
      }
    ],
    "shortDescription": {
      "en": "Elongated, eel-shaped fishes characterized by reduced or absent pelvic fins, a fleshy mobile snout proboscis, and isolated dorsal spines (Mastacembelidae) or fused gill openings.",
      "bn": "সাপের মতো লম্বাটে বাইম মাছ যাদের শ্রোণীপাখনা অনুপস্থিত, মুখে নমনীয় মাংসল শুঁড় রয়েছে এবং পিঠের ওপর ধারালো বিচ্ছিন্ন কাঁটা থাকে।"
    },
    "diagnosticCharacteristics": {
      "en": "Body eel-like and extremely elongated; pelvic fins completely absent; dorsal fin preceded by a series of 9–42 isolated, erectile sharp spines; snout extended into a prominent, trilobed sensory proboscis; gill openings small, ventral, or lateral; scales minute or absent; capable of burrowing in mud.",
      "bn": "দেহ অত্যন্ত লম্বা ও সাপের ন্যায়; শ্রোণীপাখনা সম্পূর্ণ অনুপস্থিত; পৃষ্ঠপাখনার শুরুতে ৯ থেকে ৪২টি স্বতন্ত্র খাড়া কাঁটা থাকে; মুখ একটি নমনীয় মাংসল শুঁড়ে পরিণত; ফুলকা ছিদ্র ছোট; ক্ষুদ্র আঁইশযুক্ত ত্বক; কাদায় গর্ত করে বাস করতে সক্ষম।",
      "keyFeatures": {
        "en": [
          "Eel-like scaleless body lacking pectoral and pelvic fins",
          "Branchial apertures fused into a single transverse ventral gill slit beneath throat",
          "Auxiliary buccopharyngeal air-breathing vascular chambers",
          "Protogynous hermaphroditism (transforming from female to male with age)"
        ],
        "bn": [
          "বক্ষ ও শ্রোণীপাখনা ছাড়া সর্পিল আঁইশহীন দেহ",
          "গলার নিচে একক অনুভূমিক ফুলকা ছিদ্র",
          "মুখ ও গলবিলীয় বিশেষ রক্তনালীর সাহায্যে বায়বীয় শ্বাসকার্য",
          "বয়সের সাথে স্ত্রী থেকে পুরুষে লিঙ্গান্তর (প্রোটোগাইনাস)"
        ]
      }
    },
    "habitat": {
      "en": "Rivers, freshwater canals, muddy bottom swamps, beels, and submerged weed beds.",
      "bn": "নদী, খাল, কর্দমাক্ত জলাভূমি, বিল এবং জলজ উদ্ভিদযুক্ত তলদেশ।",
      "systems": [
        "freshwater"
      ]
    },
    "ecosystem": {
      "en": "Benthic burrowers stabilizing organic sediment in floodplains and slow river channels.",
      "bn": "তলদেশীয় গর্তজীবী মাছ যা প্লাবনভূমি ও নদীর তলদেশের পলল স্তরে খাদ্য অনুসন্ধান করে।"
    },
    "feeding": {
      "en": "Carnivorous benthic predator feeding on insect larvae, oligochaetes, small crustaceans, and small bottom fishes.",
      "bn": "তলদেশীয় মাংসাশী; পোকার লার্ভা, কেঁচো, ছোট চিংড়ি এবং তলদেশের ক্ষুদ্র মাছ খায়।"
    },
    "reproduction": {
      "en": "Spawns during the monsoon among submerged roots and vegetation; eggs are sticky and adhere to plant stems.",
      "bn": "বর্ষাকালে জলজ উদ্ভিদের মূল ও পাতার মধ্যে আঠালো ডিম পাড়ে।"
    },
    "distribution": {
      "en": "Tropical and subtropical waters of Africa, Southern, and Southeastern Asia.",
      "bn": "আফ্রিকা, দক্ষিণ এবং দক্ষিণ-পূর্ব এশিয়ার মিষ্টি পানিতে বিস্তৃত।"
    },
    "importantFamilies": [
      {
        "name": "Mastacembelidae",
        "commonEn": "Spiny Eels",
        "commonBn": "শালবাইম ও তারা বাইম গোত্র",
        "diagnosticEn": "Series of isolated dorsal spines, elongated fleshy rostral appendage.",
        "diagnosticBn": "পিঠে বিচ্ছিন্ন কাঁটার সারি এবং মুখে সংবেদনশীল মাংসল শুঁড়।"
      }
    ],
    "exampleSpeciesIds": [
      "sp-macrognathus-aculeatus",
      "sp-mastacembelus-armatus"
    ],
    "referenceIds": [
      "ref-rahman-2005",
      "ref-fishbase-2024"
    ],
    "authoritySource": "Eschmeyer's Catalog of Fishes / Travers (1984)",
    "verificationStatus": "published",
    "publishedStatus": true,
    "taxonId": "taxon-synbranchiformes",
    "scientificNamesSummary": {
      "en": "Prominent genera: Mastacembelus, Macrognathus, Monopterus, Synbranchus. Key binomials: Mastacembelus armatus (Lacepède, 1800), Macrognathus aculeatus (Bloch, 1786), Macrognathus pancalus Hamilton, 1822, and Monopterus cuchia (Hamilton, 1822).",
      "bn": "প্রধান গণ: Mastacembelus, Macrognathus, Monopterus, Synbranchus। বৈজ্ঞানিক নাম: Mastacembelus armatus (Lacepède, 1800), Macrognathus aculeatus (Bloch, 1786), Macrognathus pancalus Hamilton, 1822 এবং Monopterus cuchia (Hamilton, 1822)।"
    },
    "examplesSummary": {
      "en": "Verified examples include Tire-track Spiny Eel / Baim (Mastacembelus armatus), Lesser Spiny Eel / Tara Baim (Macrognathus aculeatus), Barred Spiny Eel / Guchi Baim (Macrognathus pancalus), and Mud Eel / Gangetic Cuchia (Monopterus cuchia).",
      "bn": "যাচাইকৃত উদাহরণের মধ্যে রয়েছে শাল বাইম (Mastacembelus armatus), তারা বাইম (Macrognathus aculeatus), গুচি বাইম (Macrognathus pancalus) এবং কুচিয়া (Monopterus cuchia)।"
    },
    "additionalInformation": {
      "en": "Elongated, eel-shaped teleosts with continuous or reduced fins adapted for burrowing in benthic mud and vegetation. Monopterus cuchia possesses reduced respiratory gills and dual vascularized pharyngeal air-sacs, enabling prolonged survival out of water.",
      "bn": "সর্পিল লম্বা দেহযুক্ত মাছ যা জলাশয়ের কাদায় গর্ত করে বাস করার জন্য অত্যন্ত অভিযোজিত। কুচিয়া মাছের ফুলকা সংকুচিত হলেও বিশেষ গলবিলীয় বায়ুথলি থাকার কারণে এরা জলবিহীন ভিজে কাদায় কয়েক দিন পর্যন্ত জীবিত থাকতে পারে।"
    }
  },
  {
    "id": "order-perciformes",
    "rank": "order",
    "scientificName": "Perciformes",
    "bengaliName": "পার্চ ও ভেটকি বর্গ",
    "englishName": "Perch-like Fishes & Relatives",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিপাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Neopterygii",
        "nameBn": "নিওপটেরিগি"
      },
      {
        "rank": "order",
        "name": "Perciformes",
        "nameBn": "পার্চ ও ভেটকি বর্গ"
      }
    ],
    "shortDescription": {
      "en": "Spiny-rayed teleosts typically possessing spinous anterior dorsal fin rays, thoracic pelvic fins positioned directly below pectorals, and ctenoid scales.",
      "bn": "কাঁটাযুক্ত পাখনাধারী মাছ যাদের প্রথম পৃষ্ঠপাখনায় শক্ত কাঁটা, বক্ষপাখনার নিচে শ্রোণীপাখনা এবং টিনয়েড আঁইশ থাকে।"
    },
    "diagnosticCharacteristics": {
      "en": "Dorsal and anal fins divided into distinct anterior spinous portion and posterior soft-rayed portion; pelvic fins thoracic or jugular with one spine and up to five soft rays; ctenoid scales present; maxilla excluded from gape; opercle with spines.",
      "bn": "পৃষ্ঠ ও পায়ুপাখনা শক্ত কাঁটাযুক্ত অগ্রভাগ এবং নরম রশ্মিযুক্ত পেছনের ভাগে বিভক্ত; শ্রোণীপাখনা বক্ষপাখনার নিচে অবস্থিত; টিনয়েড আঁইশ; অপারকুলামে স্পষ্ট কাঁটা থাকে।",
      "keyFeatures": {
        "en": [
          "Ctenoid scales covering body and cheeks",
          "Dorsal fin divided into anterior spiny and posterior soft-rayed sections",
          "Thoracic pelvic fins bearing one spine and five soft rays",
          "Absence of Weberian apparatus; physoclistous swim bladder"
        ],
        "bn": [
          "টিনয়েড আঁইশে আবৃত দেহ ও গাল",
          "পৃষ্ঠপাখনা সামনের শক্ত কাঁটাযুক্ত এবং পেছনের নরম রশ্মিযুক্ত অংশে বিভক্ত",
          "একটি শক্ত কাঁটা ও পাঁচটি রশ্মিযুক্ত বক্ষীয় শ্রোণীপাখনা",
          "ওয়েবেরিয়ান যন্ত্রহীন ও ফাইসোক্লিস্টাস পটকা"
        ]
      }
    },
    "habitat": {
      "en": "Coastal marine waters, mangrove estuaries, tidal lagoons, and coastal rivers.",
      "bn": "উপকূলীয় সমুদ্র, ম্যানগ্রোভ মোহনা, জোয়ারভাটার খাঁড়ি এবং মোহনাজ নদী।",
      "systems": [
        "marine",
        "brackish",
        "freshwater"
      ]
    },
    "ecosystem": {
      "en": "Top predators of mangrove creeks and estuarine channels in the Sundarbans and coastal Bay of Bengal.",
      "bn": "সুন্দরবন ও বঙ্গোপসাগর উপকূলের মোহনাজ খাঁড়ির শীর্ষ শিকারী।"
    },
    "feeding": {
      "en": "Voracious predatory carnivores hunting schooling fishes, prawns, and swimming crabs.",
      "bn": "তীব্র শিকারী মাংসাশী; ছোট মাছ, চিংড়ি এবং সাঁতারু কাঁকড়া শিকার করে।"
    },
    "reproduction": {
      "en": "Catadromous migration in Latidae: adults migrate downstream from freshwater rivers to high-salinity river mouths or coastal reefs to spawn.",
      "bn": "ক্যাটাড্রোমাস পরিযায়ী; পূর্ণবয়স্ক ভেটকি মাছ ডিম ছাড়ার জন্য নদী থেকে সমুদ্রের মোহনায় বা নোনাপানিতে নেমে আসে।"
    },
    "distribution": {
      "en": "Worldwide coastal marine and freshwater environments.",
      "bn": "বিশ্বব্যাপী উপকূলীয় সমুদ্র ও মোহনাজ পরিবেশে বিস্তৃত।"
    },
    "importantFamilies": [
      {
        "name": "Latidae",
        "commonEn": "Lates Perches",
        "commonBn": "ভেটকি বা কোরাল গোত্র",
        "diagnosticEn": "Deeply notched dorsal fin, large mouth with protruding lower jaw, strong opercular spine.",
        "diagnosticBn": "খাঁজকাটা পৃষ্ঠপাখনা, প্রসারিত নিচের চোয়ালসহ বড় মুখ এবং অপারকুলামে ধারালো কাঁটা।"
      }
    ],
    "exampleSpeciesIds": [
      "sp-lates-calcarifer"
    ],
    "referenceIds": [
      "ref-fishbase-2024",
      "ref-bloch-1790"
    ],
    "authoritySource": "Eschmeyer's Catalog of Fishes / Betancur-R. et al. (2017)",
    "verificationStatus": "published",
    "publishedStatus": true,
    "taxonId": "taxon-perciformes",
    "scientificNamesSummary": {
      "en": "Major genera: Lates, Sillago, Johnius, Otolithes, Scatophagus, Polynemus. Prominent binomials: Lates calcarifer (Bloch, 1790), Sillago sihama (Forsskål, 1775), and Johnius coitor (Hamilton, 1822).",
      "bn": "প্রধান গণ: Lates, Sillago, Johnius, Otolithes, Scatophagus, Polynemus। বৈজ্ঞানিক নাম: Lates calcarifer (Bloch, 1790), Sillago sihama (Forsskål, 1775), এবং Johnius coitor (Hamilton, 1822)।"
    },
    "examplesSummary": {
      "en": "Verified examples include Barramundi / Asian Seabass / Koral (Lates calcarifer), Silver Whitings (Sillago sihama), Coitor Croaker / Poa (Johnius coitor), Spotted Scat / Bishtara (Scatophagus argus), and Mangrove Red Snapper (Lutjanus argentimaculatus).",
      "bn": "যাচাইকৃত উদাহরণের মধ্যে রয়েছে ভেটকি বা কোরাল (Lates calcarifer), রেখা বা তুলার ডান্ডি (Sillago sihama), কয়টর পোয়া (Johnius coitor), বিশতারা (Scatophagus argus) এবং লাল কোরাল (Lutjanus argentimaculatus)।"
    },
    "additionalInformation": {
      "en": "Traditionally the largest vertebrate order, modern phylogenetic systematics splits Perciformes into well-defined clades. In coastal Bangladesh, percoid fishes like Lates calcarifer represent premier high-value commercial estuarine and marine captures.",
      "bn": "ঐতিহ্যগতভাবে মেরুদণ্ডীদের বৃহত্তম বর্গ। উপকূলীয় ও সুন্দরবনের মোহনাজ অঞ্চলে কোরাল বা ভেটকি (Lates calcarifer) এবং পোয়া মাছ উচ্চ মূল্যের সুস্বাদু সামুদ্রিক বাণিজ্যিক মৎস্যসম্পদ হিসেবে পরিগণিত।"
    }
  },
  {
    "id": "order-coelacanthiformes",
    "rank": "order",
    "scientificName": "Coelacanthiformes",
    "bengaliName": "সিল্যাকান্থ বর্গ",
    "englishName": "Coelacanths",
    "parentTaxonId": "class-sarcopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Sarcopterygii",
        "nameBn": "মাংসলপাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Actinistia",
        "nameBn": "এক্টিনিস্টিয়া"
      },
      {
        "rank": "order",
        "name": "Coelacanthiformes",
        "nameBn": "সিল্যাকান্থ বর্গ"
      }
    ],
    "shortDescription": {
      "en": "Ancient relictual marine lobe-finned fishes characterized by a three-lobed diphycercal tail, an intracranial joint in the skull, and an oil-filled vestigial lung.",
      "bn": "প্রাচীন সামুদ্রিক মাংসলপাখনাযুক্ত মাছ যাদের ট্রাই-লোবড পুচ্ছপাখনা, করোটিকায় বিশেষ জয়েন্ট এবং তেলপূর্ণ নিষ্ক্রিয় ফুসফুস রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Diphycercal tail with a distinct supplemental central lobe; intracranial joint allowing upward flexion of snout; paired lobed fins moving in alternating diagonal gait homologous to tetrapod walking; rostral organ for electrosensory navigation; cosmoid scales.",
      "bn": "মাঝখানে অতিরিক্ত লোবযুক্ত তিন-খণ্ডের পুচ্ছপাখনা; করোটিকার বিশেষ জয়েন্ট যা ওপরের চোয়াল বাঁকাতে সাহায্য করে; চতুষ্পদীদের মতো পর্যায়ক্রমে আন্দোলিত মাংসল যুগ্ম পাখনা; ইলেক্ট্রো-রিসেপ্টর রোস্ট্রাল অঙ্গ; কসময়েড আঁইশ।",
      "keyFeatures": {
        "en": [
          "Muscular lobed paired fins with internal skeletal elements",
          "Three-lobed diphycercal tail with central axial filament",
          "Intracranial skull joint allowing upper jaw elevation",
          "Rostral electrosensory gel-filled organ for hunting in deep submarine caves"
        ],
        "bn": [
          "অভ্যন্তরীণ অস্থিসমৃদ্ধ পেশীবহুল মাংসল যুগ্ম পাখনা",
          "তিনটি খণ্ডযুক্ত ডাইফাইসার্কাল পুচ্ছপাখনা",
          "করোটিকার নমনীয় জয়েন্ট যা চোয়াল তুলতে সাহায্য করে",
          "গভীর সমুদ্রের আগ্নেয়গিরির গুহায় শিকার শনাক্তে রোস্ট্রাল অঙ্গ"
        ]
      }
    },
    "habitat": {
      "en": "Deep bathyal rocky submarine caves at 150–400 meters depth on steep volcanic slopes.",
      "bn": "১৫০ থেকে ৪০০ মিটার গভীরতায় সমুদ্রের তলদেশের আগ্নেয় পাথুরে গুহা।",
      "systems": [
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Deep bathypelagic submarine canyon habitats in the Western Indian Ocean and Indonesia.",
      "bn": "পশ্চিম ভারত মহাসাগর ও ইন্দোনেশিয়ার গভীর সাবমেরিন ক্যানিয়ন বাস্তুতন্ত্র।"
    },
    "feeding": {
      "en": "Nocturnal drift-predator hunting benthic fishes and squids using electroreception.",
      "bn": "নিশাচর শিকারী; বৈদ্যুতিক সংবেদনশীল অঙ্গ ব্যবহার করে তলদেশের মাছ ও স্কুইড শিকার করে।"
    },
    "reproduction": {
      "en": "Ovoviviparous with internal fertilization and remarkably long gestation period (3–5 years).",
      "bn": "অভ্যন্তরীণ নিষেকের মাধ্যমে ৩ থেকে ৫ বছর গর্ভধারণের পর সরাসরি শাবক প্রসব করে।"
    },
    "distribution": {
      "en": "Comoros, South Africa, Tanzania, Madagascar, and Indonesia. Not native to Bangladesh.",
      "bn": "কোমোরোস, দক্ষিণ আফ্রিকা, তানজানিয়া, মাদাগাস্কার এবং ইন্দোনেশিয়া। বাংলাদেশে কোনো প্রজাতি নেই।"
    },
    "importantFamilies": [
      {
        "name": "Latimeriidae",
        "commonEn": "Gombessa Coelacanths",
        "commonBn": "গোম্বেসা সিল্যাকান্থ গোত্র",
        "diagnosticEn": "Only living family of Actinistia, containing Latimeria chalumnae and L. menadoensis.",
        "diagnosticBn": "এক্টিনিস্টিয়া শ্রেণীর একমাত্র জীবিত গোত্র যার দুটি জীবিত প্রজাতি রয়েছে।"
      }
    ],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Forey (1998) History of the Coelacanth Fishes / Nelson et al. (2016)",
    "verificationStatus": "published",
    "publishedStatus": true,
    "notes": "Educational knowledge record: Verified species available in Bangladesh: 0.",
    "taxonId": "taxon-coelacanthiformes",
    "scientificNamesSummary": {
      "en": "Single living genus: Latimeria. Living binomials: Latimeria chalumnae Smith, 1939 (West Indian Ocean Coelacanth) and Latimeria menadoensis Pouyaud, Wirjoatmodjo, Rachmatika, Tjakrawidjaja, Hadiaty & Hadie, 1999 (Indonesian Coelacanth).",
      "bn": "একমাত্র জীবিত গণ: Latimeria। জীবিত বৈজ্ঞানিক নাম: Latimeria chalumnae Smith, 1939 (পশ্চিম ভারত মহাসাগরীয় সিল্যাকান্থ) এবং Latimeria menadoensis Pouyaud et al., 1999 (ইন্দোনেশীয় সিল্যাকান্থ)।"
    },
    "examplesSummary": {
      "en": "Verified representative living examples: West Indian Ocean Coelacanth (Latimeria chalumnae) and Indonesian Coelacanth (Latimeria menadoensis). Fossil examples include Coelacanthus granulatus and Mawsonia gigas.",
      "bn": "যাচাইকৃত জীবিত প্রামাণ্য উদাহরণ: পশ্চিম ভারত মহাসাগরীয় সিল্যাকান্থ (Latimeria chalumnae) এবং ইন্দোনেশীয় সিল্যাকান্থ (Latimeria menadoensis)।"
    },
    "additionalInformation": {
      "en": "Presumed extinct for 66 million years until a live specimen was hauled from South African waters off the Chalumna River in 1938. Coelacanths possess an intracranial hinge joint in the skull and lipid-filled vestigial lung. Zero living species occur in Bangladesh.",
      "bn": "৬৬ মিলিয়ন বছর পূর্বে ডাইনোসরদের সাথে বিলুপ্ত মনে করা হতো, যতক্ষণ না ১৯৩৮ সালে দক্ষিণ আফ্রিকার চালুমনা নদীর মোহনায় একটি জীবিত সিল্যাকান্থ ধরা পড়ে। এদের মাথার খুলিতে বিশেষ কব্জা সন্ধি রয়েছে। বাংলাদেশে এদের কোনো প্রজাতি নেই।"
    }
  },
  {
    "id": "order-ceratodontiformes",
    "rank": "order",
    "scientificName": "Ceratodontiformes",
    "bengaliName": "ফুসফুসযুক্ত মাছ বর্গ",
    "englishName": "Lungfishes",
    "parentTaxonId": "class-sarcopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Sarcopterygii",
        "nameBn": "মাংসলপাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Dipnoi",
        "nameBn": "ডিপনোই"
      },
      {
        "rank": "order",
        "name": "Ceratodontiformes",
        "nameBn": "ফুসফুসযুক্ত মাছ বর্গ"
      }
    ],
    "shortDescription": {
      "en": "Freshwater sarcopterygians possessing highly vascularized lungs for obligate or facultative aerial respiration, allowing survival in severe drought.",
      "bn": "মিঠাপানির মাংসলপাখনাযুক্ত মাছ যাদের বাতাস থেকে সরাসরি শ্বাস নেওয়ার জন্য উন্নত ফুসফুস রয়েছে, যা খরায় বেঁচে থাকতে সাহায্য করে।"
    },
    "diagnosticCharacteristics": {
      "en": "Presence of functional vascularized lungs derived from modified swim bladder; internal nostrils (choanae) present; autostylic jaw suspension; fan-like crushing toothplates instead of marginal teeth; long filamentous or paddle-like paired fins; capability of estivating in hardened subterranean mud cocoons for months during dry seasons.",
      "bn": "কার্যকরী ফুসফুসের উপস্থিতি; অভ্যন্তরীণ নাসারন্ধ্র (কোয়ানা) বিদ্যমান; চোয়ালে দাঁতের পরিবর্তে শক্তিশালী ক্রাশিং টুথপ্লেট; ফিলামেন্টাস বা প্যাডেলের মতো যুগ্ম পাখনা; খরা মৌসুমে মাটির নিচে কাদার কোকুন তৈরি করে সুপ্তাবস্থায় (এস্টিভেশন) টিকে থাকার ক্ষমতা।",
      "keyFeatures": {
        "en": [
          "Functional vascularized lungs derived from modified swim bladder",
          "Massive fan-shaped crushing tooth plates fused to jaws",
          "Aestivation inside underground mud-mucus cocoons during drought in African forms",
          "Internal nostrils (choanae) and fleshy paired fins"
        ],
        "bn": [
          "রক্তনালীপূর্ণ কার্যকরী ফুসফুস যা দিয়ে সরাসরি বাতাস গ্রহণ করে",
          "শক্ত শামুক ও খাদ্য চূর্ণ করার মজবুত পাখনার মতো দাঁতের প্লেট",
          "খরায় মাটির নিচে মিউকাসের কোকুন তৈরি করে দীর্ঘ সুপ্তাবস্থা (এস্টিভেশন)",
          "অভ্যন্তরীণ নাসারন্ধ্র ও মাংসল যুগ্ম পাখনা"
        ]
      }
    },
    "habitat": {
      "en": "Stagnant tropical freshwater swamps, temporary floodplains, and muddy river bends in Africa, South America, and Australia.",
      "bn": "আফ্রিকা, দক্ষিণ আমেরিকা ও অস্ট্রেলিয়ার আবদ্ধ গ্রীষ্মমন্ডলীয় জলাভূমি, প্লাবনভূমি ও কর্দমাক্ত নদী।",
      "systems": [
        "freshwater"
      ]
    },
    "ecosystem": {
      "en": "Ephemeral seasonal tropical wetlands undergoing extreme seasonal drying.",
      "bn": "তীব্র শুষ্কতার শিকার হওয়া মৌসুমি জলাভূমি বাস্তুতন্ত্র।"
    },
    "feeding": {
      "en": "Carnivorous/omnivorous bottom feeders crushing molluscs, crustaceans, and small fishes with massive tooth plates.",
      "bn": "তলদেশীয় খাদক; টুথপ্লেট দিয়ে শামুক, কাঁকড়া ও ছোট মাছের খোলস ভেঙে খায়।"
    },
    "reproduction": {
      "en": "Oviparous. Spawns in muddy vegetation nests; males provide parental protection for eggs and newly hatched larvae.",
      "bn": "ডিম্বপ্রসবকারী। কাদার ভেতর জলজ উদ্ভিদের মধ্যে ডিম পাড়ে এবং পুরুষ মাছ তা পাহারা দেয়।"
    },
    "distribution": {
      "en": "Africa (Protopterus), South America (Lepidosiren), and Queensland Australia (Neoceratodus). Not native to Bangladesh.",
      "bn": "আফ্রিকা, দক্ষিণ আমেরিকা এবং অস্ট্রেলিয়ায় সীমাবদ্ধ। বাংলাদেশে কোনো স্থানীয় প্রজাতি নেই।"
    },
    "importantFamilies": [
      {
        "name": "Protopteridae",
        "commonEn": "African Lungfishes",
        "commonBn": "আফ্রিকান ফুসফুসযুক্ত মাছ",
        "diagnosticEn": "Slender filamentous paired fins, paired lungs, obligatory air breathers capable of estivation.",
        "diagnosticBn": "সুতার মতো সরু যুগ্ম পাখনা, জোড়া ফুসফুস এবং কাদায় সুপ্তাবস্থায় বেঁচে থাকার ক্ষমতা।"
      }
    ],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-fishbase-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World",
    "verificationStatus": "published",
    "publishedStatus": true,
    "notes": "Educational knowledge record: Verified species available in Bangladesh: 0.",
    "taxonId": "taxon-ceratodontiformes",
    "scientificNamesSummary": {
      "en": "Key genera: Neoceratodus (Australia), Protopterus (Africa), Lepidosiren (South America). Living binomials: Neoceratodus forsteri (Krefft, 1870), Protopterus annectens (Owen, 1839), and Lepidosiren paradoxa Fitzinger, 1837.",
      "bn": "প্রধান গণ: Neoceratodus (অস্ট্রেলিয়া), Protopterus (আফ্রিকা), Lepidosiren (দক্ষিণ আমেরিকা)। জীবিত বৈজ্ঞানিক নাম: Neoceratodus forsteri (Krefft, 1870), Protopterus annectens (Owen, 1839), এবং Lepidosiren paradoxa Fitzinger, 1837।"
    },
    "examplesSummary": {
      "en": "Verified living representative examples: Australian Lungfish (Neoceratodus forsteri), West African Lungfish (Protopterus annectens), Marbled Lungfish (Protopterus aethiopicus), and South American Lungfish (Lepidosiren paradoxa).",
      "bn": "যাচাইকৃত জীবিত প্রামাণ্য উদাহরণ: অস্ট্রেলীয় লাংফিশ (Neoceratodus forsteri), পশ্চিম আফ্রিকান লাংফিশ (Protopterus annectens), মার্বেল লাংফিশ (Protopterus aethiopicus) এবং দক্ষিণ আমেরিকান লাংফিশ (Lepidosiren paradoxa)।"
    },
    "additionalInformation": {
      "en": "Lungfishes possess functional vascularized lungs derived from modified swim bladders allowing obligate or facultative air-breathing. Protopterus species can estivate inside underground mud mucus cocoons for multiple years during extreme drought. Zero living species occur in Bangladesh.",
      "bn": "ফুসফুসযুক্ত মাছে কার্যকরী ফুসফুস থাকে যার মাধ্যমে এরা সরাসরি বাতাস থেকে শ্বাস নেয়। আফ্রিকান লাংফিশ চরম খরার মৌসুমে মাটির নিচে শ্লেষ্মার কোকুন তৈরি করে কয়েক বছর পর্যন্ত সুপ্তাবস্থায় বেঁচে থাকতে পারে। বাংলাদেশে এদের কোনো প্রজাতি নেই।"
    }
  },
  {
    "id": "order-myxiniformes",
    "taxonId": "taxon-myxiniformes",
    "rank": "order",
    "scientificName": "Myxiniformes",
    "bengaliName": "হ্যাগফিশ বর্গ",
    "englishName": "Hagfishes",
    "parentTaxonId": "group-agnatha",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "subphylum",
        "name": "Craniata",
        "nameBn": "ক্রেনিয়াটা"
      },
      {
        "rank": "superclass",
        "name": "Agnatha",
        "nameBn": "চোয়ালবিহীন মাছ"
      },
      {
        "rank": "class",
        "name": "Myxini",
        "nameBn": "মিক্সিনি"
      },
      {
        "rank": "order",
        "name": "Myxiniformes",
        "nameBn": "হ্যাগফিশ বর্গ"
      }
    ],
    "shortDescription": {
      "en": "Primitive jawless, eel-like benthic marine scavengers with a cartilaginous skull, fibrous sheath, keratinous lingual cusps, and mucous slime pores.",
      "bn": "আদিম চোয়ালহীন ও সর্পিল সামুদ্রিক মেথর মাছ, যাদের তরুণাস্থিময় করোটিকা, শৃঙ্গীয় জিহ্বা-দাঁত এবং প্রচুর মিউকাস নিঃসরণকারী শ্লেষ্মা গ্রন্থি রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Jawless; persistent notochord lacking true vertebral centra; mouth surrounded by 3-4 pairs of sensory barbels; tongue with eversible bilateral rows of horny keratin teeth; 1 to 16 pairs of external gill pores; body scaleless, naked, and surrounded by ventrolateral slime glands producing voluminous defensive microfilament mucus.",
      "bn": "চোয়ালবিহীন; প্রকৃত কশেরুকার সেন্ট্রামহীন স্থায়ী নটোকর্ড; ৩-৪ জোড়া সংবেদনশীল বার্বেল বা শুঙ্গবেষ্টিত মুখ; বিপরীতমুখী কেরাটিনাস দাঁতযুক্ত জিহ্বা; ১ থেকে ১৬ জোড়া বাহ্যিক ফুলকা রন্ধ্র; আঁইশহীন ত্বক এবং আত্মরক্ষামূলক বিপুল মিউকাস ক্ষরণকারী শ্লেষ্মা গ্রন্থি বিদ্যমান।",
      "keyFeatures": {
        "en": [
          "Complete absence of true articulated jaws and paired limbs",
          "Single median nasohypophyseal aperture connecting to pharynx",
          "Ventrolateral series of specialized slime glands yielding defensive microfibrous mucus",
          "Eversible keratinized dental plates on cartilaginous lingual apparatus"
        ],
        "bn": [
          "প্রকৃত চোয়াল ও যুগ্ম পাখনার সম্পূর্ণ অনুপস্থিতি",
          "গলবিলের সাথে যুক্ত একক মধ্যম নাসারন্ধ্রীয় পথ",
          "দেহের দুই পাশে আত্মরক্ষামূলক বিপুল শ্লেষ্মা নিঃসরণকারী গ্রন্থি",
          "তরুণাস্থিময় জিহ্বায় উল্টানো যায় এমন কেরাটিনাস দাঁতের প্লেট"
        ]
      }
    },
    "habitat": {
      "en": "Cold-temperate and deep-sea marine benthic habitats, continental slopes, soft bathyal muds, and abyssal trenches at depths of 20 to 5,000 meters.",
      "bn": "শীতল-নাতিশীতোষ্ণ ও গভীর সমুদ্রের তলদেশ, মহীঢাল, গভীর সমুদ্রের কর্দমাক্ত তল এবং ২০ থেকে ৫,০০০ মিটার গভীর গিরিখাত।",
      "systems": [
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Vital benthic scavengers and detritivores, consuming decaying carcasses and whale-falls on the deep seabed to accelerate abyssal organic nutrient cycling.",
      "bn": "গভীর সমুদ্রের প্রধান মেথর প্রাণী; সমুদ্রের তলদেশের মৃত তিমি ও অন্যান্য পচনশীল মৃতদেহ খেয়ে পুষ্টি উপাদান দ্রুত পুনর্ব্যবহারযোগ্য করে।"
    },
    "feeding": {
      "en": "Opportunistic carrion feeders and burrowing detritivores. Tying their slender bodies into overhand knots to gain leverage while shearing flesh with rasping lingual teeth.",
      "bn": "পচনশীল মাংসাশী ও কর্দমভোজী। মৃতদেহের মাংস ছেঁড়ার সুবিধার্থে এরা নিজেদের দেহে বিশেষ গিঁট বেঁধে বল প্রয়োগ করে।"
    },
    "reproduction": {
      "en": "Oviparous. Large yolky eggs (20–25 mm) enclosed in tough horny capsules with hooked anchoring filaments, bypassing any larval phase into direct miniature juveniles.",
      "bn": "ডিম্বপ্রসবকারী। ২০-২৫ মিলিমিটার দৈর্ঘ্যের শক্ত কুসুমময় খোলসযুক্ত ডিম পাড়ে যা হুকের মতো আঁকড়ে থাকে; কোনো রূপান্তর বা লার্ভা দশা নেই।"
    },
    "distribution": {
      "en": "Circumglobal in cold-temperate and deep tropical ocean basins. Strictly absent in Bangladesh tropical shallow waters.",
      "bn": "বিশ্বের শীতল ও গভীর মহাসাগরে বিস্তৃত। বাংলাদেশের অগভীর গ্রীষ্মমন্ডলীয় জলসীমায় কোনো জীবিত প্রজাতি নেই।"
    },
    "importantFamilies": [
      {
        "name": "Myxinidae",
        "commonEn": "Hagfishes",
        "commonBn": "হ্যাগফিশ গোত্র",
        "diagnosticEn": "Body eel-shaped, eyes rudimentary and skin-covered, single nostril, barbels around mouth, slime pores present.",
        "diagnosticBn": "সর্পিল দেহ, ত্বক দ্বারা আবৃত চোখ, একক নাসারন্ধ্র, মুখের চারদিকে শুঙ্গ এবং শ্লেষ্মা রন্ধ্র বিদ্যমান।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Notable genera: Myxine, Eptatretus, Nemamyxine, and Neomyxine. Verified type binomials: Myxine glutinosa Linnaeus, 1758 and Eptatretus burgeri (Girard, 1855).",
      "bn": "উল্লেখযোগ্য গণ: Myxine, Eptatretus, Nemamyxine এবং Neomyxine। প্রামাণ্য বৈজ্ঞানিক নাম: Myxine glutinosa Linnaeus, 1758 এবং Eptatretus burgeri (Girard, 1855)।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Atlantic Hagfish (Myxine glutinosa), Inshore Hagfish (Eptatretus burgeri), Pacific Hagfish (Eptatretus stoutii), and Broadgilled Hagfish (Eptatretus cirrhatus).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: আটলান্টিক হ্যাগফিশ (Myxine glutinosa), উপকূলীয় হ্যাগফিশ (Eptatretus burgeri), প্যাসিফিক হ্যাগফিশ (Eptatretus stoutii) এবং ব্রডগিল্ড হ্যাগফিশ (Eptatretus cirrhatus)।"
    },
    "additionalInformation": {
      "en": "Myxiniformes preserves primitive craniate anatomical traits prior to the evolution of articulated jaws, offering benchmark evidence in vertebrate paleontology. Zero living species occur in Bangladesh.",
      "bn": "হ্যাগফিশ আদিম করোটিকাধারীদের দৈহিক গঠন ধারণ করে যা চোয়ালযুক্ত মেরুদণ্ডীর বিবর্তনের ভিত্তি বুঝতে অত্যন্ত গুরুত্বপূর্ণ। বাংলাদেশে এদের কোনো প্রজাতি নেই।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Fernholm (1998)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-petromyzontiformes",
    "taxonId": "taxon-petromyzontiformes",
    "rank": "order",
    "scientificName": "Petromyzontiformes",
    "bengaliName": "ল্যাম্প্রে বর্গ",
    "englishName": "Lampreys",
    "parentTaxonId": "group-agnatha",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "subphylum",
        "name": "Craniata",
        "nameBn": "ক্রেনিয়াটা"
      },
      {
        "rank": "superclass",
        "name": "Agnatha",
        "nameBn": "চোয়ালবিহীন মাছ"
      },
      {
        "rank": "class",
        "name": "Petromyzontida",
        "nameBn": "পেট্রোমাইজন্টিডা"
      },
      {
        "rank": "order",
        "name": "Petromyzontiformes",
        "nameBn": "ল্যাম্প্রে বর্গ"
      }
    ],
    "shortDescription": {
      "en": "Jawless, eel-like parasitic or non-parasitic aquatic vertebrates characterized by a toothed, circular sucking oral disc and seven lateral gill pores.",
      "bn": "চোয়ালহীন সর্পিল মেরুদণ্ডী জলজ প্রাণী, যাদের বৃত্তাকার দাঁতযুক্ত চোষক মুখ ও দুই পাশে ৭ জোড়া পৃথক ফুলকা রন্ধ্র রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Absence of true articulated jaws; oral sucker expanded into an open disc armed with cornified keratinous teeth and a central rasping tongue; 7 pairs of external gill pores opening independently; single dorsal nasohypophyseal pore; prominent well-developed eyes in adults; persistent notochord with rudimentary cartilaginous arcualia (vertebral precursors).",
      "bn": "প্রকৃত চোয়াল অনুপস্থিত; মুখ প্রশস্ত বৃত্তাকার চোষক ডিস্কে রূপান্তরিত যা শৃঙ্গীয় কেরাটিনাস দাঁত ও কেন্দ্রীয় দাঁতযুক্ত জিহ্বাবেষ্টিত; দুই পাশে ৭ জোড়া ফুলকা ছিদ্র স্বাধীনভাবে উন্মুক্ত; মাথার উপরে একক নাসারন্ধ্র; প্রাপ্তবয়স্কদের সুস্পষ্ট চোখ এবং আদিম কশেরুকার নিদর্শনযুক্ত স্থায়ী নটোকর্ড বিদ্যমান।",
      "keyFeatures": {
        "en": [
          "Circular suctorial oral disc equipped with concentric series of horny teeth",
          "Seven external lateral gill pores on each side of the branchial region",
          "Ammocoete larval phase living as blind microphagous burrowers in river sand",
          "Single dorsal nasohypophyseal opening not penetrating the oral cavity"
        ],
        "bn": [
          "কেরাটিনাস দাঁতযুক্ত বৃত্তাকার চোষক মুখ ডিস্ক",
          "দেহের উভয় পাশে ৭টি করে পৃথক বাহ্যিক ফুলকা ছিদ্র",
          "নদীর বালিতে বাস করা অন্ধ অ্যামোসিট লার্ভা দশা",
          "মাথার উপরের পৃষ্ঠে অবস্থিত একক নাসারন্ধ্রীয় ছিদ্র"
        ]
      }
    },
    "habitat": {
      "en": "Anadromous coastal marine corridors and clear, cold temperate freshwater rivers, streams, and gravel beds.",
      "bn": "পরিযায়ী উপকূলীয় সমুদ্র এবং নাতিশীতোষ্ণ অঞ্চলের স্বচ্ছ ও শীতল মিঠাপানির নদী ও পাথুরে পাহাড়ি ঝর্ণা।",
      "systems": [
        "marine",
        "freshwater"
      ]
    },
    "ecosystem": {
      "en": "Adults act as ectoparasites or apex micropredators on larger pelagic teleosts and elasmobranchs; ammocoete larvae serve as critical substrate biofilters in riverine nursery zones.",
      "bn": "প্রাপ্তবয়স্করা বড় মাছের ত্বকে চোষক লাগিয়ে রক্তভোজী এক্টোপ্যারাসাইট হিসেবে কাজ করে; এদের লার্ভা নদীর তলদেশের বালি ছেঁকে পুষ্টিকণা গ্রহণ করে পানি বিশুদ্ধ রাখে।"
    },
    "feeding": {
      "en": "Parasitic forms attach via oral suction, using the rasping tongue to puncture host skin and secrete anticoagulant lamphredin while feeding on blood and fluids; non-parasitic species do not feed as adults.",
      "bn": "পরজীবী প্রজাতিগুলো চোষক মুখ দিয়ে ধারক মাছের গায়ে আটকে যায় এবং জিহ্বা দিয়ে ত্বক ছিদ্র করে রক্তক্ষরণরোধক ল্যাম্ফ্রেডিন নিঃসরণ করে রক্ত ও রস চুষে খায়; অপরজীবী প্রজাতি প্রাপ্তবয়স্ক অবস্থায় খাবার খায় না।"
    },
    "reproduction": {
      "en": "Anadromous semelparity: migrating upstream to build gravel depression nests; adults spawn once and die; eggs hatch into blind ammocoete filter-feeding larvae lasting 3–7 years before metamorphosis.",
      "bn": "একবার প্রজননকারী (সেমেলপ্যারাস); উজানের নদীতে নুড়িপাথরে বাসা বানিয়ে ডিম পেড়েই প্রাপ্তবয়স্করা মারা যায়; ডিম ফুটে অ্যামোসিট লার্ভা বের হয় যা ৩-৭ বছর রূপান্তরের অপেক্ষায় থাকে।"
    },
    "distribution": {
      "en": "North and South temperate zones (Holarctic and Southern Hemisphere cool waters). Completely absent in tropical Bangladesh inland or coastal waters.",
      "bn": "উত্তর ও দক্ষিণ নাতিশীতোষ্ণ অঞ্চলে সীমাবদ্ধ। গ্রীষ্মমন্ডলীয় বাংলাদেশে অভ্যন্তরীণ নদী বা সাগরে এদের কোনো উপস্থিতি নেই।"
    },
    "importantFamilies": [
      {
        "name": "Petromyzontidae",
        "commonEn": "Northern Lampreys",
        "commonBn": "উত্তুরে ল্যাম্প্রে গোত্র",
        "diagnosticEn": "Oral disc with well-developed keratin teeth, dorsal fins separated or notched, Holarctic distribution.",
        "diagnosticBn": "উন্নত কেরাটিন দাঁতযুক্ত চোষক মুখ, পৃথক বা খাঁজযুক্ত পৃষ্ঠপাখনা, উত্তর গোলার্ধে বিস্তৃত।"
      },
      {
        "name": "Geotriidae",
        "commonEn": "Southern Pouched Lampreys",
        "commonBn": "দক্ষিণী থলিযুক্ত ল্যাম্প্রে গোত্র",
        "diagnosticEn": "Adult males develop large gular pouch beneath head, widely separated dorsal fins, Southern Hemisphere.",
        "diagnosticBn": "প্রাপ্তবয়স্ক পুরুষের গলার নিচে বড় থলি গঠিত হয়, দক্ষিণ গোলার্ধে বিস্তৃত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Notable genera: Petromyzon, Lampetra, Entosphenus, Ichthyomyzon, and Geotria. Verified binomials: Petromyzon marinus Linnaeus, 1758 and Lampetra fluviatilis (Linnaeus, 1758).",
      "bn": "উল্লেখযোগ্য গণ: Petromyzon, Lampetra, Entosphenus, Ichthyomyzon এবং Geotria। প্রামাণ্য বৈজ্ঞানিক নাম: Petromyzon marinus Linnaeus, 1758 এবং Lampetra fluviatilis (Linnaeus, 1758)।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Sea Lamprey (Petromyzon marinus), European River Lamprey (Lampetra fluviatilis), Pacific Lamprey (Entosphenus tridentatus), and Pouched Lamprey (Geotria australis).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: সামুদ্রিক ল্যাম্প্রে (Petromyzon marinus), ইউরোপীয় নদী ল্যাম্প্রে (Lampetra fluviatilis), প্রশান্ত মহাসাগরীয় ল্যাম্প্রে (Entosphenus tridentatus) এবং থলেযুক্ত ল্যাম্প্রে (Geotria australis)।"
    },
    "additionalInformation": {
      "en": "Petromyzontiformes offers crucial evolutionary insights into the adaptive immune system (variable lymphocyte receptors) and neurobiology. Zero native occurrences in Bangladesh.",
      "bn": "ল্যাম্প্রে মেরুদণ্ডী প্রাণীদের বিকল্প অনাক্রম্যতা ও স্নায়ুতন্ত্রের বিবর্তন গবেষণায় অত্যন্ত গুরুত্বপূর্ণ মডেল। বাংলাদেশে কোনো দেশীয় প্রজাতি নেই।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Potter et al. (2015)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-carcharhiniformes",
    "taxonId": "taxon-carcharhiniformes",
    "rank": "order",
    "scientificName": "Carcharhiniformes",
    "bengaliName": "গ্রাউন্ড হাঙ্গর বর্গ",
    "englishName": "Ground Sharks & Requiem Sharks",
    "parentTaxonId": "class-chondrichthyes",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Chondrichthyes",
        "nameBn": "তরুণাস্থিময় মাছ"
      },
      {
        "rank": "subclass",
        "name": "Elasmobranchii",
        "nameBn": "ইলাসমোব্রাঙ্কি"
      },
      {
        "rank": "order",
        "name": "Carcharhiniformes",
        "nameBn": "গ্রাউন্ড হাঙ্গর বর্গ"
      }
    ],
    "shortDescription": {
      "en": "The largest order of living sharks, characterized by two spineless dorsal fins, an anal fin, five gill slits, and eyes protected by a movable nictitating membrane.",
      "bn": "জীবিত হাঙ্গরদের বৃহত্তম বর্গ; যাদের কাঁটাহীন দুটি পৃষ্ঠপাখনা, একটি পায়ুপাখনা, ৫ জোড়া ফুলকা ছিদ্র এবং চোখ সুরক্ষিত রাখার নিকটিটেটিং পর্দা রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Two dorsal fins lacking spines; anal fin present; five lateral gill slits with the last 1–3 slits situated over or behind the pectoral fin origin; true movable internal nictitating eyelid; mouth extends well behind anterior margin of eyes; intestinal spiral valve typically scroll-type.",
      "bn": "কাঁটাহীন দুটি পৃষ্ঠপাখনা; পায়ুপাখনা বিদ্যমান; ৫ জোড়া ফুলকা ছিদ্র যার শেষ ১-৩টি বক্ষপাখনার গোড়ার ওপর অবস্থিত; সঞ্চালনক্ষম নিকটিটেটিং পর্দাযুক্ত চোখ; চোখের পেছনের কিনারা পর্যন্ত বিস্তৃত মুখগহ্বর এবং অন্ত্রে স্ক্রল-ধরনের স্পাইরাল ভালভ বিদ্যমান।",
      "keyFeatures": {
        "en": [
          "Movable nictitating third eyelid covering and shielding the eye",
          "Two spineless dorsal fins and an anal fin present",
          "Five pairs of gill slits on lateral sides of head",
          "Dominant predatory shark group in coastal and tropical shelf waters"
        ],
        "bn": [
          "চোখ সুরক্ষায় সঞ্চালনক্ষম নিকটিটেটিং চোখের পর্দা",
          "কাঁটাহীন দুটি পৃষ্ঠপাখনা এবং পায়ুপাখনা বিদ্যমান",
          "মাথার দুই পাশে ৫ জোড়া ফুলকা ছিদ্র",
          "উপকূলীয় ও গ্রীষ্মমন্ডলীয় সাগরে শীর্ষ শিকারী হাঙ্গর গোষ্ঠী"
        ]
      }
    },
    "habitat": {
      "en": "Coastal neritic shelves, tropical coral reefs, estuarine river mouths, and pelagic open oceanic waters.",
      "bn": "উপকূলীয় মহীসোপান, প্রবাল প্রাচীর, মোহনাজ নদীমুখ এবং উন্মুক্ত মহাসাগরীয় পেলাজিক জলসীমা।",
      "systems": [
        "marine",
        "brackish",
        "freshwater"
      ]
    },
    "ecosystem": {
      "en": "Apex and mesopredators maintaining marine trophic health across the Bay of Bengal continental shelf, the Swatch of No Ground, and coastal estuaries.",
      "bn": "বঙ্গোপসাগর মহীসোপান, সোয়াচ অব নো গ্রাউন্ড এবং সুন্দরবনের মোহনায় শীর্ষ শিকারী হিসেবে সামুদ্রিক খাদ্যশৃঙ্খলের ভারসাম্য রক্ষা করে।"
    },
    "feeding": {
      "en": "Active carnivores preying upon bony teleosts, rays, smaller sharks, cephalopods, and marine crabs.",
      "bn": "সক্রিয় মাংসাশী শিকারী; অস্থিময় মাছ, শঙ্কর মাছ, ছোট হাঙ্গর, স্কুইড এবং সামুদ্রিক কাঁকড়া শিকার করে।"
    },
    "reproduction": {
      "en": "Predominantly viviparous with placental yolk-sac attachment; select primitive taxa (Scyliorhinidae) oviparous with mermaid's purse egg cases.",
      "bn": "অধিকাংশ প্রজাতি অমরাযুক্ত কুসুমথলির মাধ্যমে জরায়ুজ শাবক প্রসবকারী (ভিভিপ্যারাস); কিছু আদিম প্রজাতি ডিম্বপ্রসবকারী।"
    },
    "distribution": {
      "en": "Circumglobal in tropical and temperate oceans. Well represented in the northern Bay of Bengal and Bangladesh EEZ.",
      "bn": "বিশ্বের গ্রীষ্মমন্ডলীয় ও নাতিশীতোষ্ণ সাগরে ব্যাপক বিস্তৃত। উত্তর বঙ্গোপসাগর ও বাংলাদেশের অর্থনৈতিক জলসীমায় প্রচুর উপস্থিতি।"
    },
    "importantFamilies": [
      {
        "name": "Carcharhinidae",
        "commonEn": "Requiem Sharks",
        "commonBn": "রেকিউম হাঙ্গর গোত্র",
        "diagnosticEn": "Round eyes with internal nictitating membrane, precaudal pits present, scroll-type intestinal valve.",
        "diagnosticBn": "অভ্যন্তরীণ নিকটিটেটিং পর্দাযুক্ত গোলাকার চোখ, প্রিকডাল পিট বিদ্যমান, স্ক্রল স্পাইরাল ভালভ।"
      },
      {
        "name": "Sphyrnidae",
        "commonEn": "Hammerhead Sharks",
        "commonBn": "হাতুড়িমাথা হাঙ্গর গোত্র",
        "diagnosticEn": "Head laterally expanded into flattened hammer-like cephalofoil with eyes at lateral extremities.",
        "diagnosticBn": "মাথা দুই পাশে হাতুড়ির মতো প্রসারিত এবং প্রান্তভাগে চোখ অবস্থিত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Dominant genera: Carcharhinus, Sphyrna, Scoliodon, Galeocerdo, and Triaenodon. Binomials: Carcharhinus leucas (Müller & Henle, 1839) and Sphyrna lewini (Griffith & Smith, 1834).",
      "bn": "প্রধান গণ: Carcharhinus, Sphyrna, Scoliodon, Galeocerdo এবং Triaenodon। বৈজ্ঞানিক নাম: Carcharhinus leucas (Müller & Henle, 1839) এবং Sphyrna lewini (Griffith & Smith, 1834)।"
    },
    "examplesSummary": {
      "en": "Five verified representative examples: Bull Shark (Carcharhinus leucas), Scalloped Hammerhead (Sphyrna lewini), Spadenose Shark (Scoliodon laticaudus), Tiger Shark (Galeocerdo cuvier), and Blacktip Shark (Carcharhinus limbatus).",
      "bn": "পাঁচটি যাচাইকৃত প্রামাণ্য উদাহরণ: ষাঁড় হাঙ্গর (Carcharhinus leucas), হাতুড়িমাথা হাঙ্গর (Sphyrna lewini), কোদালমুখ হাঙ্গর (Scoliodon laticaudus), বাঘ হাঙ্গর (Galeocerdo cuvier) এবং কালোপাখনা হাঙ্গর (Carcharhinus limbatus)।"
    },
    "additionalInformation": {
      "en": "Several carcharhinid species enter the Sundarbans mangrove channels and Lower Meghna estuary. Many are critically endangered due to targeted shark finning and gillnet bycatch.",
      "bn": "বেশ কিছু প্রজাতি সুন্দরবনের খাঁড়ি ও মেঘনা মোহনায় প্রবেশ করে। পাখনার বাণিজ্য ও অসতর্ক জালের কারণে এদের অনেকে চরম বিপন্ন।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024",
      "ref-iucn-bd-2015"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Compagno (1984)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-lamniformes",
    "taxonId": "taxon-lamniformes",
    "rank": "order",
    "scientificName": "Lamniformes",
    "bengaliName": "ম্যাকেরেল হাঙ্গর বর্গ",
    "englishName": "Mackerel Sharks",
    "parentTaxonId": "class-chondrichthyes",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Chondrichthyes",
        "nameBn": "তরুণাস্থিময় মাছ"
      },
      {
        "rank": "subclass",
        "name": "Elasmobranchii",
        "nameBn": "ইলাসমোব্রাঙ্কি"
      },
      {
        "rank": "order",
        "name": "Lamniformes",
        "nameBn": "ম্যাকেরেল হাঙ্গর বর্গ"
      }
    ],
    "shortDescription": {
      "en": "Large, powerful oceanic predatory and filter-feeding sharks lacking a nictitating membrane, with five gill slits all placed before pectoral fins, and regional endothermy in advanced clades.",
      "bn": "বৃহৎ ও শক্তিশালী পেলাজিক শিকারী হাঙ্গর যাদের চোখে নিকটিটেটিং পর্দা নেই, ৫টি ফুলকা ছিদ্রই বক্ষপাখনার সামনে অবস্থিত এবং উন্নত প্রজাতিতে আঞ্চলিক উষ্ণরক্তীয়তা দেখা যায়।"
    },
    "diagnosticCharacteristics": {
      "en": "Two dorsal fins lacking spines; anal fin present; 5 lateral gill slits situated entirely anterior to pectoral fin origin; eyes lack nictitating eyelid; mouth extends far behind eyes; ring-type intestinal spiral valve; intrauterine oophagy (cannibalism) prevalent during gestation; vascular countercurrent rete mirabile supporting regional endothermy in Lamnidae.",
      "bn": "কাঁটাহীন দুটি পৃষ্ঠপাখনা; পায়ুপাখনা উপস্থিত; ৫টি ফুলকা ছিদ্রের সবগুলোই বক্ষপাখনার গোড়ার সামনে অবস্থিত; চোখে নিকটিটেটিং পর্দা নেই; মুখ চোখের বেশ পেছনে বিস্তৃত; ভ্রূণাবস্থায় জরায়ুতে ডিম ভক্ষণের স্বভাব (উওফেজি); ল্যামনিডি গোত্রে শরীরের তাপমাত্রা নিয়ন্ত্রণের বিশেষ রক্তনালী জালিকা বিদ্যমান।",
      "keyFeatures": {
        "en": [
          "All five gill slits situated anterior to the pectoral fin base",
          "Absence of nictitating membrane over eyes",
          "Oophagy where embryonic pups consume unfertilized eggs in utero",
          "Regional endothermy maintaining elevated muscle and brain temperature"
        ],
        "bn": [
          "ফুলকার ৫টি ছিদ্রই বক্ষপাখনার গোড়ার সামনে অবস্থিত",
          "চোখে নিকটিটেটিং মেমব্রেনের অনুপস্থিতি",
          "জরায়ুর ভেতর ভ্রূণ কর্তৃক অপ্রস্ফুটিত ডিম খাওয়ার স্বভাব (উওফেজি)",
          "পেশী ও মস্তিষ্কের তাপমাত্রা আশেপাশের পানির চেয়ে বেশি রাখার ক্ষমতা"
        ]
      }
    },
    "habitat": {
      "en": "Pelagic open ocean, epipelagic to bathypelagic oceanic waters, continental shelf edges, and deep submarine canyons.",
      "bn": "উন্মুক্ত মহাসাগরের উপরিভাগ থেকে গভীর পেলাজিক স্তর, মহীসোপানের প্রান্তভাগ এবং গভীর সামুদ্রিক ক্যানিয়ন।",
      "systems": [
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Apex pelagic predators regulating oceanic food webs (tunas, seals, cetaceans) and colossal planktivores (Basking shark, Megamouth shark) harvesting zooplankton.",
      "bn": "উন্মুক্ত মহাসাগরে শীর্ষ শিকারী হিসেবে টুনা ও সামুদ্রিক স্তন্যপায়ীর সংখ্যা নিয়ন্ত্রণ করে, এবং কিছু প্রজাতি বিশালাকার প্লাঙ্কটন ভক্ষক হিসেবে কাজ করে।"
    },
    "feeding": {
      "en": "High-speed pursuit of pelagic fishes, tunas, and marine mammals, or continuous ram-filter feeding on oceanic copepods and euphausiids.",
      "bn": "দ্রুতগতিতে তাড়া করে পেলাজিক মাছ ও টুনা শিকার করে; অথবা অবিরাম মুখ হা করে সামুদ্রিক জুপ্লাঙ্কটন ছেঁকে খায়।"
    },
    "reproduction": {
      "en": "Aplacental viviparity with intrauterine oophagy (oviphagy), yielding extraordinarily robust, active newborn pups.",
      "bn": "অমরাহীন জরায়ুজ প্রসব (উওফেজি); জরায়ুর ভেতরে থাকা ভ্রূণ অন্য ডিম খেয়ে পুষ্টি পেয়ে অত্যন্ত বলবান ও কর্মক্ষম অবস্থায় জন্ম নেয়।"
    },
    "distribution": {
      "en": "Worldwide in temperate, subtropical, and tropical oceanic realms. Occasional pelagic occurrences in outer Bay of Bengal deep waters.",
      "bn": "বিশ্বের নাতিশীতোষ্ণ ও ক্রান্তীয় মহাসাগরে বিস্তৃত। গভীর বঙ্গোপসাগরের উন্মুক্ত পেলাজিক অঞ্চলে এদের উপস্থিতি নথিভুক্ত।"
    },
    "importantFamilies": [
      {
        "name": "Lamnidae",
        "commonEn": "Mackerel Sharks & White Sharks",
        "commonBn": "ম্যাকেরেল হাঙ্গর গোত্র",
        "diagnosticEn": "Fusiform hydrodynamic body, lunate caudal fin, strong lateral keels, regional endothermy.",
        "diagnosticBn": "তীরবেগী দেহ, অর্ধচন্দ্রাকার পুচ্ছপাখনা, পুচ্ছদণ্ডে শক্ত পার্শ্বীয় খাঁজ, উষ্ণরক্তীয় ব্যবস্থা।"
      },
      {
        "name": "Alopiidae",
        "commonEn": "Thresher Sharks",
        "commonBn": "চাবুকলেজী হাঙ্গর গোত্র",
        "diagnosticEn": "Upper lobe of caudal fin immensely elongated, nearly equal to remainder of body length.",
        "diagnosticBn": "পুচ্ছপাখনার উপরের অংশ দেহের সমান দীর্ঘ চাবুকের মতো প্রসারিত যা দিয়ে এরা শিকারকে আঘাত করে।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Prominent genera: Carcharodon, Isurus, Lamna, Alopias, and Cetorhinus. Binomials: Carcharodon carcharias (Linnaeus, 1758) and Isurus oxyrinchus Rafinesque, 1810.",
      "bn": "প্রধান গণ: Carcharodon, Isurus, Lamna, Alopias এবং Cetorhinus। বৈজ্ঞানিক নাম: Carcharodon carcharias (Linnaeus, 1758) এবং Isurus oxyrinchus Rafinesque, 1810।"
    },
    "examplesSummary": {
      "en": "Five verified representative examples: Great White Shark (Carcharodon carcharias), Shortfin Mako (Isurus oxyrinchus), Pelagic Thresher (Alopias pelagicus), Basking Shark (Cetorhinus maximus), and Sand Tiger Shark (Carcharias taurus).",
      "bn": "পাঁচটি যাচাইকৃত প্রামাণ্য উদাহরণ: গ্রেট হোয়াইট হাঙ্গর (Carcharodon carcharias), শর্টফিন মাকো (Isurus oxyrinchus), পেলাজিক থ্রেশার (Alopias pelagicus), বাস্কিং হাঙর (Cetorhinus maximus) এবং স্যান্ড টাইগার হাঙ্গর (Carcharias taurus)।"
    },
    "additionalInformation": {
      "en": "Shortfin mako is considered the fastest swimming shark on Earth, capable of bursts exceeding 70 km/h. Pelagic threshers are occasionally caught by offshore deep-sea longlines in Bangladesh waters.",
      "bn": "শর্টফিন মাকো হাঙ্গর বিশ্বের দ্রুততম হাঙ্গর যা ঘন্টায় ৭০ কিমি বেগে ছুটতে পারে। গভীর সমুদ্রে চলাচলকারী চাবুকলেজী হাঙ্গর কখনো কখনো বঙ্গোপসাগরে দীর্ঘ বড়শিতে ধরা পড়ে।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Compagno (2001)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-squaliformes",
    "taxonId": "taxon-squaliformes",
    "rank": "order",
    "scientificName": "Squaliformes",
    "bengaliName": "ডগফিশ হাঙ্গর বর্গ",
    "englishName": "Dogfish Sharks & Bramble Sharks",
    "parentTaxonId": "class-chondrichthyes",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Chondrichthyes",
        "nameBn": "তরুণাস্থিময় মাছ"
      },
      {
        "rank": "subclass",
        "name": "Elasmobranchii",
        "nameBn": "ইলাসমোব্রাঙ্কি"
      },
      {
        "rank": "order",
        "name": "Squaliformes",
        "nameBn": "ডগফিশ হাঙ্গর বর্গ"
      }
    ],
    "shortDescription": {
      "en": "Cartilaginous fishes completely lacking an anal fin, bearing two dorsal fins (often preceded by stout defensive spines), and large spiracles behind the eyes.",
      "bn": "পায়ুপাখনা সম্পূর্ণ অনুপস্থিত এমন তরুণাস্থিময় হাঙ্গর, যাদের দুটি পৃষ্ঠপাখনা (প্রায়ই শক্ত কাঁটাযুক্ত) এবং চোখের পেছনে বড় স্পাইরাকল বিদ্যমান।"
    },
    "diagnosticCharacteristics": {
      "en": "Complete absence of anal fin; two dorsal fins, usually armed with a hard anterior spine; 5 lateral gill slits all anterior to pectoral fins; large spiracles situated immediately behind eyes; no nictitating membrane; mouth ventral and transverse.",
      "bn": "পায়ুপাখনার সম্পূর্ণ অনুপস্থিতি; দুটি পৃষ্ঠপাখনা যা সাধারণত সামনের দিকে ধারালো কাঁটাযুক্ত; ৫ জোড়া ফুলকা ছিদ্র যা বক্ষপাখনার সামনে অবস্থিত; চোখের ঠিক পেছনে বড় স্পাইরাকল; চোখে নিকটিটেটিং পর্দা নেই; মুখ অঙ্কীয় দিকে অবস্থিত।",
      "keyFeatures": {
        "en": [
          "Total absence of an anal fin",
          "Two dorsal fins frequently bearing sharp rigid spines",
          "Prominent spiracles positioned close behind the eyes",
          "Deep-water bioluminescent species equipped with ventral photophores (Etmopteridae)"
        ],
        "bn": [
          "পায়ুপাখনার সম্পূর্ণ অনুপস্থিতি",
          "দুটি পৃষ্ঠপাখনায় শক্ত ও ধারালো কাঁটার উপস্থিতি",
          "চোখের ঠিক পেছনে সুস্পষ্ট বড় স্পাইরাকল",
          "গভীর সমুদ্রের প্রজাতিতে পেটের নিচে আলো জ্বালানো ফটোফোর বিদ্যমান"
        ]
      }
    },
    "habitat": {
      "en": "Bathyal continental slopes, deep-sea trenches, and cold-temperate continental shelf seabeds down to depths exceeding 4,000 meters.",
      "bn": "মহীঢাল, গভীর সমুদ্রের তলদেশ এবং নাতিশীতোষ্ণ মহীসোপান, যা ৪,০০০ মিটারেরও বেশি গভীরতায় বিস্তৃত।",
      "systems": [
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Benthic scavengers and mesopredators in the deep aphotic zone, controlling deep-sea teleost and cephalopod communities.",
      "bn": "আলোকহীন গভীর সমুদ্রের মেথর ও শিকারী; গভীর সমুদ্রের মাছ ও সেফালোপডের সংখ্যা নিয়ন্ত্রণে ভূমিকা রাখে।"
    },
    "feeding": {
      "en": "Benthic and bathypelagic carnivores consuming small deep-sea squids, bony fishes, crustaceans, and carrion.",
      "bn": "তলদেশীয় ও গভীর সমুদ্রের মাংসাশী; ছোট স্কুইড, গভীরের মাছ, কাঁকড়া এবং তলদেশের মৃতদেহ খায়।"
    },
    "reproduction": {
      "en": "Yolk-sac viviparity (ovoviviparity) with prolonged gestation periods (up to two years in Squalus acanthias, the longest known among non-mammalian vertebrates).",
      "bn": "কুসুমথলিযুক্ত জরায়ুজ প্রসব (ওভোভিভিপ্যারাস); এদের গর্ভধারণ কাল অত্যন্ত দীর্ঘ (স্পাইনি ডগফিশে প্রায় দুই বছর যা অ-স্তন্যপায়ী প্রাণীদের মধ্যে দীর্ঘতম)।"
    },
    "distribution": {
      "en": "Cosmopolitan from polar seas to tropical bathyal depths. Occurs in the deep offshore canyons (Swatch of No Ground) of the Bay of Bengal.",
      "bn": "মেরু অঞ্চল থেকে ক্রান্তীয় গভীর সমুদ্র পর্যন্ত বিশ্বব্যাপী বিস্তৃত। বঙ্গোপসাগরের সোয়াচ অব নো গ্রাউন্ডের গভীর খাতে এদের উপস্থিতি রয়েছে।"
    },
    "importantFamilies": [
      {
        "name": "Squalidae",
        "commonEn": "Spurdog / Dogfish Sharks",
        "commonBn": "স্পারডগ বা কাঁটাযুক্ত ডগফিশ গোত্র",
        "diagnosticEn": "Both dorsal fins bearing stout spines, teeth similar in upper and lower jaws.",
        "diagnosticBn": "উভয় পৃষ্ঠপাখনায় ধারালো কাঁটা বিদ্যমান, উভয় চোয়ালে একই রকম দাঁত।"
      },
      {
        "name": "Etmopteridae",
        "commonEn": "Lanternsharks",
        "commonBn": "লণ্ঠন হাঙ্গর গোত্র",
        "diagnosticEn": "Small deep-sea sharks with dense ventral bioluminescent light organs.",
        "diagnosticBn": "গভীর সমুদ্রের ছোট হাঙ্গর যাদের পেটের নিচে আলোক উৎপন্নকারী অঙ্গ থাকে।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Key genera: Squalus, Etmopterus, Centrophorus, Somniosus, and Dalatias. Binomials: Squalus acanthias Linnaeus, 1758 and Somniosus microcephalus (Bloch & Schneider, 1801).",
      "bn": "প্রধান গণ: Squalus, Etmopterus, Centrophorus, Somniosus এবং Dalatias। বৈজ্ঞানিক নাম: Squalus acanthias Linnaeus, 1758 এবং Somniosus microcephalus (Bloch & Schneider, 1801)।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Spiny Dogfish (Squalus acanthias), Greenland Shark (Somniosus microcephalus), Velvet Belly Lanternshark (Etmopterus spinax), and Leafscale Gulper Shark (Centrophorus squamosus).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: স্পাইনি ডগফিশ (Squalus acanthias), গ্রিনল্যান্ড হাঙ্গর (Somniosus microcephalus), ভেলভেট লণ্ঠন হাঙ্গর (Etmopterus spinax) এবং গালপার হাঙ্গর (Centrophorus squamosus)।"
    },
    "additionalInformation": {
      "en": "Greenland Shark (Somniosus microcephalus) has been scientifically validated to live for over 400 years, making it the longest-lived vertebrate known to science.",
      "bn": "গ্রিনল্যান্ড হাঙ্গর ৪০০ বছরেরও বেশি সময় বাঁচে, যা বিজ্ঞানীদের মতে পৃথিবীর দীর্ঘতম পরমায়ুযুক্ত মেরুদণ্ডী প্রাণী।"
    },
    "orders": [],
    "exampleSpeciesIds": [
      "sp-squalus-acanthias"
    ],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Ebert et al. (2013)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-torpediniformes",
    "taxonId": "taxon-torpediniformes",
    "rank": "order",
    "scientificName": "Torpediniformes",
    "bengaliName": "বৈদ্যুতিক শঙ্কর বর্গ",
    "englishName": "Electric Rays & Numbfishes",
    "parentTaxonId": "class-chondrichthyes",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Chondrichthyes",
        "nameBn": "তরুণাস্থিময় মাছ"
      },
      {
        "rank": "subclass",
        "name": "Elasmobranchii",
        "nameBn": "ইলাসমোব্রাঙ্কি"
      },
      {
        "rank": "order",
        "name": "Torpediniformes",
        "nameBn": "বৈদ্যুতিক শঙ্কর বর্গ"
      }
    ],
    "shortDescription": {
      "en": "Flattened batoid fishes possessing large kidney-shaped branchial electric organs capable of generating painful defensive and offensive electrical discharges.",
      "bn": "চ্যাপ্টা দেহাকৃতির শঙ্কর মাছ, যাদের কানকোর দুই পাশে বৃক্কাকার বৈদ্যুতিক অঙ্গ থাকে যা আত্মরক্ষা ও শিকারে শক্তিশালী বিদ্যুৎ উৎপন্ন করতে পারে।"
    },
    "diagnosticCharacteristics": {
      "en": "Disc rounded and flabby with loose naked skin devoid of dermal denticles; massive paired kidney-shaped electric organs derived from branchial musculature situated in disc margins; tail stout and muscular with well-developed caudal fin; 0 to 2 dorsal fins; mouth small with feeble teeth; eyes dorsal with large spiracles immediately behind.",
      "bn": "আঁইশহীন নরম ও শিথিল ত্বকযুক্ত গোলাকার ডিস্ক; কানকো অঞ্চলে ফুলকা পেশী থেকে উদ্ভূত একজোড়া বিশালাকার বৃক্কাকার বিদ্যুৎ উৎপাদক অঙ্গ; সুগঠিত পুচ্ছপাখনাযুক্ত শক্তিশালী লেজ; ০-২টি পৃষ্ঠপাখনা; ছোট মুখ ও দুর্বল দাঁত; চোখের ঠিক পেছনে বড় স্পাইরাকল বিদ্যমান।",
      "keyFeatures": {
        "en": [
          "Kidney-shaped electrogenic organs derived from modified branchial muscle columns",
          "Voltage output ranging from 8 volts up to 220 volts in large torpedoes",
          "Smooth, scaleless skin entirely lacking dermal denticles or thorns",
          "Thick, fleshy tail supporting a functional paddle-like caudal fin"
        ],
        "bn": [
          "ফুলকা পেশী থেকে পরিবর্তিত বৃক্কাকার শক্তিশালী বৈদ্যুতিক অঙ্গ",
          "৮ ভোল্ট থেকে সর্বোচ্চ ২২০ ভোল্ট পর্যন্ত বিদ্যুৎ উৎপাদনের ক্ষমতা",
          "সম্পূর্ণ আঁইশ ও কাঁটাহীন মসৃণ ত্বক",
          "সুগঠিত পুচ্ছপাখনাযুক্ত মাংসল ও শক্ত লেজ"
        ]
      }
    },
    "habitat": {
      "en": "Benthic muddy, sandy, or coral shelf bottoms, ranging from intertidal shallow bays down to bathyal depths of 1,000 meters.",
      "bn": "উপকূলীয় বালুকাময়, কর্দমাক্ত বা প্রবালীয় তলদেশ থেকে শুরু করে ১,০০০ মিটার গভীর সামুদ্রিক খাত।",
      "systems": [
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Nocturnal ambush benthic predators in neritic lagoons and shelf ecosystems, immobilizing bottom fishes and crustaceans with electrical shocks.",
      "bn": "উপকূলীয় ও মহীসোপান অঞ্চলে নিশাচর শিকারী; বৈদ্যুতিক শক দিয়ে তলদেশের মাছ ও ক্রাস্টাশিয়ান নিস্তেজ করে শিকার করে।"
    },
    "feeding": {
      "en": "Ambush predators using high-voltage bioelectric stunning to incapacitate live teleosts, worms, and crabs before swallowing them whole.",
      "bn": "বালিতে লুকিয়ে থেকে শক্তিশালী বিদ্যুৎ চমক দিয়ে জীবন্ত মাছ ও কাঁকড়াকে অবশ করে আস্ত গিলে খায়।"
    },
    "reproduction": {
      "en": "Aplacental viviparity (ovoviviparity), with embryos nourished primarily by yolk and uterine secretions (histotroph).",
      "bn": "অমরাহীন জরায়ুজ প্রসব (ওভোভিভিপ্যারাস); ভ্রূণ কুসুমথলি ও জরায়ুর নিঃসরণ (হিস্টোট্রফ) থেকে পুষ্টি পায়।"
    },
    "distribution": {
      "en": "Widespread in tropical and warm-temperate seas. Verified along Cox's Bazar coast, Saint Martin's Island, and Sundarbans offshore shelf.",
      "bn": "গ্রীষ্মমন্ডলীয় ও উষ্ণ সাগরে বিস্তৃত। কক্সবাজার, সেন্ট মার্টিন দ্বীপ এবং সুন্দরবনের বাইরের মহীসোপানে এদের উপস্থিতি রয়েছে।"
    },
    "importantFamilies": [
      {
        "name": "Torpedinidae",
        "commonEn": "Torpedo Electric Rays",
        "commonBn": "টরপেডো বৈদ্যুতিক শঙ্কর গোত্র",
        "diagnosticEn": "Disc truncated anteriorly, mouth broadly arched, high-voltage capacity (up to 220V).",
        "diagnosticBn": "সামনের দিকে কিছুটা খাঁজযুক্ত ডিস্ক, ধনুকের মতো বাঁকানো মুখ, উচ্চ ভোল্টেজ উৎপাদনের সক্ষমতা।"
      },
      {
        "name": "Narcinidae",
        "commonEn": "Numbfishes",
        "commonBn": "অবশকারী শঙ্কর গোত্র",
        "diagnosticEn": "Rostrum supported by cartilage, deep groove around mouth, moderate voltage discharges.",
        "diagnosticBn": "তরুণাস্থি দ্বারা সমর্থিত তুন্ড, মুখের চারপাশে গভীর খাঁজ, মাঝারি ধরনের ভোল্টেজ ক্ষরণ।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Prominent genera: Torpedo, Narcine, Narke, and Tetronarce. Binomials: Narcine timlei (Bloch & Schneider, 1801) and Torpedo marmorata Risso, 1810.",
      "bn": "প্রধান গণ: Torpedo, Narcine, Narke এবং Tetronarce। বৈজ্ঞানিক নাম: Narcine timlei (Bloch & Schneider, 1801) এবং Torpedo marmorata Risso, 1810।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Black-spotted Electric Ray (Narcine timlei), Marbled Electric Ray (Torpedo marmorata), Atlantic Torpedo (Tetronarce nobiliana), and Onefin Electric Ray (Narke dipterygia).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: কালো-ফোঁটা বৈদ্যুতিক শঙ্কর (Narcine timlei), মার্বেল বৈদ্যুতিক শঙ্কর (Torpedo marmorata), আটলান্টিক টরপেডো (Tetronarce nobiliana) এবং একপাখনা বৈদ্যুতিক শঙ্কর (Narke dipterygia)।"
    },
    "additionalInformation": {
      "en": "Narcine timlei is native to the northern Bay of Bengal and frequently landed by coastal artisanal shrimp trawlers off Cox's Bazar.",
      "bn": "কালো-ফোঁটা বৈদ্যুতিক শঙ্কর (Narcine timlei) উত্তর বঙ্গোপসাগরের স্থানীয় প্রজাতি এবং কক্সবাজার উপকূলে ট্রলারের জালে মাঝে মাঝে ধরা পড়ে।"
    },
    "orders": [],
    "exampleSpeciesIds": [
      "sp-torpedo-marmorata"
    ],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Carvalho (1999)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-rajiformes",
    "taxonId": "taxon-rajiformes",
    "rank": "order",
    "scientificName": "Rajiformes",
    "bengaliName": "স্কেট বর্গ",
    "englishName": "Skates",
    "parentTaxonId": "class-chondrichthyes",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Chondrichthyes",
        "nameBn": "তরুণাস্থিময় মাছ"
      },
      {
        "rank": "subclass",
        "name": "Elasmobranchii",
        "nameBn": "ইলাসমোব্রাঙ্কি"
      },
      {
        "rank": "order",
        "name": "Rajiformes",
        "nameBn": "স্কেট বর্গ"
      }
    ],
    "shortDescription": {
      "en": "Flattened batoids with a rhombic pectoral disc, slender tail lacking a serrated stinging barb, bilobed pelvic fins, and exclusively oviparous reproduction with horny egg capsules.",
      "bn": "রম্বসাকৃতির চ্যাপ্টা দেহবিশিষ্ট শঙ্কর যাদের লেজে কোনো বিষাক্ত কাঁটা থাকে না, খণ্ডিত শ্রোণীপাখনা এবং শক্ত চারকোনা ডিমের খোলস প্রসবকারী।"
    },
    "diagnosticCharacteristics": {
      "en": "Disc distinctly rhomboid; tail slender and typically bearing rows of thorns or denticles along midline, but completely lacking a serrated venomous stinging barb; pelvic fins distinctly bilobed; two small dorsal fins positioned near the tip of tail; caudal fin reduced to small fleshy fold; strictly oviparous laying rectangular horn-shelled egg cases with corner tendrils ('mermaid's purses').",
      "bn": "সুস্পষ্ট রম্বসাকার ডিস্ক; সরু লেজ যার মাঝবরাবর কাঁটার সারি থাকে কিন্তু কোনো বিষাক্ত ডাঁশ বা স্টিং থাকে না; শ্রোণীপাখনা দ্বিখণ্ডিত; লেজের ডগায় দুটি ক্ষুদ্র পৃষ্ঠপাখনা; পুচ্ছপাখনা ক্ষুদ্র ভাঁজে পরিণত; ডিম্বপ্রসবকারী এবং চারকোণায় আঁকশিযুক্ত শক্ত চারকোনা ডিম পাড়ে।",
      "keyFeatures": {
        "en": [
          "Complete absence of a serrated stinging barb on the tail",
          "Distinctly bilobed pelvic fins divided into anterior and posterior lobes",
          "Strictly oviparous producing keratinous rectangular egg cases with corner horns",
          "Weak electrogenic organs in lateral tail muscles used for communication"
        ],
        "bn": [
          "লেজে কোনো বিষাক্ত বা খাঁজযুক্ত দংশক কাঁটার অনুপস্থিতি",
          "দ্বিখণ্ডিত শ্রোণীপাখনা (অগ্র ও পশ্চাৎ ভাগে বিভক্ত)",
          "চারকোণায় হুকযুক্ত চারকোনা শক্ত খোলসের ডিম পাড়ে",
          "লেজের মাংসপেশীতে যোগাযোগের জন্য দুর্বল বৈদ্যুতিক অঙ্গের উপস্থিতি"
        ]
      }
    },
    "habitat": {
      "en": "Cold-temperate to subpolar continental shelves and deep bathyal waters; less abundant in shallow tropical waters.",
      "bn": "শীতল-নাতিশীতোষ্ণ এবং মেরু অঞ্চলের মহীসোপান ও গভীর সামুদ্রিক তলদেশ; অগভীর ক্রান্তীয় সাগরে এদের সংখ্যা সীমিত।",
      "systems": [
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Benthic predators churning marine sediment and preying upon burrowing infauna and bottom-dwelling crustaceans.",
      "bn": "সমুদ্রের তলদেশের বালি খুঁড়ে পুষ্টি ও শিকার খোঁজা শিকারী; তলদেশের কাঁকড়া ও কৃমি খেয়ে ভারসাম্য রাখে।"
    },
    "feeding": {
      "en": "Benthic carnivores crushing hard-shelled molluscs, crabs, polychaete worms, and small demersal teleosts using pavement-like dentition.",
      "bn": "চ্যাপ্টা ও মজবুত দাঁতের প্লেট দিয়ে শক্ত খোলসযুক্ত শামুক, কাঁকড়া ও তলদেশীয় মাছ চিবিয়ে খায়।"
    },
    "reproduction": {
      "en": "Strictly oviparous: females deposit rectangular collagenous egg capsules on the seafloor where embryos develop over 4 to 15 months before hatching.",
      "bn": "সম্পূর্ণ ডিম্বপ্রসবকারী; শক্ত কোলাজেনাস খোলসের ভেতর ডিম পাড়ে যা সমুদ্রের তলদেশে ৪ থেকে ১৫ মাস বৃদ্ধির পর ফুটে বের হয়।"
    },
    "distribution": {
      "en": "Worldwide, showing highest biodiversity in temperate and cold bathyal seas. Deep waters of the northern Indian Ocean and Bay of Bengal.",
      "bn": "বিশ্বব্যাপী বিস্তৃত হলেও শীতল ও গভীর সাগরে সর্বাধিক বৈচিত্র্যময়। উত্তর ভারত মহাসাগর ও গভীর বঙ্গোপসাগরে এদের বিস্তৃতি রয়েছে।"
    },
    "importantFamilies": [
      {
        "name": "Rajidae",
        "commonEn": "Hardnose Skates",
        "commonBn": "শক্তনাক স্কেট গোত্র",
        "diagnosticEn": "Stiff rostral cartilage, rhombic disc, bilobed pelvic fins, rows of thorns along tail.",
        "diagnosticBn": "শক্ত রোস্ট্রাল তরুণাস্থি, রম্বসাকার ডিস্ক, দ্বিখণ্ডিত শ্রোণীপাখনা, লেজে কাঁটার সারি।"
      },
      {
        "name": "Anacanthobatidae",
        "commonEn": "Legskates",
        "commonBn": "পায়ের মতো পাখনাবিশিষ্ট স্কেট গোত্র",
        "diagnosticEn": "Anterior pelvic lobe modified into slender leg-like walking appendage.",
        "diagnosticBn": "শ্রোণীপাখনার অগ্রভাগ সরু পায়ের মতো রূপান্তরিত যা দিয়ে এরা তলদেশে হাঁটে।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Key genera: Raja, Dipturus, Amblyraja, and Rostroraja. Binomials: Raja clavata Linnaeus, 1758 and Dipturus batis (Linnaeus, 1758).",
      "bn": "প্রধান গণ: Raja, Dipturus, Amblyraja এবং Rostroraja। বৈজ্ঞানিক নাম: Raja clavata Linnaeus, 1758 এবং Dipturus batis (Linnaeus, 1758)।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Thornback Ray (Raja clavata), Common Skate (Dipturus batis), Starry Skate (Amblyraja radiata), and White Skate (Rostroraja alba).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: কাঁটাওয়ালা স্কেট (Raja clavata), সাধারণ স্কেট (Dipturus batis), তারাময় স্কেট (Amblyraja radiata) এবং সাদা স্কেট (Rostroraja alba)।"
    },
    "additionalInformation": {
      "en": "Rajiformes represents one of the few entirely oviparous batoid orders. Their empty egg capsules frequently wash ashore on beaches worldwide as 'mermaid's purses'.",
      "bn": "স্কেট শঙ্কর মাছের একমাত্র সম্পূর্ণ ডিম্বপ্রসবকারী বর্গ। এদের ফাঁকা ডিমের খোলস সৈকতে ভেসে আসে যাকে 'মারমেইডস পার্স' বলা হয়।"
    },
    "orders": [],
    "exampleSpeciesIds": [
      "sp-raja-clavata"
    ],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); McEachran & Aschliman (2004)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-myliobatiformes",
    "taxonId": "taxon-myliobatiformes",
    "rank": "order",
    "scientificName": "Myliobatiformes",
    "bengaliName": "স্টিংরে বা শাপলাপাতা মাছ বর্গ",
    "englishName": "Stingrays, Eagle Rays & Manta Rays",
    "parentTaxonId": "class-chondrichthyes",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Chondrichthyes",
        "nameBn": "তরুণাস্থিময় মাছ"
      },
      {
        "rank": "subclass",
        "name": "Elasmobranchii",
        "nameBn": "ইলাসমোব্রাঙ্কি"
      },
      {
        "rank": "order",
        "name": "Myliobatiformes",
        "nameBn": "স্টিংরে বা শাপলাপাতা মাছ বর্গ"
      }
    ],
    "shortDescription": {
      "en": "Broad-disced batoids characterized by whip-like tails often armed with venomous serrated stinging spines, wing-like pectoral fins, and histotrophic viviparous reproduction.",
      "bn": "প্রশস্ত ডিস্কবিশিষ্ট শঙ্কর যাদের চাবুকের মতো লেজে প্রায়ই বিষাক্ত খাঁজকাটা কাঁটা থাকে, ডানার মতো বক্ষপাখনা এবং জরায়ুর পুষ্টির মাধ্যমে বাচ্চা প্রসব করে।"
    },
    "diagnosticCharacteristics": {
      "en": "Pectoral fins greatly expanded and confluent with sides of head, forming an oval, rhombic, or diamond-shaped disc; tail whip-like or slender, usually bearing 1 to 3 serrated venomous caudal spines on its dorsal surface; dorsal fin single, small, or absent; caudal fin reduced to dorsal/ventral skin folds or absent; spiracles large and dorsal behind eyes; reproduction strictly viviparous with uterine milk (histotroph) secreted by trophonemata.",
      "bn": "বক্ষপাখনা মাথার দুই পাশে যুক্ত হয়ে বিশালাকার ডিম্বাকার বা হীরকাকার ডিস্ক গঠন করে; লেজ চাবুকের মতো লম্বা ও সরু যার ওপর ১ থেকে ৩টি বিষাক্ত খাঁজকাটা কাঁটা থাকে; একক ক্ষুদ্র পৃষ্ঠপাখনা বা অনুপস্থিত; পুচ্ছপাখনা ত্বকের ভাঁজে রূপান্তরিত বা অনুপস্থিত; জরায়ুতে থাকা ট্রফোনেমাটার মাধ্যমে তরল দুধসদৃশ হিস্টোট্রফ নিঃসরণ করে জরায়ুজ প্রসব ঘটে।",
      "keyFeatures": {
        "en": [
          "Whip-like tail armed with one or more serrated venomous defensive spines",
          "Broad wing-like pectoral fins facilitating sinusoidal or flapping propulsion",
          "Viviparity with trophonemata secreting nutrient-rich histotroph (uterine milk)",
          "Crushing dental plates in benthic rays or filter-feeding cephalic lobes in mantas"
        ],
        "bn": [
          "লেজের ওপর এক বা একাধিক বিষাক্ত খাঁজকাটা দংশক কাঁটা",
          "ডানার মতো প্রশস্ত পাখনা যা দিয়ে এরা পানিতে ডানা ঝাপটানোর মতো সাঁতার কাটে",
          "জরায়ু থেকে পুষ্টিকর হিস্টোট্রফ দুধ খাইয়ে বাচ্চা প্রসবের উন্নত ব্যবস্থা",
          "শামুক ভাঙার শক্ত দাঁতের প্লেট অথবা ম্যানটাতে ফিল্টার ফিডিং লোব"
        ]
      }
    },
    "habitat": {
      "en": "Coastal neritic shelves, estuarine mangrove waterways, sandy lagoons, coral reefs, and pelagic open ocean (Mantas).",
      "bn": "উপকূলীয় মহীসোপান, ম্যানগ্রোভ মোহনা, বালুকাময় খাঁড়ি, প্রবাল প্রাচীর এবং উন্মুক্ত মহাসাগর (ম্যান্টা রে)।",
      "systems": [
        "marine",
        "brackish"
      ]
    },
    "ecosystem": {
      "en": "Key benthic bioturbators aerating marine sediments in the Bay of Bengal, plus pelagic filter feeders regulating coastal plankton blooms.",
      "bn": "বঙ্গোপসাগরের তলদেশের বালি ও কাদা আলোড়িত করে পুষ্টি পুনর্ব্যবহারযোগ্য রাখে এবং বিশালাকার ম্যানটা রে সমুদ্রের প্লাঙ্কটন নিয়ন্ত্রণ করে।"
    },
    "feeding": {
      "en": "Benthic species crush crabs, bivalves, and polychaetes with pavement-like dental plates; mobulids filter-feed on epipelagic krill and zooplankton.",
      "bn": "তলদেশের প্রজাতিগুলো শক্ত দাঁতের প্লেট দিয়ে কাঁকড়া ও শামুক চূর্ণ করে খায়; মোবুলিড প্রজাতিগুলো জুপ্লাঙ্কটন ও ক্রিল ছেঁকে খায়।"
    },
    "reproduction": {
      "en": "Viviparity with histotrophy: developing embryos absorb lipid- and protein-rich uterine milk via vascularized villi (trophonemata) projecting into embryonic spiracles.",
      "bn": "হিস্টোট্রফিক জরায়ুজ প্রসব; জরায়ুর ট্রফোনেমাটা থেকে নির্গত আমিষ ও চর্বিসমৃদ্ধ দুধ ভ্রূণের স্পাইরাকলে প্রবেশ করে পুষ্টি যোগায়।"
    },
    "distribution": {
      "en": "Worldwide in tropical and subtropical marine waters. Abundant throughout the northern Bay of Bengal, Sundarbans coast, and Meghna estuary.",
      "bn": "বিশ্বের গ্রীষ্মমন্ডলীয় ও উষ্ণ সাগরে বিস্তৃত। উত্তর বঙ্গোপসাগর, সুন্দরবন উপকূল ও মেঘনা মোহনায় অত্যন্ত প্রাচুর্যময়।"
    },
    "importantFamilies": [
      {
        "name": "Dasyatidae",
        "commonEn": "Whiptail Stingrays",
        "commonBn": "শাপলাপাতা মাছ গোত্র",
        "diagnosticEn": "Disc oval or rhomboid, whip-like tail longer than disc, serrated venomous spine present.",
        "diagnosticBn": "ডিম্বাকার বা রম্বসাকার ডিস্ক, ডিস্কের চেয়ে লম্বা চাবুক লেজ, বিষাক্ত খাঁজকাটা কাঁটাযুক্ত।"
      },
      {
        "name": "Mobulidae",
        "commonEn": "Manta and Devil Rays",
        "commonBn": "ম্যান্টা ও শয়তান মাছ গোত্র",
        "diagnosticEn": "Gigantic disc, paddle-like cephalic fins flanking mouth, filter-feeding gill plates.",
        "diagnosticBn": "বিশালাকার ডানাবিশিষ্ট দেহ, মুখের দুই পাশে দিকনির্দেশক লোব, প্লাঙ্কটন ছাঁকার ফুলকা প্লেট।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Dominant genera: Himantura, Pastinachus, Mobula, Aetobatus, and Gymnura. Binomials: Himantura uarnak (Gmelin, 1789) and Mobula birostris (Walbaum, 1792).",
      "bn": "প্রধান গণ: Himantura, Pastinachus, Mobula, Aetobatus এবং Gymnura। বৈজ্ঞানিক নাম: Himantura uarnak (Gmelin, 1789) এবং Mobula birostris (Walbaum, 1792)।"
    },
    "examplesSummary": {
      "en": "Five verified representative examples: Reticulate Whipray (Himantura uarnak), Cowtail Stingray (Pastinachus sephen), Giant Oceanic Manta (Mobula birostris), Spotted Eagle Ray (Aetobatus narinari), and Longtail Butterfly Ray (Gymnura poecilura).",
      "bn": "পাঁচটি যাচাইকৃত প্রামাণ্য উদাহরণ: জালিকা শাপলাপাতা (Himantura uarnak), কাউটেল স্টিংরে (Pastinachus sephen), বিশালাকার সমুদ্র ম্যান্টা (Mobula birostris), চিত্রা চিলমাছ (Aetobatus narinari) এবং প্রজাপতি শঙ্কর (Gymnura poecilura)।"
    },
    "additionalInformation": {
      "en": "Commercially significant in coastal artisanal fisheries across Cox's Bazar and Dublar Char, but several species are heavily threatened by non-selective gillnetting.",
      "bn": "কক্সবাজার ও দুবলার চরের উপকূলে শুঁটকি ও মাংসের জন্য অত্যন্ত চাহিদাসম্পন্ন হলেও অসতর্ক ফাঁদ জালের কারণে বহু প্রজাতি সংকটাপন্ন।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024",
      "ref-iucn-bd-2015"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Last et al. (2016)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-rhinopristiformes",
    "taxonId": "taxon-rhinopristiformes",
    "rank": "order",
    "scientificName": "Rhinopristiformes",
    "bengaliName": "করাতমাছ ও গিটারফিশ বর্গ",
    "englishName": "Sawfishes, Guitarfishes & Wedgefishes",
    "parentTaxonId": "class-chondrichthyes",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Chondrichthyes",
        "nameBn": "তরুণাস্থিময় মাছ"
      },
      {
        "rank": "subclass",
        "name": "Elasmobranchii",
        "nameBn": "ইলাসমোব্রাঙ্কি"
      },
      {
        "rank": "order",
        "name": "Rhinopristiformes",
        "nameBn": "করাতমাছ ও গিটারফিশ বর্গ"
      }
    ],
    "shortDescription": {
      "en": "Elongate, shark-like rays possessing a wedge-shaped head, shovel-like snout or elongated saw-like rostrum armed with lateral teeth, two distinct dorsal fins, and a robust swimming tail.",
      "bn": "হাঙ্গরসদৃশ দীর্ঘদেহী শঙ্কর মাছ, যাদের মাথা কীলকাকার বা করাতের মতো লম্বা ও দুপাশে দাঁতযুক্ত, পিঠে দুটি সুগঠিত পাখনা এবং শক্তিশালী লেজ বিদ্যমান।"
    },
    "diagnosticCharacteristics": {
      "en": "Body transitional between sharks and rays: depressed anteriorly with pectoral fins fused to head, but trunk and tail stout, muscular, and shark-like; rostrum extended into a shovel-shaped snout or an elongated blade (rostral saw) bearing transverse rows of modified placoid peg-like teeth set in deep sockets; two large, well-developed dorsal fins positioned behind pelvic fins; gill slits ventral; aplacental viviparity.",
      "bn": "হাঙ্গর ও শঙ্করের মধ্যবর্তী শারীরিক গঠন: সম্মুখভাগ চ্যাপ্টা ও বক্ষপাখনা মাথার সাথে যুক্ত, তবে দেহকাণ্ড ও লেজ পেশীবহুল হাঙ্গরের মতো; মুখ বা তুন্ড শাবলের মতো চ্যাপ্টা অথবা গভীর গর্তে বসানো দাঁতযুক্ত করাতের মতো ব্লেডে রূপান্তরিত; দুটি সুগঠিত পৃষ্ঠপাখনা; ফুলকা ছিদ্রগুলো পেটের দিকে; অমরাহীন জরায়ুজ প্রসব।",
      "keyFeatures": {
        "en": [
          "Elongated rostrum modified into a tooth-bearing saw (Pristidae) or wedge-like shovel (Guitarfishes)",
          "Shark-like muscular posterior body and heterocercal or bilobed caudal fin",
          "Two large, well-separated dorsal fins lacking spines",
          "Ventral gill slits positioning them firmly within Batoidea despite shark-like silhouette"
        ],
        "bn": [
          "করাতের মতো ধারালো দাঁতযুক্ত ব্লেড (করাতমাছ) বা বেলচার মতো তুন্ড (গিটারফিশ)",
          "হাঙ্গরসদৃশ শক্তিশালী পেশীবহুল লেজ ও পুচ্ছপাখনা",
          "কাঁটাহীন দুটি সুস্পষ্ট ও উন্নত পৃষ্ঠপাখনা",
          "হাঙ্গরসদৃশ হলেও ফুলকা পেটের দিকে থাকায় এরা মূলত শঙ্কর মাছের অন্তর্ভুক্ত"
        ]
      }
    },
    "habitat": {
      "en": "Shallow coastal neritic waters, estuarine mudflats, tidal mangrove rivers, and shallow tropical bays; sawfishes frequently ascend inland freshwaters.",
      "bn": "অগভীর উপকূলীয় সাগর, মোহনার কাদাভূমি, জোয়ারভাটার ম্যানগ্রোভ নদী এবং অগভীর খাঁড়ি; করাতমাছ প্রায়ই মিষ্টি পানিতে প্রবেশ করে।",
      "systems": [
        "marine",
        "brackish",
        "freshwater"
      ]
    },
    "ecosystem": {
      "en": "Benthic predators using the electrosensory saw to detect and slash schooling fishes or excavate buried crustaceans in coastal muddy estuaries.",
      "bn": "তলদেশীয় শিকারী; করাতের ইলেক্ট্রো-সেন্সরের সাহায্যে বালি বা পানিতে লুকিয়ে থাকা মাছ শনাক্ত করে এবং করাত দিয়ে কুপিয়ে শিকার ধরে।"
    },
    "feeding": {
      "en": "Carnivorous: sawfishes slash laterally into schools of mullets, shads, and sciaenids, stunning or impaling prey before pinning it to the seafloor.",
      "bn": "মাংসাশী; করাতমাছ মাছের ঝাঁকের মধ্যে করাত দিয়ে এপাশ-ওপাশ চাবুকের মতো আঘাত করে শিকারকে ক্ষতবিক্ষত করে খায়।"
    },
    "reproduction": {
      "en": "Aplacental viviparity: embryos nourished by yolk and uterine histotroph; rostral teeth of embryos covered by protective gelatinous sheaths until birth to protect mother.",
      "bn": "অমরাহীন জরায়ুজ প্রসব; মাতৃগর্ভকে সুরক্ষায় ভ্রূণের করাতের দাঁতগুলো জন্মের আগ পর্যন্ত একটি নরম জেলির আবরণে মোড়ানো থাকে।"
    },
    "distribution": {
      "en": "Tropical and warm-temperate coastal waters circumglobally. Historically abundant in the Bay of Bengal, Sundarbans, and Lower Meghna estuary.",
      "bn": "বিশ্বের উষ্ণ ও ক্রান্তীয় উপকূলীয় সাগরে বিস্তৃত। বঙ্গোপসাগর, সুন্দরবন ও মেঘনা মোহনায় ঐতিহাসিকভাবে বিখ্যাত।"
    },
    "importantFamilies": [
      {
        "name": "Pristidae",
        "commonEn": "Sawfishes",
        "commonBn": "করাতমাছ গোত্র",
        "diagnosticEn": "Rostrum greatly elongated into blade with lateral teeth embedded in calcified sockets.",
        "diagnosticBn": "তুন্ড দীর্ঘ ব্লেডে রূপান্তরিত যার দুই পাশে শক্ত দাঁত সারিবদ্ধভাবে সাজানো।"
      },
      {
        "name": "Rhinobatidae",
        "commonEn": "Guitarfishes",
        "commonBn": "গিটারফিশ গোত্র",
        "diagnosticEn": "Snout pointed and wedge-shaped without teeth, body transitional between shark and ray.",
        "diagnosticBn": "তুন্ড সূঁচালো ও কীলকাকার দাঁতহীন, হাঙ্গর ও শঙ্করের মাঝামাঝি শারীরিক গঠন।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Dominant genera: Pristis, Anoxypristis, Rhynchobatus, Glaucostegus, and Rhina. Binomials: Pristis pristis (Linnaeus, 1758) and Rhynchobatus djiddensis (Forsskål, 1775).",
      "bn": "প্রধান গণ: Pristis, Anoxypristis, Rhynchobatus, Glaucostegus এবং Rhina। বৈজ্ঞানিক নাম: Pristis pristis (Linnaeus, 1758) এবং Rhynchobatus djiddensis (Forsskål, 1775)।"
    },
    "examplesSummary": {
      "en": "Five verified representative examples: Common Sawfish (Pristis pristis), Narrowsnout Sawfish (Anoxypristis cuspidata), Giant Guitarfish (Rhynchobatus djiddensis), Granulated Guitarfish (Glaucostegus granulatus), and Bowmouth Guitarfish (Rhina ancylostoma).",
      "bn": "পাঁচটি যাচাইকৃত প্রামাণ্য উদাহরণ: সাধারণ করাতমাছ (Pristis pristis), চিকনমুখ করাতমাছ (Anoxypristis cuspidata), দানব গিটারফিশ (Rhynchobatus djiddensis), দানাদার গিটারফিশ (Glaucostegus granulatus) এবং ধনুকমুখ গিটারফিশ (Rhina ancylostoma)।"
    },
    "additionalInformation": {
      "en": "All sawfishes (Pristidae) are critically endangered worldwide. Pristis pristis was historically caught in the Sundarbans and Chittagong coast, but populations have collapsed due to gillnet entanglement.",
      "bn": "সকল করাতমাছ আন্তর্জাতিকভাবে মহাবিপন্ন। বাংলাদেশে সুন্দরবন ও চট্টগ্রাম উপকূলে একসময় প্রচুর পাওয়া যেত, কিন্তু জালে জড়িয়ে এরা প্রায় বিলুপ্তির মুখে।"
    },
    "orders": [],
    "exampleSpeciesIds": [
      "sp-rhina-ancylostoma"
    ],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024",
      "ref-iucn-bd-2015"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Last et al. (2016)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-chimaeriformes",
    "taxonId": "taxon-chimaeriformes",
    "rank": "order",
    "scientificName": "Chimaeriformes",
    "bengaliName": "কাইমেরা বা ভুতুড়ে হাঙ্গর বর্গ",
    "englishName": "Chimaeras, Ghost Sharks & Rabbitfishes",
    "parentTaxonId": "class-chondrichthyes",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Chondrichthyes",
        "nameBn": "তরুণাস্থিময় মাছ"
      },
      {
        "rank": "subclass",
        "name": "Holocephali",
        "nameBn": "হোলোসেফালি"
      },
      {
        "rank": "order",
        "name": "Chimaeriformes",
        "nameBn": "কাইমেরা বা ভুতুড়ে হাঙ্গর বর্গ"
      }
    ],
    "shortDescription": {
      "en": "Deep-sea cartilaginous fishes of subclass Holocephali with smooth scaleless skin, an upper jaw fused to the skull (holostylic), crushing tooth-plates, and a single gill opening covered by a soft opercular flap.",
      "bn": "হোলোসেফালি উপশ্রেণীর গভীর সমুদ্রের তরুণাস্থিময় মাছ, যাদের ত্বক আঁইশহীন, খুলির সাথে উপরের চোয়াল সম্পূর্ণ জোড়া লাগানো, পেষণকারী দাঁতের প্লেট এবং একক অপারকুলামযুক্ত ফুলকা ছিদ্র রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Holostylic jaw suspension (palatoquadrate completely fused to neurocranium); four pairs of internal gill slits opening into a single chamber covered by a fleshy opercular flap with one external aperture; permanent crushing tooth plates (2 pairs upper, 1 pair lower) lacking continuous replacement; first dorsal fin armed with a long, erect, often venomous spine; body scaleless and smooth; males possess cephalic clasper (tentaculum) on forehead in addition to pelvic claspers.",
      "bn": "খুলির সাথে চোয়ালের সম্পূর্ণ সংমিশ্রণ (হোলোস্টাইলিক); ৪ জোড়া ফুলকা ছিদ্র একটি প্রকোষ্ঠে উন্মুক্ত এবং নরম অপারকুলাম দিয়ে ঢাকা একক বাহ্যিক ছিদ্রযুক্ত; ৩ জোড়া স্থায়ী পেষণ দাঁতের প্লেট যা প্রতিস্থাপিত হয় না; প্রথম পৃষ্ঠপাখনার সাথে দীর্ঘ খাড়া বিষাক্ত কাঁটা; আঁইশহীন মসৃণ ত্বক; পুরুষদের মাথায় বিশেষ ধারণক্ষম অঙ্গ (টেন্টাকুলাম) থাকে।",
      "keyFeatures": {
        "en": [
          "Upper jaw solidly fused to the braincase (holostylic suspension)",
          "Single external opercular gill aperture covering four internal slits",
          "Permanent non-replaceable crushing dental plates instead of individual shedding teeth",
          "Frontal cephalic tentaculum clasper on forehead of adult males"
        ],
        "bn": [
          "করোটিকার সাথে উপরের চোয়ালের সম্পূর্ণ দৃঢ় সংমিশ্রণ",
          "চারটি অভ্যন্তরীণ ফুলকা ছিদ্রকে আবৃতকারী একক বাহ্যিক অপারকুলাম ছিদ্র",
          "ঝরে পড়ার পরিবর্তে স্থায়ী ও শক্ত পেষণ দাঁতের প্লেট",
          "প্রাপ্তবয়স্ক পুরুষ মাছের কপালে বিশেষ ক্ল্যাসপার বা টেন্টাকুলাম"
        ]
      }
    },
    "habitat": {
      "en": "Deep-sea bathyal continental slopes, submarine ridges, cold-temperate continental shelves, and oceanic trenches from 200 to over 3,000 meters.",
      "bn": "গভীর সমুদ্রের মহীঢাল, শৈলশিরা, নাতিশীতোষ্ণ মহীসোপান এবং ২০০ থেকে ৩,০০০ মিটারের বেশি গভীর সামুদ্রিক গিরিখাত।",
      "systems": [
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Specialized benthic deep-water predators utilizing sensory ampullary pores on snout to navigate and forage in complete darkness.",
      "bn": "গভীর সমুদ্রের তলদেশীয় শিকারী; তুন্ডে থাকা সংবেদনশীল অঙ্গের সাহায্যে সম্পূর্ণ অন্ধকারে তলদেশের প্রাণীদের শনাক্ত করে।"
    },
    "feeding": {
      "en": "Durophagous carnivores: crushing hard-shelled benthic molluscs, sea urchins, crabs, and brittle stars with their heavy tooth plates.",
      "bn": "শক্ত খোলসভোজী মাংসাশী; ভারী ও শক্ত দাঁতের প্লেট দিয়ে সমুদ্রের তলদেশের শামুক, অর্চিন ও শক্ত কাঁকড়া গুঁড়িয়ে খায়।"
    },
    "reproduction": {
      "en": "Strictly oviparous: females lay large elongated ribbed keratinous egg capsules with lateral feathery fins, which incubate on deep ocean sediments for up to 12 months.",
      "bn": "সম্পূর্ণ ডিম্বপ্রসবকারী; শক্ত কেরাটিনের লম্বা খাঁজযুক্ত ডিমের খোলস পাড়ে যা সমুদ্রের তলদেশে প্রায় ১২ মাস ধরে ফুটে বের হয়।"
    },
    "distribution": {
      "en": "Worldwide in deep temperate and tropical marine waters. Recorded from deep offshore trenches of the northern Indian Ocean.",
      "bn": "বিশ্বের গভীর মহাসাগরে বিস্তৃত। উত্তর ভারত মহাসাগরের গভীর সামুদ্রিক খাদে এদের নির্ভরযোগ্য নথি রয়েছে।"
    },
    "importantFamilies": [
      {
        "name": "Chimaeridae",
        "commonEn": "Shortnose Chimaeras / Rabbitfishes",
        "commonBn": "ছোটনাক কাইমেরা গোত্র",
        "diagnosticEn": "Snout short and rounded, venomous first dorsal spine, diphycercal or filament tail.",
        "diagnosticBn": "ছোট ও গোলাকার তুন্ড, প্রথম পৃষ্ঠপাখনার গোড়ায় বিষাক্ত কাঁটা, সুতোর মতো সরু লেজ।"
      },
      {
        "name": "Callorhinchidae",
        "commonEn": "Ploughnose Chimaeras / Elephant Sharks",
        "commonBn": "লাঙলমুখ কাইমেরা গোত্র",
        "diagnosticEn": "Flexible hoe-shaped hook on tip of snout used to probe seafloor for buried prey.",
        "diagnosticBn": "তুন্ডের ডগায় লাঙলের মতো বাঁকানো নমনীয় হুক যা দিয়ে এরা বালির তলদেশে শিকার খোঁজে।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Key genera: Chimaera, Hydrolagus, Callorhinchus, and Harriotta. Binomials: Chimaera monstrosa Linnaeus, 1758 and Callorhinchus milii Bory de Saint-Vincent, 1823.",
      "bn": "প্রধান গণ: Chimaera, Hydrolagus, Callorhinchus এবং Harriotta। বৈজ্ঞানিক নাম: Chimaera monstrosa Linnaeus, 1758 এবং Callorhinchus milii Bory de Saint-Vincent, 1823।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Rabbitfish (Chimaera monstrosa), Spotted Ratfish (Hydrolagus colliei), Elephant Shark / Australian Ghost Shark (Callorhinchus milii), and Longnose Chimaera (Harriotta raleighana).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: খরগোশ মাছ (Chimaera monstrosa), চিত্রা র‍্যাটফিশ (Hydrolagus colliei), হাতি হাঙ্গর বা অস্ট্রেলীয় ভুতুড়ে হাঙ্গর (Callorhinchus milii) এবং লম্বানাক কাইমেরা (Harriotta raleighana)।"
    },
    "additionalInformation": {
      "en": "Chimaeriformes represents an ancient evolutionary divergence from sharks and rays dating back over 400 million years to the Devonian. No native shallow-water records exist in Bangladesh.",
      "bn": "কাইমেরা ৪০০ মিলিয়ন বছর পূর্বে ডেভোনিয়ান যুগে হাঙ্গর ও শঙ্কর থেকে পৃথক হয়ে যাওয়া প্রাচীনতম বংশধারা। বাংলাদেশে অগভীর জলে এদের কোনো উপস্থিতি নেই।"
    },
    "orders": [],
    "exampleSpeciesIds": [
      "sp-chimaera-monstrosa"
    ],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Didier (1995)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-polypteriformes",
    "taxonId": "taxon-polypteriformes",
    "rank": "order",
    "scientificName": "Polypteriformes",
    "bengaliName": "বিচির ও রিডফিশ বর্গ",
    "englishName": "Bichirs & Reedfishes",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিপাখনাযুক্ত মাছ"
      },
      {
        "rank": "order",
        "name": "Polypteriformes",
        "nameBn": "বিচির ও রিডফিশ বর্গ"
      }
    ],
    "shortDescription": {
      "en": "The most primitive surviving order of ray-finned fishes, characterized by a series of 5 to 18 dorsal finlets (each supported by a rigid spine), thick rhomboid ganoid armor, and functional paired ventral lungs.",
      "bn": "রশ্মিপাখনাযুক্ত মাছের সর্বাধিক আদিম জীবিত বর্গ, যাদের পিঠে ৫ থেকে ১৮টি ছোট ছোট পাখনাংশ (প্রতিটি শক্ত কাঁটাসহ), ভারী গ্যানয়েড আঁইশের বর্ম এবং কার্যকরী জোড়া ফুসফুস রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Dorsal fin divided into a series of 5 to 18 independent flag-like finlets, each bearing a stout spine and branched rays; body encased in heavy, interlocking rhomboid ganoid scales coated with ganoine; paired pectoral fins supported by fleshy muscular bases with internal radials; functional paired lungs connected to the ventral floor of the oesophagus allowing obligate air-breathing; spiracles present on top of head.",
      "bn": "পৃষ্ঠপাখনা ৫ থেকে ১৮টি পৃথক পতাকাসদৃশ পাখনাংশে বিভক্ত যার প্রতিটিতে শক্ত কাঁটা ও রশ্মি থাকে; দেহ ভারী খাঁজযুক্ত রম্বসাকার গ্যানয়েড আঁইশের বর্মে আবৃত; বক্ষপাখনার গোড়া মাংসল ও পেশীবহুল; খাদ্যনালীর অঙ্কীয় তলে যুক্ত কার্যকরী জোড়া ফুসফুস যা সরাসরি বাতাস থেকে শ্বাস নিতে সক্ষম; মাথার উপরে স্পাইরাকল বিদ্যমান।",
      "keyFeatures": {
        "en": [
          "Dorsal fin composed of 5–18 separate finlets each with an erectile spine",
          "Heavy interlocking rhomboid ganoid scales forming protective body armor",
          "Functional paired ventral lungs allowing obligate aerial respiration",
          "Fleshy, lobe-like pectoral fin bases with unique actinopterygian skeleton"
        ],
        "bn": [
          "পৃষ্ঠপাখনায় ৫-১৮টি পৃথক কাঁটাযুক্ত ক্ষুদ্র পাখনাংশ",
          "ভারী ও পরস্পরের সাথে যুক্ত রম্বসাকার গ্যানয়েড আঁইশের বর্ম",
          "বাতাস থেকে শ্বাস নেওয়ার জন্য কার্যকরী জোড়া ফুসফুস",
          "মাংসল ও লতিযুক্ত বক্ষপাখনার গোড়া"
        ]
      }
    },
    "habitat": {
      "en": "Tropical freshwater rivers, floodplains, sluggish swamps, and weed-choked river margins of Central and West Africa.",
      "bn": "মধ্য ও পশ্চিম আফ্রিকার গ্রীষ্মমন্ডলীয় মিঠাপানির নদী, প্লাবনভূমি, ধীরগতির জলাভূমি ও উদ্ভিদে পূর্ণ নদীর খাঁড়ি।",
      "systems": [
        "freshwater"
      ]
    },
    "ecosystem": {
      "en": "Benthic nocturnal predators in stagnant, deoxygenated tropical freshwater marshes, surviving extreme hypoxia through continuous atmospheric lung ventilation.",
      "bn": "অক্সিজেনহীন গ্রীষ্মমন্ডলীয় জলাভূমির তলদেশীয় নিশাচর শিকারী; বাতাসে শ্বাস নেওয়ার ক্ষমতার কারণে তীব্র প্রতিকূল পরিবেশেও টিকে থাকে।"
    },
    "feeding": {
      "en": "Carnivorous: stalker ambush predators consuming small fishes, aquatic frogs, freshwater crustaceans, and insect larvae.",
      "bn": "মাংসাশী; পানির তলদেশে ধীরে ধীরে এগিয়ে গিয়ে শিকারকে মুখে পুরে নেয়, খাদ্য হিসেবে ছোট মাছ, ব্যাঙ ও জলজ পোকা গ্রহণ করে।"
    },
    "reproduction": {
      "en": "External fertilization with courtship dances; males cup anal fin to fertilize adhesive eggs deposited on dense submerged vegetation; larvae possess prominent external branched feathery gills.",
      "bn": "বাহ্যিক নিষেক; পুরুষ মাছ পায়ুপাখনা বাঁকিয়ে ডিম্বাণু নিষিক্ত করে এবং আঠালো ডিম জলজ উদ্ভিদে আটকে থাকে; লার্ভায় স্পষ্ট বাহ্যিক ফুলকা বিদ্যমান।"
    },
    "distribution": {
      "en": "Endemic to tropical freshwater river basins of Africa (Nile, Congo, Niger, Lake Chad). Completely absent in Bangladesh naturally.",
      "bn": "আফ্রিকার গ্রীষ্মমন্ডলীয় নদী অববাহিকায় (নীল, কঙ্গো, নাইজার) সীমাবদ্ধ। বাংলাদেশের প্রাকৃতিক পরিবেশে সম্পূর্ণ অনুপস্থিত।"
    },
    "importantFamilies": [
      {
        "name": "Polypteridae",
        "commonEn": "Bichirs and Reedfishes",
        "commonBn": "বিচির ও রিডফিশ গোত্র",
        "diagnosticEn": "Series of dorsal finlets, ganoid scales, paired ventral lungs, larval external gills.",
        "diagnosticBn": "পৃষ্ঠপাখনাংশে বিভক্ত পৃষ্ঠপাখনা, গ্যানয়েড আঁইশ, জোড়া ফুসফুস, লার্ভায় বাহ্যিক ফুলকা।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Key genera: Polypterus and Erpetoichthys. Binomials: Polypterus senegalus Cuvier, 1829 and Erpetoichthys calabaricus Smith, 1865.",
      "bn": "প্রধান গণ: Polypterus এবং Erpetoichthys। বৈজ্ঞানিক নাম: Polypterus senegalus Cuvier, 1829 এবং Erpetoichthys calabaricus Smith, 1865।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Senegal Bichir (Polypterus senegalus), Nile Bichir (Polypterus bichir), Reedfish / Ropefish (Erpetoichthys calabaricus), and Saddled Bichir (Polypterus endlicheri).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: সেনেগাল বিচির (Polypterus senegalus), নীল বিচির (Polypterus bichir), রিডফিশ বা রোপফিশ (Erpetoichthys calabaricus) এবং স্যাডলড বিচির (Polypterus endlicheri)।"
    },
    "additionalInformation": {
      "en": "Polypteriformes forms the sister clade to all other living ray-finned fishes (Actinopteri). Popular in specialized ornamental aquaria worldwide, but strictly non-native to South Asia.",
      "bn": "বিচির সকল আধুনিক রশ্মিপাখনাযুক্ত মাছের প্রাচীনতম জীবিত বোন-শাখা। সৌখিন অ্যাকোয়ারিয়ামে এদের পালন করা হলেও বাংলাদেশে কোনো বুনো প্রজাতি নেই।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Betancur-R. et al. (2017)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-acipenseriformes",
    "taxonId": "taxon-acipenseriformes",
    "rank": "order",
    "scientificName": "Acipenseriformes",
    "bengaliName": "স্টার্জন ও প্যাডেলফিশ বর্গ",
    "englishName": "Sturgeons & Paddlefishes",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিপাখনাযুক্ত মাছ"
      },
      {
        "rank": "order",
        "name": "Acipenseriformes",
        "nameBn": "স্টার্জন ও প্যাডেলফিশ বর্গ"
      }
    ],
    "shortDescription": {
      "en": "Ancient, largely cartilaginous relict fishes characterized by an unconstricted persistent notochord, a heterocercal tail, sensory rostral barbels or rostrum, and five longitudinal rows of bony scutes or naked skin.",
      "bn": "প্রাচীন ও মূলত তরুণাস্থিময় অবশেষ মাছ, যাদের স্থায়ী নটোকর্ড, হেটারোসার্কাল লেজ, সংবেদনশীল তুন্ড এবং পাঁচ সারির অস্থিময় স্কিউট বা আঁইশহীন ত্বক রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Internal skeleton secondarily largely cartilaginous; persistent unconstricted notochord lacking vertebral centra; tail heterocercal with an upturned vertebral axis; mouth inferior and protrusible, preceded by sensory barbels (sturgeons) or massive spatulate paddle-like electroreceptive rostrum (paddlefishes); sturgeons bear 5 longitudinal rows of sharp bony scutes along trunk; spiracle present.",
      "bn": "অন্তঃকঙ্কাল দ্বিতীয়বার তরুণাস্থিময় রূপ ধারণ করেছে; সেন্ট্রামবিহীন স্থায়ী নটোকর্ড; হেটারোসার্কাল বা অসম পুচ্ছপাখনা; পেটের দিকে অবস্থিত প্রসারিত মুখ, যার সামনে সংবেদনশীল বার্বেল বা বিশালাকার বেলচাসদৃশ সংবেদনশীল তুন্ড থাকে; স্টার্জনের শরীরে ৫ সারির শক্ত অস্থিময় স্কিউট বিদ্যমান; স্পাইরাকল উপস্থিত।",
      "keyFeatures": {
        "en": [
          "Secondary cartilaginous skeleton and persistent unconstricted notochord",
          "Heterocercal caudal fin resembling that of primitive sharks",
          "Five longitudinal rows of protective bony scutes in Acipenseridae",
          "Inferior protrusible mouth with sensitive barbels or huge electroreceptive paddle"
        ],
        "bn": [
          "গৌণ তরুণাস্থিময় কঙ্কাল এবং আজীবন নটোকর্ডের স্থায়িত্ব",
          "হাঙ্গরসদৃশ অসম বা হেটারোসার্কাল পুচ্ছপাখনা",
          "দেহে ৫টি সারিবদ্ধ শক্ত অস্থিময় স্কিউটের উপস্থিতি (স্টার্জনে)",
          "নিচের দিকে অবস্থিত নমনীয় মুখ এবং সংবেদনশীল শুঙ্গ"
        ]
      }
    },
    "habitat": {
      "en": "Large temperate freshwater rivers, lakes, estuaries, and anadromous coastal marine waters of the Northern Hemisphere.",
      "bn": "উত্তর গোলার্ধের নাতিশীতোষ্ণ বৃহৎ মিঠাপানির নদী, হ্রদ, মোহনা এবং পরিযায়ী উপকূলীয় সমুদ্র।",
      "systems": [
        "freshwater",
        "marine",
        "brackish"
      ]
    },
    "ecosystem": {
      "en": "Major benthic detritivores, molluscivores, and pelagic filter-feeders (paddlefishes) in major Holarctic drainage basins.",
      "bn": "উত্তর গোলার্ধের নদী অববাহিকায় তলদেশীয় মেথর, শামুকভোজী এবং বিশালাকার প্লাঙ্কটন ফিল্টারকারী মাছ হিসেবে গুরুত্বপূর্ণ।"
    },
    "feeding": {
      "en": "Sturgeons vacuum benthic invertebrates, insect larvae, molluscs, and small fishes with protrusible tubelike jaws; paddlefishes ram-filter pelagic zooplankton through dense gill rakers.",
      "bn": "স্টার্জন টিউবের মতো মুখ দিয়ে তলদেশের শামুক, পোকা ও ছোট মাছ চুষে খায়; প্যাডেলফিশ মুখ হা করে পানির জুপ্লাঙ্কটন ফুলকা চিরুনি দিয়ে ছেঁকে খায়।"
    },
    "reproduction": {
      "en": "Anadromous or potamodromous broadcast spawners migrating upstream onto fast-flowing gravel shoals; highly adhesive dark eggs (the source of luxury caviar); very late sexual maturity (up to 20 years).",
      "bn": "উজানের পাথুরে নদীতে ডিম পাড়া পরিযায়ী মাছ; অত্যন্ত আঠালো কালো ডিম পাড়ে (যা ক্যাভিয়ারের প্রধান উৎস); প্রজননক্ষম হতে বহু বছর (১০-২০ বছর) সময় লাগে।"
    },
    "distribution": {
      "en": "Holarctic (Eurasia and North America: Caspian, Black Sea, Danube, Mississippi, Yangtze). Completely absent in Bangladesh native biodiversity.",
      "bn": "উত্তর গোলার্ধে (কাস্পিয়ান, কৃষ্ণ সাগর, দানিয়ুব, মিসিসিপি ও ইয়াংসিকিয়াং) সীমাবদ্ধ। বাংলাদেশে কোনো দেশীয় প্রজাতি নেই।"
    },
    "importantFamilies": [
      {
        "name": "Acipenseridae",
        "commonEn": "Sturgeons",
        "commonBn": "স্টার্জন গোত্র",
        "diagnosticEn": "Five rows of bony scutes along body, four sensory barbels anterior to protrusible mouth.",
        "diagnosticBn": "দেহে ৫ সারির অস্থিময় স্কিউট, মুখের সামনে ৪টি সংবেদনশীল বার্বেল।"
      },
      {
        "name": "Polyodontidae",
        "commonEn": "Paddlefishes",
        "commonBn": "প্যাডেলফিশ গোত্র",
        "diagnosticEn": "Massive flattened paddle-like rostrum packed with ampullary electroreceptors, naked body.",
        "diagnosticBn": "ইলেক্ট্রো-রিসেপ্টরে পূর্ণ বিশাল চ্যাপ্টা বেলচাসদৃশ তুন্ড, আঁইশহীন মসৃণ দেহ।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Key genera: Acipenser, Huso, Scaphirhynchus, and Polyodon. Binomials: Acipenser sturio Linnaeus, 1758, Huso huso (Linnaeus, 1758), and Polyodon spathula (Walbaum, 1792).",
      "bn": "প্রধান গণ: Acipenser, Huso, Scaphirhynchus এবং Polyodon। বৈজ্ঞানিক নাম: Acipenser sturio Linnaeus, 1758, Huso huso (Linnaeus, 1758), এবং Polyodon spathula (Walbaum, 1792)।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: European Sturgeon (Acipenser sturio), Beluga Sturgeon (Huso huso), American Paddlefish (Polyodon spathula), and Sterlet (Acipenser ruthenus).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: ইউরোপীয় স্টার্জন (Acipenser sturio), বেলুগা স্টার্জন (Huso huso), আমেরিকান প্যাডেলফিশ (Polyodon spathula) এবং স্টারলেট (Acipenser ruthenus)।"
    },
    "additionalInformation": {
      "en": "Beluga sturgeon (Huso huso) is one of the largest freshwater fishes in history, reaching over 7 meters in length and over a metric ton. Severely endangered globally due to historic overharvesting for caviar.",
      "bn": "বেলুগা স্টার্জন পৃথিবীর অন্যতম বৃহত্তম মিঠাপানির মাছ, যা ৭ মিটারেরও বেশি লম্বা এবং ১ টনের বেশি ভারী হতে পারে। ক্যাভিয়ারের লোভ ও বাঁধ নির্মাণের কারণে এরা মহাবিপন্ন।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Bemis et al. (1997)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-lepisosteiformes",
    "taxonId": "taxon-lepisosteiformes",
    "rank": "order",
    "scientificName": "Lepisosteiformes",
    "bengaliName": "গার বর্গ",
    "englishName": "Gars",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিপাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Neopterygii",
        "nameBn": "নিওপটেরিগি"
      },
      {
        "rank": "order",
        "name": "Lepisosteiformes",
        "nameBn": "গার বর্গ"
      }
    ],
    "shortDescription": {
      "en": "Archaic holostean neopterygian fishes armed with heavy, interlocking rhomboid ganoid scales, an elongated beak-like snout with needle-sharp teeth, and a vascularized lung-like swim bladder.",
      "bn": "প্রাচীন নিওপটেরিজিয়ান মাছ, যাদের দেহ শক্ত গ্যানয়েড আঁইশের বর্মে আবৃত, লম্বা চঞ্চুর মতো চোয়ালে ধারালো দাঁত এবং শ্বাস নেওয়ার উপযোগী রক্তনালীপূর্ণ পটকা রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Body elongated, cylindrical, encased in heavy interlocking rhomboid ganoid scales; jaws elongated into a beak armed with sharp needle-like conical teeth; opisthocoelous vertebrae (centrum convex anteriorly, concave posteriorly, unique among living fishes); abbreviate heterocercal caudal fin; dorsal and anal fins placed far back near tail; highly vascularized swim bladder functioning as a respiratory lung.",
      "bn": "লম্বা নলাকার দেহ যা পরস্পরের সাথে খাঁজযুক্ত শক্ত গ্যানয়েড আঁইশে ঢাকা; চোয়াল প্রসারিত হয়ে পাখির ঠোঁটের মতো গঠন তৈরি করে যা ধারালো সুইয়ের মতো দাঁতে পূর্ণ; অপিস্থোসেলিক কশেরুকা (কশেরুকার সামনের দিক উত্তল ও পেছনের দিক অবতল, যা জীবিত মাছে অনন্য); খাটো হেটারোসার্কাল লেজ; পিঠ ও পায়ুর পাখনা লেজের খুব কাছে অবস্থিত; রক্তনালীপূর্ণ পটকা যা বাতাসের অক্সিজেন গ্রহণ করতে পারে।",
      "keyFeatures": {
        "en": [
          "Heavily armored with thick interlocking ganoid scales coated with enameloid ganoine",
          "Elongated jaws with rows of sharp conical teeth adapted for ambush capture",
          "Opisthocoelous vertebral centra unique among living fish lineages",
          "Vascularized physostomous gas bladder enabling obligate aerial breathing in stagnant waters"
        ],
        "bn": [
          "শক্ত এনামেলযুক্ত গ্যানয়েড আঁইশের দুর্ভেদ্য বর্ম",
          "শিকার ধরার সুবিধার্থে ধারালো সূঁচালো দাঁতযুক্ত লম্বা চোয়াল",
          "অপিস্থোসেলিক কশেরুকা (অন্য জীবিত মাছে বিরল)",
          "অক্সিজেনহীন পানিতে শ্বাস নিতে সক্ষম রক্তনালীপূর্ণ পটকা"
        ]
      }
    },
    "habitat": {
      "en": "Sluggish rivers, oxbow lakes, bayous, heavily vegetated swamps, and brackish coastal estuaries of North and Central America.",
      "bn": "উত্তর ও মধ্য আমেরিকার ধীরগতির নদী, অশ্বখুরাকৃতি হ্রদ, জলাবদ্ধ খাঁড়ি এবং লোনাপানির মোহনা।",
      "systems": [
        "freshwater",
        "brackish"
      ]
    },
    "ecosystem": {
      "en": "Apex and upper-trophic ambush predators in warm, slow-moving floodplains and bayous, utilizing camouflage to stalk waterbirds, teleosts, and crabs.",
      "bn": "উষ্ণ জলাভূমি ও প্লাবনভূমির শীর্ষ শিকারী; পানির ওপর কাঠের গুঁড়ির মতো ভেসে থেকে নিঃশব্দে মাছ ও জলচর পাখি শিকার করে।"
    },
    "feeding": {
      "en": "Voracious piscivores and opportunistic carnivores: floating motionless like logs and striking rapidly sideways to impale fishes, blue crabs, and waterbirds.",
      "bn": "হিংস্র মাছখেকো শিকারী; পানিতে কাঠের গুঁড়ির মতো স্থির ভেসে থাকে এবং শিকার কাছে এলে চোখের পলকে মাথা বাঁকিয়ে ধারালো দাঁতে গেঁথে ফেলে।"
    },
    "reproduction": {
      "en": "Oviparous broadcast spawners in shallow flooded vegetation; green, highly adhesive eggs that are violently toxic to birds, mammals, and humans if ingested.",
      "bn": "অগভীর প্লাবনভূমিতে ডিম ছড়ানো ডিম্বপ্রসবকারী; এদের সবুজ ও অত্যন্ত আঠালো ডিম মানুষ ও স্তন্যপায়ী প্রাণীর জন্য অত্যন্ত বিষাক্ত।"
    },
    "distribution": {
      "en": "Native to North and Central America and Cuba. Strictly non-native in Bangladesh, though occasionally imported illegally for luxury home aquariums.",
      "bn": "উত্তর ও মধ্য আমেরিকা এবং কিউবায় সীমাবদ্ধ। বাংলাদেশের প্রাকৃতিক পরিবেশে সম্পূর্ণ অনুপস্থিত (তবে সৌখিন অ্যাকোয়ারিয়ামে কখনো দেখা যায়)।"
    },
    "importantFamilies": [
      {
        "name": "Lepisosteidae",
        "commonEn": "Gars",
        "commonBn": "গার গোত্র",
        "diagnosticEn": "Elongated snouts with conical teeth, ganoid scales, dorsal and anal fins posterior.",
        "diagnosticBn": "লম্বা দাঁতযুক্ত তুন্ড, গ্যানয়েড আঁইশ, দেহের পেছনের দিকে অবস্থিত পাখনা।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Key genera: Atractosteus and Lepisosteus. Binomials: Atractosteus spatula (Lacepède, 1803) and Lepisosteus osseus (Linnaeus, 1758).",
      "bn": "প্রধান গণ: Atractosteus এবং Lepisosteus। বৈজ্ঞানিক নাম: Atractosteus spatula (Lacepède, 1803) এবং Lepisosteus osseus (Linnaeus, 1758)।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Alligator Gar (Atractosteus spatula), Longnose Gar (Lepisosteus osseus), Spotted Gar (Lepisosteus oculatus), and Cuban Gar (Atractosteus tristoechus).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: অ্যালিগেটর গার (Atractosteus spatula), লম্বানাক গার (Lepisosteus osseus), চিত্রা গার (Lepisosteus oculatus) এবং কিউবান গার (Atractosteus tristoechus)।"
    },
    "additionalInformation": {
      "en": "Alligator Gar (Atractosteus spatula) can exceed 3 meters in length and 150 kg, possessing a broad double row of upper teeth. Strictly invasive if released into South Asian waterways.",
      "bn": "অ্যালিগেটর গার ৩ মিটারেরও বেশি লম্বা ও ১৫০ কেজি ওজনের হতে পারে। এ মাছ বাংলাদেশের প্রাকৃতিক নদী বা জলাশয়ে ছড়িয়ে পড়লে দেশীয় প্রজাতির জন্য মারাত্মক হুমকি।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Wiley (1976)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-amiiformes",
    "taxonId": "taxon-amiiformes",
    "rank": "order",
    "scientificName": "Amiiformes",
    "bengaliName": "বোফিন বর্গ",
    "englishName": "Bowfins",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিপাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Neopterygii",
        "nameBn": "নিওপটেরিগি"
      },
      {
        "rank": "order",
        "name": "Amiiformes",
        "nameBn": "বোফিন বর্গ"
      }
    ],
    "shortDescription": {
      "en": "Archaic holostean fishes featuring a long, continuous undulating dorsal fin, a prominent throat gular plate, cycloid scales, a cellular air-breathing gas bladder, and a circular dark caudal spot.",
      "bn": "প্রাচীন নিওপটেরিজিয়ান মাছ যাদের পিঠে লম্বা অবিচ্ছিন্ন তরঙ্গায়িত পৃষ্ঠপাখনা, গলার নিচে শক্ত গুলার প্লেট, সাইক্লয়েড আঁইশ এবং লেজের গোড়ায় স্পষ্ট গোলাকার কালো দাগ রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Dorsal fin exceptionally long with 45–50 rays, extending along most of the back and capable of bidirectional undulating locomotion; large single median bony gular plate on the underside of the lower jaw; cycloid scales lacking ganoine; skull heavily armored with thick dermal bones; abbreviate heterocercal tail with a distinctive black eye-spot (ocellus) near upper base in males; vascularized cellular swim bladder enabling aerial respiration.",
      "bn": "পৃষ্ঠপাখনা অত্যন্ত দীর্ঘ (৪৫-৫০টি রশ্মিবিশিষ্ট) যা পিঠের বেশিরভাগ অংশ জুড়ে বিস্তৃত এবং সামনে-পেছনে তরঙ্গায়িত সাঁতারে সক্ষম; নিচের চোয়ালের নিচে একক শক্ত অস্থিময় গুলার প্লেট; গ্যানয়েডহীন সাইক্লয়েড আঁইশ; মাথার শক্ত অস্থিময় খুলি; লেজের গোড়ার উপরে উজ্জ্বল কালো চোখের মতো দাগ (ওসেলাস); সরাসরি বাতাস থেকে শ্বাস নেওয়ার উপযোগী রক্তনালীপূর্ণ ফুসফুস-সদৃশ পটকা।",
      "keyFeatures": {
        "en": [
          "Long continuous dorsal fin with over 45 soft rays for precise undulating swimming",
          "Large bony median gular plate situated between the mandibular rami",
          "Abbreviate heterocercal tail with prominent caudal ocellus in males",
          "Functional cellular gas bladder allowing air-breathing in stagnant waters"
        ],
        "bn": [
          "৪৫টির বেশি নরম রশ্মিযুক্ত অবিচ্ছিন্ন লম্বা পৃষ্ঠপাখনা",
          "নিচের চোয়ালের মাঝখানে শক্ত একক অস্থিময় গুলার প্লেট",
          "লেজের গোড়ায় পুরুষ মাছে স্পষ্ট গোলাকার কালো ওসেলাস দাগ",
          "অক্সিজেনহীন জলাশয়ে বাতাস থেকে শ্বাস নেওয়ার পটকা"
        ]
      }
    },
    "habitat": {
      "en": "Lowland freshwater rivers, sluggish oxbow lakes, swamp bayous, and heavily vegetated backwaters of eastern North America.",
      "bn": "উত্তর আমেরিকার পূর্বাঞ্চলের সমতল ভূমির মিঠাপানির নদী, ধীরগতির বাওড়, জলাভূমি এবং জলজ উদ্ভিদে পূর্ণ অববাহিকা।",
      "systems": [
        "freshwater"
      ]
    },
    "ecosystem": {
      "en": "Voracious nocturnal and crepuscular predator in warm-water wetland ecosystems, enduring extreme seasonal drought and hypoxia by breathing air directly at the surface.",
      "bn": "উষ্ণ জলাভূমির নিশাচর শিকারী; চরম খরা ও অক্সিজেনহীন পানিতে সরাসরি বাতাসে শ্বাস নিয়ে বেঁচে থাকে।"
    },
    "feeding": {
      "en": "Aggressive opportunistic carnivore: preying upon crawfish, teleost fishes, frogs, and aquatic insects using strong conical teeth and suction feeding.",
      "bn": "আক্রমণাত্মক মাংসাশী শিকারী; শক্তিশালী দাঁত ও চোষক বল প্রয়োগ করে চিংড়ি, ছোট মাছ, ব্যাঙ ও জলজ পোকা খায়।"
    },
    "reproduction": {
      "en": "Males construct circular bowl-shaped nests in dense vegetation, ferociously guarding eggs and schooling young fry for weeks with exemplary paternal care.",
      "bn": "পুরুষ মাছ জলজ উদ্ভিদের ভেতর গোলাকার বাসা তৈরি করে এবং ডিম ফুটে বের হওয়া পোনাদের কয়েক সপ্তাহ ধরে আক্রমণাত্মকভাবে পাহারা দেয়।"
    },
    "distribution": {
      "en": "Endemic to eastern and central North America (Mississippi basin, St. Lawrence, Gulf Coast). Strictly zero native occurrence in Bangladesh.",
      "bn": "উত্তর আমেরিকার পূর্ব ও মধ্যাঞ্চলে সীমাবদ্ধ। বাংলাদেশে প্রাকৃতিক কোনো প্রজাতি নেই।"
    },
    "importantFamilies": [
      {
        "name": "Amiidae",
        "commonEn": "Bowfins",
        "commonBn": "বোফিন গোত্র",
        "diagnosticEn": "Long undulating dorsal fin, gular plate on throat, cycloid scales, caudal ocellus.",
        "diagnosticBn": "লম্বা তরঙ্গায়িত পৃষ্ঠপাখনা, গলায় গুলার প্লেট, সাইক্লয়েড আঁইশ, পুচ্ছ ওসেলাস।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Key genus: Amia. Verified living binomials: Amia calva Linnaeus, 1766 and Amia ocellicauda Todd, 1836.",
      "bn": "একমাত্র জীবিত গণ: Amia। প্রামাণ্য বৈজ্ঞানিক নাম: Amia calva Linnaeus, 1766 এবং Amia ocellicauda Todd, 1836।"
    },
    "examplesSummary": {
      "en": "Two verified representative living species: Bowfin (Amia calva) and Eyespot Bowfin (Amia ocellicauda).",
      "bn": "দুটি যাচাইকৃত প্রামাণ্য জীবিত প্রজাতি: সাধারণ বোফিন (Amia calva) এবং ওসেলাসযুক্ত বোফিন (Amia ocellicauda)।"
    },
    "additionalInformation": {
      "en": "Amiiformes is the sole surviving order of the Halecomorphi, representing the closest extant sister lineage to the massive Teleostei clade. Zero living records in Bangladesh.",
      "bn": "বোফিন হ্যালিকোমরফি গোষ্ঠীর একমাত্র জীবিত অবশেষ এবং আধুনিক টেলিয়স্ট মাছের সবচেয়ে নিকটবর্তী আত্মীয়। বাংলাদেশে কোনো প্রজাতি নেই।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Grande & Bemis (1998)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-anguilliformes",
    "taxonId": "taxon-anguilliformes",
    "rank": "order",
    "scientificName": "Anguilliformes",
    "bengaliName": "বাইম ও মোরে বর্গ (আসল বানমাছ)",
    "englishName": "True Eels & Morays",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিপাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Neopterygii",
        "nameBn": "নিওপটেরিগি"
      },
      {
        "rank": "order",
        "name": "Anguilliformes",
        "nameBn": "বাইম ও মোরে বর্গ"
      }
    ],
    "shortDescription": {
      "en": "Elongated serpentiform teleosts lacking pelvic fins, with dorsal, caudal, and anal fins confluent, embedded or absent scales, and passing through a transparent pelagic leptocephalus larval phase.",
      "bn": "সর্পিল দীর্ঘদেহী টেলিয়স্ট মাছ যাদের শ্রোণীপাখনা সম্পূর্ণ অনুপস্থিত, পিঠ-লেজ-পায়ুপাখনা অবিচ্ছিন্নভাবে যুক্ত, ত্বক পিচ্ছিল ও আঁইশহীন এবং স্বচ্ছ লেপ্টোসেফালাস লার্ভা দশা রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Body elongated and cylindrical (serpentiform); pelvic fins and pelvic girdle completely absent in all extant taxa; dorsal and anal fins long and confluent with the caudal fin (or caudal fin lost); scales minute cycloid and embedded in skin or entirely absent; gill openings typically narrow and restricted; maxilla tooth-bearing and entering gape; highly characteristic transparent, leaf-like, pelagic leptocephalus larvae.",
      "bn": "সর্পিল ও নলাকার দেহ; শ্রোণীপাখনা ও শ্রোণীচক্রের সম্পূর্ণ অনুপস্থিতি; পৃষ্ঠ ও পায়ুপাখনা পুচ্ছপাখনার সাথে একীভূত হয়ে অবিচ্ছিন্ন কিনারা গঠন করে; অতি সূক্ষ্ম সাইক্লয়েড আঁইশ ত্বকে বসানো থাকে অথবা সম্পূর্ণ অনুপস্থিত; ফুলকা ছিদ্র সরু ও ছোট; পাতা-সদৃশ স্বচ্ছ সামুদ্রিক লেপ্টোসেফালাস লার্ভা দশা বিদ্যমান।",
      "keyFeatures": {
        "en": [
          "Complete absence of pelvic fins and pelvic girdle (apodal anatomy)",
          "Confluent continuous dorsal, caudal, and anal fins forming a continuous swimming fringe",
          "Distinct leaf-like, transparent marine leptocephalus larval phase",
          "Catadromous life cycle in freshwater eels migrating thousands of miles to ocean abysses"
        ],
        "bn": [
          "শ্রোণীপাখনা ও শ্রোণী চক্রের সম্পূর্ণ অনুপস্থিতি (অ্যাপোডাল)",
          "পিঠ, লেজ ও পায়ুপাখনার একীভূত হয়ে অবিচ্ছিন্ন পাখনা গঠন",
          "পাতার মতো চ্যাপ্টা ও কাচের মতো স্বচ্ছ লেপ্টোসেফালাস লার্ভা দশা",
          "ক্যাটাড্রোমাস স্বভাব: মিঠাপানিতে বড় হয়ে ডিম পাড়ার জন্য গভীর সমুদ্রে হাজার মাইল পাড়ি দেওয়া"
        ]
      }
    },
    "habitat": {
      "en": "Freshwater river potamon, hill streams, tidal mangrove creeks, coastal mudflats, coral reef crevices, and deep bathyal ocean depths.",
      "bn": "মিঠাপানির নদী, পাহাড়ি ঝর্ণা, জোয়ারভাটার ম্যানগ্রোভ খাঁড়ি, উপকূলীয় কাদাভূমি, প্রবাল প্রাচীরের গুহা এবং গভীর সমুদ্রের খাত।",
      "systems": [
        "freshwater",
        "marine",
        "brackish"
      ]
    },
    "ecosystem": {
      "en": "Crucial nocturnal predators in freshwater wetlands and marine coral reefs; catadromous freshwater eels transport massive marine-freshwater nutrient subsidies.",
      "bn": "মিঠাপানির জলাভূমি ও সামুদ্রিক প্রবাল প্রাচীরের নিশাচর শীর্ষ শিকারী; পরিযায়ী বানমাছ নদী ও সমুদ্রের মধ্যে পুষ্টি প্রবাহের প্রধান মাধ্যম।"
    },
    "feeding": {
      "en": "Carnivorous: hunting small teleost fishes, crabs, prawns, molluscs, and polychaetes; moray eels possess mobile pharyngeal jaws capable of dragging prey down the oesophagus.",
      "bn": "মাংসাশী; ছোট মাছ, চিংড়ি, কাঁকড়া ও কৃমি শিকার করে; মোরে মাছের গলায় অতিরিক্ত গলবিলীয় চোয়াল থাকে যা শিকারকে গলার ভেতর টেনে নেয়।"
    },
    "reproduction": {
      "en": "Catadromous spawning (in Anguillidae) where adult yellow eels transform into silver eels, migrate to deep ocean trenches, spawn pelagic eggs at depths of 400–1,000 meters, and die.",
      "bn": "ক্যাটাড্রোমাস প্রজনন (অ্যাঙ্গুইলিডিতে); প্রাপ্তবয়স্ক বানমাছ নদী ছেড়ে গভীর সমুদ্রে চলে যায়, ৪০০-১,০০০ মিটার গভীরে ডিম পেড়ে মারা যায় এবং ডিম ফুটে লার্ভা আবার নদীতে ফিরে আসে।"
    },
    "distribution": {
      "en": "Cosmopolitan across tropical, subtropical, and temperate waters. Well represented in Bangladesh freshwaters, Sundarbans, and the Bay of Bengal.",
      "bn": "বিশ্বব্যাপী বিস্তৃত। বাংলাদেশের নদী-নালা, সুন্দরবনের মোহনা এবং বঙ্গোপসাগরে প্রচুর প্রজাতি বিদ্যমান।"
    },
    "importantFamilies": [
      {
        "name": "Anguillidae",
        "commonEn": "Freshwater Eels",
        "commonBn": "মিঠাপানির বানমাছ গোত্র",
        "diagnosticEn": "Catadromous, minute embedded scales, well-developed pectoral fins, confluent median fins.",
        "diagnosticBn": "পরিযায়ী বানমাছ, ত্বকে সূক্ষ্ম আঁইশ, বক্ষপাখনা সুগঠিত, লেজের অবিচ্ছিন্ন পাখনা।"
      },
      {
        "name": "Muraenidae",
        "commonEn": "Moray Eels",
        "commonBn": "মোরে বানমাছ গোত্র",
        "diagnosticEn": "Pectoral fins completely lost, large mouth with fangs, pharyngeal jaw apparatus.",
        "diagnosticBn": "বক্ষপাখনা সম্পূর্ণ অনুপস্থিত, ধারালো দাঁতযুক্ত মুখ, গলবিলীয় অতিরিক্ত চোয়াল।"
      },
      {
        "name": "Ophichthidae",
        "commonEn": "Snake Eels",
        "commonBn": "সাপ-বানমাছ গোত্র",
        "diagnosticEn": "Hard, pointed burrowing tail tip lacking caudal fin, sharp conical teeth.",
        "diagnosticBn": "কাদায় গর্ত করার শক্ত সূঁচালো লেজ, পুচ্ছপাখনা অনুপস্থিত, ধারালো দাঁত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Dominant genera: Anguilla, Gymnothorax, Pisodonophis, and Conger. Binomials: Anguilla bengalensis (Gray, 1831), Gymnothorax tile (Hamilton, 1822), and Pisodonophis boro (Hamilton, 1822).",
      "bn": "প্রধান গণ: Anguilla, Gymnothorax, Pisodonophis এবং Conger। বৈজ্ঞানিক নাম: Anguilla bengalensis (Gray, 1831), Gymnothorax tile (Hamilton, 1822), এবং Pisodonophis boro (Hamilton, 1822)।"
    },
    "examplesSummary": {
      "en": "Five verified representative examples: Indian Mottled Eel / Tel-Baim (Anguilla bengalensis), Freshwater Moray (Gymnothorax tile), Rice-Paddy Eel / Boro Baim (Pisodonophis boro), European Eel (Anguilla anguilla), and European Conger (Conger conger).",
      "bn": "পাঁচটি যাচাইকৃত প্রামাণ্য উদাহরণ: তেল বাইম (Anguilla bengalensis), মিঠাপানির মোরে বাইম (Gymnothorax tile), বোরো বাইম (Pisodonophis boro), ইউরোপীয় বানমাছ (Anguilla anguilla) এবং ইউরোপীয় কঙ্গার (Conger conger)।"
    },
    "additionalInformation": {
      "en": "Indian Mottled Eel (Anguilla bengalensis) is a prized food and medicinal fish in rural Bangladesh, migrating from the Padma-Meghna system into the Indian Ocean abyss to breed.",
      "bn": "তেল বাইম (Anguilla bengalensis) বাংলাদেশের গ্রামীণ পুষ্টি ও ঔষধি মাছ হিসেবে অত্যন্ত সমাদৃত; এটি পদ্মা-মেঘনা নদী থেকে ভারত মহাসাগরের অতল খাদে গিয়ে ডিম পাড়ে।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024",
      "ref-rahman-2005"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Inoue et al. (2010)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-gonorynchiformes",
    "taxonId": "taxon-gonorynchiformes",
    "rank": "order",
    "scientificName": "Gonorynchiformes",
    "bengaliName": "মিল্কফিশ ও বালিমাছ বর্গ",
    "englishName": "Milkfishes & Sandfishes",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিপাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Neopterygii",
        "nameBn": "নিওপটেরিগি"
      },
      {
        "rank": "order",
        "name": "Gonorynchiformes",
        "nameBn": "মিল্কফিশ ও বালিমাছ বর্গ"
      }
    ],
    "shortDescription": {
      "en": "Basal otophysan teleosts possessing toothless jaws, an epibranchial organ for microphagy, a primitive Weberian apparatus precursor, and high ecological importance in tropical aquaculture.",
      "bn": "আদিম ওটোফাইসান টেলিয়স্ট মাছ যাদের চোয়াল দাঁতহীন, খাদ্য ছাঁকার এপিপ্রাঙ্কিয়াল অঙ্গ রয়েছে, আদিম ওয়েবেরিয়ান যন্ত্রের পূর্বসূরী এবং গ্রীষ্মমন্ডলীয় জলজ চাষে অত্যন্ত গুরুত্বপূর্ণ।"
    },
    "diagnosticCharacteristics": {
      "en": "Mouth toothless or jaws virtually toothless (bearing microscopic teeth only on tongue or basibranchials); primitive anterior vertebral modifications acting as a prototype Weberian apparatus; epibranchial organs (paired pharyngeal pouches behind fourth gill arches used for processing food particles) present; single dorsal fin; cycloid or ctenoid scales present; swim bladder present or secondarily reduced.",
      "bn": "দাঁতহীন চোয়াল (বা জিহ্বা ও গলবিলে অতি সূক্ষ্ম দাঁত); আদিম ওয়েবেরিয়ান যন্ত্রের মতো কশেরুকার প্রাথমিক পরিবর্তন; এপিপ্রাঙ্কিয়াল অঙ্গ (৪র্থ ফুলকা আর্চের পেছনে খাদ্য কণা প্রক্রিয়াজাত করার বিশেষ থলি) বিদ্যমান; একক পৃষ্ঠপাখনা; সাইক্লয়েড বা টিনয়েড আঁইশ; পটকা উপস্থিত বা কোনো প্রজাতিতে হ্রাসপ্রাপ্ত।",
      "keyFeatures": {
        "en": [
          "Jaws toothless, mouth adapted for bottom foraging and microphagy",
          "Epibranchial organ behind fourth gill cleft for filtering microorganisms",
          "Basal sister lineage to the mega-diverse Otophysi (Cypriniformes, Siluriformes)",
          "Single dorsal fin positioned around midpoint of compressed silvery body"
        ],
        "bn": [
          "দাঁতহীন চোয়াল, তলদেশের কণা ও অণুজীব খাওয়ার উপযোগী মুখ",
          "অণুজীব খাদ্য ছাঁকার জন্য চতুর্থ ফুলকা আর্চের পেছনে এপিপ্রাঙ্কিয়াল অঙ্গ",
          "বিশাল ওটোফাইসি (কার্প ও ক্যাটফিশ) মহাবর্গের নিকটতম আদিম বোন-শাখা",
          "রূপালী চ্যাপ্টা দেহের মাঝখানে অবস্থিত একক পৃষ্ঠপাখনা"
        ]
      }
    },
    "habitat": {
      "en": "Coastal marine waters, shallow sandy surf zones, brackish mangrove lagoons, and freshwater rivers (Kneriidae in Africa).",
      "bn": "উপকূলীয় সমুদ্র, অগভীর বালুকাময় সৈকত, লোনাপানির ম্যানগ্রোভ হ্রদ এবং মিঠাপানির নদী (আফ্রিকান নেরিডি গোত্রে)।",
      "systems": [
        "marine",
        "brackish",
        "freshwater"
      ]
    },
    "ecosystem": {
      "en": "Crucial herbivorous and detritivorous primary consumers, converting benthic algae, diatoms, and detritus into protein in tropical coastal ecosystems.",
      "bn": "উপকূলীয় বাস্তুতন্ত্রের প্রধান নিরামিষাশী ও মেথর প্রাণী; শ্যাওলা, ডায়াটম ও জৈব কণা খেয়ে প্রোটিনে রূপান্তর করে।"
    },
    "feeding": {
      "en": "Herbivorous and microphagous: grazing benthic cyanobacteria, filamentous algae, diatoms, and detritus processed in epibranchial pouches.",
      "bn": "তৃণভোজী ও অণুজীবভোজী; তলদেশের শৈবাল, ডায়াটম ও গলিত জৈব কণা এপিপ্রাঙ্কিয়াল অঙ্গ দিয়ে ছেঁকে খায়।"
    },
    "reproduction": {
      "en": "Marine broadcast spawning in shallow coastal waters; high fecundity (up to 5–7 million pelagic eggs per female); larvae migrate into brackish mangrove nursery habitats.",
      "bn": "উপকূলীয় সমুদ্রে লক্ষ লক্ষ ভাসমান ডিম ছাড়ে; ডিম ফুটে বের হওয়া লার্ভা জোয়ারের সাথে ম্যানগ্রোভ ও মোহনার নার্সারি অঞ্চলে প্রবেশ করে।"
    },
    "distribution": {
      "en": "Indo-Pacific and Atlantic warm marine and tropical African freshwaters. Milkfish (Chanos chanos) occurs throughout the northern Bay of Bengal and coastal estuaries.",
      "bn": "ভারত-প্রশান্ত মহাসাগরীয় উষ্ণ অঞ্চল এবং আফ্রিকার মিঠাপানিতে বিস্তৃত। মিল্কফিশ (Chanos chanos) উত্তর বঙ্গোপসাগর ও সুন্দরবন উপকূলে পাওয়া যায়।"
    },
    "importantFamilies": [
      {
        "name": "Chanidae",
        "commonEn": "Milkfishes",
        "commonBn": "মিল্কফিশ গোত্র",
        "diagnosticEn": "Toothless mouth, silvery compressed body, deeply forked caudal fin, single dorsal fin.",
        "diagnosticBn": "দাঁতহীন মুখ, রূপালী চ্যাপ্টা দেহ, গভীর খাঁজযুক্ত লেজ, একক পৃষ্ঠপাখনা।"
      },
      {
        "name": "Gonorynchidae",
        "commonEn": "Beaked Sandfishes",
        "commonBn": "চঞ্চুমুখ বালিমাছ গোত্র",
        "diagnosticEn": "Elongated cylindrical body, fleshy rostral barbel, ctenoid scales, burrowing habit.",
        "diagnosticBn": "লম্বা নলাকার দেহ, তুন্ডে মাংসল শুঙ্গ, টিনয়েড আঁইশ, বালিতে গর্ত করার স্বভাব।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Key genera: Chanos, Gonorynchus, Kneria, and Phractolaemus. Binomials: Chanos chanos (Forsskål, 1775) and Gonorynchus gonorynchus (Linnaeus, 1766).",
      "bn": "প্রধান গণ: Chanos, Gonorynchus, Kneria এবং Phractolaemus। বৈজ্ঞানিক নাম: Chanos chanos (Forsskål, 1775) এবং Gonorynchus gonorynchus (Linnaeus, 1766)।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Milkfish (Chanos chanos), Beaked Sandfish (Gonorynchus gonorynchus), Shell-ear / Ear-spot Kneria (Kneria auriculata), and African Hingemouth (Phractolaemus ansorgii).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: মিল্কফিশ বা দুধমাছ (Chanos chanos), চঞ্চুমুখ বালিমাছ (Gonorynchus gonorynchus), কানের মতো দাগযুক্ত নেরিয়া (Kneria auriculata) এবং আফ্রিকান হিঞ্জমাউথ (Phractolaemus ansorgii)।"
    },
    "additionalInformation": {
      "en": "Milkfish (Chanos chanos) is a monumental commercial aquaculture species throughout Southeast and South Asia, supporting large-scale coastal pen farming in the Indo-Pacific.",
      "bn": "মিল্কফিশ (Chanos chanos) দক্ষিণ-পূর্ব এশিয়া ও বঙ্গোপসাগরীয় অঞ্চলে অত্যন্ত গুরুত্বপূর্ণ চাষযোগ্য মাছ, যা দ্রুত বর্ধনশীল এবং রোগ প্রতিরোধী।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Grande & Poyato-Ariza (1999)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-characiformes",
    "taxonId": "taxon-characiformes",
    "rank": "order",
    "scientificName": "Characiformes",
    "bengaliName": "কারাসিন, টেট্রা ও পিরানহা বর্গ",
    "englishName": "Characins, Tetras & Piranhas",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিপাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Neopterygii",
        "nameBn": "নিওপটেরিগি"
      },
      {
        "rank": "order",
        "name": "Characiformes",
        "nameBn": "কারাসিন, টেট্রা ও পিরানহা বর্গ"
      }
    ],
    "shortDescription": {
      "en": "Diverse freshwater otophysan teleosts characterized by a fully developed Weberian apparatus, well-toothed jaws (often multicuspid or serrated), and an adipose fin situated behind the dorsal fin.",
      "bn": "বৈচিত্র্যময় মিঠাপানির ওটোফাইসান মাছ যাদের পূর্ণাঙ্গ ওয়েবেরিয়ান যন্ত্র, চোয়ালে মজবুত খাঁজকাটা বা বহুমুখী দাঁত এবং পৃষ্ঠপাখনার পেছনে একটি চর্বিযুক্ত অ্যাডিপোজ পাখনা রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Well-developed Weberian apparatus connecting swim bladder to inner ear; body typically covered with cycloid scales (rarely ctenoid); multicuspid or sharp interlocking teeth firmly anchored in premaxilla and dentary; presence of an adipose fin (a small fleshy rayless fin behind the rayed dorsal fin) in almost all species; strictly freshwater; no barbels on jaws.",
      "bn": "পটকা ও অন্তঃকর্ণকে যুক্তকারী পূর্ণাঙ্গ ওয়েবেরিয়ান যন্ত্র; সাধারণত সাইক্লয়েড আঁইশে ঢাকা দেহ; চোয়ালে বহুমুখী বা অত্যন্ত ধারালো দাঁত শক্তভাবে বসানো থাকে; প্রায় সকল প্রজাতিতে পৃষ্ঠপাখনার পেছনে ছোট মাংসল অ্যাডিপোজ পাখনার উপস্থিতি; সম্পূর্ণ মিঠাপানিতে বসবাসকারী; চোয়ালে কোনো সংবেদনশীল বার্বেল বা শুঙ্গ থাকে না।",
      "keyFeatures": {
        "en": [
          "Presence of a fleshy rayless adipose fin between dorsal and caudal fins",
          "Multicuspid, razor-sharp, or crushing jaw teeth firmly implanted in jaw bones",
          "Four anterior modified vertebrae forming functional Weberian ossicles",
          "Strictly freshwater distribution restricted to Neotropical and Afrotropical realms"
        ],
        "bn": [
          "পৃষ্ঠপাখনা ও লেজের মাঝখানে ছোট মাংসল রশ্মিহীন অ্যাডিপোজ পাখনা",
          "চোয়ালে শক্তভাবে প্রোথিত খাঁজকাটা বা ক্ষুরের মতো ধারালো দাঁত",
          "শুনতে সাহায্যকারী প্রথম চারটি কশেরুকা গঠিত ওয়েবেরিয়ান অস্থিকা",
          "দক্ষিণ আমেরিকা ও আফ্রিকার মিঠাপানিতে প্রাকৃতিকভাবে সীমাবদ্ধ"
        ]
      }
    },
    "habitat": {
      "en": "Tropical freshwater rivers, Amazonian floodplains, fast-flowing clearwater streams, and African Great Lakes.",
      "bn": "গ্রীষ্মমন্ডলীয় মিঠাপানির নদী, আমাজন প্লাবনভূমি, পাহাড়ি স্বচ্ছ ঝর্ণা এবং আফ্রিকার হ্রদসমূহ।",
      "systems": [
        "freshwater"
      ]
    },
    "ecosystem": {
      "en": "Dominant trophic drivers in Neotropical river basins, spanning herbivorous seed dispersers, apex pack predators, scale-eaters, and insectivores.",
      "bn": "আমাজন ও আফ্রিকান নদীর বাস্তুতন্ত্রের প্রধান মেরুদণ্ড; ফল ও বীজ ছড়ানো তৃণভোজী থেকে শুরু করে দলবদ্ধ শীর্ষ শিকারী হিসেবে কাজ করে।"
    },
    "feeding": {
      "en": "Extremely diverse: predatory piscivores with interlocking razor teeth (Piranhas), crushing frugivores eating river fruits (Pacus), planktivores, and micro-insectivores (Tetras).",
      "bn": "অত্যন্ত বৈচিত্র্যময়; ক্ষুরের মতো দাঁতে দলবদ্ধ মাছ শিকারী (পিরানহা), শক্ত দাঁত দিয়ে নদীর ফল ও বীজ চর্বণকারী (পাকু), এবং ছোট পোকাখেকো (টেট্রা)।"
    },
    "reproduction": {
      "en": "Oviparous broadcast spawners in submerged aquatic vegetation; splash tetras (Copella arnoldi) lay eggs out of water on terrestrial leaves and splash them with water.",
      "bn": "জলজ উদ্ভিদে ডিম ছড়ানো ডিম্বপ্রসবকারী; স্প্ল্যাশ টেট্রা পানির উপরে ঝুলন্ত গাছে ডিম পেড়ে লেজ দিয়ে পানি ছিটিয়ে তা সিক্ত রাখে।"
    },
    "distribution": {
      "en": "Strictly native to South/Central America (over 1,800 species) and Sub-Saharan Africa (over 250 species). Zero native species in Bangladesh (though Piranha is an illegal prohibited invasive).",
      "bn": "দক্ষিণ/মধ্য আমেরিকা ও সাব-সাহারান আফ্রিকায় সীমাবদ্ধ। বাংলাদেশে কোনো দেশীয় প্রজাতি নেই (তবে রাক্ষুসে পিরানহা সরকারিভাবে নিষিদ্ধ ও ক্ষতিকর অনুপ্রবেশকারী)।"
    },
    "importantFamilies": [
      {
        "name": "Characidae",
        "commonEn": "Tetras & True Characins",
        "commonBn": "টেট্রা ও আসল কারাসিন গোত্র",
        "diagnosticEn": "Small silvery or brilliantly colored freshwater fishes with adipose fin and toothed jaws.",
        "diagnosticBn": "উজ্জ্বল রঙের ছোট মিঠাপানির মাছ, অ্যাডিপোজ পাখনা ও দাঁতযুক্ত চোয়ালবিশিষ্ট।"
      },
      {
        "name": "Serrasalmidae",
        "commonEn": "Piranhas and Pacus",
        "commonBn": "পিরানহা ও পাকু গোত্র",
        "diagnosticEn": "Deep compressed body, serrae along ventral midline, razor-sharp or molariform teeth.",
        "diagnosticBn": "চ্যাপ্টা গভীর দেহ, পেটের নিচে করাতের মতো খাঁজ, ক্ষুরের মতো ধারালো বা চ্যাপ্টা পেষণ দাঁত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Key genera: Pygocentrus, Paracheirodon, Hydrocynus, Brycon, and Colossoma. Binomials: Pygocentrus nattereri Kner, 1858 and Paracheirodon axelrodi (Schultz, 1956).",
      "bn": "প্রধান গণ: Pygocentrus, Paracheirodon, Hydrocynus, Brycon এবং Colossoma। বৈজ্ঞানিক নাম: Pygocentrus nattereri Kner, 1858 এবং Paracheirodon axelrodi (Schultz, 1956)।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Red-bellied Piranha (Pygocentrus nattereri), Cardinal Tetra (Paracheirodon axelrodi), Goliath Tigerfish (Hydrocynus goliath), and Tambaqui / Pacu (Colossoma macropomum).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: লালপেট পিরানহা (Pygocentrus nattereri), কার্ডিনাল টেট্রা (Paracheirodon axelrodi), গলিয়াথ টাইগারফিশ (Hydrocynus goliath) এবং তাম্বাকি বা পাকু (Colossoma macropomum)।"
    },
    "additionalInformation": {
      "en": "Red-bellied Piranha (Pygocentrus nattereri) is strictly banned in Bangladesh under the Protection and Conservation of Fish Act due to extreme risk to indigenous biodiversity if released.",
      "bn": "লালপেট পিরানহা মৎস্য সংরক্ষণ আইনের অধীনে বাংলাদেশে চাষ, বিক্রি ও অবমুক্তকরণ সম্পূর্ণ নিষিদ্ধ কারণ এটি দেশীয় জলজ প্রাণীদের জন্য বিধ্বংসী।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Mirande (2010)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-salmoniformes",
    "taxonId": "taxon-salmoniformes",
    "rank": "order",
    "scientificName": "Salmoniformes",
    "bengaliName": "স্যামন ও ট্রাউট বর্গ",
    "englishName": "Salmons, Trouts & Chars",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিপাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Neopterygii",
        "nameBn": "নিওপটেরিগি"
      },
      {
        "rank": "order",
        "name": "Salmoniformes",
        "nameBn": "স্যামন ও ট্রাউট বর্গ"
      }
    ],
    "shortDescription": {
      "en": "Cold-water anadromous and freshwater teleosts characterized by a fleshy adipose fin, a physostomous swim bladder, cycloid scales, and legendary upstream natal homing migrations.",
      "bn": "শীতল পানির পরিযায়ী ও মিঠাপানির মাছ যাদের পিঠে একটি মাংসল অ্যাডিপোজ পাখনা, সাইক্লয়েড আঁইশ এবং প্রজননের জন্য জন্মভূমির পাহাড়ি নদীতে ফিরে আসার স্বভাব রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Adipose fin present behind rayed dorsal fin; all fins lack true hard spines; pelvic fins abdominal in position with an axillary process; maxilla toothed and included in the gape; physostomous swim bladder connected to oesophagus by a pneumatic duct; cycloid scales; lack of Weberian apparatus; whole-genome duplication (autotetraploid ancestry).",
      "bn": "রশ্মিযুক্ত পৃষ্ঠপাখনার পেছনে ছোট মাংসল অ্যাডিপোজ পাখনা বিদ্যমান; পাখনার কোথাও শক্ত খাঁজযুক্ত কাঁটা নেই; শ্রোণীপাখনা পেটের দিকে অবস্থিত; চোয়ালে দাঁত বিদ্যমান; খাদ্যনালীর সাথে নালীযুক্ত সাইসোস্টোমাস পটকা; সাইক্লয়েড আঁইশ; কোনো ওয়েবেরিয়ান যন্ত্র নেই; প্রাচীন সম্পূর্ণ জিনোম দ্বিগুণ হওয়ার ইতিহাস।",
      "keyFeatures": {
        "en": [
          "Fleshy adipose fin positioned between the dorsal and homocercal caudal fin",
          "Entirely devoid of rigid spiny fin rays in all fins",
          "Anadromous homing migrations using olfaction to return to natal gravel riverbeds",
          "High physiological dependency on cold, oxygen-saturated waters"
        ],
        "bn": [
          "পৃষ্ঠপাখনা ও পুচ্ছপাখনার মাঝে অবস্থিত মাংসল অ্যাডিপোজ পাখনা",
          "পাখনাগুলোতে কোনো শক্ত বা ধারালো কাঁটা নেই",
          "ঘ্রাণশক্তির সাহায্যে জন্মভূমির নদীতে ফিরে আসার পরিযায়ী স্বভাব (হোমিং)",
          "চরম শীতল ও অক্সিজেনসমৃদ্ধ পানির ওপর নির্ভরশীলতা"
        ]
      }
    },
    "habitat": {
      "en": "Cold-temperate and Arctic freshwater rivers, oligotrophic alpine lakes, and cold epipelagic marine ocean waters of the Northern Hemisphere.",
      "bn": "উত্তর গোলার্ধের শীতল ও আর্কটিক মিঠাপানির নদী, পাহাড়ি স্বচ্ছ হ্রদ এবং শীতল মহাসাগরের উপরিভাগ।",
      "systems": [
        "freshwater",
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Keystone ecosystem engineers: anadromous salmon runs transport millions of tons of marine nitrogen and phosphorus into terrestrial river basins, fertilizing riparian forests and supporting bears, eagles, and river life.",
      "bn": "বাস্তুতন্ত্রের প্রধান নিয়ন্ত্রক; সমুদ্র থেকে নদীতে পরিযানের মাধ্যমে এরা লাখ লাখ টন সামুদ্রিক নাইট্রোজেন ও ফসফরাস পাহাড়ি বনে সরবরাহ করে।"
    },
    "feeding": {
      "en": "Carnivorous: feeding on aquatic insect nymphs, crustaceans, amphipods, and smaller teleost schooling fishes (herrings, capelin, sand lances).",
      "bn": "মাংসাশী; নদীর পোকা, জলজ ক্রাস্টাশিয়ান এবং সমুদ্রে হেরিং ও ক্যাপেলিন মাছ শিকার করে।"
    },
    "reproduction": {
      "en": "Anadromous: adult salmons migrate thousands of miles upstream to natal gravel river beds, dig nests (redds), spawn large orange yolky eggs, and frequently exhibit semelparity (Pacific salmon dying after spawning).",
      "bn": "পরিযায়ী; সমুদ্র থেকে উজানের পাহাড়ি নদীতে উঠে নুড়িপাথরে বাসা খুঁড়ে ডিম পাড়ে; প্রশান্ত মহাসাগরীয় স্যামন মাছ ডিম পেড়েই মারা যায় (সেমেলপ্যারাস)।"
    },
    "distribution": {
      "en": "Native to the Northern Hemisphere (North Atlantic, North Pacific, Arctic drainages). Strictly absent from native South Asian biodiversity.",
      "bn": "উত্তর গোলার্ধের শীতল সাগরে ও নদীতে সীমাবদ্ধ। গ্রীষ্মমন্ডলীয় বাংলাদেশে কোনো দেশীয় প্রজাতি নেই।"
    },
    "importantFamilies": [
      {
        "name": "Salmonidae",
        "commonEn": "Salmons, Trouts, and Chars",
        "commonBn": "স্যামন ও ট্রাউট গোত্র",
        "diagnosticEn": "Adipose fin present, cycloid scales, pelvic axillary process present, cold-water affinity.",
        "diagnosticBn": "অ্যাডিপোজ পাখনা বিদ্যমান, সাইক্লয়েড আঁইশ, পেলভিক অ্যাক্সিলারি প্রক্রিয়া, শীতল পানির মাছ।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Dominant genera: Salmo, Oncorhynchus, Salvelinus, and Coregonus. Binomials: Salmo salar Linnaeus, 1758 and Oncorhynchus mykiss (Walbaum, 1792).",
      "bn": "প্রধান গণ: Salmo, Oncorhynchus, Salvelinus এবং Coregonus। বৈজ্ঞানিক নাম: Salmo salar Linnaeus, 1758 এবং Oncorhynchus mykiss (Walbaum, 1792)।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Atlantic Salmon (Salmo salar), Rainbow Trout (Oncorhynchus mykiss), Arctic Charr (Salvelinus alpinus), and Sockeye Salmon (Oncorhynchus nerka).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: আটলান্টিক স্যামন (Salmo salar), রেইনবো ট্রাউট (Oncorhynchus mykiss), আর্কটিক চার (Salvelinus alpinus) এবং সোকআই স্যামন (Oncorhynchus nerka)।"
    },
    "additionalInformation": {
      "en": "Atlantic salmon and rainbow trout are among the most heavily farmed commercial finfish species in global temperate aquaculture. Zero wild populations exist in Bangladesh.",
      "bn": "বিশ্বের শীতল দেশগুলোতে বাণিজ্যিকভাবে সর্বাধিক চাষ করা মাছের মধ্যে স্যামন ও রেইনবো ট্রাউট শীর্ষে। বাংলাদেশে কোনো প্রাকৃতিকভাবে টেকসই প্রজাতি নেই।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Campbell et al. (2013)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-aulopiformes",
    "taxonId": "taxon-aulopiformes",
    "rank": "order",
    "scientificName": "Aulopiformes",
    "bengaliName": "টিকটিকি মাছ ও ত্রিপদ মাছ বর্গ",
    "englishName": "Lizardfishes & Tripod Fishes",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিপাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Neopterygii",
        "nameBn": "নিওপটেরিগি"
      },
      {
        "rank": "order",
        "name": "Aulopiformes",
        "nameBn": "টিকটিকি মাছ ও ত্রিপদ মাছ বর্গ"
      }
    ],
    "shortDescription": {
      "en": "Marine benthic and bathypelagic predatory teleosts characterized by specialized gill arches, a large gaping mouth armed with multiple rows of sharp needle teeth, and synchronous hermaphroditism in deep-sea clades.",
      "bn": "সামুদ্রিক তলদেশীয় ও গভীর সমুদ্রের শিকারী মাছ, যাদের মুখগহ্বর বিস্তৃত ও সুইয়ের মতো ধারালো দাঁতে পূর্ণ এবং গভীরের প্রজাতিগুলোতে যুগপত উভয়লিঙ্গতা দেখা যায়।"
    },
    "diagnosticCharacteristics": {
      "en": "Specialized branchial skeleton with an elongated uncinate process on the second epibranchial; mouth large with numerous needle-like or barbed teeth on jaws, palate, and tongue; adipose fin typically present; cycloid or ctenoid scales; swim bladder absent in most adult taxa; deep-sea representatives (Bathypteroidae, Alepisauridae) exhibit functional simultaneous (synchronous) hermaphroditism.",
      "bn": "দ্বিতীয় এপিপ্রাঙ্কিয়ালে বিশেষ অস্থিময় প্রক্রিয়াযুক্ত ফুলকা কঙ্কাল; বিস্তৃত হাঁ-মুখ যার চোয়াল, তালু ও জিহ্বায় সুইয়ের মতো ধারালো দাঁতের একাধিক সারি থাকে; অ্যাডিপোজ পাখনা সাধারণত উপস্থিত; বেশিরভাগ প্রাপ্তবয়স্ক প্রজাতিতে পটকা অনুপস্থিত; গভীর সমুদ্রের প্রজাতিগুলো যুগপৎ উভয়লিঙ্গ (একই সাথে শুক্রাণু ও ডিম্বাণু উৎপন্নকারী)।",
      "keyFeatures": {
        "en": [
          "Specialized pharyngobranchial and epibranchial bone architecture",
          "Wide gape packed with needle-sharp teeth extending onto the tongue and palate",
          "Simultaneous hermaphroditism prevalent in deep-water lineages",
          "Specialized stilt-like elongated pelvic and caudal rays in tripodfishes (Bathypterois)"
        ],
        "bn": [
          "ফুলকা আর্চের বিশেষ অস্থিময় বিন্যাস",
          "জিহ্বা ও তালু পর্যন্ত বিস্তৃত সূঁচালো দাঁতের সারিযুক্ত প্রশস্ত মুখগহ্বর",
          "গভীর সমুদ্রের প্রজাতিতে যুগপৎ উভয়লিঙ্গ প্রজনন ব্যবস্থা",
          "ত্রিপদ মাছে দীর্ঘায়িত পাখনা রশ্মি যার ওপর ভর দিয়ে এরা সমুদ্রের তলদেশে দাঁড়িয়ে থাকে"
        ]
      }
    },
    "habitat": {
      "en": "Shallow sandy neritic shelves, coral reef lagoons, continental slopes, and abyssal seafloors down to depths exceeding 5,000 meters.",
      "bn": "অগভীর বালুকাময় মহীসোপান, প্রবাল প্রাচীর এবং ৫,০০০ মিটারেরও বেশি গভীর সমুদ্রের তলদেশ।",
      "systems": [
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Ambush benthic predators: coastal lizardfishes lie camouflaged in sediment to seize passing fishes; deep-sea tripod fishes stand above abyssal mud facing currents to capture drifting zooplankton.",
      "bn": "তলদেশীয় শিকারী; অগভীর সৈকতে এরা বালির নিচে লুকিয়ে থেকে মাছ শিকার করে; এবং গভীরের ত্রিপদ মাছ লেজ ও পাখনার ওপর দাঁড়িয়ে স্রোতের ভাসমান প্লাঙ্কটন ধরে।"
    },
    "feeding": {
      "en": "Voracious carnivores seizing demersal teleosts, squids, and crustaceans with hinged needle teeth that fold inward to prevent prey escape.",
      "bn": "মাংসাশী শিকারী; ভেতরের দিকে বাঁকানো সুইয়ের মতো দাঁত দিয়ে মাছ ও স্কুইড শিকার করে যাতে শিকার কোনোভাবেই মুখ থেকে পিছলে বের হতে না পারে।"
    },
    "reproduction": {
      "en": "Pelagic broadcast spawning with buoyant pelagic eggs; deep-sea bathyal taxa are synchronous hermaphrodites capable of self-fertilization when mates are absent in the abyssal void.",
      "bn": "সমুদ্রে ভাসমান ডিম ছাড়ে; গভীর সমুদ্রের নিঃসঙ্গ পরিবেশে সঙ্গীর অভাবে এরা নিজের ডিম্বাণুকে নিজের শুক্রাণু দ্বারা স্বনিষিক্ত করতে পারে।"
    },
    "distribution": {
      "en": "Worldwide across tropical, temperate, and abyssal marine basins. Highly abundant along the Bay of Bengal continental shelf and Cox's Bazar coast.",
      "bn": "বিশ্বের সকল উষ্ণ ও গভীর মহাসাগরে বিস্তৃত। বঙ্গোপসাগরের মহীসোপান ও কক্সবাজার উপকূলে প্রচুর পরিমাণে বিদ্যমান।"
    },
    "importantFamilies": [
      {
        "name": "Synodontidae",
        "commonEn": "Lizardfishes",
        "commonBn": "টিকটিকি মাছ গোত্র",
        "diagnosticEn": "Cylindrical body, lizard-like head, mouth filled with needle teeth, adipose fin present.",
        "diagnosticBn": "নলাকার দেহ, টিকটিকির মতো চ্যাপ্টা মাথা, সুইয়ের মতো দাঁতযুক্ত মুখ, অ্যাডিপোজ পাখনাযুক্ত।"
      },
      {
        "name": "Bathypteroidae",
        "commonEn": "Tripod Fishes",
        "commonBn": "ত্রিপদ মাছ গোত্র",
        "diagnosticEn": "Pelvic and lower caudal fin rays enormously elongated into stilt-like supports.",
        "diagnosticBn": "শ্রোণীপাখনা ও লেজের নিচের অংশ বিশালাকার খুঁটির মতো লম্বা যা দিয়ে তলদেশে দাঁড়ায়।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Key genera: Saurida, Synodus, Trachinocephalus, Bathypterois, and Alepisaurus. Binomials: Saurida tumbil (Bloch, 1795) and Synodus variegatus (Lacepède, 1803).",
      "bn": "প্রধান গণ: Saurida, Synodus, Trachinocephalus, Bathypterois এবং Alepisaurus। বৈজ্ঞানিক নাম: Saurida tumbil (Bloch, 1795) এবং Synodus variegatus (Lacepède, 1803)।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Greater Lizardfish (Saurida tumbil), Variegated Lizardfish (Synodus variegatus), Abyssal Tripodfish (Bathypterois grallator), and Longnose Lancetfish (Alepisaurus ferox).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: বড় টিকটিকি মাছ (Saurida tumbil), চিত্রা টিকটিকি মাছ (Synodus variegatus), অতল ত্রিপদ মাছ (Bathypterois grallator) এবং লম্বানাক ল্যানসেটফিশ (Alepisaurus ferox)।"
    },
    "additionalInformation": {
      "en": "Greater Lizardfish (Saurida tumbil) is one of the most commercially abundant demersal finfishes harvested by bottom trawlers in the Bangladesh Bay of Bengal shelf.",
      "bn": "বড় টিকটিকি মাছ (Saurida tumbil) বঙ্গোপসাগরে ট্রলারের জালে প্রচুর পরিমাণে ধরা পড়ে এবং এটি স্থানীয় বাজারে শুঁটকি ও তাজা মাছ হিসেবে বিক্রি হয়।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Davis (2010)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-gadiformes",
    "taxonId": "taxon-gadiformes",
    "rank": "order",
    "scientificName": "Gadiformes",
    "bengaliName": "কড ও হেক বর্গ",
    "englishName": "Cods, Hakes & Grenadiers",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিপাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Neopterygii",
        "nameBn": "নিওপটেরিগি"
      },
      {
        "rank": "order",
        "name": "Gadiformes",
        "nameBn": "কড ও হেক বর্গ"
      }
    ],
    "shortDescription": {
      "en": "Cold-water and deep-sea marine paracanthopterygian teleosts characterized by jugular or thoracic pelvic fins, multiple subdivided dorsal fins lacking true spines, and a sensory chin barbel.",
      "bn": "শীতল পানি ও গভীর সমুদ্রের মাছ যাদের শ্রোণীপাখনা গলার কাছে অবস্থিত, পৃষ্ঠপাখনা দুই বা তিনটি অংশে বিভক্ত এবং থুতনিতে সংবেদনশীল বার্বেল বা শুঙ্গ থাকে।"
    },
    "diagnosticCharacteristics": {
      "en": "Pelvic fins thoracic or jugular (inserted below or anterior to pectoral fins), often with narrow bases; fins lack true sharp spines; dorsal fin typically subdivided into two or three distinct parts; anal fin divided into one or two parts; caudal fin often lost or merged with long dorsal/anal fringe (in macrourids); single sensory chin barbel typically present; physoclistous swim bladder lacking pneumatic duct.",
      "bn": "শ্রোণীপাখনা গলার নিচে বা বক্ষপাখনার সামনে অবস্থিত; পাখনার কোথাও প্রকৃত কাঁটা নেই; পৃষ্ঠপাখনা সাধারণত দুই বা তিনটি পৃথক অংশে বিভক্ত; থুতনির নিচে একক সংবেদনশীল শুঙ্গ (বার্বেল); পটকায় খাদ্যনালীর কোনো নালী থাকে না (ফাইসোক্লিস্টাস); গভীরের প্রজাতিতে লেজ ছুঁচলো হয়ে বিলীন হয়ে যায়।",
      "keyFeatures": {
        "en": [
          "Pelvic fins inserted jugularly (anterior to the pectoral fin base)",
          "Absence of true spiny rays; multiple divided dorsal and anal fins",
          "Sensory chin barbel used to probe benthic substrate for hidden prey",
          "Enormously high fecundity yielding up to tens of millions of pelagic eggs"
        ],
        "bn": [
          "বক্ষপাখনার সামনে বা গলার নিচে অবস্থিত শ্রোণীপাখনা",
          "ধারালো কাঁটাহীন বিভক্ত পৃষ্ঠ ও পায়ুপাখনা",
          "তলদেশের খাদ্য খুঁজতে থুতনির নিচে সংবেদনশীল একক শুঙ্গ",
          "বিশাল ডিম উৎপাদন ক্ষমতা (একটি মাছে লক্ষ লক্ষ ডিম)"
        ]
      }
    },
    "habitat": {
      "en": "Cold-temperate continental shelves, subpolar oceanic banks, and deep-sea bathyal to abyssal trenches down to 4,000 meters.",
      "bn": "উত্তর গোলার্ধের শীতল মহীসোপান, সমুদ্রের অগভীর ব্যাংক এবং গভীর সমুদ্রের খাত যা ৪,০০০ মিটার পর্যন্ত বিস্তৃত।",
      "systems": [
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Foundational benthic and demersal predators across the North Atlantic, North Pacific, and global bathyal trenches (where rattails/macrourids dominate biomass).",
      "bn": "উত্তর আটলান্টিক ও গভীর সমুদ্রের খাদ্যশৃঙ্খলের প্রধান ভিত্তি; গভীর সমুদ্রের তলদেশের জীবভরের বেশিরভাগ অংশই এদের দখলে।"
    },
    "feeding": {
      "en": "Carnivorous demersal predators eating capelin, sand lances, herrings, crabs, shrimps, and benthic polychaetes detected by their chin barbel.",
      "bn": "মাংসাশী শিকারী; থুতনির শুঙ্গ দিয়ে কাদার ভেতর চিংড়ি, কাঁকড়া ও কৃমি শনাক্ত করে এবং ছোট মাছ শিকার করে।"
    },
    "reproduction": {
      "en": "Pelagic broadcast spawning: massive aggregations releasing floating buoyant eggs; a single large female Atlantic cod can spawn over five million eggs in a single season.",
      "bn": "সমুদ্রে ভাসমান কোটি কোটি ডিম ছাড়ে; একটি প্রাপ্তবয়স্ক স্ত্রী কড মাছ এক প্রজনন মৌসুমেই ৫০ লক্ষেরও বেশি ডিম পাড়ে।"
    },
    "distribution": {
      "en": "Predominantly Northern Hemisphere cool-temperate and polar waters, with deep-water grenadiers (Macrouridae) extending into tropical bathyal slopes. Absent from shallow Bangladesh waters.",
      "bn": "উত্তর গোলার্ধের শীতল সাগরে প্রধান বিস্তার, তবে গভীরের র‍্যাটটেইল মাছ ক্রান্তীয় গভীর সমুদ্রেও বাস করে। অগভীর বাংলাদেশে অনুপস্থিত।"
    },
    "importantFamilies": [
      {
        "name": "Gadidae",
        "commonEn": "True Cods",
        "commonBn": "আসল কড গোত্র",
        "diagnosticEn": "Three dorsal fins, two anal fins, sensory barbel on chin, homocercal tail.",
        "diagnosticBn": "তিনটি পৃষ্ঠপাখনা, দুটি পায়ুপাখনা, থুতনিতে সংবেদনশীল শুঙ্গ, সুষম পুচ্ছপাখনা।"
      },
      {
        "name": "Macrouridae",
        "commonEn": "Grenadiers or Rattails",
        "commonBn": "র‍্যাটটেইল বা গ্রেনেডিয়ার গোত্র",
        "diagnosticEn": "Tapering whiplike tail lacking caudal fin, large head, deep bathyal habitat.",
        "diagnosticBn": "লেজ পুচ্ছপাখনা ছাড়া সরু চাবুকের মতো ক্রমশ মিলিয়ে যায়, বড় মাথা, গভীর সমুদ্রের মাছ।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Key genera: Gadus, Melanogrammus, Merluccius, and Coryphaenoides. Binomials: Gadus morhua Linnaeus, 1758 and Melanogrammus aeglefinus (Linnaeus, 1758).",
      "bn": "প্রধান গণ: Gadus, Melanogrammus, Merluccius এবং Coryphaenoides। বৈজ্ঞানিক নাম: Gadus morhua Linnaeus, 1758 এবং Melanogrammus aeglefinus (Linnaeus, 1758)।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Atlantic Cod (Gadus morhua), Haddock (Melanogrammus aeglefinus), European Hake (Merluccius merluccius), and Abyssal Grenadier (Coryphaenoides armatus).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: আটলান্টিক কড (Gadus morhua), হ্যাডক (Melanogrammus aeglefinus), ইউরোপীয় হেক (Merluccius merluccius) এবং অতল গ্রেনেডিয়ার (Coryphaenoides armatus)।"
    },
    "additionalInformation": {
      "en": "Atlantic cod (Gadus morhua) historically shaped human civilization, maritime trade, and colonization in the North Atlantic. No native shallow-water records occur in Bangladesh.",
      "bn": "আটলান্টিক কড মাছ উত্তর আটলান্টিক অঞ্চলের মানব সভ্যতার ইতিহাস ও অর্থনৈতিক উন্নয়নে ঐতিহাসিক ভূমিকা রেখেছে। বাংলাদেশের জলসীমায় কোনো অগভীর প্রজাতি নেই।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Roa-Varón & Ortí (2009)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-syngnathiformes",
    "taxonId": "taxon-syngnathiformes",
    "rank": "order",
    "scientificName": "Syngnathiformes",
    "bengaliName": "ঘোড়ামাছ, পাইপমাছ ও রেজরফিশ বর্গ",
    "englishName": "Seahorses, Pipefishes & Dragonets",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিপাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Neopterygii",
        "nameBn": "নিওপটেরিগি"
      },
      {
        "rank": "order",
        "name": "Syngnathiformes",
        "nameBn": "ঘোড়ামাছ, পাইপমাছ ও রেজরফিশ বর্গ"
      }
    ],
    "shortDescription": {
      "en": "Specialized teleosts characterized by an elongated tubular snout terminating in a tiny toothless mouth, a body encased in protective bony rings or plates, and extraordinary male parental pregnancy.",
      "bn": "বিশেষ গঠনবিশিষ্ট মাছ যাদের মুখ নলের মতো লম্বা ও দাঁতহীন, দেহ শক্ত অস্থিময় আংটির মতো বর্মে ঢাকা এবং প্রাণিজগতের মধ্যে পুরুষ কর্তৃক অনন্য সন্তান গর্ভধারণের স্বভাব রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Snout greatly elongated into a slender tube with a tiny, toothless terminal mouth adapted for rapid elastic suction feeding; body encased in external dermal bony plates or rigid rings; pelvic fins abdominal or completely absent; gills specialized into tufted lophobranch lobules; ribs absent; male brooding: males possess a specialized ventral brood pouch (marsupium) or abdominal brooding patch to fertilize, carry, nourish, and give birth to live offspring.",
      "bn": "নল-সদৃশ দীর্ঘায়িত তুন্ড যার ডগায় দাঁতহীন ক্ষুদ্র মুখ বিদ্যমান; দেহ ত্বকীয় অস্থিময় প্লেট বা শক্ত আংটির বর্মে আবৃত; শ্রোণীপাখনা হ্রাসপ্রাপ্ত বা সম্পূর্ণ অনুপস্থিত; ফুলকা লোফোব্রাঙ্ক ধরনের ক্ষুদ্র ক্ষুদ্র গুচ্ছে পরিণত; পুরুষ কর্তৃক অনন্য গর্ভধারণ: পুরুষের পেটের নিচে বিশেষ ব্রুড পাউচ (মারসুপিয়াম) থাকে যেখানে স্ত্রী মাছ ডিম দেয় এবং পুরুষ মাছ ভ্রূণকে পুষ্টি জুগিয়ে সন্তান প্রসব করে।",
      "keyFeatures": {
        "en": [
          "Tubular elongated snout with elastic rapid recoil suction mechanics",
          "Body enclosed within segmented dermal armor rings instead of typical scales",
          "Male pregnancy where males nurture and give birth to fully formed fry",
          "Tufted lophobranch gill filaments housed within a reduced gill aperture"
        ],
        "bn": [
          "দ্রুত চোষক বল প্রয়োগকারী লম্বা নলাকার মুখ",
          "আঁইশের বদলে শক্ত অস্থিময় বলয়ে ঘেরা দেহ",
          "পুরুষের পেটের থলিতে ডিম লালনপালন ও সন্তান প্রসবের বিরল প্রজনন",
          "ক্ষুদ্র ছিদ্রযুক্ত বিশেষ লোফোব্রাঙ্ক ফুলকা"
        ]
      }
    },
    "habitat": {
      "en": "Coastal seagrass meadows, tropical coral reefs, mangrove roots, macroalgal beds, and shallow sandy coastal margins.",
      "bn": "উপকূলীয় সামুদ্রিক ঘাসের বন, প্রবাল প্রাচীর, সুন্দরবনের ম্যানগ্রোভ শিকড় এবং অগভীর বালুময় সৈকত।",
      "systems": [
        "marine",
        "brackish"
      ]
    },
    "ecosystem": {
      "en": "Cryptic ambush micro-predators camouflaged among seaweeds and corals, consuming minute planktonic crustaceans and maintaining seagrass microfauna balance.",
      "bn": "সামুদ্রিক ঘাস ও প্রবালের ভেতর নিখুঁতভাবে লুকিয়ে থাকা শিকারী; ক্ষুদ্র কোপেপড ও ক্রাস্টাশিয়ান শিকার করে জলজ ঘাসবনের ভারসাম্য রাখে।"
    },
    "feeding": {
      "en": "Precision suction feeding: creating rapid sub-ambient pressure inside the tubular snout to vacuum copepods, amphipods, and mysids in milliseconds.",
      "bn": "চোষক নল দিয়ে শিকার; চোখের পলকে নলের ভেতর তীব্র ভ্যাকুয়াম সৃষ্টি করে পানিতে ভাসমান ক্ষুদ্র জুপ্লাঙ্কটন ও চিংড়ির লার্ভা গিলে নেয়।"
    },
    "reproduction": {
      "en": "Obligate male pregnancy: female deposits ripe unfertilized eggs into the male's vascularized ventral brood pouch; male fertilizes them internally, regulates osmolality, provides nutrients, and undergoes labor to expel live miniature seahorses.",
      "bn": "পুরুষের গর্ভধারণ; স্ত্রী মাছ পুরুষের পেটের থলিতে ডিম স্থানান্তর করে এবং পুরুষ নিজের ভেতরেই ডিম্বাণু নিষিক্ত করে গর্ভধারণের মাধ্যমে পূর্ণাঙ্গ বাচ্চার জন্ম দেয়।"
    },
    "distribution": {
      "en": "Worldwide in tropical, subtropical, and warm-temperate shallow marine waters. Present in the Bay of Bengal, Saint Martin's Island coral beds, and Cox's Bazar coast.",
      "bn": "বিশ্বের সকল উষ্ণ ও ক্রান্তীয় সাগরে বিস্তৃত। সেন্ট মার্টিন দ্বীপের প্রবাল বলয়, সুন্দরবনের মোহনা এবং কক্সবাজার উপকূলে পাওয়া যায়।"
    },
    "importantFamilies": [
      {
        "name": "Syngnathidae",
        "commonEn": "Seahorses and Pipefishes",
        "commonBn": "ঘোড়ামাছ ও পাইপমাছ গোত্র",
        "diagnosticEn": "Body encased in bony rings, tubular snout, toothless mouth, male pregnancy pouch.",
        "diagnosticBn": "অস্থিময় বলয়ে আবৃত দেহ, নলাকার তুন্ড, দাঁতহীন মুখ, পুরুষের পেটে ব্রুড পাউচ।"
      },
      {
        "name": "Fistulariidae",
        "commonEn": "Cornetfishes / Flutemouths",
        "commonBn": "বাঁশিমাছ গোত্র",
        "diagnosticEn": "Extremely elongated depressed body, long tubular snout, caudal filament extending from middle of tail.",
        "diagnosticBn": "চ্যাপ্টা দীর্ঘ দেহ, লম্বা বাঁশির মতো নল-মুখ, লেজের মাঝখান থেকে সুতোর মতো ফিলামেন্ট বের হয়।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Dominant genera: Hippocampus, Syngnathus, Fistularia, and Aeoliscus. Binomials: Hippocampus kuda Bleeker, 1852 and Fistularia commersonii Rüppell, 1838.",
      "bn": "প্রধান গণ: Hippocampus, Syngnathus, Fistularia এবং Aeoliscus। বৈজ্ঞানিক নাম: Hippocampus kuda Bleeker, 1852 এবং Fistularia commersonii Rüppell, 1838।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Spotted Seahorse / Yellow Seahorse (Hippocampus kuda), Bluespotted Cornetfish (Fistularia commersonii), Greater Pipefish (Syngnathus acus), and Razorfish (Aeoliscus strigatus).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: হলুদ ঘোড়ামাছ বা চিত্রা সি-হর্স (Hippocampus kuda), নীলফোঁটা বাঁশিমাছ (Fistularia commersonii), বড় পাইপমাছ (Syngnathus acus) এবং রেজরফিশ (Aeoliscus strigatus)।"
    },
    "additionalInformation": {
      "en": "Hippocampus kuda occurs in Saint Martin's Island seagrass and coral formations. All seahorse species are listed under CITES Appendix II due to international overexploitation for traditional medicine and souvenirs.",
      "bn": "হলুদ ঘোড়ামাছ (Hippocampus kuda) সেন্ট মার্টিন দ্বীপে পাওয়া যায়। ঐতিহ্যবাহী ওষুধ ও স্যুভেনিরের জন্য পাচার হওয়ায় সাইটিস (CITES) চুক্তির অধীনে এরা সংরক্ষিত।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Hamilton et al. (2017)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-scombriformes",
    "taxonId": "taxon-scombriformes",
    "rank": "order",
    "scientificName": "Scombriformes",
    "bengaliName": "ম্যাকেরেল, টুনা ও রূপচাঁদা বর্গ",
    "englishName": "Mackerels, Tunas, Bonitos & Pomfrets",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিপাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Neopterygii",
        "nameBn": "নিওপটেরিগি"
      },
      {
        "rank": "order",
        "name": "Scombriformes",
        "nameBn": "ম্যাকেরেল, টুনা ও রূপচাঁদা বর্গ"
      }
    ],
    "shortDescription": {
      "en": "Fast-swimming pelagic marine teleosts featuring hydrodynamic spindle-shaped or compressed bodies, finlets behind the dorsal and anal fins, slender caudal peduncles with lateral keels, and regional endothermy in advanced tunas.",
      "bn": "উন্মুক্ত সাগরের দ্রুত সাঁতারু টেলিয়স্ট মাছ, যাদের দেহ মসৃণ ও তীরবেগী, পিঠ ও পায়ুর পেছনে ছোট ছোট আলাদা পাখনাংশ (ফিনলেট), লেজের গোড়ায় শক্ত পার্শ্বীয় খাঁজ এবং টুনা মাছে উষ্ণরক্তীয়তা দেখা যায়।"
    },
    "diagnosticCharacteristics": {
      "en": "Streamlined hydrodynamic fusiform or deeply compressed body; second dorsal and anal fins followed by a series of 5 to 10 detached finlets; caudal peduncle slender with one to three stabilizing lateral keels; caudal fin deeply forked or lunate, rigid and non-collapsible; cycloid scales forming a corselet over anterior trunk or tiny and embedded; tunas possess vascular countercurrent heat exchangers (rete mirabile) maintaining elevated red muscle and visceral temperatures.",
      "bn": "তীরবেগী মসৃণ দেহকাঠামো; দ্বিতীয় পৃষ্ঠ ও পায়ুপাখনার পেছনে ৫ থেকে ১০টি মুক্ত ক্ষুদ্র পাখনাংশ (ফিনলেট); লেজের গোড়া সরু ও শক্ত পার্শ্বীয় খাঁজযুক্ত; পুচ্ছপাখনা দৃঢ় ও অর্ধচন্দ্রাকার; ক্ষুদ্র সাইক্লয়েড আঁইশ মাথার পেছনে বর্ম বা কর্সলেট গঠন করে; টুনা মাছে রক্তনালীর বিশেষ জালিকা থাকে যা এদের পেশী ও চোখের তাপমাত্রা পানির চেয়ে উষ্ণ রাখে।",
      "keyFeatures": {
        "en": [
          "Series of 5–10 isolated finlets trailing dorsal and anal fins to reduce hydrodynamic drag",
          "Rigid, high-aspect-ratio lunate caudal fin driven by high-frequency oscillation",
          "Regional endothermy in tunas allowing sustained high-speed pelagic cruising",
          "Slender, non-collapsible caudal peduncle equipped with prominent lateral keels"
        ],
        "bn": [
          "পানির ঘর্ষণ কমাতে পৃষ্ঠ ও পায়ুপাখনার পেছনে ৫-১০টি ক্ষুদ্র মুক্ত ফিনলেট",
          "দ্রুত সাঁতারের জন্য অর্ধচন্দ্রাকার মজবুত পুচ্ছপাখনা",
          "টুনা মাছে উষ্ণরক্তীয়তা যা এদের একটানা দ্রুতগতিতে সাঁতার কাটতে সাহায্য করে",
          "লেজের গোড়ায় স্থিতিশীলতা প্রদানকারী শক্ত পার্শ্বীয় খাঁজ"
        ]
      }
    },
    "habitat": {
      "en": "Pelagic epipelagic open oceans, coastal neritic continental shelves, and deep submarine drop-offs.",
      "bn": "উন্মুক্ত মহাসাগরের উপরিভাগ, উপকূলীয় মহীসোপান এবং গভীর সামুদ্রিক অঞ্চলের প্রান্তভাগ।",
      "systems": [
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Apex and upper-trophic pelagic predators driving oceanic food webs, preying upon immense schools of clupeids, anchovies, and squids across the high seas.",
      "bn": "উন্মুক্ত মহাসাগরের শীর্ষ শিকারী; সাগরে চলাচলকারী কোটি কোটি সার্ডিন, অ্যানচোভি ও স্কুইড খেয়ে সামুদ্রিক খাদ্যশৃঙ্খল সচল রাখে।"
    },
    "feeding": {
      "en": "High-speed continuous pursuit of pelagic schooling teleosts, squids, and flying fishes, or ram-filtering zooplankton through elongated gill rakers in mackerels.",
      "bn": "তীরবেগে তাড়া করে পেলাজিক মাছ, স্কুইড ও উড়ুক্কু মাছ শিকার করে; ম্যাকেরেল মাছ মুখ হা করে প্লাঙ্কটন ছেঁকে খায়।"
    },
    "reproduction": {
      "en": "Pelagic broadcast spawning in warm tropical and subtropical waters; immense fecundity with females releasing millions of buoyant pelagic eggs.",
      "bn": "উন্মুক্ত সমুদ্রে লাখ লাখ ভাসমান ডিম ছাড়ে; উষ্ণ পানির স্রোতে ডিম দ্রুত ফুটে লার্ভায় রূপ নেয়।"
    },
    "distribution": {
      "en": "Circumglobal across tropical, subtropical, and temperate oceans. Massive commercial presence across the Bay of Bengal EEZ and Bangladesh landing centers.",
      "bn": "বিশ্বের সকল উষ্ণ ও ক্রান্তীয় সাগরে বিস্তৃত। বঙ্গোপসাগরে এবং কক্সবাজার ও চট্টগ্রাম মৎস্য অবতরণ কেন্দ্রে এদের বিপুল অর্থনৈতিক উপস্থিতি।"
    },
    "importantFamilies": [
      {
        "name": "Scombridae",
        "commonEn": "Tunas, Mackerels and Bonitos",
        "commonBn": "টুনা ও ম্যাকেরেল গোত্র",
        "diagnosticEn": "Finlets behind dorsal and anal fins, slender peduncle with keels, lunate caudal fin.",
        "diagnosticBn": "পাখনার পেছনে ফিনলেট, খাঁজযুক্ত সরু পুচ্ছদণ্ড, অর্ধচন্দ্রাকার লেজ।"
      },
      {
        "name": "Trichiuridae",
        "commonEn": "Cutlassfishes / Ribbonfishes",
        "commonBn": "ছুঁড়িমাছ বা ফিতা মাছ গোত্র",
        "diagnosticEn": "Extremely elongated ribbon-like body, fang-like teeth, caudal fin reduced to hairlike filament.",
        "diagnosticBn": "চ্যাপ্টা ফিতার মতো চকচকে রূপালী দেহ, ধারালো হিংস্র দাঁত, লেজ সুতোর মতো ছুঁচলো।"
      },
      {
        "name": "Stromateidae",
        "commonEn": "Butterfishes & True Pomfrets",
        "commonBn": "রূপচাঁদা গোত্র",
        "diagnosticEn": "Deep compressed body, continuous dorsal fin, toothed pharyngeal sacs.",
        "diagnosticBn": "চ্যাপ্টা হীরকাকৃতির রূপালী দেহ, কাঁটাবিহীন ডানা, অত্যন্ত সুস্বাদু সামুদ্রিক মাছ।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Dominant genera: Rastrelliger, Thunnus, Scomberomorus, Lepturacanthus, and Pampus. Binomials: Rastrelliger kanagurta (Cuvier, 1816), Thunnus albacares (Bonnaterre, 1788), and Pampus argenteus (Euphrasen, 1788).",
      "bn": "প্রধান গণ: Rastrelliger, Thunnus, Scomberomorus, Lepturacanthus এবং Pampus। বৈজ্ঞানিক নাম: Rastrelliger kanagurta (Cuvier, 1816), Thunnus albacares (Bonnaterre, 1788), এবং Pampus argenteus (Euphrasen, 1788)।"
    },
    "examplesSummary": {
      "en": "Five verified representative examples: Indian Mackerel (Rastrelliger kanagurta), Yellowfin Tuna (Thunnus albacares), Silver Pomfret / Rupchanda (Pampus argenteus), Narrow-barred Spanish Mackerel (Scomberomorus commerson), and Largehead Hairtail (Trichiurus lepturus).",
      "bn": "পাঁচটি যাচাইকৃত প্রামাণ্য উদাহরণ: ভারতীয় ম্যাকেরেল (Rastrelliger kanagurta), হলুদপাখনা টুনা (Thunnus albacares), রূপচাঁদা (Pampus argenteus), সুরমাই মাছ (Scomberomorus commerson) এবং ছুরি মাছ (Trichiurus lepturus)।"
    },
    "additionalInformation": {
      "en": "Silver Pomfret (Pampus argenteus) and Indian Mackerel are top commercial export finfishes in Bangladesh. Yellowfin tuna supports industrial deep-sea longline fishing in the outer Bay of Bengal.",
      "bn": "রূপচাঁদা ও সুরমাই বাংলাদেশের সবচেয়ে সমাদৃত ও মূল্যবান সামুদ্রিক মাছ। গভীর বঙ্গোপসাগরে টুনা মাছ আহরণ জাতীয় সুনীল অর্থনীতির (Blue Economy) অন্যতম প্রধান স্তম্ভ।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Betancur-R. et al. (2017)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-pleuronectiformes",
    "taxonId": "taxon-pleuronectiformes",
    "rank": "order",
    "scientificName": "Pleuronectiformes",
    "bengaliName": "চ্যাপ্টা মাছ বর্গ (ফ্লাউন্ডার ও পাতামাছ)",
    "englishName": "Flatfishes (Flounders, Soles, Tonguesoles & Turbots)",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিপাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Neopterygii",
        "nameBn": "নিওপটেরিগি"
      },
      {
        "rank": "order",
        "name": "Pleuronectiformes",
        "nameBn": "চ্যাপ্টা মাছ বর্গ"
      }
    ],
    "shortDescription": {
      "en": "Asymmetric benthic teleosts in which both eyes migrate to one side of the head during larval metamorphosis, enabling the fish to rest camouflaged on the seabed with its eyeless blind side downward.",
      "bn": "অপ্রতিসম তলদেশীয় মাছ যাদের লার্ভা দশায় দুটি চোখই মাথার যেকোনো একদিকে সরে আসে, ফলে এরা সমুদ্রের তলদেশে একপাশে শুয়ে নিখুঁত ছদ্মবেশে বাস করে।"
    },
    "diagnosticCharacteristics": {
      "en": "Profound bilateral asymmetry in adults: both eyes situated on either the right (dextral) or left (sinistral) side of the head; body strongly compressed laterally; fish rests and swims with the blind unpigmented side facing the substrate; dorsal fin long-based, extending anteriorly onto the head; swim bladder lost in adults; exceptional physiological chromatic camouflage matching substrate texture within seconds.",
      "bn": "প্রাপ্তবয়স্ক অবস্থায় চরম শারীরিক অপ্রতিসাম্য: দুটি চোখই মাথার ডানপাশে (ডেক্সট্রাল) বা বামপাশে (সিনিস্ট্রাল) স্থানান্তরিত হয়; দেহ চরমভাবে চ্যাপ্টা; অন্ধ সাদাটে অংশ তলদেশের দিকে রেখে এরা একপাশে সাঁতার কাটে; পৃষ্ঠপাখনা দীর্ঘ এবং মাথা পর্যন্ত বিস্তৃত; প্রাপ্তবয়স্কদের পটকা সম্পূর্ণ বিলুপ্ত; চোখের পলকে সমুদ্রের তলদেশের রঙের সাথে গায়ের রঙ বদলানোর অনন্য ছদ্মবেশ ক্ষমতা।",
      "keyFeatures": {
        "en": [
          "Cranial ontogenetic asymmetry where one eye migrates over the skull to the opposite side",
          "Habitual resting and swimming on the blind unpigmented side",
          "Long-based dorsal and anal fins flanking the flattened margin",
          "Complete absence of a swim bladder in benthic adults"
        ],
        "bn": [
          "লার্ভা বৃদ্ধির সময় করোটিকা ঘুরে এক চোখ অপরপাশে চলে যাওয়া",
          "অন্ধ সাদা পাশ নিচে রেখে তলদেশে শুয়ে থাকা",
          "দেহের দুই প্রান্ত ঘিরে থাকা দীর্ঘ পৃষ্ঠ ও পায়ুপাখনা",
          "তলদেশীয় প্রাপ্তবয়স্ক মাছে পটকার সম্পূর্ণ অনুপস্থিতি"
        ]
      }
    },
    "habitat": {
      "en": "Benthic sandy, muddy, or silty continental shelves, shallow coastal bays, mangrove estuaries, and deep bathyal ocean trenches down to 2,000 meters.",
      "bn": "বালুকাময় বা কর্দমাক্ত মহীসোপান, উপকূলীয় অগভীর উপসাগর, ম্যানগ্রোভ মোহনা এবং ২,০০০ মিটার পর্যন্ত গভীর তলদেশ।",
      "systems": [
        "marine",
        "brackish",
        "freshwater"
      ]
    },
    "ecosystem": {
      "en": "Key benthic predators and infaunal consumers in coastal estuaries, ambushing crustaceans and demersal teleosts while buried in silt.",
      "bn": "উপকূলীয় ও মোহনাজ বাস্তুতন্ত্রের প্রধান তলদেশীয় শিকারী; বালির নিচে চোখদুটো জাগিয়ে রেখে শিকারের অপেক্ষায় থাকে।"
    },
    "feeding": {
      "en": "Carnivorous: preying upon small teleosts, marine polychaete worms, burrowing crabs, and bivalve molluscs using asymmetric jaws.",
      "bn": "মাংসাশী; কাদার ভেতর লুকিয়ে থাকা ছোট মাছ, পলিকিট কৃমি, কাঁকড়া ও শামুক শিকার করে।"
    },
    "reproduction": {
      "en": "Pelagic broadcast spawning; transparent symmetrical larvae hatch and swim upright like normal fishes before undergoing cranial metamorphic rotation at 1–3 cm length.",
      "bn": "ভাসমান ডিম ছাড়ে; ডিম ফুটে বের হওয়া লার্ভা স্বাভাবিক মাছের মতো সোজা সাঁতার কাটে, কিন্তু ১-৩ সেমি বড় হলে চোখের স্থানান্তরের মাধ্যমে চ্যাপ্টা রূপ ধারণ করে।"
    },
    "distribution": {
      "en": "Worldwide in tropical, temperate, and subpolar marine waters. Abundant throughout the northern Bay of Bengal, Cox's Bazar coast, and Sundarbans channels.",
      "bn": "বিশ্বের সকল মহাসাগরে বিস্তৃত। উত্তর বঙ্গোপসাগর, কক্সবাজার উপকূল এবং সুন্দরবনের খাঁড়িতে অত্যন্ত প্রাচুর্যময়।"
    },
    "importantFamilies": [
      {
        "name": "Pleuronectidae",
        "commonEn": "Righteye Flounders",
        "commonBn": "ডানচোখা ফ্লাউন্ডার গোত্র",
        "diagnosticEn": "Both eyes typically on right side of head, preoperculum margin free, fins without spines; includes Platichthys, Hippoglossus, and Pseudopleuronectes.",
        "diagnosticBn": "উভয় চোখ মাথার ডানপাশে, স্পষ্ট প্রাক-কানকো কিনারা, কাঁটাহীন পাখনা; Platichthys, Hippoglossus।"
      },
      {
        "name": "Bothidae",
        "commonEn": "Lefteye Flounders",
        "commonBn": "বামচোখা ফ্লাউন্ডার গোত্র",
        "diagnosticEn": "Both eyes on left side of head, pelvic fin base on eyed side longer than blind side; includes Bothus and Arnoglossus.",
        "diagnosticBn": "উভয় চোখ মাথার বামপাশে, চোখের পাশের শ্রোণীপাখনা দীর্ঘতর; Bothus এবং Arnoglossus।"
      },
      {
        "name": "Soleidae",
        "commonEn": "True Soles",
        "commonBn": "পাতামাছ গোত্র",
        "diagnosticEn": "Right-eyed (dextral), rounded snout, small eyes, preopercular margin covered by skin; includes Solea and Zebrias.",
        "diagnosticBn": "ডানচোখা, গোলাকার তুন্ড, চামড়ায় ঢাকা প্রাক-কানকো; Solea এবং Zebrias।"
      },
      {
        "name": "Cynoglossidae",
        "commonEn": "Tonguesoles",
        "commonBn": "জিভমাছ বা কুত্তা-জিভ গোত্র",
        "diagnosticEn": "Left-eyed (sinistral), teardrop-shaped body, dorsal and anal fins confluent with pointed caudal fin, hook over mouth; includes Cynoglossus.",
        "diagnosticBn": "বামচোখা, পাতার মতো চ্যাপ্টা দেহ, লেজের সাথে পাখনার একীভূত কিনারা; Cynoglossus (জিভমাছ)।"
      },
      {
        "name": "Paralichthyidae",
        "commonEn": "Large-tooth Flounders",
        "commonBn": "বড়দাঁত ফ্লাউন্ডার গোত্র",
        "diagnosticEn": "Left-eyed, large mouth with sharp canine teeth, caudal fin separate; includes Paralichthys and Pseudorhombus.",
        "diagnosticBn": "বামচোখা, ধারালো দাঁতযুক্ত বড় মুখ, পৃথক পুচ্ছপাখনা; Paralichthys এবং Pseudorhombus।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Dominant genera: Cynoglossus, Pseudorhombus, Solea, and Zebrias. Binomials: Cynoglossus lingua Hamilton, 1822 and Pseudorhombus arsius (Hamilton, 1822).",
      "bn": "প্রধান গণ: Cynoglossus, Pseudorhombus, Solea এবং Zebrias। বৈজ্ঞানিক নাম: Cynoglossus lingua Hamilton, 1822 এবং Pseudorhombus arsius (Hamilton, 1822)।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Long Tongue Sole (Cynoglossus lingua), Largetooth Flounder (Pseudorhombus arsius), Zebra Sole (Zebrias zebra), and Common Sole (Solea solea).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: লম্বা জিভমাছ (Cynoglossus lingua), বড়দাঁত ফ্লাউন্ডার (Pseudorhombus arsius), জেব্রা পাতামাছ (Zebrias zebra) এবং সাধারণ সোল (Solea solea)।"
    },
    "additionalInformation": {
      "en": "Taxonomic status and authoritative evaluation: Order Pleuronectiformes is officially recognized as an accepted Order by FishBase (2026, 16 families), Fishes of the World 5th edition (Nelson et al. 2016, 14 families), WoRMS (AphiaID: 10331), and the Catalogue of Life (2026). Eschmeyer's Catalog of Fishes (CAS, August 2026) and Betancur-R. et al. (2017) alternatively classify flatfishes as Suborder Pleuronectoidei within an expanded Order Carangiformes. BiotaElite 2.0 adopts the prevailing consensus of FishBase and Nelson (2016) retaining Pleuronectiformes as an independent order, while documenting the molecular phylogenomic evidence supporting its relationship to Carangaria.",
      "bn": "শ্রেণীবিন্যাসগত প্রামাণ্য মূল্যায়ন: ফিশবেস (২০২৬), নেলসনের ফিশেস অব দ্য ওয়ার্ল্ড (৫ম সংস্করণ, ২০১৬), ওয়ার্ল্ড রেজিস্টার অব মেরিন স্পিসিজ (WoRMS: AphiaID 10331) এবং ক্যাটালগ অব লাইফ (২০২৬) প্লুরোনেক্টিফর্মিসকে স্বতন্ত্র ও প্রামাণ্য বর্গ হিসেবে স্বীকৃতি প্রদান করেছে। অপরদিকে এশমেয়ার্স ক্যাটালগ অব ফিশেস (CAS, ২০২৬) আণবিক ফাইলোজেনির ভিত্তিতে চ্যাপ্টা মাছগুলোকে কারাঞ্জিফর্মিসের উপ-বর্গ হিসেবে স্থান দিয়েছে। বায়োটাএলিট প্রধান আন্তর্জাতিক ডাটাবেসগুলোর ঐকমত্য অনুসরণ করে একে স্বাধীন বর্গ হিসেবে সংরক্ষণ করেছে।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "FishBase (2026); Nelson et al. (2016) Fishes of the World (5th ed.); WoRMS (2026, AphiaID: 10331); Catalogue of Life (2026)",
    "verificationStatus": "published",
    "publishedStatus": true,
    "notes": "Taxonomic status: Accepted Order in FishBase, Nelson (2016), WoRMS, and CoL. Regarded as Suborder Pleuronectoidei within Carangiformes in Eschmeyer (2026)."
  },
  {
    "id": "order-tetraodontiformes",
    "taxonId": "taxon-tetraodontiformes",
    "rank": "order",
    "scientificName": "Tetraodontiformes",
    "bengaliName": "টেপা, পটকা ও পcupinefish বর্গ",
    "englishName": "Pufferfishes, Filefishes, Boxfishes & Sunfishes",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিপাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Neopterygii",
        "nameBn": "নিওপটেরিগি"
      },
      {
        "rank": "order",
        "name": "Tetraodontiformes",
        "nameBn": "টেপা, পটকা ও পcupinefish বর্গ"
      }
    ],
    "shortDescription": {
      "en": "Highly derived teleosts characterized by beak-like jaws with fused teeth, ability to inflate the body with water or air, skin often armed with spines or carapace, and potent defensive neurotoxins (tetrodotoxin).",
      "bn": "অত্যন্ত রূপান্তরিত মাছ যাদের দাঁত জোড়া লেগে পাখির ঠোঁটের মতো গঠন তৈরি করে, আত্মরক্ষায় পানি বা বাতাস টেনে শরীর বেলুনের মতো ফোলাতে পারে এবং দেহে মারাত্মক বিষ (টেট্রোডোটক্সিন) ধারণ করে।"
    },
    "diagnosticCharacteristics": {
      "en": "Teeth fused into solid beak-like crushing dental plates (4 plates in Tetraodontidae, 2 plates in Diodontidae); body capable of rapid inflation with water or air via specialized diverticulum of the stomach; skin naked and embedded with erectile spinules or encased in a rigid bony carapace (boxfishes); ribs, parietal bones, and pelvic fins reduced or absent; viscera (liver, gonads) frequently laden with lethal tetrodotoxin (TTX).",
      "bn": "দাঁতগুলো একত্রিত হয়ে পাখির ঠোঁটের মতো শক্ত পেষণ প্লেট গঠন করে (টেট্রোডন্টিডিতে ৪টি প্লেট, ডায়োডন্টিডিতে ২টি প্লেট); পাকস্থলীর বিশেষ প্রকোষ্ঠে দ্রুত পানি বা বাতাস টেনে দেহকে বলের মতো ফোলানোর ক্ষমতা; ত্বক আঁইশহীন তবে কাঁটায় পূর্ণ বা শক্ত বাক্সের মতো বর্মে মোড়ানো; শ্রোণীপাখনা ও পাঁজরের অস্থি হ্রাসপ্রাপ্ত বা অনুপস্থিত; যকৃৎ ও ডিম্বাশয়ে মারাত্মক প্রাণঘাতী টেট্রোডোটক্সিন (TTX) বিষের উপস্থিতি।",
      "keyFeatures": {
        "en": [
          "Beak-like dental plates formed by fusion of jaw teeth to crush hard-shelled prey",
          "Dynamic defensive inflation inflating body diameter multiple times to deter predators",
          "Accumulation of lethal neurotoxic tetrodotoxin (TTX) in liver, ovaries, and skin",
          "Absence of true ribs and pelvic fins in most derived families"
        ],
        "bn": [
          "শামুকের শক্ত খোলস ভাঙার জন্য ঠোঁটের মতো জোড়া লাগানো দাঁতের প্লেট",
          "শিকারী প্রাণীকে ভয় দেখাতে শরীর কয়েকগুণ ফুলিয়ে বেলুন বানানোর ক্ষমতা",
          "যকৃৎ, ডিম ও ত্বকে প্রাণঘাতী নিউরোটক্সিক টেট্রোডোটক্সিন বিষের উপস্থিতি",
          "পাঁজরের অস্থি এবং শ্রোণীপাখনার অনুপস্থিতি"
        ]
      }
    },
    "habitat": {
      "en": "Freshwater rivers, floodplains, mangrove creeks, tropical coral reefs, and pelagic open ocean (Molidae).",
      "bn": "মিঠাপানির নদী, হাওর-বিল, ম্যানগ্রোভ খাঁড়ি, প্রবাল প্রাচীর এবং উন্মুক্ত মহাসাগর (মহাসমুদ্রের সূর্যমাছ বা মোলা মোলা)।",
      "systems": [
        "freshwater",
        "marine",
        "brackish"
      ]
    },
    "ecosystem": {
      "en": "Essential benthic durophagous predators controlling populations of snails, crabs, and sea urchins; open ocean sunfishes harvest colossal masses of jellyfish.",
      "bn": "জলজ বাস্তুতন্ত্রের শক্ত খোলসভোজী শিকারী; শামুক, কাঁকড়া ও সামুদ্রিক অর্চিন নিয়ন্ত্রণ করে; মহাসাগরীয় সূর্যমাছ জেলিফিশের সংখ্যা নিয়ন্ত্রণে রাখে।"
    },
    "feeding": {
      "en": "Durophagous carnivores: using powerful parrot-like beaks to crush bivalves, gastropods, hermit crabs, and corals; oceanic sunfishes consume gelatinous scyphozoans and salps.",
      "bn": "শক্ত খোলসভোজী; তোতাপাখির ঠোঁটের মতো মজবুত চোয়াল দিয়ে শক্ত শামুক, ঝিনুক ও কাঁকড়া ভেঙে ভেতরের নরম মাংস খায়।"
    },
    "reproduction": {
      "en": "Oviparous: freshwater puffers construct subtle nests or deposit adhesive eggs on rocks and plants; marine species lay demersal or pelagic eggs; oceanic sunfishes (Mola mola) produce over 300 million eggs, the highest fecundity among all vertebrates.",
      "bn": "ডিম্বপ্রসবকারী; মিঠাপানির টেপা মাছ পাথরে আঠালো ডিম পাড়ে; সামুদ্রিক সূর্যমাছ (Mola mola) একসাথে ৩০ কোটিরও বেশি ডিম ছাড়ে যা মেরুদণ্ডী প্রাণীদের মধ্যে বিশ্বরেকর্ড।"
    },
    "distribution": {
      "en": "Circumglobal across tropical and temperate waters. Abundantly represented in Bangladesh inland freshwaters (Tetraodon cutcutia), coastal mangroves, and the Bay of Bengal.",
      "bn": "বিশ্বের উষ্ণ ও নাতিশীতোষ্ণ অঞ্চলে বিস্তৃত। বাংলাদেশের নদী-নালা, খাল-বিল (টেপা মাছ), সুন্দরবনের মোহনা এবং বঙ্গোপসাগরে প্রচুর প্রজাতি বিদ্যমান।"
    },
    "importantFamilies": [
      {
        "name": "Tetraodontidae",
        "commonEn": "True Pufferfishes",
        "commonBn": "আসল টেপা বা পটকা মাছ গোত্র",
        "diagnosticEn": "Four fused dental plates (two upper, two lower), body inflatable with tiny prickles, tetrodotoxin present.",
        "diagnosticBn": "চারটি যুক্ত দাঁতের প্লেট (উপরে দুটি, নিচে দুটি), শরীর ফোলানো যায়, মারাত্মক টেট্রোডোটক্সিন বিষাক্ত।"
      },
      {
        "name": "Diodontidae",
        "commonEn": "Porcupinefishes",
        "commonBn": "সজারু মাছ বা কাঁটাযুক্ত পটকা গোত্র",
        "diagnosticEn": "Two fused dental plates (one upper, one lower), body covered in large sharp erectile spines.",
        "diagnosticBn": "দুটি অবিচ্ছিন্ন দাঁতের প্লেট, সারা শরীরে দীর্ঘ ও ধারালো সজারুর মতো খাড়া কাঁটা বিদ্যমান।"
      },
      {
        "name": "Molidae",
        "commonEn": "Ocean Sunfishes",
        "commonBn": "মহাসমুদ্রীয় সূর্যমাছ গোত্র",
        "diagnosticEn": "Massive laterally compressed body ending in clavus instead of caudal fin, beaklike jaws.",
        "diagnosticBn": "বিশালাকার চ্যাপ্টা বৃত্তাকার দেহ, পুচ্ছপাখনার বদলে ক্লাভাস প্রান্ত, ঠোঁটযুক্ত চোয়াল।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Dominant genera: Tetraodon, Chelonodontops, Diodon, Lagocephalus, and Mola. Binomials: Tetraodon cutcutia Hamilton, 1822, Chelonodontops patoca (Hamilton, 1822), and Mola mola (Linnaeus, 1758).",
      "bn": "প্রধান গণ: Tetraodon, Chelonodontops, Diodon, Lagocephalus এবং Mola। বৈজ্ঞানিক নাম: Tetraodon cutcutia Hamilton, 1822, Chelonodontops patoca (Hamilton, 1822), এবং Mola mola (Linnaeus, 1758)।"
    },
    "examplesSummary": {
      "en": "Five verified representative examples: Ocellated Pufferfish / Tepa (Tetraodon cutcutia), Gangetic Pufferfish / Patoka Tepa (Chelonodontops patoca), Spot-fin Porcupinefish (Diodon hystrix), Ocean Sunfish (Mola mola), and Silver-cheeked Toadfish (Lagocephalus sceleratus).",
      "bn": "পাঁচটি যাচাইকৃত প্রামাণ্য উদাহরণ: টেপা মাছ (Tetraodon cutcutia), গঙ্গেয় পটকা মাছ (Chelonodontops patoca), সজারু পটকা (Diodon hystrix), মহাসমুদ্রের সূর্যমাছ (Mola mola) এবং রূপালী চিবুক পটকা (Lagocephalus sceleratus)।"
    },
    "additionalInformation": {
      "en": "Tetraodon cutcutia is an iconic native freshwater puffer found throughout Bangladesh floodplains and haors. Ingesting marine puffers (Lagocephalus) causes deadly tetrodotoxin poisoning and remains a major public health warning in coastal Bangladesh.",
      "bn": "টেপা মাছ (Tetraodon cutcutia) বাংলাদেশের অভ্যন্তরীণ হাওর ও বিলের অত্যন্ত পরিচিত মাছ। অসাবধানতাবশত সামুদ্রিক বিষাক্ত পটকা মাছ খেয়ে প্রতি বছর উপকূলীয় অঞ্চলে প্রাণহানি ঘটে।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024",
      "ref-rahman-2005"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Santini et al. (2013)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "phylum-porifera",
    "rank": "phylum",
    "scientificName": "Porifera",
    "bengaliName": "স্পঞ্জ বা পরিফেরা",
    "englishName": "Sponges",
    "parentTaxonId": "taxon-animalia",
    "category": "marine_non_fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Porifera",
        "nameBn": "স্পঞ্জ বা পরিফেরা"
      }
    ],
    "shortDescription": {
      "en": "Basal multicellular marine animals without true tissues or organs. Water is drawn through pores (ostia) and expelled through an osculum via specialized flagellated collar cells (choanocytes).",
      "bn": "প্রকৃত কলা ও অঙ্গবিহীন আদিম বহুকোষী প্রাণী। দেহের অসংখ্য সূক্ষ্ম ছিদ্র (অস্টিয়া) দিয়ে জল প্রবেশ করে এবং ফ্ল্যাজেলাযুক্ত কোয়ানোসাইট কোষ দ্বারা জল ছেঁকে বর্জ্য অস্কুলাম দিয়ে বের করে দেওয়া হয়।"
    },
    "diagnosticCharacteristics": {
      "en": "Asymmetrical or radially symmetrical sessile animals; absence of true germ layers, nerves, or muscles; body wall permeated with incurrent pores (ostia) leading to an internal water canal system and outcurrent oscula; skeleton composed of siliceous or calcareous spicules and/or spongin fibers; feeding accomplished by phagocytosis in flagellated choanocytes.",
      "bn": "অসম বা অরীয় প্রতিসম নিশ্চল প্রাণী; প্রকৃত ভ্রূণীয় স্তর, স্নায়ু বা পেশীর অনুপস্থিতি; অসংখ্য অন্তর্মুখী ছিদ্র (অস্টিয়া) এবং একক বহির্মুখী ছিদ্র (অস্কুলাম); কঙ্কাল সিলিসিয়াস বা চুনযুক্ত স্পিকুল ও স্পঞ্জিন তন্তু দ্বারা গঠিত; কোয়ানোসাইট কোষ দিয়ে খাদ্য গ্রহণ করে।"
    },
    "habitat": {
      "en": "Strictly aquatic, predominantly marine from intertidal rocky shores and coral reefs down to abyssal ocean plains.",
      "bn": "সম্পূর্ণ জলজ, প্রধানত সামুদ্রিক; উপকূলীয় পাথুরে সৈকত, প্রবাল প্রাচীর থেকে শুরু করে গভীর সমুদ্রের তলদেশ পর্যন্ত।",
      "systems": [
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Forms foundational three-dimensional biogenic structure on coral reefs around Saint Martin's Island, filtering millions of liters of seawater daily and hosting diverse micro-invertebrates.",
      "bn": "সেন্ট মার্টিন দ্বীপের প্রবাল বলয়ে ত্রিমাত্রিক কাঠামো তৈরি করে, প্রতিদিন বিপুল পরিমাণ সমুদ্রের জল পরিশোধন করে এবং ক্ষুদ্র অমেরুদণ্ডীদের আশ্রয় দেয়।"
    },
    "feeding": {
      "en": "Suspension filter-feeding on suspended bacteria, microscopic plankton, and fine organic detritus.",
      "bn": "সাসপেনশন ফিল্টার-ফিডার; ব্যাকটেরিয়া, আণুবীক্ষণিক প্ল্যাঙ্কটন এবং জলজ ডেট্রিটাস ছেঁকে গ্রহণ করে।"
    },
    "reproduction": {
      "en": "Asexual reproduction by fragmentation or budding; sexual reproduction with flagellated parenchymella larvae.",
      "bn": "খণ্ডায়ন বা মুকুলোদগমের মাধ্যমে অযৌন এবং ফ্ল্যাজেলাযুক্ত লার্ভার মাধ্যমে যৌন প্রজনন সম্পন্ন করে।"
    },
    "distribution": {
      "en": "Worldwide oceans. In Bangladesh, verified around the rocky boulders and dead coral sub-tidal zones of Saint Martin's Island.",
      "bn": "বিশ্বজুড়ে সকল সমুদ্রে বিস্তৃত। বাংলাদেশে সেন্ট মার্টিন দ্বীপের পাথুরে তলদেশ ও প্রবাল এলাকায় উপস্থিত।"
    },
    "exampleSpeciesIds": [
      "sp-leucosolenia-botryoides",
      "sp-spongia-officinalis",
      "sp-sycon-ciliatum",
      "sp-euplectella-aspergillum",
      "sp-suberites-domuncula",
      "sp-hyalonema-sieboldii"
    ],
    "referenceIds": [
      "ref-worms-2024"
    ],
    "authoritySource": "World Porifera Database / Hooper & van Soest (2002) Systema Porifera",
    "verificationStatus": "published",
    "publishedStatus": true,
    "taxonId": "taxon-porifera",
    "canonicalSlug": "porifera",
    "sections": [
      {
        "key": "classification",
        "titleEn": "1. Classification & Cellular Grade of Organization",
        "titleBn": "১. শ্রেণীবিন্যাস ও কোষীয় মাত্রার শারীরিক গঠন",
        "order": 1,
        "contentEn": "Phylum Porifera (Grant, 1836) represents the most basal extant metazoan animal lineage. Sponges lack true embryological germ layers (endoderm, mesoderm, ectoderm), basal laminas, true tissues, and organs. Body construction is founded upon cellular differentiation and functional division of labor within an organized gelatinous extracellular matrix called the mesohyl.",
        "contentBn": "পর্ব পরিফেরা (Grant, 1836) হলো বিদ্যমান বহুকোষী প্রাণীদের সবচেয়ে আদিম বংশধারা। এদের দেহে কোনো প্রকৃত ভ্রূণীয় স্তর (এক্টোডার্ম, মেসোডার্ম বা এন্ডোডার্ম), প্রকৃত কলা বা অঙ্গ গঠিত হয় না। দেহের সমস্ত কাজ মেসোহাইল নামক জেলির মতো ম্যাট্রিক্সে বিভিন্ন ধরনের বিশেষায়িত কোষের শ্রমবিভাজনের মাধ্যমে পরিচালিত হয়।",
        "references": [
          "ref-world-porifera-2024",
          "ref-ruppert-2004"
        ]
      },
      {
        "key": "cellular_types",
        "titleEn": "2. Cell Types: Pinacocytes, Choanocytes & Archaeocytes",
        "titleBn": "২. কোষের ধরন: পিনাকোসাইট, কোয়ানোসাইট ও আর্কিওসাইট",
        "order": 2,
        "contentEn": "The sponge body contains specialized non-tissue cells: Pinacocytes form the protective external pinacoderm and line excurrent canals; Choanocytes (collar cells) line internal chambers, each possessing a central flagellum surrounded by a microvilli collar that generates water currents and captures micro-food; Porocytes form tubular contractible incurrent ostia; Archaeocytes (amoebocytes) are totipotent migratory amoeboid cells capable of differentiating into sclerocytes, spongocytes, or gametes.",
        "contentBn": "স্পঞ্জের দেহে বিশেষ ধরনের কোষ থাকে: পিনাকোসাইট বহিরাবরণ তৈরি করে; কোয়ানোসাইট হলো ফ্ল্যাজেলাযুক্ত কলার কোষ যা জলের প্রবাহ সৃষ্টি করে খাদ্য কণা ফাঁদে ফেলে; পোরোসাইট ছিদ্রযুক্ত নালী তৈরি করে যার ভেতর দিয়ে জল প্রবেশ করে; আর্কিওসাইট হলো টটিপোটেন্ট অ্যামিবয়েড কোষ যা প্রয়োজনে যে কোনো কোষে রূপান্তরিত হতে পারে।",
        "references": [
          "ref-hickman-2020"
        ]
      },
      {
        "key": "canal_system",
        "titleEn": "3. The Water Canal System (Aquiferous System)",
        "titleBn": "৩. জল সংবহন বা নালী তন্ত্র (অ্যাকুইফেরাস সিস্টেম)",
        "order": 3,
        "contentEn": "The canal system is the physiological hallmark of Porifera, serving respiration, feeding, excretion, and reproduction. Water enters microscopic incurrent dermal pores (ostia), passes through internal canals into flagellated chambers lined by choanocytes, collects in a large central cavity (spongocoel or excurrent canals), and exits through one or more large excurrent apertures called oscula.",
        "contentBn": "নালী তন্ত্র পরিফেরা পর্বের প্রধান শারীরবৃত্তীয় বৈশিষ্ট্য, যা এদের শ্বাসকার্য, খাদ্যগ্রহণ, রেচন এবং প্রজনন পরিচালনা করে। বাইরের জল অসংখ্য সূক্ষ্ম ছিদ্র (অস্টিয়া) দিয়ে দেহে প্রবেশ করে, কোয়ানোসাইটযুক্ত চেম্বারের ভেতর দিয়ে পরিবাহিত হয় এবং কেন্দ্রীয় গহ্বর স্পঞ্জোসিল হয়ে একক বা একাধিক বৃহৎ নির্গমন ছিদ্র অস্কুলাম (Osculum) দিয়ে বাইরে নির্গত হয়।",
        "references": [
          "ref-ruppert-2004"
        ]
      },
      {
        "key": "canal_types",
        "titleEn": "4. Types of Canal Systems: Asconoid, Syconoid & Leuconoid",
        "titleBn": "৪. নালী তন্ত্রের প্রকারভেদ: অ্যাসকনয়েড, সাইকনয়েড ও লিউকনয়েড",
        "order": 4,
        "contentEn": "Three progressive architectural grades exist: 1. Asconoid (simplest, tubular, choanocytes line the spongocoel directly, e.g. Leucosolenia); 2. Syconoid (body wall folded into radial canals lined with choanocytes, spongocoel lined by pinacocytes, e.g. Sycon); 3. Leuconoid (most complex and common, highly branched flagellated chambers embedded within mesohyl, maximizing filtration surface, e.g. Spongia).",
        "contentBn": "গঠনগত জটিলতা অনুসারে নালী তন্ত্র তিন প্রকার: ১. অ্যাসকনয়েড (সবচেয়ে সরল, স্পঞ্জোসিল সরাসরি কোয়ানোসাইট দ্বারা আবৃত থাকে); ২. সাইকনয়েড (দেহপ্রাচীর ভাঁজ হয়ে অরীয় নালী তৈরি করে); ৩. লিউকনয়েড (সবচেয়ে উন্নত ও জটিল, মেসোহাইলের ভেতর অসংখ্য শাখা-প্রশাখাযুক্ত ক্ষুদ্র কোয়ানোসাইট চেম্বার থাকে, যেমন স্পঞ্জিয়া)।",
        "references": [
          "ref-ruppert-2004"
        ]
      },
      {
        "key": "skeleton",
        "titleEn": "5. Skeletal Framework: Spicules & Spongin Fibers",
        "titleBn": "৫. কঙ্কাল কাঠামো: স্পিকুল ও স্পঞ্জিন তন্তু",
        "order": 5,
        "contentEn": "Rigidity and shape are maintained by mineral and organic skeletal elements secreted in the mesohyl. Sclerocytes secrete inorganic spicules of either calcium carbonate (calcite, in class Calcarea) or hydrated silicon dioxide (silica, in Hexactinellida and Demospongiae). In many demosponges, structural support is provided by an organic meshwork of spongin—a tough sulfur-rich collagenous scleroprotein.",
        "contentBn": "মেসোহাইলের ভেতর অবস্থিত কঙ্কাল স্পঞ্জের কাঠামো রক্ষা করে। ক্লেরোসাইট কোষ ক্যালসিয়াম কার্বনেট বা সিলিকার তৈরি সূক্ষ্ম কাঁটা বা স্পিকুল (Spicule) তৈরি করে। অধিকাংশ ডেমোস্পঞ্জে নরম ও স্থিতিস্থাপক প্রোটিন তন্তু স্পঞ্জিন (Spongin) জালকের মতো বিন্যস্ত থাকে যা বাণিজ্যিক স্পঞ্জ হিসেবে ব্যবহৃত হয়।",
        "references": [
          "ref-world-porifera-2024"
        ]
      },
      {
        "key": "feeding_digestion",
        "titleEn": "6. Feeding, Digestion, Respiration & Excretion",
        "titleBn": "৬. পুষ্টি, পাচন, শ্বাসকার্য ও রেচন ক্রিয়া",
        "order": 6,
        "contentEn": "Sponges are non-selective sessile filter feeders. Choanocyte flagellar beats draw thousands of liters of water daily. Bacteria and organic particles under 1 micron are caught on collar microvilli and engulfed by phagocytosis, then transferred to archaeocytes for intracellular digestion. Gas exchange (oxygen uptake and carbon dioxide release) and nitrogenous excretion (predominantly ammonia) occur by simple diffusion across cell surfaces directly into the circulating water stream.",
        "contentBn": "স্পঞ্জ নিশ্চল ফিল্টার-ফিডার। কোয়ানোসাইটের ফ্ল্যাজেলার আন্দোলনের মাধ্যমে প্রতিদিন বিপুল পরিমাণ জল প্রবাহিত হয়। কলারের ফাঁদে আটকানো ব্যাকটেরিয়া ও খাদ্যকণা ফ্যাগোসাইটোসিস প্রক্রিয়ায় কোষে গৃহীত হয় এবং আর্কিওসাইটের মাধ্যমে অন্তঃকোষীয় পাচন সম্পন্ন হয়। গ্যাসীয় বিনিময় ও অ্যামোনিয়া রেচন সরাসরি ব্যাপন প্রক্রিয়ায় সম্পন্ন হয়।",
        "references": [
          "ref-hickman-2020"
        ]
      },
      {
        "key": "reproduction",
        "titleEn": "7. Reproduction, Regeneration & Larval Forms",
        "titleBn": "৭. প্রজনন, পুনরুৎপত্তি ও লার্ভা পর্যায়",
        "order": 7,
        "contentEn": "Asexual reproduction occurs via external budding, fragmentation, or formation of internal drought/cold-resistant gemmules in freshwater sponges. Sexual reproduction is typically monoecious with cross-fertilization: sperm released into water enter other sponges and fertilize eggs in the mesohyl, developing into free-swimming ciliated larvae (parenchymella or amphiblastula). Sponges exhibit extraordinary somatic regeneration—separated cells can re-aggregate and reform complete functional sponges.",
        "contentBn": "অযৌন প্রজনন মুকুলোদগম, খণ্ডায়ন অথবা প্রতিকূলতায় টিকে থাকার জন্য জেমুল তৈরির মাধ্যমে ঘটে। যৌন প্রজননে মুক্ত সাঁতারু সিলিয়াযুক্ত প্যারেনকাইমুলা বা অ্যাম্ফিব্লাস্টুলা লার্ভা তৈরি হয়। এছাড়া এদের অসাধারণ পুনরুৎপত্তি ক্ষমতা রয়েছে—স্পঞ্জের দেহ ভেঙে পৃথক কোষে বিচ্ছিন্ন করলেও তা পুনরায় একত্রিত হয়ে নতুন স্পঞ্জে রূপান্তরিত হতে পারে।",
        "references": [
          "ref-ruppert-2004"
        ]
      },
      {
        "key": "classes_economic",
        "titleEn": "8. Major Classes, Examples & Economic/Ecological Roles",
        "titleBn": "৮. প্রধান শ্রেণীসমূহ, উদাহরণ ও অর্থনৈতিক-বাস্তুতাত্ত্বিক গুরুত্ব",
        "order": 8,
        "contentEn": "Divided into four modern classes: Calcarea (calcareous spicules, e.g. Sycon), Hexactinellida (six-rayed glass sponges, e.g. Euplectella / Venus' flower basket), Demospongiae (siliceous spicules and/or spongin fibers, over 80% of species, e.g. Spongia officinalis, Cliona boring sponges), and Homoscleromorpha. Sponges stabilize coral reefs, filter shelf waters, and produce novel bioactive compounds (antibiotics, antiviral, and antitumor macrolides). In Bangladesh, demosponges inhabit rocky reefs around Saint Martin's Island.",
        "contentBn": "পরিফেরা পর্বের চারটি প্রধান শ্রেণী: ক্যালকেরিয়া (চুনযুক্ত স্পিকুল), হেক্সাক্টিনেলিডা (কাচের মতো ছয়-রশ্মিযুক্ত স্পিকুল, যেমন ইউপ্লেকটেলা), ডেমোস্পঞ্জিয়া (স্পঞ্জিন তন্তু ও সিলিসিয়াস স্পিকুল, যেমন বাণিজ্যিক স্পঞ্জ Spongia officinalis), এবং হোমোস্কেলেরোমর্ফা। স্পঞ্জ সমুদ্রের জল পরিশোধনে ও ওষুধ তৈরিতে অত্যন্ত গুরুত্বপূর্ণ।",
        "references": [
          "ref-world-porifera-2024"
        ]
      }
    ]
  },
  {
    "id": "phylum-cnidaria",
    "rank": "phylum",
    "scientificName": "Cnidaria",
    "bengaliName": "নিডারিয়া (প্রবাল ও জেলিফিশ)",
    "englishName": "Corals, Jellyfish & Sea Anemones",
    "parentTaxonId": "taxon-animalia",
    "category": "marine_non_fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Cnidaria",
        "nameBn": "নিডারিয়া"
      }
    ],
    "shortDescription": {
      "en": "Diploblastic radially symmetrical marine animals possessing specialized stinging cells (cnidocytes with nematocysts) used for prey capture and defense. Encompasses reef-building stony corals, sea anemones, and pelagic medusae.",
      "bn": "দ্বিস্তরী অরীয় প্রতিসম সামুদ্রিক প্রাণী যাদের শিকার ধরা ও আত্মরক্ষার জন্য বিশেষ দংশক কোষ (নেমাটোসিস্টযুক্ত নিডোসাইট) থাকে। প্রবাল, সি অ্যানিমোন ও জেলিফিশ এর অন্তর্ভুক্ত।"
    },
    "diagnosticCharacteristics": {
      "en": "Diploblastic body plan (outer ectoderm and inner endoderm separated by gelatinous mesoglea); primary radial symmetry; blind digestive gastrovascular cavity (coelenteron) with a single opening acting as mouth and anus; presence of cnidocytes bearing stinging nematocysts; polymorphic life cycles alternating between sessile polyp and swimming medusa stages in many taxa.",
      "bn": "দ্বিস্তরী দেহ কাঠামো (এক্টোডার্ম ও এন্ডোডার্মের মাঝে মেসোগ্লিয়া); অরীয় প্রতিসমতা; একটিমাত্র ছিদ্রযুক্ত গ্যাস্ট্রোভাস্কুলার গহ্বর যা মুখ ও পায়ু উভয় হিসেবে কাজ করে; নিডোসাইট এবং নেমাটোসিস্টের উপস্থিতি; নিশ্চল পলিপ ও মুক্ত সাঁতারু মেডুসা পর্যায়ের পর্যায়ক্রম।"
    },
    "habitat": {
      "en": "Coastal coral reefs, rocky subtidal shoals, pelagic open seas, and estuarine waters.",
      "bn": "উপকূলীয় প্রবাল প্রাচীর, পাথুরে তলদেশ, উন্মুক্ত সমুদ্র এবং মোহনাজ জলসীমা।",
      "systems": [
        "marine",
        "brackish"
      ]
    },
    "ecosystem": {
      "en": "Scleractinian corals construct the sole natural biogenic coral reef ecosystem of Bangladesh at Saint Martin's Island, providing critical microhabitats for hundreds of marine fish and invertebrate taxa.",
      "bn": "সেন্ট মার্টিন দ্বীপে বাংলাদেশের একমাত্র প্রবাল বাস্তুতন্ত্র গঠন করে, যা শত শত মাছ ও অমেরুদণ্ডী প্রাণীর বংশবৃদ্ধি ও খাদ্যের মূল আশ্রয়স্থল।"
    },
    "feeding": {
      "en": "Carnivorous predation using stinging tentacles to immobilize zooplankton, larval fishes, and invertebrates; hermatypic reef corals derive over 80% of nutrition via endosymbiotic photosynthetic zooxanthellae dinoflagellates.",
      "bn": "মাংসাশী শিকারী; শুঁড় দিয়ে শিকার অবশ করে খায়। প্রাচীর গঠনকারী প্রবাল তাদের কোষে থাকা মিথোজীবী জুক্সান্থেলি শৈবালের সালোকসংশ্লেষণ থেকে অধিকাংশ শক্তি পায়।"
    },
    "reproduction": {
      "en": "Synchronous mass broadcast spawning of gametes into ocean currents; also rapid asexual vegetative colony expansion via budding.",
      "bn": "সমুদ্রে একযোগে বিপুল পরিমাণ ডিম্বাণু ও শুক্রাণু নিঃসরণের মাধ্যমে যৌন এবং মুকুলোদগমের মাধ্যমে অযৌন প্রজনন।"
    },
    "distribution": {
      "en": "Cosmopolitan marine waters. In Bangladesh, concentrated at Saint Martin's Island reef platforms and coastal Bay of Bengal.",
      "bn": "বিশ্বব্যাপী সামুদ্রিক জলসীমা। বাংলাদেশে সেন্ট মার্টিন দ্বীপ এবং সংলগ্ন বঙ্গোপসাগরে বিদ্যমান।"
    },
    "exampleSpeciesIds": [
      "sp-hydra-vulgaris",
      "sp-diploria-labyrinthiformis",
      "sp-aurelia-aurita",
      "sp-acropora-cervicornis",
      "sp-physalia-physalis",
      "sp-chironex-fleckeri",
      "sp-actinia-equina",
      "sp-chrysaora-hysoscella",
      "sp-obelia-geniculata"
    ],
    "referenceIds": [
      "ref-worms-2024"
    ],
    "authoritySource": "World Register of Marine Species (WoRMS) / Daly et al. (2007)",
    "verificationStatus": "published",
    "publishedStatus": true,
    "taxonId": "taxon-cnidaria",
    "canonicalSlug": "cnidaria",
    "sections": [
      {
        "key": "classification",
        "titleEn": "1. Classification & Diploblastic Tissue-Grade Organization",
        "titleBn": "১. শ্রেণীবিন্যাস ও দ্বিস্তরী কলা-মাত্রার সংগঠন",
        "order": 1,
        "contentEn": "Phylum Cnidaria (Hatschek, 1888) comprises radially or biradially symmetrical metazoans exhibiting true tissue-grade construction. Cnidarians are primary diploblasts: the body wall develops from two embryological germ layers—outer ectoderm (forming epidermis) and inner endoderm (forming gastrodermis)—separated by an extracellular jelly matrix termed mesoglea.",
        "contentBn": "পর্ব নিডারিয়া (Hatschek, 1888) হলো অরীয় বা দ্বি-অরীয় প্রতিসম প্রাণী যা কলা-মাত্রার শারীরিক সংগঠন প্রদর্শন করে। এরা প্রকৃত দ্বিস্তরী (Diploblastic) প্রাণী: দেহপ্রাচীর দুটি ভ্রূণীয় স্তর—বাইরের একটোডার্ম (এপিডার্মিস) এবং ভেতরের এন্ডোডার্ম (গ্যাস্ট্রোডার্মিস) নিয়ে গঠিত, যাদের মাঝে জেলির মতো মেসোগ্লিয়া স্তর থাকে।",
        "references": [
          "ref-ruppert-2004",
          "ref-hickman-2020"
        ]
      },
      {
        "key": "cnidocytes",
        "titleEn": "2. The Cnidocyte & Nematocyst Stinging Apparatus",
        "titleBn": "২. নিডোসাইট ও নেমাটোসিস্ট দংশন কাঠামো",
        "order": 2,
        "contentEn": "The defining synapomorphy of Cnidaria is the cnidocyte—a specialized stinging cell housing an explosive organelle called the nematocyst. When sensory triggers (cnidocil) are mechanically or chemically stimulated, hydrostatic pressure exceeding 150 atmospheres causes rapid eversion of a coiled tubule in microseconds. Penetrant nematocysts inject neurotoxins and proteolytic enzymes into prey, while volvent types entangle setae and glutinant types secrete adhesive mucus.",
        "contentBn": "নিডারিয়া পর্বের অন্যতম প্রধান বৈশিষ্ট্য হলো নিডোসাইট কোষ যার ভেতরে পেঁচানো নালীযুক্ত নেমাটোসিস্ট থলি থাকে। এর সংবেদী রোম নিডোসিল স্পর্শ করলে মাত্র কয়েক মাইক্রোসেকেন্ডে উচ্চ চাপে নালীটি উল্টে গিয়ে শিকারের দেহে প্রবেশ করে এবং নিউরোটক্সিন বিষাক্ত হিপনোটক্সিন প্রবেশ করিয়ে অবশ করে দেয়।",
        "references": [
          "ref-ruppert-2004"
        ]
      },
      {
        "key": "dimorphism",
        "titleEn": "3. Dimorphism: Polyp and Medusa Body Plans",
        "titleBn": "৩. দ্বিরূপতা: পলিপ ও মেডুসা শারীরিক রূপ",
        "order": 3,
        "contentEn": "Cnidarians exhibit two structural archetypes: 1. Polyp: sessile, tubular, attached to substrate by a basal aboral disc, with mouth and tentacles oriented upward (specialized for feeding and asexual budding); 2. Medusa: motile, umbrella- or bell-shaped, pelagic, with mouth and tentacles directed downward on a central manubrium, enriched with thick buoyant mesoglea (specialized for active swimming and sexual reproduction).",
        "contentBn": "নিডারিয়ানদের দেহে দুটি মৌলিক রূপ দেখা যায়: ১. পলিপ: নলাকার ও নিশ্চল রূপ যা নিম্নপ্রান্ত দিয়ে কোনো অবলম্বনে আটকে থাকে এবং এর মুখ ও কর্ষিকা ওপরের দিকে থাকে (খাদ্যগ্রহণ ও অযৌন প্রজননের জন্য বিশেষায়িত); ২. মেডুসা: ছাতার মতো ঘণ্টা আকৃতির মুক্ত সাঁতারু রূপ যার মুখ ও কর্ষিকা নিচের দিকে ঝুলে থাকে (যৌন প্রজনন ও বিস্তারের জন্য বিশেষায়িত)।",
        "references": [
          "ref-hickman-2020"
        ]
      },
      {
        "key": "digestion_nervous",
        "titleEn": "4. Gastrovascular Cavity, Digestion & Diffuse Nerve Net",
        "titleBn": "৪. গ্যাস্ট্রোভাস্কুলার গহ্বর, পাচন ও বিস্তৃত স্নায়ুজালক",
        "order": 4,
        "contentEn": "The internal space is a single opening gastrovascular cavity (coelenteron) functioning in both extracellular digestion and internal fluid circulation. Gland cells secrete enzymes to break down prey extracellularly, followed by phagocytosis into gastrodermal nutritive-muscular cells for intracellular digestion. The nervous system lacks a centralized brain, consisting instead of a decentralized subepithelial nerve net of non-polarized protoneurons with bidirectional synaptic transmission.",
        "contentBn": "এদের একমাত্র অভ্যন্তরীণ গহ্বরটি হলো সিলেন্টেরন বা গ্যাস্ট্রোভাস্কুলার ক্যাভিটি যা একাধারে পরিপাক ও পরিবহনের কাজ করে। বহিঃকোষীয় ও অন্তঃকোষীয় উভয় প্রকার পরিপাক ঘটে। নিডারিয়াদের কোনো মস্তিষ্ক নেই; বরং সারা দেহে বিস্তৃত দ্বিমুখী প্রোটোনিউরন স্নায়ুজালক (Nerve Net) পরিবেশের সংবেদন গ্রহণ ও পেশি সংকোচন নিয়ন্ত্রণ করে।",
        "references": [
          "ref-ruppert-2004"
        ]
      },
      {
        "key": "metagenesis",
        "titleEn": "5. Metagenesis (Alternation of Generations) & Life Cycle",
        "titleBn": "৫. মেটাজেনেসিস (জনুক্রম) ও জীবন চক্র",
        "order": 5,
        "contentEn": "Many hydrozoans and scyphozoans exhibit metagenesis—the regular alternation between a benthic asexual polyp phase and a pelagic sexual medusa phase. Medusae release gametes into seawater, where fertilization yields a ciliated free-swimming planula larva. The planula settles on the substrate, transforms into a polyp (scyphistoma), and subsequently undergoes transverse budding (strobilation) to produce juvenile medusae (ephyrae).",
        "contentBn": "অধিকাংশ নিডারিয়ানে মেটাজেনেসিস বা জনুক্রম দেখা যায়, যেখানে অযৌন পলিপ দশা এবং যৌন মেডুসা দশা পর্যায়ক্রমে চক্রাকারে আবর্তিত হয়। মেডুসার যৌন মিলনে সৃষ্ট সিলিয়াযুক্ত প্লানুলা লার্ভা তলে গিয়ে পলিপে রূপ নেয় এবং স্ট্রোবাইলেশন প্রক্রিয়ার মাধ্যমে খণ্ডিত হয়ে তরুণ জেলিফিশ বা ইফাইরা (Ephyra) তৈরি করে।",
        "references": [
          "ref-hickman-2020"
        ]
      },
      {
        "key": "classes_reef",
        "titleEn": "6. Major Classes, Coral Reef Ecology & Representative Taxa",
        "titleBn": "৬. প্রধান শ্রেণীসমূহ, প্রবাল প্রাচীর বাস্তুতন্ত্র ও প্রতিনিধি ট্যাক্সন",
        "order": 6,
        "contentEn": "Four principal classes: Hydrozoa (Hydra, Obelia, Physalia Portuguese man-of-war); Scyphozoa (true jellies with dominant medusae, e.g. Aurelia aurita); Cubozoa (box jellyfish with lethal venomous nematocysts); Anthozoa (corals and sea anemones lacking medusa stage completely, e.g. stony Scleractinia). Scleractinian corals secrete calcium carbonate exocones in symbiosis with photosynthetic zooxanthellae dinoflagellates, forming biogenic coral reefs that host over 25% of all marine biodiversity. In Bangladesh, Saint Martin's Island harbors vulnerable hermatypic coral reefs.",
        "contentBn": "চারটি প্রধান শ্রেণী: হাইড্রোজোয়া (হাইড্রা, ওবেলিয়া), সাইফোজোয়া (প্রকৃত জেলিফিশ যেমন অরেলিয়া অরিটা), কিউবোজোয়া (বাক্স জেলিফিশ), এবং অ্যান্থোজোয়া (প্রবাল ও সাগর কুসুম যাদের কোনো মেডুসা দশা নেই)। প্রবাল প্রাচীর সাগরের ২৫ শতাংশের বেশি প্রজাতির আশ্রয়স্থল। বাংলাদেশের সেন্ট মার্টিন দ্বীপে প্রবাল প্রাচীর বিদ্যমান।",
        "references": [
          "ref-worms-2024"
        ]
      }
    ]
  },
  {
    "id": "phylum-mollusca",
    "rank": "phylum",
    "scientificName": "Mollusca",
    "bengaliName": "কম্বোজ প্রাণী (মোলাস্কা)",
    "englishName": "Molluscs (Snails, Clams, Squids)",
    "parentTaxonId": "taxon-animalia",
    "category": "marine_non_fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Mollusca",
        "nameBn": "কম্বোজ প্রাণী"
      }
    ],
    "shortDescription": {
      "en": "Soft-bodied coelomate animals typically covered by a calcium carbonate shell secreted by a mantle, possessing a muscular foot and a chitinous raspy tongue (radula). Includes gastropods, bivalves, and cephalopods.",
      "bn": "নরম দেহবিশিষ্ট প্রাণী যা সাধারণত ম্যান্টল নিঃসৃত ক্যালসিয়াম কার্বনেট খোলস দ্বারা আবৃত থাকে এবং এদের মাংসল পদ ও র্যা ডুলা থাকে। শামুক, ঝিনুক, অক্টোপাস ও স্কুইড এর অন্তর্ভুক্ত।"
    },
    "diagnosticCharacteristics": {
      "en": "Unsegmented bilateral body divided into muscular foot, visceral mass, and mantle; mantle cavity houses gills (ctenidia) or lungs; calcareous shell present (external, internal, or secondarily reduced); chitinous feeding radula present (except in filter-feeding Bivalvia); open circulatory system with hemocyanin (closed in Cephalopoda); trochophore and veliger larval stages.",
      "bn": "অখণ্ডিত দ্বিপার্শ্বীয় প্রতিসম দেহ (মাংসল পদ, আন্তরযন্ত্রীয় স্তূপ ও ম্যান্টলে বিভক্ত); ম্যান্টল গহ্বরে ফুলকা (টিনিডিয়া) থাকে; ক্যালসিয়ামযুক্ত খোলস; খাবার চূর্ণকারী র্যা ডুলা উপস্থিত (ঝিনুকে অনুপস্থিত); ট্রোকোফোর ও ভেলিগার লার্ভা দশা।"
    },
    "habitat": {
      "en": "Marine coastal shores, mangrove mudflats, sandy intertidal beaches, coral platforms, and deep marine canyons.",
      "bn": "সামুদ্রিক উপকূল, ম্যানগ্রোভ কাদাভূমি, বালুকাময় সৈকত, প্রবাল প্ল্যাটফর্ম এবং গভীর সমুদ্র।",
      "systems": [
        "marine",
        "brackish"
      ]
    },
    "ecosystem": {
      "en": "Extremely abundant benthic ecosystem engineers across the Sundarbans mangrove mudbanks and Cox's Bazar/Teknaf littoral flats, cycling calcium and filtering organic coastal runoff.",
      "bn": "সুন্দরবন ও কক্সবাজারের উপকূলীয় কাদাভূমির অন্যতম প্রধান প্রাণী যা ক্যালসিয়াম চক্র এবং উপকূলীয় পানি পরিশোধনে গুরুত্বপূর্ণ ভূমিকা পালন করে।"
    },
    "feeding": {
      "en": "Trophically diverse: suspension filter-feeders (Bivalvia: oysters, clams), micro-algal scrapers (Gastropoda: limpets, conches), and apex intelligence-driven active carnivores (Cephalopoda: squids, octopuses).",
      "bn": "বিচিত্র খাদ্যাভ্যাস: ফিল্টার-ফিডার (ঝিনুক), শৈবাল ভক্ষক (শামুক) এবং দক্ষ শিকারী মাংসাশী (অক্টোপাস, স্কুইড)।"
    },
    "reproduction": {
      "en": "Dioecious or hermaphroditic; external fertilization in bivalves yielding planktonic veliger larvae; complex copulatory courtship and internal fertilization with hectocotylus in cephalopods.",
      "bn": "একবাসী বা উভলিঙ্গ; ঝিনুকে বাহ্যিক নিষেক এবং সেফালোপডে হেক্টোকোটাইলাস বাহুর মাধ্যমে সরাসরি অভ্যন্তরীণ নিষেক।"
    },
    "distribution": {
      "en": "Global oceans and littoral regions. Over 300 marine molluscan species recorded from Bangladesh territorial waters.",
      "bn": "বিশ্বজুড়ে বিস্তৃত। বাংলাদেশের সামুদ্রিক জলসীমায় ৩০০টিরও বেশি প্রজাতি নথিবদ্ধ।"
    },
    "exampleSpeciesIds": [
      "sp-sepia-officinalis",
      "sp-loligo-vulgaris",
      "sp-pecten-maximus",
      "sp-limax-maximus",
      "sp-octopus-vulgaris",
      "sp-helix-pomatia",
      "sp-tridacna-gigas",
      "sp-tonicella-lineata",
      "sp-nautilus-pompilius",
      "sp-mytilus-edulis",
      "sp-crassostrea-gigas",
      "sp-conus-geographus"
    ],
    "referenceIds": [
      "ref-worms-2024"
    ],
    "authoritySource": "MolluscaBase / WoRMS (2024)",
    "verificationStatus": "published",
    "publishedStatus": true,
    "taxonId": "taxon-mollusca",
    "canonicalSlug": "mollusca",
    "sections": [
      {
        "key": "classification",
        "titleEn": "1. Classification & The Fundamental Molluscan Body Plan",
        "titleBn": "১. শ্রেণীবিন্যাস ও মলাস্কার মৌলিক শারীরিক পরিকল্পনা",
        "order": 1,
        "contentEn": "Phylum Mollusca (Linnaeus, 1758) is the second-largest animal phylum on Earth, comprising soft-bodied, unsegmented, coelomate lophotrochozoans. The generalized body is triploblastic and bilaterally symmetrical, partitioned into three functional regions: 1. Muscular head-foot (sensory and locomotory functions); 2. Visceral mass (housing digestive, circulatory, excretory, and reproductive organs); 3. Mantle (pallium)—a specialized dorsal epithelial fold that encloses the mantle cavity and secretes the shell.",
        "contentBn": "পর্ব মলাস্কা (Linnaeus, 1758) হলো প্রাণিজগতের দ্বিতীয় বৃহত্তম পর্ব। এরা নরমদেহী, অখণ্ডায়িত এবং সিলোমেট প্রাণী। দেহ তিনটি প্রধান অংশে বিভক্ত: ১. পেশিবহুল মস্তক-পদ (চলন ও সংবেদী অঙ্গ); ২. ভিসেরাল মাস বা আন্তরযন্ত্রীয় স্তূপ (পরিপাক, সংবহন ও জনন অঙ্গ ধারণকারী অংশ); ৩. ম্যান্টল—একটি মাংসল পর্দা যা ভিসেরাল অঙ্গ ঢেকে রাখে এবং শক্ত খোলক ক্ষরণ করে।",
        "references": [
          "ref-ruppert-2004",
          "ref-hickman-2020"
        ]
      },
      {
        "key": "mantle_shell",
        "titleEn": "2. The Mantle & Shell Architecture",
        "titleBn": "২. ম্যান্টল ও খোলকের গঠন কৌশল",
        "order": 2,
        "contentEn": "The mantle cavity is a critical functional space containing the gills (ctenidia), anus, osphradia, and nephridiopores. The protective calcareous shell is secreted in three layers by mantle marginal cells: outer organic conchiolin periostracum (protecting against acidic dissolution), middle prismatic layer of calcium carbonate (calcite or aragonite crystals), and inner lustrous nacreous layer ('mother of pearl') composed of alternating thin aragonite platelets.",
        "contentBn": "ম্যান্টল পর্দা খোলক নিঃসরণ করে যা তিনটি স্তরে গঠিত: ১. বহিস্থ পেরিওস্ট্রাকাম (কঙ্কিওলিন প্রোটিনের পাতলা স্তর যা অ্যাসিড থেকে রক্ষা করে); ২. মধ্যবর্তী প্রিজম্যাটিক স্তর (ক্যালসিয়াম কার্বনেট স্ফটিক); ৩. অভ্যন্তরীণ নেকার বা মুক্তা স্তর (চকচকে ক্যালসিয়াম কার্বনেট স্তর যা মুক্তা সৃষ্টিতে সাহায্য করে)।",
        "references": [
          "ref-hickman-2020"
        ]
      },
      {
        "key": "radula",
        "titleEn": "3. The Radula & Feeding Diversity",
        "titleBn": "৩. র্যাডুলা ও বহুমুখী খাদ্যাভ্যাস",
        "order": 3,
        "contentEn": "Except for bivalves, virtually all molluscs possess a radula—a chitinous ribbon studded with transverse rows of backward-curving teeth supported by cartilaginous odontophore cushions. Driven by complex protractor and retractor muscles, it acts as a rasp to scrape algae from rocks, bore holes into prey shells, or inject venom via hollow dart-like radular teeth in cone snails (Conus). Bivalves have lost the radula, converting to ciliated filter feeding.",
        "contentBn": "ঝিনুক ব্যতীত সমস্ত মলাস্কায় র্যাডুলা নামক একটি বিশেষায়িত কাইটিনযুক্ত করাতের মতো দাঁতযুক্ত জিহ্বা থাকে। র্যাডুলার সাহায্যে শামুক শৈবাল চাঁচতে পারে, শিকারের খোলক ফুটো করতে পারে কিংবা বিষাক্ত বাণ নিক্ষেপ করতে পারে। ঝিনুক ফিল্টার ফিডার হওয়ায় তাদের র্যাডুলা বিলুপ্ত হয়েছে।",
        "references": [
          "ref-ruppert-2004"
        ]
      },
      {
        "key": "respiration_circulation",
        "titleEn": "4. Respiration, Circulation & Excretion (Organs of Bojanus)",
        "titleBn": "৪. শ্বাসকার্য, রক্ত সংবহন ও বোজানাসের অঙ্গ",
        "order": 4,
        "contentEn": "Aquatic molluscs respire via bipectinate feather-like gills (ctenidia) situated in the mantle cavity; terrestrial pulmonate snails use a highly vascularized mantle roof as a lung. Circulation is open in most taxa, where hemolymph with copper-based hemocyanin enters hemocoelic sinus spaces. Cephalopods (octopuses, squids) evolved a high-pressure closed circulatory system powered by one systemic and two branchial hearts. Excretion is carried out by paired metanephridia (organs of Bojanus) filtering coelomic pericardial fluid.",
        "contentBn": "জলজ মলাস্কা ম্যান্টল গহ্বরে পালকের মতো টেনিডিয়া বা ফুলকার সাহায্যে শ্বাস নেয়; স্থলচর শামুকে ম্যান্টল ফুসফুসের মতো কাজ করে। সংবহন উন্মুক্ত প্রকৃতির এবং রক্তে তামাঘটিত নীল হিমোসায়ানিন রঞ্জক থাকে; তবে অক্টোপাস ও স্কুইডে রক্তনালীযুক্ত সম্পূর্ণ রুদ্ধ সংবহন ব্যবস্থা ও অতিরিক্ত ফুলকা হৃদপিণ্ড থাকে। রেচনের জন্য বৃক্কসদৃশ বোজানাসের অঙ্গ (Organs of Bojanus) কাজ করে।",
        "references": [
          "ref-kardong-2018"
        ]
      },
      {
        "key": "nervous_cephalopod",
        "titleEn": "5. Nervous System & Cephalopod Encephalization",
        "titleBn": "৫. স্নায়ুতন্ত্র ও সেফালোপডের মস্তিষ্ক বিকাশ",
        "order": 5,
        "contentEn": "Bivalves and gastropods possess basic paired ganglia (cerebral, pedal, pleural, visceral) linked by nerve cords. Cephalopods have undergone extreme cephalization: fused ganglia form a complex lobed brain protected by a cartilaginous cranium, capable of advanced memory, operant conditioning, and problem-solving. Cephalopod camera-type eyes possess a cornea, lens, iris, and retina, representing a textbook triumph of convergent evolution with vertebrate eyes.",
        "contentBn": "শামুক ও ঝিনুকে কয়েকটি গ্যাংগ্লিয়া থাকলেও সেফালোপড (যেমন অক্টোপাস)-এ অসাধারণ বুদ্ধিমত্তা ও জটিল মস্তিষ্ক বিকশিত হয়েছে। এদের চোখ মেরুদণ্ডী প্রাণীদের চোখের মতোই উন্নত লেন্স, কর্নিয়া ও রেটিনা ধারণ করে, যা কনভারজেন্ট বিবর্তনের অন্যতম সেরা উদাহরণ।",
        "references": [
          "ref-ruppert-2004"
        ]
      },
      {
        "key": "classes_economic",
        "titleEn": "6. Major Classes, Examples & Commercial/Ecological Roles",
        "titleBn": "৬. প্রধান শ্রেণীসমূহ, উদাহরণ ও অর্থনৈতিক-বাস্তুতাত্ত্বিক গুরুত্ব",
        "order": 6,
        "contentEn": "Seven extant classes: 1. Gastropoda (snails, slugs, nudibranchs); 2. Bivalvia (clams, oysters, mussels); 3. Cephalopoda (octopuses, squids, nautiluses, cuttlefish); 4. Polyplacophora (chitons with 8 shell plates); 5. Scaphopoda (tusk shells); 6. Monoplacophora; 7. Aplacophora. Molluscs support multi-billion dollar global shellfish aquaculture, produce natural pearls, and clean coastal waters. In Bangladesh, green mussels, oysters, and mud snails inhabit the Sundarbans mangroves and Bay of Bengal.",
        "contentBn": "প্রধান শ্রেণীসমূহ: গ্যাস্ট্রোপোডা (শামুক), বাইভালভিয়া (ঝিনুক), সেফালোপোডা (অক্টোপাস, স্কুইড), এবং পলিপ্ল্যাকোফোরা (কাইটোন)। মলাস্কা সামুদ্রিক বাস্তুতন্ত্রের ফিল্টার হিসেবে কাজ করে এবং মুক্তা ও খাদ্য হিসেবে বিশ্ব অর্থনীতিতে বিলিয়ন ডলার অবদান রাখে। বাংলাদেশের সুন্দরবন ও বঙ্গোপসাগরে ঝিনুক ও অক্টোপাস প্রচুর পরিমাণে পাওয়া যায়।",
        "references": [
          "ref-worms-2024"
        ]
      }
    ]
  },
  {
    "id": "phylum-arthropoda-marine",
    "rank": "phylum",
    "scientificName": "Arthropoda",
    "bengaliName": "সন্ধিপদী সামুদ্রিক প্রাণী (ক্রাস্টাশিয়া)",
    "englishName": "Marine Arthropods (Crabs, Shrimps, Horseshoe Crabs)",
    "parentTaxonId": "taxon-animalia",
    "category": "marine_non_fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Arthropoda",
        "nameBn": "সন্ধিপদী প্রাণী"
      }
    ],
    "shortDescription": {
      "en": "Bilateral segmented animals encased in a jointed chitinous exoskeleton strengthened with calcium carbonate, bearing paired jointed appendages. Dominated in the sea by crustaceans and ancient horseshoe crabs.",
      "bn": "ক্যালসিয়াম কার্বনেট ও কাইটিনযুক্ত শক্ত বহিঃকঙ্কাল এবং সন্ধিযুক্ত উপাঙ্গধারী প্রাণী। সমুদ্রে এদের মধ্যে কাঁকড়া, চিংড়ি এবং প্রাচীন রাজকাঁকড়া প্রধান।"
    },
    "diagnosticCharacteristics": {
      "en": "Segmented body organized into tagmata (cephalothorax and abdomen); chitinous exoskeleton shed periodically through ecdysis (molting); paired, jointed, primitively biramous appendages; compound eyes on mobile stalks; gills for aquatic respiration enclosed within branchial chambers; hemocyanin-based open circulatory system.",
      "bn": "খণ্ডিত দেহ (শিরোবক্ষ ও উদরে বিভক্ত); কাইটিনযুক্ত শক্ত কঙ্কাল যা নির্মোচনের (মোল্টিং) মাধ্যমে পরিবর্তিত হয়; সন্ধিযুক্ত উপাঙ্গ; বোঁটায় অবস্থিত পুঞ্জাক্ষি; ফুলকা দ্বারা জলজ শ্বসন সম্পন্ন করে।"
    },
    "habitat": {
      "en": "Intertidal mangrove swamps, sandy beaches, muddy benthic shelves, coral crevices, and oceanic pelagic zones.",
      "bn": "ম্যানগ্রোভ উপকূল, বালুময় সৈকত, কর্দমাক্ত তলদেশ, প্রবাল প্রাচীরের ফাঁক এবং উন্মুক্ত সমুদ্র।",
      "systems": [
        "marine",
        "brackish"
      ]
    },
    "ecosystem": {
      "en": "Crucial keystone detritivores and prey species in the Sundarbans mangrove web (mud crabs, fiddler crabs, penaeid shrimps) and shallow sandy spawning beaches for ancient horseshoe crabs (Carcinoscorpius rotundicauda, Tachypleus gigas).",
      "bn": "সুন্দরবনের বাস্তুতন্ত্রের অন্যতম মূল ভিত্তি (কাদা কাঁকড়া, বাগদা চিংড়ি) এবং উপকূলীয় সৈকতে প্রাচীন রাজকাঁকড়ার ডিম ছাড়ার ক্ষেত্র।"
    },
    "feeding": {
      "en": "Omnivorous detritivores, benthic scavengers, filter-feeders (barnacles), and aggressive raptorial carnivores (mantis shrimps).",
      "bn": "সর্বভুক, আবর্জনাভুক, তলদেশীয় ফিল্টার-ফিডার এবং ক্ষিপ্র শিকারী মাংসাশী।"
    },
    "reproduction": {
      "en": "Dioecious with sexual dimorphism; internal copulation; females carry fertilized eggs under the abdomen (in pleopods) until hatching as free-swimming nauplius or zoea larvae.",
      "bn": "যৌন দ্বিরূপতাযুক্ত; স্ত্রী প্রাণী পেটের নিচের উপাঙ্গে ডিম বহন করে এবং তা ফুটে সাঁতারু জয়া বা নপলিয়াস লার্ভা বের হয়।"
    },
    "distribution": {
      "en": "Ubiquitous throughout world marine waters. Crucial commercial fisheries resource across coastal Bangladesh.",
      "bn": "বিশ্বের সকল সমুদ্রে বিদ্যমান। বাংলাদেশের উপকূলীয় মৎস্য অর্থনীতি ও জীববৈচিত্র্যের অন্যতম ভিত্তি।"
    },
    "exampleSpeciesIds": [
      "sp-pandinus-imperator",
      "sp-daphnia-pulex",
      "sp-periplaneta-americana",
      "sp-drosophila-melanogaster",
      "sp-anax-junius",
      "sp-scylla-serrata",
      "sp-limulus-polyphemus",
      "sp-danaus-plexippus",
      "sp-apis-mellifera",
      "sp-homarus-gammarus",
      "sp-scolopendra-gigantea",
      "sp-callinectes-sapidus",
      "sp-panulirus-argus",
      "sp-latrodectus-mactans",
      "sp-aedes-aegypti",
      "sp-scarabaeus-sacer"
    ],
    "referenceIds": [
      "ref-worms-2024"
    ],
    "authoritySource": "World Register of Marine Species (WoRMS) / Martin & Davis (2001)",
    "verificationStatus": "published",
    "publishedStatus": true,
    "taxonId": "taxon-arthropoda",
    "canonicalSlug": "arthropoda",
    "sections": [
      {
        "key": "classification",
        "titleEn": "1. Classification & Evolutionary Preponderance",
        "titleBn": "১. শ্রেণীবিন্যাস ও বিবর্তনীয় আধিপত্য",
        "order": 1,
        "contentEn": "Phylum Arthropoda (von Siebold, 1848) encompasses over 80% of all described animal species on Earth. Arthropods are bilaterally symmetrical, triploblastic, coelomate ecdysozoans characterized by metameric body segmentation with functional fusion (tagmatization), a hardened chitinous cuticle exoskeleton, and paired jointed appendages.",
        "contentBn": "পর্ব আর্থ্রোপোডা (von Siebold, 1848) হলো পৃথিবীর সমস্ত প্রাণী প্রজাতির ৮০ শতাংশেরও বেশি ধারণকারী বৃহত্তম পর্ব। এরা দ্বিপার্শ্বীয় প্রতিসম, কাইটিনযুক্ত শক্ত বহিঃকঙ্কালধারী এবং সন্ধিযুক্ত উপাঙ্গবিশিষ্ট একডাইসোজোয়ান সিলোমেট প্রাণী।",
        "references": [
          "ref-ruppert-2004",
          "ref-hickman-2020"
        ]
      },
      {
        "key": "exoskeleton_ecdysis",
        "titleEn": "2. Chitinous Exoskeleton & Ecdysis (Moulting)",
        "titleBn": "২. কাইটিনাস বহিঃকঙ্কাল ও একডাইসিস (খোলস মোচন)",
        "order": 2,
        "contentEn": "The rigid cuticle consists of an outer waxy epicuticle preventing dehydration and an inner procuticle of cross-linked chitin and sclerotized proteins (further impregnated with calcium carbonate in crustaceans). Because the rigid exoskeleton constrains somatic growth, arthropods must periodically shed and replace it through ecdysis (moulting), governed hormonally by ecdysone and juvenile hormone.",
        "contentBn": "আর্থ্রোপোডার বহিঃকঙ্কাল কাইটিন এবং শক্ত প্রোটিন দ্বারা গঠিত, যা জল ধরে রাখতে ও পেশির সংযোগে সহায়তা করে। যেহেতু শক্ত খোলসের ভেতরে দেহের বৃদ্ধি অসম্ভব, তাই এরা একডাইসোন হরমোনের প্রভাবে পর্যায়ক্রমে খোলস মোচন বা একডাইসিস (Moulting) সম্পন্ন করে।",
        "references": [
          "ref-hickman-2020"
        ]
      },
      {
        "key": "appendages_tagmata",
        "titleEn": "3. Tagmatization & Functional Jointed Appendages",
        "titleBn": "৩. ট্যাগমাটাইজেশন ও সন্ধিযুক্ত উপাঙ্গের বিশেষায়ন",
        "order": 3,
        "contentEn": "Segments are grouped into functional tagmata: head, thorax, and abdomen in Hexapoda; cephalothorax and abdomen in Chelicerata and Crustacea. Appendages are primitively biramous (branched into endopod and exopod, seen in trilobites and crustaceans) or secondarily uniramous (unbranched, in insects and myriapods), specialized for walking, swimming, sensory reception (antennae), food handling (mandibles, chelae), or copulation.",
        "contentBn": "এদের দেহ খণ্ডগুলো একত্রিত হয়ে বিশেষ কার্যসম্পাদনের জন্য ট্যাগমাটা গঠন করে (যেমন: মস্তক, বক্ষ ও উদর; অথবা শিরোবক্ষ ও উদর)। এদের প্রতিটি খণ্ডে সন্ধিযুক্ত উপাঙ্গ থাকে যা হাঁটা, সাঁতার কাটা, শিকার ধরা (দাঁড়া বা কেলা), স্পর্শ ও ঘ্রাণ গ্রহণের জন্য বিশেষায়িত।",
        "references": [
          "ref-ruppert-2004"
        ]
      },
      {
        "key": "respiration_circulation",
        "titleEn": "4. Respiration, Open Circulation & Excretion",
        "titleBn": "৪. শ্বাসতন্ত্র, উন্মুক্ত সংবহন ও রেচন ব্যবস্থা",
        "order": 4,
        "contentEn": "Gas exchange is achieved via diverse organs: branchial gills in aquatic crustaceans; tracheal tubules opening through spiracles in insects; book gills in horseshoe crabs; and book lungs in arachnids. Circulation is open: a dorsal tubular heart with ostia pumps hemolymph through a hemocoel. Excretion utilizes Malpighian tubules in terrestrial taxa (conserving water by excreting insoluble uric acid) or antennal/green glands in crustaceans (excreting ammonia).",
        "contentBn": "শ্বাসকার্য বিভিন্ন উপায়ে ঘটে: জলজ ক্রাস্টাশিয়ানদের ফুলকা, পতঙ্গদের ট্র্যাকিয়াল নালী ও স্পাইরাকল, এবং মাকড়সার বুক-লাং। সংবহন উন্মুক্ত প্রকৃতির; পৃষ্ঠীয় নলাকার হৃদপিণ্ড রক্তরস বা হিমোলিম্ফকে হিমোসিলে ছড়িয়ে দেয়। রেচনের জন্য পতঙ্গে ম্যালপিঘিয়ান নালিকা (ইউরিক অ্যাসিড নির্গমন) এবং কাঁকড়ায় সবুজ গ্রন্থি (গ্রিন গ্ল্যান্ড) কাজ করে।",
        "references": [
          "ref-hickman-2020"
        ]
      },
      {
        "key": "subphyla_economic",
        "titleEn": "5. Major Subphyla, Examples & Economic/Ecological Importance",
        "titleBn": "৫. প্রধান উপপর্বসমূহ, উদাহরণ ও অর্থনৈতিক গুরুত্ব",
        "order": 5,
        "contentEn": "Arthropoda comprises four extant subphyla: 1. Crustacea (crabs, lobsters, shrimp, barnacles, copepods); 2. Hexapoda (insects—dominant terrestrial pollinators and herbivores); 3. Chelicerata (spiders, scorpions, horseshoe crabs, ticks); 4. Myriapoda (centipedes, millipedes). Arthropods provide global pollination for 75% of flowering plants, drive marine benthic decomposition, and sustain coastal seafood industries. In Bangladesh, the Giant Mud Crab (Scylla serrata) and Tiger Prawn (Penaeus monodon) are premier export commodities.",
        "contentBn": "চারটি জীবিত উপপর্ব: ক্রাস্টাশিয়া (চিংড়ি, কাঁকড়া), হেক্সাপোডা (পতঙ্গ বা ইনসেক্টা), চেলিসেরাটা (মাকড়সা, বিচ্ছু), এবং মিরিয়াপোডা (কেন্নো, ক্যানকোলা)। পরাগায়ন ও সামুদ্রিক খাদ্যজালে এদের ভূমিকা অপরিসীম। বাংলাদেশে সুন্দরবনের শিলা কাঁকড়া (Scylla serrata) এবং বাগদা চিংড়ি (Penaeus monodon) শীর্ষ রপ্তানি পণ্য।",
        "references": [
          "ref-worms-2024"
        ]
      }
    ]
  },
  {
    "id": "phylum-echinodermata",
    "rank": "phylum",
    "scientificName": "Echinodermata",
    "bengaliName": "কন্টকত্বকী প্রাণী (একাইনোডার্মাটা)",
    "englishName": "Echinoderms (Sea Stars, Urchins, Sea Cucumbers)",
    "parentTaxonId": "taxon-animalia",
    "category": "marine_non_fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Echinodermata",
        "nameBn": "কন্টকত্বকী প্রাণী"
      }
    ],
    "shortDescription": {
      "en": "Exclusively marine deuterostome invertebrates exhibiting secondary pentaradial symmetry in adults, an endoskeleton of calcified ossicles, and a unique hydraulic water vascular system with tube feet.",
      "bn": "সম্পূর্ণ সামুদ্রিক প্রাণী যাদের পূর্ণাঙ্গ অবস্থায় পঞ্চ-অরীয় প্রতিসমতা, ক্যালসিয়ামযুক্ত কাঁটাযুক্ত কঙ্কাল এবং নালীপদযুক্ত বিশেষ পানি সংবহনতন্ত্র থাকে। তারা মাছ, সি অর্চিন ও সমুদ্র শসা এর অন্তর্ভুক্ত।"
    },
    "diagnosticCharacteristics": {
      "en": "Secondary pentaradial (five-part) symmetry in adults (bilateral in planktonic larvae); internal mesodermal skeleton composed of calcareous stereom ossicles and spines; unique water vascular (ambulacral) system operating hydraulic tube feet (podia) for locomotion, gas exchange, and feeding; mutable collagenous connective tissue; no excretory or specialized respiratory organs; strictly stenohaline marine.",
      "bn": "পূর্ণাঙ্গ অবস্থায় পঞ্চ-অরীয় প্রতিসমতা (লার্ভা দশায় দ্বিপার্শ্বীয়); ত্বকের নিচে চুনযুক্ত স্পাইক ও প্লেট; নালীপদ পরিচালনাকারী বিশেষ পানি সংবহনতন্ত্র; নমনীয় কোলাজেন কলা; সম্পূর্ণ সামুদ্রিক (মিঠাপানিতে বাঁচে না)।"
    },
    "habitat": {
      "en": "Strictly marine: rocky intertidal reefs, coral formations, sandy shelves, and deep seabed canyons.",
      "bn": "সম্পূর্ণরূপে সামুদ্রিক: প্রবাল প্রাচীর, পাথুরে উপকূল এবং সমুদ্রের তলদেশ।",
      "systems": [
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Key benthic recyclers and grazers on Saint Martin's Island coral shelves (sea cucumbers bioperturbating sediment; sea urchins grazing algae).",
      "bn": "সেন্ট মার্টিন দ্বীপের প্রবাল বাস্তুতন্ত্রের প্রধান পরিচ্ছন্নতাকর্মী; সমুদ্র শসা তলদেশের বালি পরিষ্কার করে এবং সি অর্চিন অতিরিক্ত শৈবাল ভক্ষণ করে প্রবাল রক্ষা করে।"
    },
    "feeding": {
      "en": "Benthic detritivores (Holothuroidea: sea cucumbers filtering sediment), herbivorous algal grazers with Aristotle's lantern (Echinoidea: sea urchins), and predatory bivalve consumers (Asteroidea: sea stars).",
      "bn": "তলদেশের বালি ও জৈব কণা ভক্ষণকারী (সমুদ্র শসা), শৈবাল ভক্ষক (সি অর্চিন) এবং শিকারী (তারা মাছ)।"
    },
    "reproduction": {
      "en": "Dioecious broadcast spawners releasing gametes into the water column; high capacity for tissue and limb regeneration.",
      "bn": "সমুদ্রে ডিম্বাণু ও শুক্রাণু ছেড়ে প্রজনন সম্পন্ন করে; দেহের হারানো অঙ্গ পুনরুৎপাদনের অসাধারণ ক্ষমতা রয়েছে।"
    },
    "distribution": {
      "en": "Global marine ecosystems. In Bangladesh, verified around the Saint Martin's Island coral ecosystem and Bay of Bengal shelf.",
      "bn": "বিশ্বের সকল সমুদ্রে বিদ্যমান। বাংলাদেশে মূলত সেন্ট মার্টিন দ্বীপ ও সংলগ্ন বঙ্গোপসাগরে সীমাবদ্ধ।"
    },
    "exampleSpeciesIds": [
      "sp-asterias-rubens",
      "sp-echinus-esculentus",
      "sp-antedon-mediterranea",
      "sp-acanthaster-planci",
      "sp-strongylocentrotus-purpuratus",
      "sp-ophiothrix-fragilis",
      "sp-holothuria-atra",
      "sp-protoreaster-nodosus",
      "sp-mesocentrotus-franciscanus"
    ],
    "referenceIds": [
      "ref-worms-2024"
    ],
    "authoritySource": "World Ophiuroidea/Echinoidea/Holothuroidea Databases (WoRMS)",
    "verificationStatus": "published",
    "publishedStatus": true,
    "taxonId": "taxon-echinodermata",
    "canonicalSlug": "echinodermata",
    "sections": [
      {
        "key": "classification",
        "titleEn": "1. Classification & Deuterostome Affinity",
        "titleBn": "১. শ্রেণীবিন্যাস ও ডিউটারোস্টোম বিবর্তনীয় সম্পর্ক",
        "order": 1,
        "contentEn": "Phylum Echinodermata (Bruguière, 1791) consists entirely of marine, coelomate animals belonging to the Deuterostomia clade. Echinoderms share with Chordata key embryological traits: radial indeterminate cleavage, blastopore developing into the anus (enterocoely), and a calcified mesodermal endoskeleton, proving they are phylogenetically closer to vertebrates than any other major invertebrate phylum.",
        "contentBn": "পর্ব একাইনোডার্মাটা (Bruguière, 1791) হলো সম্পূর্ণ সামুদ্রিক সিলোমেট প্রাণী যা ডিউটারোস্টোমিয়া ক্ল্যাডের অন্তর্ভুক্ত। ভ্রূণীয় বিকাশে ব্লাস্টোপোর থেকে পায়ু সৃষ্টি ও মেসোডার্মাল কঙ্কালের কারণে বিবর্তনীয় ধারায় এরা কর্ডাটা বা মেরুদণ্ডী প্রাণীদের সবচেয়ে নিকটাত্মীয়।",
        "references": [
          "ref-ruppert-2004",
          "ref-kardong-2018"
        ]
      },
      {
        "key": "symmetry_endoskeleton",
        "titleEn": "2. Secondary Pentaradial Symmetry & Mesodermal Endoskeleton",
        "titleBn": "২. দ্বিতীয় পর্যায়ের পঞ্চ-অরীয় প্রতিসাম্য ও মেসোডার্মাল কঙ্কাল",
        "order": 2,
        "contentEn": "Adult echinoderms exhibit pentamerous radial symmetry, organized around an oral-aboral axis with 5 radiating ambulacral grooves. However, this radial condition is secondary: free-swimming larvae are bilaterally symmetrical, reflecting bilateral ancestry. The internal skeleton is mesodermal in origin, composed of porous calcareous plates or ossicles with a microscopic lattice structure termed stereom, bound together by mutable collagenous tissue (catch apparatus).",
        "contentBn": "পূর্ণাঙ্গ একাইনোডার্মদের দেহ ৫টি ভাগে বিভক্ত পঞ্চ-অরীয় প্রতিসম (Pentaradial) হলেও এদের সাঁতারু লার্ভা সম্পূর্ণ দ্বিপার্শ্বীয় প্রতিসম, যা এদের দ্বিপার্শ্বীয় পূর্বপুরুষের প্রমাণ দেয়। এদের অন্তকঙ্কাল মেসোডার্ম থেকে সৃষ্ট চুনযুক্ত প্লেট বা অসিকল (Ossicles) দ্বারা গঠিত।",
        "references": [
          "ref-hickman-2020"
        ]
      },
      {
        "key": "water_vascular_system",
        "titleEn": "3. The Water Vascular System & Tube Feet Locomotion",
        "titleBn": "৩. নালী-পদ ও জল-সংবহন তন্ত্র (Water Vascular System)",
        "order": 3,
        "contentEn": "The crowning innovation of Echinodermata is the water vascular (ambulacral) system—a coelom-derived network of hydraulic fluid-filled canals. Seawater enters through a sieve-like aboral madreporite, flows down the calcified stone canal into a circum-oral ring canal, branches into five radial canals along each arm, and pressurizes muscular ampullae. Contraction of ampullae drives hydraulic extension of suckered tube feet (podia), mediating locomotion, prey adhesion, gas exchange, and sensory touch.",
        "contentBn": "একাইনোডার্মাটার প্রধান বৈশিষ্ট্য হলো জল-সংবহন তন্ত্র। দেহের ওপরের ম্যাড্রেপোরাইট ছিদ্র দিয়ে জল প্রবেশ করে স্টোন ক্যানাল ও রিং ক্যানাল হয়ে প্রতিটি বাহুর রেডিয়াল ক্যানালে পৌঁছায়। পেশিবহুল অ্যাম্পুলার সংকোচনে শত শত টিউব ফিট (Tube Feet) বা নালী-পদে জল সঞ্চালিত হয়ে হাইড্রোলিক চাপে এরা চলাফেরা করে এবং শিকার আঁকড়ে ধরে।",
        "references": [
          "ref-ruppert-2004"
        ]
      },
      {
        "key": "autotomy_regeneration",
        "titleEn": "4. Feeding, Autotomy & Extraordinary Regeneration",
        "titleBn": "৪. খাদ্যগ্রহণ, অঙ্গছেদন ও অসাধারণ পুনরুৎপত্তি",
        "order": 4,
        "contentEn": "Sea stars are predatory carnivores capable of everting their lower cardiac stomach through the mouth directly into bivalve shells, digesting the prey externally with enzymatic secretions. Echinoderms possess extraordinary powers of self-amputation (autotomy) and somatic regeneration: a severed arm containing a portion of the central disc can regenerate an entirely new functional organism.",
        "contentBn": "তারা মাছের মতো শিকারী প্রাণীরা শিকারের খোলসের ভেতর নিজের পাকস্থলী উল্টে বের করে দিয়ে বহিঃকোষীয় পরিপাক সম্পন্ন করে। এদের মধ্যে অটোটমি বা বিপদে নিজের অঙ্গ বিচ্ছিন্ন করার এবং পরবর্তীতে সম্পূর্ণ নতুন দেহ পুনরুৎপত্তি করার অবিশ্বাস্য ক্ষমতা রয়েছে।",
        "references": [
          "ref-hickman-2020"
        ]
      },
      {
        "key": "classes_ecological",
        "titleEn": "5. Major Classes, Examples & Coral Reef Keystone Roles",
        "titleBn": "৫. প্রধান শ্রেণীসমূহ, উদাহরণ ও প্রবাল প্রাচীরের বাস্তুতান্ত্রিক ভূমিকা",
        "order": 5,
        "contentEn": "Five living classes: 1. Asteroidea (sea stars / starfish, e.g. Acanthaster planci Crown-of-thorns); 2. Ophiuroidea (brittle stars and basket stars); 3. Echinoidea (sea urchins and sand dollars with fused tests and Aristotle's lantern chewing apparatus); 4. Holothuroidea (sea cucumbers / trepang with internal respiratory trees); 5. Crinoidea (sea lilies and feather stars). Echinoderms act as keystone predators and sediment cleaners on oceanic reefs and the Bay of Bengal seafloor.",
        "contentBn": "পাঁচটি প্রধান শ্রেণী: অ্যাস্টেরোইডিয়া (তারা মাছ), অফিউরোইডিয়া (ভঙ্গুর তারা), একিনোইডিয়া (সমুদ্র সজারু বা সি-আর্চিন), হোলোথুরোইডিয়া (সমুদ্র শসা বা সি-কিউকাম্বার), এবং ক্রিনোইডিয়া (সি-লিলি)। এরা সমুদ্রতলের ভারসাম্য রক্ষা করে। সেন্ট মার্টিন ও বঙ্গোপসাগরের তলদেশে এদের প্রাচুর্য দেখা যায়।",
        "references": [
          "ref-worms-2024"
        ]
      }
    ]
  },
  {
    "id": "phylum-chordata-marine",
    "rank": "phylum",
    "scientificName": "Chordata",
    "bengaliName": "অ-মৎস্য সামুদ্রিক কর্ডাটা",
    "englishName": "Marine Mammals & Marine Reptiles",
    "parentTaxonId": "taxon-animalia",
    "category": "marine_non_fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      }
    ],
    "shortDescription": {
      "en": "Air-breathing marine tetrapods possessing vertebrate chordate anatomy adapted for fully marine or semi-aquatic existence. Encompasses marine mammals (cetaceans, sirenians) and marine reptiles (sea turtles). Strictly excludes finfishes.",
      "bn": "বাতাসে শ্বাস গ্রহণকারী সামুদ্রিক চতুষ্পদ মেরুদণ্ডী প্রাণী যা সম্পূর্ণ সামুদ্রিক বা উপ-জলজ জীবনযাপনে অভিযোজিত। সামুদ্রিক স্তন্যপায়ী (ডলফিন ও তিমি) এবং সামুদ্রিক সরীসৃপ (কাছিম) এর অন্তর্ভুক্ত। পাখনাযুক্ত মাছ এই গোষ্ঠীতে অন্তর্ভুক্ত নয়।"
    },
    "diagnosticCharacteristics": {
      "en": "Vertebrates breathing atmospheric air via lungs; endothermic homeotherms (marine mammals) or ectothermic poikilotherms (marine reptiles); limbs modified into streamlined flippers/paddles; horizontal tail flukes moving vertically in cetaceans; body insulation via thick subcutaneous blubber; viviparous with lactation in Mammalia; oviparous with terrestrial beach nesting in marine Testudines.",
      "bn": "ফুসফুসের মাধ্যমে বাতাস থেকে সরাসরি শ্বাস গ্রহণকারী মেরুদণ্ডী; দেহের উপাঙ্গগুলো সাঁতারের প্যাডেলে রূপান্তরিত; স্তন্যপায়ীদের ত্বকের নিচে চর্বির পুরু স্তর (ব্লাবার); স্তন্যপায়ী প্রাণীরা সরাসরি শাবক প্রসব করে দুধ খাওয়ায়; সামুদ্রিক কাছিম ডিম পাড়ার জন্য বালুকাময় সৈকতে উঠে আসে।"
    },
    "habitat": {
      "en": "Pelagic oceans, coastal continental shelf margins, submarine trenches (Swatch of No Ground), and mangrove estuaries.",
      "bn": "উন্মুক্ত মহাসাগর, উপকূলীয় মহীসোপান, সোয়াচ অব নো গ্রাউন্ড গিরিখাত এবং সুন্দরবনের মোহনাজ জলপথ।",
      "systems": [
        "marine",
        "brackish"
      ]
    },
    "ecosystem": {
      "en": "High-trophic-level apex marine predators (Irrawaddy dolphins, Indo-Pacific finless porpoises) in the Sundarbans and northern Bay of Bengal.",
      "bn": "সুন্দরবন ও উত্তর বঙ্গোপসাগরের জলজ বাস্তুতন্ত্রের শীর্ষ স্তরের বুদ্ধিমান শিকারী (যেমন: ইরাবতী ডলফিন)।"
    },
    "feeding": {
      "en": "Piscivorous and teuthophagous carnivores hunting schooling marine and estuarine fishes and squids through echolocation.",
      "bn": "মাছখেকো ও স্কুইড শিকারী মাংসাশী; ইকো-লোকেশন শব্দতরঙ্গের সাহায্যে শিকারের অবস্থান শনাক্ত করে।"
    },
    "reproduction": {
      "en": "Internal fertilization; single calf born after 11–14 months gestation; maternal care with milk suckling.",
      "bn": "অভ্যন্তরীণ নিষেক; দীর্ঘ গর্ভধারণের পর একক শাবক প্রসব এবং মা ডলফিন দুধ খাইয়ে বড় করে।"
    },
    "distribution": {
      "en": "Worldwide oceans. In Bangladesh, verified species include the Irrawaddy dolphin (Orcaella brevirostris) in the Sundarbans and coastal Bay of Bengal.",
      "bn": "বিশ্বের সকল সমুদ্রে বিস্তৃত। বাংলাদেশে সুন্দরবন মোহনা ও বঙ্গোপসাগরে ইরাবতী ডলফিন একটি প্রামাণ্য নথিবদ্ধ প্রজাতি।"
    },
    "importantFamilies": [
      {
        "name": "Delphinidae",
        "commonEn": "Oceanic & Estuarine Dolphins",
        "commonBn": "ডলফিন গোত্র",
        "diagnosticEn": "Streamlined cetaceans with melon, echolocation capabilities, and conical teeth.",
        "diagnosticBn": "মেলনযুক্ত মাথা, ইকো-লোকেশন ব্যবহারে সক্ষম এবং মোচাকৃতি দাঁতযুক্ত সামুদ্রিক স্তন্যপায়ী।"
      }
    ],
    "exampleSpeciesIds": [
      "sp-branchiostoma-lanceolatum",
      "sp-ciona-intestinalis",
      "sp-panthera-tigris",
      "sp-tenualosa-ilisha",
      "sp-struthio-camelus"
    ],
    "referenceIds": [
      "ref-iucn-bd-2015",
      "ref-worms-2024"
    ],
    "authoritySource": "Society for Marine Mammalogy / IUCN Cetacean Specialist Group",
    "verificationStatus": "published",
    "publishedStatus": true,
    "taxonId": "taxon-chordata",
    "canonicalSlug": "chordata",
    "sections": [
      {
        "key": "classification",
        "titleEn": "1. Classification & The Four Defining Chordate Characteristics",
        "titleBn": "১. শ্রেণীবিন্যাস ও কর্ডাটার চারটি প্রধান মৌলিক বৈশিষ্ট্য",
        "order": 1,
        "contentEn": "Phylum Chordata (Haeckel, 1874) unites bilateral deuterostome animals characterized by four foundational morphological synapomorphies present at some stage of ontogeny: 1. Notochord (dorsal flexible cartilaginous skeletal rod providing axial support); 2. Dorsal hollow nerve cord (derived from ectoderm, developing into the brain and spinal cord); 3. Pharyngeal slits or pouches (branchial openings in aquatic forms, embryonic in tetrapods); 4. Post-anal tail (muscular extension posterior to the digestive anus for propulsion). In addition, an endostyle or homologous thyroid gland regulates iodine metabolism.",
        "contentBn": "পর্ব কর্ডাটা (Haeckel, 1874) হলো উন্নত ডিউটারোস্টোম প্রাণী যাদের জীবনের কোনো না কোনো পর্যায়ে চারটি মৌলিক বৈশিষ্ট্য বিদ্যমান থাকে: ১. নটোকর্ড (পৃষ্ঠীয় স্থিতিস্থাপক রজ্জু যা দেহকে অক্ষীয় দৃঢ়তা দেয়); ২. ফাঁপা পৃষ্ঠীয় স্নায়ুরজ্জু (যা মস্তিষ্ক ও সুষুম্নাকাণ্ডে রূপান্তরিত হয়); ৩. গলবিলীয় ফুলকা ছিদ্র (যা জলজ প্রাণীতে আজীবন ও স্থলে ভ্রূণাবস্থায় থাকে); ৪. পায়ু-পশ্চাৎ পেশিবহুল লেজ (চলনের জন্য)। এছাড়া আয়োডিন নিয়ন্ত্রক এন্ডোস্টাইল বা থাইরয়েড গ্রন্থি বিদ্যমান।",
        "references": [
          "ref-kardong-2018",
          "ref-hickman-2020"
        ]
      },
      {
        "key": "subphyla",
        "titleEn": "2. The Three Chordate Subphyla (Tunicata, Cephalochordata, Vertebrata)",
        "titleBn": "২. কর্ডাটার তিনটি উপপর্ব (টিউনিকেটা, সেফালোকর্ডাটা, ভার্টিব্রাটা)",
        "order": 2,
        "contentEn": "Chordates are divided into: 1. Subphylum Urochordata / Tunicata (sea squirts / ascidians; notochord restricted to larval tail, lost in sessile adults enclosed in tunicin cellulose coats); 2. Subphylum Cephalochordata (lancelets / Branchiostoma; notochord persists from head to tail throughout entire life); 3. Subphylum Vertebrata / Craniata (notochord largely replaced in adults by a segmented cartilaginous or bony vertebral column surrounding the spinal cord, with a distinct brain protected by a cranium).",
        "contentBn": "কর্ডাটাকে তিনটি উপপর্বে ভাগ করা হয়: ১. টিউনিকেটা (ইউরোকর্ডাটা—যাদের কেবল সাঁতারু লার্ভা দশায় লেজে নটোকর্ড থাকে, যেমন অ্যাসিডিয়া); ২. সেফালোকর্ডাটা (যাদের মস্তক থেকে লেজ পর্যন্ত সারাজীবন নটোকর্ড থাকে, যেমন ব্রাঙ্কিওস্টোমা); ৩. ভার্টিব্রাটা (মেরুদণ্ডী প্রাণী—যাদের নটোকর্ড পূর্ণাঙ্গ অবস্থায় কশেরুকাযুক্ত মেরুদণ্ডে প্রতিস্থাপিত হয় এবং সুরক্ষিত মস্তিষ্ক থাকে)।",
        "references": [
          "ref-kardong-2018"
        ]
      },
      {
        "key": "evolution_craniata",
        "titleEn": "3. Craniate Evolution & The Transition to Jaws (Gnathostomata)",
        "titleBn": "৩. ক্রেনিয়েট বিবর্তন ও চোয়ালের উৎপত্তি (ন্যাথোস্টোমাটা)",
        "order": 3,
        "contentEn": "The transition from invertebrate chordates to vertebrates was driven by neural crest embryonic tissue and epidermal placodes, which generated complex sensory organs, cranial cartilages, and a tripartite brain. The subsequent evolution of hinged biting jaws (Gnathostomata) from the first anterior pharyngeal gill arch during the Silurian transformed early filter feeders into active macro-predators, paired with lateral pectoral and pelvic fins for 3D steering.",
        "contentBn": "অমেরুদণ্ডী কর্ডাটা থেকে মেরুদণ্ডী প্রাণীর বিবর্তনে নিউরাল ক্রেস্ট কোষের ভূমিকা ছিল অপরিসীম। সিলুরিয়ান যুগে সম্মুখ ফুলকা আর্চ রূপান্তরিত হয়ে কবজাযুক্ত শক্ত চোয়াল (Gnathostomata) গঠন করে, যা নিষ্ক্রিয় ফিল্টার ফিডারদের শিকারী দক্ষ প্রাণীতে পরিণত করে।",
        "references": [
          "ref-kardong-2018"
        ]
      },
      {
        "key": "tetrapod_conquest",
        "titleEn": "4. The Water-to-Land Transition & The Amniotic Egg",
        "titleBn": "৪. স্থলভাগ বিজয় ও অ্যামনিওটিক ডিমের বিবর্তন",
        "order": 4,
        "contentEn": "During the Devonian, sarcopterygian lobe-finned fishes evolved homologous limb bones, leading to tetrapods (amphibians). The final liberation from aquatic dependence occurred in the Carboniferous with the evolution of the amniotic egg—equipped with protective extraembryonic membranes (amnion, chorion, allantois, yolk sac) and a water-retaining shell, allowing reptiles, birds, and mammals to conquer dry continents.",
        "contentBn": "ডেভোনিয়ান যুগে মাংসল পাখনাযুক্ত মাছ থেকে টেট্রাপড বা উভচর প্রাণীর উদ্ভব ঘটে। এরপর কার্বনিফেরাস যুগে অ্যামনিওটিক ডিমের বিবর্তন প্রাণীদের জলের ওপর নির্ভরশীলতা চিরতরে দূর করে শুকনো ডাঙ্গায় সরীসৃপ, পাখি ও স্তন্যপায়ী হিসেবে ছড়িয়ে পড়ার সুযোগ দেয়।",
        "references": [
          "ref-kardong-2018"
        ]
      },
      {
        "key": "major_classes_overview",
        "titleEn": "5. Major Vertebrate Classes & Planetary Ecological Dominance",
        "titleBn": "৫. প্রধান মেরুদণ্ডী শ্রেণীসমূহ ও বৈশ্বিক বাস্তুতান্ত্রিক আধিপত্য",
        "order": 5,
        "contentEn": "Extant vertebrates comprise five grand classes/grades: Fishes (Pisces: Agnatha, Chondrichthyes, Osteichthyes); Amphibia (frogs, salamanders, caecilians); Reptilia (turtles, lizards, snakes, crocodilians); Aves (birds); and Mammalia (monotremes, marsupials, placentals). Chordates dominate terrestrial, aerial, marine, and limnic biomes as apex predators, ecosystem engineers, and keystone species worldwide.",
        "contentBn": "বিদ্যমান মেরুদণ্ডীদের পাঁচটি প্রধান শ্রেণী: মাছসমূহ (পিসেস), উভচর (অ্যাম্ফিবিয়া), সরীসৃপ (রেপটিলিয়া), পাখি (অ্যাভিস) এবং স্তন্যপায়ী (ম্যামালিয়া)। এরা পৃথিবীর সমস্ত আকাশ, স্থল ও জলভাগে খাদ্যজালের শীর্ষে অবস্থান করে।",
        "references": [
          "ref-kardong-2018",
          "ref-hickman-2020"
        ]
      }
    ]
  },
  {
    "id": "order-cetacea",
    "rank": "infraorder",
    "scientificName": "Cetacea",
    "bengaliName": "সিটাসিয়া (তিমি ও ডলফিন)",
    "englishName": "Cetaceans (Whales, Dolphins & Porpoises)",
    "parentTaxonId": "taxon-artiodactyla",
    "category": "marine_non_fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Mammalia",
        "nameBn": "স্তন্যপায়ী"
      },
      {
        "rank": "order",
        "name": "Artiodactyla",
        "nameBn": "আর্টিওড্যাক্টাইলা"
      },
      {
        "rank": "infraorder",
        "name": "Cetacea",
        "nameBn": "সিটাসিয়া"
      }
    ],
    "shortDescription": {
      "en": "Fully aquatic obligate marine and estuarine placental mammals with spindle-shaped bodies, horizontal tail flukes, and modified forelimbs as steering flippers.",
      "bn": "সম্পূর্ণ জলজ স্তন্যপায়ী প্রাণী যাদের মাকু আকৃতির দেহ, অনুভূমিক পুচ্ছ ফ্লুক এবং সাঁতারের প্যাডেলযুক্ত অগ্রপদ রয়েছে। এর অন্তর্ভুক্ত তিমি, ডলফিন ও শুশুক।"
    },
    "diagnosticCharacteristics": {
      "en": "Fusiform hydrodynamic body; dorsal blowhole(s) on crown of head for atmospheric breathing; horizontal tail flukes propelled by vertical spinal flexion; hair absent except sparse sensory vibrissae around snout; external ears absent; thick subcutaneous blubber for thermal homeostasis; high acoustic specialization for echolocation and communication.",
      "bn": "হাইড্রোডাইনামিক দেহ; মাথায় ব্লোহোল ছিদ্র; উল্লম্ব মেরুদণ্ডের নড়াচড়া দ্বারা চালিত অনুভূমিক পুচ্ছ ফ্লুক; লোমহীন ত্বক; ত্বকের নিচে পুরু ব্লাবার চর্বি স্তর; ইকো-লোকেশন শব্দতরঙ্গ ব্যবহারে উচ্চ দক্ষতা।"
    },
    "habitat": {
      "en": "Oceanic pelagic, deep submarine canyon trenches, and shallow turbid mangrove-estuarine interfaces.",
      "bn": "উন্মুক্ত মহাসাগর, গভীর সমুদ্রের গিরিখাত এবং সুন্দরবনের ম্যানগ্রোভ মোহনা।",
      "systems": [
        "marine",
        "brackish"
      ]
    },
    "ecosystem": {
      "en": "Apex intelligent predators maintaining ecological equilibrium of estuarine and marine fish populations in the Bay of Bengal.",
      "bn": "বঙ্গোপসাগর ও সুন্দরবনের জলজ খাদ্যশৃঙ্খলের শীর্ষ স্তরের শিকারী।"
    },
    "feeding": {
      "en": "Carnivorous predation on demersal and pelagic teleosts, squids, and crustaceans located through biosonar.",
      "bn": "মাংসাশী শিকারী; মাছ ও স্কুইড শিকার করে।"
    },
    "reproduction": {
      "en": "Internal fertilization; single precocial calf born underwater tail-first; nourished by nutrient-rich milk for 6–18 months.",
      "bn": "অভ্যন্তরীণ নিষেক; পানির নিচে লেজের দিক থেকে একক শাবক প্রসব; মা ডলফিনের দুগ্ধপান।"
    },
    "distribution": {
      "en": "Worldwide oceans. In Bangladesh, verified by the Irrawaddy dolphin (Orcaella brevirostris) inhabiting the Sundarbans mangrove waterways and Swatch of No Ground proximity.",
      "bn": "বিশ্বজুড়ে বিস্তৃত। বাংলাদেশে সুন্দরবন ও বঙ্গোপসাগরের মহীসোপানে ইরাবতী ডলফিন একটি প্রামাণ্য নথিবদ্ধ প্রজাতি।"
    },
    "importantFamilies": [
      {
        "name": "Delphinidae",
        "commonEn": "Oceanic and Estuarine Dolphins",
        "commonBn": "ডলফিন গোত্র",
        "diagnosticEn": "Medium-sized cetaceans possessing distinct melon and curved dorsal fin.",
        "diagnosticBn": "মেলন ও পৃষ্ঠপাখনাযুক্ত মধ্যম আকারের সিটাসিয়ান।"
      },
      {
        "name": "Balaenopteridae",
        "commonEn": "Rorquals (Baleen Whales)",
        "commonBn": "রোরকোয়াল বা তিমি গোত্র",
        "diagnosticEn": "Baleen filter-feeders with expandable longitudinal ventral throat pleats.",
        "diagnosticBn": "মুখের ভেতর বেলিনযুক্ত বিশালাকার তিমি যাদের গলায় প্রসারণশীল খাঁজ থাকে।"
      }
    ],
    "exampleSpeciesIds": [
      "sp-balaenoptera-musculus",
      "sp-orcaella-brevirostris",
      "sp-platanista-gangetica"
    ],
    "referenceIds": [
      "ref-smith-bd-cetaceans-2008",
      "ref-mdd-2024",
      "ref-worms-2024"
    ],
    "authoritySource": "Society for Marine Mammalogy / Committee on Taxonomy (2024)",
    "verificationStatus": "published",
    "publishedStatus": true,
    "taxonId": "taxon-cetacea",
    "scientificNamesSummary": {
      "en": "Notable cetacean genera in the northern Bay of Bengal: Orcaella, Neophocaena, Sousa, Stenella, Balaenoptera. Binomials: Orcaella brevirostris (Owen in Gray, 1866) and Neophocaena phocaenoides (Cuvier, 1829).",
      "bn": "উত্তর বঙ্গোপসাগরের উল্লেখযোগ্য সিটাসিয়ান গণ: Orcaella, Neophocaena, Sousa, Stenella, Balaenoptera। বৈজ্ঞানিক নাম: Orcaella brevirostris (Owen in Gray, 1866) এবং Neophocaena phocaenoides (Cuvier, 1829)।"
    },
    "examplesSummary": {
      "en": "Verified examples include the Irrawaddy Dolphin (Orcaella brevirostris), Indo-Pacific Finless Porpoise (Neophocaena phocaenoides), and Indo-Pacific Humpback Dolphin (Sousa chinensis).",
      "bn": "যাচাইকৃত উদাহরণের মধ্যে রয়েছে ইরাবতী ডলফিন (Orcaella brevirostris), পাখনাপোড়া বা ফিনলেস পোরপোয়েজ (Neophocaena phocaenoides) এবং ইন্দো-প্যাসিফিক হাম্পব্যাক ডলফিন (Sousa chinensis)।"
    },
    "additionalInformation": {
      "en": "Cetaceans are fully aquatic placental mammals phylogenetically nested within Artiodactyla (Cetartiodactyla). Bangladesh coastal waters and the Swatch of No Ground support globally critical populations of freshwater and coastal cetaceans protected under national wildlife acts.",
      "bn": "সিটাসিয়ানরা সম্পূর্ণ জলজ স্তন্যপায়ী যারা বিবর্তনগতভাবে আর্টিওড্যাকটাইলা বর্গের অন্তর্ভুক্ত। সুন্দরবনের মোহনা ও সোয়াচ অব নো গ্রাউন্ড সাবমেরিন ক্যানিয়ন বৈশ্বিকভাবে ইরাবতী ডলফিনের অত্যন্ত গুরুত্বপূর্ণ নিরাপদ আশ্রয়স্থল।"
    }
  },
  {
    "id": "phylum-ctenophora",
    "rank": "phylum",
    "scientificName": "Ctenophora",
    "bengaliName": "চিরুনি জেলি বা টেনোফোরা",
    "englishName": "Comb Jellies",
    "parentTaxonId": "taxon-animalia",
    "category": "marine_non_fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Ctenophora",
        "nameBn": "টেনোফোরা"
      }
    ],
    "shortDescription": {
      "en": "Exclusively marine, transparent, gelatinous biradially symmetrical invertebrates propelled by eight longitudinal rows of iridescent ciliated comb plates (ctenes). Possess specialized sticky colloblasts rather than cnidocyte stinging cells.",
      "bn": "সম্পূর্ণরূপে সামুদ্রিক, স্বচ্ছ ও জেলির মতো নরম দেহবিশিষ্ট প্রাণী যা আটটি চিরুনির মতো রোমযুক্ত পাত (টিন) নেড়ে সাঁতার কাটে। শিকার ধরার জন্য এদের দংশক কোষের বদলে আঠালো কলোব্লাস্ট কোষ থাকে।"
    },
    "diagnosticCharacteristics": {
      "en": "Biradial symmetry organized along an oral-aboral axis; eight longitudinal meridian rows of fused locomotory cilia (comb plates or ctenes); specialized epidermal adhesive cells (colloblasts) on tentacles lacking true stinging nematocysts; apical sensory organ containing a gravity-sensing statocyst; complete digestive tract with anal pores; iridescent bioluminescence or light diffraction produced by beating cilia.",
      "bn": "দ্বি-অরীয় প্রতিসম দেহ; চলনের জন্য ৮ সারি সিলিয়াযুক্ত কম্ব প্লেট (টিন); শিকার ধরতে আঠালো কলোব্লাস্ট কোষযুক্ত কর্ষিকা (নিডোসাইট অনুপস্থিত); শীর্ষভাগে মাধ্যাকর্ষণ সংবেদী স্ট্যাটোসিস্ট; পায়ুছিদ্রযুক্ত সম্পূর্ণ পৌষ্টিক নালী; সিলিয়ার নড়াচড়ায় বর্ণিল আলোক বিচ্ছুরণ বা বায়োলুমিনেসেন্স সৃষ্টি করে।"
    },
    "habitat": {
      "en": "Exclusively marine, ranging from surface epipelagic and coastal neritic zones to abyssal depths across all global oceans.",
      "bn": "সম্পূর্ণ সামুদ্রিক; উপকূলীয় অগভীর সমুদ্র থেকে শুরু করে সকল মহাসাগরের অতল গভীর অঞ্চল পর্যন্ত বিস্তৃত।",
      "systems": [
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Voracious planktonic carnivores regulating populations of copepods, crustacean larvae, and fish eggs in global oceanic food webs.",
      "bn": "সমুদ্রের খাদ্যজালে গুরুত্বপূর্ণ প্ল্যাঙ্কটন শিকারী যা কোপিপড, ক্রাস্টাশিয়ার লার্ভা ও মাছের ডিম খেয়ে ভারসাম্য বজায় রাখে।"
    },
    "feeding": {
      "en": "Active carnivorous suspension feeders deploying sticky tentacular colloblasts or expanding large muscular oral lobes to engulf micro-crustaceans and gelatinous zooplankton.",
      "bn": "মাংসাশী শিকারী; কর্ষিকার আঠালো কলোব্লাস্ট কোষ দিয়ে অথবা মুখের পেশিবহুল লোব প্রসারিত করে ক্ষুদ্র ক্রাস্টাশিয়ান ও অন্যান্য জেলি খায়।"
    },
    "reproduction": {
      "en": "Predominantly simultaneous hermaphrodites releasing gametes into the water column; external fertilization developing through a characteristic free-swimming cydippid larval stage.",
      "bn": "অধিকাংশ প্রজাতি উভলিঙ্গ; সমুদ্রে শুক্রাণু ও ডিম্বাণু ছেড়ে নিষেক ঘটায় এবং সিডিপ্পিড লার্ভা পর্যায়ের মাধ্যমে পূর্ণাঙ্গ রূপ পায়।"
    },
    "distribution": {
      "en": "Global oceanic distribution across all world oceans from polar seas to tropical waters. In Bangladesh waters, observed planktonically in the northern Bay of Bengal; 0 published specimen records currently catalogued in database.",
      "bn": "বিশ্বের সকল মহাসাগরে (মেরু থেকে ক্রান্তীয়) বিস্তৃত। বাংলাদেশে উত্তর বঙ্গোপসাগরের প্ল্যাঙ্কটনে উপস্থিতি থাকলেও ডাটাবেসে বর্তমানে কোনো প্রকাশিত ভাউচার রেকর্ড নেই।"
    },
    "exampleSpeciesIds": [
      "sp-cestum-veneris",
      "sp-pleurobrachia-pileus",
      "sp-beroe-ovata",
      "sp-mnemiopsis-leidyi"
    ],
    "referenceIds": [
      "ref-worms-2024"
    ],
    "authoritySource": "World Ctenophora Database / Mills (2017)",
    "verificationStatus": "published",
    "publishedStatus": true,
    "taxonId": "taxon-ctenophora",
    "canonicalSlug": "ctenophora",
    "sections": [
      {
        "key": "classification",
        "titleEn": "1. Classification & Systematic Affinity",
        "titleBn": "১. শ্রেণীবিন্যাস ও পদ্ধতিগত অবস্থান",
        "order": 1,
        "contentEn": "Phylum Ctenophora (Eschscholtz, 1829)—the comb jellies—comprises delicate, transparent, gelatinous marine animals characterized by biradial symmetry. Phylogenetically distinct from Cnidaria, ctenophores lack stinging nematocysts, possess a complete gut with anal pores, and utilize comb-like rows of fused cilia for propulsion.",
        "contentBn": "পর্ব টেনোফোরা (Eschscholtz, 1829) হলো স্বচ্ছ জেলির মতো সামুদ্রিক প্রাণী যা চিরুনি জেলি নামে পরিচিত। নিডারিয়া থেকে এরা সম্পূর্ণ স্বতন্ত্র; এদের কোনো বিষাক্ত নেমাটোসিস্ট নেই, খাদ্যনালী পায়ুছিদ্রযুক্ত এবং সিলিয়ার সমন্বয়ে গঠিত চিরুনি প্লেটের সাহায্যে সাঁতার কাটে।",
        "references": [
          "ref-ruppert-2004"
        ]
      },
      {
        "key": "ctene_locomotion",
        "titleEn": "2. Comb Rows (Ctenes) & Unique Ciliary Locomotion",
        "titleBn": "২. চিরুনি প্লেট (Ctene) ও সিলিয়ার চলন",
        "order": 2,
        "contentEn": "Ctenophores are the largest animals to move primarily by cilia. Eight meridional comb rows (costae) extend along the body, each made of fused macrocilia plates termed ctenes. Coordinated by an aboral statocyst sense organ, synchronized metachronal waves of ciliary beating propel the animal mouth-forward with mesmerizing rainbow-colored optical diffraction.",
        "contentBn": "সিলিয়ার মাধ্যমে সন্তরণকারী এরা পৃথিবীর বৃহত্তম প্রাণী। এদের দেহে ৮টি চিরুনির মতো রো বা কোস্টা থাকে যা আলোর প্রতিসরণে রামধনুর মতো আলোকচ্ছটা তৈরি করে। মাথার ওপরের স্ট্যাটোসিস্ট ভারসাম্য অঙ্গের মাধ্যমে এদের চলন নিয়ন্ত্রিত হয়।",
        "references": [
          "ref-ruppert-2004"
        ]
      },
      {
        "key": "colloblasts",
        "titleEn": "3. Colloblasts (Adhesive Lasso Cells) & Prey Capture",
        "titleBn": "৩. কলোব্লাস্ট আঠালো কোষ ও শিকার ধরা",
        "order": 3,
        "contentEn": "Tentaculate ctenophores bear two long retractile tentacles equipped with colloblasts—specialized lasso cells that discharge a sticky adhesive droplet upon contact with copepods and fish larvae, pulling prey into the mouth without stinging.",
        "contentBn": "এদের দুটি লম্বা গুটিয়ে নেওয়া যায় এমন কর্ষিকায় কলোব্লাস্ট নামক বিশেষ আঠালো কোষ থাকে। শিকার স্পর্শ করলেই আঠালো পদার্থ নিঃসৃত করে শিকারকে আটকে ফেলে মুখে টেনে নেয়।",
        "references": [
          "ref-hickman-2020"
        ]
      },
      {
        "key": "bioluminescence_ecology",
        "titleEn": "4. Bioluminescence & Pelagic Food Web Dynamics",
        "titleBn": "৪. জৈব-আলোক ও সামুদ্রিক খাদ্যজাল",
        "order": 4,
        "contentEn": "Nearly all ctenophores exhibit green or blue bioluminescence via calcium-activated photoproteins in meridian canals. They are voracious predators of plankton and can rapidly bloom, exerting top-down control on zooplankton populations in coastal and pelagic marine waters.",
        "contentBn": "অধিকাংশ টেনোফোরা সমুদ্রের গভীরে নীল বা সবুজ রঙের আলো বিচ্ছুরণ বা বায়োলুমিনেসেন্স ঘটায়। এরা সামুদ্রিক জুপ্ল্যাঙ্কটন ভক্ষণ করে মহাসাগরের খাদ্যজালের ভারসাম্য বজায় রাখে।",
        "references": [
          "ref-worms-2024"
        ]
      }
    ]
  },
  {
    "id": "phylum-annelida-marine",
    "rank": "phylum",
    "scientificName": "Annelida",
    "bengaliName": "অঙ্গুরীমাল / বলয়ী প্রাণী (কেঁচো, জোঁক ও পলিকিট)",
    "englishName": "Segmented Worms (Earthworms, Leeches & Polychaetes)",
    "parentTaxonId": "taxon-animalia",
    "category": "zoology",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Annelida",
        "nameBn": "অ্যানেলিডা"
      }
    ],
    "shortDescription": {
      "en": "Metamerically segmented coelomate worms possessing true metamerism, a fluid hydrostatic skeleton, and specialized chaetae. Encompasses terrestrial earthworms (Oligochaeta), freshwater and amphibious leeches (Hirudinea), and diverse marine bristle worms (Polychaeta).",
      "bn": "প্রকৃত মেটামেরিক খণ্ডায়ন, হাইড্রোস্ট্যাটিক কঙ্কাল ও কাইটিনযুক্ত কিটা বিশিষ্ট সিলোমেট প্রাণী। এর অন্তর্ভুক্ত স্থলজ কেঁচো (অলিগোকিটা), মিঠাপানির ও উভচর জোঁক (হিরুডিনিয়া) এবং সামুদ্রিক ব্রিসল কৃমি বা পলিকিট (পলিকিটা)।"
    },
    "diagnosticCharacteristics": {
      "en": "True coelomate bilaterally symmetrical body with serial metameric segmentation; fluid-filled coelomic compartments functioning as a hydrostatic skeleton; closed blood vascular system with hemoglobin or chlorocruorin; segmentally arranged paired metanephridia; presence of glandular clitellum in terrestrial/freshwater Clitellata (earthworms, leeches) or lateral parapodia with dense chaetae in marine Polychaeta; trochophore larva in ancestral marine lineages.",
      "bn": "দ্বিপার্শ্বীয় প্রতিসম খণ্ডায়িত দেহ; হাইড্রোস্ট্যাটিক কঙ্কাল হিসেবে কার্যকরী সিলোমিক গহ্বর; হিমোগ্লোবিন বা ক্লোরোক্রুওরিনযুক্ত রুদ্ধ রক্ত সংবহনতন্ত্র; প্রতিটি খণ্ডে জোড় মেটানেফ্রিডিয়া; স্থলজ ও স্বাদুপানির ক্লাইটেলাটায় (কেঁচো ও জোঁক) ক্লাইটেলাম এবং সামুদ্রিক পলিকিটায় প্যারাপোডিয়া ও কিটা উপস্থিত; সামুদ্রিক প্রজাতিতে ট্রোকোফোর লার্ভা দশা বিদ্যমান।"
    },
    "habitat": {
      "en": "Ubiquitous across terrestrial humus and agricultural soils (earthworms), freshwater ponds and marshlands (leeches, tubifex), as well as intertidal mudflats, estuaries, and deep marine benthic zones (polychaetes).",
      "bn": "স্থলজ উর্বর মাটি ও কৃষিজমি (কেঁচো), মিঠাপানির পুকুর ও জলাভূমি (জোঁক, টিউবিফেক্স) এবং সমুদ্র উপকূলীয় কাদাভূমি ও গভীর সামুদ্রিক তলদেশে (পলিকিট) বিস্তৃত।",
      "systems": [
        "terrestrial",
        "freshwater",
        "marine",
        "brackish"
      ]
    },
    "ecosystem": {
      "en": "Critical ecosystem engineers: terrestrial earthworms aerate soil and cycle organic matter (vermicompost); freshwater sludge worms (Tubifex) process benthic detritus; marine polychaetes drive sediment bioturbation and form foundational trophic links for coastal fisheries and shorebirds.",
      "bn": "পরিবেশের মূল প্রকৌশলী: স্থলজ কেঁচো মাটি উর্বর ও বায়ুচলাচল সচল রাখে; মিঠাপানির টিউবিফেক্স তলদেশের জৈব বর্জ্য প্রক্রিয়াজাত করে; সামুদ্রিক পলিকিট উপকূলীয় পলি নাড়াচাড়া করে পুষ্টি চক্র সচল রাখে এবং মাছ ও পাখির খাদ্য জোগায়।"
    },
    "feeding": {
      "en": "Highly diverse: detritivorous earthworms consuming soil and decaying organic litter; sanguivorous ectoparasitic leeches feeding on vertebrate blood; alongside carnivorous, suspension-feeding, and deposit-feeding marine polychaetes.",
      "bn": "বিচিত্র খাদ্যাভ্যাস: মাটিতে থাকা পচা জৈববস্তু ভক্ষণকারী কেঁচো; মেরুদণ্ডী প্রাণীর রক্ত চোষণকারী জোঁক; এবং সামুদ্রিক পলিকিটের শিকারী, ফিল্টার-ফিডার ও ডেপোজিট-ফিডার সদস্যবৃন্দ।"
    },
    "reproduction": {
      "en": "Hermaphroditic mutual copulation with cocoon formation via the glandular clitellum in earthworms and leeches; dioecious reproduction with epitoky and external fertilization producing planktotrophic trochophore larvae in marine polychaetes.",
      "bn": "কেঁচো ও জোঁকে উভলিঙ্গিক পারস্পরিক মিলন ও ক্লাইটেলাম দ্বারা কোকুন গঠন; সামুদ্রিক পলিকিটে একলিঙ্গ জনন, এপিটোকি ও ট্রোকোফোর লার্ভার মাধ্যমে বংশবিস্তার।"
    },
    "distribution": {
      "en": "Cosmopolitan across global terrestrial, freshwater, and marine ecosystems. In Bangladesh, verified in agricultural soils and vermicomposting beds (Eisenia fetida), urban rivers and aquaculture ponds (Tubifex tubifex), as well as Sundarbans and littoral mangrove mudflats.",
      "bn": "বিশ্বব্যাপী স্থলজ, মিঠাপানি ও সামুদ্রিক সকল বাস্তুতন্ত্রে বিদ্যমান। বাংলাদেশে কৃষিজমি ও ভার্মিকম্পোস্টে লাল কেঁচো (Eisenia fetida), নদী ও মৎস্য চাষে টিউবিফেক্স (Tubifex tubifex) এবং সুন্দরবনের মোহনাজ কাদাভূমিতে এদের বিপুল বৈচিত্র্য উপস্থিত।"
    },
    "exampleSpeciesIds": [
      "sp-lumbricus-terrestris",
      "sp-eisenia-fetida",
      "sp-hirudo-medicinalis",
      "sp-tubifex-tubifex",
      "sp-sabella-spallanzanii",
      "sp-arenicola-marina",
      "sp-alitta-virens"
    ],
    "referenceIds": [
      "ref-worms-2024"
    ],
    "authoritySource": "World Polychaeta Database / Read & Fauchald (2024)",
    "verificationStatus": "published",
    "publishedStatus": true,
    "taxonId": "taxon-annelida-marine",
    "canonicalSlug": "annelida",
    "sections": [
      {
        "key": "classification",
        "titleEn": "1. Classification & Metameric Segmentation",
        "titleBn": "১. শ্রেণীবিন্যাস ও মেটামেরিক খণ্ডায়ন",
        "order": 1,
        "contentEn": "Phylum Annelida (Lamarck, 1809) comprises triploblastic, coelomate lophotrochozoans characterized by true metameric segmentation. The cylindrical body is divided externally into linear series of rings and internally partitioned by transverse intersegmental septa, allowing localized muscular control.",
        "contentBn": "পর্ব অ্যানেলিডা (Lamarck, 1809) হলো খণ্ডায়িত বলয়ী প্রাণী। এদের দেহ বাইরে অসংখ্য আংটির মতো খণ্ডে এবং ভেতরে অনুপ্রস্থ পর্দা বা সেপটা দ্বারা বিভক্ত, যাকে প্রকৃত মেটামেরিজম বলা হয়।",
        "references": [
          "ref-ruppert-2004"
        ]
      },
      {
        "key": "hydrostatic_skeleton",
        "titleEn": "2. Hydrostatic Skeleton & Muscular Locomotion",
        "titleBn": "২. হাইড্রোস্ট্যাটিক কঙ্কাল ও পেশিবহুল চলন",
        "order": 2,
        "contentEn": "Each segment contains a coelomic fluid chamber acting as an incompressibility hydrostatic skeleton. Alternating peristaltic contractions of circular and longitudinal muscles, assisted by chitinous bristles (setae/chaetae) or marine fleshy flaps (parapodia), drive burrowing and swimming.",
        "contentBn": "সিলোমের তরল হাইড্রোস্ট্যাটিক কঙ্কাল হিসেবে কাজ করে। বৃত্তাকার ও অনুদৈর্ঘ্য পেশির পর্যায়ক্রমিক সংকোচন এবং কাইটিনের তৈরি সিটি (Setae) বা প্যারাপোডিয়ার সাহায্যে এরা মাটিতে গর্ত করে বা জলে সাঁতার কাটে।",
        "references": [
          "ref-hickman-2020"
        ]
      },
      {
        "key": "circulation_excretion",
        "titleEn": "3. Closed Blood Vascular System & Metanephridia",
        "titleBn": "৩. রুদ্ধ রক্ত সংবহন ও মেটানেফ্রিডিয়া রেচন",
        "order": 3,
        "contentEn": "Annelids possess a closed circulatory system with dorsal and ventral longitudinal vessels connected by lateral aortic arches ('hearts'). Blood contains respiratory pigments such as hemoglobin or chlorocruorin. Excretion is handled by segmentally paired metanephridia filtering coelomic waste via ciliated nephrostomes.",
        "contentBn": "অ্যানেলিডার সংবহন সম্পূর্ণ রুদ্ধ প্রকৃতির; এদের রক্তে হিমোগ্লোবিন বা ক্লোরোক্রুওরিন দ্রবীভূত থাকে। প্রতিটি খণ্ডে একজোড়া করে সিলিয়াযুক্ত মেটানেফ্রিডিয়া থাকে যা দেহ থেকে রেচন বর্জ্য নিষ্কাশন করে।",
        "references": [
          "ref-ruppert-2004"
        ]
      },
      {
        "key": "classes_ecological",
        "titleEn": "4. Major Classes, Trochophore Larva & Ecological Importance",
        "titleBn": "৪. প্রধান শ্রেণীসমূহ, ট্রোকোফোর লার্ভা ও পরিবেশগত গুরুত্ব",
        "order": 4,
        "contentEn": "Class Polychaeta (marine bristle worms with parapodia and swimming trochophore larvae); Class Clitellata: Oligochaeta (earthworms) and Hirudinea (leeches). Annelids perform vital sediment bioturbation in mangrove soils and marine coasts, facilitating nutrient cycling.",
        "contentBn": "প্রধান শ্রেণী: পলিকিটা (সামুদ্রিক ব্রিসল ওয়ার্ম ও ট্রোকোফোর লার্ভা), অলিগোকিটা (কেঁচো), এবং হিরুডিনিয়া (জোঁক)। সুন্দরবনের ম্যানগ্রোভ মাটিতে কেঁচো ও সামুদ্রিক কৃমি মাটি বায়ুচলাচল ও পুষ্টি চক্রে মৌলিক ভূমিকা পালন করে।",
        "references": [
          "ref-worms-2024"
        ]
      }
    ]
  },
  {
    "id": "order-sirenia",
    "rank": "order",
    "scientificName": "Sirenia",
    "bengaliName": "সাইরেনিয়া (ডুগং ও সামুদ্রিক গাভী)",
    "englishName": "Sirenians (Dugongs & Manatees)",
    "parentTaxonId": "phylum-chordata-marine",
    "category": "marine_non_fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Mammalia",
        "nameBn": "স্তন্যপায়ী"
      },
      {
        "rank": "order",
        "name": "Sirenia",
        "nameBn": "সাইরেনিয়া"
      }
    ],
    "shortDescription": {
      "en": "Large, fully aquatic, obligate herbivorous marine and estuarine mammals with fusiform bodies, paddle-shaped forelimbs, horizontal flattened tail flukes, and prehensile muscular lips specialized for grazing seagrass meadows.",
      "bn": "বৃহৎ আকৃতির সম্পূর্ণ জলজ নিরামিষাশী স্তন্যপায়ী প্রাণী যাদের মাকু আকৃতির দেহ, প্যাডেলের মতো অগ্রপদ, অনুভূমিক পুচ্ছ ফ্লুক এবং সমুদ্রের ঘাস (সীগ্রাস) খাওয়ার জন্য বিশেষায়িত সংবেদনশীল ঠোঁট রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Fusiform hydrodynamic body lacking hindlimbs; horizontal tail fluke (crescent-notched in Dugongidae, paddle-shaped rounded in Trichechidae); dense pachyosteosclerotic (heavy, solid) ribs and skeleton functioning as natural ballast for bottom grazing; downturned muscular prehensile snout; continuous molar progression or horny replacement pads; sparse bristles over thick wrinkled skin.",
      "bn": "পাখনাযুক্ত লেজ এবং পশ্চাৎপদহীন হাইড্রোডাইনামিক দেহ; ভারী ও নিরেট হাড়যুক্ত কঙ্কাল (প্যাকিওস্টিওস্ক্লেরোসিস) যা পানির নিচে ডুবন্ত অবস্থায় সীগ্রাস চরে খেতে ব্যালাস্ট হিসেবে কাজ করে; নিম্নমুখী সংবেদনশীল ঠোঁট; পুরু লোমহীন ত্বক।"
    },
    "habitat": {
      "en": "Shallow sheltered warm-water tropical coastal bays, seagrass meadows, lagoons, and estuarine mangrove rivers.",
      "bn": "উষ্ণমণ্ডলীয় অগভীর উপকূলীয় উপসাগর, সীগ্রাস প্রান্তর, উপহ্রদ এবং ম্যানগ্রোভ মোহনা।",
      "systems": [
        "marine",
        "brackish"
      ]
    },
    "ecosystem": {
      "en": "Primary mega-herbivores maintaining the structural productivity, nutrient cycling, and species diversity of nearshore seagrass ecosystems.",
      "bn": "উপকূলীয় সীগ্রাস বাস্তুতন্ত্রের প্রধান তৃণভোজী প্রাণী যা সমুদ্রের তলদেশের ঘাস খেয়ে বাস্তুতন্ত্রের সজীবতা ও পুষ্টি চক্র বজায় রাখে।"
    },
    "feeding": {
      "en": "Obligate benthic herbivores grazing rhizomes and leaves of marine seagrasses (Halophila, Cymodocea, Enhalus) and estuarine vegetation.",
      "bn": "সম্পূর্ণ তৃণভোজী; সমুদ্রের তলদেশের সীগ্রাস ও জলজ উদ্ভিদের কচি পাতা ও মূল চিবিয়ে খায়।"
    },
    "reproduction": {
      "en": "Slow reproductive rate; 12–14 months gestation yielding a single precocial calf nurtured with axillary mammary glands for up to two years.",
      "bn": "ধীরগতির প্রজনন হার; ১২-১৪ মাস গর্ভধারণের পর একটিমাত্র বাচ্চা প্রসব করে এবং প্রায় দুই বছর বুকের দুধ খাইয়ে বড় করে।"
    },
    "distribution": {
      "en": "Global tropical/subtropical Indo-Pacific and Atlantic coastal basins. In Bangladesh waters, unverified historical records along Saint Martin's Island seagrass flats; 0 verified voucher records currently published in BiotaElite.",
      "bn": "ইন্দো-প্যাসিফিক ও আটলান্টিক মহাসাগরের ক্রান্তীয় অঞ্চলে বিস্তৃত। বাংলাদেশের সেন্ট মার্টিন ও দক্ষিণ-পূর্ব উপকূলে ঐতিহাসিক অনানুষ্ঠানিক পর্যবেক্ষণ থাকলেও বর্তমানে ডাটাবেসে ০টি প্রামাণ্য রেকর্ড রয়েছে।"
    },
    "importantFamilies": [
      {
        "name": "Dugongidae",
        "commonEn": "Dugongs",
        "commonBn": "ডুগং গোত্র",
        "diagnosticEn": "Marine herbivores with fluked crescent tails and tusks in adult males.",
        "diagnosticBn": "কাচির মতো দ্বি-খণ্ডিত লেজযুক্ত সম্পূর্ণ সামুদ্রিক ডুগং।"
      }
    ],
    "exampleSpeciesIds": [
      "sp-dugong-dugon"
    ],
    "referenceIds": [
      "ref-worms-2024"
    ],
    "authoritySource": "IUCN Sirenia Specialist Group / Marsh et al. (2011)",
    "verificationStatus": "published",
    "publishedStatus": true,
    "taxonId": "taxon-sirenia"
  },
  {
    "id": "order-pinnipedia",
    "rank": "suborder",
    "scientificName": "Pinnipedia",
    "bengaliName": "পিন্নিপেডিয়া (সিল ও সিন্ধুঘোটক)",
    "englishName": "Pinnipeds (Seals, Sea Lions & Walruses)",
    "parentTaxonId": "taxon-carnivora",
    "category": "marine_non_fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Mammalia",
        "nameBn": "স্তন্যপায়ী"
      },
      {
        "rank": "order",
        "name": "Carnivora",
        "nameBn": "মাংসাশী বর্গ"
      },
      {
        "rank": "suborder",
        "name": "Pinnipedia",
        "nameBn": "পিন্নিপেডিয়া"
      }
    ],
    "shortDescription": {
      "en": "Semi-aquatic, fin-footed carnivorous marine mammals insulated by dense fur or thick vascularized subcutaneous blubber, adapted for deep diving foraging while retaining terrestrial or pack-ice haul-outs for breeding.",
      "bn": "পাখনাযুক্ত পদধারী আংশিক জলজ শিকারী সামুদ্রিক স্তন্যপায়ী প্রাণী যাদের দেহ পুরু চর্বি (ব্লাবার) ও লোমে আবৃত; সাগরে দক্ষ শিকারী হলেও প্রজনন ও বিশ্রামের জন্য সৈকত বা মেরু বরফে উঠে আসে।"
    },
    "diagnosticCharacteristics": {
      "en": "Fusiform streamlined body; limbs modified into paddle-like flippers (pectoral foreflippers and pelvic hindflippers); dense blubber layer ensuring thermal insulation in sub-zero waters; large eyes adapted for low-light underwater vision; sensitive mystacial vibrissae detecting hydrodynamic prey trails; terrestrial or ice haul-out for parturition and molting.",
      "bn": "মাকু আকৃতির মসৃণ দেহ; সাঁতারের উপযোগী চারপায়ে প্যাডেলের মতো ফ্লিপার; বরফশীতল পানিতে উষ্ণতা রক্ষায় ত্বকের নিচে পুরু ব্লাবার স্তর; পানির নিচে দেখার উপযোগী বড় চোখ; শিকারের গতিবিধি শনাক্তে সংবেদনশীল গোঁফ।"
    },
    "habitat": {
      "en": "Cold temperate, sub-polar, and polar marine oceans, coastal rocky shores, pack ice shelves, and upwelling marine ecosystems.",
      "bn": "শীতল নাতিশীতোষ্ণ, উপ-মেরু ও মেরু সামুদ্রিক অঞ্চল, বরফাচ্ছাদিত সমুদ্র এবং পাথুরে উপকূল।",
      "systems": [
        "marine"
      ]
    },
    "ecosystem": {
      "en": "High-trophic-level marine predators feeding on pelagic and demersal teleosts, squids, and krill, exerting top-down regulation on marine forage species.",
      "bn": "উচ্চ পুষ্টিস্তরের শীর্ষ শিকারী যা সামুদ্রিক মাছ, স্কুইড ও ক্রিল শিকারের মাধ্যমে সাগরের খাদ্যশৃঙ্খল নিয়ন্ত্রণ করে।"
    },
    "feeding": {
      "en": "Active carnivorous suction or raptorial feeders consuming marine fishes, cephalopods, and benthic molluscs; crabeater seals filter krill through multi-lobed postcanine teeth.",
      "bn": "মাছ, স্কুইড ও মোলাস্ক শিকারী মাংসাশী; ক্রিল ও কাঁকড়া শিকারের জন্য বিশেষ দাঁতের গঠন থাকে।"
    },
    "reproduction": {
      "en": "Polygynous or monogamous annual breeding seasons on land or ice floes; delayed embryonic implantation; single pup nursed on ultra-rich milk (up to 50% fat content).",
      "bn": "স্থলে বা মেরু বরফে নির্দিষ্ট প্রজনন মৌসুমে একটি করে বাচ্চা প্রসব; মা সিল ৫০% ফ্যাটসমৃদ্ধ ঘন দুধ খাইয়ে দ্রুত শাবক বড় করে।"
    },
    "distribution": {
      "en": "Global distribution concentrated in Arctic, Antarctic, sub-polar, and temperate upwelling marine waters. Non-native to tropical waters of Bangladesh; 0 verified records in Bangladesh.",
      "bn": "বিশ্বজুড়ে মূলত সুমেরু, কুমেরু ও শীতল সামুদ্রিক অঞ্চলে বিস্তৃত। ক্রান্তীয় অঞ্চলে অনুপস্থিত; বাংলাদেশে বর্তমানে ০টি যাচাইকৃত রেকর্ড রয়েছে।"
    },
    "importantFamilies": [
      {
        "name": "Phocidae",
        "commonEn": "True Seals (Earless Seals)",
        "commonBn": "প্রকৃত সিল গোত্র",
        "diagnosticEn": "Internal ears, hindflippers extended backward for pelvic sculling propulsion.",
        "diagnosticBn": "বহিঃকর্ণহীন, পেছনের ফ্লিপার নেড়ে সাঁতার কাটা সিল।"
      },
      {
        "name": "Otariidae",
        "commonEn": "Eared Seals (Sea Lions & Fur Seals)",
        "commonBn": "কর্ণযুক্ত সিল ও সি লায়ন",
        "diagnosticEn": "External pinnae, agile terrestrial locomotion rotating hindflippers forward.",
        "diagnosticBn": "ক্ষুদ্র বহিঃকর্ণযুক্ত এবং সামনের ফ্লিপার দিয়ে শক্তিশালী সাঁতারু।"
      }
    ],
    "exampleSpeciesIds": [
      "sp-phoca-vitulina"
    ],
    "referenceIds": [
      "ref-mdd-2024",
      "ref-worms-2024"
    ],
    "authoritySource": "Society for Marine Mammalogy / Committee on Taxonomy (2024)",
    "verificationStatus": "published",
    "publishedStatus": true,
    "taxonId": "taxon-pinnipedia"
  },
  {
    "id": "order-chelonioidea",
    "rank": "superfamily",
    "scientificName": "Chelonioidea",
    "bengaliName": "সামুদ্রিক কাছিম (কিলোনিয়য়েডিয়া)",
    "englishName": "Sea Turtles",
    "parentTaxonId": "taxon-testudines",
    "category": "marine_non_fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Reptilia",
        "nameBn": "সরীসৃপ"
      },
      {
        "rank": "order",
        "name": "Testudines",
        "nameBn": "কাছিম বর্গ"
      },
      {
        "rank": "superfamily",
        "name": "Chelonioidea",
        "nameBn": "সামুদ্রিক কাছিম অধিগৌত্র"
      }
    ],
    "shortDescription": {
      "en": "Ancient air-breathing marine reptiles with hydrodynamically flattened shells, non-retractile heads, and paddle-shaped flippers, performing trans-oceanic migrations between open pelagic feeding grounds and natal sandy nesting beaches.",
      "bn": "প্রাচীন জলজ সরীসৃপ যাদের দেহ সাঁতারের উপযোগী চ্যাপ্টা খোলস দ্বারা আবৃত, খোলসের ভেতর মাথা ও পা ঢুকিয়ে নিতে পারে না এবং অগ্রপদ দীর্ঘ সাঁতারু ফ্লিপারে রূপান্তরিত; এরা দূর মহাসাগর পাড়ি দিয়ে নির্দিষ্ট বালুকাময় সৈকতে ডিম পাড়তে আসে।"
    },
    "diagnosticCharacteristics": {
      "en": "Streamlined carapace (hard bony scutes in Cheloniidae; leathery skin with longitudinal ridges over osteoderm mosaic in Dermochelyidae); limbs transformed into rigid wing-like anterior swimming flippers and posterior steering rudders; head and flippers incapable of retraction into shell; hyper-osmotic salt excretion through hypertrophied orbital lachrymal glands (crying salt); geomagnetic navigation sense.",
      "bn": "হাইড্রোডাইনামিক খোলস; অগ্রপদ শক্তিশালী সাঁতারের ডানায় রূপান্তরিত; খোলসের ভেতরে মাথা ও পা সংকোচন করা যায় না; চোখের পেছনে বিশেষ লবণ-নিষ্কাশনকারী গ্রন্থি থাকে (লবণাক্ত অশ্রু বিসর্জন); ভূ-চুম্বকত্ব ব্যবহার করে দিক নির্ণয় করতে পারে।"
    },
    "habitat": {
      "en": "Pelagic open ocean, coral reefs, coastal seagrass meadows, mangrove tidal flats, and sandy supratidal nesting beaches.",
      "bn": "উন্মুক্ত মহাসাগর, প্রবাল প্রাচীর, সীগ্রাস প্রান্তর এবং ডিম পাড়ার উপযোগী নির্জন বালুকাময় সমুদ্র সৈকত।",
      "systems": [
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Keystone marine reptiles grazing seagrass beds (Green turtles), controlling jellyfish blooms (Leatherback turtles), and transferring oceanic nutrients into sandy beach dune ecosystems via egg clutches.",
      "bn": "সীগ্রাস ছেঁটে সুস্থ রাখা, ক্ষতিকর জেলিফিশের আধিক্য দমন এবং সৈকতে ডিমের মাধ্যমে সামুদ্রিক পুষ্টি ডাঙায় সরবরাহ করে অত্যন্ত গুরুত্বপূর্ণ ভূমিকা রাখে।"
    },
    "feeding": {
      "en": "Diet ranges from obligate herbivory on seagrasses and algae (Chelonia mydas) to specialized gelatinous carnivory on jellyfish (Dermochelys coriacea) and hard-shelled molluscs and crabs (Caretta caretta).",
      "bn": "প্রজাতিভেদে সীগ্রাস ও শৈবাল (সবুজ কাছিম), জেলিফিশ (লেদারব্যাক) অথবা শক্ত খোলসযুক্ত শামুক ও কাঁকড়া ভক্ষণ করে।"
    },
    "reproduction": {
      "en": "Internal fertilization at sea; philopatric females haul out at night on natal sandy beaches to excavate nest pits, laying 80–120 eggs; temperature-dependent sex determination (TSD).",
      "bn": "সমুদ্রে মিলন; নিশাচর স্ত্রী কাছিম সৈকতে উঠে বালু খুঁড়ে ৮০-১২০টি ডিম পেড়ে আবার সাগরে ফিরে যায়; বালির তাপমাত্রার ওপর নির্ভর করে শাবকের লিঙ্গ নির্ধারিত হয়।"
    },
    "distribution": {
      "en": "Circumglobal distribution across tropical and subtropical oceans. In Bangladesh, verified nesting occurs on Saint Martin's Island, Sonadia Island, and Cox's Bazar/Teknaf beaches (Olive Ridley Lepidochelys olivacea, Green turtle Chelonia mydas); multiple voucher species catalogued in database.",
      "bn": "বিশ্বের সকল ক্রান্তীয় ও উষ্ণমণ্ডলীয় সমুদ্রে বিস্তৃত। বাংলাদেশে সেন্ট মার্টিন দ্বীপ, সোনাদিয়া দ্বীপ ও কক্সবাজার সৈকতে অলিভ রিডলি ও সবুজ কাছিমের ডিম পাড়ার ক্ষেত্র রয়েছে।"
    },
    "importantFamilies": [
      {
        "name": "Cheloniidae",
        "commonEn": "Hard-shelled Sea Turtles",
        "commonBn": "কঠিন খোলসযুক্ত সামুদ্রিক কাছিম",
        "diagnosticEn": "Bony carapace covered with keratinous scutes, 1–2 claws on flippers.",
        "diagnosticBn": "কেরাটিনের শক্ত আঁইশযুক্ত খোলসধারী সামুদ্রিক কাছিম।"
      },
      {
        "name": "Dermochelyidae",
        "commonEn": "Leatherback Sea Turtles",
        "commonBn": "লেদারব্যাক কাছিম গোত্র",
        "diagnosticEn": "Gigantic sea turtle lacking hard bony shell, covered by leathery skin with 7 longitudinal dorsal ridges.",
        "diagnosticBn": "বিশাল আকারের খোলসহীন কাছিম যার পিঠে ৭টি সুস্পষ্ট লম্বালম্বি শির থাকে।"
      }
    ],
    "exampleSpeciesIds": [
      "sp-chelonia-mydas",
      "sp-lepidochelys-olivacea"
    ],
    "referenceIds": [
      "ref-iucn-mtsg-2021",
      "ref-reptile-database-2024",
      "ref-worms-2024"
    ],
    "authoritySource": "IUCN SSC Marine Turtle Specialist Group / Rhodin et al. (2021)",
    "verificationStatus": "published",
    "publishedStatus": true,
    "taxonId": "taxon-chelonioidea"
  },
  {
    "id": "order-hydrophiinae",
    "rank": "subfamily",
    "scientificName": "Hydrophiinae",
    "bengaliName": "সামুদ্রিক সাপ (হাইড্রোফাইনি)",
    "englishName": "True Sea Snakes",
    "parentTaxonId": "taxon-elapidae",
    "category": "marine_non_fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Reptilia",
        "nameBn": "সরীসৃপ"
      },
      {
        "rank": "order",
        "name": "Squamata",
        "nameBn": "আঁইশযুক্ত সরীসৃপ"
      },
      {
        "rank": "family",
        "name": "Elapidae",
        "nameBn": "এলাপিডি"
      },
      {
        "rank": "subfamily",
        "name": "Hydrophiinae",
        "nameBn": "হাইড্রোফাইনি"
      }
    ],
    "shortDescription": {
      "en": "Venomous, fully aquatic elapid snakes possessing laterally compressed, paddle-like tails, valvular nostrils, and specialized sublingual salt glands, permanently adapted to marine existence.",
      "bn": "বিষধর, সম্পূর্ণ জলজ সামুদ্রিক সাপ যাদের লেজ সাঁতারের হাল বা দাঁড়ির মতো দুই পাশে চ্যাপ্টা, নাসারন্ধ্রে পানিরোধী ভালভ এবং জিহ্বার নিচে অতিরিক্ত লবণ নিষ্কাশনের গ্রন্থি থাকে; এরা মাটিতে আসতে পারে না।"
    },
    "diagnosticCharacteristics": {
      "en": "Posterior body and tail laterally compressed into a powerful hydrodynamic sculling oar; valvular dorsal nostrils equipped with spongy tissue to prevent seawater entry; reduced ventral scales (belly scutes) in fully marine taxa; cutaneous gas exchange (up to 30% of oxygen absorbed directly through vascularized skin); sublingual salt glands; highly potent neurotoxic venoms.",
      "bn": "হাইড্রোডাইনামিক সাঁতারের জন্য দুই পাশ থেকে চ্যাপ্টা বৈঠার মতো পুচ্ছ; ডোরসাল ভালভযুক্ত নাসারন্ধ্র যা পানিতে ডুব দিলে বন্ধ হয়ে যায়; পেটের দিকের আঁইশ অত্যন্ত হ্রাসপ্রাপ্ত; ত্বকের মাধ্যমে পানিতে থাকা অক্সিজেন শোষণ করতে পারে; মারাত্মক নিউরোটক্সিক বিষযুক্ত।"
    },
    "habitat": {
      "en": "Tropical and subtropical shallow coastal waters, coral reefs, mangrove estuaries, and turbid coastal shelves down to 100 meters depth.",
      "bn": "উষ্ণমণ্ডলীয় অগভীর সমুদ্র, প্রবাল প্রাচীর, ম্যানগ্রোভ মোহনা এবং মহীসোপান।",
      "systems": [
        "marine",
        "brackish"
      ]
    },
    "ecosystem": {
      "en": "Specialized meso-predators controlling populations of small reef and benthic burrowing fishes (eels, gobies) in shallow marine coastal ecosystems.",
      "bn": "প্রবাল প্রাচীর ও উপকূলীয় কাদাভূমির বাইম, গোবি প্রভৃতি মাছ শিকার করে খাদ্যশৃঙ্খলের ভারসাম্য রক্ষা করে।"
    },
    "feeding": {
      "en": "Carnivorous predation using potent neurotoxic venom to instantly immobilize benthic teleosts, particularly anguilliform eels, gobies, and small fishes.",
      "bn": "মাংসাশী শিকারী; তীব্র নিউরোটক্সিক বিষ প্রয়োগ করে নিমেষেই মাছ অবশ করে গিলে ফেলে।"
    },
    "reproduction": {
      "en": "Almost entirely obligate viviparous (giving birth to live young directly in the sea without coming ashore); gestation 4–8 months; young born fully precocial with active swimming capability.",
      "bn": "প্রায় সম্পূর্ণ প্রজাতি জরায়ুজ (ডিম পাড়ার বদলে সরাসরি সাগরের পানিতে পূর্ণাঙ্গ জীবন্ত বাচ্চা প্রসব করে); বাচ্চা জন্মের সাথে সাথেই সাঁতার কাটতে পারে।"
    },
    "distribution": {
      "en": "Warm coastal waters of the Indian and Pacific Oceans (Indo-West Pacific). In Bangladesh, common in the northern Bay of Bengal, Sundarbans coastal fringes, and Saint Martin's Island (e.g., Hydrophis platurus, Hydrophis obscurus); voucher species catalogued in database.",
      "bn": "ভারত ও প্রশান্ত মহাসাগরের উষ্ণ উপকূলীয় অঞ্চলে বিস্তৃত। বাংলাদেশে বঙ্গোপসাগর ও সুন্দরবনের মোহনায় এদের কয়েকটি প্রজাতি বাস করে।"
    },
    "importantFamilies": [
      {
        "name": "Elapidae",
        "commonEn": "Marine Elapids (Hydrophiinae)",
        "commonBn": "এলাপিড সামুদ্রিক সাপ গোত্র",
        "diagnosticEn": "Fixed anterior hollow proteroglyphous fangs with potent post-synaptic neurotoxins.",
        "diagnosticBn": "সামনে নির্দিষ্ট ফাঁপা বিষদাঁতযুক্ত অতিমাত্রায় বিষধর সাপ।"
      }
    ],
    "exampleSpeciesIds": [
      "sp-hydrophis-platurus"
    ],
    "referenceIds": [
      "ref-reptile-database-2024",
      "ref-worms-2024"
    ],
    "authoritySource": "The Reptile Database (2024) / World Register of Marine Species (WoRMS)",
    "verificationStatus": "published",
    "publishedStatus": true,
    "taxonId": "taxon-hydrophiinae"
  },
  {
    "id": "order-hexanchiformes",
    "taxonId": "taxon-hexanchiformes",
    "rank": "order",
    "scientificName": "Hexanchiformes",
    "bengaliName": "হেক্সাঙ্কিফর্মিস (ছয় ও সাত ফুলকাজুক্ত হাঙ্গর)",
    "englishName": "Six-gill and Seven-gill Sharks / Cow Sharks",
    "parentTaxonId": "class-chondrichthyes",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Chondrichthyes",
        "nameBn": "তরুণাস্থিময় মাছ"
      },
      {
        "rank": "subclass",
        "name": "Elasmobranchii",
        "nameBn": "ইলাসমোব্রাঙ্কি"
      },
      {
        "rank": "order",
        "name": "Hexanchiformes",
        "nameBn": "হেক্সাঙ্কিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Primitive deep-water predatory sharks characterized by possessing 6 or 7 pairs of gill slits, a single spineless dorsal fin positioned far back, and amphistylic jaw suspension.",
      "bn": "আদিম গভীর সমুদ্রের শিকারী হাঙ্গর, যাদের ৬ বা ৭ জোড়া ফুলকা ছিদ্র, দেহের পেছনের দিকে অবস্থিত একক কাঁটাহীন পৃষ্ঠপাখনা এবং অ্যাম্ফিস্টাইলিক চোয়াল বিদ্যমান।"
    },
    "diagnosticCharacteristics": {
      "en": "Six or seven pairs of lateral gill slits opening separately; single spineless dorsal fin placed far back on caudal peduncle opposite anal fin; anal fin present; persistent notochord lacking fully ossified vertebral centra; lower jaw teeth comb-like with multiple cusps; amphistylic jaw attachment.",
      "bn": "৬ বা ৭ জোড়া পৃথক পার্শ্বীয় ফুলকা ছিদ্র; পায়ুপাখনার বিপরীতে পেছনের দিকে অবস্থিত একক কাঁটাহীন পৃষ্ঠপাখনা; পায়ুপাখনা উপস্থিত; অসম্পূর্ণ কশেরুকাযুক্ত স্থায়ী নটোকর্ড; নিচের চোয়ালে চিরুনির মতো খাঁজযুক্ত বহু-চূড়াবিশিষ্ট দাঁত; আদিম চোয়াল সংযোগ বিদ্যমান।",
      "keyFeatures": {
        "en": [
          "Six or seven pairs of external branchial gill slits",
          "Single dorsal fin lacking spines, positioned far posteriorly",
          "Comb-like compressed teeth on lower jaw dental arcade",
          "Amphistylic primitive craniomandibular jaw suspension"
        ],
        "bn": [
          "৬ বা ৭ জোড়া বাহ্যিক ফুলকা ছিদ্র",
          "কাঁটাহীন একক পৃষ্ঠপাখনা দেহের পেছনের দিকে অবস্থিত",
          "নিচের চোয়ালে চিরুনিসদৃশ বহু খাঁজযুক্ত দাঁত",
          "আদিম অ্যাম্ফিস্টাইলিক করোটি-চোয়াল সংযোগ"
        ]
      }
    },
    "habitat": {
      "en": "Deep-sea bathyal continental shelves, upper continental slopes, submarine canyons, and cold deep oceanic waters (90–2,500 m depth).",
      "bn": "গভীর সমুদ্রের মহীসোপান, মহীঢাল, গভীর সাবমেরিন গিরিখাত এবং শীতল গভীর মহাসাগরীয় অঞ্চল (৯০–২,৫০০ মিটার গভীরতায়)।",
      "systems": [
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Apex and upper-trophic benthic/benthopelagic deep-sea predators regulating populations of deep-water teleosts, squaloid sharks, rays, and cephalopods.",
      "bn": "গভীর সমুদ্রের তলদেশের শীর্ষ শিকারী প্রাণী যারা গভীর পানির মাছ, হাঙ্গর, শাপলাপাতা মাছ ও সেফালোপডের সংখ্যা নিয়ন্ত্রণ করে।"
    },
    "feeding": {
      "en": "Carnivorous generalist macropredators, feeding on deep-sea bony fishes, smaller elasmobranchs, squids, crabs, and scavenging whale carcasses.",
      "bn": "মাংসাশী শিকারী; গভীর সমুদ্রের অস্থিময় মাছ, ছোট হাঙ্গর, স্কুইড, কাঁকড়া এবং মৃত তিমির দেহাবশেষ ভক্ষণ করে।"
    },
    "reproduction": {
      "en": "Aplacental viviparous (ovoviviparous) with large litters ranging from 20 up to over 100 pups in large Hexanchus females after prolonged gestation.",
      "bn": "অ্যাওভোভিভিপ্যারাস বা অমরাহীন জরায়ুজ প্রজনন; দীর্ঘ গর্ভধারণ শেষে বড় স্ত্রী হাঙ্গর ২০ থেকে ১০০টিরও বেশি পূর্ণাঙ্গ বাচ্চা প্রসব করে।"
    },
    "distribution": {
      "en": "Circumglobal in tropical, subtropical, and temperate oceans along continental margins. Rare in deep northern Bay of Bengal slopes.",
      "bn": "বিশ্বের ক্রান্তীয়, উপক্রান্তীয় ও নাতিশীতোষ্ণ গভীর মহাসাগরে বিস্তৃত। বঙ্গোপসাগরের গভীর মহীঢাল অঞ্চলে কদাচিৎ দেখা মেলে।"
    },
    "importantFamilies": [
      {
        "name": "Hexanchidae",
        "commonEn": "Cow Sharks / Sixgill Sharks",
        "commonBn": "কাউ হাঙ্গর গোত্র",
        "diagnosticEn": "Six or seven gill slits, single dorsal fin, broad head with small eyes, comb-like multicuspid lower teeth.",
        "diagnosticBn": "৬ বা ৭টি ফুলকা ছিদ্র, একক পৃষ্ঠপাখনা, চওড়া মাথা ও ছোট চোখ, চিরুনিসদৃশ দাঁত।"
      },
      {
        "name": "Chlamydoselachidae",
        "commonEn": "Frilled Sharks",
        "commonBn": "ঝালরযুক্ত হাঙ্গর গোত্র",
        "diagnosticEn": "Eel-like body, six gill slits with frilly margins across throat, terminal mouth with three-pronged trident teeth.",
        "diagnosticBn": "সর্পিল দেহ, গলার নিচে ঝালরসদৃশ ৬ জোড়া ফুলকা ছিদ্র, ত্রিফলা দাঁতযুক্ত অগ্রবর্তী মুখ।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Notable genera: Hexanchus, Notorynchus, Heptranchias, and Chlamydoselachus. Verified binomials: Hexanchus griseus (Bonnaterre, 1788) and Chlamydoselachus anguineus Garman, 1884.",
      "bn": "উল্লেখযোগ্য গণ: Hexanchus, Notorynchus, Heptranchias এবং Chlamydoselachus। প্রামাণ্য নাম: Hexanchus griseus (Bonnaterre, 1788) এবং Chlamydoselachus anguineus Garman, 1884।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Bluntnose Sixgill Shark (Hexanchus griseus), Broadnose Sevengill Shark (Notorynchus cepedianus), Frilled Shark (Chlamydoselachus anguineus), and Sharpnose Sevengill Shark (Heptranchias perlo).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: ভোঁতামুখ সিক্সগিল হাঙ্গর (Hexanchus griseus), চওড়ামুখ সেভেনগিল হাঙ্গর (Notorynchus cepedianus), ঝালরযুক্ত হাঙ্গর (Chlamydoselachus anguineus) এবং চোখা সেভেনগিল হাঙ্গর (Heptranchias perlo)।"
    },
    "additionalInformation": {
      "en": "Hexanchiforms are evolutionary living fossils retaining ancestral skeletal and gill configurations from the Jurassic period. Because of their slow growth and deep-sea habitat, they are sensitive to commercial deep-water longline bycatch.",
      "bn": "হেক্সাঙ্কিফর্মিস জুরাসিক যুগের শারীরিক গঠন ধারণকারী জীবন্ত জীবাশ্ম। গভীর সমুদ্রে বাণিজ্যিক লং-লাইন মাছ ধরার ফাঁদে এরা প্রায়শই অনাকাঙ্ক্ষিতভাবে ধরা পড়ে।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Ebert & Stehmann (2013)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-heterodontiformes",
    "taxonId": "taxon-heterodontiformes",
    "rank": "order",
    "scientificName": "Heterodontiformes",
    "bengaliName": "হেটেরোডন্টিফর্মিস (ষাঁড়মাথা বা হর্ন হাঙ্গর)",
    "englishName": "Bullhead Sharks / Horn Sharks",
    "parentTaxonId": "class-chondrichthyes",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Chondrichthyes",
        "nameBn": "তরুণাস্থিময় মাছ"
      },
      {
        "rank": "subclass",
        "name": "Elasmobranchii",
        "nameBn": "ইলাসমোব্রাঙ্কি"
      },
      {
        "rank": "order",
        "name": "Heterodontiformes",
        "nameBn": "হেটেরোডন্টিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Benthic, blunt-headed sharks characterized by two dorsal fins bearing heavy calcified spines, prominent supraorbital ridges, heterodont dentition, and spiral egg cases.",
      "bn": "তলদেশীয় ভোঁতা মাথার হাঙ্গর, যাদের দুটি পৃষ্ঠপাখনাতেই শক্ত কাঁটা, চোখের উপরে স্পষ্ট শৈলশিরা, দ্বিরূপ দাঁত এবং সর্পিল ডিমের খোলস রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Five lateral gill slits; two dorsal fins each preceded by a stout mineralized spine; anal fin present; blunt pig-like snout with elevated crests above eyes; heterodont teeth with sharp grasping anterior teeth and broad flattened crushing molariform posterior plates; oviparous with corkscrew-flanged keratinous egg capsules.",
      "bn": "৫ জোড়া ফুলকা ছিদ্র; উভয় পৃষ্ঠপাখনার অগ্রভাগে শক্ত কাঁটা বিদ্যমান; পায়ুপাখনা উপস্থিত; চোখের উপরে উন্নত শৈলশিরাসহ ভোঁতা মুখ; সামনের দিকে সূক্ষ্ম কামড়ানোর দাঁত এবং পেছনের দিকে শক্ত খোলস ভাঙার চ্যাপ্টা পেষণ দাঁত; কর্কস্ক্রু বা স্ক্রু-সদৃশ ডিম পাড়ে।",
      "keyFeatures": {
        "en": [
          "Stout calcified spines preceding both dorsal fins",
          "Distinct heterodont dentition (pointed anterior, molariform posterior)",
          "Prominent supraorbital ridges crowning a blunt head",
          "Unique screw-shaped spiral-flanged egg cases"
        ],
        "bn": [
          "উভয় পৃষ্ঠপাখনার সামনে শক্ত খনিজায়িত কাঁটা",
          "দ্বিরূপ দাঁতের বিন্যাস (সামনে তীক্ষ্ণ, পেছনে পেষণকারী)",
          "মাথার উপর চোখের সুস্পষ্ট শৈলশিরা",
          "অনন্য স্ক্রু-সদৃশ সর্পিল ডিমের খোলস"
        ]
      }
    },
    "habitat": {
      "en": "Warm-temperate and tropical rocky reefs, kelp forests, and coastal continental shelves down to 275 meters depth.",
      "bn": "উষ্ণ-নাতিশীতোষ্ণ ও গ্রীষ্মমন্ডলীয় পাথুরে প্রবাল প্রাচীর, কেল্প বন এবং অগভীর মহীসোপান (২৭৫ মিটার গভীরতা পর্যন্ত)।",
      "systems": [
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Nocturnal durophagous predators specialized in consuming sea urchins, molluscs, and decapod crustaceans in reef microhabitats.",
      "bn": "নিশাচর খোলসভোজী শিকারী; প্রবাল প্রাচীর অঞ্চলে সামুদ্রিক আর্চিন, শামুক, ঝিনুক ও কাঁকড়ার সংখ্যা নিয়ন্ত্রণে গুরুত্বপূর্ণ ভূমিকা রাখে।"
    },
    "feeding": {
      "en": "Durophagous carnivores. Grasping hard-bodied prey with small anterior cusps and grinding with flattened posterior molar plates.",
      "bn": "শক্ত খোলসযুক্ত প্রাণীভোজী মাংসাশী। সামনের দাঁত দিয়ে শিকার ধরে পেছনের চ্যাপ্টা পেষণ দাঁত দিয়ে গুঁড়ো করে।"
    },
    "reproduction": {
      "en": "Oviparous. Females deposit tough, auger-like spiral egg cases into rock crevices using their mouths to wedge them securely.",
      "bn": "ডিম্বপ্রসবকারী। স্ত্রী হাঙ্গর মুখ দিয়ে স্ক্রু-আকৃতির শক্ত ডিমের খোলস পাথরের খাঁজে নিরাপদে গেঁথে রাখে।"
    },
    "distribution": {
      "en": "Pacific and Western Indian Ocean continental shelves. Absent in the Atlantic Ocean and northern Bay of Bengal coastal waters.",
      "bn": "প্রশান্ত ও পশ্চিম ভারত মহাসাগরের মহীসোপানে সীমাবদ্ধ। আটলান্টিক মহাসাগর ও বাংলাদেশের অগভীর উপকূলে অনুপস্থিত।"
    },
    "importantFamilies": [
      {
        "name": "Heterodontidae",
        "commonEn": "Bullhead Sharks / Horn Sharks",
        "commonBn": "ষাঁড়মাথা হাঙ্গর গোত্র",
        "diagnosticEn": "Single living family sharing all diagnostic ordinal characters, containing nine recognized species in genus Heterodontus.",
        "diagnosticBn": "একমাত্র জীবিত গোত্র; Heterodontus গণের ৯টি জীবিত প্রজাতি অন্তর্ভুক্ত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Single extant genus Heterodontus. Key binomials: Heterodontus portusjacksoni (Meyer, 1793), Heterodontus francisci (Girard, 1855), and Heterodontus zebra (Gray, 1831).",
      "bn": "একক জীবিত গণ Heterodontus। প্রধান প্রজাতি: Heterodontus portusjacksoni (Meyer, 1793), Heterodontus francisci (Girard, 1855) এবং Heterodontus zebra (Gray, 1831)।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Port Jackson Shark (Heterodontus portusjacksoni), Horn Shark (Heterodontus francisci), Zebra Bullhead Shark (Heterodontus zebra), and Crested Bullhead Shark (Heterodontus galeatus).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: পোর্ট জ্যাকসন হাঙ্গর (Heterodontus portusjacksoni), হর্ন হাঙ্গর (Heterodontus francisci), জেব্রা ষাঁড়মাথা হাঙ্গর (Heterodontus zebra) এবং ঝুটিযুক্ত ষাঁড়মাথা হাঙ্গর (Heterodontus galeatus)।"
    },
    "additionalInformation": {
      "en": "Heterodontus has a continuous fossil record extending back over 175 million years into the Early Jurassic, representing the most archaic living galeomorph lineage.",
      "bn": "হেটেরোডন্টাস ১৭৫ মিলিয়নেরও বেশি বছর ধরে আদি জুরাসিক কাল থেকে অপরিবর্তিত দৈহিক বৈশিষ্ট্যে বেঁচে থাকা গেলিওমর্ফ বংশধারা।"
    },
    "orders": [],
    "exampleSpeciesIds": [
      "sp-heterodontus-portusjacksoni"
    ],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Compagno (2001)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-echinorhiniformes",
    "taxonId": "taxon-echinorhiniformes",
    "rank": "order",
    "scientificName": "Echinorhiniformes",
    "bengaliName": "একাইনোরহাইনিফর্মিস (কাঁটা-হাঙ্গর বা ব্র্যাম্বল শার্ক)",
    "englishName": "Bramble Sharks",
    "parentTaxonId": "class-chondrichthyes",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Chondrichthyes",
        "nameBn": "তরুণাস্থিময় মাছ"
      },
      {
        "rank": "subclass",
        "name": "Elasmobranchii",
        "nameBn": "ইলাসমোব্রাঙ্কি"
      },
      {
        "rank": "order",
        "name": "Echinorhiniformes",
        "nameBn": "একাইনোরহাইনিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Sluggish, deep-sea benthic sharks characterized by large thorn-like dermal denticles, two small spineless dorsal fins placed far back, and total absence of an anal fin.",
      "bn": "গভীর সমুদ্রের অলস প্রকৃতির তলদেশীয় হাঙ্গর, যাদের ত্বকে বড় কাঁটার মতো টিউবারকল, দেহের পেছনের দিকে দুটি ক্ষুদ্র কাঁটাহীন পৃষ্ঠপাখনা এবং পায়ুপাখনার সম্পূর্ণ অনুপস্থিতি রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Body armed with irregularly scattered coarse, thorn-like denticles (bucklers) up to 15 mm wide; two small spineless dorsal fins set far back close to caudal fin; anal fin completely absent; five pairs of small gill slits; teeth identical in upper and lower jaws with very oblique blade-like cusps.",
      "bn": "ত্বকে অনিয়মিতভাবে ছড়ানো কাঁটাসদৃশ বড় শক্ত টিউবারকল (১৫ মিমি পর্যন্ত); পুচ্ছপাখনার কাছে অবস্থিত দুটি ক্ষুদ্র কাঁটাহীন পৃষ্ঠপাখনা; পায়ুপাখনা সম্পূর্ণ অনুপস্থিত; ৫ জোড়া ফুলকা ছিদ্র; উভয় চোয়ালে সমান ধারালো ব্লেড-সদৃশ দাঁত বিদ্যমান।",
      "keyFeatures": {
        "en": [
          "Dermal armor composed of enlarged thorny bucklers and denticles",
          "Complete absence of anal fin",
          "Two small spineless dorsal fins placed close to caudal fin",
          "Blade-like oblique teeth uniform in both jaws"
        ],
        "bn": [
          "ত্বকে কাঁটাযুক্ত বড় টিউবারকল বা ঢালসদৃশ আঁইশ",
          "পায়ুপাখনার সম্পূর্ণ অনুপস্থিতি",
          "পুচ্ছপাখনার কাছে অবস্থিত দুটি ক্ষুদ্র কাঁটাহীন পৃষ্ঠপাখনা",
          "উভয় চোয়ালেই একই ধরনের ধারালো বাঁকা দাঁত"
        ]
      }
    },
    "habitat": {
      "en": "Deep-water continental and insular shelves, upper continental slopes, and seamounts (100–1,100 m depth).",
      "bn": "গভীর সমুদ্রের মহীসোপান, মহীঢাল এবং সমুদ্রগর্ভস্থ পর্বতশ্রেণী (১০০–১,১০০ মিটার গভীরতায়)।",
      "systems": [
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Benthic deep-slope apex predators, preying on spiny dogfishes, small teleosts, octopuses, and crabs in dark bathyal zones.",
      "bn": "গভীর সমুদ্রের তলদেশের শিকারী প্রাণী; ডগফিশ হাঙ্গর, ছোট মাছ, অক্টোপাস ও কাঁকড়া শিকার করে পুষ্টি চক্র সচল রাখে।"
    },
    "feeding": {
      "en": "Suction and grasping carnivores, swallowing benthic bony fishes, small sharks, skates, and cephalopods whole with buccal expansion.",
      "bn": "মুখগহ্বর প্রসারিত করে চোহণ পদ্ধতিতে আস্ত মাছ, ছোট হাঙ্গর, শাপলাপাতা মাছ এবং সেফালোপড গিলে খায়।"
    },
    "reproduction": {
      "en": "Aplacental viviparous (ovoviviparous) with large litters of up to 52 pups produced after lengthy gestation periods.",
      "bn": "অমরাহীন জরায়ুজ প্রজনন; দীর্ঘ গর্ভধারণ শেষে একবারে ৫২টি পর্যন্ত পূর্ণাঙ্গ বাচ্চা প্রসব করে।"
    },
    "distribution": {
      "en": "Patchy circumglobal distribution in temperate and tropical oceans. Occurs rarely in deep offshore northern Indian Ocean trenches.",
      "bn": "বিশ্বের ক্রান্তীয় ও নাতিশীতোষ্ণ গভীর সাগরে বিচ্ছিন্নভাবে বিস্তৃত। ভারত মহাসাগরের গভীর খাদে কদাচিৎ পাওয়া যায়।"
    },
    "importantFamilies": [
      {
        "name": "Echinorhinidae",
        "commonEn": "Bramble Sharks",
        "commonBn": "কাঁটা-হাঙ্গর গোত্র",
        "diagnosticEn": "Thorn-like dermal denticles, spineless posterior dorsal fins, no anal fin; contains genus Echinorhinus.",
        "diagnosticBn": "কাঁটাসদৃশ ত্বকের গঠন, পেছনের দিকে কাঁটাহীন পৃষ্ঠপাখনা, পায়ুপাখনা অনুপস্থিত; Echinorhinus গণ অন্তর্ভুক্ত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Single extant genus Echinorhinus Blainville, 1816. Verified binomials: Echinorhinus brucus (Bonnaterre, 1788) and Echinorhinus cookei Pietschmann, 1928.",
      "bn": "একমাত্র জীবিত গণ Echinorhinus Blainville, 1816। প্রামাণ্য বৈজ্ঞানিক নাম: Echinorhinus brucus (Bonnaterre, 1788) এবং Echinorhinus cookei Pietschmann, 1928।"
    },
    "examplesSummary": {
      "en": "Two verified living representative species: Bramble Shark (Echinorhinus brucus) and Prickly Shark (Echinorhinus cookei).",
      "bn": "দুটি যাচাইকৃত জীবিত প্রামাণ্য প্রজাতি: কাঁটা-হাঙ্গর বা ব্র্যাম্বল শার্ক (Echinorhinus brucus) এবং প্রিকলি শার্ক (Echinorhinus cookei)।"
    },
    "additionalInformation": {
      "en": "Historically placed within Squaliformes, molecular phylogenetics (Naylor et al. 2012) and morphological audits in Eschmeyer (2026) establish Echinorhiniformes as an independent order basal to Squalomorphii.",
      "bn": "অতীতে এদের স্কোয়ালিফর্মিসের অন্তর্ভুক্ত ভাবা হলেও আধুনিক ফাইলোজেনোমিক্স ও এশমেয়ার (২০২৬) শ্রেণীবিন্যাসে এদের পৃথক স্বাধীন বর্গ হিসেবে প্রতিষ্ঠিত করা হয়েছে।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Naylor et al. (2012)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-pristiophoriformes",
    "taxonId": "taxon-pristiophoriformes",
    "rank": "order",
    "scientificName": "Pristiophoriformes",
    "bengaliName": "প্রিস্টিওফোরিফর্মিস (করাত হাঙ্গর বা শ শার্ক)",
    "englishName": "Sawsharks",
    "parentTaxonId": "class-chondrichthyes",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Chondrichthyes",
        "nameBn": "তরুণাস্থিময় মাছ"
      },
      {
        "rank": "subclass",
        "name": "Elasmobranchii",
        "nameBn": "ইলাসমোব্রাঙ্কি"
      },
      {
        "rank": "order",
        "name": "Pristiophoriformes",
        "nameBn": "প্রিস্টিওফোরিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Slender, bottom-dwelling sharks possessing an elongated blade-like rostrum edged with sharp lateral teeth, sensory barbels, and lateral gill slits.",
      "bn": "পাতলা তলদেশীয় হাঙ্গর, যাদের লম্বা ব্লেডের মতো করাতমুখ, সংবেদনশীল বার্বেল বা গোঁফ এবং মাথার দুই পাশে ফুলকা ছিদ্র রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Snout produced into an elongated, flattened blade (rostrum) armed laterally with sharp, alternating large and small teeth weakly embedded in cartilage; pair of long sensory barbels originating ventrally from middle of rostrum; five or six lateral gill slits located on sides of head anterior to pectoral fins; two spineless dorsal fins; anal fin completely absent.",
      "bn": "নাসিকা লম্বা চ্যাপ্টা ব্লেড বা করাতে রূপান্তরিত যার দুই পাশে অসমান তীক্ষ্ণ দাঁত বিদ্যমান; করাতমুখের মাঝখান থেকে এক জোড়া লম্বা সংবেদনশীল বার্বেল ঝুলন্ত; বক্ষপাখনার সামনে মাথার দুই পাশে ৫ বা ৬ জোড়া পার্শ্বীয় ফুলকা ছিদ্র; কাঁটাহীন দুটি পৃষ্ঠপাখনা; পায়ুপাখনা সম্পূর্ণ অনুপস্থিত।",
      "keyFeatures": {
        "en": [
          "Elongate rostral saw armed with alternating replacement teeth",
          "Pair of long sensory barbels midway along the ventral snout",
          "Lateral gill slits positioned on the neck (unlike ventral gill slits of sawfishes)",
          "Complete absence of anal fin"
        ],
        "bn": [
          "দুই পাশে তীক্ষ্ণ দাঁতযুক্ত লম্বা করাতসদৃশ মুখ",
          "করাতের অঙ্কীয়তলে এক জোড়া লম্বা সংবেদনশীল গোঁফ বা বার্বেল",
          "মাথার দুই পাশে পার্শ্বীয় ফুলকা ছিদ্র (করাত মাছের মতো পেটের নিচে নয়)",
          "পায়ুপাখনার সম্পূর্ণ অনুপস্থিতি"
        ]
      }
    },
    "habitat": {
      "en": "Continental and insular shelves and upper slopes, from shallow sandy coastal bays to bathyal depths of 900 meters.",
      "bn": "মহীসোপান ও মহীঢাল, অগভীর উপকূলীয় বালুকাময় উপসাগর থেকে ৯০০ মিটার গভীর সমুদ্র তলদেশ পর্যন্ত।",
      "systems": [
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Benthic predators using barbels and electroreceptive ampullae to detect infaunal organisms in soft sediments, disabling prey with rapid lateral rostral swipes.",
      "bn": "তলদেশীয় শিকারী; করাতের পাশের সংবেদনশীল অঙ্গ ও গোঁফ দিয়ে বালির নিচে লুকানো শিকার শনাক্ত করে এবং করাত দিয়ে আঘাত করে শিকার কাবু করে।"
    },
    "feeding": {
      "en": "Carnivorous, probing soft sediments for small schooling teleosts, squids, and bottom-dwelling decapod shrimps.",
      "bn": "মাংসাশী; নরম কাদামাটি ও বালিতে তল্লাশি চালিয়ে ছোট অস্থিময় মাছ, স্কুইড ও চিংড়ি শিকার করে।"
    },
    "reproduction": {
      "en": "Aplacental viviparous (yolk-sac viviparity) producing litters of 6 to 22 pups. The rostral teeth of embryos remain soft and folded under skin sheath until after birth to protect the mother.",
      "bn": "অমরাহীন জরায়ুজ প্রজনন; ৬ থেকে ২২টি বাচ্চা প্রসব করে। ভ্রূণাবস্থায় করাতের দাঁতগুলো নরম ত্বকের আবরণে মোড়ানো থাকে যাতে মায়ের প্রসবনালী ক্ষতিগ্রস্ত না হয়।"
    },
    "distribution": {
      "en": "Western Pacific, Indian Ocean, and Western Central Atlantic. Distinct from Batoidea sawfishes (Pristidae) which occur in coastal Bangladesh.",
      "bn": "পশ্চিম প্রশান্ত মহাসাগর, ভারত মহাসাগর ও পশ্চিম আটলান্টিক। বাংলাদেশের উপকূলে প্রাপ্ত প্রিস্টিস (করাত মাছ বা বাটোয়েড) থেকে এরা শারীরবৃত্তীয়ভাবে সম্পূর্ণ ভিন্ন।"
    },
    "importantFamilies": [
      {
        "name": "Pristiophoridae",
        "commonEn": "Sawsharks",
        "commonBn": "করাত হাঙ্গর গোত্র",
        "diagnosticEn": "Elongate tooth-edged rostrum with barbels, 5 or 6 lateral gill slits, no anal fin; contains genera Pristiophorus and Pliotrema.",
        "diagnosticBn": "গোঁফযুক্ত দাঁতাল করাতমুখ, ৫ বা ৬টি পার্শ্বীয় ফুলকা ছিদ্র, পায়ুপাখনা অনুপস্থিত; Pristiophorus ও Pliotrema গণ অন্তর্ভুক্ত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Genera: Pristiophorus Müller & Henle, 1837 and Pliotrema Regan, 1906. Key binomials: Pristiophorus cirratus (Latham, 1794) and Pliotrema warreni Regan, 1906.",
      "bn": "গণ: Pristiophorus Müller & Henle, 1837 এবং Pliotrema Regan, 1906। প্রধান নাম: Pristiophorus cirratus (Latham, 1794) এবং Pliotrema warreni Regan, 1906।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Longnose Sawshark (Pristiophorus cirratus), Sixgill Sawshark (Pliotrema warreni), Shortnose Sawshark (Pristiophorus nudipinnis), and Bahamas Sawshark (Pristiophorus schroederi).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: লংনোজ করাত হাঙ্গর (Pristiophorus cirratus), সিক্সগিল করাত হাঙ্গর (Pliotrema warreni), শর্টনোজ করাত হাঙ্গর (Pristiophorus nudipinnis) এবং বাহামা করাত হাঙ্গর (Pristiophorus schroederi)।"
    },
    "additionalInformation": {
      "en": "Sawsharks represent a striking example of convergent evolution with batoid sawfishes (Rhinopristiformes: Pristidae), but retain true lateral shark gill slits, a free head, and sensory barbels.",
      "bn": "করাত হাঙ্গর এবং করাত মাছ (Pristidae) অভিসারী বিবর্তনের চমৎকার নিদর্শন; তবে করাত হাঙ্গরের মাথার পাশে ফুলকা ছিদ্র ও গোঁফ থাকে, যা করাত মাছে থাকে না।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Ebert et al. (2021)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-squatiniformes",
    "taxonId": "taxon-squatiniformes",
    "rank": "order",
    "scientificName": "Squatiniformes",
    "bengaliName": "স্কোয়াটিনিফর্মিস (এঞ্জেল হাঙ্গর বা দেবদূত হাঙ্গর)",
    "englishName": "Angel Sharks / Monkfishes",
    "parentTaxonId": "class-chondrichthyes",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Chondrichthyes",
        "nameBn": "তরুণাস্থিময় মাছ"
      },
      {
        "rank": "subclass",
        "name": "Elasmobranchii",
        "nameBn": "ইলাসমোব্রাঙ্কি"
      },
      {
        "rank": "order",
        "name": "Squatiniformes",
        "nameBn": "স্কোয়াটিনিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Flattened, ray-like ambush predatory sharks with laterally expanded wing-like pectoral fins, terminal mouth, dorsal eyes, and lateral gill slits concealed in a pectoral cleft.",
      "bn": "চ্যাপ্টা শাপলাপাতা মাছের মতো দেখতে ওত পেতে থাকা শিকারী হাঙ্গর; যাদের পাখার মতো ছড়ানো বক্ষপাখনা, প্রান্তীয় মুখ এবং বক্ষপাখনার খাঁজে লুকানো পার্শ্বীয় ফুলকা ছিদ্র রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Body ray-like and dorsoventrally flattened; large expanded pectoral fins extending forward but free from sides of head (separated by a deep notch); five pairs of gill slits situated ventrolaterally within anterior pectoral notch; eyes and large spiracles dorsal; terminal wide mouth armed with sharp single-cusped conical teeth; two spineless dorsal fins placed far back on tail; anal fin absent; hypocercal caudal fin (lower lobe longer than upper).",
      "bn": "পৃষ্ঠ-অঙ্কীয়ভাবে চ্যাপ্টা দেহ; প্রশস্ত বক্ষপাখনা সামনের দিকে প্রসারিত হলেও মাথার সাথে জোড়া লাগানো নয়; বক্ষপাখনার গোড়ার খাঁজে ৫ জোড়া ফুলকা ছিদ্র অবস্থিত; চোখ ও বড় স্পাইরাকল মাথার উপরের পৃষ্ঠে; অগ্রবর্তী প্রশস্ত মুখে তীক্ষ্ণ দাঁত; লেজের দিকে দুটি ক্ষুদ্র কাঁটাহীন পৃষ্ঠপাখনা; পায়ুপাখনা অনুপস্থিত; হাইপোসার্কাল পুচ্ছপাখনা (নিচের খণ্ড উপরের চেয়ে বড়)।",
      "keyFeatures": {
        "en": [
          "Ray-like flattened body with pectoral fins detached from head",
          "Terminal mouth armed with sharp grasping cusps",
          "Hypocercal caudal fin with ventral lobe larger than dorsal lobe",
          "Five gill slits positioned in a lateral pectoral notch"
        ],
        "bn": [
          "মাথা থেকে পৃথক প্রশস্ত ডানাযুক্ত চ্যাপ্টা শরীর",
          "তীক্ষ্ণ দাঁতযুক্ত অগ্রবর্তী মুখগহ্বর",
          "হাইপোসার্কাল পুচ্ছপাখনা যার নিচের লোবটি উপরের চেয়ে বড়",
          "বক্ষপাখনার খাঁজের মধ্যে অবস্থিত ৫ জোড়া ফুলকা ছিদ্র"
        ]
      }
    },
    "habitat": {
      "en": "Coastal and continental shelf sandy or muddy substrates, continental slopes from shallow surf zones down to 1,300 meters.",
      "bn": "উপকূলীয় ও মহীসোপানের বালুকাময় বা কর্দমাক্ত তলদেশ, অগভীর উপকূল থেকে ১,৩০০ মিটার গভীর মহীঢাল পর্যন্ত।",
      "systems": [
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Crytic ambush macropredators, camouflaging beneath sediment to strike upward with explosive jaw protrusion at passing demersal fishes and cephalopods.",
      "bn": "ছদ্মবেশী শিকারী; বালির নিচে শরীর লুকিয়ে রেখে বিদ্যুৎ গতিতে মুখ হাঁ করে উপর দিয়ে যাওয়া মাছ ও স্কুইড শিকার করে।"
    },
    "feeding": {
      "en": "Piscivorous and benthic carnivores. Snapping up flatfishes, hakes, skates, crabs, and squids using rapid kinematic suction and piercing teeth.",
      "bn": "মাংসাশী ও তলদেশীয় মাছভোজী। চ্যাপ্টা মাছ, হেক, কাঁকড়া ও স্কুইড শিকার করে।"
    },
    "reproduction": {
      "en": "Aplacental viviparous (ovoviviparous) with litters ranging from 7 to 25 pups after a 8–10 month gestation.",
      "bn": "অমরাহীন জরায়ুজ প্রজনন; ৮-১০ মাসের গর্ভধারণের পর ৭ থেকে ২৫টি বাচ্চা প্রসব করে।"
    },
    "distribution": {
      "en": "Temperate, subtropical, and tropical coastal waters of the Atlantic, Pacific, and Indian Oceans. Extremely vulnerable to demersal bottom trawling.",
      "bn": "আটলান্টিক, প্রশান্ত ও ভারত মহাসাগরের উপকূলীয় জলসীমায় বিস্তৃত। তলদেশীয় ট্রলিংয়ের কারণে বিশ্বব্যাপী মহাবিপন্ন।"
    },
    "importantFamilies": [
      {
        "name": "Squatinidae",
        "commonEn": "Angel Sharks",
        "commonBn": "এঞ্জেল হাঙ্গর গোত্র",
        "diagnosticEn": "Single living family containing about 24 recognized species in genus Squatina, sharing all ordinal traits.",
        "diagnosticBn": "একমাত্র জীবিত গোত্র; Squatina গণের প্রায় ২৪টি প্রজাতি অন্তর্ভুক্ত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Single extant genus Squatina Duméril, 1806. Key binomials: Squatina squatina (Linnaeus, 1758), Squatina californica Ayres, 1859, and Squatina dumeril Lesueur, 1818.",
      "bn": "একক জীবিত গণ Squatina Duméril, 1806। প্রধান নাম: Squatina squatina (Linnaeus, 1758), Squatina californica Ayres, 1859 এবং Squatina dumeril Lesueur, 1818।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Angelshark (Squatina squatina), Pacific Angelshark (Squatina californica), Sand Devil (Squatina dumeril), and Sawback Angelshark (Squatina aculeata).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: এঞ্জেলশার্ক (Squatina squatina), প্যাসিফিক এঞ্জেলশার্ক (Squatina californica), স্যান্ড ডেভিল (Squatina dumeril) এবং সবেক এঞ্জেলশার্ক (Squatina aculeata)।"
    },
    "additionalInformation": {
      "en": "Squatina is morphologically intermediate between typical sharks and rays, but phylogenetically nested firmly within Squalomorphii based on cranioskeletal morphology and nuclear genomics.",
      "bn": "দৈহিক আকৃতিতে শাপলাপাতা মাছের মতো দেখালেও জিনতত্ত্ব ও করোটির গঠনে এরা স্কোয়ালোমরফ হাঙ্গরদের অংশ।"
    },
    "orders": [],
    "exampleSpeciesIds": [
      "sp-squatina-squatina"
    ],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Lawson et al. (2020)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-hiodontiformes",
    "taxonId": "taxon-hiodontiformes",
    "rank": "order",
    "scientificName": "Hiodontiformes",
    "bengaliName": "হায়োডন্টিফর্মিস (মুনিআই ও গোল্ডআই)",
    "englishName": "Mooneyes and Goldeyes",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিময় পাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Actinopteri",
        "nameBn": "অ্যাক্টিনোপ্টেরি"
      },
      {
        "rank": "infraclass",
        "name": "Teleostei",
        "nameBn": "টেলিয়স্ট"
      },
      {
        "rank": "order",
        "name": "Hiodontiformes",
        "nameBn": "হায়োডন্টিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Primitive freshwater osteoglossomorph teleosts of North America with glittering silvery compressed bodies, prominent eyes with a golden reflective tapetum, and heavily toothed tongue bones.",
      "bn": "উত্তর আমেরিকার আদিম মিঠাপানির অস্থি-জিহ্বাধারী মাছ; যাদের চকচকে রূপালী শরীর, সোনালী প্রতিফলকযুক্ত বড় চোখ এবং দাঁতযুক্ত জিহ্বাঅস্থি রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Laterally compressed silvery body with cycloid scales; large eyes equipped with a specialized reflective tapetum lucidum; well-developed dentition on parasphenoid and glossohyal tongue bone biting against parasphenoid roof; complete lateral line; dorsal fin set far back opposite long anal fin; no adipose fin; postcleithrum absent in pectoral girdle.",
      "bn": "পার্শ্বীয়ভাবে চ্যাপ্টা রূপালী দেহ ও সাইক্লয়েড আঁইশ; চোখে আলো প্রতিফলক টেপেটাম লুসিডাম সমৃদ্ধ বড় চোখ; শক্ত জিহ্বাঅস্থি ও তালুর হাড়ে তীক্ষ্ণ দাঁত; সম্পূর্ণ পার্শ্বরেখা; দীর্ঘ পায়ুপাখনার বিপরীতে পেছনের দিকে অবস্থিত পৃষ্ঠপাখনা; অ্যাডিপোজ পাখনা অনুপস্থিত।",
      "keyFeatures": {
        "en": [
          "Prominent golden eyes reflecting light via specialized tapetal retinal layer",
          "Biting mechanism formed between toothed tongue and parasphenoid roof",
          "Complete lateral line extending to base of forked caudal fin",
          "Silvery compressed body with keel-like belly margin"
        ],
        "bn": [
          "রেটিনায় আলো প্রতিফলক স্তরযুক্ত উজ্জ্বল সোনালী চোখ",
          "দাঁতযুক্ত জিহ্বা ও তালুর হাড়ের মধ্যে শিকার পিষ্ট করার অঙ্গ",
          "খাঁজযুক্ত পুচ্ছপাখনা পর্যন্ত বিস্তৃত সম্পূর্ণ পার্শ্বরেখা",
          "তলার দিকে নৌকার তলীর মতো সরু রূপালী শরীর"
        ]
      }
    },
    "habitat": {
      "en": "Turbid freshwater rivers, large sluggish lakes, riverine backwaters, and deep river channels in North America.",
      "bn": "উত্তর আমেরিকার ঘোলা নদী, শান্ত হ্রদ, নদীর বাঁক এবং গভীর নদীর মূল প্রবাহ।",
      "systems": [
        "freshwater"
      ]
    },
    "ecosystem": {
      "en": "Surface and midwater crepuscular predators feeding at dawn and dusk, adapted for foraging in dark, sediment-laden waters.",
      "bn": "ভোর ও সন্ধ্যার উপরিভাগের শিকারী মাছ; ঘোলা এবং পলিময় পানিতে দৃষ্টিসীমা বাড়িয়ে শিকার ধরতে অত্যন্ত পারদর্শী।"
    },
    "feeding": {
      "en": "Insectivorous and piscivorous carnivores, snapping up surface aquatic insects, terrestrial insects, small forage fishes, and crayfish.",
      "bn": "কীটপতঙ্গ ও ছোট মাছভোজী; পানির উপরিভাগের জলজ ও স্থলজ পোকা, ছোট মাছ ও ক্রেফিশ শিকার করে।"
    },
    "reproduction": {
      "en": "Potamodromous river spawners migrating upstream in spring to release buoyant semi-demersal eggs in turbulent river currents.",
      "bn": "বসন্তকালে ডিম ছাড়তে নদীর উজানে পরিযান করে এবং নদীর তীব্র স্রোতে ভাসমান ডিম ছড়ায়।"
    },
    "distribution": {
      "en": "Confined strictly to temperate North American river systems (Mississippi, Missouri, Hudson Bay, and Mackenzie basins). Strictly absent in Asia and Bangladesh.",
      "bn": "উত্তর আমেরিকার মিসিসিপি, মিসৌরি ও হাডসন বে নদী অববাহিকায় সীমাবদ্ধ। বাংলাদেশ ও এশিয়ার জলসীমায় সম্পূর্ণ অনুপস্থিত।"
    },
    "importantFamilies": [
      {
        "name": "Hiodontidae",
        "commonEn": "Mooneyes",
        "commonBn": "মুনিআই গোত্র",
        "diagnosticEn": "Contains single extant genus Hiodon with two living species, sharing all ordinal diagnostic features.",
        "diagnosticBn": "একমাত্র জীবিত গোত্র; দুটি জীবিত প্রজাতিসহ Hiodon গণ অন্তর্ভুক্ত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Single extant genus Hiodon Lesueur, 1818. Key binomials: Hiodon alosoides (Rafinesque, 1819) and Hiodon tergisus Lesueur, 1818.",
      "bn": "একক জীবিত গণ Hiodon Lesueur, 1818। প্রধান প্রজাতি: Hiodon alosoides (Rafinesque, 1819) এবং Hiodon tergisus Lesueur, 1818।"
    },
    "examplesSummary": {
      "en": "Two verified living representative species: Goldeye (Hiodon alosoides) and Mooneye (Hiodon tergisus).",
      "bn": "দুটি যাচাইকৃত জীবিত প্রামাণ্য প্রজাতি: গোল্ডআই (Hiodon alosoides) এবং মুনিআই (Hiodon tergisus)।"
    },
    "additionalInformation": {
      "en": "Hiodontiformes is the sister group to all other living Osteoglossomorpha (bonytongues). Their lineage diverged over 145 million years ago in the Late Jurassic.",
      "bn": "হায়োডন্টিফর্মিস অন্যান্য সকল জীবিত অস্থি-জিহ্বাধারীদের (Osteoglossomorpha) আদিমতম সহোদর গোষ্ঠী, যাদের উৎপত্তি ১৪৫ মিলিয়ন বছর আগে জুরাসিক যুগে।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Hilton (2002)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-elopiformes",
    "taxonId": "taxon-elopiformes",
    "rank": "order",
    "scientificName": "Elopiformes",
    "bengaliName": "ইলোপিফর্মিস (টারপন ও লেডিফিশ বা কান মাগুর)",
    "englishName": "Tarpons and Ladyfishes / Tenpounders",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিময় পাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Actinopteri",
        "nameBn": "অ্যাক্টিনোপ্টেরি"
      },
      {
        "rank": "infraclass",
        "name": "Teleostei",
        "nameBn": "টেলিয়স্ট"
      },
      {
        "rank": "order",
        "name": "Elopiformes",
        "nameBn": "ইলোপিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Primitive marine and estuarine predatory teleosts with silvery elongate bodies, transparent ribbon-like leptocephalus larvae, and a unique gular plate between lower jaw rami.",
      "bn": "আদিম সামুদ্রিক ও মোহনাজ রূপালী শিকারী মাছ, যাদের স্বচ্ছ ফিতার মতো লেপ্টোসেফালাস লার্ভা এবং নিচের চোয়ালের নিচে বিশেষ গুলার প্লেট বিদ্যমান।"
    },
    "diagnosticCharacteristics": {
      "en": "Elongate, silvery, compressed body with large cycloid scales; mouth large and terminal to superior with a distinct bony gular plate between lower jaws; high branchiostegal ray count (23–35); single dorsal fin; adipose eyelid prominent; caudal fin deeply forked; modified swimbladder capable of atmospheric air breathing; transparent ribbon-shaped leptocephalus larva with forked tail.",
      "bn": "লম্বাটে চ্যাপ্টা রূপালী শরীর ও বড় সাইক্লয়েড আঁইশ; নিচের চোয়ালের মাঝখানে স্পষ্ট অস্থিময় গুলার প্লেটযুক্ত বড় মুখ; প্রচুর শাখা-ফুলকা রশ্মি (২৩–৩৫টি); একক পৃষ্ঠপাখনা; স্পষ্ট অ্যাডিপোজ চোখের পাতা; গভীরভাবে খাঁজযুক্ত পুচ্ছপাখনা; পটকার সাহায্যে সরাসরি বাতাস থেকে শ্বাস নেওয়ার ক্ষমতা; পুচ্ছযুক্ত ফিতাসদৃশ লেপ্টোসেফালাস লার্ভা দশা বিদ্যমান।",
      "keyFeatures": {
        "en": [
          "Median bony gular plate situated between the lower jaw bones",
          "Vascularized physostomous swimbladder used for air-breathing in hypoxic waters",
          "Development via transparent ribbon-like leptocephalus larval metamorphosis",
          "Abundant branchiostegal rays (up to 35) and deeply forked caudal fin"
        ],
        "bn": [
          "নিচের চোয়ালের মধ্যস্থলে অবস্থিত একক অস্থিময় গুলার প্লেট",
          "অক্সিজেনহীন পানিতে বাতাস থেকে শ্বাস নেওয়ার জন্য রক্তনালীযুক্ত পটকা",
          "স্বচ্ছ ফিতাসদৃশ লেপ্টোসেফালাস লার্ভা রূপান্তর দশা",
          "অসংখ্য ফুলকা রশ্মি (৩৫টি পর্যন্ত) ও গভীরভাবে খাঁজকাটা লেজ"
        ]
      }
    },
    "habitat": {
      "en": "Coastal marine waters, tropical estuaries, mangrove channels, tidal rivers, and hypersaline coastal lagoons. Readily penetrates freshwaters.",
      "bn": "উপকূলীয় সাগর, ক্রান্তীয় মোহনা, সুন্দরবনের ম্যানগ্রোভ খাঁড়ি, জোয়ার-ভাটার নদী এবং মিঠাপানি।",
      "systems": [
        "marine",
        "brackish",
        "freshwater"
      ]
    },
    "ecosystem": {
      "en": "Swift high-trophic predators in coastal lagoons and estuarine nursery corridors, leaping to capture baitfish and tolerating hypoxic backwaters.",
      "bn": "উপকূল ও মোহনার দ্রুতগামী শিকারী মাছ; অক্সিজেনহীন পানিতে বাস করতে পারে এবং ছোট মাছ শিকার করে বাস্তুতন্ত্রের ভারসাম্য রাখে।"
    },
    "feeding": {
      "en": "Voracious visual carnivores, preying upon schooling clupeids, mullet fry, engraulid anchovies, and penaeid swimming shrimps.",
      "bn": "মাংসাশী শিকারী; ঝাঁকে থাকা ছোট মাছ, ইলিশ-ফাঁসা পোনা, মালেট এবং চিংড়ি শিকার করে।"
    },
    "reproduction": {
      "en": "Pelagic spawning in offshore marine shelf waters. Floating eggs hatch into ribbon-like leptocephalus larvae that drift into coastal mangrove nurseries before metamorphic shrinking into juveniles.",
      "bn": "গভীর সমুদ্রে ডিম পাড়ে। ডিম ফুটে লেপ্টোসেফালাস লার্ভা বের হয় যা স্রোতে ভেসে উপকূলীয় ম্যানগ্রোভ খাঁড়িতে আশ্রয় নেয় এবং রূপান্তরের মাধ্যমে পোনায় পরিণত হয়।"
    },
    "distribution": {
      "en": "Tropical and warm subtropical oceans globally. Megalops cyprinoides (Indo-Pacific Tarpon) occurs natively in coastal Bangladesh, the Sundarbans, and downstream rivers.",
      "bn": "বিশ্বের ক্রান্তীয় মহাসাগরে বিস্তৃত। ইন্দো-প্যাসিফিক টারপন (Megalops cyprinoides) বাংলাদেশের সুন্দরবন, উপকূল ও মেঘনা নদীর মোহনায় স্বাভাবিকভাবে বাস করে।"
    },
    "importantFamilies": [
      {
        "name": "Megalopidae",
        "commonEn": "Tarpons",
        "commonBn": "টারপন গোত্র",
        "diagnosticEn": "Last ray of dorsal fin elongated into a long filament, large eyes, mouth superior, thick scales; contains genus Megalops.",
        "diagnosticBn": "পৃষ্ঠপাখনার শেষ রশ্মি সুতোর মতো লম্বা, বড় চোখ, ঊর্ধ্বমুখী মুখ, মোটা আঁইশ; Megalops গণ অন্তর্ভুক্ত।"
      },
      {
        "name": "Elopidae",
        "commonEn": "Tenpounders / Ladyfishes",
        "commonBn": "লেডিফিশ বা টেনপাউন্ডার গোত্র",
        "diagnosticEn": "Slender elongate body, terminal mouth, last dorsal ray not elongated, very small scales; contains genus Elops.",
        "diagnosticBn": "সরু লম্বা দেহ, অগ্রবর্তী মুখ, পৃষ্ঠপাখনার পেছনের রশ্মি লম্বা নয়, ক্ষুদ্র আঁইশ; Elops গণ অন্তর্ভুক্ত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Genera: Megalops Lacepède, 1803 and Elops Linnaeus, 1766. Key binomials: Megalops cyprinoides (Broussonet, 1782), Megalops atlanticus Valenciennes, 1847, and Elops saurus Linnaeus, 1766.",
      "bn": "গণ: Megalops Lacepède, 1803 এবং Elops Linnaeus, 1766। প্রধান নাম: Megalops cyprinoides (Broussonet, 1782), Megalops atlanticus Valenciennes, 1847 এবং Elops saurus Linnaeus, 1766।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Indo-Pacific Tarpon (Megalops cyprinoides - native to Bangladesh), Atlantic Tarpon (Megalops atlanticus), Ladyfish (Elops saurus), and Pacific Tenpounder (Elops affinis).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: ইন্দো-প্যাসিফিক টারপন (Megalops cyprinoides - বাংলাদেশে প্রাপ্ত), আটলান্টিক টারপন (Megalops atlanticus), লেডিফিশ (Elops saurus) এবং প্যাসিফিক টেনপাউন্ডার (Elops affinis)।"
    },
    "additionalInformation": {
      "en": "Elopiforms retain the ancestral teleost condition of a median gular bone and leptocephalous larval development, placing them as the most basal living lineage of the Elopomorpha.",
      "bn": "ইলোপিফর্মিস মাছের গুলার প্লেট এবং লেপ্টোসেফালাস লার্ভা আদিম টেলিয়স্টদের প্রাচীনতম বৈশিষ্ট্য বহন করে।"
    },
    "orders": [],
    "exampleSpeciesIds": [
      "sp-elops-machnata"
    ],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Adams et al. (2014)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-albuliformes",
    "taxonId": "taxon-albuliformes",
    "rank": "order",
    "scientificName": "Albuliformes",
    "bengaliName": "আলবুলিফর্মিস (বোনফিশ বা অস্থিময় সামুদ্রিক মাছ)",
    "englishName": "Bonefishes",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিময় পাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Actinopteri",
        "nameBn": "অ্যাক্টিনোপ্টেরি"
      },
      {
        "rank": "infraclass",
        "name": "Teleostei",
        "nameBn": "টেলিয়স্ট"
      },
      {
        "rank": "order",
        "name": "Albuliformes",
        "nameBn": "আলবুলিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Silvery coastal marine teleosts with an inferior pig-like snout, heavy molariform crushing toothplates on the roof of the mouth, and transparent leptocephalus larvae.",
      "bn": "রূপালী উপকূলীয় সামুদ্রিক মাছ, যাদের নিচের দিকে বাঁকানো থ্যাবড়া মুখ, তালুতে শক্ত পেষণ দাঁতের প্লেট এবং স্বচ্ছ ফিতাসদৃশ লেপ্টোসেফালাস লার্ভা রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Fusiform silvery body; snout conical, pig-like, and projecting prominently beyond the small inferior mouth; toothplates on parasphenoid, mesopterygoid, and basibranchials armed with coarse molariform crushing dentition; no gular plate; transparent leptocephalus larva having a forked caudal fin; single short dorsal fin.",
      "bn": "রূপালী মাকু আকৃতির দেহ; থ্যাবড়া ও সূচালো শূকরের মতো নাসিকা যা নিচের মুখের চেয়ে এগিয়ে থাকে; শক্ত খোলস ভাঙার জন্য তালুর হাড়ে চ্যাপ্টা পেষণ দাঁতের প্লেট; গুলার প্লেট অনুপস্থিত; লেপ্টোসেফালাস লার্ভা দশা বিদ্যমান; একক ছোট পৃষ্ঠপাখনা।",
      "keyFeatures": {
        "en": [
          "Prominently projecting conical snout overhanging a small inferior mouth",
          "Molariform tooth plates adapted for crushing hard-shelled molluscs and crabs",
          "Leptocephalus larva that dramatically shrinks in length during metamorphosis",
          "Brilliant mirror-like silver guanine lateral scales"
        ],
        "bn": [
          "মুখের উপর ঝুঁকে থাকা শঙ্কু আকৃতির স্পষ্ট থ্যাবড়া নাসিকা",
          "শামুক ও কাঁকড়ার শক্ত খোলস ভাঙার চ্যাপ্টা পেষণ দাঁতের প্লেট",
          "লেপ্টোসেফালাস লার্ভা যা রূপান্তরের সময় আকারে ছোট হয়ে পোনায় রূপ নেয়",
          "আয়নার মতো চকচকে রূপালী আঁইশ"
        ]
      }
    },
    "habitat": {
      "en": "Tropical shallow coastal waters, intertidal sand and mud flats, seagrass beds, and mangrove channels.",
      "bn": "ক্রান্তীয় অগভীর উপকূলীয় সমুদ্র, ভাটার সময় জেগে ওঠা বালুচর, সামুদ্রিক ঘাসের বন ও ম্যানগ্রোভ খাঁড়ি।",
      "systems": [
        "marine",
        "brackish"
      ]
    },
    "ecosystem": {
      "en": "Specialized benthic bio-excavators; their feeding jet rooting in sand resuspends sediments and cycles nutrients across shallow flats.",
      "bn": "বালুচরের গুরুত্বপূর্ণ বাস্তুতাত্ত্বিক প্রাণী; মুখ দিয়ে বালি খুঁড়ে শামুক-ঝিনুক খেয়ে তলদেশের পুষ্টি উপাদান পুনর্ব্যবহারে সাহায্য করে।"
    },
    "feeding": {
      "en": "Benthic durophagous carnivores, rooting snout into sediment to excavate clams, bivalves, crabs, and polychaetes, crushed by molariform pharyngeal toothplates.",
      "bn": "শক্ত খোলসভোজী মাংসাশী; বালিতে মুখ গুঁজে শামুক, ঝিনুক ও কাঁকড়া তুলে আনে এবং তালুর দাঁত দিয়ে পিষে খায়।"
    },
    "reproduction": {
      "en": "Offshore pelagic spawning. Ribbon-like leptocephalus larvae drift into shallow nursery flats, shrinking by ~30% in length during metamorphosis.",
      "bn": "উপকূল থেকে দূরে খোলা সাগরে ডিম পাড়ে। ফিতাসদৃশ লার্ভা ভেসে উপকূলে আসে এবং রূপান্তরের সময় প্রায় ৩০% সংকুচিত হয়ে মাছের পোনায় পরিণত হয়।"
    },
    "distribution": {
      "en": "Circumtropical in warm shelf seas. Albula glossodonta and Albula oligolepis occur in northern Indian Ocean and Bay of Bengal shelf waters.",
      "bn": "বিশ্বের উষ্ণ ক্রান্তীয় সমুদ্রে বিস্তৃত। ভারত মহাসাগর ও বঙ্গোপসাগরের মহীসোপানে বোনফিশের প্রজাতি পাওয়া যায়।"
    },
    "importantFamilies": [
      {
        "name": "Albulidae",
        "commonEn": "Bonefishes",
        "commonBn": "বোনফিশ গোত্র",
        "diagnosticEn": "Single family containing genus Albula with approximately 11 cryptic species, sharing all ordinal characters.",
        "diagnosticBn": "একমাত্র জীবিত গোত্র; Albula গণের প্রায় ১১টি প্রজাতি অন্তর্ভুক্ত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Single extant genus Albula Scopoli, 1777. Key binomials: Albula vulpes (Linnaeus, 1758), Albula glossodonta (Forsskål, 1775), and Albula oligolepis Hidaka, Iwatsuki & Randall, 2008.",
      "bn": "একক জীবিত গণ Albula Scopoli, 1777। প্রধান নাম: Albula vulpes (Linnaeus, 1758), Albula glossodonta (Forsskål, 1775) এবং Albula oligolepis Hidaka, Iwatsuki & Randall, 2008।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Common Bonefish (Albula vulpes), Roundjaw Bonefish (Albula glossodonta), Smallscale Bonefish (Albula oligolepis), and Pacific Bonefish (Albula esuncula).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: সাধারণ বোনফিশ (Albula vulpes), রাউন্ডজ বোনফিশ (Albula glossodonta), স্মলস্কেল বোনফিশ (Albula oligolepis) এবং প্যাসিফিক বোনফিশ (Albula esuncula)।"
    },
    "additionalInformation": {
      "en": "Bonefishes are world-renowned gamefishes supporting multimillion-dollar recreational sportfisheries due to their extraordinary burst swimming speeds over shallow sand flats.",
      "bn": "অগভীর বালুচরে এদের ক্ষিপ্রগতির সাঁতারের কারণে বিশ্বজুড়ে পর্যটন ও স্পোর্ট ফিশিংয়ে বোনফিশ অত্যন্ত বিখ্যাত।"
    },
    "orders": [],
    "exampleSpeciesIds": [
      "sp-albula-vulpes"
    ],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Pickett et al. (2020)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-notacanthiformes",
    "taxonId": "taxon-notacanthiformes",
    "rank": "order",
    "scientificName": "Notacanthiformes",
    "bengaliName": "নোটাাক্যান্থিফর্মিস (গভীর সমুদ্রের কাঁটাময় বান ও হ্যালোসর)",
    "englishName": "Deep-sea Spiny Eels and Halosaurs",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিময় পাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Actinopteri",
        "nameBn": "অ্যাক্টিনোপ্টেরি"
      },
      {
        "rank": "infraclass",
        "name": "Teleostei",
        "nameBn": "টেলিয়স্ট"
      },
      {
        "rank": "order",
        "name": "Notacanthiformes",
        "nameBn": "নোটাাক্যান্থিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Slender, eel-like bathyal deep-sea teleosts with a tapering tail lacking a caudal fin, isolated dorsal spines, and giant pelagic leptocephalus larvae.",
      "bn": "গভীর সমুদ্রের সর্পিল মাছ, যাদের লেজ সরু হয়ে পুচ্ছপাখনা ছাড়াই শেষ হয়, পিঠে পৃথক ধারালো কাঁটা এবং বিশালাকার লেপ্টোসেফালাস লার্ভা দশা রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Elongate, eel-like body tapering to a fine point with caudal fin absent or reduced to a tiny vestige; very long anal fin extending along posterior half of body; dorsal fin consisting either of 6–40 disconnected short sharp spines (Notacanthidae) or short soft rays (Halosauridae); subterminal mouth beneath a sensitive projecting rostrum; leptocephalus larvae exceptionally large (up to 2 meters long in Tiluropsis/Leptocephalus giganteus).",
      "bn": "লম্বা সর্পিল দেহ যা সরু হয়ে সুতোর মতো শেষ হয়, পুচ্ছপাখনা অনুপস্থিত বা নামমাত্র; দেহের পিছনের অর্ধেক জুড়ে অত্যন্ত দীর্ঘ পায়ুপাখনা; পিঠের উপর বিচ্ছিন্ন ৬–৪০টি ধারালো কাঁটা বা নরম পাখনা; সংবেদনশীল মুখের নিচে অবস্থিত মুখগহ্বর; লার্ভা অত্যন্ত বিশালাকার (২ মিটার পর্যন্ত লম্বা লেপ্টোসেফালাস)।",
      "keyFeatures": {
        "en": [
          "Tapering eel-like body ending without a true caudal fin",
          "Dorsal fin modified into a series of isolated sharp spines or short soft fin",
          "Extremely long anal fin confluent with the caudal tip",
          "Production of gigantic pelagic leptocephalus larvae up to nearly 2 m long"
        ],
        "bn": [
          "প্রকৃত পুচ্ছপাখনা ছাড়া সরু হয়ে শেষ হওয়া সর্পিল দেহ",
          "পৃষ্ঠপাখনা পৃথক ধারালো কাঁটার সারিতে রূপান্তরিত",
          "লেজের শেষ প্রান্ত পর্যন্ত বিস্তৃত অত্যন্ত লম্বা পায়ুপাখনা",
          "বিশাল আকৃতির (প্রায় ২ মিটার পর্যন্ত) ভাসমান লেপ্টোসেফালাস লার্ভা"
        ]
      }
    },
    "habitat": {
      "en": "Deep-sea benthic environments, continental slopes, bathyal muds, and abyssal plains (200–5,000 meters depth).",
      "bn": "গভীর সমুদ্রের তলদেশ, মহীঢাল, কর্দমাক্ত গভীর তল এবং অতল স্পর্শী সমভূমি (২০০–৫,০০০ মিটার গভীরতা)।",
      "systems": [
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Benthic scavengers and micropredators rooting in bathyal ooze, consuming sedentary invertebrates and recycling deep-sea organic falls.",
      "bn": "গভীর সমুদ্রের তলদেশের মেথর ও শিকারী; তলদেশের নরম কাদা ঘেঁটে অমেরুদণ্ডী প্রাণী খেয়ে পুষ্টি পুনর্ব্যবহার করে।"
    },
    "feeding": {
      "en": "Invertivorous carnivores, consuming deep-sea polychaetes, sea anemones, bryozoans, brittle stars, amphipods, and bivalves.",
      "bn": "তলদেশীয় অমেরুদণ্ডীভোজী; গভীর সমুদ্রের পলিকীট, অ্যানিমোন, তারামাছের আত্মীয় এবং ক্ষুদ্র ক্রাস্টাশিয়ান খায়।"
    },
    "reproduction": {
      "en": "Oviparous. Epipelagic leptocephalus larvae spend extensive time drifting in open oceanic currents before settling onto the abyssal seafloor.",
      "bn": "ডিম্বপ্রসবকারী। দানবীয় লার্ভা উন্মুক্ত মহাসাগরীয় স্রোতে দীর্ঘ সময় ভেসে থেকে রূপান্তরের পর অতল সাগরের তলদেশে নেমে আসে।"
    },
    "distribution": {
      "en": "Circumglobal in deep temperate, subtropical, and tropical ocean basins. Inhabits deep bathyal channels of the Indian Ocean.",
      "bn": "বিশ্বের সকল মহাসাগরের গভীর অঞ্চলে বিস্তৃত। ভারত মহাসাগরের গভীর তলদেশে এদের নিয়মিত দেখা মেলে।"
    },
    "importantFamilies": [
      {
        "name": "Notacanthidae",
        "commonEn": "Deep-sea Spiny Eels",
        "commonBn": "কাঁটাময় বান গোত্র",
        "diagnosticEn": "Dorsal fin represented by 6-40 isolated spines, snout projecting over mouth, pectoral fins high on body.",
        "diagnosticBn": "পৃষ্ঠপাখনার স্থানে ৬-৪০টি পৃথক কাঁটা, মুখের উপর বাড়ানো নাসিকা; Notacanthus গণ অন্তর্ভুক্ত।"
      },
      {
        "name": "Halosauridae",
        "commonEn": "Halosaurs",
        "commonBn": "হ্যালোসর গোত্র",
        "diagnosticEn": "Single short dorsal fin with soft rays, large cycloid scales, snout flat and duckbill-like.",
        "diagnosticBn": "নরম রশ্মিযুক্ত একক ছোট পৃষ্ঠপাখনা, হাঁসের ঠোঁটের মতো চ্যাপ্টা নাসিকা; Halosaurus গণ অন্তর্ভুক্ত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Genera: Notacanthus, Polyacanthonotus, Halosaurus, and Aldrovandia. Key binomials: Notacanthus chemnitzii Bloch, 1788 and Halosaurus ovenii Johnson, 1864.",
      "bn": "গণ: Notacanthus, Polyacanthonotus, Halosaurus এবং Aldrovandia। প্রধান নাম: Notacanthus chemnitzii Bloch, 1788 এবং Halosaurus ovenii Johnson, 1864।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Snubnosed Spiny Eel (Notacanthus chemnitzii), Shortspine Tapirfish (Notacanthus bonaparte), Abyssal Halosaur (Halosauropsis macrochir), and Common Halosaur (Halosaurus ovenii).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: ভোঁতামুখ স্পাইনি ইল (Notacanthus chemnitzii), শর্টস্পাইন টেপিরফিশ (Notacanthus bonaparte), গভীর সাগরের হ্যালোসর (Halosauropsis macrochir) এবং সাধারণ হ্যালোসর (Halosaurus ovenii)।"
    },
    "additionalInformation": {
      "en": "The mysterious 'Leptocephalus giganteus' specimens collected in the mid-20th century (over 1.8 m long) were once thought to be giant sea serpents, but represent the larvae of notacanthiform fishes.",
      "bn": "বিংশ শতকের মাঝামাঝি সংগৃহীত প্রায় ১.৮ মিটার লম্বা রহস্যময় লেপ্টোসেফালাস লার্ভা মূলত নোটাাক্যান্থিফর্মিস মাছের লার্ভা ছিল।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); McDowell (1973)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-alepocephaliformes",
    "taxonId": "taxon-alepocephaliformes",
    "rank": "order",
    "scientificName": "Alepocephaliformes",
    "bengaliName": "আলেপোসেফালিফর্মিস (মসৃণমাথা গভীর সমুদ্রের মাছ ও টিউবশোল্ডার)",
    "englishName": "Slickheads and Tubeshoulders",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিময় পাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Actinopteri",
        "nameBn": "অ্যাক্টিনোপ্টেরি"
      },
      {
        "rank": "infraclass",
        "name": "Teleostei",
        "nameBn": "টেলিয়স্ট"
      },
      {
        "rank": "order",
        "name": "Alepocephaliformes",
        "nameBn": "আলেপোসেফালিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Deep-sea bathyal and abyssal teleosts with scaleless heads, posterior dorsal fins, dark pigmentation, and unique bioluminescent spark-discharging shoulder organs in tubeshoulders.",
      "bn": "গভীর সমুদ্রের অন্ধকার তলদেশের মাছ; যাদের মাথা আঁইশহীন, পৃষ্ঠপাখনা দেহের পেছনের দিকে অবস্থিত এবং কাঁধের বিশেষ অঙ্গ দিয়ে আত্মরক্ষামূলক উজ্জ্বল সবুজ আলোর স্ফুলিঙ্গ ছড়ায়।"
    },
    "diagnosticCharacteristics": {
      "en": "Head completely scaleless; cranium with extensive cartilage; adipose fin absent; dorsal fin situated far back opposite anal fin; teeth small and uniserial; tubeshoulders (Platytroctidae) possess a specialized subcutaneous shoulder organ opening via a tubular papilla above the pectoral fin that discharges a luminous cloud of blue-green coelenterazine sparks when threatened.",
      "bn": "মাথা সম্পূর্ণ আঁইশহীন; মাথার খুলিতে প্রচুর তরুণাস্থি; অ্যাডিপোজ পাখনা অনুপস্থিত; পৃষ্ঠপাখনা পায়ুপাখনার বিপরীতে পেছনের দিকে অবস্থিত; ক্ষুদ্র একসারি দাঁত; প্ল্যাটোট্রকটিডি গোত্রের কাঁধের নিচে বিশেষ টিউব থাকে যা থেকে আক্রান্ত হলে আত্মরক্ষার্থে উজ্জ্বল নীল-সবুজ আলোর মেঘ নির্গত হয়।",
      "keyFeatures": {
        "en": [
          "Completely scaleless head with soft cartilaginous cranial roof",
          "Dorsal and anal fins positioned far back near the caudal peduncle",
          "Subcutaneous shoulder organ discharging luminous sparks in Platytroctidae",
          "Absence of adipose fin and swimbladder in adults"
        ],
        "bn": [
          "তরুণাস্থিময় নরম খুলিযুক্ত সম্পূর্ণ আঁইশহীন মাথা",
          "পৃষ্ঠ ও পায়ুপাখনা দেহের পেছনের দিকে পুচ্ছপাখনার নিকটে অবস্থিত",
          "আক্রান্ত হলে উজ্জ্বল আলোর স্ফুলিঙ্গ নির্গমনকারী বিশেষ কাঁধের অঙ্গ",
          "অ্যাডিপোজ পাখনা এবং পটকার সম্পূর্ণ অনুপস্থিতি"
        ]
      }
    },
    "habitat": {
      "en": "Mesopelagic, bathypelagic, and deep benthic continental slopes and abyssal trenches (800–5,000 meters depth).",
      "bn": "গভীর সমুদ্রের মেসোপেলাজিক, বাথিপেলাজিক এবং অতলস্পর্শী গিরিখাত (৮০০–৫,০০০ মিটার গভীরতা)।",
      "systems": [
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Crucial intermediate trophic links in bathyal abyssal food webs, consuming gelatinous zooplankton and preying on pelagic amphipods.",
      "bn": "গভীর সমুদ্রের খাদ্যশৃঙ্খলের গুরুত্বপূর্ণ অংশ; জেলিফিশ, স্যাল্প এবং ভাসমান অমেরুদণ্ডী প্রাণী খেয়ে বেঁচে থাকে।"
    },
    "feeding": {
      "en": "Carnivorous planktivores, feeding on deep-water salps, siphonophores, ctenophores, chaetognaths, and bathypelagic copepods.",
      "bn": "প্ল্যাঙ্কটন ও জেলিভোজী মাংসাশী; গভীর পানির স্যাল্প, সাইফোনোফোর, কম্ব-জেলি ও ক্ষুদ্র ক্রাস্টাশিয়ান খায়।"
    },
    "reproduction": {
      "en": "Oviparous. Large eggs (up to 4–5 mm diameter) equipped with oil globules, sinking to bathyal depths with direct development bypassing surface larval phases.",
      "bn": "ডিম্বপ্রসবকারী। ৪-৫ মিমি আকারের বড় তেলযুক্ত ডিম পাড়ে যা গভীর সমুদ্রের তলদেশে থাকে এবং উপরিভাগে না এসেই সরাসরি পোনায় রূপ নেয়।"
    },
    "distribution": {
      "en": "Worldwide in all major oceanic basins from the Arctic to Antarctic deep waters. Inhabits deep Indian Ocean bathyal canyons.",
      "bn": "সুমেরু থেকে কুমেরু পর্যন্ত বিশ্বের সকল মহাসাগরের গভীর তলদেশে বিস্তৃত। ভারত মহাসাগরের গভীর খাদে এদের উপস্থিতি রয়েছে।"
    },
    "importantFamilies": [
      {
        "name": "Alepocephalidae",
        "commonEn": "Slickheads",
        "commonBn": "স্লিকহেড গোত্র",
        "diagnosticEn": "Smooth naked head, body covered in deciduous cycloid scales or naked, no shoulder organ.",
        "diagnosticBn": "মসৃণ আঁইশহীন মাথা, সহজে খসে পড়া সাইক্লয়েড আঁইশ, কাঁধের আলোকিত অঙ্গ নেই; Alepocephalus গণ অন্তর্ভুক্ত।"
      },
      {
        "name": "Platytroctidae",
        "commonEn": "Tubeshoulders",
        "commonBn": "টিউবশোল্ডার গোত্র",
        "diagnosticEn": "Shoulder organ present with tubular pore discharging luminescent fluid, photophores often present.",
        "diagnosticBn": "কাঁধে উজ্জ্বল আলো নিঃসরণকারী নালীযুক্ত বিশেষ অঙ্গ বিদ্যমান; Platytroctes গণ অন্তর্ভুক্ত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Genera: Alepocephalus, Rouleina, Xenodermichthys, Platytroctes, and Searsia. Key binomials: Alepocephalus bairdii Goode & Bean, 1879 and Platytroctes apus Günther, 1878.",
      "bn": "গণ: Alepocephalus, Rouleina, Xenodermichthys, Platytroctes এবং Searsia। প্রধান নাম: Alepocephalus bairdii Goode & Bean, 1879 এবং Platytroctes apus Günther, 1878।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Baird's Slickhead (Alepocephalus bairdii), Softskin Smooth-head (Rouleina attrita), Shinylight Tubeshoulder (Platytroctes apus), and Blunt-snouted Slickhead (Xenodermichthys copei).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: বেয়ার্ডস স্লিকহেড (Alepocephalus bairdii), সফটস্কিন স্মুথ-হেড (Rouleina attrita), শাইনিলাইট টিউবশোল্ডার (Platytroctes apus) এবং ভোঁতামুখ স্লিকহেড (Xenodermichthys copei)।"
    },
    "additionalInformation": {
      "en": "Alepocephaliformes was historically placed within Argentinoidei or Osmeriformes, but modern phylogenomic analyses recognize it as an early-diverging otocephalan teleost lineage.",
      "bn": "অতীতে এদের স্মেল্ট মাছের সাথে রাখা হলেও আধুনিক ফাইলোজেনোমিক্স এদের পৃথক টেলিঅস্ট বংশধারা হিসেবে চিহ্নিত করেছে।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Poulsen et al. (2009)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-gymnotiformes",
    "taxonId": "taxon-gymnotiformes",
    "rank": "order",
    "scientificName": "Gymnotiformes",
    "bengaliName": "জিমনোটিফর্মিস (বৈদ্যুতিক ইল ও নাইফফিশ)",
    "englishName": "Neotropical Knifefishes and Electric Eels",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিময় পাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Actinopteri",
        "nameBn": "অ্যাক্টিনোপ্টেরি"
      },
      {
        "rank": "infraclass",
        "name": "Teleostei",
        "nameBn": "টেলিয়স্ট"
      },
      {
        "rank": "order",
        "name": "Gymnotiformes",
        "nameBn": "জিমনোটিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Specialized South American freshwater teleosts with extremely elongated bodies, continuous undulating anal fins, forward-displaced anus, and specialized myogenic electric organs for navigation, communication, or prey capture.",
      "bn": "দক্ষিণ আমেরিকার বিশেষায়িত মিঠাপানির মাছ; যাদের দীর্ঘ দেহ, ঢেউখেলানো দীর্ঘ পায়ুপাখনা, গলার কাছে অবস্থিত মলদ্বার এবং পথচলা ও শিকারের জন্য বৈদ্যুতিক অঙ্গ রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Body eel-like or knife-shaped, laterally compressed; dorsal and pelvic fins absent; caudal fin reduced or absent; extremely long anal fin extending from near throat to tail tip providing bidirectional rippling swimming; anus situated forward beneath head or pectoral fins; electric organs derived from modified muscle tissue (or nerve axons in Apteronotidae) generating continuous electric organ discharges (EOD); electroreceptors embedded across skin.",
      "bn": "সর্পিল বা ছুরির মতো চ্যাপ্টা দেহ; পৃষ্ঠ ও শ্রোণীপাখনা সম্পূর্ণ অনুপস্থিত; পুচ্ছপাখনা নামমাত্র বা অনুপস্থিত; গলা থেকে লেজ পর্যন্ত বিস্তৃত অত্যন্ত লম্বা পায়ুপাখনা যা ঢেউ খেলিয়ে সামনে ও পেছনে উভয় দিকে সাঁতার কাটতে পারে; মলদ্বার মাথার নিচে গলার কাছে অবস্থিত; রূপান্তরিত পেশী থেকে তৈরি বৈদ্যুতিক অঙ্গ যা দিয়ে বিদ্যুৎ উৎপন্ন করে পথ চলে বা শিকার অবশ করে; ত্বকে তড়িৎ-সংবেদী গ্রাহক বিদ্যমান।",
      "keyFeatures": {
        "en": [
          "Specialized electric organs producing continuous weak or powerful electrical discharges (up to 860V in Electrophorus)",
          "Extremely elongated anal fin functioning as the sole propulsive engine",
          "Complete absence of dorsal and pelvic fins",
          "Anterior displacement of anus to beneath the throat"
        ],
        "bn": [
          "তড়িৎ নিঃসরণকারী বিশেষ অঙ্গ (Electrophorus-এ ৮৬০ ভোল্ট পর্যন্ত শক দিতে পারে)",
          "একমাত্র সাঁতার কাটার সহায়ক হিসেবে দেহের তলদেশ জুড়ে বিস্তৃত লম্বা পায়ুপাখনা",
          "পৃষ্ঠপাখনা ও শ্রোণীপাখনার সম্পূর্ণ অনুপস্থিতি",
          "মলদ্বার দেহের সামনে গলার নিচে অবস্থিত"
        ]
      }
    },
    "habitat": {
      "en": "Neotropical freshwater rivers, Amazonian floodplains, blackwater tributaries, subterranean caves, and deep river channels.",
      "bn": "আমাজন ও ওরিনোকো অববাহিকার মিঠাপানির নদী, প্লাবনভূমি, ব্ল্যাকওয়াটার নদী, ভূগর্ভস্থ গুহা এবং গভীর নদীর তলদেশ।",
      "systems": [
        "freshwater"
      ]
    },
    "ecosystem": {
      "en": "Nocturnal apex predators and benthic foragers in turbid tropical river systems, occupying diverse trophic niches through specialized electro-navigation.",
      "bn": "ঘোলা গ্রীষ্মমন্ডলীয় নদীর প্রধান নিশাচর শিকারী; বিদ্যুৎ তরঙ্গ ব্যবহার করে রাতের অন্ধকারে পথ চলে ও খাদ্যজালকের ভারসাম্য বজায় রাখে।"
    },
    "feeding": {
      "en": "Carnivorous predators, consuming aquatic insects, worms, decapod crustaceans, and smaller fishes. Electric eels stun prey with high-voltage volleys.",
      "bn": "মাংসাশী শিকারী; জলজ পোকা, কৃমি, কাঁকড়া ও ছোট মাছ খায়। ইলেকট্রিক ইল তীব্র বৈদ্যুতিক শক দিয়ে শিকার অবশ করে গিলে ফেলে।"
    },
    "reproduction": {
      "en": "Oviparous. Spawning triggered by seasonal rainfall and flood pulses. Males construct foam nests or defend substrate crevices using electrical courtship displays.",
      "bn": "ডিম্বপ্রসবকারী। বর্ষার নতুন পানিতে প্রজনন করে। পুরুষ মাছ বিশেষ বৈদ্যুতিক সংকেত পাঠিয়ে সঙ্গীকে আকর্ষণ করে এবং ফেনার বাসা পাহারা দেয়।"
    },
    "distribution": {
      "en": "Strictly confined to Neotropical freshwater basins of South and Central America. Completely absent in Asia and Bangladesh.",
      "bn": "দক্ষিণ ও মধ্য আমেরিকার নদী অববাহিকায় সীমাবদ্ধ। বাংলাদেশ ও এশিয়ার প্রাকৃতিক জলসীমায় সম্পূর্ণ অনুপস্থিত।"
    },
    "importantFamilies": [
      {
        "name": "Gymnotidae",
        "commonEn": "Naked-back Knifefishes & Electric Eels",
        "commonBn": "ইলেকট্রিক ইল ও নাইফফিশ গোত্র",
        "diagnosticEn": "No caudal fin, snout rounded, includes Electrophorus with massive electric organs producing up to 860 volts.",
        "diagnosticBn": "পুচ্ছপাখনা নেই, ভোঁতা মুখ, তীব্র শক উৎপাদনকারী Electrophorus গণ অন্তর্ভুক্ত।"
      },
      {
        "name": "Apteronotidae",
        "commonEn": "Ghost Knifefishes",
        "commonBn": "ঘোস্ট নাইফফিশ গোত্র",
        "diagnosticEn": "Small caudal fin present, dorsal fleshy filament along back, neurogenic electric organ.",
        "diagnosticBn": "ক্ষুদ্র পুচ্ছপাখনা উপস্থিত, পিঠের উপর নরম সুতোর মতো গঠন; Apteronotus গণ অন্তর্ভুক্ত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Genera: Electrophorus, Gymnotus, Apteronotus, and Eigenmannia. Key binomials: Electrophorus electricus (Linnaeus, 1766), Electrophorus voltai de Santana et al., 2019, and Apteronotus albifrons (Linnaeus, 1766).",
      "bn": "গণ: Electrophorus, Gymnotus, Apteronotus এবং Eigenmannia। প্রধান নাম: Electrophorus electricus (Linnaeus, 1766), Electrophorus voltai de Santana et al., 2019 এবং Apteronotus albifrons (Linnaeus, 1766)।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Electric Eel (Electrophorus electricus), Black Ghost Knifefish (Apteronotus albifrons), Banded Knifefish (Gymnotus carapo), and Glass Knifefish (Eigenmannia virescens).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: ইলেকট্রিক ইল (Electrophorus electricus), ব্ল্যাক ঘোস্ট নাইফফিশ (Apteronotus albifrons), ব্যান্ডেড নাইফফিশ (Gymnotus carapo) এবং গ্লাস নাইফফিশ (Eigenmannia virescens)।"
    },
    "additionalInformation": {
      "en": "Electrophorus voltai produces electrical discharges up to 860 volts, the highest voltage recorded in any bioelectrogenic animal. Gymnotiformes forms the Neotropical sister clade to Siluriformes (catfishes).",
      "bn": "ইলেকট্রিক ইল প্রাণিজগতের মধ্যে সর্বোচ্চ ৮৬০ ভোল্ট পর্যন্ত বিদ্যুৎ উৎপাদন করতে পারে। বিবর্তনিকভাবে এরা ক্যাটফিশের ঘনিষ্ঠ আত্মীয়।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); de Santana et al. (2019)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-lepidogalaxiiformes",
    "taxonId": "taxon-lepidogalaxiiformes",
    "rank": "order",
    "scientificName": "Lepidogalaxiiformes",
    "bengaliName": "লেপিডোগ্যালাক্সিফর্মিস (সালামান্ডারফিশ)",
    "englishName": "Salamanderfish",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিময় পাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Actinopteri",
        "nameBn": "অ্যাক্টিনোপ্টেরি"
      },
      {
        "rank": "infraclass",
        "name": "Teleostei",
        "nameBn": "টেলিয়স্ট"
      },
      {
        "rank": "order",
        "name": "Lepidogalaxiiformes",
        "nameBn": "লেপিডোগ্যালাক্সিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Enigmatic, tiny freshwater teleost of southwestern Australia capable of bending its neck, burrowing into moist sand to aestivate through summer droughts, and respiring cutaneously.",
      "bn": "দক্ষিণ-পশ্চিম অস্ট্রেলিয়ার ক্ষুদ্রাকার অদ্ভুত মিঠাপানির মাছ; যা অন্যান্য মাছের মতো নয় বরং ঘাড় বাঁকাতে পারে এবং শুষ্ক মৌসুমে বালির নিচে সুপ্তাবস্থায় বেঁচে থাকে।"
    },
    "diagnosticCharacteristics": {
      "en": "Body small (up to 7 cm), slender, and cylindrical; unique modified cervical vertebrae enabling head to bend downwards and sideways independently of body; eyes lack a spectacle and can move independently; skin thin and capable of cutaneous respiration; dorsal fin positioned far back over anal fin; no adipose fin; males develop a specialized modified anal fin surrounded by glandular scales used in copulation; capable of surviving complete drying of pools by aestivating in moist peat.",
      "bn": "ক্ষুদ্র (৭ সেমি পর্যন্ত) নলাকার দেহ; শরীরের সাথে সংযুক্ত না হয়ে স্বাধীনভাবে মাথা নিচু ও ডানে-বায়ে ঘোরানোর মতো বিশেষ ঘাড়ের কশেরুকা; চোখ স্বাধীনভাবে নড়াচড়া করতে পারে; ত্বকের মাধ্যমে শ্বাস নিতে সক্ষম; পৃষ্ঠপাখনা পেছনের দিকে অবস্থিত; অ্যাডিপোজ পাখনা নেই; গ্রীষ্মকালে জলাশয় শুকিয়ে গেলে ভেজা বালির নিচে কাদার গর্তে সুপ্তাবস্থায় (aestivation) মাসকে মাস বেঁচে থাকে।",
      "keyFeatures": {
        "en": [
          "True flexible neck formed by separated cervical vertebrae enabling head rotation",
          "Summer aestivation underground in moist peat when ephemeral pools desiccate",
          "Cutaneous gas exchange allowing survival in damp terrestrial burrows",
          "Modified anal fin and glandular sheath in reproductive males"
        ],
        "bn": [
          "অন্য মাছের অনুপস্থিতিতে মাথা স্বাধীনভাবে ঘোরানোর মতো সত্যিকারের নমনীয় ঘাড়",
          "গ্রীষ্মে নদী শুকিয়ে গেলে ভেজা মাটিতে সুপ্তাবস্থায় বেঁচে থাকার ক্ষমতা",
          "ত্বকের সাহায্যে বাতাস থেকে অক্সিজেন গ্রহণের ক্ষমতা",
          "প্রজননক্ষম পুরুষ মাছে রূপান্তরিত বিশেষ পায়ুপাখনা"
        ]
      }
    },
    "habitat": {
      "en": "Acidic, ephemeral tea-tree peat pools and heathland swamps of extreme southwestern Western Australia (pH 3.0–5.5).",
      "bn": "পশ্চিম অস্ট্রেলিয়ার অম্লীয় (pH ৩.০–৫.৫) সাময়িক পিট জলাশয় ও জলাভূমি।",
      "systems": [
        "freshwater"
      ]
    },
    "ecosystem": {
      "en": "Specialist survivor in extreme boom-and-bust ephemeral wetlands, acting as top micropredator of aquatic invertebrate larvae during wet seasons.",
      "bn": "চরমভাবাপন্ন ক্ষণস্থায়ী জলাভূমির বিশেষায়িত প্রাণী; বর্ষাকালে পোকার লার্ভা খেয়ে ক্ষণস্থায়ী জলাভূমির খাদ্যজালে ভূমিকা রাখে।"
    },
    "feeding": {
      "en": "Micropredator, stalking midge larvae, ostracods, copepods, and cladoceran water fleas in shallow peat waters.",
      "bn": "ক্ষুদ্র শিকারী; মশার লার্ভা, জলজ পোকা, অসট্রাকড ও ডাফনিয়া শিকার করে।"
    },
    "reproduction": {
      "en": "Internal fertilization suspected; breeding takes place immediately following winter rains filling dried peat hollows.",
      "bn": "শীতের নতুন বৃষ্টিতে জলাশয় পানিতে ভরে উঠলে প্রজনন করে; অভ্যন্তরীণ নিষেক ঘটে বলে ধারণা করা হয়।"
    },
    "distribution": {
      "en": "Endemic strictly to a narrow coastal belt of southwestern Australia between Augusta and Albany. Completely absent outside this tiny range.",
      "bn": "অস্ট্রেলিয়ার দক্ষিণ-পশ্চিম উপকূলীয় একটি অতি ক্ষুদ্র অঞ্চলে সীমাবদ্ধ। বিশ্বের আর কোথাও পাওয়া যায় না।"
    },
    "importantFamilies": [
      {
        "name": "Lepidogalaxiidae",
        "commonEn": "Salamanderfishes",
        "commonBn": "সালামান্ডারফিশ গোত্র",
        "diagnosticEn": "Monotypic family containing single living species Lepidogalaxias salamandroides.",
        "diagnosticBn": "একমাত্র জীবিত প্রজাতি Lepidogalaxias salamandroides ধারণকারী একক গোত্র।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Single extant genus and species: Lepidogalaxias salamandroides Mees, 1961.",
      "bn": "একমাত্র জীবিত গণ ও প্রজাতি: Lepidogalaxias salamandroides Mees, 1961।"
    },
    "examplesSummary": {
      "en": "Single living species: Salamanderfish (Lepidogalaxias salamandroides).",
      "bn": "একমাত্র প্রামাণ্য প্রজাতি: সালামান্ডারফিশ (Lepidogalaxias salamandroides)।"
    },
    "additionalInformation": {
      "en": "Phylogenomic studies confirm that Lepidogalaxiiformes represents one of the most ancient surviving lineages of euteleost fishes, branching off prior to the divergence of all other Euteleostei.",
      "bn": "ফাইলোজেনোমিক্স অনুসারে লেপিডোগ্যালাক্সিফর্মিস ইউটেলিয়স্ট মাছের প্রাচীনতম জীবিত আদিম শাখা।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Betancur-R. et al. (2017)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-argentiniformes",
    "taxonId": "taxon-argentiniformes",
    "rank": "order",
    "scientificName": "Argentiniformes",
    "bengaliName": "আর্জেন্টিনিফর্মিস (রৌপ্যময় সামুদ্রিক স্মেল্ট ও ব্যারেলআই)",
    "englishName": "Marine Smelts and Argentines",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিময় পাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Actinopteri",
        "nameBn": "অ্যাক্টিনোপ্টেরি"
      },
      {
        "rank": "infraclass",
        "name": "Teleostei",
        "nameBn": "টেলিয়স্ট"
      },
      {
        "rank": "order",
        "name": "Argentiniformes",
        "nameBn": "আর্জেন্টিনিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Silvery oceanic marine teleosts with prominent eyes (often tubular in deep-sea barreleyes), an epibranchial crumenal organ for food processing, and an adipose fin.",
      "bn": "রূপালী সামুদ্রিক মাছ, যাদের বড় চোখ (ব্যারেলআই মাছে নলাকার দূরবীণ চোখ), ফুলকার পেছনে বিশেষ ক্রুমেনাল অঙ্গ এবং অ্যাডিপোজ পাখনা রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Presence of a crumenal organ (specialized bilateral epibranchial food-concentrating pouch); eyes large and lateral, or tubular and directed dorsally in Opisthoproctidae; adipose fin usually present; large cycloid or spinoid scales easily shed; no spines in fins; swimbladder physoclistous or absent; mouth small and toothless or with tiny teeth.",
      "bn": "গলবিলের পেছনে খাদ্য সংগ্রহের জন্য ক্রুমেনাল অঙ্গ বিদ্যমান; চোখ বড় এবং ব্যারেলআই মাছে উপরের দিকে মুখ করা নলাকার; অ্যাডিপোজ পাখনা উপস্থিত; সহজে খসে পড়া সাইক্লয়েড আঁইশ; পাখনার কাঁটা অনুপস্থিত; মুখ ছোট ও দাঁতহীন বা ক্ষুদ্র দাঁতযুক্ত।",
      "keyFeatures": {
        "en": [
          "Bilateral epibranchial crumenal organ used to concentrate food particles",
          "Tubular barrel-like eyes directed upwards beneath transparent domed head in Opisthoproctidae",
          "Adipose fin situated between dorsal and caudal fin",
          "Silvery guanine body coloration in shelf species"
        ],
        "bn": [
          "গলবিলের পেছনে খাদ্য ঘনীভূত করার ক্রুমেনাল অঙ্গ",
          "ব্যারেলআই মাছে স্বচ্ছ মাথার ভেতর উপরের দিকে তাকিয়ে থাকা দূরবীণসদৃশ চোখ",
          "পৃষ্ঠ ও লেজের পাখনার মাঝখানে অ্যাডিপোজ পাখনা বিদ্যমান",
          "রূপালী চকচকে দেহের আবরণ"
        ]
      }
    },
    "habitat": {
      "en": "Marine offshore waters from continental shelves down to mesopelagic and bathypelagic ocean depths (100–1,500 meters).",
      "bn": "খোলা সমুদ্রের মহীসোপান থেকে শুরু করে মধ্যম ও গভীর সমুদ্র তলদেশ (১০০–১,৫০০ মিটার গভীরতায়)।",
      "systems": [
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Midwater pelagic carnivores tracking vertical silhouettes of siphonophores and salps in the oceanic twilight zone.",
      "bn": "মধ্য-সমুদ্রের শিকারী; সমুদ্রের গোধূলি অঞ্চলে ভাসমান জেলিফিশ ও সাইফোনোফোরের অবস্থান শনাক্ত করে শিকার করে।"
    },
    "feeding": {
      "en": "Planktivorous and micro-carnivorous, consuming siphonophores, hydrozoans, pelagic tunicates, amphipods, and euphausiid krill.",
      "bn": "প্ল্যাঙ্কটনভোজী; সামুদ্রিক সাইফোনোফোর, ক্রিল, ছোট চিংড়ি ও ভাসমান প্রাণী খায়।"
    },
    "reproduction": {
      "en": "Pelagic broadcast spawners releasing buoyant spherical eggs that drift in ocean currents.",
      "bn": "খোলা সমুদ্রে ডিম ছড়ায়; ভাসমান গোল ডিম স্রোতের সাথে ভেসে পরিপক্ক হয়।"
    },
    "distribution": {
      "en": "Worldwide across all oceans from polar to tropical seas. Found in outer shelf waters of the Indian Ocean.",
      "bn": "মেরু থেকে ক্রান্তীয় অঞ্চল পর্যন্ত বিশ্বের সকল মহাসাগরের গভীর অংশে বিস্তৃত।"
    },
    "importantFamilies": [
      {
        "name": "Argentinidae",
        "commonEn": "Herring Smelts / Argentines",
        "commonBn": "আর্জেন্টাইন বা সামুদ্রিক স্মেল্ট গোত্র",
        "diagnosticEn": "Silvery fusiform bodies, large lateral eyes, commercial food fishes in North Atlantic.",
        "diagnosticBn": "রূপালী শরীর, বড় চোখ; উত্তর আটলান্টিকে বাণিজ্যিকভাবে আহরিত হয়।"
      },
      {
        "name": "Opisthoproctidae",
        "commonEn": "Barreleyes / Spookfishes",
        "commonBn": "ব্যারেলআই বা দূরবীণমাথা গোত্র",
        "diagnosticEn": "Tubular upward-directed eyes, transparent fluid-filled head dome, ventral bioluminescent organs.",
        "diagnosticBn": "স্বচ্ছ মাথার ভেতর উপরের দিকে তাকানো নলাকার চোখ ও আলোক অঙ্গ বিদ্যমান।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Genera: Argentina, Glossanodon, Opisthoproctus, and Macropinna. Key binomials: Argentina silus (Ascanius, 1775) and Macropinna microstoma Chapman, 1939.",
      "bn": "গণ: Argentina, Glossanodon, Opisthoproctus এবং Macropinna। প্রধান নাম: Argentina silus (Ascanius, 1775) এবং Macropinna microstoma Chapman, 1939।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Greater Argentine (Argentina silus), Pacific Barreleye (Macropinna microstoma), Barrel-eye (Opisthoproctus soleatus), and Smallmouth Argentine (Argentina sphyraena).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: গ্রেটার আর্জেন্টাইন (Argentina silus), প্যাসিফিক ব্যারেলআই (Macropinna microstoma), ব্যারেলআই (Opisthoproctus soleatus) এবং স্মলমাউথ আর্জেন্টাইন (Argentina sphyraena)।"
    },
    "additionalInformation": {
      "en": "The Pacific Barreleye (Macropinna microstoma) has green lenses in its tubular eyes and a transparent soft dome covering its head, allowing it to spot bioluminescent siphonophores above it in the twilight zone.",
      "bn": "প্যাসিফিক ব্যারেলআই মাছের সম্পূর্ণ মাথার খুলি স্বচ্ছ কাঁচের মতো তরলভরা গম্বুজ দিয়ে ঢাকা, যার ভেতর সবুজ লেন্সযুক্ত চোখ উপর দিকে ঘুরতে পারে।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Begle (1991)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-galaxiiformes",
    "taxonId": "taxon-galaxiiformes",
    "rank": "order",
    "scientificName": "Galaxiiformes",
    "bengaliName": "গ্যালাক্সিফর্মিস (দক্ষিণী গ্যালাক্সিড ও হোয়াইটবেট)",
    "englishName": "Galaxiids and Southern Freshwater Fishes",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিময় পাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Actinopteri",
        "nameBn": "অ্যাক্টিনোপ্টেরি"
      },
      {
        "rank": "infraclass",
        "name": "Teleostei",
        "nameBn": "টেলিয়স্ট"
      },
      {
        "rank": "order",
        "name": "Galaxiiformes",
        "nameBn": "গ্যালাক্সিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Scaleless, cold-adapted freshwater and amphidromous fishes of the Southern Hemisphere with tubular bodies, posterior dorsal fins, and lacking an adipose fin.",
      "bn": "দক্ষিণ গোলার্ধের আঁইশহীন শীতল পানির মাছ; যাদের দেহ নলাকার, পৃষ্ঠপাখনা পেছনের দিকে অবস্থিত এবং কোনো অ্যাডিপোজ পাখনা থাকে না।"
    },
    "diagnosticCharacteristics": {
      "en": "Body completely scaleless, covered in thick leathery skin with copious protective mucus; single dorsal fin placed far back on caudal peduncle directly opposite anal fin; adipose fin completely absent; lateral line well-developed; caudal fin truncate to slightly emarginate; swimbladder lacking pneumatic duct in adults (physoclistic).",
      "bn": "দেহ সম্পূর্ণ আঁইশহীন এবং প্রচুর মিউকাসযুক্ত পুরু ত্বক দ্বারা আবৃত; পৃষ্ঠপাখনা পায়ুপাখনার ঠিক বিপরীতে লেজের কাছে অবস্থিত; অ্যাডিপোজ পাখনা সম্পূর্ণ অনুপস্থিত; সুস্পষ্ট পার্শ্বরেখা; ভোঁতা বা খাঁজযুক্ত পুচ্ছপাখনা।",
      "keyFeatures": {
        "en": [
          "Complete lack of scales across the entire body",
          "Dorsal fin placed far posteriorly directly above anal fin",
          "Adipose fin completely absent",
          "Gondwanan Southern Hemisphere distribution pattern"
        ],
        "bn": [
          "সারা শরীরে আঁইশের সম্পূর্ণ অনুপস্থিতি",
          "পৃষ্ঠপাখনা সরাসরি পায়ুপাখনার উপরে পেছনের দিকে অবস্থিত",
          "অ্যাডিপোজ পাখনার অনুপস্থিতি",
          "গন্ডোয়ানা মহাদেশীয় দক্ষিণ গোলার্ধে বিস্তার"
        ]
      }
    },
    "habitat": {
      "en": "Cold mountain streams, clear peat swamps, glacial lakes, and coastal rivers of the Southern Hemisphere; some species diadromous.",
      "bn": "দক্ষিণ গোলার্ধের শীতল পাহাড়ি নদী, স্বচ্ছ পিট জলাভূমি, হিমবাহ হ্রদ ও উপকূলীয় নদী।",
      "systems": [
        "freshwater",
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Ecological ecological equivalents of Holarctic salmonids in Southern Hemisphere cool waters, feeding on drift invertebrates.",
      "bn": "দক্ষিণ গোলার্ধে উত্তর গোলার্ধের স্যামন মাছের সমতুল্য বাস্তুতাত্ত্বিক ভূমিকা পালন করে।"
    },
    "feeding": {
      "en": "Carnivorous drift-feeders and benthic foragers, preying on terrestrial falling insects, mayfly and stonefly nymphs, and amphipods.",
      "bn": "মাংসাশী; পানিতে পড়া স্থলজ পোকা, মে-ফ্লাই ও স্টোন-ফ্লাই নিম্ফ এবং ছোট জলজ প্রাণী খায়।"
    },
    "reproduction": {
      "en": "Amphidromous or strictly freshwater. Inanga migrates down to river mouths to spawn on inundated riparian vegetation during spring high tides; larvae drift to sea and return as 'whitebait'.",
      "bn": "অনেকে নদীর মোহনায় জোয়ারের সময় ঘাসের বনে ডিম পাড়ে; ডিম ফুটে লার্ভা সাগরে যায় এবং পরে 'হোয়াইটবেট' পোনা হিসেবে নদীতে ফিরে আসে।"
    },
    "distribution": {
      "en": "Circum-Antarctic Southern Hemisphere: New Zealand, Australia, Tasmania, southern South America (Chile, Argentina), South Africa, and Falkland Islands. Absent in Bangladesh.",
      "bn": "নিউজিল্যান্ড, অস্ট্রেলিয়া, তাসমানিয়া, চিলি, আর্জেন্টিনা ও দক্ষিণ আফ্রিকা। বাংলাদেশে সম্পূর্ণ অনুপস্থিত।"
    },
    "importantFamilies": [
      {
        "name": "Galaxiidae",
        "commonEn": "Galaxiids",
        "commonBn": "গ্যালাক্সিড গোত্র",
        "diagnosticEn": "Scaleless, posterior dorsal fin, no adipose fin, includes whitebait fishes of New Zealand.",
        "diagnosticBn": "আঁইশহীন, পেছনের দিকে পৃষ্ঠপাখনা, নিউজিল্যান্ডের বিখ্যাত হোয়াইটবেট মাছ অন্তর্ভুক্ত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Genera: Galaxias, Neochanna, Paragalaxias, and Galaxiella. Key binomials: Galaxias maculatus (Jenyns, 1842) and Galaxias argenteus (Gmelin, 1789).",
      "bn": "গণ: Galaxias, Neochanna, Paragalaxias এবং Galaxiella। প্রধান নাম: Galaxias maculatus (Jenyns, 1842) এবং Galaxias argenteus (Gmelin, 1789)।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Common Galaxias / Inanga (Galaxias maculatus), Giant Kokopu (Galaxias argenteus), Tasmanian Mudfish (Neochanna cleaveri), and Spotted Galaxias (Galaxias truttaceus).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: কমন গ্যালাক্সিয়াস বা ইনানগা (Galaxias maculatus), জায়ান্ট কোকোপু (Galaxias argenteus), তাসমানিয়ান মাডফিশ (Neochanna cleaveri) এবং স্পটেড গ্যালাক্সিয়াস (Galaxias truttaceus)।"
    },
    "additionalInformation": {
      "en": "Galaxias maculatus possesses the most widespread natural freshwater distribution of any non-marine fish in the Southern Hemisphere, having dispersed across oceans via its marine larval stage.",
      "bn": "Galaxias maculatus এর লার্ভা সাগরে ভাসতে পারার কারণে দক্ষিণ গোলার্ধের বিস্তীর্ণ মহাদেশগুলোতে প্রাকৃতিকভাবে ছড়িয়ে পড়েছে।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); McDowall (2006)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-osmeriformes",
    "taxonId": "taxon-osmeriformes",
    "rank": "order",
    "scientificName": "Osmeriformes",
    "bengaliName": "অস্মেরিফর্মিস (স্বাদু ও উপকূলীয় স্মেল্ট ও আয়ু)",
    "englishName": "Freshwater Smelts and Ayu",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিময় পাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Actinopteri",
        "nameBn": "অ্যাক্টিনোপ্টেরি"
      },
      {
        "rank": "infraclass",
        "name": "Teleostei",
        "nameBn": "টেলিয়স্ট"
      },
      {
        "rank": "order",
        "name": "Osmeriformes",
        "nameBn": "অস্মেরিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Slender, silvery, cold-temperate Northern Hemisphere teleosts characterized by an adipose fin, cucumber-like skin scent, cycloid scales, and teeth on the tongue and vomer.",
      "bn": "উত্তর গোলার্ধের শীতল পানির সরু রূপালী মাছ; যাদের অ্যাডিপোজ পাখনা, শসার মতো বিশেষ সুবাসযুক্ত ত্বক এবং জিহ্বায় দাঁত রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Slender, elongate, silvery body; adipose fin present; single soft-rayed dorsal fin midway along back; no spines; teeth present on jaws, vomer, and palatines, with strong fang-like teeth on tongue (glossohyal); distinctive fresh-cucumber odor caused by secretion of trans-2-cis-6-nonadienal from skin glands; anadromous or lacustrine lifecycle.",
      "bn": "সরু রূপালী শরীর; অ্যাডিপোজ পাখনা বিদ্যমান; পিঠের মাঝখানে একক নরম কাঁটাহীন পৃষ্ঠপাখনা; চোয়াল, তালু এবং জিহ্বাঅস্থিতে শক্ত ধারালো দাঁত; ত্বক থেকে ক্ষরিত বিশেষ রাসায়নিকের কারণে তাজা শসার মতো চমৎকার সুবাস তৈরি হয়; পরিযায়ী বা হ্রদচারী জীবনচক্র।",
      "keyFeatures": {
        "en": [
          "Characteristic fresh cucumber aroma produced by cutaneous chemical aldehydes",
          "Adipose fin positioned behind the rayed dorsal fin",
          "Prominent grasping teeth on the glossohyal tongue bone",
          "Silvery pelagic schooling forage species in cold Holarctic waters"
        ],
        "bn": [
          "ত্বক থেকে নির্গত তাজা শসার মতো মনোরম সুবাস",
          "পৃষ্ঠপাখনার পেছনে ছোট অ্যাডিপোজ পাখনা বিদ্যমান",
          "জিহ্বার হাড়ে শক্ত কামড়ানোর মতো দাঁত",
          "শীতল নাতিশীতোষ্ণ সাগরে ঝাঁক বেঁধে চলা রূপালী মাছ"
        ]
      }
    },
    "habitat": {
      "en": "Cold-temperate coastal marine waters, estuaries, glacial lakes, and river spawning beds across the Northern Hemisphere.",
      "bn": "উত্তর গোলার্ধের শীতল উপকূলীয় সাগর, মোহনা, হিমবাহের হ্রদ ও পাহাড়ি নদী।",
      "systems": [
        "marine",
        "brackish",
        "freshwater"
      ]
    },
    "ecosystem": {
      "en": "Vital ecological forage fishes, forming massive schooling biomass that fuels marine mammals, seabirds, cod, and salmon.",
      "bn": "উত্তর মহাসাগরের অত্যন্ত গুরুত্বপূর্ণ খাদ্য মাছ; তিমি, সীল, সামুদ্রিক পাখি ও কড মাছের প্রধান খাদ্য।"
    },
    "feeding": {
      "en": "Carnivorous planktivores, consuming pelagic copepods, amphipods, mysid shrimps, and small fish fry.",
      "bn": "প্ল্যাঙ্কটনভোজী শিকারী; ভাসমান কোপিপড, অ্যাম্ফিপড, ছোট চিংড়ি ও মাছের ডিম খায়।"
    },
    "reproduction": {
      "en": "Anadromous spring migrations into rivers and gravel shallows. Sticky adhesive eggs anchor to sand grains and pebbles before hatching.",
      "bn": "বসন্তকালে নদী ও পাহাড়ি বালুচরে ডিম ছাড়তে পরিযান করে। আঠালো ডিম নুড়িপাথরে আটকে থাকে।"
    },
    "distribution": {
      "en": "Holarctic: North Atlantic, North Pacific, and Arctic drainages. Absent in tropical regions and Bangladesh.",
      "bn": "উত্তর আটলান্টিক, উত্তর প্রশান্ত ও সুমেরু মহাসাগরীয় অঞ্চলে সীমাবদ্ধ। বাংলাদেশে অনুপস্থিত।"
    },
    "importantFamilies": [
      {
        "name": "Osmeridae",
        "commonEn": "True Smelts",
        "commonBn": "স্মেল্ট গোত্র",
        "diagnosticEn": "Distinct cucumber odor, teeth on tongue, adipose fin present; includes Osmerus and Mallotus.",
        "diagnosticBn": "শসার গন্ধযুক্ত ত্বক, জিহ্বায় দাঁত, অ্যাডিপোজ পাখনা বিদ্যমান; Osmerus ও Mallotus গণ অন্তর্ভুক্ত।"
      },
      {
        "name": "Plecoglossidae",
        "commonEn": "Ayu / Sweetfish",
        "commonBn": "আয়ু বা সুইটফিশ গোত্র",
        "diagnosticEn": "East Asian amphidromous herbivore scraping algae from river rocks with comb-like teeth.",
        "diagnosticBn": "পূর্ব এশিয়ার বিখ্যাত মাছ যা বিশেষ দাঁত দিয়ে নদীর পাথরের শৈবাল চেঁছে খায়।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Genera: Osmerus, Mallotus, Hypomesus, Plecoglossus, and Salanx. Key binomials: Osmerus mordax (Mitchill, 1814), Mallotus villosus (Müller, 1776), and Plecoglossus altivelis (Temminck & Schlegel, 1846).",
      "bn": "গণ: Osmerus, Mallotus, Hypomesus, Plecoglossus এবং Salanx। প্রধান নাম: Osmerus mordax (Mitchill, 1814), Mallotus villosus (Müller, 1776) এবং Plecoglossus altivelis (Temminck & Schlegel, 1846)।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Rainbow Smelt (Osmerus mordax), Capelin (Mallotus villosus), European Smelt (Osmerus eperlanus), and Ayu Sweetfish (Plecoglossus altivelis).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: রেইনবো স্মেল্ট (Osmerus mordax), ক্যাপেলিন (Mallotus villosus), ইউরোপীয় স্মেল্ট (Osmerus eperlanus) এবং সুইটফিশ বা আয়ু (Plecoglossus altivelis)।"
    },
    "additionalInformation": {
      "en": "Capelin (Mallotus villosus) forms one of the largest single-species fish biomasses in Arctic seas, acting as the cornerstone energy transfer link between plankton and higher marine predators.",
      "bn": "ক্যাপেলিন সুমেরু সাগরের অন্যতম বৃহৎ মাছের ঝাঁক গঠন করে যা উত্তর মহাসাগরের সম্পূর্ণ খাদ্যশৃঙ্খলকে নিয়ন্ত্রণ করে।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Waters et al. (2000)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-stomiiformes",
    "taxonId": "taxon-stomiiformes",
    "rank": "order",
    "scientificName": "Stomiiformes",
    "bengaliName": "স্টোমিফর্মিস (গভীর সমুদ্রের ড্রাগনফিশ ও হ্যাচেটফিশ)",
    "englishName": "Dragonfishes, Bristlemouths, and Marine Hatchetfishes",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিময় পাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Actinopteri",
        "nameBn": "অ্যাক্টিনোপ্টেরি"
      },
      {
        "rank": "infraclass",
        "name": "Teleostei",
        "nameBn": "টেলিয়স্ট"
      },
      {
        "rank": "order",
        "name": "Stomiiformes",
        "nameBn": "স্টোমিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Mesopelagic and bathypelagic predatory fishes with ventrolateral rows of discrete bioluminescent photophores, huge gaping mouths with needle-like fangs, and specialized chin lures.",
      "bn": "গভীর সমুদ্রের আলো উৎপাদনকারী শিকারী মাছ; যাদের পেটের নিচে জ্বলজ্বলে ফটোরশ্মি অঙ্গ, বিশালাকার মুখ ও ধারালো ড্রাগন দাঁত এবং থুতনির নিচে আলোকিত টোপ রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Body dark brown, pitch black, or mirror-sided silvery; rows of distinct, specialized bioluminescent photophores situated ventrolaterally along the belly and branchiostegal membranes; mouth enormous, extending far behind eye, armed with long needle-like dagger teeth; chin barbel equipped with luminous bulb (esca) present in many stomiids; cycloid scales easily shed or skin naked; adipose fin present or absent.",
      "bn": "গাঢ় কালো বা আয়নার মতো রূপালী দেহ; পেটের নিচে দুই পাশে সুনির্দিষ্ট জ্বলজ্বলে আলো উৎপন্নকারী ফটোফোরের সারি; চোখের পেছন পর্যন্ত বিস্তৃত বিশালাকার হাঁ এবং সূঁচালো বিষাক্ত দাঁত; থুতনির নিচে উজ্জ্বল আলোর বাল্বযুক্ত সংবেদনশীল গোঁফ; সহজে খসে পড়া আঁইশ।",
      "keyFeatures": {
        "en": [
          "Ventrolateral series of true bioluminescent photophores with focusing lenses",
          "Huge predatory mouth armed with hinged needle-like fangs",
          "Specialized chin barbel with terminal luminous lure in predatory dragonfishes",
          "Cyclothone represents the most numerically abundant vertebrate genus on Earth"
        ],
        "bn": [
          "পেটের নিচে লেন্সযুক্ত আলো উৎপন্নকারী ফটোফোরের সুস্পষ্ট সারি",
          "বিশাল হাঁ এবং সূঁচালো ড্রাগনসদৃশ ধারালো দাঁত",
          "থুতনির নিচে উজ্জ্বল আলো জ্বালিয়ে শিকার আকর্ষণ করার বিশেষ গোঁফ",
          "Cyclothone গণটি পৃথিবীর সর্বাধিক সংখ্যার মেরুদণ্ডী প্রাণী"
        ]
      }
    },
    "habitat": {
      "en": "Mesopelagic (twilight zone) and bathypelagic open oceanic depths (200–4,500 meters) across all global oceans.",
      "bn": "বিশ্বের সকল মহাসাগরের গোধূলি অঞ্চল ও অতল গভীর সমুদ্র (২০০–৪,৫০০ মিটার গভীরতায়)।",
      "systems": [
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Dominant biomass of oceanic midwaters; undertaking vertical diel migrations and serving as both voracious apex micropredators and essential forage for oceanic tunas and squids.",
      "bn": "গভীর সমুদ্রের প্রধান খাদ্যজালক নিয়ন্ত্রণকারী; রাতে খাবারের খোঁজে উপরে ওঠে এবং টুনা মাছ ও স্কুইডের গুরুত্বপূর্ণ খাদ্য।"
    },
    "feeding": {
      "en": "Macropredators and planktivores. Viperfish and dragonfish impale deep-sea teleosts and squids; bristlemouths filter copepods and euphausiids.",
      "bn": "মাংসাশী শিকারী; ভাইপারফিশ ও ড্রাগনফিশ বড় বড় মাছ গিলে ফেলে এবং ব্রিসলমাউথ ক্ষুদ্র প্ল্যাঙ্কটন ছেঁকে খায়।"
    },
    "reproduction": {
      "en": "Pelagic batch spawners in open oceanic water. Larvae frequently have stalked eyes or elongate trailing guts that retract during metamorphosis.",
      "bn": "উন্মুক্ত সাগরে ডিম ছড়ায়। অদ্ভুত লার্ভা দশায় চোখ বা অন্ত্র দেহের বাইরে ঝুলন্ত থাকে যা রূপান্তরের সময় ভেতরে ঢুকে যায়।"
    },
    "distribution": {
      "en": "Circumglobal across all tropical, subtropical, and temperate oceans. Abundant in offshore deep waters of the Bay of Bengal basin.",
      "bn": "বিশ্বব্যাপী সকল সাগরে বিস্তৃত। বঙ্গোপসাগরের গভীর খাদে এদের বিপুল উপস্থিতি রয়েছে।"
    },
    "importantFamilies": [
      {
        "name": "Stomiidae",
        "commonEn": "Barbeled Dragonfishes",
        "commonBn": "ড্রাগনফিশ গোত্র",
        "diagnosticEn": "Black elongate body, huge fangs, luminous chin barbel, photophores; includes Chauliodus and Stomias.",
        "diagnosticBn": "কালো দেহ, ভয়ংকর দাঁত, আলোকিত গোঁফ ও ফটোফোর; Chauliodus ও Stomias গণ অন্তর্ভুক্ত।"
      },
      {
        "name": "Sternoptychidae",
        "commonEn": "Marine Hatchetfishes",
        "commonBn": "হ্যাচেটফিশ গোত্র",
        "diagnosticEn": "Deep, razor-thin compressed body, mirror-like silver sides, downward-directed photophores for counterillumination.",
        "diagnosticBn": "কুড়ালের মতো চ্যাপ্টা রূপালী শরীর, নিচের দিকে আলো ফেলে ছদ্মবেশ ধারণকারী ফটোফোর।"
      },
      {
        "name": "Gonostomatidae",
        "commonEn": "Bristlemouths",
        "commonBn": "ব্রিসলমাউথ গোত্র",
        "diagnosticEn": "Slender bodies, bristly teeth, includes Cyclothone with trillions of individuals globally.",
        "diagnosticBn": "ক্ষুদ্র চিরুনিসদৃশ দাঁত; ট্রিলিয়ন সংখ্যক সদস্যযুক্ত Cyclothone গণ অন্তর্ভুক্ত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Genera: Chauliodus, Stomias, Cyclothone, Argyropelecus, and Idiacanthus. Key binomials: Chauliodus sloani Bloch & Schneider, 1801 and Cyclothone microdon (Günther, 1878).",
      "bn": "গণ: Chauliodus, Stomias, Cyclothone, Argyropelecus এবং Idiacanthus। প্রধান নাম: Chauliodus sloani Bloch & Schneider, 1801 এবং Cyclothone microdon (Günther, 1878)।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Sloane's Viperfish (Chauliodus sloani), Veiled Anglemouth (Cyclothone microdon), Lovely Hatchetfish (Argyropelecus aculeatus), and Black Dragonfish (Idiacanthus antrostomus).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: স্লোয়ানের ভাইপারফিশ (Chauliodus sloani), ব্রিসলমাউথ (Cyclothone microdon), সিলভার হ্যাচেটফিশ (Argyropelecus aculeatus) এবং ব্ল্যাক ড্রাগনফিশ (Idiacanthus antrostomus)।"
    },
    "additionalInformation": {
      "en": "Cyclothone is estimated to be the most abundant vertebrate genus on Earth, with a global population numbering in the hundreds of trillions of individuals.",
      "bn": "Cyclothone গণটি পৃথিবীর যেকোনো পাখি, স্তন্যপায়ী বা মাছের চেয়ে সংখ্যায় বেশি—সারা বিশ্বে এদের সংখ্যা কয়েকশত ট্রিলিয়ন।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Harold (2003)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-ateleopodiformes",
    "taxonId": "taxon-ateleopodiformes",
    "rank": "order",
    "scientificName": "Ateleopodiformes",
    "bengaliName": "অ্যাটেলিওপোডিফর্মিস (জেলি-নাক মাছ বা ট্যাডপোল ফিশ)",
    "englishName": "Jellynose Fishes / Tadpole Fishes",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিময় পাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Actinopteri",
        "nameBn": "অ্যাক্টিনোপ্টেরি"
      },
      {
        "rank": "infraclass",
        "name": "Teleostei",
        "nameBn": "টেলিয়স্ট"
      },
      {
        "rank": "order",
        "name": "Ateleopodiformes",
        "nameBn": "অ্যাটেলিওপোডিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Bizarre deep-sea benthic fishes with soft, gelatinous bulbous snouts, largely cartilaginous skeletons, elongate tapering bodies, and long anal fins confluent with caudal fins.",
      "bn": "গভীর সমুদ্রের তলদেশের নরম জেলির মতো স্ফীত নাসিকাযুক্ত অদ্ভুত মাছ; যাদের কঙ্কাল মূলত তরুণাস্থিময় এবং লেজের সাথে লম্বা পায়ুপাখনা যুক্ত।"
    },
    "diagnosticCharacteristics": {
      "en": "Body elongate, flaccid, and tapering like a tadpole; snout bulbous and filled with translucent gelatinous connective tissue; skeleton weakly calcified, retaining persistent cartilage; dorsal fin short and placed anteriorly with 3–13 rays; long anal fin with 70–120 rays confluent with tiny caudal fin; pelvic fins reduced to a single elongated ray on throat (jugular); scales tiny or absent.",
      "bn": "ব্যাঙাচির মতো পেছনের দিকে সরু হওয়া নরম শরীর; মুখের সামনে স্ফীত জেলিসদৃশ নরম টিস্যুভরা থ্যাবড়া নাক; কঙ্কাল খুব দুর্বলভাবে খনিজায়িত এবং তরুণাস্থিময়; পিঠের সামনে ছোট পৃষ্ঠপাখনা; লেজের সাথে যুক্ত ৭০–১২০ রশ্মিযুক্ত অত্যন্ত লম্বা পায়ুপাখনা; গলার নিচে শ্রোণীপাখনা একক সুতোর মতো সরু রশ্মিতে রূপান্তরিত; আঁইশ অনুপস্থিত বা অতিক্ষুদ্র।",
      "keyFeatures": {
        "en": [
          "Bulbous, gelatinous, translucent snout housing sensory electroreceptors",
          "Largely cartilaginous, poorly mineralized cranial and axial skeleton",
          "Extremely elongate anal fin confluent with minute caudal fin",
          "Pelvic fins reduced to single filamentous jugular rays on the throat"
        ],
        "bn": [
          "তড়িৎসংবেদী গ্রাহকসমৃদ্ধ স্বচ্ছ স্ফীত জেলিসদৃশ নরম নাক",
          "অত্যন্ত নরম ও তরুণাস্থিময় দুর্বল কঙ্কাল",
          "পুচ্ছপাখনার সাথে মিশে থাকা অতিদীর্ঘ পায়ুপাখনা",
          "গলার নিচে একক সুতোর মতো সরু শ্রোণীপাখনা"
        ]
      }
    },
    "habitat": {
      "en": "Deep continental slopes, submarine canyons, and bathyal soft mud bottoms at depths of 100 to 1,200 meters.",
      "bn": "গভীর মহীঢাল, সাবমেরিন গিরিখাত এবং ১০০ থেকে ১,২০০ মিটার গভীরতার নরম কর্দমাক্ত সমুদ্রতলদেশ।",
      "systems": [
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Specialized benthic suction feeders probing deep bathyal muds for soft-bodied invertebrates.",
      "bn": "গভীর সমুদ্রের তলদেশের নরম কাদা থেকে নরমদেহের প্রাণী চুষে নেওয়া বিশেষায়িত প্রাণী।"
    },
    "feeding": {
      "en": "Suction-feeding benthivores, consuming brittle stars, sea cucumbers, polychaete worms, and decapod crabs with a highly protrusible lower jaw.",
      "bn": "নরম কাদায় বাস করা ভঙ্গুর তারামাছ, সি-কিউকাম্বার, পলিকীট ও কাঁকড়া চুষে খায়।"
    },
    "reproduction": {
      "en": "Oviparous. Epipelagic spherical buoyant eggs; larvae possess transparent bodies that settle onto bathyal slopes upon maturity.",
      "bn": "ডিম্বপ্রসবকারী। ভাসমান গোল ডিম সাগরে ছড়ায় এবং লার্ভা পরিণত হলে গভীর তলদেশে নেমে আসে।"
    },
    "distribution": {
      "en": "Scattered circumglobal distribution in tropical and warm temperate oceans: Caribbean, Eastern Atlantic, Indo-West Pacific, and Indian Ocean.",
      "bn": "ভারত মহাসাগর, ইন্দো-ওয়েস্ট প্যাসিফিক ও আটলান্টিকের গভীর সাগরে বিচ্ছিন্নভাবে বিস্তৃত।"
    },
    "importantFamilies": [
      {
        "name": "Ateleopodidae",
        "commonEn": "Jellynose Fishes",
        "commonBn": "জেলি-নাক মাছ গোত্র",
        "diagnosticEn": "Single living family containing about 12 species in four genera sharing all ordinal characters.",
        "diagnosticBn": "একমাত্র জীবিত গোত্র; ৪টি গণের প্রায় ১২টি প্রজাতি অন্তর্ভুক্ত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Genera: Ateleopus, Ijimaia, Guentherus, and Parateleopus. Key binomials: Ateleopus japonicus Bleeker, 1853 and Ijimaia loppei Roule, 1922.",
      "bn": "গণ: Ateleopus, Ijimaia, Guentherus এবং Parateleopus। প্রধান নাম: Ateleopus japonicus Bleeker, 1853 এবং Ijimaia loppei Roule, 1922।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Pacific Jellynose Fish (Ateleopus japonicus), Loppe's Jellynose Fish (Ijimaia loppei), Jellynose Tadpolefish (Guentherus altivela), and Indian Jellynose (Ateleopus indicus).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: প্যাসিফিক জেলিনোজ ফিশ (Ateleopus japonicus), লোপেস জেলিনোজ ফিশ (Ijimaia loppei), গুন্থার্স ট্যাডপোলফিশ (Guentherus altivela) এবং ইন্ডিয়ান জেলিনোজ ফিশ (Ateleopus indicus)।"
    },
    "additionalInformation": {
      "en": "Ateleopodiformes occupies a key basal position within Eurypterygii, acting as the sister group to all other higher spiny-rayed acanthomorph fishes.",
      "bn": "অ্যাটেলিওপোডিফর্মিস কাঁটাযুক্ত আধুনিক মাছদের (Acanthomorpha) আদিমতম ভিত্তি শাখা হিসেবে বিবর্তনে অত্যন্ত তাৎপর্যপূর্ণ।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Kaga (2016)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-myctophiformes",
    "taxonId": "taxon-myctophiformes",
    "rank": "order",
    "scientificName": "Myctophiformes",
    "bengaliName": "মিক্টোফিফর্মিস (লণ্ঠন মাছ বা ল্যান্টার্নফিশ)",
    "englishName": "Lanternfishes and Blackchins",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিময় পাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Actinopteri",
        "nameBn": "অ্যাক্টিনোপ্টেরি"
      },
      {
        "rank": "infraclass",
        "name": "Teleostei",
        "nameBn": "টেলিয়স্ট"
      },
      {
        "rank": "order",
        "name": "Myctophiformes",
        "nameBn": "মিক্টোফিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Abundant oceanic mesopelagic teleosts with large eyes, an adipose fin, and species-specific patterns of bioluminescent photophores, renowned for massive daily vertical migrations.",
      "bn": "সমুদ্রের গোধূলি অঞ্চলের অত্যন্ত প্রাচুর্যময় মাছ; যাদের বড় চোখ, অ্যাডিপোজ পাখনা এবং প্রজাতিভেদে বিশেষ নকশায় সাজানো আলো উৎপাদনকারী ফটোফোর রয়েছে এবং এরা প্রতিদিন সুবিশাল উল্লম্ব পরিযানে অংশ নেয়।"
    },
    "diagnosticCharacteristics": {
      "en": "Small, laterally compressed, silvery to dark brown oceanic teleosts; head and body equipped with discrete groups of rounded bioluminescent photophores arranged in diagnostic species-specific series; eyes large; mouth large and extending well past eye; adipose fin present; single dorsal fin near midbody; swimbladder present; ctenoid or cycloid scales; massive nocturnal vertical migration.",
      "bn": "ক্ষুদ্র চ্যাপ্টা রূপালী বা কালচে মাছ; দেহের দুই পাশে নির্দিষ্ট নিয়মে সাজানো গোল গোল জ্বলজ্বলে আলো নির্গমনকারী ফটোফোর বিদ্যমান; বড় চোখ; পেছনের দিকে প্রসারিত প্রশস্ত মুখ; অ্যাডিপোজ পাখনা উপস্থিত; পিঠের মাঝখানে একক পৃষ্ঠপাখনা; সাঁতারের পটকা বিদ্যমান; রাতে বিশাল ঝাঁক বেঁধে সমুদ্রপৃষ্ঠে উঠে আসে।",
      "keyFeatures": {
        "en": [
          "Species-specific geometric arrangements of discrete photophores on head and flanks",
          "Conspicuous adipose fin situated between dorsal and forked caudal fins",
          "Largest daily vertical biomass migration on Earth (diel vertical migration from 1,000 m to surface)",
          "Form the primary reflective acoustic component of the ocean's Deep Scattering Layer (DSL)"
        ],
        "bn": [
          "মাথা ও দেহে প্রজাতিভেদে জ্যামিতিক নকশায় সাজানো ফটোফোরের বিন্যাস",
          "পৃষ্ঠপাখনা ও খাঁজযুক্ত লেজের মাঝখানে স্পষ্ট অ্যাডিপোজ পাখনা",
          "পৃথিবীর বৃহত্তম দৈনিক উল্লম্ব জীবভর পরিযান (দিনের ১,০০০ মিটার থেকে রাতে পৃষ্ঠে আগমন)",
          "মহাসাগরের শব্দ তরঙ্গ প্রতিফলক 'ডিপ স্ক্যাটারিং লেয়ার' (DSL)-এর প্রধান উপাদান"
        ]
      }
    },
    "habitat": {
      "en": "Open oceans circumglobally: daytime resting at mesopelagic depths (300–1,200 m) and nighttime foraging in epipelagic surface layers (0–100 m).",
      "bn": "বিশ্বের সকল উন্মুক্ত মহাসাগর: দিনে ৩০০–১,২০০ মিটার গভীরে থাকে এবং রাতে ০–১০০ মিটার অগভীর পৃষ্ঠভাগে উঠে আসে।",
      "systems": [
        "marine"
      ]
    },
    "ecosystem": {
      "en": "The critical trophic nexus of oceanic pelagic food webs; converting zooplankton production into immense fish biomass (estimated 550–660 million metric tons) preyed upon by tuna, billfish, squids, dolphins, and seabirds.",
      "bn": "মহাসাগরীয় খাদ্যজালের মেরুদণ্ড; প্ল্যাঙ্কটন খেয়ে প্রায় ৬০০ মিলিয়ন টন জীবভর তৈরি করে যা টুনা, ডলফিন, স্কুইড ও সামুদ্রিক পাখিদের বাঁচিয়ে রাখে।"
    },
    "feeding": {
      "en": "Planktivorous nocturnal feeders, consuming calanoid copepods, euphausiids, amphipods, ostracods, and chaetognaths in surface waters.",
      "bn": "প্ল্যাঙ্কটনভোজী নিশাচর শিকারী; রাতের অগভীর পানিতে কোপিপড, ক্রিল, ছোট চিংড়ি ও জলজ প্রাণী খায়।"
    },
    "reproduction": {
      "en": "Pelagic broadcast spawners releasing buoyant eggs that hatch into surface-drifting larvae possessing unique eye and snout morphologies.",
      "bn": "খোলা সাগরে ডিম ছাড়ে; ভাসমান ডিম ফুটে লার্ভা তৈরি হয় যা পরে আলো উৎপাদনকারী ফটোফোর অর্জন করে।"
    },
    "distribution": {
      "en": "Abundant in all oceans worldwide from the Arctic to Antarctic. Highly diverse and dominant in deep offshore waters of the Bay of Bengal.",
      "bn": "সুমেরু থেকে কুমেরু পর্যন্ত পৃথিবীর সকল মহাসাগরে বিপুল সংখ্যায় বিদ্যমান। বঙ্গোপসাগরের গভীর জলে অত্যন্ত প্রাচুর্যময়।"
    },
    "importantFamilies": [
      {
        "name": "Myctophidae",
        "commonEn": "Lanternfishes",
        "commonBn": "লণ্ঠন মাছ গোত্র",
        "diagnosticEn": "Arrangement of photophores on head and body diagnostic, adipose fin present, huge mouth; contains ~250 species.",
        "diagnosticBn": "সুনির্দিষ্ট ফটোফোরের সারি, অ্যাডিপোজ পাখনা ও বড় চোখ; প্রায় ২৫০ প্রজাতি অন্তর্ভুক্ত।"
      },
      {
        "name": "Neoscopelidae",
        "commonEn": "Blackchins",
        "commonBn": "ব্ল্যাকচিন গোত্র",
        "diagnosticEn": "Photophores absent or restricted to belly margin, mouth extends past eye, dorsal fin origin ahead of pelvic fins.",
        "diagnosticBn": "ফটোফোর কেবল পেটের কিনারায় সীমাবদ্ধ বা অনুপস্থিত; Neoscopelus গণ অন্তর্ভুক্ত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Genera: Benthosema, Myctophum, Diaphus, Hygophum, and Neoscopelus. Key binomials: Benthosema glaciale (Reinhardt, 1837) and Myctophum punctatum Rafinesque, 1810.",
      "bn": "গণ: Benthosema, Myctophum, Diaphus, Hygophum এবং Neoscopelus। প্রধান নাম: Benthosema glaciale (Reinhardt, 1837) এবং Myctophum punctatum Rafinesque, 1810।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Glacier Lanternfish (Benthosema glaciale), Spotted Lanternfish (Myctophum punctatum), White-spotted Lanternfish (Diaphus rafinesquii), and Large-scaled Lanternfish (Neoscopelus macrolepidotus).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: গ্লেশিয়ার ল্যান্টার্নফিশ (Benthosema glaciale), স্পটেড ল্যান্টার্নফিশ (Myctophum punctatum), হোয়াইট-স্পটেড ল্যান্টার্নফিশ (Diaphus rafinesquii) এবং লার্জস্কেল ল্যান্টার্নফিশ (Neoscopelus macrolepidotus)।"
    },
    "additionalInformation": {
      "en": "Myctophids account for approximately 65% of all deep-sea fish biomass on Earth. Their daily vertical movement constitutes the largest animal migration on our planet in terms of sheer biomass.",
      "bn": "মিক্টোফিড মাছ পৃথিবীর গভীর সমুদ্রের মোট মাছের ওজনের প্রায় ৬৫% গঠন করে এবং এদের দৈনিক চলাচল পৃথিবীর বৃহত্তম জীবভর পরিযান।"
    },
    "orders": [],
    "exampleSpeciesIds": [
      "sp-myctophum-punctatum"
    ],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Catul et al. (2011)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-lampriformes",
    "taxonId": "taxon-lampriformes",
    "rank": "order",
    "scientificName": "Lampriformes",
    "bengaliName": "ল্যাম্প্রিফর্মিস (ওরফিশ বা দাঁড়মাছ ও অপাহ)",
    "englishName": "Opahs, Oarfishes, and Ribbonfishes",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিময় পাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Actinopteri",
        "nameBn": "অ্যাক্টিনোপ্টেরি"
      },
      {
        "rank": "infraclass",
        "name": "Teleostei",
        "nameBn": "টেলিয়স্ট"
      },
      {
        "rank": "order",
        "name": "Lampriformes",
        "nameBn": "ল্যাম্প্রিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Remarkable oceanic pelagic teleosts including the world's longest bony fish (the Giant Oarfish) and the first known warm-blooded fish (the Opah), with extraordinarily protrusible jaws.",
      "bn": "বিখ্যাত মহাসাগরীয় মাছ; যার মধ্যে রয়েছে পৃথিবীর দীর্ঘতম অস্থিময় মাছ (দৈত্যাকার ওরফিশ) এবং প্রথম আবিষ্কৃত সম্পূর্ণ উষ্ণরক্তের মাছ (অপাহ), যাদের মুখ অত্যন্ত প্রসারিত হতে পারে।"
    },
    "diagnosticCharacteristics": {
      "en": "Unique protrusible upper jaw mechanics in which the maxilla slides forward with the premaxilla without any tooth attachment; body either deep, disc-shaped, and laterally compressed (Lampridae) or extraordinarily ribbon-like and elongated up to 11 meters (Regalecidae); no true spines; dorsal fin very long; pelvic fins thoracic or absent; opah (*Lampris*) possesses systemic whole-body endothermy with countercurrent rete mirabile in gill arches.",
      "bn": "চোয়াল অত্যন্ত প্রসারণক্ষম যেখানে ম্যাক্সিলা প্রি-ম্যাক্সিলার সাথে সামনের দিকে ছিটকে বেরিয়ে আসে; শরীর গোলাকার ও চ্যাপ্টা (অপাহ) অথবা ফিতার মতো অত্যন্ত দীর্ঘ ১১ মিটার পর্যন্ত লম্বা (ওরফিশ); প্রকৃত কাঁটা অনুপস্থিত; দীর্ঘ পৃষ্ঠপাখনা; অপাহ মাছ ফুলকায় বিশেষ রক্তজালক (rete mirabile) ব্যবহার করে সারা শরীরে উষ্ণ রক্ত সংবহন বজায় রাখে।",
      "keyFeatures": {
        "en": [
          "Unique protrusion mechanism of upper jaw completely distinct from other teleosts",
          "Giant Oarfish (Regalecus glesne) is the longest living bony fish (up to 11 m)",
          "Opah (Lampris guttatus) exhibits whole-body endothermy (warm-blooded fish)",
          "Brilliant silver coloration with crimson red fins in pelagic taxa"
        ],
        "bn": [
          "অন্যান্য মাছের চেয়ে সম্পূর্ণ ভিন্ন প্রকৃতির অত্যন্ত প্রসারিত চোয়াল ব্যবস্থা",
          "জায়ান্ট ওরফিশ (Regalecus glesne) জীবিত অস্থিময় মাছদের মধ্যে দীর্ঘতম (১১ মিটার পর্যন্ত)",
          "অপাহ মাছ বিশ্বের প্রথম আবিষ্কৃত উষ্ণরক্তের মাছ (পুরো শরীর উষ্ণ রাখতে সক্ষম)",
          "লাল টুকটুকে পাখনা ও রূপালী উজ্জ্বল দেহের বর্ণ"
        ]
      }
    },
    "habitat": {
      "en": "Open oceanic epipelagic and mesopelagic depths down to 1,000 meters in tropical and temperate seas globally.",
      "bn": "বিশ্বের ক্রান্তীয় ও নাতিশীতোষ্ণ মহাসাগরের উপরিভাগ থেকে ১,০০০ মিটার গভীর গোধূলি অঞ্চল।",
      "systems": [
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Active midwater pelagic predators hunting squids and krill; oarfishes maintain vertical orientation ('sea-serpent' swimming) in open waters.",
      "bn": "খোলা সাগরের শিকারী প্রাণী; ওরফিশ পানিতে উল্লম্বভাবে সোজা খাড়া হয়ে ভেসে থেকে জেলিফিশ ও স্কুইড শিকার করে।"
    },
    "feeding": {
      "en": "Carnivorous: opahs feed on deep-sea squids, lanternfishes, and krill; oarfishes consume euphausiids and gelatinous zooplankton via suction.",
      "bn": "মাংসাশী; অপাহ মাছ দ্রুত সাঁতার কেটে স্কুইড ও মাছ শিকার করে; ওরফিশ মুখ হাঁ করে জেলিফিশ ও ক্রিল চুষে খায়।"
    },
    "reproduction": {
      "en": "Pelagic spawning with bright pink or amber buoyant eggs; larvae possess extraordinarily elongated and ornamented dorsal and pelvic fin rays.",
      "bn": "উন্মুক্ত সাগরে উজ্জ্বল গোলাপী ভাসমান ডিম ছাড়ে; লার্ভার পাখনাগুলো অলঙ্কৃত ও দীর্ঘ হয়।"
    },
    "distribution": {
      "en": "Worldwide in all tropical and temperate oceans. Found offshore in the deep central and northern Bay of Bengal.",
      "bn": "বিশ্বের সকল ক্রান্তীয় ও নাতিশীতোষ্ণ মহাসাগরে বিস্তৃত। বঙ্গোপসাগরের গভীর জলসীমায় এদের উপস্থিতি রয়েছে।"
    },
    "importantFamilies": [
      {
        "name": "Lampridae",
        "commonEn": "Opahs / Moonfishes",
        "commonBn": "অপাহ বা মুনফিশ গোত্র",
        "diagnosticEn": "Deep oval body, red fins, warm-blooded systemic endothermy; contains genus Lampris.",
        "diagnosticBn": "ডিম্বাকার রূপালী শরীর, লাল পাখনা, উষ্ণ রক্ত সংবহন; Lampris গণ অন্তর্ভুক্ত।"
      },
      {
        "name": "Regalecidae",
        "commonEn": "Oarfishes",
        "commonBn": "ওরফিশ বা দাঁড়মাছ গোত্র",
        "diagnosticEn": "Ribbon-like body up to 11 m, no anal fin, red crest on head; contains genus Regalecus.",
        "diagnosticBn": "ফিতার মতো ১১ মিটার পর্যন্ত লম্বা দেহ, মাথায় লাল ঝুটি; Regalecus গণ অন্তর্ভুক্ত।"
      },
      {
        "name": "Trachipteridae",
        "commonEn": "Ribbonfishes",
        "commonBn": "রিবনফিশ গোত্র",
        "diagnosticEn": "Elongate compressed body, caudal fin directed upward, long dorsal fin; contains genus Trachipterus.",
        "diagnosticBn": "চ্যাপ্টা ফিতার মতো শরীর, উপরের দিকে মুখ করা লেজ; Trachipterus গণ অন্তর্ভুক্ত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Genera: Lampris, Regalecus, Trachipterus, and Zu. Key binomials: Lampris guttatus (Brünnich, 1788) and Regalecus glesne Ascanius, 1772.",
      "bn": "গণ: Lampris, Regalecus, Trachipterus এবং Zu। প্রধান নাম: Lampris guttatus (Brünnich, 1788) এবং Regalecus glesne Ascanius, 1772।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Giant Oarfish (Regalecus glesne), Opah (Lampris guttatus), Scalloped Ribbonfish (Zu cristatus), and Polka-dot Ribbonfish (Desmodema polystictum).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: জায়ান্ট ওরফিশ (Regalecus glesne), অপাহ বা মুনফিশ (Lampris guttatus), স্ক্যালপড রিবনফিশ (Zu cristatus) এবং পোলকা-ডট রিবনফিশ (Desmodema polystictum)।"
    },
    "additionalInformation": {
      "en": "Wegner et al. (2015) confirmed that the opah (Lampris guttatus) maintains its heart, brain, and swimming muscles 5°C above ambient water temperature, making it the first fully warm-blooded fish known to science.",
      "bn": "২০১৫ সালে বিজ্ঞানীরা প্রমাণ করেন অপাহ মাছ পরিবেশের পানির চেয়ে ৫ ডিগ্রি সেলসিয়াস বেশি উষ্ণতায় নিজের হৃৎপিণ্ড, মস্তিষ্ক ও পেশী সচল রাখতে পারে।"
    },
    "orders": [],
    "exampleSpeciesIds": [
      "sp-lampris-guttatus"
    ],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Wegner et al. (2015)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-polymixiiformes",
    "taxonId": "taxon-polymixiiformes",
    "rank": "order",
    "scientificName": "Polymixiiformes",
    "bengaliName": "পলিমিক্সিসিফর্মিস (দাড়িওয়ালা মাছ বা বেয়ার্ডফিশ)",
    "englishName": "Beardfishes",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিময় পাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Actinopteri",
        "nameBn": "অ্যাক্টিনোপ্টেরি"
      },
      {
        "rank": "infraclass",
        "name": "Teleostei",
        "nameBn": "টেলিয়স্ট"
      },
      {
        "rank": "order",
        "name": "Polymixiiformes",
        "nameBn": "পলিমিক্সিসিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Deep-water marine teleosts possessing a prominent pair of long sensory barbels suspended from the hyoid arch beneath the chin, ctenoid scales, and weak spines in the dorsal and anal fins.",
      "bn": "গভীর সমুদ্রের মাছ, যাদের গলার নিচে হায়য়েড অস্থি থেকে ঝুলন্ত এক জোড়া স্পষ্ট লম্বা সংবেদনশীল গোঁফ বা বার্বেল, টিনয়েড আঁইশ এবং পাখনার কাঁটা রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Moderately deep, compressed body covered in large ctenoid scales; pair of long, thick sensory barbels suspended from the hypohyal bones beneath the lower jaw; dorsal fin with 4–6 spines and 26–38 soft rays; anal fin with 3–4 spines and 13–18 rays; pelvic fins subabdominal with 7–8 rays; palate toothed; large eyes adapted for dim bathyal light.",
      "bn": "মাঝারি চ্যাপ্টা শরীর ও বড় টিনয়েড আঁইশ; নিচের চোয়ালের নিচে গলার হাড় থেকে ঝুলন্ত এক জোড়া দীর্ঘ সংবেদনশীল দাড়ি বা বার্বেল; পৃষ্ঠপাখনায় ৪–৬টি কাঁটা ও নরম রশ্মি; পায়ুপাখনায় ৩–৪টি কাঁটা; বড় চোখ যা গভীর সমুদ্রের মৃদু আলোতে দেখতে সক্ষম।",
      "keyFeatures": {
        "en": [
          "Pair of long, mobile chin barbels suspended from the hypohyal bones of the hyoid arch",
          "Transitional morphology linking primitive teleosts with modern spiny-rayed acanthomorphs",
          "Subabdominal pelvic fins possessing 7 or 8 segmented rays",
          "Ctenoid scales covering body and head"
        ],
        "bn": [
          "গলার হায়য়েড হাড় থেকে ঝুলন্ত এক জোড়া লম্বা সঞ্চালনক্ষম সংবেদনশীল দাড়ি",
          "আদিম মাছ ও আধুনিক কাঁটাযুক্ত মাছের মধ্যবর্তী রূপান্তরকালীন শারীরিক গঠন",
          "৭ বা ৮ রশ্মিযুক্ত তলদেশীয় শ্রোণীপাখনা",
          "মাথা ও দেহে সুবিন্যস্ত টিনয়েড আঁইশ"
        ]
      }
    },
    "habitat": {
      "en": "Deep continental and insular slopes, benthic mud substrates, and submarine ridges from 180 to 800 meters depth.",
      "bn": "মহীঢাল, কর্দমাক্ত সমুদ্রতলদেশ এবং সমুদ্রগর্ভস্থ পর্বতশ্রেণী (১৮০ থেকে ৮০০ মিটার গভীরতায়)।",
      "systems": [
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Benthic carnivores using tactile barbels to detect buried infaunal prey in aphotic bathyal slope habitats.",
      "bn": "গভীর সমুদ্রের অন্ধকার তলদেশের শিকারী; গোঁফ দিয়ে কাদামাটির নিচে লুকানো শিকার শনাক্ত করে।"
    },
    "feeding": {
      "en": "Invertivorous and piscivorous benthivores, feeding on benthic decapod shrimps, polychaete worms, small squids, and bottom-dwelling fishes.",
      "bn": "তলদেশীয় মাংসাশী; চিংড়ি, পলিকীট, ছোট স্কুইড ও তলদেশের ছোট মাছ খায়।"
    },
    "reproduction": {
      "en": "Oviparous. Epipelagic spherical eggs drift in offshore marine currents; juveniles recruit down to bathyal slopes upon maturity.",
      "bn": "ডিম্বপ্রসবকারী। ভাসমান ডিম উন্মুক্ত সাগরে ছাড়ে; রূপান্তরের পর পোনা গভীর সমুদ্রের ঢালে নেমে আসে।"
    },
    "distribution": {
      "en": "Tropical and subtropical oceans globally: Atlantic, Indian, and Western Pacific Oceans.",
      "bn": "আটলান্টিক, ভারত এবং পশ্চিম প্রশান্ত মহাসাগরের ক্রান্তীয় ও উপক্রান্তীয় গভীর সাগরে বিস্তৃত।"
    },
    "importantFamilies": [
      {
        "name": "Polymixiidae",
        "commonEn": "Beardfishes",
        "commonBn": "বেয়ার্ডফিশ গোত্র",
        "diagnosticEn": "Single extant family containing genus Polymixia with about 10 recognized living species.",
        "diagnosticBn": "একমাত্র জীবিত গোত্র; Polymixia গণের প্রায় ১০টি প্রজাতি অন্তর্ভুক্ত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Single extant genus Polymixia Lowe, 1836. Key binomials: Polymixia nobilis Lowe, 1836 and Polymixia japonica Günther, 1877.",
      "bn": "একক জীবিত গণ Polymixia Lowe, 1836। প্রধান নাম: Polymixia nobilis Lowe, 1836 এবং Polymixia japonica Günther, 1877।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Stout Beardfish (Polymixia nobilis), Japanese Beardfish (Polymixia japonica), Silver Beardfish (Polymixia lowei), and Long-beard Beardfish (Polymixia berndti).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: স্টউট বেয়ার্ডফিশ (Polymixia nobilis), জাপানি বেয়ার্ডফিশ (Polymixia japonica), সিলভার বেয়ার্ডফিশ (Polymixia lowei) এবং লং-বিয়ার্ড বেয়ার্ডফিশ (Polymixia berndti)।"
    },
    "additionalInformation": {
      "en": "Polymixiiformes is of profound phylogenetic importance in ichthyology as the sole living lineage of Polymixiiphii, the sister group to all other modern Acanthomorpha (spiny-finned fishes).",
      "bn": "মাছবিজ্ঞানে পলিমিক্সিসিফর্মিস আধুনিক কাঁটাযুক্ত মাছের (Acanthomorpha) আদিমতম জীবিত সহোদর গোষ্ঠী হিসেবে অত্যন্ত গুরুত্বপূর্ণ।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Grande et al. (2013)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-percopsiformes",
    "taxonId": "taxon-percopsiformes",
    "rank": "order",
    "scientificName": "Percopsiformes",
    "bengaliName": "পারকপসিফর্মিস (ট্রাউট-পার্চ ও পাইরেট পার্চ)",
    "englishName": "Trout-perches, Pirate Perches, and Cavefishes",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিময় পাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Actinopteri",
        "nameBn": "অ্যাক্টিনোপ্টেরি"
      },
      {
        "rank": "infraclass",
        "name": "Teleostei",
        "nameBn": "টেলিয়স্ট"
      },
      {
        "rank": "order",
        "name": "Percopsiformes",
        "nameBn": "পারকপসিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Small North American freshwater teleosts uniting primitive soft-rayed features (adipose fin) with derived spiny-rayed traits, including subterranean blind cavefishes and the jugular-anus pirate perch.",
      "bn": "উত্তর আমেরিকার ক্ষুদ্র মিঠাপানির মাছ; যাদের মধ্যে আদিম নরম পাখনার বৈশিষ্ট্য (অ্যাডিপোজ পাখনা) এবং আধুনিক কাঁটাময় পাখনার বৈশিষ্ট্য একত্রে রয়েছে; অন্ধ গুহা মাছ ও গলার নিচে মলদ্বারযুক্ত পাইরেট পার্চ এর অন্তর্ভুক্ত।"
    },
    "diagnosticCharacteristics": {
      "en": "Small freshwater teleosts possessing a mix of primitive (physostomous swimbladder, adipose fin in Percopsidae) and derived traits (true spines in dorsal and anal fins, ctenoid scales); Pirate perch (*Aphredoderus sayanus*) undergoes remarkable ontogenetic forward migration of the anus from normal position in juveniles to a jugular position directly beneath the throat in adults; cavefishes (Amblyopsidae) blind with hypertrophied neuromast sensory systems.",
      "bn": "ছোট মিঠাপানির মাছ; যাতে আদিম বৈশিষ্ট্য (অ্যাডিপোজ পাখনা) ও উন্নত বৈশিষ্ট্য (পাখনার কাঁটা, টিনয়েড আঁইশ) উভয়ই বিদ্যমান; পাইরেট পার্চের বৃদ্ধির সময় মলদ্বার স্বাভাবিক অবস্থান থেকে সরে প্রাপ্তবয়স্ক অবস্থায় সোজা গলার নিচে চলে আসে; গুহামাছে চোখ অনুপস্থিত কিন্তু সংবেদনশীল স্নায়ুতন্ত্র অত্যন্ত উন্নত।",
      "keyFeatures": {
        "en": [
          "Unique ontogenetic migration of the anus to the throat in adult pirate perch (Aphredoderus)",
          "Mosaic combination of adipose fin with true spiny fin rays",
          "Subterranean karst cave adaptations (anophthalmia and depigmentation) in Amblyopsidae",
          "Endemic strictly to North American freshwaters"
        ],
        "bn": [
          "প্রাপ্তবয়স্ক পাইরেট পার্চে মলদ্বার গলার নিচে স্থানান্তরিত হওয়ার অদ্ভুত শারীরিক বৈশিষ্ট্য",
          "অ্যাডিপোজ পাখনার সাথে খাঁটি কাঁটাময় পাখনার যৌথ উপস্থিতি",
          "ভূগর্ভস্থ চুনাপাথরের গুহায় অন্ধত্ব ও বর্ণহীনতার রূপান্তর",
          "সম্পূর্ণরূপে উত্তর আমেরিকার মিঠাপানিতে সীমাবদ্ধ"
        ]
      }
    },
    "habitat": {
      "en": "Clear to sluggish freshwater lakes, vegetated lowland swamps, muddy bayous, and dark subterranean limestone cave pools in North America.",
      "bn": "উত্তর আমেরিকার স্বচ্ছ পাহাড়ি নদী, প্লাবনভূমি, কাদাভরা হ্রদ এবং ভূগর্ভস্থ অন্ধকার চুনাপাথরের গুহার জলাশয়।",
      "systems": [
        "freshwater"
      ]
    },
    "ecosystem": {
      "en": "Benthic micropredators in temperate streams and apex organisms in energy-limited subterranean cave ecosystems.",
      "bn": "শীতল পাহাড়ি নদীর তলদেশীয় শিকারী এবং শক্তিহীন ভূগর্ভস্থ গুহার খাদ্যজালের শীর্ষ প্রাণী।"
    },
    "feeding": {
      "en": "Nocturnal invertivores, feeding on chironomid midge larvae, mayflies, amphipods, isopods, and small aquatic insects.",
      "bn": "নিশাচর পোকাভোজী; মশার লার্ভা, মে-ফ্লাই, ক্ষুদ্র চিংড়ি ও জলজ অমেরুদণ্ডী প্রাণী খায়।"
    },
    "reproduction": {
      "en": "Oviparous. The pirate perch demonstrates unique 'gill-chamber brooding' or substrate broadcasting where eggs are directed into root-tangles via its throat-positioned urogenital papilla.",
      "bn": "ডিম্বপ্রসবকারী। গলার কাছে অবস্থিত প্রজনন অঙ্গের মাধ্যমে গাছের শিকড়ে নিরাপদে ডিম স্থাপন করে।"
    },
    "distribution": {
      "en": "Endemic to North America (Mississippi basin, Atlantic coastal plain, and Great Lakes). Strictly absent in Asia and Bangladesh.",
      "bn": "উত্তর আমেরিকায় সীমাবদ্ধ। বাংলাদেশ ও এশিয়ার প্রাকৃতিক জলসীমায় সম্পূর্ণ অনুপস্থিত।"
    },
    "importantFamilies": [
      {
        "name": "Percopsidae",
        "commonEn": "Trout-perches",
        "commonBn": "ট্রাউট-পার্চ গোত্র",
        "diagnosticEn": "Adipose fin present, ctenoid scales, dorsal fin with 1-2 weak spines; contains Percopsis.",
        "diagnosticBn": "অ্যাডিপোজ পাখনা উপস্থিত, টিনয়েড আঁইশ; Percopsis গণ অন্তর্ভুক্ত।"
      },
      {
        "name": "Aphredoderidae",
        "commonEn": "Pirate Perches",
        "commonBn": "পাইরেট পার্চ গোত্র",
        "diagnosticEn": "Anus located beneath throat in adults, no adipose fin; single living species Aphredoderus sayanus.",
        "diagnosticBn": "প্রাপ্তবয়স্ক অবস্থায় মলদ্বার গলার নিচে অবস্থিত, অ্যাডিপোজ পাখনা নেই; Aphredoderus sayanus অন্তর্ভুক্ত।"
      },
      {
        "name": "Amblyopsidae",
        "commonEn": "Cavefishes",
        "commonBn": "গুহা মাছ গোত্র",
        "diagnosticEn": "Subterranean blind cavefishes, eyes rudimentary or absent, skin depigmented white; includes Amblyopsis.",
        "diagnosticBn": "অন্ধ গুহামাছ, চোখ নামমাত্র বা অনুপস্থিত, বর্ণহীন সাদা শরীর; Amblyopsis গণ অন্তর্ভুক্ত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Genera: Percopsis, Aphredoderus, Amblyopsis, and Forbesichthys. Key binomials: Percopsis omiscomaycus (Walbaum, 1792) and Aphredoderus sayanus (Gilliams, 1824).",
      "bn": "গণ: Percopsis, Aphredoderus, Amblyopsis এবং Forbesichthys। প্রধান নাম: Percopsis omiscomaycus (Walbaum, 1792) এবং Aphredoderus sayanus (Gilliams, 1824)।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Trout-perch (Percopsis omiscomaycus), Pirate Perch (Aphredoderus sayanus), Northern Cavefish (Amblyopsis spelaea), and Spring Cavefish (Forbesichthys agassizii).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: ট্রাউট-পার্চ (Percopsis omiscomaycus), পাইরেট পার্চ (Aphredoderus sayanus), নর্দান কেভফিশ (Amblyopsis spelaea) এবং স্প্রিং কেভফিশ (Forbesichthys agassizii)।"
    },
    "additionalInformation": {
      "en": "Percopsiformes is an archaic relict lineage representing the basalmost surviving branch of the Paracanthopterygii, retaining transitional features from over 70 million years ago.",
      "bn": "পারকপসিফর্মিস প্যারাক্যান্থোপটেরিগি মাছের প্রাচীনতম জীবিত রূপান্তরকালীন নিদর্শন।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Grande et al. (2013)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-zeiformes",
    "taxonId": "taxon-zeiformes",
    "rank": "order",
    "scientificName": "Zeiformes",
    "bengaliName": "জেইফর্মিস (ডরি বা সেন্ট পিটারের মাছ)",
    "englishName": "Dories and Oreos",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিময় পাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Actinopteri",
        "nameBn": "অ্যাক্টিনোপ্টেরি"
      },
      {
        "rank": "infraclass",
        "name": "Teleostei",
        "nameBn": "টেলিয়স্ট"
      },
      {
        "rank": "order",
        "name": "Zeiformes",
        "nameBn": "জেইফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Deep-bodied, razor-thin compressed marine predatory fishes with enormous protrusible mouths, bony bucklers along the belly margin, and long dorsal fin filaments.",
      "bn": "অত্যন্ত চ্যাপ্টা ও থালার মতো গোলাকার গভীর সাগরের শিকারী মাছ; যাদের বিশালাকার প্রসারণক্ষম মুখ, পেটের কিনারায় শক্ত কাঁটাযুক্ত অস্থিপ্লেট এবং দীর্ঘ পৃষ্ঠপাখনা রশ্মি রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Body deep, rhomboid or disc-like, and highly compressed laterally; mouth huge, oblique, with premaxilla and maxilla projecting forward to form a voluminous tubular funnel nearly half the body length; dorsal fin with 7–10 stout spines, frequently bearing long filamentous extensions; anal fin with 1–4 spines; series of bony plates or bucklers along bases of dorsal and anal fins; small ctenoid scales or naked skin; thoracic pelvic fins with 5–10 rays.",
      "bn": "চ্যাপ্টা ও রম্বস আকৃতির শরীর; মুখ অত্যন্ত বিশালাকার এবং শিকার ধরার সময় শরীরের অর্ধেক দৈর্ঘ্যের সমান নলের মতো সামনের দিকে ছিটকে বেরিয়ে আসে; পৃষ্ঠপাখনায় ৭–১০টি শক্ত কাঁটা ও দীর্ঘ সুতো; পায়ুপাখনায় ১–৪টি কাঁটা; পাখনার গোড়ায় ও পেটের নিচে শক্ত অস্থি-ঢাল বা কাঁটাযুক্ত প্লেটের সারি; ক্ষুদ্র টিনয়েড আঁইশ বা মসৃণ ত্বক।",
      "keyFeatures": {
        "en": [
          "Extraordinarily protrusible mouth forming an immense anterior capture tube",
          "Laterally razor-thin, deep rhomboidal body shape for low frontal visual profile",
          "Bony plates (bucklers) along ventral abdomen and bases of dorsal and anal fins",
          "Distinct dark circular ocellus ('St. Peter's thumbprint') on the flanks of Zeus faber"
        ],
        "bn": [
          "শিকার ধরার জন্য নলের মতো বিশালাকার প্রসারিত চোয়াল ব্যবস্থা",
          "সামনে থেকে দেখতে প্রায় অদৃশ্য অত্যন্ত পাতলা ও চ্যাপ্টা দেহ",
          "পেটের নিচে এবং পাখনার গোড়ায় শক্ত কাঁটাময় অস্থিপ্লেটের সারি",
          "জন ডরির দুই পাশে সুস্পষ্ট কালো চোখা দাগ ('সেন্ট পিটারের আঙুলের ছাপ')"
        ]
      }
    },
    "habitat": {
      "en": "Marine continental shelves, upper continental slopes, submarine banks, and deep seamounts (50–1,500 meters depth).",
      "bn": "মহীসোপান, মহীঢাল, সমুদ্রগর্ভস্থ শৈলশিরা ও গভীর সমুদ্রতলদেশ (৫০–১,৫০০ মিটার গভীরতায়)।",
      "systems": [
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Stealth ambush predators in demersal shelf ecosystems; presenting an razor-thin frontal silhouette to stalk schools of pelagic fishes before engulfing them with explosive suction.",
      "bn": "তলদেশের ছদ্মবেশী শিকারী; শরীর এতটাই পাতলা যে সামনে থেকে শিকার মাছ এদের দেখতে পায় না, অতর্কিতে মুখ বাড়িয়ে শিকার গিলে ফেলে।"
    },
    "feeding": {
      "en": "Carnivorous piscivores and teuthivores, preying on clupeoid herrings, sand lances, small gadids, and squids.",
      "bn": "মাংসাশী মাছভোজী; ছোট হেরিং, কড ও স্কুইড শিকার করে।"
    },
    "reproduction": {
      "en": "Broadcast spawners in shelf waters; buoyant eggs drift in oceanic currents before larvae metamorphose into deep-bodied juveniles.",
      "bn": "উন্মুক্ত সাগরে ডিম ছড়ায়; ভাসমান ডিম স্রোতে ভেসে পরিণত হয়।"
    },
    "distribution": {
      "en": "Worldwide across temperate and tropical continental margins in Atlantic, Indian, and Pacific Oceans. Inhabits outer shelf waters of the Indian Ocean.",
      "bn": "আটলান্টিক, ভারত এবং প্রশান্ত মহাসাগরের মহীসোপান ও মহীঢালে বিস্তৃত।"
    },
    "importantFamilies": [
      {
        "name": "Zeidae",
        "commonEn": "Dories",
        "commonBn": "ডরি গোত্র",
        "diagnosticEn": "Large dark eye-spot on sides, long dorsal fin filaments, bony bucklers on belly; includes Zeus and Zenopsis.",
        "diagnosticBn": "দেহের পাশে বড় কালো বৃত্ত, পৃষ্ঠপাখনায় লম্বা সুতো; Zeus ও Zenopsis গণ অন্তর্ভুক্ত।"
      },
      {
        "name": "Oreosomatidae",
        "commonEn": "Oreos",
        "commonBn": "ওরিও গোত্র",
        "diagnosticEn": "Deep bathyal slope fishes, heavy rough ctenoid scales, dark charcoal to purplish coloration.",
        "diagnosticBn": "গভীর সমুদ্রের মাছ, খসখসে টিনয়েড আঁইশ, গাঢ় বেগুনি বা ছাই রঙ; Allocyttus গণ অন্তর্ভুক্ত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Genera: Zeus, Zenopsis, Allocyttus, Cyttopsis, and Grammicolepis. Key binomials: Zeus faber Linnaeus, 1758 and Zenopsis conchifer (Lowe, 1852).",
      "bn": "গণ: Zeus, Zenopsis, Allocyttus, Cyttopsis এবং Grammicolepis। প্রধান নাম: Zeus faber Linnaeus, 1758 এবং Zenopsis conchifer (Lowe, 1852)।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: John Dory (Zeus faber), Cape Dory (Zeus capensis), Mirror Dory (Zenopsis nebulosa), and Oxeye Oreo (Allocyttus folletti).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: জন ডরি (Zeus faber), কেপ ডরি (Zeus capensis), মিরর ডরি (Zenopsis nebulosa) এবং অক্সআই ওরিও (Allocyttus folletti)।"
    },
    "additionalInformation": {
      "en": "The John Dory (Zeus faber) is one of the most highly prized culinary fishes in international gastronomy and has been renowned since Roman antiquity.",
      "bn": "জন ডরি মাছ প্রাচীন রোমান যুগ থেকেই এর সুস্বাদু মাংসের জন্য আন্তর্জাতিক রন্ধনশিল্পে অত্যন্ত সমাদৃত।"
    },
    "orders": [],
    "exampleSpeciesIds": [
      "sp-zeus-faber"
    ],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Tyler et al. (2003)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-trachichthyiformes",
    "taxonId": "taxon-trachichthyiformes",
    "rank": "order",
    "scientificName": "Trachichthyiformes",
    "bengaliName": "ট্র্যাকিকথিফর্মিস (স্লাইমহেড, রাফি ও পাইনকোনফিশ)",
    "englishName": "Slimeheads, Roughies, and Pineconefishes",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিময় পাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Actinopteri",
        "nameBn": "অ্যাক্টিনোপ্টেরি"
      },
      {
        "rank": "infraclass",
        "name": "Teleostei",
        "nameBn": "টেলিয়স্ট"
      },
      {
        "rank": "order",
        "name": "Trachichthyiformes",
        "nameBn": "ট্র্যাকিকথিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Deep-sea and reef acanthomorphs with cavernous mucous-filled laterosensory head cavities, heavy ventral abdominal scutes, bioluminescent bacterial organs, and exceptional longevity.",
      "bn": "গভীর সমুদ্র ও প্রবাল প্রাচীরের মাছ; যাদের মাথায় মিউকাসে ভরা সংবেদনশীল গহ্বর, পেটে ধারালো কাঁটাযুক্ত প্লেট, আলো উৎপাদনকারী মিথোজীবী ব্যাক্টেরিয়া অঙ্গ এবং চরম দীর্ঘায়ু (১৫০ বছরের বেশি) রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Cranial bones excavated by wide, cavernous laterosensory channels covered in thin skin and filled with mucous; abdomen bordered ventrally by a keel of heavy sharp serrated scutes; Pineconefishes (Monocentridae) enclosed in an armor of heavy interlocking platelike scales with symbiotic luminous photophores on the chin; Orange Roughy (*Hoplostethus atlanticus*) exhibits extraordinary longevity exceeding 150 years; pelvic fins with one spine and 6–7 soft rays.",
      "bn": "মাথার খুলির হাড়ে মিউকাসভরা চওড়া সংবেদনশীল গর্তের জালিকা; পেটের নিচে করাতের মতো ধারালো শক্ত প্লেটের সারি; পাইনকোনফিশ শক্ত বর্মসদৃশ আঁইশে ঢাকা এবং থুতনির নিচে আলো উৎপাদনকারী ব্যাক্টেরিয়া ধারণ করে; অরেঞ্জ রাফি মাছ ১৫০ বছরেরও বেশি বাঁচে; শ্রোণীপাখনায় ১টি কাঁটা ও ৬-৭টি নরম রশ্মি বিদ্যমান।",
      "keyFeatures": {
        "en": [
          "Cavernous muciferous cranial sensory channels across the skull roof",
          "Ventral abdominal keel of hard, sharp, serrated scutes",
          "Symbiotic bioluminescent organs on the lower jaw in Monocentridae",
          "Extreme longevity (over 150 years) and late sexual maturation in deep-sea roughies"
        ],
        "bn": [
          "মাথার খুলির উপর মিউকাসভরা গভীর সংবেদনশীল খালের জালিকা",
          "পেটের নিচে করাতের মতো ধারালো শক্ত আঁইশের শক্ত শৈলশিরা",
          "নিচের চোয়ালে আলো উৎপাদনকারী মিথোজীবী ব্যাক্টেরিয়ার অঙ্গ",
          "চরম দীর্ঘায়ু (১৫০ বছরেরও বেশি আয়ু) এবং অত্যন্ত দেরিতে প্রজননক্ষম হওয়া"
        ]
      }
    },
    "habitat": {
      "en": "Deep continental slopes, submarine seamounts, oceanic ridges, and coastal rocky reefs (100–1,800 meters depth).",
      "bn": "গভীর মহীঢাল, সমুদ্রগর্ভস্থ পর্বতশ্রেণী এবং উপকূলীয় পাথুরে প্রাচীর (১০০–১,৮০০ মিটার গভীরতায়)।",
      "systems": [
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Aggregation predators schooling around bathyal seamount pinnacles; slow-growing keystone species extraordinarily vulnerable to deep-water commercial bottom trawling.",
      "bn": "গভীর সমুদ্রের শৈলশিরা ঘিরে বাস করা শিকারী মাছ; এদের ধীর বৃদ্ধির কারণে গভীর সমুদ্রের ট্রলিংয়ে এদের অস্তিত্ব চরম সংকটাপন্ন।"
    },
    "feeding": {
      "en": "Benthopelagic carnivores, consuming deep-sea benthopelagic shrimps, amphipods, lanternfishes, and squid.",
      "bn": "মাংসাশী; গভীর সমুদ্রের চিংড়ি, লণ্ঠন মাছ ও স্কুইড খায়।"
    },
    "reproduction": {
      "en": "Extremely slow maturation: Orange roughy does not reach sexual maturity until 25–30 years of age, forming dense seasonal spawning schools over specific seamount peaks.",
      "bn": "অত্যন্ত ধীর প্রজনন পরিপক্কতা; ২৫-৩০ বছর বয়সে এরা প্রথম প্রজননক্ষম হয় এবং নির্দিষ্ট পাহাড়ের চূড়ায় ডিম ছাড়তে জড়ো হয়।"
    },
    "distribution": {
      "en": "Circumglobal across tropical and temperate oceans. Prominent in the Southern Ocean, Indian Ocean, and South Pacific.",
      "bn": "বিশ্বের সকল মহাসাগরের গভীর অঞ্চলে বিস্তৃত। দক্ষিণ মহাসাগর ও ভারত মহাসাগরের শৈলশিরায় ব্যাপকভাবে উপস্থিত।"
    },
    "importantFamilies": [
      {
        "name": "Trachichthyidae",
        "commonEn": "Slimeheads / Roughies",
        "commonBn": "স্লাইমহেড বা রাফি গোত্র",
        "diagnosticEn": "Cavernous head, abdominal scutes, red to orange coloration; includes Hoplostethus.",
        "diagnosticBn": "মাথায় মিউকাস গহ্বর, পেটে ধারালো প্লেট, কমলা-লাল বর্ণ; Hoplostethus গণ অন্তর্ভুক্ত।"
      },
      {
        "name": "Monocentridae",
        "commonEn": "Pineconefishes",
        "commonBn": "পাইনকোনফিশ গোত্র",
        "diagnosticEn": "Body armored in rigid pinecone-like scales, luminous organs on lower jaw; includes Monocentris.",
        "diagnosticBn": "পাইন ফলের মতো শক্ত বর্মে ঢাকা শরীর, চোয়ালে আলোক অঙ্গ; Monocentris গণ অন্তর্ভুক্ত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Genera: Hoplostethus, Trachichthys, Monocentris, and Cleidopus. Key binomials: Hoplostethus atlanticus Collett, 1889 and Monocentris japonica (Houttuyn, 1782).",
      "bn": "গণ: Hoplostethus, Trachichthys, Monocentris এবং Cleidopus। প্রধান নাম: Hoplostethus atlanticus Collett, 1889 এবং Monocentris japonica (Houttuyn, 1782)।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Orange Roughy (Hoplostethus atlanticus), Japanese Pineconefish (Monocentris japonica), Australian Pineapplefish (Cleidopus gloriamaris), and Silver Roughy (Hoplostethus mediterraneus).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: অরেঞ্জ রাফি (Hoplostethus atlanticus), জাপানি পাইনকোনফিশ (Monocentris japonica), অস্ট্রেলিয়ান আনারস মাছ (Cleidopus gloriamaris) এবং সিলভার রাফি (Hoplostethus mediterraneus)।"
    },
    "additionalInformation": {
      "en": "Radioisotope dating of otoliths confirmed that the Orange Roughy can attain an age of over 150 to 180 years, ranking among the longest-lived vertebrates on Earth.",
      "bn": "কানের অটোলিথ হাড়ের আইসোটোপ পরীক্ষায় প্রমাণিত হয়েছে অরেঞ্জ রাফি মাছ ১৫০ থেকে ১৮০ বছর পর্যন্ত বাঁচতে পারে, যা মেরুদণ্ডী প্রাণীদের মধ্যে দীর্ঘতমদের অন্যতম।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Fenton et al. (1991)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-beryciformes",
    "taxonId": "taxon-beryciformes",
    "rank": "order",
    "scientificName": "Beryciformes",
    "bengaliName": "বেরিসিফর্মিস (আলফনসিনো, ফ্যানটুথ ও ফ্ল্যাশলাইটফিশ)",
    "englishName": "Alfonsinos, Fangtooths, and Spiny-jawed Fishes",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিময় পাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Actinopteri",
        "nameBn": "অ্যাক্টিনোপ্টেরি"
      },
      {
        "rank": "infraclass",
        "name": "Teleostei",
        "nameBn": "টেলিয়স্ট"
      },
      {
        "rank": "order",
        "name": "Beryciformes",
        "nameBn": "বেরিসিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Basal spiny-rayed marine teleosts characterized by retaining an orbitosphenoid cranial bone, crimson-red coloration in deep taxa, and extreme dental adaptations in the legendary deep-sea Fangtooth.",
      "bn": "আদিম কাঁটাময় সামুদ্রিক মাছ; যাদের করোটিতে অরবিটস্ফেনয়েড হাড় থাকে, গভীর পানির প্রজাতিগুলো লাল রঙের এবং এদের মধ্যে বিখ্যাত ফ্যানটুথ মাছের সবচেয়ে বড় শিকারী দাঁত রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Retention of a primitive orbitosphenoid bone in cranium; pelvic fins thoracic or subabdominal with 1 spine and 5–10 soft rays; prominent ctenoid scales; dorsal fin with 3–12 strong spines; the Fangtooth (*Anoplogaster cornuta*) possesses disproportionately gigantic fang-like teeth that fit into sockets in the skull roof when the mouth closes; includes suborder Holocentroidei (squirrelfishes) in Eschmeyer (2026).",
      "bn": "মাথার খুলিতে আদিম অরবিটস্ফেনয়েড হাড় বিদ্যমান; শ্রোণীপাখনায় ১টি কাঁটা ও ৫-১০টি নরম রশ্মি; শক্ত টিনয়েড আঁইশ; পৃষ্ঠপাখনায় ৩-১২টি ধারালো কাঁটা; ফ্যানটুথ মাছের দেহের অনুপাতে সবচেয়ে বিশালাকার দাঁত থাকে যা মুখ বন্ধ করার সময় খুলির বিশেষ গর্তে ঢুকে যায়; এশমেয়ার (২০২৬) অনুসারে স্কুইরেলফিশও এর অন্তর্ভুক্ত।",
      "keyFeatures": {
        "en": [
          "Retention of primitive orbitosphenoid cranial bone lost in higher acanthomorphs",
          "Fangtooth (Anoplogaster) possesses the largest teeth relative to body size of any marine animal",
          "Pelvic fins possessing more than five soft rays (6 to 10 soft rays)",
          "Bright crimson red body coloration in commercial bathyal alfonsinos"
        ],
        "bn": [
          "উন্নত কাঁটাময় মাছে অনুপস্থিত আদিম অরবিটস্ফেনয়েড খুলি-অস্থির উপস্থিতি",
          "দেহের আকারের তুলনায় ফ্যানটুথ মাছের দাঁত যেকোনো সামুদ্রিক প্রাণীর চেয়ে বড়",
          "শ্রোণীপাখনায় ৫টির বেশি (৬ থেকে ১০টি) নরম রশ্মি",
          "বাণিজ্যিক গভীর সমুদ্রের আলফনসিনো মাছে উজ্জ্বল লাল বর্ণ"
        ]
      }
    },
    "habitat": {
      "en": "Bathypelagic depths down to 5,000 meters (Fangtooth) and deep-sea rocky banks (Alfonsinos), plus shallow tropical coral reefs (Squirrelfishes).",
      "bn": "৫,০০০ মিটার অতল সমুদ্রের গভীরতা থেকে শুরু করে মহীঢাল এবং অগভীর প্রবাল প্রাচীর।",
      "systems": [
        "marine"
      ]
    },
    "ecosystem": {
      "en": "High-trophic bathypelagic apex micropredators in the deep sea and nocturnal foragers on tropical coral reefs.",
      "bn": "গভীর সমুদ্রের শীর্ষ শিকারী এবং অগভীর প্রবাল প্রাচীরের নিশাচর শিকারী প্রাণী।"
    },
    "feeding": {
      "en": "Carnivorous: fangtooths impale bathypelagic fishes and squids; alfonsinos feed on lanternfishes and pelagic decapods; reef beryciforms eat crabs.",
      "bn": "মাংসাশী; ফ্যানটুথ গভীর পানির মাছ ও স্কুইড শিকার করে; আলফনসিনো লণ্ঠন মাছ ও চিংড়ি খায়।"
    },
    "reproduction": {
      "en": "Pelagic broadcast spawning. Fangtooth larvae undergo dramatic metamorphic remodeling from tiny, spiny surface forms into deep-sea adults.",
      "bn": "উন্মুক্ত সাগরে ডিম ছড়ায়। ফ্যানটুথের লার্ভা পৃষ্ঠভাগে বাস করে এবং রূপান্তরের পর গভীর অতলে চলে যায়।"
    },
    "distribution": {
      "en": "Circumglobal across tropical, subtropical, and temperate oceans. Inhabits deep offshore banks of the northern Indian Ocean.",
      "bn": "বিশ্বের সকল ক্রান্তীয় ও নাতিশীতোষ্ণ গভীর সমুদ্রে বিস্তৃত। ভারত মহাসাগরে এদের উপস্থিতি রয়েছে।"
    },
    "importantFamilies": [
      {
        "name": "Berycidae",
        "commonEn": "Alfonsinos",
        "commonBn": "আলফনসিনো গোত্র",
        "diagnosticEn": "Deep compressed red bodies, large eyes, forked tail, commercial food fishes; includes Beryx.",
        "diagnosticBn": "উজ্জ্বল লাল শরীর, বড় চোখ, সুস্বাদু বাণিজ্যিক মাছ; Beryx গণ অন্তর্ভুক্ত।"
      },
      {
        "name": "Anoplogastridae",
        "commonEn": "Fangtooths",
        "commonBn": "ফ্যানটুথ গোত্র",
        "diagnosticEn": "Massive fangs fitting into skull roof pockets, black armored body; single genus Anoplogaster.",
        "diagnosticBn": "বিশালাকার ভয়ংকর দাঁত, কালো বর্মসদৃশ আঁইশ; Anoplogaster গণ অন্তর্ভুক্ত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Genera: Beryx, Anoplogaster, and Melamphaes. Key binomials: Beryx decadactylus Cuvier, 1829 and Anoplogaster cornuta (Valenciennes, 1833).",
      "bn": "গণ: Beryx, Anoplogaster এবং Melamphaes। প্রধান নাম: Beryx decadactylus Cuvier, 1829 এবং Anoplogaster cornuta (Valenciennes, 1833)।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Alfonsino (Beryx decadactylus), Common Fangtooth (Anoplogaster cornuta), Splendid Alfonsino (Beryx splendens), and Shorthorn Fangtooth (Anoplogaster brachycera).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: আলফনসিনো (Beryx decadactylus), কমন ফ্যানটুথ (Anoplogaster cornuta), স্প্লেনডিড আলফনসিনো (Beryx splendens) এবং শর্টহর্ন ফ্যানটুথ (Anoplogaster brachycera)।"
    },
    "additionalInformation": {
      "en": "The Fangtooth (Anoplogaster cornuta) holds the record for having the largest teeth relative to body size of any fish, requiring specialized hollow sockets in the roof of its skull to close its jaws without piercing its brain.",
      "bn": "ফ্যানটুথ মাছের দাঁত এতটাই বড় যে মুখ বন্ধ করার সময় মস্তিষ্ক যেন বিদ্ধ না হয় সেজন্য খুলির ভেতরে বিশেষ পকেট রয়েছে।"
    },
    "orders": [],
    "exampleSpeciesIds": [
      "sp-beryx-decadactylus"
    ],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Moore (1993)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-ophidiiformes",
    "taxonId": "taxon-ophidiiformes",
    "rank": "order",
    "scientificName": "Ophidiiformes",
    "bengaliName": "ওফিডিফর্মিস (কাস্ক-ইল, ব্রোটুলা ও মুক্তামাছ)",
    "englishName": "Cusk-eels, Brotulas, and Pearlfishes",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিময় পাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Actinopteri",
        "nameBn": "অ্যাক্টিনোপ্টেরি"
      },
      {
        "rank": "infraclass",
        "name": "Teleostei",
        "nameBn": "টেলিয়স্ট"
      },
      {
        "rank": "order",
        "name": "Ophidiiformes",
        "nameBn": "ওফিডিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Slender, eel-like benthic and inquiline marine teleosts with continuous dorsal and anal fins, jugular pelvic rays on the throat, and holding the world record for the deepest living fish.",
      "bn": "সর্পিল তলদেশীয় ও পরজীবী সামুদ্রিক মাছ; যাদের পিঠ ও পায়ুপাখনা লেজের সাথে একটানা যুক্ত, গলার নিচে গোঁফের মতো শ্রোণীপাখনা এবং পৃথিবীর গভীরতম স্থানে বেঁচে থাকার রেকর্ড রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Body slender, elongate, and tapering; dorsal and anal fins very long, continuous and confluent with the reduced caudal fin; pelvic fins reduced to 1 or 2 slender rays situated forward under the throat (jugular) or chin (mental); swimbladder modified with specialized sonic muscles; Pearlfishes (Carapidae) possess a slender naked body and live as inquiline symbionts inside sea cucumbers; holds deepest fish record (*Abyssobrotula galatheae* taken at 8,370 m depth).",
      "bn": "লম্বা সরু সর্পিল দেহ; পৃষ্ঠ ও পায়ুপাখনা দীর্ঘ এবং লেজের সাথে একটানা সংযুক্ত; শ্রোণীপাখনা গলার নিচে ১ বা ২টি সুতোর মতো রশ্মিতে রূপান্তরিত; পটকায় শব্দ তৈরির বিশেষ পেশী থাকে; মুক্তামাছ (Carapidae) সামুদ্রিক শসা (সি-কিউকাম্বার)-এর শরীরের ভেতর বাস করে; আবাইসোব্রোটুলা সমুদ্রের ৮,৩৭০ মিটার গভীরে জীবিত থাকার বিশ্বরেকর্ডধারী।",
      "keyFeatures": {
        "en": [
          "Pelvic fins reduced to 1 or 2 sensory rays positioned beneath throat or chin",
          "Continuous dorsal and anal fins confluent with minute caudal fin",
          "Inquiline commensalism and parasitism inside holothurians in Carapidae (pearlfishes)",
          "Deepest collected vertebrate species on Earth (Abyssobrotula galatheae at 8,370 m)"
        ],
        "bn": [
          "গলার নিচে অবস্থিত ১ বা ২টি সংবেদনশীল সুতোর মতো শ্রোণীপাখনা",
          "লেজের সাথে মিশে থাকা দীর্ঘ অবিচ্ছিন্ন পৃষ্ঠ ও পায়ুপাখনা",
          "মুক্তামাছের সামুদ্রিক শসার দেহের ভেতর প্রবেশ করে সহাবস্থান বা পরজীবী জীবন",
          "পৃথিবীর গভীরতম স্থানে (৮,৩৭০ মিটার) সংগৃহীত মেরুদণ্ডী প্রাণী (Abyssobrotula galatheae)"
        ]
      }
    },
    "habitat": {
      "en": "Marine benthic habitats from intertidal coral reefs and sand bottoms down to abyssal plains and hadal oceanic trenches (0–8,370 m depth).",
      "bn": "উপকূলীয় প্রবাল প্রাচীর থেকে শুরু করে অতল সমুদ্রের অতল স্পর্শী ট্রেঞ্চ (০–৮,৩৭০ মিটার গভীরতা পর্যন্ত)।",
      "systems": [
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Dominant benthic predators on bathyal and abyssal sediment slopes; pearlfishes exhibit specialized endosymbiosis in reef invertebrates.",
      "bn": "গভীর সমুদ্রের নরম তলদেশের প্রধান শিকারী; মুক্তামাছ প্রবাল প্রাচীরের অমেরুদণ্ডী প্রাণীর সাথে মিথোজীবী সম্পর্ক রাখে।"
    },
    "feeding": {
      "en": "Carnivorous scavengers and predators, feeding on polychaetes, decapods, and fishes. Parasitic carapids consume the internal gonads and gills of host sea cucumbers.",
      "bn": "মাংসাশী ও পরজীবী; তলদেশের কীট ও মাছ খায়; পরজীবী মুক্তামাছ ধারক সি-কিউকাম্বারের ফুলকা ও প্রজনন অঙ্গ খেয়ে বেঁচে থাকে।"
    },
    "reproduction": {
      "en": "Both oviparous and viviparous. Bythitidae species have internal fertilization via an copulatory intromittent organ, giving birth to live young; carapids have vexillifer larvae.",
      "bn": "ডিম্বপ্রসবকারী ও জরায়ুজ উভয়ই। অনেক প্রজাতি সরাসরি জীবিত বাচ্চা প্রসব করে; কারাপিডি গোত্রের অদ্ভুত ভেক্সিলিফার লার্ভা থাকে।"
    },
    "distribution": {
      "en": "Worldwide in all oceans from shallow reefs to the deepest hadal trenches. Brotula multibarbata occurs in northern Indian Ocean and Bay of Bengal waters.",
      "bn": "বিশ্বের সকল মহাসাগরে বিস্তৃত। ব্রোটুলা মাছ (Brotula multibarbata) বঙ্গোপসাগরের গভীর তলদেশে পাওয়া যায়।"
    },
    "importantFamilies": [
      {
        "name": "Ophidiidae",
        "commonEn": "Cusk-eels",
        "commonBn": "কাস্ক-ইল গোত্র",
        "diagnosticEn": "Scales present, pelvic fins under chin, oviparous, includes deep abyssal forms; includes Ophidion.",
        "diagnosticBn": "আঁইশযুক্ত, থুতনির নিচে শ্রোণী রশ্মি, ডিম পাড়ে; Ophidion গণ অন্তর্ভুক্ত।"
      },
      {
        "name": "Carapidae",
        "commonEn": "Pearlfishes",
        "commonBn": "মুক্তামাছ গোত্র",
        "diagnosticEn": "Scaleless, translucent, anus placed far forward, inquilines in sea cucumbers; includes Carapus.",
        "diagnosticBn": "স্বচ্ছ আঁইশহীন দেহ, সি-কিউকাম্বারের পায়ুপথ দিয়ে ভেতরে ঢুকে বাস করে; Carapus গণ অন্তর্ভুক্ত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Genera: Brotula, Ophidion, Carapus, and Abyssobrotula. Key binomials: Brotula multibarbata Temminck & Schlegel, 1846 and Abyssobrotula galatheae Nielsen, 1977.",
      "bn": "গণ: Brotula, Ophidion, Carapus এবং Abyssobrotula। প্রধান নাম: Brotula multibarbata Temminck & Schlegel, 1846 এবং Abyssobrotula galatheae Nielsen, 1977।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Goatsbeard Brotula (Brotula multibarbata), Pearlfish (Carapus acus), Abyssal Cusk-eel (Abyssobrotula galatheae), and Snake Cusk-eel (Ophidion barbatum).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: গোটসবার্ড ব্রোটুলা (Brotula multibarbata), পার্লফিশ বা মুক্তামাছ (Carapus acus), অতল সাগরের কাস্ক-ইল (Abyssobrotula galatheae) এবং স্নেক কাস্ক-ইল (Ophidion barbatum)।"
    },
    "additionalInformation": {
      "en": "Abyssobrotula galatheae collected in the Puerto Rico Trench at 8,370 meters depth holds the official verified scientific record for the deepest-dwelling fish ever found on Earth.",
      "bn": "পুয়ের্তো রিকো ট্রেঞ্চের ৮,৩৭০ মিটার গভীর থেকে সংগৃহীত আবাইসোব্রোটুলা পৃথিবীর সর্বাধিক গভীরতায় বসবাসকারী মাছের বৈজ্ঞানিক স্বীকৃতিপ্রাপ্ত।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Nielsen et al. (1999)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-batrachoidiformes",
    "taxonId": "taxon-batrachoidiformes",
    "rank": "order",
    "scientificName": "Batrachoidiformes",
    "bengaliName": "বাট্রাকয়ডিফর্মিস (টডফিশ বা কোলাব্যাঙ মাছ)",
    "englishName": "Toadfishes and Midshipmen",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিময় পাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Actinopteri",
        "nameBn": "অ্যাক্টিনোপ্টেরি"
      },
      {
        "rank": "infraclass",
        "name": "Teleostei",
        "nameBn": "টেলিয়স্ট"
      },
      {
        "rank": "order",
        "name": "Batrachoidiformes",
        "nameBn": "বাট্রাকয়ডিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Bottom-dwelling ambush predatory marine teleosts with broad depressed heads, wide frog-like mouths, venomous spines in some taxa, and sonic swimbladders producing loud vocalizations.",
      "bn": "তলদেশীয় শিকারী সামুদ্রিক মাছ; যাদের চওড়া ব্যাঙের মতো মাথা, প্রশস্ত মুখ, কিছু প্রজাতিতে বিষাক্ত কাঁটা এবং শব্দ তৈরির পটকা থাকে যার মাধ্যমে এরা জোরে ডাকাডাকি করতে পারে।"
    },
    "diagnosticCharacteristics": {
      "en": "Head large, broad, and dorsoventrally depressed; mouth very wide, armed with stout conical teeth; pelvic fins jugular, inserted well forward of broad fan-like pectoral fins; first dorsal fin small with 2–3 stout sharp spines (hollow and connected to venom glands in Thalassophryninae); second dorsal and anal fins long; skin naked or covered in small cycloid scales; sonic swimbladder muscles capable of contracting hundreds of times per second to generate loud grunts, boatwhistles, and hums; midshipmen (*Porichthys*) have rows of luminous photophores.",
      "bn": "মাথা চ্যাপ্টা ও অত্যন্ত চওড়া; মুখ ব্যাঙের মতো প্রশস্ত ও শক্ত দাঁতযুক্ত; বক্ষপাখনার আগে গলার নিচে শ্রোণীপাখনা অবস্থিত; প্রথম পৃষ্ঠপাখনায় ২–৩টি শক্ত কাঁটা (কিছু প্রজাতিতে বিষগ্রন্থিযুক্ত ফাঁপা বিষাক্ত কাঁটা); শব্দ উৎপাদনকারী পটকার পেশী সেকেন্ডে শতবার স্পন্দিত হয়ে তীব্র গর্জন ও ভোঁ শব্দের গান তৈরি করতে পারে; পোরিকথিস গণে উজ্জ্বল আলো নির্গমনকারী ফটোফোর থাকে।",
      "keyFeatures": {
        "en": [
          "Superfast sonic muscles on the swimbladder producing audible vocal 'boatwhistles' and hums",
          "Hollow venomous dorsal and opercular spines in Thalassophryne",
          "Broad depressed head and jugular pelvic fins placed anterior to pectorals",
          "Multiple rows of bioluminescent photophores in midshipmen (Porichthys)"
        ],
        "bn": [
          "পটকার পেশীর দ্রুত কম্পন দ্বারা তীব্র ভোঁ শব্দ ও গান তৈরির ক্ষমতা",
          "থালাসোফ্রিন গণে ফাঁপা কাঁটার ভেতর দিয়ে বিষ ঢালার ব্যবস্থা",
          "চওড়া ব্যাঙের মতো মাথা ও বক্ষপাখনার সামনে গলার নিচে শ্রোণীপাখনা",
          "পোরিকথিস মাছে শরীরে সারিবদ্ধ আলো নির্গমনকারী ফটোফোরের উপস্থিতি"
        ]
      }
    },
    "habitat": {
      "en": "Marine benthic littoral zones, estuaries, muddy bays, sandy continental shelves, and tropical freshwater rivers.",
      "bn": "উপকূলীয় সমুদ্র, মোহনা, কর্দমাক্ত উপসাগর এবং ক্রান্তীয় মিঠাপানির নদী।",
      "systems": [
        "marine",
        "brackish",
        "freshwater"
      ]
    },
    "ecosystem": {
      "en": "Cryptic ambush predators concealing themselves beneath mud or rock shelters, regulating populations of crabs, shrimp, and small benthic fishes.",
      "bn": "পাথর ও কাদার নিচে ওত পেতে থাকা শিকারী; কাঁকড়া, চিংড়ি ও ছোট মাছ শিকার করে।"
    },
    "feeding": {
      "en": "Carnivorous suction-feeders, snapping up decapod crabs, molluscs, worms, and demersal teleosts with explosive jaw expansion.",
      "bn": "মাংসাশী; শক্ত খোলসের কাঁকড়া, শামুক ও ছোট মাছ গিলে খায়।"
    },
    "reproduction": {
      "en": "Oviparous with paternal care. Males vocalize to attract females into rocky burrows; females attach large adhesive eggs to the roof of the nest; males fiercely guard eggs and fry.",
      "bn": "পুরুষ মাছ সুর করে ডেকে ডেকে স্ত্রী মাছকে পাথরের বাসায় আকর্ষণ করে; স্ত্রী মাছ বাসার ছাদে ডিম সেঁটে দিলে পুরুষ মাছ তা পাহারা দেয়।"
    },
    "distribution": {
      "en": "Coastal waters of the Americas, Africa, the Mediterranean, and the Indo-West Pacific. Present in the northern Indian Ocean.",
      "bn": "আটলান্টিক, ভূমধ্যসাগর এবং ভারত ও প্রশান্ত মহাসাগরের উপকূলীয় জলসীমায় বিস্তৃত।"
    },
    "importantFamilies": [
      {
        "name": "Batrachoididae",
        "commonEn": "Toadfishes",
        "commonBn": "টডফিশ গোত্র",
        "diagnosticEn": "Single family containing all toadfishes and midshipmen with about 83 recognized species.",
        "diagnosticBn": "একমাত্র পরিবার; প্রায় ৮৩টি প্রজাতিসহ সকল টডফিশ ও মিডশিপম্যান অন্তর্ভুক্ত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Genera: Opsanus, Porichthys, Thalassophryne, and Batrachoides. Key binomials: Opsanus tau (Linnaeus, 1766) and Porichthys notatus Girard, 1854.",
      "bn": "গণ: Opsanus, Porichthys, Thalassophryne এবং Batrachoides। প্রধান নাম: Opsanus tau (Linnaeus, 1766) এবং Porichthys notatus Girard, 1854।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Oyster Toadfish (Opsanus tau), Plainfin Midshipman (Porichthys notatus), Venomous Toadfish (Thalassophryne amazonica), and Lusitanian Toadfish (Halobatrachus didactylus).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: অয়েস্টার টডফিশ (Opsanus tau), প্লেইনফিন মিডশিপম্যান (Porichthys notatus), বিষাক্ত টডফিশ (Thalassophryne amazonica) এবং লুসিটানিয়ান টডফিশ (Halobatrachus didactylus)।"
    },
    "additionalInformation": {
      "en": "Plainfin Midshipman males sing continuous nocturnal hums exceeding 100 Hz for hours to court females, a neuroethological model for human acoustic motor patterning.",
      "bn": "মিডশিপম্যান মাছের গান এত উচ্চশব্দের হয় যে তা উপকূলে থাকা হাউসবোটের ভেতর স্পষ্ট শোনা যায়; স্নায়ুবিজ্ঞানে এটি অত্যন্ত গুরুত্বপূর্ণ মডেল।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Collette (1966)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-gobiiformes",
    "taxonId": "taxon-gobiiformes",
    "rank": "order",
    "scientificName": "Gobiiformes",
    "bengaliName": "গোবিফর্মিস (বেলে মাছ, কাদা-হাঁটা পেরিওফথ্যালমাস ও স্লিপার)",
    "englishName": "Gobies, Mudskippers, Sleepers, and Nurseryfishes",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিময় পাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Actinopteri",
        "nameBn": "অ্যাক্টিনোপ্টেরি"
      },
      {
        "rank": "infraclass",
        "name": "Teleostei",
        "nameBn": "টেলিয়স্ট"
      },
      {
        "rank": "order",
        "name": "Gobiiformes",
        "nameBn": "গোবিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "One of the most diverse vertebrate orders on Earth (>2,200 species), characterized by pelvic fins united into a ventral suction cup, amphibious mudskippers that walk on land, and tiny freshwater and reef gobies.",
      "bn": "পৃথিবীর সর্বাধিক প্রজাতিসমৃদ্ধ মেরুদণ্ডী বর্গগুলোর অন্যতম (>২,২০০ প্রজাতি); যাদের পেটের নিচের শ্রোণীপাখনা চোষক বা কাপে রূপান্তরিত, ডাঙ্গায় হেঁটে চলা উভচর কাদা-হাঁটা পেরিওফথ্যালমাস (মাডস্কিপার) এবং বিভিন্ন মিষ্টি ও নোনা পানির বেলে মাছ এর অন্তর্ভুক্ত।"
    },
    "diagnosticCharacteristics": {
      "en": "Small to moderate teleosts; pelvic fins typically united medially into a ventral thoracic sucking disc used to adhere to rocks and substrate (separate in Eleotridae); head usually scaleless; two separate dorsal fins (first with flexible spines); swimbladder absent in benthic adults; lateral line sensory canal represented by pit organs on head; mudskippers (Oxudercidae) possess vascularized buccal cavities and stalked periscopic eyes for terrestrial respiration and walking on intertidal mudflats.",
      "bn": "ছোট বা মাঝারি মাছ; পেটের নিচের শ্রোণীপাখনা জোড়া লেগে গোল চোষক ডিস্ক তৈরি করে যা দিয়ে পাথরে আটকে থাকে (স্লিপার মাছে পৃথক); মাথা সাধারণত আঁইশহীন; দুটি পৃথক পৃষ্ঠপাখনা; প্রাপ্তবয়স্কদের পটকা থাকে না; সুন্দরবনের মাডস্কিপার মাছের চোখ মাথার উপরে পেরিস্কোপের মতো উঁচু এবং এরা ফুলকার প্রকোষ্ঠে পানি জমিয়ে রেখে ডাঙ্গায় ও শ্বাস নিয়ে বুকে ভর দিয়ে হাঁটতে পারে।",
      "keyFeatures": {
        "en": [
          "Pelvic fins fused into a ventral cup-like sucking disc (in Gobiidae)",
          "Amphibious mudskippers (Periophthalmus) walking and breathing out of water on mangrove mudflats",
          "Two separate dorsal fins with slender flexible spines in the first",
          "Includes the world's smallest vertebrates (Pandaka and Paedocypris relatives)"
        ],
        "bn": [
          "শ্রোণীপাখনা জোড়া লেগে পেটের নিচে চোষক বা কাপ তৈরি করে",
          "ম্যানগ্রোভের কাদা এবং ডাঙ্গায় হেঁটে চলা ও শ্বাস নিতে পারা উভচর মাডস্কিপার মাছ",
          "দুটি পৃথক পৃষ্ঠপাখনা যার প্রথমটিতে নমনীয় কাঁটা থাকে",
          "বিশ্বের ক্ষুদ্রতম মেরুদণ্ডী মাছগুলোর অন্যতম"
        ]
      }
    },
    "habitat": {
      "en": "Extreme ecological ubiquity: coastal marine coral reefs, mangrove intertidal mudflats, estuaries, tidal creeks, freshwater rivers, mountain torrents, and desert springs.",
      "bn": "উপকূলীয় প্রবাল প্রাচীর, সুন্দরবনের ম্যানগ্রোভ কাদাভূমি, নদীর মোহনা, খাল-বিল, মিঠাপানির নদী ও পাহাড়ি ঝর্ণা।",
      "systems": [
        "marine",
        "brackish",
        "freshwater"
      ]
    },
    "ecosystem": {
      "en": "Critical keystone primary consumers and micropredators on reefs and mangrove flats; mudskippers aerate intertidal mud by digging deep burrows in the Sundarbans.",
      "bn": "ম্যানগ্রোভ ও প্রবাল প্রাচীরের অপরিহার্য বাস্তুতাত্ত্বিক প্রাণী; সুন্দরবনের কাদা খুঁড়ে মাডস্কিপার মাছ মাটিতে বাতাস চলাচলে সাহায্য করে।"
    },
    "feeding": {
      "en": "Diverse omnivores, detritivores, and carnivores; scraping benthic diatom films, hunting amphipods, or sifting meiofauna from mud.",
      "bn": "সর্বভুক ও শিকারী; ডায়াটম শৈবাল চেঁছে খায়, পোকা ও ক্ষুদ্র কাঁকড়া শিকার করে।"
    },
    "reproduction": {
      "en": "Demersal nest guarders; males defend burrows or shells where adhesive eggs are laid, aerating them until hatching.",
      "bn": "কাদার গর্ত বা শক্ত খোলায় আঠালো ডিম পাড়ে; পুরুষ মাছ যত্নসহকারে ডিম পাহারা দেয়।"
    },
    "distribution": {
      "en": "Circumglobal in tropical, subtropical, and temperate waters. Enormously diverse and abundant in Bangladesh (Sundarbans mudflats and inland freshwaters).",
      "bn": "সারা বিশ্বে বিস্তৃত। বাংলাদেশ ও সুন্দরবনে এদের বিপুল প্রজাতি পাওয়া যায় (যেমন বেলে মাছ, ডাহুক বা মাডস্কিপার)।"
    },
    "importantFamilies": [
      {
        "name": "Gobiidae",
        "commonEn": "True Gobies",
        "commonBn": "বেলে মাছ গোত্র",
        "diagnosticEn": "Pelvic fins united into a sucking disc, dominant reef and river fishes; includes Glossogobius.",
        "diagnosticBn": "শ্রোণীপাখনা জোড়া লেগে চোষক তৈরি করে; Glossogobius (বেলে) গণ অন্তর্ভুক্ত।"
      },
      {
        "name": "Oxudercidae",
        "commonEn": "Mudskippers & Relatives",
        "commonBn": "মাডস্কিপার বা কাদা-হাঁটা মাছ গোত্র",
        "diagnosticEn": "Amphibious air-breathers, periscopic eyes, muscular arm-like pectoral fins; includes Periophthalmus.",
        "diagnosticBn": "ডাঙ্গায় হাঁটতে পারে, চোখের পাতাযুক্ত উঁচু চোখ, বাহুর মতো শক্তিশালী বক্ষপাখনা; Periophthalmus অন্তর্ভুক্ত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Genera: Glossogobius, Periophthalmus, Boleophthalmus, Eleotris, and Apogon. Key binomials: Glossogobius giuris (Hamilton, 1822) and Boleophthalmus boddarti (Pallas, 1770).",
      "bn": "গণ: Glossogobius, Periophthalmus, Boleophthalmus, Eleotris এবং Apogon। প্রধান নাম: Glossogobius giuris (Hamilton, 1822) এবং Boleophthalmus boddarti (Pallas, 1770)।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Tank Goby / Bele Machh (Glossogobius giuris - native to Bangladesh), Boddart's Mudskipper (Boleophthalmus boddarti - native to Bangladesh), Barred Mudskipper (Periophthalmus barbarus), and Pointed-tail Goby (Pseudapocryptes lanceolatus - native to Bangladesh).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: বেলে মাছ (Glossogobius giuris - বাংলাদেশে প্রাপ্ত), বোডার্স মাডস্কিপার (Boleophthalmus boddarti - সুন্দরবনে প্রাপ্ত), ব্যারেড মাডস্কিপার (Periophthalmus barbarus) এবং চ্যাওয়া বা পয়েন্টেড-টেইল গোবি (Pseudapocryptes lanceolatus - বাংলাদেশে প্রাপ্ত)।"
    },
    "additionalInformation": {
      "en": "Glossogobius giuris (Tank Goby or Bele) is a major commercial food fish across rural Bangladesh, while mudskippers represent one of nature's finest demonstrations of vertebrate terrestrial adaptation.",
      "bn": "বেলে মাছ (Glossogobius giuris) বাংলাদেশের গ্রামীণ মানুষের অত্যন্ত জনপ্রিয় পুষ্টিকর খাদ্য মাছ এবং মাডস্কিপার মাছ ডাঙ্গায় চলাচলের জীবন্ত উদাহরণ।"
    },
    "orders": [],
    "exampleSpeciesIds": [
      "sp-periophthalmodon-schlosseri"
    ],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Thacker (2009)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-carangiformes",
    "taxonId": "taxon-carangiformes",
    "rank": "order",
    "scientificName": "Carangiformes",
    "bengaliName": "কারাঞ্জিফর্মিস (জ্যাক, চান্দা/পম্পানো, রেমোরা, বিলফিশ ও ফ্ল্যাটফিশ)",
    "englishName": "Jacks, Pompanos, Remoras & Billfishes",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিময় পাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Actinopteri",
        "nameBn": "অ্যাক্টিনোপ্টেরি"
      },
      {
        "rank": "infraclass",
        "name": "Teleostei",
        "nameBn": "টেলিয়স্ট"
      },
      {
        "rank": "order",
        "name": "Carangiformes",
        "nameBn": "কারাঞ্জিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "A massive, diverse global marine clade recognized by modern phylogenomics (Eschmeyer 2026), uniting powerful pelagic jacks and pompanos, hitchhiking sucker-bearing remoras, billfishes (sailfishes and marlins), and asymmetric flatfishes (Pleuronectoidei).",
      "bn": "আধুনিক ফাইলোজেনোমিক্স ও এশমেয়ার (২০২৬) দ্বারা সংজ্ঞায়িত সুবিশাল সামুদ্রিক মাছের বর্গ; যার মধ্যে রয়েছে শক্তিশালী দ্রুতগামী জ্যাক ও পম্পানো মাছ, চোষকযুক্ত রেমোরা, বর্শামুখো সেইলফিশ বা মার্লিন এবং একপাশে চোখ ঘোরা চ্যাপ্টা ফ্ল্যাটফিশ (চান্দা বা পাতামাছ)।"
    },
    "diagnosticCharacteristics": {
      "en": "Morphologically diverse clade united by genomic synapomorphies (Carangaria); jacks have narrow caudal peduncles with lateral scutes and carangiform fast swimming; remoras (Echeneidae) have the dorsal fin transformed into a cephalic lamellar sucking disc; billfishes (Istiophoridae, Xiphiidae) possess spear-like rostrums; flatfishes (suborder Pleuronectoidei) undergo cranial ontogenetic metamorphosis where one eye migrates to the opposite side, creating complete cranial asymmetry.",
      "bn": "জিনতত্ত্ব দ্বারা সমন্বিত সুবিশাল মাছের দল; জ্যাক মাছের লেজের গোড়ায় শক্ত খাঁজকাটা আঁইশ থাকে; রেমোরা মাছের মাথার উপরে পিঠের পাখনা চোষক ডিস্কে রূপান্তরিত যা দিয়ে এরা হাঙ্গর ও তিমির গায়ে সেঁটে থাকে; বিলফিশদের মুখ বর্শার মতো সূঁচালো; এবং ফ্ল্যাটফিশ উপবর্গে লার্ভা অবস্থায় একপাশের চোখ ঘুরে অন্যপাশে চলে এসে সম্পূর্ণ অপ্রতিসম চ্যাপ্টা শরীরে পরিণত হয়।",
      "keyFeatures": {
        "en": [
          "Cephalic lamellar suction disc derived from dorsal fin in remoras (Echeneidae)",
          "Cranial eye-migration creating asymmetric bottom-dwelling morphology in flatfishes (Pleuronectoidei)",
          "Elongate spearlike rostrum and high-speed pelagic cruising in billfishes (Istiophoridae)",
          "Lateral keels and fortified scutes along the caudal peduncle in jacks (Carangidae)"
        ],
        "bn": [
          "রেমোরা মাছে হাঙ্গরের গায়ে চড়ে বেড়ানোর জন্য রূপান্তরিত মাথার চোষক ডিস্ক",
          "ফ্ল্যাটফিশের একপাশের চোখ অন্যপাশে স্থানান্তরিত হয়ে সম্পূর্ণ চ্যাপ্টা অপ্রতিসম শরীর গঠন",
          "সেইলফিশ ও মার্লিনের লম্বা বর্শার মতো মুখ এবং তীব্র গতিতে সাঁতারের ক্ষমতা",
          "জ্যাক ও পম্পানো মাছের লেজের গোড়ায় শক্ত কাঁটার মতো সারি"
        ]
      }
    },
    "habitat": {
      "en": "Global marine ecosystems: pelagic epipelagic blue waters, coastal reefs, surf zones, and demersal soft shelf and slope bottoms.",
      "bn": "উন্মুক্ত নীল মহাসাগর, প্রবাল প্রাচীর, অগভীর উপকূল এবং সমুদ্রের তলদেশের বালুকাময় বা কর্দমাক্ত তল।",
      "systems": [
        "marine",
        "brackish"
      ]
    },
    "ecosystem": {
      "en": "Covers diverse ecological guilds from apex pelagic billfish predators to benthic flatfish bio-disturbers and commensal remoras hitchhiking on marine megafauna.",
      "bn": "সমুদ্রের খাদ্যজালের বৈচিত্র্যময় নিয়ন্ত্রক; দ্রুতগামী শিকারী সেইলফিশ থেকে শুরু করে তলদেশের চ্যাপ্টা মাছ ও হাঙ্গরের সাথে চড়ে বেড়ানো রেমোরা।"
    },
    "feeding": {
      "en": "Apex macropredators, piscivores, and benthic invertivores. Trevallies and billfishes chase schooling clupeids and squids; flatfishes ambuscade buried benthic polychaetes and crabs.",
      "bn": "মাংসাশী শিকারী; জ্যাক ও সেইলফিশ ছোট মাছ ও স্কুইড শিকার করে; ফ্ল্যাটফিশ বালির নিচে লুকিয়ে থেকে কাঁকড়া ও কীট ধরে।"
    },
    "reproduction": {
      "en": "Pelagic broadcast spawners releasing millions of floating eggs; flatfish larvae start completely symmetrical before asymmetrical metamorphosis.",
      "bn": "খোলা সমুদ্রে বিপুল ডিম ছাড়ে; ফ্ল্যাটফিশের লার্ভা শুরুতে সম্পূর্ণ প্রতিসম থাকলেও পরে রূপান্তরের মাধ্যমে চোখ একপাশে সরে যায়।"
    },
    "distribution": {
      "en": "Circumglobal across all tropical, subtropical, and temperate oceans. Abundant and commercially critical in the Bay of Bengal and coastal Bangladesh.",
      "bn": "সারা বিশ্বের উষ্ণ ও নাতিশীতোষ্ণ সাগরে বিস্তৃত। বঙ্গোপসাগর ও বাংলাদেশের মৎস্য অর্থনীতিতে অত্যন্ত গুরুত্বপূর্ণ।"
    },
    "importantFamilies": [
      {
        "name": "Carangidae",
        "commonEn": "Jacks, Trevallies & Pompanos",
        "commonBn": "জ্যাক, চান্দা ও পম্পানো গোত্র",
        "diagnosticEn": "Lateral scutes on caudal peduncle, fast swimmers, two dorsal fins; includes Caranx, Trachinotus, and Seriola.",
        "diagnosticBn": "লেজের গোড়ায় শক্ত আঁইশ, অত্যন্ত দ্রুতগামী শিকারী মাছ; Caranx, Trachinotus অন্তর্ভুক্ত।"
      },
      {
        "name": "Coryphaenidae",
        "commonEn": "Dolphinfishes / Mahi-mahi",
        "commonBn": "ডলফিনফিশ বা মাহি-মাহি গোত্র",
        "diagnosticEn": "Steep forehead in mature males, brilliant iridescent blue-green coloration, long continuous dorsal fin.",
        "diagnosticBn": "পুরুষ মাছে খাড়া কপাল, উজ্জ্বল নীল-সবুজ বর্ণ, অবিচ্ছিন্ন দীর্ঘ পৃষ্ঠপাখনা।"
      },
      {
        "name": "Echeneidae",
        "commonEn": "Remoras / Sharksuckers",
        "commonBn": "রেমোরা বা হাঙ্গর চোষক গোত্র",
        "diagnosticEn": "Oval laminated sucking disc on head, attaches to sharks and whales; includes Remora and Echeneis.",
        "diagnosticBn": "মাথায় চোষক ডিস্ক যা দিয়ে হাঙ্গর ও তিমির সাথে আটকে থাকে; Remora গণ অন্তর্ভুক্ত।"
      },
      {
        "name": "Rachycentridae",
        "commonEn": "Cobias",
        "commonBn": "কোবিয়া গোত্র",
        "diagnosticEn": "Depressed head, broad longitudinal dark stripe, short isolated dorsal spines; monotypic family Rachycentron canadum.",
        "diagnosticBn": "চ্যাপ্টা মাথা, দেহের পাশে স্পষ্ট কালো রেখা, খাটো বিচ্ছিন্ন পৃষ্ঠকাঁটা; Rachycentron canadum।"
      },
      {
        "name": "Istiophoridae",
        "commonEn": "Billfishes / Sailfishes",
        "commonBn": "সেইলফিশ বা মার্লিন গোত্র",
        "diagnosticEn": "Upper jaw prolonged into spear, huge sail-like dorsal fin; includes Istiophorus.",
        "diagnosticBn": "উপরের চোয়াল বর্শার মতো লম্বা, পালতোলা নৌকার মতো বিশাল পৃষ্ঠপাখনা; Istiophorus অন্তর্ভুক্ত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Genera: Caranx, Trachinotus, Remora, Cynoglossus, and Istiophorus. Key binomials: Caranx ignobilis (Forsskål, 1775), Cynoglossus lingua Hamilton, 1822, and Remora remora (Linnaeus, 1758).",
      "bn": "গণ: Caranx, Trachinotus, Remora, Cynoglossus এবং Istiophorus। প্রধান নাম: Caranx ignobilis (Forsskål, 1775), Cynoglossus lingua Hamilton, 1822 এবং Remora remora (Linnaeus, 1758)।"
    },
    "examplesSummary": {
      "en": "Five verified representative examples: Giant Trevally (Caranx ignobilis - native to Bangladesh), Bengal Tongue Sole (Cynoglossus lingua - native to Bangladesh), Common Remora (Remora remora - native to Bangladesh), Indo-Pacific Sailfish (Istiophorus platypterus - native to Bangladesh), and Florida Pompano (Trachinotus carolinus).",
      "bn": "পাঁচটি যাচাইকৃত প্রামাণ্য উদাহরণ: জায়ান্ট ট্রাভেলি (Caranx ignobilis - বাংলাদেশে প্রাপ্ত), জিভ মাছ বা কুত্তা মাছ (Cynoglossus lingua - বাংলাদেশে প্রাপ্ত), সাধারণ রেমোরা (Remora remora - বাংলাদেশে প্রাপ্ত), সেইলফিশ (Istiophorus platypterus - বঙ্গোপসাগরে প্রাপ্ত) এবং ফ্লোরিডা পম্পানো (Trachinotus carolinus)।"
    },
    "additionalInformation": {
      "en": "Taxonomic reconciliation note: In Eschmeyer's Catalog of Fishes (CAS, August 2026) and Betancur-R. et al. (2017), Carangiformes is expanded to subsume flatfishes as Suborder Pleuronectoidei. However, FishBase (2026), Fishes of the World 5th ed. (Nelson et al. 2016), and WoRMS maintain Carangiformes restricted to pelagic carangoids/billfishes and retain Pleuronectiformes as an independent order. BiotaElite adopts the multi-authority consensus recognizing both orders while documenting this phylogenetic relationship.",
      "bn": "শ্রেণীবিন্যাস সমন্বয় নোট: এশমেয়ার্স ক্যাটালগ অব ফিশেস (CAS, ২০২৬) এবং বেতানকুয়ার-আর. (২০১৭) এ চ্যাপ্টা মাছগুলোকে কারাঞ্জিফর্মিসের অধীনে 'সাব-অর্ডার প্লুরোনেক্টয়ডি' হিসেবে অন্তর্ভুক্ত করা হয়েছে। তবে ফিশবেস (২০২৬), নেলসন (২০১৬), এবং WoRMS কারাঞ্জিফর্মিসকে স্বতন্ত্র রেখে প্লুরোনেক্টিফর্মিসকে স্বাধীন বর্গ হিসেবে স্বীকৃতি দেয়। বায়োটাএলিট উভয় বর্গের বৈশিষ্ট্য ও বিবর্তনীয় সম্পর্ক স্পষ্টভাবে নথিভুক্ত করেছে।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Eschmeyer's Catalog of Fishes (2026); FishBase (2026); Nelson et al. (2016) Fishes of the World (5th ed.); Betancur-R. et al. (2017)",
    "verificationStatus": "published",
    "publishedStatus": true,
    "notes": "Taxonomic status: Recognized in FishBase (7 families) and Nelson (2016, 6 families). Broadened in Eschmeyer (2026) to include flatfishes as suborder Pleuronectoidei."
  },
  {
    "id": "order-atheriniformes",
    "taxonId": "taxon-atheriniformes",
    "rank": "order",
    "scientificName": "Atheriniformes",
    "bengaliName": "অ্যাথেরিনিফর্মিস (সিলভারসাইড ও রেইনবোফিশ)",
    "englishName": "Silversides, Hardyheads, and Rainbowfishes",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিময় পাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Actinopteri",
        "nameBn": "অ্যাক্টিনোপ্টেরি"
      },
      {
        "rank": "infraclass",
        "name": "Teleostei",
        "nameBn": "টেলিয়স্ট"
      },
      {
        "rank": "order",
        "name": "Atheriniformes",
        "nameBn": "অ্যাথেরিনিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Slender, surface-dwelling schooling fishes of coastal seas and freshwaters, characterized by two separate dorsal fins, a distinct silvery lateral band, and high pectoral fin placement.",
      "bn": "উপকূলীয় সাগর ও মিঠাপানির উপরিভাগে ঝাঁক বেঁধে চলা রূপালী মাছ; যাদের দুটি পৃথক পৃষ্ঠপাখনা, দেহের পাশে চকচকে রূপালী রেখা এবং পিঠের উঁচুতে অবস্থিত বক্ষপাখনা রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Body slender, elongate, and slightly compressed; two well-separated dorsal fins (first dorsal fin small with 2–8 flexible slender spines, second dorsal with one spine and soft rays); pectoral fins inserted high on the sides of the body; broad, prominent, reflective silvery lateral band running down the flank; pelvic fins abdominal; phallostethids possess an asymmetrical copulatory organ (priapium) beneath the throat.",
      "bn": "সরু লম্বা শরীর; দুটি স্পষ্টভাবে পৃথক পৃষ্ঠপাখনা (প্রথমটিতে কয়েকটি নরম কাঁটা থাকে); বক্ষপাখনা দেহের বেশ উপরের দিকে অবস্থিত; দেহের দুই পাশ দিয়ে চকচকে রূপালী চওড়া দাগ লেজ পর্যন্ত বিস্তৃত; শ্রোণীপাখনা তলপেটের দিকে অবস্থিত; ফ্যালোস্টেথিডি গোত্রের গলার নিচে বিশেষ মিলনাঙ্গ (প্রাইয়াপিয়াম) থাকে।",
      "keyFeatures": {
        "en": [
          "Broad, glittering silvery longitudinal stripe running along the mid-flank",
          "Two widely separated dorsal fins with flexible spines in the first",
          "High thoracic attachment of the pectoral fins",
          "Complex copulatory priapium located under the head in priapium fishes (Phallostethidae)"
        ],
        "bn": [
          "দেহের মাঝ বরাবর চকচকে রূপালী অনুদৈর্ঘ্য দাগ",
          "দুটি সুস্পষ্ট পৃথক পৃষ্ঠপাখনা যার প্রথমটিতে নরম কাঁটা বিদ্যমান",
          "দেহের উপরের দিকে উঁচুতে সংযুক্ত বক্ষপাখনা",
          "ফ্যালোস্টেথিডি মাছে গলার নিচে জটিল মিলনাঙ্গের উপস্থিতি"
        ]
      }
    },
    "habitat": {
      "en": "Coastal marine waters, shallow sandy surf zones, estuaries, mangrove channels, and tropical clear freshwater streams.",
      "bn": "উপকূলীয় সমুদ্র, বালুকাময় ঢেউয়ের অঞ্চল, মোহনা, ম্যানগ্রোভ খাঁড়ি ও স্বচ্ছ পাহাড়ি নদী।",
      "systems": [
        "marine",
        "brackish",
        "freshwater"
      ]
    },
    "ecosystem": {
      "en": "Surface schooling forage fishes converting zooplankton into biomass for coastal seabirds, larger teleosts, and estuarine predators.",
      "bn": "পানির উপরিভাগের ঝাঁক বাঁধা খাদ্য মাছ; যা সামুদ্রিক পাখি ও বড় শিকারী মাছের প্রধান পুষ্টির উৎস।"
    },
    "feeding": {
      "en": "Visual surface planktivores, feeding upon calanoid copepods, cladocerans, insect pupae, and microalgae.",
      "bn": "উপরিভাগের প্ল্যাঙ্কটনভোজী; কোপিপড, জলজ পোকা ও ভাসমান ক্ষুদ্র প্রাণী খায়।"
    },
    "reproduction": {
      "en": "Oviparous. Eggs equipped with sticky, filamentous anchoring threads that wind around aquatic vegetation and submerged roots.",
      "bn": "ডিম্বপ্রসবকারী। ডিমের গায়ে আঠালো সুতো থাকে যা দিয়ে ডিম জলজ উদ্ভিদের গায়ে আটকে থাকে।"
    },
    "distribution": {
      "en": "Circumglobal in tropical and temperate marine and freshwaters. Atherinomorus and Hypoatherina species occur natively in coastal Bangladesh and the northern Bay of Bengal.",
      "bn": "সারা বিশ্বের উষ্ণ সমুদ্রে ও মিঠাপানিতে বিস্তৃত। বাংলাদেশের উপকূলে এবং সেন্টমার্টিন দ্বীপে সিলভারসাইড মাছ প্রচুর পাওয়া যায়।"
    },
    "importantFamilies": [
      {
        "name": "Atherinidae",
        "commonEn": "Old World Silversides",
        "commonBn": "সিলভারসাইড গোত্র",
        "diagnosticEn": "Silvery lateral stripe, two dorsal fins, schooling coastal and marine fishes; includes Atherina.",
        "diagnosticBn": "রূপালী পার্শ্বরেখা, দুটি পৃষ্ঠপাখনা; Atherina ও Atherinomorus গণ অন্তর্ভুক্ত।"
      },
      {
        "name": "Melanotaeniidae",
        "commonEn": "Rainbowfishes",
        "commonBn": "রেইনবোফিশ গোত্র",
        "diagnosticEn": "Colorful freshwater fishes of Australia and New Guinea, compressed deep bodies, popular aquarium fishes.",
        "diagnosticBn": "অস্ট্রেলিয়ার বর্ণিল মিঠাপানির মাছ, অ্যাকোয়ারিয়ামে অত্যন্ত জনপ্রিয়; Melanotaenia গণ অন্তর্ভুক্ত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Genera: Atherina, Atherinomorus, Melanotaenia, and Menidia. Key binomials: Atherinomorus lacunosus (Forster, 1801) and Melanotaenia boesemani Allen & Cross, 1980.",
      "bn": "গণ: Atherina, Atherinomorus, Melanotaenia এবং Menidia। প্রধান নাম: Atherinomorus lacunosus (Forster, 1801) এবং Melanotaenia boesemani Allen & Cross, 1980।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Hardyhead Silverside (Atherinomorus lacunosus - native to Bangladesh), Boeseman's Rainbowfish (Melanotaenia boesemani), Atlantic Silverside (Menidia menidia), and Mediterranean Sand Smelt (Atherina hepsetus).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: হার্ডিহেড সিলভারসাইড (Atherinomorus lacunosus - বাংলাদেশে প্রাপ্ত), বোজম্যান্স রেইনবোফিশ (Melanotaenia boesemani), আটলান্টিক সিলভারসাইড (Menidia menidia) এবং স্যান্ড স্মেল্ট (Atherina hepsetus)।"
    },
    "additionalInformation": {
      "en": "The Grunion (Leuresthes tenuis), an atheriniform silverside, is famous for beach spawning where thousands of fish completely leave the water to deposit eggs in wet sand during nighttime high tides in California.",
      "bn": "গ্রুনিয়ন মাছ ক্যালিফোর্নিয়ার উপকূলে জোয়ারের সময় হাজার হাজার সংখ্যায় পানি থেকে বালুচরে উঠে এসে ডিম পেড়ে সাগরে ফিরে যায়।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Dyer & Chernoff (1996)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-beloniformes",
    "taxonId": "taxon-beloniformes",
    "rank": "order",
    "scientificName": "Beloniformes",
    "bengaliName": "বেলোনিফর্মিস (কাইক্কা বা নিডলফিশ, উড়ুক্কু মাছ ও হাফবিক)",
    "englishName": "Needlefishes, Flyingfishes, Halfbeaks, and Ricefishes",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিময় পাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Actinopteri",
        "nameBn": "অ্যাক্টিনোপ্টেরি"
      },
      {
        "rank": "infraclass",
        "name": "Teleostei",
        "nameBn": "টেলিয়স্ট"
      },
      {
        "rank": "order",
        "name": "Beloniformes",
        "nameBn": "বেলোনিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Slender surface-dwelling teleosts with elongated beaks or extraordinarily expanded wing-like pectoral fins allowing aerial gliding over the sea surface, including freshwater needlefishes and flyingfishes.",
      "bn": "পানির উপরিভাগের মাছ; যাদের ঠোঁট সূঁচের মতো ধারালো অথবা বক্ষপাখনা ডানা মেলে উড়ে চলার মতো বিশালাকার, যার মধ্যে দেশি কাইক্কা মাছ এবং সাগরের উড়ুক্কু মাছ অন্তর্ভুক্ত।"
    },
    "diagnosticCharacteristics": {
      "en": "Body slender, elongate, and silvery with greenish dorsum; lower pharyngeal bones completely fused into a single triangular toothplate; dorsal and anal fins placed far back near tail; no spiny rays; jaws elongated into slender toothed beaks in needlefishes (both jaws) and halfbeaks (lower jaw only); pectoral fins enormously enlarged into wing-like aerofoils enabling gliding flights up to 400 meters in flyingfishes (Exocoetidae); bones and flesh often tinted bright green by biliverdin.",
      "bn": "লম্বা সরু রূপালী শরীর ও সবুজাভ পিঠ; গলবিলের নিচের হাড়গুলো জোড়া লেগে একক ত্রিভুজাকার প্লেট গঠন করে; পৃষ্ঠ ও পায়ুপাখনা লেজের কাছে অবস্থিত; কাইক্কা মাছে উভয় চোয়াল ধারালো দাঁতসহ লম্বা চঞ্চুর মতো এবং হাফবিকে কেবল নিচের চোয়াল লম্বা; উড়ুক্কু মাছে বক্ষপাখনা ডানার মতো বিশালাকার যা দিয়ে সাগরের উপর ৪০০ মিটার পর্যন্ত উড়ে যেতে পারে; হাড় বিলিভার্ডিন রঞ্জকের কারণে সবুজ রঙের হয়।",
      "keyFeatures": {
        "en": [
          "Elongated toothed beak in needlefishes (Belonidae) used for high-speed prey impalement",
          "Wing-like pectoral and pelvic fins enabling sustained aerial gliding in flyingfishes (Exocoetidae)",
          "Fused lower pharyngeal bones forming an efficient crushing dental plate",
          "Bright green bones and connective tissues colored by the bile pigment biliverdin"
        ],
        "bn": [
          "কাইক্কা মাছে শিকার গাঁথার জন্য ধারালো দাঁতযুক্ত লম্বা সূঁচালো ঠোঁট",
          "উড়ুক্কু মাছে ডানা মেলে সাগরের বুকে ভেসে থাকার জন্য বিশালাকার পাখনা",
          "গলবিলের হাড় জোড়া লেগে খাবার পেষণকারী শক্ত দাঁতের প্লেট গঠন",
          "বিলিভার্ডিন রঞ্জক জমার কারণে হাড় উজ্জ্বল সবুজ রঙের হওয়া"
        ]
      }
    },
    "habitat": {
      "en": "Epipelagic marine open oceans, coastal lagoons, mangrove creeks, freshwater rivers, floodplain beels, and rice paddies.",
      "bn": "উন্মুক্ত মহাসাগরীয় পৃষ্ঠভাগ, উপকূল, সুন্দরবনের খাঁড়ি, দেশের হাওর-বিল ও মিঠাপানির নদী।",
      "systems": [
        "marine",
        "brackish",
        "freshwater"
      ]
    },
    "ecosystem": {
      "en": "Surface-skimming predators and mid-trophic epipelagic links; flyingfishes leap into the air to escape charging apex tunas, dolphins, and billfishes.",
      "bn": "পানির উপরিভাগের শিকারী মাছ; টুনা ও ডলফিনের হাত থেকে বাঁচতে উড়ুক্কু মাছ আকাশে উড়ে ডানা মেলে।"
    },
    "feeding": {
      "en": "Carnivorous surface hunters. Needlefishes slash through schools of small minnows and clupeids; flyingfishes consume zooplankton; halfbeaks eat surface insects.",
      "bn": "মাংসাশী শিকারী; কাইক্কা মাছ ছোট মাছ শিকার করে এবং উড়ুক্কু মাছ ভাসমান প্ল্যাঙ্কটন খায়।"
    },
    "reproduction": {
      "en": "Oviparous or viviparous. Eggs have long adhesive filaments that anchor onto floating sargassum seaweed, drift debris, or submerged aquatic plants.",
      "bn": "ডিম্বপ্রসবকারী বা জরায়ুজ। ডিমের গায়ে লম্বা আঠালো সুতো থাকে যা ভাসমান শৈবাল বা জলজ উদ্ভিদে আটকে থাকে।"
    },
    "distribution": {
      "en": "Worldwide in tropical and warm temperate seas and freshwaters. Xenentodon cancila (Kaikka) is ubiquitous and native across all rivers and wetlands of Bangladesh.",
      "bn": "সারা বিশ্বের উষ্ণ সাগরে ও মিঠাপানিতে বিস্তৃত। কাইক্কা মাছ (Xenentodon cancila) বাংলাদেশের নদ-নদী ও বিলে অত্যন্ত পরিচিত ও দেশীয় মাছ।"
    },
    "importantFamilies": [
      {
        "name": "Belonidae",
        "commonEn": "Needlefishes",
        "commonBn": "কাইক্কা বা নিডলফিশ গোত্র",
        "diagnosticEn": "Both jaws elongated into slender toothed beak, green bones; includes Xenentodon and Strongylura.",
        "diagnosticBn": "উভয় চোয়াল লম্বা দাঁতাল ঠোঁটে রূপান্তরিত, সবুজ হাড়; Xenentodon (কাইক্কা) অন্তর্ভুক্ত।"
      },
      {
        "name": "Exocoetidae",
        "commonEn": "Flyingfishes",
        "commonBn": "উড়ুক্কু মাছ গোত্র",
        "diagnosticEn": "Enormously expanded pectoral fins, asymmetric caudal fin for taxiing; includes Exocoetus.",
        "diagnosticBn": "ডানার মতো বিশালাকার বক্ষপাখনা, সাগরের উপর ওড়ার ক্ষমতা; Exocoetus গণ অন্তর্ভুক্ত।"
      },
      {
        "name": "Hemiramphidae",
        "commonEn": "Halfbeaks",
        "commonBn": "হাফবিক বা একঠোঁটা মাছ গোত্র",
        "diagnosticEn": "Only lower jaw elongated, upper jaw short and triangular; includes Hyporhamphus.",
        "diagnosticBn": "কেবল নিচের চোয়াল লম্বা, উপরের চোয়াল ছোট ও ত্রিভুজাকার; Hyporhamphus অন্তর্ভুক্ত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Genera: Xenentodon, Strongylura, Exocoetus, and Hemiramphus. Key binomials: Xenentodon cancila (Hamilton, 1822) and Exocoetus volitans Linnaeus, 1758.",
      "bn": "গণ: Xenentodon, Strongylura, Exocoetus এবং Hemiramphus। প্রধান নাম: Xenentodon cancila (Hamilton, 1822) এবং Exocoetus volitans Linnaeus, 1758।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Freshwater Needlefish / Kaikka (Xenentodon cancila - native to Bangladesh), Asian Needletail (Strongylura strongylura - native to Bangladesh), Tropical Flyingfish (Exocoetus volitans - native to Bay of Bengal), and Black-barred Halfbeak (Hemiramphus far).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: দেশি কাইক্কা মাছ (Xenentodon cancila - বাংলাদেশে দেশীয় মাছ), স্পটেড নিডলফিশ (Strongylura strongylura - সুন্দরবনে প্রাপ্ত), উড়ুক্কু মাছ (Exocoetus volitans - বঙ্গোপসাগরে প্রাপ্ত) এবং ব্ল্যাক-বার্ড হাফবিক (Hemiramphus far)।"
    },
    "additionalInformation": {
      "en": "Xenentodon cancila (Kaikka) is an iconic native freshwater fish of Bangladesh, celebrated for its sweet flesh despite possessing green bones caused by non-toxic biliverdin deposits.",
      "bn": "কাইক্কা মাছ (Xenentodon cancila) বাংলাদেশের অত্যন্ত পরিচিত দেশীয় মাছ, যার হাড়ে জমে থাকা নিরীহ বিলিভার্ডিন রঞ্জকের কারণে হাড়ের রঙ উজ্জ্বল সবুজ হয়।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Collette et al. (2019)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-cyprinodontiformes",
    "taxonId": "taxon-cyprinodontiformes",
    "rank": "order",
    "scientificName": "Cyprinodontiformes",
    "bengaliName": "সাইপ্রিনোডন্টিফর্মিস (কিলিফিশ, গাপ্পি ও টুথকার্প)",
    "englishName": "Killifishes, Toothcarps, and Livebearers",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিময় পাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Actinopteri",
        "nameBn": "অ্যাক্টিনোপ্টেরি"
      },
      {
        "rank": "infraclass",
        "name": "Teleostei",
        "nameBn": "টেলিয়স্ট"
      },
      {
        "rank": "order",
        "name": "Cyprinodontiformes",
        "nameBn": "সাইপ্রিনোডন্টিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Small freshwater and brackish teleosts with superior toothed jaws, high tolerance for extreme temperatures and salinities, widespread viviparity (livebearing in guppies and swordtails), and drought-resistant annual eggs.",
      "bn": "ছোট মিঠা ও নোনা পানির মাছ; যাদের ঊর্ধ্বমুখী দাঁতযুক্ত মুখ, চরম তাপমাত্রা ও লবণাক্ততা সহনশীলতা, জীবিত বাচ্চা প্রসবের ক্ষমতা (গাপ্পি ও সোর্ডটেইল) এবং খরার মধ্যেও শুকনা মাটিতে অক্ষত থাকা দীর্ঘস্থায়ী ডিম রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Small, laterally compressed or cylindrical fishes; mouth small, terminal to superior, with toothed premaxillary border; single soft-rayed dorsal fin situated far back; pelvic fins abdominal or absent; caudal fin rounded to truncate; internal fertilization and viviparity prevalent in Poeciliidae and Goodeidae via modified anal fin gonopodium in males; annual killifishes (Nothobranchiidae) produce drought-resistant diapause eggs that survive in baked mud for months.",
      "bn": "ক্ষুদ্র মাছ; মুখ ছোট ও ঊর্ধ্বমুখী যার প্রি-ম্যাক্সিলায় দাঁত থাকে; পিঠের পেছনের দিকে একক নরম পৃষ্ঠপাখনা; লেজের পাখনা গোলাকার; পোয়েসিলিডি পরিবারের পুরুষ মাছে পায়ুপাখনা রূপান্তরিত হয়ে মিলনাঙ্গ (গনোপোডিয়াম) গঠন করে এবং এরা ডিম না পেড়ে সরাসরি বাচ্চা প্রসব করে; অ্যানুয়াল কিলিফিশরা এমন ডিম পাড়ে যা জলাশয় শুকিয়ে যাওয়ার পরও কয়েক মাস বেঁচে থাকে।",
      "keyFeatures": {
        "en": [
          "Viviparity and male copulatory gonopodium in livebearers (Poeciliidae)",
          "Drought-resistant diapause eggs surviving in dry mud in annual killifishes",
          "Four-eyed fish (Anableps) with split pupils for simultaneous air and water vision",
          "Extreme ecological tolerance to high temperatures (>40°C) and hypersalinity"
        ],
        "bn": [
          "পুরুষের গনোপোডিয়াম এবং সরাসরি জীবিত বাচ্চা প্রসবের ক্ষমতা (লাইভবেয়ারার)",
          "শুকনো মাটিতে বেঁচে থাকা দীর্ঘস্থায়ী ডিম্ব সুপ্তাবস্থা (diapause)",
          "একই সাথে বাতাস ও পানির নিচে দেখার জন্য দ্বিখণ্ডিত চোখের মণি (Anableps)",
          "চরম তাপমাত্রা (>৪০° সে) ও উচ্চ লবণাক্ততায় বেঁচে থাকার ক্ষমতা"
        ]
      }
    },
    "habitat": {
      "en": "Freshwater streams, seasonal drying rain pools, mangrove swamps, coastal salt marshes, hypersaline lagoons, and desert springs.",
      "bn": "মিঠাপানির নদী, ক্ষণস্থায়ী বৃষ্টির ডোবা, ম্যানগ্রোভ জলাভূমি ও উপকূলীয় খাঁড়ি।",
      "systems": [
        "freshwater",
        "brackish",
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Key biological mosquito control agents (Gambusia) and dominant forage micropredators in shallow fringe habitats where larger fishes cannot survive.",
      "bn": "মশার লার্ভা দমনের প্রধান প্রাকৃতিক নিয়ন্ত্রক (গাম্বুসিয়া) এবং চরমভাবাপন্ন অগভীর জলাশয়ের খাদ্যজালের মূল উপাদান।"
    },
    "feeding": {
      "en": "Omnivorous and insectivorous surface feeders, consuming mosquito larvae, microcrustaceans, terrestrial insects, and filamentous algae.",
      "bn": "কীটপতঙ্গভোজী; মশার ডিম ও লার্ভা, ভাসমান পোকা ও জলজ শৈবাল খায়।"
    },
    "reproduction": {
      "en": "Extremely diverse: livebearing (giving birth to fully formed free-swimming fry in Poecilia and Gambusia) or egg-laying with embryonic diapause stages.",
      "bn": "অত্যন্ত বৈচিত্র্যময়: সরাসরি পূর্ণাঙ্গ বাচ্চা প্রসব (গাপ্পি ও গাম্বুসিয়া) অথবা দীর্ঘমেয়াদী সুপ্তাবস্থা ধারণকারী ডিম্ব প্রসব।"
    },
    "distribution": {
      "en": "Worldwide across the Americas, Africa, Southern Europe, and Asia. Aplocheilus panchax (Blue Panchax / Kanpona) is native across all wetlands of Bangladesh.",
      "bn": "আমেরিকা, আফ্রিকা ও এশিয়ায় বিস্তৃত। কানপোনা বা চোখপুঁটি (Aplocheilus panchax) বাংলাদেশের সর্বত্র প্রাপ্ত একটি দেশীয় প্রজাতি।"
    },
    "importantFamilies": [
      {
        "name": "Poeciliidae",
        "commonEn": "Livebearers / Guppies",
        "commonBn": "গাপ্পি ও লাইভবেয়ারার গোত্র",
        "diagnosticEn": "Viviparous with male gonopodium, includes guppies, mollies, and mosquitofish; includes Poecilia.",
        "diagnosticBn": "জীবিত বাচ্চা প্রসব করে, পুরুষে গনোপোডিয়াম থাকে; Poecilia ও Gambusia গণ অন্তর্ভুক্ত।"
      },
      {
        "name": "Aplocheilidae",
        "commonEn": "Asian Killifishes",
        "commonBn": "কানপোনা বা এশীয় কিলিফিশ গোত্র",
        "diagnosticEn": "Surface-dwelling oviparous killifishes, reflective silver spot on top of head; includes Aplocheilus.",
        "diagnosticBn": "মাথার উপরে উজ্জ্বল রূপালী চোখা দাগযুক্ত উপরিভাগের মাছ; Aplocheilus (কানপোনা) অন্তর্ভুক্ত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Genera: Aplocheilus, Poecilia, Gambusia, and Fundulus. Key binomials: Aplocheilus panchax (Hamilton, 1822) and Poecilia reticulata Peters, 1859.",
      "bn": "গণ: Aplocheilus, Poecilia, Gambusia এবং Fundulus। প্রধান নাম: Aplocheilus panchax (Hamilton, 1822) এবং Poecilia reticulata Peters, 1859।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Blue Panchax / Kanpona (Aplocheilus panchax - native to Bangladesh), Common Guppy (Poecilia reticulata), Mosquitofish (Gambusia affinis), and Green Swordtail (Xiphophorus hellerii).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: কানপোনা (Aplocheilus panchax - বাংলাদেশে দেশীয়), সাধারণ গাপ্পি (Poecilia reticulata), মসকুইটোফিশ (Gambusia affinis) এবং গ্রিন সোর্ডটেইল (Xiphophorus hellerii)।"
    },
    "additionalInformation": {
      "en": "Aplocheilus panchax (Kanpona) is renowned across rural Bangladesh as a premier native biological mosquito control agent, feeding voraciously on vector mosquito larvae in village ponds and ditches.",
      "bn": "কানপোনা মাছ (Aplocheilus panchax) গ্রামীণ বাংলাদেশে ম্যালেরিয়া ও ডেঙ্গু রোগের বাহক মশার লার্ভা ধ্বংস করার সবচেয়ে কার্যকর দেশীয় মাছ হিসেবে পরিচিত।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Parenti (1981)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-cichliformes",
    "taxonId": "taxon-cichliformes",
    "rank": "order",
    "scientificName": "Cichliformes",
    "bengaliName": "সিক্লিফর্মিস (সিক্লিড ও তেলাপিয়া)",
    "englishName": "Cichlids and Convict Blennies",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিময় পাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Actinopteri",
        "nameBn": "অ্যাক্টিনোপ্টেরি"
      },
      {
        "rank": "infraclass",
        "name": "Teleostei",
        "nameBn": "টেলিয়স্ট"
      },
      {
        "rank": "order",
        "name": "Cichliformes",
        "nameBn": "সিক্লিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Extraordinarily diverse freshwater and brackish fishes renowned as evolutionary models of explosive speciation in the African Great Lakes, famous for complex parental care (mouthbrooding) and global food aquaculture (tilapias).",
      "bn": "বিবর্তনের অন্যতম বিস্ময়কর মাছের বর্গ; যা আফ্রিকার হ্রদগুলোতে দ্রুততম প্রজাতির উদ্ভবের মডেল হিসেবে খ্যাত এবং মুখগহ্বরে বাচ্চা লালন-পালন ও বিশ্বব্যাপী তেলাপিয়া মাছ চাষের জন্য বিখ্যাত।"
    },
    "diagnosticCharacteristics": {
      "en": "Single nostril on each side of snout (rarely two); interrupted lateral line consisting of an anterior high section and a posterior mid-lateral section; fused lower pharyngeal jaw forming an efficient crushing mill; complex parental care including biparental guarding, substrate brooding, or mouthbrooding where the parent carries eggs and free-swimming fry inside the buccal cavity for protection.",
      "bn": "মাথার প্রতি পাশে একক নাসারন্ধ্র (অন্যান্য মাছে দুটি থাকে); খণ্ডিত পার্শ্বরেখা যা পিঠের কাছে একটি এবং লেজের মাঝবরাবর আরেকটি রেখায় বিভক্ত; খাদ্য পেষণের জন্য গলবিলের শক্তিশালী দাঁত; মুখে ডিম ও পোনা রেখে যত্ন নেওয়ার অনন্য মাতৃ/পিতৃ বাৎসল্য (mouthbrooding)।",
      "keyFeatures": {
        "en": [
          "Single nostril aperture on each side of head (unlike the two nostrils of typical teleosts)",
          "Interrupted lateral line divided into upper anterior and lower posterior segments",
          "Advanced parental care including buccal mouthbrooding of developing eggs and fry",
          "Explosive adaptive radiation in Lake Victoria, Tanganyika, and Malawi (>1,500 species)"
        ],
        "bn": [
          "মাথার দুই পাশে সাধারণ দুটি ছিদ্রের বদলে একক নাসারন্ধ্র",
          "দ্বিখণ্ডিত পার্শ্বরেখা যা উপরে ও নিচে দুটি খণ্ডে বিভক্ত",
          "বিপদের সময় ডিম ও ছোট বাচ্চাকে মুখের ভেতর ঢুকিয়ে নিরাপদে রাখা",
          "আফ্রিকার ভিক্টোরিয়া ও মালাউই হ্রদে স্বল্প সময়ে শত শত নতুন প্রজাতির উৎপত্তি"
        ]
      }
    },
    "habitat": {
      "en": "Tropical freshwater lakes, river channels, coastal estuaries, and warm floodplain swamps across Africa, South America, and South Asia.",
      "bn": "ক্রান্তীয় মিঠাপানির হ্রদ, নদী, মোহনা এবং প্লাবনভূমি।",
      "systems": [
        "freshwater",
        "brackish"
      ]
    },
    "ecosystem": {
      "en": "Fulfill every conceivable aquatic ecological niche: rock-scraping herbivorous mbuna, snail-crushers, scale-eaters, and apex piscivorous predators.",
      "bn": "জলজ বাস্তুতন্ত্রের প্রায় সকল ভূমিকা পালন করে: শৈবালভোজী, শামুকভোজী, অন্য মাছের আঁইশভোজী থেকে শুরু করে শীর্ষ শিকারী।"
    },
    "feeding": {
      "en": "Extraordinarily specialized diets: algae grazers, detritivores, molluscivores, zooplanktivores, and predatory piscivores.",
      "bn": "অত্যন্ত বিশেষায়িত খাদ্যাভ্যাস; শৈবাল, কাদা, শামুক, পোকা ও ছোট মাছ খায়।"
    },
    "reproduction": {
      "en": "Advanced parental care: pairs clean rocky substrates or dig gravel craters; in mouthbrooders, the female gathers fertilized eggs into her mouth, incubating them through yolk absorption.",
      "bn": "উন্নত সন্তান পালন; স্ত্রী মাছ ডিম পেড়ে সাথে সাথে নিজের মুখে তুলে নেয় এবং ডিম ফুটে পোনা বড় না হওয়া পর্যন্ত না খেয়ে মুখে রেখে পাহারা দেয়।"
    },
    "distribution": {
      "en": "Native to Africa, Central and South America, the Levant, Madagascar, and Southern India/Sri Lanka. Oreochromis niloticus (Nile Tilapia) is widely farmed across Bangladesh.",
      "bn": "আফ্রিকা, দক্ষিণ আমেরিকা ও দক্ষিণ এশিয়ায় বিস্তৃত। বাংলাদেশে নাইলোটিকা বা তেলাপিয়া (Oreochromis niloticus) একটি প্রধান চাষকৃত খাদ্য মাছ।"
    },
    "importantFamilies": [
      {
        "name": "Cichlidae",
        "commonEn": "Cichlids & Tilapias",
        "commonBn": "সিক্লিড ও তেলাপিয়া গোত্র",
        "diagnosticEn": "Single nostril on each side, interrupted lateral line, mouthbrooding common; includes Oreochromis.",
        "diagnosticBn": "একক নাসারন্ধ্র, খণ্ডিত পার্শ্বরেখা, মুখে বাচ্চা পালন; Oreochromis গণ অন্তর্ভুক্ত।"
      },
      {
        "name": "Pholidichthyidae",
        "commonEn": "Convict Blennies",
        "commonBn": "কনভিক্ট ব্লেনি গোত্র",
        "diagnosticEn": "Marine Indo-Pacific reef fish living in communal burrows; single genus Pholidichthys.",
        "diagnosticBn": "সামুদ্রিক প্রবাল প্রাচীরের মাছ যা সুরঙ্গ খুঁড়ে দলবদ্ধভাবে বাস করে।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Genera: Oreochromis, Cichla, Pterophyllum, and Maylandia. Key binomials: Oreochromis niloticus (Linnaeus, 1758) and Pterophyllum scalare (Schultze, 1823).",
      "bn": "গণ: Oreochromis, Cichla, Pterophyllum এবং Maylandia। প্রধান নাম: Oreochromis niloticus (Linnaeus, 1758) এবং Pterophyllum scalare (Schultze, 1823)।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Nile Tilapia (Oreochromis niloticus - farmed in Bangladesh), Freshwater Angelfish (Pterophyllum scalare), Mozambique Tilapia (Oreochromis mossambicus), and Convict Blenny (Pholidichthys leucotaenia).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: নীল তেলাপিয়া বা নাইলোটিকা (Oreochromis niloticus - বাংলাদেশে চাষকৃত), মিঠাপানির এঞ্জেলফিশ (Pterophyllum scalare), মোজাম্বিক তেলাপিয়া (Oreochromis mossambicus) এবং কনভিক্ট ব্লেনি (Pholidichthys leucotaenia)।"
    },
    "additionalInformation": {
      "en": "Nile Tilapia (Oreochromis niloticus) is known as the 'aquatic chicken' and forms the second most farmed finfish group in the world, serving as an essential inexpensive protein source across Bangladesh.",
      "bn": "নাইলোটিকা তেলাপিয়া মাছকে 'জলজ মুরগি' বলা হয়; এটি দ্রুত বর্ধনশীল এবং বাংলাদেশের সাধারণ মানুষের জন্য সুলভ আমিষের প্রধান উৎস।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Eschmeyer's Catalog of Fishes (2026); Betancur-R. et al. (2017)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-mugiliformes",
    "taxonId": "taxon-mugiliformes",
    "rank": "order",
    "scientificName": "Mugiliformes",
    "bengaliName": "মুগিলিফর্মিস (বাটা, খোরশুলা ও মালেট)",
    "englishName": "Mullets",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিময় পাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Actinopteri",
        "nameBn": "অ্যাক্টিনোপ্টেরি"
      },
      {
        "rank": "infraclass",
        "name": "Teleostei",
        "nameBn": "টেলিয়স্ট"
      },
      {
        "rank": "order",
        "name": "Mugiliformes",
        "nameBn": "মুগিলিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Torpedo-shaped, schooling coastal and freshwater fishes with two well-separated dorsal fins, broad flattened heads, small toothless mouths, and muscular gizzard-like stomachs adapted for detritus digestion.",
      "bn": "টর্পেডো আকৃতির উপকূলীয় ও মিষ্টি পানির রূপালী মাছ; যাদের দুটি সুস্পষ্ট পৃথক পৃষ্ঠপাখনা, চ্যাপ্টা মাথা এবং কাদা ও ডায়াটম হজমের জন্য পাখির মতো শক্ত গিজার্ড পাকস্থলী রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Body elongate, cylindrical to slightly compressed, covered in large ctenoid or cycloid scales; two well-separated dorsal fins (first dorsal fin with exactly four stiff spines, second dorsal with soft rays); broad flattened head with eyes partly covered by adipose eyelids; mouth small, triangular, lacking teeth or with tiny ciliiform teeth; muscular, gizzard-like stomach and extremely long digestive tract adapted for digesting benthic sediment films and microalgae.",
      "bn": "লম্বা নলাকার দেহ ও বড় আঁইশ; দুটি সম্পূর্ণ পৃথক পৃষ্ঠপাখনা (প্রথম পৃষ্ঠপাখনায় ঠিক ৪টি শক্ত কাঁটা এবং দ্বিতীয়টিতে নরম রশ্মি); চওড়া চ্যাপ্টা মাথা ও অ্যাডিপোজ চোখের পাতা; ছোট ত্রিভুজাকার মুখ যাতে দাঁত নেই বা ক্ষুদ্র আঁশের মতো দাঁত থাকে; কাদা ও পলি থেকে খাদ্য হজমের জন্য পাখির মতো শক্ত পেশীবহুল গিজার্ড পাকস্থলী এবং অতিদীর্ঘ অন্ত্র বিদ্যমান।",
      "keyFeatures": {
        "en": [
          "First dorsal fin equipped with precisely four stout, sharp spines",
          "Muscular gizzard-like stomach adapted to grind detritus and benthic diatoms",
          "Wide separation between the spinous and soft-rayed dorsal fins",
          "Prominent schooling behavior in estuaries, jumping frequently above the surface"
        ],
        "bn": [
          "প্রথম পৃষ্ঠপাখনায় সুনির্দিষ্টভাবে ৪টি শক্ত তীক্ষ্ণ কাঁটা",
          "কাদা ও পলি থেকে খাদ্য গুঁড়ো করার জন্য পাখির মতো শক্ত গিজার্ড পাকস্থলী",
          "কাঁটাময় প্রথম ও নরম দ্বিতীয় পৃষ্ঠপাখনার মধ্যকার সুস্পষ্ট ফাঁকা দূরত্ব",
          "উপকূল ও মোহনায় ঝাঁক বেঁধে সাঁতার এবং পানির উপর লাফিয়ে ওঠার স্বভাব"
        ]
      }
    },
    "habitat": {
      "en": "Coastal marine shelves, estuaries, mangrove channels, tidal mudflats, and upstream freshwater rivers.",
      "bn": "উপকূলীয় সমুদ্র, নদীর মোহনা, সুন্দরবনের ম্যানগ্রোভ নদী এবং মিঠাপানির নদ-নদী।",
      "systems": [
        "marine",
        "brackish",
        "freshwater"
      ]
    },
    "ecosystem": {
      "en": "Primary consumers and detritivores, converting vast amounts of benthic microalgal films and detrital carbon into fish biomass for top coastal predators.",
      "bn": "উপকূলীয় বাস্তুতন্ত্রের প্রধান প্রাথমিক খাদক; তলদেশের কাদা ও শৈবাল খেয়ে তা পুষ্টিকর মাংসে রূপান্তর করে যা শিকারী প্রাণীদের বাঁচায়।"
    },
    "feeding": {
      "en": "Detritivorous and herbivorous filter-feeders, scooping up bottom sediment to sift diatoms, filamentous algae, and organic debris through fine gill rakers.",
      "bn": "কাদামাটি ও শৈবালভোজী; তলদেশের কাদা মুখে তুলে ফুলকা দিয়ে ডায়াটম ও জৈব কণা ছেঁকে খায়।"
    },
    "reproduction": {
      "en": "Catadromous or offshore marine spawners: adults migrate from rivers and estuaries out to sea to release millions of buoyant pelagic eggs.",
      "bn": "নদী ও মোহনা থেকে সাগরে গিয়ে ডিম পাড়ে; ডিম ফুটে লার্ভা তৈরি হয় যা পরে নদী ও সুন্দরবনের খাঁড়িতে ফিরে আসে।"
    },
    "distribution": {
      "en": "Circumglobal across all tropical, subtropical, and temperate waters. Enormously important in Bangladesh coastal fisheries (Bata, Khorsula, and Parsia).",
      "bn": "সারা বিশ্বের উষ্ণ ও নাতিশীতোষ্ণ সাগরে বিস্তৃত। বাংলাদেশের উপকূলীয় মৎস্য খাতে বাটা, পারশে ও খোরশুলা মাছ অত্যন্ত জনপ্রিয়।"
    },
    "importantFamilies": [
      {
        "name": "Mugilidae",
        "commonEn": "Mullets",
        "commonBn": "মালেট বা বাটা গোত্র",
        "diagnosticEn": "Single family sharing all ordinal characters; includes Mugil, Chelon, and Rhinomugil.",
        "diagnosticBn": "একমাত্র পরিবার; Mugil, Chelon এবং Rhinomugil (খোরশুলা) গণ অন্তর্ভুক্ত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Genera: Mugil, Chelon, Rhinomugil, and Planiliza. Key binomials: Mugil cephalus Linnaeus, 1758, Chelon parsia (Hamilton, 1822), and Rhinomugil corsula (Hamilton, 1822).",
      "bn": "গণ: Mugil, Chelon, Rhinomugil এবং Planiliza। প্রধান নাম: Mugil cephalus Linnaeus, 1758, Chelon parsia (Hamilton, 1822) এবং Rhinomugil corsula (Hamilton, 1822)।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Flathead Grey Mullet (Mugil cephalus - native to Bangladesh), Goldspot Mullet / Parshe (Chelon parsia - native to Bangladesh), Corsula Mullet / Khorsula (Rhinomugil corsula - native to Bangladesh), and Tade Mullet / Bata (Chelon tade - native to Bangladesh).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: ফ্ল্যাটহেড মালেট (Mugil cephalus - বাংলাদেশে প্রাপ্ত), পারশে মাছ (Chelon parsia - উপকূলীয় দেশীয় মাছ), খোরশুলা মাছ (Rhinomugil corsula - পদ্মা ও মেঘনার দেশীয় মাছ) এবং বাটা মাছ (Chelon tade - বাংলাদেশে দেশীয় মাছ)।"
    },
    "additionalInformation": {
      "en": "Rhinomugil corsula (Khorsula) swims with its elevated periscopic eyes protruding above the river surface like a crocodile to spot aerial predators and surface drift in the Ganges-Brahmaputra rivers of Bangladesh.",
      "bn": "খোরশুলা মাছ (Rhinomugil corsula) পদ্মা ও যমুনা নদীতে কুমিরের মতো চোখ পানির উপরে তুলে ভেসে চলে, যা এদের চমৎকার অভিযোজন।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Thomson (1997)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-blenniiformes",
    "taxonId": "taxon-blenniiformes",
    "rank": "order",
    "scientificName": "Blenniiformes",
    "bengaliName": "ব্লেনিফর্মিস (কম্বটুথ ব্লেনি ও কেল্পফিশ)",
    "englishName": "Combtooth Blennies, Kelpfishes, and Clingfishes",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিময় পাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Actinopteri",
        "nameBn": "অ্যাক্টিনোপ্টেরি"
      },
      {
        "rank": "infraclass",
        "name": "Teleostei",
        "nameBn": "টেলিয়স্ট"
      },
      {
        "rank": "order",
        "name": "Blenniiformes",
        "nameBn": "ব্লেনিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Small, bottom-dwelling coastal and reef fishes with scaleless bodies, close-set comb-like teeth in the jaws, tentacle-like cirri above the eyes, and jugular pelvic fins placed in front of pectorals.",
      "bn": "উপকূল ও প্রবাল প্রাচীরের ক্ষুদ্র তলদেশীয় মাছ; যাদের শরীর আঁইশহীন, চোয়ালে চিরুনির মতো খাঁজকাটা দাঁতের সারি, চোখের উপর ছোট গোঁফ বা টেনট্যাকল এবং গলার নিচে শ্রোণীপাখনা রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Body slender, elongate, and scaleless (or covered in tiny embedded cycloid scales); head blunt with fleshy tentacular cirri above eyes and nostrils; jaws armed with a single uniform comb-like row of close-set incisiform teeth (often with large curved canine fangs behind); pelvic fins jugular, inserted ahead of pectoral fins with 1 concealed spine and 2–4 rays; dorsal fin continuous and long; swimbladder absent in adults.",
      "bn": "সরু লম্বা আঁইশহীন শরীর; ভোঁতা মাথার চোখের উপর নরম ঝালরযুক্ত মাংসল টেনট্যাকল; চোয়ালে চিরুনির মতো সাজানো একসারি দাঁত (পেছনে প্রায়ই বাঁকানো বিষাক্ত ক্যানাইন দাঁত থাকে); বক্ষপাখনার আগে গলার নিচে শ্রোণীপাখনা অবস্থিত; অবিচ্ছিন্ন দীর্ঘ পৃষ্ঠপাখনা; পটকা অনুপস্থিত।",
      "keyFeatures": {
        "en": [
          "Closely packed comb-like teeth in jaws adapted for scraping reef surfaces",
          "Fleshy branched or tentacular cirri situated above the orbital rim",
          "Jugular pelvic fins used like limbs to prop the fish up on rocky substrates",
          "Absence of swimbladder enforcing a strictly bottom-dwelling lifestyle"
        ],
        "bn": [
          "পাথরের শৈবাল চেঁছে খাওয়ার জন্য চোয়ালে চিরুনির মতো ঘন দাঁতের সারি",
          "চোখের পাতার উপরে অবস্থিত নরম মাংসল টেনট্যাকল বা ঝালর",
          "পাথরের উপর ভর দিয়ে বসে থাকার জন্য পায়ের মতো ব্যবহৃত শ্রোণীপাখনা",
          "পটকা না থাকায় সর্বদা পানির নিচে অবস্থান করার স্বভাব"
        ]
      }
    },
    "habitat": {
      "en": "Intertidal rocky coasts, tidepools, tropical coral reefs, kelp forests, and shallow subtidal crevices.",
      "bn": "উপকূলীয় পাথুরে অঞ্চল, ভাটার জলাশয়, ক্রান্তীয় প্রবাল প্রাচীর ও পাথরের খাঁজ।",
      "systems": [
        "marine",
        "brackish"
      ]
    },
    "ecosystem": {
      "en": "Dominant primary grazers on coral reefs; combtooth blennies scrape microalgal turf, opening clean substrate for larval coral recruitment.",
      "bn": "প্রবাল প্রাচীরের প্রধান শৈবালভোজী; প্রাচীরের অবাঞ্ছিত শৈবাল পরিষ্কার করে নতুন প্রবাল গজাতে সাহায্য করে।"
    },
    "feeding": {
      "en": "Herbivorous, detritivorous, and carnivorous. Combtooth blennies scrape turf algae; sabretooth blennies (Meiacanthus/Aspidontus) mimic cleaner wrasses to nip fins and scales with venomous fangs.",
      "bn": "শৈবালভোজী ও শিকারী; ব্লেড-সদৃশ দাঁতযুক্ত ব্লেনি বিষাক্ত দাঁত দিয়ে অন্য মাছের পাখনা ও আঁইশ কামড়ে খায়।"
    },
    "reproduction": {
      "en": "Territorial demersal nesting. Females lay adhesive eggs in empty barnacle shells, gastropod shells, or rock crevices; males aggressively defend and oxygenate the eggs.",
      "bn": "পাথরের খাঁজে বা ঝিনুকের খোলসে ডিম পাড়ে; পুরুষ মাছ সাহসের সাথে পাহারা দিয়ে ডিমে বাতাস যোগায়।"
    },
    "distribution": {
      "en": "Worldwide in tropical and temperate shallow coastal seas. Species occur along Saint Martin's Island coral and rocky reefs in Bangladesh.",
      "bn": "সারা বিশ্বের উষ্ণ ও নাতিশীতোষ্ণ উপকূলীয় সাগরে বিস্তৃত। বাংলাদেশের সেন্টমার্টিন দ্বীপের প্রবাল প্রাচীরে এদের প্রজাতি বাস করে।"
    },
    "importantFamilies": [
      {
        "name": "Blenniidae",
        "commonEn": "Combtooth Blennies",
        "commonBn": "কম্বটুথ ব্লেনি গোত্র",
        "diagnosticEn": "Scaleless, comb teeth in jaws, cirri above eyes, includes venomous fangblennies; includes Meiacanthus.",
        "diagnosticBn": "আঁইশহীন, চিরুনি দাঁত, চোখের উপর গোঁফ; Meiacanthus ও Salaria গণ অন্তর্ভুক্ত।"
      },
      {
        "name": "Tripterygiidae",
        "commonEn": "Triplefins",
        "commonBn": "ট্রিপলফিন গোত্র",
        "diagnosticEn": "Dorsal fin divided into three distinct segments, ctenoid scales present; includes Tripterygion.",
        "diagnosticBn": "পৃষ্ঠপাখনা তিনটি পৃথক অংশে বিভক্ত; Tripterygion গণ অন্তর্ভুক্ত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Genera: Salaria, Meiacanthus, Parablennius, and Petroscirtes. Key binomials: Salaria pavo (Risso, 1810) and Meiacanthus grammistes (Valenciennes, 1836).",
      "bn": "গণ: Salaria, Meiacanthus, Parablennius এবং Petroscirtes। প্রধান নাম: Salaria pavo (Risso, 1810) এবং Meiacanthus grammistes (Valenciennes, 1836)।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Peacock Blenny (Salaria pavo), Striped Poison-fang Blenny (Meiacanthus grammistes), Tompot Blenny (Parablennius gattorugine), and Red-lipped Blenny (Ophioblennius atlanticus).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: পিকক ব্লেনি (Salaria pavo), পয়জন-ফ্যাং ব্লেনি (Meiacanthus grammistes), টমপট ব্লেনি (Parablennius gattorugine) এবং রেড-লিপড ব্লেনি (Ophioblennius atlanticus)।"
    },
    "additionalInformation": {
      "en": "Fangblennies of the genus Meiacanthus possess true venom glands at the base of their lower jaw canine teeth—the only known teleost fishes with an active venomous bite.",
      "bn": "Meiacanthus গণের ফ্যাংব্লেনি মাছের নিচের দাঁতের গোড়ায় বিষগ্রন্থি থাকে—এরাই একমাত্র মাছ যারা দাঁত দিয়ে কামড়ে বিষ ঢালতে পারে।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Hastings & Springer (1994)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-centrarchiformes",
    "taxonId": "taxon-centrarchiformes",
    "rank": "order",
    "scientificName": "Centrarchiformes",
    "bengaliName": "সেন্ট্রার্কিফর্মিস (সানফিশ, ব্ল্যাক বাস ও টেরাপন)",
    "englishName": "Sunfishes, Black Basses, and Terapon Perches",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিময় পাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Actinopteri",
        "nameBn": "অ্যাক্টিনোপ্টেরি"
      },
      {
        "rank": "infraclass",
        "name": "Teleostei",
        "nameBn": "টেলিয়স্ট"
      },
      {
        "rank": "order",
        "name": "Centrarchiformes",
        "nameBn": "সেন্ট্রার্কিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Deep-bodied spiny-rayed percomorph teleosts characterized by continuous dorsal fins with anterior spines, thoracic pelvic fins, aggressive nest-guarding behavior, and including iconic North American gamefishes and Indo-Pacific grunters.",
      "bn": "চ্যাপ্টা কাঁটাময় মাছ; যাদের সংযুক্ত পৃষ্ঠপাখনায় শক্ত কাঁটা, বক্ষীয় শ্রোণীপাখনা, ডিম পাহারা দেওয়ার আক্রমণাত্মক স্বভাব রয়েছে; বিখ্যাত ব্ল্যাক বাস ও সুন্দরবনের কটকটি/টেরাপন মাছ এর অন্তর্ভুক্ত।"
    },
    "diagnosticCharacteristics": {
      "en": "Body deep, laterally compressed, covered in ctenoid scales; dorsal fin continuous, with 3–13 stout sharp spines followed by soft rays; anal fin with 3–9 spines; thoracic pelvic fins with 1 spine and 5 soft rays; operculum ending in a flap (often black in sunfishes) or with sharp spines; males construct and aggressively defend excavated gravel saucer nests; terapons (Terapontidae) produce loud grunting sounds with extrinsic swimbladder muscles.",
      "bn": "চ্যাপ্টা গভীর দেহ ও টিনয়েড আঁইশ; পৃষ্ঠপাখনা অবিচ্ছিন্ন যাতে ৩–১৩টি ধারালো শক্ত কাঁটা ও নরম রশ্মি থাকে; পায়ুপাখনায় ৩–৯টি কাঁটা; কানকোর পেছনে কালো চামড়ার ফ্ল্যাপ বা ধারালো কাঁটা; পুরুষ মাছ নুড়িপাথরে গোলাকার গর্ত খুঁড়ে বাসা বানিয়ে পাহারা দেয়; টেরাপন মাছ পটকার সাহায্যে তীব্র ঘোঁত ঘোঁত শব্দ তৈরি করে।",
      "keyFeatures": {
        "en": [
          "Continuous single dorsal fin with an anterior spinous section and posterior soft rays",
          "Elaborate male saucer nest construction in gravel substrates and fierce brood defense",
          "Sound-producing extrinsic swimbladder mechanism in terapons (Terapontidae)",
          "Major global sports and food fisheries (largemouth bass and crappies)"
        ],
        "bn": [
          "কাঁটাময় অগ্রভাগ ও নরম রশ্মিময় পশ্চাদ্ভাগযুক্ত অবিচ্ছিন্ন পৃষ্ঠপাখনা",
          "পুরুষ মাছ কর্তৃক নুড়িপাথরে থালার মতো বাসা তৈরি ও বাচ্চার তীব্র সুরক্ষা",
          "টেরাপন মাছে পটকার পেশী দ্বারা ঘোঁত ঘোঁত শব্দ তৈরির ক্ষমতা",
          "বিশ্বব্যাপী জনপ্রিয় গেমফিশ (লার্জমাউথ বাস)"
        ]
      }
    },
    "habitat": {
      "en": "Temperate freshwater lakes, slow-flowing rivers, coastal estuaries, mangrove channels, and inshore marine waters.",
      "bn": "মিঠাপানির হ্রদ, নদী, উপকূলীয় মোহনা, সুন্দরবনের ম্যানগ্রোভ খাঁড়ি ও অগভীর সাগর।",
      "systems": [
        "freshwater",
        "brackish",
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Apex and mid-tier predators controlling populations of forage fishes, crayfish, and aquatic invertebrates in freshwater and coastal habitats.",
      "bn": "মিঠাপানি ও উপকূলের শিকারী মাছ; ছোট মাছ, কাঁকড়া ও পোকা শিকার করে খাদ্যজালের ভারসাম্য রক্ষা করে।"
    },
    "feeding": {
      "en": "Voracious carnivorous ambush predators, swallowing baitfishes, frogs, crayfish, and insects whole with sudden buccal suction.",
      "bn": "মাংসাশী শিকারী; ছোট মাছ, ব্যাঙ, ক্রেফিশ ও জলজ পোকা গিলে খায়।"
    },
    "reproduction": {
      "en": "Parental nest care: males sweep circular depressions in sand or gravel, court females, fertilize adhesive eggs, and vigorously fan and defend the brood against all intruders.",
      "bn": "পুরুষ মাছ লেজ দিয়ে বালি সরিয়ে গোল বাসা বানায়; স্ত্রী মাছ ডিম পাড়ার পর পুরুষ মাছ ডিম ও পোনাকে সব বিপদ থেকে আগলে রাখে।"
    },
    "distribution": {
      "en": "North America (Centrarchidae) and the Indo-West Pacific (Terapontidae, Kuhliidae). Terapon jarbua (Gonggona / Jarbua terapon) is native across coastal and estuarine waters of Bangladesh.",
      "bn": "উত্তর আমেরিকা ও ইন্দো-পশ্চিম প্রশান্ত মহাসাগরে বিস্তৃত। কটকটি মাছ বা জারবুয়া টেরাপন (Terapon jarbua) বাংলাদেশের উপকূল ও সুন্দরবনের দেশীয় মাছ।"
    },
    "importantFamilies": [
      {
        "name": "Centrarchidae",
        "commonEn": "Sunfishes & Black Basses",
        "commonBn": "সানফিশ ও ব্ল্যাক বাস গোত্র",
        "diagnosticEn": "Continuous dorsal fin, 3-8 anal spines, nest builders, North American natives; includes Micropterus.",
        "diagnosticBn": "যুক্ত পৃষ্ঠপাখনা, উত্তর আমেরিকার বিখ্যাত বাস মাছ; Micropterus ও Lepomis গণ অন্তর্ভুক্ত।"
      },
      {
        "name": "Terapontidae",
        "commonEn": "Grunters / Terapon Perches",
        "commonBn": "কটকটি বা টেরাপন গোত্র",
        "diagnosticEn": "Coastal marine and estuarine, produce loud croaks, opercular spine stout; includes Terapon.",
        "diagnosticBn": "ঘোঁত ঘোঁত শব্দকারী কানকোয় কাঁটাযুক্ত উপকূলীয় মাছ; Terapon (কটকটি) অন্তর্ভুক্ত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Genera: Micropterus, Lepomis, Terapon, and Kuhlia. Key binomials: Micropterus salmoides (Lacepède, 1802) and Terapon jarbua (Forsskål, 1775).",
      "bn": "গণ: Micropterus, Lepomis, Terapon এবং Kuhlia। প্রধান নাম: Micropterus salmoides (Lacepède, 1802) এবং Terapon jarbua (Forsskål, 1775)।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Jarbua Terapon / Kotkoti Machh (Terapon jarbua - native to Bangladesh), Largemouth Bass (Micropterus salmoides), Bluegill Sunfish (Lepomis macrochirus), and Banded Grunter (Amniataba percoides).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: কটকটি মাছ (Terapon jarbua - বাংলাদেশে দেশীয়), লার্জমাউথ বাস (Micropterus salmoides), ব্লুগিল সানফিশ (Lepomis macrochirus) এবং ব্যান্ডেড গ্রান্টার (Amniataba percoides)।"
    },
    "additionalInformation": {
      "en": "Terapon jarbua (Kotkoti) is famous in coastal Bangladesh for producing loud croaking sounds when handled, caused by vibrating muscles against its swimbladder.",
      "bn": "কটকটি মাছ (Terapon jarbua) পানি থেকে তুললে পটকার পেশী কাঁপিয়ে তীব্র 'কট কট' শব্দ করার জন্য সুন্দরবন ও উপকূলীয় অঞ্চলে বিখ্যাত।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Eschmeyer's Catalog of Fishes (2026); Near et al. (2012)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-labriformes",
    "taxonId": "taxon-labriformes",
    "rank": "order",
    "scientificName": "Labriformes",
    "bengaliName": "ল্যাব্রিফর্মিস (রাস ও প্যারটফিশ বা তোতাপাখি মাছ)",
    "englishName": "Wrasses, Parrotfishes, and Odacids",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিময় পাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Actinopteri",
        "nameBn": "অ্যাক্টিনোপ্টেরি"
      },
      {
        "rank": "infraclass",
        "name": "Teleostei",
        "nameBn": "টেলিয়স্ট"
      },
      {
        "rank": "order",
        "name": "Labriformes",
        "nameBn": "ল্যাব্রিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Brilliantly colored marine reef fishes characterized by thick protractile lips, coalesced beak-like dental plates in parrotfishes for bioeroding coral, protogynous hermaphroditism, and nocturnal mucous sleeping cocoons.",
      "bn": "উজ্জ্বল রঙের প্রবাল প্রাচীরের মাছ; যাদের মাংসল ঠোঁট, প্যারটফিশের তোতাপাখির মতো শক্ত দাঁতের চঞ্চু যা দিয়ে প্রবাল ভেঙে গুঁড়ো করে সাদা বালু তৈরি করে, লিঙ্গ রূপান্তরের ক্ষমতা এবং রাতে ঘুমানোর জন্য মিউকাসের বিশেষ স্বচ্ছ মশারি তৈরির স্বভাব রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Body deep to slender, covered in smooth cycloid scales; mouth terminal with thick fleshy protractile lips; teeth in jaws separate and caniniform in wrasses, or completely coalesced into a parrot-like beak in parrotfishes (Scarinae); powerful upper and lower pharyngeal bones modified into a crushing mill; protogynous sex reversal (females transform into colorful dominant terminal males); parrotfishes secrete a protective mucous envelope around themselves at night to mask scent from nocturnal predators.",
      "bn": "মসৃণ সাইক্লয়েড আঁইশে ঢাকা শরীর; মাংসল উল্টানো ঠোঁটযুক্ত মুখ; দাঁত আলাদা ও ধারালো অথবা তোতাপাখির ঠোঁটের মতো শক্ত চঞ্চুতে রূপান্তরিত; শক্ত প্রবাল ভাঙার জন্য গলবিলে শক্তিশালী পেষণযন্ত্র; প্রোটোজাইনাস লিঙ্গ রূপান্তর (স্ত্রী মাছ বয়সে বড় হয়ে উজ্জ্বল পুরুষ মাছে রূপান্তরিত হয়); রাতে ঘুমানোর সময় দেহ থেকে স্বচ্ছ মিউকাসের খোলস বা মশারি তৈরি করে যার ভেতরে এরা লুকিয়ে থাকে যাতে হাঙ্গর গন্ধ না পায়।",
      "keyFeatures": {
        "en": [
          "Teeth fused into a parrot-like beak in parrotfishes for biting hard stony corals",
          "Powerful pharyngeal mill grinding coral skeleton into fine white biogenic beach sand",
          "Protogynous hermaphroditism (sex change from female to terminal male)",
          "Secretion of a nocturnal transparent mucous sleeping cocoon shielding against nocturnal parasites"
        ],
        "bn": [
          "প্যারটফিশের তোতাপাখির মতো শক্ত চোয়াল যা দিয়ে জীবন্ত শক্ত প্রবাল কেটে খায়",
          "গলবিলের শক্তিশালী দাঁত দিয়ে প্রবাল চূর্ণ করে সাদা সমুদ্রের বালুতে পরিণত করা",
          "স্ত্রী থেকে পুরুষে শারীরিক লিঙ্গ রূপান্তরের ক্ষমতা",
          "রাতে পরজীবী ও হাঙ্গর থেকে বাঁচতে শরীর ঘিরে মিউকাসের স্বচ্ছ থলি তৈরির ক্ষমতা"
        ]
      }
    },
    "habitat": {
      "en": "Tropical coral reefs, rocky inshore reefs, kelp beds, and shallow seagrass flats across warm oceans globally.",
      "bn": "ক্রান্তীয় প্রবাল প্রাচীর, পাথুরে উপকূল, সামুদ্রিক ঘাসবন ও অগভীর সমুদ্র।",
      "systems": [
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Critical reef ecosystem engineers; parrotfishes graze algae and bioerode coral, producing hundreds of kilograms of fine white sand per fish annually; cleaner wrasses remove ectoparasites from ocean megafauna.",
      "bn": "প্রবাল প্রাচীরের প্রধান প্রকৌশলী; একটি প্যারটফিশ বছরে শত শত কেজি প্রবাল চিবিয়ে সাগরের বিখ্যাত সাদা বালু তৈরি করে; ক্লিনার রাস মাছ বড় মাছের গা থেকে পরজীবী খুঁটে খেয়ে সেবা দেয়।"
    },
    "feeding": {
      "en": "Diverse specialist diets: bioeroding corallivores, macroalgal herbivores, hard-shelled mollusc crushers, and cleaning ectoparasite mutualists.",
      "bn": "প্রবাল ও শৈবালভোজী, শামুকভোজী এবং অন্য মাছের গা থেকে পরজীবী পরিষ্কারকারী।"
    },
    "reproduction": {
      "en": "Pelagic spawning with complex haremic mating systems. Dominant terminal males defend harems; upon male loss, the largest female changes sex to male within days.",
      "bn": "খোলা সাগরে ডিম ছড়ায়। বড় পুরুষ মাছ স্ত্রী মাছের দল পাহারা দেয়; পুরুষ মাছ মারা গেলে সবচেয়ে বড় স্ত্রী মাছটি মাত্র কয়েকদিনের মধ্যে পুরুষে রূপান্তরিত হয়ে যায়।"
    },
    "distribution": {
      "en": "Circumglobal across all tropical, subtropical, and warm temperate coral and rocky reefs. Diverse around Saint Martin's Island coral beds in Bangladesh.",
      "bn": "বিশ্বের সকল প্রবাল প্রাচীরে বিস্তৃত। বাংলাদেশের একমাত্র প্রবাল দ্বীপ সেন্টমার্টিনের প্রবাল শৈলীতে এদের অনেক প্রজাতি বাস করে।"
    },
    "importantFamilies": [
      {
        "name": "Labridae",
        "commonEn": "Wrasses & Parrotfishes",
        "commonBn": "রাস ও প্যারটফিশ গোত্র",
        "diagnosticEn": "Thick lips, separate or beak-like teeth, includes Scarinae parrotfishes and Cheilinus.",
        "diagnosticBn": "পুরু ঠোঁট, তোতাপাখির চঞ্চুযুক্ত দাঁত; Scarus ও Cheilinus গণ অন্তর্ভুক্ত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Genera: Scarus, Cheilinus, Labroides, and Thalassoma. Key binomials: Cheilinus undulatus Rüppell, 1835 and Scarus ghobban Forsskål, 1775.",
      "bn": "গণ: Scarus, Cheilinus, Labroides এবং Thalassoma। প্রধান নাম: Cheilinus undulatus Rüppell, 1835 এবং Scarus ghobban Forsskål, 1775।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Blue-barred Parrotfish (Scarus ghobban - native to Bangladesh reefs), Humphead Wrasse (Cheilinus undulatus), Bluestreak Cleaner Wrasse (Labroides dimidiatus), and Moon Wrasse (Thalassoma lunare - native to Bangladesh).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: ব্লু-বার্ড প্যারটফিশ (Scarus ghobban - সেন্টমার্টিনে প্রাপ্ত), হাম্পহেড রাস (Cheilinus undulatus), ক্লিনার রাস (Labroides dimidiatus) এবং মুন রাস (Thalassoma lunare - সেন্টমার্টিনে প্রাপ্ত)।"
    },
    "additionalInformation": {
      "en": "Parrotfishes are responsible for creating the iconic white sandy beaches of tropical atolls; a single large parrotfish produces over 400 kg of pulverized coral sand every year.",
      "bn": "প্রবাল দ্বীপের নয়নাভিরাম সাদা বালু তৈরিতে প্যারটফিশের প্রধান অবদান; একটি বড় মাছ বছরে ৪০০ কেজিরও বেশি প্রবাল গুঁড়ো করে বালু তৈরি করে।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Eschmeyer's Catalog of Fishes (2026); Wainwright et al. (2012)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-acropomatiformes",
    "taxonId": "taxon-acropomatiformes",
    "rank": "order",
    "scientificName": "Acropomatiformes",
    "bengaliName": "অ্যাক্রোপোমাটিফর্মিস (ল্যান্টার্নবেলি ও গভীর পানির পার্চসদৃশ মাছ)",
    "englishName": "Lanternbellies, Deep-sea Perches, and Temperate Basses",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিময় পাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Actinopteri",
        "nameBn": "অ্যাক্টিনোপ্টেরি"
      },
      {
        "rank": "infraclass",
        "name": "Teleostei",
        "nameBn": "টেলিয়স্ট"
      },
      {
        "rank": "order",
        "name": "Acropomatiformes",
        "nameBn": "অ্যাক্রোপোমাটিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Deep-water continental slope and shelf percomorph fishes characterized by bioluminescent ventral light organs in lanternbellies, opercular spines, and including massive deep seamount wreckfishes.",
      "bn": "গভীর সমুদ্রের মহীঢাল ও তলদেশের মাছ; যাদের পেটের নিচে আলো নির্গমনকারী অঙ্গ, কানকোয় কাঁটা এবং দৈত্যাকার রেকফিশ এর অন্তর্ভুক্ত।"
    },
    "diagnosticCharacteristics": {
      "en": "Deep-water percomorph teleosts separated from Perciformes by molecular phylogenomics; two separate or deeply notched dorsal fins (first dorsal with 7–10 spines); anal fin with 2–3 spines; operculum armed with 1 or 2 sharp spines; Acropomatidae possess an internal U-shaped bioluminescent organ embedded in the ventral musculature containing symbiotic luminescent bacteria reflecting light through translucent ventral scales; forward-displaced anus located near pelvic fins in Acropoma.",
      "bn": "আধুনিক জিনতত্ত্ব দ্বারা পার্সিফর্মিস থেকে পৃথককৃত গভীর সমুদ্রের মাছ; দুটি পৃথক বা গভীরভাবে খাঁজকাটা পৃষ্ঠপাখনা (প্রথমটিতে ৭-১০টি কাঁটা); কানকোয় ১ বা ২টি ধারালো কাঁটা; অ্যাক্রোপোমাটিডি পরিবারের পেটের পেশীতে আলো উৎপাদনকারী ব্যাক্টেরিয়ার অঙ্গ থাকে যার আলো পেটের বিশেষ স্বচ্ছ আঁইশ দিয়ে প্রতিফলিত হয়; মলদ্বার পেটের সামনে অবস্থিত।",
      "keyFeatures": {
        "en": [
          "Bioluminescent light organ embedded in the ventral musculature of lanternbellies (Acropoma)",
          "Anterior displacement of anus to near pelvic fin insertions in Acropomatidae",
          "Two separate dorsal fins with stout sharp spines in the first",
          "Giant bathyal seamount apex predators (Polyprion) attaining over 100 kg weight"
        ],
        "bn": [
          "পেটের পেশীতে অবস্থিত অভ্যন্তরীণ আলো উৎপাদনকারী অঙ্গ",
          "মলদ্বার শ্রোণীপাখনার কাছে সামনের দিকে অবস্থিত",
          "ধারালো কাঁটাযুক্ত দুটি পৃথক পৃষ্ঠপাখনা",
          "সমুদ্রের তলদেশের পাহাড়ে বাস করা ১০০ কেজিরও বেশি ওজনের দৈত্যাকার রেকফিশ"
        ]
      }
    },
    "habitat": {
      "en": "Continental shelves, upper continental slopes, submarine seamounts, and deep rocky reefs (50–1,000 meters depth).",
      "bn": "মহীসোপান, মহীঢাল, সমুদ্রগর্ভস্থ পর্বত এবং গভীর পাথুরে প্রাচীর (৫০–১,০০০ মিটার গভীরতায়)।",
      "systems": [
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Demersal and benthopelagic predators on deep continental margins and seamounts, acting as apex piscivores and squid hunters.",
      "bn": "গভীর সমুদ্রের মহীঢালের শিকারী মাছ; গভীর পানির মাছ ও স্কুইড শিকার করে।"
    },
    "feeding": {
      "en": "Carnivorous: lanternbellies consume small midwater fishes and euphausiids; wreckfishes prey upon deep-water crabs, squids, and teleosts.",
      "bn": "মাংসাশী; ছোট মাছ, গভীর পানির চিংড়ি, কাঁকড়া ও স্কুইড খায়।"
    },
    "reproduction": {
      "en": "Pelagic broadcast spawners releasing floating buoyant eggs into offshore marine currents; juveniles drift near drifting kelp before descending to deep seamounts.",
      "bn": "খোলা সমুদ্রে ডিম ছড়ায়; পোনা প্রথমে সাগরের উপরিভাগে ভাসমান শৈবালের আশ্রয়ে থাকে এবং পরে গভীর সমুদ্রে নেমে যায়।"
    },
    "distribution": {
      "en": "Widespread in tropical, subtropical, and temperate oceans worldwide. Present in deep offshore waters of the northern Indian Ocean.",
      "bn": "সারা বিশ্বের উষ্ণ ও নাতিশীতোষ্ণ সাগরে বিস্তৃত। ভারত মহাসাগরের গভীর অঞ্চলে পাওয়া যায়।"
    },
    "importantFamilies": [
      {
        "name": "Acropomatidae",
        "commonEn": "Lanternbellies",
        "commonBn": "ল্যান্টার্নবেলি গোত্র",
        "diagnosticEn": "Bioluminescent ventral light organ, forward anus, two dorsal fins; includes Acropoma.",
        "diagnosticBn": "পেটের নিচে আলো উৎপাদনকারী অঙ্গ, সামনে অবস্থিত মলদ্বার; Acropoma গণ অন্তর্ভুক্ত।"
      },
      {
        "name": "Polyprionidae",
        "commonEn": "Wreckfishes",
        "commonBn": "রেকফিশ গোত্র",
        "diagnosticEn": "Massive deep-bodied fishes, large head with rough bony ridges, weight up to 100 kg; includes Polyprion.",
        "diagnosticBn": "বিশাল বপুযুক্ত গভীর সমুদ্রের মাছ, ওজন ১০০ কেজি পর্যন্ত হতে পারে; Polyprion গণ অন্তর্ভুক্ত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Genera: Acropoma, Polyprion, Synagrops, and Lateolabrax. Key binomials: Acropoma japonicum Günther, 1859 and Polyprion americanus (Bloch & Schneider, 1801).",
      "bn": "গণ: Acropoma, Polyprion, Synagrops এবং Lateolabrax। প্রধান নাম: Acropoma japonicum Günther, 1859 এবং Polyprion americanus (Bloch & Schneider, 1801)।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Glowbelly (Acropoma japonicum), Atlantic Wreckfish (Polyprion americanus), Blackmouth Bass (Synagrops bellus), and Japanese Seabass (Lateolabrax japonicus).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: গ্লোবেলি বা ল্যান্টার্নবেলি (Acropoma japonicum), আটলান্টিক রেকফিশ (Polyprion americanus), ব্ল্যাকমাউথ বাস (Synagrops bellus) এবং জাপানি সি-বাস (Lateolabrax japonicus)।"
    },
    "additionalInformation": {
      "en": "Acropomatiformes was resurrected and formalized by Betancur-R. et al. (2013) and confirmed by Eschmeyer (2026) to unite several families previously misplaced within polyphyletic Perciformes.",
      "bn": "অতীতে পার্সিফর্মিসের মধ্যে এলোমেলোভাবে রাখা বেশ কয়েকটি পরিবারকে আধুনিক জিনতত্ত্বের ভিত্তিতে অ্যাক্রোপোমাটিফর্মিস বর্গে সুবিন্যস্ত করা হয়েছে।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Eschmeyer's Catalog of Fishes (2026); Betancur-R. et al. (2017)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-acanthuriformes",
    "taxonId": "taxon-acanthuriformes",
    "rank": "order",
    "scientificName": "Acanthuriformes",
    "bengaliName": "অ্যাকান্থুরিফর্মিস (সার্জনফিশ, র্যাবটিফিশ ও স্পেডফিশ বা পায়রা চন্দা)",
    "englishName": "Surgeonfishes, Tangs, Rabbitfishes, and Spadefishes",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিময় পাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Actinopteri",
        "nameBn": "অ্যাক্টিনোপ্টেরি"
      },
      {
        "rank": "infraclass",
        "name": "Teleostei",
        "nameBn": "টেলিয়স্ট"
      },
      {
        "rank": "order",
        "name": "Acanthuriformes",
        "nameBn": "অ্যাকান্থুরিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Laterally compressed, disc-shaped herbivorous and omnivorous marine and estuarine fishes famous for razor-sharp defensive scalpels on the tail (surgeonfishes), venomous fin spines (rabbitfishes and scats), and high ecological value.",
      "bn": "চ্যাপ্টা গোলাকার সামুদ্রিক ও মোহনাজ মাছ; যাদের লেজের গোড়ায় ক্ষুরের মতো ধারালো অস্ত্র (সার্জনফিশ), বিষাক্ত কাঁটা (র্যাবিটফিশ ও পায়রা চন্দা) এবং প্রবাল প্রাচীর সুরক্ষায় অপরিসীম গুরুত্ব রয়েছে।"
    },
    "diagnosticCharacteristics": {
      "en": "Body deep, oval or disc-like, and highly compressed laterally; small terminal mouth with specialized close-set incisiform or denticulate teeth; surgeonfishes (Acanthuridae) possess one or more razor-sharp, folding or fixed modified spine-like scalpels on each side of the caudal peduncle for defense; rabbitfishes (Siganidae) possess unique pelvic fins with two spines (one inner, one outer) enclosing three soft rays, with all spines equipped with venom glands; Spotted Scat (*Scatophagus argus*) occurs natively in Bangladesh estuaries with venomous dorsal spines.",
      "bn": "চ্যাপ্টা ডিম্বাকার বা গোল দেহ; ছোট মুখ যাতে বিশেষ সূক্ষ্ম দাঁত থাকে; সার্জনফিশদের লেজের গোড়ায় ক্ষুরের মতো ধারালো ভাঁজ করা ব্লেড বা স্ক্যালপেল থাকে যা দিয়ে আত্মরক্ষা করে; র্যাবিটফিশের প্রতিটি পাখনার কাঁটায় মারাত্মক বিষগ্রন্থি থাকে; সুন্দরবনের পরিচিত পায়রা চন্দা বা চিত্রা মাছের (Scatophagus argus) পৃষ্ঠপাখনার কাঁটায় বিষ থাকে।",
      "keyFeatures": {
        "en": [
          "Razor-sharp folding or rigid scalpel-blades on the caudal peduncle in surgeonfishes",
          "Pelvic fins with two spines enclosing three soft rays in rabbitfishes (Siganidae)",
          "Venomous spines causing painful stings in rabbitfishes and scats (Scatophagidae)",
          "Essential macroalgal grazers preventing coral reefs from being smothered by algae"
        ],
        "bn": [
          "সার্জনফিশের লেজের গোড়ায় অত্যন্ত ধারালো ক্ষুর বা ব্লেডসদৃশ কাঁটা",
          "র্যাবিটফিশে দুটি কাঁটার মাঝে তিনটি নরম রশ্মিযুক্ত বিশেষ শ্রোণীপাখনা",
          "পায়রা চন্দা ও র্যাবিটফিশের কাঁটায় তীব্র যন্ত্রণাদায়ক বিষের উপস্থিতি",
          "প্রবাল প্রাচীরের অতিরিক্ত ক্ষতিকর শৈবাল খেয়ে প্রবালকে সুস্থ রাখার মূল ভূমিকা"
        ]
      }
    },
    "habitat": {
      "en": "Tropical coral reefs, rocky coastal shallows, mangrove estuaries, tidal creeks, and inshore sandy bays.",
      "bn": "ক্রান্তীয় প্রবাল প্রাচীর, অগভীর সাগর, সুন্দরবনের ম্যানগ্রোভ খাঁড়ি ও মোহনা।",
      "systems": [
        "marine",
        "brackish"
      ]
    },
    "ecosystem": {
      "en": "The primary herbivorous guardians of coral reef health; grazing fleshy macroalgae to prevent algal phase shifts and maintain pristine coral dominance.",
      "bn": "প্রবাল প্রাচীরের প্রধান প্রহরী; অতিরিক্ত শৈবাল খেয়ে প্রবাল প্রাচীরকে ধ্বংসের হাত থেকে বাঁচিয়ে রাখে।"
    },
    "feeding": {
      "en": "Herbivores, detritivores, and omnivores. Tangs scrape turf algae and macroalgae; scats and spadefishes consume algae, detritus, and hydroids.",
      "bn": "শৈবালভোজী ও সর্বভুক; সামুদ্রিক শৈবাল, পলি ও ক্ষুদ্র জলজ প্রাণী খায়।"
    },
    "reproduction": {
      "en": "Mass broadcast spawning on reef edges during lunar cycles; transparent pelagic acronurus larvae spend weeks drifting in oceanic currents.",
      "bn": "চাঁদের তিথিতে প্রবাল প্রাচীরের কিনারায় ঝাঁক বেঁধে ডিম ছড়ায়; স্বচ্ছ অ্যাক্রোনুরাস লার্ভা সাগরে ভেসে বেড়ায়।"
    },
    "distribution": {
      "en": "Circumtropical in all warm oceans. Scatophagus argus (Spotted Scat / Chitra / Payra Chanda) and Siganus javus are native to coastal Bangladesh and the Sundarbans.",
      "bn": "সারা বিশ্বের উষ্ণ সাগরে বিস্তৃত। পায়রা চন্দা বা চিত্রা মাছ (Scatophagus argus) বাংলাদেশের সুন্দরবন ও মোহনা অঞ্চলের একটি বিখ্যাত দেশীয় মাছ।"
    },
    "importantFamilies": [
      {
        "name": "Acanthuridae",
        "commonEn": "Surgeonfishes & Tangs",
        "commonBn": "সার্জনফিশ ও ট্যাং গোত্র",
        "diagnosticEn": "Sharp folding or fixed scalpel on caudal peduncle, disc-shaped bodies; includes Acanthurus and Zebrasoma.",
        "diagnosticBn": "লেজের গোড়ায় ক্ষুরের মতো ধারালো কাঁটা; Acanthurus ও Zebrasoma গণ অন্তর্ভুক্ত।"
      },
      {
        "name": "Scatophagidae",
        "commonEn": "Scats",
        "commonBn": "পায়রা চন্দা বা স্ক্যাট গোত্র",
        "diagnosticEn": "Four-spined anal fin, compressed quadrangular body, venomous spines; includes Scatophagus.",
        "diagnosticBn": "চারটি কাঁটাযুক্ত পায়ুপাখনা, বিষাক্ত কাঁটা, চ্যাপ্টা শরীর; Scatophagus (পায়রা চন্দা) অন্তর্ভুক্ত।"
      },
      {
        "name": "Siganidae",
        "commonEn": "Rabbitfishes",
        "commonBn": "র্যাবিটফিশ গোত্র",
        "diagnosticEn": "Two pelvic spines, highly venomous fin spines, rabbit-like mouth; includes Siganus.",
        "diagnosticBn": "খরগোশের মতো মুখ, মারাত্মক বিষাক্ত কাঁটা; Siganus গণ অন্তর্ভুক্ত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Genera: Acanthurus, Scatophagus, Siganus, and Platax. Key binomials: Scatophagus argus (Linnaeus, 1766), Acanthurus triostegus (Linnaeus, 1758), and Siganus javus (Linnaeus, 1766).",
      "bn": "গণ: Acanthurus, Scatophagus, Siganus এবং Platax। প্রধান নাম: Scatophagus argus (Linnaeus, 1766), Acanthurus triostegus (Linnaeus, 1758) এবং Siganus javus (Linnaeus, 1766)।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: Spotted Scat / Payra Chanda (Scatophagus argus - native to Bangladesh), Streaked Spinefoot (Siganus javus - native to Bangladesh), Convict Surgeonfish (Acanthurus triostegus - native to Bay of Bengal), and Moorish Idol (Zanclus cornutus).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: পায়রা চন্দা বা চিত্রা (Scatophagus argus - বাংলাদেশে দেশীয় মাছ), স্ট্রিকড স্পাইনফুট (Siganus javus - সুন্দরবনে প্রাপ্ত), কনভিক্ট সার্জনফিশ (Acanthurus triostegus - সেন্টমার্টিনে প্রাপ্ত) এবং মুরিশ আইডল (Zanclus cornutus)।"
    },
    "additionalInformation": {
      "en": "Scatophagus argus (Spotted Scat or Payra Chanda) is highly esteemed both as an exquisite brackish food fish in the Sundarbans and as a premium ornamental fish in international aquarium markets.",
      "bn": "পায়রা চন্দা (Scatophagus argus) সুন্দরবনের মানুষের অত্যন্ত সুস্বাদু খাদ্য মাছ এবং আন্তর্জাতিকভাবে অত্যন্ত মূল্যবান বাহারি অ্যাকোয়ারিয়াম মাছ।"
    },
    "orders": [],
    "exampleSpeciesIds": [
      "sp-acanthurus-triostegus"
    ],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Eschmeyer's Catalog of Fishes (2026); Sorenson et al. (2013)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "order-lophiiformes",
    "taxonId": "taxon-lophiiformes",
    "rank": "order",
    "scientificName": "Lophiiformes",
    "bengaliName": "লোফিফর্মিস (অ্যাংলারফিশ বা বরশিওয়ালা মাছ, মঙ্কফিশ ও ফ্রগফিশ)",
    "englishName": "Anglerfishes, Monkfishes, Frogfishes, and Batfishes",
    "parentTaxonId": "class-actinopterygii",
    "category": "fish",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Actinopterygii",
        "nameBn": "রশ্মিময় পাখনাযুক্ত মাছ"
      },
      {
        "rank": "subclass",
        "name": "Actinopteri",
        "nameBn": "অ্যাক্টিনোপ্টেরি"
      },
      {
        "rank": "infraclass",
        "name": "Teleostei",
        "nameBn": "টেলিয়স্ট"
      },
      {
        "rank": "order",
        "name": "Lophiiformes",
        "nameBn": "লোফিফর্মিস"
      }
    ],
    "shortDescription": {
      "en": "Specialized ambush predatory marine fishes equipped with a modified first dorsal spine functioning as a fishing rod (illicium) tipped with a bait (esca), including deep-sea ceratioids with dwarf parasitic males and limb-like walking frogfishes.",
      "bn": "বিখ্যাত ছদ্মবেশী শিকারী সামুদ্রিক মাছ; যাদের মাথার উপরে মাছ ধরার ছিপ বা বরশি (illicium) এবং মাথায় জ্বলজ্বলে টোপ (esca) থাকে, গভীর সমুদ্রের অন্ধকারের বিশালাকার স্ত্রী মাছের গায়ে পরজীবী হিসেবে স্থায়ীভাবে লেগে থাকা ক্ষুদ্র পুরুষ মাছ এবং পাখনার উপর ভর দিয়ে হাঁটা ফ্রগফিশ এর অন্তর্ভুক্ত।"
    },
    "diagnosticCharacteristics": {
      "en": "First spine of dorsal fin modified into an illicium ('fishing rod') placed on snout, terminating in a fleshy or bioluminescent bait called the esca; pectoral fins limb-like with elongate radials used for crawling along the seafloor in Antennariidae and Ogcocephalidae; gill openings restricted to small circular pores behind pectoral fins; deep-sea ceratioid anglerfishes display extreme sexual dimorphism where miniature dwarf males fuse permanently into the body and circulatory system of the large female as sexual parasites.",
      "bn": "মাথার সামনের প্রথম পৃষ্ঠ কাঁটাটি মাছ ধরার ছিপে (ইলিসিয়াম) রূপান্তরিত যার ডগায় জীবন্ত কৃমি বা জ্বলজ্বলে আলোর টোপ (এসকা) থাকে; বক্ষপাখনা হাতের মতো বাঁকানো যা দিয়ে তলদেশে হেঁটে চলতে পারে; ফুলকা ছিদ্র বক্ষপাখনার পেছনে ছোট নলের মতো ছিদ্রের আকারে থাকে; গভীর সমুদ্রের সেরাসিওয়েড মাছে পুরুষ মাছ স্ত্রী মাছের চেয়ে বহুগুণ ছোট হয় এবং স্ত্রী মাছের ত্বকে কামড়ে ধরে আজীবনের জন্য স্ত্রী মাছের রক্তনালীর সাথে স্থায়ীভাবে জোড়া লেগে যায়।",
      "keyFeatures": {
        "en": [
          "Fishing apparatus (illicium and esca) derived from modified first dorsal spine",
          "Extreme sexual parasitism where dwarf males fuse permanently into the female's bloodstream",
          "Arm-like pectoral fins used for crawling on benthic substrates in frogfishes and batfishes",
          "Symbiotic bioluminescent bacteria residing inside the glowing esca bait"
        ],
        "bn": [
          "প্রথম পৃষ্ঠ কাঁটা থেকে রূপান্তরিত মাছ ধরার ছিপ ও জ্বলজ্বলে টোপ",
          "ক্ষুদ্র পুরুষ মাছের স্ত্রী মাছের শরীরে স্থায়ীভাবে মিশে গিয়ে রক্ত সংবহন ভাগ করার চরম পরজীবী জীবন",
          "ফ্রগফিশ ও ব্যাটফিশে তলদেশে ডাঙ্গার মতো হেঁটে চলার জন্য বাহুসদৃশ পাখনা",
          "টোপের ভেতরে আলো উৎপাদনকারী বিশেষ মিথোজীবী ব্যাক্টেরিয়া"
        ]
      }
    },
    "habitat": {
      "en": "All oceanic depths from shallow coastal coral reefs and kelp beds down to abyssal ocean basins exceeding 4,000 meters depth.",
      "bn": "উপকূলীয় অগভীর প্রবাল প্রাচীর থেকে শুরু করে ৪,০০০ মিটারেরও বেশি অতল গভীর সমুদ্রের খাদ।",
      "systems": [
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Master ambush predators in energy-poor bathypelagic waters and coral reef drop-offs, capturing prey attracted to their deceptive lures.",
      "bn": "গভীর সমুদ্র ও প্রাচীরের চরম শিকারী; ছিপের আলো ও টোপের ফাঁদে ফেলে শিকার ধরে।"
    },
    "feeding": {
      "en": "Voracious visual and luring carnivores. Expanding jaws and elastic stomachs enable anglerfishes to swallow prey up to twice their own body size.",
      "bn": "মাংসাশী; মুখগহ্বর ও রাবারের মতো প্রসারণক্ষম পাকস্থলী দিয়ে নিজের শরীরের চেয়ে দ্বিগুণ বড় শিকার অনায়াসে গিলে ফেলে।"
    },
    "reproduction": {
      "en": "Pelagic spawning: females release enormous floating gelatinous egg veils (mucoid rafts up to 10 meters long and 1 meter wide); deep-sea ceratioid males fuse permanently via tissue anastomosis, losing their eyes and digestive systems to become permanent sperm donors.",
      "bn": "স্ত্রী মাছ সাগরে ১০ মিটার পর্যন্ত দীর্ঘ ভাসমান মিউকাসের ডিমের চাদর ছড়ায়; গভীর সমুদ্রের পুরুষ মাছ স্ত্রী মাছকে খুঁজে কামড়ে ধরে রক্তনালীর সাথে একীভূত হয়ে যায়।"
    },
    "distribution": {
      "en": "Worldwide in all tropical, subtropical, temperate, and polar oceans. Found in deep waters of the Bay of Bengal and continental shelf edges.",
      "bn": "সারা বিশ্বের সকল মহাসাগরের গভীর অঞ্চলে বিস্তৃত। বঙ্গোপসাগরের গভীর খাদে এদের উপস্থিতি নথিবদ্ধ।"
    },
    "importantFamilies": [
      {
        "name": "Lophiidae",
        "commonEn": "Monkfishes / Goosefishes",
        "commonBn": "মঙ্কফিশ গোত্র",
        "diagnosticEn": "Depressed head, huge mouth with sharp teeth, highly commercial culinary fish in North Atlantic; includes Lophius.",
        "diagnosticBn": "চ্যাপ্টা মাথা, বড় হাঁ, অত্যন্ত সুস্বাদু খাদ্য মাছ; Lophius গণ অন্তর্ভুক্ত।"
      },
      {
        "name": "Antennariidae",
        "commonEn": "Frogfishes",
        "commonBn": "ফ্রগফিশ গোত্র",
        "diagnosticEn": "Globular camouflaged bodies, limb-like fins used for walking on reefs, rapid suction strike; includes Antennarius.",
        "diagnosticBn": "ব্যাঙের মতো গোল শরীর, প্রবাল প্রাচীরে হেঁটে চলা মাছ; Antennarius গণ অন্তর্ভুক্ত।"
      },
      {
        "name": "Melanocetidae",
        "commonEn": "Black Seadevils",
        "commonBn": "ব্ল্যাক সি-ডেভিল গোত্র",
        "diagnosticEn": "Deep-sea bathypelagic anglerfishes with glowing esca, gigantic translucent fangs; includes Melanocetus.",
        "diagnosticBn": "গভীর সাগরের জ্বলজ্বলে টোপযুক্ত কালো ড্রাগনমাথা মাছ; Melanocetus গণ অন্তর্ভুক্ত।"
      }
    ],
    "scientificNamesSummary": {
      "en": "Genera: Lophius, Antennarius, Melanocetus, and Ogcocephalus. Key binomials: Lophius piscatorius Linnaeus, 1758 and Melanocetus johnsonii Günther, 1864.",
      "bn": "গণ: Lophius, Antennarius, Melanocetus এবং Ogcocephalus। প্রধান নাম: Lophius piscatorius Linnaeus, 1758 এবং Melanocetus johnsonii Günther, 1864।"
    },
    "examplesSummary": {
      "en": "Four verified representative examples: European Monkfish (Lophius piscatorius), Humpback Anglerfish (Melanocetus johnsonii), Striated Frogfish (Antennarius striatus), and Shortnose Batfish (Ogcocephalus nasutus).",
      "bn": "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: ইউরোপীয় মঙ্কফিশ (Lophius piscatorius), কুঁজো অ্যাংলারফিশ (Melanocetus johnsonii), স্ট্রায়েটেড ফ্রগফিশ (Antennarius striatus) এবং শর্টনোজ ব্যাটফিশ (Ogcocephalus nasutus)।"
    },
    "additionalInformation": {
      "en": "The sexual parasitism of ceratioid anglerfishes represents the only known natural tissue fusion between different individual vertebrates without immune rejection, serving as an active medical model in transplant immunology.",
      "bn": "অ্যাংলারফিশের পুরুষ ও স্ত্রী মাছের স্থায়ী অঙ্গ-সংযোজন চিকিৎসা বিজ্ঞানে মানবদেহে অঙ্গ প্রতিস্থাপনে অনাক্রম্যতার প্রত্যাখ্যান রোধ গবেষণায় এক অনন্য প্রাকৃতিক মডেল।"
    },
    "orders": [],
    "exampleSpeciesIds": [],
    "referenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "authoritySource": "Nelson et al. (2016) Fishes of the World (5th ed.); Pietsch (2009)",
    "verificationStatus": "published",
    "publishedStatus": true
  },
  {
    "id": "class-amphibia",
    "taxonId": "taxon-amphibia",
    "rank": "class",
    "scientificName": "Amphibia",
    "bengaliName": "উভচর প্রাণী (অ্যাম্ফিবিয়া)",
    "englishName": "Amphibians / Amphibia",
    "parentTaxonId": "taxon-chordata",
    "category": "general",
    "canonicalSlug": "amphibia",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Amphibia",
        "nameBn": "উভচর প্রাণী"
      }
    ],
    "shortDescription": {
      "en": "Ectothermic anamniote tetrapods characterized by glandular moist permeable skin, three-chambered hearts, and typically a biphasic life cycle spanning aquatic gilled larvae and terrestrial lung-breathing adults.",
      "bn": "শীতলরক্তের অনঅ্যামনিওটিক টেট্রাপড মেরুদণ্ডী প্রাণী যাদের ত্বক আর্দ্র ও গ্রন্থিময়, হৃদপিণ্ড তিন প্রকোষ্ঠযুক্ত এবং সাধারণত জলজ ফুলকাযুক্ত লার্ভা ও ডাঙ্গার ফুসফুসধারী পূর্ণাঙ্গ রূপের দ্বি-পর্যায়ের জীবনচক্র থাকে।"
    },
    "diagnosticCharacteristics": {
      "en": "Poikilothermic tetrapods with moist glandular integument devoid of epidermal scales; cutaneous gas exchange alongside pulmonary respiration; three-chambered heart (two atria, one ventricle); non-cleidoic gelatinous eggs lacking amnion; biphasic life history with complete metamorphosis.",
      "bn": "আঁইশবিহীন আর্দ্র ত্বকযুক্ত শীতলরক্তের টেট্রাপড; ত্বকের সাহায্যে শ্বাসকার্য পরিচালনা; তিন-প্রকোষ্ঠবিশিষ্ট হৃদপিণ্ড; খোসাহীন জেলিময় ডিম্ব এবং রূপান্তরের মাধ্যমে জলজ লার্ভা থেকে ডাঙ্গার পূর্ণাঙ্গ প্রাণীতে বিকাশ।",
      "keyFeatures": {
        "en": [
          "Moist, permeable skin functioning as primary or auxiliary respiratory surface",
          "Three-chambered heart with complete atrial separation and single muscular ventricle",
          "Anamniote gelatinous eggs requiring moisture or standing aquatic pools",
          "Biphasic life history with aquatic herbivorous tadpole and terrestrial carnivorous adult"
        ],
        "bn": [
          "আর্দ্র ও ভেদ্য ত্বক যা প্রধান বা সম্পূরক শ্বাসযন্ত্র হিসেবে কাজ করে",
          "দুটি অলিন্দ ও একটি নিলয়যুক্ত তিন-প্রকোষ্ঠবিশিষ্ট হৃদপিণ্ড",
          "অ্যামনিয়নবিহীন জেলিমুক্ত ডিম যা আর্দ্র পরিবেশের ওপর নির্ভরশীল",
          "জলজ তৃণভোজী ব্যাঙাচি থেকে রূপান্তরের মাধ্যমে ডাঙ্গার শিকারী পূর্ণাঙ্গ রূপ"
        ]
      }
    },
    "habitat": {
      "en": "Freshwater wetlands, haors, ponds, moist forest floors, and river banks. Absent from strictly marine hypersaline environments.",
      "bn": "মিঠাপানির জলাভূমি, হাওর-বিল, পুকুর, আর্দ্র বনভূমি ও নদীর তীর। লবণাক্ত সামুদ্রিক পরিবেশে অনুপস্থিত।",
      "systems": [
        "freshwater"
      ]
    },
    "ecosystem": {
      "en": "Crucial intermediate mesocarnivores regulating insect, mosquito, and agricultural pest populations while serving as vital prey for birds, reptiles, and mammals.",
      "bn": "কীটপতঙ্গ ও মশার লার্ভা দমনে এবং সাপ, পাখি ও স্তন্যপায়ীদের প্রধান খাদ্য হিসেবে বাস্তুতন্ত্রের গুরুত্বপূর্ণ স্তম্ভ।"
    },
    "feeding": {
      "en": "Adults are carnivorous ambush predators feeding on insects, worms, and small vertebrates via sticky projectile tongue. Larvae are mostly microphagous or herbivorous filter feeders.",
      "bn": "পূর্ণাঙ্গ উভচররা মাংসাশী শিকারী যারা আঠালো জিহ্বার সাহায্যে পোকামাকড় শিকার করে। ব্যাঙাচিরা শৈবাল ও জলজ কণা খায়।"
    },
    "reproduction": {
      "en": "External fertilization (amplexus in anurans); lay gelatinous clusters of eggs in water; development proceeds via free-swimming aquatic tadpoles undergoing dramatic thyroxine-mediated metamorphosis.",
      "bn": "বহিঃনিষেক (অ্যামপ্লেক্সাস); জলে জেলির মতো স্তূপে ডিম পাড়ে; থাইরক্সিন হরমোনের প্রভাবে ব্যাঙাচি রূপান্তরের মাধ্যমে লেজ ও ফুলকা হারিয়ে চার পা ও ফুসফুস বিশিষ্ট পূর্ণাঙ্গ ব্যাঙে রূপ নেয়।"
    },
    "distribution": {
      "en": "Global across tropical, subtropical, and temperate landmasses. In Bangladesh, over 50 native amphibian species occur across wetlands and forests.",
      "bn": "মেরু ও চরম মরু অঞ্চল ছাড়া বিশ্বব্যাপী বিস্তৃত। বাংলাদেশে ৫০টিরও বেশি দেশীয় উভচর প্রজাতি জলাভূমি ও বনে বাস করে।"
    },
    "importantFamilies": [
      {
        "name": "Dicroglossidae",
        "commonEn": "Fork-tongued Frogs",
        "commonBn": "কোলা ব্যাঙ",
        "diagnosticEn": "Large semi-aquatic frogs with muscular hind legs (e.g. Hoplobatrachus tigerinus)."
      },
      {
        "name": "Bufonidae",
        "commonEn": "True Toads",
        "commonBn": "কুনো ব্যাঙ",
        "diagnosticEn": "Warty terrestrial amphibians with prominent parotoid poison glands (e.g. Duttaphrynus melanostictus)."
      },
      {
        "name": "Rhacophoridae",
        "commonEn": "Shrub & Tree Frogs",
        "commonBn": "গেছো ব্যাঙ",
        "diagnosticEn": "Arboreal frogs equipped with enlarged adhesive toe pads for climbing vegetation."
      }
    ],
    "scientificNamesSummary": {
      "en": "Class Amphibia Blainville, 1816; comprising orders Anura (frogs and toads), Caudata/Urodela (salamanders), and Gymnophiona/Apoda (caecilians).",
      "bn": "শ্রেণী অ্যাম্ফিবিয়া Blainville, 1816; যার অন্তর্গত তিনটি বর্গ: অনুরা (ব্যাঙ), কডাটা (সালামান্ডার), এবং জিমনোফিওনা (অন্ধ কীট বা সিসিলিয়ান)।"
    },
    "exampleSpeciesIds": [
      "sp-ambystoma-mexicanum",
      "sp-dendrobates-tinctorius",
      "sp-bufo-bufo",
      "sp-hoplobatrachus-tigerinus",
      "sp-salamandra-salamandra",
      "sp-ichthyophis-bannanicus"
    ],
    "examplesSummary": {
      "en": "Representative global and Bangladesh taxa include the Indian Bullfrog (Hoplobatrachus tigerinus), Asian Common Toad (Duttaphrynus melanostictus), Spotted Tree Frog (Polypedates teraiensis), and Fire Salamander (Salamandra salamandra).",
      "bn": "প্রতিনিধি প্রজাতি: ভারতীয় কোলা ব্যাঙ (Hoplobatrachus tigerinus), সাধারণ কুনো ব্যাঙ (Duttaphrynus melanostictus), গেছো ব্যাঙ (Polypedates) এবং ফায়ার সালামান্ডার।"
    },
    "additionalInformation": {
      "en": "Amphibians are critical global bioindicators of environmental health due to permeable skin sensitive to pollutants, acid precipitation, and the pandemic fungal pathogen Batrachochytrium dendrobatidis (chytridiomycosis).",
      "bn": "উভচর প্রাণীরা তাদের ভেদ্য ত্বকের কারণে দূষণ ও জলবায়ু পরিবর্তনের অত্যন্ত সংবেদনশীল বায়ো-ইন্ডিকেটর। কাইট্রিডিওমাইকোসিস ছত্রাক বিশ্বজুড়ে এদের জন্য মারাত্মক হুমকি।"
    },
    "referenceIds": [
      "ref-amphibiaweb-2026",
      "ref-hickman-2020",
      "ref-kardong-2018"
    ],
    "authoritySource": "AmphibiaWeb (2026) / Frost (2026) Amphibian Species of the World",
    "verificationStatus": "published",
    "publishedStatus": true,
    "sections": [
      {
        "key": "water_to_land",
        "titleEn": "1. The Water-to-Land Evolutionary Transition",
        "titleBn": "১. জল থেকে ডাঙ্গায় বিবর্তনীয় উত্তরণ",
        "order": 1,
        "contentEn": "Amphibians represent the initial vertebrate radiation onto land during the Late Devonian (~375 million years ago), descending from sarcopterygian lobe-finned rhipidistian fishes like Tiktaalik and Acanthostega. They adapted paired fins into weight-bearing pentadactyl limbs while remaining dependent upon freshwater for reproduction.",
        "contentBn": "উভচর প্রাণীরা লেট ডেভোনিয়ান যুগে (~৩৭৫ মিলিয়ন বছর আগে) মাংসল পাখনাযুক্ত সারকোপ্টেরিগিয়ান মাছ (যেমন টিকটালিক) থেকে উদ্ভূত হয়ে প্রথম মেরুদণ্ডী হিসেবে ডাঙ্গায় পা রাখে। তারা পাখনাকে হাঁটার উপযোগী চার পায়ে রূপান্তরিত করে, যদিও প্রজননের জন্য তারা জলের ওপর নির্ভরশীল থেকে যায়।",
        "references": [
          "ref-kardong-2018"
        ]
      },
      {
        "key": "cutaneous_respiration",
        "titleEn": "2. Glandular Moist Skin & Respiration Modes",
        "titleBn": "২. আর্দ্র গ্রন্থিময় ত্বক ও চার ধরনের শ্বাসকার্য",
        "order": 2,
        "contentEn": "Amphibians employ four distinct respiratory mechanisms: 1. Cutaneous respiration across a densely vascularized, mucous-coated epidermis; 2. Buccopharyngeal pumping forcing air into simple sac-like lungs via positive pressure; 3. Branchial gills in aquatic larvae; 4. Total lung loss in plethodontid salamanders relying 100% on skin exchange.",
        "contentBn": "উভচরে চার ধরনের শ্বাসকার্য দেখা যায়: ১. ত্বকীয় শ্বাসকার্য (ত্বকের রক্তজালিকার মাধ্যমে ব্যাপন); ২. মুখগলবিলীয় ও ফুসফুসীয় শ্বাসকার্য (ধনাত্মক চাপে বাতাস ফুসফুসে প্রবেশ করানো); ৩. লার্ভা দশায় বহিঃফুলকা; ৪. কোনো কোনো সালামান্ডারে ফুসফুস সম্পূর্ণ অনুপস্থিত থাকায় ১০০% ত্বক দিয়ে শ্বাসকার্য চলে।",
        "references": [
          "ref-hickman-2020"
        ]
      },
      {
        "key": "circulatory_system",
        "titleEn": "3. Three-Chambered Heart & Double Circulation",
        "titleBn": "৩. তিন প্রকোষ্ঠযুক্ত হৃদপিণ্ড ও দ্বৈত সংবহন",
        "order": 3,
        "contentEn": "The amphibian heart comprises three chambers: left atrium receiving oxygenated blood from lungs/skin, right atrium receiving deoxygenated systemic blood, and a single muscular ventricle. A specialized spiral valve in the conus arteriosus partially separates oxygenated and deoxygenated streams, directing oxygen-rich blood to the carotid arteries.",
        "contentBn": "উভচরের হৃদপিণ্ডে দুটি অলিন্দ এবং একটি নিলয় থাকে। বাম অলিন্দ ফুসফুস ও ত্বক থেকে অক্সিজেনযুক্ত রক্ত এবং ডান অলিন্দ দেহ থেকে রক্ত গ্রহণ করে। কোনাস আর্টারিওসাসের স্পাইরাল ভালভ অক্সিজেনযুক্ত রক্তকে মস্তিষ্কে এবং কম অক্সিজেনযুক্ত রক্তকে ফুসফুস ও ত্বকে প্রবাহিত হতে সাহায্য করে।",
        "references": [
          "ref-kardong-2018"
        ]
      },
      {
        "key": "metamorphosis",
        "titleEn": "4. Biphasic Life Cycle & Thyroxine-Mediated Metamorphosis",
        "titleBn": "৪. দ্বি-পর্যায়ের জীবন চক্র ও থাইরক্সিন নিয়ন্ত্রিত রূপান্তর",
        "order": 4,
        "contentEn": "Anuran metamorphosis is an extraordinary hormonal cascade triggered by thyroid hormones (T3 and T4). Aquatic herbivorous tadpoles with branchial gills, lateral lines, and a muscular swimming tail completely resorb their tail and gills, develop lungs, grow pentadactyl limbs, remodel their short intestine for a carnivorous diet, and develop tympanic ears for airborne sound.",
        "contentBn": "থাইরয়েড হরমোনের (T3 ও T4) প্রভাবে ব্যাঙাচিতে নাটকীয় রূপান্তর ঘটে। জলজ ফুলকাযুক্ত লেজধারী ব্যাঙাচি নিজের লেজ ও ফুলকা পুনঃশোষণ করে ফুসফুস ও চার পা বিশিষ্ট হয়ে ডাঙ্গায় উঠে আসে এবং ক্ষুদ্রান্ত্র পুনর্বিন্যস্ত করে মাংসাশী খাবারে অভ্যস্ত হয়।",
        "references": [
          "ref-hickman-2020"
        ]
      },
      {
        "key": "orders_conservation",
        "titleEn": "5. Major Orders & Global Amphibian Conservation Crisis",
        "titleBn": "৫. প্রধান বর্গসমূহ ও উভচর সংরক্ষণ সংকট",
        "order": 5,
        "contentEn": "Three living orders: Anura (frogs and toads, tailless adults with saltatorial hindlimbs); Caudata / Urodela (salamanders and newts, retaining post-anal tail and equal limbs); Gymnophiona / Apoda (limbless burrowing caecilians). Amphibians face catastrophic global declines from habitat loss, pesticides, and the deadly chytrid fungal disease Batrachochytrium dendrobatidis.",
        "contentBn": "বিদ্যমান তিনটি বর্গ: অনুরা (ব্যাঙ—লেজহীন ও লাফানোর উপযোগী পা), কডাটা (সালামান্ডার—লেজযুক্ত), এবং জিমনোফিওনা (পা-বিহীন ভূগর্ভস্থ কেঁচোর মতো উভচর)। বিশ্বজুড়ে বাসস্থান ধ্বংস ও কাইট্রিড ছত্রাকজনিত রোগের কারণে উভচররা চরম বিলুপ্তির সংকটে রয়েছে।",
        "references": [
          "ref-amphibiaweb-2026",
          "ref-iucn-global-2024"
        ]
      }
    ]
  },
  {
    "id": "class-reptilia",
    "taxonId": "taxon-reptilia",
    "rank": "class",
    "scientificName": "Reptilia",
    "bengaliName": "সরীসৃপ প্রাণী (রেপটিলিয়া)",
    "englishName": "Reptiles / Reptilia",
    "parentTaxonId": "taxon-chordata",
    "category": "general",
    "canonicalSlug": "reptilia",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Reptilia",
        "nameBn": "সরীসৃপ প্রাণী"
      }
    ],
    "shortDescription": {
      "en": "Ectothermic amniotes characterized by dry keratinized epidermal scales, pulmonary respiration via thoracic ribs, internal fertilization, and shelled cleidoic eggs that liberated vertebrates from aquatic breeding constraints.",
      "bn": "শুষ্ক কাইটিনযুক্ত আঁইশধারী শীতলরক্তের অ্যামনিওট মেরুদণ্ডী প্রাণী, যারা ফুসফুসের সাহায্যে শ্বাস নেয়, অভ্যন্তরীণ নিষেকের মাধ্যমে খোসাযুক্ত ডিম পাড়ে এবং প্রজননের জন্য সম্পূর্ণ ডাঙ্গার ওপর নির্ভরশীল।"
    },
    "diagnosticCharacteristics": {
      "en": "Poikilothermic amniotes with skin covered in beta-keratin epidermal scales or scutes; absence of cutaneous respiration; pulmonary negative-pressure ventilation; incompletely divided or fully 4-chambered heart (Crocodilia); metanephric kidneys producing uric acid paste; cleidoic eggs with amnion, chorion, allantois, and yolk sac.",
      "bn": "শুষ্ক কেরাটিনময় আঁইশে আবৃত দেহ; ত্বকীয় শ্বাসকার্যের অনুপস্থিতি; পাঁজর দিয়ে প্রসারিত ফুসফুসীয় শ্বাসকার্য; আংশিক বিভক্ত বা চার-প্রকোষ্ঠবিশিষ্ট হৃদপিণ্ড; ইউরিক অ্যাসিড নির্গমনকারী মেটানেফ্রিক বৃক্ক; ভ্রূণীয় পর্দা (অ্যামনিয়ন, কোরিয়ন, অ্যালানটয়েস) যুক্ত শক্ত খোসাবিশিষ্ট ডিম।",
      "keyFeatures": {
        "en": [
          "Amniotic egg with extraembryonic membranes eliminating aquatic larval stage",
          "Waterproof integument of beta-keratin scales preventing cutaneous desiccation",
          "Uricotelic excretion conserving water as semi-solid uric acid paste",
          "Negative-pressure pulmonary respiration powered by thoracic costal ribs"
        ],
        "bn": [
          "অ্যামনিওটিক খোসাযুক্ত ডিম যার ফলে জলজ লার্ভা দশার অবসান ঘটে",
          "পানিনিরোধী কেরাটিন আঁইশযুক্ত ত্বক যা জলীয় বাষ্পীভবন রোধ করে",
          "ইউরিকোটেলিক রেচন যা আধা-কঠিন ইউরিক অ্যাসিড হিসেবে জল সংরক্ষণ করে",
          "পাঁজরের পেশির মাধ্যমে ঋণাত্মক চাপে ফুসফুসীয় শ্বাসকার্য"
        ]
      }
    },
    "habitat": {
      "en": "Terrestrial deserts, tropical rainforests, freshwater rivers, haors, coastal mangroves, and open pelagic oceans.",
      "bn": "মরুভূমি, রেইনফরেস্ট, নদী-নালা, হাওর, সুন্দরবনের মোহনা এবং উন্মুক্ত সমুদ্র।",
      "systems": [
        "marine",
        "freshwater"
      ]
    },
    "ecosystem": {
      "en": "Apex and mesopredators regulating rodent, fish, bird, and invertebrate populations. Marine turtles graze seagrass meadows and jellyfish swarms.",
      "bn": "বাস্তুতন্ত্রের শীর্ষ শিকারী হিসেবে ইঁদুর ও অন্যান্য ক্ষতিকর প্রাণী দমন করে। সামুদ্রিক কাছিম সীগ্রাস বিছানা পরিষ্কার রাখে ও জেলিফিশ নিয়ন্ত্রণ করে।"
    },
    "feeding": {
      "en": "Predominantly carnivorous, ranging from active pursuit hunters (snakes, monitors) to crushing predators (crocodilians) and herbivorous sea turtles (Chelonia mydas).",
      "bn": "অধিকাংশই মাংসাশী ও শিকারী (সাপ, গুইসাপ, কুমির); কিছু প্রজাতি যেমন সবুজ সামুদ্রিক কাছিম তৃণভোজী।"
    },
    "reproduction": {
      "en": "Internal fertilization via copulatory organs (hemipenes in Squamata, single phallus in turtles/crocodilians); oviparity with leathery or calcified shells; temperature-dependent sex determination (TSD) widespread.",
      "bn": "অভ্যন্তরীণ নিষেক; শক্ত চামড়ার মতো বা চুনযুক্ত খোসাবিশিষ্ট ডিম্বপ্রসব; অধিকাংশ সরীসৃপে ডিম ফোটার তাপমাত্রার ওপর পুরুষ বা স্ত্রী লিঙ্গ নির্ধারিত হয় (TSD)।"
    },
    "distribution": {
      "en": "Cosmopolitan across tropical and warm-temperate latitudes globally. In Bangladesh, over 130 reptile species inhabit terrestrial and marine waters.",
      "bn": "বিশ্বব্যাপী উষ্ণ ও ক্রান্তীয় অঞ্চলে বিস্তৃত। বাংলাদেশে সুন্দরবন ও বঙ্গোপসাগরসহ ১৩০টিরও বেশি প্রজাতির সরীসৃপ বাস করে।"
    },
    "importantFamilies": [
      {
        "name": "Cheloniidae",
        "commonEn": "Hard-shelled Sea Turtles",
        "commonBn": "সামুদ্রিক কাছিম",
        "diagnosticEn": "Marine turtles with streamlined bony carapaces and paddle flippers (e.g. Chelonia mydas, Lepidochelys olivacea)."
      },
      {
        "name": "Elapidae",
        "commonEn": "Cobras, Kraits & Sea Snakes",
        "commonBn": "গোখরা ও সামুদ্রিক সাপ",
        "diagnosticEn": "Venomous front-fanged snakes including pelagic sea snakes (Hydrophis platurus) and king cobras."
      },
      {
        "name": "Varanidae",
        "commonEn": "Monitor Lizards",
        "commonBn": "গুইসাপ",
        "diagnosticEn": "Large predatory lizards with forked tongues and strong claws (e.g. Varanus salvator)."
      },
      {
        "name": "Crocodylidae",
        "commonEn": "True Crocodiles",
        "commonBn": "কুমির",
        "diagnosticEn": "Large semi-aquatic apex predators with 4-chambered hearts (e.g. Crocodylus porosus)."
      }
    ],
    "scientificNamesSummary": {
      "en": "Class Reptilia Laurenti, 1768; traditionally comprising Testudines (turtles), Squamata (lizards and snakes), Crocodilia (crocodilians), and Rhynchocephalia (tuatara). Cladistically ancestral to Aves.",
      "bn": "শ্রেণী রেপটিলিয়া Laurenti, 1768; প্রধান চার বর্গ: টেস্টুডিনস (কাছিম), স্কোয়ামাটা (সাপ ও টিকটিকি), ক্রোকোডিলিয়া (কুমির), এবং রাইঙ্কোসেফালিয়া (টুয়াটারা)। ক্ল্যাডিস্টিক্যালি পাখিরা সরীসৃপ থেকেই উদ্ভূত।"
    },
    "exampleSpeciesIds": [
      "sp-crocodylus-porosus",
      "sp-gavialis-gangeticus",
      "sp-naja-naja",
      "sp-chamaeleo-calyptratus",
      "sp-chelonia-mydas",
      "sp-lepidochelys-olivacea",
      "sp-hydrophis-platurus",
      "sp-chelonoidis-niger",
      "sp-varanus-komodoensis",
      "sp-ophiophagus-hannah",
      "sp-sphenodon-punctatus"
    ],
    "examplesSummary": {
      "en": "Verified canonical species include the Green Sea Turtle (Chelonia mydas), Olive Ridley Sea Turtle (Lepidochelys olivacea), and Yellow-bellied Sea Snake (Hydrophis platurus).",
      "bn": "বায়োটাএলিটে যাচাইকৃত প্রজাতি: সবুজ সামুদ্রিক কাছিম (Chelonia mydas), জলপাইরঙা কাছিম (Lepidochelys olivacea), এবং হলুদপেট সামুদ্রিক সাপ (Hydrophis platurus)।"
    },
    "additionalInformation": {
      "en": "Marine turtles and crocodilians face intense anthropogenic pressure from coastal trawling, poaching, and beach incubation temperature disruption under global warming.",
      "bn": "উপকূলীয় ট্রলিং, ডিম পাড়ার সৈকত ধ্বংস এবং বৈশ্বিক উষ্ণায়নে তাপমাত্রাজনিত লিঙ্গ বৈষম্যের কারণে সামুদ্রিক সরীসৃপরা চরম ঝুঁকিতে রয়েছে।"
    },
    "referenceIds": [
      "ref-rhodin-2021",
      "ref-worms-2024",
      "ref-kardong-2018"
    ],
    "authoritySource": "The Reptile Database (2026) / Uetz et al. / WoRMS (2026)",
    "verificationStatus": "published",
    "publishedStatus": true,
    "sections": [
      {
        "key": "amniotic_revolution",
        "titleEn": "1. The Amniotic Egg: Terrestrial Conquest",
        "titleBn": "১. অ্যামনিওটিক ডিম্ব: ডাঙ্গা বিজয়ের বৈপ্লবিক উদ্ভাবন",
        "order": 1,
        "contentEn": "The evolution of the cleidoic amniotic egg was the defining milestone freeing tetrapods from water. Inside a porous protective shell, four extraembryonic membranes nurture the embryo: 1. Amnion (enclosing amniotic fluid cushion); 2. Allantois (storing toxic uric acid and mediating gas exchange); 3. Chorion (outer gas exchange membrane); 4. Yolk sac (delivering nutrient-dense yolk).",
        "contentBn": "অ্যামনিওটিক ডিম্ব সরীসৃপদের জল থেকে সম্পূর্ণ মুক্তি দেয়। খোসার ভেতরে চারটি ভ্রূণীয় পর্দা ভ্রূণকে রক্ষা করে: অ্যামনিয়ন (তরল কুশন), অ্যালানটয়েস (বর্জ্য ধারণ ও গ্যাস বিনিময়), কোরিয়ন (বহিস্থ গ্যাস বিনিময়), এবং কুসুম থলি (পুষ্টি সরবরাহ)।",
        "references": [
          "ref-kardong-2018"
        ]
      },
      {
        "key": "integument_waterproofing",
        "titleEn": "2. Keratinized Integument & Water-Conserving Excretion",
        "titleBn": "২. কেরাটিনযুক্ত ত্বক ও জল সংরক্ষণকারী রেচন",
        "order": 2,
        "contentEn": "Reptilian skin is covered in dense beta-keratin epidermal scales and scutes secreted by the epidermis, completely eliminating cutaneous water loss. To conserve water in arid habitats, reptiles produce metanephric urine dominated by insoluble, non-toxic uric acid, eliminated as a white semi-solid paste with near-total water resorption in the cloaca.",
        "contentBn": "সরীসৃপের ত্বক বিটা-কেরাটিন আঁইশ দ্বারা আবৃত থাকায় দেহ থেকে কোনো জল বাষ্পীভূত হতে পারে না। এরা জলের অপচয় রোধ করতে তরল মূত্রের বদলে সাদা পেস্টের মতো অদ্রবণীয় ইউরিক অ্যাসিড ত্যাগ করে।",
        "references": [
          "ref-hickman-2020"
        ]
      },
      {
        "key": "cardiovascular_croc",
        "titleEn": "3. Cardiovascular Architecture & Shunting Mechanisms",
        "titleBn": "৩. সংবহন কাঠামো ও ক্রোকোডিলিয়ান হৃদপিণ্ড",
        "order": 3,
        "contentEn": "Non-avian reptiles exhibit an incompletely divided three-chambered heart with an interventricular septum (cavum venosum, cavum arteriosum, cavum pulmonale) that allows intracardiac blood shunting during prolonged underwater diving. Crocodilians evolved a complete four-chambered heart with a specialized vascular connection—the Foramen of Panizza—permitting controlled right-to-left shunts during deep submersion.",
        "contentBn": "অধিকাংশ সরীসৃপে নিলয়ে আংশিক পর্দা থাকে যা ডুব দেওয়ার সময় রক্ত সঞ্চালনে সাহায্য করে। কুমিরে সম্পূর্ণ চার-প্রকোষ্ঠবিশিষ্ট হৃদপিণ্ড এবং ফোরামেন অব প্যানিজা (Foramen of Panizza) নামক বিশেষ রক্তনালী সংযোগ থাকে যা দীর্ঘক্ষণ পানির নিচে থাকার সময় পালমোনারি রক্তপ্রবাহ হ্রাস করে।",
        "references": [
          "ref-kardong-2018"
        ]
      },
      {
        "key": "sensory_tsd",
        "titleEn": "4. Specialized Sensory Organs & Temperature-Dependent Sex Determination",
        "titleBn": "৪. বিশেষ সংবেদী অঙ্গ ও তাপমাত্রা-নির্ভর লিঙ্গ নির্ধারণ (TSD)",
        "order": 4,
        "contentEn": "Reptiles possess specialized sensory receptors: Jacobson's (vomeronasal) organ in snakes and monitors samples airborne scent molecules flicked by the bifid tongue; infrared loreal pit organs in pit vipers detect warm-blooded prey in darkness. In sea turtles and crocodilians, incubation nest temperature determines hatchling sex (e.g. warmer temperatures yield females in turtles).",
        "contentBn": "সাপ ও গুইসাপে জ্যাকবসন অঙ্গ (Jacobson's Organ) চেরা জিহ্বা দিয়ে বাতাসের গন্ধের অণু শনাক্ত করে; পিট-ভাইপারে ইনফ্রারেড পিট থাকে যা অন্ধকারে উষ্ণ রক্তের শিকারের উত্তাপ শনাক্ত করে। এছাড়া কাছিম ও কুমিরের ডিমের লিঙ্গ নির্ভর করে বালির তাপমাত্রার ওপর।",
        "references": [
          "ref-hickman-2020"
        ]
      },
      {
        "key": "marine_reptiles",
        "titleEn": "5. Marine Reptiles & Global Conservation in Bangladesh",
        "titleBn": "৫. সামুদ্রিক সরীসৃপ ও বাংলাদেশের উপকূলীয় সংরক্ষণ",
        "order": 5,
        "contentEn": "Marine reptiles evolved specialized osmoregulatory salt glands (lachrymal glands in sea turtles, sublingual glands in sea snakes) to excrete excess hyperosmotic sodium chloride. Five species of endangered sea turtles nest along Bangladesh beaches (Cox's Bazar, Saint Martin's, Kuakata), while the Sundarbans mangrove supports the Saltwater Crocodile (Crocodylus porosus) and venomous sea snakes.",
        "contentBn": "সামুদ্রিক সরীসৃপদের চোখে বা জিহ্বার নিচে বিশেষ লবণ গ্রন্থি (Salt Glands) থাকে যা পান করা সমুদ্রের লবণাক্ত জল ছেঁকে অতিরিক্ত লবণ বের করে দেয়। বাংলাদেশের সেন্ট মার্টিন ও কুয়াকাটা সৈকতে অলিভ রিডলে কাছিম ডিম পাড়ে এবং সুন্দরবনের মোহনায় লোনা পানির কুমির বাস করে।",
        "references": [
          "ref-rhodin-2021",
          "ref-iucn-bd-2015"
        ]
      }
    ]
  },
  {
    "id": "class-aves",
    "taxonId": "taxon-aves",
    "rank": "class",
    "scientificName": "Aves",
    "bengaliName": "পাখি বা পক্ষীকুল (অ্যাভিস)",
    "englishName": "Birds / Aves",
    "parentTaxonId": "taxon-chordata",
    "category": "general",
    "canonicalSlug": "aves",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Aves",
        "nameBn": "পাখি বা পক্ষীকুল"
      }
    ],
    "shortDescription": {
      "en": "Endothermic feathered amniotes characterized by toothless keratinous bills, high metabolic rates, hollow pneumatized bones, complete four-chambered hearts, flow-through air-sac respiration, and forelimbs modified into wings for powered flight.",
      "bn": "পালকযুক্ত উষ্ণরক্তের অ্যামনিওট মেরুদণ্ডী প্রাণী যাদের চোয়ালে দাঁতের বদলে শক্ত চঞ্চু থাকে, অস্থি ফাঁপা ও বায়ুপূর্ণ, হৃদপিণ্ড চার প্রকোষ্ঠযুক্ত, ফুসফুসে অবিরাম বায়ুথলি সঞ্চালন থাকে এবং অগ্রপদ ডানায় রূপান্তরিত।"
    },
    "diagnosticCharacteristics": {
      "en": "Homeothermic endotherms covered in beta-keratin feathers; forelimbs adapted as wings; specialized lightweight skeleton with hollow trabecular bones, furcula (wishbone), and keeled sternum (carina); flow-through respiratory system with non-collapsible parabronchial lungs and air sacs; complete four-chambered heart with right aortic arch; absence of urinary bladder.",
      "bn": "পালক দ্বারা আবৃত উষ্ণরক্তের মেরুদণ্ডী; অগ্রপদ ডানায় রূপান্তরিত; ফাঁপা বায়ুগহ্বরযুক্ত হাড় এবং ওড়ার পেশি যুক্ত করার জন্য কিলেড স্টার্নাম; বায়ুথলিযুক্ত ফুসফুসের মাধ্যমে একমুখী অবিরাম শ্বাসকার্য; ডান অ্যাওর্টিক আর্চযুক্ত চার-প্রকোষ্ঠবিশিষ্ট হৃদপিণ্ড; মূত্রাশয়ের অনুপস্থিতি।"
    },
    "habitat": {
      "en": "Aerial, terrestrial, limnic, and pelagic biomes globally across all continents from the Arctic to Antarctic oceans.",
      "bn": "বিশ্বব্যাপী আকাশ, স্থল, বনভূমি, জলাভূমি এবং অ্যান্টার্কটিকা থেকে ক্রান্তীয় সমস্ত অঞ্চলে বিস্তৃত।",
      "systems": [
        "marine",
        "freshwater"
      ]
    },
    "ecosystem": {
      "en": "Crucial ecological keystones driving global seed dispersal, insect pollination, carrion consumption, and predatory regulation of agricultural rodents.",
      "bn": "পরাগায়ন, দূর-দূরান্তে বীজ বিস্তার, ক্ষতিকর কীটপতঙ্গ ও ইঁদুর দমন এবং মৃতদেহ পরিষ্কারে প্রকৃতির অন্যতম অপরিহার্য প্রহরী।"
    },
    "feeding": {
      "en": "Extraordinary trophic specializations reflected in beak morphology: nectarivorous, granivorous, insectivorous, piscivorous, and apex raptorial carnivory.",
      "bn": "চঞ্চুর গঠনের ওপর ভিত্তি করে বৈচিত্র্যময় খাদ্য গ্রহণ: মধু পানকারী, শস্যভোজী, পতঙ্গভোজী, মাছ শিকারী এবং ঈগলের মতো মাংসাশী শিকারী।"
    },
    "reproduction": {
      "en": "Internal fertilization; oviparity with hard calcified calcium-carbonate shells; elaborate courtship displays, vocal songs, nest architecture, and prolonged biparental incubation and chick care.",
      "bn": "অভ্যন্তরীণ নিষেক; ক্যালসিয়াম কার্বনেটের শক্ত খোসাযুক্ত ডিম্বপ্রসব; গান ও নাচের মাধ্যমে প্রণয়প্রদর্শন, সুনিপুণ বাসা তৈরি এবং পিতা-মাতা উভয়ের বাচ্চার লালন-পালন।"
    },
    "distribution": {
      "en": "Worldwide across all 7 continents. Bangladesh hosts over 700 recorded bird species across its river deltas, haors, and coastal flyways.",
      "bn": "সাতটি মহাদেশেই বিস্তৃত। বাংলাদেশ এশিয়ার অন্যতম প্রধান পরিযায়ী পাখি রুট (Flyway), যেখানে ৭০০টিরও বেশি প্রজাতির পাখি নথিবদ্ধ।"
    },
    "importantFamilies": [
      {
        "name": "Accipitridae",
        "commonEn": "Hawks, Eagles & Harriers",
        "commonBn": "ঈগল ও বাজপাখি",
        "diagnosticEn": "Diurnal raptors with hooked beaks and sharp talons (e.g. Haliaeetus leucogaster)."
      },
      {
        "name": "Anatidae",
        "commonEn": "Ducks, Geese & Swans",
        "commonBn": "হাঁস ও রাজহাঁস",
        "diagnosticEn": "Aquatic birds with webbed feet and spatulate filtering beaks."
      },
      {
        "name": "Muscicapidae",
        "commonEn": "Old World Flycatchers & Chats",
        "commonBn": "দোয়েল ও চুটকি",
        "diagnosticEn": "Small insectivorous passerines including the Oriental Magpie-Robin (Copsychus saularis)."
      }
    ],
    "scientificNamesSummary": {
      "en": "Class Aves Linnaeus, 1758; phylogenetically living theropod dinosaurs (Neornithes), divided into Palaeognathae (ratites) and Neognathae (flying birds).",
      "bn": "শ্রেণী অ্যাভিস Linnaeus, 1758; বিবর্তনীয়ভাবে জীবন্ত থেরোপড ডাইনোসর, যা প্যালিওগ্নাথি (উটপাখি) এবং নিওগ্নাথি (উড়ুক্কু পাখি)-তে বিভক্ত।"
    },
    "exampleSpeciesIds": [
      "sp-columba-livia",
      "sp-gallus-gallus",
      "sp-pavo-cristatus",
      "sp-passer-domesticus",
      "sp-corvus-splendens",
      "sp-phoenicopterus-roseus",
      "sp-struthio-camelus",
      "sp-aptenodytes-forsteri",
      "sp-haliaeetus-leucocephalus",
      "sp-alcedo-atthis",
      "sp-copsychus-saularis"
    ],
    "examplesSummary": {
      "en": "Iconic taxa include the Oriental Magpie-Robin (Copsychus saularis, National Bird of Bangladesh), White-bellied Sea Eagle (Haliaeetus leucogaster), and migratory waterfowls.",
      "bn": "প্রতিনিধি প্রজাতি: বাংলাদেশের জাতীয় পাখি দোয়েল (Copsychus saularis), শ্বেতশুভ্র সামুদ্রিক ঈগল (Haliaeetus leucogaster), এবং শীতের পরিযায়ী হাঁস।"
    },
    "additionalInformation": {
      "en": "The East Asian-Australasian and Central Asian Flyways converge over Bangladesh haor basins (Tanguar Haor, Hakaluki Haor), hosting millions of wintering migratory waterfowl.",
      "bn": "টাঙ্গুয়ার হাওর ও হাকালুকি হাওর আন্তর্জাতিক রামসার সাইট হিসেবে প্রতি শীতে সাইবেরিয়া ও মধ্য এশিয়া থেকে আগত লক্ষ লক্ষ পরিযায়ী পাখির প্রধান আশ্রয়স্থল।"
    },
    "referenceIds": [
      "ref-ioc-birds-2026",
      "ref-kardong-2018",
      "ref-linnaeus-1758"
    ],
    "authoritySource": "IOC World Bird List (2026) / Gill et al. / Clements Checklist",
    "verificationStatus": "published",
    "publishedStatus": true,
    "sections": [
      {
        "key": "theropod_origin",
        "titleEn": "1. Theropod Dinosaur Origin & Feathers",
        "titleBn": "১. থেরোপড ডাইনোসর উৎস ও পালকের উৎপত্তি",
        "order": 1,
        "contentEn": "Modern cladistics demonstrates that birds are living theropod dinosaurs, closely related to maniraptorans like Velociraptor. Feathers evolved initially in non-avian dinosaurs for thermoregulation and display, constructed of flexible beta-keratin with a central rachis, branching barbs, and interlocking microscopic barbules and hooklets (hamuli).",
        "contentBn": "আধুনিক ক্ল্যাডিস্টিক্সে পাখিরা হলো জীবিত থেরোপড ডাইনোসর। উড়বার বহু আগেই ডাইনোসরদের দেহে উত্তাপ ধরে রাখার জন্য পালকের উৎপত্তি ঘটেছিল। পালকের শ্যাফট থেকে বের হওয়া বার্ব ও আণুবীক্ষণিক হুক বা বার্বিউলের ইন্টারলকিং ব্যবস্থার কারণে ডানা বাতাসের ঘাত সহ্য করে উড়তে পারে।",
        "references": [
          "ref-kardong-2018"
        ]
      },
      {
        "key": "flight_skeleton",
        "titleEn": "2. Skeletal Adaptations for Aerodynamic Flight",
        "titleBn": "২. ওড়ার জন্য কঙ্কালের বিশেষ রূপান্তর",
        "order": 2,
        "contentEn": "The avian skeleton combines extreme lightness with structural rigidity: long bones are hollow and pneumatized with internal air struts; clavicles fuse into the elastic wishbone (furcula) storing kinetic energy; the thoracic sternum sports a prominent keel (carina) anchoring massive flight muscles (pectoralis major and supracoracoideus); vertebrae fuse into a rigid synsacrum.",
        "contentBn": "পাখির হাড় ফাঁপা ও বায়ুপূর্ণ হওয়ায় অত্যন্ত হালকা অথচ শক্ত। দুপাশের ক্ল্যাভিকল যুক্ত হয়ে স্থিতিস্থাপক ফারকুলা (উইশবোন) গঠন করে। বুকের স্টার্নামে বিশাল কিলেড অংশ থাকে যেখানে ওড়ার শক্তিশালী পেক্টোরালিস পেশি যুক্ত থাকে।",
        "references": [
          "ref-hickman-2020"
        ]
      },
      {
        "key": "air_sac_respiration",
        "titleEn": "3. Unidirectional Flow-Through Air-Sac Respiration",
        "titleBn": "৩. বায়ুথলিযুক্ত ফুসফুসের একমুখী শ্বাসপ্রবাহ",
        "order": 3,
        "contentEn": "Birds possess the most efficient respiratory system among all vertebrates. Nine interconnecting air sacs act as bellows, forcing air in a continuous unidirectional loop through microscopic parabronchi in the lungs. Two full breathing cycles are required to move an air packet through the system, ensuring oxygen-rich fresh air passes through gas exchange tissues during both inspiration and expiration.",
        "contentBn": "মেরুদণ্ডীদের মধ্যে পাখির শ্বাসতন্ত্র সবচেয়ে দক্ষ। এদের ফুসফুসের সাথে ৯টি বায়ুথলি বেলুনের মতো কাজ করে। একমুখী চক্রের কারণে শ্বাস গ্রহণ ও শ্বাস ত্যাগ—উভয় সময়ই ফুসফুসের প্যারাব্রঙ্কাই দিয়ে অবিরাম তাজা অক্সিজেন সমৃদ্ধ রক্ত প্রবাহিত হয়, যা উচ্চ আকাশে ওড়ার সময় অক্সিজেনের অভাব হতে দেয় না।",
        "references": [
          "ref-kardong-2018"
        ]
      },
      {
        "key": "metabolism_circulation",
        "titleEn": "4. Endothermy, Four-Chambered Heart & Uricotelic Excretion",
        "titleBn": "৪. উষ্ণরক্ত, চার-প্রকোষ্ঠযুক্ত হৃদপিণ্ড ও ইউরিকোটেলিক রেচন",
        "order": 4,
        "contentEn": "Flight requires immense metabolic energy, supported by constant high body temperatures (~40–42°C). A completely divided four-chambered heart with a right systemic aortic arch maintains high blood pressure with zero mixing of oxygenated and deoxygenated blood. Excretion of semi-solid uric acid eliminates the need for a heavy urinary bladder, minimizing payload for flight.",
        "contentBn": "ওড়ার বিপুল শক্তি জোগাতে পাখির দেহের তাপমাত্রা সার্বক্ষণিক ৪০-৪২ ডিগ্রি সেলসিয়াসে থাকে। চার-প্রকোষ্ঠবিশিষ্ট হৃদপিণ্ডে ডান মহাধমনী থাকে যা উচ্চ চাপে বিশুদ্ধ রক্ত ছড়ায়। মূত্রাশয় না থাকায় কোনো অতিরিক্ত তরল বর্জ্যের ওজন বহন করতে হয় না।",
        "references": [
          "ref-hickman-2020"
        ]
      },
      {
        "key": "migration_ecology",
        "titleEn": "5. Global Migration Flyways & Wetland Conservation in Bangladesh",
        "titleBn": "৫. বৈশ্বিক পরিযান ও বাংলাদেশের জলাভূমি বাস্তুতন্ত্র",
        "order": 5,
        "contentEn": "Many birds undertake transcontinental migrations navigated by celestial cues, polarized sunlight, and Earth's geomagnetic field. Bangladesh's haors (Tanguar, Hakaluki) and coastal mudflats in the Ganges-Brahmaputra delta host over 200 species of winter migratory waterbirds, providing indispensable staging and refueling grounds on the East Asian-Australasian Flyway.",
        "contentBn": "পাখিরা পৃথিবীর ভূ-চৌম্বকীয় ক্ষেত্র এবং তারার অবস্থান দেখে হাজার হাজার মাইল পরিযান করে। বাংলাদেশের টাঙ্গুয়ার হাওর ও উপকূলীয় চরাঞ্চল মধ্য এশিয়ার পরিযায়ী পাখিদের প্রধান বিচরণক্ষেত্র হিসেবে বিশ্বস্বীকৃত।",
        "references": [
          "ref-ioc-birds-2026",
          "ref-iucn-bd-2015"
        ]
      }
    ]
  },
  {
    "id": "class-mammalia",
    "taxonId": "taxon-mammalia",
    "rank": "class",
    "scientificName": "Mammalia",
    "bengaliName": "স্তন্যপায়ী প্রাণী (ম্যামালিয়া)",
    "englishName": "Mammals / Mammalia",
    "parentTaxonId": "taxon-chordata",
    "category": "general",
    "canonicalSlug": "mammalia",
    "classificationHierarchy": [
      {
        "rank": "kingdom",
        "name": "Animalia",
        "nameBn": "প্রাণিজগৎ"
      },
      {
        "rank": "phylum",
        "name": "Chordata",
        "nameBn": "কর্ডাটা"
      },
      {
        "rank": "class",
        "name": "Mammalia",
        "nameBn": "স্তন্যপায়ী প্রাণী"
      }
    ],
    "shortDescription": {
      "en": "Endothermic amniotes characterized by mammary glands producing milk for nourishment of young, insulating keratinous hair or fur, three middle ear ossicles, a single dentary-squamosal jaw bone, and a neocortex supporting advanced cognition.",
      "bn": "উষ্ণরক্তের অ্যামনিওট মেরুদণ্ডী প্রাণী যাদের মাতৃস্তনে দুধ উৎপন্ন হয়, দেহ চুলে আবৃত, মধ্যকর্ণে তিনটি ক্ষুদ্র অস্থি থাকে, নিম্নচোয়াল একক ডেন্টারি হাড় দিয়ে গঠিত এবং অত্যন্ত উন্নত মস্তিষ্ক বিদ্যমান।"
    },
    "diagnosticCharacteristics": {
      "en": "Homeothermic endotherms possessing mammary glands for lactation; integument bearing hair/fur composed of alpha-keratin; three auditory middle ear ossicles (malleus, incus, stapes); single dentary bone forming the lower jaw; heterodont and diphyodont dentition; muscular diaphragm separating thoracic and abdominal cavities; four-chambered heart with left aortic arch; enucleated mature erythrocytes.",
      "bn": "সন্তানকে স্তন্যপান করানোর জন্য স্তনগ্রন্থি; আলফা-কেরাটিনের চুল বা পশম; মধ্যকর্ণের তিনটি ক্ষুদ্র অস্থি (ম্যালিয়াস, ইনকাস ও স্টেপিস); একক ডেন্টারি হাড়যুক্ত নিম্নচোয়াল; বিভিন্ন আকৃতির দাঁত (ইনসিজর, ক্যানাইন, প্রিমোলার, মোলার); বক্ষ ও উদর গহ্বর পৃথককারী পেশিবহুল ডায়াফ্রাম; নিউক্লিয়াসবিহীন লোহিত রক্তকণিকা এবং বাম মহাধমনীযুক্ত চার-প্রকোষ্ঠবিশিষ্ট হৃদপিণ্ড।",
      "keyFeatures": {
        "en": [
          "Mammary glands secreting nutritious milk for post-natal maternal care",
          "Hair or fur pelage providing thermal insulation and tactile mechanoreception",
          "Three middle ear ossicles transmitting acoustic vibrations to the inner cochlea",
          "Muscular diaphragm enabling efficient negative-pressure pulmonary ventilation"
        ],
        "bn": [
          "মাতৃদুগ্ধ নিঃসরণকারী স্তনগ্রন্থি যা নবজাতকের পুষ্টি ও সুরক্ষা নিশ্চিত করে",
          "দেহের তাপমাত্রা ধরে রাখার জন্য চর্বি ও চুলের ইনসুলেশন আবরণ",
          "শব্দ তরঙ্গ গ্রহণের জন্য মধ্যকর্ণে ম্যালিয়াস, ইনকাস ও স্টেপিস অস্থিত্রয়",
          "শ্বাসগ্রহণের জন্য বক্ষ ও পেটের মাঝে বিশেষায়িত ডায়াফ্রাম পেশি"
        ]
      }
    },
    "habitat": {
      "en": "Cosmopolitan across terrestrial landmasses, subterranean burrows, arboreal forest canopies, aerial skies (bats), and fully aquatic oceans (cetaceans, sirenians).",
      "bn": "সমগ্র পৃথিবী জুড়ে বিস্তৃত: মাটির নিচে, বনভূমির গাছে, আকাশে (বাদুড়) এবং সম্পূর্ণ সাগরের অতল জলে (তিমি, ডলফিন)।",
      "systems": [
        "marine",
        "freshwater"
      ]
    },
    "ecosystem": {
      "en": "Apex terrestrial and marine predators (cetaceans, big cats), mega-herbivores shaping forest landscapes (elephants, ungulates), and seed dispersers.",
      "bn": "স্থল ও সাগরের শীর্ষ শিকারী (বাঘ, সিংহ, তিমি) এবং বনের গাছপালা ও বাস্তুতন্ত্র পুনর্গঠনে নিয়োজিত মেগা-তৃণভোজী প্রাণী।"
    },
    "feeding": {
      "en": "Specialized heterodont dentition adapted for precise trophic niches: carnivory, herbivory, frugivory, insectivory, filter-feeding baleen, and omnivory.",
      "bn": "খাদ্য অনুযায়ী দাঁতের নিখুঁত পরিবর্তন: শিকারের জন্য ধারালো ক্যানাইন দাঁত, ঘাস চিবানোর জন্য চওড়া মোলার দাঁত এবং তিমিদের জলে খাবার ছাঁকার ব্যালিন প্লেট।"
    },
    "reproduction": {
      "en": "Internal fertilization; divided into egg-laying Prototheria (monotremes), pouched Metatheria (marsupials), and placental Eutheria characterized by prolonged gestation through a chorioallantoic placenta.",
      "bn": "অভ্যন্তরীণ নিষেক; তিনটি শাখা: ডিম পাড়া মোনোট্রিম (প্লাটিপাস), থলিযুক্ত মারসুপিয়াল (ক্যাঙ্গারু), এবং উন্নত অমরাযুক্ত প্ল্যাসেন্টাল প্রাণী (মানুষ, তিমি, বাঘ) যেখানে গর্ভস্থ ভ্রূণ জরায়ুতে পুষ্টি পায়।"
    },
    "distribution": {
      "en": "Worldwide across all continents and oceans. In Bangladesh, over 120 species inhabit terrestrial forests, haors, rivers, and the Bay of Bengal.",
      "bn": "বিশ্বের সকল অঞ্চলে বিস্তৃত। বাংলাদেশে সুন্দরবন, নদী অববাহিকা ও বঙ্গোপসাগরে ১২০টিরও বেশি প্রজাতির স্তন্যপায়ী প্রাণী রয়েছে।"
    },
    "importantFamilies": [
      {
        "name": "Delphinidae",
        "commonEn": "Oceanic & Riverine Dolphins",
        "commonBn": "ডলফিন",
        "diagnosticEn": "Aquatic odontocete cetaceans with streamlined bodies, echolocation melon, and blowholes (e.g. Orcaella brevirostris)."
      },
      {
        "name": "Platanistidae",
        "commonEn": "South Asian River Dolphins",
        "commonBn": "শুশুক / গাঙ্গেয় ডলফিন",
        "diagnosticEn": "Freshwater river cetaceans with elongated forceps-like snouts and side-swimming habits (e.g. Platanista gangetica)."
      },
      {
        "name": "Balaenopteridae",
        "commonEn": "Rorquals / Baleen Whales",
        "commonBn": "তিমি",
        "diagnosticEn": "Enormous filter-feeding marine cetaceans with throat pleats and baleen plates (e.g. Balaenoptera musculus)."
      },
      {
        "name": "Felidae",
        "commonEn": "Cats & Big Cats",
        "commonBn": "বিড়াল ও বাঘ গোত্র",
        "diagnosticEn": "Hypercarnivorous ambush predators with retractable claws and night vision (e.g. Panthera tigris tigris Royal Bengal Tiger)."
      }
    ],
    "scientificNamesSummary": {
      "en": "Class Mammalia Linnaeus, 1758; subclass Prototheria (Monotremata) and subclass Theria (infraclass Metatheria / Marsupialia and infraclass Eutheria / Placentalia).",
      "bn": "শ্রেণী ম্যামালিয়া Linnaeus, 1758; উপশ্রেণী প্রোটোথেরিয়া (ডিম পাড়া স্তন্যপায়ী) এবং উপশ্রেণী থেরিয়া (মারসুপিয়ালিয়া ও ইউথেরিয়া বা অমরাযুক্ত প্রাণী)।"
    },
    "exampleSpeciesIds": [
      "sp-homo-sapiens",
      "sp-felis-catus",
      "sp-equus-caballus",
      "sp-elephas-maximus",
      "sp-mus-musculus",
      "sp-phascolarctos-cinereus",
      "sp-balaenoptera-musculus",
      "sp-orcaella-brevirostris",
      "sp-platanista-gangetica",
      "sp-phoca-vitulina",
      "sp-dugong-dugon",
      "sp-ornithorhynchus-anatinus",
      "sp-osphranter-rufus",
      "sp-pteropus-medius",
      "sp-pan-troglodytes",
      "sp-hydrochoerus-hydrochaeris",
      "sp-panthera-tigris"
    ],
    "examplesSummary": {
      "en": "Verified canonical species in BiotaElite include the Irrawaddy Dolphin (Orcaella brevirostris), Ganges River Dolphin (Platanista gangetica), Blue Whale (Balaenoptera musculus), Harbor Seal (Phoca vitulina), and Dugong (Dugong dugon).",
      "bn": "বায়োটাএলিটে যাচাইকৃত স্তন্যপায়ী প্রজাতি: ইরাবতী ডলফিন (Orcaella brevirostris), গাঙ্গেয় শুশুক (Platanista gangetica), নীল তিমি (Balaenoptera musculus), এবং ডুগং (Dugong dugon)।"
    },
    "additionalInformation": {
      "en": "Marine and aquatic mammals in Bangladesh's Swatch of No Ground submarine canyon and Sundarbans delta are strictly protected under national wildlife acts and CITES Appendix I.",
      "bn": "বঙ্গোপসাগরের গভীর সোয়াচ অব নো গ্রাউন্ড সামুদ্রিক সুরক্ষিত অঞ্চল এবং সুন্দরবনের নদী মোহনায় ডলফিন ও তিমির অভয়ারণ্য বাংলাদেশ বন্যপ্রাণী সংরক্ষণ আইনে সর্বোচ্চ সুরক্ষিত।"
    },
    "referenceIds": [
      "ref-kardong-2018",
      "ref-worms-2024",
      "ref-linnaeus-1758"
    ],
    "authoritySource": "Mammal Diversity Database (MDD 2026) / ASM / WoRMS (2026)",
    "verificationStatus": "published",
    "publishedStatus": true,
    "sections": [
      {
        "key": "synapsid_origin",
        "titleEn": "1. Synapsid Evolutionary Lineage & Jaw Transformation",
        "titleBn": "১. সিন্যাপসিড বিবর্তন ও চোয়ালের হাড়ের রূপান্তর",
        "order": 1,
        "contentEn": "Mammals arose from non-mammalian synapsid amniotes ('pelycosaurs' and therapsid cynodonts) during the Triassic period (~225 million years ago). The reptilian articular and quadrate jaw bones were progressively miniaturized and decoupled from the jaw joint, migrating into the middle ear to form the malleus and incus, leaving the dentary as the sole bone of the lower jaw.",
        "contentBn": "স্তন্যপায়ীরা ট্রায়াসিক যুগে (~২২৫ মিলিয়ন বছর আগে) সাইনোডন্ট সিন্যাপসিড পূর্বপুরুষ থেকে উদ্ভূত হয়। প্রাচীন সরীসৃপের চোয়ালের আর্টিকুলার ও কোয়াড্রেট হাড় ক্ষুদ্রাকার হয়ে মধ্যকর্ণে প্রবেশ করে ম্যালিয়াস ও ইনকাস অস্থিতে রূপান্তরিত হয়, যার ফলে নিম্নচোয়ালে কেবল একক ডেন্টারি হাড় অবশিষ্ট থাকে।",
        "references": [
          "ref-kardong-2018"
        ]
      },
      {
        "key": "lactation_hair",
        "titleEn": "2. Mammary Glands, Lactation & Hair Thermoregulation",
        "titleBn": "২. স্তনগ্রন্থি, দুগ্ধক্ষরণ ও চুলের তাপমাত্রা নিয়ন্ত্রণ",
        "order": 2,
        "contentEn": "Lactation via specialized mammary glands represents the key energetic innovation of Mammalia, liberating hatchlings or neonates from the immediate need to forage. Hair pelage constructed of alpha-keratin provides effective thermal insulation, water repellency, and specialized sensory whiskers (vibrissae) connected to trigeminal nerve receptors.",
        "contentBn": "মাতৃদুগ্ধ নিঃসরণকারী স্তনগ্রন্থির মাধ্যমে শিশুকে দীর্ঘ সময় পুষ্টি ও অ্যান্টিবডি প্রদান করা স্তন্যপায়ী প্রাণীদের অন্যতম প্রধান বিবর্তনীয় সাফল্য। আলফা-কেরাটিনের চুল বা পশম দেহকে শীতে উষ্ণ রাখে এবং গোঁফ বা ভাইব্রিসি সংবেদনশীল ইন্দ্রিয় হিসেবে কাজ করে।",
        "references": [
          "ref-hickman-2020"
        ]
      },
      {
        "key": "diaphragm_circulation",
        "titleEn": "3. Muscular Diaphragm & High-Pressure Circulation",
        "titleBn": "৩. পেশিবহুল ডায়াফ্রাম ও উচ্চ-চাপ রক্ত সংবহন",
        "order": 3,
        "contentEn": "Ventilation is actively driven by a muscular dome-shaped diaphragm that seals the thoracic cavity from the abdomen, producing high negative tidal pressures. The heart is completely divided into four chambers with a left systemic aortic arch (convergent with the avian right arch), circulating blood with non-nucleated biconcave erythrocytes optimizing surface-to-volume oxygen delivery.",
        "contentBn": "স্তন্যপায়ীদের শ্বাসকার্য বক্ষ ও পেটের মাঝে অবস্থিত বিশেষায়িত ডায়াফ্রাম পেশির নড়াচড়ার মাধ্যমে পরিচালিত হয়। এদের চার-প্রকোষ্ঠবিশিষ্ট হৃদপিণ্ডে বাম মহাধমনী থাকে এবং পরিণত লোহিত রক্তকণিকায় কোনো নিউক্লিয়াস না থাকায় তা সর্বাধিক অক্সিজেন পরিবহন করতে পারে।",
        "references": [
          "ref-kardong-2018"
        ]
      },
      {
        "key": "subclasses_reproduction",
        "titleEn": "4. Major Reproductive Subclasses: Monotremes, Marsupials & Placentals",
        "titleBn": "৪. প্রধান প্রজনন উপশ্রেণী: মোনোট্রিম, মারসুপিয়াল ও প্ল্যাসেন্টাল",
        "order": 4,
        "contentEn": "Extant mammals comprise three reproductive grades: 1. Prototheria / Monotremata (oviparous egg-laying platypus and echidnas); 2. Metatheria / Marsupialia (pouched mammals giving birth to altricial embryos that finish development attached to a teat in the marsupium); 3. Eutheria / Placentalia (possessing complex chorioallantoic placentas supporting prolonged fetal development).",
        "contentBn": "তিনটি প্রধান প্রজনন শাখা: ১. মোনোট্রিম (ডিম পাড়া স্তন্যপায়ী, যেমন প্লাটিপাস); ২. মারসুপিয়াল (থলিযুক্ত প্রাণী যেমন ক্যাঙ্গারু, যাদের অপরিণত বাচ্চা থলির ভেতরে স্তনবৃন্ত আঁকড়ে ধরে বড় হয়); ৩. প্ল্যাসেন্টাল বা অমরাযুক্ত স্তন্যপায়ী (যাদের বাচ্চা জরায়ুতে অমরার মাধ্যমে পুষ্টি পেয়ে পূর্ণাঙ্গ রূপে জন্মায়)।",
        "references": [
          "ref-hickman-2020"
        ]
      },
      {
        "key": "marine_adaptations",
        "titleEn": "5. Aquatic & Marine Mammalian Radiations",
        "titleBn": "৫. জলজ ও সামুদ্রিক স্তন্যপায়ীদের রূপান্তর",
        "order": 5,
        "contentEn": "Terrestrial mammals secondarily recolonized oceanic realms in multiple lineages: Cetacea (dolphins and whales, from artiodactyl ungulates), Sirenia (manatees and dugongs, from afrotherian paenungulates), and Pinnipedia (seals and walruses, from arctoid carnivorans). Adaptations include blubber insulation, tail flukes, dorsal blowholes, dive bradycardia, and echolocation biosonar.",
        "contentBn": "স্তন্যপায়ীরা দ্বিতীয় দফায় সমুদ্রে ফিরে গিয়ে রূপ লাভ করে: সিটাসিয়া (তিমি ও ডলফিন), সাইরেনিয়া (ডুগং), এবং পিনিপিডিয়া (সিল ও সিন্ধুঘোটক)। এদের শরীরে পুরু চর্বির ব্ল্যাবার, লেজের ফ্লুক, শ্বাসগ্রহণের জন্য মাথায় ব্লো-হোল এবং শব্দতরঙ্গ দিয়ে শিকার খোঁজার ইকো-লোকেশন ক্ষমতা তৈরি হয়েছে।",
        "references": [
          "ref-worms-2024"
        ]
      }
    ]
  },
  {
    "id": "group-protozoa",
    "taxonId": "group-protozoa",
    "rank": "grade",
    "scientificName": "Protozoa (Traditional Educational Assemblage)",
    "bengaliName": "প্রোটোজোয়া — সনাতন শিক্ষামূলক গোষ্ঠী",
    "englishName": "Protozoa — Traditional Educational Group",
    "parentTaxonId": null,
    "category": "general",
    "canonicalSlug": "protozoa",
    "classificationHierarchy": [
      {
        "rank": "domain",
        "name": "Eukaryota",
        "nameBn": "সুকেন্দ্রীক জীব"
      },
      {
        "rank": "grade",
        "name": "Protozoa (Traditional)",
        "nameBn": "প্রোটোজোয়া (ঐতিহ্যগত গোষ্ঠী)"
      }
    ],
    "shortDescription": {
      "en": "Traditional educational grouping of microscopic, unicellular or colonial, non-photosynthetic eukaryotic organisms. Modern cladistic phylogenetics demonstrates that Protozoa is polyphyletic and distributed across multiple independent eukaryotic supergroups (Amoebozoa, Excavata, SAR) rather than a formal animal phylum.",
      "bn": "আণুবীক্ষণিক, এককোষী বা কলোনিবদ্ধ সুকেন্দ্রিক জীবের একটি ঐতিহ্যগত শিক্ষামূলক গোষ্ঠী। আধুনিক বংশগতিবিদ্যা ও জাতিজনি প্রমাণ করেছে যে প্রোটোজোয়া কোনো একক প্রাণী পর্ব নয়, বরং একটি পলিফাইলেটিক সমাহার যা বিভিন্ন সুকেন্দ্রিক সুপারগ্রুপে (Amoebozoa, Excavata, SAR) বিস্তৃত।"
    },
    "diagnosticCharacteristics": {
      "en": "Microscopic unicellular eukaryotes lacking true tissues or cell walls; subcellular organelles performing all vital metabolic functions; motility facilitated by pseudopodia, flagella, or cilia; contractile vacuoles for osmoregulation in freshwater forms; polyphyletic systematic assemblage maintained for pedagogic clarity.",
      "bn": "আণুবীক্ষণিক এককোষী সুকেন্দ্রিক জীব যাদের কোনো প্রকৃত কলা বা সেলুলোজ প্রাচীর থাকে না; একটিমাত্র কোষের ভেতরের অঙ্গাণু দ্বারা পুষ্টি, শ্বসন, চলন ও রেচন সম্পন্ন হয়; ক্ষণপদ, ফ্ল্যাজেলা বা সিলিয়ার মাধ্যমে চলন ঘটে; আধুনিক বিজ্ঞানে এটি একটি সনাতন শিক্ষামূলক গোষ্ঠী হিসেবে বিবেচিত।",
      "keyFeatures": {
        "en": [
          "Complete physiological organism operating within a single cell membrane",
          "Diverse motility organelles: pseudopodia, flagella, cilia, or gliding pellicles",
          "Contractile vacuoles for active osmoregulatory pumping in freshwater habitats",
          "Taxonomic qualification: Polyphyletic educational grade, NOT a modern formal phylum"
        ],
        "bn": [
          "একটিমাত্র কোষঝিল্লির ভেতরে সমস্ত শারীরবৃত্তীয় কার্যক্রম পরিচালনাকারী সম্পূর্ণ জীব",
          "চলনের জন্য বৈচিত্র্যময় অঙ্গাণু: ক্ষণপদ (সিউডোপোডিয়া), ফ্ল্যাজেলা, বা সিলিয়া",
          "মিঠাপানির প্রজাতিতে জলসাম্য রক্ষার জন্য সংকোচনশীল গহ্বর (Contractile Vacuole)",
          "শ্রেণীবিন্যাস দ্রষ্টব্য: এটি একটি সনাতন শিক্ষামূলক গোষ্ঠী, আধুনিক প্রাণিজগতের একক পর্ব নয়"
        ]
      }
    },
    "habitat": {
      "en": "Ubiquitous across limnic ponds, rivers, damp soils, marine coastal sands, and endosymbiotic/parasitic host tissues.",
      "bn": "মিঠাপানির পুকুর, নদী, আর্দ্র মাটি, সমুদ্রের বালি এবং প্রাণীদেহের ভেতর পরজীবী হিসেবে সার্বজনীনভাবে বিস্তৃত।",
      "systems": [
        "freshwater",
        "marine"
      ]
    },
    "ecosystem": {
      "en": "Fundamental primary consumers of bacteria in aquatic microbial loops, recycling mineral nutrients and serving as essential base food for zooplankton.",
      "bn": "জলজ মাইক্রোবিয়াল লুপে ব্যাকটেরিয়া ভক্ষণকারী প্রধান খাদক যা পুষ্টি পুনর্ব্যবহার করে এবং ক্ষুদ্র প্রাণীদের খাদ্য জোগায়।"
    },
    "feeding": {
      "en": "Holozoic phagocytosis (ingestion of particulate food through cytostome or pseudopodial engulfment), saprozoic pinocytosis, and parasitic nutrient absorption.",
      "bn": "ফ্যাগোসাইটোসিস প্রক্রিয়ায় ক্ষণপদ বা সাইটোস্টোম (মুখছিদ্র) দিয়ে খাদ্য কণা গ্রহণ এবং খাদ্য গহ্বরে পাচন।"
    },
    "reproduction": {
      "en": "Asexual reproduction via binary fission, multiple fission (schizogony), or budding; sexual reproduction via conjugation (ciliates) or syngamy.",
      "bn": "অযৌন জননে দ্বি-বিভাজন, বহু-বিভাজন (সাইজোগনি); প্যারামেসিয়ামে বিশেষায়িত কনজুগেশন বা যৌন প্রক্রিয়ায় জিন বিনিময় ঘটে।"
    },
    "distribution": {
      "en": "Cosmopolitan worldwide across all aquatic and terrestrial ecosystems.",
      "bn": "বিশ্বব্যাপী সমস্ত জলজ ও স্থলজ বাস্তুতন্ত্রে সার্বজনীন।"
    },
    "importantFamilies": [
      {
        "name": "Amoebidae",
        "commonEn": "Naked Amoebas",
        "commonBn": "অ্যামিবা",
        "diagnosticEn": "Unicellular organisms moving via lobose pseudopodia (e.g. Amoeba proteus)."
      },
      {
        "name": "Parameciidae",
        "commonEn": "Slipper Animalcules",
        "commonBn": "প্যারামেসিয়াম",
        "diagnosticEn": "Ciliated freshwater protozoans with oral groove and dual macro/micronuclei."
      },
      {
        "name": "Plasmodiidae",
        "commonEn": "Malarial Parasites",
        "commonBn": "ম্যালেরিয়ার জীবাণু",
        "diagnosticEn": "Intracellular sporozoans transmitted by anopheline mosquitoes (e.g. Plasmodium vivax)."
      }
    ],
    "scientificNamesSummary": {
      "en": "Traditional Grade Protozoa Goldfuss, 1818. Modern eukaryotic classification disassembles this historical grouping across supergroups Amoebozoa, Excavata, and SAR (Stramenopiles, Alveolates, Rhizaria).",
      "bn": "ঐতিহ্যগত গ্রেড প্রোটোজোয়া Goldfuss, 1818। আধুনিক শ্রেণীবিন্যাসে এই প্রাণীদের অ্যামিবোজোয়া, এক্সকাভাটা এবং সার (SAR) সুপারগ্রুপে বিভক্ত করা হয়েছে।"
    },
    "exampleSpeciesIds": [],
    "examplesSummary": {
      "en": "Classical textbook reference organisms include Amoeba proteus, Paramecium caudatum, Euglena viridis, and Plasmodium vivax.",
      "bn": "পাঠ্যপুস্তকের প্রামাণ্য উদাহরণ: অ্যামিবা (Amoeba proteus), প্যারামেসিয়াম (Paramecium caudatum), ইউগ্লিনা (Euglena viridis) এবং প্লাজমোডিয়াম (Plasmodium vivax)।"
    },
    "additionalInformation": {
      "en": "Educational Notice: BiotaElite presents Protozoa strictly as a traditional educational reference group for classical zoology learning. It is not placed in the formal modern Animalia phylum hierarchy.",
      "bn": "শিক্ষামূলক দ্রষ্টব্য: বায়োটাএলিট ঐতিহ্যগত প্রাণিবিজ্ঞান শিক্ষার সুবিধার্থে প্রোটোজোয়াকে একটি শিক্ষামূলক গোষ্ঠী হিসেবে উপস্থাপন করে। আধুনিক প্রাণী পর্ব হিসেবে এটিকে অন্তর্ভুক্ত করা হয়নি।"
    },
    "referenceIds": [
      "ref-hickman-2020",
      "ref-ruppert-2004"
    ],
    "authoritySource": "Cavalier-Smith (2010) / Adl et al. (2019) Revisions to the Classification of Eukaryotes",
    "verificationStatus": "published",
    "publishedStatus": true,
    "sections": [
      {
        "key": "systematic_qualification",
        "titleEn": "1. Systematic Status: Obsolete Phylum vs Modern Supergroups",
        "titleBn": "১. শ্রেণীবিন্যাসীয় মর্যাদা: সনাতন ধারণা বনাম আধুনিক সুপারগ্রুপ",
        "order": 1,
        "contentEn": "In 19th and 20th century classical zoology curricula (Goldfuss, 1818; Haeckel, 1866), 'Protozoa' was taught as the first phylum of Kingdom Animalia. Modern phylogenomics based on multigene sequencing has overturned this view. Protozoa is recognized as an artificial polyphyletic assemblage: its members share a unicellular grade of organization but do not share an exclusive common ancestor. Modern protistan taxonomy places these organisms into distinct eukaryotic supergroups: Amoebozoa (amoebas), Excavata (flagellates like Euglena and Giardia), and SAR (Stramenopiles, Alveolates including ciliates and Plasmodium, and Rhizaria).",
        "contentBn": "ঊনবিংশ ও বিংশ শতাব্দীর সনাতন পাঠ্যসূচিতে প্রোটোজোয়াকে প্রাণিজগতের প্রথম পর্ব হিসেবে পড়ানো হতো। তবে আধুনিক জিনোম সিকোয়েন্সিং প্রমাণ করেছে যে প্রোটোজোয়া কোনো একক পূর্বপুরুষ থেকে সৃষ্ট স্বাভাবিক পর্ব নয়, বরং একটি পলিফাইলেটিক সমাহার। আধুনিক বিজ্ঞানে এদেরকে পৃথক সুকেন্দ্রিক সুপারগ্রুপে শ্রেণীবদ্ধ করা হয়: অ্যামিবোজোয়া (ক্ষণপদধারী অ্যামিবা), এক্সকাভাটা (ফ্ল্যাজেলাধারী ইউগ্লিনা ও জিয়ার্ডিয়া), এবং সার (সিলিয়াধারী প্যারামেসিয়াম ও ম্যালেরিয়ার প্লাজমোডিয়াম)।",
        "references": [
          "ref-hickman-2020"
        ]
      },
      {
        "key": "unicellular_physiology",
        "titleEn": "2. Unicellular Complexity & Functional Organelles",
        "titleBn": "২. এককোষের ভেতরে সমগ্র জীবনের শারীরবৃত্তীয় সংগঠন",
        "order": 2,
        "contentEn": "Despite being single-celled, a protozoan is not homologous to an individual metazoan cell; it is an autonomous, complete organism. Within a solitary plasmalemma, specialized subcellular organelles perform all physiological life functions: cytostome (cellular mouth), cytopyge (cell anus), food vacuoles for intracellular digestion, contractile vacuoles for active hypoosmotic water pumping, and dual macro/micronuclei in ciliates.",
        "contentBn": "এককোষী হওয়া সত্ত্বেও প্রোটোজোয়া বহুকোষী প্রাণীর সাধারণ কোষের মতো নয়; এটি একটি স্বয়ংসম্পূর্ণ জীবদেহ। একটিমাত্র কোষঝিল্লির ভেতর সাইটোস্টোম (মুখ), সাইটোপাইজ (পায়ু), খাদ্য গহ্বর, জলসাম্য নিয়ন্ত্রক সংকোচনশীল গহ্বর এবং সিলিয়েটদের ক্ষেত্রে দ্বৈত নিউক্লিয়াস সমস্ত জটিল কাজ সম্পন্ন করে।",
        "references": [
          "ref-ruppert-2004"
        ]
      },
      {
        "key": "locomotion_types",
        "titleEn": "3. Locomotion Diversity (Pseudopodia, Cilia & Flagella)",
        "titleBn": "৩. চলন অঙ্গাণুর প্রকারভেদ: ক্ষণপদ, সিলিয়া ও ফ্ল্যাজেলা",
        "order": 3,
        "contentEn": "Locomotion reflects four classical functional groupings: 1. Amoeboid: streaming of cytoplasm (ectoplasm and endoplasm) forming temporary blunt lobopodia or slender filopodia (e.g. Amoeba); 2. Flagellated: whip-like undulations of 9+2 microtubular flagella (e.g. Euglena); 3. Ciliated: rhythmic metachronal waves of thousands of coordinated cilia (e.g. Paramecium); 4. Sporozoans: non-motile parasitic stages utilizing apical gliding complexes (e.g. Plasmodium).",
        "contentBn": "চলন অঙ্গের ওপর ভিত্তি করে চারটি প্রধান ধারা: ১. অ্যামিবয়েড: সাইটোপ্লাজমের প্রবাহে ক্ষণপদ তৈরি (যেমন অ্যামিবা); ২. ফ্ল্যাজেলেট: চাবুকের মতো ফ্ল্যাজেলার আন্দোলন (যেমন ইউগ্লিনা); ৩. সিলিয়েট: হাজার হাজার সিলিয়ার সুসংহত ছান্দিক আন্দোলন (যেমন প্যারামেসিয়াম); ৪. স্পোরোজোয়া: চলনহীন পরজীবী যারা হোস্টের কোষে প্রবেশ করে (যেমন ম্যালেরিয়ার প্লাজমোডিয়াম)।",
        "references": [
          "ref-hickman-2020"
        ]
      },
      {
        "key": "medical_ecological",
        "titleEn": "4. Ecological Food Web Roles & Medical Parasitology",
        "titleBn": "৪. খাদ্যজালে ভূমিকা ও মানবদেহে পরজীবী হিসেবে গুরুত্ব",
        "order": 4,
        "contentEn": "Ecologically, protozoans drive the aquatic microbial loop, grazing on bacteria and recycling nitrogen and phosphorus into primary producers. Medically, parasitic protozoans cause devastating global diseases, notably malaria (Plasmodium falciparum and P. vivax transmitted by female Anopheles mosquitoes), amoebic dysentery (Entamoeba histolytica), and leishmaniasis / Kala-azar (Leishmania donovani transmitted by sandflies in South Asia).",
        "contentBn": "পরিবেশে এরা ব্যাকটেরিয়া খেয়ে পুষ্টি চক্র সচল রাখে। চিকিৎসাবিজ্ঞানে বহু মারাত্মক রোগের জন্য পরজীবী প্রোটোজোয়ারা দায়ী: অ্যানোফিলিস মশা বাহিত ম্যালেরিয়া (প্লাজমোডিয়াম), অ্যামিবিক আমাশয় (এন্টঅ্যামিবা হিস্টোলাইটিকা), এবং বেলেমাছি বাহিত কালাজ্বর (লেইশম্যানিয়া ডনোভানি)।",
        "references": [
          "ref-hickman-2020"
        ]
      }
    ]
  }
];
