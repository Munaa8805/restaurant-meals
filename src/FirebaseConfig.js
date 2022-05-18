import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCRhXqtrB7LesTeNkr0wncH6GSvjdfT8pM",
  authDomain: "meals-app-3efd2.firebaseapp.com",
  projectId: "meals-app-3efd2",
  storageBucket: "meals-app-3efd2.appspot.com",
  messagingSenderId: "489035217071",
  appId: "1:489035217071:web:08c30fa015f2acc7ce7c5a"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
