// src/components/zoology/DichotomousKeyEngine.tsx
// High-Performance Interactive Dichotomous Identification Engine for BiotaElite 2.0
// Reuses canonical SEED_IDENTIFICATION_KEYS and SEED_SPECIES without duplication

import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useLanguage } from '../../context/LanguageContext';
import type { KeyScope, KeyStepOption, IdentificationKey } from '../../types/biodiversity';
import {
  KeyRound,
  CheckCircle2,
  ArrowRight,
  RotateCcw,
  ChevronLeft,
  Globe,
  MapPin,
  Layers,
  Sparkles
} from 'lucide-react';

interface Props {
  initialKeyId?: string;
}

export const DichotomousKeyEngine: React.FC<Props> = ({ initialKeyId }) => {
  const { identKeys, getSpeciesById, getTaxonById, species } = useBiodiversity();
  const { language } = useLanguage();

  // Active Key Selection & Scoping
  const [scopeFilter, setScopeFilter] = useState<KeyScope | 'all'>('all');
  const [selectedKeyId, setSelectedKeyId] = useState<string>(initialKeyId || identKeys[0]?.id || '');
  
  // Interactive Traversal State
  const [currentStepId, setCurrentStepId] = useState<number>(1);
  const [stepHistory, setStepHistory] = useState<number[]>([]);
  const [pathBreadcrumb, setPathBreadcrumb] = useState<Array<{ stepId: number; title: string; choiceLabel: string }>>([]);
  const [determinedSpeciesId, setDeterminedSpeciesId] = useState<string | null>(null);
  const [determinedTaxonId, setDeterminedTaxonId] = useState<string | null>(null);
  const [activeRationale, setActiveRationale] = useState<{ en?: string; bn?: string }>({});

  // Sync if initialKeyId prop changes
  useEffect(() => {
    if (initialKeyId && initialKeyId !== selectedKeyId) {
      setSelectedKeyId(initialKeyId);
      resetKeyEngine();
    }
  }, [initialKeyId]);

  // Filtered keys by scope
  const availableKeys = useMemo(() => {
    return identKeys.filter((k) => {
      return scopeFilter === 'all' || k.scope === scopeFilter;
    });
  }, [identKeys, scopeFilter]);

  // Active Key resolution
  const activeKey: IdentificationKey | undefined = useMemo(() => {
    return identKeys.find((k) => k.id === selectedKeyId) || availableKeys[0] || identKeys[0];
  }, [identKeys, selectedKeyId, availableKeys]);

  // Current Step resolution
  const currentStep = useMemo(() => {
    if (!activeKey) return undefined;
    return activeKey.steps.find((s) => s.id === currentStepId) || activeKey.steps[0];
  }, [activeKey, currentStepId]);

  // Progress metrics
  const totalStepsInKey = activeKey?.steps.length || 1;
  const progressPercent = Math.min(100, Math.round(((stepHistory.length + (determinedSpeciesId || determinedTaxonId ? 1 : 0.5)) / totalStepsInKey) * 100));

  // Reset Engine
  const resetKeyEngine = () => {
    setCurrentStepId(1);
    setStepHistory([]);
    setPathBreadcrumb([]);
    setDeterminedSpeciesId(null);
    setDeterminedTaxonId(null);
    setActiveRationale({});
  };

  // Switch Key
  const handleKeySelect = (keyId: string) => {
    setSelectedKeyId(keyId);
    resetKeyEngine();
  };

  // Branch Selection handler
  const handleOptionSelect = (option: KeyStepOption, index: number) => {
    const choiceLabel = `Choice ${String.fromCharCode(65 + index)}: ${option.diagnosticFeature || option.lead.substring(0, 40)}...`;
    const stepTitle: string = currentStep
      ? ((language === 'bn' ? currentStep.titleBn || currentStep.title : currentStep.title) || `Step ${currentStepId}`)
      : `Step ${currentStepId}`;
    
    setPathBreadcrumb((prev) => [
      ...prev,
      {
        stepId: currentStepId,
        title: stepTitle,
        choiceLabel
      }
    ]);

    if (option.rationaleEn || option.rationaleBn) {
      setActiveRationale({ en: option.rationaleEn, bn: option.rationaleBn });
    }

    if (option.resultType === 'species' && option.speciesId) {
      setStepHistory((prev) => [...prev, currentStepId]);
      setDeterminedSpeciesId(option.speciesId);
      setDeterminedTaxonId(null);
    } else if (option.resultType === 'taxon' && option.taxonId) {
      setStepHistory((prev) => [...prev, currentStepId]);
      setDeterminedTaxonId(option.taxonId);
      setDeterminedSpeciesId(null);
    } else if (option.resultType === 'next_step' && option.nextStepId) {
      setStepHistory((prev) => [...prev, currentStepId]);
      setCurrentStepId(option.nextStepId);
    }
  };

  // Step Back
  const handleStepBack = () => {
    if (determinedSpeciesId || determinedTaxonId) {
      setDeterminedSpeciesId(null);
      setDeterminedTaxonId(null);
      if (pathBreadcrumb.length > 0) {
        setPathBreadcrumb((prev) => prev.slice(0, -1));
      }
      return;
    }
    if (stepHistory.length > 0) {
      const prevStep = stepHistory[stepHistory.length - 1];
      setStepHistory((prev) => prev.slice(0, -1));
      setPathBreadcrumb((prev) => prev.slice(0, -1));
      setCurrentStepId(prevStep);
    }
  };

  // Resolved endpoint entities
  const determinedSpecies = determinedSpeciesId ? getSpeciesById(determinedSpeciesId) : null;
  const determinedTaxon = determinedTaxonId ? getTaxonById(determinedTaxonId) : null;

  // Verified photo for determined species
  const verifiedPhoto = useMemo(() => {
    if (!determinedSpecies) return null;
    return determinedSpecies.media?.find(
      (m) => m.verificationStatus === 'verified' && Boolean(m.imageUrl || m.url)
    );
  }, [determinedSpecies]);

  // Representative species if resolved to taxon
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
      .slice(0, 4);
  }, [determinedTaxon, species]);

  return (
    <div className="dichotomous-engine-container" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Engine Control Bar: Key Selector & Filters */}
      <div
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: 'var(--radius-md)', background: 'var(--accent-emerald-subtle)', color: 'var(--accent-emerald-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <KeyRound size={18} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', fontWeight: 700 }}>
                {language === 'bn' ? 'সক্রিয় শনাক্তকরণ কুঞ্জি' : 'Active Identification Key'}
              </div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                {activeKey ? (language === 'bn' ? activeKey.titleBn || activeKey.title : activeKey.title) : 'Select a Key'}
              </h2>
            </div>
          </div>

          {/* Scope Badge & Restart Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            {activeKey && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.3rem 0.65rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  background: activeKey.scope === 'global' ? 'rgba(59, 130, 246, 0.15)' : 'rgba(16, 185, 129, 0.15)',
                  color: activeKey.scope === 'global' ? '#60a5fa' : 'var(--accent-emerald-light)',
                  border: activeKey.scope === 'global' ? '1px solid rgba(59, 130, 246, 0.3)' : '1px solid rgba(16, 185, 129, 0.3)',
                }}
              >
                {activeKey.scope === 'global' ? <Globe size={13} /> : <MapPin size={13} />}
                <span>{activeKey.scope === 'global' ? (language === 'bn' ? 'বৈশ্বিক কুঞ্জি' : 'Global Key') : (language === 'bn' ? 'বাংলাদেশ কুঞ্জি' : 'Bangladesh Key')}</span>
              </span>
            )}

            <button
              onClick={resetKeyEngine}
              className="btn btn-secondary btn-sm"
              title="Restart current key"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', padding: '0.35rem 0.65rem', fontSize: '0.75rem' }}
            >
              <RotateCcw size={13} />
              <span>{language === 'bn' ? 'পুনরারম্ভ' : 'Restart'}</span>
            </button>
          </div>
        </div>

        {/* Quick Key Selection Dropdown with Scope Filter */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem', fontWeight: 600 }}>
              {language === 'bn' ? 'কুঞ্জির আওতা (Scope)' : 'Key Geographic Scope'}
            </label>
            <select
              value={scopeFilter}
              onChange={(e) => setScopeFilter(e.target.value as any)}
              className="form-select"
              style={{ width: '100%', fontSize: '0.85rem', padding: '0.45rem 0.75rem' }}
            >
              <option value="all">{language === 'bn' ? 'সকল আওতা (All Scopes)' : 'All Scopes'}</option>
              <option value="global">{language === 'bn' ? 'বৈশ্বিক কুঞ্জি (Global)' : 'Global Keys'}</option>
              <option value="bangladesh">{language === 'bn' ? 'বাংলাদেশ কুঞ্জি (Bangladesh)' : 'Bangladesh Regional'}</option>
            </select>
          </div>

          <div style={{ gridColumn: 'span 2' }}>
            <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem', fontWeight: 600 }}>
              {language === 'bn' ? 'শনাক্তকরণ কুঞ্জি নির্বাচন করুন' : 'Select Identification Key'}
            </label>
            <select
              value={selectedKeyId}
              onChange={(e) => handleKeySelect(e.target.value)}
              className="form-select"
              style={{ width: '100%', fontSize: '0.85rem', padding: '0.45rem 0.75rem' }}
            >
              {availableKeys.map((k) => (
                <option key={k.id} value={k.id}>
                  [{k.scope.toUpperCase()}] {language === 'bn' ? k.titleBn || k.title : k.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Progress Bar & Navigation Breadcrumbs */}
      <div style={{ background: 'rgba(15, 25, 29, 0.7)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '0.85rem 1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.8rem' }}>
          <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>
            {language === 'bn' ? 'কুঞ্জির অগ্রগতি' : 'Key Traversal Progress'}: {progressPercent}%
          </span>
          <span style={{ color: 'var(--text-secondary)' }}>
            {language === 'bn' ? 'ধাপ' : 'Step'} {currentStepId} / {totalStepsInKey}
          </span>
        </div>
        
        <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden', marginBottom: '0.75rem' }}>
          <div
            style={{
              width: `${progressPercent}%`,
              height: '100%',
              background: 'linear-gradient(90deg, var(--accent-emerald) 0%, #3b82f6 100%)',
              transition: 'width 0.3s ease',
            }}
          />
        </div>

        {/* Trail Breadcrumbs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap', fontSize: '0.78rem' }}>
          <span style={{ color: 'var(--text-muted)' }}>{language === 'bn' ? 'পথ' : 'Path'}:</span>
          <span
            onClick={resetKeyEngine}
            style={{ cursor: 'pointer', color: stepHistory.length === 0 ? 'var(--accent-emerald-light)' : 'var(--text-secondary)', fontWeight: 600 }}
          >
            Start
          </span>
          {pathBreadcrumb.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <span style={{ color: 'var(--text-muted)' }}>→</span>
              <span style={{ color: idx === pathBreadcrumb.length - 1 ? 'var(--accent-emerald-light)' : 'var(--text-muted)' }}>
                {crumb.title}
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Main Interactive Stage */}
      {determinedSpeciesId || determinedTaxonId ? (
        /* DETERMINATION RESULT ENDPOINT CARD */
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, var(--bg-card) 100%)',
            border: '2px solid var(--accent-emerald)',
            borderRadius: 'var(--radius-xl)',
            padding: '2rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-emerald-light)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
            <CheckCircle2 size={20} />
            <span>{language === 'bn' ? 'চূড়ান্ত প্রজাতি শনাক্তকরণ সম্পন্ন' : 'Definitive Identification Endpoint Reached'}</span>
          </div>

          {determinedSpecies && (
            <div style={{ display: 'grid', gridTemplateColumns: verifiedPhoto ? 'repeat(auto-fit, minmax(280px, 1fr))' : '1fr', gap: '1.5rem', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                  {determinedSpecies.taxonomy.phylum} • {determinedSpecies.taxonomy.class} • {determinedSpecies.taxonomy.order}
                </div>
                <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem', fontStyle: 'italic' }}>
                  {determinedSpecies.scientificName}
                </h3>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  {determinedSpecies.scientificNameAuthorship}
                </div>

                {/* Common Names */}
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                  {determinedSpecies.commonNames.en?.[0] && (
                    <span style={{ padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-sm)', background: 'rgba(255,255,255,0.06)', color: 'var(--text-primary)', fontSize: '0.85rem', fontWeight: 600 }}>
                      🇬🇧 {determinedSpecies.commonNames.en[0]}
                    </span>
                  )}
                  {determinedSpecies.commonNames.bn?.[0] && (
                    <span style={{ padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-sm)', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-emerald-light)', fontSize: '0.85rem', fontWeight: 600 }}>
                      🇧🇩 {determinedSpecies.commonNames.bn[0]}
                    </span>
                  )}
                </div>

                {/* Diagnostic Rationale */}
                <div style={{ background: 'rgba(0,0,0,0.25)', borderLeft: '3px solid var(--accent-emerald)', padding: '0.85rem 1rem', borderRadius: '0 var(--radius-md) var(--radius-md) 0', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-emerald-light)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    {language === 'bn' ? 'শনাক্তকারী বৈশিষ্ট্য ও যুক্তি' : 'Diagnostic Key Determination'}
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
                    {language === 'bn' && activeRationale.bn
                      ? activeRationale.bn
                      : activeRationale.en || determinedSpecies.morphology.diagnosticFeatures[0] || determinedSpecies.morphology.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <Link
                    to={`/species/${determinedSpecies.id}`}
                    className="btn btn-primary"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.25rem' }}
                  >
                    <span>{language === 'bn' ? 'সম্পূর্ণ প্রজাতি মনোগ্রাফ দেখুন' : 'View Species Profile'}</span>
                    <ArrowRight size={16} />
                  </Link>

                  <button
                    onClick={handleStepBack}
                    className="btn btn-secondary"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                  >
                    <ChevronLeft size={16} />
                    <span>{language === 'bn' ? 'পূর্ববর্তী ধাপে ফিরুন' : 'Previous Step'}</span>
                  </button>

                  <button
                    onClick={resetKeyEngine}
                    className="btn btn-secondary"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                  >
                    <RotateCcw size={15} />
                    <span>{language === 'bn' ? 'নতুন শনাক্তকরণ শুরু করুন' : 'Restart Key'}</span>
                  </button>
                </div>
              </div>

              {/* Verified Specimen Photo */}
              {verifiedPhoto && (
                <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-subtle)', background: '#000000' }}>
                  <img
                    src={verifiedPhoto.imageUrl || verifiedPhoto.url}
                    alt={determinedSpecies.scientificName}
                    style={{ width: '100%', maxHeight: '320px', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ padding: '0.6rem 0.85rem', fontSize: '0.72rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-card)' }}>
                    <span>{verifiedPhoto.photographer} • {verifiedPhoto.license}</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {determinedTaxon && (
            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                Rank: {determinedTaxon.rank.toUpperCase()}
              </div>
              <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
                {determinedTaxon.scientificName} {language === 'bn' ? `(${determinedTaxon.commonNameBn || ''})` : `(${determinedTaxon.commonNameEn || ''})`}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', maxWidth: '800px' }}>
                {determinedTaxon.description}
              </p>

              {/* Representative Species in this Taxon */}
              {representativeTaxonSpecies.length > 0 && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                    {language === 'bn' ? 'প্রতিনিধি প্রজাতিসমূহ' : 'Representative Canonical Species'}:
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                    {representativeTaxonSpecies.map((sp) => (
                      <Link
                        key={sp.id}
                        to={`/species/${sp.id}`}
                        style={{
                          background: 'var(--bg-surface)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: 'var(--radius-md)',
                          padding: '0.75rem',
                          textDecoration: 'none',
                          color: 'inherit',
                          display: 'block',
                          transition: 'var(--transition-fast)',
                        }}
                      >
                        <div style={{ fontStyle: 'italic', fontWeight: 700, color: '#ffffff', fontSize: '0.9rem' }}>
                          {sp.scientificName}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                          {sp.commonNames.en?.[0]}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button onClick={handleStepBack} className="btn btn-secondary">
                  <ChevronLeft size={16} />
                  <span>{language === 'bn' ? 'পূর্ববর্তী ধাপে ফিরুন' : 'Previous Step'}</span>
                </button>
                <button onClick={resetKeyEngine} className="btn btn-secondary">
                  <RotateCcw size={15} />
                  <span>{language === 'bn' ? 'পুনরারম্ভ' : 'Restart'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      ) : currentStep ? (
        /* COUPLET QUESTION CARD */
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-xl)',
            padding: '1.75rem',
          }}
        >
          {/* Step Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-emerald-light)' }}>
                {language === 'bn' ? `ধাপ ${currentStep.id}` : `Step ${currentStep.id} of ${totalStepsInKey}`}
              </span>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', margin: '0.25rem 0' }}>
                {language === 'bn' ? currentStep.titleBn || currentStep.title : currentStep.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', margin: 0 }}>
                {language === 'bn' ? currentStep.characterBn || currentStep.character : currentStep.character}
              </p>
            </div>

            {stepHistory.length > 0 && (
              <button
                onClick={handleStepBack}
                className="btn btn-secondary btn-sm"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
              >
                <ChevronLeft size={15} />
                <span>{language === 'bn' ? 'পেছনে ফিরুন' : 'Back to Previous'}</span>
              </button>
            )}
          </div>

          {/* Couplet Choices List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {currentStep.couplets.map((couplet, idx) => {
              const choiceLetter = String.fromCharCode(65 + idx);
              return (
                <div
                  key={idx}
                  onClick={() => handleOptionSelect(couplet, idx)}
                  style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.25rem 1.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-emerald)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: 'var(--radius-md)',
                        background: 'rgba(16, 185, 129, 0.15)',
                        color: 'var(--accent-emerald-light)',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontSize: '1rem',
                        flexShrink: 0,
                      }}
                    >
                      {choiceLetter}
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-emerald-light)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.35rem' }}>
                        {language === 'bn' ? couplet.diagnosticFeatureBn || couplet.diagnosticFeature : couplet.diagnosticFeature}
                      </div>

                      <p style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.6', margin: '0 0 0.75rem 0' }}>
                        {language === 'bn' ? couplet.leadBn || couplet.lead : couplet.lead}
                      </p>

                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', fontWeight: 600, color: couplet.resultType === 'species' ? 'var(--accent-emerald-light)' : '#60a5fa' }}>
                        {couplet.resultType === 'next_step' && (
                          <>
                            <span>{language === 'bn' ? `পরবর্তী ধাপ ${couplet.nextStepId}-এ যান` : `Proceeds to Step ${couplet.nextStepId}`}</span>
                            <ArrowRight size={14} />
                          </>
                        )}
                        {couplet.resultType === 'species' && (
                          <>
                            <Sparkles size={14} />
                            <span>{language === 'bn' ? 'চূড়ান্ত প্রজাতি নির্ধারণ' : 'Resolves to Species Determination'}</span>
                          </>
                        )}
                        {couplet.resultType === 'taxon' && (
                          <>
                            <Layers size={14} />
                            <span>{language === 'bn' ? 'ট্যাক্সন নির্ধারণ' : 'Resolves to Higher Taxon'}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
          {language === 'bn' ? 'কোনো ধাপ পাওয়া যায়নি।' : 'No step data found.'}
        </div>
      )}
    </div>
  );
};
