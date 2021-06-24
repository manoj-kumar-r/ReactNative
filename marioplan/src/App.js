import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavBar } from './components/layout/NavBar';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar/>
        </div>
      </BrowserRouter>
    );
  }
}