import type { Result } from '../index';
import LoadingState from '../../shared/LoadingState';
import EmptyState from '../../shared/EmptyState';
import ResultList from './ResultList';

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
    <>
      {results.map((result, index) => (
        <ResultList key={result.property.slug} result={result} resultIndex={index} />
      ))}
    </>
  );
};

export default MultiplePropertiesResults;
