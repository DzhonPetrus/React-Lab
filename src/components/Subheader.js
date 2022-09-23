import {Component} from 'react';

class Subheader extends Component {
  render(){
    return(
      <h2>{this.props.name}'s GTD for the day</h2>
    );

  }
}

export default Subheader;