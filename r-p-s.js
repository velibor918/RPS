let rules = [`Rock`, `Paper` ,`Scissors`];

let playerWinCount = 0;
let computerWinCount = 0;

function getComputerChoice() {
    return rules[Math.floor(Math.random() * rules.length)];
}

function getPlayerChoice() {
    let pChoice = prompt(`Lets play a game of Rock, Paper, Scissors! First to five wins!`); 

    let pChoiceString = pChoice.toString();

    return pChoiceString.charAt(0).toUpperCase() + pChoiceString.slice(1).toLowerCase();
}

function playerWin(getPlayerChoice, getComputerChoice) {
    playerWinCount += 1; 
    console.log(`You win! ${getPlayerChoice} beats ${getComputerChoice}`);
}

function computerWin(getPlayerChoice, getComputerChoice) {
    computerWinCount += 1;
    console.log(`You lose! ${getComputerChoice} beats ${getPlayerChoice}`);
}