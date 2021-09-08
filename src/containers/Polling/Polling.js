import React, { useState } from 'react';
import Chat from "../../containers/Chat";
import { useHistory } from "react-router-dom";
/* import Loading from "../components/Loading"; */
/* import Notes from '../components/Notes' */
import { Header  } from 'semantic-ui-react'
import VideoPlayer from '../../containers/VideoPlayer';
import Poll from './Poll';
/* import Trivia from '../containers/Trivia/index'; */
import Iframe from 'react-iframe'

import config from '../../aws-config';

const Polling = () => {
  const history = useHistory();


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
              <VideoPlayer videoStream={config.PLAYBACK_URL}/>
            </div>
            <Poll/>
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

export default Polling