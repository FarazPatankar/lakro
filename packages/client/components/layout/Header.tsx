import { Google } from '../icons/Google';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  return (
    <header className="flex items-center px-20 h-24 w-full">
      <Button
        style={{
          marginLeft: 'auto',
        }}
      >
        <Google className="mr-2" /> Continue with Google
      </Button>
    </header>
  );
};

export default Header;
