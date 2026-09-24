// BiotaElite 2.0 Species Monograph & Lifecycle Manager
// Phase E: Full Lifecycle Sub-views, Tabbed Monograph Editor & Duplicate Prevention
import React, { useState, useMemo } from 'react';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import type { SpeciesRecord, LifecycleStatus, IUCNStatus, BangladeshResidency, AquaticSystem } from '../../types/biodiversity';
import { ScientificName } from '../../components/common/ScientificName';
import { StatusBadge } from '../../components/common/StatusBadge';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  CheckCircle2, 
  Archive, 
  X,
  AlertCircle,
  FileCheck,
  Send,
  Eye,
  EyeOff,
  MapPin,
  Globe
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
    submitSpeciesForReview,
    references 
  } = useBiodiversity();
  const { permissions } = useAuth();
  const { t, language } = useLanguage();

  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'under_review' | 'draft' | 'archived'>('all');
  const [regionFilter, setRegionFilter] = useState<'all' | 'bangladesh' | 'global'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'taxonomy' | 'morphology' | 'geography' | 'conservation'>('taxonomy');
  const [editingSpecies, setEditingSpecies] = useState<SpeciesRecord | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  // Pagination state for smooth interaction over 238+ items
  const [page, setPage] = useState(1);
  const pageSize = 25;

  // Form State
  const [formData, setFormData] = useState<{
    scientificName: string;
    scientificNameAuthorship: string;
    commonNamesEn: string;
    commonNamesBn: string;
    kingdom: string;
    phylum: string;
    class: string;
    order: string;
    family: string;
    genus: string;
    module: 'fish' | 'marine' | 'general';
    description: string;
    diagnosticFeatures: string;
    systems: AquaticSystem[];
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
    kingdom: 'Animalia',
    phylum: 'Chordata',
    class: 'Actinopterygii',
    order: '',
    family: '',
    genus: '',
    module: 'fish',
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

  // Filtered dataset
  const filteredSpecies = useMemo(() => {
    return species.filter(s => {
      if (statusFilter !== 'all') {
        if (statusFilter === 'published' && !s.isPublished && s.lifecycleStatus !== 'published') return false;
        if (statusFilter !== 'published' && s.lifecycleStatus !== statusFilter) return false;
      }
      if (regionFilter === 'bangladesh' && !s.bangladeshOccurrence.present) return false;
      if (regionFilter === 'global' && s.bangladeshOccurrence.present) return false;

      if (search.trim()) {
        const q = search.toLowerCase();
        return (
          s.scientificName.toLowerCase().includes(q) ||
          s.taxonomy.family.toLowerCase().includes(q) ||
          s.taxonomy.order.toLowerCase().includes(q) ||
          s.commonNames.en.some(c => c.toLowerCase().includes(q)) ||
          s.commonNames.bn.some(c => c.includes(q))
        );
      }
      return true;
    });
  }, [species, statusFilter, regionFilter, search]);

  const totalPages = Math.ceil(filteredSpecies.length / pageSize) || 1;
  const paginatedSpecies = filteredSpecies.slice((page - 1) * pageSize, page * pageSize);

  const counts = useMemo(() => {
    return {
      all: species.length,
      published: species.filter(s => s.isPublished).length,
      underReview: species.filter(s => s.lifecycleStatus === 'under_review').length,
      draft: species.filter(s => s.lifecycleStatus === 'draft').length,
      archived: species.filter(s => s.lifecycleStatus === 'archived').length,
      bangladesh: species.filter(s => s.bangladeshOccurrence.present).length,
      global: species.filter(s => !s.bangladeshOccurrence.present).length,
    };
  }, [species]);

  const handleOpenCreate = () => {
    setEditingSpecies(null);
    setFormError(null);
    setActiveTab('taxonomy');
    setFormData({
      scientificName: '',
      scientificNameAuthorship: '',
      commonNamesEn: '',
      commonNamesBn: '',
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Actinopterygii',
      order: '',
      family: '',
      genus: '',
      module: 'fish',
      description: '',
      diagnosticFeatures: '',
      systems: ['freshwater'],
      bangladeshPresent: true,
      bangladeshRegions: 'Padma River, Meghna River',
      bangladeshResidency: 'native',
      nationalRedList: 'LC',
      iucnGlobalStatus: 'LC',
      iucnAssessmentYear: 2024,
      referenceId: references[0]?.id || '',
      threats: 'Habitat degradation',
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (sp: SpeciesRecord) => {
    setEditingSpecies(sp);
    setFormError(null);
    setActiveTab('taxonomy');
    setFormData({
      scientificName: sp.scientificName,
      scientificNameAuthorship: sp.scientificNameAuthorship || '',
      commonNamesEn: sp.commonNames.en.join(', '),
      commonNamesBn: sp.commonNames.bn.join(', '),
      kingdom: sp.taxonomy.kingdom || 'Animalia',
      phylum: sp.taxonomy.phylum || 'Chordata',
      class: sp.taxonomy.class || 'Actinopterygii',
      order: sp.taxonomy.order || '',
      family: sp.taxonomy.family || '',
      genus: sp.taxonomy.genus || '',
      module: sp.module || 'fish',
      description: sp.morphology.description || '',
      diagnosticFeatures: sp.morphology.diagnosticFeatures ? sp.morphology.diagnosticFeatures.join('\n') : '',
      systems: sp.habitat.systems || ['freshwater'],
      bangladeshPresent: sp.bangladeshOccurrence.present,
      bangladeshRegions: sp.bangladeshOccurrence.regions ? sp.bangladeshOccurrence.regions.join(', ') : '',
      bangladeshResidency: sp.bangladeshOccurrence.residencyStatus || 'native',
      nationalRedList: sp.bangladeshOccurrence.threatCategoryNational || 'LC',
      iucnGlobalStatus: sp.conservation.iucnGlobalStatus || 'LC',
      iucnAssessmentYear: sp.conservation.iucnAssessmentYear || 2024,
      referenceId: sp.referenceIds[0] || (references[0]?.id || ''),
      threats: sp.conservation.threats ? sp.conservation.threats.join(', ') : '',
    });
    setIsModalOpen(true);
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const cleanBinomial = formData.scientificName.trim();
    if (!cleanBinomial) {
      setFormError('Scientific binomial name is required.');
      return;
    }

    // Pre-save duplicate check against canonical dataset
    const duplicate = species.find(
      s => s.scientificName.trim().toLowerCase() === cleanBinomial.toLowerCase() && s.id !== editingSpecies?.id
    );
    if (duplicate) {
      setFormError(`A species record with the name "${duplicate.scientificName}" already exists (ID: ${duplicate.id}). Duplicate taxa records are prohibited by platform governance.`);
      return;
    }

    const genusName = formData.genus.trim() || cleanBinomial.split(' ')[0];

    const recordPayload = {
      scientificName: cleanBinomial,
      scientificNameAuthorship: formData.scientificNameAuthorship.trim(),
      taxonomicStatus: 'accepted' as const,
      synonyms: editingSpecies ? editingSpecies.synonyms : [],
      commonNames: {
        en: formData.commonNamesEn.split(',').map(s => s.trim()).filter(Boolean),
        bn: formData.commonNamesBn.split(',').map(s => s.trim()).filter(Boolean),
      },
      taxonomy: {
        kingdom: formData.kingdom.trim() || 'Animalia',
        phylum: formData.phylum.trim() || 'Chordata',
        class: formData.class.trim(),
        order: formData.order.trim(),
        family: formData.family.trim(),
        genus: genusName,
        species: cleanBinomial,
      },
      module: formData.module,
      morphology: {
        diagnosticFeatures: formData.diagnosticFeatures.split('\n').map(s => s.trim()).filter(Boolean),
        description: formData.description.trim(),
      },
      habitat: {
        systems: formData.systems,
        zones: editingSpecies?.habitat.zones || ['pelagic'],
      },
      bangladeshOccurrence: {
        present: formData.bangladeshPresent,
        regions: formData.bangladeshRegions.split(',').map(s => s.trim()).filter(Boolean),
        habitatTypes: editingSpecies?.bangladeshOccurrence.habitatTypes || ['riverine'],
        residencyStatus: formData.bangladeshResidency,
        threatCategoryNational: formData.nationalRedList,
      },
      ecology: editingSpecies?.ecology || {
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
      referenceIds: formData.referenceId ? [formData.referenceId] : (references[0] ? [references[0].id] : []),
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
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      {/* Title & Actions */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', margin: 0 }}>
            {language === 'bn' ? 'প্রজাতি লাইফসাইকেল ও মনোগ্রাফ প্রশাসন' : 'Species Monograph & Lifecycle Manager'}
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.35rem', marginBottom: 0 }}>
            {language === 'bn' 
              ? 'বৈজ্ঞানিক নাম, শ্রেণীবিন্যাস, ডায়াগনস্টিক বৈশিষ্ট্য, সংরক্ষণ অবস্থা এবং পিয়ার-রিভিউ অনুমোদন পরিচালনা করুন।'
              : 'Create, edit, review, verify, publish, and curate authoritative zoological species records.'}
          </p>
        </div>

        {permissions.canCreateSpecies && (
          <button onClick={handleOpenCreate} className="btn btn-primary" style={{ gap: '0.45rem', padding: '0.6rem 1.1rem' }}>
            <Plus size={16} />
            <span>{t('admin.actions.addNewSpecies', 'Add New Species')}</span>
          </button>
        )}
      </div>

      {/* Filter Tabs and Search Bar */}
      <div className="card" style={{ padding: '1rem 1.25rem', marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.85rem' }}>
          {/* Status Sub-views */}
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => { setStatusFilter('all'); setPage(1); }}
              className={`btn btn-sm ${statusFilter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: '0.78rem' }}
            >
              {language === 'bn' ? 'সকল প্রজাতি' : 'All'} ({counts.all})
            </button>
            <button
              onClick={() => { setStatusFilter('published'); setPage(1); }}
              className={`btn btn-sm ${statusFilter === 'published' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: '0.78rem' }}
            >
              <CheckCircle2 size={13} style={{ color: '#10b981' }} />
              <span>{language === 'bn' ? 'প্রকাশিত' : 'Published'} ({counts.published})</span>
            </button>
            <button
              onClick={() => { setStatusFilter('under_review'); setPage(1); }}
              className={`btn btn-sm ${statusFilter === 'under_review' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: '0.78rem' }}
            >
              <FileCheck size={13} style={{ color: '#f59e0b' }} />
              <span>{language === 'bn' ? 'পর্যালোচনাধীন' : 'Under Review'} ({counts.underReview})</span>
            </button>
            <button
              onClick={() => { setStatusFilter('draft'); setPage(1); }}
              className={`btn btn-sm ${statusFilter === 'draft' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: '0.78rem' }}
            >
              <span>{language === 'bn' ? 'খসড়া' : 'Drafts'} ({counts.draft})</span>
            </button>
            <button
              onClick={() => { setStatusFilter('archived'); setPage(1); }}
              className={`btn btn-sm ${statusFilter === 'archived' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: '0.78rem' }}
            >
              <span>{language === 'bn' ? 'আর্কাইভকৃত' : 'Archived'} ({counts.archived})</span>
            </button>
          </div>

          {/* Regional Quick Toggle */}
          <div style={{ display: 'flex', gap: '0.35rem', background: 'rgba(0,0,0,0.2)', padding: '0.2rem', borderRadius: 'var(--radius-md)' }}>
            <button
              onClick={() => { setRegionFilter('all'); setPage(1); }}
              className={`btn btn-sm ${regionFilter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ padding: '0.25rem 0.6rem', fontSize: '0.72rem' }}
            >
              <Globe size={12} />
              <span>{language === 'bn' ? 'সকল অঞ্চল' : 'All Regions'}</span>
            </button>
            <button
              onClick={() => { setRegionFilter('bangladesh'); setPage(1); }}
              className={`btn btn-sm ${regionFilter === 'bangladesh' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ padding: '0.25rem 0.6rem', fontSize: '0.72rem' }}
            >
              <MapPin size={12} style={{ color: '#10b981' }} />
              <span>BD ({counts.bangladesh})</span>
            </button>
            <button
              onClick={() => { setRegionFilter('global'); setPage(1); }}
              className={`btn btn-sm ${regionFilter === 'global' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ padding: '0.25rem 0.6rem', fontSize: '0.72rem' }}
            >
              <span>Global ({counts.global})</span>
            </button>
          </div>
        </div>

        {/* Search input & counter */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', flex: 1, minWidth: '260px' }}>
            <Search size={16} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder={language === 'bn' ? 'দ্বিপদী নাম, গোত্র, বর্গ বা সাধারণ নাম খুঁজুন...' : 'Search binomial, order, family, common name...'}
              value={search}
              onChange={e => { setSearch(e.target.value); setPage(1); }}
              className="form-input"
              style={{ paddingLeft: '2.5rem' }}
            />
          </div>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            {language === 'bn' ? 'প্রদর্শিত:' : 'Showing'} <strong style={{ color: '#fff' }}>{filteredSpecies.length}</strong> {language === 'bn' ? 'টি প্রজাতি' : 'records'}
          </div>
        </div>
      </div>

      {/* Species Table */}
      <div className="data-table-container card" style={{ padding: 0, overflow: 'hidden' }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>Scientific Binomial & Authority</th>
              <th>Common Names</th>
              <th>Classification</th>
              <th>Scope & System</th>
              <th>Status</th>
              <th>Verified</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedSpecies.length === 0 ? (
              <tr>
                <td colSpan={7} style={{ textAlign: 'center', padding: '2.5rem', color: 'var(--text-muted)' }}>
                  {language === 'bn' ? 'কোনো প্রজাতি রেকর্ড খুঁজে পাওয়া যায়নি।' : 'No species records match the specified filters.'}
                </td>
              </tr>
            ) : (
              paginatedSpecies.map(sp => (
                <tr key={sp.id}>
                  <td>
                    <div style={{ fontWeight: 600, color: '#ffffff' }}>
                      <ScientificName name={sp.scientificName} authorship={sp.scientificNameAuthorship} />
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                      {sp.id}
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
                    <div style={{ fontSize: '0.8rem', color: '#e2e8f0', fontWeight: 500 }}>
                      {sp.taxonomy.class}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      {sp.taxonomy.order} • {sp.taxonomy.family}
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.2rem' }}>
                      {sp.bangladeshOccurrence.present ? (
                        <span style={{ fontSize: '0.7rem', padding: '0.1rem 0.35rem', borderRadius: '3px', background: 'rgba(16,185,129,0.15)', color: '#10b981', fontWeight: 700 }}>
                          BD ({sp.bangladeshOccurrence.residencyStatus})
                        </span>
                      ) : (
                        <span style={{ fontSize: '0.7rem', padding: '0.1rem 0.35rem', borderRadius: '3px', background: 'rgba(148,163,184,0.15)', color: '#94a3b8' }}>
                          Global
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      {sp.habitat.systems.join(', ')}
                    </div>
                  </td>
                  <td>
                    <StatusBadge status={sp.lifecycleStatus} />
                  </td>
                  <td>
                    {sp.isVerified ? (
                      <span style={{ color: 'var(--accent-emerald-light)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', fontWeight: 600 }}>
                        <CheckCircle2 size={13} /> {language === 'bn' ? 'হ্যাঁ' : 'Yes'}
                      </span>
                    ) : (
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                        {language === 'bn' ? 'না' : 'No'}
                      </span>
                    )}
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.35rem' }}>
                      {/* Edit */}
                      {permissions.canEditSpecies && (
                        <button
                          onClick={() => handleOpenEdit(sp)}
                          className="btn-icon"
                          title="Edit Species Monograph"
                        >
                          <Edit size={14} />
                        </button>
                      )}

                      {/* Submit for Review (if draft) */}
                      {sp.lifecycleStatus === 'draft' && (
                        <button
                          onClick={() => submitSpeciesForReview(sp.id)}
                          className="btn btn-secondary btn-sm"
                          style={{ padding: '0.2rem 0.5rem', fontSize: '0.7rem', color: '#f59e0b', borderColor: 'rgba(245,158,11,0.3)' }}
                          title="Submit for Peer Review"
                        >
                          <Send size={11} style={{ marginRight: '0.25rem' }} />
                          {language === 'bn' ? 'জমা' : 'Submit'}
                        </button>
                      )}

                      {/* Verify (if reviewer/admin) */}
                      {permissions.canVerifySpecies && !sp.isVerified && (
                        <button
                          onClick={() => verifySpecies(sp.id, 'Verified by taxonomic review')}
                          className="btn btn-sm"
                          style={{ padding: '0.2rem 0.5rem', fontSize: '0.7rem', background: 'rgba(2, 132, 199, 0.2)', color: '#38bdf8', borderColor: 'rgba(2, 132, 199, 0.3)' }}
                          title="Verify Species"
                        >
                          <CheckCircle2 size={11} style={{ marginRight: '0.25rem' }} />
                          {language === 'bn' ? 'যাচাই' : 'Verify'}
                        </button>
                      )}

                      {/* Publish / Unpublish */}
                      {permissions.canPublishSpecies && !sp.isPublished && (
                        <button
                          onClick={() => publishSpecies(sp.id)}
                          className="btn btn-primary btn-sm"
                          style={{ padding: '0.2rem 0.5rem', fontSize: '0.7rem' }}
                          title="Publish to Public Site"
                        >
                          <Eye size={11} style={{ marginRight: '0.25rem' }} />
                          {language === 'bn' ? 'প্রকাশ' : 'Publish'}
                        </button>
                      )}

                      {permissions.canPublishSpecies && sp.isPublished && (
                        <button
                          onClick={() => unpublishSpecies(sp.id)}
                          className="btn btn-secondary btn-sm"
                          style={{ padding: '0.2rem 0.5rem', fontSize: '0.7rem' }}
                          title="Unpublish"
                        >
                          <EyeOff size={11} style={{ marginRight: '0.25rem' }} />
                          {language === 'bn' ? 'অপ্রকাশ' : 'Unpublish'}
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
                            if (window.confirm(`Are you sure you want to permanently delete ${sp.scientificName}? This action is irreversible.`)) {
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
              ))
            )}
          </tbody>
        </table>

        {/* Pagination Footer */}
        {totalPages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.85rem 1.25rem', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-surface)' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Page {page} of {totalPages}
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

      {/* Modal: Create or Edit Species Monograph */}
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
              maxWidth: '860px',
              maxHeight: '92vh',
              overflowY: 'auto',
              background: 'var(--bg-surface, #0d161d)',
              border: '1px solid var(--border-subtle)',
              padding: '2rem',
              borderRadius: 'var(--radius-lg)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div>
                <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                  {editingSpecies ? `Edit: ${editingSpecies.scientificName}` : 'Create New Zoological Monograph'}
                </h2>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                  {editingSpecies ? `Canonical Record ID: ${editingSpecies.id}` : 'New Species Record (Draft)'}
                </div>
              </div>
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
                <AlertCircle size={16} style={{ flexShrink: 0 }} />
                <span>{formError}</span>
              </div>
            )}

            {/* Modal Tabs */}
            <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem', marginBottom: '1.25rem' }}>
              <button
                type="button"
                onClick={() => setActiveTab('taxonomy')}
                className={`btn btn-sm ${activeTab === 'taxonomy' ? 'btn-primary' : 'btn-secondary'}`}
              >
                1. Nomenclature & Taxonomy
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('morphology')}
                className={`btn btn-sm ${activeTab === 'morphology' ? 'btn-primary' : 'btn-secondary'}`}
              >
                2. Morphology & Habitat
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('geography')}
                className={`btn btn-sm ${activeTab === 'geography' ? 'btn-primary' : 'btn-secondary'}`}
              >
                3. Bangladesh Occurrence
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('conservation')}
                className={`btn btn-sm ${activeTab === 'conservation' ? 'btn-primary' : 'btn-secondary'}`}
              >
                4. Conservation & Citations
              </button>
            </div>

            <form onSubmit={handleSubmitForm} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Tab 1: Nomenclature & Taxonomy */}
              {activeTab === 'taxonomy' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
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
                        Bangla Names (বাংলা সাধারণ নাম)
                      </label>
                      <input
                        type="text"
                        value={formData.commonNamesBn}
                        onChange={e => setFormData({ ...formData, commonNamesBn: e.target.value })}
                        className="form-input bangla-text"
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.85rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                        Class
                      </label>
                      <input
                        type="text"
                        value={formData.class}
                        onChange={e => setFormData({ ...formData, class: e.target.value })}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
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
                      <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                        Family
                      </label>
                      <input
                        type="text"
                        value={formData.family}
                        onChange={e => setFormData({ ...formData, family: e.target.value })}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                        Genus
                      </label>
                      <input
                        type="text"
                        value={formData.genus}
                        onChange={e => setFormData({ ...formData, genus: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                      Zoological Module Category
                    </label>
                    <select
                      value={formData.module}
                      onChange={e => setFormData({ ...formData, module: e.target.value as 'fish' | 'marine' | 'general' })}
                      className="form-select"
                    >
                      <option value="fish">Fish (Actinopterygii / Chondrichthyes / Agnatha)</option>
                      <option value="marine">Marine Non-Fish (Cetacea / Invertebrates / Reptiles)</option>
                      <option value="general">General Zoology & Terrestrial</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Tab 2: Morphology & Habitat */}
              {activeTab === 'morphology' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                      Diagnostic Features (One key taxonomic diagnostic per line)
                    </label>
                    <textarea
                      rows={4}
                      value={formData.diagnosticFeatures}
                      onChange={e => setFormData({ ...formData, diagnosticFeatures: e.target.value })}
                      className="form-textarea"
                      placeholder="e.g. Scutes along belly 30-33&#10;Distinct dark blotch behind gill opening"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                      General Morphological & Anatomical Description
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
                      Aquatic Systems
                    </label>
                    <div style={{ display: 'flex', gap: '1.25rem', marginTop: '0.35rem' }}>
                      {(['freshwater', 'marine', 'brackish', 'terrestrial'] as AquaticSystem[]).map(sys => (
                        <label key={sys} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: '#e2e8f0', textTransform: 'capitalize' }}>
                          <input
                            type="checkbox"
                            checked={formData.systems.includes(sys)}
                            onChange={e => {
                              if (e.target.checked) {
                                setFormData({ ...formData, systems: [...formData.systems, sys] });
                              } else {
                                setFormData({ ...formData, systems: formData.systems.filter(s => s !== sys) });
                              }
                            }}
                          />
                          <span>{sys}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Bangladesh Occurrence */}
              {activeTab === 'geography' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <input
                      type="checkbox"
                      id="bg-present"
                      checked={formData.bangladeshPresent}
                      onChange={e => setFormData({ ...formData, bangladeshPresent: e.target.checked })}
                    />
                    <label htmlFor="bg-present" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#ffffff' }}>
                      Native or Documented Occurrence in Bangladesh Territory
                    </label>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                        Bangladesh Residency Status
                      </label>
                      <select
                        value={formData.bangladeshResidency}
                        onChange={e => setFormData({ ...formData, bangladeshResidency: e.target.value as BangladeshResidency })}
                        className="form-select"
                      >
                        <option value="native">Native</option>
                        <option value="resident">Resident</option>
                        <option value="migrant">Migrant</option>
                        <option value="endemic">Endemic</option>
                        <option value="introduced">Introduced</option>
                        <option value="invasive">Invasive</option>
                        <option value="not_recorded">Not Recorded</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                        National Red List Assessment (IUCN Bangladesh)
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
                        <option value="DD">Data Deficient (DD)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                      Bangladesh Documented Regions / River Basins (Comma-separated)
                    </label>
                    <input
                      type="text"
                      value={formData.bangladeshRegions}
                      onChange={e => setFormData({ ...formData, bangladeshRegions: e.target.value })}
                      className="form-input"
                      placeholder="e.g. Bay of Bengal, Padma River, Meghna Estuary, Sundarbans"
                    />
                  </div>
                </div>
              )}

              {/* Tab 4: Conservation & Citations */}
              {activeTab === 'conservation' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                        Global IUCN Red List Status
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
                        Global Assessment Year
                      </label>
                      <input
                        type="number"
                        value={formData.iucnAssessmentYear}
                        onChange={e => setFormData({ ...formData, iucnAssessmentYear: Number(e.target.value) })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                      Primary Monograph Citation / Reference Source *
                    </label>
                    <select
                      value={formData.referenceId}
                      onChange={e => setFormData({ ...formData, referenceId: e.target.value })}
                      className="form-select"
                    >
                      {references.map(r => (
                        <option key={r.id} value={r.id}>
                          {r.authors ? r.authors[0] : 'Reference'} ({r.year}) — {r.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                      Ecological Threats (Comma-separated)
                    </label>
                    <input
                      type="text"
                      value={formData.threats}
                      onChange={e => setFormData({ ...formData, threats: e.target.value })}
                      className="form-input"
                      placeholder="e.g. Overfishing, Habitat fragmentation, Water pollution"
                    />
                  </div>
                </div>
              )}

              {/* Form Controls */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {activeTab !== 'taxonomy' && (
                    <button
                      type="button"
                      onClick={() => {
                        if (activeTab === 'conservation') setActiveTab('geography');
                        else if (activeTab === 'geography') setActiveTab('morphology');
                        else if (activeTab === 'morphology') setActiveTab('taxonomy');
                      }}
                      className="btn btn-secondary btn-sm"
                    >
                      Previous Tab
                    </button>
                  )}
                  {activeTab !== 'conservation' && (
                    <button
                      type="button"
                      onClick={() => {
                        if (activeTab === 'taxonomy') setActiveTab('morphology');
                        else if (activeTab === 'morphology') setActiveTab('geography');
                        else if (activeTab === 'geography') setActiveTab('conservation');
                      }}
                      className="btn btn-secondary btn-sm"
                    >
                      Next Tab
                    </button>
                  )}
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button type="button" onClick={() => setIsModalOpen(false)} className="btn btn-secondary">
                    {t('admin.actions.cancel', 'Cancel')}
                  </button>
                  <button type="submit" className="btn btn-primary">
                    {editingSpecies ? 'Update Species Monograph' : 'Save Species Draft'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
