import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import LoaderButton from "../../components/LoaderButton";
import { useFormFields } from "../../libs/hooksLib";
import Error from "../../components/Error";

import { FaRegCheckCircle, FaRegThumbsUp, FaUnlockAlt, FaUser } from 'react-icons/fa';

export default function ResetPassword() {
  const [fields, handleFieldChange] = useFormFields({
    code: "",
    password: "",
    confirmPassword: "",
    username: "",
  });
  const [codeSent, setCodeSent] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const [isSendingCode, setIsSendingCode] = useState(false);
  const [error, setError] = useState('');

  function validateCodeForm() {
    return fields.username.length > 0;
  }

  function validateResetForm() {
    return (
      fields.code.length > 0 &&
      fields.password.length > 0 &&
      fields.password === fields.confirmPassword
    );
  }

  async function handleSendCodeClick(event) {
    event.preventDefault();

    setIsSendingCode(true);

    try {
      const result = await Auth.forgotPassword(fields.username);
      setCodeSent(true);
      console.log(result);
    } catch (error) {
      Error(error);
      setIsSendingCode(false);
    }
  }

  async function handleConfirmClick(event) {
    event.preventDefault();

    setIsConfirming(true);

    try {
      await Auth.forgotPasswordSubmit(
        fields.username,
        fields.code,
        fields.password
      );
      setConfirmed(true);
    } catch (e) {
      setError(e.message);
      setIsConfirming(false);
    }
  }

  function renderRequestCodeForm() {
    return (
      <Form onSubmit={handleSendCodeClick} className="pwreset-form">
        <Form.Group bsSize="large" controlId="username">
          <Form.Label>Username</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend"><FaUser/></InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              autoFocus
              type="username"
              value={fields.username}
              onChange={handleFieldChange}
            />
          </InputGroup>
        </Form.Group>
        <LoaderButton
          block
          type="submit"
          bsSize="large"
          isLoading={isSendingCode}
          disabled={!validateCodeForm()}
        >
          Send Confirmation
        </LoaderButton>
      </Form>
    );
  }

  function renderConfirmationForm() {
    return (
      <form onSubmit={handleConfirmClick}>
        <Form.Group bsSize="large" controlId="code">
          <Form.Label>Confirmation Code</Form.Label>
          <Form.Control
            autoFocus
            type="tel"
            value={fields.code}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <hr />
        <Form.Group bsSize="large" controlId="password">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group bsSize="large" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={fields.confirmPassword}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <LoaderButton
          block
          type="submit"
          bsSize="large"
          isLoading={isConfirming}
          disabled={!validateResetForm()}
        >
          Confirm
        </LoaderButton>
      </form>
    );
  }

  function renderSuccessMessage() {
    return (
      <div>
        <h1 className="text--success">
          <FaRegCheckCircle/>
        Password reset successful</h1>
        <div className="alert--success">
          <FaRegThumbsUp/>
          Awesome! You have successfully updated your password.
        </div>
        <div className="alert--success-login">
          Now that you've updated your password, please click the link below to login with your new credentials. 
        </div>
        <p>
          <Link to="/login">
            Click here to login.
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="profile-section card">
      <h1 style={{ textAlign: 'center'}}>
        <FaUnlockAlt/> <br />
        Reset Password
      </h1>
      {error && <Error errorMessage={error}/>}
      {!codeSent
        ? renderRequestCodeForm()
        : !confirmed
        ? renderConfirmationForm()
        : renderSuccessMessage()}
    </div>
  );
}