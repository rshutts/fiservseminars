import React from 'react'
import SectionLeft from '../Utils/SectionLeft'
import SectionBottom from '../Utils/SectionBottom'
import Sidenav from '../Nav/Sidenav'

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