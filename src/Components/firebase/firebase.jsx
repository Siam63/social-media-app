import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC035pFGOYGQ5UkjRL7iPSIMXHdx_L0wcg",
  authDomain: "social-media-app-1729e.firebaseapp.com",
  projectId: "social-media-app-1729e",
  storageBucket: "social-media-app-1729e.appspot.com",
  messagingSenderId: "776180674992",
  appId: "1:776180674992:web:25d6ac7e104f503b156675"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged };