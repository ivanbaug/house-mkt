// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBk1OfqYmd87k87r9k_E_ADuIhMGf2pQKs',
  authDomain: 'house-marketplace-iv.firebaseapp.com',
  projectId: 'house-marketplace-iv',
  storageBucket: 'house-marketplace-iv.appspot.com',
  messagingSenderId: '1013949391595',
  appId: '1:1013949391595:web:0fb6709d6d47cdd5a394ae',
}

// Initialize Firebase
// const app = initializeApp(firebaseConfig)
export const db = getFirestore()
