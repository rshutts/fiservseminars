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

    /* this.startApp = this.startApp.bind(this); */
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

  /* changePath(url) {
    this.setState({ path: url });
    localStorage.setItem("path", url);
  } */

  /* startApp() {
    const error = this.state.error;
    const path = this.state.path;
    const user = this.state.user;
    const gamecode = this.state.gamecode; */

    /* if (path === "game") {
      return <Game signout={this.signout} />;
    } */
    render() {
    return (
      <div>
        <Layout>
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
}