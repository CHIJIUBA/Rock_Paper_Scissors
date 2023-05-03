// function playRound(playerSelection, computerSelection) {
// // your code here!
// }

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

function getComputerChoice(){
    const words = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    return randomWord;
}
