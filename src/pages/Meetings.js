import React from 'react'
import SectionLeft from '../components/SectionLeft'
import SectionBottom from '../components/SectionBottom'
import Sidenav from '../components/Sidenav'

const Meetings = () => {
  return (
    <div className="wrapper">
        <div className="navbar sidebar">
            <Sidenav/>
        </div>
        <div className="main-content meetings">   
            <SectionLeft/>    
            <SectionBottom/>
        </div>
    </div>
  )
}

export default Meetings