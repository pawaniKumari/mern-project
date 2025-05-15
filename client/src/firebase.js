// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-project-e6d94.firebaseapp.com",
  projectId: "mern-project-e6d94",
  storageBucket: "mern-project-e6d94.firebasestorage.app",
  messagingSenderId: "763438901521",
  appId: "1:763438901521:web:ae4605774695e29fa8c4b0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
