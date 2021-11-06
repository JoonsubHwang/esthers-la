import React from 'react';
import { getFunctions, httpsCallable } from 'firebase/functions';
import './CharInfo.sass';
import Selection from '../Selection/Selection';






export default class CharInfo extends React.Component {

    componentDidMount() {
        this.functions = getFunctions();
        this.searchCharacter(this.props.match.params.charName);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.charName !== this.props.match.params.charName)
            this.searchCharacter(this.props.match.params.charName);
    }
    
    state = {
        category: 0,
        subcategories: [ 0, 0, 0, 0 ],
        charData: {}
    }

    setCategory = (event) => {
        console.debug(event.target.id)
        this.setState({ category: this.extractIndex(event.target.id) });
    }
    setSubcategories = (event) => {
        let subcategories = this.state.subcategories;
        subcategories[this.state.category] = this.extractIndex(event.target.id);
        this.setState({ subcategories: subcategories });
    }

    extractIndex = (id) =>
        Number(id.slice(-2))

    searchCharacter = (charName) => {

        const loadCharData = httpsCallable(this.functions, 'charData-loadCharData');

        loadCharData({ charName: charName })
            .then(result => {

                // TODO: handle no character
                // TODO: handle maintenance?

                this.setState({ charData: result.data });
            })
            .catch(err => {
                console.error(err); // TODO
                // this.setState({ error: true });
            });
    }

    render = () =>
        <main id='charinfo'>

            <div id='base'>

                <div id='summary'>
                    <h1>{this.state.charData.charName || 'Name'}</h1>
                    <p>@ {this.state.charData.server || 'Server'}</p>
                    <p>{this.state.charData.class || 'Class'}</p>
                    <p>Lv. {this.state.charData.charLevel || 'Level'}</p>
                    <p>iLv. {this.state.charData.iLevel || 'iLevel'}</p>
                    {/* <Loading /> */}
                </div>

                <Selection 
                categories={ [
                    {
                        name: 'Stats',
                        subcategories: [ 'Equipments', 'Avatars', 'Jewels', 'Cards' ]
                    },
                    {
                        name: 'Abilities',
                        subcategories: [ 'Combat', 'Life' ]
                    },
                    {
                        name: 'PvP',
                        subcategories: [ 'Competitive', 'Elimination', 'Deathmatch', 'Boss fight']
                    },
                    {
                        name: 'Collect\'s',
                        subcategories: [ 'Islands\' orbs', 'Orpeus\'s stars', 'Titans\' hearts', 'Great arts', 'Mokoko seeds', 'Sea treasures', 'Ignea\'s symbols', 'Tree leaves' ]
                    },
                ]
                } 
                category={this.state.category} subcategories={this.state.subcategories} 
                setCategory={this.setCategory} setSubcategories={this.setSubcategories} />
                
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
        </main>
}