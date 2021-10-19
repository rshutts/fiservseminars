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

import awsconfig from './aws-config';
const LOCAL_KEY = localStorage.getItem(BASE_KEY);

if (!LOCAL_KEY) {
  localStorage.setItem(BASE_KEY, CLIENT_ID);
}

initSentry();

Amplify.configure({
  "aws_appsync_graphqlEndpoint": "https://2eohvqtjd5bjbplh4obmfilije.appsync-api.us-east-1.amazonaws.com/graphql",
  "aws_appsync_region": "us-east-1",
  "aws_appsync_authenticationType": "API_KEY",
  'aws_appsync_apiKey': 'da2-h7wfmnkudrgmhlfghpj42xaa6y',
  Auth: {
    region: awsconfig.aws_cognito_region,
    userPoolId: awsconfig.aws_user_pools_id,
    identityPoolId: awsconfig.aws_cognito_identity_pool_id,
    userPoolWebClientId: awsconfig.aws_user_pools_client_id
  },    
  Storage: {
    bucket: awsconfig.aws_s3_bucket, //REQUIRED -  Amazon S3 bucket
    region: awsconfig.aws_s3_bucket_region, //OPTIONAL -  Amazon service region
    identityPoolId: awsconfig.aws_cognito_identity_pool_id
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.unregister();
