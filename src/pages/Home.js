import React, { Fragment } from "react";
import Sidenav from "../components/SideNav";
import Left from "../components/Left";
import Right from "../components/Right";
import RightMobile from "../components/RightMobile";

const Home = () => (
  <Fragment>
    <div className="next-steps my-5 content-wrapper">
      <Sidenav />
      <div className="main-content">
        <Left />
        <Right />
        <RightMobile />
      </div>
    </div>
  </Fragment>
);

export default Home;
