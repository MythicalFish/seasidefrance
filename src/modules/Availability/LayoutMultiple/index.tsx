import type { Result } from '../index';
import ResultList from './ResultList';

type Props = {
  results: Result[];
};

const MultiplePropertiesResults = ({ results }: Props) => {
  if (results.length === 0) {
    return (
      <div className="text-center py-12">No available periods found for your search criteria.</div>
    );
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
