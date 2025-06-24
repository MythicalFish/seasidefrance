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
    <div className="flex flex-col gap-4 ">
      {results.slice(0, 1).map((result) => (
        <Item key={result.property.slug} property={result.property} period={result.periods[0]} />
      ))}
    </div>
  );
};

export default LayoutSpecialOffers;
