import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA5Qjr6HXYFyZa6wN2iS6FHUOXvV4lscuc",
  authDomain: "react-chat-app-ebf2d.firebaseapp.com",
  projectId: "react-chat-app-ebf2d",
  storageBucket: "react-chat-app-ebf2d.appspot.com",
  messagingSenderId: "758800992787",
  appId: "1:758800992787:web:84d213c3991ed32f818de6",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export const storage = getStorage(app);
export const db = getFirestore(app)
