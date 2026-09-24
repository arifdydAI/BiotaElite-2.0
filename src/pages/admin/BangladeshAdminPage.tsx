// BiotaElite 2.0 Bangladesh Biodiversity Dedicated Admin
// Phase G: Territorial Presence, Residency, National IUCN Assessment & Ecosystem Governance
import React, { useState, useMemo } from 'react';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import type { SpeciesRecord, IUCNStatus, BangladeshResidency } from '../../types/biodiversity';
import { ScientificName } from '../../components/common/ScientificName';
import { 
  MapPin, 
  Search, 
  Edit, 
  X,
  ShieldAlert
} from 'lucide-react';

export const BangladeshAdminPage: React.FC = () => {
  const { species, updateSpecies } = useBiodiversity();
  const { permissions } = useAuth();
  const { language } = useLanguage();

  const [search, setSearch] = useState('');
  const [residencyFilter, setResidencyFilter] = useState<string>('all');
  const [threatFilter, setThreatFilter] = useState<string>('all');
  const [editingSpecies, setEditingSpecies] = useState<SpeciesRecord | null>(null);
  const [page, setPage] = useState(1);
  const pageSize = 25;

  // Form State for editing BD occurrence
  const [formData, setFormData] = useState<{
    present: boolean;
    residencyStatus: BangladeshResidency;
    threatCategoryNational: IUCNStatus;
    nationalAssessmentYear: number;
    nationalStatusSource: string;
    regions: string;
    localNamesBn: string;
    seasonalNotes: string;
  }>({
    present: true,
    residencyStatus: 'native',
    threatCategoryNational: 'LC',
    nationalAssessmentYear: 2015,
    nationalStatusSource: 'IUCN Bangladesh (2015) Red List Volume 5',
    regions: '',
    localNamesBn: '',
    seasonalNotes: '',
  });

  // Filter to only Bangladesh species
  const bdSpecies = useMemo(() => {
    return species.filter(s => s.bangladeshOccurrence.present);
  }, [species]);

  const filtered = useMemo(() => {
    return bdSpecies.filter(s => {
      if (residencyFilter !== 'all' && s.bangladeshOccurrence.residencyStatus !== residencyFilter) {
        return false;
      }
      if (threatFilter !== 'all' && s.bangladeshOccurrence.threatCategoryNational !== threatFilter) {
        return false;
      }
      if (search.trim()) {
        const q = search.toLowerCase();
        return (
          s.scientificName.toLowerCase().includes(q) ||
          s.commonNames.en.some(c => c.toLowerCase().includes(q)) ||
          s.commonNames.bn.some(c => c.includes(q)) ||
          (s.bangladeshOccurrence.regions && s.bangladeshOccurrence.regions.some(r => r.toLowerCase().includes(q)))
        );
      }
      return true;
    });
  }, [bdSpecies, residencyFilter, threatFilter, search]);

  const totalPages = Math.ceil(filtered.length / pageSize) || 1;
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  const threatenedCount = bdSpecies.filter(
    s => s.bangladeshOccurrence.threatCategoryNational === 'CR' || 
         s.bangladeshOccurrence.threatCategoryNational === 'EN' || 
         s.bangladeshOccurrence.threatCategoryNational === 'VU'
  ).length;

  const handleOpenEdit = (sp: SpeciesRecord) => {
    setEditingSpecies(sp);
    setFormData({
      present: sp.bangladeshOccurrence.present,
      residencyStatus: sp.bangladeshOccurrence.residencyStatus || 'native',
      threatCategoryNational: sp.bangladeshOccurrence.threatCategoryNational || 'LC',
      nationalAssessmentYear: sp.bangladeshOccurrence.nationalAssessmentYear || 2015,
      nationalStatusSource: sp.bangladeshOccurrence.nationalStatusSource || 'IUCN Bangladesh (2015) Red List',
      regions: sp.bangladeshOccurrence.regions ? sp.bangladeshOccurrence.regions.join(', ') : '',
      localNamesBn: sp.bangladeshOccurrence.localNamesBn ? sp.bangladeshOccurrence.localNamesBn.join(', ') : '',
      seasonalNotes: sp.bangladeshOccurrence.seasonalNotes || '',
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSpecies) return;

    updateSpecies(
      editingSpecies.id,
      {
        bangladeshOccurrence: {
          ...editingSpecies.bangladeshOccurrence,
          present: formData.present,
          residencyStatus: formData.residencyStatus,
          threatCategoryNational: formData.threatCategoryNational,
          nationalAssessmentYear: Number(formData.nationalAssessmentYear) || 2015,
          nationalStatusSource: formData.nationalStatusSource.trim(),
          regions: formData.regions.split(',').map(r => r.trim()).filter(Boolean),
          localNamesBn: formData.localNamesBn.split(',').map(r => r.trim()).filter(Boolean),
          seasonalNotes: formData.seasonalNotes.trim() || undefined,
        },
      },
      'Updated Bangladesh occurrence and national IUCN status'
    );

    setEditingSpecies(null);
  };

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      {/* Title */}
      <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', margin: 0 }}>
            {language === 'bn' ? 'বাংলাদেশি জীববৈচিত্র্য ও সংরক্ষণ প্রশাসন' : 'Bangladesh Biodiversity Governance'}
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.35rem', marginBottom: 0 }}>
            {language === 'bn'
              ? 'বাংলাদেশের ১১২+ জলজ ও সামুদ্রিক প্রজাতির ভৌগোলিক বিস্তৃতি, জাতীয় রেড লিস্ট স্থিতি ও আবাসস্থল কিউরেশন।'
              : 'Curate occurrence regions, territorial residency, IUCN Bangladesh red list status, and ecosystem linkages.'}
          </p>
        </div>

        {/* Metrics Badge Group */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <div className="card" style={{ padding: '0.6rem 1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <MapPin size={18} style={{ color: '#10b981' }} />
            <div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Total BD Taxa</div>
              <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>{bdSpecies.length}</div>
            </div>
          </div>

          <div className="card" style={{ padding: '0.6rem 1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <ShieldAlert size={18} style={{ color: '#f87171' }} />
            <div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Nationally Threatened</div>
              <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#f87171', lineHeight: 1 }}>{threatenedCount}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="card" style={{ padding: '0.85rem 1.25rem', marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ position: 'relative', width: '320px' }}>
          <Search size={16} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder={language === 'bn' ? 'বাংলাদেশি প্রজাতি বা নদী অববাহিকা খুঁজুন...' : 'Search species or river basin...'}
            value={search}
            onChange={e => { setSearch(e.target.value); setPage(1); }}
            className="form-input"
            style={{ paddingLeft: '2.5rem' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
          {/* Residency Filter */}
          <select
            value={residencyFilter}
            onChange={e => { setResidencyFilter(e.target.value); setPage(1); }}
            className="form-select"
            style={{ width: 'auto', fontSize: '0.78rem' }}
          >
            <option value="all">All Residency Types</option>
            <option value="native">Native</option>
            <option value="resident">Resident</option>
            <option value="migrant">Migrant</option>
            <option value="endemic">Endemic</option>
            <option value="introduced">Introduced</option>
          </select>

          {/* National Threat Category */}
          <select
            value={threatFilter}
            onChange={e => { setThreatFilter(e.target.value); setPage(1); }}
            className="form-select"
            style={{ width: 'auto', fontSize: '0.78rem' }}
          >
            <option value="all">All National Red List Categories</option>
            <option value="CR">Critically Endangered (CR)</option>
            <option value="EN">Endangered (EN)</option>
            <option value="VU">Vulnerable (VU)</option>
            <option value="NT">Near Threatened (NT)</option>
            <option value="LC">Least Concern (LC)</option>
            <option value="DD">Data Deficient (DD)</option>
          </select>
        </div>
      </div>

      {/* Bangladesh Species Table */}
      <div className="data-table-container card" style={{ padding: 0, overflow: 'hidden' }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>Species Binomial</th>
              <th>Common / Bangla Names</th>
              <th>Residency</th>
              <th>National IUCN Status</th>
              <th>Documented Regions & River Basins</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginated.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: '2.5rem', color: 'var(--text-muted)' }}>
                  No Bangladesh species records match the filter criteria.
                </td>
              </tr>
            ) : (
              paginated.map(sp => (
                <tr key={sp.id}>
                  <td>
                    <div style={{ fontWeight: 600, color: '#ffffff' }}>
                      <ScientificName name={sp.scientificName} authorship={sp.scientificNameAuthorship} />
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      {sp.taxonomy.order} • {sp.taxonomy.family}
                    </div>
                  </td>
                  <td>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-primary)' }}>
                      {sp.commonNames.en.join(', ') || '—'}
                    </div>
                    {sp.commonNames.bn.length > 0 && (
                      <div className="bangla-text" style={{ fontSize: '0.8rem', color: 'var(--accent-emerald-light)' }}>
                        {sp.commonNames.bn.join(', ')}
                      </div>
                    )}
                  </td>
                  <td>
                    <span style={{ fontSize: '0.72rem', textTransform: 'capitalize', padding: '0.15rem 0.45rem', borderRadius: '3px', background: 'rgba(16,185,129,0.15)', color: '#10b981', fontWeight: 600 }}>
                      {sp.bangladeshOccurrence.residencyStatus}
                    </span>
                  </td>
                  <td>
                    {sp.bangladeshOccurrence.threatCategoryNational ? (
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          padding: '0.15rem 0.45rem',
                          borderRadius: '3px',
                          background: ['CR', 'EN', 'VU'].includes(sp.bangladeshOccurrence.threatCategoryNational) ? 'rgba(239,68,68,0.15)' : 'rgba(56,189,248,0.15)',
                          color: ['CR', 'EN', 'VU'].includes(sp.bangladeshOccurrence.threatCategoryNational) ? '#f87171' : '#38bdf8',
                        }}
                      >
                        {sp.bangladeshOccurrence.threatCategoryNational}
                      </span>
                    ) : (
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Not Evaluated</span>
                    )}
                  </td>
                  <td>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                      {sp.bangladeshOccurrence.regions && sp.bangladeshOccurrence.regions.length > 0
                        ? sp.bangladeshOccurrence.regions.join(', ')
                        : 'Nationwide / Estuarine'}
                    </div>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    {permissions.canEditSpecies && (
                      <button
                        onClick={() => handleOpenEdit(sp)}
                        className="btn-icon"
                        title="Edit Bangladesh Occurrence Metadata"
                      >
                        <Edit size={14} />
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Pagination Footer */}
        {totalPages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.85rem 1.25rem', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-surface)' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Page {page} of {totalPages} ({filtered.length} total taxa)
            </span>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                disabled={page <= 1}
                onClick={() => setPage(p => Math.max(1, p - 1))}
                className="btn btn-secondary btn-sm"
              >
                Previous
              </button>
              <button
                disabled={page >= totalPages}
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                className="btn btn-secondary btn-sm"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Edit Occurrence Modal */}
      {editingSpecies && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
          }}
        >
          <div
            className="card"
            style={{
              width: '100%',
              maxWidth: '640px',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              padding: '2rem',
              borderRadius: 'var(--radius-lg)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                  Bangladesh Occurrence: {editingSpecies.scientificName}
                </h2>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                  ID: {editingSpecies.id}
                </div>
              </div>
              <button onClick={() => setEditingSpecies(null)} className="btn-icon">
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <input
                  type="checkbox"
                  id="modal-bg-present"
                  checked={formData.present}
                  onChange={e => setFormData({ ...formData, present: e.target.checked })}
                />
                <label htmlFor="modal-bg-present" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#ffffff' }}>
                  Present in Bangladesh territory / EEZ
                </label>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    Residency Status
                  </label>
                  <select
                    value={formData.residencyStatus}
                    onChange={e => setFormData({ ...formData, residencyStatus: e.target.value as BangladeshResidency })}
                    className="form-select"
                  >
                    <option value="native">Native</option>
                    <option value="resident">Resident</option>
                    <option value="migrant">Migrant</option>
                    <option value="endemic">Endemic</option>
                    <option value="introduced">Introduced</option>
                    <option value="invasive">Invasive</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    National Red List Category (IUCN BD)
                  </label>
                  <select
                    value={formData.threatCategoryNational}
                    onChange={e => setFormData({ ...formData, threatCategoryNational: e.target.value as IUCNStatus })}
                    className="form-select"
                  >
                    <option value="CR">Critically Endangered (CR)</option>
                    <option value="EN">Endangered (EN)</option>
                    <option value="VU">Vulnerable (VU)</option>
                    <option value="NT">Near Threatened (NT)</option>
                    <option value="LC">Least Concern (LC)</option>
                    <option value="DD">Data Deficient (DD)</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                  Documented Ecosystems & River Basins (Comma-separated)
                </label>
                <input
                  type="text"
                  value={formData.regions}
                  onChange={e => setFormData({ ...formData, regions: e.target.value })}
                  className="form-input"
                  placeholder="e.g. Bay of Bengal, Padma River, Sundarbans, Meghna Estuary"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    Assessment Year
                  </label>
                  <input
                    type="number"
                    value={formData.nationalAssessmentYear}
                    onChange={e => setFormData({ ...formData, nationalAssessmentYear: Number(e.target.value) })}
                    className="form-input"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    National Status Citation Source
                  </label>
                  <input
                    type="text"
                    value={formData.nationalStatusSource}
                    onChange={e => setFormData({ ...formData, nationalStatusSource: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '0.5rem' }}>
                <button type="button" onClick={() => setEditingSpecies(null)} className="btn btn-secondary">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Bangladesh Status
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
