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
import { useMediaQuery } from 'react-responsive'

/*Libs*/
import { AppContext } from "./libs/contextLib";
import Error from "./components/Error";

/*Component Items*/
import Routes from "./Routes";
import Footer from './components/Footer'
import ScrollingTicker from './components/Ticker'
import ErrorBoundary from "./components/ErrorBoundary";
import Sidenav from "./components/SideNav";
import ProfileImage from "./containers/Profile/components/profileImage"

/*CSS*/
import "./App.css";

/*fontawesome*/
import { FaHome, FaCalendarAlt, FaUser, FaUsers, FaNewspaper, FaQuestionCircle, FaRegAddressBook, FaSignOutAlt, FaCaretDown } from 'react-icons/fa';

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
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  const toggle = () => setDropdownOpen(!dropdownOpen);
  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
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
        Error(e);
      }
    }
    setIsAuthenticating(false);
  }
  
  async function handleLogout() {
    try {
      await Auth.signOut();
      userHasAuthenticated(false);
      history.go("/login");
    } catch (e) {
      Error(e);
    }
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
                        <ProfileImage/>
                        <FaCaretDown/>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>{profile.username}</DropdownItem>
                        {isMobile && (
                            <>
                              <DropdownItem
                                href='/'
                                className='dropdown-profile'
                                activeClassName='router-link-exact-active'
                              ><FaHome/>&nbsp;
                                Home
                              </DropdownItem>
                              <DropdownItem
                                href='https://seminar-media.s3.amazonaws.com/Spring/2021/2021-Knowledge-Exchange-Precision-Overview-and-Agenda.pdf'
                                target='_blank'
                                className='dropdown-profile'
                                activeClassName='router-link-exact-active'
                              ><FaCalendarAlt/>&nbsp;
                                Agenda
                              </DropdownItem>
                              <DropdownItem
                                href='/faq'
                                className='dropdown-profile'
                                activeClassName='router-link-exact-active'
                              ><FaQuestionCircle/>&nbsp;
                                FAQ
                              </DropdownItem>
                              <DropdownItem
                                href='/speaker-bios'
                                className='dropdown-profile'
                                activeClassName='router-link-exact-active'
                              ><FaRegAddressBook/>&nbsp;
                                Speaker Bios
                              </DropdownItem>
                              <DropdownItem
                                /* to={'/session?room=Fiserv'} */
                                href='/archived-sessions'

                                className='dropdown-profile'
                                activeClassName='router-link-exact-active'
                              ><FaUsers/>&nbsp;
                                Learning Sessions
                              </DropdownItem>
                              <DropdownItem
                                to={'/session?room=Fiserv'}
                                /* href='/resource-center/articles' */
                                className='dropdown-profile'
                                activeClassName='router-link-exact-active'
                              ><FaNewspaper/>&nbsp;
                                Session Collateral
                              </DropdownItem>
                            </>
                          )
                        }
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