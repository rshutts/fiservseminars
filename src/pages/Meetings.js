import React, { useState } from 'react';
import Chat from "../containers/Chat";
import { useLocation, useHistory } from "react-router-dom";
import { Header  } from 'semantic-ui-react'
/* import VideoPlayer from '../containers/VideoPlayer'; */
import VideoJS from '../containers/VideoPlayer';
import Polls from '../containers/Polling/Polls';
import Poll from '../containers/Polling/Poll';
/* import Trivia from '../containers/Trivia/index';
import Game from '../containers/Trivia/game';
import Iframe from 'react-iframe'
import Quiz from '../containers/Quiz/index'; */

import config from '../aws-config';

const Meetings = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <div className="main-content">
      <div className="meetings-container">
        <Header as='h2' className="header page-title meetings">
          <i className='fa fa-fw fa-users' style={{ fontSize: '1.5em', margin: '5px 10px 5px 5px' }}/>Learning Sessions
        </Header>
        <div className="meetings-sections">
          <section className='left meetings'>
            <div className='video-player'>
              <VideoJS/>
            </div>
         { location.pathname === "/session/:id" ?
              <Poll/> :
              <Polls/>
            }
          </section>
          <section className="right meetings">
            <div className='chat'>
              <Chat/>   
            </div>
            {/* <div>
              <Quiz/>
              <Game/>
              <Trivia/>
            </div> */}
          </section>
        </div>       
      </div> 
    </div>
  )
  
}

export default Meetings
