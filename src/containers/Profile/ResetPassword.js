import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";
import {
  FormGroup,
  FormControl,
  FormLabel,
} from "react-bootstrap";
import { FaRegCheckCircle, FaRegThumbsUp } from 'react-icons/fa';

import LoaderButton from "../../components/LoaderButton";
import { useFormFields } from "../../libs/hooksLib";
import Error from "../../components/Error";

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
    } catch (error) {
      Error(error);
      setIsConfirming(false);
    }
  }

  function renderRequestCodeForm() {
    return (
      <form onSubmit={handleSendCodeClick}>
        <FormGroup bsSize="large" controlId="username">
          <FormLabel className="h5">Username</FormLabel>
          <FormControl
            autoFocus
            type="username"
            value={fields.username}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <LoaderButton
          block
          type="submit"
          bsSize="large"
          isLoading={isSendingCode}
          disabled={!validateCodeForm()}
        >
          Send Confirmation
        </LoaderButton>
      </form>
    );
  }

  function renderConfirmationForm() {
    return (
      <form onSubmit={handleConfirmClick}>
        <FormGroup bsSize="large" controlId="code">
          <FormLabel>Confirmation Code</FormLabel>
          <FormControl
            autoFocus
            type="tel"
            value={fields.code}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <hr />
        <FormGroup bsSize="large" controlId="password">
          <FormLabel>New Password</FormLabel>
          <FormControl
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup bsSize="large" controlId="confirmPassword">
          <FormLabel>Confirm Password</FormLabel>
          <FormControl
            type="password"
            value={fields.confirmPassword}
            onChange={handleFieldChange}
          />
        </FormGroup>
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
    <div>
      {!codeSent
        ? renderRequestCodeForm()
        : !confirmed
        ? renderConfirmationForm()
        : renderSuccessMessage()}
    </div>
  );
}