// BiotaElite 2.0 Scientific Names & Synonymy Governance Manager
// Phase K: Binomial Nomenclature, Homotypic/Heterotypic Synonyms, Basionyms & Status Curation
import React, { useState, useMemo } from 'react';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import type { SpeciesRecord, SynonymRecord } from '../../types/biodiversity';
import { 
  Tag, 
  Search, 
  Trash2, 
  Plus, 
  X,
  ArrowRight
} from 'lucide-react';

export const ScientificNamesManagerPage: React.FC = () => {
  const { species, updateSpecies } = useBiodiversity();
  const { permissions } = useAuth();
  const { language } = useLanguage();

  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedSpecies, setSelectedSpecies] = useState<SpeciesRecord | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State for adding a synonym
  const [formData, setFormData] = useState<SynonymRecord>({
    name: '',
    authorship: '',
    status: 'heterotypic',
    year: undefined,
    isBasionym: false,
    sourceId: '',
  });

  // Flattened synonyms list with parent species pointer
  const allSynonyms = useMemo(() => {
    const list: Array<SynonymRecord & { speciesId: string; acceptedBinomial: string }> = [];
    for (const sp of species) {
      if (sp.synonyms && Array.isArray(sp.synonyms)) {
        for (const syn of sp.synonyms) {
          list.push({
            ...syn,
            speciesId: sp.id,
            acceptedBinomial: sp.scientificName,
          });
        }
      }
    }
    return list;
  }, [species]);

  const filteredSynonyms = useMemo(() => {
    return allSynonyms.filter(s => {
      if (statusFilter !== 'all' && s.status !== statusFilter) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        return (
          s.name.toLowerCase().includes(q) ||
          s.authorship.toLowerCase().includes(q) ||
          s.acceptedBinomial.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [allSynonyms, statusFilter, search]);

  const handleOpenAdd = (sp: SpeciesRecord) => {
    setSelectedSpecies(sp);
    setFormData({
      name: '',
      authorship: '',
      status: 'heterotypic',
      year: undefined,
      isBasionym: false,
      sourceId: '',
    });
    setIsModalOpen(true);
  };

  const handleSaveSynonym = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSpecies) return;

    const cleanName = formData.name.trim();
    if (!cleanName) return;

    const newSynonym: SynonymRecord = {
      name: cleanName,
      authorship: formData.authorship.trim(),
      status: formData.status,
      year: formData.year ? Number(formData.year) : undefined,
      isBasionym: formData.isBasionym,
      sourceId: formData.sourceId?.trim() || undefined,
    };

    updateSpecies(
      selectedSpecies.id,
      {
        synonyms: [...(selectedSpecies.synonyms || []), newSynonym],
      },
      `Added synonym ${cleanName} to ${selectedSpecies.scientificName}`
    );

    setIsModalOpen(false);
  };

  const handleDeleteSynonym = (speciesId: string, synonymName: string) => {
    const sp = species.find(s => s.id === speciesId);
    if (!sp) return;

    if (window.confirm(`Delete synonym "${synonymName}" from ${sp.scientificName}?`)) {
      updateSpecies(
        speciesId,
        {
          synonyms: (sp.synonyms || []).filter(s => s.name !== synonymName),
        },
        `Removed synonym ${synonymName}`
      );
    }
  };

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', margin: 0 }}>
            {language === 'bn' ? 'বৈজ্ঞানিক নাম ও সমার্থক নাম প্রশাসন' : 'Scientific Names & Synonymy Resolution'}
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.35rem', marginBottom: 0 }}>
            {language === 'bn'
              ? '২০১টি ঐতিহাসিক বৈজ্ঞানিক সমার্থক নাম, মূল বাসিয়োনিম ও আন্তর্জাতিক প্রাণিবিজ্ঞান নামকরণ কোড (ICZN) কিউরেশন।'
              : 'Curate 201 nomenclatural synonyms, homotypic/heterotypic status, original basionyms, and ICZN compliance.'}
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          {permissions.canManageTaxonomy && species.length > 0 && (
            <button
              onClick={() => handleOpenAdd(species[0])}
              className="btn btn-primary"
              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem' }}
            >
              <Plus size={15} />
              <span>{language === 'bn' ? 'সমার্থক নাম যোগ করুন' : 'Add Synonym'}</span>
            </button>
          )}

          <div className="card" style={{ padding: '0.6rem 1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Tag size={18} style={{ color: '#c084fc' }} />
            <div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Total Synonyms</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>{allSynonyms.length}</div>
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
            placeholder={language === 'bn' ? 'সমার্থক বা স্বীকৃত নাম অনুসন্ধান...' : 'Search synonym or accepted name...'}
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="form-input"
            style={{ paddingLeft: '2.5rem' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Status:</span>
          {['all', 'heterotypic', 'homotypic', 'misapplied', 'provisional'].map(st => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`btn btn-sm ${statusFilter === st ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: '0.75rem', textTransform: 'capitalize' }}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Synonyms Table */}
      <div className="data-table-container card" style={{ padding: 0, overflow: 'hidden' }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>Synonym Binomial</th>
              <th>Authority & Year</th>
              <th>Nomenclatural Status</th>
              <th>Basionym</th>
              <th>Accepted Canonical Species</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredSynonyms.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: '2.5rem', color: 'var(--text-muted)' }}>
                  No scientific synonyms match the specified query.
                </td>
              </tr>
            ) : (
              filteredSynonyms.map((syn, idx) => (
                <tr key={`${syn.speciesId}-${syn.name}-${idx}`}>
                  <td>
                    <div style={{ fontWeight: 600, color: '#ffffff', fontStyle: 'italic', fontFamily: "'Open Sans', sans-serif" }}>
                      {syn.name}
                    </div>
                  </td>
                  <td>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                      {syn.authorship || '—'} {syn.year ? `(${syn.year})` : ''}
                    </div>
                  </td>
                  <td>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        padding: '0.15rem 0.45rem',
                        borderRadius: '3px',
                        background: syn.status === 'homotypic' ? 'rgba(56,189,248,0.15)' : 'rgba(192,132,252,0.15)',
                        color: syn.status === 'homotypic' ? '#38bdf8' : '#c084fc',
                        border: `1px solid ${syn.status === 'homotypic' ? 'rgba(56,189,248,0.3)' : 'rgba(192,132,252,0.3)'}`,
                      }}
                    >
                      {syn.status}
                    </span>
                  </td>
                  <td>
                    {syn.isBasionym ? (
                      <span style={{ fontSize: '0.72rem', padding: '0.15rem 0.45rem', borderRadius: '3px', background: 'rgba(16,185,129,0.15)', color: '#10b981', fontWeight: 700 }}>
                        Original Basionym
                      </span>
                    ) : (
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>—</span>
                    )}
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <ArrowRight size={12} style={{ color: 'var(--accent-marine-light)' }} />
                      <span style={{ fontWeight: 600, color: 'var(--accent-emerald-light)', fontStyle: 'italic' }}>
                        {syn.acceptedBinomial}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                      ID: {syn.speciesId}
                    </div>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    {permissions.canEditSpecies && (
                      <button
                        onClick={() => handleDeleteSynonym(syn.speciesId, syn.name)}
                        className="btn-icon"
                        style={{ color: '#ef4444' }}
                        title="Delete Synonym"
                      >
                        <Trash2 size={13} />
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Add Synonym Modal */}
      {isModalOpen && selectedSpecies && (
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
              maxWidth: '560px',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              padding: '2rem',
              borderRadius: 'var(--radius-lg)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                  Add Synonym to {selectedSpecies.scientificName}
                </h2>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="btn-icon">
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSaveSynonym} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                  Synonym Latin Binomial *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                  style={{ fontStyle: 'italic', fontFamily: "'Open Sans', sans-serif" }}
                  placeholder="e.g. Clupea ilisha"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    Authorship
                  </label>
                  <input
                    type="text"
                    value={formData.authorship}
                    onChange={e => setFormData({ ...formData, authorship: e.target.value })}
                    className="form-input"
                    placeholder="e.g. Hamilton, 1822"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    Year
                  </label>
                  <input
                    type="number"
                    value={formData.year || ''}
                    onChange={e => setFormData({ ...formData, year: e.target.value ? Number(e.target.value) : undefined })}
                    className="form-input"
                    placeholder="1822"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    Nomenclatural Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={e => setFormData({ ...formData, status: e.target.value as typeof formData.status })}
                    className="form-select"
                  >
                    <option value="heterotypic">Heterotypic (Subjective)</option>
                    <option value="homotypic">Homotypic (Objective)</option>
                    <option value="misapplied">Misapplied Name</option>
                    <option value="provisional">Provisional</option>
                  </select>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', marginTop: '1.5rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#ffffff', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={formData.isBasionym}
                      onChange={e => setFormData({ ...formData, isBasionym: e.target.checked })}
                    />
                    <span>Original Basionym</span>
                  </label>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '0.5rem' }}>
                <button type="button" onClick={() => setIsModalOpen(false)} className="btn btn-secondary">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Synonym Record
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
