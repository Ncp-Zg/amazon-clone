import firebase from "firebase"

const firebaseConfig = {
    apiKey: "SECRET",
    authDomain: "clone-71863.firebaseapp.com",
    projectId: "clone-71863",
    storageBucket: "clone-71863.appspot.com",
    messagingSenderId: "449409887394",
    appId: "1:449409887394:web:210cbfcde12370e0b93bfb"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export const db = firebaseApp.firestore();
  export const auth = firebase.auth();

  
