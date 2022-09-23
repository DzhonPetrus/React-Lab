import {Component} from 'react';

/*
1. Accept the input of the user
2. Compare the user input to the numToGuess
3. If the user guessed the number correctly, update the div("you guessed wrong") to "Right guess"
3.1 If the guess is incorrect, tell the user if the guess is higher or lowerthan numToGuess
*/

class HigherLower extends Component {

  constructor(props){
    super(props);

    this.state = {
      numToGuess:Math.floor(Math.random() * 1000),
      guess:0,
      hint:"Please Guess",
    };

  }

  guess = (e) => {
    const userGuess = parseInt(e.target.value);

    this.setState({guess:userGuess})

    if(userGuess === this.state.numToGuess)
      this.setState({hint:"Right guess"});
    if(userGuess < this.state.numToGuess)
      this.setState({hint:"Your guess is Lower than numToGuess"});
    if(userGuess > this.state.numToGuess)
      this.setState({hint:"Your guess is Higher than numToGuess"});
  }



  render() {
    return (
      <>
        <input className="form-control" type="number" id="guess" onChange={this.guess} placeholder="guess" />
        <div id="hint">{this.state.hint}</div>
        <div id="yourGuess">Your Guess: {this.state.guess}</div>

      </>
    );
  }
}



export default HigherLower;
