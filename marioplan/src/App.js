import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import NavBar from './components/layout/NavBar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/create' component={CreateProject} />
            <Route exact path='/project/:id' component={ProjectDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;