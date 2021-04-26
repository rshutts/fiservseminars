import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";

import { AccountContext } from './Accounts';
/* import UserPool from './UserPool'; */
import LoaderButton from "../LoaderButton";
import './Login.css';
/* import config from '../../aws-config'; */

export default () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const { authenticate } = useContext(AccountContext); 
  const onSubmit = event => {
    event.preventDefault();

    authenticate(username, password)
        .then(data => {
            setIsLoading(true);
            history.push("/");
            console.log('Logged in!', data);
        })
        .catch(err => {
            setIsLoading(false);
            console.error('Failed to login!', err);
        })

  };
  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  return (
    <div className="main-content-login">
      <Form onSubmit={onSubmit}>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="username"
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
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
      </Form>
    </div>
  );
};