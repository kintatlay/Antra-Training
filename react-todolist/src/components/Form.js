import React from 'react';
import "../css/Form.css"

class Form extends React.Component {
    render() {
        return (
            <form className="todoList__container--form" onSubmit={this.props.handleSubmit}>
                <input type="text" value={this.props.value} onChange={this.props.onChange} placeholder="Enter a to-do item." />
                <input type="submit" />
            </form>
        )
    }
}

export default Form;