const React = require('react');

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="btn__click">
                <button className="btn__click--inc" onClick={this.props.handleIncrement}>
                    Increase
                </button>
                <button className="btn__click--dec" onClick={this.props.handleDecrement}>
                    Decrease
                </button>
            </section>
        )
    }
}

export default Button;