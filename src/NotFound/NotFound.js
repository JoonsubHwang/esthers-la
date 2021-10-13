import React from 'react';
import './NotFound.sass';

export default class NotFound extends React.Component {

    render = () =>
        <main id='notfound'>
            <h1>Error</h1>
            <p>NOT FOUND</p>
            <button onClick={this.props.history.goBack}>Go back</button>
        </main>
}