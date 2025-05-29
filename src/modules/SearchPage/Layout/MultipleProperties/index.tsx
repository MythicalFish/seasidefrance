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
  if (isLoading) {
    return <LoadingState />;
  }

  if (results.length === 0) {
    return <EmptyState message="No available periods found for your search criteria." />;
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="border-t border-gray-200">
        {results.map((result, index) => (
          <PropertyResults key={result.property.slug} result={result} resultIndex={index} />
        ))}
      </div>
    </div>
  );
};

export default MultiplePropertiesResults;
