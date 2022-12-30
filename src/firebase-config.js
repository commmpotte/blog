import {
    initializeApp
} from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {
    getAuth,
    GoogleAuthProvider
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC6G8f4COXXubDSH3pKo30e_yrGlusnuzg",
  authDomain: "blog-dev-f4b58.firebaseapp.com",
  projectId: "blog-dev-f4b58",
  storageBucket: "blog-dev-f4b58.appspot.com",
  messagingSenderId: "97811238406",
  appId: "1:97811238406:web:66fea03dfbc1675e0dbd87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
