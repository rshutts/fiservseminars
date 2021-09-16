import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import Amplify, { API, Auth, AuthModeStrategyType, Hub, graphqlOperation, Storage } from 'aws-amplify';
import { DataStore } from "@aws-amplify/datastore";
import { listQuizzes } from "../../graphql/queries";
import { Quiz, Subscribers } from "../../models/";

import Layout from "./layout";
import Questions from "./questions";

import awsconfig from "../../aws-exports";

Amplify.configure({awsconfig})

function Game(props) {
  const [subscribers, setSubscribers] = useState([]);
  const [quiz, setQuiz] = useState([]);
  const [gamecode, setGamecode] = useState();
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [profile, setProfile] = useState({
    username: "",
  });
  const [user, setUser] = useState();

  async function listSubscribers() {
    const result = await DataStore.query(Subscribers, c =>
      c.quizID("eq", localStorage.getItem("gamecode"))
    );
      console.log(result)
    setSubscribers(result);
  }

  const onLoad = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log(user)
      setProfile({
        username: user.username,
      });
    } catch(e) {
 
    }
  }
  useEffect(()=>{
    onLoad();
  }, []);
  
  async function listQuiz() {
    const quiz = await API.graphql({
      query: listQuizzes,
      /* variables: { filter: filter }, */
    });
    const gamecode = quiz.data.listQuizzes.items[0].id.substring(0, 8)
    setGamecode(gamecode);
    localStorage.setItem("gamecode", quiz.data.listQuizzes.items[0].id.substring(0, 8));
    console.log(gamecode)

    const quizdata = quiz[0];
    console.log(quiz);
    if (
      typeof quizdata === "undefined" ||
      typeof quizdata.view === "undefined"
    ) {
    } else {
      if (quizdata.view === 0) {
        setSeconds(quizdata.questionTime);
        setIsActive(true);
      } else {
        setSeconds(0);
        setIsActive(false);
      }
      setQuiz(quizdata);
      localStorage.setItem("gamecode", "");
      localStorage.setItem("user", "");
    }
  }

  const StartGame = () => {
    return (
      <div className="startgame">
        We will soon start with the most exciting game ever!
      </div>
    );
  };

  useEffect(() => {
    listQuiz();
    listSubscribers();

    const gameQuiz = DataStore.observe(
      Quiz,
      localStorage.getItem("gamecode")
    ).subscribe(() => {
      console.log("quizUpdated");
      listQuiz();
    });
    const subscription = DataStore.observe(Subscribers).subscribe(() => {
      listSubscribers();
    });

    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (!isActive) {
      clearInterval(interval);
    }

    return () => {
      subscription.unsubscribe();
      gameQuiz.unsubscribe();
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <Button onClick={props.signout}>Signout</Button>
      <Layout quizTitle={quiz}>
        {/* <div>
          {quiz.map((item, i) => {
            return (
              <div key={i}>
                <p>{quiz[i].id.substring(0, 8)}</p>
              </div>
            );
          })}
        </div> */}
        <div className="App">
          <header className="App-header">
            {quiz.started && quiz.view === 0 && (
              <div className="quizTimer">
                <span className="total">{seconds > 0 ? seconds : 0}</span>
                <span> seconds</span>
              </div>
            )}
            <div className="subscribers">
              <span className="total">{subscribers.length}</span>
              <span> Participants</span>
            </div>
          </header>
          {quiz.started && (
            <Questions
              gamecode={localStorage.getItem("gamecode")}
              subscriber={localStorage.getItem("subscriber")}
            />
          )}
          {!quiz.started && <StartGame />}
        </div>
      </Layout>
    </div>
  );
}

export default Game;
