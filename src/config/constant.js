import firebase from "firebase";
import { APIKEY } from "./config";

const config = {
  apiKey: APIKEY,
  authDomain: "us-citizenship-56f7c.firebaseapp.com",
  databaseURL: "https://us-citizenship-56f7c.firebaseio.com",
  projectId: "us-citizenship-56f7c",
  storageBucket: "us-citizenship-56f7c.appspot.com",
  messagingSenderId: "46666349257",
};
firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
