
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBQ-ldYv8A4yiWZT3fg1015IwiIXPuzKjg",
  authDomain: "todo-app-10217.firebaseapp.com",
  projectId: "todo-app-10217",
  storageBucket: "todo-app-10217.appspot.com",
  messagingSenderId: "847562153294",
  appId: "1:847562153294:web:5583d50fddd46da098521f",
  measurementId: "G-XGKEHCGDND"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };