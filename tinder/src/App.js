import "./styles/App.css";
import LoginPage from "./front_pages/LoginPage.js";
import HomePage from "./front_pages/HomePage.js";
import UserPage from "./front_pages/UserPage.jsx";
import ToolBar from "./front_pages/ToolBar.js";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="main-div">
      <ToolBar />
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Login</Link>
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
