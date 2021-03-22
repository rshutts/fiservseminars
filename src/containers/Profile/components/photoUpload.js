import React, { useState, useEffect } from 'react';

// Import Amplify and Storage
import Amplify, { Auth, Storage } from 'aws-amplify';
// withAuthenticator is a higher order component that wraps the application with a login page
// Import the project config files and configure them with Amplify

import config from '../../../aws-config';

const PhotoUpload = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({
    username: ""
  });

  const onLoad = async () => {
    try {
      const user = await Auth.currentUserInfo();
      console.log(user)
      setProfile({
        username: user.username,
      });
    } catch(e) {
 
    }
    
  }
  useEffect(()=>{
    onLoad();
    }, []);

  const downloadUrl = async () => {
    // Creates download url that expires in 5 minutes/ 300 seconds
    const downloadUrl = await Storage.get(`${profile.username}/profile.png`, { expires: 300 });
    window.location.href = downloadUrl
  }

  const handleChange = async (e) => {
    const file = e.target.files[0];
    try {
      setLoading(true);
      // Upload the file to s3 with private access level. 
      await Storage.put(`${profile.username}/profile.png`, file, {
        level: 'protected',
        contentType: 'image/png'
      });
      // Retrieve the uploaded file to display
      const url = await Storage.get(`${profile.username}/profile.png`, { level: 'protected' })
      setImageUrl(url);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <h1> Upload an Image </h1>
      {loading ? <h3>Uploading...</h3> : <input
        type="file" accept='image/png'
        onChange={(evt) => handleChange(evt)}
      />}
      <div>
        {imageUrl ? <img style={{ width: "30rem" }} src={imageUrl} /> : <span />}
      </div>
      <div>
        <h2>Download URL?</h2>
        <button onClick={() => downloadUrl()}>Click Here!</button>
      </div>
    </div>
  );
}

export default PhotoUpload;