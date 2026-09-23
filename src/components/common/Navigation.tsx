// BiotaElite 2.0 Semantic Public Navigation Bar
// React Portal Dropdown Architecture for Core Zoology, Identification & More
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Fish, 
  Waves, 
  MapPin, 
  Layers, 
  BookOpen, 
  KeyRound, 
  Library, 
  Info,
  Grid,
  Sparkles,
  ChevronDown,
  GitFork,
  Activity,
  ShieldCheck,
  GitCompare,
  TreeDeciduous,
  Globe,
  MoreHorizontal
} from 'lucide-react';

interface MenuPosition {
  top: number;
  left: number;
  minWidth: number;
}

export const Navigation: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();

  const [openDropdown, setOpenDropdown] = useState<'zoology' | 'ident' | 'more' | null>(null);
  const [menuPos, setMenuPos] = useState<MenuPosition | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(() => 
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  const zoologyTriggerRef = useRef<HTMLButtonElement>(null);
  const identTriggerRef = useRef<HTMLButtonElement>(null);
  const moreTriggerRef = useRef<HTMLButtonElement>(null);
  const menuPortalRef = useRef<HTMLDivElement>(null);
  const leaveTimeoutRef = useRef<number | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Monitor mobile vs desktop viewport
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setOpenDropdown(null);
  }, [location.pathname]);

  // Compute exact coordinates directly below trigger button
  const computePosition = useCallback((name: 'zoology' | 'ident' | 'more') => {
    let btn: HTMLButtonElement | null = null;
    if (name === 'zoology') btn = zoologyTriggerRef.current;
    else if (name === 'ident') btn = identTriggerRef.current;
    else if (name === 'more') btn = moreTriggerRef.current;

    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const menuWidth = name === 'zoology' ? 245 : 230;
    const top = rect.bottom + 4;

    let left = name === 'more' ? (rect.right - menuWidth) : rect.left;

    if (typeof window !== 'undefined') {
      if (left + menuWidth > window.innerWidth - 8) {
        left = window.innerWidth - menuWidth - 8;
      }
      if (left < 8) {
        left = 8;
      }
    }

    setMenuPos({ top, left, minWidth: menuWidth });
  }, []);

  // Update position on scroll/resize when open on desktop
  useEffect(() => {
    if (!openDropdown || isMobile) return;

    const handleUpdate = () => {
      computePosition(openDropdown);
    };

    window.addEventListener('scroll', handleUpdate, { passive: true });
    window.addEventListener('resize', handleUpdate, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleUpdate);
      window.removeEventListener('resize', handleUpdate);
    };
  }, [openDropdown, isMobile, computePosition]);

  // Close dropdowns on click outside or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (menuPortalRef.current && menuPortalRef.current.contains(target)) return;
      if (zoologyTriggerRef.current && zoologyTriggerRef.current.contains(target)) return;
      if (identTriggerRef.current && identTriggerRef.current.contains(target)) return;
      if (moreTriggerRef.current && moreTriggerRef.current.contains(target)) return;

      setOpenDropdown(null);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (leaveTimeoutRef.current) {
        clearTimeout(leaveTimeoutRef.current);
      }
    };
  }, []);

  const openMenu = useCallback((name: 'zoology' | 'ident' | 'more') => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    computePosition(name);
    setOpenDropdown(name);
  }, [computePosition]);

  const handleMouseEnter = useCallback((name: 'zoology' | 'ident' | 'more') => {
    if (isMobile) return;
    openMenu(name);
  }, [isMobile, openMenu]);

  const handleMouseLeave = useCallback(() => {
    if (isMobile) return;
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }
    leaveTimeoutRef.current = window.setTimeout(() => {
      setOpenDropdown(null);
    }, 180);
  }, [isMobile]);

  const handleMenuMouseEnter = useCallback(() => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
  }, []);

  const handleToggle = useCallback((name: 'zoology' | 'ident' | 'more', e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {
      openMenu(name);
    }
  }, [openDropdown, openMenu]);

  const closeMenu = useCallback(() => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    setOpenDropdown(null);
  }, []);

  // Check active states
  const isZoologyActive = [
    '/animal-kingdom',
    '/animal-biodiversity',
    '/comparative-zoology',
    '/evolution-phylogeny',
    '/anatomy-physiology',
    '/vertebrates'
  ].some(path => location.pathname.startsWith(path));

  const isIdentActive = [
    '/identification',
    '/dichotomous-key'
  ].some(path => location.pathname.startsWith(path));

  const isMoreActive = [
    '/scientific-names',
    '/synonyms',
    '/references'
  ].some(path => location.pathname.startsWith(path));

  // Submenu Content Renderers
  const renderZoologySubmenu = () => (
    <>
      <NavLink
        to="/animal-kingdom"
        className={({ isActive }) => `nav-dropdown-item ${isActive ? 'active' : ''}`}
        onClick={closeMenu}
        role="menuitem"
      >
        <Layers size={15} />
        <span>{t('nav.animalKingdom')}</span>
      </NavLink>

      <NavLink
        to="/animal-biodiversity"
        className={({ isActive }) => `nav-dropdown-item ${isActive ? 'active' : ''}`}
        onClick={closeMenu}
        role="menuitem"
      >
        <Globe size={15} />
        <span>{t('nav.animalBiodiversity')}</span>
      </NavLink>

      <NavLink
        to="/comparative-zoology"
        className={({ isActive }) => `nav-dropdown-item ${isActive ? 'active' : ''}`}
        onClick={closeMenu}
        role="menuitem"
      >
        <GitCompare size={15} />
        <span>{t('nav.comparativeZoology')}</span>
      </NavLink>

      <NavLink
        to="/evolution-phylogeny"
        className={({ isActive }) => `nav-dropdown-item ${isActive ? 'active' : ''}`}
        onClick={closeMenu}
        role="menuitem"
      >
        <TreeDeciduous size={15} />
        <span>{t('nav.evolutionPhylogeny')}</span>
      </NavLink>

      <NavLink
        to="/anatomy-physiology"
        className={({ isActive }) => `nav-dropdown-item ${isActive ? 'active' : ''}`}
        onClick={closeMenu}
        role="menuitem"
      >
        <Activity size={15} />
        <span>{t('nav.anatomyPhysiology')}</span>
      </NavLink>

      <NavLink
        to="/vertebrates"
        className={({ isActive }) => `nav-dropdown-item ${isActive ? 'active' : ''}`}
        onClick={closeMenu}
        role="menuitem"
      >
        <ShieldCheck size={15} />
        <span>{t('nav.vertebrates')}</span>
      </NavLink>
    </>
  );

  const renderIdentSubmenu = () => (
    <>
      <NavLink
        to="/identification"
        className={({ isActive }) => `nav-dropdown-item ${isActive ? 'active' : ''}`}
        onClick={closeMenu}
        role="menuitem"
      >
        <KeyRound size={15} />
        <span>{t('nav.identification')}</span>
      </NavLink>

      <NavLink
        to="/dichotomous-key"
        className={({ isActive }) => `nav-dropdown-item ${isActive ? 'active' : ''}`}
        onClick={closeMenu}
        role="menuitem"
      >
        <GitFork size={15} />
        <span>{t('nav.dichotomousKey')}</span>
      </NavLink>
    </>
  );

  const renderMoreSubmenu = () => (
    <>
      <NavLink
        to="/scientific-names"
        className={({ isActive }) => `nav-dropdown-item ${isActive ? 'active' : ''}`}
        onClick={closeMenu}
        role="menuitem"
      >
        <BookOpen size={15} />
        <span>{t('nav.scientificNames')}</span>
      </NavLink>

      <NavLink
        to="/references"
        className={({ isActive }) => `nav-dropdown-item ${isActive ? 'active' : ''}`}
        onClick={closeMenu}
        role="menuitem"
      >
        <Library size={15} />
        <span>{t('nav.references')}</span>
      </NavLink>
    </>
  );

  return (
    <nav className="nav-container" ref={navRef} aria-label="Main Navigation">
      <div className="nav-links-scroll">
        {/* Primary Zoological Portals */}
        <div className="nav-section nav-section-primary">
          {/* 1. Species Catalog */}
          <NavLink
            to="/species"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <Grid size={15} />
            <span>{t('nav.species')}</span>
          </NavLink>

          {/* 2. Fish Biodiversity */}
          <NavLink
            to="/fish"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <Fish size={15} />
            <span>{t('nav.fish')}</span>
          </NavLink>

          {/* 3. Marine Life */}
          <NavLink
            to="/marine"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <Waves size={15} />
            <span>{t('nav.marine')}</span>
          </NavLink>

          {/* 4. Bangladesh Biodiversity */}
          <NavLink
            to="/bangladesh"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <MapPin size={15} />
            <span>{t('nav.bangladesh')}</span>
          </NavLink>

          {/* 5. Taxonomy */}
          <NavLink
            to="/taxonomy"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <Layers size={15} />
            <span>{t('nav.taxonomy')}</span>
          </NavLink>
        </div>

        {/* Grouped Navigation Modules (Accordions) */}
        <div className="nav-section nav-section-grouped">
          {/* 6. CORE ZOOLOGY DROPDOWN */}
          <div 
            className="nav-dropdown"
            onMouseEnter={() => handleMouseEnter('zoology')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              ref={zoologyTriggerRef}
              onClick={(e) => handleToggle('zoology', e)}
              className={`nav-dropdown-btn ${isZoologyActive ? 'active' : ''}`}
              aria-expanded={openDropdown === 'zoology'}
              aria-haspopup="true"
            >
              <span className="nav-dropdown-btn-content">
                <Sparkles size={15} className={isZoologyActive ? 'text-accent' : ''} />
                <span>{t('nav.coreZoology')}</span>
              </span>
              <ChevronDown 
                size={13} 
                className={`nav-dropdown-chevron ${openDropdown === 'zoology' ? 'open' : ''}`} 
              />
            </button>

            {/* Mobile In-flow Submenu */}
            {isMobile && openDropdown === 'zoology' && (
              <div className="nav-dropdown-menu" role="menu" aria-label="Core Zoology submenu">
                {renderZoologySubmenu()}
              </div>
            )}
          </div>

          {/* 7. IDENTIFICATION DROPDOWN */}
          <div 
            className="nav-dropdown"
            onMouseEnter={() => handleMouseEnter('ident')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              ref={identTriggerRef}
              onClick={(e) => handleToggle('ident', e)}
              className={`nav-dropdown-btn ${isIdentActive ? 'active' : ''}`}
              aria-expanded={openDropdown === 'ident'}
              aria-haspopup="true"
            >
              <span className="nav-dropdown-btn-content">
                <KeyRound size={15} className={isIdentActive ? 'text-accent' : ''} />
                <span>{t('nav.identification')}</span>
              </span>
              <ChevronDown 
                size={13} 
                className={`nav-dropdown-chevron ${openDropdown === 'ident' ? 'open' : ''}`} 
              />
            </button>

            {/* Mobile In-flow Submenu */}
            {isMobile && openDropdown === 'ident' && (
              <div className="nav-dropdown-menu" role="menu" aria-label="Identification submenu">
                {renderIdentSubmenu()}
              </div>
            )}
          </div>

          {/* 8. MORE DROPDOWN */}
          <div 
            className="nav-dropdown"
            onMouseEnter={() => handleMouseEnter('more')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              ref={moreTriggerRef}
              onClick={(e) => handleToggle('more', e)}
              className={`nav-dropdown-btn ${isMoreActive ? 'active' : ''}`}
              aria-expanded={openDropdown === 'more'}
              aria-haspopup="true"
            >
              <span className="nav-dropdown-btn-content">
                <MoreHorizontal size={15} className={isMoreActive ? 'text-accent' : ''} />
                <span>{t('nav.more')}</span>
              </span>
              <ChevronDown 
                size={13} 
                className={`nav-dropdown-chevron ${openDropdown === 'more' ? 'open' : ''}`} 
              />
            </button>

            {/* Mobile In-flow Submenu */}
            {isMobile && openDropdown === 'more' && (
              <div className="nav-dropdown-menu" role="menu" aria-label="More resources submenu">
                {renderMoreSubmenu()}
              </div>
            )}
          </div>
        </div>

        {/* Utility / About Section */}
        <div className="nav-section nav-section-about">
          {/* 9. About */}
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <Info size={15} />
            <span>{t('nav.about')}</span>
          </NavLink>
        </div>
      </div>

      {/* Desktop Floating Dropdown Rendered via React Portal to document.body */}
      {!isMobile && openDropdown && menuPos && typeof document !== 'undefined' && createPortal(
        <div
          ref={menuPortalRef}
          className="nav-dropdown-portal"
          style={{
            position: 'fixed',
            top: `${menuPos.top}px`,
            left: `${menuPos.left}px`,
            minWidth: `${menuPos.minWidth}px`,
            zIndex: 9999,
          }}
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMouseLeave}
          role="menu"
          aria-label={
            openDropdown === 'zoology' 
              ? 'Core Zoology submenu' 
              : openDropdown === 'ident' 
              ? 'Identification submenu' 
              : 'More resources submenu'
          }
        >
          {openDropdown === 'zoology' && renderZoologySubmenu()}
          {openDropdown === 'ident' && renderIdentSubmenu()}
          {openDropdown === 'more' && renderMoreSubmenu()}
        </div>,
        document.body
      )}
    </nav>
  );
};
export default Navigation;
