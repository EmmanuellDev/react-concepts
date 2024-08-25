import { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    handleCount () {
      this.setState({
        count : this.state.count + 1,
      })
      console.log(this.state.count);
    }

  render()
   {
    const {count} = this.state;
    return (
      <div>
        <h3>The count is {count}</h3>
        <button onClick={this.handleCount}>Increament</button>
      </div>
    )
  }
}

export default Counter
