// BiotaElite 2.0 Zoological Classification & Knowledge Hub Page
// MASTER-FIX-11: Core Zoological Classification, Biology-Specific Sections, and Route Resolution
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useLanguage } from '../../context/LanguageContext';
import { TaxonomyTree } from '../../components/taxonomy/TaxonomyTree';
import { TaxonKnowledgeDetail } from '../../components/knowledge/TaxonKnowledgeDetail';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { BackButton } from '../../components/common/BackButton';
import {
  Layers,
  BookOpen,
  ArrowRight,
  Info,
  CheckCircle2,
  Fish,
  ShieldAlert,
  Globe,
  MapPin,
} from 'lucide-react';

interface MajorGroupDefinition {
  id: string;
  slug: string;
  scientificName: string;
  authority?: string;
  englishName: string;
  bengaliName: string;
  rank: string;
  diagnosticBiology: {
    en: string;
    bn: string;
  };
  linkRoute?: string;
  iconType: 'invertebrate' | 'fish' | 'vertebrate';
}

const MAJOR_GROUPS: MajorGroupDefinition[] = [
  {
    id: 'phylum-porifera',
    slug: 'porifera',
    scientificName: 'Porifera',
    authority: 'Grant, 1836',
    englishName: 'Sponges',
    bengaliName: 'ছিদ্রাল প্রাণী / স্পঞ্জ',
    rank: 'phylum',
    diagnosticBiology: {
      en: 'Parazoa, cellular grade of organization; aquiferous canal system (asconoid, syconoid, leuconoid) driven by flagellated choanocytes (collar cells); internal skeletal framework of siliceous or calcitic spicules and spongin protein fibers.',
      bn: 'প্যারাজোয়া বা কোষীয় মাত্রার প্রাণী; ফ্লাজেলাযুক্ত কোয়ানোসাইট কোষ দ্বারা পরিচালিত জল সংবহন নালীতন্ত্র (অ্যাসকন, সাইকন, লিউকন); সিলিকাময় বা চুনময় স্পিকিউল ও স্পঞ্জিন তন্তু দ্বারা গঠিত অভ্যন্তরীণ কঙ্কাল।',
    },
    iconType: 'invertebrate',
  },
  {
    id: 'phylum-cnidaria',
    slug: 'cnidaria',
    scientificName: 'Cnidaria',
    authority: 'Hatschek, 1888',
    englishName: 'Cnidarians (Jellyfish, Corals, Hydroids)',
    bengaliName: 'নিডারিয়া (জেলিফিশ, প্রবাল, সি অ্যানিমোন)',
    rank: 'phylum',
    diagnosticBiology: {
      en: 'Diploblastic eumetazoans with primary radial symmetry; diagnostic cnidocytes containing eversible stinging nematocysts; central gastrovascular coelenteron cavity; dimorphic metagenesis alternating between sessile polyps and free-swimming medusae.',
      bn: 'দ্বিস্তরী ইউমেটাজোয়া ও অরীয় প্রতিসম প্রাণী; আত্মরক্ষা ও শিকারের জন্য নেমাটোসিস্ট সমৃদ্ধ বিশেষায়িত নিডোসাইট কোষ; কেন্দ্রীয় গ্যাস্ট্রোভাস্কুলার সিলেন্টেরন গহ্বর; স্থানু পলিপ ও সন্তরণশীল মেডুসার জনুক্রম (মেটাজেনেসিস)।',
    },
    iconType: 'invertebrate',
  },
  {
    id: 'phylum-ctenophora',
    slug: 'ctenophora',
    scientificName: 'Ctenophora',
    authority: 'Eschscholtz, 1829',
    englishName: 'Comb Jellies',
    bengaliName: 'টিনোফোরা (চিরুনি জেলি)',
    rank: 'phylum',
    diagnosticBiology: {
      en: 'Biradially symmetrical marine organisms propelled by eight meridional comb rows of fused macrocilia (ctenes); adhesive non-stinging colloblast cells on tentacles for prey capture; aboral sensory statolith organ; widespread bioluminescence.',
      bn: 'দ্বি-অরীয় প্রতিসম সামুদ্রিক প্রাণী; আটটি অনুদৈর্ঘ্য চিরুনির ন্যায় রোমশ সিলিয়ারি কম্ব-প্লেট দ্বারা সন্তরণশীল; শিকার আটকে রাখার আঠালো কলোব্লাস্ট কোষ; অ্যাবোরাল সংবেদী স্ট্যাটোসিস্ট অঙ্গ এবং উজ্জ্বল জৈবদ্যুতি।',
    },
    iconType: 'invertebrate',
  },
  {
    id: 'phylum-annelida-marine',
    slug: 'annelida',
    scientificName: 'Annelida',
    authority: 'Lamarck, 1809',
    englishName: 'Segmented Worms',
    bengaliName: 'অঙ্গুরীমাল / বলয়ী প্রাণী',
    rank: 'phylum',
    diagnosticBiology: {
      en: 'True homologous metamerism with repeated coelomic compartments; hydrostatic skeletal locomotion supported by chitinous chaetae; marine polychaetes with vascularized parapodia; closed blood vascular system; paired metanephridia per segment.',
      bn: 'প্রকৃত খণ্ডকায়ন (মেটামেরিজম) ও হাইড্রোস্ট্যাটিক সিলোমিক গহ্বর; কাইটিনময় কিটি/সিটা দ্বারা চলন; সামুদ্রিক পলিকিটে সংবহনসমৃদ্ধ প্যারাপোডিয়া; বদ্ধ রক্তসংবহনতন্ত্র এবং প্রতি খণ্ডে মেটানেফ্রিডিয়া রেচনতন্ত্র।',
    },
    iconType: 'invertebrate',
  },
  {
    id: 'phylum-mollusca',
    slug: 'mollusca',
    scientificName: 'Mollusca',
    authority: 'Linnaeus, 1758',
    englishName: 'Molluscs (Snails, Bivalves, Cephalopods)',
    bengaliName: 'কম্বোজ প্রাণী (শামুক, ঝিনুক, অক্টোপাস)',
    rank: 'phylum',
    diagnosticBiology: {
      en: 'Unsegmented coelomates with tripartite body plan: muscular foot, visceral mass, and glandular mantle (pallium) secreting calcified shells; chitinous radula ribbon of teeth for grazing; bipectinate ctenidial gills operating with countercurrent oxygen exchange.',
      bn: 'অখণ্ডায়িত সিলোমেট প্রাণী যার দেহ পেশল পদ, ভিসারাল মাস এবং খোলক ক্ষরণকারী ম্যান্টল পর্দায় বিভক্ত; খাবার চর্বণের জন্য কাইটিনময় র‍্যাडुলা বা করাত জিহ্বা; বিপরীতমুখী গ্যাসীয় বিনিময় সম্পন্ন টেনিডিয়া ফুলকা।',
    },
    iconType: 'invertebrate',
  },
  {
    id: 'phylum-arthropoda-marine',
    slug: 'arthropoda',
    scientificName: 'Arthropoda',
    authority: 'von Siebold, 1848',
    englishName: 'Arthropods (Crabs, Shrimps, Insects, Arachnids)',
    bengaliName: 'সন্ধিপদী প্রাণী (চিংড়ি, কাঁকড়া, কীট-পতঙ্গ)',
    rank: 'phylum',
    diagnosticBiology: {
      en: 'Multi-layered chitinous cuticular exoskeleton hardened by sclerotization or calcium mineralization; episodic ecdysis molt cycles regulated by ecdysteroids; tagmatization into functional tagmata; paired articulate jointed appendages; open hemocoelic circulation.',
      bn: 'কাইটিন ও প্রোটিন নির্মিত শক্ত কিউটিকলীয় বহিঃকঙ্কাল যা একডাইসিস প্রক্রিয়ায় নির্মোচন হয়; সুস্পষ্ট উপাঙ্গে বিভক্ত দেহ (ট্যাগমাটাইজেশন); সন্ধিযুক্ত জোড় উপাঙ্গ; মুক্ত রক্তসংবহনযুক্ত হিমোসিল গহ্বর এবং পুঞ্জাক্ষি।',
    },
    iconType: 'invertebrate',
  },
  {
    id: 'phylum-echinodermata',
    slug: 'echinodermata',
    scientificName: 'Echinodermata',
    authority: 'Bruguière, 1791',
    englishName: 'Echinoderms (Starfish, Sea Urchins, Sea Cucumbers)',
    bengaliName: 'কন্টকত্বকী প্রাণী (তারা মাছ, সমুদ্র শসা)',
    rank: 'phylum',
    diagnosticBiology: {
      en: 'Deuterostomes exhibiting secondary pentaradial symmetry; mesodermally derived calcitic stereom endoskeleton with spines and pedicellariae; hydraulic water vascular system (ambulacral system) with sieve madreporite, canals, ampullae, and contractile tube feet (podia).',
      bn: 'দ্বিতীয় পর্যায়ের পঞ্চ-অরীয় প্রতিসম ডিউটেরোস্টোম প্রাণী; মেসোডার্মোদ্ভূত ক্যালসিয়াম কার্বনেটের স্টেরিওম কাঁটাযুক্ত অন্তঃকঙ্কাল; ম্যাড্রেপোরাইট, অ্যাম্বুলাক্রাল নালী ও পডিয়া (নালিকা পদ) সমন্বিত জল সংবহনতন্ত্র।',
    },
    iconType: 'invertebrate',
  },
  {
    id: 'phylum-chordata-marine',
    slug: 'chordata',
    scientificName: 'Chordata',
    authority: 'Haeckel, 1874',
    englishName: 'Chordates (Tunicates, Lancelets, Vertebrates)',
    bengaliName: 'কর্ডাটা (মেরুদণ্ডী ও আদি কর্ডেট)',
    rank: 'phylum',
    diagnosticBiology: {
      en: 'Possess at some life cycle stage the five primary chordate hallmarks: supportive axial notochord, dorsal single hollow nerve cord, pharyngeal gill slits/pouches, iodinated endostyle / thyroid gland homolog, and post-anal muscular propulsive tail.',
      bn: 'জীবনের যেকোনো দশায় কর্ডাটার পাঁচটি মৌলিক বৈশিষ্ট্য বিদ্যমান: স্থিতিস্থাপক নটোকর্ড, পৃষ্ঠীয় ফাঁপা স্নায়ুরজ্জু, গলবিলীয় ফুলকা রন্ধ্র, আয়োডিন শোষণকারী এন্ডোস্টাইল (থাইরয়েড হোমোলগ) এবং পায়ু-পশ্চাৎ পেশল লেজ।',
    },
    iconType: 'vertebrate',
  },
  {
    id: 'group-fishes',
    slug: 'fishes',
    scientificName: 'Fishes (Agnatha · Chondrichthyes · Osteichthyes)',
    authority: 'Traditional Pisces Grade',
    englishName: 'Fishes (Jawless, Cartilaginous & Bony Fishes)',
    bengaliName: 'মৎস্যকুল (চোয়ালবিহীন, তরুণাস্থিময় ও অস্থিময় মাছ)',
    rank: 'superclass / classes',
    diagnosticBiology: {
      en: 'Primary aquatic vertebrates adapted for swimming and gill respiration; includes jawless Cyclostomi, cartilaginous Chondrichthyes with placoid denticles and urea osmoregulation, and bony Osteichthyes with opercular gills, swim bladder buoyancy, and lateral line systems.',
      bn: 'ফুলকা ও পাখনাবিশিষ্ট জলজ মেরুদণ্ডী প্রাণী; চোয়ালহীন হ্যাগফিশ ও ল্যাম্প্রে, প্লাকয়েড আঁইশযুক্ত তরুণাস্থিময় হাঙ্গর-শাপলাপাতা, এবং অপারকুলাম ও পটকাযুক্ত অস্থিময় অ্যাক্টিনোপ্টেরিগি মাছের বৈচিত্র্যময় সমাহার।',
    },
    linkRoute: '/fish',
    iconType: 'fish',
  },
  {
    id: 'class-amphibia',
    slug: 'amphibia',
    scientificName: 'Amphibia',
    authority: 'de Blainville, 1816',
    englishName: 'Amphibians (Frogs, Toads, Salamanders, Caecilians)',
    bengaliName: 'উভচর প্রাণী (ব্যাঙ, স্যালামান্ডার)',
    rank: 'class',
    diagnosticBiology: {
      en: 'First tetrapod land vertebrates with anamniote jelly-coated eggs; biphasic life history with aquatic gill-breathing larvae undergoing thyroid-induced metamorphosis into lung/skin-breathing adults; moist glandular vascularized skin; three-chambered heart (2 atria, 1 ventricle).',
      bn: 'প্রথম টেট্রাপড স্থলজ মেরুদণ্ডী প্রাণী; অ্যানঅ্যামনিওটিক জেলিপূর্ণ ডিম্ব; জলজ ফুলকাযুক্ত ব্যাঙাচি রূপান্তরের মাধ্যমে ফুসফুস ও আর্দ্র ত্বকে শ্বাসগ্রহণকারী ডাঙ্গার প্রাণীতে পরিণত হয়; তিন প্রকোষ্ঠবিশিষ্ট হৃৎপিণ্ড।',
    },
    iconType: 'vertebrate',
  },
  {
    id: 'class-reptilia',
    slug: 'reptilia',
    scientificName: 'Reptilia',
    authority: 'Laurenti, 1768',
    englishName: 'Reptiles (Snakes, Lizards, Turtles, Crocodilians)',
    bengaliName: 'সরীসৃপ প্রাণী (সাপ, গিরগিটি, কচ্ছপ, কুমির)',
    rank: 'class',
    diagnosticBiology: {
      en: 'Fully terrestrial amniotes with cleidoic shelled eggs containing four extraembryonic membranes (amnion, chorion, allantois, yolk sac); impermeable integument covered with beta-keratin epidermal scales; uricotelic nitrogen excretion; ectothermic thermal regulation.',
      bn: 'ক্লিডোয়িক খোসাযুক্ত ডিম্ব ও চারটি ভ্রূণীয় পর্দা (অ্যামনিয়ন, কোরিয়ন, অ্যালানটয়েস, কুসুম থলি) বিশিষ্ট প্রকৃত অ্যামনিওট; আর্দ্রতানিরোধক শক্ত কেরাটিন আঁইশযুক্ত ত্বক; ইউরিক অ্যাসিড নির্গমনকারী এবং শীতলরক্তের প্রাণী।',
    },
    iconType: 'vertebrate',
  },
  {
    id: 'class-aves',
    slug: 'aves',
    scientificName: 'Aves',
    authority: 'Linnaeus, 1758',
    englishName: 'Birds',
    bengaliName: 'পাখি / পক্ষীকুল',
    rank: 'class',
    diagnosticBiology: {
      en: 'Endothermic feathered theropod descendants with aerodynamic contour and flight feathers; forelimbs modified into wings; light pneumatized hollow bones with trabecular struts; toothless keratinized rhamphotheca beak; continuous unidirectional air-sac lung ventilation; four-chambered heart.',
      bn: 'উষ্ণরক্তের পালকযুক্ত মেরুদণ্ডী প্রাণী; অগ্রপদ ডানায় রূপান্তরিত; ওড়ার উপযোগী বায়ুথলিযুক্ত ফাঁপা অস্থি (নিউমেটিক বোন); চোয়ালে দাঁতের বদলে কেরাটিনের চঞ্চু; অবিরাম একমুখী বাতাস চলাচলকারী ফুসফুস ও ৪ প্রকোষ্ঠের হৃৎপিণ্ড।',
    },
    iconType: 'vertebrate',
  },
  {
    id: 'class-mammalia',
    slug: 'mammalia',
    scientificName: 'Mammalia',
    authority: 'Linnaeus, 1758',
    englishName: 'Mammals',
    bengaliName: 'স্তন্যপায়ী প্রাণী',
    rank: 'class',
    diagnosticBiology: {
      en: 'Endothermic homeotherms possessing specialized mammary glands for lactation; body covering of alpha-keratin hair/pelage for insulation; three auditory ossicles in middle ear (malleus, incus, stapes); dentary-squamosal lower jaw articulation; muscular thoracic diaphragm; neocortex.',
      bn: 'সন্তানকে দুগ্ধদানের জন্য স্তনগ্রন্থিবিশিষ্ট উষ্ণরক্তের প্রাণী; তাপনিরোধক লোমযুক্ত ত্বক; মধ্যকর্ণে তিনটি ক্ষুদ্র অস্থি (ম্যালিয়াস, ইনকাস, স্টেপিস); দন্তমূলযুক্ত বিশেষায়িত দাঁত; বক্ষ ও উদর পৃথককারী পেশল মধ্যচ্ছদা (ডায়াফ্রাম)।',
    },
    iconType: 'vertebrate',
  },
];

