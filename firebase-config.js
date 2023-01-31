import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyByhO5IeULyCq9GxaCyTXYLtXEHJ8Y2p3s",
    authDomain: "jobs-7b5ff.firebaseapp.com",
    projectId: "jobs-7b5ff",
    storageBucket: "jobs-7b5ff.appspot.com",
    messagingSenderId: "182333115094",
    appId: "1:182333115094:web:3520c0bf6bdcf8daed9777",
    measurementId: "G-SCNNHQ1CT9"
  };
  
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore();

  