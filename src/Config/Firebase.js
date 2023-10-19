import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import {getDownloadURL, getStorage,ref,uploadBytes} from "firebase/storage"
import { v4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyA1uakW18Hi0vxMOCYJ5QP68l7acVvtZ9k",
  authDomain: "clonedegithub.firebaseapp.com",
  projectId: "clonedegithub",
  storageBucket: "clonedegithub.appspot.com",
  messagingSenderId: "687411689017",
  appId: "1:687411689017:web:a43138266c740422577fe8"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) // Correo
export const googleProvider = new GoogleAuthProvider (); // Google
export const storage = getStorage(app) // Obtener Storage
export const db = getFirestore(app)// FireStorage
