import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import { Compass, ShieldCheck, ExternalLink, ChevronDown } from 'lucide-react';
import { hasMinimumRole } from '../auth/RequireAuth';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const { role, isAuthenticated } = useAuth();
  const [openSection, setOpenSection] = useState<'portals' | 'tools' | 'authorities' | null>(null);

  const isAuthorizedAdmin = isAuthenticated && hasMinimumRole(role, 'admin');

  const toggleSection = (section: 'portals' | 'tools' | 'authorities') => {
    setOpenSection(prev => (prev === section ? null : section));
  };

  return (
    <footer className="site-footer">
      <div className="footer-content">
        {/* Brand & Purpose */}
        <div className="footer-brand-section">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
            <div className="brand-icon-box" style={{ width: '32px', height: '32px' }}>
              <Compass size={18} />
            </div>
            <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#ffffff' }}>BiotaElite 2.0</span>
          </div>
          <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: '1.4', marginBottom: '0.25rem' }}>
            Created & Developed by{' '}
            <span style={{ fontSize: '0.925rem', fontWeight: 700, color: '#ffffff', verticalAlign: 'baseline' }}>
              Mohammad Arif
            </span>
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.4', marginBottom: '0.25rem' }}>
            Session: 2021–2022, Department of Zoology
          </div>
          <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: '1.4', marginBottom: '0.65rem' }}>
            Government City College, Chattogram
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--accent-emerald-light)' }}>
            <ShieldCheck size={14} />
            <span>ICZN Compliant Zoological Systematics</span>
          </div>
        </div>

        {/* Biodiversity Portals */}
        <div className={`footer-accordion-section ${openSection === 'portals' ? 'is-open' : ''}`}>
          <button
            type="button"
            className="footer-accordion-trigger"
            onClick={() => toggleSection('portals')}
            aria-expanded={openSection === 'portals'}
            aria-controls="footer-portals-body"
          >
            <span className="footer-section-title">
              {language === 'bn' ? 'পোর্টালসমূহ' : 'Portals'}
            </span>
            <ChevronDown className="footer-accordion-chevron" size={16} />
          </button>
          <div
            id="footer-portals-body"
            className="footer-accordion-body"
          >
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
              <li><Link to="/species" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>{t('nav.species')}</Link></li>
              <li><Link to="/fish" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>{t('nav.fish')}</Link></li>
              <li><Link to="/marine" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>{t('nav.marine')}</Link></li>
              <li><Link to="/bangladesh" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>{t('nav.bangladesh')}</Link></li>
              <li><Link to="/taxonomy" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>{t('nav.taxonomy')}</Link></li>
            </ul>
          </div>
        </div>

        {/* Tools & Governance */}
        <div className={`footer-accordion-section ${openSection === 'tools' ? 'is-open' : ''}`}>
          <button
            type="button"
            className="footer-accordion-trigger"
            onClick={() => toggleSection('tools')}
            aria-expanded={openSection === 'tools'}
            aria-controls="footer-tools-body"
          >
            <span className="footer-section-title">
              {language === 'bn' ? 'ট্যাক্সোনমি ও সরঞ্জাম' : 'Systematics & Tools'}
            </span>
            <ChevronDown className="footer-accordion-chevron" size={16} />
          </button>
          <div
            id="footer-tools-body"
            className="footer-accordion-body"
          >
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
              <li><Link to="/scientific-names" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>{t('nav.scientificNames')}</Link></li>
              <li><Link to="/identification" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>{t('nav.identification')}</Link></li>
              <li><Link to="/references" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>{t('nav.references')}</Link></li>
              <li><Link to="/about" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>{t('nav.about')}</Link></li>
              {isAuthorizedAdmin && (
                <li>
                  <Link to="/admin" style={{ color: 'var(--accent-emerald-light)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    <ShieldCheck size={13} />
                    <span>{t('nav.admin')}</span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Authoritative References */}
        <div className={`footer-accordion-section ${openSection === 'authorities' ? 'is-open' : ''}`}>
          <button
            type="button"
            className="footer-accordion-trigger"
            onClick={() => toggleSection('authorities')}
            aria-expanded={openSection === 'authorities'}
            aria-controls="footer-authorities-body"
          >
            <span className="footer-section-title">
              {language === 'bn' ? 'স্বীকৃত তথ্যসূত্র' : 'Authoritative Sources'}
            </span>
            <ChevronDown className="footer-accordion-chevron" size={16} />
          </button>
          <div
            id="footer-authorities-body"
            className="footer-accordion-body"
          >
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem', lineHeight: '1.5' }}>
              {t('footer.authorities', 'Taxonomic classifications, species authorities, and conservation assessments aligned with global peer-reviewed biodiversity standards.')}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.75rem' }}>
              <a href="https://www.fishbase.se" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-marine-light)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                FishBase Global Consortium <ExternalLink size={11} />
              </a>
              <a href="https://www.marinespecies.org" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-marine-light)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                World Register of Marine Species (WoRMS) <ExternalLink size={11} />
              </a>
              <a href="https://www.iucnredlist.org" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-marine-light)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                IUCN Red List of Threatened Species <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} BiotaElite 2.0 Zoological Information System. {t('footer.rights', 'All rights reserved.')}</span>
        <span>Build MASTER-BUILD-02A • Audited & Reconciled Dataset</span>
      </div>
    </footer>
  );
};
