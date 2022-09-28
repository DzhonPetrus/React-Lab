import {Component} from 'react';

class StateSample extends Component {

  constructor(props){
    super(props);

    this.state = {
      name: "John Doe",
      employeeStatus: "Employed"
    };

  }

  handleClick = () => {
    this.setState({employeeStatus: "Unemployed"})
  }


  render() {
    return (
      <>
        <h2>State Sample</h2>
        <div className='container border'>
          <p>Name: {this.state.name}</p>
          <p>Employee Status: {this.state.employeeStatus}</p>
          <button className='btn btn-primary' onClick={this.handleClick}>Click me!</button>
        </div>
      </>
    );
  }
}



export default StateSample;
