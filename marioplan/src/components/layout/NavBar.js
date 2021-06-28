import React from 'react'
import { Link } from 'react-router-dom'

import SignedInLink from './SignedInLink';
import SignedOutLink from './SignedOutLink';

import { connect } from 'react-redux';

const NavBar = ({ auth, profile }) => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">

        {
          auth.uid ? (
            <div>
              <Link to='/' className="brand-logo left">{profile.firstname + " " + profile.lastname}</Link>
              <SignedInLink profile={profile} />
            </div>
          ) : (
            <div>
              <Link to='/' className="brand-logo left">Project Planning</Link>
              <SignedOutLink />
            </div>
          )
        }
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(NavBar)