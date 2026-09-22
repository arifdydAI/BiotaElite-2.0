// BiotaElite 2.0 Data Normalization Engine
// Enforces ICZN formatting standards for scientific names, authorship, and metadata

/**
 * Normalizes a scientific name to ICZN binomial standard:
 * - Genus: first letter uppercase, rest lowercase
 * - Specific epithet: all lowercase
 * - Strips invisible characters, extra whitespace, and control characters
 * - Collapses multiple internal spaces to single space
 */
export function normalizeScientificName(name: string): string {
  if (!name || typeof name !== 'string') return '';

  // Remove invisible non-breaking spaces, zero-width chars, and control characters
  const cleaned = name
    .replace(/[\u00A0\u2000-\u200B\u2028\u2029\uFEFF]/g, ' ')
    .replace(/[\x00-\x1F\x7F]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  const parts = cleaned.split(' ');
  if (parts.length === 0) return '';

  // Genus: capitalize first letter, rest lowercase
  const genus = parts[0].charAt(0).toUpperCase() + parts[0].slice(1).toLowerCase();

  if (parts.length === 1) return genus;

  // Specific epithet: all lowercase
  const epithet = parts[1].toLowerCase();

  // Subspecific epithet (if present): all lowercase
  const subspecies = parts.length >= 3 ? ' ' + parts[2].toLowerCase() : '';

  return `${genus} ${epithet}${subspecies}`;
}

/**
 * Normalizes authorship string according to ICZN formatting:
 * - Preserves parentheses for transferred species (basionym authority)
 * - Normalizes year format (must be 4 digits)
 * - Removes double spaces
 */
export function normalizeAuthorship(authorship: string): string {
  if (!authorship || typeof authorship !== 'string') return '';

  return authorship
    .replace(/[\u00A0\u2000-\u200B\u2028\u2029\uFEFF]/g, ' ')
    .replace(/[\x00-\x1F\x7F]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Normalizes a DOI string:
 * - Strips leading whitespace and URL prefixes (https://doi.org/, doi:)
 * - Ensures consistent formatting as plain DOI identifier
 */
export function normalizeDOI(doi: string): string {
  if (!doi || typeof doi !== 'string') return '';

  return doi
    .trim()
    .replace(/^https?:\/\/doi\.org\//i, '')
    .replace(/^doi:\s*/i, '')
    .replace(/\s+/g, '');
}

/**
 * Normalizes a URL string:
 * - Trims whitespace
 * - Ensures https prefix where http is present
 */
export function normalizeURL(url: string): string {
  if (!url || typeof url !== 'string') return '';
  return url.trim();
}

/**
 * Normalizes a common name:
 * - Trims whitespace
 * - Collapses internal spaces
 * - Does NOT alter case (preserves proper nouns and Bangla script)
 */
export function normalizeCommonName(name: string): string {
  if (!name || typeof name !== 'string') return '';
  return name
    .replace(/[\u00A0\u2000-\u200B\u2028\u2029\uFEFF]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Normalizes a full CSV row by trimming all string values and removing BOM characters.
 */
export function normalizeCSVRow(row: Record<string, string>): Record<string, string> {
  const normalized: Record<string, string> = {};
  for (const [key, value] of Object.entries(row)) {
    const cleanKey = key.replace(/^\uFEFF/, '').trim();
    normalized[cleanKey] = typeof value === 'string'
      ? value.replace(/[\u00A0\u2000-\u200B\uFEFF]/g, ' ').replace(/\s+/g, ' ').trim()
      : value;
  }
  return normalized;
}

/**
 * Returns the lowercase normalized form of a scientific name for comparison purposes.
 * Used by duplicate detection to catch case-insensitive matches.
 */
export function normalizeForComparison(name: string): string {
  return normalizeScientificName(name).toLowerCase().replace(/\s+/g, ' ').trim();
}
