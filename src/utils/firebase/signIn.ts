import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import {
  auth,
  googleAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider,
} from '.';

export const signInWithGooglePopUp = () =>
  signInWithPopup(auth, googleAuthProvider);

export const signInWithEmail = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const signInWithFacebookPopUp = () =>
  signInWithPopup(auth, facebookAuthProvider);

export const signInWithTwitterPopUp = () =>
  signInWithPopup(auth, twitterAuthProvider);

