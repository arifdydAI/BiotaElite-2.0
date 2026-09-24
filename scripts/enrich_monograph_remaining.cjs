/**
 * scripts/enrich_monograph_remaining.cjs
 *
 * Populates verified Bengali equivalents for:
 * 1. 5 species missing behaviorBn
 * 2. 8 species missing reproductionBn
 * 3. 39 species missing ecologicalRoleBn
 * 4. 9 species missing seasonalNotesBn
 * 5. Bangladesh regional basin distribution translations for bangladeshOccurrence.regionsBn
 */

const fs = require('fs');
const path = require('path');

const SEED_FILE = path.join(__dirname, '..', 'src', 'data', 'seedSpecies.ts');

const BEHAVIOR_BN = {
  'sp-tubifex-tubifex': 'কাদার নলের ভেতর মাথা নিচে দিয়ে বাস করে; নদীর তলদেশে হাজার হাজার কৃমির ঝাঁক রক্তিম গালিচার মতো অবিরাম দোলে।',
  'sp-hirudo-medicinalis': 'উন্মুক্ত পানিতে তরঙ্গায়িত গতিতে মসৃণ সাঁতার কাটে; রাসায়নিক ও তাপগ্রাহী সংবেদী অঙ্গের মাধ্যমে শিকারের শরীরের তাপ ও নড়াচড়া শনাক্ত করে।',
  'sp-hoplobatrachus-tigerinus': 'একাকী নিশাচর শিকারি; তীব্র রোদের সময় পানির কিনারায় বা ভেজা মাটিতে আংশিক শরীর ডুবিয়ে লুকিয়ে থাকে।',
  'sp-hirudinaria-granulosa': 'দেহের মসৃণ ঢেউ খেলানো সঞ্চালনে সাঁতার কাটে; অগ্র ও পশ্চাৎ চোষক ব্যবহার করে ক্যাটারপিলারের মতো কুঁকড়ে হাঁটে।',
  'sp-spongilla-lacustris': 'স্থায়ী নিশ্চল কলোনি; শীতকালে মূল শরীর বিনষ্ট হলেও অভ্যন্তরীণ জেমুল অক্ষত থাকে যা বসন্তে নতুন স্পঞ্জ অঙ্কুরিত করে।'
};

const REPRODUCTION_BN = {
  'sp-sabella-spallanzanii': 'এক-লিঙ্গ বিশিষ্ট; উন্মুক্ত পানিতে লাখ লাখ গ্যামেট মুক্ত করে বাহ্যিক নিষেক সম্পন্ন করে; সাঁতারু ট্রোকোফোর লার্ভা দশার মাধ্যমে রূপান্তর ঘটে।',
  'sp-periplaneta-americana': 'হেমিমেটাবোলাস রূপান্তর; স্ত্রী তেলাপোকা সুরক্ষিত অন্ধকার খাঁজে ১৪-১৬টি ভ্রূণযুক্ত গাঢ় শিমের মতো ডিমের থলে বা উথিকা (ootheca) সেঁটে দেয়।',
  'sp-gavialis-gangeticus': 'শীতকালে মিলন ঘটে; স্ত্রী ঘড়িয়াল উঁচু বালুচরে ফ্লাস্ক আকৃতির গভীর গর্ত খুঁড়ে জীবিত কুমিরদের মধ্যে বৃহত্তম ডিম পাড়ে।',
  'sp-naja-naja': 'ডিম্বপ্রসবী; মা গোখরা ইঁদুরের গর্ত বা উইপোকার ঢিবিতে ১০-৩০টি ডিম পাড়ে এবং ডিম ফোটা পর্যন্ত সস্নেহে পাহারা দেয়।',
  'sp-elephas-maximus': '১৮-২২ মাসের দীর্ঘ গর্ভধারণ শেষে একটিমাত্র শাবক জন্ম দেয়; মাতৃতান্ত্রিক পারিবারিক পালে শাবক পরম মমতায় লালিত হয়।',
  'sp-tubifex-tubifex': 'উভয়লিঙ্গী; পারস্পরিক মিলনের মাধ্যমে শুক্রাণু বিনিময় করে প্রতিরক্ষামূলক কোকুনে ডিম পাড়ে।',
  'sp-hirudo-medicinalis': 'উভয়লিঙ্গী; পারস্পরিক নিষেকের পর পানির রেখার উপরে স্যাঁতসেঁতে মাটির কিনারায় ডিমযুক্ত স্পঞ্জি কোকুন জমা দেয়।',
  'sp-hirudinaria-granulosa': 'উভয়লিঙ্গী; প্রাক-বর্ষা মৌসুমে পুকুরপাড়ের ভেজা মাটিতে ডিমের সুরক্ষায় স্পঞ্জের মতো ডিম্ব-কোকুন তৈরি করে।'
};

