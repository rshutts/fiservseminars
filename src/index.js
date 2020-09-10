import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import config from './aws-exports'
import Amplify from 'aws-amplify'
Amplify.configure({
    Auth: {
      region: 'us-east-2',
      userPoolId: 'us-east-2_XREtl0l2L',
      userPoolWebClientId: '3bseicdt0snmhkgnuvhtmmic05',
    },
  });

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
