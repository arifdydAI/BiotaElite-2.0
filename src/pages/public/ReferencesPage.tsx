// BiotaElite 2.0 References & Scientific Sources Directory
import React, { useState } from 'react';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useLanguage } from '../../context/LanguageContext';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { BackButton } from '../../components/common/BackButton';
import { Library, ExternalLink, Search } from 'lucide-react';

export const ReferencesPage: React.FC = () => {
  const { references } = useBiodiversity();
  const { t, language } = useLanguage();
  const [filterTier, setFilterTier] = useState<string>('all');
  const [query, setQuery] = useState('');

  const filteredRefs = references.filter(ref => {
    if (filterTier !== 'all' && ref.authorityTier !== filterTier) return false;
    if (query.trim()) {
      const q = query.toLowerCase();
      const matchTitle = ref.title.toLowerCase().includes(q);
      const matchAuthors = ref.authors.some(a => a.toLowerCase().includes(q));
      const matchPub = ref.publicationName.toLowerCase().includes(q);
      if (!matchTitle && !matchAuthors && !matchPub) return false;
    }
    return true;
  });

  const getTierLabel = (tier: string) => {
    switch (tier) {
      case 'tier_1_primary_literature':
        return language === 'bn' ? 'টায়ার ১ • প্রাথমিক পিয়ার-রিভিউড সাহিত্য' : 'Tier 1 • Primary Peer-Reviewed Literature';
      case 'tier_2_authoritative_database':
        return language === 'bn' ? 'টায়ার ২ • স্বীকৃত বৈশ্বিক ট্যাক্সোনমিক ডাটাবেস' : 'Tier 2 • Authoritative Global Taxonomic Database';
      case 'tier_3_secondary':
        return language === 'bn' ? 'টায়ার ৩ • দ্বিতীয় পর্যায়ের সাহিত্য' : 'Tier 3 • Secondary Literature';
      default:
        return tier;
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <BackButton fallbackPath="/species" />
        <Breadcrumbs items={[{ label: t('crumb.references') }]} />
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-emerald-light)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
          <Library size={16} />
          <span>{t('ref.portalTitle')}</span>
        </div>

        <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
          {t('ref.mainHeading')}
        </h1>

        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '820px', lineHeight: '1.6' }}>
          {t('ref.lead')}
        </p>
      </div>

      {/* Filter Ribbon */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ position: 'relative', width: '320px' }}>
          <Search size={16} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder={language === 'bn' ? 'লেখক, শিরোনাম বা জার্নাল অনুসন্ধান...' : 'Search author, title, journal...'}
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="form-input"
            style={{ paddingLeft: '2.3rem' }}
          />
        </div>

        <select
          value={filterTier}
          onChange={e => setFilterTier(e.target.value)}
          className="form-select"
          style={{ width: 'auto' }}
        >
          <option value="all">{language === 'bn' ? 'সকল স্তর (Authority Tiers)' : 'All Authority Tiers'}</option>
          <option value="tier_1_primary_literature">{language === 'bn' ? 'টায়ার ১ প্রাথমিক সাহিত্য' : 'Tier 1 Primary Literature'}</option>
          <option value="tier_2_authoritative_database">{language === 'bn' ? 'টায়ার ২ প্রামাণ্য ডাটাবেস' : 'Tier 2 Authoritative Database'}</option>
        </select>
      </div>

      {/* References List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {filteredRefs.map(ref => (
          <div key={ref.id} className="card" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <span
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  padding: '0.2rem 0.5rem',
                  borderRadius: 'var(--radius-sm)',
                  background: ref.authorityTier === 'tier_1_primary_literature' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(2, 132, 199, 0.15)',
                  color: ref.authorityTier === 'tier_1_primary_literature' ? '#34d399' : '#38bdf8',
                  border: `1px solid ${ref.authorityTier === 'tier_1_primary_literature' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(2, 132, 199, 0.3)'}`,
                }}
              >
                {getTierLabel(ref.authorityTier)}
              </span>

              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Type: {ref.sourceType.replace('_', ' ')}
              </span>
            </div>

            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.35rem', lineHeight: '1.4' }}>
              {ref.title}
            </h3>

            <div style={{ fontSize: '0.9rem', color: 'var(--accent-emerald-light)', fontWeight: 600, marginBottom: '0.4rem', fontFamily: "'Open Sans', sans-serif" }}>
              {ref.authors.join(', ')} ({ref.year})
            </div>

            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
              <strong>{language === 'bn' ? 'প্রকাশনা' : 'Publication'}:</strong> {ref.publicationName} {ref.volume && `Vol. ${ref.volume}`} {ref.issue && `No. ${ref.issue}`} {ref.pages && `pp. ${ref.pages}`}
            </div>

            {ref.notes && (
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', background: 'var(--bg-surface)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', marginBottom: '0.75rem', borderLeft: '3px solid var(--accent-emerald)' }}>
                <strong>{language === 'bn' ? 'উৎস ও যাচাইকরণ নোট' : 'Provenance Notes'}:</strong> {ref.notes}
              </p>
            )}

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '0.8rem', flexWrap: 'wrap' }}>
              {ref.doi && (
                <span style={{ color: 'var(--text-muted)' }}>
                  DOI: <code style={{ color: 'var(--accent-marine-light)', background: 'rgba(2, 132, 199, 0.1)' }}>{ref.doi}</code>
                </span>
              )}
              {ref.url && (
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ padding: '0.25rem 0.6rem', fontSize: '0.75rem', gap: '0.3rem' }}
                >
                  <span>{language === 'bn' ? 'মূল উৎস দেখুন' : 'Access Original Record'}</span>
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
