import type { PropertyPage } from '@data/properties/types';
import type { AvailablePeriod } from '@lib/getBookingPeriods';
import SingleProperty from './SingleProperty';
import MultipleProperties from './MultipleProperties';

export type Result = {
  property: PropertyPage;
  periods: AvailablePeriod[];
};

export type DisplayMode = 'multiple' | 'singleProperty';

type Props = {
  results: Result[];
  isLoading: boolean;
  isSingleProperty: boolean;
};

const Layout = ({ results, isLoading, isSingleProperty }: Props) => {
  if (isSingleProperty) {
    return <SingleProperty results={results} isLoading={isLoading} />;
  }

  return <MultipleProperties results={results} isLoading={isLoading} />;
};

export default Layout;
