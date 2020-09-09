import React from 'react'
import 'modern-normalize/modern-normalize.css'
import { Nav, UserNav } from '../Nav'
import Footer from '../Utils/Footer'
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
    </div>
  )
}
