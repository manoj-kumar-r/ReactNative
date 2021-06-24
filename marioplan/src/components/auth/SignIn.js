import React, { Component } from 'react'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
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
                            <h5 className="gre-text text-darken-3">Sign In</h5>
                            <div className="input-field">
                                <label htmlFor='email'>Email</label>
                                <input type='email' id='email' onChange={this.onEditChange} />
                            </div>

                            <div className="input-field">
                                <label htmlFor='password'>Password</label>
                                <input type='password' id='password' onChange={this.onEditChange} />
                            </div>

                            <div className="center">
                                <button className="btn pink lighten-1 z-depth-0" onClick={this.onSubmit}>Login</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn;
