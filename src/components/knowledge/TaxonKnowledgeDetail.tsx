// BiotaElite 2.0 Taxon Knowledge Standard Component
// Implements both the 11-Point Order Knowledge Standard and Biology-Specific Group Detail Framework
import React from 'react';
import { Link } from 'react-router-dom';
import type { TaxonKnowledgeRecord, SpeciesRecord } from '../../types/biodiversity';
import { getSpeciesPriorityRank } from '../../types/biodiversity';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useLanguage } from '../../context/LanguageContext';
import { SpeciesCard } from '../species/SpeciesCard';
import {
  BookOpen,
  Fish,
  Waves,
  GitBranch,
  ChevronRight,
  Info,
  CheckCircle2,
  Globe,
  MapPin,
  Layers,
  ArrowLeft,
} from 'lucide-react';

interface TaxonKnowledgeDetailProps {
  record: TaxonKnowledgeRecord;
  category?: 'fish' | 'marine_non_fish' | 'marine' | 'general' | 'zoology';
  fallbackPath?: string;
}

export const TaxonKnowledgeDetail: React.FC<TaxonKnowledgeDetailProps> = ({
  record,
  category,
  fallbackPath,
}) => {
  const { species } = useBiodiversity();
  const { t, language } = useLanguage();

  const isFish = record.category === 'fish' || category === 'fish';
  const isMarine = record.category === 'marine_non_fish' || category === 'marine';
  const themeClass = isFish ? 'fish-theme' : isMarine ? 'marine-theme' : 'taxonomy-theme';
  const accentColor = isFish ? 'var(--accent-emerald-light)' : isMarine ? 'var(--accent-marine-light)' : '#c084fc';

  // Curated order index for tiebreaker within the same priority tier
  const exampleIdOrder = new Map(record.exampleSpeciesIds.map((id, idx) => [id, idx]));
  const sortCuratedSpecies = (a: SpeciesRecord, b: SpeciesRecord): number => {
    const pA = getSpeciesPriorityRank(a);
    const pB = getSpeciesPriorityRank(b);
    if (pA !== pB) return pA - pB;
    const idxA = exampleIdOrder.has(a.id) ? exampleIdOrder.get(a.id)! : 999;
    const idxB = exampleIdOrder.has(b.id) ? exampleIdOrder.get(b.id)! : 999;
    if (idxA !== idxB) return idxA - idxB;
    return a.scientificName.localeCompare(b.scientificName);
  };

  // Dynamic species count matching this taxon node
  const liveSpeciesInTaxon = species.filter(s => {
    if (!s.isPublished) return false;
    if (record.id === 'group-fishes') {
      return s.module === 'fish' || ['Actinopterygii', 'Chondrichthyes', 'Sarcopterygii', 'Myxini', 'Petromyzonti'].includes(s.taxonomy.class);
    }
    if (record.rank === 'class' || record.rank === 'superclass') {
      return s.taxonomy.class.toLowerCase() === record.scientificName.toLowerCase();
    }
    if (record.rank === 'order') {
      return s.taxonomy.order.toLowerCase() === record.scientificName.toLowerCase();
    }
    if (record.rank === 'infraorder' || record.rank === 'suborder') {
      return (
        s.taxonomy.order.toLowerCase() === record.scientificName.toLowerCase() ||
        (record.id === 'order-cetacea' && ['Delphinidae', 'Balaenopteridae', 'Platanistidae'].includes(s.taxonomy.family)) ||
        (record.id === 'order-pinnipedia' && ['Phocidae', 'Otariidae', 'Odobenidae'].includes(s.taxonomy.family))
      );
    }
    if (record.rank === 'superfamily' || record.rank === 'subfamily' || record.rank === 'family') {
      return (
        s.taxonomy.family.toLowerCase() === record.scientificName.toLowerCase() ||
        (record.id === 'order-chelonioidea' && ['Cheloniidae', 'Dermochelyidae'].includes(s.taxonomy.family)) ||
        (record.id === 'order-hydrophiinae' && s.taxonomy.family === 'Elapidae' && (s.taxonomy.genus === 'Hydrophis' || s.scientificName.toLowerCase().includes('hydrophis')))
      );
    }
    if (record.rank === 'phylum') {
      return s.taxonomy.phylum.toLowerCase() === record.scientificName.toLowerCase();
    }
    return false;
  }).sort(sortCuratedSpecies);

  // Regional Bangladesh occurrence subset
  const bdSpeciesInTaxon = liveSpeciesInTaxon.filter(s => s.bangladeshOccurrence?.present);

  // Example canonical species from database: combine curated examples and live matching species
  const matchingExampleSpecies = species.filter(s =>
    record.exampleSpeciesIds.includes(s.id) ||
    record.exampleSpeciesIds.some(id => s.scientificName.toLowerCase().includes(id.replace('sp-', '').replace('-', ' ')))
  );
  const combinedMap = new Map<string, SpeciesRecord>();
  matchingExampleSpecies.forEach(s => combinedMap.set(s.id, s));
  liveSpeciesInTaxon.forEach(s => combinedMap.set(s.id, s));

  const canonicalSpeciesList = (combinedMap.size > 0 ? Array.from(combinedMap.values()) : liveSpeciesInTaxon).sort(sortCuratedSpecies);

  const primaryCommonName = language === 'bn' ? record.bengaliName : record.englishName;
  const secondaryCommonName = language === 'bn' ? record.englishName : record.bengaliName;

  const keyFeaturesList = record.diagnosticCharacteristics.keyFeatures
    ? record.diagnosticCharacteristics.keyFeatures[language] || record.diagnosticCharacteristics.keyFeatures.en
    : [];

  return (
    <div className={`knowledge-detail-wrapper ${themeClass}`}>
      {/* Hero Header */}
      <div className={`knowledge-hero ${themeClass}`}>
        {fallbackPath && (
          <div style={{ marginBottom: '1rem' }}>
            <Link to={fallbackPath} className="btn btn-secondary btn-sm" style={{ gap: '0.4rem', fontSize: '0.8rem', padding: '0.3rem 0.75rem' }}>
              <ArrowLeft size={14} />
              <span>{t('tax.backToTaxonomy')}</span>
            </Link>
          </div>
        )}

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
              background: isFish ? 'rgba(16, 185, 129, 0.2)' : isMarine ? 'rgba(2, 132, 199, 0.2)' : 'rgba(168, 85, 247, 0.2)',
              color: accentColor,
            }}
          >
            {isFish ? <Fish size={14} /> : isMarine ? <Waves size={14} /> : <Layers size={14} />}
            <span>{t(`rank.${record.rank}`)}</span>
          </div>

          <span
            style={{
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            {record.id}
          </span>
        </div>

        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem', lineHeight: 1.2 }}>
          <span className="scientific-name" style={{ marginRight: '0.75rem' }}>
            {record.scientificName}
          </span>
          <span
            style={{
              fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
              color: accentColor,
              fontWeight: 600,
            }}
          >
            ({primaryCommonName})
          </span>
        </h1>

        {secondaryCommonName && (
          <div style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
            {language === 'bn' ? 'English:' : 'বাংলা:'}{' '}
            <span style={{ color: 'var(--text-secondary)' }}>
              {secondaryCommonName}
            </span>
          </div>
        )}

        {/* Subclass breakdown if present */}
        {record.subclasses && record.subclasses.length > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              {t('fish.subclasses')}:
            </span>
            {record.subclasses.map(sc => (
              <span key={sc.id} className="subclass-tag">
                <em className="taxonomic-name-italic">{sc.name}</em> ({language === 'bn' ? sc.commonBn : sc.commonEn})
              </span>
            ))}
          </div>
        )}

        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '900px', lineHeight: '1.65', marginBottom: '1.5rem' }}>
          {record.shortDescription[language] || record.shortDescription.en}
        </p>

        {/* Dynamic Metrics: Global Taxon Hierarchy & Contextual Regional Occurrence */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          {/* Primary Global Metric: Curated Global Species in BiotaElite */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Globe size={16} style={{ color: isFish ? 'var(--accent-emerald-light)' : 'var(--accent-marine-light)' }} />
            <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              {t('tax.curatedGlobalSpecies') || 'Curated Global Species'}:{' '}
              <strong style={{ color: '#ffffff' }}>{liveSpeciesInTaxon.length}</strong>
            </span>
          </div>

          {/* Child Orders count if applicable */}
          {record.orders && record.orders.length > 0 && (
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              {language === 'bn' ? 'নথিবদ্ধ বর্গ:' : 'Documented Orders:'}{' '}
              <strong style={{ color: '#ffffff' }}>{record.orders.length}</strong>
            </div>
          )}

          {/* Secondary Contextual Regional Occurrence: Clearly labeled as Bangladesh Regional Context */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.25rem 0.65rem',
              borderRadius: 'var(--radius-sm)',
              background: bdSpeciesInTaxon.length > 0 ? 'rgba(59, 130, 246, 0.12)' : 'rgba(255, 255, 255, 0.04)',
              border: bdSpeciesInTaxon.length > 0 ? '1px solid rgba(59, 130, 246, 0.3)' : '1px solid var(--border-subtle)',
            }}
          >
            <MapPin size={14} style={{ color: bdSpeciesInTaxon.length > 0 ? '#60a5fa' : 'var(--text-muted)' }} />
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              {t('tax.bangladeshRegionalContext') || 'Bangladesh Regional Context'}:{' '}
              <strong style={{ color: bdSpeciesInTaxon.length > 0 ? '#93c5fd' : 'var(--text-muted)' }}>
                {bdSpeciesInTaxon.length > 0
                  ? (language === 'bn' ? `${bdSpeciesInTaxon.length}টি নথিবদ্ধ` : `${bdSpeciesInTaxon.length} recorded`)
                  : (language === 'bn' ? 'নথিবদ্ধ নেই (বহির্দেশীয়)' : '0 records (Extralimital)')}
              </strong>
            </span>
          </div>
        </div>
      </div>

      {/* Educational Notice Banner */}
      {record.notes && (
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.85rem',
            padding: '1.25rem 1.5rem',
            background: 'rgba(217, 119, 6, 0.08)',
            border: '1px solid rgba(217, 119, 6, 0.25)',
            borderRadius: 'var(--radius-lg)',
            marginBottom: '2rem',
          }}
        >
          <Info size={20} style={{ color: '#fbbf24', flexShrink: 0, marginTop: '3px' }} />
          <div style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            <strong style={{ color: '#fbbf24', display: 'block', marginBottom: '0.2rem' }}>
              {language === 'bn' ? 'প্রাণিবিজ্ঞান পাঠ ও স্বচ্ছতা বিজ্ঞপ্তি' : 'Zoological & Transparency Notice'}
            </strong>
            {record.notes}
          </div>
        </div>
      )}

      {record.sections && record.sections.length > 0 ? (
        /* MODE B: Configurable Biology-Specific Major Groups Knowledge Hub */
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BookOpen size={20} style={{ color: accentColor }} />
              <span>{t('tax.zoologicalSections')}</span>
            </h2>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Authoritative Zoological Reference Framework
            </span>
          </div>

          <div className="knowledge-nine-points-container">
            {record.sections
              .slice()
              .sort((a, b) => a.order - b.order)
              .map((sec, idx) => (
                <div key={sec.key || idx} className="knowledge-point-card">
                  <div className="knowledge-point-header">
                    <span className="point-number-badge">{sec.order || idx + 1}</span>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
                      {language === 'bn' ? sec.titleBn : sec.titleEn}
                    </h3>
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: sec.keyFeatures ? '1rem' : '0' }}>
                    {language === 'bn' ? sec.contentBn : sec.contentEn}
                  </p>

                  {sec.keyFeatures && (
                    <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.925rem', marginTop: '0.75rem' }}>
                      {(sec.keyFeatures[language] || sec.keyFeatures.en || []).map((kf: string, kidx: number) => (
                        <li key={kidx} style={{ lineHeight: 1.6 }}>{kf}</li>
                      ))}
                    </ul>
                  )}

                  {sec.references && sec.references.length > 0 && (
                    <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      <strong>{language === 'bn' ? 'তথ্যসূত্র:' : 'Sources:'}</strong> {sec.references.join(', ')}
                    </div>
                  )}
                </div>
              ))}

            {/* Subgroups / Families */}
            {record.importantFamilies && record.importantFamilies.length > 0 && (
              <div className="knowledge-point-card">
                <div className="knowledge-point-header">
                  <span className="point-number-badge">★</span>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
                    {t('tax.subgroupsClasses')}
                  </h3>
                </div>
                <div className="knowledge-families-grid">
                  {record.importantFamilies.map(fam => (
                    <div key={fam.name} className="family-box">
                      <span className="scientific-name" style={{ fontWeight: 700, fontSize: '1rem', color: '#ffffff', display: 'block', marginBottom: '0.25rem' }}>
                        {fam.name}
                      </span>
                      <div style={{ fontSize: '0.85rem', color: accentColor, marginBottom: '0.4rem', fontWeight: 500 }}>
                        {language === 'bn' ? fam.commonBn || fam.commonEn : fam.commonEn || fam.commonBn}
                      </div>
                      <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        {language === 'bn' ? fam.diagnosticBn || fam.diagnosticEn : fam.diagnosticEn || fam.diagnosticBn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Representative Canonical Species */}
            <div className="knowledge-point-card">
              <div className="knowledge-point-header">
                <span className="point-number-badge">★</span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
                  {t('tax.representativeSpecies')}
                </h3>
              </div>

              {record.examplesSummary && (
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                  {record.examplesSummary[language] || record.examplesSummary.en}
                </p>
              )}

              {canonicalSpeciesList.length > 0 ? (
                <div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                    <CheckCircle2 size={16} style={{ display: 'inline', verticalAlign: 'text-bottom', color: 'var(--accent-emerald-light)', marginRight: '0.4rem' }} />
                    {t('knowledge.verifiedExampleNotice')}
                  </p>
                  <div className="grid-species">
                    {canonicalSpeciesList.map(sp => (
                      <SpeciesCard key={sp.id} species={sp} />
                    ))}
                  </div>
                </div>
              ) : (
                <div style={{ padding: '1.25rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-md)', border: '1px dashed var(--border-subtle)', color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
                  <p style={{ lineHeight: 1.6, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    {record.examplesSummary ? (record.examplesSummary[language] || record.examplesSummary.en) : t('knowledge.globalExamplesNotice')}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem', color: '#60a5fa', fontSize: '0.82rem' }}>
                    <Info size={14} style={{ flexShrink: 0 }} />
                    <span>
                      {language === 'bn'
                        ? 'বায়োটাএলিট ডেটাসেটে বর্তমানে ০টি প্রজাতি কিউরেটেড (কিউরেশন প্রক্রিয়াধীন)। বৈশ্বিক প্রাণিবিজ্ঞানে এই গোষ্ঠীর বহু প্রজাতি বিশ্বব্যাপী বিস্তৃত।'
                        : '0 species currently curated in BiotaElite dataset (curation in progress). In global zoology, this lineage contains numerous valid species distributed worldwide.'}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Bangladesh Regional Occurrence Subsection */}
            {bdSpeciesInTaxon.length > 0 && (
              <div
                className="knowledge-point-card"
                style={{
                  background: 'rgba(59, 130, 246, 0.04)',
                  borderColor: 'rgba(59, 130, 246, 0.25)',
                }}
              >
                <div className="knowledge-point-header">
                  <span className="point-number-badge" style={{ background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa' }}>
                    <MapPin size={13} />
                  </span>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
                    {t('tax.bangladeshRegionalContext') || 'Bangladesh Regional Context'}
                  </h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '0.85rem' }}>
                  {language === 'bn'
                    ? `বাংলাদেশের জলসীমা ও ভৌগোলিক ভূখণ্ডে এই ট্যাক্সনের ${bdSpeciesInTaxon.length}টি দেশীয় প্রজাতির প্রামাণ্য নথিপত্র সংরক্ষিত রয়েছে:`
                    : `Verified occurrence records for ${bdSpeciesInTaxon.length} species native to or documented within Bangladesh's territorial waters and territory:`}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {bdSpeciesInTaxon.map(sp => (
                    <Link
                      key={sp.id}
                      to={`/species/${sp.id}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.35rem 0.75rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(59, 130, 246, 0.1)',
                        border: '1px solid rgba(59, 130, 246, 0.3)',
                        fontSize: '0.82rem',
                        color: '#93c5fd',
                        textDecoration: 'none',
                      }}
                    >
                      <em style={{ fontStyle: 'italic' }}>{sp.scientificName}</em>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                        ({sp.commonNames.en[0]})
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Nomenclatural Authority & Literature Reference */}
            <div className="knowledge-point-card">
              <div className="knowledge-point-header">
                <span className="point-number-badge">★</span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
                  {language === 'bn' ? 'নামকরণ কর্তৃপক্ষ ও বৈজ্ঞানিক তথ্যসূত্র' : 'Nomenclatural Authority & Scientific Literature'}
                </h3>
              </div>
              <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                <strong>{language === 'bn' ? 'কর্তৃপক্ষ উৎস:' : 'Authority Source:'}</strong>{' '}
                <span style={{ color: '#ffffff' }}>{record.authoritySource}</span>
              </div>
              {record.referenceIds && record.referenceIds.length > 0 && (
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <strong>{language === 'bn' ? 'রেফারেন্স আইডি:' : 'Reference IDs:'}</strong> {record.referenceIds.join(', ')}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* MODE A: Established 11-Point Order Knowledge Standard */
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BookOpen size={20} style={{ color: isFish ? 'var(--accent-emerald-light)' : 'var(--accent-marine-light)' }} />
              <span>{t('knowledge.elevenPointStandard')}</span>
            </h2>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              ICZN & Peer-Reviewed Taxonomic Standard
            </span>
          </div>

          <div className="knowledge-nine-points-container">
            {/* Point 1: Name & Taxonomic Classification */}
            <div className="knowledge-point-card">
              <div className="knowledge-point-header">
                <span className="point-number-badge">1</span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
                  {t('knowledge.classification')}
                </h3>
              </div>

              <div className="hierarchy-flow" style={{ marginBottom: '1.25rem' }}>
                <span className="hierarchy-step">
                  <GitBranch size={15} style={{ color: 'var(--accent-emerald-light)' }} />
                  {t('rank.kingdom')}: <em>Animalia</em>
                </span>
                {record.classificationHierarchy.map(node => (
                  <React.Fragment key={node.name}>
                    <ChevronRight size={14} style={{ color: 'var(--text-muted)' }} />
                    <span className="hierarchy-step">
                      {node.rank}: <em>{node.name}</em>
                    </span>
                  </React.Fragment>
                ))}
              </div>

              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <strong>{language === 'bn' ? 'নামকরণ কর্তৃপক্ষ / রেফারেন্স:' : 'Nomenclatural Authority & Citation:'}</strong>{' '}
                <span style={{ color: 'var(--text-primary)' }}>{record.authoritySource}</span>
              </div>
            </div>

            {/* Point 2: Diagnostic Identifying Characteristics */}
            <div className="knowledge-point-card">
              <div className="knowledge-point-header">
                <span className="point-number-badge">2</span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
                  {t('knowledge.identifyingChars')}
                </h3>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1rem' }}>
                {record.diagnosticCharacteristics[language] || record.diagnosticCharacteristics.en}
              </p>

              {keyFeaturesList.length > 0 && (
                <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
                  {keyFeaturesList.map((trait, idx) => (
                    <li key={idx} style={{ lineHeight: 1.6 }}>
                      {trait}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Point 3: Habitat & Ecological Distribution */}
            <div className="knowledge-point-card">
              <div className="knowledge-point-header">
                <span className="point-number-badge">3</span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
                  {language === 'bn' ? 'আবাসস্থল ও পরিবেশগত বিস্তার' : 'Habitat & Ecological Distribution'}
                </h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                {record.habitat[language] || record.habitat.en}
              </p>
            </div>

            {/* Point 4: Ecosystem Role & Trophic Dynamics */}
            <div className="knowledge-point-card">
              <div className="knowledge-point-header">
                <span className="point-number-badge">4</span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
                  {t('knowledge.habitatEcosystem')}
                </h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                {record.ecosystem[language] || record.ecosystem.en}
              </p>
            </div>

            {/* Point 5: Feeding Habits & Diet */}
            <div className="knowledge-point-card">
              <div className="knowledge-point-header">
                <span className="point-number-badge">5</span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
                  {t('knowledge.feedingHabits')}
                </h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                {record.feeding[language] || record.feeding.en}
              </p>
            </div>

            {/* Point 6: Reproduction & Life Cycle */}
            <div className="knowledge-point-card">
              <div className="knowledge-point-header">
                <span className="point-number-badge">6</span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
                  {t('knowledge.reproduction')}
                </h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                {record.reproduction[language] || record.reproduction.en}
              </p>
            </div>

            {/* Point 7: Geographic Distribution */}
            <div className="knowledge-point-card">
              <div className="knowledge-point-header">
                <span className="point-number-badge">7</span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
                  {t('knowledge.distribution')}
                </h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                {record.distribution[language] || record.distribution.en}
              </p>
            </div>

            {/* Point 8: Important Biological Families */}
            <div className="knowledge-point-card">
              <div className="knowledge-point-header">
                <span className="point-number-badge">8</span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
                  {t('knowledge.importantFamilies')}
                </h3>
              </div>

              {record.importantFamilies && record.importantFamilies.length > 0 ? (
                <div className="knowledge-families-grid">
                  {record.importantFamilies.map(fam => (
                    <div key={fam.name} className="family-box">
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                        <span className="scientific-name" style={{ fontWeight: 700, fontSize: '1rem', color: '#ffffff' }}>
                          {fam.name}
                        </span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: isFish ? 'var(--accent-emerald-light)' : 'var(--accent-marine-light)', marginBottom: '0.5rem', fontWeight: 500 }}>
                        {language === 'bn' ? fam.commonBn || fam.commonEn : fam.commonEn || fam.commonBn}
                      </div>
                      <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        {language === 'bn' ? fam.diagnosticBn || fam.diagnosticEn : fam.diagnosticEn || fam.diagnosticBn}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  {language === 'bn' ? 'কোনো নির্দিষ্ট গোত্র তালিকা প্রযোজ্য নয়।' : 'Higher taxon level; see child order pages for family diagnoses.'}
                </p>
              )}
            </div>

            {/* Point 9: Scientific Names */}
            <div className="knowledge-point-card">
              <div className="knowledge-point-header">
                <span className="point-number-badge">9</span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
                  {t('knowledge.scientificNames')}
                </h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '0.75rem' }}>
                {record.scientificNamesSummary
                  ? record.scientificNamesSummary[language] || record.scientificNamesSummary.en
                  : language === 'bn'
                  ? `প্রামাণ্য দ্বিপদ নামকরণ ও জাতিজনি তথ্য আইসিজেডএন নীতিমালার ভিত্তিতে প্রস্তুত। প্রধান বৈজ্ঞানিক নাম: ${record.scientificName}`
                  : `Binomial nomenclature and higher systematics governed by ICZN protocols. Primary taxon: ${record.scientificName}`}
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <strong>{language === 'bn' ? 'ট্যাক্সন র‍্যাঙ্ক:' : 'Taxonomic Rank:'}</strong>{' '}
                <span style={{ textTransform: 'capitalize', color: 'var(--text-secondary)' }}>{record.rank}</span>
                {record.authoritySource && (
                  <span style={{ marginLeft: '1rem' }}>
                    <strong>{language === 'bn' ? 'উৎস:' : 'Source:'}</strong>{' '}
                    <span style={{ color: 'var(--text-secondary)' }}>{record.authoritySource}</span>
                  </span>
                )}
              </div>
            </div>

            {/* Point 10: Canonical Examples */}
            <div className="knowledge-point-card">
              <div className="knowledge-point-header">
                <span className="point-number-badge">10</span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
                  {t('knowledge.examples')}
                </h3>
              </div>

              {record.examplesSummary && (
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                  {record.examplesSummary[language] || record.examplesSummary.en}
                </p>
              )}

              {canonicalSpeciesList.length > 0 ? (
                <div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                    <CheckCircle2 size={16} style={{ display: 'inline', verticalAlign: 'text-bottom', color: 'var(--accent-emerald-light)', marginRight: '0.4rem' }} />
                    {t('knowledge.verifiedExampleNotice')}
                  </p>
                  <div className="grid-species">
                    {canonicalSpeciesList.map(sp => (
                      <SpeciesCard key={sp.id} species={sp} />
                    ))}
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    padding: '1.5rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px dashed var(--border-subtle)',
                    color: 'var(--text-secondary)',
                    fontSize: '0.925rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: isFish ? 'var(--accent-emerald-light)' : 'var(--accent-marine-light)', fontWeight: 700, marginBottom: '0.5rem' }}>
                    <BookOpen size={16} />
                    <span>{language === 'bn' ? 'আন্তর্জাতিক প্রামাণ্য উদাহরণ (Global Reference Examples)' : 'Global Representative Taxa (Authoritative Literature)'}</span>
                  </div>
                  <p style={{ lineHeight: 1.6, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                    {record.examplesSummary ? (record.examplesSummary[language] || record.examplesSummary.en) : t('knowledge.globalExamplesNotice')}
                  </p>
                  <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)', borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Info size={14} style={{ flexShrink: 0 }} />
                    <span>
                      {language === 'bn'
                        ? 'এই গোষ্ঠীর প্রতিনিধি প্রজাতিসমূহ বিশ্বব্যাপী বিস্তৃত; এদের জীবিত জনসংখ্যা বাংলাদেশের জলসীমায় প্রাকৃতিকভাবে অনুপস্থিত (বহির্দেশীয়)।'
                        : 'Representative taxa of this clade occur globally; living populations are extralimital to Bangladesh waters.'}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Regional Occurrence in Bangladesh Context */}
            {bdSpeciesInTaxon.length > 0 && (
              <div
                className="knowledge-point-card"
                style={{
                  background: 'rgba(59, 130, 246, 0.04)',
                  borderColor: 'rgba(59, 130, 246, 0.25)',
                }}
              >
                <div className="knowledge-point-header">
                  <span className="point-number-badge" style={{ background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa' }}>
                    <MapPin size={13} />
                  </span>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
                    {t('tax.bangladeshRegionalContext') || 'Bangladesh Regional Context'}
                  </h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '0.85rem' }}>
                  {language === 'bn'
                    ? `বাংলাদেশের জলসীমা ও ভৌগোলিক ভূখণ্ডে এই ট্যাক্সনের ${bdSpeciesInTaxon.length}টি দেশীয় প্রজাতির প্রামাণ্য নথিপত্র সংরক্ষিত রয়েছে:`
                    : `Verified occurrence records for ${bdSpeciesInTaxon.length} species native to or documented within Bangladesh's territorial waters and territory:`}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {bdSpeciesInTaxon.map(sp => (
                    <Link
                      key={sp.id}
                      to={`/species/${sp.id}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.35rem 0.75rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(59, 130, 246, 0.1)',
                        border: '1px solid rgba(59, 130, 246, 0.3)',
                        fontSize: '0.82rem',
                        color: '#93c5fd',
                        textDecoration: 'none',
                      }}
                    >
                      <em style={{ fontStyle: 'italic' }}>{sp.scientificName}</em>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                        ({sp.commonNames.en[0]})
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Point 11: Additional Information */}
            <div className="knowledge-point-card">
              <div className="knowledge-point-header">
                <span className="point-number-badge">11</span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
                  {t('knowledge.additionalInformation')}
                </h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '0.75rem' }}>
                {record.additionalInformation
                  ? record.additionalInformation[language] || record.additionalInformation.en
                  : record.notes || (language === 'bn' ? 'অতিরিক্ত বাস্তুতাত্ত্বিক ও অর্থনৈতিক তথ্য প্রক্রিয়াধীন রয়েছে।' : 'Additional ecological, fisheries, and conservation details under scientific curation.')}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
