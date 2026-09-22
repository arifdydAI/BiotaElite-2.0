// BiotaElite 2.0 Global Zoological Identification System & Engine
// MASTER-FIX-13: Comprehensive Global Identification Keys + Preserved Regional Bangladesh Keys
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useLanguage } from '../../context/LanguageContext';
import { ScientificName } from '../../components/common/ScientificName';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { BackButton } from '../../components/common/BackButton';
import type { KeyScope, KeyStepOption } from '../../types/biodiversity';
import {
  KeyRound,
  CheckCircle2,
  ArrowRight,
  RotateCcw,
  ChevronLeft,
  BookOpen,
  Globe,
  MapPin,
  ShieldCheck,
  Layers,
  Compass,
  ExternalLink,
  Camera,
  Info,
  GitFork,
} from 'lucide-react';

export const IdentificationPage: React.FC = () => {
  const { identKeys, getSpeciesById, getTaxonById, species } = useBiodiversity();
  const { t, language } = useLanguage();

  // Scope: Global (default) vs Bangladesh Regional
  const [scope, setScope] = useState<KeyScope>('global');

  // Global Category filter tab
  const [globalCategory, setGlobalCategory] = useState<string>('all');

  // Key Selection & Navigation State
  const [selectedKeyId, setSelectedKeyId] = useState<string>('');
  const [currentStepId, setCurrentStepId] = useState<number>(1);
  const [stepHistory, setStepHistory] = useState<number[]>([]);
  const [determinedSpeciesId, setDeterminedSpeciesId] = useState<string | null>(null);
  const [determinedTaxonId, setDeterminedTaxonId] = useState<string | null>(null);

  // Filter keys by scope and category
  const filteredKeys = useMemo(() => {
    const byScope = identKeys.filter((k) => k.scope === scope);
    if (scope === 'bangladesh' || globalCategory === 'all') {
      return byScope;
    }
    if (globalCategory === 'major_groups') {
      return byScope.filter((k) => k.majorGroup === 'major_groups');
    }
    if (globalCategory === 'fishes') {
      return byScope.filter((k) => k.majorGroup === 'fishes' || k.majorGroup === 'vertebrates');
    }
    if (globalCategory === 'invertebrates') {
      return byScope.filter(
        (k) =>
          k.majorGroup === 'invertebrates' ||
          k.majorGroup === 'mollusca' ||
          k.majorGroup === 'arthropoda' ||
          k.majorGroup === 'echinodermata' ||
          k.majorGroup === 'annelida'
      );
    }
    if (globalCategory === 'tetrapods') {
      return byScope.filter(
        (k) =>
          k.majorGroup === 'amphibia' ||
          k.majorGroup === 'reptilia' ||
          k.majorGroup === 'aves' ||
          k.majorGroup === 'mammalia'
      );
    }
    return byScope;
  }, [identKeys, scope, globalCategory]);

  // Active Key resolution
  const activeKey = useMemo(() => {
    const found = filteredKeys.find((k) => k.id === selectedKeyId);
    return found || filteredKeys[0] || identKeys[0];
  }, [filteredKeys, selectedKeyId, identKeys]);

  const currentStep = useMemo(() => {
    return activeKey?.steps.find((s) => s.id === currentStepId) || activeKey?.steps[0];
  }, [activeKey, currentStepId]);

  // Handle Scope change
  const handleScopeChange = (newScope: KeyScope) => {
    setScope(newScope);
    setGlobalCategory('all');
    setCurrentStepId(1);
    setStepHistory([]);
    setDeterminedSpeciesId(null);
    setDeterminedTaxonId(null);
    const nextKeys = identKeys.filter((k) => k.scope === newScope);
    if (nextKeys[0]) {
      setSelectedKeyId(nextKeys[0].id);
    }
  };

  // Handle Key Selection
  const handleSelectKey = (keyId: string) => {
    setSelectedKeyId(keyId);
    setCurrentStepId(1);
    setStepHistory([]);
    setDeterminedSpeciesId(null);
    setDeterminedTaxonId(null);
  };

  // Handle Couplet Selection
  const handleSelectCouplet = (couplet: KeyStepOption) => {
    if (couplet.resultType === 'species' && couplet.speciesId) {
      setDeterminedSpeciesId(couplet.speciesId);
      setDeterminedTaxonId(null);
    } else if (couplet.resultType === 'taxon' && couplet.taxonId) {
      setDeterminedTaxonId(couplet.taxonId);
      setDeterminedSpeciesId(null);
    } else if (couplet.resultType === 'next_step' && couplet.nextStepId) {
      setStepHistory((prev) => [...prev, currentStepId]);
      setCurrentStepId(couplet.nextStepId);
    }
  };

  // Handle Step Back
  const handleStepBack = () => {
    if (determinedSpeciesId || determinedTaxonId) {
      setDeterminedSpeciesId(null);
      setDeterminedTaxonId(null);
      return;
    }
    if (stepHistory.length > 0) {
      const prevStep = stepHistory[stepHistory.length - 1];
      setStepHistory((prev) => prev.slice(0, -1));
      setCurrentStepId(prevStep);
    }
  };

  // Handle Reset
  const handleReset = () => {
    setCurrentStepId(1);
    setStepHistory([]);
    setDeterminedSpeciesId(null);
    setDeterminedTaxonId(null);
  };

  // Resolved Results
  const determinedSpecies = determinedSpeciesId ? getSpeciesById(determinedSpeciesId) : null;
  const determinedTaxon = determinedTaxonId ? getTaxonById(determinedTaxonId) : null;

  // Find verified image for determined species
  const verifiedMedia = determinedSpecies?.media?.find(
    (m) =>
      determinedSpecies.imageVerificationStatus === 'verified' &&
      m.verificationStatus === 'verified' &&
      m.isVerified === true &&
      m.speciesId === determinedSpecies.id &&
      (!m.taxonId || !determinedSpecies.taxonId || m.taxonId === determinedSpecies.taxonId) &&
      Boolean(m.sourceUrl && m.license) &&
      Boolean(m.imageUrl || m.url)
  );
  const displayImageUrl = verifiedMedia ? verifiedMedia.imageUrl || verifiedMedia.url : '';

  // Find representative species for determined taxon
  const representativeTaxonSpecies = useMemo(() => {
    if (!determinedTaxon) return [];
    return species
      .filter((s) => {
        if (!s.isPublished) return false;
        const sClass = s.taxonomy?.class?.toLowerCase() || '';
        const sOrder = s.taxonomy?.order?.toLowerCase() || '';
        const sPhylum = s.taxonomy?.phylum?.toLowerCase() || '';
        const tSci = determinedTaxon.scientificName?.toLowerCase() || '';

        if (determinedTaxon.rank === 'phylum') return sPhylum === tSci;
        if (determinedTaxon.rank === 'class') return sClass === tSci;
        if (determinedTaxon.rank === 'order') return sOrder === tSci;
        return false;
      })
      .slice(0, 6);
  }, [determinedTaxon, species]);

  return (
    <div style={{ maxWidth: '1240px', margin: '0 auto', paddingBottom: '3rem' }}>
      {/* Top Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <BackButton fallbackPath="/species" />
        <Breadcrumbs items={[{ label: t('crumb.identification') }]} />
      </div>

      {/* Header Banner */}
      <div style={{ marginBottom: '2.25rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-emerald-light)', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.6rem' }}>
          <KeyRound size={17} />
          <span>{t('ident.portalTitle')}</span>
        </div>

        <h1 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.6rem)', fontWeight: 800, color: '#ffffff', marginBottom: '0.6rem', letterSpacing: '-0.02em' }}>
          {t('ident.mainHeading')}
        </h1>

        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '880px', lineHeight: '1.65' }}>
          {t('ident.lead')}
        </p>

        <div style={{ marginTop: '1.25rem' }}>
          <Link
            to="/dichotomous-key"
            className="btn btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.25rem', fontSize: '0.9rem', borderRadius: 'var(--radius-md)', textDecoration: 'none' }}
          >
            <GitFork size={16} />
            <span>{language === 'bn' ? 'ইন্টারেক্টিভ ডাইকোটোমাস কী ইঞ্জিনে যান' : 'Launch Interactive Dichotomous Key Engine'}</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      {/* Scope Switcher: Global vs Bangladesh Regional */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem',
        }}
      >
        <button
          onClick={() => handleScopeChange('global')}
          style={{
            padding: '1.25rem 1.5rem',
            borderRadius: 'var(--radius-lg)',
            border: scope === 'global' ? '2px solid var(--accent-emerald)' : '1px solid var(--border-subtle)',
            background: scope === 'global' ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.18) 0%, rgba(15, 25, 29, 0.95) 100%)' : 'var(--bg-card)',
            textAlign: 'left',
            cursor: 'pointer',
            transition: 'var(--transition-normal)',
            position: 'relative',
            boxShadow: scope === 'global' ? '0 0 20px rgba(16, 185, 129, 0.15)' : 'none',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: scope === 'global' ? 'var(--accent-emerald-light)' : '#ffffff', fontWeight: 800, fontSize: '1.1rem' }}>
              <Globe size={20} />
              <span>{t('ident.scopeGlobal')}</span>
            </div>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                padding: '0.2rem 0.6rem',
                borderRadius: 'var(--radius-full)',
                background: scope === 'global' ? 'rgba(16, 185, 129, 0.25)' : 'var(--bg-surface)',
                color: scope === 'global' ? 'var(--accent-emerald-light)' : 'var(--text-muted)',
              }}
            >
              {identKeys.filter((k) => k.scope === 'global').length} {language === 'bn' ? 'টি কুঞ্জি' : 'Keys'}
            </span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
            {t('ident.scopeGlobalDesc')}
          </p>
        </button>

        <button
          onClick={() => handleScopeChange('bangladesh')}
          style={{
            padding: '1.25rem 1.5rem',
            borderRadius: 'var(--radius-lg)',
            border: scope === 'bangladesh' ? '2px solid var(--accent-marine)' : '1px solid var(--border-subtle)',
            background: scope === 'bangladesh' ? 'linear-gradient(135deg, rgba(2, 132, 199, 0.18) 0%, rgba(15, 25, 29, 0.95) 100%)' : 'var(--bg-card)',
            textAlign: 'left',
            cursor: 'pointer',
            transition: 'var(--transition-normal)',
            position: 'relative',
            boxShadow: scope === 'bangladesh' ? '0 0 20px rgba(2, 132, 199, 0.15)' : 'none',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: scope === 'bangladesh' ? 'var(--accent-marine-light)' : '#ffffff', fontWeight: 800, fontSize: '1.1rem' }}>
              <MapPin size={20} />
              <span>{t('ident.scopeBangladesh')}</span>
            </div>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                padding: '0.2rem 0.6rem',
                borderRadius: 'var(--radius-full)',
                background: scope === 'bangladesh' ? 'rgba(2, 132, 199, 0.25)' : 'var(--bg-surface)',
                color: scope === 'bangladesh' ? 'var(--accent-marine-light)' : 'var(--text-muted)',
              }}
            >
              {identKeys.filter((k) => k.scope === 'bangladesh').length} {language === 'bn' ? 'টি কুঞ্জি' : 'Keys'}
            </span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
            {t('ident.scopeBangladeshDesc')}
          </p>
        </button>
      </div>

      {/* Global Category Filters (Shown only under Global scope) */}
      {scope === 'global' && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.75rem', marginBottom: '1.5rem', scrollbarWidth: 'thin' }}>
          {[
            { id: 'all', label: t('ident.allGlobalKeys'), icon: Layers },
            { id: 'major_groups', label: t('ident.majorAnimalGroups'), icon: Compass },
            { id: 'fishes', label: t('ident.fishesAquatic'), icon: BookOpen },
            { id: 'invertebrates', label: t('ident.invertebrates'), icon: BookOpen },
            { id: 'tetrapods', label: t('ident.tetrapods'), icon: BookOpen },
          ].map((cat) => {
            const isSelected = globalCategory === cat.id;
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setGlobalCategory(cat.id)}
                className="btn btn-sm"
                style={{
                  whiteSpace: 'nowrap',
                  background: isSelected ? 'var(--accent-emerald)' : 'var(--bg-surface)',
                  color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                  border: isSelected ? '1px solid var(--accent-emerald)' : '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-full)',
                  padding: '0.45rem 1rem',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)',
                }}
              >
                <Icon size={14} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Keys Selection Carousel / Grid */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {t('ident.selectKey')} ({filteredKeys.length})
          </span>
          {scope === 'bangladesh' && (
            <span style={{ fontSize: '0.8rem', color: 'var(--accent-marine-light)', fontWeight: 600 }}>
              {t('ident.scopeBangladesh')} • Regional Vouchers
            </span>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.85rem' }}>
          {filteredKeys.map((k) => {
            const isSelected = k.id === activeKey?.id;
            const titleDisplay = language === 'bn' && k.titleBn ? k.titleBn : k.title;
            const scopeLabel = k.scope === 'global' ? 'GLOBAL' : 'BANGLADESH';

            return (
              <button
                key={k.id}
                onClick={() => handleSelectKey(k.id)}
                className="card"
                style={{
                  textAlign: 'left',
                  cursor: 'pointer',
                  padding: '1.1rem 1.25rem',
                  border: isSelected
                    ? k.scope === 'global'
                      ? '2px solid var(--accent-emerald)'
                      : '2px solid var(--accent-marine)'
                    : '1px solid var(--border-subtle)',
                  background: isSelected
                    ? k.scope === 'global'
                      ? 'rgba(16, 185, 129, 0.12)'
                      : 'rgba(2, 132, 199, 0.12)'
                    : 'var(--bg-card)',
                  transition: 'var(--transition-normal)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.4rem', marginBottom: '0.4rem' }}>
                    <span
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 800,
                        letterSpacing: '0.04em',
                        padding: '0.15rem 0.45rem',
                        borderRadius: 'var(--radius-sm)',
                        background: k.scope === 'global' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(2, 132, 199, 0.2)',
                        color: k.scope === 'global' ? 'var(--accent-emerald-light)' : 'var(--accent-marine-light)',
                      }}
                    >
                      {scopeLabel}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      {k.steps.length} {t('ident.stepsCount')}
                    </span>
                  </div>

                  <div
                    style={{
                      fontSize: '0.94rem',
                      fontWeight: 700,
                      color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                      lineHeight: 1.35,
                      marginBottom: '0.4rem',
                    }}
                  >
                    {titleDisplay}
                  </div>
                </div>

                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.5rem' }}>
                  <BookOpen size={12} />
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {language === 'bn' && k.taxonScopeBn ? k.taxonScopeBn : k.taxonScope}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Key Info & Controls Banner */}
      {activeKey && (
        <div
          className="card"
          style={{
            marginBottom: '2rem',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            padding: '1.25rem 1.5rem',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ maxWidth: '820px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.35rem' }}>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '0.15rem 0.5rem',
                    borderRadius: 'var(--radius-sm)',
                    background: activeKey.scope === 'global' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(2, 132, 199, 0.2)',
                    color: activeKey.scope === 'global' ? 'var(--accent-emerald-light)' : 'var(--accent-marine-light)',
                  }}
                >
                  {activeKey.scope === 'global' ? 'GLOBAL KEY' : 'BANGLADESH KEY'}
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  {activeKey.educationalLevel ? activeKey.educationalLevel.toUpperCase() : 'INTERMEDIATE'} • {activeKey.keyType === 'multichoice' ? 'MULTI-CHOICE' : 'DICHOTOMOUS'}
                </span>
              </div>

              <h2 style={{ fontSize: '1.28rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.35rem' }}>
                {language === 'bn' && activeKey.titleBn ? activeKey.titleBn : activeKey.title}
              </h2>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.55', margin: 0 }}>
                {language === 'bn' && activeKey.descriptionBn ? activeKey.descriptionBn : activeKey.description}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {(stepHistory.length > 0 || determinedSpeciesId || determinedTaxonId) && (
                <button onClick={handleStepBack} className="btn btn-secondary btn-sm" style={{ gap: '0.35rem' }}>
                  <ChevronLeft size={14} />
                  <span>{t('common.stepBack')}</span>
                </button>
              )}
              <button onClick={handleReset} className="btn btn-secondary btn-sm" style={{ gap: '0.35rem' }}>
                <RotateCcw size={13} />
                <span>{t('ident.restartKey')}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          Interactive Stepper OR Final Determination Views
      ───────────────────────────────────────────────────────────── */}
      {!determinedSpecies && !determinedTaxon ? (
        currentStep && (
          <div className="card" style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto', border: '1px solid var(--border-subtle)' }}>
            {/* Step Progress Bar & Indicators */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: activeKey.scope === 'global' ? 'var(--accent-emerald-light)' : 'var(--accent-marine-light)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {t('ident.step')} {currentStep.id} {t('ident.of')} {activeKey.steps.length}
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  {t('ident.stepInstruction')}
                </span>
              </div>

              {/* Progress bar line */}
              <div style={{ width: '100%', height: '4px', background: 'var(--bg-surface)', borderRadius: '2px', overflow: 'hidden' }}>
                <div
                  style={{
                    height: '100%',
                    width: `${((currentStep.id) / activeKey.steps.length) * 100}%`,
                    background: activeKey.scope === 'global' ? 'var(--accent-emerald)' : 'var(--accent-marine)',
                    transition: 'width 0.3s ease',
                  }}
                />
              </div>

              {/* Diagnostic character being evaluated */}
              {currentStep.character && (
                <div style={{ marginTop: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontSize: '0.92rem', fontWeight: 600 }}>
                  <Info size={15} style={{ color: activeKey.scope === 'global' ? 'var(--accent-emerald-light)' : 'var(--accent-marine-light)', flexShrink: 0 }} />
                  <span>
                    {language === 'bn' && currentStep.characterBn ? currentStep.characterBn : currentStep.character}
                  </span>
                </div>
              )}
            </div>

            {/* Couplets / Options List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {currentStep.couplets.map((couplet, idx) => {
                const leadText = language === 'bn' && couplet.leadBn ? couplet.leadBn : couplet.lead;
                const diagFeature = language === 'bn' && couplet.diagnosticFeatureBn ? couplet.diagnosticFeatureBn : couplet.diagnosticFeature;

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectCouplet(couplet)}
                    className="card card-hoverable"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      textAlign: 'left',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)',
                      cursor: 'pointer',
                      padding: '1.4rem 1.6rem',
                      borderRadius: 'var(--radius-lg)',
                      transition: 'var(--transition-normal)',
                      position: 'relative',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
                      <span
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '50%',
                          background: activeKey.scope === 'global' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(2, 132, 199, 0.2)',
                          color: activeKey.scope === 'global' ? 'var(--accent-emerald-light)' : 'var(--accent-marine-light)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.8rem',
                          fontWeight: 800,
                        }}
                      >
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span
                        style={{
                          fontSize: '0.85rem',
                          color: activeKey.scope === 'global' ? 'var(--accent-emerald-light)' : 'var(--accent-marine-light)',
                          fontWeight: 700,
                        }}
                      >
                        {diagFeature}
                      </span>
                    </div>

                    <p style={{ fontSize: '0.98rem', color: '#ffffff', lineHeight: '1.65', marginBottom: '1rem' }}>
                      {leadText}
                    </p>

                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: 'auto' }}>
                      <span>
                        {couplet.resultType === 'species'
                          ? t('ident.finalDetermination')
                          : couplet.resultType === 'taxon'
                          ? t('ident.finalTaxonDetermination')
                          : t('ident.nextCouplet')}
                      </span>
                      <ArrowRight size={13} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )
      ) : determinedSpecies ? (
        /* ─────────────────────────────────────────────────────────────
            SPECIES DETERMINATION REACHED — Verified Real Image Monograph
        ───────────────────────────────────────────────────────────── */
        <div
          className="card"
          style={{
            padding: '2.5rem 2rem',
            maxWidth: '920px',
            margin: '0 auto',
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, var(--bg-card) 100%)',
            border: '1px solid rgba(16, 185, 129, 0.35)',
            borderRadius: 'var(--radius-xl)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
          }}
        >
          {/* Header icon badge */}
          <div
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'rgba(16, 185, 129, 0.2)',
              color: 'var(--accent-emerald-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
            }}
          >
            <CheckCircle2 size={34} />
          </div>

          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <div style={{ fontSize: '0.82rem', color: 'var(--accent-emerald-light)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 800, marginBottom: '0.4rem' }}>
              {t('ident.determinationReached')}
            </div>

            <h2 style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.3rem)', fontWeight: 800, color: '#ffffff', marginBottom: '0.4rem' }}>
              <ScientificName name={determinedSpecies.scientificName} authorship={determinedSpecies.scientificNameAuthorship} />
            </h2>

            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              {determinedSpecies.commonNames.en.join(', ')}
              {determinedSpecies.commonNames.bn.length > 0 && (
                <span className="bangla-text" style={{ color: 'var(--accent-emerald-light)', fontWeight: 600, marginLeft: '0.5rem' }}>
                  ({determinedSpecies.commonNames.bn.join(', ')})
                </span>
              )}
            </p>
          </div>

          {/* Canonical Verified Real Image Presentation */}
          {displayImageUrl && (
            <div
              style={{
                position: 'relative',
                maxWidth: '680px',
                margin: '0 auto 2rem',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid var(--border-subtle)',
                background: '#090e11',
              }}
            >
              <img
                src={displayImageUrl}
                alt={determinedSpecies.scientificName}
                style={{
                  width: '100%',
                  maxHeight: '380px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />

              {/* Attribution and Verified badge overlay */}
              <div
                style={{
                  padding: '0.75rem 1rem',
                  background: 'rgba(15, 25, 29, 0.92)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-emerald-light)', fontSize: '0.78rem', fontWeight: 700 }}>
                  <ShieldCheck size={15} />
                  <span>{t('ident.verifiedSpecimen')}</span>
                </div>

                {verifiedMedia && (
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Camera size={12} />
                    <span>{verifiedMedia.photographer || 'Wikimedia Commons'}</span>
                    <span>•</span>
                    <span style={{ color: 'var(--text-secondary)' }}>{verifiedMedia.license}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Taxonomy Hierarchy Path */}
          <div style={{ maxWidth: '680px', margin: '0 auto 1.5rem', padding: '0.85rem 1.1rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700, marginBottom: '0.4rem' }}>
              {t('ident.taxonomyPath')}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <span>{determinedSpecies.taxonomy.phylum}</span>
              <span>›</span>
              <span>{determinedSpecies.taxonomy.class}</span>
              <span>›</span>
              <span>{determinedSpecies.taxonomy.order}</span>
              <span>›</span>
              <span>{determinedSpecies.taxonomy.family}</span>
              <span>›</span>
              <span style={{ fontStyle: 'italic', color: '#ffffff', fontWeight: 600 }}>{determinedSpecies.taxonomy.genus}</span>
            </div>
          </div>

          {/* Diagnostic Features Summary */}
          {determinedSpecies.morphology.diagnosticFeatures && determinedSpecies.morphology.diagnosticFeatures.length > 0 && (
            <div style={{ maxWidth: '680px', margin: '0 auto 1.75rem', textAlign: 'left' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-emerald-light)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                {t('ident.diagnosticSummary')}
              </div>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                {determinedSpecies.morphology.diagnosticFeatures.map((feat, i) => (
                  <li key={i} style={{ marginBottom: '0.35rem' }}>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Status Badges */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '0.3rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(16, 185, 129, 0.18)',
                color: 'var(--accent-emerald-light)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
              }}
            >
              IUCN: {determinedSpecies.conservation.iucnGlobalStatus || 'LC'}
            </span>

            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '0.3rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                background: determinedSpecies.bangladeshOccurrence?.present ? 'rgba(2, 132, 199, 0.18)' : 'rgba(217, 119, 6, 0.18)',
                color: determinedSpecies.bangladeshOccurrence?.present ? 'var(--accent-marine-light)' : 'var(--accent-amber)',
                border: determinedSpecies.bangladeshOccurrence?.present ? '1px solid rgba(2, 132, 199, 0.4)' : '1px solid rgba(217, 119, 6, 0.4)',
              }}
            >
              {determinedSpecies.bangladeshOccurrence?.present ? t('ident.nativeNotice') : t('ident.extralimitalNotice')}
            </span>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
            <Link to={`/species/${determinedSpecies.id}`} className="btn btn-primary" style={{ gap: '0.45rem', padding: '0.75rem 1.4rem' }}>
              <span>{t('ident.viewProfile')}</span>
              <ExternalLink size={16} />
            </Link>
            <button onClick={handleStepBack} className="btn btn-secondary" style={{ gap: '0.35rem' }}>
              <ChevronLeft size={15} />
              <span>{t('common.stepBack')}</span>
            </button>
            <button onClick={handleReset} className="btn btn-secondary" style={{ gap: '0.35rem' }}>
              <RotateCcw size={15} />
              <span>{t('common.identifyAnother')}</span>
            </button>
          </div>
        </div>
      ) : determinedTaxon ? (
        /* ─────────────────────────────────────────────────────────────
            HIGHER TAXON DETERMINATION REACHED — Phylum, Class, Order
        ───────────────────────────────────────────────────────────── */
        <div
          className="card"
          style={{
            padding: '2.5rem 2rem',
            maxWidth: '920px',
            margin: '0 auto',
            background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.12) 0%, var(--bg-card) 100%)',
            border: '1px solid rgba(2, 132, 199, 0.35)',
            borderRadius: 'var(--radius-xl)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
          }}
        >
          {/* Header icon badge */}
          <div
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'rgba(2, 132, 199, 0.2)',
              color: 'var(--accent-marine-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
            }}
          >
            <Compass size={34} />
          </div>

          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <div style={{ fontSize: '0.82rem', color: 'var(--accent-marine-light)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 800, marginBottom: '0.4rem' }}>
              {t('ident.taxonIdentified')}
            </div>

            <div style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-sm)', background: 'rgba(2, 132, 199, 0.25)', color: 'var(--accent-marine-light)', marginBottom: '0.6rem' }}>
              {determinedTaxon.rank}
            </div>

            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#ffffff', marginBottom: '0.4rem' }}>
              <span style={{ fontStyle: determinedTaxon.rank === 'genus' || determinedTaxon.rank === 'species' ? 'italic' : 'normal' }}>
                {determinedTaxon.scientificName}
              </span>
            </h2>

            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              {determinedTaxon.commonNameEn || ''}
              {determinedTaxon.commonNameBn && (
                <span className="bangla-text" style={{ color: 'var(--accent-marine-light)', fontWeight: 600, marginLeft: '0.5rem' }}>
                  ({determinedTaxon.commonNameBn})
                </span>
              )}
            </p>
          </div>

          {/* Diagnostic morphology text */}
          {determinedTaxon.description && (
            <div style={{ maxWidth: '700px', margin: '0 auto 1.75rem', padding: '1.25rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', lineHeight: '1.65', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-marine-light)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
                {t('ident.diagnosticSummary')}
              </div>
              <p style={{ margin: 0 }}>{determinedTaxon.description}</p>
            </div>
          )}

          {/* Representative Species in BiotaElite */}
          {representativeTaxonSpecies.length > 0 && (
            <div style={{ maxWidth: '820px', margin: '0 auto 2rem' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--accent-marine-light)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.9rem', textAlign: 'center' }}>
                {t('ident.representativeSpecies')} ({representativeTaxonSpecies.length})
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem' }}>
                {representativeTaxonSpecies.map((rep) => {
                  const repMedia = rep.media?.find((m) => m.verificationStatus === 'verified' && (m.imageUrl || m.url));
                  const repImg = repMedia ? repMedia.imageUrl || repMedia.url : '';

                  return (
                    <Link
                      key={rep.id}
                      to={`/species/${rep.id}`}
                      className="card card-hoverable"
                      style={{
                        padding: '0.85rem',
                        textDecoration: 'none',
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-md)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                      }}
                    >
                      {repImg ? (
                        <img
                          src={repImg}
                          alt={rep.scientificName}
                          style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: 'var(--radius-sm)',
                            objectFit: 'cover',
                            flexShrink: 0,
                          }}
                        />
                      ) : (
                        <div style={{ width: '56px', height: '56px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', flexShrink: 0 }}>
                          <BookOpen size={20} />
                        </div>
                      )}

                      <div style={{ overflow: 'hidden' }}>
                        <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff', fontStyle: 'italic', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {rep.scientificName}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {rep.commonNames.en[0] || ''}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
            <Link to={`/taxonomy/${determinedTaxon.scientificName.toLowerCase()}`} className="btn btn-primary" style={{ gap: '0.45rem', padding: '0.75rem 1.4rem' }}>
              <span>{t('ident.viewTaxonHub')}</span>
              <ExternalLink size={16} />
            </Link>
            <button onClick={handleStepBack} className="btn btn-secondary" style={{ gap: '0.35rem' }}>
              <ChevronLeft size={15} />
              <span>{t('common.stepBack')}</span>
            </button>
            <button onClick={handleReset} className="btn btn-secondary" style={{ gap: '0.35rem' }}>
              <RotateCcw size={15} />
              <span>{t('common.identifyAnother')}</span>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
