import firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCIk7tOd_KmDP8f4avnrLvNu-YBryifPWo",
    authDomain: "sacreblue-de81b.firebaseapp.com",
    databaseURL: "https://sacreblue-de81b.firebaseio.com",
    projectId: "sacreblue-de81b",
    storageBucket: "sacreblue-de81b.appspot.com",
    messagingSenderId: "204350923501"
  };
  const firebaset = firebase.initializeApp(config);

  export default firebaset;