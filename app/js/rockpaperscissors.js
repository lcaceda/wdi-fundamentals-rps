////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    //var move = `getInput()`;
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    // var move = `randomPlay`;
    return move || randomPlay();
}

var playerMove = getPlayerMove();
var computerMove = getComputerMove();

function getWinner(playerMove, computerMove) {
    var winner;
    if (playerMove === null){
        playerMove = getInput();
    }
    console.log(playerMove);
    
    if (computerMove === null){
        computerMove = randomPlay();
    }
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    /* YOUR CODE HERE */
    if (playerMove === computerMove){
        winner = 'tie';
    }else if ((playerMove === 'rock' && computerMove === 'scissors') || (playerMove === 'scissors' && computerMove === 'paper') || (playerMove === 'paper' && computerMove === 'rock')){
        winner = 'player';
    }else{
        winner = 'computer';
    }
    return winner;
}
getWinner();

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    var playerMove;
    var computerMove;
    while (playerWins <= 5 || computerWins <= 5) {
        var winner = getWinner(playerMove, computerMove);
        if (winner === 'player') {
            playerWins ++;
            console.log('Player chose ' + playerMove + ' and Computer chose ' + computerMove);
            console.log('Player wins this round');
            console.log('The score is currently ' + playerWins + 'to ' + computerWins);
        }
        else if (winner === 'computer') {
            computerWins ++;
            console.log('Player chose ' + playerMove + ' and Computer chose ' + computerMove);
            console.log('Computer wins this round');
            console.log('The score is currently ' + playerWins + 'to ' + computerWins);
        }
        else if (winner === 'tie') {
            computerWins ++;
            playerWins ++;
            console.log('Player chose ' + playerMove + ' and Computer chose ' + computerMove);
            console.log('This round is a tie');
            console.log('The score is currently ' + playerWins + ' to ' + computerWins);
        }
    }
    return [playerWins, computerWins];
}

playToFive()