import React from 'react';
import Form from './Form';
import Todolist from './Todolist';

class Container extends React.Component {
    state = {
        inputText: "",
        todoItems: [],
        uniqueID: 0
    }

    handleSubmit = (event) => {
        event.preventDefault();
        var newObj = {uniqueID: this.state.uniqueID, inputText: this.state.inputText};
        this.setState(prevState => ({
            todoItems: [...prevState.todoItems, newObj],
            inputText: "",
            uniqueID: prevState.uniqueID + 1
        }))
        setTimeout(() => {
            console.log(this.state);
        }, 1000)
    }

    onChange = (event) => {
        this.setState({
            inputText: event.target.value
        })
    }

    handleDelete = (id) => {
        const updateTodoList = this.state.todoItems.filter(value => id !== value.uniqueID);
        this.setState(prevState => ({
            ...prevState,
            todoItems: updateTodoList
        }));
    }

    render() {
        return (
            <div>
                <Form 
                    handleSubmit={this.handleSubmit}
                    onChange={this.onChange}
                    value={this.state.inputText}
                />
                <Todolist 
                    todoItems={this.state.todoItems}
                    handleDelete={this.handleDelete}
                />
            </div>
        )
    }
}

export default Container;