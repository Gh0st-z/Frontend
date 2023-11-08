import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyChN85SH3iYhEn0NpD-k94t_tJeGA_eWWI",
    authDomain: "frontend-6c973.firebaseapp.com",
    projectId: "frontend-6c973",
    storageBucket: "frontend-6c973.appspot.com",
    messagingSenderId: "112977918418",
    appId: "1:112977918418:web:b4efa58f0d9734790f700b"
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const token = (setTokenFound) => {
    return getToken(messaging, {vapidKey: 'BOwLKJz6IgSNrAVfsYixdkhxNrXi26nfCOObgwD7xVz4BaJ1caU7OQU7TZW4KnxhDVNE1tQ6xyIrvJ30StTO8Uc'}).then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log('No registration token available. Request permission to generate one.');
        setTokenFound(false);
        // shows on the UI that permission is required 
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});