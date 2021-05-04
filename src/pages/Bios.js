import React, { Fragment } from "react";
import Sidenav from "../containers/SideNav";
import SpeakerBios from "../containers/Speakers/SpeakerBios";
import { Header  } from 'semantic-ui-react'


const Bios = () => (
  <div className="main-content bio-content">
    <div className="bio-container">
      <Header as='h2' className="header page-title bio">
        <i className='fa fa-fw fa-users' style={{ fontSize: '1.5em', margin: '5px 10px 5px 5px' }}/>Speaker Bios
      </Header>
      <div className="bio-sections">
        <SpeakerBios/>  
      </div>
    </div>
  </div>
);
  
export default Bios;