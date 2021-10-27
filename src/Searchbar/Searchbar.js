import React from 'react';
import { withRouter } from 'react-router-dom';
import { Search } from '@material-ui/icons';
import './Searchbar.sass';



class Searchbar extends React.Component {

    searchCharacter = event => {

        event.preventDefault();
        
        let input = event.target.querySelector('input');
        
        this.props.history.push(`/characters/${input.value}`);

        input.value = '';
        input.blur();
    }

    render = () =>

        <form className='searchbar' onSubmit={this.searchCharacter}>    
            <input type='text' placeholder='Search character' required minLength={3}></input>
            <button><Search aria-label='search' /></button>
        </form>
}

export default withRouter(Searchbar);
            