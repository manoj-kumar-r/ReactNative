import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const SignedOutLink = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>Sign Up</NavLink></li>
            <li><NavLink to='/'>Login</NavLink></li>
        </ul>
    );
}
