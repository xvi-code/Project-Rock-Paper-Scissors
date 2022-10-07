// Play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’

let playerScore = 0
let compScore = 0 

function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)]
}

// Write a function that plays a single round of Rock Paper Scissors. 
// The function should take two parameters - the playerSelection and computerSelection - 
// and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

function playRound (playerSelection, computerSelection) {
    // This can be shorten to the following
    // if (playerSelection === computerSelection) {
    //     return `You tied! You both picked ${playerSelection}!`
    // }
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'You tied! You both picked rock!'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++
        return 'You lose! Paper beats rock!'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        return 'You win! Rock beats scissors!'
    } else if (playerSelection === 'paper' && computerSelection === 'paper]') {
        return 'You tied! You both picked paper!'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        return 'You win! Paper beats rock!'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++
        return 'You lose! Scissors beats paper!'
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'You tied! You both picked scissors!'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore++
        return 'You lose! Rock beats scissors!'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        return 'You win! Scissors beats paper!'
    }
}

const playerSelection = "rock"

// Write a NEW function called game(). 
// Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

function game () {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose what to throw', 'rock, paper or scissors?').toLowerCase()
        const computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection)
     }

    if (playerScore > compScore) {
        return 'You beat the computer!'
    } else if (playerScore < compScore) {
        return 'You lost to the computer!'
    } else {
        return 'You tied with the computer! Challenge again!'
    }
}

console.log(game())



