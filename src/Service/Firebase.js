import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyACbXoewHC79JSMpoCnffovQ7TWwnpM7yE",
  authDomain: "my-react-chat-4e330.firebaseapp.com",
  projectId: "my-react-chat-4e330",
  storageBucket: "my-react-chat-4e330.appspot.com",
  messagingSenderId: "595913605732",
  appId: "1:595913605732:web:d9e5c62d8d88fc5f0ad571",
  databaseURL:
    "https://my-react-chat-4e330-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

export const signUp = async (email, pass) => {
  await createUserWithEmailAndPassword(auth, email, pass);
};
export const logIn = async (email, pass) => {
  await signInWithEmailAndPassword(auth, email, pass);
};
export const logOut = async () => {
  await signOut(auth);
};

export const userRef = ref(db, "user");
export const userNameRef = ref(db, "user/name");
export const userShowNameRef = ref(db, "user/showName");
