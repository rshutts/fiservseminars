import React from 'react'
import { Link } from 'gatsby'
import { navigate } from '@reach/router'
import { setUser, isLoggedIn } from '../utils/auth'
import Error from './Error'
import { Auth } from 'aws-amplify'

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
    error: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  login = async () => {
    const { username, password } = this.state
    try {
      await Auth.signIn(username, password)
      const user = await Auth.currentAuthenticatedUser()
      const userInfo = {
        ...user.attributes,
        username: user.username,
      }
      setUser(userInfo)
      navigate('')
    } catch (err) {
      this.setState({ error: err })
      console.log('error...: ', err)
    }
  }

  render() {
    if (isLoggedIn()) navigate('/app/profile')
    return (
      <div className="login-wrap ">
        <h1 className="login-header">Sign In</h1>
        {this.state.error && <Error errorMessage={this.state.error} />}
        <div className="login-form">
          <input
            onChange={this.handleUpdate}
            placeholder="Username"
            name="username"
            value={this.state.username}
          />
          <input
            onChange={this.handleUpdate}
            placeholder="Password"
            name="password"
            value={this.state.password}
            type="password"
          />
          <Link to="/app/profile">Sign In</Link>
          <Link to="/app/signup">Sign Up</Link>
        </div>
        <br />
      </div>
    )
  }
}

export default Login
