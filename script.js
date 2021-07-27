let playerScore = 0;
let computerScore = 0;
let gameNum = 1;

function computerPlay() {
    let computerSelection;
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        computerSelection = "Rock";
    } else if (num === 1) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors";
    }
    return computerSelection.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert("It's a tie! Score: " + playerScore + "-" + computerScore);
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        alert("You lost! Paper beats rock. Score: " + playerScore + "-" + computerScore);
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        alert ("You win! Rock beats scissors. Score: " + playerScore + "-" + computerScore);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        alert("You win! Paper beats rock. Score: " + playerScore + "-" + computerScore);
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        alert("You lost! Scissors beats paper. Score: " + playerScore + "-" + computerScore);
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        alert("You lost! Rock beats scissors. Score: " + playerScore + "-" + computerScore);
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        alert("You win! Scissors beats paper. Score: " + playerScore + "-" + computerScore);
    }
    gameNum++;
}

function game() {
    for (let i = 1; i <= 5; i++ ) {
        const playerSelection = prompt("Make your move! Round " + gameNum + " of 5").toLowerCase();
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        if (i === 5) {
            if (playerScore > computerScore) {
                alert("Congratuations! You won! Final score is, Player: " + playerScore + ", Computer: " + computerScore);
            } else if (playerScore === computerScore) {
                alert("It's a tie? Final score is, Player: " + playerScore + ", Computer: " + computerScore);
            } else {
                alert("I'm sorry, you lost. Final score is, Player: " + playerScore + ", Computer: " + computerScore);
            }
        }
    }
}
game();