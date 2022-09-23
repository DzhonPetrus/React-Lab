import {Component} from 'react';

class GCFCalculator extends Component {

  constructor(props){
    super(props);

    this.state = {
      first:0,
      second:0,
      gcf:0,
    };

  }

  getValue = (e) => {
    const thisId = e.target.id;
    const thisValue = e.target.value;

    if(thisId === "first")
      this.setState({first:thisValue});
    else
      this.setState({second:thisValue});

  }

  findGCF = (a,b) => {
    if(b===0)
      this.setState({gcf:a});
    else
      return this.findGCF(b, (a%b));
  }

  render() {
    return (
      <>
        <div className='container row'>
          <div className='col-sm-6'>
            <input className="form-control" type="number" id="first" onChange={this.getValue} />
          </div>
          <div className='col-sm-6'>
            <input className="form-control" type="number" id="second" onChange={this.getValue} />
          </div>
        <button className="btn btn-primary" onClick={() => this.findGCF(this.state.first, this.state.second)}>Get GCF</button>
        </div>
        <h3>GCF: {this.state.gcf === 0 ? "NO INPUT" : this.state.gcf}</h3>
      </>
    );
  }
}



export default GCFCalculator;
