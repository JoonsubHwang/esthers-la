import React from 'react';
import './Selection.sass';

export default class Selection extends React.Component {

    state = { 
        tab: true
    };

    render = () =>
        <div className='selection'>

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