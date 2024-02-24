import React from "react";
import "../styles/photo.css";

function Photo() {
    return (
        <div className="photo">
            <img src="/software-engineer.jpg" className="img" alt="Software Engineer" />
            <h1 className="name">Change Profile Picture</h1>
        </div>
    );
}

export default Photo;
