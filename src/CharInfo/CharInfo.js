import React from 'react';
import './CharInfo.sass';



export default class CharInfo extends React.Component {
    
    state = {
        category: true
    }

    toggleCategory = () => {

        this.setState({ category: !this.state.category });

        console.debug(this.state.category)

        if (this.state.category) {
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

    render = () =>
        <main id='charinfo'>

            <div id='summary'>
                <h1>{this.props.match.params.charName}</h1>
                <p>Classname</p>
                <p>iLevel 9999.99</p>
                <p>In Servername</p>
            </div>

            <div id='info'>
                <div id='tabs' onClick={this.toggleCategory}>
                    <ul id='categories'>
                        <li className='selected'>TAB</li>
                        <li>TAB</li>
                        <li>TAB</li>
                        <li>TAB</li>
                    </ul>
                    <ul id='subcategories'>
                        <li className='selected'>Equip</li>
                        <li>Avatar</li>
                        <li>Trait</li>
                        <li>Jewel</li>
                        <li>Kard</li>
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