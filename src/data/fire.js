// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoZZFurX1wHDu4_fylzBpiQ7qMH-2SZ-s",
  authDomain: "kurt-strands.firebaseapp.com",
  projectId: "kurt-strands",
  storageBucket: "kurt-strands.appspot.com",
  messagingSenderId: "492834380512",
  appId: "1:492834380512:web:3d7490de433469fdcf8e85",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
