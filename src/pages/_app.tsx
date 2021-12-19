import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { UserContext } from '../../lib/context';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GoogleUser, db } from '../../lib/firebase';

import { doc, setDoc, onSnapshot } from 'firebase/firestore';

function MyApp({ Component, pageProps }: AppProps) {
  const [user] = useAuthState(GoogleUser.auth);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    let unsubscribe;

    if (user) {
      addNewUser(user.uid);
    }

    async function addNewUser(uid: string) {
      const docRef = await setDoc(doc(db, `users/${uid}`), {
        first: 'Alan',
        middle: 'Mathison',
        last: 'Turing',
        born: 1912,
      });
    }

    return unsubscribe;
  }, [user]);
  return (
    <UserContext.Provider value={{ scholar: {}, username: 'test' }}>
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
