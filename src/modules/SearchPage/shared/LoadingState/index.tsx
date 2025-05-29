const LoadingState = () => (
  <div className="text-center py-8">
    <div className="inline-block animate-spin rounded-full h-8 w-8 border-2 border-transparent border-b-blue-600"></div>
    <p className="mt-2 text-gray-600">Searching available periods...</p>
  </div>
);

export default LoadingState;
