import React, { Component } from 'react';
import './App.css';
import {Home, Navi } from './components'
import { Route,Link, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navi />
          <Route exact path="/vup/home" render={() => (<Home />)} />
          <Route path="/*" render={() => (<Redirect to="/vup/home" />)} />
      </div>
    );
  }
}

export default App;
