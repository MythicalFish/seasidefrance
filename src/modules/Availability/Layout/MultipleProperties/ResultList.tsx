import type { PropertyPage } from '@data/properties/types';
import type { Result } from '../index';
import ResultItem from './ResultItem';

type Props = {
  result: Result;
  resultIndex: number;
};

const ResultList = ({ result, resultIndex }: Props) => {
  const { property, periods } = result;

  if (periods.length === 0) {
    return <NoPeriodsAvailable property={property} resultIndex={resultIndex} />;
  }

  const period = periods[0];

  return <ResultItem property={property} period={period} resultIndex={resultIndex} />;
};

const NoPeriodsAvailable = ({
  property,
  resultIndex,
}: {
  property: PropertyPage;
  resultIndex: number;
}) => (
  <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm mb-4">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
      <div className="block">
        <h3 className="font-semibold text-lg mb-2">
          {property.name || `Property ${resultIndex + 1}`}
        </h3>
      </div>
      <div className="col-span-3 text-gray-600 text-center md:text-left">
        No available periods for your selected criteria
      </div>
    </div>
  </div>
);

export default ResultList;
