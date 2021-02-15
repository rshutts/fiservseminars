import React from "react";
import { Route, Switch } from "react-router-dom";

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
import Polls from './containers/Polls/components/index';
import Audience from './containers/Polls/components/Audience';
/* import Board from './containers/Polls/components/Board'; */
import Speaker from './containers/Polls/components/Speaker';
/* import NewNote from "./containers/NewNote"; */
/* import UpdateProfile from "./containers/Profile/UpdateProfile"; */
/* import Notes from "./containers/Notes"; */

/*Components*/
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <UnauthenticatedRoute exact path="/login">
        <Login />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/signup">
        <Signup />
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
      <AuthenticatedRoute exact path="/faq">
        <FAQ />
      </AuthenticatedRoute>
			{/* <AuthenticatedRoute exact path="/meetings/board">
        <Board/>
      </AuthenticatedRoute> */}
      <AuthenticatedRoute exact path="/meetings/polling">
        <Polls/>
      </AuthenticatedRoute> 
			<AuthenticatedRoute exact path="/meetings/speaker">
        <Speaker/>
      </AuthenticatedRoute> 
        
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
  );
}
