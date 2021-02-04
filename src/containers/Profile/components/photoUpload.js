import React, { useState, useEffect } from 'react';
import Amplify, { Auth, Storage } from 'aws-amplify';
import { useFormFields } from "../../../libs/hooksLib";
import { onError } from "../../../libs/errorLib";

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

Storage.configure({ track: true, level: "private" });

export default function PhotoUpload() {
  const [uploaded, setUploaded] = useState(false);
  const [image, setImage] = useState([]);
  const [username, setUsername] = useState(null);
  const [removeImage, setRemoveImage] = useState([]);

  let fileInput = React.createRef();


  useEffect(() => {
    async function getUsername() {
        const user = await Auth.currentUserInfo();
        const username = user.username
        setUsername(username);
    }
    getUsername();
 }, [])

  const onOpenFileDialog = () => {
    fileInput.current.click();
  };

  const onProcessFile = e => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    try {
      reader.readAsDataURL(file);
    } catch (err) {
      console.log(err);
    }
    reader.onloadend = () => {
      setImage(reader.result);
    };
    Storage.put(`profile.png`, file, {
      level: "private",
      contentType: "image/png"
    })
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };
  useEffect(() => {
    onPageRendered();
  }, []);

  const onPageRendered = async () => {
    getProfilePicture();
  };
  
  const getProfilePicture = () => {
    Storage.get(`profile.png`)
      .then(url => {
        var myRequest = new Request(url);
        fetch(myRequest).then(function(response) {
          if (response.status === 200) {
            setImage(url);
          }
        });
      })
      .catch(err => console.log(err));
      
  };

  const onRemoveFile = e => {
    Storage.remove('profile.png', {level: 'private'})
    .then(
      result => console.log(result),
      removeImage()
    )
    .catch(err => console.log(err));
      
  };

  return (
    <div className="App">
      <a href="#">
        <input
            type="file"
            onChange={onProcessFile}
            ref={fileInput}
        />
      </a>
      <button onClick={onRemoveFile}>Remove Photo</button>
      <img src={image} height="200px" style={{display: removeImage ? 'block' : 'none' }}/>
    </div>
  )
}