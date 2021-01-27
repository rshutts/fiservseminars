import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";

import { useFormFields } from "../../../libs/hooksLib";
import { onError } from "../../../libs/errorLib";
import LoaderButton from "../../../components/LoaderButton";

import {
    HelpBlock,
    FormGroup,
    FormControl,
    FormLabel,
    Button,
} from "react-bootstrap";

export default function UpdateEmail() {
    const [readOnly, setReadOnly] = useState(false);
    const [isActive, setActive] = useState(false);
  
    const history = useHistory();
    const [fields, handleFieldChange] = useFormFields({
      email: "",
    });
    
    async function handleEmailUpdate(event) {
    event.preventDefault();
    try {
        const user = await Auth.currentAuthenticatedUser();
        await Auth.updateUserAttributes(user,{ 
            email: fields.email
        });
    } catch (error) {
        onError(error);
    }}

    const handleEmailClick = () => {
      setReadOnly(!readOnly);
      setActive(!isActive);
    }

    return (  
        <form onSubmit={handleEmailUpdate}>
            <FormGroup bsSize="large" controlId="email">
                <FormLabel>Email</FormLabel>
                    <FormControl
                        /* readOnly={!readOnly} */
                        autoFocus
                        type="email"
                        value={fields.email}
                        onChange={handleFieldChange}
                    />
                <LoaderButton
                    block
                    type="submit"
                    bsSize="small"
                >
                    Update Email
                </LoaderButton>
            </FormGroup>
        </form>
        
    );
}
