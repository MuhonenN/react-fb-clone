import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCtEuiVBd8lQFTIxyjgr6uO_r6zsMjOQ-8",
    authDomain: "facebook-clone-1c640.firebaseapp.com",
    projectId: "facebook-clone-1c640",
    storageBucket: "facebook-clone-1c640.appspot.com",
    messagingSenderId: "997287187670",
    appId: "1:997287187670:web:4b45f5ef9c9804d87f6577"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db