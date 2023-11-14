let rules = [`Rock`, `Paper` ,`Scissors`];

let playerWinCount = 0;
let computerWinCount = 0;

function getComputerChoice() {
    return rules[Math.floor(Math.random() * rules.length)];
}

