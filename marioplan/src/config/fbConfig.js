import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyDgrx4mjNmXZS-awoGAW0lrNia70Jgohws",
    authDomain: "reactreduxfirebaseapp-6eed0.firebaseapp.com",
    projectId: "reactreduxfirebaseapp-6eed0",
    storageBucket: "reactreduxfirebaseapp-6eed0.appspot.com",
    messagingSenderId: "292950131214",
    appId: "1:292950131214:web:aa7c1c983a274861d9725f",
    measurementId: "G-JTN8BJ4DTF"
};
firebase.initializeApp(config);
// firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });


export default firebase;