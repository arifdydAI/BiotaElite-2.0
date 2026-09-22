// BiotaElite 2.0 Scientific Names & Zoological Nomenclature Catalog
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useLanguage } from '../../context/LanguageContext';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { BackButton } from '../../components/common/BackButton';
import { BookOpen, Search, ArrowRight } from 'lucide-react';

export const ScientificNamesPage: React.FC = () => {
  const { species } = useBiodiversity();
  const { t, language } = useLanguage();
  const [filterQuery, setFilterQuery] = useState('');

  // Collect all accepted names and synonyms
  const allNames: Array<{
    name: string;
    authorship: string;
    status: string;
    acceptedName: string;
    speciesId: string;
    family: string;
    class: string;
    year?: number;
  }> = [];

  species.forEach(sp => {
    // Accepted name
    allNames.push({
      name: sp.scientificName,
      authorship: sp.scientificNameAuthorship,
      status: 'accepted',
      acceptedName: sp.scientificName,
      speciesId: sp.id,
      family: sp.taxonomy.family,
      class: sp.taxonomy.class,
    });

    // Synonyms
    sp.synonyms.forEach(syn => {
      allNames.push({
        name: syn.name,
        authorship: syn.authorship,
        status: syn.status,
        acceptedName: sp.scientificName,
        speciesId: sp.id,
        family: sp.taxonomy.family,
        class: sp.taxonomy.class,
        year: syn.year,
      });
    });
  });

  const filteredNames = allNames.filter(item => {
    const q = filterQuery.toLowerCase();
    return item.name.toLowerCase().includes(q) || item.authorship.toLowerCase().includes(q) || item.acceptedName.toLowerCase().includes(q);
  });

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <BackButton fallbackPath="/species" />
        <Breadcrumbs items={[{ label: t('names.mainHeading') }]} />
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-marine-light)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
          <BookOpen size={16} />
          <span>{t('names.portalTitle')}</span>
        </div>

        <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
          {t('names.mainHeading')}
        </h1>

        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '820px', lineHeight: '1.6' }}>
          {t('names.lead')}
        </p>
      </div>

      {/* Filter */}
      <div style={{ maxWidth: '400px', marginBottom: '1.5rem', position: 'relative' }}>
        <Search size={16} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
        <input
          type="text"
          placeholder={language === 'bn' ? 'নাম বা লেখক অনুযায়ী অনুসন্ধান...' : 'Filter by name or author...'}
          value={filterQuery}
          onChange={e => setFilterQuery(e.target.value)}
          className="form-input"
          style={{ paddingLeft: '2.3rem' }}
        />
      </div>

      {/* Nomenclature Table */}
      <div className="data-table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>{t('names.binomial')}</th>
              <th>{t('names.authorship')}</th>
              <th>{t('names.status')}</th>
              <th>{t('names.acceptedTaxon')}</th>
              <th>{t('names.higherTaxa')}</th>
              <th>{t('names.action')}</th>
            </tr>
          </thead>
          <tbody>
            {filteredNames.map((entry, idx) => (
              <tr key={idx}>
                <td>
                  <span className="scientific-name" style={{ fontStyle: 'italic', fontFamily: "'Open Sans', sans-serif", fontWeight: 600, color: '#ffffff' }}>
                    {entry.name}
                  </span>
                </td>
                <td style={{ color: 'var(--text-muted)', fontFamily: "'Open Sans', sans-serif" }}>
                  {entry.authorship}
                </td>
                <td>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                      padding: '0.15rem 0.45rem',
                      borderRadius: '3px',
                      background: entry.status === 'accepted' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(217, 119, 6, 0.15)',
                      color: entry.status === 'accepted' ? '#34d399' : '#fbbf24',
                      border: `1px solid ${entry.status === 'accepted' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(217, 119, 6, 0.3)'}`,
                    }}
                  >
                    {entry.status === 'accepted' ? t('names.accepted') : entry.status}
                  </span>
                </td>
                <td>
                  <span className="scientific-name" style={{ fontStyle: 'italic', fontFamily: "'Open Sans', sans-serif" }}>
                    {entry.acceptedName}
                  </span>
                </td>
                <td style={{ fontFamily: "'Open Sans', sans-serif" }}>
                  {entry.class} • {entry.family}
                </td>
                <td>
                  <Link
                    to={`/species/${entry.speciesId}`}
                    className="btn btn-secondary btn-sm"
                    style={{ padding: '0.2rem 0.5rem', fontSize: '0.75rem', gap: '0.25rem' }}
                  >
                    <span>{language === 'bn' ? 'প্রোফাইল' : 'Profile'}</span>
                    <ArrowRight size={11} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
