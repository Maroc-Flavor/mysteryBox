export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('de-DE').format(date);
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
} 