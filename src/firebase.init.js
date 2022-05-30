// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxF8gU73IR-g3tBjmbYnmUm7tI-OfZtd0",
    authDomain: "made-in-bd-970d3.firebaseapp.com",
    projectId: "made-in-bd-970d3",
    storageBucket: "made-in-bd-970d3.appspot.com",
    messagingSenderId: "981475177496",
    appId: "1:981475177496:web:bdedd6100403da13afff6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;