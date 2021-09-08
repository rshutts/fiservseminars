import React, { useState, useEffect } from "react";
import { graphqlOperation } from "@aws-amplify/core";
import Amplify, { Auth } from 'aws-amplify';
import API from "@aws-amplify/api";
import * as queries from "../../graphql/queries";
import { DataStore, syncExpression } from "aws-amplify";
import { Helmet } from "react-helmet";
import { Button, Card, Alert, Form } from "react-bootstrap";
import Layout from "./components/layout";
import config from "../../aws-config";
import { Quiz, Subscribers, Responses } from "../../models/";
import Authenticator from "./components/auth";
import Game from "./components/game";
import Admin from "./components/admin/admin";
import AdminEdit from "./components/admin/editquiz";
import AdminRun from "./components/admin/runquiz";
import AdminFAQ from "./components/admin/admin-faq";
import AdminEditQuestion from "./components/admin/editquestion";
import AdminLibrary from "./components/admin/question-library";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactGA from "react-ga";
ReactGA.initialize("UA-154890668-2");
ReactGA.pageview(window.location.pathname + window.location.search);

Amplify.configure(config);

function Trivia(props) {
  const [name, setName] = useState([]);
  const [gamecode, setGamecode] = useState([]);
  const [error, setError] = useState([]);
  const [path, setPath] = useState([]);
  const [profile, setProfile] = useState({
    username: ""
  });

  const changePath = (url) => {
      this.setState({ path: url });
      localStorage.setItem("path", url);
  }

  /* const signout = (event) => {
    DataStore.delete(Subscribers, localStorage.getItem("subscriber"));
    DataStore.delete(Responses, (c) =>
      c.subscriber("eq", localStorage.getItem("subscriber"))
    );
    const [name, setName] = useState([]);
    const [gamecode, setGamecode] = useState([]);
    const [error, setError] = useState([]);
    const [path, setPath] = useState([]);
    const [username, setUsername] = useState([]);
    localStorage.setItem("path", "");
    localStorage.setItem("gamecode", "");
    localStorage.setItem("subscriber", "");
  } */
  
  const startApp = (event) => {
    const error = this.state.error;
    const path = this.state.path;

    if (path === "auth") {
      return (
        <Authenticator changePath={this.changePath} name={this.state.name} />
      );
    }
    if (path === "game") {
      return <Game signout={this.signout} />;
    }

    return (
      <div>
          
      </div>
    );
  }

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentAuthenticatedUser();
      const user = await Auth.currentUserInfo()
      setProfile({
        username: user.username,
      });
    }
    catch(e) {
      if (e !== 'No current user') {
        Error(e);
      }
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    
    if (gamecode === "" || name === "") {
      setError("Fill in a gamecode and name");
      
    } else if (gamecode.length < 8) {
      console.log(gamecode)
      setError("Fill in a 8 digits gamecode");
    } else {
      console.log(gamecode)
      // check the 8 digit code and and the extra - to preven doubles from the Dynamodb ID
      let filter = {
        id: { beginsWith: gamecode },
      };
      const quiz = await API.graphql({
        query: queries.listQuizzes,
        variables: { filter: filter },
      });console.log(quiz)
      if (quiz.data.listQuizzes.items.length === 0) {
        setError("There is no game with this code");
        console.log(error)
      } else {
        localStorage.setItem("gamecode", quiz.data.listQuizzes.items[0].id);
        console.log(quiz.data.listQuizzes.items[0].id)
        console.log(error)
        return <Game/>;
      }
     
    }
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>What is your name?</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                name="name"
                value={profile.username}
                onChange={e => profile.username(e.target.value)}
                readOnly
              />
            </Form.Group>
            <Form.Group controlId="gameCode">
              <Form.Label>Gamecode</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                name="gamecode"
                value={gamecode}
                onChange={e => setGamecode(e.target.value)}
              />
            </Form.Group>
          </Form>

          <Button size="lg" onClick={handleSubmit}>
            Start Game
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Trivia;