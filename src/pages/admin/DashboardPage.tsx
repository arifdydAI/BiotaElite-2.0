// BiotaElite 2.0 Biodiversity Governance & Executive Dashboard
// Phase D: Real-time Zoological Curation Metrics, Data Health & Governance Control
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Layers, 
  CheckSquare, 
  Library, 
  PlusCircle, 
  Clock, 
  ArrowRight,
  Fish,
  MapPin,
  Image,
  Key,
  Tag,
  Upload,
  Activity,
  ShieldCheck,
  History
} from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const { species, taxa, references, identKeys, auditLogs, runDataHealthCheck } = useBiodiversity();
  const { role, permissions } = useAuth();
  const { t, language } = useLanguage();

  const metrics = useMemo(() => {
    const totalSpecies = species.length;
    const publishedCount = species.filter(s => s.lifecycleStatus === 'published' || s.isPublished).length;
    const reviewCount = species.filter(s => s.lifecycleStatus === 'under_review').length;
    const draftCount = species.filter(s => s.lifecycleStatus === 'draft').length;
    const bdCount = species.filter(s => s.bangladeshOccurrence.present).length;
    const globalCount = totalSpecies - bdCount;
    
    let mediaCount = 0;
    let synonymCount = 0;
    for (const sp of species) {
      if (sp.media && Array.isArray(sp.media)) mediaCount += sp.media.length;
      if (sp.synonyms && Array.isArray(sp.synonyms)) synonymCount += sp.synonyms.length;
    }

    const fishOrdersCount = 73; // CalAcademy canonical living fish orders baseline
    const healthReport = runDataHealthCheck();

    return {
      totalSpecies,
      publishedCount,
      reviewCount,
      draftCount,
      bdCount,
      globalCount,
      mediaCount,
      synonymCount,
      taxonomyNodes: taxa.length,
      fishOrdersCount,
      identKeysCount: identKeys.length,
      referencesCount: references.length,
      healthReport
    };
  }, [species, taxa, references, identKeys, runDataHealthCheck]);

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      {/* Title & Role Header */}
      <div style={{ marginBottom: '1.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
            <span
              style={{
                padding: '0.2rem 0.65rem',
                borderRadius: '4px',
                background: 'rgba(16, 185, 129, 0.15)',
                color: 'var(--accent-emerald-light, #34d399)',
                fontSize: '0.72rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                border: '1px solid rgba(16, 185, 129, 0.25)'
              }}
            >
              {t('admin.roleBadge', 'Role')}: {role.replace('_', ' ')}
            </span>
            <span
              style={{
                padding: '0.2rem 0.65rem',
                borderRadius: '4px',
                background: 'rgba(56, 189, 248, 0.15)',
                color: '#38bdf8',
                fontSize: '0.72rem',
                fontWeight: 700,
                border: '1px solid rgba(56, 189, 248, 0.25)'
              }}
            >
              {language === 'bn' ? 'সিস্টেম স্ট্যাটাস: স্বাভাবিক' : 'System: Operational'}
            </span>
          </div>
          <h1 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', margin: 0 }}>
            {language === 'bn' ? 'জীববৈচিত্র্য প্রশাসন ড্যাশবোর্ড' : 'Biodiversity Governance Dashboard'}
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.35rem', marginBottom: 0 }}>
            {language === 'bn' 
              ? 'প্রাণিবিজ্ঞান ক্যাটালগ লাইফসাইকেল, পিয়ার-রিভিউ সারি, বাস্তুতান্ত্রিক অখণ্ডতা ও অডিট ট্রেইল।'
              : 'Real-time overview of zoological monograph lifecycle, peer-review queues, taxonomy, and audit trails.'}
          </p>
        </div>

        {/* Quick Health Indicator Banner */}
        <div 
          style={{ 
            background: 'var(--bg-surface)', 
            border: '1px solid var(--border-subtle)', 
            borderRadius: 'var(--radius-md)', 
            padding: '0.75rem 1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: metrics.healthReport.healthScore >= 90 ? 'rgba(16, 185, 129, 0.15)' : 'rgba(245, 158, 11, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ShieldCheck size={22} style={{ color: metrics.healthReport.healthScore >= 90 ? '#10b981' : '#f59e0b' }} />
          </div>
          <div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
              {t('admin.metrics.healthScore', 'Data Health Score')}
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.1 }}>
              {metrics.healthReport.healthScore}%
            </div>
          </div>
          <Link to="/admin/data-health" className="btn btn-secondary btn-sm" style={{ fontSize: '0.75rem', padding: '0.3rem 0.6rem' }}>
            {language === 'bn' ? 'বিস্তারিত' : 'Inspect'}
          </Link>
        </div>
      </div>

      {/* Primary KPI Grid (4 Columns) */}
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', 
          gap: '1rem', 
          marginBottom: '1.75rem' 
        }}
      >
        <div className="card" style={{ padding: '1.15rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
              {t('admin.metrics.totalSpecies', 'Total Species')}
            </span>
            <Fish size={18} style={{ color: '#0ea5e9' }} />
          </div>
          <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ffffff' }}>{metrics.totalSpecies}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--accent-emerald-light)', marginTop: '0.2rem' }}>
            {metrics.publishedCount} {language === 'bn' ? 'প্রকাশিত' : 'Published'} • {metrics.draftCount} {language === 'bn' ? 'খসড়া' : 'Drafts'}
          </div>
        </div>

        <div className="card" style={{ padding: '1.15rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
              {t('admin.metrics.pendingReview', 'Pending Review')}
            </span>
            <Clock size={18} style={{ color: '#f59e0b' }} />
          </div>
          <div style={{ fontSize: '1.85rem', fontWeight: 800, color: metrics.reviewCount > 0 ? '#f59e0b' : '#ffffff' }}>
            {metrics.reviewCount}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
            {language === 'bn' ? 'বিশেষজ্ঞ যাচাই প্রয়োজন' : 'Requires verification sign-off'}
          </div>
        </div>

        <div className="card" style={{ padding: '1.15rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
              {t('admin.metrics.bdSpecies', 'Bangladesh Taxa')}
            </span>
            <MapPin size={18} style={{ color: '#10b981' }} />
          </div>
          <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ffffff' }}>{metrics.bdCount}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
            {language === 'bn' ? '৪টি বাস্তুতন্ত্র ও বঙ্গোপসাগর' : 'Territorial, haor, coastal & marine'}
          </div>
        </div>

        <div className="card" style={{ padding: '1.15rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
              {t('admin.metrics.globalSpecies', 'Global Reference')}
            </span>
            <Layers size={18} style={{ color: '#a855f7' }} />
          </div>
          <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ffffff' }}>{metrics.globalCount}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
            {language === 'bn' ? 'বিশ্বকোষীয় প্রাণিবিজ্ঞান পরিধি' : 'Global zoological framework'}
          </div>
        </div>
      </div>

      {/* Secondary Zoological Counts Row (6 Mini Cards) */}
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', 
          gap: '0.85rem', 
          marginBottom: '2rem' 
        }}
      >
        <div className="card" style={{ padding: '0.9rem 1rem' }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Layers size={14} style={{ color: '#38bdf8' }} />
            <span>{t('admin.metrics.taxonomyNodes', 'Taxa Nodes')}</span>
          </div>
          <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginTop: '0.2rem' }}>{metrics.taxonomyNodes}</div>
        </div>

        <div className="card" style={{ padding: '0.9rem 1rem' }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Fish size={14} style={{ color: '#34d399' }} />
            <span>{t('admin.metrics.fishOrders', 'Fish Orders')}</span>
          </div>
          <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginTop: '0.2rem' }}>{metrics.fishOrdersCount}</div>
        </div>

        <div className="card" style={{ padding: '0.9rem 1rem' }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Key size={14} style={{ color: '#fbbf24' }} />
            <span>{t('admin.metrics.identKeys', 'Keys')}</span>
          </div>
          <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginTop: '0.2rem' }}>{metrics.identKeysCount}</div>
        </div>

        <div className="card" style={{ padding: '0.9rem 1rem' }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Image size={14} style={{ color: '#ec4899' }} />
            <span>{t('admin.metrics.verifiedPhotos', 'Verified Media')}</span>
          </div>
          <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginTop: '0.2rem' }}>{metrics.mediaCount}</div>
        </div>

        <div className="card" style={{ padding: '0.9rem 1rem' }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Tag size={14} style={{ color: '#c084fc' }} />
            <span>{t('admin.metrics.synonyms', 'Synonyms')}</span>
          </div>
          <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginTop: '0.2rem' }}>{metrics.synonymCount}</div>
        </div>

        <div className="card" style={{ padding: '0.9rem 1rem' }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Library size={14} style={{ color: '#f97316' }} />
            <span>{t('admin.metrics.references', 'References')}</span>
          </div>
          <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginTop: '0.2rem' }}>{metrics.referencesCount}</div>
        </div>
      </div>

      {/* Operations & Real-Time Audit Log Stream */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {/* Quick Operations Panel */}
        <div className="card" style={{ padding: '1.35rem' }}>
          <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Activity size={18} style={{ color: 'var(--accent-marine-light)' }} />
            <span>{t('admin.metrics.quickActions', 'Curation Operations')}</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {permissions.canCreateSpecies && (
              <Link
                to="/admin/species"
                className="btn btn-primary"
                style={{ justifyContent: 'space-between', padding: '0.65rem 1rem' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <PlusCircle size={16} />
                  <span>{t('admin.actions.addNewSpecies', 'Add New Species')}</span>
                </div>
                <ArrowRight size={15} />
              </Link>
            )}

            <Link
              to="/admin/reviews"
              className="btn btn-secondary"
              style={{ justifyContent: 'space-between', padding: '0.65rem 1rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckSquare size={16} style={{ color: '#f59e0b' }} />
                <span>{t('admin.nav.reviewQueue', 'Review Queue')}</span>
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b', padding: '0.1rem 0.5rem', borderRadius: '10px' }}>
                {metrics.reviewCount}
              </span>
            </Link>

            <Link
              to="/admin/bangladesh"
              className="btn btn-secondary"
              style={{ justifyContent: 'space-between', padding: '0.65rem 1rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <MapPin size={16} style={{ color: '#10b981' }} />
                <span>{t('admin.nav.bangladesh', 'Bangladesh Fauna')}</span>
              </div>
              <ArrowRight size={15} />
            </Link>

            <Link
              to="/admin/taxonomy"
              className="btn btn-secondary"
              style={{ justifyContent: 'space-between', padding: '0.65rem 1rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Layers size={16} style={{ color: '#38bdf8' }} />
                <span>{t('admin.nav.taxonomy', 'Taxonomy Tree')}</span>
              </div>
              <ArrowRight size={15} />
            </Link>

            <Link
              to="/admin/batch-import"
              className="btn btn-secondary"
              style={{ justifyContent: 'space-between', padding: '0.65rem 1rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Upload size={16} style={{ color: '#c084fc' }} />
                <span>{t('admin.nav.batchImport', 'Batch Data Ingestion')}</span>
              </div>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* Audit Stream Snapshot */}
        <div className="card" style={{ padding: '1.35rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
              <History size={18} style={{ color: '#a855f7' }} />
              <span>{t('admin.metrics.recentActivity', 'Recent Audit Trail')}</span>
            </h2>
            <Link to="/admin/audit-logs" style={{ fontSize: '0.78rem', color: 'var(--accent-emerald-light)', textDecoration: 'none', fontWeight: 600 }}>
              {language === 'bn' ? `সকল দেখুন (${auditLogs.length})` : `View All (${auditLogs.length})`}
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {auditLogs.slice(0, 5).map(log => (
              <div
                key={log.id}
                style={{
                  padding: '0.6rem 0.8rem',
                  background: 'rgba(0, 0, 0, 0.2)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.8rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
                  <span style={{ fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent-emerald-light)', fontSize: '0.68rem', letterSpacing: '0.04em' }}>
                    {log.action} • {log.entity}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>
                    {new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                <div style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.82rem' }}>
                  {log.entityName || log.entityId}
                </div>
                {log.details && (
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '0.2rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {log.details}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
