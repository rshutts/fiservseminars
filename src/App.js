import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Auth, Storage } from 'aws-amplify';

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
import Sidenav from "./containers/SideNav";

/*CSS*/
import "./App.css";

// fontawesome
import { FaUser, FaSignOutAlt } from 'react-icons/fa';

function App() {
  const history = useHistory();
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState([]);
  const [profile, setProfile] = useState({
    username: ""
  });

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
      const user = await Auth.currentUserInfo()
      setProfile({
        username: user.username,
      });
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

  let fileInput = React.createRef();

  useEffect(() => {
    onPageRendered();
  }, []);

  const onPageRendered = async () => {
    getProfilePicture();
  };
  
  const getProfilePicture = () => {
    Storage.get(`profile.png`)
      .then(url => {
        var myRequest = new Request(url);
        fetch(myRequest).then(function(response) {
          if (response.status === 200) {
            setImage(url);
          }
        });
      })
      .catch(err => console.log(err));
      
  };
  
  return (
    !isAuthenticating && (
      <div className="d-flex flex-column h-100" id="app">
        <nav className='navbar navbar-expand announcement'>
          <ScrollingTicker />
        </nav>
        <div className='nav-container'>
          <Navbar light expand='md'>
              <a href='/'>
                <NavbarBrand className='logo' />
              </a>
              <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar className="justify-content-end">
                  <Nav className='d-none d-md-block navbar-buttons' navbar>
                  {isAuthenticated ? (
                    <>
                      <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret id='profileDropDown'>
                        <img
                          src={image}
                          alt='Profile'
                          className='nav-user-profile rounded-circle'
                          width='75'
                        />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>{profile.username}</DropdownItem>
                        <DropdownItem
                          href='/profile'
                          className='dropdown-profile'
                          activeClassName='router-link-exact-active'
                        ><FaUser/>&nbsp;
                        Profile
                        </DropdownItem>
                        <DropdownItem
                          onClick={handleLogout}
                          id='logoutBtn'
                          color='primary'
                          className='btn btn-primary'
                        ><FaSignOutAlt/>&nbsp;
                          Log out
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </>
                ) : (
                  <>
                    <NavItem>
                    <NavLink
                        href="/signup" 
                        id='signupBtn'
                        color='primary'
                        className='btn-margin'
                      >
                        Signup
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="/login" 
                        id='loginBtn'
                        color='primary'
                        className='btn-margin'
                      >
                        Login
                      </NavLink>
                    </NavItem>
                  </>
                )}
                </Nav>
            </Collapse>
        </Navbar>
        </div>
        <ErrorBoundary>
          <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
            <div className="next-steps my-5 content-wrapper">
              <Routes />
            </div>
            <Footer />
          </AppContext.Provider>
        </ErrorBoundary>
        
      </div>
    )
  );
}

export default App;
