import React from 'react';
import { Link } from "react-router-dom";
import Preloader from "../components/Splash/Preloader/Preloader";
import Timer from "../components/Splash/Countdown/Timer";

import { Menu, Sidebar } from 'semantic-ui-react'
import { Card, CardGroup } from "react-bootstrap";

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
                    Precision Fall Education Seminars
                </h1>
            </Sidebar>
            <div className="container">
                <div className="header">
                    <h1>Fiserv Education Opportunities</h1>
                </div>
                <div className="details">
                    <h2>Details</h2>
                </div>
                <div className="items">
                <CardGroup>
                    <Card>
                        <Card.Header>Format/Topics</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <ul>
                                    <li>Networking and collaboration with likeminded peers and Fiserv experts </li>
                                    <li>Topics include:
                                        <ul>
                                            <li>Deposit</li>
                                            <li>Loans</li>
                                            <li>Year End</li>
                                            <li>Online Banking</li>
                                            <li>And More</li>
                                        </ul>
                                    </li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>Dates & Times</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <ul>
                                    <li>Nashville, TN:</li>
                                        <ul>
                                            <li>September 13-15, 2022</li>
                                        </ul>
                                    <li>Davenport, IA:</li>
                                        <ul>
                                            <li>October 12-14, 2022</li>
                                        </ul>    
                                    <li>Oklahoma City, OK:</li>
                                        <ul>
                                            <li>October 25-27, 2022</li>
                                        </ul>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">*For those of you unable to travel to those locations, we are also excited to offer a virtual event with the same content.</Card.Footer>
                    </Card>
                    <Card>
                        <Card.Header>Pricing For Seminar:</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <ul>
                                    <li><strong>Early Bird= $625</strong></li>
                                    <li><strong>Standard = $725</strong></li>
                                </ul>
                            <Card.Title>Pricing For Advanced Specs:</Card.Title>
                                <ul>
                                    <li><strong>Advanced Deposit Specification</strong></li>
                                        <ul>
                                            <li>Early Bird= $675</li>
                                            <li>Standard = $775</li>
                                        </ul>
                                    <li><strong>Advanced Loan Specification</strong></li>
                                        <ul>
                                            <li>Early Bird= $675</li>
                                            <li>Standard = $775</li>
                                        </ul>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card>
                        <Card.Title>Assistance or Additional Information:</Card.Title>
                        <Card.Body>
                            <Card.Link href="mailto:educationseminars@fiserv.com">educationseminars@fiserv.com</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Title>To Register:</Card.Title>
                        <Card.Body>
                            <Card.Text>
                                <h2>Registration coming soon!</h2>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
                <Timer />
                <Preloader />    
                </div>
            </div>
        </div>
    );
}