import { LAKRO_API_URL } from '../../../lib/constants';
import { Button } from '../../ui/Button';
import { Google } from '../../icons/Google';
import Link from 'next/link';

export const Main: React.FC = () => {
  return (
    <main className="flex px-2 md:px-16 flex-col mt-10 justify-center w-full h-screen">
      <h1 className="font-extrabold mb-4 tracking-tight leading-none text-[2.5rem] max-w-4xl text-white md:text-[3.3rem]">
        A platform designed to make networking fun and{' '}
        <span className="text-accent">authentic</span>.
      </h1>
      <p className="max-w-2xl text-text-primary font-light mb-8 text-[1rem] md:text-[1.3rem]">
        We&apos;re a social platform where individuals can professionally
        network with other like-minded people and still be themselves and have
        fun.{' '}
      </p>
      <Link href={`${LAKRO_API_URL}/auth/google`}>
        <Button>
          <Google className="mr-2" />
          Sign up with Google &#x2192;
        </Button>
      </Link>
    </main>
  );
};
