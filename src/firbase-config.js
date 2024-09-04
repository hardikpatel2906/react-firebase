// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7q2YMWaSF1l-SngaUbXk4tK12XoEzloE",
  authDomain: "react-auth-c5127.firebaseapp.com",
  projectId: "react-auth-c5127",
  storageBucket: "react-auth-c5127.appspot.com",
  messagingSenderId: "150562783230",
  appId: "1:150562783230:web:8e16669fc8a08878ad4aaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);