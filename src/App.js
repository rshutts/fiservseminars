import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import Loading from './components/Loading';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Meetings from './pages/Meetings';
import Videos from './pages/ResourceCenter/Videos';
import Articles from './pages/ResourceCenter/Articles';
import FAQ from './pages/FAQ';
import Confirmation from './pages/Confirmation';
import RegComplete from "./components/RegComplete/RegComplete";
import { useAuth0 } from '@auth0/auth0-react';
import history from './utils/history';
import { isIE } from 'react-device-detect'
// import Join from './pages/Join';
// import Chat from './pages/Chat';

// styles
import './App.css';

// fontawesome
import initFontAwesome from './utils/initFontAwesome';
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
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <h1>Hi there. You’re using an outdated browser</h1>
        <p>For a safer and faster user experience use a modern browser like Chrome, Firefox, Safari, Opera, or Edge.</p>
      </div>
    )
  } else {
    return (
      <Router history={history}>
        <div id='app' className='d-flex flex-column h-100'>
          <NavBar />
          <Container className='flex-grow-1 mt-5'>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/profile' component={Profile} />
              <Route path='/meetings' component={Meetings} />
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
