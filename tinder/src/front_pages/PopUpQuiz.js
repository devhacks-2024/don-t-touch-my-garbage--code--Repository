import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import SendIcon from "@mui/icons-material/Send";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function PopUpQuiz(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open Question</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div>
            <Typography id="quiz-title" variant="h6" component="h2">
              Question:
            </Typography>
            <Typography id="quiz-question" sx={{ mt: 2 }}>
              any question
            </Typography>
            <FormControl required sx={{ mt: 3, mb: 3, minWidth: 120 }}>
              <InputLabel id="ans-label">Answer</InputLabel>
              <Input
                name="username"
                endAdornment={
                  <InputAdornment
                    position="end"
                    sx={{ marginRight: "8px" }}
                  ></InputAdornment>
                }
              />
              <FormHelperText>Required</FormHelperText>
            </FormControl>
          </div>
          <div>
            <Button onClick={handleClose} endIcon={<SendIcon />}>
              Submit
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default PopUpQuiz;
