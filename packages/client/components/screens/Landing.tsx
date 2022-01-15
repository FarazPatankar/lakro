import { Footer } from '../layout/landing/Footer';
import { Header } from '../layout/landing/Header';
import { Wrapper } from '../layout/Wrapper';
import { Main } from '../layout/landing/Main';

import Head from '../../seo/Head';

export const Landing: React.FC = () => {
  return (
    <>
      <Head
        title="Lakro - Network with like-minded individuals, authentically."
        description="A platform designed to make networking fun and authentic."
      />
      <Header />
      <Wrapper>
        <Main />
        <Footer />
      </Wrapper>
    </>
  );
};
