export const Wrapper: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col items-center w-screen h-screen">
      {children}
    </div>
  );
};
