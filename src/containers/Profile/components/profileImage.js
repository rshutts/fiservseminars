import React, { useState, useEffect } from 'react';
import Amplify, { Auth, Storage } from 'aws-amplify';
import { useFormFields } from "../../../libs/hooksLib";
import { onError } from "../../../libs/errorLib";
import Avatar from 'react-avatar';

import config from '../../../aws-config';

Storage.configure({ track: true, level: "protected" });

export default function ProfileImage() {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({
    name: ""
  });

  const onLoad = async () => {
    try {
      const user = await Auth.currentUserInfo();
      console.log(user)
      setProfile({
        name: user.attributes['custom:fullName'],
      });
    } catch(e) {
 
    }
    
  }
  useEffect(()=>{
    onLoad();
    }, []);

  let fileInput = React.createRef();
  
  const getProfilePicture = async (e) => {
    const file = e.target.files[0];
    try {
      // Retrieve the uploaded file to display
      const url = await Storage.get(`${profile.username}/profile.png`, { level: 'public' })
      setImageUrl(url);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      {imageUrl
        ?
        <img style={{ width: "30rem" }} src={imageUrl} />
        : 
        <Avatar 
          name={profile.name} 
          alt='Profile'
          className='nav-user-profile'
          size="55"
          round="30px"
          color={Avatar.getRandomColor('sitebase', ['#ff6600', '#666666', '#333333'])}
        /> 
      }
      </div>
  )
}