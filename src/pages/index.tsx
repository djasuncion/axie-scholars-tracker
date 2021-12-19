import { useContext } from 'react';
import type { NextPage } from 'next';

import { GoogleUser } from '../../lib/firebase';
import { UserContext } from '../../lib/context';

import { ScholarTable } from '../components';
import { Typography, Button } from '@mui/material';

const Home: NextPage = () => {
  const { user, username } = useContext(UserContext);

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
        <Typography>displayName</Typography>
        <Typography>email</Typography>
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
