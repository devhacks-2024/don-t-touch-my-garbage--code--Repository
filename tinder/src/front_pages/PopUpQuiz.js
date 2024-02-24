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
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    props.closeQuiz(); // Call this to proceed after the quiz is closed
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography id="quiz-title" variant="h6" component="h2">
          Question:
        </Typography>
        <Typography id="quiz-question" sx={{ mt: 2 }}>
          {props.question?.questionText} {/* Display the passed question text */}
        </Typography>
        <FormControl required sx={{ mt: 3, mb: 3, minWidth: 120 }}>
          <InputLabel htmlFor="answer-input">Answer</InputLabel>
          <Input
            id="answer-input"
            name="answer"
            endAdornment={
              <InputAdornment position="end">
                {/* Optionally include icons or additional elements here */}
              </InputAdornment>
            }
          />
          <FormHelperText>Required</FormHelperText>
        </FormControl>
        <Button onClick={handleClose} endIcon={<SendIcon />}>
          Submit
        </Button>
      </Box>
    </Modal>
  );
}

export default PopUpQuiz;
