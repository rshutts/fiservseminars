import React, { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

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

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <div className='mobile-nav'>
      <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar></Collapse>
          <Nav className='d-none d-md-block' navbar></Nav>
            {isAuthenticated && (
              <>
                <NavItem>
                  <i className='fa fa-fw fa-home' style={{ fontSize: '1.75em' }} />
                <RouterNavLink
                    to='/'
                    activeClassName='router-link-exact-active'
                  >
                    Home
                  </RouterNavLink>
                </NavItem>
                <NavItem>
                <i className='fa fa-fw fa-calendar' style={{ fontSize: '1.75em' }} />
                  <a
                    className='router-link'
                    href='https://fiservseminars-media.s3.amazonaws.com/2020_Education+Seminar_Premier_Overview+and+Agenda.pdf'
                    target='_blank'
                    rel="noopener noreferrer"
                  >
                    Agenda
                  </a>
                </NavItem>
                <NavItem>
                  <i className='fa fa-fw fa-users' style={{ fontSize: '1.75em' }} />
                  <RouterNavLink
                      className='router-link'
                      to={`/meetings?name=${user.nickname}&room=Fiserv`}
                    >
                      Learning Sessions
                  </RouterNavLink>
                  <RouterNavLink
                    to='#'
                    id='qsLogoutBtn'
                    onClick={() => logoutWithRedirect()}
                  >
                    Log out
                  </RouterNavLink>
                </NavItem>
              </>
            )}  
    </div>
  
  );
};

export default MobileNav