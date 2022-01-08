import { Google } from '../icons/Google';

export const Header: React.FC = () => {
  return (
    <header className="flex items-center px-28 h-20 justify-between w-screen">
      <h1 className="text-xl font-black">
        Lakro<span className="text-blue-600">.app</span>
      </h1>
      <ContinueWithGoogleButton>Continue with Google</ContinueWithGoogleButton>
    </header>
  );
};

const ContinueWithGoogleButton: React.FC = ({ children }) => {
  return (
    <button className="flex font-bold items-center h-12 pl-4 pr-4 justify-center text-white rounded-md bg-blue-600">
      <Google className="mr-2" />
      {children}
    </button>
  );
};

export default Header;
