import React, { Component } from 'react';
import Todos from './todos/ToDos';
import AddTodo from './todos/AddForm';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'Buy Some Milk' },
      { id: 2, content: 'Play Mario Kart' },
    ]
  }

  addToDo = (newTodo) => {
    console.log(newTodo);
    newTodo.id = Math.random();
    let data = [...this.state.todos, newTodo];
    this.setState({
      todos: data
    })
  }

  deleteToDo = (id) => {
    console.log(id);
    let data = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: data
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <AddTodo addToDo={this.addToDo} />
        <Todos todos={this.state.todos} deleteToDo={this.deleteToDo} />
      </div>
    );
  }
}

export default App;
