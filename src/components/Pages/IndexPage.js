import React from 'react'
import SectionLeft from '../Utils/IndexSectionLeft'
import SectionRight from '../Utils/IndexSectionRight'
import Sidenav from '../Nav/Sidenav'

const IndexPage = () => {
  return (
    <div className="wrapper">
      <div className="navbar sidebar">
        <Sidenav/>
      </div>
      <div className="main-content">
        <section className="left">
          <SectionLeft/>
        </section> 
        <section className="right">
          <SectionRight/>
        </section> 
      </div>
      
    </div>
  )
}

export default IndexPage
