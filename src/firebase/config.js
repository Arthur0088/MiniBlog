
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBdcEsFvq3NAEqwOjIXbtlM443J0EzqHOk",
  authDomain: "miniblog-1e004.firebaseapp.com",
  projectId: "miniblog-1e004",
  storageBucket: "miniblog-1e004.appspot.com",
  messagingSenderId: "620314315994",
  appId: "1:620314315994:web:91a393b868f087f134a9e3"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}