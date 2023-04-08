import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGbnVzPSvC-eigvAToojWoeFd2aCRuJvA",
  authDomain: "module-6-e5ef8.firebaseapp.com",
  projectId: "module-6-e5ef8",
  storageBucket: "module-6-e5ef8.appspot.com",
  messagingSenderId: "573190893784",
  appId: "1:573190893784:web:29a92017227307628ba7ad",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database=getDatabase(app)