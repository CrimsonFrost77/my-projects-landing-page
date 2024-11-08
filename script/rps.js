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
  alert(
    `You picked ${userChoice}. Computer picked ${computerChoice}. ${result}`
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
