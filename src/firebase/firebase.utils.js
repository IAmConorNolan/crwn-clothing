import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBIAJgc769uaj6INv-sND0R_48J2weo1dw",
    authDomain: "crwn-db-2c0df.firebaseapp.com",
    databaseURL: "https://crwn-db-2c0df.firebaseio.com",
    projectId: "crwn-db-2c0df",
    storageBucket: "",
    messagingSenderId: "326300910501",
    appId: "1:326300910501:web:0edf1d7e8a3825c2"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) {
      return;      
    }

    

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot= await userRef.get();

    if (!snapShot.exists) {
      //Create A User
      const {displayName, email, photoURL} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set( {
          displayName,
          email,
          createdAt,
          photoURL,
          ...additionalData
        } )
      } catch(error) {
        alert(`error creating user: ${error}`);
      }   
    }

    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;