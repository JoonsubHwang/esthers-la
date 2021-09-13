import React from 'react';
import { Search } from '@material-ui/icons';
import './Searchbar.sass';



export default class Searchbar extends React.Component {

    render = () =>

        <form id='searchbar'>    
            <input type='text' placeholder='Search character'></input>
            <button><Search aria-label='search' /></button>
        </form>
}

            