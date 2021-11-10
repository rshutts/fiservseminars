import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { useHistory, Link } from "react-router-dom";
import Error from "../components/Error";
import { Menu, Segment, Sidebar } from 'semantic-ui-react'

import { FaHome, FaCalendarAlt, FaUsers, FaCogs, FaNewspaper, FaVideo, FaQuestionCircle, FaUser, FaRegAddressBook } from 'react-icons/fa';

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
    const user = await Auth.currentAuthenticatedUser()
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.error(err);
    });
    try {
      await Auth.currentSession();
      const user = await Auth.currentAuthenticatedUser()
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
      <Sidebar.Pushable className='custom-sidenav' as={Segment}>
        {isAuthenticated ? (
            <Sidebar
            as={Menu}
            animation='overlay'
            inverted
            vertical
            visible
            width='thin'
          >
            <Link className='sidebar-nav-link' to="/">
              <Menu.Item>
                <FaHome/>
                  Home 
              </Menu.Item>
            </Link>
            <a
              className='sidebar-nav-link'
              href='https://d2vqeoj3f0fgvp.cloudfront.net/Fall/2021/2021_Education_Seminar_Premier-Overview_and_Agenda.pdf'
              target='_blank'
              rel="noopener noreferrer"
            >
              <Menu.Item>
                <FaCalendarAlt/>
                  Agenda 
              </Menu.Item>
            </a>
            <Link className="sidebar-nav-link" to="/faq">
              <Menu.Item>
                <FaQuestionCircle/>
                  FAQ 
              </Menu.Item>
            </Link>
            <Link className="sidebar-nav-link" to="/speaker-bios">
              <Menu.Item>
                <FaRegAddressBook/>
                  Speaker Bios 
              </Menu.Item>
            </Link>
            <Link className='sidebar-nav-link' to={'/archived-sessions'}>
              <Menu.Item>
                <FaUsers/>
                  Learning Sessions
              </Menu.Item>
            </Link>
            <Link className='sidebar-nav-link' to="/resource-center/articles">
              <Menu.Item>
                <FaNewspaper/>
                  Session Collateral
              </Menu.Item>
            </Link>
            <Link className="sidebar-nav-link" to="/profile">
              <Menu.Item>
                <FaUser/>
                  Profile
              </Menu.Item>
            </Link>
          </Sidebar>
        ) : (
          <Sidebar
            as={Menu}
            icon='labeled'
            inverted
            vertical
            visible
            width='thin'
          >
            <Link className='sidebar-nav-link' to="/">
              <Menu.Item>
                <FaHome/>
                  Home 
              </Menu.Item>
            </Link>
            <a
              className='sidebar-nav-link'
              href='https://d2vqeoj3f0fgvp.cloudfront.net/Fall/2021/2021_Education_Seminar_Premier-Overview_and_Agenda.pdf'
              target='_blank'
              rel="noopener noreferrer"
            >
              <Menu.Item>
                <FaCalendarAlt/>
                  Agenda 
              </Menu.Item>
            </a>
            <Link className="sidebar-nav-link" to="/faq">
              <Menu.Item>
                <FaQuestionCircle/>
                  FAQ 
              </Menu.Item>
            </Link>
          </Sidebar>
        )}
      <Sidebar.Pusher>
        <Segment basic/>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
    )
  );
}

export default Sidenav;
