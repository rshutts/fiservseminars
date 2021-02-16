import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { useHistory, Link } from "react-router-dom";
import { onError } from "../libs/errorLib";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaHome, FaCalendarAlt, FaUsers, FaCogs, FaNewspaper, FaVideo } from 'react-icons/fa';
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
      userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        onError(e);
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
                  href='https://fiservseminars-media.s3.amazonaws.com/2020_Education+Seminar_Premier_Overview+and+Agenda.pdf'
                  target='_blank'
                  rel="noopener noreferrer"
                >
                  <MenuItem icon={<FaCalendarAlt/>}>
                    Agenda
                  </MenuItem>
                </a>
                <Link
                    className='sidebar-nav-link'
                    to={'/meetings?room=Fiserv'}
                    /* to={`/meetings?name=${user.attributes.email}&room=Fiserv`} */
                  >
                  <MenuItem icon={<FaUsers/>}>
                    Learning Sessions
                  </MenuItem> 
                </Link>
                <SubMenu title="Resource Center" icon={<FaCogs/>}
                >
                  <MenuItem icon={<FaNewspaper/>}>Session Collateral</MenuItem>
                  <MenuItem icon={<FaVideo/>}>OnDemand</MenuItem>
                </SubMenu>
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
              </Menu>
            </ProSidebar>
        )}
      </nav> 
    )
  );
}

export default Sidenav;
