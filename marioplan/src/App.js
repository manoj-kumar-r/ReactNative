import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>Mario Plan</h1>
        </div>
      </BrowserRouter>
    );
  }
}