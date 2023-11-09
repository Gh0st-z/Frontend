// server/init-firebase.js

const admin = require('firebase-admin');

const firebaseConfig = {
    apiKey: "AIzaSyChN85SH3iYhEn0NpD-k94t_tJeGA_eWWI",
    authDomain: "frontend-6c973.firebaseapp.com",
    projectId: "frontend-6c973",
    storageBucket: "frontend-6c973.appspot.com",
    messagingSenderId: "112977918418",
    appId: "1:112977918418:web:b4efa58f0d9734790f700b"
};

admin.initializeApp(firebaseConfig);
