/* eslint-disable no-undef */
import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";
import 'dotenv/config';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API,
    authDomain: process.env.AuthDomain,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.StorageBucket,
    messagingSenderId: process.env.MessagingSenderId,
    appId: process.env.AppId,
}

// Initialize Firebase app
firebase.initializeApp(firebaseConfig);

// Get access to Firestore and Firebase Auth
const db = firebase.firestore();
const auth = firebase.auth();

// Export Firebase and its functionalities
export { db, auth, firebase };