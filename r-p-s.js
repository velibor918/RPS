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
    console.log(`You win! ${getPlayerChoice} beats ${getComputerChoice}. You have ${playerWinCount} and I have ${computerWinCount}.`);
}

function computerWin(getPlayerChoice, getComputerChoice) {
    computerWinCount += 1;
    console.log(`You lose! ${getComputerChoice} beats ${getPlayerChoice}. You have ${playerWinCount} and I have ${computerWinCount}.`);
}

function playRPS(getPlayerChoice, getComputerChoice) {
    if (getComputerChoice === `Rock` && getPlayerChoice === `Rock`) {
        console.log(`It's a tie!`);
    } else if (getComputerChoice === `Rock` && getPlayerChoice === `Scissors`) {
        computerWin(getPlayerChoice, getComputerChoice);
    } else if (getComputerChoice === `Rock` && getPlayerChoice === `Paper`) {
        playerWin(getPlayerChoice, getComputerChoice);
    } else if (getComputerChoice ===`Paper` && getPlayerChoice === `Paper`) {
        console.log(`It's a tie!`);
    } else if (getComputerChoice === `Paper` && getPlayerChoice === `Scissors`) {
        playerWin(getPlayerChoice, getComputerChoice);
    } else if (getComputerChoice === `Paper` && getPlayerChoice === `Rock`) {
        computerWin(getPlayerChoice, getComputerChoice)
    } else if (getComputerChoice === `Scissors` && getPlayerChoice === `Scissors`) {
        console.log(`It's a tie!`);
    } else if ( getComputerChoice === `Scissors` && getPlayerChoice ===`Rock`) {
        playerWin(getPlayerChoice, getComputerChoice);
    } else if (getComputerChoice === `Scissors` && getPlayerChoice ===`Paper`) {
        computerWin(getPlayerChoice, getComputerChoice);
    }
}

function playRPSFive() {
    playRPS(getPlayerChoice(), getComputerChoice());
    playRPS(getPlayerChoice(), getComputerChoice());
    playRPS(getPlayerChoice(), getComputerChoice());
    playRPS(getPlayerChoice(), getComputerChoice());
    playRPS(getPlayerChoice(), getComputerChoice());
}

function scoreCount(playerWinCount, computerWinCount) {
    if (playerWinCount > computerWinCount) {
        console.log(`You win!`)
    } else if (computerWinCount > playerWinCount) {
        console.log(`You lose!`)
    } else {
        console.log(`It's a tie!`)
    }
}

playRPSFive();

scoreCount(playerWinCount, computerWinCount);