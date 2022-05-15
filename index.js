// function section

function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random()*options.length)];
}
function singleRound(){
    let playerSelection = prompt('Choice');
    let computerSelection = computerPlay();
    let i = null;

    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "scissors" ) {
        if (computerSelection === "paper"){
            console.log('You Win');
            i = 1;
        }
        else if (computerSelection === "rock") {
            console.log('You Lose');
            i = 3;
        }
        else {
            console.log('tie');
            i = 2;
        }
    }
    else if (playerSelection === "rock" ) {
        if (computerSelection === "scissors"){
            console.log('You Win');
            i = 1;
        }
        else if (computerSelection === "paper") {
            console.log('You Lose');
            i = 3;
        }
        else {
            console.log('tie');
            i = 2;
        }
    }
    else if (playerSelection === "paper" ) {
        if (computerSelection === "rock"){
            console.log('You Win');
            i = 1;
        }
        else if (computerSelection === "scissors") {
            console.log('You Lose');
            i = 3;
        }
        else {
            console.log('tie');
            i = 2;
        }
    } 
    else if (playerSelection === "corry"){
        i = 4;
    }
    else {
        console.log('error... Try again');
        i = 0;
    }
    return i;
}
function game(){
    let playerScore = 0;
    let computerScore = 0;
    let result = null;

    //while ( playerScore < 5 && computerScore < 5) {
    //    result = singleRound();
    //    if (result === 1) {
    //        playerScore++
    //    }
    //    else if (result === 4){
    //        playerScore = 100;
    //        alert("I love you Corry. You always win:)");
    //    }
    //    else if (result === 3){
    //        computerScore++
    //    }
    //    console.log(`Computer: ${computerScore}`);
    //    console.log(`You: ${playerScore}`);
    // }
}


const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    console.log('rock');
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    console.log('paper');
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    console.log('scissors');
});

// Main Body
game();