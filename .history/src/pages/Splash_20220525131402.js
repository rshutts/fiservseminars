import React from 'react';
import Preloader from "../components/Splash/Preloader/Preloader";
import Timer from "../components/Splash/Countdown/Timer";

import "../components/"

export default function SplashPage() {
    return (
        <div className="App">
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