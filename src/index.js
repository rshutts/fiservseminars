import React from 'react';
import ReactDOM from 'react-dom';
import Amplify, { Auth, AuthModeStrategyType } from 'aws-amplify';
import { DataStore } from "@aws-amplify/datastore";

import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { initSentry } from './libs/errorLib';
import reportWebVitals from './reportWebVitals';
import { CLIENT_ID, BASE_KEY } from './utils/localStorageInfo'
import * as serviceWorker from './serviceWorker';
import 'react-toastify/dist/ReactToastify.css';

import awsconfig from './aws-exports';
const LOCAL_KEY = localStorage.getItem(BASE_KEY);

if (!LOCAL_KEY) {
  localStorage.setItem(BASE_KEY, CLIENT_ID);
}

initSentry();

Amplify.configure({awsconfig})

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
