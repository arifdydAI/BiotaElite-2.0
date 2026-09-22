// scripts/build_seed_ident_keys.cjs
// Assembles all 15 Identification Keys (11 Global + 4 Bangladesh Regional)
// and validates every single foreign key against SEED_SPECIES, SEED_TAXA, SEED_REFERENCES.

const fs = require('fs');
const path = require('path');
const { SEED_SPECIES } = require('../src/data/seedSpecies.ts');
const { SEED_TAXA } = require('../src/data/seedTaxa.ts');
const { SEED_REFERENCES } = require('../src/data/seedReferences.ts');

const speciesSet = new Set(SEED_SPECIES.map(s => s.id));
const taxaSet = new Set(SEED_TAXA.map(t => t.id));
const refSet = new Set(SEED_REFERENCES.map(r => r.id));

// ─────────────────────────────────────────────────────────────────────────────
// 11 GLOBAL IDENTIFICATION KEYS
// ─────────────────────────────────────────────────────────────────────────────

const GLOBAL_KEYS = [
  // ---------------------------------------------------------------------------
  // Key 1: Major Animal Phyla of Kingdom Animalia
  // ---------------------------------------------------------------------------
  {
    id: 'key-global-major-animal-groups',
    title: 'Diagnostic Key to the Major Phyla of Kingdom Animalia',
    titleBn: 'অ্যানিম্যালিয়া জগতের প্রধান পর্বসমূহের শনাক্তকরণ কুঞ্জি',
    scope: 'global',
    targetTaxonId: 'taxon-animalia',
    majorGroup: 'major_groups',
    taxonScope: 'Metazoa (Kingdom Animalia: All Major Animal Phyla)',
    taxonScopeBn: 'মেটাজোয়া (অ্যানিম্যালিয়া জগত: সকল প্রধান প্রাণী পর্ব)',
    description: 'Authoritative dichotomous key distinguishing the primary body plans of animal phyla based on grade of organization, body symmetry, embryonic germ layers, coelom architecture, metamerism, and diagnostic diagnostic features.',
    descriptionBn: 'শারীরিক গঠনমাত্রা, প্রতিসাম্য, ভ্রূণীয় স্তর, সিলোম, খণ্ডকায়ন ও সুনির্দিষ্ট শনাক্তকারী বৈশিষ্ট্যের ওপর ভিত্তি করে প্রাণী জগতের প্রধান পর্বসমূহের প্রামাণ্য কুঞ্জি।',
    educationalLevel: 'introductory',
    keyType: 'dichotomous',
    sourceReferenceIds: ['ref-hickman-2020', 'ref-ruppert-2004'],
    verificationStatus: 'verified',
    steps: [
      {
        id: 1,
        title: 'Tissue Grade of Organization',
        titleBn: 'কলা সংগঠন মাত্রা',
        character: 'Presence or absence of true embryonic tissues and germ layers',
        characterBn: 'প্রকৃত ভ্রূণীয় কলা ও স্তরের উপস্থিতি বা অনুপস্থিতি',
        couplets: [
          {
            lead: 'Cellular-grade organization without true tissues or germ layers; body asymmetrical or superficial radial; pore-bearing walls with water canal system lined by flagellated collar cells (choanocytes); skeletal framework of calcareous/siliceous spicules and/or spongin fibers.',
            leadBn: 'প্রকৃত কলাবিহীন কোষীয় মাত্রার সংগঠন; অপ্রতিসম বা অগভীর অরীয় দেহ; ছিদ্রাল প্রাচীর ও ফ্লাজেলাযুক্ত চোয়ানোসাইট কোষ দ্বারা গঠিত নালীতন্ত্র; ক্যালসিয়াম/সিলিকা নির্মিত স্পিকিউল বা স্পঞ্জিন কঙ্কাল।',
            diagnosticFeature: 'Cellular grade, choanocytes, pores/oscula, spicule/spongin skeleton',
            diagnosticFeatureBn: 'কোষীয় সংগঠন, চোয়ানোসাইট, অসটিয়া/অস্কুলাম, স্পিকিউল/স্পঞ্জিন',
            resultType: 'taxon',
            taxonId: 'taxon-porifera',
            rationaleEn: 'Resolves to Phylum Porifera (Sponges)',
            rationaleBn: 'পরিফেরা পর্ব (স্পঞ্জ)'
          },
          {
            lead: 'Tissue or organ-system grade of organization; specialized embryonic germ layers formed during gastrulation; distinct mouth and digestive tract (or cavity); nervous and muscular elements present.',
            leadBn: 'কলা বা অঙ্গ-তন্ত্র মাত্রার সংগঠন; গ্যাস্ট্রুলেশনে সুনির্দিষ্ট ভ্রূণীয় স্তর গঠিত; মুখ ও পরিপাক নালী/গহ্বর উপস্থিত; স্নায়ু ও পেশি উপাদান বিদ্যমান।',
            diagnosticFeature: 'Eumetazoan organization with true tissues and symmetry',
            diagnosticFeatureBn: 'ইউমেটাজোয়া সংগঠন, প্রকৃত কলা ও প্রতিসাম্য',
            resultType: 'next_step',
            nextStepId: 2
          }
        ]
      },
      {
        id: 2,
        title: 'Primary Symmetry and Germ Layers',
        titleBn: 'প্রাথমিক প্রতিসাম্য ও ভ্রূণস্তর',
        character: 'Body symmetry and germ layer differentiation',
        characterBn: 'শারীরিক প্রতিসাম্য ও ভ্রূণীয় স্তরের বিভাজন',
        couplets: [
          {
            lead: 'Primary radial or biradial symmetry; diploblastic organization (epidermis and gastrodermis separated by acellular or gelatinous mesoglea); gastrovascular cavity with single oral opening functioning as both mouth and anus.',
            leadBn: 'প্রাথমিক অরীয় বা দ্বি-অরীয় প্রতিসাম্য; দ্বিভ্রূণস্তরী দেহ (মেসোগ্লিয়া দ্বারা পৃথক এপিডার্মিস ও গ্যাস্ট্রোডার্মিস); একক মুখছিদ্রযুক্ত গ্যাস্ট্রোভাস্কুলার গহ্বর।',
            diagnosticFeature: 'Radiata: Diploblastic with gastrovascular cavity',
            diagnosticFeatureBn: 'রেডিয়াটা: মেসোগ্লিয়াযুক্ত দ্বিভ্রূণস্তরী ও গ্যাস্ট্রোভাস্কুলার গহ্বর',
            resultType: 'next_step',
            nextStepId: 3
          },
          {
            lead: 'Bilateral symmetry (or secondary pentaradial symmetry in adult echinoderms); triploblastic organization with ectoderm, mesoderm, and endoderm; complete gut with mouth and anus (except basal forms); cephalization typically present.',
            leadBn: 'দ্বিপার্শ্বীয় প্রতিসাম্য (অথবা একাইনোডার্মদের প্রাপ্তবয়স্ক পঞ্চ-অরীয় প্রতিসাম্য); ত্রিভ্রূণস্তরী দেহ; মুখ ও পায়ুযুক্ত সম্পূর্ণ পরিপাক নালী; মস্তকীভবন বিদ্যমান।',
            diagnosticFeature: 'Bilateria: Triploblastic with cephalization',
            diagnosticFeatureBn: 'বাইলেটেরিয়া: ত্রিভ্রূণস্তরী ও মস্তকীভবন',
            resultType: 'next_step',
            nextStepId: 4
          }
        ]
      },
      {
        id: 3,
        title: 'Radiate Phyla: Cnidocytes vs Comb Rows',
        titleBn: 'রেডিয়াটা পর্বসমূহ: নিডোসাইট বনাম কম্ব প্লেট',
        character: 'Specialized stinging organelles (cnidocytes) vs ciliated comb plates (ctenes)',
        characterBn: 'দংশক অঙ্গাণু (নিডোসাইট) বনাম সিলিয়াযুক্ত কম্ব প্লেট (টিন)',
        couplets: [
          {
            lead: 'Tentacles equipped with specialized stinging cells (cnidocytes containing nematocysts); polymorphic life cycles frequently exhibiting sessile polyp and/or free-swimming medusa stages; no ciliary comb plates.',
            leadBn: 'নেমাটোসিস্টযুক্ত নিডোসাইট বা দংশক কোষ সম্বলিত কর্ষিকা; পলিপ বা মেডুসা দশাবিশিষ্ট বহুরূপী জীবনচক্র; সিলিয়ারি কম্ব প্লেট অনুপস্থিত।',
            diagnosticFeature: 'Cnidocytes containing nematocysts, polyp/medusa body forms',
            diagnosticFeatureBn: 'নিডোসাইট, নেমাটোসিস্ট, পলিপ/মেডুসা দেহ',
            resultType: 'taxon',
            taxonId: 'taxon-cnidaria',
            rationaleEn: 'Resolves to Phylum Cnidaria (Hydras, Jellyfishes, Anemones, Corals)',
            rationaleBn: 'নিডারিয়া পর্ব (জেলিফিশ, প্রবাল, হাইড্রা)'
          },
          {
            lead: 'Body transparent and gelatinous; locomotion propelled by 8 longitudinal meridional rows of ciliated comb plates (ctenes); tentacles equipped with adhesive colloblasts (lasso cells) rather than stinging nematocysts.',
            leadBn: 'স্বচ্ছ জেলিসদৃশ দেহ; ৮টি অনুদৈর্ঘ্য সিলিয়াযুক্ত চিরুনি প্লেট (টিন) দ্বারা চলন; আঠালো কলোব্লাস্ট কোষযুক্ত কর্ষিকা, নিডোসাইট অনুপস্থিত।',
            diagnosticFeature: '8 ciliated comb plates (ctenes), colloblasts, biradial symmetry',
            diagnosticFeatureBn: '৮টি সিলিয়াযুক্ত কম্ব প্লেট, কলোব্লাস্ট, দ্বি-অরীয় প্রতিসাম্য',
            resultType: 'taxon',
            taxonId: 'taxon-ctenophora',
            rationaleEn: 'Resolves to Phylum Ctenophora (Comb jellies)',
            rationaleBn: 'টিনোফোরা পর্ব (কম্ব জেলি)'
          }
        ]
      },
      {
        id: 4,
        title: 'Adult Symmetry and Water Vascular System',
        titleBn: 'প্রাপ্তবয়স্ক প্রতিসাম্য ও পানি সংবহনতন্ত্র',
        character: 'Secondary pentaradial symmetry and ambulacral system vs persistent bilateral body',
        characterBn: 'দ্বিতীয়ক পঞ্চ-অরীয় প্রতিসাম্য ও অ্যাম্বুলাক্রাল তন্ত্র বনাম দ্বিপার্শ্বীয় দেহ',
        couplets: [
          {
            lead: 'Adult with secondary pentamerous (pentaradial) symmetry (larvae strictly bilateral); coelomic water vascular system operating hydraulic tube feet (podia) through ambulacral grooves; mesodermal endoskeleton composed of calcareous ossicles.',
            leadBn: 'প্রাপ্তবয়স্ক অবস্থায় দ্বিতীয়ক পঞ্চ-অরীয় প্রতিসাম্য (লার্ভা দ্বিপার্শ্বীয়); হাইড্রোলিক নালিপদ পরিচালনাকারী পানি সংবহনতন্ত্র; ক্যালসিয়াম নির্মিত মেসোডার্মাল অসিকেল কঙ্কাল।',
            diagnosticFeature: 'Pentaradial symmetry, water vascular system with tube feet, calcareous ossicles',
            diagnosticFeatureBn: 'পঞ্চ-অরীয় প্রতিসাম্য, নালিপদযুক্ত পানি সংবহনতন্ত্র, অসিকেল',
            resultType: 'taxon',
            taxonId: 'taxon-echinodermata',
            rationaleEn: 'Resolves to Phylum Echinodermata (Sea stars, Urchins, Sea cucumbers)',
            rationaleBn: 'একাইনোডার্মাটা পর্ব (তারা মাছ, সমুদ্র শসা, সমুদ্র আর্চিন)'
          },
          {
            lead: 'Persistent bilateral symmetry in adult; no water vascular system or hydraulic tube feet; body organized along an anteroposterior axis.',
            leadBn: 'প্রাপ্তবয়স্কদের ক্ষেত্রেও স্থায়ী দ্বিপার্শ্বীয় প্রতিসাম্য; পানি সংবহনতন্ত্র নেই; সম্মুখ-পশ্চাৎ অক্ষ বরাবর সুসংগঠিত দেহ।',
            diagnosticFeature: 'Persistent bilateral body plan',
            diagnosticFeatureBn: 'স্থায়ী দ্বিপার্শ্বীয় দেহ কাঠামো',
            resultType: 'next_step',
            nextStepId: 5
          }
        ]
      },
      {
        id: 5,
        title: 'Mantle and Shell vs Segmented Body',
        titleBn: 'ম্যান্টল ও খোলস বনাম খণ্ডায়িত দেহ',
        character: 'Mantle secreting calcareous shell vs metamerically segmented body',
        characterBn: 'খোলস ক্ষরণকারী ম্যান্টল বনাম মেটামেরিক খণ্ডায়ন',
        couplets: [
          {
            lead: 'Soft, typically unsegmented body divided into muscular head-foot and visceral mass; dorsal body wall formed into a mantle (pallium) secreting a calcareous shell or enclosing a mantle cavity with ctenidia; rasping radula typically present.',
            leadBn: 'নরম অখণ্ডায়িত দেহ যা পেশিবহুল পদ ও ভিসেরাল ভরে বিভক্ত; ম্যান্টল দ্বারা ক্ষরিত ক্যালসিয়াম খোলস বা ম্যান্টল গহ্বর; পরিপাকে অনন্য র্যাডুলা উপস্থিত।',
            diagnosticFeature: 'Mantle, calcareous shell, muscular foot, radula',
            diagnosticFeatureBn: 'ম্যান্টল, ক্যালসিয়াম খোলস, পেশিবহুল পদ, র্যাডুলা',
            resultType: 'taxon',
            taxonId: 'taxon-mollusca',
            rationaleEn: 'Resolves to Phylum Mollusca (Snails, Clams, Squids, Chitons)',
            rationaleBn: 'মলাস্কা পর্ব (শামুক, ঝিনুক, অক্টোপাস, কাইটোন)'
          },
          {
            lead: 'Body segmented (metameric) along anteroposterior axis OR with jointed cuticular appendages; mantle and molluscan radula absent.',
            leadBn: 'অনুদৈর্ঘ্য অক্ষ বরাবর মেটামেরিক খণ্ডায়িত দেহ অথবা সন্ধিযুক্ত উপাঙ্গবিশিষ্ট; ম্যান্টল ও র্যাডুলা অনুপস্থিত।',
            diagnosticFeature: 'Segmented body plan or jointed appendages',
            diagnosticFeatureBn: 'খণ্ডায়িত দেহ বা সন্ধিযুক্ত উপাঙ্গ',
            resultType: 'next_step',
            nextStepId: 6
          }
        ]
      },
      {
        id: 6,
        title: 'Exoskeleton and Jointed Appendages',
        titleBn: 'বহিঃকঙ্কাল ও সন্ধিযুক্ত উপাঙ্গ',
        character: 'Jointed appendages with chitinous exoskeleton vs hydrostatic annelid segmentation',
        characterBn: 'কাইটিনময় বহিঃকঙ্কাল ও সন্ধিযুক্ত উপাঙ্গ বনাম হাইড্রোস্ট্যাটিক অ্যানিলিড খণ্ডায়ন',
        couplets: [
          {
            lead: 'Jointed, paired appendages; body enclosed in a rigid or flexible cuticular exoskeleton composed of chitin and proteins (often mineralized) requiring periodic ecdysis (molting); tagmatized into distinct regions (head, thorax, abdomen).',
            leadBn: 'সন্ধিযুক্ত জোড় উপাঙ্গ; কাইটিন ও প্রোটিন নির্মিত শক্ত বহিঃকঙ্কাল যা নির্দিষ্ট সময় পর পর মোচিত হয় (একডাইসিস); ট্যাগমাটায়িত দেহ (মস্তক, বক্ষ, উদর)।',
            diagnosticFeature: 'Jointed appendages, chitinous exoskeleton, ecdysis, tagmatization',
            diagnosticFeatureBn: 'সন্ধিযুক্ত উপাঙ্গ, কাইটিন বহিঃকঙ্কাল, নির্মোচন, ট্যাগমাটাইজেশন',
            resultType: 'taxon',
            taxonId: 'taxon-arthropoda',
            rationaleEn: 'Resolves to Phylum Arthropoda (Crustaceans, Insects, Arachnids, Centipedes)',
            rationaleBn: 'আর্থ্রোপোডা পর্ব (পতঙ্গ, চিংড়ি, কাঁকড়া, মাকড়সা)'
          },
          {
            lead: 'Appendages unjointed or absent; body without rigid chitinous exoskeleton undergoing ecdysis.',
            leadBn: 'সন্ধিহীন উপাঙ্গ বা উপাঙ্গ অনুপস্থিত; একডাইসিস প্রক্রিয়ার অনমনীয় কাইটিন বহিঃকঙ্কাল নেই।',
            diagnosticFeature: 'Non-arthropod metameric or chordate body plan',
            diagnosticFeatureBn: 'নন-আর্থ্রোপোড মেটামেরিক বা কর্ডেট কাঠামো',
            resultType: 'next_step',
            nextStepId: 7
          }
        ]
      },
      {
        id: 7,
        title: 'Annelid Metamerism vs Chordate Characteristics',
        titleBn: 'অ্যানিলিড খণ্ডায়ন বনাম কর্ডাটার বৈশিষ্ট্য',
        character: 'Hydrostatic metameric coelom with chaetae vs dorsal notochord and hollow nerve cord',
        characterBn: 'সিটিযুক্ত হাইড্রোস্ট্যাটিক সিলোমীয় খণ্ডায়ন বনাম পৃষ্ঠীয় নটোকর্ড ও ফাঁপা স্নায়ুরজ্জু',
        couplets: [
          {
            lead: 'True metameric segmentation divided internally by transverse septa; coelomic fluid acts as hydrostatic skeleton; chitinous setae/chaetae or suckers present; ventral double solid nerve cord; closed circulatory system; no notochord.',
            leadBn: 'প্রকৃত মেটামেরিক খণ্ডায়ন যা ভেতরের দিকে সেপটা দ্বারা বিভক্ত; তরলপূর্ণ সিলোমীয় হাইড্রোস্ট্যাটিক কঙ্কাল; কাইটিনময় সিটি বা চোষক উপস্থিত; অঙ্কীয় নিরেট স্নায়ুরজ্জু; বদ্ধ রক্ত সংবহন; নটোকর্ড নেই।',
            diagnosticFeature: 'Metameric coelomate body, chitinous setae/chaetae, hydrostatic skeleton',
            diagnosticFeatureBn: 'মেটামেরিক সিলোমেট দেহ, কাইটিনময় সিটি, হাইড্রোস্ট্যাটিক কঙ্কাল',
            resultType: 'taxon',
            taxonId: 'taxon-annelida-marine',
            rationaleEn: 'Resolves to Phylum Annelida (Segmented worms: Earthworms, Marine bristle worms, Leeches)',
            rationaleBn: 'অ্যানিলিডা পর্ব (কেঁচো, জোঁক, নেরিস)'
          },
          {
            lead: 'Possessing at some developmental stage: dorsal longitudinal stiffening notochord, dorsal hollow tubular nerve cord, pharyngeal gill slits or clefts, endostyle (or thyroid gland), and a post-anal muscular tail.',
            leadBn: 'জীবনের যেকোনো দশায় উপস্থিত: পৃষ্ঠীয় নটোকর্ড, পৃষ্ঠীয় ফাঁপা নলাকার স্নায়ুরজ্জু, গলবিলীয় ফুলকা রন্ধ্র, এন্ডোস্টাইল (বা থাইরয়েড গ্রন্থি) ও পায়ুপশ্চাৎ পেশিবহুল লেজ।',
            diagnosticFeature: 'Notochord, dorsal hollow nerve cord, pharyngeal clefts, post-anal tail',
            diagnosticFeatureBn: 'নটোকর্ড, পৃষ্ঠীয় ফাঁপা স্নায়ুরজ্জু, গলবিলীয় ফুলকা রন্ধ্র, পায়ুপশ্চাৎ লেজ',
            resultType: 'taxon',
            taxonId: 'taxon-chordata',
            rationaleEn: 'Resolves to Phylum Chordata (Tunicates, Lancelets, Vertebrates)',
            rationaleBn: 'কর্ডাটা পর্ব (টিউনিক্যাটা, ল্যান্সলেট, মেরুদণ্ডী প্রাণী)'
          }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // Key 2: Classes of Subphylum Vertebrata
  // ---------------------------------------------------------------------------
  {
    id: 'key-global-vertebrate-classes',
    title: 'Diagnostic Key to the Classes of Subphylum Vertebrata',
    titleBn: 'ভার্টিব্রাটা (মেরুদণ্ডী) উপপর্বের শ্রেণিসমূহের শনাক্তকরণ কুঞ্জি',
    scope: 'global',
    targetTaxonId: 'taxon-chordata',
    majorGroup: 'vertebrates',
    taxonScope: 'Vertebrata (Agnatha, Chondrichthyes, Osteichthyes, Amphibia, Reptilia, Aves, Mammalia)',
    taxonScopeBn: 'ভার্টিব্রাটা (অ্যাগনাথা, তরুণাস্থিময় মাছ, অস্থিময় মাছ, উভচর, সরীসৃপ, পাখি, স্তন্যপায়ী)',
    description: 'Systematic morphological key differentiating the major vertebrate classes based on jaw architecture, cranial anatomy, skeletal composition, integumentary appendages, and amniotic reproduction.',
    descriptionBn: 'চোয়ালের গঠন, খুলির অ্যানাটমি, কঙ্কালের প্রকৃতি, ত্বকের উপাদান ও প্রজননের ভিত্তিতে মেরুদণ্ডী প্রাণীদের প্রধান শ্রেণিসমূহের শনাক্তকরণ কুঞ্জি।',
    educationalLevel: 'intermediate',
    keyType: 'dichotomous',
    sourceReferenceIds: ['ref-kardong-2018', 'ref-hickman-2020'],
    verificationStatus: 'verified',
    steps: [
      {
        id: 1,
        title: 'Jaw Architecture (Agnatha vs Gnathostomata)',
        titleBn: 'চোয়ালের গঠন (অ্যাগনাথা বনাম ন্যাথোস্টোমাটা)',
        character: 'Presence or absence of articulating jaws',
        characterBn: 'সন্ধিযুক্ত চোয়ালের উপস্থিতি বা অনুপস্থিতি',
        couplets: [
          {
            lead: 'Jaws absent; mouth round, suctorial, or slit-like without articulating mandibles; paired pectoral and pelvic fins completely absent; eel-like cylindrical body; cartilaginous or rudimentary cranium.',
            leadBn: 'প্রকৃত চোয়াল অনুপস্থিত; মুখ গোল, চোষক বা ফাটলের মতো; বক্ষ ও শ্রোণী পাখনা সম্পূর্ণ অনুপস্থিত; নলাকার ইল-সদৃশ দেহ; তরুণাস্থিময় খুলি।',
            diagnosticFeature: 'Jawless agnathan craniates without paired fins',
            diagnosticFeatureBn: 'চোয়ালবিহীন অ্যাগনাথা ও জোড় পাখনা অনুপস্থিত',
            resultType: 'next_step',
            nextStepId: 2
          },
          {
            lead: 'True articulating jaws derived from anterior visceral arches present; paired appendages (pectoral and pelvic fins or tetrapod limbs) present; vertebral column well-developed.',
            leadBn: 'চোয়াল উপস্থিত; জোড় উপাঙ্গ (বক্ষ ও শ্রোণী পাখনা বা টেট্রাপড পদ) বিদ্যমান; সুগঠিত মেরুদণ্ড।',
            diagnosticFeature: 'Jawed gnathostome vertebrates',
            diagnosticFeatureBn: 'চোয়ালযুক্ত ন্যাথোস্টোমাটা মেরুদণ্ডী',
            resultType: 'next_step',
            nextStepId: 3
          }
        ]
      },
      {
        id: 2,
        title: 'Agnathan Lineages: Hagfishes vs Lampreys',
        titleBn: 'অ্যাগনাথা শাখা: হ্যাগফিশ বনাম ল্যাম্প্রে',
        character: 'Tentacles and slime pores vs oral sucker disc and dorsal eyes',
        characterBn: 'কর্ষিকা ও শ্লেষ্মা ছিদ্র বনাম মৌখিক চোষক চাকতি ও উন্নত চোখ',
        couplets: [
          {
            lead: 'Terminal mouth surrounded by 3-4 pairs of sensory barbels; degenerate eyes without lens; series of lateral slime pores exuding copious fibrous mucus; strictly marine scavengers.',
            leadBn: 'প্রান্তীয় মুখ ৩-৪ জোড়া সংবেদী কর্ষিকা দ্বারা বেষ্টিত; লেন্সবিহীন অন্ধ চোখ; প্রচুর শ্লেষ্মা নির্গমনকারী পার্শ্বীয় শ্লেষ্মা ছিদ্র; সামুদ্রিক শিকারি/মৃতভোজী।',
            diagnosticFeature: 'Myxini: Slime pores, sensory barbels, no dorsal fin',
            diagnosticFeatureBn: 'মিক্সিনি: শ্লেষ্মা ছিদ্র, কর্ষিকা, পৃষ্ঠ পাখনা নেই',
            resultType: 'taxon',
            taxonId: 'taxon-class-myxini',
            rationaleEn: 'Resolves to Class Myxini (Hagfishes)',
            rationaleBn: 'শ্রেণি মিক্সিনি (হ্যাগফিশ)'
          },
          {
            lead: 'Circular subterminal funnel-like oral sucker disc lined with cornified epidermal teeth; well-developed dorsal eyes; 7 pairs of lateral pore-like gill openings; dorsal fin present.',
            leadBn: 'কেরাটিনময় দাঁতযুক্ত বৃত্তাকার মৌখিক চোষক চাকতি; উন্নত চোখ; ৭ জোড়া গোল ফুলকা ছিদ্র; পৃষ্ঠ পাখনা বিদ্যমান।',
            diagnosticFeature: 'Petromyzonti: Oral sucker disc with horny teeth, 7 gill pores',
            diagnosticFeatureBn: 'পেট্রমাইজন্টি: চোষক চাকতি, শিং-দাঁত, ৭ জোড়া ফুলকা ছিদ্র',
            resultType: 'taxon',
            taxonId: 'taxon-class-petromyzonti',
            rationaleEn: 'Resolves to Class Petromyzonti (Lampreys)',
            rationaleBn: 'শ্রেণি পেট্রমাইজন্টি (ল্যাম্প্রে)'
          }
        ]
      },
      {
        id: 3,
        title: 'Aquatic Fin-Breathers vs Terrestrial Tetrapods',
        titleBn: 'জলজ পাখনাযুক্ত মাছ বনাম চতুষ্পদী টেট্রাপড',
        character: 'Median and paired fins with gills vs chiridium limbs with digits',
        characterBn: 'ফুলকা ও পাখনাযুক্ত মাছ বনাম আঙুলযুক্ত চতুষ্পদী পদ',
        couplets: [
          {
            lead: 'Primary aquatic vertebrates; locomotion propelled by median and paired rayed or lobed fins; internal branchial gills functioning throughout life for gas exchange; skin covered with scales or naked.',
            leadBn: 'প্রাথমিক জলজ মেরুদণ্ডী; জোড় ও বিজোড় পাখনার সাহায্যে চলন; আজীবন কার্যকর ফুলকার সাহায্যে শ্বাসকার্য; ত্বক আঁইশযুক্ত বা নগ্ন।',
            diagnosticFeature: 'Pisces: Aquatic respiration with gills and fins',
            diagnosticFeatureBn: 'মাছ: ফুলকা ও পাখনাবিশিষ্ট জলজ জীবন',
            resultType: 'next_step',
            nextStepId: 4
          },
          {
            lead: 'Tetrapods; paired appendages modified as walking, leaping, flying, or swimming limbs with digits (chiridium, secondarily lost in snakes and caecilians); lungs primary respiratory organs in adults.',
            leadBn: 'টেট্রাপড; জোড় উপাঙ্গ অঙ্গুলিযুক্ত পদে রূপান্তরিত (সাপ ও সিসিলিয়ানে অপ্রধানভাবে বিলুপ্ত); প্রাপ্তবয়স্কদের মূল শ্বাস অঙ্গ ফুসফুস।',
            diagnosticFeature: 'Tetrapoda: Chiridium limbs with digits, lungs',
            diagnosticFeatureBn: 'টেট্রাপডা: চার পদ, ফুসফুস',
            resultType: 'next_step',
            nextStepId: 6
          }
        ]
      },
      {
        id: 4,
        title: 'Cartilaginous vs Bony Fishes',
        titleBn: 'তরুণাস্থিময় বনাম অস্থিময় মাছ',
        character: 'Endoskeleton composition, gill slits, and scale type',
        characterBn: 'কঙ্কালের উপাদান, ফুলকা রন্ধ্র ও আঁইশের ধরন',
        couplets: [
          {
            lead: 'Endoskeleton entirely cartilaginous (often calcified but never true bone); 5-7 pairs of separate lateral or ventral gill slits (or single opercular slit in holocephalans); placoid scales (dermal denticles); males possess pelvic claspers for internal fertilization.',
            leadBn: 'সম্পূর্ণ তরুণাস্থিময় কঙ্কাল; ৫-৭ জোড়া পৃথক ফুলকা রন্ধ্র; প্লাকয়েড আঁইশ (ডার্মাল ডেনটিকেল); পুরুষে অভ্যন্তরীণ নিষেকের জন্য ক্লাস্পার বিদ্যমান।',
            diagnosticFeature: 'Chondrichthyes: Cartilaginous skeleton, placoid scales, claspers',
            diagnosticFeatureBn: 'কনড্রিকথিস: তরুণাস্থিময় কঙ্কাল, প্লাকয়েড আঁইশ, ক্লাস্পার',
            resultType: 'taxon',
            taxonId: 'taxon-chondrichthyes',
            rationaleEn: 'Resolves to Class Chondrichthyes (Sharks, Rays, Chimaeras)',
            rationaleBn: 'শ্রেণি কনড্রিকথিস (হাঙর, শাপলাপাতা মাছ, শিমেরা)'
          },
          {
            lead: 'Endoskeleton predominantly ossified with true cellular or acellular bone; single gill opening on each side covered by a bony operculum; swim bladder or lungs typically present; scales cycloid, ctenoid, ganoid, or absent.',
            leadBn: 'অস্থিময় কঙ্কাল; প্রতিপাশে অস্থিময় অপারকুলাম বা কানকো দ্বারা আবৃত একক ফুলকা ছিদ্র; পটকা বা ফুসফুস উপস্থিত; সাইক্লয়েড/টিনয়েড/গ্যানয়েড আঁইশ।',
            diagnosticFeature: 'Osteichthyes: Bony skeleton, opercular gill cover, swim bladder',
            diagnosticFeatureBn: 'অস্টিকথিস: অস্থিময় কঙ্কাল, কানকো, পটকা',
            resultType: 'next_step',
            nextStepId: 5
          }
        ]
      },
      {
        id: 5,
        title: 'Ray-Finned vs Lobe-Finned Bony Fishes',
        titleBn: 'রশ্মিময় বনাম মাংসল-পাখনাযুক্ত অস্থিময় মাছ',
        character: 'Fin ray lepidotrichia vs muscular fin lobes with internal bony axis',
        characterBn: 'পাখনা রশ্মি (লেপিডোট্রিকিয়া) বনাম অভ্যন্তরীণ অস্থিযুক্ত মাংসল পাখনা',
        couplets: [
          {
            lead: 'Fins supported primarily by webbed flexible horny or bony lepidotrichia (fin rays) extending directly from the body wall without a muscular fleshy basal lobe.',
            leadBn: 'পাখনা সরাসরি দেহপ্রাচীর থেকে বিস্তৃত সূক্ষ্ম রশ্মি (লেপিডোট্রিকিয়া) দ্বারা সমর্থিত; কোনো পেশিবহুল মাংসল গোড়া নেই।',
            diagnosticFeature: 'Actinopterygii: Ray-finned bony fishes',
            diagnosticFeatureBn: 'অ্যাকটিনোপ্টেরিগি: রশ্মিময় পাখনাযুক্ত মাছ',
            resultType: 'taxon',
            taxonId: 'taxon-actinopterygii',
            rationaleEn: 'Resolves to Class Actinopterygii (Ray-finned fishes: Teleosts, Carps, Catfishes, Perches)',
            rationaleBn: 'শ্রেণি অ্যাকটিনোপ্টেরিগি (রশ্মি-পাখনাযুক্ত মাছ)'
          },
          {
            lead: 'Paired fins mounted on fleshy, muscular, scaly lobes articulated with the girdles by a single basal skeletal element (monobasic humerus/femur homolog); cosmoid scales or functional lungs.',
            leadBn: 'মাংসল, পেশিবহুল ও আঁইশযুক্ত গোড়াবিশিষ্ট জোড় পাখনা; একক হিউমেরাস/ফিমার সমসংস্থ অস্থি দ্বারা সংযুক্ত; ফুসফুস বা কসময়েড আঁইশ।',
            diagnosticFeature: 'Sarcopterygii: Lobe-finned fishes (Coelacanths, Lungfishes)',
            diagnosticFeatureBn: 'সারকোপ্টেরিগি: মাংসল পাখনাযুক্ত মাছ (সিলাকান্থ, লাংফিশ)',
            resultType: 'taxon',
            taxonId: 'taxon-sarcopterygii',
            rationaleEn: 'Resolves to Class Sarcopterygii (Lobe-finned fishes)',
            rationaleBn: 'শ্রেণি সারকোপ্টেরিগি (মাংসল পাখনাযুক্ত মাছ)'
          }
        ]
      },
      {
        id: 6,
        title: 'Amphibians vs Amniotes',
        titleBn: 'উভচর বনাম অ্যামনিওট',
        character: 'Moist glandular skin and anamniotic eggs vs keratinized skin and amniotic egg',
        characterBn: 'ভেজা গ্রন্থিময় ত্বক ও অ্যানঅ্যামনিওটিক ডিম বনাম কেরাটিনযুক্ত ত্বক ও অ্যামনিওটিক ডিম',
        couplets: [
          {
            lead: 'Skin moist, glandular, permeable, lacking epidermal scales; respiration via skin (cutaneous), buccal pumping, and simple sac-like lungs; anamniotic jelly-coated eggs requiring freshwater; biphasic life history typically with aquatic gill-breathing larva.',
            leadBn: 'ত্বক ভেজা, গ্রন্থিময়, আঁইশহীন ও প্রবেশ্য; ত্বক ও ফুসফুস দিয়ে শ্বাসকার্য; অ্যানঅ্যামনিওটিক জেলিসদৃশ ডিম; জলজ লার্ভা ও রূপান্তর বিশিষ্ট জীবনচক্র।',
            diagnosticFeature: 'Amphibia: Moist scaleless skin, anamniotic eggs, metamorphosis',
            diagnosticFeatureBn: 'অ্যাম্ফিবিয়া: ভেজা গ্রন্থিময় ত্বক, খোসাহীন ডিম, রূপান্তর',
            resultType: 'taxon',
            taxonId: 'taxon-amphibia',
            rationaleEn: 'Resolves to Class Amphibia (Frogs, Salamanders, Caecilians)',
            rationaleBn: 'শ্রেণি অ্যাম্ফিবিয়া (ব্যাঙ, স্যালামান্ডার, সিসিলিয়ান)'
          },
          {
            lead: 'Skin dry, heavily keratinized, covered with scales, scutes, feathers, or hair; amniotic egg with amnion, chorion, allantois, and yolk sac; internal fertilization; fully emancipated from standing water for larval development.',
            leadBn: 'ত্বক শুষ্ক ও কেরাটিনযুক্ত (আঁইশ, স্কুট, পালক বা লোম); খোসাযুক্ত অ্যামনিওটিক ডিম; অভ্যন্তরীণ নিষেক; লার্ভা দশাহীন স্থলজ বিকাশ।',
            diagnosticFeature: 'Amniota: Keratinized integument, amniotic egg',
            diagnosticFeatureBn: 'অ্যামনিওটা: কেরাটিন ত্বক, অ্যামনিওটিক ডিম',
            resultType: 'next_step',
            nextStepId: 7
          }
        ]
      },
      {
        id: 7,
        title: 'Reptiles vs Birds and Mammals',
        titleBn: 'সরীসৃপ বনাম পাখি ও স্তন্যপায়ী',
        character: 'Ectothermy with epidermal scales vs endothermy with feathers or hair',
        characterBn: 'এপিডার্মাল আঁইশযুক্ত শীতলরক্ত বনাম পালক/লোমযুক্ত উষ্ণরক্ত',
        couplets: [
          {
            lead: 'Ectothermic poikilotherms; body covered with dry epidermal keratinized scales or bony osteoderms/scutes; heart 3-chambered (with partial interventricular septum) or 4-chambered in crocodilians; no hair or contour feathers.',
            leadBn: 'শীতলরক্তের এক্টোথার্মিক প্রাণী; ত্বক কেরাটিনযুক্ত এপিডার্মাল আঁইশ বা স্কুট দ্বারা আবৃত; ৩ বা আংশিক ৪-প্রকোষ্ঠী হৃদপিণ্ড; লোম বা পালক নেই।',
            diagnosticFeature: 'Reptilia: Epidermal scales/scutes, ectothermic metabolism',
            diagnosticFeatureBn: 'রেপটিলিয়া: কেরাটিন আঁইশ/স্কুট, শীতলরক্ত',
            resultType: 'taxon',
            taxonId: 'taxon-reptilia',
            rationaleEn: 'Resolves to Class Reptilia (Turtles, Lizards, Snakes, Crocodiles, Tuataras)',
            rationaleBn: 'শ্রেণি রেপটিলিয়া (কাছিম, সাপ, গিরগিটি, কুমির, টুয়াটারা)'
          },
          {
            lead: 'Endothermic homeotherms with elevated metabolic rates; insulating body covering composed of keratinous feathers OR mammalian pelage (hair); complete 4-chambered heart with full systemic/pulmonary separation.',
            leadBn: 'উষ্ণরক্তের এন্ডোথার্মিক প্রাণী; পালক বা লোম দ্বারা আবৃত অন্তরক দেহত্বক; সম্পূর্ণ চার-প্রকোষ্ঠী হৃদপিণ্ড।',
            diagnosticFeature: 'Endotherms with specialized keratin covering (feathers or hair)',
            diagnosticFeatureBn: 'উষ্ণরক্ত, বিশেষায়িত পালক বা লোম',
            resultType: 'next_step',
            nextStepId: 8
          }
        ]
      },
      {
        id: 8,
        title: 'Birds vs Mammals',
        titleBn: 'পাখি বনাম স্তন্যপায়ী',
        character: 'Feathers and toothless bill vs mammary glands and hair',
        characterBn: 'পালক ও চঞ্চু বনাম স্তনগ্রন্থি ও লোম',
        couplets: [
          {
            lead: 'Forelimbs modified as wings; body covered with contour, down, and flight feathers; toothless keratinous bill/beak; hollow pneumatic bones with air sacs connected to rigid flow-through lungs; strictly oviparous.',
            leadBn: 'অগ্রপদ ডানায় রূপান্তরিত; দেহ পালক দ্বারা আবৃত; দাঁতহীন কেরাটিনময় চঞ্চু; বায়ুথলিযুক্ত ফাঁপা অস্থি; সম্পূর্ণ ডিম্বজ।',
            diagnosticFeature: 'Aves: Feathers, wings, toothless bill, pneumatic skeleton',
            diagnosticFeatureBn: 'এভিস: পালক, ডানা, চঞ্চু, ফাঁপা অস্থি',
            resultType: 'taxon',
            taxonId: 'taxon-aves',
            rationaleEn: 'Resolves to Class Aves (Birds)',
            rationaleBn: 'শ্রেণি এভিস (পাখি)'
          },
          {
            lead: 'Females nourish young with milk secreted by mammary glands; body typically insulated by hair/fur (pelage); lower jaw consisting of a single dentary bone articulating with the squamosal; three middle ear ossicles (malleus, incus, stapes).',
            leadBn: 'মাতৃস্তনগ্রন্থি থেকে ক্ষরিত দুগ্ধ পান করে শাবক লালিত হয়; দেহ লোম দ্বারা আবৃত; চোয়াল একক ডেন্টারি অস্থি দ্বারা গঠিত; মধ্যকর্ণে তিনটি ক্ষুদ্রাস্থি (ম্যালিয়াস, ইনকাস, স্টেপিস)।',
            diagnosticFeature: 'Mammalia: Mammary glands, hair, single dentary, 3 ear ossicles',
            diagnosticFeatureBn: 'ম্যামালিয়া: স্তনগ্রন্থি, লোম, ৩টি মধ্যকর্ণ অস্থি',
            resultType: 'taxon',
            taxonId: 'taxon-mammalia',
            rationaleEn: 'Resolves to Class Mammalia (Mammals)',
            rationaleBn: 'শ্রেণি ম্যামালিয়া (স্তন্যপায়ী প্রাণী)'
          }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // Key 3: Major Global Fish Lineages & Orders Key
  // ---------------------------------------------------------------------------
  {
    id: 'key-global-fish-lineages',
    title: 'Diagnostic Morphological Key to Major Global Fish Lineages & Orders',
    titleBn: 'বিশ্বের প্রধান মৎস্য বর্গসমূহের অঙ্গসংস্থানিক শনাক্তকরণ কুঞ্জি',
    scope: 'global',
    targetTaxonId: 'taxon-fishes',
    majorGroup: 'fishes',
    taxonScope: 'Pisces (73-Order Canonical Fish Framework: Jawless, Cartilaginous, Lobe-finned, Bony fishes)',
    taxonScopeBn: 'মৎস্যসম্পদ (৭৩-বর্গীয় ক্যানোনিকাল মৎস্য কাঠামো: চোয়ালহীন, তরুণাস্থিময়, মাংসল-পাখনা ও অস্থিময় মাছ)',
    description: 'Systematic diagnostic key navigating the 73 canonical fish orders of BiotaElite. Distinguishes hagfishes, lampreys, chimaeras, sharks, rays, ancient ganoid fishes, and major teleost orders through validated anatomical characters.',
    descriptionBn: 'বায়োটাএলিটের ৭৩টি ক্যানোনিকাল মৎস্য বর্গের প্রামাণ্য অঙ্গসংস্থানিক কুঞ্জি। চোয়ালহীন, হাঙ্গর, শাপলাপাতা মাছ ও প্রধান অস্থিময় মৎস্য বর্গসমূহের নির্ভরযোগ্য শনাক্তকরণ।',
    educationalLevel: 'advanced',
    keyType: 'dichotomous',
    sourceReferenceIds: ['ref-nelson-2016', 'ref-fishbase-2024', 'ref-eschmeyer-2024'],
    verificationStatus: 'verified',
    steps: [
      {
        id: 1,
        title: 'Jaws and Skeletal Material',
        titleBn: 'চোয়াল ও কঙ্কালের উপাদান',
        character: 'Jaw presence and cartilaginous vs ossified skeleton',
        characterBn: 'চোয়াল এবং তরুণাস্থিময় বনাম অস্থিময় কঙ্কাল',
        couplets: [
          {
            lead: 'Jaws absent; cylindrical eel-like body without paired fins; pore-like or rounded gill apertures.',
            leadBn: 'চোয়াল অনুপস্থিত; জোড় পাখনা বিহীন নলাকার ইল-সদৃশ দেহ; ছিদ্রাল ফুলকা রন্ধ্র।',
            diagnosticFeature: 'Agnatha: Jawless craniates',
            diagnosticFeatureBn: 'অ্যাগনাথা: চোয়ালবিহীন মাছ',
            resultType: 'next_step',
            nextStepId: 2
          },
          {
            lead: 'Articulating jaws present; paired fins (pectoral and pelvic) present.',
            leadBn: 'সন্ধিযুক্ত চোয়াল উপস্থিত; জোড় বক্ষ ও শ্রোণী পাখনা বিদ্যমান।',
            diagnosticFeature: 'Gnathostomata: Jawed fishes',
            diagnosticFeatureBn: 'ন্যাথোস্টোমাটা: চোয়ালযুক্ত মাছ',
            resultType: 'next_step',
            nextStepId: 3
          }
        ]
      },
      {
        id: 2,
        title: 'Jawless Orders: Myxiniformes vs Petromyzontiformes',
        titleBn: 'চোয়ালহীন বর্গ: মিক্সিনিফর্মিস বনাম পেট্রমাইজন্টিফর্মিস',
        character: 'Slime pores and tentacles vs circular tooth-bearing sucking disc',
        characterBn: 'শ্লেষ্মা ছিদ্র ও কর্ষিকা বনাম দাঁতযুক্ত চোষক চাকতি',
        couplets: [
          {
            lead: 'Mouth surrounded by 6 barbels; lateral row of mucus slime pores; strictly marine.',
            leadBn: 'মুখ ৬টি কর্ষিকা দ্বারা বেষ্টিত; পার্শ্বীয় শ্লেষ্মা ছিদ্র বিদ্যমান; সামুদ্রিক।',
            diagnosticFeature: 'Myxine glutinosa — Atlantic hagfish',
            diagnosticFeatureBn: 'মিক্সিন গ্লুটিনোসা — আটলান্টিক হ্যাগফিশ',
            resultType: 'species',
            speciesId: 'sp-myxine-glutinosa'
          },
          {
            lead: 'Circular sucking disc lined with sharp cornified teeth; 7 external gill pores.',
            leadBn: 'তীক্ষ্ণ দাঁতযুক্ত বৃত্তাকার চোষক চাকতি; ৭টি বহিঃস্থ ফুলকা ছিদ্র।',
            diagnosticFeature: 'Petromyzon marinus — Sea lamprey',
            diagnosticFeatureBn: 'পেট্রমাইজন মারিনাস — সি ল্যাম্প্রে',
            resultType: 'species',
            speciesId: 'sp-petromyzon-marinus'
          }
        ]
      },
      {
        id: 3,
        title: 'Cartilaginous vs Bony Fishes',
        titleBn: 'তরুণাস্থিময় বনাম অস্থিময় মাছ',
        character: 'Cartilaginous skeleton with placoid scales vs bony skeleton with opercular flap',
        characterBn: 'প্লাকয়েড আঁইশযুক্ত তরুণাস্থিময় কঙ্কাল বনাম কানকোযুক্ত অস্থিময় কঙ্কাল',
        couplets: [
          {
            lead: 'Endoskeleton cartilaginous; skin with placoid denticles; gill openings 1 to 7 without true bony operculum.',
            leadBn: 'তরুণাস্থিময় কঙ্কাল; প্লাকয়েড ডেনটিকেলযুক্ত ত্বক; কানকোহীন ১-৭ জোড়া ফুলকা ছিদ্র।',
            diagnosticFeature: 'Chondrichthyes (Sharks, Rays, Chimaeras)',
            diagnosticFeatureBn: 'কনড্রিকথিস (হাঙর, রে, শিমেরা)',
            resultType: 'next_step',
            nextStepId: 4
          },
          {
            lead: 'Endoskeleton predominantly bony; single opercular gill opening on each side covered by bony operculum.',
            leadBn: 'অস্থিময় কঙ্কাল; কানকো দ্বারা আবৃত একক ফুলকা ছিদ্র।',
            diagnosticFeature: 'Osteichthyes (Bony fishes: Sarcopterygii & Actinopterygii)',
            diagnosticFeatureBn: 'অস্টিকথিস (অস্থিময় মাছ)',
            resultType: 'next_step',
            nextStepId: 7
          }
        ]
      },
      {
        id: 4,
        title: 'Chondrichthyes: Holocephali vs Elasmobranchii',
        titleBn: 'কনড্রিকথিস: হোলোসেফালি বনাম এলাসমোব্রাঞ্চি',
        character: 'Single opercular flap over 4 gill slits vs 5-7 open gill slits',
        characterBn: 'একক চামড়ার কানকো বনাম ৫-৭টি উন্মুক্ত ফুলকা ফাটল',
        couplets: [
          {
            lead: 'Gill slits covered by a single fleshy opercular flap; upper jaw fused to neurocranium (holostylic); dorsal fin with venomous spine; rat-like elongated tail.',
            leadBn: 'একক চামড়ার কানকো দ্বারা ফুলকা আবৃত; খুলির সাথে জোড়া চোয়াল; বিষাক্ত পৃষ্ঠ কাঁটা ও ইঁদুরের মতো লেজ।',
            diagnosticFeature: 'Chimaeriformes: Chimaera monstrosa (Rabbit fish)',
            diagnosticFeatureBn: 'শিমেরিফর্মিস: শিমেরা মনস্ট্রোসা',
            resultType: 'species',
            speciesId: 'sp-chimaera-monstrosa'
          },
          {
            lead: '5-7 pairs of open gill slits without operculum; hyostylic jaw suspension; placoid denticles.',
            leadBn: '৫-৭ জোড়া উন্মুক্ত ফুলকা ছিদ্র; কানকো নেই; প্লাকয়েড আঁইশ।',
            diagnosticFeature: 'Elasmobranchii: Sharks and Rays',
            diagnosticFeatureBn: 'এলাসমোব্রাঞ্চি: হাঙর ও শাপলাপাতা মাছ',
            resultType: 'next_step',
            nextStepId: 5
          }
        ]
      },
      {
        id: 5,
        title: 'Elasmobranchs: Lateral Gill Slits (Selachii) vs Ventral Gill Slits (Batoidea)',
        titleBn: 'এলাসমোব্রাঞ্চ: পার্শ্বীয় ফুলকা (হাঙর) বনাম অঙ্কীয় ফুলকা (রে)',
        character: 'Gill slit position and pectoral fin attachment',
        characterBn: 'ফুলকার অবস্থান এবং বক্ষ পাখনার সংযুক্তি',
        couplets: [
          {
            lead: 'Gill slits located laterally on the sides of the head; pectoral fins free from head; body typically fusiform cylindrical.',
            leadBn: 'মাথার দুই পাশে পার্শ্বীয়ভাবে ফুলকা অবস্থিত; বক্ষ পাখনা মাথা থেকে মুক্ত; নলাকার দেহ।',
            diagnosticFeature: 'Selachii: True Sharks',
            diagnosticFeatureBn: 'সেলাচি: প্রকৃত হাঙর',
            resultType: 'next_step',
            nextStepId: 6
          },
          {
            lead: 'Gill slits located ventrally on flat underside; pectoral fins enlarged and fused with sides of head forming a disc; body dorsoventrally flattened.',
            leadBn: 'দেহের নিচে অঙ্কীয় দেশে ফুলকা অবস্থিত; বক্ষ পাখনা বড় হয়ে মাথার সাথে যুক্ত হয়ে চাকতি গঠন করেছে; চ্যাপ্টা দেহ।',
            diagnosticFeature: 'Batoidea: Rays, Skates, and Guitarfishes',
            diagnosticFeatureBn: 'ব্যাটোইডিয়া: রে, স্কেট ও গিটারফিশ',
            resultType: 'next_step',
            nextStepId: 10
          }
        ]
      },
      {
        id: 6,
        title: 'Diagnostic Shark Orders',
        titleBn: 'প্রধান হাঙর বর্গসমূহ',
        character: 'Anal fin, spine presence, and head shape',
        characterBn: 'পায়ু পাখনা, কাঁটার উপস্থিতি ও মাথার গঠন',
        couplets: [
          {
            lead: 'Anal fin absent; 5 lateral gill slits; both dorsal fins preceded by a strong sharp spine.',
            leadBn: 'পায়ু পাখনা অনুপস্থিত; ৫টি পার্শ্বীয় ফুলকা ছিদ্র; উভয় পৃষ্ঠ পাখনার সম্মুখে শক্ত কাঁটা।',
            diagnosticFeature: 'Squaliformes: Squalus acanthias (Spiny dogfish)',
            diagnosticFeatureBn: 'স্কোয়ালিফর্মিস: স্কোয়ালাস অ্যাকান্থিয়াস',
            resultType: 'species',
            speciesId: 'sp-squalus-acanthias'
          },
          {
            lead: 'Anal fin present; body dorsoventrally flattened with terminal mouth and wing-like pectoral fins (superficially ray-like, but with lateral gill slits).',
            leadBn: 'পায়ু পাখনা উপস্থিত; দেহ কিছুটা চ্যাপ্টা, প্রান্তীয় মুখ ও ডানার মতো বক্ষ পাখনা (পার্শ্বীয় ফুলকা বিদ্যমান)।',
            diagnosticFeature: 'Squatiniformes: Squatina squatina (Angelshark)',
            diagnosticFeatureBn: 'স্কোয়াটিনিফর্মিস: স্কোয়াটিনা স্কোয়াটিনা',
            resultType: 'species',
            speciesId: 'sp-squatina-squatina'
          },
          {
            lead: 'Anal fin present; dorsal fins with spines; pig-like snout with molariform crushing teeth in rear jaws.',
            leadBn: 'পায়ু পাখনা উপস্থিত; পৃষ্ঠ পাখনার সামনে কাঁটা; পেষণকারী মোলার দাঁত।',
            diagnosticFeature: 'Heterodontiformes: Heterodontus portusjacksoni (Port Jackson shark)',
            diagnosticFeatureBn: 'হেটেরোডন্টিফর্মিস: হেটেরোডন্টাস পোর্টাসজ্যাকসনি',
            resultType: 'species',
            speciesId: 'sp-heterodontus-portusjacksoni'
          },
          {
            lead: 'Anal fin present; dorsal fins spineless; mouth behind eyes; nictitating eyelids present; large triangular serrated teeth.',
            leadBn: 'পায়ু পাখনা উপস্থিত; কাঁটাহীন পৃষ্ঠ পাখনা; চোখের পেছনে মুখ; নিকটিটেটিং পর্দা ও করাতের মতো দাঁত।',
            diagnosticFeature: 'Carcharhiniformes: Galeocerdo cuvier (Tiger shark)',
            diagnosticFeatureBn: 'কার্কারহিনিফর্মিস: গেলিওসার্ডো কুভিয়ের (টাইগার শার্ক)',
            resultType: 'species',
            speciesId: 'sp-galeocerdo-cuvier'
          }
        ]
      },
      {
        id: 7,
        title: 'Bony Fishes: Lobe-Finned vs Ancient Ray-Finned vs Teleosts',
        titleBn: 'অস্থিময় মাছ: মাংসল পাখনা বনাম প্রাচীন ও আধুনিক টেলিয়স্ট',
        character: 'Fin lobe structure and scale histology',
        characterBn: 'পাখনার গঠন ও আঁইশের প্রকৃতি',
        couplets: [
          {
            lead: 'Paired fins mounted on fleshy muscular scaly lobes; diphycercal 3-lobed caudal fin; intracranial joint present; deep-sea living fossil.',
            leadBn: 'পেশিবহুল মাংসল গোড়াবিশিষ্ট জোড় পাখনা; তিন খণ্ডযুক্ত লেজ; অন্তঃকরোটি সন্ধি; গভীর সমুদ্রের জীবন্ত জীবাশ্ম।',
            diagnosticFeature: 'Coelacanthiformes: Latimeria chalumnae (Coelacanth)',
            diagnosticFeatureBn: 'সিলাকান্থিফর্মিস: ল্যাটিমেরিয়া চালুমনি',
            resultType: 'species',
            speciesId: 'sp-latimeria-chalumnae'
          },
          {
            lead: 'Paired fins mounted on muscular lobes; functional lungs for air-breathing; aestivates in dried mud cocoons during drought.',
            leadBn: 'মাংসল পাখনা; বায়ুশ্বাসের জন্য ফুসফুস; খরায় কাদার কোকুনে সুপ্তাবস্থা কাটায়।',
            diagnosticFeature: 'Ceratodontiformes: Protopterus annectens (African lungfish)',
            diagnosticFeatureBn: 'সেরাটোডান্টিফর্মিস: প্রোটোপ্টেরাস অ্যানেকটেন্স',
            resultType: 'species',
            speciesId: 'sp-protopterus-annectens'
          },
          {
            lead: 'Dorsal fin divided into 5-18 independent finlets, each with a rigid spine; ganoid rhombic scales; paired lungs; African bichir.',
            leadBn: 'পৃষ্ঠ পাখনা ৫-১৮টি পৃথক ক্ষুদ্র পাখনায় বিভক্ত; শক্ত রম্বিক গ্যানয়েড আঁইশ; ফুসফুস বিদ্যমান।',
            diagnosticFeature: 'Polypteriformes: Polypterus senegalus (Senegal bichir)',
            diagnosticFeatureBn: 'পলিপ্টেরিফর্মিস: পলিপ্টেরাস সেনেগালাস',
            resultType: 'species',
            speciesId: 'sp-polypterus-senegalus'
          },
          {
            lead: 'Body with 5 longitudinal rows of sharp bony scutes; strongly heterocercal caudal fin; ventral mouth preceded by 4 tactile barbels.',
            leadBn: '৫টি অনুদৈর্ঘ্য ধারালো অস্থি-স্কুটের সারি; হেটেরোসার্কাল লেজ; মুখের সামনে ৪টি সংবেদী কর্ষিকা।',
            diagnosticFeature: 'Acipenseriformes: Acipenser sturio (European sturgeon)',
            diagnosticFeatureBn: 'অ্যাসিপেনসারিফর্মিস: অ্যাসিপেনসার স্টুরিয়ো',
            resultType: 'species',
            speciesId: 'sp-acipenser-sturio'
          },
          {
            lead: 'Teleostei: Advanced bony fishes with homocercal tail, mobile premaxilla, cycloid/ctenoid scales or naked skin.',
            leadBn: 'টেলিয়স্টেই: হোমোসার্কাল লেজ, চলনক্ষম প্রি-ম্যাক্সিলা এবং সাইক্লয়েড/টিনয়েড আঁইশযুক্ত আধুনিক মাছ।',
            diagnosticFeature: 'Teleostei lineage',
            diagnosticFeatureBn: 'টেলিয়স্টেই গোষ্ঠী',
            resultType: 'next_step',
            nextStepId: 8
          }
        ]
      },
      {
        id: 8,
        title: 'Specialized Teleost Orders',
        titleBn: 'বিশেষায়িত টেলিয়স্ট বর্গসমূহ',
        character: 'Morphological specializations: Cranial asymmetry, electric organs, elongated jaw',
        characterBn: 'অঙ্গসংস্থানিক বিশেষায়ন: চোখের অপ্রতিসাম্য, বৈদ্যুতিক অঙ্গ, লম্বা চোয়াল',
        couplets: [
          {
            lead: 'Both eyes migrated to one side of head in adults; asymmetrical flattened body adapted for benthic ocean floor concealment; dorsal and anal fins long.',
            leadBn: 'প্রাপ্তবয়স্ক অবস্থায় উভয় চোখ মাথার একপাশে চলে আসে; চ্যাপ্টা অপ্রতিসম দেহ; দীর্ঘ পৃষ্ঠ ও পায়ু পাখনা।',
            diagnosticFeature: 'Pleuronectiformes: Platichthys flesus (European flounder)',
            diagnosticFeatureBn: 'প্লিউরোনেকটিফর্মিস: প্লাটিকথিস ফ্লেসাস (ফ্ল্যাটফিশ)',
            resultType: 'species',
            speciesId: 'sp-platichthys-flesus'
          },
          {
            lead: 'Body encased in fused bony rings; tiny tubiform mouth without teeth; prehensile tail; males incubate eggs in ventral brood pouch.',
            leadBn: 'অস্থিময় বলয় দ্বারা আবৃত দেহ; দাঁতহীন নলাকার মুখ; পেঁচিয়ে ধরার উপযোগী লেজ; পুরুষ উদরীয় থলিতে ডিম ফোটায়।',
            diagnosticFeature: 'Syngnathiformes: Hippocampus erectus (Lined seahorse)',
            diagnosticFeatureBn: 'সিংনাথিফর্মিস: হিপ্পোক্যাম্পাস ইরেকটাস (ঘোড়ামাছ)',
            resultType: 'species',
            speciesId: 'sp-hippocampus-erectus'
          },
          {
            lead: 'First dorsal fin spine modified into an angling illicium with luminous esca (bait); enormous cavernous mouth with depressible teeth.',
            leadBn: 'প্রথম পৃষ্ঠ কাঁটা টোপ বা টর্চে রূপান্তরিত (ইলিশিয়াম); বিশালাকার হা-করা মুখ ও তীক্ষ্ণ দাঁত।',
            diagnosticFeature: 'Lophiiformes: Lophius piscatorius (Anglerfish)',
            diagnosticFeatureBn: 'লোফিফর্মিস: লোফিয়াস পিসকাটোরিয়াস',
            resultType: 'species',
            speciesId: 'sp-lophius-piscatorius'
          },
          {
            lead: 'Teeth fused into 4 solid beak-like plates; heavy globular scaleless body covered in small spinules capable of inflating with water or air; tetrodotoxin.',
            leadBn: 'দাঁত ৪টি শক্ত চঞ্চুর মতো প্লেটে মিলিত; পানি বা বাতাস খেয়ে বেলুনের মতো ফোলার ক্ষমতাসম্পন্ন দেহ; টেট্রোডোটক্সিন বিষ।',
            diagnosticFeature: 'Tetraodontiformes: Tetraodon mbu (Giant freshwater pufferfish)',
            diagnosticFeatureBn: 'টেট্রাওডন্টিফর্মিস: টেট্রাওডন ম্বু (মিঠাপানির পটকা মাছ)',
            resultType: 'species',
            speciesId: 'sp-tetraodon-mbu'
          },
          {
            lead: 'Other teleost orders (Clupeiformes, Cypriniformes, Siluriformes, Gobiiformes, etc.).',
            leadBn: 'অন্যান্য টেলিয়স্ট বর্গ (ইলিশ, রুই, ক্যাটফিশ, ডোরিকাটা ইত্যাদি)।',
            diagnosticFeature: 'Other Teleost Lineages',
            diagnosticFeatureBn: 'অন্যান্য টেলিয়স্ট শাখা',
            resultType: 'next_step',
            nextStepId: 9
          }
        ]
      },
      {
        id: 9,
        title: 'Otophysi & Dominant Freshwater Teleosts',
        titleBn: 'অটোফাইসি ও প্রধান মিঠাপানির মাছ',
        character: 'Weberian apparatus, abdominal scutes, barbels, pharyngeal teeth',
        characterBn: 'ওয়েবেরিয়ান যন্ত্র, পেটের স্কুট, কর্ষিকা ও গলবিলীয় দাঁত',
        couplets: [
          {
            lead: 'Belly with sharp serrated keel scutes; mouth terminal with median upper jaw notch; silvery compressed body; anadromous migratory.',
            leadBn: 'পেটে ধারালো করাত-সদৃশ স্কুট; ওপরের চোয়ালে স্পষ্ট খাঁজ; রুপালি চ্যাপ্টা দেহ; পরিযায়ী।',
            diagnosticFeature: 'Clupeiformes: Tenualosa ilisha (Hilsa shad)',
            diagnosticFeatureBn: 'ক্লুপেইফর্মিস: তেনুয়ালোসা ইলিশা (ইলিশ)',
            resultType: 'species',
            speciesId: 'sp-tenualosa-ilisha'
          },
          {
            lead: 'Scaleless body with 4 pairs of barbels; arborescent accessory air-breathing organ in suprabranchial cavity; long spineless dorsal fin.',
            leadBn: 'আঁইশহীন দেহ ও ৪ জোড়া কর্ষিকা; বাতাস থেকে শ্বাস নেওয়ার জন্য কানকোর ওপরে শ্বাস অঙ্গ; দীর্ঘ পৃষ্ঠ পাখনা।',
            diagnosticFeature: 'Siluriformes: Clarias batrachus (Walking catfish)',
            diagnosticFeatureBn: 'সিলুরিফর্মিস: ক্ল্যারিয়াস বাট্রাকাস (মাগুর)',
            resultType: 'species',
            speciesId: 'sp-clarias-batrachus'
          },
          {
            lead: 'Body covered in cycloid scales; mouth inferior with thick fringed lips; pharyngeal teeth in single row; no oral teeth.',
            leadBn: 'সাইক্লয়েড আঁইশযুক্ত দেহ; পুরু ঝালরযুক্ত ঠোঁট; চোয়ালে দাঁত নেই, গলবিলে দাঁত বিদ্যমান।',
            diagnosticFeature: 'Cypriniformes: Labeo rohita (Rohu carp)',
            diagnosticFeatureBn: 'সাইপ্রিনিফর্মিস: লাবিও রোহিতা (রুই)',
            resultType: 'species',
            speciesId: 'sp-labeo-rohita'
          },
          {
            lead: 'Amphibious mudskipper adapted for walking on tidal mudflats; close-set dorsal eyes raised above head; muscular pectoral fins.',
            leadBn: 'ভাটার কাদায় হেঁটে বেড়াতে সক্ষম উভচর ডোরিকাটা; মাথার ওপরে ঠেলে ওঠা চোখ; শক্তিশালী বক্ষ পাখনা।',
            diagnosticFeature: 'Gobiiformes: Periophthalmodon schlosseri (Giant mudskipper)',
            diagnosticFeatureBn: 'গোবিইফর্মিস: পেরিওফথ্যালমোডন স্লোসেরি',
            resultType: 'species',
            speciesId: 'sp-periophthalmodon-schlosseri'
          }
        ]
      },
      {
        id: 10,
        title: 'Batoidea: Diagnostic Ray Orders',
        titleBn: 'ব্যাটোইডিয়া: রে ও স্কেট বর্গসমূহ',
        character: 'Electric organs, caudal spine, and snout morphology',
        characterBn: 'বৈদ্যুতিক অঙ্গ, পুচ্ছ কাঁটা ও নাসিকা গঠন',
        couplets: [
          {
            lead: 'Pectoral disc thick and fleshy; large kidney-shaped electric organs on each side of head capable of delivering high-voltage discharge; smooth scaleless skin.',
            leadBn: 'পুরু পেশিবহুল চাকতি; মাথার দুই পাশে শক্তিশালী বৈদ্যুতিক অঙ্গ; মসৃণ আঁইশহীন ত্বক।',
            diagnosticFeature: 'Torpediniformes: Torpedo marmorata (Marbled electric ray)',
            diagnosticFeatureBn: 'টরপেডিনিফর্মিস: টরপেডো মারমোরাটা (ইলেকট্রিক রে)',
            resultType: 'species',
            speciesId: 'sp-torpedo-marmorata'
          },
          {
            lead: 'Tail slender and whip-like, armed with 1 or more serrated venomous spines; cephalic horns or broad rhomboid pectoral wings.',
            leadBn: 'চাবুকের মতো সরু লেজ যাতে বিষাক্ত কাঁটা রয়েছে; মাথায় শিং-সদৃশ অংশ বা প্রশস্ত রম্বয়েড ডানা।',
            diagnosticFeature: 'Myliobatiformes: Mobula birostris (Giant manta ray)',
            diagnosticFeatureBn: 'মাইলিওবাটিফর্মিস: মবুলা বায়রোস্ট্রিস (জায়ান্ট মান্টা রে)',
            resultType: 'species',
            speciesId: 'sp-mobula-birostris'
          },
          {
            lead: 'Body intermediate between shark and ray; broad wedge-shaped head with prominent thorn-like tubercles; 2 large dorsal fins.',
            leadBn: 'হাঙর ও রে-এর মধ্যবর্তী গঠন; প্রশস্ত কীলকাকার মাথা ও ধারালো কাঁটা; ২টি বড় পৃষ্ঠ পাখনা।',
            diagnosticFeature: 'Rhinopristiformes: Rhina ancylostoma (Bowmouth guitarfish)',
            diagnosticFeatureBn: 'রাইনোপ্রিস্টিফর্মিস: রাইনা অ্যানসিলোস্টোমা (গিটারফিশ)',
            resultType: 'species',
            speciesId: 'sp-rhina-ancylostoma'
          },
          {
            lead: 'Rhomboid disc with hard prickly thorn-like bucklers along midline; pelvic fin divided into 2 distinct lobes; egg cases with 4 horns.',
            leadBn: 'রম্বয়েড চাকতি যাতে কাঁটার সারি রয়েছে; শ্রোণী পাখনা ২টি খণ্ডে বিভক্ত; ৪টি শিংযুক্ত ডিমের খোলস।',
            diagnosticFeature: 'Rajiformes: Raja clavata (Thornback skate)',
            diagnosticFeatureBn: 'রাজিফর্মিস: রাজা ক্লাভাটা (স্কেট)',
            resultType: 'species',
            speciesId: 'sp-raja-clavata'
          }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // Key 4: Marine Sponges, Cnidarians & Comb Jellies Key
  // ---------------------------------------------------------------------------
  {
    id: 'key-global-sponges-cnidarians',
    title: 'Diagnostic Key to Marine Sponges, Cnidarians & Comb Jellies',
    titleBn: 'সামুদ্রিক স্পঞ্জ, নিডারিয়া ও কম্ব জেলির শনাক্তকরণ কুঞ্জি',
    scope: 'global',
    targetTaxonId: 'taxon-animalia',
    majorGroup: 'invertebrates',
    taxonScope: 'Basal Metazoa (Porifera, Cnidaria, Ctenophora: Major Marine Classes)',
    taxonScopeBn: 'আদি মেটাজোয়া (পরিফেরা, নিডারিয়া, টিনোফোরা: প্রধান সামুদ্রিক শ্রেণিসমূহ)',
    description: 'Specialized morphological key for identifying marine sponges, sea anemones, stony corals, true jellies, box jellies, and comb jellies based on mineral spicules, cnidocyte morphology, and body plan.',
    descriptionBn: 'স্পিকিউল, দংশক কোষের প্রকৃতি ও শারীরিক গঠনের ওপর ভিত্তি করে সামুদ্রিক স্পঞ্জ, প্রবাল, জেলিফিশ ও কম্ব জেলির শ্রেণি শনাক্তকরণ কুঞ্জি।',
    educationalLevel: 'intermediate',
    keyType: 'dichotomous',
    sourceReferenceIds: ['ref-worms-2024', 'ref-world-porifera-2026', 'ref-ruppert-2004'],
    verificationStatus: 'verified',
    steps: [
      {
        id: 1,
        title: 'Phylum Separation: Sponges vs Jellyfishes & Allies',
        titleBn: 'পর্ব বিভাজন: স্পঞ্জ বনাম জেলিফিশ ও সমগোত্রীয়',
        character: 'Water canal system with choanocytes vs gastrovascular cavity with tentacles',
        characterBn: 'চোয়ানোসাইটযুক্ত নালীতন্ত্র বনাম কর্ষিকাসহ গ্যাস্ট্রোভাস্কুলার গহ্বর',
        couplets: [
          {
            lead: 'Body perforated by numerous incurrent pores (ostia) leading to an internal water canal system; no mouth or tentacles; skeleton of spicules or spongin.',
            leadBn: 'বহু ছিদ্র (অসটিয়া) ও অভ্যন্তরীণ নালীতন্ত্রযুক্ত দেহ; মুখ বা কর্ষিকা নেই; স্পিকিউল বা স্পঞ্জিন কঙ্কাল।',
            diagnosticFeature: 'Porifera (Sponges)',
            diagnosticFeatureBn: 'পরিফেরা (স্পঞ্জ)',
            resultType: 'next_step',
            nextStepId: 2
          },
          {
            lead: 'Body radially or biradially symmetrical with tentacles encircling a single mouth/anus opening; gelatinous mesoglea; swimming medusa or sessile polyp.',
            leadBn: 'অরীয় বা দ্বি-অরীয় প্রতিসাম্য; মুখের চারপাশে কর্ষিকা; জেলিসদৃশ মেসোগ্লিয়া; সাঁতারু মেডুসা বা স্থানবদ্ধ পলিপ।',
            diagnosticFeature: 'Radiate Invertebrates (Cnidaria & Ctenophora)',
            diagnosticFeatureBn: 'রেডিয়াটা অমেরুদণ্ডী (নিডারিয়া ও টিনোফোরা)',
            resultType: 'next_step',
            nextStepId: 3
          }
        ]
      },
      {
        id: 2,
        title: 'Porifera Classes: Skeletal Mineralogy',
        titleBn: 'পরিফেরা শ্রেণি: কঙ্কালের খনিজ উপাদান',
        character: 'Calcium carbonate vs 6-rayed silica vs spongin framework',
        characterBn: 'ক্যালসিয়াম কার্বনেট বনাম ৬-রেখা সিলিকা বনাম স্পঞ্জিন তন্তু',
        couplets: [
          {
            lead: 'Spicules composed strictly of calcium carbonate (calcite); small vase-shaped or asconoid/syconoid marine sponges.',
            leadBn: 'শুধুমাত্র ক্যালসিয়াম কার্বনেট (ক্যালসাইট) নির্মিত স্পিকিউল; ছোট ফুলদানি-সদৃশ সামুদ্রিক স্পঞ্জ।',
            diagnosticFeature: 'Calcarea: Sycon ciliatum (Hairy sponge)',
            diagnosticFeatureBn: 'ক্যালকেরিয়া: সাইকন সিলিয়াটাম',
            resultType: 'species',
            speciesId: 'sp-sycon-ciliatum'
          },
          {
            lead: 'Spicules composed of silica, fundamentally 6-rayed (hexactine); lattice-like woven glass skeleton; deep marine habit.',
            leadBn: 'সিলিকা নির্মিত ৬-রেখা (হেক্সাক্টাইন) স্পিকিউল; কাচের মতো বোনা সুন্দর কঙ্কাল; গভীর সমুদ্রের বাসিন্দা।',
            diagnosticFeature: "Hexactinellida: Euplectella aspergillum (Venus' flower basket)",
            diagnosticFeatureBn: 'হেক্সাক্টিনেলিডা: ইউপ্লেকটেলা অ্যাসপারজিলাম',
            resultType: 'species',
            speciesId: 'sp-euplectella-aspergillum'
          },
          {
            lead: 'Skeleton composed of spongin protein fibers alone, or with siliceous spicules that are never 6-rayed; leuconoid canal system; commercial bath sponge.',
            leadBn: 'কঙ্কাল শুধু স্পঞ্জিন প্রোটিন তন্তু দিয়ে গঠিত অথবা ৬-রেখাহীন সিলিকা স্পিকিউলযুক্ত; লিউকোনয়েড নালীতন্ত্র; গোসলের স্পঞ্জ।',
            diagnosticFeature: 'Demospongiae: Spongia officinalis (Bath sponge)',
            diagnosticFeatureBn: 'ডেমোস্পঞ্জিয়া: স্পঞ্জিয়া অফিসিনালিস',
            resultType: 'species',
            speciesId: 'sp-spongia-officinalis'
          }
        ]
      },
      {
        id: 3,
        title: 'Cnidaria vs Ctenophora',
        titleBn: 'নিডারিয়া বনাম টিনোফোরা',
        character: 'Cnidocytes vs 8 rows of ciliated comb plates',
        characterBn: 'নিডোসাইট বনাম ৮ সারি সিলিয়াযুক্ত কম্ব প্লেট',
        couplets: [
          {
            lead: 'Tentacles bearing stinging cnidocytes; life cycle featuring hydroid polyps, medusae, or anthozoan polyps with gastrovascular septa.',
            leadBn: 'দংশক নিডোসাইট কোষযুক্ত কর্ষিকা; পলিপ, মেডুসা বা সেপটাযুক্ত প্রবাল পলিপ।',
            diagnosticFeature: 'Phylum Cnidaria',
            diagnosticFeatureBn: 'নিডারিয়া পর্ব',
            resultType: 'next_step',
            nextStepId: 4
          },
          {
            lead: 'Locomotion powered by 8 meridional rows of ciliated combs (ctenes); cnidocytes absent; adhesive colloblasts present on 2 retractable tentacles.',
            leadBn: '৮টি সিলিয়াযুক্ত কম্ব প্লেট দ্বারা সাঁতার কাটে; নিডোসাইট নেই; আঠালো কলোব্লাস্ট কোষযুক্ত ২টি প্রত্যাহারযোগ্য কর্ষিকা।',
            diagnosticFeature: 'Ctenophora: Pleurobrachia pileus (Sea gooseberry)',
            diagnosticFeatureBn: 'টিনোফোরা: প্লিউরোব্রাকিয়া পাইলাস',
            resultType: 'species',
            speciesId: 'sp-pleurobrachia-pileus'
          }
        ]
      },
      {
        id: 4,
        title: 'Cnidaria Classes',
        titleBn: 'নিডারিয়া শ্রেণিসমূহ',
        character: 'Medusa vs polyp dominance, box-shaped bell, and rhopalia',
        characterBn: 'মেডুসা বনাম পলিপ প্রাধান্য, বাক্স আকৃতির ঘণ্টা ও রোপ্যালিয়া',
        couplets: [
          {
            lead: 'Polyp stage solitary or colonial, secreting a heavy calcium carbonate skeleton forming reef structures; medusa stage completely absent; gastrovascular cavity divided by radial septa.',
            leadBn: 'একক বা কলোনিয়াল পলিপ যা ক্যালসিয়াম কার্বনেট কঙ্কাল ক্ষরণ করে রিফ তৈরি করে; মেডুসা দশা সম্পূর্ণ অনুপস্থিত; গ্যাস্ট্রোভাস্কুলার গহ্বর সেপটা দ্বারা বিভক্ত।',
            diagnosticFeature: 'Anthozoa: Acropora cervicornis (Staghorn coral)',
            diagnosticFeatureBn: 'অ্যান্থোজোয়া: অ্যাক্রোপোরা সার্বিকর্নিস (প্রবাল)',
            resultType: 'species',
            speciesId: 'sp-acropora-cervicornis'
          },
          {
            lead: 'Bell squarish/box-shaped in cross section; tentacles hang from corner pedalium blades; true image-forming lensed eyes in rhopalia; potent neurotoxin.',
            leadBn: 'বাক্স-সদৃশ চারকোনা মেডুসা; কোণার প্যাডালিয়াম থেকে কর্ষিকা ঝোলে; লেন্সযুক্ত চোখ সংবলিত রোপ্যালিয়া; প্রাণঘাতী নিউরোটক্সিন।',
            diagnosticFeature: 'Cubozoa: Chironex fleckeri (Sea wasp box jellyfish)',
            diagnosticFeatureBn: 'কুবোজোয়া: কাইরোনেক্স ফ্লেকেরি (বক্স জেলিফিশ)',
            resultType: 'species',
            speciesId: 'sp-chironex-fleckeri'
          },
          {
            lead: 'True jellyfish; saucer-shaped tetramerous medusa dominating life cycle; scalloped margin with 8 rhopalia sensory notches; 4 oral arms around mouth.',
            leadBn: 'প্রকৃত জেলিফিশ; সসার-সদৃশ টেট্রামেরাস মেডুসা প্রধান; ৮টি রোপ্যালিয়া খাঁজযুক্ত কিনার; ৪টি মৌখিক বাহু।',
            diagnosticFeature: 'Scyphozoa: Aurelia aurita (Moon jellyfish)',
            diagnosticFeatureBn: 'সাইফোজোয়া: অরিলিয়া অরিটা (মুন জেলি)',
            resultType: 'species',
            speciesId: 'sp-aurelia-aurita'
          },
          {
            lead: 'Colonial hydroid with specialized polymorphic zooids (pneumatophore float, dactylozooid tentacles, gastrozooid feeding polyps); floating pelagic marine siphonophore.',
            leadBn: 'বিশেষায়িত বহুরূপী জুয়েডযুক্ত ভাসমান কলোনি (বাতাসথলি, কর্ষিকা ও পুষ্টি পলিপ); নীল ভাসমান সাইফোনোফোর।',
            diagnosticFeature: "Hydrozoa: Physalia physalis (Portuguese man o' war)",
            diagnosticFeatureBn: 'হাইড্রিজোয়া: ফাইজ্যালিয়া ফাইজ্যালিস',
            resultType: 'species',
            speciesId: 'sp-physalia-physalis'
          }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // Key 5: Major Classes of Phylum Mollusca
  // ---------------------------------------------------------------------------
  {
    id: 'key-global-mollusca-classes',
    title: 'Diagnostic Key to Major Classes of Phylum Mollusca',
    titleBn: 'মলাস্কা পর্বের প্রধান শ্রেণিসমূহের শনাক্তকরণ কুঞ্জি',
    scope: 'global',
    targetTaxonId: 'taxon-mollusca',
    majorGroup: 'mollusca',
    taxonScope: 'Mollusca (Polyplacophora, Gastropoda, Bivalvia, Cephalopoda)',
    taxonScopeBn: 'মলাস্কা (পলিপ্ল্যাকোফোরা, গ্যাস্ট্রোপোডা, বাইভালভিয়া, সেফালোপোডা)',
    description: 'Diagnostic morphological key differentiating molluscan classes based on shell valves, foot structure, mantle modifications, cephalic development, and circulatory organization.',
    descriptionBn: 'খোলসের কপাটিকা, পদের গঠন, ম্যান্টল, মস্তক ও সংবহনতন্ত্রের পার্থক্যের ভিত্তিতে মলাস্কার প্রধান শ্রেণিসমূহের প্রামাণ্য কুঞ্জি।',
    educationalLevel: 'intermediate',
    keyType: 'dichotomous',
    sourceReferenceIds: ['ref-worms-2024', 'ref-ruppert-2004'],
    verificationStatus: 'verified',
    steps: [
      {
        id: 1,
        title: 'Shell Architecture & Cephalization',
        titleBn: 'খোলসের গঠন ও মস্তক',
        character: 'Articulated plates vs bivalve vs univalve/coiled vs head-foot modifications',
        characterBn: 'প্লেটযুক্ত খোলস বনাম দ্বি-কপাটিকা বনাম একক খোলস বনাম মস্তক-পদ রূপান্তর',
        couplets: [
          {
            lead: 'Shell composed of 8 overlapping articulating transverse dorsal calcareous plates (valves) encircled by a muscular girdle; broad flat ventral suction foot.',
            leadBn: '৮টি পরস্পর সমাপতিত ক্যালসিয়াম প্লেট দ্বারা গঠিত পৃষ্ঠীয় খোলস; চওড়া চ্যাপ্টা অঙ্কীয় চোষক পদ।',
            diagnosticFeature: 'Polyplacophora: Tonicella lineata (Lined chiton)',
            diagnosticFeatureBn: 'পলিপ্ল্যাকোফোরা: টনিসেলা লিনিয়াটা (কাইটোন)',
            resultType: 'species',
            speciesId: 'sp-tonicella-lineata'
          },
          {
            lead: 'Shell not composed of 8 transverse plates; shell single, bivalved, or internal/absent.',
            leadBn: 'খোলস ৮টি প্লেটে বিভক্ত নয়; একক, দুই কপাটিকাবিশিষ্ট অথবা অভ্যন্তরীণ/অনুপস্থিত।',
            diagnosticFeature: 'Non-polyplacophoran molluscs',
            diagnosticFeatureBn: 'নন-পলিপ্ল্যাকোফোরা মলাস্ক',
            resultType: 'next_step',
            nextStepId: 2
          }
        ]
      },
      {
        id: 2,
        title: 'Head and Radula Presence',
        titleBn: 'মস্তক ও র্যাডুলার উপস্থিতি',
        character: 'Head and radula presence vs headless bivalve filter feeders',
        characterBn: 'মস্তক ও র্যাডুলা উপস্থিতি বনাম মস্তকহীন দ্বি-কপাটিকা ফিল্টার ফিডার',
        couplets: [
          {
            lead: 'Head, eyes, and radula completely absent; body laterally compressed enclosed within 2 hinged lateral shell valves joined by an elastic ligament; gills (ctenidia) enlarged for filter feeding.',
            leadBn: 'মস্তক, চোখ ও র্যাডুলা অনুপস্থিত; দুই কপাটিকাবিশিষ্ট খোলস দ্বারা দুইপাশ থেকে আবৃত দেহ; ফিল্টার ফিডিংয়ের জন্য ফুলকা বড়।',
            diagnosticFeature: 'Bivalvia: Tridacna gigas (Giant clam)',
            diagnosticFeatureBn: 'বাইভালভিয়া: ট্রাইড্যাকনা গিগাস (দানব ঝিনুক)',
            resultType: 'species',
            speciesId: 'sp-tridacna-gigas'
          },
          {
            lead: 'Well-developed head with sensory tentacles and eyes; radula present in buccal cavity; shell univalved or modified into tentacles and funnel.',
            leadBn: 'সংবেদী কর্ষিকা ও চোখযুক্ত সুগঠিত মস্তক; র্যাডুলা উপস্থিত; একক খোলস বা কর্ষিকায় রূপান্তরিত পদ।',
            diagnosticFeature: 'Cephalized molluscs with radula',
            diagnosticFeatureBn: 'মস্তক ও র্যাডুলাযুক্ত মলাস্ক',
            resultType: 'next_step',
            nextStepId: 3
          }
        ]
      },
      {
        id: 3,
        title: 'Gastropoda vs Cephalopoda',
        titleBn: 'গ্যাস্ট্রোপোডা বনাম সেফালোপোডা',
        character: 'Creeping foot and torsion vs circumoral arms, funnel, and closed circulation',
        characterBn: 'হামাগুড়ি পদ ও টরশন বনাম মৌখিক বাহু, ফানেল ও বদ্ধ সংবহনতন্ত্র',
        couplets: [
          {
            lead: 'Body undergoes 180-degree developmental torsion; muscular creeping belly foot adapted for crawling; shell univalve, typically spirally coiled (or secondarily lost).',
            leadBn: 'লার্ভা দশায় দেহ ১৮০ ডিগ্রি টরশন বা প্যাঁচ খায়; হামাগুড়ি দেওয়ার জন্য চ্যাপ্টা অঙ্কীয় পদ; স্পাইরাল একক খোলস।',
            diagnosticFeature: 'Gastropoda: Helix pomatia (Roman snail)',
            diagnosticFeatureBn: 'গ্যাস্ট্রোপোডা: হেলিক্স পোমাটিয়া (শামুক)',
            resultType: 'species',
            speciesId: 'sp-helix-pomatia'
          },
          {
            lead: 'Foot modified into a circle of prehensile arms and tentacles bearing suction cups, plus a muscular hyponome (funnel) for jet propulsion; large brain; closed circulatory system.',
            leadBn: 'পদ চোষকযুক্ত কর্ষিকা ও জেট চালনার উপযোগী ফানেলে রূপান্তরিত; জটিল মস্তিষ্ক ও চোখ; বদ্ধ রক্ত সংবহন।',
            diagnosticFeature: 'Cephalopoda: Octopus vulgaris (Common octopus)',
            diagnosticFeatureBn: 'সেফালোপোডা: অক্টোপাস ভালগারিস',
            resultType: 'species',
            speciesId: 'sp-octopus-vulgaris'
          }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // Key 6: Subphyla & Major Classes of Arthropoda
  // ---------------------------------------------------------------------------
  {
    id: 'key-global-arthropoda-lineages',
    title: 'Diagnostic Key to Subphyla & Major Classes of Arthropoda',
    titleBn: 'আর্থ্রোপোডা উপপর্ব ও প্রধান শ্রেণিসমূহের শনাক্তকরণ কুঞ্জি',
    scope: 'global',
    targetTaxonId: 'taxon-arthropoda',
    majorGroup: 'arthropoda',
    taxonScope: 'Arthropoda (Chelicerata, Myriapoda, Crustacea, Hexapoda)',
    taxonScopeBn: 'আর্থ্রোপোডা (কেলিসেরাটা, মিরিয়াপোডা, ক্রাস্টেশিয়া, হেক্সাপোডা)',
    description: 'Authoritative dichotomous key separating the four great arthropod clades based on tagmosis, mouthpart anatomy (chelicerae vs mandibles), antennal pairs, and walking leg counts.',
    descriptionBn: 'ট্যাগমাটাইজেশন, কেলিসেরা বনাম ম্যান্ডিবল, অ্যান্টেনার সংখ্যা ও পদের সংখ্যার ওপর ভিত্তি করে আর্থ্রোপোডার ৪টি প্রধান শাখার শনাক্তকরণ কুঞ্জি।',
    educationalLevel: 'intermediate',
    keyType: 'dichotomous',
    sourceReferenceIds: ['ref-col-2026', 'ref-ruppert-2004'],
    verificationStatus: 'verified',
    steps: [
      {
        id: 1,
        title: 'Mouthpart Architecture: Chelicerae vs Mandibles',
        titleBn: 'মুখোপাঙ্গের গঠন: কেলিসেরা বনাম ম্যান্ডিবল',
        character: 'Chelicerae without antennae vs mandibles with antennae',
        characterBn: 'অ্যান্টেনাহীন কেলিসেরা বনাম অ্যান্টেনা ও ম্যান্ডিবল',
        couplets: [
          {
            lead: 'First pair of appendages modified as pincer-like or fanged chelicerae; true antennae completely absent; body divided into cephalothorax (prosoma) and abdomen (opisthosoma).',
            leadBn: 'প্রথম জোড়া উপাঙ্গ কেলিসেরা বা বিষদাঁতে রূপান্তরিত; কোনো অ্যান্টেনা নেই; দেহ প্রোসোমা (শিরোবক্ষ) ও অপিসথোসোমায় (উদর) বিভক্ত।',
            diagnosticFeature: 'Chelicerata: Merostomata (Limulus polyphemus — Horseshoe crab)',
            diagnosticFeatureBn: 'কেলিসেরাটা: মেরোস্টোমাটা (লিমুলাস পলিপহিমাস — রাজকাঁকড়া)',
            resultType: 'species',
            speciesId: 'sp-limulus-polyphemus'
          },
          {
            lead: 'First mouthparts modified as crushing or chewing mandibles; at least 1 pair of sensory antennae present on the head.',
            leadBn: 'প্রথম মুখোপাঙ্গ চর্বণকারী ম্যান্ডিবল; মাথায় অন্তত ১ জোড়া সংবেদী অ্যান্টেনা উপস্থিত।',
            diagnosticFeature: 'Mandibulata: Myriapods, Crustaceans, and Insects',
            diagnosticFeatureBn: 'ম্যান্ডিবুলাটা: মিরিয়াপড, ক্রাস্টেশিয়ান ও পতঙ্গ',
            resultType: 'next_step',
            nextStepId: 2
          }
        ]
      },
      {
        id: 2,
        title: 'Antennal Pairs and Appendage Branching',
        titleBn: 'অ্যান্টেনার জোড় ও উপাঙ্গের বিভাজন',
        character: '2 pairs of antennae with biramous limbs vs 1 pair of antennae with uniramous limbs',
        characterBn: 'দ্বিশাখ উপাঙ্গ ও ২ জোড়া অ্যান্টেনা বনাম একশাখ উপাঙ্গ ও ১ জোড়া অ্যান্টেনা',
        couplets: [
          {
            lead: 'Head bearing 2 pairs of antennae (antennules and antennae); appendages primitively biramous (two-branched); respiration primarily via branchial gills; carapace typically covering cephalothorax.',
            leadBn: 'মাথায় ২ জোড়া অ্যান্টেনা (অ্যান্টেনিউল ও অ্যান্টেনা); প্রাথমিকভাবে দ্বিশাখ উপাঙ্গ; ফুলকা দ্বারা শ্বাসকার্য; শিরোবক্ষ ক্যারাপেস দ্বারা আবৃত।',
            diagnosticFeature: 'Crustacea: Malacostraca (Homarus gammarus — European lobster)',
            diagnosticFeatureBn: 'ক্রাস্টেশিয়া: ম্যালাকোস্ট্রাকা (হোমারাস গ্যামারাস — গলদা চিংড়ি)',
            resultType: 'species',
            speciesId: 'sp-homarus-gammarus'
          },
          {
            lead: 'Head bearing strictly 1 pair of antennae; appendages uniramous (single-branched); respiration via internal tracheal tubules with spiracles; primarily terrestrial.',
            leadBn: 'মাথায় মাত্র ১ জোড়া অ্যান্টেনা; একশাখ উপাঙ্গ; স্পাইরাকল ও শ্বাসনালী (ট্রাকিয়া) দ্বারা শ্বাসকার্য; মূলত স্থলচর।',
            diagnosticFeature: 'Uniramia: Insects and Myriapods',
            diagnosticFeatureBn: 'ইউনিরামিয়া: পতঙ্গ ও শতপদী',
            resultType: 'next_step',
            nextStepId: 3
          }
        ]
      },
      {
        id: 3,
        title: 'Body Tagmata and Leg Count',
        titleBn: 'দেহের ট্যাগমা ও পদের সংখ্যা',
        character: 'Elongate multisegmented trunk vs 3 distinct tagmata with 6 walking legs',
        characterBn: 'বহুখণ্ডায়িত লম্বা দেহ বনাম ৩টি ট্যাগমা ও ৬টি চলন পদ',
        couplets: [
          {
            lead: 'Body elongated consisting of a distinct head and an elongated homonomous trunk of numerous segments; 1 pair of walking legs per trunk segment; first trunk segment with venomous forcipules (poison claws).',
            leadBn: 'মাথা ও অসংখ্য খণ্ডযুক্ত লম্বা দেহ; প্রতি খণ্ডে ১ জোড়া চলন পদ; প্রথম খণ্ডে বিষাক্ত নখর (ফরসিপিউল)।',
            diagnosticFeature: 'Chilopoda: Scolopendra gigantea (Giant centipede)',
            diagnosticFeatureBn: 'কিলোপোডা: স্কোলোপেন্ড্রা গিগান্টিয়া (শতপদী/কেন্নো)',
            resultType: 'species',
            speciesId: 'sp-scolopendra-gigantea'
          },
          {
            lead: 'Body divided into 3 distinct tagmata: head, 3-segmented thorax, and 11-segmented abdomen; thorax bears strictly 3 pairs of jointed walking legs (hexapod) and typically 1-2 pairs of wings in adults.',
            leadBn: 'দেহ মস্তক, ৩-খণ্ডক বক্ষ ও উদরে বিভক্ত; বক্ষে ঠিক ৩ জোড়া চলন পদ (হেক্সাপড) এবং সাধারণত ১-২ জোড়া ডানা উপস্থিত।',
            diagnosticFeature: 'Hexapoda / Insecta: Apis mellifera (Western honey bee)',
            diagnosticFeatureBn: 'হেক্সাপোডা / ইনসেক্টা: এপিস মেলিফেরা (মৌমাছি)',
            resultType: 'species',
            speciesId: 'sp-apis-mellifera'
          }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // Key 7: Classes of Phylum Echinodermata
  // ---------------------------------------------------------------------------
  {
    id: 'key-global-echinodermata-classes',
    title: 'Diagnostic Key to Classes of Phylum Echinodermata',
    titleBn: 'একাইনোডার্মাটা পর্বের শ্রেণিসমূহের শনাক্তকরণ কুঞ্জি',
    scope: 'global',
    targetTaxonId: 'taxon-echinodermata',
    majorGroup: 'echinodermata',
    taxonScope: 'Echinodermata (Asteroidea, Ophiuroidea, Echinoidea, Holothuroidea)',
    taxonScopeBn: 'একাইনোডার্মাটা (অ্যাস্টেরয়ডিয়া, ওফিউরয়ডিয়া, একিনয়ডিয়া, হোলোথুরয়ডিয়া)',
    description: 'Systematic dichotomous key distinguishing the four living classes of marine echinoderms by body symmetry, arm morphology, ossicle test fusion, and ambulatory apparatus.',
    descriptionBn: 'শারীরিক গঠন, বাহু, কঙ্কাল প্লেট ও নালিপদের পার্থক্যের ওপর ভিত্তি করে সামুদ্রিক একাইনোডার্মাটার ৪টি প্রধান শ্রেণির শনাক্তকরণ কুঞ্জি।',
    educationalLevel: 'intermediate',
    keyType: 'dichotomous',
    sourceReferenceIds: ['ref-worms-2024'],
    verificationStatus: 'verified',
    steps: [
      {
        id: 1,
        title: 'Arm Attachment and Central Disc',
        titleBn: 'বাহুর সংযুক্তি ও কেন্দ্রীয় চাকতি',
        character: 'Arms present and radiating from central disc vs arms absent',
        characterBn: 'কেন্দ্রীয় চাকতি থেকে প্রসারিত বাহু উপস্থিত বনাম বাহু অনুপস্থিত',
        couplets: [
          {
            lead: 'Body star-shaped with 5 or more arms radiating outward from a central disc; open or closed ambulacral grooves on oral surface.',
            leadBn: 'তারা-আকৃতির দেহ যাতে কেন্দ্রীয় চাকতি থেকে ৫ বা ততোধিক বাহু বের হয়েছে; বাহুর নিচে অ্যাম্বুলাক্রাল খাঁজ।',
            diagnosticFeature: 'Stelleroidea (Sea stars & Brittle stars)',
            diagnosticFeatureBn: 'স্টেলেরয়ডিয়া (তারা মাছ ও ভঙ্গুর তারা)',
            resultType: 'next_step',
            nextStepId: 2
          },
          {
            lead: 'Arms completely absent; body globose, discoidal, or elongated sausage-shaped; skeletal ossicles fused into rigid test or reduced to microscopic dermal spicules.',
            leadBn: 'বাহু সম্পূর্ণ অনুপস্থিত; গোলাকার, চাকতির মতো বা শসার মতো নলাকার দেহ; অসিকেলগুলো শক্ত খোলস তৈরি করেছে অথবা আণুবীক্ষণিক।',
            diagnosticFeature: 'Echinozoa (Sea urchins & Sea cucumbers)',
            diagnosticFeatureBn: 'একিনোজোয়া (সমুদ্র আর্চিন ও সমুদ্র শসা)',
            resultType: 'next_step',
            nextStepId: 3
          }
        ]
      },
      {
        id: 2,
        title: 'Asteroidea vs Ophiuroidea',
        titleBn: 'অ্যাস্টেরয়ডিয়া বনাম ওফিউরয়ডিয়া',
        character: 'Broad arm bases with open grooves vs sharply offset serpentine arms',
        characterBn: 'চওড়া গোড়াবিশিষ্ট বাহু ও উন্মুক্ত খাঁজ বনাম স্পষ্টভাবে পৃথক চাবুকের মতো বাহু',
        couplets: [
          {
            lead: 'Arms broad at the base, merging imperceptibly into the central disc; open ambulacral grooves on underside exposing tube feet with suckers; pedicellariae present.',
            leadBn: 'বাহুর গোড়া চওড়া এবং কেন্দ্রীয় চাকতির সাথে মসৃণভাবে মিশেছে; নিচে উন্মুক্ত খাঁজে চোষকযুক্ত নালিপদ; পেডিসিলেরিয়া বিদ্যমান।',
            diagnosticFeature: 'Asteroidea: Acanthaster planci (Crown-of-thorns starfish)',
            diagnosticFeatureBn: 'অ্যাস্টেরয়ডিয়া: অ্যাকান্থাস্টার প্লাঙ্কি (কাঁটাযুক্ত তারা মাছ)',
            resultType: 'species',
            speciesId: 'sp-acanthaster-planci'
          },
          {
            lead: 'Arms slender, whip-like, jointed, sharply demarcated and set off from the small circular central disc; ambulacral grooves closed by plates; tube feet sensory without suckers.',
            leadBn: 'সরু, চাবুকের মতো সন্ধিযুক্ত বাহু যা ছোট গোল কেন্দ্রীয় চাকতি থেকে স্পষ্টভাবে আলাদা; খাঁজ প্লেট দ্বারা ঢাকা; নালিপদ চোষকহীন।',
            diagnosticFeature: 'Ophiuroidea: Ophiothrix fragilis (Common brittle star)',
            diagnosticFeatureBn: 'ওফিউরয়ডিয়া: ওফিওথ্রিক্স ফ্র্যাজিলিস (ভঙ্গুর তারা)',
            resultType: 'species',
            speciesId: 'sp-ophiothrix-fragilis'
          }
        ]
      },
      {
        id: 3,
        title: 'Echinoidea vs Holothuroidea',
        titleBn: 'একিনয়ডিয়া বনাম হোলোথুরয়ডিয়া',
        character: 'Rigid spherical test with movable spines vs elongated leathery body with oral tentacles',
        characterBn: 'চলনক্ষম কাঁটাসহ শক্ত গোলকাকার খোলস বনাম মুখে কর্ষিকাসহ লম্বা চামড়াময় দেহ',
        couplets: [
          {
            lead: 'Body globose or discoidal, enclosed in a rigid skeleton (test) of tightly sutured calcareous plates; covered with movable spines mounted on ball-and-socket joints; chewing organ (Aristotle lantern) present.',
            leadBn: 'দৃঢ়ভাবে জোড়া লাগানো ক্যালসিয়াম প্লেট দ্বারা গঠিত শক্ত গোলাকার খোলস; নড়াচড়া করতে সক্ষম কাঁটা দ্বারা আবৃত; মুখে অ্যারিস্টটলের লণ্ঠন নামক চর্বণ অঙ্গ।',
            diagnosticFeature: 'Echinoidea: Strongylocentrotus purpuratus (Purple sea urchin)',
            diagnosticFeatureBn: 'একিনয়ডিয়া: স্ট্রংগাইলোসেন্ট্রোটাস পারপ্যুরাটাস (সমুদ্র আর্চিন)',
            resultType: 'species',
            speciesId: 'sp-strongylocentrotus-purpuratus'
          },
          {
            lead: 'Body elongated along oral-aboral axis into a soft cylindrical or sausage shape; skeletal ossicles reduced to microscopic dermal sclerites; mouth encircled by branched retractable oral tentacles.',
            leadBn: 'লম্বা নলাকার বা শসার মতো চামড়াময় নরম দেহ; কঙ্কাল চামড়ার নিচে আণুবীক্ষণিক স্ক্লেরাইট আকারে বিদ্যমান; মুখের চারপাশে শাখান্বিত কর্ষিকা।',
            diagnosticFeature: 'Holothuroidea: Holothuria atra (Black sea cucumber)',
            diagnosticFeatureBn: 'হোলোথুরয়ডিয়া: হোলোথুরিয়া অ্যাট্রা (কালো সমুদ্র শসা)',
            resultType: 'species',
            speciesId: 'sp-holothuria-atra'
          }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // Key 8: Living Amphibian Orders Key
  // ---------------------------------------------------------------------------
  {
    id: 'key-global-amphibia-orders',
    title: 'Diagnostic Key to the Orders of Living Amphibia',
    titleBn: 'জীবিত উভচর প্রাণীদের বর্গসমূহের শনাক্তকরণ কুঞ্জি',
    scope: 'global',
    targetTaxonId: 'taxon-amphibia',
    majorGroup: 'amphibia',
    taxonScope: 'Amphibia (Anura, Caudata/Urodela, Gymnophiona)',
    taxonScopeBn: 'অ্যাম্ফিবিয়া (অ্যানুরা/লাফানো ব্যাঙ, কডাটা/স্যালামান্ডার, জিমনোফিওনা/সিসিলিয়ান)',
    description: 'Definitive diagnostic key distinguishing the three extant orders of amphibians based on limb anatomy, caudal retention, skeletal modifications for saltation, and fossorial adaptations.',
    descriptionBn: 'পদ, লেজের স্থায়িত্ব, লাফানোর কঙ্কাল রূপান্তর এবং ভূগর্ভস্থ অভিযোজনের ভিত্তিতে জীবিত ৩টি উভচর বর্গের শনাক্তকরণ কুঞ্জি।',
    educationalLevel: 'introductory',
    keyType: 'dichotomous',
    sourceReferenceIds: ['ref-amphibiaweb-2026', 'ref-kardong-2018'],
    verificationStatus: 'verified',
    steps: [
      {
        id: 1,
        title: 'Limbs and Body Form',
        titleBn: 'পদ ও শারীরিক গঠন',
        character: 'Presence vs total absence of chiridium limbs',
        characterBn: 'টেট্রাপড পদের উপস্থিতি বনাম সম্পূর্ণ অনুপস্থিতি',
        couplets: [
          {
            lead: 'Limbs and pelvic/pectoral girdles completely absent; body worm-like, cylindrical, and divided by transverse annular grooves; tiny sensory tentacle between eye and nostril; fossorial subterranean habit.',
            leadBn: 'উপাঙ্গ ও বক্ষ/শ্রোণী চক্র সম্পূর্ণ অনুপস্থিত; কেঁচোর মতো নলাকার ও খাঁজযুক্ত দেহ; চোখ ও নাকের মাঝে সংবেদী কর্ষিকা; মাটির নিচে গর্তবাসী।',
            diagnosticFeature: 'Gymnophiona: Ichthyophis bannanicus (Banna caecilian)',
            diagnosticFeatureBn: 'জিমনোফিওনা: ইকথিওফিস ব্যানানিকাস (সিসিলিয়ান)',
            resultType: 'species',
            speciesId: 'sp-ichthyophis-bannanicus'
          },
          {
            lead: 'Four chiridium walking or jumping limbs present (hindlimbs and forelimbs well-developed).',
            leadBn: 'চারটি সুগঠিত হাঁটা বা লাফানোর পা বিদ্যমান।',
            diagnosticFeature: 'Lobed or digit-bearing tetrapod amphibians',
            diagnosticFeatureBn: 'পদযুক্ত উভচর টেট্রাপড',
            resultType: 'next_step',
            nextStepId: 2
          }
        ]
      },
      {
        id: 2,
        title: 'Tail Retention and Locomotion',
        titleBn: 'লেজের স্থায়িত্ব ও চলন পদ্ধতি',
        character: 'Adult tailless with elongated saltatory legs vs persistent post-anal tail',
        characterBn: 'প্রাপ্তবয়স্ক লেজহীন ও দীর্ঘ লাফানোর পা বনাম স্থায়ী লেজ ও সমান পা',
        couplets: [
          {
            lead: 'Adult completely tailless (urostyle present); hindlimbs greatly elongated and specialized for leaping or swimming; head and trunk fused without distinct neck; tympanum external.',
            leadBn: 'প্রাপ্তবয়স্ক অবস্থায় লেজ সম্পূর্ণ অনুপস্থিত (ইউরোস্টাইল উপস্থিত); পেছনের পা অত্যন্ত লম্বা ও লাফানোর উপযোগী; স্পষ্ট ঘাড়বিহীন দেহ।',
            diagnosticFeature: 'Anura: Bufo bufo (Common toad) / Hoplobatrachus tigerinus',
            diagnosticFeatureBn: 'অ্যানুরা: বুফো বুফো (কুনোব্যাঙ) / কোলাব্যাঙ',
            resultType: 'species',
            speciesId: 'sp-bufo-bufo'
          },
          {
            lead: 'Adult retains a well-developed post-anal tail throughout life; limbs short and roughly equal in length, held at right angles to body for walking; cylindrical body with costal grooves.',
            leadBn: 'প্রাপ্তবয়স্ক অবস্থাতেও সুস্পষ্ট লেজ আজীবন বিদ্যমান থাকে; চার পা প্রায় সমান দৈর্ঘ্যের ও হাঁটার উপযোগী; দেহের পাশে খাঁজ উপস্থিত।',
            diagnosticFeature: 'Caudata: Salamandra salamandra (Fire salamander)',
            diagnosticFeatureBn: 'কডাটা: স্যালামান্ড্রা স্যালামান্ড্রা (ফায়ার স্যালামান্ডার)',
            resultType: 'species',
            speciesId: 'sp-salamandra-salamandra'
          }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // Key 9: Living Reptilian Orders Key
  // ---------------------------------------------------------------------------
  {
    id: 'key-global-reptilia-orders',
    title: 'Diagnostic Key to the Orders of Living Reptilia',
    titleBn: 'জীবিত সরীসৃপ প্রাণীদের বর্গসমূহের শনাক্তকরণ কুঞ্জি',
    scope: 'global',
    targetTaxonId: 'taxon-reptilia',
    majorGroup: 'reptilia',
    taxonScope: 'Reptilia (Testudines, Rhynchocephalia, Crocodylia, Squamata)',
    taxonScopeBn: 'রেপটিলিয়া (কাছিম ও কচ্ছপ, টুয়াটারা, কুমির বর্গ, আঁইশযুক্ত সরীসৃপ)',
    description: 'Authoritative diagnostic key separating the four living orders of Class Reptilia based on cranial fenestration, shell architecture, dentition type, and copulatory organ morphology.',
    descriptionBn: 'করোটির খাঁজ, খোলস, দাঁতের বিন্যাস ও প্রজনন অঙ্গের পার্থক্যের ওপর ভিত্তি করে সরীসৃপ শ্রেণির জীবিত ৪টি বর্গের শনাক্তকরণ কুঞ্জি।',
    educationalLevel: 'intermediate',
    keyType: 'dichotomous',
    sourceReferenceIds: ['ref-reptile-database-2026', 'ref-kardong-2018'],
    verificationStatus: 'verified',
    steps: [
      {
        id: 1,
        title: 'Bony Shell Armor Presence',
        titleBn: 'অস্থিময় খোলসের উপস্থিতি',
        character: 'Carapace and plastron encasing body vs unarmored trunk',
        characterBn: 'ক্যারাপেস ও প্লাস্ট্রন সমন্বিত খোলস বনাম খোলসহীন দেহ',
        couplets: [
          {
            lead: 'Body encased in a rigid bony shell consisting of a dorsal carapace and ventral plastron covered by keratinous scutes; pectoral and pelvic girdles situated uniquely INSIDE ribcage; jaws covered by a sharp keratinous beak without teeth.',
            leadBn: 'দেহ একটি শক্ত অস্থিময় খোলস (পৃষ্ঠীয় ক্যারাপেস ও অঙ্কীয় প্লাস্ট্রন) দ্বারা আবৃত; কাঁধ ও শ্রোণী চক্র পাঁজরের খাঁচার ভেতরে অবস্থিত; দাঁতবিহীন তীক্ষ্ণ কেরাটিনময় চঞ্চু।',
            diagnosticFeature: 'Testudines: Chelonoidis niger (Galapagos giant tortoise)',
            diagnosticFeatureBn: 'টেস্টুডিনিস: চেলোনয়েডিস নাইজার (গালাপাগোস কচ্ছপ)',
            resultType: 'species',
            speciesId: 'sp-chelonoidis-niger'
          },
          {
            lead: 'Body not encased in a bony carapace and plastron; ribs free; teeth present on jaws.',
            leadBn: 'দেহ অস্থিময় খোলসে আবৃত নয়; পাঁজর মুক্ত; চোয়ালে দাঁত উপস্থিত।',
            diagnosticFeature: 'Non-chelonian reptiles',
            diagnosticFeatureBn: 'খোলসহীন সরীসৃপ',
            resultType: 'next_step',
            nextStepId: 2
          }
        ]
      },
      {
        id: 2,
        title: 'Cranial Architecture and Thecodont Dentition',
        titleBn: 'করোটির গঠন ও থেকোডন্ট দাঁত',
        character: 'Thecodont teeth in bony sockets with complete secondary palate vs acrodont/pleurodont teeth',
        characterBn: 'গর্তে বসানো থেকোডন্ট দাঁত ও সেকেন্ডারি প্যালেট বনাম অ্যাক্রোডন্ট/প্লিউরোডন্ট দাঁত',
        couplets: [
          {
            lead: 'Teeth set in deep individual bony sockets (thecodont dentition); complete bony secondary palate separating nasal passages from mouth; 4-chambered heart with Foramen of Panizza; heavy dorsal osteoderms.',
            leadBn: 'চোয়ালের গর্তে বসানো পৃথক দাঁত (থেকোডন্ট); সম্পূর্ণ সেকেন্ডারি তালু; প্যানিজার ছিদ্রযুক্ত ৪-প্রকোষ্ঠী হৃদপিণ্ড; পিঠে ভারী অস্টিওডার্ম।',
            diagnosticFeature: 'Crocodylia: Crocodiles, Alligators, and Caimans',
            diagnosticFeatureBn: 'ক্রোকোডিলিয়া: কুমির, ঘড়িয়াল ও অ্যালিগেটর',
            resultType: 'taxon',
            taxonId: 'taxon-crocodylia',
            rationaleEn: 'Resolves to Order Crocodylia (Crocodilians)',
            rationaleBn: 'কুমির বর্গ (ক্রোকোডিলিয়া)'
          },
          {
            lead: 'Teeth not set in thecodont sockets (pleurodont or acrodont); secondary palate incomplete or absent; 3-chambered heart; cloacal opening transverse.',
            leadBn: 'দাঁত পৃথক গর্তে বসানো নয় (প্লিউরোডন্ট বা অ্যাক্রোডন্ট); অসম্পূর্ণ সেকেন্ডারি তালু; ৩-প্রকোষ্ঠী হৃদপিণ্ড; আড়াআড়ি ক্লোয়াকা ছিদ্র।',
            diagnosticFeature: 'Lepidosauria: Rhynchocephalia & Squamata',
            diagnosticFeatureBn: 'লেপিডোসরিয়া: টুয়াটারা ও আঁইশযুক্ত সরীসৃপ',
            resultType: 'next_step',
            nextStepId: 3
          }
        ]
      },
      {
        id: 3,
        title: 'Rhynchocephalia vs Squamata',
        titleBn: 'রিঙ্কোসেফালিয়া বনাম স্কোয়ামাটা',
        character: 'Diapsid skull bars and hemipenes presence',
        characterBn: 'করোটির পূর্ণাঙ্গ বার ও হেমিপেনিসের উপস্থিতি',
        couplets: [
          {
            lead: 'Primitive diapsid skull with both upper and lower temporal bars intact; uncinate processes on ribs; prominent parietal/pineal third eye on top of head; copulatory organs absent; endemic to New Zealand offshore islands.',
            leadBn: 'আদিম ডায়াপসিড করোটিতে ওপর ও নিচের উভয় টেম্পোরাল বার অক্ষত; পাঁজরে আনসিনেট প্রক্রিয়া; মাথার ওপরে সুস্পষ্ট পিনিয়াল চোখ; কোনো বহিঃস্থ প্রজনন অঙ্গ নেই।',
            diagnosticFeature: 'Rhynchocephalia: Sphenodon punctatus (Tuatara)',
            diagnosticFeatureBn: 'রিঙ্কোসেফালিয়া: স্ফেনোডন পাঙ্কট্যাটাস (টুয়াটারা)',
            resultType: 'species',
            speciesId: 'sp-sphenodon-punctatus'
          },
          {
            lead: 'Modified diapsid skull with streptostylic quadrate permitting cranial kinesis; paired eversible hemipenes in males; paired epidermal horny scales regularly shed; lizards and snakes.',
            leadBn: 'রূপান্তরিত ডায়াপসিড করোটি যা মুখ চওড়াভাবে খুলতে সাহায্য করে; পুরুষে জোড়া হেমিপেনিস; কেরাটিনময় আঁইশ যা পর্যায়ক্রমে খোলস হিসেবে মোচিত হয়।',
            diagnosticFeature: 'Squamata: Varanus komodoensis (Komodo dragon) / Ophiophagus hannah',
            diagnosticFeatureBn: 'স্কোয়ামাটা: ভ্যারানাস কোমোডোয়েনসিস (কোমোডো ড্রাগন) / রাজগোখরা',
            resultType: 'species',
            speciesId: 'sp-varanus-komodoensis'
          }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // Key 10: Representative Avian Orders Key
  // ---------------------------------------------------------------------------
  {
    id: 'key-global-aves-orders',
    title: 'Representative Diagnostic Key to Major Avian Orders (Aves)',
    titleBn: 'প্রধান পক্ষী বর্গসমূহের প্রতিনিধি শনাক্তকরণ কুঞ্জি',
    scope: 'global',
    targetTaxonId: 'taxon-aves',
    majorGroup: 'aves',
    taxonScope: 'Aves (Paleognaths, Penguins, Raptors, Coraciiforms, Passerines)',
    taxonScopeBn: 'এভিস (উটপাখি, পেঙ্গুইন, শিকারি পাখি, মাছরাঙা, গায়ক পাখি)',
    description: 'Educational morphological key identifying representative orders of Class Aves based on flight adaptations, foot syndactyly, beak morphology, and sternum architecture.',
    descriptionBn: 'উড্ডয়ন অভিযোজন, পায়ের আঙুলের বিন্যাস, চঞ্চু ও স্টার্নামের গঠনের ভিত্তিতে পক্ষী শ্রেণির প্রধান প্রধান বর্গের প্রামাণ্য কুঞ্জি।',
    educationalLevel: 'intermediate',
    keyType: 'dichotomous',
    sourceReferenceIds: ['ref-ioc-birds-2026'],
    verificationStatus: 'verified',
    steps: [
      {
        id: 1,
        title: 'Flight Capability and Sternum Keel',
        titleBn: 'উড্ডয়ন ক্ষমতা ও স্টার্নাম কিল',
        character: 'Flightless flat sternum vs keeled flying birds',
        characterBn: 'উড্ডয়নহীন চ্যাপ্টা স্টার্নাম বনাম উড়ুক্কু পাখির কিলযুক্ত স্টার্নাম',
        couplets: [
          {
            lead: 'Enormous flightless terrestrial cursorial bird; sternum flat and raft-like without a carina (keel); foot with only 2 toes; palaeognathous palate; largest living bird.',
            leadBn: 'বিশালাকার উড্ডয়নহীন দ্রুত দৌড়াতে সক্ষম পাখি; স্টার্নাম চ্যাপ্টা এবং কোনো কিল নেই; পায়ে মাত্র ২টি আঙুল; সবচেয়ে বড় জীবিত পাখি।',
            diagnosticFeature: 'Struthioniformes: Struthio camelus (Common ostrich)',
            diagnosticFeatureBn: 'স্ট্রুথিওনিফর্মিস: স্ট্রুথিও ক্যামেলাস (উটপাখি)',
            resultType: 'species',
            speciesId: 'sp-struthio-camelus'
          },
          {
            lead: 'Sternum with well-developed ventral keel (carina) providing attachment for pectoralis flight muscles (or modified for marine diving flight).',
            leadBn: 'বক্ষে শক্তিশালী উড্ডয়ন পেশি সংযুক্তির জন্য সুগঠিত কিল (ক্যারিনা) বিদ্যমান।',
            diagnosticFeature: 'Neognathous birds with keeled sternum',
            diagnosticFeatureBn: 'কিলযুক্ত নিওন্যাথাস পাখি',
            resultType: 'next_step',
            nextStepId: 2
          }
        ]
      },
      {
        id: 2,
        title: 'Aquatic Diving Flippers vs Aerial Flight',
        titleBn: 'ডুব সাঁতারের ফ্লিপার বনাম আকাশ উড্ডয়ন',
        character: 'Wings modified into rigid swimming flippers vs functional flight wings',
        characterBn: 'শক্ত ফ্লিপারে রূপান্তরিত ডানা বনাম বাতাসে উড়ার ডানা',
        couplets: [
          {
            lead: 'Flightless marine diving bird; wings modified into rigid paddle-like flippers covered in scale-like feathers; heavy solid bones for ballast; Antarctic ice habit.',
            leadBn: 'উড্ডয়নহীন সামুদ্রিক ডুবুরি পাখি; ডানা শক্ত ফ্লিপারে রূপান্তরিত এবং আঁইশ-সদৃশ পালকযুক্ত; ভারী নিরেট অস্থি; বরফবাসী।',
            diagnosticFeature: 'Sphenisciformes: Aptenodytes forsteri (Emperor penguin)',
            diagnosticFeatureBn: 'স্ফেনিসিফর্মিস: অ্যাপ্টিনোডাইটস ফর্স্টেরি (সম্রাট পেঙ্গুইন)',
            resultType: 'species',
            speciesId: 'sp-aptenodytes-forsteri'
          },
          {
            lead: 'Fully capable of aerial powered flight; wings with flexible remiges; hollow pneumatic bones.',
            leadBn: 'বাতাসে স্বাভাবিক উড্ডয়নে সক্ষম; ডানায় উড্ডয়ন পালক; ফাঁপা বায়বীয় অস্থি।',
            diagnosticFeature: 'Aerial flying birds',
            diagnosticFeatureBn: 'উড়ুক্কু পাখি',
            resultType: 'next_step',
            nextStepId: 3
          }
        ]
      },
      {
        id: 3,
        title: 'Beak and Foot Specializations',
        titleBn: 'চঞ্চু ও পায়ের বিশেষায়ন',
        character: 'Hooked raptorial bill with talons vs syndactyl or perching feet',
        characterBn: 'তীক্ষ্ণ শিকারি চঞ্চু ও বাঁকা নখ বনাম ঝালরযুক্ত বা বসার উপযোগী পা',
        couplets: [
          {
            lead: 'Diurnal bird of prey; strongly hooked sharp beak with fleshy basal cere; powerful grasping raptorial feet armed with long curved sharp talons; binocular vision.',
            leadBn: 'দিবাচর শিকারি পাখি; শক্ত বাঁকানো ধারালো চঞ্চু; শিকার ধরার উপযোগী শক্তিশালী পা ও লম্বা বাঁকানো ধারালো নখ।',
            diagnosticFeature: 'Accipitriformes: Haliaeetus leucocephalus (Bald eagle)',
            diagnosticFeatureBn: 'অ্যাসিপিট্রিফর্মিস: হ্যালিয়াটাস লিউকোসেফালাস (ঈগল)',
            resultType: 'species',
            speciesId: 'sp-haliaeetus-leucocephalus'
          },
          {
            lead: 'Syndactyl foot (third and fourth toes fused for part of their length); long dagger-like spear bill adapted for plunge-diving after fish.',
            leadBn: 'সিনড্যাকটাইল পা (তৃতীয় ও চতুর্থ আঙুল আংশিক জোড়া লাগানো); মাছ শিকারের উপযোগী দীর্ঘ বর্শা-সদৃশ চঞ্চু।',
            diagnosticFeature: 'Coraciiformes: Alcedo atthis (Common kingfisher)',
            diagnosticFeatureBn: 'কোরাসিইফর্মিস: আলসেডো আথিস (পাতি মাছরাঙা)',
            resultType: 'species',
            speciesId: 'sp-alcedo-atthis'
          },
          {
            lead: 'Perching bird; anisodactyl foot with 3 toes forward and 1 backward on same level adapted for gripping perches; complex vocal syrinx; melodious songbird.',
            leadBn: 'ডালে বসার পাখি; অ্যানিসোড্যাকটাইল পা যাতে ৩টি আঙুল সামনে ও ১টি পেছনে সমান তলে অবস্থিত; সুরেলা কন্ঠনালীবিশিষ্ট গায়ক পাখি।',
            diagnosticFeature: 'Passeriformes: Copsychus saularis (Oriental magpie-robin)',
            diagnosticFeatureBn: 'প্যাসারিফর্মিস: কপসাইকাস সলারিস (দোয়েল পাখি)',
            resultType: 'species',
            speciesId: 'sp-copsychus-saularis'
          }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // Key 11: Major Mammalian Lineages & Orders Key
  // ---------------------------------------------------------------------------
  {
    id: 'key-global-mammalia-lineages',
    title: 'Representative Diagnostic Key to Major Mammalian Lineages & Orders',
    titleBn: 'প্রধান স্তন্যপায়ী শাখা ও বর্গসমূহের প্রতিনিধি শনাক্তকরণ কুঞ্জি',
    scope: 'global',
    targetTaxonId: 'taxon-mammalia',
    majorGroup: 'mammalia',
    taxonScope: 'Mammalia (Monotremes, Marsupials, Bats, Carnivores, Whales, Sirenians, Rodents, Primates)',
    taxonScopeBn: 'ম্যামালিয়া (ডিমপাড়া স্তন্যপায়ী, থলেযুক্ত মারসুপিয়াল, বাদুড়, মাংসাশী, তিমি, ডুগং, ইঁদুর, প্রাইমেট)',
    description: 'Educational morphological key identifying major mammalian clades based on reproductive biology (monotremes, marsupials, placentals), aquatic vs volant limb adaptations, and dentition specializations.',
    descriptionBn: 'প্রজনন জীববিদ্যা (ডিমপাড়া, মারসুপিয়াল, প্লাসেন্টাল), ডানা ও সাঁতারের অঙ্গ এবং দাঁতের বিশেষায়নের ওপর ভিত্তি করে প্রধান স্তন্যপায়ী বর্গসমূহের প্রামাণ্য কুঞ্জি।',
    educationalLevel: 'intermediate',
    keyType: 'dichotomous',
    sourceReferenceIds: ['ref-mammal-diversity-2026', 'ref-kardong-2018'],
    verificationStatus: 'verified',
    steps: [
      {
        id: 1,
        title: 'Reproductive Biology: Oviparity vs Viviparity',
        titleBn: 'প্রজনন পদ্ধতি: ডিম্বজ বনাম জরায়ুজ',
        character: 'Egg-laying monotreme vs live-bearing mammal',
        characterBn: 'ডিমপাড়া মনোট্রিম বনাম জীবন্ত বাচ্চা প্রসবকারী স্তন্যপায়ী',
        couplets: [
          {
            lead: 'Oviparous egg-laying mammal; cloaca present for excretion and reproduction; females lack teats, secreting milk onto abdominal fur patches; leathery electroreceptive bill.',
            leadBn: 'ডিমপাড়া স্তন্যপায়ী প্রাণী; মল ও প্রজননের জন্য একক ক্লোয়াকা বিদ্যমান; স্তনবৃন্ত নেই, পেটের লোম থেকে দুগ্ধ নিঃসৃত হয়; চামড়ার মতো হাঁসের চঞ্চু।',
            diagnosticFeature: 'Monotremata: Ornithorhynchus anatinus (Platypus)',
            diagnosticFeatureBn: 'মনোট্রিমাটা: অর্নিথোরিঙ্কাস অ্যানাটিনাস (প্লাটিপাস)',
            resultType: 'species',
            speciesId: 'sp-ornithorhynchus-anatinus'
          },
          {
            lead: 'Viviparous (live-bearing) mammals; nipples or teats present; no cloaca in adults.',
            leadBn: 'জরায়ুজ (বাচ্চা প্রসবকারী) স্তন্যপায়ী; স্তনবৃন্ত উপস্থিত; পূর্ণাঙ্গদের ক্ষেত্রে কোনো ক্লোয়াকা নেই।',
            diagnosticFeature: 'Therian mammals: Marsupials and Placentals',
            diagnosticFeatureBn: 'থেরিয়ান স্তন্যপায়ী: মারসুপিয়াল ও প্লাসেন্টাল',
            resultType: 'next_step',
            nextStepId: 2
          }
        ]
      },
      {
        id: 2,
        title: 'Marsupial Pouch vs Eutherian Placenta',
        titleBn: 'মারসুপিয়াল থলি বনাম প্লাসেন্টাল অমরা',
        character: 'Abdominal pouch (marsupium) vs prolonged chorioallantoic gestation',
        characterBn: 'উদরীয় থলি (মারসুপিয়াম) বনাম দীর্ঘায়িত প্লাসেন্টাল গর্ভধারণ',
        couplets: [
          {
            lead: 'Brief embryonic gestation; altricial young crawl into maternal abdominal pouch (marsupium) to latch onto nipples; paired epipubic bones support pouch; bipedal saltation.',
            leadBn: 'অত্যন্ত ক্ষণস্থায়ী গর্ভধারণ; অপরিণত শাবক মায়ের পেটের থলিতে (মারসুপিয়াম) প্রবেশ করে স্তনবৃন্তে লেগে থাকে; থলি ধারক এপিউবিক অস্থি।',
            diagnosticFeature: 'Diprotodontia: Osphranter rufus (Red kangaroo)',
            diagnosticFeatureBn: 'ডাইপ্রোটোডনশিয়া: অসফ্র্যান্টার রুফাস (লাল ক্যাঙ্গারু)',
            resultType: 'species',
            speciesId: 'sp-osphranter-rufus'
          },
          {
            lead: 'Placental mammals (Eutheria); prolonged internal gestation supported by a complex chorioallantoic placenta; young born at advanced developmental stage.',
            leadBn: 'অমরাযুক্ত স্তন্যপায়ী (ইউথেরিয়া); জটিল প্লাসেন্টার মাধ্যমে দীর্ঘকালীন গর্ভধারণ; সুগঠিত শাবক প্রসব।',
            diagnosticFeature: 'Placentalia (Eutherian Mammals)',
            diagnosticFeatureBn: 'প্লাসেন্টালিয়া (অমরাযুক্ত স্তন্যপায়ী)',
            resultType: 'next_step',
            nextStepId: 3
          }
        ]
      },
      {
        id: 3,
        title: 'Locomotory Adaptations: Flight vs Fully Aquatic vs Terrestrial',
        titleBn: 'চলন অভিযোজন: উড্ডয়ন বনাম জলজ বনাম স্থলজ',
        character: 'Wing patagium vs aquatic flippers/flukes vs terrestrial quadrupedalism',
        characterBn: 'ডানার প্যাটাগিয়াম বনাম জলজ ফ্লিপার/লেজ বনাম চারপেয়ে হাঁটা',
        couplets: [
          {
            lead: 'Forelimbs modified as true wings with flight membrane (patagium) stretched across greatly elongated phalanges; only mammals capable of true powered flight.',
            leadBn: 'অগ্রপদ প্রকৃত ডানায় রূপান্তরিত যাতে দীর্ঘ আঙুলের ফাঁকে ওড়ার চামড়া (প্যাটাগিয়াম) বিস্তৃত; আকাশে উড়তে সক্ষম একমাত্র স্তন্যপায়ী।',
            diagnosticFeature: 'Chiroptera: Pteropus medius (Indian flying fox)',
            diagnosticFeatureBn: 'কাইরোপ্টেরা: টেরোপাস মিডিয়াস (বাদুড়/গেছো বাদুড়)',
            resultType: 'species',
            speciesId: 'sp-pteropus-medius'
          },
          {
            lead: 'Fully aquatic mammals; streamlined fusiform body; hindlimbs lost; forelimbs modified into steering flippers; tail terminates in horizontal flukes.',
            leadBn: 'সম্পূর্ণ জলজ স্তন্যপায়ী; মসৃণ নলাকার দেহ; পেছনের পা বিলুপ্ত; সামনের পা ফ্লিপারে রূপান্তরিত; অনুভূমিক পুচ্ছ পাখনা।',
            diagnosticFeature: 'Cetacea: Balaenoptera musculus / Orcaella brevirostris',
            diagnosticFeatureBn: 'সিটাসিয়া: নীল তিমি / ইরাবতী ডলফিন',
            resultType: 'species',
            speciesId: 'sp-balaenoptera-musculus'
          },
          {
            lead: 'Fully aquatic herbivorous marine mammals; muzzle with stiff sensory vibrissae; paddle-like forelimbs and broad paddle-like horizontal tail fluke; pachyostotic dense bones.',
            leadBn: 'সম্পূর্ণ জলজ নিরামিষাশী সামুদ্রিক স্তন্যপায়ী; শক্ত সংবেদী গোঁফযুক্ত মুখ; চওড়া প্যাডেল-সদৃশ অনুভূমিক লেজ।',
            diagnosticFeature: 'Sirenia: Dugong dugon (Dugong / Sea cow)',
            diagnosticFeatureBn: 'সাইরেনিয়া: ডুগং ডুগন (সমুদ্র গাভী)',
            resultType: 'species',
            speciesId: 'sp-dugong-dugon'
          },
          {
            lead: 'Terrestrial or semi-aquatic mammals with four walking limbs or opposable grasping hands.',
            leadBn: 'হাঁটার উপযোগী চার পা অথবা আঁকড়ে ধরার উপযোগী হাতযুক্ত স্থলজ স্তন্যপায়ী।',
            diagnosticFeature: 'Terrestrial / Arboreal Mammalian Orders',
            diagnosticFeatureBn: 'স্থলজ / বৃক্ষবাসী স্তন্যপায়ী বর্গ',
            resultType: 'next_step',
            nextStepId: 4
          }
        ]
      },
      {
        id: 4,
        title: 'Dentition Specializations: Carnivores vs Rodents vs Primates',
        titleBn: 'দাঁতের বিশেষায়ন: মাংসাশী বনাম ইঁদুর বনাম প্রাইমেট',
        character: 'Carnassials vs open-rooted gnawing incisors vs bunodont molars with nails',
        characterBn: 'মাংস ছেঁড়ার দাঁত বনাম আজীবন বর্ধনশীল দাঁত বনাম নখযুক্ত হাত ও দাঁত',
        couplets: [
          {
            lead: 'Dentition specialized for predation with large curved canines and shearing carnassial teeth (upper premolar 4 and lower molar 1 shearing pair); apex predator.',
            leadBn: 'শিকারের জন্য বিশেষায়িত ধারালো দাঁত ও মাংস ছেঁড়ার কার্নাসিয়াল জোড়; শীর্ষ শিকারি।',
            diagnosticFeature: 'Carnivora: Panthera tigris (Bengal tiger)',
            diagnosticFeatureBn: 'কার্নিভোরা: প্যান্থেরা টাইগ্রিস (রয়্যাল বেঙ্গল টাইগার)',
            resultType: 'species',
            speciesId: 'sp-panthera-tigris'
          },
          {
            lead: 'Single pair of upper and lower continuously growing open-rooted chiseling incisors backed by enamel only on front surface; large diastema before cheek teeth; world largest rodent.',
            leadBn: 'ওপর ও নিচের চোয়ালে একজোড়া করে আজীবন বর্ধনশীল বাটালি-সদৃশ তীক্ষ্ণ দাঁত; দাঁতের মাঝে ফাঁকা ডায়াস্টেমা; পৃথিবীর বৃহত্তম ইঁদুর জাতীয় প্রাণী।',
            diagnosticFeature: 'Rodentia: Hydrochoerus hydrochaeris (Capybara)',
            diagnosticFeatureBn: 'রোডেনশিয়া: হাইড্রোচোয়েরাস হাইড্রোচ্যারিস (ক্যাপিবারা)',
            resultType: 'species',
            speciesId: 'sp-hydrochoerus-hydrochaeris'
          },
          {
            lead: 'Arboreal adaptations: stereoscopic forward-facing eyes, large cerebral cortex, opposable pollex/hallux, digits bearing flat nails rather than claws; complex social communication.',
            leadBn: 'সামনের দিকে তাকানো চোখ ও গভীরতা দৃষ্টি; উন্নত মস্তিষ্ক; আঁকড়ে ধরার হাত ও চ্যাপ্টা নখ (নখরহীন); জটিল সামাজিক আচরণ।',
            diagnosticFeature: 'Primates: Pan troglodytes (Chimpanzee)',
            diagnosticFeatureBn: 'প্রাইমেট: প্যান ট্রগ্লোডাইটিস (শিম্পাঞ্জি)',
            resultType: 'species',
            speciesId: 'sp-pan-troglodytes'
          }
        ]
      }
    ]
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 4 PRESERVED BANGLADESH REGIONAL IDENTIFICATION KEYS
// ─────────────────────────────────────────────────────────────────────────────

const BANGLADESH_KEYS = [
  {
    id: 'key-major-aquatic-vertebrates',
    title: 'Diagnostic Key to Major Aquatic Vertebrate Groups of Bangladesh',
    titleBn: 'বাংলাদেশের প্রধান জলজ মেরুদণ্ডী প্রাণীদের শনাক্তকরণ কুঞ্জি',
    scope: 'bangladesh',
    targetTaxonId: 'taxon-chordata',
    majorGroup: 'vertebrates',
    taxonScope: 'Vertebrata (Fishes & Aquatic Mammals of Bangladesh)',
    taxonScopeBn: 'ভার্টিব্রাটা (বাংলাদেশের মৎস্য ও জলজ স্তন্যপায়ী প্রাণী)',
    description: 'A dichotomous morphological key distinguishing major fish classes, carps, clupeids, catfishes, snakeheads, spiny eels, and riverine/coastal cetaceans of Bangladesh.',
    descriptionBn: 'বাংলাদেশের প্রধান প্রধান মৎস্য শ্রেণি, কার্প, ইলিশ, ক্যাটফিশ, শোল, বাইম এবং নদী ও উপকূলের ডলফিন-তিমির দ্বিপদী শনাক্তকরণ কুঞ্জি।',
    educationalLevel: 'intermediate',
    keyType: 'dichotomous',
    sourceReferenceIds: ['ref-rahman-2005', 'ref-iucn-bd-2015', 'ref-smith-bd-cetaceans-2008'],
    verificationStatus: 'verified',
    steps: [
      {
        id: 1,
        title: 'Respiration and Tail Fluke Morphology',
        titleBn: 'শ্বাসকার্য ও পুচ্ছ পাখনার প্রকৃতি',
        character: 'Atmospheric air via blowhole with horizontal fluke vs gills with vertical fin',
        characterBn: 'ব্লোহোল দিয়ে বাতাস ও অনুভূমিক ফ্লুক বনাম ফুলকা ও খাড়া পাখনা',
        couplets: [
          {
            lead: 'Organism breathes atmospheric air via blowhole on dorsal surface of head; mammary glands present; horizontal tail fluke moving vertically.',
            leadBn: 'মাথার ওপর ব্লোহোল দিয়ে বাতাস থেকে শ্বাস নেয়; স্তনগ্রন্থি বিদ্যমান; অনুভূমিক পুচ্ছ ফ্লুক ওঠানামা করে।',
            diagnosticFeature: 'Mammalian cetacean morphology',
            diagnosticFeatureBn: 'স্তন্যপায়ী সিটাসিয়ান গঠন',
            resultType: 'next_step', nextStepId: 2
          },
          {
            lead: 'Organism breathes dissolved oxygen via gills; fins supported by rays or cartilaginous elements; vertical caudal fin moving horizontally.',
            leadBn: 'ফুলকার সাহায্যে পানিতে দ্রবীভূত অক্সিজেনে শ্বাস নেয়; পাখনা রশ্মিযুক্ত; খাড়া লেজ ডানে-বামে নড়ে।',
            diagnosticFeature: 'Ichthyological morphology',
            diagnosticFeatureBn: 'মৎস্য শারীরস্থানিক গঠন',
            resultType: 'next_step', nextStepId: 3
          }
        ]
      },
      {
        id: 2,
        title: 'Riverine vs Coastal Estuarine Cetaceans',
        titleBn: 'নদীজ বনাম উপকূলীয় ডলফিন',
        character: 'Elongated rostrum with tiny eyes vs blunt melon with dorsal fin',
        characterBn: 'লম্বা চঞ্চু ও ক্ষয়িষ্ণু চোখ বনাম ভোঁতা কপাল ও পৃষ্ঠ পাখনা',
        couplets: [
          {
            lead: 'Snout greatly elongated into a slender rostrum with sharp visible teeth; eyes tiny/rudimentary; low dorsal ridge without falcate fin; strictly freshwater.',
            leadBn: 'চোয়াল লম্বা সরু চঞ্চুতে প্রসারিত যাতে দৃশ্যমান দাঁত রয়েছে; চোখ অত্যন্ত ক্ষুদ্র; পৃষ্ঠ পাখনা নেই; শুধুমাত্র মিঠাপানির বাসিন্দা।',
            diagnosticFeature: 'Elongated rostrum, rudimentary eyes, freshwater potamon',
            diagnosticFeatureBn: 'লম্বা চঞ্চু, ক্ষুদ্র চোখ, মিঠাপানির নদী',
            resultType: 'species', speciesId: 'sp-platanista-gangetica'
          },
          {
            lead: 'Forehead prominent, rounded (melon) with no visible beak; small curved dorsal fin present behind midpoint; coastal, estuarine, and mangrove waterways.',
            leadBn: 'কপাল সুস্পষ্ট ও গোলাকার (মেলন); কোনো দৃশ্যমান চঞ্চু নেই; ছোট বাঁকানো পৃষ্ঠ পাখনা উপস্থিত; সুন্দরবন ও উপকূলীয় খাঁড়ি।',
            diagnosticFeature: 'Blunt melon, falcate dorsal fin, estuarine habitat',
            diagnosticFeatureBn: 'ভোঁতা মেলন, বাঁকা পৃষ্ঠ পাখনা, মোহনা অঞ্চল',
            resultType: 'species', speciesId: 'sp-orcaella-brevirostris'
          }
        ]
      },
      {
        id: 3,
        title: 'Cartilaginous vs Bony Fishes of Bangladesh',
        titleBn: 'বাংলাদেশের তরুণাস্থিময় বনাম অস্থিময় মাছ',
        character: 'Cartilage with 5 lateral gill slits vs bony operculum',
        characterBn: 'তরুণাস্থি ও ৫টি ফুলকা ফাটল বনাম অস্থিময় কানকো',
        couplets: [
          {
            lead: 'Skeleton composed of cartilage; 5 lateral gill slits; body elongated with distinct dorsal ridges; nasal barbels present; marine/brackish inshore.',
            leadBn: 'তরুণাস্থিময় কঙ্কাল; ৫টি পার্শ্বীয় ফুলকা ফাটল; পিঠে খাঁজযুক্ত লম্বাটে দেহ; নাসারন্ধ্রের কাছে কর্ষিকা; উপকূলীয় লবণাক্ত পানি।',
            diagnosticFeature: 'Chondrichthyan carpet shark morphology',
            diagnosticFeatureBn: 'তরুণাস্থিময় কার্পেট শার্ক',
            resultType: 'species', speciesId: 'sp-chiloscyllium-indicum'
          },
          {
            lead: 'Skeleton composed of bone (teleost); single opercular opening on each side covered by bony operculum.',
            leadBn: 'অস্থিময় কঙ্কাল; কানকো দ্বারা আবৃত প্রতিপাশে একক ফুলকা ছিদ্র।',
            diagnosticFeature: 'Osteichthyan bony fish',
            diagnosticFeatureBn: 'অস্থিময় মাছ',
            resultType: 'next_step', nextStepId: 4
          }
        ]
      },
      {
        id: 4,
        title: 'Spiny Eels vs Typical Body Fishes',
        titleBn: 'তারা বাইম বনাম সাধারণ গঠনের মাছ',
        character: 'Elongate eel-like body with rostral appendage and isolated spines vs non-eel',
        characterBn: 'লম্বা সাপের মতো দেহ ও আলাদা কাঁটাবিশিষ্ট বাইম বনাম সাধারণ দেহ',
        couplets: [
          {
            lead: 'Body eel-like, extremely elongated (snake-shaped); pelvic fins absent; numerous isolated dorsal spines before continuous rayed dorsal-caudal-anal fin; mobile fleshy rostral proboscis.',
            leadBn: 'সাপের মতো অত্যন্ত লম্বাটে দেহ; শ্রোণী পাখনা নেই; পিঠের ওপরে বহু পৃথক কাঁটা; মুখের সামনে মাংসল শুঁড়।',
            diagnosticFeature: 'Mastacembelid spiny eel body form',
            diagnosticFeatureBn: 'মাস্টাসিম্বেলিড বাইম মাছের গঠন',
            resultType: 'next_step', nextStepId: 5
          },
          {
            lead: 'Body not eel-like; pelvic fins present (or very large compressed mouth present); dorsal fin not preceded by many isolated spines.',
            leadBn: 'সাপের মতো দেহ নয়; শ্রোণী পাখনা উপস্থিত; পিঠের সামনে পৃথক কাঁটার সারি নেই।',
            diagnosticFeature: 'Non-mastacembelid bony fish',
            diagnosticFeatureBn: 'নন-বাইম অস্থিময় মাছ',
            resultType: 'next_step', nextStepId: 6
          }
        ]
      },
      {
        id: 5,
        title: 'Mastacembelid Species Determination',
        titleBn: 'বাইম মাছের প্রজাতি শনাক্তকরণ',
        character: 'Ocelli on dorsal fin vs reticulate tire-track markings',
        characterBn: 'পৃষ্ঠ পাখনায় গোল দাগ বনাম টায়ারের মতো আঁকাবাঁকা রেখা',
        couplets: [
          {
            lead: 'Dorsal spines 13-16 in number; series of 6-8 dark-edged white ocelli (eye-spots) visible along the base of the dorsal fin; maximum length ~38 cm.',
            leadBn: '১৩-১৬টি পৃষ্ঠ কাঁটা; পৃষ্ঠ পাখনার গোড়ায় ৬-৮টি চোখের মতো গোল সাদা-কালো দাগ; সর্বোচ্চ দৈর্ঘ্য ৩৮ সেমি।',
            diagnosticFeature: 'Macrognathus aculeatus — ocelli on dorsal base (Tara baim)',
            diagnosticFeatureBn: 'ম্যাক্রোগ্নাথাস আকুলিয়াটাস — তারা বাইম',
            resultType: 'species', speciesId: 'sp-macrognathus-aculeatus'
          },
          {
            lead: 'Dorsal spines 31-41 in number; elaborate zig-zag or reticulate dark "tire-track" patterning covering entire body; no distinct ocelli; larger (to 90 cm).',
            leadBn: '৩১-৪১টি পৃষ্ঠ কাঁটা; সারা শরীরে টায়ারের ছাপের মতো আঁকাবাঁকা গাঢ় জালিকা প্যাটার্ন; চোখের মতো দাগ নেই; দৈর্ঘ্য ৯০ সেমি পর্যন্ত।',
            diagnosticFeature: 'Mastacembelus armatus — tire-track reticulate pattern (Baim)',
            diagnosticFeatureBn: 'মাস্টাসিম্বেলাস আর্মাটাস — শাল বাইম',
            resultType: 'species', speciesId: 'sp-mastacembelus-armatus'
          }
        ]
      },
      {
        id: 6,
        title: 'Snakehead Fishes vs Other Teleosts',
        titleBn: 'শোল মাছ বনাম অন্যান্য মাছ',
        character: 'Depressed snake-like head with suprabranchial organ vs typical teleost',
        characterBn: 'সাপের মতো চ্যাপ্টা মাথা ও অতিরিক্ত শ্বাস অঙ্গ বনাম সাধারণ মাছ',
        couplets: [
          {
            lead: 'Head large and strongly flattened (ophiocephalous); body cylindrical with soft, scaleless or large-scaled texture; dorsal fin long without spines; air-breathing organ present in suprabranchial chamber.',
            leadBn: 'মাথা বড় ও সাপের মতো চ্যাপ্টা; নলাকার দেহ ও বড় আঁইশ; কাঁটাহীন লম্বা পৃষ্ঠ পাখনা; অতিরিক্ত শ্বাস অঙ্গ বিদ্যমান।',
            diagnosticFeature: 'Channidae snakehead morphology',
            diagnosticFeatureBn: 'চান্নিডি শোল পরিবারের গঠন',
            resultType: 'next_step', nextStepId: 7
          },
          {
            lead: 'Head not strongly ophiocephalous; body scaled or scaleless (catfish); dorsal fin may have strong spine OR body strongly deep and compressed.',
            leadBn: 'মাথা সাপের মতো চ্যাপ্টা নয়; আঁইশযুক্ত অথবা আঁইশহীন ক্যাটফিশ।',
            diagnosticFeature: 'Non-snakehead scaled/catfish body',
            diagnosticFeatureBn: 'সাধারণ আঁইশযুক্ত বা ক্যাটফিশ দেহ',
            resultType: 'next_step', nextStepId: 8
          }
        ]
      },
      {
        id: 7,
        title: 'Channa Species Determination',
        titleBn: 'শোল মাছের প্রজাতি নির্ণয়',
        character: 'Crossbar bands and large body vs spots and smaller size',
        characterBn: 'তির্যক ব্যান্ড ও বড় দেহ বনাম ছিটছিট দাগ ও ছোট দেহ',
        couplets: [
          {
            lead: 'Body larger (to 90 cm); flanks with 8-11 broad oblique dark crossbars on pale background.',
            leadBn: 'বড় দেহ (৯০ সেমি পর্যন্ত); দুইপাশে ৮-১১টি চওড়া গাঢ় তির্যক ব্যান্ড বা ডোরা।',
            diagnosticFeature: 'Channa striata — crossbar pattern (Shol)',
            diagnosticFeatureBn: 'চান্না স্ট্রায়াটা — শোল মাছ',
            resultType: 'species', speciesId: 'sp-channa-striata'
          },
          {
            lead: 'Body smaller (to 30 cm); flanks with irregular dark spots or blotches, no distinct crossbars.',
            leadBn: 'ছোট দেহ (৩০ সেমি পর্যন্ত); দুইপাশে অনিয়মিত গাঢ় ছিটছিট ফোঁটা দাগ, ডোরা নেই।',
            diagnosticFeature: 'Channa punctata — spotted/blotched pattern (Taki)',
            diagnosticFeatureBn: 'চান্না পাঙ্কটাটা — টাকি মাছ',
            resultType: 'species', speciesId: 'sp-channa-punctata'
          }
        ]
      },
      {
        id: 8,
        title: 'Scaleless Catfishes vs Scaled Teleosts',
        titleBn: 'আঁইশহীন ক্যাটফিশ বনাম আঁইশযুক্ত মাছ',
        character: 'Scaleless with barbels and adipose fin vs cycloid scales without adipose',
        characterBn: 'আঁইশহীন, কর্ষিকাযুক্ত ও অ্যাডিপোজ পাখনা বনাম আঁইশযুক্ত দেহ',
        couplets: [
          {
            lead: 'Body scaleless; adipose fin present between dorsal and caudal fins OR body with four or more pairs of barbels; catfish.',
            leadBn: 'দেহ সম্পূর্ণ আঁইশহীন; পৃষ্ঠ ও পুচ্ছ পাখনার মাঝে চর্বি পাখনা (অ্যাডিপোজ) উপস্থিত অথবা ৪ জোড়া কর্ষিকা।',
            diagnosticFeature: 'Siluriform catfish anatomy',
            diagnosticFeatureBn: 'ক্যাটফিশের অঙ্গসংস্থান',
            resultType: 'next_step', nextStepId: 9
          },
          {
            lead: 'Body covered with visible scales; no adipose fin.',
            leadBn: 'দৃশ্যমান আঁইশযুক্ত দেহ; অ্যাডিপোজ পাখনা নেই।',
            diagnosticFeature: 'Scaled teleost fish',
            diagnosticFeatureBn: 'আঁইশযুক্ত অস্থিময় মাছ',
            resultType: 'next_step', nextStepId: 12
          }
        ]
      },
      {
        id: 9,
        title: 'Large Predator Boal vs Other Catfishes',
        titleBn: 'বোয়াল মাছ বনাম অন্যান্য ক্যাটফিশ',
        character: 'Vestigial dorsal with huge gape vs developed dorsal fin',
        characterBn: 'ক্ষুদ্র পৃষ্ঠ পাখনা ও বিশাল হা বনাম উন্নত পৃষ্ঠ পাখনা',
        couplets: [
          {
            lead: 'Body extremely elongated; dorsal fin tiny (1 spine + 1-3 rays); anal fin very long (80-95 rays); mouth very large extending behind eye; two pairs of barbels; to 240 cm.',
            leadBn: 'লম্বাটে দেহ; অত্যন্ত ক্ষুদ্র পৃষ্ঠ পাখনা; অতি দীর্ঘ পায়ু পাখনা (৮০-৯৫ রশ্মি); চোখের পেছনে বিস্তৃত বিশাল মুখ; ২ জোড়া কর্ষিকা; ২৪০ সেমি পর্যন্ত।',
            diagnosticFeature: 'Wallago attu — minute dorsal, enormous mouth (Boal)',
            diagnosticFeatureBn: 'ওয়ালাগো আত্তু — বোয়াল মাছ',
            resultType: 'species', speciesId: 'sp-wallago-attu'
          },
          {
            lead: 'Body not as above; dorsal fin with at least 5-7 rays or body differently proportioned.',
            leadBn: 'উপরের মতো নয়; পৃষ্ঠ পাখনায় অন্তত ৫-৭টি রশ্মি উপস্থিত।',
            diagnosticFeature: 'Other siluriform catfish',
            diagnosticFeatureBn: 'অন্যান্য ক্যাটফিশ',
            resultType: 'next_step', nextStepId: 10
          }
        ]
      },
      {
        id: 10,
        title: 'Clariidae vs Bagridae/Pangasiidae',
        titleBn: 'মাগুর বনাম পাঙ্গাশ ও টেংরা',
        character: 'Long spineless dorsal fin vs short dorsal with spine and adipose',
        characterBn: 'কাঁটাহীন দীর্ঘ পৃষ্ঠ পাখনা বনাম কাঁটাযুক্ত ছোট পৃষ্ঠ ও অ্যাডিপোজ পাখনা',
        couplets: [
          {
            lead: 'Dorsal fin long, without spine, continuous (60-79 rays); four pairs of barbels; head broad and bony; pectoral spine strong but unserrated; accessory breathing organ present.',
            leadBn: 'দীর্ঘ কাঁটাহীন অবিচ্ছিন্ন পৃষ্ঠ পাখনা (৬০-৭৯ রশ্মি); ৪ জোড়া কর্ষিকা; চওড়া শক্ত মাথা; অতিরিক্ত শ্বাস অঙ্গ উপস্থিত।',
            diagnosticFeature: 'Clarias magur — Clariidae (Native Magur)',
            diagnosticFeatureBn: 'ক্ল্যারিয়াস মাগুর — দেশি মাগুর মাছ',
            resultType: 'species', speciesId: 'sp-clarias-magur'
          },
          {
            lead: 'Dorsal fin short (4-9 rays) with a single spine; adipose fin present or absent; barbels not more than four pairs.',
            leadBn: 'ছোট পৃষ্ঠ পাখনা (৪-৯ রশ্মি) যাতে ১টি কাঁটা রয়েছে; অ্যাডিপোজ পাখনা উপস্থিত বা অনুপস্থিত।',
            diagnosticFeature: 'Other catfish — Siluridae or Bagridae',
            diagnosticFeatureBn: 'পাবদা বা গুলশা টেংরা পরিবার',
            resultType: 'next_step', nextStepId: 11
          }
        ]
      },
      {
        id: 11,
        title: 'Ompok vs Mystus',
        titleBn: 'পাবদা বনাম গুলশা-টেংরা',
        character: 'Adipose fin absence & long anal fin vs adipose fin presence & long barbels',
        characterBn: 'চর্বি পাখনা নেই ও দীর্ঘ পায়ু পাখনা বনাম চর্বি পাখনা বিদ্যমান ও দীর্ঘ গোঁফ',
        couplets: [
          {
            lead: 'Adipose fin completely absent; anal fin very long (50-56 rays); two pairs of barbels; predatory oblique mouth (Ompok pabda / Pabda).',
            leadBn: 'চর্বি পাখনা সম্পূর্ণ অনুপস্থিত; অত্যন্ত দীর্ঘ পায়ু পাখনা (৫০-৫৬ রশ্মি); ২ জোড়া গোঁফ; শিকারি মুখ (পাবদা মাছ)।',
            diagnosticFeature: 'Ompok pabda — Siluridae, no adipose fin (Pabda)',
            diagnosticFeatureBn: 'ওম্পক পাবদা — পাবদা মাছ',
            resultType: 'species', speciesId: 'sp-ompok-pabda'
          },
          {
            lead: 'Adipose fin present and elongate; anal fin shorter (9-12 rays); four pairs of barbels with very long maxillary pair (Mystus cavasius / Gulsha).',
            leadBn: 'ছোট দেহ (৩০ সেমি পর্যন্ত); ৪ জোড়া কর্ষিকার মধ্যে ওপরের জোড়া অত্যন্ত দীর্ঘ; দীর্ঘ অ্যাডিপোজ পাখনা (গুলশা টেংরা)।',
            diagnosticFeature: 'Mystus cavasius — Bagridae, long maxillary barbels (Gulsha)',
            diagnosticFeatureBn: 'মিস্টাস ক্যাভাসিয়াস — গুলশা টেংরা',
            resultType: 'species', speciesId: 'sp-mystus-cavasius'
          }
        ]
      },
      {
        id: 12,
        title: 'Abdominal Scutes: Hilsa vs Carps',
        titleBn: 'পেটের স্কুট: ইলিশ বনাম কার্প',
        character: 'Serrated abdominal keel scutes vs rounded abdomen',
        characterBn: 'পেটে করাত-সদৃশ স্কুট বনাম গোলাকার পেট',
        couplets: [
          {
            lead: 'Abdomen with sharp serrated scutes (30-33 scutes); mouth terminal with a distinct median notch in upper jaw; no teeth; anadromous; highly compressed silvery body.',
            leadBn: 'পেটে ধারালো করাত-সদৃশ স্কুট (৩০-৩৩টি); ওপরের চোয়ালে খাঁজ; দাঁত নেই; রুপালি চ্যাপ্টা দেহ; পরিযায়ী।',
            diagnosticFeature: 'Clupeid serrated abdominal scutes (Ilish)',
            diagnosticFeatureBn: 'ক্লুপেইড ধারালো স্কুট (ইলিশ)',
            resultType: 'species', speciesId: 'sp-tenualosa-ilisha'
          },
          {
            lead: 'Abdomen rounded, devoid of sharp scutes; scales cycloid; freshwater carp or perch.',
            leadBn: 'পেট গোলাকার, কোনো ধারালো স্কুট নেই; সাইক্লয়েড আঁইশ; মিঠাপানির কার্প।',
            diagnosticFeature: 'Non-clupeid scaled teleost',
            diagnosticFeatureBn: 'নন-ক্লুপেইড আঁইশযুক্ত মাছ',
            resultType: 'next_step', nextStepId: 13
          }
        ]
      },
      {
        id: 13,
        title: 'Catla vs Other Major Carps',
        titleBn: 'কাতলা বনাম অন্যান্য মেজর কার্প',
        character: 'Large upturned superior mouth and deep arched body vs inferior mouth',
        characterBn: 'বিশাল ওপরের দিকে বাঁকানো মুখ ও কুঁজবিশিষ্ট দেহ বনাম নিচের মুখ',
        couplets: [
          {
            lead: 'Head very large with broad upturned mouth; dorsal profile strongly arched; no barbels; strongly deep-bodied; surface-feeding major carp.',
            leadBn: 'মাথা বিশালাকার ও মুখ ওপরের দিকে বাঁকানো; পিঠের দিক কুঁজের মতো উঁচু; গোঁফ নেই; গভীর দেহ; স্তরের উপরিভাগের খাদ্যভোজী।',
            diagnosticFeature: 'Catla catla — large upturned mouth, deep body (Catla)',
            diagnosticFeatureBn: 'কাতলা কাতলা — কাতলা মাছ',
            resultType: 'species', speciesId: 'sp-catla-catla'
          },
          {
            lead: 'Head not greatly enlarged; mouth inferior or terminal; barbels may be present or absent.',
            leadBn: 'মাথা অতিরিক্ত বড় নয়; মুখ নিচের দিকে বা প্রান্তীয়; গোঁফ থাকতে পারে বা নাও থাকতে পারে।',
            diagnosticFeature: 'Other scaled teleost',
            diagnosticFeatureBn: 'অন্যান্য কার্প মাছ',
            resultType: 'next_step', nextStepId: 14
          }
        ]
      },
      {
        id: 14,
        title: 'Rohu vs Mrigal',
        titleBn: 'রুই বনাম মৃগেল',
        character: 'Thick fringed lips with maxillary barbels vs thin simple lips with rostral barbels',
        characterBn: 'পুরু ঝালরযুক্ত ঠোঁট বনাম পাতলা সাধারণ ঠোঁট ও নাকের গোঁফ',
        couplets: [
          {
            lead: 'Mouth inferior with thick fleshy fringed lips; one concealed maxillary barbel pair; moderately arched body; 40-44 lateral line scales; freshwater river.',
            leadBn: 'নিচের দিকে মুখ যাতে পুরু মাংসল ঝালরযুক্ত ঠোঁট রয়েছে; ১ জোড়া গোপন গোঁফ; পার্শ্বরেখায় ৪০-৪৪টি আঁইশ; কলাম খাদ্যভোজী।',
            diagnosticFeature: 'Labeo rohita — fringed lips, concealed barbels (Rohu)',
            diagnosticFeatureBn: 'লাবিও রোহিতা — রুই মাছ',
            resultType: 'species', speciesId: 'sp-labeo-rohita'
          },
          {
            lead: 'Mouth inferior but lips thin and simple; one pair of short rostral barbels; body moderately elongated; 40-43 lateral line scales; bottom feeder.',
            leadBn: 'নিচের মুখ কিন্তু ঠোঁট পাতলা ও ঝালরহীন; ১ জোড়া ছোট নাসারন্ধ্রীয় গোঁফ; লম্বাটে দেহ; তলদেশের খাদ্যভোজী।',
            diagnosticFeature: 'Cirrhinus mrigala — thin inferior lips, rostral barbels (Mrigal)',
            diagnosticFeatureBn: 'সিরহিনাস মৃগালা — মৃগেল মাছ',
            resultType: 'species', speciesId: 'sp-cirrhinus-mrigala'
          }
        ]
      }
    ]
  },

  {
    id: 'key-major-carps-bangladesh',
    title: 'Key to the Major Carps of Bangladesh (Cyprinidae)',
    titleBn: 'বাংলাদেশের প্রধান কার্প মাছসমূহের শনাক্তকরণ কুঞ্জি (সাইপ্রিনিডি)',
    scope: 'bangladesh',
    targetTaxonId: 'taxon-cyprinidae',
    majorGroup: 'fishes',
    taxonScope: 'Cyprinidae (Catla, Labeo, Cirrhinus, Pethia)',
    taxonScopeBn: 'সাইপ্রিনিডি (কাতলা, রুই, মৃগেল, তিতপুঁটি)',
    description: 'Focused dichotomous key to distinguish the four commercially and ecologically important cyprinid species covered in BiotaElite 2.0 from Bangladesh. Based on head shape, mouth morphology, barbel presence, and body form.',
    descriptionBn: 'মাথার আকৃতি, মুখের গঠন, গোঁফ ও দেহের গঠনের ওপর ভিত্তি করে বাংলাদেশের বাণিজ্যিকভাবে গুরুত্বপূর্ণ প্রধান ৪টি কার্প প্রজাতির শনাক্তকরণ কুঞ্জি।',
    educationalLevel: 'introductory',
    keyType: 'dichotomous',
    sourceReferenceIds: ['ref-rahman-2005', 'ref-hamilton-1822'],
    verificationStatus: 'verified',
    steps: [
      {
        id: 1,
        title: 'Catla vs Other Carps',
        titleBn: 'কাতলা বনাম অন্যান্য কার্প',
        character: 'Head size, mouth orientation, and barbel presence',
        characterBn: 'মাথার আকার, মুখের দিক ও গোঁফের উপস্থিতি',
        couplets: [
          {
            lead: 'Body very deep and compressed; head very large and wide; mouth wide and upturned (superior); no barbels; dorsal profile strongly arched.',
            leadBn: 'চওড়া ও চ্যাপ্টা দেহ; অত্যন্ত বড় মাথা; চওড়া ও ওপরমুখী মুখ; গোঁফ নেই; পিঠের দিক খাড়া উঁচু।',
            diagnosticFeature: 'Catla catla — distinctive deep body and upturned mouth',
            diagnosticFeatureBn: 'কাতলা কাতলা — বড় মাথা ও ওপরমুখী মুখ',
            resultType: 'species', speciesId: 'sp-catla-catla'
          },
          {
            lead: 'Body moderately deep to elongated; mouth inferior or subterminal; body proportions less extreme.',
            leadBn: 'দেহ মাঝারি বা লম্বাটে; মুখ নিচের দিকে বা কিছুটা সামনে; সাধারণ শারীরিক অনুপাত।',
            diagnosticFeature: 'Not Catla — other Cyprinidae',
            diagnosticFeatureBn: 'কাতলা নয় — অন্যান্য কার্প',
            resultType: 'next_step', nextStepId: 2
          }
        ]
      },
      {
        id: 2,
        title: 'Rohu vs Other Cyprinids',
        titleBn: 'রুই বনাম অন্যান্য কার্প',
        character: 'Lip structure and fringing',
        characterBn: 'ঠোঁটের গঠন ও ঝালরের উপস্থিতি',
        couplets: [
          {
            lead: 'Mouth inferior with thick, prominently fringed lips (lower lip with distinct free margins); concealed maxillary barbels present in labial groove.',
            leadBn: 'নিচের দিকে মুখ যাতে পুরু সুস্পষ্ট ঝালরযুক্ত ঠোঁট রয়েছে; ওষ্ঠ খাঁজে লুকানো একজোড়া গোঁফ।',
            diagnosticFeature: 'Labeo rohita — fringed lips and barbels',
            diagnosticFeatureBn: 'লাবিও রোহিতা — ঝালরযুক্ত ঠোঁট ও গোঁফ',
            resultType: 'species', speciesId: 'sp-labeo-rohita'
          },
          {
            lead: 'Mouth inferior but lips thin and not prominently fringed; barbels inconspicuous rostral type only or absent.',
            leadBn: 'নিচের দিকে মুখ কিন্তু ঠোঁট পাতলা ও ঝালরহীন; নাসারন্ধ্রে ছোট গোঁফ বা গোঁফ নেই।',
            diagnosticFeature: 'Cirrhinus or Pethia',
            diagnosticFeatureBn: 'মৃগেল বা পুঁটি',
            resultType: 'next_step', nextStepId: 3
          }
        ]
      },
      {
        id: 3,
        title: 'Mrigal vs Rosy Barb',
        titleBn: 'মৃগেল বনাম তিতপুঁটি',
        character: 'Body size, spot markings, and rostral barbels',
        characterBn: 'দেহের আকার, কালো ফোঁটা ও নাসিকা গোঁফ',
        couplets: [
          {
            lead: 'Large carp (to 90 cm); body elongated and moderately compressed; head short and pointed; thin inferior lips; single pair of short rostral barbels; bottom feeder.',
            leadBn: 'বড় কার্প (৯০ সেমি পর্যন্ত); লম্বাটে দেহ; ছোট ছুঁচালো মাথা; পাতলা ঠোঁট; একজোড়া ছোট গোঁফ; তলদেশের খাদ্যভোজী।',
            diagnosticFeature: 'Cirrhinus mrigala — large, elongated bottom-feeding carp',
            diagnosticFeatureBn: 'সিরহিনাস মৃগালা — তলদেশের মেজর কার্প',
            resultType: 'species', speciesId: 'sp-cirrhinus-mrigala'
          },
          {
            lead: 'Small barb (to 15 cm); body oval and moderately compressed; no barbels; black spot at base of dorsal fin and caudal peduncle; breeding males vivid rosy-red.',
            leadBn: 'ছোট পুঁটি (১৫ সেমি পর্যন্ত); ডিম্বাকার দেহ; গোঁফ নেই; লেজের গোড়ায় ও পৃষ্ঠ পাখনায় কালো ফোঁটা; প্রজননকালে পুরুষ উজ্জ্বল লালচে।',
            diagnosticFeature: 'Pethia conchonius — small size, black spots, rosy coloration',
            diagnosticFeatureBn: 'পেথিয়া কনকোনিয়াস — তিতপুঁটি',
            resultType: 'species', speciesId: 'sp-pethia-conchonius'
          }
        ]
      }
    ]
  },

  {
    id: 'key-catfishes-bangladesh',
    title: 'Key to Air-Breathing & Predatory Catfishes of Bangladesh (Siluriformes)',
    titleBn: 'বাংলাদেশের জিওল ও শিকারি ক্যাটফিশসমূহের শনাক্তকরণ কুঞ্জি (সিলুরিফর্মিস)',
    scope: 'bangladesh',
    targetTaxonId: 'taxon-siluriformes',
    majorGroup: 'fishes',
    taxonScope: 'Siluriformes (Clariidae, Heteropneustidae, Pangasiidae, Bagridae, Siluridae, Schilbeidae)',
    taxonScopeBn: 'সিলুরিফর্মিস (মাগুর, শিং, পাঙ্গাশ, গুলশা, বোয়াল, বাচা)',
    description: 'Dichotomous key to distinguish the major siluriform catfish species of Bangladesh based on barbel count, dorsal fin morphology, body size, and accessory breathing organ presence.',
    descriptionBn: 'গোঁফের সংখ্যা, পৃষ্ঠ পাখনার প্রকৃতি, দেহের আকার ও অতিরিক্ত শ্বাস অঙ্গের উপস্থিতির ওপর ভিত্তি করে বাংলাদেশের প্রধান প্রধান ক্যাটফিশ প্রজাতির শনাক্তকরণ কুঞ্জি।',
    educationalLevel: 'intermediate',
    keyType: 'dichotomous',
    sourceReferenceIds: ['ref-rahman-2005', 'ref-bloch-1793', 'ref-ng-kottelat-2008'],
    verificationStatus: 'verified',
    steps: [
      {
        id: 1,
        title: 'Boal vs Other Catfishes',
        titleBn: 'বোয়াল বনাম অন্যান্য ক্যাটফিশ',
        character: 'Anal fin length and gape extension',
        characterBn: 'পায়ু পাখনার দৈর্ঘ্য ও মুখের বিস্তার',
        couplets: [
          {
            lead: 'Body extremely elongated (to 240 cm); dorsal fin vestigial (I + 1-3 rays); anal fin extremely long (80-95 rays); mouth gape extends behind the eye.',
            leadBn: 'অত্যন্ত লম্বাটে দেহ (২৪০ সেমি পর্যন্ত); অতি ক্ষুদ্র পৃষ্ঠ পাখনা; অত্যন্ত দীর্ঘ পায়ু পাখনা (৮০-৯৫ রশ্মি); চোখের পেছনে বিস্তৃত বিশাল মুখ।',
            diagnosticFeature: 'Wallago attu — Siluridae, enormous elongated predator',
            diagnosticFeatureBn: 'ওয়ালাগো আত্তু — বোয়াল মাছ',
            resultType: 'species', speciesId: 'sp-wallago-attu'
          },
          {
            lead: 'Body not as above; dorsal fin with more than 5 rays or body proportioned differently.',
            leadBn: 'উপরের মতো নয়; পৃষ্ঠ পাখনায় ৫টির বেশি রশ্মি উপস্থিত।',
            diagnosticFeature: 'Other Siluriformes',
            diagnosticFeatureBn: 'অন্যান্য ক্যাটফিশ',
            resultType: 'next_step', nextStepId: 2
          }
        ]
      },
      {
        id: 2,
        title: 'Magur vs Short-Dorsal Catfishes',
        titleBn: 'মাগুর বনাম ছোট পৃষ্ঠপাখনা ক্যাটফিশ',
        character: 'Dorsal fin length and accessory arborescent organ',
        characterBn: 'পৃষ্ঠ পাখনার দৈর্ঘ্য ও অতিরিক্ত শ্বাস অঙ্গ',
        couplets: [
          {
            lead: 'Dorsal fin very long (60-79 soft rays), without a spine; four pairs of barbels; head broad, bony, strongly flattened; accessory arborescent breathing organ in suprabranchial chamber.',
            leadBn: 'কাঁটাহীন অত্যন্ত দীর্ঘ পৃষ্ঠ পাখনা (৬০-৭৯ রশ্মি); ৪ জোড়া গোঁফ; শক্ত চ্যাপ্টা মাথা; কানকোর ওপর গাঠনিক অতিরিক্ত শ্বাস অঙ্গ।',
            diagnosticFeature: 'Clarias magur — Clariidae, long spineless dorsal (Magur)',
            diagnosticFeatureBn: 'ক্ল্যারিয়াস মাগুর — দেশি মাগুর মাছ',
            resultType: 'species', speciesId: 'sp-clarias-magur'
          },
          {
            lead: 'Dorsal fin shorter (less than 15 rays), with a single spine; body profile differently proportioned.',
            leadBn: 'ছোট পৃষ্ঠ পাখনা (১৫টির কম রশ্মি) যাতে কাঁটা উপস্থিত।',
            diagnosticFeature: 'Other Siluriformes',
            diagnosticFeatureBn: 'অন্যান্য ক্যাটফিশ',
            resultType: 'next_step', nextStepId: 3
          }
        ]
      },
      {
        id: 3,
        title: 'Shing (Stinging Catfish) vs Other Catfishes',
        titleBn: 'শিং মাছ বনাম অন্যান্য ক্যাটফিশ',
        character: 'Venomous pectoral spine and tubular air sacs vs typical body form',
        characterBn: 'বিষাক্ত বক্ষ কাঁটা ও নলাকার শ্বাসথলি বনাম সাধারণ দেহাকৃতি',
        couplets: [
          {
            lead: 'Two pairs of barbels only; pectoral spine venomous and sharp; long air-sac extension in posterior abdomen (visible as a ridge); dorsal fin small (I spine + 5-7 rays); body slender (to 30 cm).',
            leadBn: 'মাত্র ২ জোড়া গোঁফ; অত্যন্ত বিষাক্ত ধারালো বক্ষ কাঁটা; পিঠের ভেতর দিয়ে লেজ পর্যন্ত বিস্তৃত দীর্ঘ শ্বাসথলি; ছোট পৃষ্ঠ পাখনা।',
            diagnosticFeature: 'Heteropneustes fossilis — venomous spine, tubular air sac (Shing)',
            diagnosticFeatureBn: 'হেটারোপনিউস্টেস ফসিলিস — শিং মাছ',
            resultType: 'species', speciesId: 'sp-heteropneustes-fossilis'
          },
          {
            lead: 'Four or more pairs of barbels (or if two pairs, anal fin very long); pectoral spine not venomous; no extended tubular air sac ridge into caudal region.',
            leadBn: 'গোঁফ ৪ জোড়া (অথবা দীর্ঘ পায়ু পাখনা); বিষাক্ত কাঁটা নেই; লেজ পর্যন্ত শ্বাসথলি নেই।',
            diagnosticFeature: 'Other Siluriformes (Pabda or Gulsha)',
            diagnosticFeatureBn: 'অন্যান্য ক্যাটফিশ (পাবদা বা গুলশা)',
            resultType: 'next_step', nextStepId: 4
          }
        ]
      },
      {
        id: 4,
        title: 'Pabda vs Gulsha Tengra',
        titleBn: 'পাবদা বনাম গুলশা টেংরা',
        character: 'Adipose fin absent & very long anal fin vs adipose fin present & long barbels',
        characterBn: 'চর্বি পাখনা নেই ও দীর্ঘ পায়ু পাখনা বনাম চর্বি পাখনা বিদ্যমান ও দীর্ঘ গোঁফ',
        couplets: [
          {
            lead: 'Adipose fin completely absent; anal fin very long (50-56 rays); two pairs of barbels; predatory oblique mouth; body laterally compressed.',
            leadBn: 'চর্বি পাখনা সম্পূর্ণ অনুপস্থিত; অত্যন্ত দীর্ঘ পায়ু পাখনা (৫০-৫৬ রশ্মি); ২ জোড়া গোঁফ; শিকারি মুখ; চ্যাপ্টা রুপালি দেহ।',
            diagnosticFeature: 'Ompok pabda — Siluridae, no adipose fin, long anal fin (Pabda)',
            diagnosticFeatureBn: 'ওম্পক পাবদা — পাবদা মাছ',
            resultType: 'species', speciesId: 'sp-ompok-pabda'
          },
          {
            lead: 'Adipose fin present and elongate; anal fin shorter (9-12 rays); four pairs of barbels with very long maxillary pair extending beyond pelvic fin origin.',
            leadBn: 'লম্বা চর্বি পাখনা বিদ্যমান; ছোট পায়ু পাখনা (৯-১২ রশ্মি); ৪ জোড়া গোঁফ যার প্রধান জোড়া অত্যন্ত দীর্ঘ এবং শ্রোণী পাখনা ছাড়িয়ে যায়।',
            diagnosticFeature: 'Mystus cavasius — Bagridae, long maxillary barbels (Gulsha)',
            diagnosticFeatureBn: 'মিস্টাস ক্যাভাসিয়াস — গুলশা টেংরা',
            resultType: 'species', speciesId: 'sp-mystus-cavasius'
          }
        ]
      }
    ]
  },

  {
    id: 'key-snakeheads-bangladesh',
    title: 'Key to Snakehead Fishes of Bangladesh (Genus Channa)',
    titleBn: 'বাংলাদেশের শোল-টাকি মাছসমূহের শনাক্তকরণ কুঞ্জি (চান্না গণ)',
    scope: 'bangladesh',
    targetTaxonId: 'taxon-channidae',
    majorGroup: 'fishes',
    taxonScope: 'Channidae (Channa striata, Channa punctata)',
    taxonScopeBn: 'চান্নিডি (শোল ও টাকি মাছ)',
    description: 'Focused dichotomous key to the two most common Channa (snakehead) species of Bangladesh freshwater systems: Channa striata (Shol) and Channa punctata (Taki). Based on body size, flank patterning, and dorsal ray count.',
    descriptionBn: 'শারীরিক আকার, দুইপাশের ডোরা বা ফোঁটা এবং পৃষ্ঠ পাখনার রশ্মি সংখ্যার ওপর ভিত্তি করে বাংলাদেশের দুটি সর্বাধিক পরিচিত শোল প্রজাতির (শোল ও টাকি) শনাক্তকরণ কুঞ্জি।',
    educationalLevel: 'introductory',
    keyType: 'dichotomous',
    sourceReferenceIds: ['ref-rahman-2005', 'ref-bloch-1793'],
    verificationStatus: 'verified',
    steps: [
      {
        id: 1,
        title: 'Shol vs Taki Determination',
        titleBn: 'শোল বনাম টাকি নির্ণয়',
        character: 'Body length, oblique crossbars vs spots, and dorsal ray counts',
        characterBn: 'দেহের দৈর্ঘ্য, তির্যক ডোরা বনাম ফোঁটা এবং পৃষ্ঠ পাখনার রশ্মি',
        couplets: [
          {
            lead: 'Larger species (to 90 cm); flanks with 8-11 prominent, broad oblique dark crossbars alternating with pale interspaces on an olive-brown background; dorsal fin rays 38-45.',
            leadBn: 'বড় প্রজাতি (৯০ সেমি পর্যন্ত); দুইপাশে ৮-১১টি চওড়া গাঢ় তির্যক ডোরা বা ব্যান্ড; পৃষ্ঠ পাখনায় ৩৮-৪৫টি রশ্মি।',
            diagnosticFeature: 'Channa striata — crossbar pattern, large body (Shol)',
            diagnosticFeatureBn: 'চান্না স্ট্রায়াটা — ডোরা দাগ, বড় দেহ (শোল)',
            resultType: 'species', speciesId: 'sp-channa-striata'
          },
          {
            lead: 'Smaller species (to 30 cm); flanks with irregular dark spots or blotches, no distinct cross-bars; dorsal fin rays 28-32; head more blunt.',
            leadBn: 'ছোট প্রজাতি (৩০ সেমি পর্যন্ত); দুইপাশে অনিয়মিত কালো ফোঁটা বা ছিটছিট দাগ; পৃষ্ঠ পাখনায় ২৮-৩২টি রশ্মি; তুলনামূলক ভোঁতা মাথা।',
            diagnosticFeature: 'Channa punctata — spotted/blotched, small body (Taki)',
            diagnosticFeatureBn: 'চান্না পাঙ্কটাটা — ফোঁটা দাগ, ছোট দেহ (টাকি)',
            resultType: 'species', speciesId: 'sp-channa-punctata'
          }
        ]
      }
    ]
  }
];

// Combine all keys
const ALL_KEYS = [...GLOBAL_KEYS, ...BANGLADESH_KEYS];

// ─────────────────────────────────────────────────────────────────────────────
// VALIDATION PASS
// ─────────────────────────────────────────────────────────────────────────────

console.log('Validating', ALL_KEYS.length, 'Identification Keys...');

let errors = 0;
const keyIdSet = new Set();

ALL_KEYS.forEach(key => {
  if (keyIdSet.has(key.id)) {
    console.error('ERROR: Duplicate key ID:', key.id);
    errors++;
  }
  keyIdSet.add(key.id);

  if (key.targetTaxonId && !taxaSet.has(key.targetTaxonId)) {
    console.error(`ERROR: Key ${key.id} has orphan targetTaxonId: ${key.targetTaxonId}`);
    errors++;
  }

  if (key.sourceReferenceIds) {
    key.sourceReferenceIds.forEach(refId => {
      if (!refSet.has(refId)) {
        console.error(`ERROR: Key ${key.id} has orphan sourceReferenceId: ${refId}`);
        errors++;
      }
    });
  }

  key.steps.forEach(step => {
    step.couplets.forEach(couplet => {
      if (couplet.resultType === 'species') {
        if (!couplet.speciesId) {
          console.error(`ERROR: Key ${key.id} step ${step.id} has resultType 'species' but no speciesId!`);
          errors++;
        } else if (!speciesSet.has(couplet.speciesId)) {
          console.error(`ERROR: Key ${key.id} step ${step.id} has orphan speciesId: ${couplet.speciesId}`);
          errors++;
        }
      }
      if (couplet.resultType === 'taxon') {
        if (!couplet.taxonId) {
          console.error(`ERROR: Key ${key.id} step ${step.id} has resultType 'taxon' but no taxonId!`);
          errors++;
        } else if (!taxaSet.has(couplet.taxonId)) {
          console.error(`ERROR: Key ${key.id} step ${step.id} has orphan taxonId: ${couplet.taxonId}`);
          errors++;
        }
      }
      if (couplet.resultType === 'next_step') {
        if (!couplet.nextStepId) {
          console.error(`ERROR: Key ${key.id} step ${step.id} has resultType 'next_step' but no nextStepId!`);
          errors++;
        } else {
          const target = key.steps.find(s => s.id === couplet.nextStepId);
          if (!target) {
            console.error(`ERROR: Key ${key.id} step ${step.id} points to non-existent nextStepId: ${couplet.nextStepId}`);
            errors++;
          }
        }
      }
    });
  });
});

if (errors > 0) {
  console.error(`VALIDATION FAILED with ${errors} errors!`);
  process.exit(1);
}

console.log(`✓ VALIDATION PASSED: 0 errors across ${ALL_KEYS.length} keys!`);

// Write out to src/data/seedIdentKeys.ts
const fileHeader = `// BiotaElite 2.0 Global & Regional Zoological Identification Keys
// MASTER-FIX-13: Comprehensive Global Identification Keys + Preserved Regional Bangladesh Keys
// Authoritative Sources: Hickman (2020), Ruppert (2004), Kardong (2018), Nelson (2016),
// FishBase (2024), Eschmeyer (2024), WoRMS (2024), AmphibiaWeb (2026), Reptile Database (2026),
// IOC World Bird List (2026), Mammal Diversity Database (2026), Rahman (2005), IUCN Bangladesh (2015)
import type { IdentificationKey } from '../types/biodiversity';

export const SEED_IDENTIFICATION_KEYS: IdentificationKey[] = ${JSON.stringify(ALL_KEYS, null, 2)};
`;

const outputPath = path.resolve(__dirname, '../src/data/seedIdentKeys.ts');
fs.writeFileSync(outputPath, fileHeader, 'utf8');
console.log('Successfully wrote', ALL_KEYS.length, 'keys to', outputPath);
