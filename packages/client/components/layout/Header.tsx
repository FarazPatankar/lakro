import { Google } from '../icons/Google';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  return (
    <header className="flex items-center px-28 h-20 justify-between w-screen">
      <h1 className="text-xl font-black">
        Lakro<span className="text-blue-600">.app</span>
      </h1>
      <Button>
        <Google className="mr-2" /> Continue with Google
      </Button>
    </header>
  );
};

export default Header;
