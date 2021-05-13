import React from "react";
import { Header  } from 'semantic-ui-react'
import ProfileCards from "../containers/Profile/ProfileCards"


const Profile = () => {
  return (
    <div className="main-content">
      <div className="profile-container">
        <Header as='h2' className="header page-title meetings">
          <i className='fa fa-fw fa-users' style={{ fontSize: '1.5em', margin: '5px 10px 5px 5px' }}/>User Profile
        </Header>
      <div>
        <ProfileCards /> 
      </div>
      </div>  
    </div>    
  );
};

export default Profile

