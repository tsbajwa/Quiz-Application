import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDgR2AtxEeZV7t9g9IR6PlKLpxUVWtZiaw",
  authDomain: "us-citizenship-56f7c.firebaseapp.com",
  databaseURL: "https://us-citizenship-56f7c.firebaseio.com",
  projectId: "us-citizenship-56f7c",
  storageBucket: "us-citizenship-56f7c.appspot.com",
  messagingSenderId: "46666349257",
};
firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