const ROLE_BN = {
  'sp-sabella-spallanzanii': 'সমুদ্র তলদেশের প্রধান জৈব ফিল্টার; তলদেশীয় শিলাস্তর গঠন করে এবং সমুদ্রের পানি পরিষ্কার রাখে।',
  'sp-daphnia-pulex': 'সালোকসংশ্লেষী ফাইটোপ্ল্যাঙ্কটন ও প্লাঙ্কটনভুক ছোট মাছের মধ্যকার প্রাথমিক খাদ্যসংযোগকারী স্তম্ভ।',
  'sp-periplaneta-americana': 'বাস্তুতন্ত্রের অত্যন্ত কার্যকর ডিকম্পোজার ও স্ক্যাভেঞ্জার; শহরাঞ্চলে ক্ষতিকর জীবাণুর যান্ত্রিক বাহক।',
  'sp-hydra-vulgaris': 'মিঠাপানির উপকূলবর্তী অণুখাদক শিকারি; স্টেম সেল গবেষণায় বার্ধক্যহীন অমরত্বের মডেল জীব।',
  'sp-leucosolenia-botryoides': 'পাথুরে তলদেশের ক্ষুদ্র জলধারা পরিশ্রাবণকারী আদিম ফিল্টার স্পঞ্জ।',
  'sp-gavialis-gangeticus': 'নদী বাস্তুতন্ত্রের শীর্ষ নিয়ন্ত্রক কি-স্টোন শিকারি; বন্য নদীর মাছের স্বাস্থ্যকর প্রজনন ভারসাম্য রক্ষা করে।',
  'sp-naja-naja': 'কৃষি বাস্তুতন্ত্রের প্রধান জৈবিক নিয়ন্ত্রক; ফসলের ক্ষতিকর ইঁদুরের জনসংখ্যা নিয়ন্ত্রণে অপরিহার্য।',
  'sp-hirudo-medicinalis': 'বিশেষায়িত রক্তচোষা বাহ্যপরজীবী এবং পুনর্গঠনমূলক প্লাস্টিক মাইক্রোসার্জারির ঐতিহ্যবাহী বায়োমেডিকেল জীব।',
  'sp-apis-mellifera': 'বিশ্বজুড়ে কৃষি ফসল, বুনো ফলমূল ও গুপ্তবীজী উদ্ভিদের এককভাবে সর্বাধিক গুরুত্বপূর্ণ প্রাকৃতিক পরাগায়নকারী দূত।',
  'sp-branchiostoma-lanceolatum': 'মেরুদণ্ডী প্রাণীদের উৎপত্তি, তুলনামূলক ভ্রূণতত্ত্ব ও জিনোমিক্স গবেষণার অন্যতম গুরুত্বপূর্ণ মৌলিক মডেল জীব।',
  'sp-ciona-intestinalis': 'সামুদ্রিক কাঠামোর প্রধান বায়োফাউলিং জীব এবং মেরুদণ্ডী প্রাণীদের জিনতাত্ত্বিক উৎপত্তি গবেষণার শীর্ষ মডেল।',
  'sp-chimaera-monstrosa': 'মহাদেশীয় ঢাল ও গভীর সমুদ্র তলদেশীয় বাস্তুতন্ত্রের উচ্চ স্তরের ট্রফিক শিকারি।',
  'sp-heterodontus-portusjacksoni': 'পাথুরে প্রবাল প্রাচীরের কি-স্টোন বেন্থিক শিকারি; অতিরিক্ত সাগর আর্চিন দমন করে প্রাচীর রক্ষা করে।',
  'sp-squatina-squatina': 'উপকূলীয় বালুময় অগভীর সাগরের তলদেশীয় ওত পেতে থাকা শীর্ষ শিকারি হাঙ্গর।',
  'sp-squalus-acanthias': 'উপকূলীয় পেলাজিক ও বেন্থিক খাদ্যশৃঙ্খলের অন্যতম প্রাচুর্যময় মধ্যবর্তী মেসোপেলাজিক শিকারি।',
  'sp-torpedo-marmorata': 'উপকূলীয় মহাদেশীয় তাকে বিদ্যুৎঘাতী অতর্কিত শিকারি; তলদেশীয় মাছের ভারসাম্য নিয়ন্ত্রণ করে।',
  'sp-raja-clavata': 'ইউরোপীয় মহাদেশীয় তাকে ক্রাস্টাশিয়ান ও ছোট মাছের জনসংখ্যা নিয়ন্ত্রণকারী প্রধান তলদেশীয় শিকারি রে।',
  'sp-rhina-ancylostoma': 'ইন্দো-প্রশান্ত মহাসাগর ও বঙ্গোপসাগরের প্রবাল প্রাচীরের শীর্ষ তলদেশীয় অমেরুদণ্ডী খাদক ও শীর্ষ শিকারি।',
  'sp-elops-machnata': 'উপকূলীয় সক্রিয় পেলাজিক শিকারি মাছ; মোহনার খাদ্যমাছকে উপকূলীয় বৃহৎ শিকারি মাছের সাথে যুক্ত করে।',
  'sp-periophthalmodon-schlosseri': 'সুন্দরবন ও ক্রান্তীয় ইন্দো-প্রশান্ত মহাসাগরের কর্দমাক্ত চরের কি-স্টোন খাদক; ফিডলার কাঁকড়ার সংখ্যা নিয়ন্ত্রণ করে।',
  'sp-aptenodytes-forsteri': 'দক্ষিণ মহাসাগরের মেরু সামুদ্রিক খাদ্যজালের অন্যতম প্রধান শীর্ষ শিকারি জলচর পাখি।',
  'sp-catla-catla': 'বাংলাদেশের নদী বাস্তুতন্ত্রের পৃষ্ঠীয় স্তরের জুপ্ল্যাঙ্কটন ও ফাইটোপ্ল্যাঙ্কটন নিয়ন্ত্রণকারী প্রধান কার্প মাছ।',
  'sp-cirrhinus-mrigala': 'নদীর তলদেশের গুরুত্বপূর্ণ ডেট্রিটিভর; পলি থেকে জৈব পুষ্টি পুনর্ব্যবহার করে উচ্চ স্তরে স্থানান্তর করে।',
  'sp-channa-striata': 'বাংলাদেশের জলাভূমি ও প্লাবনভূমির শীর্ষ মিঠাপানির শিকারি; ছোট মাছ ও উভচরের ভারসাম্য রক্ষা করে।',
  'sp-wallago-attu': 'বৃহৎ নদী ও বিলের মাছের সম্প্রদায়ের ভারসাম্য নিয়ন্ত্রণকারী অবিসংবাদিত শীর্ষ শিকারি বাঘাইড়/বোয়াল।',
  'sp-chitala-chitala': 'হাওর ও বিল বাস্তুতন্ত্রের গুরুত্বপূর্ণ মধ্যপানির মাংসাশী শিকারি প্রজাতি।',
  'sp-lates-calcarifer': 'বাংলাদেশের ম্যানগ্রোভ ও মোহনাজ ব-দ্বীপের শীর্ষ শিকারি; উপকূলীয় শিকার মাছের বিস্তার নিয়ন্ত্রণ করে।',
  'sp-scylla-serrata': 'ম্যানগ্রোভ মাটির জৈব প্রকৌশলী; গর্ত খুঁড়ে ম্যানগ্রোভ মাটিতে বাতাস চলাচলে সাহায্য করে ও জৈব পদার্থ বিশ্লিষ্ট করে।',
  'sp-latimeria-chalumnae': 'গভীর মহাদেশীয় ঢালের গুহা বাস্তুতন্ত্রের নিশাচর শীর্ষ শিকারি জীবন্ত জীবাশ্ম।',
  'sp-protopterus-annectens': 'আফ্রিকার ক্ষণস্থায়ী জলাভূমি ও প্লাবনভূমির তলদেশীয় অমেরুদণ্ডী শিকারি ও ট্রফিক নিয়ন্ত্রক।',
  'sp-carcharodon-carcharias': 'মহাসাগরের সামুদ্রিক স্তন্যপায়ী ও বৃহৎ পেলাজিক মাছের অবিসংবাদিত প্রধান কি-স্টোন শীর্ষ শিকারি (Apex predator)।',
  'sp-galeocerdo-cuvier': 'উপকূলীয় সামুদ্রিক বাস্তুতন্ত্রের শীর্ষ শিকারি; সমুদ্রের ট্রফিক ক্যাসকেড ভারসাম্য অক্ষুণ্ণ রাখে।',
  'sp-mobula-birostris': 'উন্মুক্ত মহাসাগরের কি-স্টোন পরিশ্রাবক বিশালাকার তৃণভোজী; জুপ্ল্যাঙ্কটন বায়োমাস সাগরের খাদ্যজালে যুক্ত করে।',
  'sp-petromyzon-marinus': 'আদিম বিবর্তনীয় ধারার জীব; আদি মেরুদণ্ডী প্রাণীদের উৎপত্তি ও বিকাশ গবেষণার অমূল্য উৎস।',
  'sp-myxine-glutinosa': 'গভীর সমুদ্র তলদেশের প্রধান প্রাকৃতিক পুনর্ব্যবহারকারী; সাগরে নিমজ্জিত মৃতদেহের পুষ্টি দ্রুত বিচ্ছুরিত করে।',
  'sp-caranx-ignobilis': 'প্রবাল প্রাচীরের শীর্ষ শিকারি; মাংসাশী শিকারি মাছের অতিরিক্ত বিস্তার রোধ করে রিফের বৈচিত্র্য রক্ষা করে।',
  'sp-exocoetus-volitans': 'ক্রান্তীয় উন্মুক্ত মহাসাগরের খাদ্যশৃঙ্খলের অত্যন্ত গুরুত্বপূর্ণ মধ্যবর্তী সংযোগ; টুনা, বিলফিশ ও সামুদ্রিক পাখির প্রধান খাদ্য।',
  'sp-penaeus-monodon': 'উপকূলীয় ও মোহনাজ খাদ্যজালের প্রধান তলদেশীয় খাদক এবং শিকারি মাছ ও উপকূলীয় পাখির প্রধান খাদ্য উৎস।',
  'sp-hirudinaria-granulosa': 'রক্তভুক বহিঃপরজীবী এবং ঐতিহ্যবাহী চিকিৎসাবিজ্ঞান ও শিক্ষামূলক গবেষণার গুরুত্বপূর্ণ মডেল জীব।'
};

