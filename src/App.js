import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Auth } from "aws-amplify";

/*Bootstrap*/
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);
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
              <a href='/'>
                <NavbarBrand className='logo' />
              </a>
              <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar className="justify-content-end">
                  <Nav className='d-none d-md-block' navbar>
                  {isAuthenticated ? (
                    <>
                      <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret id='profileDropDown'>
                        <img
                          src='https://s3.us-east-2.amazonaws.com/fiservseminars-media.com/favicon.ico'
                          alt='Profile'
                          className='nav-user-profile rounded-circle'
                          width='50'
                        />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>User</DropdownItem>
                        <DropdownItem
                          to='/profile'
                          className='dropdown-profile'
                          activeClassName='router-link-exact-active'
                        >
                        Profile
                        </DropdownItem>
                        <DropdownItem
                          onClick={handleLogout}
                          id='loginBtn'
                          color='primary'
                          className='btn btn-primary'
                        >
                          Log out
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </>
                ) : (
                  <>
                    <NavItem>
                      <Button
                        id='signupBtn'
                        color='primary'
                        className='btn-margin'
                      >
                        Signup
                      </Button>
                    </NavItem>
                    <NavItem>
                      <Button
                        id='loginBtn'
                        color='primary'
                        className='btn-margin'
                        to="/login"
                      >
                        Login
                      </Button>
                    </NavItem>
                  </>
                )}
                </Nav>
            </Collapse>
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
