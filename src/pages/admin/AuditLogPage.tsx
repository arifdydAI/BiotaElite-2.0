// BiotaElite 2.0 Immutable Audit Log Viewer
import React, { useState, useMemo } from 'react';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useLanguage } from '../../context/LanguageContext';
import { Search, ShieldCheck, Download } from 'lucide-react';

export const AuditLogPage: React.FC = () => {
  const { auditLogs } = useBiodiversity();
  const { language } = useLanguage();
  const isBn = language === 'bn';

  const [filterAction, setFilterAction] = useState<string>('all');
  const [filterEntity, setFilterEntity] = useState<string>('all');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const filtered = useMemo(() => {
    return auditLogs.filter(log => {
      if (filterAction !== 'all' && log.action !== filterAction) return false;
      if (filterEntity !== 'all' && log.entity !== filterEntity) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        return (
          log.actorEmail.toLowerCase().includes(q) ||
          (log.entityName && log.entityName.toLowerCase().includes(q)) ||
          (log.entityId && log.entityId.toLowerCase().includes(q)) ||
          (log.details && log.details.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [auditLogs, filterAction, filterEntity, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));
  const paginatedLogs = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filtered.slice(start, start + itemsPerPage);
  }, [filtered, currentPage]);

  const handleExportCsv = () => {
    const headers = ['ID', 'Timestamp', 'Action', 'Entity', 'Entity ID', 'Entity Name', 'Actor Email', 'Actor Role', 'Details'];
    const rows = filtered.map(l => [
      l.id,
      l.timestamp,
      l.action,
      l.entity,
      `"${l.entityId}"`,
      `"${(l.entityName || '').replace(/"/g, '""')}"`,
      l.actorEmail,
      l.actorRole,
      `"${(l.details || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `biota-audit-trail-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="admin-page-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-emerald-light, #34d399)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
            <ShieldCheck size={16} />
            <span>{isBn ? 'প্রশাসনিক জবাবদিহিতা ও ট্রেসেবিলিটি' : 'Governance & Traceability'}</span>
          </div>

          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.25rem 0' }}>
            {isBn ? 'অপরিবর্তনীয় সিস্টেম অডিট ট্রেইল' : 'Immutable System Audit Trail'}
          </h1>

          <p style={{ color: 'var(--text-secondary, #94a3b8)', fontSize: '0.9rem', margin: 0 }}>
            {isBn
              ? 'প্ল্যাটফর্মে সম্পাদিত প্রতিটি প্রশাসনিক ক্রিয়াকলাপের কালানুক্রমিক ও অপরিবর্তনীয় রেকর্ড।'
              : 'Chronological record of all administrative operations: entity creation, content revisions, verification certifications, and role alterations.'}
          </p>
        </div>

        <button
          onClick={handleExportCsv}
          className="btn btn-secondary"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}
        >
          <Download size={15} />
          <span>{isBn ? 'CSV ডাউনলোড' : 'Export CSV'}</span>
        </button>
      </div>

      {/* Filters Bar */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ position: 'relative', width: '320px', minWidth: '240px' }}>
          <Search size={16} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted, #64748b)' }} />
          <input
            type="text"
            placeholder={isBn ? 'অপারেটর, সত্ত্বা বা বিবরণ দিয়ে খুঁজুন...' : 'Search by actor, entity, or note...'}
            value={search}
            onChange={e => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="form-input"
            style={{ paddingLeft: '2.3rem', width: '100%' }}
          />
        </div>

        {/* Action filter */}
        <select
          value={filterAction}
          onChange={e => {
            setFilterAction(e.target.value);
            setCurrentPage(1);
          }}
          className="form-select"
          style={{ width: 'auto' }}
        >
          <option value="all">{isBn ? 'সকল অ্যাকশন' : 'All Actions'}</option>
          <option value="create">{isBn ? 'সৃষ্টি (Create)' : 'Create'}</option>
          <option value="update">{isBn ? 'হালনাগাদ (Update)' : 'Update'}</option>
          <option value="verify">{isBn ? 'যাচাই (Verify)' : 'Verify'}</option>
          <option value="publish">{isBn ? 'প্রকাশ (Publish)' : 'Publish'}</option>
          <option value="unpublish">{isBn ? 'অপ্রকাশ (Unpublish)' : 'Unpublish'}</option>
          <option value="archive">{isBn ? 'আর্কাইভ (Archive)' : 'Archive'}</option>
          <option value="delete">{isBn ? 'মুছে ফেলা (Delete)' : 'Delete'}</option>
        </select>

        {/* Entity filter */}
        <select
          value={filterEntity}
          onChange={e => {
            setFilterEntity(e.target.value);
            setCurrentPage(1);
          }}
          className="form-select"
          style={{ width: 'auto' }}
        >
          <option value="all">{isBn ? 'সকল সত্ত্বা' : 'All Entities'}</option>
          <option value="species">{isBn ? 'প্রজাতি (Species)' : 'Species'}</option>
          <option value="taxon">{isBn ? 'শ্রেণীবিন্যাস (Taxon)' : 'Taxon'}</option>
          <option value="reference">{isBn ? 'রেফারেন্স (Reference)' : 'Reference'}</option>
          <option value="key">{isBn ? 'আইডেন্টিফিকেশন কি' : 'Identification Key'}</option>
          <option value="media">{isBn ? 'মিডিয়া সম্পদ' : 'Media'}</option>
          <option value="user">{isBn ? 'ব্যবহারকারী ও রোল' : 'User / RBAC'}</option>
          <option value="batch">{isBn ? 'ডাটা ইনজেশন ব্যাচ' : 'Ingestion Batch'}</option>
        </select>

        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted, #94a3b8)', marginLeft: 'auto' }}>
          {isBn ? `মোট ${filtered.length} টি অডিট এন্ট্রি` : `Total ${filtered.length} audit entries`}
        </span>
      </div>

      {/* Audit Table */}
      <div className="data-table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>{isBn ? 'সময়কাল' : 'Timestamp'}</th>
              <th>{isBn ? 'অ্যাকশন' : 'Action'}</th>
              <th>{isBn ? 'সত্ত্বা' : 'Entity'}</th>
              <th>{isBn ? 'লক্ষ্য নাম / আইডি' : 'Target Entity Name / ID'}</th>
              <th>{isBn ? 'অপারেটর' : 'Operator'}</th>
              <th>{isBn ? 'বিস্তারিত বিবরণ' : 'Audit Details'}</th>
            </tr>
          </thead>
          <tbody>
            {paginatedLogs.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted, #94a3b8)' }}>
                  {isBn ? 'কোনো অডিট রেকর্ড পাওয়া যায়নি।' : 'No audit records match the current filter criteria.'}
                </td>
              </tr>
            ) : (
              paginatedLogs.map(entry => (
                <tr key={entry.id}>
                  <td style={{ whiteSpace: 'nowrap', fontSize: '0.75rem', color: 'var(--text-muted, #94a3b8)' }}>
                    {new Date(entry.timestamp).toLocaleString()}
                  </td>
                  <td>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        padding: '0.15rem 0.45rem',
                        borderRadius: '3px',
                        background:
                          entry.action === 'publish' ? 'rgba(16, 185, 129, 0.15)' :
                          entry.action === 'verify' ? 'rgba(2, 132, 199, 0.15)' :
                          entry.action === 'delete' ? 'rgba(239, 68, 68, 0.15)' :
                          entry.action === 'archive' ? 'rgba(245, 158, 11, 0.15)' :
                          'rgba(255, 255, 255, 0.05)',
                        color:
                          entry.action === 'publish' ? '#34d399' :
                          entry.action === 'verify' ? '#38bdf8' :
                          entry.action === 'delete' ? '#f87171' :
                          entry.action === 'archive' ? '#fbbf24' :
                          '#ffffff',
                      }}
                    >
                      {entry.action}
                    </span>
                  </td>
                  <td style={{ textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 600 }}>
                    {entry.entity}
                  </td>
                  <td>
                    <div style={{ fontWeight: 600, color: '#ffffff' }}>
                      {entry.entityName || entry.entityId}
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted, #94a3b8)' }}>
                      ID: {entry.entityId}
                    </div>
                  </td>
                  <td>
                    <div style={{ color: 'var(--text-primary, #f8fafc)', fontSize: '0.8rem' }}>{entry.actorEmail}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted, #94a3b8)', textTransform: 'uppercase' }}>
                      Role: {entry.actorRole}
                    </div>
                  </td>
                  <td style={{ fontSize: '0.8rem', color: 'var(--text-secondary, #cbd5e1)' }}>
                    {entry.details || '—'}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem', marginTop: '1.5rem' }}>
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="btn btn-secondary"
            style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem' }}
          >
            ← {isBn ? 'পূর্ববর্তী' : 'Previous'}
          </button>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted, #94a3b8)' }}>
            {isBn ? `পৃষ্ঠা ${currentPage} / ${totalPages}` : `Page ${currentPage} of ${totalPages}`}
          </span>
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="btn btn-secondary"
            style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem' }}
          >
            {isBn ? 'পরবর্তী' : 'Next'} →
          </button>
        </div>
      )}
    </div>
  );
};