const SEASONAL_BN = {
  'sp-fejervarya-limnocharis': 'বর্ষা মৌসুমে (মে থেকে অক্টোবর) ভারী বৃষ্টির পর অবিরাম উচ্চস্বরে ডাকে।',
  'sp-polypedates-teraiensis': 'বর্ষার বৃষ্টিতে (জুন-সেপ্টেম্বর) গ্রামীণ পুকুরের ওপর ঝুঁকে থাকা গাছের পাতায় বিশিষ্ট সাদা ফেনার বাসা তৈরি করে।',
  'sp-varanus-bengalensis': 'দিবাচর; শীতকালে ও প্রাক-বর্ষার সকালে গাছের গুঁড়ি, কাদার পাড় এবং উইপোকার ঢিবির ওপর রোদ পোহায়।',
  'sp-calotes-versicolor': 'সারাবছর সক্রিয়; বসন্ত ও বর্ষার প্রজনন মৌসুমে (মার্চ থেকে আগস্ট) পুরুষরা প্রবলভাবে লাল মাথার রঙ প্রদর্শন করে।',
  'sp-hemidactylus-frenatus': 'সারাবছর ঘরের ভেতরে সক্রিয়; আর্দ্র উষ্ণ মৌসুমে কৃত্রিম বৈদ্যুতিক আলোর কাছে অধিক সক্রিয় থাকে।',
  'sp-fowlea-piscator': 'বর্ষার প্লাবনে প্রচুর সংখ্যায় দৃশ্যমান; মাছের পুকুর ও কৃষি নালায় প্রায়শই প্রবেশ করে।',
  'sp-bungarus-fasciatus': 'নিশাচর; দিনে খুব কমই দেখা যায়, বর্ষার রাতে জলপথ ও ইঁদুরের গর্তে সক্রিয়ভাবে শিকার খোঁজে।',
  'sp-pila-globosa': 'বর্ষাকালে অত্যন্ত সক্রিয়; শুষ্ক শীত ও গ্রীষ্মের মাসগুলোতে পানিশূন্যতা এড়াতে কাদার গভীরে সুপ্তাবস্থায় (এস্টিভেশন) থাকে।',
  'sp-lamellidens-marginalis': 'তীব্র গ্রীষ্মের খরায় শুকিয়ে যাওয়া এড়াতে তলদেশীয় পলি ও কাদার গভীরে গর্ত করে অবস্থান নেয়।'
};

