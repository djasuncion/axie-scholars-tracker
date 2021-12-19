import { createContext } from 'react';
import { User } from './firebase';

interface GoogleUser {
  displayName?: string;
  email?: string;
}

export interface UserData {
  uid?: string;
  user?: GoogleUser;
  username?: string;
}

const defaultState = {
  uid: '',
  user: {
    displayName: 'Jane Doe',
    email: 'janedoe@there.com',
  },
  username: '',
};

export const UserContext = createContext<UserData>(defaultState);
