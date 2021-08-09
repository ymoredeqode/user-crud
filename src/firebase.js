import firebase from "firebase";


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAKIn3Xm_rvCf30HVJdw43_EL0eotHa0ms",
    authDomain: "react-crud-2034c.firebaseapp.com",
    databaseURL: "https://react-crud-2034c-default-rtdb.firebaseio.com",
    projectId: "react-crud-2034c",
    storageBucket: "react-crud-2034c.appspot.com",
    messagingSenderId: "530193860200",
    appId: "1:530193860200:web:e2ddc2efc24a0a1d649ddd"
  };
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 var database = firebase.database();
export default database.ref();