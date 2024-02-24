import { AppBar, Box, Button } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useContext, useState } from "react";
import PopUpQuiz from "./PopUpQuiz.js";
import data from "../data.js";

import "../styles/HomePage.css";
import { UserContextConsumer } from "../userContext.js";

function HomePage() {
  const userContext = useContext(UserContextConsumer);

  return (
    <div>
      <TinderCardObject currentUser={userContext.user} users={data.users} />
    </div>
  );
}

function TinderCardObject(props) {
  console.log(props.users);
  const getRandomUser = () => {
    let nextUser = props.users[Math.floor(Math.random() * props.users.length)];
    while (nextUser.id === props.currentUser.id) {
      nextUser = props.users[Math.floor(Math.random() * props.users.length)];
    }
    return nextUser;
  };

  const [currentCard, setCurrentCard] = useState(getRandomUser());
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [quizFeedback, setQuizFeedback] = useState("");

  const handleQuizSubmission = (isCorrect) => {
    setQuizFeedback(isCorrect ? "Correct answer!" : "Incorrect answer!");
    setShowQuiz(false); // Hide quiz after submission
    if (isCorrect) {
      props.currentUser.addCorrectAnswer(currentCard.id);
      props.currentUser.answerQuestionCorrectly(currentQuestion.difficulty);
      setCurrentCard(getRandomUser()); // Move to next profile if correct
    }
  };

  const handleNext = () => {
    const question =
      data.questions[Math.floor(Math.random() * data.questions.length)]; // Random question
    setShowQuiz(true);
    setCurrentQuestion(question); // Assume you've set up state for currentQuestion
  };

  const handleReject = () => {
    console.log(`Rejected ${currentCard.name}`);
    setCurrentCard(getRandomUser()); // Move to the next user without showing the quiz
  };

  const closeQuiz = () => {
    setShowQuiz(false);
    setCurrentCard(getRandomUser()); // Optionally move to the next user after closing the quiz
  };

  return (
    <div className="tindercards-container">
      {showQuiz ? (
        <PopUpQuiz
          closeQuiz={closeQuiz}
          question={currentQuestion}
          onQuizSubmit={handleQuizSubmission}
        />
      ) : (
        <div className="card-container">
          <div className="card">
            <img src={currentCard.image} alt={currentCard.name} />
            <h3>{currentCard.name}</h3>
            <h9>{"Age: "+currentCard.age}</h9>
            <h9>{"Gender: "+currentCard.gender}</h9>
            <h9>{"Bio: "+currentCard.bio}</h9>
            <div className="quiz-feedback">{quizFeedback}</div>
          </div>
          <div className="button-container">
            <button onClick={handleReject}>Reject</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
