import { Box, Button } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import "./LoginPage.css";
import { useContext } from "react";
import { UserContextConsumer } from "../userContext";
import { useNavigate } from "react-router-dom";
import data from "../data";

function LoginPage() {
  const navigate = useNavigate();
  const userContext = useContext(UserContextConsumer);
  const loginUser = (userName, password) => {
    const user = data.users.find((element) => element.id === userName);
    if (user != null) {
      if (user.password === password) {
        userContext.setUser(user);
        navigate("/home");
      }
    }
    console.log("User not found or password wrong");
  };
  return (
    <div>
      <ToolBar />
      <Inputs login={(username, password) => loginUser(username, password)} />
    </div>
  );
}

function ToolBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Code Crasher
        </Typography>
      </Toolbar>
    </Box>
  );
}

function Inputs(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    props.login(data.get("username"), data.get("password"));
  };
  return (
    <Box component="form" onSubmit={handleSubmit}>
      <div>
        <div>
          <TextField name="username" label="Username" variant="outlined" />
          <TextField
            name="password"
            label="Password"
            type="password"
            variant="outlined"
          />
        </div>
        <Button type="submit" className="loginButton">
          Login
        </Button>
      </div>
    </Box>
  );
}

export default LoginPage;
