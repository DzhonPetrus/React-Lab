import React, {Component} from 'react';

import Header from "./components/Header";
import Subheader from "./components/Subheader";
import TodoList from "./components/TodoList";


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
