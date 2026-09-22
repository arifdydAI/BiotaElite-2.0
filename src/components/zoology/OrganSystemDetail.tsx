// src/components/zoology/OrganSystemDetail.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ANATOMY_TOPICS,
  PHYSIOLOGY_TOPICS
} from '../../data/anatomyPhysiologyData';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useLanguage } from '../../context/LanguageContext';
import {
  Activity,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const OrganSystemDetail: React.FC = () => {
  const { species } = useBiodiversity();
  const { language } = useLanguage();
  const isBn = language === 'bn';

  const [activeDomain, setActiveDomain] = useState<'anatomy' | 'physiology'>('anatomy');
  const [selectedAnatId, setSelectedAnatId] = useState<string>(ANATOMY_TOPICS[0].id);
  const [selectedPhysId, setSelectedPhysId] = useState<string>(PHYSIOLOGY_TOPICS[0].id);

  const currentAnat = ANATOMY_TOPICS.find(a => a.id === selectedAnatId) || ANATOMY_TOPICS[0];
  const currentPhys = PHYSIOLOGY_TOPICS.find(p => p.id === selectedPhysId) || PHYSIOLOGY_TOPICS[0];

  return (
    <div className="organ-system-module">
      {/* Top Banner */}
      <div className="card" style={{ marginBottom: '2rem', background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.25) 0%, rgba(15, 23, 42, 0.6) 100%)', border: '1px solid var(--border-accent)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <Activity className="text-accent" size={26} />
          <span className="badge badge-accent" style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>
            {isBn ? 'প্রাণী শারীরস্থান ও শারীরবিদ্যা' : 'ANIMAL ANATOMY & PHYSIOLOGY'}
          </span>
          <span className="badge" style={{ fontSize: '0.72rem', background: 'rgba(255,255,255,0.08)', color: 'var(--text-secondary)' }}>
            {isBn ? `${ANATOMY_TOPICS.length}টি শারীরস্থানিক তন্ত্র • ${PHYSIOLOGY_TOPICS.length}টি শারীরবৃত্তীয় প্রক্রিয়া` : `${ANATOMY_TOPICS.length} Anatomical Systems • ${PHYSIOLOGY_TOPICS.length} Physiological Processes`}
          </span>
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
          {isBn ? 'শারীরস্থান ও শারীরবৃত্তীয় প্রক্রিয়া' : 'Anatomy & Physiology'}
        </h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '900px', lineHeight: 1.6 }}>
          {isBn
            ? '১০টি প্রধান শারীরস্থানিক তন্ত্র (ত্বক, কঙ্কাল, পেশি, পরিপাক, শ্বসন, সংবহন, রেচন, স্নায়ু, প্রজনন ও সংবেদী অঙ্গ) এবং ৯টি মৌলিক শারীরবৃত্তীয় নিয়ন্ত্রণ প্রক্রিয়ার (অভিস্রবণ, তাপ, পরিপাক, শ্বসন, সংবহন, রেচন, স্নায়বিক সমন্বয়, জনন ও হোমিওস্ট্যাসিস) প্রামাণ্য বিশ্লেষণ।'
            : 'Comprehensive comparative exploration of 10 major anatomical organ systems and 9 core homeostatic physiological processes spanning osmoregulation, thermoregulation, digestion, gas transport, cardiovascular hemodynamics, and neuroendocrine integration across animal phyla.'}
        </p>
      </div>

      {/* Domain Switcher */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.75rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
        <button
          onClick={() => setActiveDomain('anatomy')}
          className={`btn ${activeDomain === 'anatomy' ? 'btn-primary' : 'btn-ghost'}`}
          style={{ fontSize: '0.88rem', padding: '0.5rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <span>{isBn ? 'শারীরস্থান (Anatomy)' : 'Morphological Anatomy'}</span>
          <span className="badge" style={{ fontSize: '0.7rem', padding: '0.15rem 0.45rem', background: activeDomain === 'anatomy' ? 'rgba(255,255,255,0.2)' : 'var(--bg-card)' }}>
            {ANATOMY_TOPICS.length}
          </span>
        </button>
        <button
          onClick={() => setActiveDomain('physiology')}
          className={`btn ${activeDomain === 'physiology' ? 'btn-primary' : 'btn-ghost'}`}
          style={{ fontSize: '0.88rem', padding: '0.5rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <span>{isBn ? 'শারীরবৃত্তীয় প্রক্রিয়া (Physiology)' : 'Physiological Mechanisms'}</span>
          <span className="badge" style={{ fontSize: '0.7rem', padding: '0.15rem 0.45rem', background: activeDomain === 'physiology' ? 'rgba(255,255,255,0.2)' : 'var(--bg-card)' }}>
            {PHYSIOLOGY_TOPICS.length}
          </span>
        </button>
      </div>

      {/* DOMAIN 1: ANATOMY */}
      {activeDomain === 'anatomy' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(260px, 320px) 1fr', gap: '1.75rem' }}>
          {/* Topic Selector */}
          <div className="card">
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem' }}>
              {isBn ? `শারীরস্থানিক বিষয় নির্বাচন (${ANATOMY_TOPICS.length})` : `Select Anatomical System (${ANATOMY_TOPICS.length})`}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {ANATOMY_TOPICS.map(topic => {
                const isSelected = topic.id === currentAnat.id;
                return (
                  <button
                    key={topic.id}
                    onClick={() => setSelectedAnatId(topic.id)}
                    style={{
                      textAlign: 'left',
                      padding: '0.7rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: isSelected ? 'var(--bg-accent-subtle)' : 'var(--bg-surface)',
                      border: isSelected ? '1px solid var(--border-accent)' : '1px solid var(--border-color)',
                      color: isSelected ? 'var(--text-accent)' : 'var(--text-primary)',
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      fontWeight: isSelected ? 700 : 500,
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {isBn ? topic.titleBn : topic.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Topic Detail */}
          <div>
            <div className="card" style={{ borderLeft: '4px solid var(--border-accent)', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                {isBn ? currentAnat.titleBn : currentAnat.title}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                {isBn ? currentAnat.overviewBn : currentAnat.overviewEn}
              </p>
            </div>

            {/* Main Components Grid */}
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                {isBn ? 'প্রধান কাঠামোগত উপাদান ও কাজ' : 'Key Anatomical Subunits & Functions'}
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem' }}>
                {currentAnat.mainComponents.map((comp, idx) => (
                  <div key={idx} style={{ background: 'var(--bg-surface)', padding: '0.85rem', borderRadius: 'var(--radius-sm)', borderTop: '2px solid var(--border-accent)' }}>
                    <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-accent)', margin: '0 0 0.35rem 0' }}>
                      {isBn ? comp.nameBn : comp.name}
                    </h4>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                      {isBn ? comp.functionBn : comp.functionEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Animal Group Variations & Canonical Species Links */}
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                {isBn ? 'বিভিন্ন প্রাণী দলের অঙ্গসংস্থানিক বৈচিত্র্য' : 'Taxon Group Morphological Variations'}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {currentAnat.structuralVariations.map((v, idx) => {
                  const spRecord = v.exampleSpeciesId ? species.find(s => s.id === v.exampleSpeciesId) : null;
                  return (
                    <div key={idx} style={{ background: 'var(--bg-surface)', padding: '0.85rem', borderRadius: 'var(--radius-sm)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                        <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                          {v.taxonGroup}
                        </span>
                        {spRecord && (
                          <Link
                            to={`/species/${spRecord.id}`}
                            style={{ fontSize: '0.75rem', color: 'var(--text-accent)', display: 'flex', alignItems: 'center', gap: '0.2rem' }}
                          >
                            {spRecord.scientificName} <ArrowRight size={12} />
                          </Link>
                        )}
                      </div>
                      <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                        {isBn ? v.adaptationBn : v.adaptationEn}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Evolutionary Notes */}
            <div className="card" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Sparkles size={16} className="text-accent" />
                {isBn ? 'বিবর্তনীয় রূপান্তর নোট:' : 'Evolutionary Transformation Trajectory:'}
              </h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                {isBn ? currentAnat.evolutionaryNotesBn : currentAnat.evolutionaryNotesEn}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* DOMAIN 2: PHYSIOLOGY */}
      {activeDomain === 'physiology' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(260px, 320px) 1fr', gap: '1.75rem' }}>
          {/* Topic Selector */}
          <div className="card">
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem' }}>
              {isBn ? `শারীরবৃত্তীয় বিষয় নির্বাচন (${PHYSIOLOGY_TOPICS.length})` : `Select Physiological Process (${PHYSIOLOGY_TOPICS.length})`}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {PHYSIOLOGY_TOPICS.map(topic => {
                const isSelected = topic.id === currentPhys.id;
                return (
                  <button
                    key={topic.id}
                    onClick={() => setSelectedPhysId(topic.id)}
                    style={{
                      textAlign: 'left',
                      padding: '0.7rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: isSelected ? 'var(--bg-accent-subtle)' : 'var(--bg-surface)',
                      border: isSelected ? '1px solid var(--border-accent)' : '1px solid var(--border-color)',
                      color: isSelected ? 'var(--text-accent)' : 'var(--text-primary)',
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      fontWeight: isSelected ? 700 : 500,
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {isBn ? topic.titleBn : topic.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detail */}
          <div>
            <div className="card" style={{ borderLeft: '4px solid #38bdf8', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                {isBn ? currentPhys.titleBn : currentPhys.title}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                {isBn ? currentPhys.overviewBn : currentPhys.overviewEn}
              </p>
            </div>

            {/* Key Mechanisms */}
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                {isBn ? 'শারীরবৃত্তীয় কার্যপদ্ধতি ও ধাপসমূহ' : 'Operational Stages & Biophysical Mechanisms'}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {currentPhys.keyMechanisms.map((mech, idx) => (
                  <div key={idx} style={{ background: 'var(--bg-surface)', padding: '0.85rem', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid #38bdf8' }}>
                    <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#38bdf8', margin: '0 0 0.25rem 0' }}>
                      {isBn ? mech.stageBn : mech.stage}
                    </h4>
                    <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                      {isBn ? mech.descriptionBn : mech.descriptionEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparative Variations with Species Profile links */}
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                {isBn ? 'তুলনামূলক হোমওস্ট্যাটিক অভিযোজন ও উদাহরণ' : 'Comparative Homeostatic Variations'}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {currentPhys.comparativeVariations.map((v, idx) => {
                  const spRecord = v.exampleSpeciesId ? species.find(s => s.id === v.exampleSpeciesId) : null;
                  return (
                    <div key={idx} style={{ background: 'var(--bg-surface)', padding: '0.85rem', borderRadius: 'var(--radius-sm)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                        <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                          {v.group}
                        </span>
                        {spRecord && (
                          <Link
                            to={`/species/${spRecord.id}`}
                            style={{ fontSize: '0.75rem', color: 'var(--text-accent)', display: 'flex', alignItems: 'center', gap: '0.2rem' }}
                          >
                            {spRecord.scientificName} <ArrowRight size={12} />
                          </Link>
                        )}
                      </div>
                      <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                        {isBn ? v.mechanismBn : v.mechanismEn}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Homeostatic Significance */}
            <div className="card" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                {isBn ? 'হোমওস্ট্যাসিস তাৎপর্য:' : 'Homeostatic Survival Significance:'}
              </h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                {isBn ? currentPhys.homeostaticSignificanceBn : currentPhys.homeostaticSignificanceEn}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
