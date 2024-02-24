import { Box, Button } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

function LoginPage() {
  return (
    <div>
      <ToolBar />
      <Inputs />
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

function Inputs() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get("username"),
      password: data.get("password"),
    });
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
        <Button type="submit" id="login-button">
          Login
        </Button>
      </div>
    </Box>
  );
}

export default LoginPage;
