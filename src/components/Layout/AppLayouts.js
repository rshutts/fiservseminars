import React from 'react'
import Nav from '../Nav/Nav'
import UserNav from '../Nav/UserNav'
import Footer from '../Utils/Footer'
import '../../scss/styles.scss'
import '../../App.css'

export function Layout({ children, isUserNav }) {
  return (
    <div>
      {isUserNav ? <UserNav /> : <Nav />}
      <div>{children}</div>
      <Footer/>
    </div>
  )
}

export function AppContent({ children }) {
  return (
    <div className="app-content-100">
      <div className="container" style={{ marginTop: 40 }}>{children}</div>
      <Footer/>
    </div>
  )
}
