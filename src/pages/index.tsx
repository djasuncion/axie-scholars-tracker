import type { NextPage } from 'next';
import Head from 'next/head';

import { ScholarTable } from '../components';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Scholars Tracker</title>
        <meta name="description" content="My Axie Infinity Scholars Tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ScholarTable />
    </div>
  );
};

export default Home;
