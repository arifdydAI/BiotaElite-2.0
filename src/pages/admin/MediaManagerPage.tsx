// BiotaElite 2.0 Specimen Media & Image Asset Governance
// Phase I: Specimen Photo Gallery, Attribution, License Integrity & AI-Rejection
import React, { useState, useMemo } from 'react';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import type { MediaMetadata } from '../../types/biodiversity';
import { 
  Search, 
  Trash2, 
  Plus, 
  X,
  ExternalLink,
  Check,
  Ban
} from 'lucide-react';

export const MediaManagerPage: React.FC = () => {
  const { species, getAllMedia, addMedia, updateMedia, deleteMedia } = useBiodiversity();
  const { permissions } = useAuth();
  const { language } = useLanguage();

  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [licenseFilter, setLicenseFilter] = useState<string>('all');
  const [selectedMedia, setSelectedMedia] = useState<(MediaMetadata & { speciesId: string; speciesScientificName: string }) | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [targetSpeciesId, setTargetSpeciesId] = useState<string>(species[0]?.id || '');

  // Pagination state for 236+ media items
  const [page, setPage] = useState(1);
  const pageSize = 24;

  const [formData, setFormData] = useState<Omit<MediaMetadata, 'id'>>({
    url: '',
    caption: '',
    sourceUrl: '',
    sourceName: '',
    creator: '',
    photographer: '',
    institution: '',
    license: 'CC-BY-SA',
    attribution: '',
    isVerified: true,
    verificationStatus: 'verified',
    type: 'specimen_photo',
  });

  const allMediaList = useMemo(() => {
    return getAllMedia();
  }, [species, getAllMedia]);

  const filteredMedia = useMemo(() => {
    return allMediaList.filter(m => {
      if (statusFilter !== 'all' && m.verificationStatus !== statusFilter) return false;
      if (licenseFilter !== 'all' && !m.license?.toLowerCase().includes(licenseFilter.toLowerCase())) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        return (
          m.caption.toLowerCase().includes(q) ||
          m.speciesScientificName.toLowerCase().includes(q) ||
          (m.creator && m.creator.toLowerCase().includes(q)) ||
          (m.sourceName && m.sourceName.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [allMediaList, statusFilter, licenseFilter, search]);

  const totalPages = Math.ceil(filteredMedia.length / pageSize) || 1;
  const paginatedMedia = filteredMedia.slice((page - 1) * pageSize, page * pageSize);

  const stats = useMemo(() => {
    return {
      total: allMediaList.length,
      verified: allMediaList.filter(m => m.isVerified || m.verificationStatus === 'verified').length,
      pending: allMediaList.filter(m => m.verificationStatus === 'pending').length,
      ccby: allMediaList.filter(m => m.license?.includes('CC-BY')).length,
    };
  }, [allMediaList]);

  const handleOpenAdd = () => {
    setSelectedMedia(null);
    setTargetSpeciesId(species[0]?.id || '');
    setFormData({
      url: '',
      caption: '',
      sourceUrl: '',
      sourceName: '',
      creator: '',
      photographer: '',
      institution: '',
      license: 'CC-BY-SA',
      attribution: '',
      isVerified: true,
      verificationStatus: 'verified',
      type: 'specimen_photo',
    });
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetSpeciesId) return;

    if (selectedMedia) {
      updateMedia(selectedMedia.speciesId, selectedMedia.id, formData);
    } else {
      addMedia(targetSpeciesId, formData);
    }

    setIsModalOpen(false);
  };

  const handleQuickVerify = (item: typeof allMediaList[0]) => {
    updateMedia(item.speciesId, item.id, {
      isVerified: true,
      verificationStatus: 'verified',
      verifiedAt: new Date().toISOString(),
      verifiedBy: 'Taxonomic Reviewer',
    });
  };

  const handleQuickReject = (item: typeof allMediaList[0]) => {
    updateMedia(item.speciesId, item.id, {
      isVerified: false,
      verificationStatus: 'rejected',
      notes: 'Rejected: Non-authentic or fails scientific specimen verification',
    });
  };

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', margin: 0 }}>
            {language === 'bn' ? 'নমুনা আলোকচিত্র ও মিডিয়া সম্পদ প্রশাসন' : 'Specimen Photography & Media Asset Governance'}
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.35rem', marginBottom: 0 }}>
            {language === 'bn'
              ? '২৩৬টি যাচাইকৃত বৈজ্ঞানিক নমুনা ছবি, লাইসেন্স সত্যতা, উৎস এবং পিয়ার-রিভিউ অনুমোদন।'
              : 'Curate 236 peer-reviewed specimen images, license integrity, attribution, and strict AI-rejection policy.'}
          </p>
        </div>

        {permissions.canManageMedia && (
          <button onClick={handleOpenAdd} className="btn btn-primary" style={{ gap: '0.45rem', padding: '0.6rem 1.1rem' }}>
            <Plus size={16} />
            <span>{language === 'bn' ? 'নতুন মিডিয়া যুক্ত' : 'Attach Media Asset'}</span>
          </button>
        )}
      </div>

      {/* KPI Stats Bar */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
        <div className="card" style={{ padding: '0.85rem 1rem' }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Total Media Assets</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginTop: '0.2rem' }}>{stats.total}</div>
        </div>

        <div className="card" style={{ padding: '0.85rem 1rem' }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Verified Specimens</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#10b981', marginTop: '0.2rem' }}>{stats.verified}</div>
        </div>

        <div className="card" style={{ padding: '0.85rem 1rem' }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Pending Review</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f59e0b', marginTop: '0.2rem' }}>{stats.pending}</div>
        </div>

        <div className="card" style={{ padding: '0.85rem 1rem' }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Open CC-BY Licensed</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#38bdf8', marginTop: '0.2rem' }}>{stats.ccby}</div>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="card" style={{ padding: '0.85rem 1.25rem', marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ position: 'relative', width: '320px' }}>
          <Search size={16} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder={language === 'bn' ? 'প্রজাতি বা ক্যাপশন অনুসন্ধান...' : 'Search species or caption...'}
            value={search}
            onChange={e => { setSearch(e.target.value); setPage(1); }}
            className="form-input"
            style={{ paddingLeft: '2.5rem' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <select
            value={statusFilter}
            onChange={e => { setStatusFilter(e.target.value); setPage(1); }}
            className="form-select"
            style={{ width: 'auto', fontSize: '0.78rem' }}
          >
            <option value="all">All Statuses</option>
            <option value="verified">Verified Only</option>
            <option value="pending">Pending Review</option>
            <option value="rejected">Rejected</option>
          </select>

          <select
            value={licenseFilter}
            onChange={e => { setLicenseFilter(e.target.value); setPage(1); }}
            className="form-select"
            style={{ width: 'auto', fontSize: '0.78rem' }}
          >
            <option value="all">All Licenses</option>
            <option value="CC-BY">CC-BY / CC-BY-SA</option>
            <option value="CC0">CC0 Public Domain</option>
            <option value="Permitted">Permitted Academic</option>
          </select>
        </div>
      </div>

      {/* Media Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
        {paginatedMedia.map(item => (
          <div
            key={item.id}
            className="card"
            style={{
              padding: 0,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* Thumbnail Box */}
            <div style={{ position: 'relative', height: '170px', background: '#020406', overflow: 'hidden' }}>
              <img
                src={item.url}
                alt={item.caption}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={e => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '0.5rem',
                  right: '0.5rem',
                  display: 'flex',
                  gap: '0.35rem',
                }}
              >
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    padding: '0.15rem 0.45rem',
                    borderRadius: '3px',
                    background: item.isVerified ? 'rgba(16, 185, 129, 0.9)' : 'rgba(245, 158, 11, 0.9)',
                    color: '#000000',
                  }}
                >
                  {item.isVerified ? 'Verified' : 'Pending'}
                </span>
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    padding: '0.15rem 0.45rem',
                    borderRadius: '3px',
                    background: 'rgba(0, 0, 0, 0.75)',
                    color: '#38bdf8',
                  }}
                >
                  {item.license}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div style={{ padding: '0.85rem 1rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff', fontStyle: 'italic' }}>
                  {item.speciesScientificName}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.2rem', lineHeight: 1.3 }}>
                  {item.caption.slice(0, 75)}...
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                  Creator: {item.creator || item.photographer || 'Zoological Archive'}
                </div>
              </div>

              {/* Action Toolbar */}
              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.65rem', marginTop: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '0.72rem', color: 'var(--accent-marine-light)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', textDecoration: 'none' }}
                >
                  <span>Source</span>
                  <ExternalLink size={10} />
                </a>

                <div style={{ display: 'flex', gap: '0.3rem' }}>
                  {permissions.canVerifySpecies && !item.isVerified && (
                    <button
                      onClick={() => handleQuickVerify(item)}
                      className="btn-icon"
                      style={{ color: '#10b981' }}
                      title="Verify Specimen Authenticity"
                    >
                      <Check size={14} />
                    </button>
                  )}

                  {permissions.canVerifySpecies && item.verificationStatus !== 'rejected' && (
                    <button
                      onClick={() => handleQuickReject(item)}
                      className="btn-icon"
                      style={{ color: '#f87171' }}
                      title="Reject (AI or Non-authentic)"
                    >
                      <Ban size={14} />
                    </button>
                  )}

                  {permissions.canManageMedia && (
                    <button
                      onClick={() => {
                        if (window.confirm(`Delete media asset from ${item.speciesScientificName}?`)) {
                          deleteMedia(item.speciesId, item.id);
                        }
                      }}
                      className="btn-icon"
                      style={{ color: '#ef4444' }}
                      title="Delete Asset"
                    >
                      <Trash2 size={13} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Footer */}
      {totalPages > 1 && (
        <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.85rem 1.25rem', marginBottom: '2rem' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Page {page} of {totalPages} ({filteredMedia.length} total media assets)
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

      {/* Attach Media Modal */}
      {isModalOpen && (
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
              maxWidth: '620px',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              padding: '2rem',
              borderRadius: 'var(--radius-lg)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                Attach Specimen Media Asset
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="btn-icon">
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                  Target Species Monograph *
                </label>
                <select
                  value={targetSpeciesId}
                  onChange={e => setTargetSpeciesId(e.target.value)}
                  className="form-select"
                >
                  {species.map(s => (
                    <option key={s.id} value={s.id}>
                      {s.scientificName} ({s.taxonomy.family})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                  Direct Image Asset URL *
                </label>
                <input
                  type="url"
                  required
                  value={formData.url}
                  onChange={e => setFormData({ ...formData, url: e.target.value })}
                  className="form-input"
                  placeholder="https://upload.wikimedia.org/...jpg"
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                  Descriptive Caption / Specimen Note *
                </label>
                <input
                  type="text"
                  required
                  value={formData.caption}
                  onChange={e => setFormData({ ...formData, caption: e.target.value })}
                  className="form-input"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    License *
                  </label>
                  <select
                    value={formData.license}
                    onChange={e => setFormData({ ...formData, license: e.target.value })}
                    className="form-select"
                  >
                    <option value="CC-BY-SA">CC-BY-SA 4.0</option>
                    <option value="CC-BY">CC-BY 4.0</option>
                    <option value="CC0">CC0 Public Domain</option>
                    <option value="Public Domain">Public Domain</option>
                    <option value="All Rights Reserved (Permitted)">All Rights Reserved (Permitted)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    Image Type
                  </label>
                  <select
                    value={formData.type}
                    onChange={e => setFormData({ ...formData, type: e.target.value as typeof formData.type })}
                    className="form-select"
                  >
                    <option value="specimen_photo">Specimen Photo</option>
                    <option value="field_photo">Field Live Photo</option>
                    <option value="diagnostic_drawing">Diagnostic Drawing</option>
                    <option value="distribution_map">Distribution Map</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    Creator / Photographer
                  </label>
                  <input
                    type="text"
                    value={formData.creator}
                    onChange={e => setFormData({ ...formData, creator: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    Source URL
                  </label>
                  <input
                    type="url"
                    value={formData.sourceUrl}
                    onChange={e => setFormData({ ...formData, sourceUrl: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '0.5rem' }}>
                <button type="button" onClick={() => setIsModalOpen(false)} className="btn btn-secondary">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Attach Media Asset
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
