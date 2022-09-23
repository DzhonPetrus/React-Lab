import {Component} from 'react';

class Converter extends Component {

  constructor(props){
    super(props);

    this.state = {
      cm:"",
      In:"",
    };

  }

  convert = (e) => {
    const thisId = e.target.id;
    const thisValue = parseInt(e.target.value);

    if(thisId === "centimeters")
      this.convertCmToIn(thisValue);
    else
      this.convertInToCm(thisValue);
  }

  convertCmToIn = (cm) => {
    this.setState({In:cm*2.54})
    this.setState({cm})
  }

  convertInToCm = (In) => {
    this.setState({cm:In/2.54})
    this.setState({In})
  }

  render() {
    return (
      <>
        <div className='container row'>
          <div className='col-sm-6'>
            <input className="form-control" type="number" id="centimeters" onChange={this.convert} placeholder="centimeters" value={this.state.cm}/>
          </div>
          <div className='col-sm-6'>
            <input className="form-control" type="number" id="inches" onChange={this.convert} placeholder="inches" value={this.state.In}/>
          </div>
        </div>
      </>
    );
  }
}



export default Converter;
