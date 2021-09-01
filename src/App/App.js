import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.sass';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';

export default class App extends React.Component {

    render = () =>
        <BrowserRouter>

            <Navbar />

            <Switch>
                <Route exact path='/' component={Main} />
                <Route component={NotFound} />
            </Switch>
    
            <Footer />

        </BrowserRouter>
}