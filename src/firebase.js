import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDFXsJeBZYfzmfIG1_ePN3Aoiq3VrsDYW0",
  authDomain: "recipe-app-9b9c3.firebaseapp.com",
  databaseURL: "https://recipe-app-9b9c3.firebaseio.com",
  projectId: "recipe-app-9b9c3",
  storageBucket: "recipe-app-9b9c3.appspot.com",
  messagingSenderId: "743824394202",
  appId: "1:743824394202:web:8c058e930c81349119e2e3",
});

export { firebaseConfig as firebase };
