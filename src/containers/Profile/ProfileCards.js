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
<<<<<<< HEAD
  const [username,setUsername] = useState("");
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [bankName,setBankName] = useState("");
  const [bankTitle,setBankTitle] = useState("");
  const [city,setCity] = useState("");
  const [state,setState] = useState("");
=======
  const [profile, setProfile] = useState({
    email: "",
    name: "",
    bank: "",
    title: "",
    city: "",
    state:  ""
  });
>>>>>>> 8518b6db930583cbab7b2be04b672d2a92dc03fe

  const onLoad = async () => {
    try {
      const user = await Auth.currentUserInfo();
      console.log(user)
<<<<<<< HEAD
      setUsername(user.username);
      setName(user.attributes.name);
      setEmail(user.attributes.email);
      setBankName(user.attributes.given_name);
      setBankTitle(user.attributes.nickname);
      setCity(user.attributes.locale);
      setState(user.attributes.address)
    } catch(e) {
      setError(e);
=======
      setProfile({
        email: user.attributes.email,
        name: user.attributes.name,
        bank: user.attributes.given_name,
        title: user.attributes.nickname,
        city: user.attributes.locale,
        state: user.attributes.address
      });
    } catch(e) {
 
>>>>>>> 8518b6db930583cbab7b2be04b672d2a92dc03fe
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
<<<<<<< HEAD
=======
        <header>
          <h1>User Profile</h1>
        </header>
>>>>>>> 8518b6db930583cbab7b2be04b672d2a92dc03fe
        <Card style={{ width: "50%" }}>
          <ProfileImage/>
          <Card.Header>
            <h1>
<<<<<<< HEAD
              {name}
=======
              {profile.name}
>>>>>>> 8518b6db930583cbab7b2be04b672d2a92dc03fe
            </h1>
          </Card.Header>
          <Card.Body>
            <Card.Title>
<<<<<<< HEAD
              Email:  {email}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>
              <h2>Bank Name:  {bankName}</h2>
              <h2>Title:  {bankTitle}</h2>
              <h2>City: {city}</h2>
              <h2>State: {state}</h2>
=======
              Email:  {profile.email}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>
              <h2>Bank Name:  {profile.bank}</h2>
              <h2>Title:  {profile.title}</h2>
              <h2>City: {profile.city}</h2>
              <h2>State: {profile.state}</h2>
>>>>>>> 8518b6db930583cbab7b2be04b672d2a92dc03fe
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
