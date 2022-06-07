// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7qylKxiiQwJf7uPbzogC0LY85kbfYK10",
  authDomain: "fir-auth-b9ddc.firebaseapp.com",
  projectId: "fir-auth-b9ddc",
  storageBucket: "fir-auth-b9ddc.appspot.com",
  messagingSenderId: "1088301829711",
  appId: "1:1088301829711:web:21f8c95135c23d25a6643a",
  measurementId: "G-Y8F4J6MGDY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;