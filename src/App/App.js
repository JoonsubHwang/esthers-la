import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.sass';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';

export default class App extends React.Component {

    render = () =>
        <div>

            <Navbar />
    
            <Switch>
                <Route exact path='/' component={Main} />
                <Route component={NotFound} />
            </Switch>
    
            <Footer />

        </div>
}