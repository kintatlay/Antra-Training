import React from 'react';
import Item from './Item';
import '../css/Todolist.css';

class Todolist extends React.Component {
    render() {
        const items = this.props.todoItems;
        const handleDelete = this.props.handleDelete;
        return (
            <ul className="todolist__list--items">
                {items.map(item => 
                    <Item item={item.inputText} id={item.uniqueID} key={item.uniqueID} handleDelete={handleDelete}/>
                )}
            </ul>
        )
    }
}

export default Todolist;