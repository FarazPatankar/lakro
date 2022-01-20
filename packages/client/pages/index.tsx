import { LoadingScreen } from '../components/screens/LoadingScreen';
import { IndexPage } from '../components/screens/IndexPage';
import { Landing } from '../components/screens/Landing';
import { useUser } from '../lib/auth/Api';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const { data, loading, error } = useUser();

  /*
    --- IMPORTANT NOTE ---
    
    When making a pr or pushing to prod please
    be sure to comment this out, but obviously
    when you're working on this be sure to
    remove the comment, I'll remove this note
    when I get the API up and running. - Nicholas
  */

  if (loading || error) {
    return <LoadingScreen />;
  }

  return <>{data?.user ? <IndexPage /> : <Landing />}</>;
};

export default Home;
