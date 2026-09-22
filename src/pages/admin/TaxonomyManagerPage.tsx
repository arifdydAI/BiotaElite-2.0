// BiotaElite 2.0 Taxonomy Node Manager
import React, { useState } from 'react';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useAuth } from '../../context/AuthContext';
import type { TaxonomicRank } from '../../types/biodiversity';
import { Plus, Search, X } from 'lucide-react';

export const TaxonomyManagerPage: React.FC = () => {
  const { taxa, addTaxon, taxonKnowledge } = useBiodiversity();
  const { permissions } = useAuth();
  const [activeTab, setActiveTab] = useState<'nodes' | 'knowledge'>('nodes');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    rank: 'family' as TaxonomicRank,
    parentId: taxa[0]?.id || '',
    authorYear: '',
    commonNameEn: '',
    commonNameBn: '',
    description: '',
  });

  const filteredTaxa = taxa.filter(t => 
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.rank.toLowerCase().includes(search.toLowerCase()) ||
    (t.commonNameEn && t.commonNameEn.toLowerCase().includes(search.toLowerCase()))
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTaxon({
      name: formData.name.trim(),
      scientificName: formData.name.trim(),
      rank: formData.rank,
      parentId: formData.parentId || null,
      parentTaxonId: formData.parentId || null,
      module: 'fish',
      status: 'accepted',
      isVerified: true,
      sourceReferences: [],
      authorYear: formData.authorYear.trim() || undefined,
      commonNameEn: formData.commonNameEn.trim() || undefined,
      commonNameBn: formData.commonNameBn.trim() || undefined,
      description: formData.description.trim() || undefined,
      speciesCount: 0,
    });
    setIsModalOpen(false);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>
            Taxonomic Hierarchy Manager
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Curate Linnaean classification nodes from Kingdom down to Genus.
          </p>
        </div>

        {permissions.canManageTaxonomy && (
          <button onClick={() => setIsModalOpen(true)} className="btn btn-primary" style={{ gap: '0.4rem' }}>
            <Plus size={16} />
            <span>Add Taxon Node</span>
          </button>
        )}
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
        <button
          onClick={() => setActiveTab('nodes')}
          className={`btn btn-sm ${activeTab === 'nodes' ? 'btn-primary' : 'btn-secondary'}`}
        >
          Linnaean Backbone Nodes ({taxa.length})
        </button>
        <button
          onClick={() => setActiveTab('knowledge')}
          className={`btn btn-sm ${activeTab === 'knowledge' ? 'btn-primary' : 'btn-secondary'}`}
        >
          Taxonomic Knowledge Records ({taxonKnowledge.length})
        </button>
      </div>

      {/* Search */}
      <div style={{ maxWidth: '350px', marginBottom: '1.5rem', position: 'relative' }}>
        <Search size={16} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
        <input
          type="text"
          placeholder={activeTab === 'nodes' ? "Filter taxonomic nodes..." : "Filter knowledge records..."}
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="form-input"
          style={{ paddingLeft: '2.3rem' }}
        />
      </div>

      {activeTab === 'nodes' ? (
        /* Taxa Backbone Table */
        <div className="data-table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Taxon Name</th>
                <th>Rank</th>
                <th>Parent Taxon</th>
                <th>Module</th>
                <th>Status</th>
                <th>Verification</th>
                <th>Authority / Year</th>
                <th>Vernacular & Sources</th>
              </tr>
            </thead>
            <tbody>
              {filteredTaxa.map(node => {
                const parent = taxa.find(t => t.id === (node.parentTaxonId ?? node.parentId));
                return (
                  <tr key={node.id}>
                    <td>
                      <div style={{ fontWeight: 600, color: '#ffffff', fontStyle: node.rank === 'genus' ? 'italic' : 'normal', fontFamily: "'Open Sans', sans-serif" }}>
                        {node.name}
                      </div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>ID: {node.id}</div>
                    </td>
                    <td>
                      <span
                        style={{
                          fontSize: '0.7rem',
                          textTransform: 'uppercase',
                          fontWeight: 700,
                          padding: '0.15rem 0.45rem',
                          borderRadius: '3px',
                          background: 'rgba(14, 165, 233, 0.15)',
                          color: '#38bdf8',
                          border: '1px solid rgba(14, 165, 233, 0.3)',
                        }}
                      >
                        {node.rank}
                      </span>
                    </td>
                    <td>
                      {parent ? (
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                          {parent.name} ({parent.rank})
                        </span>
                      ) : (
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>None (Root)</span>
                      )}
                    </td>
                    <td>
                      <span
                        style={{
                          fontSize: '0.7rem',
                          textTransform: 'uppercase',
                          fontWeight: 600,
                          padding: '0.15rem 0.4rem',
                          borderRadius: '3px',
                          background: node.module === 'fish' ? 'rgba(16, 185, 129, 0.15)' : node.module === 'marine' ? 'rgba(59, 130, 246, 0.15)' : 'rgba(107, 114, 128, 0.15)',
                          color: node.module === 'fish' ? '#34d399' : node.module === 'marine' ? '#60a5fa' : '#9ca3af',
                          border: `1px solid ${node.module === 'fish' ? 'rgba(16, 185, 129, 0.3)' : node.module === 'marine' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(107, 114, 128, 0.3)'}`,
                        }}
                      >
                        {node.module || 'general'}
                      </span>
                    </td>
                    <td>
                      <span
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          padding: '0.15rem 0.4rem',
                          borderRadius: '3px',
                          background: node.status === 'accepted' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                          color: node.status === 'accepted' ? '#34d399' : '#fbbf24',
                          border: `1px solid ${node.status === 'accepted' ? 'rgba(16, 185, 129, 0.25)' : 'rgba(245, 158, 11, 0.25)'}`,
                        }}
                      >
                        {node.status || 'accepted'}
                      </span>
                      {node.acceptedTaxonId && (
                        <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                          → {node.acceptedTaxonId}
                        </div>
                      )}
                    </td>
                    <td>
                      <span
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          padding: '0.15rem 0.4rem',
                          borderRadius: '3px',
                          background: node.isVerified ? 'rgba(52, 211, 153, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                          color: node.isVerified ? '#34d399' : '#f87171',
                          border: `1px solid ${node.isVerified ? 'rgba(52, 211, 153, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
                        }}
                      >
                        {node.isVerified ? 'Verified' : 'Review'}
                      </span>
                    </td>
                    <td style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                      {node.authorYear || '—'}
                    </td>
                    <td>
                      <div>
                        {node.commonNameEn && <span>{node.commonNameEn}</span>}
                        {node.commonNameBn && (
                          <span className="bangla-text" style={{ marginLeft: '0.4rem', color: 'var(--accent-emerald-light)' }}>
                            ({node.commonNameBn})
                          </span>
                        )}
                      </div>
                      {node.sourceReferences && node.sourceReferences.length > 0 && (
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                          {node.sourceReferences[0].source}
                          {node.sourceReferences.length > 1 && ` (+${node.sourceReferences.length - 1})`}
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        /* Knowledge Records Table */
        <div className="data-table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Taxon Scientific Name</th>
                <th>Category</th>
                <th>Rank</th>
                <th>Common Names</th>
                <th>Canonical Species</th>
                <th>Reference Citation</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {taxonKnowledge
                .filter(
                  tk =>
                    tk.scientificName.toLowerCase().includes(search.toLowerCase()) ||
                    tk.category.toLowerCase().includes(search.toLowerCase()) ||
                    tk.rank.toLowerCase().includes(search.toLowerCase()) ||
                    tk.englishName.toLowerCase().includes(search.toLowerCase()) ||
                    tk.bengaliName.includes(search)
                )
                .map(tk => (
                  <tr key={tk.id}>
                    <td>
                      <div style={{ fontWeight: 700, color: '#ffffff', fontFamily: "'Open Sans', sans-serif", fontStyle: 'italic' }}>
                        {tk.scientificName}
                      </div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{tk.id}</div>
                    </td>
                    <td>
                      <span
                        style={{
                          fontSize: '0.7rem',
                          textTransform: 'uppercase',
                          fontWeight: 700,
                          padding: '0.15rem 0.45rem',
                          borderRadius: '3px',
                          background: tk.category === 'fish' ? 'rgba(16, 185, 129, 0.15)' : tk.category === 'marine_non_fish' ? 'rgba(2, 132, 199, 0.15)' : 'rgba(168, 85, 247, 0.15)',
                          color: tk.category === 'fish' ? 'var(--accent-emerald-light)' : tk.category === 'marine_non_fish' ? 'var(--accent-marine-light)' : '#c084fc',
                        }}
                      >
                        {tk.category}
                      </span>
                    </td>
                    <td>
                      <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600, color: 'var(--text-secondary)' }}>
                        {tk.rank}
                      </span>
                    </td>
                    <td>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>{tk.englishName}</div>
                      <div className="bangla-text" style={{ fontSize: '0.8rem', color: 'var(--accent-emerald-light)' }}>
                        {tk.bengaliName}
                      </div>
                    </td>
                    <td>
                      {tk.exampleSpeciesIds.length > 0 ? (
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                          {tk.exampleSpeciesIds.map((spId: string) => (
                            <div key={spId} style={{ fontStyle: 'italic' }}>{spId}</div>
                          ))}
                        </div>
                      ) : (
                        <span style={{ fontSize: '0.75rem', color: '#fbbf24' }}>0 verified (honesty notice)</span>
                      )}
                    </td>
                    <td style={{ fontSize: '0.75rem', color: 'var(--text-muted)', maxWidth: '220px' }}>
                      {tk.authoritySource}
                    </td>
                    <td>
                      <span
                        style={{
                          fontSize: '0.7rem',
                          padding: '0.15rem 0.45rem',
                          borderRadius: '3px',
                          background: 'rgba(16, 185, 129, 0.15)',
                          color: 'var(--accent-emerald-light)',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                        }}
                      >
                        {tk.verificationStatus}
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal: Add Taxon */}
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
          <div className="card" style={{ width: '100%', maxWidth: '550px', background: 'var(--bg-surface)', padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff' }}>Add New Taxon Node</h2>
              <button onClick={() => setIsModalOpen(false)} className="btn-icon">
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                  Taxon Scientific Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    Taxonomic Rank *
                  </label>
                  <select
                    value={formData.rank}
                    onChange={e => setFormData({ ...formData, rank: e.target.value as TaxonomicRank })}
                    className="form-select"
                  >
                    <option value="kingdom">Kingdom</option>
                    <option value="phylum">Phylum</option>
                    <option value="class">Class</option>
                    <option value="subclass">Subclass</option>
                    <option value="order">Order</option>
                    <option value="family">Family</option>
                    <option value="genus">Genus</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    Parent Taxon Node
                  </label>
                  <select
                    value={formData.parentId}
                    onChange={e => setFormData({ ...formData, parentId: e.target.value })}
                    className="form-select"
                  >
                    <option value="">None (Root Node)</option>
                    {taxa.map(t => (
                      <option key={t.id} value={t.id}>
                        {t.name} ({t.rank})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                  Author & Year (e.g. Hamilton, 1822)
                </label>
                <input
                  type="text"
                  value={formData.authorYear}
                  onChange={e => setFormData({ ...formData, authorYear: e.target.value })}
                  className="form-input"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    English Common Name
                  </label>
                  <input
                    type="text"
                    value={formData.commonNameEn}
                    onChange={e => setFormData({ ...formData, commonNameEn: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    Bangla Common Name
                  </label>
                  <input
                    type="text"
                    value={formData.commonNameBn}
                    onChange={e => setFormData({ ...formData, commonNameBn: e.target.value })}
                    className="form-input bangla-text"
                  />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '0.5rem' }}>
                <button type="button" onClick={() => setIsModalOpen(false)} className="btn btn-secondary">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Taxon Node
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
