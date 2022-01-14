import Link from 'next/link';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between absolute px-12 h-28 w-full md:px-44">
      <h1 className="text-white font-semibold text-xl">
        Lakro.<span className="text-blue-600">app</span>
      </h1>
      <Link href="https://discord.gg/U52nZh52zT">
        <Button>Discord Server &#x2192;</Button>
      </Link>
    </header>
  );
};

export default Header;
