import firebase from 'firebase';
import 'firebase/firestore';

let config = {
    apiKey: "AIzaSyBcd-rv2DRfTWP8Pyjv3tgtfU8ZCaBYfyk",
    authDomain: "united-trucking-company.firebaseapp.com",
    databaseURL: "https://united-trucking-company.firebaseio.com",
    projectId: "united-trucking-company",
    storageBucket: "united-trucking-company.appspot.com",
    messagingSenderId: "255887071982"
};

firebase.initializeApp(config);

const db = firebase.firestore();

export {
    db
}