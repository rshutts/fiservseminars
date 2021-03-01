import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, NavbarBrand, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

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
            <p>We thank you for joining us at the Premier Fall Seminar. We hope you had a great learning experience and we hope to see you again soon.</p>
            {/* <p>Signup for the <span style={{ fontWeight:"bold" }}>Precision Spring Knowledge Exchange</span> can be done by clicking the below link.</p>
            <a className="btn-secondary" href="https://precision-signup.fiservseminars.com/">
              Spring signup
            </a> */}
          </Container>
        </div>
      </Router>
    ); 
};

export default App;