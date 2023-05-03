function getComputerChoice(){
    /**
     * This function randomly selects a single word from the word array
     * It is the function for the computer playing part of the game
     */
    const words = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    return randomWord;
}

const playerSelection = "Scissors"

function playRound(playerSelection, computerSelection) {
    /**
     * This function joins together the computer selection and player selection
     * together and determines who wins
     * Rock beats Scissors, Scissors beats Paper and Paper beats Rock
     */
    if (
      (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
      (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
      (playerSelection === 'Paper' && computerSelection === 'Rock')
    ) {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (
      (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
      (computerSelection === 'Scissors' && playerSelection === 'Paper') ||
      (computerSelection === 'Paper' && playerSelection === 'Rock')
    ) {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
      return "It's a tie!";
    }
}

const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));


