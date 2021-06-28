import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

const SignedOutLink = (props) => {
    return (
        <ul className="right">
            <li><NavLink to='/signup'>Sign Up</NavLink></li>
            <li><NavLink to='/signin'>Login</NavLink></li>
        </ul>
    );
}

export default connect()(SignedOutLink)