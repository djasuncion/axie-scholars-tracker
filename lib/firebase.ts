// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBvCW8O5Bmb4AMnhf77aDPlA8oLfSutuEg',
  authDomain: 'axie-scholars-tracker.firebaseapp.com',
  projectId: 'axie-scholars-tracker',
  storageBucket: 'axie-scholars-tracker.appspot.com',
  messagingSenderId: '929738943539',
  appId: '1:929738943539:web:b521e797d61add858e0746',
  measurementId: 'G-1B5JHNCV2W',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Google Auth  Provider
const GoogleProvider = new GoogleAuthProvider();

// Firestore
export const db = getFirestore();

// Exports

class Auth {
  auth = getAuth();

  async login() {
    await signInWithPopup(GoogleUser.auth, GoogleProvider);
  }
  async logout() {
    await signOut(GoogleUser.auth);
  }
}

export class User {
  uid: string;

  constructor(uid: string) {
    this.uid = uid;
  }

  async addUser() {
    try {
      const docRef = await addDoc(collection(db, `users/${this.uid}`), {
        first: 'Alan',
        middle: 'Mathison',
        last: 'Turing',
        born: 1912,
      });

      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }
}

export const GoogleUser = new Auth();
