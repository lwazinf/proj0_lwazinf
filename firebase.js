// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASckwU6L1Che0wXOZaIK2O16bJXfsOehs",  
  authDomain: "lwazinfcom.firebaseapp.com",  
  projectId: "lwazinfcom",  
  storageBucket: "lwazinfcom.appspot.com",  
  messagingSenderId: "640982077162",  
  appId: "1:640982077162:web:fd8d4eb3045b6c3f745193",  
  measurementId: "G-HC1ZTZ8GCZ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db };
