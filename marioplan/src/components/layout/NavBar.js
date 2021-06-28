import React from 'react'
import { Link } from 'react-router-dom'

import SignedInLink from './SignedInLink';
import SignedOutLink from './SignedOutLink';

import { connect } from 'react-redux';

const NavBar = (props) => {
    const { auth } = props;
    console.log(auth);
    return (
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to='/' className="brand-logo left">MarioPlan</Link>
          <SignedInLink />
          <SignedOutLink />
        </div>
      </nav>
    )
  }

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(NavBar)