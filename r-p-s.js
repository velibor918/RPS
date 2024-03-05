let rules = [`Rock`, `Paper` ,`Scissors`];

let playerWinCount = 0;
let computerWinCount = 0;

const result = document.querySelector('.result');

const scoreBoard = document.querySelector('.score-board');

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

/*
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
*/

function playRPSFive() {
    playRPS(getPlayerChoice(), getComputerChoice());
    playRPS(getPlayerChoice(), getComputerChoice());
    playRPS(getPlayerChoice(), getComputerChoice());
    playRPS(getPlayerChoice(), getComputerChoice());
    playRPS(getPlayerChoice(), getComputerChoice());
}

function scoreCount(playerWinCount, computerWinCount) {
    if (playerWinCount >= 5 && computerWinCount < 5) {
        result.textContent = `You win! Refresh the page to play again!`;
    } else if (computerWinCount >= 5 && playerWinCount < 5) {
        result.textContent = `You lose! Refresh the page to play again!`
    } else if(playerWinCount == 5 && computerWinCount == 5) {
        result.textContent = `It's a tie! Refresh the page to play again.`
    }
}

const rockBtn = document.querySelector('.Rock');

rockBtn.addEventListener('click', () => {
    const test = getComputerChoice()
    if ( test === 'Rock') {
        result.textContent = `It's a tie!`;
    } else if (test === `Paper`) {
        computerWinCount += 1; 
        result.textContent = 'You lose! Paper beats Rock.';
        scoreBoard.textContent = `You: ${playerWinCount} - Robot: ${computerWinCount}`;
        scoreCount(playerWinCount, computerWinCount)
    } else if (test === `Scissors`) {
        playerWinCount +=1;
        result.textContent = `You win! Rock beats Scissors.`;
        scoreBoard.textContent = `You: ${playerWinCount} - Robot: ${computerWinCount}`;
        scoreCount(playerWinCount, computerWinCount)
    }
} );

const paperBtn = document.querySelector('.Paper');

paperBtn.addEventListener('click', () => {
    const test = getComputerChoice(); 
    if (test === `Paper`) {
        result.textContent = `It's a tie!`;
    } else if (test === `Rock`) {
        playerWinCount += 1;
        result.textContent = `You win! Paper beats Rock.`;
        scoreBoard.textContent = `You: ${playerWinCount} - Robot: ${computerWinCount}`;
        scoreCount(playerWinCount, computerWinCount);
    } else if (test === `Scissors`) {
        computerWinCount += 1; 
        result.textContent = `You lose! Scissors beats Paper.`;
        scoreBoard.textContent = `You: ${playerWinCount} - Robot: ${computerWinCount}`;
        scoreCount(playerWinCount, computerWinCount);
    } } );


// playRPSFive();

// scoreCount(playerWinCount, computerWinCount); 

