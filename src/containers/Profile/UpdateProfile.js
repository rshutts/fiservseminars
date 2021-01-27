import React from "react";
import { Auth } from "aws-amplify";
import Sidenav from "../SideNav";

import UpdateEmail from "./components/email";
import UpdateName from "./components/name";

import { Button } from "react-bootstrap";
import { useFormFields } from "../../libs/hooksLib";
import { onError } from "../../libs/errorLib";

export default function UpdateProfile() {

  
  function renderUpdateForm() {
    return (
      <div className="next-steps my-5 content-wrapper">
        <Sidenav />
        <div className="main-content-profile">
            <UpdateEmail />
            {/* <UpdateName /> */}
        </div>
    </div>
    );
  }

  return (
    <div className="UpdateProfile">
      {renderUpdateForm()}
    </div>
  );
}