import React from 'react'
import { Link } from 'react-router-dom' 
import { SignedInLink } from './SignedInLink';
import { SignedOutLink } from './SignedOutLink';

export const NavBar = () => {
    return (
        <nav className="nav-wrapper grey darker-3">
            <div className="container">
                <Link to='/' className='brand-logo'>Mario Plan</Link>
                <SignedInLink/>
                <SignedOutLink/>
            </div>
        </nav>
    );
}
