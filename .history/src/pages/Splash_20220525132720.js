import React from 'react';
import { Link } from "react-router-dom";
import Preloader from "../components/Splash/Preloader/Preloader";
import Timer from "../components/Splash/Countdown/Timer";

import { Menu, Segment, Sidebar } from 'semantic-ui-react'

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
                <h1>
                
                </h1>Premier Fall Education Seminars
            </Sidebar>
            <div className="container">
                <h1>
                    Website
                <br />
                    Coming Soon
                </h1>
                <Timer />
                <Preloader />
            </div>
        </div>
    );
}