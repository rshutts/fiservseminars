import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Auth } from "aws-amplify";
import Form from "react-bootstrap/Form";
import LoaderButton from "../components/LoaderButton";
import { useAppContext } from "../libs/contextLib";
import { useFormFields } from "../libs/hooksLib";
import Error from "../components/Error";
import "./Login.css";

import ResetPassword from "./Profile/ResetPassword";

export default function SignupConfirmation() {
  const history = useHistory();
  const { userHasAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const [fields, handleFieldChange] = useFormFields({
    username: "",
    password: ""
  });

  function validateForm() {
    return fields.username.length > 0 && fields.password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    try {
      await Auth.signIn(fields.username, fields.password);
      userHasAuthenticated(true);
      history.push("/");
    } catch (e) {
      Error(e);
      setIsLoading(false);
    }
  }

  return (
    <div className="main-content-login">
      <h1 style={{ textAlign: 'center' }}>Thank you for registering for the Spring Executive Knowledge Exchange!</h1>
      <h3 style={{ textAlign: 'center', fontSize:"15px" }}>We have received your registration details and your account is ready.<br />
      Please login below to proceed.</h3><br />
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="username"
            value={fields.username}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <LoaderButton
          block
          size="lg"
          type="submit"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Login
        </LoaderButton>
        {/* <Link to="/login/reset">Forgot password?</Link> */}
      </Form>
    </div>
  );
}
