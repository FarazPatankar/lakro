import type { NextPage } from 'next';

import Head from '../seo/Head';
import Link from 'next/link';

import { Button } from '../components/ui/Button';
import { Header } from '../components/layout/Header';
import { Wrapper } from '../components/layout/Wrapper';
import { Google } from '../components/icons/Google';
import { Footer } from '../components/layout/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Head
        title="Lakro - Network with like-minded individuals, authentically."
        description="A platform designed to make networking fun and authentic."
      />
      <Header />
      <Wrapper>
        <main className="flex flex-col w-10/12 items-center justify-center text-center h-full">
          <h1 className="font-bold mb-4 text-5xl max-w-3xl text-white">
            A platform designed to make networking fun and{' '}
            <span className="text-blue-600">authentic</span>.
          </h1>
          <p className="max-w-xl text-lg text-slate-300 font-light mb-8">
            We're a social platform where individuals can professionally network
            with other like-minded people and still be themselves and have fun.{' '}
          </p>
          <Link href={``}>
            <Button>
              <Google className="mr-2" />
              Sign up with Google &#x2192;
            </Button>
          </Link>
        </main>
        <Footer />
      </Wrapper>
    </>
  );
};

export default Home;
