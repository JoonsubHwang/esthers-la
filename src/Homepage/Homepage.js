import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from '@material-ui/icons';
import { menuList } from '../modules/menuList';
import './Homepage.sass';

let allSubmenus = menuList.reduce((total, menu) => [...total, ...menu.submenus], []);

export default class Homepage extends React.Component {

    render = () =>
        <homepage id='homepage'>

            <Link id='homepage-logo' to={'/'}>
                <p id='homepage-logo__symbol'>Es</p>
                <p id='homepage-logo__name'>Esthers.LA</p>
            </Link>

            <form id='homepage-searchbar'>    
                <input type='text' placeholder='Search character'></input>
                <button><Search aria-label='search' /></button>
            </form>

            <div id='menu-list'>
                {allSubmenus.map(submenu =>
                    <Link class='menu-list__link' to={submenu.url}>
                        {submenu.icon || <Search />}
                        <p>{submenu.name}</p>
                    </Link>
                )}
            </div>

        </homepage>
}