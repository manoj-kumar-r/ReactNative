import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { signUp } from '../../store/actions/AuthActions';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstname: '',
        lastname: '',
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
        const { authError, auth } = this.props
        if (auth.uid) {
            return <Redirect to='/' />
        }
        return (
            <div className="container">
                <div className="card">
                    <div className='card-content'>
                        <form className="white" onSubmit={this.onSubmit}>
                            <h5 className="gre-text text-darken-3">Sign Up</h5>
                            <div className="input-field">
                                <label htmlFor='email'>Email</label>
                                <input type='email' id='email' onChange={this.onEditChange} />
                            </div>

                            <div className="input-field">
                                <label htmlFor='password'>Password</label>
                                <input type='password' id='password' onChange={this.onEditChange} />
                            </div>

                            <div className="input-field">
                                <label htmlFor='firstname'>First Name</label>
                                <input type='text' id='firstname' onChange={this.onEditChange} />
                            </div>

                            <div className="input-field">
                                <label htmlFor='lastname'>Last Name</label>
                                <input type='text' id='lastname' onChange={this.onEditChange} />
                            </div>

                            <div className="center">
                                <button className="btn pink lighten-1 z-depth-0" onClick={this.onSubmit}>Sign Up</button>
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

// const mapDispatchToProps = (dispatch) => {
//     return {
//         signUp: (creds) => dispatch(signUp(creds))
//     }
// }

export default compose(
    connect(mapStateToProps)
)(SignUp);