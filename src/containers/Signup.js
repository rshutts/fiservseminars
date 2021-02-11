import React, { useState } from "react";
import { Auth } from "aws-amplify";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import LoaderButton from "../components/LoaderButton";
import { useAppContext } from "../libs/contextLib";
import { useFormFields } from "../libs/hooksLib";
import { onError } from "../libs/errorLib";
import "./Signup.css";

export default function Signup() {
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
  const { userHasAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  

  function validateForm() {
    return (
      fields.email.length > 0 &&
      fields.username.length > 0 &&
      fields.password.length > 0 &&
      fields.name.length > 0 &&
      fields.given_name.length > 0 &&
      fields.nickname.length > 0 &&
      fields.locale.length > 0 &&
      fields.address.length > 0 &&
      fields.seminarDate.length > 0
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    try {

      const newUser = await Auth.signUp({
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
      setNewUser(newUser);
      history.push("/profile");
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }
  
    return (
      <div className="Signup">
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email" size="lg">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group controlId="username" size="lg">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="username"
            value={fields.username}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group controlId="password" size="lg">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group controlId="confirmPassword" size="lg">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            onChange={handleFieldChange}
            value={fields.confirmPassword}
          />
        </Form.Group>
        <Form.Group controlId="name" size="lg">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="name"
            onChange={handleFieldChange}
            value={fields.name}
          />
        </Form.Group>
        <Form.Group controlId="given_name" size="lg">
          <Form.Label>Bank Name</Form.Label>
          <Form.Control
            type="given_name"
            onChange={handleFieldChange}
            value={fields.given_name}
          />
        </Form.Group>
        <Form.Group controlId="nickname" size="lg">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="nickname"
            onChange={handleFieldChange}
            value={fields.nickname}
          />
        </Form.Group>
        <Form.Group controlId="locale" size="lg">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="locale"
            onChange={handleFieldChange}
            value={fields.locale}
          />
        </Form.Group>
        <Form.Group controlId="address" size="lg">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="address"
            onChange={handleFieldChange}
            value={fields.address}
          />
        </Form.Group>
        <Form.Group controlId="seminarDate" size="lg">
          <Form.Label>Seminar Date</Form.Label>
          <Form.Control 
            onChange={handleFieldChange}
            value={fields.seminardDate}
            as="select"
          >
            <option>April 1-3</option>
            <option>April 24-27</option>
          </Form.Control>
          <Form.Control
            type="birthdate"
            onChange={handleFieldChange}
            value={fields.seminarDate}
          />
        </Form.Group>
        <LoaderButton
          block
          size="lg"
          type="submit"
          variant="success"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Signup
        </LoaderButton>
      </Form>
      </div>
      
    );
  }
