import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyB7C5CAoAqiZWaIrsu6c4YnnNo4UlZBedE",
    authDomain: "facebook-clone-f1ba9.firebaseapp.com",
    databaseURL: "https://facebook-clone-f1ba9.firebaseio.com",
    projectId: "facebook-clone-f1ba9",
    storageBucket: "facebook-clone-f1ba9.appspot.com",
    messagingSenderId: "585889306584",
    appId: "1:585889306584:web:48386a9433727ea19d84ad",
    measurementId: "G-FVB12SXC19"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider };
export default db;