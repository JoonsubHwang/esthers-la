import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.sass';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import NotFound from './NotFound/NotFound';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

      <Navbar />

      <Switch>
        <Route exact path='/' component={Main} />
        <Route component={NotFound} />
      </Switch>

      <Footer />

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
