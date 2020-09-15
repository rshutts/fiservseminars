import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import Amplify from 'aws-amplify'
import config from '../awsconfig'
import SectionLeft from '../components/SectionLeft'
import SectionRight from '../components/SectionRight'
import Sidenav from '../components/Sidenav'

Amplify.configure(config)

const IndexPage = () => (
  <Layout>
    <div className="wrapper">
      <div className="navbar sidebar">
        <Sidenav/>
      </div>
      <div className="main-content">
        <SectionLeft/>
        <SectionRight/>
      </div>
    </div>
  </Layout>
)

export default IndexPage
