
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhExgCaaRAVYSVjFhXuDLumcnuQGPL4mg",
  authDomain: "clint-auth-system.firebaseapp.com",
  databaseURL: "https://clint-auth-system-default-rtdb.firebaseio.com",
  projectId: "clint-auth-system",
  storageBucket: "clint-auth-system.appspot.com",
  messagingSenderId: "700807259562",
  appId: "1:700807259562:web:47429bc98d61ec313b37d3"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();


export default app;


