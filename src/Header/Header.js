import React from 'react';
import { Link } from 'react-router-dom';
import './Header.sass';
import Searchbar from '../Searchbar/Searchbar';
import Navbar from '../Navbar/Navbar';



export default class Header extends React.Component {

    render = () =>
        <div id='header'>
            <div id='header-content'>

                <Link id='header-logo' to={'/'}>
                    <p id='header-logo__symbol'>Es</p>
                    <p id='header-logo__name'>Esthers.LA</p>
                </Link>

                <Searchbar />

                {/* <Navbar /> */}

            </div>
        </div>
}