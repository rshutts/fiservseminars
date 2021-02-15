import React, { useState, useEffect } from "react";
import Amplify, { Auth, Storage } from "aws-amplify";
import Sidenav from "../../containers/SideNav";
import PhotoUpload from "./components/photoUpload"
import { useHistory } from "react-router-dom";
import {
  HelpBlock,
  FormGroup,
  FormControl,
  FormLabel,
  Row,
  Button
} from "react-bootstrap";
import LoaderButton from "../../components/LoaderButton";
import { useFormFields } from "../../libs/hooksLib";
import { onError } from "../../libs/errorLib";

import config from '../../aws-config';


export default function UpdateProfile() {
  const history = useHistory();
  const [codeSent, setCodeSent] = useState(false);
  const [profile, setProfile] = useState({
    email: "",
    name: "",
    given_name: "",
    nickname: "",
    locale: "",
    address: "",
  });

  const [isConfirming, setIsConfirming] = useState(false);
  const [isSendingCode, setIsSendingCode] = useState(false);

  const onLoad = async () => {
    try {
      const user = await Auth.currentUserInfo();
      console.log(user)
      setProfile({
        email: user.attributes.email,
        name: user.attributes.name,
        given_name: user.attributes.given_name,
        nickname:user.attributes.nickname,
        locale:user.attributes.locale,
        address:user.attributes.address
      });
    } catch(e) {

    }
    
  }
  useEffect(()=>{
    onLoad();
    }, []);
    
    const onSubmit = async data => {
      const user = await Auth.currentAuthenticatedUser();
      
      await Auth.updateUserAttributes(user, { 
        email: profile.email,
        name: profile.name,
        given_name: profile.given_name,
        nickname: profile.nickname,
        locale: profile.locale,
        address: profile.address
      });console.log(user)
    };
    const onClickHandler = (e) => {
      history.push('/profile')
    }
return (
  <div className="next-steps my-5 content-wrapper">
    <Sidenav />
  <div className="main-content-update">
    <form onSubmit={onSubmit}>
      <PhotoUpload/>
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
      <FormGroup bsSize="large" controlId="name">
        <FormLabel>Name</FormLabel>
        <FormControl
          autoFocus
          value={profile.name}
          name="name"
          type="text"
          onChange={e => {
            setProfile({ ...profile, name: e.target.value });
          }}
        />
      </FormGroup>
      </Row>
      <Row>
        <FormGroup bsSize="large" controlId="profile.given_name">
        <FormLabel>Bank Name</FormLabel>
        <FormControl
          autoFocus
          value={profile.given_name}
          name="bank"
          type="text"
          onChange={e => {
            setProfile({ ...profile, given_name: e.target.value });
          }}
        />
      </FormGroup>
      <FormGroup bsSize="large" controlId="nickname">
        <FormLabel>Title</FormLabel>
        <FormControl
          autoFocus
          value={profile.nickname}
          name="title"
          type="text"
          onChange={e => {
            setProfile({ ...profile, nickname: e.target.value });
          }}
        />
      </FormGroup>
      </Row>
      <Row>
        <FormGroup bsSize="large" controlId="profile.locale">
        <FormLabel>City</FormLabel>
        <FormControl
          autoFocus
          value={profile.locale}
          name="city"
          type="text"
          onChange={e => {
            setProfile({ ...profile, locale: e.target.value });
          }}
        />
      </FormGroup>
      <FormGroup bsSize="large" controlId="profile.address">
        <FormLabel>State</FormLabel>
        <FormControl
          autoFocus
          value={profile.address}
          name="state"
          type="text"
          onChange={e => {
            setProfile({ ...profile, address: e.target.value });
          }}
        />
      </FormGroup>
      </Row>
      <LoaderButton
        block
        type="submit"
        bsSize="large"
        isLoading={isSendingCode}
        /* onClick={onClickHandler} */
        /* disabled={!validateEmailForm()} */
      >
        Update Profile
      </LoaderButton>
    </form>
  </div>
    
  </div>     
  );
};