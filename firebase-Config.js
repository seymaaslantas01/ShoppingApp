// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDs74uP-cEci-GJuQPEaEj7GbRgG_WX-o",
  authDomain: "shopproject-dbb2c.firebaseapp.com",
  projectId: "shopproject-dbb2c",
  storageBucket: "shopproject-dbb2c.appspot.com",
  messagingSenderId: "1044914610989",
  appId: "1:1044914610989:web:32f5953f28c9887e63e9a4"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const fireStore = firebase.firestore();

export { auth, fireStore };