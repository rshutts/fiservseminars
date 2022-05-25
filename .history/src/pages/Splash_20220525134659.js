import React from 'react';
import { Link } from "react-router-dom";
import Preloader from "../components/Splash/Preloader/Preloader";
import Timer from "../components/Splash/Countdown/Timer";

import { Card, Menu, Sidebar } from 'semantic-ui-react'

import "../components/Splash/index.css"

export default function SplashPage() {
    return (
        <div className="App">   
            <Sidebar
                as={Menu}
                inverted
                vertical
                visible
                width='thin'
                className="sidebar"
            >
                <h1 className="title">
                    Premier Fall Education Seminars
                </h1>
            </Sidebar>
            <div className="container">
                <div className="details">
                    <h1>Details</h1>
                </div>
                <div>
                <Card.Group >
                    <Card>
                    <Card.Content>
                        <Card.Header>Steve Sanders</Card.Header>
                        <Card.Meta>Friends of Elliot</Card.Meta>
                        <Card.Description>
                        Steve wants to add you to the group <strong>best friends</strong>
                        </Card.Description>
                    </Card.Content>
                    </Card>
                    <Card>
                    <Card.Content>
                        <Card.Header>Molly Thomas</Card.Header>
                        <Card.Meta>New User</Card.Meta>
                        <Card.Description>
                        Molly wants to add you to the group <strong>musicians</strong>
                        </Card.Description>
                    </Card.Content>
                    </Card>
                    <Card>
                    <Card.Content>
                        <Card.Header>Jenny Lawrence</Card.Header>
                        <Card.Meta>New User</Card.Meta>
                        <Card.Description>
                        Jenny requested permission to view your contact details
                        </Card.Description>
                    </Card.Content>
                    </Card>
                </Card.Group>
                <Timer />
                <Preloader />    
                </div>
            </div>
        </div>
    );
}