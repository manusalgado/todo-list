import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCLW6a7y4RMV3_ogADUvVpbnA58iO62Iyg",
  authDomain: "todo-list-imaginamos.firebaseapp.com",
  databaseURL: "https://todo-list-imaginamos.firebaseio.com",
  projectId: "todo-list-imaginamos",
  storageBucket: "",
  messagingSenderId: "636330744633"
};

firebase.initializeApp(config);

const auth = firebase.auth
const { database } = firebase

export {
  auth,
  database
}