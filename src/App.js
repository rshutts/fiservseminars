import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, NavbarBrand, Button } from 'reactstrap';

import history from './utils/history';

// styles
import './App.css';

// fontawesome
import initFontAwesome from './utils/initFontAwesome';
initFontAwesome();

const App = () => {

    return (
      <Router history={history}>
        <div id='app' className='d-flex flex-column h-100'>
          <Container className='flex-grow-1 mt-5 container'>
            <div className="logo-container">
              <NavbarBrand className='logo' />
            </div>
            <h1 style={{color: "#ff6600"}}>*This seminar is no longer available*</h1>
            <p>We thank you for joining us at the Precision Fall Seminar. We hope you had a great learning experience and we hope to see you at the spring seminar as well.</p>
            <p>Signup for the <span style={{ fontWeight:"bold" }}>Precision Spring Knowledge Exchange</span> will begin shortly. <br/>You will be receiving email correspondence soon on how to signup.</p>
            {/* <Button
              onClick="https://precision-signup.fiservseminars.com/"
              disabled
            >
            Spring signup
            </Button> */}
          </Container>
        </div>
      </Router>
    ); 
};

export default App;