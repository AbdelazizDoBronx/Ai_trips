// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTupfP6LFev4Co1orUsUhwf0KiRYI8ZdE",
  authDomain: "aitrips-85c0a.firebaseapp.com",
  projectId: "aitrips-85c0a",
  storageBucket: "aitrips-85c0a.firebasestorage.app",
  messagingSenderId: "19321428491",
  appId: "1:19321428491:web:2b9963569082a25f0bc50e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);