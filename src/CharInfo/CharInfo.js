import React from 'react';
import './CharInfo.sass';
import Selection from '../Selection/Selection'



export default class CharInfo extends React.Component {
    
    state = {
        category: 0,
        subcategories: [ 0, 0, 0, 0 ]
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

    render = () =>
        <main id='charinfo'>

            <div id='base'>

                <div id='summary'>
                    <h1>{this.props.match.params.charName}</h1>
                    <p>Classname</p>
                    <p>iLevel 9999.99</p>
                    <p>In Servername</p>
                    {/* <Loading /> */}
                </div>

                <Selection 
                categories={ [
                    {
                        name: 'a',
                        subcategories: ['a1', 'a2', 'a3', 'a4']
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