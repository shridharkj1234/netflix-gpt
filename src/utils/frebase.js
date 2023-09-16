// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3GbxBwszJCPlPpyQ6G-pXfdk0b2HgEmg",
  authDomain: "netflixgpt-47dfd.firebaseapp.com",
  projectId: "netflixgpt-47dfd",
  storageBucket: "netflixgpt-47dfd.appspot.com",
  messagingSenderId: "672487989815",
  appId: "1:672487989815:web:1fdb3062c37fabd87b95b2",
  measurementId: "G-YHF411BF2N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
