import React from "react";
import { graphqlOperation } from "@aws-amplify/core";
import Amplify, { Auth } from 'aws-amplify';
import API from "@aws-amplify/api";
import { listQuizzes } from "../../graphql/queries";
import { DataStore, syncExpression } from "@aws-amplify/datastore";
import { Helmet } from "react-helmet";
import { Button, Card, Alert, Form } from "react-bootstrap";
import Layout from "./layout";

import { Quiz, Subscribers, Responses } from "../../models/";
import Game from "./game";
import Admin from "./admin/admin";
import AdminEdit from "./admin/editquiz";
import AdminRun from "./admin/runquiz";
import AdminFAQ from "./admin/faq";
import AdminEditQuestion from "./admin/editquestion";
import AdminLibrary from "./admin/question-library";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import config from "../../aws-config";

Amplify.configure(config);
DataStore.configure(config);

export default class Trivia extends React.Component {
  state = {
    name: "",
    gamecode: "",
    error: "",
    path: "",
    user: "",
    quizCode: "",
    code: ""
  };

  constructor() {
    super();

    // iam public user

    this.changePath = this.changePath.bind(this);
    this.signout = this.signout.bind(this);
    this.startApp = this.startApp.bind(this);
  }

  componentDidMount() {
    console.log("app started");
    //this.init = DataStore.start();
    const listGamecode = async () => {
      await API.graphql({
        query: listQuizzes,
      }).then(gamecode => {
        this.setState({
          gamecode: gamecode.data.listQuizzes.items[0].id,
        });
        localStorage.setItem("gamecode", gamecode.data.listQuizzes.items[0].id.substring(0, 8));
        console.log(gamecode)
      })
    }

    listGamecode();
    
    const auth = async () => {
      await Auth.currentAuthenticatedUser().then(user => {
        console.log('currentAuthenticatedUser', user.username)
        this.setState({user})
      }).catch(() => console.log('Not signed in'))
    };

    auth();
  }

  signout() {
    DataStore.delete(Subscribers, localStorage.getItem("subscriber"));
    DataStore.delete(Responses, (c) =>
      c.subscriber("eq", localStorage.getItem("subscriber"))
    );

    this.setState({
      name: "",
      gamecode: "",
      error: "",
      path: "",
      user: "",
      quiz: "",
      quizCode: "",
      code: ""
    });
    localStorage.setItem("path", "");
    localStorage.setItem("gamecode", "");
    localStorage.setItem("subscriber", "");
    localStorage.setItem("user", "");
    /* localStorage.setItem("quizCode", ""); */
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const code = target.code;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async () => {
    this.setState({ error: "" });

    let gamecode = this.state.gamecode;
    
    console.log(gamecode)
    const name = this.state.name;
    const value = this.state.value;
   if (typeof gamecode !== "string" || typeof name !== "string") {
      this.setState({ error: "Fill in a correct values" });
    } else if (gamecode.length < 8) {
      this.setState({ error: "Fill in a 8 digits gamecode" });
    } else {
      // check the 8 digit code and and the extra - to preven doubles from the Dynamodb ID

      let filter = {
        id: { beginsWith: this.state.gamecode.substring(0, 8) },
      };
      const quiz = await API.graphql({
        query: listQuizzes,
        variables: { filter: filter },
      });
      
      if (quiz.data.listQuizzes.items.length === 0) {
        this.setState({ error: "There is no game with this code" });
      } else {
        localStorage.setItem("gamecode", quiz.data.listQuizzes.items[0].id);
        this.changePath("game");
      }
    }
  };

  changePath(url) {
    this.setState({ path: url });
    localStorage.setItem("path", url);
  }

  startApp() {
    const error = this.state.error;
    const path = this.state.path;
    const user = this.state.user;
    const gamecode = this.state.gamecode;

    if (path === "game") {
      return <Game signout={this.signout} />;
    }

    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Make an online quiz - the free alternative to Kahoot"
          />
          <title>
            Become thé Kwizz Guru amongst colleagues, friends and family.
          </title>
        </Helmet>
        <Layout path={this.state.path}>
          <div className="buildQuiz">
            <Link to="/admin">
              <Button variant="warning">Open Kwizz builder</Button>
            </Link>
          </div>
          {error.length > 0 && <Alert variant="danger">{error}</Alert>}

          <Card>
            <Card.Body>
              <Form>
                <Form.Group controlId="name">
                  <Form.Label>What is your name?</Form.Label>
                  <Form.Control
                    size="lg"
                    type="text"
                    name="name"
                    value={this.state.user.username}
                    /* disabled
                    value={this.state.lastName} */
                    /* onChange={this.handleInputChange} */
                  />
                </Form.Group>
                <Form.Group controlId="gamecode">
                  <Form.Label>Gamecode</Form.Label>
                  <Form.Control
                    size="lg"
                    type="text"
                    name="gamecode"
                    value={this.state.gamecode.substring(0, 8)}
                    disabled
                    /* onChange={this.handleInputChange} */
                  />
                </Form.Group>
              </Form>

              <Button size="lg" onClick={this.handleSubmit}>
                Start Game
              </Button>
            </Card.Body>
          </Card>
        </Layout>
      </div>
    );
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {this.startApp()}
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/edit-quiz">
            <AdminEdit />
          </Route>
          <Route path="/run-quiz">
            <AdminRun />
          </Route>
          <Route path="/edit-question">
            <AdminEditQuestion />
          </Route>
          <Route path="/library">
            <AdminLibrary />
          </Route>
          <Route path="/admin-faq">
            <AdminFAQ />
          </Route>
        </Switch>
      </Router>
    );
  }
}
