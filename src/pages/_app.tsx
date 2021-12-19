import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { UserContext } from '../../lib/context';
import { useUserData } from '../../lib/hooks';

function MyApp({ Component, pageProps }: AppProps) {
  const userData = useUserData();

  return (
    <UserContext.Provider value={userData}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Scholars Tracker</title>
        <meta name="description" content="My Axie Infinity Scholars Tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
