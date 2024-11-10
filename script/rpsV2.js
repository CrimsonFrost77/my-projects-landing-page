const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resetButton = document.getElementById("reset-score");

//output elements
const resultText = document.getElementById("result-text");
const scoreText = document.getElementById("score-text");
const choicesText = document.getElementById("choices-text");

//initialize score
const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

//add score text at start
document.addEventListener("DOMContentLoaded", function () {
  updateScoreText();
});

rockButton.addEventListener("click", () => play("rock"));
paperButton.addEventListener("click", () => play("paper"));
scissorsButton.addEventListener("click", () => play("scissors"));
resetButton.addEventListener("click", resetScore);

//function to play the game
function play(userChoice) {
  let computerChoice = pickComputerMove();
  let result = "";
  if (userChoice === computerChoice) {
    result = `It's a tie!`;
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = `You win :)`;
  } else {
    result = `You lose :(`;
  }

  if (result === "You win :)") {
    score.wins++;
  } else if (result === "You lose :(") {
    score.losses++;
  } else {
    score.ties++;
  }

  localStorage.setItem("score", JSON.stringify(score));
  updateScoreText();

  if (userChoice === "rock") {
    userChoice = "✊";
  } else if (userChoice === "paper") {
    userChoice = "🖐️";
  } else {
    userChoice = "✌️";
  }

  if (computerChoice === "rock") {
    computerChoice = "✊";
  } else if (computerChoice === "paper") {
    computerChoice = "🖐️";
  } else {
    computerChoice = "✌️";
  }

  resultText.textContent = result;
  choicesText.innerHTML = `You <span class="choice">${userChoice}</span><span class = "choice">${computerChoice}</span> Computer`;
}

//pick computer move
function pickComputerMove() {
  let computerChoice = Math.random();
  if (computerChoice < 1 / 3) {
    computerChoice = "rock";
  } else if (computerChoice < 2 / 3) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.setItem("score", JSON.stringify(score));
  choicesText.innerHTML = "";
  resultText.textContent = "";
  updateScoreText();
}

function updateScoreText() {
  scoreText.textContent = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
