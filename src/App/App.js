import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.sass';
import Header from '../Header/Header';
import Homepage from '../Homepage/Homepage';
import CharInfo from '../CharInfo/CharInfo';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import minWidth from '../modules/minWidth';



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