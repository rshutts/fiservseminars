import React, { useState, useEffect, Component } from 'react';
import { withRouter, useHistory } from "react-router-dom";
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
  const [profile, setProfile] = useState({
    email: "",
    name: "",
    bank: "",
    title: "",
    city: "",
    state:  ""
  });

  const onLoad = async () => {
    try {
      const user = await Auth.currentUserInfo();
      console.log(user)
      setProfile({
        email: user.attributes.email,
        name: user.attributes.name,
        bank: user.attributes.given_name,
        title: user.attributes.nickname,
        city: user.attributes.locale,
        state: user.attributes.address
      });
    } catch(e) {
 
    }
    
  }
  useEffect(()=>{
    onLoad();
    }, []);

    const onClickHandler = (e) => {
      history.push('/profile/update')
    }

    const onClickPoll = (e) => {
      history.push('/profile/polls/create')
    }

    return (
      <div>
        <header>
          <h1>User Profile</h1>
        </header>
        <Card style={{ width: "50%" }}>
          <ProfileImage/>
          <Card.Header>
            <h1>
              {profile.name}
            </h1>
          </Card.Header>
          <Card.Body>
            <Card.Title>
              Email:  {profile.email}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>
              <h2>Bank Name:  {profile.bank}</h2>
              <h2>Title:  {profile.title}</h2>
              <h2>City: {profile.city}</h2>
              <h2>State: {profile.state}</h2>
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
        {/* <Button
          id='signupBtn'
          color='primary'
          className='btn-margin'
          onClick={onClickPoll}
        >
          Create Poll
        </Button> */}
      </div>
    )
  }
  
  export default withRouter(ProfileCards);
