import { signInWithEmailAndPassword, signInWithRedirect } from 'firebase/auth';
import {
  auth,
  googleAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider,
} from '.';

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleAuthProvider);

export const signInWithEmail = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const signInWithFacebookRedirect = () =>
  signInWithRedirect(auth, facebookAuthProvider);

export const signInWithTwitterRedirect = () =>
  signInWithRedirect(auth, twitterAuthProvider);

