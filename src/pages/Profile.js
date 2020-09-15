import React from 'react'
import { Link } from 'gatsby'
import { getCurrentUser } from '../utils/auth'
import Sidenav from '../components/Sidenav'

const Profile = () => {
  const user = getCurrentUser()
  console.log('user:', user)
  return (
    <div className="wrapper">
        <div className="navbar sidebar">
            <Sidenav/>
        </div>
        <div className="main-content">  
          <div className="profile">
            <h1>Profile Details</h1>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Bank Name: {user.given_name}</p>
            <p>Bank Title/Role: {user.nickname}</p>
            <p>City: {user.address}</p>
            <p>State: {user.locale}</p>
            <p>Seminar Dates: {user.middle_name}</p>
            <p>ID: {user.sub}</p>
          </div> 
        </div>
    </div>
  )
}

export default Profile
