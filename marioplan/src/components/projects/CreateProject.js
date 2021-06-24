import React, { Component } from 'react'

export default class CreateProject extends Component {
    state = {
        title: '',
        content: '',
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    onEditChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className='card-content'>
                        <form className="white" onSubmit={this.onSubmit}>
                            <h5 className="gre-text text-darken-3">Create Project</h5>
                            <div className="input-field">
                                <label htmlFor='title'>Title</label>
                                <input type='text' id='title' onChange={this.onEditChange} />
                            </div>

                            <div className="input-field">
                                <label htmlFor='content'>Content</label>
                                <textarea id="content" className='materialize-textarea' onChange={this.onEditChange} />
                            </div>
                            <button className="btn pink lighten-1 z-depth-0" onClick={this.onSubmit}>Create</button>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}