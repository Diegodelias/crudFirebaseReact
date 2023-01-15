
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "",
  authDomain: "crud-firebase-react-fbee5.firebaseapp.com",
  projectId: "crud-firebase-react-fbee5",
  storageBucket: "crud-firebase-react-fbee5.appspot.com",
  messagingSenderId: "695133491261",
  appId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
