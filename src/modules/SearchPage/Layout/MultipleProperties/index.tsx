import { useState } from 'react';
import type { Result } from '../index';
import LoadingState from '../../shared/LoadingState';
import EmptyState from '../../shared/EmptyState';
import PropertyResults from './PropertyResults';

type Props = {
  results: Result[];
  isLoading: boolean;
};

const MultiplePropertiesResults = ({ results, isLoading }: Props) => {
  const [resultsShown, setResultsShown] = useState(6);

  if (isLoading) {
    return <LoadingState />;
  }

  if (results.length === 0) {
    return <EmptyState message="No available periods found for your search criteria." />;
  }

  const hasMoreResults = results.some((result) => result.periods.length > resultsShown);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="border-t border-gray-200">
        {results.map((result, index) => (
          <PropertyResults
            key={result.property.slug}
            result={result}
            resultIndex={index}
            resultsShown={resultsShown}
          />
        ))}
      </div>
      {hasMoreResults && (
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={() => setResultsShown(resultsShown + 5)}
            className="w-full py-3 px-4 bg-white text-gray-700 border border-gray-300 rounded-md cursor-pointer transition-all duration-150 text-sm font-medium hover:bg-gray-50 hover:border-gray-400"
          >
            Show more periods
          </button>
        </div>
      )}
    </div>
  );
};

export default MultiplePropertiesResults;
