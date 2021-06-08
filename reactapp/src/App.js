import React, { Component } from 'react';
import Ninjas from './component/Ninjas';
import AddNinja from './component/AddNinja';
class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 35, belt: "black", id: 1 },
      { name: 'Manoj', age: 20, belt: "white", id: 2 },
      { name: 'Mani', age: 25, belt: "orange", id: 3 }
    ]
  }

  addNewNinja = (newNinja) => {
    //Copy array using spread operator 
    newNinja.id = Math.random();
    let data = [...this.state.ninjas, newNinja];
    this.setState({
      ninjas: data
    })
  }

  deleteNinja = (id) => {
    console.log(id);
    let data = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: data
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <p>Welcome :)</p>
        <p>******* Add New Ninjas *******</p>
        <AddNinja addNewNinja={this.addNewNinja} />
        <p>******* Added Ninjas *******</p>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
      </div>
    );
  }
}

export default App;