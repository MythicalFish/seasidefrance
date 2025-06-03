import type { PropertyPage } from '@data/properties/types';
import getBookingPeriods from '@lib/getBookingPeriods';
import type { Result } from '@modules/Availability/Layout';
import { sortResults } from '@lib/getBookingPeriods/utils/sortResults';
import { DEFAULT_STAY_LENGTH } from '@lib/getBookingPeriods/constants';

/**
 * Generate default search results for properties at build time.
 * This function gets all naturally available periods without filtering by stay length.
 */
export const generateSearchResults = (properties: PropertyPage[]): Result[] => {
  const startDate = new Date();

  const results = properties.map((property) => {
    const rates = property.rates;
    const availability = property.availability || [];

    // Get all naturally available periods (no stay length filter)
    const periods = getBookingPeriods(rates, availability, DEFAULT_STAY_LENGTH, startDate);

    return { property, periods };
  });

  return sortResults(results);
};

/**
 * Generate default search results for a specific property at build time.
 * Gets all naturally available periods without stay length filtering.
 */
export const generatePropertySearchResults = (property: PropertyPage): Result => {
  const startDate = new Date();
  const rates = property.rates;
  const availability = property.availability || [];

  // Get all naturally available periods (no stay length filter)
  const periods = getBookingPeriods(rates, availability, DEFAULT_STAY_LENGTH, startDate);

  return { property, periods };
};
