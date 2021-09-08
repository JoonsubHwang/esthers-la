import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from '@material-ui/icons';
import './Main.sass';

export default class Main extends React.Component {

    render = () =>
        <main id='main'>

            <Link id='main-logo' to={'/'}>
                <p id='main-logo-symbol'>Es</p>
                <p id='main-logo-name'>Esthers.LA</p>
            </Link>

            <form id='main-searchbar'>    
                <input type='text' placeholder='Search character'></input>
                <button><Search aria-label='search' /></button>
            </form>

        </main>
}