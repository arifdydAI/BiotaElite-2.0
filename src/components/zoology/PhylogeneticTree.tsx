import React, { useState } from 'react';
import {
  GEOLOGICAL_TIMESCALE,
  MAJOR_EVOLUTIONARY_TRANSITIONS,
  PHYLOGENETIC_TREE_NODES
} from '../../data/evolutionData';
import { useLanguage } from '../../context/LanguageContext';
import {
  GitFork,
  Info,
  ChevronRight,
  Sparkles,
  TreeDeciduous
} from 'lucide-react';

export const PhylogeneticTree: React.FC = () => {
  const { language } = useLanguage();
  const isBn = language === 'bn';

  const [activeTab, setActiveTab] = useState<'cladogram' | 'transitions' | 'timescale'>('cladogram');
  const [selectedNodeId, setSelectedNodeId] = useState<string>(PHYLOGENETIC_TREE_NODES[0].id);

  const selectedNode = PHYLOGENETIC_TREE_NODES.find(n => n.id === selectedNodeId) || PHYLOGENETIC_TREE_NODES[0];

  return (
    <div className="phylogenetic-tree-module">
      {/* Top Banner */}
      <div className="card" style={{ marginBottom: '2rem', background: 'linear-gradient(135deg, rgba(88, 28, 135, 0.25) 0%, rgba(15, 23, 42, 0.6) 100%)', border: '1px solid var(--border-accent)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <TreeDeciduous className="text-accent" size={26} />
          <span className="badge badge-accent" style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>
            {isBn ? 'বিবর্তনীয় শাখা ও ফাইলোজেনি' : 'CLADISTICS & EVOLUTIONARY PHYLOGENY'}
          </span>
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
          {isBn ? 'বিবর্তন ও জাতিজনি ধারা' : 'Evolution & Phylogeny'}
        </h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '900px', lineHeight: 1.6 }}>
          {isBn
            ? 'এডিয়াকারান যুগ থেকে আজ পর্যন্ত প্রাণিজগতের প্রধান বিবর্তনীয় মাইলফলক, শেয়ার্ড সাইনাপোমরফি সংবলিত ক্ল্যাডোগ্রাম এবং ভূতাত্ত্বিক সময়ক্রমের প্রামাণ্য বিশ্লেষণ।'
            : 'Explore the genealogical tree of animal life from basal multicellular Metazoa through major evolutionary transitions, supported by morphological synapomorphies and fossil dating.'}
        </p>
      </div>

      {/* Critical Scientific Distinction Callout */}
      <div className="card" style={{ marginBottom: '1.75rem', background: 'rgba(59, 130, 246, 0.08)', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
          <Info size={22} className="text-accent" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, margin: '0 0 0.25rem 0', color: 'var(--text-primary)' }}>
              {isBn ? 'বিজ্ঞানসম্মত সতর্কতা: শ্রেণিবিন্যাস (Taxonomy) ও ফাইলোজেনি (Phylogeny) সমার্থক নয়' : 'Scientific Note: Taxonomy and Phylogeny are Distinct Frameworks'}
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
              {isBn
                ? 'লিনিয়ান ট্যাক্সোনমি হলো সাদৃশ্যের ভিত্তিতে গঠিত শ্রেণিবদ্ধ বিন্যাস পদ্ধতি (যেমন পর্ব, শ্রেণি, বর্গ), আর জাতিজনি (Phylogeny) হলো অভিন্ন পূর্বপুরুষ থেকে উদ্ভূত বিবর্তনীয় বংশলতিকা। এখানে উপস্থাপিত ক্ল্যাডোগ্রামটি প্রামাণ্য আণবিক ও রূপতাত্ত্বিক গবেষণার ভিত্তিতে তৈরি একটি শিক্ষামূলক মডেল।'
                : 'Linnaean taxonomy organizes organisms hierarchically for classification purposes (Phylum, Class, Order). Phylogeny portrays true evolutionary descent and shared ancestry inferred through apomorphic characters. The tree below illustrates established cladistic relationships without conflating arbitrary rank with evolutionary age.'}
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
        <button
          onClick={() => setActiveTab('cladogram')}
          className={`btn ${activeTab === 'cladogram' ? 'btn-primary' : 'btn-ghost'}`}
          style={{ fontSize: '0.85rem' }}
        >
          {isBn ? 'ইন্টারেক্টিভ ক্ল্যাডোগ্রাম (গাছ)' : 'Interactive Cladogram'}
        </button>
        <button
          onClick={() => setActiveTab('transitions')}
          className={`btn ${activeTab === 'transitions' ? 'btn-primary' : 'btn-ghost'}`}
          style={{ fontSize: '0.85rem' }}
        >
          {isBn ? 'প্রধান বিবর্তনীয় রূপান্তর' : 'Major Evolutionary Transitions'}
        </button>
        <button
          onClick={() => setActiveTab('timescale')}
          className={`btn ${activeTab === 'timescale' ? 'btn-primary' : 'btn-ghost'}`}
          style={{ fontSize: '0.85rem' }}
        >
          {isBn ? 'ভূতাত্ত্বিক সময়ক্রম (টাইমস্কেল)' : 'Geological Timescale'}
        </button>
      </div>

      {/* TAB 1: CLADOGRAM EXPLORER */}
      {activeTab === 'cladogram' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 340px) 1fr', gap: '1.75rem' }}>
          {/* Tree Nodes Hierarchy List */}
          <div className="card">
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <GitFork size={18} className="text-accent" />
              {isBn ? 'ক্ল্যাডোগ্রামের নোডসমূহ' : 'Cladogram Lineage Nodes'}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {PHYLOGENETIC_TREE_NODES.map(node => {
                const isSelected = node.id === selectedNode.id;
                const indent = node.parentCladeId ? (node.parentCladeId === 'phy-metazoa' ? 12 : node.parentCladeId === 'phy-eumetazoa' ? 24 : 36) : 0;

                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      padding: '0.65rem 0.85rem',
                      marginLeft: `${indent}px`,
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: isSelected ? 'var(--bg-accent-subtle)' : 'var(--bg-surface)',
                      border: isSelected ? '1px solid var(--border-accent)' : '1px solid var(--border-color)',
                      color: isSelected ? 'var(--text-accent)' : 'var(--text-primary)',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.86rem', fontWeight: isSelected ? 700 : 500 }}>
                        {isBn ? node.nameBn : node.name}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        {node.divergenceMya}
                      </div>
                    </div>
                    <ChevronRight size={14} style={{ opacity: isSelected ? 1 : 0.4 }} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Node Synapomorphies & Detail */}
          <div>
            <div className="card" style={{ borderLeft: '4px solid var(--border-accent)', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div>
                  <span className="badge badge-accent" style={{ textTransform: 'uppercase', fontSize: '0.7rem' }}>
                    Clade Level: {selectedNode.cladeType}
                  </span>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: 800, margin: '0.35rem 0', color: 'var(--text-primary)' }}>
                    {isBn ? selectedNode.nameBn : selectedNode.name}
                  </h2>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {isBn ? 'আনুমানিক উদ্ভব কাল:' : 'Estimated Divergence Time:'}{' '}
                    <strong style={{ color: 'var(--text-primary)' }}>{selectedNode.divergenceMya}</strong>
                    {selectedNode.sisterGroup && (
                      <span style={{ marginLeft: '1rem' }}>
                        {isBn ? 'সিস্টার গ্রুপ:' : 'Sister Clade:'} <strong style={{ color: 'var(--text-accent)' }}>{selectedNode.sisterGroup}</strong>
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginTop: '1rem', marginBottom: 0 }}>
                {isBn ? selectedNode.descriptionBn : selectedNode.descriptionEn}
              </p>
            </div>

            {/* Synapomorphies (Shared Derived Characters) */}
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={18} className="text-accent" />
                {isBn ? 'সাইনাপোমরফি (অর্জিত বৈশিষ্ট্য যা এই ক্ল্যাডকে সংজ্ঞায়িত করে)' : 'Defining Synapomorphies (Derived Characters)'}
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
                {(isBn ? selectedNode.synapomorphies.bn : selectedNode.synapomorphies.en).map((trait, idx) => (
                  <div key={idx} style={{ background: 'var(--bg-surface)', padding: '0.75rem 0.9rem', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--border-accent)' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {trait}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Representative Examples */}
            <div className="card">
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                {isBn ? 'প্রতিনিধি প্রজাতি বা ট্যাক্সা:' : 'Representative Clade Members:'}
              </h4>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {selectedNode.canonicalExamples.map((ex, idx) => (
                  <span key={idx} className="badge" style={{ fontSize: '0.8rem', padding: '0.35rem 0.65rem' }}>
                    {ex}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: MAJOR EVOLUTIONARY TRANSITIONS */}
      {activeTab === 'transitions' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {MAJOR_EVOLUTIONARY_TRANSITIONS.map(trans => (
            <div key={trans.id} className="card" style={{ borderLeft: '4px solid var(--border-accent)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                  {isBn ? trans.milestoneBn : trans.milestone}
                </h3>
                <span className="badge badge-accent" style={{ fontSize: '0.75rem' }}>
                  {trans.estimatedAgeMya}
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginTop: '0.75rem' }}>
                <div style={{ background: 'var(--bg-surface)', padding: '0.85rem', borderRadius: 'var(--radius-sm)' }}>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>
                    {isBn ? 'সাইনাপোমরফি / রূপতাত্ত্বিক ভিত্তি:' : 'Key Synapomorphic Novelty:'}
                  </span>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    {isBn ? trans.synapomorphyBn : trans.synapomorphyEn}
                  </p>
                </div>

                <div style={{ background: 'var(--bg-surface)', padding: '0.85rem', borderRadius: 'var(--radius-sm)' }}>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>
                    {isBn ? 'জৈবিক ও বিবর্তনীয় প্রভাব:' : 'Evolutionary & Ecological Impact:'}
                  </span>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    {isBn ? trans.biologicalImpactBn : trans.biologicalImpactEn}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.75rem', paddingTop: '0.6rem', borderTop: '1px solid var(--border-color)', fontSize: '0.8rem', color: 'var(--text-muted)', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <strong style={{ color: 'var(--text-primary)' }}>{isBn ? 'পূর্বপুরুষ:' : 'Ancestral Root:'}</strong> {trans.ancestralTaxa}
                </div>
                <div>
                  <strong style={{ color: 'var(--text-accent)' }}>{isBn ? 'উদ্ভূত ক্ল্যাডসমূহ:' : 'Derived Clades:'}</strong> {trans.derivedClades}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: GEOLOGICAL TIMESCALE */}
      {activeTab === 'timescale' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {GEOLOGICAL_TIMESCALE.map(period => (
            <div key={period.id} className="card" style={{ borderLeft: '4px solid #38bdf8' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <div>
                  <span className="badge" style={{ fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    Era: {period.era}
                  </span>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '0.2rem 0', color: 'var(--text-primary)' }}>
                    {isBn ? period.periodBn : period.period}
                  </h3>
                </div>
                <span className="badge badge-accent" style={{ fontSize: '0.8rem' }}>
                  {period.timeRangeMya}
                </span>
              </div>

              <div style={{ margin: '0.75rem 0' }}>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem' }}>
                  {isBn ? 'প্রধান প্রাণীবিজ্ঞানীয় ঘটনাপ্রবাহ:' : 'Key Zoological Events:'}
                </span>
                <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {(isBn ? period.keyZoologicalEventsBn : period.keyZoologicalEventsEn).map((event, idx) => (
                    <li key={idx} style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {event}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ background: 'var(--bg-surface)', padding: '0.6rem 0.85rem', borderRadius: 'var(--radius-sm)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>{isBn ? 'প্রধান বা আধিপত্যকারী প্রাণী:' : 'Dominant Fauna:'}</strong>{' '}
                {period.dominantFauna}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
