import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.css'

class AppLinks extends Component {

  constructor(props){
    super(props);

    AppLinks.links = [
      {
        to:"users",
        title:"Users"
      },
      {
        to:"dog",
        title:"Dog"
      },
      {
        to:"counter",
        title:"Counter"
      },
      {
        to:"converter",
        title:"Converter"
      },
      {
        to:"stateSample",
        title:"State Sample"
      },
      {
        to:"gcfCalculator",
        title:"GCF Calculator"
      },
      {
        to:"tictactoe",
        title:"Tic-Tac-Toe"
      },
      {
        to:"formSample",
        title:"Form Sample"
      },
      {
        to:"basicTodo",
        title:"Basic Todo"
      },
      {
        to:"higherLowerFunctional",
        title:"Higher Lower Functional"
      },
      {
        to:"higherLower",
        title:"Higher Lower"
      },
      {
        to:"basicTodoInitial",
        title:"Basic Todo Initial"
      },
    ];

  }



  render() {
    return (
      <nav className="navbar">
        {AppLinks.links.map(({to, title}) => <NavLink to={to}>{title}</NavLink>)}
      </nav>
    );
  }
}

export default AppLinks;
