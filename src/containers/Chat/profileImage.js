import React, { useState, useEffect } from 'react';
import Amplify, { Auth, Storage } from 'aws-amplify';
import { useFormFields } from "../../libs/hooksLib";
import { onError } from "../../libs/errorLib";
import Avatar from 'react-avatar';

import awsconfig from '../../aws-config';

Storage.configure({ track: true, level: "protected" });

export default function ChatProfileImage() {
  const [image, setImage] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);
  const [profile, setProfile] = useState({
    name: ""
  });
  let fileInput = React.createRef();

  const onLoad = async () => {
    try {
      const user = await Auth.currentUserInfo();
      setProfile({
        name: user.attributes.name,
      });
    } catch(e) {
 
    }
    
  }
  useEffect(()=>{
    onLoad();
    }, []);

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
      {imageUrl
        ?
        <img style={{ width: "30rem" }} src={imageUrl} />
        : 
        <Avatar 
          name={profile.name} 
          alt='Profile'
          className='nav-user-profile'
          size="30"
          round="15px"
          color={Avatar.getRandomColor('sitebase', ['#ff6600', '#666666', '#333333'])}
        /> 
      }
    </div>
  )
}