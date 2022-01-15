import { LAKRO_API_URL } from '../../../lib/constants';
import { Button } from '../../ui/Button';
import { Google } from '../../icons/Google';

import Link from 'next/link';

export const Main: React.FC = () => {
  return (
    <main className="flex flex-col w-10/12 items-center justify-center text-center h-full">
      <h1 className="font-bold mb-4 text-5xl max-w-3xl text-white">
        A platform designed to make networking fun and{' '}
        <span className="text-blue-600">authentic</span>.
      </h1>
      <p className="max-w-xl text-lg text-slate-300 font-light mb-8">
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
