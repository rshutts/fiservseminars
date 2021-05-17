import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { useHistory, Link } from "react-router-dom";
import Error from "./Error";

import { Header, Icon, Image, Menu, Segment, Sidebar, Dropdown } from 'semantic-ui-react'
import { FaHome, FaCalendarAlt, FaUsers, FaCogs, FaNewspaper, FaVideo, FaQuestionCircle, FaUser, FaRegAddressBook } from 'react-icons/fa';

import "./Sidenav.css";

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
          <Sidebar.Pushable as={Segment}>
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
              href='https://seminar-media.s3.amazonaws.com/Spring/2021/2021-Knowledge-Exchange-Precision-Overview-and-Agenda.pdf'
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
            <Link className="sidebar-nav-link" to={'/session?room=Fiserv'}>
              <Menu.Item>
                <FaUsers/>
                Learning Sessions
              </Menu.Item>
            </Link>
            <Dropdown text='Messages' pointing='left' className='link item'>
              <Dropdown.Menu>
                <Dropdown.Item>Inbox</Dropdown.Item>
                <Dropdown.Item>Starred</Dropdown.Item>
                <Dropdown.Item>Sent Mail</Dropdown.Item>
                <Dropdown.Item>Drafts (143)</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Spam (1009)</Dropdown.Item>
                <Dropdown.Item>Trash</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Sidebar>
      
          {/* <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'>Application Content</Header>
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Segment>
          </Sidebar.Pusher> */}
        </Sidebar.Pushable>
        ) : (
          <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            icon='labeled'
            inverted
            vertical
            visible
            width='thin'
          >
            <Menu.Item as='a'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>
      
          {/* <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'>Application Content</Header>
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Segment>
          </Sidebar.Pusher> */}
        </Sidebar.Pushable>
        )}
      </nav> 
    )
  );
}

export default Sidenav;