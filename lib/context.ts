import { createContext } from 'react';

interface Scholar {
  name?: string;
}
interface UserData {
  scholar?: Scholar | null;
  username: string;
}

const defaultState = {
  scholar: {
    name: 'Axie',
  },
  username: '',
};

export const UserContext = createContext<UserData>(defaultState);
