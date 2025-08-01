function checkAnswer() {
    const correctAnswer = "4";
    const selectedChoice = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = '';

    if (selectedChoice) {
        userAnswer = selectedChoice.value;
    }

    const feedbackElement = document.getElementById('feedback');

    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);