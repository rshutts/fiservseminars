import React from "react";
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

/*Pages*/
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Meetings from "./pages/Meetings";
import Archived from "./pages/Archived";
import FAQ from './pages/FAQ';
import Bios from './pages/Bios';
import PasswordReset from './pages/ResetPassword';
import PasswordForgot from './pages/ForgotPassword';
import Articles from './pages/Articles'

/*Containers*/
import Login from "./containers/Auth/Login";
import ResetPassword from "./containers/Auth/ResetPassword";
import UpdateProfile from "./containers/Profile/UpdateProfile";
import Signup from "./containers/Auth/Signup/Signup";
/* import FormSignup from "./containers/Auth/Signup/Signup2"; */
import SignupConfirmation from "./containers/Auth/Signup/SignupConfirmation";
import Sidenav from "./components/SideNav";
import Popout from "./containers/Chat/Popout";
import Polls from "./containers/Polling/Polls";
import CreatePoll from "./containers/Polling/CreatePoll";
import Polling from "./containers/Polling/Polling";

/* import TriviaAdmin from "./containers/Trivia/admin/admin";
import EditQuiz from "./containers/Trivia/admin/editquiz";
import EditQuestions from "./containers/Trivia/admin/editquestion";
import RunQuiz from "./containers/Trivia/admin/runquiz";
import Game from "./containers/Trivia/game"; */

/*Polls*/

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
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/faq">
            <FAQ />
          </Route>
          <Route exact path="/speaker-bios">
            <Bios />
          </Route>
          <Route exact path="/resource-center/articles">
            <Articles />
          </Route>
          <UnauthenticatedRoute exact path="/password/forgot">
            <PasswordForgot />
          </UnauthenticatedRoute>
          <UnauthenticatedRoute exact path="/login">
            <Login />
          </UnauthenticatedRoute>
          <UnauthenticatedRoute exact path="/signup">
            <Signup /> 
            {/* <FormSignup /> */}
          </UnauthenticatedRoute>
          <UnauthenticatedRoute exact path="/signup/confirmation">
            <SignupConfirmation />
          </UnauthenticatedRoute>
          <AuthenticatedRoute exact path="/session">
            <Meetings />
          </AuthenticatedRoute>
          {/* <AuthenticatedRoute exact path="/archived-sessions">
            <Archived />
          </AuthenticatedRoute> */}
          <AuthenticatedRoute exact path="/profile">
            <Profile />
          </AuthenticatedRoute>
          <AuthenticatedRoute exact path="/profile/update">
            <UpdateProfile />
          </AuthenticatedRoute>
          <AuthenticatedRoute exact path="/profile/password/reset">
            <PasswordReset />
          </AuthenticatedRoute>
          <AuthenticatedRoute exact path="/popout?room=Fiserv">
            <Popout />
          </AuthenticatedRoute>

          {/* Polls*/}
          <AuthenticatedRoute exact path="/profile/polls">
            <Polls />
          </AuthenticatedRoute>
          <AuthenticatedRoute exact path="/profile/polls/create">
            <CreatePoll />
          </AuthenticatedRoute>
          <AuthenticatedRoute exact path="/session/:id">
            <Polling />
          </AuthenticatedRoute>

          {/* Trivia*/}
          {/* <AuthenticatedRoute exact path="/profile/trivia-admin">
            <TriviaAdmin />
          </AuthenticatedRoute>
          <AuthenticatedRoute exact path="/profile/trivia-admin/edit-quiz">
            <EditQuiz />
          </AuthenticatedRoute>
          <AuthenticatedRoute exact path="/profile/trivia-admin/edit-quiz/edit-question">
            <EditQuestions />
          </AuthenticatedRoute>
          <AuthenticatedRoute exact path="/profile/trivia-admin/run-quiz">
            <RunQuiz />
          </AuthenticatedRoute>
          <Route exact path="/session/trivia">
            <Game />
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
