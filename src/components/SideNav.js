import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { useHistory, Link } from "react-router-dom";
import Error from "../components/Error";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';

import { FaHome, FaCalendarAlt, FaUsers, FaCogs, FaNewspaper, FaVideo, FaQuestionCircle, FaUser, FaRegAddressBook } from 'react-icons/fa';
/* import 'react-pro-sidebar/dist/css/styles.css'; */


/* import SideNav, { NavItem, NavIcon } from '@trendmicro/react-sidenav';
import Dropdown, { MenuItem } from '@trendmicro/react-dropdown';
import { useAuth0 } from '@auth0/auth0-react';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-dropdown/dist/react-dropdown.css';
import { Link } from 'react-router-dom';
import Amplify, { Auth } from "aws-amplify";
import config from "../aws-config";
Amplify.configure(config); */

function Sidenav() {
  const history = useHistory();
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [profile, setProfile] = useState({
    username: ""
  });

  useEffect(() => {
    onLoad();
  }, []);


  async function onLoad() {
    const user = await Auth.currentUserInfo()
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.error(err);
    });
    try {
      await Auth.currentSession();
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

  return (
    !isAuthenticating && (
      <nav className="custom-sidenav">
        {isAuthenticated ? (
            <ProSidebar>
              <Menu iconShape="square">
                <Link
                  className='sidebar-nav-link'
                  to="/"
                >
                  <MenuItem icon={<FaHome/>}>
                    Home 
                  </MenuItem>
                </Link>
                <a
                  className='sidebar-nav-link'
                  href='https://seminar-media.s3.amazonaws.com/Spring/2021/2021-Knowledge-Exchange-Precision-Overview-and-Agenda.pdf'
                  target='_blank'
                  rel="noopener noreferrer"
                >
                  <MenuItem icon={<FaCalendarAlt/>}>
                    Agenda
                  </MenuItem>
                </a>
                <Link className="sidebar-nav-link" to="/faq">
                  <MenuItem icon={<FaQuestionCircle/>}>
                      FAQ
                  </MenuItem>
                </Link>
                <Link className="sidebar-nav-link" to="/speaker-bios">
                  <MenuItem icon={<FaRegAddressBook/>}>
                      Speaker Bios
                  </MenuItem>
                </Link>
                <Link
                    className='sidebar-nav-link'
                    /* to={'/session?room=Fiserv'} */
                    to={'/archived-sessions'}
                  >
                  <MenuItem icon={<FaUsers/>}>
                    Learning Sessions
                  </MenuItem> 
                </Link>
                <SubMenu title="Resource Center" icon={<FaCogs/>}
                >{/* <span class="pro-arrow-wrapper"><span class="pro-arrow"></span></span> */}
                  <Link
                    className='sidebar-nav-link'
                    to="/resource-center/articles"
                  >
                    <MenuItem icon={<FaNewspaper/>}>Session Collateral</MenuItem>
                  </Link>
                </SubMenu>
                <Link className="sidebar-nav-link" to="/profile">
                  <MenuItem icon={<FaUser/>}>
                      Profile
                  </MenuItem>
                </Link>
              </Menu>
            </ProSidebar>
        ) : (
            <ProSidebar>
              <Menu>
                <Link
                  className='sidebar-nav-link'
                  to="/"
                >
                  <MenuItem icon={<FaHome/>}>
                    Home 
                  </MenuItem>
                </Link>
                <a
                  className='sidebar-nav-link'
                  href='https://seminar-media.s3.amazonaws.com/Spring/2021/2021-Knowledge-Exchange-Precision-Overview-and-Agenda.pdf'
                  target='_blank'
                  rel="noopener noreferrer"
                >
                  <MenuItem icon={<FaCalendarAlt/>}>
                    Agenda
                  </MenuItem>
                </a>
                <Link className="sidebar-nav-link" to="/faq">
                  <MenuItem icon={<FaQuestionCircle/>}>
                      FAQ
                  </MenuItem>
                </Link>
              </Menu>
            </ProSidebar>
        )}
      </nav> 
    )
  );
}

export default Sidenav;