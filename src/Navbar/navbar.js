import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from '@material-ui/icons';
import './Navbar.sass';



export default class Navbar extends React.Component {

    render = () =>
        <div id='navbar'>
            <div id='navbar-content'>

                <Link id='navbar-logo' to={'/'}>
                    <p id='navbar-logo-symbol'>Es</p>
                    <p id='navbar-logo-name'>Esthers.LA</p>
                </Link>

                <form id='navbar-searchbar'>    
                    <input type='text' placeholder='Search character'></input>
                    <button><Search aria-label='search' /></button>
                </form>

                <ul id='navbar-links'>
                    <li><Link to={'/news'}><p>News</p></Link></li>
                    <li><Link to={'/tools'}><p>Tools</p></Link></li>
                    <li><Link to={'/library'}><p>Library</p></Link></li>
                </ul>

            </div>
        </div>
}