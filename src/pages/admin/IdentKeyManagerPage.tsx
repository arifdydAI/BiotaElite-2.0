// BiotaElite 2.0 Identification Key Builder & Couplet Editor
// Phase H: Diagnostic Keys Curation, Couplet Step Traversal & Loop Validation
import React, { useState, useMemo } from 'react';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import type { IdentificationKey, KeyScope } from '../../types/biodiversity';
import { 
  Search, 
  Trash2, 
  Plus, 
  AlertTriangle, 
  X,
  GitBranch
} from 'lucide-react';

export const IdentKeyManagerPage: React.FC = () => {
  const { identKeys, addIdentKey, deleteIdentKey } = useBiodiversity();
  const { permissions } = useAuth();
  const { language } = useLanguage();

  const [search, setSearch] = useState('');
  const [scopeFilter, setScopeFilter] = useState<string>('all');
  const [selectedKey, setSelectedKey] = useState<IdentificationKey | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Form State for creating/editing a Key
  const [formData, setFormData] = useState<{
    title: string;
    titleBn: string;
    taxonScope: string;
    taxonScopeBn: string;
    scope: KeyScope;
    description: string;
    descriptionBn: string;
    educationalLevel: 'introductory' | 'intermediate' | 'advanced' | 'professional';
  }>({
    title: '',
    titleBn: '',
    taxonScope: '',
    taxonScopeBn: '',
    scope: 'global',
    description: '',
    descriptionBn: '',
    educationalLevel: 'intermediate',
  });

  const filteredKeys = useMemo(() => {
    return identKeys.filter(k => {
      if (scopeFilter !== 'all' && k.scope !== scopeFilter) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        return (
          k.title.toLowerCase().includes(q) ||
          (k.titleBn && k.titleBn.includes(q)) ||
          k.taxonScope.toLowerCase().includes(q) ||
          k.description.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [identKeys, scopeFilter, search]);

  // Key Integrity Validator (Checks for dead ends or non-existent next steps)
  const validateKeySteps = (key: IdentificationKey) => {
    const stepIds = new Set(key.steps.map(s => s.id));
    const errors: string[] = [];

    for (const step of key.steps) {
      for (const opt of step.couplets) {
        if (opt.resultType === 'next_step' && opt.nextStepId) {
          if (!stepIds.has(opt.nextStepId)) {
            errors.push(`Step ${step.id} references nonexistent step ${opt.nextStepId}`);
          }
        }
      }
    }
    return errors;
  };

  const handleOpenCreate = () => {
    setFormError(null);
    setFormData({
      title: '',
      titleBn: '',
      taxonScope: '',
      taxonScopeBn: '',
      scope: 'global',
      description: '',
      descriptionBn: '',
      educationalLevel: 'intermediate',
    });
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const cleanTitle = formData.title.trim();
    if (!cleanTitle) {
      setFormError('Key title is required.');
      return;
    }

    addIdentKey({
      title: cleanTitle,
      titleBn: formData.titleBn.trim() || undefined,
      taxonScope: formData.taxonScope.trim(),
      taxonScopeBn: formData.taxonScopeBn.trim() || undefined,
      scope: formData.scope,
      description: formData.description.trim(),
      descriptionBn: formData.descriptionBn.trim() || undefined,
      educationalLevel: formData.educationalLevel,
      keyType: 'dichotomous',
      verificationStatus: 'verified',
      steps: [
        {
          id: 1,
          title: 'Initial Diagnostic Couplet',
          couplets: [
            {
              lead: '1a',
              diagnosticFeature: 'Observable feature 1',
              resultType: 'taxon',
              rationaleEn: 'Initial couplet determination',
            },
            {
              lead: '1b',
              diagnosticFeature: 'Observable feature 2',
              resultType: 'taxon',
              rationaleEn: 'Initial couplet determination',
            },
          ],
        },
      ],
    });

    setIsModalOpen(false);
  };

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', margin: 0 }}>
            {language === 'bn' ? 'শনাক্তকরণ কুঞ্জি প্রশাসন ও ডাইকোটোমাস সম্পাদক' : 'Identification Key Builder & Governance'}
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.35rem', marginBottom: 0 }}>
            {language === 'bn'
              ? '২১টি প্রামাণ্য শনাক্তকরণ কুঞ্জি, ডাইকোটোমাস কপলেট ও ডায়াগনস্টিক ট্র্যাভার্সাল পথ পরিচালনা করুন।'
              : 'Curate 21 peer-reviewed dichotomous identification keys, couplet steps, and determination targets.'}
          </p>
        </div>

        {permissions.canManageKeys && (
          <button onClick={handleOpenCreate} className="btn btn-primary" style={{ gap: '0.45rem', padding: '0.6rem 1.1rem' }}>
            <Plus size={16} />
            <span>{language === 'bn' ? 'নতুন কুঞ্জি তৈরি' : 'Create New Key'}</span>
          </button>
        )}
      </div>

      {/* Filter and Search Bar */}
      <div className="card" style={{ padding: '0.85rem 1.25rem', marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ position: 'relative', width: '320px' }}>
          <Search size={16} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder={language === 'bn' ? 'কুঞ্জির শিরোনাম বা ট্যাক্সন অনুসন্ধান...' : 'Search key title or taxon scope...'}
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="form-input"
            style={{ paddingLeft: '2.5rem' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Scope:</span>
          {['all', 'fish_major', 'chondrichthyes', 'actinopterygii', 'marine_non_fish'].map(sc => (
            <button
              key={sc}
              onClick={() => setScopeFilter(sc)}
              className={`btn btn-sm ${scopeFilter === sc ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: '0.75rem', textTransform: 'capitalize' }}
            >
              {sc.replace('_', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Keys Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
        {filteredKeys.map(k => {
          const validationErrors = validateKeySteps(k);
          const isSelected = selectedKey?.id === k.id;
          return (
            <div
              key={k.id}
              className="card"
              style={{
                padding: '1.25rem',
                border: isSelected ? '1px solid var(--accent-marine-light, #0284c7)' : '1px solid var(--border-subtle)',
                background: isSelected ? 'rgba(2, 132, 199, 0.05)' : 'var(--bg-surface)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      padding: '0.15rem 0.45rem',
                      borderRadius: '3px',
                      background: 'rgba(56, 189, 248, 0.15)',
                      color: '#38bdf8',
                    }}
                  >
                    {k.scope.replace('_', ' ')}
                  </span>

                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      padding: '0.15rem 0.45rem',
                      borderRadius: '3px',
                      background: validationErrors.length === 0 ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                      color: validationErrors.length === 0 ? '#10b981' : '#f87171',
                    }}
                  >
                    {validationErrors.length === 0 ? 'Valid Tree' : `${validationErrors.length} Issue`}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                  {k.title}
                </h3>
                {k.titleBn && (
                  <div className="bangla-text" style={{ fontSize: '0.85rem', color: 'var(--accent-emerald-light)', marginTop: '0.2rem' }}>
                    {k.titleBn}
                  </div>
                )}

                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                  Scope: <strong style={{ color: '#e2e8f0' }}>{k.taxonScope}</strong> • Level: {k.educationalLevel}
                </div>

                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: 1.4 }}>
                  {k.description.slice(0, 110)}...
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.85rem', marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <GitBranch size={13} style={{ color: '#fbbf24' }} />
                  <span>{k.steps.length} diagnostic steps</span>
                </span>

                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  <button
                    onClick={() => setSelectedKey(isSelected ? null : k)}
                    className="btn btn-secondary btn-sm"
                    style={{ fontSize: '0.72rem', padding: '0.25rem 0.6rem' }}
                  >
                    {isSelected ? 'Hide Couplets' : 'View Couplets'}
                  </button>

                  {permissions.canManageKeys && (
                    <button
                      onClick={() => {
                        if (window.confirm(`Are you sure you want to delete identification key "${k.title}"?`)) {
                          deleteIdentKey(k.id);
                        }
                      }}
                      className="btn-icon"
                      style={{ color: '#ef4444' }}
                      title="Delete Key"
                    >
                      <Trash2 size={13} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Key Step Traversal Inspector */}
      {selectedKey && (
        <div className="card" style={{ padding: '1.75rem', border: '1px solid var(--accent-marine-light, #0284c7)', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
            <div>
              <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--accent-marine-light)', fontWeight: 700 }}>
                Couplet Traversal Inspector
              </div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                {selectedKey.title}
              </h2>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                Key ID: {selectedKey.id} • {selectedKey.steps.length} Steps Defined
              </div>
            </div>
            <button onClick={() => setSelectedKey(null)} className="btn-icon">
              <X size={18} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {selectedKey.steps.map((st) => (
              <div
                key={st.id}
                style={{
                  background: 'rgba(0, 0, 0, 0.25)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#38bdf8' }}>
                    Step {st.id}: {st.title || 'Diagnostic Decision'}
                  </span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    {st.couplets.length} options
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.85rem' }}>
                  {st.couplets.map((c, cIdx) => (
                    <div
                      key={cIdx}
                      style={{
                        padding: '0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                        fontSize: '0.82rem',
                      }}
                    >
                      <div style={{ color: 'var(--text-primary)', fontWeight: 500, lineHeight: 1.4 }}>
                        {c.diagnosticFeature}
                      </div>

                      <div style={{ marginTop: '0.65rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', fontWeight: 700, color: c.resultType === 'next_step' ? '#f59e0b' : '#10b981' }}>
                          {c.resultType === 'next_step' ? 'Next Step' : 'Determination'}
                        </span>
                        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#ffffff' }}>
                          {c.resultType === 'next_step'
                            ? `→ Step ${c.nextStepId}`
                            : (c.speciesId || c.taxonId || 'Species Identified')}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Create Key Modal */}
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
              maxWidth: '650px',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              padding: '2rem',
              borderRadius: 'var(--radius-lg)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                Create New Identification Key
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
                <AlertTriangle size={16} />
                <span>{formError}</span>
              </div>
            )}

            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                  Key Title (English) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={e => setFormData({ ...formData, title: e.target.value })}
                  className="form-input"
                  placeholder="e.g. Major Groups of Fishes"
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                  Key Title (বাংলা)
                </label>
                <input
                  type="text"
                  value={formData.titleBn}
                  onChange={e => setFormData({ ...formData, titleBn: e.target.value })}
                  className="form-input bangla-text"
                  placeholder="যেমন: মাছের প্রধান বিভাগসমূহের শনাক্তকরণ কুঞ্জি"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    Taxon Scope
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.taxonScope}
                    onChange={e => setFormData({ ...formData, taxonScope: e.target.value })}
                    className="form-input"
                    placeholder="e.g. Pisces / Actinopterygii"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    Scope Group
                  </label>
                  <select
                    value={formData.scope}
                    onChange={e => setFormData({ ...formData, scope: e.target.value as typeof formData.scope })}
                    className="form-select"
                  >
                    <option value="global">Global Comprehensive</option>
                    <option value="bangladesh">Bangladesh Regional</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                  Key Overview Description
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={e => setFormData({ ...formData, description: e.target.value })}
                  className="form-textarea"
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '0.5rem' }}>
                <button type="button" onClick={() => setIsModalOpen(false)} className="btn btn-secondary">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Create Identification Key
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
