import React from 'react'
import { Switch, BrowserRouter as Router } from 'react-router-dom'
import {
  Profile,
  Home,
  IndexPage,
  Reset,
  SignIn,
  SignUp,
} from './components/Pages'
import PrivateRoute from './components/Routes/PrivateRoute'
import PublicRoute from './components/Routes/PublicRoute'
import Amplify from 'aws-amplify'
import config from './aws-exports'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'

const App = () => {
  Amplify.configure(config)
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/profile" component={Profile} />
        <PublicRoute path="/signin" component={SignIn} />
        <PublicRoute path="/signup" component={SignUp} />
        <PublicRoute path="/reset" component={Reset} />
        <PublicRoute path="/" component={IndexPage} />
      </Switch>      
    </Router>
  )
}

export default App