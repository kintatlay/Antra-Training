const React = require('react');
import Counter from './Counter';
import Button from './Button';
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0}

        this.handleIncrement=this.handleIncrement.bind(this);
        this.handleDecrement=this.handleDecrement.bind(this);
    }

    handleIncrement() {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }))
    }

    handleDecrement() {
        this.setState(prevState => ({
            counter: prevState.counter - 1
        }))
    }

    render() {
        // console.log(this.state.counter);
        return (
            <main className="btn">
                <Counter counter={this.state.counter} />
                <Button
                    handleIncrement={this.handleIncrement}
                    handleDecrement={this.handleDecrement}
                />
            </main>
        )
    }
}

export default App;