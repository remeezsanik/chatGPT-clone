import {getApp,getApps,initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCAz1yW6wIL15W1f_c0HyVX8OegUJUYvKA",
  authDomain: "chatgpt-rmz.firebaseapp.com",
  projectId: "chatgpt-rmz",
  storageBucket: "chatgpt-rmz.appspot.com",
  messagingSenderId: "1063314974527",
  appId: "1:1063314974527:web:fd083671421a7b446fd58a",
  measurementId: "G-JRJLB6PQ8G"
};

// Initialize Firebase

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};
