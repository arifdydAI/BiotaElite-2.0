// BiotaElite 2.0 Scientific Footer Component
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { Compass, ShieldCheck, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        {/* Brand & Purpose */}
        <div>
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
        <div>
          <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#ffffff', marginBottom: '0.85rem' }}>
            {language === 'bn' ? 'পোর্টালসমূহ' : 'Portals'}
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
            <li><Link to="/species" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>{t('nav.species')}</Link></li>
            <li><Link to="/fish" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>{t('nav.fish')}</Link></li>
            <li><Link to="/marine" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>{t('nav.marine')}</Link></li>
            <li><Link to="/bangladesh" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>{t('nav.bangladesh')}</Link></li>
            <li><Link to="/taxonomy" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>{t('nav.taxonomy')}</Link></li>
          </ul>
        </div>

        {/* Tools & Governance */}
        <div>
          <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#ffffff', marginBottom: '0.85rem' }}>
            {language === 'bn' ? 'ট্যাক্সোনমি ও সরঞ্জাম' : 'Systematics & Tools'}
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
            <li><Link to="/scientific-names" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>{t('nav.scientificNames')}</Link></li>
            <li><Link to="/identification" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>{t('nav.identification')}</Link></li>
            <li><Link to="/references" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>{t('nav.references')}</Link></li>
            <li><Link to="/about" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>{t('nav.about')}</Link></li>
            <li><Link to="/admin" style={{ color: 'var(--accent-emerald-light)', textDecoration: 'none' }}>{t('nav.admin')}</Link></li>
          </ul>
        </div>

        {/* Authoritative References */}
        <div>
          <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#ffffff', marginBottom: '0.85rem' }}>
            {language === 'bn' ? 'স্বীকৃত তথ্যসূত্র' : 'Authoritative Sources'}
          </h4>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem', lineHeight: '1.5' }}>
            {t('footer.authorities')}
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

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} BiotaElite 2.0 Zoological Information System. {t('footer.rights')}</span>
        <span>Build MASTER-BUILD-02A • Audited & Reconciled Dataset</span>
      </div>
    </footer>
  );
};
