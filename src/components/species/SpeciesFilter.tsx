// BiotaElite 2.0 Faceted Species Filter Component
import React from 'react';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useLanguage } from '../../context/LanguageContext';
import type { AquaticSystem, IUCNStatus } from '../../types/biodiversity';
import { Filter, RotateCcw } from 'lucide-react';

export const SpeciesFilter: React.FC = () => {
  const { filters, setFilters, resetFilters, filteredSpecies, species } = useBiodiversity();
  const { t } = useLanguage();

  const handleHabitatChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({ ...prev, habitat: e.target.value as AquaticSystem | 'all' }));
  };

  const handleConservationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({ ...prev, conservation: e.target.value as IUCNStatus | 'all' }));
  };

  const handleClassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({ ...prev, classFilter: e.target.value }));
  };

  return (
    <div
      className="card"
      style={{
        padding: '1.25rem',
        marginBottom: '1.75rem',
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Filter size={18} style={{ color: 'var(--accent-emerald)' }} />
          <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
            {t('filter.title')}
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            ({filteredSpecies.length} of {species.length} {t('common.recordsCount')})
          </span>
        </div>

        <button
          onClick={resetFilters}
          className="btn btn-secondary btn-sm"
          style={{ gap: '0.35rem', fontSize: '0.75rem' }}
        >
          <RotateCcw size={12} />
          <span>{t('filter.clear')}</span>
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
        {/* Search Query */}
        <div>
          <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
            {t('filter.nameSearch')}
          </label>
          <input
            type="text"
            placeholder={t('filter.queryPlaceholder')}
            value={filters.searchQuery}
            onChange={(e) => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
            className="form-input"
          />
        </div>

        {/* Habitat System */}
        <div>
          <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
            {t('filter.habitat')}
          </label>
          <select value={filters.habitat} onChange={handleHabitatChange} className="form-select">
            <option value="all">{t('filter.allHabitats')}</option>
            <option value="freshwater">{t('filter.freshwater')}</option>
            <option value="marine">{t('filter.marine')}</option>
            <option value="brackish">{t('filter.brackish')}</option>
          </select>
        </div>

        {/* Conservation Status */}
        <div>
          <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
            {t('filter.conservation')}
          </label>
          <select value={filters.conservation} onChange={handleConservationChange} className="form-select">
            <option value="all">{t('filter.allConservation')}</option>
            <option value="CR">{t('iucn.CR')}</option>
            <option value="EN">{t('iucn.EN')}</option>
            <option value="VU">{t('iucn.VU')}</option>
            <option value="NT">{t('iucn.NT')}</option>
            <option value="LC">{t('iucn.LC')}</option>
          </select>
        </div>

        {/* Taxonomic Class */}
        <div>
          <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
            {t('filter.class')}
          </label>
          <select value={filters.classFilter} onChange={handleClassChange} className="form-select">
            <option value="all">{t('filter.allClasses')}</option>
            <option value="Actinopterygii">Actinopterygii (Ray-finned fishes)</option>
            <option value="Chondrichthyes">Chondrichthyes (Cartilaginous fishes)</option>
            <option value="Mammalia">Mammalia (Cetaceans/Mammals)</option>
          </select>
        </div>
      </div>

      {/* Bangladesh Occurrence Checkbox */}
      <div style={{ marginTop: '1rem', paddingTop: '0.85rem', borderTop: '1px solid rgba(32, 53, 61, 0.4)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <label style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          <input
            type="checkbox"
            checked={filters.bangladeshPresenceOnly}
            onChange={(e) => setFilters(prev => ({ ...prev, bangladeshPresenceOnly: e.target.checked }))}
            style={{ width: '16px', height: '16px', accentColor: 'var(--accent-emerald)', cursor: 'pointer' }}
          />
          <span style={{ fontWeight: 600, color: filters.bangladeshPresenceOnly ? 'var(--accent-emerald-light)' : 'inherit' }}>
            {t('filter.bangladeshPresence')}
          </span>
        </label>
      </div>
    </div>
  );
};
