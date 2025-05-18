export function buildSlug(text: string | null | undefined): string {
  return text?.trim().toLowerCase().replace(/\s+/g, '-') ?? '';
}

type CurrencyCode = 'EUR' | 'USD' | 'GBP' | 'CAD';

export function currencySymbol(currencyCode: string | null | undefined): string {
  if (!currencyCode) return '';
  const currencyMap = {
    EUR: '€',
    USD: '$',
    GBP: '£',
    CAD: '$',
  };
  return currencyMap[currencyCode as CurrencyCode] ?? currencyCode ?? '';
}
