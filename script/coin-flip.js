let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
};

function play(userChoice) {
  let landedOn = flipCoin();
  let result = "";
  if (userChoice === landedOn) {
    result = `You win!`;
    score.wins++;
  } else {
    result = `You lose!`;
    score.losses++;
  }

  localStorage.setItem("score", JSON.stringify(score));

  alert(
    `Your guess ${userChoice}. Coin landed on ${landedOn}. ${result}\nWins: ${score.wins}, Losses: ${score.losses}`
  );
}

function flipCoin() {
  let landedOn = Math.random();
  if (landedOn < 0.5) {
    landedOn = "heads";
  } else {
    landedOn = "tails";
  }
  return landedOn;
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  alert("Score has been reset!");
}

module.exports = {
  flipCoin,
  play,
  resetScore,
};
