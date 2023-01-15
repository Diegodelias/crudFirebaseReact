
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCq32lfwBOgRuwys4gUfexINq87mmDYvgg",
  authDomain: "crud-firebase-react-fbee5.firebaseapp.com",
  projectId: "crud-firebase-react-fbee5",
  storageBucket: "crud-firebase-react-fbee5.appspot.com",
  messagingSenderId: "695133491261",
  appId: "1:695133491261:web:66fc1fd4a2508ec7e49a54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)