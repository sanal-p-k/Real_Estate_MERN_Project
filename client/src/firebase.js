// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-5594e.firebaseapp.com",
  projectId: "real-estate-5594e",
  storageBucket: "real-estate-5594e.appspot.com",
  messagingSenderId: "615375245906",
  appId: "1:615375245906:web:a7e0f7e8d37da7fe13c58b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);



