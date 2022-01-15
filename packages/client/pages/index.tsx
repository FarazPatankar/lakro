import { IndexPage } from '../components/screens/IndexPage';
import { Landing } from '../components/screens/Landing';
import { Wrapper } from '../components/layout/Wrapper';
import { useUser } from '../lib/auth/Api';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const { data, loading, error } = useUser();

  if (loading || error) {
    return (
      <Wrapper>
        <div className="h-full flex items-center justify-center">
          <h2 className="text-white">Loading...</h2>
        </div>
      </Wrapper>
    );
  }

  return <>{data?.user ? <IndexPage /> : <Landing />}</>;
};

export default Home;
