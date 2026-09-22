// BiotaElite 2.0 User & RBAC Management
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import type { UserProfile, UserRole } from '../../types/auth';
import { Users, CheckCircle2 } from 'lucide-react';

export const UsersPage: React.FC = () => {
  const { role: activeOperatorRole } = useAuth();

  const [users, setUsers] = useState<UserProfile[]>([
    {
      uid: 'usr-admin-001',
      email: 'admin.lead@biotaelite.org',
      displayName: 'Lead Zoological Architect',
      role: 'super_admin',
      institution: 'BiotaElite Review Board',
      specialization: 'Systematics & Ichthyology',
      createdAt: '2026-09-01T00:00:00Z',
      lastLoginAt: '2026-09-12T08:00:00Z',
      isActive: true,
    },
    {
      uid: 'usr-rev-002',
      email: 'dr.anamika.ichthyo@du.ac.bd',
      displayName: 'Dr. Anamika Rahman',
      role: 'reviewer',
      institution: 'University of Dhaka, Dept. of Zoology',
      specialization: 'Freshwater Fishes of Bangladesh',
      createdAt: '2026-09-02T10:00:00Z',
      lastLoginAt: '2026-09-12T07:30:00Z',
      isActive: true,
    },
    {
      uid: 'usr-edit-003',
      email: 'kazi.taxonomist@marine-bd.org',
      displayName: 'Kazi Mahbub',
      role: 'editor',
      institution: 'Marine Biological Association of Bangladesh',
      specialization: 'Bay of Bengal Elasmobranchs',
      createdAt: '2026-09-03T11:00:00Z',
      lastLoginAt: '2026-09-11T14:00:00Z',
      isActive: true,
    },
    {
      uid: 'usr-data-004',
      email: 'nomenclature.curator@biotaelite.org',
      displayName: 'Data Curation Officer',
      role: 'data_manager',
      institution: 'BiotaElite Foundation',
      specialization: 'ICZN Nomenclatural Registry',
      createdAt: '2026-09-04T09:00:00Z',
      lastLoginAt: '2026-09-10T16:00:00Z',
      isActive: true,
    }
  ]);

  const handleRoleChange = (uid: string, newRole: UserRole) => {
    setUsers(prev => prev.map(u => u.uid === uid ? { ...u, role: newRole } : u));
  };

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-emerald-light)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
          <Users size={16} />
          <span>Role-Based Access Control (RBAC)</span>
        </div>

        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>
          User Accounts & Privilege Governance
        </h1>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Manage authenticated scientific operators and assign roles with granular permissions (Super Admin, Admin, Reviewer, Editor, Data Manager).
        </p>
      </div>

      {/* Users Table */}
      <div className="data-table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Operator</th>
              <th>Institution & Specialization</th>
              <th>Assigned Role</th>
              <th>Status</th>
              <th>Role Privilege Modification</th>
            </tr>
          </thead>
          <tbody>
            {users.map(usr => (
              <tr key={usr.uid}>
                <td>
                  <div style={{ fontWeight: 600, color: '#ffffff' }}>{usr.displayName}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{usr.email}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>UID: {usr.uid}</div>
                </td>
                <td>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{usr.institution}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-marine-light)' }}>{usr.specialization}</div>
                </td>
                <td>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '3px',
                      background:
                        usr.role === 'super_admin' ? 'rgba(168, 85, 247, 0.15)' :
                        usr.role === 'reviewer' ? 'rgba(2, 132, 199, 0.15)' :
                        usr.role === 'editor' ? 'rgba(16, 185, 129, 0.15)' :
                        'rgba(245, 158, 11, 0.15)',
                      color:
                        usr.role === 'super_admin' ? '#c084fc' :
                        usr.role === 'reviewer' ? '#38bdf8' :
                        usr.role === 'editor' ? '#34d399' :
                        '#fbbf24',
                    }}
                  >
                    {usr.role.replace('_', ' ')}
                  </span>
                </td>
                <td>
                  <span style={{ color: 'var(--accent-emerald-light)', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <CheckCircle2 size={13} /> Active
                  </span>
                </td>
                <td>
                  {activeOperatorRole === 'super_admin' ? (
                    <select
                      value={usr.role}
                      onChange={e => handleRoleChange(usr.uid, e.target.value as UserRole)}
                      className="form-select"
                      style={{ fontSize: '0.8rem', padding: '0.3rem 0.5rem', width: 'auto' }}
                    >
                      <option value="super_admin">Super Admin</option>
                      <option value="admin">Admin</option>
                      <option value="reviewer">Reviewer</option>
                      <option value="editor">Editor</option>
                      <option value="data_manager">Data Manager</option>
                      <option value="public_user">Public User</option>
                    </select>
                  ) : (
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      Requires Super Admin
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
