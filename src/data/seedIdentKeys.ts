import type { IdentificationKey } from '../types/biodiversity';

export const SEED_IDENTIFICATION_KEYS: IdentificationKey[] = [
  {
    "id": "key-global-major-animal-groups",
    "title": "Diagnostic Key to the Major Phyla of Kingdom Animalia",
    "titleBn": "অ্যানিম্যালিয়া জগতের প্রধান পর্বসমূহের শনাক্তকরণ কুঞ্জি",
    "scope": "global",
    "targetTaxonId": "taxon-animalia",
    "majorGroup": "major_groups",
    "taxonScope": "Metazoa (Kingdom Animalia: All Major Animal Phyla)",
    "taxonScopeBn": "মেটাজোয়া (অ্যানিম্যালিয়া জগত: সকল প্রধান প্রাণী পর্ব)",
    "description": "Authoritative dichotomous key distinguishing the primary body plans of animal phyla based on grade of organization, body symmetry, embryonic germ layers, coelom architecture, metamerism, and diagnostic diagnostic features.",
    "descriptionBn": "শারীরিক গঠনমাত্রা, প্রতিসাম্য, ভ্রূণীয় স্তর, সিলোম, খণ্ডকায়ন ও সুনির্দিষ্ট শনাক্তকারী বৈশিষ্ট্যের ওপর ভিত্তি করে প্রাণী জগতের প্রধান পর্বসমূহের প্রামাণ্য কুঞ্জি।",
    "educationalLevel": "introductory",
    "keyType": "dichotomous",
    "sourceReferenceIds": [
      "ref-hickman-2020",
      "ref-ruppert-2004"
    ],
    "verificationStatus": "verified",
    "steps": [
      {
        "id": 1,
        "title": "Tissue Grade of Organization",
        "titleBn": "কলা সংগঠন মাত্রা",
        "character": "Presence or absence of true embryonic tissues and germ layers",
        "characterBn": "প্রকৃত ভ্রূণীয় কলা ও স্তরের উপস্থিতি বা অনুপস্থিতি",
        "couplets": [
          {
            "lead": "Cellular-grade organization without true tissues or germ layers; body asymmetrical or superficial radial; pore-bearing walls with water canal system lined by flagellated collar cells (choanocytes); skeletal framework of calcareous/siliceous spicules and/or spongin fibers.",
            "leadBn": "প্রকৃত কলাবিহীন কোষীয় মাত্রার সংগঠন; অপ্রতিসম বা অগভীর অরীয় দেহ; ছিদ্রাল প্রাচীর ও ফ্লাজেলাযুক্ত চোয়ানোসাইট কোষ দ্বারা গঠিত নালীতন্ত্র; ক্যালসিয়াম/সিলিকা নির্মিত স্পিকিউল বা স্পঞ্জিন কঙ্কাল।",
            "diagnosticFeature": "Cellular grade, choanocytes, pores/oscula, spicule/spongin skeleton",
            "diagnosticFeatureBn": "কোষীয় সংগঠন, চোয়ানোসাইট, অসটিয়া/অস্কুলাম, স্পিকিউল/স্পঞ্জিন",
            "resultType": "taxon",
            "taxonId": "taxon-porifera",
            "rationaleEn": "Resolves to Phylum Porifera (Sponges)",
            "rationaleBn": "পরিফেরা পর্ব (স্পঞ্জ)"
          },
          {
            "lead": "Tissue or organ-system grade of organization; specialized embryonic germ layers formed during gastrulation; distinct mouth and digestive tract (or cavity); nervous and muscular elements present.",
            "leadBn": "কলা বা অঙ্গ-তন্ত্র মাত্রার সংগঠন; গ্যাস্ট্রুলেশনে সুনির্দিষ্ট ভ্রূণীয় স্তর গঠিত; মুখ ও পরিপাক নালী/গহ্বর উপস্থিত; স্নায়ু ও পেশি উপাদান বিদ্যমান।",
            "diagnosticFeature": "Eumetazoan organization with true tissues and symmetry",
            "diagnosticFeatureBn": "ইউমেটাজোয়া সংগঠন, প্রকৃত কলা ও প্রতিসাম্য",
            "resultType": "next_step",
            "nextStepId": 2
          }
        ]
      },
      {
        "id": 2,
        "title": "Primary Symmetry and Germ Layers",
        "titleBn": "প্রাথমিক প্রতিসাম্য ও ভ্রূণস্তর",
        "character": "Body symmetry and germ layer differentiation",
        "characterBn": "শারীরিক প্রতিসাম্য ও ভ্রূণীয় স্তরের বিভাজন",
        "couplets": [
          {
            "lead": "Primary radial or biradial symmetry; diploblastic organization (epidermis and gastrodermis separated by acellular or gelatinous mesoglea); gastrovascular cavity with single oral opening functioning as both mouth and anus.",
            "leadBn": "প্রাথমিক অরীয় বা দ্বি-অরীয় প্রতিসাম্য; দ্বিভ্রূণস্তরী দেহ (মেসোগ্লিয়া দ্বারা পৃথক এপিডার্মিস ও গ্যাস্ট্রোডার্মিস); একক মুখছিদ্রযুক্ত গ্যাস্ট্রোভাস্কুলার গহ্বর।",
            "diagnosticFeature": "Radiata: Diploblastic with gastrovascular cavity",
            "diagnosticFeatureBn": "রেডিয়াটা: মেসোগ্লিয়াযুক্ত দ্বিভ্রূণস্তরী ও গ্যাস্ট্রোভাস্কুলার গহ্বর",
            "resultType": "next_step",
            "nextStepId": 3
          },
          {
            "lead": "Bilateral symmetry (or secondary pentaradial symmetry in adult echinoderms); triploblastic organization with ectoderm, mesoderm, and endoderm; complete gut with mouth and anus (except basal forms); cephalization typically present.",
            "leadBn": "দ্বিপার্শ্বীয় প্রতিসাম্য (অথবা একাইনোডার্মদের প্রাপ্তবয়স্ক পঞ্চ-অরীয় প্রতিসাম্য); ত্রিভ্রূণস্তরী দেহ; মুখ ও পায়ুযুক্ত সম্পূর্ণ পরিপাক নালী; মস্তকীভবন বিদ্যমান।",
            "diagnosticFeature": "Bilateria: Triploblastic with cephalization",
            "diagnosticFeatureBn": "বাইলেটেরিয়া: ত্রিভ্রূণস্তরী ও মস্তকীভবন",
            "resultType": "next_step",
            "nextStepId": 4
          }
        ]
      },
      {
        "id": 3,
        "title": "Radiate Phyla: Cnidocytes vs Comb Rows",
        "titleBn": "রেডিয়াটা পর্বসমূহ: নিডোসাইট বনাম কম্ব প্লেট",
        "character": "Specialized stinging organelles (cnidocytes) vs ciliated comb plates (ctenes)",
        "characterBn": "দংশক অঙ্গাণু (নিডোসাইট) বনাম সিলিয়াযুক্ত কম্ব প্লেট (টিন)",
        "couplets": [
          {
            "lead": "Tentacles equipped with specialized stinging cells (cnidocytes containing nematocysts); polymorphic life cycles frequently exhibiting sessile polyp and/or free-swimming medusa stages; no ciliary comb plates.",
            "leadBn": "নেমাটোসিস্টযুক্ত নিডোসাইট বা দংশক কোষ সম্বলিত কর্ষিকা; পলিপ বা মেডুসা দশাবিশিষ্ট বহুরূপী জীবনচক্র; সিলিয়ারি কম্ব প্লেট অনুপস্থিত।",
            "diagnosticFeature": "Cnidocytes containing nematocysts, polyp/medusa body forms",
            "diagnosticFeatureBn": "নিডোসাইট, নেমাটোসিস্ট, পলিপ/মেডুসা দেহ",
            "resultType": "taxon",
            "taxonId": "taxon-cnidaria",
            "rationaleEn": "Resolves to Phylum Cnidaria (Hydras, Jellyfishes, Anemones, Corals)",
            "rationaleBn": "নিডারিয়া পর্ব (জেলিফিশ, প্রবাল, হাইড্রা)"
          },
          {
            "lead": "Body transparent and gelatinous; locomotion propelled by 8 longitudinal meridional rows of ciliated comb plates (ctenes); tentacles equipped with adhesive colloblasts (lasso cells) rather than stinging nematocysts.",
            "leadBn": "স্বচ্ছ জেলিসদৃশ দেহ; ৮টি অনুদৈর্ঘ্য সিলিয়াযুক্ত চিরুনি প্লেট (টিন) দ্বারা চলন; আঠালো কলোব্লাস্ট কোষযুক্ত কর্ষিকা, নিডোসাইট অনুপস্থিত।",
            "diagnosticFeature": "8 ciliated comb plates (ctenes), colloblasts, biradial symmetry",
            "diagnosticFeatureBn": "৮টি সিলিয়াযুক্ত কম্ব প্লেট, কলোব্লাস্ট, দ্বি-অরীয় প্রতিসাম্য",
            "resultType": "taxon",
            "taxonId": "taxon-ctenophora",
            "rationaleEn": "Resolves to Phylum Ctenophora (Comb jellies)",
            "rationaleBn": "টিনোফোরা পর্ব (কম্ব জেলি)"
          }
        ]
      },
      {
        "id": 4,
        "title": "Adult Symmetry and Water Vascular System",
        "titleBn": "প্রাপ্তবয়স্ক প্রতিসাম্য ও পানি সংবহনতন্ত্র",
        "character": "Secondary pentaradial symmetry and ambulacral system vs persistent bilateral body",
        "characterBn": "দ্বিতীয়ক পঞ্চ-অরীয় প্রতিসাম্য ও অ্যাম্বুলাক্রাল তন্ত্র বনাম দ্বিপার্শ্বীয় দেহ",
        "couplets": [
          {
            "lead": "Adult with secondary pentamerous (pentaradial) symmetry (larvae strictly bilateral); coelomic water vascular system operating hydraulic tube feet (podia) through ambulacral grooves; mesodermal endoskeleton composed of calcareous ossicles.",
            "leadBn": "প্রাপ্তবয়স্ক অবস্থায় দ্বিতীয়ক পঞ্চ-অরীয় প্রতিসাম্য (লার্ভা দ্বিপার্শ্বীয়); হাইড্রোলিক নালিপদ পরিচালনাকারী পানি সংবহনতন্ত্র; ক্যালসিয়াম নির্মিত মেসোডার্মাল অসিকেল কঙ্কাল।",
            "diagnosticFeature": "Pentaradial symmetry, water vascular system with tube feet, calcareous ossicles",
            "diagnosticFeatureBn": "পঞ্চ-অরীয় প্রতিসাম্য, নালিপদযুক্ত পানি সংবহনতন্ত্র, অসিকেল",
            "resultType": "taxon",
            "taxonId": "taxon-echinodermata",
            "rationaleEn": "Resolves to Phylum Echinodermata (Sea stars, Urchins, Sea cucumbers)",
            "rationaleBn": "একাইনোডার্মাটা পর্ব (তারা মাছ, সমুদ্র শসা, সমুদ্র আর্চিন)"
          },
          {
            "lead": "Persistent bilateral symmetry in adult; no water vascular system or hydraulic tube feet; body organized along an anteroposterior axis.",
            "leadBn": "প্রাপ্তবয়স্কদের ক্ষেত্রেও স্থায়ী দ্বিপার্শ্বীয় প্রতিসাম্য; পানি সংবহনতন্ত্র নেই; সম্মুখ-পশ্চাৎ অক্ষ বরাবর সুসংগঠিত দেহ।",
            "diagnosticFeature": "Persistent bilateral body plan",
            "diagnosticFeatureBn": "স্থায়ী দ্বিপার্শ্বীয় দেহ কাঠামো",
            "resultType": "next_step",
            "nextStepId": 5
          }
        ]
      },
      {
        "id": 5,
        "title": "Mantle and Shell vs Segmented Body",
        "titleBn": "ম্যান্টল ও খোলস বনাম খণ্ডায়িত দেহ",
        "character": "Mantle secreting calcareous shell vs metamerically segmented body",
        "characterBn": "খোলস ক্ষরণকারী ম্যান্টল বনাম মেটামেরিক খণ্ডায়ন",
        "couplets": [
          {
            "lead": "Soft, typically unsegmented body divided into muscular head-foot and visceral mass; dorsal body wall formed into a mantle (pallium) secreting a calcareous shell or enclosing a mantle cavity with ctenidia; rasping radula typically present.",
            "leadBn": "নরম অখণ্ডায়িত দেহ যা পেশিবহুল পদ ও ভিসেরাল ভরে বিভক্ত; ম্যান্টল দ্বারা ক্ষরিত ক্যালসিয়াম খোলস বা ম্যান্টল গহ্বর; পরিপাকে অনন্য র্যাডুলা উপস্থিত।",
            "diagnosticFeature": "Mantle, calcareous shell, muscular foot, radula",
            "diagnosticFeatureBn": "ম্যান্টল, ক্যালসিয়াম খোলস, পেশিবহুল পদ, র্যাডুলা",
            "resultType": "taxon",
            "taxonId": "taxon-mollusca",
            "rationaleEn": "Resolves to Phylum Mollusca (Snails, Clams, Squids, Chitons)",
            "rationaleBn": "মলাস্কা পর্ব (শামুক, ঝিনুক, অক্টোপাস, কাইটোন)"
          },
          {
            "lead": "Body segmented (metameric) along anteroposterior axis OR with jointed cuticular appendages; mantle and molluscan radula absent.",
            "leadBn": "অনুদৈর্ঘ্য অক্ষ বরাবর মেটামেরিক খণ্ডায়িত দেহ অথবা সন্ধিযুক্ত উপাঙ্গবিশিষ্ট; ম্যান্টল ও র্যাডুলা অনুপস্থিত।",
            "diagnosticFeature": "Segmented body plan or jointed appendages",
            "diagnosticFeatureBn": "খণ্ডায়িত দেহ বা সন্ধিযুক্ত উপাঙ্গ",
            "resultType": "next_step",
            "nextStepId": 6
          }
        ]
      },
      {
        "id": 6,
        "title": "Exoskeleton and Jointed Appendages",
        "titleBn": "বহিঃকঙ্কাল ও সন্ধিযুক্ত উপাঙ্গ",
        "character": "Jointed appendages with chitinous exoskeleton vs hydrostatic annelid segmentation",
        "characterBn": "কাইটিনময় বহিঃকঙ্কাল ও সন্ধিযুক্ত উপাঙ্গ বনাম হাইড্রোস্ট্যাটিক অ্যানিলিড খণ্ডায়ন",
        "couplets": [
          {
            "lead": "Jointed, paired appendages; body enclosed in a rigid or flexible cuticular exoskeleton composed of chitin and proteins (often mineralized) requiring periodic ecdysis (molting); tagmatized into distinct regions (head, thorax, abdomen).",
            "leadBn": "সন্ধিযুক্ত জোড় উপাঙ্গ; কাইটিন ও প্রোটিন নির্মিত শক্ত বহিঃকঙ্কাল যা নির্দিষ্ট সময় পর পর মোচিত হয় (একডাইসিস); ট্যাগমাটায়িত দেহ (মস্তক, বক্ষ, উদর)।",
            "diagnosticFeature": "Jointed appendages, chitinous exoskeleton, ecdysis, tagmatization",
            "diagnosticFeatureBn": "সন্ধিযুক্ত উপাঙ্গ, কাইটিন বহিঃকঙ্কাল, নির্মোচন, ট্যাগমাটাইজেশন",
            "resultType": "taxon",
            "taxonId": "taxon-arthropoda",
            "rationaleEn": "Resolves to Phylum Arthropoda (Crustaceans, Insects, Arachnids, Centipedes)",
            "rationaleBn": "আর্থ্রোপোডা পর্ব (পতঙ্গ, চিংড়ি, কাঁকড়া, মাকড়সা)"
          },
          {
            "lead": "Appendages unjointed or absent; body without rigid chitinous exoskeleton undergoing ecdysis.",
            "leadBn": "সন্ধিহীন উপাঙ্গ বা উপাঙ্গ অনুপস্থিত; একডাইসিস প্রক্রিয়ার অনমনীয় কাইটিন বহিঃকঙ্কাল নেই।",
            "diagnosticFeature": "Non-arthropod metameric or chordate body plan",
            "diagnosticFeatureBn": "নন-আর্থ্রোপোড মেটামেরিক বা কর্ডেট কাঠামো",
            "resultType": "next_step",
            "nextStepId": 7
          }
        ]
      },
      {
        "id": 7,
        "title": "Annelid Metamerism vs Chordate Characteristics",
        "titleBn": "অ্যানিলিড খণ্ডায়ন বনাম কর্ডাটার বৈশিষ্ট্য",
        "character": "Hydrostatic metameric coelom with chaetae vs dorsal notochord and hollow nerve cord",
        "characterBn": "সিটিযুক্ত হাইড্রোস্ট্যাটিক সিলোমীয় খণ্ডায়ন বনাম পৃষ্ঠীয় নটোকর্ড ও ফাঁপা স্নায়ুরজ্জু",
        "couplets": [
          {
            "lead": "True metameric segmentation divided internally by transverse septa; coelomic fluid acts as hydrostatic skeleton; chitinous setae/chaetae or suckers present; ventral double solid nerve cord; closed circulatory system; no notochord.",
            "leadBn": "প্রকৃত মেটামেরিক খণ্ডায়ন যা ভেতরের দিকে সেপটা দ্বারা বিভক্ত; তরলপূর্ণ সিলোমীয় হাইড্রোস্ট্যাটিক কঙ্কাল; কাইটিনময় সিটি বা চোষক উপস্থিত; অঙ্কীয় নিরেট স্নায়ুরজ্জু; বদ্ধ রক্ত সংবহন; নটোকর্ড নেই।",
            "diagnosticFeature": "Metameric coelomate body, chitinous setae/chaetae, hydrostatic skeleton",
            "diagnosticFeatureBn": "মেটামেরিক সিলোমেট দেহ, কাইটিনময় সিটি, হাইড্রোস্ট্যাটিক কঙ্কাল",
            "resultType": "taxon",
            "taxonId": "taxon-annelida-marine",
            "rationaleEn": "Resolves to Phylum Annelida (Segmented worms: Earthworms, Marine bristle worms, Leeches)",
            "rationaleBn": "অ্যানিলিডা পর্ব (কেঁচো, জোঁক, নেরিস)"
          },
          {
            "lead": "Possessing at some developmental stage: dorsal longitudinal stiffening notochord, dorsal hollow tubular nerve cord, pharyngeal gill slits or clefts, endostyle (or thyroid gland), and a post-anal muscular tail.",
            "leadBn": "জীবনের যেকোনো দশায় উপস্থিত: পৃষ্ঠীয় নটোকর্ড, পৃষ্ঠীয় ফাঁপা নলাকার স্নায়ুরজ্জু, গলবিলীয় ফুলকা রন্ধ্র, এন্ডোস্টাইল (বা থাইরয়েড গ্রন্থি) ও পায়ুপশ্চাৎ পেশিবহুল লেজ।",
            "diagnosticFeature": "Notochord, dorsal hollow nerve cord, pharyngeal clefts, post-anal tail",
            "diagnosticFeatureBn": "নটোকর্ড, পৃষ্ঠীয় ফাঁপা স্নায়ুরজ্জু, গলবিলীয় ফুলকা রন্ধ্র, পায়ুপশ্চাৎ লেজ",
            "resultType": "taxon",
            "taxonId": "taxon-chordata",
            "rationaleEn": "Resolves to Phylum Chordata (Tunicates, Lancelets, Vertebrates)",
            "rationaleBn": "কর্ডাটা পর্ব (টিউনিক্যাটা, ল্যান্সলেট, মেরুদণ্ডী প্রাণী)"
          }
        ]
      }
    ]
  },
  {
    "id": "key-global-vertebrate-classes",
    "title": "Diagnostic Key to the Classes of Subphylum Vertebrata",
    "titleBn": "ভার্টিব্রাটা (মেরুদণ্ডী) উপপর্বের শ্রেণিসমূহের শনাক্তকরণ কুঞ্জি",
    "scope": "global",
    "targetTaxonId": "taxon-chordata",
    "majorGroup": "vertebrates",
    "taxonScope": "Vertebrata (Agnatha, Chondrichthyes, Osteichthyes, Amphibia, Reptilia, Aves, Mammalia)",
    "taxonScopeBn": "ভার্টিব্রাটা (অ্যাগনাথা, তরুণাস্থিময় মাছ, অস্থিময় মাছ, উভচর, সরীসৃপ, পাখি, স্তন্যপায়ী)",
    "description": "Systematic morphological key differentiating the major vertebrate classes based on jaw architecture, cranial anatomy, skeletal composition, integumentary appendages, and amniotic reproduction.",
    "descriptionBn": "চোয়ালের গঠন, খুলির অ্যানাটমি, কঙ্কালের প্রকৃতি, ত্বকের উপাদান ও প্রজননের ভিত্তিতে মেরুদণ্ডী প্রাণীদের প্রধান শ্রেণিসমূহের শনাক্তকরণ কুঞ্জি।",
    "educationalLevel": "intermediate",
    "keyType": "dichotomous",
    "sourceReferenceIds": [
      "ref-kardong-2018",
      "ref-hickman-2020"
    ],
    "verificationStatus": "verified",
    "steps": [
      {
        "id": 1,
        "title": "Jaw Architecture (Agnatha vs Gnathostomata)",
        "titleBn": "চোয়ালের গঠন (অ্যাগনাথা বনাম ন্যাথোস্টোমাটা)",
        "character": "Presence or absence of articulating jaws",
        "characterBn": "সন্ধিযুক্ত চোয়ালের উপস্থিতি বা অনুপস্থিতি",
        "couplets": [
          {
            "lead": "Jaws absent; mouth round, suctorial, or slit-like without articulating mandibles; paired pectoral and pelvic fins completely absent; eel-like cylindrical body; cartilaginous or rudimentary cranium.",
            "leadBn": "প্রকৃত চোয়াল অনুপস্থিত; মুখ গোল, চোষক বা ফাটলের মতো; বক্ষ ও শ্রোণী পাখনা সম্পূর্ণ অনুপস্থিত; নলাকার ইল-সদৃশ দেহ; তরুণাস্থিময় খুলি।",
            "diagnosticFeature": "Jawless agnathan craniates without paired fins",
            "diagnosticFeatureBn": "চোয়ালবিহীন অ্যাগনাথা ও জোড় পাখনা অনুপস্থিত",
            "resultType": "next_step",
            "nextStepId": 2
          },
          {
            "lead": "True articulating jaws derived from anterior visceral arches present; paired appendages (pectoral and pelvic fins or tetrapod limbs) present; vertebral column well-developed.",
            "leadBn": "চোয়াল উপস্থিত; জোড় উপাঙ্গ (বক্ষ ও শ্রোণী পাখনা বা টেট্রাপড পদ) বিদ্যমান; সুগঠিত মেরুদণ্ড।",
            "diagnosticFeature": "Jawed gnathostome vertebrates",
            "diagnosticFeatureBn": "চোয়ালযুক্ত ন্যাথোস্টোমাটা মেরুদণ্ডী",
            "resultType": "next_step",
            "nextStepId": 3
          }
        ]
      },
      {
        "id": 2,
        "title": "Agnathan Lineages: Hagfishes vs Lampreys",
        "titleBn": "অ্যাগনাথা শাখা: হ্যাগফিশ বনাম ল্যাম্প্রে",
        "character": "Tentacles and slime pores vs oral sucker disc and dorsal eyes",
        "characterBn": "কর্ষিকা ও শ্লেষ্মা ছিদ্র বনাম মৌখিক চোষক চাকতি ও উন্নত চোখ",
        "couplets": [
          {
            "lead": "Terminal mouth surrounded by 3-4 pairs of sensory barbels; degenerate eyes without lens; series of lateral slime pores exuding copious fibrous mucus; strictly marine scavengers.",
            "leadBn": "প্রান্তীয় মুখ ৩-৪ জোড়া সংবেদী কর্ষিকা দ্বারা বেষ্টিত; লেন্সবিহীন অন্ধ চোখ; প্রচুর শ্লেষ্মা নির্গমনকারী পার্শ্বীয় শ্লেষ্মা ছিদ্র; সামুদ্রিক শিকারি/মৃতভোজী।",
            "diagnosticFeature": "Myxini: Slime pores, sensory barbels, no dorsal fin",
            "diagnosticFeatureBn": "মিক্সিনি: শ্লেষ্মা ছিদ্র, কর্ষিকা, পৃষ্ঠ পাখনা নেই",
            "resultType": "taxon",
            "taxonId": "taxon-class-myxini",
            "rationaleEn": "Resolves to Class Myxini (Hagfishes)",
            "rationaleBn": "শ্রেণি মিক্সিনি (হ্যাগফিশ)"
          },
          {
            "lead": "Circular subterminal funnel-like oral sucker disc lined with cornified epidermal teeth; well-developed dorsal eyes; 7 pairs of lateral pore-like gill openings; dorsal fin present.",
            "leadBn": "কেরাটিনময় দাঁতযুক্ত বৃত্তাকার মৌখিক চোষক চাকতি; উন্নত চোখ; ৭ জোড়া গোল ফুলকা ছিদ্র; পৃষ্ঠ পাখনা বিদ্যমান।",
            "diagnosticFeature": "Petromyzonti: Oral sucker disc with horny teeth, 7 gill pores",
            "diagnosticFeatureBn": "পেট্রমাইজন্টি: চোষক চাকতি, শিং-দাঁত, ৭ জোড়া ফুলকা ছিদ্র",
            "resultType": "taxon",
            "taxonId": "taxon-class-petromyzonti",
            "rationaleEn": "Resolves to Class Petromyzonti (Lampreys)",
            "rationaleBn": "শ্রেণি পেট্রমাইজন্টি (ল্যাম্প্রে)"
          }
        ]
      },
      {
        "id": 3,
        "title": "Aquatic Fin-Breathers vs Terrestrial Tetrapods",
        "titleBn": "জলজ পাখনাযুক্ত মাছ বনাম চতুষ্পদী টেট্রাপড",
        "character": "Median and paired fins with gills vs chiridium limbs with digits",
        "characterBn": "ফুলকা ও পাখনাযুক্ত মাছ বনাম আঙুলযুক্ত চতুষ্পদী পদ",
        "couplets": [
          {
            "lead": "Primary aquatic vertebrates; locomotion propelled by median and paired rayed or lobed fins; internal branchial gills functioning throughout life for gas exchange; skin covered with scales or naked.",
            "leadBn": "প্রাথমিক জলজ মেরুদণ্ডী; জোড় ও বিজোড় পাখনার সাহায্যে চলন; আজীবন কার্যকর ফুলকার সাহায্যে শ্বাসকার্য; ত্বক আঁইশযুক্ত বা নগ্ন।",
            "diagnosticFeature": "Pisces: Aquatic respiration with gills and fins",
            "diagnosticFeatureBn": "মাছ: ফুলকা ও পাখনাবিশিষ্ট জলজ জীবন",
            "resultType": "next_step",
            "nextStepId": 4
          },
          {
            "lead": "Tetrapods; paired appendages modified as walking, leaping, flying, or swimming limbs with digits (chiridium, secondarily lost in snakes and caecilians); lungs primary respiratory organs in adults.",
            "leadBn": "টেট্রাপড; জোড় উপাঙ্গ অঙ্গুলিযুক্ত পদে রূপান্তরিত (সাপ ও সিসিলিয়ানে অপ্রধানভাবে বিলুপ্ত); প্রাপ্তবয়স্কদের মূল শ্বাস অঙ্গ ফুসফুস।",
            "diagnosticFeature": "Tetrapoda: Chiridium limbs with digits, lungs",
            "diagnosticFeatureBn": "টেট্রাপডা: চার পদ, ফুসফুস",
            "resultType": "next_step",
            "nextStepId": 6
          }
        ]
      },
      {
        "id": 4,
        "title": "Cartilaginous vs Bony Fishes",
        "titleBn": "তরুণাস্থিময় বনাম অস্থিময় মাছ",
        "character": "Endoskeleton composition, gill slits, and scale type",
        "characterBn": "কঙ্কালের উপাদান, ফুলকা রন্ধ্র ও আঁইশের ধরন",
        "couplets": [
          {
            "lead": "Endoskeleton entirely cartilaginous (often calcified but never true bone); 5-7 pairs of separate lateral or ventral gill slits (or single opercular slit in holocephalans); placoid scales (dermal denticles); males possess pelvic claspers for internal fertilization.",
            "leadBn": "সম্পূর্ণ তরুণাস্থিময় কঙ্কাল; ৫-৭ জোড়া পৃথক ফুলকা রন্ধ্র; প্লাকয়েড আঁইশ (ডার্মাল ডেনটিকেল); পুরুষে অভ্যন্তরীণ নিষেকের জন্য ক্লাস্পার বিদ্যমান।",
            "diagnosticFeature": "Chondrichthyes: Cartilaginous skeleton, placoid scales, claspers",
            "diagnosticFeatureBn": "কনড্রিকথিস: তরুণাস্থিময় কঙ্কাল, প্লাকয়েড আঁইশ, ক্লাস্পার",
            "resultType": "taxon",
            "taxonId": "taxon-chondrichthyes",
            "rationaleEn": "Resolves to Class Chondrichthyes (Sharks, Rays, Chimaeras)",
            "rationaleBn": "শ্রেণি কনড্রিকথিস (হাঙর, শাপলাপাতা মাছ, শিমেরা)"
          },
          {
            "lead": "Endoskeleton predominantly ossified with true cellular or acellular bone; single gill opening on each side covered by a bony operculum; swim bladder or lungs typically present; scales cycloid, ctenoid, ganoid, or absent.",
            "leadBn": "অস্থিময় কঙ্কাল; প্রতিপাশে অস্থিময় অপারকুলাম বা কানকো দ্বারা আবৃত একক ফুলকা ছিদ্র; পটকা বা ফুসফুস উপস্থিত; সাইক্লয়েড/টিনয়েড/গ্যানয়েড আঁইশ।",
            "diagnosticFeature": "Osteichthyes: Bony skeleton, opercular gill cover, swim bladder",
            "diagnosticFeatureBn": "অস্টিকথিস: অস্থিময় কঙ্কাল, কানকো, পটকা",
            "resultType": "next_step",
            "nextStepId": 5
          }
        ]
      },
      {
        "id": 5,
        "title": "Ray-Finned vs Lobe-Finned Bony Fishes",
        "titleBn": "রশ্মিময় বনাম মাংসল-পাখনাযুক্ত অস্থিময় মাছ",
        "character": "Fin ray lepidotrichia vs muscular fin lobes with internal bony axis",
        "characterBn": "পাখনা রশ্মি (লেপিডোট্রিকিয়া) বনাম অভ্যন্তরীণ অস্থিযুক্ত মাংসল পাখনা",
        "couplets": [
          {
            "lead": "Fins supported primarily by webbed flexible horny or bony lepidotrichia (fin rays) extending directly from the body wall without a muscular fleshy basal lobe.",
            "leadBn": "পাখনা সরাসরি দেহপ্রাচীর থেকে বিস্তৃত সূক্ষ্ম রশ্মি (লেপিডোট্রিকিয়া) দ্বারা সমর্থিত; কোনো পেশিবহুল মাংসল গোড়া নেই।",
            "diagnosticFeature": "Actinopterygii: Ray-finned bony fishes",
            "diagnosticFeatureBn": "অ্যাকটিনোপ্টেরিগি: রশ্মিময় পাখনাযুক্ত মাছ",
            "resultType": "taxon",
            "taxonId": "taxon-actinopterygii",
            "rationaleEn": "Resolves to Class Actinopterygii (Ray-finned fishes: Teleosts, Carps, Catfishes, Perches)",
            "rationaleBn": "শ্রেণি অ্যাকটিনোপ্টেরিগি (রশ্মি-পাখনাযুক্ত মাছ)"
          },
          {
            "lead": "Paired fins mounted on fleshy, muscular, scaly lobes articulated with the girdles by a single basal skeletal element (monobasic humerus/femur homolog); cosmoid scales or functional lungs.",
            "leadBn": "মাংসল, পেশিবহুল ও আঁইশযুক্ত গোড়াবিশিষ্ট জোড় পাখনা; একক হিউমেরাস/ফিমার সমসংস্থ অস্থি দ্বারা সংযুক্ত; ফুসফুস বা কসময়েড আঁইশ।",
            "diagnosticFeature": "Sarcopterygii: Lobe-finned fishes (Coelacanths, Lungfishes)",
            "diagnosticFeatureBn": "সারকোপ্টেরিগি: মাংসল পাখনাযুক্ত মাছ (সিলাকান্থ, লাংফিশ)",
            "resultType": "taxon",
            "taxonId": "taxon-sarcopterygii",
            "rationaleEn": "Resolves to Class Sarcopterygii (Lobe-finned fishes)",
            "rationaleBn": "শ্রেণি সারকোপ্টেরিগি (মাংসল পাখনাযুক্ত মাছ)"
          }
        ]
      },
      {
        "id": 6,
        "title": "Amphibians vs Amniotes",
        "titleBn": "উভচর বনাম অ্যামনিওট",
        "character": "Moist glandular skin and anamniotic eggs vs keratinized skin and amniotic egg",
        "characterBn": "ভেজা গ্রন্থিময় ত্বক ও অ্যানঅ্যামনিওটিক ডিম বনাম কেরাটিনযুক্ত ত্বক ও অ্যামনিওটিক ডিম",
        "couplets": [
          {
            "lead": "Skin moist, glandular, permeable, lacking epidermal scales; respiration via skin (cutaneous), buccal pumping, and simple sac-like lungs; anamniotic jelly-coated eggs requiring freshwater; biphasic life history typically with aquatic gill-breathing larva.",
            "leadBn": "ত্বক ভেজা, গ্রন্থিময়, আঁইশহীন ও প্রবেশ্য; ত্বক ও ফুসফুস দিয়ে শ্বাসকার্য; অ্যানঅ্যামনিওটিক জেলিসদৃশ ডিম; জলজ লার্ভা ও রূপান্তর বিশিষ্ট জীবনচক্র।",
            "diagnosticFeature": "Amphibia: Moist scaleless skin, anamniotic eggs, metamorphosis",
            "diagnosticFeatureBn": "অ্যাম্ফিবিয়া: ভেজা গ্রন্থিময় ত্বক, খোসাহীন ডিম, রূপান্তর",
            "resultType": "taxon",
            "taxonId": "taxon-amphibia",
            "rationaleEn": "Resolves to Class Amphibia (Frogs, Salamanders, Caecilians)",
            "rationaleBn": "শ্রেণি অ্যাম্ফিবিয়া (ব্যাঙ, স্যালামান্ডার, সিসিলিয়ান)"
          },
          {
            "lead": "Skin dry, heavily keratinized, covered with scales, scutes, feathers, or hair; amniotic egg with amnion, chorion, allantois, and yolk sac; internal fertilization; fully emancipated from standing water for larval development.",
            "leadBn": "ত্বক শুষ্ক ও কেরাটিনযুক্ত (আঁইশ, স্কুট, পালক বা লোম); খোসাযুক্ত অ্যামনিওটিক ডিম; অভ্যন্তরীণ নিষেক; লার্ভা দশাহীন স্থলজ বিকাশ।",
            "diagnosticFeature": "Amniota: Keratinized integument, amniotic egg",
            "diagnosticFeatureBn": "অ্যামনিওটা: কেরাটিন ত্বক, অ্যামনিওটিক ডিম",
            "resultType": "next_step",
            "nextStepId": 7
          }
        ]
      },
      {
        "id": 7,
        "title": "Reptiles vs Birds and Mammals",
        "titleBn": "সরীসৃপ বনাম পাখি ও স্তন্যপায়ী",
        "character": "Ectothermy with epidermal scales vs endothermy with feathers or hair",
        "characterBn": "এপিডার্মাল আঁইশযুক্ত শীতলরক্ত বনাম পালক/লোমযুক্ত উষ্ণরক্ত",
        "couplets": [
          {
            "lead": "Ectothermic poikilotherms; body covered with dry epidermal keratinized scales or bony osteoderms/scutes; heart 3-chambered (with partial interventricular septum) or 4-chambered in crocodilians; no hair or contour feathers.",
            "leadBn": "শীতলরক্তের এক্টোথার্মিক প্রাণী; ত্বক কেরাটিনযুক্ত এপিডার্মাল আঁইশ বা স্কুট দ্বারা আবৃত; ৩ বা আংশিক ৪-প্রকোষ্ঠী হৃদপিণ্ড; লোম বা পালক নেই।",
            "diagnosticFeature": "Reptilia: Epidermal scales/scutes, ectothermic metabolism",
            "diagnosticFeatureBn": "রেপটিলিয়া: কেরাটিন আঁইশ/স্কুট, শীতলরক্ত",
            "resultType": "taxon",
            "taxonId": "taxon-reptilia",
            "rationaleEn": "Resolves to Class Reptilia (Turtles, Lizards, Snakes, Crocodiles, Tuataras)",
            "rationaleBn": "শ্রেণি রেপটিলিয়া (কাছিম, সাপ, গিরগিটি, কুমির, টুয়াটারা)"
          },
          {
            "lead": "Endothermic homeotherms with elevated metabolic rates; insulating body covering composed of keratinous feathers OR mammalian pelage (hair); complete 4-chambered heart with full systemic/pulmonary separation.",
            "leadBn": "উষ্ণরক্তের এন্ডোথার্মিক প্রাণী; পালক বা লোম দ্বারা আবৃত অন্তরক দেহত্বক; সম্পূর্ণ চার-প্রকোষ্ঠী হৃদপিণ্ড।",
            "diagnosticFeature": "Endotherms with specialized keratin covering (feathers or hair)",
            "diagnosticFeatureBn": "উষ্ণরক্ত, বিশেষায়িত পালক বা লোম",
            "resultType": "next_step",
            "nextStepId": 8
          }
        ]
      },
      {
        "id": 8,
        "title": "Birds vs Mammals",
        "titleBn": "পাখি বনাম স্তন্যপায়ী",
        "character": "Feathers and toothless bill vs mammary glands and hair",
        "characterBn": "পালক ও চঞ্চু বনাম স্তনগ্রন্থি ও লোম",
        "couplets": [
          {
            "lead": "Forelimbs modified as wings; body covered with contour, down, and flight feathers; toothless keratinous bill/beak; hollow pneumatic bones with air sacs connected to rigid flow-through lungs; strictly oviparous.",
            "leadBn": "অগ্রপদ ডানায় রূপান্তরিত; দেহ পালক দ্বারা আবৃত; দাঁতহীন কেরাটিনময় চঞ্চু; বায়ুথলিযুক্ত ফাঁপা অস্থি; সম্পূর্ণ ডিম্বজ।",
            "diagnosticFeature": "Aves: Feathers, wings, toothless bill, pneumatic skeleton",
            "diagnosticFeatureBn": "এভিস: পালক, ডানা, চঞ্চু, ফাঁপা অস্থি",
            "resultType": "taxon",
            "taxonId": "taxon-aves",
            "rationaleEn": "Resolves to Class Aves (Birds)",
            "rationaleBn": "শ্রেণি এভিস (পাখি)"
          },
          {
            "lead": "Females nourish young with milk secreted by mammary glands; body typically insulated by hair/fur (pelage); lower jaw consisting of a single dentary bone articulating with the squamosal; three middle ear ossicles (malleus, incus, stapes).",
            "leadBn": "মাতৃস্তনগ্রন্থি থেকে ক্ষরিত দুগ্ধ পান করে শাবক লালিত হয়; দেহ লোম দ্বারা আবৃত; চোয়াল একক ডেন্টারি অস্থি দ্বারা গঠিত; মধ্যকর্ণে তিনটি ক্ষুদ্রাস্থি (ম্যালিয়াস, ইনকাস, স্টেপিস)।",
            "diagnosticFeature": "Mammalia: Mammary glands, hair, single dentary, 3 ear ossicles",
            "diagnosticFeatureBn": "ম্যামালিয়া: স্তনগ্রন্থি, লোম, ৩টি মধ্যকর্ণ অস্থি",
            "resultType": "taxon",
            "taxonId": "taxon-mammalia",
            "rationaleEn": "Resolves to Class Mammalia (Mammals)",
            "rationaleBn": "শ্রেণি ম্যামালিয়া (স্তন্যপায়ী প্রাণী)"
          }
        ]
      }
    ]
  },
  {
    "id": "key-global-fish-lineages",
    "title": "Diagnostic Morphological Key to Major Global Fish Lineages & Orders",
    "titleBn": "বিশ্বের প্রধান মৎস্য বর্গসমূহের অঙ্গসংস্থানিক শনাক্তকরণ কুঞ্জি",
    "scope": "global",
    "targetTaxonId": "taxon-fishes",
    "majorGroup": "fishes",
    "taxonScope": "Pisces (73-Order Canonical Fish Framework: Jawless, Cartilaginous, Lobe-finned, Bony fishes)",
    "taxonScopeBn": "মৎস্যসম্পদ (৭৩-বর্গীয় ক্যানোনিকাল মৎস্য কাঠামো: চোয়ালহীন, তরুণাস্থিময়, মাংসল-পাখনা ও অস্থিময় মাছ)",
    "description": "Systematic diagnostic key navigating the 73 canonical fish orders of BiotaElite. Distinguishes hagfishes, lampreys, chimaeras, sharks, rays, ancient ganoid fishes, and major teleost orders through validated anatomical characters.",
    "descriptionBn": "বায়োটাএলিটের ৭৩টি ক্যানোনিকাল মৎস্য বর্গের প্রামাণ্য অঙ্গসংস্থানিক কুঞ্জি। চোয়ালহীন, হাঙ্গর, শাপলাপাতা মাছ ও প্রধান অস্থিময় মৎস্য বর্গসমূহের নির্ভরযোগ্য শনাক্তকরণ।",
    "educationalLevel": "advanced",
    "keyType": "dichotomous",
    "sourceReferenceIds": [
      "ref-nelson-2016",
      "ref-fishbase-2024",
      "ref-eschmeyer-2024"
    ],
    "verificationStatus": "verified",
    "steps": [
      {
        "id": 1,
        "title": "Jaws and Skeletal Material",
        "titleBn": "চোয়াল ও কঙ্কালের উপাদান",
        "character": "Jaw presence and cartilaginous vs ossified skeleton",
        "characterBn": "চোয়াল এবং তরুণাস্থিময় বনাম অস্থিময় কঙ্কাল",
        "couplets": [
          {
            "lead": "Jaws absent; cylindrical eel-like body without paired fins; pore-like or rounded gill apertures.",
            "leadBn": "চোয়াল অনুপস্থিত; জোড় পাখনা বিহীন নলাকার ইল-সদৃশ দেহ; ছিদ্রাল ফুলকা রন্ধ্র।",
            "diagnosticFeature": "Agnatha: Jawless craniates",
            "diagnosticFeatureBn": "অ্যাগনাথা: চোয়ালবিহীন মাছ",
            "resultType": "next_step",
            "nextStepId": 2
          },
          {
            "lead": "Articulating jaws present; paired fins (pectoral and pelvic) present.",
            "leadBn": "সন্ধিযুক্ত চোয়াল উপস্থিত; জোড় বক্ষ ও শ্রোণী পাখনা বিদ্যমান।",
            "diagnosticFeature": "Gnathostomata: Jawed fishes",
            "diagnosticFeatureBn": "ন্যাথোস্টোমাটা: চোয়ালযুক্ত মাছ",
            "resultType": "next_step",
            "nextStepId": 3
          }
        ]
      },
      {
        "id": 2,
        "title": "Jawless Orders: Myxiniformes vs Petromyzontiformes",
        "titleBn": "চোয়ালহীন বর্গ: মিক্সিনিফর্মিস বনাম পেট্রমাইজন্টিফর্মিস",
        "character": "Slime pores and tentacles vs circular tooth-bearing sucking disc",
        "characterBn": "শ্লেষ্মা ছিদ্র ও কর্ষিকা বনাম দাঁতযুক্ত চোষক চাকতি",
        "couplets": [
          {
            "lead": "Mouth surrounded by 6 barbels; lateral row of mucus slime pores; strictly marine.",
            "leadBn": "মুখ ৬টি কর্ষিকা দ্বারা বেষ্টিত; পার্শ্বীয় শ্লেষ্মা ছিদ্র বিদ্যমান; সামুদ্রিক।",
            "diagnosticFeature": "Myxine glutinosa — Atlantic hagfish",
            "diagnosticFeatureBn": "মিক্সিন গ্লুটিনোসা — আটলান্টিক হ্যাগফিশ",
            "resultType": "species",
            "speciesId": "sp-myxine-glutinosa"
          },
          {
            "lead": "Circular sucking disc lined with sharp cornified teeth; 7 external gill pores.",
            "leadBn": "তীক্ষ্ণ দাঁতযুক্ত বৃত্তাকার চোষক চাকতি; ৭টি বহিঃস্থ ফুলকা ছিদ্র।",
            "diagnosticFeature": "Petromyzon marinus — Sea lamprey",
            "diagnosticFeatureBn": "পেট্রমাইজন মারিনাস — সি ল্যাম্প্রে",
            "resultType": "species",
            "speciesId": "sp-petromyzon-marinus"
          }
        ]
      },
      {
        "id": 3,
        "title": "Cartilaginous vs Bony Fishes",
        "titleBn": "তরুণাস্থিময় বনাম অস্থিময় মাছ",
        "character": "Cartilaginous skeleton with placoid scales vs bony skeleton with opercular flap",
        "characterBn": "প্লাকয়েড আঁইশযুক্ত তরুণাস্থিময় কঙ্কাল বনাম কানকোযুক্ত অস্থিময় কঙ্কাল",
        "couplets": [
          {
            "lead": "Endoskeleton cartilaginous; skin with placoid denticles; gill openings 1 to 7 without true bony operculum.",
            "leadBn": "তরুণাস্থিময় কঙ্কাল; প্লাকয়েড ডেনটিকেলযুক্ত ত্বক; কানকোহীন ১-৭ জোড়া ফুলকা ছিদ্র।",
            "diagnosticFeature": "Chondrichthyes (Sharks, Rays, Chimaeras)",
            "diagnosticFeatureBn": "কনড্রিকথিস (হাঙর, রে, শিমেরা)",
            "resultType": "next_step",
            "nextStepId": 4
          },
          {
            "lead": "Endoskeleton predominantly bony; single opercular gill opening on each side covered by bony operculum.",
            "leadBn": "অস্থিময় কঙ্কাল; কানকো দ্বারা আবৃত একক ফুলকা ছিদ্র।",
            "diagnosticFeature": "Osteichthyes (Bony fishes: Sarcopterygii & Actinopterygii)",
            "diagnosticFeatureBn": "অস্টিকথিস (অস্থিময় মাছ)",
            "resultType": "next_step",
            "nextStepId": 7
          }
        ]
      },
      {
        "id": 4,
        "title": "Chondrichthyes: Holocephali vs Elasmobranchii",
        "titleBn": "কনড্রিকথিস: হোলোসেফালি বনাম এলাসমোব্রাঞ্চি",
        "character": "Single opercular flap over 4 gill slits vs 5-7 open gill slits",
        "characterBn": "একক চামড়ার কানকো বনাম ৫-৭টি উন্মুক্ত ফুলকা ফাটল",
        "couplets": [
          {
            "lead": "Gill slits covered by a single fleshy opercular flap; upper jaw fused to neurocranium (holostylic); dorsal fin with venomous spine; rat-like elongated tail.",
            "leadBn": "একক চামড়ার কানকো দ্বারা ফুলকা আবৃত; খুলির সাথে জোড়া চোয়াল; বিষাক্ত পৃষ্ঠ কাঁটা ও ইঁদুরের মতো লেজ।",
            "diagnosticFeature": "Chimaeriformes: Chimaera monstrosa (Rabbit fish)",
            "diagnosticFeatureBn": "শিমেরিফর্মিস: শিমেরা মনস্ট্রোসা",
            "resultType": "species",
            "speciesId": "sp-chimaera-monstrosa"
          },
          {
            "lead": "5-7 pairs of open gill slits without operculum; hyostylic jaw suspension; placoid denticles.",
            "leadBn": "৫-৭ জোড়া উন্মুক্ত ফুলকা ছিদ্র; কানকো নেই; প্লাকয়েড আঁইশ।",
            "diagnosticFeature": "Elasmobranchii: Sharks and Rays",
            "diagnosticFeatureBn": "এলাসমোব্রাঞ্চি: হাঙর ও শাপলাপাতা মাছ",
            "resultType": "next_step",
            "nextStepId": 5
          }
        ]
      },
      {
        "id": 5,
        "title": "Elasmobranchs: Lateral Gill Slits (Selachii) vs Ventral Gill Slits (Batoidea)",
        "titleBn": "এলাসমোব্রাঞ্চ: পার্শ্বীয় ফুলকা (হাঙর) বনাম অঙ্কীয় ফুলকা (রে)",
        "character": "Gill slit position and pectoral fin attachment",
        "characterBn": "ফুলকার অবস্থান এবং বক্ষ পাখনার সংযুক্তি",
        "couplets": [
          {
            "lead": "Gill slits located laterally on the sides of the head; pectoral fins free from head; body typically fusiform cylindrical.",
            "leadBn": "মাথার দুই পাশে পার্শ্বীয়ভাবে ফুলকা অবস্থিত; বক্ষ পাখনা মাথা থেকে মুক্ত; নলাকার দেহ।",
            "diagnosticFeature": "Selachii: True Sharks",
            "diagnosticFeatureBn": "সেলাচি: প্রকৃত হাঙর",
            "resultType": "next_step",
            "nextStepId": 6
          },
          {
            "lead": "Gill slits located ventrally on flat underside; pectoral fins enlarged and fused with sides of head forming a disc; body dorsoventrally flattened.",
            "leadBn": "দেহের নিচে অঙ্কীয় দেশে ফুলকা অবস্থিত; বক্ষ পাখনা বড় হয়ে মাথার সাথে যুক্ত হয়ে চাকতি গঠন করেছে; চ্যাপ্টা দেহ।",
            "diagnosticFeature": "Batoidea: Rays, Skates, and Guitarfishes",
            "diagnosticFeatureBn": "ব্যাটোইডিয়া: রে, স্কেট ও গিটারফিশ",
            "resultType": "next_step",
            "nextStepId": 10
          }
        ]
      },
      {
        "id": 6,
        "title": "Diagnostic Shark Orders",
        "titleBn": "প্রধান হাঙর বর্গসমূহ",
        "character": "Anal fin, spine presence, and head shape",
        "characterBn": "পায়ু পাখনা, কাঁটার উপস্থিতি ও মাথার গঠন",
        "couplets": [
          {
            "lead": "Anal fin absent; 5 lateral gill slits; both dorsal fins preceded by a strong sharp spine.",
            "leadBn": "পায়ু পাখনা অনুপস্থিত; ৫টি পার্শ্বীয় ফুলকা ছিদ্র; উভয় পৃষ্ঠ পাখনার সম্মুখে শক্ত কাঁটা।",
            "diagnosticFeature": "Squaliformes: Squalus acanthias (Spiny dogfish)",
            "diagnosticFeatureBn": "স্কোয়ালিফর্মিস: স্কোয়ালাস অ্যাকান্থিয়াস",
            "resultType": "species",
            "speciesId": "sp-squalus-acanthias"
          },
          {
            "lead": "Anal fin present; body dorsoventrally flattened with terminal mouth and wing-like pectoral fins (superficially ray-like, but with lateral gill slits).",
            "leadBn": "পায়ু পাখনা উপস্থিত; দেহ কিছুটা চ্যাপ্টা, প্রান্তীয় মুখ ও ডানার মতো বক্ষ পাখনা (পার্শ্বীয় ফুলকা বিদ্যমান)।",
            "diagnosticFeature": "Squatiniformes: Squatina squatina (Angelshark)",
            "diagnosticFeatureBn": "স্কোয়াটিনিফর্মিস: স্কোয়াটিনা স্কোয়াটিনা",
            "resultType": "species",
            "speciesId": "sp-squatina-squatina"
          },
          {
            "lead": "Anal fin present; dorsal fins with spines; pig-like snout with molariform crushing teeth in rear jaws.",
            "leadBn": "পায়ু পাখনা উপস্থিত; পৃষ্ঠ পাখনার সামনে কাঁটা; পেষণকারী মোলার দাঁত।",
            "diagnosticFeature": "Heterodontiformes: Heterodontus portusjacksoni (Port Jackson shark)",
            "diagnosticFeatureBn": "হেটেরোডন্টিফর্মিস: হেটেরোডন্টাস পোর্টাসজ্যাকসনি",
            "resultType": "species",
            "speciesId": "sp-heterodontus-portusjacksoni"
          },
          {
            "lead": "Anal fin present; dorsal fins spineless; mouth behind eyes; nictitating eyelids present; large triangular serrated teeth.",
            "leadBn": "পায়ু পাখনা উপস্থিত; কাঁটাহীন পৃষ্ঠ পাখনা; চোখের পেছনে মুখ; নিকটিটেটিং পর্দা ও করাতের মতো দাঁত।",
            "diagnosticFeature": "Carcharhiniformes: Galeocerdo cuvier (Tiger shark)",
            "diagnosticFeatureBn": "কার্কারহিনিফর্মিস: গেলিওসার্ডো কুভিয়ের (টাইগার শার্ক)",
            "resultType": "species",
            "speciesId": "sp-galeocerdo-cuvier"
          }
        ]
      },
      {
        "id": 7,
        "title": "Bony Fishes: Lobe-Finned vs Ancient Ray-Finned vs Teleosts",
        "titleBn": "অস্থিময় মাছ: মাংসল পাখনা বনাম প্রাচীন ও আধুনিক টেলিয়স্ট",
        "character": "Fin lobe structure and scale histology",
        "characterBn": "পাখনার গঠন ও আঁইশের প্রকৃতি",
        "couplets": [
          {
            "lead": "Paired fins mounted on fleshy muscular scaly lobes; diphycercal 3-lobed caudal fin; intracranial joint present; deep-sea living fossil.",
            "leadBn": "পেশিবহুল মাংসল গোড়াবিশিষ্ট জোড় পাখনা; তিন খণ্ডযুক্ত লেজ; অন্তঃকরোটি সন্ধি; গভীর সমুদ্রের জীবন্ত জীবাশ্ম।",
            "diagnosticFeature": "Coelacanthiformes: Latimeria chalumnae (Coelacanth)",
            "diagnosticFeatureBn": "সিলাকান্থিফর্মিস: ল্যাটিমেরিয়া চালুমনি",
            "resultType": "species",
            "speciesId": "sp-latimeria-chalumnae"
          },
          {
            "lead": "Paired fins mounted on muscular lobes; functional lungs for air-breathing; aestivates in dried mud cocoons during drought.",
            "leadBn": "মাংসল পাখনা; বায়ুশ্বাসের জন্য ফুসফুস; খরায় কাদার কোকুনে সুপ্তাবস্থা কাটায়।",
            "diagnosticFeature": "Ceratodontiformes: Protopterus annectens (African lungfish)",
            "diagnosticFeatureBn": "সেরাটোডান্টিফর্মিস: প্রোটোপ্টেরাস অ্যানেকটেন্স",
            "resultType": "species",
            "speciesId": "sp-protopterus-annectens"
          },
          {
            "lead": "Dorsal fin divided into 5-18 independent finlets, each with a rigid spine; ganoid rhombic scales; paired lungs; African bichir.",
            "leadBn": "পৃষ্ঠ পাখনা ৫-১৮টি পৃথক ক্ষুদ্র পাখনায় বিভক্ত; শক্ত রম্বিক গ্যানয়েড আঁইশ; ফুসফুস বিদ্যমান।",
            "diagnosticFeature": "Polypteriformes: Polypterus senegalus (Senegal bichir)",
            "diagnosticFeatureBn": "পলিপ্টেরিফর্মিস: পলিপ্টেরাস সেনেগালাস",
            "resultType": "species",
            "speciesId": "sp-polypterus-senegalus"
          },
          {
            "lead": "Body with 5 longitudinal rows of sharp bony scutes; strongly heterocercal caudal fin; ventral mouth preceded by 4 tactile barbels.",
            "leadBn": "৫টি অনুদৈর্ঘ্য ধারালো অস্থি-স্কুটের সারি; হেটেরোসার্কাল লেজ; মুখের সামনে ৪টি সংবেদী কর্ষিকা।",
            "diagnosticFeature": "Acipenseriformes: Acipenser sturio (European sturgeon)",
            "diagnosticFeatureBn": "অ্যাসিপেনসারিফর্মিস: অ্যাসিপেনসার স্টুরিয়ো",
            "resultType": "species",
            "speciesId": "sp-acipenser-sturio"
          },
          {
            "lead": "Teleostei: Advanced bony fishes with homocercal tail, mobile premaxilla, cycloid/ctenoid scales or naked skin.",
            "leadBn": "টেলিয়স্টেই: হোমোসার্কাল লেজ, চলনক্ষম প্রি-ম্যাক্সিলা এবং সাইক্লয়েড/টিনয়েড আঁইশযুক্ত আধুনিক মাছ।",
            "diagnosticFeature": "Teleostei lineage",
            "diagnosticFeatureBn": "টেলিয়স্টেই গোষ্ঠী",
            "resultType": "next_step",
            "nextStepId": 8
          }
        ]
      },
      {
        "id": 8,
        "title": "Specialized Teleost Orders",
        "titleBn": "বিশেষায়িত টেলিয়স্ট বর্গসমূহ",
        "character": "Morphological specializations: Cranial asymmetry, electric organs, elongated jaw",
        "characterBn": "অঙ্গসংস্থানিক বিশেষায়ন: চোখের অপ্রতিসাম্য, বৈদ্যুতিক অঙ্গ, লম্বা চোয়াল",
        "couplets": [
          {
            "lead": "Both eyes migrated to one side of head in adults; asymmetrical flattened body adapted for benthic ocean floor concealment; dorsal and anal fins long.",
            "leadBn": "প্রাপ্তবয়স্ক অবস্থায় উভয় চোখ মাথার একপাশে চলে আসে; চ্যাপ্টা অপ্রতিসম দেহ; দীর্ঘ পৃষ্ঠ ও পায়ু পাখনা।",
            "diagnosticFeature": "Pleuronectiformes: Platichthys flesus (European flounder)",
            "diagnosticFeatureBn": "প্লিউরোনেকটিফর্মিস: প্লাটিকথিস ফ্লেসাস (ফ্ল্যাটফিশ)",
            "resultType": "species",
            "speciesId": "sp-platichthys-flesus"
          },
          {
            "lead": "Body encased in fused bony rings; tiny tubiform mouth without teeth; prehensile tail; males incubate eggs in ventral brood pouch.",
            "leadBn": "অস্থিময় বলয় দ্বারা আবৃত দেহ; দাঁতহীন নলাকার মুখ; পেঁচিয়ে ধরার উপযোগী লেজ; পুরুষ উদরীয় থলিতে ডিম ফোটায়।",
            "diagnosticFeature": "Syngnathiformes: Hippocampus erectus (Lined seahorse)",
            "diagnosticFeatureBn": "সিংনাথিফর্মিস: হিপ্পোক্যাম্পাস ইরেকটাস (ঘোড়ামাছ)",
            "resultType": "species",
            "speciesId": "sp-hippocampus-erectus"
          },
          {
            "lead": "First dorsal fin spine modified into an angling illicium with luminous esca (bait); enormous cavernous mouth with depressible teeth.",
            "leadBn": "প্রথম পৃষ্ঠ কাঁটা টোপ বা টর্চে রূপান্তরিত (ইলিশিয়াম); বিশালাকার হা-করা মুখ ও তীক্ষ্ণ দাঁত।",
            "diagnosticFeature": "Lophiiformes: Lophius piscatorius (Anglerfish)",
            "diagnosticFeatureBn": "লোফিফর্মিস: লোফিয়াস পিসকাটোরিয়াস",
            "resultType": "species",
            "speciesId": "sp-lophius-piscatorius"
          },
          {
            "lead": "Teeth fused into 4 solid beak-like plates; heavy globular scaleless body covered in small spinules capable of inflating with water or air; tetrodotoxin.",
            "leadBn": "দাঁত ৪টি শক্ত চঞ্চুর মতো প্লেটে মিলিত; পানি বা বাতাস খেয়ে বেলুনের মতো ফোলার ক্ষমতাসম্পন্ন দেহ; টেট্রোডোটক্সিন বিষ।",
            "diagnosticFeature": "Tetraodontiformes: Tetraodon mbu (Giant freshwater pufferfish)",
            "diagnosticFeatureBn": "টেট্রাওডন্টিফর্মিস: টেট্রাওডন ম্বু (মিঠাপানির পটকা মাছ)",
            "resultType": "species",
            "speciesId": "sp-tetraodon-mbu"
          },
          {
            "lead": "Other teleost orders (Clupeiformes, Cypriniformes, Siluriformes, Gobiiformes, etc.).",
            "leadBn": "অন্যান্য টেলিয়স্ট বর্গ (ইলিশ, রুই, ক্যাটফিশ, ডোরিকাটা ইত্যাদি)।",
            "diagnosticFeature": "Other Teleost Lineages",
            "diagnosticFeatureBn": "অন্যান্য টেলিয়স্ট শাখা",
            "resultType": "next_step",
            "nextStepId": 9
          }
        ]
      },
      {
        "id": 9,
        "title": "Otophysi & Dominant Freshwater Teleosts",
        "titleBn": "অটোফাইসি ও প্রধান মিঠাপানির মাছ",
        "character": "Weberian apparatus, abdominal scutes, barbels, pharyngeal teeth",
        "characterBn": "ওয়েবেরিয়ান যন্ত্র, পেটের স্কুট, কর্ষিকা ও গলবিলীয় দাঁত",
        "couplets": [
          {
            "lead": "Belly with sharp serrated keel scutes; mouth terminal with median upper jaw notch; silvery compressed body; anadromous migratory.",
            "leadBn": "পেটে ধারালো করাত-সদৃশ স্কুট; ওপরের চোয়ালে স্পষ্ট খাঁজ; রুপালি চ্যাপ্টা দেহ; পরিযায়ী।",
            "diagnosticFeature": "Clupeiformes: Tenualosa ilisha (Hilsa shad)",
            "diagnosticFeatureBn": "ক্লুপেইফর্মিস: তেনুয়ালোসা ইলিশা (ইলিশ)",
            "resultType": "species",
            "speciesId": "sp-tenualosa-ilisha"
          },
          {
            "lead": "Scaleless body with 4 pairs of barbels; arborescent accessory air-breathing organ in suprabranchial cavity; long spineless dorsal fin.",
            "leadBn": "আঁইশহীন দেহ ও ৪ জোড়া কর্ষিকা; বাতাস থেকে শ্বাস নেওয়ার জন্য কানকোর ওপরে শ্বাস অঙ্গ; দীর্ঘ পৃষ্ঠ পাখনা।",
            "diagnosticFeature": "Siluriformes: Clarias batrachus (Walking catfish)",
            "diagnosticFeatureBn": "সিলুরিফর্মিস: ক্ল্যারিয়াস বাট্রাকাস (মাগুর)",
            "resultType": "species",
            "speciesId": "sp-clarias-batrachus"
          },
          {
            "lead": "Body covered in cycloid scales; mouth inferior with thick fringed lips; pharyngeal teeth in single row; no oral teeth.",
            "leadBn": "সাইক্লয়েড আঁইশযুক্ত দেহ; পুরু ঝালরযুক্ত ঠোঁট; চোয়ালে দাঁত নেই, গলবিলে দাঁত বিদ্যমান।",
            "diagnosticFeature": "Cypriniformes: Labeo rohita (Rohu carp)",
            "diagnosticFeatureBn": "সাইপ্রিনিফর্মিস: লাবিও রোহিতা (রুই)",
            "resultType": "species",
            "speciesId": "sp-labeo-rohita"
          },
          {
            "lead": "Amphibious mudskipper adapted for walking on tidal mudflats; close-set dorsal eyes raised above head; muscular pectoral fins.",
            "leadBn": "ভাটার কাদায় হেঁটে বেড়াতে সক্ষম উভচর ডোরিকাটা; মাথার ওপরে ঠেলে ওঠা চোখ; শক্তিশালী বক্ষ পাখনা।",
            "diagnosticFeature": "Gobiiformes: Periophthalmodon schlosseri (Giant mudskipper)",
            "diagnosticFeatureBn": "গোবিইফর্মিস: পেরিওফথ্যালমোডন স্লোসেরি",
            "resultType": "species",
            "speciesId": "sp-periophthalmodon-schlosseri"
          }
        ]
      },
      {
        "id": 10,
        "title": "Batoidea: Diagnostic Ray Orders",
        "titleBn": "ব্যাটোইডিয়া: রে ও স্কেট বর্গসমূহ",
        "character": "Electric organs, caudal spine, and snout morphology",
        "characterBn": "বৈদ্যুতিক অঙ্গ, পুচ্ছ কাঁটা ও নাসিকা গঠন",
        "couplets": [
          {
            "lead": "Pectoral disc thick and fleshy; large kidney-shaped electric organs on each side of head capable of delivering high-voltage discharge; smooth scaleless skin.",
            "leadBn": "পুরু পেশিবহুল চাকতি; মাথার দুই পাশে শক্তিশালী বৈদ্যুতিক অঙ্গ; মসৃণ আঁইশহীন ত্বক।",
            "diagnosticFeature": "Torpediniformes: Torpedo marmorata (Marbled electric ray)",
            "diagnosticFeatureBn": "টরপেডিনিফর্মিস: টরপেডো মারমোরাটা (ইলেকট্রিক রে)",
            "resultType": "species",
            "speciesId": "sp-torpedo-marmorata"
          },
          {
            "lead": "Tail slender and whip-like, armed with 1 or more serrated venomous spines; cephalic horns or broad rhomboid pectoral wings.",
            "leadBn": "চাবুকের মতো সরু লেজ যাতে বিষাক্ত কাঁটা রয়েছে; মাথায় শিং-সদৃশ অংশ বা প্রশস্ত রম্বয়েড ডানা।",
            "diagnosticFeature": "Myliobatiformes: Mobula birostris (Giant manta ray)",
            "diagnosticFeatureBn": "মাইলিওবাটিফর্মিস: মবুলা বায়রোস্ট্রিস (জায়ান্ট মান্টা রে)",
            "resultType": "species",
            "speciesId": "sp-mobula-birostris"
          },
          {
            "lead": "Body intermediate between shark and ray; broad wedge-shaped head with prominent thorn-like tubercles; 2 large dorsal fins.",
            "leadBn": "হাঙর ও রে-এর মধ্যবর্তী গঠন; প্রশস্ত কীলকাকার মাথা ও ধারালো কাঁটা; ২টি বড় পৃষ্ঠ পাখনা।",
            "diagnosticFeature": "Rhinopristiformes: Rhina ancylostoma (Bowmouth guitarfish)",
            "diagnosticFeatureBn": "রাইনোপ্রিস্টিফর্মিস: রাইনা অ্যানসিলোস্টোমা (গিটারফিশ)",
            "resultType": "species",
            "speciesId": "sp-rhina-ancylostoma"
          },
          {
            "lead": "Rhomboid disc with hard prickly thorn-like bucklers along midline; pelvic fin divided into 2 distinct lobes; egg cases with 4 horns.",
            "leadBn": "রম্বয়েড চাকতি যাতে কাঁটার সারি রয়েছে; শ্রোণী পাখনা ২টি খণ্ডে বিভক্ত; ৪টি শিংযুক্ত ডিমের খোলস।",
            "diagnosticFeature": "Rajiformes: Raja clavata (Thornback skate)",
            "diagnosticFeatureBn": "রাজিফর্মিস: রাজা ক্লাভাটা (স্কেট)",
            "resultType": "species",
            "speciesId": "sp-raja-clavata"
          }
        ]
      }
    ]
  },
  {
    "id": "key-global-sponges-cnidarians",
    "title": "Diagnostic Key to Marine Sponges, Cnidarians & Comb Jellies",
    "titleBn": "সামুদ্রিক স্পঞ্জ, নিডারিয়ান ও কম্ব জেলি শনাক্তকরণ কুঞ্জি",
    "scope": "global",
    "targetTaxonId": "taxon-animalia",
    "majorGroup": "invertebrates",
    "taxonScope": "Porifera, Cnidaria & Ctenophora (Non-bilaterian Metazoans)",
    "taxonScopeBn": "পরিফেরা, নিডারিয়া ও টিনোফোরা পর্ব (অদ্বিপার্শ্বীয় প্রাণী)",
    "description": "Authoritative diagnostic dichotomous key differentiating basal metazoan phyla and their representative canonical species through skeletal mineralogy, cnidocyte presence, ciliary ctene rows, and morphological architecture.",
    "descriptionBn": "কঙ্কাল গঠন, নিডোসাইট দংশক কোষ, সিলিয়ারি কম্ব প্লেট ও শারীরিক সংগঠনের ওপর ভিত্তি করে স্পঞ্জ, নিডারিয়া ও কম্ব জেলির প্রামাণ্য প্রজাতি শনাক্তকরণ কুঞ্জি।",
    "educationalLevel": "intermediate",
    "keyType": "dichotomous",
    "sourceReferenceIds": [
      "ref-hickman-2020",
      "ref-ruppert-2004",
      "ref-world-porifera-2024"
    ],
    "verificationStatus": "verified",
    "steps": [
      {
        "id": 1,
        "title": "Major Basal Phylum Determination",
        "titleBn": "প্রাথমিক ভিত্তি পর্ব নির্ধারণ",
        "character": "Presence of porous water canal system, cnidocyte tentacles, or ciliated ctene rows",
        "characterBn": "ছিদ্রাল সংবহন নালী, নিডোসাইটযুক্ত কর্ষিকা বা সিলিয়ারি কম্ব প্লেট",
        "couplets": [
          {
            "lead": "Asymmetrical or superficial radial body with porous outer walls (ostia) and one or more large excurrent oscula; inner chambers lined by flagellated collar cells (choanocytes); lacking true tissues, gastrovascular cavity, and nervous system; internal skeleton of spicules or spongin.",
            "leadBn": "অপ্রতিসম বা অগভীর অরীয় দেহ যাতে অসটিয়া ও অস্কুলাম ছিদ্র বিদ্যমান; ভেতরের প্রকোষ্ঠে চোয়ানোসাইট কোষ উপস্থিত; প্রকৃত কলা বা স্নায়ুতন্ত্র নেই; স্পিকিউল বা স্পঞ্জিন কঙ্কাল।",
            "diagnosticFeature": "Phylum Porifera: Cellular grade, choanocytes, ostia/oscula canal system",
            "diagnosticFeatureBn": "পরিফেরা পর্ব: কোষীয় সংগঠন, চোয়ানোসাইট, নালীতন্ত্র",
            "resultType": "next_step",
            "nextStepId": 2
          },
          {
            "lead": "Radially or biradially symmetrical eumetazoans with distinct tissue layers separated by mesoglea; possessing an internal gastrovascular cavity with an oral opening and sensory/nervous network.",
            "leadBn": "মেসোগ্লিয়া দ্বারা পৃথক প্রকৃত কলাস্তরযুক্ত অরীয় বা দ্বি-অরীয় প্রাণী; মুখ ও স্নায়ুজালিকাযুক্ত অভ্যন্তরীণ গ্যাস্ট্রোভাস্কুলার গহ্বর উপস্থিত।",
            "diagnosticFeature": "Radiate Eumetazoans: True tissues, gastrovascular cavity, nerve net",
            "diagnosticFeatureBn": "রেডিয়াটা ইউমেটাজোয়া: প্রকৃত কলা, গ্যাস্ট্রোভাস্কুলার গহ্বর, স্নায়ুজাল",
            "resultType": "next_step",
            "nextStepId": 5
          }
        ]
      },
      {
        "id": 2,
        "title": "Porifera: Skeletal Architecture & Spicule Mineralogy",
        "titleBn": "পরিফেরা: কঙ্কাল গঠন ও স্পিকিউলের উপাদান",
        "character": "Calcium carbonate spicules vs siliceous spicules or spongin fibers",
        "characterBn": "ক্যালসিয়াম কার্বনেট স্পিকিউল বনাম সিলিকা স্পিকিউল বা স্পঞ্জিন তন্তু",
        "couplets": [
          {
            "lead": "Skeletal spicules composed exclusively of calcium carbonate (calcite), 1-, 3-, or 4-rayed; body structure asconoid, syconoid, or leuconoid; strictly marine.",
            "leadBn": "কঙ্কাল শুধুমাত্র ক্যালসিয়াম কার্বনেট (ক্যালসাইট) নির্মিত ১, ৩ বা ৪-রশ্মিবিশিষ্ট স্পিকিউল দ্বারা গঠিত; আসকোনয়েড বা সাইকোনয়েড কাঠামো; সম্পূর্ণ সামুদ্রিক।",
            "diagnosticFeature": "Class Calcarea: Calcareous spicules, strictly marine",
            "diagnosticFeatureBn": "ক্যালকেরিয়া শ্রেণি: চুনযুক্ত স্পিকিউল, সামুদ্রিক",
            "resultType": "next_step",
            "nextStepId": 3
          },
          {
            "lead": "Skeletal spicules composed of hydrated amorphous silica (silicon dioxide), or skeleton formed of fibrous organic spongin network, or a combination of both; never calcareous.",
            "leadBn": "কঙ্কাল হাইড্রেটেড সিলিকা দ্বারা গঠিত স্পিকিউল, বা কোলাজেনাস স্পঞ্জিন তন্তুর জালক, বা উভয়ের সমন্বয়ে গঠিত; চুনবিহীন।",
            "diagnosticFeature": "Siliceous & Spongin Sponges: Hexactinellida & Demospongiae",
            "diagnosticFeatureBn": "সিলিকা ও স্পঞ্জিন স্পঞ্জ: হেক্সাক্টিনেলিডা ও ডেমোস্পঞ্জিয়া",
            "resultType": "next_step",
            "nextStepId": 4
          }
        ]
      },
      {
        "id": 3,
        "title": "Class Calcarea: Asconoid vs Syconoid Architecture",
        "titleBn": "ক্যালকেরিয়া শ্রেণি: আসকোনয়েড বনাম সাইকোনয়েড গঠন",
        "character": "Simple tubular branching network vs thick-walled urn-shaped with radial canals",
        "characterBn": "সরল নলাকার শাখান্বিত জালক বনাম পুরু প্রাচীরের কলসাকৃতি দেহ",
        "couplets": [
          {
            "lead": "Colonial network of delicate thin-walled, branching and anastomosing white tubes; simplest asconoid grade with continuous choanocyte-lined spongocoel.",
            "leadBn": "সূক্ষ্ম সাদা পাতলা প্রাচীরবিশিষ্ট শাখান্বিত ও জালকবদ্ধ নালীর কলোনি; অবিচ্ছিন্ন চোয়ানোসাইটযুক্ত সরল আসকোনয়েড কাঠামো।",
            "diagnosticFeature": "Leucosolenia botryoides: Asconoid colonial network, monaxon/triradiate calcite spicules",
            "diagnosticFeatureBn": "লিউকোসোলেনিয়া বট্রিয়য়েডস: আসকোনয়েড কলোনি, ক্যালসাইট স্পিকিউল",
            "resultType": "species",
            "speciesId": "sp-leucosolenia-botryoides",
            "rationaleEn": "Resolves to White lace sponge (Leucosolenia botryoides: Calcarea)",
            "rationaleBn": "হোয়াইট লেইস স্পঞ্জ (লিউকোসোলেনিয়া বট্রিয়য়েডস)"
          },
          {
            "lead": "Solitary or clustered urn-shaped or purse-like vases up to 2-5 cm; syconoid body wall folded into distinct finger-like radial flagellated chambers; osculum crowned by a conspicuous ring of long straight monaxon calcite spicules.",
            "leadBn": "কলসাকৃতি বা থলের মতো একক বা গুচ্ছবদ্ধ দেহ (২-৫ সেমি); সাইকোনয়েড ভাঁজযুক্ত প্রাচীর; অস্কুলামের মুখে দীর্ঘ সোজা স্পিকিউলের বিশিষ্ট মুকুট।",
            "diagnosticFeature": "Sycon ciliatum: Syconoid radial canals, oscular spicule fringe",
            "diagnosticFeatureBn": "সাইকন সিলিয়াটাম: সাইকোনয়েড নালী, অস্কুলার স্পিকিউল বলয়",
            "resultType": "species",
            "speciesId": "sp-sycon-ciliatum",
            "rationaleEn": "Resolves to White purse sponge (Sycon ciliatum: Calcarea)",
            "rationaleBn": "হোয়াইট পার্স স্পঞ্জ (সাইকন সিলিয়াটাম)"
          }
        ]
      },
      {
        "id": 4,
        "title": "Hexactinellida vs Demospongiae",
        "titleBn": "হেক্সাক্টিনেলিডা বনাম ডেমোস্পঞ্জিয়া",
        "character": "6-rayed triaxonic glass spicules in syncytium vs spongin/monaxon demosponges",
        "characterBn": "সিনসিটিয়ামে ৬-রশ্মিযুক্ত কাঁচ স্পিকিউল বনাম স্পঞ্জিন/মনাক্সন ডেমোস্পঞ্জ",
        "couplets": [
          {
            "lead": "Deep-sea glass sponges with triaxonic, 6-rayed siliceous spicules fused into an exquisite rigid lattice framework; body tissue organized as a trabecular syncytium.",
            "leadBn": "গভীর সমুদ্রের গ্লাস স্পঞ্জ যার ৬-রশ্মিবিশিষ্ট সিলিকা স্পিকিউল মিলে জটিল জালক তৈরি করে; ট্রাবেকুলার সিনসিটিয়াম কলাযুক্ত।",
            "diagnosticFeature": "Class Hexactinellida: 6-rayed triaxonic spicules, syncytial trabecular tissue",
            "diagnosticFeatureBn": "হেক্সাক্টিনেলিডা শ্রেণি: ৬-রশ্মি কাঁচ স্পিকিউল, সিনসিটিয়াম কাঠামো",
            "resultType": "next_step",
            "nextStepId": 6
          },
          {
            "lead": "Skeleton composed of fibrous spongin network, siliceous spicules (never 6-rayed), or both; leuconoid grade with flagellated chambers; comprises over 85% of all living sponges.",
            "leadBn": "কঙ্কাল কোলাজেনাস স্পঞ্জিন তন্তু, সিলিকা স্পিকিউল (কখনও ৬-রশ্মি নয়) বা উভয় দ্বারা গঠিত; লিউকোনয়েড নালীতন্ত্র।",
            "diagnosticFeature": "Class Demospongiae: Spongin network and/or siliceous monaxons/tetraxons, leuconoid",
            "diagnosticFeatureBn": "ডেমোস্পঞ্জিয়া শ্রেণি: স্পঞ্জিন তন্তু ও সিলিকা স্পিকিউল, লিউকোনয়েড",
            "resultType": "next_step",
            "nextStepId": 7
          }
        ]
      },
      {
        "id": 5,
        "title": "Radiate Phyla: Cnidocytes vs Comb Rows",
        "titleBn": "রেডিয়াটা পর্বসমূহ: নিডোসাইট বনাম সিলিয়ারি কম্ব রো",
        "character": "Tentacles bearing stinging cnidocytes vs 8 rows of ciliated swimming ctenes",
        "characterBn": "দংশক নিডোসাইটযুক্ত কর্ষিকা বনাম ৮টি সিলিয়াযুক্ত সাঁতারু কম্ব প্লেট",
        "couplets": [
          {
            "lead": "Possess specialized stinging organelles (cnidocytes containing nematocysts); alternating polyp and medusa body forms or solitary/colonial polyp stages; no ciliary comb plates.",
            "leadBn": "নেমাটোসিস্টযুক্ত বিশেষায়িত নিডোসাইট বা দংশক কোষ উপস্থিত; পলিপ বা মেডুসা রূপবিশিষ্ট; সিলিয়ারি কম্ব প্লেট অনুপস্থিত।",
            "diagnosticFeature": "Phylum Cnidaria: Cnidocytes, nematocysts, planula larva",
            "diagnosticFeatureBn": "নিডারিয়া পর্ব: নিডোসাইট, নেমাটোসিস্ট, প্লানুলা লার্ভা",
            "resultType": "next_step",
            "nextStepId": 10
          },
          {
            "lead": "Completely lacking cnidocytes; eight longitudinal meridional rows of fused ciliated swimming plates (ctenes); biradial symmetry; adhesive colloblast cells or voracious macrocilia; comb rows refract light with brilliant iridescence.",
            "leadBn": "নিডোসাইট সম্পূর্ণ অনুপস্থিত; ৮টি অনুদৈর্ঘ্য সিলিয়াযুক্ত কম্ব প্লেট (টিন); আঠালো কলোব্লাস্ট কোষ বা ম্যাক্রোসিলিয়াযুক্ত শিকারী মুখ; রংধনু বর্ণের আলোক বিচ্ছুরণ।",
            "diagnosticFeature": "Phylum Ctenophora: 8 ctene rows, apical organ, colloblasts or macrocilia",
            "diagnosticFeatureBn": "টিনোফোরা পর্ব: ৮টি কম্ব প্লেট, শীর্ষ সংবেদী অঙ্গ, কলোব্লাস্ট/ম্যাক্রোসিলিয়া",
            "resultType": "next_step",
            "nextStepId": 8
          }
        ]
      },
      {
        "id": 6,
        "title": "Hexactinellida: Venus Flower Basket vs Glass Rope Sponge",
        "titleBn": "হেক্সাক্টিনেলিডা: ভেনাস ফ্লাওয়ার বাস্কেট বনাম গ্লাস রোপ স্পঞ্জ",
        "character": "Curved lattice cylinder with parietal sieve vs spiral anchoring glass spicule stalk",
        "characterBn": "বাঁকানো নলাকার জালক কাঠামো বনাম সর্পিলাকার নোঙর কাঁচ স্পিকিউল দণ্ড",
        "couplets": [
          {
            "lead": "Curved cylindrical vase of fused silica lattice with perforated parietal oscular sieve plate at apex; permanently houses a symbiotic breeding pair of spongicolid shrimps inside its cavity.",
            "leadBn": "বাঁকানো নলাকার কাঁচের ঝুড়ি কাঠামো যার শীর্ষে চালুনির মতো ঢাকনা থাকে; গহ্বরে একজোড়া মিথোজীবী চিংড়ি আজীবন বসবাস করে।",
            "diagnosticFeature": "Euplectella aspergillum: Rigid cylindrical glass lattice, oscular sieve, symbiotic shrimp",
            "diagnosticFeatureBn": "ইউপ্লেকটেলা অ্যাসপারজিলাম: নলাকার কাঁচের জালক, অস্কুলার ছাঁকনি",
            "resultType": "species",
            "speciesId": "sp-euplectella-aspergillum",
            "rationaleEn": "Resolves to Venus flower basket (Euplectella aspergillum: Hexactinellida)",
            "rationaleBn": "ভেনাস ফ্লাওয়ার বাস্কেট (ইউপ্লেকটেলা অ্যাসপারজিলাম)"
          },
          {
            "lead": "Subglobular or cup-shaped upper sponge body anchored deep into abyssal soft ooze by a massive spirally twisted rope-like stalk composed of extremely long glass monaxon spicules.",
            "leadBn": "গোলাকার বা পেয়ালাকৃতির দেহ যা গভীর সমুদ্রের কাদায় দীর্ঘ সর্পিলাকার কাঁচের সুতাযুক্ত দণ্ড দ্বারা নোঙর করা থাকে।",
            "diagnosticFeature": "Hyalonema sieboldii: Globose body supported on spirally twisted glass anchoring stalk",
            "diagnosticFeatureBn": "হায়ালোনেমা সিবোল্ডি: পেঁচানো কাঁচের নোঙর দণ্ডবিশিষ্ট গ্লাস রোপ স্পঞ্জ",
            "resultType": "species",
            "speciesId": "sp-hyalonema-sieboldii",
            "rationaleEn": "Resolves to Glass rope sponge (Hyalonema sieboldii: Hexactinellida)",
            "rationaleBn": "গ্লাস রোপ স্পঞ্জ (হায়ালোনেমা সিবোল্ডি)"
          }
        ]
      },
      {
        "id": 7,
        "title": "Demospongiae: Commercial Bath Sponge vs Hermit Crab Orange Sponge",
        "titleBn": "ডেমোস্পঞ্জিয়া: প্রাকৃতিক বাথ স্পঞ্জ বনাম হার্মিট ক্র্যাব অরেঞ্জ স্পঞ্জ",
        "character": "Pure spongin fiber matrix without mineral spicules vs dense tylostyle spicules",
        "characterBn": "খনিজ স্পিকিউলহীন বিশুদ্ধ স্পঞ্জিন তন্তু বনাম টাইলোস্টাইল স্পিকিউল",
        "couplets": [
          {
            "lead": "Skeleton composed exclusively of a compressible, highly absorbent network of keratin-like organic spongin fibers; siliceous mineral spicules completely absent; harvested as natural bath sponge.",
            "leadBn": "কঙ্কাল সম্পূর্ণভাবে স্থিতিস্থাপক ও পানি শোষণকারী স্পঞ্জিন তন্তুর জালক দ্বারা গঠিত; সিলিকা স্পিকিউল সম্পূর্ণ অনুপস্থিত; প্রসাধন বাথ স্পঞ্জ।",
            "diagnosticFeature": "Spongia officinalis: Elastic spongin-only matrix, no mineral spicules, compressible",
            "diagnosticFeatureBn": "স্পঞ্জিয়া অফিসিনালিস: শুধুমাত্র স্থিতিস্থাপক স্পঞ্জিন কঙ্কাল, খনিজ স্পিকিউলহীন",
            "resultType": "species",
            "speciesId": "sp-spongia-officinalis",
            "rationaleEn": "Resolves to Commercial bath sponge (Spongia officinalis: Demospongiae)",
            "rationaleBn": "বাথ স্পঞ্জ (স্পঞ্জিয়া অফিসিনালিস)"
          },
          {
            "lead": "Massive compact orange or reddish-yellow sponge with pin-headed siliceous tylostyle spicules; commonly encrusts gastropod shells inhabited by pagurid hermit crabs, eventually dissolving the shell.",
            "leadBn": "কমলা বা লালচে-হলুদ নিরেট স্পঞ্জ যাতে পিনসদৃশ টাইলোস্টাইল সিলিকা স্পিকিউল থাকে; হার্মিট কাঁকড়া বহনকারী শামুকের খোলসে আবরণ তৈরি করে।",
            "diagnosticFeature": "Suberites domuncula: Compact orange tissue, tylostyle megascleres, hermit crab commensalism",
            "diagnosticFeatureBn": "সুবারাইটস ডমুঙ্কুলা: কমলা স্পঞ্জ, টাইলোস্টাইল স্পিকিউল, হার্মিট কাঁকড়ার সহজীবী",
            "resultType": "species",
            "speciesId": "sp-suberites-domuncula",
            "rationaleEn": "Resolves to Sea orange sponge (Suberites domuncula: Demospongiae)",
            "rationaleBn": "সি অরেঞ্জ স্পঞ্জ (সুবারাইটস ডমুঙ্কুলা)"
          }
        ]
      },
      {
        "id": 8,
        "title": "Ctenophora: Tentaculata vs Nuda",
        "titleBn": "টিনোফোরা: কর্ষিকাযুক্ত (টেন্টাকুলাটা) বনাম কর্ষিকাহীন (নুডা)",
        "character": "Presence of paired tentacles/lobes with colloblasts vs complete absence of tentacles and presence of macrocilia",
        "characterBn": "জোড়া কর্ষিকা ও কলোব্লাস্টের উপস্থিতি বনাম কর্ষিকাহীনতা ও ম্যাক্রোসিলিয়ার উপস্থিতি",
        "couplets": [
          {
            "lead": "Possess a pair of retractile feeding tentacles equipped with adhesive colloblasts (glue cells), or modified oral feeding lobes and auricles; mouth of moderate size.",
            "leadBn": "আঠালো কলোব্লাস্টযুক্ত জোড়া পরিবর্তনীয় শিকারী কর্ষিকা, বা পরিবর্তিত মৌখিক লোব ও অরিকেল বিদ্যমান; স্বাভাবিক মুখছিদ্র।",
            "diagnosticFeature": "Class Tentaculata: Tentacles or oral feeding lobes present, colloblasts",
            "diagnosticFeatureBn": "টেন্টাকুলাটা শ্রেণি: কর্ষিকা বা মৌখিক লোবযুক্ত, কলোব্লাস্ট কোষ",
            "resultType": "next_step",
            "nextStepId": 9
          },
          {
            "lead": "Tentacles and tentacle sheaths completely absent at all developmental stages; body conical, mitre-shaped, or thimble-like up to 10-15 cm; wide gaping mouth occupying entire oral pole; inner lips lined with macroscopic ciliary teeth (macrocilia) used to swallow other comb jellies whole.",
            "leadBn": "জীবনচক্রের কোনো দশাতেই কর্ষিকা বা কর্ষিকা খাপ থাকে না; থলে বা শঙ্কু আকৃতির দেহ (১০-১৫ সেমি); বিশাল বিস্তৃত হাঁ-মুখ; ভেতরের ঠোঁটে ম্যাক্রোসিলিয়ার সারি যা দিয়ে অন্য কম্ব জেলি গিলে খায়।",
            "diagnosticFeature": "Class Nuda (Beroida: Beroe ovata): Tentacles absent, cavernous mouth, macrociliary teeth",
            "diagnosticFeatureBn": "নুডা শ্রেণি (বেরোয়ে ওভাটা): কর্ষিকাহীন, বিশাল হাঁ-মুখ, ম্যাক্রোসিলিয়া দাঁত",
            "resultType": "species",
            "speciesId": "sp-beroe-ovata",
            "rationaleEn": "Resolves to Oval comb jelly (Beroe ovata: Nuda / Beroidae)",
            "rationaleBn": "ওভাল কম্ব জেলি (বেরোয়ে ওভাটা: বেরোইডা বর্গ)"
          }
        ]
      },
      {
        "id": 9,
        "title": "Class Tentaculata: Cydippida vs Lobata vs Cestida",
        "titleBn": "টেন্টাকুলাটা শ্রেণি: সাইডিপ্পিডা বনাম লোবাটা বনাম সেস্টিডা",
        "character": "Spherical body with long branched tentacles vs oral lobes vs ribbon-like compression",
        "characterBn": "গোলাকার দেহ ও দীর্ঘ কর্ষিকা বনাম প্রশস্ত মৌখিক লোব বনাম ফিতার মতো চ্যাপ্টা দেহ",
        "couplets": [
          {
            "lead": "Spherical or pea-shaped translucent body up to 2.5 cm; pair of extremely long, trailing plumose tentacles bearing fine lateral tentilla, fully retractable into deep basal sheaths.",
            "leadBn": "গোলাকার বা মটরদানার মতো স্বচ্ছ দেহ (২.৫ সেমি); পার্শ্বীয় শাখাযুক্ত দুটি অত্যন্ত দীর্ঘ পালকসদৃশ কর্ষিকা যা গভীর খাপে গুটিয়ে নেওয়া যায়।",
            "diagnosticFeature": "Pleurobrachia pileus: Spherical cydippid, 2 long plumose tentacles with retractile sheaths",
            "diagnosticFeatureBn": "প্লুরোব্রাকিয়া পাইলাস: গোলাকার সাইডিপ্পিড, দুটি দীর্ঘ পরিবর্তনীয় কর্ষিকা",
            "resultType": "species",
            "speciesId": "sp-pleurobrachia-pileus",
            "rationaleEn": "Resolves to Sea gooseberry (Pleurobrachia pileus: Cydippida)",
            "rationaleBn": "সি গুজবেরি (প্লুরোব্রাকিয়া পাইলাস)"
          },
          {
            "lead": "Laterally compressed oval body with two large, flexible oral muscular lobes extending past the mouth and four flabellate auricles; tentacles reduced and sheaths absent in adults.",
            "leadBn": "পার্শ্বীয়ভাবে চ্যাপ্টা ডিম্বাকৃতি দেহ যাতে মুখের সামনে দুটি প্রশস্ত মাংসল লোব ও ৪টি অরিকেল থাকে; প্রাপ্তবয়স্কদের কর্ষিকা ক্ষুদ্র।",
            "diagnosticFeature": "Mnemiopsis leidyi: Lobate ctenophore with 2 large oral lobes, 4 auricles, bioluminescent",
            "diagnosticFeatureBn": "নেমিওপসিস লেইডি: দুটি বৃহৎ মৌখিক লোব ও ৪টি অরিকেলযুক্ত কম্ব জেলি",
            "resultType": "species",
            "speciesId": "sp-mnemiopsis-leidyi",
            "rationaleEn": "Resolves to Sea walnut / Warty comb jelly (Mnemiopsis leidyi: Lobata)",
            "rationaleBn": "সি ওয়ালনাট (নেমিওপসিস লেইডি)"
          },
          {
            "lead": "Extremely laterally compressed, flat ribbon-like or belt-like iridescent gelatinous body extending horizontally up to 1-1.5 meters; undulates like a silvery belt through the water.",
            "leadBn": "অত্যন্ত চ্যাপ্টা ফিতার মতো চকচকে স্বচ্ছ দেহ যা ১ থেকে ১.৫ মিটার লম্বা হতে পারে; রূপালী বেল্টের মতো তরঙ্গায়িত গতিতে সাঁতার কাটে।",
            "diagnosticFeature": "Cestum veneris: Long ribbon-shaped body up to 1.5 m, pelagic undulating belt",
            "diagnosticFeatureBn": "সেস্টাম ভেনেরিস: ফিতাকৃতি চ্যাপ্টা দেহাংশ (১.৫ মি), ভেনাস গার্ডল",
            "resultType": "species",
            "speciesId": "sp-cestum-veneris",
            "rationaleEn": "Resolves to Venus girdle (Cestum veneris: Cestida)",
            "rationaleBn": "ভেনাস গার্ডল (সেস্টাম ভেনেরিস: সেস্টিডা বর্গ)"
          }
        ]
      },
      {
        "id": 10,
        "title": "Phylum Cnidaria: Primary Classes",
        "titleBn": "নিডারিয়া পর্ব: প্রধান শ্রেণিসমূহ",
        "character": "Polyp-only organization with partitioned coelenteron vs medusa dominant stages",
        "characterBn": "পর্দাযুক্ত গহ্বরবিশিষ্ট একক পলিপ দশা বনাম মেডুসা প্রধান জীবনচক্র",
        "couplets": [
          {
            "lead": "Medusa stage completely absent; solitary or colonial benthic polyps; gastrovascular cavity partitioned longitudinally by vertical tissue septa (mesenteries); pharynx invaginated with siphonoglyphs.",
            "leadBn": "মেডুসা দশা সম্পূর্ণ অনুপস্থিত; একক বা কলোনিয়াল তলদেশবাসী পলিপ; গ্যাস্ট্রোভাস্কুলার গহ্বর উলম্ব পর্দা দ্বারা বিভক্ত; সাইফোনোগ্লিফযুক্ত গলবিল।",
            "diagnosticFeature": "Class Anthozoa: No medusa, septate gastrovascular cavity, siphonoglyphs",
            "diagnosticFeatureBn": "অ্যান্থোজোয়া শ্রেণি: মেডুসাহীন, পর্দাবিশিষ্ট গ্যাস্ট্রোভাস্কুলার গহ্বর",
            "resultType": "next_step",
            "nextStepId": 11
          },
          {
            "lead": "Life cycle includes a prominent medusa stage (or specialized polymorphic siphonophore medusoids); gastrovascular cavity without cellular mesenterial partitions.",
            "leadBn": "জীবনচক্রে মুক্ত সাঁতারু মেডুসা দশা (অথবা বিশেষায়িত সাইফোনোফোর রূপ) প্রধান; গহ্বরে কোষীয় পর্দা অনুপস্থিত।",
            "diagnosticFeature": "Medusozoa: Scyphozoa, Cubozoa & Hydrozoa",
            "diagnosticFeatureBn": "মেডুসোজোয়া: সাইফোজোয়া, কিউবোজোয়া ও হাইড্রোজোয়া",
            "resultType": "next_step",
            "nextStepId": 12
          }
        ]
      },
      {
        "id": 11,
        "title": "Class Anthozoa: Corals vs Sea Anemones",
        "titleBn": "অ্যান্থোজোয়া শ্রেণি: প্রবাল বনাম সাগর কুসুম (অ্যানিমোন)",
        "character": "Massive aragonite calcium skeleton vs solitary soft-bodied pedal disc attachment",
        "characterBn": "অ্যারাগোনাইট চুনযুক্ত প্রবাল কঙ্কাল বনাম নরম দেহের পেডাল ডিস্কযুক্ত সাগর কুসুম",
        "couplets": [
          {
            "lead": "Colonial stony coral with erect branching cervicorn morphology resembling deer antlers; corallites small with apical axial corallite directing rapid growth.",
            "leadBn": "হরিণের শিং-এর মতো খাড়া শাখান্বিত কলোনিয়াল পাথুরে প্রবাল কঙ্কাল; ডগায় অক্ষীয় বিশেষায়িত প্রবাল কীট থাকে।",
            "diagnosticFeature": "Acropora cervicornis: Branching staghorn skeleton, apical corallite",
            "diagnosticFeatureBn": "অ্যাক্রোপোরা সার্বিকর্নিস: শিং-সদৃশ শাখান্বিত প্রবাল কঙ্কাল",
            "resultType": "species",
            "speciesId": "sp-acropora-cervicornis",
            "rationaleEn": "Resolves to Staghorn coral (Acropora cervicornis: Scleractinia)",
            "rationaleBn": "স্ট্যাগহর্ন কোরাল (অ্যাক্রোপোরা সার্বিকর্নিস)"
          },
          {
            "lead": "Colonial massive hemisphere-shaped brain coral; surface scored with deep, continuous sinuous meandroid ridges and valleys resembling cerebral convolutions.",
            "leadBn": "মস্তিষ্কের খাঁজের মতো গভীর আঁকাবাঁকা খাঁজ ও উপত্যকাযুক্ত নিরেট অর্ধগোলাকার প্রবাল কঙ্কাল।",
            "diagnosticFeature": "Diploria labyrinthiformis: Meandroid cerebral valleys with ambulacral grooving",
            "diagnosticFeatureBn": "ডিপ্লোরিয়া ল্যাবিরিন্থিফরমিস: মস্তিষ্কের ন্যায় খাঁজযুক্ত ব্রেন কোরাল",
            "resultType": "species",
            "speciesId": "sp-diploria-labyrinthiformis",
            "rationaleEn": "Resolves to Grooved brain coral (Diploria labyrinthiformis: Scleractinia)",
            "rationaleBn": "গ্রুভড ব্রেন কোরাল (ডিপ্লোরিয়া ল্যাবিরিন্থিফরমিস)"
          },
          {
            "lead": "Solitary, soft-bodied columnar sea anemone without mineral skeleton; attaches to intertidal rocks via muscular pedal disc; red or greenish-brown column ringed beneath the 192 tentacles by a circle of bright blue spherules (acrorhagi) containing defensive nematocysts.",
            "leadBn": "খনিজ কঙ্কালবিহীন নরম নলাকার একক সাগর কুসুম; পেডাল ডিস্ক দিয়ে পাথরে আটকায়; কর্ষিকার নিচে উজ্জ্বল নীল রঙের বিষাক্ত অ্যাক্রোরেজি পুঁতি থাকে।",
            "diagnosticFeature": "Actinia equina: Soft columnar sea anemone, 192 tentacles, blue defensive acrorhagi",
            "diagnosticFeatureBn": "অ্যাক্টিনিয়া ইকুইনা: নরম সাগর কুসুম, নীল অ্যাক্রোরেজি থলি",
            "resultType": "species",
            "speciesId": "sp-actinia-equina",
            "rationaleEn": "Resolves to Beadlet anemone (Actinia equina: Actiniaria)",
            "rationaleBn": "বিডলেট অ্যানিমোন (অ্যাক্টিনিয়া ইকুইনা)"
          }
        ]
      },
      {
        "id": 12,
        "title": "Medusozoa: Cubozoa vs Scyphozoa vs Hydrozoa",
        "titleBn": "মেডুসোজোয়া: কিউবোজোয়া বনাম সাইফোজোয়া বনাম হাইড্রোজোয়া",
        "character": "Box-shaped bell with velarium vs true scyphomedusa with rhopalia vs hydrozoan polymorphic colonies",
        "characterBn": "ভেলেয়ারিয়ামযুক্ত ঘনকাকৃতি মেডুসা বনাম খাঁজযুক্ত সাইফোমেডুসা বনাম বহুরূপী হাইড্রোয়েড",
        "couplets": [
          {
            "lead": "Square, cube-shaped bell margin with an internal flap-like velarium; tentacles hang exclusively from interradial bladelike pedalium cushions at the four bell corners; advanced lens-bearing eyes; extraordinarily potent neurotoxin.",
            "leadBn": "ভেলেয়ারিয়ামযুক্ত চারকোনা ঘনকাকৃতি মেডুসা; চার কোণায় পেডালিয়াম প্যাড থেকে কর্ষিকা ঝুলে; লেন্সযুক্ত চোখ; অত্যন্ত প্রাণঘাতী বিষ।",
            "diagnosticFeature": "Class Cubozoa: Cuboidal bell, velarium, pedalia, advanced rhopalial eyes",
            "diagnosticFeatureBn": "কিউবোজোয়া শ্রেণি: বাক্স আকৃতির ছাতা, পেডালিয়াম, লেন্সযুক্ত চক্ষু",
            "resultType": "species",
            "speciesId": "sp-chironex-fleckeri",
            "rationaleEn": "Resolves to Sea wasp / Box jellyfish (Chironex fleckeri: Chirodropida)",
            "rationaleBn": "সি ওয়াস্প / বক্স জেলিফিশ (কাইরোনেক্স ফ্লেকেরি)"
          },
          {
            "lead": "True jellyfish: Umbrella bell margin scalloped with 8 or 16 marginal notches containing sensory rhopalia and lappets; velum absent; thick gelatinous mesoglea; polyp stage small strobilating scyphistoma.",
            "leadBn": "প্রকৃত জেলিফিশ: ছাতার কিনারা খাঁজকাটা এবং রোপালিয়াম সংবেদী অঙ্গযুক্ত; ভেলাম অনুপস্থিত; পুরু জেলিময় মেসোগ্লিয়া; স্ট্রোবিলেটিং সিস্ট।",
            "diagnosticFeature": "Class Scyphozoa: Scalloped margin with rhopalia, no true velum, tetramerous",
            "diagnosticFeatureBn": "সাইফোজোয়া শ্রেণি: রোপালিয়ামযুক্ত খাঁজকাটা ছাতা, ভেলামহীন",
            "resultType": "next_step",
            "nextStepId": 13
          },
          {
            "lead": "Class Hydrozoa: Dominant colonial or solitary polyp phase; when medusa present, possesses a true craspedote shelf-like inner margin (velum); polymorphic colonies with gastrozooids, gonozooids, dactylozooids, or pneumatophore float.",
            "leadBn": "হাইড্রোজোয়া শ্রেণি: পলিপ প্রধান বা ভেলামযুক্ত সূক্ষ্ম মেডুসা; খাদ্য গ্রহণ, প্রজনন ও প্রতিরক্ষার জন্য বিশেষায়িত বহুরূপী জুঅয়েড বা গ্যাসথলি কলোনি।",
            "diagnosticFeature": "Class Hydrozoa: Velum present in medusae, polymorphic zoids or solitary freshwater polyp",
            "diagnosticFeatureBn": "হাইড্রোজোয়া শ্রেণি: ভেলামযুক্ত মেডুসা, বহুরূপী সাইফোনোফোর বা মিঠাপানির পলিপ",
            "resultType": "next_step",
            "nextStepId": 14
          }
        ]
      },
      {
        "id": 13,
        "title": "Class Scyphozoa: Moon Jelly vs Compass Jelly",
        "titleBn": "সাইফোজোয়া শ্রেণি: মুন জেলি বনাম কম্পাস জেলি",
        "character": "Four horseshoe-shaped gonads vs 16 radiating brown radial V-shaped bands",
        "characterBn": "চারটি ঘোড়ার খুরসদৃশ জননাঙ্গ বনাম ১৬টি বাদামি কম্পাস কাঁটা সদৃশ দাগ",
        "couplets": [
          {
            "lead": "Flattened translucent saucer-shaped umbrella up to 25-40 cm; four conspicuous pinkish-purple horseshoe-shaped or circular gastric gonads clearly visible through the top of bell; fringe of short marginal tentacles and four frilled oral arms.",
            "leadBn": "স্বচ্ছ চ্যাপ্টা পিরিচ আকৃতির ছাতা (২৫-৪০ সেমি); পিঠের ওপর চারটি ঘোড়ার খুরের মতো গোলাপি-বেগুনি জননাঙ্গ স্পষ্টভাবে দৃশ্যমান; ছোট প্রান্তীয় কর্ষিকা।",
            "diagnosticFeature": "Aurelia aurita: 4 horseshoe gonads, saucer bell, short marginal fringe",
            "diagnosticFeatureBn": "অরেলিয়া অরিতা: চারটি খুরসদৃশ জননাঙ্গ, স্বচ্ছ পিরিচ ছাতা",
            "resultType": "species",
            "speciesId": "sp-aurelia-aurita",
            "rationaleEn": "Resolves to Moon jellyfish (Aurelia aurita: Semaeostomeae)",
            "rationaleBn": "মুন জেলিফিশ (অরেলিয়া অরিতা)"
          },
          {
            "lead": "Convex bell up to 30 cm decorated with 16 distinctive radiating triangular or V-shaped dark brown bands resembling a compass rose; 24 long stinging marginal tentacles arranged in groups of three alternating with 8 rhopalia.",
            "leadBn": "উত্তল ছাতা যাতে কম্পাসের কাঁটার মতো ১৬টি ত্রিভুজাকার গাঢ় বাদামি ডোরা দাগ থাকে; ২৪টি দীর্ঘ দংশক কর্ষিকা গুচ্ছবদ্ধভাবে থাকে।",
            "diagnosticFeature": "Chrysaora hysoscella: 16 radiating brown compass bands, 24 marginal tentacles",
            "diagnosticFeatureBn": "ক্রিসাওরা হাইসোসেল্লা: ১৬টি কম্পাস সদৃশ ডোরা দাগ, ২৪টি কর্ষিকা",
            "resultType": "species",
            "speciesId": "sp-chrysaora-hysoscella",
            "rationaleEn": "Resolves to Compass jellyfish (Chrysaora hysoscella: Pelagiidae)",
            "rationaleBn": "কম্পাস জেলিফিশ (ক্রিসাওরা হাইসোসেল্লা)"
          }
        ]
      },
      {
        "id": 14,
        "title": "Class Hydrozoa: Siphonophore vs Freshwater Hydra vs Marine Hydroid",
        "titleBn": "হাইড্রোজোয়া শ্রেণি: পর্তুগিজ যুদ্ধজাহাজ বনাম মিঠাপানির হাইড্রা বনাম সামুদ্রিক ওবেলিয়া",
        "character": "Pelagic floating pneumatophore colony vs solitary freshwater polyp vs colonial thecate hydroid",
        "characterBn": "ভাসমান গ্যাস বেলুন কলোনি বনাম মিঠাপানির একক পলিপ বনাম সামুদ্রিক কাঠি কলোনি",
        "couplets": [
          {
            "lead": "Pelagic colonial siphonophore floating on sea surface by a large, iridescent blue to pinkish-purple gas-filled sail/float (pneumatophore); suspended beneath are trailing fishing dactylozooid tentacles reaching 10-30 meters delivering agonizing stings.",
            "leadBn": "সমুদ্রের উপরিভাগে ভাসমান গ্যাসভর্তি নীল-গোলাপি পালযুক্ত বেলুন (নিউম্যাটোফোর); নিচে ১০-৩০ মিটার দীর্ঘ তীব্র বিষাক্ত শিকারী কর্ষিকা ঝুলন্ত থাকে।",
            "diagnosticFeature": "Physalia physalis: Pneumatophore float, trailing dactylozooids up to 30 m",
            "diagnosticFeatureBn": "ফাইসিলিয়া ফাইসালিস: ভাসমান গ্যাস বেলুন, দীর্ঘ শিকারী কর্ষিকা",
            "resultType": "species",
            "speciesId": "sp-physalia-physalis",
            "rationaleEn": "Resolves to Portuguese man o war (Physalia physalis: Siphonophorae)",
            "rationaleBn": "পর্তুগিজ যুদ্ধজাহাজ / ম্যান ও ওয়ার (ফাইসিলিয়া ফাইসালিস)"
          },
          {
            "lead": "Solitary, naked cylindrical freshwater polyp up to 1-3 cm; attached to aquatic weeds by a basal pedal disc; oral hypostome surrounded by 6-10 hollow slender tentacles; no medusa stage; reproduces by lateral budding or sexual eggs.",
            "leadBn": "মিঠাপানির জলজ উদ্ভিদে পেডাল ডিস্ক দিয়ে আটকানো একক নলাকার পলিপ (১-৩ সেমি); মুখের চারপাশে ৬-১০টি ফাঁপা কর্ষিকা; মেডুসাহীন; কুঁড়ি সৃষ্টি করে।",
            "diagnosticFeature": "Hydra vulgaris: Solitary freshwater polyp, 6-10 tentacles, no medusa stage",
            "diagnosticFeatureBn": "হাইড্রা ভালগারিস: মিঠাপানির একক পলিপ, ৬-১০টি কর্ষিকা, কুঁড়ি",
            "resultType": "species",
            "speciesId": "sp-hydra-vulgaris",
            "rationaleEn": "Resolves to Common hydra (Hydra vulgaris: Anthoathecata)",
            "rationaleBn": "সাধারণ হাইড্রা (হাইড্রা ভালগারিস)"
          },
          {
            "lead": "Colonial marine hydroid growing on kelp and rocks with zigzag erect hydrocaulus stems enclosed in transparent chitinous perisarc; hydranths housed in bell-shaped hydrothecae with single thickened knee-like node; releases tiny free-swimming medusae with 16 tentacles.",
            "leadBn": "পাথর বা শ্যাওলায় জিগজ্যাগ কাঠি কলোনি তৈরি করা সামুদ্রিক হাইড্রোয়েড; কাইটিনের তৈরি প্রতিরক্ষী খোলের মধ্যে পলিপ ও প্রজনন অঙ্গ থাকে; ক্ষুদ্র মেডুসা ছাড়ে।",
            "diagnosticFeature": "Obelia geniculata: Zigzag perisarc stem, knee joint swellings, thecate hydrothecae",
            "diagnosticFeatureBn": "ওবেলিয়া জেনিকুলাটা: জিগজ্যাগ কাইটিন কাঠি কলোনি, হাইড্রোথিকা",
            "resultType": "species",
            "speciesId": "sp-obelia-geniculata",
            "rationaleEn": "Resolves to Knotted thread hydroid (Obelia geniculata: Leptothecata)",
            "rationaleBn": "ওবেলিয়া জেনিকুলাটা (লেপ্টোথেকেটা বর্গ)"
          }
        ]
      }
    ]
  },
  {
    "id": "key-global-mollusca-classes",
    "title": "Diagnostic Key to Major Classes & Lineages of Phylum Mollusca",
    "titleBn": "মলাস্কা (কম্বোজ প্রাণী) পর্বের প্রধান শ্রেণি ও বংশধারার শনাক্তকরণ কুঞ্জি",
    "scope": "global",
    "targetTaxonId": "taxon-mollusca",
    "majorGroup": "mollusca",
    "taxonScope": "Phylum Mollusca (Chitons, Bivalves, Gastropods, Cephalopods)",
    "taxonScopeBn": "মলাস্কা পর্ব (কাইটন, ঝিনুক, শামুক ও কর্ষিকাযুক্ত কম্বোজ)",
    "description": "Authoritative dichotomous key distinguishing the four major classes of Phylum Mollusca and their canonical species based on shell valves, foot modifications, mantle cavity, radula, and cephalic appendages.",
    "descriptionBn": "খোলক সংখ্যা, মাংসল পদ, ম্যান্টল গহ্বর, র্যাডুলা এবং মস্তকীয় উপাঙ্গের ওপর ভিত্তি করে মলাস্কা পর্বের প্রধান শ্রেণি ও প্রামাণ্য প্রজাতি শনাক্তকরণ কুঞ্জি।",
    "educationalLevel": "intermediate",
    "keyType": "dichotomous",
    "sourceReferenceIds": [
      "ref-ruppert-2004",
      "ref-hickman-2020",
      "ref-worms-2024"
    ],
    "verificationStatus": "verified",
    "steps": [
      {
        "id": 1,
        "title": "Molluscan Shell and Foot Architecture",
        "titleBn": "মলাস্কার খোলক ও পদের গঠন কাঠামো",
        "character": "Eight dorsal articulating valves vs two lateral hinged valves vs single/internal/absent shell",
        "characterBn": "আটটি প্লেটবিশিষ্ট খোলক বনাম দুই কপাটবিশিষ্ট খোলক বনাম একক/অভ্যন্তরীণ/খোলকহীন দেহ",
        "couplets": [
          {
            "lead": "Shell composed of an overlapping dorsal series of exactly 8 articulating calcareous plates (valves) surrounded by an encircling leathery muscular girdle; broad ventral flattened sole-like foot adapted for adhering tenaciously to marine intertidal rocks; multiple pairs of bipectinate ctenidia in mantle groove.",
            "leadBn": "পিঠের ওপর ৮টি পরস্পর সমাপতিত ক্যালসিয়াম কার্বনেট প্লেট যা চামড়ার মতো গার্ডল দ্বারা বেষ্টিত; পাথরে আটকে থাকার জন্য চ্যাপ্টা মাংসল পদ; ম্যান্টল খাঁজে বহু জোড়া ফুলকা।",
            "diagnosticFeature": "Class Polyplacophora: 8 articulating dorsal valves, girdle, multiple ctenidia",
            "diagnosticFeatureBn": "পলিট্যাকোফোরা শ্রেণি: ৮টি খোলক প্লেট, গার্ডল, বহু ফুলকা",
            "resultType": "species",
            "speciesId": "sp-tonicella-lineata",
            "rationaleEn": "Resolves to Lined chiton (Tonicella lineata: Polyplacophora)",
            "rationaleBn": "লাইনড কাইটন (টনিসেলা লিনিয়াটা: পলিট্যাকোফোরা)"
          },
          {
            "lead": "Shell of two lateral hinged calcareous valves joined dorsally by an elastic ligament, or shell univalve/conical/spiral, or internal/absent; plates never arranged as eight articulating dorsal series.",
            "leadBn": "খোলক দুই কপাটবিশিষ্ট যা লিগামেন্ট দিয়ে যুক্ত, অথবা এক কপাটবিশিষ্ট সর্পিলাকার খোলক, বা খোলক অভ্যন্তরীণ বা অনুপস্থিত; কখনই ৮টি প্লেটে বিভক্ত নয়।",
            "diagnosticFeature": "Non-polyplacophoran molluscs: Bivalvia, Gastropoda & Cephalopoda",
            "diagnosticFeatureBn": "দ্বিকপাটী, উদরপদী ও শীর্ষপদী মলাস্কা",
            "resultType": "next_step",
            "nextStepId": 2
          }
        ]
      },
      {
        "id": 2,
        "title": "Bivalvia vs Head-Bearing Molluscs",
        "titleBn": "দ্বিকপাটী (বাইভালভিয়া) বনাম মস্তকযুক্ত মলাস্কা",
        "character": "Two-valved shell with laterally compressed foot and no radula vs distinct head with radula or tentacles",
        "characterBn": "র্যাডুলাহীন ও দুই কপাটযুক্ত চ্যাপ্টা দেহ বনাম র্যাডুলা বা কর্ষিকাযুক্ত সুস্পষ্ট মস্তক",
        "couplets": [
          {
            "lead": "Shell of two lateral calcareous valves closed by adductor muscles; head completely absent; radula and salivary glands absent; foot laterally compressed (wedge-shaped or hatchet-shaped) or reduced; large ciliated lamellibranch gills used for both respiration and suspension filter feeding.",
            "leadBn": "অ্যাডাক্টর পেশি দ্বারা বন্ধ হওয়া দুই কপাটবিশিষ্ট খোলক; মস্তক সম্পূর্ণ অনুপস্থিত; র্যাডুলাহীন; পার্শ্বীয়ভাবে চ্যাপ্টা পদ; ছাঁকনভোজী প্রশস্ত ল্যামেলিফুলকা।",
            "diagnosticFeature": "Class Bivalvia: Two hinged valves, no head, no radula, lamellibranch gills",
            "diagnosticFeatureBn": "বাইভালভিয়া শ্রেণি: দুই কপাটবিশিষ্ট খোলক, মস্তকহীন, র্যাডুলাহীন",
            "resultType": "next_step",
            "nextStepId": 3
          },
          {
            "lead": "Distinct head present with eyes and sensory tentacles; radula ribbon with chitinous teeth present in buccal mass (or beak-like jaws); foot modified as a crawling sole, swimming fins, or circumoral grasping arms/tentacles.",
            "leadBn": "চোখ ও সংবেদী কর্ষিকাসহ সুস্পষ্ট মস্তক উপস্থিত; মুখে কাইটিনের তৈরি দাঁতযুক্ত র্যাডুলা ফিতা বর্তমান; পদ হামাগুড়ি দেওয়া তলা বা শিকারী বাহুতে রূপান্তরিত।",
            "diagnosticFeature": "Head-bearing molluscs: Gastropoda & Cephalopoda",
            "diagnosticFeatureBn": "মস্তকযুক্ত মলাস্কা: গ্যাস্ট্রোপোডা ও সেফালোপোডা",
            "resultType": "next_step",
            "nextStepId": 5
          }
        ]
      },
      {
        "id": 3,
        "title": "Class Bivalvia: Free-Lying / Cemented / Byssus / Swimming Lineages",
        "titleBn": "বাইভালভিয়া শ্রেণি: বৃহৎ প্রবাল ঝিনুক, মুক্তাঝিনুক, কাদার ঝিনুক ও স্ক্যালপ",
        "character": "Gigantic fluted valves with zooxanthellae vs byssal attachment vs cemented valve vs auriculate swimming",
        "characterBn": "খাঁজকাটা বিশাল খোলক বনাম বাইসাস সুতা বনাম সিমেন্টযুক্ত খোলক বনাম ডানাযুক্ত স্ক্যালপ",
        "couplets": [
          {
            "lead": "Gigantic, massive fluted shells weighing up to 200-250 kg; shell margin deeply scalloped into 4-5 interlocking vertical folds; brightly colored fleshy mantle lobes exposed to sunlight containing billions of symbiotic photosynthetic zooxanthellae dinoflagellates.",
            "leadBn": "বিশাল ভারী খাঁজকাটা খোলক (২০০-২৫০ কেজি পর্যন্ত); কিনারায় ৪-৫টি পরস্পর লক হওয়া গভীর খাঁজ; ম্যান্টলে কোটি কোটি সালোকসংশ্লেষী জুক্সানথিলি শৈবাল থাকে।",
            "diagnosticFeature": "Tridacna gigas: Gigantic fluted scalloped valves, symbiotic zooxanthellate mantle",
            "diagnosticFeatureBn": "ট্রিডাকনা গিগাস: দৈত্যাকার খোলক, সালোকসংশ্লেষী রঙিন ম্যান্টল",
            "resultType": "species",
            "speciesId": "sp-tridacna-gigas",
            "rationaleEn": "Resolves to Giant clam (Tridacna gigas: Cardiidae)",
            "rationaleBn": "জায়ান্ট ক্ল্যাম / দৈত্যাকার ঝিনুক (ট্রিডাকনা গিগাস)"
          },
          {
            "lead": "Moderate to smaller-sized bivalves (5-20 cm); mantle without photosynthetic zooxanthellae; attached by byssus threads, cemented to hard substrate, or free-swimming via valve clapping.",
            "leadBn": "মাঝারি বা ছোট আকৃতির ঝিনুক (৫-২০ সেমি); জুক্সানথিলিহীন; বাইসাস সুতা দ্বারা আটকানো, বা পাথরে সিমেন্টযুক্ত, বা খোলক ঝাপটে সাঁতারু।",
            "diagnosticFeature": "Other Canonical Bivalves: Mytilus, Crassostrea, Pecten",
            "diagnosticFeatureBn": "অন্যান্য প্রামাণ্য ঝিনুক: মাইটিলাস, ক্র্যাসোস্ট্রিয়া, পেক্টেন",
            "resultType": "next_step",
            "nextStepId": 4
          }
        ]
      },
      {
        "id": 4,
        "title": "Bivalvia: Mussel vs Oyster vs Scallop",
        "titleBn": "বাইভালভিয়া: ব্লু মাসেল বনাম প্যাসিফিক অয়েস্টার বনাম গ্রেট স্ক্যালপ",
        "character": "Wedge-shaped byssus-anchored shell vs irregular cemented cupped valve vs fan-shaped ribbed with ears",
        "characterBn": "কীলকাকার বাইসাসযুক্ত খোলক বনাম অনিয়মিত সিমেন্টযুক্ত খোলক বনাম পাখার মতো খাঁজকাটা কানযুক্ত খোলক",
        "couplets": [
          {
            "lead": "Equivalve, elongated wedge-shaped or teardrop shell with pointed anterior umbo; blue-black or violet smooth periostracum; securely anchored to rocky intertidal substrates by strong proteinaceous byssal threads secreted by foot gland.",
            "leadBn": "কীলকাকৃতি বা অশ্রুবিন্দুর মতো নীল-কালো মসৃণ দুই কপাটবিশিষ্ট খোলক; মাংসল পদ থেকে ক্ষরিত শক্তিশালী প্রোটিনময় বাইসাস সুতা দিয়ে পাথরে আঁকড়ে থাকে।",
            "diagnosticFeature": "Mytilus edulis: Wedge-shaped blue-black shell, byssal thread attachment, intertidal beds",
            "diagnosticFeatureBn": "মাইটিলাস এডুলিস: কীলকাকৃতি নীল-কালো খোলক, বাইসাস সুতার বন্ধন",
            "resultType": "species",
            "speciesId": "sp-mytilus-edulis",
            "rationaleEn": "Resolves to Blue mussel (Mytilus edulis: Mytilidae)",
            "rationaleBn": "ব্লু মাসেল (মাইটিলাস এডুলিস: মাইটিলিডি পরিবার)"
          },
          {
            "lead": "Inequivalve, highly irregular and rough layered shell; lower left valve deeply cupped and permanently cemented to solid rocky or shelly substrate; right upper valve flat; single large adductor muscle scar; prominent commercial edible oyster.",
            "leadBn": "অসম কপাটবিশিষ্ট অত্যন্ত খাঁজকাটা ও স্তরযুক্ত অমসৃণ খোলক; নিচের কপাটটি পেয়ালার মতো গভীর এবং পাথরের সাথে সিমেন্টের মতো আজীবন জোড়া লাগানো থাকে।",
            "diagnosticFeature": "Crassostrea gigas: Cemented cupped left valve, laminated rough surface, single adductor scar",
            "diagnosticFeatureBn": "ক্র্যাসোস্ট্রিয়া গিগাস: সিমেন্টযুক্ত পেয়ালা কপাট, স্তরযুক্ত অমসৃণ প্রাচীর",
            "resultType": "species",
            "speciesId": "sp-crassostrea-gigas",
            "rationaleEn": "Resolves to Pacific oyster (Crassostrea gigas: Ostreidae)",
            "rationaleBn": "প্যাসিফিক অয়েস্টার (ক্র্যাসোস্ট্রিয়া গিগাস: অস্ট্রেইডি পরিবার)"
          },
          {
            "lead": "Subcircular fan-shaped shell with symmetrical lateral triangular wings (auricles) flanking the hinge line; lower valve deeply convex, upper valve flat; 15-17 prominent rounded radiating ribs; capable of agile escape swimming by clapping valves together; mantle margin ringed with bright blue sensory ocelli.",
            "leadBn": "পাখার মতো গোল খোলক যাতে হিঞ্জের দুই পাশে কান সদৃশ ত্রিভুজাকার ডানা থাকে; ১৫-১৭টি খাঁজ; খোলক হাততালির মতো ঝাপটে সাঁতার কাটে; কিনারায় নীল চোখ থাকে।",
            "diagnosticFeature": "Pecten maximus: Fan-shaped with auricles, radiating ribs, swimming via jet-propulsion, sensory ocelli",
            "diagnosticFeatureBn": "পেক্টেন ম্যাক্সিমাস: কানযুক্ত পাখার মতো খোলক, খাঁজকাটা পাঁজর, সাঁতারু স্ক্যালপ",
            "resultType": "species",
            "speciesId": "sp-pecten-maximus",
            "rationaleEn": "Resolves to Great scallop (Pecten maximus: Pectinidae)",
            "rationaleBn": "গ্রেট স্ক্যালপ (পেক্টেন ম্যাক্সিমাস: পেক্টিনিডি পরিবার)"
          },
          {
            "lead": "Freshwater river and pond bivalve (Family Unionidae); shell valves elongate-elliptical with greenish-brown periostracum and light yellowish-brown margins; distinct cardinal and lateral hinge teeth present; releases parasitic glochidium larvae on fish gills.",
            "leadBn": "স্বাদু পানির নদী ও পুকুরের ঝিনুক (ইউনিয়নিডি পরিবার); হালকা হলুদ প্রান্তযুক্ত লম্বাটে-ডিম্বাকৃতি সবুজ-বাদামি খোলস; সুনির্দিষ্ট কার্ডিনাল ও ল্যাটারাল কবজা দাঁত বিদ্যমান; মাছের ফুলকায় গ্লোচিডিয়াম লার্ভা ছড়ায়।",
            "diagnosticFeature": "Freshwater unionid, elliptical valves, hinge teeth, glochidium larva",
            "diagnosticFeatureBn": "স্বাদু পানির ইউনিয়নিড ঝিনুক, উপবৃত্তাকার খোলস, কবজা দাঁত, গ্লোচিডিয়াম",
            "resultType": "species",
            "speciesId": "sp-lamellidens-marginalis",
            "rationaleEn": "Resolves to Lamellidens marginalis (Freshwater mussel)",
            "rationaleBn": "ল্যামেলিডেন্স মার্জিনালিস (স্বাদু পানির ঝিনুক)"
          }
        ]
      },
      {
        "id": 5,
        "title": "Gastropoda vs Cephalopoda",
        "titleBn": "গ্যাস্ট্রোপোডা (শামুক/স্লাগ) বনাম সেফালোপোডা (অক্টোপাস/স্কুইড)",
        "character": "Creeping flat sole foot with torsion vs foot modified into circumoral arms/tentacles and siphon",
        "characterBn": "টর্শনযুক্ত হামাগুড়ি দেওয়া একক পদ বনাম মুখে কর্ষিকাযুক্ত বাহু ও সাইফন",
        "couplets": [
          {
            "lead": "Broad, flat, muscular creeping ventral foot; body undergoes developmental torsion (180° visceral rotation bringing mantle cavity and anus forward over head); shell univalve (spiral, cap-shaped, or secondarily lost as in slugs); head with 1-2 pairs of sensory tentacles and basal/apical eyes.",
            "leadBn": "চ্যাপ্টা মাংসল পদ যা দিয়ে হামাগুড়ি দেয়; ১৮০ ডিগ্রি টর্শন বা পাক খায় ফলে পায়ু মাথার ওপর আসে; একক প্যাঁচানো খোলক বা খোলকহীন স্লাগ; মাথায় সংবেদী কর্ষিকা ও চোখ।",
            "diagnosticFeature": "Class Gastropoda: Asymmetrical body, torsion, ventral creeping foot, univalve/slug",
            "diagnosticFeatureBn": "গ্যাস্ট্রোপোডা শ্রেণি: টর্শনযুক্ত দেহ, চ্যাপ্টা পদ, একক খোলক/স্লাগ",
            "resultType": "next_step",
            "nextStepId": 6
          },
          {
            "lead": "Active predatory marine molluscs; foot modified into a circumoral circle of 8 or 10 prehensile grasping arms and tentacles equipped with suckers, plus a muscular ventral funnel/siphon for jet propulsion; closed circulatory system; large camera-type eyes; powerful chitinous beak-like jaws.",
            "leadBn": "সক্রিয় শিকারী সামুদ্রিক মলাস্কা; পদ পরিবর্তিত হয়ে মুখের চারপাশে ৮ বা ১০টি চোষকযুক্ত বাহু ও জেট প্রপালশনের জন্য সাইফনে রূপান্তরিত; সংবৃত রক্ত সংবহন; উন্নত চোখ ও চঞ্চু।",
            "diagnosticFeature": "Class Cephalopoda: Circumoral arms/tentacles with suckers, siphon, closed circulation, beak",
            "diagnosticFeatureBn": "সেফালোপোডা শ্রেণি: চোষকযুক্ত বাহু, সাইফন, সংবৃত রক্ত সংবহন, চঞ্চু",
            "resultType": "next_step",
            "nextStepId": 8
          }
        ]
      },
      {
        "id": 6,
        "title": "Class Gastropoda: Terrestrial Pulmonates vs Marine Venomous Cones",
        "titleBn": "গ্যাস্ট্রোপোডা শ্রেণি: স্থলচর ফুসফুসধারী শামুক/স্লাগ বনাম সামুদ্রিক বিষাক্ত কোন স্নেইল",
        "character": "Vascularized pulmonary mantle cavity (pulmonate) vs marine prosobranch with harpoon toxoglossan radula",
        "characterBn": "ভাস্কুলার ফুসফুসযুক্ত ম্যান্টল গহ্বর বনাম বিষাক্ত হারপুন র্যাডুলাযুক্ত সামুদ্রিক শামুক",
        "couplets": [
          {
            "lead": "Air-breathing terrestrial pulmonates; mantle cavity roof richly vascularized to function as a lung, breathing through a contractile opening (pneumostome); gills absent; head with two pairs of retractile tentacles (upper bearing eyes).",
            "leadBn": "বায়ুজীবী স্থলচর পালমোনেট; ম্যান্টল প্রাচীর রক্তনালীসমৃদ্ধ ফুসফুসে রূপান্তরিত যা নিউমোস্টোম ছিদ্র দিয়ে শ্বাস নেয়; দুই জোড়া গুটিয়ে নেওয়া যায় এমন কর্ষিকা।",
            "diagnosticFeature": "Order Stylommatophora: Terrestrial pulmonates, pneumostome, 2 pairs retractile tentacles",
            "diagnosticFeatureBn": "স্টাইলোমাটোফোরা বর্গ: স্থলচর পালমোনেট, ফুসফুস গহ্বর, দুটি চোখযুক্ত কর্ষিকা",
            "resultType": "next_step",
            "nextStepId": 7
          },
          {
            "lead": "Marine predatory cone snail; thick conical shell with wide aperture; radular teeth modified into disposable, hollow barbed venomous harpoons shot from an eversible proboscis; delivers powerful paralyzing neurotoxins (conopeptides) capable of causing human fatalities.",
            "leadBn": "সামুদ্রিক শিকারী কোন শামুক; পুরু শঙ্কু আকৃতির খোলক; র্যাডুলার দাঁত ফাঁপা বিষাক্ত হারপুনে রূপান্তরিত যা দিয়ে মাছ শিকার করে; তীব্র নিউরোটক্সিনযুক্ত।",
            "diagnosticFeature": "Conus geographus: Conical shell, toxoglossan venomous harpoon radula, lethal conotoxins",
            "diagnosticFeatureBn": "কোনাস জিওগ্রাফাস: শঙ্কু খোলক, বিষাক্ত হারপুন র্যাডুলা, প্রাণঘাতী বিষ",
            "resultType": "species",
            "speciesId": "sp-conus-geographus",
            "rationaleEn": "Resolves to Geography cone snail (Conus geographus: Conidae)",
            "rationaleBn": "জিওগ্রাফি কোন স্নেইল (কোনাস জিওগ্রাফাস: কনিডি পরিবার)"
          },
          {
            "lead": "Freshwater amphibious apple snail (Family Ampullariidae); shell large, globose, ventricose with inflated body whorl; aperture sealed by a calcified concentric operculum; amphibious respiration via right pulmonary sac (air breathing) and left ctenidium (aquatic breathing).",
            "leadBn": "স্বাদু পানির উভচর আপেল শামুক (অ্যাম্পুলারিডি পরিবার); ফোলা দেহ কুণ্ডলীযুক্ত বৃহৎ ও গোলগাল খোলস; ক্যালসিয়াম নির্মিত কেন্দ্রিক অপারকুলাম দ্বারা মুখ বন্ধ থাকে; ডান ফুসফুসীয় থলি ও বাম ফুলকা দ্বারা দ্বৈত শ্বসন সম্পন্ন করে।",
            "diagnosticFeature": "Globose shell, calcified operculum, dual respiration (ctenidium + pulmonary sac)",
            "diagnosticFeatureBn": "গোলাকার খোলস, ক্যালসিয়াম অপারকুলাম, দ্বৈত শ্বসন (ফুলকা ও ফুসফুসীয় থলি)",
            "resultType": "species",
            "speciesId": "sp-pila-globosa",
            "rationaleEn": "Resolves to Pila globosa (Asian apple snail)",
            "rationaleBn": "পাইলা গ্লোবোসা (আপেল শামুক)"
          }
        ]
      },
      {
        "id": 7,
        "title": "Stylommatophora: Shelled Roman Snail vs Naked Leopard Slug",
        "titleBn": "স্টাইলোমাটোফোরা: খোলকযুক্ত রোমান শামুক বনাম খোলকহীন চিতাবাঘ স্লাগ",
        "character": "Large globose calcareous external shell vs naked slug with internal vestigial shell plate",
        "characterBn": "বৃহৎ গোলাকার চুনযুক্ত বহিস্থ খোলক বনাম চামড়ায় দাগযুক্ত খোলকহীন স্লাগ",
        "couplets": [
          {
            "lead": "Large globose exterior shell up to 4-5 cm in diameter with 4 to 5 convex whorls; shell creamy buff to yellowish-brown with faint spiral stripes; hibernates by secreting a thick chalky calcareous epiphragm over the aperture; quintessential textbook land snail.",
            "leadBn": "৪-৫ সেমি প্রশস্ত গোলাকার প্যাঁচানো বহিস্থ খোলক; হাল্কা বাদামি রঙের; শীতকালে খোলকের মুখে চুনযুক্ত এপিফ্রাগম ঢাকনা তৈরি করে নিষ্ক্রিয় থাকে।",
            "diagnosticFeature": "Helix pomatia: Large globose external spiral shell, calcareous epiphragm in winter, terrestrial",
            "diagnosticFeatureBn": "হেলিক্স পোমাটিয়া: বৃহৎ গোলাকার বহিস্থ খোলক, রোমান শামুক",
            "resultType": "species",
            "speciesId": "sp-helix-pomatia",
            "rationaleEn": "Resolves to Roman snail / Burgundy snail (Helix pomatia: Helicidae)",
            "rationaleBn": "রোমান শামুক (হেলিক্স পোমাটিয়া: হেলিচিডি পরিবার)"
          },
          {
            "lead": "Large terrestrial slug up to 10-20 cm lacking an external shell; anterior mantle shield bears a small internal hidden calcareous shell disc; body pale brown or grey marked with distinctive dark leopard-like spots and longitudinal stripes; pneumostome located on posterior half of mantle.",
            "leadBn": "১০-২০ সেমি দীর্ঘ বহিস্থ খোলকহীন স্থলচর স্লাগ; ম্যান্টলের নিচে একটি ক্ষুদ্র লুকানো প্লেট থাকে; পিঠের ওপর চিতাবাঘের মতো ফুটকি ও ডোরা দাগ থাকে।",
            "diagnosticFeature": "Limax maximus: Naked slug, internal shell disc, leopard-spotted dorsal pattern, nocturnal",
            "diagnosticFeatureBn": "লিমেক্স ম্যাক্সিমাস: খোলকহীন স্লাগ, চিতাবাঘের মতো দাগ, চিতাবাঘ স্লাগ",
            "resultType": "species",
            "speciesId": "sp-limax-maximus",
            "rationaleEn": "Resolves to Leopard slug / Great grey slug (Limax maximus: Limacidae)",
            "rationaleBn": "চিতাবাঘ স্লাগ (লিমেক্স ম্যাক্সিমাস: লিমাসিডি পরিবার)"
          }
        ]
      },
      {
        "id": 8,
        "title": "Class Cephalopoda: External Chambered Shell vs Internal Shell / Shell-less",
        "titleBn": "সেফালোপোডা শ্রেণি: বহিস্থ প্রকোষ্ঠযুক্ত খোলক বনাম অভ্যন্তরীণ খোলক/খোলকহীন",
        "character": "Multi-chambered external spiral planospiral shell with siphuncle vs internal shell or shell lost",
        "characterBn": "সাইফাঙ্কলযুক্ত বহিস্থ বহুপ্রকোষ্ঠী খোলক বনাম অভ্যন্তরীণ কঙ্কাল বা খোলকহীন দেহ",
        "couplets": [
          {
            "lead": "Possesses a smooth, multi-chambered external planospiral calcareous shell partitioned into gas-filled buoyant chambers connected by a central living tissue tube (siphuncle); up to 90 slender suckerless tentacles; primitive eye lacking lens; 4 gills.",
            "leadBn": "গ্যাসপূর্ণ বহু প্রকোষ্ঠে বিভক্ত বহিস্থ চ্যাপ্টা সর্পিলাকার খোলক যা সাইফাঙ্কল নালী দ্বারা যুক্ত; চোষকবিহীন ৯০টি কর্ষিকা; লেন্সবিহীন চোখ; ৪টি ফুলকা।",
            "diagnosticFeature": "Subclass Nautiloidea (Nautilus pompilius): External multichambered gas shell, siphuncle, 90 tentacles",
            "diagnosticFeatureBn": "নটিলোইডিয়া (নটিলাস পম্পিলিয়াস): বহিস্থ প্রকোষ্ঠময় খোলক, ৯০টি কর্ষিকা",
            "resultType": "species",
            "speciesId": "sp-nautilus-pompilius",
            "rationaleEn": "Resolves to Chambered nautilus (Nautilus pompilius: Nautilidae)",
            "rationaleBn": "চেম্বার্ড নটিলাস (নটিলাস পম্পিলিয়াস: নটিলিডি পরিবার)"
          },
          {
            "lead": "Subclass Coleoidea: Shell internalized, reduced, or completely absent; 2 gills; 8 arms (plus 2 retractile tentacles in decapods) equipped with cups/suckers; ink sac present; advanced lens-bearing eyes with iris.",
            "leadBn": "কোলিঅইডিয়া উপশ্রেণি: খোলক অভ্যন্তরীণ, হ্রাসপ্রাপ্ত বা সম্পূর্ণ অনুপস্থিত; ২টি ফুলকা; ৮টি বা ১০টি চোষকযুক্ত বাহু; কালিথলি ও লেন্সযুক্ত উন্নত চোখ।",
            "diagnosticFeature": "Subclass Coleoidea: Internalized or absent shell, 8 or 10 sucker-bearing appendages, ink sac",
            "diagnosticFeatureBn": "কোলিঅইডিয়া: অভ্যন্তরীণ বা বিলুপ্ত খোলক, চোষকযুক্ত বাহু, কালিথলি",
            "resultType": "next_step",
            "nextStepId": 9
          }
        ]
      },
      {
        "id": 9,
        "title": "Coleoidea: 8-Armed Octopuses vs 10-Appendage Decapodiformes (Squid & Cuttlefish)",
        "titleBn": "কোলিঅইডিয়া: ৮-বাহুযুক্ত অক্টোপাস বনাম ১০-উপাঙ্গযুক্ত স্কুইড ও ক্যাটলফিশ",
        "character": "8 sessile equal arms without tentacles or internal shell vs 8 arms + 2 longer retractile tentacles with internal cuttlebone/gladius",
        "characterBn": "খোলকহীন ৮টি সমান বাহু বনাম ক্যাটলবোন/গ্লাডিয়াসযুক্ত ৮টি বাহু ও ২টি দীর্ঘ কর্ষিকা",
        "couplets": [
          {
            "lead": "Globose, bag-like mantle with eight flexible equal-length arms bearing two rows of muscular suckers; tentacles completely absent; shell completely lost; benthic rock/reef inhabitant displaying complex camouflage and cognitive behaviors.",
            "leadBn": "গোলাকার থলের মতো দেহ যাতে দুই সারির চোষকযুক্ত ৮টি নমনীয় বাহু থাকে; কর্ষিকা নেই; খোলক সম্পূর্ণরূপে বিলুপ্ত; অসাধারণ ক্যামোফ্লেজ ও বুদ্ধিমত্তা।",
            "diagnosticFeature": "Octopus vulgaris: 8 equal arms with biserial suckers, no shell or tentacles, benthic",
            "diagnosticFeatureBn": "অক্টোপাস ভালগারিস: ৮টি চোষক বাহু, খোলক ও কর্ষিকাহীন, সাধারণ অক্টোপাস",
            "resultType": "species",
            "speciesId": "sp-octopus-vulgaris",
            "rationaleEn": "Resolves to Common octopus (Octopus vulgaris: Octopodidae)",
            "rationaleBn": "সাধারণ অক্টোপাস (অক্টোপাস ভালগারিস: অকটোপোডিডি পরিবার)"
          },
          {
            "lead": "Superorder Decapodiformes: Ten appendages (8 sessile arms plus 2 longer extensible prey-capturing tentacles with expanded terminal clubs); internal support structure present inside dorsal mantle.",
            "leadBn": "ডেকাপোডিফরমিস: দশটি উপাঙ্গ (৮টি সাধারণ বাহু এবং শিকার ধরার জন্য ২টি দীর্ঘ সম্প্রসারণশীল কর্ষিকা); ম্যান্টলের ভেতরে কঙ্কাল কাঠামো থাকে।",
            "diagnosticFeature": "Decapodiformes: 8 arms + 2 tentacles, internal cuttlebone or chitinous pen",
            "diagnosticFeatureBn": "ডেকাপোডিফরমিস: ৮টি বাহু ও ২টি কর্ষিকা, ক্যাটলবোন বা পেন",
            "resultType": "next_step",
            "nextStepId": 10
          }
        ]
      },
      {
        "id": 10,
        "title": "Decapodiformes: Cuttlefish vs Squid",
        "titleBn": "ডেকাপোডিফরমিস: ক্যাটলফিশ বনাম স্কুইড",
        "character": "Broad body with internal porous calcified cuttlebone vs slender torpedo body with flexible chitinous gladius",
        "characterBn": "ক্যাটলবোনযুক্ত প্রশস্ত চ্যাপ্টা দেহ বনাম গ্লাডিয়াসযুক্ত সরু টর্পেডো আকৃতির দেহ",
        "couplets": [
          {
            "lead": "Broad, dorsoventrally flattened oval mantle bordered along its entire length by a narrow undulating fin ribbon; internal skeleton is a thick, oval porous chalky-calcified buoyancy cuttlebone; distinctive W-shaped pupil.",
            "leadBn": "উভয় পাশে অবিচ্ছিন্ন পাখনাযুক্ত প্রশস্ত চ্যাপ্টা ডিম্বাকৃতি দেহ; ভেতরে পুরু ছিদ্রাল চুনময় ক্যাটলবোন থাকে; চোখের তারারন্ধ্র ইংরেজি W বর্ণের মতো।",
            "diagnosticFeature": "Sepia officinalis: Broad flattened mantle, internal calcified cuttlebone, W-shaped pupil, ribbon fins",
            "diagnosticFeatureBn": "সেপিয়া অফিসিনালিস: চ্যাপ্টা দেহ, চুনযুক্ত ক্যাটলবোন, ডব্লিউ আকৃতির চোখ",
            "resultType": "species",
            "speciesId": "sp-sepia-officinalis",
            "rationaleEn": "Resolves to Common cuttlefish (Sepia officinalis: Sepiidae)",
            "rationaleBn": "কমন ক্যাটলফিশ (সেপিয়া অফিসিনালিস: সেপিয়িডি পরিবার)"
          },
          {
            "lead": "Elongated, streamlined torpedo-shaped cylindrical mantle equipped with a pair of large rhomboid or triangular terminal swimming fins on posterior third; internal skeleton is a thin, flexible feather-shaped transparent chitinous rod (gladius or pen); fast pelagic jet-propelled swimmer.",
            "leadBn": "পেছনের দিকে একজোড়া ত্রিভুজাকার পাখনাযুক্ত সরু টর্পেডো আকৃতির দ্রুত সাঁতারু দেহ; ভেতরে পাতলা স্বচ্ছ পালকসদৃশ কাইটিনময় গ্লাডিয়াস বা পেন থাকে।",
            "diagnosticFeature": "Loligo vulgaris: Streamlined torpedo mantle, terminal triangular fins, internal chitinous gladius",
            "diagnosticFeatureBn": "ললিগো ভালগারিস: টর্পেডো আকৃতির দেহ, ত্রিভুজাকার পাখনা, কাইটিন গ্লাডিয়াস",
            "resultType": "species",
            "speciesId": "sp-loligo-vulgaris",
            "rationaleEn": "Resolves to European squid (Loligo vulgaris: Loliginidae)",
            "rationaleBn": "ইউরোপিয়ান স্কুইড (ললিগো ভালগারিস: লোলিগিনিডি পরিবার)"
          }
        ]
      }
    ]
  },
  {
    "id": "key-global-annelida-lineages",
    "title": "Diagnostic Key to the Major Classes & Lineages of Phylum Annelida",
    "titleBn": "অ্যানেলিডা (বলয়ী প্রাণী) পর্বের প্রধান শ্রেণি ও বংশধারার শনাক্তকরণ কুঞ্জি",
    "scope": "global",
    "targetTaxonId": "taxon-annelida-marine",
    "majorGroup": "invertebrates",
    "taxonScope": "Phylum Annelida (Segmented Worms: Polychaetes, Oligochaetes, Leeches)",
    "taxonScopeBn": "অ্যানেলিডা পর্ব (বলয়ী কৃমি: পলিকিট, কেঁচো ও জোঁক)",
    "description": "Authoritative dichotomous key distinguishing the primary classes and canonical species of Phylum Annelida based on chaetae arrangement, clitellum presence/absence, parapodial development, suckers, and cephalic appendages.",
    "descriptionBn": "প্যারাপোডিয়া, কিটি/সিটা, ক্লাইটেলাম, চোষক ও মস্তকীয় উপাঙ্গের ওপর ভিত্তি করে অ্যানেলিডা পর্বের প্রধান দল ও প্রামাণ্য প্রজাতি শনাক্তকরণ কুঞ্জি।",
    "educationalLevel": "intermediate",
    "keyType": "dichotomous",
    "sourceReferenceIds": [
      "ref-ruppert-2004",
      "ref-hickman-2020",
      "ref-world-polychaeta-2026"
    ],
    "verificationStatus": "verified",
    "steps": [
      {
        "id": 1,
        "title": "Parapodia & Setae vs Clitellar Organization",
        "titleBn": "প্যারাপোডিয়া ও সিটা বনাম ক্লাইটেলাম সংগঠন",
        "character": "Presence or absence of fleshy lateral parapodia and a reproductive clitellum",
        "characterBn": "পার্শ্বীয় মাংসল প্যারাপোডিয়া এবং প্রজনন ক্লাইটেলামের উপস্থিতি বা অনুপস্থিতি",
        "couplets": [
          {
            "lead": "Lateral unjointed fleshy appendages (parapodia) bearing numerous chitinous chaetae present; distinct cephalic prostomial sensory appendages (tentacles, palps, eyes) typically well developed; reproductive organs temporary; permanent clitellum absent; primarily marine.",
            "leadBn": "বহু কাইটিনযুক্ত কিটি/সিটাবিশিষ্ট মাংসল প্যারাপোডিয়া উপস্থিত; সুগঠিত মস্তকীয় সংবেদী উপাঙ্গ (কর্ষিকা, প্যাল্প, চক্ষু) বিদ্যমান; অস্থায়ী জননাঙ্গ; ক্লাইটেলাম অনুপস্থিত; প্রধানত সামুদ্রিক।",
            "diagnosticFeature": "Class Polychaeta: Parapodia with multiple chaetae, cephalic sensory organs, no clitellum",
            "diagnosticFeatureBn": "শ্রেণি পলিকিটা: প্যারাপোডিয়া, বহু সিটা, মস্তকীয় সংবেদী অঙ্গ, ক্লাইটেলামহীন",
            "resultType": "next_step",
            "nextStepId": 2
          },
          {
            "lead": "Parapodia completely absent; chaetae few per segment or entirely absent; cephalic sensory appendages reduced or absent; glandular reproductive collar (clitellum) present during breeding or permanently; hermaphroditic; terrestrial or freshwater.",
            "leadBn": "প্যারাপোডিয়া সম্পূর্ণ অনুপস্থিত; খণ্ডক প্রতি সিটা সংখ্যায় অল্প বা অনুপস্থিত; মস্তকীয় উপাঙ্গ হ্রাসপ্রাপ্ত; প্রজনন ঋতুতে গ্রন্থিময় ক্লাইটেলাম বিদ্যমান; উভলিঙ্গ; স্থলচর বা মিঠাপানির।",
            "diagnosticFeature": "Class Clitellata: Parapodia absent, clitellum present, hermaphroditic",
            "diagnosticFeatureBn": "শ্রেণি ক্লাইটেলাটা: প্যারাপোডিয়াহীন, ক্লাইটেলামযুক্ত, উভলিঙ্গ",
            "resultType": "next_step",
            "nextStepId": 4
          }
        ]
      },
      {
        "id": 2,
        "title": "Polychaete Habit: Errantia vs Sedentaria",
        "titleBn": "পলিকিট জীবনপ্রণালী: মুক্তজীবী বনাম নালীবাসী/স্থায়ী",
        "character": "Segmental homonomy, mobility, and cephalic/pharyngeal specialization",
        "characterBn": "দৈহিক খণ্ডকের সমরূপতা, চলনক্ষমতা এবং গলবিলীয় বিশেষায়ন",
        "couplets": [
          {
            "lead": "Segments essentially homonomous throughout body; large biramous parapodia with protruding acicula and sensory cirri; active free-moving crawler/burrower with eversible muscular pharynx equipped with chitinous pincer-like jaws and paragnaths.",
            "leadBn": "দেহজুড়ে খণ্ডকসমূহ সমরূপ; সুগঠিত দ্বিশাখ প্যারাপোডিয়া ও সংবেদী সিরিযুক্ত; কাইটিন নির্মিত চোয়াল ও প্রোগ্লটিডসমন্বিত পরিবর্তনীয় গলবিলবিশিষ্ট মুক্ত সাঁতারু বা শিকারী।",
            "diagnosticFeature": "Errant polychaete: Homonomous somites, biramous parapodia, dentate eversible proboscis",
            "diagnosticFeatureBn": "মুক্তজীবী পলিকিট: সমরূপ খণ্ডকায়ন, দ্বিশাখ প্যারাপোডিয়া, দাঁতযুক্ত গলবিল",
            "resultType": "species",
            "speciesId": "sp-alitta-virens",
            "rationaleEn": "Resolves to King ragworm (Alitta virens: Nereididae)",
            "rationaleBn": "কিং র্যাগওয়ার্ম (অ্যালিটা ভিরেন্স: নেরিডিডি পরিবার)"
          },
          {
            "lead": "Body segments heteronomous, regionally differentiated into thorax and abdomen; parapodia modified, reduced, or bearing specialized uncini (hooks); tubicolous or sedentary burrowing detritivore or suspension feeder.",
            "leadBn": "দেহ বক্ষ ও উদরে বিভক্ত বিষমরূপ খণ্ডকবিশিষ্ট; প্যারাপোডিয়া হ্রাসপ্রাপ্ত বা হুকযুক্ত; নালীবাসী বা গর্তবাসী তলানিভোজী/ভাসমান খাদ্য সংগ্রহকারী।",
            "diagnosticFeature": "Sedentary polychaetes: Regionally specialized segments, reduced parapodia, specialized burrow/tube",
            "diagnosticFeatureBn": "স্থায়ী পলিকিট: অঞ্চলভিত্তিক বিশেষায়িত খণ্ডক, হ্রাসপ্রাপ্ত প্যারাপোডিয়া",
            "resultType": "next_step",
            "nextStepId": 3
          }
        ]
      },
      {
        "id": 3,
        "title": "Sedentary Polychaetes: Branchial Crown vs Burrowing Lugworm",
        "titleBn": "স্থায়ী পলিকিট: ফুলকা মুকুট বনাম বালুর গর্তবাসী কৃমি",
        "character": "Presence of anterior tentacular branchial fan vs parapodial branchiae",
        "characterBn": "অগ্রবর্তী ফুলকা মুকুট বনাম মধ্যবর্তী প্যারাপোডিয়াল ফুলকা",
        "couplets": [
          {
            "lead": "Anterior prostomium/peristomium transformed into a prominent funnel-shaped or spiraled branchial crown of ciliated pinnate radioles used for suspension feeding and gas exchange; lives inside a flexible membranous mucous-mud tube; body lacks mid-body branched gills.",
            "leadBn": "অগ্রপ্রান্ত খাদ্য গ্রহণ ও শ্বসনের জন্য পালকসদৃশ ফুলকা মুকুটে রূপান্তরিত; নমনীয় শ্লেষ্মা-কাদার নালীর মধ্যে বসবাস করে; দেহের মাঝখানে বহুরূপী ফুলকা অনুপস্থিত।",
            "diagnosticFeature": "Sabellid fanworm: Plumose tentacular crown (radioles), parchment tube",
            "diagnosticFeatureBn": "স্যাবেলিড ফ্যানওয়ার্ম: পালকসদৃশ সংবেদী ফুলকা মুকুট, সুরক্ষানালী",
            "resultType": "species",
            "speciesId": "sp-sabella-spallanzanii",
            "rationaleEn": "Resolves to Mediterranean fanworm (Sabella spallanzanii: Sabellidae)",
            "rationaleBn": "ভূমধ্যসাগরীয় ফ্যানওয়ার্ম (স্যাবেলা স্প্যালানজানি)"
          },
          {
            "lead": "Anterior end lacks a ciliated plumose tentacular crown; stout cylindrical body with thick muscular cuticle; middle abdominal segments bear pairs of red branched tufted gills (branchiae); produces coiled fecal sand casts at burrow entrance.",
            "leadBn": "অগ্রপ্রান্তে পালকযুক্ত মুকুট অনুপস্থিত; স্থূল নলাকার দেহ; মধ্য উদরীয় খণ্ডকসমূহে উজ্জ্বল লাল শাখান্বিত ফুলকা গুচ্ছ বর্তমান; বালুর ওপর কয়েল সদৃশ মল জমা করে।",
            "diagnosticFeature": "Arenicolid lugworm: J-shaped burrower, tufted branchiae on mid-body somites, sand casts",
            "diagnosticFeatureBn": "অ্যারেনিকোলিড লাগওয়ার্ম: মধ্যদেহে ফুলকা গুচ্ছ, বালুর গর্তে বসবাসকারী",
            "resultType": "species",
            "speciesId": "sp-arenicola-marina",
            "rationaleEn": "Resolves to Lugworm (Arenicola marina: Arenicolidae)",
            "rationaleBn": "লাগওয়ার্ম (অ্যারেনিকোলা মারিনা: অ্যারেনিকোলিডি পরিবার)"
          }
        ]
      },
      {
        "id": 4,
        "title": "Clitellata: Setae-Bearing Oligochaetes vs Suctorial Leeches",
        "titleBn": "ক্লাইটেলাটা: সিটাবিশিষ্ট অলিগোকিট বনাম চোষকযুক্ত জোঁক",
        "character": "Presence of chaetae and absence of suckers vs complete lack of chaetae and dual suckers",
        "characterBn": "সিটার উপস্থিতি ও চোষকহীনতা বনাম সিটাহীনতা ও উভয় প্রান্তে চোষক",
        "couplets": [
          {
            "lead": "Chitinous chaetae (setae) present, typically arranged in four pairs per segment or in bundles; anterior and posterior terminal suckers completely absent; internal metameric septa fully developed; coelomic cavity spacious and fluid-filled.",
            "leadBn": "কাইটিনময় সিটা উপস্থিত, সাধারণত প্রতি খণ্ডকে ৪ জোড়া বা গুচ্ছে বিন্যস্ত; অগ্র ও পশ্চাৎ প্রান্তীয় চোষক অনুপস্থিত; অভ্যন্তরীণ সেপ্টা সুগঠিত; সিলোম তরলপূর্ণ ও প্রশস্ত।",
            "diagnosticFeature": "Subclass Oligochaeta: Chaetae present, suckers absent, fluid hydrostatic coelom",
            "diagnosticFeatureBn": "উপশ্রেণি অলিগোকিটা: সিটা উপস্থিত, চোষক অনুপস্থিত, প্রশস্ত সিলোম",
            "resultType": "next_step",
            "nextStepId": 5
          },
          {
            "lead": "Specialized ectoparasitic or predatory habit; setae completely absent; muscular anterior oral sucker and posterior ventral sucker present; body with fixed 33 segments obscured by superficial secondary annuli; coelom reduced to sinuses.",
            "leadBn": "বিশেষায়িত বহিঃপরজীবী বা শিকারী স্বভাব; চলনরেণু বা কিটি সম্পূর্ণ অনুপস্থিত; পেশিবহুল অগ্র ও পশ্চাৎ চোষক উপস্থিত; অগভীর বলয় দ্বারা আবৃত নির্দিষ্ট ৩৩টি দেহখণ্ডক; সিলোম রক্তনালীসদৃশ সাইনাসে রূপান্তরিত।",
            "diagnosticFeature": "Anterior and posterior suckers, no setae, 33 segments",
            "diagnosticFeatureBn": "অগ্র ও পশ্চাৎ চোষক, কিটিহীন, ৩৩টি খণ্ডক",
            "resultType": "next_step",
            "nextStepId": 7
          }
        ]
      },
      {
        "id": 5,
        "title": "Oligochaeta: Slender Aquatic Sludge Worms vs Terrestrial Earthworms",
        "titleBn": "অলিগোকিটা: সরু জলজ স্লাজ ওয়ার্ম বনাম স্থলচর কেঁচো",
        "character": "Aquatic habit with dorsal hair chaetae vs terrestrial habit with paired lumbricine setae",
        "characterBn": "পৃষ্ঠীয় লোমশ সিটাযুক্ত জলজ জীবন বনাম জোড়াবদ্ধ সিটাযুক্ত স্থলচর জীবন",
        "couplets": [
          {
            "lead": "Slender aquatic or semi-aquatic sludge worms; benthic burrowers in freshwater sediments; hair setae present; capable of surviving in severe hypoxic organic sludge.",
            "leadBn": "সরু জলজ স্লাজ কৃমি; স্বাদু পানির পলিতে বাসকারী; চুলের মতো কিটি বিদ্যমান; চরম অক্সিজেন ঘাটতিপূর্ণ জৈব বর্জ্যে টিকে থাকতে সক্ষম।",
            "diagnosticFeature": "Aquatic sludge dweller, hair setae, hemoglobin in blood",
            "diagnosticFeatureBn": "জলজ বর্জ্যবাসী, চুলের মতো কিটি, হিমোগ্লোবিন",
            "resultType": "species",
            "speciesId": "sp-tubifex-tubifex",
            "rationaleEn": "Resolves to Tubifex tubifex (Sludge worm)",
            "rationaleBn": "টিউবিফেক্স টিউবিফেক্স (স্লাজ ওয়ার্ম)"
          },
          {
            "lead": "Terrestrial burrowing earthworms of family Lumbricidae; cylindrical body; setae arranged in lumbricine pairs (8 per segment); clitellum situated far posteriorly, beginning behind segment 20.",
            "leadBn": "লুম্ব্রিসিডি পরিবারের স্থলচর কেঁচো; নলাকার দেহ; প্রতি খণ্ডকে ৮টি করে জোড়ায় কিটি বিন্যস্ত; ক্লাইটেলাম পেছনের দিকে (২০তম খণ্ডকের পর) অবস্থিত।",
            "diagnosticFeature": "Lumbricine setae (8 per segment), posterior clitellum (behind seg 20)",
            "diagnosticFeatureBn": "লুম্ব্রিসিন কিটি (খণ্ডকে ৮টি), পেছনের ক্লাইটেলাম (২০তম খণ্ডের পর)",
            "resultType": "next_step",
            "nextStepId": 6
          },
          {
            "lead": "Terrestrial burrowing earthworms of family Megascolecidae (Asian/Oriental earthworms); setae arranged in a continuous circular ring (perichaetine, 100+ per segment) on every segment; prominent annular clitellum strictly located on segments 14 to 16.",
            "leadBn": "মেগাস্কোলেসিডি পরিবারের এশীয়/প্রাচ্যদেশীয় স্থলচর কেঁচো; প্রতি খণ্ডকে আংটির মতো বৃত্তাকারে সাজানো অসংখ্য কিটি (পেরিকাইটিন বিন্যাস); ক্লাইটেলাম সুনির্দিষ্টভাবে ১৪ থেকে ১৬তম খণ্ডকে বেষ্টন করে থাকে।",
            "diagnosticFeature": "Perichaetine setae ring (100+ per segment), clitellum strictly on 14-16",
            "diagnosticFeatureBn": "পেরিকাইটিন কিটি বলয় (১০০+ কিটি), ১৪-১৬তম খণ্ডকে ক্লাইটেলাম",
            "resultType": "species",
            "speciesId": "sp-metaphire-posthuma",
            "rationaleEn": "Resolves to Metaphire posthuma (Asian common earthworm)",
            "rationaleBn": "মেটাফায়ার পোস্টহুমা (এশীয় সাধারণ কেঁচো)"
          }
        ]
      },
      {
        "id": 6,
        "title": "Lumbricidae Earthworms: Deep Anecic Burrower vs Epigeic Tiger Worm",
        "titleBn": "লুম্ব্রিসিডি কেঁচো: গভীর গর্তবাসী বনাম পৃষ্ঠীয় কম্পোস্ট কেঁচো",
        "character": "Clitellum position, tubercula pubertatis, coloration, and burrowing tier",
        "characterBn": "ক্লাইটেলামের খণ্ডক অবস্থান, টিউবারকুলা পিউবারটাটিস, বর্ণ ও বাসস্থল",
        "couplets": [
          {
            "lead": "Large anecic deep-burrowing earthworm (15-30 cm); uniform cylindrical body with reddish-brown to violet anterior dorsum and flattened spatulate paddle-like posterior end; clitellum saddle-shaped occupying segments 31/32 to 37; tubercula pubertatis on segments 33-36.",
            "leadBn": "বৃহৎ গভীর গর্তবাসী কেঁচো (১৫-৩০ সেমি); লালচে-বাদামি অগ্রভাগ ও চ্যাপ্টা বৈঠাসদৃশ পশ্চাৎভাগ; ক্লাইটেলাম ৩১/৩২ থেকে ৩৭তম খণ্ডকে বিস্তৃত; টিউবারকুলা ৩৩-৩৬ খণ্ডকে।",
            "diagnosticFeature": "Lumbricus terrestris: Clitellum 31/32-37, tubercula pubertatis 33-36, spatulate tail, anecic",
            "diagnosticFeatureBn": "লুমব্রিকাস টেরেস্ট্রিস: ক্লাইটেলাম ৩১/৩২-৩৭, টিউবারকুলা ৩৩-৩৬, বৈঠাকৃতি লেজ",
            "resultType": "species",
            "speciesId": "sp-lumbricus-terrestris",
            "rationaleEn": "Resolves to Common earthworm / Nightcrawler (Lumbricus terrestris: Lumbricidae)",
            "rationaleBn": "সাধারণ কেঁচো (লুমব্রিকাস টেরেস্ট্রিস: লুম্ব্রিসিডি পরিবার)"
          },
          {
            "lead": "Medium-sized epigeic surface/compost earthworm (6-13 cm); distinct alternating yellowish-buff and purplish-brown transverse intersegmental banding (tiger striping); clitellum saddle-shaped occupying segments 24/25/26 to 32; tubercula pubertatis on segments 28-30/31; exudes pungent yellow coelomic fluid when handled.",
            "leadBn": "মাঝারি পৃষ্ঠীয় কম্পোস্ট কেঁচো (৬-১৩ সেমি); হলুদ ও রক্তিম বাদামি সুস্পষ্ট ডোরাকাটা বা বাঘের মতো দাগ; ক্লাইটেলাম ২৪-৩২ খণ্ডকে; বিরক্ত করলে ঝাঁঝালো হলুদ তরল নিঃসরণ করে।",
            "diagnosticFeature": "Eisenia fetida: Clitellum 24/26-32, tubercula pubertatis 28-30, transverse tiger stripes, pungent coelomic fluid",
            "diagnosticFeatureBn": "আইসেনিয়া ফেটিডা: ক্লাইটেলাম ২৪/২৬-৩২, ডোরাকাটা দাগ, হলুদ আত্মরক্ষামূলক তরল",
            "resultType": "species",
            "speciesId": "sp-eisenia-fetida",
            "rationaleEn": "Resolves to Red wiggler / Tiger worm (Eisenia fetida: Lumbricidae)",
            "rationaleBn": "লাল কেঁচো / টাইগার ওয়ার্ম (আইসেনিয়া ফেটিডা: লুম্ব্রিসিডি পরিবার)"
          }
        ]
      },
      {
        "id": 7,
        "title": "Subclass Hirudinea: Medicinal Leech vs Asian Cattle Leech",
        "titleBn": "উপশ্রেণি হিরুডিনিয়া: ঔষধি জোঁক বনাম এশীয় গবাদিপশুর জোঁক",
        "character": "Denticle arrangement, eyes, and dorsal pigment patterns",
        "characterBn": "দাঁতের বিন্যাস, চোখের সংখ্যা ও পৃষ্ঠদেশীয় বর্ণবিন্যাস",
        "couplets": [
          {
            "lead": "Dorsum olive-green to brown with six distinct reddish or yellow longitudinal stripes; five pairs of eyes arranged in an arch; pharynx equipped with 3 muscular jaws bearing numerous fine teeth (monostichodont, 80-90 per jaw); native to Western Palearctic.",
            "leadBn": "পৃষ্ঠদেশ জলপাই-সবুজ থেকে বাদামি এবং ৬টি লালচে বা হলুদ অনুদৈর্ঘ্য ডোরাযুক্ত; খিলানের মতো সাজানো ৫ জোড়া চোখ; গলবিলে ৩টি পেশিবহুল চোয়ালে ৮০-৯০টি ক্ষুদ্র দাঁত; পশ্চিম প্যালিআর্কটিক অঞ্চলের প্রজাতি।",
            "diagnosticFeature": "5 pairs of eyes in arch, 6 dorsal stripes, Palearctic medicinal leech",
            "diagnosticFeatureBn": "খিলানে ৫ জোড়া চোখ, ৬টি পৃষ্ঠদেশীয় ডোরা, প্যালিআর্কটিক ঔষধি জোঁক",
            "resultType": "species",
            "speciesId": "sp-hirudo-medicinalis",
            "rationaleEn": "Resolves to Hirudo medicinalis (European medicinal leech)",
            "rationaleBn": "হিরুডো মেডিসিনালিস (ইউরোপীয় ঔষধি জোঁক)"
          },
          {
            "lead": "Dorsum rich olive-green with a bright yellow or orange continuous lateral stripe and a broken dark median stripe; 5 pairs of eyes; 3 massive jaws with coarse monostichodont teeth; ubiquitous ectoparasite of cattle and humans across South Asian wetland floodplains.",
            "leadBn": "পৃষ্ঠদেশ গাঢ় জলপাই-সবুজ, দুই পাশে উজ্জ্বল অবিচ্ছিন্ন হলুদ/কমলা পার্শ্বরেখা ও মাঝে খণ্ডিত কালো মধ্যরেখা; ৫ জোড়া চোখ; ৩টি শক্তিশালী চোয়ালযুক্ত; দক্ষিণ এশিয়ার জলাভূমির গবাদিপশু ও মানুষের সুপরিচিত পরজীবী জোঁক।",
            "diagnosticFeature": "Yellow lateral margin, coarse monostichodont teeth, South Asian cattle leech",
            "diagnosticFeatureBn": "হলুদ পার্শ্বরেখা, শক্তিশালী চোয়াল, দক্ষিণ এশিয়ার গবাদিপশুর জোঁক",
            "resultType": "species",
            "speciesId": "sp-hirudinaria-granulosa",
            "rationaleEn": "Resolves to Hirudinaria granulosa (Indian cattle leech)",
            "rationaleBn": "হিরুডিনারিয়া গ্র্যানুলোসা (ভারতীয় গবাদিপশুর জোঁক)"
          }
        ]
      }
    ]
  },
  {
    "id": "key-global-arthropoda-lineages",
    "title": "Diagnostic Key to Subphyla & Major Classes of Arthropoda",
    "titleBn": "আর্থ্রোপোডা (সন্ধিপদী প্রাণী) পর্বের উপপর্ব ও প্রধান শ্রেণির শনাক্তকরণ কুঞ্জি",
    "scope": "global",
    "targetTaxonId": "taxon-arthropoda",
    "majorGroup": "arthropoda",
    "taxonScope": "Phylum Arthropoda (Chelicerates, Myriapods, Crustaceans, Insects)",
    "taxonScopeBn": "আর্থ্রোপোডা পর্ব (চেলিসেরাটা, মিরিয়াপোডা, ক্রাস্টাশিয়া, ইনসেক্টা)",
    "description": "Authoritative dichotomous key distinguishing the four extant arthropod subphyla and their canonical representative species through tagmata segmentation, chelicerae vs antennae, appendage ramification, and respiratory organs.",
    "descriptionBn": "ট্যাগমাটা, চেলিসেরা, শুঙ্গ, সন্ধিল উপাঙ্গের গঠন ও শ্বসন অঙ্গের ওপর ভিত্তি করে জীবিত ৪টি উপপর্ব ও ১৭টি প্রামাণ্য সন্ধিপদী প্রজাতি শনাক্তকরণ কুঞ্জি।",
    "educationalLevel": "intermediate",
    "keyType": "dichotomous",
    "sourceReferenceIds": [
      "ref-hickman-2020",
      "ref-ruppert-2004"
    ],
    "verificationStatus": "verified",
    "steps": [
      {
        "id": 1,
        "title": "Antennae and Cephalic Appendages: Chelicerata vs Mandibulata",
        "titleBn": "শুঙ্গ ও মস্তকীয় উপাঙ্গ: চেলিসেরাটা বনাম ম্যান্ডিবুলাটা",
        "character": "Presence of pincer-like chelicerae without antennae vs antennae and chewing mandibles",
        "characterBn": "শুঙ্গহীন চেলিসেরা উপাঙ্গ বনাম শুঙ্গ ও চর্বনোপযোগী ম্যান্ডিবল",
        "couplets": [
          {
            "lead": "Antennae completely absent; anterior cephalothorax (prosoma) bears six pairs of appendages: 1st pair pincer-like or fang-like chelicerae, 2nd pair sensory or raptorial pedipalps, and 4 pairs of walking legs; body divided into prosoma and opisthosoma (abdomen).",
            "leadBn": "শুঙ্গ সম্পূর্ণ অনুপস্থিত; অগ্রবর্তী প্রোসোমায় ৬ জোড়া উপাঙ্গ থাকে: ১ম জোড়া চেলিসেরা, ২য় জোড়া পেডিপ্যাল্প এবং ৪ জোড়া চলন পদ; প্রোসোমা ও অপিস্থোসোমায় বিভক্ত।",
            "diagnosticFeature": "Subphylum Chelicerata: No antennae, chelicerae, pedipalps, 4 pairs of walking legs",
            "diagnosticFeatureBn": "উপপর্ব চেলিসেরাটা: শুঙ্গহীন, চেলিসেরা, পেডিপ্যাল্প, ৪ জোড়া চলন পদ",
            "resultType": "next_step",
            "nextStepId": 2
          },
          {
            "lead": "Antennae present (one or two pairs); head bears chewing jaws (mandibles) followed by one or two pairs of maxillae; walking legs vary in number (3 pairs, 5 pairs, or numerous).",
            "leadBn": "এক বা দুই জোড়া সংবেদী শুঙ্গ উপস্থিত; মস্তকে চর্বনকারী ম্যান্ডিবল চোয়াল ও ম্যাক্সিলা থাকে; চলন পদের সংখ্যা ৩ জোড়া, ৫ জোড়া বা ততোধিক।",
            "diagnosticFeature": "Mandibulata: Antennae present, chewing mandibles, maxillae",
            "diagnosticFeatureBn": "ম্যান্ডিবুলাটা: শুঙ্গযুক্ত, ম্যান্ডিবল চোয়াল, ম্যাক্সিলা",
            "resultType": "next_step",
            "nextStepId": 4
          }
        ]
      },
      {
        "id": 2,
        "title": "Subphylum Chelicerata: Merostomata vs Arachnida",
        "titleBn": "চেলিসেরাটা উপপর্ব: মেরোস্টোমাটা বনাম অ্যারাকনিডা",
        "character": "Marine with horseshoe carapace and book gills vs terrestrial with book lungs/tracheae",
        "characterBn": "ঘোড়ার খুরের মতো খোলস ও বুক গিলযুক্ত সামুদ্রিক বনাম বুক লাংযুক্ত স্থলচর মাকড়সা/বিচ্ছু",
        "couplets": [
          {
            "lead": "Marine benthic organism with a massive unsegmented horseshoe-shaped dorsal carapace covering the prosoma; abdominal book gills operated in gill chambers; long, rigid, spike-like posterior spine (telson); blue copper-based hemocyanin blood with amebocytes.",
            "leadBn": "ঘোড়ার খুরের মতো নিরেট চ্যাপ্টা খোলক; পেটের নিচে একাধিক পাতার মতো বুক গিল; দীর্ঘ সূঁচালো শক্ত পুচ্ছদণ্ড (টেলসন); তামাভিত্তিক নীল রক্ত ও অ্যামিবোসাইট।",
            "diagnosticFeature": "Limulus polyphemus: Horseshoe carapace, 5 pairs book gills, rigid caudal spine, blue blood",
            "diagnosticFeatureBn": "লিমুলাস পলিপহেমাস: রাজকাঁকড়া, বুক গিল, পুচ্ছ কাঁটা, নীল রক্ত",
            "resultType": "species",
            "speciesId": "sp-limulus-polyphemus",
            "rationaleEn": "Resolves to Atlantic horseshoe crab (Limulus polyphemus: Merostomata)",
            "rationaleBn": "আটলান্টিক হর্সশু ক্র্যাব / রাজকাঁকড়া (লিমুলাস পলিপহেমাস)"
          },
          {
            "lead": "Terrestrial arachnids respiring via internal book lungs and/or branching tracheal tubes; body divided into prosoma and opisthosoma; pedipalps chelate (pincer-like) or sensory leg-like; walking legs 4 pairs.",
            "leadBn": "অভ্যন্তরীণ বুক লাং বা ট্রাকিয়ার সাহায্যে শ্বাস নেওয়া স্থলচর সন্ধিপদী; প্রোসোমা ও অপিস্থোসোমায় বিভক্ত; ৪ জোড়া পদ; পেডিপ্যাল্প চিমটার মতো বা সংবেদী।",
            "diagnosticFeature": "Class Arachnida: Terrestrial, book lungs/tracheae, scorpions and spiders",
            "diagnosticFeatureBn": "অ্যারাকনিডা শ্রেণি: স্থলচর, বুক লাং, বিচ্ছু ও মাকড়সা",
            "resultType": "next_step",
            "nextStepId": 3
          }
        ]
      },
      {
        "id": 3,
        "title": "Class Arachnida: Scorpions vs Spiders",
        "titleBn": "অ্যারাকনিডা শ্রেণি: বিচ্ছু বনাম মাকড়সা",
        "character": "Elongated metasoma ending in venomous stinger vs unsegmented globose abdomen with spinnerets",
        "characterBn": "হুলযুক্ত লম্বা লেজ ও চিমটা বনাম স্পিনারেটযুক্ত গোল পেট ও বিষদাঁত",
        "couplets": [
          {
            "lead": "Large predatory arachnid up to 20 cm; pedipalps modified into massive, powerful grasping chelae (pincers); abdomen divided into broad mesosoma and slender 5-segmented postabdomen (metasoma or \"tail\") terminating in a sharp curved sting backed by paired venom glands; fluoresces bright blue-green under UV light.",
            "leadBn": "বিশাল শিকারী বিচ্ছু (২০ সেমি); পেডিপ্যাল্প দুটি শক্তিশালী চিমটায় রূপান্তরিত; সরু ৫ খণ্ডকের লেজের মাথায় বিষগ্রন্থিযুক্ত বাঁকানো হুল; অতিবেগুনি আলোয় জ্বলে।",
            "diagnosticFeature": "Pandinus imperator: Massive chelate pedipalps, 5-segmented metasoma with venom sting, UV fluorescence",
            "diagnosticFeatureBn": "প্যান্ডিনাস ইম্পেরেটর: এম্পেরর বৃশ্চিক, বিষাক্ত হুল, অতিবেগুনি প্রতিপ্রভা",
            "resultType": "species",
            "speciesId": "sp-pandinus-imperator",
            "rationaleEn": "Resolves to Emperor scorpion (Pandinus imperator: Scorpiones)",
            "rationaleBn": "এম্পেরর বৃশ্চিক / রাজ বিচ্ছু (প্যান্ডিনাস ইম্পেরেটর)"
          },
          {
            "lead": "Cephalothorax and unsegmented globose abdomen joined by a narrow pedicel waist; chelicerae modified into subchelate fangs delivering neurotoxic venom (latrotoxin); posterior abdomen bears 3 pairs of silk spinnerets; glossy jet-black body marked ventrally with an iconic bright red hourglass.",
            "leadBn": "সরু কোমর দ্বারা যুক্ত মাথা ও গোল পেট; বিষদাঁত হিসেবে রূপান্তর হওয়া চেলিসেরা; পেছনের স্পিনারেট দিয়ে জাল বোনে; চকচকে কালো পিঠ ও পেটে লাল বালুঘড়ির চিহ্ন।",
            "diagnosticFeature": "Latrodectus mactans: Narrow pedicel waist, silk spinnerets, red hourglass mark, latrotoxin",
            "diagnosticFeatureBn": "ল্যাট্রোডেক্টাস ম্যাকটানস: লাল বালুঘড়ি চিহ্ন, স্পিনারেট, ব্ল্যাক উইডো",
            "resultType": "species",
            "speciesId": "sp-latrodectus-mactans",
            "rationaleEn": "Resolves to Southern black widow (Latrodectus mactans: Araneae)",
            "rationaleBn": "ব্ল্যাক উইডো মাকড়সা (ল্যাট্রোডেক্টাস ম্যাকটানস)"
          }
        ]
      },
      {
        "id": 4,
        "title": "Mandibulata: Myriapoda vs Pancrustacea (Crustaceans & Hexapods)",
        "titleBn": "ম্যান্ডিবুলাটা: বহুচরণের মিরিয়াপোডা বনাম ক্রাস্টাশিয়া ও পতঙ্গ",
        "character": "Elongated trunk with numerous leg pairs vs body specialized into distinct tagmata (carapace or 3-segmented body)",
        "characterBn": "অসংখ্য পা বিশিষ্ট লম্বা দেহ বনাম সুনির্দিষ্ট ট্যাগমাটায় বিভক্ত দেহ",
        "couplets": [
          {
            "lead": "Subphylum Myriapoda: Body divided into a head with a single pair of antennae and an elongated, multisegmented trunk with numerous paired walking legs; gas exchange via extensive tracheal system with non-closing spiracles; strictly terrestrial.",
            "leadBn": "মিরিয়াপোডা উপপর্ব: এক জোড়া শুঙ্গযুক্ত মস্তক এবং বহু খণ্ডকবিশিষ্ট লম্বা দেহ যাতে অসংখ্য জোড়া পা থাকে; ট্রাকিয়া নালীর সাহায্যে শ্বাস নেয়; সম্পূর্ণ স্থলচর।",
            "diagnosticFeature": "Subphylum Myriapoda: Head + multisegmented homonomous trunk, numerous walking legs",
            "diagnosticFeatureBn": "মিরিয়াপোডা উপপর্ব: মস্তক ও বহু খণ্ডকবিশিষ্ট দেহ, অসংখ্য পা",
            "resultType": "species",
            "speciesId": "sp-scolopendra-gigantea",
            "rationaleEn": "Resolves to Peruvian giant centipede (Scolopendra gigantea: Chilopoda - 1 pair legs per segment, forcipules)",
            "rationaleBn": "দৈত্যাকার সেন্টিপিড / ক্যানকোলা (স্কোলোপেন্ড্রা জাইগ্যান্টিয়া: প্রতি খণ্ডকে ১ জোড়া পা)"
          },
          {
            "lead": "Pancrustacea: Body differentiated into distinct specialized tagmata; head and thorax covered by a cephalic shield or carapace (Crustacea) or body divided into discrete Head, 3-segmented Thorax with 3 leg pairs, and Abdomen (Hexapoda).",
            "leadBn": "দেহ সুনির্দিষ্ট অঞ্চলে বিভক্ত; মস্তক ও বক্ষ ক্যারাপেস দ্বারা আবৃত ক্রাস্টাশিয়া, অথবা মস্তক, ৩ খণ্ডকের বক্ষ (৩ জোড়া পা) ও উদরে বিভক্ত হেক্সাপোডা পতঙ্গ।",
            "diagnosticFeature": "Crustaceans (2 pairs antennae, biramous) & Hexapods (1 pair antennae, uniramous 6 legs)",
            "diagnosticFeatureBn": "ক্রাস্টাশিয়া (২ জোড়া শুঙ্গ) এবং ইনসেক্টা/হেক্সাপোডা (১ জোড়া শুঙ্গ, ৬ পা)",
            "resultType": "next_step",
            "nextStepId": 5
          }
        ]
      },
      {
        "id": 5,
        "title": "Crustacea vs Hexapoda (Insecta)",
        "titleBn": "ক্রাস্টাশিয়া (চিংড়ি/কাঁকড়া) বনাম হেক্সাপোডা (পতঙ্গ বা ইনসেক্টা)",
        "character": "Two pairs of antennae and primarily aquatic respiration vs one pair of antennae and 3 pairs of thoracic legs",
        "characterBn": "দুই জোড়া শুঙ্গ ও ফুলকাযুক্ত জলজ দেহ বনাম এক জোড়া শুঙ্গ, ৩ জোড়া বক্ষীয় পা ও ডানা",
        "couplets": [
          {
            "lead": "Subphylum Crustacea: Head bears two pairs of antennae (antennules and antennae); appendages ancestrally biramous (two-branched); respiration primarily via gills or body surface; primarily aquatic (marine, brackish, freshwater).",
            "leadBn": "ক্রাস্টাশিয়া উপপর্ব: মাথায় দুই জোড়া শুঙ্গ থাকে; উপাঙ্গসমূহ সাধারণত দ্বিশাখ; ফুলকার সাহায্যে শ্বাস নেয়; প্রধানত জলজ।",
            "diagnosticFeature": "Subphylum Crustacea: 2 pairs of antennae, biramous appendages, aquatic with gills",
            "diagnosticFeatureBn": "ক্রাস্টাশিয়া উপপর্ব: ২ জোড়া শুঙ্গ, দ্বিশাখ উপাঙ্গ, ফুলকাযুক্ত",
            "resultType": "next_step",
            "nextStepId": 6
          },
          {
            "lead": "Subphylum Hexapoda (Class Insecta): Head bears exactly one pair of antennae and one pair of compound eyes; thorax composed of three segments (prothorax, mesothorax, metathorax) bearing exactly three pairs of uniramous walking legs (6 legs total); typically bearing two pairs of wings on meso/metathorax; tracheal respiration through lateral spiracles.",
            "leadBn": "হেক্সাপোডা উপপর্ব (পতঙ্গ): এক জোড়া শুঙ্গ ও এক জোড়া পুঞ্জাক্ষি; তিন খণ্ডকের বক্ষে ঠিক ৩ জোড়া পা (মোট ৬টি পা); সাধারণত দুই জোড়া ডানা; ট্রাকিয়াল তন্ত্র দিয়ে শ্বাস নেয়।",
            "diagnosticFeature": "Class Insecta: 3 body tagmata, 1 pair antennae, 3 pairs uniramous legs, wings",
            "diagnosticFeatureBn": "ইনসেক্টা শ্রেণি: তিন খণ্ডক দেহ, ১ জোড়া শুঙ্গ, ৩ জোড়া পা, ডানা",
            "resultType": "next_step",
            "nextStepId": 10
          }
        ]
      },
      {
        "id": 6,
        "title": "Subphylum Crustacea: Branchiopoda vs Malacostraca",
        "titleBn": "ক্রাস্টাশিয়া উপপর্ব: ব্র্যাঙ্কিওপোডা বনাম ম্যালাকোস্ট্রাকা",
        "character": "Microscopic bivalved carapace with swimming antennae vs large macroscopic decapod with carapace and pereiopods",
        "characterBn": "আণুবীক্ষণিক সাঁতারু শুঙ্গযুক্ত খোলস বনাম ৫ জোড়া চলন পদবিশিষ্ট দশপদী চিংড়ি ও কাঁকড়া",
        "couplets": [
          {
            "lead": "Microscopic to miniature freshwater crustacean (1-5 mm); body enclosed within a bivalved transparent carapace with a ventral cleft; large branched second antennae used for jerky swimming locomotion; single large compound cyclops eye; leaf-like phyllopod thoracic legs.",
            "leadBn": "ক্ষুদ্রাকৃতির মিঠাপানির ক্রাস্টাশিয়ান (১-৫ মিমি); স্বচ্ছ দুই কপাট খোলসের ভেতর দেহ; বৃহৎ শাখান্বিত ২য় শুঙ্গ দিয়ে লাফিয়ে সাঁতার কাটে; একটি মাত্র পুঞ্জাক্ষি।",
            "diagnosticFeature": "Daphnia pulex: Bivalved carapace, swimming 2nd antennae, single median compound eye, cyclic parthenogenesis",
            "diagnosticFeatureBn": "ড্যাফনিয়া পিউলেক্স: ওয়াটার ফ্লি, সাঁতারু শুঙ্গ, একক পুঞ্জাক্ষি",
            "resultType": "species",
            "speciesId": "sp-daphnia-pulex",
            "rationaleEn": "Resolves to Common water flea (Daphnia pulex: Branchiopoda)",
            "rationaleBn": "ওয়াটার ফ্লি / ড্যাফনিয়া (ড্যাফনিয়া পিউলেক্স)"
          },
          {
            "lead": "Class Malacostraca (Order Decapoda): Large macroscopic crustaceans; thorax of 8 segments covered by a cephalothorax carapace; 5 pairs of thoracic walking legs (pereiopods), of which the first pair (or more) typically bears chelae (pincers); abdomen with 6 segments and telson.",
            "leadBn": "ম্যালাকোস্ট্রাকা শ্রেণি (ডেকাপোডা বর্গ): বৃহৎ ক্রাস্টাশিয়ান; ৫ জোড়া বক্ষীয় চলন পদ (যার প্রথম জোড়া বা ততোধিক চিমটায় রূপান্তরিত); উদরে ৬টি খণ্ডক ও টেলসন।",
            "diagnosticFeature": "Order Decapoda: 5 pairs pereiopods, cephalothorax carapace, abdomen with pleopods and uropods",
            "diagnosticFeatureBn": "ডেকাপোডা বর্গ: ৫ জোড়া চলন পদ (দশপদী), সুগঠিত ক্যারাপেস, প্লায়োপড",
            "resultType": "next_step",
            "nextStepId": 7
          }
        ]
      },
      {
        "id": 7,
        "title": "Order Decapoda: Shrimps vs Lobsters vs True Crabs",
        "titleBn": "ডেকাপোডা বর্গ: চিংড়ি বনাম লবস্টার বনাম প্রকৃত কাঁকড়া",
        "character": "Laterally compressed body with swimming pleopods vs large chelate lobster vs dorsoventrally flattened crab with folded abdomen",
        "characterBn": "পার্শ্বীয়ভাবে চ্যাপ্টা সাঁতারু চিংড়ি বনাম চিমটাযুক্ত লবস্টার বনাম পেট ভাঁজ করা কাঁকড়া",
        "couplets": [
          {
            "lead": "Marine and estuarine penaeid shrimp; body laterally compressed with first three pairs of pereiopods chelate; pleura of second abdominal segment overlap third segment only; prominent dark crossbands on carapace.",
            "leadBn": "সামুদ্রিক ও মোহনাজ পেনাইড চিংড়ি; প্রথম তিন জোড়া হাঁটার পায়ে চিমটা (কিলি) যুক্ত; দ্বিতীয় উদর খণ্ডকের প্লিউরা কেবল তৃতীয় খণ্ডককে আবৃত করে; খোসায় কালো ডোরা বিদ্যমান।",
            "diagnosticFeature": "Penaeid shrimp: 3 chelate pairs, non-overlapping 2nd pleuron",
            "diagnosticFeatureBn": "পেনাইড চিংড়ি: ৩ জোড়া চিমটা, অবিচ্ছিন্ন প্লিউরা",
            "resultType": "species",
            "speciesId": "sp-penaeus-monodon",
            "rationaleEn": "Resolves to Penaeus monodon (Giant tiger prawn)",
            "rationaleBn": "পেনাইয়াস মনোডন (বাগদা চিংড়ি)"
          },
          {
            "lead": "Freshwater caridean river prawn; second pair of pereiopods enormously elongated into massive pinching chelipeds (frequently longer than the body in adult males); pleura of second abdominal segment overlap both first and third segments.",
            "leadBn": "স্বাদু পানির ক্যারিডিয়ান নদী চিংড়ি; দ্বিতীয় জোড়া পা অত্যন্ত দীর্ঘ ও শক্তিশালী চিমটায় রূপান্তরিত (প্রাপ্তবয়স্ক পুরুষে দেহের চেয়েও লম্বা); দ্বিতীয় উদর খণ্ডকের প্লিউরা প্রথম ও তৃতীয় উভয় খণ্ডককে আবৃত করে।",
            "diagnosticFeature": "Caridean prawn: giant second chelipeds, overlapping 2nd abdominal pleura",
            "diagnosticFeatureBn": "ক্যারিডিয়ান চিংড়ি: বিশালাকার দ্বিতীয় পা, ১ ও ৩ খণ্ডকে প্লিউরা বিস্তার",
            "resultType": "species",
            "speciesId": "sp-macrobrachium-rosenbergii",
            "rationaleEn": "Resolves to Macrobrachium rosenbergii (Giant freshwater prawn)",
            "rationaleBn": "ম্যাক্রোব্রাকিয়াম রোজেনবার্গি (গলদা চিংড়ি)"
          },
          {
            "lead": "Reptant decapods adapted for benthic crawling; pleon either heavily armored with broad tail fan (lobsters) or greatly reduced and folded beneath cephalothorax (true crabs).",
            "leadBn": "তলদেশবাসী হামাগুড়ি দেওয়া ডেকাপোড; উদর হয় শক্তিশালী লেজের পাখা দ্বারা আবৃত (লবস্টার) অথবা ক্ষুদ্র হয়ে বক্ষদেশের নিচে ভাঁজ করা থাকে (কাঁকড়া)।",
            "diagnosticFeature": "Reptant decapods: lobsters, crayfish, and crabs",
            "diagnosticFeatureBn": "রেপটান্ট ডেকাপোড: লবস্টার ও কাঁকড়া",
            "resultType": "next_step",
            "nextStepId": 8
          }
        ]
      },
      {
        "id": 8,
        "title": "Reptant Decapods: Clawed Lobster vs Spiny Lobster vs Brachyuran Crabs",
        "titleBn": "লবস্টার বনাম স্পাইনি লবস্টার বনাম ব্র্যাকিউরান কাঁকড়া",
        "character": "Extended abdomen with giant chelae vs spiny antennae without claws vs reduced folded abdomen",
        "characterBn": "বিশাল চিমটাসহ প্রসারিত উদর বনাম কাঁটাযুক্ত লম্বা শুঙ্গ বনাম বুকের নিচে ভাঁজ করা পেট",
        "couplets": [
          {
            "lead": "First pair of pereiopods modified into massive, asymmetrical crushing and cutting pincer claws (chelae); elongated abdomen terminating in a broad fan-like tail (uropods and telson); steel-blue to dark greenish-blue body.",
            "leadBn": "প্রথম জোড়া পা বিশাল অসম চিমটায় রূপান্তরিত (একটি পেষণকারী ও অন্যটি কর্তনকারী); চ্যাপ্টা লেজযুক্ত লম্বা উদর; ইস্পাত-নীল দেহ।",
            "diagnosticFeature": "Homarus gammarus: Huge asymmetrical chelae, broad tail fan, marine benthic",
            "diagnosticFeatureBn": "হোমারাস গ্যামারাস: ইউরোপিয়ান লবস্টার, বিশাল চিমটা, পাখা লেজ",
            "resultType": "species",
            "speciesId": "sp-homarus-gammarus",
            "rationaleEn": "Resolves to European lobster (Homarus gammarus: Nephropidae)",
            "rationaleBn": "ইউরোপিয়ান লবস্টার (হোমারাস গ্যামারাস: নেফ্রোFramework পরিবার)"
          },
          {
            "lead": "Large pincer claws completely absent on all walking legs; carapace and long heavy cylindrical antennae covered with sharp forward-pointing defensive spines; large yellow spots on abdominal pleura.",
            "leadBn": "সব পায়ে কোনো চিমটা বা নখর নেই; ক্যারাপেস ও দীর্ঘ ভারী নলাকার শুঙ্গ সূঁচালো কাঁটায় ঢাকা; পেটের দুই পাশে হলুদ দাগ।",
            "diagnosticFeature": "Panulirus argus: No true claws, spiny cylindrical antennae, yellow abdominal spots",
            "diagnosticFeatureBn": "প্যানুলিরাশ আর্গাস: চিমটাহীন স্পাইনি লবস্টার, কাঁটাযুক্ত শুঙ্গ",
            "resultType": "species",
            "speciesId": "sp-panulirus-argus",
            "rationaleEn": "Resolves to Caribbean spiny lobster (Panulirus argus: Palinuridae)",
            "rationaleBn": "ক্যারিবিয়ান স্পাইনি লবস্টার (প্যানুলিরাশ আর্গাস)"
          },
          {
            "lead": "Infraorder Brachyura (True Crabs): Abdomen greatly reduced, flattened, and permanently folded underneath the broad, depressed cephalothorax sternum; tail fan absent; fifth pair of pereiopods modified for paddle swimming or walking.",
            "leadBn": "ব্র্যাকিউরা (প্রকৃত কাঁকড়া): উদর অত্যন্ত ক্ষুদ্র ও চ্যাপ্টা এবং তা প্রশস্ত ক্যারাপেসের নিচে খাঁজে স্থায়ীভাবে ভাঁজ করা থাকে; লেজের পাখা নেই; ৫ম পা প্যাডেল সদৃশ।",
            "diagnosticFeature": "Infraorder Brachyura: Abdomen folded beneath sternum, 5th legs as swimming paddles",
            "diagnosticFeatureBn": "ব্র্যাকিউরা অববর্গ: ভাঁজ করা উদর, সাঁতারের প্যাডেল পা",
            "resultType": "next_step",
            "nextStepId": 9
          }
        ]
      },
      {
        "id": 9,
        "title": "Infraorder Brachyura: Blue Crab vs Giant Mud Crab",
        "titleBn": "ব্র্যাকিউরা: ব্লু ক্র্যাব বনাম জায়ান্ট মাড ক্র্যাব (শিলা কাঁকড়া)",
        "character": "Prominent lateral carapace spine and blue chelae vs massive smooth green-brown oval carapace",
        "characterBn": "তীক্ষ্ণ পার্শ্বীয় কাঁটা ও নীল চিমটা বনাম মসৃণ নিরেট ডিম্বাকৃতি সবুজ-বাদামি খোলস ও দানবীয় চিমটা",
        "couplets": [
          {
            "lead": "Broad carapace terminating laterally in a sharp, elongated spine on each side; frontal margin with 4 teeth; chelae bright cobalt blue in males or orange-tipped in females; 5th pereiopod dactyls flattened into broad paddle oars.",
            "leadBn": "ক্যারাপেসের দুই পাশে অত্যন্ত দীর্ঘ তীক্ষ্ণ কাঁটা থাকে; চিমটার ওপর উজ্জ্বল কোবাল্ট নীল বা কমলা আভা; ৫ম পা প্রশস্ত প্যাডেল সদৃশ।",
            "diagnosticFeature": "Callinectes sapidus: Sharp lateral carapace spine, bright blue chelipeds, paddle dactyls",
            "diagnosticFeatureBn": "ক্যালিনেক্টেস স্যাপিডাস: ধারালো পার্শ্বীয় কাঁটা, নীল চিমটা, ব্লু ক্র্যাব",
            "resultType": "species",
            "speciesId": "sp-callinectes-sapidus",
            "rationaleEn": "Resolves to Blue crab (Callinectes sapidus: Portunidae)",
            "rationaleBn": "ব্লু ক্র্যাব (ক্যালিনেক্টেস স্যাপিডাস: পোর্টুনিডি পরিবার)"
          },
          {
            "lead": "Massive, smooth, heavy oval carapace without elongated lateral spines; frontal margin with 4 blunt equal teeth; 9 sharp teeth on each anterolateral margin; colossal, powerful bulbous crushing chelae capable of cracking hard molluscan shells; mottled dark green to brownish-black; estuarine mangrove dweller.",
            "leadBn": "লম্বা পার্শ্বীয় কাঁটাহীন অত্যন্ত ভারী মসৃণ খোলস; উভয় পাশে ৯টি করে করাতের দাঁতের মতো কাঁটা; শামুকের খোলস ভাঙতে সক্ষম দানবীয় চিমটা; সুন্দরবনের শিলা কাঁকড়া।",
            "diagnosticFeature": "Scylla serrata: Massive smooth oval carapace, 9 equal anterolateral teeth, huge crushing claws, mangrove",
            "diagnosticFeatureBn": "সিলা সেরাট্টা: শিলা কাঁকড়া / জায়ান্ট মাড ক্র্যাব, ৯টি পার্শ্বীয় দাঁত, দানবীয় চিমটা",
            "resultType": "species",
            "speciesId": "sp-scylla-serrata",
            "rationaleEn": "Resolves to Giant mud crab (Scylla serrata: Portunidae)",
            "rationaleBn": "শিলা কাঁকড়া / জায়ান্ট মাড ক্র্যাব (সিলা সেরাট্টা: পোর্টুনিডি পরিবার)"
          }
        ]
      },
      {
        "id": 10,
        "title": "Class Insecta: Flight Specialization and Mouthparts",
        "titleBn": "ইনসেক্টা শ্রেণি: ডানা এবং মুখোপাঙ্গের রূপান্তর",
        "character": "Hardened elytra or tegmina vs scale-covered wings vs single pair with halteres vs membranous wings",
        "characterBn": "কঠিন এলিট্রা ডানা বনাম আঁশযুক্ত ডানা বনাম একক জোড়া হল্টিয়ার্সযুক্ত ডানা বনাম স্বচ্ছ ডানা",
        "couplets": [
          {
            "lead": "Forewings modified into hardened, protective, veinless shell-like covers (elytra) meeting in a straight mid-dorsal suture at rest; hindwings membranous and folded beneath for flight; biting-chewing mouthparts.",
            "leadBn": "সম্মুখ ডানা শক্ত খোলসের মতো চামড়াযুক্ত এলিট্রায় রূপান্তরিত যা পিঠের ঠিক মাঝখানে সোজা রেখায় জোড়া লাগে; নিচের ডানা ওড়ার কাজে লাগে; চর্বন মুখোপাঙ্গ।",
            "diagnosticFeature": "Order Coleoptera (Beetles): Hardened protective elytra meeting in midline, chewing jaws",
            "diagnosticFeatureBn": "কোলিওপ্টেরা বর্গ (গুবরে পোকা): শক্ত এলিট্রা ডানা, চর্বন মুখোপাঙ্গ",
            "resultType": "species",
            "speciesId": "sp-scarabaeus-sacer",
            "rationaleEn": "Resolves to Sacred scarab dung beetle (Scarabaeus sacer: Scarabaeidae - serrated fossorial foretibiae)",
            "rationaleBn": "পবিত্র গুবরে পোকা / স্কারাব (স্কারাবিয়াস সেকার: স্কারাবায়িডি পরিবার)"
          },
          {
            "lead": "Wings not modified into rigid protective elytra meeting in a straight midline; forewings membranous, leathery tegmina, covered in microscopic colored scales, or reduced to balance halteres.",
            "leadBn": "ডানা শক্ত এলিট্রা নয়; হয় স্বচ্ছ ঝিল্লিযুক্ত, বা চামড়ার মতো টেগমিনা, বা সূক্ষ্ম রঙিন আঁশে ঢাকা, অথবা এক জোড়া ডানা হ্রাস পেয়ে হল্টিয়ার্সে রূপান্তরিত।",
            "diagnosticFeature": "Non-coleopteran insect orders: Diptera, Lepidoptera, Hymenoptera, Odonata, Blattodea",
            "diagnosticFeatureBn": "অন্যান্য পতঙ্গ বর্গসমূহ: ডিপ্টেরা, লেপিডোপ্টেরা, হাইমেনোপ্টেরা ইত্যাদি",
            "resultType": "next_step",
            "nextStepId": 11
          }
        ]
      },
      {
        "id": 11,
        "title": "Insect Wing Reductions & Scales: Diptera & Lepidoptera",
        "titleBn": "ডানা রূপান্তর: ডিপ্টেরা (একজোড়া ডানা) ও লেপিডোপ্টেরা (প্রজাপতি)",
        "character": "Only one functional pair of wings with knobbed halteres vs 4 wings covered in colored scales",
        "characterBn": "এক জোড়া সচল ডানা ও হল্টিয়ার্স বনাম রঙিন আঁশে ঢাকা চার ডানা ও নলাকার চোষক শুণ্ড",
        "couplets": [
          {
            "lead": "Only two functional flight wings (single pair on mesothorax); hindwings reduced to specialized tiny knobbed vibrating gyroscopic balancing organs (halteres); sucking, piercing, or sponging mouthparts.",
            "leadBn": "শুধুমাত্র এক জোড়া কার্যকরী ওড়ার ডানা থাকে; পেছনের ডানা ভারসাম্য রক্ষাকারী ক্ষুদ্র বোঁটাযুক্ত হল্টিয়ার্সে রূপান্তরিত; চোষক বা দংশক মুখোপাঙ্গ।",
            "diagnosticFeature": "Order Diptera (True Flies): 1 pair functional wings, hindwing halteres",
            "diagnosticFeatureBn": "ডিপ্টেরা বর্গ (মাছি ও মশা): ১ জোড়া ডানা, ভারসাম্য রক্ষাকারী হল্টিয়ার্স",
            "resultType": "next_step",
            "nextStepId": 12
          },
          {
            "lead": "Two pairs of broad, membranous flight wings densely covered in microscopic, overlapping shingle-like pigmented and structural scales; adult mouthparts modified into a long, coiled sucking tube (proboscis).",
            "leadBn": "রঙিন আণুবীক্ষণিক আঁশে ঘনভাবে ঢাকা দুই জোড়া প্রশস্ত ডানা; প্রাপ্তবয়স্কদের মুখোপাঙ্গ স্প্রিং-এর মতো গুটানো লম্বা চোষক নালী (প্রোবোসিস)-এ রূপান্তরিত।",
            "diagnosticFeature": "Order Lepidoptera (Butterflies & Moths): Scaled wings, coiled sucking proboscis",
            "diagnosticFeatureBn": "লেপিডোপ্টেরা বর্গ: আঁশযুক্ত রঙিন ডানা, গুটানো চোষক নালী",
            "resultType": "species",
            "speciesId": "sp-danaus-plexippus",
            "rationaleEn": "Resolves to Monarch butterfly (Danaus plexippus: Nymphalidae - vibrant orange wings with black veins)",
            "rationaleBn": "মনার্ক প্রজাপতি (ড্যানাউস প্লেক্সিপাস: কালো শিরাযুক্ত কমলা ডানা)"
          },
          {
            "lead": "Two pairs of functional wings present without colored scales or halteres; forewings may be leathery tegmina, membranous net-veined wings, or hooked membranous wings (hamuli).",
            "leadBn": "আঁশ বা হল্টিয়ার্সবিহীন দুই জোড়া কার্যকরী ডানা; চামড়ার মতো টেগমিনা, জালের মতো শিরাযুক্ত ডানা, বা হুক দিয়ে জোড়া লাগানো ঝিল্লিযুক্ত ডানা।",
            "diagnosticFeature": "Other Insect Orders: Odonata, Blattodea, Hymenoptera",
            "diagnosticFeatureBn": "অন্যান্য পতঙ্গ বর্গ: ওডোনাটা, ব্লাটোডিয়া, হাইমেনোপ্টেরা",
            "resultType": "next_step",
            "nextStepId": 13
          }
        ]
      },
      {
        "id": 12,
        "title": "Order Diptera: Fruit Fly vs House Fly vs Mosquito Vectors",
        "titleBn": "বর্গ ডিপ্টেরা: ফল মাছি বনাম গৃহ মাছি বনাম মশক বাহক",
        "character": "Minute yellowish fly with red eyes and aristate antennae vs slender mosquito with long proboscis and scales",
        "characterBn": "লাল চোখের ক্ষুদ্র ফলমাছি বনাম লম্বা চোষক ও সাদা-কালো দাগযুক্ত ডেঙ্গু মশা",
        "couplets": [
          {
            "lead": "Minute fly (2.5-3.5 mm) with brick-red eyes, yellowish-brown body with black dorsal abdominal rings; aristate antennae; model organism in classical genetics.",
            "leadBn": "ক্ষুদ্র মাছি (২.৫-৩.৫ মিমি), ইটের মতো লাল চোখ, কালো বলয়যুক্ত হলুদ-বাদামি উদর; অ্যারিস্টেট শুঙ্গ; বংশগতিবিদ্যার প্রধান মডেল প্রাণী।",
            "diagnosticFeature": "Red eyes, small size, genetics model fruit fly",
            "diagnosticFeatureBn": "লাল চোখ, ক্ষুদ্র দেহ, জিনতত্ত্বের ফল মাছি",
            "resultType": "species",
            "speciesId": "sp-drosophila-melanogaster",
            "rationaleEn": "Resolves to Drosophila melanogaster (Common fruit fly)",
            "rationaleBn": "ড্রসোফিলা মেলানোগ্যাস্টার (ফল মাছি)"
          },
          {
            "lead": "Medium-sized fly (6-7 mm) with grey thorax marked by four distinct longitudinal dark stripes; sponging and lapping mouthparts (labellum with pseudotracheae); ubiquitous synanthropic mechanical disease vector.",
            "leadBn": "মাঝারি মাছি (৬-৭ মিমি), ধূসর বক্ষদেশে ৪টি স্পষ্ট কালো অনুদৈর্ঘ্য ডোরা; চোষক ও লেহনকারী মুখোপাঙ্গ (সিউডোট্রাকিয়াবিশিষ্ট ল্যাবেলাম); সর্বজনীন গৃহবাসী রোগবাহী পতঙ্গ।",
            "diagnosticFeature": "Four dark thoracic stripes, sponging labellum, ubiquitous house fly",
            "diagnosticFeatureBn": "বক্ষে ৪টি কালো ডোরা, চোষক মুখোপাঙ্গ, সাধারণ গৃহ মাছি",
            "resultType": "species",
            "speciesId": "sp-musca-domestica",
            "rationaleEn": "Resolves to Musca domestica (Common house fly)",
            "rationaleBn": "মাসকা ডোমেস্টিকা (গৃহ মাছি)"
          },
          {
            "lead": "Slender nocturnal mosquito; resting posture parallel to surface with proboscis angled to body; wings plain without dark spots; blunt abdomen tip; primary vector of lymphatic filariasis across tropical urban areas.",
            "leadBn": "সরু নিশাচর মশা; বসার সময় দেহ পৃষ্ঠতলের সমান্তরাল থাকে; ডানায় কোনো কালো ছোপ নেই; উদরের প্রান্ত ভোঁতা; গ্রীষ্মমণ্ডলীয় শহরে ফাইলেরিয়াসিস রোগের প্রধান বাহক।",
            "diagnosticFeature": "Parallel resting stance, unspotted wings, blunt abdomen, filaria vector",
            "diagnosticFeatureBn": "সমান্তরাল বসার ভঙ্গি, ছোপহীন ডানা, ভোঁতা উদর, ফাইলেরিয়া বাহক",
            "resultType": "species",
            "speciesId": "sp-culex-quinquefasciatus",
            "rationaleEn": "Resolves to Culex quinquefasciatus (Southern house mosquito)",
            "rationaleBn": "কিউলেক্স কুইনকিউফ্যাসিয়াটাস (সাধারণ মশা)"
          },
          {
            "lead": "Diurnal mosquito with conspicuous silver-white lyre-shaped pattern on dorsal scutum; legs distinctly banded in black and pure white; primary vector of Dengue, Chikungunya, and Zika viruses.",
            "leadBn": "দিবাচর মশা, পৃষ্ঠদেশের স্কুটামে উজ্জ্বল রূপালী-সাদা বীণাসদৃশ নকশা; পায়ে সুস্পষ্ট কালো ও সাদা ডোরা কাটা; ডেঙ্গু, চিকুনগুনিয়া ও জিকা ভাইরাসের প্রধান বাহক।",
            "diagnosticFeature": "Lyre-shaped scutum pattern, banded legs, Dengue vector",
            "diagnosticFeatureBn": "বীণাসদৃশ নকশা, সাদা ডোরাকাটা পা, ডেঙ্গু বাহক",
            "resultType": "species",
            "speciesId": "sp-aedes-aegypti",
            "rationaleEn": "Resolves to Aedes aegypti (Yellow fever / Dengue mosquito)",
            "rationaleBn": "এডিশ ইজিপ্টি (ডেঙ্গু মশা)"
          }
        ]
      },
      {
        "id": 13,
        "title": "Remaining Insect Orders: Dragonflies, Cockroaches, Bees",
        "titleBn": "অন্যান্য পতঙ্গ বর্গ: ফড়িং, তেলাপোকা ও মৌমাছি",
        "character": "Net-veined outstretched wings vs flattened tegmina cursorial vs membranous hooked wings with waist",
        "characterBn": "জালের মতো শিরাযুক্ত ছড়ানো ডানা বনাম চ্যাপ্টা চামড়ার ডানাযুক্ত তেলাপোকা বনাম সরু কোমরযুক্ত মৌমাছি",
        "couplets": [
          {
            "lead": "Large predatory insect with enormous hemispherical compound eyes covering most of head; tiny bristle-like antennae; two pairs of long, narrow, independently controlled transparent wings with dense reticulate net-venation, unable to fold flat over back.",
            "leadBn": "মাথা জুড়ে বিশাল পুঞ্জাক্ষিযুক্ত শিকারী পতঙ্গ; অতি ক্ষুদ্র লোমশ শুঙ্গ; জালের মতো অসংখ্য শিরাযুক্ত দুই জোড়া লম্বা ডানা যা পিঠের ওপর ভাজ করে রাখা যায় না।",
            "diagnosticFeature": "Anax junius (Odonata): Enormous compound eyes, reticulate net-veined outstretched wings, green thorax",
            "diagnosticFeatureBn": "অ্যানাক্স জুনিয়াস: সবুজ বক্ষ, বৃহৎ চোখ, ফড়িং (ওডোনাটা বর্গ)",
            "resultType": "species",
            "speciesId": "sp-anax-junius",
            "rationaleEn": "Resolves to Common green darner dragonfly (Anax junius: Aeshnidae)",
            "rationaleBn": "সবুজ ফড়িং (অ্যানাক্স জুনিয়াস: অ্যাশনিডি পরিবার)"
          },
          {
            "lead": "Dorsoventrally flattened, oval cursorial insect adapted for squeezing into narrow crevices; head concealed beneath a broad shield-like pronotum; long slender filiform antennae; forewings modified into tough leathery tegmina overlapping flat over back; long spiny running legs; prominent posterior sensory cerci.",
            "leadBn": "চ্যাপ্টা ডিম্বাকৃতি দেহ; মাথাটি প্রোনোয়াম ঢাল দিয়ে ঢাকা থাকে; দীর্ঘ সুতার মতো শুঙ্গ; চামড়ার মতো টেগমিনা ডানা; কাঁটাযুক্ত দ্রুত দৌড়ানোর পা ও পেছনের সংবেদী সারসি।",
            "diagnosticFeature": "Periplaneta americana (Blattodea): Dorsoventrally compressed, leathery tegmina, cursorial legs, cerci",
            "diagnosticFeatureBn": "পেরিপ্ল্যানেটা আমেরিকানা: তেলাপোকা, চ্যাপ্টা দেহ, টেগমিনা ডানা, সারসি",
            "resultType": "species",
            "speciesId": "sp-periplaneta-americana",
            "rationaleEn": "Resolves to American cockroach (Periplaneta americana: Blattidae)",
            "rationaleBn": "তেলাপোকা (পেরিপ্ল্যানেটা আমেরিকানা: ব্ল্যাটিডি পরিবার)"
          },
          {
            "lead": "Eusocial insect with two pairs of transparent membranous wings coupled together in flight by tiny microscopic hooks (hamuli); slender constricted \"wasp waist\" (petiole); chewing-lapping mouthparts; hind legs equipped with specialized pollen-collecting baskets (corbiculae); female with abdominal venomous sting.",
            "leadBn": "ঝিল্লিযুক্ত দুই জোড়া স্বচ্ছ ডানা যা ওড়ার সময় ক্ষুদ্র হুক দিয়ে একসাথে জোড়া থাকে; সরু কোমর (পেটিওল); পেছনের পায়ে পরাগধানী থলি (করবিকুলা); হুলযুক্ত মৌমাছি।",
            "diagnosticFeature": "Apis mellifera (Hymenoptera): Wing hamuli, constricted petiole, hindleg pollen baskets, sting",
            "diagnosticFeatureBn": "এপিস মেলিফেরা: ডানা জোড়া হুক, পরাগধানী থলি, হুলযুক্ত মৌমাছি",
            "resultType": "species",
            "speciesId": "sp-apis-mellifera",
            "rationaleEn": "Resolves to Western honey bee (Apis mellifera: Apidae)",
            "rationaleBn": "মৌমাছি (এপিস মেলিফেরা: অ্যাপিডি পরিবার)"
          }
        ]
      }
    ]
  },
  {
    "id": "key-global-echinodermata-classes",
    "title": "Diagnostic Key to Classes & Canonical Species of Phylum Echinodermata",
    "titleBn": "একাইনোডার্মাটা (কণ্টকত্বক প্রাণী) পর্বের শ্রেণি ও প্রজাতি শনাক্তকরণ কুঞ্জি",
    "scope": "global",
    "targetTaxonId": "taxon-echinodermata",
    "majorGroup": "echinodermata",
    "taxonScope": "Phylum Echinodermata (Sea Stars, Brittle Stars, Sea Urchins, Sea Cucumbers, Feather Stars)",
    "taxonScopeBn": "একাইনোডার্মাটা পর্ব (তারা মাছ, ভঙ্গুর তারা, সাগর আর্চিন, সাগর শসা, পালক তারা)",
    "description": "Authoritative dichotomous key distinguishing the five extant classes of Phylum Echinodermata and their canonical species based on adult pentaradial symmetry, water vascular ambulacral architecture, endoskeletal ossicle development, pedicellariae, and body orientation.",
    "descriptionBn": "প্রাপ্তবয়স্কদের পঞ্চ-অরীয় প্রতিসাম্য, পানি সংবহন তন্ত্র, অন্তকঙ্কালের ক্যালসিয়াম প্লেট, পেডিসিলারিয়া এবং দৈহিক স্থিতির ওপর ভিত্তি করে একাইনোডার্মাটার ৫টি শ্রেণি ও ৯টি প্রামাণ্য প্রজাতি শনাক্তকরণ কুঞ্জি।",
    "educationalLevel": "intermediate",
    "keyType": "dichotomous",
    "sourceReferenceIds": [
      "ref-ruppert-2004",
      "ref-hickman-2020",
      "ref-worms-2024"
    ],
    "verificationStatus": "verified",
    "steps": [
      {
        "id": 1,
        "title": "Oral Surface Orientation and Primary Class Separation",
        "titleBn": "মৌখিক তলের দিক এবং প্রাথমিক শ্রেণি বিভাজন",
        "character": "Mouth oriented upwards with branched pinnule arms vs mouth oriented downwards or anteriorly",
        "characterBn": "মুখ উপরের দিকে ও শাখান্বিত পালক বাহু বনাম মুখ নিচের দিকে বা সম্মুখে",
        "couplets": [
          {
            "lead": "Oral surface directed upwards (aboral surface attached by a stalk or grasping cirri to substrate); central cup-like calyx bears 10 flexible arms subdivided by lateral pinnules; open ciliated ambulacral grooves capture suspended plankton; madreporite internal.",
            "leadBn": "মৌখিক তল উপরের দিকে মুখ করা; ১০টি নমনীয় বাহু যাতে পালকের মতো পিনিউল থাকে; মুক্ত সিলিয়াযুক্ত নালী দিয়ে ভাসমান খাদ্য সংগ্রহ করে; সিরাস দিয়ে আটকে থাকে।",
            "diagnosticFeature": "Class Crinoidea: Oral side upwards, branched pinnule arms, ciliated suspension grooves",
            "diagnosticFeatureBn": "ক্রিনইডিয়া শ্রেণি: মুখ উপরের দিকে, পালকসদৃশ বাহু, সিরাস",
            "resultType": "species",
            "speciesId": "sp-antedon-mediterranea",
            "rationaleEn": "Resolves to Mediterranean feather star (Antedon mediterranea: Comatulida)",
            "rationaleBn": "মেডিটেরেনিয়ান ফেদার স্টার / পালক তারা (অ্যান্টেডন মেডিটেরেনিয়া)"
          },
          {
            "lead": "Oral surface directed downwards against substrate (or body elongated horizontally with mouth at anterior pole); arms unbranched or absent; free-moving benthic predators, scavengers, or grazing deposit feeders.",
            "leadBn": "মৌখিক তল নিচের দিকে বা সম্মুখে অবস্থিত; বাহু অশাখান্বিত বা বাহুহীন; মুক্ত চলমান শিকারী বা তলানিভোজী।",
            "diagnosticFeature": "Subphylum Asterozoa (Starfishes) & Echinozoa (Urchins & Sea Cucumbers)",
            "diagnosticFeatureBn": "তারা মাছ, ভঙ্গুর তারা, সাগর আর্চিন এবং সাগর শসা",
            "resultType": "next_step",
            "nextStepId": 2
          }
        ]
      },
      {
        "id": 2,
        "title": "Star-Shaped Body with Radiating Arms vs Armless Globose / Cylindrical Body",
        "titleBn": "বাহুযুক্ত তারকাকৃতি দেহ বনাম বাহুহীন গোলাকার/নলাকার দেহ",
        "character": "Presence of distinct radiating arms around a central disc vs compact globular or cylindrical body without arms",
        "characterBn": "কেন্দ্রীয় ডিস্কের চারপাশে প্রসারিত বাহু বনাম বাহুহীন গোল বা নলাকার শরীর",
        "couplets": [
          {
            "lead": "Star-shaped body with arms radiating symmetrically from a central disc; open or closed ambulacral grooves on oral surface of each arm; locomotive tube feet (podia) operated by ampullae.",
            "leadBn": "কেন্দ্রীয় ডিস্ক থেকে প্রসারিত বাহুযুক্ত তারকাকৃতি দেহ; বাহুর নিচের তলে অ্যাম্বুলাক্রাল খাঁজ ও নালীপদ উপস্থিত যা দিয়ে চলাচল করে।",
            "diagnosticFeature": "Asterozoa: True Sea Stars (Asteroidea) & Brittle Stars (Ophiuroidea)",
            "diagnosticFeatureBn": "তারা মাছ (অ্যাস্টেরয়েড) এবং ভঙ্গুর তারা (ওফিউরয়েড)",
            "resultType": "next_step",
            "nextStepId": 3
          },
          {
            "lead": "Body compact, spherical, hemispherical, or elongated along oral-aboral axis; free arms completely absent; endoskeleton fused into a solid test of immovable plates or reduced to microscopic dermal ossicles.",
            "leadBn": "দেহ গোল, অর্ধগোলাকার বা নলাকার; মুক্ত বাহু সম্পূর্ণ অনুপস্থিত; অন্তকঙ্কাল নিরেট খোলস (টেস্ট) তৈরি করে অথবা চামড়ায় আণুবীক্ষণিক অস্থিকা থাকে।",
            "diagnosticFeature": "Echinozoa: Sea Urchins (Echinoidea) & Sea Cucumbers (Holothuroidea)",
            "diagnosticFeatureBn": "একিনোজোয়া: সাগর আর্চিন (একিনয়েড) এবং সাগর শসা (হোলোথুরয়েড)",
            "resultType": "next_step",
            "nextStepId": 6
          }
        ]
      },
      {
        "id": 3,
        "title": "Asteroidea vs Ophiuroidea",
        "titleBn": "অ্যাস্টেরয়ডিয়া (তারা মাছ) বনাম ওফিউরয়ডিয়া (ভঙ্গুর তারা)",
        "character": "Broad arms merging gradually into central disc with open grooves vs slender arms sharply demarcated from disc with closed grooves",
        "characterBn": "ডিস্কের সাথে মিশে যাওয়া প্রশস্ত বাহু ও উন্মুক্ত খাঁজ বনাম স্পষ্ট পৃথক সরু সর্পিল বাহু",
        "couplets": [
          {
            "lead": "Class Asteroidea: Arms broad at base, merging gradually into central disc without sharp boundary; open ambulacral grooves along oral surface of arms contain 2 or 4 rows of suckered tube feet; aboral surface bears calcareous spines and pincer-like pedicellariae; eversible cardiac stomach used for external digestion.",
            "leadBn": "অ্যাস্টেরয়ডিয়া শ্রেণি: বাহুসমূহ গোড়ায় প্রশস্ত এবং কেন্দ্রীয় ডিস্কের সাথে মসৃণভাবে যুক্ত; উন্মুক্ত খাঁজে চোষকযুক্ত নালীপদ থাকে; পিঠের ওপর পেডিসিলারিয়া থাকে; বহিস্থ পরিপাকের জন্য পাকস্থলী বের করতে পারে।",
            "diagnosticFeature": "Class Asteroidea: Broad merging arms, open ambulacral grooves with suckered podia, pedicellariae",
            "diagnosticFeatureBn": "অ্যাস্টেরয়ডিয়া শ্রেণি: চওড়া বাহু, উন্মুক্ত খাঁজ, চোষক নালীপদ",
            "resultType": "next_step",
            "nextStepId": 4
          },
          {
            "lead": "Class Ophiuroidea: Five extremely slender, whip-like, highly flexible jointed arms sharply demarcated from a distinct rounded, flattened central disc; ambulacral grooves closed over by plates; tube feet small and sensory without suckers; locomotion by rapid serpentine snaking arm movements; arms readily autotomized when attacked.",
            "leadBn": "ওফিউরয়ডিয়া শ্রেণি: গোলাকার ডিস্ক থেকে স্পষ্টভাবে পৃথক ৫টি অত্যন্ত সরু ও নমনীয় চাবুকসদৃশ বাহু; খাঁজসমূহ প্লেট দ্বারা ঢাকা; চোষকহীন নালীপদ; সাপের মতো দ্রুত গতিতে চলে; আক্রান্ত হলে সহজে বাহু খসিয়ে দেয়।",
            "diagnosticFeature": "Ophiothrix fragilis: Slender spiny arms sharply demarcated from disc, rapid serpentine crawling",
            "diagnosticFeatureBn": "ওফিওথ্রিক্স ফ্র্যাজিলিস: কাঁটাযুক্ত সরু সর্পিল বাহু, ভঙ্গুর তারা",
            "resultType": "species",
            "speciesId": "sp-ophiothrix-fragilis",
            "rationaleEn": "Resolves to Common brittle star (Ophiuroidea: Ophiotrichidae)",
            "rationaleBn": "কমন ব্রিটল স্টার / ভঙ্গুর তারা (ওফিওথ্রিক্স ফ্র্যাজিলিস)"
          }
        ]
      },
      {
        "id": 4,
        "title": "Class Asteroidea: Coral Predator vs Boreal Sea Star vs Horned Star",
        "titleBn": "অ্যাস্টেরয়ডিয়া শ্রেণি: প্রবালভক্ষী ক্রাউন-অব-থর্নস বনাম কমন সি স্টার বনাম শিংযুক্ত চকলেট চিপ স্টার",
        "character": "Multiple arms with venomous spines vs 5 smooth arms vs 5 arms with dark conical horn tubercles",
        "characterBn": "বহু বিষাক্ত কাঁটাযুক্ত বহু বাহু বনাম ৫টি মসৃণ বাহু বনাম ৫টি কালো শিংযুক্ত গুটি বাহু",
        "couplets": [
          {
            "lead": "Large multi-armed coral predator (typically 12 to 21 radiating arms); aboral surface covered in dense, sharp, elongated venomous calcareous spines (3-5 cm) causing severe pain and tissue necrosis; feeds by extruding cardiac stomach over living reef-building corals.",
            "leadBn": "১২ থেকে ২১টি বাহুযুক্ত বিশাল প্রবালভক্ষী তারা মাছ; পিঠের ওপর ধারালো বিষাক্ত দীর্ঘ কাঁটায় ঢাকা যা তীব্র যন্ত্রণা সৃষ্টি করে; প্রবালের ওপর পাকস্থলী উল্টে দিয়ে প্রবাল কীট হজম করে।",
            "diagnosticFeature": "Acanthaster planci: 12-21 arms, sharp toxic spines (plancitoxin), coral reef corallivore",
            "diagnosticFeatureBn": "অ্যাক্যান্থাস্টার প্ল্যানসি: ১২-২১টি বাহু, বিষাক্ত কাঁটা, ক্রাউন-অব-থর্নস",
            "resultType": "species",
            "speciesId": "sp-acanthaster-planci",
            "rationaleEn": "Resolves to Crown-of-thorns starfish (Acanthaster planci: Acanthasteridae)",
            "rationaleBn": "ক্রাউন-অব-থর্নস স্টারফিশ (অ্যাক্যান্থাস্টার প্ল্যানসি)"
          },
          {
            "lead": "Typical 5-armed sea stars with arms unadorned by long venomous spines; aboral surface with small white spines, dermal branchiae (papulae), or large black conical tubercles.",
            "leadBn": "৫টি বাহুযুক্ত তারা মাছ যাতে দীর্ঘ বিষাক্ত কাঁটা থাকে না; ছোট সাদা কাঁটাযুক্ত নরম পিঠ বা কালো রঙের বড় শিংযুক্ত গুটি থাকে।",
            "diagnosticFeature": "5-armed sea stars: Asteriidae & Oreasteridae",
            "diagnosticFeatureBn": "৫ বাহুবিশিষ্ট তারা মাছ: অ্যাস্টেরিডি ও ওরেস্টেরিডি",
            "resultType": "next_step",
            "nextStepId": 5
          }
        ]
      },
      {
        "id": 5,
        "title": "5-Armed Sea Stars: Asterias rubens vs Protoreaster nodosus",
        "titleBn": "৫-বাহু তারা মাছ: অ্যাস্টেরিয়াস রুবেনস বনাম প্রটোরিয়েস্টার নোডোসাস",
        "character": "Orange/violet flexible body with median carinal spine row vs rigid body with large black conical horn nodes",
        "characterBn": "কমলা/বেগুনি নমনীয় শরীর বনাম কালো শিং সদৃশ শক্ত গুটিযুক্ত চকলেট চিপ স্টার",
        "couplets": [
          {
            "lead": "Common orange, reddish-brown, or violet sea star with 5 tapering arms; midline of each arm bears a regular longitudinal row of small white blunt spines (carinal ridge); feeds on bivalves by prying open shells with suction tube feet.",
            "leadBn": "কমলা, লালচে-বাদামি বা বেগুনি ৫ বাহুবিশিষ্ট সাধারণ তারা মাছ; প্রতিটি বাহুর মাঝখানে সোজা রেখায় ছোট সাদা কাঁটার সারি থাকে; ঝিনুকের কপাট ফাঁক করে খায়।",
            "diagnosticFeature": "Asterias rubens: 5 tapering arms, central carinal spine row, suction tube feet prying bivalves",
            "diagnosticFeatureBn": "অ্যাস্টেরিয়াস রুবেনস: সাধারণ তারা মাছ, কলার সারি কাঁটা, ঝিনুক শিকারী",
            "resultType": "species",
            "speciesId": "sp-asterias-rubens",
            "rationaleEn": "Resolves to Common sea star (Asterias rubens: Asteriidae)",
            "rationaleBn": "কমন সি স্টার (অ্যাস্টেরিয়াস রুবেনস: অ্যাস্টেরিডি পরিবার)"
          },
          {
            "lead": "Heavy, rigid tropical sea star with 5 stout triangular arms; dorsum decorated with prominent, thick, black or dark brown conical horn-like tubercles resembling chocolate chips; found on Indo-Pacific sandy seagrass flats.",
            "leadBn": "ভারী শক্ত ৫টি মোটা ত্রিভুজাকৃতি বাহুযুক্ত তারা মাছ; পিঠের ওপর চকোলেট চিপসের মতো উঁচু কালো বা গাঢ় বাদামি শিং সদৃশ গুটি সাজানো থাকে।",
            "diagnosticFeature": "Protoreaster nodosus: Rigid body, prominent dark conical tubercles (chocolate chip star)",
            "diagnosticFeatureBn": "প্রটোরিয়েস্টার নোডোসাস: চকলেট চিপ তারা মাছ, কালো শঙ্কু গুটি",
            "resultType": "species",
            "speciesId": "sp-protoreaster-nodosus",
            "rationaleEn": "Resolves to Horned sea star / Chocolate chip star (Protoreaster nodosus: Oreasteridae)",
            "rationaleBn": "হর্নড সি স্টার / চকলেট চিপ তারা (প্রটোরিয়েস্টার নোডোসাস)"
          }
        ]
      },
      {
        "id": 6,
        "title": "Echinozoa: Rigid Spiny Test (Sea Urchins) vs Soft Cylindrical Body (Sea Cucumbers)",
        "titleBn": "একিনোজোয়া: শক্ত কাঁটাযুক্ত খোলস (সাগর আর্চিন) বনাম নরম নলাকার শরীর (সাগর শসা)",
        "character": "Globose rigid test of fused plates with movable spines and Aristotle lantern vs soft leathery body with oral tentacles",
        "characterBn": "অ্যারিস্টটলের লণ্ঠন ও কাঁটাযুক্ত শক্ত খোলস বনাম মুখে কর্ষিকাযুক্ত নরম চামড়ার নলাকার দেহ",
        "couplets": [
          {
            "lead": "Class Echinoidea (Sea Urchins): Globose, hemispherical, or heart-shaped rigid internal test composed of tightly fused calcareous plates; covered in movable spines articulating on ball-and-socket joints; chewing apparatus of 5 self-sharpening teeth (Aristotle lantern) in oral center.",
            "leadBn": "একিনয়ডিয়া শ্রেণি (সাগর আর্চিন): পরস্পরের সাথে নিরেটভাবে জোড়া লাগানো ক্যালসিয়াম প্লেট দ্বারা গঠিত শক্ত খোলস; বল-অ্যান্ড-সকেট জয়েন্টে নাড়াচাড়া করা কাঁটাযুক্ত; মুখে ৫ দাঁতের অ্যারিস্টটলের লণ্ঠন থাকে।",
            "diagnosticFeature": "Class Echinoidea: Fused calcareous test, movable spines, 5-toothed Aristotle lantern",
            "diagnosticFeatureBn": "একিনয়ডিয়া শ্রেণি: নিরেট টেস্ট, চলমান কাঁটা, অ্যারিস্টটলের লণ্ঠন",
            "resultType": "next_step",
            "nextStepId": 7
          },
          {
            "lead": "Class Holothuroidea (Sea Cucumbers): Elongated, sausage-shaped or cylindrical leathery body lying on its side (trivium on substrate, bivium dorsal); endoskeleton reduced to microscopic dermal ossicles embedded in collagen wall; mouth surrounded by 10-30 branched retractile oral tentacles; breathes via internal respiratory trees; dark velvety black coloration.",
            "leadBn": "হোলোথুরয়ডিয়া শ্রেণি (সাগর শসা): নলাকার শসা সদৃশ নরম চামড়ার দেহ; কঙ্কাল চামড়ায় লুকানো আণুবীক্ষণিক অস্থিকায় হ্রাসপ্রাপ্ত; মুখের চারপাশে শাখান্বিত কর্ষিকা মুকুট; রেস্পিরেটরি ট্রি দিয়ে শ্বাস নেয়; ভেলভেটের মতো কালো।",
            "diagnosticFeature": "Holothuria atra: Sausage-shaped, velvety black, dermal ossicles, oral tentacles, cuvierian organs",
            "diagnosticFeatureBn": "হোলোথুরিয়া অ্যাট্রা: ব্ল্যাক সি কিউকাম্বার / কালো সাগর শসা, চামড়ার অস্থিকা",
            "resultType": "species",
            "speciesId": "sp-holothuria-atra",
            "rationaleEn": "Resolves to Black sea cucumber / Lollyfish (Holothuria atra: Holothuriidae)",
            "rationaleBn": "ব্ল্যাক সি কিউকাম্বার / কালো সাগর শসা (হোলোথুরিয়া অ্যাট্রা)"
          }
        ]
      },
      {
        "id": 7,
        "title": "Class Echinoidea: Canonical Urchin Species Determination",
        "titleBn": "একিনয়ডিয়া শ্রেণি: সাগর আর্চিন প্রজাতি নির্ধারণ",
        "character": "Purple short spines with genomic model significance vs giant red spines vs edible boreal globose urchin",
        "characterBn": "বেগুনি জিনোমিক মডেল আর্চিন বনাম দানবীয় লাল আর্চিন বনাম সুস্বাদু ইউরোপীয় গোলাকার আর্চিন",
        "couplets": [
          {
            "lead": "Hemispherical test (5-10 cm) adorned with dense, vibrant royal purple spines; key biological model organism for developmental biology, fertilization, and echinoderm genomics; Pacific coast kelp forest grazer.",
            "leadBn": "ঘন উজ্জ্বল রাজকীয় বেগুনি রঙের কাঁটায় ঢাকা অর্ধগোলাকার খোলস (৫-১০ সেমি); ভ্রূণবিদ্যা ও জিনোমিক্স গবেষণার অন্যতম প্রধান মডেল প্রাণী; কেল্প শ্যাওলা খায়।",
            "diagnosticFeature": "Strongylocentrotus purpuratus: Vibrant purple spines, developmental model, sequenced genome",
            "diagnosticFeatureBn": "স্ট্রংজাইলোসেন্ট্রোটাস পারপ্যুরেটাস: বেগুনি সাগর আর্চিন, জিনোমিক মডেল",
            "resultType": "species",
            "speciesId": "sp-strongylocentrotus-purpuratus",
            "rationaleEn": "Resolves to Purple sea urchin (Strongylocentrotus purpuratus: Strongylocentrotidae)",
            "rationaleBn": "পার্পল সি আর্চিন / বেগুনি সাগর আর্চিন (স্ট্রংজাইলোসেন্ট্রোটাস পারপ্যুরেটাস)"
          },
          {
            "lead": "Colossal Pacific sea urchin with test diameter reaching up to 18-20 cm and long sharp spines up to 8 cm; uniform brick-red to deep burgundy or reddish-brown coloration; longest-lived echinoderm exceeding 100-200 years.",
            "leadBn": "১৮-২০ সেমি প্রশস্ত দানবীয় প্রশান্ত মহাসাগরীয় সাগর আর্চিন যার দীর্ঘ কাঁটা ৮ সেমি পর্যন্ত লম্বা; লাল বা বার্গান্ডি বর্ণ; ১০০-২০০ বছর বাঁচে।",
            "diagnosticFeature": "Mesocentrotus franciscanus: Giant test up to 20 cm, long reddish spines, extreme longevity",
            "diagnosticFeatureBn": "মেসোসেন্ট্রোটাস ফ্রান্সিসকানাস: রেড সি আর্চিন / লাল সাগর আর্চিন, দানবীয় কাঁটা",
            "resultType": "species",
            "speciesId": "sp-mesocentrotus-franciscanus",
            "rationaleEn": "Resolves to Red sea urchin (Mesocentrotus franciscanus: Strongylocentrotidae)",
            "rationaleBn": "রেড সি আর্চিন / লাল সাগর আর্চিন (মেসোসেন্ট্রোটাস ফ্রান্সিসকানাস)"
          },
          {
            "lead": "Nearly spherical, high globose test up to 10-17 cm; test reddish-pink with dense short spines tipped with white or purple; commercial European sea urchin harvested for edible gonads (roe/uni).",
            "leadBn": "প্রায় সম্পূর্ণ গোলাকার উঁচু বলের মতো খোলস (১০-১৭ সেমি); গোলাপি-লাল খোলসে সাদা বা বেগুনি ডগা বিশিষ্ট ছোট কাঁটা; সুস্বাদু ডিমের (ইউনি) জন্য সংগৃহীত।",
            "diagnosticFeature": "Echinus esculentus: Globose spherical test, short reddish/white spines, harvested for edible roe",
            "diagnosticFeatureBn": "একিনাস এসকিউলেনটাস: ইউরোপীয় ভোজ্য সাগর আর্চিন, গোলাকার খোলস",
            "resultType": "species",
            "speciesId": "sp-echinus-esculentus",
            "rationaleEn": "Resolves to European edible sea urchin (Echinus esculentus: Echinidae)",
            "rationaleBn": "এডিবল সি আর্চিন / ভোজ্য সাগর আর্চিন (একিনাস এসকিউলেনটাস)"
          }
        ]
      }
    ]
  },
  {
    "id": "key-global-amphibia-orders",
    "title": "Diagnostic Key to Orders & Canonical Species of Living Amphibia",
    "titleBn": "উভচর শ্রেণির জীবিত বর্গ ও প্রামাণ্য প্রজাতির শনাক্তকরণ কুঞ্জি",
    "scope": "global",
    "targetTaxonId": "taxon-amphibia",
    "majorGroup": "amphibia",
    "taxonScope": "Class Amphibia (Caecilians, Salamanders, Frogs & Toads)",
    "taxonScopeBn": "অ্যাম্ফিবিয়া বা উভচর শ্রেণি (সিসিলিয়ান, স্যালামান্ডার, ব্যাঙ)",
    "description": "Authoritative dichotomous key distinguishing the three extant amphibian orders (Gymnophiona, Caudata, Anura) and their canonical representative species through limbless fossorial body, persistent tail, neotenic gills, parotoid glands, and cranial ridge morphology.",
    "descriptionBn": "পদহীন সিসিলিয়ান, লেজযুক্ত স্যালামান্ডার ও লেজহীন ব্যাঙের ৩টি বর্গ এবং ৯টি প্রামাণ্য উভচর প্রজাতি শনাক্তকরণ কুঞ্জি।",
    "educationalLevel": "intermediate",
    "keyType": "dichotomous",
    "sourceReferenceIds": [
      "ref-amphibiaweb-2026",
      "ref-kardong-2018",
      "ref-hickman-2020"
    ],
    "verificationStatus": "verified",
    "steps": [
      {
        "id": 1,
        "title": "Limbs and Body Plan: Limbless Caecilians vs Tetrapod Amphibians",
        "titleBn": "পদ ও শারীরিক গঠন: পদহীন সিসিলিয়ান বনাম চতুস্পদী উভচর",
        "character": "Limbless worm-like body with dermal annuli vs two pairs of limbs (tetrapod)",
        "characterBn": "উপবলয়যুক্ত পদহীন কৃমিসদৃশ দেহ বনাম দুই জোড়া পদযুক্ত চতুস্পদী দেহ",
        "couplets": [
          {
            "lead": "Order Gymnophiona (Caecilians): Completely limbless, elongated, cylindrical, serpentine or worm-like body adapted for subterranean fossorial burrowing; dermal folds (annuli) encircle body containing embedded microscopic dermal scales; eyes vestigial and skin-covered; specialized sensory tentacle between eye and nostril; tail short or absent.",
            "leadBn": "জিমনোফিওনা বর্গ (সিসিলিয়ান): সম্পূর্ণ পদহীন, মাটিতে গর্ত খুঁড়ে বাস করার উপযোগী নলাকার শরীর; চামড়ার ভাঁজে আণুবীক্ষণিক অস্থিকা লুকানো থাকে; চোখ ত্বক দ্বারা ঢাকা; সংবেদী কর্ষিকা বিদ্যমান; লেজ ক্ষুদ্র বা নেই।",
            "diagnosticFeature": "Ichthyophis bannanicus: Limbless, 300+ annuli, lateral yellow stripe, subterranean fossorial",
            "diagnosticFeatureBn": "ইকথায়োফিস বান্নানিকাস: পদহীন সিসিলিয়ান, হলুদ পার্শ্বীয় দাগ, গর্তবাসী",
            "resultType": "species",
            "speciesId": "sp-ichthyophis-bannanicus",
            "rationaleEn": "Resolves to Banna caecilian (Ichthyophis bannanicus: Ichthyophiidae)",
            "rationaleBn": "বান্না সিসিলিয়ান (ইকথায়োফিস বান্নানিকাস: ইকথায়োফিডি পরিবার)"
          },
          {
            "lead": "Tetrapod amphibians possessing two pairs of well-developed ambulatory limbs (forelimbs and hindlimbs); pectoral and pelvic girdles present; eyes large and functional.",
            "leadBn": "দুই জোড়া সুগঠিত চলন পদযুক্ত (অগ্র ও পশ্চাৎ পদ) চতুস্পদী উভচর; বক্ষ ও শ্রোণী অস্থিচক্র বিদ্যমান; চোখ উন্মুক্ত ও কার্যকরী।",
            "diagnosticFeature": "Tetrapod Amphibia: Caudata (Salamanders) & Anura (Frogs & Toads)",
            "diagnosticFeatureBn": "চতুস্পদী উভচর: কডাটা (স্যালামান্ডার) ও অ্যানুরা (ব্যাঙ)",
            "resultType": "next_step",
            "nextStepId": 2
          }
        ]
      },
      {
        "id": 2,
        "title": "Adult Tail Retention: Caudata vs Anura",
        "titleBn": "লেজের স্থায়িত্ব: কডাটা (লেজযুক্ত) বনাম অ্যানুরা (লেজহীন ব্যাঙ)",
        "character": "Retention of prominent caudal tail in adults with equal limbs vs absence of tail in saltatorial adults",
        "characterBn": "প্রাপ্তবয়স্কদের লেজ অক্ষুণ্ন থাকা ও সমান পদ বনাম লেজহীন শরীর ও দীর্ঘ লাফানোর পা",
        "couplets": [
          {
            "lead": "Order Caudata (Urodela): Adults possess a long, prominent, well-developed tail throughout life; limbs short and roughly equal in length, held horizontally at right angles to trunk; skull lacks otic notch and eardrum (tympanum); body cylindrical with distinct costal grooves.",
            "leadBn": "কডাটা বর্গ (স্যালামান্ডার): প্রাপ্তবয়স্ক দশাতেও আজীবন দীর্ঘ লেজ অক্ষুণ্ন থাকে; চারটি পা প্রায় সমান দৈর্ঘ্যের; কানের পর্দা বা টিম্প্যানাম নেই; পাঁজরে স্পষ্ট খাঁজ থাকে।",
            "diagnosticFeature": "Order Caudata: Persistent adult tail, roughly equal limbs, costal grooves",
            "diagnosticFeatureBn": "কডাটা বর্গ: আজীবন লেজযুক্ত স্যালামান্ডার, প্রায় সমান পা",
            "resultType": "next_step",
            "nextStepId": 3
          },
          {
            "lead": "Order Anura (Salientia): Adults completely lack a tail (coccyx vertebrae fused into a rigid internal rod, the urostyle); body short, robust, tailless, and compact; hindlimbs greatly elongated and powerful with webbed feet modified for leaping (saltation) and swimming; tympanic membrane usually conspicuous behind eye.",
            "leadBn": "অ্যানুরা বর্গ (ব্যাঙ): প্রাপ্তবয়স্কদের লেজ সম্পূর্ণ অনুপস্থিত (লেজের কশেরুকা মিলে শক্ত ইউরোস্টাইল গঠন করে); দেহ চওড়া ও লেজহীন; পেছনের পা দুটি লাফানো ও সাঁতারের জন্য অত্যন্ত লম্বা ও পেশিবহুল; চোখের পেছনে টিম্প্যানাম পর্দা স্পষ্ট।",
            "diagnosticFeature": "Order Anura: Tailless adults, urostyle, elongated saltatorial hindlimbs, tympanum",
            "diagnosticFeatureBn": "অ্যানুরা বর্গ: লেজহীন ব্যাঙ, ইউরোস্টাইল, দীর্ঘ লাফানোর পা, টিম্প্যানাম",
            "resultType": "next_step",
            "nextStepId": 4
          }
        ]
      },
      {
        "id": 3,
        "title": "Order Caudata: Terrestrial Warning Coloration vs Neotenic Gills",
        "titleBn": "কডাটা বর্গ: স্থলচর সতর্কতাকারী স্যালামান্ডার বনাম জলজ চির-লার্ভা অ্যাক্সোলট্ল",
        "character": "Fully metamorphosed adult with yellow-black aposematic blotches vs neotenic retaining bushy external gills",
        "characterBn": "হলুদ-কালো আত্মরক্ষামূলক দাগযুক্ত স্থলচর বনাম আজীবন বহিস্থ লাল ফুলকাযুক্ত অ্যাক্সোলট্ল",
        "couplets": [
          {
            "lead": "Metamorphosed terrestrial adult; lungs functional, external gills completely lost; cylindrical black body decorated boldly with vibrant bright yellow or orange spots and longitudinal blotches (aposematic warning coloration); parotoid glands behind eyes secrete toxic neurotoxic samandarin alkaloids.",
            "leadBn": "রূপান্তরিত স্থলচর স্যালামান্ডার; ফুলকা বিলুপ্ত ও ফুসফুস কার্যকরী; কালো চামড়ায় উজ্জ্বল হলুদ দাগ (বিষাক্ততার সংকেত); বিষাক্ত সামানডারিন ক্ষরণকারী প্যারোটয়েড গ্রন্থিযুক্ত।",
            "diagnosticFeature": "Salamandra salamandra: Terrestrial metamorphosed adult, vivid yellow/black aposematism, samandarin",
            "diagnosticFeatureBn": "স্যালামান্ড্রা স্যালামান্ড্রা: ফায়ার স্যালামান্ডার, হলুদ-কালো দাগ, প্যারোটয়েড গ্রন্থি",
            "resultType": "species",
            "speciesId": "sp-salamandra-salamandra",
            "rationaleEn": "Resolves to Fire salamander (Salamandra salamandra: Salamandridae)",
            "rationaleBn": "ফায়ার স্যালামান্ডার (স্যালামান্ড্রা স্যালামান্ড্রা: স্যালামান্ড্রিডি পরিবার)"
          },
          {
            "lead": "Obligate neotenic/paedomorphic aquatic salamander; fails to metamorphose under natural conditions, retaining larval traits into sexual maturity: 3 pairs of prominent, bushy external red feathery gills behind head and a persistent broad dorsal/caudal fin; extraordinary capacity to regenerate entire limbs, heart, and spinal cord.",
            "leadBn": "চির-লার্ভা বা নিওটেনিক জলজ স্যালামান্ডার; রূপান্তর ঘটে না ফলে প্রাপ্তবয়স্ক অবস্থাতেও মাথার পেছনে ৩ জোড়া লালচে পালকসদৃশ বহিস্থ ফুলকা ও লেজের পাখনা থাকে; হারানো অঙ্গ পুনরুৎপাদনে শীর্ষ মডেল।",
            "diagnosticFeature": "Ambystoma mexicanum: Neotenic aquatic adult, 3 pairs external bushy gills, caudal fin, limb regeneration",
            "diagnosticFeatureBn": "অ্যাম্বিস্টোমা মেক্সিকানাম: অ্যাক্সোলট্ল, ৩ জোড়া বহিস্থ লাল ফুলকা, অঙ্গ পুনরুৎপাদন",
            "resultType": "species",
            "speciesId": "sp-ambystoma-mexicanum",
            "rationaleEn": "Resolves to Axolotl (Ambystoma mexicanum: Ambystomatidae)",
            "rationaleBn": "অ্যাক্সোলট্ল (অ্যাম্বিস্টোমা মেক্সিকানাম: অ্যাম্বিস্টোমাটিডি পরিবার)"
          }
        ]
      },
      {
        "id": 4,
        "title": "Order Anura: Warty Toads with Parotoids vs Smooth-Skinned / Toxic Frogs",
        "titleBn": "অ্যানুরা বর্গ: প্যারোটয়েডযুক্ত কুনোব্যাঙ বনাম মসৃণ ত্বক ও বিষাক্ত ডার্ট ফ্রগ",
        "character": "Thick dry warty skin with large parotoid glands behind eyes vs smooth/glandular skin without prominent parotoid glands",
        "characterBn": "প্যারোটয়েড গ্রন্থি ও আঁচিলযুক্ত খসখসে চামড়া বনাম মসৃণ ত্বক বা উজ্জ্বল বিষাক্ত ডার্ট ফ্রগ",
        "couplets": [
          {
            "lead": "Family Bufonidae (True Toads): Heavy, robust terrestrial body; skin thick, dry, and heavily covered in elevated glandular warts/tubercles; large, conspicuous paired parotoid glands located immediately behind eyes secreting defensive bufotoxins; teeth completely absent from jaws; short hopping hindlimbs.",
            "leadBn": "বুফোনিডি পরিবার (কুনোব্যাঙ): মোটা ও ভারী শরীর; চামড়া পুরু, শুষ্ক এবং অসংখ্য উঁচু আঁচিলে ভরা; চোখের পেছনে বিষাক্ত বাফোটক্সিন ক্ষরণকারী একজোড়া বৃহৎ প্যারোটয়েড গ্রন্থি; চোয়ালে দাঁত নেই।",
            "diagnosticFeature": "Family Bufonidae: Parotoid glands behind eyes, warty skin, toothless jaws, short terrestrial legs",
            "diagnosticFeatureBn": "বুফোনিডি পরিবার (কুনোব্যাঙ): প্যারোটয়েড গ্রন্থি, আঁচিলযুক্ত ত্বক, দাঁতহীন চোয়াল",
            "resultType": "next_step",
            "nextStepId": 5
          },
          {
            "lead": "Skin moist, smooth, or with narrow longitudinal glandular ridges; prominent elevated parotoid glands absent; teeth present on upper jaw (maxillary teeth) and vomerine bones; leaping legs long and powerful, or exhibiting extreme toxic aposematic coloration.",
            "leadBn": "চামড়া ভেজা, মসৃণ বা লম্বা খাঁজযুক্ত; সুস্পষ্ট প্যারোটয়েড গ্রন্থি নেই; উপরের চোয়ালে ম্যাক্সিলারি দাঁত ও ভোমারাইন দাঁত উপস্থিত; লম্বা লাফানোর পা বা উজ্জ্বল বিষাক্ত দেহ।",
            "diagnosticFeature": "Non-bufonid anurans: Dendrobatidae, Ranidae, Dicroglossidae",
            "diagnosticFeatureBn": "অন্যান্য অ্যানুরান: ডেনড্রোবেটিডি, রানিডি, ডাইক্রোগ্লসিডি",
            "resultType": "next_step",
            "nextStepId": 6
          }
        ]
      },
      {
        "id": 5,
        "title": "Family Bufonidae: Cranial Ridges and Tubercles",
        "titleBn": "বুফোনিডি পরিবার: মস্তকীয় খাঁজ (ক্রেনিয়াল রিজ) এবং আঁচিল",
        "character": "Prominent black-cornified cranial ridges vs smooth unridged head",
        "characterBn": "কালো খাঁজযুক্ত মস্তকীয় ক্রেস্ট বনাম খাঁজহীন মসৃণ মাথার কুনোব্যাঙ",
        "couplets": [
          {
            "lead": "Prominent, elevated bony cranial ridges (canthal, preorbital, supraorbital, postorbital) heavily lined with black cornified keratinous spinules; kidney-shaped parotoid glands immediately behind postorbital ridges; warts capped with sharp dark spines; the ubiquitous Asian toad.",
            "leadBn": "মাথার ওপর কালো রঙের খাঁজকাটা উঁচু হাড়ের শৈলশিরা (ক্রেনিয়াল রিজ) সুস্পষ্ট; প্যারোটয়েড গ্রন্থি বৃক্কাকার; পিঠের আঁচিলগুলোর ডগায় কালো কাঁটা থাকে; এশিয়ার সাধারণ কুনোব্যাঙ।",
            "diagnosticFeature": "Duttaphrynus melanostictus: Black cornified cranial ridges, reniform parotoids, black-spined warts, common Asian toad",
            "diagnosticFeatureBn": "দত্তাফ্রাইনাস মেলানোস্টিকটাস: কালো খাঁজযুক্ত কুনোব্যাঙ, বৃক্কাকার প্যারোটয়েড",
            "resultType": "species",
            "speciesId": "sp-duttaphrynus-melanostictus",
            "rationaleEn": "Resolves to Asian common toad / Black-spined toad (Duttaphrynus melanostictus: Bufonidae)",
            "rationaleBn": "কুনোব্যাঙ (দত্তাফ্রাইনাস মেলানোস্টিকটাস: বুফোনিডি পরিবার)"
          },
          {
            "lead": "Crown of head completely flat and smooth, completely lacking elevated bony cranial ridges; parotoid glands large, prominent, and slightly diverging posteriorly; skin brownish-grey with rounded, blunt non-spiny warts; classic European common toad.",
            "leadBn": "মাথার ওপর কোনো উঁচু হাড়ের খাঁজ বা ক্রেনিয়াল রিজ নেই; প্যারোটয়েড গ্রন্থি দুটি পেছনের দিকে কিছুটা ছড়ানো; ভোঁতা আঁচিলযুক্ত বাদামি ত্বক; ইউরোপের সাধারণ কুনোব্যাঙ।",
            "diagnosticFeature": "Bufo bufo: No cranial ridges, large diverging parotoids, blunt non-cornified warts",
            "diagnosticFeatureBn": "বুফো বুফো: ক্রেনিয়াল রিজহীন, ভোঁতা আঁচিল, ইউরোপিয়ান কুনোব্যাঙ",
            "resultType": "species",
            "speciesId": "sp-bufo-bufo",
            "rationaleEn": "Resolves to Common toad (Bufo bufo: Bufonidae)",
            "rationaleBn": "ইউরোপিয়ান কুনোব্যাঙ (বুফো বুফো: বুফোনিডি পরিবার)"
          },
          {
            "lead": "Cranial ridges present but delicate and low, joining in a distinctive postorbital spur; dorsal skin with dark blotches that each enclose only 1 or 2 large warts; enlarged warty tibia.",
            "leadBn": "মাথায় নিচু সূক্ষ্ম খাঁজ থাকে; পিঠের প্রতিটি কালো ছোপের ভেতরে কেবল ১ বা ২টি বড় আঁচিল থাকে; আমেরিকার সাধারণ কুনোব্যাঙ।",
            "diagnosticFeature": "Anaxyrus americanus: Low cranial ridges with spurs, dark spots enclosing 1-2 warts",
            "diagnosticFeatureBn": "অ্যানাক্সাইরাস আমেরিক্যানাস: অ্যামেরিকান কুনোব্যাঙ, ছোপে ১-২টি আঁচিল",
            "resultType": "species",
            "speciesId": "sp-anaxyrus-americanus",
            "rationaleEn": "Resolves to American toad (Anaxyrus americanus: Bufonidae)",
            "rationaleBn": "আমেরিকান কুনোব্যাঙ (অ্যানাক্সাইরাস আমেরিক্যানাস: বুফোনিডি পরিবার)"
          }
        ]
      },
      {
        "id": 6,
        "title": "Toxic Aposematic Dart Frog vs Large Semiaquatic True Frogs",
        "titleBn": "বিষাক্ত ডার্ট ফ্রগ বনাম বৃহৎ জলজ ট্রু ফ্রগ",
        "character": "Minute vibrant blue-black skin with alkaloid batrachotoxins vs large camouflaged frogs with long webbed leaping legs",
        "characterBn": "নীল-কালো উজ্জ্বল বিষাক্ত ডার্ট ফ্রগ বনাম ছদ্মবেশী সবুজ-বাদামি বৃহৎ শিকারী ব্যাঙ",
        "couplets": [
          {
            "lead": "Small diurnal Neotropical frog (3-5 cm); skin smooth and saturated with vibrant aposematic warning coloration (deep sapphire blue limbs with black dorsal blotches); granular skin glands secrete potent alkaloid neurotoxins historically used by indigenous hunters on blowgun darts; fingers with adhesive pads.",
            "leadBn": "ক্ষুদ্র উজ্জ্বল রঙের দিবাচর ব্যাঙ (৩-৫ সেমি); নীল ও কালো রঙের উজ্জ্বল সতর্কতা ত্বক; চামড়া থেকে তীব্র বিষাক্ত অ্যালকালয়েড নিঃসৃত হয় যা শিকারের বিষতীরে ব্যবহৃত হতো; আঙুলে প্যাডযুক্ত।",
            "diagnosticFeature": "Dendrobates tinctorius: Vibrant blue/black aposematism, alkaloid toxins, digital scutes, diurnal",
            "diagnosticFeatureBn": "ডেনড্রোবেটস টিঙ্কটোরিয়াস: বিষাক্ত ডার্ট ফ্রগ, নীল-কালো বর্ণ, অ্যালকালয়েড বিষ",
            "resultType": "species",
            "speciesId": "sp-dendrobates-tinctorius",
            "rationaleEn": "Resolves to Dyeing poison dart frog (Dendrobates tinctorius: Dendrobatidae)",
            "rationaleBn": "পয়জন ডার্ট ফ্রগ (ডেনড্রোবেটস টিঙ্কটোরিয়াস: ডেনড্রোবেটিডি পরিবার)"
          },
          {
            "lead": "Large, robust, camouflaged semiaquatic predatory frogs; skin olive-green or brown; powerful elongated hindlimbs with extensively webbed toes adapted for explosive leaping and deep swimming.",
            "leadBn": "বৃহৎ ছদ্মবেশী জলজ শিকারী ব্যাঙ; জলপাই-সবুজ বা বাদামি চামড়া; পানিতে সাঁতার কাটা ও লাফানোর জন্য পেছনের পায়ে প্রশস্ত লিপ্তপদী পর্দা।",
            "diagnosticFeature": "Semiaquatic True Frogs: Ranidae & Dicroglossidae",
            "diagnosticFeatureBn": "জলজ শিকারী ব্যাঙ: রানিডি ও ডাইক্রোগ্লসিডি",
            "resultType": "next_step",
            "nextStepId": 7
          }
        ]
      },
      {
        "id": 7,
        "title": "Ranidae vs Dicroglossidae: Bullfrog vs Indus Valley Bullfrog",
        "titleBn": "রানিডি বনাম ডাইক্রোগ্লসিডি: আমেরিকান বুলফ্রগ বনাম কোলাব্যাঙ / সোনাব্যাঙ",
        "character": "Huge flat tympanum exceeding eye without dorsolateral folds vs longitudinal glandular ridges with yellow dorsal stripe",
        "characterBn": "চোখের চেয়ে বড় টিম্প্যানাম ও ভাঁজহীন ত্বক বনাম পিঠে দৈর্ঘ্য বরাবর উঁচু চামড়ার খাঁজ ও হলুদ ডোরা",
        "couplets": [
          {
            "lead": "Enormous heavy-bodied North American aquatic frog up to 20 cm; dorsolateral glandular folds completely absent along back; tympanum enormous, equal to eye in females and significantly larger than eye in males; deep booming bull-like mating bellow.",
            "leadBn": "উত্তর আমেরিকার বিশালাকার ভারী ব্যাঙ (২০ সেমি); পিঠের দুই পাশে কোনো চামড়ার ভাঁজ নেই; পুরুষের কানের পর্দা (টিম্প্যানাম) চোখের চেয়েও অনেক বড়; ষাঁড়ের মতো ডাক।",
            "diagnosticFeature": "Lithobates catesbeianus: Enormous tympanum exceeding eye, no dorsolateral folds, giant aquatic",
            "diagnosticFeatureBn": "লিথোবেটস ক্যাটসবেইয়ানাস: আমেরিকান বুলফ্রগ, বিশাল টিম্প্যানাম, ভাঁজহীন পিঠ",
            "resultType": "species",
            "speciesId": "sp-lithobates-catesbeianus",
            "rationaleEn": "Resolves to American bullfrog (Lithobates catesbeianus: Ranidae)",
            "rationaleBn": "আমেরিকান বুলফ্রগ (লিথোবেটস ক্যাটসবেইয়ানাস: রানিডি পরিবার)"
          },
          {
            "lead": "Large robust South Asian semiaquatic frog up to 15-17 cm; dorsum marked with multiple prominent, raised longitudinal glandular skin folds running from neck to vent; often bears a narrow pale yellow or cream vertebral line down midline; breeding males turn electric yellow with bright blue vocal sacs; iconic Kolabang of Bangladesh.",
            "leadBn": "দক্ষিণ এশিয়ার পরিচিত কোলাব্যাঙ বা সোনাব্যাঙ (১৫-১৭ সেমি); পিঠজুড়ে দৈর্ঘ্য বরাবর একাধিক উঁচু চামড়ার খাঁজ থাকে; প্রজননকালে পুরুষ উজ্জ্বল হলুদ বর্ণ ধারণ করে ও নীল স্বরথলি ফোলায়।",
            "diagnosticFeature": "Hoplobatrachus tigerinus: Prominent longitudinal skin folds, yellow breeding morph in males, blue vocal sacs",
            "diagnosticFeatureBn": "হপ্লোব্যাট্রাকাস টাইগারিনাস: কোলাব্যাঙ / সোনাব্যাঙ, পিঠে চামড়ার খাঁজ, হলুদ বর্ণ",
            "resultType": "species",
            "speciesId": "sp-hoplobatrachus-tigerinus",
            "rationaleEn": "Resolves to Indus Valley bullfrog / Tiger frog (Hoplobatrachus tigerinus: Dicroglossidae)",
            "rationaleBn": "কোলাব্যাঙ / সোনাব্যাঙ (হপ্লোব্যাট্রাকাস টাইগারিনাস: ডাইক্রোগ্লসিডি পরিবার)"
          }
        ]
      }
    ]
  },
  {
    "id": "key-global-reptilia-orders",
    "title": "Diagnostic Key to Orders & Canonical Lineages of Living Reptilia",
    "titleBn": "সরীসৃপ শ্রেণির জীবিত বর্গ ও বংশধারার শনাক্তকরণ কুঞ্জি",
    "scope": "global",
    "targetTaxonId": "taxon-reptilia",
    "majorGroup": "reptilia",
    "taxonScope": "Class Reptilia (Turtles, Tuatara, Crocodilians, Lizards & Snakes)",
    "taxonScopeBn": "রেপটিলিয়া বা সরীসৃপ শ্রেণি (কচ্ছপ, টুয়াটারা, কুমির, গিরগিটি ও সাপ)",
    "description": "Authoritative dichotomous key distinguishing the four extant orders of Class Reptilia and their canonical representative species based on epidermal keratinous scales, cranial fenestration, thecodont teeth, kinetic skull, and hemipenes.",
    "descriptionBn": "কেরাটিনময় আঁশ, করোটিকার গবাক্ষ, থেকোডন্ট দাঁত, হেমিপেনিস এবং কঙ্কালের ওপর ভিত্তি করে সরীসৃপদের ৪টি বর্গ ও ১৪টি প্রামাণ্য প্রজাতি শনাক্তকরণ কুঞ্জি।",
    "educationalLevel": "intermediate",
    "keyType": "dichotomous",
    "sourceReferenceIds": [
      "ref-reptile-database-2026",
      "ref-kardong-2018",
      "ref-hickman-2020"
    ],
    "verificationStatus": "verified",
    "steps": [
      {
        "id": 1,
        "title": "Bony Shell Presence: Testudines vs Non-Shelled Reptiles",
        "titleBn": "অস্থিময় খোলস: কচ্ছপ (টেস্টুডিনেস) বনাম খোলসহীন সরীসৃপ",
        "character": "Presence of a rigid bony shell enclosing trunk vs flexible body without shell",
        "characterBn": "বক্ষ ও উদর আবৃতকারী শক্ত খোলস বনাম খোলসহীন নমনীয় দেহ",
        "couplets": [
          {
            "lead": "Order Testudines (Chelonia): Trunk permanently enclosed inside an immovable bony shell consisting of a dorsal carapace and ventral plastron fused with ribs and vertebrae; jaws completely toothless and encased in sharp keratinous horny beaks (tomia); pectoral and pelvic girdles located uniquely inside the ribcage.",
            "leadBn": "টেস্টুডিনেস বর্গ (কচ্ছপ): দেহ পৃষ্ঠীয় ক্যারাপেস ও অঙ্কীয় প্লাস্ট্রন দ্বারা গঠিত শক্ত অস্থিময় খোলসে আবৃত; চোয়াল দাঁতহীন এবং ধারালো চঞ্চুতে আবৃত; কাঁধ ও কোমর পাঁজরের খাঁচার ভেতরে অবস্থিত।",
            "diagnosticFeature": "Order Testudines: Bony carapace/plastron, toothless keratinous beak, internal girdles",
            "diagnosticFeatureBn": "টেস্টুডিনেস বর্গ: অস্থিময় খোলস, দাঁতহীন কাইটিনময় চঞ্চু, কচ্ছপ",
            "resultType": "next_step",
            "nextStepId": 2
          },
          {
            "lead": "Body lacking a rigid bony shell; trunk vertebrae and ribs independent and movable; jaws armed with teeth (acrodont, pleurodont, or thecodont); pectoral girdle located exterior to thoracic ribs.",
            "leadBn": "অস্থিময় শক্ত খোলস অনুপস্থিত; পাঁজর ও কশেরুকা স্বাধীন ও নমনীয়; চোয়ালে দাঁত বর্তমান; কাঁধ পাঁজরের বাইরে অবস্থিত।",
            "diagnosticFeature": "Non-chelonian reptiles: Rhynchocephalia, Crocodylia & Squamata",
            "diagnosticFeatureBn": "খোলসহীন সরীসৃপ: টুয়াটারা, কুমির ও স্কোয়ামাটা (গিরগিটি/সাপ)",
            "resultType": "next_step",
            "nextStepId": 4
          }
        ]
      },
      {
        "id": 2,
        "title": "Order Testudines: Terrestrial Giant Tortoise vs Marine Sea Turtles",
        "titleBn": "টেস্টুডিনেস বর্গ: স্থলচর দৈত্যাকার কচ্ছপ বনাম সামুদ্রিক কাছিম",
        "character": "Columnar elephantine walking feet with high dome carapace vs paddle-like swimming flippers",
        "characterBn": "হাতির মতো নলাকার পা ও উঁচু গম্বুজাকার খোলস বনাম লগি বা প্যাডেল সদৃশ সাঁতারু ডানা",
        "couplets": [
          {
            "lead": "Strictly terrestrial tortoise; hindfeet thick, columnar, and elephantine without webs or swimming claws; carapace high, massive, domed or saddle-shaped up to 1.2-1.5 meters; herbivorous giant insular endemic living over a century.",
            "leadBn": "সম্পূর্ণ স্থলচর কচ্ছপ; হাতির মতো নলাকার মোটা পা যাতে সাঁতারের পর্দা নেই; উঁচু গম্বুজের মতো বিশাল খোলস (১.২-১.৫ মিটার); ১০০ বছরের বেশি বাঁচে।",
            "diagnosticFeature": "Chelonoidis niger: Elephantine columnar feet, high dome/saddleback carapace, herbivorous giant",
            "diagnosticFeatureBn": "চেলোনয়ডিস নাইজার: গ্যালাপাগোস কচ্ছপ, হাতির মতো পা, উঁচু খোলস",
            "resultType": "species",
            "speciesId": "sp-chelonoidis-niger",
            "rationaleEn": "Resolves to Galápagos giant tortoise (Chelonoidis niger: Testudinidae)",
            "rationaleBn": "গ্যালাপাগোস জায়ান্ট টরটয়েজ (চেলোনয়ডিস নাইজার: টেস্টুডিনিডি পরিবার)"
          },
          {
            "lead": "Fully marine sea turtles; forelimbs modified into elongated, rigid wing-like paddle flippers; hindlimbs flattened rudders; shell streamlined and flattened; limbs cannot retract into shell.",
            "leadBn": "সম্পূর্ণ সামুদ্রিক কাছিম; সামনের পা দুটি দীর্ঘ পাখার মতো সাঁতারু ফ্লিপারে রূপান্তরিত; খোলসটি চ্যাপ্টা ও সুবিন্যস্ত; পা খোলসের ভেতর টেনে নেওয়া যায় না।",
            "diagnosticFeature": "Family Cheloniidae: Marine paddle flippers, non-retractile limbs, streamlined carapace",
            "diagnosticFeatureBn": "কেলনিডি পরিবার: সামুদ্রিক কাছিম, ফ্লিপার পা, ফ্ল্যাট খোলস",
            "resultType": "next_step",
            "nextStepId": 3
          }
        ]
      },
      {
        "id": 3,
        "title": "Marine Sea Turtles: Green Sea Turtle vs Olive Ridley",
        "titleBn": "সামুদ্রিক কাছিম: গ্রিন সি টার্টল বনাম অলিভ রিডলি কাছিম",
        "character": "Carapace with 4 pairs of lateral costal scutes vs 6 to 9 pairs of costal scutes",
        "characterBn": "ক্যারাপেসে ৪ জোড়া পার্শ্বীয় কোস্টাল স্কুট বনাম ৬ থেকে ৯ জোড়া কোস্টাল স্কুট",
        "couplets": [
          {
            "lead": "Large marine turtle up to 1.2 meters; carapace smooth and heart-shaped with exactly 4 pairs of lateral costal scutes; head with single pair of prefrontal scales between eyes; serrated lower jaw adapted for herbivorous grazing on marine seagrasses and algae.",
            "leadBn": "বিশাল সামুদ্রিক কাছিম (১.২ মিটার); খোলসের দুই পাশে ঠিক ৪ জোড়া কোস্টাল স্কুট থাকে; চোখের মাঝে একজোড়া প্রিফ্রন্টাল স্কেল; সামুদ্রিক ঘাসভোজী।",
            "diagnosticFeature": "Chelonia mydas: 4 pairs costal scutes, single pair prefrontal scales, herbivorous serrated jaw",
            "diagnosticFeatureBn": "চেলোনিয়া মাইডাস: ৪ জোড়া কোস্টাল স্কুট, গ্রিন সি টার্টল / সবুজ কাছিম",
            "resultType": "species",
            "speciesId": "sp-chelonia-mydas",
            "rationaleEn": "Resolves to Green sea turtle (Chelonia mydas: Cheloniidae)",
            "rationaleBn": "সবুজ সামুদ্রিক কাছিম (চেলোনিয়া মাইডাস: কেলনিডি পরিবার)"
          },
          {
            "lead": "Smallest marine sea turtle (60-70 cm); carapace nearly circular and high-domed with 6 to 9 pairs of asymmetrical lateral costal scutes (higher count than any other sea turtle); uniform olive-green coloration; mass synchronized nesting aggregations (arribada) on sandy beaches.",
            "leadBn": "সবচেয়ে ছোট সামুদ্রিক কাছিম (৬০-৭০ সেমি); খোলসে ৬ থেকে ৯ জোড়া অপ্রতিসম কোস্টাল স্কুট থাকে; জলপাই-সবুজ রঙের; সৈকতে একসাথে হাজার হাজার কাছিমের ডিম পাড়ার দলগত মেলা (অরিবাডা)।",
            "diagnosticFeature": "Lepidochelys olivacea: 6-9 pairs costal scutes, circular high carapace, arribada mass nesting",
            "diagnosticFeatureBn": "লেপিডোকিলিস অলিভাসিয়া: ৬-৯ জোড়া কোস্টাল স্কুট, অলিভ রিডলি কাছিম, অরিবাডা",
            "resultType": "species",
            "speciesId": "sp-lepidochelys-olivacea",
            "rationaleEn": "Resolves to Olive ridley sea turtle (Lepidochelys olivacea: Cheloniidae)",
            "rationaleBn": "অলিভ রিডলি সামুদ্রিক কাছিম (লেপিডোকিলিস অলিভাসিয়া: কেলনিডি পরিবার)"
          }
        ]
      },
      {
        "id": 4,
        "title": "Diapsid Lineages: Crocodylia vs Rhynchocephalia & Squamata",
        "titleBn": "ডায়াপসিড বংশধারা: কুমির বর্গ বনাম টুয়াটারা ও স্কোয়ামাটা (গিরগিটি/সাপ)",
        "character": "Thecodont teeth in bony sockets with 4-chambered heart and heavy osteoderms vs pleurodont/acrodont teeth",
        "characterBn": "চোয়ালের গর্তে প্রোথিত থেকোডন্ট দাঁত ও ৪ প্রকোষ্ঠের হৃৎপিণ্ড বনাম হেমিপেনিস ও রেনাল পৌষ্টিকতন্ত্র",
        "couplets": [
          {
            "lead": "Order Crocodylia: Large, semi-aquatic predatory archosaurs; heavy thecodont conical teeth set in individual deep bony sockets; skull completely diapsid with secondary palate separating air passage from mouth; 4-chambered heart with Foramen of Panizza; dorsal armor of heavy bony plates (osteoderms); laterally flattened swimming tail.",
            "leadBn": "ক্রোকোডিলিয়া বর্গ (কুমির): বিশালাকার জলজ শিকারী আর্কোসর; চোয়ালের গভীর গর্তে শক্ত থেকোডন্ট দাঁত; ৪ প্রকোষ্ঠবিশিষ্ট উন্নত হৃৎপিণ্ড; পিঠজুড়ে শক্ত হাড়ের বর্ম (অস্টিওডার্ম); চ্যাপ্টা সাঁতারু লেজ।",
            "diagnosticFeature": "Order Crocodylia: Thecodont teeth, secondary palate, complete 4-chambered heart, dorsal osteoderms",
            "diagnosticFeatureBn": "ক্রোকোডিলিয়া বর্গ: থেকোডন্ট দাঁত, ৪ প্রকোষ্ঠের হৃৎপিণ্ড, অস্টিওডার্ম বর্ম",
            "resultType": "next_step",
            "nextStepId": 5
          },
          {
            "lead": "Lepidosauria: Teeth acrodont or pleurodont, never set in individual thecodont sockets; heart 3-chambered; transverse cloacal slit; caudal autotomy planes often present; males possess paired eversible copulatory organs (hemipenes in Squamata) or lack copulatory organ (Sphenodon).",
            "leadBn": "লেপিডোসোরিয়া: দাঁত চোয়ালের হাড়ের ওপর যুক্ত, গর্তে প্রোথিত নয়; ৩ প্রকোষ্ঠের হৃৎপিণ্ড; আড়াআড়ি ক্লোয়াকা ছিদ্র; পুরুষে হেমিপেনিস উপস্থিত বা অনুপস্থিত।",
            "diagnosticFeature": "Lepidosauria: Transverse cloaca, 3-chambered heart, Squamata & Rhynchocephalia",
            "diagnosticFeatureBn": "লেপিডোসোরিয়া: টুয়াটারা এবং স্কোয়ামাটা (গিরগিটি ও সাপ)",
            "resultType": "next_step",
            "nextStepId": 7
          }
        ]
      },
      {
        "id": 5,
        "title": "Order Crocodylia: Snout Architecture and Tooth Occlusion",
        "titleBn": "ক্রোকোডিলিয়া বর্গ: মুখের চোয়ালের গঠন ও দাঁতের বিন্যাস",
        "character": "Extremely narrow tubular fish-catching snout vs broad U-shaped snout vs triangular notched snout",
        "characterBn": "অত্যন্ত সরু চোঙাকৃতি মাছশিকারী থুতনি বনাম চওড়া ভোঁতা থুতনি বনাম বিশাল ত্রিভুজাকৃতি খাঁজযুক্ত থুতনি",
        "couplets": [
          {
            "lead": "Snout extraordinarily elongated, narrow, and slender-tubular armed with over 100 interlocking needle-sharp teeth; adult males develop a hollow bulbous cartilaginous swelling (ghara) at tip of snout; endemic fish-eating specialist of deep South Asian river systems.",
            "leadBn": "থুতনি অত্যন্ত সরু ও দীর্ঘ নলের মতো যাতে ১০০টির বেশি সুচালো দাঁত থাকে; প্রাপ্তবয়স্ক পুরুষের নাকের ডগায় মাটির ঘড়ার মতো ফাঁপা স্ফীতি (ঘড়া) থাকে; মাছভোজী ঘড়িয়াল।",
            "diagnosticFeature": "Gavialis gangeticus: Extremely slender tubular snout, ghara on male tip, riverine piscivore",
            "diagnosticFeatureBn": "গ্যাভিয়ালিস গ্যাঞ্জেটিকাস: ঘড়িয়াল, সরু নলাকার চোয়াল, নাকের ডগায় ঘড়া",
            "resultType": "species",
            "speciesId": "sp-gavialis-gangeticus",
            "rationaleEn": "Resolves to Gharial (Gavialis gangeticus: Gavialidae)",
            "rationaleBn": "ঘড়িয়াল (গ্যাভিয়ালিস গ্যাঞ্জেটিকাস: গ্যাভিয়ালিডি পরিবার)"
          },
          {
            "lead": "Snout broad, flat, or triangular; not extremely slender and tubular; opportunistic apex predators.",
            "leadBn": "থুতনি চওড়া, চ্যাপ্টা বা ত্রিভুজাকার; সরু নলের মতো নয়; সর্বভুক শীর্ষ শিকারী।",
            "diagnosticFeature": "Alligatoridae & Crocodylidae",
            "diagnosticFeatureBn": "অ্যালিগেটর এবং প্রকৃত কুমির",
            "resultType": "next_step",
            "nextStepId": 6
          }
        ]
      },
      {
        "id": 6,
        "title": "Alligatoridae vs Crocodylidae",
        "titleBn": "অ্যালিগেটর বনাম প্রকৃত কুমির (সল্টওয়াটার ক্রোকোডাইল)",
        "character": "Broad rounded U-shaped snout with hidden 4th mandibular tooth vs triangular snout with exposed 4th tooth",
        "characterBn": "চওড়া ভোঁতা চোয়াল ও উপরের গর্তে লুকানো ৪র্থ দাঁত বনাম ত্রিভুজাকার চোয়াল ও বাইরে দৃশ্যমান ৪র্থ দাঁত",
        "couplets": [
          {
            "lead": "Broad, rounded, U-shaped snout; when jaws are clamped shut, the large 4th tooth of the lower jaw fits completely into an internal socket inside the upper jaw and is entirely invisible from the outside; freshwater swamps and bayous.",
            "leadBn": "চওড়া ও গোলাকার U-আকৃতির থুতনি; মুখ বন্ধ করলে নিচের চোয়ালের ৪র্থ দাঁতটি উপরের চোয়ালের গর্তের ভেতর লুকানো থাকে এবং বাইরে থেকে দেখা যায় না।",
            "diagnosticFeature": "Alligator mississippiensis: Broad U-shaped snout, lower 4th tooth concealed in pit, freshwater",
            "diagnosticFeatureBn": "অ্যালিগেটর মিসিসিপিয়েনসিস: আমেরিকান অ্যালিগেটর, লুকানো ৪র্থ দাঁত",
            "resultType": "species",
            "speciesId": "sp-alligator-mississippiensis",
            "rationaleEn": "Resolves to American alligator (Alligator mississippiensis: Alligatoridae)",
            "rationaleBn": "আমেরিকান অ্যালিগেটর (অ্যালিগেটর মিসিসিপিয়েনসিস)"
          },
          {
            "lead": "Colossal apex predator reaching 6-7 meters; heavy triangular snout; when jaws are shut, the large 4th mandibular tooth fits into an external notch in the upper jaw and remains conspicuously visible; lingual salt glands on tongue excrete excess sodium; thrives in coastal mangrove estuaries and oceanic waters; the iconic Sundarbans crocodile.",
            "leadBn": "বিশাল দানবীয় শিকারী (৬-৭ মিটার); ত্রিভুজাকৃতি মুখ; মুখ বন্ধ থাকলেও নিচের চোয়ালের ৪র্থ দাঁতটি বাইরের খাঁজে স্পষ্ট দৃশ্যমান থাকে; জিহ্বায় লবণ গ্রন্থি থাকে; সুন্দরবনের লোনা পানির কুমির।",
            "diagnosticFeature": "Crocodylus porosus: Colossal size, 4th lower tooth exposed in notch, lingual salt glands, estuarine",
            "diagnosticFeatureBn": "ক্রোকোডাইলাস পোরোসাস: লোনা পানির কুমির, দৃশ্যমান ৪র্থ দাঁত, লবণ গ্রন্থি",
            "resultType": "species",
            "speciesId": "sp-crocodylus-porosus",
            "rationaleEn": "Resolves to Saltwater crocodile / Estuarine crocodile (Crocodylus porosus: Crocodylidae)",
            "rationaleBn": "লোনা পানির কুমির (ক্রোকোডাইলাস পোরোসাস: ক্রোকোডাইলিডি পরিবার)"
          }
        ]
      },
      {
        "id": 7,
        "title": "Order Rhynchocephalia vs Order Squamata",
        "titleBn": "রাইঙ্কোসেফালিয়া (টুয়াটারা) বনাম স্কোয়ামাটা (আঁশযুক্ত সরীসৃপ)",
        "character": "Complete lower temporal bar with acrodont tooth crest and parietal eye vs kinetic skull with hemipenes",
        "characterBn": "সম্পূর্ণ করোটিকা ও তৃতীয় নেত্রযুক্ত প্রাচীন টুয়াটারা বনাম নমনীয় করোটিকা ও জোড়া হেমিপেনিসযুক্ত স্কোয়ামাটা",
        "couplets": [
          {
            "lead": "Order Rhynchocephalia: Ancient lizard-like diapsid retaining complete upper and lower temporal arches in skull; upper jaw has a double row of teeth enclosing a single lower row like a shearing scissor; well-developed third parietal eye with cornea and lens in juveniles; males completely lack hemipenes/copulatory organ; endemic to New Zealand offshore islands.",
            "leadBn": "রাইঙ্কোসেফালিয়া বর্গ (টুয়াটারা): আদিম দুই খাঁজযুক্ত খুলি অক্ষুণ্ন; কাঁচির মতো উপরের দুই সারির দাঁতের মাঝে নিচের দাঁত আটকায়; কপালে সুস্পষ্ট তৃতীয় নেত্র (প্যারিয়েটাল আই) থাকে; পুরুষে হেমিপেনিস নেই; নিউজিল্যান্ডের জীবন্ত জীবাশ্ম।",
            "diagnosticFeature": "Sphenodon punctatus: Complete lower temporal bar, double tooth rows, third eye, no hemipenes",
            "diagnosticFeatureBn": "স্ফেনোডন পাঙ্কটাটাস: টুয়াটারা, কাঁচি দাঁত, তৃতীয় নেত্র, জীবন্ত জীবাশ্ম",
            "resultType": "species",
            "speciesId": "sp-sphenodon-punctatus",
            "rationaleEn": "Resolves to Tuatara (Sphenodon punctatus: Sphenodontidae)",
            "rationaleBn": "টুয়াটারা (স্ফেনোডন পাঙ্কটাটাস: স্ফেনোডন্টিডি পরিবার)"
          },
          {
            "lead": "Order Squamata: Skull streptostylic/kinetic (quadrate bone movable allowing wide gape); lower temporal arch lost; epidermis covered in horny keratinous epidermal scales or scutes shed periodically; males possess paired eversible tubular hemipenes in tail base; jacobson organ highly developed.",
            "leadBn": "স্কোয়ামাটা বর্গ (গিরগিটি ও সাপ): নমনীয় করোটিকা (মুখ বিশাল ফাঁক করতে পারে); চামড়ায় কেরাটিনময় আঁশ যা পর্যায়ক্রমে খোলস বদলায়; পুরুষের লেজের গোড়ায় একজোড়া বহিস্থ হেমিপেনিস থাকে; জ্যাকবসন অঙ্গ সুগঠিত।",
            "diagnosticFeature": "Order Squamata: Kinetic skull, movable quadrate, paired hemipenes, periodic ecdysis",
            "diagnosticFeatureBn": "স্কোয়ামাটা বর্গ: নমনীয় চোয়াল, হেমিপেনিস, খোলস বদলানো",
            "resultType": "next_step",
            "nextStepId": 8
          }
        ]
      },
      {
        "id": 8,
        "title": "Order Squamata: Sauria (Lizards) vs Serpentes (Snakes)",
        "titleBn": "স্কোয়ামাটা বর্গ: সরিয়া (গিরগিটি) বনাম সারপেন্টেস (সাপ)",
        "character": "Limbs present with movable eyelids and ear openings vs limbless with transparent brille scale and no ear opening",
        "characterBn": "পা, নড়াচড়া করা চোখের পাতা ও কানের ছিদ্রযুক্ত গিরগিটি বনাম পদহীন ও স্বচ্ছ পর্দাযুক্ত সাপ",
        "couplets": [
          {
            "lead": "Suborder Sauria (Lacertilia): Limbs typically present and well-developed; external ear opening (tympanum) and movable eyelids usually present; lower jaw halves firmly sutured at chin symphysis; diurnal or arboreal monitors and chameleons.",
            "leadBn": "উপবর্গ সরিয়া (গিরগিটি): সাধারণত ৪টি সুগঠিত পা থাকে; কানের বহিস্থ ছিদ্র ও নাড়াচাড়া করা চোখের পাতা উপস্থিত; নিচের চোয়ালের দুই পাশ থুতনিতে শক্তভাবে জোড়া লাগানো।",
            "diagnosticFeature": "Suborder Sauria: Limbs present, movable eyelids, external ear opening",
            "diagnosticFeatureBn": "উপবর্গ সরিয়া (গিরগিটি): পদযুক্ত, চোখের পাতা, কানের ছিদ্র",
            "resultType": "next_step",
            "nextStepId": 9
          },
          {
            "lead": "Suborder Serpentes (Ophidia): Limbs and pectoral girdle completely absent (or vestigial pelvic spurs in boas); eyelids fused into a transparent, immovable protective spectacle (brille); external ear openings, eardrum, and middle ear cavity completely absent; mandibles joined anteriorly by an elastic ligament allowing engulfing colossal prey.",
            "leadBn": "উপবর্গ সারপেন্টেস (সাপ): পদ ও কাঁধের অস্থি সম্পূর্ণ অনুপস্থিত; চোখের পাতা স্বচ্ছ স্থির চশমার মতো পর্দায় (ব্রিল) রূপান্তরিত; কানের ছিদ্র নেই; চোয়াল স্থিতিস্থাপক লিগামেন্ট দিয়ে যুক্ত যা বিশাল শিকার গিলতে পারে।",
            "diagnosticFeature": "Suborder Serpentes: Limbless, brille spectacles, no external ears, ligamentous chin symphysis",
            "diagnosticFeatureBn": "উপবর্গ সারপেন্টেস (সাপ): পদহীন, স্থির চোখের পর্দা, কানহীন, স্থিতিস্থাপক চোয়াল",
            "resultType": "next_step",
            "nextStepId": 10
          }
        ]
      },
      {
        "id": 9,
        "title": "Suborder Sauria: Chameleon vs Komodo Dragon",
        "titleBn": "সরিয়া উপবর্গ: গিরগিটি (ক্যামেলিয়ন) বনাম কোমোডো ড্রাগন",
        "character": "Zygodactylous grasping feet with casque and prehensile tail vs gigantic predatory monitor with forked tongue",
        "characterBn": "জাইগোড্যাকটাইল আঁকড়ে ধরা পা ও প্রাকhensাইল লেজ বনাম দানবীয় শিকারী গুঁইসাপ ও চেরা জিহ্বা",
        "couplets": [
          {
            "lead": "Arboreal specialized lizard; digits fused into opposable grasping mitten bundles (zygodactylous); prehensile tail; turret eyes capable of independent 360° motion; high helmet-like casque on head; projectile ballistic tongue longer than body used to snatch insects.",
            "leadBn": "গাছবাসী বিশেষায়িত গিরগিটি; পায়ের আঙুল দুই পাশে জোড়া লেগে চিমটার মতো আঁকড়ে ধরার উপযোগী; পেঁচানো লেজ; দুটি চোখ স্বাধীনভাবে আলাদা দিকে ঘোরে; মাথার ওপর হেলমেটের মতো ঝুঁটি; দেহের চেয়েও লম্বা শিকারী জিহ্বা।",
            "diagnosticFeature": "Chamaeleo calyptratus: Zygodactylous grasping feet, high cranial casque, ballistic tongue, prehensile tail",
            "diagnosticFeatureBn": "ক্যামেলিও ক্যালিপ্ট্রেটাস: ভেইল্ড ক্যামেলিয়ন, জাইগোড্যাকটাইল পা, হেলমেট ঝুঁটি",
            "resultType": "species",
            "speciesId": "sp-chamaeleo-calyptratus",
            "rationaleEn": "Resolves to Veiled chameleon (Chamaeleo calyptratus: Chamaeleonidae)",
            "rationaleBn": "ভেইল্ড ক্যামেলিয়ন (ক্যামেলিও ক্যালিপ্ট্রেটাস: ক্যামেলিয়নিডি পরিবার)"
          },
          {
            "lead": "Colossal terrestrial monitor lizard growing up to 3 meters and 70-130 kg; heavily armored osteoderm scales inside skin; long deeply forked yellow sensory tongue; serrated shark-like teeth backed by mandibular venom glands delivering anticoagulant shock to large ungulate prey; apex predator of Indonesian islands.",
            "leadBn": "৩ মিটার লম্বা ও ৭০-১৩০ কেজি ওজনের বিশ্বের বৃহত্তম গুঁইসাপ; চামড়ায় হাড়ের অস্টিওডার্ম বর্ম; দীর্ঘ চেরা হলুদ জিহ্বা; হাঙ্গরের মতো করাতের দাঁত ও রক্ত জমাট বাঁধতে বাধা দেওয়া বিষগ্রন্থি।",
            "diagnosticFeature": "Varanus komodoensis: Giant monitor up to 3 m, serrated teeth, forked yellow tongue, anticoagulant venom",
            "diagnosticFeatureBn": "ভ্যারানাস কোমোডোয়েনসিস: কোমোডো ড্রাগন, বিশ্বের বৃহত্তম গুঁইসাপ, বিষগ্রন্থি",
            "resultType": "species",
            "speciesId": "sp-varanus-komodoensis",
            "rationaleEn": "Resolves to Komodo dragon (Varanus komodoensis: Varanidae)",
            "rationaleBn": "কোমোডো ড্রাগন (ভ্যারানাস কোমোডোয়েনসিস: ভ্যারানিডি পরিবার)"
          }
        ]
      },
      {
        "id": 10,
        "title": "Suborder Serpentes: Pelagic Sea Snake vs Terrestrial Constrictors / Venomous Vipers & Elapids",
        "titleBn": "সারপেন্টেস উপবর্গ: সামুদ্রিক সাপের লগি লেজ বনাম স্থলচর অজগর ও বিষধর সাপ",
        "character": "Laterally compressed paddle-like swimming tail with yellow belly vs cylindrical terrestrial tail",
        "characterBn": "পার্শ্বীয়ভাবে চ্যাপ্টা প্যাডেল লেজ ও হলুদ পেট বনাম নলাকার স্থলচর লেজ",
        "couplets": [
          {
            "lead": "Completely marine pelagic sea snake; posterior third of body and tail strongly laterally compressed into a flat, oar-like swimming paddle; ventral belly scales greatly reduced or absent; striking bicolored pattern with jet-black dorsum and bright canary-yellow venter; highly toxic neurotoxic proteroglyph venom; never comes ashore.",
            "leadBn": "সম্পূর্ণ সামুদ্রিক পেলাজিক সাপ; সাঁতার কাটার জন্য পেছনের এক-তৃতীয়াংশ ও লেজটি বৈঠা বা লগির মতো চ্যাপ্টা; পেটের আঁশ অত্যন্ত ক্ষুদ্র; পিঠ ঘন কালো ও পেট উজ্জ্বল হলুদ; তীব্র স্নায়ুবিষযুক্ত।",
            "diagnosticFeature": "Hydrophis platurus: Laterally compressed paddle tail, black dorsum with yellow belly, pelagic marine",
            "diagnosticFeatureBn": "হাইড্রোফিস প্ল্যাটুরাস: হলুদপেটা সামুদ্রিক সাপ, চ্যাপ্টা বৈঠা লেজ, পেলাজিক",
            "resultType": "species",
            "speciesId": "sp-hydrophis-platurus",
            "rationaleEn": "Resolves to Yellow-bellied sea snake (Hydrophis platurus: Elapidae)",
            "rationaleBn": "হলুদপেটা সামুদ্রিক সাপ (হাইড্রোফিস প্ল্যাটুরাস: এলাপিডি পরিবার)"
          },
          {
            "lead": "Terrestrial or arboreal snakes; tail cylindrical and tapering, not modified into a flat paddle; broad ventral gastrosteges span the entire width of belly for terrestrial rectilinear crawling.",
            "leadBn": "স্থলচর বা বৃক্ষবাসী সাপ; লেজ গোল ও সরু, চ্যাপ্টা বৈঠা নয়; মাটির ওপর চলাচলের জন্য পেটে চওড়া ভেন্ট্রাল আঁশ বিদ্যমান।",
            "diagnosticFeature": "Terrestrial Serpentes: Boidae, Viperidae & Elapidae",
            "diagnosticFeatureBn": "স্থলচর সাপসমূহ: অজগর/বোয়া, ভাইপার এবং কোবরা/শঙ্খচূড়",
            "resultType": "next_step",
            "nextStepId": 11
          }
        ]
      },
      {
        "id": 11,
        "title": "Terrestrial Snakes: Non-Venomous Constrictor vs Venomous Solenoglyphs & Proteroglyphs",
        "titleBn": "স্থলচর সাপ: নির্বিষ বোয়া কনস্ট্রিকটর বনাম বিষধর ভাইপার ও কোবরা",
        "character": "Pelvic vestigial spurs without venom fangs vs specialized hollow venom injection fangs",
        "characterBn": "বিষদাঁতহীন পেছনের পায়ে নখরযুক্ত বোয়া বনাম বিষদাঁতযুক্ত বিষধর সাপ",
        "couplets": [
          {
            "lead": "Non-venomous primitive constrictor; retains vestigial pelvic girdle and external cloacal claw-like spurs on each side of vent; jaws armed with rows of solid recurved teeth without venom fangs; heavy muscular body killing mammalian prey via constriction; distinctive geometric saddle pattern.",
            "leadBn": "নির্বিষ আদিম শিকারী সাপ; ক্লোয়াকার দুই পাশে আদিম পায়ের অবশিষ্টাংশ হিসেবে নখর থাকে; বিষদাঁতহীন পেছনের দিকে বাঁকানো সাধারণ দাঁত; শিকারকে পেঁচিয়ে শ্বাসরোধ করে মারে; পিঠে জিনসদৃশ দাগ।",
            "diagnosticFeature": "Boa constrictor: Cloacal spurs, non-venomous constrictor, aglyph teeth, saddle blotches",
            "diagnosticFeatureBn": "বোয়া কনস্ট্রিকটর: ক্লোয়াকাল স্পার নখর, বিষহীন পেঁচিয়ে শিকারী সাপ",
            "resultType": "species",
            "speciesId": "sp-boa-constrictor",
            "rationaleEn": "Resolves to Boa constrictor (Boa constrictor: Boidae)",
            "rationaleBn": "বোয়া কনস্ট্রিকটর (বোয়া কনস্ট্রিকটর: বয়িডি পরিবার)"
          },
          {
            "lead": "Highly venomous advanced snakes; maxillae bear specialized enlarged hollow hypodermic venom injection fangs connected to temporal venom glands; solenoglyphous hinged fangs or proteroglyphous fixed front fangs.",
            "leadBn": "উন্নত বিষধর সাপ; উপরের চোয়ালে বিষগ্রন্থির সাথে যুক্ত ফাঁপা হাইপোডার্মিক সূঁচের মতো বিষদাঁত থাকে; লম্বা ভাঁজ হওয়া দাঁত বা সামনের স্থির বিষদাঁত।",
            "diagnosticFeature": "Venomous Caenophidians: Viperidae (rattlesnakes) & Elapidae (cobras)",
            "diagnosticFeatureBn": "বিষধর সাপ: ভাইপারিডি (র‍্যাটলস্নেক) এবং এলাপিডি (গোখরা ও রাজগোখরা)",
            "resultType": "next_step",
            "nextStepId": 12
          }
        ]
      },
      {
        "id": 12,
        "title": "Venomous Snakes: Solenoglyphous Pit Viper vs Proteroglyphous Elapids (Cobras)",
        "titleBn": "বিষধর সাপ: র‍্যাটলস্নেক (সোলেনোগ্লিফা) বনাম গোখরা ও শঙ্খচূড় (প্রোটেরোগ্লিফা)",
        "character": "Long folding fangs with facial heat pits and caudal rattle vs short erect fixed fangs with neck hood",
        "characterBn": "মুখের ভাঁজ হওয়া বিষদাঁত, তাপ সংবেদী পিট ও লেজের ঝুনঝুনি বনাম সামনের স্থির বিষদাঁত ও ফণা",
        "couplets": [
          {
            "lead": "Family Viperidae (Solenoglypha): Long, hollow, curved venom fangs housed on rotating maxillae that fold flat against the roof of mouth when closed; loreal sensory heat pit between eye and nostril detecting infrared radiation; tail terminates in a series of interlocking, hollow keratinous segments (rattle) producing a sharp warning buzzing sound.",
            "leadBn": "ভাইপারিডি পরিবার: অত্যন্ত দীর্ঘ বাঁকানো বিষদাঁত যা মুখ বন্ধ করলে তালুর সাথে ভাঁজ হয়ে থাকে; চোখ ও নাকের মাঝে তাপ সংবেদী পিট; লেজের মাথায় শুকনো খোলসের খাঁজযুক্ত ঝুনঝুনি (র‍্যাটল) যা তীব্র সতর্কবার্তা শব্দ করে।",
            "diagnosticFeature": "Crotalus atrox: Hinged solenoglyph fangs, loreal heat pits, keratin caudal rattle, hemotoxic venom",
            "diagnosticFeatureBn": "ক্রোট্যালাস অ্যাট্রোক্স: র‍্যাটলস্নেক, লম্বা ভাঁজ হওয়া বিষদাঁত, লেজের ঝুনঝুনি",
            "resultType": "species",
            "speciesId": "sp-crotalus-atrox",
            "rationaleEn": "Resolves to Western diamondback rattlesnake (Crotalus atrox: Viperidae)",
            "rationaleBn": "ওয়েস্টার্ন ডায়মন্ডব্যাক র‍্যাটলস্নেক (ক্রোট্যালাস অ্যাট্রোক্স: ভাইপারিডি পরিবার)"
          },
          {
            "lead": "Family Elapidae (Proteroglypha): Short, permanently erect, hollow venom fangs anchored immovably to anterior front of maxillae; cervical ribs elongated and spreadable laterally to form a wide, intimidating flattened neck hood when aroused; powerful neurotoxic venom.",
            "leadBn": "এলাপিডি পরিবার: চোয়ালের অগ্রভাগে শক্তভাবে আটকানো স্থির ও ছোট ফাঁপা বিষদাঁত; উত্তেজিত হলে ঘাড়ের পাঁজর দুপাশে ছড়িয়ে চওড়া ভীতিপ্রদর্শনকারী ফণা তোলে; তীব্র স্নায়ুবিষ।",
            "diagnosticFeature": "Family Elapidae: Fixed proteroglyph fangs, cervical neck hood, potent neurotoxins",
            "diagnosticFeatureBn": "এলাপিডি পরিবার: স্থির বিষদাঁত, ঘাড়ের ফণা, তীব্র স্নায়ুবিষ",
            "resultType": "next_step",
            "nextStepId": 13
          }
        ]
      },
      {
        "id": 13,
        "title": "Family Elapidae: Indian Spectacled Cobra vs King Cobra",
        "titleBn": "এলাপিডি পরিবার: ভারতীয় খয়া গোখরা বনাম রাজগোখরা (শঙ্খচূড়)",
        "character": "Broad hood with spectacle mark feeding on rodents vs colossal ophiophagous snake with occipital shields",
        "characterBn": "চশমার মতো দাগযুক্ত প্রশস্ত ফণা বনাম বিশ্বের দীর্ঘতম সাপ শিকারী রাজগোখরা ও অক্সিপিটাল আঁশ",
        "couplets": [
          {
            "lead": "Medium to large elapid up to 1.5-2 meters; capable of spreading a broad, elliptical hood decorated dorsally with a bold white and black binocellate spectacle mark (or monocled U-mark in kaouthia); feeds opportunistically on rodents, frogs, and toads around agricultural homesteads; iconic cobra of South Asia.",
            "leadBn": "মাঝারি বিষধর সাপ (১.৫-২ মিটার); চওড়া ডিম্বাকৃতি ফণা যার পেছনে সাদা-কালো স্পষ্ট চশমার মতো বা খড়ম সদৃশ দাগ থাকে; বসতবাড়ির আশেপাশে ইঁদুর ও ব্যাঙ শিকার করে; ভারতীয় খয়া গোখরা।",
            "diagnosticFeature": "Naja naja: Spectacled dorsal hood marking, binocellate, common South Asian venomous cobra",
            "diagnosticFeatureBn": "নাজা নাজা: ভারতীয় খয়া গোখরা / স্পেক্টাকল্ড কোবরা, চশমা দাগযুক্ত ফণা",
            "resultType": "species",
            "speciesId": "sp-naja-naja",
            "rationaleEn": "Resolves to Indian cobra / Spectacled cobra (Naja naja: Elapidae)",
            "rationaleBn": "ভারতীয় খয়া গোখরা (নাজা নাজা: এলাপিডি পরিবার)"
          },
          {
            "lead": "World longest venomous snake, growing up to 4-5.5 meters; narrow elongated hood with chevron banding; head covered with a distinctive extra pair of large occipital scales behind parietals; obligate specialist predator feeding almost exclusively on other snakes (ophiophagy); constructs nests of decaying leaves to incubate eggs.",
            "leadBn": "বিশ্বের দীর্ঘতম বিষধর সাপ (৪-৫.৫ মিটার); সংকীর্ণ দীর্ঘ ফণা; মাথার পেছনে একজোড়া অতিরিক্ত বড় অক্সিপিটাল আঁশ থাকে; অন্য সাপ শিকার করে খায় (অফিওফ্যাগাস); পাতার স্তূপ দিয়ে বাসা তৈরি করে ডিম তা দেয়।",
            "diagnosticFeature": "Ophiophagus hannah: Colossal size up to 5.5 m, large occipital scales, chevron bands, ophiophagous",
            "diagnosticFeatureBn": "অফিওফ্যাগাস হানা: শঙ্খচূড় / রাজগোখরা, অক্সিপিটাল আঁশ, সাপ শিকারী",
            "resultType": "species",
            "speciesId": "sp-ophiophagus-hannah",
            "rationaleEn": "Resolves to King cobra (Ophiophagus hannah: Elapidae)",
            "rationaleBn": "রাজগোখরা / শঙ্খচূড় (অফিওফ্যাগাস হানা: এলাপিডি পরিবার)"
          }
        ]
      }
    ]
  },
  {
    "id": "key-global-aves-orders",
    "title": "Representative Diagnostic Key to Major Avian Orders (Aves)",
    "titleBn": "পাখি (এভিস) শ্রেণির প্রধান বর্গ ও প্রামাণ্য প্রজাতির শনাক্তকরণ কুঞ্জি",
    "scope": "global",
    "targetTaxonId": "taxon-aves",
    "majorGroup": "aves",
    "taxonScope": "Class Aves (Ratites, Penguins, Raptors, Parrots, Kingfishers, Passerines)",
    "taxonScopeBn": "এভিস শ্রেণি (উটপাখি, পেঙ্গুইন, শিকারী পাখি, তোতা, মাছরাঙা, দোয়েল ও চড়ুই)",
    "description": "Authoritative dichotomous key distinguishing the primary avian orders and canonical species through palate architecture, sternal keel, wing modifications, foot digit arrangements (anisodactyl, zygodactyl, syndactyl, palmate), and bill adaptations.",
    "descriptionBn": "প্যালেট গঠন, স্টার্নাম কিল, ডানার রূপান্তর, পায়ের আঙুল বিন্যাস (অ্যানিসোড্যাকটাইল, জাইগোড্যাকটাইল ইত্যাদি) ও ঠোঁটের গঠনের ওপর ভিত্তি করে প্রধান পাখি বর্গ ও ১৩টি প্রামাণ্য প্রজাতি শনাক্তকরণ কুঞ্জি।",
    "educationalLevel": "intermediate",
    "keyType": "dichotomous",
    "sourceReferenceIds": [
      "ref-ioc-birds-2026",
      "ref-kardong-2018",
      "ref-hickman-2020"
    ],
    "verificationStatus": "verified",
    "steps": [
      {
        "id": 1,
        "title": "Palate and Flight Architecture: Palaeognathae vs Neognathae",
        "titleBn": "প্যালেট ও উড্ডয়ন কাঠামো: প্যালিওগ্নাথে (উড়তে অক্ষম) বনাম নিওগ্নাথে",
        "character": "Flat keelless sternum with palaeognathous palate vs keeled sternum with neognathous flexible palate",
        "characterBn": "কিলবিহীন সমতল স্টার্নাম ও আদিম তালু বনাম খাঁজযুক্ত স্টার্নাম ও নমনীয় আধুনিক তালু",
        "couplets": [
          {
            "lead": "Superorder Palaeognathae: Flightless cursorial ratite; sternum completely flat and raft-like without an elevated keel (carina) for pectoral flight muscle attachment; wings reduced and non-functional for flight; long powerful muscular legs adapted for high-speed running, with only two toes per foot (unique among living birds); world largest living bird reaching 2.5 meters and 120-150 kg.",
            "leadBn": "প্যালিওগ্নাথে অধিবর্গ: উড়তে অক্ষম দৌড়বাজ পাখি; স্টার্নামে ওড়ার পেশি লাগানোর উঁচু কিল অনুপস্থিত; ডানা ছোট; দ্রুত দৌড়ানোর জন্য শক্তিশালী দীর্ঘ পায়ে মাত্র ২টি আঙুল থাকে; বিশ্বের বৃহত্তম পাখি (২.৫ মি, ১২০-১৫০ কেজি)।",
            "diagnosticFeature": "Struthio camelus: Flat keelless sternum, flightless ratite, 2-toed cursorial feet, largest bird",
            "diagnosticFeatureBn": "স্ট্রুথিও ক্যামেলাস: উটপাখি, কিলহীন স্টার্নাম, ২ আঙুলের পা, বিশ্বের বৃহত্তম পাখি",
            "resultType": "species",
            "speciesId": "sp-struthio-camelus",
            "rationaleEn": "Resolves to Common ostrich (Struthio camelus: Struthioniformes)",
            "rationaleBn": "উটপাখি (স্ট্রুথিও ক্যামেলাস: স্ট্রুথিওনিফরমিস বর্গ)"
          },
          {
            "lead": "Superorder Neognathae: Sternum typically bears a prominent, elevated, blade-like ventral keel (carina) for the origin of enlarged supracoracoideus and pectoralis flight muscles (or keel used for underwater wing propulsion in penguins); flexible neognathous palate with movable vomer and pterygoids; feet with 3 or 4 functional digits.",
            "leadBn": "নিওগ্নাথে অধিবর্গ: স্টার্নামে ওড়ার শক্তিশালী পেশি লাগানোর জন্য উঁচু নৌকার মতো কিল (ক্যারিনা) বিদ্যমান; নমনীয় আধুনিক তালু; পায়ে ৩ বা ৪টি কার্যকর আঙুল।",
            "diagnosticFeature": "Superorder Neognathae: Keeled sternum (carina), flexible modern palate, flight or wing-swimming",
            "diagnosticFeatureBn": "নিওগ্নাথে অধিবর্গ: ক্যারিনাযুক্ত স্টার্নাম, আধুনিক নমনীয় তালু",
            "resultType": "next_step",
            "nextStepId": 2
          }
        ]
      },
      {
        "id": 2,
        "title": "Wing Modification: Underwater Flightless Flippers vs Aerial Flight",
        "titleBn": "ডানার রূপান্তর: পানির নিচে সাঁতারু ফ্লিপার বনাম আকাশে ওড়ার ডানা",
        "character": "Rigid paddle-like flipper wings with fused bones and scale-like feathers vs aerodynamic flight wings",
        "characterBn": "হাড় জোড়া লাগানো শক্ত সাঁতারু ফ্লিপার ডানা বনাম আকাশে ওড়ার পালকযুক্ত ডানা",
        "couplets": [
          {
            "lead": "Order Sphenisciformes (Penguins): Marine wing-propelled diver completely flightless in air; forelimbs modified into rigid, flattened, bladelike paddle flippers with flattened non-folding bones; plumage consists of dense, waterproof, scale-like microfeathers lacking apteria; thick subcutaneous blubber layer; heavy solid bones without pneumatic cavities; Antarctic ice breeder.",
            "leadBn": "স্ফেনিসিফরমিস বর্গ (পেঙ্গুইন): আকাশে উড়তে পারে না; ডানা দুটি পানির নিচে বৈঠার মতো কাজ করা শক্ত ফ্লিপারে রূপান্তরিত; জলরোধী ঘন ছোট পালক; হাড়ে বাতাসের গহ্বর নেই, নিরেট ও ভারী; অ্যান্টার্কটিকার বরফে প্রজনন করে।",
            "diagnosticFeature": "Aptenodytes forsteri: Rigid flipper wings, scale-like plumage, solid bones, Emperor penguin",
            "diagnosticFeatureBn": "অ্যাপ্টিনোডাইটস ফরস্টেরি: এম্পেরর পেঙ্গুইন, সাঁতারু ফ্লিপার ডানা, জলরোধী পালক",
            "resultType": "species",
            "speciesId": "sp-aptenodytes-forsteri",
            "rationaleEn": "Resolves to Emperor penguin (Aptenodytes forsteri: Sphenisciformes)",
            "rationaleBn": "এম্পেরর পেঙ্গুইন (অ্যাপ্টিনোডাইটস ফরস্টেরি: স্ফেনিসিফর্মিজ বর্গ)"
          },
          {
            "lead": "Aerial birds; wings aerodynamically shaped with differentiated flight feathers (remiges: primaries and secondaries); bones extensively hollowed and pneumatic, connected to pulmonary air sacs.",
            "leadBn": "আকাশে ওড়া পাখি; ওড়ার সুবিন্যস্ত পালকযুক্ত (রেমিজেস) অ্যারোডাইনামিক ডানা; হাড় ফাঁপা ও বাতাসের থলিযুক্ত (নিউম্যাটিক)।",
            "diagnosticFeature": "Flying Neognaths: Hollow pneumatic skeleton, aerodynamic flight remiges, air sacs",
            "diagnosticFeatureBn": "উড্ডয়নক্ষম পাখি: ফাঁপা কঙ্কাল, ওড়ার ডানা, বায়ুথলি",
            "resultType": "next_step",
            "nextStepId": 3
          }
        ]
      },
      {
        "id": 3,
        "title": "Raptorial Predators: Hooked Beak and Talons vs Other Adaptations",
        "titleBn": "শিকারী পাখি: বাঁকানো চঞ্চু ও তীক্ষ্ণ নখযুক্ত থাবা বনাম অন্যান্য রূপান্তর",
        "character": "Sharply hooked tearing raptorial beak and curved needle-like talons vs non-raptorial beaks",
        "characterBn": "মাংস ছেঁড়ার ধারালো বাঁকানো চঞ্চু ও তীক্ষ্ণ নখর বনাম অন্যান্য চঞ্চু",
        "couplets": [
          {
            "lead": "Raptorial carnivorous birds of prey; hooked tearing bill armed with sharp cutting edges; feet equipped with four powerful toes tipped with long, sharp, curved grasping talons adapted for seizing and killing live prey.",
            "leadBn": "শিকারী মাংসাশী পাখি; মাংস ছেঁড়ার জন্য নিচের দিকে বাঁকানো ধারালো চঞ্চু; শিকার আঁকড়ে ধরার জন্য পায়ে দীর্ঘ বাঁকানো সূঁচালো নখযুক্ত শক্তিশালী থাবা।",
            "diagnosticFeature": "Birds of Prey: Accipitriformes & Strigiformes",
            "diagnosticFeatureBn": "শিকারী পাখি: ঈগল, বাজ ও পেঁচা",
            "resultType": "next_step",
            "nextStepId": 4
          },
          {
            "lead": "Non-raptorial bills and feet; bill adapted for seed crushing, nectar feeding, spearing fish, filter-feeding, or insect gleaning; feet adapted for perching, climbing, scratching, or wading.",
            "leadBn": "মাংস শিকারী চঞ্চু ও থাবা নেই; বীজ ভাঙা, মাছ শিকার, ফিল্টার-ফিডিং বা ফল খাওয়ার চঞ্চু; ডালে বসা, আঁকড়ে ওঠা বা হাঁটার পা।",
            "diagnosticFeature": "Non-raptorial Avian Orders",
            "diagnosticFeatureBn": "অন্যান্য পাখি বর্গসমূহ",
            "resultType": "next_step",
            "nextStepId": 5
          }
        ]
      },
      {
        "id": 4,
        "title": "Raptors: Diurnal Accipitrid Eagle vs Nocturnal Strigid Owl",
        "titleBn": "শিকারী পাখি: দিবাচর ঈগল বনাম নিশাচর পেঁচা",
        "character": "Forward eyes with feather disc and reversible toe vs lateral-frontal eyes with unfeathered hooked cere",
        "characterBn": "চোখের চারপাশের মুখের পালক চাকতি ও উল্টানো আঙুল বনাম পালকহীন মাংসল সিয়ার ও ঈগলের দৃষ্টি",
        "couplets": [
          {
            "lead": "Order Accipitriformes: Diurnal apex raptor; eyes lateral-frontal with deep yellow irises and protective supraorbital brow ridge; bill with naked fleshy cere around nostrils; broad soaring wings; iconic North American fish eagle with dark brown body, gleaming pure white head and tail, and yellow hooked beak.",
            "leadBn": "অ্যাসিপিট্রিফরমিস বর্গ: দিবাচর শিকারী ঈগল; চোখের ওপর ভ্রূর মতো শক্ত শৈলশিরা; চঞ্চুর গোড়ায় মাংসল সিয়ার থাকে; বিশাল ওড়ার ডানা; গাঢ় বাদামি দেহ ও চকচকে সাদা মাথা ও লেজ।",
            "diagnosticFeature": "Haliaeetus leucocephalus: Pure white head/tail, dark brown body, yellow raptorial bill, bald eagle",
            "diagnosticFeatureBn": "হ্যালিয়ায়েটাস লিউকোসেফালাস: বাল্ড ঈগল, সাদা মাথা ও লেজ, হলুদ শিকারী চঞ্চু",
            "resultType": "species",
            "speciesId": "sp-haliaeetus-leucocephalus",
            "rationaleEn": "Resolves to Bald eagle (Haliaeetus leucocephalus: Accipitriformes)",
            "rationaleBn": "বাল্ড ঈগল (হ্যালিয়ায়েটাস লিউকোসেফালাস: অ্যাসিপিট্রিফরমিজ বর্গ)"
          },
          {
            "lead": "Order Strigiformes: Nocturnal apex raptor; eyes set completely flat facing forward inside a conspicuous concave circular facial disc of stiff acoustic feathers that channel faint sounds into asymmetric ears; outer toe completely reversible backwards (zygodactyl grasping); soft fringed primary remiges allowing completely silent flight; prominent erectile feather ear tufts.",
            "leadBn": "স্ট্রিজিফরমিস বর্গ: নিশাচর শিকারী পেঁচা; শব্দ শোনার জন্য মুখের চারপাশে গোল থালার মতো পালকের চাকতি; দুটি চোখ সরাসরি সামনের দিকে; নিঃশব্দে ওড়ার জন্য বিশেষায়িত পালক; মাথায় খাড়া শিং-সদৃশ পালক গুচ্ছ।",
            "diagnosticFeature": "Bubo bubo: Facial feather disc, erectile ear tufts, silent flight remiges, nocturnal owl",
            "diagnosticFeatureBn": "বুবো বুবো: ইউরেশিয়ান ঈগল আউল / হুতোম পেঁচা, মুখের চাকতি, কানের ঝুঁটি",
            "resultType": "species",
            "speciesId": "sp-bubo-bubo",
            "rationaleEn": "Resolves to Eurasian eagle-owl (Bubo bubo: Strigiformes)",
            "rationaleBn": "ইউরেশিয়ান ঈগল আউল (বুবো বুবো: স্ট্রিজিফরমিজ বর্গ)"
          }
        ]
      },
      {
        "id": 5,
        "title": "Foot Anatomy: Climbing Zygodactyl vs Syndactyl vs Anisodactyl Perching",
        "titleBn": "পায়ের আঙুল গঠন: গাছে চড়ার জাইগোড্যাকটাইল বনাম সিনড্যাকটাইল বনাম সাধারণ অ্যানিসোড্যাকটাইল",
        "character": "Two toes forward and two back with hooked bill vs fused middle toes vs three toes forward and one back",
        "characterBn": "দুটি আঙুল সামনে ও দুটি পেছনে বনাম জোড়া লাগা আঙুল বনাম তিনটি সামনে ও একটি পেছনে বসা পা",
        "couplets": [
          {
            "lead": "Order Psittaciformes (Parrots): Climbing foot strictly zygodactyl (digits 2 and 3 forward, digits 1 and 4 permanently directed backwards); heavy, short, deeply hooked bill with upper mandible hinged dynamically to frontal bone (prokinesis); muscular prehensile tongue; brilliant scarlet, yellow, and blue plumage with long graduated tail.",
            "leadBn": "সিটাসিফরমিস বর্গ (তোতা): গাছে ওঠার পা জাইগোড্যাকটাইল (২টি আঙুল সামনে ও ২টি পেছনে); শক্ত বাঁকানো চঞ্চু যার ওপরের চোয়াল খুলির সাথে নড়াচড়া করতে পারে; মাংসল জিহ্বা; উজ্জ্বল লাল, হলুদ ও নীল রঙের লম্বা লেজযুক্ত ম্যাকাও।",
            "diagnosticFeature": "Ara macao: Zygodactyl climbing feet, prokinetic hooked bill, scarlet/yellow/blue plumage",
            "diagnosticFeatureBn": "আরা ম্যাকাও: স্কার্লেট ম্যাকাও, জাইগোড্যাকটাইল পা, বাঁকানো তোতা চঞ্চু",
            "resultType": "species",
            "speciesId": "sp-ara-macao",
            "rationaleEn": "Resolves to Scarlet macaw (Ara macao: Psittaciformes)",
            "rationaleBn": "স্কার্লেট ম্যাকাও (আরা ম্যাকাও: সিটাসিফরমিজ বর্গ)"
          },
          {
            "lead": "Order Coraciiformes (Kingfishers): Syndactyl foot arrangement where the third and fourth (middle and outer) front toes are fused together along most of their length; large head with extraordinarily long, straight, heavy, sharp dagger-like bill adapted for plunge-diving after small aquatic fish; iridescent electric-cyan and rufous plumage.",
            "leadBn": "কোরাসিফরমিস বর্গ (মাছরাঙা): সিনড্যাকটাইল পা যাতে ৩য় ও ৪র্থ আঙুল গোড়া থেকে একসাথে জোড়া লাগানো থাকে; মাছ শিকারের জন্য ছোড়ার মতো দীর্ঘ সোজা ধারালো ভারী চঞ্চু; উজ্জ্বল নীল ও তামাটে পালক।",
            "diagnosticFeature": "Alcedo atthis: Syndactyl fused anterior toes, dagger-like spear bill, iridescent blue plunge-diver",
            "diagnosticFeatureBn": "আলসেডো আথিস: মাছরাঙা, সিনড্যাকটাইল জোড়া আঙুল, ধারালো চঞ্চু",
            "resultType": "species",
            "speciesId": "sp-alcedo-atthis",
            "rationaleEn": "Resolves to Common kingfisher (Alcedo atthis: Coraciiformes)",
            "rationaleBn": "সাধারণ মাছরাঙা (আলসেডো আথিস: কোরাসিফরমিজ বর্গ)"
          },
          {
            "lead": "Toes arranged differently: Anisodactyl (three digits forward, one opposable digit backwards), palmate swimming webbed toes, or specialized ground-scratching feet.",
            "leadBn": "আঙুল ভিন্নভাবে বিন্যস্ত: অ্যানিসোড্যাকটাইল (তিনটি সামনে, একটি পেছনে), লিপ্তপদী সাঁতারের পা বা মাটি আঁচড়ানোর শক্ত পা।",
            "diagnosticFeature": "Other Avian Orders: Columbiformes, Galliformes, Phoenicopteriformes, Passeriformes",
            "diagnosticFeatureBn": "অন্যান্য পাখি বর্গ: কবুতর, বনমোরগ/ময়ূর, ফ্লেমিঙ্গো ও দোয়েল/চড়ুই",
            "resultType": "next_step",
            "nextStepId": 6
          }
        ]
      },
      {
        "id": 6,
        "title": "Wading Filter-Feeders vs Heavy Scratching Fowl vs Perching Landbirds",
        "titleBn": "লম্বা পাযুক্ত ফ্লেমিঙ্গো বনাম মাটি আঁচড়ানো মুরগি/ময়ূর বনাম কবুতর ও গায়ক পাখি",
        "character": "Extreme stilt legs with decurved filter bill vs ground fowl with spurs vs columbids and passerines",
        "characterBn": "উঁচু বকের মতো পা ও ফিল্টার চঞ্চু বনাম পায়ে নখযুক্ত বনমোরগ বনাম কবুতর ও গায়ক পাখি",
        "couplets": [
          {
            "lead": "Order Phoenicopteriformes: Extraordinarily elongated, stilt-like pink legs and slender serpentine neck; large downward-bent (decurved) specialized bill held upside-down in shallow saline lagoons; bill lined with fine microscopic comb-like filtering lamellae to extract brine shrimps and cyanobacteria; pale pinkish-white plumage with crimson wing coverts.",
            "leadBn": "ফনিকোপ্টেরিফরমিস বর্গ (ফ্লেমিঙ্গো): অত্যন্ত দীর্ঘ বকের মতো গোলাপি পা ও সাপের মতো লম্বা ঘাড়; মাথা নিচু করে পানি ছাঁকার জন্য নিচে বাঁকানো বিশেষায়িত চঞ্চু যাতে চিরুনির মতো ল্যামেলি থাকে; গোলাপি-সাদা পালক।",
            "diagnosticFeature": "Phoenicopterus roseus: Stilt-like legs, decurved lamellate filter bill, pink plumage",
            "diagnosticFeatureBn": "ফনিকোপ্টেরাস রোজিয়াস: গ্রেটার ফ্লেমিঙ্গো / রাজহাঁস, ছাঁকন চঞ্চু, লম্বা পা",
            "resultType": "species",
            "speciesId": "sp-phoenicopterus-roseus",
            "rationaleEn": "Resolves to Greater flamingo (Phoenicopterus roseus: Phoenicopteridae)",
            "rationaleBn": "গ্রেটার ফ্লেমিঙ্গো (ফনিকোপ্টেরাস রোজিয়াস: ফনিকোপ্টেরিডি পরিবার)"
          },
          {
            "lead": "Order Galliformes: Heavy-bodied, terrestrial ground-dwelling birds; short rounded wings capable only of explosive short-distance burst flights; robust scratching feet with blunt curved claws; males typically armed with sharp calcified defensive spurs on back of tarsometatarsus; prominent fleshy facial wattles and combs; intense sexual dimorphism.",
            "leadBn": "গ্যালিফরমিস বর্গ (বনমোরগ ও ময়ূর): ভারী গোলগাল মাটিবাসী পাখি; স্বল্প দূরত্বে দ্রুত ওড়ার ছোট ডানা; মাটি আঁচড়ে খাওয়ার শক্ত নখযুক্ত পা; পুরুষের পায়ে শক্ত কাঁটা (স্পার) থাকে; মাথায় মাংসল ঝুঁটি; পুরুষ অত্যন্ত রঙিন।",
            "diagnosticFeature": "Order Galliformes: Ground scratchers, tarsal spurs, fleshy combs/wattles, Phasianidae",
            "diagnosticFeatureBn": "গ্যালিফরমিস বর্গ: মাটি আঁচড়ানো বনমোরগ ও ময়ূর, পায়ের স্পার",
            "resultType": "next_step",
            "nextStepId": 7
          },
          {
            "lead": "Order Columbiformes & Passeriformes: Bill unspecialized for filter-feeding or heavy tearing; columbids with soft fleshy cere over nostrils, or passerines with fine perching feet and musical syrinx songs.",
            "leadBn": "কলম্বিফরমিস (কবুতর) এবং প্যাসেরিফরমিস (গায়ক পাখি): চঞ্চুর গোড়ায় নরম মাংসল সিয়ারযুক্ত কবুতর, অথবা নিখুঁত ডালে বসার পা ও মিষ্টি গানের সুরযুক্ত গায়ক পাখি।",
            "diagnosticFeature": "Pigeons (Columbiformes) & Perching Songbirds (Passeriformes)",
            "diagnosticFeatureBn": "কবুতর এবং সাধারণ গায়ক ও বৃক্ষবাসী পাখি",
            "resultType": "next_step",
            "nextStepId": 8
          }
        ]
      },
      {
        "id": 7,
        "title": "Order Galliformes: Red Junglefowl vs Indian Peafowl",
        "titleBn": "গ্যালিফরমিস বর্গ: লাল বনমোরগ বনাম ভারতীয় ময়ূর",
        "character": "Fleshy red serrated crown comb and ancestor of chicken vs colossal iridescent train of ocelli feathers",
        "characterBn": "মাথায় লাল করাতের মতো ঝুঁটি ও গৃহপালিত মুরগির পূর্বপুরুষ বনাম চোখের মতো আঁকা বিশাল পেখম",
        "couplets": [
          {
            "lead": "Male with prominent fleshy, erect, serrated bright red crown comb and dangling dual throat wattles; white ear patches; long arched sickle-shaped tail feathers; wild ancestor of all domesticated chickens; native to South and Southeast Asian bamboo forests.",
            "leadBn": "মাথায় খাড়া উজ্জ্বল লাল রঙের খাঁজকাটা মাংসল ঝুঁটি এবং গলায় ঝুলন্ত লাল লতিকা; কানে সাদা ছোপ; কাস্তের মতো বাঁকানো পুচ্ছ পালক; গৃহপালিত মুরগির বুনো পূর্বপুরুষ।",
            "diagnosticFeature": "Gallus gallus: Serrated red crown comb, dual throat wattles, ancestor of domestic chicken",
            "diagnosticFeatureBn": "গ্যালাস গ্যালাস: লাল বনমোরগ, মাংসল লাল ঝুঁটি, মুরগির পূর্বপুরুষ",
            "resultType": "species",
            "speciesId": "sp-gallus-gallus",
            "rationaleEn": "Resolves to Red junglefowl (Gallus gallus: Phasianidae)",
            "rationaleBn": "লাল বনমোরগ (গ্যালাস গ্যালাস: ফাসিয়ানিডি পরিবার)"
          },
          {
            "lead": "Colossal, breathtaking plumage; adult male bears a magnificent elongated train up to 1.5-2 meters formed of prolonged upper tail coverts, each adorned with a spectacular iridescent blue-green, bronze, and gold \"eye-spot\" (ocellus); head crowned by a fan-shaped crest of spatula-tipped feathers; cobalt-blue breast.",
            "leadBn": "বিশ্ববিখ্যাত রূপসী পাখি; পুরুষের পিঠের পেছনে ১.৫-২ মিটার দীর্ঘ পেখম থাকে যা ময়ূরের চোখের মতো উজ্জ্বল নীল-সবুজ ও সোনালী গোল বৃত্তে (অসেলি) সাজানো; মাথায় পাখার মতো ঝুঁটি।",
            "diagnosticFeature": "Pavo cristatus: Magnificent iridescent ocellated train up to 2 m, spatula crest, cobalt blue breast",
            "diagnosticFeatureBn": "পাভো ক্রিস্টাটাস: ভারতীয় ময়ূর, অসেলি আঁকা বিশাল পেখম, নীল বক্ষ",
            "resultType": "species",
            "speciesId": "sp-pavo-cristatus",
            "rationaleEn": "Resolves to Indian peafowl / Peacock (Pavo cristatus: Phasianidae)",
            "rationaleBn": "ভারতীয় ময়ূর (পাভো ক্রিস্টাটাস: ফাসিয়ানিডি পরিবার)"
          }
        ]
      },
      {
        "id": 8,
        "title": "Columbiformes vs Passeriformes (Perching Songbirds)",
        "titleBn": "কলম্বিফরমিস (কবুতর) বনাম প্যাসেরিফরমিস (গায়ক পাখি)",
        "character": "Fleshy operculum cere over nostrils producing crop milk vs perching feet with 4 flexible unwebbed digits",
        "characterBn": "নাকের গোড়ায় ফোলা নরম সিয়ার ও ক্রপ মিল্ক উৎপাদনকারী কবুতর বনাম নিখুঁত ডালে বসার পা ও গান গাওয়া পাখি",
        "couplets": [
          {
            "lead": "Order Columbiformes: Plump, stout-bodied bird with small rounded head; bill short and slender with a distinct soft, fleshy, swollen tumid base (cere / operculum) enclosing the slit-like nostrils; crops of both sexes produce rich nutritious \"crop milk\" to feed altricial squabs; grey plumage with iridescent green/purple neck sheen and two dark wing bars.",
            "leadBn": "কলম্বিফরমিস বর্গ (কবুতর): গোলগাল শরীর ও ছোট মাথা; চঞ্চুর গোড়ায় নাকের ওপর নরম ফোলা মাংসল সিয়ার থাকে; ছানাদের খাওয়ানোর জন্য খাদ্যনালীর থলি থেকে ক্রপ মিল্ক ক্ষরণ করে; গলায় চকচকে বেগুনি-সবুজ আভা ও ডানায় দুটি কালো দাগ।",
            "diagnosticFeature": "Columba livia: Swollen soft cere at bill base, produces crop milk, rock pigeon",
            "diagnosticFeatureBn": "কলম্বা লিভিয়া: নাকের গোড়ায় নরম সিয়ার, ক্রপ মিল্ক, জালালি কবুতর",
            "resultType": "species",
            "speciesId": "sp-columba-livia",
            "rationaleEn": "Resolves to Rock pigeon (Columba livia: Columbidae)",
            "rationaleBn": "জালালি কবুতর / সাধারণ পায়রা (কলম্বা লিভিয়া: কলম্বিডি পরিবার)"
          },
          {
            "lead": "Order Passeriformes (Perching Birds): Comprises over half of all living bird species; foot strictly anisodactyl with three unwebbed toes directed forward and a single long, flexible hallux digit directed backwards, all on the same plane, automatically clamping around branches; syrinx with complex intrinsic vocal muscles capable of elaborate song.",
            "leadBn": "প্যাসেরিফরমিস বর্গ (ডালে বসা গায়ক পাখি): পৃথিবীর অর্ধেকের বেশি পাখি এই বর্গের; পায়ের ৩টি আঙুল সামনে ও ১টি শক্তিশালী আঙুল পেছনের দিকে থাকে যা গাছের ডাল শক্তভাবে আঁকড়ে ধরতে পারে; মিষ্টি গানের জন্য উন্নত সিরিঙ্কস।",
            "diagnosticFeature": "Order Passeriformes: True anisodactyl perching foot, advanced vocal syrinx, songbirds",
            "diagnosticFeatureBn": "প্যাসেরিফরমিস বর্গ: ডালে বসার খাঁটি অ্যানিসোড্যাকটাইল পা, মিষ্টি সুরের সিরিঙ্কস",
            "resultType": "next_step",
            "nextStepId": 9
          }
        ]
      },
      {
        "id": 9,
        "title": "Order Passeriformes: Magpie-Robin vs House Sparrow vs House Crow",
        "titleBn": "প্যাসেরিফরমিস বর্গ: জাতীয় পাখি দোয়েল বনাম গৃহ চড়ুই বনাম পাতি কাক",
        "character": "Cocked tail with piebald black-white plumage vs conical seed bill vs heavy corvid bill with grey neck collar",
        "characterBn": "খাড়া লেজ ও সাদা-কালো দোয়েল বনাম শঙ্কু চঞ্চুর চড়ুই বনাম ধূসর ঘাড়ের চালাক পাতি কাক",
        "couplets": [
          {
            "lead": "Medium songbird (19 cm) with bold, contrasting black and white plumage; long graduated tail held characteristically cocked upright; glossy blue-black upperparts in males (slate-grey in females) with conspicuous white wing bars and white outer tail feathers; national bird of Bangladesh (Doyel), renowned for rich melodious dawn whistling song.",
            "leadBn": "উজ্জ্বল সাদা ও কালো রঙের বৈসাদৃশ্যময় পালক; লম্বা লেজটি সর্বদা খাড়া বা উঁচু করে রাখে; ডানায় চওড়া সাদা পট্টি; মিষ্টি সুরেলা শিস দিয়ে গান গাওয়া বাংলাদেশের জাতীয় পাখি (দোয়েল)।",
            "diagnosticFeature": "Copsychus saularis: Piebald black and white, cocked upright tail, territorial song, Bangladesh national bird",
            "diagnosticFeatureBn": "কপসাইকাস সলারিস: সাদা-কালো দোয়েল, খাড়া লেজ, সুরেলা গায়ক, জাতীয় পাখি",
            "resultType": "species",
            "speciesId": "sp-copsychus-saularis",
            "rationaleEn": "Resolves to Oriental magpie-robin (Copsychus saularis: Muscicapidae)",
            "rationaleBn": "দোয়েল / ওরিয়েন্টাল ম্যাগপাই-রবিন (কপসাইকাস সলারিস: মাসিকাফিডি পরিবার)"
          },
          {
            "lead": "Small, robust anthropophilic finch-like bird (14-16 cm); bill stout, short, and conical specialized for crushing hard grains and weed seeds; male with bold grey crown, chestnut neck, and black throat bib; ubiquitous commensal bird nesting inside human dwellings and eaves across the globe.",
            "leadBn": "ছোট গোলগাল মিষ্টি পাখি (১৪-১৬ সেমি); শক্ত দানা শস্য ও বীজ ভাঙার জন্য ছোট স্থূল শঙ্কু আকৃতির চঞ্চু; পুরুষের বুকে কালো দাগ ও মাথায় ধূসর টুপি; মানুষের ঘরের খাঁজে বাসা বাঁধা পরিচিত চড়ুই পাখি।",
            "diagnosticFeature": "Passer domesticus: Conical seed-cracking bill, black throat bib on male, commensal house sparrow",
            "diagnosticFeatureBn": "প্যাসার ডোমেস্টিকাস: শঙ্কু আকৃতির বীজভাঙ্গা চঞ্চু, চড়ুই পাখি",
            "resultType": "species",
            "speciesId": "sp-passer-domesticus",
            "rationaleEn": "Resolves to House sparrow (Passer domesticus: Passeridae)",
            "rationaleBn": "পাতি চড়ুই (প্যাসার ডোমেস্টিকাস: প্যাসারিডি পরিবার)"
          },
          {
            "lead": "Large, highly intelligent, aggressive, opportunistic omnivorous corvid (40-42 cm); heavy, stout, slightly decurved black bill; plumage marked by a distinctive slender grey collar around nape and breast contrasting with glossy black forehead, wings, and tail; ubiquitous urban scavenger throughout South Asia.",
            "leadBn": "বড় ও অত্যন্ত বুদ্ধিমান সুযোগসন্ধানী সর্বভুক পাখি (৪০-৪২ সেমি); ভারী শক্ত কালো চঞ্চু; পিঠ ও ডানার কালো রঙের সাথে গলায় ও ঘাড়ে হালকা ধূসর রঙের কলার বা বন্ধনী থাকে; দক্ষিণ এশিয়ার সাধারণ পাতি কাক।",
            "diagnosticFeature": "Corvus splendens: Bicolored corvid with grey neck and breast collar, heavy bill, urban scavenger",
            "diagnosticFeatureBn": "করভাস স্প্লেনডেনস: ধূসর ঘাড়ের পাতি কাক, বুদ্ধিমান সর্বভুক পাখি",
            "resultType": "species",
            "speciesId": "sp-corvus-splendens",
            "rationaleEn": "Resolves to House crow (Corvus splendens: Corvidae)",
            "rationaleBn": "পাতি কাক (করভাস স্প্লেনডেনস: কর্ভিডি পরিবার)"
          }
        ]
      }
    ]
  },
  {
    "id": "key-global-mammalia-lineages",
    "title": "Representative Diagnostic Key to Major Mammalian Lineages & Orders",
    "titleBn": "স্তন্যপায়ী (ম্যামালিয়া) শ্রেণির প্রধান বংশধারা, বর্গ ও প্রজাতির শনাক্তকরণ কুঞ্জি",
    "scope": "global",
    "targetTaxonId": "taxon-mammalia",
    "majorGroup": "mammalia",
    "taxonScope": "Class Mammalia (Monotremes, Marsupials, Placental Mammals)",
    "taxonScopeBn": "ম্যামালিয়া শ্রেণি (মনোট্রিম, মারসুপিয়াল এবং অমরাযুক্ত প্লাসেন্টাল স্তন্যপায়ী)",
    "description": "Authoritative dichotomous key distinguishing the three primary mammalian subclasses and resolving all 22 canonical species in the repository based on reproductive mode, dentition, integumentary derivatives, cranial modifications, and limb specializations.",
    "descriptionBn": "প্রজনন পদ্ধতি, দাঁতের গঠন, পশম/ত্বকীয় উপাদান, খুলির গঠন এবং পদের বিশেষায়নের ওপর ভিত্তি করে স্তন্যপায়ী শ্রেণির ৩টি প্রধান উপশ্রেণি ও ২২টি প্রামাণ্য প্রজাতি শনাক্তকরণ কুঞ্জি।",
    "educationalLevel": "intermediate",
    "keyType": "dichotomous",
    "sourceReferenceIds": [
      "ref-mammal-diversity-2026",
      "ref-kardong-2018",
      "ref-hickman-2020"
    ],
    "verificationStatus": "verified",
    "steps": [
      {
        "id": 1,
        "title": "Reproductive Mode: Monotremata vs Theria",
        "titleBn": "প্রজনন পদ্ধতি: মনোট্রিমাটা (ডিমপাড়া) বনাম থেরিয়া (বাচ্চাপ্রসবকারী)",
        "character": "Oviparous egg-laying with cloaca vs viviparous giving birth to live young",
        "characterBn": "ক্লোয়াকাসহ ডিম পাড়া বনাম জরায়ুযুক্ত প্রত্যক্ষ বাচ্চার জন্মদান",
        "couplets": [
          {
            "lead": "Subclass Prototheria (Order Monotremata): Oviparous (egg-laying) mammals; single shared exit chamber (cloaca) for digestive, urinary, and reproductive tracts; mammary glands lack nipples/teats (milk secretes directly onto abdominal skin folds and is lapped by young); flexible leathery duck-like bill with electrosensory receptors; adult males bear a calcified hollow venom spur on medial ankle; endemic to eastern Australia and Tasmania.",
            "leadBn": "মনোট্রিমাটা বর্গ: ডিমপাড়া আদিম স্তন্যপায়ী; পরিপাক ও প্রজননের জন্য একক ক্লোয়াকা ছিদ্র; স্তনবৃন্ত নেই (পেটের চামড়া থেকে দুধ চুষে খায়); হাঁসের মতো চ্যাপ্টা বৈদ্যুতিক সংবেদী ঠোঁট; পুরুষের পেছনের পায়ে বিষাক্ত কাঁটা থাকে।",
            "diagnosticFeature": "Ornithorhynchus anatinus: Egg-laying monotreme, electroreceptive duck bill, ankle venom spur, cloaca",
            "diagnosticFeatureBn": "অর্নিথোরিঙ্কাস অ্যানাটিনাস: প্লাটিপাস, ডিমপাড়া স্তন্যপায়ী, হাঁস ঠোঁট, বিষকাঁটা",
            "resultType": "species",
            "speciesId": "sp-ornithorhynchus-anatinus",
            "rationaleEn": "Resolves to Platypus (Ornithorhynchus anatinus: Monotremata)",
            "rationaleBn": "প্লাটিপাস (অর্নিথোরিঙ্কাস অ্যানাটিনাস: মনোট্রিমাটা বর্গ)"
          },
          {
            "lead": "Subclass Theria: Viviparous mammals giving birth to live young; cloaca absent (separate anal and urogenital openings); functional nipples or teats present; mammary glands with ducts; specialized multi-rooted heterodont dentition.",
            "leadBn": "থেরিয়া উপশ্রেণি: প্রত্যক্ষ জরায়ুজ সন্তান প্রসবকারী স্তন্যপায়ী; ক্লোয়াকা অনুপস্থিত (পায়ু ও মূত্র-জনন ছিদ্র পৃথক); সুগঠিত স্তনবৃন্ত উপস্থিত; বিষমদাঁত।",
            "diagnosticFeature": "Subclass Theria: Viviparous, nipples present, separate urogenital/anal openings",
            "diagnosticFeatureBn": "থেরিয়া উপশ্রেণি: বাচ্চাপ্রসবকারী, স্তনবৃন্তযুক্ত",
            "resultType": "next_step",
            "nextStepId": 2
          }
        ]
      },
      {
        "id": 2,
        "title": "Therian Development: Marsupialia vs Placentalia",
        "titleBn": "থেরিয়া বিকাশ: মারসুপিয়ালিয়া (থলিযুক্ত) বনাম প্লাসেন্টালিয়া (অমরাযুক্ত)",
        "character": "Altricial birth with pouch (marsupium) and epipubic bones vs prolonged chorioallantoic gestation",
        "characterBn": "অপূর্ণাঙ্গ শিশুর জন্ম ও মারসুপিয়াল থলি বনাম দীর্ঘ অমরাযুক্ত গর্ভধারণ",
        "couplets": [
          {
            "lead": "Infraclass Metatheria (Marsupials): Short gestation period; young born in an extremely tiny, altricial larval-like state and crawl into maternal abdominal pouch (marsupium) to nurse on nipples; pelvic girdle possesses forward-projecting epipubic bones; angular process of dentary inflected medially; brain without corpus callosum.",
            "leadBn": "মারসুপিয়ালিয়া (মেটাথেরিয়া): স্বল্প গর্ভকালীন সময়; বাচ্চা অতি ক্ষুদ্র অবস্থায় জন্মে মায়ের পেটের থলিতে (মারসুপিয়াম) ঢুকে স্তনবৃন্ত কামড়ে বড় হয়; শ্রোণীচক্রে এপিটিউবিক অস্থি থাকে।",
            "diagnosticFeature": "Infraclass Metatheria: Marsupial pouch, epipubic bones, altricial neonates",
            "diagnosticFeatureBn": "মেটাথেরিয়া / মারসুপিয়াল: পেটের থলি, এপিটিউবিক অস্থি, অস্ট্রেলীয় স্তন্যপায়ী",
            "resultType": "next_step",
            "nextStepId": 3
          },
          {
            "lead": "Infraclass Eutheria (Placental Mammals): Prolonged intrauterine gestation sustained by an efficient chorioallantoic placenta; young born at an advanced precocial or altricial stage; pelvic girdle lacks epipubic bones; brain cerebral hemispheres interconnected by a thick transverse band of nerve fibers (corpus callosum).",
            "leadBn": "প্লাসেন্টালিয়া (ইউথেরিয়া): জরায়ুর ভেতর উন্নত অমরা (প্লাসেন্টা) দ্বারা দীর্ঘ সময় ভ্রূণ পুষ্ট হয়ে বিকশিত বাচ্চার জন্ম; শ্রোণীচক্রে এপিটিউবিক অস্থি নেই; মস্তিষ্কে কর্পাস ক্যালোসাম থাকে।",
            "diagnosticFeature": "Infraclass Eutheria: Chorioallantoic placenta, prolonged gestation, corpus callosum, no epipubic bones",
            "diagnosticFeatureBn": "ইউথেরিয়া / প্লাসেন্টাল: উন্নত অমরা, জরায়ুতে পূর্ণ বিকাশ, কর্পাস ক্যালোসাম",
            "resultType": "next_step",
            "nextStepId": 4
          }
        ]
      },
      {
        "id": 3,
        "title": "Infraclass Metatheria: Saltatorial Kangaroo vs Arboreal Koala",
        "titleBn": "মারসুপিয়াল: লাফানো ক্যাঙ্গারু বনাম বৃক্ষবাসী কোয়ালা",
        "character": "Bipedal saltatorial hopping with large muscular tail vs arboreal grasping folivore with vestigial tail",
        "characterBn": "পেশিবহুল লেজযুক্ত দুই পায়ে লাফানো ক্যাঙ্গারু বনাম লেজহীন গাছে আঁকড়ে থাকা ইউক্যালিপটাসভোজী কোয়ালা",
        "couplets": [
          {
            "lead": "Bipedal saltatorial terrestrial marsupial; extraordinarily enlarged, elongated fourth toe on hindfoot; forelimbs short; massive, thick, muscular tail used as a third leg (tripod) when resting and a dynamic counterweight when bounding at high speeds up to 50-60 km/h; largest living marsupial.",
            "leadBn": "দুই পায়ে লাফিয়ে চলা স্থলচর মারসুপিয়াল; পেছনের পায়ে দীর্ঘ ৪র্থ আঙুল; ভারী পেশিবহুল লেজ যা বিশ্রামের সময় তৃতীয় পা হিসেবে এবং লাফানোর সময় ভারসাম্য রক্ষা করে; বিশ্বের বৃহত্তম মারসুপিয়াল।",
            "diagnosticFeature": "Osphranter rufus: Bipedal saltatorial bounding, huge muscular counterbalance tail, macropodid",
            "diagnosticFeatureBn": "অসফ্র্যান্টার রুফাস: লাল ক্যাঙ্গারু, পেশল লেজ, লাফিয়ে চলা পা",
            "resultType": "species",
            "speciesId": "sp-osphranter-rufus",
            "rationaleEn": "Resolves to Red kangaroo (Osphranter rufus: Diprotodontia)",
            "rationaleBn": "রেড ক্যাঙ্গারু / লাল ক্যাঙ্গারু (অসফ্র্যান্টার রুফাস: ডাইপ্রোটোডনশিয়া বর্গ)"
          },
          {
            "lead": "Arboreal folivorous marsupial adapted for climbing smooth eucalyptus trunks; tail completely vestigial and external stump absent; forepaws with two opposable digits (schizodactyly: digits 1 and 2 oppose 3, 4, 5); thick ash-grey woolly fur, large leathery spoon-shaped black nose, and rounded fluffy ears; diet restricted to toxic fibrous eucalyptus leaves.",
            "leadBn": "গাছের ডাল আঁকড়ে থাকা লেজহীন মারসুপিয়াল; গাছে ওঠার জন্য সামনের থাবায় দুটি বিপরীতমুখী আঙুল থাকে; ঘন ধূসর পশম ও চামড়ার মতো কালো নাক; প্রধানত ইউক্যালিপটাস পাতা খায়।",
            "diagnosticFeature": "Phascolarctos cinereus: Arboreal, vestigial tail, schizodactylous grasping paws, eucalyptus folivore",
            "diagnosticFeatureBn": "ফ্যাসকোলার্কটস সিনারিয়াস: কোয়ালা, লেজহীন বৃক্ষবাসী, ইউক্যালিপটাসভোজী",
            "resultType": "species",
            "speciesId": "sp-phascolarctos-cinereus",
            "rationaleEn": "Resolves to Koala (Phascolarctos cinereus: Diprotodontia)",
            "rationaleBn": "কোয়ালা (ফ্যাসকোলার্কটস সিনারিয়াস: ডাইপ্রোটোডনশিয়া বর্গ)"
          }
        ]
      },
      {
        "id": 4,
        "title": "Placental Mammals: Powered Flight vs Fully Aquatic vs Terrestrial Orders",
        "titleBn": "প্লাসেন্টাল স্তন্যপায়ী: আকাশে ওড়া বাদুড় বনাম সম্পূর্ণ জলজ তিমি/ডুগং বনাম স্থলচর",
        "character": "Forelimbs modified into membranous flight wings vs torpedo flippers with tail flukes vs terrestrial limbs",
        "characterBn": "উড়ার ডানায় রূপান্তরিত হাত বনাম লেজের ফ্লুকযুক্ত জলজ দেহ বনাম হাঁটার পা",
        "couplets": [
          {
            "lead": "Order Chiroptera (Bats): True powered flight; forelimbs modified into broad aerodynamic wings formed of an extensive elastic double-layered skin membrane (patagium) stretched over enormously elongated metacarpals and phalanges of digits 2 through 5; nocturnal or crepuscular fruit/nectar feeders with large eyes and fox-like muzzles (Megachiroptera).",
            "leadBn": "কাইরোপ্টেরা বর্গ (বাদুড়): আকাশে উড়তে সক্ষম একমাত্র স্তন্যপায়ী; হাতের ২য় থেকে ৫ম আঙুলের মাঝে চামড়ার পাতলা ডানা (প্যাটাগিয়াম) প্রসারিত থাকে; শিয়ালসদৃশ মুখ ও বড় চোখবিশিষ্ট ফলভোজী বাদুড়।",
            "diagnosticFeature": "Order Chiroptera: True powered flight, wing patagium over elongated digits",
            "diagnosticFeatureBn": "কাইরোপ্টেরা বর্গ: আকাশে ওড়ার ডানাবিশিষ্ট বাদুড়, প্যাটাগিয়াম পর্দা",
            "resultType": "next_step",
            "nextStepId": 5
          },
          {
            "lead": "Fully aquatic marine/freshwater mammals; fusiform streamlined torpedo body completely lacking external hindlimbs; forelimbs transformed into paddle flippers; tail terminates in a broad, horizontal fibrous swimming fluke; nostrils positioned dorsally as blowholes or valve-closed snout.",
            "leadBn": "সম্পূর্ণ জলজ স্তন্যপায়ী; পেছনের পা সম্পূর্ণ বিলুপ্ত; সামনের পা সাঁতারু ফ্লিপারে রূপান্তরিত; লেজের মাথায় আনুভূমিক তিমির পাখা (ফ্লুক); পিঠের ওপর শ্বাসছিদ্র।",
            "diagnosticFeature": "Fully Aquatic Mammals: Cetacea (Whales & Dolphins) & Sirenia (Dugong)",
            "diagnosticFeatureBn": "সম্পূর্ণ জলজ স্তন্যপায়ী: সিটাসিয়া (তিমি ও শুশুক) এবং সাইরেনিয়া (ডুগং)",
            "resultType": "next_step",
            "nextStepId": 6
          },
          {
            "lead": "Terrestrial or semiaquatic mammals; four well-developed ambulatory walking or running limbs; hindlimbs functional; body covered in protective hair/fur coat.",
            "leadBn": "স্থলচর বা উভচর স্তন্যপায়ী; হাঁটা বা দৌড়ানোর জন্য ৪টি সুগঠিত পা; পেছনের পা কার্যকর; দেহে পশম বা লোম উপস্থিত।",
            "diagnosticFeature": "Terrestrial / Semiaquatic Placental Orders",
            "diagnosticFeatureBn": "অন্যান্য স্থলচর স্তন্যপায়ী বর্গসমূহ",
            "resultType": "next_step",
            "nextStepId": 9
          }
        ]
      },
      {
        "id": 5,
        "title": "Order Chiroptera: Indian Flying Fox vs Large Flying Fox",
        "titleBn": "কাইরোপ্টেরা বর্গ: ভারতীয় বাদুড় বনাম দৈত্যাকার উড়ন্ত শিয়াল",
        "character": "Wingspan and forearm dimensions with golden-yellow mantle collar vs colossal dark wingspan",
        "characterBn": "হলুদ-সোনালী কাঁধের কলার ও ডানা বনাম বিশ্বের বৃহত্তম বাদুড় ও দেড় মিটারের বেশি ডানা",
        "couplets": [
          {
            "lead": "Large frugivorous megabat with wingspan up to 1.2-1.4 meters; forearm length 15-18 cm; prominent pale yellowish-cream or golden-brown mantle collar encircling shoulders and upper back contrasting with dark brown body; roosts communally in massive noisy tree camps across South Asia; iconic flying fox of Bangladesh.",
            "leadBn": "১.২-১.৪ মিটার ডানাযুক্ত ফলভোজী বড় বাদুড়; কাঁধ ও পিঠের ওপর উজ্জ্বল সোনালী-হলুদ রঙের কলার থাকে; দিনের বেলা প্রাচীন গাছে কলোনি করে ঝুলে থাকে; দক্ষিণ এশিয়ার বাদুড়।",
            "diagnosticFeature": "Pteropus medius: Golden-yellow mantle collar, forearm 15-18 cm, communal tree roosters",
            "diagnosticFeatureBn": "টেরোপাস মিডিয়াস: ভারতীয় উড়ন্ত শিয়াল / বড় বাদুড়, সোনালী কলার",
            "resultType": "species",
            "speciesId": "sp-pteropus-medius",
            "rationaleEn": "Resolves to Indian flying fox (Pteropus medius: Pteropodidae)",
            "rationaleBn": "ভারতীয় বাদুড় / উড়ন্ত শিয়াল (টেরোপাস মিডিয়াস: টেরোপোডিডি পরিবার)"
          },
          {
            "lead": "World largest bat species by wingspan, reaching up to 1.5-1.7 meters (nearly 5 feet); forearm length exceeding 18-22 cm; mantle deeper reddish-tawny or chestnut; long fox-like muzzle without noseleaf; native to Southeast Asian rainforest canopies and mangroves.",
            "leadBn": "বিশ্বের বৃহত্তম ডানাবিশিষ্ট বাদুড় (ডানা ১.৫-১.৭ মিটার); সামনের হাতের দৈর্ঘ্য ১৮-২২ সেমি; লালচে-বাদামি কাঁধ; দক্ষিণ-পূর্ব এশিয়ার বনের ফলভোজী।",
            "diagnosticFeature": "Pteropus vampyrus: Giant wingspan up to 1.7 m, forearm >18 cm, Southeast Asian megabat",
            "diagnosticFeatureBn": "টেরোপাস ভ্যাম্পাইরাস: লার্জ ফ্লাইং ফক্স / বিশ্বের বৃহত্তম বাদুড়",
            "resultType": "species",
            "speciesId": "sp-pteropus-vampyrus",
            "rationaleEn": "Resolves to Large flying fox (Pteropus vampyrus: Pteropodidae)",
            "rationaleBn": "লার্জ ফ্লাইং ফক্স / দৈত্যাকার বাদুড় (টেরোপাস ভ্যাম্পাইরাস)"
          }
        ]
      },
      {
        "id": 6,
        "title": "Fully Aquatic Mammals: Sirenia vs Cetacea",
        "titleBn": "সম্পূর্ণ জলজ স্তন্যপায়ী: সাইরেনিয়া (ডুগং) বনাম সিটাসিয়া (তিমি ও ডলফিন)",
        "character": "Herbivorous marine grazer with horseshoe muzzle and dense pachyostotic ribs vs carnivorous cetaceans",
        "characterBn": "ঘোড়ার খুরের মতো মুখ ও ঘন নিরেট হাড়যুক্ত তৃণভোজী ডুগং বনাম শিকারী তিমি ও ডলফিন",
        "couplets": [
          {
            "lead": "Order Sirenia (Dugongidae): Strictly herbivorous marine mammal grazing on seagrass beds; heavy, robust body with extraordinarily dense, swollen, heavy ribs and skull bones lacking marrow cavities (pachyostosis/osteosclerosis) acting as neutral ballast; mouth directed ventrally with a large, fleshy, horseshoe-shaped cleft upper lip; fluke crescent-shaped; dorsal fin completely absent.",
            "leadBn": "সাইরেনিয়া বর্গ (ডুগং): সম্পূর্ণ তৃণভোজী সামুদ্রিক স্তন্যপায়ী যা সামুদ্রিক ঘাস খায়; শরীরের হাড়গুলো অত্যন্ত ভারী ও নিরেট (প্যাকিঅস্টোসিস) যা পানির নিচে ডুবতে সাহায্য করে; ঘোড়ার খুরের মতো চ্যাপ্টা মাংসল ঠোঁট; পিঠে পাখনা নেই।",
            "diagnosticFeature": "Dugong dugon: Herbivorous marine grazer, pachyostotic heavy ribs, horseshoe muzzle, no dorsal fin",
            "diagnosticFeatureBn": "ডুগং ডুগন: ডুগং / সামুদ্রিক গরু, নিরেট ভারী পাঁজর, ঘাসভোজী",
            "resultType": "species",
            "speciesId": "sp-dugong-dugon",
            "rationaleEn": "Resolves to Dugong (Dugong dugon: Dugongidae)",
            "rationaleBn": "ডুগং (ডুগং ডুগন: ডুগংগিডি পরিবার)"
          },
          {
            "lead": "Order Artiodactyla (Infraorder Cetacea): Carnivorous/filter-feeding aquatic mammals; teeth homodont or replaced by plates of keratinous baleen; dorsal blowhole on top of head; dorsal fin usually present; skeleton lightened and streamlined for active swimming.",
            "leadBn": "সিটাসিয়া অববর্গ (তিমি ও ডলফিন): শিকারী বা ফিল্টার-ফিডার জলজ স্তন্যপায়ী; দাঁত সমরূপ বা দাঁতের বদলে ঝুলন্ত কেরাটিন নির্মিত বেলিন প্লেট থাকে; মাথার ওপরে শ্বাসছিদ্র (ব্লোহোল)।",
            "diagnosticFeature": "Infraorder Cetacea: Mysticetes (baleen whales) & Odontocetes (toothed dolphins/whales)",
            "diagnosticFeatureBn": "সিটাসিয়া অববর্গ: বেলিন তিমি এবং দাঁতযুক্ত শুশুক/ডলফিন",
            "resultType": "next_step",
            "nextStepId": 7
          }
        ]
      },
      {
        "id": 7,
        "title": "Infraorder Cetacea: Mysticeti vs Odontoceti",
        "titleBn": "সিটাসিয়া অববর্গ: বেলিন তিমি (মিস্টিসেটি) বনাম দাঁতযুক্ত ডলফিন (ওডন্টোসেটি)",
        "character": "Gigantic filter-feeder with keratinous baleen plates vs toothed dolphins with single blowhole",
        "characterBn": "ঝুলন্ত ছাঁকন বেলিন প্লেটযুক্ত বিশালাকার তিমি বনাম সমরূপ দাঁতযুক্ত ডলফিন/শুশুক",
        "couplets": [
          {
            "lead": "Parvorder Mysticeti (Baleen Whales): Jaws completely toothless in adults, replaced by hundreds of fringed, flexible plates of keratin (baleen) hanging from upper palate used to sieve krill; paired blowholes; colossal oceanic mammal reaching 25-30 meters and 150-190 tonnes; world largest animal ever to exist; pleated ventral throat grooves.",
            "leadBn": "মিস্টিসেটি (বেলিন তিমি): প্রাপ্তবয়স্কদের দাঁত থাকে না, উপরের চোয়াল থেকে শত শত চিরুনির মতো কেরাটিনের তৈরি বেলিন প্লেট ঝোলে যা দিয়ে ক্রিল ছাঁকে; জোড়া শ্বাসছিদ্র; বিশ্বের সর্বকালের বৃহত্তম প্রাণী (২৫-৩০ মিটার, ১৯০ টন পর্যন্ত)।",
            "diagnosticFeature": "Balaenoptera musculus: Giant size up to 30 m, baleen filter plates, paired blowholes, throat pleats",
            "diagnosticFeatureBn": "ব্যালিনোপ্টেরা মাসকিউলাস: নীল তিমি, বেলিন প্লেট, বিশ্বের বৃহত্তম প্রাণী",
            "resultType": "species",
            "speciesId": "sp-balaenoptera-musculus",
            "rationaleEn": "Resolves to Blue whale (Balaenoptera musculus: Balaenopteridae)",
            "rationaleBn": "নীল তিমি (ব্যালিনোপ্টেরা মাসকিউলাস: ব্যালিনোপ্টেরিডি পরিবার)"
          },
          {
            "lead": "Parvorder Odontoceti (Toothed Whales & Dolphins): Jaws armed with conical homodont teeth; single blowhole opening on vertex of head; forehead houses a fat-filled acoustic lens (melon) used for sophisticated echolocation navigation and prey hunting.",
            "leadBn": "ওডন্টোসেটি (দাঁতযুক্ত ডলফিন ও তিমি): চোয়ালে একজাতীয় শঙ্কু আকৃতির দাঁত থাকে; মাথার ওপর একক শ্বাসছিদ্র; কপালে শব্দতরঙ্গ প্রেরণের জন্য তেলভর্তি মেলন থাকে।",
            "diagnosticFeature": "Parvorder Odontoceti: Homodont conical teeth, single blowhole, echolocating melon",
            "diagnosticFeatureBn": "ওডন্টোসেটি: দাঁতযুক্ত ডলফিন, একক ব্লোহোল, ইকোলোকেশন মেলন",
            "resultType": "next_step",
            "nextStepId": 8
          }
        ]
      },
      {
        "id": 8,
        "title": "Toothed Cetaceans: River Dolphin vs Coastal Irrawaddy Dolphin",
        "titleBn": "দাঁতযুক্ত সিটাসিয়ান: গঙ্গার নদী শুশুক বনাম উপকূলীয় ইরাবতী ডলফিন",
        "character": "Extremely long slender forceps beak with visible needle teeth and blind eyes vs blunt rounded melon without beak",
        "characterBn": "লম্বা সরু সাঁড়াশির মতো চঞ্চু, উন্মুক্ত সুচালো দাঁত ও অন্ধ চোখ বনাম গোল ভোঁতা মাথা ও চঞ্চুহীন ডলফিন",
        "couplets": [
          {
            "lead": "Obligate freshwater river cetacean; extraordinarily elongated, slender, forceps-like compressed beak lined with interlocking needle-sharp teeth visible even when mouth is closed; eyes vestigial and lensless (functionally blind, navigating exclusively via high-frequency echolocation); low triangular dorsal crest; iconic Shushuk of the Ganges-Brahmaputra rivers.",
            "leadBn": "মিঠাপানির নদী শুশুক; লম্বা চিমটার মতো সরু চঞ্চু যাতে সুচের মতো দাঁত মুখ বন্ধ থাকলেও বাইরে দেখা যায়; চোখ ক্ষুদ্র ও লেন্সহীন (কার্যত অন্ধ, শব্দতরঙ্গ দিয়ে পথ চলে); পিঠে ছোট ত্রিভুজাকার ক্রেস্ট; গঙ্গা-পদ্মা নদীর শুশুক।",
            "diagnosticFeature": "Platanista gangetica: Long forceps beak, visible needle teeth, lensless eyes, freshwater riverine",
            "diagnosticFeatureBn": "প্ল্যাটানিস্তা গ্যাঞ্জেটিকা: গঙ্গার শুশুক / নদী ডলফিন, লম্বা সরু ঠোঁট, দৃষ্টিহীন",
            "resultType": "species",
            "speciesId": "sp-platanista-gangetica",
            "rationaleEn": "Resolves to Ganges river dolphin (Platanista gangetica: Platanistidae)",
            "rationaleBn": "গঙ্গার শুশুক (প্ল্যাটানিস্তা গ্যাঞ্জেটিকা: প্ল্যাটানিস্টিডি পরিবার)"
          },
          {
            "lead": "Coastal and estuarine oceanic dolphin; head high, blunt, and rounded with a prominent bulging melon; beak completely absent; mouthline upturned in a characteristic \"smile\"; small triangular dorsal fin with rounded tip located behind mid-back; spits water jets to herd small fish; found in Sundarbans and coastal Bay of Bengal.",
            "leadBn": "উপকূলীয় ও মোহনার ডলফিন; মাথা ভোঁতা ও গোলাকার, কোনো বাড়তি চঞ্চু নেই; মুখের কোণ হাসিমুখের মতো ওপরের দিকে বাঁকানো; পিঠের পেছনের দিকে ছোট ভোঁতা পাখনা; মুখ দিয়ে পানির ফোয়ারা ছুড়ে মাছ শিকার করে; সুন্দরবনের পরিচিত ইরাবতী ডলফিন।",
            "diagnosticFeature": "Orcaella brevirostris: Blunt rounded head, beakless, upturned mouthline, small dorsal fin",
            "diagnosticFeatureBn": "অরকেলা ব্রেভিরোস্ট্রিস: ইরাবতী ডলফিন, ভোঁতা চঞ্চুহীন মাথা, সুন্দরবন",
            "resultType": "species",
            "speciesId": "sp-orcaella-brevirostris",
            "rationaleEn": "Resolves to Irrawaddy dolphin (Orcaella brevirostris: Delphinidae)",
            "rationaleBn": "ইরাবতী ডলফিন (অরকেলা ব্রেভিরোস্ট্রিস: ডেলফিনিডি পরিবার)"
          }
        ]
      },
      {
        "id": 9,
        "title": "Terrestrial Orders: Ungulates vs Rodents vs Carnivores vs Primates",
        "titleBn": "স্থলচর স্তন্যপায়ী বর্গসমূহ: খুরযুক্ত বনাম তীক্ষ্ণদন্তী বনাম মাংসাশী বনাম প্রাইমেট",
        "character": "Hooves on digits vs chisel-like incisors vs specialized carnassial teeth vs opposable digits with flat nails",
        "characterBn": "খুরযুক্ত পা বনাম ছেনির মতো দাঁত বনাম মাংস ছেঁড়ার কার্নাসিয়াল দাঁত বনাম হাত-পায়ের নখ ও বৃদ্ধাঙ্গুল",
        "couplets": [
          {
            "lead": "Unguligrade mammals: Terminal digit tips enclosed in thick, keratinous horny hooves adapted for cursorial running or supporting colossal terrestrial weight; large herbivorous browsers and grazers.",
            "leadBn": "খুরযুক্ত স্তন্যপায়ী: পায়ের আঙুলের মাথায় দৌড়ানোর বা বিশাল ওজন বহনের জন্য শক্ত কেরাটিন নির্মিত খুর থাকে; তৃণভোজী।",
            "diagnosticFeature": "Ungulates: Proboscidea (Elephants) & Perissodactyla (Odd-toed Ungulates)",
            "diagnosticFeatureBn": "খুরযুক্ত স্তন্যপায়ী: প্রোবোসিডিয়া (হাতি) এবং পেরিসোড্যাকটাইলা (ঘোড়া)",
            "resultType": "next_step",
            "nextStepId": 10
          },
          {
            "lead": "Order Rodentia (Rodents): Specialized dentition characterized by a single pair of continuously growing, open-rooted, chisel-like upper and lower incisors with enamel only on the anterior surface; canine teeth completely absent leaving a wide toothless gap (diastema).",
            "leadBn": "রোডেনশিয়া বর্গ (তীক্ষ্ণদন্তী স্তন্যপায়ী): উপরের ও নিচের চোয়ালে একজোড়া করে আজীবন বাড়তে থাকা বাটালি বা ছেনির মতো ধারালো কর্তন দাঁত (ইনসিসর); ক্যানাইন দাঁত নেই ফলে ফাঁকা ডায়াস্টেমা থাকে।",
            "diagnosticFeature": "Order Rodentia: Single pair chisel incisors, wide diastema, gnawing habit",
            "diagnosticFeatureBn": "রোডেনশিয়া বর্গ: বাটালি সদৃশ ইনসিসর দাঁত, ডায়াস্টেমা, ইঁদুর জাতীয়",
            "resultType": "next_step",
            "nextStepId": 11
          },
          {
            "lead": "Order Carnivora: Predatory or omnivorous mammals possessing enlarged, sharp, conical canine teeth; fourth upper premolar and first lower molar typically modified into specialized blade-like shearing teeth (carnassials) for slicing meat.",
            "leadBn": "কার্নিভোরা বর্গ (মাংসাশী স্তন্যপায়ী): শিকার ধরার জন্য ধারালো বড় ক্যানাইন দাঁত; মাংস কাটার জন্য কাঁচির মতো বিশেষায়িত কার্নাসিয়াল দাঁত।",
            "diagnosticFeature": "Order Carnivora: Prominent stabbing canines, shearing carnassials, claws",
            "diagnosticFeatureBn": "কার্নিভোরা বর্গ: শিকারী ক্যানাইন দাঁত, মাংস কাটার কার্নাসিয়াল দাঁত",
            "resultType": "next_step",
            "nextStepId": 13
          },
          {
            "lead": "Order Primates: Arboreal or terrestrial mammals characterized by grasping hands and feet with an opposable thumb (pollex) or big toe (hallux); digits tipped with flattened protective nails instead of sharp curved claws; stereoscopic color vision with forward-directed orbits; enlarged, complex cerebral neocortex.",
            "leadBn": "প্রাইমেট বর্গ: কোনো কিছু শক্তভাবে আঁকড়ে ধরার উপযোগী হাত-পা যাতে বিপরীতমুখী বৃদ্ধাঙ্গুল থাকে; ধারালো নখরের বদলে চ্যাপ্টা নখ; ত্রিমাত্রিক দৃষ্টির জন্য সরাসরি সামনের দিকে চোখ; অতি উন্নত মস্তিষ্ক।",
            "diagnosticFeature": "Order Primates: Opposable pollex/hallux, flat nails, stereoscopic vision, complex neocortex",
            "diagnosticFeatureBn": "প্রাইমেট বর্গ: বিপরীতমুখী বৃদ্ধাঙ্গুল, চ্যাপ্টা নখ, উন্নত মস্তিষ্ক",
            "resultType": "next_step",
            "nextStepId": 16
          }
        ]
      },
      {
        "id": 10,
        "title": "Hoofed Mammals: Elephant vs Horse",
        "titleBn": "খুরযুক্ত স্তন্যপায়ী: হাতি বনাম ঘোড়া",
        "character": "Elongated prehensile muscular proboscis with ivory tusks vs single functional hoof on 3rd digit",
        "characterBn": "দীর্ঘ শুঁড় ও গজদন্তযুক্ত হাতি বনাম পায়ের তৃতীয় আঙুলে একক শক্ত খুরযুক্ত ঘোড়া",
        "couplets": [
          {
            "lead": "Order Proboscidea: Colossal terrestrial giant up to 3-3.5 meters and 4-5 tonnes; nose and upper lip fused and elongated into a remarkably versatile, highly sensitive, muscular prehensile trunk (proboscis); upper second incisors modified into colossal, continuously growing ivory tusks; pillar-like graviportal legs with cushioning elastic pads; Asian elephant with dual hemispherical dorsal head bulges.",
            "leadBn": "প্রোবোসিডিয়া বর্গ (হাতি): বিশ্বের বৃহত্তম স্থলচর স্তন্যপায়ী; নাক ও উপরের ঠোঁট মিলে দীর্ঘ অত্যন্ত সংবেদনশীল মাংসল শুঁড়ে রূপান্তরিত; উপরের দ্বিতীয় দাঁত বিশালাকার বাঁকানো হাতির দাঁতে (টাস্ক) রূপান্তরিত; এশীয় হাতির কপালে দুটি গম্বুজাকৃতি ঢিবি থাকে।",
            "diagnosticFeature": "Elephas maximus: Prehensile proboscis trunk, ivory tusks, graviportal legs, Asian elephant",
            "diagnosticFeatureBn": "এলিফাস ম্যাক্সিমাস: এশীয় হাতি, দীর্ঘ সংবেদী শুঁড়, গজদন্ত",
            "resultType": "species",
            "speciesId": "sp-elephas-maximus",
            "rationaleEn": "Resolves to Asian elephant (Elephas maximus: Proboscidea)",
            "rationaleBn": "এশীয় হাতি (এলিফাস ম্যাক্সিমাস: প্রোবোসিডিয়া বর্গ)"
          },
          {
            "lead": "Order Perissodactyla: Odd-toed ungulate; weight of body borne symmetrically on a single enlarged, functional third digit (mesaxonic foot axis) encased inside a tough, thick, crescentic keratinous hoof; lateral digits 2 and 4 reduced to hidden vestigial splint bones; high-crowned hypsodont lophodont cheek teeth adapted for grinding silica-rich grasses; flowing mane on neck.",
            "leadBn": "পেরিসোড্যাকটাইলা বর্গ (ঘোড়া): বিজোড়-আঙুল খুরযুক্ত স্তন্যপায়ী; দেহের পুরো ওজন ৩য় আঙুলের ওপর ভর করে যা শক্ত খুরে আবৃত; ঘাস চর্বনের জন্য উঁচু মুকুটযুক্ত দাঁত; ঘাড়ে সুন্দর কেশর।",
            "diagnosticFeature": "Equus caballus: Mesaxonic single functional hoof on 3rd digit, hypsodont teeth, horse",
            "diagnosticFeatureBn": "ইকুয়াস ক্যাবালাস: গৃহপালিত ঘোড়া, একক খুরযুক্ত পা, ঘাড়ে কেশর",
            "resultType": "species",
            "speciesId": "sp-equus-caballus",
            "rationaleEn": "Resolves to Horse (Equus caballus: Perissodactyla)",
            "rationaleBn": "ঘোড়া (ইকুয়াস ক্যাবালাস: পেরিসোড্যাকটাইলা বর্গ)"
          }
        ]
      },
      {
        "id": 11,
        "title": "Order Rodentia: Giant Semiaquatic Cavy vs Beaver vs Murid Mouse",
        "titleBn": "রোডেনশিয়া বর্গ: জায়ান্ট ক্যাপিবারা বনাম চ্যাপ্টা লেজের বিভার বনাম সাধারণ ইঁদুর",
        "character": "Gigantic barrel body without tail vs broad scaly paddling tail vs small commensal with long tail",
        "characterBn": "লেজহীন দৈত্যাকার ক্যাপিবারা বনাম চ্যাপ্টা আইশযুক্ত বৈঠা লেজের বিভার বনাম ছোট লম্বা লেজের গৃহ ইঁদুর",
        "couplets": [
          {
            "lead": "World largest living rodent weighing up to 50-65 kg; heavy, barrel-shaped body completely lacking a visible external tail; blunt square snout with high dorsal eyes, ears, and nostrils adapted for semiaquatic swimming; partially webbed feet; South American grazing herbivore.",
            "leadBn": "বিশ্বের বৃহত্তম জীবিত তীক্ষ্ণদন্তী প্রাণী (৫০-৬৫ কেজি); চওড়া ড্রামের মতো ভারী শরীর যাতে লেজ নেই; পানিতে সাঁতারের সময় মুখ ভাসিয়ে রাখার জন্য চোখ ও কান মাথার উঁচুতে থাকে; আংশিক লিপ্তপদী পা।",
            "diagnosticFeature": "Hydrochoerus hydrochaeris: World largest rodent (60 kg), tailless, webbed toes, square snout",
            "diagnosticFeatureBn": "হাইড্রোচোরাস হাইড্রোচ্যারিস: ক্যাপিবারা, বিশ্বের বৃহত্তম তীক্ষ্ণদন্তী, লেজহীন",
            "resultType": "species",
            "speciesId": "sp-hydrochoerus-hydrochaeris",
            "rationaleEn": "Resolves to Capybara (Hydrochoerus hydrochaeris: Caviidae)",
            "rationaleBn": "ক্যাপিবারা (হাইড্রোচোরাস হাইড্রোচ্যারিস: ক্যাভিয়িডি পরিবার)"
          },
          {
            "lead": "Large to small rodents possessing a functional tail; building architectural river dams, or small commensal household rodents.",
            "leadBn": "কার্যকর লেজযুক্ত মাঝারি থেকে ক্ষুদ্র তীক্ষ্ণদন্তী প্রাণী; বাঁধ নির্মাণকারী বা পরিচিত ক্ষুদ্র ইঁদুর।",
            "diagnosticFeature": "Tailed Rodents: Castoridae & Muridae",
            "diagnosticFeatureBn": "লেজযুক্ত তীক্ষ্ণদন্তী: ক্যাস্টোরিডি এবং মুরিডি",
            "resultType": "next_step",
            "nextStepId": 12
          }
        ]
      },
      {
        "id": 12,
        "title": "Tailed Rodents: Eurasian Beaver vs House Mouse",
        "titleBn": "লেজযুক্ত তীক্ষ্ণদন্তী: ইউরেশীয় বিভার বনাম সাধারণ গৃহ ইঁদুর",
        "character": "Massive semiaquatic engineer with broad paddle tail vs small terrestrial commensal with scaly tail",
        "characterBn": "কাঠ কাটা কমলা দাঁত ও চ্যাপ্টা আঁশযুক্ত বৈঠা লেজ বনাম ক্ষুদ্র ঘরোয়া ইঁদুর ও সরু নগ্ন লেজ",
        "couplets": [
          {
            "lead": "Large semiaquatic ecosystem engineer (20-30 kg); tail unique among mammals: horizontally flattened, broad, oval, paddle-like, and covered in black hexagonal scales used as a steering rudder and warning slap; heavy skull with iron-reinforced bright orange incisors capable of felling mature trees; builds complex river lodges and dams.",
            "leadBn": "বৃহৎ জলজ স্তন্যপায়ী (২০-৩০ কেজি); লেজটি অদ্ভুত: আনুভূমিকভাবে চ্যাপ্টা, ডিম্বাকৃতি এবং কালো আঁশে ঢাকা যা বৈঠার মতো সাঁতারে কাজ করে এবং সতর্ক শব্দ করে; লোহাযুক্ত কমলা রঙের ধারালো দাঁত যা দিয়ে বড় গাছ কাটে।",
            "diagnosticFeature": "Castor fiber: Horizontally flattened scaly paddle tail, orange incisors, tree feller, dam builder",
            "diagnosticFeatureBn": "ক্যাস্টর ফাইবার: ইউরেশিয়ান বিভার, চ্যাপ্টা বৈঠা লেজ, বাঁধ নির্মাণকারী",
            "resultType": "species",
            "speciesId": "sp-castor-fiber",
            "rationaleEn": "Resolves to Eurasian beaver (Castor fiber: Castoridae)",
            "rationaleBn": "ইউরেশীয় বিভার (ক্যাস্টর ফাইবার: ক্যাস্টোরিডি পরিবার)"
          },
          {
            "lead": "Small, slender, agile commensal rodent (15-25 grams); body length 7-10 cm; tail long, slender, cylindrical, nearly hairless and ringed with fine scaly annuli, roughly equal to head-and-body length; dull greyish-brown fur with buff underbelly; premier genetic and medical laboratory mammalian model organism.",
            "leadBn": "ক্ষুদ্র ও চপল পরিচিত ইঁদুর (১৫-২৫ গ্রাম); দেহের সমান লম্বা প্রায় লোমহীন সরু আঁশযুক্ত লেজ; ধূসর-বাদামি পশম; বিশ্বজুড়ে জিনতত্ত্ব ও চিকিৎসা গবেষণার শীর্ষ স্তন্যপায়ী মডেল প্রাণী।",
            "diagnosticFeature": "Mus musculus: Small size (20 g), long naked scaly tail, pointed snout, premier laboratory model",
            "diagnosticFeatureBn": "মাস মাসকুলাস: সাধারণ গৃহ ইঁদুর / ল্যাবরেটরি মাউস, লম্বা লেজ",
            "resultType": "species",
            "speciesId": "sp-mus-musculus",
            "rationaleEn": "Resolves to House mouse (Mus musculus: Muridae)",
            "rationaleBn": "গৃহ ইঁদুর / পাতি ইঁদুর (মাস মাসকুলাস: মুরিডি পরিবার)"
          }
        ]
      },
      {
        "id": 13,
        "title": "Order Carnivora: Aquatic Seal vs Terrestrial Canids & Felids",
        "titleBn": "কার্নিভোরা বর্গ: জলজ সিল (পিন্নিপেডিয়া) বনাম স্থলচর কুকুর ও বিড়াল গোত্র",
        "character": "Limbs modified into webbed flippers without external ears vs terrestrial digitigrade walking limbs",
        "characterBn": "সাঁতারের ফ্লিপার পা ও বহিস্থ কানহীন সিল বনাম দৌড়ানোর নখযুক্ত পা ও খাড়া কান",
        "couplets": [
          {
            "lead": "Suborder Pinnipedia (True Seals): Semiaquatic marine carnivoran; body fusiform and covered in short stiff hair over a thick layer of insulating blubber; external ear pinnae completely absent; forelimbs short flippers; hindlimbs directed permanently backwards as a propulsion tail fluke, unable to rotate forward for walking on land.",
            "leadBn": "পিন্নিপেডিয়া (প্রকৃত সিল): সামুদ্রিক মাংসাশী স্তন্যপায়ী; পুরু চর্বিস্তরের ওপর ছোট শক্ত লোমে ঢাকা টর্পেডো দেহ; কানের বাইরের লতি নেই; পেছনের পা দুটি মাছের পাখনার মতো পেছনের দিকে মুখ করা যা দিয়ে মাটিতে হাঁটা যায় না।",
            "diagnosticFeature": "Phoca vitulina: True earless seal, short flippers, hindlimbs cannot rotate forward, blubber",
            "diagnosticFeatureBn": "ফোকা ভিটুলিনা: হারবার সিল, কানহীন জলজ শিকারী, ফ্লিপার পা",
            "resultType": "species",
            "speciesId": "sp-phoca-vitulina",
            "rationaleEn": "Resolves to Harbor seal (Phoca vitulina: Phocidae)",
            "rationaleBn": "হারবার সিল (ফোকা ভিটুলিনা: ফোসিডি পরিবার)"
          },
          {
            "lead": "Suborder Fissipedia: Terrestrial digitigrade carnivorans with ambulatory walking legs and forward-pointing paws; external ear pinnae prominent and movable; keen sense of smell and hearing; Canidae (dogs/wolves) and Felidae (cats).",
            "leadBn": "স্থলচর শিকারী স্তন্যপায়ী; মাটিতে হাঁটা বা দৌড়ানোর জন্য অগ্রমুখী থাবা; নাড়াচাড়া করা স্পষ্ট বহিস্থ কান; ক্যানিডি (নেকড়ে/কুকুর) এবং ফেলিডি (বাঘ/সিংহ/বিড়াল)।",
            "diagnosticFeature": "Terrestrial Fissipeds: Canidae & Felidae",
            "diagnosticFeatureBn": "স্থলচর মাংসাশী: ক্যানিডি (কুকুর পরিবার) এবং ফেলিডি (মার্জার পরিবার)",
            "resultType": "next_step",
            "nextStepId": 14
          }
        ]
      },
      {
        "id": 14,
        "title": "Fissipeds: Non-Retractile Claws (Canidae) vs Fully Retractile Claws (Felidae)",
        "titleBn": "স্থলচর শিকারী: অনমনীয় স্থায়ী নখর (ক্যানিডি) বনাম খাঁজে গুটিয়ে নেওয়া ধারালো নখ (ফেলিডি)",
        "character": "Elongated muzzle with non-retractile blunt claws vs shortened blunt face with curved retractile claws",
        "characterBn": "লম্বা মুখ ও ভোঁতা অনড় নখযুক্ত নেকড়ে বনাম ভোঁতা মুখ ও খাপে গুটানো বাঁকানো ধারালো নখযুক্ত বিড়াল গোত্র",
        "couplets": [
          {
            "lead": "Family Canidae (Wolves & Dogs): Elongated, slender facial muzzle with 42 teeth; long cursorial legs adapted for prolonged endurance pursuit of prey; claws blunt, sturdy, and completely non-retractile; prominent bushy tail; social pack hunters with highly developed vocal howling and olfactory scent marking.",
            "leadBn": "ক্যানিডি পরিবার (নেকড়ে ও কুকুর): লম্বা মুখ যাতে ৪২টি দাঁত থাকে; শিকার তাড়া করার জন্য লম্বা পা; নখ ভোঁতা ও খাপে গুটিয়ে নেওয়া যায় না; ঝোপের মতো লোমশ লেজ; দলবদ্ধ শিকারী।",
            "diagnosticFeature": "Canis lupus: Elongated muzzle, non-retractile claws, endurance cursorial runner, social pack hunter",
            "diagnosticFeatureBn": "ক্যানিস লুপাস: ধূসর নেকড়ে, অনমনীয় নখ, দলবদ্ধ শিকারী",
            "resultType": "species",
            "speciesId": "sp-canis-lupus",
            "rationaleEn": "Resolves to Gray wolf (Canis lupus: Canidae)",
            "rationaleBn": "ধূসর নেকড়ে (ক্যানিস লুপাস: ক্যানিডি পরিবার)"
          },
          {
            "lead": "Family Felidae (Cats): Shortened, blunt, rounded facial profile with reduced dentition (30 teeth) maximizing bite force at the canine tips; claws razor-sharp, strongly curved, and fully retractile into protective sheath pockets to prevent dulling; soft cushioned pads for silent stalking.",
            "leadBn": "ফেলিডি পরিবার (বিড়াল গোত্র): ছোট গোলগাল মুখ যাতে দাঁত ৩০টি কিন্তু ক্যানাইন দাঁতে কামড়ের শক্তি সর্বাধিক; শিকার ধরার ধারালো বাঁকানো নখ যা বিশেষ খাপে গুটিয়ে রাখা যায়; নিঃশব্দে চলাচলের নরম প্যাড।",
            "diagnosticFeature": "Family Felidae: Shortened skull, razor-sharp retractile claws, 30 teeth, specialized carnassials",
            "diagnosticFeatureBn": "ফেলিডি পরিবার: খাপে গুটানো ধারালো নখ, ৩০টি দাঁত, দক্ষ শিকারী",
            "resultType": "next_step",
            "nextStepId": 15
          }
        ]
      },
      {
        "id": 15,
        "title": "Family Felidae: Tiger vs Lion vs Domestic Cat",
        "titleBn": "ফেলিডি পরিবার: ডোরাকাটা বাঘ বনাম কেশরযুক্ত সিংহ বনাম গৃহপালিত বিড়াল",
        "character": "Colossal apex felids with roaring hyoid vs small purring domestic felid",
        "characterBn": "গর্জনকারী বিশাল বাঘ ও সিংহ বনাম ক্ষুদ্র গৃহপালিত শান্ত বিড়াল",
        "couplets": [
          {
            "lead": "World largest felid reaching 200-300 kg; reddish-orange coat boldly marked with iconic vertical black stripes providing camouflage in dense forest/mangrove vegetation; apex ambush predator, powerful swimmer, and national animal of Bangladesh (Royal Bengal Tiger).",
            "leadBn": "বিশ্বের বৃহত্তম বিড়াল গোত্রের শিকারী (২০০-৩০০ কেজি); লালচে-কমলা লোমে কালো উল্লম্ব ডোরাকাটা দাগ যা বনে ছদ্মবেশ দেয়; দক্ষ সাঁতারু; সুন্দরবনের রয়েল বেঙ্গল টাইগার ও জাতীয় পশু।",
            "diagnosticFeature": "Panthera tigris: Vertical black stripes on reddish-orange coat, colossal apex predator, solitary",
            "diagnosticFeatureBn": "প্যানথেরা টাইগ্রিস: রয়েল বেঙ্গল টাইগার / বাঘ, ডোরাকাটা পশম, জাতীয় পশু",
            "resultType": "species",
            "speciesId": "sp-panthera-tigris",
            "rationaleEn": "Resolves to Tiger / Royal Bengal tiger (Panthera tigris: Felidae)",
            "rationaleBn": "বাঘ / রয়েল বেঙ্গল টাইগার (প্যানথেরা টাইগ্রিস: ফেলিডি পরিবার)"
          },
          {
            "lead": "Colossal apex felid (150-250 kg) of open savannahs; adult males possess a magnificent, dense dark mane encircling head, neck, and chest; tawny-gold uniform unstriped coat; dark black tuft of hair at tip of tail; only truly social felid living in family prides.",
            "leadBn": "খোলা প্রান্তরের বিশাল শিকারী (১৫০-২৫০ কেজি); প্রাপ্তবয়স্ক পুরুষের মাথা ও ঘাড়জুড়ে বিশাল ঘন কেশর থাকে; শরীরে কোনো ডোরা দাগ নেই; লেজের মাথায় কালো চুলের গুচ্ছ; দলবদ্ধ প্রাইড গঠন করে বাস করে।",
            "diagnosticFeature": "Panthera leo: Prominent male mane, unstriped tawny coat, tufted tail, social prides",
            "diagnosticFeatureBn": "প্যানথেরা লিও: সিংহ, কেশরযুক্ত পুরুষ, লেজের কালো গুচ্ছ",
            "resultType": "species",
            "speciesId": "sp-panthera-leo",
            "rationaleEn": "Resolves to Lion (Panthera leo: Felidae)",
            "rationaleBn": "সিংহ (প্যানথেরা লিও: ফেলিডি পরিবার)"
          },
          {
            "lead": "Small, agile domesticated felid (3-5 kg); ossified rigid hyoid bone allowing continuous vocal purring during both inhalation and exhalation (unable to roar); vertical slit pupils in bright light; companion predator of domestic rodents across the globe.",
            "leadBn": "ক্ষুদ্র চপল গৃহপালিত মার্জার (৩-৫ কেজি); গলায় শক্ত হাড় থাকার কারণে এরা একটানা পারিং (ঘুরঘুর) শব্দ করতে পারে কিন্তু বাঘের মতো গর্জন করতে পারে না; আলোতে চোখের তারারন্ধ্র খাড়া রেখায় সংকুচিত হয়।",
            "diagnosticFeature": "Felis catus: Small size, vertical slit pupils, ossified hyoid (purrs, cannot roar), domestic",
            "diagnosticFeatureBn": "ফেলিস ক্যাটাস: গৃহপালিত বিড়াল, খাড়া তারারন্ধ্র, পারিং ডাক",
            "resultType": "species",
            "speciesId": "sp-felis-catus",
            "rationaleEn": "Resolves to Domestic cat (Felis catus: Felidae)",
            "rationaleBn": "গৃহপালিত বিড়াল (ফেলিস ক্যাটাস: ফেলিডি পরিবার)"
          }
        ]
      },
      {
        "id": 16,
        "title": "Order Primates (Family Hominidae): Great Apes & Humans",
        "titleBn": "প্রাইমেট বর্গ (হোমিনিডি পরিবার): বৃহৎ নরবানর ও আধুনিক মানুষ",
        "character": "Knuckle-walking quadrupedal great apes with heavy body hair vs obligate biped with sparse hair and symbolic speech",
        "characterBn": "চারপায়ে আঙুলের গিঁটে ভর দিয়ে চলা লোমশ নরবানর বনাম দুই পায়ে হাঁটা ও ভাষাভাষী আধুনিক মানুষ",
        "couplets": [
          {
            "lead": "Subfamily Homininae (Genus Homo): Obligate habitual upright bipedalism; vertebral column with distinct S-shaped lumbar curvature; feet strictly non-opposable with non-divergent big toe aligned with other digits forming longitudinal arches for walking; cranial capacity extraordinarily enlarged (1300-1400 cc) with vertical forehead and pronounced chin; sparse body hair; complex symbolic language and technology.",
            "leadBn": "হোমো জেনাস (আধুনিক মানুষ): সম্পূর্ণ দুই পায়ে খাড়া হয়ে হাঁটা; এস-আকৃতির মেরুদণ্ড; পায়ের বৃদ্ধাঙ্গুল অন্য আঙুলের সাথে সমান্তরাল; বিশাল মস্তিষ্ক (১৩০০-১৪০০ সিসি), সোজা কপাল ও চিবুক; শরীরে লোম অত্যন্ত পাতলা; জটিল ভাষা ও সংস্কৃতি।",
            "diagnosticFeature": "Homo sapiens: Obligate upright bipedalism, S-curved spine, 1350 cc brain, chin, sparse body hair",
            "diagnosticFeatureBn": "হোমো সেপিয়েন্স: আধুনিক মানুষ, সোজা দুই পায়ে হাঁটা, উন্নত মস্তিষ্ক",
            "resultType": "species",
            "speciesId": "sp-homo-sapiens",
            "rationaleEn": "Resolves to Modern human (Homo sapiens: Hominidae)",
            "rationaleBn": "আধুনিক মানুষ (হোমো সেপিয়েন্স: হোমিনিডি পরিবার)"
          },
          {
            "lead": "Quadrupedal knuckle-walking African great apes; forelimbs longer than hindlimbs; dense black or dark coat; opposable big toe on foot for grasping branches; prominent supraorbital brow ridge; brain capacity 350-500 cc.",
            "leadBn": "হাতের আঙুলের গিঁটে ভর দিয়ে চারপায়ে চলা আফ্রিকান বৃহৎ নরবানর; পেছনের পায়ের চেয়ে সামনের হাত লম্বা; ঘন কালো পশম; ডালে বসার জন্য পায়ে বিপরীতমুখী বৃদ্ধাঙ্গুল।",
            "diagnosticFeature": "Knuckle-walking Great Apes: Pan & Gorilla",
            "diagnosticFeatureBn": "আফ্রিকান নরবানর: শিম্পাঞ্জি ও গরিলা",
            "resultType": "next_step",
            "nextStepId": 17
          }
        ]
      },
      {
        "id": 17,
        "title": "Great Apes: Chimpanzee vs Western Gorilla",
        "titleBn": "বৃহৎ নরবানর: শিম্পাঞ্জি বনাম ওয়েস্টার্ন গরিলা",
        "character": "Medium slender agile ape with pink/pale face and prominent ears vs colossal ape with black face and sagittal crest",
        "characterBn": "মাঝারি চপল শিম্পাঞ্জি ও স্পষ্ট কান বনাম বিশ্বের বৃহত্তম স্তন্যপায়ী নরবানর গরিলা ও মাথায় উঁচু ক্রেস্ট",
        "couplets": [
          {
            "lead": "Medium-sized, highly agile, omnivorous ape (40-60 kg); prominent, large protruding external ears; face pale pink to mottled dark with age; tool-using social ape living in fission-fusion communities; genetically the closest living evolutionary sister taxon to humans.",
            "leadBn": "মাঝারি চপল সর্বভুক নরবানর (৪০-৬০ কেজি); মাথার দুই পাশে বড় স্পষ্ট কান; ফ্যাকাশে গোলাপি বা কালো দাগযুক্ত মুখ; কাঠি ও পাথর দিয়ে হাতিয়ার তৈরিতে পারদর্শী; মানুষের সবচেয়ে নিকটবর্তী জীবন্ত আত্মীয়।",
            "diagnosticFeature": "Pan troglodytes: Protruding ears, pale/mottled face, fission-fusion sociality, human sister taxon",
            "diagnosticFeatureBn": "প্যান ট্রোগ্লোডাইটিস: শিম্পাঞ্জি, বড় কান, মানুষের নিকটতম প্রজাতি",
            "resultType": "species",
            "speciesId": "sp-pan-troglodytes",
            "rationaleEn": "Resolves to Chimpanzee (Pan troglodytes: Hominidae)",
            "rationaleBn": "শিম্পাঞ্জি (প্যান ট্রোগ্লোডাইটিস: হোমিনিডি পরিবার)"
          },
          {
            "lead": "World largest living primate (140-200 kg in mature males); massive, colossal muscular chest with broad jet-black hairless face, small ears, and prominent sagittal crest on skull; mature adult dominant breeding males develop a distinctive broad silvery-white saddle across back and thighs (silverback); herbivorous foliage feeder.",
            "leadBn": "বিশ্বের বৃহত্তম জীবিত প্রাইমেট (১৪০-২০০ কেজি); বিশাল প্রশস্ত বুক ও লোমহীন কালো মুখ; ছোট কান; মাথার খুলির ওপর উঁচু হাড়ের ঝুঁটি; প্রাপ্তবয়স্ক নেতার পিঠের পশম রূপালী-সাদা বর্ণের হয় (সিলভারব্যাক); পাতাভোজী।",
            "diagnosticFeature": "Gorilla gorilla: Largest living primate, sagittal crest, jet-black face, mature male silverback saddle",
            "diagnosticFeatureBn": "গরিলা গরিলা: ওয়েস্টার্ন গরিলা, বিশ্বের বৃহত্তম প্রাইমেট, সিলভারব্যাক",
            "resultType": "species",
            "speciesId": "sp-gorilla-gorilla",
            "rationaleEn": "Resolves to Western gorilla (Gorilla gorilla: Hominidae)",
            "rationaleBn": "ওয়েস্টার্ন গরিলা (গরিলা গরিলা: হোমিনিডি পরিবার)"
          }
        ]
      }
    ]
  },
  {
    "id": "key-major-aquatic-vertebrates",
    "title": "Diagnostic Key to Major Aquatic Vertebrate Groups of Bangladesh",
    "titleBn": "বাংলাদেশের প্রধান জলজ মেরুদণ্ডী প্রাণীদের শনাক্তকরণ কুঞ্জি",
    "scope": "bangladesh",
    "targetTaxonId": "taxon-chordata",
    "majorGroup": "vertebrates",
    "taxonScope": "Vertebrata (Fishes & Aquatic Mammals of Bangladesh)",
    "taxonScopeBn": "ভার্টিব্রাটা (বাংলাদেশের মৎস্য ও জলজ স্তন্যপায়ী প্রাণী)",
    "description": "A dichotomous morphological key distinguishing major fish classes, carps, clupeids, catfishes, snakeheads, spiny eels, and riverine/coastal cetaceans of Bangladesh.",
    "descriptionBn": "বাংলাদেশের প্রধান প্রধান মৎস্য শ্রেণি, কার্প, ইলিশ, ক্যাটফিশ, শোল, বাইম এবং নদী ও উপকূলের ডলফিন-তিমির দ্বিপদী শনাক্তকরণ কুঞ্জি।",
    "educationalLevel": "intermediate",
    "keyType": "dichotomous",
    "sourceReferenceIds": [
      "ref-rahman-2005",
      "ref-iucn-bd-2015",
      "ref-smith-bd-cetaceans-2008"
    ],
    "verificationStatus": "verified",
    "steps": [
      {
        "id": 1,
        "title": "Respiration and Tail Fluke Morphology",
        "titleBn": "শ্বাসকার্য ও পুচ্ছ পাখনার প্রকৃতি",
        "character": "Atmospheric air via blowhole with horizontal fluke vs gills with vertical fin",
        "characterBn": "ব্লোহোল দিয়ে বাতাস ও অনুভূমিক ফ্লুক বনাম ফুলকা ও খাড়া পাখনা",
        "couplets": [
          {
            "lead": "Organism breathes atmospheric air via blowhole on dorsal surface of head; mammary glands present; horizontal tail fluke moving vertically.",
            "leadBn": "মাথার ওপর ব্লোহোল দিয়ে বাতাস থেকে শ্বাস নেয়; স্তনগ্রন্থি বিদ্যমান; অনুভূমিক পুচ্ছ ফ্লুক ওঠানামা করে।",
            "diagnosticFeature": "Mammalian cetacean morphology",
            "diagnosticFeatureBn": "স্তন্যপায়ী সিটাসিয়ান গঠন",
            "resultType": "next_step",
            "nextStepId": 2
          },
          {
            "lead": "Organism breathes dissolved oxygen via gills; fins supported by rays or cartilaginous elements; vertical caudal fin moving horizontally.",
            "leadBn": "ফুলকার সাহায্যে পানিতে দ্রবীভূত অক্সিজেনে শ্বাস নেয়; পাখনা রশ্মিযুক্ত; খাড়া লেজ ডানে-বামে নড়ে।",
            "diagnosticFeature": "Ichthyological morphology",
            "diagnosticFeatureBn": "মৎস্য শারীরস্থানিক গঠন",
            "resultType": "next_step",
            "nextStepId": 3
          }
        ]
      },
      {
        "id": 2,
        "title": "Riverine vs Coastal Estuarine Cetaceans",
        "titleBn": "নদীজ বনাম উপকূলীয় ডলফিন",
        "character": "Elongated rostrum with tiny eyes vs blunt melon with dorsal fin",
        "characterBn": "লম্বা চঞ্চু ও ক্ষয়িষ্ণু চোখ বনাম ভোঁতা কপাল ও পৃষ্ঠ পাখনা",
        "couplets": [
          {
            "lead": "Snout greatly elongated into a slender rostrum with sharp visible teeth; eyes tiny/rudimentary; low dorsal ridge without falcate fin; strictly freshwater.",
            "leadBn": "চোয়াল লম্বা সরু চঞ্চুতে প্রসারিত যাতে দৃশ্যমান দাঁত রয়েছে; চোখ অত্যন্ত ক্ষুদ্র; পৃষ্ঠ পাখনা নেই; শুধুমাত্র মিঠাপানির বাসিন্দা।",
            "diagnosticFeature": "Elongated rostrum, rudimentary eyes, freshwater potamon",
            "diagnosticFeatureBn": "লম্বা চঞ্চু, ক্ষুদ্র চোখ, মিঠাপানির নদী",
            "resultType": "species",
            "speciesId": "sp-platanista-gangetica"
          },
          {
            "lead": "Forehead prominent, rounded (melon) with no visible beak; small curved dorsal fin present behind midpoint; coastal, estuarine, and mangrove waterways.",
            "leadBn": "কপাল সুস্পষ্ট ও গোলাকার (মেলন); কোনো দৃশ্যমান চঞ্চু নেই; ছোট বাঁকানো পৃষ্ঠ পাখনা উপস্থিত; সুন্দরবন ও উপকূলীয় খাঁড়ি।",
            "diagnosticFeature": "Blunt melon, falcate dorsal fin, estuarine habitat",
            "diagnosticFeatureBn": "ভোঁতা মেলন, বাঁকা পৃষ্ঠ পাখনা, মোহনা অঞ্চল",
            "resultType": "species",
            "speciesId": "sp-orcaella-brevirostris"
          }
        ]
      },
      {
        "id": 3,
        "title": "Cartilaginous vs Bony Fishes of Bangladesh",
        "titleBn": "বাংলাদেশের তরুণাস্থিময় বনাম অস্থিময় মাছ",
        "character": "Cartilage with 5 lateral gill slits vs bony operculum",
        "characterBn": "তরুণাস্থি ও ৫টি ফুলকা ফাটল বনাম অস্থিময় কানকো",
        "couplets": [
          {
            "lead": "Skeleton composed of cartilage; 5 lateral gill slits; body elongated with distinct dorsal ridges; nasal barbels present; marine/brackish inshore.",
            "leadBn": "তরুণাস্থিময় কঙ্কাল; ৫টি পার্শ্বীয় ফুলকা ফাটল; পিঠে খাঁজযুক্ত লম্বাটে দেহ; নাসারন্ধ্রের কাছে কর্ষিকা; উপকূলীয় লবণাক্ত পানি।",
            "diagnosticFeature": "Chondrichthyan carpet shark morphology",
            "diagnosticFeatureBn": "তরুণাস্থিময় কার্পেট শার্ক",
            "resultType": "species",
            "speciesId": "sp-chiloscyllium-indicum"
          },
          {
            "lead": "Skeleton composed of bone (teleost); single opercular opening on each side covered by bony operculum.",
            "leadBn": "অস্থিময় কঙ্কাল; কানকো দ্বারা আবৃত প্রতিপাশে একক ফুলকা ছিদ্র।",
            "diagnosticFeature": "Osteichthyan bony fish",
            "diagnosticFeatureBn": "অস্থিময় মাছ",
            "resultType": "next_step",
            "nextStepId": 4
          }
        ]
      },
      {
        "id": 4,
        "title": "Spiny Eels vs Typical Body Fishes",
        "titleBn": "তারা বাইম বনাম সাধারণ গঠনের মাছ",
        "character": "Elongate eel-like body with rostral appendage and isolated spines vs non-eel",
        "characterBn": "লম্বা সাপের মতো দেহ ও আলাদা কাঁটাবিশিষ্ট বাইম বনাম সাধারণ দেহ",
        "couplets": [
          {
            "lead": "Body eel-like, extremely elongated (snake-shaped); pelvic fins absent; numerous isolated dorsal spines before continuous rayed dorsal-caudal-anal fin; mobile fleshy rostral proboscis.",
            "leadBn": "সাপের মতো অত্যন্ত লম্বাটে দেহ; শ্রোণী পাখনা নেই; পিঠের ওপরে বহু পৃথক কাঁটা; মুখের সামনে মাংসল শুঁড়।",
            "diagnosticFeature": "Mastacembelid spiny eel body form",
            "diagnosticFeatureBn": "মাস্টাসিম্বেলিড বাইম মাছের গঠন",
            "resultType": "next_step",
            "nextStepId": 5
          },
          {
            "lead": "Body not eel-like; pelvic fins present (or very large compressed mouth present); dorsal fin not preceded by many isolated spines.",
            "leadBn": "সাপের মতো দেহ নয়; শ্রোণী পাখনা উপস্থিত; পিঠের সামনে পৃথক কাঁটার সারি নেই।",
            "diagnosticFeature": "Non-mastacembelid bony fish",
            "diagnosticFeatureBn": "নন-বাইম অস্থিময় মাছ",
            "resultType": "next_step",
            "nextStepId": 6
          }
        ]
      },
      {
        "id": 5,
        "title": "Mastacembelid Species Determination",
        "titleBn": "বাইম মাছের প্রজাতি শনাক্তকরণ",
        "character": "Ocelli on dorsal fin vs reticulate tire-track markings",
        "characterBn": "পৃষ্ঠ পাখনায় গোল দাগ বনাম টায়ারের মতো আঁকাবাঁকা রেখা",
        "couplets": [
          {
            "lead": "Dorsal spines 13-16 in number; series of 6-8 dark-edged white ocelli (eye-spots) visible along the base of the dorsal fin; maximum length ~38 cm.",
            "leadBn": "১৩-১৬টি পৃষ্ঠ কাঁটা; পৃষ্ঠ পাখনার গোড়ায় ৬-৮টি চোখের মতো গোল সাদা-কালো দাগ; সর্বোচ্চ দৈর্ঘ্য ৩৮ সেমি।",
            "diagnosticFeature": "Macrognathus aculeatus — ocelli on dorsal base (Tara baim)",
            "diagnosticFeatureBn": "ম্যাক্রোগ্নাথাস আকুলিয়াটাস — তারা বাইম",
            "resultType": "species",
            "speciesId": "sp-macrognathus-aculeatus"
          },
          {
            "lead": "Dorsal spines 31-41 in number; elaborate zig-zag or reticulate dark \"tire-track\" patterning covering entire body; no distinct ocelli; larger (to 90 cm).",
            "leadBn": "৩১-৪১টি পৃষ্ঠ কাঁটা; সারা শরীরে টায়ারের ছাপের মতো আঁকাবাঁকা গাঢ় জালিকা প্যাটার্ন; চোখের মতো দাগ নেই; দৈর্ঘ্য ৯০ সেমি পর্যন্ত।",
            "diagnosticFeature": "Mastacembelus armatus — tire-track reticulate pattern (Baim)",
            "diagnosticFeatureBn": "মাস্টাসিম্বেলাস আর্মাটাস — শাল বাইম",
            "resultType": "species",
            "speciesId": "sp-mastacembelus-armatus"
          }
        ]
      },
      {
        "id": 6,
        "title": "Snakehead Fishes vs Other Teleosts",
        "titleBn": "শোল মাছ বনাম অন্যান্য মাছ",
        "character": "Depressed snake-like head with suprabranchial organ vs typical teleost",
        "characterBn": "সাপের মতো চ্যাপ্টা মাথা ও অতিরিক্ত শ্বাস অঙ্গ বনাম সাধারণ মাছ",
        "couplets": [
          {
            "lead": "Head large and strongly flattened (ophiocephalous); body cylindrical with soft, scaleless or large-scaled texture; dorsal fin long without spines; air-breathing organ present in suprabranchial chamber.",
            "leadBn": "মাথা বড় ও সাপের মতো চ্যাপ্টা; নলাকার দেহ ও বড় আঁইশ; কাঁটাহীন লম্বা পৃষ্ঠ পাখনা; অতিরিক্ত শ্বাস অঙ্গ বিদ্যমান।",
            "diagnosticFeature": "Channidae snakehead morphology",
            "diagnosticFeatureBn": "চান্নিডি শোল পরিবারের গঠন",
            "resultType": "next_step",
            "nextStepId": 7
          },
          {
            "lead": "Head not strongly ophiocephalous; body scaled or scaleless (catfish); dorsal fin may have strong spine OR body strongly deep and compressed.",
            "leadBn": "মাথা সাপের মতো চ্যাপ্টা নয়; আঁইশযুক্ত অথবা আঁইশহীন ক্যাটফিশ।",
            "diagnosticFeature": "Non-snakehead scaled/catfish body",
            "diagnosticFeatureBn": "সাধারণ আঁইশযুক্ত বা ক্যাটফিশ দেহ",
            "resultType": "next_step",
            "nextStepId": 8
          }
        ]
      },
      {
        "id": 7,
        "title": "Channa Species Determination",
        "titleBn": "শোল মাছের প্রজাতি নির্ণয়",
        "character": "Crossbar bands and large body vs spots and smaller size",
        "characterBn": "তির্যক ব্যান্ড ও বড় দেহ বনাম ছিটছিট দাগ ও ছোট দেহ",
        "couplets": [
          {
            "lead": "Body larger (to 90 cm); flanks with 8-11 broad oblique dark crossbars on pale background.",
            "leadBn": "বড় দেহ (৯০ সেমি পর্যন্ত); দুইপাশে ৮-১১টি চওড়া গাঢ় তির্যক ব্যান্ড বা ডোরা।",
            "diagnosticFeature": "Channa striata — crossbar pattern (Shol)",
            "diagnosticFeatureBn": "চান্না স্ট্রায়াটা — শোল মাছ",
            "resultType": "species",
            "speciesId": "sp-channa-striata"
          },
          {
            "lead": "Body smaller (to 30 cm); flanks with irregular dark spots or blotches, no distinct crossbars.",
            "leadBn": "ছোট দেহ (৩০ সেমি পর্যন্ত); দুইপাশে অনিয়মিত গাঢ় ছিটছিট ফোঁটা দাগ, ডোরা নেই।",
            "diagnosticFeature": "Channa punctata — spotted/blotched pattern (Taki)",
            "diagnosticFeatureBn": "চান্না পাঙ্কটাটা — টাকি মাছ",
            "resultType": "species",
            "speciesId": "sp-channa-punctata"
          }
        ]
      },
      {
        "id": 8,
        "title": "Scaleless Catfishes vs Scaled Teleosts",
        "titleBn": "আঁইশহীন ক্যাটফিশ বনাম আঁইশযুক্ত মাছ",
        "character": "Scaleless with barbels and adipose fin vs cycloid scales without adipose",
        "characterBn": "আঁইশহীন, কর্ষিকাযুক্ত ও অ্যাডিপোজ পাখনা বনাম আঁইশযুক্ত দেহ",
        "couplets": [
          {
            "lead": "Body scaleless; adipose fin present between dorsal and caudal fins OR body with four or more pairs of barbels; catfish.",
            "leadBn": "দেহ সম্পূর্ণ আঁইশহীন; পৃষ্ঠ ও পুচ্ছ পাখনার মাঝে চর্বি পাখনা (অ্যাডিপোজ) উপস্থিত অথবা ৪ জোড়া কর্ষিকা।",
            "diagnosticFeature": "Siluriform catfish anatomy",
            "diagnosticFeatureBn": "ক্যাটফিশের অঙ্গসংস্থান",
            "resultType": "next_step",
            "nextStepId": 9
          },
          {
            "lead": "Body covered with visible scales; no adipose fin.",
            "leadBn": "দৃশ্যমান আঁইশযুক্ত দেহ; অ্যাডিপোজ পাখনা নেই।",
            "diagnosticFeature": "Scaled teleost fish",
            "diagnosticFeatureBn": "আঁইশযুক্ত অস্থিময় মাছ",
            "resultType": "next_step",
            "nextStepId": 12
          }
        ]
      },
      {
        "id": 9,
        "title": "Large Predator Boal vs Other Catfishes",
        "titleBn": "বোয়াল মাছ বনাম অন্যান্য ক্যাটফিশ",
        "character": "Vestigial dorsal with huge gape vs developed dorsal fin",
        "characterBn": "ক্ষুদ্র পৃষ্ঠ পাখনা ও বিশাল হা বনাম উন্নত পৃষ্ঠ পাখনা",
        "couplets": [
          {
            "lead": "Body extremely elongated; dorsal fin tiny (1 spine + 1-3 rays); anal fin very long (80-95 rays); mouth very large extending behind eye; two pairs of barbels; to 240 cm.",
            "leadBn": "লম্বাটে দেহ; অত্যন্ত ক্ষুদ্র পৃষ্ঠ পাখনা; অতি দীর্ঘ পায়ু পাখনা (৮০-৯৫ রশ্মি); চোখের পেছনে বিস্তৃত বিশাল মুখ; ২ জোড়া কর্ষিকা; ২৪০ সেমি পর্যন্ত।",
            "diagnosticFeature": "Wallago attu — minute dorsal, enormous mouth (Boal)",
            "diagnosticFeatureBn": "ওয়ালাগো আত্তু — বোয়াল মাছ",
            "resultType": "species",
            "speciesId": "sp-wallago-attu"
          },
          {
            "lead": "Body not as above; dorsal fin with at least 5-7 rays or body differently proportioned.",
            "leadBn": "উপরের মতো নয়; পৃষ্ঠ পাখনায় অন্তত ৫-৭টি রশ্মি উপস্থিত।",
            "diagnosticFeature": "Other siluriform catfish",
            "diagnosticFeatureBn": "অন্যান্য ক্যাটফিশ",
            "resultType": "next_step",
            "nextStepId": 10
          }
        ]
      },
      {
        "id": 10,
        "title": "Clariidae vs Bagridae/Pangasiidae",
        "titleBn": "মাগুর বনাম পাঙ্গাশ ও টেংরা",
        "character": "Long spineless dorsal fin vs short dorsal with spine and adipose",
        "characterBn": "কাঁটাহীন দীর্ঘ পৃষ্ঠ পাখনা বনাম কাঁটাযুক্ত ছোট পৃষ্ঠ ও অ্যাডিপোজ পাখনা",
        "couplets": [
          {
            "lead": "Dorsal fin long, without spine, continuous (60-79 rays); four pairs of barbels; head broad and bony; pectoral spine strong but unserrated; accessory breathing organ present.",
            "leadBn": "দীর্ঘ কাঁটাহীন অবিচ্ছিন্ন পৃষ্ঠ পাখনা (৬০-৭৯ রশ্মি); ৪ জোড়া কর্ষিকা; চওড়া শক্ত মাথা; অতিরিক্ত শ্বাস অঙ্গ উপস্থিত।",
            "diagnosticFeature": "Clarias magur — Clariidae (Native Magur)",
            "diagnosticFeatureBn": "ক্ল্যারিয়াস মাগুর — দেশি মাগুর মাছ",
            "resultType": "species",
            "speciesId": "sp-clarias-magur"
          },
          {
            "lead": "Dorsal fin short (4-9 rays) with a single spine; adipose fin present or absent; barbels not more than four pairs.",
            "leadBn": "ছোট পৃষ্ঠ পাখনা (৪-৯ রশ্মি) যাতে ১টি কাঁটা রয়েছে; অ্যাডিপোজ পাখনা উপস্থিত বা অনুপস্থিত।",
            "diagnosticFeature": "Other catfish — Siluridae or Bagridae",
            "diagnosticFeatureBn": "পাবদা বা গুলশা টেংরা পরিবার",
            "resultType": "next_step",
            "nextStepId": 11
          }
        ]
      },
      {
        "id": 11,
        "title": "Ompok vs Mystus",
        "titleBn": "পাবদা বনাম গুলশা-টেংরা",
        "character": "Adipose fin absence & long anal fin vs adipose fin presence & long barbels",
        "characterBn": "চর্বি পাখনা নেই ও দীর্ঘ পায়ু পাখনা বনাম চর্বি পাখনা বিদ্যমান ও দীর্ঘ গোঁফ",
        "couplets": [
          {
            "lead": "Adipose fin completely absent; anal fin very long (50-56 rays); two pairs of barbels; predatory oblique mouth (Ompok pabda / Pabda).",
            "leadBn": "চর্বি পাখনা সম্পূর্ণ অনুপস্থিত; অত্যন্ত দীর্ঘ পায়ু পাখনা (৫০-৫৬ রশ্মি); ২ জোড়া গোঁফ; শিকারি মুখ (পাবদা মাছ)।",
            "diagnosticFeature": "Ompok pabda — Siluridae, no adipose fin (Pabda)",
            "diagnosticFeatureBn": "ওম্পক পাবদা — পাবদা মাছ",
            "resultType": "species",
            "speciesId": "sp-ompok-pabda"
          },
          {
            "lead": "Adipose fin present and elongate; anal fin shorter (9-12 rays); four pairs of barbels with very long maxillary pair (Mystus cavasius / Gulsha).",
            "leadBn": "ছোট দেহ (৩০ সেমি পর্যন্ত); ৪ জোড়া কর্ষিকার মধ্যে ওপরের জোড়া অত্যন্ত দীর্ঘ; দীর্ঘ অ্যাডিপোজ পাখনা (গুলশা টেংরা)।",
            "diagnosticFeature": "Mystus cavasius — Bagridae, long maxillary barbels (Gulsha)",
            "diagnosticFeatureBn": "মিস্টাস ক্যাভাসিয়াস — গুলশা টেংরা",
            "resultType": "species",
            "speciesId": "sp-mystus-cavasius"
          }
        ]
      },
      {
        "id": 12,
        "title": "Abdominal Scutes: Hilsa vs Carps",
        "titleBn": "পেটের স্কুট: ইলিশ বনাম কার্প",
        "character": "Serrated abdominal keel scutes vs rounded abdomen",
        "characterBn": "পেটে করাত-সদৃশ স্কুট বনাম গোলাকার পেট",
        "couplets": [
          {
            "lead": "Abdomen with sharp serrated scutes (30-33 scutes); mouth terminal with a distinct median notch in upper jaw; no teeth; anadromous; highly compressed silvery body.",
            "leadBn": "পেটে ধারালো করাত-সদৃশ স্কুট (৩০-৩৩টি); ওপরের চোয়ালে খাঁজ; দাঁত নেই; রুপালি চ্যাপ্টা দেহ; পরিযায়ী।",
            "diagnosticFeature": "Clupeid serrated abdominal scutes (Ilish)",
            "diagnosticFeatureBn": "ক্লুপেইড ধারালো স্কুট (ইলিশ)",
            "resultType": "species",
            "speciesId": "sp-tenualosa-ilisha"
          },
          {
            "lead": "Abdomen rounded, devoid of sharp scutes; scales cycloid; freshwater carp or perch.",
            "leadBn": "পেট গোলাকার, কোনো ধারালো স্কুট নেই; সাইক্লয়েড আঁইশ; মিঠাপানির কার্প।",
            "diagnosticFeature": "Non-clupeid scaled teleost",
            "diagnosticFeatureBn": "নন-ক্লুপেইড আঁইশযুক্ত মাছ",
            "resultType": "next_step",
            "nextStepId": 13
          }
        ]
      },
      {
        "id": 13,
        "title": "Catla vs Other Major Carps",
        "titleBn": "কাতলা বনাম অন্যান্য মেজর কার্প",
        "character": "Large upturned superior mouth and deep arched body vs inferior mouth",
        "characterBn": "বিশাল ওপরের দিকে বাঁকানো মুখ ও কুঁজবিশিষ্ট দেহ বনাম নিচের মুখ",
        "couplets": [
          {
            "lead": "Head very large with broad upturned mouth; dorsal profile strongly arched; no barbels; strongly deep-bodied; surface-feeding major carp.",
            "leadBn": "মাথা বিশালাকার ও মুখ ওপরের দিকে বাঁকানো; পিঠের দিক কুঁজের মতো উঁচু; গোঁফ নেই; গভীর দেহ; স্তরের উপরিভাগের খাদ্যভোজী।",
            "diagnosticFeature": "Catla catla — large upturned mouth, deep body (Catla)",
            "diagnosticFeatureBn": "কাতলা কাতলা — কাতলা মাছ",
            "resultType": "species",
            "speciesId": "sp-catla-catla"
          },
          {
            "lead": "Head not greatly enlarged; mouth inferior or terminal; barbels may be present or absent.",
            "leadBn": "মাথা অতিরিক্ত বড় নয়; মুখ নিচের দিকে বা প্রান্তীয়; গোঁফ থাকতে পারে বা নাও থাকতে পারে।",
            "diagnosticFeature": "Other scaled teleost",
            "diagnosticFeatureBn": "অন্যান্য কার্প মাছ",
            "resultType": "next_step",
            "nextStepId": 14
          }
        ]
      },
      {
        "id": 14,
        "title": "Rohu vs Mrigal",
        "titleBn": "রুই বনাম মৃগেল",
        "character": "Thick fringed lips with maxillary barbels vs thin simple lips with rostral barbels",
        "characterBn": "পুরু ঝালরযুক্ত ঠোঁট বনাম পাতলা সাধারণ ঠোঁট ও নাকের গোঁফ",
        "couplets": [
          {
            "lead": "Mouth inferior with thick fleshy fringed lips; one concealed maxillary barbel pair; moderately arched body; 40-44 lateral line scales; freshwater river.",
            "leadBn": "নিচের দিকে মুখ যাতে পুরু মাংসল ঝালরযুক্ত ঠোঁট রয়েছে; ১ জোড়া গোপন গোঁফ; পার্শ্বরেখায় ৪০-৪৪টি আঁইশ; কলাম খাদ্যভোজী।",
            "diagnosticFeature": "Labeo rohita — fringed lips, concealed barbels (Rohu)",
            "diagnosticFeatureBn": "লাবিও রোহিতা — রুই মাছ",
            "resultType": "species",
            "speciesId": "sp-labeo-rohita"
          },
          {
            "lead": "Mouth inferior but lips thin and simple; one pair of short rostral barbels; body moderately elongated; 40-43 lateral line scales; bottom feeder.",
            "leadBn": "নিচের মুখ কিন্তু ঠোঁট পাতলা ও ঝালরহীন; ১ জোড়া ছোট নাসারন্ধ্রীয় গোঁফ; লম্বাটে দেহ; তলদেশের খাদ্যভোজী।",
            "diagnosticFeature": "Cirrhinus mrigala — thin inferior lips, rostral barbels (Mrigal)",
            "diagnosticFeatureBn": "সিরহিনাস মৃগালা — মৃগেল মাছ",
            "resultType": "species",
            "speciesId": "sp-cirrhinus-mrigala"
          }
        ]
      }
    ]
  },
  {
    "id": "key-major-carps-bangladesh",
    "title": "Key to the Major Carps of Bangladesh (Cyprinidae)",
    "titleBn": "বাংলাদেশের প্রধান কার্প মাছসমূহের শনাক্তকরণ কুঞ্জি (সাইপ্রিনিডি)",
    "scope": "bangladesh",
    "targetTaxonId": "taxon-cyprinidae",
    "majorGroup": "fishes",
    "taxonScope": "Cyprinidae (Catla, Labeo, Cirrhinus, Pethia)",
    "taxonScopeBn": "সাইপ্রিনিডি (কাতলা, রুই, মৃগেল, তিতপুঁটি)",
    "description": "Focused dichotomous key to distinguish the four commercially and ecologically important cyprinid species covered in BiotaElite 2.0 from Bangladesh. Based on head shape, mouth morphology, barbel presence, and body form.",
    "descriptionBn": "মাথার আকৃতি, মুখের গঠন, গোঁফ ও দেহের গঠনের ওপর ভিত্তি করে বাংলাদেশের বাণিজ্যিকভাবে গুরুত্বপূর্ণ প্রধান ৪টি কার্প প্রজাতির শনাক্তকরণ কুঞ্জি।",
    "educationalLevel": "introductory",
    "keyType": "dichotomous",
    "sourceReferenceIds": [
      "ref-rahman-2005",
      "ref-hamilton-1822"
    ],
    "verificationStatus": "verified",
    "steps": [
      {
        "id": 1,
        "title": "Catla vs Other Carps",
        "titleBn": "কাতলা বনাম অন্যান্য কার্প",
        "character": "Head size, mouth orientation, and barbel presence",
        "characterBn": "মাথার আকার, মুখের দিক ও গোঁফের উপস্থিতি",
        "couplets": [
          {
            "lead": "Body very deep and compressed; head very large and wide; mouth wide and upturned (superior); no barbels; dorsal profile strongly arched.",
            "leadBn": "চওড়া ও চ্যাপ্টা দেহ; অত্যন্ত বড় মাথা; চওড়া ও ওপরমুখী মুখ; গোঁফ নেই; পিঠের দিক খাড়া উঁচু।",
            "diagnosticFeature": "Catla catla — distinctive deep body and upturned mouth",
            "diagnosticFeatureBn": "কাতলা কাতলা — বড় মাথা ও ওপরমুখী মুখ",
            "resultType": "species",
            "speciesId": "sp-catla-catla"
          },
          {
            "lead": "Body moderately deep to elongated; mouth inferior or subterminal; body proportions less extreme.",
            "leadBn": "দেহ মাঝারি বা লম্বাটে; মুখ নিচের দিকে বা কিছুটা সামনে; সাধারণ শারীরিক অনুপাত।",
            "diagnosticFeature": "Not Catla — other Cyprinidae",
            "diagnosticFeatureBn": "কাতলা নয় — অন্যান্য কার্প",
            "resultType": "next_step",
            "nextStepId": 2
          }
        ]
      },
      {
        "id": 2,
        "title": "Rohu vs Other Cyprinids",
        "titleBn": "রুই বনাম অন্যান্য কার্প",
        "character": "Lip structure and fringing",
        "characterBn": "ঠোঁটের গঠন ও ঝালরের উপস্থিতি",
        "couplets": [
          {
            "lead": "Mouth inferior with thick, prominently fringed lips (lower lip with distinct free margins); concealed maxillary barbels present in labial groove.",
            "leadBn": "নিচের দিকে মুখ যাতে পুরু সুস্পষ্ট ঝালরযুক্ত ঠোঁট রয়েছে; ওষ্ঠ খাঁজে লুকানো একজোড়া গোঁফ।",
            "diagnosticFeature": "Labeo rohita — fringed lips and barbels",
            "diagnosticFeatureBn": "লাবিও রোহিতা — ঝালরযুক্ত ঠোঁট ও গোঁফ",
            "resultType": "species",
            "speciesId": "sp-labeo-rohita"
          },
          {
            "lead": "Mouth inferior but lips thin and not prominently fringed; barbels inconspicuous rostral type only or absent.",
            "leadBn": "নিচের দিকে মুখ কিন্তু ঠোঁট পাতলা ও ঝালরহীন; নাসারন্ধ্রে ছোট গোঁফ বা গোঁফ নেই।",
            "diagnosticFeature": "Cirrhinus or Pethia",
            "diagnosticFeatureBn": "মৃগেল বা পুঁটি",
            "resultType": "next_step",
            "nextStepId": 3
          }
        ]
      },
      {
        "id": 3,
        "title": "Mrigal vs Rosy Barb",
        "titleBn": "মৃগেল বনাম তিতপুঁটি",
        "character": "Body size, spot markings, and rostral barbels",
        "characterBn": "দেহের আকার, কালো ফোঁটা ও নাসিকা গোঁফ",
        "couplets": [
          {
            "lead": "Large carp (to 90 cm); body elongated and moderately compressed; head short and pointed; thin inferior lips; single pair of short rostral barbels; bottom feeder.",
            "leadBn": "বড় কার্প (৯০ সেমি পর্যন্ত); লম্বাটে দেহ; ছোট ছুঁচালো মাথা; পাতলা ঠোঁট; একজোড়া ছোট গোঁফ; তলদেশের খাদ্যভোজী।",
            "diagnosticFeature": "Cirrhinus mrigala — large, elongated bottom-feeding carp",
            "diagnosticFeatureBn": "সিরহিনাস মৃগালা — তলদেশের মেজর কার্প",
            "resultType": "species",
            "speciesId": "sp-cirrhinus-mrigala"
          },
          {
            "lead": "Small barb (to 15 cm); body oval and moderately compressed; no barbels; black spot at base of dorsal fin and caudal peduncle; breeding males vivid rosy-red.",
            "leadBn": "ছোট পুঁটি (১৫ সেমি পর্যন্ত); ডিম্বাকার দেহ; গোঁফ নেই; লেজের গোড়ায় ও পৃষ্ঠ পাখনায় কালো ফোঁটা; প্রজননকালে পুরুষ উজ্জ্বল লালচে।",
            "diagnosticFeature": "Pethia conchonius — small size, black spots, rosy coloration",
            "diagnosticFeatureBn": "পেথিয়া কনকোনিয়াস — তিতপুঁটি",
            "resultType": "species",
            "speciesId": "sp-pethia-conchonius"
          }
        ]
      }
    ]
  },
  {
    "id": "key-catfishes-bangladesh",
    "title": "Key to Air-Breathing & Predatory Catfishes of Bangladesh (Siluriformes)",
    "titleBn": "বাংলাদেশের জিওল ও শিকারি ক্যাটফিশসমূহের শনাক্তকরণ কুঞ্জি (সিলুরিফর্মিস)",
    "scope": "bangladesh",
    "targetTaxonId": "taxon-siluriformes",
    "majorGroup": "fishes",
    "taxonScope": "Siluriformes (Clariidae, Heteropneustidae, Pangasiidae, Bagridae, Siluridae, Schilbeidae)",
    "taxonScopeBn": "সিলুরিফর্মিস (মাগুর, শিং, পাঙ্গাশ, গুলশা, বোয়াল, বাচা)",
    "description": "Dichotomous key to distinguish the major siluriform catfish species of Bangladesh based on barbel count, dorsal fin morphology, body size, and accessory breathing organ presence.",
    "descriptionBn": "গোঁফের সংখ্যা, পৃষ্ঠ পাখনার প্রকৃতি, দেহের আকার ও অতিরিক্ত শ্বাস অঙ্গের উপস্থিতির ওপর ভিত্তি করে বাংলাদেশের প্রধান প্রধান ক্যাটফিশ প্রজাতির শনাক্তকরণ কুঞ্জি।",
    "educationalLevel": "intermediate",
    "keyType": "dichotomous",
    "sourceReferenceIds": [
      "ref-rahman-2005",
      "ref-bloch-1793",
      "ref-ng-kottelat-2008"
    ],
    "verificationStatus": "verified",
    "steps": [
      {
        "id": 1,
        "title": "Boal vs Other Catfishes",
        "titleBn": "বোয়াল বনাম অন্যান্য ক্যাটফিশ",
        "character": "Anal fin length and gape extension",
        "characterBn": "পায়ু পাখনার দৈর্ঘ্য ও মুখের বিস্তার",
        "couplets": [
          {
            "lead": "Body extremely elongated (to 240 cm); dorsal fin vestigial (I + 1-3 rays); anal fin extremely long (80-95 rays); mouth gape extends behind the eye.",
            "leadBn": "অত্যন্ত লম্বাটে দেহ (২৪০ সেমি পর্যন্ত); অতি ক্ষুদ্র পৃষ্ঠ পাখনা; অত্যন্ত দীর্ঘ পায়ু পাখনা (৮০-৯৫ রশ্মি); চোখের পেছনে বিস্তৃত বিশাল মুখ।",
            "diagnosticFeature": "Wallago attu — Siluridae, enormous elongated predator",
            "diagnosticFeatureBn": "ওয়ালাগো আত্তু — বোয়াল মাছ",
            "resultType": "species",
            "speciesId": "sp-wallago-attu"
          },
          {
            "lead": "Body not as above; dorsal fin with more than 5 rays or body proportioned differently.",
            "leadBn": "উপরের মতো নয়; পৃষ্ঠ পাখনায় ৫টির বেশি রশ্মি উপস্থিত।",
            "diagnosticFeature": "Other Siluriformes",
            "diagnosticFeatureBn": "অন্যান্য ক্যাটফিশ",
            "resultType": "next_step",
            "nextStepId": 2
          }
        ]
      },
      {
        "id": 2,
        "title": "Magur vs Short-Dorsal Catfishes",
        "titleBn": "মাগুর বনাম ছোট পৃষ্ঠপাখনা ক্যাটফিশ",
        "character": "Dorsal fin length and accessory arborescent organ",
        "characterBn": "পৃষ্ঠ পাখনার দৈর্ঘ্য ও অতিরিক্ত শ্বাস অঙ্গ",
        "couplets": [
          {
            "lead": "Dorsal fin very long (60-79 soft rays), without a spine; four pairs of barbels; head broad, bony, strongly flattened; accessory arborescent breathing organ in suprabranchial chamber.",
            "leadBn": "কাঁটাহীন অত্যন্ত দীর্ঘ পৃষ্ঠ পাখনা (৬০-৭৯ রশ্মি); ৪ জোড়া গোঁফ; শক্ত চ্যাপ্টা মাথা; কানকোর ওপর গাঠনিক অতিরিক্ত শ্বাস অঙ্গ।",
            "diagnosticFeature": "Clarias magur — Clariidae, long spineless dorsal (Magur)",
            "diagnosticFeatureBn": "ক্ল্যারিয়াস মাগুর — দেশি মাগুর মাছ",
            "resultType": "species",
            "speciesId": "sp-clarias-magur"
          },
          {
            "lead": "Dorsal fin shorter (less than 15 rays), with a single spine; body profile differently proportioned.",
            "leadBn": "ছোট পৃষ্ঠ পাখনা (১৫টির কম রশ্মি) যাতে কাঁটা উপস্থিত।",
            "diagnosticFeature": "Other Siluriformes",
            "diagnosticFeatureBn": "অন্যান্য ক্যাটফিশ",
            "resultType": "next_step",
            "nextStepId": 3
          }
        ]
      },
      {
        "id": 3,
        "title": "Shing (Stinging Catfish) vs Other Catfishes",
        "titleBn": "শিং মাছ বনাম অন্যান্য ক্যাটফিশ",
        "character": "Venomous pectoral spine and tubular air sacs vs typical body form",
        "characterBn": "বিষাক্ত বক্ষ কাঁটা ও নলাকার শ্বাসথলি বনাম সাধারণ দেহাকৃতি",
        "couplets": [
          {
            "lead": "Two pairs of barbels only; pectoral spine venomous and sharp; long air-sac extension in posterior abdomen (visible as a ridge); dorsal fin small (I spine + 5-7 rays); body slender (to 30 cm).",
            "leadBn": "মাত্র ২ জোড়া গোঁফ; অত্যন্ত বিষাক্ত ধারালো বক্ষ কাঁটা; পিঠের ভেতর দিয়ে লেজ পর্যন্ত বিস্তৃত দীর্ঘ শ্বাসথলি; ছোট পৃষ্ঠ পাখনা।",
            "diagnosticFeature": "Heteropneustes fossilis — venomous spine, tubular air sac (Shing)",
            "diagnosticFeatureBn": "হেটারোপনিউস্টেস ফসিলিস — শিং মাছ",
            "resultType": "species",
            "speciesId": "sp-heteropneustes-fossilis"
          },
          {
            "lead": "Four or more pairs of barbels (or if two pairs, anal fin very long); pectoral spine not venomous; no extended tubular air sac ridge into caudal region.",
            "leadBn": "গোঁফ ৪ জোড়া (অথবা দীর্ঘ পায়ু পাখনা); বিষাক্ত কাঁটা নেই; লেজ পর্যন্ত শ্বাসথলি নেই।",
            "diagnosticFeature": "Other Siluriformes (Pabda or Gulsha)",
            "diagnosticFeatureBn": "অন্যান্য ক্যাটফিশ (পাবদা বা গুলশা)",
            "resultType": "next_step",
            "nextStepId": 4
          }
        ]
      },
      {
        "id": 4,
        "title": "Pabda vs Gulsha Tengra",
        "titleBn": "পাবদা বনাম গুলশা টেংরা",
        "character": "Adipose fin absent & very long anal fin vs adipose fin present & long barbels",
        "characterBn": "চর্বি পাখনা নেই ও দীর্ঘ পায়ু পাখনা বনাম চর্বি পাখনা বিদ্যমান ও দীর্ঘ গোঁফ",
        "couplets": [
          {
            "lead": "Adipose fin completely absent; anal fin very long (50-56 rays); two pairs of barbels; predatory oblique mouth; body laterally compressed.",
            "leadBn": "চর্বি পাখনা সম্পূর্ণ অনুপস্থিত; অত্যন্ত দীর্ঘ পায়ু পাখনা (৫০-৫৬ রশ্মি); ২ জোড়া গোঁফ; শিকারি মুখ; চ্যাপ্টা রুপালি দেহ।",
            "diagnosticFeature": "Ompok pabda — Siluridae, no adipose fin, long anal fin (Pabda)",
            "diagnosticFeatureBn": "ওম্পক পাবদা — পাবদা মাছ",
            "resultType": "species",
            "speciesId": "sp-ompok-pabda"
          },
          {
            "lead": "Adipose fin present and elongate; anal fin shorter (9-12 rays); four pairs of barbels with very long maxillary pair extending beyond pelvic fin origin.",
            "leadBn": "লম্বা চর্বি পাখনা বিদ্যমান; ছোট পায়ু পাখনা (৯-১২ রশ্মি); ৪ জোড়া গোঁফ যার প্রধান জোড়া অত্যন্ত দীর্ঘ এবং শ্রোণী পাখনা ছাড়িয়ে যায়।",
            "diagnosticFeature": "Mystus cavasius — Bagridae, long maxillary barbels (Gulsha)",
            "diagnosticFeatureBn": "মিস্টাস ক্যাভাসিয়াস — গুলশা টেংরা",
            "resultType": "species",
            "speciesId": "sp-mystus-cavasius"
          }
        ]
      }
    ]
  },
  {
    "id": "key-snakeheads-bangladesh",
    "title": "Key to Snakehead Fishes of Bangladesh (Genus Channa)",
    "titleBn": "বাংলাদেশের শোল-টাকি মাছসমূহের শনাক্তকরণ কুঞ্জি (চান্না গণ)",
    "scope": "bangladesh",
    "targetTaxonId": "taxon-channidae",
    "majorGroup": "fishes",
    "taxonScope": "Channidae (Channa striata, Channa punctata)",
    "taxonScopeBn": "চান্নিডি (শোল ও টাকি মাছ)",
    "description": "Focused dichotomous key to the two most common Channa (snakehead) species of Bangladesh freshwater systems: Channa striata (Shol) and Channa punctata (Taki). Based on body size, flank patterning, and dorsal ray count.",
    "descriptionBn": "শারীরিক আকার, দুইপাশের ডোরা বা ফোঁটা এবং পৃষ্ঠ পাখনার রশ্মি সংখ্যার ওপর ভিত্তি করে বাংলাদেশের দুটি সর্বাধিক পরিচিত শোল প্রজাতির (শোল ও টাকি) শনাক্তকরণ কুঞ্জি।",
    "educationalLevel": "introductory",
    "keyType": "dichotomous",
    "sourceReferenceIds": [
      "ref-rahman-2005",
      "ref-bloch-1793"
    ],
    "verificationStatus": "verified",
    "steps": [
      {
        "id": 1,
        "title": "Shol vs Taki Determination",
        "titleBn": "শোল বনাম টাকি নির্ণয়",
        "character": "Body length, oblique crossbars vs spots, and dorsal ray counts",
        "characterBn": "দেহের দৈর্ঘ্য, তির্যক ডোরা বনাম ফোঁটা এবং পৃষ্ঠ পাখনার রশ্মি",
        "couplets": [
          {
            "lead": "Larger species (to 90 cm); flanks with 8-11 prominent, broad oblique dark crossbars alternating with pale interspaces on an olive-brown background; dorsal fin rays 38-45.",
            "leadBn": "বড় প্রজাতি (৯০ সেমি পর্যন্ত); দুইপাশে ৮-১১টি চওড়া গাঢ় তির্যক ডোরা বা ব্যান্ড; পৃষ্ঠ পাখনায় ৩৮-৪৫টি রশ্মি।",
            "diagnosticFeature": "Channa striata — crossbar pattern, large body (Shol)",
            "diagnosticFeatureBn": "চান্না স্ট্রায়াটা — ডোরা দাগ, বড় দেহ (শোল)",
            "resultType": "species",
            "speciesId": "sp-channa-striata"
          },
          {
            "lead": "Smaller species (to 30 cm); flanks with irregular dark spots or blotches, no distinct cross-bars; dorsal fin rays 28-32; head more blunt.",
            "leadBn": "ছোট প্রজাতি (৩০ সেমি পর্যন্ত); দুইপাশে অনিয়মিত কালো ফোঁটা বা ছিটছিট দাগ; পৃষ্ঠ পাখনায় ২৮-৩২টি রশ্মি; তুলনামূলক ভোঁতা মাথা।",
            "diagnosticFeature": "Channa punctata — spotted/blotched, small body (Taki)",
            "diagnosticFeatureBn": "চান্না পাঙ্কটাটা — ফোঁটা দাগ, ছোট দেহ (টাকি)",
            "resultType": "species",
            "speciesId": "sp-channa-punctata"
          }
        ]
      }
    ]
  },
  {
    "id": "key-bangladesh-wetland-herpetofauna",
    "title": "Diagnostic Key to Representative Wetland Amphibians & Reptiles of Bangladesh",
    "titleBn": "বাংলাদেশের জলাভূমির উভচর ও সরীসৃপদের প্রামাণ্য শনাক্তকরণ কুঞ্জি",
    "scope": "bangladesh",
    "targetTaxonId": "taxon-chordata",
    "majorGroup": "vertebrates",
    "taxonScope": "Amphibia & Reptilia (Wetland Herpetofauna of Bangladesh)",
    "taxonScopeBn": "উভচর ও সরীসৃপ (বাংলাদেশের জলাভূমির হার্পেটোফনা)",
    "description": "Dichotomous morphological key distinguishing representative wetland and coastal amphibians and reptiles of Bangladesh, including anurans, crocodilians, sea turtles, and venomous wetland elapids.",
    "descriptionBn": "বাংলাদেশের জলাভূমি ও উপকূলীয় অঞ্চলের উভচর ও সরীসৃপ প্রাণী যেমন ব্যাঙ, কুমির, সামুদ্রিক কচ্ছপ এবং বিষধর সাপের সুনির্দিষ্ট দ্বিপদী শনাক্তকরণ কুঞ্জি।",
    "educationalLevel": "intermediate",
    "keyType": "dichotomous",
    "sourceReferenceIds": [
      "ref-iucn-bd-2015",
      "ref-amphibiaweb-2026",
      "ref-reptile-database-2026"
    ],
    "verificationStatus": "verified",
    "steps": [
      {
        "id": 1,
        "title": "Skin Permeability & Germ Layer Shell Architecture",
        "titleBn": "ত্বকের ভেদ্যতা ও ডিমের খোসার গঠন",
        "character": "Moist permeable skin without scales vs dry keratinized scaled integument or bony shell",
        "characterBn": "আঁইশবিহীন আর্দ্র ত্বক বনাম আঁইশযুক্ত শুষ্ক ত্বক বা শক্ত খোলস",
        "couplets": [
          {
            "lead": "Integument smooth or glandular-warty, moist and highly permeable to water and gases, lacking epidermal scales and claws; anamniotic eggs enveloped in gelatinous capsules laid in water or moist microhabitats; biphasic aquatic larval stage (tadpole) typically present.",
            "leadBn": "ত্বক মসৃণ বা গ্রন্থিময়-খসখসে, আর্দ্র এবং গ্যাস ও পানির জন্য অত্যন্ত ভেদ্য, বহিস্থ আঁইশ ও নখরবিহীন; পানিতে জেলিযুক্ত অ্যানামনিওটিক ডিম পাড়ে; উভচর জীবনচক্রে জলজ ব্যাঙাচি দশা বিদ্যমান।",
            "diagnosticFeature": "Class Amphibia (Anura: Frogs and Toads)",
            "diagnosticFeatureBn": "উভচর শ্রেণি (অ্যানুরা: ব্যাঙ)",
            "resultType": "next_step",
            "nextStepId": 2
          },
          {
            "lead": "Integument dry, covered with keratinized epidermal scales, shields, or a bony composite shell; true claws on digits (when limbs present); amniotic cleidoic eggs with calcareous or leathery protective shells (or viviparous); aquatic gill-bearing larval stage absent.",
            "leadBn": "ত্বক শুষ্ক, কেরাটিনযুক্ত বহিস্ত্বকের আঁইশ বা অস্থিময় খোলস দ্বারা আবৃত; নখরযুক্ত আঙুল; শক্ত বা চামড়াসদৃশ খোসাযুক্ত অ্যামনিওটিক ডিম (অথবা জরায়ুজ); জলজ ফুলকাযুক্ত লার্ভা দশা অনুপস্থিত।",
            "diagnosticFeature": "Class Reptilia (Crocodylia, Testudines, Squamata)",
            "diagnosticFeatureBn": "সরীসৃপ শ্রেণি (কুমির, কচ্ছপ, সাপ)",
            "resultType": "next_step",
            "nextStepId": 3
          }
        ]
      },
      {
        "id": 2,
        "title": "Wetland Amphibian Determination",
        "titleBn": "জলাভূমির উভচর নির্ণয়",
        "character": "Glandular skin ridges and full webbed feet vs heavily warty skin and prominent parotoid glands",
        "characterBn": "ত্বকের অনুদৈর্ঘ্য খাঁজ ও পূর্ণ লিপ্তপাদ বনাম কাঁটাযুক্ত গ্রন্থিময় আঁচিল ও প্যারোটয়েড গ্রন্থি",
        "couplets": [
          {
            "lead": "Dorsal skin smooth with distinct longitudinal glandular skin folds (folds of dermal ridges); toes fully webbed for rapid propulsion; pointed snout with distinct vomerine teeth; large semiaquatic predator of rice paddies, haors, and floodplain marshes.",
            "leadBn": "পৃষ্ঠীয় ত্বকে সুস্পষ্ট অনুদৈর্ঘ্য খাঁজ বা রেখা উপস্থিত; সাঁতারের জন্য আঙুল সম্পূর্ণ লিপ্তপাদ; লম্বাটে চোখা মুখ ও ভোমেরাইন দাঁত; হাওর, ধানক্ষেত ও প্লাবনভূমির বৃহৎ শিকারি জলজ ব্যাঙ।",
            "diagnosticFeature": "Hoplobatrachus tigerinus — Dicroglossidae, fully webbed, longitudinal dorsal ridges (Indian Bullfrog / কোলাব্যাঙ)",
            "diagnosticFeatureBn": "হপ্লোব্যাট্রাকাস টাইগেরিনাস — কোলাব্যাঙ বা সোনা ব্যাঙ",
            "resultType": "species",
            "speciesId": "sp-hoplobatrachus-tigerinus"
          },
          {
            "lead": "Dorsal skin heavily tuberculated with black-spined warts; prominent elevated black cornified cranial ridges; large kidney-shaped (reniform) parotoid glands behind eyes secreting bufotoxin; toes only partially webbed; nocturnal terrestrial-wetland generalist.",
            "leadBn": "পৃষ্ঠীয় ত্বক কালো কাঁটাযুক্ত আঁচিলে আবৃত; মাথায় উঁচু কালো অস্থিময় খাঁজ; চোখের পেছনে বুফোটক্সিন নিঃসরণকারী বৃহৎ কিডনি-আকৃতির প্যারোটয়েড গ্রন্থি; আংশিক লিপ্তপাদ; সর্বব্যাপী স্থলজ ও আর্দ্র জলাভূমির কুনোব্যাঙ।",
            "diagnosticFeature": "Duttaphrynus melanostictus — Bufonidae, black cranial ridges, parotoid glands (Asian Common Toad / কুনোব্যাঙ)",
            "diagnosticFeatureBn": "দত্তাফ্রাইনাস মেলানোস্টিকটাস — সাধারণ কুনোব্যাঙ",
            "resultType": "species",
            "speciesId": "sp-duttaphrynus-melanostictus"
          }
        ]
      },
      {
        "id": 3,
        "title": "Reptilian Body Architecture: Shell vs Non-Shelled",
        "titleBn": "সরীসৃপের দৈহিক গঠন: খোলস বনাম খোলসবিহীন",
        "character": "Rigid bony shell with paddle-shaped flippers vs tooth-bearing jaws without a shell",
        "characterBn": "দৃঢ় অস্থিময় খোলস ও বৈঠার মতো ফ্লিপার বনাম দাঁতযুক্ত চোয়াল ও খোলসবিহীন দেহ",
        "couplets": [
          {
            "lead": "Body encased in a rigid bony and keratinous composite shell consisting of dorsal carapace and ventral plastron; jaws toothless and sheathed in sharp keratinous rhamphotheca; limbs modified into paddle-shaped flippers for pelagic marine locomotion.",
            "leadBn": "দেহ শক্ত অস্থিময় পৃষ্ঠীয় খোলস (ক্যারাপেস) ও অঙ্কীয় প্লাস্ট্রন দ্বারা সুরক্ষিত; চোয়াল দাঁতবিহীন ও ধারালো কেরাটিন চঞ্চু দ্বারা গঠিত; অগ্র ও পশ্চাৎ পদ সমুদ্রে সাঁতারের জন্য বৈঠাসদৃশ ফ্লিপারে রূপান্তরিত।",
            "diagnosticFeature": "Order Testudines: Family Cheloniidae (Marine Sea Turtles)",
            "diagnosticFeatureBn": "টেস্টুডিনেস বর্গ: চেলোনিডি পরিবার (সামুদ্রিক কচ্ছপ)",
            "resultType": "next_step",
            "nextStepId": 4
          },
          {
            "lead": "Body unencased, devoid of a dorsal-ventral bony shell; jaws equipped with true thecodont teeth in alveoli or acrodont/pleurodont dentition; limbs either robust and clawed or completely absent (limbless).",
            "leadBn": "দেহ খোলসবিহীন; চোয়ালে প্রকৃত দাঁত বিদ্যমান; হয় নখরযুক্ত শক্তিশালী চারটি পা উপস্থিত অথবা পা সম্পূর্ণ অনুপস্থিত।",
            "diagnosticFeature": "Orders Crocodylia and Squamata",
            "diagnosticFeatureBn": "ক্রোকোডিলিয়া ও স্কোয়ামাটা বর্গ",
            "resultType": "next_step",
            "nextStepId": 5
          }
        ]
      },
      {
        "id": 4,
        "title": "Marine Sea Turtle Determination",
        "titleBn": "সামুদ্রিক কচ্ছপ প্রজাতি নির্ণয়",
        "character": "4 pairs of costal scutes & 1 pair of prefrontals vs 6+ pairs of costals & 2 pairs of prefrontals",
        "characterBn": "৪ জোড়া কোস্টাল স্কুট ও ১ জোড়া প্রি-ফ্রন্টাল বনাম ৬ বা ততোধিক জোড়া কোস্টাল স্কুট ও ২ জোড়া প্রি-ফ্রন্টাল",
        "couplets": [
          {
            "lead": "Carapace smooth, heart-shaped (cordiform) with exactly 4 pairs of lateral costal (pleural) scutes; single pair of elongate prefrontal scales between eyes; jaws finely serrated for grazing marine sea-grasses and macroalgae in coastal Bay of Bengal.",
            "leadBn": "ক্যারাপেস মসৃণ ও হৃদপিণ্ডাকার, ঠিক ৪ জোড়া পার্শ্বীয় কোস্টাল স্কুট বিদ্যমান; চোখের মাঝে ঠিক ১ জোড়া প্রি-ফ্রন্টাল আঁইশ; সামুদ্রিক শৈবাল ও ঘাস খাওয়ার জন্য নিচের চোয়ালে সূক্ষ্ম করাতের মতো খাঁজ।",
            "diagnosticFeature": "Chelonia mydas — Cheloniidae, 4 pairs costals, 1 pair prefrontals (Green Sea Turtle / সবুজ সাগর কাছিম)",
            "diagnosticFeatureBn": "চেলোনিয়া মাইডাস — সবুজ সাগর কাছিম",
            "resultType": "species",
            "speciesId": "sp-chelonia-mydas"
          },
          {
            "lead": "Carapace broad, high-domed and nearly circular with 6 or more (typically 6-9) pairs of lateral costal scutes; two pairs of prefrontal scales between eyes; smaller adult size (to 70 cm), olive-grey coloration; omnivorous benthic predator nesting along Cox's Bazar and St. Martin's beaches.",
            "leadBn": "ক্যারাপেস চওড়া ও গোলাকার এবং ৬ বা ততোধিক (সাধারণত ৬-৯) জোড়া কোস্টাল স্কুটযুক্ত; চোখের মাঝে ২ জোড়া প্রি-ফ্রন্টাল আঁইশ; জলপাই-ধূসর বর্ণ; কক্সবাজার ও সেন্টমার্টিন উপকূলে ডিমপাড়ে।",
            "diagnosticFeature": "Lepidochelys olivacea — Cheloniidae, 6-9 pairs costals, 2 pairs prefrontals (Olive Ridley Sea Turtle / জলপাইরঙা সাগর কাছিম)",
            "diagnosticFeatureBn": "লেপিডোকিলিস অলিভাসিয়া — জলপাইরঙা সাগর কাছিম",
            "resultType": "species",
            "speciesId": "sp-lepidochelys-olivacea"
          }
        ]
      },
      {
        "id": 5,
        "title": "Quadrupedal Crocodylians vs Limbless Elapid Serpents",
        "titleBn": "চতুষ্পদ কুমির বনাম পা-হীন এলাপিড সাপ",
        "character": "Heavy quadrupedal osteodermal armor & webbed limbs vs limbless elongated body with venom apparatus",
        "characterBn": "ভারী অস্থিময় বর্মযুক্ত চতুষ্পদ দেহ বনাম পা-হীন দীর্ঘায়িত দেহ ও বিষদন্ত",
        "couplets": [
          {
            "lead": "Large quadrupedal amphibious reptile with heavy bony dorsal osteoderms, powerful laterally flattened tail, webbed hindfeet, and elongate snout lined with conical thecodont teeth in sockets; nostrils situated dorsally at snout tip with palatal valves.",
            "leadBn": "পিঠে শক্ত অস্থিময় প্লেট বা অস্টিওডার্মযুক্ত বিশালাকার চারপেয়ে সরীসৃপ; শক্তিশালী চ্যাপ্টা সাঁতারের লেজ; চোয়ালে সকেটে বসানো মজবুত শঙ্কু আকৃতির দাঁত; নাকের ছিদ্র স্নাউটের অগ্রভাগে অবস্থিত।",
            "diagnosticFeature": "Order Crocodylia: Gavialidae & Crocodylidae",
            "diagnosticFeatureBn": "ক্রোকোডিলিয়া বর্গ: গ্যাভিয়ালিডি ও ক্রোকোডাইলিডি",
            "resultType": "next_step",
            "nextStepId": 6
          },
          {
            "lead": "Body extremely elongate, cylindrical or laterally compressed, completely lacking limbs, pectoral girdle, and external ear openings; covered in smooth overlapping epidermal scales; equipped with anterior proteroglyphous hollow venom fangs.",
            "leadBn": "দেহ অত্যন্ত দীর্ঘায়িত, নলাকার বা দুইপাশে চ্যাপ্টা; পা, বক্ষচক্র ও বহিকর্ণ সম্পূর্ণ অনুপস্থিত; চকচকে বহিস্থ আঁইশে ঢাকা; উপরের চোয়ালের সামনে স্থায়ী বিষদাঁত বিদ্যমান।",
            "diagnosticFeature": "Order Squamata: Family Elapidae (Cobras and Sea Snakes)",
            "diagnosticFeatureBn": "স্কোয়ামাটা বর্গ: এলাপিডি পরিবার (গোখরা ও সামুদ্রিক সাপ)",
            "resultType": "next_step",
            "nextStepId": 7
          }
        ]
      },
      {
        "id": 6,
        "title": "Crocodilian Determination: Gharial vs Saltwater Crocodile",
        "titleBn": "কুমির প্রজাতি নির্ণয়: ঘড়িয়াল বনাম লোনাপানির কুমির",
        "character": "Extremely slender tubular snout specialized for fish vs heavy broad triangular snout",
        "characterBn": "মাছ শিকারের জন্য অত্যন্ত সরু নলাকার চঞ্চু বনাম চওড়া ভারী ত্রিভুজাকার চোয়াল",
        "couplets": [
          {
            "lead": "Snout extremely elongated, narrow, and cylindrical with 27-29 interlocking needle-sharp teeth on each side of upper jaw; adult males develop a conspicuous bulbous cartilaginous ghara over nostrils; riverine piscivore of the Padma and Jamuna river systems.",
            "leadBn": "চোয়াল অত্যন্ত লম্বা, সরু ও নলাকার যাতে উপরের চোয়ালের প্রতি পাশে ২৭-২৯টি ধারালো দাঁত থাকে; প্রাপ্তবয়স্ক পুরুষের নাকের ওপর কলসির মতো ঘড়া থাকে; পদ্মা ও যমুনা নদীর মিঠাপানির মাছখেকো কুমির।",
            "diagnosticFeature": "Gavialis gangeticus — Gavialidae, slender tubular snout, ghara (Gharial / ঘড়িয়াল)",
            "diagnosticFeatureBn": "গ্যাভিয়ালিস গ্যাঞ্জেটিকাস — ঘড়িয়াল",
            "resultType": "species",
            "speciesId": "sp-gavialis-gangeticus"
          },
          {
            "lead": "Snout broad, robust, and triangular with a pair of distinct ridges running from eyes along snout; 4th mandibular tooth fitting into a distinct notch in upper jaw, clearly visible when mouth is closed; world's largest living reptile, apex predator inhabiting the Sundarbans mangrove estuaries.",
            "leadBn": "চোয়াল চওড়া, শক্তিশালী ও ত্রিভুজাকার; নিচের চোয়ালের ৪র্থ দাঁতটি মুখ বন্ধ থাকলেও উপরের খাঁজে সুস্পষ্ট দৃশ্যমান থাকে; পৃথিবীর বৃহত্তম জীবিত সরীসৃপ; সুন্দরবনের লোনাপানির ম্যানগ্রোভ ও মোহনার শীর্ষ শিকারি।",
            "diagnosticFeature": "Crocodylus porosus — Crocodylidae, broad triangular snout, 4th tooth notch (Saltwater Crocodile / লোনাপানির কুমির)",
            "diagnosticFeatureBn": "ক্রোকোডাইলাস পোরোসাস — লোনাপানির কুমির",
            "resultType": "species",
            "speciesId": "sp-crocodylus-porosus"
          }
        ]
      },
      {
        "id": 7,
        "title": "Marine Hydrophiine vs Hood-Bearing Terrestrial/Wetland Elapids",
        "titleBn": "সামুদ্রিক সাপ বনাম ফণা তোলা স্থলজ/জলাভূমির গোখরা সাপ",
        "character": "Paddle-shaped flattened tail and reduced ventrals vs cylindrical tail and broad ventrals with hood",
        "characterBn": "বৈঠার মতো চ্যাপ্টা লেজ ও ক্ষুদ্র বেলি আঁইশ বনাম নলাকার লেজ, চওড়া বেলি আঁইশ ও বিস্তারযোগ্য ফণা",
        "couplets": [
          {
            "lead": "Tail strongly compressed laterally into an oar-like paddle for swimming; belly scales (ventrals) severely vestigial and narrow; striking bicolor pattern with dark brown/black dorsum and bright yellow ventral half; fully marine pelagic serpent in the Bay of Bengal.",
            "leadBn": "লেজ দুইপাশ থেকে চ্যাপ্টা হয়ে সাঁতারের জন্য বৈঠার আকার ধারণ করেছে; পেটের আঁইশ অত্যন্ত ক্ষুদ্র ও অনুন্নত; পিঠের দিক গাঢ় বাদামি/কালো এবং পেটের দিক উজ্জ্বল হলুদ; বঙ্গোপসাগরের পূর্ণ সামুদ্রিক বিষধর সাপ।",
            "diagnosticFeature": "Hydrophis platurus — Elapidae: Hydrophiinae, laterally flattened oar-like tail (Yellow-bellied Sea Snake / হলুদপেটি সামুদ্রিক সাপ)",
            "diagnosticFeatureBn": "হাইড্রোফিস প্লাটুরাস — হলুদপেটি সামুদ্রিক সাপ",
            "resultType": "species",
            "speciesId": "sp-hydrophis-platurus"
          },
          {
            "lead": "Tail circular in cross-section and tapering, not paddle-like; ventral belly scales broad and extending across entire abdominal width for terrestrial creeping; cervical ribs capable of spreading an inflatable defensive neck hood.",
            "leadBn": "লেজ গোল ও ক্রমশ সরু, বৈঠাসদৃশ নয়; মাটিতে চলার জন্য পেটে আড়াআড়ি বিস্তৃত চওড়া আঁইশ উপস্থিত; ঘাড়ের পাঁজর প্রসারিত করে প্রতিরক্ষামূলক ফণা তুলতে সক্ষম।",
            "diagnosticFeature": "Genus Naja & Ophiophagus (Terrestrial/Wetland Cobras)",
            "diagnosticFeatureBn": "নাজা ও ওফিওফ্যাগাস গণ (গোখরা ও শঙ্খচূড়)",
            "resultType": "next_step",
            "nextStepId": 8
          }
        ]
      },
      {
        "id": 8,
        "title": "Cobra Determination: Spectacled Cobra vs King Cobra",
        "titleBn": "গোখরা প্রজাতি নির্ণয়: খইয়া গোখরা বনাম শঙ্খচূড়/রাজগোখরা",
        "character": "Spectacle-shaped hood mark and no occipital shields vs chevron hood markings and large occipital shields",
        "characterBn": "ফণায় চশমাসদৃশ দাগ ও অক্সিপিটাল আঁইশহীন বনাম শেভরন ডোরা ও মাথার পেছনে বৃহৎ অক্সিপিটাল আঁইশ",
        "couplets": [
          {
            "lead": "Dorsal aspect of expanded hood marked with a prominent U-, O-, or spectacle-shaped white emblem surrounded by a dark border; top of head lacking enlarged occipital scales behind parietals; adult length typically 1.2 to 1.8 meters; common near wetland agricultural fields and human habitations.",
            "leadBn": "ফণার পেছনে স্পষ্ট সাদা চশমা বা 'U' আকৃতির দাগ বিদ্যমান; মাথার তালুতে প্যারাইটাল আঁইশের পেছনে অতিরিক্ত বৃহৎ অক্সিপিটাল আঁইশ থাকে না; দৈর্ঘ্য ১.২ থেকে ১.৮ মিটার; ফসলের ক্ষেত ও জলাভূমির কাছাকাছি সচরাচর দৃশ্যমান।",
            "diagnosticFeature": "Naja naja — Elapidae, spectacles marking on hood, no occipitals (Spectacled Cobra / খইয়া গোখরা)",
            "diagnosticFeatureBn": "নাজা নাজা — খইয়া গোখরা",
            "resultType": "species",
            "speciesId": "sp-naja-naja"
          },
          {
            "lead": "Dorsal aspect of hood narrow and marked with light chevron-shaped chevron bands; pair of distinct, very large occipital shields present on head crown behind parietal scales; world's longest venomous snake (3 to 5.5 m), specialized ophiophagous predator inhabiting wetland margins, forests, and Sundarbans mangroves.",
            "leadBn": "ফণা তুলনামূলক সরু ও পেছনের দিকে হালকা শেভরন বা ধনুকাকার ডোরা দাগযুক্ত; মাথার তালুতে প্যারাইটাল আঁইশের ঠিক পেছনে ১ জোড়া বিশাল অক্সিপিটাল আঁইশ উপস্থিত; পৃথিবীর দীর্ঘতম বিষধর সাপ (৩-৫.৫ মিটার); সাপখেকো বিশিষ্ট শিকারি।",
            "diagnosticFeature": "Ophiophagus hannah — Elapidae, large occipital shields, chevron markings, massive length (King Cobra / শঙ্খচূড় / রাজগোখরা)",
            "diagnosticFeatureBn": "ওফিওফ্যাগাস হানা — শঙ্খচূড় বা রাজগোখরা",
            "resultType": "species",
            "speciesId": "sp-ophiophagus-hannah"
          }
        ]
      }
    ]
  },
  {
    "id": "key-bangladesh-freshwater-molluscs",
    "title": "Diagnostic Key to Common Freshwater Molluscs of Bangladesh",
    "titleBn": "বাংলাদেশের সাধারণ স্বাদু পানির মলাস্কার শনাক্তকরণ কুঞ্জি",
    "scope": "bangladesh",
    "targetTaxonId": "taxon-mollusca",
    "majorGroup": "mollusca",
    "taxonScope": "Freshwater & Wetland Gastropoda and Bivalvia of Bangladesh",
    "taxonScopeBn": "বাংলাদেশের স্বাদু পানি ও জলাভূমির গ্যাস্ট্রোপোডা ও বাইভালভিয়া",
    "description": "Authoritative dichotomous identification key distinguishing common freshwater, wetland, and estuarine snails and bivalve molluscs of Bangladesh floodplains based on shell symmetry, opercular anatomy, whorl spire structure, and respiratory adaptations.",
    "descriptionBn": "খোলসের প্রতিসাম্য, অপারকুলামের উপস্থিতি, স্পায়ারের গঠন ও শ্বসন অভিযোজনের ওপর ভিত্তি করে বাংলাদেশের স্বাদু পানি, প্লাবনভূমি ও মোহনা অঞ্চলের সাধারণ শামুক ও ঝিনুকের প্রামাণ্য শনাক্তকরণ কুঞ্জি।",
    "educationalLevel": "intermediate",
    "keyType": "dichotomous",
    "sourceReferenceIds": [
      "ref-siddiqui-2007-mollusca",
      "ref-hickman-2020"
    ],
    "verificationStatus": "verified",
    "steps": [
      {
        "id": 1,
        "title": "Shell Morphology: Bivalved vs Univalved Coiled Shell",
        "titleBn": "খোলসের রূপতত্ত্ব: দ্বি-কপাটিক ঝিনুক বনাম এককুণ্ডলী শামুক",
        "character": "Number of shell valves and symmetry of body plan",
        "characterBn": "খোলসের কপাটিকার সংখ্যা ও শারীরিক প্রতিসাম্য",
        "couplets": [
          {
            "lead": "Shell composed of two laterally compressed calcified valves hinged dorsally by an elastic ligament; head, tentacles, and radula completely absent; ciliated ctenidia functioning in both filter-feeding and respiration; wedge-shaped muscular burrowing foot.",
            "leadBn": "দেহ দুটি পার্শ্বীয় কপাটিকা দ্বারা আবৃত যা লিগামেন্ট দ্বারা যুক্ত; মস্তক, কর্ষিকা ও র্যাডুলা অনুপস্থিত; সিলিয়াযুক্ত ফুলকা দ্বারা ছাঁকন ও শ্বসন সম্পন্ন হয়; কীলকাকৃতির পেশিবহুল পা দ্বারা তলদেশে গর্ত করে।",
            "diagnosticFeature": "Bivalved shell, lateral compression, filter-feeding, wedge foot",
            "diagnosticFeatureBn": "দ্বি-কপাটিক খোলস, পার্শ্বীয় চ্যাপ্টা দেহ, ছাঁকনভোজী, কীলকাকৃতি পা",
            "resultType": "species",
            "speciesId": "sp-lamellidens-marginalis",
            "rationaleEn": "Resolves to Lamellidens marginalis (Freshwater unionid mussel / ঝিনুক)",
            "rationaleBn": "ল্যামেলিডেন্স মার্জিনালিস (স্বাদু পানির সাধারণ ঝিনুক)"
          },
          {
            "lead": "Shell univalved, typically spirally coiled or neritiform; distinct cephalic region with sensory tentacles and basal eyes; muscular ventral foot broad and flattened for crawling; radular rasping organ present in buccal cavity.",
            "leadBn": "খোলস একক এবং সর্পিলাকারে কুণ্ডলিত বা অর্ধবৃত্তাকার; চোখ ও কর্ষিকাসহ সুনির্দিষ্ট মস্তক বিদ্যমান; চলাচলের জন্য চ্যাপ্টা পেশিবহুল পদ; মুখগহ্বরে র্যাডুলা বিদ্যমান।",
            "diagnosticFeature": "Univalved coiled shell, distinct head with radula, ventral creeping foot",
            "diagnosticFeatureBn": "একক কুণ্ডলিত খোলস, র্যাডুলাযুক্ত মস্তক, চ্যাপ্টা পদ",
            "resultType": "next_step",
            "nextStepId": 2
          }
        ]
      },
      {
        "id": 2,
        "title": "Opercular Apparatus: Operculate Aquatic Snails vs Pulmonate Land Snails",
        "titleBn": "অপারকুলামের উপস্থিতি: অপারকুলেট জলজ শামুক বনাম পালমোনেট শামুক",
        "character": "Presence or absence of protective opercular plate closing the aperture",
        "characterBn": "মুখছিদ্র ঢাকার জন্য অপারকুলামের উপস্থিতি বা অনুপস্থিতি",
        "couplets": [
          {
            "lead": "Protective operculum (calcareous or horny disc) firmly attached to dorsal posterior foot, tightly sealing shell aperture when soft body retracts; primarily aquatic or amphibious habit.",
            "leadBn": "পায়ে অপারকুলাম বা ঢাকনা যুক্ত থাকে যা শামুক খোলসের ভেতর ঢুকলে মুখছিদ্র সম্পূর্ণ বন্ধ করে দেয়; মূলত জলজ বা উভচর স্বভাব।",
            "diagnosticFeature": "Operculum present on foot, aquatic/amphibious gill-bearing snail",
            "diagnosticFeatureBn": "অপারকুলাম বিদ্যমান, জলজ/উভচর ফুলকাযুক্ত শামুক",
            "resultType": "next_step",
            "nextStepId": 3
          },
          {
            "lead": "True operculum absent; terrestrial or wetland air-breathing pulmonate snail; vascularized mantle cavity functioning as a lung with contractile pneumostome; shell very large, elongate-conical (up to 12-15 cm) with flammulated brownish zigzag bands; voracious invasive herbivore.",
            "leadBn": "প্রকৃত অপারকুলাম অনুপস্থিত; স্থলচর বা আর্দ্র ভূমির ফুসফুসী শামুক; ম্যান্টল গহ্বর ফুসফুসে রূপান্তরিত; খোলস অত্যন্ত বৃহৎ (১২-১৫ সেমি), কোণাকার এবং বাদামি জিগজ্যাগ দাগযুক্ত; আগ্রাসী ক্ষতিকর শাকাহারী প্রজাতি।",
            "diagnosticFeature": "No operculum, pneumostome lung, gigantic conical striped shell",
            "diagnosticFeatureBn": "অপারকুলামবিহীন, নিউমোস্টোম ফুসফুস, বিশাল কোণাকার ডোরাকাটা খোলস",
            "resultType": "species",
            "speciesId": "sp-achatina-fulica",
            "rationaleEn": "Resolves to Achatina fulica (Giant African snail / আফ্রিকার বিশাল শামুক)",
            "rationaleBn": "অ্যাকাটিনা ফুলিকা (আফ্রিকার বিশাল শামুক)"
          }
        ]
      },
      {
        "id": 3,
        "title": "Spire Architecture & Respiratory Adaptations in Aquatic Operculates",
        "titleBn": "জলজ অপারকুলেটদের স্পায়ার গঠন ও শ্বসন অভিযোজন",
        "character": "Shell shape (globose vs conic) and dual respiration adaptations",
        "characterBn": "খোলসের আকৃতি (গোলাকার বনাম কোণাকার) ও দ্বৈত শ্বসন অঙ্গ",
        "couplets": [
          {
            "lead": "Shell large, ventricose and globose with greatly inflated body whorl; calcareous concentric operculum with central nucleus; amphibious respiration via right vascularized pulmonary sac and left ctenidium (comb gill); long extensible respiratory siphon; common in wetlands, rice paddies, and ponds.",
            "leadBn": "খোলস বৃহদাকার, স্ফীত ও গোলগাল; কেন্দ্রিক খাঁজযুক্ত ক্যালসিয়াম নির্মিত অপারকুলাম; ডান ফুসফুসীয় থলি ও বাম ফুলকা দ্বারা দ্বৈত শ্বসন সক্ষম; দীর্ঘ প্রসার্য সাইফন; ধানখেত ও বিল-ঝিলে অত্যন্ত সুলভ।",
            "diagnosticFeature": "Globose shell, calcareous operculum, dual respiration, long siphon",
            "diagnosticFeatureBn": "গোলাকার স্ফীত খোলস, ক্যালসিয়াম অপারকুলাম, দ্বৈত শ্বসন, দীর্ঘ সাইফন",
            "resultType": "species",
            "speciesId": "sp-pila-globosa",
            "rationaleEn": "Resolves to Pila globosa (Asian apple snail / পিলা বা আপেল শামুক)",
            "rationaleBn": "পাইলা গ্লোবোসা (আপেল শামুক)"
          },
          {
            "lead": "Shell elongate-conical or low-neritiform, not strongly globose; horny or calcareous operculum; respiration aquatic via ctenidia without specialized pulmonary sac.",
            "leadBn": "খোলস লম্বাটে-কোণাকার অথবা অর্ধবৃত্তাকার, অতিরিক্ত স্ফীত নয়; পাতলা বা ক্যালসিয়াম অপারকুলাম; বিশেষায়িত ফুসফুসীয় থলিবিহীন কেবল জলজ ফুলকা দ্বারা শ্বসন।",
            "diagnosticFeature": "Conical or neritiform shell, aquatic ctenidial respiration",
            "diagnosticFeatureBn": "কোণাকার বা নেরিটিফর্ম খোলস, ফুলকা শ্বসন",
            "resultType": "next_step",
            "nextStepId": 4
          }
        ]
      },
      {
        "id": 4,
        "title": "Freshwater River Snail vs Estuarine Mangrove Nerite",
        "titleBn": "নদী ও বিলের গেঁড়ি শামুক বনাম মোহনার নেরিটিড শামুক",
        "character": "Shell spire elevation, habitat, and developmental mode",
        "characterBn": "স্পায়ারের উচ্চতা, বাসস্থান ও জনন পদ্ধতি",
        "couplets": [
          {
            "lead": "Shell elevated, ovate-conical with 5-6 rounded whorls marked by green-to-olive spiral color bands; apex acute; thin horny operculum with concentric growth rings; ovoviviparous (females give birth to shelled juveniles); abundant in slow rivers, haors, and oxbow lakes.",
            "leadBn": "খোলস উচুঁ, ডিম্বাকার-কোণাকার এবং ৫-৬টি গোলাকার প্যাঁচযুক্ত; সবুজ বা জলপাই রঙের অনুদৈর্ঘ্য বলয় রেখা; তীক্ষ্ণ শীর্ষবিন্দু; পাতলা শৃঙ্গীয় অপারকুলাম; জরায়ুজ বা ওভোভিভিপ্যারাস (মা শামুক জীবন্ত বাচ্চা প্রসব করে); নদী ও হাওরে প্রচুর দেখা যায়।",
            "diagnosticFeature": "Elevated conic shell, spiral color bands, viviparous, thin horny operculum",
            "diagnosticFeatureBn": "উঁচু কোণাকার খোলস, ডোরাকাটা প্যাঁচ, বাচ্চা প্রসবকারী, পাতলা অপারকুলাম",
            "resultType": "species",
            "speciesId": "sp-bellamya-bengalensis",
            "rationaleEn": "Resolves to Bellamya bengalensis (Banded pond snail / গেঁড়ি শামুক)",
            "rationaleBn": "বেলাআমিয়া বেঙ্গালেনসিস (গেঁড়ি শামুক)"
          },
          {
            "lead": "Shell low, hemispherical and limpet-like with flattened spire; dorsal surface violet to purplish-black with fine spiral striae; aperture semi-lunar with D-shaped calcareous operculum bearing internal articulating apophysis; tightly adheres to mangrove roots and mudflats in the Sundarbans.",
            "leadBn": "খোলস নিচু, অর্ধ-গোলাকার এবং কুণ্ডলীবিহীন বা চ্যাপ্টা; পৃষ্ঠদেশ বেগুনি-কালো এবং সূক্ষ্ম খাঁজযুক্ত; ডি-আকৃতির ক্যালসিয়াম অপারকুলাম; সুন্দরবনের ম্যানগ্রোভের শ্বাসমূল ও কাদাচরে শক্তভাবে সেঁটে থাকে।",
            "diagnosticFeature": "Hemispherical limpet-like shell, violet color, D-shaped operculum, mangrove mudflats",
            "diagnosticFeatureBn": "অর্ধবৃত্তাকার চ্যাপ্টা খোলস, বেগুনি রঙ, ডি-অপারকুলাম, ম্যানগ্রোভ কাদাচর",
            "resultType": "species",
            "speciesId": "sp-dostia-violacea",
            "rationaleEn": "Resolves to Dostia violacea (Violet nerite / বেগুনি নেরিটিড শামুক)",
            "rationaleBn": "ডসটিয়া ভায়োলেসিয়া (বেগুনি নেরিটিড শামুক)"
          }
        ]
      }
    ]
  },
  {
    "id": "key-bangladesh-wetland-decapods",
    "title": "Diagnostic Key to Wetland & Estuarine Decapod Crustaceans of Bangladesh",
    "titleBn": "বাংলাদেশের জলাভূমি ও মোহনা অঞ্চলের ডেকাপোডা ক্রাস্টাশীয় শনাক্তকরণ কুঞ্জি",
    "scope": "bangladesh",
    "targetTaxonId": "taxon-decapoda",
    "majorGroup": "arthropoda",
    "taxonScope": "Order Decapoda: Prawns, Shrimps & Crabs of Bangladesh Wetlands",
    "taxonScopeBn": "অর্ডার ডেকাপোডা: বাংলাদেশের জলাভূমির চিংড়ি ও কাঁকড়া",
    "description": "Diagnostic morphological key differentiating commercial and ecologically prominent wetland decapods of Bangladesh including giant freshwater river prawns, tiger shrimps, mangrove mud crabs, and freshwater paddy crabs.",
    "descriptionBn": "গলদা ও বাগদা চিংড়ি, সুন্দরবনের শিলা কাঁকড়া এবং ধানখেতের মিঠা পানির কাঁকড়াসহ বাংলাদেশের অর্থনৈতিক ও পরিবেশগতভাবে গুরুত্বপূর্ণ ডেকাপোডা ক্রাস্টাশিয়া শনাক্তকরণের দ্বি-শাখ কুঞ্জি।",
    "educationalLevel": "intermediate",
    "keyType": "dichotomous",
    "sourceReferenceIds": [
      "ref-iucn-bd-2015-crustaceans",
      "ref-siddiqui-2008-arthropoda"
    ],
    "verificationStatus": "verified",
    "steps": [
      {
        "id": 1,
        "title": "Body Form: Elongated Natant Prawn/Shrimp vs Depressed Brachyuran Crab",
        "titleBn": "শারীরিক গঠন: লম্বা সাঁতারু চিংড়ি বনাম চ্যাপ্টা কাঁকড়া",
        "character": "Abdomen development and locomotion morphology",
        "characterBn": "উদরের গঠন ও চলন অঙ্গের রূপতত্ত্ব",
        "couplets": [
          {
            "lead": "Body laterally compressed and subcylindrical; abdomen long, muscular, extended posteriorly with well-developed swimming pleopods and fan-like uropods/telson; carapace equipped with a prominent anterior serrated rostrum; adapted for swimming and benthic foraging.",
            "leadBn": "পার্শ্বীয়ভাবে চ্যাপ্টা নলাকার দেহ; দীর্ঘ পেশিবহুল প্রসারিত উদর যাতে সাঁতারু প্লিওপড ও লেজের পাখা (টেলসন) বিদ্যমান; মস্তকে খাঁজকাটা করাতাকৃতি রস্ট্রাম; সাঁতার ও তলদেশে বিচরণের উপযোগী।",
            "diagnosticFeature": "Extended muscular abdomen, swimming pleopods, serrated rostrum (Prawn/Shrimp)",
            "diagnosticFeatureBn": "দীর্ঘ উদর, সাঁতারু পা, খাঁজকাটা রস্ট্রাম (চিংড়ি)",
            "resultType": "next_step",
            "nextStepId": 2
          },
          {
            "lead": "Carapace broad, heavily calcified, and dorsoventrally depressed; abdomen greatly reduced, symmetrical, flattened, and permanently folded underneath thoracic sternum; first walking legs modified into massive grasping chelae; walking legs adapted for crawling or lateral swimming.",
            "leadBn": "বক্ষ-খোলস প্রশস্ত, পুরু ক্যালসিয়ামযুক্ত ও উপর-নিচে চ্যাপ্টা; উদর অত্যন্ত ক্ষুদ্র ও বক্ষের নিচে স্থায়ীভাবে ভাঁজ করা; প্রথম জোড়া পা বিশাল চিমটাযুক্ত দাঁড়া; হাঁটার পা হামাগুড়ি বা পার্শ্বীয় সাঁতারের উপযোগী।",
            "diagnosticFeature": "Depressed carapace, folded reduced abdomen, powerful chelipeds (True crab)",
            "diagnosticFeatureBn": "চ্যাপ্টা বর্ম, নিচে ভাঁজ করা ক্ষুদ্র উদর, শক্তিশালী দাঁড়া (কাঁকড়া)",
            "resultType": "next_step",
            "nextStepId": 4
          }
        ]
      },
      {
        "id": 2,
        "title": "Prawn Suborders: Marine/Estuarine Penaeidea vs Freshwater Caridea",
        "titleBn": "চিংড়ির উপবর্গ: সামুদ্রিক/মোহনাজ পেনাইড বনাম স্বাদু পানির ক্যারিডিয়ান",
        "character": "Abdominal pleura overlap pattern and cheliped arrangement",
        "characterBn": "উদরের প্লিউরা পরস্পর আচ্ছাদন ও দাঁড়া বিন্যাস",
        "couplets": [
          {
            "lead": "Marine and coastal estuarine prawn; first three pairs of pereiopods equipped with small pinching chelae; pleura of second abdominal segment overlap third segment only (not first); carapace adorned with prominent black/brown and yellow tiger crossbands; releases eggs freely into seawater without carrying them.",
            "leadBn": "উপকূলীয় ও মোহনার নোনাপানির চিংড়ি; প্রথম তিন জোড়া পায়ে ক্ষুদ্র চিমটা বিদ্যমান; দ্বিতীয় উদর খণ্ডকের পাত কেবল ৩য় খণ্ডকে ঢাকে (১ম খণ্ডককে নয়); পিঠে বাঘের মতো উজ্জ্বল ডোরাকাটা দাগ; পেটে ডিম বহন করে না।",
            "diagnosticFeature": "3 chelate pairs, 2nd pleuron overlaps 3rd only, tiger stripes (Penaeus)",
            "diagnosticFeatureBn": "৩ জোড়া দাঁড়া, ২য় খণ্ডক কেবল ৩য়কে ঢাকে, ডোরাকাটা বাঘের ছোপ (বাগদা)",
            "resultType": "species",
            "speciesId": "sp-penaeus-monodon",
            "rationaleEn": "Resolves to Penaeus monodon (Giant tiger prawn / বাগদা চিংড়ি)",
            "rationaleBn": "পেনাইয়াস মনোডন (বাগদা চিংড়ি)"
          },
          {
            "lead": "Inland freshwater and estuarine caridean river prawn; second pair of pereiopods modified into enormously enlarged, powerful pinching chelipeds; pleura of second abdominal segment distinctly overlap both first and third segments; females carry developing egg clusters under pleon.",
            "leadBn": "মিঠা পানি ও মোহনার ক্যারিডিয়ান নদী চিংড়ি; দ্বিতীয় জোড়া পা অত্যন্ত দীর্ঘ ও শক্তিশালী বিশালাকার দাঁড়ায় রূপান্তরিত; দ্বিতীয় খণ্ডকের পাত ১ম ও ৩য় উভয় খণ্ডককে ঢেকে রাখে; স্ত্রী চিংড়ি পেটের নিচে ডিমের গুচ্ছ বহন করে।",
            "diagnosticFeature": "Enlarged 2nd chelipeds, 2nd abdominal pleuron overlaps 1st & 3rd, berried females",
            "diagnosticFeatureBn": "বিশাল ২য় জোড়া দাঁড়া, ২য় খণ্ডক ১ ও ৩ উভয়কে ঢাকে, ডিম্বধারী পেট",
            "resultType": "next_step",
            "nextStepId": 3
          }
        ]
      },
      {
        "id": 3,
        "title": "Genus Macrobrachium: Giant River Prawn vs Monsoon River Prawn",
        "titleBn": "ম্যাক্রোব্রাকিয়াম গণ: গলদা চিংড়ি বনাম মনসুন নদী চিংড়ি",
        "character": "Relative length and ornamentation of 2nd chelipeds, rostral tooth count",
        "characterBn": "দ্বিতীয় জোড়া দাঁড়ার দৈর্ঘ্য, কাঁটার বিন্যাস ও রস্ট্রামের দাঁতের সংখ্যা",
        "couplets": [
          {
            "lead": "Second pereiopods in adult males distinctly longer than total body length (often 1.5x body length), intense cobalt blue or dark brown, covered with robust spinules; rostrum long with prominent sinusoidal curve, bearing 11-14 dorsal teeth and 8-10 ventral teeth; largest freshwater prawn in the world.",
            "leadBn": "পূর্ণবয়স্ক পুরুষে দ্বিতীয় জোড়া পা সমগ্র দেহের চেয়েও দীর্ঘ (দেহের ১.৫ গুণ পর্যন্ত), গাঢ় নীল বা তামাটে এবং কাঁটাময়; দীর্ঘ বাঁকানো রস্ট্রামে ১১-১৪টি পৃষ্ঠীয় এবং ৮-১০টি অঙ্কীয় দাঁত থাকে; বিশ্বের বৃহত্তম স্বাদু পানির চিংড়ি।",
            "diagnosticFeature": "Chelipeds longer than body, curved rostrum with 11-14 / 8-10 teeth, blue pincers",
            "diagnosticFeatureBn": "দেহের চেয়ে দীর্ঘ দাঁড়া, বাঁকা রস্ট্রামে ১১-১৪/৮-১০ দাঁত, নীল চিমটা",
            "resultType": "species",
            "speciesId": "sp-macrobrachium-rosenbergii",
            "rationaleEn": "Resolves to Macrobrachium rosenbergii (Giant freshwater prawn / গলদা চিংড়ি)",
            "rationaleBn": "ম্যাক্রোব্রাকিয়াম রোজেনবার্গি (গলদা চিংড়ি)"
          },
          {
            "lead": "Second pereiopods in adult males shorter than total body length, densely covered with fine velvety pubescence along the palm and fingers; rostrum straight with tip upturned, bearing 9-11 dorsal teeth and 5-6 ventral teeth; common commercial river prawn of the Padma and Meghna systems.",
            "leadBn": "পুরুষের দ্বিতীয় জোড়া পা সমগ্র দেহের চেয়ে খাটো এবং থাবা ও আঙুলগুলো ঘন মখমলের মতো রোমে আবৃত; রস্ট্রাম তুলনামূলক সোজা, পৃষ্ঠে ৯-১১টি এবং অঙ্কীয় দিকে ৫-৬টি দাঁত; পদ্মা ও মেঘনা নদীর সাধারণ অর্থকরী চিংড়ি।",
            "diagnosticFeature": "Chelipeds shorter than body with velvety pubescence, 9-11 / 5-6 rostral teeth",
            "diagnosticFeatureBn": "দেহের চেয়ে খাটো মখমলি রোমযুক্ত দাঁড়া, ৯-১১/৫-৬ রস্ট্রাল দাঁত",
            "resultType": "species",
            "speciesId": "sp-macrobrachium-malcolmsonii",
            "rationaleEn": "Resolves to Macrobrachium malcolmsonii (Monsoon river prawn / মনসুন নদী চিংড়ি)",
            "rationaleBn": "ম্যাক্রোব্রাকিয়াম ম্যালকমসোনি (মনসুন নদী চিংড়ি)"
          }
        ]
      },
      {
        "id": 4,
        "title": "Brachyuran Crabs: Estuarine Mud Crab vs Freshwater Paddy Field Crab",
        "titleBn": "ব্র্যাকিউরান কাঁকড়া: সুন্দরবনের শিলা কাঁকড়া বনাম ধানখেতের মিঠা পানির কাঁকড়া",
        "character": "Modification of fifth pereiopod for swimming vs walking, anterolateral carapace teeth",
        "characterBn": "পঞ্চম পায়ের সাঁতারের উপযোগী রূপান্তর বনাম হাঁটার পা, বর্মের পাশের দাঁতের সংখ্যা",
        "couplets": [
          {
            "lead": "Fifth pair of pereiopods modified into flattened, oval, paddle-like swimming blades (dactyli); anterolateral margins of carapace armed with 9 sharp, equal serrated teeth on each side; massive crushing chelipeds; mangrove mudflats and tidal creeks of the Sundarbans.",
            "leadBn": "পঞ্চম জোড়া পায়ের শেষ অংশ চ্যাপ্টা ডিম্বাকৃতি প্যাডেলের মতো সাঁতারের ব্লেডে রূপান্তরিত; বক্ষ বর্মের দুই পাশে ৯টি করে সম-আকৃতির তীক্ষ্ণ করাত-দাঁত; বিশাল পেষণকারী দাঁড়া; সুন্দরবনের ম্যানগ্রোভ খাঁড়ি ও কাদাচরে বাস করে।",
            "diagnosticFeature": "Paddle-shaped 5th swimming legs, 9 anterolateral teeth, estuarine mud crab",
            "diagnosticFeatureBn": "প্যাডেলসদৃশ সাঁতারু পা, দুই পাশে ৯টি করে দাঁত, মোহনার শিলা কাঁকড়া",
            "resultType": "species",
            "speciesId": "sp-scylla-olivacea",
            "rationaleEn": "Resolves to Scylla olivacea (Orange mud crab / সুন্দরবনের শিলা কাঁকড়া)",
            "rationaleBn": "সিলা অলিভাসিয়া (সুন্দরবনের শিলা কাঁকড়া)"
          },
          {
            "lead": "Fifth pair of pereiopods pointed for walking and digging, not flattened into paddle blades; anterolateral margin of carapace smooth or bearing 1-2 small epibranchial teeth; carapace dark olive-brown to purple; deep burrower in agricultural paddy fields, pond dykes, and freshwater wetlands.",
            "leadBn": "পঞ্চম জোড়া পা হাঁটা ও মাটি খোঁড়ার জন্য সূঁচালো, সাঁতারের প্যাডেল নয়; বর্মের কিনারা মসৃণ অথবা কেবল ১-২টি ছোট খাঁজযুক্ত; খোলস গাঢ় জলপাই-বাদামি বা বেগুনি; ধানখেত ও পুকুরপাড়ের কাদায় গভীর গর্ত তৈরি করে।",
            "diagnosticFeature": "Pointed walking 5th legs, smooth carapace margin, freshwater paddy burrower",
            "diagnosticFeatureBn": "সূঁচালো হাঁটার পা, মসৃণ বর্ম প্রান্ত, ধানখেতের গর্তবাসী মিঠা পানির কাঁকড়া",
            "resultType": "species",
            "speciesId": "sp-sartoriana-spinigera",
            "rationaleEn": "Resolves to Sartoriana spinigera (Common freshwater crab / দেশি মিঠা পানির কাঁকড়া)",
            "rationaleBn": "সার্টোরিয়ানা স্পিনিজেরা (দেশি মিঠা পানির কাঁকড়া)"
          }
        ]
      }
    ]
  },
  {
    "id": "key-bangladesh-textbook-insects",
    "title": "Diagnostic Key to Representative Agricultural & Urban Insects of Bangladesh",
    "titleBn": "বাংলাদেশের প্রতিনিধি স্থানীয় কৃষি ও শহুরে পতঙ্গের শনাক্তকরণ কুঞ্জি",
    "scope": "bangladesh",
    "targetTaxonId": "taxon-insecta",
    "majorGroup": "arthropoda",
    "taxonScope": "Class Insecta: Major Textbook Orders & Species of Bangladesh",
    "taxonScopeBn": "শ্রেণি ইনসেকটা: বাংলাদেশের প্রধান পাঠ্যপুস্তকোক্ত পতঙ্গ প্রজাতি",
    "description": "Introductory and secondary school biology dichotomous key classifying common textbook insect orders and representative species in Bangladesh including agricultural pests, vectors, pollinators, and predators.",
    "descriptionBn": "কৃষি ক্ষতিকর পতঙ্গ, রোগবাহী মশক ও মাছি, পরাগায়নকারী এবং শিকারী পতঙ্গসহ বাংলাদেশের পাঠ্যপুস্তকে বহুল ব্যবহৃত প্রধান পতঙ্গ প্রজাতি ও বর্গ শনাক্তকরণের কুঞ্জি।",
    "educationalLevel": "introductory",
    "keyType": "dichotomous",
    "sourceReferenceIds": [
      "ref-siddiqui-2008-arthropoda",
      "ref-hickman-2020"
    ],
    "verificationStatus": "verified",
    "steps": [
      {
        "id": 1,
        "title": "Wing Architecture: Sclerotized/Leathery Covers vs Membranous/Scaled Wings",
        "titleBn": "ডানার গঠন: শক্ত/চামড়াসদৃশ ডানা বনাম পাতলা ঝিল্লিযুক্ত/আঁইশযুক্ত ডানা",
        "character": "Forewing modification and biting-chewing mandibles",
        "characterBn": "সম্মুখ ডানার রূপান্তর ও কর্তনকারী মুখোপাঙ্গ",
        "couplets": [
          {
            "lead": "Forewings modified into hardened protective elytra or thickened leathery tegmina protecting delicate hindwings at rest; biting and chewing mandibles; jumping hind legs or crawling habit.",
            "leadBn": "সম্মুখ ডানা শক্ত বর্মে (এলিট্রা) বা চামড়াসদৃশ টেকগমিনায় রূপান্তরিত যা বিশ্রামকালে পেছনের ডানাকে ঢাকে; কর্তন ও চর্বন উপযোগী চোয়াল; লাফানোর পেছনের পা অথবা হাঁটার স্বভাব।",
            "diagnosticFeature": "Hardened elytra or leathery tegmina, chewing mandibles",
            "diagnosticFeatureBn": "শক্ত এলিট্রা বা চামড়ার ডানা, চর্বন মুখোপাঙ্গ",
            "resultType": "next_step",
            "nextStepId": 2
          },
          {
            "lead": "Wings entirely membranous (four or two) or covered in overlapping microscopic scales; mouthparts specialized for siphoning, piercing-sucking, sponging, or chewing in social worker castes.",
            "leadBn": "ডানা সম্পূর্ণ পাতলা ঝিল্লিময় (৪টি বা ২টি) অথবা আণুবীক্ষণিক আঁইশ দ্বারা আবৃত; মুখোপাঙ্গ সাইফন, চোষক, লেহন অথবা সামাজিক শ্রমিকের কর্তন উপযোগী।",
            "diagnosticFeature": "Membranous or scaled wings, specialized sucking/sponging mouthparts",
            "diagnosticFeatureBn": "ঝিল্লিময় বা আঁইশযুক্ত ডানা, চোষক/লেহন মুখোপাঙ্গ",
            "resultType": "next_step",
            "nextStepId": 5
          }
        ]
      },
      {
        "id": 2,
        "title": "Saltatorial Orthoptera vs Hardened Sclerotized Coleoptera",
        "titleBn": "লাফানো অর্থোপ্টেরা বনাম শক্ত ডানাবিশিষ্ট গুবরে পোকা (কোলিওপ্টেরা)",
        "character": "Hindleg modification for jumping vs heavily sclerotized elytra",
        "characterBn": "লাফানোর উপযোগী পেছনের পা বনাম শক্ত কাইটিনযুক্ত এলিট্রা",
        "couplets": [
          {
            "lead": "Hind legs greatly enlarged and elongated with muscular saltatorial femora adapted for jumping; forewings leathery tegmina; acoustic organs (tympana) present; order Orthoptera.",
            "leadBn": "লাফানোর জন্য পেছনের পা অত্যন্ত বড় ও শক্তিশালী ফিমারযুক্ত; সম্মুখ ডানা চামড়াসদৃশ টেকগমিনা; শ্রবণ অঙ্গ বিদ্যমান; বর্গ অর্থোপ্টেরা।",
            "diagnosticFeature": "Jumping hind legs (saltatorial), leathery tegmina (Orthoptera)",
            "diagnosticFeatureBn": "লাফানোর পেছনের পা, চামড়াসদৃশ ডানা (অর্থোপ্টেরা)",
            "resultType": "next_step",
            "nextStepId": 3
          },
          {
            "lead": "Forewings completely sclerotized into rigid protective wing covers (elytra) meeting along a straight dorsal median suture; hind legs not specialized for jumping; order Coleoptera.",
            "leadBn": "সম্মুখ ডানা শক্ত কাইটিনযুক্ত বর্মে (এলিট্রা) রূপান্তরিত যা পিঠের মাঝে সোজা রেখায় মিলিত হয়; পেছনের পা লাফানোর উপযোগী নয়; বর্গ কোলিওপ্টেরা।",
            "diagnosticFeature": "Hardened protective elytra meeting in median suture (Coleoptera)",
            "diagnosticFeatureBn": "শক্ত এলিট্রা ডানা যা মাঝে মিলিত হয় (কোলিওপ্টেরা)",
            "resultType": "next_step",
            "nextStepId": 4
          }
        ]
      },
      {
        "id": 3,
        "title": "Order Orthoptera: Desert Locust vs Black Field Cricket",
        "titleBn": "বর্গ অর্থোপ্টেরা: মরু পঙ্গপাল বনাম কালো মাঠের ঝিঁঝিঁ পোকা",
        "character": "Antenna length, auditory tympanum location, and habit",
        "characterBn": "শুঙ্গের দৈর্ঘ্য, শ্রবণ অঙ্গের অবস্থান ও স্বভাব",
        "couplets": [
          {
            "lead": "Antennae distinctly shorter than body; auditory tympanum located on the lateral sides of the first abdominal segment; robust yellowish to pinkish-grey body; devastating swarming agricultural pest.",
            "leadBn": "শুঙ্গ দেহের দৈর্ঘ্যের চেয়ে লক্ষণীয়ভাবে খাটো; শ্রবণ পর্দা প্রথম উদর খণ্ডকের দুই পাশে অবস্থিত; হলুদ বা গোলাপি-ধূসর শক্তিশালী দেহ; ফসল ধ্বংসকারী ঝাঁকবদ্ধ পঙ্গপাল।",
            "diagnosticFeature": "Short antennae, abdominal tympanum, swarming pest (Locust)",
            "diagnosticFeatureBn": "খাটো শুঙ্গ, উদরে কান, ঝাঁকবদ্ধ পঙ্গপাল",
            "resultType": "species",
            "speciesId": "sp-schistocerca-gregaria",
            "rationaleEn": "Resolves to Schistocerca gregaria (Desert locust / মরু পঙ্গপাল)",
            "rationaleBn": "সিস্টোসার্কা গ্রেগারিয়া (মরু পঙ্গপাল)"
          },
          {
            "lead": "Antennae long, slender, thread-like (filiform), exceeding body length; auditory tympanum located on the prothoracic tibiae of forelegs; body shiny jet-black; nocturnal chirping insect of gardens and fields.",
            "leadBn": "শুঙ্গ অত্যন্ত দীর্ঘ, সুতার মতো সরু যা দেহের চেয়েও লম্বা; শ্রবণ পর্দা সামনের পায়ের টিবিয়ায় অবস্থিত; চকচকে কুচকুচে কালো দেহ; রাতচরা ডাকপাড়া ঝিঁঝিঁ পোকা।",
            "diagnosticFeature": "Long filiform antennae, tibial tympanum, nocturnal black cricket",
            "diagnosticFeatureBn": "দীর্ঘ শুঙ্গ, সামনের পায়ে কান, নিশাচর কালো ঝিঁঝিঁ",
            "resultType": "species",
            "speciesId": "sp-gryllus-bimaculatus",
            "rationaleEn": "Resolves to Gryllus bimaculatus (Two-spotted field cricket / ঝিঁঝিঁ পোকা)",
            "rationaleBn": "গ্রিলাস বাইম্যাকুলাটাস (মাঠের ঝিঁঝিঁ পোকা)"
          }
        ]
      },
      {
        "id": 4,
        "title": "Order Coleoptera: Red Flour Beetle vs Seven-Spotted Ladybird",
        "titleBn": "বর্গ কোলিওপ্টেরা: লাল আটার গুবরে পোকা বনাম সাত-ফোঁটা লেডিবার্ড বিটল",
        "character": "Body shape, coloration, and dietary habits",
        "characterBn": "দেহের আকৃতি, রঙ ও খাদ্যভ্যাস",
        "couplets": [
          {
            "lead": "Body small (3.5-4.5 mm), flattened and elongated-oblong, uniform reddish-brown; clubbed antennae with distinct 3-segmented terminal club; major cosmopolitan pest infesting stored grains and milled flour.",
            "leadBn": "দেহ ক্ষুদ্র (৩.৫-৪.৫ মিমি), চ্যাপ্টা ও লম্বাটে, সম্পূর্ণ লালচে-বাদামি; অগ্রভাগে ৩টি খণ্ডযুক্ত ক্লাবেট শুঙ্গ; খাদ্যগুদামের সংরক্ষিত গম ও আটার প্রধান ক্ষতিকর পোকা।",
            "diagnosticFeature": "Small oblong flat body, reddish-brown, stored grain pest",
            "diagnosticFeatureBn": "ছোট চ্যাপ্টা লম্বা দেহ, লালচে বাদামি, আটা ও দানার পোকা",
            "resultType": "species",
            "speciesId": "sp-tribolium-castaneum",
            "rationaleEn": "Resolves to Tribolium castaneum (Red flour beetle / লাল আটার পোকা)",
            "rationaleBn": "ট্রাইবোলিয়াম কাস্টেনিয়াম (লাল আটার পোকা)"
          },
          {
            "lead": "Body hemispherical and convexly domed, oval; head and pronotum black with white anterior spots; elytra bright scarlet red or orange bearing exactly seven distinct black round spots; beneficial voracious predator of crop aphids.",
            "leadBn": "দেহ অর্ধবৃত্তাকার গম্বুজের মতো গোল ও উত্তল; মাথা ও বক্ষ কালো এবং সাদা ছোপযুক্ত; খোলস উজ্জ্বল টকটকে লাল বা কমলা যাতে ঠিক ৭টি কালো গোলাকার ফোঁটা থাকে; ফসলের জাবপোকা ধ্বংসকারী উপকারী বন্ধু পোকা।",
            "diagnosticFeature": "Hemispherical red dome, 7 black spots, aphid predator (Ladybird)",
            "diagnosticFeatureBn": "উত্তল লাল গম্বুজ দেহ, ৭টি কালো ফোঁটা, জাবপোকা শিকারী (লেডিবার্ড)",
            "resultType": "species",
            "speciesId": "sp-coccinella-septempunctata",
            "rationaleEn": "Resolves to Coccinella septempunctata (Seven-spotted ladybug / লেডিবার্ড বিটল)",
            "rationaleBn": "কক্সিনেলা সেপ্টেমপাঙ্কটাটা (সাত-ফোঁটা লেডিবার্ড বিটল)"
          }
        ]
      },
      {
        "id": 5,
        "title": "Two-Winged Diptera vs Scale-Winged Lepidoptera vs Social Ants / Dragonflies",
        "titleBn": "দ্বিপক্ষ ডিপ্টেরা বনাম আঁইশডানাওয়ালা প্রজাপতি বনাম পিঁপড়া / ফড়িং",
        "character": "Number of functional wings and scale covering",
        "characterBn": "কার্যকর ডানার সংখ্যা ও আঁইশের উপস্থিতি",
        "couplets": [
          {
            "lead": "Single pair of membranous functional forewings; hindwings reduced to minute knobbed sensory balancing organs (halteres); order Diptera (true flies and mosquitoes).",
            "leadBn": "কেবলমাত্র এক জোড়া পাতলা কার্যকর সম্মুখ ডানা; পেছনের ডানা ভারসাম্য রক্ষাকারী ছোট বোঁটায় (হ্যালটেয়ার) রূপান্তরিত; বর্গ ডিপ্টেরা (মাছি ও মশা)।",
            "diagnosticFeature": "Two wings only, hindwings modified into halteres (Diptera)",
            "diagnosticFeatureBn": "কেবল ২ ডানা, পেছনের ডানা হ্যালটেয়ার (ডিপ্টেরা)",
            "resultType": "next_step",
            "nextStepId": 6
          },
          {
            "lead": "Two pairs of wings present (or wingless worker castes in social hymenopterans); wings covered with scales or entirely transparent and reticulated.",
            "leadBn": "দুই জোড়া ডানা বিদ্যমান (অথবা সামাজিক পিঁপড়ার ডানাহীন শ্রমিক শ্রেণি); ডানা আণুবীক্ষণিক রঙিন আঁইশে ঢাকা অথবা সম্পূর্ণ স্বচ্ছ জালিকার মতো।",
            "diagnosticFeature": "Four wings present or wingless social worker caste",
            "diagnosticFeatureBn": "৪টি ডানাযুক্ত অথবা ডানাহীন সামাজিক শ্রমিক",
            "resultType": "next_step",
            "nextStepId": 8
          }
        ]
      },
      {
        "id": 6,
        "title": "Order Diptera: Housefly vs Blood-Sucking Mosquitoes",
        "titleBn": "বর্গ ডিপ্টেরা: গৃহ মাছি বনাম রক্তচোষা মশক",
        "character": "Mouthpart type: Sponging labellum vs piercing-sucking proboscis",
        "characterBn": "মুখোপাঙ্গ: চোষক ল্যাবেলাম বনাম রক্তচোষা ছুঁচালো শুঁড়",
        "couplets": [
          {
            "lead": "Body stout, greyish; thorax adorned with four dark longitudinal stripes; mouthparts modified into a fleshy retractile proboscis ending in a sponging labellum; mechanical vector of cholera, typhoid, and dysentery.",
            "leadBn": "দেহ স্থূল ও ধূসর; বক্ষদেশে ৪টি স্পষ্ট কালো অনুদৈর্ঘ্য রেখা; মুখোপাঙ্গ মাংসল চোষক ল্যাবেলামে রূপান্তরিত যা তরল লেহন করে; কলেরা, টাইফয়েড ও আমাশয়ের বাহক।",
            "diagnosticFeature": "Four thoracic stripes, fleshy sponging labellum, synanthropic fly",
            "diagnosticFeatureBn": "বক্ষে ৪টি কালো ডোরা, চোষক ল্যাবেলাম, গৃহ মাছি",
            "resultType": "species",
            "speciesId": "sp-musca-domestica",
            "rationaleEn": "Resolves to Musca domestica (Common housefly / গৃহ মাছি)",
            "rationaleBn": "মাসকা ডোমেস্টিকা (গৃহ মাছি)"
          },
          {
            "lead": "Body slender, fragile with long delicate legs; mouthparts elongated into a piercing-sucking needle-like proboscis for hematophagy in females; aquatic larvae with breathing siphon or spiracles.",
            "leadBn": "দেহ সরু, দুর্বল এবং দীর্ঘ চিকন পাযুক্ত; স্ত্রী মশকীর মুখোপাঙ্গ রক্তচোষার জন্য তীক্ষ্ণ সূঁচালো শুঁড়ে রূপান্তরিত; জলজ লার্ভা।",
            "diagnosticFeature": "Piercing-sucking needle proboscis, long legs, mosquito vector",
            "diagnosticFeatureBn": "ছুঁচালো রক্তচোষা শুঁড়, লম্বা পা, মশক বাহক",
            "resultType": "next_step",
            "nextStepId": 7
          }
        ]
      },
      {
        "id": 7,
        "title": "Mosquito Lineages: Culex vs Anopheles",
        "titleBn": "মশার গোত্র: কিউলেক্স বনাম অ্যানোফিলিস",
        "character": "Resting posture, wing spots, and vector transmission",
        "characterBn": "বসার কোণ, ডানার ছোপ এবং রোগ বিস্তার",
        "couplets": [
          {
            "lead": "Resting posture parallel to substrate with proboscis and abdomen forming an angle; wings plain translucent without dark scale patches; scutellum trilobed; primary tropical vector of lymphatic filariasis (elephantiasis).",
            "leadBn": "বসার সময় দেহ সমান্তরাল থাকে এবং শুঁড় ও উদর কোণ তৈরি করে; ডানায় কোনো কালো আঁইশের ছোপ নেই; স্কুটেলাম তিন খণ্ডবিশিষ্ট; ফাইলেরিয়া বা গোদ রোগের প্রধান বাহক।",
            "diagnosticFeature": "Parallel resting posture, unspotted wings, filariasis vector (Culex)",
            "diagnosticFeatureBn": "সমান্তরাল বসার ভঙ্গি, ছোপহীন ডানা, গোদ রোগের বাহক (কিউলেক্স)",
            "resultType": "species",
            "speciesId": "sp-culex-quinquefasciatus",
            "rationaleEn": "Resolves to Culex quinquefasciatus (Southern house mosquito / কিউলেক্স মশা)",
            "rationaleBn": "কিউলেক্স কুইনকিউফ্যাসিয়াটাস (কিউলেক্স মশা)"
          },
          {
            "lead": "Resting posture at a steep 45° to 90° angle to substrate with proboscis, head, and body forming a continuous straight line; wings distinctly spotted with dark and pale scale clusters; rounded crescent scutellum; primary vector of urban malaria.",
            "leadBn": "বসার সময় দেহ তলদেশের সাথে ৪৫° থেকে ৯০° খাড়া কোণে থাকে এবং মাথা, শুঁড় ও শরীর এক সরলরেখায় থাকে; ডানায় কালো ও সাদা আঁইশের স্পষ্ট ছোপযুক্ত; শহুরে ম্যালেরিয়ার প্রধান বাহক।",
            "diagnosticFeature": "Steep angled resting stance, spotted wings, malaria vector (Anopheles)",
            "diagnosticFeatureBn": "খাড়া কোণে বসার ভঙ্গি, ছোপযুক্ত ডানা, ম্যালেরিয়া বাহক (অ্যানোফিলিস)",
            "resultType": "species",
            "speciesId": "sp-anopheles-stephensi",
            "rationaleEn": "Resolves to Anopheles stephensi (Urban malaria mosquito / অ্যানোফিলিস মশা)",
            "rationaleBn": "অ্যানোফিলিস স্টিফেনসি (অ্যানোফিলিস মশা)"
          }
        ]
      },
      {
        "id": 8,
        "title": "Scale-Winged Lepidoptera vs Social Ants & Dragonflies",
        "titleBn": "আঁইশডানাওয়ালা প্রজাপতি বনাম সামাজিক পিঁপড়া ও ফড়িং",
        "character": "Wing scale covering, siphoning proboscis, and abdominal petiole",
        "characterBn": "ডানায় আঁইশ, সাইফন শুঁড় ও উদরের বোঁটা",
        "couplets": [
          {
            "lead": "Wings broad, densely covered with overlapping microscopic pigmented scales; mouthparts modified into a coiled tubular siphoning proboscis for floral nectar feeding; striking black background with creamy-yellow spots and two prominent false eyespots on hindwings; caterpillar feeds on citrus leaves; Order Lepidoptera.",
            "leadBn": "ডানা দুটি প্রশস্ত এবং সূক্ষ্ম রঙিন আঁইশ দ্বারা ঘনভাবে আবৃত; মুখোপাঙ্গ কুণ্ডলিত নলাকার সাইফন শুঁড়ে রূপান্তরিত যা ফুলের মধু চোষে; কালো ডানায় ঘন ক্রিম-হলুদ ছোপযুক্ত চমৎকার নকশা এবং পেছনের ডানায় দুটি মেকি চোখের ছোপ; লার্ভা লেবু গাছের পাতা খায়; বর্গ লেপিডোপ্টেরা।",
            "diagnosticFeature": "Scaled wings, siphoning proboscis, black with yellow spots and red eyespots (Lime butterfly)",
            "diagnosticFeatureBn": "আঁইশযুক্ত ডানা, সাইফন শুঁড়, কালো-হলুদ ছোপ ও মেকি চোখ (লেবু প্রজাপতি)",
            "resultType": "species",
            "speciesId": "sp-papilio-demoleus",
            "rationaleEn": "Resolves to Papilio demoleus (Lime butterfly / লেবু প্রজাপতি)",
            "rationaleBn": "প্যাপিলিও ডিমোলিয়াস (লেবু প্রজাপতি)"
          },
          {
            "lead": "Wings entirely devoid of scales, transparent and membranous, or wingless worker castes with constricted petiole waist; biting mandibles.",
            "leadBn": "ডানায় আঁইশ নেই, ডানা সম্পূর্ণ স্বচ্ছ ঝিল্লিময় অথবা উদরে সরু কোমরযুক্ত ডানাহীন শ্রমিক পিঁপড়া; শক্তিশালী চর্বন চোয়াল।",
            "diagnosticFeature": "Unscaled membranous wings or wingless petiolate workers",
            "diagnosticFeatureBn": "আঁইশহীন স্বচ্ছ ডানা অথবা সরু কোমরযুক্ত ডানাহীন শ্রমিক",
            "resultType": "next_step",
            "nextStepId": 9
          }
        ]
      },
      {
        "id": 9,
        "title": "Social Formicidae (Ants) vs Aerial Predatory Odonata (Dragonflies)",
        "titleBn": "সামাজিক পিঁপড়া বনাম শিকারী ফড়িং (ওডোনাটা)",
        "character": "Wing structure and aerial flight vs terrestrial worker morphology",
        "characterBn": "ডানার গঠন ও বায়বীয় উড্ডয়ন বনাম স্থলচর শ্রমিকের রূপতত্ত্ব",
        "couplets": [
          {
            "lead": "Terrestrial social insects; wingless worker castes possess a distinct slender petiole node between mesosoma and gaster; geniculate (elbowed) antennae; colonies exhibit division of labor.",
            "leadBn": "স্থলচর সামাজিক পতঙ্গ; ডানাহীন শ্রমিকদের বক্ষ ও উদরের মাঝে সুস্পষ্ট বোঁটাসদৃশ পেট্রিওল গিঁট থাকে; কুনুইয়ের মতো বাঁকানো শুঙ্গ; কলোনিতে শ্রমবিভাজন বিদ্যমান।",
            "diagnosticFeature": "Wingless workers with abdominal petiole, elbowed antennae (Ants)",
            "diagnosticFeatureBn": "বোঁটাসদৃশ কোমরযুক্ত ডানাহীন শ্রমিক, বাঁকানো শুঙ্গ (পিঁপড়া)",
            "resultType": "next_step",
            "nextStepId": 10
          },
          {
            "lead": "Large aerial predatory insect; two pairs of equal, highly reticulated transparent membranous wings held horizontally at rest; enormous compound eyes meeting across head; mature males possess a dazzling scarlet-red abdomen; voracious predator of mosquitoes and flies.",
            "leadBn": "বিশাল বায়বীয় শিকারী পতঙ্গ; সম-আকৃতির অত্যন্ত জটিল জালিকাযুক্ত দুই জোড়া স্বচ্ছ ডানা যা বিশ্রামকালে অনুভূমিকভাবে প্রসারিত থাকে; মাথায় পরস্পর সংযুক্ত বিশাল যৌগিক পুঞ্জাক্ষি; প্রাপ্তবয়স্ক পুরুষে উজ্জ্বল টকটকে লাল উদর; মশা ও মাছি শিকারী।",
            "diagnosticFeature": "Large reticulate horizontal wings, red abdomen in males, dragonfly",
            "diagnosticFeatureBn": "অনুভূমিক জালিকাযুক্ত ডানা, পুরুষের লাল উদর, ফড়িং",
            "resultType": "species",
            "speciesId": "sp-crocothemis-servilia",
            "rationaleEn": "Resolves to Crocothemis servilia (Scarlet skimmer dragonfly / লাল ফড়িং)",
            "rationaleBn": "ক্রোকোথেমিস সার্ভিলিয়া (লাল ফড়িং)"
          }
        ]
      },
      {
        "id": 10,
        "title": "Common Ants of Bangladesh: Black Carpenter Ant vs Arboreal Weaver Ant",
        "titleBn": "বাংলাদেশের সাধারণ পিঁপড়া: কালো ছুতার পিঁপড়া বনাম লাল নালসো পিঁপড়া",
        "character": "Nesting habitat, color, and aggressive defensive behavior",
        "characterBn": "বাসার ধরন, বর্ণ ও প্রতিরক্ষামূলক আক্রমণাত্মক আচরণ",
        "couplets": [
          {
            "lead": "Large shiny jet-black ant (workers 8-15 mm); nests in decaying wood, soil chambers, and house foundations; nocturnal foraging columns; non-stinging but powerful biting mandibles.",
            "leadBn": "বিশাল চকচকে কুচকুচে কালো পিঁপড়া (শ্রমিক ৮-১৫ মিমি); পচা কাঠ, মাটির গর্ত ও ভবনের কোণে বাসা বাঁধে; রাতে দল বেঁধে খাদ্য সংগ্রহ করে; হুলহীন কিন্তু শক্তিশালী চোয়ালের কামড়যুক্ত।",
            "diagnosticFeature": "Large glossy black body, wood/ground nester, carpenter ant",
            "diagnosticFeatureBn": "বিশাল চকচকে কালো দেহ, কাঠ ও মাটির বাসা, কালো ছুতার পিঁপড়া",
            "resultType": "species",
            "speciesId": "sp-camponotus-compressus",
            "rationaleEn": "Resolves to Camponotus compressus (Indian black carpenter ant / কালো ছুতার পিঁপড়া)",
            "rationaleBn": "ক্যাম্পোনোটাস কমপ্রেসাস (কালো ছুতার পিঁপড়া)"
          },
          {
            "lead": "Medium-sized slender arboreal ant, yellowish-brown to emerald green; builds complex globular leaf nests in orchard and forest canopies woven together with silk extruded by living larvae; ferocious territorial biter spraying formic acid.",
            "leadBn": "মাঝারি সরু গাছের পিঁপড়া, হলুদ-বাদামি থেকে সবুজ রঙের; জীবন্ত গাছের পাতাগুলোকে নিজস্ব লার্ভার রেশম সুতা দিয়ে সেলাই করে গোল ঝুলন্ত বাসা তৈরি করে; আক্রমণাত্মক স্বভাব এবং কামড়ের সাথে ফরমিক অ্যাসিড ছিটায়।",
            "diagnosticFeature": "Arboreal leaf-weaver, yellowish-green body, painful communal biter",
            "diagnosticFeatureBn": "গাছের পাতা সেলাইকারী, হলুদ-সবুজ দেহ, যন্ত্রণাদায়ক কামড় (নালসো পিঁপড়া)",
            "resultType": "species",
            "speciesId": "sp-oecophylla-smaragdina",
            "rationaleEn": "Resolves to Oecophylla smaragdina (Asian weaver ant / লাল নালসো পিঁপড়া)",
            "rationaleBn": "ইকোফিলা স্মার্যাগডিনা (লাল নালসো পিঁপড়া)"
          }
        ]
      }
    ]
  },
  {
    "id": "key-bangladesh-annelids",
    "title": "Diagnostic Key to Common Annelids of Bangladesh",
    "titleBn": "বাংলাদেশের সাধারণ অ্যানেলিডার শনাক্তকরণ কুঞ্জি",
    "scope": "bangladesh",
    "targetTaxonId": "taxon-annelida-marine",
    "majorGroup": "invertebrates",
    "taxonScope": "Phylum Annelida: Earthworms, Leeches & Estuarine Ragworms of Bangladesh",
    "taxonScopeBn": "পর্ব অ্যানেলিডা: বাংলাদেশের কেঁচো, জোঁক ও মোহনার পলিকিট",
    "description": "Diagnostic taxonomic key distinguishing ecologically and educationally essential segmented worms of Bangladesh across terrestrial, freshwater, and estuarine wetland ecosystems.",
    "descriptionBn": "বাংলাদেশের স্থলজ, স্বাদু পানি ও উপকূলীয় মোহনা অঞ্চলের সাধারণ ও পাঠ্যপুস্তকোক্ত কেঁচো, জোঁক ও নেরিস জাতীয় খণ্ডায়িত কৃমির শনাক্তকরণ কুঞ্জি।",
    "educationalLevel": "intermediate",
    "keyType": "dichotomous",
    "sourceReferenceIds": [
      "ref-siddiqui-2007-annelida",
      "ref-ruppert-2004"
    ],
    "verificationStatus": "verified",
    "steps": [
      {
        "id": 1,
        "title": "Locomotory Appendages: Parapodia vs Clitellar Setae/Suckers",
        "titleBn": "চলন উপাঙ্গ: প্যারাপোডিয়া বনাম ক্লাইটেলামযুক্ত কিটি/চোষক",
        "character": "Lateral unjointed fleshy parapodia with sensory prostomium vs clitellate body",
        "characterBn": "পার্শ্বীয় মাংসল প্যারাপোডিয়া বনাম ক্লাইটেলামযুক্ত দেহ",
        "couplets": [
          {
            "lead": "Body segments equipped with lateral, unjointed fleshy paddle-like lobes (parapodia) bearing bundles of stiff chaetae; distinct prostomium with sensory tentacles, palps, and 4 eyes; burrowing in estuarine mudflats and mangrove creeks; Class Polychaeta.",
            "leadBn": "প্রতিটি দেহখণ্ডকে এক জোড়া করে মাংসল চ্যাপ্টা চলন উপাঙ্গ (প্যারাপোডিয়া) ও কিটি গুচ্ছ উপস্থিত; চোখ, স্পর্শী কর্ষিকা ও প্যাল্পযুক্ত সুস্পষ্ট মস্তক; মোহনার কাদাচর ও ম্যানগ্রোভ খাঁড়িতে বাস করে; শ্রেণি পলিকিটা।",
            "diagnosticFeature": "Fleshy lateral parapodia, cephalic tentacles, estuarine polychaete",
            "diagnosticFeatureBn": "মাংসল প্যারাপোডিয়া, মাথায় কর্ষিকা, মোহনার পলিকিট",
            "resultType": "species",
            "speciesId": "sp-namalycastis-indica",
            "rationaleEn": "Resolves to Namalycastis indica (Estuarine polychaete ragworm / মোহনার পলিকিট কৃমি)",
            "rationaleBn": "নামালিকাস্টিন ইন্ডিকা (মোহনার পলিকিট কৃমি)"
          },
          {
            "lead": "Parapodia, cephalic tentacles, and palps completely absent; body hermaphroditic, possessing a glandular clitellum (permanent or breeding) that secretes a cocoon for egg development; Class Clitellata.",
            "leadBn": "প্যারাপোডিয়া ও মাথার স্পর্শী কর্ষিকা সম্পূর্ণ অনুপস্থিত; উভয়লিঙ্গ প্রাণী, ডিম সংরক্ষণের জন্য গ্রন্থিময় ক্লাইটেলাম বা পট্টি বিদ্যমান; শ্রেণি ক্লাইটেলাটা।",
            "diagnosticFeature": "No parapodia or tentacles, glandular clitellum present (Clitellata)",
            "diagnosticFeatureBn": "প্যারাপোডিয়া ও কর্ষিকাহীন, গ্রন্থিময় ক্লাইটেলাম বিদ্যমান (ক্লাইটেলাটা)",
            "resultType": "next_step",
            "nextStepId": 2
          }
        ]
      },
      {
        "id": 2,
        "title": "Class Clitellata: Setae-Bearing Earthworms vs Sucker-Bearing Leeches",
        "titleBn": "শ্রেণি ক্লাইটেলাটা: কিটিযুক্ত কেঁচো বনাম চোষকযুক্ত জোঁক",
        "character": "Presence of chaetae and coelomic cavities vs muscular suckers and botryoidal tissue",
        "characterBn": "কিটি ও প্রশস্ত সিলোম বনাম পেশিবহুল চোষক ও বোট্রয়েডাল কলা",
        "couplets": [
          {
            "lead": "True coelom spacious and divided by intersegmental septa; body segments bearing chitinous setae (chaetae); oral and posterior suckers completely absent; terrestrial burrowers feeding on soil organic matter.",
            "leadBn": "প্রকৃত সিলোম প্রশস্ত এবং পর্দা দ্বারা খণ্ডে খণ্ডে বিভক্ত; দেহখণ্ডকে ক্ষুদ্র কাইটিনময় কিটি বিদ্যমান; চোষক সম্পূর্ণ অনুপস্থিত; মাটির জৈব উপাদান খেয়ে বাস করা স্থলচর কেঁচো।",
            "diagnosticFeature": "Spacious coelom, chitinous setae, no suckers, terrestrial earthworms",
            "diagnosticFeatureBn": "প্রশস্ত সিলোম, কাইটিন কিটি, চোষকহীন, স্থলচর কেঁচো",
            "resultType": "next_step",
            "nextStepId": 3
          },
          {
            "lead": "True coelom reduced to narrow botryoidal sinuses; setae completely absent; equipped with a muscular anterior oral sucker (bearing 3 denticulate jaws) and a powerful posterior cup-shaped sucker; body with exactly 33 segments obscured by superficial secondary annuli; ectoparasitic blood feeder on vertebrates.",
            "leadBn": "সিলোম রক্তনালীসদৃশ সরু বোট্রয়েডাল সাইনাসে রূপান্তরিত; কিটি সম্পূর্ণ অনুপস্থিত; মুখছিদ্রে ৩টি দাঁতযুক্ত অগ্র চোষক এবং পেছনে শক্তিশালী পেয়ালাকৃতির পশ্চাৎ চোষক; ৩৩টি দেহখণ্ডক যা বাহ্যিক বলয় দ্বারা আবৃত; মেরুদণ্ডী প্রাণীর রক্তচোষা বহিঃপরজীবী।",
            "diagnosticFeature": "Anterior and posterior suckers, 33 segments, jawed blood-feeder (Leech)",
            "diagnosticFeatureBn": "অগ্র ও পশ্চাৎ চোষক, ৩৩টি খণ্ডক, রক্তচোষা জোঁক",
            "resultType": "species",
            "speciesId": "sp-hirudinaria-granulosa",
            "rationaleEn": "Resolves to Hirudinaria granulosa (Indian cattle leech / সাধারণ রক্তচোষা জোঁক)",
            "rationaleBn": "হিরুডিনারিয়া গ্র্যানুলোসা (ভারতীয় গবাদিপশুর জোঁক)"
          }
        ]
      },
      {
        "id": 3,
        "title": "Earthworm Lineages: Oriental Megascolecidae vs Tropical Epigeic Perionychidae",
        "titleBn": "কেঁচোর গোত্র: প্রাচ্যদেশীয় মেগাস্কোলেসিডি বনাম দ্রুতগতির কম্পোস্ট কেঁচো",
        "character": "Setae arrangement, clitellar position, and habit",
        "characterBn": "কিটির বিন্যাস, ক্লাইটেলামের অবস্থান ও বাসস্থান",
        "couplets": [
          {
            "lead": "Setae arranged in a continuous circular ring (perichaetine arrangement, over 100 per segment) around every body segment; annular glandular clitellum permanently located on segments 14 to 16; cylindrical greyish-brown body; classic textbook earthworm dissecting subject of Bangladesh schools.",
            "leadBn": "প্রতিটি খণ্ডকে আংটির মতো বৃত্তাকারে সাজানো অসংখ্য কিটি (পেরিকাইটিন বিন্যাস, প্রতি খণ্ডে ১০০টির বেশি); গাঢ় রঙের ক্লাইটেলাম সুনির্দিষ্টভাবে ১৪ থেকে ১৬তম খণ্ডকে বেষ্টন করে থাকে; ধূসর-বাদামি নলাকার দেহ; বাংলাদেশের পাঠ্যপুস্তকের ব্যবচ্ছেদকৃত সাধারণ কেঁচো।",
            "diagnosticFeature": "Perichaetine setae ring, clitellum on segments 14-16, common textbook earthworm",
            "diagnosticFeatureBn": "পেরিকাইটিন কিটি বলয়, ১৪-১৬তম খণ্ডে ক্লাইটেলাম, পাঠ্যপুস্তকের সাধারণ কেঁচো",
            "resultType": "species",
            "speciesId": "sp-metaphire-posthuma",
            "rationaleEn": "Resolves to Metaphire posthuma (Asian common earthworm / সাধারণ কেঁচো)",
            "rationaleBn": "মেটাফায়ার পোস্টহুমা (এশীয় সাধারণ কেঁচো)"
          },
          {
            "lead": "Body dorsoventrally compressed, reddish-purple to iridescent blue on dorsum; clitellum situated across segments 13 to 17; extremely active and fast-moving epigeic litter-dweller; champion tropical vermicomposting earthworm widely cultivated in organic agriculture across Bangladesh.",
            "leadBn": "দেহ কিছুটা চ্যাপ্টা, পৃষ্ঠদেশ লালচে-বেগুনি এবং উজ্জ্বল নীলচে আভা ছড়ায়; ক্লাইটেলাম ১৩ থেকে ১৭তম খণ্ডকে বিস্তৃত; অত্যন্ত চঞ্চল ও দ্রুত চলাচলকারী পচা পাতা ও গোবরবাসী কেঁচো; বাংলাদেশের জৈব চাষে বহুল ব্যবহৃত শীর্ষস্থানীয় ভার্মিকম্পোস্ট কেঁচো।",
            "diagnosticFeature": "Iridescent reddish-purple body, clitellum on 13-17, fast tropical vermicomposting worm",
            "diagnosticFeatureBn": "নীলচে-লালচে উজ্জ্বল দেহ, ১৩-১৭ খণ্ডে ক্লাইটেলাম, ভার্মিকম্পোস্ট কেঁচো",
            "resultType": "species",
            "speciesId": "sp-perionyx-excavatus",
            "rationaleEn": "Resolves to Perionyx excavatus (Indian blue worm / নীল ভার্মিকম্পোস্ট কেঁচো)",
            "rationaleBn": "পেরিওনিক্স এক্সক্যাভাটাস (নীল কেঁচো)"
          }
        ]
      }
    ]
  }
];
