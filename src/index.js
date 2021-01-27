import React from 'react';
import ReactDOM from 'react-dom';
import { Amplify } from 'aws-amplify';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import config from './config';
import { initSentry } from './libs/errorLib';
import reportWebVitals from './reportWebVitals';

initSentry();

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  },
    aws_appsync_graphqlEndpoint: config.apiGateway.URL,
    aws_appsync_region: config.apiGateway.REGION,
    aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS",
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
