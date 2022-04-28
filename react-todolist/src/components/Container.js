import React from 'react';
import Form from './Form';
import Todolist from './Todolist';
import { v4 as uuidv4 } from 'uuid';
import '../css/Container.css';

class Container extends React.Component {
    state = {
        inputText: "",
        todoItems: [],
    }

    handleSubmit = (event) => {
        event.preventDefault();
        var newObj = {uniqueID: uuidv4(), inputText: this.state.inputText};
        this.setState(prevState => ({
            todoItems: [...prevState.todoItems, newObj],
            inputText: ""
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
            <div className="todoList__container--background">
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