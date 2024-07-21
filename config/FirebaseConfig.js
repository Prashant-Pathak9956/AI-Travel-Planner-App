// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCs8PXdXwWKrN0d3gkPOFI4-bwFG4quKA",
  authDomain: "ai-travel-planner-app-9a13c.firebaseapp.com",
  projectId: "ai-travel-planner-app-9a13c",
  storageBucket: "ai-travel-planner-app-9a13c.appspot.com",
  messagingSenderId: "807508318169",
  appId: "1:807508318169:web:5145d2d7e102696ad56bc8",
  measurementId: "G-T07RFMF2RK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
