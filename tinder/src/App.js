import "./styles/App.css";
import LoginPage from "./front_pages/LoginPage.js";
import HomePage from "./front_pages/HomePage.js";
import UserPage from "./front_pages/UserPage.jsx";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { UserContextConsumer } from "./userContext.js";
import { Navigate } from "react-router-dom";

function App() {
  const [loginIn, setLogin] = useState(false);
  const userContext = useContext(UserContextConsumer);

  const handleLogout = () => {
    userContext.setUser(null);
    console.log("USERCONTEXT " + userContext.user);
    setLogin(false);
  };

  return (
    <div className="main-div">
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link onClick={handleLogout} to="/">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/userpage">User Page</Link>
              </li>
            </ul>
          </nav>

          <hr />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/userpage" element={<UserPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
