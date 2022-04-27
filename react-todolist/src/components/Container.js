import React from 'react';
import Form from './Form';
import Todolist from './Todolist';

class Container extends React.Component {
    state = {
        inputText: "",
        todoItems: []
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            todoItems: [...prevState.todoItems, prevState.inputText],
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

    handleDelete = (item) => {
        const updateTodoList = this.state.todoItems.filter(value => item !== value);
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