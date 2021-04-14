import React from "react";
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

/*Pages*/
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Meetings from "./pages/Meetings";
import FAQ from './pages/FAQ';

/*Containers*/
import Login from "./containers/Login";
import ResetPassword from "./containers/ResetPassword";
import ChangePassword from "./containers/Profile/ChangePassword";
import UpdateProfile from "./containers/Profile/UpdateProfile";
import Signup from "./containers/Signup";
import SignupConfirmation from "./containers/SignupConfirmation";
import Sidenav from "./containers/SideNav";
import Popout from "./containers/Chat/Popout";

/*Polls*/
import Polls from './containers/Polls/Polls';
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
          <AuthenticatedRoute exact path="/meetings">
            <Meetings />
          </AuthenticatedRoute>
          <AuthenticatedRoute exact path="/profile">
            <Profile />
          </AuthenticatedRoute>
          <AuthenticatedRoute exact path="/profile/update">
            <UpdateProfile />
          </AuthenticatedRoute>
          <Route exact path="/faq">
            <FAQ />
          </Route>
          <AuthenticatedRoute exact path="/popout?room=Fiserv">
            <Popout />
          </AuthenticatedRoute>
         {/*  <AuthenticatedRoute exact path="/meetings/speaker">
            <Speaker />
          </AuthenticatedRoute> */}
          {/* <AuthenticatedRoute exact path="/meetings/board">
            <Board/>
          </AuthenticatedRoute> */}
          <AuthenticatedRoute exact path="/profile/polls/create">
            <Polls/>
          </AuthenticatedRoute> 
          {/* <AuthenticatedRoute exact path="/profile/polls">
            <GetPolls/>
          </AuthenticatedRoute>  */}
          {/* <AuthenticatedRoute exact path="/meetings/speaker">
            <Speaker/>
          </AuthenticatedRoute>  */}
            
          {/* <AuthenticatedRoute exact path="/notes/new">
            <NewNote />
          </AuthenticatedRoute>
          <AuthenticatedRoute exact path="/notes/:id">
            <Notes />
          </AuthenticatedRoute> */}
          <AuthenticatedRoute exact path="/profile/password">
            <ChangePassword />
          </AuthenticatedRoute>
          {/* <AuthenticatedRoute exact path="/profile/email">
            <UpdateEmail />
          </AuthenticatedRoute> */}
          {/* Finally, catch all unmatched routes */}
          {/* <Route>
            <NotFound />
          </Route> */}
        </Switch>
        </CSSTransition>
</TransitionGroup>
 );
}}
/>
</Router>
);

export default Routes;
