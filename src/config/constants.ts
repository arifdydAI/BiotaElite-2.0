// BiotaElite 2.0 Global Constants

import type { IUCNStatus, LifecycleStatus, TaxonomicRank } from '../types/biodiversity';

export const TAXONOMIC_RANKS: { key: TaxonomicRank; label: string; order: number }[] = [
  { key: 'kingdom', label: 'Kingdom', order: 1 },
  { key: 'phylum', label: 'Phylum', order: 2 },
  { key: 'class', label: 'Class', order: 3 },
  { key: 'order', label: 'Order', order: 4 },
  { key: 'family', label: 'Family', order: 5 },
  { key: 'genus', label: 'Genus', order: 6 },
  { key: 'species', label: 'Species', order: 7 },
  { key: 'subspecies', label: 'Subspecies', order: 8 },
];

export const IUCN_CATEGORIES: Record<IUCNStatus, { code: IUCNStatus; label: string; labelBn: string; color: string; bg: string }> = {
  EX: { code: 'EX', label: 'Extinct', labelBn: 'বিলুপ্ত', color: '#000000', bg: '#fee2e2' },
  EW: { code: 'EW', label: 'Extinct in the Wild', labelBn: 'বন্য পরিবেশে বিলুপ্ত', color: '#4a044e', bg: '#fdf4ff' },
  CR: { code: 'CR', label: 'Critically Endangered', labelBn: 'মহাবিপন্ন', color: '#b91c1c', bg: '#fef2f2' },
  EN: { code: 'EN', label: 'Endangered', labelBn: 'বিপন্ন', color: '#c2410c', bg: '#fff7ed' },
  VU: { code: 'VU', label: 'Vulnerable', labelBn: 'ঝুঁকিপূর্ণ', color: '#b45309', bg: '#fffbeb' },
  NT: { code: 'NT', label: 'Near Threatened', labelBn: 'বিপন্নপ্রায়', color: '#4d7c0f', bg: '#f7fee7' },
  LC: { code: 'LC', label: 'Least Concern', labelBn: 'ন্যূনতম উদ্বেগের', color: '#15803d', bg: '#f0fdf4' },
  DD: { code: 'DD', label: 'Data Deficient', labelBn: 'তথ্য অপ্রতুল', color: '#475569', bg: '#f8fafc' },
  NE: { code: 'NE', label: 'Not Evaluated', labelBn: 'মূল্যায়িত নয়', color: '#64748b', bg: '#f1f5f9' },
};

export const LIFECYCLE_STATUS_CONFIG: Record<LifecycleStatus, { label: string; color: string; bg: string }> = {
  draft: { label: 'Draft', color: '#64748b', bg: '#f1f5f9' },
  under_review: { label: 'Under Review', color: '#d97706', bg: '#fef3c7' },
  verified: { label: 'Verified', color: '#0284c7', bg: '#e0f2fe' },
  published: { label: 'Published & Verified', color: '#059669', bg: '#d1fae5' },
  archived: { label: 'Archived', color: '#4b5563', bg: '#e5e7eb' },
  rejected: { label: 'Rejected', color: '#dc2626', bg: '#fee2e2' },
  requires_review: { label: 'Requires Review', color: '#ea580c', bg: '#ffedd5' },
};