// Standard dictionary of geographic regions in Bangladesh
const REGION_MAP = {
  'Abundant resident across all 64 districts of Bangladesh': 'বাংলাদেশের সকল ৬৪ জেলায় অত্যন্ত সাধারণ আবাসিক',
  'Abundantly resident across all 64 districts of Bangladesh': 'বাংলাদেশের সকল ৬৪ জেলায় অত্যন্ত সাধারণ আবাসিক',
  'All Divisions': 'সারাদেশে সকল বিভাগে বিস্তৃত',
  'All districts across Bangladesh': 'বাংলাদেশের সকল জেলায় বিস্তৃত',
  'All divisions across Bangladesh': 'বাংলাদেশের সকল বিভাগে বিস্তৃত',
  'Bagerhat': 'বাগেরহাট',
  'Baleshwar River': 'বলেশ্বর নদী',
  'Barisal': 'বরিশাল',
  'Barisal Division': 'বরিশাল বিভাগ',
  'Bay of Bengal': 'বঙ্গোপসাগর',
  'Bay of Bengal Coastal Zone': 'উপকূলীয় বঙ্গোপসাগর অঞ্চল',
  'Bay of Bengal Coastal Zone (Swatch of No Ground proximity)': 'বঙ্গোপসাগর উপকূলীয় অঞ্চল (সোয়াচ অব নো গ্রাউন্ড সংলগ্ন)',
  'Bay of Bengal coral patches': 'বঙ্গোপসাগরের প্রবাল এলাকা',
  'Bay of Bengal offshore waters': 'বঙ্গোপসাগরের গভীর জলভাগ',
  'Bay of Bengal outer neritic shelf': 'বঙ্গোপসাগরের বহিঃস্থ নেরিটিক তাক',
  'Bay of Bengal: Saint Martin Island coral shelves': 'বঙ্গোপসাগর: সেন্ট মার্টিন দ্বীপের প্রবাল তাক',
  'Bay of Bengal: Swatch of No Ground Marine Protected Area': 'বঙ্গোপসাগর: সোয়াচ অব নো গ্রাউন্ড সামুদ্রিক সংরক্ষিত এলাকা',
  'Bay of Bengal: Swatch of No Ground submarine canyon': 'বঙ্গোপসাগর: সোয়াচ অব নো গ্রাউন্ড গভীর খাত',
  'Bay of Bengal: open pelagic offshore waters and deep canyon areas': 'বঙ্গোপসাগরের উন্মুক্ত পেলাজিক ও গভীর খাত অঞ্চল',
  'Bogra': 'বগুড়া',
  'Brahmaputra floodplains': 'ব্রহ্মপুত্র প্লাবনভূমি',
  'Brahmaputra tributary systems': 'ব্রহ্মপুত্র উপনদী অববাহিকা',
  'Buriganga River': 'বুড়িগঙ্গা নদী',
  'Chakaria Sundarbans': 'চকরিয়া সুন্দরবন',
  'Chalan Beel': 'চলনবিল',
  'Chandpur': 'চাঁদপুর',
  'Chattogram': 'চট্টগ্রাম',
  'Chera Dwip': 'চেরাদ্বীপ',
  'Chera Dwip reef': 'চেরাদ্বীপ প্রবাল প্রাচীর',
  'Chittagong': 'চট্টগ্রাম',
  'Chittagong Hill Tracts': 'পার্বত্য চট্টগ্রাম',
  'Chittagong Hill Tracts streams': 'পার্বত্য চট্টগ্রামের পাহাড়ি ঝর্ণা ও ছড়া',
  'Chittagong coast': 'চট্টগ্রাম উপকূল',
  'Chittagong coastal shelf': 'চট্টগ্রাম উপকূলীয় তাক',
  'Chittagong estuaries': 'চট্টগ্রাম মোহনাঞ্চল',
  'Chittagong hill tract streams': 'পার্বত্য চট্টগ্রামের পাহাড়ি প্রবাহ',
  'Chittagong lowlands': 'চট্টগ্রামের নিম্নাঞ্চল',
  'Coastal Bay of Bengal': 'উপকূলীয় বঙ্গোপসাগর',
  "Cox's Bazar": 'কক্সবাজার',
  "Cox's Bazar (Teknaf)": 'কক্সবাজার (টেকনাফ)',
  "Cox's Bazar - Teknaf peninsula beach": 'কক্সবাজার - টেকনাফ সৈকত',
  "Cox's Bazar / Inani beach": 'কক্সবাজার / ইনানী সৈকত',
  "Cox's Bazar coastal estuary": 'কক্সবাজার উপকূলীয় মোহনা',
  "Cox's Bazar coastal waters": 'কক্সবাজার উপকূলীয় জলভাগ',
  "Cox's Bazar continental shelf": 'কক্সবাজার মহাদেশীয় তাক',
  "Cox's Bazar deep shelf": 'কক্সবাজার গভীর মহাদেশীয় তাক',
  "Cox's Bazar estuarine canals": 'কক্সবাজার মোহনা খাল',
  "Cox's Bazar rocky coast": 'কক্সবাজার পাথুরে তটরেখা',
  'Cox’s Bazar offshore reefs': 'কক্সবাজার দূরবর্তী প্রবাল প্রাচীর',
  'Dhaka': 'ঢাকা',
  'Dhaka District floodplains': 'ঢাকা জেলা প্লাবনভূমি',
  'Dhaka Division': 'ঢাকা বিভাগ',
  'Dhaka Division lowlands': 'ঢাকা বিভাগের নিম্নাঞ্চল',
  'Dhaka region': 'ঢাকা অঞ্চল',
  'Dhaka region wetlands': 'ঢাকা অঞ্চলের জলাভূমি',
  'Dhaka urban canals and fish hatchery culture facilities': 'ঢাকার খাল ও হ্যাচারি এলাকা',
  'Dublar Char': 'দুবলার চর',
  'Faridpur': 'ফরিদপুর',
  'Freshwater ponds, beels, and canals across all divisions': 'সারাদেশের মিঠাপানির পুকুর, বিল ও খাল',
  'Halda River': 'হালদা নদী',
  'Haor Basin': 'হাওর অববাহিকা',
  'Inani beach': 'ইনানী সৈকত',
  'Jamuna River': 'যমুনা নদী',
  'Jessore District': 'যশোর জেলা',
  'Kaptai Lake': 'কাপ্তাই হ্রদ',
  'Karnaphuli Estuary': 'কর্ণফুলী মোহনা',
  'Karnaphuli River': 'কর্ণফুলী নদী',
  'Karnaphuli River estuary': 'কর্ণফুলী নদী মোহনা',
  'Karnaphuli River outer bar': 'কর্ণফুলী নদীর বহিঃস্থ মোহনা চর',
  'Khulna': 'খুলনা',
  'Khulna Division': 'খুলনা বিভাগ',
  'Kuakata': 'কুয়াকাটা',
  'Lower Brahmaputra': 'নিম্ন ব্রহ্মপুত্র',
  'Lower Meghna Basin': 'নিম্ন মেঘনা অববাহিকা',
  'Meghna Basin': 'মেঘনা অববাহিকা',
  'Meghna Estuary delta': 'মেঘনা মোহনা ব-দ্বীপ',
  'Meghna River': 'মেঘনা নদী',
  'Meghna River & Lower Estuary': 'মেঘনা নদী ও নিম্ন মোহনা',
  'Meghna floodplains': 'মেঘনা প্লাবনভূমি',
  'Meghna lower estuary': 'মেঘনা নিম্ন মোহনা',
  'Moheshkhali': 'মহেশখালী',
  'Moulvibazar': 'মৌলভীবাজার',
  'Mymensingh': 'ময়মনসিংহ',
  'Mymensingh (Garo Hills)': 'ময়মনসিংহ (গারো পাহাড় অঞ্চল)',
  'Mymensingh District': 'ময়মনসিংহ জেলা',
  'Mymensingh floodplains': 'ময়মনসিংহ প্লাবনভূমি',
  'Nationwide': 'সারাদেশে বিস্তৃত',
  'Nationwide distribution': 'সারাদেশে বিস্তৃত',
  'Nationwide distribution in all major river basins': 'সারাদেশের সকল প্রধান নদী অববাহিকায় বিস্তৃত',
  'Nationwide freshwater habitats': 'সারাদেশের মিঠাপানির আবাসস্থল',
  'Nationwide — ubiquitous in lowland freshwater systems': 'সারাদেশে — নিম্নাঞ্চলের মিঠাপানির জলাশয়ে সর্বত্র বিদ্যমান',
  'Northern Bay of Bengal continental shelf': 'উত্তর বঙ্গোপসাগর মহাদেশীয় তাক',
  'Northern Bay of Bengal oceanic waters': 'উত্তর বঙ্গোপসাগরের জলভাগ',
  'Northern riverine tributaries': 'উত্তরাঞ্চলের নদী অববাহিকা',
  "Outer shelf off Saint Martin's Island": 'সেন্ট মার্টিন দ্বীপের বহিঃস্থ তাক',
  'Pabna': 'পাবনা',
  'Padma River': 'পদ্মা নদী',
  'Padma-Meghna lowlands': 'পদ্মা-মেঘনা নিম্নাঞ্চল',
  'Patuakhali': 'পটুয়াখালী',
  'Patuakhali coastal waters': 'পটুয়াখালী উপকূলীয় জলভাগ',
  'Peshwar River estuary': 'পশুর নদী মোহনা',
  'Posshur River': 'পশুর নদী',
  'Rajshahi': 'রাজশাহী',
  'Rajshahi Division': 'রাজশাহী বিভাগ',
  'Rangpur': 'রংপুর',
  'Rupsha River': 'রূপসা নদী',
  'Saint Martin Island': 'সেন্ট মার্টিন দ্বীপ',
  "Saint Martin's Island": 'সেন্ট মার্টিন দ্বীপ',
  "Saint Martin's Island coral reef": 'সেন্ট মার্টিন দ্বীপের প্রবাল প্রাচীর',
  "Saint Martin's Island reefs": 'সেন্ট মার্টিন প্রবাল প্রাচীর',
  'Sandwip': 'সন্দ্বীপ',
  'Satkhira': 'সাতক্ষীরা',
  'Shitalakshya River': 'শীতলক্ষ্যা নদী',
  'Sonadia Island': 'সোনাদিয়া দ্বীপ',
  'South-western coastal waters': 'দক্ষিণ-পশ্চিম উপকূলীয় জলভাগ',
  'Sundarbans': 'সুন্দরবন',
  'Sundarbans Mangrove Forest': 'সুন্দরবন ম্যানগ্রোভ বন',
  'Sundarbans Mangroves': 'সুন্দরবন ম্যানগ্রোভ',
  'Sundarbans estuarine canals': 'সুন্দরবনের মোহনা ও খাল',
  'Sundarbans mangrove waterways': 'সুন্দরবনের জলপথ ও নদীনালা',
  'Surma River': 'সুরমা নদী',
  'Swatch of No Ground': 'সোয়াচ অব নো গ্রাউন্ড',
  'Sylhet': 'সিলেট',
  'Sylhet Division': 'সিলেট বিভাগ',
  'Sylhet haor basin': 'সিলেট হাওর অববাহিকা',
  'Tangail': 'টাঙ্গাইল',
  'Teknaf': 'টেকনাফ',
  'Tetulia River': 'তেঁতুলিয়া নদী',
  'Turag River': 'তুরাগ নদী',
  'Tanguar Haor': 'টাঙ্গুয়ার হাওর',
  'Hakoluki Haor': 'হাকালুকি হাওর',
  'Lawachara National Park': 'লাউয়াছড়া জাতীয় উদ্যান',
  'Bhawal National Park': 'ভাওয়াল জাতীয় উদ্যান',
  'Modhupur Tract': 'মধুপুর গড়',
  'Sundarbans Reserved Forest': 'সুন্দরবন সংরক্ষিত বন'
};

