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

let playerWin = 0;
let computerWin = 0;

//const playerSelection = "Scissors"

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
      return "You Win!";
    } else if (
      (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
      (computerSelection === 'Scissors' && playerSelection === 'Paper') ||
      (computerSelection === 'Paper' && playerSelection === 'Rock')
    ) {
      return "You Lose!";
    } else {
      return "It's a tie!";
    }
}

function game() {
    /**
     * Calls the playround five times and 
     * computes the winner of the game
     */
    
    for(let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter Your Selection");
        const computerSelection = getComputerChoice()
        if(playRound(playerSelection, computerSelection) == "You Lose!"){
            computerWin++;
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        }
        else if(playRound(playerSelection, computerSelection) == "You Win!"){
            playerWin++;
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
        }
        else {
            console.log("it's a tie");
        }

    }

    if (computerWin > playerWin) {
        console.log(`Computer Wins! Score: Computer => ${computerWin} : Player => ${playerWin}`);
    }
    else if(playerWin > computerWin) {
        console.log(`You Win! Score: Computer => ${computerWin} : Player => ${playerWin}`);
    }
    else {
        console.log("Nobody wins: it's a tie");
    }
}

game();
