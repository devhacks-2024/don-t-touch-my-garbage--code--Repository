import { AppBar, Box, Button } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import image1 from "../images/closeup-shot-beautiful-ginger-domestic-kitten-sitting-white-surface.jpg";
import image2 from "../images/pexels-evg-kowalievska-1170986.jpg";
import image3 from "../images/closeup-shot-cute-black-kitten-isolated-white.jpg";

import "../styles/HomePage.css";

function HomePage() {
  return (
    <div>
      <ToolBar />
      <TinderCardObject />
    </div>
  );
}

function ToolBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#5e43f3" }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              fontWeight: "bold",
            }}
          >
            Code Crasher
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function TinderCardObject() {
  const characters = [
    { name: "Character 1", url: image1 },
    { name: "Character 2", url: image2 },
    { name: "Character 3", url: image3 },
    // Add more characters as needed
  ];
  const [currentCard, setCurrentCard] = useState(0);

  const handleNext = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % characters.length);
  };

  const handleReject = () => {
    console.log(`Rejected ${characters[currentCard].name}`);
    handleNext();
  };

  return (
    <div className="tindercards-container">
      <div className="card-container">
        <div className="card">
          <img
            src={characters[currentCard].url}
            alt={characters[currentCard].name}
          />
          <h3>{characters[currentCard].name}</h3>
        </div>

        <div className="button-container">
          <button onClick={handleReject}>Reject</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
