import { NextPage } from 'next';
import { Wrapper } from '../components/layout/Wrapper';
import { Button } from '../components/ui/Button';
import Link from 'next/link';
import Head from '../seo/Head';

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Head
        title="404 - Page not found."
        description="A platform designed to make networking fun and authentic."
      />
      <Wrapper>
        <div className="flex items-center flex-col justify-center h-screen">
          <h1 className="text-2xl text-white font-bold">
            Sorry, we could not find this page.
          </h1>
          <p className="text-slate-300 font-light mb-5">
            Status code: 404 (Not Found)
          </p>
          <Link href="/">
            <Button>Return to home page</Button>
          </Link>
        </div>
      </Wrapper>
    </>
  );
};

export default NotFoundPage;
