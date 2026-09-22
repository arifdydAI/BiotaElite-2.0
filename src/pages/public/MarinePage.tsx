// BiotaElite 2.0 Complete Global Marine Life Portal (MASTER-BUILD-02D)
// Universal Global Marine Animal Biodiversity & Non-Fish Ichthyological Separation
import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useLanguage } from '../../context/LanguageContext';
import { SpeciesCard } from '../../components/species/SpeciesCard';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { BackButton } from '../../components/common/BackButton';
import { TaxonKnowledgeCard } from '../../components/knowledge/TaxonKnowledgeCard';
import { TaxonKnowledgeDetail } from '../../components/knowledge/TaxonKnowledgeDetail';
import {
  Waves,
  Compass,
  Anchor,
  Layers,
  ShieldCheck,
  AlertCircle,
  BookOpen,
  ArrowRight,
  Fish,
  Globe,
  Search,
  Filter,
  MapPin,
  Activity
} from 'lucide-react';

export const MarinePage: React.FC = () => {
  const { phylumId, classId, orderId } = useParams<{
    phylumId?: string;
    classId?: string;
    orderId?: string;
  }>();

  const {
    getTaxonKnowledgeByCategory,
    getTaxonKnowledgeById,
    getTaxonKnowledgeChildren,
    getSpeciesByModule,
    species,
  } = useBiodiversity();

  const { t, language } = useLanguage();

  // Filter States for Landing Page
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('global');
  const [selectedHabitat, setSelectedHabitat] = useState('all');
  const [selectedGroup, setSelectedGroup] = useState('all');
  const [selectedConservation, setSelectedConservation] = useState('all');

  const marineKnowledgeRecords = getTaxonKnowledgeByCategory('marine_non_fish');
  const marinePhyla = marineKnowledgeRecords.filter(r => r.rank === 'phylum');

  // Strict non-fish marine species
  const nonFishMarineSpecies = useMemo(() => {
    return getSpeciesByModule('marine');
  }, [getSpeciesByModule, species]);

  // Major global marine environments definition
  const marineEnvironments = [
    { id: 'coral_reef', nameEn: 'Coral Reefs', nameBn: 'প্রবাল প্রাচীর', descEn: 'High-diversity calcium-carbonate biogenic ecosystems hosting sponges, corals, and sea turtles.', descBn: 'ক্যালসিয়াম কার্বনেট দ্বারা নির্মিত জৈবিক প্রাচীর যা স্পঞ্জ, প্রবাল ও কাছিমের প্রধান আবাস।' },
    { id: 'deep_sea', nameEn: 'Deep Sea & Abyssal Zones', nameBn: 'গভীর সমুদ্র ও অতল অঞ্চল', descEn: 'Aphotic oceanic depths, bathyal trenches, and hydrothermal vents with extremophilic invertebrates.', descBn: 'সূর্যালোকহীন অতল সাগর ও গিরিখাত যেখানে বিশেষায়িত অমেরুদণ্ডী প্রাণীরা বাস করে।' },
    { id: 'open_ocean', nameEn: 'Open Ocean (Pelagic)', nameBn: 'উন্মুক্ত মহাসাগর (পেলাজিক)', descEn: 'Expansive epipelagic and mesopelagic water column navigated by cetaceans and comb jellies.', descBn: 'বিস্তীর্ণ মুক্ত জলরাশি যেখানে তিমি, ডলফিন ও জেলিফিশ বিচরণ করে।' },
    { id: 'estuarine', nameEn: 'Estuaries & Coastal Waters', nameBn: 'মোহনা ও উপকূলীয় জলসীমা', descEn: 'Dynamic brackish interfaces between river systems and coastal neritic shelves.', descBn: 'নদী ও সাগরের মিলনস্থলের লোনাপানির মোহনা যেখানে সমৃদ্ধ প্রাণবৈচিত্র্য বিদ্যমান।' },
    { id: 'seagrass', nameEn: 'Seagrass Meadows', nameBn: 'সীগ্রাস বাস্তুতন্ত্র', descEn: 'Productive nearshore marine angiosperm beds supporting sirenians, gastropods, and bivalves.', descBn: 'অগভীর সমুদ্রের ঘাসভূমি যা ডুগং, শামুক ও ঝিনুকের খাদ্য ও আশ্রয়ের কেন্দ্রস্থল।' },
    { id: 'polar', nameEn: 'Polar Marine Ecosystems', nameBn: 'মেরু সামুদ্রিক অঞ্চল', descEn: 'Frigid Arctic and Antarctic waters insulated by sea ice, supporting pinnipeds and krill webs.', descBn: 'বরফাচ্ছাদিত সুমেরু ও কুমেরু মহাসাগরীয় অঞ্চল যা সিল ও ক্রিলের প্রধান ক্ষেত্র।' },
  ];

  // Regional discovery options (Global is non-negotiable default)
  const marineRegions = [
    { id: 'global', nameEn: 'Global (All Oceans)', nameBn: 'বিশ্বজুড়ে (সকল মহাসাগর)' },
    { id: 'indo_pacific', nameEn: 'Indo-Pacific', nameBn: 'ইন্দো-প্যাসিফিক' },
    { id: 'indian_ocean', nameEn: 'Indian Ocean', nameBn: 'ভারত মহাসাগর' },
    { id: 'pacific_ocean', nameEn: 'Pacific Ocean', nameBn: 'প্রশান্ত মহাসাগর' },
    { id: 'atlantic_ocean', nameEn: 'Atlantic Ocean', nameBn: 'আটলান্টিক মহাসাগর' },
    { id: 'arctic_ocean', nameEn: 'Arctic Ocean', nameBn: 'উত্তর মহাসাগর (আর্কটিক)' },
    { id: 'southern_ocean', nameEn: 'Southern Ocean', nameBn: 'দক্ষিণ মহাসাগর (অ্যান্টার্কটিক)' },
    { id: 'mediterranean', nameEn: 'Mediterranean Sea', nameBn: 'ভূমধ্যসাগর' },
    { id: 'red_sea', nameEn: 'Red Sea', nameBn: 'লোহিত সাগর' },
    { id: 'arabian_sea', nameEn: 'Arabian Sea', nameBn: 'আরব সাগর' },
    { id: 'bay_of_bengal', nameEn: 'Bay of Bengal', nameBn: 'বঙ্গোপসাগর' },
    { id: 'bd_coast', nameEn: 'Bangladesh Coast', nameBn: 'বাংলাদেশ উপকূল' },
  ];

  // Habitat options for filter
  const habitatFilterOptions = [
    { id: 'all', nameEn: 'All Marine Habitats', nameBn: 'সকল সামুদ্রিক আবাসস্থল' },
    { id: 'open_ocean', nameEn: 'Open Ocean (Pelagic)', nameBn: 'উন্মুক্ত মহাসাগর' },
    { id: 'coastal', nameEn: 'Coastal Waters', nameBn: 'উপকূলীয় অঞ্চল' },
    { id: 'estuarine', nameEn: 'Estuaries & Inlets', nameBn: 'মোহনা ও খাঁড়ি' },
    { id: 'coral_reef', nameEn: 'Coral Reefs', nameBn: 'প্রবাল প্রাচীর' },
    { id: 'mangrove', nameEn: 'Mangrove Marine Interfaces', nameBn: 'ম্যানগ্রোভ বাস্তুতন্ত্র' },
    { id: 'seagrass', nameEn: 'Seagrass Meadows', nameBn: 'সীগ্রাস বাস্তুতন্ত্র' },
    { id: 'kelp', nameEn: 'Kelp Forests', nameBn: 'কেল্প অরণ্য' },
    { id: 'deep_sea', nameEn: 'Deep Sea & Trenches', nameBn: 'গভীর সমুদ্র ও গিরিখাত' },
    { id: 'polar', nameEn: 'Polar Marine Ecosystems', nameBn: 'মেরু সামুদ্রিক অঞ্চল' },
    { id: 'continental_shelf', nameEn: 'Continental Shelf', nameBn: 'মহীসোপান' },
    { id: 'continental_slope', nameEn: 'Continental Slope', nameBn: 'মহীঢাল' },
    { id: 'abyssal', nameEn: 'Abyssal Zones', nameBn: 'অতল বা অ্যাবিসাল অঞ্চল' },
  ];

  // Taxonomic Group Filter Options
  const groupFilterOptions = [
    { id: 'all', nameEn: 'All Animal Groups', nameBn: 'সকল প্রাণী গোষ্ঠী' },
    { id: 'porifera', nameEn: 'Porifera (Sponges)', nameBn: 'স্পঞ্জ বা পরিফেরা' },
    { id: 'cnidaria', nameEn: 'Cnidaria (Corals & Jellyfish)', nameBn: 'নিডারিয়া (প্রবাল ও জেলি)' },
    { id: 'ctenophora', nameEn: 'Ctenophora (Comb Jellies)', nameBn: 'চিরুনি জেলি বা টেনোফোরা' },
    { id: 'annelida', nameEn: 'Annelida (Marine Worms)', nameBn: 'সামুদ্রিক বলয়ী প্রাণী' },
    { id: 'mollusca', nameEn: 'Mollusca (Molluscs & Squids)', nameBn: 'কম্বোজ প্রাণী (মোলাস্কা)' },
    { id: 'arthropoda', nameEn: 'Arthropoda (Crustaceans)', nameBn: 'সন্ধিপদী প্রাণী (ক্রাস্টাশিয়া)' },
    { id: 'echinodermata', nameEn: 'Echinodermata (Sea Stars & Urchins)', nameBn: 'কন্টকত্বকী প্রাণী' },
    { id: 'marine_mammals', nameEn: 'Marine Mammals (Cetacea, Sirenia, Pinnipedia)', nameBn: 'সামুদ্রিক স্তন্যপায়ী' },
    { id: 'marine_reptiles', nameEn: 'Marine Reptiles (Sea Turtles & Sea Snakes)', nameBn: 'সামুদ্রিক সরীসৃপ' },
  ];

  // Conservation status options
  const conservationOptions = [
    { id: 'all', label: language === 'bn' ? 'সকল আইইউসিএন অবস্থা' : 'All IUCN Categories' },
    { id: 'CR', label: 'Critically Endangered (CR)' },
    { id: 'EN', label: 'Endangered (EN)' },
    { id: 'VU', label: 'Vulnerable (VU)' },
    { id: 'NT', label: 'Near Threatened (NT)' },
    { id: 'LC', label: 'Least Concern (LC)' },
    { id: 'DD', label: 'Data Deficient (DD)' },
  ];

  // Dedicated Marine Mammal and Reptile Pathways
  const marineMammalAndReptileRecords = useMemo(() => {
    return marineKnowledgeRecords.filter(r =>
      ['order-cetacea', 'order-sirenia', 'order-pinnipedia', 'order-chelonioidea', 'order-hydrophiinae'].includes(r.id)
    );
  }, [marineKnowledgeRecords]);

  // Dynamic Filtering for Species on Landing Page
  const filteredSpecies = useMemo(() => {
    return nonFishMarineSpecies.filter(s => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchSci = s.scientificName.toLowerCase().includes(q);
        const matchAuthor = s.scientificNameAuthorship.toLowerCase().includes(q);
        const matchCommonEn = s.commonNames.en.some(c => c.toLowerCase().includes(q));
        const matchCommonBn = s.commonNames.bn.some(c => c.includes(q));
        const matchFamily = s.taxonomy.family.toLowerCase().includes(q);
        const matchGenus = s.taxonomy.genus.toLowerCase().includes(q);
        const matchOrder = s.taxonomy.order.toLowerCase().includes(q);
        const matchClass = s.taxonomy.class.toLowerCase().includes(q);
        const matchPhylum = s.taxonomy.phylum.toLowerCase().includes(q);
        const matchSynonym = s.synonyms.some(syn => syn.name.toLowerCase().includes(q));
        const matchRegion = s.bangladeshOccurrence.regions.some(r => r.toLowerCase().includes(q));
        if (!matchSci && !matchAuthor && !matchCommonEn && !matchCommonBn && !matchFamily && !matchGenus && !matchOrder && !matchClass && !matchPhylum && !matchSynonym && !matchRegion) {
          return false;
        }
      }

      // 2. Regional Filter
      if (selectedRegion !== 'global') {
        const textToSearch = [
          ...s.bangladeshOccurrence.regions,
          ...(s.habitat.zones || []),
          ...(s.bangladeshOccurrence.habitatTypes || []),
          s.morphology.description || '',
          s.ecology.behavior || '',
          s.bangladeshOccurrence.notes || ''
        ].join(' ').toLowerCase();

        if (selectedRegion === 'bay_of_bengal') {
          const match = textToSearch.includes('bay of bengal') || textToSearch.includes('swatch') || textToSearch.includes('saint martin') || textToSearch.includes('cox');
          if (!match) return false;
        } else if (selectedRegion === 'bd_coast') {
          const match = textToSearch.includes('coastal') || textToSearch.includes('sundarban') || textToSearch.includes('passur') || textToSearch.includes('saint martin') || textToSearch.includes('cox');
          if (!match) return false;
        } else if (selectedRegion === 'indo_pacific') {
          const match = textToSearch.includes('indo-pacific') || textToSearch.includes('indo-west pacific') || textToSearch.includes('indian ocean') || textToSearch.includes('pacific') || textToSearch.includes('bay of bengal');
          if (!match) return false;
        } else if (selectedRegion === 'indian_ocean') {
          const match = textToSearch.includes('indian ocean') || textToSearch.includes('bay of bengal') || textToSearch.includes('indo-pacific');
          if (!match) return false;
        } else if (selectedRegion === 'pacific_ocean') {
          const match = textToSearch.includes('pacific');
          if (!match) return false;
        } else if (selectedRegion === 'atlantic_ocean') {
          const match = textToSearch.includes('atlantic');
          if (!match) return false;
        } else if (selectedRegion === 'arctic_ocean') {
          const match = textToSearch.includes('arctic');
          if (!match) return false;
        } else if (selectedRegion === 'southern_ocean') {
          const match = textToSearch.includes('southern ocean') || textToSearch.includes('antarctic');
          if (!match) return false;
        } else if (selectedRegion === 'mediterranean') {
          const match = textToSearch.includes('mediterranean');
          if (!match) return false;
        } else if (selectedRegion === 'red_sea') {
          const match = textToSearch.includes('red sea');
          if (!match) return false;
        } else if (selectedRegion === 'arabian_sea') {
          const match = textToSearch.includes('arabian') || textToSearch.includes('indian ocean');
          if (!match) return false;
        }
      }

      // 3. Habitat Filter
      if (selectedHabitat !== 'all') {
        const zonesLower = (s.habitat.zones || []).map(z => z.toLowerCase());
        const habitatTypesLower = (s.bangladeshOccurrence.habitatTypes || []).map(h => h.toLowerCase());
        const allHabitats = [...zonesLower, ...habitatTypesLower, s.morphology.description.toLowerCase(), (s.ecology.behavior || '').toLowerCase()].join(' ');

        if (selectedHabitat === 'estuarine' && !allHabitats.includes('estuar') && !allHabitats.includes('bay') && !allHabitats.includes('mangrove')) return false;
        if (selectedHabitat === 'coastal' && !allHabitats.includes('coast') && !allHabitats.includes('shallow') && !allHabitats.includes('neritic') && !allHabitats.includes('shelf') && !allHabitats.includes('intertidal')) return false;
        if (selectedHabitat === 'mangrove' && !allHabitats.includes('mangrove') && !allHabitats.includes('sundarban')) return false;
        if (selectedHabitat === 'coral_reef' && !allHabitats.includes('coral') && !allHabitats.includes('reef')) return false;
        if (selectedHabitat === 'open_ocean' && !allHabitats.includes('pelagic') && !allHabitats.includes('open ocean') && !allHabitats.includes('oceanic')) return false;
        if (selectedHabitat === 'deep_sea' && !allHabitats.includes('trench') && !allHabitats.includes('deep') && !allHabitats.includes('swatch') && !allHabitats.includes('abyssal') && !allHabitats.includes('bathypelagic')) return false;
        if (selectedHabitat === 'seagrass' && !allHabitats.includes('seagrass') && !allHabitats.includes('meadow')) return false;
        if (selectedHabitat === 'polar' && !allHabitats.includes('polar') && !allHabitats.includes('arctic') && !allHabitats.includes('antarctic') && !allHabitats.includes('sea ice') && !allHabitats.includes('cold-temperate')) return false;
        if (selectedHabitat === 'continental_shelf' && !allHabitats.includes('shelf') && !allHabitats.includes('neritic') && !allHabitats.includes('coastal')) return false;
        if (selectedHabitat === 'continental_slope' && !allHabitats.includes('slope') && !allHabitats.includes('deep')) return false;
        if (selectedHabitat === 'abyssal' && !allHabitats.includes('abyssal') && !allHabitats.includes('bathy') && !allHabitats.includes('deep')) return false;
        if (selectedHabitat === 'kelp' && !allHabitats.includes('kelp')) return false;
      }

      // 4. Taxonomic Group Filter
      if (selectedGroup !== 'all') {
        if (selectedGroup === 'marine_mammals') {
          if (s.taxonomy.class !== 'Mammalia') return false;
        } else if (selectedGroup === 'marine_reptiles') {
          if (s.taxonomy.class !== 'Reptilia') return false;
        } else {
          if (s.taxonomy.phylum.toLowerCase() !== selectedGroup.toLowerCase()) return false;
        }
      }

      // 5. Conservation Status Filter
      if (selectedConservation !== 'all') {
        const globalStatus = s.conservation.iucnGlobalStatus || s.conservation.globalIucnStatus;
        const nationalStatus = s.bangladeshOccurrence.bangladeshNationalStatus || s.bangladeshOccurrence.threatCategoryNational;
        if (globalStatus !== selectedConservation && nationalStatus !== selectedConservation) {
          return false;
        }
      }

      return true;
    });
  }, [nonFishMarineSpecies, searchQuery, selectedRegion, selectedHabitat, selectedGroup, selectedConservation]);

  // Reset all discovery filters
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedRegion('global');
    setSelectedHabitat('all');
    setSelectedGroup('all');
    setSelectedConservation('all');
  };

  // =========================================================================
  // VIEW 1: ORDER-LEVEL KNOWLEDGE PAGE (Mandatory 9-Point Zoological Standard)
  // =========================================================================
  if (orderId) {
    const orderRecord =
      getTaxonKnowledgeById(orderId) ||
      marineKnowledgeRecords.find(
        r => r.scientificName.toLowerCase() === orderId.toLowerCase() || r.id === orderId
      );

    if (!orderRecord) {
      return (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <BackButton fallbackTo="/marine" />
            <Breadcrumbs
              items={[
                { label: t('crumb.marine'), to: '/marine' },
                { label: 'Order Not Found' },
              ]}
            />
          </div>
          <div className="empty-state-box">
            <h3>{language === 'bn' ? 'বর্গ রেকর্ড পাওয়া যায়নি' : 'Order Record Not Found'}</h3>
            <p>{language === 'bn' ? 'অনুরোধকৃত সামুদ্রিক বর্গের রেকর্ড বিদ্যমান নেই।' : 'The requested marine order record does not exist.'}</p>
            <Link to="/marine" className="btn btn-primary" style={{ marginTop: '1rem' }}>
              {t('marine.backToPhyla')}
            </Link>
          </div>
        </div>
      );
    }

    const classNameInHierarchy = orderRecord.classificationHierarchy.find(h => h.rank === 'class')?.name;
    const phylumNameInHierarchy = orderRecord.classificationHierarchy.find(h => h.rank === 'phylum')?.name;
    const parentClassRecord = marineKnowledgeRecords.find(
      r => r.rank === 'class' && r.scientificName === classNameInHierarchy
    );

    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <BackButton fallbackTo={parentClassRecord ? `/marine/class/${parentClassRecord.id}` : '/marine'} />
          <Breadcrumbs
            items={[
              { label: t('crumb.marine'), to: '/marine' },
              ...(phylumNameInHierarchy
                ? [{ label: phylumNameInHierarchy, to: `/marine` }]
                : []),
              ...(parentClassRecord
                ? [{ label: parentClassRecord.scientificName, to: `/marine/class/${parentClassRecord.id}` }]
                : []),
              { label: orderRecord.scientificName },
            ]}
          />
        </div>

        <TaxonKnowledgeDetail
          record={orderRecord}
          category="marine_non_fish"
          fallbackPath={parentClassRecord ? `/marine/class/${parentClassRecord.id}` : '/marine'}
        />
      </div>
    );
  }

  // =========================================================================
  // VIEW 2: CLASS-LEVEL KNOWLEDGE PAGE
  // =========================================================================
  if (classId) {
    const classRecord =
      getTaxonKnowledgeById(classId) ||
      marineKnowledgeRecords.find(
        r => r.rank === 'class' && (r.scientificName.toLowerCase() === classId.toLowerCase() || r.id === classId)
      );

    if (!classRecord) {
      return (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <BackButton fallbackTo="/marine" />
            <Breadcrumbs
              items={[
                { label: t('crumb.marine'), to: '/marine' },
                { label: 'Class Not Found' },
              ]}
            />
          </div>
          <div className="empty-state-box">
            <h3>{language === 'bn' ? 'শ্রেণী রেকর্ড পাওয়া যায়নি' : 'Class Record Not Found'}</h3>
            <p>{language === 'bn' ? 'অনুরোধকৃত সামুদ্রিক শ্রেণীর রেকর্ড বিদ্যমান নেই।' : 'The requested marine class record does not exist.'}</p>
            <Link to="/marine" className="btn btn-primary" style={{ marginTop: '1rem' }}>
              {t('marine.backToPhyla')}
            </Link>
          </div>
        </div>
      );
    }

    const childOrders = getTaxonKnowledgeChildren(classRecord.id).filter(
      r => r.rank === 'order' || r.rank === 'infraorder' || r.rank === 'suborder' || r.rank === 'superfamily' || r.rank === 'subfamily'
    );

    const classSpecies = species.filter(
      s => s.taxonomy.class.toLowerCase() === classRecord.scientificName.toLowerCase() && s.isPublished
    );
    const bdClassSpecies = classSpecies.filter(s => s.bangladeshOccurrence?.present);

    const primaryCommon = language === 'bn' ? classRecord.bengaliName : classRecord.englishName;

    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <BackButton fallbackTo="/marine" />
          <Breadcrumbs
            items={[
              { label: t('crumb.marine'), to: '/marine' },
              { label: classRecord.scientificName },
            ]}
          />
        </div>

        {/* Class Hero */}
        <div className="knowledge-hero marine-theme">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.25rem 0.65rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                background: 'rgba(2, 132, 199, 0.2)',
                color: 'var(--accent-marine-light)',
              }}
            >
              <Waves size={14} />
              <span>{t('rank.class')}</span>
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              {classRecord.id}
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem', lineHeight: 1.2 }}>
            <span className="scientific-name" style={{ marginRight: '0.75rem' }}>
              {classRecord.scientificName}
            </span>
            <span style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--accent-marine-light)', fontWeight: 600 }}>
              ({primaryCommon})
            </span>
          </h1>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '900px', lineHeight: 1.65, marginBottom: '1.5rem' }}>
            {classRecord.shortDescription[language] || classRecord.shortDescription.en}
          </p>

          {/* Metrics */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <Layers size={16} style={{ color: 'var(--accent-marine-light)' }} />
              <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                {language === 'bn' ? 'নথিবদ্ধ বর্গ:' : 'Documented Orders:'}{' '}
                <strong style={{ color: '#ffffff' }}>{childOrders.length}</strong>
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <Globe size={16} style={{ color: 'var(--accent-marine-light)' }} />
              <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                {t('knowledge.globalCatalogued')}{' '}
                <strong style={{ color: '#ffffff' }}>{classSpecies.length}</strong>
              </span>
            </div>

            {/* Regional Bangladesh Occurrence Context */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.2rem 0.6rem',
                borderRadius: 'var(--radius-sm)',
                background: bdClassSpecies.length > 0 ? 'rgba(2, 132, 199, 0.12)' : 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <MapPin size={14} style={{ color: bdClassSpecies.length > 0 ? 'var(--accent-marine-light)' : 'var(--text-muted)' }} />
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                {t('knowledge.regionalContext')}{' '}
                <strong style={{ color: bdClassSpecies.length > 0 ? '#ffffff' : 'var(--text-muted)' }}>
                  {bdClassSpecies.length > 0
                    ? (language === 'bn' ? `${bdClassSpecies.length}টি নথিবদ্ধ` : `${bdClassSpecies.length} recorded`)
                    : (language === 'bn' ? 'নথিবদ্ধ নেই' : 'Not recorded')}
                </strong>
              </span>
            </div>
          </div>
        </div>

        {/* Orders in this class */}
        {childOrders.length > 0 && (
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <BookOpen size={20} style={{ color: 'var(--accent-marine-light)' }} />
                <span>{t('fish.ordersInClass')}</span>
              </h2>
              <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                {childOrders.length} {language === 'bn' ? 'টি বর্গ' : 'Orders Catalogued'}
              </span>
            </div>

            <div className="knowledge-grid">
              {childOrders.map(order => (
                <TaxonKnowledgeCard
                  key={order.id}
                  record={order}
                  category="marine_non_fish"
                  linkTo={`/marine/order/${order.id}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Species in this Class */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Waves size={20} style={{ color: 'var(--accent-marine-light)' }} />
              <span>
                {language === 'bn'
                  ? `${classRecord.scientificName} শ্রেণীর যাচাইকৃত প্রজাতিসমূহ`
                  : `Verified Species in Class ${classRecord.scientificName}`}
              </span>
            </h2>
            <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
              {classSpecies.length} {t('common.recordsCount')}
            </span>
          </div>

          {classSpecies.length > 0 ? (
            <div className="grid-species">
              {classSpecies.map(sp => (
                <SpeciesCard key={sp.id} species={sp} />
              ))}
            </div>
          ) : (
            <div
              style={{
                padding: '2.5rem',
                textAlign: 'center',
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: 'var(--radius-lg)',
                border: '1px dashed var(--border-subtle)',
              }}
            >
              <AlertCircle size={32} style={{ color: '#fbbf24', margin: '0 auto 0.75rem' }} />
              <h3 style={{ fontSize: '1.1rem', color: '#ffffff', marginBottom: '0.4rem' }}>
                {t('marine.noVerifiedRecords')}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '600px', margin: '0 auto' }}>
                {language === 'bn'
                  ? 'বায়োটাএলিটের কঠোর বৈজ্ঞানিক নিয়মানুযায়ী ভাউচার যাচাইকরণ ব্যতীত কোনো কাল্পনিক প্রজাতি প্রদর্শন করা হয় না।'
                  : 'BiotaElite integrity guidelines require primary voucher specimen verification before publishing species records.'}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW 3: PHYLUM-LEVEL KNOWLEDGE PAGE
  // =========================================================================
  if (phylumId) {
    const phylumRecord =
      getTaxonKnowledgeById(phylumId) ||
      marinePhyla.find(
        r => r.scientificName.toLowerCase() === phylumId.toLowerCase() || r.id === phylumId
      );

    if (!phylumRecord) {
      return (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <BackButton fallbackTo="/marine" />
            <Breadcrumbs
              items={[
                { label: t('crumb.marine'), to: '/marine' },
                { label: 'Phylum Not Found' },
              ]}
            />
          </div>
          <div className="empty-state-box">
            <h3>{language === 'bn' ? 'পর্ব রেকর্ড পাওয়া যায়নি' : 'Phylum Record Not Found'}</h3>
            <p>{language === 'bn' ? 'অনুরোধকৃত পর্বের রেকর্ড বিদ্যমান নেই।' : 'The requested phylum record does not exist.'}</p>
            <Link to="/marine" className="btn btn-primary" style={{ marginTop: '1rem' }}>
              {t('marine.backToPhyla')}
            </Link>
          </div>
        </div>
      );
    }

    const childClasses = getTaxonKnowledgeChildren(phylumRecord.id).filter(
      r => r.rank === 'class'
    );
    const childOrders = getTaxonKnowledgeChildren(phylumRecord.id).filter(
      r => r.rank === 'order' || r.rank === 'infraorder' || r.rank === 'suborder' || r.rank === 'superfamily' || r.rank === 'subfamily'
    );

    const phylumSpecies = species.filter(
      s => s.taxonomy.phylum.toLowerCase() === phylumRecord.scientificName.toLowerCase() && s.isPublished
    );
    const bdPhylumSpecies = phylumSpecies.filter(s => s.bangladeshOccurrence?.present);

    const primaryCommon = language === 'bn' ? phylumRecord.bengaliName : phylumRecord.englishName;

    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <BackButton fallbackTo="/marine" />
          <Breadcrumbs
            items={[
              { label: t('crumb.marine'), to: '/marine' },
              { label: phylumRecord.scientificName },
            ]}
          />
        </div>

        {/* Phylum Hero */}
        <div className="knowledge-hero marine-theme">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.25rem 0.65rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                background: 'rgba(2, 132, 199, 0.2)',
                color: 'var(--accent-marine-light)',
              }}
            >
              <Waves size={14} />
              <span>{t('rank.phylum')}</span>
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              {phylumRecord.id}
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem', lineHeight: 1.2 }}>
            <span className="scientific-name" style={{ marginRight: '0.75rem' }}>
              {phylumRecord.scientificName}
            </span>
            <span style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--accent-marine-light)', fontWeight: 600 }}>
              ({primaryCommon})
            </span>
          </h1>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '900px', lineHeight: 1.65, marginBottom: '1.5rem' }}>
            {phylumRecord.shortDescription[language] || phylumRecord.shortDescription.en}
          </p>

          {/* Metrics */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <Layers size={16} style={{ color: 'var(--accent-marine-light)' }} />
              <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                {language === 'bn' ? 'নথিবদ্ধ শ্রেণী/বর্গ:' : 'Documented Taxa:'}{' '}
                <strong style={{ color: '#ffffff' }}>{childClasses.length + childOrders.length}</strong>
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <Globe size={16} style={{ color: 'var(--accent-marine-light)' }} />
              <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                {t('knowledge.globalCatalogued')}{' '}
                <strong style={{ color: '#ffffff' }}>{phylumSpecies.length}</strong>
              </span>
            </div>

            {/* Regional Bangladesh Occurrence Context */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.2rem 0.6rem',
                borderRadius: 'var(--radius-sm)',
                background: bdPhylumSpecies.length > 0 ? 'rgba(2, 132, 199, 0.12)' : 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <MapPin size={14} style={{ color: bdPhylumSpecies.length > 0 ? 'var(--accent-marine-light)' : 'var(--text-muted)' }} />
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                {t('knowledge.regionalContext')}{' '}
                <strong style={{ color: bdPhylumSpecies.length > 0 ? '#ffffff' : 'var(--text-muted)' }}>
                  {bdPhylumSpecies.length > 0
                    ? (language === 'bn' ? `${bdPhylumSpecies.length}টি নথিবদ্ধ` : `${bdPhylumSpecies.length} recorded`)
                    : (language === 'bn' ? 'নথিবদ্ধ নেই' : 'Not recorded')}
                </strong>
              </span>
            </div>
          </div>
        </div>

        {/* Global Distribution vs Bangladesh Occurrence Badges */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
          <div style={{ background: 'rgba(2, 132, 199, 0.06)', border: '1px solid rgba(2, 132, 199, 0.2)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-marine-light)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
              <Globe size={16} />
              <span>{t('marine.globalDistribution')}</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
              {phylumRecord.distribution[language] || phylumRecord.distribution.en}
            </p>
          </div>

          <div style={{ background: 'rgba(245, 158, 11, 0.06)', border: '1px solid rgba(245, 158, 11, 0.2)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fbbf24', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
              <MapPin size={16} />
              <span>{t('marine.bdOccurrence')}</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
              {phylumSpecies.length > 0
                ? (language === 'bn' ? `${phylumSpecies.length}টি প্রজাতি বাংলাদেশে প্রামাণ্যভাবে নথিবদ্ধ ও যাচাইকৃত।` : `${phylumSpecies.length} species verified with published voucher specimens in Bangladesh.`)
                : (language === 'bn' ? 'বর্তমানে যাচাইকৃত রেকর্ড পাওয়া যায়নি। প্রামাণ্য ভাউচার যাচাইকরণ প্রক্রিয়াধীন।' : 'No verified specimen records are currently available. Primary voucher curation in progress.')}
            </p>
          </div>
        </div>

        {/* Child Classes / Orders in this Phylum */}
        {(childClasses.length > 0 || childOrders.length > 0) && (
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <BookOpen size={20} style={{ color: 'var(--accent-marine-light)' }} />
                <span>
                  {language === 'bn' ? `${phylumRecord.scientificName} পর্বের প্রধান ট্যাক্সাসমূহ` : `Major Taxa in ${phylumRecord.scientificName}`}
                </span>
              </h2>
              <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                {childClasses.length + childOrders.length} {language === 'bn' ? 'টি ট্যাক্সন' : 'Taxa Catalogued'}
              </span>
            </div>

            <div className="knowledge-grid">
              {childClasses.map(cls => (
                <TaxonKnowledgeCard
                  key={cls.id}
                  record={cls}
                  category="marine_non_fish"
                  linkTo={`/marine/class/${cls.id}`}
                />
              ))}
              {childOrders.map(ord => (
                <TaxonKnowledgeCard
                  key={ord.id}
                  record={ord}
                  category="marine_non_fish"
                  linkTo={`/marine/order/${ord.id}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* 9-Point Standard Reference View */}
        <TaxonKnowledgeDetail
          record={phylumRecord}
          category="marine_non_fish"
          fallbackPath="/marine"
        />
      </div>
    );
  }

  // =========================================================================
  // VIEW 4: COMPLETE GLOBAL MARINE LIFE PORTAL (LANDING PAGE)
  // =========================================================================
  return (
    <div style={{ maxWidth: '100%', overflowX: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <BackButton fallbackTo="/species" />
        <Breadcrumbs items={[{ label: t('crumb.marine') }]} />
      </div>

      {/* Global Marine Life Hero Banner */}
      <div className="knowledge-hero marine-theme" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: 'var(--accent-marine-light)', fontSize: '0.825rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
          <Globe size={18} />
          <span>{language === 'bn' ? 'বৈশ্বিক সামুদ্রিক জীববৈচিত্র্য পোর্টাল' : 'Global Marine Biodiversity Portal'}</span>
        </div>

        <h1 style={{ fontSize: 'clamp(2.1rem, 4.2vw, 3rem)', fontWeight: 800, color: '#ffffff', marginBottom: '0.4rem', lineHeight: 1.15 }}>
          {t('marine.mainHeading')}
        </h1>

        <div style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.35rem)', fontWeight: 600, color: 'var(--accent-marine-light)', marginBottom: '1rem' }}>
          {t('marine.subtitle')}
        </div>

        {/* Verbatim Global Scientific Introduction */}
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', maxWidth: '880px', lineHeight: '1.7', marginBottom: '1.75rem' }}>
          {t('marine.lead')}
        </p>

        {/* Planetary Metrics Bar */}
        <div style={{ display: 'flex', gap: '1.75rem', flexWrap: 'wrap', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', fontSize: '0.875rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-secondary)' }}>
            <Layers size={17} style={{ color: 'var(--accent-marine-light)' }} />
            <span>
              <strong style={{ color: '#ffffff', fontSize: '1.1rem' }}>{marinePhyla.length}</strong> {language === 'bn' ? 'টি সামুদ্রিক প্রাণী পর্ব' : 'Marine Animal Phyla'}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-secondary)' }}>
            <Activity size={17} style={{ color: 'var(--accent-marine-light)' }} />
            <span>
              <strong style={{ color: '#ffffff', fontSize: '1.1rem' }}>{marineKnowledgeRecords.filter(r => r.rank === 'order').length}</strong> {language === 'bn' ? 'টি নথিভুক্ত বর্গ' : 'Documented Orders'}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-secondary)' }}>
            <Compass size={17} style={{ color: 'var(--accent-marine-light)' }} />
            <span>
              <strong style={{ color: '#ffffff', fontSize: '1.1rem' }}>12</strong> {language === 'bn' ? 'টি মহাসাগরীয় অঞ্চল' : 'Global Ocean Regions'}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', background: 'rgba(2, 132, 199, 0.18)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', color: '#38bdf8', fontWeight: 700 }}>
            <ShieldCheck size={16} />
            <span>{nonFishMarineSpecies.length} {language === 'bn' ? 'টি যাচাইকৃত রেকর্ড' : 'Verified Marine Records'}</span>
          </div>
        </div>
      </div>

      {/* Mandatory Ichthyological Separation Policy Notice */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '1.1rem',
          padding: '1.25rem 1.6rem',
          background: 'rgba(16, 185, 129, 0.08)',
          border: '1px solid rgba(16, 185, 129, 0.28)',
          borderRadius: 'var(--radius-lg)',
          marginBottom: '2.5rem',
        }}
      >
        <Fish size={24} style={{ color: 'var(--accent-emerald-light)', flexShrink: 0, marginTop: '3px' }} />
        <div style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: '1.65', flex: 1 }}>
          <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.3rem', fontSize: '0.975rem' }}>
            {language === 'bn' ? 'শ্রেণীবিন্যাসগত স্বাতন্ত্র্য — মৎস্য ও সামুদ্রিক প্রাণীর বিভাজন' : 'Taxonomic Distinction — Non-Fish Marine Animal Mandate'}
          </strong>
          {t('marine.finfishNotice')}
          <div style={{ marginTop: '0.65rem' }}>
            <Link
              to="/fish"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--accent-emerald-light)',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '0.875rem',
                padding: '0.35rem 0.85rem',
                background: 'rgba(16, 185, 129, 0.15)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(16, 185, 129, 0.35)',
                transition: 'all 0.2s ease',
              }}
            >
              <span>{t('marine.goToFish')}</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      {/* SECTION 1: GLOBAL MARINE ENVIRONMENTS (6 INTERACTIVE FEATURE CARDS) */}
      <div style={{ marginBottom: '3.5rem' }}>
        <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <Compass size={22} style={{ color: 'var(--accent-marine-light)' }} />
              <span>{t('marine.environmentsTitle')}</span>
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              {t('marine.environmentsSubtitle')}
            </p>
          </div>
          {selectedHabitat !== 'all' && (
            <button
              onClick={() => setSelectedHabitat('all')}
              className="btn btn-secondary btn-sm"
              style={{ fontSize: '0.75rem', padding: '0.3rem 0.7rem' }}
            >
              {language === 'bn' ? 'সকল পরিবেশ প্রদর্শন' : 'Clear Environment Filter'}
            </button>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.1rem' }}>
          {marineEnvironments.map(env => {
            const isSelected = selectedHabitat === env.id;
            return (
              <div
                key={env.id}
                onClick={() => setSelectedHabitat(isSelected ? 'all' : env.id)}
                style={{
                  background: isSelected ? 'rgba(2, 132, 199, 0.18)' : 'rgba(15, 23, 42, 0.65)',
                  border: isSelected ? '1px solid var(--accent-marine-light)' : '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.35rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                }}
                className="hover-card"
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-marine-light)' }}>
                    {language === 'bn' ? 'সামুদ্রিক বায়োম' : 'Marine Biome'}
                  </span>
                  {isSelected && (
                    <span style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem', borderRadius: '4px', background: 'var(--accent-marine-light)', color: '#ffffff', fontWeight: 700 }}>
                      {language === 'bn' ? 'সক্রিয়' : 'Active'}
                    </span>
                  )}
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
                  {language === 'bn' ? env.nameBn : env.nameEn}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  {language === 'bn' ? env.descBn : env.descEn}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 2: MULTI-DIMENSIONAL DISCOVERY FILTER BAR */}
      <div
        id="marine-filters"
        style={{
          background: 'rgba(15, 23, 42, 0.75)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-xl)',
          padding: '1.65rem',
          marginBottom: '3.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Filter size={18} style={{ color: 'var(--accent-marine-light)' }} />
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
              {language === 'bn' ? 'পদ্ধতিগত সামুদ্রিক অনুসন্ধান ও ফিল্টার' : 'Systematic Marine Discovery & Filters'}
            </h3>
          </div>
          {(searchQuery || selectedRegion !== 'global' || selectedHabitat !== 'all' || selectedGroup !== 'all' || selectedConservation !== 'all') && (
            <button
              onClick={resetFilters}
              className="btn btn-secondary btn-sm"
              style={{ fontSize: '0.75rem', padding: '0.25rem 0.65rem' }}
            >
              {t('filter.clear')}
            </button>
          )}
        </div>

        {/* Search Input */}
        <div style={{ position: 'relative', marginBottom: '1.25rem' }}>
          <Search size={17} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder={t('marine.searchPlaceholder')}
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="form-input"
            style={{ paddingLeft: '2.5rem', fontSize: '0.9rem', borderRadius: 'var(--radius-md)' }}
          />
        </div>

        {/* Filter Selectors Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          {/* Regional Filter (Global is DEFAULT) */}
          <div>
            <label style={{ display: 'block', fontSize: '0.775rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              {t('marine.filterByRegion')}
            </label>
            <select
              value={selectedRegion}
              onChange={e => setSelectedRegion(e.target.value)}
              className="form-input"
              style={{ fontSize: '0.85rem' }}
            >
              {marineRegions.map(reg => (
                <option key={reg.id} value={reg.id}>
                  {language === 'bn' ? reg.nameBn : reg.nameEn}
                </option>
              ))}
            </select>
          </div>

          {/* Habitat Filter */}
          <div>
            <label style={{ display: 'block', fontSize: '0.775rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              {t('marine.filterByHabitat')}
            </label>
            <select
              value={selectedHabitat}
              onChange={e => setSelectedHabitat(e.target.value)}
              className="form-input"
              style={{ fontSize: '0.85rem' }}
            >
              {habitatFilterOptions.map(hab => (
                <option key={hab.id} value={hab.id}>
                  {language === 'bn' ? hab.nameBn : hab.nameEn}
                </option>
              ))}
            </select>
          </div>

          {/* Taxonomic Group Filter */}
          <div>
            <label style={{ display: 'block', fontSize: '0.775rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              {t('marine.filterByGroup')}
            </label>
            <select
              value={selectedGroup}
              onChange={e => setSelectedGroup(e.target.value)}
              className="form-input"
              style={{ fontSize: '0.85rem' }}
            >
              {groupFilterOptions.map(grp => (
                <option key={grp.id} value={grp.id}>
                  {language === 'bn' ? grp.nameBn : grp.nameEn}
                </option>
              ))}
            </select>
          </div>

          {/* IUCN Conservation Filter */}
          <div>
            <label style={{ display: 'block', fontSize: '0.775rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              {t('filter.conservation')}
            </label>
            <select
              value={selectedConservation}
              onChange={e => setSelectedConservation(e.target.value)}
              className="form-input"
              style={{ fontSize: '0.85rem' }}
            >
              {conservationOptions.map(opt => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Current Active Filter Badges */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '1.25rem', flexWrap: 'wrap', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          <span>{language === 'bn' ? 'সক্রিয় অবস্থা:' : 'Scope:'}</span>
          <span style={{ padding: '0.2rem 0.55rem', borderRadius: '4px', background: 'rgba(2, 132, 199, 0.15)', color: 'var(--accent-marine-light)', fontWeight: 600 }}>
            {language === 'bn' ? 'অঞ্চল: ' : 'Region: '}
            {marineRegions.find(r => r.id === selectedRegion)?.[language === 'bn' ? 'nameBn' : 'nameEn']}
          </span>
          {selectedHabitat !== 'all' && (
            <span style={{ padding: '0.2rem 0.55rem', borderRadius: '4px', background: 'rgba(2, 132, 199, 0.15)', color: 'var(--accent-marine-light)', fontWeight: 600 }}>
              {language === 'bn' ? 'আবাসস্থল: ' : 'Habitat: '}
              {habitatFilterOptions.find(h => h.id === selectedHabitat)?.[language === 'bn' ? 'nameBn' : 'nameEn']}
            </span>
          )}
          {selectedGroup !== 'all' && (
            <span style={{ padding: '0.2rem 0.55rem', borderRadius: '4px', background: 'rgba(2, 132, 199, 0.15)', color: 'var(--accent-marine-light)', fontWeight: 600 }}>
              {language === 'bn' ? 'গোষ্ঠী: ' : 'Group: '}
              {groupFilterOptions.find(g => g.id === selectedGroup)?.[language === 'bn' ? 'nameBn' : 'nameEn']}
            </span>
          )}
          <span style={{ marginLeft: 'auto', fontWeight: 700, color: '#ffffff' }}>
            {filteredSpecies.length} {t('common.recordsCount')}
          </span>
        </div>
      </div>

      {/* SECTION 3: MAJOR MARINE ANIMAL BIODIVERSITY GROUPS (PHYLUM CARDS) */}
      <div style={{ marginBottom: '3.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
              <Layers size={22} style={{ color: 'var(--accent-marine-light)' }} />
              <span>{t('marine.groupsTitle')}</span>
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              {t('marine.groupsSubtitle')}
            </p>
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            {marinePhyla.length} {language === 'bn' ? 'টি পর্ব' : 'Phyla'}
          </span>
        </div>

        <div className="knowledge-grid">
          {marinePhyla.map(phylum => (
            <TaxonKnowledgeCard
              key={phylum.id}
              record={phylum}
              category="marine_non_fish"
              linkTo={`/marine/phylum/${phylum.id}`}
            />
          ))}
        </div>
      </div>

      {/* SECTION 4: DEDICATED MARINE MAMMALS & MARINE REPTILES DISCOVERY PATHWAYS */}
      <div style={{ marginBottom: '3.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
              <Activity size={22} style={{ color: 'var(--accent-marine-light)' }} />
              <span>{t('marine.mammalsReptilesTitle')}</span>
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              {t('marine.mammalsReptilesSubtitle')}
            </p>
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            {marineMammalAndReptileRecords.length} {language === 'bn' ? 'টি বিশেষ বর্গ' : 'Specialized Orders'}
          </span>
        </div>

        <div className="knowledge-grid">
          {marineMammalAndReptileRecords.map(rec => (
            <TaxonKnowledgeCard
              key={rec.id}
              record={rec}
              category="marine_non_fish"
              linkTo={`/marine/order/${rec.id}`}
            />
          ))}
        </div>
      </div>

      {/* SECTION 5: BANGLADESH MARINE CONTEXT (DEDICATED REGIONAL SECTION) */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.08) 0%, rgba(15, 23, 42, 0.85) 100%)',
          border: '1px solid rgba(2, 132, 199, 0.25)',
          borderRadius: 'var(--radius-xl)',
          padding: '2rem',
          marginBottom: '3.5rem',
        }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-marine-light)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
          <MapPin size={16} />
          <span>{language === 'bn' ? 'আঞ্চলিক প্রাসঙ্গিকতা' : 'Regional Zoological Setting'}</span>
        </div>

        <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.4rem' }}>
          {t('marine.bdContextTitle')}
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '850px', lineHeight: 1.6, marginBottom: '1.75rem' }}>
          {t('marine.bdContextSubtitle')}
        </p>

        {/* 4 Regional Focal Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
          {/* Focal 1: Bay of Bengal Shelf */}
          <div
            style={{
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-marine-light)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.4rem' }}>
              <Anchor size={16} />
              <span>{t('marine.bdBayOfBengal')}</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
              {language === 'bn'
                ? 'উত্তর বঙ্গোপসাগরের মহীসোপান অঞ্চল যা সমুদ্রিক অমেরুদণ্ডী ও ব্রায়োজোয়ান প্রাণীদের গুরুত্বপূর্ণ ক্ষেত্র।'
                : 'Broad shallow continental shelf receiving massive sediment inputs from the Meghna Delta, supporting diverse benthic polychaetes and molluscs.'}
            </p>
          </div>

          {/* Focal 2: Sundarbans Marine-Estuarine Interface */}
          <div
            style={{
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-marine-light)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.4rem' }}>
              <Compass size={16} />
              <span>{t('marine.bdSundarbans')}</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
              {language === 'bn'
                ? 'সুন্দরবনের মোহনা ও উপকূলীয় জলপথ যেখানে বিশ্বের বৃহত্তম ইরাবতী ডলফিন (Orcaella brevirostris) জনগোষ্ঠী বাস করে।'
                : 'Tidal mangrove channels hosting the largest global population of Irrawaddy dolphins (>5,000 individuals) and horseshoe crabs.'}
            </p>
          </div>

          {/* Focal 3: Saint Martin's Island Reef Platform */}
          <div
            style={{
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-marine-light)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.4rem' }}>
              <Waves size={16} />
              <span>{t('marine.bdSaintMartin')}</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
              {language === 'bn'
                ? 'বাংলাদেশের একমাত্র প্রবালময় দ্বীপ যা পাথুরে তলদেশ, জীবিত প্রবাল, একাইনোডার্ম ও সামুদ্রিক কাছিমের প্রধান প্রজনন ক্ষেত্র।'
                : 'Sole biogenic coral community of Bangladesh providing critical microhabitats for stony corals, sea cucumbers, and sea turtle nesting.'}
            </p>
          </div>

          {/* Focal 4: Swatch of No Ground Submarine Trench */}
          <div
            style={{
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-marine-light)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.4rem' }}>
              <Activity size={16} />
              <span>{t('marine.bdSwatch')}</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
              {language === 'bn'
                ? 'গভীর সমুদ্রের ফাটল যা ৯০০ মিটারের বেশি গভীর; স্পার্ম হোয়েল, ব্রাইডস হোয়েল ও স্পিনার ডলফিনের চারণভূমি।'
                : 'Deep submarine canyon exceeding 900m depth, generating nutrient upwelling that sustains oceanic cetaceans and deep pelagic fauna.'}
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 6: VERIFIED NON-FISH MARINE SPECIES GRID */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
              <ShieldCheck size={22} style={{ color: 'var(--accent-marine-light)' }} />
              <span>
                {language === 'bn' ? 'যাচাইকৃত সামুদ্রিক প্রাণী প্রজাতি' : 'Verified Marine Animal Species'}
              </span>
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              {filteredSpecies.length} {language === 'bn' ? 'টি স্বতন্ত্র যাচাইকৃত প্রজাতি রেকর্ড' : 'unique verified species records matching criteria'}
            </p>
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            {filteredSpecies.length} {t('common.recordsCount')}
          </span>
        </div>

        {filteredSpecies.length > 0 ? (
          <div className="grid-species">
            {filteredSpecies.map(sp => (
              <SpeciesCard key={sp.id} species={sp} />
            ))}
          </div>
        ) : (
          <div
            style={{
              padding: '3rem 2rem',
              textAlign: 'center',
              background: 'rgba(255, 255, 255, 0.02)',
              borderRadius: 'var(--radius-xl)',
              border: '1px dashed var(--border-subtle)',
            }}
          >
            <AlertCircle size={38} style={{ color: '#fbbf24', margin: '0 auto 0.85rem' }} />
            <h3 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '0.5rem', fontWeight: 700 }}>
              {t('marine.noVerifiedRecords')}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', maxWidth: '650px', margin: '0 auto 1.25rem', lineHeight: 1.6 }}>
              {language === 'bn'
                ? 'বায়োটাএলিটের কঠোর প্রাতিষ্ঠানিক নিয়মানুযায়ী প্রাথমিক ভাউচার নমুনা যাচাইকরণ ব্যতীত কোনো কাল্পনিক বা অসত্য জীববৈচিত্র্য রেকর্ড তৈরি করা হয় না। নির্বাচিত ফিল্টারের জন্য বর্তমানে যাচাইকৃত রেকর্ড প্রক্রিয়াধীন রয়েছে।'
                : 'BiotaElite enforces strict institutional verification standards. No unverified or fabricated species records are published to falsely populate clades or regions. Primary voucher curation for this filter is underway.'}
            </p>
            <button
              onClick={resetFilters}
              className="btn btn-secondary btn-sm"
              style={{ fontSize: '0.825rem', padding: '0.4rem 0.9rem' }}
            >
              {t('filter.clear')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
