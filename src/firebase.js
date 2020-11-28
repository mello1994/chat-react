import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAVE2B7R3aUMgq_nD-fy3486Se4PH2dE6Q",
    authDomain: "chat-with-react-bfe7e.firebaseapp.com",
    databaseURL: "https://chat-with-react-bfe7e.firebaseio.com",
    projectId: "chat-with-react-bfe7e",
    storageBucket: "chat-with-react-bfe7e.appspot.com",
    messagingSenderId: "349669784957",
    appId: "1:349669784957:web:61a3e0a61faf8069642014"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const messageRef = database.ref('messages');

export const pushMessage = ({name, text}) => {
   messageRef.push({name, text}); 
}