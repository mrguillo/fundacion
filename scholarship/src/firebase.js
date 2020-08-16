import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD88BTvBZ-PIG_gA5kAXkoTt_L2t-PVcAU",
  authDomain: "mygrades-d3717.firebaseapp.com",
  databaseURL: "https://mygrades-d3717.firebaseio.com",
  projectId: "mygrades-d3717",
  storageBucket: "mygrades-d3717.appspot.com",
  messagingSenderId: "664639605222",
  appId: "1:664639605222:web:c1ed3d559f8537be27ee27",
  measurementId: "G-FB13YZ0M9M",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

// Export Firestore object
export const db = fb.firestore();