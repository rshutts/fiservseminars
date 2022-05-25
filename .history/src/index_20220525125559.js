import React from 'react';
import ReactDOM from 'react-dom';
import Amplify, { Auth, AuthModeStrategyType } from 'aws-amplify';

import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { initSentry } from './libs/errorLib';
import reportWebVitals from './reportWebVitals';
import { CLIENT_ID, BASE_KEY } from './utils/localStorageInfo'
import * as serviceWorker from './serviceWorker';
import 'react-toastify/dist/ReactToastify.css';

im

import config from './aws-config';
const LOCAL_KEY = localStorage.getItem(BASE_KEY);

if (!LOCAL_KEY) {
  localStorage.setItem(BASE_KEY, CLIENT_ID);
}

initSentry();

Amplify.configure({
  "aws_appsync_graphqlEndpoint": "https://b7b6t7c7kncvdboppzyik23mp4.appsync-api.us-east-1.amazonaws.com/graphql",
  "aws_appsync_region": "us-east-1",
  "aws_appsync_authenticationType": "API_KEY",
  'aws_appsync_apiKey': 'da2-3fhjugoll5ai7fgxbox5dn7wbm',
  Auth: {
    region: config.aws_cognito_region,
    userPoolId: config.aws_user_pools_id,
    identityPoolId: config.aws_cognito_identity_pool_id,
    userPoolWebClientId: config.aws_user_pools_client_id
  },    
  Storage: {
    bucket: config.aws_s3_bucket, //REQUIRED -  Amazon S3 bucket
    region: config.aws_s3_bucket_region, //OPTIONAL -  Amazon service region
    identityPoolId: config.aws_cognito_identity_pool_id
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <Splash/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.unregister();
