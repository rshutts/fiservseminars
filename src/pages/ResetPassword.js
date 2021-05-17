import React, { Fragment } from "react";
import Sidenav from "../components/SideNav";
import ResetPassword from "../containers/Auth/ResetPassword";
import { Header  } from 'semantic-ui-react'


const PasswordReset = () => (
  <div className="main-content">
    <div className="profile-container">
        <Header as='h2' className="header page-title meetings">
          <i className='fa fa-fw fa-users' style={{ fontSize: '1.5em', margin: '5px 10px 5px 5px' }}/>User Profile
        </Header>
      <div>
        <ResetPassword/>  
      </div>
      </div>  
    </div> 
);
  
export default PasswordReset;