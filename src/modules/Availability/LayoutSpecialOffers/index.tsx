import type { Result } from '../index';
import Item from './Item';

type Props = {
  results: Result[];
};

const LayoutSpecialOffers = ({ results }: Props) => {
  if (results.length === 0) {
    return null;
  }

  return (
    <>
      {results.slice(0, 3).map((result) => (
        <Item key={result.property.slug} property={result.property} period={result.periods[0]} />
      ))}
    </>
  );
};

export default LayoutSpecialOffers;
