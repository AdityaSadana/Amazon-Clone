import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC4kcPWC_Gy5ahSMtGrgmBypXu8uWF9d14",
    authDomain: "shopping-love.firebaseapp.com",
    databaseURL: "https://shopping-love.firebaseio.com",
    projectId: "shopping-love",
    storageBucket: "shopping-love.appspot.com",
    messagingSenderId: "1065350019540",
    appId: "1:1065350019540:web:ae6a66b74bb6d8dee7be41",
    measurementId: "G-0WG534PR8K"
});

const db= firebaseApp.firestore();
const auth=  firebase.auth();

export { db, auth };