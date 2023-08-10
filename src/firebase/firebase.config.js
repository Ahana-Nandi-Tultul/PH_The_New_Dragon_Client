// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIgsIa6fVSg52wPK_2QHzK1WuCu6mdGEg",
  authDomain: "ph-the-news-dragon.firebaseapp.com",
  projectId: "ph-the-news-dragon",
  storageBucket: "ph-the-news-dragon.appspot.com",
  messagingSenderId: "205150265031",
  appId: "1:205150265031:web:ac71e3ac875c1ec3c3e8e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;