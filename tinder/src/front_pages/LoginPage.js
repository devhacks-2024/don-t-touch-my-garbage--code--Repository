import { AppBar, Box, Button } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import { useContext, useState } from "react";
import { UserContextConsumer } from "../userContext";
import { useNavigate } from "react-router-dom";
import data from "../data";
import "../styles/LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();
  const userContext = useContext(UserContextConsumer);

  const loginUser = (userName, password) => {
    var is_error = true;
    const user = data.users.find((element) => element.id === userName);
    console.log(user);
    if (user != null) {
      if (user.password === password) {
        console.log("Login successful");
        userContext.setUser(user);
        navigate("/home");
        is_error = false;
      } else {
        console.log("password wrong");
      }
    } else {
      console.log("User not found");
    }
    return is_error;
  };

  return (
    <div>
      <Inputs login={(username, password) => loginUser(username, password)} />
    </div>
  );
}

function Inputs(props) {
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const is_error = props.login(data.get("username"), data.get("password"));
    setError(is_error);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="all-inputs">
      <Box className="Inputs-Box" component="form" onSubmit={handleSubmit}>
        <div>
          <div>
            <FormControl
              error={error}
              sx={{ m: 1, width: "25ch" }}
              variant="standard"
            >
              <InputLabel>Type Your Username</InputLabel>
              <Input
                name="username"
                endAdornment={
                  <InputAdornment position="end" sx={{ marginRight: "8px" }}>
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div>
            <FormControl
              error={error}
              sx={{ m: 1, width: "25ch" }}
              variant="standard"
            >
              <InputLabel>Type Your Password</InputLabel>
              <Input
                name="password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div className="loginButtonDiv">
            <Button
              type="submit"
              className="loginButton"
              sx={{
                width: "200px",
                backgroundColor: "#5e43f3",
                color: "white",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "rgba(94, 67, 243, 0.8)", // Adjust the alpha value for the desired transparency
                },
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default LoginPage;
