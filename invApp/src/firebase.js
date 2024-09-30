import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDJj-zxsmoWb0kswAkIWjmwy1-T4nqS6to",
    authDomain: "inventory-e3eb0.firebaseapp.com",
    projectId: "inventory-e3eb0",
    storageBucket: "inventory-e3eb0.appspot.com",
    messagingSenderId: "126714384292",
    appId: "1:126714384292:web:6f2f07be3a9c6d3af4fb31",
    measurementId: "G-QKS84VF1K9"
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }