import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import ListGroup from "react-bootstrap/ListGroup";
import { LinkContainer } from "react-router-bootstrap";
import { useAppContext } from "../libs/contextLib";
import { onError } from "../libs/errorLib";

import CreateNewPoll from '../containers/Polls/components/CreatePoll';
import ErrorMessage from '../containers/Polls/components/ErrorMessage';


export default function CreatePoll() {
    return (
        <div className="main-content">
            <ErrorMessage />
            <CreateNewPoll />
        </div>
    );
}