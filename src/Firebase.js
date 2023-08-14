import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUyK5_Nmi4awZmuwS31ekM0hdjuLSiIcI",
  authDomain: "e-clone-e369b.firebaseapp.com",
  projectId: "e-clone-e369b",
  storageBucket: "e-clone-e369b.appspot.com",
  messagingSenderId: "626623593576",
  appId: "1:626623593576:web:9d39064ebe198028308fdd",
  measurementId: "G-1H7HC33S1J",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
