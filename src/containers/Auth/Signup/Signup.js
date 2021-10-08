import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { Auth } from "aws-amplify";
import Form from "react-bootstrap/Form";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Header  } from 'semantic-ui-react'
import { useHistory } from "react-router-dom";
import LoaderButton from "../../../components/LoaderButton";
import { useAppContext } from "../../../libs/contextLib";
import { useFormFields } from "../../../libs/hooksLib";
import Error from "../../../components/Error";
import PasswordChecklist from "react-password-checklist"

import { FaExclamationCircle, FaEye, FaEyeSlash } from 'react-icons/fa'

export default function Signup() {
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    username: "",
    password: "",
    confirmPassword:"",
    fullName: "",
    bankName: "",
    title: "",
    city: "",
    state: "",
    seminarDate: "",
    userScore: "0"
  });
  const { register, getValues, errors } = useForm({ mode: 'all' });
  
  const history = useHistory();

  const [newUser, setNewUser] = useState(null);
  const { userHasAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState('');
  const [values, setValues] = useState({
    showPassword: false,
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function validateForm() {
    return (
      fields.email.length > 0 &&
      fields.username.length > 0 &&
      fields.password.length > 0 &&
      fields.confirmPassword.length > 0 &&
      fields.fullName.length > 0 &&
      fields.bankName.length > 0 &&
      fields.title.length > 0 &&
      fields.city.length > 0 &&
      fields.state.length > 0 &&
      fields.seminarDate.length > 0 &&
      fields.userScore.length > 0
    );
  }

  async function handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    event.preventDefault();
    setIsLoading(true);
    try {
      const newUser = await Auth.signUp({
        username: fields.username,
        password: fields.password,
        attributes: {
          email: fields.email,
          'custom:fullName': fields.fullName,
          'custom:bankName': fields.bankName,
          'custom:title': fields.title,
          'custom:city': fields.city,
          'custom:state': fields.state,
          'custom:seminarDate': fields.seminarDate,
          'custom:userScore': fields.userScore
        },    
      });
      setIsLoading(false);
      setNewUser(newUser);
    } catch (e) {
      console.log(error)
      setError(e.message);
      setIsLoading(false);
    }
  }

  const onClickLogin = (e) => {
    history.push("/login");
  }
  const onClickCheck = (e) => {
    setChecked(!checked)
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  
  const handleChange = (e) => {
    e.preventDefault();
  };

    return (
      <div className="Signup">
        {/* <h1 style={{ textAlign: 'center' }}>Signup for this event has closed.</h1><br />
        <h3 style={{ textAlign: 'center', fontSize:"15px" }}>If you have already signed up, please use the Login button above to login and view content.</h3> */}
        <h2 className="header page-title">Signup</h2>
        {error && <Error errorMessage={error}/>}
        <Form.Text id="passwordHelpBlock" muted>
          Your password must be at least 8 characters long, contain letters and numbers, and
          must contain a special characters.
        </Form.Text>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group className="required" controlId="email" size="lg">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                required
                type="email"
                value={fields.email}
                onChange={handleFieldChange}
              />
            </Form.Group>
            <Form.Group className="required" controlId="username" size="lg">
              <Form.Label>Username</Form.Label>
              <Form.Control
                required
                type="username"
                onChange={handleFieldChange}
                value={fields.username}
              />
              <div style={{color: "red", textAlign: "center", fontWeight: "normal"}}>
                <h3 style={{fontWeight: "bold", fontSize: "12px"}}>
                  **Username CANNOT be an email.**
                </h3>
              </div>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group className="required" controlId="password" size="lg">
              <Form.Label>Password</Form.Label>
              <Form.Control
              required
              type={values.showPassword ? "text" : "password"}
              name="password"
              value={fields.password}
              onChange={handleFieldChange}
              pattern="^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9\s])([^\s]){8,16}$"
            />
            <i 
              className="pw-show-hide" 
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <FaEye /> : <FaEyeSlash />}
            </i>
            <PasswordChecklist
              rules={["minLength","specialChar","number","capital","match"]}
              minLength={8}
              value={fields.password}
              valueAgain={fields.confirmPassword}
              onChange={(isValid) => {}}
              className="requirements"
            />
            </Form.Group>
            <Form.Group className="required" controlId="confirmPassword" size="lg">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
              required
              type={values.showPassword ? "text" : "password"}
              name="confirm"
              value={fields.confirmPassword}
              onChange={handleFieldChange}
              onPaste={handleChange}
            />
            <i 
              className="pw-show-hide" 
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <FaEye /> : <FaEyeSlash />}
            </i> 
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group className="required" controlId="fullName" size="lg">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                required
                type="fullName"
                onChange={handleFieldChange}
                value={fields.fullName}
              />
            </Form.Group>
            <Form.Group className="required" controlId="bankName" size="lg">
              <Form.Label>Bank Name</Form.Label>
              <Form.Control
                required
                type="bankName"
                onChange={handleFieldChange}
                value={fields.bankName}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group className="required" controlId="title" size="lg">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type="title"
                onChange={handleFieldChange}
                value={fields.title}
              />
            </Form.Group>
            <Form.Group className="required" controlId="city" size="lg">
              <Form.Label>City</Form.Label>
              <Form.Control
                required
                type="city"
                onChange={handleFieldChange}
                value={fields.city}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row> 
            <Form.Group className="required" controlId="state" size="lg">
              <Form.Label>State</Form.Label>
              <Form.Control
                required
                type="state"
                onChange={handleFieldChange}
                value={fields.state}
                as="select"
              >
                <option></option>
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
              </Form.Control>
              <Form.Control
                required
                type="state"
                onChange={handleFieldChange}
                value={fields.state}
                style={{ display: 'none'}}
              />
            </Form.Group>
            <Form.Group className="required" controlId="seminarDate" size="lg">
              <Form.Label>Seminar Date</Form.Label>
              <Form.Control 
                required
                onChange={handleFieldChange}
                value={fields.seminardDate}
                as="select"
              >
                <option></option>
                <option>October 12 - 14</option>
                <option>November 2 - 4</option>
              </Form.Control>
              <Form.Control
                type="birthdate"
                onChange={handleFieldChange}
                value={fields.seminarDate}
                style={{ display: 'none'}}
              />
              <Form.Control
                type="score"
                onChange={handleFieldChange}
                value={fields.userScore}
                style={{ display: 'none'}}
              />
            </Form.Group>
            <Form.Group className="required" controlId="userScore" size="lg">
              <Form.Control
                type="userScore"
                /* onChange={handleFieldChange} */
                value={fields.userScore}
                style={{ display: 'none'}}
              />
            </Form.Group>
          </Form.Row>
          <div>
            <span className="reg-require"></span> Indicates required fields
          </div>
          {console.log(fields.userScore)}
          <Form.Text id="passwordHelpBlock">
            Please fill out all fields above and the privacy policy below before completing signup.
          </Form.Text>
          <Form.Group className="required" className="terms-check">
            <Form.Check
              label=""
              feedback="You must agree before submitting."
              className="terms-and-conditons"
              onClick={onClickCheck}
            />
            <div className="privacy-policy">
              I agree to the Fiserv <a href='https://www.fiserv.com/en/about-fiserv/privacy-notice.html' target='_blank'>privacy policy</a>
            </div>
          </Form.Group>
        <LoaderButton
          block
          size="lg"
          type="submit"
          variant="success"
          isLoading={isLoading}
          disabled={!validateForm()}
          onClick={handleShow}
          style=
            {!checked
              ? {display:'none'}
              : {display:'block'}
            }
        >
          Signup
        </LoaderButton>
        <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <h1 style={{ textAlign: 'center' }}>Thank you for registering for the Fall Education Seminar!</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3 style={{ textAlign: 'center', fontSize:"15px" }}>We have received your registration details and your account is ready. Please login to proceed.</h3>
            <h3 style={{ textAlign: 'center', fontSize:"13px", color:"#DD3435" }}>You will be receiving a calendar invite for your session of choice within a week of signing up.</h3>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button variant="secondary" onClick={handleClose}>
              Close
            </Button> */}
            <Button 
              variant="primary" 
              onClick={onClickLogin}
              id='loginBtn'
              color='primary'
              className='btn-margin'>
            Login
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      </Form>
      </div>
      
    );
  }
