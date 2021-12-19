import type { NextPage } from 'next';
import Head from 'next/head';
import { useAuthState } from 'react-firebase-hooks/auth';
import Button from '@mui/material/Button';
import { GoogleUser, auth } from '../../lib/firebase';

import { ScholarTable } from '../components';
import { Typography } from '@mui/material';

const Home: NextPage = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(`
  Loading: ${loading}
  Error: ${error}
  User: ${user}`);

  if (user) {
    return (
      <>
        <Button
          variant="contained"
          color="secondary"
          onClick={GoogleUser.logout}
        >
          Logout
        </Button>
        <Typography>{user.displayName}</Typography>
        <Typography>{user.email}</Typography>
      </>
    );
  } else {
    return (
      <Button variant="contained" color="primary" onClick={GoogleUser.login}>
        Login
      </Button>
    );
  }
};

export default Home;
