import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyC75nhesM6hbI1GMZtvudOuS1isPd5yMdk",
  authDomain: "shopport-fa467.firebaseapp.com",
  projectId: "shopport-fa467",
  storageBucket: "shopport-fa467.appspot.com",
  messagingSenderId: "69729263371",
  appId: "1:69729263371:web:fd175a6fa6a6c1faeacc0e",
  measurementId: "G-P6H2JXWW51",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;