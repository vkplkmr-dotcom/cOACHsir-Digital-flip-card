// Firebase Configuration

const firebaseConfig = {

  apiKey: "AIzaSyAz6P7ZbM5zWiyvUypT_wF_gmj9jT-qwa0",

  authDomain:
  "coachsir-digital-student-card.firebaseapp.com",

  projectId:
  "coachsir-digital-student-card",

  storageBucket:
  "coachsir-digital-student-card.firebasestorage.app",

  messagingSenderId:
  "953566380799",

  appId:
  "1:953566380799:web:279a9ca2b19ab4d416c2ca"

};


// Firebase Start

firebase.initializeApp(firebaseConfig);


// Firestore Database

const db = firebase.firestore();
