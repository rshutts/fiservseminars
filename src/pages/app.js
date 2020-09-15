import React from 'react'
import { Router } from '@reach/router'
import Layout from '../components/layout'
import Profile from '../pages/Profile'
import Notes from '../components/notes'
import IndexPage from '../pages/index'
import Meetings from '../pages/Meetings'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import PrivateRoute from '../components/PrivateRoute'

const App = () => (
  <Layout>
    <Router>
      <IndexPage path="/app/home" component={IndexPage} />
      <PrivateRoute path="/app/profile" component={Profile} />
      <PrivateRoute path="/app/meetings" component={Meetings} />
      <Notes path="/app/notes" />
      <Login path="/app/login" />
      <SignUp path="/app/signup" />
    </Router>
  </Layout>
)

export default App
