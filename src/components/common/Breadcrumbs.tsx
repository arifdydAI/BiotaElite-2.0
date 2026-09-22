// BiotaElite 2.0 Breadcrumb Component
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  to?: string;
  isScientificName?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        fontSize: '0.825rem',
        color: 'var(--text-muted)',
        marginBottom: '1.25rem',
        flexWrap: 'wrap',
      }}
    >
      <Link
        to="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.25rem',
          color: 'var(--text-muted)',
          textDecoration: 'none',
        }}
      >
        <Home size={14} />
      </Link>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <ChevronRight size={13} style={{ color: 'var(--border-subtle)' }} />
          {item.to ? (
            <Link
              to={item.to}
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontStyle: item.isScientificName ? 'italic' : 'normal',
                fontFamily: item.isScientificName ? 'var(--font-sans)' : 'inherit',
              }}
            >
              {item.label}
            </Link>
          ) : (
            <span
              style={{
                color: 'var(--text-primary)',
                fontWeight: 600,
                fontStyle: item.isScientificName ? 'italic' : 'normal',
                fontFamily: item.isScientificName ? 'var(--font-sans)' : 'inherit',
              }}
            >
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
