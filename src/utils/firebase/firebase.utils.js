import { initializeApp } from 'firebase/app';
import { signInWithPopup } from 'firebase/auth';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWtihPopUp, 
    GoogleAuthProvider 
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

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

 export const createUserDocumentFromAuth = async (userAuth) => {
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
              });

          } catch (error) {
            console.log('error creating the user', error.message);
          }
          return userDocRef;
      }



      //if user data exists

      //return userDocRef

      

  }