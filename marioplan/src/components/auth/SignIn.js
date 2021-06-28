import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/AuthActions';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.signIn(this.state)
    }

    onEditChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        const { authError, auth } = this.props
        if (auth.uid) {
            return <Redirect to='/' />
        }
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
                                <div className="red-text center">
                                    {
                                        authError ? (
                                            <p>{authError}</p>
                                        ) : null
                                    }
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(SignIn);
