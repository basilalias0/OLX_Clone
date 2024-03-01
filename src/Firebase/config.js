import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCYR_rf6w4xdI-_Uc44gShCbUDhIsLRuXw",
    authDomain: "olx-clone-44be2.firebaseapp.com",
    projectId: "olx-clone-44be2",
    storageBucket: "olx-clone-44be2.appspot.com",
    messagingSenderId: "132069160522",
    appId: "1:132069160522:web:b13039d8d8c4492e2718b3",
    measurementId: "G-ZTQDXRN2S0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { auth, db, storage };