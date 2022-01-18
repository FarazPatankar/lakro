import Link from 'next/link';
import { Button } from '../../ui/Button';

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between z-10 drop-shadow-xl bg-bg-default fixed px-12 h-20 w-full md:px-44">
      <h1 className="text-white font-semibold text-xl">
        Lakro.<span className="text-accent">app</span>
      </h1>
      <div className="flex items-center">
        <HeadLink href="https://twitter.com/lakroapp">Twitter</HeadLink>
        <HeadLink href="https://github.com/notnick12/lakro">GitHub</HeadLink>
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

type Props = {
  href?: string | undefined;
};

const HeadLink: React.FC<Props> = ({ children, href }) => {
  return (
    <Link href={`${href}`}>
      <a
        target="_blank"
        className="text-text-primary hidden text-base mr-10 duration-500 hover:text-white md:flex"
      >
        {children}
      </a>
    </Link>
  );
};

export default Header;
