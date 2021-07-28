import React, { useState, useEffect } from 'react';
import { withRouter, useHistory } from "react-router-dom";
import { Auth } from "aws-amplify";
import Card from "react-bootstrap/Card";
import { Button} from "react-bootstrap";

import ProfileImage from "../Profile/components/profileImage";

import "./Profile.css";
import { setUser } from '@sentry/minimal';

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
  const [userGroup, setUserGroup] = useState({
    group: "",
  });

  const onLoad = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log(user)
      setProfile({
        username: user.username,
        email: user.attributes.email,
        name: user.attributes['custom:fullName'],
        bank: user.attributes['custom:bankName'],
        title: user.attributes['custom:title'],
        city: user.attributes['custom:city'],
        state: user.attributes['custom:state']
      });
      setUserGroup({
        group: user.signInUserSession.accessToken.payload["cognito:groups"],
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
    const updatePassword = (e) => {
      history.push('/profile/password/reset')
    }

    const onClickPoll = (e) => {
      history.push('/profile/polls/create')
    }

    return (
      <div>
        <Card className="profile-section">
          <ProfileImage/>
          <Card.Header>
            <h1>
              {profile.name}
            </h1>
          </Card.Header>
          <Card.Body>
            {userGroup.group === 'Fiserv'
            ?
              <Card.Title>
                Email:  {profile.username}*
              </Card.Title>
            :
              <Card.Title>
                Email:  {profile.email} <br />
                Username:  {profile.username}
              </Card.Title>
            }
            <Card.Subtitle className="mb-2 text-muted">&nbsp;</Card.Subtitle>
            <Card.Text>
              <h2>Bank Name:  {profile.bank}</h2>
              <h2>Title:  {profile.title}</h2>
              <h2>City: {profile.city}</h2>
              <h2>State: {profile.state}</h2>
            </Card.Text>
            <Button
              id='loginBtn'
              color='primary'
              className='btn-margin'
              onClick={onClickHandler}
            >
              Update Profile
            </Button>
            <Button
              id='signupBtn'
              color='primary'
              className='btn-margin'
              onClick={updatePassword}
            >
              Update Password
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
