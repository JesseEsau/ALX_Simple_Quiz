// function declaration
function checkAnswer() {
    // identify correct answer
    const correctAnswer = "4";

    // Retrieve the User's answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // ensure an option was selected
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer."
    }

    const userAnswer = selectedOption.value;

    // compare user's answer with correct answer
    const feedback = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "#28a745" // green
    } else {
        feedback.textContent = "That's incorrect. Try again!"
        feedback.style.color = "#dc3545" // red
    }

}

// Add event listener
document.getElementById("submit-answer").addEventListener("click", checkAnswer);