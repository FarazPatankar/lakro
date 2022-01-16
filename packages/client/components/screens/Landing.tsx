import { Footer } from '../layout/landing/Footer';
import { Header } from '../layout/landing/Header';
import { Wrapper } from '../layout/Wrapper';
import { Main } from '../layout/landing/Main';
import { About } from '../layout/landing/About';
import { OSS } from '../layout/landing/OSS';

import Head from '../../seo/Head';

export const Landing: React.FC = () => {
  return (
    <>
      <Head
        title="Lakro - Network with like-minded individuals."
        description="A platform designed to make networking fun and authentic."
      />
      <Header />
      <Wrapper>
        <Container>
          <Main />
          <About />
          <OSS />
          <Footer />
        </Container>
      </Wrapper>
    </>
  );
};

const Container: React.FC = ({ children }) => {
  return <div className="flex flex-col items-center w-10/12">{children}</div>;
};
