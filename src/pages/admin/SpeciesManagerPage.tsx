// BiotaElite 2.0 Species CRUD & Lifecycle Management
import React, { useState } from 'react';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useAuth } from '../../context/AuthContext';
import type { SpeciesRecord, LifecycleStatus, IUCNStatus, BangladeshResidency } from '../../types/biodiversity';
import { ScientificName } from '../../components/common/ScientificName';
import { StatusBadge } from '../../components/common/StatusBadge';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  CheckCircle2, 
  Archive, 
  X 
} from 'lucide-react';

export const SpeciesManagerPage: React.FC = () => {
  const { 
    species, 
    addSpecies, 
    updateSpecies, 
    verifySpecies, 
    publishSpecies, 
    unpublishSpecies, 
    archiveSpecies, 
    deleteSpecies,
    references 
  } = useBiodiversity();
  const { permissions } = useAuth();

  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSpecies, setEditingSpecies] = useState<SpeciesRecord | null>(null);

  // Form State
  const [formData, setFormData] = useState<{
    scientificName: string;
    scientificNameAuthorship: string;
    commonNamesEn: string;
    commonNamesBn: string;
    class: string;
    order: string;
    family: string;
    genus: string;
    description: string;
    diagnosticFeatures: string;
    systems: string[];
    bangladeshPresent: boolean;
    bangladeshRegions: string;
    bangladeshResidency: BangladeshResidency;
    nationalRedList: IUCNStatus;
    iucnGlobalStatus: IUCNStatus;
    iucnAssessmentYear: number;
    referenceId: string;
    threats: string;
  }>({
    scientificName: '',
    scientificNameAuthorship: '',
    commonNamesEn: '',
    commonNamesBn: '',
    class: 'Actinopterygii',
    order: '',
    family: '',
    genus: '',
    description: '',
    diagnosticFeatures: '',
    systems: ['freshwater'],
    bangladeshPresent: true,
    bangladeshRegions: '',
    bangladeshResidency: 'native',
    nationalRedList: 'LC',
    iucnGlobalStatus: 'LC',
    iucnAssessmentYear: 2024,
    referenceId: references[0]?.id || '',
    threats: '',
  });

  const filteredSpecies = species.filter(s => {
    if (statusFilter !== 'all' && s.lifecycleStatus !== statusFilter) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      return (
        s.scientificName.toLowerCase().includes(q) ||
        s.taxonomy.family.toLowerCase().includes(q) ||
        s.commonNames.en.some(c => c.toLowerCase().includes(q))
      );
    }
    return true;
  });

  const handleOpenCreate = () => {
    setEditingSpecies(null);
    setFormData({
      scientificName: '',
      scientificNameAuthorship: '',
      commonNamesEn: '',
      commonNamesBn: '',
      class: 'Actinopterygii',
      order: '',
      family: '',
      genus: '',
      description: '',
      diagnosticFeatures: '',
      systems: ['freshwater'],
      bangladeshPresent: true,
      bangladeshRegions: 'Padma River',
      bangladeshResidency: 'native',
      nationalRedList: 'LC',
      iucnGlobalStatus: 'LC',
      iucnAssessmentYear: 2024,
      referenceId: references[0]?.id || '',
      threats: 'Habitat alteration',
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (sp: SpeciesRecord) => {
    setEditingSpecies(sp);
    setFormData({
      scientificName: sp.scientificName,
      scientificNameAuthorship: sp.scientificNameAuthorship,
      commonNamesEn: sp.commonNames.en.join(', '),
      commonNamesBn: sp.commonNames.bn.join(', '),
      class: sp.taxonomy.class,
      order: sp.taxonomy.order,
      family: sp.taxonomy.family,
      genus: sp.taxonomy.genus,
      description: sp.morphology.description,
      diagnosticFeatures: sp.morphology.diagnosticFeatures.join('\n'),
      systems: sp.habitat.systems,
      bangladeshPresent: sp.bangladeshOccurrence.present,
      bangladeshRegions: sp.bangladeshOccurrence.regions.join(', '),
      bangladeshResidency: sp.bangladeshOccurrence.residencyStatus,
      nationalRedList: sp.bangladeshOccurrence.threatCategoryNational || 'LC',
      iucnGlobalStatus: sp.conservation.iucnGlobalStatus,
      iucnAssessmentYear: sp.conservation.iucnAssessmentYear,
      referenceId: sp.referenceIds[0] || '',
      threats: sp.conservation.threats.join(', '),
    });
    setIsModalOpen(true);
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();

    const recordPayload = {
      scientificName: formData.scientificName.trim(),
      scientificNameAuthorship: formData.scientificNameAuthorship.trim(),
      taxonomicStatus: 'accepted' as const,
      synonyms: [],
      commonNames: {
        en: formData.commonNamesEn.split(',').map(s => s.trim()).filter(Boolean),
        bn: formData.commonNamesBn.split(',').map(s => s.trim()).filter(Boolean),
      },
      taxonomy: {
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: formData.class.trim(),
        order: formData.order.trim(),
        family: formData.family.trim(),
        genus: formData.genus.trim() || formData.scientificName.split(' ')[0],
        species: formData.scientificName.trim(),
      },
      morphology: {
        diagnosticFeatures: formData.diagnosticFeatures.split('\n').map(s => s.trim()).filter(Boolean),
        description: formData.description.trim(),
      },
      habitat: {
        systems: formData.systems as ('freshwater' | 'marine' | 'brackish')[],
        zones: ['riverine'],
      },
      bangladeshOccurrence: {
        present: formData.bangladeshPresent,
        regions: formData.bangladeshRegions.split(',').map(s => s.trim()).filter(Boolean),
        habitatTypes: ['riverine'],
        residencyStatus: formData.bangladeshResidency,
        threatCategoryNational: formData.nationalRedList,
      },
      ecology: {
        dietCategory: 'omnivore' as const,
      },
      conservation: {
        iucnGlobalStatus: formData.iucnGlobalStatus,
        iucnAssessmentYear: Number(formData.iucnAssessmentYear) || 2024,
        threats: formData.threats.split(',').map(s => s.trim()).filter(Boolean),
      },
      lifecycleStatus: editingSpecies ? editingSpecies.lifecycleStatus : ('draft' as LifecycleStatus),
      isVerified: editingSpecies ? editingSpecies.isVerified : false,
      isPublished: editingSpecies ? editingSpecies.isPublished : false,
      referenceIds: formData.referenceId ? [formData.referenceId] : [],
      media: editingSpecies ? editingSpecies.media : [],
    };

    if (editingSpecies) {
      updateSpecies(editingSpecies.id, recordPayload, 'Updated via Admin Species Manager');
    } else {
      addSpecies(recordPayload);
    }

    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Title & Actions */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>
            Species Lifecycle & Data Manager
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Create, edit, review, verify, publish, and archive zoological species records.
          </p>
        </div>

        {permissions.canCreateSpecies && (
          <button onClick={handleOpenCreate} className="btn btn-primary" style={{ gap: '0.4rem' }}>
            <Plus size={16} />
            <span>Create Species Draft</span>
          </button>
        )}
      </div>

      {/* Filter and Search Bar */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ position: 'relative', width: '300px' }}>
          <Search size={16} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Search binomial, family, common..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="form-input"
            style={{ paddingLeft: '2.3rem' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
          {['all', 'draft', 'under_review', 'verified', 'published', 'archived'].map(st => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`btn btn-sm ${statusFilter === st ? 'btn-primary' : 'btn-secondary'}`}
              style={{ textTransform: 'capitalize', fontSize: '0.75rem' }}
            >
              {st.replace('_', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Species Table */}
      <div className="data-table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Scientific Binomial</th>
              <th>Common Names</th>
              <th>Taxonomy</th>
              <th>Status</th>
              <th>Verified</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredSpecies.map(sp => (
              <tr key={sp.id}>
                <td>
                  <div style={{ fontWeight: 600, color: '#ffffff' }}>
                    <ScientificName name={sp.scientificName} authorship={sp.scientificNameAuthorship} />
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>ID: {sp.id}</div>
                </td>
                <td>
                  <div>{sp.commonNames.en.join(', ') || '—'}</div>
                  {sp.commonNames.bn.length > 0 && (
                    <div className="bangla-text" style={{ fontSize: '0.85rem', color: 'var(--accent-emerald-light)' }}>
                      {sp.commonNames.bn.join(', ')}
                    </div>
                  )}
                </td>
                <td>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {sp.taxonomy.class} • {sp.taxonomy.family}
                  </span>
                </td>
                <td>
                  <StatusBadge status={sp.lifecycleStatus} />
                </td>
                <td>
                  {sp.isVerified ? (
                    <span style={{ color: 'var(--accent-emerald-light)', display: 'inline-flex', alignItems: 'center', gap: '0.2rem', fontSize: '0.75rem', fontWeight: 600 }}>
                      <CheckCircle2 size={13} /> Yes
                    </span>
                  ) : (
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>No</span>
                  )}
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    {/* Edit */}
                    {permissions.canEditSpecies && (
                      <button
                        onClick={() => handleOpenEdit(sp)}
                        className="btn-icon"
                        title="Edit Record"
                      >
                        <Edit size={14} />
                      </button>
                    )}

                    {/* Submit for Review (if draft) */}
                    {sp.lifecycleStatus === 'draft' && (
                      <button
                        onClick={() => updateSpecies(sp.id, { lifecycleStatus: 'under_review' }, 'Submitted for peer review')}
                        className="btn btn-secondary btn-sm"
                        style={{ padding: '0.2rem 0.5rem', fontSize: '0.7rem', color: '#f59e0b' }}
                        title="Submit for Peer Review"
                      >
                        Submit Review
                      </button>
                    )}

                    {/* Verify (if reviewer or admin) */}
                    {permissions.canVerifySpecies && !sp.isVerified && (
                      <button
                        onClick={() => verifySpecies(sp.id, 'Verified by taxonomic reviewer')}
                        className="btn btn-sm"
                        style={{ padding: '0.2rem 0.5rem', fontSize: '0.7rem', background: 'rgba(2, 132, 199, 0.2)', color: '#38bdf8' }}
                        title="Verify Record"
                      >
                        Verify
                      </button>
                    )}

                    {/* Publish (if reviewer/admin) */}
                    {permissions.canPublishSpecies && !sp.isPublished && (
                      <button
                        onClick={() => publishSpecies(sp.id)}
                        className="btn btn-primary btn-sm"
                        style={{ padding: '0.2rem 0.5rem', fontSize: '0.7rem' }}
                        title="Publish to Public Site"
                      >
                        Publish
                      </button>
                    )}

                    {/* Unpublish */}
                    {permissions.canPublishSpecies && sp.isPublished && (
                      <button
                        onClick={() => unpublishSpecies(sp.id)}
                        className="btn btn-secondary btn-sm"
                        style={{ padding: '0.2rem 0.5rem', fontSize: '0.7rem' }}
                        title="Unpublish to Review"
                      >
                        Unpublish
                      </button>
                    )}

                    {/* Archive */}
                    {permissions.canArchiveSpecies && sp.lifecycleStatus !== 'archived' && (
                      <button
                        onClick={() => archiveSpecies(sp.id)}
                        className="btn-icon"
                        title="Archive Record"
                      >
                        <Archive size={14} />
                      </button>
                    )}

                    {/* Delete */}
                    {permissions.canDeleteSpecies && (
                      <button
                        onClick={() => {
                          if (confirm(`Are you sure you want to permanently delete ${sp.scientificName}?`)) {
                            deleteSpecies(sp.id);
                          }
                        }}
                        className="btn-icon"
                        style={{ color: '#ef4444' }}
                        title="Delete Record"
                      >
                        <Trash2 size={14} />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal: Create or Edit Species */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(0, 0, 0, 0.8)',
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
              maxWidth: '800px',
              maxHeight: '90vh',
              overflowY: 'auto',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              padding: '2rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>
                {editingSpecies ? `Edit: ${editingSpecies.scientificName}` : 'Create New Species Record'}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="btn-icon">
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmitForm} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Scientific Name & Authorship */}
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    Scientific Name (Binomial, e.g. Tenualosa ilisha) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.scientificName}
                    onChange={e => setFormData({ ...formData, scientificName: e.target.value })}
                    className="form-input"
                    style={{ fontStyle: 'italic', fontFamily: "'Open Sans', sans-serif" }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    Authorship (e.g. (Hamilton, 1822))
                  </label>
                  <input
                    type="text"
                    value={formData.scientificNameAuthorship}
                    onChange={e => setFormData({ ...formData, scientificNameAuthorship: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              {/* Common Names */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    Common Names (English, comma-separated)
                  </label>
                  <input
                    type="text"
                    value={formData.commonNamesEn}
                    onChange={e => setFormData({ ...formData, commonNamesEn: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    Bangla Names (বাংলা, কমা দিয়ে আলাদা করুন)
                  </label>
                  <input
                    type="text"
                    value={formData.commonNamesBn}
                    onChange={e => setFormData({ ...formData, commonNamesBn: e.target.value })}
                    className="form-input bangla-text"
                  />
                </div>
              </div>

              {/* Taxonomy */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    Class
                  </label>
                  <select
                    value={formData.class}
                    onChange={e => setFormData({ ...formData, class: e.target.value })}
                    className="form-select"
                  >
                    <option value="Actinopterygii">Actinopterygii</option>
                    <option value="Chondrichthyes">Chondrichthyes</option>
                    <option value="Mammalia">Mammalia</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    Order
                  </label>
                  <input
                    type="text"
                    value={formData.order}
                    onChange={e => setFormData({ ...formData, order: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    Family
                  </label>
                  <input
                    type="text"
                    value={formData.family}
                    onChange={e => setFormData({ ...formData, family: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              {/* Description & Diagnostic Features */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                  Morphological Description
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={e => setFormData({ ...formData, description: e.target.value })}
                  className="form-textarea"
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                  Key Diagnostic Features (one per line)
                </label>
                <textarea
                  rows={3}
                  value={formData.diagnosticFeatures}
                  onChange={e => setFormData({ ...formData, diagnosticFeatures: e.target.value })}
                  className="form-textarea"
                />
              </div>

              {/* Bangladesh Occurrence & Conservation */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    IUCN Global Status
                  </label>
                  <select
                    value={formData.iucnGlobalStatus}
                    onChange={e => setFormData({ ...formData, iucnGlobalStatus: e.target.value as IUCNStatus })}
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
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    Bangladesh Red List Category
                  </label>
                  <select
                    value={formData.nationalRedList}
                    onChange={e => setFormData({ ...formData, nationalRedList: e.target.value as IUCNStatus })}
                    className="form-select"
                  >
                    <option value="CR">Critically Endangered (CR)</option>
                    <option value="EN">Endangered (EN)</option>
                    <option value="VU">Vulnerable (VU)</option>
                    <option value="NT">Near Threatened (NT)</option>
                    <option value="LC">Least Concern (LC)</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    Primary Reference / Citation
                  </label>
                  <select
                    value={formData.referenceId}
                    onChange={e => setFormData({ ...formData, referenceId: e.target.value })}
                    className="form-select"
                  >
                    {references.map(r => (
                      <option key={r.id} value={r.id}>
                        {r.authors[0]} ({r.year}) — {r.title.slice(0, 30)}...
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Form Buttons */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1rem' }}>
                <button type="button" onClick={() => setIsModalOpen(false)} className="btn btn-secondary">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  {editingSpecies ? 'Update Species Record' : 'Create Species Draft'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
