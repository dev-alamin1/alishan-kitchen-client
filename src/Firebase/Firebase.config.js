// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqMqjgffATZkvVZ05vUVm6b1Rgqs-iDhQ",
  authDomain: "alishan-kitchen.firebaseapp.com",
  projectId: "alishan-kitchen",
  storageBucket: "alishan-kitchen.appspot.com",
  messagingSenderId: "971638853439",
  appId: "1:971638853439:web:9174f7cc2103ac7911cd8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;