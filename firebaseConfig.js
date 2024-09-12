// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnVPHJZtgftqTbKExIlSUfIhsqlyzjQHs",
  authDomain: "news-website-main-70407.firebaseapp.com",
  projectId: "news-website-main-70407",
  storageBucket: "news-website-main-70407.appspot.com",
  messagingSenderId: "599940682193",
  appId: "1:599940682193:web:b192993a2c1dda40e750f0",
  measurementId: "G-SV62X57TFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
