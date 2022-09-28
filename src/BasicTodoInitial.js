import React, {Component} from 'react';

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
import TodoBasic from './components/TodoBasic/TodoBasic';
import FormSample from './components/FormSample';
import { Users } from './components/ReqRes/Users';


class BasicTodoInitial extends Component {

  constructor(props){
    super(props);

    this.state = {
      todos: ["Clean table", "Brew coffee", "Drink Coffee"],
    };

  }



  render() {
    return (
      <>
        <Header/>
        <Subheader name="John Peter"/>
        <TodoList todos={this.state.todos}/>
      </>
    );
  }
}



export default BasicTodoInitial;
