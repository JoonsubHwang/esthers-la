import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.sass';
import { menuList } from '../modules/menuList';



export default class Navbar extends React.Component {

    render = () =>

        <ul id='navbar'>
            {menuList.map((menu, i) =>
                <li key={'navlink-' + i}><Link to={menu.url}><p>{menu.name}</p></Link></li>
            )}
        </ul>
}