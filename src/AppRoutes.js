import React, {Component} from 'react';
import {Routes, Route} from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.css'

import Counter from "./components/Counter";
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
import BasicTodoInitial from './BasicTodoInitial';


class AppRoutes extends Component {


  render() {
    return (
      <Routes>
          <Route path="/users" element={<Users />}/>
          <Route path="/dog" element={<Dog />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/converter" element={<Converter />} />
          <Route path="/stateSample" element={<StateSample />} />
          <Route path="/gcfCalculator" element={<GCFCalculator />} />
          <Route path="/tictactoe" element={<Game />} />
          <Route path="/basicTodoInitial" element={<BasicTodoInitial />}/>
          <Route path="/basicTodo" element={<TodoBasic />}/>
          <Route path="/formSample" element={<FormSample />}/>
          <Route path="/higherLowerFunctional" element={<HigherLowerFunctional />}/>
          <Route path="/higherLower" element={<HigherLower />}/>
      </Routes>
    );
  }
}



export default AppRoutes;
