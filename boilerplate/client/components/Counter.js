const React = require('react');

class Counter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h3 className="result__text--counter">{this.props.counter}</h3>
        )
    }
}

export default Counter;