import { initializeApp } from 'firebase/app';
import { getFunctions } from 'firebase/functions';
import { getAnalytics } from 'firebase/analytics';
// more: https://firebase.google.com/docs/web/setup#available-libraries



// initialization 

const firebaseConfig = {
  apiKey: 'AIzaSyBSHmyZ2Fmt_5ZfPY9wOa3UrG7eA56WRpI',
  authDomain: 'esthers-la.firebaseapp.com',
  projectId: 'esthers-la',
  storageBucket: 'esthers-la.appspot.com',
  messagingSenderId: '926035998720',
  appId: '1:926035998720:web:f43e580cdad50252ae80e5',
  measurementId: 'G-G7QE7JQLYX'
};

const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);
const analytics = getAnalytics(app);
