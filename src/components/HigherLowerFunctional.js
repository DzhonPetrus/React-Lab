import { useState } from "react";

/*
1. Accept the input of the user
2. Compare the user input to the numToGuess
3. If the user guessed the number correctly, update the div("you guessed wrong") to "Right guess"
3.1 If the guess is incorrect, tell the user if the guess is higher or lowerthan numToGuess
*/

function HigherLowerFunctional(){

  const [guess, setGuess] = useState(0);
  const [hint, setHint] = useState("Please Guess");
  const [NUM_TO_GUESS] = useState(Math.floor(Math.random() * 1000));



  const guessNumber = (e) => {
    const userGuess = parseInt(e.target.value);

    setGuess(userGuess);

    if(userGuess === NUM_TO_GUESS)
      setHint(`You guessed right, it's ${NUM_TO_GUESS}`);
    if(userGuess < NUM_TO_GUESS)
      setHint("Your guess is Lower than NUM_TO_GUESS");
    if(userGuess > NUM_TO_GUESS)
      setHint("Your guess is Higher than NUM_TO_GUESS");
  }



  return (
    <>
      <input className="form-control" type="number" id="guess" onChange={guessNumber} placeholder="guess" />
      <div id="hint">{hint}</div>
      <div id="yourGuess">Your Guess: {guess}</div>
    </>
  );
}



export default HigherLowerFunctional;