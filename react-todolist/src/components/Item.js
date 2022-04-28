import React from 'react';
import '../css/Item.css';

class Item extends React.Component {
    render() {
        return (
            <li className="todoList__list--items">
                <h4>{this.props.item}</h4>
                <button onClick={() => this.props.handleDelete(this.props.id)}>X</button>
            </li>
        )
    }
}

export default Item;