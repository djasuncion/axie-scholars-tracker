import { useContext } from 'react';
import type { NextPage } from 'next';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GoogleUser, User } from '../../lib/firebase';
import { UserContext } from '../../lib/context';

import { ScholarTable } from '../components';
import { Typography, Button, CircularProgress } from '@mui/material';

const Home: NextPage = () => {
  const [user, loading, error] = useAuthState(GoogleUser.auth);
  const { scholar, username } = useContext(UserContext);

  console.log(scholar, username);

  function addNewUser() {
    if (user) {
      const newUser = new User(user.uid);
      newUser.addUser();
    }
  }

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
  } else if (loading) {
    return <CircularProgress />;
  } else {
    return (
      <Button variant="contained" color="primary" onClick={GoogleUser.login}>
        Login
      </Button>
    );
  }
};

export default Home;
