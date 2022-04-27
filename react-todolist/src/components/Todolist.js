import React from 'react';
import Item from './Item';

class Todolist extends React.Component {
    render() {
        const items = this.props.todoItems;
        const handleDelete = this.props.handleDelete;
        return (
            <ul>
                {items.map((item, index) => 
                    <Item item={item} key={index} handleDelete={handleDelete}/>
                )}
            </ul>
        )
    }
}

export default Todolist;