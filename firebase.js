// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGv_PBuP7g0LfvHIyOE3YbQ8Rd0TXa34o",
  authDomain: "finite-389b7.firebaseapp.com",
  projectId: "finite-389b7",
  storageBucket: "finite-389b7.firebasestorage.app",
  messagingSenderId: "751266692113",
  appId: "1:751266692113:web:123dd5241fa040274205b0",
  measurementId: "G-CCYT4ZJQ62",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db };