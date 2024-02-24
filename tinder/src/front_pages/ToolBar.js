import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ToolBar.css";
import MenuIcon from "@mui/icons-material/Menu";
import TelegramIcon from "@mui/icons-material/Telegram";
import IconButton from "@mui/material/IconButton";

function ToolBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header" aria-label="profile">
      {/* Menu Icon */}
      <IconButton onClick={toggleMenu}>
        <MenuIcon fontSize="large" />
      </IconButton>

      {/* Logo */}
      <h1 className="text-center">.CodeCrush(♥)</h1>

      {/* Chat Icon */}
      <IconButton>
        <TelegramIcon fontSize="large" aria-label="chat" />
      </IconButton>

      {/* Dropdown Menu */}
      {menuOpen && (
        <nav className="dropdown-menu">
          <ul>
            <li>
              <Link to="/" role="menuitem" onClick={() => setMenuOpen(false)}>Login</Link>
            </li>
            <li>
              <Link to="/home" role="menuitem" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/userpage" role="menuitem" onClick={() => setMenuOpen(false)}>User Page</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default ToolBar;
