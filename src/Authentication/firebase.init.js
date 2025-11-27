// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByhBFISTo_URmR4zCh905a52Dnabl0SX4",
  authDomain: "heroio-nextjs.firebaseapp.com",
  projectId: "heroio-nextjs",
  storageBucket: "heroio-nextjs.firebasestorage.app",
  messagingSenderId: "434531986596",
  appId: "1:434531986596:web:78760458f32b34e6504a31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);