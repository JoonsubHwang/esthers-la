import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.sass';

export default class NotFound extends React.Component {

    render = () =>
        <main id='notfound'>
            <h1>Error</h1>
            <p>NOT FOUND</p>
            <Link to='/'><button>Back to Homepage</button></Link>
        </main>
}