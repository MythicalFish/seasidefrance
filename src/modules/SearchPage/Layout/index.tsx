import type { PropertyPage } from '@data/properties/types';
import type { AvailablePeriod } from '@components/DateSelector/getPeriods';
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
  displayMode: DisplayMode;
};

const Layout = ({ results, isLoading, displayMode }: Props) => {
  if (displayMode === 'singleProperty') {
    return <SingleProperty results={results} isLoading={isLoading} />;
  }

  return <MultipleProperties results={results} isLoading={isLoading} />;
};

export default Layout;
