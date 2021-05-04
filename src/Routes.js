import React from "react";
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

/*Pages*/
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Meetings from "./pages/Meetings";
import FAQ from './pages/FAQ';
import Bios from './pages/Bios';
import PasswordRest from './pages/ResetPassword'

/*Containers*/
import Login from "./containers/Login";
import ResetPassword from "./containers/Profile/ResetPassword";
import ChangePassword from "./containers/Profile/ChangePassword";
import UpdateProfile from "./containers/Profile/UpdateProfile";
import Signup from "./containers/Signup";
import SignupConfirmation from "./containers/SignupConfirmation";
import Sidenav from "./containers/SideNav";
import Popout from "./containers/Chat/Popout";

/*Polls*/
/* import CreatePoll from './containers/Polls/CreatePoll';
import Polls from './containers/Polls/Polls';
import Poll from './containers/Polls/Poll'; */
/* import GetPolls from './containers/GetPolls'; */
/* import Audience from './containers/Polls/components/Audience'; */
/* import Board from './containers/Polls/components/Board'; */
/* import Speaker from './containers/Polls/Speaker'; */
/* import NewNote from "./containers/NewNote"; */
/* import UpdateProfile from "./containers/Profile/UpdateProfile"; */
/* import Notes from "./containers/Notes"; */

/*Components*/
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

const Routes = () => (
  
  <Router>  
  <Sidenav/>
  <Route
      render={({ location }) => {
        return (
    <TransitionGroup component={null} className="transition-group">
      <CSSTransition timeout={300} classNames="fade">
      <Switch location={location}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/faq">
            <FAQ />
          </Route>
          <Route exact path="/speaker-bios">
            <Bios />
          </Route>
          <UnauthenticatedRoute exact path="/login">
            <Login />
          </UnauthenticatedRoute>
          <UnauthenticatedRoute exact path="/signup">
            <Signup />
          </UnauthenticatedRoute>
          <UnauthenticatedRoute exact path="/signup/confirmation">
            <SignupConfirmation />
          </UnauthenticatedRoute>
          <UnauthenticatedRoute exact path="/login/reset">
            <ResetPassword />
          </UnauthenticatedRoute>
          <UnauthenticatedRoute exact path="/login/reset">
            <ResetPassword />
          </UnauthenticatedRoute>
          <UnauthenticatedRoute exact path="/password/reset">
            <PasswordRest />
          </UnauthenticatedRoute>
          <AuthenticatedRoute exact path="/meetings">
            <Meetings />
          </AuthenticatedRoute>
          <AuthenticatedRoute exact path="/profile">
            <Profile />
          </AuthenticatedRoute>
          <AuthenticatedRoute exact path="/profile/update">
            <UpdateProfile />
          </AuthenticatedRoute>
          <AuthenticatedRoute exact path="/popout?room=Fiserv">
            <Popout />
          </AuthenticatedRoute>
        </Switch>
        </CSSTransition>
</TransitionGroup>
 );
}}
/>
</Router>
);

export default Routes;
