// function section
function updateScores(playerScore, computerScore) {
    const computer = document.querySelector('#computerScore');
    const player = document.querySelector('#playerScore');
    computer.textContent = computerScore;
    player.textContent = playerScore;

    if (playerScore === 5) {
        alert('You Win');
        location.reload();
    }
    else if (computerScore === 5){
        alert('Computer Wins');
        location.reload();
    }

}
function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    let result = options[Math.floor(Math.random()*options.length)];
    const container = document.querySelector('#computer');
    container.textContent = result;
    return result;
}
function playerChoice(result) {
    const container = document.querySelector('#player');
    container.textContent = result;

}
function roundResult(result) {
    const container = document.querySelector('#result');
    container.textContent = result;

}
function singleRound(choice){
    let playerSelection = choice;
    let computerSelection = computerPlay();
    let i = null;

    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "scissors" ) {
        if (computerSelection === "paper"){
            roundResult('You Win');
            i = 1;
        }
        else if (computerSelection === "rock") {
            roundResult('You Lose');
            i = 3;
        }
        else {
            roundResult('Tie');
            i = 2;
        }
    }
    else if (playerSelection === "rock" ) {
        if (computerSelection === "scissors"){
            roundResult('You Win');
            i = 1;
        }
        else if (computerSelection === "paper") {
            roundResult('You Lose');
            i = 3;
        }
        else {
            roundResult('Tie');
            i = 2;
        }
    }
    else if (playerSelection === "paper" ) {
        if (computerSelection === "rock"){
            roundResult('You Win');
            i = 1;
        }
        else if (computerSelection === "scissors") {
            roundResult('You Lose');
            i = 3;
        }
        else {
            roundResult('Tie');
            i = 2;
        }
    } 
    else if (playerSelection === "corry"){
        i = 4;
    }
    else {
        roundResult('error... Try again');
        i = 0;
    }
    return i;
}
function game(){
    let playerScore = 0;
    let computerScore = 0;
    let result = null;


    const rock = document.querySelector('#rock');
    rock.addEventListener('click', () => {
        console.log('rock');
        let choice = 'rock';

        result = singleRound(choice);
        playerChoice('Rock');

        if (result === 1) {
            playerScore++
        }
        else if (result === 3){
            computerScore++
        }
        console.log(`Computer: ${computerScore}`);
        console.log(`You: ${playerScore}`);
        updateScores(playerScore, computerScore);

    });

    const paper = document.querySelector('#paper');
    paper.addEventListener('click', () => {
        console.log('paper');
        let choice = 'paper';
    
        result = singleRound(choice);
        playerChoice('Paper');

        if (result === 1) {
            playerScore++
        }
        else if (result === 3){
            computerScore++
        }
        console.log(`Computer: ${computerScore}`);
        console.log(`You: ${playerScore}`);
        updateScores(playerScore, computerScore);
    });

    const scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', () => {
        console.log('scissors');
        let choice = 'scissors';

        result = singleRound(choice);
        playerChoice('Scissors');

        if (result === 1) {
            playerScore++
        }
        else if (result === 3){
            computerScore++
        }
        console.log(`Computer: ${computerScore}`);
        console.log(`You: ${playerScore}`);
        updateScores(playerScore, computerScore);
    });    
}


// Main Body
game();