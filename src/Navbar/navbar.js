import React from 'react';
import './Navbar.sass';

export default class Navbar extends React.Component {

    render = () =>
        <div id='navbar-main'>
            <div id='navbar-container'>
                <div id='navbar-content'>
                    <div id='navbar-logo'>
                        <p id='navbar-logo-symbol'>LOG</p>
                        <p id='navbar-logo-name'>Esthers.LA</p>
                    </div>
                    <div id='navbar-search'>    
                        <p>Q</p>
                        <input type='text' placeholder='Character Search'></input>
                    </div>
                    <ul id='navbar-links'>
                        <li><a>Library</a></li>
                        <li><a>Tools</a></li>
                    </ul>
                    <p id='navbar-icon'>M</p>
                </div>
            </div>
        </div>
}