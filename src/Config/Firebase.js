import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getDownloadURL, getStorage,ref,uploadBytes} from "firebase/storage"
import { v4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyDgj0QXm3bZD-lqPylsvJVqPwQ8YGJFTGE",
  authDomain: "clonegithub-b4bcb.firebaseapp.com",
  projectId: "clonegithub-b4bcb",
  storageBucket: "clonegithub-b4bcb.appspot.com",
  messagingSenderId: "944090337831",
  appId: "1:944090337831:web:1adeeebdbb7a2cf7d07402"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) // Correo
export const googleProvider = new GoogleAuthProvider (); // Google
export const storage = getStorage(app) // Obtener Storage

