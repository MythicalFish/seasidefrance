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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
      {results.slice(0, 3).map((result, index) => (
        <Item
          key={result.property.slug}
          property={result.property}
          period={result.periods[0]}
          index={index}
        />
      ))}
    </div>
  );
};

export default LayoutSpecialOffers;
