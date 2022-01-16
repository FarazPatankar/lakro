import type { AppProps } from 'next/app';
import { CookiesProvider } from 'react-cookie';
import { SWRConfig } from 'swr';
import { Wrapper } from '../components/layout/Wrapper';
import { apiRequestHandler } from '../lib/auth/Api';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <SWRConfig
        value={{
          fetcher: apiRequestHandler,
          refreshInterval: 120000,
          revalidateOnFocus: false,
        }}
      >
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </SWRConfig>
    </CookiesProvider>
  );
}

export default MyApp;
