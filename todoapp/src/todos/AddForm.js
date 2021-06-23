import React, { Component } from 'react';

class AddTodo extends Component {

    state = {
        content: ""
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addToDo(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Add New Todo</label>
                    <input type="text" onChange={this.handleChange} />
                    <button onClick={this.handleSubmit}>Add</button>
                </form>
            </div>
        );
    }
}

export default AddTodo;
