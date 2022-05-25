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
                <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
                    <Timer />
                    <Preloader />    
                </div>
            </div>
        </div>
    );
}