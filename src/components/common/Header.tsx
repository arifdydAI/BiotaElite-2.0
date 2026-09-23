import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import { Search, ShieldCheck, Menu, X } from 'lucide-react';
import { hasMinimumRole } from '../auth/RequireAuth';

interface HeaderProps {
  isNavOpen?: boolean;
  onToggleNav?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isNavOpen = false, onToggleNav }) => {
  const { language, setLanguage, t } = useLanguage();
  const { role, isAuthenticated } = useAuth();
  const [quickQuery, setQuickQuery] = useState('');
  const navigate = useNavigate();

  const isAuthorizedAdmin = isAuthenticated && hasMinimumRole(role, 'admin');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(quickQuery.trim())}`);
    }
  };

  return (
    <header className="site-header">
      <div className="header-top">
        <Link to="/" className="brand-wrapper">
          <img
            src="/biota_logo.png"
            alt="BiotaElite 2.0"
            className="brand-logo-img"
          />
          <div className="brand-text-block">
            <div className="brand-title">
              BiotaElite <span className="brand-badge">2.0</span>
            </div>
            <span className="brand-subtitle">
              {language === 'bn' ? 'প্রাণিবিজ্ঞান ও জীববৈচিত্র্য প্ল্যাটফর্ম' : 'Zoological & Biodiversity Information System'}
            </span>
          </div>
        </Link>

        {/* Global Search Bar */}
        <form onSubmit={handleSearchSubmit} style={{ flex: '1', maxWidth: '480px', margin: '0 1rem' }}>
          <div style={{ position: 'relative', width: '100%' }}>
            <Search
              size={16}
              style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}
            />
            <input
              type="text"
              placeholder={t('nav.searchPlaceholder')}
              value={quickQuery}
              onChange={(e) => setQuickQuery(e.target.value)}
              className="form-input"
              style={{
                paddingLeft: '2.3rem',
                borderRadius: '9999px',
                background: 'rgba(15, 25, 29, 0.9)',
                fontSize: '0.85rem',
              }}
            />
          </div>
        </form>

        <div className="header-actions">
          {/* Language Switcher */}
          <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', padding: '2px', border: '1px solid var(--border-subtle)' }}>
            <button
              onClick={() => setLanguage('en')}
              className={`btn btn-sm ${language === 'en' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ padding: '0.25rem 0.6rem', fontSize: '0.75rem', borderRadius: '4px' }}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('bn')}
              className={`btn btn-sm ${language === 'bn' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ padding: '0.25rem 0.6rem', fontSize: '0.75rem', borderRadius: '4px' }}
            >
              বাংলা
            </button>
          </div>

          {/* Admin Navigation & Role Badge — Visible ONLY to authenticated authorized admins */}
          {isAuthorizedAdmin && (
            <Link
              to="/admin"
              className="btn btn-sm"
              style={{
                background: 'rgba(16, 185, 129, 0.15)',
                color: '#34d399',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                gap: '0.4rem',
              }}
            >
              <ShieldCheck size={14} />
              <span>Admin ({role.replace('_', ' ')})</span>
            </Link>
          )}

          {/* Mobile Hamburger Button (< 768px) */}
          <button
            type="button"
            className="btn-hamburger mobile-only"
            onClick={onToggleNav}
            aria-label={isNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isNavOpen}
            aria-controls="mobile-nav-panel"
          >
            {isNavOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
};
