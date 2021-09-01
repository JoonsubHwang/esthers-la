import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from '@material-ui/icons';
import './Navbar.sass';

export default class Navbar extends React.Component {

    render = () =>
        <div id='navbar-main'>
            <div id='navbar-container'>
                <div id='navbar-content'>
                    <Link id='navbar-logo' to={'/'}>
                        <p id='navbar-logo-symbol'>LOG</p>
                        <p id='navbar-logo-name'>Esthers.LA</p>
                    </Link>
                    <div id='navbar-search'>    
                        <Search aria-label='search' />
                        <input type='text' placeholder='Character Search'></input>
                    </div>
                    <ul id='navbar-links'>
                        <li><Link to={'/library'}>Library</Link></li>
                        <li><Link to={'/tools'}>Tools</Link></li>
                    </ul>
                </div>
            </div>
        </div>
}