import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDI09m-DaEdt2q2LwJPj_dKV7A7M9zs1w4",
    authDomain: "coderhousereactjs-229ab.firebaseapp.com",
    projectId: "coderhousereactjs-229ab",
    storageBucket: "coderhousereactjs-229ab.appspot.com",
    messagingSenderId: "681477928637",
    appId: "1:681477928637:web:db74203ca79d88c443a9d4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);