import React from "react";
import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDkIaUvnd6AAm0MeZRewMHMMR3rX8H0H-s",
  authDomain: "webapp-440d3.firebaseapp.com",
  databaseURL: "https://webapp-440d3.firebaseio.com",
  projectId: "webapp-440d3",
  storageBucket: "webapp-440d3.appspot.com",
  messagingSenderId: "842691501545",
  appId: "1:842691501545:web:10a92ecfe45be656fabf78",
  measurementId: "G-NLD470EG8C",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
