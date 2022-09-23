import {Component} from 'react';

class Counter extends Component {

  constructor(props){
    super(props);

    this.state = {
      counter:0,
    };

  }

  increment = () => this.setState({counter:this.state.counter+1}) ;
  decrement = () => this.setState({counter:this.state.counter-1}) ;

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
