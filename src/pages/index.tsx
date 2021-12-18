import type { NextPage } from 'next';
import Head from 'next/head';

import Button from '@mui/material/Button';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Scholars Tracker</title>
        <meta name="description" content="My Axie Infinity Scholars Tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Button variant="contained">Login</Button>
    </div>
  );
};

export default Home;
