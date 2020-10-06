import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCH33HB0LVzGpEGb6EAbzuG1QZ4MDdAnho",
  authDomain: "crwn-db-c1216.firebaseapp.com",
  databaseURL: "https://crwn-db-c1216.firebaseio.com",
  projectId: "crwn-db-c1216",
  storageBucket: "crwn-db-c1216.appspot.com",
  messagingSenderId: "598365320766",
  appId: "1:598365320766:web:842c780a3fe8bc89d1836f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


