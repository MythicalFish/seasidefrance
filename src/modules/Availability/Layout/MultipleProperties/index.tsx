import type { Result } from '../index';
import EmptyState from '../../EmptyState';
import ResultList from './ResultList';

type Props = {
  results: Result[];
};

const MultiplePropertiesResults = ({ results }: Props) => {
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
