import {Component} from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.css'

import Counter from "./components/Counter";
import Header from "./components/Header";
import Subheader from "./components/Subheader";
import TodoList from "./components/TodoList";
import Game from "./components/TicTacToe/Game";
import GCFCalculator from './components/GCFCalculator';
import StateSample from './components/StateSample';
import Converter from './components/Converter';
import HigherLower from './components/HigherLower';
import Dog from './components/Dog';
import HigherLowerFunctional from './components/HigherLowerFunctional';


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
        <h2>Higher Lower Functional</h2>
        <HigherLowerFunctional />
        <hr/>

        <Dog />
        <hr/>

        <Counter />
        <hr/>

        <h2>Converter</h2>
        <Converter />
        <hr/>

        <h2>Higher Lower</h2>
        <HigherLower />
        <hr/>

        <h2>State Sample</h2>
        <StateSample />
        <hr/>

        <h2>GCF Calculator</h2>
        <GCFCalculator />
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