function translateRegion(eng) {
  if (REGION_MAP[eng]) return REGION_MAP[eng];
  // Simple heuristic cleanup for generic patterns
  if (eng.includes('Sundarbans')) return 'সুন্দরবন ম্যানগ্রোভ অঞ্চল';
  if (eng.includes('Saint Martin')) return 'সেন্ট মার্টিন দ্বীপ ও সংলগ্ন প্রবাল প্রাচীর';
  if (eng.includes('Bay of Bengal')) return 'বঙ্গোপসাগর ও উপকূলীয় অঞ্চল';
  if (eng.includes('Chittagong')) return 'চট্টগ্রাম ও পাহাড়ি অঞ্চল';
  if (eng.includes('Sylhet')) return 'সিলেট ও হাওর অঞ্চল';
  if (eng.includes('Padma')) return 'পদ্মা নদী অববাহিকা';
  if (eng.includes('Meghna')) return 'মেঘনা নদী ও মোহনা';
  if (eng.includes('Cox')) return 'কক্সবাজার উপকূলীয় এলাকা';
  if (eng.includes('freshwater') || eng.includes('Freshwater')) return 'সারাদেশের মিঠাপানির জলাশয়';
  if (eng.includes('All districts') || eng.includes('Nationwide')) return 'সারাদেশে বিস্তৃত';
  return eng;
}

