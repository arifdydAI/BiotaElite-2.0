import React from 'react';
import { Link } from 'react-router-dom';
import type { TaxonKnowledgeRecord } from '../../types/biodiversity';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, ShieldCheck, Globe } from 'lucide-react';

interface TaxonKnowledgeCardProps {
  record: TaxonKnowledgeRecord;
  category: 'fish' | 'marine' | 'marine_non_fish' | 'general' | 'zoology';
  linkTo: string;
}

export const TaxonKnowledgeCard: React.FC<TaxonKnowledgeCardProps> = ({
  record,
  category,
  linkTo,
}) => {
  const { species } = useBiodiversity();
  const { t, language } = useLanguage();

  const isFish = record.category === 'fish' || category === 'fish';
  const isMarine = record.category === 'marine_non_fish' || category === 'marine' || category === 'marine_non_fish';
  const themeClass = isFish ? 'fish-theme' : isMarine ? 'marine-theme' : 'taxonomy-theme';

  // Compute live species count in this taxon
  const speciesCount = species.filter(s => {
    if (!s.isPublished) return false;
    const sClass = s.taxonomy?.class?.toLowerCase() || '';
    const sOrder = s.taxonomy?.order?.toLowerCase() || '';
    const sFamily = s.taxonomy?.family?.toLowerCase() || '';
    const sPhylum = s.taxonomy?.phylum?.toLowerCase() || '';
    const rSci = record.scientificName?.toLowerCase() || '';

    if (record.rank === 'superclass' && rSci === 'osteichthyes') {
      return sClass === 'actinopterygii' || sClass === 'sarcopterygii';
    }
    if (record.rank === 'superclass' && rSci === 'agnatha') {
      return sClass === 'myxini' || sClass === 'petromyzontida';
    }
    if (record.rank === 'class' || record.rank === 'superclass') {
      return sClass === rSci;
    }
    if (record.rank === 'order') {
      return sOrder === rSci;
    }
    if (record.rank === 'infraorder' || record.rank === 'suborder') {
      return (
        sOrder === rSci ||
        (record.id === 'order-cetacea' && ['Delphinidae', 'Balaenopteridae', 'Platanistidae'].includes(s.taxonomy?.family || '')) ||
        (record.id === 'order-pinnipedia' && ['Phocidae', 'Otariidae', 'Odobenidae'].includes(s.taxonomy?.family || ''))
      );
    }
    if (record.rank === 'superfamily' || record.rank === 'subfamily' || record.rank === 'family') {
      return (
        sFamily === rSci ||
        (record.id === 'order-chelonioidea' && ['Cheloniidae', 'Dermochelyidae'].includes(s.taxonomy?.family || '')) ||
        (record.id === 'order-hydrophiinae' && s.taxonomy?.family === 'Elapidae' && (s.taxonomy?.genus === 'Hydrophis' || s.scientificName?.toLowerCase().includes('hydrophis')))
      );
    }
    if (record.rank === 'phylum') {
      return sPhylum === rSci;
    }
    return false;
  }).length;

  const primaryCommon = language === 'bn' ? record.bengaliName : record.englishName;

  return (
    <Link to={linkTo} className={`knowledge-card ${themeClass}`}>
      {/* Header Badges */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
        <span
          style={{
            fontSize: '0.725rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            padding: '0.2rem 0.55rem',
            borderRadius: 'var(--radius-full)',
            background: isFish ? 'rgba(16, 185, 129, 0.15)' : 'rgba(2, 132, 199, 0.15)',
            color: isFish ? 'var(--accent-emerald-light)' : 'var(--accent-marine-light)',
          }}
        >
          {t(`rank.${record.rank}`)}
        </span>

        {speciesCount === 0 ? (
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontSize: '0.7rem',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--border-subtle)',
              padding: '0.15rem 0.5rem',
              borderRadius: 'var(--radius-full)',
            }}
          >
            <Globe size={11} style={{ color: isFish ? 'var(--accent-emerald-light)' : 'var(--accent-marine-light)' }} />
            <span>{language === 'bn' ? 'বৈশ্বিক ট্যাক্সন' : 'Global Taxon'}</span>
          </span>
        ) : (
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontSize: '0.75rem',
              fontWeight: 700,
              color: isFish ? 'var(--accent-emerald-light)' : 'var(--accent-marine-light)',
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '0.2rem 0.55rem',
              borderRadius: 'var(--radius-full)',
            }}
          >
            <ShieldCheck size={13} />
            <span>
              {speciesCount} {language === 'bn' ? 'ক্যাটালগভুক্ত' : 'catalogued'}
            </span>
          </span>
        )}
      </div>

      {/* Title */}
      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.35rem', lineHeight: 1.3 }}>
        <span className="scientific-name">{record.scientificName}</span>
      </h3>

      {/* Common Vernacular Names */}
      <div style={{ fontSize: '0.95rem', color: isFish ? 'var(--accent-emerald-light)' : 'var(--accent-marine-light)', fontWeight: 600, marginBottom: '0.6rem' }}>
        {primaryCommon}
      </div>

      {/* Subclasses Tags if any */}
      {record.subclasses && record.subclasses.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.75rem' }}>
          {record.subclasses.map(sc => (
            <span key={sc.id} className="subclass-tag">
              <em className="taxonomic-name-italic">{sc.name}</em>
            </span>
          ))}
        </div>
      )}

      {/* Diagnostic Summary */}
      <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1.25rem', flex: 1 }}>
        {(record.shortDescription && (record.shortDescription[language] || record.shortDescription.en)) || ''}
      </p>

      {/* Card Footer */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.85rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)', marginTop: 'auto' }}>
        <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>
          {record.orders && record.orders.length > 0 && (record.rank === 'superclass' || record.rank === 'class') ? (
            <span>
              {record.orders.length} {language === 'bn' ? 'টি বর্গ' : 'orders'}
            </span>
          ) : record.importantFamilies && record.importantFamilies.length > 0 ? (
            <span>
              {record.importantFamilies.length} {language === 'bn' ? 'টি প্রধান গোত্র' : 'key families'}
            </span>
          ) : (
            <span>{record.authoritySource ? record.authoritySource.split(';')[0] : 'Authoritative source'}</span>
          )}
        </div>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.825rem', fontWeight: 600, color: isFish ? 'var(--accent-emerald-light)' : 'var(--accent-marine-light)' }}>
          <span>{language === 'bn' ? 'বিস্তারিত তথ্য' : 'Explore'}</span>
          <ArrowRight size={14} />
        </div>
      </div>
    </Link>
  );
};
