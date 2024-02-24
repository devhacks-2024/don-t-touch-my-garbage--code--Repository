import React from "react";

// CSS
import "../styles/ToolBar.css";

// Icons
import MenuIcon from "@mui/icons-material/Menu";
import TelegramIcon from "@mui/icons-material/Telegram";
import IconButton from "@mui/material/IconButton";

function Header() {
  return (
    <div className="header" aria-label="profile">
      {/* Menu Icon */}
      <IconButton>
        <MenuIcon fontSize="large" />
      </IconButton>

      {/* Logo */}
      <h1 className="text-center">.CodeCrush(♥)</h1>

      {/* Chat Icon */}
      <IconButton>
        <TelegramIcon fontSize="large" aria-label="chat" />
      </IconButton>
    </div>
  );
}

export default Header;
