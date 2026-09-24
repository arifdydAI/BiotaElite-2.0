// BiotaElite 2.0 Taxonomy Hierarchy & Linnaean Governance Manager
// Phase F: Linnaean Backbone Explorer, Knowledge Integration & Loop Prevention
import React, { useState, useMemo } from 'react';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import type { TaxonomicRank } from '../../types/biodiversity';
import { Plus, Search, X, AlertCircle, Layers, BookOpen } from 'lucide-react';

export const TaxonomyManagerPage: React.FC = () => {
  const { taxa, addTaxon, taxonKnowledge } = useBiodiversity();
  const { permissions } = useAuth();
  const { language } = useLanguage();

  const [activeTab, setActiveTab] = useState<'nodes' | 'knowledge'>('nodes');
  const [rankFilter, setRankFilter] = useState<string>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [formError, setFormError] = useState<string | null>(null);

  // Pagination state for 650+ taxa
  const [page, setPage] = useState(1);
  const pageSize = 30;

  const [formData, setFormData] = useState({
    name: '',
    rank: 'family' as TaxonomicRank,
    parentId: taxa[0]?.id || '',
    authorYear: '',
    commonNameEn: '',
    commonNameBn: '',
    description: '',
  });

  const filteredTaxa = useMemo(() => {
    return taxa.filter(t => {
      if (rankFilter !== 'all' && t.rank !== rankFilter) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        return (
          t.name.toLowerCase().includes(q) ||
          t.rank.toLowerCase().includes(q) ||
          (t.commonNameEn && t.commonNameEn.toLowerCase().includes(q)) ||
          (t.commonNameBn && t.commonNameBn.includes(q))
        );
      }
      return true;
    });
  }, [taxa, rankFilter, search]);

  const totalPages = Math.ceil(filteredTaxa.length / pageSize) || 1;
  const paginatedTaxa = filteredTaxa.slice((page - 1) * pageSize, page * pageSize);

  const rankCounts = useMemo(() => {
    return {
      all: taxa.length,
      class: taxa.filter(t => t.rank === 'class').length,
      order: taxa.filter(t => t.rank === 'order').length,
      family: taxa.filter(t => t.rank === 'family').length,
      genus: taxa.filter(t => t.rank === 'genus').length,
    };
  }, [taxa]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const cleanName = formData.name.trim();
    if (!cleanName) {
      setFormError('Taxon scientific name is required.');
      return;
    }

    // Check duplicate taxon name at same rank
    const duplicate = taxa.find(
      t => t.name.toLowerCase() === cleanName.toLowerCase() && t.rank === formData.rank
    );
    if (duplicate) {
      setFormError(`Taxon "${cleanName}" already exists at rank ${formData.rank} (ID: ${duplicate.id}).`);
      return;
    }

    addTaxon({
      name: cleanName,
      scientificName: cleanName,
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
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', margin: 0 }}>
            {language === 'bn' ? 'শ্রেণীবিন্যাসীয় বৃক্ষ প্রশাসন' : 'Taxonomic Backbone & Hierarchy Manager'}
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.35rem', marginBottom: 0 }}>
            {language === 'bn'
              ? 'পর্ব, শ্রেণি, বর্গ, গোত্র ও গণ নোডের সম্পর্ক, পিতৃ ট্যাক্সন ও জ্ঞানভাণ্ডার পরিচালনা করুন।'
              : 'Curate Linnaean classification graph, parent-child links, and monographic knowledge base records.'}
          </p>
        </div>

        {permissions.canManageTaxonomy && (
          <button onClick={() => { setFormError(null); setIsModalOpen(true); }} className="btn btn-primary" style={{ gap: '0.45rem', padding: '0.6rem 1.1rem' }}>
            <Plus size={16} />
            <span>{language === 'bn' ? 'নতুন ট্যাক্সন যোগ' : 'Add Taxon Node'}</span>
          </button>
        )}
      </div>

      {/* Main Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
        <button
          onClick={() => { setActiveTab('nodes'); setPage(1); }}
          className={`btn btn-sm ${activeTab === 'nodes' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ fontSize: '0.82rem' }}
        >
          <Layers size={14} style={{ marginRight: '0.35rem' }} />
          <span>Linnaean Backbone Nodes ({taxa.length})</span>
        </button>
        <button
          onClick={() => { setActiveTab('knowledge'); setPage(1); }}
          className={`btn btn-sm ${activeTab === 'knowledge' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ fontSize: '0.82rem' }}
        >
          <BookOpen size={14} style={{ marginRight: '0.35rem' }} />
          <span>Taxonomic Knowledge Records ({taxonKnowledge.length})</span>
        </button>
      </div>

      {/* Controls Bar */}
      <div className="card" style={{ padding: '0.85rem 1.25rem', marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        {/* Search */}
        <div style={{ position: 'relative', width: '320px' }}>
          <Search size={16} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder={activeTab === 'nodes' ? "Search taxon name or rank..." : "Search knowledge records..."}
            value={search}
            onChange={e => { setSearch(e.target.value); setPage(1); }}
            className="form-input"
            style={{ paddingLeft: '2.5rem' }}
          />
        </div>

        {/* Rank Filters (Only for Nodes tab) */}
        {activeTab === 'nodes' && (
          <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => { setRankFilter('all'); setPage(1); }}
              className={`btn btn-sm ${rankFilter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: '0.75rem' }}
            >
              All Ranks ({rankCounts.all})
            </button>
            <button
              onClick={() => { setRankFilter('class'); setPage(1); }}
              className={`btn btn-sm ${rankFilter === 'class' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: '0.75rem' }}
            >
              Classes ({rankCounts.class})
            </button>
            <button
              onClick={() => { setRankFilter('order'); setPage(1); }}
              className={`btn btn-sm ${rankFilter === 'order' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: '0.75rem' }}
            >
              Orders ({rankCounts.order})
            </button>
            <button
              onClick={() => { setRankFilter('family'); setPage(1); }}
              className={`btn btn-sm ${rankFilter === 'family' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: '0.75rem' }}
            >
              Families ({rankCounts.family})
            </button>
            <button
              onClick={() => { setRankFilter('genus'); setPage(1); }}
              className={`btn btn-sm ${rankFilter === 'genus' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: '0.75rem' }}
            >
              Genera ({rankCounts.genus})
            </button>
          </div>
        )}
      </div>

      {activeTab === 'nodes' ? (
        /* Taxa Backbone Table */
        <div className="data-table-container card" style={{ padding: 0, overflow: 'hidden' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Taxon Name</th>
                <th>Rank</th>
                <th>Parent Lineage Node</th>
                <th>Module</th>
                <th>Status</th>
                <th>Verification</th>
                <th>Authority / Year</th>
                <th>Vernacular & Sources</th>
              </tr>
            </thead>
            <tbody>
              {paginatedTaxa.map(node => {
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
                        {node.isVerified ? 'Verified' : 'Unverified'}
                      </span>
                    </td>
                    <td>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        {node.authorYear || '—'}
                      </div>
                    </td>
                    <td>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-primary)' }}>
                        {node.commonNameEn || node.commonName || '—'}
                      </div>
                      {node.commonNameBn && (
                        <div className="bangla-text" style={{ fontSize: '0.75rem', color: 'var(--accent-emerald-light)' }}>
                          {node.commonNameBn}
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Pagination Footer */}
          {totalPages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.85rem 1.25rem', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-surface)' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Page {page} of {totalPages} ({filteredTaxa.length} total nodes)
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
      ) : (
        /* Knowledge Records Table */
        <div className="data-table-container card" style={{ padding: 0, overflow: 'hidden' }}>
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
                          fontWeight: 600,
                          padding: '0.15rem 0.4rem',
                          borderRadius: '3px',
                          background: tk.category === 'fish' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(59, 130, 246, 0.15)',
                          color: tk.category === 'fish' ? '#34d399' : '#60a5fa',
                        }}
                      >
                        {tk.category}
                      </span>
                    </td>
                    <td>
                      <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                        {tk.rank}
                      </span>
                    </td>
                    <td>
                      <div style={{ fontSize: '0.8rem', color: '#ffffff' }}>{tk.englishName}</div>
                      <div className="bangla-text" style={{ fontSize: '0.8rem', color: 'var(--accent-emerald-light)' }}>
                        {tk.bengaliName}
                      </div>
                    </td>
                    <td>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        {tk.exampleSpeciesIds ? tk.exampleSpeciesIds.length : 0} linked species
                      </span>
                    </td>
                    <td>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {tk.authoritySource || 'WoRMS / CalAcademy'}
                      </div>
                    </td>
                    <td>
                      <span
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          padding: '0.15rem 0.45rem',
                          borderRadius: '3px',
                          background: 'rgba(16, 185, 129, 0.15)',
                          color: 'var(--accent-emerald-light)',
                        }}
                      >
                        {tk.publishedStatus ? 'Published' : 'Draft'}
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal: Add Taxon Node */}
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
              maxWidth: '650px',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              padding: '2rem',
              borderRadius: 'var(--radius-lg)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                Add Taxonomic Node
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="btn-icon">
                <X size={18} />
              </button>
            </div>

            {formError && (
              <div
                style={{
                  background: 'rgba(239, 68, 68, 0.12)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.75rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  marginBottom: '1.25rem',
                  color: '#f87171',
                  fontSize: '0.85rem',
                }}
              >
                <AlertCircle size={16} />
                <span>{formError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                  Scientific Taxon Name (e.g. Clupeidae) *
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

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    Common Name (English)
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
                    Common Name (বাংলা)
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
