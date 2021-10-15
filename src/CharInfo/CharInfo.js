import React from 'react';
import './CharInfo.sass';



export default class CharInfo extends React.Component {
    
    state = {
        tab: true,
        category: 'category-0',
        subcategory: 'subcategory-0'
    }

    toggleTab = () => {

        this.setState({ tab: !this.state.tab });

        console.debug(this.state.tab)

        if (this.state.tab) {
            document.querySelector('#categories').classList.remove('reset-position');
            document.querySelector('#subcategories').classList.remove('reset-position');
            document.querySelector('#categories').classList.add('move-up');
            document.querySelector('#subcategories').classList.add('move-up');
        }
        else {
            document.querySelector('#categories').classList.remove('move-up');
            document.querySelector('#subcategories').classList.remove('move-up');
            document.querySelector('#categories').classList.add('reset-position');
            document.querySelector('#subcategories').classList.add('reset-position');
        }

    }

    setCategory = event => {
        this.setState({ category: event.target.id });
    }
    setSubcategory = event => {
        this.setState({ subcategory: event.target.id });
    }

    render = () =>
        <main id='charinfo'>

            <div id='summary'>
                <h1>{this.props.match.params.charName}</h1>
                <p>Classname</p>
                <p>iLevel 9999.99</p>
                <p>In Servername</p>
            </div>

            <div id='info'>
                <div id='tabs' onClick={this.toggleTab}>
                    <ul id='categories'>
                        {['Tab', 'tAb', 'taB', 'taabbb'].map((category, i) => 
                            <li id={'category-' + i} key={'category-' + i} onClick={this.setCategory} 
                            className={(this.state.category === 'category-' + i) ? 'selected' : ''}>
                                {category}
                            </li>
                        )}
                    </ul>
                    <ul id='subcategories'>
                        {['Equips', 'Avatars', 'Traits', 'Jewels', 'Kards'].map((subcategory, i) => 
                            <li id={'subcategory-' + i} key={'subcategory-' + i} onClick={this.setSubcategory} 
                            className={(this.state.subcategory === 'subcategory-' + i) ? 'selected' : ''}>
                                {subcategory}
                            </li>
                        )}
                    </ul>
                </div>
                <div id='details'>
                    <p>CONTENTS</p>
                    <p>CONTENTS</p>
                    <p>CONTENTS</p>
                    <p>CONTENTS</p>
                    <p>CONTENTS</p>
                    <p>CONTENTS</p>
                    <p>CONTENTS</p>
                    <p>CONTENTS</p>
                    <p>CONTENTS</p>
                    <p>CONTENTS</p>
                    <p>CONTENTS</p>
                    <p>CONTENTS</p>
                    <p>CONTENTS</p>
                    <p>CONTENTS</p>
                    <p>CONTENTS</p>
                    <p>CONTENTS</p>
                    <p>CONTENTS</p>
                    <p>CONTENTS</p>
                    <p>CONTENTS</p>
                    <p>CONTENTS</p>
                    <p>CONTENTS</p>
                    <p>CONTENTS</p>
                    <p>CONTENTS</p>
                    <p>CONTENTS</p>
                    <p>CONTENTS</p>
                    <p>CONTENTS</p>
                    <p>CONTENTS</p>
                    <p>CONTENTS</p>
                    <p>CONTENTS</p>
                    <p>CONTENTS</p>
                    <p>CONTENTS</p>
                    <p>CONTENTS</p>
                </div>
            </div>
        </main>
}