// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2sF42tpKe9D1ec_f3JduXEqE7kIy6npI",
  authDomain: "wc2022-prediction.firebaseapp.com",
  projectId: "wc2022-prediction",
  storageBucket: "wc2022-prediction.appspot.com",
  messagingSenderId: "829482593677",
  appId: "1:829482593677:web:32ab7c96506fc13eb061c4",
  measurementId: "G-ZVJRQJ2HY0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
