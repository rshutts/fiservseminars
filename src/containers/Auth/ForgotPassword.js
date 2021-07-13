import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

import LoaderButton from "../../components/LoaderButton";
import { useFormFields } from "../../libs/hooksLib";
import Error from "../../components/Error";

import { FaInfoCircle } from "react-icons/fa"
import "./Auth.css";

export default function ForgotPassword() {
  const [fields, handleFieldChange] = useFormFields({
    username: "",
    code: "",
    email: "",
    password: "",
    confirmPassword: "",
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
      await Auth.forgotPassword(fields.username);
      setCodeSent(true);
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
      <Form onSubmit={handleSendCodeClick}>
        <Form.Group bsSize="large" controlId="username">
          <Form.Label>Email or Username</Form.Label>
          <Form.Control
            autoFocus
            value={fields.username}
            onChange={handleFieldChange}
          />
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
          <Alert>
            Please check your email ({fields.username}) for the confirmation code.
          </Alert>
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
      <div className="success">
        <p>Your password has been reset.</p>
        <p>
          <Link to="/login">
            Click here to login with your new credentials.
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="reset-password">
      <h1 style={{ textAlign: 'center'}}>
        <FaInfoCircle/> <br />
        Forgot Password
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