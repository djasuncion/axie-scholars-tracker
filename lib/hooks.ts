import { useState, useEffect } from 'react';
import { doc, setDoc, onSnapshot } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GoogleUser, db } from './firebase';

import { UserData } from './context';

export function useUserData() {
  const [user] = useAuthState(GoogleUser.auth);
  const [username, setUsername] = useState('');

  useEffect(() => {
    let unsubscribe: any;
    async function addNewUser(data: UserData) {
      const docRef = await setDoc(doc(db, `users/${data.uid}`), {});
      unsubscribe = onSnapshot(doc(db, `users/${data.uid}`), (doc) => {
        setUsername(doc.data()?.username);
      });
    }

    if (user) {
      const myUser = {
        uid: user.uid || '',
        user:
          {
            displayName: user.displayName || '',
            email: user.email || '',
          } || null,
        username: '',
      };

      addNewUser(myUser);
    } else {
      setUsername('');
    }

    return unsubscribe;
  }, [user]);

  return { user, username };
}
