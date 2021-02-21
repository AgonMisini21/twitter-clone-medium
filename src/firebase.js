import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC3pEdoPCQT52eCKAPeXRmxAreZANG3wNw",
  authDomain: "twitter-clone-medium.firebaseapp.com",
  projectId: "twitter-clone-medium",
  storageBucket: "twitter-clone-medium.appspot.com",
  messagingSenderId: "266203451081",
  appId: "1:266203451081:web:0a706fa5d89bf007bec718",
  measurementId: "G-S9J0XHMD79"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;