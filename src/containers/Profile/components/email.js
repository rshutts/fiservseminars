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

export default function ChangeEmail() {
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
  const [newUser, setNewUser] = useState(null);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  
  const [bankName,setBankName] = useState("");
  /* const [bankTitle,setBankTitle] = useState("");
  const [userCity,setUserCity] = useState("");
  const [userLocation,setUserLocation] = useState("");
  const [seminarDate,setSeminarDate] = useState(""); */
  
  const onLoad = async () => {
    try {
      const user = await Auth.currentUserInfo();
      setUsername(user.username);
      setName(user.attributes.name);
      setEmail(user.attributes.email);
      setBankName(user.attributes.given_name);
     /*   setBankTitle(user.attributes.nickname);
      setUserCity(user.attributes.locale);
      setUserLocation(user.attributes.address);
      setSeminarDate(user.attributes.['custom:seminarDate']);
      console.log(user.attributes.['custom:seminarDate']) */
      console.log(user.attributes.given_name)
    } catch(e) {
      setError(e);
    }
    
  }
  useEffect(()=>{
    onLoad();
    }, []);

  async function handleUpdateClick(event) {
    event.preventDefault();

    setIsLoading(true);

    try {
      const user = await Auth.currentAuthenticatedUser();
      await Auth.updateUserAttributes(user, { 
        email: fields.email, 
        name: fields.name,
        bankName: fields.given_name
      });
      setIsLoading(false);
      setNewUser(newUser);
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }

  return (
    <div>
      <div><PhotoUpload/></div>
    <div>
      <Form onSubmit={handleUpdateClick}>
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
      <Form.Group bsSize="large" controlId="bankName">
          <Form.Label>Bank Name</Form.Label>
          <Form.Control
            type="bankName"
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