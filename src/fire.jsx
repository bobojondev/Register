// // import firebase from 'firebase'
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// // import {firebase} from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA9om_pk4kMKynsgjivmFsk8qekuVe93kA",
    authDomain: "register-d51c1.firebaseapp.com",
    projectId: "register-d51c1",
    storageBucket: "register-d51c1.appspot.com",
    messagingSenderId: "279062162831",
    appId: "1:279062162831:web:31e5882604916ee313effa"
};
  
const firebaseApp  = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
export default firebaseApp;