export const TaxonomyPage: React.FC = () => {
  const { taxonSlug, rank } = useParams<{ taxonSlug?: string; rank?: string }>();
  const { taxa, species, taxonKnowledge } = useBiodiversity();
  const { t, language } = useLanguage();

  // Route resolution for parameterized knowledge detail view
  const targetSlug = (taxonSlug || rank)?.toLowerCase();

  const activeKnowledge = targetSlug
    ? taxonKnowledge.find(
        k =>
          (k.canonicalSlug && k.canonicalSlug.toLowerCase() === targetSlug) ||
          k.id.toLowerCase() === targetSlug ||
          (k.taxonId && k.taxonId.toLowerCase() === targetSlug) ||
          k.scientificName.toLowerCase() === targetSlug
      )
    : undefined;

  // Render dedicated knowledge record view if slug matches
  if (targetSlug) {
    if (activeKnowledge) {
      return (
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.25rem',
              flexWrap: 'wrap',
              gap: '0.75rem',
            }}
          >
            <BackButton fallbackPath="/taxonomy" />
            <Breadcrumbs
              items={[
                { label: t('crumb.taxonomy') || 'Taxonomy', to: '/taxonomy' },
                { label: activeKnowledge.scientificName },
              ]}
            />
          </div>

          <TaxonKnowledgeDetail
            record={activeKnowledge}
            category={activeKnowledge.category}
            fallbackPath="/taxonomy"
          />
        </div>
      );
    }

    // Slug provided but no knowledge record found
    return (
      <div style={{ maxWidth: '780px', margin: '2rem auto' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <BackButton fallbackPath="/taxonomy" />
          <Breadcrumbs
            items={[
              { label: t('crumb.taxonomy') || 'Taxonomy', to: '/taxonomy' },
              { label: targetSlug },
            ]}
          />
        </div>

        <div className="card" style={{ padding: '2.5rem', textAlign: 'center', background: 'var(--bg-card)' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'rgba(239, 68, 68, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem',
              color: '#ef4444',
            }}
          >
            <ShieldAlert size={28} />
          </div>

          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem' }}>
            Taxon Profile Not Found
          </h2>

          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
            No dedicated zoological knowledge record was found matching the identifier{' '}
            <code style={{ color: '#c084fc', background: 'rgba(168, 85, 247, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
              {targetSlug}
            </code>
            . You can explore the full Linnaean taxonomy tree or select from the major animal lineages below.
          </p>

          <Link to="/taxonomy" className="btn btn-primary" style={{ gap: '0.5rem' }}>
            <Layers size={16} />
            <span>Return to Zoological Taxonomy Hub</span>
          </Link>
        </div>
      </div>
    );
  }

  // Count helper for group cards
  const getGroupStats = (group: MajorGroupDefinition) => {
    const matchingSpecies = species.filter(s => {
      if (!s.isPublished) return false;
      if (group.id === 'group-fishes') {
        return s.module === 'fish' || ['Actinopterygii', 'Chondrichthyes', 'Sarcopterygii', 'Myxini', 'Petromyzonti'].includes(s.taxonomy.class);
      }
      if (group.rank === 'class') {
        return s.taxonomy.class.toLowerCase() === group.scientificName.toLowerCase();
      }
      if (group.rank === 'phylum') {
        return s.taxonomy.phylum.toLowerCase() === group.scientificName.toLowerCase();
      }
      return false;
    });

    const bdCount = matchingSpecies.filter(s => s.bangladeshOccurrence?.present).length;
    return { total: matchingSpecies.length, bd: bdCount };
  };

  const totalBangladeshOccurrences = species.filter(s => s.isPublished && s.bangladeshOccurrence?.present).length;

  return (
    <div>
      {/* Top Breadcrumb */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1.25rem',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}
      >
        <BackButton fallbackPath="/species" />
        <Breadcrumbs items={[{ label: t('crumb.taxonomy') || 'Taxonomy' }]} />
      </div>

      {/* Hero Header */}
      <div
        className="knowledge-hero taxonomy-theme"
        style={{
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.18) 0%, rgba(15, 23, 42, 0.96) 100%)',
          borderColor: 'rgba(168, 85, 247, 0.35)',
          padding: '2.5rem 2rem',
          borderRadius: 'var(--radius-xl)',
          marginBottom: '2.25rem',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: '#c084fc',
            fontSize: '0.8rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '0.75rem',
            padding: '0.25rem 0.65rem',
            background: 'rgba(168, 85, 247, 0.15)',
            borderRadius: 'var(--radius-full)',
            border: '1px solid rgba(168, 85, 247, 0.3)',
          }}
        >
          <Layers size={14} />
          <span>{t('tax.portalTitle')}</span>
        </div>

        <h1
          style={{
            fontSize: 'clamp(1.9rem, 3.8vw, 2.6rem)',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '0.75rem',
            lineHeight: 1.2,
          }}
        >
          {t('tax.mainHeading')}
        </h1>

        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '1.05rem',
            maxWidth: '860px',
            lineHeight: '1.65',
            marginBottom: '1.5rem',
          }}
        >
          {t('tax.lead')}
        </p>

        {/* Global Zoological Metrics Bar */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            alignItems: 'center',
            paddingTop: '1rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 0.85rem',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(168, 85, 247, 0.12)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              fontSize: '0.82rem',
              color: '#e9d5ff',
            }}
          >
            <BookOpen size={14} style={{ color: '#c084fc' }} />
            <span>
              <strong>{taxonKnowledge.length}</strong> {t('tax.verifiedTaxa') || 'Knowledge Modules'}
            </span>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 0.85rem',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(59, 130, 246, 0.12)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              fontSize: '0.82rem',
              color: '#93c5fd',
            }}
          >
            <Layers size={14} style={{ color: '#60a5fa' }} />
            <span>
              <strong>{taxa.length}</strong> {t('tax.classificationNodes') || 'Classification Nodes'}
            </span>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 0.85rem',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(14, 165, 233, 0.12)',
              border: '1px solid rgba(14, 165, 233, 0.3)',
              fontSize: '0.82rem',
              color: '#bae6fd',
            }}
          >
            <Fish size={14} style={{ color: '#38bdf8' }} />
            <span>
              <strong>73</strong> Fish Orders Treated
            </span>
          </div>

          {/* Primary Global Metric: Curated Global Species */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 0.85rem',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              fontSize: '0.82rem',
              color: '#a7f3d0',
            }}
          >
            <CheckCircle2 size={14} style={{ color: '#34d399' }} />
            <span>
              <strong>{species.length}</strong> {t('tax.curatedGlobalSpecies') || 'Curated Global Species'}
            </span>
          </div>

          {/* Distinct Secondary Regional Context: Bangladesh Records */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 0.85rem',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(59, 130, 246, 0.12)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              fontSize: '0.82rem',
              color: '#93c5fd',
            }}
          >
            <MapPin size={14} style={{ color: '#60a5fa' }} />
            <span>
              <strong>{totalBangladeshOccurrences}</strong> {t('tax.bangladeshRecords') || 'Bangladesh Records'}
            </span>
          </div>
        </div>
      </div>

      {/* Planetary Scope & Curation Notice */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '0.85rem 1.25rem',
          background: 'rgba(59, 130, 246, 0.08)',
          border: '1px solid rgba(59, 130, 246, 0.22)',
          borderRadius: 'var(--radius-md)',
          marginBottom: '2rem',
          fontSize: '0.86rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.55,
        }}
      >
        <Globe size={18} style={{ color: '#60a5fa', flexShrink: 0 }} />
        <span>{t('tax.globalFrameworkNotice')}</span>
      </div>

      {/* Traditional Educational Notice: Protozoa */}
      <div
        className="card"
        style={{
          background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(20, 20, 25, 0.95) 100%)',
          borderColor: 'rgba(245, 158, 11, 0.35)',
          padding: '1.25rem 1.5rem',
          marginBottom: '2.25rem',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', flex: '1 1 500px' }}>
          <div
            style={{
              background: 'rgba(245, 158, 11, 0.18)',
              color: '#fbbf24',
              padding: '0.45rem',
              borderRadius: 'var(--radius-md)',
              marginTop: '0.15rem',
              flexShrink: 0,
            }}
          >
            <Info size={18} />
          </div>

          <div>
            <h2
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: '#fef3c7',
                marginBottom: '0.35rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span>{t('tax.protozoaTitle')}</span>
              <span
                style={{
                  fontSize: '0.65rem',
                  padding: '0.1rem 0.4rem',
                  borderRadius: '3px',
                  background: 'rgba(245, 158, 11, 0.2)',
                  color: '#fbbf24',
                  textTransform: 'uppercase',
                  fontWeight: 800,
                }}
              >
                Curriculum Notice
              </span>
            </h2>

            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: '1.55', margin: 0 }}>
              {t('tax.protozoaNotice')}
            </p>
          </div>
        </div>

        <Link
          to="/taxonomy/protozoa"
          className="btn btn-secondary btn-sm"
          style={{
            borderColor: 'rgba(245, 158, 11, 0.4)',
            color: '#fbbf24',
            gap: '0.4rem',
            fontSize: '0.8rem',
            alignSelf: 'center',
          }}
        >
          <span>{t('tax.exploreGroup') || 'Explore Group'}</span>
          <ArrowRight size={13} />
        </Link>
      </div>

      {/* Major Animal Groups Overview */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>
              {t('tax.majorGroups')}
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Comprehensive zoological treatments of major invertebrate phyla and vertebrate classes with diagnostic biological features.
            </p>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {MAJOR_GROUPS.map(group => {
            const stats = getGroupStats(group);
            const targetUrl = group.linkRoute || `/taxonomy/${group.slug}`;

            return (
              <div
                key={group.id}
                className="card"
                style={{
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border-subtle)',
                  padding: '1.4rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'var(--transition-normal)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div>
                  {/* Top Bar: Rank & Type */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span
                      style={{
                        fontSize: '0.68rem',
                        textTransform: 'uppercase',
                        fontWeight: 800,
                        letterSpacing: '0.05em',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '3px',
                        background:
                          group.rank === 'phylum'
                            ? 'rgba(59, 130, 246, 0.15)'
                            : group.iconType === 'fish'
                            ? 'rgba(16, 185, 129, 0.15)'
                            : 'rgba(168, 85, 247, 0.15)',
                        color:
                          group.rank === 'phylum'
                            ? '#60a5fa'
                            : group.iconType === 'fish'
                            ? '#34d399'
                            : '#c084fc',
                        border: `1px solid ${
                          group.rank === 'phylum'
                            ? 'rgba(59, 130, 246, 0.3)'
                            : group.iconType === 'fish'
                            ? 'rgba(16, 185, 129, 0.3)'
                            : 'rgba(168, 85, 247, 0.3)'
                        }`,
                      }}
                    >
                      {group.rank}
                    </span>

                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: stats.total > 0 ? 600 : 400,
                        color: stats.total > 0 ? 'var(--accent-emerald-light)' : 'var(--text-muted)',
                      }}
                    >
                      {stats.total > 0
                        ? `${stats.total} ${t('tax.globalSpecies') || 'Global Species'}`
                        : (t('tax.noLocalSpeciesCurated') || '0 Curated (Global clade)')}
                    </span>
                  </div>

                  {/* Title & Vernacular */}
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.35rem', display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.4rem' }}>
                    <span style={{ fontStyle: 'italic', fontFamily: "'Open Sans', sans-serif" }}>
                      {group.scientificName}
                    </span>
                    {group.authority && (
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 400, fontStyle: 'normal' }}>
                        {group.authority}
                      </span>
                    )}
                  </h3>

                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                    <span>{language === 'bn' ? group.bengaliName : group.englishName}</span>
                    {language === 'en' && group.bengaliName && (
                      <span className="bangla-text" style={{ color: 'var(--accent-emerald-light)', marginLeft: '0.4rem' }}>
                        • {group.bengaliName}
                      </span>
                    )}
                  </div>

                  {/* Secondary Regional Context Badge */}
                  {stats.bd > 0 && (
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '3px',
                        background: 'rgba(59, 130, 246, 0.12)',
                        border: '1px solid rgba(59, 130, 246, 0.25)',
                        fontSize: '0.72rem',
                        color: '#93c5fd',
                        marginBottom: '0.75rem',
                      }}
                    >
                      <MapPin size={11} />
                      <span>
                        {stats.bd} {t('tax.bangladeshRecords') || 'Bangladesh Records'}
                      </span>
                    </div>
                  )}

                  {/* Diagnostic Biological Summary */}
                  <p
                    style={{
                      fontSize: '0.84rem',
                      color: 'var(--text-muted)',
                      lineHeight: '1.55',
                      marginBottom: '1.25rem',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {group.diagnosticBiology[language] || group.diagnosticBiology.en}
                  </p>
                </div>

                {/* Card Action Link */}
                <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <Link
                    to={targetUrl}
                    className="btn btn-secondary btn-sm"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      gap: '0.4rem',
                      fontSize: '0.82rem',
                    }}
                  >
                    <BookOpen size={14} />
                    <span>{t('tax.exploreGroup')}</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Hierarchical Classification Tree Section */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ marginBottom: '1.25rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>
            {language === 'bn' ? 'সম্পূর্ণ লিনিয়ান শ্রেণীবিন্যাস কাঠামো' : 'Linnaean Zoological Taxonomy Tree'}
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            {language === 'bn'
              ? 'কিংডম থেকে জেনাস পর্যন্ত অনুসন্ধানযোগ্য শ্রেণীবিন্যাস বৃক্ষ। প্রতিটি শাখায় ক্লিক করে প্রসারিত বা সঙ্কুচিত করুন এবং বিশদ জ্ঞান অন্বেষণ করুন।'
              : 'Interactive expandable taxonomic hierarchy from Kingdom Animalia down to Genus and species. Search by taxon or vernacular name, and click Details to open dedicated biological profiles.'}
          </p>
        </div>

        <div className="card" style={{ padding: '1.5rem', background: 'var(--bg-surface)' }}>
          <TaxonomyTree taxa={taxa} species={species} />
        </div>
      </div>
    </div>
  );
};

