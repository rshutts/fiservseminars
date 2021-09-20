import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import Amplify, { API, Auth, AuthModeStrategyType, Hub, graphqlOperation, Storage } from 'aws-amplify';
import { DataStore, syncExpression } from "@aws-amplify/datastore";
import { listQuizzes } from "../../graphql/queries";
import { Quiz,
  Questions,
  QuestionsDB,
  Subscribers,
  Responses, } from "../../models/";

import Layout from "./layout";
import Question from "./questions";

import awsconfig from "../../aws-exports";

Amplify.configure(awsconfig)

function Game(props) {
  const [subscribers, setSubscribers] = useState([]);
  const [quiz, setQuiz] = useState([]);
  const [gamecode, setGamecode] = useState();
  const [gameData, setGameData] = useState();
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [name, setName] = useState();
  const [user, setUser] = useState();

  const onLoad = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
        setName({
          name: user.username,
        });
        DataStore.save(
          new Subscribers({
            name: name,
            score: 0,
            type: "set",
            version: 0,
            quizID: localStorage.getItem("gamecode"),
            timestamp: 0
          })
        )
        .then((data) => {
          const subscriber = data.id;
          localStorage.setItem("subscriber", subscriber);
        })
        const listGamecode = async () => {
          await API.graphql({
            query: listQuizzes,
          }).then(gamecode => {
            setGamecode({
              gamecode: gamecode.data.listQuizzes.items[0].id,
            });
            localStorage.setItem("gamecode", gamecode.data.listQuizzes.items[0].id.substring(0, 8));
            console.log(gamecode)
          })
        }
    
        listGamecode();
        /* DataStore.configure({
          syncExpressions: [
            syncExpression(Quiz, () => {
              return (c) => c.id("beginsWith", localStorage.getItem("gamecode"));
            }),
            syncExpression(Questions, () => {
              return (c) => c.quizID("beginsWith", localStorage.getItem("gamecode"));
            }),
            syncExpression(QuestionsDB, () => {
              return (c) => c.id("eq", null);
            }),
            syncExpression(Subscribers, () => {
              return (c) => c.quizID("beginsWith", localStorage.getItem("gamecode"));
            }),
            syncExpression(Responses, () => {
              return (c) => c.quiz("beginsWith", localStorage.getItem("gamecode"));
            }),
          ],
        }); */
      
        DataStore.start();
        
      } catch(e) {
 
      }
      
    }
  useEffect(()=>{
    onLoad();
    }, []);

  /* async function listGameData() {
    const quizData = await API.graphql({
      query: listQuizzes,
    });
    const gamecode = quizData.data.listQuizzes.items[0].id.substring(0, 8)
    localStorage.setItem("gamecode", gamecode);
    setGameData(gamecode)
    console.log(gamecode)
  } */
  /* async function listSubscribers() {
    const quiz = await API.graphql({
      query: listQuizzes,
    });
    const gamecode = quiz.data.listQuizzes.items[0].id.substring(0, 8)
    setGamecode(gamecode);
    localStorage.setItem("gamecode", quiz.data.listQuizzes.items[0].id.substring(0, 8));
    console.log(gamecode)
    const result = await DataStore.query(Subscribers, c =>
      c.quizID("eq", localStorage.getItem("subscriber"))
    );
    console.log(result)
    console.log(gamecode)
    setSubscribers(result);
  } */
  
  async function listQuiz() {
    const quiz = await DataStore.query(Quiz, c =>
      console.log(name, "name")
    );
    const quizdata = quiz[0];
    console.log(quiz[0]);
    
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

    const gameQuiz = DataStore.observe(
      Quiz,
      localStorage.getItem("gamecode")
    ).subscribe(() => {
      console.log("quizUpdated");
      console.log(gamecode)
      listQuiz();
    });
    /* const subscription = DataStore.observe(Subscribers).subscribe(() => {
      listSubscribers();
    }); */

    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (!isActive) {
      clearInterval(interval);
    }

    return () => {
      /* subscription.unsubscribe(); */
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
            <Question
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
