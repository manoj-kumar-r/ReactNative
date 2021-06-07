import React, { Component } from 'react';
import Ninjas from './component/Ninjas';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 35, belt: "black", id: 1 },
      { name: 'Manoj', age: 25, belt: "white", id: 2 },
      { name: 'Mani', age: 25, belt: "orange", id: 3 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <p>Welcome :)</p>
        <p>*******</p>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;