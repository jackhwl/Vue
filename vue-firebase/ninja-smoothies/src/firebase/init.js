import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "",
authDomain: "udemy-ninja-smoothies-75ec1.firebaseapp.com",
databaseURL: "https://udemy-ninja-smoothies-75ec1.firebaseio.com",
projectId: "udemy-ninja-smoothies-75ec1",
storageBucket: "udemy-ninja-smoothies-75ec1.appspot.com",
messagingSenderId: "672621756712",
appId: "1:672621756712:web:7de17f2388bb89728d101d",
measurementId: "G-06VLX4NKHX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const firebaseApp =  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
// firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export firestore database
export default firebaseApp.firestore()