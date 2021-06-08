import React, { Component } from 'react';

class AddNinja extends Component {

    state = {
        name: null,
        age: null,
        belt: null
    }

    onHandleTextChanges = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    
    onsubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    } 

    render() {
        return (
            <div>
                <form onsubmit={this.onsubmit}>
                    <label htmlFor="name" >Name:</label>
                    <input type="text" id="name" onChange={this.onHandleTextChanges} />
                    <br/><br/>
                    <label htmlFor="age" >Age:</label>
                    <input type="number" id="age" onChange={this.onHandleTextChanges} />
                    <br/><br/>
                    <label htmlFor="belt" >Belt:</label>
                    <input type="text" id="belt" onChange={this.onHandleTextChanges} />
                    <br/><br/>
                    <button onClick={this.onsubmit}>Submit</button><br/>

                </form>
            </div>
        )
    }
}
export default AddNinja;