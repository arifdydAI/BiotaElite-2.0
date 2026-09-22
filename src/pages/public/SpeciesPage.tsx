// BiotaElite 2.0 Species Catalog Explorer
import React, { useState } from 'react';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useLanguage } from '../../context/LanguageContext';
import { SpeciesCard } from '../../components/species/SpeciesCard';
import { SpeciesFilter } from '../../components/species/SpeciesFilter';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { BackButton } from '../../components/common/BackButton';
import { EmptyState } from '../../components/common/EmptyState';
import { Grid, Fish, Waves, Compass, Award } from 'lucide-react';

export const SpeciesPage: React.FC = () => {
  const { species, filteredSpecies, resetFilters } = useBiodiversity();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'finfishes' | 'mammals' | 'marine' | 'bd'>('all');

  // Filter based on active quick-tab
  const tabFilteredSpecies = filteredSpecies.filter(s => {
    if (!s.isPublished) return false;
    if (activeTab === 'finfishes') {
      return s.taxonomy.class === 'Actinopterygii' || s.taxonomy.class === 'Chondrichthyes';
    }
    if (activeTab === 'mammals') {
      return s.taxonomy.class === 'Mammalia';
    }
    if (activeTab === 'marine') {
      return s.habitat.systems.includes('marine') || (s.habitat.systems.includes('brackish') && s.bangladeshOccurrence.regions.some(r => r.toLowerCase().includes('bay') || r.toLowerCase().includes('coastal') || r.toLowerCase().includes('sundarban') || r.toLowerCase().includes('shelf') || r.toLowerCase().includes('estuary')));
    }
    if (activeTab === 'bd') {
      return s.bangladeshOccurrence.present;
    }
    return true;
  });

  const finfishCount = species.filter(s => (s.taxonomy.class === 'Actinopterygii' || s.taxonomy.class === 'Chondrichthyes') && s.isPublished).length;
  const mammalCount = species.filter(s => s.taxonomy.class === 'Mammalia' && s.isPublished).length;
  const marineCount = species.filter(s => (s.habitat.systems.includes('marine') || (s.habitat.systems.includes('brackish') && s.bangladeshOccurrence.regions.some(r => r.toLowerCase().includes('bay') || r.toLowerCase().includes('coastal') || r.toLowerCase().includes('sundarban') || r.toLowerCase().includes('shelf') || r.toLowerCase().includes('estuary')))) && s.isPublished).length;
  const bdCount = species.filter(s => s.bangladeshOccurrence.present && s.isPublished).length;

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.5rem' }}>
        <Breadcrumbs items={[{ label: t('nav.species') }]} />
        <BackButton fallbackTo="/" />
      </div>

      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.4rem' }}>
          {t('species.title')}
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '800px', lineHeight: '1.6' }}>
          {t('species.subtitle')}
        </p>
      </div>

      {/* Module Scope Tabs */}
      <div className="module-subnav" role="tablist" aria-label="Species Category Navigation">
        <button
          role="tab"
          aria-selected={activeTab === 'all'}
          onClick={() => setActiveTab('all')}
          className={`module-subnav-btn ${activeTab === 'all' ? 'active' : ''}`}
        >
          <Grid size={14} />
          <span>{t('subnav.all')}</span>
          <span className="module-badge-count">{species.filter(s => s.isPublished).length}</span>
        </button>

        <button
          role="tab"
          aria-selected={activeTab === 'finfishes'}
          onClick={() => setActiveTab('finfishes')}
          className={`module-subnav-btn ${activeTab === 'finfishes' ? 'active' : ''}`}
        >
          <Fish size={14} />
          <span>{t('subnav.finfishes')}</span>
          <span className="module-badge-count">{finfishCount}</span>
        </button>

        <button
          role="tab"
          aria-selected={activeTab === 'mammals'}
          onClick={() => setActiveTab('mammals')}
          className={`module-subnav-btn ${activeTab === 'mammals' ? 'active' : ''}`}
        >
          <Compass size={14} />
          <span>{t('subnav.mammals')}</span>
          <span className="module-badge-count">{mammalCount}</span>
        </button>

        <button
          role="tab"
          aria-selected={activeTab === 'marine'}
          onClick={() => setActiveTab('marine')}
          className={`module-subnav-btn ${activeTab === 'marine' ? 'active' : ''}`}
        >
          <Waves size={14} />
          <span>{t('subnav.marineCoastal')}</span>
          <span className="module-badge-count">{marineCount}</span>
        </button>

        <button
          role="tab"
          aria-selected={activeTab === 'bd'}
          onClick={() => setActiveTab('bd')}
          className={`module-subnav-btn ${activeTab === 'bd' ? 'active' : ''}`}
        >
          <Award size={14} />
          <span>{t('subnav.bdPriority')}</span>
          <span className="module-badge-count">{bdCount}</span>
        </button>
      </div>

      {/* Faceted Filter Drawer */}
      <SpeciesFilter />

      {/* Results Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
          {t('species.showing')}: <strong style={{ color: 'var(--accent-emerald-light)' }}>{tabFilteredSpecies.length}</strong> {t('common.recordsCount')}
        </div>
      </div>

      {/* Grid or Empty State */}
      {tabFilteredSpecies.length > 0 ? (
        <div className="grid-species">
          {tabFilteredSpecies.map(sp => (
            <SpeciesCard key={sp.id} species={sp} />
          ))}
        </div>
      ) : (
        <EmptyState
          title={t('species.noResults')}
          description={t('species.noResultsDesc')}
          actionText={t('common.clearFilters')}
          onAction={resetFilters}
          icon="search"
        />
      )}
    </div>
  );
};
