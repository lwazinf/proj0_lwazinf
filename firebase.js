// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW2ORuALVByFYHqp7CHCB2sguQ38YIlgw",
  authDomain: "project0lwazinf.firebaseapp.com",
  projectId: "project0lwazinf",
  storageBucket: "project0lwazinf.appspot.com",
  messagingSenderId: "39610778038",
  appId: "1:39610778038:web:997e1be9d619d53dcac117"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db };
