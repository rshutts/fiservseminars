import React, { Fragment } from "react";
import Sidenav from "../components/SideNav";

const Confirmation = () => (
  <Fragment>
    <div className="next-steps my-5 content-wrapper">
      <Sidenav />
      <div className="main-content">
      <section className='confirmation'>
          <div>
          <h1>Thank you for registering for the Premier Education Seminar!</h1>
            <p class="italic-important">
                We are thrilled you can join us for our three day virtual seminar.
            </p>
            <p>
                Please watch out for a registration confirmation email. Once you receive the email, please click on the link to verify your registration information.
            </p>
            <p class="spam-note">
                ***NOTE: If you haven't received your confirmation email shortly, please check your Junk/Spam folders. Please also have your IT department whitelist the domain <b>fiservseminars.com</b>.***
            </p>
          </div>
        </section>
      </div>
    </div>
  </Fragment>
);

export default Confirmation;