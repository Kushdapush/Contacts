import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "contacts-c3567.firebaseapp.com",
  projectId: "contacts-c3567",
  storageBucket: "contacts-c3567.appspot.com",
  messagingSenderId: "884985167388",
  appId: "1:884985167388:web:7343510a28f405c39569d9",
  measurementId: "G-1LCS99RDEP"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);