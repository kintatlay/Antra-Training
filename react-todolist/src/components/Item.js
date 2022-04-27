import React from 'react';

class Item extends React.Component {
    render() {
        return (
            <li>
                <h4>{this.props.item}</h4>
                <button onClick={() => this.props.handleDelete(this.props.item)}>X</button>
            </li>
        )
    }
}

export default Item;