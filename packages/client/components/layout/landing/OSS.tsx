import { Button } from '../../ui/Button';
import Link from 'next/link';

export const OSS: React.FC = () => {
  return (
    <div className="flex flex-col px-8 md:px-16 bg-accent rounded-2xl justify-center mt-20 mb-20 w-full h-80">
      <h1 className="font-extrabold text-white tracking-tight leading-none mb-2 text-[1.9rem] md:text-[2.4rem]">
        The source code is open to the public!
      </h1>
      <p className="text-text-primary mb-8 text-[1rem] md:text-[1.3rem]">
        Anyone can contribute, the smallest contributions count.
      </p>
      <Link href="https://github.com/notnick12/lakro">
        <a target="_blank">
          <Button
            style={{
              backgroundColor: '#fff',
              color: '#000',
            }}
          >
            Contribute now &#x2192;
          </Button>
        </a>
      </Link>
    </div>
  );
};
