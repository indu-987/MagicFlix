import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD45ph2oNShP0lCv9afc63xOC4ID_gmpjM",
  authDomain: "disneyclone-3eeac.firebaseapp.com",
  projectId: "disneyclone-3eeac",
  storageBucket: "disneyclone-3eeac.appspot.com",
  messagingSenderId: "612468887721",
  appId: "1:612468887721:web:eb7ed403061e7f67fbd9b8",
  measurementId: "G-CQYJ2G0PKQ"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
