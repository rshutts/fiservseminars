import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import {
  Form
} from "react-bootstrap";
import LoaderButton from "../../../components/LoaderButton";
import { useFormFields } from "../../../libs/hooksLib";
import { onError } from "../../../libs/errorLib";
import PhotoUpload from "../components/photoUpload"
import { CognitoUserAttribute, CognitoUserPool } from 'amazon-cognito-identity-js';

export default function ChangeEmail() {
  const poolData = {
  UserPoolId: 'us-east-1_ZoafPXhwk',
  ClientId: '7ju0uch5rffb8lf1rpntd0ne9j'
};
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    username: "",
    password: "",
    name: "",
    given_name: "",
    nickname: "",
    locale: "",
    address: "",
    seminarDate: "",
  });

  const history = useHistory();
  const [updatedUser, setUpdatedUser] = useState(null);
  const [error, setError] = useState();
  const [username,setUsername] = useState("");
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [bankName,setBankName] = useState("");
  const [bankTitle,setBankTitle] = useState("");
  const [city,setCity] = useState("");
  const [state,setState] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
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

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    try {
      const user = await Auth.currentAuthenticatedUser();
      const updatedUser = await Auth.updateUserAttributes(user, {
        username: fields.username,
        password: fields.password,
        attributes: {
          email: fields.email,
          name: fields.name,
          given_name: fields.given_name,
          nickname: fields.nickname,
          locale: fields.locale,
          address: fields.address,
          'custom:seminarDate': fields.seminarDate
        },    
      });
      setIsLoading(false);
      setUpdatedUser(updatedUser);
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }

  return (
    <div>
      <div><PhotoUpload/></div>
    <div>
      <Form onSubmit={handleSubmit}>
      { /*Row 1*/ }
      <Form.Row>
        <Form.Group bsSize="large" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            placeholder={email}
            value={fields.email}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group bsSize="large" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder={name}
            value={fields.name}
            onChange={handleFieldChange}
          />
        </Form.Group>
      </Form.Row>
      { /*Row 2*/ }
      <Form.Row>
      <Form.Group bsSize="large" controlId="given_name">
          <Form.Label>Bank Name</Form.Label>
          <Form.Control
            type="given_name"
            placeholder={bankName}
            value={fields.given_name}
            onChange={handleFieldChange}
          />
        </Form.Group>
        {/* <Form.Group bsSize="large" controlId="bankTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="bankTitle"
            placeholder={bankTitle}
            value={fields.given_name}
            onChange={handleFieldChange}
          />
        </Form.Group>*/}
      </Form.Row> 
      { /*Row 3*/ }
     {/*  <Form.Row>
        <Form.Group bsSize="large" controlId="userCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="city"
            placeholder={userCity}
            value={fields.locale}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group bsSize="large" controlId="userLocation">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="name"
            placeholder={userLocation}
            value={fields.address}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group bsSize="large" controlId="userLocation">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="name"
            disabled
            placeholder={seminarDate}
            value={fields.address}
          />
        </Form.Group>
        <Form.Group bsSize="large" controlId="username" style={{ visibility: 'hidden' }}>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            placeholder={username}
            value={username}
            style={{ visibility: 'hidden' }}
          />
        </Form.Group>
      </Form.Row> */}
      <LoaderButton
        block
        type="submit"
        bsSize="large"
        /* disabled={!validateEmailForm()} */
      >
        Update Profile
      </LoaderButton>
    </Form>
    </div>
    </div>
    
    
  );
}