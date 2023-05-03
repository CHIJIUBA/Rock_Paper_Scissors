// function playRound(playerSelection, computerSelection) {
// // your code here!
// }

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

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
