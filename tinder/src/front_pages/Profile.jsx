import React from "react";
import "../styles/profile.css";
import { useContext, useState } from "react";
import { UserContextConsumer } from "../userContext";
function Profile() {
  const userContext = useContext(UserContextConsumer);

  return (
    <div className="profile">
      <h2>Profile</h2>
      <div className="profile-info">
        <p>
          <strong>Name:</strong> {userContext.user.name}
        </p>
        <p>
          <strong>Gender:</strong> {userContext.user.gender}
        </p>
        <p>
          <strong>Age:</strong> {userContext.user.age}
        </p>
        <p>
          <strong>Bio:</strong> {userContext.user.bio}
        </p>
        <p>
          <strong>Score:</strong> {userContext.user.currentScore}
        </p>
        <p>
          <strong>Correct Answers:</strong>{userContext.user.correctAnswers.length}
        </p>
        <ul>
          {userContext.user.correctAnswers.map((person, index) => (
            <li key={index}>{person.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
