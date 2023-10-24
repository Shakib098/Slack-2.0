import firebase from 'firebase';
// import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAs-u0iMUGMvae7mCnLBtWmEOFmckXgsCY",
    authDomain: "slack-clone-90e93.firebaseapp.com",
    projectId: "slack-clone-90e93",
    storageBucket: "slack-clone-90e93.appspot.com",
    messagingSenderId: "632523664432",
    appId: "1:632523664432:web:ef7ee468cfa7fa611e51f5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;