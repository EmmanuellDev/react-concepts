import { Component } from "react"

class ClassBasedComponents extends Component {

    state = {
        showText : false,
        changeColour : false,
        count: 0,
    };

    handleClick = () => {
        this.setState({
            showText: !this.state.showText,
            showColour: !this.state.changeColour,
            changeCountStyle: false,
        });
    };

    handleCount = () => {
        this.setState({
            ...this.state,
            count : !this.state.count + 1,
        })
    }

    // componentDidMount
    componentDidMount() {
        this.setState({
            showText : !this.state.showText,
            showColour : !this.state.showColour,
        })
    }

    // componentDidUpdate
    componentDidUpdate (prevProps, prevState) {
        console.log(prevState, this.state.count);
        
    }

    render() {
        console.log(this.state);
        const {showText, showColour, count} = this.state
        
        return (
            <div>
                {
                    this.state.showText ? <h4 style={{ color: this.state.changeColour ? "red" : "blue" }}>This is a Class Based Component</h4> : null
                }
                <button onClick={this.handleClick}>toggle text</button>
                <button onClick={this.handleCount}>Increase Count Value</button>
                <h3>Count is {count}</h3>
            </div>
        );
    }

}
export default ClassBasedComponents;