import React from "react";
import Sidenav from "../containers/SideNav";
import ProfileCards from "../containers/Profile/ProfileCards"


const Profile = () => {
  return (
    <div className="next-steps my-5 content-wrapper">
        <Sidenav />
      <div className="main-content-profile">
        <ProfileCards /> 
      </div>     
    </div>
    
  );
};

export default Profile

