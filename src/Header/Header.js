import React from 'react';
import { Link } from 'react-router-dom';
import './Header.sass';
import Searchbar from '../Searchbar/Searchbar';
import Navbar from '../Navbar/Navbar';
import minWidth from '../modules/minWidth';



const vw = window.innerWidth || document.documentElement.clientWidth || 0;

export default class Header extends React.Component {

    componentDidMount() {
        window.addEventListener('keypress', event => {
            if (event.key === '/') {
                event.preventDefault();
                document.querySelector('#header .searchbar input').focus();
            }
        });
    }

    render = () =>
        <div id='header'>
            <div id='header-content'>

                <Link id='header-logo' to={'/'}>
                    <p id='header-logo__symbol'>Es</p>
                    <p id='header-logo__name'>Esthers.LA</p>
                </Link>

                <Searchbar />

                { vw >= minWidth.laptop ?
                    <Navbar />
                    : null}

            </div>
        </div>
}