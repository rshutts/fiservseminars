// dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import { useAuth0 } from '@auth0/auth0-react';
import { isIE, BrowserView } from 'react-device-detect'

// components
import Loading from './components/Loading';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import RegComplete from "./components/RegComplete/RegComplete";

// pages
import Home from './pages/Home';
import Profile from './pages/Profile';
import Archived from './pages/Archived';
import Videos from './pages/ResourceCenter/Videos';
import Articles from './pages/ResourceCenter/Articles';
import FAQ from './pages/FAQ';
import Confirmation from './pages/Confirmation';
import history from './utils/history';

// styles
import './App.css';

// images
import chrome from './assets/chrome.png'
import firefox from './assets/firefox.png'
import edge from './assets/edge.jpg'

// fontawesome
import initFontAwesome from './utils/initFontAwesome';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { Popout } from 'react-popout-component';

initFontAwesome();

const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }
  
  if (isIE) {
    const styles = {
      background: "white",
      fontSize: "24px",
      lineHeight: "2"
    };
    return (
      <Router history={history}>
        <div id='app' className='d-flex flex-column h-100' style={styles}>
          <BrowserView>
            <h1 style={{color: "#ff6600"}}>Your browser is not supported.</h1>
            <p>To view this content, please use one of the following browsers:</p>
            <div>
              <a href="https://www.google.com/chrome/" target="_blank"><img src={chrome} alt={"chrome"} width="100px"/></a>&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://www.mozilla.org/en-US/firefox/new/" target="_blank"><img src={firefox} alt={"firefox"} width="100px"/></a>&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://www.microsoft.com/en-us/edge" target="_blank"><img src={edge} alt={"edge"} width="100px"/></a>
            </div>
          </BrowserView>
        </div>
      </Router>
    );
  } else {
    return (
      <Router history={history}>
        <div id='app' className='d-flex flex-column h-100'>
          <NavBar />
          <Container className='flex-grow-1 mt-5'>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/profile' component={Profile} />
              <Route path='/archived-sessions' component={Archived} />   
              {/* <Route path="/resource-center" component={ResourceCenter} /> */}
              <Route path='/resource-center/videos' component={Videos} />
              <Route path='/resource-center/articles' component={Articles} />
              <Route path='/faq' component={FAQ} />
              <Route path="/registration-confirmation" component={Confirmation} />
              <Route path="/registration-complete" component={RegComplete} />
              {/* <Route path='/chat' component={Chat} />
              <Route path='/join' component={Join} /> */}
            </Switch>
          </Container>
          <Footer />
        </div>
      </Router>
    );
  }
  
};

export default App;
