import React from "react";
import { DataStore } from "@aws-amplify/datastore";
import { QuestionsDB, Questions, Quiz } from "../../../models/";
import { API, graphqlOperation } from "@aws-amplify/api";
import * as queries from "../../../graphql/queries";
import { Form, Button, Modal, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Layout from "../layoutAdmin";
import Video from "../video";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Select from "react-select";

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      modalData: {
        question: ""
      },
      modalState: false,
      modalStateAdded: false,
      category: "category",
      columns: [
        {
          dataField: "id",
          text: "id",
          hidden: true
        },
        {
          dataField: "answerOne",
          text: "q1",
          hidden: true
        },
        {
          dataField: "answerTwo",
          text: "q2",
          hidden: true
        },
        {
          dataField: "answerThree",
          text: "q3",
          hidden: true
        },
        {
          dataField: "answerThree",
          text: "q4",
          hidden: true
        },
        {
          dataField: "image",
          text: "image",
          hidden: true
        },
        {
          dataField: "youtube",
          text: "youtube",
          hidden: true
        },
        {
          dataField: "answerFour",
          text: "q4",
          hidden: true
        },

        {
          dataField: "question",
          text: "Question"
        },
        {
          dataField: "category",
          text: "Category"
        },
        {
          dataField: "Preview",
          text: "",
          formatter: (rowContent, row) => {
            return (
              <Button onClick={this.preview.bind(rowContent, row)}>
                Preview
              </Button>
            );
          }
        },
        {
          dataField: "link",
          text: "",
          formatter: (rowContent, row) => {
            return (
              <Button onClick={this.addToQuiz.bind(rowContent, row)}>
                Add
              </Button>
            );
          }
        }
      ]
    };
    this.handleList = this.handleList.bind(this);
    this.listQuestions = this.listQuestions.bind(this);
    this.preview = this.preview.bind(this);
    this.onClose = this.onClose.bind(this);
    this.addToQuiz = this.addToQuiz.bind(this);
  }

  preview(rowContent, row) {
    this.setState({
      modalData: rowContent,
      modalState: true
    });
  }

  onClose() {
    this.setState({ modalStateAdded: false });
  }

  async addToQuiz(rowContent, row) {
    const question = await DataStore.query(QuestionsDB, rowContent.id);
    const quiz = await DataStore.query(
      Quiz,
      localStorage.getItem("adminGameCode-editquiz")
    );

    const newQuestion = {
      ...question,
      quizID: localStorage.getItem("adminGameCode-editquiz"),
      fromLibrary: true
    };

    const questionSaved = await DataStore.save(new Questions(newQuestion));

    const savedQuestionId = questionSaved.id;

    let order = [];
    order = JSON.parse(quiz.questionOrder);
    order.push(String(savedQuestionId));

    await DataStore.save(
      Quiz.copyOf(quiz, updated => {
        updated.questionOrder = JSON.stringify(order);
      })
    );

    this.setState({ modalStateAdded: true });
  }

  componentDidMount() {
    this.listQuestions();
  }

  async listQuestions() {
    let questions = "";

    const questionsArray = questions.map(item => {
      return {
        id: item.id,
        question: item.question,
        category: item.category,
        answerOne: item.answerOne,
        answerTwo: item.answerTwo,
        answerThree: item.answerThree,
        answerFour: item.answerFour,
        image: item.image,
        youtube: item.youtube,
      };
    });

    this.setState({ questions: questionsArray });
  }

  handleList(e) {
    const categoryText = e.value;
    localStorage.setItem("categoryFilter", categoryText);
    if (categoryText === "show all") {
      localStorage.setItem("categoryFilter", "reset");
    }

    this.listQuestions();
  }

  listCategories() {
    const categoriesList = [
      { value: "show all", label: "show all" },
      { value: "general", label: "general" },
      { value: "grammar", label: "grammar" },
      { value: "math", label: "math" },
      { value: "movies", label: "movies" },
      { value: "music", label: "music" },
      { value: "pictures", label: "pictures" },
      { value: "showbizz", label: "showbizz" },
      { value: "sports", label: "sports" },
      { value: "tech", label: "tech" },
      { value: "topography", label: "topography" },
      { value: "other", label: "other" }
    ];

    return (
      <Select
        options={categoriesList}
        onChange={this.handleList}
        defaultValue={{ value: "show all", label: "show all" }}
        className="catBtn"
        title="category"
      />
    );
  }

  render() {
    const image = this.state.modalData.image;
    let imageSlice = "";
    if (image !== null && typeof image !== "undefined") {
      imageSlice = image.slice(0, 4);
    }
    return (
      <AmplifyAuthenticator>
        <div className="signout">
          {" "}
          <AmplifySignOut />
        </div>
        <Layout>
          <div className="App">
            <header className="App-header"></header>
            <Modal show={this.state.modalState}>
              <Modal.Header>
                <Modal.Title>{this.state.modalData.question}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {this.state.modalData.youtube !== null && (
                  <div className="videoQuestion">
                    <Video
                      videoSrcURL={this.state.modalData.youtube}
                      videoTitle=""
                    />
                  </div>
                )}
              </Modal.Body>
              <Modal.Body>
                <li>{this.state.modalData.answerOne}</li>
                <li>{this.state.modalData.answerTwo}</li>
                <li>{this.state.modalData.answerThree}</li>
                <li>{this.state.modalData.answerFour}</li>
              </Modal.Body>

              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={() => this.setState({ modalState: false })}
                >
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
            <Modal show={this.state.modalStateAdded}>
              <Modal.Header>
                <Modal.Title>Success</Modal.Title>
              </Modal.Header>
              <Modal.Body>We added this question to your quiz!</Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={() => this.onClose()}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
            <Link
              to={{
                pathname: "/edit-quiz",
                state: {
                  quizID: localStorage.getItem("adminGameCode-editquiz")
                }
              }}
            >
              <Button className="backButton" variant="secondary">
                Back
              </Button>
            </Link>
            <div className="backButtonLibraryDiv">
              <Form.Group controlId="category" title={this.state.category}>
                {this.listCategories()}
              </Form.Group>
            </div>
            <BootstrapTable
              keyField="id"
              data={this.state.questions}
              columns={this.state.columns}
              pagination={paginationFactory()}
              paginationSize={2}
            />
          </div>
        </Layout>
      </AmplifyAuthenticator>
    );
  }
}

export default Library;
