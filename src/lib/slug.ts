/**
 * Creates a URL-friendly slug from a string
 * @param text The text to convert to a slug
 * @returns A URL-friendly slug
 */
export function buildSlug(text: string): string {
  return text.trim().toLowerCase().replace(/\s+/g, "-");
}
