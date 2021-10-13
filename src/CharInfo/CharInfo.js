import React from 'react';
import './CharInfo.sass';



export default class CharInfo extends React.Component {

    render = () =>
        <main id='charinfo'>

            <div id='summary'>
                <h1>{this.props.match.params.charName}</h1>
                <p>Classname</p>
                <p>iLevel 9999.99</p>
                <p>In Servername</p>
            </div>

            <div id='details'>
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
                <div>
                    CONTENTS
                </div>
            </div>
        </main>
}