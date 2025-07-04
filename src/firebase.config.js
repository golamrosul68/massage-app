// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCWFB4m0pj0T6SsS3seVsS70DFCF029iY",
  authDomain: "massage-app-2577c.firebaseapp.com",
  projectId: "massage-app-2577c",
  storageBucket: "massage-app-2577c.appspot.com", // ✅ তুমি আগে এটা ভুলে লিখেছো: firebasestorage.app
  messagingSenderId: "939661547675",
  appId: "1:939661547675:web:d9018f7255ed9d1758ce3e",
};

// ✅ First initialize the app
const app = initializeApp(firebaseConfig);

// ✅ Then use it to get auth
const auth = getAuth(app);

// ✅ Export both
export { app, auth };
