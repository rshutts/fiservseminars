import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Auth } from "aws-amplify";

/*Bootstrap*/
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

/*Libs*/
import { AppContext } from "./libs/contextLib";
import { onError } from "./libs/errorLib";

/*Component Items*/
import Routes from "./Routes";
import Footer from './containers/Footer'
import ScrollingTicker from './components/Ticker'
import ErrorBoundary from "./components/ErrorBoundary";

/*CSS*/
import "./App.css";

// fontawesome
import initFontAwesome from './utils/initFontAwesome';

initFontAwesome();

function App() {
  const history = useHistory();
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  
  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    const user = await Auth.currentUserInfo()
    .then(res => {
    })
    .catch(err => {
      console.error(err);
    });
    try {
      await Auth.currentAuthenticatedUser();
      userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        onError(e);
      }
    }
    setIsAuthenticating(false);
  }

  async function handleLogout() {
    await Auth.signOut();

    userHasAuthenticated(false);

    history.push("/login");
  }
  
  return (
    !isAuthenticating && (
      <div className="d-flex flex-column h-100" id="app">
        <div className='nav-container'>
          <Navbar color='light' light expand='md'>
            <nav className='navbar navbar-expand announcement'>
              <ScrollingTicker />
            </nav>
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand className="logo" />
            </LinkContainer>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav activeKey={window.location.pathname}>
                {isAuthenticated ? (
                  <>
                    <LinkContainer to="/profile">
                      <Button
                        id='signupBtn'
                        color='primary'
                        className='btn-margin'
                      >
                        Profile
                      </Button>
                    </LinkContainer>
                      <Nav.Link 
                        onClick={handleLogout}
                        id='loginBtn'
                        color='primary'
                        className='btn btn-primary'
                      >
                        Logout
                      </Nav.Link>
                  </>
                ) : (
                  <>
                    <LinkContainer to="/signup">
                      <Button
                        id='signupBtn'
                        color='primary'
                        className='btn-margin'
                      >
                        Signup
                      </Button>
                    </LinkContainer>
                    <LinkContainer to="/login">
                      <Button
                        id='loginBtn'
                        color='primary'
                        className='btn-margin'
                      >
                        Login
                      </Button>
                    </LinkContainer>
                  </>
                )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <ErrorBoundary>
          <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
            <Routes />
            <Footer />
          </AppContext.Provider>
        </ErrorBoundary>
        
      </div>
    )
  );
}

export default App;
