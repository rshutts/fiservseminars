import React from 'react';
import { Link } from "react-router-dom";
import Preloader from "../components/Splash/Preloader/Preloader";
import Timer from "../components/Splash/Countdown/Timer";

import { Menu, Segment, Sidebar } from 'semantic-ui-react'

import "../components/Splash/index.css"

import { FaHome, FaCalendarAlt, FaUsers, FaCogs, FaNewspaper, FaVideo, FaQuestionCircle, FaUser, FaRegAddressBook } from 'react-icons/fa';

export default function SplashPage() {
    return (
        <div className="App">
          <div className="container">
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
            </Sidebar>
            <h1>
              Website
              <br />
              Coming Soon
            </h1>
            <Timer />
            <Preloader />
          </div>
        </div>
    );
}