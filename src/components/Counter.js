import {Component} from 'react';

class Counter extends Component {

  constructor(props){
    super(props);

    this.state = {
      counter:0,
    };

    Counter.INCREMENT_BY=3;
    Counter.DECREMENT_BY=2;
    Counter.MAX_NUM=50;
    Counter.LEAST_NUM=-10;

  }

  increment = () => {
    if(this.state.counter+Counter.INCREMENT_BY > Counter.MAX_NUM)
      return alert(`Increment Counter by: ${Counter.INCREMENT_BY} | Counter cannot be more than ${Counter.MAX_NUM}`);
    this.setState({counter:this.state.counter+Counter.INCREMENT_BY});
  }

  decrement = () => {
    if(this.state.counter-Counter.DECREMENT_BY < Counter.LEAST_NUM)
      return alert(`Decrement Counter by: ${Counter.DECREMENT_BY} | Counter cannot be less than ${Counter.LEAST_NUM}`);
    this.setState({counter:this.state.counter-Counter.DECREMENT_BY});
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
