import React, { useState } from 'react';
import Chat from "../containers/Chat";
import { useLocation, useHistory } from "react-router-dom";
import { Header, Button  } from 'semantic-ui-react'
import VideoPlayer from '../containers/VideoPlayer';
import Iframe from 'react-iframe'

import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoIosGitNetwork } from 'react-icons/io';


import awsconfig from '../aws-config';

const Meetings = () => {
  const history = useHistory();
  const location = useLocation();

  const onDownloadMorning = () => {
    const link = document.createElement("a");
    link.download = `morning-session.ics`;
    link.href =
      "https://d2vqeoj3f0fgvp.cloudfront.net/Fall/2021/Premier/Networking-+Premier+Fall+Education+Seminar-+Morning+Session.ics";
    link.click();
  };

  const onDownloadAfternoon = () => {
    const link = document.createElement("a");
    link.download = `afternoon-session.ics`;
    link.href =
      "https://d2vqeoj3f0fgvp.cloudfront.net/Fall/2021/Premier/Networking-+Premier+Fall+Education+Seminar-+Afternoon+Session.ics";
    link.click();
  };
  return (
    <div className="main-content">
      <div className="meetings-container">
        <Header as='h2' className="header page-title meetings">
          <i className='fa fa-fw fa-users' style={{ fontSize: '1.5em', margin: '5px 10px 5px 5px' }}/>Learning Sessions
        </Header>
        <div className="meetings-sections">
          <section className='left meetings'>
            <div className='video-player'>
              <VideoPlayer/>
              <div className="iframe-embed-wrapper">
                <iframe 
                  src="https://premier-polling.fiservseminars.com/"
                  width="100%"
                  height="700px"
                  id="myId"
                  className="pollsFrame"
                  display="initial"
                  position="relative"
                  loading
                />
              </div>
            </div>
          </section>
          <section className="right meetings">
            <div className='chat'>
              <Chat/>   
            </div>
            <div className="networking-calendar-buttons">
              <h3 style={{ color: '#ff6600' }}>
                <IoIosGitNetwork/> Networking Calendar Invites
              </h3>
              <Button
                color='primary'
                className='btn-margin calendar morning'
                onClick={onDownloadMorning} 
                variant="contained"
              >
                <FaRegCalendarAlt/>&nbsp;Morning Session
              </Button>
              <Button
                color='primary'
                className='btn-margin calendar afternoon'
                onClick={onDownloadAfternoon} 
                variant="contained"
              >
                <FaRegCalendarAlt/>&nbsp;Afternoon Session
              </Button>
            </div>
          </section>
        </div>       
      </div> 
    </div>
  )
  
}

export default Meetings
