let seconds;
let currentQuestionIndex;
const totalQuestionsNumber = questions.length;

const remainingSecondSpan = document.querySelectory("#remaining-seconds");

setInterval(function() {
    remainingSecondSpan.textContent = seconds;
    seconds--;
}, 1000);

function resetQuiz() {
    seconds = 60;
    currentQuestionIndex = 0;
}

function updateProgressBar() {
    const progress = Math.round(currentQuestionIndex / totalQuestionNumber * 100);
    document.querySelector(".progress-bar").style.width = ${progress}%;
}

// This function will return a DOM element contains the choice input
function getChoice(choice) {
    const element = document.createElement("div");

}

const myQuestion = questions[currentQuestionIndex];
function renderQuestion() {
    const question = questions[currentQuestionIndex]


    // Change question title
    document.querySelector("question").textContent = question.title;

    const choiceContainer = document.querySelector("#choices-container");
    // Clear answer choices container
    choiceContainer.innerHTML = '';

    // Append new choice
    for (let index = 0; index < question.choices.length; index++) {
        const choice = question.choices(index);
        const element = document.createElement("div");
        element.classList.add("choice");
        element.textContent = choice;

        choiceContainer.appendChild(element);

    }

    updateProgressBar();
}

document.querySelector("#start-quiz-button").addEventListener("click", function(event) {
   resetQuiz();
   renderQuestion();
});

document.querySelector("#choices-container").addEventListener("click", function(event) {
    const target = event.target; 
    if (target.classList.contains("choice")) {
        const answer = target.textContent;
        const correctAnswer = questions[currentQuestionIndex].answer;

        if(answer.localeCompare(correctAnswer) === 0) {
            console.log('you are correct');
        } else {
            console.log('you are wrong');
        }

        currentQuestionIndex++;
        renderQuestion();
    }
});
