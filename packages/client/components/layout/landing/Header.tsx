import Link from 'next/link';
import { Button } from '../../ui/Button';

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between z-10 drop-shadow-md bg-bg-default fixed px-12 h-20 w-full md:px-44">
      <h1 className="text-white font-semibold text-xl">
        Lakro.<span className="text-accent">app</span>
      </h1>
      <div className="flex items-center">
        <Link href="https://github.com/notnick12/lakro">
          <a
            target="_blank"
            className="text-text-primary hidden text-base mr-10 duration-500 hover:text-white md:flex"
          >
            GitHub
          </a>
        </Link>
        <Link href="https://discord.gg/U52nZh52zT">
          <Button
            style={{
              borderRadius: '50px',
            }}
          >
            {' '}
            Join Discord &#x2192;
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
