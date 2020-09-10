import React from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../UserContext'
import { Auth } from 'aws-amplify'

class Header extends React.Component {
  static contextType = UserContext
  render() {
    const isAuthenticated = this.context.user && this.context.user.username ? true : false
    const isLoaded = this.context.isLoaded
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
          <div className="navbar-nav-scroll authentication-btns">
            {/* <Link to='/private' {...css(styles.link)}>
              <p {...css(styles.navItem)}>Private</p>
            </Link> */}
            {
              isLoaded ? isAuthenticated ? (
                <Link className="text-center nav-btn signout" onClick={signOut}>
                  <p>Sign Out</p>
                </Link>
              ) : (
                <Link className="text-center nav-btn signin" to='/auth'>
                  <p>Sign In</p>
                </Link>
              ) : null
            }
          </div>
        </nav>
      </div>
    )
  }
}
function signOut() {
  Auth.signOut()
    .then(() => {
      this.props.history.push('/auth')
    })
    .catch(() => console.log('error signing out...'))
}
export default Header
