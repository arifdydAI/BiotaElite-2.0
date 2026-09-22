// BiotaElite 2.0 Bangladesh Biodiversity Portal
import React, { useState } from 'react';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useLanguage } from '../../context/LanguageContext';
import { SpeciesCard } from '../../components/species/SpeciesCard';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { BackButton } from '../../components/common/BackButton';
import { EmptyState } from '../../components/common/EmptyState';
import { MapPin } from 'lucide-react';

export const BangladeshPage: React.FC = () => {
  const { species } = useBiodiversity();
  const { t, language } = useLanguage();
  const [selectedRegion, setSelectedRegion] = useState<string>('all');

  const bdSpecies = species.filter(s => s.bangladeshOccurrence.present && s.isPublished);

  const regions: { id: string; key: string; query: string }[] = [
    { id: 'all', key: 'bd.allRegions', query: '' },
    { id: 'padma', key: 'region.padma', query: 'padma' },
    { id: 'meghna', key: 'region.meghna', query: 'meghna' },
    { id: 'jamuna', key: 'region.jamuna', query: 'jamuna' },
    { id: 'halda', key: 'region.halda', query: 'halda' },
    { id: 'sundarbans', key: 'region.sundarbans', query: 'sundarban' },
    { id: 'bayOfBengal', key: 'region.bayOfBengal', query: 'bay of bengal' },
    { id: 'haor', key: 'region.haor', query: 'haor' }
  ];

  const getRegionCount = (query: string) => {
    if (!query) return bdSpecies.length;
    return bdSpecies.filter(s => s.bangladeshOccurrence.regions.some(r => r.toLowerCase().includes(query))).length;
  };

  const filteredBdSpecies = bdSpecies.filter(s => {
    if (selectedRegion === 'all') return true;
    const regionObj = regions.find(r => r.id === selectedRegion);
    if (!regionObj || !regionObj.query) return true;
    return s.bangladeshOccurrence.regions.some(r => r.toLowerCase().includes(regionObj.query));
  });

  const threatenedCount = bdSpecies.filter(s => {
    const cat = s.bangladeshOccurrence.bangladeshNationalStatus || s.bangladeshOccurrence.threatCategoryNational;
    return cat === 'CR' || cat === 'EN' || cat === 'VU';
  }).length;

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <BackButton fallbackPath="/species" />
        <Breadcrumbs items={[{ label: t('crumb.bangladesh') }]} />
      </div>

      {/* Hero */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.14) 0%, rgba(15, 25, 29, 0.95) 100%)',
          border: '1px solid rgba(217, 119, 6, 0.3)',
          borderRadius: 'var(--radius-xl)',
          padding: '2.5rem 2rem',
          marginBottom: '2rem',
        }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#fbbf24', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem' }}>
          <MapPin size={16} />
          <span>{t('bd.portalTitle')}</span>
        </div>

        <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
          {t('bd.mainHeading')}
        </h1>

        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '820px', lineHeight: '1.6' }}>
          {t('bd.lead')}
        </p>

        {/* Highlight Stats */}
        <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff' }}>{bdSpecies.length}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t('bd.documentedSpecies')}</div>
          </div>
          <div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f87171' }}>{threatenedCount}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t('bd.threatenedNational')}</div>
          </div>
          <div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--accent-emerald-light)' }}>100%</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t('bd.provenanceGuarantee')}</div>
          </div>
        </div>
      </div>

      {/* Ecological Regions Filter */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.6rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {t('bd.filterByRegion')}
        </label>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {regions.map(r => {
            const count = getRegionCount(r.query);
            return (
              <button
                key={r.id}
                onClick={() => setSelectedRegion(r.id)}
                className={`btn btn-sm ${selectedRegion === r.id ? 'btn-primary' : 'btn-secondary'}`}
                style={{ fontSize: '0.82rem', gap: '0.4rem', display: 'inline-flex', alignItems: 'center' }}
              >
                <span>{t(r.key)}</span>
                <span
                  style={{
                    background: selectedRegion === r.id ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                    borderRadius: '10px',
                    padding: '0.1rem 0.45rem',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Species Grid or Honest Empty State */}
      {filteredBdSpecies.length > 0 ? (
        <div className="grid-species">
          {filteredBdSpecies.map(sp => (
            <SpeciesCard key={sp.id} species={sp} />
          ))}
        </div>
      ) : (
        <EmptyState
          title={language === 'bn' ? 'এই অঞ্চলে কোনো নথিবদ্ধ প্রজাতি পাওয়া যায়নি' : 'No Documented Taxa for This Ecological Zone'}
          description={language === 'bn' ? 'বায়োটাএলিট কেবলমাত্র প্রামাণ্য নথিবদ্ধ উপস্থিতি প্রদর্শন করে। এই অঞ্চলে এখনও পর্যন্ত কোনো প্রজাতির উপস্থিতি নিশ্চিত হয়নি।' : 'BiotaElite strictly enforces verified provenance. No species records have been verified for this specific river system yet.'}
          actionText={t('filter.clear')}
          onAction={() => setSelectedRegion('all')}
          icon="search"
        />
      )}
    </div>
  );
};
