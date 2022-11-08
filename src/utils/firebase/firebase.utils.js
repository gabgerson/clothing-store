import { initializeApp } from 'firebase/app';
// import { signInWithPopup } from 'firebase/auth';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDfIkS0BHAF9Jxz6BHx1pSiGunoSo9uXjI",
    authDomain: "crwn-clothing-db-d1090.firebaseapp.com",
    projectId: "crwn-clothing-db-d1090",
    storageBucket: "crwn-clothing-db-d1090.appspot.com",
    messagingSenderId: "514363727809",
    appId: "1:514363727809:web:afdab385cada91e2d41940"
  };
  
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={displayName:''}) => {
      if (!userAuth) return;

      const userDocRef = doc(db, 'users', userAuth.uid);

      console.log(userDocRef);

      const userSnapshot = await getDoc(userDocRef);
      console.log(userSnapshot);
      console.log(userSnapshot.exists());

      if(!userSnapshot.exists()){
          const { displayName, email } = userAuth;
          const createdAt = new Date();

          try{
              
              await setDoc(userDocRef, {
              displayName,
              email,
              createdAt,
              ...additionalInformation,
              });
            

          } catch (error) {
            console.log('error creating the user', error.message);
          }
          return userDocRef;
      }

      //if user data exists

      //return userDocRef

  }
export const createAuthUserWithEmailAndPassword= async (email,password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)
  }


export const signInAuthWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
   
  return await signInWithEmailAndPassword(auth, email, password);

}