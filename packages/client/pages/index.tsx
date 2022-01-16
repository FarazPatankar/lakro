import { IndexPage } from '../components/screens/IndexPage';
import { Landing } from '../components/screens/Landing';
import { useUser } from '../lib/auth/Api';
import type { NextPage } from 'next';
import { LoadingScreen } from '../components/screens/LoadingScreen';

const Home: NextPage = () => {
  const { data, loading, error } = useUser();

  if (loading || error) {
    return <LoadingScreen />;
  }

  return <>{data?.user ? <IndexPage /> : <Landing />}</>;
};

export default Home;
