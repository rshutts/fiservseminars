import React, { Fragment, useState, useEffect } from 'react';
import Chat from "../containers/Chat";
import { Auth } from "aws-amplify";
/* import Loading from "../components/Loading"; */
/* import Notes from '../components/Notes' */
import { Header  } from 'semantic-ui-react'
import VideoPlayer from '../containers/VideoPlayer';
import Iframe from 'react-iframe'

import config from '../aws-config';

const Meetings = () => {

  return (
    <div className="main-content">
      <div className="meetings-container">
        <Header as='h2' className="header page-title meetings">
          <i className='fa fa-fw fa-users' style={{ fontSize: '1.5em', margin: '5px 10px 5px 5px' }}/>Learning Sessions
        </Header>
        <div className="meetings-sections">
          <section className='left meetings'>
            <div className='video-player'>
              <VideoPlayer videoStream={config.PLAYBACK_URL}/>
              <Iframe url="http://localhost:3001/"
                width="100%"
                height="450px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
              />
            </div>
          </section>
          <section className="right meetings">
            <div className='chat'>
              <Chat/>   
            </div>
          </section>
        </div>       
      </div> 
    </div>
  )
  
}

export default Meetings
