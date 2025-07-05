import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import type { User } from 'firebase/auth';
import { app } from '.';


export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(getFirestore(app), 'users', userAuth.uid);
  console.log('userDocRef', userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log('userSnapshot', userSnapshot);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.error('Error creating the user', error);
    }
  } else {
    // User data already exists
    return userSnapshot.data();
  }
};