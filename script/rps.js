const score = {
  wins: 0,
  losses: 0,
  ties: 0,
};

//function to play the game
function play(userChoice) {
  const computerChoice = pickComputerMove();
  let result = "";
  if (userChoice === computerChoice) {
    result = `It's a tie!`;
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = `You win!`;
  } else {
    result = `You lose!`;
  }

  if (result === "You win!") {
    score.wins++;
  } else if (result === "You lose!") {
    score.losses++;
  } else {
    score.ties++;
  }

  alert(
    `You picked ${userChoice}. Computer picked ${computerChoice}. ${result}\nWins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
  );
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
  alert("Score has been reset!");
}

module.exports = {
  pickComputerMove,
};
