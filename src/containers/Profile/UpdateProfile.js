import React, { useState, useEffect } from "react";
import Amplify, { Auth, Storage } from "aws-amplify";
import Sidenav from "../../containers/SideNav";
import { useHistory } from "react-router-dom";
import {
  HelpBlock,
  FormGroup,
  FormControl,
  FormLabel,
} from "react-bootstrap";
import LoaderButton from "../../components/LoaderButton";
import { useFormFields } from "../../libs/hooksLib";
import { onError } from "../../libs/errorLib";

import config from '../../aws-config';

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


export default function UpdateProfile() {
  const history = useHistory();
  const [codeSent, setCodeSent] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
  });

  const [isConfirming, setIsConfirming] = useState(false);
  const [isSendingCode, setIsSendingCode] = useState(false);

  const onLoad = async () => {
    try {
      const user = await Auth.currentUserInfo();
      console.log(user)
      setProfile({
        name: user.attributes.name,
        email: user.attributes.name,
      });
    } catch(e) {
 
    }
    
  }
  useEffect(()=>{
    onLoad();
    }, []);
    
    const onSubmit = async data => {
      const user = await Auth.currentAuthenticatedUser();
      await Auth.updateUserAttributes(user, { 
        name: profile.name,
      });
    };

return (
  <div className="next-steps my-5 content-wrapper">
    <Sidenav />
  <div className="main-content-profile">
    <form onSubmit={onSubmit}>
      <FormGroup bsSize="large" controlId="name">
        <FormLabel>Email</FormLabel>
        <FormControl
          autoFocus
          value={profile.name}
          name="name"
          type="text"
          onChange={e => {
            setProfile({ ...profile, name: e.target.value });
          }}
        />
      </FormGroup>
      <LoaderButton
        block
        type="submit"
        bsSize="large"
        isLoading={isSendingCode}
        /* disabled={!validateEmailForm()} */
      >
        Update Profile
      </LoaderButton>
    </form>
  </div>
    
  </div>     
  );
};