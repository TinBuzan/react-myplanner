//core firebase functionality
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDecYjStgSfS2QfldaNE5u4sceGffcOFDU",
  authDomain: "react-myplanner.firebaseapp.com",
  databaseURL: "https://react-myplanner.firebaseio.com",
  projectId: "react-myplanner",
  storageBucket: "react-myplanner.appspot.com",
  messagingSenderId: "368955016325",
  appId: "1:368955016325:web:275f901f9fd1647050d5ec"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;