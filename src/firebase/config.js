import firebase from "firebase";
import 'firebase/firestore'; //Модуль для работы с FireStore DataBase 
import 'firebase/auth'; //Модуль для аутентификации людей 

const firebaseConfig = {
    apiKey: "AIzaSyBCzFyP7TVcSJeuK7LIYQl_uC01HGzOJ-U",
    authDomain: "apelsiny-vue-chat-f3a63.firebaseapp.com",
    projectId: "apelsiny-vue-chat-f3a63",
    storageBucket: "apelsiny-vue-chat-f3a63.appspot.com",
    messagingSenderId: "445308117458",
    appId: "1:445308117458:web:a852869c76e1dfb056680b"
    }; 
    // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(app); //Связываем модуль аутентификации с нашим FB
export const auth = firebase.auth(app) //Связываем модуль аутентификации с нашим FireBase
export const timestamp = firebase.firestore.FieldValue.serverTimestamp //Модуль определяния времени