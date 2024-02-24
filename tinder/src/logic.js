class AccountHandler {
    constructor() {
        // Hardcode guest account details
        this.guestUser = new PeopleObj(
            'guest', // Unique ID for the guest user
            'path/to/default/image.jpg', // Default image path
            30, // Age
            'Non-binary', // Gender
            'Just exploring the world of software engineering.' // Bio
        );
    }

    // Get guest account
    getGuestAccount() {
        return this.guestUser;
    }

    // Update guest profile
    updateProfile({image, age, gender, bio}) {
        if (image) this.guestUser.image = image;
        if (age) this.guestUser.age = age;
        if (gender) this.guestUser.gender = gender;
        if (bio) this.guestUser.bio = bio;

        console.log('Guest profile updated successfully.');
        return true;
    }

    // Update guest's score
    updateScore(points) {
        this.guestUser.updateScore(points);
        console.log(`Guest's score updated to ${this.guestUser.currentScore}.`);
        return true;
    }

    // Add a correct answer for the guest
    addCorrectAnswer(questionId) {
        this.guestUser.addCorrectAnswer(questionId);
        console.log('Correct answer added for the guest.');
        return true;
    }

    // Since a guest might not have matches, this could be optional or managed differently
    addMatch(matchId) {
        console.log('Guest accounts do not support matching functionality.');
        return false;
    }
}

class QuestionHandler {
    constructor() {
        this.questions = []; // Array to store QuestionsObj instances
    }

    // Add a new question to the pool
    addQuestion(question) {
        if (question instanceof QuestionsObj) {
            this.questions.push(question);
            console.log('Question added successfully.');
            return true;
        } else {
            console.log('Invalid question object.');
            return false;
        }
    }

    // Fetch questions by difficulty
    getQuestionsByDifficulty(difficulty) {
        return this.questions.filter(question => question.difficulty === difficulty);
    }

    // Check if a user's answer to a question is correct
    // Returns true if correct, false otherwise
    checkAnswer(questionId, userAnswer) {
        const question = this.questions.find(question => question.id === questionId);
        if (question) {
            return question.checkAnswer(userAnswer);
        } else {
            console.log('Question not found.');
            return false;
        }
    }
}