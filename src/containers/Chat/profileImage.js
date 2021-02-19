import React, { useState, useEffect } from 'react';
import Amplify, { Auth, Storage } from 'aws-amplify';
import { useFormFields } from "../../libs/hooksLib";
import { onError } from "../../libs/errorLib";

import config from '../../aws-config';

Storage.configure({ track: true, level: "protected" });

export default function ProfileImage() {
  const [image, setImage] = useState([]);
  const [username, setUsername] = useState(null);
  let fileInput = React.createRef();

  useEffect(() => {
    async function getUsername() {
        const user = await Auth.currentUserInfo();
        const username = user.username
        setUsername(username);
    }
    getUsername();
 }, [])

  useEffect(() => {
    onPageRendered();
  }, []);

  const onPageRendered = async () => {
    getProfilePicture();
  };
  
  const getProfilePicture = () => {
    Storage.get(`profile.png`, {level: 'protected'})
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

  return (
    <div className="App">
        <img src={image ? image : 'https://s3.us-east-2.amazonaws.com/fiservseminars-media.com/favicon.ico'} height="50px"/>
    </div>
  )
}