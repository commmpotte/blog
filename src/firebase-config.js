import {
    initializeApp
} from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {
    getAuth,
    GoogleAuthProvider
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAAM3jElP67SBE0vsNBrryKe_DZZVrlTQo",
  authDomain: "blog-959fa.firebaseapp.com",
  projectId: "blog-959fa",
  storageBucket: "blog-959fa.appspot.com",
  messagingSenderId: "576339048922",
  appId: "1:576339048922:web:763d9e03b178de650be8e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
