import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.sass';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Homepage from '../Homepage/Homepage';
import NotFound from '../NotFound/NotFound';

export default class App extends React.Component {

    render = () =>
        <BrowserRouter>

            <Header />

            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route component={NotFound} />
            </Switch>
    
            <Footer />

        </BrowserRouter>
}