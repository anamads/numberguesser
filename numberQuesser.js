let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}
console.log(generateTarget());

const compareGuesses = (humanGuess, computerGuess, selectTargetNumber) => {
const humanDifference = Math.abs(selectTargetNumber - humanGuess);
const computerDifference = Math.abs(selectTargetNumber - computerGuess);
if(humanDifference <= computerDifference) {
  return true;
} else {
  return false;
}
}

const updateScore = winner => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
}
const advanceRound = () => 
currentRoundNumber++;
