import React from 'react'
import { Link } from 'gatsby'
import { navigate } from '@reach/router'
import { Auth } from 'aws-amplify'
import { AppUser } from '../Auth'

function UserNav() {
  const { logout } = AppUser
  function logOut(e) {
    e.preventDefault()

    Auth.signOut()
      .then(logout(() => navigate('/signin')))
      .catch(err => console.log('error: ', err))
  }

  return (
    <div className="navbar-wrapper">
      <nav className="navbar navbar-expand announcement">
        <p>
          UPCOMING CONFERENCE: How to use Access Manager to it's fullest potential. <a href="/">Grab a seat in the Virtual Classroom</a>
        </p>
      </nav>
      <nav className="navbar navbar-expand">
        <div className="logo">
          <Link className="text-center logo" to="/">
            <img src="https://s3.us-east-2.amazonaws.com/fiservseminars-media.com/logo.png" height="84px" alt="logo"></img>
            {/* <h1 className="navbar-brand mb-0 text-primary">Authenticaysh</h1> */}
          </Link>
        </div>
        <div className="navbar-nav-scroll d-flex flex-grow-1" />
        <div className="navbar-nav-scroll">
          <Link className="text-center" to="/profile">
              Profile
          </Link>
          <Link className="text-center" 
            onClick={e => logOut(e)}
            style={{ margin: 0, cursor: 'pointer' }}
            className="nav-link text-primary text-center nav-btn signout"
          >
            Logout
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default UserNav
