// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Import getFirestore

const firebaseConfig = {
    apiKey: "AIzaSyBydIt4epUfHKQ--yeRSUyFKlKRlVPinhk",
    authDomain: "waiter-675d4.firebaseapp.com",
    projectId: "waiter-675d4",
    storageBucket: "waiter-675d4.firebasestorage.app",
    messagingSenderId: "493733064176",
    appId: "1:493733064176:web:1a91fc40bb6a836f054135",
    measurementId: "G-RZHK6FD37S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore(app); // Get Firestore instance

// Export the app and firestore instance
export { app, db }; // Export both app and db