function enrichRemaining() {
  const content = fs.readFileSync(SEED_FILE, 'utf8');
  const startIdx = content.indexOf('= [') + 2;
  const endIdx = content.lastIndexOf(']');
  const prefix = content.slice(0, startIdx);
  const suffix = content.slice(endIdx + 1);
  const jsonStr = content.slice(startIdx, endIdx + 1);

  const speciesList = JSON.parse(jsonStr);
  console.log(`Read ${speciesList.length} species records for remaining enrichment.`);

  let behCount = 0;
  let reproCount = 0;
  let roleCount = 0;
  let seasonCount = 0;
  let regCount = 0;

  for (const sp of speciesList) {
    if (!sp.ecology) sp.ecology = {};
    if (!sp.bangladeshOccurrence) sp.bangladeshOccurrence = { present: false, regions: [], habitatTypes: [], residencyStatus: 'native' };

    // Behavior
    if (BEHAVIOR_BN[sp.id] && !sp.ecology.behaviorBn) {
      sp.ecology.behaviorBn = BEHAVIOR_BN[sp.id];
      behCount++;
    }

    // Reproduction
    if (REPRODUCTION_BN[sp.id] && !sp.ecology.reproductionBn) {
      sp.ecology.reproductionBn = REPRODUCTION_BN[sp.id];
      reproCount++;
    }

    // Ecological role
    if (ROLE_BN[sp.id] && !sp.ecology.ecologicalRoleBn) {
      sp.ecology.ecologicalRoleBn = ROLE_BN[sp.id];
      roleCount++;
    }

    // Seasonal notes
    if (SEASONAL_BN[sp.id] && !sp.bangladeshOccurrence.seasonalNotesBn) {
      sp.bangladeshOccurrence.seasonalNotesBn = SEASONAL_BN[sp.id];
      seasonCount++;
    }

    // Bangladesh Regions
    if (sp.bangladeshOccurrence.regions && sp.bangladeshOccurrence.regions.length > 0) {
      if (!sp.bangladeshOccurrence.regionsBn || sp.bangladeshOccurrence.regionsBn.length === 0) {
        sp.bangladeshOccurrence.regionsBn = sp.bangladeshOccurrence.regions.map(r => translateRegion(r));
        regCount++;
      }
    }
  }

  console.log(`Enriched Behavior: ${behCount}`);
  console.log(`Enriched Reproduction: ${reproCount}`);
  console.log(`Enriched Ecological Role: ${roleCount}`);
  console.log(`Enriched Seasonal Notes: ${seasonCount}`);
  console.log(`Enriched Regions: ${regCount}`);

  const updatedJson = JSON.stringify(speciesList, null, 2);
  const updatedContent = prefix + updatedJson + suffix;

  fs.writeFileSync(SEED_FILE, updatedContent, 'utf8');
  console.log('Successfully wrote enriched content to seedSpecies.ts!');
}

enrichRemaining();
