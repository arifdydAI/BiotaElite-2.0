// BiotaElite 2.0 Species Card Component
import React from 'react';
import { Link } from 'react-router-dom';
import type { SpeciesRecord } from '../../types/biodiversity';
import { ScientificName } from '../common/ScientificName';
import { ConservationBadge } from '../common/ConservationBadge';
import { StatusBadge } from '../common/StatusBadge';
import { useLanguage } from '../../context/LanguageContext';
import { SpeciesImagePlaceholder } from './SpeciesImagePlaceholder';
import { MapPin, Waves, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

interface SpeciesCardProps {
  species: SpeciesRecord;
  featured?: boolean;
}

export const SpeciesCard: React.FC<SpeciesCardProps> = ({ species, featured = false }) => {
  const { t, language } = useLanguage();
  const [imageError, setImageError] = React.useState(false);

  // MASTER-FIX-07B: Strict Species <-> Image Integrity Gate
  // An image is ONLY displayed if all strict scientific & provenance gates pass:
  // 1. species.imageVerificationStatus is explicitly 'verified'
  // 2. The media record is explicitly verified (verificationStatus === 'verified' && isVerified === true)
  // 3. The media record's speciesId strictly and identically equals species.id (mandatory)
  // 4. If taxonId is defined on media and species, they must match
  // 5. Complete provenance is present (sourceUrl or sourceName, and license)
  // 6. Direct image URL is present
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
  const displayImageUrl = verifiedMedia ? (verifiedMedia.imageUrl || verifiedMedia.url) : '';

  const primaryCommonEn = species.commonNames.en[0] || '';
  const primaryCommonBn = species.commonNames.bn[0] || '';

  return (
    <div className="card card-hoverable" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Thumbnail with attribution indicator */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '190px',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
          backgroundColor: 'var(--bg-surface)',
          marginBottom: '1rem',
        }}
      >
        {hasVerifiedImage ? (
          <img
            src={displayImageUrl}
            alt={species.scientificName}
            loading="lazy"
            onError={() => setImageError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.4s ease',
            }}
          />
        ) : (
          <SpeciesImagePlaceholder compact={true} />
        )}

        {/* Badges Overlay */}
        <div style={{ position: 'absolute', top: '0.6rem', left: '0.6rem', display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
          <ConservationBadge status={species.conservation.iucnGlobalStatus || species.conservation.globalIucnStatus || 'NE'} showLabel={false} />
          {species.bangladeshOccurrence.present && (
            <span
              style={{
                background: 'rgba(2, 132, 199, 0.9)',
                color: '#ffffff',
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '0.15rem 0.45rem',
                borderRadius: '4px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.2rem',
              }}
              title="Recorded in Bangladesh territory"
            >
              <MapPin size={11} /> BD
            </span>
          )}
          {featured && (
            <span
              style={{
                background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.95), rgba(180, 83, 9, 0.95))',
                color: '#ffffff',
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '0.15rem 0.45rem',
                borderRadius: '4px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.2rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
              }}
              title="Curated Iconic Species"
            >
              <Sparkles size={11} /> {language === 'bn' ? 'আইকনিক' : 'Iconic'}
            </span>
          )}
          {(species.speciesPriority === 'common_educational' || species.speciesPriority === 1) && !featured && (
            <span
              style={{
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.9), rgba(79, 70, 229, 0.9))',
                color: '#ffffff',
                fontSize: '0.68rem',
                fontWeight: 700,
                padding: '0.15rem 0.45rem',
                borderRadius: '4px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.2rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.25)',
              }}
              title="Textbook & Educationally Iconic Representative"
            >
              <Sparkles size={10} /> {language === 'bn' ? 'পাঠ্যবই প্রতিনিধি' : 'Textbook'}
            </span>
          )}
        </div>

        <div style={{ position: 'absolute', top: '0.6rem', right: '0.6rem' }}>
          <StatusBadge status={species.lifecycleStatus} isVerified={species.isVerified} size="sm" />
        </div>

        {/* License Pill only if verified media is shown */}
        {hasVerifiedImage && verifiedMedia && (
          <div
            style={{
              position: 'absolute',
              bottom: '0.4rem',
              right: '0.4rem',
              background: 'rgba(0, 0, 0, 0.75)',
              color: 'var(--text-secondary)',
              fontSize: '0.65rem',
              padding: '0.1rem 0.35rem',
              borderRadius: '2px',
              fontFamily: 'monospace',
            }}
          >
            {verifiedMedia.license}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Taxonomic Hierarchy Line */}
        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          {species.taxonomy.class} • {species.taxonomy.family}
        </div>

        {/* Scientific Binomial (Mandatory Open Sans Italic) */}
        <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem', lineHeight: '1.3' }}>
          <ScientificName name={species.scientificName} authorship={species.scientificNameAuthorship} />
        </h3>

        {/* Vernacular Names */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
          {primaryCommonEn && (
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
              {primaryCommonEn}
            </span>
          )}
          {primaryCommonBn && (
            <span
              className="bangla-text"
              style={{
                fontSize: '0.95rem',
                color: 'var(--accent-emerald-light)',
                fontWeight: 600,
              }}
            >
              • {primaryCommonBn}
            </span>
          )}
        </div>

        {/* Habitat Systems */}
        <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          {species.habitat.systems.map((system) => (
            <span
              key={system}
              style={{
                fontSize: '0.7rem',
                padding: '0.15rem 0.45rem',
                borderRadius: 'var(--radius-sm)',
                background: system === 'marine' ? 'rgba(2, 132, 199, 0.15)' : system === 'freshwater' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(217, 119, 6, 0.15)',
                color: system === 'marine' ? '#38bdf8' : system === 'freshwater' ? '#34d399' : '#fbbf24',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
              }}
            >
              <Waves size={10} />
              {t(`habitat.${system}`, system)}
            </span>
          ))}
          {(species.bangladeshOccurrence.threatCategoryNational || species.bangladeshOccurrence.bangladeshNationalStatus) && (
            <span
              style={{
                fontSize: '0.7rem',
                padding: '0.15rem 0.45rem',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(239, 68, 68, 0.15)',
                color: '#f87171',
                fontWeight: 600,
              }}
            >
              BD Red List: {species.bangladeshOccurrence.threatCategoryNational || species.bangladeshOccurrence.bangladeshNationalStatus}
            </span>
          )}
        </div>

        {/* Card Footer Action */}
        <div
          style={{
            marginTop: 'auto',
            paddingTop: '0.75rem',
            borderTop: '1px solid rgba(32, 53, 61, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: 'var(--accent-emerald-light)' }}>
            <ShieldCheck size={13} />
            <span>{species.referenceIds.length} {t('species.verifiedSources')}</span>
          </div>

          <Link
            to={`/species/${species.id}`}
            className="btn btn-sm btn-secondary"
            style={{ padding: '0.3rem 0.65rem', fontSize: '0.8rem', gap: '0.3rem' }}
          >
            <span>{t('common.viewProfile')}</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
};
