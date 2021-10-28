import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics'; // more: https://firebase.google.com/docs/web/setup#available-libraries
import './App.sass';
import Header from '../Header/Header';
import Homepage from '../Homepage/Homepage';
import CharInfo from '../CharInfo/CharInfo';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import minWidth from '../modules/minWidth';



// backend initialization 

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
const analytics = getAnalytics(app);



const vw = window.innerWidth || document.documentElement.clientWidth || 0;

export default class App extends React.Component {

    render = () =>
        <BrowserRouter>

            <Header />

            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/characters/:charName' component={CharInfo} />
                <Route component={NotFound} />
            </Switch>
    
            <Footer />
            
            { vw < minWidth.laptop ?
                <Navbar />
                : null}

        </BrowserRouter>
}