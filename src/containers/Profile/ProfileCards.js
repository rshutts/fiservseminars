import React, { useState, useEffect, Component } from 'react';
import { withRouter, useHistory } from "react-router-dom";
import { Icon, Image, Header, Checkbox } from 'semantic-ui-react';
import { Auth } from "aws-amplify";
import { onError } from "../../libs/errorLib";
import Card from "react-bootstrap/Card";
import {
  HelpBlock,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from "react-bootstrap";

import ProfileImage from "../Profile/components/profileImage"

function ProfileCards(props) {
  const history = useHistory();
  const [error, setError] = useState();
  const [username,setUsername] = useState("");
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [bankName,setBankName] = useState("");
  const [bankTitle,setBankTitle] = useState("");
  const [city,setCity] = useState("");
  const [state,setState] = useState("");

  const onLoad = async () => {
    try {
      const user = await Auth.currentUserInfo();
      console.log(user)
      setUsername(user.username);
      setName(user.attributes.name);
      setEmail(user.attributes.email);
      setBankName(user.attributes.given_name);
      setBankTitle(user.attributes.nickname);
      setCity(user.attributes.locale);
      setState(user.attributes.address)
    } catch(e) {
      setError(e);
    }
    
  }
  useEffect(()=>{
    onLoad();
    }, []);

    const onClickHandler = (e) => {
      history.push('/profile/update')
    }

    return (
      <div>
        <Card style={{ width: "50%" }}>
          <ProfileImage/>
          <Card.Header>
            <h1>
              {name}
            </h1>
          </Card.Header>
          <Card.Body>
            <Card.Title>
              Email:  {email}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>
              <h2>Bank Name:  {bankName}</h2>
              <h2>Title:  {bankTitle}</h2>
              <h2>City: {city}</h2>
              <h2>State: {state}</h2>
            </Card.Text>
            <Button
              id='signupBtn'
              color='primary'
              className='btn-margin'
              onClick={onClickHandler}
            >
              Update Profile
            </Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
  
  export default withRouter(ProfileCards);
