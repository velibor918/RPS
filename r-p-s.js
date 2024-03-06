let rules = [`Rock`, `Paper` ,`Scissors`];

let playerWinCount = 0;
let computerWinCount = 0;

const result = document.querySelector('.result');

const scoreBoard = document.querySelector('.score-board');

function getComputerChoice() {
    return rules[Math.floor(Math.random() * rules.length)];
}

function scoreCount(a, b) {
    if (playerWinCount >= 5 && computerWinCount < 5) {
        computerWinCount = 0; 
        playerWinCount = 0;
        result.textContent = `You win! Want to play again?`;
        scoreBoard.textContent = `You: ${playerWinCount} - Robot: ${computerWinCount}`;
    } else if (computerWinCount >= 5 && playerWinCount < 5) {
        computerWinCount = 0; 
        playerWinCount = 0;
        result.textContent = `You lose! Want to play again?`;
        scoreBoard.textContent = `You: ${playerWinCount} - Robot: ${computerWinCount}`;
    } else if(playerWinCount == 5 && computerWinCount == 5) {
        result.textContent = `It's a tie! Want to play again?`;
        computerWinCount = 0; 
        playerWinCount = 0;
        scoreBoard.textContent = `You: ${playerWinCount} - Robot: ${computerWinCount}`;
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


const scissorsBtn = document.querySelector('.Scissors');

scissorsBtn.addEventListener('click', () => {
    const test = getComputerChoice();
    if (test === 'Scissors') {
        result.textContent = `It's a tie!`
    } else if (test === `Rock`) {
        computerWinCount += 1;
        result.textContent = `You lose! Rock beats Scissors.`;
        scoreBoard.textContent = `You: ${playerWinCount} - Robot: ${computerWinCount}`;
        scoreCount(playerWinCount, computerWinCount);
    } else if( test === `Paper`) {
        playerWinCount += 1;
        result.textContent = `You win! Scissors beats Paper.`;
        scoreBoard.textContent = `You: ${playerWinCount} - Robot: ${computerWinCount}`;
        scoreCount(playerWinCount, computerWinCount);
    }

} );

