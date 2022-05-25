import React from 'react';
import Preloader from "./";
import Timer from "./components/Countdown/Timer";

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
            <Optin />
            <Preloader />
          </div>
        </div>
    );
}