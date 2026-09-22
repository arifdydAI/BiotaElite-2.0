// BiotaElite 2.0 Admin Dashboard
import React from 'react';
import { Link } from 'react-router-dom';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useAuth } from '../../context/AuthContext';
import { 
  Layers, 
  CheckSquare, 
  Library, 
  PlusCircle, 
  CheckCircle2, 
  Clock, 
  ArrowRight
} from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const { species, taxa, references, auditLogs } = useBiodiversity();
  const { role, permissions } = useAuth();

  const publishedCount = species.filter(s => s.lifecycleStatus === 'published').length;
  const reviewCount = species.filter(s => s.lifecycleStatus === 'under_review').length;

  return (
    <div>
      {/* Title */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
          <span
            style={{
              padding: '0.2rem 0.6rem',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(16, 185, 129, 0.15)',
              color: 'var(--accent-emerald-light)',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
            }}
          >
            Role: {role.replace('_', ' ')}
          </span>
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>
          Biodiversity Governance Dashboard
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Overview of zoological catalog lifecycle, peer-review verification queues, and audit trails.
        </p>
      </div>

      {/* KPI Metrics */}
      <div className="grid-cols-4" style={{ marginBottom: '2rem' }}>
        <div className="card" style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Published Species</span>
            <CheckCircle2 size={18} style={{ color: '#10b981' }} />
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff' }}>{publishedCount}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--accent-emerald-light)', marginTop: '0.25rem' }}>
            Active on Public Portal
          </div>
        </div>

        <div className="card" style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Pending Peer-Review</span>
            <Clock size={18} style={{ color: '#f59e0b' }} />
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#f59e0b' }}>{reviewCount}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            Requires verification
          </div>
        </div>

        <div className="card" style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Taxonomic Nodes</span>
            <Layers size={18} style={{ color: '#0ea5e9' }} />
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff' }}>{taxa.length}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            Kingdom to Genus
          </div>
        </div>

        <div className="card" style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Citations Database</span>
            <Library size={18} style={{ color: '#a855f7' }} />
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff' }}>{references.length}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            Primary Literature & DOIs
          </div>
        </div>
      </div>

      {/* Quick Actions & Audit Stream */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        {/* Quick Operations */}
        <div className="card" style={{ padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem' }}>
            Operational Actions
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {permissions.canCreateSpecies && (
              <Link
                to="/admin/species"
                className="btn btn-primary"
                style={{ justifyContent: 'space-between' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <PlusCircle size={16} />
                  <span>Create New Species Record</span>
                </div>
                <ArrowRight size={15} />
              </Link>
            )}

            <Link
              to="/admin/reviews"
              className="btn btn-secondary"
              style={{ justifyContent: 'space-between' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckSquare size={16} style={{ color: 'var(--accent-marine-light)' }} />
                <span>Verification Review Queue ({reviewCount})</span>
              </div>
              <ArrowRight size={15} />
            </Link>

            <Link
              to="/admin/taxonomy"
              className="btn btn-secondary"
              style={{ justifyContent: 'space-between' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Layers size={16} style={{ color: '#c084fc' }} />
                <span>Manage Taxonomic Backbone</span>
              </div>
              <ArrowRight size={15} />
            </Link>

            <Link
              to="/admin/references"
              className="btn btn-secondary"
              style={{ justifyContent: 'space-between' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Library size={16} style={{ color: '#fbbf24' }} />
                <span>Manage Bibliographic Sources</span>
              </div>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* Real-time Audit Trail Snapshot */}
        <div className="card" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff' }}>
              Recent Audit Log Stream
            </h3>
            <Link to="/admin/audit-logs" style={{ fontSize: '0.8rem', color: 'var(--accent-emerald-light)', textDecoration: 'none' }}>
              View All ({auditLogs.length})
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {auditLogs.slice(0, 4).map(log => (
              <div
                key={log.id}
                style={{
                  padding: '0.6rem 0.75rem',
                  background: 'var(--bg-surface)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.8rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
                  <span style={{ fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent-emerald-light)', fontSize: '0.7rem' }}>
                    {log.action} • {log.entity}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>
                    {new Date(log.timestamp).toLocaleTimeString()}
                  </span>
                </div>
                <div style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                  {log.entityName || log.entityId}
                </div>
                {log.details && (
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '0.2rem' }}>
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
