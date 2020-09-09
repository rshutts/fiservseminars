import React from 'react'
import SectionLeft from '../Utils/SectionLeft'
import SectionRight from '../Utils/SectionRight'
import Sidenav from '../Nav/Sidenav'

const IndexPage = () => {
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

export default IndexPage