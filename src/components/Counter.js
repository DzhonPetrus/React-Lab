import {Component} from 'react';

class Counter extends Component {

  constructor(props){
    super(props);

    this.state = {
      counter:0,
    };

    this.incrementBy=3;
    this.decrementBy=2;
    this.maxNum=50;
    this.leastNum=-10;

  }

  increment = () => {
    if(this.state.counter+this.incrementBy > this.maxNum)
      return alert(`Increment Counter by: ${this.incrementBy} | Counter cannot be more than ${this.maxNum}`);
    this.setState({counter:this.state.counter+this.incrementBy});
  }

  decrement = () => {
    if(this.state.counter-this.decrementBy < this.leastNum)
      return alert(`Decrement Counter by: ${this.decrementBy} | Counter cannot be less than ${this.leastNum}`);
    this.setState({counter:this.state.counter-this.decrementBy});
  } 

  render() {
    return (
      <>
        <h2>Counter: {this.state.counter}</h2>
        <button className='btn btn-primary' onClick={this.decrement}>-</button>
        <button className='btn btn-primary' onClick={this.increment}>+</button>
      </>
    );
  }
}



export default Counter;
