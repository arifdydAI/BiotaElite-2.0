// BiotaElite 2.0 Scientific Peer-Verification Queue & Approval Workflow
// Phase L: Multi-tab Verification Pipeline, Diagnostic Feedback & Audit Stamping
import React, { useState, useMemo } from 'react';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import type { SpeciesRecord } from '../../types/biodiversity';
import { ScientificName } from '../../components/common/ScientificName';
import { StatusBadge } from '../../components/common/StatusBadge';
import { 
  ShieldCheck, 
  Check, 
  X, 
  AlertCircle, 
  Clock, 
  CheckCircle2, 
  Eye,
  FileText,
  Search,
  BookOpen
} from 'lucide-react';

export const ReviewQueuePage: React.FC = () => {
  const { species, verifySpecies, publishSpecies, rejectSpeciesReview } = useBiodiversity();
  const { permissions, role, currentUser } = useAuth();
  const { language } = useLanguage();

  const [activeTab, setActiveTab] = useState<'pending' | 'verified' | 'drafts'>('pending');
  const [search, setSearch] = useState('');
  const [verifierNotes, setVerifierNotes] = useState<Record<string, string>>({});
  const [rejectionModalSpecies, setRejectionModalSpecies] = useState<SpeciesRecord | null>(null);
  const [rejectionReason, setRejectionReason] = useState('');

  const counts = useMemo(() => {
    return {
      pending: species.filter(s => s.lifecycleStatus === 'under_review').length,
      verified: species.filter(s => s.isVerified && (s.lifecycleStatus === 'verified' || s.isPublished)).length,
      drafts: species.filter(s => s.lifecycleStatus === 'draft').length,
    };
  }, [species]);

  const displayedList = useMemo(() => {
    let list: SpeciesRecord[] = [];
    if (activeTab === 'pending') {
      list = species.filter(s => s.lifecycleStatus === 'under_review');
    } else if (activeTab === 'verified') {
      list = species.filter(s => s.isVerified && (s.lifecycleStatus === 'verified' || s.isPublished));
    } else {
      list = species.filter(s => s.lifecycleStatus === 'draft');
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(s =>
        s.scientificName.toLowerCase().includes(q) ||
        s.taxonomy.family.toLowerCase().includes(q) ||
        s.commonNames.en.some(c => c.toLowerCase().includes(q))
      );
    }
    return list;
  }, [species, activeTab, search]);

  const handleVerify = (id: string) => {
    const notes = verifierNotes[id]?.trim() || `Verified by ${currentUser?.displayName || 'Taxonomic Reviewer'} against authoritative monograph baseline.`;
    verifySpecies(id, notes);
  };

  const handleOpenReject = (sp: SpeciesRecord) => {
    setRejectionModalSpecies(sp);
    setRejectionReason('');
  };

  const handleConfirmReject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rejectionModalSpecies) return;

    const reason = rejectionReason.trim() || 'Morphological diagnosis or authority citation requires additional primary literature evidence.';
    rejectSpeciesReview(rejectionModalSpecies.id, reason);
    setRejectionModalSpecies(null);
  };

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      {/* Title */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-marine-light)', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
          <ShieldCheck size={16} />
          <span>Scientific Peer Review & Quality Assurance</span>
        </div>

        <h1 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', margin: 0 }}>
          {language === 'bn' ? 'বৈজ্ঞানিক পিয়ার-রিভিউ ও যাচাইকরণ সারি' : 'Verification & Peer-Review Queue'}
        </h1>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.35rem', marginBottom: 0 }}>
          {language === 'bn'
            ? 'জমা দেওয়া প্রাণিবিজ্ঞান রেকর্ডসমূহ প্রাথমিক সাহিত্য, ফিশবেস ও WoRMS-এর সাথে মিলিয়ে অনুমোদন বা ফেরত দিন।'
            : 'Evaluate submitted monograph records, cross-check against primary literature, and stamp verification approval.'}
        </p>
      </div>

      {!permissions.canVerifySpecies && (
        <div
          style={{
            background: 'rgba(217, 119, 6, 0.12)',
            border: '1px solid rgba(217, 119, 6, 0.3)',
            borderRadius: 'var(--radius-md)',
            padding: '0.85rem 1rem',
            marginBottom: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            fontSize: '0.82rem',
            color: '#fbbf24',
          }}
        >
          <AlertCircle size={16} style={{ flexShrink: 0 }} />
          <span>
            Current role <strong>{role.replace('_', ' ')}</strong> does not possess verification authority. Switch to <strong>Reviewer</strong>, <strong>Admin</strong>, or <strong>Super Admin</strong> in DEV mode to execute peer-review actions.
          </span>
        </div>
      )}

      {/* Tabs & Search */}
      <div className="card" style={{ padding: '0.85rem 1.25rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveTab('pending')}
            className={`btn btn-sm ${activeTab === 'pending' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ fontSize: '0.78rem' }}
          >
            <Clock size={13} style={{ color: '#f59e0b' }} />
            <span>Pending Review ({counts.pending})</span>
          </button>

          <button
            onClick={() => setActiveTab('verified')}
            className={`btn btn-sm ${activeTab === 'verified' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ fontSize: '0.78rem' }}
          >
            <CheckCircle2 size={13} style={{ color: '#10b981' }} />
            <span>Verified & Published ({counts.verified})</span>
          </button>

          <button
            onClick={() => setActiveTab('drafts')}
            className={`btn btn-sm ${activeTab === 'drafts' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ fontSize: '0.78rem' }}
          >
            <FileText size={13} />
            <span>Drafts & Returned ({counts.drafts})</span>
          </button>
        </div>

        <div style={{ position: 'relative', width: '280px' }}>
          <Search size={15} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Filter queue records..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="form-input"
            style={{ paddingLeft: '2.3rem', fontSize: '0.8rem' }}
          />
        </div>
      </div>

      {/* Queue Stream */}
      {displayedList.length === 0 ? (
        <div className="card" style={{ padding: '3.5rem', textAlign: 'center' }}>
          <ShieldCheck size={48} style={{ color: 'var(--accent-emerald, #10b981)', margin: '0 auto 1rem' }} />
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.35rem' }}>
            {activeTab === 'pending' ? 'Review Queue Clear' : 'No Records in Selected View'}
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: 0 }}>
            {activeTab === 'pending'
              ? 'All zoological species monographs in the platform have undergone verification.'
              : 'Try selecting a different tab or clearing your search filter.'}
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {displayedList.map(item => (
            <div
              key={item.id}
              className="card"
              style={{
                padding: '1.5rem',
                borderLeft: activeTab === 'pending' ? '4px solid #f59e0b' : activeTab === 'verified' ? '4px solid #10b981' : '4px solid #6b7280',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                    {item.taxonomy.class} • {item.taxonomy.order} • {item.taxonomy.family}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                    <ScientificName name={item.scientificName} authorship={item.scientificNameAuthorship} />
                  </h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                    {item.commonNames.en.join(', ')} {item.commonNames.bn.length > 0 && `(${item.commonNames.bn.join(', ')})`}
                  </div>
                </div>

                <StatusBadge status={item.lifecycleStatus} />
              </div>

              {/* Diagnosis Summary */}
              <div style={{ background: 'rgba(0,0,0,0.25)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1rem', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  Submitted Morphological Diagnosis
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  {item.morphology.description || 'No long description provided.'}
                </p>

                {item.morphology.diagnosticFeatures && item.morphology.diagnosticFeatures.length > 0 && (
                  <div style={{ marginTop: '0.65rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.5rem' }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                      Diagnostic Traits:
                    </div>
                    <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.82rem', color: 'var(--text-primary)' }}>
                      {item.morphology.diagnosticFeatures.map((feat, fIdx) => (
                        <li key={fIdx}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Citations Count & Verification Stamp */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <BookOpen size={13} style={{ color: '#fbbf24' }} />
                  <span>Referenced Citations: <strong style={{ color: '#e2e8f0' }}>{item.referenceIds.length}</strong> attached</span>
                </div>

                {item.isVerified && item.verifiedBy && (
                  <div style={{ color: 'var(--accent-emerald-light)' }}>
                    Verified by {item.verifiedBy} {item.verifiedAt ? `on ${new Date(item.verifiedAt).toLocaleDateString()}` : ''}
                  </div>
                )}
              </div>

              {/* Verifier Notes Input (Only for pending review) */}
              {activeTab === 'pending' && permissions.canVerifySpecies && (
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    Reviewer Verification Notes / Monograph Audit Findings:
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Cross-checked against FishBase and original Hamilton (1822) description."
                    value={verifierNotes[item.id] || ''}
                    onChange={e => setVerifierNotes({ ...verifierNotes, [item.id]: e.target.value })}
                    className="form-input"
                  />
                </div>
              )}

              {/* Action Toolbar */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.85rem' }}>
                {permissions.canVerifySpecies && activeTab === 'pending' && (
                  <>
                    <button
                      onClick={() => handleVerify(item.id)}
                      className="btn btn-primary btn-sm"
                      style={{ gap: '0.35rem' }}
                    >
                      <Check size={14} />
                      <span>Approve & Verify</span>
                    </button>

                    <button
                      onClick={() => handleOpenReject(item)}
                      className="btn btn-secondary btn-sm"
                      style={{ gap: '0.35rem', color: '#ef4444', borderColor: 'rgba(239, 68, 68, 0.3)' }}
                    >
                      <X size={14} />
                      <span>Reject with Feedback</span>
                    </button>
                  </>
                )}

                {item.isVerified && permissions.canPublishSpecies && !item.isPublished && (
                  <button
                    onClick={() => publishSpecies(item.id)}
                    className="btn btn-primary btn-sm"
                    style={{ gap: '0.35rem' }}
                  >
                    <Eye size={13} />
                    <span>Publish to Public Catalog</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Rejection Modal */}
      {rejectionModalSpecies && (
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
                  Reject Review: {rejectionModalSpecies.scientificName}
                </h2>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                  Return record to author with curation feedback
                </div>
              </div>
              <button onClick={() => setRejectionModalSpecies(null)} className="btn-icon">
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleConfirmReject} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                  Rejection Reason / Specific Changes Required *
                </label>
                <textarea
                  rows={4}
                  required
                  value={rejectionReason}
                  onChange={e => setRejectionReason(e.target.value)}
                  className="form-textarea"
                  placeholder="e.g. Diagnostic traits do not distinguish this species from congeneric taxa. Please cite specific fin ray counts or primary publication reference."
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '0.5rem' }}>
                <button type="button" onClick={() => setRejectionModalSpecies(null)} className="btn btn-secondary">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" style={{ background: '#ef4444', borderColor: '#ef4444' }}>
                  Return to Draft with Feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
