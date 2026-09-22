// BiotaElite 2.0 Hierarchical Taxonomy Tree Component
// MASTER-FIX-11: Audited descendant counters, published species counts, search filter, and direct knowledge links
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import type { TaxonNode, SpeciesRecord } from '../../types/biodiversity';
import { compareSpeciesByPriority } from '../../types/biodiversity';
import {
  ChevronDown,
  ChevronRight,
  Folder,
  FolderOpen,
  Layers,
  ArrowRight,
  BookOpen,
  Search,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { ScientificName } from '../common/ScientificName';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useLanguage } from '../../context/LanguageContext';

interface TaxonomyTreeProps {
  taxa: TaxonNode[];
  species: SpeciesRecord[];
}

export const TaxonomyTree: React.FC<TaxonomyTreeProps> = ({ taxa, species }) => {
  const { taxonKnowledge } = useBiodiversity();
  const { t, language } = useLanguage();

  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({
    'taxon-animalia': true,
    'taxon-chordata': true,
    'taxon-actinopterygii': true,
  });

  const [treeSearch, setTreeSearch] = useState('');

  // Precompute descendant count map for all nodes
  const descendantCountMap = useMemo(() => {
    const map: Record<string, number> = {};
    const childrenMap: Record<string, string[]> = {};

    for (const tNode of taxa) {
      const pId = tNode.parentTaxonId ?? tNode.parentId;
      if (pId) {
        if (!childrenMap[pId]) childrenMap[pId] = [];
        childrenMap[pId].push(tNode.id);
      }
    }

    const countDescendants = (id: string): number => {
      if (map[id] !== undefined) return map[id];
      const children = childrenMap[id] || [];
      let total = children.length;
      for (const cid of children) {
        total += countDescendants(cid);
      }
      map[id] = total;
      return total;
    };

    for (const tNode of taxa) {
      countDescendants(tNode.id);
    }
    return map;
  }, [taxa]);

  // Precompute linked species map and Bangladesh occurrences for every node
  const speciesMap = useMemo(() => {
    const byNode: Record<string, { total: number; bd: number; list: SpeciesRecord[] }> = {};

    // Precompute descendant taxon IDs set for every node to support robust graph traversal
    const childrenMap: Record<string, string[]> = {};
    for (const tNode of taxa) {
      const pId = tNode.parentTaxonId ?? tNode.parentId;
      if (pId) {
        if (!childrenMap[pId]) childrenMap[pId] = [];
        childrenMap[pId].push(tNode.id);
      }
    }

    const descendantTaxonIdsMap: Record<string, Set<string>> = {};
    const getDescendantTaxonIds = (id: string): Set<string> => {
      if (descendantTaxonIdsMap[id]) return descendantTaxonIdsMap[id];
      const set = new Set<string>([id]);
      const children = childrenMap[id] || [];
      for (const cid of children) {
        const childSet = getDescendantTaxonIds(cid);
        childSet.forEach(tid => set.add(tid));
      }
      descendantTaxonIdsMap[id] = set;
      return set;
    };

    for (const node of taxa) {
      getDescendantTaxonIds(node.id);
    }

    for (const node of taxa) {
      const nodeNameLower = node.name.toLowerCase();
      const descTaxonIds = descendantTaxonIdsMap[node.id];
      const matches = species.filter(s => {
        if (!s.isPublished) return false;
        // Direct graph ancestry match
        if (descTaxonIds && s.taxonId && descTaxonIds.has(s.taxonId)) return true;
        if (node.rank === 'kingdom') {
          return (s.taxonomy.kingdom && s.taxonomy.kingdom.toLowerCase() === nodeNameLower) || nodeNameLower === 'animalia';
        }
        if (node.rank === 'phylum') {
          return s.taxonomy.phylum && s.taxonomy.phylum.toLowerCase() === nodeNameLower;
        }
        if (node.rank === 'class' || node.rank === 'superclass') {
          return s.taxonomy.class && s.taxonomy.class.toLowerCase() === nodeNameLower;
        }
        if (node.rank === 'order' || node.rank === 'infraorder' || node.rank === 'suborder') {
          return s.taxonomy.order && s.taxonomy.order.toLowerCase() === nodeNameLower;
        }
        if (node.rank === 'family') {
          return s.taxonomy.family && s.taxonomy.family.toLowerCase() === nodeNameLower;
        }
        if (node.rank === 'genus') {
          return s.taxonomy.genus && s.taxonomy.genus.toLowerCase() === nodeNameLower;
        }
        return false;
      });

      matches.sort(compareSpeciesByPriority);
      const bdCount = matches.filter(s => s.bangladeshOccurrence?.present).length;
      byNode[node.id] = { total: matches.length, bd: bdCount, list: matches };
    }
    return byNode;
  }, [taxa, species]);

  const toggleNode = (nodeId: string) => {
    setExpandedNodes(prev => ({ ...prev, [nodeId]: !prev[nodeId] }));
  };

  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    taxa.forEach(tNode => {
      allExpanded[tNode.id] = true;
    });
    setExpandedNodes(allExpanded);
  };

  const collapseAll = () => {
    setExpandedNodes({});
  };

  const getRankBadgeColor = (rank: string) => {
    switch (rank) {
      case 'kingdom': return '#a855f7';
      case 'phylum': return '#3b82f6';
      case 'class': return '#0ea5e9';
      case 'order': return '#10b981';
      case 'family': return '#f59e0b';
      case 'genus': return '#ec4899';
      default: return '#64748b';
    }
  };

  const getKnowledgeLink = (node: TaxonNode): string | null => {
    const k = taxonKnowledge.find(
      rec =>
        rec.taxonId === node.id ||
        rec.id === node.id ||
        rec.scientificName.toLowerCase() === node.name.toLowerCase()
    );
    if (k) {
      return `/taxonomy/${k.canonicalSlug || k.id}`;
    }
    return null;
  };

  // Node matching search filter
  const isNodeMatching = (node: TaxonNode): boolean => {
    if (!treeSearch.trim()) return true;
    const query = treeSearch.toLowerCase();
    return (
      node.name.toLowerCase().includes(query) ||
      node.rank.toLowerCase().includes(query) ||
      Boolean(node.commonNameEn && node.commonNameEn.toLowerCase().includes(query)) ||
      Boolean(node.commonNameBn && node.commonNameBn.includes(query))
    );
  };

  const renderNode = (node: TaxonNode, depth: number = 0): React.ReactNode => {
    const children = taxa.filter(tNode => (tNode.parentTaxonId ?? tNode.parentId) === node.id);
    const hasMatchingDescendant = (n: TaxonNode): boolean => {
      if (isNodeMatching(n)) return true;
      const childs = taxa.filter(tNode => (tNode.parentTaxonId ?? tNode.parentId) === n.id);
      return childs.some(c => hasMatchingDescendant(c));
    };

    if (treeSearch.trim() && !hasMatchingDescendant(node)) {
      return null;
    }

    const isExpanded = Boolean(expandedNodes[node.id]) || Boolean(treeSearch.trim());
    const hasChildren = children.length > 0;
    const stats = speciesMap[node.id] || { total: 0, bd: 0, list: [] };
    const descendantCount = descendantCountMap[node.id] || 0;
    const knowledgeLink = getKnowledgeLink(node);

    return (
      <div key={node.id} style={{ marginLeft: `${depth * 1.5}rem`, marginTop: '0.45rem' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.55rem 0.85rem',
            background: isExpanded ? 'var(--bg-card-hover)' : 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            transition: 'var(--transition-fast)',
            gap: '0.75rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: '1 1 300px', minWidth: '260px' }}>
            {hasChildren ? (
              <button
                onClick={() => toggleNode(node.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '2px',
                }}
                aria-label={isExpanded ? 'Collapse' : 'Expand'}
              >
                {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>
            ) : (
              <span style={{ width: '16px', display: 'inline-block' }} />
            )}

            {hasChildren ? (
              isExpanded ? (
                <FolderOpen size={16} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
              ) : (
                <Folder size={16} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
              )
            ) : (
              <Layers size={15} style={{ color: 'var(--accent-marine-light)', flexShrink: 0 }} />
            )}

            {/* Rank Chip */}
            <span
              style={{
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                fontWeight: 800,
                letterSpacing: '0.05em',
                padding: '0.15rem 0.45rem',
                borderRadius: '3px',
                background: `${getRankBadgeColor(node.rank)}20`,
                color: getRankBadgeColor(node.rank),
                border: `1px solid ${getRankBadgeColor(node.rank)}40`,
                flexShrink: 0,
              }}
            >
              {t(`rank.${node.rank}`) || node.rank}
            </span>

            {/* Taxon Name */}
            <span
              style={{
                fontWeight: 600,
                fontSize: '0.95rem',
                color: 'var(--text-primary)',
                fontStyle: node.rank === 'genus' ? 'italic' : 'normal',
                fontFamily: "'Open Sans', sans-serif",
              }}
            >
              {node.name}
            </span>

            {node.authorYear && (
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {node.authorYear}
              </span>
            )}

            {node.commonNameEn && (
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                ({node.commonNameEn})
              </span>
            )}

            {node.commonNameBn && (
              <span className="bangla-text" style={{ fontSize: '0.85rem', color: 'var(--accent-emerald-light)' }}>
                • {node.commonNameBn}
              </span>
            )}
          </div>

          {/* Audited Counters & Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            {descendantCount > 0 && (
              <span
                style={{
                  fontSize: '0.72rem',
                  padding: '0.15rem 0.45rem',
                  borderRadius: '3px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'var(--text-muted)',
                }}
                title="Child taxa in hierarchical classification tree"
              >
                {descendantCount} {descendantCount === 1 ? t('tax.descendantTaxa') || 'taxon' : t('tax.descendantTaxa') || 'taxa'}
              </span>
            )}

            {/* Primary: Curated Global Species Count */}
            <span
              style={{
                fontSize: '0.72rem',
                padding: '0.15rem 0.45rem',
                borderRadius: '3px',
                background: stats.total > 0 ? 'rgba(16, 185, 129, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                color: stats.total > 0 ? '#34d399' : 'var(--text-muted)',
                fontWeight: stats.total > 0 ? 600 : 400,
              }}
              title="Curated global species linked to this taxon in BiotaElite dataset"
            >
              {stats.total} {stats.total === 1 ? t('tax.linkedSpecies') || 'Species' : t('tax.linkedSpecies') || 'Species'}
            </span>

            {/* Secondary Regional Context: Bangladesh Records */}
            {stats.bd > 0 && (
              <span
                style={{
                  fontSize: '0.72rem',
                  padding: '0.15rem 0.45rem',
                  borderRadius: '3px',
                  background: 'rgba(59, 130, 246, 0.12)',
                  color: '#60a5fa',
                  border: '1px solid rgba(59, 130, 246, 0.25)',
                  fontWeight: 500,
                }}
                title="Species with verified occurrence records in Bangladesh"
              >
                {stats.bd} {t('tax.regionalBd') || 'BD'}
              </span>
            )}

            {knowledgeLink && (
              <Link
                to={knowledgeLink}
                className="btn btn-secondary btn-sm"
                style={{
                  padding: '0.2rem 0.55rem',
                  fontSize: '0.72rem',
                  gap: '0.25rem',
                  borderRadius: 'var(--radius-sm)',
                  borderColor: 'rgba(192, 132, 252, 0.35)',
                  color: '#c084fc',
                }}
                title="Explore zoological knowledge, diagnostic biology, and anatomical systems"
              >
                <BookOpen size={11} />
                <span>{t('tax.viewDetails') || 'Details'}</span>
              </Link>
            )}
          </div>
        </div>

        {/* Render child taxa or species */}
        {isExpanded && (
          <div style={{ borderLeft: '1px dashed var(--border-subtle)', marginLeft: '0.75rem', paddingLeft: '0.5rem' }}>
            {children.map(child => renderNode(child, 0.5))}

            {/* If node is Genus, render direct species */}
            {node.rank === 'genus' && stats.list.length > 0 && (
              <div style={{ marginLeft: '1.5rem', marginTop: '0.4rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {stats.list.map(sp => (
                  <div
                    key={sp.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.45rem 0.75rem',
                      background: 'rgba(16, 185, 129, 0.05)',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <span
                        style={{
                          fontSize: '0.65rem',
                          textTransform: 'uppercase',
                          fontWeight: 700,
                          padding: '0.1rem 0.35rem',
                          borderRadius: '2px',
                          background: 'rgba(16, 185, 129, 0.2)',
                          color: '#34d399',
                        }}
                      >
                        SPECIES
                      </span>
                      <ScientificName name={sp.scientificName} authorship={sp.scientificNameAuthorship} />
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        — {sp.commonNames.en[0]} {sp.commonNames.bn[0] && `(${sp.commonNames.bn[0]})`}
                      </span>
                      {sp.bangladeshOccurrence?.present ? (
                        <span
                          style={{
                            fontSize: '0.62rem',
                            padding: '0.1rem 0.35rem',
                            borderRadius: '2px',
                            background: 'rgba(59, 130, 246, 0.15)',
                            color: '#93c5fd',
                            border: '1px solid rgba(59, 130, 246, 0.3)',
                          }}
                        >
                          BD Native
                        </span>
                      ) : (
                        <span
                          style={{
                            fontSize: '0.62rem',
                            padding: '0.1rem 0.35rem',
                            borderRadius: '2px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            color: 'var(--text-muted)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                          }}
                        >
                          Extralimital
                        </span>
                      )}
                    </div>

                    <Link
                      to={`/species/${sp.id}`}
                      className="btn btn-secondary btn-sm"
                      style={{ padding: '0.2rem 0.5rem', fontSize: '0.75rem', gap: '0.25rem' }}
                    >
                      <span>Profile</span>
                      <ArrowRight size={11} />
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const rootNodes = taxa.filter(tNode => (tNode.parentTaxonId ?? tNode.parentId) === null);

  return (
    <div style={{ width: '100%' }}>
      {/* Tree Controls Toolbar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '1rem',
          flexWrap: 'wrap',
          paddingBottom: '0.75rem',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div style={{ position: 'relative', flex: '1 1 240px', maxWidth: '360px' }}>
          <Search
            size={15}
            style={{
              position: 'absolute',
              left: '0.75rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--text-muted)',
            }}
          />
          <input
            type="text"
            placeholder={language === 'bn' ? 'ট্যাক্সন বা সাধারণ নামে অনুসন্ধান করুন...' : 'Filter classification tree...'}
            value={treeSearch}
            onChange={e => setTreeSearch(e.target.value)}
            className="form-input"
            style={{ paddingLeft: '2.2rem', paddingRight: '0.75rem', fontSize: '0.85rem' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={expandAll}
            className="btn btn-secondary btn-sm"
            style={{ gap: '0.35rem', fontSize: '0.75rem' }}
            title="Expand all tree branches"
          >
            <Maximize2 size={13} />
            <span>{language === 'bn' ? 'সব প্রসারিত করুন' : 'Expand All'}</span>
          </button>
          <button
            onClick={collapseAll}
            className="btn btn-secondary btn-sm"
            style={{ gap: '0.35rem', fontSize: '0.75rem' }}
            title="Collapse all tree branches"
          >
            <Minimize2 size={13} />
            <span>{language === 'bn' ? 'সব সঙ্কুচিত করুন' : 'Collapse All'}</span>
          </button>
        </div>
      </div>

      {/* Nodes */}
      {rootNodes.map(root => renderNode(root, 0))}
    </div>
  );
};

