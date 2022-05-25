import React from 'react';
import { Link } from "react-router-dom";
import Preloader from "../components/Splash/Preloader/Preloader";
import Timer from "../components/Splash/Countdown/Timer";

import { Menu, Sidebar } from 'semantic-ui-react'
import { Card, CardGroup, ListGroup } from "react-bootstrap";

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
                <div className="items">
                <CardGroup>
                    <Card>
                        {/* <Card.Body>
                            <Card.Title>Format/Topics</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>Networking and collaboration with likeminded peers and Fiserv experts</li>
                                    <li>Topics include:
                                        <ul>
                                            <li>Deposit</li>
                                            <li>Loans</li>
                                            <li>Business Analytics</li>
                                            <li>FCRM</li>
                                            <li>And More</li>
                                        </ul>
                                    </li>
                                </ul>
                            </Card.Text>
                        </Card.Body> */}
                        <ListGroup variant="flush">
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
  </ListGroup>
                    </Card>
                    <Card>
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    </CardGroup>
                <Timer />
                <Preloader />    
                </div>
            </div>
        </div>
    );
}