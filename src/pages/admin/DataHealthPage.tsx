import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useLanguage } from '../../context/LanguageContext';
import type { DataHealthReport, DataHealthIssue } from '../../types/biodiversity';

export const DataHealthPage: React.FC = () => {
  const { runDataHealthCheck } = useBiodiversity();
  const { language } = useLanguage();
  const isBn = language === 'bn';

  // Local scan state
  const [report, setReport] = useState<DataHealthReport>(() => runDataHealthCheck());
  const [isScanning, setIsScanning] = useState(false);
  const [selectedSeverity, setSelectedSeverity] = useState<'all' | 'error' | 'warning' | 'info'>('all');
  const [selectedEntity, setSelectedEntity] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleRunScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      const newReport = runDataHealthCheck();
      setReport(newReport);
      setIsScanning(false);
    }, 400);
  };

  const filteredIssues = useMemo(() => {
    return report.issues.filter((issue: DataHealthIssue) => {
      if (selectedSeverity !== 'all' && issue.type !== selectedSeverity) return false;
      if (selectedEntity !== 'all' && issue.entity !== selectedEntity) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          issue.message.toLowerCase().includes(q) ||
          issue.entityName.toLowerCase().includes(q) ||
          issue.entityId.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [report, selectedSeverity, selectedEntity, searchQuery]);

  const infoCount = useMemo(() => {
    return report.issues.filter(i => i.type === 'info').length;
  }, [report]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return '#10b981'; // Green
    if (score >= 70) return '#f59e0b'; // Amber
    return '#ef4444'; // Red
  };

  const getActionLink = (issue: DataHealthIssue) => {
    switch (issue.entity) {
      case 'species':
        return `/admin/species?search=${encodeURIComponent(issue.entityName)}`;
      case 'taxon':
        return `/admin/taxonomy?search=${encodeURIComponent(issue.entityName)}`;
      case 'reference':
        return `/admin/references?search=${encodeURIComponent(issue.entityName)}`;
      case 'key':
        return `/admin/ident-keys?search=${encodeURIComponent(issue.entityName)}`;
      case 'media':
        return `/admin/media?search=${encodeURIComponent(issue.entityName)}`;
      default:
        return '/admin';
    }
  };

  const exportReportJson = () => {
    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `biota-data-health-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="admin-page-container">
      {/* Header */}
      <div className="admin-page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0 0 0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span>🩺</span>
            {isBn ? 'ডাটা স্বাস্থ্য ও বিশুদ্ধতা নিরীক্ষণ' : 'Data Health & Integrity Engine'}
          </h1>
          <p style={{ margin: 0, color: 'var(--text-muted, #94a3b8)', fontSize: '0.95rem' }}>
            {isBn
              ? 'প্ল্যাটফর্মের সমস্ত প্রজাতি, শ্রেণীবিন্যাস, রেফারেন্স, আইডেন্টিফিকেশন কি এবং মিডিয়া সম্পদের স্বয়ংক্রিয় স্বাস্থ্য পরীক্ষা।'
              : 'Automated diagnostic validation across all species, taxonomy tree, references, keys, and media assets.'}
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <button
            onClick={exportReportJson}
            className="btn btn-secondary"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <span>📥</span>
            {isBn ? 'রিপোর্ট ডাউনলোড' : 'Export JSON'}
          </button>
          <button
            onClick={handleRunScan}
            disabled={isScanning}
            className="btn btn-primary"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <span style={{ display: 'inline-block', animation: isScanning ? 'spin 1s linear infinite' : 'none' }}>🔄</span>
            {isScanning ? (isBn ? 'নিরীক্ষা চলছে...' : 'Scanning...') : (isBn ? 'পুনরায় স্ক্যান করুন' : 'Run Full Scan')}
          </button>
        </div>
      </div>

      {/* KPI Overview Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.25rem',
        marginBottom: '2rem'
      }}>
        {/* Health Score Card */}
        <div style={{
          background: 'var(--bg-surface, #1e293b)',
          border: '1px solid var(--border-color, #334155)',
          borderRadius: '12px',
          padding: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem'
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: `conic-gradient(${getScoreColor(report.healthScore)} ${report.healthScore * 3.6}deg, rgba(255,255,255,0.08) 0deg)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '6px'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: 'var(--bg-surface, #1e293b)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '1.1rem',
              color: getScoreColor(report.healthScore)
            }}>
              {report.healthScore}%
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted, #94a3b8)' }}>
              {isBn ? 'সিস্টেম স্বাস্থ্য স্কোর' : 'Health Score'}
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: 700, color: getScoreColor(report.healthScore) }}>
              {report.healthScore >= 90 ? (isBn ? 'চমৎকার' : 'Optimal') : report.healthScore >= 70 ? (isBn ? 'সতর্কতা' : 'Attention') : (isBn ? 'জরুরি' : 'Critical')}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted, #64748b)' }}>
              {isBn ? 'সর্বশেষ স্ক্যান:' : 'Last scan:'} {new Date(report.timestamp).toLocaleTimeString()}
            </div>
          </div>
        </div>

        {/* Diagnostic Suites */}
        <div style={{
          background: 'var(--bg-surface, #1e293b)',
          border: '1px solid var(--border-color, #334155)',
          borderRadius: '12px',
          padding: '1.5rem'
        }}>
          <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted, #94a3b8)', marginBottom: '0.25rem' }}>
            {isBn ? 'সম্পন্ন ডায়াগনস্টিক টেস্ট' : 'Diagnostic Suites'}
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#38bdf8' }}>
            {report.totalChecks}
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted, #64748b)' }}>
            {isBn ? '৬টি মূল ডাটাবেজ স্তরে পরীক্ষা' : '6 Core validation engines'}
          </div>
        </div>

        {/* Critical Errors */}
        <div style={{
          background: 'var(--bg-surface, #1e293b)',
          border: `1px solid ${report.errorsCount > 0 ? 'rgba(239, 68, 68, 0.4)' : 'var(--border-color, #334155)'}`,
          borderRadius: '12px',
          padding: '1.5rem'
        }}>
          <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted, #94a3b8)', marginBottom: '0.25rem' }}>
            {isBn ? 'গুরুত্বপূর্ণ ত্রুটি' : 'Critical Errors'}
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: report.errorsCount > 0 ? '#ef4444' : '#10b981' }}>
            {report.errorsCount}
          </div>
          <div style={{ fontSize: '0.8rem', color: report.errorsCount > 0 ? '#f87171' : 'var(--text-muted, #64748b)' }}>
            {report.errorsCount > 0 ? (isBn ? 'অবিলম্বে সমাধান প্রয়োজন' : 'Requires immediate fix') : (isBn ? 'কোনো গুরুতর ত্রুটি নেই' : 'Zero critical errors')}
          </div>
        </div>

        {/* Warnings */}
        <div style={{
          background: 'var(--bg-surface, #1e293b)',
          border: '1px solid var(--border-color, #334155)',
          borderRadius: '12px',
          padding: '1.5rem'
        }}>
          <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted, #94a3b8)', marginBottom: '0.25rem' }}>
            {isBn ? 'সতর্কতা' : 'Warnings'}
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: report.warningsCount > 0 ? '#f59e0b' : '#10b981' }}>
            {report.warningsCount}
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted, #64748b)' }}>
            {isBn ? 'অনুপস্থিত লিঙ্ক ও ডেটা পূর্ণতা' : 'Integrity & completeness notices'}
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div style={{
        background: 'var(--bg-surface, #1e293b)',
        border: '1px solid var(--border-color, #334155)',
        borderRadius: '12px',
        padding: '1.25rem',
        marginBottom: '1.5rem',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Severity filter buttons */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => setSelectedSeverity('all')}
            className={`btn ${selectedSeverity === 'all' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ fontSize: '0.85rem', padding: '0.4rem 0.85rem' }}
          >
            {isBn ? 'সকল ইস্যু' : 'All Issues'} ({report.issues.length})
          </button>
          <button
            onClick={() => setSelectedSeverity('error')}
            className={`btn ${selectedSeverity === 'error' ? 'btn-primary' : 'btn-secondary'}`}
            style={{
              fontSize: '0.85rem',
              padding: '0.4rem 0.85rem',
              borderColor: selectedSeverity === 'error' ? '#ef4444' : undefined,
              backgroundColor: selectedSeverity === 'error' ? '#ef4444' : undefined
            }}
          >
            {isBn ? 'ত্রুটি' : 'Errors'} ({report.errorsCount})
          </button>
          <button
            onClick={() => setSelectedSeverity('warning')}
            className={`btn ${selectedSeverity === 'warning' ? 'btn-primary' : 'btn-secondary'}`}
            style={{
              fontSize: '0.85rem',
              padding: '0.4rem 0.85rem',
              borderColor: selectedSeverity === 'warning' ? '#f59e0b' : undefined,
              backgroundColor: selectedSeverity === 'warning' ? '#f59e0b' : undefined
            }}
          >
            {isBn ? 'সতর্কতা' : 'Warnings'} ({report.warningsCount})
          </button>
          <button
            onClick={() => setSelectedSeverity('info')}
            className={`btn ${selectedSeverity === 'info' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ fontSize: '0.85rem', padding: '0.4rem 0.85rem' }}
          >
            {isBn ? 'তথ্য' : 'Info'} ({infoCount})
          </button>
        </div>

        {/* Entity filter dropdown & Search */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', flex: 1, justifyContent: 'flex-end' }}>
          <select
            value={selectedEntity}
            onChange={(e) => setSelectedEntity(e.target.value)}
            style={{
              background: 'var(--bg-main, #0f172a)',
              border: '1px solid var(--border-color, #334155)',
              borderRadius: '8px',
              padding: '0.45rem 0.85rem',
              color: 'var(--text-main, #f8fafc)',
              fontSize: '0.85rem'
            }}
          >
            <option value="all">{isBn ? 'সকল সত্ত্বা' : 'All Entities'}</option>
            <option value="species">{isBn ? 'প্রজাতি (Species)' : 'Species'}</option>
            <option value="taxon">{isBn ? 'শ্রেণীবিন্যাস (Taxon)' : 'Taxonomy'}</option>
            <option value="reference">{isBn ? 'রেফারেন্স (References)' : 'References'}</option>
            <option value="key">{isBn ? 'আইডেন্টিফিকেশন কি' : 'Identification Keys'}</option>
            <option value="media">{isBn ? 'মিডিয়া সম্পদ' : 'Media Assets'}</option>
          </select>

          <input
            type="text"
            placeholder={isBn ? 'ইস্যু খুঁজুন...' : 'Search issues...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              background: 'var(--bg-main, #0f172a)',
              border: '1px solid var(--border-color, #334155)',
              borderRadius: '8px',
              padding: '0.45rem 0.85rem',
              color: 'var(--text-main, #f8fafc)',
              fontSize: '0.85rem',
              minWidth: '200px'
            }}
          />
        </div>
      </div>

      {/* Issues List */}
      <div style={{
        background: 'var(--bg-surface, #1e293b)',
        border: '1px solid var(--border-color, #334155)',
        borderRadius: '12px',
        overflow: 'hidden'
      }}>
        <div style={{
          padding: '1rem 1.25rem',
          borderBottom: '1px solid var(--border-color, #334155)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h2 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0 }}>
            {isBn ? 'শনাক্তকৃত বিষয়সমূহ' : 'Detected Issues'} ({filteredIssues.length})
          </h2>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted, #94a3b8)' }}>
            {filteredIssues.length === 0 ? (isBn ? 'কোনো অমিল পাওয়া যায়নি' : 'Clean: No matching issues') : (isBn ? 'ক্লিক করে সংশ্লিষ্ট সেকশনে যান' : 'Click action to resolve in editor')}
          </span>
        </div>

        {filteredIssues.length === 0 ? (
          <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted, #94a3b8)' }}>
            <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '0.75rem' }}>🎉</span>
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#10b981' }}>{isBn ? 'সবকিছু স্বাভাবিক রয়েছে!' : 'All Checks Passed!'}</h3>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              {isBn ? 'বর্তমান ফিল্টারের অধীনে কোনো অখণ্ডতা সংক্রান্ত ত্রুটি পাওয়া যায়নি।' : 'No data integrity issues found under the current filter selection.'}
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {filteredIssues.map((issue: DataHealthIssue) => {
              const severityColor =
                issue.type === 'error' ? '#ef4444' :
                issue.type === 'warning' ? '#f59e0b' : '#38bdf8';
              const severityBg =
                issue.type === 'error' ? 'rgba(239, 68, 68, 0.1)' :
                issue.type === 'warning' ? 'rgba(245, 158, 11, 0.1)' : 'rgba(56, 189, 248, 0.1)';

              return (
                <div
                  key={issue.id}
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem 1.25rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                    gap: '1rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', flex: 1, minWidth: '280px' }}>
                    {/* Badge */}
                    <span style={{
                      padding: '0.25rem 0.6rem',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: severityColor,
                      backgroundColor: severityBg,
                      border: `1px solid ${severityColor}40`,
                      whiteSpace: 'nowrap'
                    }}>
                      {issue.type}
                    </span>

                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span style={{
                          fontSize: '0.75rem',
                          background: 'rgba(255, 255, 255, 0.08)',
                          padding: '0.15rem 0.5rem',
                          borderRadius: '4px',
                          color: 'var(--text-muted, #94a3b8)',
                          textTransform: 'capitalize'
                        }}>
                          {issue.entity}
                        </span>
                        <strong style={{ fontSize: '0.95rem', color: 'var(--text-main, #f8fafc)' }}>
                          {issue.entityName}
                        </strong>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted, #94a3b8)' }}>
                        {issue.message}
                      </div>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div>
                    <Link
                      to={getActionLink(issue)}
                      className="btn btn-secondary"
                      style={{
                        fontSize: '0.8rem',
                        padding: '0.35rem 0.75rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem'
                      }}
                    >
                      {isBn ? 'সংশোধন করুন' : 'Inspect / Fix'} ↗
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Diagnostic Suites Description */}
      <div style={{
        marginTop: '2rem',
        background: 'var(--bg-surface, #1e293b)',
        border: '1px solid var(--border-color, #334155)',
        borderRadius: '12px',
        padding: '1.5rem'
      }}>
        <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.1rem', fontWeight: 700 }}>
          {isBn ? 'সক্রিয় নিরীক্ষা প্রোটোকলসমূহ' : 'Active Diagnostic Protocol Specifications'}
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1rem'
        }}>
          <div style={{ padding: '0.75rem', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.03)' }}>
            <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '0.9rem', color: '#10b981' }}>1. Species Duplicate Binomial Scan</h4>
            <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted, #94a3b8)' }}>
              Ensures that every scientific binomial in the repository is unique. Prevents splitting or double-curation of species records.
            </p>
          </div>
          <div style={{ padding: '0.75rem', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.03)' }}>
            <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '0.9rem', color: '#10b981' }}>2. Taxonomy Tree Loop & Orphan Check</h4>
            <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted, #94a3b8)' }}>
              Validates that every taxon node connects to an existing parent node up to Kingdom/Life, preventing disconnected orphan branches.
            </p>
          </div>
          <div style={{ padding: '0.75rem', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.03)' }}>
            <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '0.9rem', color: '#10b981' }}>3. Literature Citation Cross-Check</h4>
            <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted, #94a3b8)' }}>
              Verifies all cited reference IDs across species monographs map directly to verified entries in the master bibliographic database.
            </p>
          </div>
          <div style={{ padding: '0.75rem', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.03)' }}>
            <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '0.9rem', color: '#10b981' }}>4. Verification & Publishing Gatekeeper</h4>
            <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted, #94a3b8)' }}>
              Flags any record that has isPublished = true without peer-review certification (isVerified = true), ensuring zero unvetted leaks.
            </p>
          </div>
          <div style={{ padding: '0.75rem', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.03)' }}>
            <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '0.9rem', color: '#10b981' }}>5. Dichotomous Key Structure Validator</h4>
            <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted, #94a3b8)' }}>
              Checks that diagnostic keys possess non-empty couplet sequences and that lead pointers resolve to valid next steps or terminal taxa.
            </p>
          </div>
          <div style={{ padding: '0.75rem', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.03)' }}>
            <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '0.9rem', color: '#10b981' }}>6. Media License & Attribution Governance</h4>
            <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted, #94a3b8)' }}>
              Scans all specimen photographs and illustrations for legal licensing tags (CC-BY, Public Domain) and valid provenance URLs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
