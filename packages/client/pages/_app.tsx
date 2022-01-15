import type { AppProps } from 'next/app';
import { CookiesProvider } from 'react-cookie';
import { SWRConfig } from 'swr';
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
        <Component {...pageProps} />
      </SWRConfig>
    </CookiesProvider>
  );
}

export default MyApp;
