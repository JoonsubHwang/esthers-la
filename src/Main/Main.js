import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from '@material-ui/icons';
import { menuList } from '../modules/menuList';
import './Main.sass';

let allSubmenus = menuList.reduce((total, menu) => [...total, ...menu.submenus], []);

export default class Main extends React.Component {

    render = () =>
        <main id='main'>

            <Link id='main-logo' to={'/'}>
                <p id='main-logo-symbol'>Es</p>
                <p id='main-logo-name'>Esthers.LA</p>
            </Link>

            <form id='main-searchbar'>    
                <input type='text' placeholder='Search'></input>
                <button><Search aria-label='search' /></button>
            </form>

            <div id='menu-list'>
                {allSubmenus.map(submenu =>
                    <Link class='menu-link' to={submenu.url}>
                        {submenu.icon || <Search />}
                        <p>{submenu.name}</p>
                    </Link>
                )}
            </div>

        </main>
}