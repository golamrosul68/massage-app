// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCWFB4m0pj0T6SsS3seVsS70DFCF029iY",
  authDomain: "massage-app-2577c.firebaseapp.com",
  projectId: "massage-app-2577c",
  storageBucket: "massage-app-2577c.firebasestorage.app",
  messagingSenderId: "939661547675",
  appId: "1:939661547675:web:d9018f7255ed9d1758ce3e"
};
const auth = getAuth();
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {auth}