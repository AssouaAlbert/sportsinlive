// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  GoogleAuthProvider,
FacebookAuthProvider,
TwitterAuthProvider,
signInWithRedirect,
signInWithEmailAndPassword
} from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBPMn7KgMkfdf-ds1m6RiC0tPqaBETPltM',
  authDomain: 'livesportstats-com.firebaseapp.com',
  projectId: 'livesportstats-com',
  storageBucket: 'livesportstats-com.firebasestorage.app',
  messagingSenderId: '688394296626',
  appId: '1:688394296626:web:cc222d97473c4037d5cb2b',
  measurementId: 'G-561X5NDLT1',
};

export const app = initializeApp(firebaseConfig);

console.log('Firebase app initialized:', app);

export const auth = getAuth(app);
console.log('Firebase Authentication initialized:', auth);

export const googleAuthProvider = new GoogleAuthProvider();
export const twitterAuthProvider = new TwitterAuthProvider();
export const facebookAuthProvider = new FacebookAuthProvider();

googleAuthProvider.setCustomParameters({
  prompt: 'select_account',
});

twitterAuthProvider.setCustomParameters({
  prompt: 'select_account',
});

facebookAuthProvider.setCustomParameters({
  display: 'popup',
});


export const signInWithGoogleRedirect = () =>
  signInWithRedirect(getAuth(), googleAuthProvider);

export const signInWithEmail = (email: string, password: string) =>
  signInWithEmailAndPassword(getAuth(), email, password);

export const signInWithFacebookRedirect = () =>
  signInWithRedirect(getAuth(), facebookAuthProvider);

export const signInWithTwitterRedirect = () =>
  signInWithRedirect(getAuth(), twitterAuthProvider);


export const analytics = getAnalytics(app);
console.log('Firebase Analytics initialized:', analytics);