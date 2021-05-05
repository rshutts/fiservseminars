import React, { Fragment } from "react";
import Sidenav from "../containers/SideNav";
import ForgotPassword from "../containers/Profile/ForgotPassword";
import { Header  } from 'semantic-ui-react'


const PasswordForgot = () => (
  <div className="main-content pwreset-content">
    <div className="pwreset-container">
      <Header as='h2' className="header page-title pwreset">
        <i className='fa fa-fw fa-users' style={{ fontSize: '1.5em', margin: '5px 10px 5px 5px' }}/>Forgot Password
      </Header>
      <div className="pwreset-section">
        <ForgotPassword/>  
      </div>
    </div>
  </div>
);
  
export default PasswordForgot;