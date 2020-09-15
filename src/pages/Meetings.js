import React from 'react'
import SectionLeft from '../components/SectionLeft'
import SectionRight from '../components/SectionRight'
import Sidenav from '../components/Sidenav'

const Meetings = () => {
  return (
    <div className="wrapper">
        <div className="navbar sidebar">
            <Sidenav/>
        </div>
        <div className="main-content">   
            <SectionLeft/>    
            <SectionRight/>
        </div>
    </div>
  )
}

export default Meetings