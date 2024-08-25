import { Component } from "react"

class ClassBasedComponents extends Component {

    state = {
        showText : false,
    };

    handleClick = () => {
        this.setState({
            showText: !this.state.showText,
        });
    };

    render() {
        console.log(this.state);
        
        return (
            <div>
                {
                    this.state.showText ? <h4>This is a Class Based Component</h4> : null
                }
                <button onClick={this.handleClick}>toggle text</button>
            </div>
        );
    }

}
export default ClassBasedComponents;