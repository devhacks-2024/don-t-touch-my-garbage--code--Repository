import React from "react";
import "../styles/user_page.css";
import Photo from "./Photo.jsx";
import Profile from "./Profile.jsx";

function UserPage() {
  return (
    <div>
      <div className="container">
        <Photo />
        <Profile />
        <button type="submit" className="save-button">
          Save
        </button>
      </div>
    </div>
  );
}

export default UserPage;
