// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG7-GcE44ufLpaLeWxdSlaaAXOfOPiPYw",
  authDomain: "crud2-1541b.firebaseapp.com",
  projectId: "crud2-1541b",
  storageBucket: "crud2-1541b.firebasestorage.app",
  messagingSenderId: "48952175757",
  appId: "1:48952175757:web:cfc15a1b416be0a31a46c4",
  measurementId: "G-WZ85Y0N3VY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);