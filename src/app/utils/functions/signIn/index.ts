import {
  signInWithFacebookRedirect,
  signInWithGoogleRedirect,
  signInWithTwitterRedirect,
} from '../../../../utils/firebase';

export const signInWithGoogle = () => {
  return signInWithGoogleRedirect();
};

export const signInWithFacebook = () => {
  return signInWithFacebookRedirect();
};

export const signInWithTwitter = () => {
  return signInWithTwitterRedirect();
};

