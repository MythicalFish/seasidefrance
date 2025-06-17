import type { Result } from '../index';
import ResultList from './ResultList';
import type { PropertyPage } from '@data/properties/types';

type Props = {
  results: Result[];
  currentProperty?: PropertyPage;
};

const MultiplePropertiesResults = ({ results, currentProperty }: Props) => {
  if (results.length === 0 && !currentProperty) {
    return (
      <div className="text-center py-12">No available periods found for your search criteria.</div>
    );
  }

  const items = results.filter((result) => result.property.id !== currentProperty?.id);

  return (
    <>
      {items.map((result, index) => (
        <ResultList key={result.property.slug} result={result} resultIndex={index} />
      ))}
    </>
  );
};

export default MultiplePropertiesResults;
