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
        <PopUpQuiz question={currentQuestion} closeQuiz={closeQuiz} />
      ) : (
        <div className="card-container">
          <div className="card">
            <img src={currentCard.image} alt={currentCard.name} />
            <h3>{currentCard.name}</h3>
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
