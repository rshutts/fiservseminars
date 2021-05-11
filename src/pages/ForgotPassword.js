import React, { Fragment } from "react";
import Sidenav from "../containers/SideNav";
import ForgotPassword from "../containers/Profile/ForgotPassword";
import { Header  } from 'semantic-ui-react'


const PasswordForgot = () => (
  <div className="main-content pwreset-content">
      <ForgotPassword/>  
  </div>
);
  
export default PasswordForgot;