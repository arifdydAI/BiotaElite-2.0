// BiotaElite 2.0 User & RBAC Management
import React, { useState, useMemo } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useLanguage } from '../../context/LanguageContext';
import type { UserProfile, UserRole } from '../../types/auth';
import { Users, CheckCircle2, XCircle, UserPlus, Shield, Search } from 'lucide-react';

export const UsersPage: React.FC = () => {
  const { role: activeOperatorRole } = useAuth();
  const { users, addUser, updateUserRole, toggleUserActive } = useBiodiversity();
  const { language } = useLanguage();
  const isBn = language === 'bn';

  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const [showAddModal, setShowAddModal] = useState(false);

  // New user form state
  const [newEmail, setNewEmail] = useState('');
  const [newName, setNewName] = useState('');
  const [newRole, setNewRole] = useState<UserRole>('editor');
  const [newInstitution, setNewInstitution] = useState('');
  const [newSpecialization, setNewSpecialization] = useState('');
  const [formError, setFormError] = useState('');

  const filteredUsers = useMemo(() => {
    return users.filter(usr => {
      if (roleFilter !== 'all' && usr.role !== roleFilter) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        return (
          usr.displayName.toLowerCase().includes(q) ||
          usr.email.toLowerCase().includes(q) ||
          (usr.institution && usr.institution.toLowerCase().includes(q)) ||
          (usr.specialization && usr.specialization.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [users, roleFilter, search]);

  const handleCreateUser = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    if (!newEmail.trim() || !newName.trim()) {
      setFormError(isBn ? 'ইমেইল ও পূর্ণ নাম আবশ্যক' : 'Email and display name are required');
      return;
    }
    if (users.some(u => u.email.toLowerCase() === newEmail.trim().toLowerCase())) {
      setFormError(isBn ? 'এই ইমেইল ইতোমধ্যে নিবন্ধিত রয়েছে' : 'A user with this email already exists');
      return;
    }

    const newUser: UserProfile = {
      uid: `usr-${Date.now().toString(36)}`,
      email: newEmail.trim(),
      displayName: newName.trim(),
      role: newRole,
      institution: newInstitution.trim() || 'Independent Researcher',
      specialization: newSpecialization.trim() || 'General Biodiversity',
      createdAt: new Date().toISOString(),
      lastLoginAt: new Date().toISOString(),
      isActive: true,
    };

    addUser(newUser);
    setShowAddModal(false);
    setNewEmail('');
    setNewName('');
    setNewRole('editor');
    setNewInstitution('');
    setNewSpecialization('');
  };

  const getRoleBadgeStyle = (role: UserRole) => {
    switch (role) {
      case 'super_admin':
        return { bg: 'rgba(168, 85, 247, 0.15)', text: '#c084fc', border: 'rgba(168, 85, 247, 0.3)' };
      case 'admin':
        return { bg: 'rgba(239, 68, 68, 0.15)', text: '#f87171', border: 'rgba(239, 68, 68, 0.3)' };
      case 'reviewer':
        return { bg: 'rgba(2, 132, 199, 0.15)', text: '#38bdf8', border: 'rgba(2, 132, 199, 0.3)' };
      case 'editor':
        return { bg: 'rgba(16, 185, 129, 0.15)', text: '#34d399', border: 'rgba(16, 185, 129, 0.3)' };
      case 'data_manager':
        return { bg: 'rgba(245, 158, 11, 0.15)', text: '#fbbf24', border: 'rgba(245, 158, 11, 0.3)' };
      default:
        return { bg: 'rgba(255, 255, 255, 0.08)', text: '#94a3b8', border: 'rgba(255, 255, 255, 0.15)' };
    }
  };

  return (
    <div className="admin-page-container">
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-emerald-light, #34d399)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
            <Users size={16} />
            <span>Role-Based Access Control (RBAC)</span>
          </div>

          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.25rem 0' }}>
            {isBn ? 'ইউজার একাউন্ট ও প্রিভিলেজ ব্যবস্থাপনা' : 'User Accounts & Privilege Governance'}
          </h1>

          <p style={{ color: 'var(--text-secondary, #94a3b8)', fontSize: '0.95rem', margin: 0 }}>
            {isBn
              ? 'বৈজ্ঞানিক অপারেটরদের অনুমোদন, ভূমিকা বরাদ্দকরণ ও দানাদার অনুমতি পরিচালনা।'
              : 'Manage authenticated scientific operators and assign roles with granular permissions (Super Admin, Admin, Reviewer, Editor, Data Manager).'}
          </p>
        </div>

        {activeOperatorRole === 'super_admin' && (
          <button
            onClick={() => setShowAddModal(true)}
            className="btn btn-primary"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}
          >
            <UserPlus size={16} />
            <span>{isBn ? 'নতুন অপারেটর যোগ করুন' : 'Add Scientific Operator'}</span>
          </button>
        )}
      </div>

      {/* Filters & Search */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ position: 'relative', width: '320px', minWidth: '240px' }}>
          <Search size={16} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted, #64748b)' }} />
          <input
            type="text"
            placeholder={isBn ? 'নাম, ইমেইল বা প্রতিষ্ঠান দিয়ে খুঁজুন...' : 'Search by name, email, or institution...'}
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="form-input"
            style={{ paddingLeft: '2.3rem', width: '100%' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <select
            value={roleFilter}
            onChange={e => setRoleFilter(e.target.value)}
            className="form-select"
            style={{ width: 'auto' }}
          >
            <option value="all">{isBn ? 'সকল ভূমিকা' : 'All Roles'}</option>
            <option value="super_admin">Super Admin</option>
            <option value="admin">Admin</option>
            <option value="reviewer">Reviewer</option>
            <option value="editor">Editor</option>
            <option value="data_manager">Data Manager</option>
          </select>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted, #94a3b8)' }}>
            ({filteredUsers.length} {isBn ? 'জন অপারেটর' : 'operators'})
          </span>
        </div>
      </div>

      {/* Users Table */}
      <div className="data-table-container" style={{ marginBottom: '2.5rem' }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>{isBn ? 'অপারেটর' : 'Operator'}</th>
              <th>{isBn ? 'প্রতিষ্ঠান ও বিশেষত্ব' : 'Institution & Specialization'}</th>
              <th>{isBn ? 'বর্তমান ভূমিকা' : 'Assigned Role'}</th>
              <th>{isBn ? 'স্ট্যাটাস' : 'Status'}</th>
              <th>{isBn ? 'ভূমিকা হালনাগাদ' : 'Role Privilege Modification'}</th>
              <th>{isBn ? 'অ্যাকাউন্ট অ্যাকশন' : 'Action'}</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(usr => {
              const badge = getRoleBadgeStyle(usr.role);
              return (
                <tr key={usr.uid}>
                  <td>
                    <div style={{ fontWeight: 600, color: '#ffffff' }}>{usr.displayName}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted, #94a3b8)' }}>{usr.email}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted, #64748b)' }}>UID: {usr.uid}</div>
                  </td>
                  <td>
                    <div style={{ color: 'var(--text-secondary, #cbd5e1)', fontSize: '0.85rem' }}>{usr.institution || '—'}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--accent-marine-light, #38bdf8)' }}>{usr.specialization || 'General'}</div>
                  </td>
                  <td>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        background: badge.bg,
                        color: badge.text,
                        border: `1px solid ${badge.border}`,
                        display: 'inline-block'
                      }}
                    >
                      {usr.role.replace('_', ' ')}
                    </span>
                  </td>
                  <td>
                    {usr.isActive ? (
                      <span style={{ color: '#34d399', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 600 }}>
                        <CheckCircle2 size={14} /> {isBn ? 'সক্রিয়' : 'Active'}
                      </span>
                    ) : (
                      <span style={{ color: '#f87171', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 600 }}>
                        <XCircle size={14} /> {isBn ? 'স্থগিত' : 'Suspended'}
                      </span>
                    )}
                  </td>
                  <td>
                    {activeOperatorRole === 'super_admin' ? (
                      <select
                        value={usr.role}
                        onChange={e => updateUserRole(usr.uid, e.target.value as UserRole)}
                        className="form-select"
                        style={{ fontSize: '0.8rem', padding: '0.3rem 0.5rem', width: 'auto' }}
                      >
                        <option value="super_admin">Super Admin</option>
                        <option value="admin">Admin</option>
                        <option value="reviewer">Reviewer</option>
                        <option value="editor">Editor</option>
                        <option value="data_manager">Data Manager</option>
                      </select>
                    ) : (
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted, #64748b)' }}>
                        {isBn ? 'শুধুমাত্র সুপার এডমিন' : 'Requires Super Admin'}
                      </span>
                    )}
                  </td>
                  <td>
                    {activeOperatorRole === 'super_admin' ? (
                      <button
                        onClick={() => toggleUserActive(usr.uid)}
                        className="btn btn-secondary"
                        style={{
                          fontSize: '0.75rem',
                          padding: '0.25rem 0.6rem',
                          color: usr.isActive ? '#f87171' : '#34d399',
                          borderColor: usr.isActive ? 'rgba(239, 68, 68, 0.3)' : 'rgba(16, 185, 129, 0.3)'
                        }}
                      >
                        {usr.isActive ? (isBn ? 'স্থগিত করুন' : 'Suspend') : (isBn ? 'সক্রিয় করুন' : 'Activate')}
                      </button>
                    ) : (
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted, #64748b)' }}>—</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* RBAC Privilege Matrix Reference */}
      <div style={{
        background: 'var(--bg-surface, #1e293b)',
        border: '1px solid var(--border-color, #334155)',
        borderRadius: '12px',
        padding: '1.5rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <Shield size={18} style={{ color: '#10b981' }} />
          <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700 }}>
            {isBn ? 'ভূমিকাভিত্তিক অনুমতি ম্যাট্রিক্স (RBAC Matrix)' : 'Role-Based Access Control Privilege Matrix'}
          </h3>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table className="data-table" style={{ fontSize: '0.8rem' }}>
            <thead>
              <tr>
                <th>{isBn ? 'অনুমতি ক্ষমতা' : 'Platform Capability'}</th>
                <th style={{ textAlign: 'center' }}>Super Admin</th>
                <th style={{ textAlign: 'center' }}>Admin</th>
                <th style={{ textAlign: 'center' }}>Reviewer</th>
                <th style={{ textAlign: 'center' }}>Editor</th>
                <th style={{ textAlign: 'center' }}>Data Manager</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Species Creation & Monograph Drafts</td>
                <td style={{ textAlign: 'center', color: '#34d399' }}>✓</td>
                <td style={{ textAlign: 'center', color: '#34d399' }}>✓</td>
                <td style={{ textAlign: 'center', color: '#34d399' }}>✓</td>
                <td style={{ textAlign: 'center', color: '#34d399' }}>✓</td>
                <td style={{ textAlign: 'center', color: '#34d399' }}>✓</td>
              </tr>
              <tr>
                <td>Taxonomy Tree Hierarchy Edits</td>
                <td style={{ textAlign: 'center', color: '#34d399' }}>✓</td>
                <td style={{ textAlign: 'center', color: '#34d399' }}>✓</td>
                <td style={{ textAlign: 'center', color: '#34d399' }}>✓</td>
                <td style={{ textAlign: 'center', color: '#34d399' }}>✓</td>
                <td style={{ textAlign: 'center', color: 'var(--text-muted, #64748b)' }}>—</td>
              </tr>
              <tr>
                <td>Identification Key Builder</td>
                <td style={{ textAlign: 'center', color: '#34d399' }}>✓</td>
                <td style={{ textAlign: 'center', color: '#34d399' }}>✓</td>
                <td style={{ textAlign: 'center', color: '#34d399' }}>✓</td>
                <td style={{ textAlign: 'center', color: '#34d399' }}>✓</td>
                <td style={{ textAlign: 'center', color: 'var(--text-muted, #64748b)' }}>—</td>
              </tr>
              <tr>
                <td>Scientific Peer Review Sign-Off (isVerified)</td>
                <td style={{ textAlign: 'center', color: '#34d399' }}>✓</td>
                <td style={{ textAlign: 'center', color: '#34d399' }}>✓</td>
                <td style={{ textAlign: 'center', color: '#34d399' }}>✓</td>
                <td style={{ textAlign: 'center', color: 'var(--text-muted, #64748b)' }}>—</td>
                <td style={{ textAlign: 'center', color: 'var(--text-muted, #64748b)' }}>—</td>
              </tr>
              <tr>
                <td>Public Website Catalog Release (isPublished)</td>
                <td style={{ textAlign: 'center', color: '#34d399' }}>✓</td>
                <td style={{ textAlign: 'center', color: '#34d399' }}>✓</td>
                <td style={{ textAlign: 'center', color: 'var(--text-muted, #64748b)' }}>—</td>
                <td style={{ textAlign: 'center', color: 'var(--text-muted, #64748b)' }}>—</td>
                <td style={{ textAlign: 'center', color: 'var(--text-muted, #64748b)' }}>—</td>
              </tr>
              <tr>
                <td>Specimen Media & Attribution Management</td>
                <td style={{ textAlign: 'center', color: '#34d399' }}>✓</td>
                <td style={{ textAlign: 'center', color: '#34d399' }}>✓</td>
                <td style={{ textAlign: 'center', color: '#34d399' }}>✓</td>
                <td style={{ textAlign: 'center', color: '#34d399' }}>✓</td>
                <td style={{ textAlign: 'center', color: '#34d399' }}>✓</td>
              </tr>
              <tr>
                <td>Batch Ingestion & Conflict Resolution</td>
                <td style={{ textAlign: 'center', color: '#34d399' }}>✓</td>
                <td style={{ textAlign: 'center', color: '#34d399' }}>✓</td>
                <td style={{ textAlign: 'center', color: '#34d399' }}>✓</td>
                <td style={{ textAlign: 'center', color: 'var(--text-muted, #64748b)' }}>—</td>
                <td style={{ textAlign: 'center', color: '#34d399' }}>✓</td>
              </tr>
              <tr>
                <td>User Accounts, Roles & RBAC Governance</td>
                <td style={{ textAlign: 'center', color: '#34d399' }}>✓</td>
                <td style={{ textAlign: 'center', color: 'var(--text-muted, #64748b)' }}>—</td>
                <td style={{ textAlign: 'center', color: 'var(--text-muted, #64748b)' }}>—</td>
                <td style={{ textAlign: 'center', color: 'var(--text-muted, #64748b)' }}>—</td>
                <td style={{ textAlign: 'center', color: 'var(--text-muted, #64748b)' }}>—</td>
              </tr>
              <tr>
                <td>System Settings & Master Data Reset</td>
                <td style={{ textAlign: 'center', color: '#34d399' }}>✓</td>
                <td style={{ textAlign: 'center', color: 'var(--text-muted, #64748b)' }}>—</td>
                <td style={{ textAlign: 'center', color: 'var(--text-muted, #64748b)' }}>—</td>
                <td style={{ textAlign: 'center', color: 'var(--text-muted, #64748b)' }}>—</td>
                <td style={{ textAlign: 'center', color: 'var(--text-muted, #64748b)' }}>—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Add User Modal */}
      {showAddModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '1rem'
        }}>
          <div style={{
            background: 'var(--bg-surface, #1e293b)',
            border: '1px solid var(--border-color, #334155)',
            borderRadius: '12px',
            maxWidth: '500px',
            width: '100%',
            padding: '1.5rem'
          }}>
            <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.25rem', fontWeight: 700 }}>
              {isBn ? 'নতুন বৈজ্ঞানিক অপারেটর তৈরি করুন' : 'Add New Scientific Operator'}
            </h3>

            {formError && (
              <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)', color: '#f87171', padding: '0.6rem 0.8rem', borderRadius: '6px', fontSize: '0.85rem', marginBottom: '1rem' }}>
                {formError}
              </div>
            )}

            <form onSubmit={handleCreateUser} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted, #94a3b8)', marginBottom: '0.25rem' }}>
                  {isBn ? 'পূর্ণ নাম' : 'Display / Full Name'} *
                </label>
                <input
                  type="text"
                  required
                  value={newName}
                  onChange={e => setNewName(e.target.value)}
                  placeholder="e.g. Dr. Kazi Shafiul"
                  className="form-input"
                  style={{ width: '100%' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted, #94a3b8)', marginBottom: '0.25rem' }}>
                  {isBn ? 'ইমেইল এড্রেস' : 'Official Email Address'} *
                </label>
                <input
                  type="email"
                  required
                  value={newEmail}
                  onChange={e => setNewEmail(e.target.value)}
                  placeholder="operator@institution.edu.bd"
                  className="form-input"
                  style={{ width: '100%' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted, #94a3b8)', marginBottom: '0.25rem' }}>
                  {isBn ? 'বরাদ্দকৃত ভূমিকা' : 'Assigned Role'}
                </label>
                <select
                  value={newRole}
                  onChange={e => setNewRole(e.target.value as UserRole)}
                  className="form-select"
                  style={{ width: '100%' }}
                >
                  <option value="data_manager">Data Manager</option>
                  <option value="editor">Editor</option>
                  <option value="reviewer">Reviewer</option>
                  <option value="admin">Admin</option>
                  <option value="super_admin">Super Admin</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted, #94a3b8)', marginBottom: '0.25rem' }}>
                  {isBn ? 'প্রতিষ্ঠান' : 'Academic / Research Institution'}
                </label>
                <input
                  type="text"
                  value={newInstitution}
                  onChange={e => setNewInstitution(e.target.value)}
                  placeholder="e.g. University of Dhaka"
                  className="form-input"
                  style={{ width: '100%' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted, #94a3b8)', marginBottom: '0.25rem' }}>
                  {isBn ? 'বিশেষজ্ঞ ক্ষেত্র' : 'Zoological Specialization'}
                </label>
                <input
                  type="text"
                  value={newSpecialization}
                  onChange={e => setNewSpecialization(e.target.value)}
                  placeholder="e.g. Ichthyology / Marine Invertebrates"
                  className="form-input"
                  style={{ width: '100%' }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '0.75rem' }}>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="btn btn-secondary"
                >
                  {isBn ? 'বাতিল' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  {isBn ? 'সংরক্ষণ করুন' : 'Create Operator'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
