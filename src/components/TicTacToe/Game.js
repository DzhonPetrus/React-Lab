import {Component} from 'react';
import './Game.css';
import Board from './Board';

class Game extends Component {
  render() {
    return (
      <>
        <h2>Tic Tac Toe</h2>
        <div className="game">
          <div className="game-board">
            <Board />
            </div>
            <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      </>
      );
  }
}

export default Game;