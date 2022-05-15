// function section

function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    let result = options[Math.floor(Math.random()*options.length)];
    const container = document.querySelector('#computer');
    const content = document.createElement('div');
    content.classList.add('content');

    //if(container.firstChild){
    //    container.remove(firstChild);
    //}
    content.textContent = result;
    container.appendChild(content);
    return result;
}
function playerChoice(result) {
    const container = document.querySelector('#player');

    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = result;

    container.appendChild(content);

}
function singleRound(choice){
    let playerSelection = choice;
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


    const rock = document.querySelector('#rock');
    rock.addEventListener('click', () => {
        console.log('rock');
        let choice = 'rock';

        let result = singleRound(choice);
        playerChoice('rock');

    });

    const paper = document.querySelector('#paper');
    paper.addEventListener('click', () => {
        console.log('paper');
        let choice = 'paper';
    
        let result = singleRound(choice);
        playerChoice('paper');
    });

    const scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', () => {
        console.log('scissors');
        let choice = 'scissors';

        let result = singleRound(choice);
        playerChoice('scissors');
    });


    
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


// Main Body
game();