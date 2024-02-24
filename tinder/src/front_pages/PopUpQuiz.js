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
  const [answer, setAnswer] = React.useState('');
  const [isCorrect, setIsCorrect] = React.useState(null);

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = () => {
    const isCorrectAnswer = answer === props.question.correctAnswer; // Assuming your question prop includes a 'correctAnswer' field
    setIsCorrect(isCorrectAnswer);
    props.onQuizSubmit(isCorrectAnswer);
    handleClose(); // This might also close the quiz modal after submission
  };

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
          {props.question?.questionText}
        </Typography>
        <FormControl required sx={{ mt: 3, mb: 3, minWidth: 120 }}>
          <InputLabel htmlFor="answer-input">Answer</InputLabel>
          <Input
            id="answer-input"
            name="answer"
            value={answer}
            onChange={handleAnswerChange}
            endAdornment={<InputAdornment position="end"></InputAdornment>}
          />
          <FormHelperText>Required</FormHelperText>
        </FormControl>
        {isCorrect !== null && (
          <Typography color={isCorrect ? "green" : "red"}>
            {isCorrect ? "Correct!" : "Incorrect!"}
          </Typography>
        )}
        <Button onClick={handleSubmit} endIcon={<SendIcon />}>
          Submit
        </Button>
      </Box>
    </Modal>
  );
}

export default PopUpQuiz;
