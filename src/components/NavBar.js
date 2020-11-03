import React, { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import MobileNav from '../components/MobileNav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import { useAuth0 } from '@auth0/auth0-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <div className='nav-container'>
      <Navbar color='light' light expand='md'>
        <nav className='navbar navbar-expand announcement'>
          <p>
            If you have any questions regarding the event, email us at <a href='mailto:educationseminars@fiserv.com'>educationseminars@fiserv.com</a>
          </p>
        </nav>
        <Container>
          <a href='/'>
            <NavbarBrand className='logo' />
          </a>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='d-none d-md-block' navbar>
              {!isAuthenticated && (
                <NavItem>
                  <Button
                    id='qsLoginBtn'
                    color='primary'
                    className='btn-margin'
                    onClick={() => loginWithRedirect()}
                  >
                    Log in
                  </Button>
                </NavItem>
              )}
              {isAuthenticated && (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret id='profileDropDown'>
                    <img
                      src={user.picture}
                      alt='Profile'
                      className='nav-user-profile rounded-circle'
                      width='50'
                    />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>{user.name}</DropdownItem>
                    <DropdownItem
                      tag={RouterNavLink}
                      to='/profile'
                      className='dropdown-profile'
                      activeClassName='router-link-exact-active'
                    >
                      <FontAwesomeIcon icon='user' className='mr-3' /> Profile
                    </DropdownItem>
                    <DropdownItem
                      id='qsLogoutBtn'
                      onClick={() => logoutWithRedirect()}
                    >
                      <FontAwesomeIcon icon='power-off' className='mr-3' /> Log
                      out
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
            </Nav>
            {!isAuthenticated && (
              <Nav className='d-md-none' navbar>
                <NavItem>
                  <Button
                    id='qsLoginBtn'
                    color='primary'
                    block
                    onClick={() => loginWithRedirect({})}
                  >
                    Log in
                  </Button>
                </NavItem>
              </Nav>
            )}
            {isAuthenticated && (
              <Nav
                className='d-md-none justify-content-between mobile-nav'
                navbar
                style={{ minHeight: 170 }}
              >
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret id='profileDropDown'>
                    <img
                      src={user.picture}
                      alt='Profile'
                      className='nav-user-profile rounded-circle'
                      width='50'
                    />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>{user.name}</DropdownItem>
                    <DropdownItem
                      tag={RouterNavLink}
                      to='/profile'
                      className='dropdown-profile'
                      activeClassName='router-link-exact-active'
                    >
                    <i className='fa fa-fw fa-user' style={{ fontSize: '1.75em' }} />Profile
                    </DropdownItem>
                    <DropdownItem
                      tag={RouterNavLink}
                      to='/'
                      className='dropdown-profile'
                      activeClassName='router-link-exact-active'
                    >
                    <i className='fa fa-fw fa-home' style={{ fontSize: '1.75em' }} />Home
                    </DropdownItem>
                    <a
                      className='dropdown-profile dropdown-item'
                      activeClassName='router-link-exact-active'
                      href='https://fiservseminars-media.s3.amazonaws.com/2020_Education+Seminar_Premier_Overview+and+Agenda.pdf'
                      target='_blank'
                      rel="noopener noreferrer"
                    >
                    <i className='fa fa-fw fa-calendar' style={{ fontSize: '1.75em' }} />Agenda
                    </a>
                    <DropdownItem
                      tag={RouterNavLink}
                      to={`/meetings?name=${user.nickname}&room=Fiserv`}
                      className='dropdown-profile'
                      activeClassName='router-link-exact-active'
                    >
                    <i className='fa fa-fw fa-users' style={{ fontSize: '1.75em' }} />Learning Sessions
                    </DropdownItem>
                    <UncontrolledDropdown className="mobile-subnav">
                      <DropdownToggle className="mobile-subnav-toggle">
                        <i className='fa fa-fw fa-cogs' style={{ fontSize: '1.75em' }}/>
                        Resource Center
                      </DropdownToggle>
                      <DropdownMenu className="mobile-subnav-menu">
                        <DropdownItem
                         tag={RouterNavLink}
                         to='/resource-center/articles'
                         className='dropdown-profile'
                         activeClassName='router-link-exact-active'
                        >
                        <i className='fa fa-fw fa-newspaper' style={{ fontSize: '1.5em', margin: '5px' }}/>Session Collateral
                        </DropdownItem>
                        <DropdownItem
                          tag={RouterNavLink}
                          to='/resource-center/articles'
                          className='dropdown-profile'
                          activeClassName='router-link-exact-active'
                          >
                          <i className='fa fa-fw fa-video' style={{ fontSize: '1.5em', margin: '5px' }}/>OnDemand
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <DropdownItem
                      id='qsLogoutBtn'
                      onClick={() => logoutWithRedirect()}
                    >
                       <i className='fa fa-fw fa-sign-out-alt' style={{ fontSize: '1.75em' }} /> Log
                      out
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            )}
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
