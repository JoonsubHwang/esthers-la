import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from '@material-ui/icons';
import { menuList } from '../modules/menuList';
import './Homepage.sass';
import Searchbar from '../Searchbar/Searchbar';



let allSubmenus = menuList.reduce((total, menu) => [...total, ...menu.submenus], []);

export default class Homepage extends React.Component {

    componentDidMount() {
        document.querySelector('#homepage .searchbar input').focus();
    }

    render = () =>
        <main id='homepage'>

            <Link id='homepage-logo' to={'/'}>
                <p id='homepage-logo__symbol'>Es</p>
                <p id='homepage-logo__name'>Esthers.LA</p>
            </Link>

            <Searchbar />

            <div id='menu-list'>
                {allSubmenus.map(submenu =>
                    <Link class='menu-list__link' to={submenu.url}>
                        {submenu.icon || <Search />}
                        <p>{submenu.name}</p>
                    </Link>
                )}
            </div>

        </main>
}