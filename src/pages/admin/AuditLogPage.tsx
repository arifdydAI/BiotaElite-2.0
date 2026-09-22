// BiotaElite 2.0 Immutable Audit Log Viewer
import React, { useState } from 'react';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { Search, ShieldCheck } from 'lucide-react';

export const AuditLogPage: React.FC = () => {
  const { auditLogs } = useBiodiversity();
  const [filterAction, setFilterAction] = useState<string>('all');
  const [search, setSearch] = useState('');

  const filtered = auditLogs.filter(log => {
    if (filterAction !== 'all' && log.action !== filterAction) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      return (
        log.actorEmail.toLowerCase().includes(q) ||
        (log.entityName && log.entityName.toLowerCase().includes(q)) ||
        (log.details && log.details.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div>
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-emerald-light)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
          <ShieldCheck size={16} />
          <span>Governance & Traceability</span>
        </div>

        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>
          Immutable System Audit Trail
        </h1>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          Chronological record of all administrative operations: entity creation, content revisions, verification certifications, and role alterations.
        </p>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ position: 'relative', width: '320px' }}>
          <Search size={16} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Search by actor, entity, or note..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="form-input"
            style={{ paddingLeft: '2.3rem' }}
          />
        </div>

        <select
          value={filterAction}
          onChange={e => setFilterAction(e.target.value)}
          className="form-select"
          style={{ width: 'auto' }}
        >
          <option value="all">All Actions</option>
          <option value="create">Create</option>
          <option value="update">Update</option>
          <option value="verify">Verify</option>
          <option value="publish">Publish</option>
          <option value="unpublish">Unpublish</option>
          <option value="archive">Archive</option>
          <option value="delete">Delete</option>
        </select>
      </div>

      {/* Audit Table */}
      <div className="data-table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Action</th>
              <th>Entity</th>
              <th>Target Entity Name / ID</th>
              <th>Operator</th>
              <th>Audit Details</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(entry => (
              <tr key={entry.id}>
                <td style={{ whiteSpace: 'nowrap', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
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
                        'rgba(255, 255, 255, 0.05)',
                      color:
                        entry.action === 'publish' ? '#34d399' :
                        entry.action === 'verify' ? '#38bdf8' :
                        entry.action === 'delete' ? '#f87171' :
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
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                    ID: {entry.entityId}
                  </div>
                </td>
                <td>
                  <div style={{ color: 'var(--text-primary)', fontSize: '0.8rem' }}>{entry.actorEmail}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Role: {entry.actorRole}
                  </div>
                </td>
                <td style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  {entry.details || '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
