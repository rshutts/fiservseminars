import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Auth, Storage } from 'aws-amplify';
import { AppContext } from "../libs/contextLib";

/*Bootstrap*/
import {
  Container,
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
import { onError } from "../libs/errorLib";

// fontawesome
import { FaUser, FaSignOutAlt } from 'react-icons/fa';

import config from '../aws-config';

const MainNavbar = () => {

    /* const [isAuthenticating, setIsAuthenticating] = useState(true); */
    const { isAuthenticated } = config();

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    /* const toggle = () => setIsOpen(!isOpen); */

    const [image, setImage] = useState([]);
    const [profile, setProfile] = useState({
    username: ""
    });

    const handleLogout = () =>
    logout({
      returnTo: window.location.origin,
    });

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
        onError(e);
        }
    }
    setIsAuthenticating(false);
    }

    /* async function handleLogout() {
        await Auth.signOut();
        history.push("/login");
    } */

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
        <div className='nav-container'>
            <Navbar light expand='md'>
            <Container>
                <a href='/'>
                    <NavbarBrand className='logo' />
                </a>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className='d-none d-md-block' navbar>
                    {!isAuthenticated && (
                        <div>
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
                    </div>
                    )}
                    {isAuthenticated && (
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
                                    to='/profile'
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
                    )}
                </Nav>
                </Collapse>
            </Container>
      </Navbar>
    </div>
  );
}
export default MainNavbar; 