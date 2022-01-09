import type { NextPage } from 'next';
import Head from '../seo/Head';
import Link from 'next/link';

import { Button } from '../components/ui/Button';
import { Header } from '../components/layout/Header';

const Home: NextPage = () => {
  return (
    <>
      <Head
        title="Lakro"
        description="A platform designed to make networking fun and authentic."
      />
      <div className="flex flex-col items-center w-screen h-screen">
        {/* <div className="flex items-center text-center justify-center w-full font-semibold text-white bg-blue-600 h-10">
          🐱 Lakro.app is open source, feel free to contribute to this project -
          &nbsp;
          <Link href="https://github.com/notnick12/lakro.app">
            <a className="underline decoration-wavy" target="_blank">
              Contribute here
            </a>
          </Link>
        </div> */}
        <Header />
        <main className="flex flex-col w-10/12 items-center justify-center text-center mt-40">
          <h1 className="font-light mb-4 text-5xl max-w-3xl text-slate-900">
            A platform designed to make networking fun and{' '}
            <span className="text-blue-600">authentic</span>.
          </h1>
          <p className="max-w-xl text-lg text-slate-500 font-light">
            We're a platform where individuals can professionally network with
            other like-minded people and still be themselves and have fun.{' '}
          </p>
          <div className="flex flex-col mt-10 w-full items-center justify-center">
            <Button
              style={{
                backgroundColor: '#00aa55',
                marginBottom: '1rem',
                pointerEvents: 'none',
                width: '18rem',
              }}
            >
              💻 Status: Being Developed
            </Button>
            <Link href="https://discord.gg/U52nZh52zT">
              <Button
                style={{
                  width: '18rem',
                }}
              >
                🌍 Community: Discord Server
              </Button>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
