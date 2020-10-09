import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBAeAPjxPUJi5qcX2eisRHkc19d-Fo88Xs",
  authDomain: "travelwebrj.firebaseapp.com",
  databaseURL: "https://travelwebrj.firebaseio.com",
  projectId: "travelwebrj",
  storageBucket: "travelwebrj.appspot.com",
  messagingSenderId: "840543773919",
  appId: "1:840543773919:web:18470b71fda833de48b56a",
  measurementId: "G-21RPQH9740",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
