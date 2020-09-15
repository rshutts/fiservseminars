import React from 'react'
import SideNav, { NavItem, NavIcon } from '@trendmicro/react-sidenav';
import { Link } from "react-router-dom"

function Sidenav() {
    return (
        <SideNav
            onSelect={(selected) => {
                // Add your code here
            }}
        >
            <SideNav.Nav defaultSelected="home">
                <NavItem>
                    <NavIcon>
                        <Link className="sidebar-nav-link" to="/"><i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />Home</Link>
                    </NavIcon>
                </NavItem>
                <NavItem>
                    <NavIcon>
                        <Link className="sidebar-nav-link" to="/calendar"><i className="fa fa-fw fa-calendar" style={{ fontSize: '1.75em' }} />Calendar</Link>
                    </NavIcon>
                </NavItem>
                <NavItem>
                    <NavIcon>
                        <Link className="sidebar-nav-link" to="/chat"><i className="fa fa-fw fa-comments" style={{ fontSize: '1.75em' }} />Chat</Link>
                    </NavIcon>
                </NavItem>
                <NavItem>
                    <NavIcon>
                        <Link className="sidebar-nav-link" to="/meetings"><i className="fa fa-fw fa-users" style={{ fontSize: '1.75em' }} />Meetings</Link>
                    </NavIcon>
                </NavItem>
                <NavItem>
                    <NavIcon>
                        <Link className="sidebar-nav-link" to="/profile"><i className="fa fa-fw fa-user" style={{ fontSize: '1.75em' }} />Profile</Link>
                    </NavIcon>
                </NavItem>
                <NavItem eventKey="/search">
                    <NavIcon>
                        <i className="fa fa-fw fa-search" style={{ fontSize: '1.75em' }} />Search
                    </NavIcon>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    )
}
export default Sidenav