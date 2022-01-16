export const LoadingScreen: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-9 w-9"></div>
        <p className="mt-3 text-text-primary">Loading...</p>
      </div>
    </div>
  );
};
