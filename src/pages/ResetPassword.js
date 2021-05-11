import React, { Fragment } from "react";
import Sidenav from "../containers/SideNav";
import ResetPassword from "../containers/Profile/ResetPassword";
import { Header  } from 'semantic-ui-react'


const PasswordReset = () => (
  <div className="main-content-pwreset">
    <ResetPassword/>  
  </div>
);
  
export default PasswordReset;