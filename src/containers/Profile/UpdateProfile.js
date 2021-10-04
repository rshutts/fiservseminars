import React, { useState, useEffect } from "react";
import Amplify, { Auth, Storage } from "aws-amplify";
import PhotoUpload from "./components/photoUpload"
import { useHistory } from "react-router-dom";
import {
  FormGroup,
  FormControl,
  FormLabel,
  Row,
  Button
} from "react-bootstrap";
import LoaderButton from "../../components/LoaderButton";
import Error from "../../components/Error";

import awsconfig from '../../aws-config';


export default function UpdateProfile() {
  const history = useHistory();
  const [profile, setProfile] = useState({
    email: "",
    fullName: "",
    bankName: "",
    title: "",
    city: "",
    state: "",
  });
  
  const [isSendingCode, setIsSendingCode] = useState(false);

  const onLoad = async () => {
    try {
      const user = await Auth.currentUserInfo();
      console.log(user)
      setProfile({
        email: user.attributes.email,
        fullName: user.attributes['custom:fullName'],
        bankName: user.attributes['custom:bankName'],
        title: user.attributes['custom:title'],
        city: user.attributes['custom:city'],
        state: user.attributes['custom:state']
      });
    } catch(e) {

    }
    
  }
  useEffect(()=>{
    onLoad();
    }, []);
    
    async function onSubmit(event) {
      event.preventDefault();

      try {
        const user = await Auth.currentAuthenticatedUser();
        await Auth.updateUserAttributes(user, { 
          email: profile.email,
          'custom:fullName': profile.fullName,
          'custom:bankName': profile.bankName,
          'custom:title': profile.title,
          'custom:city': profile.city,
          'custom:state': profile.state
        });
        history.push('/profile')
      } catch (error) {
        Error(error);
      }
    }
const returnTo = () => {
  history.push('/profile')
};
return (
  <div className="main-content-update">
    <h1>
      Update Profile
    </h1>
    <form onSubmit={onSubmit}>
      {/* <PhotoUpload/> */}
      <Row>
        <FormGroup bsSize="large" controlId="email">
        <FormLabel>Email</FormLabel>
        <FormControl
          autoFocus
          value={profile.email}
          name="email"
          type="text"
          onChange={e => {
            setProfile({ ...profile, email: e.target.value });
          }}
        />
      </FormGroup>
      <FormGroup bsSize="large" controlId="fullName">
        <FormLabel>Name</FormLabel>
        <FormControl
          autoFocus
          value={profile.fullName}
          name="fullName"
          type="text"
          onChange={e => {
            setProfile({ ...profile, fullName: e.target.value });
          }}
        />
      </FormGroup>
      </Row>
      <Row>
        <FormGroup bsSize="large" controlId="bankName">
        <FormLabel>Bank Name</FormLabel>
        <FormControl
          autoFocus
          value={profile.bankName}
          name="bankName"
          type="text"
          onChange={e => {
            setProfile({ ...profile, bankName: e.target.value });
          }}
        />
      </FormGroup>
      <FormGroup bsSize="large" controlId="title">
        <FormLabel>Title</FormLabel>
        <FormControl
          autoFocus
          value={profile.title}
          name="title"
          type="text"
          onChange={e => {
            setProfile({ ...profile, title: e.target.value });
          }}
        />
      </FormGroup>
      </Row>
      <Row>
        <FormGroup bsSize="large" controlId="city">
        <FormLabel>City</FormLabel>
        <FormControl
          autoFocus
          value={profile.city}
          name="city"
          type="text"
          onChange={e => {
            setProfile({ ...profile, city: e.target.value });
          }}
        />
      </FormGroup>
      <FormGroup bsSize="large" controlId="state">
        <FormLabel>State</FormLabel>
        <FormControl
          type="state"
          onChange={e => {
            setProfile({ ...profile, state: e.target.value });
          }}
          value={profile.state}
          as="select"
        >
          <option>Alabama</option>
          <option>Alaska</option>
          <option>Arizona</option>
          <option>Arkansas</option>
          <option>California</option>
          <option>Colorado</option>
          <option>Connecticut</option>
          <option>Delaware</option>
          <option>Florida</option>
          <option>Georgia</option>
          <option>Hawaii</option>
          <option>Idaho</option>
          <option>Illinois</option>
          <option>Indiana</option>
          <option>Iowa</option>
          <option>Kansas</option>
          <option>Kentucky</option>
          <option>Louisiana</option>
          <option>Maine</option>
          <option>Maryland</option>
          <option>Massachusetts</option>
          <option>Michigan</option>
          <option>Minnesota</option>
          <option>Mississippi</option>
          <option>Missouri</option>
          <option>Montana</option>
          <option>Nebraska</option>
          <option>Nevada</option>
          <option>New Hampshire</option>
          <option>New Jersey</option>
          <option>New Mexico</option>
          <option>New York</option>
          <option>North Carolina</option>
          <option>North Dakota</option>
          <option>Ohio</option>
          <option>Oklahoma</option>
          <option>Oregon</option>
          <option>Pennsylvania</option>
          <option>Rhode Island</option>
          <option>South Carolina</option>
          <option>South Dakota</option>
          <option>Tennessee</option>
          <option>Texas</option>
          <option>Utah</option>
          <option>Vermont</option>
          <option>Virginia</option>
          <option>Washington</option>
          <option>West Virginia</option>
          <option>Wisconsin</option>
          <option>Wyoming</option>
        </FormControl>
        <FormControl
          required
          type="state"
          onChange={e => {
            setProfile({ ...profile, state: e.target.value });
          }}
          value={profile.state}
          style={{ display: 'none'}}
        />
      </FormGroup>
      </Row>
      <div className="update-profile-buttons">
        <Button
          onClick={returnTo}
        >
          Back
        </Button>
        <LoaderButton
          type="submit"
          isLoading={isSendingCode}
        >
          Update Profile
        </LoaderButton>
      </div>
    </form>  
  </div>     
  );
};