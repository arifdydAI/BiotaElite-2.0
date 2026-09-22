// src/components/zoology/ComparativeEngine.tsx
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  INVERTEBRATE_VS_VERTEBRATE,
  ORGAN_SYSTEM_COMPARISONS,
  FUNCTIONAL_ADAPTATIONS
} from '../../data/comparativeData';
import { ZOOLOGY_PHYLA_DATA } from '../../data/zoologyPhylaData';
import { VERTEBRATE_CLASSES_DATA } from '../../data/vertebratesData';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useLanguage } from '../../context/LanguageContext';
import {
  GitCompare,
  ArrowRight
} from 'lucide-react';

export const ComparativeEngine: React.FC = () => {
  const { species } = useBiodiversity();
  const { language } = useLanguage();
  const isBn = language === 'bn';

  const [activeSection, setActiveSection] = useState<'invert-vs-vert' | 'organ-systems' | 'custom-compare' | 'adaptations'>('invert-vs-vert');
  const [selectedSystemId, setSelectedSystemId] = useState<string>(ORGAN_SYSTEM_COMPARISONS[0]?.id || 'digestive-system');

  // Interactive 2-Group Comparator State
  const [groupA, setGroupA] = useState<string>('phylum-arthropoda');
  const [groupB, setGroupB] = useState<string>('vert-osteichthyes');

  // Available groups for comparison
  const availableGroups = useMemo(() => {
    const phyla = ZOOLOGY_PHYLA_DATA.map(p => ({
      id: p.id,
      name: `Phylum ${p.scientificName}`,
      nameBn: `পর্ব ${p.commonNameBn}`,
      type: 'Phylum',
      data: {
        bodyPlan: isBn ? p.bodyPlanOverview.bn : p.bodyPlanOverview.en,
        symmetry: p.symmetry,
        coelom: p.coelomType,
        organization: p.bodyOrganization,
        digestive: isBn ? p.anatomyAndSystems.digestive.bn : p.anatomyAndSystems.digestive.en,
        respiratory: isBn ? p.anatomyAndSystems.respiratory.bn : p.anatomyAndSystems.respiratory.en,
        circulatory: isBn ? p.anatomyAndSystems.circulatory.bn : p.anatomyAndSystems.circulatory.en,
        excretory: isBn ? p.anatomyAndSystems.excretory.bn : p.anatomyAndSystems.excretory.en,
        nervous: isBn ? p.anatomyAndSystems.nervous.bn : p.anatomyAndSystems.nervous.en,
        reproduction: isBn ? p.anatomyAndSystems.reproductive.bn : p.anatomyAndSystems.reproductive.en,
      }
    }));

    const vertClasses = VERTEBRATE_CLASSES_DATA.map(v => ({
      id: v.id,
      name: `Class ${v.className}`,
      nameBn: `শ্রেণি ${v.classBn}`,
      type: 'Vertebrate Class',
      data: {
        bodyPlan: isBn ? v.bodyForm.bn : v.bodyForm.en,
        symmetry: 'Bilateral',
        coelom: 'Eucoelomate (Enterocoely/Deuterostome)',
        organization: 'Organ-system grade',
        digestive: isBn ? v.feedingAndDigestion.bn : v.feedingAndDigestion.en,
        respiratory: isBn ? v.respiration.bn : v.respiration.en,
        circulatory: isBn ? v.circulation.bn : v.circulation.en,
        excretory: isBn ? v.excretion.bn : v.excretion.en,
        nervous: isBn ? v.nervousSystem.bn : v.nervousSystem.en,
        reproduction: isBn ? v.reproduction.bn : v.reproduction.en,
      }
    }));

    return [...phyla, ...vertClasses];
  }, [isBn]);

  const groupAData = availableGroups.find(g => g.id === groupA) || availableGroups[0];
  const groupBData = availableGroups.find(g => g.id === groupB) || availableGroups[1];

  const currentSystem = ORGAN_SYSTEM_COMPARISONS.find(s => s.id === selectedSystemId) || ORGAN_SYSTEM_COMPARISONS[0];

  return (
    <div className="comparative-engine">
      {/* Top Banner */}
      <div className="card" style={{ marginBottom: '2rem', background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.25) 0%, rgba(15, 23, 42, 0.6) 100%)', border: '1px solid var(--border-accent)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <GitCompare className="text-accent" size={26} />
          <span className="badge badge-accent" style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>
            {isBn ? 'তুলনামূলক প্রাণিবিজ্ঞান ইঞ্জিন' : 'ZOOLOGICAL COMPARISON ENGINE'}
          </span>
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
          {isBn ? 'তুলনামূলক প্রাণিবিজ্ঞান' : 'Comparative Zoology'}
        </h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '900px', lineHeight: 1.6 }}>
          {isBn
            ? 'অমেরুদণ্ডী বনাম মেরুদণ্ডী প্রাণীদের অঙ্গসংস্থানিক ও শারীরবৃত্তীয় পার্থক্য, বিভিন্ন প্রাণী পর্বের মধ্যে প্রধান অঙ্গতন্ত্রের বিবর্তন এবং বিশেষায়িত কার্যকরী অভিযোজনের বিজ্ঞানসম্মত তুলনামূলক পর্যালোচনা।'
            : 'Authoritative comparative analysis of organ system evolutionary trajectories, invertebrate vs vertebrate structural polarities, and interactive taxon-to-taxon morphological contrasts.'}
        </p>
      </div>

      {/* Module Navigation Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.75rem', flexWrap: 'wrap', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
        <button
          onClick={() => setActiveSection('invert-vs-vert')}
          className={`btn ${activeSection === 'invert-vs-vert' ? 'btn-primary' : 'btn-ghost'}`}
          style={{ fontSize: '0.85rem' }}
        >
          {isBn ? 'অমেরুদণ্ডী বনাম মেরুদণ্ডী' : 'Invertebrate vs Vertebrate'}
        </button>
        <button
          onClick={() => setActiveSection('organ-systems')}
          className={`btn ${activeSection === 'organ-systems' ? 'btn-primary' : 'btn-ghost'}`}
          style={{ fontSize: '0.85rem' }}
        >
          {isBn ? 'অঙ্গতন্ত্রের তুলনামূলক ধারা' : 'Organ System Comparisons'}
        </button>
        <button
          onClick={() => setActiveSection('custom-compare')}
          className={`btn ${activeSection === 'custom-compare' ? 'btn-primary' : 'btn-ghost'}`}
          style={{ fontSize: '0.85rem' }}
        >
          {isBn ? 'প্রাণী দল তুলনা ইঞ্জিন' : 'Interactive Group Comparator'}
        </button>
        <button
          onClick={() => setActiveSection('adaptations')}
          className={`btn ${activeSection === 'adaptations' ? 'btn-primary' : 'btn-ghost'}`}
          style={{ fontSize: '0.85rem' }}
        >
          {isBn ? 'কার্যকরী অভিযোজন' : 'Functional Adaptations'}
        </button>
      </div>

      {/* SECTION 1: INVERTEBRATE VS VERTEBRATE */}
      {activeSection === 'invert-vs-vert' && (
        <div>
          <div className="card" style={{ marginBottom: '1.5rem', borderLeft: '4px solid var(--border-accent)' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
              {isBn ? 'অমেরুদণ্ডী ও মেরুদণ্ডী প্রাণীদের তুলনামূলক মেরুত্ব' : 'Invertebrate vs Vertebrate Structural Polarity'}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
              {isBn
                ? 'প্রাণিজগতের ৯৫% এরও বেশি প্রজাতি অমেরুদণ্ডী হলেও কর্ডাটার অন্তর্গত মেরুদণ্ডী উপপর্বে অক্ষীয় অন্তঃকঙ্কাল, পৃষ্ঠীয় ফাঁপা স্নায়ুরজ্জু এবং বদ্ধ সংবহনতন্ত্রের সমন্বয়ে অনন্য শারীরিক জটিলতার সৃষ্টি হয়েছে।'
                : 'Over 95% of living animal species are non-chordate invertebrates. Vertebrates possess derived evolutionary novelties (axial endoskeleton, dorsal hollow nerve cord, closed circulation with ventral heart) supporting active locomotion and gigantism.'}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {INVERTEBRATE_VS_VERTEBRATE.map((row, idx) => (
              <div key={idx} className="card" style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: 'var(--text-accent)' }}>
                    {isBn ? row.featureBn : row.feature}
                  </h4>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Parameter #{idx + 1}</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '0.75rem' }}>
                  <div style={{ background: 'var(--bg-surface)', padding: '0.85rem', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid rgba(239, 68, 68, 0.6)' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f87171', display: 'block', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                      {isBn ? 'অমেরুদণ্ডী রূপ (Invertebrates)' : 'Invertebrate Condition'}
                    </span>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                      {isBn ? row.invertebrateStateBn : row.invertebrateStateEn}
                    </p>
                  </div>

                  <div style={{ background: 'var(--bg-surface)', padding: '0.85rem', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid rgba(34, 197, 94, 0.6)' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4ade80', display: 'block', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                      {isBn ? 'মেরুদণ্ডী রূপ (Vertebrates)' : 'Vertebrate Condition'}
                    </span>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                      {isBn ? row.vertebrateStateBn : row.vertebrateStateEn}
                    </p>
                  </div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.6rem 0.85rem', borderRadius: 'var(--radius-sm)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>{isBn ? 'বিবর্তনীয় গুরুত্ব:' : 'Evolutionary Significance:'}</strong>{' '}
                  {isBn ? row.evolutionarySignificanceBn : row.evolutionarySignificanceEn}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 2: ORGAN SYSTEM COMPARISONS */}
      {activeSection === 'organ-systems' && (
        <div>
          {/* Selector for Organ Systems */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            {ORGAN_SYSTEM_COMPARISONS.map(sys => (
              <button
                key={sys.id}
                onClick={() => setSelectedSystemId(sys.id)}
                className={`btn ${sys.id === currentSystem.id ? 'btn-primary' : 'btn-outline'}`}
                style={{ fontSize: '0.8rem', padding: '0.4rem 0.85rem' }}
              >
                {isBn ? sys.systemNameBn : sys.systemName}
              </button>
            ))}
          </div>

          {/* Current System Overview */}
          <div className="card" style={{ marginBottom: '1.5rem', borderLeft: '4px solid var(--border-accent)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              {isBn ? currentSystem.systemNameBn : currentSystem.systemName}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
              {isBn ? currentSystem.evolutionaryTrajectory.bn : currentSystem.evolutionaryTrajectory.en}
            </p>
          </div>

          {/* Detailed System Matrix Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            {currentSystem.matrix.map((item, idx) => (
              <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.4rem' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: 0, color: 'var(--text-accent)' }}>
                    {isBn ? item.groupBn : item.group}
                  </h4>
                </div>

                <div style={{ marginBottom: '0.6rem' }}>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block' }}>
                    {isBn ? 'অঙ্গসংস্থানিক কাঠামো:' : 'Anatomical Structure:'}
                  </span>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: '0.2rem 0' }}>
                    {isBn ? item.structureBn : item.structureEn}
                  </p>
                </div>

                <div style={{ marginBottom: '0.6rem' }}>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block' }}>
                    {isBn ? 'শারীরবৃত্তীয় কার্যপদ্ধতি:' : 'Physiological Mechanism:'}
                  </span>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: '0.2rem 0' }}>
                    {isBn ? item.mechanismBn : item.mechanismEn}
                  </p>
                </div>

                <div style={{ marginTop: 'auto', paddingTop: '0.5rem', borderTop: '1px solid var(--border-color)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>{isBn ? 'প্রতিনিধি ট্যাক্সা:' : 'Representative Taxa:'}</strong>{' '}
                  <span style={{ fontStyle: 'italic' }}>{item.representativeTaxa}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 3: INTERACTIVE GROUP COMPARATOR */}
      {activeSection === 'custom-compare' && (
        <div>
          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              {isBn ? 'দুটি প্রাণী দলের পাশাপাশি সরাসরি তুলনা' : 'Direct Side-by-Side Animal Group Comparator'}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '1.25rem' }}>
              {isBn
                ? 'যেকোনো দুটি প্রাণী পর্ব অথবা মেরুদণ্ডী শ্রেণির নির্বাচন করুন এবং তাদের শারীরিক সংগঠন, সংবহন, রেচন ও জননতন্ত্রের তুলনামূলক ছক পর্যবেক্ষণ করুন।'
                : 'Select any two major animal phyla or vertebrate classes to contrast their structural organization, body cavities, and vital organ systems.'}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
              {/* Group A Dropdown */}
              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                  {isBn ? 'প্রথম দল (Group A)' : 'First Animal Group (Group A)'}
                </label>
                <select
                  value={groupA}
                  onChange={e => setGroupA(e.target.value)}
                  className="input"
                  style={{ width: '100%', fontSize: '0.9rem' }}
                >
                  {availableGroups.map(g => (
                    <option key={g.id} value={g.id}>
                      {isBn ? g.nameBn : g.name} ({g.type})
                    </option>
                  ))}
                </select>
              </div>

              {/* Group B Dropdown */}
              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                  {isBn ? 'দ্বিতীয় দল (Group B)' : 'Second Animal Group (Group B)'}
                </label>
                <select
                  value={groupB}
                  onChange={e => setGroupB(e.target.value)}
                  className="input"
                  style={{ width: '100%', fontSize: '0.9rem' }}
                >
                  {availableGroups.map(g => (
                    <option key={g.id} value={g.id}>
                      {isBn ? g.nameBn : g.name} ({g.type})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="card" style={{ overflowX: 'auto', padding: 0 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
              <thead>
                <tr style={{ background: 'var(--bg-surface)', borderBottom: '2px solid var(--border-color)' }}>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'left', width: '22%', color: 'var(--text-muted)' }}>
                    {isBn ? 'তুলনামূলক বৈশিষ্ট্য' : 'Comparative Feature'}
                  </th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'left', width: '39%', color: 'var(--text-accent)' }}>
                    {isBn ? groupAData.nameBn : groupAData.name}
                  </th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'left', width: '39%', color: '#38bdf8' }}>
                    {isBn ? groupBData.nameBn : groupBData.name}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {isBn ? 'শারীরিক সংগঠন' : 'Body Organization'}
                  </td>
                  <td style={{ padding: '0.75rem 1rem', color: 'var(--text-secondary)' }}>{groupAData.data.organization}</td>
                  <td style={{ padding: '0.75rem 1rem', color: 'var(--text-secondary)' }}>{groupBData.data.organization}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.01)' }}>
                  <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {isBn ? 'প্রতিসাম্য' : 'Symmetry'}
                  </td>
                  <td style={{ padding: '0.75rem 1rem', color: 'var(--text-secondary)' }}>{groupAData.data.symmetry}</td>
                  <td style={{ padding: '0.75rem 1rem', color: 'var(--text-secondary)' }}>{groupBData.data.symmetry}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {isBn ? 'সিলোম / দেহগহ্বর' : 'Coelom Type'}
                  </td>
                  <td style={{ padding: '0.75rem 1rem', color: 'var(--text-secondary)' }}>{groupAData.data.coelom}</td>
                  <td style={{ padding: '0.75rem 1rem', color: 'var(--text-secondary)' }}>{groupBData.data.coelom}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.01)' }}>
                  <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {isBn ? 'পরিপাকতন্ত্র' : 'Digestive System'}
                  </td>
                  <td style={{ padding: '0.75rem 1rem', color: 'var(--text-secondary)' }}>{groupAData.data.digestive}</td>
                  <td style={{ padding: '0.75rem 1rem', color: 'var(--text-secondary)' }}>{groupBData.data.digestive}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {isBn ? 'শ্বসনতন্ত্র' : 'Respiratory System'}
                  </td>
                  <td style={{ padding: '0.75rem 1rem', color: 'var(--text-secondary)' }}>{groupAData.data.respiratory}</td>
                  <td style={{ padding: '0.75rem 1rem', color: 'var(--text-secondary)' }}>{groupBData.data.respiratory}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.01)' }}>
                  <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {isBn ? 'সংবহনতন্ত্র' : 'Circulatory System'}
                  </td>
                  <td style={{ padding: '0.75rem 1rem', color: 'var(--text-secondary)' }}>{groupAData.data.circulatory}</td>
                  <td style={{ padding: '0.75rem 1rem', color: 'var(--text-secondary)' }}>{groupBData.data.circulatory}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {isBn ? 'রেচনতন্ত্র' : 'Excretory System'}
                  </td>
                  <td style={{ padding: '0.75rem 1rem', color: 'var(--text-secondary)' }}>{groupAData.data.excretory}</td>
                  <td style={{ padding: '0.75rem 1rem', color: 'var(--text-secondary)' }}>{groupBData.data.excretory}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.01)' }}>
                  <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {isBn ? 'স্নায়ুতন্ত্র' : 'Nervous System'}
                  </td>
                  <td style={{ padding: '0.75rem 1rem', color: 'var(--text-secondary)' }}>{groupAData.data.nervous}</td>
                  <td style={{ padding: '0.75rem 1rem', color: 'var(--text-secondary)' }}>{groupBData.data.nervous}</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {isBn ? 'জনন ও প্রজনন' : 'Reproduction'}
                  </td>
                  <td style={{ padding: '0.75rem 1rem', color: 'var(--text-secondary)' }}>{groupAData.data.reproduction}</td>
                  <td style={{ padding: '0.75rem 1rem', color: 'var(--text-secondary)' }}>{groupBData.data.reproduction}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* SECTION 4: FUNCTIONAL ADAPTATIONS */}
      {activeSection === 'adaptations' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {FUNCTIONAL_ADAPTATIONS.map(adapt => (
            <div key={adapt.id} className="card" style={{ borderLeft: '4px solid var(--border-accent)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                {isBn ? adapt.titleBn : adapt.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                {isBn ? adapt.descriptionBn : adapt.descriptionEn}
              </p>

              {/* Morphological modifications */}
              <div style={{ marginBottom: '1.25rem' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-accent)', marginBottom: '0.5rem' }}>
                  {isBn ? 'প্রধান অঙ্গসংস্থানিক রূপান্তরসমূহ:' : 'Key Morphological Modifications:'}
                </h4>
                <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {(isBn ? adapt.morphologicalModifications.bn : adapt.morphologicalModifications.en).map((mod, idx) => (
                    <li key={idx} style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: 1.5 }}>
                      {mod}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Examples with Canonical Species Links */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                {adapt.examples.map((ex, idx) => {
                  const spRecord = ex.speciesId ? species.find(s => s.id === ex.speciesId) : null;
                  return (
                    <div key={idx} style={{ background: 'var(--bg-surface)', padding: '0.85rem', borderRadius: 'var(--radius-sm)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                        <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                          {ex.taxon}
                        </span>
                        {spRecord && (
                          <Link
                            to={`/species/${spRecord.id}`}
                            style={{ fontSize: '0.75rem', color: 'var(--text-accent)', display: 'flex', alignItems: 'center', gap: '0.2rem' }}
                          >
                            Profile <ArrowRight size={12} />
                          </Link>
                        )}
                      </div>
                      <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                        {isBn ? ex.adaptationBn : ex.adaptationEn}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
