import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useLanguage } from '../../context/LanguageContext';
import { ScientificName } from '../../components/common/ScientificName';
import { ConservationBadge } from '../../components/common/ConservationBadge';
import { StatusBadge } from '../../components/common/StatusBadge';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { BackButton } from '../../components/common/BackButton';
import { EmptyState } from '../../components/common/EmptyState';
import { SpeciesImagePlaceholder } from '../../components/species/SpeciesImagePlaceholder';
import { 
  ShieldCheck, 
  MapPin, 
  Waves, 
  Layers, 
  BookOpen, 
  ExternalLink, 
  Check, 
  AlertTriangle,
  Globe2,
  Flag
} from 'lucide-react';

export const SpeciesDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getSpeciesById, getReferenceById, resolveTaxonRoute } = useBiodiversity();
  const { t, language } = useLanguage();
  const [imageError, setImageError] = useState(false);

  const species = id ? getSpeciesById(id) : undefined;

  if (!species) {
    return (
      <div>
        <div style={{ marginBottom: '1rem' }}>
          <BackButton fallbackPath="/species" />
        </div>
        <Breadcrumbs items={[{ label: t('crumb.species'), to: '/species' }, { label: t('detail.notFoundTitle') }]} />
        <EmptyState
          title={t('detail.notFoundTitle')}
          description={t('detail.notFoundDesc')}
          actionText={t('common.backToCatalog')}
          onAction={() => {}}
          icon="search"
        />
      </div>
    );
  }

  // MASTER-FIX-07B: Strict Species <-> Image Integrity Gate
  const verifiedMedia = (species.media || []).find(
    (m) =>
      species.imageVerificationStatus === 'verified' &&
      m.verificationStatus === 'verified' &&
      m.isVerified === true &&
      m.speciesId === species.id &&
      (!m.taxonId || !species.taxonId || m.taxonId === species.taxonId) &&
      Boolean(m.sourceUrl && m.license) &&
      Boolean(m.imageUrl || m.url)
  );
  const hasVerifiedImage = Boolean(verifiedMedia && (verifiedMedia.imageUrl || verifiedMedia.url) && !imageError);
  const primaryMedia = hasVerifiedImage ? verifiedMedia : undefined;
  const references = species.referenceIds.map(refId => getReferenceById(refId)).filter(Boolean);

  const globalStatus = species.conservation.globalIucnStatus || species.conservation.iucnGlobalStatus;
  const globalYear = species.conservation.globalAssessmentYear || species.conservation.iucnAssessmentYear;
  const globalSource = species.conservation.globalStatusSource || 'IUCN Red List of Threatened Species';

  const nationalStatus = species.bangladeshOccurrence.bangladeshNationalStatus || species.bangladeshOccurrence.threatCategoryNational;
  const nationalYear = species.bangladeshOccurrence.nationalAssessmentYear || 2015;
  const nationalSource = species.bangladeshOccurrence.nationalStatusSource || 'IUCN Bangladesh Red List 2015 (Vol. 5: Freshwater Fishes)';

  // Check if there is an explicit status discrepancy between Global and National
  const hasStatusDiscrepancy = globalStatus && nationalStatus && globalStatus !== nationalStatus;

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <BackButton fallbackPath="/species" />
        <Breadcrumbs
          items={[
            { label: t('crumb.species'), to: '/species' },
            { label: species.taxonomy.class, to: `/species?class=${species.taxonomy.class}` },
            { label: species.taxonomy.family },
            { label: species.scientificName, isScientificName: true },
          ]}
        />
      </div>

      {/* Monograph Header */}
      <div
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-xl)',
          padding: '2rem',
          marginBottom: '2rem',
          position: 'relative',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '1rem' }}>
          <div>
            {/* Interactive Taxonomic Path */}
            <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)', letterSpacing: '0.04em', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
              <span>{species.taxonomy.kingdom}</span>
              <span>›</span>
              <span>{species.taxonomy.phylum}</span>
              <span>›</span>
              {(() => {
                const isFish = species.module === 'fish' || ['Actinopterygii', 'Chondrichthyes', 'Sarcopterygii', 'Myxini', 'Petromyzontida'].includes(species.taxonomy.class);
                const classRoute = resolveTaxonRoute('class', species.taxonomy.class, isFish ? 'fish' : 'marine');
                const orderRoute = resolveTaxonRoute('order', species.taxonomy.order, isFish ? 'fish' : 'marine');
                const familyRoute = resolveTaxonRoute('family', species.taxonomy.family, isFish ? 'fish' : 'marine');
                return (
                  <>
                    <Link
                      to={classRoute}
                      style={{ color: isFish ? 'var(--accent-emerald-light)' : 'var(--accent-marine-light)', textDecoration: 'none', fontWeight: 600 }}
                      title="View Class Knowledge"
                    >
                      {species.taxonomy.class}
                    </Link>
                    <span>›</span>
                    <Link
                      to={orderRoute}
                      style={{ color: isFish ? 'var(--accent-emerald-light)' : 'var(--accent-marine-light)', textDecoration: 'none', fontWeight: 600 }}
                      title="View Order Knowledge"
                    >
                      {species.taxonomy.order}
                    </Link>
                    <span>›</span>
                    <Link
                      to={familyRoute}
                      style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}
                      title="View Family Knowledge"
                    >
                      {species.taxonomy.family}
                    </Link>
                  </>
                );
              })()}
            </div>

            {/* Scientific Binomial */}
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.2, marginBottom: '0.5rem' }}>
              <ScientificName name={species.scientificName} authorship={species.scientificNameAuthorship} />
            </h1>

            {/* Common Names */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              {species.commonNames.en.length > 0 && (
                <span style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                  {species.commonNames.en.join(', ')}
                </span>
              )}
              {species.commonNames.bn.length > 0 && (
                <span
                  className="bangla-text"
                  style={{ fontSize: '1.2rem', color: 'var(--accent-emerald-light)', fontWeight: 600 }}
                >
                  ({species.commonNames.bn.join(', ')})
                </span>
              )}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.6rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <ConservationBadge status={globalStatus} />
              {nationalStatus && (
                <span
                  style={{
                    backgroundColor: 'rgba(217, 119, 6, 0.15)',
                    color: '#fbbf24',
                    border: '1px solid rgba(217, 119, 6, 0.4)',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                  }}
                  title={`Bangladesh National Status: ${nationalStatus}`}
                >
                  <Flag size={12} />
                  <span>BD: {nationalStatus}</span>
                </span>
              )}
              <StatusBadge status={species.lifecycleStatus} isVerified={species.isVerified} />
            </div>

            {species.verifiedBy && (
              <div style={{ fontSize: '0.75rem', color: 'var(--accent-emerald-light)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <ShieldCheck size={14} />
                <span>{language === 'bn' ? `যাচাইকারী: ${species.verifiedBy}` : `Verified by ${species.verifiedBy}`}</span>
              </div>
            )}
          </div>
        </div>

        {/* Media Gallery / Specimen Display */}
        {primaryMedia ? (
          <div
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              maxHeight: '440px',
              backgroundColor: 'var(--bg-surface)',
              marginTop: '1.5rem',
            }}
          >
            <img
              src={primaryMedia.url}
              alt={species.scientificName}
              onError={() => setImageError(true)}
              style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(9, 14, 17, 0.95), transparent)',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}
            >
              <div style={{ maxWidth: '650px' }}>
                <p style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 500 }}>
                  {primaryMedia.caption}
                </p>
                {primaryMedia.photographer && (
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {language === 'bn' ? 'স্বীকৃতি' : 'Attribution'}: {primaryMedia.photographer} • {primaryMedia.license}
                  </p>
                )}
              </div>

              {primaryMedia.sourceUrl && (
                <a
                  href={primaryMedia.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ fontSize: '0.75rem', gap: '0.3rem' }}
                >
                  <span>{language === 'bn' ? 'ছবির উৎস' : 'Image Source'}</span>
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        ) : (
          /* Honest Specimen Photo Curation Notice */
          <SpeciesImagePlaceholder
            height={220}
            showSubtext={true}
            style={{ marginTop: '1.5rem', borderRadius: 'var(--radius-lg)' }}
          />
        )}
      </div>

      {/* Grid of Monograph Sections */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '2rem' }}>
        {/* Left Column: Zoological & Ecological Data */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Diagnostic Features & Morphology */}
          <section id="morphology" className="card">
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Layers size={18} style={{ color: 'var(--accent-emerald)' }} />
              <span>{t('detail.morphology')}</span>
            </h3>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              {species.morphology.description}
            </p>

            <div style={{ marginBottom: '1.25rem' }}>
              <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
                {t('detail.diagnosticFeatures')}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {species.morphology.diagnosticFeatures.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                    <Check size={16} style={{ color: 'var(--accent-emerald)', flexShrink: 0, marginTop: '2px' }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Meristics Table */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', background: 'var(--bg-surface)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              {species.morphology.maxStandardLengthCm && (
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t('detail.maxSize')}</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>{species.morphology.maxStandardLengthCm} cm</div>
                </div>
              )}
              {species.morphology.dorsalSpinesRays && (
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t('detail.dorsalFin')}</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>{species.morphology.dorsalSpinesRays}</div>
                </div>
              )}
              {species.morphology.analSpinesRays && (
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t('detail.analFin')}</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>{species.morphology.analSpinesRays}</div>
                </div>
              )}
            </div>

            {species.morphology.coloration && (
              <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>{t('detail.coloration')}: </strong>
                {species.morphology.coloration}
              </div>
            )}
          </section>

          {/* Ecology, Diet & Life History */}
          <section id="ecology" className="card">
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Waves size={18} style={{ color: '#fbbf24' }} />
              <span>{t('detail.habitatEcology')}</span>
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t('detail.diet')}</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--accent-emerald-light)', textTransform: 'capitalize' }}>
                  {species.ecology.dietCategory || (language === 'bn' ? 'মূল্যায়ন করা হয়নি' : 'Not evaluated')}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Depth Range</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#ffffff' }}>
                  {species.habitat.depthRangeMeters ? `${species.habitat.depthRangeMeters.min} – ${species.habitat.depthRangeMeters.max} m` : 'Unspecified'}
                </div>
              </div>
            </div>

            {species.ecology.dietSummary && (
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Feeding Strategy: </strong> {species.ecology.dietSummary}
              </p>
            )}

            {species.ecology.behavior && (
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>{t('detail.behavior')} </strong> {species.ecology.behavior}
              </p>
            )}

            {species.ecology.reproduction && (
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                <strong style={{ color: 'var(--text-primary)' }}>{t('detail.reproduction')} </strong> {species.ecology.reproduction}
              </p>
            )}
          </section>

          {/* Distinct Global vs National Conservation Assessment */}
          <section id="conservation" className="card">
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <AlertTriangle size={18} style={{ color: '#f87171' }} />
              <span>{t('detail.conservationSection')}</span>
            </h3>

            {/* Separate Assessment Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
              {/* Global IUCN Status Card */}
              <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-emerald-light)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                  <Globe2 size={16} />
                  <span>{t('detail.globalIucn')}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem' }}>
                  <ConservationBadge status={globalStatus} />
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {t('detail.assessmentYear')} {globalYear}
                  </span>
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                  <span style={{ color: 'var(--text-muted)' }}>Source: </span>
                  {globalSource}
                </div>
              </div>

              {/* Bangladesh National Red List Card */}
              <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#fbbf24', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                  <Flag size={16} />
                  <span>{t('detail.nationalIucn')}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem' }}>
                  {nationalStatus ? (
                    <ConservationBadge status={nationalStatus} />
                  ) : (
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Not Assessed</span>
                  )}
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {t('detail.assessmentYear')} {nationalYear}
                  </span>
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                  <span style={{ color: 'var(--text-muted)' }}>Source: </span>
                  {nationalSource}
                </div>
              </div>
            </div>

            {/* Status Discrepancy Note if applicable */}
            {hasStatusDiscrepancy && (
              <div
                style={{
                  background: 'rgba(217, 119, 6, 0.1)',
                  border: '1px solid rgba(217, 119, 6, 0.3)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem 1.25rem',
                  marginBottom: '1.25rem',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                }}
              >
                <strong style={{ color: '#fbbf24', display: 'block', marginBottom: '0.2rem' }}>
                  {language === 'bn' ? 'বৈশ্বিক বনাম জাতীয় সংরক্ষণ স্থিতির ভিন্নতা' : 'Taxonomic Notice: Global vs. National Conservation Status Discrepancy'}
                </strong>
                {language === 'bn'
                  ? `এই প্রজাতির বৈশ্বিক আইইউসিএন স্থিতি (${globalStatus}) এবং বাংলাদেশ জাতীয় রেড লিস্টের স্থিতি (${nationalStatus}) পৃথক। আঞ্চলিক জলসীমায় উচ্চতর শিকার চাপ, বাসস্থান ধ্বংস বা জলবায়ু পরিবর্তনের কারণে জাতীয় স্তর ভিন্ন হতে পারে।`
                  : `Note: The Global IUCN assessment (${globalStatus}, ${globalYear}) differs from the Bangladesh National Red List (${nationalStatus}, ${nationalYear}). National assessments reflect localized population decline and habitat pressures within Bangladesh territorial basins.`}
              </div>
            )}

            {/* Documented Threats */}
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>
                {t('detail.threats')}
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {species.conservation.threats.map((threat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#f87171', marginTop: '7px', flexShrink: 0 }} />
                    <span>{threat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Regional Context: Bangladesh Occurrence & Ecological Distribution */}
          <section id="bangladesh-occurrence" className="card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
                <MapPin size={18} style={{ color: 'var(--accent-marine-light)' }} />
                <span>{t('detail.bdDistribution')}</span>
              </h3>
              <span style={{ fontSize: '0.725rem', fontWeight: 700, color: 'var(--accent-marine-light)', textTransform: 'uppercase', letterSpacing: '0.05em', background: 'rgba(2, 132, 199, 0.15)', padding: '0.2rem 0.55rem', borderRadius: 'var(--radius-full)' }}>
                {language === 'bn' ? 'আঞ্চলিক প্রেক্ষাপট' : 'Regional Context'}
              </span>
            </div>

            {species.bangladeshOccurrence.present ? (
              <div>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                  <span style={{ background: 'rgba(2, 132, 199, 0.15)', color: '#38bdf8', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', fontWeight: 600 }}>
                    {t('detail.residency')} {species.bangladeshOccurrence.residencyStatus.toUpperCase()}
                  </span>
                  {nationalStatus && (
                    <span style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#f87171', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', fontWeight: 600 }}>
                      {t('detail.nationalIucn')} {nationalStatus}
                    </span>
                  )}
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.4rem' }}>
                    {t('detail.basinRecords')}
                  </div>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    {species.bangladeshOccurrence.regions.map((reg, idx) => (
                      <span key={idx} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        {reg}
                      </span>
                    ))}
                  </div>
                </div>

                {species.bangladeshOccurrence.seasonalNotes && (
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>{t('detail.seasonalOccurrence')} </strong>
                    {species.bangladeshOccurrence.seasonalNotes}
                  </p>
                )}

                {species.bangladeshOccurrence.notes && (
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    <strong style={{ color: 'var(--text-primary)' }}>{t('detail.localSignificance')} </strong>
                    {species.bangladeshOccurrence.notes}
                  </p>
                )}
              </div>
            ) : (
              <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-md)', border: '1px dashed var(--border-subtle)' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.5, margin: 0 }}>
                  {language === 'bn'
                    ? 'বাংলাদেশের অভ্যন্তরীণ বা উপকূলীয় জলসীমায় কোনো নিশ্চিত প্রামাণ্য দেশীয় উপস্থিতি নথিবদ্ধ হয়নি (বহির্দেশীয় বৈশ্বিক প্রজাতি)।'
                    : 'No confirmed native voucher records documented in Bangladesh territorial waters (extralimital global taxon).'}
                </p>
              </div>
            )}
          </section>
        </div>

        {/* Right Column: Taxonomy, Synonyms & Verified References */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Taxonomic Hierarchy Table */}
          <div className="card">
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.85rem' }}>
              {language === 'bn' ? 'শ্রেণীবিন্যাসীয় বিন্যাস' : 'Taxonomic Classification'}
            </h4>
            <table style={{ width: '100%', fontSize: '0.85rem', borderCollapse: 'collapse' }}>
              <tbody>
                {Object.entries(species.taxonomy).map(([rank, val]) => (
                  <tr key={rank} style={{ borderBottom: '1px solid rgba(32, 53, 61, 0.4)' }}>
                    <td style={{ padding: '0.45rem 0', color: 'var(--text-muted)', textTransform: 'capitalize', width: '40%' }}>
                      {t(`rank.${rank}` as any) || rank}
                    </td>
                    <td style={{ padding: '0.45rem 0', color: '#ffffff', fontWeight: 600, fontStyle: rank === 'genus' || rank === 'species' ? 'italic' : 'normal', fontFamily: "'Open Sans', sans-serif" }}>
                      {val}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Synonyms & Nomenclatural History */}
          {species.synonyms && species.synonyms.length > 0 && (
            <div className="card">
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.85rem' }}>
                {t('detail.synonymy')}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
                {species.synonyms.map((syn, idx) => (
                  <li key={idx} style={{ padding: '0.5rem 0.65rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ fontStyle: 'italic', fontFamily: "'Open Sans', sans-serif", color: 'var(--text-primary)', fontWeight: 600 }}>
                      {syn.name}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {syn.authorship} • {syn.status} {syn.isBasionym && <span style={{ color: 'var(--accent-emerald-light)', fontWeight: 700 }}>({t('detail.basionym')})</span>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Authoritative Peer-Reviewed References */}
          <div className="card">
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <BookOpen size={16} style={{ color: 'var(--accent-emerald)' }} />
              <span>{t('detail.citedLiterature')} ({references.length})</span>
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.8rem' }}>
              {references.map(ref => ref && (
                <div key={ref.id} style={{ padding: '0.65rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontWeight: 600, color: '#ffffff', marginBottom: '0.2rem' }}>
                    {ref.authors.join(', ')} ({ref.year})
                  </div>
                  <div style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                    {ref.title}
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: '0.35rem' }}>
                    {ref.publicationName} {ref.pages && `pp. ${ref.pages}`}
                  </div>
                  {ref.url && (
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: 'var(--accent-marine-light)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem' }}
                    >
                      <span>{language === 'bn' ? 'উৎস রেকর্ড দেখুন' : 'View Source Record'}</span>
                      <ExternalLink size={11} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
