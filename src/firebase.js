import {initializeApp} from 'firebase/app'
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCbrmYehbKP5iAyS0S1iK3nV6pMFNyQ22k",
    authDomain: "sharecare-8bd2d.firebaseapp.com",
    projectId: "sharecare-8bd2d",
    storageBucket: "sharecare-8bd2d.appspot.com",
    messagingSenderId: "909654096592",
    appId: "1:909654096592:web:4a57978653fbd537f47cd5"
  };

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

const provider = new GoogleAuthProvider()
export const signInGoogle = () =>{
    signInWithPopup(auth, provider).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
}