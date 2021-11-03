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
                    <h1>{this.state.charData.charName}</h1>
                    <p>@ {this.state.charData.server}</p>
                    <p>Classname</p>
                    <p>Lv. {this.state.charData.charLevel}</p>
                    <p>iLv. {this.state.charData.iLevel}</p>
                    {/* <Loading /> */}
                </div>

                <Selection 
                categories={ [
                    {
                        name: 'a',
                        subcategories: ['aaaa1', 'aaaaaaaa2', 'a3', 'a4']
                    },
                    {
                        name: 'b',
                        subcategories: ['b1', 'b2', 'b3', 'b4']
                    },
                    {
                        name: 'c',
                        subcategories: ['c1', 'c2', 'c3', 'c4']
                    },
                    {
                        name: 'd',
                        subcategories: ['d1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'd11', 'd12', 'd13', 'd14', 'd15', 'd16' ]
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