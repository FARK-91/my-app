import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDD1GqWzcFOB8DOholJ3wh9toJa945cMYM",
    authDomain: "firstreactapp-96934.firebaseapp.com",
    databaseURL: "https://firstreactapp-96934-default-rtdb.firebaseio.com/",
    projectId: "firstreactapp-96934",
    storageBucket: "firstreactapp-96934.appspot.com",
    messagingSenderId: "489757303801",
    appId: "1:489757303801:web:1de3e3f3789faa49b65328"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase};