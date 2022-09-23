import {Component} from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Counter from "./components/Counter";
import Header from "./components/Header";
import Subheader from "./components/Subheader";
import TodoList from "./components/TodoList";
import Game from "./components/TicTacToe/Game";
import GCFCalculator from './components/GCFCalculator';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      todos: ["Clean table", "Brew coffee", "Drink Coffee"],
    };

  }


  render() {
    return (
      <>
        <h2>GCF Calculator</h2>
        <GCFCalculator />
        <hr/>

        <Counter />
        <hr/>

        <Header/>
        <Subheader name="John Peter"/>
        <TodoList todos={this.state.todos}/>
        <hr/>

        <h2>Tic Tac Toe</h2>
        <Game/>
      </>
    );
  }
}



export default App;
