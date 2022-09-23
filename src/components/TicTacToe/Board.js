import {Component} from 'react';
import Square from './Square';

class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            nextPlayer: "X",
            currentPlayer: "O",
        };
    }

    handleClick(i){
        const squares = this.state.squares;
        squares[i] = this.state.currentPlayer;
        this.setState({squares});
        this.setState({currentPlayer : this.state.nextPlayer == "X" ? "O" : "X"});
        this.setState({nextPlayer: this.state.currentPlayer})
    }

    renderSquare(i) {
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
    }

    render() {
        const status = `CurrentPlayer: ${this.state.currentPlayer} | Next player: ${this.state.nextPlayer}`;

        return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            </div>
            <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            </div>
            <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            </div>
        </div>
        );
    }
}

export default Board;