// BiotaElite 2.0 References & Literature Manager
import React, { useState } from 'react';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useAuth } from '../../context/AuthContext';
import { Plus, Search, X, ExternalLink } from 'lucide-react';

export const ReferenceManagerPage: React.FC = () => {
  const { references, addReference } = useBiodiversity();
  const { permissions } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    authors: '',
    year: 2024,
    sourceType: 'journal_article' as const,
    publicationName: '',
    volume: '',
    pages: '',
    doi: '',
    url: '',
    authorityTier: 'tier_1_primary_literature' as const,
    notes: '',
  });

  const filtered = references.filter(r => 
    r.title.toLowerCase().includes(search.toLowerCase()) ||
    r.authors.some(a => a.toLowerCase().includes(search.toLowerCase())) ||
    r.publicationName.toLowerCase().includes(search.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addReference({
      title: formData.title.trim(),
      authors: formData.authors.split(',').map(a => a.trim()).filter(Boolean),
      year: Number(formData.year) || 2024,
      sourceType: formData.sourceType,
      publicationName: formData.publicationName.trim(),
      volume: formData.volume.trim() || undefined,
      pages: formData.pages.trim() || undefined,
      doi: formData.doi.trim() || undefined,
      url: formData.url.trim() || undefined,
      authorityTier: formData.authorityTier,
      notes: formData.notes.trim() || undefined,
    });
    setIsModalOpen(false);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>
            Reference Sources & Citations Manager
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Maintain verified peer-reviewed literature, monographs, and taxonomic database citations.
          </p>
        </div>

        {permissions.canManageReferences && (
          <button onClick={() => setIsModalOpen(true)} className="btn btn-primary" style={{ gap: '0.4rem' }}>
            <Plus size={16} />
            <span>Add Literature Citation</span>
          </button>
        )}
      </div>

      {/* Search */}
      <div style={{ maxWidth: '350px', marginBottom: '1.5rem', position: 'relative' }}>
        <Search size={16} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
        <input
          type="text"
          placeholder="Search citations..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="form-input"
          style={{ paddingLeft: '2.3rem' }}
        />
      </div>

      {/* References Table */}
      <div className="data-table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Authors</th>
              <th>Year</th>
              <th>Publication</th>
              <th>Authority Tier</th>
              <th>Source Link</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(ref => (
              <tr key={ref.id}>
                <td>
                  <div style={{ fontWeight: 600, color: '#ffffff' }}>{ref.title}</div>
                  {ref.doi && (
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      DOI: {ref.doi}
                    </div>
                  )}
                </td>
                <td>{ref.authors.join(', ')}</td>
                <td>{ref.year}</td>
                <td>{ref.publicationName}</td>
                <td>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      padding: '0.15rem 0.45rem',
                      borderRadius: '3px',
                      background: ref.authorityTier === 'tier_1_primary_literature' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(2, 132, 199, 0.15)',
                      color: ref.authorityTier === 'tier_1_primary_literature' ? '#34d399' : '#38bdf8',
                    }}
                  >
                    {ref.authorityTier.replace(/_/g, ' ')}
                  </span>
                </td>
                <td>
                  {ref.url ? (
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: 'var(--accent-marine-light)', display: 'inline-flex', alignItems: 'center', gap: '0.2rem', textDecoration: 'none', fontSize: '0.8rem' }}
                    >
                      <span>Link</span>
                      <ExternalLink size={12} />
                    </a>
                  ) : (
                    '—'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal: Add Reference */}
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
          <div className="card" style={{ width: '100%', maxWidth: '650px', background: 'var(--bg-surface)', padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff' }}>Add Literature Citation</h2>
              <button onClick={() => setIsModalOpen(false)} className="btn-icon">
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                  Title of Work / Paper *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={e => setFormData({ ...formData, title: e.target.value })}
                  className="form-input"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    Authors (comma-separated) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.authors}
                    onChange={e => setFormData({ ...formData, authors: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    Publication Year *
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.year}
                    onChange={e => setFormData({ ...formData, year: Number(e.target.value) })}
                    className="form-input"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    Publication / Journal / Publisher *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.publicationName}
                    onChange={e => setFormData({ ...formData, publicationName: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    Authority Tier *
                  </label>
                  <select
                    value={formData.authorityTier}
                    onChange={e => setFormData({ ...formData, authorityTier: e.target.value as any })}
                    className="form-select"
                  >
                    <option value="tier_1_primary_literature">Tier 1 • Primary Literature</option>
                    <option value="tier_2_authoritative_database">Tier 2 • Authoritative Database</option>
                    <option value="tier_3_secondary">Tier 3 • Secondary Literature</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    DOI (e.g. 10.14284/170)
                  </label>
                  <input
                    type="text"
                    value={formData.doi}
                    onChange={e => setFormData({ ...formData, doi: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    Web URL
                  </label>
                  <input
                    type="url"
                    value={formData.url}
                    onChange={e => setFormData({ ...formData, url: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '0.5rem' }}>
                <button type="button" onClick={() => setIsModalOpen(false)} className="btn btn-secondary">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Citation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
