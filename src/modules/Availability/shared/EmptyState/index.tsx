type Props = {
  message?: string;
};

const EmptyState = ({ message = 'No properties available.' }: Props) => (
  <div className="text-center py-12">
    <p className="text-gray-500 text-lg">{message}</p>
  </div>
);

export default EmptyState;
