import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import ListGroup from "react-bootstrap/ListGroup";
import { LinkContainer } from "react-router-bootstrap";
import { useAppContext } from "../libs/contextLib";
import { onError } from "../libs/errorLib";

import Sidenav from "../containers/SideNav";
import Left from "../containers/Left";
import Right from "../containers/Right";

export default function Home() {
    return (
        <div className="next-steps my-5 content-wrapper">
            <Sidenav/>
            <div className="main-content">
                <Left />
                <Right />
                {/* <RightMobile /> */}
            </div>
        </div>
    );
}