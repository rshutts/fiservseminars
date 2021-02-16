import React, { useState, useEffect } from "react";
import Amplify, { Auth, Storage } from 'aws-amplify';

import config from '../../../aws-config';

Amplify.configure({
  "aws_appsync_graphqlEndpoint": "https://qssh4niq5bgujocnsbpv2zg7am.appsync-api.us-east-1.amazonaws.com/graphql",
  "aws_appsync_region": "us-east-1",
  "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS",
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

export const getUserData = (props) => {  
    const getUser = async() => {
        try {
          const user = await Auth.currentAuthenticatedUser();
          const { attributes } = user;
          console.log(user)
        } 
          catch(e) {
        }
    } 
    
    return new Promise((resolve, reject) => {
        
      const data = {
        firstname: "User",
        lastname: "Usersson"
      }
      setTimeout(() => resolve(data), 1000)
    })
  }