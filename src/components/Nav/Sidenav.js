import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

function Sidenav() {
    return (
        <SideNav
            onSelect={(selected) => {
                // Add your code here
            }}
        >
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />Home
                    </NavIcon>
                </NavItem>
                <NavItem eventKey="/calendar">
                    <NavIcon>
                        <i className="fa fa-fw fa-calendar" style={{ fontSize: '1.75em' }} />Calendar
                    </NavIcon>
                </NavItem>
                <NavItem eventKey="/chat">
                    <NavIcon>
                        <i className="fa fa-fw fa-comments" style={{ fontSize: '1.75em' }} />Chat
                    </NavIcon>
                </NavItem>
                <NavItem eventKey="/meetings">
                    <NavIcon>
                        <i className="fa fa-fw fa-users" style={{ fontSize: '1.75em' }} />Meetings
                    </NavIcon>
                </NavItem>
                <NavItem eventKey="/profile">
                    <NavIcon>
                        <i className="fa fa-fw fa-user" style={{ fontSize: '1.75em' }} />Profile
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