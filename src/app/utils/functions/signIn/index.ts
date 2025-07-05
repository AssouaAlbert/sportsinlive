import {
  signInWithFacebookPopUp,
  signInWithGooglePopUp,
  signInWithTwitterPopUp,
} from '../../../../utils/firebase/signIn';
import { createUserDocumentFromAuth } from '../../../../utils/firebase/storage';

export const signInWithGoogle = async () => {
  const res = await signInWithGooglePopUp();
  createUserDocumentFromAuth(res.user, {});
  console.log('User signed in with Google:', res.user);
};

export const signInWithFacebook = async () => {
  const res = await signInWithFacebookPopUp();
  await createUserDocumentFromAuth(res.user, {});
  console.log('User signed in with Facebook:', res.user);
};

export const signInWithTwitter = async () => {
  const res = await signInWithTwitterPopUp();
  await createUserDocumentFromAuth(res.user, {});
  console.log('User signed in with Twitter:', res.user);
};
