import firebase from    'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



  
  var fbConfig = {
    apiKey: "AIzaSyAabp2lAmwLj-TFKzZ45AY_IVCP1JCL_WY",
    authDomain: "mario-plan-9678f.firebaseapp.com",
    databaseURL: "https://mario-plan-9678f.firebaseio.com",
    projectId: "mario-plan-9678f",
    storageBucket: "mario-plan-9678f.appspot.com",
    messagingSenderId: "961272548256",
    appId: "1:961272548256:web:f22d9621838f874e0ef2c5",
    measurementId: "G-CSJVVN133C"
  };
  
  firebase.initializeApp(fbConfig);
  firebase.firestore();
  

  export default firebase;