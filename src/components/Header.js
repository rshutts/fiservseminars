import React from 'react'
import { Link } from 'gatsby'

import { navigate } from '@reach/router'

import { logout, isLoggedIn } from '../utils/auth'
import { Auth } from 'aws-amplify'
import { getCurrentUser } from '../utils/auth'
const user = getCurrentUser()

const Header = ({ siteTitle }) => (
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
      <div className="navbar-nav-scroll authentication">
      {isLoggedIn() && (
        <>
          <p>Hello {user.name}</p>
          <div className="navbar-nav-scroll authentication-btns">
          <Link className="nav-link" to="/app/profile"><i className="fa fa-fw fa-user" style={{ fontSize: '2rem', color:'#ff6600' }} /><br/>Profile</Link>
            <p
            onClick={() =>
              Auth.signOut()
                .then(logout(() => navigate('/app/login')))
                .catch(err => console.log('eror:', err))
            }
            style={styles.link}
          ><i className="fa fa-fw fa-sign-out-alt" style={{ fontSize: '2rem', color:'#ff6600' }} /><br/>
            Sign Out
          </p>
          </div>
          
        </>
      )}
    </div>
  </nav>
  </div>
)

const styles = {
  headerTitle: {
    color: 'white',
    textDecoration: 'none',
  },
  link: {
    cursor: 'pointer',
    color: '#000',
    textDecoration: 'none',
    paddingBottom:'0px',
    marginBottom:'0px',
    marginBlockEnd:'0px',
    fontSize:'14px'
  },
}

export default Header
