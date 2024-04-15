// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-37bc8.firebaseapp.com",
  projectId: "mern-estate-37bc8",
  storageBucket: "mern-estate-37bc8.appspot.com",
  messagingSenderId: "595534378045",
  appId: "1:595534378045:web:5d5ec10de7fe72dc7e6654",
  measurementId: "G-KJK5TH0D9Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
