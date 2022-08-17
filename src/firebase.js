import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBDh2gnGTTmmLYPnenUqJRp7jCUBBqjW7w",
    authDomain: "twitter-clone-9ac5f.firebaseapp.com",
    projectId: "twitter-clone-9ac5f",
    storageBucket: "twitter-clone-9ac5f.appspot.com",
    messagingSenderId: "1001498249560",
    appId: "1:1001498249560:web:39aa0bd767334f13f03d2d"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db