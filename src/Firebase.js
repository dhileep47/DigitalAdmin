// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDkZut93DGVp9XK5D44gbBpB9DaJKt4ANc",
  authDomain: "digitaldreamcreations-78dd7.firebaseapp.com",
  projectId: "digitaldreamcreations-78dd7",
  storageBucket: "digitaldreamcreations-78dd7.appspot.com",
  messagingSenderId: "138605979227",
  appId: "1:138605979227:web:d57a8057e0530a06bc817e",
  measurementId: "G-1TC00M0CHW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const storage = getStorage(app); 


export default db;