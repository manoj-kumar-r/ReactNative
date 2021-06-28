import React from 'react'
import { Link } from 'react-router-dom'

import SignedInLink from './SignedInLink';
import SignedOutLink from './SignedOutLink';

import { connect } from 'react-redux';

const NavBar = (props) => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        {
          props.auth.uid ? (
            <div>
              <Link to='/dashboard' className="brand-logo left">MarioPlan</Link>
              <SignedInLink />
            </div>
          ) : (
            <div>
              <Link to='/dashboard' className="brand-logo">MarioPlan</Link>
              <SignedOutLink />
            </div>
          )
        }
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(NavBar)