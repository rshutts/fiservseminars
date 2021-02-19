import React, { useState, useEffect } from 'react';
import Amplify, { Auth, Storage } from 'aws-amplify';
import { useFormFields } from "../../../libs/hooksLib";
import { onError } from "../../../libs/errorLib";
import {
  Form,
  FormGroup,
  FormFile
} from "react-bootstrap";

import config from '../../../aws-config';

Storage.configure({ track: true, level: "protected" });

export default function PhotoUpload() {
  const [uploaded, setUploaded] = useState(false);
  const [image, setImage] = useState([]);
  const [username, setUsername] = useState(null);
  const [removeImage, setRemoveImage] = useState([]);

  let fileInput = React.createRef();

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
    Storage.put('profile.png', file, {
      level: "protected",
      contentType: "image/png"
    })
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };
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
    Storage.remove('profile.png', {level: 'protected'})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  };

  return (
    <div className="upload-profile">
      {!image
        ? <div>
          <Form>
            <Form.File 
              id="change" 
              label="Change photo" 
              onChange={onProcessFile}
              ref={fileInput}
              custom
            />
          </Form>
          <button onClick={onRemoveFile}>Remove Photo</button>
          </div>
        : <Form>
            <Form.File 
              id="upload" 
              label="Upload photo" 
              onChange={onProcessFile}
              ref={fileInput}
              custom
            />
          </Form>
      } 
      <img src={image} height="200px" style={{display: removeImage ? 'block' : 'none' }}/>
    </div>
  )
}