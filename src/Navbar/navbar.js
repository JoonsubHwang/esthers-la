import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from '@material-ui/icons';
import './Navbar.sass';



export default class Navbar extends React.Component {

    componentDidMount = () => {
        document.querySelector('#navbar-search>input').focus();
    }

    render = () =>
        <div id='navbar-main'>
            <div id='navbar-container'>
                <div id='navbar-content'>

                    <Link id='navbar-logo' to={'/'}>
                        <p id='navbar-logo-symbol'>Es</p>
                        <p id='navbar-logo-name'>Esthers.LA</p>
                    </Link>

                    <form id='navbar-search'>    
                        <input type='text' placeholder='Search character'></input>
                        <button><Search aria-label='search' /></button>
                    </form>

                    <ul id='navbar-links'>
                        <li><Link to={'/news'}>News</Link></li>
                        <li><Link to={'/tools'}>Tools</Link></li>
                        <li><Link to={'/library'}>Library</Link></li>
                    </ul>

                </div>
            </div>
        </div>
}