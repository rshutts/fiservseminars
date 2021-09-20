import React, { useState } from 'react';
import Chat from "../containers/Chat";
import { useLocation, useHistory } from "react-router-dom";
import { Header  } from 'semantic-ui-react'
import VideoPlayer from '../containers/VideoPlayer';
import Polls from '../containers/Polling/Polls';
import Poll from '../containers/Polling/Poll';
import Trivia from '../containers/Trivia/index';
import Game from '../containers/Trivia/game';
import Iframe from 'react-iframe'
import Quiz from '../containers/Quiz/index';

import awsconfig from '../aws-config';

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
          {/* <div style={{ textAlign: 'center', width:"75%", margin:"auto", padding:"20px" }}>
            <h3 style={{ fontSize:"18px", paddingBottom:"20px" }}>
              The Learning Sessions will be available starting May 18. Until then, you may explore the agenda for the conference as well a bit more information about our speakers in the Speaker Bios page.
            </h3>
            <h3 style={{ fontSize:"18px", paddingBottom:"20px" }}>
              We look forward to seeing you all at the Spring Executive Knowledge Exchange.
            </h3>
            <h3 style={{ fontSize:"18px" }}>
              Please feel free to download the materials prior to the start of the event next week. Those materials can be found <Link to="/resource-center/articles">here</Link> or by clicking the Resource Center on the left.
            </h3>
          </div> */}
          <section className='left meetings'>
            <div className='video-player'>
              <VideoPlayer/>
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
            <div>
              {/* <Quiz/> */}
              <Game/>
              {/* <Trivia/> */}
            </div>
          </section>
        </div>       
      </div> 
    </div>
  )
  
}

export default Meetings
