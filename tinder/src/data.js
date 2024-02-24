class PeopleObj {
    constructor(id, image, age, gender, bio, password) {
        if(arguments.length ==0 )
        {
            this.id = 'guest';
            this.image ='path/to/default/image.jpg'; // Default image path
            this.age =30; // Age
            this.gender = 'Non-binary'; // Gender
            this.bio = 'Just exploring the world of software engineering.'; // Bio
            this.password = "guest";
        }
        else
        {
            this.id = id; // Unique identifier for the user
            this.image = image; // URL or path to the user's image
            this.age = age; // User's age
            this.gender = gender; // User's gender
            this.bio = bio; // Short biography or description
            this.password = password;
        }
        
        this.currentScore = 0; // Initialize score to 0
        this.correctAnswers = []; // List of IDs for people who you answered the questions correctly
        this.matches = []; // List of user IDs representing matches
        
    }

    updateScore(points) {
        this.currentScore += points;
    }

    // add the people that you answer the question correctly for
    addCorrectAnswer(questionID) {
        if (!this.correctAnswers.includes(questionID)) {
            this.correctAnswers.push(questionID);
        }
    }

    // Adjusted method to handle match by user ID
    addMatch(userID) {
        if (!this.matches.includes(userID)) {
            this.matches.push(userID);
            // Matches are simply stored as an array of user IDs. 
            // Further logic could be added to manage match details.
        }
    }
}

const users = new Array();
const user1 = new PeopleObj(1, 'path/to/image.jpg', 25, 'Male', 'Software engineer with a passion for coding challenges.', "password");
const user2 = new PeopleObj(2, 'path/to/image.jpg', 26, 'Male', 'Software engineer with a passion for coding challenges.', "password");
const user3 = new PeopleObj(3, 'path/to/image.jpg', 27, 'Male', 'Software engineer with a passion for coding challenges.', "password");
const user4 = new PeopleObj(4, 'path/to/image.jpg', 28, 'Male', 'Software engineer with a passion for coding challenges.', "password");
users.push(user1);
users.push(user2);
users.push(user3);
users.push(user4);
users.push(new PeopleObj);
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
        if (this.difficulty === 'easy') {
            return this.options[this.correctAnswer] === userAnswer;
        } else {
            return this.correctAnswer === userAnswer;
        }
    }
}

const questions = new Array();
const easyQuestion = new QuestionsObj(
    1,
    'What is the output of `console.log(1 + "2" + "2");` in JavaScript?',
    'easy',
    "122",
    ['"122"', '"32"', '"14"']
);

// Hard question (fill in the blank)
const hardQuestion = new QuestionsObj(
    2,
    'Fill in the blank: The _______ method is used to add one or more elements to the end of an array.',
    'hard',
    'push'
);

// Checking answer
questions.push(easyQuestion);
questions.push(hardQuestion);

console.log(questions[0].checkAnswer('"122"')); 
console.log(questions[1].checkAnswer('push')); 

export default {PeopleObj, QuestionsObj, users, questions};