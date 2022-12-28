import {
    initializeApp
} from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {
    getAuth,
    GoogleAuthProvider
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCv2RYJB2RoOJyFqB2zv9TPbxAZQCvMreo",
  authDomain: "blog4-92419.firebaseapp.com",
  projectId: "blog4-92419",
  storageBucket: "blog4-92419.appspot.com",
  messagingSenderId: "172220242951",
  appId: "1:172220242951:web:55447b893c99c43e999ea2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
