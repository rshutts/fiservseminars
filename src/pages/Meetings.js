import React, { Fragment, useState } from 'react';
import Sidenav from "../containers/SideNav";
import Chat from "../containers/Chat"
/* import Chat from '../components/Chat/Chat'; */
import { Auth } from "aws-amplify";
/* import Loading from "../components/Loading"; */
/* import Notes from '../components/Notes' */
import { Header  } from 'semantic-ui-react'
import VideoPlayer from '../containers/VideoPlayer';

import config from '../aws-config';

const Meetings = () => {
  
  return (
      <div className="next-steps my-5 content-wrapper">
        <Sidenav />
        <div className="main-content">
          <div className="meetings-container">
            <Header as='h2' className="header page-title meetings">
              <i className='fa fa-fw fa-users' style={{ fontSize: '1.5em', margin: '5px 10px 5px 5px' }}/>Learning Sessions
            </Header>
            <div className="meetings-sections">
              <section className='left meetings'>
                <div className='video-player'>
                  <VideoPlayer videoStream={config.PLAYBACK_URL}/>
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
      </div>
  )
  
}

export default Meetings
