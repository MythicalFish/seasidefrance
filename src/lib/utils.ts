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

// Format Date objects to YYYY-MM-DD
const formatDate = (date: string | Date): string => {
  if (date instanceof Date) {
    return date.toISOString().split('T')[0]; // YYYY-MM-DD format
  }
  return date;
};

export const getCheckoutUrl = (
  propertyId: string,
  arrival: string | Date,
  departure: string | Date
) => {
  const formattedArrival = formatDate(arrival);
  const formattedDeparture = formatDate(departure);

  return `https://checkout.lodgify.com/rochebonne/${propertyId}/reservation?currency=EUR&arrival=${formattedArrival}&departure=${formattedDeparture}`;
};
