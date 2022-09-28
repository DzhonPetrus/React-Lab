import React, {Component} from 'react';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import AppLinks from './AppLinks';

import AppRoutes from './AppRoutes';


class App extends Component {

  render() {
    return (
      <>
        <BrowserRouter>
          <AppLinks />

          <AppRoutes />
        </BrowserRouter>
      </>
    );
  }
}



export default App;
