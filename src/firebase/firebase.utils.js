import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDubfbY2JF_h6y5oDh5hjHabk4WlkGDrws",
  authDomain: "crwn-db-c724b.firebaseapp.com",
  databaseURL: "https://crwn-db-c724b.firebaseio.com",
  projectId: "crwn-db-c724b",
  storageBucket: "",
  messagingSenderId: "1025457806376",
  appId: "1:1025457806376:web:a8674d997ea7e02d6f291d",
  measurementId: "G-09VWTEKRYW"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
