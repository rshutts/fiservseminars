import React from 'react'
import { Link } from 'gatsby'
import SectionLeft from '../components/SectionLeft'
import SectionRight from '../components/SectionRight'
import Sidenav from '../components/Sidenav'

const Home = () => (
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

export default Home
