// BiotaElite 2.0 Scientific Name Component
// Enforces Open Sans + Italic for the specific epithet/genus, with authorship in roman type.
import React from 'react';

interface ScientificNameProps {
  name: string;
  authorship?: string;
  className?: string;
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p';
}

export const ScientificName: React.FC<ScientificNameProps> = ({
  name,
  authorship,
  className = '',
  as: Component = 'span',
}) => {
  return (
    <Component className={`scientific-name-wrapper ${className}`}>
      <span className="scientific-name" style={{ fontStyle: 'italic', fontFamily: "'Open Sans', sans-serif" }}>
        {name}
      </span>
      {authorship && (
        <span
          className="scientific-authorship"
          style={{ fontStyle: 'normal', fontFamily: "'Open Sans', sans-serif", marginLeft: '0.35rem', color: 'var(--text-muted)' }}
        >
          {authorship}
        </span>
      )}
    </Component>
  );
};
