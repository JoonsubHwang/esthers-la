import React from 'react';
import './Selection.sass';

export default class Selection extends React.Component {

    state = { 
        tab: true
    };

    toggleTabs = () => {

        this.setState({ tab: !this.state.tab });

        let catClassList = document.querySelector('.categories').classList;
        let subcatClassList = document.querySelector('.subcategories').classList;

        if (this.state.tab) {
            catClassList.remove('reset-position');
            subcatClassList.remove('reset-position');
            catClassList.add('move-up');
            subcatClassList.add('move-up');
        }
        else {
            catClassList.remove('move-up');
            subcatClassList.remove('move-up');
            catClassList.add('reset-position');
            subcatClassList.add('reset-position');
        }

    }

    render = () =>
        <div className='selection' onClick={this.toggleTabs}>

            <ul className='tab categories'>
                {this.props.categories.map((category, i) => 
                    <li id={'category-0' + i} key={'category-' + i} onClick={this.props.setCategory} 
                    className={(this.props.category === i) ? 'selected' : ''}>
                        {category.name}
                    </li>
                )}
            </ul>

            <ul className='tab subcategories'>
                {this.props.categories[this.props.category].subcategories.map((subcategory, i) => 
                    <li id={'subcategory-0' + i} key={'subcategory-' + i} onClick={this.props.setSubcategories} 
                    className={(this.props.subcategories[this.props.category] === i) ? 'selected' : ''}>
                        {subcategory}
                    </li>
                )}
            </ul>

        </div>
}