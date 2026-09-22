// BiotaElite 2.0 Global Fishes Portal (Fishes / মাছসমূহ)
// MASTER-FIX-02+03: Globally scoped, rank-aware, source-driven progressive taxonomy navigation
// Top-Level Hierarchy: Fishes -> Agnatha | Chondrichthyes | Osteichthyes (Actinopterygii, Sarcopterygii)
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
  Fish,
  Info,
  Layers,
  ShieldCheck,
  AlertCircle,
  Globe,
  Compass,
  ArrowRight,
  GitBranch,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  MapPin,
  BookOpen,
} from 'lucide-react';

// Static editorial selection of iconic species — one per major order
// Module-level constant to avoid exhaustive-deps lint warnings
const CURATED_FEATURED_IDS = [
  'sp-tenualosa-ilisha',
  'sp-labeo-rohita',
  'sp-clarias-magur',
  'sp-chiloscyllium-indicum',
  'sp-channa-striata',
] as const;

export const FishPage: React.FC = () => {
  const params = useParams<{
    groupId?: string;
    classId?: string;
    orderId?: string;
    familyId?: string;
    genusId?: string;
    taxonSlug?: string;
  }>();

  let { groupId, classId, orderId, familyId, genusId } = params;
  if (!groupId && !classId && !orderId && !familyId && !genusId && params.taxonSlug) {
    const slug = params.taxonSlug.trim().toLowerCase();
    if (slug.startsWith('group-') || slug === 'agnatha' || slug === 'osteichthyes') {
      groupId = slug;
    } else if (slug.startsWith('class-') || slug === 'chondrichthyes' || slug === 'actinopterygii' || slug === 'sarcopterygii') {
      classId = slug;
    } else if (slug.startsWith('order-') || slug.endsWith('formes')) {
      orderId = slug;
    } else {
      orderId = slug;
    }
  }

  const {
    getSpeciesByModule,
    getTaxonKnowledgeByCategory,
    getTaxonKnowledgeById,
    getTaxonKnowledgeChildren,
    taxa,
    species,
  } = useBiodiversity();

  const { t, language } = useLanguage();

  // Regional Filter State: 'global' vs 'bangladesh'
  const [geoScope, setGeoScope] = useState<'global' | 'bangladesh'>('global');

  // Finfishes strictly (Actinopterygii, Chondrichthyes, Sarcopterygii, Agnatha - excluding Mammalia/marine tetrapods)
  const fishSpecies = useMemo(() => getSpeciesByModule('fish'), [getSpeciesByModule]);
  const fishKnowledgeRecords = useMemo(() => getTaxonKnowledgeByCategory('fish'), [getTaxonKnowledgeByCategory]);

  // Top-level lineages in our normalized model
  const topGroups = useMemo(() => {
    // Top 3 groups: Agnatha (superclass), Chondrichthyes (class), Osteichthyes (superclass)
    return [
      fishKnowledgeRecords.find(r => r.id === 'group-agnatha'),
      fishKnowledgeRecords.find(r => r.id === 'class-chondrichthyes'),
      fishKnowledgeRecords.find(r => r.id === 'superclass-osteichthyes'),
    ].filter(Boolean) as typeof fishKnowledgeRecords;
  }, [fishKnowledgeRecords]);

  // Concise curated featured examples (~5 iconic species across major orders)
  const curatedExamples = useMemo(() => {
    return fishSpecies.filter(s => CURATED_FEATURED_IDS.includes(s.id as typeof CURATED_FEATURED_IDS[number]));
  }, [fishSpecies]);

  // Filtered fish list for Global Catalogue: excludes curated species to prevent repetition
  const filteredCatalogFish = useMemo(() => {
    let base = fishSpecies.filter(s => !(CURATED_FEATURED_IDS as readonly string[]).includes(s.id));
    if (geoScope === 'bangladesh') {
      // In BD scope, show ALL BD fish including curated ones (different editorial intent)
      base = fishSpecies.filter(s => s.bangladeshOccurrence.present);
    }
    return base;
  }, [fishSpecies, geoScope]);

  const getNodeDesc = (desc?: { en?: string; bn?: string } | string) => {
    if (!desc) return '';
    if (typeof desc === 'string') return desc;
    return (language === 'bn' ? desc.bn || desc.en : desc.en || desc.bn) || '';
  };

  // =========================================================================
  // VIEW 1: GENUS-LEVEL VIEW (Progressive Hierarchy)
  // =========================================================================
  if (genusId) {
    const genusNode = taxa.find(t => t.id === genusId || t.scientificName.toLowerCase() === genusId.toLowerCase());
    const parentFamilyNode = genusNode ? taxa.find(t => t.id === (genusNode.parentTaxonId ?? genusNode.parentId)) : undefined;

    const genusSpecies = species.filter(s => {
      if (!s.isPublished) return false;
      const matchGenus = genusNode
        ? s.taxonomy.genus.toLowerCase() === genusNode.scientificName.toLowerCase()
        : s.taxonomy.genus.toLowerCase() === genusId.toLowerCase();
      if (!matchGenus) return false;
      if (geoScope === 'bangladesh') return s.bangladeshOccurrence.present;
      return true;
    });

    return (
      <div className="portal-container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <BackButton fallbackTo={parentFamilyNode ? `/fish/family/${parentFamilyNode.id}` : '/fish'} />
          <Breadcrumbs
            items={[
              { label: t('crumb.species'), to: '/species' },
              { label: t('fish.mainHeading'), to: '/fish' },
              ...(parentFamilyNode ? [{ label: parentFamilyNode.scientificName, to: `/fish/family/${parentFamilyNode.id}` }] : []),
              { label: genusNode ? genusNode.scientificName : genusId },
            ]}
          />
        </div>

        <div className="knowledge-hero fish-theme" style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-emerald-light)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            <GitBranch size={16} />
            <span>{t('rank.genus')}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
            <em className="taxonomic-name-italic">{genusNode ? genusNode.scientificName : genusId}</em>
            {genusNode?.commonNameBn && language === 'bn' && (
              <span style={{ fontSize: '1.4rem', color: 'var(--accent-emerald-light)', marginLeft: '0.75rem', fontWeight: 600 }}>
                ({genusNode.commonNameBn})
              </span>
            )}
            {genusNode?.commonNameEn && language === 'en' && (
              <span style={{ fontSize: '1.4rem', color: 'var(--accent-emerald-light)', marginLeft: '0.75rem', fontWeight: 600 }}>
                ({genusNode.commonNameEn})
              </span>
            )}
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '800px', lineHeight: 1.6 }}>
            {genusNode?.description
              ? getNodeDesc(genusNode.description)
              : language === 'bn'
              ? 'এই গণের অন্তর্ভুক্ত প্রজাতিসমূহ নিচে বৈজ্ঞানিক মনোগ্রাফসহ প্রদর্শিত হয়েছে।'
              : 'Verified species classified within this genus displayed below with full zoological descriptions.'}
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Fish size={20} style={{ color: 'var(--accent-emerald-light)' }} />
            <span>{language === 'bn' ? 'এই গণের অন্তর্ভুক্ত প্রজাতিসমূহ' : 'Species in this Genus'}</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>({genusSpecies.length})</span>
          </h2>

          {genusSpecies.length > 0 ? (
            <div className="grid-species">
              {genusSpecies.map(sp => (
                <SpeciesCard key={sp.id} species={sp} />
              ))}
            </div>
          ) : (
            <div className="empty-state-box">
              <AlertCircle size={28} style={{ color: '#fbbf24', margin: '0 auto 0.5rem' }} />
              <p>{t('species.noResults')}</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW 2: FAMILY-LEVEL VIEW (Progressive Hierarchy)
  // =========================================================================
  if (familyId) {
    const familyNode = taxa.find(t => t.id === familyId || t.scientificName.toLowerCase() === familyId.toLowerCase());
    const parentOrderNode = familyNode ? taxa.find(t => t.id === (familyNode.parentTaxonId ?? familyNode.parentId)) : undefined;

    // Child Genera
    const childGenera = taxa.filter(t => t.rank === 'genus' && (t.parentTaxonId ?? t.parentId) === (familyNode?.id ?? familyId));

    // Species in this family
    const familySpecies = species.filter(s => {
      if (!s.isPublished) return false;
      const matchFam = familyNode
        ? s.taxonomy.family.toLowerCase() === familyNode.scientificName.toLowerCase()
        : s.taxonomy.family.toLowerCase() === familyId.toLowerCase();
      if (!matchFam) return false;
      if (geoScope === 'bangladesh') return s.bangladeshOccurrence.present;
      return true;
    });

    return (
      <div className="portal-container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <BackButton fallbackTo={parentOrderNode ? `/fish/order/${parentOrderNode.id}` : '/fish'} />
          <Breadcrumbs
            items={[
              { label: t('crumb.species'), to: '/species' },
              { label: t('fish.mainHeading'), to: '/fish' },
              ...(parentOrderNode ? [{ label: parentOrderNode.scientificName, to: `/fish/order/${parentOrderNode.id}` }] : []),
              { label: familyNode ? familyNode.scientificName : familyId },
            ]}
          />
        </div>

        <div className="knowledge-hero fish-theme" style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-emerald-light)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            <Layers size={16} />
            <span>{t('rank.family')}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
            <span className="scientific-name">{familyNode ? familyNode.scientificName : familyId}</span>
            {familyNode?.commonNameBn && language === 'bn' && (
              <span style={{ fontSize: '1.4rem', color: 'var(--accent-emerald-light)', marginLeft: '0.75rem', fontWeight: 600 }}>
                ({familyNode.commonNameBn})
              </span>
            )}
            {familyNode?.commonNameEn && language === 'en' && (
              <span style={{ fontSize: '1.4rem', color: 'var(--accent-emerald-light)', marginLeft: '0.75rem', fontWeight: 600 }}>
                ({familyNode.commonNameEn})
              </span>
            )}
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '800px', lineHeight: 1.6 }}>
            {familyNode?.description
              ? getNodeDesc(familyNode.description)
              : language === 'bn'
              ? 'এই গোত্রের অধীনস্থ গণ ও প্রজাতিসমূহ নিচে প্রামাণ্য বিবরণসহ উপস্থাপন করা হলো।'
              : 'Genera and species classified under this family documented with authoritative diagnoses.'}
          </p>
        </div>

        {/* Child Genera */}
        {childGenera.length > 0 && (
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <GitBranch size={18} style={{ color: 'var(--accent-emerald-light)' }} />
              <span>{language === 'bn' ? 'অন্তর্ভুক্ত গণসমূহ' : 'Genera in this Family'}</span>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
              {childGenera.map(gen => (
                <Link
                  key={gen.id}
                  to={`/fish/genus/${gen.id}`}
                  style={{
                    display: 'block',
                    padding: '1rem 1.25rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  className="hover-card"
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: 700, fontSize: '1.1rem', color: '#ffffff' }}>
                      <em className="taxonomic-name-italic">{gen.scientificName}</em>
                    </span>
                    <ChevronRight size={16} style={{ color: 'var(--text-muted)' }} />
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--accent-emerald-light)', marginTop: '0.35rem' }}>
                    {language === 'bn' ? gen.commonNameBn || gen.commonNameEn : gen.commonNameEn || gen.commonNameBn}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Verified Species */}
        <div>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Fish size={20} style={{ color: 'var(--accent-emerald-light)' }} />
            <span>{language === 'bn' ? 'যাচাইকৃত প্রজাতিসমূহ' : 'Verified Species'}</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>({familySpecies.length})</span>
          </h2>
          {familySpecies.length > 0 ? (
            <div className="grid-species">
              {familySpecies.map(sp => (
                <SpeciesCard key={sp.id} species={sp} />
              ))}
            </div>
          ) : (
            <div className="empty-state-box">
              <AlertCircle size={28} style={{ color: '#fbbf24', margin: '0 auto 0.5rem' }} />
              <p>{t('species.noResults')}</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW 3: ORDER-LEVEL VIEW (Exact 11 Knowledge Categories & Child Families)
  // =========================================================================
  if (orderId) {
    const cleanOrderId = orderId.trim().toLowerCase();
    let orderRecord =
      getTaxonKnowledgeById(orderId) ||
      fishKnowledgeRecords.find(
        r =>
          r.id.toLowerCase() === cleanOrderId ||
          (r.taxonId && r.taxonId.toLowerCase() === cleanOrderId) ||
          r.scientificName.toLowerCase() === cleanOrderId
      );

    if (!orderRecord) {
      const matchedTaxonNode = taxa.find(
        t =>
          t.id.toLowerCase() === cleanOrderId ||
          t.scientificName.toLowerCase() === cleanOrderId
      );
      if (matchedTaxonNode) {
        orderRecord = fishKnowledgeRecords.find(
          r =>
            r.taxonId === matchedTaxonNode.id ||
            r.scientificName.toLowerCase() === matchedTaxonNode.scientificName.toLowerCase()
        );
      }
    }

    if (!orderRecord) {
      return (
        <div className="portal-container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <BackButton fallbackTo="/fish" />
            <Breadcrumbs
              items={[
                { label: t('crumb.species'), to: '/species' },
                { label: t('fish.mainHeading'), to: '/fish' },
                { label: 'Order Not Found' },
              ]}
            />
          </div>
          <div className="empty-state-box">
            <h3>{language === 'bn' ? 'বর্গ রেকর্ড পাওয়া যায়নি' : 'Order Record Not Found'}</h3>
            <p>{language === 'bn' ? 'অনুরোধকৃত বর্গের জ্ঞান রেকর্ড বিদ্যমান নেই।' : 'The requested order knowledge record does not exist.'}</p>
            <Link to="/fish" className="btn btn-primary" style={{ marginTop: '1rem' }}>
              {t('fish.backToFishClasses')}
            </Link>
          </div>
        </div>
      );
    }

    const classNameInHierarchy = orderRecord.classificationHierarchy.find(h => h.rank === 'class' || h.rank === 'superclass')?.name;
    const parentClassRecord = fishKnowledgeRecords.find(
      r => r.scientificName === classNameInHierarchy
    );

    // Find child families in taxa graph
    const orderTaxonNode = taxa.find(t => t.id === orderRecord.taxonId || t.scientificName.toLowerCase() === orderRecord.scientificName.toLowerCase());
    const childFamilies = taxa.filter(
      t => t.rank === 'family' && (t.parentTaxonId === orderTaxonNode?.id || t.parentId === orderTaxonNode?.id)
    );

    return (
      <div className="portal-container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <BackButton fallbackTo={parentClassRecord ? `/fish/class/${parentClassRecord.id}` : '/fish'} />
          <Breadcrumbs
            items={[
              { label: t('crumb.species'), to: '/species' },
              { label: t('fish.mainHeading'), to: '/fish' },
              ...(parentClassRecord
                ? [{ label: parentClassRecord.scientificName, to: `/fish/class/${parentClassRecord.id}` }]
                : []),
              { label: orderRecord.scientificName },
            ]}
          />
        </div>

        {/* 11-Point Knowledge Standard */}
        <TaxonKnowledgeDetail
          record={orderRecord}
          category="fish"
          fallbackPath={parentClassRecord ? `/fish/class/${parentClassRecord.id}` : '/fish'}
        />

        {/* Progressive Child Families Section */}
        {childFamilies.length > 0 && (
          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-subtle)' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Layers size={20} style={{ color: 'var(--accent-emerald-light)' }} />
              <span>{language === 'bn' ? 'এই বর্গের অন্তর্ভুক্ত গোত্রসমূহ (Family Exploration)' : 'Families in this Order'}</span>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
              {childFamilies.map(fam => (
                <Link
                  key={fam.id}
                  to={`/fish/family/${fam.id}`}
                  style={{
                    display: 'block',
                    padding: '1.2rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  className="hover-card"
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: 700, fontSize: '1.15rem', color: '#ffffff' }}>
                      {fam.scientificName}
                    </span>
                    <ChevronRight size={16} style={{ color: 'var(--text-muted)' }} />
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--accent-emerald-light)', marginTop: '0.35rem', fontWeight: 500 }}>
                    {language === 'bn' ? fam.commonNameBn || fam.commonNameEn : fam.commonNameEn || fam.commonNameBn}
                  </div>
                  {fam.description && (
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem', lineHeight: 1.4 }}>
                      {getNodeDesc(fam.description)}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // =========================================================================
  // VIEW 4: CLASS / GROUP CONCISE LANDING (Agnatha, Chondrichthyes, Osteichthyes, etc.)
  // =========================================================================
  if (classId || groupId) {
    const targetId = classId || groupId;
    const cleanTarget = targetId?.trim().toLowerCase() || '';

    // Direct knowledge lookup by ID, taxonId, or scientificName
    let groupRecord = getTaxonKnowledgeById(targetId!);
    if (!groupRecord) {
      groupRecord = fishKnowledgeRecords.find(
        r =>
          r.id.toLowerCase() === cleanTarget ||
          (r.taxonId && r.taxonId.toLowerCase() === cleanTarget) ||
          r.scientificName.toLowerCase() === cleanTarget
      );
    }

    // Fallback: If not directly found in knowledge records, see if targetId matches a TaxonNode in the normalized graph
    const matchedTaxonNode = taxa.find(
      t =>
        t.id.toLowerCase() === cleanTarget ||
        t.scientificName.toLowerCase() === cleanTarget ||
        (t.name && t.name.toLowerCase() === cleanTarget)
    );

    if (!groupRecord && matchedTaxonNode) {
      // Attempt to find knowledge record corresponding to this taxon
      groupRecord = fishKnowledgeRecords.find(
        r =>
          r.taxonId === matchedTaxonNode.id ||
          r.scientificName.toLowerCase() === matchedTaxonNode.scientificName.toLowerCase()
      );
    }

    if (!groupRecord) {
      return (
        <div className="portal-container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <BackButton fallbackTo="/fish" />
            <Breadcrumbs
              items={[
                { label: t('crumb.species'), to: '/species' },
                { label: t('fish.mainHeading'), to: '/fish' },
                { label: 'Taxon Not Found' },
              ]}
            />
          </div>
          <div className="empty-state-box">
            <h3>{language === 'bn' ? 'ট্যাক্সন রেকর্ড পাওয়া যায়নি' : 'Taxon Record Not Found'}</h3>
            <p>{language === 'bn' ? 'অনুরোধকৃত মৎস্য ট্যাক্সনের জ্ঞান রেকর্ড বিদ্যমান নেই।' : 'The requested fish taxon knowledge record does not exist.'}</p>
            <Link to="/fish" className="btn btn-primary" style={{ marginTop: '1rem' }}>
              {t('fish.backToFishClasses')}
            </Link>
          </div>
        </div>
      );
    }

    // Identify child classes/orders
    const childKnowledgeOrders = getTaxonKnowledgeChildren(groupRecord.id).filter(
      r => r.rank === 'order' || r.rank === 'class'
    );

    // If Osteichthyes, its child classes are Actinopterygii and Sarcopterygii
    const isOsteichthyes = groupRecord.scientificName.toLowerCase() === 'osteichthyes';
    const osteichthyesClasses = isOsteichthyes
      ? [
          fishKnowledgeRecords.find(r => r.id === 'class-actinopterygii'),
          fishKnowledgeRecords.find(r => r.id === 'class-sarcopterygii'),
        ].filter(Boolean) as typeof fishKnowledgeRecords
      : [];

    // Verified species in database for this group
    const verifiedLiveSpecies = fishSpecies.filter(s => {
      if (groupRecord.rank === 'superclass' && groupRecord.scientificName === 'Osteichthyes') {
        return ['Actinopterygii', 'Sarcopterygii'].includes(s.taxonomy.class);
      }
      if (groupRecord.rank === 'superclass' && groupRecord.scientificName === 'Agnatha') {
        return ['Myxini', 'Petromyzontida'].includes(s.taxonomy.class);
      }
      return s.taxonomy.class.toLowerCase() === groupRecord.scientificName.toLowerCase();
    });

    // Documented Bangladesh occurrence subset
    const bdFishSpecies = verifiedLiveSpecies.filter(s => s.bangladeshOccurrence?.present);

    // Display concise examples: strictly ~4-5 verified examples
    const displayExamples = verifiedLiveSpecies.slice(0, 5);

    const primaryCommon = language === 'bn' ? groupRecord.bengaliName : groupRecord.englishName;

    return (
      <div className="portal-container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <BackButton fallbackTo="/fish" />
          <Breadcrumbs
            items={[
              { label: t('crumb.species'), to: '/species' },
              { label: t('fish.mainHeading'), to: '/fish' },
              { label: groupRecord.scientificName },
            ]}
          />
        </div>

        {/* Hero Card */}
        <div className="knowledge-hero fish-theme" style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-emerald-light)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.6rem' }}>
            <Fish size={16} />
            <span>{t(`rank.${groupRecord.rank}`)}</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.6rem)', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
            <span className="scientific-name">{groupRecord.scientificName}</span>
            <span style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', color: 'var(--accent-emerald-light)', marginLeft: '0.75rem', fontWeight: 600 }}>
              ({primaryCommon})
            </span>
          </h1>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '850px', lineHeight: 1.65, marginBottom: '1.5rem' }}>
            {groupRecord.shortDescription[language] || groupRecord.shortDescription.en}
          </p>

          {/* Key Diagnostic Features Summary */}
          <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-emerald-light)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem' }}>
              {t('knowledge.identifyingChars')}
            </h3>
            <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
              {groupRecord.diagnosticCharacteristics[language] || groupRecord.diagnosticCharacteristics.en}
            </p>
            {groupRecord.diagnosticCharacteristics.keyFeatures && (
              <ul style={{ paddingLeft: '1.25rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                {(groupRecord.diagnosticCharacteristics.keyFeatures[language] || groupRecord.diagnosticCharacteristics.keyFeatures.en).map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Dynamic Metrics: Global Lineage Status & Contextual Regional Occurrence */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Globe size={16} style={{ color: 'var(--accent-emerald-light)' }} />
              <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                {t('knowledge.globalCatalogued')}{' '}
                <strong style={{ color: '#ffffff' }}>{verifiedLiveSpecies.length}</strong>
              </span>
            </div>

            {childKnowledgeOrders.length > 0 && (
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                {language === 'bn' ? 'নথিবদ্ধ বর্গ:' : 'Documented Orders:'}{' '}
                <strong style={{ color: '#ffffff' }}>{childKnowledgeOrders.length}</strong>
              </div>
            )}

            {/* Regional Bangladesh Occurrence Context */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.25rem 0.65rem',
                borderRadius: 'var(--radius-sm)',
                background: bdFishSpecies.length > 0 ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <MapPin size={14} style={{ color: bdFishSpecies.length > 0 ? 'var(--accent-emerald-light)' : 'var(--text-muted)' }} />
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                {t('knowledge.regionalContext')}{' '}
                <strong style={{ color: bdFishSpecies.length > 0 ? '#ffffff' : 'var(--text-muted)' }}>
                  {bdFishSpecies.length > 0
                    ? (language === 'bn' ? `${bdFishSpecies.length}টি নথিবদ্ধ` : `${bdFishSpecies.length} recorded`)
                    : (language === 'bn' ? 'নথিবদ্ধ নেই (বহির্দেশীয়)' : 'Not recorded (Extralimital)')}
                </strong>
              </span>
            </div>
          </div>
        </div>

        {/* If Osteichthyes: Present Child Classes (Actinopterygii and Sarcopterygii) */}
        {isOsteichthyes && osteichthyesClasses.length > 0 && (
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Layers size={20} style={{ color: 'var(--accent-emerald-light)' }} />
              <span>{language === 'bn' ? 'অস্টিইকথিসের অন্তর্ভুক্ত প্রধান ২ শ্রেণী' : 'The 2 Classes of Bony Fishes'}</span>
            </h2>
            <div className="knowledge-grid">
              {osteichthyesClasses.map(cls => (
                <TaxonKnowledgeCard
                  key={cls.id}
                  record={cls}
                  category="fish"
                  linkTo={`/fish/class/${cls.id}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Subclasses Breakdown if available (e.g. for Chondrichthyes, Sarcopterygii) */}
        {groupRecord.subclasses && groupRecord.subclasses.length > 0 && (
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Layers size={20} style={{ color: 'var(--accent-emerald-light)' }} />
              <span>{t('fish.subclasses')}</span>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
              {groupRecord.subclasses.map(sub => (
                <div
                  key={sub.id}
                  style={{
                    padding: '1.5rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-lg)',
                  }}
                >
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-emerald-light)', fontWeight: 700, marginBottom: '0.35rem' }}>
                    {t('rank.subclass')}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>
                    <em className="taxonomic-name-italic">{sub.name}</em>
                  </h3>
                  <div style={{ fontSize: '0.9rem', color: 'var(--accent-emerald-light)', fontWeight: 600, marginBottom: '0.75rem' }}>
                    {language === 'bn' ? sub.commonBn : sub.commonEn}
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                    {language === 'bn' ? sub.descriptionBn : sub.descriptionEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Documented Orders in this Group */}
        {childKnowledgeOrders.length > 0 && (
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Compass size={20} style={{ color: 'var(--accent-emerald-light)' }} />
                <span>{t('fish.ordersInClass')}</span>
              </h2>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                {childKnowledgeOrders.length} {language === 'bn' ? 'টি বর্গ' : 'Orders'}
              </span>
            </div>

            <div className="knowledge-grid">
              {childKnowledgeOrders.map(ord => {
                const targetLink =
                  ord.rank === 'class'
                    ? `/fish/class/${ord.id}`
                    : ord.rank === 'superclass'
                    ? `/fish/group/${ord.id}`
                    : `/fish/order/${ord.id}`;
                return (
                  <TaxonKnowledgeCard
                    key={ord.id}
                    record={ord}
                    category="fish"
                    linkTo={targetLink}
                  />
                );
              })}
            </div>
          </div>
        )}

        {/* Concise Verified Examples Section (~4-5 verified examples) */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                <CheckCircle2 size={20} style={{ color: 'var(--accent-emerald-light)' }} />
                <span>{language === 'bn' ? 'যাচাইকৃত প্রামাণ্য উদাহরণ' : 'Concise Verified Examples'}</span>
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                {language === 'bn' ? 'গুণমানভিত্তিক সংক্ষিপ্ত প্রামাণ্য প্রজাতির তালিকা (~৪-৫টি নমুনা)' : 'Quality-over-quantity concise representation (~4–5 verified examples)'}
              </p>
            </div>
          </div>

          {displayExamples.length > 0 ? (
            <div className="grid-species">
              {displayExamples.map(sp => (
                <SpeciesCard key={sp.id} species={sp} />
              ))}
            </div>
          ) : (
            <div
              style={{
                padding: '2rem 1.5rem',
                textAlign: 'left',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <BookOpen size={20} style={{ color: 'var(--accent-emerald-light)' }} />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                  {language === 'bn' ? 'বৈশ্বিক প্রামাণ্য প্রতিনিধি ট্যাক্সা (Global Representative Taxa)' : 'Global Representative Taxa (Authoritative Literature)'}
                </h3>
              </div>

              {groupRecord.examplesSummary && (
                <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                  {groupRecord.examplesSummary[language] || groupRecord.examplesSummary.en}
                </p>
              )}

              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.6rem',
                  padding: '0.85rem 1rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <Info size={16} style={{ color: '#38bdf8', flexShrink: 0, marginTop: '2px' }} />
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  <strong style={{ color: '#38bdf8', display: 'block', marginBottom: '0.2rem' }}>
                    {language === 'bn' ? 'আঞ্চলিক ভৌগোলিক প্রেক্ষাপট:' : 'Regional Geographic Context:'}
                  </strong>
                  {language === 'bn'
                    ? 'এই প্রাচীন মৎস্য গোষ্ঠীর জীবিত সদস্যরা বিশ্বব্যাপী শীতল ও গভীর সাগরে বিস্তৃত হলেও বাংলাদেশের গ্রীষ্মমণ্ডলীয় জলসীমায় কোনো জীবিত জনসংখ্যা প্রাকৃতিকভাবে উপস্থিত নেই (বহির্দেশীয় ট্যাক্সন)।'
                    : 'Living members of this evolutionary lineage occur in cold-temperate and abyssal global oceans; populations are naturally extralimital to tropical Bangladesh waters.'}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW 5: FISH PORTAL MAIN LANDING (Title strictly "Fishes / মাছসমূহ")
  // =========================================================================

  return (
    <div className="portal-container">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
        <BackButton fallbackTo="/species" />
        <Breadcrumbs items={[{ label: t('crumb.species'), to: '/species' }, { label: t('fish.mainHeading') }]} />
      </div>

      {/* Hero Banner — STRICTLY "Fishes / মাছসমূহ" */}
      <div className="knowledge-hero fish-theme" style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.75rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-emerald-light)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            <Fish size={16} />
            <span>{t('fish.portalTitle')}</span>
          </div>

          {/* Regional Geographic Scope Selector */}
          <div style={{ display: 'inline-flex', background: 'rgba(0, 0, 0, 0.3)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-full)', padding: '0.25rem' }}>
            <button
              onClick={() => setGeoScope('global')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.35rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.8rem',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                background: geoScope === 'global' ? 'var(--accent-emerald)' : 'transparent',
                color: geoScope === 'global' ? '#ffffff' : 'var(--text-muted)',
                transition: 'all 0.2s ease',
              }}
            >
              <Globe size={14} />
              <span>{t('fish.allGlobal')}</span>
            </button>
            <button
              onClick={() => setGeoScope('bangladesh')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.35rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.8rem',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                background: geoScope === 'bangladesh' ? 'var(--accent-emerald)' : 'transparent',
                color: geoScope === 'bangladesh' ? '#ffffff' : 'var(--text-muted)',
                transition: 'all 0.2s ease',
              }}
            >
              <ShieldCheck size={14} />
              <span>{t('fish.bangladeshOnly')}</span>
            </button>
          </div>
        </div>

        {/* Exact Main Heading */}
        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3rem)', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
          {t('fish.mainHeading')}
        </h1>

        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '880px', lineHeight: 1.65, marginBottom: '1.25rem' }}>
          {t('fish.lead')}
        </p>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.45rem 0.85rem', background: 'rgba(16, 185, 129, 0.12)', borderRadius: 'var(--radius-md)', fontSize: '0.825rem', color: 'var(--accent-emerald-light)' }}>
          <Info size={15} />
          <span>{t('fish.onlyFinfishNote')}</span>
        </div>
      </div>

      {/* SECTION 1: TOP-LEVEL FISH HIERARCHY (Agnatha, Chondrichthyes, Osteichthyes) */}
      <div style={{ marginBottom: '3.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
              <Layers size={22} style={{ color: 'var(--accent-emerald-light)' }} />
              <span>{t('fish.topGroups')}</span>
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              {language === 'bn'
                ? 'আইসিজেডএন ও নেলসন (২০১৬) স্বীকৃত শীর্ষ ৩ মৎস্য শাখা: চোয়ালবিহীন (Agnatha), তরুণাস্থিময় (Chondrichthyes) এবং অস্থিময় (Osteichthyes)'
                : 'Recognized 3 top-level fish lineages: Jawless (Agnatha), Cartilaginous (Chondrichthyes), and Bony (Osteichthyes).'}
            </p>
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            3 {language === 'bn' ? 'টি প্রধান শাখা' : 'Primary Lineages'}
          </span>
        </div>

        <div className="knowledge-grid">
          {topGroups.map(grp => (
            <TaxonKnowledgeCard
              key={grp.id}
              record={grp}
              category="fish"
              linkTo={grp.rank === 'class' ? `/fish/class/${grp.id}` : `/fish/group/${grp.id}`}
            />
          ))}
        </div>
      </div>

      {/* SECTION 2: CURATED ICONIC FISH SPECIES — Editorial selection with distinct visual identity */}
      <div
        style={{
          marginBottom: '3.5rem',
          padding: '1.5rem',
          borderRadius: 'var(--radius-xl)',
          background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.07) 0%, rgba(9, 14, 17, 0.0) 100%)',
          border: '1px solid rgba(217, 119, 6, 0.25)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem', borderBottom: '1px solid rgba(217, 119, 6, 0.2)', paddingBottom: '0.75rem' }}>
          <div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
              <Sparkles size={20} style={{ color: '#fbbf24' }} />
              <span>{language === 'bn' ? 'প্রামাণ্য নির্বাচিত আইকনিক মৎস্য প্রজাতি' : 'Curated Iconic Fish Species'}</span>
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              {language === 'bn'
                ? 'সম্পাদকীয়ভাবে বাছাইকৃত শীর্ষ ৫টি প্রতিনিধি প্রজাতি — পৃথক বর্গ ও গোত্রের শ্রেণীবিন্যাসীয় বৈচিত্র্য প্রদর্শন করে।'
                : 'Editorially curated selection of 5 verified representative species, each from a distinct order, demonstrating the morphological and taxonomic breadth of the global fish fauna.'}
            </p>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.35rem 0.75rem', borderRadius: '20px', background: 'rgba(217, 119, 6, 0.15)', border: '1px solid rgba(217, 119, 6, 0.4)', fontSize: '0.75rem', fontWeight: 700, color: '#fbbf24', whiteSpace: 'nowrap' }}>
            <CheckCircle2 size={13} />
            {language === 'bn' ? 'বৈজ্ঞানিকভাবে যাচাইকৃত' : 'Scientifically Verified'}
          </div>
        </div>

        <div className="grid-species">
          {curatedExamples.map(fish => (
            <SpeciesCard key={fish.id} species={fish} featured={true} />
          ))}
        </div>
      </div>

      {/* SECTION 3: COMPLETE FISH CATALOG EXPLORATION */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
          <div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
              <Fish size={20} style={{ color: 'var(--accent-emerald-light)' }} />
              <span>
                {geoScope === 'bangladesh'
                  ? language === 'bn' ? 'বাংলাদেশে নথিবদ্ধ মৎস্য প্রজাতিসমূহ' : 'Documented Fishes of Bangladesh'
                  : language === 'bn' ? 'সকল বৈশ্বিক মৎস্য ক্যাটালগ' : 'Global Fish Catalogue'}
              </span>
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              {filteredCatalogFish.length} {language === 'bn' ? 'টি যাচাইকৃত প্রজাতি' : 'verified species records'}
            </p>
          </div>

          <Link to="/taxonomy" className="btn btn-sm btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <Compass size={14} />
            <span>{language === 'bn' ? 'সম্পূর্ণ ট্যাক্সন বৃক্ষ দেখুন' : 'Explore Taxonomy Tree'}</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid-species">
          {filteredCatalogFish.map(fish => (
            <SpeciesCard key={fish.id} species={fish} />
          ))}
        </div>
      </div>
    </div>
  );
};
