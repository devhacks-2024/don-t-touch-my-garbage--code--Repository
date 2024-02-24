class PeopleObj {
  constructor(id, image, age, gender, bio, password) {
    if (arguments.length === 0) {
      this.id = "guest";
      this.image = "path/to/default/image.jpg";
      this.age = 30;
      this.gender = "Non-binary";
      this.bio = "Just exploring the world of software engineering.";
      this.password = "guest";
    } else {
      this.id = id; // Unique identifier for the user
      this.image = image; // URL or path to the user's image
      this.age = age; // User's age
      this.gender = gender; // User's gender
      this.bio = bio; // Short biography or description
      this.password = password;
    }

    this.currentScore = 0; // Initialize score to 0 questions 
    this.correctAnswers = []; // List of IDs for people who you answered thecorrectly
    this.matches = []; // List of user IDs representing matches
  }

  

  // add the people that you answer the question correctly for
  addCorrectAnswer(userID) {
    if (!this.correctAnswers.includes(userID)) {
      this.correctAnswers.push(userID);
    }
  }

  addMatch(userID) {
    if (!this.matches.includes(userID)) {
      this.matches.push(userID);
    }
  }

  checkMatching(userID){
    if(this.correctAnswers.includes(userID) && userID.correctAnswers.includes(this.id)){
      this.addMatch(userID);
    }
  }

  updateScore(points) {
    this.currentScore += points;
  }

  answerQuestionCorrectly(difficulty) {
    const points = difficulty === "easy" ? 1 : 2; // +1 point for easy questions, +2 for hard
    this.updateScore(points);
  }

  attemptMatchWithQuestion(personID, questionId, userAnswer) {
    const question = questions.find(q => q.id === questionId); // Assuming questions is accessible
    if (question && question.checkAnswer(userAnswer)) {
      console.log(`Correct answer for question ${questionId}.`);
      this.addCorrectAnswer(personID); // Add person's ID on correct answer
      this.answerQuestionCorrectly(question.difficulty);
      this.checkMatching(personID);
    } else if (question) {
      console.log(`Incorrect answer for question ${questionId}, match attempt with person ${personID} skipped.`);
      
    } else {
      console.log(`Question ${questionId} not found.`);
    }
  }
}

const users = [
  new PeopleObj(
    1,
    "path/to/image2.jpg",
    29,
    "Female",
    "Enthusiastic about mobile development and UX design.",
    "password"
  ),
  new PeopleObj(
    2,
    "path/to/image2.jpg",
    28,
    "Female",
    "Enthusiastic about mobile development and UX design.",
    "password"
  ),
  new PeopleObj(
    3,
    "path/to/image3.jpg",
    32,
    "Male",
    "Full-stack developer with a love for JavaScript and Python.",
    "password"
  ),
  new PeopleObj(
    4,
    "path/to/image4.jpg",
    29,
    "Non-binary",
    "AI enthusiast and data scientist.",
    "password"
  ),
  new PeopleObj(
    5,
    "path/to/image5.jpg",
    35,
    "Female",
    "DevOps engineer focusing on cloud infrastructure and security.",
    "password"
  ),
  new PeopleObj(
    6,
    "path/to/image.jpg",
    30,
    "Female",
    "Software engineer with a passion for coding challenges.",
    "password"
  ),
  new PeopleObj(
    7,
    "path/to/image.jpg",
    31,
    "Male",
    "Software engineer with a passion for coding challenges.",
    "password"
  ),
  new PeopleObj(
    8,
    "path/to/image.jpg",
    32,
    "Male",
    "Software engineer with a passion for coding challenges.",
    "password"
  ),
  new PeopleObj(
    9,
    "path/to/image.jpg",
    33,
    "Non-Binary",
    "Software engineer with a passion for coding challenges.",
    "password"
  ),
  new PeopleObj(
    10,
    "path/to/image.jpg",
    34,
    "Male",
    "Software engineer with a passion for coding challenges.",
    "password"
  ),
  new PeopleObj(
    11,
    "path/to/image.jpg",
    35,
    "Male",
    "Software engineer with a passion for coding challenges.",
    "password"
  ),
  new PeopleObj(
    12,
    "path/to/image.jpg",
    36,
    "Female",
    "Software engineer with a passion for coding challenges.",
    "password"
  ),
  new PeopleObj(),
];

console.log(users[4]);

class QuestionsObj {
  constructor(id, questionText, difficulty, correctAnswer, options = null) {
    this.id = id; // Unique identifier for the question
    this.questionText = questionText; // The text of the question
    this.difficulty = difficulty; // Difficulty level ('easy' or 'hard')
    this.correctAnswer = correctAnswer; // The correct answer or solution to the question
    this.options = options; // Optional: Only for multiple choice questions
  }

  // Method to check if the provided answer is correct
  checkAnswer(userAnswer) {
    if (this.difficulty === "easy") {
      return this.options[this.correctAnswer] === userAnswer;
    } else {
      return this.correctAnswer === userAnswer;
    }
  }
}

const questions = [
  new QuestionsObj(
    1,
    'What is the output of `console.log(1 + "2" + "2");` in JavaScript?',
    "easy",
    0,
    ['"122"', '"32"', '"14"']
  ),

  new QuestionsObj(
    2,
    'What is the output of `console.log(1 + "2" + "2");` in JavaScript?',
    "easy",
    0,
    ['"122"', '"32"', '"14"']
  ),
  new QuestionsObj(
    3,
    "Which of the following is a JavaScript framework?",
    "easy",
    1,
    ["Python", "React", "Django", "Flask"]
  ),
  new QuestionsObj(4, "What does HTML stand for?", "easy", 2, [
    "Hyper Trainer Marking Language",
    "Hyper Text Marketing Language",
    "Hyper Text Markup Language",
    "Hyper Text Markup Leveler",
  ]),
  new QuestionsObj(
    5,
    "Fill in the blank: ______ is the process of finding and fixing errors in software.",
    "hard",
    "Debugging"
  ),
  new QuestionsObj(
    6,
    "What is the command to install a package using npm?",
    "hard",
    "npm install <package_name>"
  ),
  new QuestionsObj(
    7,
    "Fill in the blank: The _______ method is used to add one or more elements to the end of an array.",
    "hard",
    "push"
  ),

  new QuestionsObj(
    8,
    "Fill in the blank: The _______ method is used to add one or more elements to the end of an array.",
    "hard",
    "push"
  ),

  new QuestionsObj(
    9,
    "Fill in the blank: The _______ method is used to add one or more elements to the end of an array.",
    "hard",
    "push"
  ),

  new QuestionsObj(
    10,
    "Fill in the blank: The _______ method is used to add one or more elements to the end of an array.",
    "hard",
    "push"
  ),
];

// Checking answer
console.log(questions[0].checkAnswer('"122"'));
console.log(questions[7].checkAnswer("push"));

export default { users, questions };
