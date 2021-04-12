let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random()*10)
}

const compareGuesses = (hg,cg,sg) => {
  const humanScore = Math.abs(hg-sg);
  const computerScore = Math.abs(cg-sg);

  if(humanScore <= computerScore) return true;
  else return false
}

const updateScore = winner => {
  if (winner === 'human') humanScore+=1;
  if (winner === 'computer') computerScore+=1;
}

const advanceRound = () => {
  currentRoundNumber +=1;
}

