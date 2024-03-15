// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCKHiTcHjyOCD-o7tpCYg_LCcW_tqOLqZs',
  authDomain: 'house-marketplan-app.firebaseapp.com',
  projectId: 'house-marketplan-app',
  storageBucket: 'house-marketplan-app.appspot.com',
  messagingSenderId: '154717260445',
  appId: '1:154717260445:web:682df55539fc77d3e6e274',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;
