import React, { useState } from "react";
import { Auth } from "aws-amplify";
import Form from "react-bootstrap/Form";
import { Header  } from 'semantic-ui-react'
import { useHistory } from "react-router-dom";
import LoaderButton from "../../components/LoaderButton";
import { useAppContext } from "../../libs/contextLib";
import { useFormFields } from "../../libs/hooksLib";
import Error from "../../components/Error";
import { useForm } from 'react-hook-form';
import { FaExclamationCircle } from 'react-icons/fa'

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

  function validateForm() {
    return (
      fields.email.length > 0 &&
      fields.username.length > 0 &&
      fields.password.length > 0 &&
      fields.confirmPassword == fields.password &&
      fields.fullName.length > 0 &&
      fields.bankName.length > 0 &&
      fields.title.length > 0 &&
      fields.city.length > 0 &&
      fields.state.length > 0 &&
      fields.seminarDate.length > 0
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
          'custom:seminarDate': fields.seminarDate
        },    
      });
      setIsLoading(false);
      setNewUser(newUser);
      history.push("/signup/confirmation");
    } catch (e) {
      setError(e.message);
      setIsLoading(false);
    }
  }
  const onClickCheck = (e) => {
    setChecked(!checked)
  }
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
                type="email"
                value={fields.email}
                onChange={handleFieldChange}
              />
            </Form.Group>
            <Form.Group className="required" controlId="username" size="lg">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="username"
                onChange={handleFieldChange}
                value={fields.username}
                /* style={{ display: 'none'}} */
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group className="required" controlId="password" size="lg">
              <Form.Label>Password</Form.Label>
              <Form.Control
              type="password"
              name="password"
              value={fields.password}
              onChange={handleFieldChange}
              pattern="^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9\s])([^\s]){8,16}$"
              ref={register({
                /* required: 'Password required', */
                minLength: { value: 8, message: 'Password is too short' }
              })}
            />
            {errors.password && <p style={{ color: '#DD3435'}}><FaExclamationCircle/> {errors.password.message}</p>}
              <Form.Control.Feedback type="invalid">
                <ul>
                  <li>Require numbers</li>
                  <li>Require special character</li>
                  <li>Require uppercase letters</li>
                  <li>Require lowercase letters</li>
                </ul>
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="required" controlId="confirmPassword" size="lg">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
              type="password"
              name="confirm"
              value={fields.confirmPassword}
              onChange={handleFieldChange}
              ref={register({
                validate: value =>{
                                    // value is from confirm and watch will return value from password

                  if (value === getValues('password')) {return true} else {return <span>Password fields don't match</span>}
                },
                 
                /* required: 'Password required', */
                minLength: { value: 8, message: 'Password is too short' }
              })}
            />

            {errors.confirm && <p style={{ color: '#DD3435'}}><FaExclamationCircle/> {errors.confirm.message}</p>}   
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group className="required" controlId="fullName" size="lg">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="fullName"
                onChange={handleFieldChange}
                value={fields.fullName}
              />
            </Form.Group>
            <Form.Group className="required" controlId="bankName" size="lg">
              <Form.Label>Bank Name</Form.Label>
              <Form.Control
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
                type="title"
                onChange={handleFieldChange}
                value={fields.title}
              />
            </Form.Group>
            <Form.Group className="required" controlId="city" size="lg">
              <Form.Label>City</Form.Label>
              <Form.Control
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
                type="state"
                onChange={handleFieldChange}
                value={fields.state}
                style={{ display: 'none'}}
              />
            </Form.Group>
            <Form.Group className="required" controlId="seminarDate" size="lg">
              <Form.Label>Seminar Date</Form.Label>
              <Form.Control 
                onChange={handleFieldChange}
                value={fields.seminardDate}
                as="select"
              >
                <option></option>
                <option>September 21 - 23</option>
                <option>October 19 - 21</option>
              </Form.Control>
              <Form.Control
                type="birthdate"
                onChange={handleFieldChange}
                value={fields.seminarDate}
                style={{ display: 'none'}}
              />
            </Form.Group>
          </Form.Row>
          <div>
            <span className="reg-require"></span> Indicates required fields
          </div>
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
          style=
            {!checked
              ? {display:'none'}
              : {display:'block'}
            }
        >
          Signup
        </LoaderButton>
      </Form>
      </div>
      
    );
  }
