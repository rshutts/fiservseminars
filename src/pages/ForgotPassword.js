import React, { Fragment } from "react";
import Sidenav from "../components/SideNav";
import ForgotPassword from "../containers/Auth/ForgotPassword";
import { Header  } from 'semantic-ui-react'


const PasswordForgot = () => (
  <div className="main-content">
      <ForgotPassword/>  
  </div>
);
  
export default PasswordForgot;