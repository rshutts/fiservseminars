import React from 'react'
import Amplify, { Auth, API } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import awsconfig from '../../aws-config';
Amplify.configure(awsconfig);

let nextToken;

async function listUsers(limit){
  let apiName = 'AdminQueries';
  let path = '/listUsersInGroup';
  let myInit = { 
      queryStringParameters: {
        "groupname": "Users",
        "limit": limit,
        "token": nextToken
      },
      headers: {
        'Content-Type' : 'application/json',
        Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
      }
  }
  const { NextToken, ...rest } =  await API.get(apiName, path, myInit);
  nextToken = NextToken;
  return rest;
}

function AuthAdmin() {
  return (
    <div className="App">
      <button onClick={() => listUsers(10)}>List Users</button>
    </div>
  );
}

export default withAuthenticator(AuthAdmin, true);