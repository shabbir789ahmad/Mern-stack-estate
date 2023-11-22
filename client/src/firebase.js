// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-624b8.firebaseapp.com",
  projectId: "mern-estate-624b8",
  storageBucket: "mern-estate-624b8.appspot.com",
  messagingSenderId: "498322834875",
  appId: "1:498322834875:web:1c3bd35a9259ffa62df09e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);